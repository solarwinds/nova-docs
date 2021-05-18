(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-grid-config-chart-docs-grid-config-module"],{

/***/ "4SuK":
/*!**********************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/grid-config/chart-docs-grid-config.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ChartDocsGridConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsGridConfigModule", function() { return ChartDocsGridConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





const exampleRoutes = [
    {
        path: "base-grid",
        loadChildren: () => __webpack_require__.e(/*! import() | components-demo-advanced-usage-grid-config-base-grid-chart-docs-base-grid-module */ "components-demo-advanced-usage-grid-config-base-grid-chart-docs-base-grid-module").then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.module */ "6WVA")).then(m => m.ChartDocsBaseGridModule),
    },
];
let ChartDocsGridConfigModule = class ChartDocsGridConfigModule {
};
ChartDocsGridConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("LzeB") },
        ],
    })
], ChartDocsGridConfigModule);



/***/ }),

/***/ "LzeB":
/*!*****************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/grid-config sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base-grid/chart-docs-base-grid.component.html": "zB9g",
	"./base-grid/chart-docs-base-grid.component.ts": "r8lI",
	"./base-grid/chart-docs-base-grid.module.ts": "jFy7",
	"./base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.html": "Fl8W",
	"./base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.ts": "bJ8T",
	"./base-grid/height-and-width/base-grid-height-and-width.example.component.html": "pOcv",
	"./base-grid/height-and-width/base-grid-height-and-width.example.component.ts": "CyQ5",
	"./base-grid/margins/base-grid-auto-margins.example.component.html": "u0jB",
	"./base-grid/margins/base-grid-auto-margins.example.component.ts": "HAcT",
	"./base-grid/margins/base-grid-margins.example.component.html": "ohXm",
	"./base-grid/margins/base-grid-margins.example.component.ts": "/6ss",
	"./base-grid/padding/base-grid-padding.example.component.html": "6nh+",
	"./base-grid/padding/base-grid-padding.example.component.ts": "0BQA",
	"./chart-docs-grid-config.module.ts": "rs1v"
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
webpackContext.id = "LzeB";

/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-grid-config-chart-docs-grid-config-module-es2015.js.map