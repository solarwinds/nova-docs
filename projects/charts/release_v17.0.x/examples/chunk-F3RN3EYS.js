import"./chunk-7KJRK3NW.js";var t=`<div class="nui-chart-layout">
    <div class="chart">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
    </div>
    <div class="legend">
        <nui-legend
            [interactive]="true"
            (mouseleave)="chartAssist.resetVisibleSeries()"
        >
            <nui-legend-series
                *ngFor="
                    let legendSeries of chartAssist.legendSeriesSet;
                    trackBy: chartAssist.seriesTrackByFn
                "
                [descriptionPrimary]="legendSeries['name'] | titlecase"
                (mouseenter)="chartAssist.emphasizeSeries(legendSeries.id)"
                [seriesRenderState]="
                    chartAssist.renderStatesIndex[legendSeries.id]?.state
                "
                [isSelected]="!chartAssist.isSeriesHidden(legendSeries.id)"
                (isSelectedChange)="
                    chartAssist.toggleSeries(legendSeries.id, $event)
                "
            >
                <nui-basic-legend-tile>
                    <nui-chart-marker
                        [marker]="chartAssist.markers.get(legendSeries.id)"
                        [color]="
                            chartAssist.palette.standardColors.get(
                                legendSeries.id
                            )
                        "
                    >
                    </nui-chart-marker>
                </nui-basic-legend-tile>
            </nui-legend-series>
        </nui-legend>
    </div>
</div>
<hr />

<div class="d-flex">
    <div class="d-flex align-items-center">
        <strong>Chart Type:</strong>
        <nui-select
            class="ml-2"
            [itemsSource]="chartTypes"
            [value]="selectedChartType"
            (changed)="updateChartType($event.newValue)"
        ></nui-select>
    </div>

    <div class="d-flex align-items-center ml-3">
        <strong>Event:</strong>
        <nui-select
            [itemsSource]="eventFilters"
            class="ml-2"
            [value]="selectedEvent"
            displayValue="name"
            (changed)="onEventFilterChange($event.newValue)"
        ></nui-select>
    </div>

    <div
        *ngIf="!!selectedInteractionType"
        class="d-flex align-items-center ml-3"
    >
        <strong>Interaction Type:</strong>
        <nui-select
            class="ml-2"
            [itemsSource]="selectedEvent.interactionTypes"
            [value]="selectedInteractionType"
            (changed)="onInteractionTypeChange($event.newValue)"
        ></nui-select>
    </div>
</div>

<div class="mt-3 sampler-output__container">
    <pre>{{ parsedEvent | json }}</pre>
</div>
`;export{t as default};
