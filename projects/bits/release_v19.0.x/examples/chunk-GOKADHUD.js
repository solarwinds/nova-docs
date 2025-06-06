import"./chunk-VBFW7A5V.js";var p=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiProgressModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    In order to use progress component, you need to pass <code>show</code>,
    <code>percent</code> and <code>message</code> bindings.
</p>

<nui-example-wrapper filenamePrefix="basic-progress" exampleTitle="Basic Usage">
    <nui-basic-progress-example></nui-basic-progress-example>
</nui-example-wrapper>

<h2>Stacked Header</h2>

<p>
    Progress header could be placed on the left side. You need to pass
    <code>stacked</code> as true for that. Progress percents could be shown by
    using <code>showNumber</code> as true. Progress could be canceled by passing
    <code>allowCancel</code> as true and <code>cancelProgress</code> function.
</p>

<nui-example-wrapper
    filenamePrefix="stacked-header"
    exampleTitle="Stacked Header"
>
    <nui-stacked-header-example></nui-stacked-header-example>
</nui-example-wrapper>

<h2>Indeterminate</h2>

<p>
    In case <code>percent</code> was not passed, indeterminate progress will be
    used.
</p>

<nui-example-wrapper
    filenamePrefix="indeterminate-progress"
    exampleTitle="Indeterminate"
>
    <nui-indeterminate-progress-example></nui-indeterminate-progress-example>
</nui-example-wrapper>

<h2>Compact</h2>

<p>
    To hide all elements from Progress, except for progress bar, and to remove
    all margins from progress bar set
    <code>compactMode</code> to true.
</p>

<nui-example-wrapper filenamePrefix="progress-compact" exampleTitle="Compact">
    <nui-progress-compact-example></nui-progress-compact-example>
</nui-example-wrapper>

<h2>Custom Help Template</h2>

<p>
    In order to customize the help content that appears below the progress bar,
    you can pass a template via the <code>helpTemplateRef</code> input.
</p>
<nui-message type="info" [allowDismiss]="false">
    When the <code>helpTemplateRef</code> input is used, there's no need to pass
    a value to the <code>helpText</code> input.
</nui-message>

<nui-example-wrapper
    filenamePrefix="progress-with-help-template"
    exampleTitle="Custom Help Template"
>
    <nui-progress-with-help-template-example></nui-progress-with-help-template-example>
</nui-example-wrapper>
`;export{p as default};
