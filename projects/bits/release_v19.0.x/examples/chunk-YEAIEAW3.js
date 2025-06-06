import"./chunk-VBFW7A5V.js";var i=`<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-hide-show"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        #wizardStepFirst
        i18n-title
        title="Hide show next step"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        #wizardStepHidden
        i18n-title
        title="Second step"
        [stepTemplate]="stepHidden"
    ></nui-wizard-step>
</nui-wizard>
<ng-template #step1>
    <p i18n>Hi! You can hide and show next step</p>
    <div class="btn-group">
        <button
            nui-button
            type="button"
            id="nui-demo-hide-button"
            (click)="hideStep()"
            i18n
        >
            Hide next step
        </button>
        <button
            nui-button
            type="button"
            id="nui-demo-show-button"
            (click)="showStep()"
            i18n
        >
            Show next step
        </button>
    </div>
</ng-template>
<ng-template #stepHidden>
    <p i18n>Hello from second step</p>
</ng-template>
`;export{i as default};
