import"./chunk-VBFW7A5V.js";var a=`<p>
    The <code>&lt;nui-breadcrumb&gt;</code> component represents a structure of
    nested items. Its state is based on data from each route that takes part in
    this structure.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiBreadcrumbModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>To use breadcrumb do the following:</p>
<ol>
    <li>
        Place an <code>&lt;nui-breadcrumb&gt;</code> in the template of a top
        level component.
    </li>
    <li>
        Configure a RoutingModule with a tree structure of routes similar to the
        following:
        <nui-example-code language="typescript" [code]="routesExample" />
    </li>
    <li>
        Specify a <code>breadcrumb</code> item name in the
        <code>route.data</code> object.
    </li>
    <li>
        Optionally, specify a <code>url</code> - the external url for the
        breadcrumb to navigate (using CTRL + Click, or simple Middle Click
        events). This setting should also be in the
        <code>route.data</code> object.<br />
        <mark
            >NOTE: regular left mouse click events will still navigate you using
            the angular router.</mark
        >
    </li>
    <li>
        Get the initial data set for the breadcrumb via
        <code
            ><a
                href="../injectables/BreadcrumbStateService.html"
                target="_blank"
            >
                BreadcrumbStateService</a
            >.getBreadcrumbState(routerState: ActivatedRoute)</code
        >.
    </li>
    <li>
        Subscribe to router changes using
        <code
            ><a
                href="../injectables/BreadcrumbStateService.html"
                target="_blank"
            >
                BreadcrumbStateService</a
            >.getNavigationSubscription(router: Router)</code
        >
        and update input data for the <code>BreadcrumbComponent</code>.
    </li>
    <li>
        To perform navigation via <code>&lt;nui-breadcrumb&gt;</code> component
        items, subscribe to the <code>navigation</code>
        output. The subscription event payload is an absolute route path that
        can be used to trigger the navigation.
    </li>
</ol>
<p>
    In addition to the above, the following example also illustrates how to
    perform a relative navigation.
</p>
<nui-example-wrapper
    filenamePrefix="breadcrumb-basic"
    exampleTitle="Basic Usage"
>
    <nui-breadcrumb-basic-example></nui-breadcrumb-basic-example>
</nui-example-wrapper>
`;export{a as default};
