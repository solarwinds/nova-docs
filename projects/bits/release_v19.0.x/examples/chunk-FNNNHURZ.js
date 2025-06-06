import"./chunk-VBFW7A5V.js";var i=`<ng-template #dialogWizard>
    <nui-dialog-header
        i18n-title
        title="Restore Wizard State"
        (closed)="closeDialog()"
    >
    </nui-dialog-header>
    <form class="dialog-body compact-mode" [formGroup]="form" *ngIf="form">
        <nui-wizard-horizontal [state]="state" (finished)="saveState($event)">
            <nui-wizard-step-v2
                label="Person Details"
                formGroupName="personDetails"
                [stepControl]="form.get(['personDetails'])"
            >
                <div class="px-5 pb-5">
                    <nui-form-field
                        [control]="form.get(['personDetails', 'name'])"
                        class="d-block mb-4 mt-4"
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

                    <nui-form-field
                        [control]="form.get(['personDetails', 'privacy'])"
                    >
                        <nui-checkbox formControlName="privacy" [value]="true">
                            Privacy Policy
                        </nui-checkbox>

                        <nui-validation-message
                            for="required"
                            *ngIf="
                                form.get(['personDetails', 'privacy'])?.errors
                                    ?.required
                            "
                            i18n
                        >
                            This is required
                        </nui-validation-message>
                    </nui-form-field>
                </div>

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
            </nui-wizard-step-v2>

            <nui-wizard-step-v2
                label="Organization"
                formGroupName="organization"
                [stepControl]="form.get(['organization'])"
            >
                <div class="p-5">
                    <nui-form-field
                        [control]="form.get(['organization', 'title'])"
                        class="d-block mb-4"
                        i18n-caption
                        caption="Organization"
                    >
                        <nui-textbox formControlName="title"></nui-textbox>
                        <nui-validation-message
                            for="required"
                            *ngIf="
                                form.get(['organization', 'title'])?.errors
                                    ?.required
                            "
                            i18n
                        >
                            This is required
                        </nui-validation-message>
                    </nui-form-field>
                    <nui-form-field
                        caption="Date"
                        class="d-block mb-4"
                        [control]="form.get(['organization', 'date'])"
                    >
                        <nui-date-picker
                            formControlName="date"
                            i18n
                        ></nui-date-picker>
                        <nui-validation-message
                            for="required"
                            *ngIf="
                                form.get(['organization', 'date'])?.errors
                                    ?.required
                            "
                            i18n
                        >
                            This is required
                        </nui-validation-message>
                    </nui-form-field>
                    <nui-form-field
                        [control]="
                            form.get(['organization', 'createDynamicStep1'])
                        "
                        class="d-block"
                    >
                        <nui-checkbox
                            formControlName="createDynamicStep1"
                            [value]="true"
                        >
                            Add first step dynamically
                        </nui-checkbox>
                    </nui-form-field>
                    <nui-form-field
                        [control]="
                            form.get(['organization', 'createDynamicStep2'])
                        "
                        class="d-block"
                    >
                        <nui-checkbox
                            formControlName="createDynamicStep2"
                            [value]="true"
                        >
                            Add second step dynamically
                        </nui-checkbox>
                    </nui-form-field>
                </div>

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
                            context: { form: 'organization' }
                        "
                    ></ng-container>
                </ng-template>
            </nui-wizard-step-v2>

            <nui-wizard-step-v2 *ngFor="let step of dynamicSteps">
                <ng-template nuiWizardStepLabel>{{ step.title }}</ng-template>
                <div class="p-5">
                    <ng-container
                        *ngTemplateOutlet="step.templateRef"
                    ></ng-container>
                </div>
                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardPrevious"
                    ></ng-container>
                    <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
                </ng-template>
            </nui-wizard-step-v2>

            <nui-wizard-step-v2
                formGroupName="contactDetails"
                [stepControl]="form.get(['contactDetails'])"
                #finalStep
            >
                <ng-template nuiWizardStepLabel>
                    <span>Contact Details</span>
                </ng-template>

                <div class="px-5 pb-5">
                    <nui-form-field
                        [control]="form.get(['contactDetails', 'email'])"
                        class="d-block mb-4 mt-4"
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
                                form.get(['contactDetails', 'email'])?.errors
                                    ?.email
                            "
                            i18n
                        >
                            Invalid email
                        </nui-validation-message>
                    </nui-form-field>

                    <nui-form-field
                        caption="Select"
                        [control]="form.get(['contactDetails', 'options'])"
                    >
                        <nui-select-v2 formControlName="options">
                            <nui-select-v2-option value="Item 1"
                                >Item 1</nui-select-v2-option
                            >
                            <nui-select-v2-option value="Item 2"
                                >Item 2</nui-select-v2-option
                            >
                        </nui-select-v2>
                    </nui-form-field>
                </div>

                <ng-template nuiWizardStepFooter>
                    <button
                        nui-button
                        class="btn-reset"
                        type="button"
                        icon="reset"
                        (click)="resetStep(finalStep)"
                    >
                        Reset step
                    </button>
                    <ng-container
                        *ngTemplateOutlet="wizardCancel"
                    ></ng-container>
                    <ng-container
                        *ngTemplateOutlet="wizardPrevious"
                    ></ng-container>
                    <button
                        type="button"
                        nui-button
                        displayStyle="primary"
                        (click)="completeWizard('contactDetails', finalStep)"
                    >
                        Finish
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

            <ng-template #wizardNext let-form="form">
                <button
                    nuiWizardNext
                    type="button"
                    nui-button
                    displayStyle="primary"
                    icon="caret-right"
                    iconRight="true"
                    (click)="validateStep(form)"
                >
                    Next
                </button>
            </ng-template>

            <ng-template #wizardCancel>
                <button
                    type="button"
                    nui-button
                    displayStyle="action"
                    (click)="closeDialog()"
                >
                    Cancel
                </button>
            </ng-template>
        </nui-wizard-horizontal>
    </form>
</ng-template>

<ng-template #dynamicTemplate1>
    <p i18n>
        Hi! I was created dynamically, because you've checked the checkbox on
        the previous step! Uncheck it to hide me!
    </p>
</ng-template>

<ng-template #dynamicTemplate2>
    <p i18n>This is another template rendered dynamically!</p>
    <button type="button" nui-button class="mb-3" (click)="awesome = !awesome">
        Click if you're awesome
    </button>
    <nui-message *ngIf="awesome" type="ok">You are awesome!</nui-message>
</ng-template>

<button nui-button type="button" (click)="openDialog(dialogWizard)" i18n>
    Open dialog wizard
</button>
`;export{i as default};
