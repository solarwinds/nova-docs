import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoggerService } from "@nova-ui/bits";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public selectedUrl = ``;
  public parsedUrl = ``;

  public constructor(private logger: LoggerService) {}

  public setSelectedUrl(url: string): void {
    if (this.selectedUrl === url) {
      return;
    }
    this.logger.debug("setSelectedUrl", url);
    this.selectedUrl = url;
  }

  public setParsedUrl(url: string): void {
    if (this.parsedUrl === url) {
      return;
    }
    this.logger.debug("setParsedUrl", url);
    this.parsedUrl = url;
  }
}
