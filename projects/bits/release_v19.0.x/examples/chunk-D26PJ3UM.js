import"./chunk-VBFW7A5V.js";var e=`<form [formGroup]="reactiveForm">
    <nui-form-field
        i18n-caption
        caption="Email address"
        i18n-hint
        hint="Try to change value or remove everything"
        [control]="reactiveForm.controls['email']"
    >
        <nui-textbox formControlName="email" type="email"></nui-textbox>

        <nui-custom-validation-message for="required">
            <div class="nui-validation-message" role="alert">
                <nui-icon
                    icon="status_critical"
                    iconSize="small"
                    aria-hidden="true"
                ></nui-icon>
                <span class="ml-1"><em i18n>This is required</em></span>
            </div>
        </nui-custom-validation-message>

        <nui-custom-validation-message for="email">
            <div class="nui-validation-message" role="alert">
                <nui-icon
                    icon="status_critical"
                    iconSize="small"
                    aria-hidden="true"
                ></nui-icon>
                <span class="ml-1"
                    ><em i18n>This should be a valid email</em></span
                >
            </div>
        </nui-custom-validation-message>
    </nui-form-field>
</form>
`;export{e as default};
