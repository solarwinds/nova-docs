import"./chunk-VBFW7A5V.js";var o=`<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> As always, inline styles are not recommended. They
    are only used in the examples on this page in an effort to make them more
    easily digestible.
</nui-message>
<p>
    <code>&lt;nui-sheet-group&gt;</code>, <code>&lt;nui-sheet&gt;</code>,
    <code>&lt;nui-card-group&gt;</code>, <code>&lt;nui-card&gt;</code>, allow
    you to build up a layout of different complexity.
</p>
<h2>Basic Usage</h2>
<p>Basic example of sheet and card. Sheets must have at least one card.</p>
<nui-example-wrapper filenamePrefix="layout-basic" exampleTitle="Basic Layout">
    <nui-layout-basic-example></nui-layout-basic-example>
</nui-example-wrapper>

<h2>Page Content</h2>
<p>
    This example shows how easy it is to create a layout for the page content.
</p>
<nui-example-wrapper
    filenamePrefix="layout-page-content"
    exampleTitle="Page Content Example"
>
    <nui-layout-page-content-example></nui-layout-page-content-example>
</nui-example-wrapper>

<h2>Separate vs. Joined</h2>
<p>
    Use <code>&lt;nui-sheet-group&gt;</code> as a root element for your layout.
    Inside <code>&lt;nui-sheet-group&gt;</code> go
    <code>&lt;nui-sheet&gt;</code> elements which in turn take either
    <code>&lt;nui-card-group&gt;</code> elements with
    <code>&lt;nui-card&gt;</code>s or just <code>&lt;nui-card&gt;</code>s on
    their own.
</p>
<p>
    <code>&lt;nui-sheet-group&gt;</code> can be <code>separate</code> or
    <code>joined</code>. Use input <code>sheetsType</code> to set this value. By
    default, <code>sheetsType</code> is <code>joined</code>. All elements,
    namely <code>&lt;nui-sheet-group&gt;</code>, <code>&lt;nui-sheet&gt;</code>,
    <code>&lt;nui-card-group&gt;</code>,
    <code>&lt;nui-card&gt;</code>
    have <code>direction</code> input which can have a value of
    <code>row</code> or <code>column</code>. Every element apart from
    <code>&lt;nui-card&gt;</code> has <code>direction</code> input default value
    of <code>row</code>. <code>&lt;nui-card&gt;</code> doesn't have a default
    for <code>direction</code>.
</p>
<nui-example-wrapper
    filenamePrefix="layout-separate-sheets"
    exampleTitle="Basic Separate Layout"
>
    <nui-layout-separate-sheets-example></nui-layout-separate-sheets-example>
</nui-example-wrapper>

<h2>Fit Content</h2>
<p>
    Besides <code>direction</code> input, <code>&lt;nui-sheet&gt;</code> has
    also a boolean input <code>fitContent</code>. When set to <code>true</code>,
    <code>fitContent</code> makes it such that <code>&lt;nui-sheet&gt;</code>'s
    width is the same as its children's one.
</p>
<p>
    Also, <code>&lt;nui-sheet&gt;</code> and
    <code>&lt;nui-card-group&gt;</code> are both scrollable.
</p>
<nui-example-wrapper
    filenamePrefix="layout-fit-content"
    exampleTitle="Fit Content"
>
    <nui-layout-fit-content></nui-layout-fit-content>
</nui-example-wrapper>

<h2>Enabling Resize</h2>
<p>
    To make <code>&lt;nui-sheet-group&gt;</code> resizable you should set to
    <code>true</code> a boolean input <code>isResizable</code>. You can also
    configure a resize value of <code>&lt;nui-sheet-group&gt;</code>'s child
    elements by passing <code>"%"</code> or <code>"px"</code> to
    <code>resizeUnit</code> input. By default pixels are used.
</p>
<nui-example-wrapper
    filenamePrefix="layout-resize"
    exampleTitle="Resizable Layout"
>
    <nui-layout-resize-example></nui-layout-resize-example>
</nui-example-wrapper>

<h2>Passing Initial Size</h2>
<p>
    <code>&lt;nui-sheet-group&gt;</code> and <code>&lt;nui-sheet&gt;</code> can
    be passed an initial size. Use input <code>initialSizeValue</code> to set
    this value. NOTE: setting initial size does not work with
    <code>fitContent</code> property. Pay attention to the
    <code>resizeUnit</code> of <code>&lt;nui-sheet-group&gt;</code>. Pass an
    appropriate value in <code>"%"</code> or <code>"px"</code> to
    <code>&lt;nui-sheet-group&gt;</code> and <code>&lt;nui-sheet&gt;</code>.
    This will tell components what unit to use (pixels or percents), when trying
    to resize your layout.
</p>
<nui-example-wrapper
    filenamePrefix="layout-init-size"
    exampleTitle="Initial Size"
>
    <nui-layout-init-size-example></nui-layout-init-size-example>
</nui-example-wrapper>

<h2>Complex Example</h2>

<nui-example-wrapper
    filenamePrefix="layout-complex"
    exampleTitle="Complex Example"
>
    <nui-layout-complex-example></nui-layout-complex-example>
</nui-example-wrapper>
`;export{o as default};
