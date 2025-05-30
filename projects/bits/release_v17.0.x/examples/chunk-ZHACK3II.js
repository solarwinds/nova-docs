import"./chunk-XR34LRGE.js";var n=`<nui-message type="warning" [allowDismiss]="false">
    <strong>Pay Attention!</strong> For proper usage of this component, you may
    have to import <code>BrowserAnimationsModule</code>.
</nui-message>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiBusyModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To add a busy overlay to some page content, add an
    <code>nui-busy</code> attribute to the direct parent of the content to be
    overlaid. By default an
    <code
        ><a href="../components/SpinnerComponent.html" target="_blank"
            >&lt;nui-spinner&gt;</a
        ></code
    >
    component will be placed at the center of the busy overlay.
    <nui-message [allowDismiss]="false" type="info"
        >Busy overlay fills the whole area of an element with
        <code>nui-busy</code> attribute</nui-message
    >
</p>
<nui-example-wrapper filenamePrefix="busy-basic" exampleTitle="Basic Usage">
    <nui-busy-basic-example></nui-busy-basic-example>
</nui-example-wrapper>

<h2>Custom Spinner</h2>
<p>
    To replace the default
    <code
        ><a href="../components/SpinnerComponent.html" target="_blank"
            >&lt;nui-spinner&gt;</a
        ></code
    >
    component, instantiate your own <code>&lt;nui-spinner&gt;</code> and place
    it as a direct child of the element that has the
    <code>nui-busy</code> attribute. You can set any
    <code>&lt;nui-spinner&gt;</code> inputs to customize it.
</p>
<nui-example-wrapper
    filenamePrefix="busy-spinner"
    exampleTitle="Custom Spinner"
>
    <nui-busy-spinner-example></nui-busy-spinner-example>
</nui-example-wrapper>

<h2>Custom Progress</h2>
<p>
    To replace the default spinner with an
    <code
        ><a href="../components/ProgressComponent.html" target="_blank"
            >&lt;nui-progress&gt;</a
        ></code
    >
    component, instantiate an <code>&lt;nui-progress&gt;</code> and place it as
    a direct child of the element that has the <code>nui-busy</code> attribute.
    You can set any <code>&lt;nui-progress&gt;</code> inputs to customize it.
</p>
<nui-example-wrapper
    filenamePrefix="busy-progress"
    exampleTitle="Custom Progress"
>
    <nui-busy-progress-example></nui-busy-progress-example>
</nui-example-wrapper>
`;export{n as default};
