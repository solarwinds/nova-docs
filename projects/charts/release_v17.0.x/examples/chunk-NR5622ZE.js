import"./chunk-7KJRK3NW.js";var a=`<div class="d-flex justify-content-center align-items-center flex-wrap">
    <nui-form-field
        class="mb-5 demo__value-input"
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
    <nui-chart class="demo__chart" [chart]="chartAssist.chart"></nui-chart>
</div>
`;export{a as default};
