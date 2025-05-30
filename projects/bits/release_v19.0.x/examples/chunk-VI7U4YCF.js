import"./chunk-VBFW7A5V.js";var n=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiPanelModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To use <code>&lt;nui-panel&gt;</code> wrap the content with an
    <code>&lt;nui-panel&gt;</code> element. To pass content to the side panel,
    put the <code>nuiPanelPaneBodyContent</code> attribute on the element
    containing the side panel content.
</p>
<nui-example-wrapper filenamePrefix="panel-basic" exampleTitle="Basic Usage">
    <nui-panel-basic-example></nui-panel-basic-example>
</nui-example-wrapper>

<h2>Custom Position</h2>
<p>
    <code>&lt;nui-panel&gt;</code> provides four position options for the side
    pane ('left','right', 'top' and 'bottom'). By default it is positioned to
    the left. To position it on the top, pass 'top' to
    <code>&lt;nui-panel&gt;</code>'s <code>orientation</code> input, works
    similarly for the other directions.
</p>
<nui-example-wrapper
    filenamePrefix="panel-position"
    exampleTitle="Custom Position"
>
    <nui-panel-position-example></nui-panel-position-example>
</nui-example-wrapper>

<h2>Size Options</h2>
<p>
    Use <code>paneSize</code> binding in order to set
    <code>&lt;nui-panel&gt;</code> size(width or height - depends on panel
    position), by default panel size is '250px', percents also can be used as
    well as pixels. To define max and min panel sizes, use
    <code>paneMaxSize</code> and <code>paneMinSize</code> bindings
    correspondingly. Default min-size value for width is '150px', for height -
    '40px', default max-size value is '90%'.
</p>
<nui-example-wrapper filenamePrefix="panel-size" exampleTitle="Panel Sizes">
    <nui-panel-size-example></nui-panel-size-example>
</nui-example-wrapper>

<h2>Embedded Content</h2>
<p>
    Additional content can be added inside the
    <code>&lt;nui-panel&gt;</code> component. To pass header to the side panel,
    put the <code>nuiPanelEmbeddedHeading</code> attribute on the element
    containing the side panel header or use <code>heading</code> binding for the
    simple text header. To pass embedded icon put the
    <code>nuiPanelEmbeddedIcon</code> attribute on the transcluded element, for
    the embedded footer <code>nuiPanelEmbeddedIcon</code> attribute must be
    applied to the element.
    <nui-message type="info"
        >Footer can be added only for left and right panel orientations.
        <code>nuiPanelEmbeddedIcon</code> will be visible in both collapsed and
        expanded states, while <code>nuiPanelEmbeddedHeading</code> is visible
        only in expanded state.
    </nui-message>
</p>
<nui-example-wrapper
    filenamePrefix="panel-embedded-content"
    exampleTitle="Embedded Content"
>
    <nui-panel-embedded-content-example></nui-panel-embedded-content-example>
</nui-example-wrapper>

<h2>Custom Styles</h2>
<p>
    To modify the background color of the side panel, set the
    <code>panelBackgroundColor</code> input to a value of type
    <code
        ><a
            href="../miscellaneous/enumerations.html#BackgroundColor"
            target="_blank"
            >BackgroundColor</a
        ></code
    >. The default is <code>BackgroundColor.colorBgLight</code>. To use dark
    panel border instead of default one, set <code>darkBorder</code> binding to
    'true', by default 'false' is assigned. Default header padding also can be
    removed, pass 'false' value to the <code>headerPadding</code> binding to
    reach this, by default 'true' value is assigned. Similarly, side pane body
    paddings can also be removed by passing 'false' to the
    <code>sidePaneBodyPadding</code>.
</p>
<nui-example-wrapper
    filenamePrefix="panel-custom-styles"
    exampleTitle="Custom Styles"
>
    <nui-panel-custom-styles-example></nui-panel-custom-styles-example>
</nui-example-wrapper>

<h2>Collapsible Mode</h2>
<p>
    To make <code>&lt;nui-panel&gt;</code> collapsible, set the
    <code>panelMode</code> input to 'collapsible'. You can set the collapsed
    state of <code>nui-panel</code> externally by setting the
    <code>isCollapsed</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="panel-collapse"
    exampleTitle="Collapsible Panel"
>
    <nui-panel-collapse-example></nui-panel-collapse-example>
