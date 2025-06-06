import"./chunk-VBFW7A5V.js";var e=`<nui-combobox-v2
    [placeholder]="combobox.selectedOptions.length ? '' : placeholder"
    [formControl]="comboboxControl"
    [isTypeaheadEnabled]="true"
    [multiselect]="true"
    [manualDropdownControl]="true"
    #combobox
>
    <ng-container selectedItems>
        <nui-chip
            nuiMarkAsSelectedItem
            class="ml-2"
            *ngFor="let option of combobox?.value"
            closeButtonTooltip="Remove"
            [item]="convertToChip(option)"
            (remove)="onChipRemoved(option)"
        >
        </nui-chip>
    </ng-container>

    <nui-select-v2-option *ngFor="let item of items" [value]="item">
        <div class="d-flex align-items-center">
            <span [nuiComboboxV2OptionHighlight]="item"></span>
        </div>
    </nui-select-v2-option>
</nui-combobox-v2>

<div class="ml-4 d-flex w-75">
    <button
        #show
        nui-button
        type="button"
        class="mr-3"
        (click)="showList($event)"
    >
        Show
    </button>

    <button
        #hide
        nui-button
        type="button"
        class="mr-3"
        (click)="hideList($event)"
    >
        Hide
    </button>

    <button
        #toggle
        nui-button
        type="button"
        class="mr-3"
        (click)="toggleList($event)"
    >
        Toggle
    </button>

    <div class="d-flex align-items-center">
        <nui-switch [(value)]="handleClicksOutside" i18n>
            Close on focus-out
        </nui-switch>
    </div>
</div>
`;export{e as default};
