(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["time-bands-time-bands-example-module"],{

/***/ "12rl":
/*!**************************************************************************************!*\
  !*** ./examples/components/demo/development/time-bands/time-bands-example.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TimeBandsExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeBandsExampleModule", function() { return TimeBandsExampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _line_time_series_line_time_series_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-time-series/line-time-series-test.component */ "eFyL");






const collectionRoutes = [
    {
        path: "line",
        component: _line_time_series_line_time_series_test_component__WEBPACK_IMPORTED_MODULE_5__["LineTimeSeriesTestComponent"],
    },
];
let TimeBandsExampleModule = class TimeBandsExampleModule {
};
TimeBandsExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _line_time_series_line_time_series_test_component__WEBPACK_IMPORTED_MODULE_5__["LineTimeSeriesTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NuiChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(collectionRoutes),
        ],
    })
], TimeBandsExampleModule);



/***/ }),

/***/ "4Nlq":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/time-bands/line-time-series/line-time-series-test.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "eFyL":
/*!*************************************************************************************************************!*\
  !*** ./examples/components/demo/development/time-bands/line-time-series/line-time-series-test.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LineTimeSeriesTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineTimeSeriesTestComponent", function() { return LineTimeSeriesTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_line_time_series_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./line-time-series-test.component.html */ "4Nlq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





const format = "YYYY-MM-DDTHH:mm:ssZ";
let LineTimeSeriesTestComponent = class LineTimeSeriesTestComponent {
    constructor() {
        // XYGrid is used for rendering the axes
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
    }
    ngOnInit() {
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ZoomPlugin"]());
        // In case of a line chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(5, "minutes"))
                .fixDomain([
                moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:30:00Z", format).toDate(),
                moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T18:00:00Z", format).toDate(),
            ]),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const lines = this.getLines(scales);
        const bars = this.getBars(scales);
        this.chart.update([...lines, ...bars]);
    }
    getLines(scales) {
        // The line renderer will make the chart look like a line chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        accessors.series.color = (seriesId, series) => this.palette.standardColors.get(series.name);
        return [
            {
                id: "series-1",
                name: "Series 1",
                data: [
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(), y: 30 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:21:00Z", format).toDate(), y: 95 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:44:00Z", format).toDate(), y: 15 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:00:00Z", format).toDate(), y: 60 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:30:00Z", format).toDate(), y: 35 },
                ],
            },
            {
                id: "series-2",
                name: "Series 2",
                data: [
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(), y: 60 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:10:00Z", format).toDate(), y: 40 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:00Z", format).toDate(), y: 70 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:15:00Z", format).toDate(), y: 45 },
                    { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:20:00Z", format).toDate(), y: 90 },
                ],
            },
        ].map(s => (Object.assign(Object.assign({}, s), { scales,
            renderer,
            accessors })));
    }
    getBars(scales) {
        // The line renderer will make the chart look like a line chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(undefined, this.palette.backgroundColors);
        accessors.data.start = (d) => d.value / 2;
        accessors.data.end = (d) => d.value * 1.5;
        return [
            {
                id: "bars-1",
                name: "Series 1",
                data: [
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(), value: 30 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:20:00Z", format).toDate(), value: 95 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:40:00Z", format).toDate(), value: 15 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:00:00Z", format).toDate(), value: 60 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:30:00Z", format).toDate(), value: 35 },
                ],
            },
            {
                id: "bars-2",
                name: "Series 2",
                data: [
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(), value: 60 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:10:00Z", format).toDate(), value: 40 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:00Z", format).toDate(), value: 70 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:15:00Z", format).toDate(), value: 45 },
                    { category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:20:00Z", format).toDate(), value: 90 },
                ],
            },
        ].map(s => (Object.assign(Object.assign({}, s), { scales,
            renderer,
            accessors })));
    }
};
LineTimeSeriesTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-time-series-test",
        template: _raw_loader_line_time_series_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LineTimeSeriesTestComponent);



/***/ })

}]);
//# sourceMappingURL=time-bands-time-bands-example-module-es2015.js.map