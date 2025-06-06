import"./chunk-XR34LRGE.js";var i=`<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-remove-dynamic"
    finishText="Finish"
    (selectionChange)="select($event)"
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
    <button nui-button type="button" (click)="addStep()" i18n>
        Add dynamic step
    </button>
</ng-template>
<ng-template #dynamicStepTemplate>
    <p i18n>Hi! I'm dynamic step!</p>
</ng-template>

<div class="d-flex">
    <div class="">
        <span class="nui-textbox--bold" [ngStyle]="{ 'font-weight': 'bold' }"
            >Step index to remove</span
        >
        <br />
        <nui-textbox-number [minValue]="1" #number></nui-textbox-number>
    </div>
    <button
        class="ml-3 h-25 align-self-end"
        displayStyle="destructive"
        nui-button
        type="button"
        (click)="removeStep(+number.value)"
        i18n
    >
        Remove step dynamically
    </button>
</div>
`;export{i as default};
