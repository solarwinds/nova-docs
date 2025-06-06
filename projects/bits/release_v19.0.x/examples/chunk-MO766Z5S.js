import"./chunk-VBFW7A5V.js";var e=`<nui-wizard-horizontal #wizard (selectionChange)="onSelectionChange($event)">
    <nui-wizard-step-v2
        *ngFor="let step of steps; let i = index; let isLast = last"
    >
        <ng-template nuiWizardStepLabel>{{ step.title }}</ng-template>
        <ng-container *ngTemplateOutlet="step.templateRef"></ng-container>
        <ng-template nuiWizardStepFooter>
            <ng-container *ngIf="!isLast || i >= 1">
                <button
                    type="button"
                    displayStyle="action"
                    nui-button
                    (click)="resetWizard()"
                    i18n
                >
                    Cancel
                </button>
            </ng-container>
            <ng-container *ngIf="i !== 0">
                <button
                    type="button"
                    nuiWizardPrevious
                    nui-button
                    icon="caret-left"
                >
                    Back
                </button>
            </ng-container>
            <ng-container *ngIf="!isLast">
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
            </ng-container>
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

    <ng-template #dynamicStep>
        <p i18n>
            Hi! I'm a step added dynamically using a TemplateRef by clicking a
            button from the first step !
        </p>
    </ng-template>

    <ng-template #normalStep>
        <div class="p-5">
            <p i18n>Hi! You can add next step dynamically</p>

            <button nui-button type="button" (click)="addStep(dynamicStep)">
                Add dynamic step
            </button>
        </div>
    </ng-template>
</nui-wizard-horizontal>
`;export{e as default};
