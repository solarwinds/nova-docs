(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["area-chart-docs-area-module"],{

/***/ "17Qt":
/*!*************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/test/area-chart-test.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AreaChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartTestComponent", function() { return AreaChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-test.component.html */ "Hyit");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AreaChartTestComponent = class AreaChartTestComponent {
};
AreaChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-test",
        template: _raw_loader_area_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AreaChartTestComponent);



/***/ }),

/***/ "DYV9":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-basic/area-chart-basic-example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AreaChartBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartBasicExampleComponent", function() { return AreaChartBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-basic-example.component.html */ "piB5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let AreaChartBasicExampleComponent = class AreaChartBasicExampleComponent {
    ngOnInit() {
        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["areaGrid"])());
        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaAccessors"]();
        // 'x' defines access for values in the data that correspond to the horizontal axis
        accessors.data.x = (d) => d.timeStamp;
        // 'y0' defines the baseline, in other words, where the area starts
        accessors.data.y0 = () => 0;
        // 'y1' defines access to the numeric values we want to visualize, in other words, where the area ends
        accessors.data.y1 = (d) => d.value;
        // 'x' and 'y' accessors define the position of the marker. 'x' was already defined, so now we need to define 'y' as well.
        // Notice that the 'y' is assigned the 'absoluteY1' accessor which takes into account areas that may be stacked below
        // the current area and retrieves the absolute distance from the baseline to the area's value line.
        accessors.data.y = accessors.data.absoluteY1;
        // The area renderer will make the chart look like an area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaRenderer"]();
        // In case of a area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        // Fixing the domain is optional.
        scales.y.fixDomain([0, 100]);
        // Here we assemble the complete chart series.
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // Finally, pass the series set to the chart's update method.
        this.chart.update(seriesSet);
    }
};
AreaChartBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-basic-example",
        template: _raw_loader_area_chart_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AreaChartBasicExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 65 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 40 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 60 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 70 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 45 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 75 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 85 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 55 },
            ],
        },
    ];
}


/***/ }),

/***/ "HZac":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-stack/area-chart-stack-example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AreaChartStackExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartStackExampleComponent", function() { return AreaChartStackExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_stack_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-stack-example.component.html */ "cOoB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let AreaChartStackExampleComponent = class AreaChartStackExampleComponent {
    ngOnInit() {
        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["areaGrid"])());
        // ChartAssist will use the preprocessor to stack the series' numeric values on the same progression domain
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stackedArea"]);
        // Stacked Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stackedAreaAccessors"])();
        // 'y1' defines access to the numeric values we want to visualize.
        // The items in the data array of this example have a property named 'value',so we'll use that.
        accessors.data.y1 = (d) => d.value;
        // The area renderer will make the chart look like a area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaRenderer"]();
        // In case of a area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        // Here we assemble the complete chart series.
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // Finally, pass the series set to the chart's update method
        this.chartAssist.update(seriesSet);
    }
};
AreaChartStackExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-stack-example",
        template: _raw_loader_area_chart_stack_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AreaChartStackExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 6 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 33 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 20 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 12 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 6 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 23 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 25 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 38 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 25 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 43 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 28 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 12 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 65 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 23 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 12 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 50 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 75 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 50 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 85 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 55 },
            ],
        },
    ];
}


/***/ }),

