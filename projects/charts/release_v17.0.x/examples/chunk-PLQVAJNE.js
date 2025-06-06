import"./chunk-7KJRK3NW.js";var t=`<h1>Area Charts</h1>

<p>
    An area chart visualization can be thought of as a hybrid between a line and
    a bar chart. Similar to a line chart, an area chart shows how the numeric
    values of one or more series change over the progression of another
    variable, usually time. And, similar to a bar chart, an area chart consists
    of a shaded area between a baseline (typically zero) and the line
    representing the numeric values.
</p>
<p>
    In real world scenarios, using an area chart visualization may make the most
    sense if you want to compare quantities between two or more series by
    stacking them one on top of another. If, on the other hand, you only have a
    single series to visualize, it may be more practical to use just a simple
    bar or line chart, depending of course on what you want to communicate about
    the data. With that in mind, the first example on this page does show, for
    simplicity's sake, a single series visualized as an area.
</p>

<h2>Basic Usage</h2>
<p>
    To create a simple area chart, the basic elements you need are much the same
    as those of a
    <a href="../additional-documentation/chart-types/line.html" target="_parent"
        >line chart</a
    >. The main differences in usage lie in the use of
    <code
        ><a href="../classes/AreaRenderer.html" target="_blank"
            >AreaRenderer</a
        ></code
    >
    instead of
    <code
        ><a href="../classes/LineRenderer.html" target="_blank"
            >LineRenderer</a
        ></code
    >
    and in the configuration of the data accessors implemented by the
    <code
        ><a href="../classes/AreaAccessors.html" target="_blank"
            >AreaAccessors</a
        ></code
    >
    class. When instantiating the <code>AreaRenderer</code>, you can optionally
    pass a configuration object of type
    <code
        ><a href="../interfaces/IAreaRendererConfig.html" target="_blank"
            >IAreaRendererConfig</a
        ></code
    >
    to make certain modifications to the behavior of the chart.
</p>
<nui-message type="info" [allowDismiss]="false">
    As with other chart types, this first example implements an area chart
    without the aid of a
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >
    since it doesn't need to either process the stacking of multiple series or
    handle interaction with an external component such as a legend. Subsequent
    examples that include series stacking or legend interaction will make use of
    a <code>ChartAssist</code> instance to handle those tasks.
</nui-message>
<nui-example-wrapper
    filenamePrefix="area-chart-basic"
    exampleTitle="Basic Usage"
>
    <area-chart-basic-example></area-chart-basic-example>
</nui-example-wrapper>
<p>
    In the example above, we create an instance of
    <code
        ><a href="../classes/AreaAccessors.html" target="_blank"
            >AreaAccessors</a
        ></code
    >
    and configure it to work specifically with the data being fed into the
    chart. For the standard, horizontally oriented area chart we provide
    implementation-specific definitions for the following accessors:
</p>
<ul>
    <li>
        An <code>x</code> accessor for values in the data that correspond to the
        horizontal axis. Again, this is typically a datetime value. This value
        is also used as a coordinate for the data point marker.
    </li>
    <li>
        A <code>y</code> accessor for values to be used as the
        <code>y</code> coordinate for the data point marker. The
        <code>y</code> accessor is assigned the <code>absoluteY1</code> accessor
        which takes into account areas that may be stacked below the current
        area and retrieves the absolute distance from the baseline to the area's
        value line.
    </li>
    <li>
        A <code>y0</code> accessor for the baseline on the vertical axis which,
        in this particular case, will always return the typical baseline value
        of zero.
    </li>
    <li>
        A <code>y1</code> accessor for the value line on the vertical axis that
        provides access to the numeric values we want to visualize in the data.
    </li>
</ul>
<p>
    <strong>Note:</strong> For a vertically oriented chart in which the
    progression runs along the y axis, you can configure the opposite accessors
    from those above, i.e. <code>y</code>, <code>x0</code>, and <code>x1</code>,
    but with the same corresponding implementations.
</p>
<p>
    In addition to data access, the
    <code
        ><a href="../classes/AreaAccessors.html" target="_blank"
            >AreaAccessors</a
        ></code
    >
    indicate what color and marker symbol the chart should use for each series
    visualization. For additional information about chart setup, take a look at
    <a
        href="../../additional-documentation/advanced-usage/chart.html"
        target="_parent"
        >this</a
    >
    page.
</p>
<p>
    To instantiate a grid that conforms to UX guidelines for area
    visualizations, we invoke the
    <code
        ><a href="../miscellaneous/functions.html#areaGrid" target="_blank"
            >areaGrid</a
        ></code
    >
    function and pass the result to the
    <code
        ><a href="../classes/Chart.html#constructor" target="_blank"
            >Chart</a
        ></code
    >
    constructor.
</p>

<h2>Stacked</h2>
<p>
    As mentioned above, an area chart may be an ideal option if you want to
    compare a progression of quantities between two or more series. In that
    case, you'll likely want to display the series in a stacked formation, and
    the easiest way to do that is to pass the
    <code
        ><a href="../miscellaneous/functions.html#stackedArea" target="_blank"
            >stackedArea</a
        ></code
    >
    preprocessor to an instance of the previously mentioned
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >
    which will use the preprocessor to stack the series' numeric values on the
    same progression domain.
</p>
<p>
    <strong>Note:</strong> The <code>absoluteY1</code> accessor is assigned to
    the <code>y</code> accessor to position data point markers in the stacked
    series correctly.
</p>
<nui-example-wrapper filenamePrefix="area-chart-stack" exampleTitle="Stacked">
    <area-chart-stack-example></area-chart-stack-example>
</nui-example-wrapper>

<h2>Unstacked or Overlapping Areas</h2>
<p>
    The use of an unstacked or overlapping area visualization is generally
    discouraged for a few key reasons:
</p>
<ul>
    <li>
        Area charts are typically expected to be stacked, and the main benefit
        this configuration provides is that it can help the user to visualize a
        total value's progression over time along with a running breakdown of
        subgroup contributions to that total. If, however, the areas are
        unstacked, the total value visualization is obviously absent. And, the
        user may consequently find it more difficult to discern a comparison of
        each group's contribution to their sum.
    </li>
    <li>
        Colors generated by the combination of overlapping areas are inherently
        not represented in the legend which can create unnecessary mental strain
        on the user as they try to determine what metrics in the legend
        correspond to the overlapping values.
    </li>
    <li>
        If subgroup values along the progression never intersect, the
        visualization can be easily mistaken for a stacked area.
    </li>
</ul>
<p>
    If you're considering implementing an unstacked area chart, it's a good idea
    to consider these and other potential drawbacks. While making your
    considerations, it's possible you'll determine that implementing a
    <a href="../additional-documentation/chart-types/line.html" target="_parent"
        >line chart</a
    >
    instead will result in a better overall experience for your users. If
    however you find that your use case is extra, super special, and you really,
    really need an unstacked area chart, please contact the Nova team so that we
    can show you how to assemble the visualization. Additionally, please consult
    with Nova Design System leadership before proceeding so that they can work
    with you to provide the best solution possible.
</p>

<h2>Stacked Percentage</h2>
<p>
    Stacked percentage area charts are similar to standard stacked area charts
    in that they facilitate the comparison of quantities between two or more
    series across the progression of another variable. The difference is that a
    stacked percentage area chart visualizes each quantity in relation to the
    sum of all quantities along that progression. It can be thought of as a pie
    chart with an added dimension, usually time, in which you can see what
    portion of the sum total each data point represents over a given period of
    time.
</p>
<p>
    Because of the similarities to standard stacked area charts, the usage for a
    stacked percentage chart is much the same but with a minor difference.
    Instead of passing the <code>stackedArea</code> preprocessor to the
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >, you pass the
    <code
        ><a
            href="../miscellaneous/functions.html#stackedPercentageArea"
            target="_blank"
            >stackedPercentageArea</a
        ></code
    >
    preprocessor which will not only stack the series' numeric values on the
    same progression domain but will also vertically scale each series area as a
    percentage of the sum of all corresponding series values.
</p>
<nui-example-wrapper
    filenamePrefix="area-chart-stack-percentage"
    exampleTitle="Stacked Percentage"
>
    <area-chart-stack-percentage-example></area-chart-stack-percentage-example>
</nui-example-wrapper>

<h2>Variable Baseline</h2>
<p>
    Sometimes the baseline of an area chart isn't fixed at zero. If you have a
    use case in which the baseline varies with each data point, you can set the
    <code>y0</code> accessor to provide access to the value in the data to be
    used as the baseline. In the following example, the data contains
    <code>start</code> and <code>end</code> properties that are used as the
    <code>y0</code> and <code>y1</code> values respectively.
</p>
<nui-example-wrapper
    filenamePrefix="area-chart-variable-baseline"
    exampleTitle="Variable Baseline"
>
    <area-chart-variable-baseline-example></area-chart-variable-baseline-example>
</nui-example-wrapper>

<h2>Bi-Directional</h2>
<h3>Single Metric Per Direction</h3>
<p>
    To display a progression of two correlated values on opposite sides of a
    baseline, you can implement a data accessor that flips the values of one
    series from positive to negative. In this example, the positive values for
    download speed are flipped to negative in that series's <code>y1</code> data
    accessor. Additionally, the example implements a y-scale "tick" formatter to
    display positive values for the axis ticks below the zero baseline and in
    the legend.
</p>
<nui-example-wrapper
    filenamePrefix="area-chart-bi-directional"
    exampleTitle="Bi-Directional"
>
    <area-chart-bi-directional-example></area-chart-bi-directional-example>
</nui-example-wrapper>

<h3>Stacked</h3>
<p>
    If you need to visualize more than one metric per direction, you can set up
    a bi-directional stacked chart. The following example demonstrates this by
    creating two chart instances, each with its own data but acting as a single
    visualization. The series on the bottom chart are stacked in a downward
    direction by invoking the
    <code
        ><a href="../classes/LinearScale.html#reverse" target="_blank"
            >reverse</a
        ></code
    >
    method on the chart's y-axis
    <code
        ><a href="../classes/LinearScale.html" target="_blank"
            >LinearScale</a
        ></code
    >. For additional details, take a look at the code and comments in the
    example's source expander.
</p>
<nui-example-wrapper
    filenamePrefix="area-chart-bi-directional-stacked"
    exampleTitle="Bi-Directional Stacked"
>
    <area-chart-bi-directional-stacked-example></area-chart-bi-directional-stacked-example>
</nui-example-wrapper>

<h3>Inverted Stacked</h3>
<p>
    To invert the direction of each stack, you can invoke the
    <code
        ><a href="../classes/LinearScale.html#reverse" target="_blank"
            >reverse</a
        ></code
    >
    method on the y-axis
    <code
        ><a href="../classes/LinearScale.html" target="_blank"
            >LinearScale</a
        ></code
    >
    of the top chart instead of the one on the bottom chart. The following
    example demonstrates how to do this. For details, take a look at the code
    and comments in the example's source expander.
</p>
<nui-example-wrapper
    filenamePrefix="area-chart-bi-directional-stacked-inverted"
    exampleTitle="Inverted Bi-Directional Stacked"
>
    <area-chart-bi-directional-stacked-inverted-example></area-chart-bi-directional-stacked-inverted-example>
</nui-example-wrapper>
`;export{t as default};
