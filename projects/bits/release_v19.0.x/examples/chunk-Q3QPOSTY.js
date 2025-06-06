import"./chunk-VBFW7A5V.js";var o=`<form [formGroup]="reactiveForm">
    <nui-form-field
        caption="Email address"
        i18n-caption
        hint="Try to change value or remove everything"
        i18n-hint
        [control]="reactiveForm.controls['email']"
    >
        <nui-textbox formControlName="email" type="email"></nui-textbox>
        <nui-validation-message for="required" i18n>
            This is required
        </nui-validation-message>
        <nui-validation-message for="email" i18n>
            This should be a valid email
        </nui-validation-message>
    </nui-form-field>
</form>
`;export{o as default};
