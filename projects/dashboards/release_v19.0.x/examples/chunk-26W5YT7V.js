import"./chunk-VBFW7A5V.js";var t=`<h1>Widget Error Handling</h1>
<p>
    In this tutorial we'll show you how to handle errors in Nova dashboard. You
    will know-how provide an empty state view for the widget so users will be
    informed when there's no data or an error has occurred. We have default
    error state handling for all types of widgets.
</p>

<p>
    We have three params in the method <code>widgetBodyContentNodes</code>,
    which responsible for widget error handling:
</p>
<ul>
    <li>
        <code>fallbackAdapterId</code> The id for the adapter responsible for
        activating fallback content in case of an error (default value:
        NOVA_STATUS_CONTENT_FALLBACK_ADAPTER)
    </li>
    <li>
        <code>fallbackMap</code> A map of node keys to fallback content
        definitions (default value: ERROR_FALLBACK_MAP)
    </li>
    <li>
        <code>fallbackNodes</code> An index of fallback content definitions
        (default value: ERROR_NODES)
    </li>
</ul>

<p>
    You can see below the code examples of each part, which are used as a
    default for widget error handling
</p>
<strong>The example of adapter</strong>
<nui-example-code language="typescript" [code]="fallbackAdapter" />

<p>
    <strong>A map of error codes to widget error node keys</strong>
    <nui-message type="info" [allowDismiss]="false">
        An error code doesn't have to be an HTTP status code. It may be any
        string that matches an expected data source error type. Additionally,
        the node keys may be any string as long as they correspond to an error
        configuration node defined in the widget structure.
    </nui-message>
    <nui-example-code language="typescript" [code]="errorsMap" />
</p>

<strong>An index of common error configurations</strong>
<p>Each error configuration has:</p>
<ul>
    <li><code>id</code> of error node key</li>
    <li><code>componentType</code> of widget error component</li>
    <li>
        <code>properties (image, title and description)</code> for displaying
        error details
    </li>
</ul>
<nui-example-code language="typescript" [code]="errorNodes" />

<h2>Basic Steps</h2>
<ol>
    <li>
        Follow the instructions
        <a
            href="../additional-documentation/getting-started.html"
            target="_parent"
            >here</a
        >
        to set up your environment for dashboard development.
    </li>
    <li>
        Follow the instructions
        <a
            href="../additional-documentation/widget-types/kpi.html"
            target="_parent"
            >here</a
        >
        to get a basic KPI dashboard up and running.
    </li>
</ol>
<p>
    In the example below, we'll implement a sample KPI widget with an error. If
    the widget data source results in a known error transition we need to show
    the corresponding error layout configuration. If the data source reports an
    unknown error type transition we need to show an "unknown error" layout
    configuration. Switch into other data sources to see the handling of
    different errors in the widget. Each data source provides an error from
    <code>ERROR_FALLBACK_MAP</code>. A widget with no errors does not display an
    error layout. You can check it when switching to
    <code>AverageRatingKpiDataSource</code>.
</p>
<p>
    If the data source outputs an error as part of its
    <code>outputsSubject</code> payload, the configurator will display an error
    message including the string specified in the <code>message</code> property
    of the payload's error object. If there's no value for the
    <code>message</code> property, the error message will just display the value
    of the <code>type</code> property. The component responsible for this logic
    is the
    <code>
        <a href="../components/DataSourceErrorComponent.html" target="_blank"
            >DataSourceErrorComponent</a
        > </code
    >. If you want to use a custom component for this, you'll need to to set the
    <code>errorComponent</code> property in the configurator section of the
    pizzagna with the <code>lateLoadKey</code> of your custom component. For
    instructions on how to do that, be sure to take a look at the
    <a
        href="../additional-documentation/tutorials/customization/data-source-configurator.html"
        target="_parent"
        >Implementing a Custom Data Source Configurator</a
    >
    tutorial.
</p>
<nui-example-wrapper
    filenamePrefix="widget-error-handling.component"
    exampleTitle="Widget Error Handling"
>
    <widget-error-handling></widget-error-handling>
</nui-example-wrapper>

<h2>Custom Widget Error Handling</h2>
<p>
    At first, follow the instructions
    <a
        href="../additional-documentation/tutorials/customization/widget.html"
        target="_parent"
        >here</a
    >
    to implement your custom widget. Then you need to modify the widget type
    definition by changing the retrieving the definitions for the body content
    nodes in the method <code>widgetBodyContentNodes</code>. You can see below
    the declaration of that method:
    <nui-example-code language="typescript" [code]="widgetBodyContentNodesSignature" />
    So, you can modify any parameter:
    <code>fallbackAdapterId, fallbackMap, fallbackNodes</code> to your own
    widget error handling.
</p>
`;export{t as default};
