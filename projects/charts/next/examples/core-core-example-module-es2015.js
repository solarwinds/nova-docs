(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-core-example-module"],{

/***/ "00YE":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/core/domain/chart-domain.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Automatic Y domain</h2>\n<div height=\"150px\" class=\"d-flex flex-column\">\n    <nui-chart class=\"w-100\" nuiChartCollectionId=\"1\" [chart]=\"charts[0]\"></nui-chart>\n</div>\n\n<h2>Automatic Y domain with inclusion of &lt;-40, 160&gt; interval</h2>\n<div height=\"150px\" class=\"d-flex flex-column\">\n    <nui-chart class=\"w-100\" nuiChartCollectionId=\"1\" [chart]=\"charts[1]\"></nui-chart>\n</div>\n\n<h2>Automatic Y domain with inclusion of the 0 value</h2>\n<div height=\"150px\" class=\"d-flex flex-column\">\n    <nui-chart class=\"w-100\" nuiChartCollectionId=\"1\" [chart]=\"charts[2]\"></nui-chart>\n</div>\n\n<div>\n    <button nui-button\n            (click)=\"refresh()\"\n            type=\"button\">Refresh\n    </button>\n    <button nui-button\n            (click)=\"fixDomain()\"\n            type=\"button\">Fix X domain\n    </button>\n    <button nui-button\n            (click)=\"resetDomain()\"\n            type=\"button\">Reset X domain\n    </button>\n</div>\n");

/***/ }),

/***/ "2yUe":
/*!***********************************************************************************************!*\
  !*** ./examples/components/demo/development/core/event-bus/chart-event-bus-test.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChartEventBusTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartEventBusTestComponent", function() { return ChartEventBusTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_event_bus_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-event-bus-test.component.html */ "eGcj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "BkRI");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/each */ "xkGU");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/includes */ "ijCd");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../data-generator */ "kBc7");









/**
 * This is here just to test a prototype of angular component, that will use new chart core
 *
 * @ignore
 */
let ChartEventBusTestComponent = class ChartEventBusTestComponent {
    constructor(logger, changeDetector) {
        this.logger = logger;
        this.changeDetector = changeDetector;
        this.parsedEvents = [];
        this.eventFilters = [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MOUSE_ACTIVE_EVENT"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_DATA_POINTS_EVENT"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_DATA_POINT_EVENT"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_SERIES_EVENT"],
        ];
        this.interactionTypeFilters = [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click,
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove,
        ];
    }
    isEventFilterChecked(filter) {
        return this.selectedEventFilters.indexOf(filter) > -1;
    }
    onEventFilterChange(filters) {
        this.selectedEventFilters = filters;
    }
    isInteractionTypeFilterChecked(filter) {
        return this.selectedInteractionTypeFilters.indexOf(filter) > -1;
    }
    onInteractionTypeFilterChange(filters) {
        this.selectedInteractionTypeFilters = filters;
    }
    ngOnInit() {
        const gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGridConfig"]();
        gridConfig.cursor = "pointer";
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](gridConfig));
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.chart);
        this.selectAllFilters();
        this.chartAssist.update(this.generateDataSeriesSet(2));
        lodash_each__WEBPACK_IMPORTED_MODULE_6___default()(this.eventFilters, eventName => {
            this.chart.getEventBus().getStream(eventName).subscribe((event) => {
                if (lodash_includes__WEBPACK_IMPORTED_MODULE_7___default()(this.selectedEventFilters, eventName)) {
                    if (!event.data.interactionType || lodash_includes__WEBPACK_IMPORTED_MODULE_7___default()(this.selectedInteractionTypeFilters, event.data.interactionType)) {
                        this.logger.info("EVENT:", eventName, "DATA:", event.data);
                        this.parsedEvents.unshift(`Event: "${eventName}" Data: ${JSON.stringify(event.data)}`);
                        this.parsedEvents = this.parsedEvents.slice(0, 10);
                        this.changeDetector.markForCheck();
                    }
                }
            });
        });
    }
    selectAllFilters() {
        this.selectedEventFilters = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(this.eventFilters);
        this.selectedInteractionTypeFilters = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(this.interactionTypeFilters);
    }
    deselectAllFilters() {
        this.selectedEventFilters = [];
        this.selectedInteractionTypeFilters = [];
    }
    generateDataSeriesSet(dataSeriesCount) {
        const seriesSet = _data_generator__WEBPACK_IMPORTED_MODULE_8__["DataGenerator"].generateMockTimeLineSeriesSet(dataSeriesCount, 40);
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"](),
        };
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]({
            interactionStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineSelectSeriesInteractionStrategy"](),
        });
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"]();
        return seriesSet.map(dataSeries => (Object.assign(Object.assign({}, dataSeries), { scales,
            renderer,
            accessors })));
    }
};
ChartEventBusTestComponent.ctorParameters = () => [
    { type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ChartEventBusTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-event-bus-test",
        template: _raw_loader_chart_event_bus_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["LoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], ChartEventBusTestComponent);



/***/ }),

/***/ "BNJ9":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/core/chart/chart.example.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <button nui-button\n            (click)=\"update()\"\n            type=\"button\">Refresh\n    </button>\n    <button nui-button\n            (click)=\"compact = !compact\"\n            type=\"button\">Compact\n    </button>\n</div>\n<hr />\n<div class=\"nui-chart-layout\">\n    <div class=\"chart\" [style.min-height]=\"compact ? '150px' : '500px'\">\n        <nui-chart class=\"w-100\" [chart]=\"statusChart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"Mbps\"\n                    [active]=\"statusChartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"statusChartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of statusChartAssist.legendSeriesSet; trackBy: statusChartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               [seriesRenderState]=\"statusChartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"statusChartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!statusChartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"statusChartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [backgroundColor]=\"statusPalette.backgroundColors.get(statusChartAssist.getHighlightedValue(legendSeries, 'y'))\">\n                    <div class=\"tilebox__value\"\n                         [class.tilebox__value--emphasized]=\"isStatusSignificant(statusChartAssist.getHighlightedValue(legendSeries, 'y'))\"\n                         top>\n                        {{statusChartAssist.getHighlightedValue(legendSeries, 'y')}}\n                    </div>\n                    <nui-icon iconSize=\"small\"\n                              [icon]=\"'status_' + statusChartAssist.getHighlightedValue(legendSeries, 'y')\"\n                              leftEdge></nui-icon>\n                    <nui-chart-marker [marker]=\"statusChartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"statusChartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      rightEdge></nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n");

/***/ }),

