import { ComponentFixture, TestBed } from "@angular/core/testing";

import {
  IActiveToast,
  NuiButtonModule,
  NuiSelectV2Module,
  ToastService,
} from "@nova-ui/bits";
import { environment } from "src/environments/environment";

import { AppService } from "../../services/app.service";
import { LocationService } from "../../services/location.service";
import { HeaderComponent, IProject } from "./header.component";

describe(`${HeaderComponent.name} >`, () => {
  const mockedProjects: readonly IProject[] = Object.freeze([
    {
      name: "bits",
      branches: [
        { project: "bits", name: "main" },
        { project: "bits", name: "release_v12.x" },
        { project: "bits", name: "release_v11.x" },
        { project: "bits", name: "release_v11.4.x" },
        { project: "bits", name: "release_v11.2.x" },
        { project: "bits", name: "release_v9.x" },
        { project: "bits", name: "test" },
      ],
    },
    {
      name: "charts",
      branches: [
        { project: "charts", name: "main" },
        { project: "charts", name: "release_v12.x" },
        { project: "charts", name: "release_v11.x" },
        { project: "charts", name: "release_v11.4.x" },
        { project: "charts", name: "release_v11.2.x" },
        { project: "charts", name: "release_v9.x" },
        { project: "charts", name: "test" },
      ],
    },
    {
      name: "dashboards",
      branches: [
        { project: "dashboards", name: "main" },
        { project: "dashboards", name: "release_v12.x" },
        { project: "dashboards", name: "release_v11.x" },
        { project: "dashboards", name: "release_v11.4.x" },
        { project: "dashboards", name: "release_v11.2.x" },
        { project: "dashboards", name: "release_v9.x" },
      ],
    },
  ]);

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let locationStub: jasmine.SpyObj<LocationService>;

  const stubAppPath = ["bits", "test", "and", "some"];
  const stubFormattedUri = "#/formatted";

  beforeEach(async () => {
    const activeToastStub = jasmine.createSpyObj<IActiveToast>("IActiveToast", [
      "toastRef",
    ]);
    const toastServiceStub = jasmine.createSpyObj<ToastService>(
      "ToastService",
      ["error"]
    );
    toastServiceStub.error.and.returnValue(activeToastStub);

    const appServiceStub = jasmine.createSpyObj<AppService>("AppService", [
      "getProjects",
    ]);
    appServiceStub.getProjects.and.resolveTo(mockedProjects);

    locationStub = jasmine.createSpyObj<LocationService>("LocationService", [
      "getAppPath",
      "formatDocPath",
    ]);
    locationStub.getAppPath.and.returnValue(stubAppPath);
    locationStub.formatDocPath.and.returnValue(stubFormattedUri);

    await TestBed.configureTestingModule({
      imports: [NuiSelectV2Module, NuiButtonModule],
      declarations: [HeaderComponent],
      providers: [
        { provide: AppService, useValue: appServiceStub },
        { provide: ToastService, useValue: toastServiceStub },
        { provide: LocationService, useValue: locationStub },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe("when initialized", () => {
    it("should assign projects", async () => {
      expect(component.projects).toEqual(mockedProjects);
    });

    it("should assign project", () => {
      expect(component.activeProject?.name).toBeTruthy();
    });

    it("should assign branch", () => {
      expect(component.selectedBranch).toBeTruthy();
    });

    it("should assign project & branch from url", async () => {
      expect(component.activeProject?.name).toBe("bits");
      expect(component.selectedBranch).toBe("test");
    });
  });

  describe("after selection change", () => {
    it("should emit uri formatted by location service", async () => {
      expect(component.activeProject?.name).toBe("bits");
      const emitted: string[] = [];
      const subscription = component.emitSelectedUrl.subscribe((uri) =>
        emitted.push(uri)
      );
      locationStub.formatDocPath.calls.reset();
      component.onSelectBranch("test");
      subscription.unsubscribe();
      expect(locationStub.formatDocPath).toHaveBeenCalledOnceWith({
        root: environment.apiUrl,
        project: "bits",
        branch: "test",
        resetSuffix: false,
      });
      expect(emitted).toEqual([stubFormattedUri]);
    });
  });

  describe(".openDocs(project)", () => {
    it("does not reset suffix when project does not change", () => {
      locationStub.formatDocPath.calls.reset();
      component.openDocs({ name: "bits", branches: [] }, "test");
      expect(locationStub.formatDocPath).toHaveBeenCalledOnceWith({
        root: environment.apiUrl,
        project: "bits",
        branch: "test",
        resetSuffix: false,
      });
    });
    it("does reset suffix when project does change", () => {
      locationStub.formatDocPath.calls.reset();
      component.openDocs({ name: "charts", branches: [] }, "test");
      expect(locationStub.formatDocPath).toHaveBeenCalledOnceWith({
        root: environment.apiUrl,
        project: "charts",
        branch: "test",
        resetSuffix: true,
      });
    });
  });
});
