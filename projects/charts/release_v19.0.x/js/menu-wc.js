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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
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
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-997e8a4cb29b1bd43f881354886817982da7339a853ce11ea5bf8df4d9b851b826f517cca74d09d84e8dd85e4078e62c86ef016ac9336edd3ba99bf3bde5fbe7"' : 'data-bs-target="#xs-additional-page-997e8a4cb29b1bd43f881354886817982da7339a853ce11ea5bf8df4d9b851b826f517cca74d09d84e8dd85e4078e62c86ef016ac9336edd3ba99bf3bde5fbe7"' }>
                                                <span class="link-name">Chart Types</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-997e8a4cb29b1bd43f881354886817982da7339a853ce11ea5bf8df4d9b851b826f517cca74d09d84e8dd85e4078e62c86ef016ac9336edd3ba99bf3bde5fbe7"' : 'id="xs-additional-page-997e8a4cb29b1bd43f881354886817982da7339a853ce11ea5bf8df4d9b851b826f517cca74d09d84e8dd85e4078e62c86ef016ac9336edd3ba99bf3bde5fbe7"' }>
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
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-1ab497327c7d0f1306f59de239bb1509f0609283a3ea671475e71891fd404414008bd2501c8dd05638b1ca35cb26d04de018a874af60655bfdf066af28101e7b"' : 'data-bs-target="#xs-additional-page-1ab497327c7d0f1306f59de239bb1509f0609283a3ea671475e71891fd404414008bd2501c8dd05638b1ca35cb26d04de018a874af60655bfdf066af28101e7b"' }>
                                                <span class="link-name">Plugins</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-1ab497327c7d0f1306f59de239bb1509f0609283a3ea671475e71891fd404414008bd2501c8dd05638b1ca35cb26d04de018a874af60655bfdf066af28101e7b"' : 'id="xs-additional-page-1ab497327c7d0f1306f59de239bb1509f0609283a3ea671475e71891fd404414008bd2501c8dd05638b1ca35cb26d04de018a874af60655bfdf066af28101e7b"' }>
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
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-b8bdd0125e2a65fbe74af4611d0531989c28115ea1c2f07a7b7ded21452610d3b3c6256edad0171d505fbab4979572d855ad3e7c9b63ff574f10c2ed5402197f"' : 'data-bs-target="#xs-additional-page-b8bdd0125e2a65fbe74af4611d0531989c28115ea1c2f07a7b7ded21452610d3b3c6256edad0171d505fbab4979572d855ad3e7c9b63ff574f10c2ed5402197f"' }>
                                                <span class="link-name">Advanced Usage</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-b8bdd0125e2a65fbe74af4611d0531989c28115ea1c2f07a7b7ded21452610d3b3c6256edad0171d505fbab4979572d855ad3e7c9b63ff574f10c2ed5402197f"' : 'id="xs-additional-page-b8bdd0125e2a65fbe74af4611d0531989c28115ea1c2f07a7b7ded21452610d3b3c6256edad0171d505fbab4979572d855ad3e7c9b63ff574f10c2ed5402197f"' }>
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
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});