import"./chunk-VBFW7A5V.js";var i=`<h1>Widget Creation</h1>

<p>
    In this tutorial we'll cover how to add a widget creation wizard which
    allows end-users to create new widget instances based on existing widget
    configurations. The wizard's first step, or page, will use a custom
    component that lets users choose a widget to create. In the example below
    we'll implement a sample widget selection component that provides a
    proportional widget and a kpi widget as options.
</p>

<h2>Fundamental Concepts</h2>
<ul>
    <li>
        <a href="../injectables/ProviderRegistryService.html" target="_blank"
            ><code>ProviderRegistryService</code></a
        >
    </li>
    <li>
        <a href="../injectables/WidgetClonerService.html" target="_blank"
            ><code>WidgetClonerService</code></a
        >
    </li>
    <li>Widget configurations</li>
    <li>Custom component for widget selection</li>
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
        Create a widget template selector component which will act as the first
        step in the wizard. The selector component should implement the
        <a href="../interfaces/IWidgetTemplateSelector.html" target="_blank"
            ><code>IWidgetTemplateSelector</code></a
        >
        interface which requires a widgetSelected output that should emit a
        widget to be cloned. For any widgets that require further configuration
        before they should be placed on the dashboard, set the widget's
        <code
            ><a
                href="../interfaces/IWidgetMetadata.html#needsConfiguration"
                target="_blank"
                >metadata.needsConfiguration</a
            ></code
        >
        property to <code>true</code>. This will hide the "Create Widget" button
        whenever an unconfigured widget is selected.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> In the example below, the widget selector is
            implemented in the same file as the dashboard component, but it's
            recommended to define it in a separate file. Additionally, after
            implementing it, remember to add it to your module declarations.
        </nui-message>
    </li>
    <li>
        Ensure that <code>NuiRepeatModule</code> and
        <code>NuiImageModule</code> are included in the imports of the widget
        template selector component's parent module.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> Importing these modules is required in this
            example because, in this case, the widget template selector uses the
            Nova repeat component and a couple of images from the Nova image
            repository.
        </nui-message>
    </li>
    <li>
        Invoke the <code>open</code> method on the
        <a href="../injectables/WidgetClonerService.html" target="_blank"
            ><code>WidgetClonerService</code></a
        >
        with an argument of type
        <a href="../interfaces/IWidgetSelector.html" target="_blank"
            ><code>IWidgetSelector</code></a
        >. Only two things are required in that object: a reference to the
        dashboardComponent instance and the typename of the widget selector
        created in the previous step. Optionally, the argument object may also
        contain a <code>trySubmit</code> function with logic for persisting the
        new widget on a backend.
    </li>
    <li>
        Subscribe to the <code>Observable</code> returned by the
        <a href="../injectables/WidgetClonerService.html#open" target="_blank"
            ><code>widgetClonerService.open</code></a
        >
        method in order to activate the handling of form submission and the
        subsequent updating of the dashboard with a newly created widget.
    </li>
</ol>

<nui-message type="info" [allowDismiss]="false">
    For more detailed information about widget creation, take a look at the
    inline comments under the source expander of the following example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="widget-creation.component"
    exampleTitle="Widget Creation"
>
    <widget-creation></widget-creation>
</nui-example-wrapper>
`;export{i as default};
