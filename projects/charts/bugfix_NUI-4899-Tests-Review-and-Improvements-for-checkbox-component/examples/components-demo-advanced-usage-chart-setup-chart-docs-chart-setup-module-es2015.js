(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-chart-setup-chart-docs-chart-setup-module"],{

/***/ "BJYk":
/*!*************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ChartDocsChartSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsChartSetupComponent", function() { return ChartDocsChartSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_chart_setup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-chart-setup.component.html */ "UCMR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsChartSetupComponent = class ChartDocsChartSetupComponent {
    constructor() {
        this.basicChartTemplate = `<nui-chart [chart]="chart"></nui-chart>`;
        this.basicSeries = `const chartSeries: IChartSeries = {
    id: "series-1",
    name: "Series 1",
    data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
    ],
    scales: {
        x: new LinearScale(),
        y: new LinearScale(),
    },
    renderer: new LineRenderer(),
};
...`;
        this.basicData = `const chartSeries: IChartSeries = {
    id: "series-1",
    name: "Series 1",
    data: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
    ],
    ...
};`;
        this.basicScales = `const chartSeries: IChartSeries = {
    ...
    scales: {
        x: new LinearScale(),
        y: new LinearScale(),
    },
    ...
};`;
        this.renderer = `const chartSeries: IChartSeries = {
    ...
    renderer: new LineRenderer(),
    ...
};`;
        this.chartSetup = `const chart = new Chart(new XYGrid());
...`;
        this.chartUpdate = `const seriesSet: IChartSeries[] = [...];
chart.update(seriesSet);
...`;
    }
};
ChartDocsChartSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-chart-setup",
        template: _raw_loader_chart_docs_chart_setup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsChartSetupComponent);



/***/ }),

/***/ "ngfI":
/*!********************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/chart-setup/line-chart/line-chart.example.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: LineChartExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartExampleComponent", function() { return LineChartExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_line_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./line-chart.example.component.html */ "Pxap");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let LineChartExampleComponent = class LineChartExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
    }
    ngOnInit() {
        this.seriesSet = [{
                id: "series-1",
                name: "Series 1",
                data: [
                    { x: 1, y: 10 },
                    { x: 2, y: 30 },
                    { x: 3, y: 5 },
                    { x: 4, y: 20 },
                    { x: 5, y: 15 },
                ],
                scales: {
                    x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                    y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                },
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
            }];
        this.chart.update(this.seriesSet);
    }
};
LineChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-example",
        template: _raw_loader_line_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LineChartExampleComponent);



/***/ }),

/***/ "u5q0":
/*!*****************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/chart-setup sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-chart-setup.component.html": "UCMR",
	"./chart-docs-chart-setup.component.ts": "IRIh",
	"./chart-docs-chart-setup.module.ts": "ztii",
	"./line-chart/line-chart.example.component.html": "Pxap",
	"./line-chart/line-chart.example.component.ts": "NXqR"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "u5q0";

/***/ }),

/***/ "xb04":
/*!**********************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ChartDocsChartSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsChartSetupModule", function() { return ChartDocsChartSetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _chart_docs_chart_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-docs-chart-setup.component */ "BJYk");
/* harmony import */ var _line_chart_line_chart_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-chart/line-chart.example.component */ "ngfI");







const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_chart_setup_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsChartSetupComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "line-chart",
        component: _line_chart_line_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["LineChartExampleComponent"],
    },
];
let ChartDocsChartSetupModule = class ChartDocsChartSetupModule {
};
ChartDocsChartSetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _line_chart_line_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["LineChartExampleComponent"],
            _chart_docs_chart_setup_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsChartSetupComponent"],
        ],
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("u5q0") },
        ],
    })
], ChartDocsChartSetupModule);



/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-chart-setup-chart-docs-chart-setup-module-es2015.js.map