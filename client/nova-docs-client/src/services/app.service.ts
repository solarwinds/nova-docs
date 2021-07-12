import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProject} from "../app/header/header.component";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = environment.production ? '' : environment.apiUrl;

  private PROJECT_URL: string = "/api/projects";

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Array<IProject>> {
    const url = this.apiUrl + this.PROJECT_URL
    return this.http.get<IProject[]>(url);
  }
}
