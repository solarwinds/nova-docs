(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-plugins-tooltips-chart-docs-tooltips-module"],{

/***/ "KBYt":
/*!*********************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/chart-docs-tooltips.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ChartDocsTooltipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsTooltipsModule", function() { return ChartDocsTooltipsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _bar_chart_bar_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-chart/bar-chart-with-tooltips.example.component */ "fq1i");
/* harmony import */ var _chart_docs_tooltips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart-docs-tooltips.component */ "d8J8");
/* harmony import */ var _donut_chart_donut_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./donut-chart/donut-chart-with-tooltips.example.component */ "b7Y1");
/* harmony import */ var _line_chart_line_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line-chart/line-chart-with-tooltips.example.component */ "ZqBt");
/* harmony import */ var _visual_test_tooltips_visual_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visual-test/tooltips-visual-test.component */ "lBi1");












const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_tooltips_component__WEBPACK_IMPORTED_MODULE_8__["ChartDocsTooltipsComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "line",
        component: _line_chart_line_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_10__["LineChartWithTooltipsExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "bar",
        component: _bar_chart_bar_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_7__["BarChartWithTooltipsExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "visual-test",
        component: _visual_test_tooltips_visual_test_component__WEBPACK_IMPORTED_MODULE_11__["TooltipsVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ChartDocsTooltipsModule = class ChartDocsTooltipsModule {
};
ChartDocsTooltipsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bar_chart_bar_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_7__["BarChartWithTooltipsExampleComponent"],
            _chart_docs_tooltips_component__WEBPACK_IMPORTED_MODULE_8__["ChartDocsTooltipsComponent"],
            _line_chart_line_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_10__["LineChartWithTooltipsExampleComponent"],
            _donut_chart_donut_chart_with_tooltips_example_component__WEBPACK_IMPORTED_MODULE_9__["DonutChartWithTooltipsExampleComponent"],
            _visual_test_tooltips_visual_test_component__WEBPACK_IMPORTED_MODULE_11__["TooltipsVisualTestComponent"],
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
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("Y18g") },
        ],
    })
], ChartDocsTooltipsModule);



/***/ }),

/***/ "Y18g":
/*!*******************************************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar-chart/bar-chart-with-tooltips.example.component.html": "BGub",
	"./bar-chart/bar-chart-with-tooltips.example.component.ts": "gXOl",
	"./chart-docs-tooltips.component.html": "U+s9",
	"./chart-docs-tooltips.component.ts": "Pkp1",
	"./chart-docs-tooltips.module.ts": "cFqG",
	"./donut-chart/donut-chart-with-tooltips.example.component.html": "W+hr",
	"./donut-chart/donut-chart-with-tooltips.example.component.ts": "bRPr",
	"./line-chart/line-chart-with-tooltips.example.component.html": "ZdrO",
	"./line-chart/line-chart-with-tooltips.example.component.ts": "XPc+",
	"./visual-test/tooltips-visual-test.component.html": "CiTo",
	"./visual-test/tooltips-visual-test.component.less": "l6mW",
	"./visual-test/tooltips-visual-test.component.ts": "IrCi"
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
webpackContext.id = "Y18g";

/***/ }),

/***/ "ZqBt":
/*!************************************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/line-chart/line-chart-with-tooltips.example.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: LineChartWithTooltipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartWithTooltipsExampleComponent", function() { return LineChartWithTooltipsExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_line_chart_with_tooltips_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./line-chart-with-tooltips.example.component.html */ "ZdrO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let LineChartWithTooltipsExampleComponent = class LineChartWithTooltipsExampleComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartTooltipsPlugin"]();
    }
    ngOnInit() {
        // this is necessary to make the chart work in OnPush change detection mode
        this.chartAssist.onEvent = () => this.changeDetector.detectChanges();
        // plugin setup
        this.chart.addPlugin(this.tooltipsPlugin);
        // providing chartAssist colors and markers to LineAccessors will share them with the line chart
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // chart assist needs to be used to update the chart's data
        this.chartAssist.update(seriesSet);
    }
};
LineChartWithTooltipsExampleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
LineChartWithTooltipsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-with-tooltips-example",
        template: _raw_loader_line_chart_with_tooltips_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], LineChartWithTooltipsExampleComponent);

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
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format), y: 90 },
            ],
        },
    ];
}


/***/ }),

/***/ "b7Y1":
/*!**************************************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/donut-chart/donut-chart-with-tooltips.example.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DonutChartWithTooltipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChartWithTooltipsExampleComponent", function() { return DonutChartWithTooltipsExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_chart_with_tooltips_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-chart-with-tooltips.example.component.html */ "W+hr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let DonutChartWithTooltipsExampleComponent = class DonutChartWithTooltipsExampleComponent {
    constructor() {
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"], new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](createStatusColorProvider()));
        // RadialTooltipsPlugin handles specific positioning requirements for tooltips on a donut chart
        this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialTooltipsPlugin"]();
    }
    ngOnInit() {
        // plugin setup
        this.chartAssist.chart.addPlugin(this.tooltipsPlugin);
        // accessors setup for colors
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"](this.chartAssist.palette.standardColors);
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"]();
        this.chartAssist.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            scales,
            renderer }))));
    }
};
DonutChartWithTooltipsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-donut-chart-with-tooltips-example",
        template: _raw_loader_donut_chart_with_tooltips_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DonutChartWithTooltipsExampleComponent);

