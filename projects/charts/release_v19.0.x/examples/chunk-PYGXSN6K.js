import"./chunk-B7O3QC5Z.js";var t=`<h1>Spark Chart</h1>
<p>
    A spark chart is really just a line chart that's been resized and styled to
    give it a sparkline look and feel. Theoretically you can turn any chart into
    a spark chart. But, practically, there are only a few use cases for a spark
    chart that are needed so far, and these use cases are represented by the
    examples on this page.
</p>

<h2>Simple Sparkline</h2>
<p>
    The simplest sparkline chart, i.e. a line visualization with no grid, axis
    lines, or other details, can be done as in the example below. Features not
    described here \u2014 such as tooltips \u2014 are configured in the same way as for a
    generic X/Y chart, so feel free to check the
    <a href="../additional-documentation/chart-types/line.html" target="_parent"
        >Line Chart</a
    >
    page for guidance.
</p>
<p>
    The magic of a Nova spark chart originates from the
    <code
        ><a
            href="../miscellaneous/functions.html#sparkChartGridConfig"
            target="_blank"
            >sparkChartGridConfig</a
        ></code
    >
    function which creates a pre-baked spark chart
    <code
        ><a href="../classes/XYGridConfig.html" target="_blank"
            >XYGridConfig</a
        ></code
    >
    for setting up the
    <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code
    >.
</p>
<p>
    See the inline comments of the example source below for more details on how
    to achieve it.
</p>
<nui-example-wrapper
    filenamePrefix="spark-chart-basic"
    exampleTitle="Simple Sparkline"
>
    <nui-spark-chart-basic-example></nui-spark-chart-basic-example>
</nui-example-wrapper>

<h2>Multiple Series</h2>
<p>
    Following the same approach as in the case of a
    <a href="../additional-documentation/chart-types/line.html" target="_parent"
        >Line Chart</a
    >, using a chart assist is the easiest way to set up and manage a
    <a
        href="../additional-documentation/advanced-usage/chart.html"
        target="_parent"
        >chart</a
    >
    visualization. There is one difference with spark charts though. Whereas
    regular line charts sometimes visualize multiple data series at once, spark
    charts are designed to visualize a single primary data series per chart.
</p>
<p>
    What this means is that to visualize multiple primary series in a spark
    chart format, we need multiple spark chart instances to be stacked
    discretely on top of each other. So, the
    <code
        ><a href="../classes/SparkChartAssist.html" target="_blank"
            >SparkChartAssist</a
        ></code
    >
    reflects this pattern in that multiple primary input series result in
    multiple stacked spark chart instances.
</p>
<p>
    SparkChartAssist conceptualizes each spark chart as an
    <code><a href="../interfaces/ISpark.html" target="_blank">ISpark</a></code>
    which consists of an id, a chart instance, and an associated
    <code
        ><a href="../interfaces/IChartAssistSeries.html" target="_blank"
            >IChartAssistSeries</a
        ></code
    >
    collection. Typically, the series collection is a collection of one primary
    data series and zero or more dependent series such as a background threshold
    series. See the
    <a href="../additional-documentation/thresholds.html" target="_parent"
        >thresholds page</a
    >
    for information on how to add a threshold series to a spark chart.
</p>
<h3>Event Synchronization</h3>
<p>
    Notice the
    <code
        ><a href="../directives/ChartCollectionIdDirective.html" target="_blank"
            >nuiChartCollectionId</a
        ></code
    >
    attribute directive used in the template of the following example. This is
    what allows for synchronization of the events among charts. This can be seen
    in the following example in which hovering over one sparkline results in the
    duplication of the interaction line for each of the other sparklines.
</p>
<p>To get the interaction line synchronization working do the following:</p>
<ol>
    <li>
        Ensure that each sparkline <code>nui-chart</code> shares the same
        <code>nuiChartCollectionId</code> value:
        <pre>{{ collectionIdHtml }}</pre>
    </li>
    <li>
        Ensure that the x-axis scale id of each spark series is the same by
        either using the same scale instance across all series or by passing the
        same scale id to the scale constructor parameter each time a new scale
        is instantiated.
        <pre>{{ scaleInstantiationWithId }}</pre>
    </li>
</ol>
<h3>trackBy</h3>
<p>
    Also, notice in the template of the example below that the
    <code>trackBy</code> on the <code>ngFor</code> is set to the
    SparkChartAssist's
    <a href="../classes/SparkChartAssist.html#trackByFn" target="_blank"
        ><code>trackByFn</code></a
    >
    function. This enables SparkChartAssist and Angular to reuse an existing
    nui-chart if the chart's associated
    <code><a href="../interfaces/ISpark.html" target="_blank">ISpark</a></code>
    id is the same as an id that's already in use.
</p>
<h3>update vs. updateSparks</h3>
<p>
    The SparkChartAssist's
    <code
        ><a href="../classes/SparkChartAssist.html#update" target="_blank"
            >update</a
        ></code
    >
    method can be used to initiate a spark visualization if each of your
    sparklines has a primary data series and <strong>no</strong> dependent
    secondary series. The method takes a set of IChartAssistSeries as its
    argument, and the resulting ISpark's generated by the SparkChartAssist will
    automatically have id's equal to the corresponding series id's. The
    following example demonstrates how to use the update method.
</p>
<p>
    The SparkChartAssist's
    <code
        ><a href="../classes/SparkChartAssist.html#updateSparks" target="_blank"
            >updateSparks</a
        ></code
    >
    method can be used in the above case as well. But, if each of your
    sparkline's primary data series has one or more dependent series,
    updateSparks <strong>must</strong> be used. Note that the method takes a set
    of ISparks instead of IChartAssistSeries as its argument. Also, note that
    you do not need to provide the chart instance as part of the ISpark. The
    SparkChartAssist generates the chart for each ISpark automatically and
    appends it to the ISpark object. See the
    <a href="../additional-documentation/thresholds.html" target="_parent"
        >thresholds page</a
    >
    for an example of updateSparks usage.
</p>
<nui-message type="info" [allowDismiss]="false">
    In the case of updateSparks, each ISpark passed to the method must be
    assigned an explicit id to take advantage of the trackBy functionality
    mentioned above.
</nui-message>
<nui-example-wrapper
    filenamePrefix="spark-chart-multiple"
    exampleTitle="Multiple Series"
>
    <nui-spark-chart-multiple-example></nui-spark-chart-multiple-example>
</nui-example-wrapper>

<p>
    The next example is very similar to the above with two major changes. Here
    we use the
    <code
        ><a href="../classes/AreaRenderer.html" target="_blank"
            >AreaRenderer</a
        ></code
    >
    and the
    <code
        ><a
            href="../miscellaneous/functions.html#stackedAreaAccessors"
            target="_blank"
            >stackedAreaAccessors</a
        ></code
    >
    function to generate and assign the <code>x</code>, <code>y</code>,
    <code>y0</code> and <code>y1</code> accessors. Check out the
    <a href="../additional-documentation/chart-types/area.html" target="_parent"
        >Area Chart
    </a>
    page for additional guidance.
</p>
<nui-example-wrapper
    filenamePrefix="spark-chart-area-multiple"
    exampleTitle="Area with Multiple Series"
>
    <nui-spark-chart-area-multiple-example></nui-spark-chart-area-multiple-example>
</nui-example-wrapper>

<h2>Adding a Legend</h2>
<p>
    Using a chart assist is the easiest way to manage the communication of a
    <a
        href="../additional-documentation/advanced-usage/chart.html"
        target="_parent"
        >chart</a
    >
    and a
    <a
        href="../additional-documentation/advanced-usage/legend.html"
        target="_parent"
        >legend</a
    >. See the example html below for how to set it up.
</p>
<nui-example-wrapper
    filenamePrefix="spark-chart-legend"
    exampleTitle="Adding a legend"
>
    <nui-spark-chart-legend-example></nui-spark-chart-legend-example>
</nui-example-wrapper>

<h2>Table</h2>
<p>
    The next example demonstrates how to implement multiple sparklines within a
    table. Instantiation of
    <code
        ><a href="../classes/SparkChartAssist.html" target="_blank"
            >SparkChartAssist</a
        ></code
    >
    including plugins and all related functionality has to be done for every row
    in the table.
</p>
<nui-example-wrapper filenamePrefix="spark-chart-table" exampleTitle="Table">
    <nui-spark-chart-table-example></nui-spark-chart-table-example>
</nui-example-wrapper>
`;export{t as default};
