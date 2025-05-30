import"./chunk-VBFW7A5V.js";var t=`<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-add-dynamic"
    (selectionChange)="select($event)"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        #wizardStepAdd
        i18n-title
        title="Add step dynamically"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        #wizardStep3
        title="Third step"
        [stepTemplate]="step3"
    ></nui-wizard-step>
</nui-wizard>
<nui-wizard-step
    #dynamicStep
    [title]="'Dynamic'"
    [stepTemplate]="stepWithValidation"
    [stepControl]="myForm.valid"
></nui-wizard-step>
<!-- 1 step -->
<ng-template #step1>
    <p i18n>Hi! You can add next step dynamically</p>
    <button
        nui-button
        type="button"
        id="nui-demo-dynamic-step-button"
        (click)="addStep()"
        i18n
    >
        Add dynamic step
    </button>
</ng-template>
<!-- 2 step dynamic -->
<ng-template #stepWithValidation>
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
                    *ngIf="myForm.get(['email'])?.errors?.required"
                    i18n
                >
                    This is required
                </nui-validation-message>
                <nui-validation-message
                    for="pattern"
                    *ngIf="myForm.get(['email'])?.errors?.pattern"
                    i18n
                >
                    Please put at least "&#64;" to pass this validator
                </nui-validation-message>
                <nui-validation-message
                    for="email"
                    *ngIf="myForm.get(['email'])?.errors?.email"
                    i18n
                >
                    This should be a valid email?
                </nui-validation-message>
                <nui-validation-message [show]="true" i18n>
                    This message is always here
                </nui-validation-message>
            </nui-form-field>
        </div>
        <div class="form-group">
            <nui-form-field
                class="d-block mb-4"
                [control]="myForm.controls['password']"
                i18n-caption
                caption="Password"
                [showOptionalText]="false"
            >
                <nui-textbox
                    type="password"
                    id="stepInputPassword"
                    formControlName="password"
                ></nui-textbox>
                <nui-validation-message
                    for="required"
                    *ngIf="myForm.get(['password'])?.errors?.required"
                    i18n
                >
                    This is required
                </nui-validation-message>
                <nui-validation-message
                    for="minlength"
                    *ngIf="myForm.get(['password'])?.errors?.minlength"
                    i18n
                >
                    Minimum length is 8
                </nui-validation-message>
                <nui-validation-message [show]="true" i18n>
                    This message is always here
                </nui-validation-message>
            </nui-form-field>
        </div>
    </form>
</ng-template>
<!-- 3 step -->
<ng-template #step3>
    <p i18n>This is step #3</p>
</ng-template>
`;export{t as default};
