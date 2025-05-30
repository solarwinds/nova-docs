import"./chunk-VBFW7A5V.js";var t=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTimePickerModule</code>
    </li>
</ul>
<h2>Basic Usage</h2>
<p>
    To use the time picker add an <code>&lt;nui-time-picker&gt;</code> element
    to your template.
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-basic"
    exampleTitle="Basic Usage"
>
    <nui-time-picker-basic></nui-time-picker-basic>
</nui-example-wrapper>

<h2>Binding to Model Changes</h2>
<p>
    The <code>[model]</code> input represents the model of the time picker. To
    get the selected time, bind to the <code>(timeChanged)</code> output which
    emits a <code>moment() object</code>.
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-model-change"
    exampleTitle="Changing Model"
>
    <nui-time-picker-model-change></nui-time-picker-model-change>
</nui-example-wrapper>

<h2>Emitting the Day and Year</h2>
<p>
    To have <code>(timeChanged)</code> emit the current day and year in addition
    to the time, set the <code>[preserveInsignificant]</code> input to true.
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-preserve-insignificant"
    exampleTitle="Emitting Day and Year"
>
    <nui-time-picker-preserve-insignificant></nui-time-picker-preserve-insignificant>
</nui-example-wrapper>

<h2>Setting Disabled</h2>
<p>
    To disable the time-picker, set the <code>[isDisabled]</code> input to true.
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-disabled"
    exampleTitle="Setting Disabled"
>
    <nui-time-picker-disabled></nui-time-picker-disabled>
</nui-example-wrapper>

<h2>Setting a Custom Time Format</h2>
<p>
    A custom time format can be applied via the <code>timeFormat</code> input.
    The default format is "LT".
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-custom-format"
    exampleTitle="Custom Time Format"
>
    <nui-time-picker-custom-format></nui-time-picker-custom-format>
</nui-example-wrapper>

<h2>Setting a Custom Time Step</h2>
<p>
    A custom time step (the interval in minutes between selectable times) can be
    applied via the <code>timeStep</code> input. The default time step is "30".
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-custom-step"
    exampleTitle="Custom Time Step"
>
    <nui-time-picker-custom-step></nui-time-picker-custom-step>
</nui-example-wrapper>

<h2>Using with Reactive Forms</h2>
<p>
    To use <code>&lt;nui-time-picker&gt;</code> in a reactive form, create a
    <code>FormGroup</code> that represents the form model. Then, bind
    <code>&lt;nui-time-picker&gt;</code> to a form element using the
    <code>formControlName</code>
    attribute.
</p>
<nui-example-wrapper
    filenamePrefix="time-picker-reactive-form"
    exampleTitle="Reactive Form"
>
    <nui-time-picker-reactive-form></nui-time-picker-reactive-form>
</nui-example-wrapper>
`;export{t as default};
