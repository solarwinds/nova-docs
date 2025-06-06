import"./chunk-VBFW7A5V.js";var o=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTextboxModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To use the textbox number component, add an
    <code>&lt;nui-textbox-number&gt;</code> to your template. By default, the
    <code>value</code> input is set to 0. However, if you want the component to
    show a zero as soon as its rendered on the DOM, initialize the input
    explicitly.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> The example uses the default value of
    <code>1</code> for the <code>step</code> input, so if you manually type in a
    floating point value, the increment/decrement buttons will still increment
    by <code>1</code>. To have your implementation increment/decrement by
    fractional values, set the <code>step</code> input to the desired floating
    point interval--<code>0.1</code>
    for example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="textbox-number-basic"
    exampleTitle="Basic usage"
>
    <nui-textbox-number-basic-example></nui-textbox-number-basic-example>
</nui-example-wrapper>

<h2>Inputs</h2>
<ul>
    <li>
        <code>value</code> - Value corresponding to the
        <code
            ><a
                href="https://angular.io/api/forms/ControlValueAccessor"
                target="_blank"
                >ControlValueAccessor</a
            ></code
        >
        interface on the Angular forms API. Use banana-in-a-box notation or the
        <code>valueChange</code> output to receive updates. Defaults to
        <code>0</code>.
    </li>
    <li>
        <code>minValue</code>- Set the minimum allowed value for the input
        field. See the Min/Max section on this page for a live example.
    </li>
    <li>
        <code>maxValue</code> - Set the maximum allowed value for the input
        field. See the Min/Max section on this page for a live example.
    </li>
    <li>
        <code>step</code> - Step by which the value is incremented/decremented
        on click of the up/down buttons. Note this can be set to a floating
        point value in addition to integers. Default is <code>1</code>.
    </li>
    <li>
        <code>stepPrecision</code> - The decimal precision to use for rounding
        each step increase/decrease when clicking the up/down buttons. Default
        is <code>10</code>.
    </li>
    <li>
        <code>placeholder</code> - Set the string to use as a placeholder for
        the text box. Default is <code>""</code>.
    </li>
    <li>
        <code>customBoxWidth</code> - Set a custom width in <code>px</code> for
        the input field.
    </li>
    <li>
        <code>disabled</code> - Disable the field. Default is
        <code>false</code>.
    </li>
    <li>
        <code>readonly</code> - Make the input read-only. Default is
        <code>false</code>.
    </li>
    <li>
        <code>name</code> - Set the value of the HTML input element's
        <code
            ><a
                href="https://www.w3schools.com/tags/att_input_name.asp#:~:text=The%20name%20attribute%20specifies%20the,after%20a%20form%20is%20submitted."
                target="_blank"
                >name</a
            ></code
        >
        attribute.
    </li>
</ul>

<h2>Outputs</h2>
<ul>
    <li>
        <code>blurred</code> - Use this output to get the value of the input
        field when it is focused out.
    </li>
    <li>
        <code>valueChange</code> - Use this output to get the value of the input
        field when it changes.
    </li>
</ul>
<nui-message type="info" [allowDismiss]="false">
    For additional information about the above inputs and outputs, please take a
    look at the
    <a href="../components/TextboxNumberComponent.html#info" target="_parent"
        >API tab</a
    >
    on this page. For usage examples of corresponding inputs on a similar
    component, visit the documentation page for the
    <code
        ><a href="../components/TextboxComponent.html" target="_blank"
            >&lt;nui-textbox&gt;</a
        ></code
    >
    component.
</nui-message>

<h2>Min/Max Value Defined</h2>
<p>
    To define min/max value for <code>&lt;nui-textbox-number&gt;</code>, use the
    <code>minValue</code> and <code>maxValue</code> inputs. In the following
    example, the min is set to 1 and the max is set to 10.
</p>
<nui-example-wrapper
    filenamePrefix="textbox-number-min-max"
    exampleTitle="min/max value defined"
>
    <nui-textbox-number-min-max-example></nui-textbox-number-min-max-example>
</nui-example-wrapper>
`;export{o as default};
