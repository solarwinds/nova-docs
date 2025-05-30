import"./chunk-VBFW7A5V.js";var i=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiPaginatorModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To get a basic paginator working, only 2 parameters are required:
    <code>total</code> item count and <code>pageSize</code> - which is the item
    count per page. Use the <code>page</code> parameter to optionally set the
    current page-link (default=1).
</p>
<nui-message [allowDismiss]="false" type="warning">
    <b>Important:</b> <code>pageSize</code> is a Number, so
    <code>pageSize="42"</code> won't work. PageSize can take only those values
    that are listed in defaultPageSizeSet (10, 25, 50, 100).
</nui-message>
<nui-example-wrapper
    filenamePrefix="paginator-basic"
    exampleTitle="Simple Paginator"
>
    <nui-paginator-basic-example></nui-paginator-basic-example>
</nui-example-wrapper>

<h2>Adjacent Page-Links</h2>

<p>
    Control the number of page-links shown <i>adjacent</i> to the current
    page-link with the <code>adjacent</code> parameter. When the current
    page-link is flanked by ellipses, <code>adjacent</code> page-links are
    displayed on both sides of the current page-link. Up tp
    <code>adjacent * 2 + 1 + 6</code> total links are displayed. Default
    <code>adjacent</code> = 1. By default, the maximum number of links shown is
    <code>adjacent*2+5</code>, but the default can be overriden using the
    <code>maxElements</code> parameter.
</p>

<nui-example-wrapper
    filenamePrefix="paginator-adjacent"
    exampleTitle="Adjacent Example"
>
    <nui-paginator-adjacent-example></nui-paginator-adjacent-example>
</nui-example-wrapper>

<h2>Custom Page Size Set</h2>

<p>
    You can define avaliable item counts per page. To do this you need to define
    <code>pageSizeSet</code> input which has
    <code>Array&lt;number&gt;</code> type. By default this input has 10, 25, 50,
    100 page sizes.
</p>
<nui-message [allowDismiss]="false" type="warning">
    <b>Important:</b> <code>pageSize</code> can take only those values that are
    listed in pageSizeSet.
</nui-message>

<nui-example-wrapper
    filenamePrefix="paginator-custom-page-set"
    exampleTitle="Custom Page Size Set"
>
    <nui-paginator-custom-page-set-example></nui-paginator-custom-page-set-example>
</nui-example-wrapper>

<h2>Previous and Next Buttons</h2>

<p>
    Prev and Next buttons can be hidden if you pass <code>showPrevNext</code> as
    false.
</p>

<nui-example-wrapper
    filenamePrefix="paginator-hidden-prev-next"
    exampleTitle="Hidden Prev-Next Example"
>
    <nui-paginator-hidden-prev-next-example></nui-paginator-hidden-prev-next-example>
</nui-example-wrapper>

<h2>Styling</h2>

<p>
    There are a couple of ways to customize the paginator styles. Use
    <code>activeClass</code> to customize the active page-link and
    <code>disabledClass</code> to customize the disabled paginator. It's also
    possible to override the ellipses characters using the
    <code>dots</code> parameter.
</p>

<nui-example-wrapper
    filenamePrefix="paginator-styling"
    exampleTitle="Styling Example"
>
    <nui-paginator-styling-example></nui-paginator-styling-example>
</nui-example-wrapper>

<h2>Performance Improvements</h2>

<p>
    Virtual scroll is used in the "three dots" popup, when the number of hidden
    pages is greater than 1000.
</p>

<nui-example-wrapper
    filenamePrefix="paginator-virtual-scroll"
    exampleTitle="Virtual Scroll Example"
>
    <nui-paginator-virtual-scroll-example></nui-paginator-virtual-scroll-example>
</nui-example-wrapper>

<h2>Visibility</h2>

<p>
    Paginator visibility is affected by several different factors.
    <code>hide</code> allows the developer to explictly control paginator
    visibility, while <code>hideIfEmpty</code> allows the developer to
    optionally hide the paginator when the dataset is empty (default=false).
    Finally, the paginator is hidden automatically if <code>total</code>
    is less than 10 or if invalid parameters are specified.
</p>
`;export{i as default};
