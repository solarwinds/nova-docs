import"./chunk-XR34LRGE.js";var l=`<b>Accessing value using <code>value</code></b>
<nui-combobox-v2
    #comboboxValueExample
    placeholder="Select Item"
    i18n-placeholder
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-combobox-v2>
<p class="my-3">You selected: {{ comboboxValueExample.value }}</p>

<b>Accessing value using <code>valueSelected</code> output</b>
<nui-combobox-v2
    #comboboxValueSelectedExample
    placeholder="Select Item"
    i18n-placeholder
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-combobox-v2>
<p class="my-3">You selected: {{ comboboxValueSelectedValue }}</p>

<b>Accessing value using <code>valueChanged</code> output</b>
<nui-combobox-v2
    #comboboxValueChangedExample
    placeholder="Select Item"
    i18n-placeholder
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-combobox-v2>
<p class="my-3">You typed: {{ comboboxValueChangedValue }}</p>
`;export{l as default};
