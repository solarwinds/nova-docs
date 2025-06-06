import"./chunk-VBFW7A5V.js";var o=`<h1>Implementing a Custom Formatter</h1>

<p>
    In the
    <a
        href="../additional-documentation/tutorials/customization/configurator-section.html"
        target="_parent"
        >Custom Configurator Section</a
    >
    tutorial, we talked about giving users the ability to configure a widget
    behavior or layout that's not configurable out of the box. While developing
    a dashboard, you may discover a need to give users the ability to add some
    special layout or styling to the contents of a table cell beyond raw text
    display or a link. In this tutorial, we'll create a custom formatter and a
    custom configurator component to conditionally add an icon to the contents
    of a specified column.
</p>

<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> Off the shelf, the Nova Dashboards framework provides
    a
    <code
        ><a href="../components/LinkConfiguratorComponent.html" target="_blank"
            >LinkConfiguratorComponent</a
        ></code
    >
    which allows users pair a value and url to be displayed as a link in a
    specified column. The corresponding
    <code
        ><a href="../components/LinkFormatterComponent.html" target="_blank"
            >LinkFormatterComponent</a
        ></code
    >
    uses the configurator's output to determine which value to use for display
    and which value to use for the url. The formatter then displays the
    formatted link in each table cell within the configured column.
</nui-message>

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
    <li>Custom formatter</li>
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
        Create a component that will format the contents of a table cell. It
        will take as an input the data that's normally displayed as a raw value
        in the cell. In this tutorial, our formatter will prepend the data with
        an icon if the value meets a certain threshold.
    </li>
    <li>
        Create a component that extends
        <code
            ><a
                href="../classes/FormatterConfiguratorComponent.html"
                target="_blank"
                >FormatterConfiguratorComponent</a
            ></code
        >. This component will serve as the custom configurator section. If you
        have any custom form controls make sure to override
        <code>FormatterConfiguratorComponent</code>'s
        <code>addCustomFormControls</code> method and add the custom form
        controls using the form group argument. The controls in this form group
        will each correspond to an input on the formatter.
    </li>
    <li>
        Ensure that the following modules are included in the imports of the
        custom configurator section component's parent module:
        <code>NuiFormFieldModule</code>, <code>NuiIconModule</code>,
        <code>NuiTextboxModule </code>, <code>NuiValidationMessageModule</code>,
        and <code>NuiSelectV2Module</code>
    </li>
    <li>
        Ensure that the <code>NuiIconModule</code> is included in the imports of
        the custom formatter component's parent module.
    </li>
    <li>
        Add the custom formatter and configurator section component class names
        to the declarations of the module(s) in which they're implemented. In
        this example, the class names are
        <code>CustomFormatterComponent</code> and
        <code>CustomFormatterConfiguratorComponent</code>
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
                        href="../interfaces/ITableFormatterDefinition.html"
                        target="_blank"
                        >ITableFormatterDefinition</a
                    ></code
                >
                using the
                <code
                    ><a
                        href="../injectables/TableFormatterRegistryService.html"
                        target="_blank"
                        >TableFormatterRegistryService</a
                    >
                    which is extending (<a
                        href="../classes/FormatterRegistryService.html"
                        target="_blank"
                        >FormatterRegistryService</a
                    >)</code
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
        editor is open, expand any of the column sections. The custom component
        we created should be displayed in that section of the editor.
    </li>
    <li>
        Select the custom formatter from the Format dropdown and choose an icon
        and threshold. The selected icon should now be shown on the left side of
        the corresponding column in the table widget preview if the value is
        above the threshold.
    </li>
    <li>
        In case you use <code>nui-select-v2</code> and
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
    filenamePrefix="custom-formatter-example"
    exampleTitle="Custom Table Formatter"
>
    <custom-formatter-example></custom-formatter-example>
</nui-example-wrapper>
`;export{o as default};
