import"./chunk-VBFW7A5V.js";var e=`<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    #combobox
>
    <nui-select-v2-option *ngFor="let option of options" [value]="option">
        <div class="d-flex align-items-center">
            <span [nuiComboboxV2OptionHighlight]="option"></span>
        </div>
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
`;export{e as default};
