import"./chunk-7KJRK3NW.js";var t=`<div class="nui-chart-layout">
    <div class="chart" style="position: relative">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
        <ng-container *ngIf="donutContentPlugin">
            <nui-chart-donut-content [plugin]="donutContentPlugin">
                <div class="nui-text-page">57</div>
                <div class="nui-text-secondary">donuts</div>
            </nui-chart-donut-content>
        </ng-container>
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
                    [value]="legendSeries.data[0]?.value"
                    backgroundColor="transparent"
                >
                </nui-rich-legend-tile>
                <nui-icon [icon]="iconMap[legendSeries.id]"></nui-icon>
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
`;export{t as default};
