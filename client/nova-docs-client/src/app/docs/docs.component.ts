import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { LoggerService } from "@nova-ui/bits";

@Component({
  selector: "app-docs",
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent implements OnChanges {
  @ViewChild("iframe", { static: true })
  private iframe?: ElementRef<HTMLIFrameElement>;

  @Input() public selectedUrl = "";
  @Input() public parsedUrl = "";

  public iframeUrl = "";

  constructor(private logger: LoggerService) {}

  private withActiveFrame(
    callback: (elFrame: HTMLIFrameElement, location: Location) => void
  ): void {
    if (!this.iframe) {
      return;
    }

    const elFrame = this.iframe.nativeElement;
    const location = elFrame.contentWindow?.location;

    if (!location) {
      return;
    }

    try {
      callback(elFrame, location);
    } catch (error) {
      this.logger.error(error);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.withActiveFrame((elFrame, location) => {
      if (changes.parsedUrl && this.compareUrls(changes.parsedUrl, location)) {
        location.replace(changes.parsedUrl.currentValue);
      }
      if (
        changes.selectedUrl &&
        this.compareUrls(changes.selectedUrl, location)
      ) {
        location.href = changes.selectedUrl.currentValue;
      }
    });
  }

  public updateHash(): void {
    this.withActiveFrame((elFrame, location) => {
      const iframeLocation = location.href;
      const iframeLocationOrigin = location.origin;
      const iframeRoot = iframeLocation?.replace(iframeLocationOrigin, "");

      if (
        window.location.hash !== `#${iframeRoot}` &&
        iframeLocationOrigin &&
        iframeRoot !== "about:blank"
      ) {
        window.location.replace(`#${iframeRoot}`);
      }
    });
  }

  private compareUrls(url: SimpleChange, location: Location): boolean {
    return (
      url.previousValue !== url.currentValue &&
      url.currentValue !== location.href
    );
  }
}
