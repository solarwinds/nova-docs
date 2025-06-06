import"./chunk-VBFW7A5V.js";var o=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiToastModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<div>
    You can use <code>IToastService</code>, <code>ToastService</code> to show a
    (usually) temporary message (toast), associated with some event. In example
    below we're showing a toast message when the "Show Toast" button is clicked.
    Following construction is used to create a toast:
    <code
        >IToastService.info(toastDeclaration:
        <a href="../interfaces/IToastDeclaration.html">IToastDeclaration</a
        >)</code
    >. Any property in
    <a href="../interfaces/IToastDeclaration.html"
        ><code>IToastDeclaration</code></a
    >
    is optional.
</div>
<p>
    When using the toast component with a title, a space is automatically
    inserted in front of the message body to create spacial separation from the
    title. In addition to the provided space, it's suggested that the user add a
    sentence-ending punctuation mark to the title to further emphasize this
    separation.
</p>
<nui-example-wrapper filenamePrefix="toast-basic" exampleTitle="Basic usage">
    <nui-toast-basic-example></nui-toast-basic-example>
</nui-example-wrapper>

<h2>Basic Usage With Html</h2>
<p>
    Toast allows HTML usage inside the
    <code>{{ getToastDeclarationKey("message") }}</code> container by default.
    Note: The provided value will be sanitized and rendered.
</p>
<p>
    To configure a toast to display HTML as plain text, set the
    <code>{{ getToastConfigKey("enableHtml") }}</code> property in
    <code>{{ getToastDeclarationKey("options") }}</code> to <code>false</code>.
</p>
<p>
    When the <code>{{ getToastConfigKey("enableHtml") }}</code> flag is turned
    on, all the content will be sanitized, basic tags for changing fonts are
    often allowed, such as <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>,
    <code>&lt;u&gt;</code>, <code>&lt;em&gt;</code>, and
    <code>&lt;strong&gt;</code>. More advanced tags such as
    <code>&lt;script&gt;</code>, <code>&lt;object&gt;</code>,
    <code>&lt;embed&gt;</code>, and <code>&lt;link&gt;</code> are removed by the
    sanitization process. Additionally, potentially dangerous attributes such as
    <code>onclick</code> are removed in order to prevent malicious code from
    being injected.
</p>
<nui-example-wrapper
    filenamePrefix="toast-basic-html"
    exampleTitle="Basic HTML Usage"
>
    <nui-toast-basic-html-example></nui-toast-basic-html-example>
</nui-example-wrapper>

<h2>Types</h2>
<p>
    Toast types allows you to convey some contextual information about the
    message by applying different styles to toasts.
</p>
<nui-example-wrapper filenamePrefix="toast-type" exampleTitle="Types">
    <nui-toast-type-example></nui-toast-type-example>
</nui-example-wrapper>

<h2>Configuration</h2>
<p>
    Toast messages are highly configurable via
    <a href="../interfaces/IToastConfig.html">IToastConfig</a> interface. The
    following example employs some of the more common settings:
    <br />
    <code>
        extendedTimeOut: 2000, clickToDismiss: true, closeButton: true,
        positionClass: "toast-bottom-right", progressBar: true,
        progressAnimation: "increasing", timeOut: 5000
    </code>
</p>
<nui-example-wrapper filenamePrefix="toast-config" exampleTitle="Configuration">
    <nui-toast-config-example></nui-toast-config-example>
</nui-example-wrapper>

<h2>Positioning</h2>
<p>
    The position of a toast message is determined by the value of
    <code>IToastConfig.positionClass</code>. By default toast is positioned
    top-right. To implement different positioning you must pass one of available
    options from
    <a href="../miscellaneous/enumerations.html#ToastPositionClass"
        ><code>ToastPositionClass</code></a
    >
    to
    <a href="../interfaces/IToastConfig.html"><code>IToastConfig</code></a>
    positionClass property.<br /><br />

    It is also possible to set a custom class to configure the position of the
    <code>nui-toast</code>. Simply populate the
    <code>IToastConfig.positionClass</code> with the custom css class name.

    <nui-message type="warning" [allowDismiss]="false">
        Make sure you defined a custom class in a global stylesheet
    </nui-message>
</p>
<nui-example-wrapper filenamePrefix="toast-position" exampleTitle="Positioning">
    <nui-toast-position-example></nui-toast-position-example>
</nui-example-wrapper>

<h2>Sticky Error</h2>
<p>
    You can also optionally force error toasts to remain visible indefinitely
    using <code>IToastConfig.stickyError</code>. Note, that this option is only
    available with <code>IToastService.error</code>.
</p>
<nui-example-wrapper
    filenamePrefix="toast-sticky-error"
    exampleTitle="Sticky error"
>
    <nui-toast-sticky-error-example></nui-toast-sticky-error-example>
</nui-example-wrapper>

<h2>Events</h2>
<p>
    With <a href="../interfaces/IActiveToast.html">IActiveToast</a>, it's
    possible to capture (and act upon) following events per toast instance:
</p>
<ul>
    <li><code>onShown</code></li>
    <li><code>onHidden</code></li>
    <li><code>onClick</code></li>
</ul>
<nui-example-wrapper filenamePrefix="toast-events" exampleTitle="Events">
    <nui-toast-events-example></nui-toast-events-example>
</nui-example-wrapper>
`;export{o as default};