</nui-example-wrapper>

<h2>Closable Mode</h2>
<p>
    To make <code>&lt;nui-panel&gt;</code> closable(hidden), set the
    <code>panelMode</code> input to 'closable'. You can hide or show the panel
    by setting the <code>isHidden</code> 'boolean' input.
</p>
<nui-example-wrapper filenamePrefix="panel-hide" exampleTitle="Closable Panel">
    <nui-panel-hide-example></nui-panel-hide-example>
</nui-example-wrapper>

<h2>Hoverable Mode</h2>
<p>
    To make <code>&lt;nui-panel&gt;</code> collapsed/expanded with the mouse
    hovering, set the <code>panelMode</code> input to 'hoverable'.
    <nui-message type="info"
        >Note, in this case panel can't be collapsed or expanded by the
        click.</nui-message
    >
</p>
<nui-example-wrapper
    filenamePrefix="panel-hoverable"
    exampleTitle="Hoverable Panel"
>
    <nui-panel-hoverable-example></nui-panel-hoverable-example>
</nui-example-wrapper>

<h2>Overlapping the Main Content</h2>
<p>
    To make main content overlapped by panel, set the
    <code>displacePrimaryContent</code> input to 'false', by default 'true'
    value is assigned.
</p>
<nui-example-wrapper
    filenamePrefix="panel-float"
    exampleTitle="Overlapping Main Content"
>
    <nui-panel-float-example></nui-panel-float-example>
</nui-example-wrapper>

<h2>Enabling Resizability</h2>
<p>
    To make <code>&lt;nui-panel&gt;</code> resizable, set the
    <code>isResizable</code> input to 'true'. The size of panel by default is
    bordered by corresponding min/max values. To modify this behaviour, boundary
    values can be set to 'auto'. To make percentage sized 'top' panel resizable,
    absolute height of parent block should be set.
    <nui-message type="info"
        >Note, collapsed state panel can't be resizable. Resize of
        bottom-oriented panel is not currently supported.</nui-message
    >
</p>
<nui-example-wrapper
    filenamePrefix="panel-resize"
    exampleTitle="Resizable panel"
>
    <nui-panel-resize-example></nui-panel-resize-example>
</nui-example-wrapper>

<h2>Top Oriented Collapsible Mode</h2>
<p>
    To make top oriented collapsible <code>&lt;nui-panel&gt;</code>, set the
    <code>panelMode</code> input to 'collapsible' and
    <code>orientation</code> input to 'top'. In this case expand/collapse button
    will be always centered, but the position of other transcluded elements
    remains flexible.
</p>
<nui-example-wrapper
    filenamePrefix="panel-collapse-top-oriented"
    exampleTitle="Collapsible Top Oriented Panel"
>
    <nui-panel-collapse-top-oriented-example></nui-panel-collapse-top-oriented-example>
</nui-example-wrapper>

<h2>External Collapse Toggle</h2>
<p>
    To change the collapsed state of the side pane manually, set the
    <code>isCollapsed</code> boolean input. After the side pane has been
    collapsed or expanded, a 'collapsed' event is emitted with a boolean of true
    if the side pane has been collapsed or false if the side pane has been
    expanded.
</p>
<nui-example-wrapper
    filenamePrefix="panel-collapse-outside-control"
    exampleTitle="External Collapse Toggle"
>
    <nui-panel-collapse-outside-control-example></nui-panel-collapse-outside-control-example>
</nui-example-wrapper>

<h2>External Hide/Show Toggle</h2>
<p>
    To change the hidden state of the side pane manually, set the
    <code>isHidden</code> boolean input. On hiding/showing of the side pane, a
    'hidden' event is emitted with a boolean of true if the side pane has been
    hidden or false if the side pane has been shown.
</p>
<nui-example-wrapper
    filenamePrefix="panel-hide-outside-control"
    exampleTitle="External Hide/Show Toggle"
>
    <nui-panel-hide-outside-control-example></nui-panel-hide-outside-control-example>
</nui-example-wrapper>

<h2>Nested</h2>
<p>
    Users can easily implement advanced layouts using nested panels. This
    requires no additional features or knowledge.
</p>
<nui-example-wrapper filenamePrefix="panel-nested" exampleTitle="Nested Panels">
    <nui-panel-nested-example></nui-panel-nested-example>
</nui-example-wrapper>
`;export{n as default};
