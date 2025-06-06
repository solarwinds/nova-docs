import"./chunk-B7O3QC5Z.js";var t=`<h1>Chart Setup</h1>
<p>To create a data visualization, start by doing the following:</p>
<p>
    Instantiate a
    <code><a href="../classes/Chart.html" target="_blank">Chart</a></code> by
    passing an implementation of the
    <code><a href="../interfaces/IGrid.html" target="_blank">IGrid</a></code>
    interface as an argument to the constructor--for example an
    <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code> for
    line and bar charts.
</p>
<pre>{{ chartSetup }}</pre>
<p>
    The purpose of the grid is to give the chart a well-defined place to show
    its data. In the case of a line or bar chart, this includes grid lines,
    axes, ticks, tick labels, etc. For information about other types of grids,
    see the
    <a
        href="../additional-documentation/advanced-usage/grid.html"
        target="_parent"
        >Grid Configuration</a
    >
    page in the documentation.
</p>
<p>
    In your template, pass the chart class instance to the chart input on the
    chart component.
</p>
<pre>{{ basicChartTemplate }}</pre>
<p>
    To initialize your chart with data or to update it later, invoke the chart
    class's
    <code
        ><a href="../classes/Chart.html#update" target="_blank">update</a></code
    >
    method with an array of one or more chart series (<code
        ><a href="../interfaces/IChartSeries.html" target="_blank"
            >IChartSeries[]</a
        ></code
    >) as an argument.
</p>
<pre>{{ chartUpdate }}</pre>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> See the <em>Chart Series Setup</em> section below for
    how to set up a chart series.
</nui-message>

<h1>Example</h1>
<nui-example-wrapper
    filenamePrefix="line-chart"
    exampleTitle="Basic Line Chart"
>
    <nui-line-chart-example></nui-line-chart-example>
</nui-example-wrapper>

<h1>Chart Series Setup</h1>
<p>
    Each
    <code
        ><a href="../interfaces/IChartSeries.html" target="_blank"
            >IChartSeries</a
        ></code
    >
    is an extension of
    <code
        ><a href="../interfaces/IDataSeries.html" target="_blank"
            >IDataSeries</a
        ></code
    >
    and includes scales (<code
        ><a href="../miscellaneous/typealiases.html#Scales" target="_blank"
            >Scales</a
        ></code
    >) and a renderer (<code
        ><a href="../classes/Renderer.html" target="_blank">Renderer</a></code
    >) in addition to the data to be visualized.
</p>

<p>
    To start setting up a chart series, provide an <code>id</code> (string), a
    display <code>name</code> (string), and an array of
    <code>data</code> (<code>any[]</code>). The items in the array can be as
    simple as numbers or can be represented with more complex objects. The
    objects in the data array can be any shape you want, but the most basic
    setup for a two dimensional visualization is:
</p>
<pre>{{ basicData }}</pre>
<p>
    For a basic x-y coordinate system, the x values are used for the chart's
    x-axis and the y values are used for the y-axis.
</p>

<h2>Scales</h2>
<p>
    Next, provide as part of the IChartSeries a set of scales (<code
        ><a href="../miscellaneous/typealiases.html#Scales" target="_blank"
            >Scales</a
        ></code
    >) which allow the renderer to calculate exactly where to render a data
    point inside the grid.
</p>
<p>
    For a basic x-y grid, the scales can be set as an object with x and y
    properties--indicating which axis each scale applies to. Some of the
    available scale types are
    <code
        ><a href="../classes/LinearScale.html" target="_blank"
            >LinearScale</a
        ></code
    >,
    <code
        ><a href="../classes/TimeScale.html" target="_blank">TimeScale</a></code
    >,
    <code
        ><a href="../classes/BandScale.html" target="_blank">BandScale</a></code
    >
    and
    <code
        ><a href="../classes/TimeIntervalScale.html" target="_blank"
            >TimeIntervalScale</a
        ></code
    >.
</p>
<pre>{{ basicScales }}</pre>

<h2>Renderer</h2>
<p>
    Finally, provide a renderer which determines the type and appearance of a
    chart's visualization. For instance, to render the data as a line,
    instantiate a
    <code
        ><a href="../classes/LineRenderer.html" target="_blank"
            >LineRenderer</a
        ></code
    >
    and assign it to the <code>renderer</code> property of the corresponding
    <code
        ><a href="../interfaces/IChartSeries.html" target="_blank"
            >IChartSeries</a
        ></code
    >.
</p>
<pre>{{ renderer }}</pre>

<h2>Complete Chart Series</h2>
<pre>{{ basicSeries }}</pre>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> To check out the full basic line chart usage, click
    the "Show Source" button on the live example at the top of the page.
</nui-message>
`;export{t as default};
