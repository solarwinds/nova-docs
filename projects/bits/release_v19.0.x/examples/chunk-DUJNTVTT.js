import"./chunk-VBFW7A5V.js";var d=`<p>
    The Angular CDK drag and drop module provides a way to easily and
    declaratively create drag and drop interfaces.
</p>
<p>
    To get started, import <code>DragDropModule</code> into the
    <code>NgModule</code> where you want to use drag-and-drop features:
</p>
<nui-example-code language="typescript" [code]="initialSetupCode" />
<p>
    For more details on the implementation of the &#64;angular/cdk/drag-drop, check
    the documentation
    <a href="https://material.angular.io/cdk/drag-drop/overview" target="_blank"
        >here</a
    >
</p>
<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiDndModule</code>
    </li>
    <li>Angular CDK's <code>DragDropModule</code></li>
</ul>

<h2>Basic Usage</h2>
<p>
    This example shows how easy it is to create a draggable element by adding
    the <code>cdkDrag</code> directive on the DOM element we want to become
    draggable. Since it can be dragged without any handle, hovering the element
    will alter its state to both <code>nui-dnd-raised-state</code> and
    <code>nui-dnd-hover-state</code>.
</p>
<nui-message [allowDismiss]="false" type="info">
    <p>
        In case you want to customize the styles for your draggable elements, it
        may be helpful to know that all <code>cdkDrag</code> DOM elements have
        the <code>.cdk-drag</code> CSS class applied to them.
    </p>
</nui-message>

<nui-example-wrapper filenamePrefix="dnd-basic" exampleTitle="Drag & Drop">
    <dnd-basic></dnd-basic>
</nui-example-wrapper>

<h2>Drag Axis Constraints</h2>
<p>
    By default, <code>cdkDrag</code> allows free movement in all directions. To
    restrict dragging to a specific axis, you can set the
    <code>cdkDragLockAxis</code> input on <code>cdkDrag</code> or the
    <code>cdkDropListLockAxis</code> input on <code>cdkDropList</code>
    to either "x" or "y".
</p>
<nui-example-wrapper
    filenamePrefix="dnd-axis-constraints"
    exampleTitle="Drag Axis Constraints"
>
    <dnd-axis-constraints></dnd-axis-constraints>
</nui-example-wrapper>

<h2>Disabled draggable items</h2>
<p>
    A collection of <code>cdkDrag</code> elements are usually placed inside a
    <code>cdkDropList</code>.
</p>
<p>
    To prevent an item from being dragged set the
    <code>cdkDragDisabled</code> input on the <code>cdkDrag</code> element to
    true:
</p>
<nui-message [allowDismiss]="false" type="info">
    <p>
        Disabled draggable DOM elements have the
        <code>.cdk-drag-disabled</code> CSS class appended to them.
    </p>
    <p>
        See the styles customization applied to the disabled draggable items in
        the LESS source code tab in the source expander below for inspiration.
    </p>
</nui-message>
<nui-example-wrapper
    filenamePrefix="dnd-drag-disabled"
    exampleTitle="Disabled draggable items"
>
    <dnd-drag-disabled></dnd-drag-disabled>
</nui-example-wrapper>

<h2>Custom Drag Preview</h2>
<p>
    It is possible to display custom preview content instead of cloning the
    original element by specifying the <code>cdkDragPreview</code> directive.
</p>
<p>
    The directive must be specified for each <code>cdkDrag</code> element that
    we want to have preview content.
</p>
<nui-message [allowDismiss]="false" type="warning">
    <p>
        <strong>Important:</strong> In order for the
        <code>cdkDragPreview</code> directive to work, it must be wrapped inside
        a DOM element with the <code>cdkDropList</code> directive specified.
    </p>
    Take a look at the source of the following example to see how.
</nui-message>
<nui-example-wrapper
    filenamePrefix="dnd-drag-preview"
    exampleTitle="Custom Drag Preview"
>
    <dnd-drag-preview></dnd-drag-preview>
</nui-example-wrapper>

<h2>Custom Drag Handle</h2>
<p>
    The handle by which an element can be dragged can be customized by
    specifying the directive <code>cdkDragHandle</code> on the element we want
    to become the handle.
</p>
<nui-example-wrapper
    filenamePrefix="dnd-custom-handle"
    exampleTitle="Custom Drag Handle"
>
    <dnd-custom-handle></dnd-custom-handle>
</nui-example-wrapper>
<p>
    In the example above the handle is still displayed while dragging an
    element; to hide the handle we just need to apply the properer styling on
    the cloned preview element as shown below:
    <nui-example-code language="css" [code]="hideHandleWhileDragging" />
</p>

<h2>Custom Placeholder</h2>
<p>
    While a <code>cdkDrag</code> element is being dragged, the Angular CDK will
    create a placeholder element that will show the user where the dragged
    element will be placed when it's dropped.
</p>
<p>
    By default the placeholder is a clone of the element that is being dragged,
    however you can replace it with a custom one using the
    <code>*cdkDragPlaceholder</code> directive.
</p>
<nui-example-wrapper
    filenamePrefix="dnd-drag-placeholder"
    exampleTitle="Custom Placeholder"
>
    <dnd-drag-placeholder></dnd-drag-placeholder>
</nui-example-wrapper>

<h2>Dropzones Visualization</h2>
<p>
    A drag container is a collection of <code>cdkDrag</code> elements within a
    <code>cdkDropList</code>. Decorating a drag container with the
    <code
        ><a href="../directives/DndDropTargetDirective.html" target="_parent"
            >nuiDndDropTarget</a
        ></code
    >
    directive defines a dropzone.
</p>
<nui-message [allowDismiss]="false" type="warning">
    In order use multiple drag containers, both sources and destinations must be
    wrapped within a <code>cdkDropListGroup</code> directive.
</nui-message>
<p>
    Once the user starts dragging an item from the source, the destination is
    highlighted as an available destination dropzone; the
    <code>nui-dnd-dropzone--active</code> CSS class is added to the dropzone
    once dragging starts. The destination uses the
    <code>nuiDndDropTarget</code> directive helper in order to inform the user
    visually whether a dropzone will accept or reject a dragged item. In the
    following example, all items are accepted except for <em>IBM</em>;
</p>
<nui-message [allowDismiss]="false" type="info">
    The following CSS classes are added to the dropzone once the conditions are
    met as described below:
    <ul>
        <li>- <code>nui-dnd-dropzone--active</code> - once dragging starts</li>
        <li>
            - <code>nui-dnd-dropzone--drop-allowed</code> - once the user is
            over the dropzone and the dragged item is accepted
        </li>
        <li>
            - <code>nui-dnd-dropzone--drop-not-allowed</code> - once the user is
            over the dropzone and the dragged item is NOT accepted
        </li>
    </ul>
</nui-message>
<p>
    To define acceptance conditions for a dropzone, the user can provide a
    callback method to the <code>canBeDropped</code>
    input.
</p>
<nui-example-wrapper filenamePrefix="dnd-dropzone" exampleTitle="Dropzones">
    <dnd-dropzone></dnd-dropzone>
</nui-example-wrapper>
`;export{d as default};
