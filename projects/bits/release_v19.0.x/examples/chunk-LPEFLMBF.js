import"./chunk-VBFW7A5V.js";var i=`<nui-combobox-v2
    placeholder="Select Item"
    i18n-placeholder
    [formControl]="comboboxControl"
    [displayWith]="displayFn"
    #combobox
>
    <ng-container *ngFor="let itemGroup of items; let last = last">
        <nui-select-v2-option-group>
            <span class="nui-select-v2-option-group--header">{{
                itemGroup.header
            }}</span>
            <nui-select-v2-option
                *ngFor="let item of itemGroup.items"
                [value]="item"
            >
                <span [nuiComboboxV2OptionHighlight]="item.name"></span>
            </nui-select-v2-option>
            <nui-divider *ngIf="!last" size="extra-small"></nui-divider>
        </nui-select-v2-option-group>
    </ng-container>
</nui-combobox-v2>
`;export{i as default};
