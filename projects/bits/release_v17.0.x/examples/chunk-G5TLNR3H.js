import"./chunk-XR34LRGE.js";var o=`<button nui-button #toggleButton type="button" (click)="popup.toggle()" i18n>
    Overlay component with Custom Styles
</button>

<nui-overlay
    #popup
    [toggleReference]="toggleButton['el'].nativeElement"
    [overlayConfig]="config"
>
    <ng-container *ngFor="let item of itemsSource">
        <nui-overlay-item class="list-item">{{ item }}</nui-overlay-item>
    </ng-container>
</nui-overlay>
`;export{o as default};
