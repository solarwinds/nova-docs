import"./chunk-VBFW7A5V.js";var o=`<h1>Implementing a Custom Widget</h1>

<p>
    In the
    <a
        href="../additional-documentation/tutorials/customization/configurator-section.html"
        target="_parent"
        >Custom Configurator Section</a
    >
    tutorial, we talked about giving users the ability to configure a widget
    behavior or layout that's not configurable out of the box. This includes
    such things as providing a product-specific way for users to configure a
    data source. That tutorial covered the first step to achieving something
    like this by demonstrating how to replace an existing widget configurator
    (editor) section with your own implementation. In this tutorial, we'll go a
    step further and create a custom widget that actually reacts to changes
    triggered by users as they interact with the custom configurator section.
</p>
<p>
    To keep things simple we'll create a custom widget body and reuse the
    standard
    <code
        ><a href="../components/WidgetHeaderComponent.html" target="_blank"
            >WidgetHeaderComponent</a
        ></code
    >
    as our header. The widget body will consist of a
    <code
        ><a
            href="https://nova-ui.solarwinds.io/bits/release_v12.x/components/ImageComponent.html"
            target="_blank"
            >nui-image</a
        ></code
    >, and we'll create a custom configurator section that can be used to update
    the source url of the image. In a later tutorial, we'll create a custom data
    source configurator section and go over the small amount of additional
    wiring required to give users the ability to change the configuration of a
    data source.
</p>

<nui-message type="critical" [allowDismiss]="false">
    <strong>Note:</strong> Implementing a custom widget should be an extremely
    rare occurrence, and it should be done only with the utmost caution. If you
    or someone on your team is thinking about implementing one, please discuss
    it with UX leadership and the Nova development team before proceeding.
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
    <li>Custom widget body</li>
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
        Create a component that will serve as the custom widget body. In this
        tutorial, the widget body will consist of a simple
        <code>nui-image</code>.
    </li>
    <li>
        Create a component that will serve as the custom configurator section.
        In this tutorial, the custom configurator section will allow users to
        update the source url for the image in the custom widget.
    </li>
    <li>
        Ensure that <code>NuiImageModule</code> is included in the imports of
        the custom widget component's parent module.
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
        >, <code>NuiFormFieldModule</code>, <code>NuiSelectV2Module</code>,
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
        Add the custom widget body and configurator section component class
        names to the declarations of the module(s) in which they're implemented.
        In this example, the class names are
        <code>CustomWidgetBodyContentComponent</code> and
        <code>CustomConfiguratorSectionComponent</code>
        respectively.
    </li>
    <li>
        Prepare the dashboard framework to use our custom components by doing
        the following:
        <ol>
            <li>
                Register the new widget type using the
                <code
                    ><a
                        href="../classes/WidgetTypesService.html"
                        target="_blank"
                        >WidgetTypesService</a
                    ></code
                >.
            </li>
            <li>
                Register the custom widget body and custom configurator section
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
                Initialize the image source url options to be displayed in the
                custom configurator section dropdown using the
                <code
                    ><a
                        href="../classes/WidgetTypesService.html"
                        target="_blank"
                        >WidgetTypesService</a
                    ></code
                >
            </li>
        </ol>
        <nui-message type="info" [allowDismiss]="false">
            <strong>Note:</strong> In this tutorial, the above three steps are
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
        At this point you should have a custom widget on the dashboard that
        displays an image.
    </li>
    <li>
        You should also be able to open the widget editor using the Edit button
        in the menu at the top-right corner of the widget and see the custom
        configurator section in the editor.
    </li>
    <li>
        Changing the image selection in the dropdown should update the image in
        the widget preview.
    </li>
    <li>
        Clicking the Save Changes button in the editor should update the widget
        on the dashboard to show the newly selected image.
    </li>
</ol>

<nui-message type="info" [allowDismiss]="false">
    For more detailed information about implementing a custom widget, take a
    look at the inline comments under the source expander of the following
    example.
</nui-message>
<nui-example-wrapper
    filenamePrefix="custom-widget.component"
    exampleTitle="Custom Widget"
>
    <custom-widget></custom-widget>
</nui-example-wrapper>
`;export{o as default};
