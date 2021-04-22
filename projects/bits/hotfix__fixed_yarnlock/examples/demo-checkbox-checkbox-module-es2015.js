(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-checkbox-checkbox-module"],{

/***/ "0a+/":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-basic/checkbox-basic.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-basic-example\",\n    templateUrl: \"./checkbox-basic.example.component.html\",\n})\nexport class CheckboxBasicExampleComponent {}\n");

/***/ }),

/***/ "1xaT":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./checkbox-basic/checkbox-basic.example.component.html": "XYeG",
	"./checkbox-basic/checkbox-basic.example.component.ts": "0a+/",
	"./checkbox-disabled/checkbox-disabled.example.component.html": "qxBh",
	"./checkbox-disabled/checkbox-disabled.example.component.ts": "4Mt7",
	"./checkbox-docs/checkbox-docs.example.component.html": "S3t7",
	"./checkbox-docs/checkbox-docs.example.component.ts": "RNzO",
	"./checkbox-helphint/checkbox-helphint.example.component.html": "b4Y1",
	"./checkbox-helphint/checkbox-helphint.example.component.ts": "2rYV",
	"./checkbox-in-form/checkbox-in-form.example.component.html": "9fSo",
	"./checkbox-in-form/checkbox-in-form.example.component.ts": "g4S5",
	"./checkbox-indeterminate/checkbox-indeterminate.example.component.html": "L7S9",
	"./checkbox-indeterminate/checkbox-indeterminate.example.component.ts": "vuZi",
	"./checkbox-link/checkbox-link.example.component.html": "cwAA",
	"./checkbox-link/checkbox-link.example.component.ts": "9JVo",
	"./checkbox-output/checkbox-output.example.component.html": "dCWU",
	"./checkbox-output/checkbox-output.example.component.ts": "ndXX",
	"./checkbox-test/checkbox-test.component.html": "nCfx",
	"./checkbox-test/checkbox-test.component.ts": "MFAN",
	"./checkbox-visual-test/checkbox-visual-test.component.html": "W2nb",
	"./checkbox-visual-test/checkbox-visual-test.component.ts": "2GzF",
	"./checkbox.module.ts": "5aEI",
	"./index.ts": "oaFm"
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
webpackContext.id = "1xaT";

/***/ }),

/***/ "2GzF":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-visual-test/checkbox-visual-test.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-visual-test\",\n    templateUrl: \"./checkbox-visual-test.component.html\",\n})\nexport class CheckboxVisualTestComponent {\n\n}\n");

/***/ }),

/***/ "2O1m":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-in-form/checkbox-in-form.example.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CheckboxInFormExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxInFormExampleComponent", function() { return CheckboxInFormExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







class CheckboxInFormExampleComponent {
    constructor(formBuilder, toastService) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.myForm = this.formBuilder.group({
            checkbox: this.formBuilder.control(false, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue),
        });
    }
    onSubmit() {
        this.toastService.success({ message: $localize `Your form is valid!` });
    }
}
CheckboxInFormExampleComponent.ɵfac = function CheckboxInFormExampleComponent_Factory(t) { return new (t || CheckboxInFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
CheckboxInFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckboxInFormExampleComponent, selectors: [["nui-checkbox-in-form-example"]], decls: 6, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8080697435640416866$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_IN_FORM_CHECKBOX_IN_FORM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Validation ");
        i18n_0 = MSG_EXTERNAL_8080697435640416866$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_IN_FORM_CHECKBOX_IN_FORM_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟75c5d535c5f684115e130d65ea7d5bbf9cc1fae1␟8080697435640416866: Validation `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_IN_FORM_CHECKBOX_IN_FORM_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Submit");
        i18n_2 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_IN_FORM_CHECKBOX_IN_FORM_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`;
    } return [[3, "formGroup", "submit"], [1, "form-group"], ["name", "nui-checkbox-validation-example", "formControlName", "checkbox", "required", ""], i18n_0, ["nui-button", "", "type", "submit", 3, "disabled"], i18n_2]; }, template: function CheckboxInFormExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CheckboxInFormExampleComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.myForm.controls["checkbox"].invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "2rYV":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-helphint/checkbox-helphint.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-helphint-example\",\n    templateUrl: \"./checkbox-helphint.example.component.html\",\n})\nexport class CheckboxHelpHintExampleComponent {}\n");

