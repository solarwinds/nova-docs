import"./chunk-VBFW7A5V.js";var o=`<button
    nui-button
    #toggleButton
    type="button"
    [isEmpty]="false"
    (click)="overlay.toggle()"
    i18n
>
    Toggle the Overlay
</button>

<nui-overlay #overlay [toggleReference]="toggleButton['el'].nativeElement">
    <img
        src="https://cdn.stocksnap.io/img-thumbs/960w/thumbs%20up-hand_QUWPLI693K.jpg"
        alt="Thumbs up"
        class="w-100"
    />
</nui-overlay>
`;export{o as default};
