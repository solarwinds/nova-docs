import"./chunk-VBFW7A5V.js";var t=`<form [formGroup]="fancyForm" class="nui-edge-definer" style="max-width: 30%">
    <nui-form-field
        caption="Select"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['select']"
    >
        <nui-select-v2
            placeholder="Select Item"
            i18n-placeholder
            formControlName="select"
        >
            <nui-select-v2-option *ngFor="let item of items" [value]="item">{{
                item
            }}</nui-select-v2-option>
        </nui-select-v2>
        <nui-validation-message for="required">
            This field is required
        </nui-validation-message>
    </nui-form-field>
</form>
`;export{t as default};
