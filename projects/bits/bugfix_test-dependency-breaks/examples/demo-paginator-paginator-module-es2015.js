(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-paginator-paginator-module"],{

/***/ "/t7z":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-custom-page-set/paginator-custom-page-set.example.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-custom-page-set-example\",\n    templateUrl: \"./paginator-custom-page-set.example.component.html\",\n})\nexport class PaginatorCustomPageSetExampleComponent {\n    public customPageSizeSet = [5, 15, 30, 150, 200];\n}\n\n");

/***/ }),

/***/ "3eXw":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "Msq9",
	"./paginator-adjacent/paginator-adjacent.example.component.html": "pHFm",
	"./paginator-adjacent/paginator-adjacent.example.component.ts": "etMF",
	"./paginator-basic/paginator-basic.example.component.html": "wB0v",
	"./paginator-basic/paginator-basic.example.component.ts": "llmp",
	"./paginator-custom-page-set/paginator-custom-page-set.example.component.html": "SvY1",
	"./paginator-custom-page-set/paginator-custom-page-set.example.component.ts": "/t7z",
	"./paginator-docs/paginator-docs.example.component.html": "cv+T",
	"./paginator-docs/paginator-docs.example.component.ts": "Aw+S",
	"./paginator-hidden-prev-next/paginator-hidden-prev-next.example.component.html": "gfhM",
	"./paginator-hidden-prev-next/paginator-hidden-prev-next.example.component.ts": "7QHM",
	"./paginator-styling/paginator-styling.example.component.html": "iMIT",
	"./paginator-styling/paginator-styling.example.component.ts": "prms",
	"./paginator-test/paginator-test.component.html": "Szgy",
	"./paginator-test/paginator-test.component.ts": "LLCC",
	"./paginator-virtual-scroll/paginator-virtual-scroll.example.component.html": "qidj",
	"./paginator-virtual-scroll/paginator-virtual-scroll.example.component.ts": "LGph",
	"./paginator-visibility/paginator-visibility.example.component.html": "ymQ6",
	"./paginator-visibility/paginator-visibility.example.component.ts": "L42v",
	"./paginator-visual-test/paginator-visual-test.component.html": "q6tB",
	"./paginator-visual-test/paginator-visual-test.component.ts": "EeUn",
	"./paginator.module.ts": "Gc7H"
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
webpackContext.id = "3eXw";

/***/ }),

/***/ "47If":
/*!*****************************************************!*\
  !*** ./demo/src/components/demo/paginator/index.ts ***!
  \*****************************************************/
/*! exports provided: PaginatorExampleComponent, PaginatorAdjacentExampleComponent, PaginatorBasicExampleComponent, PaginatorCustomPageSetExampleComponent, PaginatorHiddenPrevNextExampleComponent, PaginatorStylingExampleComponent, PaginatorVirtualScrollExampleComponent, PaginatorVisibilityExampleComponent, PaginatorVisualTestComponent, PaginatorTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paginator_docs_paginator_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginator-docs/paginator-docs.example.component */ "r08u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorExampleComponent", function() { return _paginator_docs_paginator_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["PaginatorExampleComponent"]; });

/* harmony import */ var _paginator_adjacent_paginator_adjacent_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginator-adjacent/paginator-adjacent.example.component */ "KJdG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorAdjacentExampleComponent", function() { return _paginator_adjacent_paginator_adjacent_example_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorAdjacentExampleComponent"]; });

/* harmony import */ var _paginator_basic_paginator_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginator-basic/paginator-basic.example.component */ "dP1c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorBasicExampleComponent", function() { return _paginator_basic_paginator_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorBasicExampleComponent"]; });

/* harmony import */ var _paginator_custom_page_set_paginator_custom_page_set_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paginator-custom-page-set/paginator-custom-page-set.example.component */ "WpV1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorCustomPageSetExampleComponent", function() { return _paginator_custom_page_set_paginator_custom_page_set_example_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorCustomPageSetExampleComponent"]; });

/* harmony import */ var _paginator_hidden_prev_next_paginator_hidden_prev_next_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginator-hidden-prev-next/paginator-hidden-prev-next.example.component */ "vUEl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorHiddenPrevNextExampleComponent", function() { return _paginator_hidden_prev_next_paginator_hidden_prev_next_example_component__WEBPACK_IMPORTED_MODULE_4__["PaginatorHiddenPrevNextExampleComponent"]; });

/* harmony import */ var _paginator_styling_paginator_styling_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paginator-styling/paginator-styling.example.component */ "QE3Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorStylingExampleComponent", function() { return _paginator_styling_paginator_styling_example_component__WEBPACK_IMPORTED_MODULE_5__["PaginatorStylingExampleComponent"]; });

/* harmony import */ var _paginator_virtual_scroll_paginator_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginator-virtual-scroll/paginator-virtual-scroll.example.component */ "IVQi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorVirtualScrollExampleComponent", function() { return _paginator_virtual_scroll_paginator_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_6__["PaginatorVirtualScrollExampleComponent"]; });

