import"./chunk-XR34LRGE.js";var t=`<p>
    The Angular CDK Tree module provides a way to easily and declaratively
    create Tree interfaces.
</p>
<p>
    To get started, import <code>CdkTreeModule</code> into the NgModule where
    you want to use <code>cdk-tree</code> features:
</p>

<nui-example-code language="typescript" [code]="initialSetupCode" />

<p>
    For more details on the implementation of the &#64;angular/cdk/tree, check the
    documentation
    <a href="https://material.angular.io/cdk/tree/overview" target="_blank"
        >here</a
    >
</p>
<h2>Required Modules</h2>
<ul>
    <li>Angular CDK's <code>CdkTreeModule</code></li>
</ul>

<h2>Basic Usage</h2>
<p>
    This example shows how easy it is to create a <code>cdk-tree</code> element.
    Our examples are using <code>nui-expander</code> css styles which we
    recommend to use. To add <code>nui-expander</code> styles, add
    <code>.expander()</code> mixin to the component styles. In the result,
    appropriate css classes are generated which are used in the examples. For
    example <code>.nui-tree__body</code> applies dotted line to the body of
    branch, or <code>.nui-tree_header</code> applies
    <code>cursor: pointer</code>. Look into examples to find more css classes or
    extend existing css rules to achieve your goal.
</p>
<nui-example-wrapper filenamePrefix="basic" exampleTitle="Basic Usage">
    <nui-tree-basic-example></nui-tree-basic-example>
</nui-example-wrapper>

<h2>Tree Styling</h2>
<p>
    To apply unique styles for the particular node, provide icon/css class/etc.
    to this node in the <code>dataSource</code>, and use it as usually in the
    template of component. Check the source code below:
</p>
<nui-example-wrapper filenamePrefix="styling" exampleTitle="Styling">
    <nui-tree-styling-example></nui-tree-styling-example>
</nui-example-wrapper>

<h2>Tree Lazy-loading</h2>
<p>
    To implement lazy-loading on <code>CdkTree</code> component branches, use
    <code>renderNodeChanges</code> method, in order to synchronize data-source
    with DOM representation after an asynchronous operation has finished. Pay
    attention to the <code>isLoading</code> flag into yours node objects while
    implementing lazy-loading.
</p>
<nui-example-wrapper filenamePrefix="lazy" exampleTitle="Lazy loading">
    <nui-tree-lazy-example></nui-tree-lazy-example>
</nui-example-wrapper>

<h2>Tree with checkboxes</h2>
<p>
    For handling state of checkboxes
    <a
        href="https://github.com/angular/components/blob/master/src/cdk/collections/selection-model.ts"
        >SelectionModel</a
    >
    is used. You can easily grab all the selected items using
    <code>SelectionModel.selected</code> or subscribe to the changes using
    <code>SelectionModel.changed</code>. Check one of the checkboxes to see it
    in action. This example also shows how to implement "indeterminate" state of
    checkbox for branches.
</p>
<nui-example-wrapper filenamePrefix="checkbox" exampleTitle="Checkbox">
    <nui-tree-checkbox-example></nui-tree-checkbox-example>
</nui-example-wrapper>

<h2>Tree with Checkboxes and Lazy Loading</h2>
<p>
    In case some selectable options are to be lazy loaded, it is possible to
    load additional selectable options asynchronously, while still be able to
    track the selection properly. In the following example there are several
    places where some additional options are being loaded on demand. Once
    triggered, if the parent selectable node is selected, all the lazy-loaded
    selectables will get selected once they're loaded.
</p>

<nui-example-wrapper
    filenamePrefix="checkbox-lazy"
    exampleTitle="Checkbox with Lazy Loading"
>
    <nui-tree-checkbox-lazy></nui-tree-checkbox-lazy>
</nui-example-wrapper>

<h2>Tree with Pagination on Leaf nodes</h2>
<p>
    If you have many items on leaf nodes, you might be interested in loading the
    data by parts. You can use pagination as one of the options for such a
    purpose.
</p>
<p>
    The example below shows how to do that. In terms of this example, it's
    assumed that an API can return a necessary set of data for the node by it's
    identificator. When you expand the node, it will load the first page and
    then will display a paginator. At this point, on the first data fetch, an
    API should return a total amount of items to pass it to the paginator.
</p>
<p>
    It's also recommended to use <code>nui-paginator</code> for handling the
    pagination.
</p>
<nui-example-wrapper
    filenamePrefix="leaf-pagination"
    exampleTitle="Pagination on the leaf nodes"
>
    <nui-tree-leaf-pagination-example></nui-tree-leaf-pagination-example>
</nui-example-wrapper>

<h2>Tree With Additional Elements</h2>
<p>
    To customize tree nodes, add any template. Below you see several typical
    cases with adding additional templates (menu, tag) into the tree.
</p>

<nui-example-wrapper
    filenamePrefix="with-additional-content"
    exampleTitle="Tree With Additional Content"
>
    <nui-tree-with-additional-content-example></nui-tree-with-additional-content-example>
</nui-example-wrapper>

<h2>Tree Load More Nodes</h2>
<p>The example below shows how to load data in portions using "Load More"</p>

<nui-example-wrapper
    filenamePrefix="load-more"
    exampleTitle="Tree Load More Nodes"
>
    <nui-tree-load-more-example></nui-tree-load-more-example>
</nui-example-wrapper>

<h2>Tree With show all in dialog</h2>
<p>
    It's possible the case when there're too many items on the leaf node. In
    this case, it's also possible to display all the items on the separate
    screen. For example, inside the <code>nui-dialog</code>.
</p>
<p>
    Current example uses Nova test BE service to get the data. It can send the
    data by some portions for a certain criteria. In this current example,
    there're 3 nodes that fetch the data per location, the service is
    implementing Nova
    <code
        ><a href="../injectables/DataSourceService.html" target="_blank"
            >DataSourceService</a
        ></code
    >.
</p>

<nui-example-wrapper
    filenamePrefix="show-all-dialog"
    exampleTitle="Tree With show all in dialog"
>
    <nui-tree-show-all-dialog-example></nui-tree-show-all-dialog-example>
</nui-example-wrapper>
`;export{t as default};
