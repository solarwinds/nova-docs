import"./chunk-B7O3QC5Z.js";var s=`<charts-test-harness>
    <div class="nui-time-frame-bar-test">
        <div
            class="m-5"
            nui-busy
            [busy]="busy"
            style="border: 1px solid lightgrey"
        >
            <nui-time-frame-bar
                [timeFrame]="timeFrame"
                (timeFrameChange)="updateTimeFrame($event)"
                [historyIndex]="history.index"
                [minDate]="fromDate"
                [maxDate]="toDate"
                (undo)="zoomUndo()"
                (clear)="updateTimeFrame()"
                style="display: block; border-bottom: 1px solid lightgrey"
                class="time-frame-bar"
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
                    <nui-chart class="w-100" [chart]="chart"></nui-chart>
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
                            (mouseenter)="
                                chartAssist.emphasizeSeries(legendSeries.id)
                            "
                            [seriesRenderState]="
                                chartAssist.renderStatesIndex[legendSeries.id]
                                    ?.state
                            "
                            [isSelected]="
                                !chartAssist.isSeriesHidden(legendSeries.id)
                            "
                            (isSelectedChange)="
                                chartAssist.toggleSeries(
                                    legendSeries.id,
                                    $event
                                )
                            "
                        >
                            <nui-rich-legend-tile
                                [value]="
                                    chartAssist.getHighlightedValue(
                                        legendSeries,
                                        'y'
                                    )
                                "
                                [backgroundColor]="
                                    chartAssist.palette.standardColors.get(
                                        legendSeries.id
                                    )
                                "
                                [color]="
                                    chartAssist.palette.textColors.get(
                                        legendSeries.id
                                    )
                                "
                            >
                                <nui-chart-marker
                                    rightEdge
                                    [marker]="
                                        chartAssist.markers.get(legendSeries.id)
                                    "
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
        </div>
        <div class="p-5">
            <input
                id="delay"
                name="delay"
                type="checkbox"
                [checked]="addDelay"
                (change)="addDelay = !addDelay"
            />
            <label for="delay" class="pl-2">Add delay to server requests</label>
        </div>
    </div>
</charts-test-harness>
`;export{s as default};
