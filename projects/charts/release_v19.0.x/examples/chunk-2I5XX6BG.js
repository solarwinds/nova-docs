import"./chunk-B7O3QC5Z.js";var e=`<div class="d-flex">
    <nui-chart class="chart d-block" [chart]="chartAssist.chart"></nui-chart>

    <nui-chart-donut-content
        style="position: absolute"
        [plugin]="contentPlugin"
    >
        <div
            class="h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center"
        >
            <div class="d-inline-block" nuiZoomContent [zoomRatio]="0.65">
                {{ gaugeConfig.value | unitConversion : 2 : false : "generic" }}
            </div>
            <div class="content-label">Network Latency</div>
            <div class="content-label">(ms)</div>
        </div>
    </nui-chart-donut-content>
</div>
`;export{e as default};
