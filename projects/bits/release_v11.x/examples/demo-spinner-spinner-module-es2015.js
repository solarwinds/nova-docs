(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-spinner-spinner-module"],{

/***/ "+P27":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-visual-test/spinner-visual-test.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SpinnerVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerVisualTestComponent", function() { return SpinnerVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");


class SpinnerVisualTestComponent {
    constructor() {
        this.show = true;
        this.showWithCancel = true;
        this.isCanceled = false;
        this.spinPercentage = 0;
    }
    onCancel() {
        this.showWithCancel = false;
        this.isCanceled = true;
    }
}
SpinnerVisualTestComponent.ɵfac = function SpinnerVisualTestComponent_Factory(t) { return new (t || SpinnerVisualTestComponent)(); };
SpinnerVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerVisualTestComponent, selectors: [["nui-spinner-visual"]], decls: 25, vars: 16, consts: [[1, "container"], [3, "show"], ["size", "large", 3, "show"], ["message", "Task Label", "helpText", "Optional description", 3, "show"], ["size", "large", "message", "Task Label", "helpText", "Optional description", 3, "show"], [3, "show", "percent"], ["size", "large", 3, "show", "percent"], ["size", "large", "message", "Task Label", "helpText", "Optional description", 3, "show", "percent"], [3, "show", "percent", "allowCancel", "cancel"], ["size", "large", "id", "nui-spinner-large-cancel", 3, "show", "percent", "allowCancel", "cancel"]], template: function SpinnerVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Big spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Indetermined spinner with text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Determined spinner with text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Spinner with cancellation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-spinner", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function SpinnerVisualTestComponent_Template_nui_spinner_cancel_22_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function SpinnerVisualTestComponent_Template_nui_spinner_cancel_23_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showWithCancel)("percent", ctx.spinPercentage)("allowCancel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showWithCancel)("percent", ctx.spinPercentage)("allowCancel", true);
    } }, directives: [_src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerComponent"]], styles: ["nui-spinner[_ngcontent-%COMP%] {\n                margin: 0px 10px;\n        }"] });


/***/ }),

/***/ "+dmK":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-with-delay-toggle/spinner-with-delay-toggle.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SpinnerWithDelayToggleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWithDelayToggleExampleComponent", function() { return SpinnerWithDelayToggleExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");



