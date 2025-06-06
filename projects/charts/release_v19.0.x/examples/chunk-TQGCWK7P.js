import"./chunk-B7O3QC5Z.js";var i=`<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            seriesUnitLabel="Mbps"
            i18n-seriesUnitLabel
            [active]="chartAssist.isLegendActive"
            [interactive]="true"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <!-- This is the metadata series -->
            <nui-legend-series
                [interactive]="false"
                [descriptionPrimary]="avgSeries['name']"
                (mouseenter)="chartAssist.resetVisibleSeries()"
            >
                <nui-rich-legend-tile
                    [value]="chartAssist.getHighlightedValue(avgSeries, 'y')"
                    backgroundColor="var(--nui-color-brand-six)"
                    color="var(--nui-color-text-light)"
                >
                </nui-rich-legend-tile>
            </nui-legend-series>
            <!-- These are the series displayed on the chart -->
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
                <!-- Specify 'undefined' for the formatter key since we're not applying any special formatting to the data values shown in the legend -->
                <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->
                <nui-rich-legend-tile
                    [value]="
                        chartAssist.getHighlightedValue(
                            legendSeries,
                            'y',
                            undefined,
                            'y1'
                        )
                    "
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
