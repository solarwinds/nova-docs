import"./chunk-7KJRK3NW.js";var i=`<div [style.min-height]="'500px'" class="d-flex flex-column">
    <div class="d-flex flex-fill w-100 h-100">
        <nui-chart class="w-100" [chart]="chart"></nui-chart>
        <div class="d-flex flex-column pl-2">
            <nui-legend
                seriesUnitLabel="Mbps"
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
                        [value]="
                            chartAssist.getHighlightedValue(
                                legendSeries,
                                'y',
                                'value'
                            )
                        "
                        [backgroundColor]="
                            chartAssist.palette.standardColors.get(
                                legendSeries.id
                            )
                        "
                        [color]="
                            chartAssist.palette.textColors.get(legendSeries.id)
                        "
                    >
                        <nui-chart-marker
                            [marker]="markers.get(legendSeries.id)"
                            [color]="
                                chartAssist.palette.standardColors.get(
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
</div>

<div class="d-flex flex-column pt-3">
    <nui-switch
        [value]="useCustomMarkers"
        (valueChange)="onSwitchMarkers($event)"
    >
        Use Custom Markers
    </nui-switch>
    <button nui-button (click)="updateData()" type="button">Refresh</button>
</div>
`;export{i as default};