class SpinnerWithDelayToggleExampleComponent {
    constructor() {
        this.show = false;
        this.spinPercentage = 0;
        this.isCanceled = false;
        this.interval = undefined;
    }
    toggleSpinners() {
        this.show = !this.show;
        this.show ? this.startProgress() : this.onCancel();
    }
    startProgress() {
        this.clearInterval();
        this.interval = setInterval(() => {
            this.spinPercentage < 100 ? this.spinPercentage += 10 : this.onCancel();
        }, 500);
    }
    onCancel() {
        this.clearInterval();
        this.isCanceled = true;
        this.show = false;
        this.spinPercentage = 0;
    }
    ngOnDestroy() {
        this.clearInterval();
    }
    clearInterval() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }
}
SpinnerWithDelayToggleExampleComponent.ɵfac = function SpinnerWithDelayToggleExampleComponent_Factory(t) { return new (t || SpinnerWithDelayToggleExampleComponent)(); };
SpinnerWithDelayToggleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerWithDelayToggleExampleComponent, selectors: [["nui-spinner-with-delay-toggle-example"]], decls: 4, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5028458981020476351$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_WITH_DELAY_TOGGLE_SPINNER_WITH_DELAY_TOGGLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Start/stop progress");
        i18n_0 = MSG_EXTERNAL_5028458981020476351$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_WITH_DELAY_TOGGLE_SPINNER_WITH_DELAY_TOGGLE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3ca866e739a2f67ff0ad0d6787ebbdcc0c8b2723␟5028458981020476351:Start/stop progress`;
    } return [["nui-button", "", "type", "button", "id", "spinnerButton1", "displayStyle", "primary", 3, "click"], i18n_0, ["id", "spinner1", 3, "show", "percent", "delay"], ["size", "large", 3, "show", "percent", "delay"]]; }, template: function SpinnerWithDelayToggleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerWithDelayToggleExampleComponent_Template_button_click_0_listener() { return ctx.toggleSpinners(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-spinner", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage)("delay", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage)("delay", 1000);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "0Z1Y":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-test/spinner-test.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-e2e\",\n    templateUrl: \"./spinner-test.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SpinnerTestComponent {\n    public show1: boolean;\n    public show2: boolean;\n    public spinPercentage: number;\n}\n");

/***/ }),

/***/ "8o8z":
/*!************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner.module.ts ***!
  \************************************************************/
/*! exports provided: SpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "CAsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "spinner-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerTestComponent"],
    },
    {
        path: "spinner-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class SpinnerModule {
}
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); };
SpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("exZP"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSpinnerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["SpinnerBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerDeterminateExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerSizesExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerWithCancelExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerWithDelayToggleExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["SpinnerWithTextExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSpinnerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "AcwV":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-visual-test/spinner-visual-test.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n        nui-spinner {\n                margin: 0px 10px;\n        }\n</style>\n<div class=\"container\">\n     <h4>Basic spinner</h4>\n     <nui-spinner [show]=\"show\"></nui-spinner>\n     <hr />\n\n     <h4>Big spinner</h4>\n     <nui-spinner size=\"large\" [show]=\"show\"></nui-spinner>\n     <hr />\n\n     <h4>Indetermined spinner with text</h4>\n     <nui-spinner [show]=\"show\"\n          message=\"Task Label\"\n          helpText=\"Optional description\">\n     </nui-spinner>\n     <nui-spinner size=\"large\"\n          [show]=\"show\"\n          message=\"Task Label\"\n          helpText=\"Optional description\">\n     </nui-spinner>\n     <hr />\n\n     <h4>Determined spinner with text</h4>\n     <nui-spinner [show]=\"show\"\n          [percent]=\"spinPercentage\">\n     </nui-spinner>\n     <nui-spinner size=\"large\"\n          [show]=\"show\"\n          [percent]=\"spinPercentage\">\n     </nui-spinner>\n     <nui-spinner size=\"large\"\n          [show]=\"show\"\n          [percent]=\"spinPercentage\"\n          message=\"Task Label\"\n          helpText=\"Optional description\">\n     </nui-spinner>\n     <hr />\n\n     <h4>Spinner with cancellation</h4>\n     <nui-spinner [show]=\"showWithCancel\"\n          [percent]=\"spinPercentage\"\n          [allowCancel]=\"true\"\n          (cancel)=\"onCancel()\">\n     </nui-spinner>\n     <nui-spinner size=\"large\"\n          [show]=\"showWithCancel\"\n          [percent]=\"spinPercentage\"\n          [allowCancel]=\"true\"\n          (cancel)=\"onCancel()\"\n          id=\"nui-spinner-large-cancel\">\n     </nui-spinner>\n     <hr />\n</div>\n");

/***/ }),

/***/ "B3+f":
/*!***********************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-test/spinner-test.ts ***!
  \***********************************************************************/
/*! exports provided: SpinnerTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerTestComponent", function() { return SpinnerTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");



class SpinnerTestComponent {
}
SpinnerTestComponent.ɵfac = function SpinnerTestComponent_Factory(t) { return new (t || SpinnerTestComponent)(); };
SpinnerTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerTestComponent, selectors: [["nui-spinner-e2e"]], decls: 9, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5168518422045160641$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_TEST_SPINNER_TEST_TS_1 = goog.getMsg("toggle delayed spinner ");
        i18n_0 = MSG_EXTERNAL_5168518422045160641$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_TEST_SPINNER_TEST_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3d937e7932d3068810a1a60bd71a432f0f42fab8␟5168518422045160641:toggle delayed spinner `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2987577984904897126$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_TEST_SPINNER_TEST_TS_3 = goog.getMsg("toggle default spinner ");
        i18n_2 = MSG_EXTERNAL_2987577984904897126$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_TEST_SPINNER_TEST_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8b8788700790f47f80dd97751cab58167480a40c␟2987577984904897126:toggle default spinner `;
    } return [[1, "p-3"], ["nui-button", "", "type", "button", "id", "spinnerButton1", "displayStyle", "primary", 1, "mr-3", 3, "click"], i18n_0, ["id", "spinner1", 3, "show", "percent", "delay"], ["nui-button", "", "type", "button", "id", "spinnerButton2", "displayStyle", "primary", 1, "mr-3", 3, "click"], i18n_2, ["id", "spinner2", 3, "show"]]; }, template: function SpinnerTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerTestComponent_Template_button_click_2_listener() { return ctx.show1 = !ctx.show1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerTestComponent_Template_button_click_6_listener() { return ctx.show2 = !ctx.show2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show1)("percent", ctx.spinPercentage)("delay", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show2);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ "BUoy":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-with-text/spinner-with-text.example.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-spinner size=\"large\"\n             [show]=\"true\"\n             message=\"Task Label\" i18n-message\n             helpText=\"Optional description\" i18n-helpText>\n</nui-spinner>\n");

/***/ }),

/***/ "CAsG":
/*!***************************************************!*\
  !*** ./demo/src/components/demo/spinner/index.ts ***!
  \***************************************************/
/*! exports provided: SpinnerExampleComponent, SpinnerBasicExampleComponent, SpinnerDeterminateExampleComponent, SpinnerWithCancelExampleComponent, SpinnerWithDelayToggleExampleComponent, SpinnerSizesExampleComponent, SpinnerWithTextExampleComponent, SpinnerTestComponent, SpinnerVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spinner_docs_spinner_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner-docs/spinner-docs.example.component */ "d1Xt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerExampleComponent", function() { return _spinner_docs_spinner_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["SpinnerExampleComponent"]; });

/* harmony import */ var _spinner_basic_spinner_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner-basic/spinner-basic.example.component */ "qeDC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerBasicExampleComponent", function() { return _spinner_basic_spinner_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerBasicExampleComponent"]; });

/* harmony import */ var _spinner_determinate_spinner_determinate_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner-determinate/spinner-determinate.example.component */ "knbk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerDeterminateExampleComponent", function() { return _spinner_determinate_spinner_determinate_example_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerDeterminateExampleComponent"]; });

/* harmony import */ var _spinner_with_cancel_spinner_with_cancel_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner-with-cancel/spinner-with-cancel.example.component */ "fD98");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerWithCancelExampleComponent", function() { return _spinner_with_cancel_spinner_with_cancel_example_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerWithCancelExampleComponent"]; });

/* harmony import */ var _spinner_with_delay_toggle_spinner_with_delay_toggle_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner-with-delay-toggle/spinner-with-delay-toggle.example.component */ "+dmK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerWithDelayToggleExampleComponent", function() { return _spinner_with_delay_toggle_spinner_with_delay_toggle_example_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerWithDelayToggleExampleComponent"]; });

/* harmony import */ var _spinner_sizes_spinner_sizes_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinner-sizes/spinner-sizes.example.component */ "HCM6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerSizesExampleComponent", function() { return _spinner_sizes_spinner_sizes_example_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerSizesExampleComponent"]; });

/* harmony import */ var _spinner_with_text_spinner_with_text_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner-with-text/spinner-with-text.example.component */ "Jg1j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerWithTextExampleComponent", function() { return _spinner_with_text_spinner_with_text_example_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerWithTextExampleComponent"]; });

/* harmony import */ var _spinner_test_spinner_test__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner-test/spinner-test */ "B3+f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerTestComponent", function() { return _spinner_test_spinner_test__WEBPACK_IMPORTED_MODULE_7__["SpinnerTestComponent"]; });

/* harmony import */ var _spinner_visual_test_spinner_visual_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spinner-visual-test/spinner-visual-test.component */ "+P27");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpinnerVisualTestComponent", function() { return _spinner_visual_test_spinner_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerVisualTestComponent"]; });












/***/ }),

/***/ "E1AW":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-with-text/spinner-with-text.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-with-text-example\",\n    templateUrl: \"./spinner-with-text.example.component.html\",\n})\nexport class SpinnerWithTextExampleComponent {\n}\n");

/***/ }),

/***/ "EYii":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-with-cancel/spinner-with-cancel.example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nui-button type=\"button\"\n        (click)=\"toggleSpinners()\"\n        displayStyle=\"primary\">Start/stop progress</button>\n<nui-spinner [show]=\"show\"\n             [percent]=\"spinPercentage\"\n             [allowCancel]=\"true\"\n             (cancel)=\"onCancel()\">\n</nui-spinner>\n\n<nui-spinner size=\"large\"\n             [show]=\"show\"\n             [percent]=\"spinPercentage\"\n             [allowCancel]=\"true\"\n             (cancel)=\"onCancel()\">\n</nui-spinner>\n");

/***/ }),

/***/ "HCM6":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-sizes/spinner-sizes.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpinnerSizesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerSizesExampleComponent", function() { return SpinnerSizesExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");


class SpinnerSizesExampleComponent {
}
SpinnerSizesExampleComponent.ɵfac = function SpinnerSizesExampleComponent_Factory(t) { return new (t || SpinnerSizesExampleComponent)(); };
SpinnerSizesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerSizesExampleComponent, selectors: [["nui-spinner-sizes-example"]], decls: 1, vars: 1, consts: [["size", "large", 3, "show"]], template: function SpinnerSizesExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-spinner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", true);
    } }, directives: [_src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Jg1j":
/*!***************************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-with-text/spinner-with-text.example.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SpinnerWithTextExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWithTextExampleComponent", function() { return SpinnerWithTextExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");


class SpinnerWithTextExampleComponent {
}
SpinnerWithTextExampleComponent.ɵfac = function SpinnerWithTextExampleComponent_Factory(t) { return new (t || SpinnerWithTextExampleComponent)(); };
SpinnerWithTextExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerWithTextExampleComponent, selectors: [["nui-spinner-with-text-example"]], decls: 1, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_WITH_TEXT_SPINNER_WITH_TEXT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Task Label");
        i18n_0 = MSG_EXTERNAL_6272229524073167827$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_WITH_TEXT_SPINNER_WITH_TEXT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟0e90f0b5f7219bbb39234ecaf2933b0f8f437345␟6272229524073167827:Task Label`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_WITH_TEXT_SPINNER_WITH_TEXT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Optional description");
        i18n_2 = MSG_EXTERNAL_5479956740377309255$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_WITH_TEXT_SPINNER_WITH_TEXT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟2212c4ea193c4d34f96198c84673338800cf7da5␟5479956740377309255:Optional description`;
    } return [["size", "large", "message", i18n_0, "helpText", i18n_2, 3, "show"]]; }, template: function SpinnerWithTextExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-spinner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", true);
    } }, directives: [_src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "L4fS":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-basic/spinner-basic.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-spinner [show]=\"true\"></nui-spinner>\n");

/***/ }),

/***/ "MPSt":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-visual-test/spinner-visual-test.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-visual\",\n    templateUrl: \"./spinner-visual-test.component.html\",\n})\nexport class SpinnerVisualTestComponent {\n    public show: boolean = true;\n    public showWithCancel: boolean = true;\n    public isCanceled: boolean = false;\n    public spinPercentage: number = 0;\n\n    public onCancel() {\n        this.showWithCancel = false;\n        this.isCanceled = true;\n    }\n\n}\n");

/***/ }),

/***/ "QMnL":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-with-delay-toggle/spinner-with-delay-toggle.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nui-button type=\"button\"\n        id=\"spinnerButton1\"\n        (click)=\"toggleSpinners()\"\n        displayStyle=\"primary\"\n        i18n>Start/stop progress</button>\n<nui-spinner id=\"spinner1\"\n             [show]=\"show\"\n             [percent]=\"spinPercentage\"\n             [delay]=\"500\">\n</nui-spinner>\n\n<nui-spinner size=\"large\"\n             [show]=\"show\"\n             [percent]=\"spinPercentage\"\n             [delay]=\"1000\">\n</nui-spinner>\n");

/***/ }),

/***/ "TMfQ":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-basic/spinner-basic.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-basic-example\",\n    templateUrl: \"./spinner-basic.example.component.html\",\n})\n\nexport class SpinnerBasicExampleComponent {\n}\n");

/***/ }),

/***/ "V0fN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nexport { SpinnerExampleComponent } from \"./spinner-docs/spinner-docs.example.component\";\nexport { SpinnerBasicExampleComponent } from \"./spinner-basic/spinner-basic.example.component\";\nexport { SpinnerDeterminateExampleComponent } from \"./spinner-determinate/spinner-determinate.example.component\";\nexport { SpinnerWithCancelExampleComponent } from \"./spinner-with-cancel/spinner-with-cancel.example.component\";\nexport { SpinnerWithDelayToggleExampleComponent } from \"./spinner-with-delay-toggle/spinner-with-delay-toggle.example.component\";\nexport { SpinnerSizesExampleComponent } from \"./spinner-sizes/spinner-sizes.example.component\";\nexport { SpinnerWithTextExampleComponent } from \"./spinner-with-text/spinner-with-text.example.component\";\nexport { SpinnerTestComponent } from \"./spinner-test/spinner-test\";\nexport { SpinnerVisualTestComponent } from \"./spinner-visual-test/spinner-visual-test.component\";\n");

/***/ }),

/***/ "YBSE":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-docs/spinner-docs.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-docs-example\",\n    templateUrl: \"./spinner-docs.example.component.html\",\n})\nexport class SpinnerExampleComponent {}\n");

/***/ }),

/***/ "b6R0":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-with-cancel/spinner-with-cancel.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnDestroy } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-with-cancel-example\",\n    templateUrl: \"./spinner-with-cancel.example.component.html\",\n})\nexport class SpinnerWithCancelExampleComponent implements OnDestroy {\n    public show = false;\n    public spinPercentage = 0;\n    public isCanceled = false;\n\n    private interval: any = undefined;\n\n    public toggleSpinners() {\n        this.show = !this.show;\n        this.show ? this.startProgress() : this.onCancel();\n    }\n\n    public startProgress() {\n        this.clearInterval();\n        this.interval = setInterval(() => {\n            this.spinPercentage < 100 ? this.spinPercentage += 10 : this.onCancel();\n        }, 500);\n    }\n\n    public onCancel() {\n        this.clearInterval();\n        this.isCanceled = true;\n        this.show = false;\n        this.spinPercentage = 0;\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.interval) {\n            clearInterval(this.interval);\n            this.interval = undefined;\n        }\n    }\n}\n");

/***/ }),

/***/ "c85H":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-docs/spinner-docs.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiSpinnerModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<p>In order to use spinner component, you need to pass <code>show</code> binding.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"spinner-basic\" exampleTitle=\"Basic Usage\">\n    <nui-spinner-basic-example></nui-spinner-basic-example>\n</nui-example-wrapper>\n\n<h2>Size Setting</h2>\n\n<p>\n    Spinner supports two sizes: large and small. The default is small. For a larger spinner, you can pass <code>large</code> to the <code>size</code> input.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"spinner-sizes\" exampleTitle=\"Sizes\">\n    <nui-spinner-sizes-example></nui-spinner-sizes-example>\n</nui-example-wrapper>\n\n<h2>Adding Text</h2>\n\n<p>\n    Spinner label could be placed on the right side. You only need to pass <code>message</code> string for that.\n    In order to display additional help text on the right side you need to pass <code>helpText</code> string.\n    <strong>Note:</strong> In order to display the help text, the <code>size</code> input must be set to <code>large</code>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"spinner-with-text\" exampleTitle=\"Indeterminate With Text\">\n    <nui-spinner-with-text-example></nui-spinner-with-text-example>\n</nui-example-wrapper>\n\n<h2>Determinate Progress</h2>\n\n<p>\n    To enable determinate progress, set the <code>percent</code> input and pass updates to it with numbers between 0 and 100.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"spinner-determinate\" exampleTitle=\"Determinate Progress\">\n    <nui-spinner-determinate-example></nui-spinner-determinate-example>\n</nui-example-wrapper>\n\n<h2>Enabling Cancellation</h2>\n\n<p>The spinner can be set to allow cancellation by passing true to the <code>allowCancel</code> input. To take action on a cancellation, pass a handler to the <code>cancel</code> output.</p>\n\n<nui-example-wrapper filenamePrefix=\"spinner-with-cancel\" exampleTitle=\"Determinate Progress With Cancel\">\n    <nui-spinner-with-cancel-example></nui-spinner-with-cancel-example>\n</nui-example-wrapper>\n\n<h2>Modifying Delayed Appearance</h2>\n\n<p>To mitigate the possibility of a blink effect that may happen due to the show/hide timing, you can optionally set the <code>delay</code> input in milliseconds.\n    As the name implies, this input can be used to override the delay before showing the spinner for the specified duration after the <code>show</code> input value changes to true.\n    The default value for the <code>delay</code> input is 250.</p>\n\n<nui-example-wrapper filenamePrefix=\"spinner-with-delay-toggle\" exampleTitle=\"Delayed Appearance\">\n    <nui-spinner-with-delay-toggle-example></nui-spinner-with-delay-toggle-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "cOo7":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-determinate/spinner-determinate.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnDestroy } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-determinate-example\",\n    templateUrl: \"./spinner-determinate.example.component.html\",\n})\nexport class SpinnerDeterminateExampleComponent implements OnDestroy {\n    public show = false;\n    public spinPercentage = 0;\n\n    private interval: any = undefined;\n\n    public toggleSpinners() {\n        this.show = !this.show;\n        this.show ? this.startProgress() : this.onCancel();\n    }\n\n    public startProgress() {\n        this.clearInterval();\n        this.interval = setInterval(() => {\n            this.spinPercentage < 100 ? this.spinPercentage += 10 : this.onCancel();\n        }, 500);\n    }\n\n    public onCancel() {\n        this.clearInterval();\n        this.show = false;\n        this.spinPercentage = 0;\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.interval) {\n            clearInterval(this.interval);\n            this.interval = undefined;\n        }\n    }\n}\n");

/***/ }),

/***/ "d1Xt":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-docs/spinner-docs.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SpinnerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerExampleComponent", function() { return SpinnerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _spinner_basic_spinner_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner-basic/spinner-basic.example.component */ "qeDC");
/* harmony import */ var _spinner_sizes_spinner_sizes_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner-sizes/spinner-sizes.example.component */ "HCM6");
/* harmony import */ var _spinner_with_text_spinner_with_text_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner-with-text/spinner-with-text.example.component */ "Jg1j");
/* harmony import */ var _spinner_determinate_spinner_determinate_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner-determinate/spinner-determinate.example.component */ "knbk");
/* harmony import */ var _spinner_with_cancel_spinner_with_cancel_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner-with-cancel/spinner-with-cancel.example.component */ "fD98");
/* harmony import */ var _spinner_with_delay_toggle_spinner_with_delay_toggle_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../spinner-with-delay-toggle/spinner-with-delay-toggle.example.component */ "+dmK");








class SpinnerExampleComponent {
}
SpinnerExampleComponent.ɵfac = function SpinnerExampleComponent_Factory(t) { return new (t || SpinnerExampleComponent)(); };
SpinnerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerExampleComponent, selectors: [["nui-spinner-docs-example"]], decls: 84, vars: 0, consts: [["filenamePrefix", "spinner-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "spinner-sizes", "exampleTitle", "Sizes"], ["filenamePrefix", "spinner-with-text", "exampleTitle", "Indeterminate With Text"], ["filenamePrefix", "spinner-determinate", "exampleTitle", "Determinate Progress"], ["filenamePrefix", "spinner-with-cancel", "exampleTitle", "Determinate Progress With Cancel"], ["filenamePrefix", "spinner-with-delay-toggle", "exampleTitle", "Delayed Appearance"]], template: function SpinnerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiSpinnerModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In order to use spinner component, you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " binding.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-spinner-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Size Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Spinner supports two sizes: large and small. The default is small. For a larger spinner, you can pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-spinner-sizes-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Adding Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Spinner label could be placed on the right side. You only need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " string for that. In order to display additional help text on the right side you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "helpText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " string. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " In order to display the help text, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " input must be set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nui-spinner-with-text-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Determinate Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " To enable determinate progress, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " input and pass updates to it with numbers between 0 and 100.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-spinner-determinate-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Enabling Cancellation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "The spinner can be set to allow cancellation by passing true to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "allowCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " input. To take action on a cancellation, pass a handler to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " output.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "nui-spinner-with-cancel-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Modifying Delayed Appearance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "To mitigate the possibility of a blink effect that may happen due to the show/hide timing, you can optionally set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " input in milliseconds. As the name implies, this input can be used to override the delay before showing the spinner for the specified duration after the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " input value changes to true. The default value for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " input is 250.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "nui-spinner-with-delay-toggle-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _spinner_basic_spinner_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerBasicExampleComponent"], _spinner_sizes_spinner_sizes_example_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerSizesExampleComponent"], _spinner_with_text_spinner_with_text_example_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerWithTextExampleComponent"], _spinner_determinate_spinner_determinate_example_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerDeterminateExampleComponent"], _spinner_with_cancel_spinner_with_cancel_example_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerWithCancelExampleComponent"], _spinner_with_delay_toggle_spinner_with_delay_toggle_example_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerWithDelayToggleExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "exZP":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "V0fN",
	"./spinner-basic/spinner-basic.example.component.html": "L4fS",
	"./spinner-basic/spinner-basic.example.component.ts": "TMfQ",
	"./spinner-determinate/spinner-determinate.example.component.html": "g0RB",
	"./spinner-determinate/spinner-determinate.example.component.ts": "cOo7",
	"./spinner-docs/spinner-docs.example.component.html": "c85H",
	"./spinner-docs/spinner-docs.example.component.ts": "YBSE",
	"./spinner-sizes/spinner-sizes.example.component.html": "lGcg",
	"./spinner-sizes/spinner-sizes.example.component.ts": "xleW",
	"./spinner-test/spinner-test.html": "vXBL",
	"./spinner-test/spinner-test.ts": "0Z1Y",
	"./spinner-visual-test/spinner-visual-test.component.html": "AcwV",
	"./spinner-visual-test/spinner-visual-test.component.ts": "MPSt",
	"./spinner-with-cancel/spinner-with-cancel.example.component.html": "EYii",
	"./spinner-with-cancel/spinner-with-cancel.example.component.ts": "b6R0",
	"./spinner-with-delay-toggle/spinner-with-delay-toggle.example.component.html": "QMnL",
	"./spinner-with-delay-toggle/spinner-with-delay-toggle.example.component.ts": "jAbo",
	"./spinner-with-text/spinner-with-text.example.component.html": "BUoy",
	"./spinner-with-text/spinner-with-text.example.component.ts": "E1AW",
	"./spinner.module.ts": "p90v"
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
webpackContext.id = "exZP";

/***/ }),

/***/ "fD98":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-with-cancel/spinner-with-cancel.example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SpinnerWithCancelExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWithCancelExampleComponent", function() { return SpinnerWithCancelExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");



class SpinnerWithCancelExampleComponent {
    constructor() {
        this.show = false;
        this.spinPercentage = 0;
        this.isCanceled = false;
        this.interval = undefined;
    }
    toggleSpinners() {
        this.show = !this.show;
        this.show ? this.startProgress() : this.onCancel();
    }
    startProgress() {
        this.clearInterval();
        this.interval = setInterval(() => {
            this.spinPercentage < 100 ? this.spinPercentage += 10 : this.onCancel();
        }, 500);
    }
    onCancel() {
        this.clearInterval();
        this.isCanceled = true;
        this.show = false;
        this.spinPercentage = 0;
    }
    ngOnDestroy() {
        this.clearInterval();
    }
    clearInterval() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }
}
SpinnerWithCancelExampleComponent.ɵfac = function SpinnerWithCancelExampleComponent_Factory(t) { return new (t || SpinnerWithCancelExampleComponent)(); };
SpinnerWithCancelExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerWithCancelExampleComponent, selectors: [["nui-spinner-with-cancel-example"]], decls: 4, vars: 6, consts: [["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], [3, "show", "percent", "allowCancel", "cancel"], ["size", "large", 3, "show", "percent", "allowCancel", "cancel"]], template: function SpinnerWithCancelExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerWithCancelExampleComponent_Template_button_click_0_listener() { return ctx.toggleSpinners(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start/stop progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function SpinnerWithCancelExampleComponent_Template_nui_spinner_cancel_2_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function SpinnerWithCancelExampleComponent_Template_nui_spinner_cancel_3_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage)("allowCancel", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage)("allowCancel", true);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "g0RB":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-determinate/spinner-determinate.example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nui-button type=\"button\"\n        (click)=\"toggleSpinners()\"\n        displayStyle=\"primary\"\n        i18n>Start/stop progress\n</button>\n<nui-spinner [show]=\"show\"\n             [percent]=\"spinPercentage\">\n</nui-spinner>\n\n<nui-spinner size=\"large\"\n             [show]=\"show\"\n             [percent]=\"spinPercentage\">\n</nui-spinner>\n");

/***/ }),

/***/ "jAbo":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-with-delay-toggle/spinner-with-delay-toggle.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnDestroy } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-with-delay-toggle-example\",\n    templateUrl: \"./spinner-with-delay-toggle.example.component.html\",\n})\nexport class SpinnerWithDelayToggleExampleComponent implements OnDestroy {\n    public show = false;\n    public spinPercentage = 0;\n    public isCanceled = false;\n\n    private interval: any = undefined;\n\n    public toggleSpinners() {\n        this.show = !this.show;\n        this.show ? this.startProgress() : this.onCancel();\n    }\n\n    public startProgress() {\n        this.clearInterval();\n        this.interval = setInterval(() => {\n            this.spinPercentage < 100 ? this.spinPercentage += 10 : this.onCancel();\n        }, 500);\n    }\n\n    public onCancel() {\n        this.clearInterval();\n        this.isCanceled = true;\n        this.show = false;\n        this.spinPercentage = 0;\n    }\n\n    public ngOnDestroy() {\n        this.clearInterval();\n    }\n\n    private clearInterval() {\n        if (this.interval) {\n            clearInterval(this.interval);\n            this.interval = undefined;\n        }\n    }\n}\n");

/***/ }),

/***/ "knbk":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-determinate/spinner-determinate.example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SpinnerDeterminateExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerDeterminateExampleComponent", function() { return SpinnerDeterminateExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");



class SpinnerDeterminateExampleComponent {
    constructor() {
        this.show = false;
        this.spinPercentage = 0;
        this.interval = undefined;
    }
    toggleSpinners() {
        this.show = !this.show;
        this.show ? this.startProgress() : this.onCancel();
    }
    startProgress() {
        this.clearInterval();
        this.interval = setInterval(() => {
            this.spinPercentage < 100 ? this.spinPercentage += 10 : this.onCancel();
        }, 500);
    }
    onCancel() {
        this.clearInterval();
        this.show = false;
        this.spinPercentage = 0;
    }
    ngOnDestroy() {
        this.clearInterval();
    }
    clearInterval() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }
}
SpinnerDeterminateExampleComponent.ɵfac = function SpinnerDeterminateExampleComponent_Factory(t) { return new (t || SpinnerDeterminateExampleComponent)(); };
SpinnerDeterminateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerDeterminateExampleComponent, selectors: [["nui-spinner-determinate-example"]], decls: 4, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8011414759589431313$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_DETERMINATE_SPINNER_DETERMINATE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Start/stop progress\n");
        i18n_0 = MSG_EXTERNAL_8011414759589431313$$DEMO_SRC_COMPONENTS_DEMO_SPINNER_SPINNER_DETERMINATE_SPINNER_DETERMINATE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟32564f63ec8be2be5ad25efa40e84915c4c6f825␟8011414759589431313:Start/stop progress
`;
    } return [["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_0, [3, "show", "percent"], ["size", "large", 3, "show", "percent"]]; }, template: function SpinnerDeterminateExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerDeterminateExampleComponent_Template_button_click_0_listener() { return ctx.toggleSpinners(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-spinner", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("percent", ctx.spinPercentage);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "lGcg":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-sizes/spinner-sizes.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-spinner size=\"large\" [show]=\"true\"></nui-spinner>\n");

/***/ }),