/* harmony import */ var _paginator_visibility_paginator_visibility_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paginator-visibility/paginator-visibility.example.component */ "pRU9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorVisibilityExampleComponent", function() { return _paginator_visibility_paginator_visibility_example_component__WEBPACK_IMPORTED_MODULE_7__["PaginatorVisibilityExampleComponent"]; });

/* harmony import */ var _paginator_visual_test_paginator_visual_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paginator-visual-test/paginator-visual-test.component */ "OBGh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorVisualTestComponent", function() { return _paginator_visual_test_paginator_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["PaginatorVisualTestComponent"]; });

/* harmony import */ var _paginator_test_paginator_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paginator-test/paginator-test.component */ "jlGC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorTestComponent", function() { return _paginator_test_paginator_test_component__WEBPACK_IMPORTED_MODULE_9__["PaginatorTestComponent"]; });













/***/ }),

/***/ "7QHM":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-hidden-prev-next/paginator-hidden-prev-next.example.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-hidden-prev-next-example\",\n    templateUrl: \"./paginator-hidden-prev-next.example.component.html\",\n})\nexport class PaginatorHiddenPrevNextExampleComponent {}\n");

/***/ }),

/***/ "Aw+S":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-docs/paginator-docs.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-docs-example\",\n    templateUrl: \"./paginator-docs.example.component.html\",\n})\nexport class PaginatorExampleComponent {}\n");

/***/ }),

/***/ "EeUn":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-visual-test/paginator-visual-test.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-visual-test\",\n    templateUrl: \"./paginator-visual-test.component.html\",\n})\nexport class PaginatorVisualTestComponent {\n    public customPageSizeSet = [2, 10, 25, 50, 100];\n}\n");

/***/ }),

/***/ "Gc7H":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, NuiPaginatorModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    PaginatorAdjacentExampleComponent,\n    PaginatorBasicExampleComponent,\n    PaginatorCustomPageSetExampleComponent,\n    PaginatorExampleComponent,\n    PaginatorHiddenPrevNextExampleComponent,\n    PaginatorStylingExampleComponent,\n    PaginatorVirtualScrollExampleComponent,\n    PaginatorVisibilityExampleComponent,\n    PaginatorVisualTestComponent,\n    PaginatorTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: PaginatorExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"paginator-visual-test\",\n        component: PaginatorVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"paginator-test\",\n        component: PaginatorTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiPaginatorModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        PaginatorAdjacentExampleComponent,\n        PaginatorBasicExampleComponent,\n        PaginatorCustomPageSetExampleComponent,\n        PaginatorExampleComponent,\n        PaginatorHiddenPrevNextExampleComponent,\n        PaginatorStylingExampleComponent,\n        PaginatorVirtualScrollExampleComponent,\n        PaginatorVisibilityExampleComponent,\n        PaginatorVisualTestComponent,\n        PaginatorTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class PaginatorModule {\n}\n");

/***/ }),

