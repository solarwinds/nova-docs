import"./chunk-VBFW7A5V.js";var i=`<p>
    <code>&lt;nui-radio-group&gt;</code> is used to get and store value of
    selected <code>&lt;nui-radio&gt;</code>
    buttons. Radio buttons allow users to choose one option from a set of
    mutually exclusive options. The user must select only one option, never
    zero.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiRadioModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To implement a radio group you need to pass a variable to
    <code>[(value)]</code> where you want to store the selected radio button.
    Then just add <code>&lt;nui-radio&gt;</code> with
    <code>[value]</code> property inside <code>&lt;nui-radio-group&gt;</code>.
    Also you can preselect value of <code>&lt;nui-radio&gt;</code> using
    <code>[checked]</code> property.
</p>
<nui-example-wrapper
    filenamePrefix="basic-radio-group"
    exampleTitle="Basic usage"
>
    <nui-basic-radio-group-example></nui-basic-radio-group-example>
</nui-example-wrapper>

<h2>Inline</h2>
<p>
    Add <code>class="nui-radio-group-inline"</code> to
    <code>&lt;nui-radio-group&gt;</code>
    to display radio group inline.
</p>
<nui-example-wrapper filenamePrefix="radio-group-inline" exampleTitle="Inline">
    <nui-radio-group-inline-example></nui-radio-group-inline-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>
    To disable a radio button inside radio group you need to pass
    <code>[disabled]</code> property to the <code>&lt;nui-radio&gt;</code>.
</p>
<nui-example-wrapper
    filenamePrefix="disabled-radio-group"
    exampleTitle="Disabled"
>
    <nui-disabled-radio-group-example></nui-disabled-radio-group-example>
</nui-example-wrapper>

<h2>Hints</h2>
<p>
    If you want to have hints below the radio buttons then you need to pass
    <code>[hint]</code> property to the <code>&lt;nui-radio&gt;</code>.
</p>
<nui-example-wrapper filenamePrefix="radio-group-hints" exampleTitle="Hints">
    <nui-with-hints-radio-group-example></nui-with-hints-radio-group-example>
</nui-example-wrapper>
<p>Or use some content element with <code>hint</code> attribute.</p>
<nui-example-wrapper
    filenamePrefix="radio-group-hints-content"
    exampleTitle="Elaborate Hints"
>
    <nui-with-hints-content-radio-group-example></nui-with-hints-content-radio-group-example>
</nui-example-wrapper>
<h2>Value Change Event</h2>
<p>
    You can pass <code>(valueChange)</code> property to the
    <code>&lt;nui-radio-group&gt;</code> and do something when the value of
    radio group changes.
</p>
<nui-example-wrapper
    filenamePrefix="value-change-radio-group"
    exampleTitle="Value change event"
>
    <nui-value-change-radio-group-example></nui-value-change-radio-group-example>
</nui-example-wrapper>

<h2>Part Of Form</h2>
<p><code>&lt;nui-radio-group&gt;</code> can be used in reactive forms.</p>
<nui-example-wrapper
    filenamePrefix="radio-group-in-form"
    exampleTitle="In form"
>
    <nui-radio-group-in-form-example></nui-radio-group-in-form-example>
</nui-example-wrapper>
`;export{i as default};
