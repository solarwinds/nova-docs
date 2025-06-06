import"./chunk-XR34LRGE.js";var n=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiExpanderModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To implement basic <code>&lt;nui-expander&gt;</code> wrap content with
    <code>&lt;nui-expander&gt;</code> element.
</p>
<nui-example-wrapper filenamePrefix="expander-basic" exampleTitle="Basic usage">
    <nui-expander-basic-example></nui-expander-basic-example>
</nui-example-wrapper>

<h2>Header Text</h2>
<p>
    To add heading to <code>&lt;nui-expander&gt;</code> header you need to pass
    <code>header</code> property with text, that you want to be added as a
    expander heading.
</p>
<nui-example-wrapper
    filenamePrefix="expander-header-text"
    exampleTitle="Header text"
>
    <nui-expander-header-text-example></nui-expander-header-text-example>
</nui-example-wrapper>

<h2>Header Text and Icon</h2>
<p>
    To add icon to <code>&lt;nui-expander&gt;</code> header you need to pass
    <code>icon</code> property with the name of the icon.
</p>
<nui-example-wrapper
    filenamePrefix="expander-text-and-icon"
    exampleTitle="Header text and icon"
>
    <nui-expander-text-and-icon-example></nui-expander-text-and-icon-example>
</nui-example-wrapper>

<h2>Custom Header</h2>

<p>
    Instead of using <code>header</code> and <code>icon</code> properties to set
    expander's header you can create custom expander header. To create custom
    header you need to pass custom content inside
    <code>&lt;nui-expander&gt;</code> and to add
    <code>nuiExpanderHeader</code> attribute to the element, which contains this
    custom content.
</p>
<p>
    Components with independent actions may be embedded into custom expander
    header. The following example demonstrates how to create custom expander
    header with embedded menu.
</p>

<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> The following example makes use of the
    <code>nuiClickInterceptor</code> directive. To use this directive, be sure
    to import <code>NuiCommonModule</code> in your component's parent module.
</nui-message>

<nui-example-wrapper
    filenamePrefix="expander-custom-header"
    exampleTitle="Custom header"
>
    <nui-expander-custom-header-example></nui-expander-custom-header-example>
</nui-example-wrapper>

<h2>Initially Expanded</h2>
<p>
    If you want to have <code>&lt;nui-expander&gt;</code> opened by default you
    need to pass <code>[open]="true"</code> property into the
    <code>&lt;nui-expander&gt;</code>.
</p>
<nui-example-wrapper
    filenamePrefix="expander-initially-expanded"
    exampleTitle="Initially expanded"
>
    <nui-expander-initially-expanded-example></nui-expander-initially-expanded-example>
</nui-example-wrapper>

<h2>Subscribing to Open Change</h2>
<p>
    If you want to subscribe to <code>&lt;nui-expander&gt;</code> opening and
    closing event you need to use <code>(openChange)</code> output.
</p>
<nui-example-wrapper
    filenamePrefix="expander-open-change"
    exampleTitle="Subscribing to open change"
>
    <nui-expander-open-change-example></nui-expander-open-change-example>
</nui-example-wrapper>

<h2>Without Expand Line</h2>
<p>
    If you want to remove left dotted line from
    <code>&lt;nui-expander&gt;</code> you need to pass
    <code>[hideLeftBorder]="true"</code> to <code>&lt;nui-expander&gt;</code>.
</p>
<nui-example-wrapper
    filenamePrefix="expander-without-border"
    exampleTitle="Without expand line"
>
    <nui-expander-without-border-example></nui-expander-without-border-example>
</nui-example-wrapper>
`;export{n as default};
