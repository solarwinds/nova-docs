import"./chunk-VBFW7A5V.js";var t=`<b>Setting value using <code>value</code> input</b>
<nui-combobox-v2 [value]="items[0]" placeholder="Select Item" i18n-placeholder>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-combobox-v2>

<br />

<b>Setting value using <code>FormControl</code></b>
<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-combobox-v2>
`;export{t as default};
