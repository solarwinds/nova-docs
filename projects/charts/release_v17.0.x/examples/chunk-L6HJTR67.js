import"./chunk-7KJRK3NW.js";var i=`<div class="nui-chart-layout">
    <div class="chart" [style.min-height.px]="'500'">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
    </div>
    <div class="legend-bottom">
        <nui-legend
            [interactive]="false"
            orientation="horizontal"
            (mouseleave)="chartAssist.resetVisibleSeries()"
            class="flex-wrap"
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
`;export{i as default};
