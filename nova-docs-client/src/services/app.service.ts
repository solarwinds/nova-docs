import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

import { IProject } from "../app/header/header.component";
import { environment } from "../environments/environment";

@Injectable()
export abstract class AppService {
  public abstract getProjects(): Promise<ReadonlyArray<IProject>>;
}

@Injectable()
export class AppServiceBackend extends AppService {
  private PROJECT_URL = "/api/projects";

  constructor(private http: HttpClient) {
    super();
  }

  public async getProjects(): Promise<ReadonlyArray<IProject>> {
    const url = `${environment.apiUrl}${this.PROJECT_URL}`;
    return firstValueFrom(this.http.get<IProject[]>(url));
  }
}
