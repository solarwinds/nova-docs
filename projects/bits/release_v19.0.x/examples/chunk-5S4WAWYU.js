import"./chunk-VBFW7A5V.js";var n=`<form [formGroup]="fancyForm" class="nui-edge-definer">
    <nui-form-field
        class="d-block mb-4"
        caption="Password"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls.password"
    >
        <nui-textbox formControlName="password"></nui-textbox>
        <nui-validation-message for="required" i18n>
            This is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Confirm Password"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls.confirmPassword"
    >
        <nui-textbox formControlName="confirmPassword"></nui-textbox>
        <nui-validation-message for="required" i18n>
            This is required
        </nui-validation-message>
    </nui-form-field>
</form>
<pre>fancyForm.valid = {{ fancyForm.valid }}</pre>
`;export{n as default};
