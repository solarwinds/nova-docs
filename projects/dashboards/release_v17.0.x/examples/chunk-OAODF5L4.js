import"./chunk-T555DFTC.js";var t=`<h1>Setting a background color for a KPI tile</h1>
<p>
    As it's essential for the pizzagna, it's possible to set background the
    color on the all its layers.
</p>
<ul>
    <li>Structure</li>
    <li>Configuration</li>
    <li>Data</li>
</ul>

<h3><strong>Color setting priority:</strong></h3>
<ol>
    <li>Data (dataSource)</li>
    <li>Color Prioritizer Rules</li>
    <li>Configuration</li>
    <li>Default color</li>
</ol>

<h2>Structure</h2>
<p>
    Using <i>Structure</i> layer, you can set KPI tiles default color. For that,
    you have to use <code>WidgetTypesService</code>, as in the example.
</p>
<p>
    Path for setting the default color -
    <code
        >"tiles.properties.template.properties.widgetData.backgroundColor"</code
    >
</p>

<h2>Configuration</h2>
<p>
    It's possible to specify the tile color on the widget
    <code>configuration</code> layer config.
</p>
<p>
    Picking the color from the UI using KPI configurator, the background color
    is set on this layer.
</p>

<h2>Data</h2>
<p>
    It's also possible to set the color on the <code>data</code> layer, for that
    the dataSource should return <code>backgroundColor</code> property in the
    data object and KPI tile will receive that.
</p>

<h3>Color Prioritizer Rules - dynamic change depending on data</h3>
<p>
    It's possible to configure the background color so that it will have
    different value depending on the received value.
</p>
<p>
    In order to do that, you have to configure the
    <code>KpiColorPrioritizer</code>. To do that, put the
    <code>KpiColorPrioritizer</code> in the <code>providers</code> sections.
</p>

<p>
    Also, you can configure the color rules for that. You have to configure
    following properties for each
</p>
<ul>
    <li><code>comparisonType</code> - type of the value comparison,</li>
    <li><code>value</code> - value to compare with</li>
    <li><code>color</code> - color to set</li>
</ul>
<h3>Color rules comparators:</h3>
<p>There're default comparators:</p>
<ul>
    <li><code>">"</code> - a > b comparison</li>
    <li><code>"<"</code> - a < b comparison</li>
    <li><code>">="</code> - a >= b comparison</li>
    <li><code>"<="</code> - a <= b comparison</li>
    <li><code>"=="</code> - a == b comparison</li>
</ul>
<h4>Custom comparators</h4>
<p>
    You can also use custom comparators, in case you want to have another value
    comparison logic. To use custom formatters, use
    <code>KpiColorComparatorsRegistryService</code>.
</p>
<p>It's highly recommended to put this logic in the <strong>module</strong>.</p>
<p>For example, this is how to configure <i>not equal</i> comparator:</p>
<nui-example-code language="typescript" [code]="comparatorsRegistryCode" />
<p>
    <strong>Note: </strong><code>KpiColorComparatorsRegistryService</code> is
    provided in <code>root</code>, if you want to isolate comparators, please
    declare it in the desired <code>providers</code> section.
</p>

<h2>Setting a custom pallette in the color pickers</h2>
<p>
    By default, KPI color pickers have a predefined set of colors. You can use
    <code>DEFAULT_KPI_BACKGROUND_COLORS</code> variable if you need.
</p>
<p>
    To use a custom color pallette, you have to set it to the pizzagna using the
    <code>WidgetTypesService</code>.
</p>
<p>
    To set the pallette to the <i>Description</i> section, use
    <code>WellKnownPathKey.TileDescriptionBackgroundColors</code> path.
</p>
<p>
    To set the pallette to the <i>Background Color Rules</i> section, use
    <code>WellKnownPathKey.TileBackgroundColorRulesBackgroundColors</code> path.
</p>
<p>Check the example code for more details.</p>

<nui-example-wrapper
    filenamePrefix="kpi-widget-background-color"
    exampleTitle="KPI widget"
>
    <kpi-widget-background-color-example></kpi-widget-background-color-example>
</nui-example-wrapper>
`;export{t as default};
