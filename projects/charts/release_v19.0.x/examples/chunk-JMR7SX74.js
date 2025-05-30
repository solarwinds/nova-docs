import"./chunk-B7O3QC5Z.js";var a=`<table nui-table [dataSource]="dataSource">
    <ng-container nuiColumnDef="name">
        <th nui-header-cell *nuiHeaderCellDef i18n>Node</th>
        <td nui-cell *nuiCellDef="let element">{{ element.node }}</td>
    </ng-container>

    <ng-container nuiColumnDef="chart">
        <th nui-header-cell *nuiHeaderCellDef i18n>CPU</th>
        <td nui-cell *nuiCellDef="let element">
            <div class="d-flex">
                <nui-chart
                    class="d-flex w-100"
                    [chart]="element.chartAssist.sparks[0].chart"
                ></nui-chart>
                <div class="d-flex flex-column pl-2">
                    <nui-legend-series
                        [interactive]="false"
                        [active]="element.chartAssist.isLegendActive"
                    >
                        <nui-rich-legend-tile
                            unitLabel="sec"
                            i18n-unitLabel
                            [value]="
                                element.chartAssist.getHighlightedValue(
                                    element.chartAssist.sparks[0]
                                        .chartSeriesSet[0],
                                    'y',
                                    'value'
                                )
                            "
                            [backgroundColor]="
                                element.chartAssist.palette.standardColors.get(
                                    element.chartAssist.sparks[0]
                                        .chartSeriesSet[0].id
                                )
                            "
                            [color]="
                                element.chartAssist.palette.textColors.get(
                                    element.chartAssist.sparks[0]
                                        .chartSeriesSet[0].id
                                )
                            "
                        >
                            <nui-chart-marker
                                [marker]="
                                    element.chartAssist.markers.get(
                                        element.chartAssist.sparks[0]
                                            .chartSeriesSet[0].id
                                    )
                                "
                                [color]="
                                    element.chartAssist.palette.standardColors.get(
                                        element.chartAssist.sparks[0]
                                            .chartSeriesSet[0].id
                                    )
                                "
                                rightEdge
                            >
                            </nui-chart-marker>
                        </nui-rich-legend-tile>
                    </nui-legend-series>
                </div>
            </div>

            <!-- this plugin component has to be placed in the table cell template as every chart
                 will have separate positioning data provided through it's plugin -->
            <nui-chart-popover
                [plugin]="element.popoverPlugin"
                [template]="popoverTemplate"
            ></nui-chart-popover>
        </td>
    </ng-container>

    <tr nui-header-row *nuiHeaderRowDef="displayedColumns"></tr>
    <tr nui-row *nuiRowDef="let row; columns: displayedColumns"></tr>
</table>

<!-- It is sufficient to provide a single template definition if the table is using the same popover template for all rows -->
<ng-template #popoverTemplate let-dataPoints="dataPoints">
    <div class="p-3">
        <div *ngFor="let item of dataPoints | keyvalue">
            <strong>{{ item.key }}: </strong>
            <code>{{ item.value.data | json }}</code>
        </div>
    </div>
</ng-template>
`;export{a as default};
