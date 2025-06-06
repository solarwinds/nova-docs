import"./chunk-B7O3QC5Z.js";var t=`<div class="d-flex align-items-center justify-content-center flex-wrap">
    <nui-form-field
        class="d-block mr-5"
        caption="Value"
        i18n-caption
        [showOptionalText]="false"
    >
        <nui-textbox-number
            type="number"
            [ngModel]="gaugeConfig.value"
            (ngModelChange)="onValueChange($event)"
            [minValue]="0"
            [maxValue]="gaugeConfig.max"
            customBoxWidth="75px"
        ></nui-textbox-number>
    </nui-form-field>
    <div class="d-flex">
        <nui-chart class="demo__chart" [chart]="chartAssist.chart"></nui-chart>

        <!-- Inner content template -->
        <nui-chart-donut-content
            style="position: absolute"
            [plugin]="contentPlugin"
        >
            <div
                class="h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center"
            >
                <div class="d-inline-block" nuiZoomContent [zoomRatio]="0.65">
                    {{ gaugeConfig.value | number : "1.0-0" }}
                </div>
                <div class="demo__content-label" i18n>Network Latency</div>
                <div class="demo__content-label" i18n>(ms)</div>
            </div>
        </nui-chart-donut-content>
    </div>
</div>
`;export{t as default};
