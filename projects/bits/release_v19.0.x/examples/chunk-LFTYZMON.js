import"./chunk-VBFW7A5V.js";var o=`<form [formGroup]="myForm" (submit)="onSubmit()">
    <div class="form-group">
        <nui-select
            placeholder="Select item"
            id="nui-demo-basic-select-reactive-form"
            formControlName="item"
            [isInErrorState]="
                myForm.controls['item'].invalid &&
                myForm.controls['item'].touched
            "
            [itemsSource]="dataset.items"
            (changed)="valueChange($event)"
        ></nui-select>
        <button nui-button type="submit" class="mt-1" i18n>Submit</button>
    </div>
</form>
`;export{o as default};