/***/ "IVQi":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-virtual-scroll/paginator-virtual-scroll.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PaginatorVirtualScrollExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorVirtualScrollExampleComponent", function() { return PaginatorVirtualScrollExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorVirtualScrollExampleComponent {
    constructor() {
        this.customPageSizeSet = [1, 30, 200];
    }
}
PaginatorVirtualScrollExampleComponent.ɵfac = function PaginatorVirtualScrollExampleComponent_Factory(t) { return new (t || PaginatorVirtualScrollExampleComponent)(); };
PaginatorVirtualScrollExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorVirtualScrollExampleComponent, selectors: [["nui-paginator-virtual-scroll-example"]], decls: 1, vars: 4, consts: [["id", "nui-demo-custom-page-size-set-paginator", 3, "page", "pageSize", "total", "pageSizeSet"]], template: function PaginatorVirtualScrollExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 10)("pageSize", 1)("total", 100000)("pageSizeSet", ctx.customPageSizeSet);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "KJdG":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-adjacent/paginator-adjacent.example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PaginatorAdjacentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorAdjacentExampleComponent", function() { return PaginatorAdjacentExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorAdjacentExampleComponent {
}
PaginatorAdjacentExampleComponent.ɵfac = function PaginatorAdjacentExampleComponent_Factory(t) { return new (t || PaginatorAdjacentExampleComponent)(); };
PaginatorAdjacentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorAdjacentExampleComponent, selectors: [["nui-paginator-adjacent-example"]], decls: 1, vars: 4, consts: [["id", "nui-demo-adjacent-paginator", 3, "page", "pageSize", "total", "adjacent"]], template: function PaginatorAdjacentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 10)("pageSize", 25)("total", 1012)("adjacent", 2);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "L42v":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-visibility/paginator-visibility.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-visibility-example\",\n    templateUrl: \"./paginator-visibility.example.component.html\",\n})\nexport class PaginatorVisibilityExampleComponent {}\n\n");

/***/ }),

/***/ "LGph":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-virtual-scroll/paginator-virtual-scroll.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-virtual-scroll-example\",\n    templateUrl: \"./paginator-virtual-scroll.example.component.html\",\n})\nexport class PaginatorVirtualScrollExampleComponent {\n    public customPageSizeSet = [1, 30, 200];\n}\n\n");

/***/ }),

/***/ "LLCC":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-test/paginator-test.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-test\",\n    templateUrl: \"./paginator-test.component.html\",\n})\nexport class PaginatorTestComponent {\n}\n");

/***/ }),

/***/ "Msq9":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./paginator-docs/paginator-docs.example.component\";\nexport * from \"./paginator-adjacent/paginator-adjacent.example.component\";\nexport * from \"./paginator-basic/paginator-basic.example.component\";\nexport * from \"./paginator-custom-page-set/paginator-custom-page-set.example.component\";\nexport * from \"./paginator-hidden-prev-next/paginator-hidden-prev-next.example.component\";\nexport * from \"./paginator-styling/paginator-styling.example.component\";\nexport * from \"./paginator-virtual-scroll/paginator-virtual-scroll.example.component\";\nexport * from \"./paginator-visibility/paginator-visibility.example.component\";\nexport * from \"./paginator-visual-test/paginator-visual-test.component\";\nexport * from \"./paginator-test/paginator-test.component\";\n");

/***/ }),

/***/ "OBGh":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-visual-test/paginator-visual-test.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PaginatorVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorVisualTestComponent", function() { return PaginatorVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");
/* harmony import */ var _paginator_virtual_scroll_paginator_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../paginator-virtual-scroll/paginator-virtual-scroll.example.component */ "IVQi");



