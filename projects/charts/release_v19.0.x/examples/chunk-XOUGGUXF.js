import"./chunk-B7O3QC5Z.js";var t=`<h1>Line Charts</h1>

<p>
    From the Nova charting framework's point of view, there's actually no such
    thing as a line chart. What actually makes a line chart, well, a line chart
    is really just data series specifically configured to be rendered using what
    we call a
    <code
        ><a href="../classes/LineRenderer.html" target="_blank"
            >LineRenderer</a
        ></code
    >. A different renderer might allow the data to be visualized as a bar
    chart. But, regardless of how the framework sees it, a line chart is a
    pretty basic visualization scenario, and so it's ideal for demonstrating the
    basic concepts of the Nova charting framework.
</p>

<h2>Basic Line Chart</h2>
<p>
    To create a simple line chart, the basic elements you need are: an instance
    of the
    <code><a href="../classes/Chart.html" target="_blank">Chart</a></code>
    class, an instance
    <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code
    >, and a set of
    <code
        ><a href="../interfaces/IChartSeries.html" target="_blank"
            >IChartSeries</a
        ></code
    >
    including some data for the chart to visualize.
</p>
<p>
    Each IChartSeries consists of an
    <code
        ><a href="../interfaces/IDataSeries.html" target="_blank"
            >IDataSeries</a
        ></code
    >, an
    <code
        ><a href="../interfaces/IXYScales.html" target="_blank"
            >IXYScales</a
        ></code
    >
    object, and a
    <code
        ><a href="../classes/LineRenderer.html" target="_blank"
            >LineRenderer</a
        ></code
    >. In most cases, the same instances of IXYScales and LineRenderer can be
    used for each IChartSeries. When instantiating the
    <code>LineRenderer</code>, you can optionally pass a configuration object of
    type
    <code
        ><a href="../interfaces/ILineRendererConfig.html" target="_blank"
            >ILineRendererConfig</a
        ></code
    >
    to make certain modifications to the behavior of the chart.
</p>
<p>
    The IDataSeries in each IChartSeries consists of the data to be visualized,
    an id, and a
    <code
        ><a href="../classes/LineAccessors.html" target="_blank"
            >LineAccessors</a
        ></code
    >
    instance.
</p>
<p>
    LineAccessors, by default, let the chart know that the values for x and y
    can be found specifically under properties named 'x' and 'y' at the root
    level within the data you provide. If, however, your data doesn't have
    properties 'x' and 'y', or if 'x' and 'y' are not at the root level, you can
    customize the accessors to let the chart know exactly where to find the
    correct values. For how to do this, the
    <a
        href="../additional-documentation/advanced-usage/input-structure/data.html"
        target="_parent"
        >Data Accessors</a
    >
    page may be a handy guide.
</p>
<p>
    In addition to data access, the LineAccessors also indicate what color and
    marker symbol the chart should use for each series visualization.
</p>
<p>
    Finally, to initiate the line chart visualization, pass the Chart instance
    reference to the <code>chart</code> input of <code>nui-chart</code> in your
    template and invoke the chart's update method passing the collection of
    IChartSeries as the argument. For additional information about chart setup,
    take a look at
    <a
        href="../../additional-documentation/advanced-usage/chart.html"
        target="_parent"
        >this</a
    >
    page.
</p>
<nui-message type="info" [allowDismiss]="false">
    This first example implements a line chart without the aid of a
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >
    since it doesn't require any interaction with an external component such as
    a legend. Subsequent examples that include a legend will make use of an
    instance of ChartAssist.
</nui-message>
<nui-example-wrapper
    filenamePrefix="line-chart-basic"
    exampleTitle="Basic Line Chart"
>
    <nui-line-chart-basic-example></nui-line-chart-basic-example>
</nui-example-wrapper>

<h2>Legends</h2>
<nui-message type="info" [allowDismiss]="false"
    >If you're adding a legend to your chart, the easiest way to manage the
    communication between the chart and the legend is to use an instance of the
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >. Take a closer look at the following examples as there are some structural
    differences from the example above in the configuration and updating of the
    chart.
</nui-message>
<p>
    The main documentation page for legends can be found
    <a
        href="../additional-documentation/advanced-usage/legend.html"
        target="_parent"
        >here</a
    >. But, in this section you'll find some quick examples of how to use
    legends with a line chart.
</p>
<h3>Legend with Basic Tiles</h3>
<p>
    To add a legend with basic tiles, add one or more
    <code
        ><a href="../components/BasicLegendTileComponent.html" target="_blank"
            >nui-basic-legend-tiles</a
        ></code
    >
    nested within one or more
    <code
        ><a href="../components/LegendSeriesComponent.html" target="_blank"
            >nui-legend-series</a
        ></code
    >
    nested within a
    <code
        ><a href="../components/LegendComponent.html" target="_blank"
            >nui-legend</a
        ></code
    >
    to your template. To see what this looks like, you can view the html of the
    example by opening the source expander.
</p>
<nui-example-wrapper
    filenamePrefix="line-chart-with-legend"
    exampleTitle="Legend with Basic Tiles"
>
    <nui-line-chart-with-legend-example></nui-line-chart-with-legend-example>
</nui-example-wrapper>

<h3>Legend with Rich Tiles</h3>
<p>
    To add a legend with rich tiles, add one or more
    <code
        ><a href="../components/RichLegendTileComponent.html" target="_blank"
            >nui-rich-legend-tiles</a
        ></code
    >
    nested within one or more
    <code
        ><a href="../components/LegendSeriesComponent.html" target="_blank"
            >nui-legend-series</a
        ></code
    >
    nested within a
    <code
        ><a href="../components/LegendComponent.html" target="_blank"
            >nui-legend</a
        ></code
    >
    to your template. To see what this looks like, you can view the html of the
    example by opening the source expander.
</p>
<nui-example-wrapper
    filenamePrefix="line-chart-with-rich-tile-legend"
    exampleTitle="Legend with Rich Tiles"
>
    <nui-line-chart-with-rich-tile-legend-example></nui-line-chart-with-rich-tile-legend-example>
</nui-example-wrapper>

<h2>Axis Labels</h2>
<p>
    Labels for each axis can be added using a
    <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
        target="_blank"
        >css grid</a
    >
    layout. The following example's html source demonstrates how to set it up
    using the Nova Chart layout classes: "nui-chart-layout", "axis-label-left",
    "axis-label-right", "axis-label-bottom", "chart", and "legend".
</p>
<p>
    For more information about the nova chart grid layout, check out the layout
    page
    <a href="../additional-documentation/layout.html" target="_parent">here</a>.
</p>
<nui-example-wrapper
    filenamePrefix="line-chart-with-axis-labels"
    exampleTitle="Axis Labels"
>
    <line-chart-with-axis-labels-example></line-chart-with-axis-labels-example>
</nui-example-wrapper>

<h2>Adding a Second Y-Axis</h2>
<p>
    To add a second y-axis, we need to configure the
    <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code>
    instance with values for the <code>leftScaleId</code> and
    <code>rightScaleId</code> properties. The values for these properties should
    match the id's of the left scale and right scale respectively.
</p>
<p>
    Customizing the content displayed for each axis can be achieved by
    specifying the tick formatter for the desired scale as documented on the
    <a
        href="../additional-documentation/advanced-usage/scales/formatters.html"
        target="_blank"
        >Formatters</a
    >
    page.
</p>
<nui-example-wrapper
    filenamePrefix="line-chart-with-2y-axes"
    exampleTitle="Adding a Second Y-Axis"
>
    <line-chart-with-2y-axes-example></line-chart-with-2y-axes-example>
</nui-example-wrapper>

<h2>Interrupted Data</h2>
<p>
    If you want to emphasize the fact that parts of the data you're plotting on
    the chart are not continuous, you can use the following approach to display
    a line with gaps. To indicate a missing data segment, you'll need to use two
    data series, one for rendering the data itself and the other for rendering
    gaps in the data. You can use the same data array for both data series. The
    difference in visualization is achieved using a separate
    <code>renderer</code> instance configured to recognize missing data and
    appropriately style the output.
</p>
<p>
    For standard missing data styling, pass an instance of
    <code
        ><a href="../classes/MissingDataLineRendererConfig.html" target="_blank"
            >MissingDataLineRendererConfig</a
        ></code
    >
    to the
    <code
        ><a href="../classes/LineRenderer.html" target="_blank"
            >LineRenderer</a
        ></code
    >
    constructor. The configuration can optionally be customized by modifying the
    values of its properties. The following example demonstrates the use of
    standard missing data styling in more detail.
</p>
<h4>Enhanced Line Caps</h4>
<p>
    By default, the styling for interrupted data includes enhanced line caps, or
    dots, at each vertex of the path representing the missing data. To disable
    the line caps, set the
    <code>{{ getLineRendererConfigPropKey("useEnhancedLineCaps") }}</code>
    property on the renderer's
    <code>{{ getLineRendererPropKey("config") }}</code> property to
    <code>false</code>. To modify the styling of the enhanced line caps, set
    alternate values on the renderer
    <code>{{ getLineRendererPropKey("config") }}</code
    >'s
    <code>{{ getLineRendererConfigPropKey("enhancedLineCap") }}</code> property
    of type
    <code
        ><a href="../interfaces/IEnhancedLineCapConfig.html" target="_blank"
            >IEnhancedLineCapConfig</a
        ></code
    >.
</p>
<nui-message type="info" [allowDismiss]="false">
    The <code>defined</code> accessor used in the following example directly
    implements the behavior of the D3
    <code
        ><a href="https://github.com/d3/d3-shape#line_defined" target="_blank"
            >line.defined</a
        ></code
    >
    method, so you can head over there to read more detailed documentation.
</nui-message>
<nui-example-wrapper
    filenamePrefix="line-chart-interrupted-basic"
    exampleTitle="Interrupted Data"
>
    <line-chart-interrupted-basic-example></line-chart-interrupted-basic-example>
</nui-example-wrapper>

<h3>Automatic Calculation of Interrupted Segments</h3>
<p>
    If your data is time based and is defined at regular intervals, it's
    possible to calculate the missing data segments automatically. Nova Charts
    provides a convenience function for this called
    <a href="../miscellaneous/functions.html#calculateMissingData"
        ><code>calculateMissingData</code></a
    >
    which creates a new data array with data points inserted to indicate
    interruptions in your series. It's important to keep in mind that the new
    data array must be assigned to both series used in the missing data
    visualization--one indicating the valid data segments and the other
    indicating the missing data segments.
</p>
<nui-example-wrapper
    filenamePrefix="line-chart-interrupted-calculated"
    exampleTitle="Calculated Segments of Interrupted Data"
>
    <line-chart-interrupted-calculated-example></line-chart-interrupted-calculated-example>
</nui-example-wrapper>

<h2>Tooltips</h2>
<p>
    For information about how to add tooltips to line charts, take a look at the
    <a href="../additional-documentation/plugins/tooltips.html" target="_parent"
        >tooltips</a
    >
    page.
</p>

<h2>Popovers</h2>
<p>
    For information about how to add popovers to line charts, take a look at the
    <a href="../additional-documentation/plugins/popovers.html" target="_parent"
        >popovers</a
    >
    page.
</p>
`;export{t as default};
