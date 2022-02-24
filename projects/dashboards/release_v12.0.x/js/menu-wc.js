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
                    <a href="index.html" data-type="index-link">@nova-ui/dashboards documentation</a>
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
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/overview.html" data-type="entity-link" data-context-id="additional">Overview</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/getting-started.html" data-type="entity-link" data-context-id="additional">Getting Started</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/anatomy.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-aa58741a48b631ae2fe7d1f5a0fa5fe7"' : 'data-target="#xs-additional-page-aa58741a48b631ae2fe7d1f5a0fa5fe7"' }>
                                                <span class="link-name">Anatomy</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-aa58741a48b631ae2fe7d1f5a0fa5fe7"' : 'id="xs-additional-page-aa58741a48b631ae2fe7d1f5a0fa5fe7"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/anatomy/pizzagna.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Pizzagna</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/anatomy/configurator.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Configurator</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/anatomy/data-sources.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Data Sources</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/tips-and-tricks.html" data-type="entity-link" data-context-id="additional">Tips and Tricks</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/tutorials.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-f94ebd442397b49764f00e4c66ad38f3"' : 'data-target="#xs-additional-page-f94ebd442397b49764f00e4c66ad38f3"' }>
                                                <span class="link-name">Tutorials</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-f94ebd442397b49764f00e4c66ad38f3"' : 'id="xs-additional-page-f94ebd442397b49764f00e4c66ad38f3"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/hello-dashboards.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Hello Dashboards</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/adding-a-data-source.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Adding a Data Source</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/widget-and-dashboard-editing.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Widget and Dashboard Editing</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/persistence.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Persistence</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/widget-creation.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Widget Creation</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/customization.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Customization</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/tutorials/customization/configurator-section.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Configurator Section</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/tutorials/customization/data-source-configurator.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Data Source Configurator</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/tutorials/customization/formatter.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Formatter</a>
                                            </li>
                                            <li class="link for-chapter4">
                                                <a href="additional-documentation/tutorials/customization/formatter/custom-table-formatter.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Custom Table Formatter</a>
                                            </li>
                                            <li class="link for-chapter4">
                                                <a href="additional-documentation/tutorials/customization/formatter/custom-donut-chart-content-formatter.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Custom Donut Chart Content Formatter</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/tutorials/customization/widget.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Widget</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/widget-error-handling.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Widget Error Handling</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/tutorials/dynamic-header-links.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Dynamic Header Links</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/widget-types.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-f47ec7857488bd680cc5085fd0a60b19"' : 'data-target="#xs-additional-page-f47ec7857488bd680cc5085fd0a60b19"' }>
                                                <span class="link-name">Widget Types</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-f47ec7857488bd680cc5085fd0a60b19"' : 'id="xs-additional-page-f47ec7857488bd680cc5085fd0a60b19"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/widget-types/kpi.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">KPI</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/widget-types/kpi/setting-a-background-color.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Setting a Background Color</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/widget-types/kpi/syncing-the-scale-values-of-kpi-tiles.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Syncing the Scale Values of KPI Tiles</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/widget-types/proportional.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Proportional</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/widget-types/proportional/proportional-donut-content-configuration.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Proportional Donut Content Configuration</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/widget-types/table.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Table</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/widget-types/table/table-with-search.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Table with Search</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/widget-types/timeseries.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Timeseries</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/widget-types/embedded-content.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Embedded Content</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/widget-types/drilldown.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Drilldown</a>
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
                                <a href="modules/NuiDashboardConfiguratorModule.html" data-type="entity-link">NuiDashboardConfiguratorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' : 'data-target="#xs-components-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' :
                                            'id="xs-components-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' }>
                                            <li class="link">
                                                <a href="components/ColorPickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ColorPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfiguratorHeadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfiguratorHeadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashwizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashwizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashwizStepComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashwizStepComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DropAreaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefreshRateConfiguratorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshRateConfiguratorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' : 'data-target="#xs-injectables-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' :
                                        'id="xs-injectables-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' }>
                                        <li class="link">
                                            <a href="injectables/ConfiguratorHeadingService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfiguratorHeadingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfiguratorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ConfiguratorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KpiWidgetColorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>KpiWidgetColorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TimeseriesChartPresetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TimeseriesChartPresetService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TimeseriesScalesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TimeseriesScalesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetClonerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WidgetClonerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetConfiguratorSectionCoordinatorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WidgetConfiguratorSectionCoordinatorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetEditorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WidgetEditorService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' : 'data-target="#xs-pipes-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' :
                                            'id="xs-pipes-links-module-NuiDashboardConfiguratorModule-64f07e1eb71c00d39668c9663615afc1"' }>
                                            <li class="link">
                                                <a href="pipes/AddDataPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDataPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FormHeaderIconPipePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormHeaderIconPipePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PizzagnaRootPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PizzagnaRootPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WidgetConfiguratorSectionHeaderPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetConfiguratorSectionHeaderPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WidgetEditorAccordionFormStatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetEditorAccordionFormStatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NuiDashboardsCommonModule.html" data-type="entity-link">NuiDashboardsCommonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' : 'data-target="#xs-components-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' :
                                            'id="xs-components-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' }>
                                            <li class="link">
                                                <a href="components/PreviewOverlayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviewOverlayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetErrorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' : 'data-target="#xs-pipes-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' :
                                            'id="xs-pipes-links-module-NuiDashboardsCommonModule-28a6c85f4ad2aac1de024d49e6f0c9a4"' }>
                                            <li class="link">
                                                <a href="pipes/DashboardUnitConversionPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardUnitConversionPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NuiDashboardsModule.html" data-type="entity-link">NuiDashboardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' : 'data-target="#xs-components-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' :
                                            'id="xs-components-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmbeddedContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmbeddedContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KpiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KpiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListGroupItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListGroupItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListLeafItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListLeafItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListNavigationBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListNavigationBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListWidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProportionalDonutContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProportionalDonutContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StackedAreaChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StackedAreaChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StackedBarChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StackedBarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StackedPercentageAreaChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StackedPercentageAreaChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusBarChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusBarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TilesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeframeSelectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeframeSelectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetBodyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetBodyContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetBodyContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' : 'data-target="#xs-directives-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' :
                                        'id="xs-directives-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' }>
                                        <li class="link">
                                            <a href="directives/DelayedMousePresenceDetectionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DelayedMousePresenceDetectionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/GridsterItemWidgetIdDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">GridsterItemWidgetIdDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/WidgetEditorDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetEditorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' : 'data-target="#xs-injectables-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' :
                                        'id="xs-injectables-links-module-NuiDashboardsModule-6f7a3810cd955c1c7da72ae63c6185cd"' }>
                                        <li class="link">
                                            <a href="injectables/RefresherSettingsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RefresherSettingsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WidgetTypesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WidgetTypesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NuiPizzagnaModule.html" data-type="entity-link">NuiPizzagnaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' : 'data-target="#xs-components-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' :
                                            'id="xs-components-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' }>
                                            <li class="link">
                                                <a href="components/PizzagnaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PizzagnaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' : 'data-target="#xs-directives-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' :
                                        'id="xs-directives-links-module-NuiPizzagnaModule-a2ac8adab4adf9eb611d5445522f0187"' }>
                                        <li class="link">
                                            <a href="directives/ComponentPortalDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ComponentPortalDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AggregatorMetricSelectorConfigurationComponent.html" data-type="entity-link">AggregatorMetricSelectorConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BackgroundColorRulesConfigurationComponent.html" data-type="entity-link">BackgroundColorRulesConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashwizButtonsComponent.html" data-type="entity-link">DashwizButtonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataSourceConfigurationComponent.html" data-type="entity-link">DataSourceConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataSourceConfigurationV2Component.html" data-type="entity-link">DataSourceConfigurationV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/DataSourceErrorComponent.html" data-type="entity-link">DataSourceErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DescriptionConfigurationComponent.html" data-type="entity-link">DescriptionConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DescriptionConfigurationV2Component.html" data-type="entity-link">DescriptionConfigurationV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/DonutContentConfigurationComponent.html" data-type="entity-link">DonutContentConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DonutContentPercentageConfigurationComponent.html" data-type="entity-link">DonutContentPercentageConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DonutContentPercentageFormatterComponent.html" data-type="entity-link">DonutContentPercentageFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DonutContentRawFormatterComponent.html" data-type="entity-link">DonutContentRawFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DonutContentSumFormatterComponent.html" data-type="entity-link">DonutContentSumFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmbeddedContentConfigurationComponent.html" data-type="entity-link">EmbeddedContentConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntityFormattingConfigurationComponent.html" data-type="entity-link">EntityFormattingConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FieldMapperAggregatorConfiguratorComponent.html" data-type="entity-link">FieldMapperAggregatorConfiguratorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormStackComponent.html" data-type="entity-link">FormStackComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GroupingConfigurationComponent.html" data-type="entity-link">GroupingConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconFormatterComponent.html" data-type="entity-link">IconFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfoMessageConfigurationComponent.html" data-type="entity-link">InfoMessageConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/KpiDescriptionConfigurationComponent.html" data-type="entity-link">KpiDescriptionConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/KpiTilesConfigurationComponent.html" data-type="entity-link">KpiTilesConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkConfiguratorComponent.html" data-type="entity-link">LinkConfiguratorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LinkFormatterComponent.html" data-type="entity-link">LinkFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PercentageFormatterComponent.html" data-type="entity-link">PercentageFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PresentationConfigurationComponent.html" data-type="entity-link">PresentationConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PresentationConfigurationV2Component.html" data-type="entity-link">PresentationConfigurationV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/PreviewPlaceholderComponent.html" data-type="entity-link">PreviewPlaceholderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProportionalChartOptionsEditorComponent.html" data-type="entity-link">ProportionalChartOptionsEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProportionalChartOptionsEditorV2Component.html" data-type="entity-link">ProportionalChartOptionsEditorV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/RawFormatterComponent.html" data-type="entity-link">RawFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RefresherConfigurationComponent.html" data-type="entity-link">RefresherConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SiUnitsFormatterComponent.html" data-type="entity-link">SiUnitsFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatusWithIconFormatterComponent.html" data-type="entity-link">StatusWithIconFormatterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableColumnConfigurationComponent.html" data-type="entity-link">TableColumnConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableColumnsConfigurationComponent.html" data-type="entity-link">TableColumnsConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableColumnsConfigurationV2Component.html" data-type="entity-link">TableColumnsConfigurationV2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/TableDataSourceErrorComponent.html" data-type="entity-link">TableDataSourceErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableFiltersEditorComponent.html" data-type="entity-link">TableFiltersEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ThresholdsConfigurationComponent.html" data-type="entity-link">ThresholdsConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeseriesMetadataConfigurationComponent.html" data-type="entity-link">TimeseriesMetadataConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeseriesSeriesCollectionConfigurationComponent.html" data-type="entity-link">TimeseriesSeriesCollectionConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeseriesTileDescriptionConfigurationComponent.html" data-type="entity-link">TimeseriesTileDescriptionConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeseriesTileIndicatorDataConfigurationComponent.html" data-type="entity-link">TimeseriesTileIndicatorDataConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TitleAndDescriptionConfigurationComponent.html" data-type="entity-link">TitleAndDescriptionConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WidgetClonerComponent.html" data-type="entity-link">WidgetClonerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WidgetConfiguratorSectionComponent.html" data-type="entity-link">WidgetConfiguratorSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WidgetEditorComponent.html" data-type="entity-link">WidgetEditorComponent</a>
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
                                <a href="classes/DrilldownDataSourceAdapter.html" data-type="entity-link">DrilldownDataSourceAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormatterRegistryService.html" data-type="entity-link">FormatterRegistryService</a>
                            </li>
                            <li class="link">
                                <a href="classes/KpiDataSourceAdapter.html" data-type="entity-link">KpiDataSourceAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/KpiScaleSyncBrokerBuilder.html" data-type="entity-link">KpiScaleSyncBrokerBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableDataSourceAdapter.html" data-type="entity-link">TableDataSourceAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeseriesDataSourceAdapter.html" data-type="entity-link">TimeseriesDataSourceAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/WindowObject.html" data-type="entity-link">WindowObject</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BaseConverter.html" data-type="entity-link">BaseConverter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BaseLayout.html" data-type="entity-link">BaseLayout</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryChartUtilService.html" data-type="entity-link">CategoryChartUtilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ColorService.html" data-type="entity-link">ColorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComponentRegistryService.html" data-type="entity-link">ComponentRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfiguratorDataSourceManagerService.html" data-type="entity-link">ConfiguratorDataSourceManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfiguratorHeadingService.html" data-type="entity-link">ConfiguratorHeadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashwizService.html" data-type="entity-link">DashwizService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataSourceAdapter.html" data-type="entity-link">DataSourceAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DonutChartFormatterConfiguratorComponent.html" data-type="entity-link">DonutChartFormatterConfiguratorComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DynamicComponentCreator.html" data-type="entity-link">DynamicComponentCreator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventBusDebugger.html" data-type="entity-link">EventBusDebugger</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventRegistryService.html" data-type="entity-link">EventRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormatterConfiguratorComponent.html" data-type="entity-link">FormatterConfiguratorComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenericArrayConverterService.html" data-type="entity-link">GenericArrayConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenericConverterService.html" data-type="entity-link">GenericConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InteractionHandler.html" data-type="entity-link">InteractionHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiColorComparatorsRegistryService.html" data-type="entity-link">KpiColorComparatorsRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiColorPrioritizer.html" data-type="entity-link">KpiColorPrioritizer</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiFormattersRegistryService.html" data-type="entity-link">KpiFormattersRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiScaleSyncBroker.html" data-type="entity-link">KpiScaleSyncBroker</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiSectionConverterService.html" data-type="entity-link">KpiSectionConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiStatusContentFallbackAdapter.html" data-type="entity-link">KpiStatusContentFallbackAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KpiTilesConverterService.html" data-type="entity-link">KpiTilesConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingAdapter.html" data-type="entity-link">LoadingAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PizzagnaBroadcasterService.html" data-type="entity-link">PizzagnaBroadcasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PizzagnaService.html" data-type="entity-link">PizzagnaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PreviewService.html" data-type="entity-link">PreviewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProportionalContentAggregatorsRegistryService.html" data-type="entity-link">ProportionalContentAggregatorsRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProportionalDonutContentFormattersRegistryService.html" data-type="entity-link">ProportionalDonutContentFormattersRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProportionalLegendFormattersRegistryService.html" data-type="entity-link">ProportionalLegendFormattersRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProportionalWidgetChartOptionsConverterService.html" data-type="entity-link">ProportionalWidgetChartOptionsConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProviderRegistryService.html" data-type="entity-link">ProviderRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Refresher.html" data-type="entity-link">Refresher</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchFeatureAddonService.html" data-type="entity-link">SearchFeatureAddonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatusContentFallbackAdapter.html" data-type="entity-link">StatusContentFallbackAdapter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableColumnsConverterService.html" data-type="entity-link">TableColumnsConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableFiltersConverterService.html" data-type="entity-link">TableFiltersConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableFormatterRegistryService.html" data-type="entity-link">TableFormatterRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeframeSerializationService.html" data-type="entity-link">TimeframeSerializationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeseriesMetadataConverterService.html" data-type="entity-link">TimeseriesMetadataConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeseriesSeriesConverterService.html" data-type="entity-link">TimeseriesSeriesConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeseriesTileIndicatorDataConverterService.html" data-type="entity-link">TimeseriesTileIndicatorDataConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TitleAndDescriptionConverterService.html" data-type="entity-link">TitleAndDescriptionConverterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnitTestRegistryService.html" data-type="entity-link">UnitTestRegistryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UrlInteractionHandler.html" data-type="entity-link">UrlInteractionHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VirtualScrollFeatureAddonService.html" data-type="entity-link">VirtualScrollFeatureAddonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetConfigurationService.html" data-type="entity-link">WidgetConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetRemovalService.html" data-type="entity-link">WidgetRemovalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WidgetToDashboardEventProxyService.html" data-type="entity-link">WidgetToDashboardEventProxyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/XYChartComponent.html" data-type="entity-link">XYChartComponent</a>
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
                                <a href="interfaces/AccordionCoordinatorState.html" data-type="entity-link">AccordionCoordinatorState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAddFormattersOptions.html" data-type="entity-link">IAddFormattersOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAggregatorChartData.html" data-type="entity-link">IAggregatorChartData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAggregatorConfiguratorProperties.html" data-type="entity-link">IAggregatorConfiguratorProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBackgroundColorComparator.html" data-type="entity-link">IBackgroundColorComparator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBroadcasterConfig.html" data-type="entity-link">IBroadcasterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBroker.html" data-type="entity-link">IBroker</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrokerUserConfig.html" data-type="entity-link">IBrokerUserConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrokerValue.html" data-type="entity-link">IBrokerValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartAttributes.html" data-type="entity-link">IChartAttributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartOptionViewModel.html" data-type="entity-link">IChartOptionViewModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartPreset.html" data-type="entity-link">IChartPreset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChartTools.html" data-type="entity-link">IChartTools</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComparatorsDict.html" data-type="entity-link">IComparatorsDict</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComponentConfiguration.html" data-type="entity-link">IComponentConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComponentIdPayload.html" data-type="entity-link">IComponentIdPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComponentPortalBundle.html" data-type="entity-link">IComponentPortalBundle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComponentWithLateLoadKey.html" data-type="entity-link">IComponentWithLateLoadKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfigurable.html" data-type="entity-link">IConfigurable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfigurator.html" data-type="entity-link">IConfigurator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfiguratorConverter.html" data-type="entity-link">IConfiguratorConverter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfiguratorForm.html" data-type="entity-link">IConfiguratorForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfiguratorSource.html" data-type="entity-link">IConfiguratorSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConverterFormPartsProperties.html" data-type="entity-link">IConverterFormPartsProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashboard.html" data-type="entity-link">IDashboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashboardBelowFoldLazyLoadingConfig.html" data-type="entity-link">IDashboardBelowFoldLazyLoadingConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashboardPersistenceHandler.html" data-type="entity-link">IDashboardPersistenceHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashwizButtonsComponent.html" data-type="entity-link">IDashwizButtonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashwizComponent.html" data-type="entity-link">IDashwizComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashwizStepComponent.html" data-type="entity-link">IDashwizStepComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashwizStepNavigatedEvent.html" data-type="entity-link">IDashwizStepNavigatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashwizWaitEvent.html" data-type="entity-link">IDashwizWaitEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceBusyPayload.html" data-type="entity-link">IDataSourceBusyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceError.html" data-type="entity-link">IDataSourceError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceOutput.html" data-type="entity-link">IDataSourceOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataSourceOutputPayload.html" data-type="entity-link">IDataSourceOutputPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDonutContentConfig.html" data-type="entity-link">IDonutContentConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDrilldownComponentConfiguration.html" data-type="entity-link">IDrilldownComponentConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDrilldownComponentsConfiguration.html" data-type="entity-link">IDrilldownComponentsConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFieldMapperAggregatorProperties.html" data-type="entity-link">IFieldMapperAggregatorProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatter.html" data-type="entity-link">IFormatter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatterConfigurator.html" data-type="entity-link">IFormatterConfigurator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatterData.html" data-type="entity-link">IFormatterData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatterDefinition.html" data-type="entity-link">IFormatterDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatterDefinitionProperties.html" data-type="entity-link">IFormatterDefinitionProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFormatterProperties.html" data-type="entity-link">IFormatterProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHasChangeDetector.html" data-type="entity-link">IHasChangeDetector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHasComponent.html" data-type="entity-link">IHasComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHasForm.html" data-type="entity-link">IHasForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHeaderLinkProvider.html" data-type="entity-link">IHeaderLinkProvider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInfoMessage.html" data-type="entity-link">IInfoMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInfoMessageProperties.html" data-type="entity-link">IInfoMessageProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionHandlerProperties.html" data-type="entity-link">IInteractionHandlerProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInteractionPayload.html" data-type="entity-link">IInteractionPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IItemConfiguration.html" data-type="entity-link">IItemConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiColorRules.html" data-type="entity-link">IKpiColorRules</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiConfiguration.html" data-type="entity-link">IKpiConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiData.html" data-type="entity-link">IKpiData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiDataSourceAdapterConfiguration.html" data-type="entity-link">IKpiDataSourceAdapterConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiFallbackAdapterProperties.html" data-type="entity-link">IKpiFallbackAdapterProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiFormatterProperties.html" data-type="entity-link">IKpiFormatterProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiFormattersConfiguration.html" data-type="entity-link">IKpiFormattersConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiItemConfiguration.html" data-type="entity-link">IKpiItemConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiThresholdsConfig.html" data-type="entity-link">IKpiThresholdsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKpiWidgetIndicatorData.html" data-type="entity-link">IKpiWidgetIndicatorData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILegendFormat.html" data-type="entity-link">ILegendFormat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILegendPlacementOption.html" data-type="entity-link">ILegendPlacementOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILinkDefinition.html" data-type="entity-link">ILinkDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILinkFormatterData.html" data-type="entity-link">ILinkFormatterData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IListWidgetConfiguration.html" data-type="entity-link">IListWidgetConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavigationBarButtons.html" data-type="entity-link">INavigationBarButtons</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavigationBarConfig.html" data-type="entity-link">INavigationBarConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaletteColor.html" data-type="entity-link">IPaletteColor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPercentageAggregatorProperties.html" data-type="entity-link">IPercentageAggregatorProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPizza.html" data-type="entity-link">IPizza</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPizzagna.html" data-type="entity-link">IPizzagna</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPizzagnaLayer.html" data-type="entity-link">IPizzagnaLayer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPizzagnaProperty.html" data-type="entity-link">IPizzagnaProperty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPortalEnvironment.html" data-type="entity-link">IPortalEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPreviewEventPayload.html" data-type="entity-link">IPreviewEventPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProperties.html" data-type="entity-link">IProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalAggregatorOrigin.html" data-type="entity-link">IProportionalAggregatorOrigin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalDataFieldsConfig.html" data-type="entity-link">IProportionalDataFieldsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalDonutContentAggregator.html" data-type="entity-link">IProportionalDonutContentAggregator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalDonutContentAggregatorDefinition.html" data-type="entity-link">IProportionalDonutContentAggregatorDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalDonutContentAggregatorProperties.html" data-type="entity-link">IProportionalDonutContentAggregatorProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalWidgetChartEditorOptions.html" data-type="entity-link">IProportionalWidgetChartEditorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalWidgetChartOptions.html" data-type="entity-link">IProportionalWidgetChartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalWidgetChartTypeConfiguration.html" data-type="entity-link">IProportionalWidgetChartTypeConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalWidgetConfig.html" data-type="entity-link">IProportionalWidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProportionalWidgetData.html" data-type="entity-link">IProportionalWidgetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProviderConfiguration.html" data-type="entity-link">IProviderConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProviderConfigurationForDisplay.html" data-type="entity-link">IProviderConfigurationForDisplay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProviderProperties.html" data-type="entity-link">IProviderProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRefresherProperties.html" data-type="entity-link">IRefresherProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRegistryAddOptions.html" data-type="entity-link">IRegistryAddOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISearchOnKeyUp.html" data-type="entity-link">ISearchOnKeyUp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISerializableTimeframe.html" data-type="entity-link">ISerializableTimeframe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISetPropertyPayload.html" data-type="entity-link">ISetPropertyPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISiUnitsPrefix.html" data-type="entity-link">ISiUnitsPrefix</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStaticProviders.html" data-type="entity-link">IStaticProviders</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusData.html" data-type="entity-link">IStatusData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableFormatterDefinition.html" data-type="entity-link">ITableFormatterDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableWidgetColumnConfig.html" data-type="entity-link">ITableWidgetColumnConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableWidgetConfig.html" data-type="entity-link">ITableWidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableWidgetSorterConfig.html" data-type="entity-link">ITableWidgetSorterConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITickLabelConfig.html" data-type="entity-link">ITickLabelConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesChartTypeOption.html" data-type="entity-link">ITimeseriesChartTypeOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesDataSourceAdapterConfiguration.html" data-type="entity-link">ITimeseriesDataSourceAdapterConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesItemConfiguration.html" data-type="entity-link">ITimeseriesItemConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesOutput.html" data-type="entity-link">ITimeseriesOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesScaleConfig.html" data-type="entity-link">ITimeseriesScaleConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesScalesConfig.html" data-type="entity-link">ITimeseriesScalesConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesWidgetConfig.html" data-type="entity-link">ITimeseriesWidgetConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesWidgetData.html" data-type="entity-link">ITimeseriesWidgetData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesWidgetSeries.html" data-type="entity-link">ITimeseriesWidgetSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesWidgetSeriesData.html" data-type="entity-link">ITimeseriesWidgetSeriesData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeseriesWidgetStatusData.html" data-type="entity-link">ITimeseriesWidgetStatusData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeSpanOption.html" data-type="entity-link">ITimeSpanOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUrlInteractionHandlerProperties.html" data-type="entity-link">IUrlInteractionHandlerProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IValueChange.html" data-type="entity-link">IValueChange</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidget.html" data-type="entity-link">IWidget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetEditor.html" data-type="entity-link">IWidgetEditor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetErrorDisplayProperties.html" data-type="entity-link">IWidgetErrorDisplayProperties</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetEvent.html" data-type="entity-link">IWidgetEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetMetadata.html" data-type="entity-link">IWidgetMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgets.html" data-type="entity-link">IWidgets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetSearchConfiguration.html" data-type="entity-link">IWidgetSearchConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetSelector.html" data-type="entity-link">IWidgetSelector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetTemplateSelector.html" data-type="entity-link">IWidgetTemplateSelector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetToDashboardEventProxyConfiguration.html" data-type="entity-link">IWidgetToDashboardEventProxyConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetTypeDefinition.html" data-type="entity-link">IWidgetTypeDefinition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NumberValidationParams.html" data-type="entity-link">NumberValidationParams</a>
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