class PaginatorVisualTestComponent {
    constructor() {
        this.customPageSizeSet = [2, 10, 25, 50, 100];
    }
}
PaginatorVisualTestComponent.ɵfac = function PaginatorVisualTestComponent_Factory(t) { return new (t || PaginatorVisualTestComponent)(); };
PaginatorVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorVisualTestComponent, selectors: [["nui-paginator-visual-test"]], decls: 19, vars: 21, consts: [[1, "container"], ["id", "nui-visual-test-basic-paginator", 3, "page", "pageSize", "total"], ["id", "nui-visual-test-adjacent-paginator", 3, "page", "pageSize", "total", "adjacent"], ["id", "nui-visual-test-custom-page-set-paginator", 3, "page", "pageSize", "total", "adjacent", "pageSizeSet", "showPrevNext"], ["id", "nui-visual-test-paginator-styling", "activeClass", "nui-message-error", "dots", "\u00B0\u00B0\u00B0", 3, "page", "pageSize", "total"], ["id", "nui-visual-test-visibility-paginator", 3, "page", "pageSize", "total", "adjacent", "hideIfEmpty"]], template: function PaginatorVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Paginator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-paginator", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Paginator Adjacent Page-Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-paginator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Paginator With Custom Page Set and Without Previous and Next Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-paginator", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Paginator With Custom Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Invisible Paginator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Paginator with Virtual Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-paginator-virtual-scroll-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 1)("pageSize", 10)("total", 1012);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 41)("pageSize", 25)("total", 1012)("adjacent", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 5)("pageSize", 2)("total", 18)("adjacent", 1)("pageSizeSet", ctx.customPageSizeSet)("showPrevNext", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 10)("pageSize", 25)("total", 1012);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 0)("pageSize", 0)("total", 0)("adjacent", 1)("hideIfEmpty", true);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"], _paginator_virtual_scroll_paginator_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorVirtualScrollExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "QE3Z":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-styling/paginator-styling.example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PaginatorStylingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorStylingExampleComponent", function() { return PaginatorStylingExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorStylingExampleComponent {
}
PaginatorStylingExampleComponent.ɵfac = function PaginatorStylingExampleComponent_Factory(t) { return new (t || PaginatorStylingExampleComponent)(); };
PaginatorStylingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorStylingExampleComponent, selectors: [["nui-paginator-styling-example"]], decls: 1, vars: 3, consts: [["id", "nui-demo-paginator-styling", "activeClass", "nui-message-error", "dots", "\u00B0\u00B0\u00B0", 3, "page", "pageSize", "total"]], template: function PaginatorStylingExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 10)("pageSize", 25)("total", 1012);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "SvY1":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-custom-page-set/paginator-custom-page-set.example.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-custom-page-size-set-paginator\"\n           [page]=\"10\"\n           [pageSize]=\"15\"\n           [total]=\"2080\"\n           [pageSizeSet]=\"customPageSizeSet\">\n</nui-paginator>\n");

/***/ }),

/***/ "Szgy":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-test/paginator-test.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <nui-paginator-basic-example></nui-paginator-basic-example>\n\n    <nui-paginator-adjacent-example></nui-paginator-adjacent-example>\n</div>\n");

/***/ }),

