import"./chunk-VBFW7A5V.js";var n=`<div nui-busy [busy]="busy" class="example-container">
    <div class="busy-content">
        <nui-wizard-horizontal #wizard>
            <!--  content of the 1st step -->
            <nui-wizard-step-v2>
                <!-- define the label which is displayed on the header stepper -->
                <ng-template nuiWizardStepLabel>Make step busy</ng-template>

                <!-- content of the current step -->
                <p class="m-5" i18n>Welcome!</p>

                <!-- content of the footer -->
                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardCancel"
                    ></ng-container>
                    <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
                </ng-template>
            </nui-wizard-step-v2>

            <!--  content of the 2nd step -->
            <nui-wizard-step-v2>
                <!-- define the label which is displayed on the header stepper -->
                <ng-template nuiWizardStepLabel>Final</ng-template>

                <!-- content of the current step -->
                <div class="p-5">
                    <nui-checkbox
                        name="nui-demo-checkbox"
                        i18n-title
                        title="Check box with help text"
                        i18n-hint
                        hint="This is some help text"
                        required="true"
                        [value]="false"
                        i18n
                        >Check box with help text
                    </nui-checkbox>
                    <nui-checkbox
                        name="nui-demo-checkbox-plain"
                        [checked]="true"
                        [value]="false"
                        i18n
                        >Plain checkbox
                    </nui-checkbox>
                </div>

                <!-- content of the footer -->
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
                >
                    Next
                </button>
            </ng-template>
        </nui-wizard-horizontal>
    </div>
    <nui-spinner
        id="nui-demo-spinner"
        size="large"
        i18n-message
        message="Data is loading from remote server..."
    ></nui-spinner>
</div>

<button
    nui-button
    type="button"
    id="nui-demo-busy-button"
    (click)="toggleStepBusy()"
    i18n
>
    Toggle busy on current step
</button>
`;export{n as default};
