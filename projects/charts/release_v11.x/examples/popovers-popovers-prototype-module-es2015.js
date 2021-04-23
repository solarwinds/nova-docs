(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popovers-popovers-prototype-module"],{

/***/ "1sBU":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/line-chart/line-chart-popover-prototype.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\" nuiChartCollectionId=\"1\"></nui-chart>\n\n<nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n<ng-template let-dataPoints=\"dataPoints\"\n             #popoverTemplate>\n    <div class=\"p-3\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.key}}: </strong>\n            <code>{{item.value.data | json}}</code>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "1vFg":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/data-point/data-point-popovers-prototype.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-example-wrapper filenamePrefix=\"data-point-popovers-prototype\" exampleTitle=\"Data Point Popovers Prototype\">\n    <nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n\n    <div class=\"my-3 d-flex align-items-center\">\n        <nui-switch class=\"ml-3 py-2\" (valueChange)=\"onToggleClickHandling($event)\">Enable Click Handling</nui-switch>\n        <button *ngIf=\"renderer.config.markerInteraction?.clickable\" class=\"ml-3\" type=\"button\" displayStyle=\"action\" (click)=\"onReset()\" nui-button>Reset Popover</button>\n    </div>\n\n    <nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n    <ng-template let-dataPoints=\"dataPoints\" #popoverTemplate>\n        <div class=\"p-3\">\n            <div *ngFor=\"let item of dataPoints | keyvalue\">\n                <div><strong>{{item.key}}:</strong></div>\n                <div><code>Data: {{item.value.data | json}}</code></div>\n                <div><code>Position: {{item.value.position | json}}</code></div>\n            </div>\n        </div>\n    </ng-template>\n\n</nui-example-wrapper>\n");

/***/ }),

/***/ "82Cl":
/*!***********************************************************************************************************************!*\
  !*** ./examples/components/demo/development/popovers sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./data-point/data-point-popovers-prototype.component.html": "1vFg",
	"./data-point/data-point-popovers-prototype.component.ts": "aep4",
	"./line-chart/line-chart-popover-prototype.component.html": "1sBU",
	"./line-chart/line-chart-popover-prototype.component.ts": "gj/V",
	"./line-chart/popover-performance-test.component.html": "8Hmg",
	"./line-chart/popover-performance-test.component.less": "y2ce",
	"./line-chart/popover-performance-test.component.ts": "sPGq",
	"./popovers-prototype.module.ts": "OQd2"
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
webpackContext.id = "82Cl";

/***/ }),

/***/ "8Hmg":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/line-chart/popover-performance-test.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n    <line-chart-popover-prototype class=\"chart d-block\"></line-chart-popover-prototype>\n</div>\n");

/***/ }),

/***/ "BARs":
/*!********************************************************************************************************!*\
  !*** ./examples/components/demo/development/popovers/line-chart/popover-performance-test.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PopoverPerformanceTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPerformanceTestComponent", function() { return PopoverPerformanceTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_popover_performance_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./popover-performance-test.component.html */ "8Hmg");
/* harmony import */ var _popover_performance_test_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-performance-test.component.less */ "zDnU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PopoverPerformanceTestComponent = class PopoverPerformanceTestComponent {
};
PopoverPerformanceTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_popover_performance_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_performance_test_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PopoverPerformanceTestComponent);



/***/ }),

/***/ "OQd2":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/popovers-prototype.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiIconModule, NuiSwitchModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { DataPointPopoversPrototypeComponent } from \"./data-point/data-point-popovers-prototype.component\";\nimport { LineChartPopoverPrototypeComponent } from \"./line-chart/line-chart-popover-prototype.component\";\nimport { PopoverPerformanceTestComponent } from \"./line-chart/popover-performance-test.component\";\n\nconst routes: Routes = [\n    {\n        path: \"line\",\n        component: LineChartPopoverPrototypeComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"performance\",\n        component: PopoverPerformanceTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"data-point\",\n        component: DataPointPopoversPrototypeComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n        },\n    },\n\n];\n\n@NgModule({\n    declarations: [\n        LineChartPopoverPrototypeComponent,\n        DataPointPopoversPrototypeComponent,\n        PopoverPerformanceTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiButtonModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiIconModule,\n        NuiSwitchModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n})\nexport class PopoversPrototypeModule {\n}\n");

