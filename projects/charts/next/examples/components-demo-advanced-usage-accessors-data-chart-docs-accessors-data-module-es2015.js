(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-accessors-data-chart-docs-accessors-data-module"],{

/***/ "5tFn":
/*!*******************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ChartDocsAccessorsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsDataComponent", function() { return ChartDocsAccessorsDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_accessors_data_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-accessors-data.component.html */ "Y2mW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsAccessorsDataComponent = class ChartDocsAccessorsDataComponent {
    constructor() {
        this.customAccessorCode = `const customAccessors = new LineAccessors();
customAccessors.data = {
    x: (datum: any) => datum.z,
    y: (datum: any) => datum.y * 2,
};
...`;
    }
};
ChartDocsAccessorsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-accessors-data",
        template: _raw_loader_chart_docs_accessors_data_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsAccessorsDataComponent);



/***/ }),

/***/ "HRsf":
/*!****************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChartDocsAccessorsDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsDataModule", function() { return ChartDocsAccessorsDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _accessors_accessors_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessors/accessors.example.component */ "UnnI");
/* harmony import */ var _chart_docs_accessors_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart-docs-accessors-data.component */ "5tFn");







const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_accessors_data_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsAccessorsDataComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "accessors",
        component: _accessors_accessors_example_component__WEBPACK_IMPORTED_MODULE_5__["RendererAccessorsExampleComponent"],
    },
];
let ChartDocsAccessorsDataModule = class ChartDocsAccessorsDataModule {
};
ChartDocsAccessorsDataModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _accessors_accessors_example_component__WEBPACK_IMPORTED_MODULE_5__["RendererAccessorsExampleComponent"],
            _chart_docs_accessors_data_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsAccessorsDataComponent"],
        ],
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("mcI3") },
        ],
    })
], ChartDocsAccessorsDataModule);



/***/ }),

/***/ "UnnI":
/*!*********************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/data/accessors/accessors.example.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: RendererAccessorsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererAccessorsExampleComponent", function() { return RendererAccessorsExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accessors_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accessors.example.component.html */ "YTI/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");




let RendererAccessorsExampleComponent = class RendererAccessorsExampleComponent {
    constructor() {
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
    }
    ngOnInit() {
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const data = [
            { x: 1, y: 10, z: 0 },
            { x: 2, y: 30, z: 1 },
            { x: 3, y: 5, z: 2 },
            { x: 4, y: 20, z: 3 },
            { x: 5, y: 15, z: 4 },
        ];
        const customAccessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        // Customizing data accessors
        customAccessors.data = {
            x: (datum) => datum.z,
            y: (datum) => datum.y * 2,
        };
        this.seriesSet = [
            {
                id: "series-1",
                name: "Series 1",
                data,
                scales,
                renderer,
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
            },
            {
                id: "series-2",
                name: "Series 2",
                data,
                scales,
                renderer,
                accessors: customAccessors,
            },
        ];
        this.chart.update(this.seriesSet);
    }
};
RendererAccessorsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-accessors-example",
        template: _raw_loader_accessors_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RendererAccessorsExampleComponent);



/***/ }),

/***/ "mcI3":
/*!********************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/accessors/data sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accessors/accessors.example.component.html": "YTI/",
	"./accessors/accessors.example.component.ts": "5A4g",
	"./chart-docs-accessors-data.component.html": "Y2mW",
	"./chart-docs-accessors-data.component.ts": "2kwe",
	"./chart-docs-accessors-data.module.ts": "D4b+"
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
webpackContext.id = "mcI3";

/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-accessors-data-chart-docs-accessors-data-module-es2015.js.map