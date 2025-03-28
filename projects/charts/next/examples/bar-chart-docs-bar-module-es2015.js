(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bar-chart-docs-bar-module"],{

/***/ "0h2D":
/*!*****************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-time-scale/bar-chart-time-scale.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BarChartTimeScaleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartTimeScaleExampleComponent", function() { return BarChartTimeScaleExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_time_scale_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-time-scale.example.component.html */ "1v3Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let BarChartTimeScaleExampleComponent = class BarChartTimeScaleExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
        const linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
        linearScale.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 0]);
        const scales = {
            x: bandScale,
            y: linearScale,
        };
        const start = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()([2018, 7, 4]);
        const seriesSet = getData(start).map((d) => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        bandScale.fixDomain(seriesSet.map(s => s.data[0].category));
        const scaleId = "bottom";
        const time = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](scaleId);
        const end = start.clone().add(seriesSet.length, "hour");
        time.fixDomain([start.clone().toDate(), end.toDate()]);
        // This is the most crucial part: users need to add "fake" series, so framework would be able to use provided time scale.
        // You need to provide scale for x or y and provide the id (for bottom or left scale). Id must be the same as the one used to create scale.
        // We suggest using Noops (render, accessor, other scale) for this fake series.
        seriesSet.push({
            id: "0",
            name: "hidden",
            data: [],
            accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopAccessors"](),
            renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopRenderer"](),
            scales: {
                x: time,
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopScale"](),
            },
        });
        this.chart.getGrid().bottomScaleId = scaleId;
        this.chart.update(seriesSet);
    }
};
BarChartTimeScaleExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-time-scale-example",
        template: _raw_loader_bar_chart_time_scale_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartTimeScaleExampleComponent);

/* Chart data */
function getData(start) {
    const values = [66, 14, 5, 40, 3, 23, 15];
    const dataSet = [];
    for (let i = 0; i < values.length; i++) {
        const date = start.clone().add(i, "hour");
        dataSet.push({
            id: `id-${i}`,
            name: date.toString(),
            data: [{
                    value: values[i],
                    category: date.toString(),
                    ["__bar"]: {
                        start: 0,
                        end: values[i],
                    },
                }],
        });
    }
    return dataSet;
}


/***/ }),

/***/ "3TZA":
/*!*******************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart/bar-chart.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BarChartExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartExampleComponent", function() { return BarChartExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart.example.component.html */ "J97j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BarChartExampleComponent = class BarChartExampleComponent {
    constructor() {
        // this configuration passed to barGrid, barAccessors, barScales determines the orientation of the bar chart
        this.config = { horizontal: false };
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.config));
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.config);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.config);
        this.chart.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
BarChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-example",
        template: _raw_loader_bar_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartExampleComponent);

/* Chart data */
function getData() {
    return [
        { id: "chrome", name: "Chrome", data: [66] },
        { id: "safari", name: "Safari", data: [14] },
        { id: "firefox", name: "Firefox", data: [5] },
        { id: "uc ", name: "UC Browser", data: [4] },
        { id: "opera", name: "Opera", data: [3] },
        { id: "other", name: "Other", data: [5] },
    ];
}


/***/ }),

/***/ "5xc8":
/*!***************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/chart-docs-bar.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChartDocsBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsBarModule", function() { return ChartDocsBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _bar_chart_horizontal_bar_chart_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-chart-horizontal/bar-chart-horizontal.example.component */ "P8wC");
/* harmony import */ var _bar_chart_test_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-chart-test/bar-chart-test.component */ "venF");
/* harmony import */ var _bar_chart_test_bar_chart_tick_label_max_width_with_margin_bar_chart_tick_label_max_width_with_margin_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component */ "d8q9");
/* harmony import */ var _bar_chart_test_bar_chart_tick_label_max_width_bar_chart_tick_label_max_width_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component */ "w4ni");
/* harmony import */ var _bar_chart_test_basic_horizontal_basic_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component */ "x55w");
/* harmony import */ var _bar_chart_test_basic_vertical_basic_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component */ "Kz8y");
/* harmony import */ var _bar_chart_test_horizontal_with_legend_horizontal_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component */ "u+UU");
/* harmony import */ var _bar_chart_test_time_interval_time_interval_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bar-chart-test/time-interval/time-interval.test.component */ "gHkq");
/* harmony import */ var _bar_chart_test_vertical_with_legend_vertical_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component */ "y362");
/* harmony import */ var _bar_chart_test_vertical_with_timescale_vertical_with_timescale_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component */ "pGMu");
/* harmony import */ var _bar_chart_time_interval_bar_chart_time_interval_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bar-chart-time-interval/bar-chart-time-interval.example.component */ "d/zz");
/* harmony import */ var _bar_chart_time_scale_bar_chart_time_scale_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bar-chart-time-scale/bar-chart-time-scale.example.component */ "0h2D");
/* harmony import */ var _bar_chart_with_legend_bar_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bar-chart-with-legend/bar-chart-with-legend.example.component */ "8Iil");
/* harmony import */ var _bar_chart_bar_chart_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bar-chart/bar-chart.example.component */ "3TZA");
/* harmony import */ var _chart_docs_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chart-docs-bar.component */ "ld5b");





















