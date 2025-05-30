import"./chunk-VBFW7A5V.js";var t=`<nui-combobox-v2
    [placeholder]="combobox.selectedOptions.length ? '' : 'Select Items'"
    [formControl]="comboboxControl"
    [multiselect]="true"
    #combobox
>
    <ng-container selectedItems>
        <nui-chip
            nuiMarkAsSelectedItem
            class="ml-2"
            *ngFor="let item of combobox?.value"
            closeButtonTooltip="Remove"
            [item]="convertToChip(item)"
            (remove)="combobox.deselectItem(item)"
            (mouseup)="$event.stopPropagation()"
        >
        </nui-chip>
    </ng-container>

    <nui-select-v2-option
        *ngFor="let option of options"
        [value]="option"
        class="d-flex align-items-center"
    >
        <span [nuiComboboxV2OptionHighlight]="option"></span>
    </nui-select-v2-option>

    <nui-overlay-item
        *ngIf="combobox.canCreateOption | async"
        class="nui-combobox-v2__create-option"
        (click)="createOption(combobox.inputValue)"
    >
        Create option "{{ combobox.inputValue }}"
    </nui-overlay-item>
    <div
        *ngIf="combobox.searchEmpty | async"
        class="nui-combobox-v2__empty-search"
        i18n
    >
        No other existing item available
    </div>
</nui-combobox-v2>
`;export{t as default};
