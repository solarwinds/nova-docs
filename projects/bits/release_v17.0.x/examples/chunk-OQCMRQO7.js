import"./chunk-XR34LRGE.js";var o=`<div class="container">
    <h3>Nested form components</h3>
    <form [formGroup]="fancyForm" class="nui-edge-definer">
        <nui-form-field
            caption="Nickname"
            hint="Some pretty long text with hint"
            info="text"
            [control]="fancyForm.controls['nickname']"
        >
            <nui-textbox
                formControlName="nickname"
                id="nui-form-field-visual-test-nickname"
            ></nui-textbox>
            <nui-validation-message for="required">
                This is required
            </nui-validation-message>
        </nui-form-field>
        <nui-form-field caption="City" [control]="fancyForm.controls['city']">
            <nui-textbox
                formControlName="city"
                id="nui-form-field-visual-test-city"
            ></nui-textbox>
        </nui-form-field>
    </form>
    <h3>Custom error message styling</h3>
    <form [formGroup]="fancyForm">
        <nui-form-field
            i18n-caption
            caption="Textbox"
            i18n-hint
            hint="Try to leave empty this required field"
            [control]="fancyForm.controls['textbox']"
        >
            <nui-textbox formControlName="textbox" type="textbox"></nui-textbox>

            <nui-custom-validation-message for="required">
                <nui-icon
                    icon="status_critical"
                    iconSize="small"
                    aria-hidden="true"
                ></nui-icon>
                <span class="ml-1"><em i18n>This is required</em></span>
            </nui-custom-validation-message>
        </nui-form-field>
    </form>
    <h3>Various Components in a Form</h3>
    <form [formGroup]="fancyForm" class="nui-edge-definer">
        <div class="row">
            <div class="col">
                <nui-form-field
                    caption="Textbox"
                    hint="This should be any valid email"
                    info="text"
                    [control]="fancyForm.controls['textbox']"
                >
                    <nui-textbox
                        id="nui-form-field-visual-test-textbox"
                        formControlName="textbox"
                    ></nui-textbox>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                    <nui-validation-message for="email">
                        Something, but not enough
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <div class="col">
                <nui-form-field
                    id="nui-form-field-visual-test-form-field"
                    caption="Checkbox"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['checkbox']"
                >
                    <nui-checkbox
                        id="nui-form-field-visual-test-checkbox"
                        formControlName="checkbox"
                    ></nui-checkbox>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <div class="col">
                <nui-form-field
                    caption="Switch"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['switch']"
                >
                    <nui-switch
                        id="nui-form-field-visual-test-switch"
                        formControlName="switch"
                    ></nui-switch>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <hr />
        </div>
        <div class="row">
            <div class="col">
                <nui-form-field
                    caption="Checkbox Group"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['checkboxGroup']"
                >
                    <nui-checkbox-group
                        id="nui-form-field-visual-test-checkbox-group"
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
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <div class="col">
                <nui-form-field
                    caption="Radio Group"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['radioGroup']"
                >
                    <nui-radio-group
                        id="nui-form-field-visual-test-radio"
                        formControlName="radioGroup"
                        name="vegetable"
                        required
                    >
                        <nui-radio
                            *ngFor="let vegetable of vegetables"
                            [value]="vegetable"
                        >
                            {{ vegetable }}
                        </nui-radio>
                    </nui-radio-group>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <hr />
        </div>
        <div class="row">
            <div class="col">
                <nui-form-field
                    caption="Combobox"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['combobox']"
                >
                    <nui-combobox
                        id="nui-form-field-visual-test-combobox"
                        formControlName="combobox"
                        [itemsSource]="vegetables"
                    ></nui-combobox>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <div class="col">
                <nui-form-field
                    caption="Select"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['select']"
                >
                    <nui-select
                        id="nui-form-field-visual-test-select"
                        formControlName="select"
                        [itemsSource]="vegetables"
                    ></nui-select>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
            <div class="col">
                <nui-form-field
                    caption="Time Picker"
                    hint="Some pretty long text with hint"
                    info="text"
                    [control]="fancyForm.controls['timePicker']"
                >
                    <nui-time-picker
                        id="nui-form-field-visual-test-timepicker"
                        formControlName="timePicker"
                    ></nui-time-picker>
                    <nui-validation-message for="required">
                        This field is required
                    </nui-validation-message>
                </nui-form-field>
            </div>
        </div>
        <div class="my-3 d-flex flex-row justify-content-center">
            <div>
                <button
                    nui-button
                    class="btn"
                    id="nui-demo-mark-as-touched-button"
                    (click)="markAsDirty()"
                >
                    Mark as Dirty
                </button>
            </div>
        </div>
        <div class="d-flex flex-row justify-content-center">
            <div class="w-100 d-flex flex-column">
                <pre>fancyForm.valid = {{ fancyForm.valid }}</pre>
                <pre>fancyForm.dirty = {{ fancyForm.dirty }}</pre>
            </div>
        </div>
    </form>
</div>
`;export{o as default};
