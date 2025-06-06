import"./chunk-VBFW7A5V.js";var r=`<p>
    <code>VirtualViewportManager</code> provides a mechanism for sequencing the
    rendered range stream emitted from the <code>CDK Viewport</code> into
    distinct page ranges.
</p>
<h2>Basic Usage</h2>
<p>To use <code>VirtualViewportManager</code> do the following:</p>
<ol>
    <li>
        Add <code>VirtualViewportManager</code> to the providers of your parent
        component.
    </li>
    <li>
        Register the filtering components on the dataSource via
        <code>this.dataSource.registerFilter()</code>.
    </li>
    <li>
        Set up the <code>VirtualViewportManager</code> listener in the
        <code>AfterViewInit</code> lifecycle hook. Invoke
        viewport.observeNextPage$() with
        <a href="../interfaces/IVirtualPageConfig.html" target="_blank"
            >IVirtualPageConfig</a
        >
        to start observing/responding to next page events.
    </li>
    <li>
        Reset the viewport on search events by invoking viewport.reset() with
        <a
            href="../interfaces/IVirtualViewportResetOptions.html"
            target="_blank"
            >IVirtualViewportResetOptions</a
        >.
    </li>
</ol>

<h2>Repeat with VirtualViewportManager and Search Example</h2>
<p>
    <code>nui-repeat</code> allows you to manage the virtual viewport by
    exposing its <code>{{ getRepeatPropKey("viewportRef") }}</code> property. In
    comparison to the non-filtered virtual/infinite scroll usage, if the user
    filters the results in some way, say with a search box, we need to reset
    progress on our <code>VirtualViewportManager</code>. In the following
    example, when the data is refreshed with the filtered results, the viewport
    manager's progress is reset in the <code>doSearch</code> method. <br />
    <nui-message [allowDismiss]="false" type="warning">
        <strong>Important: </strong> For virtual scroll to function correctly,
        the nui-repeat element must have a defined height. See the template file
        in the example source expander below for how to do this.
    </nui-message>
</p>
<nui-example-wrapper
    filenamePrefix="repeat-with-viewport-manager"
    exampleTitle="Repeat with ViewportManager and Search"
>
    <nui-repeat-with-viewport-manager-example></nui-repeat-with-viewport-manager-example>
</nui-example-wrapper>
`;export{r as default};
