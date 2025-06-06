import"./chunk-VBFW7A5V.js";var t=`<h1>Hello, Dashboards!</h1>

<p>
    In this tutorial we'll show you how to create the simplest form of a Nova
    dashboard with a single static KPI widget.
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
    <li>Widget configuration (including its associated data)</li>
    <li>Widget position definition</li>
</ul>

<h2>Basic Steps</h2>
<ol>
    <li>
        Follow the instructions
        <a
            href="../additional-documentation/getting-started.html"
            target="_blank"
            >here</a
        >
        to set up your environment for dashboard development.
    </li>
    <li>
        Populate a widget's initial configuration. Note: Best practice is to
        retrieve this from a database or a separate file.
    </li>
    <li>
        Grab the widget's predefined structure using the
        <a href="../classes/WidgetTypesService.html" target="_blank"
            ><code>WidgetTypesService</code></a
        >
        and merge it with the widget's initial configuration.
    </li>
    <li>
        Create a
        <a
            href="https://github.com/tiberiuzuld/angular-gridster2/blob/master/README.md"
            target="_blank"
            >gridster</a
        >
        configuration variable of type
        <a
            href="https://github.com/tiberiuzuld/angular-gridster2/blob/master/projects/angular-gridster2/src/lib/gridsterConfig.interface.ts#L50"
            target="_blank"
            ><code>GridsterConfig</code></a
        >
        which holds the gridster configuration used by the dashboard to arrange
        and size the widgets.
    </li>
    <li>
        Create a dashboard variable of type
        <a href="../interfaces/IDashboard.html" target="_blank"
            ><code>IDashboard</code></a
        >
        which holds the widget definitions and positions.
    </li>
    <li>
        In your template, create a
        <a
            href="../components/DashboardComponent.html#dashboard"
            target="_blank"
            ><code>&lt;nui-dashboard&gt;</code></a
        >
        instance and pass the dashboard definition and gridster configuration to
        the
        <code>dashboard</code> and <code>gridsterConfig</code> inputs
        respectively.
    </li>
</ol>

<nui-message type="warning" [allowDismiss]="false">
    <strong>Note:</strong> The dashboard and gridsterConfig input assignments
    must use
    <a
        href="https://angular.io/guide/template-syntax#two-way-binding-"
        target="_blank"
        >banana-in-a-box</a
    >
    notation to keep the dashboard state updated with changes to the pizzagna.
</nui-message>

<p>
    In the example below, we're using a static configuration and data for the
    KPI widget. Normally, the configuration would come from a database or from
    the widget configurator output. We'll cover configurator usage in the Widget
    Editing and Cloning tutorials.
</p>

<h2>Gridster</h2>

<p>
    <a
        href="https://github.com/tiberiuzuld/angular-gridster2/blob/master/README.md"
        target="_blank"
        ><code>angular-gridster2</code></a
    >, also known simply as Gridster, is a package used by Nova Dashboards that
    simplifies the process of creating and maintaining intuitive, draggable grid
    layouts of DOM elements. In the case of Nova Dashboards, these elements take
    the form of widgets which can span one or more rows and columns. In addition
    to draggability, Nova Dashboards' use of Gridster allows users to
    dynamically add or remove widgets from the the dashboard grid.
</p>
<p>
    Nova Dashboards exposes the entire gridster configuration API so you can
    modify any setting that Gridster supports. Check out their
    <a href="https://tiberiuzuld.github.io/angular-gridster2/" target="_blank"
        >demo</a
    >
    for more configuration information.
</p>

<nui-message type="info" [allowDismiss]="false">
    For more detailed information about basic dashboard setup, take a look at
    the inline comments under the source expander of the following example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="hello-dashboards-example"
    exampleTitle="Hello Dashboards"
>
    <hello-dashboards-example></hello-dashboards-example>
</nui-example-wrapper>
`;export{t as default};
