import"./chunk-B7O3QC5Z.js";var a=`<div class="container">
    <charts-test-harness>
        <h3>Donut</h3>
        <div class="d-flex justify-content-around">
            <donut-gauge-tester
                [gaugeConfig]="gaugeConfigs[0]"
                [size]="250"
            ></donut-gauge-tester>
            <donut-gauge-tester
                [gaugeConfig]="gaugeConfigs[1]"
                [size]="300"
            ></donut-gauge-tester>
            <donut-gauge-tester
                id="visual-test-gauge-donut-high-value"
                [gaugeConfig]="gaugeConfigs[2]"
                [size]="350"
            ></donut-gauge-tester>
        </div>
        <h3>Horizontal</h3>
        <div class="d-flex justify-content-around">
            <horizontal-gauge-tester
                [gaugeConfig]="gaugeConfigs[0]"
            ></horizontal-gauge-tester>
            <horizontal-gauge-tester
                id="visual-test-gauge-horizontal-medium-value"
                [gaugeConfig]="gaugeConfigs[1]"
            ></horizontal-gauge-tester>
            <horizontal-gauge-tester
                [gaugeConfig]="gaugeConfigs[2]"
            ></horizontal-gauge-tester>
        </div>
        <h3>Vertical</h3>
        <div class="d-flex justify-content-around">
            <vertical-gauge-tester
                id="visual-test-gauge-vertical-low-value"
                [gaugeConfig]="gaugeConfigs[0]"
            ></vertical-gauge-tester>
            <vertical-gauge-tester
                [gaugeConfig]="gaugeConfigs[1]"
            ></vertical-gauge-tester>
            <vertical-gauge-tester
                [gaugeConfig]="gaugeConfigs[2]"
            ></vertical-gauge-tester>
        </div>
    </charts-test-harness>
    <div class="column ml-3">
        <div class="d-flex align-items-center">
            <input
                id="enable-warning"
                class="mb-2"
                type="checkbox"
                [ngModel]="warningEnabled"
                (ngModelChange)="onWarningEnabledChange($event)"
            />
            <label class="px-3" for="enable-warning">Enable Warning</label>
        </div>
    </div>
</div>
`;export{a as default};
