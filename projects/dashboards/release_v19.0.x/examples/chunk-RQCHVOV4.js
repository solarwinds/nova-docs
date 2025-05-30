import"./chunk-VBFW7A5V.js";var o=`<h1>Implementing a Custom Data Source Configurator</h1>

<p>
    In the
    <a
        href="../additional-documentation/tutorials/customization/configurator-section.html"
        target="_parent"
        >Custom Configurator Section</a
    >
    tutorial, we walked through giving users the ability to configure a widget
    behavior or layout that's not configurable out of the box. And, in the
    <a
        href="../additional-documentation/tutorials/adding-a-data-source.html"
        target="_parent"
        >Adding a Data Source</a
    >
    tutorial, we walked through the basics of how to create a data source and
    register it for use by a widget.
</p>
<p>
    While developing a dashboard, you might find that a statically configured
    data source isn't necessarily flexible enough for your end-users. In fact,
    they may want the ability to change the configuration of a data source to
    adjust its output in some way. In this tutorial, we'll add user
    configurability to a data source by creating a custom configurator component
    that allows the user to select which Harry Potter book and/or metric for
    which a data source will return a value.
</p>
<p>
    <strong>Note:</strong> Off the shelf, the Nova Dashboards framework provides
    <code
        ><a
            href="../components/DataSourceConfigurationComponent.html"
            target="_blank"
            >DataSourceConfigurationComponent</a
        ></code
    >
    which allows the user to select a data source class name from a drop down.
    In the tutorial, however, we will create a custom configuration component
    that extends a newer version of the component called
    <code
        ><a
            href="../components/DataSourceConfigurationV2Component.html "
            target="_blank"
            >DataSourceConfigurationV2Component</a
        ></code
    >
    This new component has functionality similar to the original, but it adds
    the ability to present friendly provider names for users to select from
    instead of just raw class names. Additionally, it allows users to select
    from any pre-configured properties on the data source.
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
    <li>Custom data source configurator</li>
    <li>Data source</li>
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
        Create a component that extends
        <code
            ><a
                href="../components/DataSourceConfigurationV2Component.html "
                target="_blank"
                >DataSourceConfigurationV2Component</a
            ></code
        >. Since our properties are going to be editable by the user, we'll need
        to override the properties on the form to be a form group instead of a
        single form control.
    </li>
    <li>
        Ensure that the following modules are included in the imports of the
        custom configurator section component's parent module:
        <code>NuiDashboardConfiguratorModule</code>,
        <code>NuiFormFieldModule</code>, <code>NuiTextboxModule</code>,
        <code>NuiValidationMessageModule</code>, and
        <code>NuiSelectV2Module</code>
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
    <li>
        Create a data source with properties that will be configurable by the
        end-user. The data source will need to receive updates to those
        properties by implementing an
        <code>updateConfiguration</code> method prescribed by the
        <code
            ><a href="../interfaces/IConfigurable.html" target="_blank"
                >IConfigurable</a
            ></code
        >
        interface. This method will be called automatically anytime the user
        selects a new value for a property.
    </li>
    <li>
        Register the custom configurator component using the
        <code
            ><a
                href="../injectables/ComponentRegistryService.html"
                target="_blank"
                >ComponentRegistryService</a
            ></code
        >
        to make it available for late load by the dashboard framework.
    </li>
    <li>
        Use the
        <code
            ><a href="../classes/WidgetTypesService.html" target="_blank"
                >WidgetTypesService</a
            ></code
        >
        to replace the existing configurator component with our custom one.
    </li>
</ol>
<nui-message type="info" [allowDismiss]="false">
    For details on how to create a custom data source configurator, take a look
    at the inline comments under the source expander of the following example.
</nui-message>

<nui-example-wrapper
    filenamePrefix="custom-data-source-configurator-example"
    exampleTitle="Custom Data Source Configurator"
>
    <custom-data-source-configurator-example></custom-data-source-configurator-example>
</nui-example-wrapper>
`;export{o as default};
