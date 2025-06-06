import"./chunk-VBFW7A5V.js";var n=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiMenuModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<nui-message [allowDismiss]="false" type="warning">
    Code-based menu (using <code>itemsSource</code>) is deprecated in bits v7.
</nui-message>

<p>
    To add simple items to the <code>Menu</code> component, please use
    <code>nui-menu-action</code> components as html children of
    <code>nui-menu</code>.
</p>
<p>
    One thing to note about the menu's opening behavior is that it will
    automatically reposition itself when opened to prevent being visually
    truncated if its default placement falls outside of the viewable area. By
    default, the menu placement is calculated from the edge of the window.
    However, you can optionally include a custom container with the class
    <code>nui-edge-definer</code> surrounding the menu in your html to force the
    menu to calculate its open position based on the edges of its container.
</p>
<nui-example-wrapper filenamePrefix="basic-menu" exampleTitle="Basic Menu">
    <nui-basic-menu-example></nui-basic-menu-example>
</nui-example-wrapper>

<h2>Item Variations</h2>

<p>
    Following components can be used inside <code>menuComponent</code>:
    <code>nui-menu-action</code>, <code>nui-menu-link</code>,
    <code>nui-menu-option</code>, <code>nui-menu-switch</code>.
    <code>itemTypes</code> could be mixed in one
    <code>nui-menu</code> component.
</p>
<p>
    Also button for menu could be configured with such properties:
    <code>size</code>: compact | small | default | large,
    <code>displayStyle</code>: "default" | "primary" | "action" | "destructive",
    <code>icon</code> (default value is &#8243;caret-down&#8243;). For more
    information visit Component > ButtonComponent section.
</p>
<p>Menu items can be grouped using <code>nui-menu-group</code> component</p>
<nui-example-wrapper
    filenamePrefix="menu-item-variations"
    exampleTitle="Menu Item Variations"
>
    <nui-menu-item-variations-example></nui-menu-item-variations-example>
</nui-example-wrapper>

<h2>Append to Body</h2>
<p>
    To attach menu popup to &lt;body&gt; use <code>appendToBody</code> input. It
    allows menu to ignore containers and overlap them.
</p>
<nui-example-wrapper
    filenamePrefix="menu-append-to-body"
    exampleTitle="Append to Body"
>
    <nui-menu-append-to-body-example></nui-menu-append-to-body-example>
</nui-example-wrapper>

<h2>Custom Item</h2>
<p>
    To create a custom menu item, put item template inside
    <code>nui-menu-item</code> component.
</p>
<p>
    Note: menu-items still have max width limited to 450 px. This is according
    to UX mockups. For better control over switch please use
    <code>nui-switch</code> inside <code>nui-menu-item</code> instead of
    <code>nui-menu-switch</code>
</p>
<nui-example-wrapper
    filenamePrefix="menu-custom-item"
    exampleTitle="Custom Item"
>
    <nui-menu-custom-item-example></nui-menu-custom-item-example>
</nui-example-wrapper>
`;export{n as default};