/***/ "K2ZU":
/*!****************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-vertical/area-chart-vertical-example.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AreaChartVerticalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartVerticalExampleComponent", function() { return AreaChartVerticalExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_vertical_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-vertical-example.component.html */ "gtoS");
/* harmony import */ var _area_chart_vertical_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-chart-vertical-example.component.less */ "U+EE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let AreaChartVerticalExampleComponent = class AreaChartVerticalExampleComponent {
    ngOnInit() {
        const gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGridConfig"]();
        // Disable interaction because we don't support a horizontal interaction line yet
        gridConfig.interactionPlugins = false;
        gridConfig.axis.left.gridTicks = false;
        gridConfig.axis.left.tickSize = 0;
        gridConfig.axis.bottom.gridTicks = true;
        gridConfig.axis.left.fit = true;
        gridConfig.axis.bottom.fit = true;
        gridConfig.axis.bottom.tickSize = 0;
        gridConfig.axis.left.tickSize = 5;
        gridConfig.dimension.padding.left = 2; // 2 for border
        gridConfig.borders.left.visible = true;
        gridConfig.borders.bottom.visible = false;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](gridConfig));
        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["AreaAccessors"]();
        accessors.data.y = (d, i) => i;
        accessors.data.x0 = () => 0;
        accessors.data.x1 = (d) => d.value;
        // The area renderer will make the chart look like an area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["AreaRenderer"]();
        // In case of a area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"](),
        };
        scales.x.fixDomain([0, 100]);
        // Here we assemble the complete chart series.
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // Finally, pass the series set to the chart's update method
        this.chart.update(seriesSet);
    }
};
AreaChartVerticalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "area-chart-vertical-example",
        template: _raw_loader_area_chart_vertical_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_area_chart_vertical_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AreaChartVerticalExampleComponent);

/* Chart data */
function getData() {
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { value: 12 },
                { value: 65 },
                { value: 30 },
                { value: 40 },
                { value: 90 },
                { value: 23 },
                { value: 12 },
            ],
        },
    ];
}


/***/ }),

/***/ "QNbB":
/*!*******************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./area-chart-basic/area-chart-basic-example.component.html": "piB5",
	"./area-chart-basic/area-chart-basic-example.component.ts": "MjEx",
	"./area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.html": "RZLy",
	"./area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.ts": "nX1H",
	"./area-chart-bi-directional/area-chart-bi-directional-example.component.html": "gPTH",
	"./area-chart-bi-directional/area-chart-bi-directional-example.component.ts": "bkcT",
	"./area-chart-stack-percentage/area-chart-stack-percentage-example.component.html": "+NPZ",
	"./area-chart-stack-percentage/area-chart-stack-percentage-example.component.ts": "Mr0e",
	"./area-chart-stack/area-chart-stack-example.component.html": "cOoB",
	"./area-chart-stack/area-chart-stack-example.component.ts": "5qbj",
	"./area-chart-variable-baseline/area-chart-variable-baseline-example.component.html": "2+7X",
	"./area-chart-variable-baseline/area-chart-variable-baseline-example.component.ts": "3OzY",
	"./area-chart-vertical/area-chart-vertical-example.component.html": "gtoS",
	"./area-chart-vertical/area-chart-vertical-example.component.less": "kxlW",
	"./area-chart-vertical/area-chart-vertical-example.component.ts": "ahTr",
	"./chart-docs-area.component.html": "e7Ie",
	"./chart-docs-area.component.ts": "TdCo",
	"./chart-docs-area.module.ts": "VNrK",
	"./test/area-chart-test.component.html": "Hyit",
	"./test/area-chart-test.component.ts": "zWfn"
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
webpackContext.id = "QNbB";

/***/ }),

/***/ "ThxX":
/*!********************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-stack-percentage/area-chart-stack-percentage-example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AreaChartStackPercentageExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartStackPercentageExampleComponent", function() { return AreaChartStackPercentageExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_stack_percentage_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-stack-percentage-example.component.html */ "+NPZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let AreaChartStackPercentageExampleComponent = class AreaChartStackPercentageExampleComponent {
    ngOnInit() {
        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["areaGrid"])());
        // ChartAssist will use the preprocessor to stack the series' numeric values on the same progression domain.
        // In this case we use the 'stackedPercentageArea' preprocessor to scale each series area as a percentage of the sum of all corresponding series values.
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stackedPercentageArea"]);
        // Stacked Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stackedAreaAccessors"])();
        // 'y1' defines access to the numeric values we want to visualize.
        // The items in the data array of this example have a property named 'value',so we'll use that.
        accessors.data.y1 = (d) => d.value;
        // The area renderer will make the chart look like a area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaRenderer"]();
        // In case of a area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        // Here we assemble the complete chart series.
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // Finally, pass the series set to the chart's update method
        this.chartAssist.update(seriesSet);
    }
};
AreaChartStackPercentageExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-stack-percentage-example",
        template: _raw_loader_area_chart_stack_percentage_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AreaChartStackPercentageExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 6 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 33 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 23 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 25 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 38 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 25 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 43 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 28 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 12 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 65 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 23 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 50 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 75 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 50 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 85 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 55 },
            ],
        },
        {
            id: "series-3",
            name: "Series 3",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 17 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 42 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 12 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 47 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 21 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 12 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 454 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 550 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 7 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 5 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 110 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 550 },
            ],
        },
    ];
}


