import { HttpClientModule } from "@angular/common/http";
import { NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {
  LogLevel,
  NuiButtonModule,
  NuiEnvironment,
  NuiSelectV2Module,
  NuiToastModule,
} from "@nova-ui/bits";

import { environment } from "../environments/environment";
import { SafePipe } from "../pipes/safe.pipe";
import { AppService, AppServiceBackend } from "../services/app.service";
import { DocsComponent } from "./docs/docs.component";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";

const env = new NuiEnvironment();
env.logLevel = environment.production ? LogLevel.warn : LogLevel.debug;

@NgModule({
  declarations: [AppComponent, HeaderComponent, DocsComponent, SafePipe],
  imports: [
    BrowserModule,
    NuiSelectV2Module,
    NuiButtonModule,
    HttpClientModule,
    NuiToastModule,
  ],
  providers: [
    { provide: TRANSLATIONS_FORMAT, useValue: "xlf" },
    { provide: TRANSLATIONS, useValue: "" },
    {
      provide: AppService,
      useClass: AppServiceBackend,
    },
    {
      provide: NuiEnvironment,
      useValue: env,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
