import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'nui-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.less']
})
export class DocsComponent implements OnChanges {
  public safeUrl: SafeUrl = "" as SafeUrl;

  @ViewChild("iframe") private iframe?: ElementRef

  @Input() public url: string = "";

  constructor(public sanitizer: DomSanitizer) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes.url && !changes.firstChange) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
  }

  public updateHash(): void {
    window.location.href = `#${this.iframe?.nativeElement.contentWindow.location.href.replace(window.location.origin, '')}`;
  }
}
