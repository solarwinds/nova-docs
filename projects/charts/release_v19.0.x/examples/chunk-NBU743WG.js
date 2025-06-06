import"./chunk-B7O3QC5Z.js";var s=`<h1>Colors</h1>
<p>
    The use of color is often the primary visual means of differentiating one
    data series from another, especially in the case of line charts. The colors
    used for each series are determined by the series color accessor. If a color
    accessor isn't specified, a default
    <a href="../classes/SequentialColorProvider.html" target="_blank"
        >SequentialColorProvider</a
    >
    instantiated automatically distributes colors sequentially to each series
    and tracks the color distribution by series ID. The job of the
    SequentialColorProvider is to ensure colors are used in the order provided
    and that a color doesn't get used more than once unless the number of series
    exceeds the number of colors in the provided palette.
</p>

<nui-message type="warning" [allowDismiss]="false">
    <strong>Proceed with caution!</strong>
    Examples below are provided to describe the possibilities of charting
    framework and give a better understanding of its principles. This is not a
    recommendation for regular usage. If you find yourself doing something like
    this, please consult with UX to double check that your mockups follow the
    Nova Design Language.
</nui-message>

<h2>Custom Color Accessor</h2>
<p>
    If you want to manually specify how colors are accessed for a chart's
    series, you can optionally provide your own color accessor per renderer
    instance. In the following snippet, a custom accessor plucks a color from
    one of the UX-approved chart
    <a
        href="https://marvelapp.com/project/3222505/screen/46622038"
        target="_blank"
        >color sequences</a
    >
    and uses it for every series that the renderer instance gets assigned to.
    Color sequence constants like the one used in the example can be found
    <a href="../miscellaneous/variables.html#CHART_PALETTE_CS1" target="_blank"
        >here</a
    >.
</p>
<pre>{{ customAccessorSnippet }}</pre>
<p>
    As you can see in the snippet, the seriesId automatically gets passed as an
    argument to the color accessor, so you can optionally add logic that uses
    the seriesId to determine which color gets returned. To see a custom color
    accessor in action, take a look at the code in the source expander of the
    following example.
</p>
<nui-example-wrapper
    filenamePrefix="colors-custom-accessor"
    exampleTitle="Custom Accessor"
>
    <nui-colors-custom-accessor-example></nui-colors-custom-accessor-example>
</nui-example-wrapper>

<h2>Custom Sequential Color Provider</h2>
<p>
    If the palette provided by the default SequentialColorProvider doesn't meet
    your specifications, you can instantiate your own color provider with a
    custom set of colors to be distributed sequentially and tracked by seriesId
    as in the following snippet:
</p>
<pre>{{ customProviderSnippet }}</pre>
<nui-example-wrapper
    filenamePrefix="colors-custom-provider"
    exampleTitle="Custom Sequential Color Provider"
>
    <nui-colors-custom-provider-example></nui-colors-custom-provider-example>
</nui-example-wrapper>
`;export{s as default};
