import"./chunk-VBFW7A5V.js";var t=`<ng-template #stepWithValidation>
    <form [formGroup]="myForm">
        <div class="form-group">
            <nui-form-field class="d-block mb-4" i18n-caption caption="Name">
                <nui-textbox
                    id="stepInputName"
                    formControlName="name"
                ></nui-textbox>
            </nui-form-field>
        </div>
        <div class="form-group">
            <nui-form-field
                class="d-block mb-4"
                [control]="myForm.controls['email']"
                i18n-caption
                caption="Email"
            >
                <nui-textbox
                    type="email"
                    id="stepInputEmail"
                    formControlName="email"
                ></nui-textbox>
                <nui-validation-message
                    for="required"
                    *ngIf="myForm.controls['email'].errors?.required"
                    i18n
                >
                    This is required
                </nui-validation-message>
                <nui-validation-message
                    for="pattern"
                    *ngIf="myForm.controls['email'].errors?.pattern"
                    i18n
                >
                    Please put at least "&#64;" to pass this validator
                </nui-validation-message>
                <nui-validation-message
                    for="email"
                    *ngIf="myForm.controls['email'].errors?.email"
                    i18n
                >
                    This should be a valid email
                </nui-validation-message>
                <nui-validation-message [show]="true" i18n>
                    This message is always here
                </nui-validation-message>
            </nui-form-field>
        </div>
        <div class="form-group">
            <nui-form-field
                class="d-block mb-4"
                i18n-caption
                caption="Password"
                [showOptionalText]="false"
            >
                <nui-textbox
                    type="password"
                    id="stepInputPassword"
                    formControlName="password"
                ></nui-textbox>
            </nui-form-field>
        </div>
    </form>
</ng-template>
<ng-template #step2>
    <p i18n>Hello from second step</p>
    <p i18n>
        This step has a handler for the <code>next</code> event fired from this
        step only, rather than from the entire wizard.
    </p>
    <form [formGroup]="secondStepForm">
        <div class="form-group">
            <nui-form-field [control]="secondStepForm.controls['formCheckbox']">
                <nui-validation-message for="required">
                    Confirm that you have configured all steps which are needed
                    to proceed.
                </nui-validation-message>
                <nui-checkbox
                    [required]="true"
                    [checked]="false"
                    formControlName="formCheckbox"
                >
                    I need to be checked to go further
                </nui-checkbox>
            </nui-form-field>
        </div>
    </form>
</ng-template>
<ng-template #step3>
    <p i18n>This is step #3</p>
</ng-template>
<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-validation"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        i18n-title
        title="Step with validation"
        [stepTemplate]="stepWithValidation"
        [stepControl]="myForm.valid"
    ></nui-wizard-step>
    <nui-wizard-step
        #wizardStep2
        i18n-title
        title="Second step"
        [stepTemplate]="step2"
        [stepControl]="secondStepForm.valid"
        (next)="updateValidity()"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        #wizardStep3
        title="Third step"
        [stepTemplate]="step3"
    ></nui-wizard-step>
</nui-wizard>
`;export{t as default};
