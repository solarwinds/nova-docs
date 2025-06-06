import"./chunk-B7O3QC5Z.js";var t=`<h1>Bar Charts</h1>

<p>
    A bar chart is a graph that presents categorical data with rectangular bars
    whose heights or lengths, depending on orientation, are proportional to the
    values that they represent.
</p>
<p>
    A bar graph shows comparisons among <b>discrete categories</b>. One axis of
    the chart shows the specific categories being compared, and the other axis
    represents the measured value. Advanced types of bar charts can be clustered
    in groups of more than one, showing the values of more than one measured
    variable. Examples of this include Grouped Bar charts and Stacked Bar charts
    (not covered in the scope of this page).
</p>

<h2>Prerequisites</h2>
<p>For any bar chart you will need:</p>
<ol>
    <li>
        <strong>Grid.</strong> Just use good old
        <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code>
        with
        <code
            ><a href="../classes/BarGridConfig.html" target="_blank"
                >BarGridConfig</a
            ></code
        >
        or
        <code
            ><a href="../classes/BarHorizontalGridConfig.html" target="_blank"
                >BarHorizontalGridConfig</a
            ></code
        >. To make it easier we provide you with a convenience function
        <code
            ><a href="../miscellaneous/functions.html#barGrid" target="_blank"
                >barGrid</a
            ></code
        >
        that will create an instance for you.
    </li>
    <li>
        <strong>Accessors.</strong> There are pre-configured
        <code
            ><a href="../classes/HorizontalBarAccessors.html" target="_blank"
                >HorizontalBarAccessors</a
            ></code
        >
        or
        <code
            ><a href="../classes/VerticalBarAccessors.html" target="_blank"
                >VerticalBarAccessors</a
            ></code
        >
        that you can use. And, the
        <code
            ><a
                href="../miscellaneous/functions.html#barAccessors"
                target="_blank"
                >barAccessors</a
            ></code
        >
        function that will create one for you.
    </li>
    <li>
        <strong>Renderer.</strong> Create an instance of the
        <code
            ><a href="../classes/BarRenderer.html" target="_blank"
                >BarRenderer</a
            ></code
        >. When instantiating the <code>BarRenderer</code>, you can optionally
        pass a configuration object of type
        <code
            ><a href="../interfaces/IBarRendererConfig.html" target="_blank"
                >IBarRendererConfig</a
            ></code
        >
        to make certain modifications to the behavior of the chart.
    </li>
    <li>
        <strong>Scales.</strong> For the "category" axis you should use a
        band-ish scale. For the opposite axis with "values" any supported scale
        should work. Our
        <code
            ><a href="../miscellaneous/functions.html#barScales" target="_blank"
                >barScales</a
            ></code
        >
        function returns the proper combination of
        <code
            ><a href="../classes/BandScale.html" target="_blank"
                >BandScale</a
            ></code
        >
        vs a value scale (<code
            ><a href="../classes/LinearScale.html" target="_blank"
                >LinearScale</a
            ></code
        >
        by default) according to the provided configuration.
    </li>
</ol>

<h2>Basic Usage</h2>
<p>
    There are many possible scenarios of data visualization using a bar chart,
    but the simplest one is visualizing values divided among several
    unstructured categories. In this use case, we configure the chart using our
    convenience methods that provide defaults for generic use cases. In this
    case, the chart dimension is defined by a
    <code
        ><a href="../classes/LinearScale.html" target="_blank"
            >LinearScale</a
        ></code
    >
    on the <code>y</code> axis representing the values and
    <code
        ><a href="../classes/BandScale.html" target="_blank">BandScale</a></code
    >
    on the <code>x</code> axis representing the categories. Grid margins and
    labels are set up properly and most importantly, a proper data accessors
    implementation translates the input data into an appropriate coordinate
    system. All that happens right in front of your eyes in the following
    example, where all the complexity has been hidden behind the convenience
    functions.
</p>
<nui-example-wrapper filenamePrefix="bar-chart" exampleTitle="Basic Usage">
    <nui-bar-chart-example></nui-bar-chart-example>
</nui-example-wrapper>

<h2>Orientation</h2>

<p>
    For switching the orientation of a bucketed bar chart layout you'll need a
    different grid configuration, set of scales, accessors, and plugin
    configurations. Or, if you're using convenience functions, just pass an
    <code
        ><a href="../interfaces/IBarChartConfig.html" target="_blank"
            >IBarChartConfig</a
        ></code
    >
    object with the <code>horizontal</code> property set to <code>true</code>.
</p>

<pre>{{ horizontalConfig }}</pre>

<nui-message type="info" [allowDismiss]="false">
    If no configuration is passed - a vertical layout will be applied by
    default.
</nui-message>

<nui-example-wrapper
    filenamePrefix="bar-chart-horizontal"
    exampleTitle="Horizontal Orientation"
>
    <nui-bar-chart-horizontal-example></nui-bar-chart-horizontal-example>
</nui-example-wrapper>

<h2>Legend</h2>
<p>
    Adding a legend to the chart is the same as with other chart types. The
    usage of
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >
    is really recommended here.
</p>
<nui-example-wrapper
    filenamePrefix="bar-chart-with-legend"
    exampleTitle="Adding a Legend"
>
    <nui-bar-chart-with-legend-example></nui-bar-chart-with-legend-example>
</nui-example-wrapper>

<h2>Time Interval</h2>
<p>
    The discrete categories used for value comparison can also take the form of
    time intervals in which each value of a data set is visualized as a bar
    within a time interval. To create a bar visualization over a series of time
    intervals, you can set the scale for the x-axis to an instance of
    <a href="../classes/TimeIntervalScale.html" target="_blank"
        ><code>TimeIntervalScale</code></a
    >
    and pass the desired interval of type moment
    <a href="https://momentjs.com/docs/#/durations/" target="_blank"
        ><code>Duration</code>
    </a>
    to the
    <a href="../classes/TimeIntervalScale.html" target="_blank"
        ><code>TimeIntervalScale</code></a
    >'s constructor.
</p>
<nui-example-wrapper
    filenamePrefix="bar-chart-time-interval"
    exampleTitle="Time Interval"
>
    <nui-bar-chart-time-interval-example></nui-bar-chart-time-interval-example>
</nui-example-wrapper>

<h2>Tooltips</h2>
<p>
    For information about how to add tooltips to bar charts, take a look at the
    <a href="../additional-documentation/plugins/tooltips.html" target="_parent"
        >tooltips</a
    >
    page.
</p>

<h2>Popovers</h2>
<p>
    For information about how to add popovers to bar charts, take a look at the
    <a href="../additional-documentation/plugins/popovers.html" target="_parent"
        >popovers</a
    >
    page.
</p>
`;export{t as default};
