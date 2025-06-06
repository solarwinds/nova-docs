import"./chunk-B7O3QC5Z.js";var a=`<h1>Formatters</h1>

<p>
    Scale
    <a href="../interfaces/IScale.html#formatters" target="_blank"
        >formatters</a
    >
    allow you to define how a chart's scale values should be transformed before
    they're presented to the user.
</p>

<h2>Ticks</h2>
<p>
    If the formats of the ticks on an X-Y scale need to be customized beyond
    their default behavior, you can provide custom formatters for one or both
    scales. The following snippet reformats the x and y scales using a Math
    function and a template literal.
</p>
<pre>{{ customTicks }}</pre>
<p>
    <strong>Note:</strong> In addition to demonstrating how to set a custom
    formatter for the y-axis, the following example uses a
    <code
        ><a href="../classes/TimeScale.html" target="_blank">TimeScale</a></code
    >
    for its x-axis. TimeScale's tick formatter is automatically set to Nova
    Charts'
    <code
        ><a
            href="../miscellaneous/variables.html#datetimeFormatter"
            target="_blank"
            >dateTimeFormatter</a
        ></code
    >
    which determines a reasonable format based on the date for each tick.
</p>
<p>
    If your requirements for formatting tick dates differ from the one's
    provided by TimeScale's default tick formatter, you can still set a custom
    one using the above syntax.
</p>
<nui-example-wrapper filenamePrefix="tick-formatter" exampleTitle="Ticks">
    <nui-chart-tick-formatter-example></nui-chart-tick-formatter-example>
</nui-example-wrapper>
`;export{a as default};
