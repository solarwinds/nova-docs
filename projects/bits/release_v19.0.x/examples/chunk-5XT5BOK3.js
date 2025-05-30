import"./chunk-VBFW7A5V.js";var t=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTimeFramePickerModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    The <code>&lt;nui-time-frame-picker&gt;</code> component allows the user to
    select a time range. Its model is an
    <code
        ><a href="../interfaces/ITimeframe.html" target="_blank"
            >ITimeframe</a
        ></code
    >
    which can be set using the <code>startModel</code> input. All changes can be
    detected using the <code>changed</code> output. Additionally, max and min
    dates can be defined by setting the <code>maxDate</code> and
    <code>minDate</code> inputs with moment instances.
</p>
<p>
    If the user selects a start time that's later than the currently selected
    end time, the selected end time will adjust accordingly to preserve the
    current timeframe duration.
</p>
<p>
    If the user attempts to select an end time that's the same as or earlier
    than the currently selected start time, no changes occur on either the view
    or the model.
</p>

<nui-example-wrapper
    filenamePrefix="time-frame-picker-inline"
    exampleTitle="Basic Usage"
>
    <nui-time-frame-picker-inline></nui-time-frame-picker-inline>
</nui-example-wrapper>

<h2>Quick Picker Component</h2>

<p>
    The <code>&lt;nui-quick-picker&gt;</code> component is a helper component in
    the TimeFramePicker module.
</p>
<p>
    In most cases, the default title "Quick Picks" on the left pane should be
    sufficient; however, if needed, the title can be customized using the
    <code>presetsTitle</code> input.
</p>
<p>
    If a custom ordering of presets is needed, an array of keys can be passed to
    the <code>presetKeysOrder</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="quick-picker-basic"
    exampleTitle="Quick Picker"
>
    <nui-quick-picker-basic></nui-quick-picker-basic>
</nui-example-wrapper>

<h2>Timeframe Picker in a Popover</h2>

<p>
    To implement the common use-case of a timeframe picker in a popover, combine
    the <code>&lt;nui-time-frame-picker&gt;</code>,
    <code>nui-quick-picker</code> and <code>nui-popover</code> elements as shown
    below.
</p>
<p>
    To achieve a modal effect, you can set the popover's
    <code>[modal]</code> input to <code>true</code>.
</p>
<nui-example-wrapper
    filenamePrefix="time-frame-picker-basic"
    exampleTitle="Timeframe Picker in a Popover"
>
    <nui-time-frame-picker-basic-example></nui-time-frame-picker-basic-example>
</nui-example-wrapper>

<h2>Date-Based Picker in Popover</h2>

<nui-message type="info" [allowDismiss]="false">
    Please note that in order to adjust popover to the width of inner components
    you may need to pass <code>[unlimited]="true"</code> to it.
</nui-message>
<p>
    You are free to use different types of components inside a Quick Picker. The
    following example shows how to put a DatePicker inside.
</p>

<nui-example-wrapper
    filenamePrefix="time-frame-picker-date"
    exampleTitle="Date-Based Picker in Popover"
>
    <nui-time-frame-picker-date></nui-time-frame-picker-date>
</nui-example-wrapper>

<h2>Custom presets with Timeframe Picker</h2>

<p>
    Presets can be changed using
    <code>timeframeService.currentPresets</code> field.
</p>
<nui-message type="info" [allowDismiss]="false">
    Please note that TimeFrameService is provided in scope of
    NuiTimeFramePickerModule once, and since one TimeFrameService instance can
    keep only one set of presets, in order to have different presets in 2
    different components of an application, please provide different
    TimeFrameService instances in scope of those components (as in the example
    below, which includes <code>providers: [TimeframeService]</code> in a
    component decorator).
</nui-message>

<nui-example-wrapper
    filenamePrefix="time-frame-picker-custom"
    exampleTitle="Date-Based Picker in Popover"
>
    <nui-time-frame-picker-custom></nui-time-frame-picker-custom>
</nui-example-wrapper>

<h2>Multiple pickers with custom presets</h2>
<p>
    If you want to have multiple instances of <code>TimeFrameService</code> for
    your time frame pickers, you should provide one in the components providers.
</p>
<p>
    The example below shows how to create a component that will be responsible
    for creating <code>TimeFrameService</code> per component.
</p>
<nui-example-wrapper
    filenamePrefix="time-frame-picker-multiple-custom-pickers"
    exampleTitle="Multiple pickers with custom presets"
>
    <nui-time-frame-picker-multiple-custom-pickers></nui-time-frame-picker-multiple-custom-pickers>
</nui-example-wrapper>
`;export{t as default};