/***/ }),

/***/ "U+EE":
/*!******************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-vertical/area-chart-vertical-example.component.less ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n  height: 275px;\n  width: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtY2hhcnQtdmVydGljYWwtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXJlYS1jaGFydC12ZXJ0aWNhbC1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0IHtcbiAgICBoZWlnaHQ6IDI3NXB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "V3MY":
/*!*****************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/chart-docs-area.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ChartDocsAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAreaModule", function() { return ChartDocsAreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _area_chart_basic_area_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./area-chart-basic/area-chart-basic-example.component */ "DYV9");
/* harmony import */ var _area_chart_bi_directional_area_chart_bi_directional_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./area-chart-bi-directional/area-chart-bi-directional-example.component */ "Y7S3");
/* harmony import */ var _area_chart_stack_percentage_area_chart_stack_percentage_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./area-chart-stack-percentage/area-chart-stack-percentage-example.component */ "ThxX");
/* harmony import */ var _area_chart_stack_area_chart_stack_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./area-chart-stack/area-chart-stack-example.component */ "HZac");
/* harmony import */ var _area_chart_variable_baseline_area_chart_variable_baseline_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./area-chart-variable-baseline/area-chart-variable-baseline-example.component */ "WmF3");
/* harmony import */ var _area_chart_vertical_area_chart_vertical_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./area-chart-vertical/area-chart-vertical-example.component */ "K2ZU");
/* harmony import */ var _chart_docs_area_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart-docs-area.component */ "p8ED");
/* harmony import */ var _test_area_chart_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./test/area-chart-test.component */ "17Qt");
/* harmony import */ var _area_chart_bi_directional_stacked_area_chart_bi_directional_stacked_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component */ "ZDyK");
















