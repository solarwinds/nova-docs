import"./chunk-VBFW7A5V.js";var s=`<h2>Basic Usage</h2>
<p>
    Resize works with flexbox items, nested elements, and inline elements. The
    only required input is <code>nuiResizerDirection</code> that accepts values
    from
    <a target="_blank" href="../interfaces/ResizeDirection.html"
        ><code>ResizeDirection</code></a
    >
    Enum.
</p>
<p>
    Also there is a <code>(nuiResizerSizeChanged)</code> output that is
    returning string with style value of a changed size dimension.
</p>
<nui-message type="info">
    Please note that parent container for <code>nuiResizer</code> directive
    should have <code>position</code> value other than <code>static</code>;
</nui-message>
<nui-example-wrapper filenamePrefix="resize-basic" exampleTitle="Basic Usage">
    <nui-resize-basic-example></nui-resize-basic-example>
</nui-example-wrapper>

<h2>Handling Percentage Values</h2>
<p>
    Resize works with percents as well. To do so, input
    <code>[nuiResizerValue]</code> should be specified with
    <a target="_blank" href="../interfaces/ResizeValue.html"
        ><code>ResizeValue</code></a
    >
    equal to <code>percent</code>
</p>
<p>
    To see the effect, try to resize the yellow block and then resize the
    screen: since directive is changing percentage value of a size, the ratio
    between blocks is kept.
</p>
<nui-example-wrapper
    filenamePrefix="resize-percents"
    exampleTitle="Handling percentage values"
>
    <nui-resize-percents-example></nui-resize-percents-example>
</nui-example-wrapper>

<h2>Nested Resizers</h2>
<p>
    This example shows how you can use several resizer directives to make all
    blocks resizable.
</p>
<nui-message type="info">
    If you need something as complex, as this example, please consider usage of
    Layout components (Sheets)
</nui-message>
<nui-example-wrapper
    filenamePrefix="resize-nested"
    exampleTitle="Nested Resizers"
>
    <nui-resize-nested-example></nui-resize-nested-example>
</nui-example-wrapper>
`;export{s as default};
