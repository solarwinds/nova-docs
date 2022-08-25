import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";

import { OptionValueType, ToastService } from "@nova-ui/bits";

import { environment } from "../../environments/environment";
import { AppService } from "../../services/app.service";
import { LocationService } from "../../services/location.service";

export interface IProject {
  branches: readonly IBranch[];
  name: string;
}

export interface IBranch {
  project: string;
  name: string;
}

const fallbackProjectsData: readonly IProject[] = Object.freeze([
  {
    name: "bits",
    branches: [{ project: "bits", name: "main" }],
  },
  {
    name: "charts",
    branches: [{ project: "charts", name: "main" }],
  },
  {
    name: "dashboards",
    branches: [{ project: "dashboards", name: "main" }],
  },
]);

const firstOption = (
  value: OptionValueType | OptionValueType[]
): OptionValueType => (Array.isArray(value) ? value[0] ?? null : value);

const optionValueToString = (value: OptionValueType): string =>
  typeof value === "string" ? value : value?.id ?? "";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(
    private appService: AppService,
    private toastService: ToastService,
    private locationService: LocationService
  ) {}

  public projects: readonly IProject[] = [];
  public activeProject?: IProject;
  public selectedBranch = "";

  @Output() emitSelectedUrl = new EventEmitter<string>();
  @Output() emitParsedUrl = new EventEmitter<string>();

  @HostListener("window:hashchange", ["$event"])
  public onHashChange(): void {
    if (this.projects.length) {
      this.pickProjectByUrl(this.locationService.getAppPath());
    }
  }

  public ngOnInit(): void {
    this.loadProjects();
  }

  public onSelectBranch(selected: OptionValueType | OptionValueType[]): void {
    if (!this.activeProject) {
      return;
    }
    const branch = optionValueToString(firstOption(selected));
    this.openDocs(this.activeProject, branch);
  }

  public openDocs(
    project: IProject | undefined,
    branchName: string = this.selectedBranch
  ): void {
    const resetSuffix = this.activeProject?.name !== project?.name;
    this.activeProject = project;
    this.selectedBranch = branchName;
    if (!project || !branchName) {
      return;
    }
    const url = this.locationService.formatDocPath({
      root: environment.apiUrl,
      project: project.name,
      branch: branchName,
      resetSuffix,
    });
    this.emitSelectedUrl.emit(url);
  }

  private async loadProjects(): Promise<void> {
    try {
      const projects = await this.appService.getProjects();
      this.projects = projects;
      this.setActiveProject();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      this.toastService.error({
        title: message,
      });
      this.projects = fallbackProjectsData;
      this.setActiveProject();
    }
  }

  private setActiveProject(): void {
    const appPath = this.locationService.getAppPath();
    if (!appPath.length) {
      this.setDefaultProject();
    } else {
      this.pickProjectByUrl(appPath);
    }
  }

  private setDefaultProject(): void {
    const projects = this.projects;
    const activeProject = projects[0];
    const selectedBranch = activeProject?.branches[0]?.name ?? "";
    this.openDocs(activeProject, selectedBranch);
  }

  private pickProjectByUrl(appPath: readonly string[]): void {
    const projects = this.projects;
    const [projectId, branchId, ...path] = appPath;
    const activeProject =
      projects.find((project: IProject) => project.name === projectId) ??
      projects[0];
    if (!activeProject) {
      this.openDocs(undefined, undefined);
      return;
    }
    const selectedBranch =
      activeProject?.branches.find(
        (branch: IBranch) => branch.name === branchId
      )?.name ??
      activeProject?.branches[0]?.name ??
      "";
    const convertedUrl = this.locationService.formatDocPath({
      root: environment.apiUrl,
      project: activeProject.name,
      branch: selectedBranch,
    });
    this.emitParsedUrl.emit(convertedUrl);
    this.openDocs(activeProject, selectedBranch);
  }
}
