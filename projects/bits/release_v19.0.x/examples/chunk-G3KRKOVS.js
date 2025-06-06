import"./chunk-VBFW7A5V.js";var i=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTooltipModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    <code>Tooltip</code> is a directive that creates a tooltip container, and
    can be used with any element on the page. It is extremely easy to use,
    simply add a tooltip directive attribute, and assign a desired value to
    it.<br />
    <nui-message type="info" [allowDismiss]="false">
        <strong>Note:</strong> Toolitp's <em>MAX WIDTH</em> is
        <strong>250px</strong>. The longer text will wrap to a new line if
        exceeds
    </nui-message>
</p>

<nui-example-wrapper filenamePrefix="tooltip-basic" exampleTitle="Basic Usage">
    <nui-tooltip-basic-example></nui-tooltip-basic-example>
</nui-example-wrapper>

<h2>Disabled Tooltip</h2>
<p>
    <code>Tooltip</code> can be conditionally disabled, meaning it is possible
    to quit showing it under certain conditions. Here is an example:
</p>

<nui-example-wrapper
    filenamePrefix="tooltip-disabled"
    exampleTitle="Disabled Tooltip Usage Example"
>
    <nui-tooltip-disabled-example></nui-tooltip-disabled-example>
</nui-example-wrapper>

<h2>Tooltip ellipsis</h2>
<p>
    <code>Tooltip</code> can be set to display itself on text overflow. This can
    be used with nova class <code>nui-text-ellipsis</code> Here is an example:
</p>

<nui-example-wrapper
    filenamePrefix="tooltip-ellipsis"
    exampleTitle="Ellipsis Tooltip Usage Example"
>
    <nui-tooltip-ellipsis-example></nui-tooltip-ellipsis-example>
</nui-example-wrapper>

<h2>Tooltip Placement</h2>
<p>
    <code>Tooltip</code> can be positioned differently in relation to a host
    component. By default, <code>nui-tooltip</code> position is
    <code>top</code>, however, the tooltip can change its position if there is
    not enough space to position itself in a chosen direction. The example below
    shows how you can manually set the position of
    <code>nui-tooltip</code> using the <code>tooltipPlacement</code> attribute.
</p>
<p>
    Available placement options should be of a type
    <code>TooltipPosition</code>: <code>top</code>, <code>bottom</code>,
    <code>left</code>, <code>right</code>.
</p>

<nui-example-wrapper
    filenamePrefix="tooltip-position"
    exampleTitle="Position Tooltip Usage Example"
>
    <nui-tooltip-position-example></nui-tooltip-position-example>
</nui-example-wrapper>

<h2>Tooltip Manual Trigger</h2>
<p>
    <code>Tooltip</code> can be triggered manually using it's public
    <code>show()</code>, <code>hide()</code>, and <code>toggle()</code> methods.
    Exmple below shows the example of typical usage of the feature.
</p>
<p>
    Available placement options should be of a type
    <code>TooltipPosition</code>: <code>top</code>, <code>bottom</code>,
    <code>left</code>, <code>right</code>.<br />
    <mark
        >Thanks to the cdk overlay scrolling strategy, a tooltip will disappear
        on scrolling only if it's gone off the viewport of the screen.</mark
    >
</p>

<nui-example-wrapper
    filenamePrefix="tooltip-trigger"
    exampleTitle="Manual Tooltip Trigger Usage Example"
>
    <nui-tooltip-trigger-example></nui-tooltip-trigger-example>
</nui-example-wrapper>
`;export{i as default};
