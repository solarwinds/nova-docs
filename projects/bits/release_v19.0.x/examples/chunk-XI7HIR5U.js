import"./chunk-VBFW7A5V.js";var n=`<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    [displayWith]="displayFn"
    [isTypeaheadEnabled]="false"
    (valueChanged)="onValueChange($event)"
    #combobox
>
    <nui-select-v2-option
        *ngFor="let item of filteredItems$ | async"
        [value]="item"
    >
        <span [nuiComboboxV2OptionHighlight]="item.name"></span>
    </nui-select-v2-option>
</nui-combobox-v2>
`;export{n as default};
