import"./chunk-VBFW7A5V.js";var t=`<ng-template #step1>
    <nui-textbox name="hint" value="Example Value"> </nui-textbox>
    <button
        nui-button
        class="m-2"
        type="button"
        (click)="increaseHeight()"
        i18n
    >
        Increase height of container
    </button>
    <button
        nui-button
        class="m-2"
        type="button"
        (click)="decreaseHeight()"
        i18n
    >
        Decrease height of container
    </button>
</ng-template>
<ng-template #step2>
    <nui-checkbox [checked]="true" i18n>Checkbox 1</nui-checkbox>
    <nui-checkbox [checked]="false" i18n>Checkbox 2</nui-checkbox>
    <nui-checkbox [checked]="true" i18n>Checkbox 3</nui-checkbox>
</ng-template>
<ng-template #step3>
    <nui-textbox name="hint" value="Step 3 value"> </nui-textbox>
</ng-template>
<ng-template #step4>
    <nui-radio-group name="fruit">
        <nui-radio value="Banana" i18n> Banana </nui-radio>
        <nui-radio value="Mango" i18n> Mango </nui-radio>
        <nui-radio value="Kiwi" i18n> Kiwi </nui-radio>
    </nui-radio-group>
</ng-template>
<nui-wizard
    #wizardComponent
    id="nui-demo-wizard-constant-height"
    [enableScroll]="true"
    [bodyContainerHeight]="wizardBodyHeight"
    finishText="Finish"
    i18n-finishText
>
    <nui-wizard-step
        id="nui-demo-wizard-height-invariable-step"
        i18n-title
        title="First"
        [stepTemplate]="step1"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="Second"
        [stepTemplate]="step2"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="Third"
        [stepTemplate]="step3"
    ></nui-wizard-step>
    <nui-wizard-step
        i18n-title
        title="Final"
        [stepTemplate]="step4"
    ></nui-wizard-step>
</nui-wizard>
`;export{t as default};
