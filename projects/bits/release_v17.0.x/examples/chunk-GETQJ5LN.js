import"./chunk-XR34LRGE.js";var i=`<h2>Required Modules</h2>
<ul>
    <li>
        <code>NuiChipsModule</code>
    </li>
</ul>

<h2>Basic Usage</h2>
<p>
    To implement basic <code>nui-chips</code> you need to pass
    <code>[itemsSource]</code> property to <code>nui-chips</code>. As it has
    flat data structure you need to pass your array of items to
    <code>flatItems</code> key of your itemsSource object because it has
    <a href="../interfaces/IChipsItemsSource.html#source" target="_blank"
        >IChipsItemsSource</a
    >
    type. Also you need to pass method to <code>(chipRemoved)</code> output
    which will handle removing chips and some other functionality if you need
    it.
</p>
<p>
    Another thing is that by default there is a link which says "Clear All" and
    by clicking it you can remove all the chips. To make that happen pass method
    to <code>(removeAll)</code> output and clear your itemsSource.You can modify
    the link text by setting the <code>[removeAllLinkText]</code> input, or you
    can turn the feature off by passing false to the
    <code>[allowRemoveAll]</code> input.
</p>
<nui-example-wrapper filenamePrefix="basic-chips" exampleTitle="Basic Usage">
    <nui-basic-chips-example></nui-basic-chips-example>
</nui-example-wrapper>
<h2>Grouped Data</h2>
<p>
    Implementing chips with grouped data is similar to implementing basic
    <code>nui-chips</code> with flat data. You need to pass data as an array of
    <a href="../interfaces/IChipsGroup.html#source" target="_blank"
        >IChipsGroup</a
    >
    and set the <code>(chipRemoved)</code> output and
    <code>(removeAll)</code> if you need it.
</p>
<nui-example-wrapper filenamePrefix="grouped-chips" exampleTitle="Grouped Data">
    <nui-grouped-chips-example></nui-grouped-chips-example>
</nui-example-wrapper>
<h2>Vertical Orientation</h2>
<p>
    Implementing vertical chips is the same as implementing horizontal, you only
    need to pass additional properties such as
    <code>orientation="vertical"</code> and <code>[title]</code>.
</p>
<nui-example-wrapper
    filenamePrefix="vertical-flat-chips"
    exampleTitle="Vertical Flat Data"
>
    <nui-vertical-flat-chips-example></nui-vertical-flat-chips-example>
</nui-example-wrapper>
<nui-example-wrapper
    filenamePrefix="vertical-grouped-chips"
    exampleTitle="Vertical Grouped Data"
>
    <nui-vertical-grouped-chips-example></nui-vertical-grouped-chips-example>
</nui-example-wrapper>
<h2>Autohide</h2>
<p>
    You can reserve space for the component when the itemsSource is empty by
    passing <code>[autoHide]="false"</code> so that when the itemsSource is
    empty then there will remain some space at the position where component was.
    Default value is true.
</p>
<nui-example-wrapper filenamePrefix="autohide-chips" exampleTitle="Autohide">
    <nui-autohide-chips-example></nui-autohide-chips-example>
</nui-example-wrapper>

<h2>Overflow</h2>
<p>
    This example shows how to handle chips overflow by adding a counter at the
    end of the second row, which indicates the number of chips which are
    overflowed instead of creating a new row. For that, you need to add
    <code>#overflowCounterLabel</code> which marks the area with counter and
    popover for incorporating it into <code>nui-chips</code> as Content
    Projection. Set property <code>overflow</code> to <code>true</code> and add
    handler for the <code>chipsOverflowed</code> Output to get overflowed items.
    Set overflowed items to the new property which would be as data source of
    overflowed chips for the <code>nui-chips-overflow</code> component. Add a
    <code>nui-chips-overflowed__counter</code> class with styles for counter
    (see inside chips-overflow.example.component.ts file)<code
        >overflowLinesNumber</code
    >
    is used for limitation of chips rows, 1 by default. You can change it for
    you own needs.
</p>

<nui-example-wrapper filenamePrefix="chips-overflow" exampleTitle="Overflow">
    <nui-chips-overflow-example></nui-chips-overflow-example>
</nui-example-wrapper>

<h2>Custom Css</h2>
<p>To use custom styling for chips use <code>customClass</code> property.</p>
<p>
    You can do that for separate <code>nui-chip</code>,
    <code>nui-chips</code> set or <code>nui-chips</code> group.
</p>
<p>
    It's also possible to use
    <a href="../additional-documentation/nova-styles/tag.html" target="_blank"
        >Nui Tag</a
    >
    classes width styles for chips. To do that, just pass the related style to
    <code>customClass</code>.
</p>
<p>
    To unset <code>max-width</code> on the chip, pass
    <code>unlimited-width</code> to <code>customClass</code>.
</p>
<nui-example-wrapper filenamePrefix="custom-css" exampleTitle="Custom Css">
    <nui-chips-custom-css-example></nui-chips-custom-css-example>
</nui-example-wrapper>
`;export{i as default};
