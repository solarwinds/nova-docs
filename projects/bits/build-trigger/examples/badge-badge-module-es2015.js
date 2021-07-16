(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-badge-module"],{

/***/ "3xp3":
/*!************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-empty-basic/badge-empty-basic.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BadgeEmptyBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeEmptyBasicComponent", function() { return BadgeEmptyBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BadgeEmptyBasicComponent {
}
BadgeEmptyBasicComponent.ɵfac = function BadgeEmptyBasicComponent_Factory(t) { return new (t || BadgeEmptyBasicComponent)(); };
BadgeEmptyBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeEmptyBasicComponent, selectors: [["nui-badge-empty-basic"]], decls: 1, vars: 0, consts: [[1, "nui-badge-empty"]], template: function BadgeEmptyBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border: 1px solid #3c3c3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLWVtcHR5LWJhc2ljLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiYmFkZ2UtZW1wdHktYmFzaWMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNjM2MzYztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "6DSV":
/*!************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-visual-test/badge-visual-test.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BadgeVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeVisualTestComponent", function() { return BadgeVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/lib/textbox/textbox.component */ "nOFM");



class BadgeVisualTestComponent {
}
BadgeVisualTestComponent.ɵfac = function BadgeVisualTestComponent_Factory(t) { return new (t || BadgeVisualTestComponent)(); };
BadgeVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeVisualTestComponent, selectors: [["nui-badge-visual-test"]], decls: 19, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_VISUAL_TEST_BADGE_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Click me!");
        i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_VISUAL_TEST_BADGE_VISUAL_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_VISUAL_TEST_BADGE_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Click me!");
        i18n_2 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_VISUAL_TEST_BADGE_VISUAL_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } return [["data-before", "1", 1, "nui-badge-counter", "nui-badge-critical"], ["data-before", "10", 1, "nui-badge-counter", "nui-badge-warning"], ["data-before", "100", 1, "nui-badge-counter", "nui-badge-info"], ["data-before", "999+", 1, "nui-badge-counter", "nui-badge-ok"], ["data-before", "999+", 1, "nui-badge-counter", "nui-badge-warning", "nui-badge-text-black"], ["data-before", "999+", 1, "nui-badge-counter", "nui-badge-counter-custom"], [1, "nui-badge-empty", "nui-badge-critical"], [1, "nui-badge-empty", "nui-badge-warning"], [1, "nui-badge-empty", "nui-badge-info"], [1, "nui-badge-empty", "nui-badge-ok"], [1, "nui-badge-empty", "nui-badge-empty-custom"], ["nui-button", "", "type", "button", "displayStyle", "primary", "data-before", "1", 1, "nui-badge-counter", "nui-badge-warning", "nui-badge-text-black", "button-example"], i18n_0, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-badge-empty", "button-example"], i18n_2, ["data-before", "1", 1, "nui-badge-counter", "nui-badge-info", "textbox-example"], ["value", "example value"], [1, "nui-badge-empty", "nui-badge-critical", "textbox-example"]]; }, template: function BadgeVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-textbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-textbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  margin: 0 20px 20px 0;\n  position: relative;\n  vertical-align: top;\n}\n.button-example[_ngcontent-%COMP%], .textbox-example[_ngcontent-%COMP%] {\n  width: auto;\n}\n.button-example[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 0;\n}\n.textbox-example[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.nui-badge-counter-custom[_ngcontent-%COMP%]:after {\n  background: #0c5593;\n  border-radius: 0;\n  color: yellow;\n}\n.nui-badge-empty-custom[_ngcontent-%COMP%]:after {\n  background: #6b6ecf;\n  border-radius: 0;\n  transform: rotate(45deg) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTs7RUFFSSxXQUFBO0FBQUo7QUFHQTtFQUNJLHFCQUFBO0FBREo7QUFJQTtFQUNJLG1CQUFBO0FBRko7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBSEo7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQUpKIiwiZmlsZSI6ImJhZGdlLXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYnV0dG9uLWV4YW1wbGUsXG4udGV4dGJveC1leGFtcGxlIHtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmJ1dHRvbi1leGFtcGxlIHtcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG59XG5cbi50ZXh0Ym94LWV4YW1wbGUge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5udWktYmFkZ2UtY291bnRlci1jdXN0b206YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwYzU1OTM7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogeWVsbG93O1xufVxuXG4ubnVpLWJhZGdlLWVtcHR5LWN1c3RvbTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzZiNmVjZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "QHJt":
/*!***************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./badge-color-black/badge-color-black.component.html": "pcvo",
	"./badge-color-black/badge-color-black.component.less": "+SKk",
	"./badge-color-black/badge-color-black.component.ts": "FF7H",
	"./badge-counter-basic/badge-counter-basic.component.html": "c/8u",
	"./badge-counter-basic/badge-counter-basic.component.less": "OPUN",
	"./badge-counter-basic/badge-counter-basic.component.ts": "GKtr",
	"./badge-customization/badge-customization.component.html": "Olgr",
	"./badge-customization/badge-customization.component.less": "mU2q",
	"./badge-customization/badge-customization.component.ts": "pr8d",
	"./badge-docs/badge-docs.component.html": "x5HX",
	"./badge-docs/badge-docs.component.less": "0Vs1",
	"./badge-docs/badge-docs.component.ts": "+igE",
	"./badge-empty-basic/badge-empty-basic.component.html": "vsEn",
	"./badge-empty-basic/badge-empty-basic.component.less": "nt5H",
	"./badge-empty-basic/badge-empty-basic.component.ts": "U0RL",
	"./badge-novaui/badge-novaui.component.html": "2VyY",
	"./badge-novaui/badge-novaui.component.less": "kirR",
	"./badge-novaui/badge-novaui.component.ts": "FJF3",
	"./badge-system-statuses/badge-system-statuses.component.html": "+YHH",
	"./badge-system-statuses/badge-system-statuses.component.less": "doCF",
	"./badge-system-statuses/badge-system-statuses.component.ts": "AUYk",
	"./badge-visual-test/badge-visual-test.component.html": "t6Kh",
	"./badge-visual-test/badge-visual-test.component.less": "MA/T",
	"./badge-visual-test/badge-visual-test.component.ts": "kf08",
	"./badge.module.ts": "Q7H/",
	"./index.ts": "GX8n"
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
webpackContext.id = "QHJt";

/***/ }),

