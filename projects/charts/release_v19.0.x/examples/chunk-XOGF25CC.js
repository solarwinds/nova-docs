import"./chunk-B7O3QC5Z.js";var s=`<h1>Data Accessors</h1>

<p>
    Renderers are responsible for rendering your data, so they need to
    understand how your data is structured. That is the role of accessors. There
    is no interface that will enforce the structure of your data, but there are
    defaults you can follow to require as little extra configuration as
    possible.
</p>
<p>
    A renderer such as the
    <code
        ><a href="../classes/LineRenderer.html" target="_blank"
            >LineRenderer</a
        ></code
    >
    that derives from
    <code
        ><a href="../classes/XYRenderer.html" target="_blank"
            >XYRenderer</a
        ></code
    >
    has an associated
    <code
        ><a href="../classes/LineAccessors.html" target="_blank"
            >LineAccessors</a
        ></code
    >
    implementation with data accessor keys <code>x</code> and
    <code>y</code> which are used for accessing x and y domain data respectively
    from a chart's input data set(s).
</p>
<nui-message type="info" [allowDismiss]="false"
    >The general convention for data accessors is to use data point properties
    of the same name. So data accessor <code>x</code> uses a property
    <code>x</code> on the data point.</nui-message
>
<p>
    The following descriptions use the LineRenderer as an example. And, even
    though renderers not derived from XYRenderer may have different sets of
    default accessor keys, the same patterns for customizing data access still
    apply.
</p>

<h2>Custom Accessors</h2>
<p>
    Accessors define how data is accessed in a domain, and framework allows you
    to define custom accessors on one or more domains. A renderer will invoke
    the appropriate accessor on each datum within a domain. By default, a
    renderer visualizes raw data as is, i.e. without modification, but defining
    custom accessors makes it possible to add logic for deciding how to mutate
    the data before it gets visualized on the chart. In the following snippet,
    each datum in the y-domain gets multiplied by two before being rendered on
    the chart and for x-domain <code>z</code> property will be used, instead of
    default <code>x</code> property.
</p>
<pre>{{ customAccessorCode }}</pre>
<p>
    The following example contains two series each with its own line renderer
    visualizing the same raw data. One of the accessors has been customized to
    multiply each <code>y</code> datum by two and return <code>z</code> property
    value for <code>x</code> datum, as shown in the snippet above.
</p>
<nui-example-wrapper filenamePrefix="accessors" exampleTitle="Custom Accessors">
    <nui-accessors-example></nui-accessors-example>
</nui-example-wrapper>
`;export{s as default};
