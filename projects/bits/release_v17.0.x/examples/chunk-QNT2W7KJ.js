import"./chunk-XR34LRGE.js";var i=`<ng-template #step1>
    <nui-textbox
        i18n-caption
        caption="First"
        name="hint"
        [value]="hint"
        customBoxWidth="150px"
        (textChange)="onOptionChange($event)"
    >
    </nui-textbox>
</ng-template>
<ng-template #step2>
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
</ng-template>

<nui-wizard
    #wizardComponent
    id="nui-demo-wizard"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        id="nui-demo-wizard-step"
        i18n-title
        title="First"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="Final"
        [stepTemplate]="step2"
    ></nui-wizard-step>
</nui-wizard>
`;export{i as default};
