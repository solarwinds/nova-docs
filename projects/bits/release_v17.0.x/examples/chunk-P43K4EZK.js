import"./chunk-XR34LRGE.js";var e=`<form [formGroup]="fancyForm">
    <nui-form-field
        caption="Radio Group"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['radioGroup']"
    >
        <nui-radio-group
            id="input-radioGroup"
            formControlName="radioGroup"
            name="vegetable"
            required
        >
            <nui-radio *ngFor="let vegetable of vegetables" [value]="vegetable">
                {{ vegetable }}
            </nui-radio>
        </nui-radio-group>
        <nui-validation-message for="required" i18n>
            This is required. C'mon
        </nui-validation-message>
    </nui-form-field>
</form>
`;export{e as default};