const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_area_component__WEBPACK_IMPORTED_MODULE_13__["ChartDocsAreaComponent"],
        data: {
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "basic",
        component: _area_chart_basic_area_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["AreaChartBasicExampleComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
    {
        path: "bi-directional",
        component: _area_chart_bi_directional_area_chart_bi_directional_example_component__WEBPACK_IMPORTED_MODULE_8__["AreaChartBiDirectionalExampleComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
    {
        path: "variable-baseline",
        component: _area_chart_variable_baseline_area_chart_variable_baseline_example_component__WEBPACK_IMPORTED_MODULE_11__["AreaChartVariableBaselineExampleComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
    {
        path: "vertical",
        component: _area_chart_vertical_area_chart_vertical_example_component__WEBPACK_IMPORTED_MODULE_12__["AreaChartVerticalExampleComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
    {
        path: "test",
        component: _test_area_chart_test_component__WEBPACK_IMPORTED_MODULE_14__["AreaChartTestComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
    {
        path: "stacked",
        component: _area_chart_stack_area_chart_stack_example_component__WEBPACK_IMPORTED_MODULE_10__["AreaChartStackExampleComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
    {
        path: "bi-directional-stacked",
        component: _area_chart_bi_directional_stacked_area_chart_bi_directional_stacked_example_component__WEBPACK_IMPORTED_MODULE_15__["AreaChartBiDirectionalStackedExampleComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
];
let ChartDocsAreaModule = class ChartDocsAreaModule {
};
ChartDocsAreaModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_docs_area_component__WEBPACK_IMPORTED_MODULE_13__["ChartDocsAreaComponent"],
            _area_chart_basic_area_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["AreaChartBasicExampleComponent"],
            _area_chart_bi_directional_area_chart_bi_directional_example_component__WEBPACK_IMPORTED_MODULE_8__["AreaChartBiDirectionalExampleComponent"],
            _area_chart_bi_directional_stacked_area_chart_bi_directional_stacked_example_component__WEBPACK_IMPORTED_MODULE_15__["AreaChartBiDirectionalStackedExampleComponent"],
            _area_chart_variable_baseline_area_chart_variable_baseline_example_component__WEBPACK_IMPORTED_MODULE_11__["AreaChartVariableBaselineExampleComponent"],
            _area_chart_vertical_area_chart_vertical_example_component__WEBPACK_IMPORTED_MODULE_12__["AreaChartVerticalExampleComponent"],
            _area_chart_stack_area_chart_stack_example_component__WEBPACK_IMPORTED_MODULE_10__["AreaChartStackExampleComponent"],
            _area_chart_stack_percentage_area_chart_stack_percentage_example_component__WEBPACK_IMPORTED_MODULE_9__["AreaChartStackPercentageExampleComponent"],
            _test_area_chart_test_component__WEBPACK_IMPORTED_MODULE_14__["AreaChartTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("QNbB") },
        ],
    })
], ChartDocsAreaModule);



/***/ }),

/***/ "WmF3":
/*!**********************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-variable-baseline/area-chart-variable-baseline-example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: AreaChartVariableBaselineExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartVariableBaselineExampleComponent", function() { return AreaChartVariableBaselineExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_variable_baseline_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-variable-baseline-example.component.html */ "2+7X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let AreaChartVariableBaselineExampleComponent = class AreaChartVariableBaselineExampleComponent {
    ngOnInit() {
        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements
        const grid = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["areaGrid"])();
        // set the 'axis.left.fit' property to 'true' to accommodate the extra width required by the negative sign on the left axis labels
        grid.config().axis.left.fit = true;
        // pass the configured grid to the chart's constructor
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](grid);
        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaAccessors"]();
        // 'x' defines access for values in the data that correspond to the horizontal axis
        accessors.data.x = (d) => d.timeStamp;
        // 'y0' defines access to the baseline values we want to visualize, in other words, where the area starts
        accessors.data.y0 = (d) => d.start;
        // 'y1' defines access to the top line values we want to visualize, in other words, where the area ends
        accessors.data.y1 = (d) => d.end;
        // The area renderer will make the chart look like an area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaRenderer"]();
        // In case of a area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        // Fixing the domain is optional.
        scales.y.fixDomain([-100, 100]);
        // Here we assemble the complete chart series.
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // Finally, pass the series set to the chart's update method.
        this.chart.update(seriesSet);
    }
};
AreaChartVariableBaselineExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-variable-baseline-example",
        template: _raw_loader_area_chart_variable_baseline_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AreaChartVariableBaselineExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), start: -58, end: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), start: -5, end: 65 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), start: -40, end: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), start: -30, end: 40 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), start: -10, end: 60 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), start: -47, end: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), start: -58, end: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), start: 0, end: 70 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), start: -25, end: 45 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), start: -20, end: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), start: 5, end: 75 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), start: -20, end: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), start: 15, end: 85 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), start: -15, end: 55 },
            ],
        },
    ];
}


/***/ }),

