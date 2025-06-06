import"./chunk-B7O3QC5Z.js";var i=`<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            [interactive]="true"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of chartAssist.legendSeriesSet;
                    trackBy: chartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries['name']"
                [seriesRenderState]="
                    chartAssist.renderStatesIndex[legendSeries.id]?.state
                "
                (mouseenter)="chartAssist.emphasizeSeries(legendSeries.id)"
                [isSelected]="!chartAssist.isSeriesHidden(legendSeries.id)"
                (isSelectedChange)="
                    chartAssist.toggleSeries(legendSeries.id, $event)
                "
            >
                <nui-rich-legend-tile
                    [value]="legendSeries.data[0]"
                    [backgroundColor]="
                        chartAssist.palette.standardColors.get(legendSeries.id)
                    "
                >
                </nui-rich-legend-tile>
            </nui-legend-series>
        </nui-legend>
    </div>
</div>
`;export{i as default};