const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_bar_component__WEBPACK_IMPORTED_MODULE_20__["ChartDocsBarComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "bar-chart",
        component: _bar_chart_bar_chart_example_component__WEBPACK_IMPORTED_MODULE_19__["BarChartExampleComponent"],
        data: {
            "srlc": {
                hideIndicator: true,
            },
        },
    },
    {
        path: "horizontal",
        component: _bar_chart_horizontal_bar_chart_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__["BarChartHorizontalExampleComponent"],
        data: {
            "srlc": {
                hideIndicator: true,
            },
        },
    },
    {
        path: "with-legend",
        component: _bar_chart_with_legend_bar_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_18__["BarChartWithLegendExampleComponent"],
    },
    {
        path: "test",
        component: _bar_chart_test_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_7__["BarChartTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "time-interval",
        component: _bar_chart_time_interval_bar_chart_time_interval_example_component__WEBPACK_IMPORTED_MODULE_16__["BarChartTimeIntervalExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "vertical-bar-test",
        component: _bar_chart_test_basic_vertical_basic_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_11__["BasicVerticalBarChartTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "horizontal-bar-test",
        component: _bar_chart_test_basic_horizontal_basic_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["BasicHorizontalBarChartTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "bar-chart-max-width-test",
        component: _bar_chart_test_bar_chart_tick_label_max_width_bar_chart_tick_label_max_width_test_component__WEBPACK_IMPORTED_MODULE_9__["BarChartTickLabelMaxWidthTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "bar-chart-max-width-with-margin-test",
        component: _bar_chart_test_bar_chart_tick_label_max_width_with_margin_bar_chart_tick_label_max_width_with_margin_test_component__WEBPACK_IMPORTED_MODULE_8__["BarChartTickLabelMaxWidthWithMarginTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ChartDocsBarModule = class ChartDocsBarModule {
};
ChartDocsBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_docs_bar_component__WEBPACK_IMPORTED_MODULE_20__["ChartDocsBarComponent"],
            _bar_chart_bar_chart_example_component__WEBPACK_IMPORTED_MODULE_19__["BarChartExampleComponent"],
            _bar_chart_horizontal_bar_chart_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__["BarChartHorizontalExampleComponent"],
            _bar_chart_time_scale_bar_chart_time_scale_example_component__WEBPACK_IMPORTED_MODULE_17__["BarChartTimeScaleExampleComponent"],
            _bar_chart_time_interval_bar_chart_time_interval_example_component__WEBPACK_IMPORTED_MODULE_16__["BarChartTimeIntervalExampleComponent"],
            _bar_chart_test_bar_chart_tick_label_max_width_bar_chart_tick_label_max_width_test_component__WEBPACK_IMPORTED_MODULE_9__["BarChartTickLabelMaxWidthTestComponent"],
            _bar_chart_test_bar_chart_tick_label_max_width_with_margin_bar_chart_tick_label_max_width_with_margin_test_component__WEBPACK_IMPORTED_MODULE_8__["BarChartTickLabelMaxWidthWithMarginTestComponent"],
            _bar_chart_with_legend_bar_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_18__["BarChartWithLegendExampleComponent"],
            _bar_chart_test_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_7__["BarChartTestComponent"],
            _bar_chart_test_basic_horizontal_basic_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["BasicHorizontalBarChartTestComponent"],
            _bar_chart_test_basic_vertical_basic_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_11__["BasicVerticalBarChartTestComponent"],
            _bar_chart_test_vertical_with_timescale_vertical_with_timescale_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_15__["VerticalWithTimescaleBarChartTestComponent"],
            _bar_chart_test_vertical_with_legend_vertical_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_14__["VerticalWithLegendBarChartTestComponent"],
            _bar_chart_test_horizontal_with_legend_horizontal_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_12__["HorizontalWithLegendBarChartTestComponent"],
            _bar_chart_test_time_interval_time_interval_test_component__WEBPACK_IMPORTED_MODULE_13__["TimeIntervalTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("vn8Z") },
        ],
    })
], ChartDocsBarModule);



/***/ }),

