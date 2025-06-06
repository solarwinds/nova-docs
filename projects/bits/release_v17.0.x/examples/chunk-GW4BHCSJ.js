import"./chunk-XR34LRGE.js";var i=`<ng-template #step1>
    <nui-checkbox
        name="nui-demo-checkbox"
        i18n-title
        title="Check box with help text"
        i18n-hint
        hint="This is some help text"
        required="true"
        [value]="false"
        i18n
        >Check box with help text
    </nui-checkbox>
    <nui-checkbox
        name="nui-demo-checkbox-plain"
        [checked]="true"
        [value]="false"
        i18n
        >Plain checkbox
    </nui-checkbox>
</ng-template>
<ng-template #step2>
    <nui-checkbox-group
        name="vegetable"
        [(values)]="selectedVegetables"
        (valuesChange)="valuesChanged($event)"
    >
        <nui-checkbox
            *ngFor="let vegetable of vegetables"
            [value]="vegetable"
            [checked]="isChecked(vegetable)"
        >
            {{ vegetable }}
        </nui-checkbox>
    </nui-checkbox-group>
</ng-template>
<ng-template #step3>
    <p i18n>Not visited</p>
</ng-template>
<ng-template #step4>
    <p i18n>Summary</p>
</ng-template>
<ng-template #dialogWizard>
    <nui-dialog-header
        i18n-title
        title="Wizard dialog"
        (closed)="closeDialog()"
    ></nui-dialog-header>
    <div class="dialog-body compact-mode">
        <nui-wizard
            id="nui-demo-wizard-dialog"
            (cancel)="closeDialog()"
            finishText="Finish"
            i18n-finishText
        >
            <nui-wizard-step
                i18n-title
                title="Completed"
                [stepTemplate]="step1"
            ></nui-wizard-step>
            <nui-wizard-step
                i18n-title
                title="Active"
                [stepTemplate]="step2"
            ></nui-wizard-step>
            <nui-wizard-step
                i18n-title
                title="Not visited"
                [stepTemplate]="step3"
            ></nui-wizard-step>
            <nui-wizard-step
                i18n-title
                title="Summary"
                [stepTemplate]="step4"
            ></nui-wizard-step>
        </nui-wizard>
    </div>
</ng-template>
<button
    id="nui-demo-dialog-wizard-btn"
    nui-button
    type="button"
    (click)="openDialog(dialogWizard)"
    i18n
>
    Open dialog wizard
</button>
`;export{i as default};
