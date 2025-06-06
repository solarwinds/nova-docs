import"./chunk-VBFW7A5V.js";var i=`<div nui-busy [busy]="busy">
    <form [formGroup]="form" *ngIf="form">
        <nui-wizard-horizontal #wizard>
            <nui-wizard-step-v2
                label="Person Details"
                formGroupName="personDetails"
                [stepControl]="form.get(['personDetails'])"
            >
                <nui-form-field
                    class="p-5"
                    [control]="form.get(['personDetails', 'name'])"
                    i18n-caption
                    caption="Name"
                >
                    <nui-textbox formControlName="name"></nui-textbox>
                    <nui-validation-message
                        for="required"
                        *ngIf="
                            form.get(['personDetails', 'name'])?.errors
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
                    <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
                </ng-template>
            </nui-wizard-step-v2>

            <nui-wizard-step-v2
                formGroupName="contactDetails"
                [stepControl]="form.get(['contactDetails'])"
            >
                <ng-template nuiWizardStepLabel>
                    <span (click)="onNextClick(wizard.selected)"
                        >Contact Details</span
                    >
                </ng-template>

                <nui-form-field
                    class="p-5"
                    [control]="form.get(['contactDetails', 'email'])"
                    i18n-caption
                    caption="Email"
                >
                    <nui-textbox
                        type="email"
                        formControlName="email"
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

                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardCancel"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="wizardPrevious"
                    ></ng-container>
                    <button
                        type="button"
                        displayStyle="primary"
                        nui-button
                        (click)="finishWizard()"
                        i18n
                    >
                        Finish
                    </button>
                </ng-template>
            </nui-wizard-step-v2>

            <ng-template #wizardCancel>
                <button
                    type="button"
                    displayStyle="action"
                    nui-button
                    (click)="resetWizard()"
                    i18n
                >
                    Cancel
                </button>
            </ng-template>

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
                    (click)="onNextClick(wizard.selected)"
                >
                    Next
                </button>
            </ng-template>
        </nui-wizard-horizontal>
    </form>

    <nui-spinner
        size="large"
        i18n-message
        message="Async Validation is firing..."
    >
    </nui-spinner>
</div>
`;export{i as default};
