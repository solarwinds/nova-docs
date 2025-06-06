import"./chunk-VBFW7A5V.js";var o=`<div class="row">
    <div class="col customContainer">
        <div>Overlay component with Custom Container (via .class)</div>
        <button
            nui-button
            #toggleButton2
            type="button"
            (click)="overlay1.toggle()"
            i18n
        >
            Click
        </button>
    </div>
    <div class="col" #customContainerId>
        <div>Overlay component with Custom Container (via ElementRef)</div>
        <button
            nui-button
            #toggleButton1
            type="button"
            (click)="overlay2.toggle()"
            i18n
        >
            Click
        </button>
    </div>
</div>

<nui-overlay
    #overlay1
    [toggleReference]="toggleButton2['el'].nativeElement"
    [customContainer]="'.customContainer'"
    [overlayConfig]="overlayConfig"
>
    <ng-container *ngFor="let item of itemsSource">
        <nui-overlay-item class="list-item">{{ item }}</nui-overlay-item>
    </ng-container>
</nui-overlay>

<nui-overlay
    #overlay2
    [toggleReference]="toggleButton1['el'].nativeElement"
    [customContainer]="customContainer"
    [overlayConfig]="overlayConfig"
>
    <ng-container *ngFor="let item of itemsSource">
        <nui-overlay-item class="list-item">{{ item }}</nui-overlay-item>
    </ng-container>
</nui-overlay>
`;export{o as default};
