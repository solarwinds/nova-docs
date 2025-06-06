import"./chunk-B7O3QC5Z.js";var i=`<nui-legend
    [interactive]="true"
    (mouseleave)="chartAssist.resetVisibleSeries()"
>
    <nui-legend-series
        descriptionPrimary="Basic Tile Primary Description"
        i18n-descriptionPrimary
        (mouseenter)="chartAssist.emphasizeSeries(firstSeriesId)"
        [seriesRenderState]="
            chartAssist.renderStatesIndex[firstSeriesId]?.state
        "
        [isSelected]="!chartAssist.isSeriesHidden(firstSeriesId)"
        (isSelectedChange)="chartAssist.toggleSeries(firstSeriesId, $event)"
    >
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="chartAssist.markers.get(firstSeriesId)"
                [color]="chartAssist.palette.standardColors.get(firstSeriesId)"
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>
    </nui-legend-series>
    <nui-legend-series
        descriptionPrimary="Rich Tile Primary Description"
        i18n-descriptionPrimary
        descriptionSecondary="Rich Tile Secondary Description"
        i18n-descriptionSecondary
        (mouseenter)="chartAssist.emphasizeSeries(secondSeriesId)"
        [seriesRenderState]="
            chartAssist.renderStatesIndex[secondSeriesId]?.state
        "
        [isSelected]="!chartAssist.isSeriesHidden(secondSeriesId)"
        (isSelectedChange)="chartAssist.toggleSeries(secondSeriesId, $event)"
    >
        <nui-rich-legend-tile
            value="23.2"
            unitLabel="Kbps"
            i18n-unitLabel
            [backgroundColor]="
                chartAssist.palette.standardColors.get(secondSeriesId)
            "
        >
            <nui-chart-marker
                [marker]="chartAssist.markers.get(secondSeriesId)"
                [color]="chartAssist.palette.standardColors.get(secondSeriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>
`;export{i as default};
