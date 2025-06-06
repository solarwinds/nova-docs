import"./chunk-VBFW7A5V.js";var m=`<form [formGroup]="myForm" (submit)="onSubmit()">
    <div class="form-group">
        <nui-combobox
            formControlName="item"
            [isInErrorState]="
                myForm.controls['item'].invalid &&
                myForm.controls['item'].touched
            "
            [itemsSource]="dataset.items"
            placeholder="Select item"
            i18n-placeholder
            required
        ></nui-combobox>
        <button nui-button type="submit" class="mt-1" i18n>Submit</button>
    </div>
</form>
`;export{m as default};
