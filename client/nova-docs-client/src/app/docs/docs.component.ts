import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'nui-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {

  @ViewChild("iframe") private iframe: ElementRef;

  @Input() public url: string = "";

  constructor() {}

  public updateHash(): void {
    const iframeCopy = {...this.iframe}
    const iframeLocation = iframeCopy.nativeElement.contentWindow.location;

    window.location.href = `#${iframeLocation.href?.replace(iframeLocation.origin, '')}`;
  }
}
