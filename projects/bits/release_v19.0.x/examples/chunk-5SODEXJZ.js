import"./chunk-VBFW7A5V.js";var r=`<form [formGroup]="myForm" (submit)="onSubmit()">
    <div class="form-group">
        <nui-time-picker
            formControlName="timePickerFormControl"
            [isInErrorState]="
                myForm.controls['timePickerFormControl'].invalid &&
                myForm.controls['timePickerFormControl'].touched
            "
            (timeChanged)="valueChange($event)"
        ></nui-time-picker>
        <button nui-button type="submit" class="mt-1" i18n>Submit</button>
    </div>
</form>
`;export{r as default};
