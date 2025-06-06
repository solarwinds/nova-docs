import"./chunk-XR34LRGE.js";var i=`<p>
    The
    <code
        ><a
            href="../injectables/UnitConversionService.html#info"
            target="_parent"
            >UnitConversionService</a
        ></code
    >
    can be used to convert a large value of a small basic unit to a smaller
    value of a larger unit\u2014for example, converting 1024 B (bytes) to 1 KB.
</p>
<nui-message type="info" [allowDismiss]="false">
    There is also a
    <code
        ><a href="../pipes/UnitConversionPipe.html" target="_blank"
            >unitConversion</a
        ></code
    >
    pipe that makes use of this service. If your use case is a simple conversion
    of a value within the context of a template, the pipe may offer a more
    syntactically succinct method of conversion than using the methods of this
    service directly.
</nui-message>

<h2>Basic Usage</h2>
<p>
    To convert a value, use the service's
    <code
        ><a
            href="../injectables/UnitConversionService.html#info"
            target="_parent"
            >convert</a
        ></code
    >
    method which accepts three arguments:
</p>

<ul>
    <li><strong>value</strong> - The number to be converted</li>
    <li>
        <strong>base</strong> - An optional base value to use for the
        exponential expression when calculating the conversion result (defaults
        to
        <code
            ><a
                href="../miscellaneous/enumerations.html#UnitBase"
                target="_blank"
                >UnitBase.Standard</a
            ></code
        >, or 1000)
    </li>
    <li>
        <strong>scale</strong> - An optional scale value for specifying how many
        significant digits to the right of the decimal to preserve in the output
        (defaults to <code>1</code>).
    </li>
</ul>
<p>
    The result of the conversion is of type
    <code
        ><a href="../interfaces/IUnitConversionResult.html" target="_blank"
            >IUnitConversionResult</a
        ></code
    >.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> For converting a value in bytes, be sure to specify
    <code
        ><a href="../miscellaneous/enumerations.html#UnitBase" target="_blank"
            >UnitBase.Bytes</a
        ></code
    >, or 1024, for the convert method's base parameter.
</nui-message>
<p>
    Once the conversion has been calculated, the result can be converted to a
    display string that includes both the value and the unit. This can be done
    via the
    <code
        ><a
            href="../injectables/UnitConversionService.html#info"
            target="_parent"
            >getFullDisplay</a
        ></code
    >
    method. Supported basic units are of type
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
    The <code>getFullDisplay</code> method will localize the output for all
    supported units except for the "generic" unit. Localization for the
    "generic" unit is not yet supported.
</nui-message>
<nui-example-wrapper
    filenamePrefix="unit-conversion-service-basic"
    exampleTitle="Basic Usage"
>
    <unit-conversion-service-basic-example></unit-conversion-service-basic-example>
</nui-example-wrapper>

<h2>Separating the Value and Unit for Display</h2>
<p>
    The display strings for the value and unit can also be determined separately
    for situations in which you'd like to display the conversion data in
    separate elements on the page. To get just the converted value for display,
    use the
    <code
        ><a
            href="../injectables/UnitConversionService.html#info"
            target="_parent"
            >getValueDisplay</a
        ></code
    >
    method, and to get just the converted unit for display, use the
    <code
        ><a
            href="../injectables/UnitConversionService.html#info"
            target="_parent"
            >getUnitDisplay</a
        ></code
    >
    method. If you need to convert the value into scientific notation use the
    <code
        ><a
            href="../injectables/UnitConversionService.html#info"
            target="_parent"
            >getScientificDisplay</a
        ></code
    >
    instead.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> The <code>getValueDisplay</code> method offers a
    <code>localize</code> parameter which defaults to <code>true</code>.
    However, if you're using the "generic" unit type, it's recommended to set
    this argument to <code>false</code> as localization is not yet supported for
    the "generic" unit.
</nui-message>
<nui-example-wrapper
    filenamePrefix="unit-conversion-service-separate-unit-display"
    exampleTitle="Separating the Value and Unit for Display"
>
    <unit-conversion-service-separate-unit-display-example></unit-conversion-service-separate-unit-display-example>
</nui-example-wrapper>
`;export{i as default};
