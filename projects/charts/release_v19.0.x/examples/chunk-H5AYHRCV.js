import"./chunk-B7O3QC5Z.js";var s=`<nui-time-frame-bar
    [timeFrame]="timeFrame"
    (timeFrameChange)="updateTimeFrame($event)"
    [historyIndex]="history.index"
    [minDate]="fromDate"
    [maxDate]="toDate"
    (undo)="zoomUndo()"
    (clear)="zoomReset()"
>
    <nui-icon icon="calendar" class="pr-3"></nui-icon>
    {{ timeFrame | timeFrame }}
    <nui-quick-picker timeFrameSelection>
        <nui-time-frame-picker></nui-time-frame-picker>
    </nui-quick-picker>
</nui-time-frame-bar>

<div class="nui-chart-layout p-3">
    <div class="axis-label-left nui-text-small">
        <strong i18n>Average CPU load (%)</strong>
    </div>
    <div class="chart">
        <nui-chart class="d-flex w-100 h-100" [chart]="chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            seriesUnitLabel="%"
            [active]="chartAssist.isLegendActive"
            [interactive]="true"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of chartAssist.legendSeriesSet;
                    trackBy: chartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries['name']"
                (mouseenter)="chartAssist.emphasizeSeries(legendSeries.id)"
                [seriesRenderState]="
                    chartAssist.renderStatesIndex[legendSeries.id]?.state
                "
                [isSelected]="!chartAssist.isSeriesHidden(legendSeries.id)"
                (isSelectedChange)="
                    chartAssist.toggleSeries(legendSeries.id, $event)
                "
            >
                <nui-rich-legend-tile
                    [value]="chartAssist.getHighlightedValue(legendSeries, 'y')"
                    [backgroundColor]="
                        chartAssist.palette.standardColors.get(legendSeries.id)
                    "
                    [color]="
                        chartAssist.palette.textColors.get(legendSeries.id)
                    "
                >
                    <nui-chart-marker
                        rightEdge
                        [marker]="chartAssist.markers.get(legendSeries.id)"
                        [color]="
                            chartAssist.palette.standardColors.get(
                                legendSeries.id
                            )
                        "
                    >
                    </nui-chart-marker>
                </nui-rich-legend-tile>
            </nui-legend-series>
        </nui-legend>
    </div>
</div>
`;export{s as default};
