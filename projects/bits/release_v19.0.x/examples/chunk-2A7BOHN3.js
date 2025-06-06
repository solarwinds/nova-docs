import"./chunk-VBFW7A5V.js";var o=`<p>
    The <code>nui-sorter</code> component provides a toggle mechanism for
    sorting a set of items in ascending or descending order. The value to sort
    by can be selected by the user via a dropdown.
</p>

<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiSorterModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<h3>Inputs</h3>
<p>
    <code>{{ getSorterPropKey("itemsSource") }}</code> - To get the sorter
    working, provide an array of type
    <code
        ><a href="../interfaces/IMenuItem.html" target="_blank"
            >IMenuItem[]</a
        ></code
    >
    to the <code>{{ getSorterPropKey("itemsSource") }}</code> input. Each item
    in the array should be set with a
    <code>{{ getIMenuItemInterfaceKey("title") }}</code> and
    <code>{{ getIMenuItemInterfaceKey("value") }}</code> for populating the
    sorter dropdown. The title property is for display and can be localized. The
    value property is what's actually used for sorting.
</p>
<p>
    <code>{{ getSorterPropKey("selectedItem") }}</code> - To specify an initial
    value to sort by, optionally set the
    <code>{{ getSorterPropKey("selectedItem") }}</code> input with an item's
    <code>{{ getIMenuItemInterfaceKey("value") }}</code> from the
    <code>{{ getSorterPropKey("itemsSource") }}</code> array. By default, the
    initial sort-by value is the
    <code>{{ getIMenuItemInterfaceKey("value") }}</code> of the first item in
    the
    <code>{{ getSorterPropKey("itemsSource") }}</code>
</p>
<p>
    <code>{{ getSorterPropKey("sortDirection") }}</code> - To specify an initial
    sorting direction, optionally set the
    <code>{{ getSorterPropKey("sortDirection") }}</code> input with a value of
    type
    <code
        ><a
            href="../miscellaneous/enumerations.html#SorterDirection"
            target="_blank"
            >SorterDirection</a
        ></code
    >. By default, the initial sorting direction is
    <code>SorterDirection.ascending</code>.
</p>
<p>
    <code>{{ getSorterPropKey("caption") }}</code> - To specify a caption,
    optionally set the <code>{{ getSorterPropKey("caption") }}</code> input with
    a string value.
</p>

<h3>Sorter Action Output</h3>
<p>
    The sorter responds to user interaction by emitting a
    <code>{{ getSorterPropKey("sorterAction") }}</code> output with an
    <code
        ><a href="../interfaces/ISorterChanges.html" target="_blank"
            >ISorterChanges</a
        ></code
    >
    payload. The
    <code>{{ getISorterChangesInterfaceKey("oldValue") }}</code> and
    <code>{{ getISorterChangesInterfaceKey("newValue") }}</code> in the payload
    are each of type
    <code
        ><a href="../interfaces/ISortedItem.html" target="_blank"
            >ISortedItem</a
        ></code
    >. User actions that trigger the output include changing the sorting
    direction and selecting a new item to sort by. Bind to this output to set a
    new value for the <code>{{ getSorterPropKey("selectedItem") }}</code> input
    and to sort your items according to the payload's
    <code
        >{{ getISorterChangesInterfaceKey("newValue") }}.{{
            getISortedItemInterfaceKey("sortBy")
        }}</code
    >
    value.
</p>

<nui-message type="info" [allowDismiss]="false">
    <strong>Note:</strong> The sorter component does not emit an initial
    sorterAction output. As a result, be sure to perform an initial sorting of
    your items in your component's <code>ngOnInit</code>. Thereafter,
    user-initiated sorting can be handled via your sorterAction output handler.
</nui-message>

<nui-example-wrapper filenamePrefix="sorter-basic" exampleTitle="Simple Sorter">
    <nui-sorter-basic-example></nui-sorter-basic-example>
</nui-example-wrapper>
`;export{o as default};
