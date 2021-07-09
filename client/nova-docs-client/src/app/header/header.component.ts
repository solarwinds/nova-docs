import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {AppService} from "../../services/app.service";
import {SelectV2Component} from "@nova-ui/bits";
import {Observable} from "rxjs";

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
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public projects: IProject[] = [];
  public activeProject: IProject = {} as IProject;
  public selectedBranch: string = '';

  @ViewChild("select") private select?: SelectV2Component;

  @Output() selectedUrl = new EventEmitter<string>();

  constructor(private appService: AppService) { }

  public ngOnInit(): void {
    this.getProjects().subscribe(projects => {
      this.projects = projects;
      this.setActiveProject(projects);
    })
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
    const url = `${project.name}/${branchName}`
    this.selectedUrl.emit(url);
  }

  private getProjects(): Observable<Array<IProject>> {
    return this.appService.getProjects();
  }

  private setActiveProject(projects: Array<IProject>): void {
    if (!location.hash || location.hash === "#/") {
      this.activeProject = projects[0];
      this.selectedBranch = this.activeProject.branches[0].name;
      this.openDocs(this.activeProject, this.selectedBranch);
    } else {
      const hashArray = location.hash.split('/');
      this.activeProject = projects.find((project: IProject) => project.name === hashArray[1]) || projects[0];
      this.selectedBranch = hashArray[2];
      const convertedUrl = `${window.location.origin}/${location.hash.replace("#/", "")}`;
      this.selectedUrl.emit(convertedUrl);
    }
  }
}
