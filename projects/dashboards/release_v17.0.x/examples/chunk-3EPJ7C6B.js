import"./chunk-T555DFTC.js";var o=`<h1>Proportional Widget</h1>

<p>
    The general use-case for a proportional widget is to visualize at a glance
    how one data point compares to others in relation to the sum of all related
    data points. In other words, it can be used to show proportional data as a
    series of slices that make up a whole. The supported visualization modes
    include pie chart, donut chart, and bar chart in either horizontal or
    vertical orientation.
</p>
<p>
    An example use-case might be if we have some categories of data such as node
    statuses. Some of the nodes may have a status of "on" while the rest of them
    have a status of "off". This data can be fed into the proportional widget to
    let a user see at a glance how many of the nodes are "on" in relation to the
    ones that are "off" and in relation to the total number of nodes. The
    following example displays the number of Solarians who have reviewed beers
    by city. The data is completely made up and makes no sense, but it's all in
    good fun.
</p>

<nui-message type="info" [allowDismiss]="false">
    For details on how to instantiate a proportional widget, take a look at the
    inline comments under the source expander of the following example.
</nui-message>

<nui-example-wrapper
    filenamePrefix="proportional-widget"
    exampleTitle="Proportional Widget"
>
    <proportional-widget-example></proportional-widget-example>
</nui-example-wrapper>

<h3>Interaction Handling</h3>
<p>
    In the example below the first chart is using the
    <code
        ><a href="../injectables/UrlInteractionHandler.html" target="_blank"
            >UrlInteractionHandler</a
        ></code
    >
    to handle interactions that occur on the legend when the chart is set to
    interactive. The second chart shows how individual series can be interactive
    when the series data, that conform to
    <code
        ><a href="../interfaces/IProportionalWidgetData.html" target="_blank"
            >IProportionalWidgetData</a
        ></code
    >
    interface, and provide value for:
</p>
<ul>
    <li><code>link</code>: string used for the legends label link.</li>
</ul>
<p>
    Look at the inline comments in the source expander to see how the
    <code
        ><a href="../injectables/UrlInteractionHandler.html" target="_blank"
            >UrlInteractionHandler</a
        ></code
    >
    is configured.
</p>

<nui-example-wrapper
    filenamePrefix="proportional-widget-interactive"
    exampleTitle="Interactive Proportional Widget"
>
    <proportional-widget-interactive-example></proportional-widget-interactive-example>
</nui-example-wrapper>

<h2>Widget Schema</h2>

<p>
    The code listings below are the source files for the proportional widget
    definition with inline comments describing the parts that compose the
    standard proportional widget type. It includes the widget's definition as
    well as its corresponding configurator form for defining how to configure
    (create/edit) the widget.
</p>

<h2>Widget</h2>

<p>
    This part shows the actual widget definition. It includes, among other
    things, the components and providers that compose the widget itself.
</p>

<nui-example-code language="typescript" [code]="proportionalWidgetFileText" />

<h2>Configurator</h2>

<p>
    This part shows the form that's used for configuring (creating/editing) the
    widget.
</p>

<nui-example-code language="typescript" [code]="proportionalConfiguratorFileText" />

<h2>Additional Features</h2>
<ul>
    <li>
        Define custom colors for the chart by assigning a string array of css
        color variables, color keywords, or RGB hex values to the
        <code>chartColors</code> property on the widget's
        <code>configuration</code> input (<code
            ><a
                href="../interfaces/IProportionalWidgetConfig.html"
                target="_blank"
                >IProportionalWidgetConfig</a
            ></code
        >). Also, you can use data-driven approach for setting the colors - just
        put the <code>color</code> property in the widget data series. You can
        use <code>prioritizeWidgetColors</code> property if you want for widget
        colors to override data colors. For all that, take a look at the example
        under the source code expander above.
    </li>
</ul>
`;export{o as default};
