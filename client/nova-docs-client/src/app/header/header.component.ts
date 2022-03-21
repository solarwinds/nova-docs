import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
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

  @HostListener('window:hashchange', ['$event'])
  private onHashChange(e: any): void {
    if(this.projects.length) {
      this.parseBrowserUrl(this.projects);
    }
  }

  @ViewChild("select") public select: SelectV2Component;

  @Output() emitSelectedUrl = new EventEmitter<string>();
  @Output() emitParsedUrl = new EventEmitter<string>();

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
    const url = `${environment.apiUrl}/${project.name}/${branchName}`;
    this.emitSelectedUrl.emit(url);
  }

  private getProjects(): void {
    this.appService.getProjects().subscribe(projects => {
        this.projects = projects;
        this.setActiveProject(projects);
      },
      error => {
        this.toastService.error({title: error.message});
        this.projects = [
          {"name":"bits","branches":[
            {"project":"bits","name":"release_v12.x"},
            {"project":"bits","name":"release_v11.x"},
            {"project":"bits","name":"release_v11.4.x"},
            {"project":"bits","name":"release_v11.2.x"},
            {"project":"bits","name":"release_v9.x"},
            {"project":"bits","name":"main"}]},
          {"name":"charts","branches":[
            {"project":"charts","name":"release_v12.x"},
            {"project":"charts","name":"release_v11.x"},
            {"project":"charts","name":"release_v11.4.x"},
            {"project":"charts","name":"release_v11.2.x"},
            {"project":"charts","name":"release_v9.x"},
            {"project":"charts","name":"main"}]},
          {"name":"dashboards","branches":[
            {"project":"dashboards","name":"release_v12.x"},
            {"project":"dashboards","name":"release_v11.x"},
            {"project":"dashboards","name":"release_v11.4.x"},
            {"project":"dashboards","name":"release_v11.2.x"},
            {"project":"dashboards","name":"release_v9.x"},
            {"project":"dashboards","name":"main"}]}]
        this.setActiveProject(this.projects);
      });
  }

  private setActiveProject(projects: Array<IProject>): void {
    if (!location.hash || location.hash === "#/" || location.hash === "#") {
      this.activeProject = projects[0];
      this.selectedBranch = this.activeProject.branches[0].name;
      this.openDocs(this.activeProject, this.selectedBranch);
    } else {
      this.parseBrowserUrl(projects)
    }
  }

  private parseBrowserUrl(projects: Array<IProject>): void | undefined {
    const arrayFromHash = location.hash.split('/').slice(1);
    this.activeProject = projects.find((project: IProject) => project.name === arrayFromHash[0]) || projects[0];
    this.selectedBranch = this.activeProject.branches.find((branch: IBranch) => branch.name === arrayFromHash[1])?.name || this.activeProject.branches[0].name;
    arrayFromHash.splice(0,2, this.activeProject.name, this.selectedBranch);
    const convertedUrl = `${window.location.origin}/${arrayFromHash.join('/')}`;
    this.emitParsedUrl.emit(convertedUrl);
  }
}