/***/ "KhLy":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/core/markers/chart-markers.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [style.min-height]=\"'500px'\" class=\"d-flex flex-column\">\n    <div class=\"d-flex flex-fill w-100 h-100\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n        <div class=\"d-flex flex-column pl-2\">\n            <nui-legend seriesUnitLabel=\"Mbps\"\n                        [active]=\"chartAssist.isLegendActive\"\n                        [interactive]=\"true\"\n                        (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n                <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                                   [descriptionPrimary]=\"legendSeries['name']\"\n                                   [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                                   (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                                   [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                                   (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                    <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', 'value')\"\n                                          [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                          [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                        <nui-chart-marker [marker]=\"markers.get(legendSeries.id)\"\n                                          [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                          rightEdge></nui-chart-marker>\n                    </nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n        </div>\n    </div>\n</div>\n\n<div class=\"d-flex flex-column pt-3\">\n    <nui-switch [value]=\"useCustomMarkers\" (valueChange)=\"onSwitchMarkers($event)\">\n        Use Custom Markers\n    </nui-switch>\n    <button nui-button\n            (click)=\"updateData()\"\n            type=\"button\">Refresh\n    </button>\n</div>\n");

/***/ }),

/***/ "PhPh":
/*!**************************************************************************!*\
  !*** ./examples/components/demo/development/core/core-example.module.ts ***!
  \**************************************************************************/
/*! exports provided: CoreExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreExampleModule", function() { return CoreExampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _chart_chart_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/chart.example.component */ "bwYM");
/* harmony import */ var _domain_chart_domain_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/chart-domain.example.component */ "av9s");
/* harmony import */ var _event_bus_chart_event_bus_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-bus/chart-event-bus-test.component */ "2yUe");
/* harmony import */ var _markers_chart_markers_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./markers/chart-markers.example.component */ "oAtN");










const coreRoutes = [
    {
        path: "chart",
        component: _chart_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["ChartExampleComponent"],
    },
    {
        path: "domain",
        component: _domain_chart_domain_example_component__WEBPACK_IMPORTED_MODULE_7__["ChartDomainExampleComponent"],
    },
    {
        path: "markers",
        component: _markers_chart_markers_example_component__WEBPACK_IMPORTED_MODULE_9__["ChartMarkersExampleComponent"],
    },
    {
        path: "event-bus",
        component: _event_bus_chart_event_bus_test_component__WEBPACK_IMPORTED_MODULE_8__["ChartEventBusTestComponent"],
    },
];
const environment = new _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiEnvironment"]();
environment.logLevel = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].debug;
let CoreExampleModule = class CoreExampleModule {
};
CoreExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["ChartExampleComponent"],
            _domain_chart_domain_example_component__WEBPACK_IMPORTED_MODULE_7__["ChartDomainExampleComponent"],
            _event_bus_chart_event_bus_test_component__WEBPACK_IMPORTED_MODULE_8__["ChartEventBusTestComponent"],
            _markers_chart_markers_example_component__WEBPACK_IMPORTED_MODULE_9__["ChartMarkersExampleComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(coreRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["LoggerService"], useValue: new _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["LoggerService"](environment) },
        ],
    })
], CoreExampleModule);



/***/ }),

/***/ "SSc7":
/*!**************************************************************************************!*\
  !*** ./examples/components/demo/development/core/chart/chart.example.component.less ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tilebox__value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-bottom: 2px;\n  margin-bottom: -2px;\n  font-size: 11px;\n}\n:not(.tilebox__value--emphasized) {\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUiIsImZpbGUiOiJjaGFydC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuLnRpbGVib3hfX3ZhbHVlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBhZGRpbmctYm90dG9tOiBAbnVpLXNwYWNlLXh4cztcbiAgICBtYXJnaW4tYm90dG9tOiAtQG51aS1zcGFjZS14eHM7XG4gICAgZm9udC1zaXplOiBAbnVpLWZvbnQtc2l6ZS1zbWFsbDtcblxuICAgIDpub3QoJi0tZW1waGFzaXplZCkge1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "av9s":
/*!********************************************************************************************!*\
  !*** ./examples/components/demo/development/core/domain/chart-domain.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChartDomainExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDomainExampleComponent", function() { return ChartDomainExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_domain_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-domain.example.component.html */ "00YE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _data_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data-generator */ "kBc7");





