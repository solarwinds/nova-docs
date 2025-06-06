import"./chunk-VBFW7A5V.js";var n=`<nui-content size="large">
    <p class="h2">{{ tabTitle }}</p>
    <p>{{ content }}</p>
    <form [formGroup]="dynamicForm">
        <nui-form-field
            class="d-block mb-4"
            caption="Password"
            i18n-caption
            [control]="dynamicForm.controls['password']"
            id="nui-form-field-dynamic-disabling"
        >
            <nui-textbox
                id="nui-form-field-dynamic-disabling-password"
                formControlName="password"
                (textChange)="onPasswordBlurred()"
            ></nui-textbox>
            <nui-validation-message for="required" i18n>
                This is required
            </nui-validation-message>
        </nui-form-field>
        <nui-form-field
            caption="Confirm Password"
            i18n-caption
            [control]="dynamicForm.controls['confirmPassword']"
        >
            <nui-textbox
                id="nui-form-field-dynamic-disabling-confirm-password"
                formControlName="confirmPassword"
            ></nui-textbox>
            <nui-validation-message for="required" i18n>
                This is required
            </nui-validation-message>
        </nui-form-field>
    </form>
</nui-content>
`;export{n as default};
