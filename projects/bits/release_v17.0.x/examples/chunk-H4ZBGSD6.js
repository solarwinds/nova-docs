import"./chunk-XR34LRGE.js";var e=`<form [formGroup]="fancyForm" class="nui-edge-definer">
    <nui-form-field
        caption="Combobox"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls.combobox"
    >
        <nui-combobox-v2
            placeholder="Select Item"
            i18n-placeholder
            formControlName="combobox"
            #combobox
        >
            <nui-select-v2-option *ngFor="let item of items" [value]="item">
                <span [nuiComboboxV2OptionHighlight]="item"></span>
            </nui-select-v2-option>
        </nui-combobox-v2>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
</form>
`;export{e as default};
