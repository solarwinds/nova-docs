import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProject} from "../app/header/header.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private PROJECT_URL = "/api/projects";

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Array<IProject>> {
    return this.http.get<IProject[]>(this.PROJECT_URL);
  }
}