/***/ "Y7S3":
/*!****************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-bi-directional/area-chart-bi-directional-example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: AreaChartBiDirectionalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartBiDirectionalExampleComponent", function() { return AreaChartBiDirectionalExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_bi_directional_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-bi-directional-example.component.html */ "gPTH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let AreaChartBiDirectionalExampleComponent = class AreaChartBiDirectionalExampleComponent {
    ngOnInit() {
        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["areaGrid"])());
        // ChartAssist helps with synchronizing hover events between the chart and the legend
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors1 = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaAccessors"]();
        // 'x' defines access for values in the data that correspond to the horizontal axis
        accessors1.data.x = (d) => d.timeStamp;
        // 'y0' defines the baseline, in other words, where the area starts
        accessors1.data.y0 = () => 0;
        // 'y1' defines access to the numeric values we want to visualize, in other words, where the area ends
        accessors1.data.y1 = (d) => d.value;
        // 'x' and 'y' accessors define the position of the marker. 'x' was already defined, so now we need to define 'y' as well.
        // Notice that the 'y' is assigned the 'absoluteY1' accessor which takes into account areas that may be stacked below
        // the current area and retrieves the absolute distance from the baseline to the area's value line.
        accessors1.data.y = accessors1.data.absoluteY1;
        // Even though we're using different accessor instances for each series, we want to use the same marker
        // accessor so that each series is assigned a different marker shape from the same marker sequence.
        // Take a look also at the marker assignment for the second accessors instance below.
        accessors1.series.marker = this.chartAssist.markers.get;
        /**
         * This second AreaAccessors instance flips the sign of the value so that
         * the area is displayed below the baseline.
         */
        const accessors2 = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaAccessors"]();
        accessors2.data.x = (d) => d.timeStamp;
        accessors2.data.y0 = () => 0;
        // Here's where we flip the sign of the value so that the area is displayed below the baseline
        accessors2.data.y1 = (d) => -d.value;
        // Both series use the same color accessor so that the second series will use the second color in the sequence
        accessors2.series.color = accessors1.series.color;
        // 'y' defines the position of the marker
        accessors2.data.y = accessors2.data.absoluteY1;
        // Even though we're using different accessor instances for each series, we want to use the same marker
        // accessor so that each series is assigned a different marker shape from the same marker sequence.
        accessors2.series.marker = this.chartAssist.markers.get;
        // The area renderer will make the chart look like an area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaRenderer"]();
        // In case of an area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        /**
         * This tick formatter will format values on the left axis as positive both above and baseline as
         * well as in the legend. For legend setup, see 'chartAssist.getHighlightedValue' usage in the
         * template file.
         */
        scales.y.formatters.tick = (value) => `${Math.abs(value)}`;
        // Fixing the domain is optional.
        scales.y.fixDomain([-100, 100]);
        // Here we assemble the complete chart series.
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { renderer,
            scales })));
        // In this case, each series has its own accessors instance.
        seriesSet[0].accessors = accessors1;
        seriesSet[1].accessors = accessors2;
        // Finally, pass the series set to the chart's update method.
        this.chartAssist.update(seriesSet);
    }
};
AreaChartBiDirectionalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-bi-directional-example",
        template: _raw_loader_area_chart_bi_directional_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AreaChartBiDirectionalExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "up",
            name: "Up Speed",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 6 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 33 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 15 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 20 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 6 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 35 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 25 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 38 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 25 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 43 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 28 },
            ],
        },
        {
            id: "down",
            name: "Dn Speed",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 65 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 40 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 60 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 70 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 45 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 75 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 85 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 55 },
            ],
        },
    ];
}


/***/ }),

