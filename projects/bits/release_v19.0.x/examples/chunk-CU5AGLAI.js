import"./chunk-VBFW7A5V.js";var o=`<section class="demo-options-section">
    <nui-form-field caption="Date Picker" [control]="control">
        <nui-date-picker
            [formControl]="control"
            (valueChange)="onValueChange($event)"
        ></nui-date-picker>
        <nui-validation-message for="required">
            This field is required
        </nui-validation-message>
        <nui-validation-message for="invalidFormat">
            Invalid format
        </nui-validation-message>
    </nui-form-field>
    <p class="mt-2">Value: {{ selectedDate }}</p>
    <p class="mt-2">Valid: {{ control.valid }}</p>
    <p class="mt-2">Touched: {{ control.touched }}</p>
    <p class="mt-2">Dirty: {{ control.dirty }}</p>
</section>
`;export{o as default};
