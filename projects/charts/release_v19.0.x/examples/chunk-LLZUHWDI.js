import"./chunk-B7O3QC5Z.js";var s=`<h3>
    Legend by
    <nui-radio-group
        class="nui-radio-group-inline"
        [(value)]="mainCategory"
        (valueChange)="updateMainCategory()"
    >
        <nui-radio
            *ngFor="let category of mainCategoryOptions"
            [value]="category"
        >
            {{ category | titlecase }}
        </nui-radio>
    </nui-radio-group>
</h3>
<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            [active]="chartAssist.isLegendActive"
            [interactive]="false"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of chartAssist.legendSeriesSet;
                    trackBy: chartAssist.seriesTrackByFn
                "
                descriptionPrimary="{{ legendSeries.id | titlecase }}"
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
                        accessors.data['value'](
                            legendSeries.data[0],
                            0,
                            null,
                            null
                        )
                    "
                    [backgroundColor]="
                        chartAssist.palette.standardColors.get(legendSeries.id)
                    "
                    [color]="
                        chartAssist.palette.textColors.get(legendSeries.id)
                    "
                >
                </nui-rich-legend-tile>
                <nui-icon
                    [icon]="iconMap[legendSeries.id]"
                    *ngIf="iconMap[legendSeries.id]"
                    class="mt-1 ml-3"
                ></nui-icon>
            </nui-legend-series>
        </nui-legend>
    </div>
    <div class="legend-bottom">
        <nui-radio-group
            class="nui-radio-group-inline"
            [(value)]="chartType"
            (valueChange)="updateChartType()"
        >
            <nui-radio *ngFor="let type of chartTypes" [value]="type">
                {{ type | titlecase }}
            </nui-radio>
        </nui-radio-group>
    </div>
</div>
`;export{s as default};