/***/ }),

/***/ "4Mt7":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-disabled/checkbox-disabled.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-disabled-example\",\n    templateUrl: \"./checkbox-disabled.example.component.html\",\n})\nexport class CheckboxDisabledExampleComponent {}\n");

/***/ }),

/***/ "5aEI":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDocsModule,\n    NuiMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    CheckboxBasicExampleComponent,\n    CheckboxDisabledExampleComponent,\n    CheckboxExampleComponent,\n    CheckboxHelpHintExampleComponent,\n    CheckboxIndeterminateExampleComponent,\n    CheckboxInFormExampleComponent,\n    CheckboxLinkExampleComponent,\n    CheckboxOutputExampleComponent,\n    CheckboxTestComponent,\n    CheckboxVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: CheckboxExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"checkbox-visual-test\",\n        component: CheckboxVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"checkbox-test\",\n        component: CheckboxTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiCheckboxModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiMessageModule,\n        NuiButtonModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        CheckboxDisabledExampleComponent,\n        CheckboxHelpHintExampleComponent,\n        CheckboxIndeterminateExampleComponent,\n        CheckboxInFormExampleComponent,\n        CheckboxOutputExampleComponent,\n        CheckboxLinkExampleComponent,\n        CheckboxBasicExampleComponent,\n        CheckboxExampleComponent,\n        CheckboxVisualTestComponent,\n        CheckboxTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class CheckboxModule {\n}\n");

/***/ }),

/***/ "74IS":
/*!****************************************************!*\
  !*** ./demo/src/components/demo/checkbox/index.ts ***!
  \****************************************************/
/*! exports provided: CheckboxExampleComponent, CheckboxDisabledExampleComponent, CheckboxHelpHintExampleComponent, CheckboxIndeterminateExampleComponent, CheckboxBasicExampleComponent, CheckboxInFormExampleComponent, CheckboxLinkExampleComponent, CheckboxVisualTestComponent, CheckboxOutputExampleComponent, CheckboxTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_docs_checkbox_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-docs/checkbox-docs.example.component */ "XTDQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxExampleComponent", function() { return _checkbox_docs_checkbox_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["CheckboxExampleComponent"]; });

