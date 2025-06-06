import"./chunk-VBFW7A5V.js";var t=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiToolbarModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    The basic layout for <code>&lt;nui-toolbar&gt;</code> consists of an
    <code>&lt;nui-toolbar&gt;</code> element containing one or more
    <code>&lt;nui-toolbar-group&gt;</code> elements. The
    <code>&lt;nui-toolbar-group&gt;</code> element is used to group similar
    items on the toolbar, separating them with an
    <code>&lt;nui-divider&gt;</code>. Each of the
    <code>&lt;nui-toolbar-group&gt;</code> elements in turn contains one or more
    <code>&lt;nui-toolbar-item&gt;</code> elements.
</p>

<p>
    A toolbar item can be placed either on the toolbar itself or inside a "More"
    menu on the right side of the toolbar. By default, toolbar items are placed
    directly on the toolbar. To have a toolbar item appear in the More menu, set
    the <code>type</code> input on the <code>&lt;nui-toolbar-item&gt;</code> to
    the value
    <code
        ><a
            target="_blank"
            href="../miscellaneous/enumerations.html#ToolbarItemType"
            >ToolbarItemType.secondary</a
        ></code
    >. You can bind an event handler to the toolbar-item
    <code>actionDone</code> event by passing a callback function.
</p>
<nui-example-wrapper filenamePrefix="toolbar-basic" exampleTitle="Basic Usage">
    <nui-toolbar-basic-example></nui-toolbar-basic-example>
</nui-example-wrapper>

<h2>Item Types</h2>
<p>
    To override the default display style, set the
    <code>displayStyle</code> input to one of the following string values:
    'main', 'destructive', or 'action'. 'action' is the default display style.
    <b>Note:</b> The toolbar component allows the user to provide a maximum of
    one 'destructive' item which must be placed at the end of all items on the
    toolbar. If this condition isn't met, an error message will be logged.
    <nui-message type="info">
        The default 'primary' item type specifies a preferred placement directly
        on the toolbar rather than inside the More menu. However, the toolbar
        component provides responsive behavior and will move 'primary' items to
        the More menu one-by-one as the horizontal space for them becomes
        smaller and smaller. Conversely, 'secondary' items cannot be moved
        outside the More menu.
    </nui-message>
</p>
<nui-example-wrapper
    filenamePrefix="toolbar-item-types"
    exampleTitle="Item Types"
>
    <nui-toolbar-item-types-example></nui-toolbar-item-types-example>
</nui-example-wrapper>

<h2>Embedded Content</h2>
<p>
    Other components can be embedded within the toolbar. The following example
    includes
    <code
        ><a target="_blank" href="../components/SearchComponent.html"
            >SearchComponent</a
        ></code
    >
    and
    <code
        ><a target="_blank" href="../components/MenuComponent.html"
            >MenuComponent</a
        ></code
    >
    in addition to the basic functionality. Embedded components should be placed
    in <code>div</code> having <code>nui-toolbar-embedded</code> class.
</p>
<nui-example-wrapper
    filenamePrefix="toolbar-embedded-content"
    exampleTitle="Embedded Content"
>
    <nui-toolbar-embedded-content-example></nui-toolbar-embedded-content-example>
</nui-example-wrapper>

<h2>Enabling Selection</h2>
<p>
    Set <code>selectionEnabled</code> binding to true in order to activate
    toolbar with selection. It is also possible to control the display of
    toolbar items depending on whether selection state is enabled or disabled.
    <br /><span class="nui-text-label">Note:</span> Use
    <code>boxShadow</code> set to false to remove bottom shadow(shown by
    default).
</p>

<nui-example-wrapper
    filenamePrefix="toolbar-selection"
    exampleTitle="Enabling Selection"
>
    <nui-toolbar-selection-example></nui-toolbar-selection-example>
</nui-example-wrapper>
`;export{t as default};
