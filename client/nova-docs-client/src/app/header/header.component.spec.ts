import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HeaderComponent, IProject} from './header.component';
import {AppService} from "../../services/app.service";
import {BehaviorSubject, Observable} from "rxjs";
import {NuiButtonModule, NuiSelectV2Module, SelectV2Component, ToastService} from "@nova-ui/bits";
import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'nui-select-v2',
  template: '',
  providers: [
    {
      provide: SelectV2Component,
      useClass: SelectV2StubComponent
    }
  ]
})
export class SelectV2StubComponent {
  @Output() newItemEvent = new EventEmitter<string>();
}



describe('HeaderComponent >', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockedProjects = [
    {"name":"bits","branches":[{"project":"bits","name":"release_v11.x"},{"project":"bits","name":"release_v11.4.x"},{"project":"bits","name":"release_v11.2.x"},{"project":"bits","name":"release_v9.x"},{"project":"bits","name":"main"}]},
    {"name":"charts","branches":[{"project":"charts","name":"release_v11.x"},{"project":"charts","name":"release_v11.4.x"},{"project":"charts","name":"release_v11.2.x"},{"project":"charts","name":"release_v9.x"},{"project":"charts","name":"main"}]},
    {"name":"dashboards","branches":[{"project":"dashboards","name":"release_v11.x"},{"project":"dashboards","name":"release_v11.4.x"},{"project":"dashboards","name":"release_v11.2.x"},{"project":"dashboards","name":"release_v9.x"},{"project":"dashboards","name":"main"}]}]
  let toastServiceStub: Partial<ToastService>;

   beforeEach(async () => {
     class appServiceStub implements Partial<AppService>{
      public getProjects(): Observable<Array<IProject>> {
        return new BehaviorSubject<Array<IProject>>(mockedProjects);
      }
    }

    await TestBed.configureTestingModule({
      imports: [NuiSelectV2Module, NuiButtonModule],
      declarations: [ HeaderComponent ],
      providers: [ { provide: AppService, useClass: appServiceStub },
                   { provide: ToastService, useValue: toastServiceStub },
                   SelectV2Component ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should assign projects', () => {
    expect(component.projects).toEqual(mockedProjects);
  })

  it('should assign project', () => {
    expect(component.activeProject.name).toBeTruthy();
  })

  it('should assign branch', () => {
    expect(component.selectedBranch).toBeTruthy();
  })

  // it('should open particular project', () => {
  //   component.openDocs(mockedProjects[0])
  //   expect(component.activeProject).toEqual(mockedProjects[0]);
  // })
});
