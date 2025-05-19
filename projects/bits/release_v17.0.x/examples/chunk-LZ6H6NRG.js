import"./chunk-VBFW7A5V.js";var t=`<button
    class="lead"
    nui-button
    type="button"
    id="nui-switch-toggle-button"
    (click)="isDisabled = !isDisabled"
    displayStyle="primary"
    i18n
>
    Toggle Enable
</button>
<nui-switch
    id="nui-switch-disabled-example"
    [(value)]="isOn"
    [disabled]="isDisabled"
    >{{ isOn ? "On" : "Off" }}
</nui-switch>
`;export{t as default};
