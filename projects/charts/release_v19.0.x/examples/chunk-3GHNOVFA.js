import"./chunk-B7O3QC5Z.js";var a=`<div class="nui-line-chart-stacked-test">
    <nui-chart
        [nuiChartCollectionId]="collectionId"
        class="d-flex"
        [chart]="chart1"
    ></nui-chart>
    <nui-chart
        [nuiChartCollectionId]="collectionId"
        class="d-flex"
        [chart]="chart2"
    ></nui-chart>
    <nui-chart
        [nuiChartCollectionId]="collectionId"
        class="d-flex"
        [chart]="chart3"
    ></nui-chart>
    <p>
        <nui-switch (valueChange)="onSyncUpdate($event)"
            >Synchronize Chart Cursor</nui-switch
        >
    </p>
    <p>
        <input
            id="data-input"
            type="text"
            class="w-100 mt-5"
            [ngModel]="input"
            (ngModelChange)="inputChanged($event)"
        />
        <button nui-button (click)="generateRandomData()">
            Generate Random Data
        </button>
    </p>
</div>
`;export{a as default};
