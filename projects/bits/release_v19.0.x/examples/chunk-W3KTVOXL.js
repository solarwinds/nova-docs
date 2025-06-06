import"./chunk-VBFW7A5V.js";var o=`<p>
    The
    <code
        ><a href="../pipes/UnitConversionPipe.html#info" target="_parent"
            >unitConversion</a
        ></code
    >
    pipe can be used to convert a large value of a small basic unit to a smaller
    value of a larger unit--for example, converting a quantity of 1024 in bytes
    to "1 KB". The converted unit label is automatically appended to the output.
    Supported units are of type
    <code
        ><a href="../miscellaneous/typealiases.html#UnitOption" target="_blank"
            >UnitOption</a
        ></code
    >
    and include the following: <code>"generic"</code> (e.g. 1K for 1000),
    <code>"bytes"</code>, <code>"bytesPerSecond"</code>,
    <code>"bitsPerSecond"</code>, and <code>"hertz"</code>.
</p>
<nui-message type="info" [allowDismiss]="false">
    Under the hood, this pipe uses the
    <code
        ><a href="../injectables/UnitConversionService.html" target="_blank"
            >UnitConversionService</a
        ></code
    >. If the pipe doesn't offer something you need, such as separating the
    value and unit out into separate outputs or converting a value outside the
    context of a template, using the service directly may be a better option for
    you.
</nui-message>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiCommonModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To get started with using the pipe, take a look at the template source of
    the example below.
</p>

<h3>Parameters</h3>
<p>The pipe accepts the following parameters:</p>
<ul>
    <li><strong>value</strong> - The value to be converted.</li>
    <li>
        <strong>scale</strong> - The decimal scale of the formatted value for
        specifying how many significant digits to display to the right of the
        decimal. Defaults to <code>0</code>.
    </li>
    <li>
        <strong>plusSign</strong> - Boolean for specifying whether to prefix the
        output with a '+' when the source value is greater than zero. Defaults
        to false.
    </li>
    <li>
        <strong>unit</strong> - The basic unit to use for the conversion.
        Accepts arguments of type
        <code
            ><a
                href="../miscellaneous/typealiases.html#UnitOption"
                target="_blank"
                >UnitOption</a
            ></code
        >. Defaults to <code>"bytes"</code>.
    </li>
</ul>
<nui-message type="info" [allowDismiss]="false">
    The pipe will localize the output for all supported units except the
    "generic" unit. Localization for the "generic" unit is not yet supported.
</nui-message>
<nui-example-wrapper
    filenamePrefix="unit-conversion-pipe-basic"
    exampleTitle="Basic Usage"
>
    <unit-conversion-pipe-basic-example></unit-conversion-pipe-basic-example>
</nui-example-wrapper>
`;export{o as default};
