import { Location } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private location: Location) {}

  public getPath(): string {
    return this.location.path(false);
  }

  public getHash(): string {
    const path = this.location.path(true);
    return path.replace(/^[^#]*#?\/?/, "");
  }

  public getAppPath(): string[] {
    return this.getHash().split("/");
  }

  public formatDocPath({
    root = `${this.getPath()}#`,
    project,
    branch,
    resetSuffix = false,
  }: {
    root?: string;
    project: string;
    branch: string;
    resetSuffix?: boolean;
  }): string {
    const newPath = resetSuffix
      ? [project, branch]
      : [project, branch, ...this.getAppPath().slice(2)];
    return [root, ...newPath].join("/");
  }
}
