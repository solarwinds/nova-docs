import"./chunk-T555DFTC.js";var i=`<h1>Timeseries Widget</h1>

<p>
    A timeseries widget is, as its name suggests, used for visualizing changes
    in one or more numeric values over a specified period of time. It
    essentially brings a second dimension to the KPI widget use-case of
    displaying values of one or more metrics at a specific moment in time, i.e.
    the present. The following example exhibits an admittedly contrived scenario
    of comparing the reported primary leisure activity of Solarians over a
    seven-day period. The data is made up and makes absolutely no sense, but
    it's all in good fun.
</p>

<nui-message type="info" [allowDismiss]="false">
    For details on how to instantiate a timeseries widget, take a look at the
    inline comments under the source expander of the following example.
</nui-message>

<h2>Supported Visualizations</h2>
<ul>
    <li>Line</li>
    <li>Stacked Area</li>
    <li>Stacked Percentage Area</li>
    <li>Stacked Bar</li>
    <li>Status Bar</li>
</ul>

<p>
    The default visualization for the timeseries widget is Line. To change the
    visualization presented by the widget, set the widget's
    <code>pizzagna.configuration.chart.properties.configuration.preset</code>
    property to a value of type
    <code
        ><a
            href="../miscellaneous/enumerations.html#TimeseriesChartPreset"
            target="_blank"
            >TimeseriesChartPreset</a
        ></code
    >. For a look at how to configure it in the context of a functioning widget,
    see the widget configurations in the source expanders of the examples on
    this page.
</p>

<h3>Visualizations for Continuous Numeric Values</h3>

<p>
    Continuous numeric values can be visualized as lines, areas, or bars along a
    time progression. Data sources for these visualizations should provide
    series data that conform to the
    <code
        ><a
            href="../interfaces/ITimeseriesWidgetSeriesData.html"
            target="_blank"
            >ITimeseriesWidgetSeriesData</a
        ></code
    >
    interface in their output. Open the source expander of the following example
    to see how this looks.
</p>

<nui-example-wrapper
    filenamePrefix="timeseries-widget-example"
    exampleTitle="Numeric Value Visualizations"
>
    <timeseries-widget-example></timeseries-widget-example>
</nui-example-wrapper>

<h3>Visualizing Discrete State Values</h3>

<p>
    Discrete state values can be visualized as horizontal bars of variable
    length and color along a time progression. Data sources for the Status Bar
    visualization must provide their series data in a slightly different format
    from that of the other timeseries visualization types shown above. In this
    case, the series data should conform to the
    <code
        ><a
            href="../interfaces/ITimeseriesWidgetStatusData.html"
            target="_blank"
            >ITimeseriesWidgetStatusData</a
        ></code
    >
    interface which extends
    <code
        ><a
            href="../interfaces/ITimeseriesWidgetSeriesData.html"
            target="_blank"
            >ITimeseriesWidgetSeriesData</a
        ></code
    >
    with three additional properties:
</p>
<ul>
    <li>
        <code>color</code>: string or css variable for the color to use for the
        fill color of the associated bar
    </li>
    <li>
        <code>icon</code>: string value for the name of the icon to display on
        the bar as well as the legend
    </li>
    <li>
        <code>thick</code>: boolean for whether or not to display a "thick" bar
        ("false" is typically used for an "ok" status)
    </li>
</ul>

<h4>Usage Notes</h4>
<ul>
    <li>
        <strong
            >Continuous (Non-Interval) Scale (<code
                ><a
                    href="../miscellaneous/enumerations.html#TimeseriesScaleType"
                    target="_blank"
                    >TimeseriesScaleType.Time</a
                ></code
            >)</strong
        >
        <ul>
            <li>
                To display the last data point correctly, your data must include
                a final data point that indicates the endpoint for the most
                recent status value in the data set.
            </li>
            <li>
                To accommodate proper zooming of the chart, use the
                <code
                    ><a
                        href="../miscellaneous/functions.html#applyStatusEndpoints"
                        target="_blank"
                        >applyStatusEndpoints</a
                    ></code
                >
                function to prepend and append the filtered status data with
                endpoints that match the start and end datetimes of the zoomed
                time period. This will ensure that each status visualization has
                valid start and end values after the chart is zoomed.
            </li>
        </ul>
    </li>
    <li>
        <strong
            >Interval Scale (<code
                ><a
                    href="../miscellaneous/enumerations.html#TimeseriesScaleType"
                    target="_blank"
                    >TimeseriesScaleType.TimeInterval</a
                ></code
            >)</strong
        >
        <ul>
            <li>
                Unlike a continuous scale <strong>no</strong> additional data
                point is needed at the end of the data set since the status
                values are visualized at regular intervals.
            </li>
            <li>
                Unlike a continuous scale, endpoints do not need to be applied
                to the data since the values are simply visualized at regular
                intervals. In other words, the
                <code>applyStatusEndpoints</code> function mentioned for
                continuous scales above does not need to be used.
            </li>
        </ul>
    </li>
</ul>

<p>
    For better clarity on these usage notes, see the inline comments in the
    source expander of the example below.
</p>

<nui-example-wrapper
    filenamePrefix="timeseries-widget-status-bar-example"
    exampleTitle="State Values Visualization"
>
    <timeseries-widget-status-bar-example></timeseries-widget-status-bar-example>
</nui-example-wrapper>

<h3>Interaction Handling</h3>
<p>
    The line chart below show how to use the
    <code
        ><a href="../injectables/UrlInteractionHandler.html" target="_blank"
            >UrlInteractionHandler</a
        ></code
    >
    to handle interactions that occur on the legend when the chart is set to
    interactive. The stacked bar chart below shows how individual series can be
    interactive when the series data has value for:
</p>
<ul>
    <li><code>link</code>: string used for the legends label link.</li>
    <li>
        <code>secondaryLink</code>: string used for the legends secondary
        description link.
    </li>
</ul>
<p>
    Look at the inline comments in the source expander to see how the
    <code
        ><a href="../injectables/UrlInteractionHandler.html" target="_blank"
            >UrlInteractionHandler</a
        ></code
    >
    is set up and configured.
</p>

<nui-example-wrapper
    filenamePrefix="timeseries-widget-interactive-example"
    exampleTitle="Timeseries with Interaction Examples"
>
    <timeseries-widget-interactive-example></timeseries-widget-interactive-example>
</nui-example-wrapper>

<h2>Widget Schema</h2>

<p>
    The code listings below are the source files for the Timeseries widget
    definition with inline comments describing the parts that compose the
    standard Timeseries widget type. It includes the widget's definition as well
    as its corresponding configurator form for defining how to configure
    (create/edit) the widget.
</p>

<h2>Widget</h2>
<p>
    This part shows the actual widget definition. It includes, among other
    things, the components and providers that compose the widget itself.
</p>

<nui-example-code language="typescript" [code]="timeseriesWidgetFileText" />

<h2>Configurator</h2>
<p>
    This part shows the form that's used for configuring (creating/editing) the
    widget.
</p>

<nui-example-code language="typescript" [code]="timeseriesConfiguratorFileText" />

<h2>Additional Features</h2>
<ul>
    <li>
        Define custom colors for the chart by assigning a string array of css
        color variables, color keywords, or RGB hex values to the
        <code>chartColors</code> property on the widget's
        <code>configuration</code> input (<code
            ><a
                href="../interfaces/ITimeseriesWidgetConfig.html"
                target="_blank"
                >ITimeseriesWidgetConfig</a
            ></code
        >). For how to do this, take a look at the inline comment in the
        example's source expander above.
    </li>
    <li>
        Apart from the aforementioned configuration options, you can also
        configure the chart scale types using the <code>scales</code> property
        of the <code>configuration</code> input. Supported scales are enumerated
        in the
        <code
            ><a href="../miscellaneous/enumerations.html#TimeseriesScaleType"
                >TimeseriesScaleType</a
            ></code
        >
        type.
    </li>
</ul>
`;export{i as default};