/***/ }),

/***/ "aep4":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/data-point/data-point-popovers-prototype.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    ChartPopoverPlugin,\n    DATA_POINT_INTERACTION_RESET,\n    IChartSeries,\n    IDataPoint,\n    IInteractionDataPointEvent,\n    ILineAccessors,\n    InteractionType,\n    INTERACTION_DATA_POINT_EVENT,\n    IXYScales,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    TimeScale,\n    XYGrid\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    templateUrl: \"./data-point-popovers-prototype.component.html\",\n})\nexport class DataPointPopoversPrototypeComponent implements OnInit {\n    public chart: Chart;\n    public renderer = new LineRenderer({ markerInteraction: { enabled: true } });\n    public scales: IXYScales = {\n        x: new TimeScale(),\n        y: new LinearScale(),\n    };\n    public accessors: LineAccessors;\n\n    public chartAssist: ChartAssist;\n    public popoverPlugin: ChartPopoverPlugin;\n\n    public ngOnInit() {\n        this.buildChart();\n        this.updateChart();\n    }\n\n    public onReset() {\n        // send INTERACTION_DATA_POINT_EVENT with index DATA_POINT_INTERACTION_RESET to hide popover if its displayed\n        const data: IInteractionDataPointEvent = { interactionType: InteractionType.Click, dataPoint: { index: DATA_POINT_INTERACTION_RESET } as IDataPoint };\n        this.chart.getEventBus().getStream(INTERACTION_DATA_POINT_EVENT).next({ data });\n    }\n\n    public onToggleClickHandling(enable: boolean) {\n        // enable the pointer cursor when the data point markers are hovered\n        const markerInteraction = this.renderer.config?.markerInteraction;\n        if (markerInteraction) {\n            markerInteraction.clickable = enable;\n        }\n        this.buildChart(enable ? InteractionType.Click : InteractionType.Hover);\n        this.updateChart();\n    }\n\n    private buildChart(dataPointInteractionType: InteractionType = InteractionType.Hover) {\n        // set the desired interaction type for popover handling\n        this.popoverPlugin = new ChartPopoverPlugin({\n            eventStreamId: INTERACTION_DATA_POINT_EVENT,\n            interactionType: dataPointInteractionType,\n        });\n\n        this.chart = new Chart(new XYGrid());\n        this.chartAssist = new ChartAssist(this.chart);\n        this.accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        this.chart.addPlugin(this.popoverPlugin);\n    }\n\n    private updateChart() {\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(s => ({\n            ...s,\n            scales: this.scales,\n            renderer: this.renderer,\n            accessors: this.accessors,\n        }));\n\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-26T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-28T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-01T15:14:29.909Z\", format), y: 80 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "c/20":
/*!************************************************************************************!*\
  !*** ./examples/components/demo/development/popovers/popovers-prototype.module.ts ***!
  \************************************************************************************/
/*! exports provided: PopoversPrototypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoversPrototypeModule", function() { return PopoversPrototypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _data_point_data_point_popovers_prototype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-point/data-point-popovers-prototype.component */ "hsQk");
/* harmony import */ var _line_chart_line_chart_popover_prototype_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line-chart/line-chart-popover-prototype.component */ "eVoe");
/* harmony import */ var _line_chart_popover_performance_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./line-chart/popover-performance-test.component */ "BARs");









const routes = [
    {
        path: "line",
        component: _line_chart_line_chart_popover_prototype_component__WEBPACK_IMPORTED_MODULE_7__["LineChartPopoverPrototypeComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "performance",
        component: _line_chart_popover_performance_test_component__WEBPACK_IMPORTED_MODULE_8__["PopoverPerformanceTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "data-point",
        component: _data_point_data_point_popovers_prototype_component__WEBPACK_IMPORTED_MODULE_6__["DataPointPopoversPrototypeComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
];
let PopoversPrototypeModule = class PopoversPrototypeModule {
};
PopoversPrototypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _line_chart_line_chart_popover_prototype_component__WEBPACK_IMPORTED_MODULE_7__["LineChartPopoverPrototypeComponent"],
            _data_point_data_point_popovers_prototype_component__WEBPACK_IMPORTED_MODULE_6__["DataPointPopoversPrototypeComponent"],
            _line_chart_popover_performance_test_component__WEBPACK_IMPORTED_MODULE_8__["PopoverPerformanceTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        providers: [
            {
                provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
                useFactory: () => __webpack_require__("82Cl"),
            },
        ],
    })
], PopoversPrototypeModule);



