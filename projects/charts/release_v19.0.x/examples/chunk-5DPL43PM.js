import"./chunk-B7O3QC5Z.js";var t=`<div class="container">
    <charts-test-harness>
        <div class="m-5">
            <h4>Sparkline Chart Multiple Test</h4>
            <div class="nui-spark-chart-multiple-test">
                <div
                    *ngFor="
                        let spark of chartAssist.sparks;
                        trackBy: chartAssist.trackByFn
                    "
                >
                    <div class="d-flex">
                        <nui-chart
                            [chart]="spark.chart"
                            nuiChartCollectionId="1"
                        ></nui-chart>
                        <div class="d-flex flex-column pl-2">
                            <nui-legend-series
                                [interactive]="false"
                                [active]="chartAssist.isLegendActive"
                                [descriptionPrimary]="
                                    spark.chartSeriesSet[0].name
                                "
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
                                        chartAssist.palette.standardColors.get(
                                            spark.chartSeriesSet[0].id
                                        )
                                    "
                                    [color]="
                                        chartAssist.palette.textColors.get(
                                            spark.chartSeriesSet[0].id
                                        )
                                    "
                                >
                                    <nui-chart-marker
                                        [marker]="
                                            chartAssist.markers.get(
                                                spark.chartSeriesSet[0].id
                                            )
                                        "
                                        [color]="
                                            chartAssist.palette.standardColors.get(
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
                <input
                    id="data-input"
                    type="text"
                    class="w-100 mt-5"
                    [ngModel]="input"
                    (ngModelChange)="inputChanged($event)"
                />
            </div>
        </div>
        <div class="m-5">
            <h4>Sparkline Chart Multiple series</h4>
            <nui-spark-chart-multiple-example></nui-spark-chart-multiple-example>
        </div>
        <div class="m-5">
            <h4>Sparkline Chart Area Minimal</h4>
            <nui-area-spark-minimal-test></nui-area-spark-minimal-test>
        </div>
        <div class="m-5">
            <h4>Sparkline Chart Area Multiple series</h4>
            <nui-spark-chart-area-multiple-example></nui-spark-chart-area-multiple-example>
        </div>
    </charts-test-harness>
</div>
`;export{t as default};
