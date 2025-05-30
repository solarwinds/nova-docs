import"./chunk-B7O3QC5Z.js";var n=`<h2>Automatic Y domain</h2>
<div height="150px" class="d-flex flex-column">
    <nui-chart
        class="w-100"
        nuiChartCollectionId="1"
        [chart]="charts[0]"
    ></nui-chart>
</div>

<h2>Automatic Y domain with inclusion of &lt;-40, 160&gt; interval</h2>
<div height="150px" class="d-flex flex-column">
    <nui-chart
        class="w-100"
        nuiChartCollectionId="1"
        [chart]="charts[1]"
    ></nui-chart>
</div>

<h2>Automatic Y domain with inclusion of the 0 value</h2>
<div height="150px" class="d-flex flex-column">
    <nui-chart
        class="w-100"
        nuiChartCollectionId="1"
        [chart]="charts[2]"
    ></nui-chart>
</div>

<div>
    <button nui-button (click)="refresh()" type="button">Refresh</button>
    <button nui-button (click)="fixDomain()" type="button">Fix X domain</button>
    <button nui-button (click)="resetDomain()" type="button">
        Reset X domain
    </button>
</div>
`;export{n as default};
