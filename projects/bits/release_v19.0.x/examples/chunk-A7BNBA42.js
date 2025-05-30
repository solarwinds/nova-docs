import"./chunk-VBFW7A5V.js";var o=`<nui-form-field
    caption="This caption is generic for all form fields"
    i18n-caption
    info="Some info to show"
    i18n-info
    hint="Hint may be useful"
    i18n-hint
    id="nui-demo-form-field"
>
    <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
    <nui-textbox *ngIf="true"></nui-textbox>
    <nui-validation-message [show]="true" i18n
        >Some error message</nui-validation-message
    >
</nui-form-field>

<form [formGroup]="dynamicForm">
    <button
        id="nui-form-field-test-toggle-disable-state-button"
        nui-button
        type="button"
        (click)="toggleDisabledState()"
    >
        Toggle Disabled State
    </button>

    <nui-form-field
        caption="Textbox"
        i18n-caption
        [control]="dynamicForm.controls['textbox']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-textbox
            *ngIf="true"
            id="nui-form-field-test-textbox"
            formControlName="textbox"
        ></nui-textbox>
        <nui-validation-message for="required" i18n>
            This is required
        </nui-validation-message>
    </nui-form-field>

    <nui-form-field
        caption="Textbox Number"
        i18n-caption
        [control]="dynamicForm.controls['textboxNumber']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-textbox-number
            *ngIf="true"
            id="nui-form-field-test-textbox-number"
            formControlName="textboxNumber"
        ></nui-textbox-number>
        <nui-validation-message for="required" i18n>
            This is required
        </nui-validation-message>
    </nui-form-field>

    <nui-form-field
        caption="Switch"
        i18n-caption
        [control]="dynamicForm.controls['switch']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-switch
            *ngIf="true"
            id="nui-form-field-test-switch"
            formControlName="switch"
        ></nui-switch>
    </nui-form-field>

    <nui-form-field
        caption="Radio Group"
        i18n-caption
        [control]="dynamicForm.controls['radio']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-radio-group
            *ngIf="true"
            id="nui-form-field-test-radio"
            formControlName="radio"
        >
            <nui-radio ariaLabel="Radio">Radio</nui-radio>
        </nui-radio-group>
    </nui-form-field>

    <nui-form-field
        caption="Checkbox"
        i18n-caption
        [control]="dynamicForm.controls['checkbox']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-checkbox
            *ngIf="true"
            formControlName="checkbox"
            id="nui-form-field-test-checkbox"
            >Checkbox</nui-checkbox
        >
    </nui-form-field>

    <nui-form-field
        caption="Checkbox Group"
        i18n-caption
        [control]="dynamicForm.controls['checkboxGroup']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-checkbox-group
            *ngIf="true"
            id="nui-form-field-test-checkbox-group"
            formControlName="checkboxGroup"
        >
            <nui-checkbox
                *ngFor="let vegetable of vegetables"
                [ariaLabel]="vegetable"
                [value]="vegetable"
                >{{ vegetable }}
            </nui-checkbox>
        </nui-checkbox-group>
    </nui-form-field>

    <nui-form-field
        caption="Datepicker"
        i18n-caption
        [control]="dynamicForm.controls['datepicker']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-date-picker
            *ngIf="true"
            id="nui-form-field-test-datepicker"
            formControlName="datepicker"
            [inline]="false"
        ></nui-date-picker>
    </nui-form-field>

    <nui-form-field
        caption="Timepicker"
        i18n-caption
        [control]="dynamicForm.controls['timepicker']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-time-picker
            *ngIf="true"
            id="nui-form-field-test-timepicker"
            formControlName="timepicker"
        ></nui-time-picker>
    </nui-form-field>

    <nui-form-field
        caption="Date Time Picker"
        hint="Some pretty long text with hint. Longer than previous even. This text should not ellipsify."
        info="text"
        [control]="dynamicForm.controls['dateTimePicker']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-date-time-picker
            *ngIf="true"
            id="nui-form-field-test-datetimepicker"
            formControlName="dateTimePicker"
        >
        </nui-date-time-picker>
        <nui-validation-message>
            This field is required
        </nui-validation-message>
    </nui-form-field>
    <span id="nui-form-field-test-datetimepicker-model">
        {{ dateTimePickerModel }}
    </span>

    <nui-form-field
        caption="SelectV2"
        i18n-caption
        [control]="dynamicForm.controls['selectV2']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-select-v2
            *ngIf="true"
            formControlName="selectV2"
            id="nui-form-field-test-select"
        >
            <nui-select-v2-option
                *ngFor="let item of ['orange', 'apple']"
                [value]="item"
                >{{ item }}</nui-select-v2-option
            >
        </nui-select-v2>
    </nui-form-field>

    <nui-form-field
        caption="ComboboxV2"
        i18n-caption
        [control]="dynamicForm.controls['comboboxV2']"
    >
        <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
        <nui-combobox-v2
            *ngIf="true"
            formControlName="comboboxV2"
            id="nui-form-field-test-combobox"
        >
            <nui-select-v2-option
                *ngFor="let item of ['orange', 'apple']"
                [value]="item"
                >{{ item }}</nui-select-v2-option
            >
        </nui-combobox-v2>
    </nui-form-field>
</form>

<nui-form-field
    caption="This caption is generic for all form fields"
    i18n-caption
    [infoTemplate]="template"
    hint="Hint may be useful"
    i18n-hint
    id="nui-demo-form-field-with-template"
>
    <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
    <nui-textbox *ngIf="true"></nui-textbox>
    <nui-validation-message [show]="true" i18n
        >Some error message</nui-validation-message
    >
</nui-form-field>
<ng-template #template>
    <a>Template with link</a>
</ng-template>

<nui-form-field
    caption="This caption is generic for all form fields"
    i18n-caption
    [hintTemplate]="hintTemplate"
    id="nui-demo-form-field-hint-with-template"
>
    <!-- ngIf added for the QA to verify that there's no "expression changed after it has been checked" error -->
    <nui-textbox *ngIf="true"></nui-textbox>
</nui-form-field>

<ng-template #hintTemplate>
    <a href="" [routerLink]="[]" i18n>Hint template</a>
</ng-template>
`;export{o as default};
