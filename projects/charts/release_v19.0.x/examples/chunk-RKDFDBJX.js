import"./chunk-B7O3QC5Z.js";var i=`<div class="d-flex flex-column">
    <div class="d-flex flex-fill w-100 h-100">
        <nui-chart class="w-100" [chart]="chartAssist.chart"></nui-chart>
        <div class="d-flex flex-column pl-2">
            <nui-legend [active]="chartAssist.isLegendActive">
                <nui-legend-series
                    [descriptionPrimary]="legendLabel$ | async | titlecase"
                    descriptionSecondary="Secondary Text"
                    i18n-descriptionSecondary
                >
                    <div
                        class="custom-legend-tile d-flex justify-content-center align-items-center"
                        [ngStyle]="{
                            backgroundColor: legendBackground$ | async
                        }"
                    >
                        <nui-chart-marker
                            [marker]="legendIcon$ | async"
                        ></nui-chart-marker>
                    </div>
                </nui-legend-series>
            </nui-legend>
        </div>
    </div>
</div>
`;export{i as default};
