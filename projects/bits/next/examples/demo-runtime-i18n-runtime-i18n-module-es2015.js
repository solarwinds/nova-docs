(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-runtime-i18n-runtime-i18n-module"],{

/***/ "HgGm":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/runtime-i18n/runtime-i18n.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiFormFieldModule, NuiTextboxModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport { RuntimeI18NExampleComponent } from \"./runtime-i18n-example.component\";\n\n\nconst routes = [{\n    path: \"\",\n    component: RuntimeI18NExampleComponent,\n    data: {\n        \"srlc\": {\n            \"stage\": SrlcStage.beta,\n        },\n    },\n}];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiDocsModule,\n        NuiFormFieldModule,\n        NuiTextboxModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        RuntimeI18NExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class RuntimeI18NModule {\n}\n");

/***/ }),

/***/ "QEdf":
/*!*********************************************************************************!*\
  !*** ./demo/src/components/demo/runtime-i18n/runtime-i18n-example.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RuntimeI18NExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeI18NExampleComponent", function() { return RuntimeI18NExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/lib/textbox/textbox.component */ "nOFM");





class RuntimeI18NExampleComponent {
    constructor() {
        this.firstNamePlaceholder = `John`;
        this.lastNamePlaceholder = `Doe`;
        this.email = `john.doe@whatever.com`;
    }
    pageReload() {
        window.location.reload();
    }
    setLocale(locale) {
        localStorage.setItem("locale", locale);
        this.pageReload();
    }
    setDefaultLocale() {
        localStorage.removeItem("locale");
        this.pageReload();
    }
}
RuntimeI18NExampleComponent.ɵfac = function RuntimeI18NExampleComponent_Factory(t) { return new (t || RuntimeI18NExampleComponent)(); };
RuntimeI18NExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RuntimeI18NExampleComponent, selectors: [["nui-runtime-i18n-example"]], decls: 32, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8885234477142162752$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Greetings!");
        i18n_0 = MSG_EXTERNAL_8885234477142162752$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟50a10a6709da2f983a1c4852acf5b34ab310d404␟8885234477142162752:Greetings!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3941441023456836628$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" This is a random text written to show that runtime translations are actually working. Every single line in this example will be translated using Google Translator. ");
        i18n_2 = MSG_EXTERNAL_3941441023456836628$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8d53d0581562ba8dc203e7548ca0e239f9ab8a3d␟3941441023456836628: This is a random text written to show that runtime translations are actually working. Every single line in this example will be translated using Google Translator. `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6028371114637047813$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("First Name");
        i18n_4 = MSG_EXTERNAL_6028371114637047813$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟c83b838d845690bcb897f775f53b5316535306dc␟6028371114637047813:First Name`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_665199437400610045$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Please enter your first name");
        i18n_6 = MSG_EXTERNAL_665199437400610045$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟46a60c59839ddcb594bec2c7282cc6012e380d73␟665199437400610045:Please enter your first name`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7484692620446298558$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Second Name");
        i18n_8 = MSG_EXTERNAL_7484692620446298558$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟51a3cce2cd1bc422c9f2a1c586dc6f2e903f7c45␟7484692620446298558:Second Name`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1733240001129506538$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Please enter your second name");
        i18n_10 = MSG_EXTERNAL_1733240001129506538$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟5fd65b61f214797bfebee219610500ac6de8c8fc␟1733240001129506538:Please enter your second name`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Email address");
        i18n_12 = MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟69b6ac577a19acc39fc0c22342092f327fff2529␟3967269098753656610:Email address`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8114342674308277164$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Please enter a valid e-mail address");
        i18n_14 = MSG_EXTERNAL_8114342674308277164$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟539810281d5f6e59cac4498de3b2754f18455843␟8114342674308277164:Please enter a valid e-mail address`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_17 = goog.getMsg("Submit");
        i18n_16 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_RUNTIME_I18N_RUNTIME_I18N_EXAMPLE_COMPONENT_TS_17;
    }
    else {
        i18n_16 = $localize `:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`;
    } return [["filenamePrefix", "runtime-i18n-example", "exampleTitle", "Runtime i18n"], [1, "m-5", 2, "border", "1px lightgrey dashed", "padding", "30px"], [1, "row"], [1, "col-2"], ["btn", "", "nui-button", "", "type", "button", 3, "click"], [1, "col-6"], [1, "d-flex", "justify-content-center", "align-items-center"], i18n_0, i18n_2, ["caption", i18n_4, "hint", i18n_6], [3, "placeholder"], ["caption", i18n_8, "hint", i18n_10], ["caption", i18n_12, "hint", i18n_14], ["btn", "", "nui-button", "", "type", "button"], i18n_16]; }, template: function RuntimeI18NExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RuntimeI18NExampleComponent_Template_button_click_4_listener() { return ctx.setLocale("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Espa\u00F1ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RuntimeI18NExampleComponent_Template_button_click_7_listener() { return ctx.setLocale("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Franc\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RuntimeI18NExampleComponent_Template_button_click_10_listener() { return ctx.setLocale("de"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Deutsch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RuntimeI18NExampleComponent_Template_button_click_13_listener() { return ctx.setDefaultLocale(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nui-textbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nui-textbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-textbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](31, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.firstNamePlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.lastNamePlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.email);
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Z+HK":
/*!**********************************************************************!*\
  !*** ./demo/src/components/demo/runtime-i18n/runtime-i18n.module.ts ***!
  \**********************************************************************/
/*! exports provided: RuntimeI18NModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeI18NModule", function() { return RuntimeI18NModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _runtime_i18n_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtime-i18n-example.component */ "QEdf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [{
        path: "",
        component: _runtime_i18n_example_component__WEBPACK_IMPORTED_MODULE_2__["RuntimeI18NExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].beta,
            },
        },
    }];
class RuntimeI18NModule {
}
RuntimeI18NModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RuntimeI18NModule });
RuntimeI18NModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function RuntimeI18NModule_Factory(t) { return new (t || RuntimeI18NModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("ll9c"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTextboxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RuntimeI18NModule, { declarations: [_runtime_i18n_example_component__WEBPACK_IMPORTED_MODULE_2__["RuntimeI18NExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiFormFieldModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hOtc":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/runtime-i18n/runtime-i18n-example.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-example-wrapper filenamePrefix=\"runtime-i18n-example\" exampleTitle=\"Runtime i18n\">\n    <div class=\"m-5\" style=\"border: 1px lightgrey dashed; padding: 30px\">\n        <div class=\"row\">\n            <div class=\"col-2\">\n                <button btn nui-button type=\"button\" (click)=\"setLocale('es')\">Español</button>\n            </div>\n            <div class=\"col-2\">\n                <button btn nui-button type=\"button\" (click)=\"setLocale('fr')\">Francés</button>\n            </div>\n            <div class=\"col-2\">\n                <button btn nui-button type=\"button\" (click)=\"setLocale('de')\">Deutsch</button>\n            </div>\n            <div class=\"col-6\">\n                <button btn nui-button type=\"button\" (click)=\"setDefaultLocale()\">English</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"d-flex justify-content-center align-items-center\">\n                <h1 i18n>Greetings!</h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <p i18n>\n                This is a random text written to show that runtime translations are actually working. Every single line in this example will be translated using Google Translator.\n            </p>\n        </div>\n        <div class=\"row\">\n            <form>\n                <nui-form-field caption=\"First Name\"\n                                i18n-caption\n                                hint=\"Please enter your first name\"\n                                i18n-hint>\n                    <nui-textbox [placeholder]=\"firstNamePlaceholder\" i18n-placeholder></nui-textbox>\n                </nui-form-field>\n                <nui-form-field caption=\"Second Name\"\n                                i18n-caption\n                                hint=\"Please enter your second name\"\n                                i18n-hint>\n                    <nui-textbox [placeholder]=\"lastNamePlaceholder\" i18n-placeholder></nui-textbox>\n                </nui-form-field>\n                <nui-form-field caption=\"Email address\"\n                                i18n-caption\n                                hint=\"Please enter a valid e-mail address\"\n                                i18n-hint>\n                    <nui-textbox [placeholder]=\"email\" i18n-placeholder></nui-textbox>\n                </nui-form-field>\n                <button btn nui-button type=\"button\" i18n>Submit</button>\n            </form>\n        </div>\n    </div>\n</nui-example-wrapper>");

/***/ }),

/***/ "ll9c":
/*!***************************************************************************************************************!*\
  !*** ./demo/src/components/demo/runtime-i18n sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./runtime-i18n-example.component.html": "hOtc",
	"./runtime-i18n-example.component.ts": "rwOF",
	"./runtime-i18n.module.ts": "HgGm"
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
webpackContext.id = "ll9c";

/***/ }),

/***/ "rwOF":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/runtime-i18n/runtime-i18n-example.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-runtime-i18n-example\",\n    templateUrl: \"./runtime-i18n-example.component.html\",\n})\nexport class RuntimeI18NExampleComponent {\n    public firstNamePlaceholder: string = `John`;\n    public lastNamePlaceholder: string = `Doe`;\n    public email: string = `john.doe@whatever.com`;\n\n    private pageReload() {\n        window.location.reload();\n    }\n\n    public setLocale(locale: string) {\n        localStorage.setItem(\"locale\", locale);\n        this.pageReload();\n    }\n\n    public setDefaultLocale() {\n        localStorage.removeItem(\"locale\");\n        this.pageReload();\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-runtime-i18n-runtime-i18n-module-es2015.js.map