/***/ "WpV1":
/*!*********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-custom-page-set/paginator-custom-page-set.example.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PaginatorCustomPageSetExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorCustomPageSetExampleComponent", function() { return PaginatorCustomPageSetExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorCustomPageSetExampleComponent {
    constructor() {
        this.customPageSizeSet = [5, 15, 30, 150, 200];
    }
}
PaginatorCustomPageSetExampleComponent.ɵfac = function PaginatorCustomPageSetExampleComponent_Factory(t) { return new (t || PaginatorCustomPageSetExampleComponent)(); };
PaginatorCustomPageSetExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorCustomPageSetExampleComponent, selectors: [["nui-paginator-custom-page-set-example"]], decls: 1, vars: 4, consts: [["id", "nui-demo-custom-page-size-set-paginator", 3, "page", "pageSize", "total", "pageSizeSet"]], template: function PaginatorCustomPageSetExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 10)("pageSize", 15)("total", 2080)("pageSizeSet", ctx.customPageSizeSet);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "cv+T":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-docs/paginator-docs.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiPaginatorModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>To get a basic paginator working, only 2 parameters are required: <code>total</code> item count and <code>pageSize</code> - which is the item count per page. Use the\n    <code>page</code> parameter to optionally set the current page-link (default=1).\n</p>\n<nui-message [allowDismiss]=\"false\" type=\"warning\">\n    <b>Important:</b> <code>pageSize</code> is a Number, so <code>pageSize=\"42\"</code> won't work.\n    PageSize can take only those values that are listed in defaultPageSizeSet (10, 25, 50, 100).\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"paginator-basic\" exampleTitle=\"Simple Paginator\">\n    <nui-paginator-basic-example></nui-paginator-basic-example>\n</nui-example-wrapper>\n\n<h2>Adjacent Page-Links</h2>\n\n<p>Control the number of page-links shown <i>adjacent</i> to the current page-link with the <code>adjacent</code> parameter. When the current page-link is flanked by\n    ellipses, <code>adjacent</code> page-links are displayed on both sides of the current page-link. Up tp <code>adjacent * 2 + 1 + 6</code> total links are displayed. Default <code>adjacent</code> = 1. By default, the maximum number of links shown is <code>adjacent*2+5</code>,\n    but the default can be overriden using the <code>maxElements</code> parameter.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"paginator-adjacent\" exampleTitle=\"Adjacent Example\">\n    <nui-paginator-adjacent-example></nui-paginator-adjacent-example>\n</nui-example-wrapper>\n\n<h2>Custom Page Size Set</h2>\n\n<p> You can define avaliable item counts per page. To do this you need to define <code>pageSizeSet</code> input which has <code>Array&lt;number&gt;</code> type.\n    By default this input has 10, 25, 50, 100 page sizes.\n</p>\n<nui-message [allowDismiss]=\"false\" type=\"warning\">\n    <b>Important:</b> <code>pageSize</code> can take only those values that are listed in pageSizeSet.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"paginator-custom-page-set\" exampleTitle=\"Custom Page Size Set\">\n    <nui-paginator-custom-page-set-example></nui-paginator-custom-page-set-example>\n</nui-example-wrapper>\n\n<h2>Previous and Next Buttons</h2>\n\n<p>Prev and Next buttons can be hidden if you pass <code>showPrevNext</code> as false.</p>\n\n<nui-example-wrapper filenamePrefix=\"paginator-hidden-prev-next\" exampleTitle=\"Hidden Prev-Next Example\">\n    <nui-paginator-hidden-prev-next-example></nui-paginator-hidden-prev-next-example>\n</nui-example-wrapper>\n\n<h2>Styling</h2>\n\n<p>There are a couple of ways to customize the paginator styles. Use <code>activeClass</code> to customize the active page-link and <code>disabledClass</code> to\n    customize the disabled paginator. It's also possible to override the ellipses characters using the <code>dots</code> parameter.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"paginator-styling\" exampleTitle=\"Styling Example\">\n    <nui-paginator-styling-example></nui-paginator-styling-example>\n</nui-example-wrapper>\n\n<h2>Performance Improvements</h2>\n\n<p>\n    Virtual scroll is used in the \"three dots\" popup, when the number of hidden pages is greater than 1000.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"paginator-virtual-scroll\" exampleTitle=\"Virtual Scroll Example\">\n    <nui-paginator-virtual-scroll-example></nui-paginator-virtual-scroll-example>\n</nui-example-wrapper>\n\n<h2>Visibility</h2>\n\n<p>Paginator visibility is affected by several different factors. <code>hide</code> allows the developer to explictly control paginator visibility, while <code>hideIfEmpty</code>\n    allows the developer to optionally hide the paginator when the dataset is empty (default=false). Finally, the paginator is hidden automatically if <code>total</code>\n    is less than 10 or if invalid parameters are specified.\n</p>\n");

/***/ }),

/***/ "dP1c":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-basic/paginator-basic.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PaginatorBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorBasicExampleComponent", function() { return PaginatorBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorBasicExampleComponent {
}
PaginatorBasicExampleComponent.ɵfac = function PaginatorBasicExampleComponent_Factory(t) { return new (t || PaginatorBasicExampleComponent)(); };
PaginatorBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorBasicExampleComponent, selectors: [["nui-paginator-basic-example"]], decls: 1, vars: 3, consts: [["id", "nui-demo-basic-paginator", 3, "page", "pageSize", "total"]], template: function PaginatorBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 1)("pageSize", 25)("total", 1012);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "etMF":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-adjacent/paginator-adjacent.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-adjacent-example\",\n    templateUrl: \"./paginator-adjacent.example.component.html\",\n})\nexport class PaginatorAdjacentExampleComponent {}\n\n");

/***/ }),