/**
 * This is here just to test a prototype of angular component, that will use new chart core
 *
 * @ignore
 */
let ChartDomainExampleComponent = class ChartDomainExampleComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
        this.scales = [];
        this.charts = [];
        this.chartAssists = [];
    }
    ngOnInit() {
        const numCharts = 3;
        for (let i = 0; i < numCharts; ++i) {
            this.scales.push({
                x: this.xScale,
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
            });
            this.charts.push(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]()));
        }
        // this.scales[0].y.domainCalculation = getAutomaticDomain; // Default
        this.scales[1].y.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([-40, 160]);
        this.scales[2].y.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 0]);
        this.dataRenderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
    }
    ngAfterViewInit() {
        const timeLineSeriesSet = _data_generator__WEBPACK_IMPORTED_MODULE_4__["DataGenerator"].generateMockTimeLineSeriesSet(2, 40);
        this.chartComponents.forEach((chart, index) => {
            this.chartAssists.push(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.charts[index]));
            this.chartAssists[index].update(this.generateChartAssistSeriesSet(timeLineSeriesSet, index));
        });
        this.changeDetector.detectChanges();
    }
    generateChartAssistSeriesSet(dataSeriesSet, chartIndex) {
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        return dataSeriesSet.map(dataSeries => (Object.assign(Object.assign({}, dataSeries), { scales: this.scales[chartIndex], renderer: this.dataRenderer, accessors, showInLegend: true })));
    }
    fixDomain() {
        const startDatetime = new Date("2017-02-15T16:00:00Z");
        const endDatetime = new Date("2017-02-15T16:14:29.909Z");
        this.xScale.fixDomain([startDatetime, endDatetime]);
        this.chartAssists.forEach((chartAssist) => {
            chartAssist.update(chartAssist.inputSeriesSet);
        });
    }
    resetDomain() {
        this.xScale.isDomainFixed = false;
        this.chartAssists.forEach(chartAssist => {
            chartAssist.update(chartAssist.inputSeriesSet);
        });
    }
    refresh() {
        const seriesSet = _data_generator__WEBPACK_IMPORTED_MODULE_4__["DataGenerator"].generateMockTimeLineSeriesSet(Math.floor(Math.random() * 6), 40);
        this.chartAssists.forEach((chartAssist, chartIndex) => {
            chartAssist.update(this.generateChartAssistSeriesSet(seriesSet, chartIndex));
        });
    }
};
ChartDomainExampleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ChartDomainExampleComponent.propDecorators = {
    chartComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"],] }]
};
ChartDomainExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-domain-example",
        template: _raw_loader_chart_domain_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], ChartDomainExampleComponent);



/***/ }),

/***/ "bwYM":
/*!************************************************************************************!*\
  !*** ./examples/components/demo/development/core/chart/chart.example.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChartExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartExampleComponent", function() { return ChartExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart.example.component.html */ "BNJ9");
/* harmony import */ var _chart_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.example.component.less */ "SSc7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/zipObject */ "VJLA");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data-generator */ "kBc7");







/** @ignore */
const statuses = ["down", "critical", "warning", "unknown", "up"];
/**
 * This is here just to test a prototype of angular component, that will use new chart core
 *
 * @ignore
 */
let ChartExampleComponent = class ChartExampleComponent {
    constructor() {
        this.compact = true;
        this.statusChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"]());
        this.statusChartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.statusChart);
        this.statusPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_5___default()(statuses, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"])));
    }
    ngOnInit() {
        // status chart setup
        this.statusLineRenderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]({
            interactionStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineSelectSeriesInteractionStrategy"](),
        });
        const xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]();
        this.statusScales = {
            x: xScale,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["PointScale"]().padding(0.5),
        };
        this.statusScales.y.domain(statuses);
        this.statusScales.y.domainCalculator = undefined;
        this.statusScales.x.formatters.tick = (value) => Math.round(value).toString();
        this.statusChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_SERIES_EVENT"]).subscribe(console.log);
        this.update();
    }
    update() {
        this.statusChartAssist.update(this.generateStatusSeriesSet(Math.floor(Math.random() * 5 + 1)));
    }
    isStatusSignificant(highlightedValue) {
        return highlightedValue !== "unknown" && highlightedValue !== "up";
    }
    generateStatusSeriesSet(dataSeriesCount) {
        const statusSeriesSet = _data_generator__WEBPACK_IMPORTED_MODULE_6__["DataGenerator"].generateMockStatusSeriesSet(dataSeriesCount, 20, statuses);
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"](this.statusChartAssist.palette.standardColors);
        return statusSeriesSet.map(dataSeries => (Object.assign(Object.assign({}, dataSeries), { scales: this.statusScales, renderer: this.statusLineRenderer, accessors, showInLegend: true })));
    }
};
ChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-chart-example",
        template: _raw_loader_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChartExampleComponent);



/***/ }),