/* harmony import */ var _checkbox_disabled_checkbox_disabled_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox-disabled/checkbox-disabled.example.component */ "SU5R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxDisabledExampleComponent", function() { return _checkbox_disabled_checkbox_disabled_example_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxDisabledExampleComponent"]; });

/* harmony import */ var _checkbox_helphint_checkbox_helphint_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox-helphint/checkbox-helphint.example.component */ "HY+m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxHelpHintExampleComponent", function() { return _checkbox_helphint_checkbox_helphint_example_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxHelpHintExampleComponent"]; });

/* harmony import */ var _checkbox_indeterminate_checkbox_indeterminate_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox-indeterminate/checkbox-indeterminate.example.component */ "o1W4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxIndeterminateExampleComponent", function() { return _checkbox_indeterminate_checkbox_indeterminate_example_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxIndeterminateExampleComponent"]; });

/* harmony import */ var _checkbox_basic_checkbox_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox-basic/checkbox-basic.example.component */ "skGw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxBasicExampleComponent", function() { return _checkbox_basic_checkbox_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxBasicExampleComponent"]; });

/* harmony import */ var _checkbox_in_form_checkbox_in_form_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox-in-form/checkbox-in-form.example.component */ "2O1m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxInFormExampleComponent", function() { return _checkbox_in_form_checkbox_in_form_example_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxInFormExampleComponent"]; });

/* harmony import */ var _checkbox_link_checkbox_link_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox-link/checkbox-link.example.component */ "BMn4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxLinkExampleComponent", function() { return _checkbox_link_checkbox_link_example_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxLinkExampleComponent"]; });

/* harmony import */ var _checkbox_visual_test_checkbox_visual_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkbox-visual-test/checkbox-visual-test.component */ "83wH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisualTestComponent", function() { return _checkbox_visual_test_checkbox_visual_test_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxVisualTestComponent"]; });

/* harmony import */ var _checkbox_output_checkbox_output_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox-output/checkbox-output.example.component */ "Ude8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxOutputExampleComponent", function() { return _checkbox_output_checkbox_output_example_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxOutputExampleComponent"]; });

/* harmony import */ var _checkbox_test_checkbox_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox-test/checkbox-test.component */ "a/zY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxTestComponent", function() { return _checkbox_test_checkbox_test_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxTestComponent"]; });













/***/ }),

/***/ "83wH":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-visual-test/checkbox-visual-test.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CheckboxVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxVisualTestComponent", function() { return CheckboxVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");


class CheckboxVisualTestComponent {
}
CheckboxVisualTestComponent.ɵfac = function CheckboxVisualTestComponent_Factory(t) { return new (t || CheckboxVisualTestComponent)(); };
CheckboxVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxVisualTestComponent, selectors: [["nui-checkbox-visual-test"]], decls: 47, vars: 16, consts: [[1, "container"], [1, "row"], [1, "col-xl-2"], ["id", "nui-demo-checkbox"], [3, "disabled"], [3, "checked"], [3, "disabled", "checked"], [3, "indeterminate"], [3, "disabled", "indeterminate"], ["id", "nui-demo-checkbox-basic"], ["id", "nui-demo-checkbox-basic-disabled", 3, "disabled"], ["id", "nui-demo-checkbox-checked", 3, "checked"], ["id", "nui-demo-checkbox-checked-disabled", 3, "disabled", "checked"], ["id", "nui-demo-checkbox-indeterminate", 3, "indeterminate"], ["id", "nui-demo-checkbox-indeterminate-disabled", 3, "disabled", "indeterminate"], ["id", "nui-demo-checkbox-with-hint", "hint", "This is some help text", 3, "checked"], ["id", "nui-demo-checkbox-special", "hint", "Toggle state - Perform link action", 3, "checked"], ["href", "../components/CheckboxComponent.html", "target", "_blank", 1, "link-in-checkbox"]], template: function CheckboxVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "States of Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nui-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "States of Checkbox with Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Empty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Empty - Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-checkbox", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Checked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Checked - Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nui-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Indeterminate - Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Checkbox with a Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Checkbox with help text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Special Template of Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nui-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Check-uncheck - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Custom link action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("indeterminate", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("indeterminate", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", false);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "9JVo":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-link/checkbox-link.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-checkbox-link-example\",\n    templateUrl: \"./checkbox-link.example.component.html\",\n})\nexport class CheckboxLinkExampleComponent {\n    public action() {\n        this.toastService.warning({message: $localize `Link clicked!`});\n        return false;\n    }\n    constructor(private toastService: ToastService) {}\n}\n");

/***/ }),

/***/ "9fSo":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-in-form/checkbox-in-form.example.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myForm\"\n      (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <nui-checkbox name=\"nui-checkbox-validation-example\"\n                      formControlName=\"checkbox\"\n                      required\n                      i18n>\n            Validation\n        </nui-checkbox>\n    </div>\n    <button nui-button type=\"submit\" [disabled]=\"myForm.controls['checkbox'].invalid\" i18n>Submit</button>\n</form>\n");

/***/ }),

/***/ "ANa1":
/*!**************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox.module.ts ***!
  \**************************************************************/
