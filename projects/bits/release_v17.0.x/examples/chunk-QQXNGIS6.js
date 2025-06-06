import"./chunk-XR34LRGE.js";var t=`<p>
    <code>DataFilterService</code> provides a mechanism of filtering data in
    hierarchical components.
</p>
<h2>Basic Usage</h2>
<p>To use <code>DataFilterService</code> do following steps:</p>
<ol>
    <li>
        Provide <code>DataFilterService</code> into providers of your parent and
        child components.
    </li>
    <li>
        Register filters using
        <code>this.filterService.registerFilter()</code> function and pass
        <a href="../interfaces/IFilteringParticipants.html" target="_blank"
            ><code>IFilteringParticipants</code></a
        >
        as a parameter.
    </li>
    <li>
        Call <code>this.filterService.applyFilters()</code> function to apply
        filters on components which are used for filtering.
    </li>
    <li>
        Create custom <code>DataSource</code> (in our case we are extending
        <a href="../injectables/LocalFilteringDataSource.html" target="_blank"
            ><code>LocalFilteringDataSource</code></a
        >) and inside that service inject <code>DataFilterService</code> and
        subscribe to <code>this.filterService.filteringSubject</code> in
        constructor of your <code>DataSource</code> service.
        <code>this.filterService.filteringSubject</code> will be emitted when
        <code>this.filterService.applyFilters()</code>
        will be called in your component.
    </li>
    <li>
        Perform filtering in your <code>DataSource</code> service. To make this
        happen in your custom <code>DataSource</code> use
        <code>this.filterService.getFilters()</code> function to get filter
        state of your component. You can see it in action in the example below
        (in <code>getFilteredData</code> function in <code>DataSource</code>).
    </li>
</ol>
<p>
    More details about multi-level filtering mechanism are available
    <a
        target="_blank"
        href="https://cp.solarwinds.com/pages/viewpage.action?spaceKey=NU&title=Filterable+Datasources"
        >here</a
    >.
</p>
<nui-example-wrapper
    filenamePrefix="data-filter-basic"
    exampleTitle="Basic Usage"
>
    <nui-data-filter-basic-example></nui-data-filter-basic-example>
</nui-example-wrapper>
<h2>Isolated Filters</h2>
<p>
    In this example you can see two components with
    <code>nui-search</code> which are independent from each other. This is
    possible because of properly created component tree. Each component has its
    own <code>DataFilterService</code>. This <code>DataFilterService</code> has
    reference to its parent and doesn't have any references to sibling
    components. It happens because in the example below we injected
    <code>DataFilterService</code> in providers of each component and Angular
    creates correct DI tree.
</p>
<nui-example-wrapper
    filenamePrefix="data-filter-isolated"
    exampleTitle="Isolated Filters"
>
    <nui-data-filter-isolated-example></nui-data-filter-isolated-example>
</nui-example-wrapper>
`;export{t as default};