/***/ "eGcj":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/core/event-bus/chart-event-bus-test.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [style.min-height]=\"150\">\n    <div class=\"d-flex h-100\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n</div>\n<hr>\n<div class=\"btn-group\">\n    <button type=\"button\" nui-button (click)=\"selectAllFilters()\">Select All</button>\n    <button type=\"button\" nui-button (click)=\"deselectAllFilters()\">Deselect All</button>\n    <button type=\"button\" nui-button (click)=\"parsedEvents = []\">Clear Log</button>\n</div>\n<h1>Events</h1>\n<div class=\"mx-3\">\n    <nui-checkbox-group class=\"nui-checkbox-group-inline\" name=\"eventFilter\" [values]=\"selectedEventFilters\"\n                        (valuesChange)=\"onEventFilterChange($event)\">\n        <nui-checkbox *ngFor=\"let filter of eventFilters\" [value]=\"filter\" [checked]=\"isEventFilterChecked(filter)\">\n            {{filter}}\n        </nui-checkbox>\n    </nui-checkbox-group>\n</div>\n<h1>Interaction Types</h1>\n<p>(These apply only to <code>interaction_values</code> and <code>interaction_data_points</code> events.)</p>\n<div class=\"mx-3\">\n    <nui-checkbox-group class=\"nui-checkbox-group-inline\" name=\"interactionTypeFilter\" [values]=\"selectedInteractionTypeFilters\"\n                        (valuesChange)=\"onInteractionTypeFilterChange($event)\">\n        <nui-checkbox *ngFor=\"let filter of interactionTypeFilters\" [value]=\"filter\" [checked]=\"isInteractionTypeFilterChecked(filter)\">\n            {{filter}}\n        </nui-checkbox>\n    </nui-checkbox-group>\n</div>\n<div class=\"mt-3\">\n    <nui-example-code *ngFor=\"let event of parsedEvents\" language=\"typescript\">\n        {{event}}\n    </nui-example-code>\n</div>\n");

/***/ }),

/***/ "oAtN":
/*!**********************************************************************************************!*\
  !*** ./examples/components/demo/development/core/markers/chart-markers.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ChartMarkersExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMarkersExampleComponent", function() { return ChartMarkersExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-markers.example.component.html */ "KhLy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _data_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data-generator */ "kBc7");





/**
 * This is here just to test a prototype of angular component, that will use new chart core
 *
 * @ignore
 */
