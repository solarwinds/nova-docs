import"./chunk-7KJRK3NW.js";var h=`<div [style.min-height]="150" *ngFor="let myChart of myCharts; let i = index">
    <div class="d-flex w-100 h-100">
        <nui-chart
            class="w-100"
            nuiChartCollectionId="1"
            [chart]="myChart.chart"
        ></nui-chart>
    </div>
    <nui-divider *ngIf="myCharts.length - 1 > i"></nui-divider>
</div>
`;export{h as default};
