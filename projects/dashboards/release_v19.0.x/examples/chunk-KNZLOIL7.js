import"./chunk-VBFW7A5V.js";var o=`<h1>Proportional Widget Donut Chart Content Configuration</h1>

<p>Donut Content configuration consists of two basic logic elements:</p>
<ul>
    <li>
        <code>aggregator</code> - an element that is responsible for processing
        ALL the metrics in chart and return a single value. For example,
        <code>percentageAggregator</code> - processes all the metrics and takes
        a percentage of a certain metric (configurable).
    </li>
    <li>
        <code>formatter</code> - an element that changes the representation of a
        single value. In terms of the proportional donut content, processes the
        output of an <code>aggregator</code>.
    </li>
</ul>
<h3>Default aggregators available</h3>
<ul>
    <li>
        <strong>Sum Aggregator</strong> - Gets the sum of all the metrics in the
        chart. <code>aggregatorType: sumAggregator</code>
    </li>
    <li>
        <strong>Percentage Aggregator</strong> - Gets the percentage of a
        specified metric among the other metrics.
        <code>aggregatorType: percentageAggregator</code>
    </li>
    <li>
        <strong>Field Mapper</strong> - Allows to map chart series fields to be
        displayed in the donut center. For example, if you want to display some
        value in the series data, you can use field mapper to get the value from
        the chart series. Check the configuration section in the example for
        more details. <code>aggregatorType: fieldMapper</code>.
    </li>
</ul>
<h3>Default formatters available</h3>
<ul>
    <li>
        <strong>Raw Formatter</strong> - displays the value as it.
        <code>componentType: RawFormatterComponent</code>
    </li>
    <li>
        <strong>Percentage Formatter</strong> - displays the value and the
        <code>%</code> sign.
        <code>componentType: PercentageFormatterComponent</code>
    </li>
    <li>
        <strong>Si Units Formatter</strong> - displays the
        <code>number</code> value using SI system prefixes (k, M, G etc.). For
        example, <code>123456789</code> value will be displayed as
        <code>123.5 M</code>.
        <code>componentType: SiUnitsFormatterComponent</code>
    </li>
</ul>

<nui-example-wrapper
    filenamePrefix="proportional-donut-content-formatters"
    exampleTitle="Proportional Widget with Donut Content"
>
    <proportional-widget-donut-content-formatters-example></proportional-widget-donut-content-formatters-example>
</nui-example-wrapper>

<h2>DataSource setup</h2>
<p>
    Before proceeding, to the widget configuration it's necessary to setup the
    dataSource first. It's necessary for the correct work of the configurator.
</p>
<p>
    DataSource should describe its <code>dataFields</code>, so be sure to check
    the
    <a
        href="../additional-documentation/anatomy/data-sources.html"
        target="_blank"
        >DataSource Documentation</a
    >
    before proceeding. Moreover, for the Donut Content configuration it's
    necessary that <code>dataFieldsConfig</code> to implement the
    <a
        href="../../interfaces/IProportionalDataFieldsConfig.html"
        target="_blank"
        >IProportionalDataFieldsConfig</a
    >
    interface, as follows:
</p>
<nui-example-code language="typescript" [code]="dataSourceDataFieldsConfig" />
<p>Check the code under the source expander for more details.</p>

<h2>Widget Configuration</h2>
<p>
    To configure the donut content you need to set
    <a href="../../interfaces/IDonutContentConfig.html" target="_blank"
        >donutContentConfig</a
    >
    in <code>donutContentConfig</code> in the <code>chartOptions</code> section.
    Following config example shows the config for setting Sum aggregation with
    Si Units Formatter applied to it.
</p>
<p>
    <strong>Note: </strong> please be aware that this config has top priority
    over
</p>
<nui-example-code language="typescript" [code]="widgetConfigSlice" />

<h3>Setting up the Configurator</h3>
<p>
    Having such a configuration, involves having a different configurator
    section configuration, otherwise the default configuration section
    <strong>won't work!</strong>
</p>
<p>
    To setup the Configurator, please check the
    <strong>setupConfigurator</strong> dashboard method implementation. You can
    find the sources under the dashboard source expander.
</p>
`;export{o as default};
