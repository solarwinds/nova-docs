import"./chunk-T555DFTC.js";var n=`<h1>Embedded Content Widget</h1>

<p>
    An Embedded Content Widget is used to embed content from an external site to
    a widget. You can integrate the contents of another web page into your own
    by two approaches: show the extract HTML or content of URL.
</p>

<nui-message type="info" [allowDismiss]="false">
    For details on how to instantiate a Embedded Content Widget, take a look at
    the inline comments under the source expander of the following example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="embedded-content-widget-example"
    exampleTitle="Embedded Content widget"
>
    <embedded-content-widget-example></embedded-content-widget-example>
</nui-example-wrapper>

<h2>Widget Schema</h2>

<p>
    The code listings below are the source files for the Embedded Content Widget
    definition with inline comments describing the parts that compose the
    standard Embedded Content Widget type. It includes the widget's definition
    as well as its corresponding configurator form for defining how to configure
    (create/edit) the widget.
</p>

<h2>Widget</h2>

<p>
    This part shows the actual widget definition. It includes, among other
    things, the components and providers that compose the widget itself.
</p>
<nui-example-code language="text" [code]="embeddedContentWidgetFileText" />

<h2>Configurator</h2>

<p>
    This part shows the form that's used for configuring (creating/editing) the
    widget.
</p>

<nui-example-code language="typescript" [code]="embeddedContentConfiguratorFileText" />{{
`;export{n as default};
