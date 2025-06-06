import"./chunk-7KJRK3NW.js";var s=`<div
    id="nui-status-chart-with-icons"
    class="container"
    [style.margin-top.px]="50"
>
    <charts-test-harness>
        <!-- 50px top margin to give tooltips space on the top -->
        <div class="d-flex">
            <nui-chart class="d-flex w-100" [chart]="chart"></nui-chart>

            <nui-chart-tooltips
                [plugin]="tooltipsPlugin"
                [template]="tooltipTemplate"
            ></nui-chart-tooltips>

            <ng-template let-dataPoint="dataPoint" #tooltipTemplate>
                <div class="p-1 d-flex align-items-center">
                    <nui-chart-marker
                        [marker]="statusMarkers.get(dataPoint.data.status)"
                    ></nui-chart-marker>
                    <span class="pl-2"
                        ><strong>{{
                            dataPoint.data.status | titlecase
                        }}</strong></span
                    >
                    <span class="pl-2">{{
                        " for " + dataPoint.data.value + " days"
                    }}</span>
                </div>
            </ng-template>
        </div>
    </charts-test-harness>
</div>
`;export{s as default};
