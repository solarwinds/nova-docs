import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'nui-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent implements OnChanges{
  @ViewChild("iframe", {static: true}) private iframe: ElementRef;

  @Input() public selectedUrl: string = "";
  @Input() public parsedUrl: string = "";

  public iframeUrl: string = "";

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.parsedUrl && this.compareUrls(changes.parsedUrl)) {
      if(this.iframe ){
        this.iframe.nativeElement.contentWindow.location.replace(changes.parsedUrl.currentValue);
      }
    }

    if(changes.selectedUrl && this.compareUrls(changes.selectedUrl)) {
      if(this.iframe){
        this.iframe.nativeElement.contentWindow.location.href = changes.selectedUrl.currentValue;
      }
    }
  }

  public updateHash(): void {
    const iframeLocation = this.iframe.nativeElement.contentWindow.location.href;
    const iframeLocationOrigin = this.iframe.nativeElement.contentWindow.location.origin;

    if(window.location.hash !==`#${iframeLocation?.replace(iframeLocationOrigin, '')}`) {
      window.location.replace(`${iframeLocationOrigin}#${iframeLocation?.replace(iframeLocationOrigin, '')}`);
    }
  }

  private compareUrls(url: SimpleChange): boolean {
    return url.previousValue !== url.currentValue && url.currentValue !== this.iframe?.nativeElement.contentWindow.location.href;
  }

}
