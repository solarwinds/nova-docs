import"./chunk-XR34LRGE.js";var e=`<form
    [formGroup]="fancyForm"
    (submit)="onSubmit(fancyForm)"
    class="nui-edge-definer"
>
    <nui-form-field
        class="d-block mb-4"
        caption="Nickname"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['nickname']"
    >
        <nui-textbox formControlName="nickname"></nui-textbox>
        <nui-validation-message for="required" i18n>
            This is required
        </nui-validation-message>
    </nui-form-field>
    <nui-first-custom-form-example
        (formReady)="formInitialized('firstForm', $event)"
    ></nui-first-custom-form-example>
    <nui-second-custom-form-example
        (formReady)="formInitialized('secondForm', $event)"
    ></nui-second-custom-form-example>
    <pre>fancyForm.valid = {{ fancyForm.valid }}</pre>
</form>
`;export{e as default};