/***/ "gfhM":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-hidden-prev-next/paginator-hidden-prev-next.example.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-hide-prev-next\"\n           [page]=\"1\"\n           [pageSize]=\"10\"\n           [total]=\"18\"\n           [adjacent]=\"1\"\n           [showPrevNext]=\"false\">\n</nui-paginator>\n");

/***/ }),

/***/ "iMIT":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-styling/paginator-styling.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-paginator-styling\"\n           [page]=\"10\"\n           [pageSize]=\"25\"\n           [total]=\"1012\"\n           activeClass=\"nui-message-error\"\n           dots=\"°°°\">\n</nui-paginator>\n");

/***/ }),

/***/ "jlGC":
/*!***************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-test/paginator-test.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PaginatorTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorTestComponent", function() { return PaginatorTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _paginator_basic_paginator_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../paginator-basic/paginator-basic.example.component */ "dP1c");
/* harmony import */ var _paginator_adjacent_paginator_adjacent_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../paginator-adjacent/paginator-adjacent.example.component */ "KJdG");



class PaginatorTestComponent {
}
PaginatorTestComponent.ɵfac = function PaginatorTestComponent_Factory(t) { return new (t || PaginatorTestComponent)(); };
PaginatorTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorTestComponent, selectors: [["nui-paginator-test"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function PaginatorTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-paginator-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-paginator-adjacent-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_paginator_basic_paginator_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorBasicExampleComponent"], _paginator_adjacent_paginator_adjacent_example_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorAdjacentExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "llmp":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-basic/paginator-basic.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-basic-example\",\n    templateUrl: \"./paginator-basic.example.component.html\",\n})\nexport class PaginatorBasicExampleComponent {}\n\n");

/***/ }),

/***/ "pHFm":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-adjacent/paginator-adjacent.example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-adjacent-paginator\"\n           [page]=\"10\"\n           [pageSize]=\"25\"\n           [total]=\"1012\"\n           [adjacent]=\"2\">\n</nui-paginator>\n");

/***/ }),

/***/ "pRU9":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-visibility/paginator-visibility.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PaginatorVisibilityExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorVisibilityExampleComponent", function() { return PaginatorVisibilityExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorVisibilityExampleComponent {
}
PaginatorVisibilityExampleComponent.ɵfac = function PaginatorVisibilityExampleComponent_Factory(t) { return new (t || PaginatorVisibilityExampleComponent)(); };
PaginatorVisibilityExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorVisibilityExampleComponent, selectors: [["nui-paginator-visibility-example"]], decls: 1, vars: 6, consts: [["id", "nui-demo-visibility-paginator", 3, "page", "pageSize", "total", "adjacent", "hide", "hideIfEmpty"]], template: function PaginatorVisibilityExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 10)("pageSize", 25)("total", 1012)("adjacent", 1)("hide", false)("hideIfEmpty", true);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "prms":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-styling/paginator-styling.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-paginator-styling-example\",\n    templateUrl: \"./paginator-styling.example.component.html\",\n})\nexport class PaginatorStylingExampleComponent {}\n\n");

/***/ }),

/***/ "q6tB":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-visual-test/paginator-visual-test.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n        <h3>Basic Paginator</h3>\n        <nui-paginator id=\"nui-visual-test-basic-paginator\"\n                [page]=\"1\"\n                [pageSize]=\"10\"\n                [total]=\"1012\">\n        </nui-paginator>\n\n        <h3>Paginator Adjacent Page-Links</h3>\n        <nui-paginator id=\"nui-visual-test-adjacent-paginator\"\n                [page]=\"41\"\n                [pageSize]=\"25\"\n                [total]=\"1012\"\n                [adjacent]=\"2\">\n        </nui-paginator>\n\n        <h3>Paginator With Custom Page Set and Without Previous and Next Buttons</h3>\n        <nui-paginator id=\"nui-visual-test-custom-page-set-paginator\"\n                [page]=\"5\"\n                [pageSize]=\"2\"\n                [total]=\"18\"\n                [adjacent]=\"1\"\n                [pageSizeSet]=\"customPageSizeSet\"\n                [showPrevNext]=\"false\">\n        </nui-paginator>\n\n        <h3>Paginator With Custom Styling</h3>\n        <nui-paginator id=\"nui-visual-test-paginator-styling\"\n                [page]=\"10\"\n                [pageSize]=\"25\"\n                [total]=\"1012\"\n                activeClass=\"nui-message-error\"\n                dots=\"°°°\">\n        </nui-paginator>\n\n        <h3>Invisible Paginator</h3>\n        <nui-paginator id=\"nui-visual-test-visibility-paginator\"\n                       [page]=\"0\"\n                       [pageSize]=\"0\"\n                       [total]=\"0\"\n                       [adjacent]=\"1\"\n                       [hideIfEmpty]=\"true\">\n        </nui-paginator>\n\n        <h3>Paginator with Virtual Scroll</h3>\n        <nui-paginator-virtual-scroll-example></nui-paginator-virtual-scroll-example>\n</div>\n");

