import"./chunk-VBFW7A5V.js";var a=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiCheckboxModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    <code>&lt;nui-checkbox&gt;</code> is a basic multi-select input component.
    Use the <code>checked</code> input to control the checkbox state. Use the
    <code>value</code> input to associate a value with the checkbox as part of
    form.
</p>
<nui-example-wrapper filenamePrefix="checkbox-basic" exampleTitle="Basic Usage">
    <nui-checkbox-basic-example></nui-checkbox-basic-example>
</nui-example-wrapper>

<h2>Help Hint</h2>
<p>
    Use the <code>hint</code> input to display a help hint beneath the checkbox
    label.
</p>
<nui-example-wrapper
    filenamePrefix="checkbox-helphint"
    exampleTitle="Help Hint"
>
    <nui-checkbox-helphint-example></nui-checkbox-helphint-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>
    Use the <code>disabled</code> input to control the checkbox disabled state.
</p>
<nui-example-wrapper filenamePrefix="checkbox-disabled" exampleTitle="Disabled">
    <nui-checkbox-disabled-example></nui-checkbox-disabled-example>
</nui-example-wrapper>

<h2>Indeterminate</h2>
<p>
    Use the <code>indeterminate</code> input to set the checkbox state to
    indeterminate.
</p>
<nui-example-wrapper
    filenamePrefix="checkbox-indeterminate"
    exampleTitle="Indeterminate"
>
    <nui-checkbox-indeterminate-example></nui-checkbox-indeterminate-example>
</nui-example-wrapper>
<h2>Value Change Output</h2>
<p>
    Use the <code>valueChange</code> output to track changes in value of
    checkbox.
</p>
<nui-example-wrapper filenamePrefix="checkbox-output" exampleTitle="Output">
    <nui-checkbox-output-example></nui-checkbox-output-example>
</nui-example-wrapper>

<h2>Part of Form</h2>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Make sure</strong> you're using the
    <code>Validators.requiredTrue</code> validation for single checkbox in forms
    (not checkbox group). The <code>Validators.required</code> won't work for
    them.
</nui-message>
<p><code>&lt;nui-checkbox&gt;</code> can be used in reactive forms.</p>
<nui-example-wrapper filenamePrefix="checkbox-in-form" exampleTitle="In a Form">
    <nui-checkbox-in-form-example></nui-checkbox-in-form-example>
</nui-example-wrapper>
`;export{a as default};
