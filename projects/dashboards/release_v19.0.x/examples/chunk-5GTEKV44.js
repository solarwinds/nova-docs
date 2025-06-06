import"./chunk-VBFW7A5V.js";var t=`<h1>Risk Score Widget</h1>

<p>
    Risk Score indicators are quantifiable measures designed to track any
    metrics of a monitored system. The Risk Score widget displays the current
    measurement of a Risk Score as a color level value on a gradient scale from
    green to red and can display one or more individual metrics within a single
    widget instance. It's useful for highlighting and promoting easy
    comprehension of key metrics.
</p>

<nui-message type="info" [allowDismiss]="false">
    For details on how to instantiate a Risk Score widget, take a look at the
    inline comments under the source expander of the following example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="risk-score-widget-example"
    exampleTitle="Risk Score widget"
>
    <risk-score-widget-example></risk-score-widget-example>
</nui-example-wrapper>

<h2>Widget Schema</h2>

<p>
    The code listings below are the source files for the Risk Score widget
    definition with inline comments describing the parts that compose the
    standard Risk Score widget type. It includes the widget's definition as well
    as its corresponding configurator form for defining how to configure
    (create/edit) the widget.
</p>

<h2>Widget</h2>

<p>
    This part shows the actual widget definition. It includes, among other
    things, the components and providers that compose the widget itself.
</p>

<nui-example-code language="typescript" [code]="riskScoreWidgetFileText" />

<h2>Configurator</h2>

<p>
    This part shows the form that's used for configuring (creating/editing) the
    widget.
</p>

<nui-example-code language="typescript" [code]="riskScoreConfiguratorFileText" />
`;export{t as default};
