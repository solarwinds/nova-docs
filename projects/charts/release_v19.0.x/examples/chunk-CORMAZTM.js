import"./chunk-B7O3QC5Z.js";var t=`<div
    *ngFor="let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn"
    class="d-flex"
>
    <nui-chart
        class="w-100"
        [chart]="spark.chart"
        nuiChartCollectionId="example-collection-id"
    ></nui-chart>
    <div class="d-flex flex-column pl-2">
        <nui-legend-series
            *ngIf="spark.chartSeriesSet[0]; let lineSeries"
            [interactive]="false"
            [descriptionSecondary]="lineSeries.name"
        >
            <nui-rich-legend-tile
                [unitLabel]="lineSeries.units"
                [value]="chartAssist.getHighlightedValue(lineSeries, 'y')"
                [backgroundColor]="
                    statusBgColors.get(
                        chartAssist.getHighlightedValue(lineSeries, 'status')
                    )
                "
                [attr.data-title]="
                    chartAssist.getHighlightedValue(lineSeries, 'status')
                "
            >
                <nui-icon
                    *ngIf="
                        chartAssist.getHighlightedValue(lineSeries, 'status');
                        let status
                    "
                    iconSize="small"
                    [icon]="statusIcons[status]"
                    leftEdge
                ></nui-icon>
            </nui-rich-legend-tile>
        </nui-legend-series>
    </div>
</div>
`;export{t as default};
