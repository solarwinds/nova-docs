import"./chunk-VBFW7A5V.js";var t=`<b>Accessing value using <code>value</code></b>
<nui-select-v2 #selectValueExample placeholder="Select Item" i18n-placeholder>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-select-v2>
<p class="my-3">You selected: {{ selectValueExample.value }}</p>

<b>Accessing value using <code>valueSelected</code> output</b>
<nui-select-v2
    #selectValueSelectedExample
    placeholder="Select Item"
    i18n-placeholder
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-select-v2>
<p class="my-3">You selected: {{ selectValueSelectedValue }}</p>
`;export{t as default};
