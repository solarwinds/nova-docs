import"./chunk-VBFW7A5V.js";var t=`<nui-combobox-v2
    [placeholder]="combobox.selectedOptions.length ? '' : placeholder"
    [formControl]="comboboxControl"
    [multiselect]="true"
    #combobox
>
    <ng-container selectedItems>
        <nui-chip
            nuiMarkAsSelectedItem
            class="ml-2"
            *ngFor="let option of combobox?.value"
            closeButtonTooltip="Remove"
            [item]="convertToChip(option)"
            (remove)="combobox.deselectItem(option)"
            (mouseup)="$event.stopPropagation()"
        >
        </nui-chip>
    </ng-container>

    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <span class="mr-3" [nuiComboboxV2OptionHighlight]="item"></span>
    </nui-select-v2-option>
</nui-combobox-v2>

<button
    nui-button
    type="button"
    displayStyle="action"
    i18n
    (click)="setModel()"
>
    Set model
</button>
`;export{t as default};
