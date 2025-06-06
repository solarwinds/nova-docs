import"./chunk-B7O3QC5Z.js";var a=`<h1>Tooltips</h1>

<h2>Line Chart</h2>
<p>To set up tooltips for a line chart, do the following:</p>
<ol>
    <li>
        Create an instance if the
        <code
            ><a href="../classes/ChartTooltipsPlugin.html" target="_blank"
                >ChartTooltipsPlugin</a
            ></code
        >
    </li>
    <li>
        Register the plugin with the chart using the chart's addPlugin method
        <pre>{{ tooltipsTypeScript }}</pre>
    </li>
    <li>
        Create a
        <code
            ><a href="../components/ChartTooltipsComponent.html" target="_blank"
                >nui-chart-tooltips</a
            ></code
        >
        component on the template
    </li>
    <li>Pass the plugin to the component's plugin input</li>
    <li>
        Create an ng-template and pass it to the component's template input
        <pre>{{ tooltipsHtml }}</pre>
    </li>
</ol>
<nui-example-wrapper
    filenamePrefix="line-chart-with-tooltips"
    exampleTitle="Line Chart"
>
    <nui-line-chart-with-tooltips-example></nui-line-chart-with-tooltips-example>
</nui-example-wrapper>

<h2>Bar Chart</h2>
<p>
    Tooltips can be added to a bar chart in the same way as for line charts.
    Please see above. It's recommended that the interaction line be turned off
    by setting the interactionPlugins property on the grid configuration to
    false and then enabling the interaction label by adding the
    InteractionLabelPlugin to the chart manually.
</p>
<p>
    It's also recommended that you set the interactive property on the grid
    configuration to true. This will result in the popover being displayed when
    hovering in the space above each bar as opposed to only displaying the
    popover when hovering over the bar itself.
</p>
<p>
    In addition to the above, the following example also configures a custom
    marker provider and color provider for use by the tooltip.
</p>
<nui-example-wrapper
    filenamePrefix="bar-chart-with-tooltips"
    exampleTitle="Bar Chart"
>
    <nui-bar-chart-with-tooltips-example></nui-bar-chart-with-tooltips-example>
</nui-example-wrapper>

<h2>Donut Chart</h2>
<p>
    Tooltips are added to a donut or pie chart in a way that's similar to adding
    them to a line or bar chart. The only difference is the type of the plugin
    that's used. Instead of the standard
    <code
        ><a href="../classes/ChartTooltipsPlugin.html" target="_blank"
            >ChartTooltipsPlugin</a
        ></code
    >, you must use the
    <code
        ><a href="../classes/RadialTooltipsPlugin.html" target="_blank"
            >RadialTooltipsPlugin</a
        ></code
    >.
</p>
<p>
    In addition to the above, the following example also configures a custom
    color accessor, and makes use of the category value in the data for
    determining which icon to use in the tooltip.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note: </strong> To change the chart in the following example to a
    pie, all you need to do is instantiate a
    <code
        ><a href="../classes/PieChartAssist.html" target="_blank"
            >PieChartAssist</a
        ></code
    >
    instead of a
    <code
        ><a href="../classes/DonutChartAssist.html" target="_blank"
            >DonutChartAssist</a
        ></code
    >.
</nui-message>
<nui-example-wrapper
    filenamePrefix="donut-chart-with-tooltips"
    exampleTitle="Donut Chart"
>
    <nui-donut-chart-with-tooltips-example></nui-donut-chart-with-tooltips-example>
</nui-example-wrapper>
`;export{a as default};
