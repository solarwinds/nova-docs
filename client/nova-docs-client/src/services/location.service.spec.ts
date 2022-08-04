import { Location } from "@angular/common";
import { TestBed } from "@angular/core/testing";

import { LocationService } from "./location.service";

describe(`${LocationService.name}`, () => {
  let locationService: LocationService;
  let locationStub: jasmine.SpyObj<Location>;

  beforeEach(() => {
    locationStub = jasmine.createSpyObj<Location>("Location", ["path"]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Location,
          useValue: locationStub,
        },
      ],
    });
    locationService = TestBed.inject(LocationService);
  });

  const mockPath = (path: string) => {
    const [root = "", ...hash] = path.split("#");
    locationStub.path.and.callFake((includeHash = false) => {
      return includeHash ? [root, ...hash].join("#") : root;
    });
  };

  describe(".getPath()", () => {
    it("returns path without hash part", () => {
      mockPath("http://test/some/path");
      const result = locationService.getPath();
      expect(locationStub.path).toHaveBeenCalledOnceWith(false);
      expect(result).toBe("http://test/some/path");
    });
  });

  describe(".getHash()", () => {
    it("returns '' when no hash in path", () => {
      mockPath("http://test/some/path");
      const result = locationService.getHash();
      expect(locationStub.path).toHaveBeenCalledOnceWith(true);
      expect(result).toBe("");
    });
    it("returns hash part from path", () => {
      mockPath("http://test/some/path#with/hash");
      const result = locationService.getHash();
      expect(locationStub.path).toHaveBeenCalledOnceWith(true);
      expect(result).toBe("with/hash");
    });
  });

  describe(".getAppPath()", () => {
    it("returns hash part split by /", () => {
      mockPath("#1/2/3");
      const result = locationService.getAppPath();
      expect(locationStub.path).toHaveBeenCalledOnceWith(true);
      expect(result).toEqual(["1", "2", "3"]);
    });
  });

  describe(".formatDocPath(project, branch, reset)", () => {
    it("when reset false, replaces project and branch, keeps rest of path", () => {
      mockPath("test.site#/project/branch/and/some/more");
      const result = locationService.formatDocPath({
        project: "p2",
        branch: "b2",
      });
      expect(result).toBe("test.site#/p2/b2/and/some/more");
    });
    it("when reset false, replaces project and branch, keeps rest of path", () => {
      mockPath("test.site#/project/branch/and/some/more#anchor");
      const result = locationService.formatDocPath({
        root: "second.site",
        project: "p2",
        branch: "b2",
      });
      expect(result).toBe("second.site/p2/b2/and/some/more#anchor");
    });
  });
});
