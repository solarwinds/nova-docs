import"./chunk-B7O3QC5Z.js";var a=`<h1>Charts Layout</h1>

<h2>Before We Start</h2>
<p>
    You probably know we are not building large hero components any more. They
    turned out to be hard to extend and update, and it was problematic to
    maintain them in general. So our new trend word is
    <code>DECOMPOSITION</code>.
</p>
<p>
    Now, you will have a full access to every part of a complex component. It
    will give you all the power to lay them out and set them up in a way that
    works best for you. It also decreases the risk of breaking super-components
    when we need to change something on a low level.
</p>
<p>
    And, a bright example of our decomposition strategy is the Nova charting
    framework, which we are happy to introduce.
</p>

<h2>OMG! Do I Need To Do All the Layouts MYSELF?!?!?</h2>
<p>Don't panic!</p>
<p>
    We realize that putting it all together can be a nightmare for you, so we
    try to do our best to help you with this.
</p>
<h2>Helper Classes</h2>
<p>
    The chart layout is supposed to be very common and will include the chart
    itself and other optional elements--like axis labels for left, right or
    bottom axis. You can also have the legend located to the right or below the
    chart. Or, maybe a chart without a legend at all?
</p>
<p>
    All you need to do is wrap all your chart stuff into a
    <code>nui-chart-layout</code> classed element. Then, mark your separate
    pieces with the right classes to make them appear in the right spot. Here
    are the class names you can use:
</p>
<ul>
    <li>- <code>chart</code></li>
    <li>- <code>legend</code></li>
    <li>- <code>legend-bottom</code></li>
    <li>- <code>axis-label-left</code></li>
    <li>- <code>axis-label-right</code></li>
    <li>- <code>axis-label-bottom</code></li>
</ul>
<p>Easy! Isn't it?</p>
<p>
    Especially when the order of the elements doesn't matter as long as they are
    wrapped by an element with the <code>nui-chart-layout</code> css class.
</p>
<p>And here is how it's going to look:</p>
<div class="nui-chart-layout highlight-areas m-5">
    <div class="chart"><strong>Chart</strong></div>
    <div class="legend" *ngIf="hasLegend"><strong>Legend</strong></div>
    <div class="legend-bottom" *ngIf="hasLegendBottom">
        <strong>Bottom legend</strong>
    </div>
    <div class="axis-label-left" *ngIf="hasAxisLabelLeft">
        <strong>Left axis label</strong>
    </div>
    <div class="axis-label-right" *ngIf="hasAxisLabelRight">
        <strong>Right axis label</strong>
    </div>
    <div class="axis-label-bottom" *ngIf="hasAxisLabelBottom">
        <strong>Bottom axis label</strong>
    </div>
</div>
<nui-example-code language="html" [code]="intro" />
<div class="d-flex align-items-center code-line px-3">
    <nui-switch [(value)]="hasLegend"></nui-switch>
    <nui-example-code
        language="html"
        [ngClass]="{ 'turned-off': !hasLegend }"
        [code]="getCodeLine('legend', 'Legend')"
    />
</div>
<div class="d-flex align-items-center code-line px-3">
    <nui-switch [(value)]="hasLegendBottom"></nui-switch>
    <nui-example-code
        language="html"
        [ngClass]="{ 'turned-off': !hasLegendBottom }"
        [code]="getCodeLine('legend-bottom', 'Bottom legend')"
    />
</div>
<div class="d-flex align-items-center code-line px-3">
    <nui-switch [(value)]="hasAxisLabelLeft"></nui-switch>
    <nui-example-code
        language="html"
        [ngClass]="{ 'turned-off': !hasAxisLabelLeft }"
        [code]="getCodeLine('axis-label-left', 'Left axis label')"
    />
</div>
<div class="d-flex align-items-center code-line px-3">
    <nui-switch [(value)]="hasAxisLabelRight"></nui-switch>
    <nui-example-code
        language="html"
        [ngClass]="{ 'turned-off': !hasAxisLabelRight }"
        [code]="getCodeLine('axis-label-right', 'Right axis label')"
    />
</div>
<div class="d-flex align-items-center code-line px-3">
    <nui-switch [(value)]="hasAxisLabelBottom"></nui-switch>
    <nui-example-code
        language="html"
        [ngClass]="{ 'turned-off': !hasAxisLabelBottom }"
        [code]="getCodeLine('axis-label-bottom', 'Bottom axis label')"
    />
</div>
<nui-example-code language="html">{{ outro }}</nui-example-code>

<h2>Extensions</h2>

<h3>Chart Overlay</h3>
<p>
    Sometimes it can be useful to have an overlay over the chart area that's
    perfectly centered with the chart. This can be seen in the
    <code
        ><a href="../additional-documentation/chart-types/pie-and-donut"
            >Donut Chart</a
        ></code
    >
    example that shows content nested inside the donut.
</p>
<p>
    To achieve this, consider decorating the <code>chart</code> element with the
    <code>has-overlay</code> class and use the <code>overlay</code> class on the
    child element containing the overlay content.
</p>
<p>It should look like this:</p>
<pre>{{ overlay }}</pre>
`;export{a as default};
