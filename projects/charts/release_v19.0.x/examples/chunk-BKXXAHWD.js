import"./chunk-B7O3QC5Z.js";var s=`<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart
            class="w-100"
            [chart]="chartAssistTop.chart"
            nuiChartCollectionId="bi-di-stacked-area"
        ></nui-chart>
    </div>
    <div class="legend">
        <ng-container
            *ngTemplateOutlet="legend; context: { chartAssist: chartAssistTop }"
        ></ng-container>
    </div>
</div>
<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart
            class="w-100"
            [chart]="chartAssistBottom.chart"
            nuiChartCollectionId="bi-di-stacked-area"
        ></nui-chart>
    </div>
    <div class="legend">
        <ng-container
            *ngTemplateOutlet="
                legend;
                context: { chartAssist: chartAssistBottom }
            "
        ></ng-container>
    </div>
</div>

<ng-template #legend let-chartAssist="chartAssist">
    <nui-legend
        seriesUnitLabel="Mbps"
        i18n-seriesUnitLabel
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
                onSelectedChange(legendSeries, $event, chartAssist)
            "
        >
            <!-- Specify the 'tick' formatter to display positive values for both series in the legend. -->
            <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->
            <nui-rich-legend-tile
                [value]="
                    chartAssist.getHighlightedValue(
                        legendSeries,
                        'y',
                        'tick',
                        'y1'
                    )
                "
                [backgroundColor]="
                    chartAssist.palette.standardColors.get(legendSeries.id)
                "
                [color]="chartAssist.palette.textColors.get(legendSeries.id)"
            >
                <nui-chart-marker
                    rightEdge
                    [marker]="chartAssist.markers.get(legendSeries.id)"
                    [color]="
                        chartAssist.palette.standardColors.get(legendSeries.id)
                    "
                >
                </nui-chart-marker>
            </nui-rich-legend-tile>
        </nui-legend-series>
    </nui-legend>
</ng-template>
`;export{s as default};
