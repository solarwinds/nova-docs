import"./chunk-B7O3QC5Z.js";var a=`<h1>Popovers</h1>

<h2>Line Chart</h2>
<p>To set up a popover for a line chart, do the following:</p>
<ol>
    <li>
        Create an instance if the
        <code
            ><a href="../classes/ChartPopoverPlugin.html" target="_blank"
                >ChartPopoverPlugin</a
            ></code
        >
        <br />
        Plugin Configuration - You can optionally pass an argument of type
        <code
            ><a href="../interfaces/IPopoverPluginConfig.html" target="_blank"
                >IPopoverPluginConfig</a
            ></code
        >
        to the plugin's constructor. Each of the configuration properties is
        optional:
        <ul>
            <li>
                <code
                    ><a
                        href="../classes/ChartPopoverPlugin.html#eventStreamId"
                        target="_blank"
                        >eventStreamId</a
                    ></code
                >
                - Specify either <code>INTERACTION_DATA_POINTS_EVENT</code> or
                <code>INTERACTION_DATA_POINT_EVENT</code> to configure which
                event the plugin responds to. The default value for this
                property is <code>INTERACTION_DATA_POINTS_EVENT</code> which is
                supported by line, pie, donut, area, and bar charts and will
                position the popover in relation to the center point between the
                leftmost and rightmost data points in the payload.
                <code>INTERACTION_DATA_POINT_EVENT</code> is supported by line
                and area charts and will position the popover in relation to a
                single data point's horizontal position on the chart. For more
                information on chart events, take a look at
                <a
                    href="../additional-documentation/advanced-usage/events.html"
                    target="_parent"
                    >this</a
                >
                page.
            </li>
            <li>
                <code
                    ><a
                        href="../classes/ChartPopoverPlugin.html#interactionType"
                        target="_blank"
                        >interactionType</a
                    ></code
                >
                - Specify the
                <code
                    ><a
                        href="../miscellaneous/enumerations.html#InteractionType"
                        target="_blank"
                        >InteractionType</a
                    ></code
                >
                that will trigger the showing and hiding of popovers. The
                default value for this property is
                <code>InteractionType.MouseMove</code>.
            </li>
        </ul>
    </li>
    <li>
        Register the plugin with the chart using the chart's
        <code
            ><a href="../classes/Chart.html#addPlugin" target="_blank"
                >addPlugin</a
            ></code
        >
        method
        <pre>{{ popoverTypeScript }}</pre>
    </li>
    <li>
        Create a
        <code
            ><a href="../components/ChartPopoverComponent.html" target="_blank"
                >nui-chart-popover</a
            ></code
        >
        component on the template
    </li>
    <li>Pass the plugin to the component's plugin input</li>
    <li>
        Create an ng-template and pass it to the component's template input
        <pre>{{ popoverHtml }}</pre>
    </li>
</ol>
<nui-example-wrapper
    filenamePrefix="line-chart-with-popover"
    exampleTitle="Line Chart"
>
    <nui-line-chart-with-popover-example></nui-line-chart-with-popover-example>
</nui-example-wrapper>

<h2>Bar Chart</h2>
<p>
    Popovers can be added to a bar chart in the same way as for line charts.
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
<nui-example-wrapper
    filenamePrefix="bar-chart-with-popover"
    exampleTitle="Bar Chart"
>
    <nui-bar-chart-with-popover-example></nui-bar-chart-with-popover-example>
</nui-example-wrapper>

<h2>Donut Chart</h2>
<p>
    Popovers can be added to a donut chart in the same way as for line charts,
    but using
    <code
        ><a href="../classes/ChartPopoverPlugin.html" target="_blank"
            >RadialPopoverPlugin</a
        ></code
    >. The following example also demonstrates how to create a custom color
    accessor for status.
</p>
<nui-example-wrapper
    filenamePrefix="donut-chart-with-popover"
    exampleTitle="Donut Chart"
>
    <nui-donut-chart-with-popover-example></nui-donut-chart-with-popover-example>
</nui-example-wrapper>
`;export{a as default};