/*! exports provided: CheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "74IS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "checkbox-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "checkbox-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class CheckboxModule {
}
CheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CheckboxModule });
CheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("1xaT"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CheckboxModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["CheckboxDisabledExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxHelpHintExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxIndeterminateExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxInFormExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxOutputExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxLinkExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["CheckboxTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "BMn4":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-link/checkbox-link.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CheckboxLinkExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxLinkExampleComponent", function() { return CheckboxLinkExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");




class CheckboxLinkExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    action() {
        this.toastService.warning({ message: $localize `Link clicked!` });
        return false;
    }
}
CheckboxLinkExampleComponent.ɵfac = function CheckboxLinkExampleComponent_Factory(t) { return new (t || CheckboxLinkExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
CheckboxLinkExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxLinkExampleComponent, selectors: [["nui-checkbox-link-example"]], decls: 3, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1300841056109112266$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_LINK_CHECKBOX_LINK_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Custom link (anchor) action ");
        i18n_0 = MSG_EXTERNAL_1300841056109112266$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_LINK_CHECKBOX_LINK_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟d73a66221cee8cb9cc62489dc49cb46a4f48af32␟1300841056109112266: Custom link (anchor) action `;
    } return [[3, "checked"], [3, "click"], i18n_0]; }, template: function CheckboxLinkExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckboxLinkExampleComponent_Template_a_click_1_listener() { return ctx.action(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "HY+m":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-helphint/checkbox-helphint.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CheckboxHelpHintExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxHelpHintExampleComponent", function() { return CheckboxHelpHintExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");


class CheckboxHelpHintExampleComponent {
}
CheckboxHelpHintExampleComponent.ɵfac = function CheckboxHelpHintExampleComponent_Factory(t) { return new (t || CheckboxHelpHintExampleComponent)(); };
CheckboxHelpHintExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxHelpHintExampleComponent, selectors: [["nui-checkbox-helphint-example"]], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_HELPHINT_CHECKBOX_HELPHINT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("This is some help text");
        i18n_0 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_HELPHINT_CHECKBOX_HELPHINT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟ba785d6cbb33a003a3ce1d20077ba67264374284␟829155627086234075:This is some help text`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8577149350169318724$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_HELPHINT_CHECKBOX_HELPHINT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Check box with help text\n");
        i18n_2 = MSG_EXTERNAL_8577149350169318724$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_HELPHINT_CHECKBOX_HELPHINT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟1fbd1da53ed9566b63c2ebb207165d8bd8444ac2␟8577149350169318724: Check box with help text
`;
    } return [["id", "nui-demo-checkbox", "hint", i18n_0, 3, "required", "checked"], i18n_2]; }, template: function CheckboxHelpHintExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true)("checked", false);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "L7S9":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-indeterminate/checkbox-indeterminate.example.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-checkbox id=\"nui-demo-checkbox-indeterminate\"\n              [indeterminate]=\"isIndeterminate\"\n              [value]=\"isIndeterminate\"\n              i18n>\n    I'm not so sure...\n</nui-checkbox>\n");

/***/ }),

/***/ "MFAN":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-test/checkbox-test.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-demo-checkbox-test\",\n    templateUrl: \"checkbox-test.component.html\",\n})\n\nexport class CheckboxTestComponent {}\n");

/***/ }),

/***/ "RNzO":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-docs/checkbox-docs.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-docs-example\",\n    templateUrl: \"./checkbox-docs.example.component.html\",\n})\nexport class CheckboxExampleComponent {}\n");

/***/ }),

