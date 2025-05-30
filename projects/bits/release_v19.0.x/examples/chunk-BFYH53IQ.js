import"./chunk-VBFW7A5V.js";var i=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiSpinnerModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    In order to use spinner component, you need to pass
    <code>show</code> binding.
</p>

<nui-example-wrapper filenamePrefix="spinner-basic" exampleTitle="Basic Usage">
    <nui-spinner-basic-example></nui-spinner-basic-example>
</nui-example-wrapper>

<h2>Size Setting</h2>

<p>
    Spinner supports two sizes: large and small. The default is small. For a
    larger spinner, you can pass <code>large</code> to the
    <code>size</code> input.
</p>

<nui-example-wrapper filenamePrefix="spinner-sizes" exampleTitle="Sizes">
    <nui-spinner-sizes-example></nui-spinner-sizes-example>
</nui-example-wrapper>

<h2>Adding Text</h2>

<p>
    Spinner label could be placed on the right side. You only need to pass
    <code>message</code> string for that. In order to display additional help
    text on the right side you need to pass <code>helpText</code> string.
    <strong>Note:</strong> In order to display the help text, the
    <code>size</code> input must be set to <code>large</code>.
</p>

<nui-example-wrapper
    filenamePrefix="spinner-with-text"
    exampleTitle="Indeterminate With Text"
>
    <nui-spinner-with-text-example></nui-spinner-with-text-example>
</nui-example-wrapper>

<h2>Determinate Progress</h2>

<p>
    To enable determinate progress, set the <code>percent</code> input and pass
    updates to it with numbers between 0 and 100.
</p>

<nui-example-wrapper
    filenamePrefix="spinner-determinate"
    exampleTitle="Determinate Progress"
>
    <nui-spinner-determinate-example></nui-spinner-determinate-example>
</nui-example-wrapper>

<h2>Enabling Cancellation</h2>

<p>
    The spinner can be set to allow cancellation by passing true to the
    <code>allowCancel</code> input. To take action on a cancellation, pass a
    handler to the <code>cancel</code> output.
</p>

<nui-example-wrapper
    filenamePrefix="spinner-with-cancel"
    exampleTitle="Determinate Progress With Cancel"
>
    <nui-spinner-with-cancel-example></nui-spinner-with-cancel-example>
</nui-example-wrapper>

<h2>Modifying Delayed Appearance</h2>

<p>
    To mitigate the possibility of a blink effect that may happen due to the
    show/hide timing, you can optionally set the <code>delay</code> input in
    milliseconds. As the name implies, this input can be used to override the
    delay before showing the spinner for the specified duration after the
    <code>show</code> input value changes to true. The default value for the
    <code>delay</code> input is 250.
</p>

<nui-example-wrapper
    filenamePrefix="spinner-with-delay-toggle"
    exampleTitle="Delayed Appearance"
>
    <nui-spinner-with-delay-toggle-example></nui-spinner-with-delay-toggle-example>
</nui-example-wrapper>
`;export{i as default};
