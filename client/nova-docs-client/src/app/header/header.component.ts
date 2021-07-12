import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {AppService} from "../../services/app.service";
import {IToastService, SelectV2Component, ToastService} from "@nova-ui/bits";
import {environment} from "../../environments/environment";

export interface IProject {
  branches: Array<IBranch>;
  name: string;
}

export interface IBranch {
  project: string;
  name: string;
}

@Component({
  selector: 'nui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public projects: IProject[] = [];
  public activeProject: IProject = {} as IProject;
  public selectedBranch: string = "";
  private host = environment.production ? "" : environment.apiUrl;

  @ViewChild("select") public select: SelectV2Component;

  @Output() selectedUrl = new EventEmitter<string>();

  constructor(private appService: AppService,
              @Inject(ToastService) private toastService: IToastService) { };

  public ngOnInit(): void {
    this.getProjects();
  }

  public ngAfterViewInit(): void {
    if (this.select)  {
      this.select.valueSelected.subscribe((branch: string) => {
        this.openDocs(this.activeProject, branch);
      })
    }
  }

  public openDocs(project: IProject, branchName: string = this.selectedBranch): void {
    this.activeProject = project;
    this.selectedBranch = branchName;
    const url = `${this.host}/${project.name}/${branchName}`
    this.selectedUrl.emit(url);
  }

  private getProjects(): void {
    this.appService.getProjects().subscribe(projects => {
        this.projects = projects;
        this.setActiveProject(projects);
      },
      error => this.toastService.error({ title: error.message }));
  }

  private setActiveProject(projects: Array<IProject>): void {
    if (!location.hash || location.hash === "#/" || location.hash === "#") {
      this.activeProject = projects[0];
      this.selectedBranch = this.activeProject.branches[0].name;
      this.openDocs(this.activeProject, this.selectedBranch);
    } else {
      const arrayFromHash = location.hash.split('/');
      this.activeProject = projects.find((project: IProject) => project.name === arrayFromHash[1]) || projects[0];
      this.selectedBranch = this.activeProject.branches.find((branch: IBranch) => branch.name === arrayFromHash[2])?.name || this.activeProject.branches[0].name;
      const convertedUrl = `${window.location.origin}/${location.hash.replace("#/", "")}`;
      this.selectedUrl.emit(convertedUrl);
    }
  }
}
