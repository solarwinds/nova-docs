import"./chunk-B7O3QC5Z.js";var t=`<h1>Waterfall Charts</h1>

<p>
    A Waterfall Chart is a chart that shows a certain category events on the
    timeline.
</p>

<h2>Simple Waterfall Chart</h2>
<p>
    To build a simple Waterfall chart follow the instructions in the example
    source code:
</p>

<nui-example-wrapper
    filenamePrefix="waterfall-chart-simple"
    exampleTitle="Simple Waterfall Chart"
>
    <nui-waterfall-chart-simple-example></nui-waterfall-chart-simple-example>
</nui-example-wrapper>

<h2>Advanced Waterfall Chart</h2>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Caution!!!</strong>
    Example below is provided as a proof of concept and is not meant to be used
    in production code.
</nui-message>
<p>
    It is possible to build fancy waterfall charts with more complex
    functionality, like the one below. Each series provides a separate instance
    of bar chart that is rendered inside grid, which is a separate empty chart
    positioned using CDK Overlay on top of bar charts.
</p>
<p>To build an advanced Waterfall chart below follow the instructions:</p>
<ol>
    <li>
        Make sure your series provide a new instance of
        <code><a href="../classes/Chart.html" target="_blank">Chart</a></code>
        with an instance of
        <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code>
        passed in as an argument.
        <code
            >new
            <a href="../classes/BarStatusGridConfig.html" target="_blank"
                >BarStatusGridConfig</a
            >()</code
        >
        config instance goes as an argument to <code>XYGrid</code> with the
        <code>showBottomAxis</code> option set to <code>false</code>.
    </li>
    <li>
        Instantiate and configure a
        <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code>
    </li>
    <li>
        Instantiate and configure an
        <code
            ><a
                href="https://material.angular.io/cdk/overlay/overview"
                target="_blank"
                >Overlay</a
            ></code
        >
        and corresponding
        <code
            ><a
                href="https://material.angular.io/cdk/portal/overview"
                target="_blank"
                >Portal</a
            ></code
        >
        to attach the grid to a correct point of the first series on the page.
    </li>
    <li>
        Instantiate
        <code
            ><a href="../classes/HorizontalBarAccessors.html" target="_blank"
                >HorizontalBarAccessors</a
            ></code
        >. Using the accessor, assign the color or the bar to the corresponding
        data type retrieved from the <code>ChartPalette</code>.
    </li>
    <li>
        Configure the thickness of the bar using the
        <code
            ><a href="../classes/BandScale.html" target="_blank"
                >BandScale</a
            ></code
        >
        method
        <code
            ><a href="../classes/BandScale.html#padding" target="_blank"
                >padding</a
            ></code
        >.
    </li>
</ol>
<nui-example-wrapper
    filenamePrefix="waterfall-chart-advanced"
    exampleTitle="Advanced Waterfall Chart"
>
    <nui-waterfall-chart-advanced-example></nui-waterfall-chart-advanced-example>
</nui-example-wrapper>
`;export{t as default};
