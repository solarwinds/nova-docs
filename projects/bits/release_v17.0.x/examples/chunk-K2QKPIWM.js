import"./chunk-XR34LRGE.js";var o=`<form [formGroup]="fancyForm" class="nui-edge-definer">
    <nui-form-field
        class="d-block mb-4"
        caption="Textbox"
        i18n-caption
        hint="This is a configurable help hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['textbox']"
    >
        <nui-textbox id="input-textbox" formControlName="textbox"></nui-textbox>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Textbox number"
        i18n-caption
        hint="This is a configurable help hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['textNumber']"
    >
        <nui-textbox-number
            id="input-textNumber"
            formControlName="textNumber"
        ></nui-textbox-number>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Checkbox"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['checkbox']"
    >
        <nui-checkbox
            id="input-checkbox"
            formControlName="checkbox"
            required
        ></nui-checkbox>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Checkbox Group"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['checkboxGroup']"
    >
        <nui-checkbox-group
            id="input-checkboxGroup"
            formControlName="checkboxGroup"
            name="vegetable"
        >
            <nui-checkbox
                *ngFor="let vegetable of vegetables"
                [value]="vegetable"
            >
                {{ vegetable }}
            </nui-checkbox>
        </nui-checkbox-group>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Radio Group"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['radioGroup']"
    >
        <nui-radio-group
            id="input-radioGroup"
            formControlName="radioGroup"
            name="vegetable"
            required
        >
            <nui-radio *ngFor="let vegetable of vegetables" [value]="vegetable">
                {{ vegetable }}
            </nui-radio>
        </nui-radio-group>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Switch"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['switch']"
    >
        <nui-switch id="input-switch" formControlName="switch"></nui-switch>
        <nui-validation-message for="required">
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Select"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['select']"
    >
        <nui-select
            id="input-select"
            formControlName="select"
            [itemsSource]="vegetables"
        ></nui-select>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Combobox"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['combobox']"
    >
        <nui-combobox
            id="input-combobox"
            formControlName="combobox"
            [itemsSource]="vegetables"
        ></nui-combobox>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Date Picker"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['datePicker']"
    >
        <nui-date-picker
            id="input-datePicker"
            formControlName="datePicker"
        ></nui-date-picker>
        <nui-validation-message for="invalidFormat" i18n>
            The format is incorrect
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        class="d-block mb-4"
        caption="Time Picker"
        i18n-caption
        hint="Some pretty long text with hint"
        i18n-hint
        info="text"
        [control]="fancyForm.controls['timePicker']"
    >
        <nui-time-picker
            id="input-timePicker"
            formControlName="timePicker"
        ></nui-time-picker>
        <nui-validation-message for="required" i18n>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <nui-form-field
        caption="Date Time Picker"
        hint="Some pretty long text with hint. Longer than previous even. This text should not ellipsify."
        info="text"
    >
        <nui-date-time-picker
            id="input-dateTimePicker"
            formControlName="dateTimePicker"
        >
        </nui-date-time-picker>
        <nui-validation-message>
            This field is required
        </nui-validation-message>
    </nui-form-field>
</form>
`;export{o as default};
