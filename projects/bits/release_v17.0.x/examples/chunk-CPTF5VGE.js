import"./chunk-XR34LRGE.js";var n=`<ng-template #dialogWizard>
    <div nuiResizeObserver #dialog>
        <div nui-busy [busy]="busy">
            <div class="busy-content">
                <nui-dialog-header
                    i18n-title
                    title="Wizard dialog"
                    (closed)="closeDialog()"
                ></nui-dialog-header>
                <div class="dialog-body compact-mode">
                    <nui-wizard-horizontal #wizard>
                        <!--  This defines the first step of the wizard -->
                        <nui-wizard-step-v2>
                            <!-- This defines the header label of this wizard step  -->
                            <ng-template nuiWizardStepLabel
                                >Completed</ng-template
                            >

                            <!-- the current step content -->
                            <div class="step-content-wrapper">
                                <span i18n
                                    >This is the first step of our horizontal
                                    wizard.</span
                                >
                            </div>
                            <!-- content of the footer -->
                            <ng-template nuiWizardStepFooter>
                                <button
                                    class="btn-busy"
                                    type="button"
                                    nui-button
                                    icon="reload"
                                    (click)="toggleBusy()"
                                >
                                    Toggle busy
                                </button>
                                <ng-container
                                    *ngTemplateOutlet="wizardCancel"
                                ></ng-container>
                                <ng-container
                                    *ngTemplateOutlet="wizardNext"
                                ></ng-container>
                            </ng-template>
                        </nui-wizard-step-v2>

                        <nui-wizard-step-v2>
                            <ng-template nuiWizardStepLabel>Active</ng-template>

                            <div class="step-content-wrapper">
                                <span i18n
                                    >This is the second step of our horizontal
                                    wizard.</span
                                >
                            </div>
                            <ng-template nuiWizardStepFooter>
                                <ng-container
                                    *ngTemplateOutlet="wizardCancel"
                                ></ng-container>
                                <ng-container
                                    *ngTemplateOutlet="wizardPrevious"
                                ></ng-container>
                                <ng-container
                                    *ngTemplateOutlet="wizardNext"
                                ></ng-container>
                            </ng-template>
                        </nui-wizard-step-v2>

                        <nui-wizard-step-v2>
                            <ng-template nuiWizardStepLabel
                                >Not visited</ng-template
                            >

                            <div class="step-content-wrapper">
                                <span i18n
                                    >This is the third step of our horizontal
                                    wizard</span
                                >
                            </div>

                            <ng-template nuiWizardStepFooter>
                                <ng-container
                                    *ngTemplateOutlet="wizardCancel"
                                ></ng-container>
                                <ng-container
                                    *ngTemplateOutlet="wizardPrevious"
                                ></ng-container>
                                <ng-container
                                    *ngTemplateOutlet="wizardNext"
                                ></ng-container>
                            </ng-template>
                        </nui-wizard-step-v2>

                        <nui-wizard-step-v2>
                            <ng-template nuiWizardStepLabel
                                >Summary</ng-template
                            >
                            <div class="step-content-wrapper">
                                <span i18n
                                    >We finally reached our last step</span
                                >
                            </div>
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
                                    (click)="
                                        finishWizard();
                                        overlay.hide();
                                        closeDialog()
                                    "
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
                                (click)="
                                    openConfirmationOverlay(overlay, wizard)
                                "
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
            </div>
            <nui-spinner
                size="large"
                i18n-message
                message="Data is loading from remote server..."
            ></nui-spinner>
        </div>
    </div>
    <nui-overlay #overlay [toggleReference]="dialog">
        <div class="overlay-class">
            <div class="overlay-content">
                <div class="header">Really want to leave?</div>
                <div class="body">
                    <p i18n>
                        There is at least one accomplished step within this
                        wizard. Are you sure you want to leave?
                    </p>
                </div>
                <div class="footer">
                    <button
                        nui-button
                        displayStyle="action"
                        type="button"
                        (click)="overlay.hide()"
                    >
                        Cancel
                    </button>
                    <button
                        nui-button
                        type="button"
                        (click)="overlay.hide(); closeDialog()"
                    >
                        Leave
                    </button>
                </div>
            </div>
        </div>
    </nui-overlay>
</ng-template>

<button nui-button type="button" (click)="openDialog(dialogWizard)" i18n>
    Open dialog wizard
</button>
`;export{n as default};
