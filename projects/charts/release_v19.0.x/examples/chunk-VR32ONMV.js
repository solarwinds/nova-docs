import"./chunk-B7O3QC5Z.js";var i=`<nui-chart class="d-flex" [chart]="chartAssist.chart"></nui-chart>
<nui-chart-tooltips
    [plugin]="tooltipsPlugin"
    [template]="donutTooltipTemplate"
></nui-chart-tooltips>

<ng-template let-dataPoint="dataPoint" #donutTooltipTemplate>
    <div class="p-1 d-flex align-items-center">
        <nui-icon [icon]="'status_' + dataPoint.dataSeries.name"></nui-icon>
        <span class="pl-2">{{ dataPoint.data.data | number }}</span>
    </div>
</ng-template>
`;export{i as default};
