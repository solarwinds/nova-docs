import"./chunk-VBFW7A5V.js";var a=`<h2>Client Side Data Source</h2>
<p>
    The main responsibility of a data source is to process one or more filters
    (e.g. pagination, sorting, search, etc.) from any filtering components
    before exposing the data to a presentation layer. The
    <code>ClientSideDataSource</code> aims to allow filtering components to be
    independent from the main presentation component by allowing each of them to
    communicate to the service how they each individually want to filter the
    data. The presentation component can then ask for the pre-filtered data via
    the service.
</p>
<span
    >Filtering components can be registered with the service in the following
    manner:</span
>
<ul>
    <li>
        use
        <code>
            this.dataSourceService.componentTree = {{ "{" }} search:
            {{ "{" }}...{{ "}" }} {{ "}" }};
        </code>
        to set components that will be part of filtering process
    </li>
    <li>
        implement <code>getFilteredData</code> in your own service or use
        existing from <code>ClientSideDataSource</code>
    </li>
    <li>use it by subscribing to output and applying newly received data</li>
</ul>
<p>
    Visualization of data flow is available
    <a
        target="_blank"
        href="https://cp.solarwinds.com/display/NU/Filtered+view+communication+mechanism"
        >here</a
    >.
</p>

<nui-message type="critical">
    <strong>Warning:</strong> If you are planning on using
    <abbr title="Ahead of Time">AoT</abbr> compilation, avoid
    <b>directly</b> providing <code>ClientSideDataSource</code>. The search
    service inside <code>ClientSideDataSource</code> will not be populated under
    AoT compilation (JIT compilation will work normally). A simple work around
    is to create a simple class, have it inherit/extend
    <code>ClientSideDataSource</code>, and then provide that.<br />
    <p>
        <nui-example-code language="typescript" [code]="subclassCode" />
    </p>
</nui-message>

<nui-example-wrapper
    filenamePrefix="client-side-basic"
    exampleTitle="Basic Client Side"
>
    <nui-client-side-basic-data-source-example></nui-client-side-basic-data-source-example>
</nui-example-wrapper>

<h2>Custom Search</h2>
<p>
    If needed to fully or partially override logic of
    <code>SearchService</code>, you can easily provide a new class extended from
    <code>SearchService</code> using Angular DI on the Component level using
    <a
        href="https://angular.io/guide/dependency-injection-providers#alternative-class-providers"
        >Alternative class provider</a
    >.
</p>
<p>This example shows how to do case-sensitive search.</p>
<nui-example-wrapper
    filenamePrefix="client-side-custom-search"
    exampleTitle="Client-Side Custom Search"
>
    <nui-client-side-custom-search-example></nui-client-side-custom-search-example>
</nui-example-wrapper>

<h2>Delayed Search</h2>
<p>The rxjs pipe function can be used to introduce a delay or debounce.</p>
<nui-example-wrapper
    filenamePrefix="client-side-delayed"
    exampleTitle="Client Side Delayed"
>
    <nui-client-side-delayed-data-source-example></nui-client-side-delayed-data-source-example>
</nui-example-wrapper>

<h2>Filtering</h2>
<p>
    Here we're combining several components to implement filter panel. For more
    information please see inline comments.
</p>
<nui-example-wrapper
    filenamePrefix="client-side-filtering"
    exampleTitle="Manually Composed Filtering Layout"
>
    <nui-client-side-filtering-data-source-example></nui-client-side-filtering-data-source-example>
</nui-example-wrapper>

<h2>Selection</h2>
<p>
    <code
        ><a href="../injectables/ListService.html" target="_blank"
            >ListService</a
        ></code
    >
    helps with selection handling, both for the repeat and the selector.
</p>
<nui-example-wrapper
    filenamePrefix="client-side-with-selection"
    exampleTitle="Client-Side Filtering With Selection"
>
    <nui-client-side-with-selection-example></nui-client-side-with-selection-example>
</nui-example-wrapper>
`;export{a as default};