/***/ "T4jz":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-counter-basic/badge-counter-basic.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BadgeCounterBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeCounterBasicComponent", function() { return BadgeCounterBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BadgeCounterBasicComponent {
    constructor() {
        this.counter = "1";
    }
}
BadgeCounterBasicComponent.ɵfac = function BadgeCounterBasicComponent_Factory(t) { return new (t || BadgeCounterBasicComponent)(); };
BadgeCounterBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeCounterBasicComponent, selectors: [["nui-badge-counter-basic"]], decls: 1, vars: 1, consts: [[1, "nui-badge-counter"]], template: function BadgeCounterBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-before", ctx.counter);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border: 1px solid #3c3c3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLWNvdW50ZXItYmFzaWMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJiYWRnZS1jb3VudGVyLWJhc2ljLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYzNjM2M7XG59XG4iXX0= */"] });


/***/ }),

/***/ "bHmo":
/*!************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-color-black/badge-color-black.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BadgeColorBlackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeColorBlackComponent", function() { return BadgeColorBlackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BadgeColorBlackComponent {
}
BadgeColorBlackComponent.ɵfac = function BadgeColorBlackComponent_Factory(t) { return new (t || BadgeColorBlackComponent)(); };
BadgeColorBlackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeColorBlackComponent, selectors: [["nui-badge-color-black"]], decls: 1, vars: 0, consts: [["data-before", "999+", 1, "nui-badge-counter", "nui-badge-warning", "nui-badge-text-black"]], template: function BadgeColorBlackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 50px;\n  border: 1px solid #3c3c3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLWNvbG9yLWJsYWNrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoiYmFkZ2UtY29sb3ItYmxhY2suY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNjM2MzYztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "d+3e":
/*!***************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge.module.ts ***!
  \***************************************************************/