/***/ }),

/***/ "eVoe":
/*!************************************************************************************************************!*\
  !*** ./examples/components/demo/development/popovers/line-chart/line-chart-popover-prototype.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: LineChartPopoverPrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartPopoverPrototypeComponent", function() { return LineChartPopoverPrototypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_line_chart_popover_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./line-chart-popover-prototype.component.html */ "1sBU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let LineChartPopoverPrototypeComponent = class LineChartPopoverPrototypeComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        this.popoverPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPopoverPlugin"]();
    }
    ngOnInit() {
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]("x"),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        // providing chartAssist colors and markers to LineAccessors will share them with the line chart
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
        const seriesSet = getData().map(s => (Object.assign(Object.assign({}, s), { scales,
            renderer,
            accessors })));
        // plugin setup
        this.chart.addPlugin(this.popoverPlugin);
        // chart assist needs to be used to update data
        this.chartAssist.update(seriesSet);
    }
};
LineChartPopoverPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-popover-prototype",
        template: _raw_loader_line_chart_popover_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LineChartPopoverPrototypeComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    const baseDate = "2016-12-25T15:14:29.909Z";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format), y: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(1, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(2, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(3, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(4, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(5, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(6, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(7, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(8, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(9, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(10, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(11, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(12, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(13, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(14, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(15, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(16, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(17, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(18, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(19, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(20, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(21, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(22, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(23, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(24, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(25, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(26, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(27, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(28, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(29, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(30, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(31, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(32, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(33, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(34, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(35, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(36, "day"), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(37, "day"), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(38, "day"), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(39, "day"), y: 35 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(40, "day"), y: 35 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(1, "day"), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(3, "day"), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(5, "day"), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(7, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(9, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(11, "day"), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(13, "day"), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(15, "day"), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(17, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(19, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(21, "day"), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(23, "day"), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(25, "day"), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(27, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(29, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(31, "day"), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(33, "day"), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(35, "day"), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(37, "day"), y: 90 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(39, "day"), y: 90 },
            ],
        },
    ];
}


/***/ }),

/***/ "gj/V":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/line-chart/line-chart-popover-prototype.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, ChartPopoverPlugin, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-popover-prototype\",\n    templateUrl: \"./line-chart-popover-prototype.component.html\",\n})\nexport class LineChartPopoverPrototypeComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n    public popoverPlugin = new ChartPopoverPlugin();\n\n    public ngOnInit() {\n        const scales: IXYScales = {\n            x: new TimeScale(\"x\"),\n            y: new LinearScale(),\n        };\n        const renderer = new LineRenderer();\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(s => ({\n            ...s,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        // plugin setup\n        this.chart.addPlugin(this.popoverPlugin);\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n    const baseDate = \"2016-12-25T15:14:29.909Z\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(baseDate, format), y: 30 },\n                { x: moment(baseDate, format).add(1, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(2, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(3, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(4, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(5, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(6, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(7, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(8, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(9, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(10, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(11, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(12, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(13, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(14, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(15, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(16, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(17, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(18, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(19, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(20, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(21, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(22, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(23, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(24, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(25, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(26, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(27, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(28, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(29, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(30, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(31, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(32, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(33, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(34, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(35, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(36, \"day\"), y: 95 },\n                { x: moment(baseDate, format).add(37, \"day\"), y: 15 },\n                { x: moment(baseDate, format).add(38, \"day\"), y: 60 },\n                { x: moment(baseDate, format).add(39, \"day\"), y: 35 },\n                { x: moment(baseDate, format).add(40, \"day\"), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(baseDate, format), y: 60 },\n                { x: moment(baseDate, format).add(1, \"day\"), y: 40 },\n                { x: moment(baseDate, format).add(3, \"day\"), y: 70 },\n                { x: moment(baseDate, format).add(5, \"day\"), y: 45 },\n                { x: moment(baseDate, format).add(7, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(9, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(11, \"day\"), y: 40 },\n                { x: moment(baseDate, format).add(13, \"day\"), y: 70 },\n                { x: moment(baseDate, format).add(15, \"day\"), y: 45 },\n                { x: moment(baseDate, format).add(17, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(19, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(21, \"day\"), y: 40 },\n                { x: moment(baseDate, format).add(23, \"day\"), y: 70 },\n                { x: moment(baseDate, format).add(25, \"day\"), y: 45 },\n                { x: moment(baseDate, format).add(27, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(29, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(31, \"day\"), y: 40 },\n                { x: moment(baseDate, format).add(33, \"day\"), y: 70 },\n                { x: moment(baseDate, format).add(35, \"day\"), y: 45 },\n                { x: moment(baseDate, format).add(37, \"day\"), y: 90 },\n                { x: moment(baseDate, format).add(39, \"day\"), y: 90 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "hsQk":
/*!*************************************************************************************************************!*\
  !*** ./examples/components/demo/development/popovers/data-point/data-point-popovers-prototype.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DataPointPopoversPrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPointPopoversPrototypeComponent", function() { return DataPointPopoversPrototypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_data_point_popovers_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./data-point-popovers-prototype.component.html */ "1vFg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let DataPointPopoversPrototypeComponent = class DataPointPopoversPrototypeComponent {
    constructor() {
        this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]({ markerInteraction: { enabled: true } });
        this.scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
    }
    ngOnInit() {
        this.buildChart();
        this.updateChart();
    }
    onReset() {
        // send INTERACTION_DATA_POINT_EVENT with index DATA_POINT_INTERACTION_RESET to hide popover if its displayed
        const data = { interactionType: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Click, dataPoint: { index: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["DATA_POINT_INTERACTION_RESET"] } };
        this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_DATA_POINT_EVENT"]).next({ data });
    }
    onToggleClickHandling(enable) {
        var _a;
        // enable the pointer cursor when the data point markers are hovered
        const markerInteraction = (_a = this.renderer.config) === null || _a === void 0 ? void 0 : _a.markerInteraction;
        if (markerInteraction) {
            markerInteraction.clickable = enable;
        }
        this.buildChart(enable ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Click : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Hover);
        this.updateChart();
    }
    buildChart(dataPointInteractionType = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionType"].Hover) {
        // set the desired interaction type for popover handling
        this.popoverPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPopoverPlugin"]({
            eventStreamId: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_DATA_POINT_EVENT"],
            interactionType: dataPointInteractionType,
        });
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        this.accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
        this.chart.addPlugin(this.popoverPlugin);
    }
    updateChart() {
        const seriesSet = getData().map(s => (Object.assign(Object.assign({}, s), { scales: this.scales, renderer: this.renderer, accessors: this.accessors })));
        this.chartAssist.update(seriesSet);
    }
};
DataPointPopoversPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_data_point_popovers_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DataPointPopoversPrototypeComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format), y: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format), y: 35 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-26T15:14:29.909Z", format), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-28T15:14:29.909Z", format), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-01T15:14:29.909Z", format), y: 80 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format), y: 90 },
            ],
        },
    ];
}


/***/ }),

/***/ "sPGq":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/line-chart/popover-performance-test.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./popover-performance-test.component.html\",\n    styleUrls: [\"./popover-performance-test.component.less\"],\n})\nexport class PopoverPerformanceTestComponent { }\n");

/***/ }),

/***/ "y2ce":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/popovers/line-chart/popover-performance-test.component.less ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n    margin-top: 75px;\n}\n");

/***/ }),

/***/ "zDnU":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/development/popovers/line-chart/popover-performance-test.component.less ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n  margin-top: 75px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItcGVyZm9ybWFuY2UtdGVzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoicG9wb3Zlci1wZXJmb3JtYW5jZS10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0IHtcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=popovers-popovers-prototype-module-es2015.js.map