import"./chunk-VBFW7A5V.js";var i=`<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-disable"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        #wizardStepFirst
        i18n-title
        title="Disable next step"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        #wizardStepDisable
        i18n-title
        title="Second step"
        [stepTemplate]="stepDisabled"
    ></nui-wizard-step>
</nui-wizard>
<ng-template #step1>
    <p i18n>Hi! You can disable next step</p>
    <div class="btn-group">
        <button
            nui-button
            type="button"
            id="nui-demo-disable-button"
            (click)="disableStep()"
            i18n
        >
            Disable next step
        </button>
        <button
            nui-button
            type="button"
            id="nui-demo-enable-button"
            (click)="enableStep()"
            i18n
        >
            Enable next step
        </button>
    </div>
</ng-template>
<ng-template #stepDisabled>
    <p i18n>Disabled step</p>
</ng-template>
`;export{i as default};