/*! exports provided: BadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _badge_color_black_badge_color_black_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge-color-black/badge-color-black.component */ "bHmo");
/* harmony import */ var _badge_counter_basic_badge_counter_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge-counter-basic/badge-counter-basic.component */ "T4jz");
/* harmony import */ var _badge_customization_badge_customization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge-customization/badge-customization.component */ "vBDx");
/* harmony import */ var _badge_docs_badge_docs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge-docs/badge-docs.component */ "i5AV");
/* harmony import */ var _badge_empty_basic_badge_empty_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./badge-empty-basic/badge-empty-basic.component */ "3xp3");
/* harmony import */ var _badge_novaui_badge_novaui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./badge-novaui/badge-novaui.component */ "uxcq");
/* harmony import */ var _badge_system_statuses_badge_system_statuses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./badge-system-statuses/badge-system-statuses.component */ "qzZ1");
/* harmony import */ var _badge_visual_test_badge_visual_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./badge-visual-test/badge-visual-test.component */ "6DSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: "",
        component: _badge_docs_badge_docs_component__WEBPACK_IMPORTED_MODULE_6__["BadgeDocsComponent"],
    },
    {
        path: "badge-visual-test",
        component: _badge_visual_test_badge_visual_test_component__WEBPACK_IMPORTED_MODULE_10__["BadgeVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class BadgeModule {
}
BadgeModule.ɵfac = function BadgeModule_Factory(t) { return new (t || BadgeModule)(); };
BadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: BadgeModule });
BadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("QHJt"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](BadgeModule, { declarations: [_badge_docs_badge_docs_component__WEBPACK_IMPORTED_MODULE_6__["BadgeDocsComponent"],
        _badge_counter_basic_badge_counter_basic_component__WEBPACK_IMPORTED_MODULE_4__["BadgeCounterBasicComponent"],
        _badge_empty_basic_badge_empty_basic_component__WEBPACK_IMPORTED_MODULE_7__["BadgeEmptyBasicComponent"],
        _badge_system_statuses_badge_system_statuses_component__WEBPACK_IMPORTED_MODULE_9__["BadgeSystemStatusesComponent"],
        _badge_color_black_badge_color_black_component__WEBPACK_IMPORTED_MODULE_3__["BadgeColorBlackComponent"],
        _badge_customization_badge_customization_component__WEBPACK_IMPORTED_MODULE_5__["BadgeCustomizationComponent"],
        _badge_novaui_badge_novaui_component__WEBPACK_IMPORTED_MODULE_8__["BadgeNovauiComponent"],
        _badge_visual_test_badge_visual_test_component__WEBPACK_IMPORTED_MODULE_10__["BadgeVisualTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "i5AV":
/*!**********************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-docs/badge-docs.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BadgeDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeDocsComponent", function() { return BadgeDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _badge_counter_basic_badge_counter_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../badge-counter-basic/badge-counter-basic.component */ "T4jz");
/* harmony import */ var _badge_empty_basic_badge_empty_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../badge-empty-basic/badge-empty-basic.component */ "3xp3");
/* harmony import */ var _badge_system_statuses_badge_system_statuses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../badge-system-statuses/badge-system-statuses.component */ "qzZ1");
/* harmony import */ var _badge_color_black_badge_color_black_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../badge-color-black/badge-color-black.component */ "bHmo");
/* harmony import */ var _badge_customization_badge_customization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../badge-customization/badge-customization.component */ "vBDx");
/* harmony import */ var _badge_novaui_badge_novaui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../badge-novaui/badge-novaui.component */ "uxcq");