/***/ "S3t7":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-docs/checkbox-docs.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiCheckboxModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    <code>&lt;nui-checkbox&gt;</code> is a basic multi-select input component. Use the <code>checked</code> input to control the checkbox state. Use the\n    <code>value</code> input to associate a value with the checkbox as part of form.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-basic\" exampleTitle=\"Basic Usage\">\n    <nui-checkbox-basic-example></nui-checkbox-basic-example>\n</nui-example-wrapper>\n\n<h2>Help Hint</h2>\n<p>\n    Use the <code>hint</code> input to display a help hint beneath the checkbox label.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-helphint\" exampleTitle=\"Help Hint\">\n    <nui-checkbox-helphint-example></nui-checkbox-helphint-example>\n</nui-example-wrapper>\n\n<h2>Disabled</h2>\n<p>\n    Use the <code>disabled</code> input to control the checkbox disabled state.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-disabled\" exampleTitle=\"Disabled\">\n    <nui-checkbox-disabled-example></nui-checkbox-disabled-example>\n</nui-example-wrapper>\n\n<h2>Indeterminate</h2>\n<p>\n    Use the <code>indeterminate</code> input to set the checkbox state to indeterminate.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-indeterminate\" exampleTitle=\"Indeterminate\">\n    <nui-checkbox-indeterminate-example></nui-checkbox-indeterminate-example>\n</nui-example-wrapper>\n<h2>Value Change Output</h2>\n<p>\n    Use the <code>valueChange</code> output to track changes in value of checkbox.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-output\" exampleTitle=\"Output\">\n    <nui-checkbox-output-example></nui-checkbox-output-example>\n</nui-example-wrapper>\n\n<h2>Part of Form</h2>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Make sure</strong> you're using the <code>Validators.requiredTrue</code> validation for single checkbox in forms (not checkbox group). \n    The <code>Validators.required</code> won't work for them.\n</nui-message>\n<p>\n    <code>&lt;nui-checkbox&gt;</code> can be used in reactive forms.\n</p>\n<nui-example-wrapper filenamePrefix=\"checkbox-in-form\" exampleTitle=\"In a Form\">\n    <nui-checkbox-in-form-example></nui-checkbox-in-form-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "SU5R":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-disabled/checkbox-disabled.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CheckboxDisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDisabledExampleComponent", function() { return CheckboxDisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");


class CheckboxDisabledExampleComponent {
}
CheckboxDisabledExampleComponent.ɵfac = function CheckboxDisabledExampleComponent_Factory(t) { return new (t || CheckboxDisabledExampleComponent)(); };
CheckboxDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxDisabledExampleComponent, selectors: [["nui-checkbox-disabled-example"]], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4351913332106990374$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_DISABLED_CHECKBOX_DISABLED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Disabled\n");
        i18n_0 = MSG_EXTERNAL_4351913332106990374$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_DISABLED_CHECKBOX_DISABLED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟aadc7b008e89071cdcd5a21dabfe5d3bf1062e87␟4351913332106990374: Disabled
`;
    } return [["id", "nui-demo-checkbox-disabled", 3, "checked", "disabled"], i18n_0]; }, template: function CheckboxDisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("disabled", true);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Ude8":
/*!************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-output/checkbox-output.example.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CheckboxOutputExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxOutputExampleComponent", function() { return CheckboxOutputExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");




class CheckboxOutputExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    onValueChanged($event) {
        this.toastService.success({ message: $localize `Checkbox is checked: ${$event.target.checked}` });
    }
}
CheckboxOutputExampleComponent.ɵfac = function CheckboxOutputExampleComponent_Factory(t) { return new (t || CheckboxOutputExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
CheckboxOutputExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxOutputExampleComponent, selectors: [["nui-checkbox-output-example"]], decls: 2, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8897307100504889238$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_OUTPUT_CHECKBOX_OUTPUT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Output\n");
        i18n_0 = MSG_EXTERNAL_8897307100504889238$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_OUTPUT_CHECKBOX_OUTPUT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟ff27aa90013320a014691a87b9dcdf9b59e02e25␟8897307100504889238: Output
`;
    } return [["id", "nui-demo-checkbox-output", "name", "nui-checkbox-output-example", 3, "valueChange"], i18n_0]; }, template: function CheckboxOutputExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function CheckboxOutputExampleComponent_Template_nui_checkbox_valueChange_0_listener($event) { return ctx.onValueChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "W2nb":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-visual-test/checkbox-visual-test.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h3>States of Checkbox</h3>\n    <div class=\"row\">\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox\"></nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox [disabled]=\"true\"></nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox [checked]=\"true\"></nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox [disabled]=\"true\" [checked]=\"true\"></nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox [indeterminate]=\"true\"></nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox [disabled]=\"true\" [indeterminate]=\"true\"></nui-checkbox>\n        </div>\n    </div>\n\n    <h3>States of Checkbox with Label</h3>\n    <div class=\"row\">\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox-basic\">\n                Empty\n            </nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox-basic-disabled\" [disabled]=\"true\">\n                Empty - Disabled\n            </nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox-checked\" [checked]=\"true\">\n                Checked\n            </nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox-checked-disabled\" [disabled]=\"true\" [checked]=\"true\">\n                Checked - Disabled\n            </nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox-indeterminate\" [indeterminate]=\"true\">\n                Indeterminate</nui-checkbox>\n        </div>\n        <div class=\"col-xl-2\">\n            <nui-checkbox id=\"nui-demo-checkbox-indeterminate-disabled\" [disabled]=\"true\" [indeterminate]=\"true\">\n                Indeterminate - Disabled\n            </nui-checkbox>\n        </div>\n    </div>\n\n    <h3>Checkbox with a Hint</h3>\n    <nui-checkbox id=\"nui-demo-checkbox-with-hint\" hint=\"This is some help text\" [checked]=\"true\">\n        Checkbox with help text\n    </nui-checkbox>\n\n    <h3>Special Template of Checkbox</h3>\n    <nui-checkbox id=\"nui-demo-checkbox-special\" hint=\"Toggle state - Perform link action\" [checked]=\"false\">\n        Check-uncheck - <a href=\"../components/CheckboxComponent.html\" target=\"_blank\" class=\"link-in-checkbox\">\n            Custom link action\n        </a>\n    </nui-checkbox>\n</div>");