/***/ "p90v":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiSpinnerModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    SpinnerBasicExampleComponent,\n    SpinnerDeterminateExampleComponent,\n    SpinnerExampleComponent,\n    SpinnerSizesExampleComponent,\n    SpinnerTestComponent,\n    SpinnerVisualTestComponent,\n    SpinnerWithCancelExampleComponent,\n    SpinnerWithDelayToggleExampleComponent,\n    SpinnerWithTextExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: SpinnerExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"spinner-test\",\n        component: SpinnerTestComponent,\n    },\n    {\n        path: \"spinner-visual-test\",\n        component: SpinnerVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiSpinnerModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        SpinnerBasicExampleComponent,\n        SpinnerDeterminateExampleComponent,\n        SpinnerTestComponent,\n        SpinnerVisualTestComponent,\n        SpinnerExampleComponent,\n        SpinnerSizesExampleComponent,\n        SpinnerWithCancelExampleComponent,\n        SpinnerWithDelayToggleExampleComponent,\n        SpinnerWithTextExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SpinnerModule {\n}\n");

/***/ }),

/***/ "qeDC":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/spinner/spinner-basic/spinner-basic.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpinnerBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerBasicExampleComponent", function() { return SpinnerBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");


class SpinnerBasicExampleComponent {
}
SpinnerBasicExampleComponent.ɵfac = function SpinnerBasicExampleComponent_Factory(t) { return new (t || SpinnerBasicExampleComponent)(); };
SpinnerBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerBasicExampleComponent, selectors: [["nui-spinner-basic-example"]], decls: 1, vars: 1, consts: [[3, "show"]], template: function SpinnerBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-spinner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", true);
    } }, directives: [_src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__["SpinnerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vXBL":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-test/spinner-test.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@.disabled]=\"true\">\n    <div class=\"p-3\">\n        <button nui-button type=\"button\"\n                class=\"mr-3\"\n                id=\"spinnerButton1\"\n                (click)=\"show1 = !show1\"\n                displayStyle=\"primary\"\n                i18n>toggle delayed spinner\n        </button>\n        <nui-spinner id=\"spinner1\"\n                     [show]=\"show1\"\n                     [percent]=\"spinPercentage\"\n                     [delay]=\"500\">\n        </nui-spinner>\n    </div>\n\n    <div class=\"p-3\">\n        <button nui-button type=\"button\"\n                class=\"mr-3\"\n                id=\"spinnerButton2\"\n                (click)=\"show2 = !show2\"\n                displayStyle=\"primary\"\n                i18n>toggle default spinner\n        </button>\n        <nui-spinner id=\"spinner2\"\n                     [show]=\"show2\">\n        </nui-spinner>\n    </div>\n</div>\n");

/***/ }),

/***/ "xleW":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/spinner/spinner-sizes/spinner-sizes.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-spinner-sizes-example\",\n    templateUrl: \"./spinner-sizes.example.component.html\",\n})\n\nexport class SpinnerSizesExampleComponent {\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-spinner-spinner-module-es2015.js.map