var Status;
(function (Status) {
    Status["Up"] = "up";
    Status["Warning"] = "warning";
    Status["Critical"] = "critical";
    Status["Down"] = "down";
    Status["Unmanaged"] = "unmanaged";
    Status["Unknown"] = "unknown";
})(Status || (Status = {}));
/* Chart data */
function getData() {
    return [
        { status: Status.Up, value: 42 },
        { status: Status.Warning, value: 14 },
        { status: Status.Critical, value: 8 },
        { status: Status.Down, value: 7 },
        { status: Status.Unmanaged, value: 5 },
        { status: Status.Unknown, value: 3 },
    ].map(d => ({ id: d.status, name: d.status, data: [d.value] }));
}
function createStatusColorProvider() {
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]({
        [Status.Up]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4],
        [Status.Warning]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2],
        [Status.Critical]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1],
        [Status.Down]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][0],
        [Status.Unmanaged]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][5],
        [Status.Unknown]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][3],
    });
}


/***/ }),

/***/ "d8J8":
/*!************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/chart-docs-tooltips.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChartDocsTooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsTooltipsComponent", function() { return ChartDocsTooltipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_tooltips_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-tooltips.component.html */ "U+s9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsTooltipsComponent = class ChartDocsTooltipsComponent {
    constructor() {
        this.tooltipsTypeScript = `this.tooltipsPlugin = new ChartTooltipsPlugin();
this.chart.addPlugin(this.tooltipsPlugin);
...`;
        this.tooltipsHtml = `...
<nui-chart-tooltips [plugin]="tooltipsPlugin" [template]="tooltipTemplate"></nui-chart-tooltips>

<ng-template let-dataPoint="dataPoint"
             #tooltipTemplate>
    <div class="p-1 d-flex align-items-center">
        <nui-chart-marker [marker]="chartAssist.markers.get(dataPoint.seriesId)"
                          [color]="chartAssist.palette.standardColors.get(dataPoint.seriesId)"></nui-chart-marker>
        <span class="pl-2">{{dataPoint.data.y}}</span>
    </div>
</ng-template>
...`;
    }
};
ChartDocsTooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-tooltips",
        template: _raw_loader_chart_docs_tooltips_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsTooltipsComponent);



/***/ }),

/***/ "fq1i":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/bar-chart/bar-chart-with-tooltips.example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BarChartWithTooltipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartWithTooltipsExampleComponent", function() { return BarChartWithTooltipsExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bar_chart_with_tooltips_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bar-chart-with-tooltips.example.component.html */ "BGub");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let BarChartWithTooltipsExampleComponent = class BarChartWithTooltipsExampleComponent {
    constructor() {
        this.grid = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])();
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.grid));
        this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"]();
    }
    ngOnInit() {
        // plugin setup (absence of InteractionLinePlugin setup will result in no interaction line)
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
        this.chartAssist.chart.addPlugin(this.tooltipsPlugin);
        // grid configuration
        this.grid.config().interactionPlugins = false;
        // map each category to a specific color
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(undefined, this.chartAssist.palette.standardColors);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x") });
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
        // tell the chart assist to populate the chart
        this.chartAssist.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            renderer,
            scales }))));
    }
};
BarChartWithTooltipsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-with-tooltips-example",
        template: _raw_loader_bar_chart_with_tooltips_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], BarChartWithTooltipsExampleComponent);

/* Chart data */
function getData() {
    return [
        { id: "chrome", name: "Chrome", data: [20] },
        { id: "safari", name: "Safari", data: [14] },
        { id: "firefox", name: "Firefox", data: [5] },
        { id: "uc ", name: "UC Browser", data: [4] },
        { id: "opera", name: "Opera", data: [3] },
        { id: "edge", name: "Edge", data: [3] },
        { id: "other", name: "Other", data: [5] },
    ];
}


/***/ }),

/***/ "lBi1":
/*!*************************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/visual-test/tooltips-visual-test.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TooltipsVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsVisualTestComponent", function() { return TooltipsVisualTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tooltips_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tooltips-visual-test.component.html */ "CiTo");
/* harmony import */ var _tooltips_visual_test_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltips-visual-test.component.less */ "wfRX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let TooltipsVisualTestComponent = class TooltipsVisualTestComponent {
};
TooltipsVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-chart-tooltips-visual-test",
        template: _raw_loader_tooltips_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tooltips_visual_test_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TooltipsVisualTestComponent);



/***/ }),

/***/ "wfRX":
/*!***************************************************************************************************!*\
  !*** ./examples/components/demo/plugins/tooltips/visual-test/tooltips-visual-test.component.less ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollable-container {\n  height: 150px;\n  overflow: auto;\n}\n.tall-div {\n  height: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXBzLXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtBQUFKIiwiZmlsZSI6InRvb2x0aXBzLXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGFsbC1kaXYge1xuICAgIGhlaWdodDogMTUwcHg7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=components-demo-plugins-tooltips-chart-docs-tooltips-module-es2015.js.map