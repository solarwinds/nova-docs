import"./chunk-VBFW7A5V.js";var c=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiSearchModule</code>
    </li>
</ul>
<h1>Basic Usage</h1>
<p>
    To use the search component add an <code>&lt;nui-search&gt;</code> to your
    template.<br />
    <b>Note:</b> <code>&lt;nui-search&gt;</code> min-width is 180px and
    max-width is 400px.
</p>
<nui-example-wrapper filenamePrefix="search-basic" exampleTitle="Basic Usage">
    <nui-search-basic-example></nui-search-basic-example>
</nui-example-wrapper>

<h1>Placeholder</h1>
<p>
    To set the placeholder (string that will be placed as a watermark inside of
    the search when it's empty) for the
    <code>&lt;nui-search&gt;</code> use the <code>placeholder</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="search-placeholder"
    exampleTitle="Placeholder"
>
    <nui-search-placeholder-example></nui-search-placeholder-example>
</nui-example-wrapper>

<h1>Invalid State</h1>
<p>
    To manually set the search component to an invalid value state, pass true to
    the isInErrorState input. Note that this input is only about styling.
</p>
<nui-example-wrapper
    filenamePrefix="search-invalid-state"
    exampleTitle="Invalid state"
>
    <nui-search-error-state-example></nui-search-error-state-example>
</nui-example-wrapper>

<h1>Initial Value and Input Change</h1>
<p>
    To subscribe to value change in <code>&lt;nui-search&gt;</code> you can use
    the <code>(inputChanged)</code> output which emits <code>string</code> when
    input field value is changed. Optionally, you can set an initial value via
    the <code>value</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="search-input-change"
    exampleTitle="Initial Value and Input Change"
>
    <nui-search-input-change-example></nui-search-input-change-example>
</nui-example-wrapper>

<h1>Capture Focus and Focus Change</h1>
<p>
    There is a possibility to focus search programmatically. To focus the search
    pass true to the <code>captureFocus</code> input. Also there is a
    <code>(focusChange)</code> output that is fired on external focus changes
    (e.g. initiated by user via UI). Use it if you bind an external input to
    <code>captureFocus</code> input for matching them both.
</p>
<nui-example-wrapper
    filenamePrefix="search-focus-change"
    exampleTitle="Capture Focus and Focus Change"
>
    <nui-search-focus-change-example></nui-search-focus-change-example>
</nui-example-wrapper>

<h1>On Search and On Cancel</h1>
<p>
    There are two outputs <code>(search)</code> and <code>(cancel)</code>.
    <code>(cancel)</code> event is fired on each 'cancel' button click, clears
    the value and emits it. <code>(search)</code> event is fired when 'search'
    button is clicked or on Enter keypress and emits value of the search.
</p>
<nui-example-wrapper
    filenamePrefix="search-on-search-cancel"
    exampleTitle="On Search and On Cancel"
>
    <nui-search-on-search-cancel></nui-search-on-search-cancel>
</nui-example-wrapper>
`;export{c as default};
