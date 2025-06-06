import"./chunk-VBFW7A5V.js";var t=`<h1>KPI Widget</h1>

<p>
    Key performance indicators (KPIs) are quantifiable measures designed to
    track any metrics of a monitored system. The KPI widget displays the current
    measurement of a KPI as a single numeric value and can display one or more
    individual metrics within a single widget instance. It's useful for
    highlighting and promoting easy comprehension of key metrics. Additionally,
    each KPI within a widget instance can visualize associated thresholds via a
    dynamic background color indicating whether a certain threshold has been
    reached.
</p>

<nui-message type="info" [allowDismiss]="false">
    For details on how to instantiate a KPI widget, take a look at the inline
    comments under the source expander of the following example.
</nui-message>
<nui-example-wrapper filenamePrefix="kpi-widget" exampleTitle="KPI widget">
    <kpi-widget-example></kpi-widget-example>
</nui-example-wrapper>

<h3>Interaction Handling</h3>
<p>
    The example below has the
    <code
        ><a href="../injectables/UrlInteractionHandler.html" target="_blank"
            >UrlInteractionHandler</a
        ></code
    >
    configured to handle the interactions that occur on the tile. Look at the
    inline comments in the source expander to see how it is configured.
</p>

<nui-example-wrapper
    filenamePrefix="kpi-widget-interactive"
    exampleTitle="KPI with Interaction"
>
    <kpi-widget-interactive-example></kpi-widget-interactive-example>
</nui-example-wrapper>

<h2>Widget Schema</h2>

<p>
    The code listings below are the source files for the KPI widget definition
    with inline comments describing the parts that compose the standard KPI
    widget type. It includes the widget's definition as well as its
    corresponding configurator form for defining how to configure (create/edit)
    the widget.
</p>

<h2>Widget</h2>

<p>
    This part shows the actual widget definition. It includes, among other
    things, the components and providers that compose the widget itself.
</p>

<nui-example-code language="typescript" [code]="kpiWidgetFileText" />

<h2>Configurator</h2>

<p>
    This part shows the form that's used for configuring (creating/editing) the
    widget.
</p>

<nui-example-code language="typescript" [code]="kpiConfiguratorFileText" />
`;export{t as default};
