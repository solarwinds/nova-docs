import"./chunk-B7O3QC5Z.js";var s=`<div class="nui-chart-layout">
    <div class="axis-label-left nui-text-small">
        <strong i18n>Network Traffic, Mbps</strong>
    </div>
    <div class="chart">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
    </div>
    <div class="legend-bottom">
        <nui-legend
            [interactive]="false"
            orientation="horizontal"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of chartAssist.legendSeriesSet;
                    trackBy: chartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries.name"
                (mouseenter)="chartAssist.emphasizeSeries(legendSeries.id)"
            >
                <nui-basic-legend-tile>
                    <nui-chart-marker
                        [drawLine]="false"
                        [marker]="chartAssist.markers.get(legendSeries.id)"
                        [color]="
                            chartAssist.palette.standardColors.get(
                                legendSeries.id
                            )
                        "
                    >
                    </nui-chart-marker>
                </nui-basic-legend-tile>
            </nui-legend-series>
        </nui-legend>
    </div>
</div>

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
        <span class="pl-2">{{ dataPoint.data.value }}</span>
    </div>
</ng-template>
`;export{s as default};
