import"./chunk-B7O3QC5Z.js";var r=`<button nui-button (click)="update()" type="button">Refresh</button>
<div class="spark-container mt-5 p-3">
    <div
        *ngFor="let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn"
    >
        <div class="d-flex">
            <nui-chart
                class="w-100"
                [chart]="spark.chart"
                nuiChartCollectionId="1"
            ></nui-chart>
            <div class="d-flex flex-column pl-2">
                <nui-legend-series
                    [interactive]="false"
                    [active]="chartAssist.isLegendActive"
                    [descriptionPrimary]="spark.chartSeriesSet[0].name"
                >
                    <nui-rich-legend-tile
                        unitLabel="sec"
                        [value]="
                            chartAssist.getHighlightedValue(
                                spark.chartSeriesSet[0],
                                'y',
                                'value'
                            )
                        "
                        [backgroundColor]="
                            colorPalette.standardColors.get(
                                spark.chartSeriesSet[0].id
                            )
                        "
                        [color]="
                            colorPalette.textColors.get(
                                spark.chartSeriesSet[0].id
                            )
                        "
                    >
                        <nui-chart-marker
                            [marker]="markers.get(spark.chartSeriesSet[0].id)"
                            [color]="
                                colorPalette.standardColors.get(
                                    spark.chartSeriesSet[0].id
                                )
                            "
                            rightEdge
                        >
                        </nui-chart-marker>
                    </nui-rich-legend-tile>
                </nui-legend-series>
            </div>
        </div>
    </div>
</div>
`;export{r as default};
