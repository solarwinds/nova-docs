import { NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DocsComponent } from './docs/docs.component';
import {NuiButtonModule, NuiSelectV2Module} from "@nova-ui/bits";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    NuiSelectV2Module,
    NuiButtonModule,
    HttpClientModule,
  ],
  providers: [
    {provide: TRANSLATIONS_FORMAT, useValue: "xlf"},

    {provide: TRANSLATIONS, useValue: ""},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
