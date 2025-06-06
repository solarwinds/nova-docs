import"./chunk-VBFW7A5V.js";var i=`<nui-wizard
    id="nui-demo-wizard-confirmation-dialog"
    (cancel)="openConfirmationDialog($event, content)"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        i18n-title
        title="First"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="Second"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="Third"
        [stepTemplate]="step1"
    ></nui-wizard-step>
</nui-wizard>
<ng-template #step1>
    <p i18n>Wizard cancel method behavior</p>
</ng-template>
<ng-template #content let-close="close">
    <nui-dialog-header
        i18n-title
        title="Really want to leave?"
        (close)="onButtonClick()"
    ></nui-dialog-header>
    <div class="dialog-body">
        <p i18n>
            There is at least one completed step in this wizard. Are you sure
            you want to leave?
        </p>
    </div>
    <nui-dialog-footer>
        <button nui-button type="button" (click)="onButtonClick('Stay')" i18n>
            Stay
        </button>
        <button
            nui-button
            type="button"
            displayStyle="primary"
            (click)="onButtonClick('Leave')"
            i18n
        >
            Leave
        </button>
    </nui-dialog-footer>
</ng-template>
`;export{i as default};
