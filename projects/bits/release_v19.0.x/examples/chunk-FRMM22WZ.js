import"./chunk-VBFW7A5V.js";var e=`<nui-wizard-horizontal #wizard>
    <!--  content of the 1st step -->
    <nui-wizard-step-v2 i18n-label label="First step">
        <!-- content of the current step -->
        <div class="p-5">
            <span i18n>This is the first step of our horizontal wizard</span>
        </div>

        <!-- content of the footer -->
        <ng-template nuiWizardStepFooter>
            <div class="custom-footer step_1">
                <button
                    class="btn-custom"
                    nui-button
                    type="button"
                    icon="add"
                    i18n
                >
                    Custom button 1
                </button>
                <span i18n
                    >This is some custom content added in the footer for our
                    first step</span
                >
                <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </div>
        </ng-template>
    </nui-wizard-step-v2>

    <!--  content of the final step -->
    <nui-wizard-step-v2 i18n-label label="Final step">
        <div class="p-5">
            <span i18n>We finally reached our last step!</span>
        </div>
        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->
        <ng-template nuiWizardStepFooter>
            <div class="custom-footer step_2">
                <span i18n
                    >This is some custom content added in the footer for our
                    second step</span
                >
                <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
                <button nui-button type="button" icon="remove" i18n>
                    Custom button 2
                </button>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <button
                    type="button"
                    displayStyle="primary"
                    nui-button
                    (click)="finishWizard()"
                    i18n
                >
                    Finish
                </button>
            </div>
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
        <button type="button" nuiWizardPrevious nui-button icon="caret-left">
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
`;export{e as default};
