import"./chunk-B7O3QC5Z.js";var i=`<nui-legend
    seriesUnitLabel="Mbps"
    i18n-seriesUnitLabel
    [seriesColor]="colors.get(firstSeriesId)"
>
    <nui-legend-series
        descriptionPrimary="Primary Description 1"
        i18n-descriptionPrimary
        descriptionSecondary="Secondary Description 1"
        i18n-descriptionSecondary
    >
        <nui-rich-legend-tile value="15.5">
            <nui-chart-marker
                [marker]="markers.get(firstSeriesId)"
                [color]="colors.get(firstSeriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
    <nui-legend-series
        descriptionPrimary="Primary Description 2"
        i18n-descriptionPrimary
        descriptionSecondary="Secondary Description 2"
        i18n-descriptionSecondary
    >
        <nui-rich-legend-tile
            value="20.8"
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
`;export{i as default};