/***/ }),

/***/ "qidj":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-virtual-scroll/paginator-virtual-scroll.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-custom-page-size-set-paginator\"\n           [page]=\"10\"\n           [pageSize]=\"1\"\n           [total]=\"100000\"\n           [pageSizeSet]=\"customPageSizeSet\">\n</nui-paginator>\n");

/***/ }),

/***/ "r08u":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-docs/paginator-docs.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PaginatorExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorExampleComponent", function() { return PaginatorExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _paginator_basic_paginator_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paginator-basic/paginator-basic.example.component */ "dP1c");
/* harmony import */ var _paginator_adjacent_paginator_adjacent_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../paginator-adjacent/paginator-adjacent.example.component */ "KJdG");
/* harmony import */ var _paginator_custom_page_set_paginator_custom_page_set_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../paginator-custom-page-set/paginator-custom-page-set.example.component */ "WpV1");
/* harmony import */ var _paginator_hidden_prev_next_paginator_hidden_prev_next_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../paginator-hidden-prev-next/paginator-hidden-prev-next.example.component */ "vUEl");
/* harmony import */ var _paginator_styling_paginator_styling_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../paginator-styling/paginator-styling.example.component */ "QE3Z");
/* harmony import */ var _paginator_virtual_scroll_paginator_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paginator-virtual-scroll/paginator-virtual-scroll.example.component */ "IVQi");