/***/ }),

/***/ "XTDQ":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-docs/checkbox-docs.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CheckboxExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxExampleComponent", function() { return CheckboxExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _checkbox_basic_checkbox_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkbox-basic/checkbox-basic.example.component */ "skGw");
/* harmony import */ var _checkbox_helphint_checkbox_helphint_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox-helphint/checkbox-helphint.example.component */ "HY+m");
/* harmony import */ var _checkbox_disabled_checkbox_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../checkbox-disabled/checkbox-disabled.example.component */ "SU5R");
/* harmony import */ var _checkbox_indeterminate_checkbox_indeterminate_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkbox-indeterminate/checkbox-indeterminate.example.component */ "o1W4");
/* harmony import */ var _checkbox_output_checkbox_output_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkbox-output/checkbox-output.example.component */ "Ude8");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _checkbox_in_form_checkbox_in_form_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkbox-in-form/checkbox-in-form.example.component */ "2O1m");









class CheckboxExampleComponent {
}
CheckboxExampleComponent.ɵfac = function CheckboxExampleComponent_Factory(t) { return new (t || CheckboxExampleComponent)(); };
CheckboxExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxExampleComponent, selectors: [["nui-checkbox-docs-example"]], decls: 74, vars: 1, consts: [["filenamePrefix", "checkbox-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "checkbox-helphint", "exampleTitle", "Help Hint"], ["filenamePrefix", "checkbox-disabled", "exampleTitle", "Disabled"], ["filenamePrefix", "checkbox-indeterminate", "exampleTitle", "Indeterminate"], ["filenamePrefix", "checkbox-output", "exampleTitle", "Output"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "checkbox-in-form", "exampleTitle", "In a Form"]], template: function CheckboxExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiCheckboxModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "<nui-checkbox>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " is a basic multi-select input component. Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " input to control the checkbox state. Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " input to associate a value with the checkbox as part of form.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nui-checkbox-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Help Hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " input to display a help hint beneath the checkbox label.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nui-checkbox-helphint-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " input to control the checkbox disabled state.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-checkbox-disabled-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " input to set the checkbox state to indeterminate.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nui-checkbox-indeterminate-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Value Change Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "valueChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " output to track changes in value of checkbox.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "nui-checkbox-output-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Part of Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Make sure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " you're using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Validators.requiredTrue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " validation for single checkbox in forms (not checkbox group). The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Validators.required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " won't work for them.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "<nui-checkbox>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " can be used in reactive forms.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-checkbox-in-form-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _checkbox_basic_checkbox_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxBasicExampleComponent"], _checkbox_helphint_checkbox_helphint_example_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxHelpHintExampleComponent"], _checkbox_disabled_checkbox_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxDisabledExampleComponent"], _checkbox_indeterminate_checkbox_indeterminate_example_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxIndeterminateExampleComponent"], _checkbox_output_checkbox_output_example_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxOutputExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], _checkbox_in_form_checkbox_in_form_example_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxInFormExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "XYeG":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-basic/checkbox-basic.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-checkbox id=\"nui-demo-checkbox-basic\" [checked]=\"true\" [required]=\"true\"></nui-checkbox>\n");

