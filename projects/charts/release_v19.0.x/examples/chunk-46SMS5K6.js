import"./chunk-B7O3QC5Z.js";var i=`<div class="nui-chart-layout">
    <div class="chart d-flex flex-column">
        <nui-chart
            class="w-100"
            [chart]="chartAssist.chart"
            nuiChartCollectionId="collection"
        ></nui-chart>
        <nui-chart
            class="w-100"
            [chart]="summaryChartAssist.chart"
            nuiChartCollectionId="collection"
        ></nui-chart>
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
                [descriptionPrimary]="legendSeries.id"
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
`;export{i as default};
