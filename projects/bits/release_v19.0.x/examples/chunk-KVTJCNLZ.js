import"./chunk-VBFW7A5V.js";var e=`<nui-wizard-horizontal #wizard>
    <nui-wizard-step-v2 i18n-label label="First step">
        <div class="p-5">
            <span i18n>This is the first step of our wizard.</span>
        </div>
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <!--
        See how we use the 'stepIconsConfig' input here to override the global icons configuration
        for this particular wizard step
    -->
    <nui-wizard-step-v2
        i18n-label
        label="Second step"
        [stepStateConfig]="secondStepIconConfig"
    >
        <div class="p-5">
            <span i18n>This is the second step of our wizard.</span>
        </div>
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <nui-wizard-step-v2 i18n-label label="Final step">
        <div class="p-5">
            <span i18n>We finally reached our last step</span>
        </div>
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
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
            i18n
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
            i18n
        >
            Next
        </button>
    </ng-template>
</nui-wizard-horizontal>
`;export{e as default};
