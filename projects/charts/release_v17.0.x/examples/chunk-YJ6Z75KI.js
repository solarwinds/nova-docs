import"./chunk-7KJRK3NW.js";var a=`<div class="row">
    <div class="p-5 col-6">
        <div class="nui-chart-layout">
            <div class="chart has-overlay">
                <nui-chart
                    class="flex-fill"
                    [chart]="chartAssist1.chart"
                ></nui-chart>
                <div class="overlay flex-column">
                    <div class="nui-text-page">
                        {{ series.map(value).join(" / ") }}
                    </div>
                    <div class="nui-text-secondary">
                        {{ series.map(name).join(" / ") }}
                    </div>
                </div>
            </div>
            <div class="axis-label-bottom nui-text-small" i18n>
                <strong>'overlay' class</strong>
            </div>
        </div>
    </div>
    <div class="p-5 col-6">
        <div class="nui-chart-layout">
            <div class="chart has-overlay">
                <nui-chart
                    class="flex-fill"
                    [chart]="chartAssist2.chart"
                ></nui-chart>
                <nui-chart-donut-content [plugin]="contentPlugin">
                    <div class="nui-text-page">80%</div>
                    <div class="nui-text-secondary" i18n>
                        of this donut is blue
                    </div>
                </nui-chart-donut-content>
            </div>
            <div class="axis-label-bottom nui-text-small" i18n>
                <strong>'nui-chart-donut-content' with plugin</strong>
            </div>
        </div>
    </div>
</div>
`;export{a as default};
