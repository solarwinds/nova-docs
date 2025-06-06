import"./chunk-VBFW7A5V.js";var t=`<h2>Basic Usage</h2>

<p>
    To show badge add <code>.nui-badge-counter</code> class to the element with
    <code>position: relative</code> CSS rule.
</p>
<p>
    To display desired content, pass a string to the
    <code>data-before</code> attribute on the element where Badge class applied.
</p>

<nui-example-wrapper
    filenamePrefix="badge-counter-basic"
    exampleTitle="Counter Basic Usage"
>
    <nui-badge-counter-basic></nui-badge-counter-basic>
</nui-example-wrapper>

<p>
    To show badge without content use <code>.nui-badge-empty</code> class to the
    element with <code>position: relative</code> CSS rule.
</p>

<nui-example-wrapper
    filenamePrefix="badge-empty-basic"
    exampleTitle="Empty Basic Usage"
>
    <nui-badge-empty-basic></nui-badge-empty-basic>
</nui-example-wrapper>

<h2>Statuses usage</h2>

<p>Badge provides classes with all system colors that NovaUI uses.</p>

<nui-example-wrapper
    filenamePrefix="badge-system-statuses"
    exampleTitle="Statuses Usage"
>
    <nui-badge-system-statuses></nui-badge-system-statuses>
</nui-example-wrapper>

<h2>Color text</h2>

<p>
    Badge provides class for change color text to black, use
    <code>.nui-badge-text-black</code> for proper contrast between text and
    background.
</p>

<nui-example-wrapper
    filenamePrefix="badge-color-black"
    exampleTitle="Color Text"
>
    <nui-badge-color-black></nui-badge-color-black>
</nui-example-wrapper>

<h2>Badge customization</h2>

<p>
    Badge is opened for customization, for this, declare CSS class with
    <code>:after</code> psuedo-element and apply it to the element.
</p>

<nui-example-wrapper
    filenamePrefix="badge-customization"
    exampleTitle="Badge Customization"
>
    <nui-badge-customization></nui-badge-customization>
</nui-example-wrapper>

<h2>Applying badge to the NovaUI elements</h2>

<p>
    For some NovaUI elements undesirable applying badge classes directly,
    because badge won't be shown. In this case, wrap NovaUI element for example
    in <code>div</code>, and apply CSS Badge related classes to this wrapper.
    See <code>nui-textbox</code> example.
</p>

<nui-example-wrapper
    filenamePrefix="badge-novaui"
    exampleTitle="Using with NovaUI"
>
    <nui-badge-novaui></nui-badge-novaui>
</nui-example-wrapper>
`;export{t as default};
