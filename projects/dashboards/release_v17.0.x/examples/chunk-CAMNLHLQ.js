import"./chunk-T555DFTC.js";var a=`<h1>Table Widget</h1>

<p>
    A Table widget displays data in tabular format, i.e. in rows and columns.
    Each row in the table represents an item, and each column shows a selected
    attribute of that item. You can scroll and sort this data using the controls
    on the widget.
</p>

<h2>Column Formatters</h2>

<p>
    To present table values in a way that makes the most sense for users, it's
    necessary to specify an appropriate way to format the values of each column.
    With that in mind, a column formatter component can be used to format given
    data in a specific way. As such, the default formatter will format any given
    value as a simple string. But, data often need to be transformed beyond
    their raw value in some way to correctly display data types such as numbers,
    times, dates, pictures, links, etc. In those cases, a formatter specialized
    in formatting the particular data type must be used.
</p>

<nui-message type="info" [allowDismiss]="false">
    For details on how to instantiate a table widget, take a look at the inline
    comments under the source expander of the following example.
</nui-message>

<nui-example-wrapper filenamePrefix="table-widget" exampleTitle="Table widget">
    <table-widget-example></table-widget-example>
</nui-example-wrapper>

<h3>Interaction Handling</h3>
<p>
    The example below has the
    <code
        ><a href="../injectables/UrlInteractionHandler.html" target="_blank"
            >UrlInteractionHandler</a
        ></code
    >
    configured to handle the interactions that occur on the table's columns.
    Look at the inline comments in the source expander to see how it is
    configured.
</p>

<nui-example-wrapper
    filenamePrefix="table-widget-interactive"
    exampleTitle="Table Interactive widget"
>
    <table-widget-interactive-example></table-widget-interactive-example>
</nui-example-wrapper>

<h2>Data source features</h2>
<p>
    There are table specific data source features that are useful only when
    given data source is used in the context of a table widget. These are:
</p>
<ul>
    <li>
        <b>Search</b> -
        <a
            target="parent"
            href="../additional-documentation/widget-types/table/table-with-search.html"
            >described on a dedicated page</a
        >
    </li>
    <li>
        <b>Disabling automatic column generation</b> - turning on the feature
        called
        <a href="../miscellaneous/enumerations.html#WellKnownDataSourceFeatures"
            ><code>DisableTableColumnGeneration</code></a
        >
        disables automatic column generation in the table widget editor. This
        was introduced to maintain backward compatibility with previous
        implementations of the table widget.
    </li>
</ul>

<h2>Widget Schema</h2>

<p>
    The code listings below are the source files for the Table widget definition
    with inline comments describing the parts that compose the standard Table
    widget type. It includes the widget's definition as well as its
    corresponding configurator form for defining how to configure (create/edit)
    the widget.
</p>

<h2>Widget</h2>

<p>
    This part shows the actual widget definition. It includes, among other
    things, the components and providers that compose the widget itself.
</p>

<nui-example-code language="typescript" [code]="widgetFileText" />

<h2>Configurator</h2>

<p>
    This part shows the form that's used for configuring (creating/editing) the
    widget.
</p>

<nui-example-code language="typescript" [code]="configuratorFileText" />

<h2>Additional Features</h2>
<ul>
    <li>
        <p>
            <strong>Scroll Activation Delay:</strong> By default, the table
            widget delays scroll activation for a short period of time after
            <code>mouseenter</code> to mitigate accidental scrolling of the
            table while scrolling through the dashboard. To disable this
            feature, follow these steps:
        </p>
        <ol>
            <li>
                Go to your initialization of the dashboard and grab the
                reference to the table widget type:
                <br />
                <code>
                    const table =
                    this.widgetTypesService.getWidgetType("table");
                </code>
            </li>
            <li>
                Change this property value to false:
                <br />
                <code>
                    table.widget.structure.table.properties.delayedMousePresenceDetectionEnabled
                    = false;
                </code>
            </li>
        </ol>
        <br />
        <p>Additionally, you can override the default delay of 500 ms:</p>
        <ol>
            <li>
                Grab the reference to the table widget type in your dashboard
                initialization similar to above:
                <br />
                <code>
                    const table =
                    this.widgetTypesService.getWidgetType("table");
                </code>
            </li>
            <li>
                Change this property to the desired value in ms:
                <br />
                <code>
                    table.widget.structure.table.properties.configuration.scrollActivationDelayMs
                    = 750
                </code>
            </li>
        </ol>
    </li>
</ul>
`;export{a as default};
