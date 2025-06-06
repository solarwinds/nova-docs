import"./chunk-B7O3QC5Z.js";var t=`<charts-test-harness>
    <div class="row">
        <div class="col-md-3">
            <h4>Legend in Default State with Rich Tile</h4>
            <nui-legend class="rich-tile-legend-default-state">
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                    [descriptionSecondary]="data.descriptionSecondary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Legend in Active State with Rich Tile</h4>
            <nui-legend class="rich-tile-legend-active-state" [active]="true">
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                    [descriptionSecondary]="data.descriptionSecondary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Legend in Active State with Rich Tile and Horizontal Orientation
            </h4>
            <nui-legend
                class="rich-tile-horizontal-legend-active-state"
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
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Legend Interactive Mode in Default State with Rich Tile</h4>
            <nui-legend
                class="rich-tile-interactive-legend-default-state"
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
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Legend Interactive Mode in Active State with Rich Tile</h4>
            <nui-legend
                class="rich-tile-interactive-legend-active-state"
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
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Legend Series Render States</h4>
            <nui-legend
                class="legend-series-render-states"
                [interactive]="true"
            >
                <nui-legend-series
                    descriptionPrimary="unselected/hidden"
                    descriptionSecondary="unselected/hidden"
                    seriesRenderState="hidden"
                    [isSelected]="false"
                >
                    <nui-rich-legend-tile
                        value="0"
                        unitLabel="Mbps"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
                <nui-legend-series
                    *ngFor="let renderState of renderStates"
                    [descriptionPrimary]="renderState"
                    [descriptionSecondary]="renderState"
                    [seriesRenderState]="renderState"
                >
                    <nui-rich-legend-tile
                        value="0"
                        unitLabel="Mbps"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4 class="text-style-roboto">Testing Roboto Font</h4>
        </div>
        <div class="col-md-3">
            <h4>Rich Tile Legend Compact Mode</h4>
            <nui-legend class="rich-tile-legend-compact-mode-test">
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Rich Tile Legend Compact Mode Active State</h4>
            <nui-legend
                class="rich-tile-legend-compact-mode-active-state-test"
                [active]="true"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Rich Tile Legend Compact Mode Active State with Horizontal
                Orientation
            </h4>
            <nui-legend
                class="rich-tile-horizontal-legend-compact-mode-active-state-test"
                [active]="true"
                orientation="horizontal"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Rich Tile Legend Compact Interactive Mode</h4>
            <nui-legend
                class="rich-tile-compact-interactive-legend-test"
                [interactive]="true"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Rich Tile Legend Compact Mode with Markers in Active State</h4>
            <nui-legend
                class="rich-tile-compact-interactive-legend-active-state"
                [active]="true"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [unitLabel]="data.unitLabel"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    >
                        <nui-chart-marker
                            [marker]="markers.get(data.seriesId)"
                            [color]="tileBackgroundColor"
                            rightEdge
                        ></nui-chart-marker>
                    </nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Rich Tile Legend with Chart Markers, Icons, and Projected
                Content
            </h4>
            <nui-legend>
                <nui-legend-series>
                    <nui-rich-legend-tile
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    >
                        <div top>15.5</div>
                        <nui-icon
                            iconSize="small"
                            icon="status_up"
                            leftEdge
                        ></nui-icon>
                        <nui-chart-marker
                            [marker]="markers.get('1')"
                            [color]="tileBackgroundColor"
                            rightEdge
                        ></nui-chart-marker>
                    </nui-rich-legend-tile>
                    <div description>
                        <div>Primary Description 1</div>
                    </div>
                </nui-legend-series>
                <nui-legend-series>
                    <nui-rich-legend-tile
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    >
                        <div top>9999k</div>
                        <div bottom>%</div>
                        <nui-icon
                            iconSize="small"
                            icon="status_warning"
                            leftEdge
                        ></nui-icon>
                        <nui-chart-marker
                            [marker]="markers.get('2')"
                            [color]="tileBackgroundColor"
                            rightEdge
                        ></nui-chart-marker>
                    </nui-rich-legend-tile>
                    <div description>
                        <div>Primary Description 2</div>
                        <div>Secondary Description 2</div>
                    </div>
                </nui-legend-series>
                <nui-legend-series>
                    <nui-rich-legend-tile
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    >
                        <div top>15.5</div>
                        <div bottom>Kbps</div>
                        <nui-icon
                            iconSize="small"
                            icon="status_critical"
                            leftEdge
                        ></nui-icon>
                        <nui-chart-marker
                            [marker]="markers.get('3')"
                            [color]="tileBackgroundColor"
                            rightEdge
                        ></nui-chart-marker>
                    </nui-rich-legend-tile>
                    <div description>
                        <div>Primary Description 3</div>
                        <div>Secondary Description 3</div>
                        <div>Tertiary Description 3</div>
                    </div>
                </nui-legend-series>
            </nui-legend>
        </div>
        <div class="col-md-3">
            <h4>Rich Tile Legend Compact Mode No Label</h4>
            <nui-legend class="rich-tile-legend-compact-mode-test">
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Rich Tile Legend Compact Mode Active State No Label</h4>
            <nui-legend
                class="rich-tile-legend-compact-mode-active-state-test"
                [active]="true"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Rich Tile Legend Compact Mode Active State with Horizontal
                Orientation No Label
            </h4>
            <nui-legend
                class="rich-tile-horizontal-legend-compact-mode-active-state-test"
                [active]="true"
                orientation="horizontal"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Rich Tile Legend Compact Interactive Mode No Label</h4>
            <nui-legend
                class="rich-tile-compact-interactive-legend-test"
                [interactive]="true"
            >
                <nui-legend-series *ngFor="let data of seriesData">
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>
            <h4>Legend in Default State with Rich Tile No Label</h4>
            <nui-legend class="rich-tile-legend-default-state">
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>Legend in Active State with Rich Tile No Label</h4>
            <nui-legend class="rich-tile-legend-active-state" [active]="true">
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Legend in Active State with Rich Tile and Horizontal Orientation
                No Label
            </h4>
            <nui-legend
                class="rich-tile-horizontal-legend-active-state"
                [active]="true"
                orientation="horizontal"
            >
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Legend Interactive Mode in Default State with Rich Tile No Label
            </h4>
            <nui-legend
                class="rich-tile-interactive-legend-default-state"
                [interactive]="true"
            >
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>

            <h4>
                Legend Interactive Mode in Active State with Rich Tile No Label
            </h4>
            <nui-legend
                class="rich-tile-interactive-legend-active-state"
                [active]="true"
                [interactive]="true"
            >
                <nui-legend-series
                    *ngFor="let data of seriesData"
                    [descriptionPrimary]="data.descriptionPrimary"
                >
                    <nui-rich-legend-tile
                        [value]="data.value"
                        [backgroundColor]="tileBackgroundColor"
                        [color]="tileColor"
                    ></nui-rich-legend-tile>
                </nui-legend-series>
            </nui-legend>
        </div>
    </div>
</charts-test-harness>
`;export{t as default};
