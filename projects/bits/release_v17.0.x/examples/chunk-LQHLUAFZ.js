import"./chunk-XR34LRGE.js";var m=`<form [formGroup]="myForm" (submit)="onSubmit()">
    <div class="form-group">
        <nui-checkbox
            name="nui-checkbox-validation-example"
            formControlName="checkbox"
            required
            i18n
        >
            Validation
        </nui-checkbox>
    </div>
    <button
        nui-button
        type="submit"
        [disabled]="myForm.controls['checkbox'].invalid"
        i18n
    >
        Submit
    </button>
</form>
`;export{m as default};
