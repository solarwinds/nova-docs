import"./chunk-VBFW7A5V.js";var n=`<button
    nui-button
    #toggleButton
    class="mr-3"
    type="button"
    [isEmpty]="false"
    (click)="overlay.toggle()"
    i18n
>
    Toggle the Overlay
</button>

<button
    nui-button
    type="button"
    [isEmpty]="false"
    (click)="setViewportMargin(30)"
    i18n
>
    Viewport margin 30px
</button>

<button
    nui-button
    type="button"
    [isEmpty]="false"
    (click)="setViewportMargin(100)"
    i18n
>
    Viewport margin 100px
</button>

<nui-overlay
    #overlay
    [toggleReference]="toggleButton['el'].nativeElement"
    [viewportMargin]="viewportMargin"
    [overlayConfig]="overlayConfig"
>
    <nui-menu-item *ngFor="let item of items">{{ item }}</nui-menu-item>
</nui-overlay>
`;export{n as default};
