import"./chunk-B7O3QC5Z.js";var n=`<div class="testing-region d-flex align-items-center justify-content-around">
    <donut-gauge-prototype
        [gaugeConfig]="gaugeConfig"
        [size]="donutSize"
        [annularGrowth]="annularGrowth"
        [annularWidth]="thickness"
    >
    </donut-gauge-prototype>
    <linear-gauge-vertical-prototype
        [gaugeConfig]="gaugeConfig"
    ></linear-gauge-vertical-prototype>
    <linear-gauge-horizontal-prototype
        [gaugeConfig]="gaugeConfig"
    ></linear-gauge-horizontal-prototype>
</div>

<div class="d-flex justify-content-center">
    <div class="column">
        <div class="mb-2">
            <nui-form-field
                caption="Donut Annular Growth"
                hint="Set to zero to have the donut obey the manual thickness setting"
                [showOptionalText]="false"
            >
                <nui-textbox-number
                    type="number"
                    [(ngModel)]="annularGrowth"
                    [minValue]="0"
                    [step]="0.01"
                    customBoxWidth="75px"
                ></nui-textbox-number>
            </nui-form-field>
        </div>
        <div class="mb-2">
            <label for="donutSizeInput"> Donut Size </label>
            <br />
            <nui-textbox-number
                type="number"
                [(ngModel)]="donutSize"
                [minValue]="0"
                [step]="25"
                customBoxWidth="75px"
                name="donutSizeInput"
            ></nui-textbox-number>
        </div>
    </div>
    <div class="column ml-5">
        <div class="mb-2">
            <label for="valueInput"> Value </label>
            <br />
            <nui-textbox-number
                type="number"
                [ngModel]="value"
                (ngModelChange)="onValueChange($event)"
                [minValue]="0"
                [maxValue]="maxValue"
                [step]="valueStep"
                customBoxWidth="75px"
                name="valueInput"
            ></nui-textbox-number>
        </div>
        <div class="mb-2">
            <label for="thicknessInput"> Thickness </label>
            <br />
            <nui-textbox-number
                type="number"
                [ngModel]="thickness"
                (ngModelChange)="onThicknessChange($event)"
                [minValue]="0"
                customBoxWidth="75px"
                name="thicknessInput"
            ></nui-textbox-number>
        </div>
        <div class="mb-2">
            <label for="lowThresholdInput"> Low Threshold </label>
            <br />
            <nui-textbox-number
                type="number"
                [ngModel]="lowThreshold"
                (ngModelChange)="onLowThresholdChange($event)"
                [minValue]="0"
                [maxValue]="highThreshold - valueStep"
                [step]="valueStep"
                customBoxWidth="75px"
                name="lowThresholdInput"
            ></nui-textbox-number>
        </div>
        <div class="mb-2">
            <label for="highThresholdInput"> High Threshold </label>
            <br />
            <nui-textbox-number
                type="number"
                [ngModel]="highThreshold"
                (ngModelChange)="onHighThresholdChange($event)"
                [minValue]="lowThreshold + valueStep"
                [maxValue]="maxValue"
                [step]="valueStep"
                customBoxWidth="75px"
                name="highThresholdInput"
            ></nui-textbox-number>
        </div>
    </div>
    <div class="column ml-5">
        <div class="ml-3">
            <div class="d-flex align-items-center">
                <input
                    id="enable-warning"
                    class="mb-2"
                    type="checkbox"
                    [ngModel]="warningEnabled"
                    (ngModelChange)="onWarningEnabledChange($event)"
                />
                <label class="px-3" for="enable-warning">Warning Enabled</label>
            </div>
        </div>
        <div class="ml-3">
            <div class="d-flex align-items-center">
                <input
                    id="enable-critical"
                    class="mb-2"
                    type="checkbox"
                    [(ngModel)]="criticalEnabled"
                    (ngModelChange)="onCriticalEnabledChange($event)"
                />
                <label class="px-3" for="enable-critical"
                    >Critical Enabled</label
                >
            </div>
        </div>
        <div class="ml-3">
            <div class="d-flex align-items-center">
                <input
                    class="mb-2"
                    type="checkbox"
                    id="enable-markers"
                    [ngModel]="thresholdMarkersEnabled"
                    (ngModelChange)="onEnableThresholdMarkersChange($event)"
                />
                <label class="px-3" for="enable-markers">Markers Enabled</label>
            </div>
        </div>
        <div class="ml-3">
            <div class="d-flex align-items-center">
                <input
                    id="reversed"
                    class="mb-2"
                    type="checkbox"
                    [ngModel]="reversed"
                    (ngModelChange)="onReversedChange($event)"
                />
                <label class="px-3" for="reversed">Reversed</label>
            </div>
        </div>
        <div class="ml-3">
            <div class="d-flex align-items-center">
                <input
                    id="flip-labels"
                    class="mb-2"
                    type="checkbox"
                    [ngModel]="flipLabels"
                    (ngModelChange)="onFlippedChange($event)"
                />
                <label class="px-3" for="flip-labels">Flip Labels</label>
            </div>
        </div>
        <div class="ml-3">
            <div class="d-flex align-items-center">
                <input
                    class="mb-2"
                    type="checkbox"
                    id="dark-theme"
                    [ngModel]="themeSwitcher.isDarkModeEnabledSubject | async"
                    (ngModelChange)="themeSwitcher.setDarkTheme($event)"
                />
                <label class="px-3" for="dark-theme">Dark Theme</label>
            </div>
        </div>
    </div>
</div>
`;export{n as default};
