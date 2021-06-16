(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-accessors-colors-chart-docs-accessors-colors-module"],{

/***/ "25IG":
/*!********************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ChartDocsAccessorsColorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsColorsModule", function() { return ChartDocsAccessorsColorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _chart_docs_accessors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-docs-accessors-colors.component */ "Mo/C");
/* harmony import */ var _custom_accessor_colors_custom_accessor_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-accessor/colors-custom-accessor.example.component */ "5pnJ");
/* harmony import */ var _custom_provider_colors_custom_provider_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-provider/colors-custom-provider.example.component */ "AeJW");








const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_accessors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsAccessorsColorsComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "custom-provider",
        component: _custom_provider_colors_custom_provider_example_component__WEBPACK_IMPORTED_MODULE_7__["RendererColorsCustomProviderExampleComponent"],
    },
    {
        path: "custom-accessor",
        component: _custom_accessor_colors_custom_accessor_example_component__WEBPACK_IMPORTED_MODULE_6__["RendererColorsCustomAccessorExampleComponent"],
    },
];
let ChartDocsAccessorsColorsModule = class ChartDocsAccessorsColorsModule {
};
ChartDocsAccessorsColorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _custom_provider_colors_custom_provider_example_component__WEBPACK_IMPORTED_MODULE_7__["RendererColorsCustomProviderExampleComponent"],
            _custom_accessor_colors_custom_accessor_example_component__WEBPACK_IMPORTED_MODULE_6__["RendererColorsCustomAccessorExampleComponent"],
            _chart_docs_accessors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsAccessorsColorsComponent"],
        ],
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("aTPA") },
        ],
    })
], ChartDocsAccessorsColorsModule);



/***/ }),

/***/ "5pnJ":
/*!******************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/colors/custom-accessor/colors-custom-accessor.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: RendererColorsCustomAccessorExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererColorsCustomAccessorExampleComponent", function() { return RendererColorsCustomAccessorExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colors_custom_accessor_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colors-custom-accessor.example.component.html */ "b+XA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let RendererColorsCustomAccessorExampleComponent = class RendererColorsCustomAccessorExampleComponent {
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
        // Custom color accessor
        accessors.series.color = () => _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS2"][6];
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { scales,
            renderer,
            accessors })));
        this.chart.update(seriesSet);
    }
};
RendererColorsCustomAccessorExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-colors-custom-accessor-example",
        template: _raw_loader_colors_custom_accessor_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RendererColorsCustomAccessorExampleComponent);

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

/***/ "AeJW":
/*!******************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/colors/custom-provider/colors-custom-provider.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: RendererColorsCustomProviderExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererColorsCustomProviderExampleComponent", function() { return RendererColorsCustomProviderExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colors_custom_provider_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colors-custom-provider.example.component.html */ "i4WR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let RendererColorsCustomProviderExampleComponent = class RendererColorsCustomProviderExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
    }
    ngOnInit() {
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        // Defining custom color palette
        const customColors = [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS2"][2], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS2"][4], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS2"][0]];
        // Setting color accessor to use new SequentialColorProvider with custom colors
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](customColors));
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { scales,
            renderer,
            accessors })));
        this.chart.update(seriesSet);
    }
};
RendererColorsCustomProviderExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-colors-custom-provider-example",
        template: _raw_loader_colors_custom_provider_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RendererColorsCustomProviderExampleComponent);

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

/***/ "Mo/C":
/*!***********************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ChartDocsAccessorsColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsColorsComponent", function() { return ChartDocsAccessorsColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_accessors_colors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-accessors-colors.component.html */ "ngjk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsAccessorsColorsComponent = class ChartDocsAccessorsColorsComponent {
    constructor() {
        this.customAccessorSnippet = `const accessors: ILineAccessors = new LineAccessors();
accessors.series.color = () => CHART_PALETTE_CS2[6];
...`;
        this.customProviderSnippet = `const accessors = new LineAccessors();
const customPalette = [CHART_PALETTE_CS2[2], CHART_PALETTE_CS2[4], CHART_PALETTE_CS2[0]];
accessors.series.color = new SequentialColorProvider(customPalette).get;
...`;
    }
};
ChartDocsAccessorsColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-accessors-colors",
        template: _raw_loader_chart_docs_accessors_colors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsAccessorsColorsComponent);



/***/ }),

/***/ "aTPA":
/*!**********************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/colors sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-accessors-colors.component.html": "ngjk",
	"./chart-docs-accessors-colors.component.ts": "3cAq",
	"./chart-docs-accessors-colors.module.ts": "QsMe",
	"./custom-accessor/colors-custom-accessor.example.component.html": "b+XA",
	"./custom-accessor/colors-custom-accessor.example.component.ts": "UAvc",
	"./custom-provider/colors-custom-provider.example.component.html": "i4WR",
	"./custom-provider/colors-custom-provider.example.component.ts": "Yrve"
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
webpackContext.id = "aTPA";

/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-accessors-colors-chart-docs-accessors-colors-module-es2015.js.map