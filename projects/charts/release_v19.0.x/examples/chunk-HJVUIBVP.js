import"./chunk-B7O3QC5Z.js";var a=`<div class="d-flex justify-content-center align-items-center flex-wrap">
    <nui-form-field
        class="d-block mb-5 demo__value-input"
        caption="Value"
        i18n-caption
        [showOptionalText]="false"
    >
        <nui-textbox-number
            type="number"
            [ngModel]="value"
            (ngModelChange)="onValueChange($event)"
            [minValue]="0"
            [maxValue]="gaugeConfig.max"
            customBoxWidth="75px"
        ></nui-textbox-number>
    </nui-form-field>
    <div class="d-flex justify-content-between align-items-center">
        <nui-chart
            class="demo__vertical-chart"
            [chart]="verticalChartAssist.chart"
        ></nui-chart>
        <nui-chart
            class="ml-5 demo__horizontal-chart"
            [chart]="horizontalChartAssist.chart"
        ></nui-chart>
    </div>
</div>
`;export{a as default};
