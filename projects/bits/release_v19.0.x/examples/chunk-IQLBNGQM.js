import"./chunk-VBFW7A5V.js";var a=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTextboxModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To use the textbox component add an <code>&lt;nui-textbox&gt;</code> to your
    template. Optionally, you can set an initial value via the
    <code>value</code> input.
</p>
<nui-example-wrapper filenamePrefix="textbox-basic" exampleTitle="Basic usage">
    <nui-textbox-basic-example></nui-textbox-basic-example>
</nui-example-wrapper>

<h2>Placeholder</h2>
<p>
    To add a placeholder to your textbox, set the <code>placeholder</code> input
    to the desired string value.
</p>
<nui-example-wrapper
    filenamePrefix="textbox-placeholder"
    exampleTitle="Textbox with placeholder"
>
    <nui-textbox-placeholder-example></nui-textbox-placeholder-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>To disable the textbox, set the <code>disabled</code> input to true.</p>
<nui-example-wrapper
    filenamePrefix="textbox-disabled"
    exampleTitle="Disabled textbox"
>
    <nui-textbox-disabled-example></nui-textbox-disabled-example>
</nui-example-wrapper>

<h2>Readonly</h2>
<p>
    To make the textbox readonly, set the <code>readonly</code> input to true.
</p>
<nui-example-wrapper
    filenamePrefix="textbox-readonly"
    exampleTitle="readonly textbox"
>
    <nui-textbox-readonly-example></nui-textbox-readonly-example>
</nui-example-wrapper>

<h2>Invalid State</h2>
<p>
    To manually set the textbox to an invalid value state, pass true to the
    <code>isInErrorState</code> input. Note that this input is only about
    styling. If a textbox with built-in validation is needed, please wrap your
    textbox in an
    <code
        ><a href="../components/FormFieldComponent.html" target="_blank"
            >&lt;nui-form-field&gt;</a
        ></code
    >.
</p>
<nui-example-wrapper
    filenamePrefix="textbox-required"
    exampleTitle="Required textbox"
>
    <nui-textbox-required-example></nui-textbox-required-example>
</nui-example-wrapper>

<h2>Adding a Hint</h2>
<p>
    To add a hint underneath the textbox, wrap
    <code>&lt;nui-textbox&gt;</code> in an
    <code>&lt;nui-form-field&gt;</code> component and set
    <code>&lt;nui-form-field&gt;</code>'s <code>hint</code> input to the desired
    hint string.
</p>
<nui-example-wrapper
    filenamePrefix="textbox-hint"
    exampleTitle="Textbox with hint"
>
    <nui-textbox-hint-example></nui-textbox-hint-example>
</nui-example-wrapper>

<h2>Additional Info Icon</h2>
<p>
    To apply a hoverable "additional info" icon to the textbox, wrap
    <code>&lt;nui-textbox&gt;</code> in an
    <code>&lt;nui-form-field&gt;</code> component and set
    <code>&lt;nui-form-field&gt;</code>'s <code>info</code> input to the desired
    info string.
</p>
<nui-example-wrapper
    filenamePrefix="textbox-info"
    exampleTitle="Textbox with additional info"
>
    <nui-textbox-info-example></nui-textbox-info-example>
</nui-example-wrapper>

<h2>Textarea</h2>
<p>
    To create a textarea set the <code>rows</code> input to the desired number
    of textarea rows.
</p>
<p>
    <b>Note:</b> To make textarea scrollable, add
    <code>textarea-scrollable</code> class to the
    <code>nui-textbox</code> element.
</p>
<nui-example-wrapper filenamePrefix="textbox-area" exampleTitle="Textarea">
    <nui-textbox-area-example></nui-textbox-area-example>
</nui-example-wrapper>

<h2>Custom Width</h2>
<p>
    Textbox can have a custom width. To configure it, set the
    <code>customBoxWidth</code> input to a css-style size value, e.g. "200px",
    "10vw".
</p>
<nui-example-wrapper
    filenamePrefix="textbox-custom-width"
    exampleTitle="Textbox with custom box width"
>
    <nui-textbox-custom-box-width-example></nui-textbox-custom-box-width-example>
</nui-example-wrapper>

<h3>Getting a Value</h3>
<p>
    You can use binding to the <code>valueChanged</code> output (emits after
    <strong>input</strong> was changed) to get a value from a textbox component
</p>

<nui-example-wrapper
    filenamePrefix="textbox-getting-value"
    exampleTitle="Getting a Value"
>
    <nui-textbox-getting-value-example></nui-textbox-getting-value-example>
</nui-example-wrapper>
`;export{a as default};
