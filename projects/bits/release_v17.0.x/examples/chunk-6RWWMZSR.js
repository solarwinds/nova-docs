import"./chunk-XR34LRGE.js";var n=`<nui-wizard-horizontal #wizardComponent>
    <!--  content of the 1st step -->
    <nui-wizard-step-v2
        i18n-label
        label="Very long header text. Very long header text"
    >
        <!-- content of the current step -->
        <div class="p-5">
            <span i18n>Step with long header text</span>
        </div>

        <!-- content of the footer -->
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <!--  step without tooltip -->
    <nui-wizard-step-v2>
        <ng-template nuiWizardStepLabel>
            <span>Without tooltip</span>
        </ng-template>
        <div class="p-5">
            <span i18n>Step without header tooltip</span>
        </div>
        <!-- content of the footer -->
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <!--  Step with custom label template and tooltip-->
    <nui-wizard-step-v2>
        <ng-template nuiWizardStepLabel>
            <span i18n-nuiTooltip nuiTooltip="Custom Label template">
                <i>Custom Label template</i>
            </span>
        </ng-template>
        <div class="p-5">
            <span i18n>Step with custom label in header</span>
        </div>
        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->
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
            i18n
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
            i18n
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
`;export{n as default};