/***/ }),

/***/ "a/zY":
/*!************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-test/checkbox-test.component.ts ***!
  \************************************************************************************/
/*! exports provided: CheckboxTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxTestComponent", function() { return CheckboxTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");


class CheckboxTestComponent {
}
CheckboxTestComponent.ɵfac = function CheckboxTestComponent_Factory(t) { return new (t || CheckboxTestComponent)(); };
CheckboxTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxTestComponent, selectors: [["nui-demo-checkbox-test"]], decls: 20, vars: 8, consts: [[1, "container", "d-flex"], [1, "d-flex", "flex-column", "mr-5"], ["id", "nui-demo-checkbox-basic", "name", "HELLO", "title", "vfdsvf", 3, "checked", "required"], ["id", "nui-demo-checkbox-disabled", 3, "checked", "disabled"], ["id", "nui-demo-checkbox-indeterminate", 3, "indeterminate", "value"], ["id", "nui-demo-checkbox", "hint", "This is some help text", 3, "required", "checked"]], template: function CheckboxTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Disabled Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Intermediate Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I'm not so sure...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Help Hint Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Checkbox with help text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("required", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", true)("value", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("required", true)("checked", false);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "b4Y1":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-helphint/checkbox-helphint.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-checkbox id=\"nui-demo-checkbox\"\n              i18n-hint\n              hint=\"This is some help text\"\n              [required]=\"true\"\n              [checked]=\"false\"\n              i18n>\n    Check box with help text\n</nui-checkbox>\n");

/***/ }),

/***/ "cwAA":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-link/checkbox-link.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-checkbox [checked]=\"false\">\n    <a (click)=\"action()\" i18n>\n        Custom link (anchor) action\n    </a>\n</nui-checkbox>\n");

/***/ }),

/***/ "dCWU":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-output/checkbox-output.example.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-checkbox id=\"nui-demo-checkbox-output\" (valueChange)=\"onValueChanged($event)\" name=\"nui-checkbox-output-example\" i18n>\n    Output\n</nui-checkbox>\n");

/***/ }),

/***/ "g4S5":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-in-form/checkbox-in-form.example.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-checkbox-in-form-example\",\n    templateUrl: \"./checkbox-in-form.example.component.html\",\n})\nexport class CheckboxInFormExampleComponent implements OnInit {\n    public myForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder,\n                private toastService: ToastService) {}\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            checkbox: this.formBuilder.control(false,\n                Validators.requiredTrue),\n        });\n    }\n\n    public onSubmit() {\n        this.toastService.success({message: $localize `Your form is valid!`});\n    }\n}\n");

/***/ }),

/***/ "nCfx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-test/checkbox-test.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container d-flex\">\n    <div class=\"d-flex flex-column mr-5\">\n        <h4>Basic Checkbox</h4>\n        <nui-checkbox id=\"nui-demo-checkbox-basic\" [checked]=\"true\" [required]=\"true\" name=\"HELLO\" title=\"vfdsvf\"></nui-checkbox>\n    </div>\n    <div class=\"d-flex flex-column mr-5\">\n        <h4>Disabled Checkbox</h4>\n        <nui-checkbox id=\"nui-demo-checkbox-disabled\" [checked]=\"true\" [disabled]=\"true\">Disabled</nui-checkbox>\n    </div>\n    <div class=\"d-flex flex-column mr-5\">\n        <h4>Intermediate Checkbox</h4>\n        <nui-checkbox id=\"nui-demo-checkbox-indeterminate\" [indeterminate]=\"true\" [value]=\"true\">I'm not so sure...</nui-checkbox>\n    </div>\n    <div class=\"d-flex flex-column mr-5\">\n        <h4>Help Hint Checkbox</h4>\n        <nui-checkbox id=\"nui-demo-checkbox\" hint=\"This is some help text\" [required]=\"true\" [checked]=\"false\">Checkbox with help text</nui-checkbox>\n    </div>\n</div>");

