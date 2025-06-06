import"./chunk-VBFW7A5V.js";var l=`<b>Setting value using <code>value</code> input</b>
<nui-select-v2 [value]="items[0]" placeholder="Select Item" i18n-placeholder>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-select-v2>

<br />

<b>Setting value using <code>FormControl</code></b>
<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="selectControl"
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-select-v2>
`;export{l as default};
