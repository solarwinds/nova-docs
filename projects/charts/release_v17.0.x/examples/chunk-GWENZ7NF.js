import"./chunk-7KJRK3NW.js";var s=`<div id="nui-demo-bar-chart-vertical-with-legend" class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            [interactive]="false"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of chartAssist.legendSeriesSet;
                    trackBy: chartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries['name'] | titlecase"
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
                    [value]="legendSeries.data"
                    backgroundColor="transparent"
                >
                </nui-rich-legend-tile>
                <nui-icon
                    [icon]="'status_' + legendSeries['name'] | lowercase"
                ></nui-icon>
            </nui-legend-series>
        </nui-legend>
    </div>
</div>
`;export{s as default};
