(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pie-chart-pie-chart-example-module"],{

/***/ "WQHo":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/pie-chart/pie-chart-test/pie-chart.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column\" [style.height]=\"compact ? '150px' : '500px'\">\n    <nui-expander>\n        <div class=\"d-flex flex-fill w-100 h-100\" style=\"position: relative;\">\n            <nui-chart class=\"flex-fill w-100 h-100\"\n                       [chart]=\"chart\">\n            </nui-chart>\n            <nui-chart-donut-content [plugin]=\"contentPlugin\">\n                <div *ngIf=\"showContent()\">\n                    <div class=\"nui-text-page\">57</div>\n                    <div class=\"nui-text-secondary\">donuts</div>\n                </div>\n            </nui-chart-donut-content>\n            <div class=\"d-flex flex-column pl-2\">\n                <nui-legend seriesUnitLabel=\"Share\"\n                            [active]=\"chartAssist.isLegendActive\"\n                            [interactive]=\"true\"\n                            (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n                    <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                                       [descriptionPrimary]=\"legendSeries['name']\"\n                                       [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                                       (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                                       [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                                       (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                        <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', 'value')\"\n                                              [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                              [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                        </nui-rich-legend-tile>\n                    </nui-legend-series>\n                </nui-legend>\n            </div>\n        </div>\n    </nui-expander>\n\n    <div class=\"btn-group\">\n        <button nui-button (click)=\"refreshDonut(1)\" type=\"button\">1 circle donut </button>\n        <button nui-button (click)=\"refreshDonut(2)\" type=\"button\">2 circle donut </button>\n        <button nui-button (click)=\"refreshPie()\" type=\"button\">Pie</button>\n        <button nui-button (click)=\"refreshPieInteraction()\" type=\"button\">Refresh and toggle interaction</button>\n        <button nui-button (click)=\"compact = !compact\" type=\"button\">Toggle Size</button>\n    </div>\n</div>\n<div class=\"d-flex flex-column w-25\" *ngIf=\"showContent()\">\n    <h3>Annular's params</h3>\n    <p>\n        Setting one of the parameters to 0 will force donut chart to use default annular width of 20px. Default width is also configurable.\n    </p>\n    <span>Donut's width in percents</span><nui-textbox-number [value]=\"15\" [maxValue]=\"80\" (valueChange)=\"updateWidth($event)\"></nui-textbox-number>\n    <span>Max donut's width in px</span><nui-textbox-number [value]=\"renderer.config.maxThickness\" (valueChange)=\"updatemaxWidth($event)\"></nui-textbox-number>\n</div>\n");

/***/ }),

/***/ "hsLt":
/*!************************************************************************************!*\
  !*** ./examples/components/demo/development/pie-chart/pie-chart-example.module.ts ***!
  \************************************************************************************/
/*! exports provided: PieChartExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartExampleModule", function() { return PieChartExampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _pie_chart_test_pie_chart_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pie-chart-test/pie-chart.example.component */ "ueFZ");







const bubbleRoutes = [
    {
        path: "",
        component: _pie_chart_test_pie_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["PieChartTestComponent"],
    },
];
let PieChartExampleModule = class PieChartExampleModule {
};
PieChartExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pie_chart_test_pie_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["PieChartTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiTextboxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(bubbleRoutes),
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiExpanderModule"],
        ],
    })
], PieChartExampleModule);



/***/ }),

/***/ "ueFZ":
/*!******************************************************************************************************!*\
  !*** ./examples/components/demo/development/pie-chart/pie-chart-test/pie-chart.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PieChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartTestComponent", function() { return PieChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pie_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pie-chart.example.component.html */ "WQHo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _data_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data-generator */ "kBc7");






/**
 * @ignore
 */
let PieChartTestComponent = class PieChartTestComponent {
    constructor(toastr) {
        this.toastr = toastr;
        this.compact = false;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["RadialGrid"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.chart);
        this.interactive = false;
        this.processSeries = (chartSeriesSet) => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialPreprocessor"])(chartSeriesSet, (series) => !this.chartAssist.isSeriesHidden(series.id));
    }
    ngOnInit() {
        const gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GridConfig"]();
        gridConfig.interactive = false;
        this.chart.getGrid().config(gridConfig);
        this.scales = {
            r: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"](),
        };
        this.scales.r.fixDomain([0, 1]);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.chart, this.processSeries);
        this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
        this.chart.addPlugin(this.contentPlugin);
        this.refreshPie();
        this.chart.getEventBus().getStream("click").subscribe((event) => {
            this.toastr.info({
                title: "Event Published",
                message: `event: click; data: ${event.data}`,
                options: {
                    timeOut: 1500,
                },
            });
        });
    }
    generateSeriesSet(layers = 1) {
        const donutSeriesSet = _data_generator__WEBPACK_IMPORTED_MODULE_5__["DataGenerator"].generateMockOrdinalSeriesSet(["Chrome", "Firefox", "Edge"], layers);
        donutSeriesSet.forEach(s => {
            s.id += `-${Math.round(Math.random() * 100)}`;
        });
        return donutSeriesSet.map(dataSeries => (Object.assign(Object.assign({}, dataSeries), { accessors: {
                data: {
                    value: (d) => d.value,
                },
                series: {
                    color: this.chartAssist.palette.standardColors.get,
                },
            }, scales: this.scales, renderer: this.renderer, showInLegend: true })));
    }
    refreshPie() {
        this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["PieRenderer"]();
        this.chartAssist.update(this.generateSeriesSet());
    }
    updateWidth(value) {
        this.renderer.config.annularGrowth = value / 100;
        this.updateDonut();
    }
    updatemaxWidth(value) {
        this.renderer.config.maxThickness = value;
        this.updateDonut();
    }
    refreshPieInteraction() {
        this.interactive = !this.interactive;
        if (this.interactive) {
            this.renderer.interaction = {
                arc: {
                    mouseover: "",
                    mouseout: "",
                    click: "",
                },
            };
        }
        else {
            // @ts-ignore: Preventing breaking flow
            this.renderer.interaction = undefined;
        }
        this.chartAssist.update(this.generateSeriesSet());
    }
    refreshDonut(layers) {
        this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["RadialRenderer"]();
        // Hack for demo page, since it loads pie first and we can switch between chart renderers
        this.chartAssist.update(this.generateSeriesSet(layers));
        setTimeout(() => {
            this.chart.updateDimensions();
        }, 0);
    }
    showContent() {
        return !(this.renderer instanceof _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["PieRenderer"]);
    }
    updateDonut() {
        setTimeout(() => {
            this.chart.updateDimensions();
        }, 0);
    }
};
PieChartTestComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ToastService"],] }] }
];
PieChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-pie-chart-example",
        template: _raw_loader_pie_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], PieChartTestComponent);



/***/ })

}]);
//# sourceMappingURL=pie-chart-pie-chart-example-module-es2015.js.map