import"./chunk-XR34LRGE.js";var o=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiFormFieldModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    Form Field is a convenient wrapper that helps to combine your inputs in a
    form. Currently we support these types of form items (but please note that
    not all of these components are in alpha stage):
</p>
<ul>
    <li>textbox</li>
    <li>textarea</li>
    <li>textNumber</li>
    <li>checkbox</li>
    <li>checkboxGroup</li>
    <li>combobox</li>
    <li>radioGroup</li>
    <li>switch</li>
    <li>select</li>
    <li>datePicker</li>
    <li>timePicker</li>
    <!--<li>dateTimePicker</li>-->
    <!--<li>timeFramePicker</li>-->
</ul>

<p>
    <code>nui-form-field</code> is a building block for any form. It gives an
    ability to add label for any input, complementary help text under it and
    info icon with a popover to display some additional text.
</p>

<nui-example-wrapper
    filenamePrefix="basic-form-field"
    exampleTitle="Basic Form Field"
>
    <nui-form-field-basic-example></nui-form-field-basic-example>
</nui-example-wrapper>

<h2>Validation Messages Inside Reactive Form</h2>
<p>
    In order to use <code>nui-form-field</code> within reactive form you need to
    pass it access to a control
    <code>[control]="reactiveForm.controls['email']"</code>. Also
    <code>formControlName</code> needs to be set directly on the input element
    you're using with the name of a form control.
</p>
<p>
    <code>nui-validation-message</code> component can be added inside
    <code>nui-form-field</code>. It has 2 inputs: <code>show</code> and
    <code>for</code>. Form Field Component will change <code>show</code> by
    itself to control visibility of the error message (this input is useful for
    consumers only outside <code>nui-form-field</code>), <code>for</code> input
    accepts validator name.
</p>

<nui-example-wrapper
    filenamePrefix="basic-reactive-form-field"
    exampleTitle="Validation Messages Inside Reactive Form"
>
    <nui-form-field-basic-reactive-example></nui-form-field-basic-reactive-example>
</nui-example-wrapper>

<p>
    For customization purposes, we provide the
    <code>nui-custom-validation-message</code>
    component that does not contain internal styling and html elements.
    <b>Input properties are similar to <code>nui-validation-message</code></b>
</p>
<nui-example-wrapper
    filenamePrefix="basic-reactive-form-field-custom-validation"
    exampleTitle="Custom Styled Validation Messages Inside Reactive Form"
>
    <nui-form-field-basic-reactive-custom-validation-example></nui-form-field-basic-reactive-custom-validation-example>
</nui-example-wrapper>

<h2>Compound Validation</h2>

<p>
    In the example below an example of a compound validation can be seen. To
    validate group of fields you need to find the first common parent FormGroup
    and add validator there (click "Source" above and open the TS tab to see the
    <code>matchPassword</code> validator).
</p>
<p>
    The current validation state of the form is displayed at the bottom of the
    example.
</p>

<nui-example-wrapper
    filenamePrefix="form-field-complex"
    exampleTitle="Form Field with custom validation"
>
    <nui-form-field-complex-example></nui-form-field-complex-example>
</nui-example-wrapper>

<h2>HTML as info</h2>

<p>
    There is a possibility to have additional information to each field. It can
    be done using either <code>info</code> input, that is just a text, passed as
    a string, or <code>infoTemplate</code> input, that uses html inside the
    <code>ng-template</code>. Note: the template is provided completely by the
    user and we do not do any sanitizing.
</p>

<nui-example-wrapper
    filenamePrefix="html-as-info-in-form-field"
    exampleTitle="HTML inside popover"
>
    <nui-form-field-with-html-example></nui-form-field-with-html-example>
</nui-example-wrapper>

<h2>Hint Text</h2>

<p>
    Hint text can give the user additional information about a form field and
    will appear below the field's user input area. The text for a hint can be
    specified in one of two ways: either by setting the
    <code>{{ getItemConfigKey("hint") }}</code> input with a string value or by
    providing a templateRef through the
    <code>{{ getItemConfigKey("hintTemplate") }}</code> input.
</p>

<nui-example-wrapper
    filenamePrefix="form-field-hint"
    exampleTitle="Form Field Hints"
>
    <nui-form-field-hint-basic-example></nui-form-field-hint-basic-example>
</nui-example-wrapper>

<h2>Dynamic Disabling</h2>

<p>
    Example to show possibility of controlling disabled state (setting initial,
    dynamic change of state).
</p>

<nui-example-wrapper
    filenamePrefix="form-field-dynamic-disabling"
    exampleTitle="Form Field with dynamic disabling"
>
    <nui-form-field-dynamic-disabling-example></nui-form-field-dynamic-disabling-example>
</nui-example-wrapper>

<h2>Nested Form Components</h2>

<p>
    In order to avoid code duplication, it may be useful to combine a form from
    several components. In this example there is a Form Group that consists of
    Nickname control an 2 child Form Groups represented by separate components:
    one is for personal data (name, surname) called
    <code>nui-first-custom-form-example</code> and another is for address (city,
    address) called <code>nui-second-custom-form-example</code>. In order to
    achieve that we need to let the parent form know that there are some child
    groups that should be appended. This is done by calling
    <code>formInitialized</code> method from the parent form group on the event
    <code>formReady</code> of the child. Also there is a
    <code>CustomFormFieldExampleComponent</code> from previous example reused in
    child components to illustrate even more flexibility of this approach.
</p>
<p>
    The current validation state of the form is displayed at the bottom of the
    example.
</p>
<p>
    Note that there are several ways to use components as a form group, but this
    is currently the most convenient way.
</p>

<nui-example-wrapper
    filenamePrefix="nested-forms-as-component"
    exampleTitle="Nested form components"
>
    <nui-nested-forms-as-component-example></nui-nested-forms-as-component-example>
</nui-example-wrapper>

<h2>Various Components in a Form</h2>

<p>This example shows all possible inputs combined in one form</p>

<nui-example-wrapper
    filenamePrefix="in-form-form-field"
    exampleTitle="Form Field inside the Form"
>
    <nui-form-field-in-form-example></nui-form-field-in-form-example>
</nui-example-wrapper>

<h2>Validation Triggering</h2>

<p>
    This example shows all possible ways for validation message triggering by
    touch, value changes or status changes event.
</p>

<nui-example-wrapper
    filenamePrefix="form-field-validation-triggering"
    exampleTitle="Form Field Validation Triggering"
>
    <nui-form-field-validation-triggering-example></nui-form-field-validation-triggering-example>
</nui-example-wrapper>
`;export{o as default};
