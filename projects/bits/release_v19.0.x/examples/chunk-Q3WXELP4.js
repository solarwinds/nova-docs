import"./chunk-VBFW7A5V.js";var t=`<p>
    <code>nui-repeat</code> is responsible for repeating the items provided in
    <code>itemSource</code>.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiRepeatModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    This example demonstrates how easy it is to create a simple list by
    repeating the items of provided datasource.<br />
    Simply pass an array of items to <code>itemsSource</code>, and also don't
    forget to set the <code>repeatItemTemplateRef</code> with a template to
    render for each item.
</p>
<nui-example-wrapper filenamePrefix="repeat-simple" exampleTitle="Basic Usage">
    <nui-repeat-simple-example></nui-repeat-simple-example>
</nui-example-wrapper>

<h2>Dragging</h2>
<p>
    To enable the dragging of items in the <code>nui-repeat</code> list, just
    set the <code>draggable</code> input property to <code>true</code>.
</p>
<nui-example-wrapper
    filenamePrefix="repeat-drag-simple"
    exampleTitle="Enabling Drag & Drop"
>
    <nui-repeat-drag-simple-example></nui-repeat-drag-simple-example>
</nui-example-wrapper>

<h2>Reordering</h2>
<p>
    To allow list items to be reordered, set the <code>reorderable</code> input
    property to <code>true</code>. Bind to the
    <code>itemsReordered</code> output to receive sorting data when an item is
    dragged to a new spot in the list. The payload for the event is an
    <code
        ><a href="../interfaces/IItemsReorderedEvent.html" target="_blank"
            >IItemsReorderedEvent</a
        ></code
    >
    object.
</p>
<nui-message type="info" [allowDismiss]="false">
    Setting the <code>draggable</code> input to true with the
    <code>reorderable</code> input set to false will disable reordering and only
    allow dragging items to <strong>other</strong> containers.
</nui-message>
<nui-example-wrapper
    filenamePrefix="repeat-reorder-simple"
    exampleTitle="Reordering"
>
    <nui-repeat-reorder-simple-example></nui-repeat-reorder-simple-example>
</nui-example-wrapper>

<h2>Custom Drag Handle</h2>
<p>
    In order to customize the handle by which an element can be dragged, you can
    specify the <code>dragHandleTemplateRef</code>.
</p>
<nui-message type="info" [allowDismiss]="false">
    Providing the <code>dragHandleTemplateRef</code> template makes declaring
    the <code>draggable</code> input property optional as it will automatically
    be set to <code>true</code>.
</nui-message>
<nui-example-wrapper
    filenamePrefix="repeat-drag-handle"
    exampleTitle="Custom Drag Handle"
>
    <nui-repeat-drag-handle-example></nui-repeat-drag-handle-example>
</nui-example-wrapper>

<h2>Custom Drag Preview</h2>
<p>
    Once the user starts dragging an item, the preview DOM element is created as
    the last child of the body. To have a custom CSS class for that element, you
    can specify the <code>dragPreviewClass</code> input property. The default
    value for this input is <code>"nui-dnd-preview"</code>.
</p>
<p>
    In order to customize the drag preview template, you can specify the
    <code>dragPreviewTemplateRef</code> input.
</p>
<nui-message type="info" [allowDismiss]="false">
    Providing the <code>dragPreviewTemplateRef</code> template makes declaring
    the <code>draggable</code> input property optional as it will automatically
    be set to <code>true</code>.
</nui-message>
<nui-example-wrapper
    filenamePrefix="repeat-drag-preview"
    exampleTitle="Custom Drag Preview"
>
    <nui-repeat-drag-preview-example></nui-repeat-drag-preview-example>
</nui-example-wrapper>

<h2>Repeat Item Customization</h2>
<p>
    In order to customize the drag and drop behavior of any item in the repeat
    component you can provide a configuration object containing callbacks for
    the provided functionality via the <code>itemConfig</code> input.
</p>
<div>
    Customization is available via the following properties of
    <code>IRepeatItemConfig</code>:
    <ul>
        <li>
            <code>{{ getItemConfigKey("isDraggable") }}</code> - Provide a
            callback to decide if the item should be draggable
        </li>
        <li>
            <code>{{ getItemConfigKey("isDisabled") }}</code> - Provide a
            callback to decide if the item should be disabled
        </li>
        <li>
            <code>{{ getItemConfigKey("trackBy") }}</code> - Provide a function
            that defines how to track changes for items in the iterable.
        </li>
    </ul>
</div>
<nui-message type="warning" [allowDismiss]="false">
    To be able to provide customized draggable behaviour per item, the main
    <code>draggable</code> input must be true.
</nui-message>
<nui-example-wrapper
    filenamePrefix="repeat-reorder-item-config-example"
    exampleTitle="Drag & Drop - Per Item Customization"
>
    <nui-repeat-reorder-config-example></nui-repeat-reorder-config-example>
</nui-example-wrapper>

<h2>Multiple Selection Mode</h2>
<p>
    The <code>selectionMode</code>: <code>multi</code> repeats the items with a
    checkbox component, and allows the user to select multiple items by clicking
    the provided checkboxes or by clicking on the row itself. Unless
    <code>preventRowClick</code> is set to <code>true</code>, then only
    checkboxes will select the items.
</p>
<nui-example-wrapper
    filenamePrefix="repeat-multi-selection"
    exampleTitle="Multi selection repeat"
>
    <nui-repeat-multi-selection-example></nui-repeat-multi-selection-example>
</nui-example-wrapper>

<h2>Multiple Selection Mode with Disabled Items</h2>
<p>
    You can easily set the items being repeated to a disabled state. Make sure
    the <code>itemsSource</code> you provide contains property
    <code>disabled</code>: <code>true</code> for each disabled item.
</p>
<nui-example-wrapper
    filenamePrefix="repeat-disabled-multi-selection"
    exampleTitle="Disabled items in the repeat"
>
    <nui-repeat-disabled-multi-selection-example></nui-repeat-disabled-multi-selection-example>
</nui-example-wrapper>

<h2>Single Selection Mode with Item Highlight</h2>
<p>
    If you need to highlight clicked item without checkboxes and radio-button,
    you can just use
    <code>selectionMode</code>: <code>single</code>
</p>
<nui-example-wrapper
    filenamePrefix="repeat-single-selection-mode"
    exampleTitle="Highlight selected item"
>
    <nui-repeat-single-selection-mode-example></nui-repeat-single-selection-mode-example>
</nui-example-wrapper>

<h2>Single Selection Mode with Radio Buttons</h2>
<p>
    Use the <code>selectionMode</code>: <code>radio</code> mode to add radio
    buttons for each item and allow to select one of them.
</p>
<nui-example-wrapper
    filenamePrefix="repeat-radio-selection-mode"
    exampleTitle="repeat with radio buttons"
>
    <nui-repeat-radio-selection-mode-example></nui-repeat-radio-selection-mode-example>
</nui-example-wrapper>

<nui-message type="warning" [allowDismiss]="false">
    <strong>Pay Attention!</strong> The examples below may allow actions not
    common for the front-end world. Please agree the use of the following
    examples with your UI\\UX team.
</nui-message>

<h2>Non-Required Selection Mode with Radio Buttons</h2>
<p>
    This example shows how to make a list with radio buttons that can be either
    checked on or checked off.
</p>
<nui-example-wrapper
    filenamePrefix="repeat-radio-with-non-required-selection-mode"
    exampleTitle="Radio with Non Required Selection Mode"
>
    <nui-repeat-radio-with-non-required-selection-mode-example></nui-repeat-radio-with-non-required-selection-mode-example>
</nui-example-wrapper>

<h2>Required Single Selection Mode</h2>
<p>
    This example shows the single selection mode list where at least one item is
    always selected.
</p>
<nui-example-wrapper
    filenamePrefix="repeat-single-with-required-selection-mode"
    exampleTitle="Required Single Selection Mode"
>
    <nui-repeat-single-with-required-selection-mode-example></nui-repeat-single-with-required-selection-mode-example>
</nui-example-wrapper>

<nui-message [allowDismiss]="false" type="info">
    Pagination and Virtual Scroll aren't natively part of the
    <code>nui-repeat</code> component but the
    <a href="../additional-documentation/schematics/list.html" target="_parent"
        >List Schematic documentation</a
    >
    provides examples on how to use them.
</nui-message>
`;export{t as default};
