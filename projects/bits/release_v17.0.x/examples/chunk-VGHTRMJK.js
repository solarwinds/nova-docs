import"./chunk-XR34LRGE.js";var n=`<!--Horizontal Wizard-->
<div class="mb-3">
    <nui-wizard-horizontal id="nui-wizard-v2-horizontal">
        <!--Step 1-->
        <nui-wizard-step-v2 label="Step1">
            Step 1

            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <!--Step 2-->
        <nui-wizard-step-v2 label="Step2">
            Step 2

            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <!--Step 3-->
        <nui-wizard-step-v2 label="Step3">
            Step 3
            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <ng-template #wizardPrevious>
            <button
                type="button"
                class="previous"
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
                class="next"
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

<!--Dialog Wizard-->
<div class="mb-3">
    <ng-template #dialogWizard>
        <div nuiResizeObserver #dialog>
            <div nui-busy [busy]="busy" id="nui-busy">
                <div class="busy-content">
                    <nui-dialog-header
                        i18n-title
                        title="Wizard dialog"
                        (closed)="closeDialog()"
                    ></nui-dialog-header>
                    <div class="dialog-body compact-mode">
                        <nui-wizard-horizontal
                            #wizard
                            id="nui-wizard-v2-horizontal-dialog"
                            [state]="state"
                            (finished)="saveState($event)"
                        >
                            <!--  This defines the first step of the wizard -->
                            <nui-wizard-step-v2 label="Completed">
                                <!-- the current step content -->
                                <div class="step-content-wrapper">
                                    <span i18n
                                        >This is the first step of our
                                        horizontal wizard</span
                                    >.
                                </div>
                                <!-- content of the footer -->
                                <ng-template nuiWizardStepFooter>
                                    <button
                                        id="nui-wizard-busy-btn"
                                        type="button"
                                        nui-button
                                        (click)="toggleBusy()"
                                    >
                                        Toggle busy
                                    </button>
                                    <ng-container
                                        *ngTemplateOutlet="wizardCancelDialog"
                                    ></ng-container>
                                    <ng-container
                                        *ngTemplateOutlet="wizardNextDialog"
                                    ></ng-container>
                                </ng-template>
                            </nui-wizard-step-v2>

                            <nui-wizard-step-v2 label="Active">
                                <div class="step-content-wrapper">
                                    <span i18n
                                        >This is the second step of our
                                        horizontal wizard</span
                                    >.
                                </div>
                                <ng-template nuiWizardStepFooter>
                                    <ng-container
                                        *ngTemplateOutlet="wizardCancelDialog"
                                    ></ng-container>
                                    <ng-container
                                        *ngTemplateOutlet="wizardPreviousDialog"
                                    ></ng-container>
                                    <ng-container
                                        *ngTemplateOutlet="wizardNextDialog"
                                    ></ng-container>
                                </ng-template>
                            </nui-wizard-step-v2>

                            <nui-wizard-step-v2 label="Not Visited">
                                <div class="step-content-wrapper">
                                    <span i18n
                                        >This is the third step of our
                                        horizontal wizard</span
                                    >
                                </div>

                                <ng-template nuiWizardStepFooter>
                                    <ng-container
                                        *ngTemplateOutlet="wizardCancelDialog"
                                    ></ng-container>
                                    <ng-container
                                        *ngTemplateOutlet="wizardPreviousDialog"
                                    ></ng-container>
                                    <ng-container
                                        *ngTemplateOutlet="wizardNextDialog"
                                    ></ng-container>
                                </ng-template>
                            </nui-wizard-step-v2>

                            <nui-wizard-step-v2 label="Summary" #finalStep>
                                <div class="step-content-wrapper">
                                    <span i18n
                                        >We finally reached our last step</span
                                    >
                                </div>
                                <ng-template nuiWizardStepFooter>
                                    <ng-container
                                        *ngTemplateOutlet="wizardCancelDialog"
                                    ></ng-container>
                                    <ng-container
                                        *ngTemplateOutlet="wizardPreviousDialog"
                                    ></ng-container>
                                    <button
                                        class="complete"
                                        type="button"
                                        nui-button
                                        displayStyle="primary"
                                        (click)="completeWizard(finalStep)"
                                    >
                                        Finish
                                    </button>
                                </ng-template>
                            </nui-wizard-step-v2>

                            <ng-template #wizardCancelDialog>
                                <button
                                    class="cancel"
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

                            <ng-template #wizardPreviousDialog>
                                <button
                                    type="button"
                                    nuiWizardPrevious
                                    nui-button
                                    icon="caret-left"
                                >
                                    Back
                                </button>
                            </ng-template>

                            <ng-template #wizardNextDialog>
                                <button
                                    nuiWizardNext
                                    class="next"
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

    <button
        id="nui-wizard-dialog-trigger"
        nui-button
        type="button"
        (click)="openDialog(dialogWizard)"
        i18n
    >
        Open dialog wizard
    </button>
</div>

<div class="mb-3">
    <nui-wizard-horizontal #wizardDynamic id="nui-wizard-horizontal-dynamic">
        <nui-wizard-step-v2
            *ngFor="let step of steps; let i = index; let isLast = last"
        >
            <ng-template nuiWizardStepLabel>{{
                step.title + " (" + i + ")"
            }}</ng-template>
            <ng-container *ngTemplateOutlet="step.templateRef"></ng-container>
            <ng-template nuiWizardStepFooter>
                <ng-container *ngIf="i !== 0">
                    <button
                        icon="caret-left"
                        nui-button
                        nuiWizardPrevious
                        type="button"
                    >
                        Back
                    </button>
                </ng-container>
                <ng-container *ngIf="!isLast">
                    <button
                        displayStyle="primary"
                        icon="caret-right"
                        iconRight="true"
                        nui-button
                        nuiWizardNext
                        type="button"
                    >
                        Next
                    </button>
                </ng-container>
            </ng-template>
        </nui-wizard-step-v2>

        <ng-template #dynamicStep>
            <p class="m-5" i18n>
                Hi! I'm a step added dynamically using a TemplateRef by clicking
                a button from the first step !
            </p>
        </ng-template>

        <ng-template #normalStep>
            <div class="p-5">
                <p i18n>Hi! You can add next step dynamically</p>

                <button
                    (click)="addStep(dynamicStep)"
                    class="add"
                    nui-button
                    type="button"
                    id="nui-add-step-dynamically"
                >
                    Add dynamic step w/template
                </button>
            </div>
        </ng-template>
    </nui-wizard-horizontal>
    <div class="d-flex">
        <div>
            <span
                [ngStyle]="{ 'font-weight': 'bold' }"
                class="nui-textbox--bold"
                >Step index to remove</span
            >
            <br />
            <nui-textbox-number
                #number
                [minValue]="1"
                [value]="1"
            ></nui-textbox-number>
        </div>
        <button
            (click)="removeStep(+number.value)"
            [disabled]="+number.value < 1"
            class="ml-3 h-25 align-self-end"
            displayStyle="destructive"
            i18n
            id="nui-remove-wizard-step-button"
            nui-button
            type="button"
        >
            Remove step dynamically
        </button>
    </div>
</div>

<div class="mb-3">
    <nui-wizard-horizontal #nuiWizard id="nui-wizard-v2-responsive-headers">
        <ng-container *ngFor="let step of responsiveSteps; let i = index">
            <nui-wizard-step-v2 i18n-label [label]="'Step ' + (i + 1)">
                <div class="m-5">
                    <span i18n>This is the step #{{ i + 1 }}</span
                    >.
                </div>
                <ng-template nuiWizardStepFooter>
                    <ng-container
                        *ngTemplateOutlet="wizardCancelResponsive"
                    ></ng-container>
                    <ng-container *ngIf="i">
                        <ng-container
                            *ngTemplateOutlet="wizardPreviousResponsive"
                        ></ng-container>
                    </ng-container>
                    <ng-container *ngIf="i !== responsiveSteps.length - 1">
                        <ng-container
                            *ngTemplateOutlet="wizardNextResponsive"
                        ></ng-container>
                    </ng-container>
                    <ng-container *ngIf="i === responsiveSteps.length - 1">
                        <ng-container
                            *ngTemplateOutlet="wizardFinishResponsive"
                        ></ng-container>
                    </ng-container>
                </ng-template>
            </nui-wizard-step-v2>
        </ng-container>

        <ng-template #wizardPreviousResponsive>
            <button
                type="button"
                nuiWizardPrevious
                nui-button
                icon="caret-left"
            >
                Back
            </button>
        </ng-template>

        <ng-template #wizardNextResponsive>
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

        <ng-template #wizardCancelResponsive>
            <button type="button" nui-button displayStyle="action">
                Cancel
            </button>
        </ng-template>

        <ng-template #wizardFinishResponsive>
            <button type="button" nui-button displayStyle="primary">
                Finish
            </button>
        </ng-template>
    </nui-wizard-horizontal>
</div>
`;export{n as default};
