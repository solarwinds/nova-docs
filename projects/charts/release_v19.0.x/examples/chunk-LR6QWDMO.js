import"./chunk-B7O3QC5Z.js";var a=`<h1>Grid Configuration</h1>

<p>
    A chart's grid is what defines the area in which the data visualization will
    be rendered. The grid definition includes its dimensions such as margins,
    padding, height, and width. The grid also defines whether the rendered
    content will be interactive. The basic grid is set up with a default
    configuration that should work for the majority of cases. But, if any of the
    its configuration items need adjustment for your particular use case, the
    following examples demonstrate how.
</p>

<h2>Basic Usage</h2>
<p>
    You can preconfigure a grid by by passing an
    <code
        ><a href="../interfaces/IGridConfig.html" target="_blank"
            >IGridConfig</a
        ></code
    >
    to the grid's constructor and then pass the grid instance to the
    <code><a href="../classes/Chart.html" target="_blank">Chart</a></code>
    class's constructor. The code snippets on this page use the
    <code><a href="../classes/XYGrid.html" target="_blank">XYGrid</a></code> and
    <code
        ><a href="../classes/XYGridConfig.html" target="_blank"
            >XYGridConfig</a
        ></code
    >
    as an example.
</p>
<pre>{{ gridInstantiation }}</pre>
<p>
    Alternately, you can change an existing grid instance's configuration by
    accessing it via the chart's
    <code
        ><a href="../classes/Chart.html#getGrid" target="_blank"
            >getGrid</a
        ></code
    >
    method. The grid's configuration can then be set by passing a new
    <code
        ><a href="../interfaces/IGridConfig.html" target="_blank"
            >IGridConfig</a
        ></code
    >
    to its
    <code
        ><a href="../interfaces/IGrid.html#config" target="_blank"
            >config</a
        ></code
    >
    method.
</p>
<pre>{{ gridReconfiguration }}</pre>

<h2>Disabling Interaction</h2>
<p>
    To disable all user interaction on the chart set the grid configuration's
    <code>interactive</code> property to <code>false</code>. If you hover over
    the example below, you can tell that interaction is disabled by the fact
    that no interaction line is shown.
</p>
<nui-example-wrapper
    filenamePrefix="base-grid-disabling-interaction"
    exampleTitle="Disabling Interaction"
>
    <nui-base-grid-disabling-interaction-example></nui-base-grid-disabling-interaction-example>
</nui-example-wrapper>

<h2>Dimensions</h2>
<p>
    To adjust the grid's margins, padding, height, and width, modify the
    <code>dimension</code> property (<code
        ><a href="../classes/DimensionConfig.html" target="_blank"
            >DimensionConfig</a
        ></code
    >) on the grid configuration as described below.
</p>

<h3>Margins</h3>
<p>
    The grid's margins can be adjusted by setting the grid configuration's
    <code>dimension.margin</code> property with an
    <code
        ><a href="../interfaces/IAllAround.html" target="_blank"
            >IAllAround&lt;number&gt;</a
        ></code
    >
    value or by setting one of the margin number values directly, e.g.
    <code>gridConfig.dimension.margin.top = 15</code>.
</p>

<p>The default values for the XYGridConfig margin are:</p>
<pre>{{ defaultMargins | json }}</pre>
<nui-example-wrapper filenamePrefix="base-grid-margins" exampleTitle="Margins">
    <nui-base-grid-margins-example></nui-base-grid-margins-example>
</nui-example-wrapper>
<p>
    In addition to being able to specify the grid's margins manually, you can
    set the grid to automatically adjust its margins based on the tick label
    width. For example, set
    <code>axis.bottom.fit</code> to true to adjust the grid's horizontal margins
    so that the bottom axis tick labels are not cropped on the left or right.
    And, set <code>axis.left.fit</code> to true to adjust the grid's left margin
    to prevent the left axis tick labels from getting cropped on their left
    side.
</p>
<nui-example-wrapper
    filenamePrefix="base-grid-auto-margins"
    exampleTitle="Auto Margins"
>
    <nui-base-grid-auto-margins-example></nui-base-grid-auto-margins-example>
</nui-example-wrapper>

<h3>Padding</h3>
<p>
    The grid's padding can be adjusted by setting the grid configuration's
    <code>dimension.padding</code> property with an
    <code
        ><a href="../interfaces/IAllAround.html" target="_blank"
            >IAllAround&lt;number&gt;</a
        ></code
    >
    value or by setting one of the padding number values directly, e.g.
    <code>gridConfig.dimension.padding.top = 15</code>.
</p>
<nui-example-wrapper filenamePrefix="base-grid-padding" exampleTitle="Padding">
    <nui-base-grid-padding-example></nui-base-grid-padding-example>
</nui-example-wrapper>

<h3>Height and Width</h3>
<p>
    The grid's height and/or width can be adjusted by first setting the grid
    configuration's
    <code>dimension.autoHeight</code> and/or
    <code>dimension.autoWidth</code> properties to false. With auto-height
    and/or auto-width disabled, you can then use the
    <code
        ><a href="../classes/DimensionConfig.html#height" target="_blank"
            >height</a
        ></code
    >
    and
    <code
        ><a href="../classes/DimensionConfig.html#width" target="_blank"
            >width</a
        ></code
    >
    methods on the grid configuration's <code>dimension</code> property to
    adjust the height and width.
</p>
<nui-example-wrapper
    filenamePrefix="base-grid-height-and-width"
    exampleTitle="Height and Width"
>
    <nui-base-grid-height-and-width-example></nui-base-grid-height-and-width-example>
</nui-example-wrapper>
`;export{a as default};
