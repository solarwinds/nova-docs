import"./chunk-VBFW7A5V.js";var o=`<div class="d-flex">
    <button nui-button #toggleButton type="button" class="mr-5" i18n>
        Overlay component Appears Here
    </button>
    <button nui-button type="button" (click)="popup.show()" i18n>Show</button>
    <button nui-button type="button" (click)="popup.hide()" i18n>Hide</button>
    <button nui-button type="button" (click)="popup.toggle()" i18n>
        Toggle
    </button>
</div>

<nui-overlay #popup [toggleReference]="toggleButton['el'].nativeElement">
    <img
        src="https://cdn.stocksnap.io/img-thumbs/960w/thumbs%20up-hand_QUWPLI693K.jpg"
        alt="Thumbs up"
        class="w-100"
    />
</nui-overlay>
`;export{o as default};
