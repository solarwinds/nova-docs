import"./chunk-7KJRK3NW.js";var o=`<h1>Legend Setup</h1>

<h2>Basic Usage</h2>
<p>
    To implement
    <code
        ><a href="../components/LegendComponent.html" target="_blank"
            >nui-legend</a
        ></code
    >, perform the following steps:
</p>
<ol>
    <li>Place a <code>nui-legend</code> in the template.</li>
    <li>
        Put one or more
        <code
            ><a href="../components/LegendSeriesComponent.html" target="_blank"
                >nui-legend-series</a
            ></code
        >
        elements inside the <code>nui-legend</code> element.
    </li>
    <li>
        Use
        <code
            ><a
                href="../components/LegendSeriesComponent.html#descriptionPrimary"
                target="_blank"
                >descriptionPrimary</a
            ></code
        >
        input to set the primary description for the series.
    </li>
    <li>
        Place a
        <code
            ><a
                href="../components/BasicLegendTileComponent.html"
                target="_blank"
                >nui-basic-legend-tile</a
            ></code
        >
        inside the <code>nui-legend-series</code>.
    </li>
</ol>
<p>
    To add markers to a <code>nui-basic-legend-tile</code>, place a
    <code
        ><a href="../components/ChartMarkerComponent.html" target="_blank"
            >nui-chart-marker</a
        ></code
    >
    element inside it, and optionally set the
    <code
        ><a
            href="../components/ChartMarkerComponent.html#drawLine"
            target="_blank"
            >drawLine</a
        ></code
    >
    input to true to draw a line through the marker that matches the series line
    on the chart.
</p>
<nui-message type="info" [allowDismiss]="false">
    Per UX guidelines, when used with a line chart, basic tiles should have the
    <code>drawLine</code> input set to true.
</nui-message>
<p>
    To get markers and colors working, generate marker and color providers and
    bind their respective get methods to the marker and color inputs on the
    <code>nui-chart-marker</code> component. To see how to do this, take a look
    at the typescript and html source of the next example. The providers in this
    example are created using the framework's built-in
    <code
        ><a
            href="../miscellaneous/variables.html#CHART_PALETTE_CS1"
            target="_blank"
            >CHART_PALETTE_CS1</a
        ></code
    >
    chart colors and
    <code
        ><a
            href="..//miscellaneous/variables.html#CHART_MARKERS"
            target="_blank"
            >CHART_MARKERS</a
        ></code
    >.
</p>
<nui-example-wrapper filenamePrefix="legend-basic" exampleTitle="Basic Usage">
    <nui-legend-basic-example></nui-legend-basic-example>
</nui-example-wrapper>

<h2>Rich Tile</h2>
<p>To create a more information-rich legend, perform the following steps:</p>
<ol>
    <li>Place a <code>nui-legend</code> in the template.</li>
    <li>
        Put one or more
        <code
            ><a href="../components/LegendSeriesComponent.html" target="_blank"
                >nui-legend-series</a
            ></code
        >
        elements inside the <code>nui-legend</code> element.
    </li>
    <li>
        Use
        <code
            ><a
                href="../components/LegendSeriesComponent.html#descriptionPrimary"
                target="_blank"
                >descriptionPrimary</a
            ></code
        >
        input to set the primary description for the series.
    </li>
    <li>
        Use the <code>descriptionSecondary</code> input of
        <code>nui-legend-series</code> to set a secondary description.
    </li>
    <li>
        Place a
        <code
            ><a
                href="../components/RichLegendTileComponent.html"
                target="_blank"
                >nui-rich-legend-tile</a
            ></code
        >, instead of a <code>nui-basic-legend-tile</code>, inside the
        <code>nui-legend-series</code>.
    </li>
    <li>
        Use the <code>value</code> input of <code>nui-rich-legend-tile</code> to
        set the series value.
    </li>
    <li>
        Use the <code>seriesUnitLabel</code> input of <code>nui-legend</code> to
        set same labels for all series, or set the <code>unitLabel</code> input
        on the <code>nui-rich-legend-tile</code> to specify the label on each
        series separately.
    </li>
</ol>
<p>
    To add markers to the <code>nui-rich-legend-tile</code>, use the same
    approach as for <code>nui-basic-legend-tile</code> except you'll also need
    to add the <code>rightEdge</code> attribute to the
    <code>nui-chart-marker</code> element so that the marker appears on the
    right edge of the tile. If you want something such as an icon placed on the
    left edge of the tile, you can use the <code>leftEdge</code> attribute.
</p>
<p>
    To add colors to the <code>nui-rich-legend-tile</code>, pass a color value
    to the <code>backgroundColor</code> input. Optionally, you can set the
    <code>seriesColor</code> input on the <code>nui-legend</code> component to
    specify a default background color for all tiles.
</p>

<nui-example-wrapper
    filenamePrefix="legend-rich-tile"
    exampleTitle="Applying Value and Unit Label Via Input"
>
    <nui-legend-rich-tile-example></nui-legend-rich-tile-example>
</nui-example-wrapper>
<h3>Rich Tile Content Projection</h3>
<p>
    Instead of the value and unitLabel inputs, you can optionally use content
    projection to populate the tile by providing elements inside the
    <code>nui-rich-legend-tile</code> with <code>top</code> and/or
    <code>bottom</code> attributes indicating the desired positions of the
    projected elements. The following example manually styles the value and unit
    label projections with the same css styling as that provided automatically
    by the value and unitLabel inputs, but you can also set the styling
    differently based on your requirements. See the example's html and less
    source files for how this can be done.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> For <code>text-overflow: ellipsis</code> to work on
    projected tile content, you need to set the max-width on the content to
    either a fixed value or 100%.
</nui-message>
<nui-example-wrapper
    filenamePrefix="legend-rich-tile-content-projection"
    exampleTitle="Applying Value and Unit Label Via Content Projection"
>
    <nui-legend-rich-tile-content-projection-example></nui-legend-rich-tile-content-projection-example>
</nui-example-wrapper>

<h2>Text Color</h2>
<p>
    Set the <code>color</code> input on the
    <code>nui-rich-legend-tile</code> component to specify tilebox text color.
</p>
<nui-example-wrapper
    filenamePrefix="legend-text-color"
    exampleTitle="Text Color"
>
    <nui-legend-text-color-example></nui-legend-text-color-example>
</nui-example-wrapper>

<h2>Horizontal</h2>
<p>
    Set the <code>orientation</code> input on the
    <code>nui-legend</code> component to "horizontal" to display legend series
    horizontally.
</p>
<nui-example-wrapper
    filenamePrefix="legend-horizontal"
    exampleTitle="Horizontal"
>
    <nui-legend-horizontal-example></nui-legend-horizontal-example>
</nui-example-wrapper>

<h2>Compact Mode</h2>
<p>
    To implement a rich tile legend in compact mode simply omit passing
    <code>descriptionPrimary</code> and <code>descriptionSecondary</code> into
    the <code>nui-legend-series</code>.
</p>
<nui-example-wrapper
    filenamePrefix="legend-compact"
    exampleTitle="Compact Mode"
>
    <nui-legend-compact-example></nui-legend-compact-example>
</nui-example-wrapper>

<h2>Active State</h2>
<p>
    Set the <code>active</code> input on the <code>nui-legend</code> component
    to <code>true</code> to set the legend state to active.
</p>
<nui-example-wrapper filenamePrefix="legend-active" exampleTitle="Active State">
    <nui-legend-active-example></nui-legend-active-example>
</nui-example-wrapper>

<h2>Interactive Mode</h2>
<p>
    Set <code>interactive</code> input on the <code>nui-legend</code> component
    to <code>true</code> to enable legend interactive mode. For interactive mode
    to work fully, create a chart assist in your component typescript file:
</p>
<pre>
public chartAssist: ChartAssist = new ChartAssist(new Chart(new XYGrid()));</pre
>
<p>Add the following binding to <code>nui-legend</code>:</p>
<pre>
&lt;nui-legend (mouseleave)="chartAssist.resetVisibleSeries()"&gt;&lt;/nui-legend&gt;</pre
>
<p>Add following bindings to <code>nui-legend-series</code>:</p>
<pre>{{ legendHtml }}</pre>
<nui-example-wrapper
    filenamePrefix="legend-interactive"
    exampleTitle="Interactive Mode"
>
    <nui-legend-interactive-example></nui-legend-interactive-example>
</nui-example-wrapper>
<h2>Description Content Projection</h2>
<p>
    To provide a custom layout for the series description you can place an
    element with the <code>description</code> attribute inside the
    <code>nui-legend-series</code> and provide your custom layout inside that
    element.
</p>
<nui-example-wrapper
    filenamePrefix="legend-description-projection"
    exampleTitle="Description Content Projection"
>
    <nui-legend-description-projection-example></nui-legend-description-projection-example>
</nui-example-wrapper>

<h2>Metadata Series</h2>
<p>
    To set up a series that's only displayed on the legend and not on the chart,
    take a look at the code in the source expander of the example below.
</p>
<nui-example-wrapper
    filenamePrefix="legend-metadata"
    exampleTitle="Metadata Series"
>
    <nui-legend-metadata-example></nui-legend-metadata-example>
</nui-example-wrapper>
`;export{o as default};
