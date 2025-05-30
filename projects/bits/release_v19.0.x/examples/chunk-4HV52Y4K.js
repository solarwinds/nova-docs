import"./chunk-VBFW7A5V.js";var i=`<ng-template #stepBusy>
    <p i18n>Welcome!</p>
</ng-template>
<ng-template #step2>
    <nui-checkbox
        name="nui-demo-checkbox"
        i18n-title
        title="Check box with help text"
        i18n-hint
        hint="This is some help text"
        required="true"
        [disabled]="isBusy"
        [value]="false"
        i18n
        >Check box with help text
    </nui-checkbox>
    <nui-checkbox
        name="nui-demo-checkbox-plain"
        [checked]="true"
        [value]="false"
        [disabled]="isBusy"
        i18n
        >Plain checkbox
    </nui-checkbox>
</ng-template>
<div nui-busy [busy]="isBusy">
    <nui-wizard
        #wizardComponent
        id="nui-demo-wizard-busy"
        finishText="Finish"
        i18n-finishText
    >
        <nui-wizard-step
            i18n-title
            title="Make step busy"
            [stepTemplate]="stepBusy"
        ></nui-wizard-step>
        <nui-wizard-step
            i18n-title
            title="Final"
            [stepTemplate]="step2"
        ></nui-wizard-step>
    </nui-wizard>
    <nui-spinner size="large" message="Fetching data..."></nui-spinner>
</div>

<button
    nui-button
    type="button"
    id="nui-demo-busy-button"
    (click)="toggleStepBusy()"
    i18n
>
    Toggle busy on current step
</button>
<button nui-button type="button" (click)="toggleBusy()">
    Toggle busy on all wizard content
</button>
`;export{i as default};
