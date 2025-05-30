import"./chunk-VBFW7A5V.js";var l=`<div class="d-flex flex-column">
    <div class="d-flex flex-row mb-5">
        <span [nuiTooltip]="tooltip" [nuiTooltipDisabled]="isDisabled" i18n>
            Hover over me!
        </span>
    </div>
    <div class="d-flex flex-row">
        <nui-switch
            [value]="isDisabled"
            (valueChange)="onValueChanged($event)"
            i18n
        >
            {{ message }}
        </nui-switch>
    </div>
</div>
`;export{l as default};
