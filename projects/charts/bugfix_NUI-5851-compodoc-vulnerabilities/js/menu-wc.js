'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@nova-ui/charts documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Examples</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/layout.html" data-type="entity-link" data-context-id="additional">Layout</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/chart-types.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-d71aa64014757d93171f751a148eb509"' : 'data-target="#xs-additional-page-d71aa64014757d93171f751a148eb509"' }>
                                                <span class="link-name">Chart Types</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-d71aa64014757d93171f751a148eb509"' : 'id="xs-additional-page-d71aa64014757d93171f751a148eb509"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/chart-types/line.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Line</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/chart-types/bar.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Bar</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/chart-types/bar/bucketed-bar.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Bucketed Bar</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/chart-types/bar/status.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Status</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/chart-types/bar/waterfall.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Waterfall</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/chart-types/area.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Area</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/chart-types/pie-and-donut.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Pie and Donut</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/chart-types/spark.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Spark</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/chart-types/gauge.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Gauge</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/plugins.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-8f53030ff528cece825ab2e8c4760b98"' : 'data-target="#xs-additional-page-8f53030ff528cece825ab2e8c4760b98"' }>
                                                <span class="link-name">Plugins</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-8f53030ff528cece825ab2e8c4760b98"' : 'id="xs-additional-page-8f53030ff528cece825ab2e8c4760b98"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/plugins/tooltips.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Tooltips</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/plugins/popovers.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Popovers</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/thresholds.html" data-type="entity-link" data-context-id="additional">Thresholds</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/timeframe-selection.html" data-type="entity-link" data-context-id="additional">Timeframe Selection</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/advanced-usage.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-b1594fbec292d7014c6fb48361cd999e"' : 'data-target="#xs-additional-page-b1594fbec292d7014c6fb48361cd999e"' }>
                                                <span class="link-name">Advanced Usage</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-b1594fbec292d7014c6fb48361cd999e"' : 'id="xs-additional-page-b1594fbec292d7014c6fb48361cd999e"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/advanced-usage/chart.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Chart</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/advanced-usage/legend.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Legend</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/advanced-usage/input-structure.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Input Structure</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/advanced-usage/input-structure/data.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Data</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/advanced-usage/input-structure/colors.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Colors</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/advanced-usage/input-structure/markers.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Markers</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/advanced-usage/events.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Events</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/advanced-usage/grid.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Grid</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/advanced-usage/scales.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Scales</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/advanced-usage/scales/domains.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Domains</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/advanced-usage/scales/formatters.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Formatters</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NuiChartsModule.html" data-type="entity-link">NuiChartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' : 'data-target="#xs-components-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' :
                                            'id="xs-components-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' }>
                                            <li class="link">
                                                <a href="components/BasicLegendTileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasicLegendTileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartDonutContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartDonutContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartMarkerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartMarkerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartPopoverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartPopoverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartTooltipComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartTooltipComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartTooltipsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartTooltipsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LegendComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LegendComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LegendSeriesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LegendSeriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RichLegendTileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RichLegendTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' : 'data-target="#xs-directives-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' :
                                        'id="xs-directives-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' }>
                                        <li class="link">
                                            <a href="directives/ChartCollectionIdDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartCollectionIdDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' : 'data-target="#xs-injectables-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' :
                                        'id="xs-injectables-links-module-NuiChartsModule-78e587749c0ab2e21236676f1e06c8aa"' }>
                                        <li class="link">
                                            <a href="injectables/ChartCollectionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChartCollectionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThresholdsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThresholdsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AreaAccessors.html" data-type="entity-link">AreaAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/AreaGridConfig.html" data-type="entity-link">AreaGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/AreaRenderer.html" data-type="entity-link">AreaRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/AxisConfig.html" data-type="entity-link">AxisConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/BandScale.html" data-type="entity-link">BandScale</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarAccessors.html" data-type="entity-link">BarAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarGridConfig.html" data-type="entity-link">BarGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarHighlightStrategy.html" data-type="entity-link">BarHighlightStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarHorizontalGridConfig.html" data-type="entity-link">BarHorizontalGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarRenderer.html" data-type="entity-link">BarRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarSeriesHighlightStrategy.html" data-type="entity-link">BarSeriesHighlightStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarStatusGridConfig.html" data-type="entity-link">BarStatusGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/BarTooltipsPlugin.html" data-type="entity-link">BarTooltipsPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Chart.html" data-type="entity-link">Chart</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartAssist.html" data-type="entity-link">ChartAssist</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartAssistRenderStateData.html" data-type="entity-link">ChartAssistRenderStateData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartDonutContentPlugin.html" data-type="entity-link">ChartDonutContentPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartPalette.html" data-type="entity-link">ChartPalette</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartPlugin.html" data-type="entity-link">ChartPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartPopoverPlugin.html" data-type="entity-link">ChartPopoverPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartTooltipsPlugin.html" data-type="entity-link">ChartTooltipsPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataSeries.html" data-type="entity-link">DataSeries</a>
                            </li>
                            <li class="link">
                                <a href="classes/DimensionConfig.html" data-type="entity-link">DimensionConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/DonutGaugeLabelsPlugin.html" data-type="entity-link">DonutGaugeLabelsPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/DonutGaugeRenderingUtil.html" data-type="entity-link">DonutGaugeRenderingUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/DonutGaugeThresholdsRenderer.html" data-type="entity-link">DonutGaugeThresholdsRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventBus.html" data-type="entity-link">EventBus</a>
                            </li>
                            <li class="link">
                                <a href="classes/GaugeUtil.html" data-type="entity-link">GaugeUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/Grid.html" data-type="entity-link">Grid</a>
                            </li>
                            <li class="link">
                                <a href="classes/GridConfig.html" data-type="entity-link">GridConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/HorizontalBarAccessors.html" data-type="entity-link">HorizontalBarAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionLabelPlugin.html" data-type="entity-link">InteractionLabelPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/InteractionLinePlugin.html" data-type="entity-link">InteractionLinePlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/LegendInteractionAssist.html" data-type="entity-link">LegendInteractionAssist</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineAccessors.html" data-type="entity-link">LineAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinearGaugeLabelsPlugin.html" data-type="entity-link">LinearGaugeLabelsPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinearGaugeThresholdsRenderer.html" data-type="entity-link">LinearGaugeThresholdsRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinearScale.html" data-type="entity-link">LinearScale</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineRenderer.html" data-type="entity-link">LineRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineSelectSeriesInteractionStrategy.html" data-type="entity-link">LineSelectSeriesInteractionStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/MappedValueProvider.html" data-type="entity-link">MappedValueProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarkerUtils.html" data-type="entity-link">MarkerUtils</a>
                            </li>
                            <li class="link">
                                <a href="classes/MissingDataLineRendererConfig.html" data-type="entity-link">MissingDataLineRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoopAccessors.html" data-type="entity-link">NoopAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoopRenderer.html" data-type="entity-link">NoopRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/NoopScale.html" data-type="entity-link">NoopScale</a>
                            </li>
                            <li class="link">
                                <a href="classes/PathMarker.html" data-type="entity-link">PathMarker</a>
                            </li>
                            <li class="link">
                                <a href="classes/PieRenderer.html" data-type="entity-link">PieRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProcessedColorProvider.html" data-type="entity-link">ProcessedColorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadialAccessors.html" data-type="entity-link">RadialAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadialPopoverPlugin.html" data-type="entity-link">RadialPopoverPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadialRenderer.html" data-type="entity-link">RadialRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/RadialTooltipsPlugin.html" data-type="entity-link">RadialTooltipsPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/RectangleAccessors.html" data-type="entity-link">RectangleAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/Renderer.html" data-type="entity-link">Renderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Scale.html" data-type="entity-link">Scale</a>
                            </li>
                            <li class="link">
                                <a href="classes/SequentialChartMarkerProvider.html" data-type="entity-link">SequentialChartMarkerProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/SequentialColorProvider.html" data-type="entity-link">SequentialColorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/SequentialValueProvider.html" data-type="entity-link">SequentialValueProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/SideIndicatorAccessors.html" data-type="entity-link">SideIndicatorAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/SideIndicatorRenderer.html" data-type="entity-link">SideIndicatorRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SparkChartAssist.html" data-type="entity-link">SparkChartAssist</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatusAccessors.html" data-type="entity-link">StatusAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/SvgMarker.html" data-type="entity-link">SvgMarker</a>
                            </li>
                            <li class="link">
                                <a href="classes/TextColorProvider.html" data-type="entity-link">TextColorProvider</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeIntervalScale.html" data-type="entity-link">TimeIntervalScale</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeScale.html" data-type="entity-link">TimeScale</a>
                            </li>
                            <li class="link">
                                <a href="classes/UtilityService.html" data-type="entity-link">UtilityService</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerticalBarAccessors.html" data-type="entity-link">VerticalBarAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/XYAccessors.html" data-type="entity-link">XYAccessors</a>
                            </li>
                            <li class="link">
                                <a href="classes/XYGrid.html" data-type="entity-link">XYGrid</a>
                            </li>
                            <li class="link">
                                <a href="classes/XYGridConfig.html" data-type="entity-link">XYGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/XYRenderer.html" data-type="entity-link">XYRenderer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ZoomPlugin.html" data-type="entity-link">ZoomPlugin</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAccessors.html" data-type="entity-link">IAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAllAround.html" data-type="entity-link">IAllAround</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAreaAccessors.html" data-type="entity-link">IAreaAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAreaDataAccessors.html" data-type="entity-link">IAreaDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAreaRendererConfig.html" data-type="entity-link">IAreaRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAreaSeriesAccessors.html" data-type="entity-link">IAreaSeriesAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAxis.html" data-type="entity-link">IAxis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAxisConfig.html" data-type="entity-link">IAxisConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBandScale.html" data-type="entity-link">IBandScale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBarAccessors.html" data-type="entity-link">IBarAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBarChartConfig.html" data-type="entity-link">IBarChartConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBarDataAccessors.html" data-type="entity-link">IBarDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBarRendererConfig.html" data-type="entity-link">IBarRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBorderConfig.html" data-type="entity-link">IBorderConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBorders.html" data-type="entity-link">IBorders</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChart.html" data-type="entity-link">IChart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartAssist.html" data-type="entity-link">IChartAssist</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartAssistEvent.html" data-type="entity-link">IChartAssistEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartAssistSeries.html" data-type="entity-link">IChartAssistSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartEvent.html" data-type="entity-link">IChartEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartMarker.html" data-type="entity-link">IChartMarker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartPalette.html" data-type="entity-link">IChartPalette</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartPlugin.html" data-type="entity-link">IChartPlugin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartSeries.html" data-type="entity-link">IChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartViewStatusEventPayload.html" data-type="entity-link">IChartViewStatusEventPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataAccessors.html" data-type="entity-link">IDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataPoint.html" data-type="entity-link">IDataPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataPointsPayload.html" data-type="entity-link">IDataPointsPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSeries.html" data-type="entity-link">IDataSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDimensionConfig.html" data-type="entity-link">IDimensionConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDimensions.html" data-type="entity-link">IDimensions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDonutGaugeThresholdsRendererConfig.html" data-type="entity-link">IDonutGaugeThresholdsRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IElementPosition.html" data-type="entity-link">IElementPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEnhancedLineCapConfig.html" data-type="entity-link">IEnhancedLineCapConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatters.html" data-type="entity-link">IFormatters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeConfig.html" data-type="entity-link">IGaugeConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeLabelsConfig.html" data-type="entity-link">IGaugeLabelsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeLabelsPluginConfig.html" data-type="entity-link">IGaugeLabelsPluginConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeThresholdDatum.html" data-type="entity-link">IGaugeThresholdDatum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeThresholdDef.html" data-type="entity-link">IGaugeThresholdDef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeThresholdsConfig.html" data-type="entity-link">IGaugeThresholdsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeThresholdsData.html" data-type="entity-link">IGaugeThresholdsData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGaugeThresholdsRendererConfig.html" data-type="entity-link">IGaugeThresholdsRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGrid.html" data-type="entity-link">IGrid</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGridConfig.html" data-type="entity-link">IGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHasInnerScale.html" data-type="entity-link">IHasInnerScale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHighlightStrategy.html" data-type="entity-link">IHighlightStrategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionCoordinatesPayload.html" data-type="entity-link">IInteractionCoordinatesPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionDataPointEvent.html" data-type="entity-link">IInteractionDataPointEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionDataPointsEvent.html" data-type="entity-link">IInteractionDataPointsEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionPayload.html" data-type="entity-link">IInteractionPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionValues.html" data-type="entity-link">IInteractionValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionValuesPayload.html" data-type="entity-link">IInteractionValuesPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILineAccessors.html" data-type="entity-link">ILineAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILinearGaugeThresholdsRendererConfig.html" data-type="entity-link">ILinearGaugeThresholdsRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILinearScales.html" data-type="entity-link">ILinearScales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILineDataAccessors.html" data-type="entity-link">ILineDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILineRendererConfig.html" data-type="entity-link">ILineRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILineSeriesAccessors.html" data-type="entity-link">ILineSeriesAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMarkerInteractionConfig.html" data-type="entity-link">IMarkerInteractionConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INoopAccessors.html" data-type="entity-link">INoopAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPopoverPluginConfig.html" data-type="entity-link">IPopoverPluginConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPosition.html" data-type="entity-link">IPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRadialAccessors.html" data-type="entity-link">IRadialAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRadialDataAccessors.html" data-type="entity-link">IRadialDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRadialRendererConfig.html" data-type="entity-link">IRadialRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRadialScales.html" data-type="entity-link">IRadialScales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRadialSeriesAccessors.html" data-type="entity-link">IRadialSeriesAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRectangleAccessors.html" data-type="entity-link">IRectangleAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRectangleDataAccessors.html" data-type="entity-link">IRectangleDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRectangleSeriesAccessors.html" data-type="entity-link">IRectangleSeriesAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRenderContainers.html" data-type="entity-link">IRenderContainers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRendererConfig.html" data-type="entity-link">IRendererConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRendererEventPayload.html" data-type="entity-link">IRendererEventPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRenderSeries.html" data-type="entity-link">IRenderSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRenderStateData.html" data-type="entity-link">IRenderStateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRenderStatesIndex.html" data-type="entity-link">IRenderStatesIndex</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IScale.html" data-type="entity-link">IScale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IScaleSVGElement.html" data-type="entity-link">IScaleSVGElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeriesAccessors.html" data-type="entity-link">ISeriesAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISetDomainEventPayload.html" data-type="entity-link">ISetDomainEventPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISideIndicatorAccessors.html" data-type="entity-link">ISideIndicatorAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISideIndicatorDataAccessors.html" data-type="entity-link">ISideIndicatorDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISideIndicatorSeriesAccessors.html" data-type="entity-link">ISideIndicatorSeriesAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISimpleThresholdZone.html" data-type="entity-link">ISimpleThresholdZone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISpark.html" data-type="entity-link">ISpark</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStackMetadata.html" data-type="entity-link">IStackMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStartEndRangeAccessors.html" data-type="entity-link">IStartEndRangeAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusAccessors.html" data-type="entity-link">IStatusAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusDataAccessors.html" data-type="entity-link">IStatusDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITextOverflowArgs.html" data-type="entity-link">ITextOverflowArgs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITickLabelConfig.html" data-type="entity-link">ITickLabelConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITooltipNode.html" data-type="entity-link">ITooltipNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITooltipPosition.html" data-type="entity-link">ITooltipPosition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IValueProvider.html" data-type="entity-link">IValueProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IValueThicknessAccessors.html" data-type="entity-link">IValueThicknessAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IXYDataAccessors.html" data-type="entity-link">IXYDataAccessors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IXYGridConfig.html" data-type="entity-link">IXYGridConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IXYScales.html" data-type="entity-link">IXYScales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IZoneCrossPoint.html" data-type="entity-link">IZoneCrossPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IZoomPluginConfiguration.html" data-type="entity-link">IZoomPluginConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScalesIndex.html" data-type="entity-link">ScalesIndex</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ZoneCross.html" data-type="entity-link">ZoneCross</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});