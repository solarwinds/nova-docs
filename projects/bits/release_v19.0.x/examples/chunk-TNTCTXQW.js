import"./chunk-VBFW7A5V.js";var a=`<p>
    <code>&lt;nui-combobox&gt;</code> allows user to select one item from a
    list. User may filter the list by typing a query into the accompanying input
    field. <strong>Note:</strong> maximum width of combobox dropdown menu is
    400px (except for stretched combobox, where combobox itself and combobox
    dropdown menu are justified to the width of container element).
</p>
<h2>Accessibility</h2>
<p>
    Use <code>Tab</code> to navigate through form controls. Focus in and out
    with <code>Tab</code> will, respectively, open and close popup.<br />
    When input focused and popup is closed press
    <code>shift + arrow down</code> (or just <code>arrow down</code>) to open
    popup. <br />
    When opened: <br />
    <code>Arrow top/bottom</code> - navigate through items in a list; <br />
    Make an item active with arrows and press <code>Enter</code> to select it;
    <br />
    <code>Esc</code> - close popup; <br />
    When datasource in combobox is changed - key control is reset; <br />
    If an item was active and then datasource is changed - first item will
    become active; <br />
</p>
<h2>Basic Usage</h2>
<p>
    To implement basic combobox you need to pass data via
    <code>itemsSource</code> input. Use <code>placeholder</code> input to
    display placeholder. <code>value</code> receives item that will be selected
    before user starts to communicate with select component.
    <code>itemsSource</code> data must be an array of strings.
</p>
<nui-example-wrapper filenamePrefix="combobox-basic" exampleTitle="Basic usage">
    <nui-combobox-basic-example></nui-combobox-basic-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>To disable combobox use <code>isDisabled</code> property.</p>
<nui-example-wrapper filenamePrefix="combobox-disabled" exampleTitle="Disabled">
    <nui-combobox-disabled-example></nui-combobox-disabled-example>
</nui-example-wrapper>

<h2>Required</h2>
<p>
    The option <code>isInErrorState</code> is used to set/change conditional
    "required" validation. To subscribe to <code>changed</code> event you should
    pass a function, argument of which is
    <code
        ><a href="../interfaces/ISelectChangedEvent.html" target="_blank"
            >ISelectChangedEvent</a
        ></code
    >
    object. The option <code>isInErrorState</code> is used to set/change
    conditional "required" validation. This is quick way to set combobox as
    required instead of passing config object into validator. Use it to
    highlight error if field is set to empty or if user input doesn't
    corresponds to any item in the the source array and you are not interested
    in specific message. To subscribe to <code>changed</code> event you should
    pass a function, argument of which is
    <code
        ><a href="../interfaces/ISelectChangedEvent.html" target="_blank"
            >ISelectChangedEvent</a
        ></code
    >
    object.
</p>
<nui-example-wrapper filenamePrefix="combobox-required" exampleTitle="Required">
    <nui-combobox-required-example></nui-combobox-required-example>
</nui-example-wrapper>

<h2>Inline</h2>
<p>
    To make combobox inline you need to use <code>inline</code> property.
    <strong>Note:</strong> As you see there are no spacings between
    <code>nui-combobox</code>es in this example because spacings should be
    handled by users themselves (users should use
    <code>&#64;nui-space-md</code> spacing if they want to have several comboboxes
    next to each other).
</p>
<nui-example-wrapper filenamePrefix="combobox-inline" exampleTitle="Inline">
    <nui-combobox-inline-example></nui-combobox-inline-example>
</nui-example-wrapper>

<h2>Clear on Blur</h2>
<p>
    If you want to clear combobox input if it's value is not in the source array
    you need to pass
    <code>clearOnBlur</code> property.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-clear"
    exampleTitle="Clear on Blur"
>
    <nui-combobox-clear-example></nui-combobox-clear-example>
</nui-example-wrapper>

<h2>Icon Adjustment</h2>
<p>
    To adjust an icon to the combobox use <code>icon</code> property and pass in
    the name of the icon.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-icon"
    exampleTitle="Icon Adjustment"
>
    <nui-combobox-icon-example></nui-combobox-icon-example>
</nui-example-wrapper>

<h2>Filling the Parent Width</h2>
<p>
    For combobox to fill it's parent width you may pass <code>true</code> to the
    <code>justified</code> property.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-justified"
    exampleTitle="Filling the Parent Width"
>
    <nui-combobox-justified-example></nui-combobox-justified-example>
</nui-example-wrapper>

<h2>Display value</h2>
<p>
    If you want to have <code>itemsSource</code> as an array of object you need
    to pass <code>displayValue</code>
    property with name of the item property that will be shown in the dropdown
    menu.
</p>

<nui-example-wrapper
    filenamePrefix="combobox-display-value"
    exampleTitle="Display value"
>
    <nui-combobox-display-value-example></nui-combobox-display-value-example>
</nui-example-wrapper>

<h2>Using With Reactive Forms</h2>
<p>
    To use <code>nui-combobox</code> in reactive forms you need to create
    <code>FormGroup</code> that represents our form model. After that you can
    bind <code>nui-combobox</code> to this form element using
    <code>formControlName</code>
</p>
<nui-example-wrapper
    filenamePrefix="combobox-reactive-form"
    exampleTitle="Using With Reactive Forms"
>
    <nui-combobox-reactive-form></nui-combobox-reactive-form>
</nui-example-wrapper>

<h2>Typeahead</h2>
<p>
    To add typeahead-like behavior to combobox you need to change
    <code>itemsSource</code> in select in subscription to
    <code>(changed)</code> event. Then combobox dropdown will be re-rendered
    with new set of items.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-typeahead"
    exampleTitle="Typeahead"
>
    <nui-combobox-typeahead-example></nui-combobox-typeahead-example>
</nui-example-wrapper>

<h2>Separators</h2>
<p>
    If you want to have grouped data, you need to pass data as an array of
    <code
        ><a href="../interfaces/ISelectGroup.html" target="_blank"
            >ISelectGroup</a
        ></code
    >.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-separators"
    exampleTitle="Separators"
>
    <nui-combobox-separators-example></nui-combobox-separators-example>
</nui-example-wrapper>

<h2>Using a Custom Template</h2>
<p>
    To provide custom template for every item in combobox you need to link
    <code>customTemplate</code> input with <code>TemplateRef</code> that
    represents custom template.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-custom-template"
    exampleTitle="Combobox with custom template"
>
    <nui-combobox-custom-template-example></nui-combobox-custom-template-example>
</nui-example-wrapper>

<h2>Append to Body</h2>
<p>
    To attach menu popup to &lt;body&gt; use <code>appendToBody</code> input. It
    allows menu to ignore containers and overlap them.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-append-to-body"
    exampleTitle="Append to Body"
>
    <nui-combobox-append-to-body-example></nui-combobox-append-to-body-example>
</nui-example-wrapper>

<h2>Using with X button for removing value</h2>
<p>
    To enable "X" button for removing combobox value, use
    <code>isRemoveValueEnabled</code> input set to <code>true</code>. The button
    will be shown in case value is typed.
</p>
<nui-example-wrapper
    filenamePrefix="combobox-with-remove-value"
    exampleTitle="Remove value button"
>
    <nui-combobox-with-remove-value-example></nui-combobox-with-remove-value-example>
</nui-example-wrapper>
`;export{a as default};
