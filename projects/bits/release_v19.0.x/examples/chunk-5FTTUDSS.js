import"./chunk-VBFW7A5V.js";var n=`<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-add-additional-button"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        #wizardStepAdditional
        [title]="'Additional button step'"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <button
        nui-button
        type="button"
        id="nui-demo-additional-button"
        (click)="onAdditionalButtonClick()"
        i18n
    >
        Additional button
    </button>
</nui-wizard>
<ng-template #step1>
    <p i18n>There is example of additional button in footer</p>
</ng-template>
`;export{n as default};
