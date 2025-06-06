import"./chunk-VBFW7A5V.js";var p=`<p>
    <code>&lt;nui-popover&gt;</code> is a popup control that can contain any
    HTML markup and be applied to block or in-line elements. It can basically be
    thought of as a more data-rich tooltip.
</p>
<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiPopoverModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>

<p>
    A simple popover can be added to the page by adding an
    <code>&lt;nui-popover&gt;</code> element and passing a
    <code>TemplateRef&lt;string&gt;</code> value to the
    <code>template</code> input. The provided template serves as the popover's
    body content. The simplest way to do this is to create an
    <code>ng-template</code> element and pass its template reference variable
    name to the <code>template</code> input.
</p>

<nui-example-wrapper
    filenamePrefix="popover-basic-usage"
    exampleTitle="Basic Usage"
>
    <nui-popover-basic-usage-example></nui-popover-basic-usage-example>
</nui-example-wrapper>

<h2>Debounced Displaying</h2>
<p>
    To debounce the displaying of the tooltip provide the time in milliseconds
    via the <code>delay</code> input.
</p>
<nui-example-wrapper
    filenamePrefix="popover-debounce"
    exampleTitle="Popover Debounce"
>
    <nui-popover-debounce-example></nui-popover-debounce-example>
</nui-example-wrapper>

<h2>Adding a Title</h2>
<p>
    To add a title to the popover, pass a string via the
    <code>popoverTitle</code> input.
</p>
<p>
    If you need to hide overflow of long strings (for example long url) just
    wrap your popover content with <code>div</code> which has
    <code>overflow: hidden</code>.
</p>

<nui-example-wrapper
    filenamePrefix="popover-with-title"
    exampleTitle="Popover with Title"
>
    <nui-popover-with-title-example></nui-popover-with-title-example>
</nui-example-wrapper>

<p>
    <strong>
        Note: Popover must be used as an attribute when the
        <code>trigger</code> input is set to 'focus'. See the focus example
        under <em>Trigger Events</em> below.
    </strong>
</p>

<h2>Trigger Events</h2>
<p>
    Popover supports four trigger events: 'click' | 'mouseenter' | 'mouseleave'
    | 'focus'. To specify a trigger, set the
    <code>trigger</code> input to one or more of the supported events. If no
    event is not specified, 'mouseenter' will be used as the default.
</p>
<p>
    A popover can be configured to react to more than one event by specifying
    multiple trigger events as in the example below.
</p>
<p><code>trigger='click mouseenter'</code></p>

<nui-example-wrapper
    filenamePrefix="popover-click-trigger"
    exampleTitle="Click"
>
    <nui-popover-click-trigger-example></nui-popover-click-trigger-example>
</nui-example-wrapper>
<nui-example-wrapper
    filenamePrefix="popover-mouseenter-trigger"
    exampleTitle="Mouse Enter"
>
    <nui-popover-mouseenter-trigger-example></nui-popover-mouseenter-trigger-example>
</nui-example-wrapper>
<nui-example-wrapper
    filenamePrefix="popover-focus-trigger"
    exampleTitle="Focus"
>
    <nui-popover-focus-trigger-example></nui-popover-focus-trigger-example>
</nui-example-wrapper>

<p>
    <strong>
        Note: The 'focus' trigger is only available when Popover is used as an
        attribute. See <em>Usage as an Attribute</em> above.
    </strong>
</p>

<h2>Prevent Closing on Click</h2>
<p>
    To allow the user to interact with components within the popover such as a
    checkbox, link, etc. and prevent the popover from closing when this content
    is cli\u0441ked, set the <code>preventClosing</code> input to true. The default
    value is <code>false</code>. <br />
    In this case popover can be closed via <code>nuiClosePopover</code> subject
    that you provide to <code>nuiPopoverDirective</code> or
    <code>closePopover</code> of <code>PopoverComponent</code>. So when you need
    to close popover you just call <code>next()</code> method of this subject.
    No arguments are required.
</p>

<nui-example-wrapper
    filenamePrefix="popover-prevent-close-on-click"
    exampleTitle="Prevent Closing on Click"
>
    <nui-popover-prevent-close-on-click-example></nui-popover-prevent-close-on-click-example>
</nui-example-wrapper>

<h2>Appending to a Container</h2>
<p>
    Passing an HTMLElement via the <code>container</code> input tells the
    popover which element to append itself to. By default the popover is
    appended to the document body. The simplest way to do this is to append an
    Angular template reference variable name to the container element and pass
    the name to the <code>container</code> input.
</p>

<nui-example-wrapper
    filenamePrefix="popover-with-container"
    exampleTitle="Appending to a Container"
>
    <nui-popover-with-container-example></nui-popover-with-container-example>
</nui-example-wrapper>

<h2>Removing Padding</h2>
<p>
    Setting the <code>hasPadding</code> input to false removes all padding from
    the popover body. <code>hasPadding</code>
    is true by default.
</p>

<nui-example-wrapper
    filenamePrefix="popover-no-padding"
    exampleTitle="Removing Padding"
>
    <nui-popover-no-padding-example></nui-popover-no-padding-example>
</nui-example-wrapper>

<h2>Removing Width and Height Limitations</h2>
<p>
    Setting the <code>unlimited</code> input to true removes all maximum and
    minimum limitations for width and height of the popover body.
    <code>unlimited</code> is false by default.
</p>

<nui-example-wrapper
    filenamePrefix="popover-unlimited"
    exampleTitle="Removing Width and Height Limitations"
>
    <nui-popover-unlimited-example></nui-popover-unlimited-example>
</nui-example-wrapper>

<h2>Outputs</h2>
<p>
    The <code>(shown)</code> output emits an event upon display of the popover.
</p>
<p>
    The <code>(hidden)</code> output emits an event upon disappearance of the
    popover
</p>

<nui-example-wrapper
    filenamePrefix="popover-outputs"
    exampleTitle="Show and Hide"
>
    <nui-popover-outputs-example></nui-popover-outputs-example>
</nui-example-wrapper>

<h2>Placement</h2>
<p>
    To specify placement of popover set the <code>placement</code> input to
    'left', 'right', 'top' or 'bottom'. The default is 'right'.
</p>

<nui-example-wrapper
    filenamePrefix="popover-placement"
    exampleTitle="Right or Left"
>
    <nui-popover-placement-example></nui-popover-placement-example>
</nui-example-wrapper>

<p>
    Note: Popover adapts to available space around it. So, if you set
    <code>placement="left"</code> but there is not enough free space on the
    left, the popover will be displayed to the right instead.
</p>

<h2>Icon/Status</h2>
<p>
    Pass an icon name to the <code>icon</code> input to display an icon in the
    popover.
</p>
<p>
    If the popover has a title, the icon will display to the left of the title.
    If, however, the popover does not have a title, the icon will be displayed
    to the left of the popover body.
</p>
<p>
    If you want to use popover with status indicator overlay and underline, you
    can achieve it by writing your own markup like in the example below.
</p>

<nui-example-wrapper filenamePrefix="popover-icon" exampleTitle="Icon">
    <nui-popover-icon-example></nui-popover-icon-example>
</nui-example-wrapper>
<nui-example-wrapper filenamePrefix="popover-status" exampleTitle="Status">
    <nui-popover-status-example></nui-popover-status-example>
</nui-example-wrapper>

<h2>Modal Mode</h2>
<p>
    To display a popover in a modal style (with a darkened backdrop between the
    page and the popover) set the <code>modal</code> input to true.
</p>

<nui-example-wrapper filenamePrefix="popover-modal" exampleTitle="Modal Mode">
    <nui-popover-modal-example></nui-popover-modal-example>
</nui-example-wrapper>

<h2>Disabled</h2>
<p>
    To prevent popover from showing set the <code>disabled</code> input to true
</p>

<nui-example-wrapper filenamePrefix="popover-disabled" exampleTitle="Disabled">
    <nui-popover-disabled-example></nui-popover-disabled-example>
</nui-example-wrapper>
<h2>Opening and Closing Popover Programmatically</h2>
<p>To open or close popover programmatically do next steps:</p>
<ol>
    <li>Set <code>trigger="openPopoverSubject"</code>.</li>
    <li>
        Pass <code>Subject</code> as input to <code>[closePopover]</code> and
        <code>[openPopover]</code> inputs.
    </li>
    <li>
        Do <code>this.openPopoverSubject.next()</code> or
        <code>this.closePopoverSubject.next()</code> on needed event to trigger
        popover.
    </li>
</ol>
<nui-example-wrapper
    filenamePrefix="popover-open-and-close-programmatically"
    exampleTitle="Opening and Closing Popover Programmatically"
>
    <nui-popover-open-and-close-programmatically-example></nui-popover-open-and-close-programmatically-example>
</nui-example-wrapper>
`;export{p as default};
