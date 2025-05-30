import"./chunk-7KJRK3NW.js";var n=`<div class="d-flex flex-column" [style.height]="compact ? '150px' : '500px'">
    <nui-expander>
        <div class="d-flex flex-fill w-100 h-100" style="position: relative">
            <nui-chart class="flex-fill w-100 h-100" [chart]="chart">
            </nui-chart>
            <nui-chart-donut-content [plugin]="contentPlugin">
                <div *ngIf="showContent()">
                    <div class="nui-text-page">57</div>
                    <div class="nui-text-secondary">donuts</div>
                </div>
            </nui-chart-donut-content>
            <div class="d-flex flex-column pl-2">
                <nui-legend
                    seriesUnitLabel="Share"
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
                            chartAssist.renderStatesIndex[legendSeries.id]
                                ?.state
                        "
                        (mouseenter)="
                            chartAssist.emphasizeSeries(legendSeries.id)
                        "
                        [isSelected]="
                            !chartAssist.isSeriesHidden(legendSeries.id)
                        "
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
                                chartAssist.palette.textColors.get(
                                    legendSeries.id
                                )
                            "
                        >
                        </nui-rich-legend-tile>
                    </nui-legend-series>
                </nui-legend>
            </div>
        </div>
    </nui-expander>

    <div class="btn-group">
        <button nui-button (click)="refreshDonut(1)" type="button">
            1 circle donut
        </button>
        <button nui-button (click)="refreshDonut(2)" type="button">
            2 circle donut
        </button>
        <button nui-button (click)="refreshPie()" type="button">Pie</button>
        <button nui-button (click)="refreshPieInteraction()" type="button">
            Refresh and toggle interaction
        </button>
        <button nui-button (click)="compact = !compact" type="button">
            Toggle Size
        </button>
    </div>
</div>
<div class="d-flex flex-column w-25" *ngIf="showContent()">
    <h3>Annular's params</h3>
    <p>
        Setting one of the parameters to 0 will force donut chart to use default
        annular width of 20px. Default width is also configurable.
    </p>
    <span>Donut's width in percents</span
    ><nui-textbox-number
        [value]="15"
        [maxValue]="80"
        (valueChange)="updateWidth($event)"
    ></nui-textbox-number>
    <span>Max donut's width in px</span
    ><nui-textbox-number
        [value]="renderer.config.maxThickness"
        (valueChange)="updatemaxWidth($event)"
    ></nui-textbox-number>
</div>
`;export{n as default};