/***/ "8Iil":
/*!*******************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-with-legend/bar-chart-with-legend.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BarChartWithLegendExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartWithLegendExampleComponent", function() { return BarChartWithLegendExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_with_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-with-legend.example.component.html */ "1Aus");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BarChartWithLegendExampleComponent = class BarChartWithLegendExampleComponent {
    constructor() {
        this.barConfig = { horizontal: false };
        // the usage of ChartAssist helps with connecting the chart with the legend
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig)));
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig, this.chartAssist.palette.standardColors);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
            // highlightStrategy determines how the bar chart should manage highlighting.
            // BarSeriesHighlightStrategy emphasizes the entire series on hovering a single bar,
            // which also triggers emphasis on the legend tile.
            highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x" /* "x" determines which scale the highlight should be driven by */),
        });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig);
        // it is important to update the chart via the chartAssist so that the legend is also updated
        this.chartAssist.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            scales,
            renderer }))));
    }
};
BarChartWithLegendExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-with-legend-example",
        template: _raw_loader_bar_chart_with_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartWithLegendExampleComponent);

/* Chart data */
function getData() {
    return [
        { id: "chrome", name: "Chrome", data: [66] },
        { id: "safari", name: "Safari", data: [14] },
        { id: "firefox", name: "Firefox", data: [5] },
        { id: "uc", name: "UC Browser", data: [4] },
        { id: "opera", name: "Opera", data: [3] },
        { id: "other", name: "Other", data: [5] },
    ];
}


/***/ }),

/***/ "Kz8y":
/*!***************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: BasicVerticalBarChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicVerticalBarChartTestComponent", function() { return BasicVerticalBarChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basic_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basic-vertical-bar-chart-test.component.html */ "IISk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BasicVerticalBarChartTestComponent = class BasicVerticalBarChartTestComponent {
    constructor() {
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()));
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
        this.chartAssist.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
BasicVerticalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-basic-vertical-bar-chart-test",
        template: _raw_loader_basic_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BasicVerticalBarChartTestComponent);

/* Chart data */
function getData() {
    return [
        { id: "chrome", name: "Chrome", data: [66] },
        { id: "safari", name: "Safari", data: [14] },
        { id: "firefox", name: "Firefox", data: [5] },
        { id: "uc ", name: "UC Browser", data: [4] },
        { id: "opera", name: "Opera", data: [3] },
        { id: "other", name: "Other", data: [5] },
    ];
}


/***/ }),

/***/ "P8wC":
/*!*****************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-horizontal/bar-chart-horizontal.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BarChartHorizontalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartHorizontalExampleComponent", function() { return BarChartHorizontalExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-horizontal.example.component.html */ "9/l/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BarChartHorizontalExampleComponent = class BarChartHorizontalExampleComponent {
    constructor() {
        this.barConfig = { horizontal: true };
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig));
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig);
        this.chart.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
BarChartHorizontalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-horizontal-example",
        template: _raw_loader_bar_chart_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartHorizontalExampleComponent);

/* Chart data */
function getData() {
    return [
        { id: "chrome", name: "Chrome", data: [66] },
        { id: "safari", name: "Safari", data: [14] },
        { id: "firefox", name: "Firefox", data: [5] },
        { id: "uc ", name: "UC Browser", data: [4] },
        { id: "opera", name: "Opera", data: [3] },
        { id: "other", name: "Other", data: [5] },
    ];
}


/***/ }),

/***/ "d/zz":
/*!***********************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-time-interval/bar-chart-time-interval.example.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BarChartTimeIntervalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartTimeIntervalExampleComponent", function() { return BarChartTimeIntervalExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_time_interval_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-time-interval.example.component.html */ "0Rf4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let BarChartTimeIntervalExampleComponent = class BarChartTimeIntervalExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        accessors.data.category = (d) => d.x;
        accessors.data.value = (d) => d.y;
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(1, "days")),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        this.chart.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
BarChartTimeIntervalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-time-interval-example",
        template: _raw_loader_bar_chart_time_interval_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartTimeIntervalExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-01T0", format).toDate(), y: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-02T0", format).toDate(), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-03T0", format).toDate(), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-04T0", format).toDate(), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-05T0", format).toDate(), y: 35 },
            ],
        },
    ];
}


