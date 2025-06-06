import"./chunk-B7O3QC5Z.js";var i=`<div class="nui-chart-layout">
    <div class="axis-label-left nui-text-small">
        <strong i18n>Left axis label</strong>
    </div>
    <div class="axis-label-right nui-text-small">
        <strong i18n>Right axis label</strong>
    </div>
    <div class="axis-label-bottom nui-text-small">
        <strong i18n>Bottom axis label</strong>
    </div>
    <div class="chart">
        <nui-chart class="w-100" [chart]="chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            seriesUnitLabel="ms"
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
                    [value]="
                        chartAssist.getHighlightedValue(
                            legendSeries,
                            'y',
                            'tick'
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
