import"./chunk-XR34LRGE.js";var i=`<nui-combobox-v2
    class="d-inline-flex"
    [isInErrorState]="error"
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    style="width: 50%"
    #combobox
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <span class="mr-3" [nuiComboboxV2OptionHighlight]="item"></span>
    </nui-select-v2-option>
</nui-combobox-v2>

<nui-switch
    class="d-inline-flex"
    style="padding-left: 15px"
    [(value)]="error"
    i18n
>
    Toggle error state
</nui-switch>
`;export{i as default};
