import"./chunk-B7O3QC5Z.js";var s=`<div>
    <button nui-button (click)="update()" type="button">Refresh</button>
    <button nui-button (click)="compact = !compact" type="button">
        Compact
    </button>
</div>
<hr />
<div class="nui-chart-layout">
    <div class="chart" [style.min-height]="compact ? '150px' : '500px'">
        <nui-chart class="w-100" [chart]="statusChart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            seriesUnitLabel="Mbps"
            [active]="statusChartAssist.isLegendActive"
            [interactive]="true"
            (mouseleave)="statusChartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of statusChartAssist.legendSeriesSet;
                    trackBy: statusChartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries['name']"
                [seriesRenderState]="
                    statusChartAssist.renderStatesIndex[legendSeries.id]?.state
                "
                (mouseenter)="
                    statusChartAssist.emphasizeSeries(legendSeries.id)
                "
                [isSelected]="
                    !statusChartAssist.isSeriesHidden(legendSeries.id)
                "
                (isSelectedChange)="
                    statusChartAssist.toggleSeries(legendSeries.id, $event)
                "
            >
                <nui-rich-legend-tile
                    [backgroundColor]="
                        statusPalette.backgroundColors.get(
                            statusChartAssist.getHighlightedValue(
                                legendSeries,
                                'y'
                            )
                        )
                    "
                >
                    <div
                        class="tilebox__value"
                        [class.tilebox__value--emphasized]="
                            isStatusSignificant(
                                statusChartAssist.getHighlightedValue(
                                    legendSeries,
                                    'y'
                                )
                            )
                        "
                        top
                    >
                        {{
                            statusChartAssist.getHighlightedValue(
                                legendSeries,
                                "y"
                            )
                        }}
                    </div>
                    <nui-icon
                        iconSize="small"
                        [icon]="
                            'status_' +
                            statusChartAssist.getHighlightedValue(
                                legendSeries,
                                'y'
                            )
                        "
                        leftEdge
                    ></nui-icon>
                    <nui-chart-marker
                        [marker]="
                            statusChartAssist.markers.get(legendSeries.id)
                        "
                        [color]="
                            statusChartAssist.palette.standardColors.get(
                                legendSeries.id
                            )
                        "
                        rightEdge
                    ></nui-chart-marker>
                </nui-rich-legend-tile>
            </nui-legend-series>
        </nui-legend>
    </div>
</div>
`;export{s as default};