/***/ "ZDyK":
/*!********************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: AreaChartBiDirectionalStackedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaChartBiDirectionalStackedExampleComponent", function() { return AreaChartBiDirectionalStackedExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_chart_bi_directional_stacked_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-chart-bi-directional-stacked-example.component.html */ "RZLy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let AreaChartBiDirectionalStackedExampleComponent = class AreaChartBiDirectionalStackedExampleComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
    }
    ngOnInit() {
        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.
        this.chartTop = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](topChartConfig()), { updateDomainForEmptySeries: true });
        this.chartAssistTop = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chartTop, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stackedArea"]);
        this.chartBottom = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](bottomChartConfig()), { updateDomainForEmptySeries: true });
        this.chartAssistBottom = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chartBottom, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stackedArea"]);
        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaAccessors"]();
        // 'x' defines access for values in the data that correspond to the horizontal axis
        accessors.data.x = (d) => d.timeStamp;
        // 'y0' defines the baseline, in other words, where the area starts
        accessors.data.y0 = () => 0;
        // 'y1' defines access to the numeric values we want to visualize, in other words, where the area ends
        accessors.data.y1 = (d) => d.value;
        // 'x' and 'y' accessors define the position of the marker. 'x' was already defined, so now we need to define 'y' as well.
        // Notice that the 'y' is assigned the 'absoluteY1' accessor which takes into account areas that may be stacked below
        // the current area and retrieves the absolute distance from the baseline to the area's value line.
        accessors.data.y = accessors.data.absoluteY1;
        // Even though we're using different accessor instances for each series, we want to use the same marker
        // accessor so that each series is assigned a different marker shape from the same marker sequence.
        // Take a look also at the marker assignment for the second accessors instance below.
        accessors.series.marker = this.chartAssistTop.markers.get;
        accessors.series.color = this.chartAssistTop.palette.standardColors.get;
        // The area renderer will make the chart look like an area chart.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["AreaRenderer"]();
        const xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
        // In case of an area chart, the scale definitions are flexible.
        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
        const scalesTop = {
            x: xScale,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const scalesBottom = {
            x: xScale,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]().reverse(),
        };
        // Here we assemble the complete chart series.
        const seriesSetTop = getDataTop().map(d => (Object.assign(Object.assign({}, d), { renderer,
            accessors, scales: scalesTop })));
        const seriesSetBottom = getDataBottom().map(d => (Object.assign(Object.assign({}, d), { renderer,
            accessors, scales: scalesBottom })));
        scalesTop.y.domainCalculator = scalesTop.x.domainCalculator =
            Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["domainWithAuxiliarySeries"])(() => seriesSetBottom, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomain"]);
        scalesBottom.y.domainCalculator = scalesBottom.x.domainCalculator =
            Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["domainWithAuxiliarySeries"])(() => seriesSetTop, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomain"]);
        this.chartAssistTop.update(seriesSetTop);
        this.chartAssistBottom.update(seriesSetBottom);
    }
    onSelectedChange(legendSeries, value, currentChartAssist) {
        let chartAssists = [this.chartAssistTop, this.chartAssistBottom];
        if (currentChartAssist === this.chartAssistBottom) {
            chartAssists = chartAssists.reverse();
        }
        for (const ca of chartAssists) {
            ca.toggleSeries(legendSeries.id, value);
        }
    }
};
AreaChartBiDirectionalStackedExampleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
AreaChartBiDirectionalStackedExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "area-chart-bi-directional-stacked-example",
        template: _raw_loader_area_chart_bi_directional_stacked_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], AreaChartBiDirectionalStackedExampleComponent);

function topChartConfig(c = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]()) {
    c.dimension.margin.bottom = 0;
    c.dimension.padding.bottom = 0;
    c.borders.bottom.visible = false;
    return c;
}
function bottomChartConfig(c = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]()) {
    c.dimension.padding.top = 0;
    c.dimension.margin.top = 0;
    return c;
}
/* Chart data */
function getDataTop() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "up1",
            name: "Up Speed",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 6 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 33 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 15 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 20 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 6 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 35 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 25 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 38 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 25 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 43 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 28 },
            ],
        },
        {
            id: "down1",
            name: "Dn Speed",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 65 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 40 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 60 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 70 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 45 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 75 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 85 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 55 },
            ],
        },
    ];
}
function getDataBottom() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "up2",
            name: "Up Speed",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 6 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 33 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 15 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 20 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 6 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 35 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 95 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 38 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 25 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 43 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 28 },
            ],
        },
        {
            id: "down2",
            name: "Dn Speed",
            data: [
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T11:45:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:10:29.909Z", format), value: 65 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T12:50:29.909Z", format), value: 30 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:15:29.909Z", format), value: 40 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:40:29.909Z", format), value: 60 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T13:55:29.909Z", format), value: 23 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:20:29.909Z", format), value: 12 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:40:29.909Z", format), value: 250 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:29.909Z", format), value: 45 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:29.909Z", format), value: 75 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:10:29.909Z", format), value: 50 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:30:29.909Z", format), value: 85 },
                { timeStamp: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:45:29.909Z", format), value: 55 },
            ],
        },
    ];
}


/***/ }),

/***/ "p8ED":
/*!********************************************************************************!*\
  !*** ./examples/components/demo/chart-types/area/chart-docs-area.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChartDocsAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAreaComponent", function() { return ChartDocsAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_area_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-area.component.html */ "e7Ie");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsAreaComponent = class ChartDocsAreaComponent {
};
ChartDocsAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-area",
        template: _raw_loader_chart_docs_area_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsAreaComponent);



/***/ })

}]);
//# sourceMappingURL=area-chart-docs-area-module-es2015.js.map