class BadgeDocsComponent {
}
BadgeDocsComponent.ɵfac = function BadgeDocsComponent_Factory(t) { return new (t || BadgeDocsComponent)(); };
BadgeDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeDocsComponent, selectors: [["nui-badge-docs"]], decls: 63, vars: 0, consts: [["filenamePrefix", "badge-counter-basic", "exampleTitle", "Counter Basic Usage"], ["filenamePrefix", "badge-empty-basic", "exampleTitle", "Empty Basic Usage"], ["filenamePrefix", "badge-system-statuses", "exampleTitle", "Statuses Usage"], ["filenamePrefix", "badge-color-black", "exampleTitle", "Color Text"], ["filenamePrefix", "badge-customization", "exampleTitle", "Badge Customization"], ["filenamePrefix", "badge-novaui", "exampleTitle", "Using with NovaUI"]], template: function BadgeDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To show badge add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".nui-badge-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " class to the element with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "position: relative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CSS rule.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "To display desired content, pass a string to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "data-before");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " attribute on the element where Badge class applied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-badge-counter-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To show badge without content use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ".nui-badge-empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " class to the element with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "position: relative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " CSS rule.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-badge-empty-basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Statuses usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Badge provides classes with all system colors that NovaUI uses.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-badge-system-statuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Color text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Badge provides class for change color text to black, use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ".nui-badge-text-black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " for proper contrast between text and background.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-badge-color-black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Badge customization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Badge is opened for customization, for this, declare CSS class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ":after");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " psuedo-element and apply it to the element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "nui-badge-customization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Applying badge to the NovaUI elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "For some NovaUI elements undesirable applying badge classes directly, because badge won't be shown. In this case, wrap NovaUI element for example in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ", and apply CSS Badge related classes to this wrapper. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "nui-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " example.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nui-badge-novaui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _badge_counter_basic_badge_counter_basic_component__WEBPACK_IMPORTED_MODULE_2__["BadgeCounterBasicComponent"], _badge_empty_basic_badge_empty_basic_component__WEBPACK_IMPORTED_MODULE_3__["BadgeEmptyBasicComponent"], _badge_system_statuses_badge_system_statuses_component__WEBPACK_IMPORTED_MODULE_4__["BadgeSystemStatusesComponent"], _badge_color_black_badge_color_black_component__WEBPACK_IMPORTED_MODULE_5__["BadgeColorBlackComponent"], _badge_customization_badge_customization_component__WEBPACK_IMPORTED_MODULE_6__["BadgeCustomizationComponent"], _badge_novaui_badge_novaui_component__WEBPACK_IMPORTED_MODULE_7__["BadgeNovauiComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLWRvY3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImJhZGdlLWRvY3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "qzZ1":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-system-statuses/badge-system-statuses.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BadgeSystemStatusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeSystemStatusesComponent", function() { return BadgeSystemStatusesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BadgeSystemStatusesComponent {
}
BadgeSystemStatusesComponent.ɵfac = function BadgeSystemStatusesComponent_Factory(t) { return new (t || BadgeSystemStatusesComponent)(); };
BadgeSystemStatusesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeSystemStatusesComponent, selectors: [["nui-badge-system-statuses"]], decls: 8, vars: 0, consts: [["data-before", "1", 1, "nui-badge-counter", "nui-badge-critical"], ["data-before", "10", 1, "nui-badge-counter", "nui-badge-warning"], ["data-before", "100", 1, "nui-badge-counter", "nui-badge-info"], ["data-before", "999+", 1, "nui-badge-counter", "nui-badge-ok"], [1, "nui-badge-empty", "nui-badge-critical"], [1, "nui-badge-empty", "nui-badge-warning"], [1, "nui-badge-empty", "nui-badge-info"], [1, "nui-badge-empty", "nui-badge-ok"]], template: function BadgeSystemStatusesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
    } }, styles: [".nui-badge-empty[_ngcontent-%COMP%], .nui-badge-counter[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  height: 30px;\n  position: relative;\n  margin-right: 20px;\n  border: 1px solid #3c3c3c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLXN5c3RlbS1zdGF0dXNlcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRUoiLCJmaWxlIjoiYmFkZ2Utc3lzdGVtLXN0YXR1c2VzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm51aS1iYWRnZS1lbXB0eSwgLm51aS1iYWRnZS1jb3VudGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNjM2MzYztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "uxcq":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-novaui/badge-novaui.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BadgeNovauiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeNovauiComponent", function() { return BadgeNovauiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/lib/textbox/textbox.component */ "nOFM");



class BadgeNovauiComponent {
    constructor() {
        this.buttonCounter = "1";
        this.textboxCounter = "1";
    }
}
BadgeNovauiComponent.ɵfac = function BadgeNovauiComponent_Factory(t) { return new (t || BadgeNovauiComponent)(); };
BadgeNovauiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeNovauiComponent, selectors: [["nui-badge-novaui"]], decls: 12, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_NOVAUI_BADGE_NOVAUI_COMPONENT_TS_1 = goog.getMsg("Click me!");
        i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_NOVAUI_BADGE_NOVAUI_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_NOVAUI_BADGE_NOVAUI_COMPONENT_TS_3 = goog.getMsg("Click me!");
        i18n_2 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_COMMON_BADGE_BADGE_NOVAUI_BADGE_NOVAUI_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } return [["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-badge-counter", "nui-badge-warning", "nui-badge-text-black"], i18n_0, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-badge-empty"], i18n_2, [1, "nui-badge-counter", "nui-badge-info"], ["value", "example value"], [1, "nui-badge-empty", "nui-badge-critical"]]; }, template: function BadgeNovauiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Button example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Input example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-textbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-textbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-before", ctx.buttonCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-before", ctx.textboxCounter);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"]], styles: ["[_nghost-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  margin: 0 20px 20px 0;\n}\ndiv[_ngcontent-%COMP%] {\n  position: relative;\n  vertical-align: top;\n}\nh3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLW5vdmF1aS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7QUFBSiIsImZpbGUiOiJiYWRnZS1ub3ZhdWkuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCBkaXYsIDpob3N0IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG59XG5cbmRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ "vBDx":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/badge/badge-customization/badge-customization.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BadgeCustomizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeCustomizationComponent", function() { return BadgeCustomizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BadgeCustomizationComponent {
    constructor() {
        this.counter = "999+";
    }
}
BadgeCustomizationComponent.ɵfac = function BadgeCustomizationComponent_Factory(t) { return new (t || BadgeCustomizationComponent)(); };
BadgeCustomizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BadgeCustomizationComponent, selectors: [["nui-badge-customization"]], decls: 2, vars: 1, consts: [[1, "nui-badge-counter", "nui-badge-counter-custom"], [1, "nui-badge-empty", "nui-badge-empty-custom"]], template: function BadgeCustomizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-before", ctx.counter);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50px;\n  height: 30px;\n  position: relative;\n  margin-right: 20px;\n  border: 1px solid #3c3c3c;\n}\n.nui-badge-counter-custom[_ngcontent-%COMP%]:after {\n  background: #0c5593;\n  border-radius: 0;\n  color: yellow;\n}\n.nui-badge-empty-custom[_ngcontent-%COMP%]:after {\n  background: #6b6ecf;\n  border-radius: 0;\n  transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLWN1c3RvbWl6YXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQURKIiwiZmlsZSI6ImJhZGdlLWN1c3RvbWl6YXRpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2MzYzNjO1xufVxuXG4ubnVpLWJhZGdlLWNvdW50ZXItY3VzdG9tOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMGM1NTkzO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgY29sb3I6IHllbGxvdztcbn1cblxuLm51aS1iYWRnZS1lbXB0eS1jdXN0b206YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICM2YjZlY2Y7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=badge-badge-module-es2015.js.map