import"./chunk-VBFW7A5V.js";var i=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiWizardModule</code>
    </li>
</ul>
<h2>Basic Usage</h2>

<p>
    To use the wizard component, place a <code>nui-wizard</code> element in your
    template and include one or more
    <code
        ><a href="../components/WizardStepComponent.html" target="_blank"
            >nui-wizard-step</a
        ></code
    >
    elements as children of the <code>nui-wizard</code> element.
</p>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> To specify a label for the finish button of the last
    step, specify a value for the <code>nui-wizard</code>'s
    <code>finishText</code> input.
</nui-message>
<nui-example-wrapper
    filenamePrefix="wizard-simple"
    exampleTitle="Simple wizard"
>
    <nui-wizard-simple-example></nui-wizard-simple-example>
</nui-example-wrapper>

<h2>Wizard with separate step headings</h2>
<p>
    You can set separate values for the step name to show in the wizard header
    and the step content.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-with-separate-step-headings"
    exampleTitle="Wizard with separate step headings"
>
    <nui-wizard-with-separate-step-headings-example></nui-wizard-with-separate-step-headings-example>
</nui-example-wrapper>

<h2>Usage with a dialog</h2>
<p>
    You can pass an existing wizard component as content of the dialog window.
</p>
<p>You should insert wizard component in dialog body.</p>
<nui-example-wrapper
    filenamePrefix="wizard-dialog"
    exampleTitle="wizard in dialog"
>
    <nui-wizard-dialog-example></nui-wizard-dialog-example>
</nui-example-wrapper>
<h2>Busy step</h2>
<p>You can make your step busy to forbid actions.</p>
<p>
    If you want to hide only step content you should pass 'busyConfig' (look at
    type 'IBusyConfig') to 'navigationControl' method of wizard step to make it
    work.
</p>
<p>
    If you want to hide all Wizard content you need just wrap Wizard component
    on busy
</p>
<nui-example-wrapper
    filenamePrefix="wizard-busy"
    exampleTitle="wizard step busy"
>
    <nui-wizard-busy-example></nui-wizard-busy-example>
</nui-example-wrapper>
<h2>Validation</h2>
<p>You can use any custom input validation to wizard step.</p>
<p>
    To forbid passing to next step while form is not valid you should pass
    boolean value to next step's property 'stepControl'.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-validation"
    exampleTitle="wizard step validation"
>
    <nui-wizard-validation-example></nui-wizard-validation-example>
</nui-example-wrapper>
<h2>Disabled step</h2>
<p>You can disable wizard step to forbid user switch to this step.</p>
<p>
    To make step disabled you should use wizard method 'disableStep' and pass
    wizardStep component to it.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-disabled"
    exampleTitle="wizard step disable"
>
    <nui-wizard-disabled-example></nui-wizard-disabled-example>
</nui-example-wrapper>
<h2>Hide/show step</h2>
<p>You can hide or show wizard steps.</p>
<p>
    To make it you should use wizard methods 'hideStep', 'showStep' and pass
    wizardStepComponent to it.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-hide"
    exampleTitle="wizard step hide/show"
>
    <nui-wizard-hide-example></nui-wizard-hide-example>
</nui-example-wrapper>
<h2>Adding step dynamically</h2>
<p>You are able to add wizard steps dynamically</p>
<p>
    To make it you should use wizard method 'addStepDynamic' and pass 2
    arguments wizardStepComponent and index to insert it in correct place.
</p>
<p>
    <strong>Note:</strong> Angular doesn't allow binding to outputs of
    dynamically created component from template. You can access outputs of
    <code
        ><a href="../components/WizardStepComponent.html" target="_blank"
            >nui-wizard-step</a
        ></code
    >
    directly.<code>addStepDynamic</code> method of Wizard returns you instance
    of dynamically added step and you can manually subscribe to outputs like
    <code>enter</code>,<code>exit</code> etc.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-dynamic"
    exampleTitle="wizard add dynamic step"
>
    <nui-wizard-dynamic-example></nui-wizard-dynamic-example>
</nui-example-wrapper>
<h2>Remove step dynamically</h2>
<p>You are able to remove wizard steps dynamically</p>
<p>To make it you should use wizard method 'removeStep' and pass index</p>
<p><strong>Note:</strong> Your couldn't remove first (0 index) step</p>
<nui-example-wrapper
    filenamePrefix="wizard-dynamic-remove"
    exampleTitle="wizard remove dynamic step"
>
    <nui-wizard-dynamic-remove-example></nui-wizard-dynamic-remove-example>
</nui-example-wrapper>
<h2>Additional button in footer example</h2>
<p>You are able to provide additional button in footer of wizard.</p>
<p>
    To do it you should provide nui-button as a content of nui-wizard component.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-additional-button"
    exampleTitle="wizard additional button"
>
    <nui-wizard-additional-button-example></nui-wizard-additional-button-example>
</nui-example-wrapper>
<h2>Confirmation dialog</h2>
<p>
    To implement confirmation dialog you should use method 'confirm' from dialog
    service and call it from outputs such as 'onCancel' or 'onFinish'.
</p>
<p>
    By default UX suggestion 'onCancel' output sends boolean event which is
    false when user is on first step.
</p>
<p>
    On this example confirmation dialog represents default UX behavior and does
    not appear on first wizard step.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-confirmation-dialog"
    exampleTitle="wizard confirmation dialog"
>
    <nui-wizard-confirmation-dialog-example></nui-wizard-confirmation-dialog-example>
</nui-example-wrapper>
<h2>Constant height</h2>
<p>
    To make the height of the wizard constant for all steps and have the body of
    a step scroll vertically if it extends beyond the fixed height, set the
    <code>enableScroll</code> input to true and set the desired height of the
    wizard body container using the <code>bodyContainerHeight</code> input.
</p>
<p>
    Supported values of <code>bodyContainerHeight</code> are the same as in CSS.
    For example: 100px, 5vh, etc.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-constant-height"
    exampleTitle="wizard constant height"
>
    <nui-wizard-constant-height-example></nui-wizard-constant-height-example>
</nui-example-wrapper>
<h2>Stretched steps line width</h2>
<p>
    To make the width of the steps line stretch according to the largest of step
    labels, use <code>stretchStepLines</code> input. With it set to
    <code>true</code>, wizard will calculate the width of the largest label and
    adjust all the lines so the labels don't overflow.
</p>
<nui-example-wrapper
    filenamePrefix="wizard-custom-step-line-width"
    exampleTitle="wizard custom steps label width"
>
    <nui-wizard-custom-step-line-width></nui-wizard-custom-step-line-width>
</nui-example-wrapper>

<h2>Wizard steps combination</h2>
<p>
    You can provide a combination of static and dynamic steps of the wizard. See
    example below:
</p>
<nui-example-wrapper
    filenamePrefix="wizard-steps"
    exampleTitle="wizard steps combination"
>
    <nui-wizard-steps-example></nui-wizard-steps-example>
</nui-example-wrapper>

<h2>Wizard reset step</h2>
<p>
    You can reset step by calling wizard 'resetStep' method. Note that next
    steps will be reset in case they was visited
</p>
<nui-example-wrapper
    filenamePrefix="wizard-reset-step"
    exampleTitle="wizard reset step"
>
    <nui-wizard-reset-step-example></nui-wizard-reset-step-example>
</nui-example-wrapper>
`;export{i as default};
