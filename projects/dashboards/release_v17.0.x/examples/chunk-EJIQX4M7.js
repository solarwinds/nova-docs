import"./chunk-T555DFTC.js";var o=`<h1>Custom Formatter for the Donut Chart Content</h1>

<h2>Basic Steps</h2>
<ol>
    <li>
        Follow the instructions from previous tutorials to get a basic dashboard
        up and running.
    </li>
    <li>
        Create a component that will format the donut chart's content. It will
        take as an input the data that's normally displayed as a raw value. In
        this tutorial, our formatter will do the following:
        <ul>
            <li>Display the selected metric name</li>
            <li>Display the selected metric's value</li>
            <li>
                Convert and change the selected metric's value depending on the
                unit type selected
            </li>
            <li>
                Change the selected metric name and value depending on whether
                user interacts with the chart
            </li>
        </ul>
    </li>
    <li>
        Create a component that extends
        <code
            ><a
                href="../classes/DonutChartFormatterConfiguratorComponent.html"
                target="_blank"
                >DonutChartFormatterConfiguratorComponent</a
            ></code
        >. This component will serve as the custom configurator section. If you
        have any custom form controls make sure to override
        <code>DonutChartFormatterConfiguratorComponent</code>'s
        <code>addCustomFormControls</code> method and add the custom form
        controls using the form group argument. The controls in this form group
        will be available under the <code>properties</code> input on the
        formatter.
    </li>
    <li>
        Ensure that the following modules are included in the imports of the
        custom configurator section component's parent module:
        <code>NuiFormFieldModule</code>,
        <code>NuiValidationMessageModule</code>, and
        <code>NuiSelectV2Module</code>
    </li>
    <li>
        Add the custom formatter and configurator section component class names
        to the declarations of the module(s) in which they're implemented. In
        this example, the class names are
        <code>CustomDonutContentFormatterComponent</code> and
        <code>CustomDonutContentFormatterConfiguratorComponent</code>
        respectively.
    </li>
    <li>
        Prepare the dashboard framework to use our custom components by doing
        the following:
        <ol>
            <li>
                Register the custom formatter and custom configurator section
                components using the
                <code
                    ><a
                        href="../injectables/ComponentRegistryService.html"
                        target="_blank"
                        >ComponentRegistryService</a
                    ></code
                >. This will make them available for late load by the dashboard
                framework.
            </li>
            <li>
                Register the formatter definitions of type
                <code
                    ><a
                        href="../interfaces/IFormatterDefinition.html"
                        target="_blank"
                        >IFormatterDefinition</a
                    ></code
                >
                using the
                <code
                    ><a
                        href="../classes/WidgetTypesService.html"
                        target="_blank"
                        >WidgetTypesService</a
                    ></code
                >.
            </li>
            <nui-message type="info" [allowDismiss]="false">
                <strong>Note:</strong> In this tutorial, the above two steps are
                performed in the component's <code>constructor</code>. But, in a
                real-world app, widget type modifications and component
                registrations like this might make more sense in a parent
                module's constructor. Moving framework initialization procedures
                such as these to a higher level in an app's hierarchy ensures
                that multiple dashboard instances within a common parent module
                have access to the same modifications.
            </nui-message>
        </ol>
    </li>

    <li>
        At this point you should be able to open the widget editor using the
        Edit button in the menu at the top-right corner of the widget. Once the
        editor is open, expand the <code>Chart Options</code> section. The
        custom component we created should be displayed in the
        <code>Custom format</code> select.
    </li>
    <li>
        Observe how additional selects <code>Metrics</code> and
        <code>Units</code> appeared under the formatter menu. The
        <code>Metrics</code> one enables users to select a specific metric to
        show it's info in the chart content. The <code>Units</code> one allows
        users to select different units to display that would format the
        metric's data to a selected unit format.
    </li>
    <li>
        Choose your options and save changes, then quit the edit mode. Hover
        over either the chart legend, or chart's segments to see how the donut
        chart content data is changed dynamically.
    </li>
    <li>
        In case you you use <code>nui-select-v2</code> and
        <code>nui-combobox-v2</code> components, it is possible that in case of
        large lists the component overlay may go beyond the configurator heading
        due to its high z-index. To fix this, use the
        <code>nui-select-v2</code> and <code>nui-combobox-v2</code> components
        input <code>popupViewportMargin</code> and pass the height of the
        configurator heading into it. You can get the height of the configurator
        heading by simply injecting the
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
    For details on how to create a custom formatter, take a look at the inline
    comments under the source expander of the following example.
</nui-message>

<nui-example-wrapper
    filenamePrefix="custom-donut-content-formatter-example"
    exampleTitle="Custom Formatter"
>
    <custom-donut-content-formatter-example></custom-donut-content-formatter-example>
</nui-example-wrapper>
`;export{o as default};
