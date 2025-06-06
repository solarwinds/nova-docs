import"./chunk-VBFW7A5V.js";var i=`<h1>Table Widget with Select Functionality</h1>
<p>
    Table Widget can have select functionality. This page contains information
    only about setting up the select, so before proceeding get familiar with the
    following:
</p>
<ul>
    <li>
        <a
            href="../additional-documentation/anatomy/data-sources.html"
            target="_blank"
            ><code>Data Sources</code></a
        >
        - for information about Data Sources and their Features.
    </li>
    <li>
        <a
            href="../additional-documentation/widget-types/table.html"
            target="_blank"
            ><code>Table Widget</code></a
        >
        - for configuring a table widget itself.
    </li>
</ul>

<h2>Types of Select</h2>
<p>Table widget can be configured with 4 different types of select:</p>
<ul>
    <li>
        <b> Multi: </b>
        <p>
            Allows to pick multiple table rows. Each row displays a checkbox in
            this mode and a selector for all items on the given page/all pages
            is displayed as well.
        </p>
    </li>
    <li>
        <b> Radio: </b>
        <p>
            Allows to pick only one table row. Each row displays a radio button
            and the selector for all items is hidden.
        </p>
    </li>
    <li>
        <b> Single: </b>
        <p>
            Same behavior as <b>Radio</b> mode but without buttons. Row is
            clickable by default.
        </p>
    </li>
</ul>
<nui-example-wrapper
    filenamePrefix="table-widget-selectable-multi"
    exampleTitle="Table widget with multi select"
>
    <table-widget-selectable-multi-example></table-widget-selectable-multi-example>
</nui-example-wrapper>

<nui-example-wrapper
    filenamePrefix="table-widget-selectable-radio"
    exampleTitle="Table widget with radio select"
>
    <table-widget-selectable-radio-example></table-widget-selectable-radio-example>
</nui-example-wrapper>

<nui-example-wrapper
    filenamePrefix="table-widget-selectable-single"
    exampleTitle="Table widget with single select"
>
    <table-widget-selectable-single-example></table-widget-selectable-single-example>
</nui-example-wrapper>

<h2>Configuring the Widget</h2>
<p>
    To configure the widget you have to enable selection in the widget
    configuration. The configuration is of type
    <code>TableWidgetSelectionConfig</code>.
</p>
<nui-example-code language="typescript" [code]="tableConfigurationText" />

<h2>Accessing the Selection</h2>
<p>
    On selection a <code>SELECTION</code> pizzagna event is being triggered. You
    can access it in the following way:
</p>
<nui-example-code language="typescript" [code]="eventSubscriptionText" />
`;export{i as default};
