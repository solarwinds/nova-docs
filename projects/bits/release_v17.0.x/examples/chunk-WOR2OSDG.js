import"./chunk-XR34LRGE.js";var i=`<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    [overlayConfig]="overlayConfig"
    [syncWidth]="false"
    #combobox
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <span [nuiComboboxV2OptionHighlight]="item"></span>
    </nui-select-v2-option>
</nui-combobox-v2>
`;export{i as default};
