import"./chunk-B7O3QC5Z.js";var a=`<div class="d-flex align-items-center justify-content-center flex-wrap">
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
    <nui-chart class="demo__chart" [chart]="chartAssist.chart"></nui-chart>
</div>
`;export{a as default};