class PaginatorExampleComponent {
}
PaginatorExampleComponent.ɵfac = function PaginatorExampleComponent_Factory(t) { return new (t || PaginatorExampleComponent)(); };
PaginatorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorExampleComponent, selectors: [["nui-paginator-docs-example"]], decls: 118, vars: 2, consts: [["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "paginator-basic", "exampleTitle", "Simple Paginator"], ["filenamePrefix", "paginator-adjacent", "exampleTitle", "Adjacent Example"], ["filenamePrefix", "paginator-custom-page-set", "exampleTitle", "Custom Page Size Set"], ["filenamePrefix", "paginator-hidden-prev-next", "exampleTitle", "Hidden Prev-Next Example"], ["filenamePrefix", "paginator-styling", "exampleTitle", "Styling Example"], ["filenamePrefix", "paginator-virtual-scroll", "exampleTitle", "Virtual Scroll Example"]], template: function PaginatorExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiPaginatorModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To get a basic paginator working, only 2 parameters are required: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " item count and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "pageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - which is the item count per page. Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " parameter to optionally set the current page-link (default=1).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Important:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "pageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " is a Number, so ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "pageSize=\"42\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " won't work. PageSize can take only those values that are listed in defaultPageSizeSet (10, 25, 50, 100).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-paginator-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Adjacent Page-Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Control the number of page-links shown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "adjacent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " to the current page-link with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "adjacent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " parameter. When the current page-link is flanked by ellipses, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "adjacent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " page-links are displayed on both sides of the current page-link. Up tp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "adjacent * 2 + 1 + 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " total links are displayed. Default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "adjacent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " = 1. By default, the maximum number of links shown is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "adjacent*2+5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ", but the default can be overriden using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "maxElements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " parameter.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-paginator-adjacent-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Custom Page Size Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " You can define avaliable item counts per page. To do this you need to define ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "pageSizeSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " input which has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Array<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " type. By default this input has 10, 25, 50, 100 page sizes.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nui-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Important:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "pageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " can take only those values that are listed in pageSizeSet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nui-paginator-custom-page-set-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Previous and Next Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Prev and Next buttons can be hidden if you pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "showPrevNext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " as false.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "nui-paginator-hidden-prev-next-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "There are a couple of ways to customize the paginator styles. Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "activeClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " to customize the active page-link and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "disabledClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " to customize the disabled paginator. It's also possible to override the ellipses characters using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "dots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " parameter.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "nui-paginator-styling-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Performance Improvements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Virtual scroll is used in the \"three dots\" popup, when the number of hidden pages is greater than 1000.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nui-paginator-virtual-scroll-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Paginator visibility is affected by several different factors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " allows the developer to explictly control paginator visibility, while ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "hideIfEmpty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " allows the developer to optionally hide the paginator when the dataset is empty (default=false). Finally, the paginator is hidden automatically if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " is less than 10 or if invalid parameters are specified.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _paginator_basic_paginator_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["PaginatorBasicExampleComponent"], _paginator_adjacent_paginator_adjacent_example_component__WEBPACK_IMPORTED_MODULE_4__["PaginatorAdjacentExampleComponent"], _paginator_custom_page_set_paginator_custom_page_set_example_component__WEBPACK_IMPORTED_MODULE_5__["PaginatorCustomPageSetExampleComponent"], _paginator_hidden_prev_next_paginator_hidden_prev_next_example_component__WEBPACK_IMPORTED_MODULE_6__["PaginatorHiddenPrevNextExampleComponent"], _paginator_styling_paginator_styling_example_component__WEBPACK_IMPORTED_MODULE_7__["PaginatorStylingExampleComponent"], _paginator_virtual_scroll_paginator_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_8__["PaginatorVirtualScrollExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "tZ3E":
/*!****************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator.module.ts ***!
  \****************************************************************/
/*! exports provided: PaginatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorModule", function() { return PaginatorModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "47If");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "paginator-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "paginator-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class PaginatorModule {
}
PaginatorModule.ɵfac = function PaginatorModule_Factory(t) { return new (t || PaginatorModule)(); };
PaginatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaginatorModule });
PaginatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("3eXw"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPaginatorModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaginatorModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["PaginatorAdjacentExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorCustomPageSetExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorHiddenPrevNextExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorStylingExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorVirtualScrollExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorVisibilityExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PaginatorTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPaginatorModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vUEl":
/*!***********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/paginator/paginator-hidden-prev-next/paginator-hidden-prev-next.example.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: PaginatorHiddenPrevNextExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorHiddenPrevNextExampleComponent", function() { return PaginatorHiddenPrevNextExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/paginator/paginator.component */ "4E9B");


class PaginatorHiddenPrevNextExampleComponent {
}
PaginatorHiddenPrevNextExampleComponent.ɵfac = function PaginatorHiddenPrevNextExampleComponent_Factory(t) { return new (t || PaginatorHiddenPrevNextExampleComponent)(); };
PaginatorHiddenPrevNextExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorHiddenPrevNextExampleComponent, selectors: [["nui-paginator-hidden-prev-next-example"]], decls: 1, vars: 5, consts: [["id", "nui-demo-hide-prev-next", 3, "page", "pageSize", "total", "adjacent", "showPrevNext"]], template: function PaginatorHiddenPrevNextExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-paginator", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", 1)("pageSize", 10)("total", 18)("adjacent", 1)("showPrevNext", false);
    } }, directives: [_src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "wB0v":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-basic/paginator-basic.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-basic-paginator\"\n               [page]=\"1\"\n               [pageSize]=\"25\"\n               [total]=\"1012\">\n</nui-paginator>\n");

/***/ }),

/***/ "ymQ6":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/paginator/paginator-visibility/paginator-visibility.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-paginator id=\"nui-demo-visibility-paginator\"\n           [page]=\"10\"\n           [pageSize]=\"25\"\n           [total]=\"1012\"\n           [adjacent]=\"1\"\n           [hide]=\"false\"\n           [hideIfEmpty]=\"true\">\n</nui-paginator>\n");

/***/ })

}]);
//# sourceMappingURL=demo-paginator-paginator-module-es2015.js.map