import"./chunk-B7O3QC5Z.js";var e=`<nui-chart class="d-flex" [chart]="chartAssist.chart"></nui-chart>

<nui-chart-tooltips
    [plugin]="tooltipsPlugin"
    [template]="tooltipTemplate"
></nui-chart-tooltips>

<ng-template let-dataPoint="dataPoint" #tooltipTemplate>
    <div class="p-1 d-flex align-items-center">
        <nui-chart-marker
            [marker]="chartAssist.markers.get(dataPoint.seriesId)"
            [color]="chartAssist.palette.standardColors.get(dataPoint.seriesId)"
        ></nui-chart-marker>
        <span class="pl-2">{{ dataPoint.data }}</span>
    </div>
</ng-template>
`;export{e as default};
