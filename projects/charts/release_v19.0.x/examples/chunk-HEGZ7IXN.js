import"./chunk-B7O3QC5Z.js";var a=`<h1>Markers</h1>
<p>
    The use of data markers is often the primary visual means of indicating
    which series a data point belongs to, especially in the case of line charts.
    The marker used for each series is determined by the series marker accessor.
    For the line accessors, if a marker accessor isn't specified, a default
    <a href="../classes/SequentialChartMarkerProvider.html" target="_blank"
        >SequentialChartMarkerProvider</a
    >
    instantiated automatically distributes markers sequentially to each series
    and tracks the marker distribution by seriesId. The job of the
    SequentialChartMarkerProvider is to ensure markers are used in the order
    provided and that a marker doesn't get used more than once unless the number
    of series exceeds the number of markers in the provided set.
</p>

<nui-message type="warning" [allowDismiss]="false">
    <strong>Proceed with caution!</strong>
    Examples below are provided to describe the possibilities of charting
    framework and give a better understanding of its principles. This is not a
    recommendation for regular usage. If you find yourself doing something like
    this, please consult with UX to double check that your mockups follow the
    Nova Design Language.
</nui-message>

<h2>Custom Marker Accessor</h2>
<p>
    If you want to manually specify which markers are accessed for a chart's
    series, you can optionally provide your own marker accessor. In the
    following snippet, a custom accessor plucks a marker from the UX-approved
    chart marker set and uses it for every series that the renderer instance
    gets assigned to. The nova-provided set of chart markers can be found
    <a href="../miscellaneous/variables.html#regularShapes" target="_blank"
        >here</a
    >.
</p>
<pre>{{ customAccessorSnippet }}</pre>
<p>
    pre As you can see in the snippet, the seriesId automatically gets passed as
    an argument to the marker accessor, so you can optionally add logic that
    uses the seriesId to determine which marker gets returned. To see a custom
    marker accessor in action, take a look at the code in the source expander of
    the following example.
</p>
<nui-example-wrapper
    filenamePrefix="markers-custom-accessor"
    exampleTitle="Custom Accessor"
>
    <nui-markers-custom-accessor-example></nui-markers-custom-accessor-example>
</nui-example-wrapper>

<h2>Custom Sequential Marker Provider</h2>
<p>
    If the set of markers provided by the line renderer's default
    SequentialChartMarkerProvider doesn't meet your specifications or you are
    using a renderer that doesn't have a default SequentialChartMarkerProvider,
    you can instantiate your own marker provider with a custom set of markers to
    be distributed sequentially and tracked by seriesId as in the following
    snippet:
</p>
<pre>{{ customProviderSnippet }}</pre>
<nui-example-wrapper
    filenamePrefix="markers-custom-provider"
    exampleTitle="Custom Sequential Marker Provider"
>
    <nui-markers-custom-provider-example></nui-markers-custom-provider-example>
</nui-example-wrapper>
`;export{a as default};
