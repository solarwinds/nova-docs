import"./chunk-B7O3QC5Z.js";var r=`<nui-legend [active]="true">
    <nui-legend-series
        descriptionPrimary="Basic Tile Primary Description"
        i18n-descriptionPrimary
        descriptionSecondary="Basic Tile Secondary Description"
        i18n-descriptionSecondary
    >
        <nui-rich-legend-tile
            value="21.9"
            unitLabel="Mbps"
            [backgroundColor]="colors.get(firstSeriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(firstSeriesId)"
                [color]="colors.get(firstSeriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
    <nui-legend-series
        descriptionPrimary="Rich Tile Primary Description"
        i18n-descriptionPrimary
        descriptionSecondary="Rich Tile Secondary Description"
        i18n-descriptionSecondary
    >
        <nui-rich-legend-tile
            value="11.5"
            unitLabel="Kbps"
            i18n-unitLabel
            [backgroundColor]="colors.get(secondSeriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(secondSeriesId)"
                [color]="colors.get(secondSeriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>
`;export{r as default};