/***/ }),

/***/ "ndXX":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-output/checkbox-output.example.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CheckboxChangeEvent, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-checkbox-output-example\",\n    templateUrl: \"./checkbox-output.example.component.html\",\n})\nexport class CheckboxOutputExampleComponent {\n\n    constructor(private toastService: ToastService) {}\n\n    public onValueChanged($event: CheckboxChangeEvent) {\n        this.toastService.success({ message: $localize `Checkbox is checked: ${$event.target.checked}`});\n    }\n}\n");

/***/ }),

/***/ "o1W4":
/*!**************************************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-indeterminate/checkbox-indeterminate.example.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CheckboxIndeterminateExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxIndeterminateExampleComponent", function() { return CheckboxIndeterminateExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");


class CheckboxIndeterminateExampleComponent {
    constructor() {
        this.isIndeterminate = true;
    }
}
CheckboxIndeterminateExampleComponent.ɵfac = function CheckboxIndeterminateExampleComponent_Factory(t) { return new (t || CheckboxIndeterminateExampleComponent)(); };
CheckboxIndeterminateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxIndeterminateExampleComponent, selectors: [["nui-checkbox-indeterminate-example"]], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1960607583436383383$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_INDETERMINATE_CHECKBOX_INDETERMINATE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" I'm not so sure...\n");
        i18n_0 = MSG_EXTERNAL_1960607583436383383$$DEMO_SRC_COMPONENTS_DEMO_CHECKBOX_CHECKBOX_INDETERMINATE_CHECKBOX_INDETERMINATE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟21bbc817566562b8f851c09d432caf8687642dab␟1960607583436383383: I'm not so sure...
`;
    } return [["id", "nui-demo-checkbox-indeterminate", 3, "indeterminate", "value"], i18n_0]; }, template: function CheckboxIndeterminateExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", ctx.isIndeterminate)("value", ctx.isIndeterminate);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "oaFm":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/index.ts ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./checkbox-docs/checkbox-docs.example.component\";\nexport * from \"./checkbox-disabled/checkbox-disabled.example.component\";\nexport * from \"./checkbox-helphint/checkbox-helphint.example.component\";\nexport * from \"./checkbox-indeterminate/checkbox-indeterminate.example.component\";\nexport * from \"./checkbox-basic/checkbox-basic.example.component\";\nexport * from \"./checkbox-in-form/checkbox-in-form.example.component\";\nexport * from \"./checkbox-link/checkbox-link.example.component\";\nexport * from \"./checkbox-visual-test/checkbox-visual-test.component\";\nexport * from \"./checkbox-output/checkbox-output.example.component\";\nexport * from \"./checkbox-test/checkbox-test.component\";\n");

/***/ }),

/***/ "qxBh":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-disabled/checkbox-disabled.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-checkbox id=\"nui-demo-checkbox-disabled\"\n              [checked]=\"true\"\n              [disabled]=\"true\"\n              i18n>\n    Disabled\n</nui-checkbox>\n");

/***/ }),

/***/ "skGw":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/checkbox/checkbox-basic/checkbox-basic.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CheckboxBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBasicExampleComponent", function() { return CheckboxBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");


class CheckboxBasicExampleComponent {
}
CheckboxBasicExampleComponent.ɵfac = function CheckboxBasicExampleComponent_Factory(t) { return new (t || CheckboxBasicExampleComponent)(); };
CheckboxBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxBasicExampleComponent, selectors: [["nui-checkbox-basic-example"]], decls: 1, vars: 2, consts: [["id", "nui-demo-checkbox-basic", 3, "checked", "required"]], template: function CheckboxBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-checkbox", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("required", true);
    } }, directives: [_src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "vuZi":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/checkbox/checkbox-indeterminate/checkbox-indeterminate.example.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-checkbox-indeterminate-example\",\n    templateUrl: \"./checkbox-indeterminate.example.component.html\",\n})\nexport class CheckboxIndeterminateExampleComponent {\n    public isIndeterminate = true;\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-checkbox-checkbox-module-es2015.js.map