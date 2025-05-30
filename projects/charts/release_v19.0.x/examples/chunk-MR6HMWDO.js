import"./chunk-B7O3QC5Z.js";var r=`<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            seriesUnitLabel="sec"
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
<br />
<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="reversedThresholdsChart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            seriesUnitLabel="sec"
            [active]="reversedThresholdsChartAssist.isLegendActive"
            [interactive]="true"
            (mouseleave)="reversedThresholdsChartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of reversedThresholdsChartAssist.legendSeriesSet;
                    trackBy: reversedThresholdsChartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries['name']"
                (mouseenter)="
                    reversedThresholdsChartAssist.emphasizeSeries(
                        legendSeries.id
                    )
                "
                [seriesRenderState]="
                    reversedThresholdsChartAssist.renderStatesIndex[
                        legendSeries.id
                    ]?.state
                "
                [isSelected]="
                    !reversedThresholdsChartAssist.isSeriesHidden(
                        legendSeries.id
                    )
                "
                (isSelectedChange)="
                    reversedThresholdsChartAssist.toggleSeries(
                        legendSeries.id,
                        $event
                    )
                "
            >
                <nui-rich-legend-tile
                    [value]="
                        reversedThresholdsChartAssist.getHighlightedValue(
                            legendSeries,
                            'y'
                        )
                    "
                    [backgroundColor]="
                        reversedThresholdsChartAssist.palette.standardColors.get(
                            legendSeries.id
                        )
                    "
                    [color]="
                        reversedThresholdsChartAssist.palette.textColors.get(
                            legendSeries.id
                        )
                    "
                >
                    <nui-chart-marker
                        rightEdge
                        [marker]="
                            reversedThresholdsChartAssist.markers.get(
                                legendSeries.id
                            )
                        "
                        [color]="
                            reversedThresholdsChartAssist.palette.standardColors.get(
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
`;export{r as default};
