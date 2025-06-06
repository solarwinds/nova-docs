import"./chunk-VBFW7A5V.js";var t=`<p>
    The <code>&lt;nui-select-v2&gt;</code> component allows users to select
    item(s) from a list.
</p>
<p>
    Select component is a perfect fit for simple cases or if your options list
    is small enough. Otherwise consider using
    <code
        ><a href="../components/ComboboxV2Component.html" target="_blank"
            >Combobox Component</a
        ></code
    >.
</p>
<p>
    However, it's recommended to use Select component in case you need input
    customization.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiSelectV2Module</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To use <code>&lt;nui-select-v2&gt;</code> wrap each option within a
    <code>&lt;select-v2-option&gt;</code> instance.
    <code>&lt;select-v2-option&gt;</code> has the <code>value</code> input so
    that it's <strong>unique</strong> for each option.
</p>

<p>
    You can use a <code>string</code> or an <code>object</code> as a
    <code>value</code>. In some cases, e.g. if using <em>Grouped items</em>,
    it's recommended to use <code>object</code> and provide some id's, because
    you can have the same option title in the different groups and it's
    necessary to distinguish them somehow. Also, using <code>string</code> may
    cause <code>i18n</code> issues as far as the same value is used for model
    and displaying on the view.
</p>

<p>
    Wrap all of the options inside a <code>&lt;nui-select-v2&gt;</code> instance
    as a content projection for the dropdown.
</p>

<p>
    You can put pretty much anything inside a
    <code>&lt;nui-select-v2&gt;</code> dropdown. For example, if you need the
    dropdown to display some info text, you can project
    <em>standard HTML</em> into the dropdown and it will be shown as
    <em>standard HTML</em> rather than a select option.
</p>

<nui-example-wrapper
    filenamePrefix="select-v2-basic"
    exampleTitle="Basic Usage"
>
    <nui-select-v2-basic-example></nui-select-v2-basic-example>
</nui-example-wrapper>

<h2>Getting and setting the select value</h2>

<h3>Getting a Value</h3>
<p>You can use the following ways to get a value from a select component:</p>
<ul>
    <li>Access the <code>value</code> property on the component</li>
    <li>
        Bind to the <code>valueSelected</code> output - emits the selected value
    </li>
</ul>

<nui-example-wrapper
    filenamePrefix="select-v2-getting-value"
    exampleTitle="Getting value"
>
    <nui-select-v2-getting-value-example></nui-select-v2-getting-value-example>
</nui-example-wrapper>

<h3>Setting a Value</h3>
<p>
    To set a value for a select, you can use either the <code>value</code> input
    or the reactive form control
    <code
        ><a
            href="https://angular.io/guide/reactive-forms#replacing-a-form-control-value"
            target="_blank"
            >setValue</a
        ></code
    >
    method, to provide an option from the list.
</p>

<nui-example-wrapper
    filenamePrefix="select-v2-setting-value"
    exampleTitle="Setting value"
>
    <nui-select-v2-setting-value-example></nui-select-v2-setting-value-example>
</nui-example-wrapper>

<h2>Customize Options</h2>
<p>
    It's possible to use a custom template for the <code>option</code>s in the
    list. You can use pretty much any layout for the options by putting the
    template inside a <code>&lt;select-v2-option&gt;</code> instance.
</p>
<p>
    Also, it's possible to use custom template instead of default select input.
    For that <code>[displayValueTemplate]</code> input is used.
</p>
<nui-message type="info" [allowDismiss]="false">
    <p>
        <strong>Note:</strong> In this example
        <code>[displayValueContext]</code> property of
        <code>select-v2-option</code> element is used to pass a context to
        custom input template.
    </p>
    All you put in <code>[displayValueContext]</code> input will be passed to
    custom template <code>#customTemplate</code> as a context in the example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="select-v2-customize-options"
    exampleTitle="Customize Options"
>
    <nui-select-v2-customize-options-example></nui-select-v2-customize-options-example>
</nui-example-wrapper>

<h2>Custom Content and Styling</h2>
<p>
    You can use custom content for either <code>option</code> or select input or
    dropdown content. <br />
    To use custom content on select input use
    <code>[displayValueContext]</code> input which takes
    <code>templateRef</code> for the desired input. <br />
    Note that you can use <code>[displayValueContext]</code> input on
    <code>nui-select-v2-option</code> option element to pass a context for
    custom input.<br />
    To use some HTML in the dropdown just pass it as a content projection to
    <code>nui-select-v2</code> together with options.
</p>
<p>
    For styling the elements you can just apply desired styles to an element you
    want to change visual representation.<br />
    In this example, <code>.less</code> styles are used, you can check styles in
    the code inspector.
</p>
<nui-example-wrapper
    filenamePrefix="select-v2-custom-content"
    exampleTitle="Custom Content"
>
    <nui-select-v2-custom-content-example></nui-select-v2-custom-content-example>
</nui-example-wrapper>

<h2>Grouped Options</h2>
<p>
    If you want to group options you can wrap them in a
    <code>&lt;nui-select-v2-option-group&gt;</code>
    instance. You can also provide a header for a group (optionally).
</p>
<p>
    To use default styles for a header (as in the example below), apply
    <code>.nui-select-v2-option-group--header</code> class to the header.
</p>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> Technically you can use any template instead of, or
    in addition to, the header.
</nui-message>
<nui-example-wrapper
    filenamePrefix="select-v2-grouped-items"
    exampleTitle="Grouped Options"
>
    <nui-select-v2-grouped-items-example></nui-select-v2-grouped-items-example>
</nui-example-wrapper>

<h2>Using With Reactive Forms</h2>
<p>
    To use <code>nui-select-v2</code> with reactive forms, create a
    <code>FormControl</code> that represents the form model. Then, bind
    <code>nui-select-v2</code> to this form element.
</p>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> It's recommended to use the
    <code
        ><a href="../components/FormFieldComponent.html" target="_blank"
            >&lt;nui-form-field&gt;</a
        ></code
    >
    component as a wrapper if you are going to use validation, captions, labels,
    etc.
</nui-message>
<nui-example-wrapper
    filenamePrefix="select-v2-reactive-form-field"
    exampleTitle="Reactive form field"
>
    <nui-select-v2-reactive-form-field-example></nui-select-v2-reactive-form-field-example>
</nui-example-wrapper>

<h2>Virtual Scroll</h2>
<p>
    The options dropdown can use virtual scroll. For that, wrap the options list
    in a
    <code
        ><a
            href="https://material.angular.io/cdk/scrolling/overview#virtual-scrolling"
            target="_blank"
            >cdk-virtual-scroll-viewport</a
        ></code
    >. You can adjust virtual scroll container to your needs according to
    <a href="https://material.angular.io/cdk/scrolling/api"
        >Virtual Scroll API</a
    >.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <p>
        <strong>Warning:</strong> All the items inside a dropdown
        <strong>must</strong> be of the same height!
    </p>
    You should set <code>itemSize</code> property of
    <code>cdk-virtual-scroll-viewport</code> to the <strong>exact</strong> value
    of an option height. Otherwise, some features may not work.
</nui-message>
<nui-example-wrapper
    filenamePrefix="select-v2-virtual-scroll"
    exampleTitle="Virtual Scroll"
>
    <nui-select-v2-virtual-scroll-example></nui-select-v2-virtual-scroll-example>
</nui-example-wrapper>

<h2>Disabled Mode</h2>
<p>
    It is possible to disable either the entire <code>select-v2</code> or one or
    more <code>select-v2-option</code>s. To do that, set the
    <code>isDisabled</code> input to true on the appropriate component.
</p>
<nui-example-wrapper
    filenamePrefix="select-v2-disabled"
    exampleTitle="Disabled Mode"
>
    <nui-select-v2-disabled-example></nui-select-v2-disabled-example>
</nui-example-wrapper>

<h2>Error State</h2>
<p>
    The <code>isInErrorState</code> input is used to set/change the visual
    validation state of the component. This can be used in custom situations in
    which you need to manually indicate that the component is in error state.
</p>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> If you want to use a select as a form field with
    validation, consider using the
    <code
        ><a href="../components/FormFieldComponent.html" target="_blank"
            >nui-form-field</a
        ></code
    >
    component. For information about that, see the
    <strong>Using With Reactive Forms</strong> section.
</nui-message>
<nui-example-wrapper
    filenamePrefix="select-v2-error"
    exampleTitle="Error state"
>
    <nui-select-v2-error-example></nui-select-v2-error-example>
</nui-example-wrapper>

<h2>Styling</h2>
<p>
    To style the select's dropdown simply use <code>overlayConfig</code> input
    and fill in its <code>panelClass</code> property with the global CSS class
    with the desired styles.
</p>
<nui-example-wrapper filenamePrefix="select-v2-styling" exampleTitle="Styling">
    <nui-select-v2-styling-example></nui-select-v2-styling-example>
</nui-example-wrapper>

<h2>Inline Display Mode</h2>
<p>
    To put a select in inline display mode, add necessary styles to the
    component. For example, you can add bootstrap
    <code>d-inline-flex</code> style.
</p>
<nui-example-wrapper filenamePrefix="select-v2-inline" exampleTitle="Inline">
    <nui-select-v2-inline-example></nui-select-v2-inline-example>
</nui-example-wrapper>

<h2>Overlay configuration</h2>
<p>
    To adjust <code>SelectComponent</code>'s popup overlay properties, such as
    <code>width</code>, <code>height</code> or other, set the
    <code>overlayConfig</code> input in accordance with Angular CDK Overlay
    Config
    <a href="https://material.angular.io/cdk/overlay/api#OverlayConfig"
        >interface</a
    ><br />
    <mark
        >NOTE: in case you need to set the <code>width</code> using the overlay
        config make sure to disable the automatic width synchronization, which
        is enabled by default. This can be done by setting the
        <code>syncWidth</code> input to <code>false</code></mark
    >
    <nui-message type="info" [allowDismiss]="false">
        <strong>Note:</strong> Select-v2 and Combobox-v2 contain default
        <code>with-popup-styles</code> (you can import it
        <code>POPUP_STYLES_CLASS</code> from <code>&#64;nova-ui/bits</code>) class
        which styles the popup according to the Nova Design Language. Setting
        custom styles through the global classes using the \`panelClass\` will
        override the default styles of the overlay. If you want to preserve
        default overlay styles please consider adding the
        <code>with-popup-styles</code> class when setting styles using the
        <code>overlayConfig</code>. Please see the example below.
    </nui-message>
</p>
<nui-example-wrapper
    filenamePrefix="select-v2-overlay-config"
    exampleTitle="Overlay configuration"
>
    <nui-select-v2-overlay-config-example></nui-select-v2-overlay-config-example>
</nui-example-wrapper>

<h2>Custom Dropdown Control</h2>
<p>
    The <code>manualDropdownControl</code> input gives you total control over
    opening and closing the dropdown. When set to <code>true</code>, the default
    behavior of the dropdown is blocked, and you can provide your own behavior.
</p>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> The <code>clickOutsideDropdown</code> output can be
    used to close the dropdown manually on clicks outside both the host element
    and the dropdown.
</nui-message>
<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> In order for keyboard navigation work as you open the
    dropdown you have to manually set focus to the <code>inputElement</code> in
    case you are triggering the dropdown outside the host element. For that, you
    can do <code>select.inputElement.nativeElement.focus()</code>
</nui-message>
<nui-example-wrapper
    filenamePrefix="select-v2-custom-control"
    exampleTitle="Custom Control"
>
    <nui-select-v2-custom-control-example></nui-select-v2-custom-control-example>
</nui-example-wrapper>

<h2>Color Picker</h2>
<p>
    <code>nui-select-v2</code> can be customized in a number of ways, including
    such a popular use case like color picker. The example below is purely based
    on <code>select-v2</code> and <code>select-v2-option</code> components, and
    only requires adding some css. Check the example below.
</p>

<nui-example-wrapper
    filenamePrefix="select-v2-color-picker"
    exampleTitle="Color Picker"
>
    <nui-select-v2-color-picker></nui-select-v2-color-picker>
</nui-example-wrapper>

<h2>Keyboard interaction</h2>
<p>
    <code>&lt;nui-select-v2&gt;</code> comes with built-in accessibility
    features:
</p>
<ul>
    <li><code>TAB/Shift+TAB</code> for focusing the component.</li>
    <li>
        <code>ARROW UP/ARROW DOWN</code> for navigation inside an option list.
    </li>
    <li>
        <code>PAGE UP/PAGE DOWN</code> for navigation inside the list to
        top/bottom.
    </li>
    <li><code>ENTER</code> to select an option.</li>
    <li><code>ESC</code> to close the dropdown.</li>
</ul>
`;export{t as default};