/***/ }),

/***/ "d8q9":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: BarChartTickLabelMaxWidthWithMarginTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartTickLabelMaxWidthWithMarginTestComponent", function() { return BarChartTickLabelMaxWidthWithMarginTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_tick_label_max_width_with_margin_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-tick-label-max-width-with-margin-test.component.html */ "YH2w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BarChartTickLabelMaxWidthWithMarginTestComponent = class BarChartTickLabelMaxWidthWithMarginTestComponent {
    ngOnInit() {
        const config = { horizontal: true };
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(config);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(config);
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(config));
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        const gridConfig = this.chart.getGrid().config();
        gridConfig.axis.left.fit = false;
        gridConfig.dimension.margin.left = 100;
        gridConfig.axis.left.tickLabel.maxWidth = 50;
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        this.chartAssist.update(seriesSet);
    }
};
BarChartTickLabelMaxWidthWithMarginTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-tick-label-max-width-with-margin-test",
        template: _raw_loader_bar_chart_tick_label_max_width_with_margin_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartTickLabelMaxWidthWithMarginTestComponent);

/* Chart data */
function getData() {
    return [
        {
            id: "series-1",
            name: "Long Name Test Long Name Test",
            data: [20],
        },
        {
            id: "series-2",
            name: "Results",
            data: [80],
        },
        {
            id: "series-3",
            name: "Supercalifragilisticexpialidocious",
            data: [45],
        },
    ];
}


/***/ }),

/***/ "gHkq":
/*!***************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/time-interval/time-interval.test.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TimeIntervalTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeIntervalTestComponent", function() { return TimeIntervalTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_interval_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-interval.test.component.html */ "RqGI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let TimeIntervalTestComponent = class TimeIntervalTestComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        accessors.data.category = (d) => d.x;
        accessors.data.value = (d) => d.y;
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(1, "days")),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        this.chart.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
TimeIntervalTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-time-interval-test",
        template: _raw_loader_time_interval_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TimeIntervalTestComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-01T0", format).toDate(), y: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-02T0", format).toDate(), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-03T0", format).toDate(), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-04T0", format).toDate(), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-05T0", format).toDate(), y: 35 },
            ],
        },
    ];
}


/***/ }),

/***/ "ld5b":
/*!******************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/chart-docs-bar.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChartDocsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsBarComponent", function() { return ChartDocsBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-bar.component.html */ "2kIB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsBarComponent = class ChartDocsBarComponent {
    constructor() {
        this.horizontalConfig = `public config = { horizontal: true } as IBarChartConfig;
...
... barGrid(this.config) ...
... barScales(this.config) ...
... barAccessors(this.config) ...`;
    }
};
ChartDocsBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-bar",
        template: _raw_loader_chart_docs_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsBarComponent);



/***/ }),

/***/ "pGMu":
/*!*********************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: VerticalWithTimescaleBarChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalWithTimescaleBarChartTestComponent", function() { return VerticalWithTimescaleBarChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vertical_with_timescale_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vertical-with-timescale-bar-chart-test.component.html */ "jZPK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let VerticalWithTimescaleBarChartTestComponent = class VerticalWithTimescaleBarChartTestComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
        const start = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()([2018, 7, 4]);
        const seriesSet = getData(start).map((d) => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        scales.x.fixDomain(seriesSet.map(s => s.data[0].category));
        const scaleId = "bottom";
        const time = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](scaleId);
        const end = start.clone().add(seriesSet.length, "hour");
        time.fixDomain([start.clone().toDate(), end.toDate()]);
        // This is the most crucial part: users need to add "fake" series, so framework would be able to use provided time scale.
        // You need to provide scale for x or y and provide the id (for bottom or left scale). Id must be the same as the one used to create scale.
        // We suggest using Noops (render, accessor, other scale) for this fake series.
        seriesSet.push({
            id: "0",
            name: "hidden",
            data: [],
            accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopAccessors"](),
            renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopRenderer"](),
            scales: {
                x: time,
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopScale"](),
            },
        });
        this.chart.getGrid().bottomScaleId = scaleId;
        this.chart.update(seriesSet);
    }
};
VerticalWithTimescaleBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-vertical-with-timescale-bar-chart-test",
        template: _raw_loader_vertical_with_timescale_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], VerticalWithTimescaleBarChartTestComponent);

