import"./chunk-B7O3QC5Z.js";var t=`<h3>Basic Legend</h3>
<nui-legend id="basic-tile-legend-default-state">
    <nui-legend-series
        *ngFor="let legendSeries of seriesData"
        [descriptionPrimary]="legendSeries.descriptionPrimary"
        [descriptionSecondary]="legendSeries.descriptionSecondary"
    >
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="markers.get(legendSeries.seriesId)"
                [color]="palette.standardColors.get(legendSeries.seriesId)"
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Basic Interactive Legend</h3>
<nui-legend
    id="basic-tile-legend-interactive-state"
    [interactive]="true"
    (mouseleave)="chartAssist.resetVisibleSeries()"
>
    <nui-legend-series
        *ngFor="let legendSeries of seriesData"
        [descriptionPrimary]="legendSeries.descriptionPrimary"
        [descriptionSecondary]="legendSeries.descriptionSecondary"
        [seriesRenderState]="
            chartAssist.renderStatesIndex[legendSeries.seriesId]?.state
        "
        [isSelected]="!chartAssist.isSeriesHidden(legendSeries.seriesId)"
        (isSelectedChange)="
            chartAssist.toggleSeries(legendSeries.seriesId, $event)
        "
        (mouseenter)="chartAssist.emphasizeSeries(legendSeries.seriesId)"
    >
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="markers.get(legendSeries.seriesId)"
                [color]="palette.standardColors.get(legendSeries.seriesId)"
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Legend with Horizontal Orientation</h3>
<nui-legend orientation="horizontal">
    <nui-legend-series
        *ngFor="let data of seriesData"
        [descriptionPrimary]="data.descriptionPrimary"
    >
        <nui-basic-legend-tile>
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                [drawLine]="true"
            ></nui-chart-marker>
        </nui-basic-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend</h3>
<nui-legend id="rich-tile-legend-default-state">
    <nui-legend-series
        *ngFor="let data of seriesData"
        [descriptionPrimary]="data.descriptionPrimary"
        [descriptionSecondary]="data.descriptionSecondary"
    >
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend with Projected Description, Value, and Unit Label</h3>
<nui-legend id="rich-tile-legend-with-projected-description-default-state">
    <nui-legend-series *ngFor="let data of seriesData">
        <nui-rich-legend-tile
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <div value>{{ data.value }}</div>
            <div unitLabel>{{ data.unitLabel }}</div>
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
        <div description>
            <div>{{ data.descriptionPrimary }}</div>
            <div>{{ data.descriptionSecondary }}</div>
        </div>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Compact Mode</h3>
<nui-legend class="rich-tile-legend-compact-mode-test">
    <nui-legend-series *ngFor="let data of seriesData">
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Active State</h3>
<nui-legend class="rich-tile-legend-active-state-test" [active]="true">
    <nui-legend-series
        *ngFor="let data of seriesData"
        [descriptionPrimary]="data.descriptionPrimary"
        [descriptionSecondary]="data.descriptionSecondary"
    >
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Active State with Horizontal Orientation</h3>
<nui-legend
    class="rich-tile-horizontal-legend-active-state-test"
    [active]="true"
    orientation="horizontal"
>
    <nui-legend-series
        *ngFor="let data of seriesData"
        [descriptionPrimary]="data.descriptionPrimary"
        [descriptionSecondary]="data.descriptionSecondary"
    >
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Compact Mode Active State</h3>
<nui-legend
    class="rich-tile-legend-compact-mode-active-state-test"
    [active]="true"
>
    <nui-legend-series *ngFor="let data of seriesData">
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Compact Mode Active State with Horizontal Orientation</h3>
<nui-legend
    class="rich-tile-horizontal-legend-compact-mode-active-state-test"
    [active]="true"
    orientation="horizontal"
>
    <nui-legend-series *ngFor="let data of seriesData">
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Interactive Mode with Icons</h3>
<nui-legend
    id="rich-tile-interactive-legend-test"
    [interactive]="true"
    (mouseleave)="chartAssist.resetVisibleSeries()"
>
    <nui-legend-series
        *ngFor="let data of seriesData"
        [descriptionPrimary]="data.descriptionPrimary"
        [descriptionSecondary]="data.descriptionSecondary"
        [seriesRenderState]="
            chartAssist.renderStatesIndex[data.seriesId]?.state
        "
        [isSelected]="!chartAssist.isSeriesHidden(data.seriesId)"
        (isSelectedChange)="chartAssist.toggleSeries(data.seriesId, $event)"
        (mouseenter)="chartAssist.emphasizeSeries(data.seriesId)"
    >
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-icon
                iconSize="small"
                [icon]="'status_' + data.status"
                leftEdge
            ></nui-icon>
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Compact Interactive Mode</h3>
<nui-legend
    class="rich-tile-compact-interactive-legend-test"
    [interactive]="true"
    (mouseleave)="chartAssist.resetVisibleSeries()"
>
    <nui-legend-series
        *ngFor="let data of seriesData"
        [seriesRenderState]="
            chartAssist.renderStatesIndex[data.seriesId]?.state
        "
        [isSelected]="!chartAssist.isSeriesHidden(data.seriesId)"
        (isSelectedChange)="chartAssist.toggleSeries(data.seriesId, $event)"
        (mouseenter)="chartAssist.emphasizeSeries(data.seriesId)"
    >
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>

<h3>Rich Tile Legend Interactive Mode Active State</h3>
<nui-legend
    class="rich-tile-interactive-legend-active-state-test"
    [active]="true"
    [interactive]="true"
>
    <nui-legend-series
        *ngFor="let data of seriesData"
        [descriptionPrimary]="data.descriptionPrimary"
        [descriptionSecondary]="data.descriptionSecondary"
    >
        <nui-rich-legend-tile
            [value]="data.value"
            [unitLabel]="data.unitLabel"
            [backgroundColor]="palette.standardColors.get(data.seriesId)"
        >
            <nui-chart-marker
                [marker]="markers.get(data.seriesId)"
                [color]="palette.standardColors.get(data.seriesId)"
                rightEdge
            ></nui-chart-marker>
        </nui-rich-legend-tile>
    </nui-legend-series>
</nui-legend>
`;export{t as default};
