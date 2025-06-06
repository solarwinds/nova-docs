import"./chunk-7KJRK3NW.js";var i=`<nui-chart class="d-flex" [chart]="chart"></nui-chart>
<nui-legend
    seriesUnitLabel="sec"
    i18n-seriesUnitLabel
    [interactive]="true"
    (mouseleave)="chartAssist.resetVisibleSeries()"
    orientation="horizontal"
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
        (isSelectedChange)="chartAssist.toggleSeries(legendSeries.id, $event)"
    >
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="chartAssist.markers.get(legendSeries.id)"
                [color]="
                    chartAssist.palette.standardColors.get(legendSeries.id)
                "
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>
    </nui-legend-series>
</nui-legend>
`;export{i as default};