/* Chart data */
function getData(start) {
    const values = [66, 14, 5, 40, 3, 23, 15];
    const dataSet = [];
    for (let i = 0; i < values.length; i++) {
        const date = start.clone().add(i, "hour");
        dataSet.push({
            id: `id-${i}`,
            name: date.toString(),
            data: [{
                    value: values[i],
                    category: date.toString(),
                    ["__bar"]: {
                        start: 0,
                        end: values[i],
                    },
                }],
        });
    }
    return dataSet;
}


/***/ }),

/***/ "u+UU":
/*!*******************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: HorizontalWithLegendBarChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalWithLegendBarChartTestComponent", function() { return HorizontalWithLegendBarChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_horizontal_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./horizontal-with-legend-bar-chart-test.component.html */ "x45f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let HorizontalWithLegendBarChartTestComponent = class HorizontalWithLegendBarChartTestComponent {
    constructor() {
        this.barConfig = { horizontal: true };
        this.grid = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.grid));
    }
    ngOnInit() {
        this.grid.config().axis.left.visible = false;
        this.grid.config().dimension.margin.left = 0;
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig, this.chartAssist.palette.standardColors);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("y") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig);
        this.chartAssist.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            scales,
            renderer }))));
    }
};
HorizontalWithLegendBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-horizontal-with-legend-bar-chart-test",
        template: _raw_loader_horizontal_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HorizontalWithLegendBarChartTestComponent);

/* Chart data */
function getData() {
    return [
        { id: "chrome", name: "Chrome", data: [66] },
        { id: "safari", name: "Safari", data: [14] },
        { id: "firefox", name: "Firefox", data: [5] },
        { id: "uc", name: "UC Browser", data: [4] },
        { id: "opera", name: "Opera", data: [3] },
        { id: "other", name: "Other", data: [5] },
    ];
}


/***/ }),

/***/ "venF":
/*!*********************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-test.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BarChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartTestComponent", function() { return BarChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-test.component.html */ "V5TH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let BarChartTestComponent = class BarChartTestComponent {
};
BarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-test",
        template: _raw_loader_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartTestComponent);



/***/ }),

/***/ "vn8Z":
/*!******************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar-chart-horizontal/bar-chart-horizontal.example.component.html": "9/l/",
	"./bar-chart-horizontal/bar-chart-horizontal.example.component.ts": "j71K",
	"./bar-chart-test/bar-chart-test.component.html": "V5TH",
	"./bar-chart-test/bar-chart-test.component.ts": "HO4h",
	"./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.html": "YH2w",
	"./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.ts": "62iK",
	"./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.html": "0txK",
	"./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.ts": "zjRD",
	"./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.html": "OID3",
	"./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.ts": "iqrN",
	"./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.html": "IISk",
	"./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.ts": "bkbR",
	"./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.html": "x45f",
	"./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.ts": "cktB",
	"./bar-chart-test/time-interval/time-interval.test.component.html": "RqGI",
	"./bar-chart-test/time-interval/time-interval.test.component.ts": "uzU3",
	"./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.html": "JuaB",
	"./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.ts": "9LuY",
	"./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.html": "jZPK",
	"./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.ts": "vYZz",
	"./bar-chart-time-interval/bar-chart-time-interval.example.component.html": "0Rf4",
	"./bar-chart-time-interval/bar-chart-time-interval.example.component.ts": "DevO",
	"./bar-chart-time-scale/bar-chart-time-scale.example.component.html": "1v3Y",
	"./bar-chart-time-scale/bar-chart-time-scale.example.component.ts": "pYVe",
	"./bar-chart-with-legend/bar-chart-with-legend.example.component.html": "1Aus",
	"./bar-chart-with-legend/bar-chart-with-legend.example.component.ts": "j9Gm",
	"./bar-chart/bar-chart.example.component.html": "J97j",
	"./bar-chart/bar-chart.example.component.ts": "Zw7l",
	"./chart-docs-bar.component.html": "2kIB",
	"./chart-docs-bar.component.ts": "7LK1",
	"./chart-docs-bar.module.ts": "N8dz"
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
webpackContext.id = "vn8Z";

/***/ }),

