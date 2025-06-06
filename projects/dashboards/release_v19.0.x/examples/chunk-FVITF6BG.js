import"./chunk-VBFW7A5V.js";var a=`<h1>Adding a Data Source</h1>

<p>
    In basic terms, a data source is an entity from which a widget on the
    dashboard gets its data. In the context of the dashboards framework, a data
    source is a dependency that gets injected just like any other provider for
    use by a widget via Angular's built-in dependency injection (DI) mechanism.
    As we'll see, the DI for a dependency in Nova Dashboards is very similar to
    that used in Nova Bits and other Angular-based libraries with one major
    difference: a dependency must be registered with a provider registry to make
    the dashboard framework aware of its availability for injection. In this
    tutorial, we'll go into some detail about this and other basics of how to
    set up a data source.
</p>

<h2>Fundamental Concepts</h2>
<ul>
    <li>
        <a href="../components/DashboardComponent.html" target="_blank"
            ><code>DashboardComponent</code></a
        >
    </li>
    <li>
        <a href="../injectables/ProviderRegistryService.html" target="_blank"
            ><code>ProviderRegistryService</code></a
        >
    </li>
    <li>
        <a href="../classes/WidgetTypesService.html" target="_blank"
            ><code>WidgetTypesService</code></a
        >
    </li>
    <li>Custom data source component</li>
    <li>Widget configuration (including its associated data)</li>
    <li>Widget position definition</li>
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
        Follow the instructions from the
        <a
            href="../additional-documentation/tutorials/hello-dashboards.html"
            target="_parent"
            >Hello Dashboards</a
        >
        tutorial to get a basic dashboard up and running.
    </li>
    <li>
        Implement your data source (See the example source below for a basic
        implementation).
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> It's recommended to have the data source in a
            separate file. If you do put it in a separate file, don't forget to
            add <code>&#64;Injectable()</code> to the top of the data source class.
            This lets Angular know that you plan on injecting dependencies into
            it.
        </nui-message>
    </li>
    <li>
        Ensure that Angular's <code>HttpClientModule</code> is included in the
        imports of the module that contains the data source. You can go
        <a href="https://angular.io/guide/http#setup" target="_blank">here</a>
        for more information about http setup.
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> Importing <code>HttpClientModule</code> is
            required in this example because the data source depends on the
            <code>HttpClient</code> service.
        </nui-message>
    </li>
    <li>
        Register the data source as a dynamically injectable provider using the
        <a href="../injectables/ProviderRegistryService.html" target="_blank"
            ><code>ProviderRegistryService</code></a
        >.
        <nui-message type="warning" [allowDismiss]="false">
            <strong>Note:</strong> When registering a class provider using the
            ProviderRegistryService, be sure to include in the
            <code>deps</code> array any dependencies that need to be injected
            into the provider. This is demonstrated in the example below.
        </nui-message>
    </li>
    <li>Set the data source's provider ID in the widget configuration.</li>
</ol>
<p>
    In the example below, we're statically setting the data source providerId
    for the tile inside the KPI widget. In a real-world scenario, the tile
    configuration would more likely come from a database or from the widget
    configurator output. We'll cover configurator usage in the Widget Editing
    and Widget Cloning tutorials.
</p>
<nui-message type="info" [allowDismiss]="false">
    For more detailed information about adding a data source, take a look at the
    inline comments under the source expander of the following example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="data-source-setup.component"
    exampleTitle="Adding a Data Source"
>
    <data-source-setup></data-source-setup>
</nui-example-wrapper>
`;export{a as default};
