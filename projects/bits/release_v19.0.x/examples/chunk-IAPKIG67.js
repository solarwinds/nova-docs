import"./chunk-VBFW7A5V.js";var i=`<button
    nui-button
    #toggleButton
    type="button"
    [isEmpty]="false"
    (click)="overlayWithStyles.toggle()"
    i18n
>
    With popup styles
</button>

<nui-overlay
    #overlayWithStyles
    [toggleReference]="toggleButton['el'].nativeElement"
    [overlayConfig]="overlayConfig"
>
    <div style="width: 300px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
    </div>
</nui-overlay>

<button
    nui-button
    #toggleButton2
    type="button"
    [isEmpty]="false"
    (click)="overlayNoStyles.toggle()"
    style="float: right"
    i18n
>
    No popup styles
</button>

<nui-overlay
    #overlayNoStyles
    [toggleReference]="toggleButton2['el'].nativeElement"
>
    <div style="width: 300px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
    </div>
</nui-overlay>
`;export{i as default};
