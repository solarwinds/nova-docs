import"./chunk-7KJRK3NW.js";var e=`<div class="d-flex">
    <nui-chart
        [style.height.px]="size"
        [style.width.px]="size"
        class="d-block"
        [chart]="chartAssist.chart"
    ></nui-chart>

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
            <div class="content-label">Network Latency</div>
            <div class="content-label">(ms)</div>
        </div>
    </nui-chart-donut-content>
</div>
`;export{e as default};
