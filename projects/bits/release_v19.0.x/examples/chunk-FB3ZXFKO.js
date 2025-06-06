import"./chunk-VBFW7A5V.js";var o=`<p>Value: {{ combobox.value }}</p>
<p>FormControl.value: {{ comboboxControl.value }}</p>
<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    #combobox
>
    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <span [nuiComboboxV2OptionHighlight]="item"></span>
    </nui-select-v2-option>
</nui-combobox-v2>

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

<nui-divider size="medium"></nui-divider>

<p>Value: {{ multiselect.value }}</p>
<p>FormControl.value: {{ multiselect.value }}</p>
<nui-combobox-v2
    [formControl]="multiselectControl"
    [multiselect]="true"
    #multiselect
>
    <ng-container selectedItems>
        <nui-chip
            nuiMarkAsSelectedItem
            class="ml-2"
            *ngFor="let option of multiselect?.value"
            closeButtonTooltip="Remove"
            [item]="convertToChip(option)"
            (remove)="multiselect.deselectItem(option)"
            (mouseup)="$event.stopPropagation()"
        >
        </nui-chip>
    </ng-container>

    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <span [nuiComboboxV2OptionHighlight]="item"></span>
    </nui-select-v2-option>
</nui-combobox-v2>
<button
    nui-button
    type="button"
    displayStyle="action"
    i18n
    (click)="setMultiselectItems(0)"
>
    Set items: 1, 2, 3, 4
</button>
<button
    nui-button
    type="button"
    displayStyle="action"
    i18n
    (click)="setMultiselectItems(1)"
>
    Set items: 3, 4, 5, 6
</button>
`;export{o as default};
