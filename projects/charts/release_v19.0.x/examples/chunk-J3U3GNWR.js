import"./chunk-B7O3QC5Z.js";var a=`<nui-chart class="d-flex" [chart]="chartAssist.chart"></nui-chart>

<nui-chart-popover
    [plugin]="popoverPlugin"
    [template]="popoverTemplate"
></nui-chart-popover>

<ng-template #popoverTemplate let-dataPoints="dataPoints">
    <div class="p-2">
        <div *ngFor="let item of dataPoints | keyvalue">
            <strong>{{ item.value.dataSeries.name }}: </strong>
            <code>{{ item.value.data }}</code>
        </div>
    </div>
</ng-template>
`;export{a as default};
