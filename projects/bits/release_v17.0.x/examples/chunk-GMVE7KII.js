import"./chunk-XR34LRGE.js";var i=`<ng-template #step1> </ng-template>
<ng-template #step2> </ng-template>

<nui-wizard
    #wizardComponent
    id="nui-demo-wizard"
    [stretchStepLines]="true"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        id="nui-demo-wizard-step"
        i18n-title
        title="This is an excessively long title why would you do it"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="This title is pretty long too lorem ipsum dolor"
        [stepTemplate]="step2"
    ></nui-wizard-step>
</nui-wizard>
`;export{i as default};
