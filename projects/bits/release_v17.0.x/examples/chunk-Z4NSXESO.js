import"./chunk-XR34LRGE.js";var l=`<nui-select-v2
    [isDisabled]="isSelectDisabled"
    placeholder="Select Item"
    i18n-placeholder
    class="w-50 d-inline-flex"
>
    <nui-select-v2-option
        *ngFor="let item of items"
        [value]="item"
        [isDisabled]="item.disabled"
    >
        {{ item.name }}
    </nui-select-v2-option>
</nui-select-v2>

<nui-switch
    class="d-inline-flex"
    style="padding-left: 15px"
    [(value)]="isSelectDisabled"
    i18n
>
    Toggle disabling
</nui-switch>
`;export{l as default};
