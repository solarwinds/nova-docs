import"./chunk-VBFW7A5V.js";var i=`<p>
    <code>&lt;nui-select&gt;</code> allows user to select one item from a list.
    <strong>Note:</strong> maximum width of select dropdown menu is 400px
    (except for stretched select, where select itself and select dropdown menu
    are justified to the width of container element).
</p>

<h2>Basic Usage</h2>
<p>
    To implement basic select you need to pass data via
    <code>itemsSource</code> input. Use <code>placeholder</code> input to
    display placeholder. <code>value</code> receives item that will be selected
    before user starts to communicate with select component.
    <code>itemsSource</code> data must be an array of strings.
</p>
<nui-example-wrapper filenamePrefix="select-basic" exampleTitle="Basic Usage">
    <nui-select-basic-example></nui-select-basic-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>To disable select use <code>isDisabled</code> property.</p>
<nui-example-wrapper filenamePrefix="select-disabled" exampleTitle="Disabled">
    <nui-select-disabled-example></nui-select-disabled-example>
</nui-example-wrapper>

<h2>Required</h2>
<p>
    The option <code>isInErrorState</code> is used to set/change conditional
    "required" validation. This is quick way to set select as required instead
    of passing config object into validator. Use it to highlight error if field
    is set to empty and you are not interested in specific message. To subscribe
    to <code>changed</code> event you should pass a function, argument of which
    is
    <code
        ><a href="../interfaces/ISelectChangedEvent.html" target="_blank"
            >ISelectChangedEvent</a
        ></code
    >
    object.
</p>
<nui-example-wrapper filenamePrefix="select-required" exampleTitle="Required">
    <nui-select-required-example></nui-select-required-example>
</nui-example-wrapper>

<h2>Inline</h2>
<p>
    To make select inline you need to use <code>inline</code> property.
    <strong>Note:</strong> As you see there are no spacings between
    <code>nui-select</code>s in this example because spacings should be handled
    by users themselves (users should use <code>&#64;nui-space-md</code> spacing if
    they want to have several selects next to each other).
</p>
<nui-example-wrapper filenamePrefix="select-inline" exampleTitle="Inline">
    <nui-select-inline-example></nui-select-inline-example>
</nui-example-wrapper>

<h2>Separators</h2>
<p>
    If you want to have grouped data you need to pass data as an array of
    <code
        ><a href="../interfaces/ISelectGroup.html" target="_blank"
            >ISelectGroup</a
        ></code
    >.
</p>
<nui-example-wrapper
    filenamePrefix="select-separators"
    exampleTitle="Select with separators"
>
    <nui-select-separators-example></nui-select-separators-example>
</nui-example-wrapper>

<h2>Filling the Parent Width</h2>
<p>
    For select to fill it's parent width you may pass <code>true</code> to the
    <code>justified</code> property.
</p>
<nui-example-wrapper
    filenamePrefix="select-justified"
    exampleTitle="Filling the Parent Width"
>
    <nui-select-justified-example></nui-select-justified-example>
</nui-example-wrapper>

<h2>Using a Custom Template</h2>
<p>
    To provide custom template for every item in select you need to link
    <code>customTemplate</code> input with <code>TemplateRef</code> that
    represents custom template.
</p>
<nui-example-wrapper
    filenamePrefix="select-custom-template"
    exampleTitle="Select with custom template"
>
    <nui-select-custom-template-example></nui-select-custom-template-example>
</nui-example-wrapper>

<h2>Using With Reactive Forms</h2>
<p>
    To use <code>nui-select</code> in reactive forms you need to create
    <code>FormGroup</code> that represents our form model. After that you can
    bind <code>nui-select</code> to this form element using
    <code>formControlName</code>.
</p>
<nui-example-wrapper
    filenamePrefix="select-reactive-form"
    exampleTitle="Using With Reactive Forms"
>
    <nui-select-reactive-form></nui-select-reactive-form>
</nui-example-wrapper>

<h2>Select with a Possibility to Unselect Item</h2>
<p>
    To have a possibility to use unselect value
    <code>isRemoveValueEnabled</code> input set to <code>true</code> should be
    provided. This in turn will add an item to dropdown with
    <code>Unspecified</code> label. To customize this label text, please use
    <code>removeValueText</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="select-remove-value"
    exampleTitle="Using With Default Value"
>
    <nui-select-remove-value></nui-select-remove-value>
</nui-example-wrapper>
`;export{i as default};
