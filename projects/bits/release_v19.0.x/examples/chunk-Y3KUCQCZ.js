import"./chunk-VBFW7A5V.js";var t=`<p>
    <code>&lt;nui-popup&gt;</code> is a base component for the most of
    dropdown-like Nova components, but this doesn't limit it's abilities. It
    allows you to put any HTML templates into it's body to build more complex
    and exciting components.
</p>
<nui-message [allowDismiss]="false" type="warning">
    <strong>Pay attention!</strong> The following examples demonstrate only
    basic scenarios. To get familiar with more complex use cases, you can refer
    to the documentation for components built on top of the
    <code>nui-popup</code>, such as
    <a href="../components/ComboboxComponent.html#example" target="_blank"
        >nui-combobox</a
    >,
    <a href="../components/MenuComponent.html#example" target="_blank"
        >nui-menu</a
    >,
    <a href="../components/SelectComponent.html#example" target="_blank"
        >nui-select</a
    >, etc., and explore their internal structure in the codebase.
</nui-message>
<!-- ------------------------------------------------------------------------------------------- -->
<h2>Basic Usage</h2>
<p>
    A simple popup can be added to the page by adding a
    <code>&lt;nui-popup&gt;</code> element. It must wrap two types of elements:
    one that toggles the popup and one that defines the content. To achieve
    this, the element responsible for toggling the popup must contain the
    <code>nuiPopupToggle</code> directive. The area with the content must be
    wrapped up inside a <code>div</code> with the
    <code>popupAreaContent</code> directive assigned to it.
</p>
<nui-example-wrapper
    filenamePrefix="popup-simple-usage"
    exampleTitle="Basic Usage"
>
    <nui-popup-simple-usage-example></nui-popup-simple-usage-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------- -->

<h2>Custom Width</h2>
<p>
    One can change the width of the popup by setting the
    <code>width</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="popup-with-custom-width"
    exampleTitle="Custom Width"
>
    <nui-popup-with-custom-width-example></nui-popup-with-custom-width-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------- -->

<h2>Appended to Body</h2>
<p>
    <code>nui-popup</code> can be appended to the body of the page if required.
    To achieve this, add the <code>appendToBody</code>
    input to the component.
</p>
<nui-message [allowDismiss]="false" type="warning">
    <strong>Please be aware</strong> that the positioning of the
    <code>nui-popup</code> component is treated differently when the
    <code>appendToBody</code> input is used. There is a technical limitation
    that causes the <code>directionTop</code> and
    <code>directionRight</code> inputs not to work when
    <code>appendToBody</code> is true. In this case, the positioning of the
    component is controlled exclusively by the
    <code>edgeDetectionService</code>.
</nui-message>
<nui-example-wrapper
    filenamePrefix="popup-append-to-body"
    exampleTitle="Appended to Body"
>
    <nui-popup-append-to-body-example></nui-popup-append-to-body-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------- -->

<h2>Custom Open Direction</h2>
<p>
    Even though <code>nui-popup</code> automatically detects the window edges
    and adjusts the open direction accordingly thanks to the
    <code>edgeDetectionService</code>, it's possible to force the
    <code>nui-popup</code> to open in a specific direction. Available inputs
    are: <code>directionRight</code> and <code>directionTop</code>, which
    receive boolean values.
</p>
<nui-example-wrapper
    filenamePrefix="popup-different-directions"
    exampleTitle="Custom Open Direction"
>
    <nui-popup-different-directions-example></nui-popup-different-directions-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------- -->

<h2>Custom Classes</h2>
<p>
    It is also easy to apply custom classes to the popup. Use the
    <code>contextClass</code> input to pass the desired css class.
</p>
<nui-example-wrapper
    filenamePrefix="popup-with-custom-styling"
    exampleTitle="Custom Styling"
>
    <nui-popup-with-custom-styling-example></nui-popup-with-custom-styling-example>
</nui-example-wrapper>

<!-- ------------------------------------------------------------------------------------------- -->

<h2>Custom Content</h2>
<p>
    You can put pretty much anything you want inside the
    <code>nui-popup</code> component. You can use it to build more complex
    components, and configure them to your liking.
</p>
<nui-example-wrapper
    filenamePrefix="popup-with-custom-content"
    exampleTitle="Custom Content"
>
    <nui-popup-with-custom-content-example></nui-popup-with-custom-content-example>
</nui-example-wrapper>
`;export{t as default};
