import"./chunk-VBFW7A5V.js";var i=`<form [formGroup]="myForm" (submit)="onSubmit()">
    <div class="form-group">
        <nui-message
            [allowDismiss]="true"
            type="critical"
            *ngIf="
                !myForm.controls['checkboxGroup'].valid &&
                myForm.controls['checkboxGroup'].touched
            "
        >
            <b i18n>Select minimum 3 checkboxes!</b>
        </nui-message>
        <nui-checkbox-group
            id="nui-demo-checkbox-group-in-form"
            formControlName="checkboxGroup"
            name="vegetable"
            required
        >
            <nui-checkbox
                *ngFor="let vegetable of vegetables"
                [value]="vegetable"
            >
                {{ vegetable }}
            </nui-checkbox>
        </nui-checkbox-group>
    </div>
    <button
        nui-button
        type="submit"
        [disabled]="myForm.disabled || myForm.controls['checkboxGroup'].invalid"
        i18n
    >
        Submit
    </button>
</form>
`;export{i as default};