let ChartMarkersExampleComponent = class ChartMarkersExampleComponent {
    constructor() {
        this.compact = true;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.dataScales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        this.standardMarkers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
        // tslint:disable:max-line-length
        this.customMarkers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"]([
            new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SvgMarker"](`<g transform="translate(-10, -10)">
            <circle class="nui-chart--path__outline" fill='#D50000' cx='10' cy='10' r='10'></circle>
            <path fill='#FFFFFF' d='M11,15H9v-2h2V15z M11,5H9v6h2V5z'/>
        </g>`),
            new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PathMarker"]("m10.62647,13.43705c0.10608,0.11494 0.25614,0.17924 0.41214,0.17924l2.21732,0c0.17538,0 0.33961,-0.08139 0.44569,-0.21884l2.21732,-2.87456c0.16371,-0.21269 0.15433,-0.51155 -0.02199,-0.71497l-1.93221,-2.2069l0,-4.96392c0,-0.09452 -0.02407,-0.18799 -0.06982,-0.27042l-1.53258,-2.78609l0.70778,-4.21102c0.02751,-0.16319 -0.01876,-0.33023 -0.12588,-0.45664c-0.1065,-0.12692 -0.26479,-0.19956 -0.42965,-0.19956l-1.62449,0c-0.24228,0 -0.45664,0.15444 -0.53302,0.38307l-0.9287,2.75753l-7.01628,1.26341l-2.13604,0l0.94766,-2.96251c0.02887,-0.08899 0.03491,-0.18413 0.01709,-0.27584l-1.47714,-7.83795c-0.04564,-0.24457 -0.24645,-0.42923 -0.49353,-0.45559c-0.24426,-0.02751 -0.48196,0.11265 -0.57804,0.34117l-2.22097,5.27508l-1.41524,0l-3.3808,-4.50728c-0.12661,-0.16923 -0.33659,-0.25333 -0.54709,-0.21654c-0.20831,0.03679 -0.37859,0.18684 -0.44132,0.38911l-1.92273,6.24316c-0.00823,0.02803 -0.01459,0.05658 -0.01897,0.08576l-0.73883,5.14305c-0.0322,0.22363 0.07253,0.44507 0.26594,0.56168l3.65111,2.20794l0.7479,2.77785l-3.33807,3.61651c-0.04992,0.05429 -0.08847,0.1164 -0.11369,0.18507l-1.18348,3.17197c-0.06461,0.17257 -0.04033,0.36546 0.06492,0.5177c0.10525,0.15162 0.27719,0.24176 0.46185,0.24176l3.10569,0c0.22123,0 0.42152,-0.12859 0.5127,-0.33086l0.99268,-2.19044l1.78486,-1.78497l1.33594,0.26823l-0.8817,3.3313c-0.0445,0.16975 -0.00854,0.34951 0.09837,0.488c0.10577,0.13735 0.27063,0.21977 0.44559,0.21977l3.10569,0c0.3022,0 0.55094,-0.23968 0.5622,-0.54073l0.1289,-3.27847l4.84137,-0.53854c0.09775,-0.01094 0.19007,-0.04668 0.26979,-0.10442l2.79547,-2.03277l2.95146,4.10608l-0.13193,1.78372c-0.01261,0.15235 0.04075,0.30627 0.14672,0.42162z"),
            new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SvgMarker"](`
            <g stroke="null" id="svg_49">
                <path stroke="null" id="svg_1" fill="#D3D1CD" d="m-2.54401,12.16919l0,4.63691l-3.30914,0.9818l-0.39967,-9.76365c0.67655,0.22264 3.01502,4.04556 3.70881,4.14494z"/>
                <rect stroke="null" id="svg_2" fill="#726D65" height="1.81402" width="3.48045" y="16.80602" x="-6.024"/>
                <path stroke="null" id="svg_3" fill="#D3D1CD" d="m9.0936,9.13296l0,7.59l-3.46588,1.3547l-0.5317,-9.41187c0.82132,-0.43682 3.40059,0.96563 3.98042,0.4475l0.01716,0.01968z"/>
                <rect stroke="null" id="svg_4" fill="#726D65" height="1.89708" width="3.46588" y="16.72296" x="5.62735"/>
                <path stroke="null" id="svg_5" fill="#FCACDF" d="m-11.88037,10.3612c-1.2367,2.50941 -4.70197,2.61222 -4.70197,2.61222s2.24481,-1.89365 0.57213,-6.34979c-1.67352,-4.45622 -0.79309,-12.47701 4.4913,-12.47701c3.42416,0 4.481,2.52313 4.80044,4.29856c-0.20213,-0.00946 -6.44658,10.47284 -5.04284,11.80465l-0.11906,0.11136z"/>
                <path stroke="null" id="svg_6" fill="#DB91C5" d="m-13.88362,4.88498c-0.12074,2.11377 0.71857,4.03305 2.12232,5.36486l-0.11906,0.11136c-1.2367,2.50941 -4.70197,2.61222 -4.70197,2.61222s2.24481,-1.89365 0.57213,-6.34979c-0.13104,-0.34857 -0.24583,-0.71857 -0.34514,-1.10566c0.81704,-0.81796 1.31725,-1.93049 1.61357,-2.8383c0.29548,-0.90873 0.38709,-1.61273 0.38709,-1.61273c0.0437,-5.37257 4.62318,-2.08037 4.62318,-2.08037l-0.04195,0.05995c-2.2593,1.04648 -3.96715,3.3247 -4.11016,5.83845z"/>
                <rect stroke="null" id="svg_8" fill="#847E74" height="1.89708" width="2.82716" y="16.72296" x="4.15503"/>
                <rect stroke="null" id="svg_9" fill="#847E74" height="1.81402" width="2.28936" y="16.80602" x="-6.90191"/>
                <path id="svg_10" fill="#EDEAE4" d="m12.49427,-0.38195c-0.51904,0.01884 -1.05601,-0.02998 -1.60076,-0.15499l-0.018,0.07963c0.28778,0.65519 0.52675,1.40374 0.66892,2.20454c0.41798,2.3561 -0.00084,5.16449 -2.46829,7.36644c-0.57983,0.51813 -1.2727,1.00208 -2.09402,1.43883l0,6.17085l-2.82716,0l0,-4.86298c0,0 -3.28969,0.79737 -6.69927,0.30921c-0.69371,-0.09938 -1.39177,-0.25178 -2.06839,-0.4745l0,5.11141l-2.28936,0l0,-4.32952c0,0 -0.78196,-0.15156 -1.80883,-0.54986c-1.1631,-0.29037 -2.20881,-0.877 -3.05072,-1.67695c-1.40374,-1.33182 -2.24306,-3.25117 -2.12232,-5.36486c0.19099,-3.3642 3.18519,-6.30532 6.55191,-6.44147c0.2064,-0.00854 0.41112,-0.0077 0.61324,0.00168c1.12885,0.05393 2.18654,0.38198 3.10724,0.91902c0.35033,0.2038 0.6809,0.43766 0.98752,0.69798c0.68433,0.57983 2.19508,-6.9596 2.19508,-11.90823s5.13109,-3.89004 5.13109,-3.89004c0,-0.65008 0.08055,-1.19307 0.21326,-1.64698c0.64406,-2.19851 2.52397,-2.31163 2.52397,-2.31163l0,3.73848l0.00427,0c0.11136,-3.8053 2.7338,-3.97401 2.7338,-3.97401l0,3.99194c-1.20932,0.59265 2.49659,2.61138 2.49659,2.61138l0.00084,0.00084c0.36657,0.54475 0.75198,1.10315 1.1528,1.66666c0.33484,0.47107 0.68006,0.9464 1.03374,1.41915c0,0 0,0.00084 0.00084,0.00168c0.02143,0.0283 0.04279,0.05736 0.06422,0.08566c0.40082,0.53361 0.81193,1.06287 1.23075,1.58276c3.20327,3.96898 0.31615,8.04917 -3.66297,8.18791z"/>
                <path stroke="null" id="svg_11" fill="#FCACDF" d="m4.91541,-17.38275c-0.06598,0.22356 -0.11822,0.46847 -0.15499,0.73741c-0.03768,0.27664 -0.05827,0.57983 -0.05827,0.90956c0,0 -4.24631,0.54383 -4.24631,5.49247s3.04302,8.33679 -0.44025,10.47452c-0.02487,0.01541 -0.04965,0.03257 -0.0762,0.04798c-0.03509,0.02143 -0.07109,0.04195 -0.10793,0.06171c-0.21669,0.11647 -0.44796,0.19183 -0.68349,0.22699c-0.62262,0.09504 -1.2753,-0.08482 -1.77199,-0.50531c-0.30662,-0.2604 -0.63719,-0.49418 -0.98752,-0.69798c2.97109,-1.81402 0.29632,-4.54012 1.07317,-11.09203c0.79309,-6.68051 7.45377,-5.65531 7.45377,-5.65531z"/>
                <path stroke="null" id="svg_13" fill="#D3D1CD" d="m-3.71413,11.94731c6.19716,0 7.86924,-3.22119 7.86924,-3.22119l0,3.13378c0.00008,0.00008 -4.55141,1.5511 -7.86924,0.08741z"/>
                <path stroke="null" id="svg_14" fill="#D3D1CD" d="m-10.88599,5.68745c0,4.71051 3.98423,6.7892 3.98423,6.7892s-0.78196,-0.15156 -1.80883,-0.54986c-1.1631,-0.29037 -2.20881,-0.877 -3.05072,-1.67695c-1.40374,-1.33182 -2.24306,-3.25117 -2.12232,-5.36486c0.19099,-3.3642 3.18519,-6.30524 6.55191,-6.44147c0.2064,-0.00854 0.41112,-0.0077 0.61324,0.00168c0,0 -4.16752,2.27479 -4.16752,7.24227z"/>
                <path stroke="null" id="svg_16" fill="#666666" d="m13.25136,-4.62231c-0.28008,0 -0.51378,-0.23416 -0.51386,-0.51386c-0.00008,-0.27924 0.23477,-0.51386 0.51386,-0.51386c0.27977,0 0.51363,0.23416 0.51386,0.51386c0.00031,0.28015 -0.23325,0.51386 -0.51386,0.51386z"/>
                <path stroke="null" id="svg_17" fill="#666666" d="m16.86224,-5.23807c-0.27939,0 -0.51386,-0.23469 -0.51386,-0.51386c0,-0.27489 0.22524,-0.50615 0.50036,-0.51355c0.27581,-0.0074 0.51279,0.21311 0.52675,0.488c0.01464,0.28854 -0.22424,0.53941 -0.51325,0.53941z"/>
                <path stroke="null" id="svg_18" fill="#666666" d="m7.4464,-9.28317c-0.15117,-0.17551 -0.22081,-0.40662 -0.22562,-0.64604c-0.00252,-0.23919 0.06407,-0.488 0.1932,-0.70729c0.12837,-0.21997 0.31806,-0.41104 0.54559,-0.54803c0.22707,-0.13775 0.49197,-0.21997 0.75831,-0.23775c0.26627,-0.01808 0.53994,0.0286 0.78333,0.13523c0.24369,0.10602 0.45726,0.27031 0.61339,0.47183c0.15697,0.2006 0.25567,0.43888 0.28435,0.67662c0.02631,0.23828 -0.01274,0.47686 -0.14065,0.67067c-0.29808,-0.34705 -0.56671,-0.50127 -0.81048,-0.58677c-0.24415,-0.08268 -0.44384,-0.09595 -0.64566,-0.08588c-0.20167,0.01503 -0.39853,0.05446 -0.63025,0.16841c-0.23111,0.11685 -0.47702,0.30593 -0.72552,0.68898z"/>
                <path stroke="null" id="svg_19" fill="#666666" d="m14.92664,-10.15246c-0.10617,-0.06506 -0.20815,-0.11052 -0.30578,-0.14477c-0.24408,-0.08306 -0.44452,-0.09595 -0.64581,-0.08649c-0.20213,0.01541 -0.39914,0.05484 -0.63033,0.16872c-0.23126,0.11647 -0.47702,0.30578 -0.72544,0.6886c-0.15156,-0.17474 -0.22096,-0.40593 -0.22608,-0.64581c-0.00168,-0.23897 0.06422,-0.48815 0.19358,-0.70744c0.12844,-0.22013 0.31776,-0.41112 0.54559,-0.5481c0.20899,-0.12593 0.45139,-0.2064 0.69546,-0.23126c0.33484,0.47107 0.68006,0.9464 1.03374,1.41915c0,0 0,0.00084 0.00084,0.00168c0.02136,0.0283 0.04279,0.05743 0.06422,0.08573z"/>
                <path stroke="null" id="svg_20" fill="#E58376" d="m7.21071,-6.48866l-1.3132,0c-0.35475,0 -0.64238,-0.28763 -0.64238,-0.64238s0.28763,-0.64238 0.64238,-0.64238l1.3132,0c0.35475,0 0.64238,0.28763 0.64238,0.64238s-0.28763,0.64238 -0.64238,0.64238z"/>
                <path stroke="null" id="svg_22" fill="#D3D1CD" d="m3.68465,-5.5884c0.02052,0.03852 0.17131,0.31776 0.4462,0.75198c-0.17726,-0.24408 -0.32798,-0.49502 -0.4462,-0.75198z"/>
                <path stroke="null" id="svg_23" fill="#D3D1CD" d="m11.54443,1.74723c-3.88752,-1.56476 -6.43376,-5.04116 -7.41182,-6.58105c1.88594,2.59254 6.7429,4.37651 6.7429,4.37651c0.28778,0.65519 0.52675,1.40374 0.66892,2.20454z"/>
                <path stroke="null" id="svg_25" fill="#B5B4B4" d="m7.43938,-15.9559l-1.53051,0c0,0 0.62011,-3.32225 1.53051,-3.73848l0,3.73848z"/>
                <path stroke="null" id="svg_26" fill="#B5B4B4" d="m10.17753,-16.19144l-1.53051,0c0,0 0.62011,-3.32225 1.53051,-3.73848l0,3.73848z"/>
                <path stroke="null" id="svg_27" fill="#DB91C5" d="m4.76042,-16.64534c-0.03768,0.27664 -0.05827,0.57983 -0.05827,0.90956c0,0 -4.24631,0.54383 -4.24631,5.49247s3.04302,8.33679 -0.44025,10.47452c-0.02487,0.01541 -0.04965,0.03257 -0.0762,0.04798c-0.03509,0.02143 -0.07109,0.04195 -0.10793,0.06171c-0.21669,0.11647 -0.44796,0.19183 -0.68349,0.22699c3.18862,-4.03564 -0.03341,-4.83217 -0.03341,-11.10065c0,-5.37775 4.10246,-6.05003 5.64586,-6.11258z"/>
                <path stroke="null" id="svg_28" fill="#F9D780" d="m19.34426,-20.4318l-2.4358,2.5943l-0.64489,0.68776l-1.96473,2.09318l-0.56359,0.60035l-1.0612,1.12969l-0.32203,0.34346c-0.11388,0.12074 -0.2398,0.2244 -0.37595,0.30921c-0.19785,0.12417 -0.41539,0.20899 -0.63894,0.25353c-0.45474,0.08993 -0.93611,0.01197 -1.34211,-0.24667c-0.06163,-0.03943 -0.12074,-0.08222 -0.17818,-0.12936c-0.01373,-0.01114 -0.02654,-0.02227 -0.04027,-0.03425c-1.02436,-0.87188 -0.8085,-2.51459 0.40082,-3.10724l0.84107,-0.41195l0.75541,-0.37084l2.07861,-1.01917l0.90956,-0.44536l1.57162,-0.77082l0.80507,-0.39479l2.20553,-1.08103z"/>
                <path stroke="null" id="svg_29" fill="#F9E9C7" d="m19.34456,-20.4321l-6.67014,7.1052l-0.32203,0.34346c-0.61751,0.65778 -1.61441,0.78882 -2.35701,0.316l9.34917,-7.76466z"/>
                <path stroke="null" id="svg_31" fill="#E0BE70" d="m14.29883,-15.05656l-0.56359,0.60035c-0.36314,-1.27438 -0.14301,-2.47859 0.11731,-3.28366l0.90956,-0.44536c-0.22432,0.48815 -0.70568,1.74713 -0.46329,3.12867z"/>
                <path stroke="null" id="svg_32" fill="#E0BE70" d="m17.13888,-19.35092c-0.1225,0.41966 -0.22699,0.94213 -0.23042,1.51335l-0.64489,0.68776c-0.08482,-0.65603 -0.03425,-1.2753 0.07025,-1.80631l0.80507,-0.39479z"/>
                <path stroke="null" id="svg_33" fill="#E0BE70" d="m11.97606,-12.67392c-0.19785,0.12417 -0.41539,0.20899 -0.63894,0.25353c-0.48136,-1.52967 -0.44536,-2.95995 -0.3186,-3.92947l0.75541,-0.37084c-0.15499,0.84786 -0.30403,2.39637 0.20213,4.04678z"/>
            </g>`),
            new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PathMarker"]("m13.79081,-4.84368c-0.92266,-1.54513 -2.21904,-3.01517 -3.09452,-3.78654c-1.92513,-1.69676 -3.53512,-1.65247 -4.32337,-1.47512c-0.31707,0.07137 -0.60888,0.18742 -0.86863,0.3404c-1.36004,-0.99335 -3.01114,-1.48005 -5.00481,-1.48005s-3.64477,0.4867 -5.00481,1.48005c-0.2598,-0.15298 -0.55161,-0.26904 -0.86863,-0.3404c-0.78826,-0.17734 -2.39825,-0.22169 -4.32332,1.47507c-0.87554,0.77143 -2.17197,2.24146 -3.09458,3.78666c-1.25797,2.10678 -1.53545,3.81594 -0.82462,5.0802c0.83798,1.4902 2.12994,1.90621 3.1613,2.01938c-0.24661,0.9742 -0.39784,2.01944 -0.39784,3.3149c0,1.76371 0.40418,3.28205 1.20133,4.51266c0.70081,1.08199 1.70888,1.94801 2.99636,2.574c2.00867,0.97669 4.36031,1.22138 6.20948,1.27332l0,-5.89643c-1.1452,-0.54001 -2.26061,-1.89194 -2.26061,-2.96929c0,-1.81468 2.00698,-1.81468 3.20604,-1.81468c1.19907,0 3.20604,0 3.20604,1.81468c0,1.07746 -1.11546,2.42928 -2.26061,2.96929l0,5.89637c1.84924,-0.05194 4.20092,-0.29663 6.20948,-1.27332c1.28742,-0.62598 2.29556,-1.49201 2.99636,-2.574c0.79709,-1.23067 1.20133,-2.74895 1.20133,-4.51266c0,-1.29552 -0.15117,-2.34076 -0.39784,-3.31496c1.03136,-0.11311 2.32336,-0.52918 3.1613,-2.01938c0.7106,-1.2642 0.43312,-2.97331 -0.82485,-5.08014l0.00001,0zm-16.23252,5.34691c-0.6394,0 -1.15981,-0.52335 -1.15981,-1.16899c0,-0.64569 0.52035,-1.16865 1.15981,-1.16865c0.6402,0 1.16049,0.52295 1.16049,1.16865c0.00006,0.64564 -0.52024,1.16899 -1.16049,1.16899zm5.87366,0.00878c-0.64564,0 -1.16933,-0.52726 -1.16933,-1.17771c0,-0.65045 0.5237,-1.17771 1.16933,-1.17771c0.64484,0 1.16848,0.52726 1.16848,1.17771c0,0.65045 -0.5237,1.17771 -1.16848,1.17771z"),
            new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PathMarker"]("m6.00065,-7.9931c4.87221,-5.25971 5.69347,-0.48192 9.27895,0.52335c0.43379,0.12063 0.75609,0.15049 0.72441,0.3558c-0.31316,2.06172 -0.98578,2.44981 -1.73516,2.46992c-0.8298,0.02315 -1.50364,0.00853 -2.00201,0.24553c-0.63484,0.30097 -1.093,0.69151 -1.43053,1.14723l-5.0952,-2.59847c0.16572,-0.60499 0.25589,-1.31355 0.25954,-2.14336l0,0zm4.82713,4.75341c-0.10906,0.14805 -0.20532,0.30341 -0.29061,0.46486c0.0853,-0.16145 0.18156,-0.31681 0.29061,-0.46486zm-0.29244,0.46852c-0.05788,0.10967 -0.11088,0.22177 -0.15902,0.33631c0.04874,-0.11454 0.10114,-0.22725 0.15902,-0.33631zm-0.15963,0.33814c-0.02376,0.05666 -0.0463,0.11332 -0.06763,0.1712c0.02132,-0.05788 0.04387,-0.11454 0.06763,-0.1712zm-0.06885,0.17303c-1.08447,2.89031 0.36251,7.18922 -4.49021,8.77328c-0.29305,2.46139 -0.28026,4.92461 0.06458,7.38539l0.58915,-0.06275c1.06254,-0.11332 1.05218,0.85113 0.55016,1.47257l-3.13705,0c-0.22786,-2.95001 -0.79812,-6.17969 -0.56052,-8.99566c-1.65291,0.44232 -2.64843,0.32473 -4.44391,-0.35885c-0.87124,-0.33143 -4.46523,-2.48028 -5.43942,-1.60599c-0.54894,0.49411 0.91571,2.46505 -2.70144,5.96707l0.06458,3.4624c0.21568,0 0.41307,0 0.61169,0c0.92668,0 0.87672,0.92607 0.54102,1.53106l-1.78756,0c-1.18866,0 -0.93886,0.12733 -0.95349,-1.12347l-0.02864,-2.69534l-0.18948,-1.66997c0.00366,-0.9943 0.71709,-2.05319 0.03473,-4.42197c-0.45024,-1.567 -0.41429,-2.81476 -1.59259,-2.9884c-1.09422,2.20611 -2.14092,4.22579 -3.05968,6.5385c-0.06214,0.15658 -0.14866,0.30463 -0.22421,0.45694c-1.04731,2.41204 -1.48658,0.60012 -0.89987,-0.83224l0.39236,-0.95531c0.50203,-2.02212 1.91794,-5.81716 3.25403,-7.22517c5.03488,-5.31088 15.23869,-0.28818 18.24598,-4.88501l5.15979,2.23292l-0.00002,0.00002zm-5.14577,-2.25424l0.03838,-0.06093c-0.01279,0.02071 -0.02559,0.04082 -0.03838,0.06093zm0.15292,-0.25711c0.01584,-0.02924 0.03168,-0.0591 0.04752,-0.08895c-0.01584,0.02985 -0.03168,0.05971 -0.04752,0.08895zm0.13586,-0.27051c0.02011,-0.04326 0.0396,-0.08651 0.05849,-0.13099c-0.01889,0.04448 -0.03838,0.08773 -0.05849,0.13099zm0.12185,-0.28818c0.02193,-0.05666 0.04265,-0.11515 0.06336,-0.17425c-0.02011,0.0591 -0.04143,0.11759 -0.06336,0.17425zm0.10906,-0.31438c0.02011,-0.06397 0.0396,-0.12977 0.05788,-0.19618c-0.01828,0.06641 -0.03777,0.13221 -0.05788,0.19618z"),
        ]);
        this.useCustomMarkers = true;
    }
    ngOnInit() {
        this.chartAssist.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS2"]);
        this.dataScales.x.formatters.tick = (value) => Math.round(value).toString();
        this.updateMarkers();
        this.updateData();
    }
    updateData() {
        const data = this.generateDataSeriesSet(12, this.dataScales);
        this.chartAssist.update(data);
    }
    updateMarkers() {
        this.markers = this.useCustomMarkers ? this.customMarkers : this.standardMarkers;
    }
    generateDataSeriesSet(dataSeriesCount, scales) {
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const lineSeriesSet = _data_generator__WEBPACK_IMPORTED_MODULE_4__["DataGenerator"].generateMockLineSeriesSet(dataSeriesCount, 20);
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.markers);
        return lineSeriesSet.map(dataSeries => (Object.assign(Object.assign({}, dataSeries), { accessors,
            scales,
            renderer, showInLegend: true })));
    }
    onSwitchMarkers(value) {
        this.chartAssist.update([]);
        this.useCustomMarkers = value;
        this.updateMarkers();
        this.updateData();
    }
};
ChartMarkersExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-markers-example",
        template: _raw_loader_chart_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartMarkersExampleComponent);



/***/ })

}]);
//# sourceMappingURL=core-core-example-module-es2015.js.map