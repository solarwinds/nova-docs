import"./chunk-XR34LRGE.js";var e=`<nui-combobox-v2
    [isDisabled]="isComboboxDisabled"
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    [displayWith]="displayFn"
    class="w-50 d-inline-flex"
    #combobox
>
    <nui-select-v2-option
        *ngFor="let item of items"
        [value]="item"
        [isDisabled]="item.disabled"
    >
        <span class="mr-3" [nuiComboboxV2OptionHighlight]="item.name"></span>
    </nui-select-v2-option>
</nui-combobox-v2>

<nui-switch
    class="d-inline-flex"
    style="padding-left: 15px"
    [(value)]="isComboboxDisabled"
    i18n
>
    Toggle disabling
</nui-switch>
`;export{e as default};
