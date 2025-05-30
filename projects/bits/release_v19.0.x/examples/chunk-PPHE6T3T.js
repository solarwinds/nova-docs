import"./chunk-VBFW7A5V.js";var n=`<form [formGroup]="form" *ngIf="form">
    <nui-wizard-horizontal #wizard>
        <!--  This defines the first step of the wizard -->
        <nui-wizard-step-v2
            i18n-label
            label="Person Details"
            formGroupName="personDetails"
            [stepControl]="form.get(['personDetails'])"
        >
            <!-- the current step content -->
            <div class="step-content-wrapper">
                <h2>Person Details</h2>
                <nui-form-field
                    [control]="form.get(['personDetails', 'firstName'])"
                    i18n-caption
                    caption="First name"
                >
                    <nui-textbox
                        formControlName="firstName"
                        customBoxWidth="150px"
                    ></nui-textbox>
                    <nui-validation-message
                        for="required"
                        *ngIf="
                            form.get(['personDetails', 'firstName'])?.errors
                                ?.required
                        "
                        i18n
                    >
                        First name is required
                    </nui-validation-message>
                </nui-form-field>

                <nui-form-field
                    [control]="form.get(['personDetails', 'lastName'])"
                    i18n-caption
                    caption="Last name"
                >
                    <nui-textbox
                        formControlName="lastName"
                        customBoxWidth="150px"
                    ></nui-textbox>
                    <nui-validation-message
                        for="required"
                        *ngIf="
                            form.get(['personDetails', 'lastName'])?.errors
                                ?.required
                        "
                        i18n
                    >
                        Last name is required
                    </nui-validation-message>
                </nui-form-field>
                <!-- content of the footer -->
                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardCancel"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="
                            wizardNext;
                            context: { form: 'personDetails' }
                        "
                    ></ng-container>
                </ng-template>
            </div>
        </nui-wizard-step-v2>

        <nui-wizard-step-v2
            i18n-label
            label="Contact Details"
            formGroupName="contactDetails"
            [stepControl]="form.get(['contactDetails'])"
        >
            <div class="step-content-wrapper">
                <h2>Contact Details</h2>
                <nui-form-field
                    [control]="form.get(['contactDetails', 'email'])"
                    i18n-caption
                    caption="Email"
                >
                    <nui-textbox
                        type="email"
                        formControlName="email"
                        customBoxWidth="150px"
                    ></nui-textbox>
                    <nui-validation-message
                        for="required"
                        *ngIf="
                            form.get(['contactDetails', 'email'])?.errors
                                ?.required
                        "
                        i18n
                    >
                        This is required
                    </nui-validation-message>

                    <nui-validation-message
                        for="email"
                        *ngIf="
                            form.get(['contactDetails', 'email'])?.errors?.email
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
                    <nui-textbox
                        type="phone"
                        formControlName="phone"
                        customBoxWidth="150px"
                    ></nui-textbox>
                    <nui-validation-message
                        for="required"
                        *ngIf="
                            form.get(['contactDetails', 'phone'])?.errors
                                ?.required
                        "
                        i18n
                    >
                        This is required
                    </nui-validation-message>
                </nui-form-field>

                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardCancel"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="wizardPrevious"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="
                            wizardNext;
                            context: { form: 'contactDetails' }
                        "
                    ></ng-container>
                </ng-template>
            </div>
        </nui-wizard-step-v2>

        <nui-wizard-step-v2
            i18n-label
            label="Final step"
            formGroupName="confirm"
            [stepControl]="form.get(['confirm'])"
        >
            <div class="step-content-wrapper">
                <h2 i18n>Confirm your data</h2>
                <ul>
                    <li>
                        First name:
                        {{ form.get(["personDetails", "firstName"]).value }}
                    </li>
                    <li>
                        Last name:
                        {{ form.get(["personDetails", "lastName"]).value }}
                    </li>
                    <li>
                        Email: {{ form.get(["contactDetails", "email"]).value }}
                    </li>
                    <li *ngIf="form.get(['contactDetails', 'phone']).value">
                        Phone: {{ form.get(["contactDetails", "phone"]).value }}
                    </li>
                </ul>
                <nui-form-field [control]="form.get(['confirm', 'confirmed'])">
                    <nui-checkbox formControlName="confirmed" i18n required>
                        Confirm
                    </nui-checkbox>
                    <nui-validation-message for="required" i18n>
                        Confirmation is required
                    </nui-validation-message>
                </nui-form-field>

                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardCancel"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="wizardPrevious"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="
                            wizardSubmit;
                            context: { formControlName: 'confirm' }
                        "
                    ></ng-container>
                </ng-template>
            </div>
        </nui-wizard-step-v2>

        <!-- content of the confirmation dialog -->
        <ng-template #confirmDialog let-close="close">
            <nui-dialog-header
                title="Really want to leave?"
                i18n-title
                (closed)="close()"
            ></nui-dialog-header>
            <div class="dialog-body">
                <p i18n>
                    There is at least one accomplished step within this wizard.
                    Are you sure you want to leave?
                </p>
            </div>
            <nui-dialog-footer>
                <button
                    nui-button
                    type="button"
                    displayStyle="action"
                    (click)="close()"
                    i18n
                >
                    Cancel
                </button>
                <button
                    nui-button
                    type="button"
                    (click)="resetWizard(); close()"
                    i18n
                >
                    Leave
                </button>
            </nui-dialog-footer>
        </ng-template>

        <!-- content of the cancel button -->
        <ng-template #wizardCancel>
            <button
                type="button"
                displayStyle="action"
                nui-button
                (click)="openConfirmationDialog(confirmDialog)"
                i18n
            >
                Cancel
            </button>
        </ng-template>

        <!-- content of the previous button -->
        <ng-template #wizardPrevious>
            <button
                type="button"
                nuiWizardPrevious
                nui-button
                icon="caret-left"
                i18n
            >
                Back
            </button>
        </ng-template>

        <!-- content of the next button -->
        <ng-template #wizardNext let-form="form">
            <button
                nuiWizardNext
                type="button"
                nui-button
                displayStyle="primary"
                icon="caret-right"
                iconRight="true"
                (click)="validate(form)"
                i18n
            >
                Next
            </button>
        </ng-template>

        <!-- content of the submit button -->
        <ng-template #wizardSubmit let-formControlName="formControlName">
            <button
                type="button"
                nui-button
                displayStyle="primary"
                (click)="onSubmit(formControlName)"
                i18n
            >
                Submit
            </button>
        </ng-template>
    </nui-wizard-horizontal>
</form>
`;export{n as default};
