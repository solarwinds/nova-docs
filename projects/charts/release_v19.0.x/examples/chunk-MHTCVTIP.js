import"./chunk-B7O3QC5Z.js";var s=`<div height="150px" class="d-flex flex-column">
    <nui-chart class="d-flex" [chart]="chart" class="p-2"></nui-chart>
</div>

<nui-chart-tooltips
    [plugin]="tooltipsPlugin"
    [template]="tooltipTemplate"
></nui-chart-tooltips>

<ng-template let-dataPoint="dataPoint" #tooltipTemplate>
    <div class="p-1 d-flex align-items-center">
        <nui-chart-marker
            [marker]="tooltipsStatusMarkers.get(dataPoint.data.status)"
        ></nui-chart-marker>
        <span class="pl-2"
            ><strong>{{ dataPoint.data.status | titlecase }}</strong></span
        >
        <span class="pl-2">{{ " for " + dataPoint.data.value + " days" }}</span>
    </div>
</ng-template>
`;export{s as default};
