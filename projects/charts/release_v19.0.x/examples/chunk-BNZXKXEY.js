import"./chunk-B7O3QC5Z.js";var a=`<div class="d-flex justify-content-center align-items-center flex-wrap">
    <div class="demo__inputs">
        <nui-form-field
            class="d-block mb-5"
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
        <nui-checkbox
            class="d-block mb-5"
            [ngModel]="compact"
            (ngModelChange)="onCompactChange($event)"
            i18n
        >
            Compact Thickness
        </nui-checkbox>
    </div>
    <div class="demo__charts d-flex justify-content-between align-items-center">
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
