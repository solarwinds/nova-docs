import"./chunk-VBFW7A5V.js";var a=`<p>
    <code>&lt;nui-message&gt;</code> allows easy customization of messages, e.g.
    setting message display style, description and dismissability by passing
    message type, content text, allowing, disallowing or preventing message
    dismiss.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiMessageModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    To implement a message you need to pass the type of a message into the
    <code>type</code> property and message text inside
    <code>&lt;nui-message&gt;</code> component.
</p>

<nui-example-wrapper filenamePrefix="message-basic" exampleTitle="Basic Usage">
    <nui-message-basic-example></nui-message-basic-example>
</nui-example-wrapper>

<h2>Messages Types</h2>

<p>
    Possible types of messages are: <code>critical</code> |
    <code>warning</code> | <code>ok</code> | <code>info</code>.
</p>

<h2>Critical</h2>

<p>
    Something is wrong, but it's not a system error. The user
    <b>cannot</b> continue without fixing something, i.e. they're essentially
    blocked.
</p>

<nui-example-wrapper
    filenamePrefix="message-critical"
    exampleTitle="Critical Message"
>
    <nui-message-critical-example></nui-message-critical-example>
</nui-example-wrapper>

<h2>Warning</h2>

<p>
    There is an issue, but user can continue in the flow, however it is not
    recommended.
</p>

<nui-example-wrapper
    filenamePrefix="message-warning"
    exampleTitle="Warning Message"
>
    <nui-message-warning-example></nui-message-warning-example>
</nui-example-wrapper>

<h2>Success</h2>

<p>
    Use this type of message to inform user about success of performed action.
</p>

<nui-example-wrapper filenamePrefix="message-ok" exampleTitle="Ok Message">
    <nui-message-ok-example></nui-message-ok-example>
</nui-example-wrapper>

<h2>Informative</h2>

<p>
    Use this type of message for recommendations, tips, tricks, explanations or
    any non-state dependant information.
</p>

<nui-example-wrapper filenamePrefix="message-info" exampleTitle="Info Message">
    <nui-message-info-example></nui-message-info-example>
</nui-example-wrapper>

<h2>Not Allowed Dismiss</h2>

<p>
    Value of <code>allowDismiss</code> control message's persistency and
    dismissability. False statement makes 'cross' icon on message dissappear. By
    default value of <code>allowDismiss</code> is true.
    <br />
    <code>[allowDismiss]</code> : false
</p>

<nui-example-wrapper
    filenamePrefix="message-not-dismissable"
    exampleTitle="Not Dismissable Message"
>
    <nui-message-not-dismissable-example></nui-message-not-dismissable-example>
</nui-example-wrapper>

<h2>Manual Destroy Control</h2>

<p>
    To prevent the message from being completely removed from the DOM on user
    dismissal, pass an rxjs Subject via the
    <code>manualDestroyControl</code> input. The Subject may optionally be used
    to show and hide the message manually by calling
    <code>Subject.next</code> with a payload of true to show it or false to hide
    it.
</p>
<nui-example-wrapper
    filenamePrefix="message-manual-control"
    exampleTitle="Manual Destroy Control"
>
    <nui-message-manual-control-example></nui-message-manual-control-example>
</nui-example-wrapper>
`;export{a as default};
