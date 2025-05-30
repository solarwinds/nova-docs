import"./chunk-XR34LRGE.js";var i=`<p>
    <code>nui-button</code> allows for easy customization of a button such as
    changing the size and display style, configuring an icon, making a button
    auto-repeatable, etc. Typically, the <code>nui-button</code> attribute is
    applied to the native <code>button</code> tag, but it can be applied other
    HTML elements as well.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiButtonModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    This first example demonstrates the default values for the inputs. For
    example, <code>displayStyle</code> is not being set explicitly here, so the
    resulting button is shown with the default styling. See the
    <strong>Display Style</strong> section for additional display styles.
</p>

<nui-example-wrapper filenamePrefix="button-basic" exampleTitle="Basic Usage">
    <nui-button-basic-example></nui-button-basic-example>
</nui-example-wrapper>

<nui-message type="warning">
    <strong>Reminder:</strong> The default type of any HTML button is "submit".
    If submit behavior is not desired for your use case, be sure to set
    <code>type="button"</code> explicitly.
</nui-message>

<h2>Display Style</h2>
<p>
    To override the default display style, set the
    <code>displayStyle</code> input to one of the following string values:
    <code>'primary'</code>, <code>'action'</code>, or
    <code>'destructive'</code>.
</p>

<nui-example-wrapper
    filenamePrefix="button-display-style-primary"
    exampleTitle="Primary"
>
    <nui-button-display-style-primary-example></nui-button-display-style-primary-example>
</nui-example-wrapper>

<nui-example-wrapper
    filenamePrefix="button-display-style-action"
    exampleTitle="Action"
>
    <nui-button-display-style-action-example></nui-button-display-style-action-example>
</nui-example-wrapper>

<nui-example-wrapper
    filenamePrefix="button-display-style-destructive"
    exampleTitle="Destructive"
>
    <nui-button-display-style-destructive-example></nui-button-display-style-destructive-example>
</nui-example-wrapper>

<h2>Size</h2>
<p>
    To override the default size, set the <code>size</code> input to one of the
    following string values: <code>'compact'</code>, or <code>'large'</code>.
</p>

<nui-example-wrapper filenamePrefix="button-size" exampleTitle="Size">
    <nui-button-size-example></nui-button-size-example>
</nui-example-wrapper>

<h2>Removing Width Restriction</h2>
<p>
    By default all Nova buttons have a <code>max-width: 250px</code> set for
    their inner content; in case that width is exceeded, their content will be
    truncated to fit within that maximum width.
</p>
<p>
    In order to remove that restriction, you can apply the
    <code>unlimited-width</code> CSS class to the <code>button</code> element as
    shown in the example below.
</p>
<nui-example-wrapper
    filenamePrefix="button-long-text"
    exampleTitle="Removing the Width Limitation"
>
    <nui-with-button-long-text-example></nui-with-button-long-text-example>
</nui-example-wrapper>

<h2>Adding an Icon</h2>
<p>
    To add an icon, pass an icon name to the <code>icon</code> input. For a list
    of supported icons and icon names see the documentation for
    <a target="_blank" href="../components/IconComponent.html">IconComponent</a
    >.
</p>

<nui-example-wrapper
    filenamePrefix="button-with-icon"
    exampleTitle="Default Placement"
>
    <nui-button-with-icon-example></nui-button-with-icon-example>
</nui-example-wrapper>

<p>
    The default left placement of the icon can be overridden. To place the icon
    to the right of the text within the button set the
    <code>iconRight</code> input to true.
</p>

<nui-example-wrapper
    filenamePrefix="button-with-icon-right"
    exampleTitle="Right Placement"
>
    <nui-button-with-icon-right-example></nui-button-with-icon-right-example>
</nui-example-wrapper>

<p>
    You can optionally set the icon's color through the
    <code>iconColor</code> input. When no value is provided for
    <code>iconColor</code>, the default color is determined by the button's
    <code>displayStyle</code> setting.
</p>

<p>
    <strong>Note:</strong> For <code>displayStyle</code> "primary", the icon
    color is not configurable and is set to "white".
</p>

<nui-example-wrapper
    filenamePrefix="button-with-icon-custom-color"
    exampleTitle="Custom Color"
>
    <nui-button-with-icon-custom-color-example></nui-button-with-icon-custom-color-example>
</nui-example-wrapper>

<p>
    To create an <code>nui-button</code> containing only an icon, set the
    <code>input</code> and leave the inner content empty.
</p>

<nui-example-wrapper
    filenamePrefix="button-with-icon-only"
    exampleTitle="Icon Only"
>
    <nui-button-with-icon-only-example></nui-button-with-icon-only-example>
</nui-example-wrapper>

<h2>Repeat</h2>
<p>
    To set <code>nui-button</code> to repeatedly emit click events while the
    button is pressed continuously, set the <code>isRepeat</code> input to true.
</p>

<nui-example-wrapper filenamePrefix="button-repeatable" exampleTitle="Repeat">
    <nui-button-repeatable-example></nui-button-repeatable-example>
</nui-example-wrapper>

<h2>Busy</h2>
<p>
    Set <code>nui-button</code> to busy by passing true to the
    <code>isBusy</code> input.
</p>

<nui-example-wrapper filenamePrefix="button-busy" exampleTitle="Busy">
    <nui-button-busy-example></nui-button-busy-example>
</nui-example-wrapper>

<h2>Grouping</h2>
<p>
    An adjacent set of <code>nui-button</code> instances can be given a style
    indicating they are part of a group. This can be done by placing them inside
    a <code>&lt;span&gt;</code> or <code>&lt;div&gt;</code> with the class
    <code>btn-group</code>. Some of the style accommodations for grouped buttons
    include rounded corners applied only to the left side of the left-most
    button and the right side of the right-most button and displaying only a
    single border between the buttons.
</p>

<nui-example-wrapper filenamePrefix="button-group" exampleTitle="Grouping">
    <nui-button-group-example></nui-button-group-example>
</nui-example-wrapper>
`;export{i as default};
