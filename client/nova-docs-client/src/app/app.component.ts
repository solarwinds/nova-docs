import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public selectedUrl = ``;
  public parsedUrl = ``;

  public setSelectedUrl($event: string): void {
    this.selectedUrl = $event;
  }

  public setParsedUrl($event: string): void {
    this.parsedUrl = $event;
  }
}
