import"./chunk-XR34LRGE.js";var l=`<p>Value: {{ select.value }}</p>
<p>FormControl.value: {{ selectControl.value }}</p>

<nui-select-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="selectControl"
    #select
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
        item
    }}</nui-select-v2-option>
</nui-select-v2>

<button
    nui-button
    type="button"
    displayStyle="action"
    i18n
    (click)="setItems(0)"
>
    Set items: 1, 2, 3, 4
</button>
<button
    nui-button
    type="button"
    displayStyle="action"
    i18n
    (click)="setItems(1)"
>
    Set items: 3, 4, 5, 6
</button>
`;export{l as default};
