import"./chunk-B7O3QC5Z.js";var t=`<h1>Thresholds</h1>
<p>
    Unlike in <code>novajs</code> charts, threshold functionality is not built
    into the chart component. To get threshold specific elements on your chart
    you need separate data series that will be used by generic renderers such as
    the
    <code
        ><a href="../classes/BarRenderer.html" target="_blank"
            >BarRenderer</a
        ></code
    >
    to display the threshold visualizations. The process of creating the data
    series needed for thresholds consists mainly of the following:
</p>
<ol>
    <li>Creating one or more zone series that define the threshold areas</li>
    <li>
        Injecting the zone data into the standard data series to provide access
        to this information from the legend, tooltips, etc.
    </li>
    <li>
        Creating the threshold series that actually visualize the thresholds on
        the chart
    </li>
    <li>
        Creating additional visual elements such as side indicators and
        horizontal lines indicating the start and end of each threshold zone
    </li>
</ol>
<p>
    To help you with all of this, we've built a
    <code
        ><a href="../injectables/ThresholdsService.html" target="_blank"
            >ThresholdsService</a
        ></code
    >
    that does the most common tasks in terms of threshold data calculation and
    new series generation.
</p>
<p>Sound complicated still?</p>
<p>
    Let's give it a try. Check out the inline comments of the following example.
</p>
<nui-example-wrapper
    filenamePrefix="thresholds-basic"
    exampleTitle="Basic Thresholds For Line Chart"
>
    <nui-thresholds-basic-example></nui-thresholds-basic-example>
</nui-example-wrapper>

<p>
    For the above example we used
    <code
        ><a href="../classes/TimeIntervalScale.html" target="_blank"
            >TimeIntervalScale</a
        ></code
    >
    for the horizontal axis, but it can easily be replaced with a continuous
    <code
        ><a href="../classes/TimeScale.html" target="_blank">TimeScale</a></code
    >
    if needed. The service will do more precise calculations of background
    colored areas for a continuous scale. For an example of this, see the
    <strong>Thresholds Summary</strong> demo farther down the page.
</p>

<h2>Spark Chart With Thresholds</h2>
<p>
    The process is similar for a spark chart. To see how, take a look at the
    inline comments of the example below.
</p>
<nui-example-wrapper
    filenamePrefix="thresholds-spark"
    exampleTitle="Thresholds For Spark Charts"
>
    <nui-thresholds-spark-example></nui-thresholds-spark-example>
</nui-example-wrapper>

<nui-message type="info" [allowDismiss]="false">
    When having multiple series per spark, you need to call
    <code
        ><a href="../classes/SparkChartAssist.html#updateSparks" target="_blank"
            >updateSparks()</a
        ></code
    >
    method of
    <code
        ><a href="../classes/SparkChartAssist.html" target="_blank"
            >SparkChartAssist</a
        ></code
    >
    instead of
    <code
        ><a href="../classes/SparkChartAssist.html#update" target="_blank"
            >update()</a
        ></code
    >
    as usual.
    <strong
        >For general information about implementing spark charts, please see the
        spark chart page
        <a href="../additional-documentation/spark.html" target="_parent"
            >here</a
        ></strong
    >.
</nui-message>

<h2>Thresholds Summary</h2>
<p>
    If you want to add an area below the main chart that displays a summary of
    the threshold data from multiple series, you can add a second
    <code
        ><a href="../components/ChartComponent.html" target="_blank"
            >nui-chart</a
        ></code
    >
    to the page with the help of an additional instance of
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >. To configure each of the chart grids to have the correct appearance you
    can use the
    <code
        ><a
            href="../miscellaneous/functions.html#thresholdsTopGridConfig"
            target="_blank"
            >thresholdsTopGridConfig</a
        ></code
    >
    function for the main chart grid and the
    <code
        ><a
            href="../miscellaneous/functions.html#thresholdsSummaryGridConfig"
            target="_blank"
            >thresholdsSummaryGridConfig</a
        ></code
    >
    function for the summary chart grid.
</p>
<p>
    In order to synchronize the behaviors of the summary chart with the main
    chart's various legend interaction behaviors, you can invoke ChartAssist's
    <code
        ><a
            href="../classes/ChartAssist.html#syncWithChartAssist"
            target="_blank"
            >syncWithChartAssist</a
        ></code
    >
    method on the summary chart assist passing a reference to the main chart
    assist.
</p>
<p>
    The rest of the process is very similar to what's been shown in the previous
    examples. For more details about how to implement the summary chart take a
    look at the inline comments of the example source below.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> By UX design, the threshold visualizations on the
    main chart of the following example are only displayed when a series is
    either hovered on the legend or is the only series selected on the legend.
    This behavior is meant to keep the visualizations focused on the primary
    data and to allow the user to inspect the secondary threshold data of each
    series via the legend if desired.
</nui-message>
<nui-example-wrapper
    filenamePrefix="thresholds-summary"
    exampleTitle="Thresholds Summary"
>
    <nui-thresholds-summary-example></nui-thresholds-summary-example>
</nui-example-wrapper>

<p>Easy! Isn't it?</p>
`;export{t as default};
