import"./chunk-VBFW7A5V.js";var o=`<h1>Widget and Dashboard Editing</h1>

<p>
    In this tutorial we'll cover how to provide the ability to edit widgets
    using the framework-provided widget editor. For now we'll stop short of
    implementing any customizations to the editor, but in a
    <a
        href="../additional-documentation/tutorials/customization/configurator-section.html"
        target="_parent"
        >later step</a
    >, we'll go over how to customize parts of it to accommodate specific needs
    you may have.
</p>
<p>
    We'll also go over how to enable/disable edit mode for the dashboard itself.
    When a dashboard is in edit mode, widgets can be moved around, resized, or
    removed.
</p>

<h2>Fundamental Concepts</h2>
<ul>
    <li>
        <a href="../components/DashboardComponent.html" target="_blank"
            ><code>DashboardComponent</code></a
        >
    </li>
    <li>
        <a href="../classes/WidgetTypesService.html" target="_blank"
            ><code>WidgetTypesService</code></a
        >
    </li>
    <li>
        <a href="../directives/WidgetEditorDirective.html" target="_blank"
            ><code>nuiWidgetEditor</code></a
        >directive
    </li>
    <li>Widget configuration (including its associated data)</li>
    <li>Custom data source</li>
    <li>Dashboard edit mode</li>
</ul>

<h2>Basic Steps</h2>
<ol>
    <li>
        Follow the instructions
        <a
            href="../additional-documentation/getting-started.html"
            target="_parent"
            >here</a
        >
        to set up your environment for dashboard development.
    </li>
    <li>
        Follow the instructions from previous tutorials to get a basic dashboard
        up and running.
    </li>
    <li>
        Ensure that the <code>NuiSwitchModule</code> and
        <code>NuiButtonModule</code> are included in the imports of the parent
        module.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> Importing these modules is required because
            the example uses Nova's switch and button components.
        </nui-message>
    </li>
    <li>
        In the
        <a
            href="../additional-documentation/tutorials/adding-a-data-source.html"
            target="_parent"
        >
            Adding a Data Source
        </a>
        tutorial, we created a single data source. But, for this step, let's
        create a second data source so that the dropdown options for selecting a
        data source will be populated with more than one option in the editor.
        As in the previous tutorial it's recommended to have each data source
        class in a different file.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> Don't forget to add
            <code>&#64;Injectable()</code> to the top of the data source class. This
            lets Angular know that you plan on injecting dependencies into it.
        </nui-message>
    </li>
    <li>
        As before, register the data sources as a dynamically injectable
        providers using the
        <a href="../injectables/ProviderRegistryService.html" target="_blank"
            ><code>ProviderRegistryService</code></a
        >.
        <nui-message type="warning" [allowDismiss]="false">
            <strong>Note:</strong> When registering a class provider using the
            ProviderRegistryService, be sure to include in the
            <code>deps</code> array any dependencies that need to be injected
            into the provider. This is demonstrated in the example below.
        </nui-message>
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> In the example, <code>HttpClient</code> is
            injected into the data source class. This means you'll need to
            <a href="https://angular.io/guide/http#setup" target="_blank"
                >include the <code>HttpClientModule</code></a
            >
            in the imports of the parent NgModule in order to successfully
            resolve that dependency.
        </nui-message>
    </li>
    <li>
        Use the
        <a target="_blank" href="../classes/WidgetTypesService.html#setNode"
            ><code>widgetTypesService.setNode()</code></a
        >
        method to register the data sources for the editor to allow users to
        choose which data source will be used by which KPI tile. In the Adding a
        Data Source tutorial, we didn't need to do this because we weren't using
        the editor.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> In the following example, we do this step in
            the component's ngOnInit, but widget template modifications such as
            this could also be done in the parent module's constructor thereby
            allowing multiple dashboard instances to have access to the same
            widget template change.
        </nui-message>
    </li>
    <li>
        In your template, add the
        <a href="../directives/WidgetEditorDirective.html" target="_blank">
            <code>nuiWidgetEditor</code>
        </a>
        directive which will allow the widgets to open the widget editor.
    </li>
    <li>
        In your template, set the
        <a href="../components/DashboardComponent.html#editMode" target="_blank"
            ><code>editMode</code></a
        >
        input on the dashboard component. This input enables/disables the user's
        ability to remove, move, and resize widgets.
    </li>
    <li>
        You should now be able to click the ellipsis button at the top right of
        the widget to open the widget editor.
    </li>
    <li>
        Once the editor is open, expand the Data Source accordion for a KPI tile
        to change the data source used by the tile.
    </li>
    <li>
        Click Save Changes and the widget's KPI tile will be updated to use the
        newly selected data source.
    </li>
</ol>

<nui-message type="info" [allowDismiss]="false">
    For more detailed information about setting up the widget editor, take a
    look at the inline comments under the source expander of the following
    example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="widget-editor-setup.component"
    exampleTitle="Adding a widget editor"
>
    <widget-editor-setup></widget-editor-setup>
</nui-example-wrapper>
`;export{o as default};
