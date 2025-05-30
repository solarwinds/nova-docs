import"./chunk-VBFW7A5V.js";var e=`<nui-wizard-horizontal #nuiWizard>
    <ng-container *ngFor="let step of steps; let i = index">
        <nui-wizard-step-v2 i18n-label [label]="'Step ' + (i + 1)">
            <div class="m-5">
                <span i18n>This is the step #{{ i + 1 }}</span
                >.
            </div>
            <ng-template nuiWizardStepFooter>
                <ng-container *ngTemplateOutlet="wizardCancel"></ng-container>
                <ng-container *ngIf="i">
                    <ng-container
                        *ngTemplateOutlet="wizardPrevious"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="i !== steps.length - 1">
                    <ng-container *ngTemplateOutlet="wizardNext"></ng-container>
                </ng-container>
                <ng-container *ngIf="i === steps.length - 1">
                    <ng-container
                        *ngTemplateOutlet="wizardFinish"
                    ></ng-container>
                </ng-container>
            </ng-template>
        </nui-wizard-step-v2>
    </ng-container>

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

    <ng-template #wizardCancel>
        <button
            type="button"
            nui-button
            displayStyle="action"
            (click)="reset(); notifyOnCancel()"
        >
            Cancel
        </button>
    </ng-template>

    <ng-template #wizardFinish>
        <button
            type="button"
            nui-button
            displayStyle="primary"
            (click)="notifyOnFinished()"
        >
            Finish
        </button>
    </ng-template>
</nui-wizard-horizontal>
`;export{e as default};
