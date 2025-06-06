import"./chunk-B7O3QC5Z.js";var a=`<h1>Pie and Donut Charts</h1>

<p>
    Pie Chart is a common way of showing part-to-whole data - but be aware that
    one of the shortcomings of this visualization is that, depending on the data
    to be visualized, it can be difficult for users to accurately compare the
    size of the segments.
</p>
<p>
    A donut chart is similar to a pie chart - but the open center area can be a
    good place to include more information about the data (eg. the total of all
    segments).
</p>

<h2>Basic Donut chart</h2>
<p>
    For the process of creating a donut chart, please refer to the inline
    comments of the example source code below. For further reference, here are
    documentation links to the elements required for creating a donut chart:
    <code><a href="../classes/Chart.html" target="_blank">Chart</a></code
    >,
    <code
        ><a href="../miscellaneous/functions.html#radialGrid" target="_blank"
            >radialGrid</a
        ></code
    >,
    <code
        ><a href="../classes/ChartAssist.html" target="_blank"
            >ChartAssist</a
        ></code
    >,
    <code
        ><a href="../classes/RadialAccessors.html" target="_blank"
            >RadialAccessors</a
        ></code
    >,
    <code
        ><a href="../miscellaneous/functions.html#radialScales" target="_blank"
            >radialScales</a
        ></code
    >,
    <code
        ><a href="../classes/RadialRenderer.html" target="_blank"
            >RadialRenderer</a
        ></code
    >, and
    <code
        ><a href="../interfaces/IChartAssistSeries.html" target="_blank"
            >IChartAssistSeries</a
        ></code
    >.
</p>
<nui-example-wrapper filenamePrefix="donut-chart" exampleTitle="Donut Chart">
    <nui-donut-chart-example></nui-donut-chart-example>
</nui-example-wrapper>

<h2>Basic Pie chart</h2>
<p>
    The process of creating of a pie chart is very similar to that of creating a
    donut chart. The only difference is that the renderer passed to the chart
    assist update method is a
    <code
        ><a href="../classes/PieRenderer.html" target="_blank"
            >PieRenderer</a
        ></code
    >
    instead of a RadialRenderer.
</p>
<nui-example-wrapper filenamePrefix="pie-chart" exampleTitle="Pie Chart">
    <nui-pie-chart-example></nui-pie-chart-example>
</nui-example-wrapper>

<h2>Content Inside the Donut Chart</h2>
<p>
    There are a couple of ways to create a Donut Chart with nested custom
    content.
</p>
<ol>
    <li>
        Use <code>has-overlay</code> and <code>overlay</code> css classes to
        center the content <strong>over</strong> the chart. Of the two methods,
        this one is simpler to use and will likely serve your needs if your
        content doesn't need to be responsive to dynamic chart resizing.
    </li>
    <li>
        Use
        <code
            ><a
                href="../components/ChartDonutContentComponent.html"
                target="_blank"
                >nui-chart-donut-content</a
            ></code
        >
        with an instance of
        <code
            ><a href="../classes/ChartDonutContentPlugin.html" target="_blank"
                >ChartDonutContentPlugin</a
            ></code
        >. This will put your content in a container that fits exactly
        <strong>inside</strong> of the donut. This can be useful if your content
        should be responsive to the chart size (e.g. do word wrap).
    </li>
</ol>
<p>The following example demonstrates both options side by side.</p>
<nui-example-wrapper
    filenamePrefix="donut-chart-with-content"
    exampleTitle="Donut Chart With Content"
>
    <nui-donut-chart-with-content-example></nui-donut-chart-with-content-example>
</nui-example-wrapper>

<h2>Chart Interaction With the Legend and Custom Colors</h2>
<p>
    Using features of the charting framework, it is possible to easily implement
    a fully-working interactive chart and legend combo. The interaction between
    the chart and the legend is set up in the html by applying chart assist
    method calls and property values to the
    <code
        ><a href="../components/LegendComponent.html" target="_blank"
            >nui-legend</a
        ></code
    >,
    <code
        ><a href="../components/LegendSeriesComponent.html" target="_blank"
            >nui-legend-series</a
        ></code
    >, and
    <code
        ><a href="../components/RichLegendTileComponent.html" target="_blank"
            >nui-rich-legend-tile</a
        ></code
    >
    component inputs. The example below demonstrates a donut chart, but legend
    interaction can be achieved in the same way for a pie chart. Take a look at
    the example's html source to see how it to do it.
</p>
<nui-message type="info" [allowDismiss]="false">
    Color assignment happens automatically if you only need default colors. But,
    if you need custom colors, the following example's typescript source file
    demonstrates how to provide them to the chart.
</nui-message>
<nui-example-wrapper
    filenamePrefix="donut-chart-interactive"
    exampleTitle="Donut Chart Interacting With a Legend"
>
    <nui-donut-chart-interactive-example></nui-donut-chart-interactive-example>
</nui-example-wrapper>

<h2>Tooltips</h2>
<p>
    For information about how to add tooltips to pie and donut charts, take a
    look at the
    <a href="../additional-documentation/plugins/tooltips.html" target="_parent"
        >tooltips</a
    >
    page.
</p>

<h2>Popovers</h2>
<p>
    For information about how to add popovers to pie and donut charts, take a
    look at the
    <a href="../additional-documentation/plugins/popovers.html" target="_parent"
        >popovers</a
    >
    page.
</p>
`;export{a as default};