/***/ "w4ni":
/*!*************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: BarChartTickLabelMaxWidthTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartTickLabelMaxWidthTestComponent", function() { return BarChartTickLabelMaxWidthTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_tick_label_max_width_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-tick-label-max-width-test.component.html */ "0txK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BarChartTickLabelMaxWidthTestComponent = class BarChartTickLabelMaxWidthTestComponent {
    ngOnInit() {
        const config = { horizontal: true };
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(config);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(config);
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(config));
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        const gridConfig = this.chart.getGrid().config();
        gridConfig.axis.left.tickLabel.maxWidth = 100;
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        this.chartAssist.update(seriesSet);
    }
};
BarChartTickLabelMaxWidthTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-tick-label-max-width-test",
        template: _raw_loader_bar_chart_tick_label_max_width_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartTickLabelMaxWidthTestComponent);

/* Chart data */
function getData() {
    return [
        {
            id: "series-1",
            name: "Long Name Test Long Name Test",
            data: [20],
        },
        {
            id: "series-2",
            name: "Results",
            data: [80],
        },
        {
            id: "series-3",
            name: "Supercalifragilisticexpialidocious",
            data: [45],
        },
    ];
}


/***/ }),

/***/ "x55w":
/*!*******************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: BasicHorizontalBarChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicHorizontalBarChartTestComponent", function() { return BasicHorizontalBarChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basic_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basic-horizontal-bar-chart-test.component.html */ "OID3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BasicHorizontalBarChartTestComponent = class BasicHorizontalBarChartTestComponent {
    constructor() {
        this.config = { horizontal: true };
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.config));
        const gridConfig = this.chart.getGrid().config();
        gridConfig.axis.left.fit = false;
        gridConfig.dimension.margin.left = 150;
    }
    ngAfterViewInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.config);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.config);
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        this.chart.update(seriesSet);
    }
};
BasicHorizontalBarChartTestComponent.ctorParameters = () => [];
BasicHorizontalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-basic-horizontal-bar-chart-test",
        template: _raw_loader_basic_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BasicHorizontalBarChartTestComponent);

function getData() {
    return [
        { id: "series-1", name: "Long Name Test Long Name Test", data: [20] },
        { id: "series-2", name: "Results", data: [80] },
    ];
}


/***/ }),

/***/ "y362":
/*!***************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: VerticalWithLegendBarChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalWithLegendBarChartTestComponent", function() { return VerticalWithLegendBarChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vertical_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vertical-with-legend-bar-chart-test.component.html */ "JuaB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




var Status;
(function (Status) {
    Status["Up"] = "up";
    Status["Warning"] = "warning";
    Status["Critical"] = "critical";
    Status["Down"] = "down";
    Status["Unmanaged"] = "unmanaged";
    Status["Unknown"] = "unknown";
})(Status || (Status = {}));
let VerticalWithLegendBarChartTestComponent = class VerticalWithLegendBarChartTestComponent {
    constructor() {
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()));
    }
    ngOnInit() {
        const statusColorProvider = createColorProvider();
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        accessors.series.color = (seriesId, dataSeries) => statusColorProvider.get(dataSeries.name);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
        scales.x.formatters.tick = (value) => value.charAt(0).toUpperCase() + value.slice(1);
        this.chartAssist.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
VerticalWithLegendBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-vertical-with-legend-bar-chart-test",
        template: _raw_loader_vertical_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], VerticalWithLegendBarChartTestComponent);

function createColorProvider() {
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]({
        [Status.Up]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4],
        [Status.Warning]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2],
        [Status.Critical]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1],
        [Status.Down]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][0],
        [Status.Unmanaged]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][5],
        [Status.Unknown]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][3],
    });
}
/* Chart data */
function getData() {
    return [
        { id: Status.Up, name: Status.Up, data: [42] },
        { id: Status.Warning, name: Status.Warning, data: [14] },
        { id: Status.Critical, name: Status.Critical, data: [8] },
        { id: Status.Down, name: Status.Down, data: [7] },
        { id: Status.Unmanaged, name: Status.Unmanaged, data: [5] },
        { id: Status.Unknown, name: Status.Unknown, data: [3] },
    ];
}


/***/ })

}]);
//# sourceMappingURL=bar-chart-docs-bar-module-es2015.js.map