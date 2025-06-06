import"./chunk-B7O3QC5Z.js";var t=`<h1>Bucketed Bar Charts</h1>
<p>
    When you need to provide a complex comparison of data with categorical
    groups that have two or more bars, Stacked Bar Chart or Grouped Bar Chart
    can be used.
</p>

<nui-message type="warning" [allowDismiss]="false">
    For more details, please see the inline comments in the example sources
    below.
</nui-message>

<h1>Stacked Bar Charts</h1>
<p>
    Stacked bar chart represents categories with values stacked on top of each
    other.
</p>

<p>
    The overall data model is similar to the one described in the
    <a href="../additional-documentation/chart-types/line.html" target="_parent"
        >Line Chart</a
    >
    documentation. But, to stack your data you will need to use
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >
    with
    <code
        ><a href="../miscellaneous/functions.html#stack" target="_blank"
            >stack</a
        ></code
    >
    preprocessor.
</p>

<h2>Basic Stacked Bar Chart</h2>
<p>
    The following example of a stacked bar chart uses
    <code
        ><a href="../classes/BarTooltipsPlugin.html" target="_blank"
            >BarTooltipsPlugin</a
        ></code
    >, and
    <code
        ><a href="../classes/InteractionLabelPlugin.html" target="_blank"
            >InteractionLabelPlugin</a
        ></code
    >. Interaction is possible thanks to
    <code
        ><a href="../classes/BarHighlightStrategy.html" target="_blank"
            >BarHighlightStrategy</a
        ></code
    >
    in renderer configuration.
</p>
<nui-example-wrapper
    filenamePrefix="bar-chart-stacked"
    exampleTitle="Stacked Bar Chart"
>
    <nui-bar-chart-stacked-example></nui-bar-chart-stacked-example>
</nui-example-wrapper>
<!--
<h2>Horizontal Stacked Bar Chart</h2>
<p>
    The following example of a horizontal stacked bar chart uses
    <code><a href="../classes/BarHorizontalGridConfig.html" target="_blank">BarHorizontalGridConfig</a></code>,
    which includes a default grid configurations for this type of chart, and
    <code><a href="../classes/BarTooltipsPlugin.html" target="_blank">BarTooltipsPlugin</a></code>,
    whose constructor takes an offset pixel value and an orientation value of <code>"top"</code>
    which configures the chart to show a tooltip above the top right corner of each stacked bar.
</p>
<p><strong>Note:</strong> The x and y scales of the horizontal stacked bar chart are inverted as
    compared to those of the basic stacked bar chart.</p>

<nui-example-wrapper filenamePrefix="bar-chart-stacked-horizontal" exampleTitle="Horizontal Stacked Bar Chart">
    <nui-bar-chart-stacked-horizontal-example></nui-bar-chart-stacked-horizontal-example>
</nui-example-wrapper>
<h2>Percentage Stacked Bar Chart</h2>
<p>
    In order to have a normalized (percentage-based) stacked bar chart, some pre-processing of the data
    is needed. That is, the data must be mutated so that each data point includes not only an
    absolute value (e.g. Mbps), but also a percentage value. In order to use percentages to build stacks,
    you can use <code>accessors.data.value = (data: any) => data.percentageValue;</code> as shown in the
    example source below.
</p>
<nui-example-wrapper filenamePrefix="bar-chart-percentage" exampleTitle="Percentage Stacked Bar Chart">
    <nui-bar-chart-percentage-example></nui-bar-chart-percentage-example>
</nui-example-wrapper>

<br>
-->

<h1>Grouped Bar Charts</h1>

<p>
    Data interpretation using a Stacked chart becomes difficult when you want to
    compare the constituent parts of each entity across the various entities.
    Try comparing data for Austin across quarters in the chart above: since bars
    do not share a common base, it is cumbersome to compare them.
</p>

<p>To facilitate such analysis, we can use the Grouped Bar chart.</p>

<p>
    In the Grouped Column chart, all the columns have the same baseline and thus
    it is much easier to compare the heights of the individual columns.
</p>

<h2>Basic Grouped Bar Chart</h2>

<p>
    For this type of the chart no preprocessor is needed. Still you should set
    your scales and accessors in the way that will make grouping possible.
</p>

<nui-example-wrapper
    filenamePrefix="bar-chart-grouped"
    exampleTitle="Grouped Bar Chart"
>
    <nui-bar-chart-grouped-example></nui-bar-chart-grouped-example>
</nui-example-wrapper>

<h2>Horizontal Grouped Bar Chart</h2>

<p>
    BarTooltipsPlugin can be configured with the same
    <code
        ><a href="../interfaces/IBarChartConfig.html" target="_blank"
            >IBarChartConfig</a
        ></code
    >
    object that we mentioned before.
</p>

<p>
    For proper highlight behavior you will need to tell
    <code
        ><a href="../classes/BarHighlightStrategy.html" target="_blank"
            >BarHighlightStrategy</a
        ></code
    >
    to use your <code>"y"</code> axis instead of <code>"x"</code>.
</p>

<nui-message type="warning" [allowDismiss]="false">
    Horizontal orientation of grouped bar chart requires much more vertical
    space in comparison to regular one (in case of many items in one group).
    Example below has chart height explicitly set to 500px to illustrate this
    fact.
</nui-message>

<nui-example-wrapper
    filenamePrefix="bar-chart-grouped-horizontal"
    exampleTitle="Horizontal Grouped Bar Chart"
>
    <nui-bar-chart-grouped-horizontal-example></nui-bar-chart-grouped-horizontal-example>
</nui-example-wrapper>
`;export{t as default};
