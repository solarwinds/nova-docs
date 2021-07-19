import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProject} from "../app/header/header.component";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private PROJECT_URL: string = "/api/projects";

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Array<IProject>> {
    const url = environment.apiUrl + this.PROJECT_URL;

    return this.http.get<IProject[]>(url);
  }
}
