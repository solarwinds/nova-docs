import"./chunk-VBFW7A5V.js";var n=`<nui-wizard-horizontal #wizardComponent>
    <!--Static step-->
    <nui-wizard-step-v2 i18n-label label="Normal step">
        <div class="p-5">
            <p i18n>Hi! You can add next step dynamically</p>

            <button
                nui-button
                type="button"
                (click)="addStep(dynamicTemplate2)"
            >
                Add dynamic step w/template
            </button>
        </div>

        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <nui-wizard-step-v2
        *ngIf="enableDynamicStepWithButton"
        i18n-label
        label="Added dynamically"
    >
        <ng-template nuiWizardStepLabel>Dynamic w/button</ng-template>
        <p class="m-5" i18n>
            Hi! I'm dynamic step that can be enabled/disabled programmatically
            via the toggle button under the wizard!
        </p>

        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
            <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <ng-container
        *ngTemplateOutlet="dynamicStepWithTemplate"
        ngProjectAs="nui-wizard-step-v2"
    ></ng-container>
    <ng-template #dynamicStepWithTemplate>
        <nui-wizard-step-v2>
            <ng-template nuiWizardStepLabel>Dynamic w/template</ng-template>
            <p class="m-5" i18n>Hi! I'm dynamic step added automatically!</p>

            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
                <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
                <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
            </ng-template>
        </nui-wizard-step-v2>
    </ng-template>

    <nui-wizard-step-v2 *ngFor="let step of steps; let isLast = last">
        <ng-template nuiWizardStepLabel>{{ step.title }}</ng-template>
        <ng-container *ngTemplateOutlet="step.templateRef"></ng-container>
        <ng-template nuiWizardStepFooter>
            <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
            <ng-container *ngTemplateOutlet="wizardPrevious"></ng-container>
            <ng-container
                *ngTemplateOutlet="!isLast && wizardNext"
            ></ng-container>
            <ng-container *ngIf="isLast && i >= 1">
                <button
                    type="button"
                    displayStyle="primary"
                    nui-button
                    (click)="finishWizard()"
                    i18n
                >
                    Finish
                </button>
            </ng-container>
        </ng-template>
    </nui-wizard-step-v2>

    <ng-template #dynamicTemplate1>
        <p class="m-5" i18n>
            Hi! I'm dynamic step added automatically during ngAfterViewInit of
            this wizard using a TemplateRef!
        </p>
    </ng-template>

    <ng-template #dynamicTemplate2>
        <p class="m-5" i18n>
            Hi! I'm a step added dynamically using a TemplateRef by clicking a
            button from the first step !
        </p>
    </ng-template>

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
<div>
    <button nui-button type="button" (click)="toggleStep()">
        {{ !enableDynamicStepWithButton ? "Enable" : "Disable" }} dynamic step
        w/button
    </button>
</div>
`;export{n as default};
