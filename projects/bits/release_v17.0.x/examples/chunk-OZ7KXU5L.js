import"./chunk-XR34LRGE.js";var i=`<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-add-dynamic"
    (selectionChange)="select($event)"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        #wizardStepAdd
        i18n-title
        title="Add step dynamically"
        [stepTemplate]="step1"
    ></nui-wizard-step>
</nui-wizard>
<nui-wizard-step
    #dynamicStep
    [title]="'Dynamic'"
    [stepTemplate]="dynamicStepTemplate"
></nui-wizard-step>
<ng-template #step1>
    <p i18n>Hi! You can add next step dynamically</p>
    <button
        nui-button
        type="button"
        id="nui-demo-dynamic-button"
        (click)="addStep()"
        i18n
    >
        Add dynamic step
    </button>
</ng-template>
<ng-template #dynamicStepTemplate>
    <p i18n>Hi! I'm dynamic step!</p>
</ng-template>
`;export{i as default};
