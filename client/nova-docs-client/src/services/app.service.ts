import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProject} from "../app/header/header.component";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _iframeUrl: string = '';

  constructor(private http: HttpClient) { }

  public getIframeUrl() {
    return this._iframeUrl;
  }

  public setIframeUrl(url: string) {
    this._iframeUrl = url;
  }

  getProjects() {
    return this.http.get<IProject[]>("/api/projects").pipe(

    );
  }

  getBranches() {

  }

}
