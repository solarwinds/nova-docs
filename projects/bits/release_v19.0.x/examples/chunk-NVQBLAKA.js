import"./chunk-VBFW7A5V.js";var n=`<form [formGroup]="form">
    <nui-wizard-custom #wizard>
        <!-- Overview content-->
        <ng-container summary>
            <h2>Overview</h2>
            <nui-progress
                [show]="true"
                [stacked]="true"
                [percent]="progress | number : '1.0-0'"
                [showNumber]="true"
            >
            </nui-progress>
            <p>Step {{ selectedIndex + 1 }} out of {{ steps }} steps</p>
            <p>
                Name:
                {{
                    form.get(["personDetails", "name"])?.value || "Not provided"
                }}
            </p>
            <p>
                Symptoms:
                <ng-container
                    [ngSwitch]="form.get(['personDetails', 'symptoms'])?.value"
                >
                    <ng-container *ngSwitchCase="true">
                        {{
                            form.get(["diseaseDetails", "date"]).valid
                                ? "Since " +
                                  form
                                      .get(["diseaseDetails", "date"])
                                      ?.value.format("D MMM YYYY")
                                : "Yes"
                        }}
                    </ng-container>
                    <ng-container *ngSwitchCase="false" i18n>No</ng-container>
                    <ng-container *ngSwitchDefault i18n>Unknown</ng-container>
                </ng-container>
            </p>
            <p>
                Email:
                {{
                    form.get(["contactDetails", "email"])?.value ||
                        "Not provided"
                }}
            </p>
        </ng-container>

        <!--  content of the 1st step -->
        <nui-wizard-step-v2
            i18n-label
            label="Person Details"
            formName="personDetails"
            [stepControl]="form.get(['personDetails'])"
        >
            <!-- content of the current step -->
            <nui-form-field
                [control]="form.get(['personDetails', 'name'])"
                i18n-caption
                caption="Name"
            >
                <nui-textbox formControlName="name"></nui-textbox>
                <nui-validation-message
                    for="required"
                    *ngIf="
                        form.get(['personDetails', 'name'])?.errors?.required
                    "
                    i18n
                >
                    This is required
                </nui-validation-message>
                <nui-validation-message
                    for="minlength"
                    *ngIf="
                        form.get(['personDetails', 'name'])?.errors
                            ?.['minlength']
                    "
                    i18n
                >
                    Minimum length is 3
                </nui-validation-message>
            </nui-form-field>

            <nui-form-field
                [control]="form.get(['personDetails', 'symptoms'])"
                i18n-caption
                caption="Do you have Covid ?"
            >
                <nui-checkbox
                    formControlName="symptoms"
                    [indeterminate]="
                        form.get(['personDetails', 'symptoms'])?.pristine
                    "
                    i18n
                >
                    Diseases symptoms
                </nui-checkbox>
                <nui-validation-message
                    for="required"
                    *ngIf="
                        form.get(['personDetails', 'symptoms'])?.errors
                            ?.required
                    "
                    i18n
                >
                    This is required
                </nui-validation-message>
            </nui-form-field>

            <!-- content of the footer -->
            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <!--  content of the optional step -->
        <nui-wizard-step-v2
            *ngIf="form.get(['personDetails', 'symptoms'])?.value"
            i18n-label
            label="Disease Details"
            formName="diseaseDetails"
            [stepControl]="form.get(['diseaseDetails'])"
        >
            <ng-template nuiWizardStepLabel i18n
                >Disease Details for your Symptoms</ng-template
            >
            <nui-form-field
                [control]="form.get(['diseaseDetails', 'date'])"
                i18n-caption
                caption="When did you noticed your first symptoms ?"
            >
                <nui-date-picker formControlName="date" i18n></nui-date-picker>
                <nui-validation-message
                    for="required"
                    *ngIf="
                        form.get(['diseaseDetails', 'date'])?.errors?.required
                    "
                    i18n
                >
                    Date when disease manifested is required
                </nui-validation-message>
            </nui-form-field>
            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <!--  content of the 2nd step -->
        <nui-wizard-step-v2
            i18n-label
            label="Contact Details"
            formName="contactDetails"
            [stepControl]="form.get(['contactDetails'])"
        >
            <!-- content of the current step -->
            <nui-form-field
                [control]="form.get(['contactDetails', 'email'])"
                i18n-caption
                caption="Email"
            >
                <nui-textbox type="email" formControlName="email"></nui-textbox>
                <nui-validation-message
                    for="required"
                    *ngIf="
                        form.get(['contactDetails', 'email'])?.errors?.required
                    "
                    i18n
                >
                    This is required
                </nui-validation-message>

                <nui-validation-message
                    for="email"
                    *ngIf="
                        form.get(['contactDetails', 'email'])?.errors
                            ?.['email']
                    "
                    i18n
                >
                    Invalid email
                </nui-validation-message>
            </nui-form-field>
            <nui-form-field
                [control]="form.get(['contactDetails', 'phone'])"
                i18n-caption
                caption="Phone"
            >
                <nui-textbox type="email" formControlName="phone"></nui-textbox>
            </nui-form-field>

            <!-- content of the footer -->
            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <!--  content of the final step -->
        <nui-wizard-step-v2 i18n-label label="Final step">
            <span i18n>Thanks for your feedback and take care!</span>
            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <button type="button" nui-button (click)="wizard.reset()">
                    Reset
                </button>
            </ng-template>
        </nui-wizard-step-v2>

        <ng-template #wizardPrevious>
            <button
                type="button"
                nuiWizardPrevious
                nui-button
                icon="caret-left"
            >
                Back
            </button>
        </ng-template>

        <ng-template #wizardNext>
            <button
                nuiWizardNext
                type="button"
                nui-button
                displayStyle="primary"
                icon="caret-right"
                iconRight="true"
                (click)="validate(wizard.selected)"
            >
                Next
            </button>
        </ng-template>
    </nui-wizard-custom>
</form>
`;export{n as default};
