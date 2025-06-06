import"./chunk-VBFW7A5V.js";var o=`<h1>Time Frame Bar</h1>
<p>
    The
    <code
        ><a href="../components/TimeFrameBarComponent.html" target="_blank"
            >nui-time-frame-bar</a
        ></code
    >
    is a
    <a
        href="../additional-documentation/convenience-components.html"
        target="_parent"
    >
        <strong>convenience component</strong>
    </a>
    designed to simplify adding time frame selection to your view. It provides
    the following:
</p>
<ol>
    <li>Buttons to sequentially select an earlier or later time frame</li>
    <li>A projection slot for the time frame display value</li>
    <li>A projection slot for a popover time frame picker</li>
</ol>
<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiTimeFrameBarModule</code>
    </li>
    <li>
        <code>NuiTimeFramePickerModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    The time frame bar defines a couple of projection slots that enable its
    basic functionality while maintaining some flexibility:
</p>
<ol>
    <li>
        The default projection slot serves as the popover trigger and typically
        contains the time frame's display value.
    </li>
    <li>
        The time frame selection slot takes an element tagged with the
        <code>timeFrameSelection</code>
        attribute and provides the user with the ability to select a specific
        time frame. Supported content for this slot is the
        <code
            ><a
                href="../components/TimeFramePickerComponent.html"
                target="_blank"
                >nui-time-frame-picker</a
            ></code
        >
        which can be optionally wrapped with a
        <code
            ><a href="../components/QuickPickerComponent.html" target="_blank"
                >nui-quick-picker</a
            ></code
        >
        element.
    </li>
</ol>
<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> Any values set on the <code>minDate</code>,
    <code>maxDate</code>, and <code>startModel</code> inputs of the projected
    <code>nui-time-frame-picker</code> will be ignored. So, be sure to use the
    minDate, maxDate, and timeFrame inputs respectively on the
    <code>nui-time-frame-bar</code> instead.
</nui-message>
<p>
    An additional projection slot (not shown in the example) is available for
    projecting secondary template content on the right side of the bar. To use
    this slot, tag the element to be projected with the
    <code>rightContent</code> attribute.
</p>
<p>
    Take a look at the source of the following example to see how easy it can be
    to use the
    <code>nui-time-frame-bar</code>.
</p>
<nui-example-wrapper
    filenamePrefix="time-frame-bar-basic"
    exampleTitle="Basic Usage"
>
    <nui-convenience-time-frame-bar-basic-example></nui-convenience-time-frame-bar-basic-example>
</nui-example-wrapper>

<h2>Adding Zoom Functionality</h2>
<p>
    Adding the ability to zoom may be desired if the
    <code>nui-time-frame-bar</code> is used in conjunction with a time-based
    chart. Take a look at the source of the following example to see how easy it
    is to add zooming to a <code>nui-time-frame-bar</code>.
</p>
<nui-example-wrapper
    filenamePrefix="time-frame-bar-zoom"
    exampleTitle="Adding Zoom Functionality"
>
    <nui-convenience-time-frame-bar-zoom-example></nui-convenience-time-frame-bar-zoom-example>
</nui-example-wrapper>
<p>
    As you can see in the source code of the example above, keeping track of the
    zoom step history lets the user zoom in and out incrementally using the same
    time frames in each direction. This can be done using an instance of the
    <code
        ><a href="../injectables/HistoryStorage.html" target="_blank"
            >HistoryStorage</a
        ></code
    >
    class.
</p>
<p>
    Also note in the example template that a separate handler,
    <code>onChange</code>, is assigned to the
    <code>timeFrameChange</code> output instead of using the "banana-in-a-box"
    notation on the <code>timeFrame</code> attribute. This is done to allow a
    restart of the zoom history whenever a time frame change originates from
    within the TimeFrameBarComponent.
</p>
`;export{o as default};
