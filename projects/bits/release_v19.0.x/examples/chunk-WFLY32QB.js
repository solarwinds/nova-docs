import"./chunk-VBFW7A5V.js";var n=`<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    [displayWith]="displayFn"
    #combobox
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <span class="mr-3" [nuiComboboxV2OptionHighlight]="item.name"></span>
        <nui-icon [icon]="item.icon"></nui-icon>
    </nui-select-v2-option>
</nui-combobox-v2>
`;export{n as default};
