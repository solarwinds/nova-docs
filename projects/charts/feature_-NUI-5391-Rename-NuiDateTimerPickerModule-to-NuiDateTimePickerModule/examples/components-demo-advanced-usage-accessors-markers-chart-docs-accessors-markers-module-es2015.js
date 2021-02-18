(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-accessors-markers-chart-docs-accessors-markers-module"],{

/***/ "01Ww":
/*!********************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/markers/custom-provider/markers-custom-provider.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: RendererMarkersCustomProviderExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererMarkersCustomProviderExampleComponent", function() { return RendererMarkersCustomProviderExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_markers_custom_provider_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./markers-custom-provider.example.component.html */ "Efuy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let RendererMarkersCustomProviderExampleComponent = class RendererMarkersCustomProviderExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
    }
    ngOnInit() {
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        // Defining custom marker set
        const customMarkerSet = [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"][6], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"][8], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"][9]];
        // Setting marker accessor to use new SequentialChartMarkerProvider with custom markers
        accessors.series.marker = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](customMarkerSet).get;
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { scales,
            renderer,
            accessors })));
        this.chart.update(seriesSet);
    }
};
RendererMarkersCustomProviderExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-markers-custom-provider-example",
        template: _raw_loader_markers_custom_provider_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RendererMarkersCustomProviderExampleComponent);

/* Chart data */
function getData() {
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: 1, y: 30 },
                { x: 2, y: 50 },
                { x: 3, y: 25 },
                { x: 4, y: 40 },
                { x: 5, y: 35 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: 1, y: 20 },
                { x: 2, y: 40 },
                { x: 3, y: 15 },
                { x: 4, y: 30 },
                { x: 5, y: 25 },
            ],
        },
        {
            id: "series-3",
            name: "Series 3",
            data: [
                { x: 1, y: 10 },
                { x: 2, y: 30 },
                { x: 3, y: 5 },
                { x: 4, y: 20 },
                { x: 5, y: 15 },
            ],
        },
    ];
}


/***/ }),

/***/ "Kx0U":
/*!***********************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/markers sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-accessors-markers.component.html": "0EkY",
	"./chart-docs-accessors-markers.component.ts": "ZDPj",
	"./chart-docs-accessors-markers.module.ts": "JTeL",
	"./custom-accessor/markers-custom-accessor.example.component.html": "bVjY",
	"./custom-accessor/markers-custom-accessor.example.component.ts": "874e",
	"./custom-provider/markers-custom-provider.example.component.html": "Efuy",
	"./custom-provider/markers-custom-provider.example.component.ts": "7fPP"
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
webpackContext.id = "Kx0U";

/***/ }),

/***/ "TI39":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ChartDocsAccessorsMarkersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsMarkersModule", function() { return ChartDocsAccessorsMarkersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _chart_docs_accessors_markers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-docs-accessors-markers.component */ "ead/");
/* harmony import */ var _custom_accessor_markers_custom_accessor_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-accessor/markers-custom-accessor.example.component */ "aTlV");
/* harmony import */ var _custom_provider_markers_custom_provider_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-provider/markers-custom-provider.example.component */ "01Ww");








const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_accessors_markers_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsAccessorsMarkersComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "custom-provider",
        component: _custom_provider_markers_custom_provider_example_component__WEBPACK_IMPORTED_MODULE_7__["RendererMarkersCustomProviderExampleComponent"],
    },
    {
        path: "custom-accessor",
        component: _custom_accessor_markers_custom_accessor_example_component__WEBPACK_IMPORTED_MODULE_6__["RendererMarkersCustomAccessorExampleComponent"],
    },
];
let ChartDocsAccessorsMarkersModule = class ChartDocsAccessorsMarkersModule {
};
ChartDocsAccessorsMarkersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _custom_provider_markers_custom_provider_example_component__WEBPACK_IMPORTED_MODULE_7__["RendererMarkersCustomProviderExampleComponent"],
            _custom_accessor_markers_custom_accessor_example_component__WEBPACK_IMPORTED_MODULE_6__["RendererMarkersCustomAccessorExampleComponent"],
            _chart_docs_accessors_markers_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsAccessorsMarkersComponent"],
        ],
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("Kx0U") },
        ],
    })
], ChartDocsAccessorsMarkersModule);



/***/ }),

/***/ "aTlV":
/*!********************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/markers/custom-accessor/markers-custom-accessor.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: RendererMarkersCustomAccessorExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererMarkersCustomAccessorExampleComponent", function() { return RendererMarkersCustomAccessorExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_markers_custom_accessor_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./markers-custom-accessor.example.component.html */ "bVjY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let RendererMarkersCustomAccessorExampleComponent = class RendererMarkersCustomAccessorExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
    }
    ngOnInit() {
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        // Custom marker accessor
        accessors.series.marker = () => _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"][2];
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { scales,
            renderer,
            accessors })));
        this.chart.update(seriesSet);
    }
};
RendererMarkersCustomAccessorExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-markers-custom-accessor-example",
        template: _raw_loader_markers_custom_accessor_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RendererMarkersCustomAccessorExampleComponent);

/* Chart data */
function getData() {
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: 1, y: 30 },
                { x: 2, y: 50 },
                { x: 3, y: 25 },
                { x: 4, y: 40 },
                { x: 5, y: 35 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: 1, y: 20 },
                { x: 2, y: 40 },
                { x: 3, y: 15 },
                { x: 4, y: 30 },
                { x: 5, y: 25 },
            ],
        },
        {
            id: "series-3",
            name: "Series 3",
            data: [
                { x: 1, y: 10 },
                { x: 2, y: 30 },
                { x: 3, y: 5 },
                { x: 4, y: 20 },
                { x: 5, y: 15 },
            ],
        },
    ];
}


/***/ }),

/***/ "ead/":
/*!*************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ChartDocsAccessorsMarkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsMarkersComponent", function() { return ChartDocsAccessorsMarkersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_accessors_markers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-accessors-markers.component.html */ "0EkY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsAccessorsMarkersComponent = class ChartDocsAccessorsMarkersComponent {
    constructor() {
        this.customAccessorSnippet = `const accessors = new LineAccessors();
accessors.series.marker = () => CHART_MARKERS[2];
...`;
        this.customProviderSnippet = `const accessors = new LineAccessors();
const customMarkerSet = [CHART_MARKERS[6], CHART_MARKERS[8], CHART_MARKERS[9]];
accessors.series.marker = new SequentialChartMarkerProvider(customMarkerSet).get;
...`;
    }
};
ChartDocsAccessorsMarkersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-accessors-markers",
        template: _raw_loader_chart_docs_accessors_markers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsAccessorsMarkersComponent);



/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-accessors-markers-chart-docs-accessors-markers-module-es2015.js.map