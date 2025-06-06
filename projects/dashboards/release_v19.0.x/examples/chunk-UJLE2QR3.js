import"./chunk-VBFW7A5V.js";var t=`<h1>Implementing a Custom Configurator Section</h1>

<p>
    While developing a dashboard, you may find yourself wanting to give users
    the ability to configure a widget behavior or layout that's not configurable
    out of the box. For example, you may want to provide a product-specific way
    for users to configure a data source. The first step to achieving something
    like this is to replace an existing widget configurator (editor) section
    with your own implementation. In this tutorial, we'll do our best to give
    you an understanding of what's needed to accomplish this first step.
</p>
<p>
    For now, we'll keep things simple and create a custom version of the KPI
    description configuration component to replace the background color selector
    with some static text content. This will serve mainly as a proof-of-concept
    for the configurator side. In a later tutorial, we'll create a
    <a
        href="../additional-documentation/tutorials/customization/widget.html"
        target="_parent"
        >custom widget</a
    >
    that can actually be configured via a custom configurator section. And, in
    another tutorial beyond that, we'll go over the small amount of additional
    wiring required to give users the ability to change the configuration of a
    data source.
</p>

<h2>Fundamental Concepts</h2>
<ul>
    <li>
        <code
            ><a href="../classes/WidgetTypesService.html" target="_blank"
                >WidgetTypesService</a
            ></code
        >
    </li>
    <li>
        <code
            ><a
                href="../injectables/ComponentRegistryService.html"
                target="_blank"
                >ComponentRegistryService</a
            ></code
        >
    </li>
    <li>Custom configurator section component</li>
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
        Create a component that will be used to replace an existing
        framework-provided configurator section. In this tutorial, we'll replace
        the existing
        <code
            ><a
                href="../components/KpiDescriptionConfigurationComponent.html"
                target="_blank"
                >KpiDescriptionConfigurationComponent</a
            ></code
        >
        with a custom one. Our version will insert custom content where there
        would normally be a tile color selection dropdown.
    </li>
    <li>
        Ensure that the following modules are included in the imports of the
        custom configurator section component's parent module:
        <code
            ><a
                href="../modules/NuiDashboardConfiguratorModule.html"
                target="_blank"
                >NuiDashboardConfiguratorModule</a
            ></code
        >, <code>NuiFormFieldModule</code>, <code>NuiTextboxModule</code>,
        <code>NuiIconModule</code>, and Angular's
        <code
            ><a
                href="https://angular.io/api/forms/ReactiveFormsModule"
                target="_blank"
                >ReactiveFormsModule</a
            ></code
        >.
    </li>
    <li>
        Add the custom configurator section component class name to the
        declarations of the module in which it's implemented. In this example,
        the class name is
        <code>CustomKpiDescriptionConfigurationComponent</code>
    </li>
    <li>
        Prepare the dashboard framework to use our custom configurator section
        by doing the following:
        <ol>
            <li>
                Use the
                <code
                    ><a
                        href="../classes/WidgetTypesService.html"
                        target="_blank"
                        >WidgetTypesService</a
                    ></code
                >
                to replace the existing configurator section component with our
                custom one.
            </li>
            <li>
                Register the custom configurator section component using the
                <code
                    ><a
                        href="../injectables/ComponentRegistryService.html"
                        target="_blank"
                        >ComponentRegistryService</a
                    ></code
                >
                to make it available for late load by the dashboard framework.
            </li>
        </ol>
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> In this tutorial, the above two steps are
            performed in the component's <code>ngOnInit</code>. But, in a
            real-world app, widget type modifications and component
            registrations like this may make more sense in a parent module's
            constructor. Moving framework initialization procedures such as
            these to a higher level in an app's hierarchy ensures that multiple
            dashboard instances within a common parent module have access to the
            same modifications.
        </nui-message>
    </li>
    <li>
        At this point you should be able to open the widget editor using the
        Edit button in the menu at the top-right corner of the widget. Once the
        editor is open, expand the KPI tile's Description section. The custom
        component we created should now be displayed in that section of the
        editor.
    </li>
    <li>
        In case you have custom content, like formatters etc., and you use
        <code>nui-select-v2</code> and <code>nui-combobox-v2</code> components,
        it is possible that in case of large lists the component overlay may go
        beyond the configurator heading due to its high z-index. To fix this,
        use the <code>nui-select-v2</code> and
        <code>nui-combobox-v2</code> components input
        <code>popupViewportMargin</code> and pass the height of the configurator
        heading into it. You can get the height of the configurator heading by
        simply injecting the
        <code
            ><a
                href="../injectables/ConfiguratorHeadingService.html"
                target="_blank"
                >ConfiguratorHeadingService</a
            ></code
        >
        and use its <code>height$</code> observable and async pipe to instantly
        get the current height of the configurator heading.
    </li>
</ol>

<nui-message type="info" [allowDismiss]="false">
    For more detailed information about implementing a custom configurator
    section, take a look at the inline comments under the source expander of the
    following example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="custom-configurator-section"
    exampleTitle="Custom Configurator Section"
>
    <custom-configurator-section-example></custom-configurator-section-example>
</nui-example-wrapper>
`;export{t as default};
