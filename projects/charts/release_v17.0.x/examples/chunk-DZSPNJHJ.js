import"./chunk-7KJRK3NW.js";var a=`<nui-chart class="d-flex" [chart]="chart" nuiChartCollectionId="1"></nui-chart>

<nui-chart-popover
    [plugin]="popoverPlugin"
    [template]="popoverTemplate"
></nui-chart-popover>

<ng-template let-dataPoints="dataPoints" #popoverTemplate>
    <div class="p-3">
        <div *ngFor="let item of dataPoints | keyvalue">
            <strong>{{ item.key }}: </strong>
            <code>{{ item.value.data | json }}</code>
        </div>
    </div>
</ng-template>
`;export{a as default};
