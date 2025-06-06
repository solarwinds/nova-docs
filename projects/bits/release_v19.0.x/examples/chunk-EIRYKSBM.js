import"./chunk-VBFW7A5V.js";var a=`<p>
    <code>&lt;nui-icon&gt;</code>, as the name implies, allows you to display an
    icon.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiIconModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To use <code>&lt;nui-icon&gt;</code> you can set the <code>icon</code> input
    to the id of one of the available icon provided as part of Nova. See the
    <strong>Available Icons</strong> section on this page.
</p>
<nui-example-wrapper filenamePrefix="icon-basic" exampleTitle="Basic Usage">
    <nui-icon-basic-example></nui-icon-basic-example>
</nui-example-wrapper>

<h2>Size</h2>
<p>
    To override the default size of <code>&lt;nui-icon&gt;</code>, set the
    <code>size</code> input to the string values "small" (12px) or "medium"
    (20px). By default <code>size</code> is set to "default" (16px).
</p>
<nui-example-wrapper filenamePrefix="icon-size" exampleTitle="Size">
    <nui-icon-size-example></nui-icon-size-example>
</nui-example-wrapper>

<h2>Color</h2>
<p>
    The color of <code>&lt;nui-icon&gt;</code> can be set by passing one of the
    following color string values to the <code>iconColor</code> input: "white",
    "light-blue", "gray", "disabled-gray", "primary-blue", or "orange".
</p>
<nui-example-wrapper filenamePrefix="icon-color" exampleTitle="Color">
    <nui-icon-color-example></nui-icon-color-example>
</nui-example-wrapper>

<h2>Hover Effect</h2>
<p>
    To set the hover color of <code>&lt;nui-icon&gt;</code> pass one of the
    following color string values to the <code>iconHoverColor</code> input:
    "white", "light-blue", "gray", "disabled-gray", "primary-blue", or "orange".
</p>
<nui-example-wrapper filenamePrefix="icon-hover" exampleTitle="Hover effect">
    <nui-icon-hover-example></nui-icon-hover-example>
</nui-example-wrapper>

<h2>Status</h2>
<p>
    <code>&lt;nui-icon&gt;</code> can display a status sub-icon. Available
    values for the <code>status</code> input can be found in the enum
    <code
        ><a href="../miscellaneous/enumerations.html#IconStatus" target="_blank"
            >IconStatus</a
        ></code
    >. You can also pass a string value of an appropriate status in enum e.g.
    <code>status="critical"</code>
</p>
<nui-example-wrapper filenamePrefix="icon-status" exampleTitle="Status">
    <nui-icon-status-example></nui-icon-status-example>
</nui-example-wrapper>

<h2>Child Status</h2>
<p>
    <code>&lt;nui-icon&gt;</code> can display a status sub-icon with child
    status. Available values for the <code>childStatus</code> input can be found
    in the enum
    <code
        ><a href="../miscellaneous/enumerations.html#IconStatus" target="_blank"
            >IconStatus</a
        ></code
    >. You can also pass a string value of an appropriate status in enum e.g.
    <code>childStatus="critical"</code>
</p>
<nui-example-wrapper
    filenamePrefix="icon-child-status"
    exampleTitle="Child Status"
>
    <nui-icon-child-status-example></nui-icon-child-status-example>
</nui-example-wrapper>

<h2>Alignment with Text</h2>
<p>The example below demonstrates how to align text with the icon.</p>
<nui-example-wrapper
    filenamePrefix="icon-with-text"
    exampleTitle="Alignment with Text"
>
    <nui-icon-with-text-example></nui-icon-with-text-example>
</nui-example-wrapper>

<h2>Counter</h2>
<p>
    To apply a counter badge to the icon, set the <code>counter</code> input to
    a valid integer.
</p>
<nui-example-wrapper filenamePrefix="icon-counter" exampleTitle="Counter">
    <nui-icon-counter-example></nui-icon-counter-example>
</nui-example-wrapper>

<h2>Available Icons</h2>
<nui-example-wrapper filenamePrefix="icon-list" exampleTitle="Available Icons">
    <nui-icon-list-example></nui-icon-list-example>
</nui-example-wrapper>
`;export{a as default};
