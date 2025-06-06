import"./chunk-VBFW7A5V.js";var n=`<nui-wizard-vertical>
    <!--  content of the 1st step -->
    <nui-wizard-step-v2 i18n-label label="First step">
        <!-- content of the current step -->
        <span i18n>This is the first step of our vertical wizard.</span>

        <!-- content of the footer -->
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <!--  content of the 2nd step -->
    <nui-wizard-step-v2 i18n-label label="Second step">
        <!-- content of the current step -->
        <span i18n>This is the second step of our vertical wizard.</span>

        <!-- content of the footer -->
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <!--  content of the final step -->
    <nui-wizard-step-v2 i18n-label label="Final step">
        <span i18n>We finally reached our last step!</span>
        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

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
</nui-wizard-vertical>
`;export{n as default};
