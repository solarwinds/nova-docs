(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-scales-formatters-chart-docs-formatters-module"],{

/***/ "82q9":
/*!***************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/scales/formatters/chart-docs-formatters.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChartDocsFormattersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsFormattersModule", function() { return ChartDocsFormattersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _chart_docs_formatters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-docs-formatters.component */ "LuZG");
/* harmony import */ var _tick_formatter_tick_formatter_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tick-formatter/tick-formatter.example.component */ "RItm");







const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_formatters_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsFormattersComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "tick",
        component: _tick_formatter_tick_formatter_example_component__WEBPACK_IMPORTED_MODULE_6__["TickFormatterExampleComponent"],
    },
];
let ChartDocsFormattersModule = class ChartDocsFormattersModule {
};
ChartDocsFormattersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _tick_formatter_tick_formatter_example_component__WEBPACK_IMPORTED_MODULE_6__["TickFormatterExampleComponent"],
            _chart_docs_formatters_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsFormattersComponent"],
        ],
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("kDgf") },
        ],
    })
], ChartDocsFormattersModule);



/***/ }),

/***/ "LuZG":
/*!******************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/scales/formatters/chart-docs-formatters.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChartDocsFormattersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsFormattersComponent", function() { return ChartDocsFormattersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_formatters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-formatters.component.html */ "WdGD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsFormattersComponent = class ChartDocsFormattersComponent {
    constructor() {
        this.customTicks = `scales.x.formatters.tick = (value: Number) => (Number(value).toFixed(2));
scales.y.formatters.tick = (value: Number) => \`> $\{value\} %\`;
...`;
    }
};
ChartDocsFormattersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-formatters",
        template: _raw_loader_chart_docs_formatters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsFormattersComponent);



/***/ }),

/***/ "RItm":
/*!**********************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/scales/formatters/tick-formatter/tick-formatter.example.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TickFormatterExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickFormatterExampleComponent", function() { return TickFormatterExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tick_formatter_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tick-formatter.example.component.html */ "nhCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let TickFormatterExampleComponent = class TickFormatterExampleComponent {
    ngOnInit() {
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        scales.y.formatters.tick = (value) => `> ${value} %`;
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](), renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](), scales })));
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]();
        // Set the grid's 'axis.left.fit' property to 'true' to accommodate the extra label width required by the y-scale's tick formatter output.
        grid.config().axis.left.fit = true;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](grid);
        this.chart.update(seriesSet);
    }
};
TickFormatterExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-tick-formatter-example",
        template: _raw_loader_tick_formatter_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TickFormatterExampleComponent);

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
    ];
}


/***/ }),

/***/ "kDgf":
/*!***********************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/scales/formatters sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-formatters.component.html": "WdGD",
	"./chart-docs-formatters.component.ts": "zmJ9",
	"./chart-docs-formatters.module.ts": "Dzs2",
	"./tick-formatter/tick-formatter.example.component.html": "nhCc",
	"./tick-formatter/tick-formatter.example.component.ts": "dkyL"
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
webpackContext.id = "kDgf";

/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-scales-formatters-chart-docs-formatters-module-es2015.js.map