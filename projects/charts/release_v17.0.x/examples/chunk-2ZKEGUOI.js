import"./chunk-7KJRK3NW.js";var n=`<nui-legend [active]="active">
    <nui-legend-series>
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="markers.get(firstSeriesId)"
                [color]="colors.get(firstSeriesId)"
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>

        <!-- custom description content -->
        <div description class="d-flex align-items-center px-2">
            <nui-icon icon="printer" status="up"></nui-icon>
            <span class="nui-text-default" i18n>Custom Description 1</span>
        </div>
    </nui-legend-series>
    <nui-legend-series>
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="markers.get(secondSeriesId)"
                [color]="colors.get(secondSeriesId)"
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>

        <!-- custom description content -->
        <div description class="d-flex align-items-center px-2">
            <nui-icon icon="port" status="critical"></nui-icon>
            <span class="nui-text-default" i18n>Custom Description 2</span>
        </div>
    </nui-legend-series>
</nui-legend>
<br />
<button class="mt-2" nui-button type="button" (click)="toggleActive()">
    Toggle Active State
</button>
`;export{n as default};
