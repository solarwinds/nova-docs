import"./chunk-XR34LRGE.js";var i=`<form [formGroup]="reactiveForm">
    <nui-form-field
        class="d-block mb-4"
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
<div class="btn-group">
    <button nui-button type="button" (click)="onAddValidators()" i18n>
        Add Validators
    </button>
    <button nui-button type="button" (click)="onTouch()" i18n>Touch</button>
    <button nui-button type="button" (click)="onValueChange()" i18n>
        Value Change
    </button>
    <button nui-button type="button" (click)="onStatusChange()" i18n>
        Status Change
    </button>
    <button nui-button type="button" (click)="onReset()" i18n>Reset</button>
</div>
`;export{i as default};
