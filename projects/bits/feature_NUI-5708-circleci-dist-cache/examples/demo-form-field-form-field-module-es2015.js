(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-form-field-form-field-module"],{

/***/ "+YJB":
/*!*************************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./basic-hint/form-field-hint.example.component.html": "kbAz",
	"./basic-hint/form-field-hint.example.component.ts": "o/AE",
	"./basic-reactive/basic-reactive-form-field-custom-validation.example.component.html": "rvYP",
	"./basic-reactive/basic-reactive-form-field-custom-validation.example.component.ts": "7PlJ",
	"./basic-reactive/basic-reactive-form-field.example.component.html": "1CBV",
	"./basic-reactive/basic-reactive-form-field.example.component.ts": "fWie",
	"./basic/basic-form-field.example.component.html": "6Z8p",
	"./basic/basic-form-field.example.component.ts": "0IcM",
	"./complex/form-field-complex.example.component.html": "qA8t",
	"./complex/form-field-complex.example.component.ts": "P5BU",
	"./dynamic-disabling/form-field-dynamic-disabling.example.component.html": "xUJR",
	"./dynamic-disabling/form-field-dynamic-disabling.example.component.ts": "e4Ap",
	"./form-field-docs/form-field-docs.example.component.html": "07mq",
	"./form-field-docs/form-field-docs.example.component.ts": "5/Y5",
	"./form-field-test/form-field-test.component.html": "F9s2",
	"./form-field-test/form-field-test.component.ts": "CL+U",
	"./form-field-validation-triggering/form-field-validation-triggering.example.component.html": "Au9I",
	"./form-field-validation-triggering/form-field-validation-triggering.example.component.ts": "GYdM",
	"./form-field-visual-test/form-field-visual-test.component.html": "VHCc",
	"./form-field-visual-test/form-field-visual-test.component.ts": "GMhJ",
	"./form-field.module.ts": "8et7",
	"./html-as-info/html-as-info-in-form-field.example.component.html": "QwNZ",
	"./html-as-info/html-as-info-in-form-field.example.component.ts": "M8su",
	"./in-form/in-form-form-field.example.component.html": "Zso1",
	"./in-form/in-form-form-field.example.component.ts": "CRXI",
	"./index.ts": "diQS",
	"./nested-forms-as-component/nested-forms-as-component.example.component.html": "XKa7",
	"./nested-forms-as-component/nested-forms-as-component.example.component.ts": "L+Iw"
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
webpackContext.id = "+YJB";

/***/ }),

/***/ "07mq":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-docs/form-field-docs.example.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiFormFieldModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<p>\n    Form Field is a convenient wrapper that helps to combine your inputs in a form. Currently we support these types of form items (but please note that not all of these components are in alpha stage):\n</p>\n<ul>\n    <li>textbox</li>\n    <li>textarea</li>\n    <li>textNumber</li>\n    <li>checkbox</li>\n    <li>checkboxGroup</li>\n    <li>combobox</li>\n    <li>radioGroup</li>\n    <li>switch</li>\n    <li>select</li>\n    <li>datePicker</li>\n    <li>timePicker</li>\n    <!--<li>dateTimePicker</li>-->\n    <!--<li>timeFramePicker</li>-->\n</ul>\n\n<p>\n    <code>nui-form-field</code> is a building block for any form. It gives an ability to add label for any input,\n    complementary help text under it and info icon with a popover to display some additional text.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"basic-form-field\" exampleTitle=\"Basic Form Field\">\n    <nui-form-field-basic-example></nui-form-field-basic-example>\n</nui-example-wrapper>\n\n<h2>Validation Messages Inside Reactive Form</h2>\n<p>\n    In order to use <code>nui-form-field</code> within reactive form you need to pass it access to a control <code>[control]=\"reactiveForm.controls['email']\"</code>.\n    Also <code>formControlName</code> needs to be set directly on the input element you're using with the name of a form control.\n</p>\n<p>\n    <code>nui-validation-message</code> component can be added inside <code>nui-form-field</code>. It has 2 inputs: <code>show</code> and <code>for</code>.\n    Form Field Component will change <code>show</code> by itself to control visibility of the error message (this input is useful for consumers only outside <code>nui-form-field</code>),\n    <code>for</code> input accepts validator name.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"basic-reactive-form-field\" exampleTitle=\"Validation Messages Inside Reactive Form\">\n    <nui-form-field-basic-reactive-example></nui-form-field-basic-reactive-example>\n</nui-example-wrapper>\n\n<p>\n    For customization purposes, we provide the <code>nui-custom-validation-message</code>\n    component that does not contain internal styling and html elements.\n    <b>Input properties are similar to <code>nui-validation-message</code></b>\n</p>\n<nui-example-wrapper filenamePrefix=\"basic-reactive-form-field-custom-validation\" exampleTitle=\"Custom Styled Validation Messages Inside Reactive Form\">\n    <nui-form-field-basic-reactive-custom-validation-example></nui-form-field-basic-reactive-custom-validation-example>\n</nui-example-wrapper>\n\n<h2>Compound Validation</h2>\n\n<p>\n    In the example below an example of a compound validation can be seen.\n    To validate group of fields you need to find the first common parent FormGroup and add validator there\n    (click \"Source\" above and open the TS tab to see the <code>matchPassword</code> validator).\n</p>\n<p>\n    The current validation state of the form is displayed at the bottom of the example.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"form-field-complex\" exampleTitle=\"Form Field with custom validation\">\n    <nui-form-field-complex-example></nui-form-field-complex-example>\n</nui-example-wrapper>\n\n<h2>HTML as info</h2>\n\n<p>\n    There is a possibility to have additional information to each field. It can be done using either <code>info</code>\n    input, that is just a text, passed as a string, or <code>infoTemplate</code> input, that uses html inside the <code>ng-template</code>.\n    Note: the template is provided completely by the user and we do not do any sanitizing.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"html-as-info-in-form-field\" exampleTitle=\"HTML inside popover\">\n    <nui-form-field-with-html-example></nui-form-field-with-html-example>\n</nui-example-wrapper>\n\n<h2>Hint Text</h2>\n\n<p>\n    Hint text can give the user additional information about a form field and will appear below the field's user input area.\n    The text for a hint can be specified in one of two ways: either by setting the <code>{{getItemConfigKey('hint')}}</code> input with a string value\n    or by providing a templateRef through the <code>{{getItemConfigKey('hintTemplate')}}</code> input.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"form-field-hint\" exampleTitle=\"Form Field Hints\">\n    <nui-form-field-hint-basic-example></nui-form-field-hint-basic-example>\n</nui-example-wrapper>\n\n<h2>Dynamic Disabling</h2>\n\n<p>\n\tExample to show possibility of controlling disabled state (setting initial, dynamic change of state).\n</p>\n\n<nui-example-wrapper filenamePrefix=\"form-field-dynamic-disabling\" exampleTitle=\"Form Field with dynamic disabling\">\n    <nui-form-field-dynamic-disabling-example></nui-form-field-dynamic-disabling-example>\n</nui-example-wrapper>\n\n\n<h2>Nested Form Components</h2>\n\n<p>\n    In order to avoid code duplication, it may be useful to combine a form from several components.\n    In this example there is a Form Group that consists of Nickname control an 2 child Form Groups represented by separate components:\n    one is for personal data (name, surname) called <code>nui-first-custom-form-example</code>\n    and another is for address (city, address) called <code>nui-second-custom-form-example</code>.\n    In order to achieve that we need to let the parent form know that there are some child groups that should be appended.\n    This is done by calling <code>formInitialized</code> method from the parent form group on the event <code>formReady</code> of the child.\n    Also there is a <code>CustomFormFieldExampleComponent</code> from previous example reused in child components to illustrate\n    even more flexibility of this approach.\n</p>\n<p>\n    The current validation state of the form is displayed at the bottom of the example.\n</p>\n<p>\n    Note that there are several ways to use components as a form group, but this is currently the most convenient way.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"nested-forms-as-component\" exampleTitle=\"Nested form components\">\n    <nui-nested-forms-as-component-example></nui-nested-forms-as-component-example>\n</nui-example-wrapper>\n\n<h2>Various Components in a Form</h2>\n\n<p>\n    This example shows all possible inputs combined in one form\n</p>\n\n<nui-example-wrapper filenamePrefix=\"in-form-form-field\" exampleTitle=\"Form Field inside the Form\">\n    <nui-form-field-in-form-example></nui-form-field-in-form-example>\n</nui-example-wrapper>\n\n<h2>Validation Triggering</h2>\n\n<p>\n    This example shows all possible ways for validation message triggering by touch, value changes or status changes event.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"form-field-validation-triggering\" exampleTitle=\"Form Field Validation Triggering\">\n    <nui-form-field-validation-triggering-example></nui-form-field-validation-triggering-example>\n</nui-example-wrapper>\n\n");

/***/ }),

/***/ "0IcM":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic/basic-form-field.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-form-field-basic-example\",\n    templateUrl: \"./basic-form-field.example.component.html\",\n})\nexport class FormFieldBasicExampleComponent {\n\n}\n");

/***/ }),

/***/ "1CBV":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic-reactive/basic-reactive-form-field.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"reactiveForm\">\n    <nui-form-field caption=\"Email address\" i18n-caption\n                    hint=\"Try to change value or remove everything\"\n                    i18n-hint\n                    [control]=\"reactiveForm.controls['email']\">\n        <nui-textbox formControlName=\"email\" type=\"email\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n        <nui-validation-message for=\"email\" i18n>\n            This should be a valid email\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n");

/***/ }),

/***/ "37Ks":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/html-as-info/html-as-info-in-form-field.example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FormFieldWithHTMLExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldWithHTMLExampleComponent", function() { return FormFieldWithHTMLExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");



function FormFieldWithHTMLExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " New custom info text. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus ut odio tempus, ut venenatis diam egestas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Italic text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Strong text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FormFieldWithHTMLExampleComponent {
}
FormFieldWithHTMLExampleComponent.ɵfac = function FormFieldWithHTMLExampleComponent_Factory(t) { return new (t || FormFieldWithHTMLExampleComponent)(); };
FormFieldWithHTMLExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldWithHTMLExampleComponent, selectors: [["nui-form-field-with-html-example"]], decls: 4, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_HTML_AS_INFO_HTML_AS_INFO_IN_FORM_FIELD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("This caption is generic for all form fields");
        i18n_0 = MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_HTML_AS_INFO_HTML_AS_INFO_IN_FORM_FIELD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟8cc9ef837083fdca9e3d36307bf3d6a709c3a4c5␟142576418225531130:This caption is generic for all form fields`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_HTML_AS_INFO_HTML_AS_INFO_IN_FORM_FIELD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hint may be useful");
        i18n_2 = MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_HTML_AS_INFO_HTML_AS_INFO_IN_FORM_FIELD_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b510f6f6db7d097c9ef1f462c80dace7dcaf7eed␟2443417359056666139:Hint may be useful`;
    } return [["caption", i18n_0, "hint", i18n_2, 3, "infoTemplate"], ["template", ""], ["href", "http://apollo-docs.swdev.local/", "target", "_blank"]]; }, template: function FormFieldWithHTMLExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormFieldWithHTMLExampleComponent_ng_template_2_Template, 13, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infoTemplate", _r0);
    } }, directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "5/Y5":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-docs/form-field-docs.example.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport {FormFieldComponent} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-form-field-docs-example\",\n    templateUrl: \"./form-field-docs.example.component.html\",\n})\nexport class FormFieldExampleComponent {\n    getItemConfigKey(key: keyof FormFieldComponent): string {\n        return key;\n    }\n}\n");

/***/ }),

/***/ "5Ynj":
/*!**********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/nested-forms-as-component/nested-forms-as-component.example.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: NestedFormsAsComponentExampleComponent, FirstCustomFormExampleComponent, SecondCustomFormExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedFormsAsComponentExampleComponent", function() { return NestedFormsAsComponentExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCustomFormExampleComponent", function() { return FirstCustomFormExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondCustomFormExampleComponent", function() { return SecondCustomFormExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");









class NestedFormsAsComponentExampleComponent {
    constructor(fb, toastService) {
        this.fb = fb;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.fancyForm = this.fb.group({
            nickname: this.fb.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(3)]),
        });
    }
    formInitialized(name, form) {
        this.fancyForm.setControl(name, form);
    }
    onSubmit(value) {
        this.toastService.success({
            message: `Form is valid: ${value.valid}`,
            title: "Submit",
        });
    }
}
NestedFormsAsComponentExampleComponent.ɵfac = function NestedFormsAsComponentExampleComponent_Factory(t) { return new (t || NestedFormsAsComponentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ToastService"])); };
NestedFormsAsComponentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NestedFormsAsComponentExampleComponent, selectors: [["nui-nested-forms-as-component-example"]], decls: 9, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5506569422969383542$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Nickname");
        i18n_0 = MSG_EXTERNAL_5506569422969383542$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟ad40282684357d3d79d14d036fcf26d3cef8278d␟5506569422969383542:Nickname`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some pretty long text with hint");
        i18n_2 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" This is required ");
        i18n_4 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } return [[1, "nui-edge-definer", 3, "formGroup", "submit"], ["caption", i18n_0, "hint", i18n_2, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["formControlName", "nickname"], ["for", "required"], i18n_4, [3, "formReady"]]; }, template: function NestedFormsAsComponentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NestedFormsAsComponentExampleComponent_Template_form_submit_0_listener() { return ctx.onSubmit(ctx.fancyForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-first-custom-form-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formReady", function NestedFormsAsComponentExampleComponent_Template_nui_first_custom_form_example_formReady_5_listener($event) { return ctx.formInitialized("firstForm", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-second-custom-form-example", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formReady", function NestedFormsAsComponentExampleComponent_Template_nui_second_custom_form_example_formReady_6_listener($event) { return ctx.formInitialized("secondForm", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["nickname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("fancyForm.valid = ", ctx.fancyForm.valid, "");
    } }, directives: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], FirstCustomFormExampleComponent, SecondCustomFormExampleComponent]; }, encapsulation: 2 });
/**
 * Component representing form group for name and surname
 */
class FirstCustomFormExampleComponent {
    constructor(fb) {
        this.fb = fb;
        this.formReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.firstForm = this.fb.group({
            firstName: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: this.fb.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.formReady.emit(this.firstForm);
    }
}
FirstCustomFormExampleComponent.ɵfac = function FirstCustomFormExampleComponent_Factory(t) { return new (t || FirstCustomFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FirstCustomFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstCustomFormExampleComponent, selectors: [["nui-first-custom-form-example"]], outputs: { formReady: "formReady" }, decls: 9, vars: 3, consts: function () { let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6028371114637047813$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("First Name");
        i18n_6 = MSG_EXTERNAL_6028371114637047813$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟c83b838d845690bcb897f775f53b5316535306dc␟6028371114637047813:First Name`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7204677749583159156$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_9 = goog.getMsg(" This is required ");
        i18n_8 = MSG_EXTERNAL_7204677749583159156$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟d688cdc7010041216f9c4645a39365bbe70fcaa5␟7204677749583159156: This is required `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4407559560004943843$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Last Name");
        i18n_10 = MSG_EXTERNAL_4407559560004943843$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟166b2cc65003221ff5f3ec05d5baca41e6821396␟4407559560004943843:Last Name`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7204677749583159156$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_13 = goog.getMsg(" This is required ");
        i18n_12 = MSG_EXTERNAL_7204677749583159156$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟d688cdc7010041216f9c4645a39365bbe70fcaa5␟7204677749583159156: This is required `;
    } return [[3, "formGroup"], ["caption", i18n_6, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "firstName"], ["for", "required"], i18n_8, ["caption", i18n_10, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "lastName"], i18n_12]; }, template: function FirstCustomFormExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.firstForm.controls["firstName"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.firstForm.controls["lastName"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"]], encapsulation: 2 });
/**
 * Component representing address form group
 */
class SecondCustomFormExampleComponent {
    constructor(fb) {
        this.fb = fb;
        this.formReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.secondForm = this.fb.group({
            city: null,
            address: null,
        });
        this.formReady.emit(this.secondForm);
    }
}
SecondCustomFormExampleComponent.ɵfac = function SecondCustomFormExampleComponent_Factory(t) { return new (t || SecondCustomFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SecondCustomFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondCustomFormExampleComponent, selectors: [["nui-second-custom-form-example"]], outputs: { formReady: "formReady" }, decls: 9, vars: 3, consts: function () { let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2314075913167237221$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("City");
        i18n_14 = MSG_EXTERNAL_2314075913167237221$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟5c7012b5a926b32d9e45fefdcc8a1a3cb6f023d0␟2314075913167237221:City`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_17 = goog.getMsg(" This is required ");
        i18n_16 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_17;
    }
    else {
        i18n_16 = $localize `:␟42b47c9df37297506ee0ddf14763cb0ddfa58ea6␟5777549257495630003: This is required `;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6304432362546770951$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_19 = goog.getMsg("Address");
        i18n_18 = MSG_EXTERNAL_6304432362546770951$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_19;
    }
    else {
        i18n_18 = $localize `:␟729754dd19eb9ce0670b0aeb5a6ae60574c2c563␟6304432362546770951:Address`;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_21 = goog.getMsg(" This is required ");
        i18n_20 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_NESTED_FORMS_AS_COMPONENT_NESTED_FORMS_AS_COMPONENT_EXAMPLE_COMPONENT_TS_21;
    }
    else {
        i18n_20 = $localize `:␟42b47c9df37297506ee0ddf14763cb0ddfa58ea6␟5777549257495630003: This is required `;
    } return [[3, "formGroup"], ["caption", i18n_14, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "city"], ["for", "required"], i18n_16, ["caption", i18n_18, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "address"], i18n_20]; }, template: function SecondCustomFormExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.secondForm.controls["city"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.secondForm.controls["address"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"]], encapsulation: 2 });


/***/ }),

/***/ "6Z8p":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic/basic-form-field.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-form-field caption=\"This caption is generic for all form fields\" i18n-caption\n                info=\"Some info to show\" i18n-info\n                hint=\"Hint may be useful\" i18n-hint>\n    <nui-textbox></nui-textbox>\n</nui-form-field>\n");

/***/ }),

/***/ "7PlJ":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic-reactive/basic-reactive-form-field-custom-validation.example.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-form-field-basic-reactive-custom-validation-example\",\n    templateUrl: \"./basic-reactive-form-field-custom-validation.example.component.html\",\n})\nexport class FormFieldBasicReactiveCustomValidationExampleComponent implements OnInit {\n    public reactiveForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {\n    }\n\n    public ngOnInit() {\n        this.reactiveForm = this.formBuilder.group({\n            email: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.email,\n            ]),\n        });\n    }\n}\n");

/***/ }),

/***/ "7rV9":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/in-form/in-form-form-field.example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormFieldInFormExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldInFormExampleComponent", function() { return FormFieldInFormExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */ "ShSb");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox-group.component */ "s1l0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/radio/radio-group.component */ "lLUT");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/select/select.component */ "8Za4");
/* harmony import */ var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/select/combobox/combobox.component */ "KXc3");
/* harmony import */ var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/date-picker/date-picker.component */ "uIAT");
/* harmony import */ var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/time-picker/time-picker.component */ "eBkL");
/* harmony import */ var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */ "/NB1");



















function FormFieldInFormExampleComponent_nui_checkbox_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vegetable_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vegetable_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vegetable_r2, " ");
} }
function FormFieldInFormExampleComponent_nui_radio_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vegetable_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vegetable_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vegetable_r3, " ");
} }
class FormFieldInFormExampleComponent {
    constructor(formBuilder, changeDetector) {
        this.formBuilder = formBuilder;
        this.changeDetector = changeDetector;
        this.vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];
    }
    ngOnInit() {
        this.fancyForm = this.formBuilder.group({
            textbox: this.formBuilder.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            textNumber: this.formBuilder.control(0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            checkbox: this.formBuilder.control(true, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue,
            ]),
            checkboxGroup: this.formBuilder.control(["Cabbage", "Potato"], [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            radioGroup: this.formBuilder.control(this.vegetables[1], [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            switch: this.formBuilder.control(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue,
            ]),
            select: this.formBuilder.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            combobox: this.formBuilder.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            datePicker: this.formBuilder.control(moment_moment__WEBPACK_IMPORTED_MODULE_2___default()()),
            timePicker: this.formBuilder.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            dateTimePicker: this.formBuilder.control(moment_moment__WEBPACK_IMPORTED_MODULE_2___default()(), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
    }
}
FormFieldInFormExampleComponent.ɵfac = function FormFieldInFormExampleComponent_Factory(t) { return new (t || FormFieldInFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FormFieldInFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldInFormExampleComponent, selectors: [["nui-form-field-in-form-example"]], decls: 47, vars: 15, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9090525441904932003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Textbox");
        i18n_0 = MSG_EXTERNAL_9090525441904932003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟13e484a9137abc5ffe21c2b65aeb1358c2e4fb55␟9090525441904932003:Textbox`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7775457121914192917$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is a configurable help hint");
        i18n_2 = MSG_EXTERNAL_7775457121914192917$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟a4876b1471be2f32756e73418d2a5563d4650556␟7775457121914192917:This is a configurable help hint`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" This field is required ");
        i18n_4 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4404308585468696692$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Textbox number");
        i18n_6 = MSG_EXTERNAL_4404308585468696692$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟20a7c3d84e06d272f7595a228520705d559ff9ba␟4404308585468696692:Textbox number`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7775457121914192917$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("This is a configurable help hint");
        i18n_8 = MSG_EXTERNAL_7775457121914192917$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟a4876b1471be2f32756e73418d2a5563d4650556␟7775457121914192917:This is a configurable help hint`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_11 = goog.getMsg(" This field is required ");
        i18n_10 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_289341251890660084$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Checkbox");
        i18n_12 = MSG_EXTERNAL_289341251890660084$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟4550f610fd0713a3f3ac61109ee77ba83124ac8e␟289341251890660084:Checkbox`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Some pretty long text with hint");
        i18n_14 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_17 = goog.getMsg(" This field is required ");
        i18n_16 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_17;
    }
    else {
        i18n_16 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8170968662841845205$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_19 = goog.getMsg("Checkbox Group");
        i18n_18 = MSG_EXTERNAL_8170968662841845205$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_19;
    }
    else {
        i18n_18 = $localize `:␟bf32464fbe9d44f5a092ace6ab5ddc1abad8567a␟8170968662841845205:Checkbox Group`;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_21 = goog.getMsg("Some pretty long text with hint");
        i18n_20 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_21;
    }
    else {
        i18n_20 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_23 = goog.getMsg(" This field is required ");
        i18n_22 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_23;
    }
    else {
        i18n_22 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2149804490499414880$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_25 = goog.getMsg("Radio Group");
        i18n_24 = MSG_EXTERNAL_2149804490499414880$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_25;
    }
    else {
        i18n_24 = $localize `:␟a6b27c896615a366373b7f68ddc797384b079cb2␟2149804490499414880:Radio Group`;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_27 = goog.getMsg("Some pretty long text with hint");
        i18n_26 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_27;
    }
    else {
        i18n_26 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_29 = goog.getMsg(" This field is required ");
        i18n_28 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_29;
    }
    else {
        i18n_28 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5949969716502960330$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_31 = goog.getMsg("Switch");
        i18n_30 = MSG_EXTERNAL_5949969716502960330$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_31;
    }
    else {
        i18n_30 = $localize `:␟9c38da0c00c9bf9c2c31d69c0c305f4ec6289a40␟5949969716502960330:Switch`;
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_33 = goog.getMsg("Some pretty long text with hint");
        i18n_32 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_33;
    }
    else {
        i18n_32 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3797570084942068182$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_35 = goog.getMsg("Select");
        i18n_34 = MSG_EXTERNAL_3797570084942068182$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_35;
    }
    else {
        i18n_34 = $localize `:␟9ca82952a6bc860b5391d5975322d8af8ceddfa4␟3797570084942068182:Select`;
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_37 = goog.getMsg("Some pretty long text with hint");
        i18n_36 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_37;
    }
    else {
        i18n_36 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_39 = goog.getMsg(" This field is required ");
        i18n_38 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_39;
    }
    else {
        i18n_38 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_40; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4057674572904126532$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_41 = goog.getMsg("Combobox");
        i18n_40 = MSG_EXTERNAL_4057674572904126532$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_41;
    }
    else {
        i18n_40 = $localize `:␟87214bc47494038695c4ef242cf20b73af4cd899␟4057674572904126532:Combobox`;
    } let i18n_42; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_43 = goog.getMsg("Some pretty long text with hint");
        i18n_42 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_43;
    }
    else {
        i18n_42 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_44; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_45 = goog.getMsg(" This field is required ");
        i18n_44 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_45;
    }
    else {
        i18n_44 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } let i18n_46; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4431166373578414631$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_47 = goog.getMsg("Date Picker");
        i18n_46 = MSG_EXTERNAL_4431166373578414631$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_47;
    }
    else {
        i18n_46 = $localize `:␟54bea715133b86a014600543c2d4d62f9e89db83␟4431166373578414631:Date Picker`;
    } let i18n_48; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_49 = goog.getMsg("Some pretty long text with hint");
        i18n_48 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_49;
    }
    else {
        i18n_48 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_50; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1951884246458127703$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_51 = goog.getMsg(" The format is incorrect ");
        i18n_50 = MSG_EXTERNAL_1951884246458127703$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_51;
    }
    else {
        i18n_50 = $localize `:␟d2a64b6502339363720aeaf1428cb37957991f8d␟1951884246458127703: The format is incorrect `;
    } let i18n_52; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9052732014938008131$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_53 = goog.getMsg("Time Picker");
        i18n_52 = MSG_EXTERNAL_9052732014938008131$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_53;
    }
    else {
        i18n_52 = $localize `:␟bd14b3202a54e2393e3e3b299a0cd280d9a55e35␟9052732014938008131:Time Picker`;
    } let i18n_54; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_55 = goog.getMsg("Some pretty long text with hint");
        i18n_54 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_55;
    }
    else {
        i18n_54 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_56; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_57 = goog.getMsg(" This field is required ");
        i18n_56 = MSG_EXTERNAL_3149237552980170786$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_IN_FORM_IN_FORM_FORM_FIELD_EXAMPLE_COMPONENT_TS_57;
    }
    else {
        i18n_56 = $localize `:␟edc4fcd264a4bd6edce2df03111f9dcd9e32a620␟3149237552980170786: This field is required `;
    } return [[1, "nui-edge-definer", 3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-textbox", "formControlName", "textbox"], ["for", "required"], i18n_4, ["caption", i18n_6, "hint", i18n_8, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-textNumber", "formControlName", "textNumber"], i18n_10, ["caption", i18n_12, "hint", i18n_14, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-checkbox", "formControlName", "checkbox", "required", ""], i18n_16, ["caption", i18n_18, "hint", i18n_20, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-checkboxGroup", "formControlName", "checkboxGroup", "name", "vegetable"], [3, "value", 4, "ngFor", "ngForOf"], i18n_22, ["caption", i18n_24, "hint", i18n_26, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-radioGroup", "formControlName", "radioGroup", "name", "vegetable", "required", ""], i18n_28, ["caption", i18n_30, "hint", i18n_32, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-switch", "formControlName", "switch"], ["caption", i18n_34, "hint", i18n_36, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-select", "formControlName", "select", 3, "itemsSource"], i18n_38, ["caption", i18n_40, "hint", i18n_42, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-combobox", "formControlName", "combobox", 3, "itemsSource"], i18n_44, ["caption", i18n_46, "hint", i18n_48, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-datePicker", "formControlName", "datePicker"], ["for", "invalidFormat"], i18n_50, ["caption", i18n_52, "hint", i18n_54, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["id", "input-timePicker", "formControlName", "timePicker"], i18n_56, ["caption", "Date Time Picker", "hint", "Some pretty long text with hint. Longer than previous even. This text should not ellipsify.", "info", "text"], ["id", "input-dateTimePicker", "formControlName", "dateTimePicker"], [3, "value"]]; }, template: function FormFieldInFormExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-textbox-number", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-checkbox-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormFieldInFormExampleComponent_nui_checkbox_15_Template, 2, 2, "nui-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-radio-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormFieldInFormExampleComponent_nui_radio_20_Template, 2, 2, "nui-radio", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-switch", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nui-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nui-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-combobox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](34, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nui-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nui-date-picker", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-validation-message", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](38, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nui-time-picker", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](42, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nui-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "nui-date-time-picker", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nui-validation-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["textbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["textNumber"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["checkbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["checkboxGroup"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["radioGroup"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["switch"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["select"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["combobox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["datePicker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["timePicker"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_6__["TextboxNumberComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_10__["RadioGroupComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_11__["SwitchComponent"], _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_13__["ComboboxComponent"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerComponent"], _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_15__["TimePickerComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_16__["DateTimePickerComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_10__["RadioComponent"]], encapsulation: 2 });


/***/ }),

/***/ "8et7":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDatePickerModule,\n    NuiDateTimePickerModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiIconModule,\n    NuiRadioModule,\n    NuiSelectModule,\n    NuiSelectV2Module,\n    NuiSwitchModule,\n    NuiTextboxModule,\n    NuiTimePickerModule,\n    NuiValidationMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { FormFieldBasicHintExampleComponent } from \"./basic-hint/form-field-hint.example.component\";\nimport { FormFieldBasicReactiveCustomValidationExampleComponent } from \"./basic-reactive/basic-reactive-form-field-custom-validation.example.component\";\nimport {\n    FirstCustomFormExampleComponent,\n    FormFieldBasicExampleComponent,\n    FormFieldBasicReactiveExampleComponent,\n    FormFieldComplexExampleComponent,\n    FormFieldDynamicDisablingExampleComponent,\n    FormFieldExampleComponent,\n    FormFieldInFormExampleComponent,\n    FormFieldTestComponent,\n    FormFieldValidationTriggeringxampleComponent,\n    FormFieldVisualTestComponent,\n    FormFieldWithHTMLExampleComponent,\n    NestedFormsAsComponentExampleComponent,\n    SecondCustomFormExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: FormFieldExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"form-field-test\",\n        component: FormFieldTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"form-field-visual-test\",\n        component: FormFieldVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"form-field-validation-triggering\",\n        component: FormFieldValidationTriggeringxampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiFormFieldModule,\n        NuiValidationMessageModule,\n        NuiTextboxModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiSelectModule,\n        NuiRadioModule,\n        NuiIconModule,\n        NuiDatePickerModule,\n        NuiDocsModule,\n        NuiSwitchModule,\n        NuiDateTimePickerModule,\n        NuiTimePickerModule,\n        NuiCheckboxModule,\n        RouterModule.forChild(routes),\n        NuiSelectV2Module,\n    ],\n    declarations: [\n        FormFieldExampleComponent,\n        FormFieldBasicExampleComponent,\n        FormFieldBasicHintExampleComponent,\n        FormFieldBasicReactiveExampleComponent,\n        FormFieldBasicReactiveCustomValidationExampleComponent,\n        FormFieldComplexExampleComponent,\n        FormFieldDynamicDisablingExampleComponent,\n        FormFieldInFormExampleComponent,\n        FormFieldTestComponent,\n        FormFieldVisualTestComponent,\n        FormFieldWithHTMLExampleComponent,\n        NestedFormsAsComponentExampleComponent,\n        FirstCustomFormExampleComponent,\n        SecondCustomFormExampleComponent,\n        FormFieldValidationTriggeringxampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class FormFieldModule {\n}\n");

/***/ }),

/***/ "9h1r":
/*!******************************************************************!*\
  !*** ./demo/src/components/demo/form-field/form-field.module.ts ***!
  \******************************************************************/
/*! exports provided: FormFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldModule", function() { return FormFieldModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _basic_hint_form_field_hint_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-hint/form-field-hint.example.component */ "wBE4");
/* harmony import */ var _basic_reactive_basic_reactive_form_field_custom_validation_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-reactive/basic-reactive-form-field-custom-validation.example.component */ "GU3L");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "U7AO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "form-field-test",
        component: _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "form-field-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "form-field-validation-triggering",
        component: _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldValidationTriggeringxampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class FormFieldModule {
}
FormFieldModule.ɵfac = function FormFieldModule_Factory(t) { return new (t || FormFieldModule)(); };
FormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FormFieldModule });
FormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("+YJB"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSwitchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDateTimePickerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimePickerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectV2Module"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FormFieldModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_5__["FormFieldExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldBasicExampleComponent"],
        _basic_hint_form_field_hint_example_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldBasicHintExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldBasicReactiveExampleComponent"],
        _basic_reactive_basic_reactive_form_field_custom_validation_example_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldBasicReactiveCustomValidationExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldComplexExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldDynamicDisablingExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldInFormExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldWithHTMLExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["NestedFormsAsComponentExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FirstCustomFormExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["SecondCustomFormExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_5__["FormFieldValidationTriggeringxampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSwitchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDateTimePickerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimePickerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectV2Module"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "Au9I":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-validation-triggering/form-field-validation-triggering.example.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"reactiveForm\">\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Email address\" i18n-caption\n                    hint=\"Try to change value or remove everything\"\n                    i18n-hint\n                    [control]=\"reactiveForm.controls['email']\">\n        <nui-textbox formControlName=\"email\" type=\"email\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n        <nui-validation-message for=\"email\" i18n>\n            This should be a valid email\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n<div class=\"btn-group\">\n    <button nui-button type=\"button\" (click)=\"onAddValidators()\" i18n>Add Validators</button>\n    <button nui-button type=\"button\" (click)=\"onTouch()\" i18n>Touch</button>\n    <button nui-button type=\"button\" (click)=\"onValueChange()\" i18n>Value Change</button>\n    <button nui-button type=\"button\" (click)=\"onStatusChange()\" i18n>Status Change</button>\n    <button nui-button type=\"button\" (click)=\"onReset()\" i18n>Reset</button>\n</div>\n\n\n");

/***/ }),

/***/ "CL+U":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-test/form-field-test.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-form-field-test\",\n    templateUrl: \"./form-field-test.component.html\",\n})\nexport class FormFieldTestComponent implements OnInit {\n    public dynamicForm: FormGroup;\n\n    public dateTimePickerModel: string;\n\n    constructor(private formBuilder: FormBuilder) {\n    }\n\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n\n    public ngOnInit() {\n        this.dynamicForm = this.formBuilder.group({\n            textbox: this.formBuilder.control(\"\", Validators.required),\n            textboxNumber: this.formBuilder.control(\"\", Validators.required),\n            radio: this.formBuilder.control({}, Validators.required),\n            checkbox: this.formBuilder.control(true, Validators.required),\n            checkboxGroup: this.formBuilder.control(\"\", Validators.required),\n            switch: this.formBuilder.control(true, Validators.required),\n            selectV2: this.formBuilder.control(\"apple\", Validators.required),\n            comboboxV2: this.formBuilder.control(\"apple\", Validators.required),\n            datepicker: this.formBuilder.control(moment(), Validators.required),\n            timepicker: this.formBuilder.control({}, Validators.required),\n            dateTimePicker: this.formBuilder.control(moment(\"04/09/1989\", \"L\"), [ // \"L\" is \"MM/DD/YYY\" in moment.js\n                Validators.required,\n            ]),\n        });\n        this.dynamicForm.disable();\n        this.dynamicForm.valueChanges.subscribe(value => this.dateTimePickerModel =  value[\"dateTimePicker\"].format(\"LLLL\"));\n    }\n\n    public toggleDisabledState() {\n        if (this.dynamicForm.disabled) {\n            this.dynamicForm.enable();\n        } else {\n            this.dynamicForm.disable();\n        }\n    }\n}\n");

/***/ }),

/***/ "CRXI":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/in-form/in-form-form-field.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectorRef, Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-form-field-in-form-example\",\n    templateUrl: \"./in-form-form-field.example.component.html\",\n})\nexport class FormFieldInFormExampleComponent implements OnInit {\n    public fancyForm: FormGroup;\n\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n\n    constructor(private formBuilder: FormBuilder,\n                private changeDetector: ChangeDetectorRef) {}\n    public ngOnInit() {\n        this.fancyForm = this.formBuilder.group({\n            textbox: this.formBuilder.control(\"\", [\n                Validators.required,\n            ]),\n            textNumber: this.formBuilder.control(0, [\n                Validators.required,\n            ]),\n            checkbox: this.formBuilder.control(true, [\n                Validators.requiredTrue,\n            ]),\n            checkboxGroup: this.formBuilder.control([\"Cabbage\", \"Potato\"] , [\n                Validators.required,\n            ]),\n            radioGroup: this.formBuilder.control(this.vegetables[1], [\n                Validators.required,\n            ]),\n            switch: this.formBuilder.control(false, [ Validators.requiredTrue,\n            ]),\n            select: this.formBuilder.control(\"\", [\n                Validators.required,\n            ]),\n            combobox: this.formBuilder.control(\"\", [\n                Validators.required,\n            ]),\n            datePicker: this.formBuilder.control(moment()),\n            timePicker: this.formBuilder.control(\"\", [\n                Validators.required,\n            ]),\n            dateTimePicker: this.formBuilder.control(moment(), [\n                Validators.required,\n            ]),\n        });\n    }\n}\n");

/***/ }),

/***/ "CalX":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/complex/form-field-complex.example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormFieldComplexExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldComplexExampleComponent", function() { return FormFieldComplexExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");







class FormFieldComplexExampleComponent {
    constructor(formBuilder, changeDetector) {
        this.formBuilder = formBuilder;
        this.changeDetector = changeDetector;
    }
    ngOnInit() {
        this.fancyForm = this.formBuilder.group({
            password: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        }, {
            validator: this.matchPassword.bind(this.formBuilder.group),
        });
    }
    matchPassword(group) {
        const password = group.controls.password;
        const confirm = group.controls.confirmPassword;
        if (password.pristine || confirm.pristine) {
            return null;
        }
        group.markAsTouched();
        if (password.value === confirm.value) {
            return null;
        }
        return {
            isValid: false,
        };
    }
}
FormFieldComplexExampleComponent.ɵfac = function FormFieldComplexExampleComponent_Factory(t) { return new (t || FormFieldComplexExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FormFieldComplexExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldComplexExampleComponent, selectors: [["nui-form-field-complex-example"]], decls: 11, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Password");
        i18n_0 = MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟c32ef07f8803a223a83ed17024b38e8d82292407␟1431416938026210429:Password`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some pretty long text with hint");
        i18n_2 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" This is required ");
        i18n_4 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3241357959735682038$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Confirm Password");
        i18n_6 = MSG_EXTERNAL_3241357959735682038$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟c1b7e6d75ff4285c7636c67e5ef259629b81725b␟3241357959735682038:Confirm Password`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Some pretty long text with hint");
        i18n_8 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_11 = goog.getMsg(" This is required ");
        i18n_10 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_COMPLEX_FORM_FIELD_COMPLEX_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } return [[1, "nui-edge-definer", 3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["formControlName", "password"], ["for", "required"], i18n_4, ["caption", i18n_6, "hint", i18n_8, "info", "text", 1, "d-block", "mb-4", 3, "control"], ["formControlName", "confirmPassword"], i18n_10]; }, template: function FormFieldComplexExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["confirmPassword"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("fancyForm.valid = ", ctx.fancyForm.valid, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageComponent"]], encapsulation: 2 });


/***/ }),

/***/ "F9s2":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-test/form-field-test.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-form-field caption=\"This caption is generic for all form fields\" i18n-caption\n                info=\"Some info to show\" i18n-info\n                hint=\"Hint may be useful\" i18n-hint\n                id=\"nui-demo-form-field\">\n    <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n    <nui-textbox *ngIf=\"true\"></nui-textbox>\n    <nui-validation-message [show]=\"true\" i18n>Some error message</nui-validation-message>\n</nui-form-field>\n\n<form [formGroup]=\"dynamicForm\">\n    <button id=\"nui-form-field-test-toggle-disable-state-button\" nui-button type=\"button\" (click)=\"toggleDisabledState()\">\n        Toggle Disabled State\n    </button>\n\n    <nui-form-field caption=\"Textbox\" i18n-caption\n                    [control]=\"dynamicForm.controls['textbox']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-textbox *ngIf=\"true\" id=\"nui-form-field-test-textbox\" formControlName=\"textbox\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Textbox Number\" i18n-caption\n                    [control]=\"dynamicForm.controls['textboxNumber']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-textbox-number *ngIf=\"true\" id=\"nui-form-field-test-textbox-number\" formControlName=\"textboxNumber\"></nui-textbox-number>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Switch\" i18n-caption\n                    [control]=\"dynamicForm.controls['switch']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-switch *ngIf=\"true\" id=\"nui-form-field-test-switch\" formControlName=\"switch\"></nui-switch>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Radio Group\" i18n-caption\n                    [control]=\"dynamicForm.controls['radio']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-radio-group *ngIf=\"true\" id=\"nui-form-field-test-radio\" formControlName=\"radio\">\n            <nui-radio ariaLabel=\"Radio\">Radio</nui-radio>\n        </nui-radio-group>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Checkbox\" i18n-caption\n                    [control]=\"dynamicForm.controls['checkbox']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-checkbox *ngIf=\"true\" formControlName=\"checkbox\" id=\"nui-form-field-test-checkbox\">Checkbox</nui-checkbox>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Checkbox Group\" i18n-caption\n                    [control]=\"dynamicForm.controls['checkboxGroup']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-checkbox-group *ngIf=\"true\" id=\"nui-form-field-test-checkbox-group\" formControlName=\"checkboxGroup\">\n                <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                              [ariaLabel]=\"vegetable\"\n                              [value]=\"vegetable\">{{ vegetable }}\n                </nui-checkbox>\n            </nui-checkbox-group>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Datepicker\" i18n-caption\n                    [control]=\"dynamicForm.controls['datepicker']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-date-picker *ngIf=\"true\" id=\"nui-form-field-test-datepicker\" formControlName=\"datepicker\" [inline]=\"false\"></nui-date-picker>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Timepicker\" i18n-caption\n                    [control]=\"dynamicForm.controls['timepicker']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-time-picker *ngIf=\"true\" id=\"nui-form-field-test-timepicker\" formControlName=\"timepicker\"></nui-time-picker>\n    </nui-form-field>\n\n    <nui-form-field caption=\"Date Time Picker\"\n                    hint=\"Some pretty long text with hint. Longer than previous even. This text should not ellipsify.\"\n                    info=\"text\"\n                    [control]=\"dynamicForm.controls['dateTimePicker']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-date-time-picker *ngIf=\"true\"\n                              id=\"nui-form-field-test-datetimepicker\"\n                              formControlName=\"dateTimePicker\">\n        </nui-date-time-picker>\n        <nui-validation-message>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <span id=\"nui-form-field-test-datetimepicker-model\">\n        {{dateTimePickerModel}}\n    </span>\n\n    <nui-form-field caption=\"SelectV2\" i18n-caption\n                    [control]=\"dynamicForm.controls['selectV2']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-select-v2 *ngIf=\"true\" formControlName=\"selectV2\" id=\"nui-form-field-test-select\">\n            <nui-select-v2-option *ngFor=\"let item of ['orange', 'apple']\" [value]=\"item\">{{item}}</nui-select-v2-option>\n        </nui-select-v2>\n    </nui-form-field>\n\n    <nui-form-field caption=\"ComboboxV2\" i18n-caption\n                    [control]=\"dynamicForm.controls['comboboxV2']\">\n        <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n        <nui-combobox-v2 *ngIf=\"true\" formControlName=\"comboboxV2\" id=\"nui-form-field-test-combobox\">\n            <nui-select-v2-option *ngFor=\"let item of ['orange', 'apple']\" [value]=\"item\">{{item}}</nui-select-v2-option>\n        </nui-combobox-v2>\n    </nui-form-field>\n</form>\n\n\n<nui-form-field caption=\"This caption is generic for all form fields\" i18n-caption\n                [infoTemplate]=\"template\"\n                hint=\"Hint may be useful\" i18n-hint\n                id=\"nui-demo-form-field-with-template\">\n    <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n    <nui-textbox *ngIf=\"true\"></nui-textbox>\n    <nui-validation-message [show]=\"true\" i18n>Some error message</nui-validation-message>\n</nui-form-field>\n<ng-template #template>\n    <a>Template with link</a>\n</ng-template>\n\n<nui-form-field caption=\"This caption is generic for all form fields\" i18n-caption\n                [hintTemplate]=\"hintTemplate\"\n                id=\"nui-demo-form-field-hint-with-template\">\n    <!-- ngIf added for the QA to verify that there's no \"expression changed after it has been checked\" error -->\n    <nui-textbox *ngIf=\"true\"></nui-textbox>\n</nui-form-field>\n\n<ng-template #hintTemplate>\n    <a href=\"\" [routerLink]=\"\" i18n>Hint template</a>\n</ng-template>\n");

/***/ }),

/***/ "GMhJ":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-visual-test/form-field-visual-test.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-form-field-visual-test\",\n    templateUrl: \"./form-field-visual-test.component.html\",\n})\n\nexport class FormFieldVisualTestComponent implements OnInit {\n    public fancyForm: FormGroup;\n\n    public vegetables = [\"Cabbage\", \"Potato\", \"Tomato\", \"Carrot\"];\n\n    constructor(private formBuilder: FormBuilder) {}\n    public ngOnInit() {\n        this.fancyForm = this.formBuilder.group({\n            nickname:       this.formBuilder.control(\"\",    [Validators.required, Validators.min(3)]),\n            city:           this.formBuilder.control(\"\"),\n            textbox:        this.formBuilder.control(\"\",    [Validators.required]),\n            checkbox:       this.formBuilder.control(false, [Validators.requiredTrue]),\n            checkboxGroup:  this.formBuilder.control(\"\",    [Validators.required]),\n            radioGroup:     this.formBuilder.control(null,  [Validators.required]),\n            switch:         this.formBuilder.control(false, [Validators.requiredTrue]),\n            select:         this.formBuilder.control(\"\",    [Validators.required]),\n            combobox:       this.formBuilder.control(\"\",    [Validators.required]),\n            timePicker:     this.formBuilder.control(\"\",    [Validators.required]),\n        });\n    }\n\n    formInitialized(name: string, form: FormGroup) {\n        this.fancyForm.setControl(name, form);\n    }\n\n    markAsTouched() {\n        Object.keys(this.fancyForm.controls).forEach(key => {\n            this.fancyForm.controls[key].markAsDirty();\n            this.fancyForm.controls[key].updateValueAndValidity();\n        });\n    }\n}\n");

/***/ }),

/***/ "GU3L":
/*!*****************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/basic-reactive/basic-reactive-form-field-custom-validation.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: FormFieldBasicReactiveCustomValidationExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldBasicReactiveCustomValidationExampleComponent", function() { return FormFieldBasicReactiveCustomValidationExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_custom_validation_message_custom_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/custom-validation-message/custom-validation-message.component */ "ZJWg");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");







class FormFieldBasicReactiveCustomValidationExampleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.reactiveForm = this.formBuilder.group({
            email: this.formBuilder.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
            ]),
        });
    }
}
FormFieldBasicReactiveCustomValidationExampleComponent.ɵfac = function FormFieldBasicReactiveCustomValidationExampleComponent_Factory(t) { return new (t || FormFieldBasicReactiveCustomValidationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FormFieldBasicReactiveCustomValidationExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormFieldBasicReactiveCustomValidationExampleComponent, selectors: [["nui-form-field-basic-reactive-custom-validation-example"]], decls: 15, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Email address");
        i18n_0 = MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟69b6ac577a19acc39fc0c22342092f327fff2529␟3967269098753656610:Email address`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_447729048517267806$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Try to change value or remove everything");
        i18n_2 = MSG_EXTERNAL_447729048517267806$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟173c8fd02aaf59e1c9fb0287d50cab2b920c67b2␟447729048517267806:Try to change value or remove everything`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7701017716933852953$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("This is required");
        i18n_4 = MSG_EXTERNAL_7701017716933852953$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟49b4d9b713056cd894c236bab88f10d4382dfad8␟7701017716933852953:This is required`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2444411025352389158$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("This should be a valid email");
        i18n_6 = MSG_EXTERNAL_2444411025352389158$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_CUSTOM_VALIDATION_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟d328e43eec802b37bcb7e4a74c719876636440b3␟2444411025352389158:This should be a valid email`;
    } return [[3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, 3, "control"], ["formControlName", "email", "type", "email"], ["for", "required"], ["role", "alert", 1, "nui-validation-message"], ["icon", "status_critical", "iconSize", "small", "aria-hidden", "true"], [1, "ml-1"], i18n_4, ["for", "email"], i18n_6]; }, template: function FormFieldBasicReactiveCustomValidationExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-custom-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-custom-validation-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "nui-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.reactiveForm.controls["email"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_validation_message_custom_validation_message_custom_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["CustomValidationMessageComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]], encapsulation: 2 });


/***/ }),

/***/ "GYdM":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-validation-triggering/form-field-validation-triggering.example.component.ts ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-form-field-validation-triggering-example\",\n    templateUrl: \"./form-field-validation-triggering.example.component.html\",\n})\nexport class FormFieldValidationTriggeringxampleComponent implements OnInit {\n    public reactiveForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {\n    }\n\n    public ngOnInit() {\n        this.reactiveForm = this.formBuilder.group({\n            email: this.formBuilder.control(\"\"),\n        });\n    }\n\n    public onAddValidators() {\n        this.reactiveForm.get(\"email\")?.setValidators([\n            Validators.required,\n            Validators.email,\n        ]);\n    }\n\n    public onTouch() {\n        if (this.reactiveForm.get(\"email\")?.value === \"\" &&  this.reactiveForm.get(\"email\")?.errors === null && this.reactiveForm.get(\"email\")?.validator) {\n            this.reactiveForm.get(\"email\")?.setErrors({ required: true });\n        }\n        this.reactiveForm.get(\"email\")?.markAsTouched();\n    }\n\n    public onValueChange() {\n        const text = this.reactiveForm.get(\"email\")?.value === \"\" ? \"some text here\" : \"\";\n        this.reactiveForm.get(\"email\")?.setValue(text);\n    }\n\n    public onStatusChange() {\n        const errors = this.reactiveForm.valid ? { hasError: true} : null;\n        this.reactiveForm.get(\"email\")?.setErrors(errors);\n    }\n\n    public onReset() {\n        this.reactiveForm.get(\"email\")?.reset(\"\");\n        this.reactiveForm.get(\"email\")?.setErrors(null);\n        this.reactiveForm.get(\"email\")?.setValidators(null);\n    }\n}\n");

/***/ }),

/***/ "Hnb+":
/*!******************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/form-field-test/form-field-test.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FormFieldTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldTestComponent", function() { return FormFieldTestComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */ "ShSb");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/radio/radio-group.component */ "lLUT");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox-group.component */ "s1l0");
/* harmony import */ var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/date-picker/date-picker.component */ "uIAT");
/* harmony import */ var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/time-picker/time-picker.component */ "eBkL");
/* harmony import */ var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */ "/NB1");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */ "eZSC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "tyNb");





















function FormFieldTestComponent_nui_textbox_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-textbox");
} }
function FormFieldTestComponent_nui_textbox_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-textbox", 37);
} }
function FormFieldTestComponent_nui_textbox_number_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-textbox-number", 38);
} }
function FormFieldTestComponent_nui_switch_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-switch", 39);
} }
function FormFieldTestComponent_nui_radio_group_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-radio-group", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-radio", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormFieldTestComponent_nui_checkbox_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormFieldTestComponent_nui_checkbox_group_22_nui_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vegetable_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ariaLabel", vegetable_r19)("value", vegetable_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", vegetable_r19, " ");
} }
function FormFieldTestComponent_nui_checkbox_group_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-checkbox-group", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormFieldTestComponent_nui_checkbox_group_22_nui_checkbox_1_Template, 2, 3, "nui-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.vegetables);
} }
function FormFieldTestComponent_nui_date_picker_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-date-picker", 46);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inline", false);
} }
function FormFieldTestComponent_nui_time_picker_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-time-picker", 47);
} }
function FormFieldTestComponent_nui_date_time_picker_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-date-time-picker", 48);
} }
function FormFieldTestComponent_nui_select_v2_34_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r21);
} }
const _c40 = function () { return ["orange", "apple"]; };
function FormFieldTestComponent_nui_select_v2_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormFieldTestComponent_nui_select_v2_34_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c40));
} }
function FormFieldTestComponent_nui_combobox_v2_36_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r23);
} }
function FormFieldTestComponent_nui_combobox_v2_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-combobox-v2", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormFieldTestComponent_nui_combobox_v2_36_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c40));
} }
function FormFieldTestComponent_nui_textbox_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-textbox");
} }
function FormFieldTestComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Template with link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormFieldTestComponent_nui_textbox_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-textbox");
} }
function FormFieldTestComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class FormFieldTestComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];
    }
    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
            textbox: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            textboxNumber: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            radio: this.formBuilder.control({}, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            checkbox: this.formBuilder.control(true, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            checkboxGroup: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            switch: this.formBuilder.control(true, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            selectV2: this.formBuilder.control("apple", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            comboboxV2: this.formBuilder.control("apple", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            datepicker: this.formBuilder.control(moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            timepicker: this.formBuilder.control({}, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            dateTimePicker: this.formBuilder.control(moment_moment__WEBPACK_IMPORTED_MODULE_1___default()("04/09/1989", "L"), [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            ]),
        });
        this.dynamicForm.disable();
        this.dynamicForm.valueChanges.subscribe(value => this.dateTimePickerModel = value["dateTimePicker"].format("LLLL"));
    }
    toggleDisabledState() {
        if (this.dynamicForm.disabled) {
            this.dynamicForm.enable();
        }
        else {
            this.dynamicForm.disable();
        }
    }
}
FormFieldTestComponent.ɵfac = function FormFieldTestComponent_Factory(t) { return new (t || FormFieldTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FormFieldTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormFieldTestComponent, selectors: [["nui-form-field-test"]], decls: 47, vars: 31, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_1 = goog.getMsg("This caption is generic for all form fields");
        i18n_0 = MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟8cc9ef837083fdca9e3d36307bf3d6a709c3a4c5␟142576418225531130:This caption is generic for all form fields`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_3 = goog.getMsg("Some info to show");
        i18n_2 = MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟9242098ea6d730b60edbc034c251dad1f0096a6c␟8622149352614771940:Some info to show`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_5 = goog.getMsg("Hint may be useful");
        i18n_4 = MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟b510f6f6db7d097c9ef1f462c80dace7dcaf7eed␟2443417359056666139:Hint may be useful`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2976600943159835850$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_7 = goog.getMsg("Some error message");
        i18n_6 = MSG_EXTERNAL_2976600943159835850$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟b278d66caeabd7888c1873c749b7458ef8d1e32b␟2976600943159835850:Some error message`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9090525441904932003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_9 = goog.getMsg("Textbox");
        i18n_8 = MSG_EXTERNAL_9090525441904932003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟13e484a9137abc5ffe21c2b65aeb1358c2e4fb55␟9090525441904932003:Textbox`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_11 = goog.getMsg(" This is required ");
        i18n_10 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4016974913474593181$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_13 = goog.getMsg("Textbox Number");
        i18n_12 = MSG_EXTERNAL_4016974913474593181$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟0992f573f1de70d21718ac6776f2683b1cf695ba␟4016974913474593181:Textbox Number`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_15 = goog.getMsg(" This is required ");
        i18n_14 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5949969716502960330$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_17 = goog.getMsg("Switch");
        i18n_16 = MSG_EXTERNAL_5949969716502960330$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_17;
    }
    else {
        i18n_16 = $localize `:␟9c38da0c00c9bf9c2c31d69c0c305f4ec6289a40␟5949969716502960330:Switch`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2149804490499414880$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_19 = goog.getMsg("Radio Group");
        i18n_18 = MSG_EXTERNAL_2149804490499414880$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_19;
    }
    else {
        i18n_18 = $localize `:␟a6b27c896615a366373b7f68ddc797384b079cb2␟2149804490499414880:Radio Group`;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_289341251890660084$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_21 = goog.getMsg("Checkbox");
        i18n_20 = MSG_EXTERNAL_289341251890660084$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_21;
    }
    else {
        i18n_20 = $localize `:␟4550f610fd0713a3f3ac61109ee77ba83124ac8e␟289341251890660084:Checkbox`;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8170968662841845205$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_23 = goog.getMsg("Checkbox Group");
        i18n_22 = MSG_EXTERNAL_8170968662841845205$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_23;
    }
    else {
        i18n_22 = $localize `:␟bf32464fbe9d44f5a092ace6ab5ddc1abad8567a␟8170968662841845205:Checkbox Group`;
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7318192990379971457$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_25 = goog.getMsg("Datepicker");
        i18n_24 = MSG_EXTERNAL_7318192990379971457$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_25;
    }
    else {
        i18n_24 = $localize `:␟31dadb362bf7f7c2afa10e5f96474ccd3977f91f␟7318192990379971457:Datepicker`;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6965512942700457290$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_27 = goog.getMsg("Timepicker");
        i18n_26 = MSG_EXTERNAL_6965512942700457290$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_27;
    }
    else {
        i18n_26 = $localize `:␟e8715ff792b9b6b087624c5c77a637ff474fcb4b␟6965512942700457290:Timepicker`;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_955596126633134823$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_29 = goog.getMsg("SelectV2");
        i18n_28 = MSG_EXTERNAL_955596126633134823$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_29;
    }
    else {
        i18n_28 = $localize `:␟7f75c9a0111228044cdb6c241493ba78ab51adf8␟955596126633134823:SelectV2`;
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5050306471682278762$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_31 = goog.getMsg("ComboboxV2");
        i18n_30 = MSG_EXTERNAL_5050306471682278762$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_31;
    }
    else {
        i18n_30 = $localize `:␟729a1222afe968f6f1b9189de539c4f451a222a9␟5050306471682278762:ComboboxV2`;
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_33 = goog.getMsg("This caption is generic for all form fields");
        i18n_32 = MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_33;
    }
    else {
        i18n_32 = $localize `:␟8cc9ef837083fdca9e3d36307bf3d6a709c3a4c5␟142576418225531130:This caption is generic for all form fields`;
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_35 = goog.getMsg("Hint may be useful");
        i18n_34 = MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_35;
    }
    else {
        i18n_34 = $localize `:␟b510f6f6db7d097c9ef1f462c80dace7dcaf7eed␟2443417359056666139:Hint may be useful`;
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2976600943159835850$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_37 = goog.getMsg("Some error message");
        i18n_36 = MSG_EXTERNAL_2976600943159835850$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_37;
    }
    else {
        i18n_36 = $localize `:␟b278d66caeabd7888c1873c749b7458ef8d1e32b␟2976600943159835850:Some error message`;
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_39 = goog.getMsg("This caption is generic for all form fields");
        i18n_38 = MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS_39;
    }
    else {
        i18n_38 = $localize `:␟8cc9ef837083fdca9e3d36307bf3d6a709c3a4c5␟142576418225531130:This caption is generic for all form fields`;
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8019503124860631825$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS__42 = goog.getMsg("Hint template");
        i18n_41 = MSG_EXTERNAL_8019503124860631825$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_TEST_FORM_FIELD_TEST_COMPONENT_TS__42;
    }
    else {
        i18n_41 = $localize `:␟10df36d41175557bc53b59318a6f84a0a7cfffa4␟8019503124860631825:Hint template`;
    } return [["caption", i18n_0, "info", i18n_2, "hint", i18n_4, "id", "nui-demo-form-field"], [4, "ngIf"], [3, "show"], i18n_6, [3, "formGroup"], ["id", "nui-form-field-test-toggle-disable-state-button", "nui-button", "", "type", "button", 3, "click"], ["caption", i18n_8, 3, "control"], ["id", "nui-form-field-test-textbox", "formControlName", "textbox", 4, "ngIf"], ["for", "required"], i18n_10, ["caption", i18n_12, 3, "control"], ["id", "nui-form-field-test-textbox-number", "formControlName", "textboxNumber", 4, "ngIf"], i18n_14, ["caption", i18n_16, 3, "control"], ["id", "nui-form-field-test-switch", "formControlName", "switch", 4, "ngIf"], ["caption", i18n_18, 3, "control"], ["id", "nui-form-field-test-radio", "formControlName", "radio", 4, "ngIf"], ["caption", i18n_20, 3, "control"], ["formControlName", "checkbox", "id", "nui-form-field-test-checkbox", 4, "ngIf"], ["caption", i18n_22, 3, "control"], ["id", "nui-form-field-test-checkbox-group", "formControlName", "checkboxGroup", 4, "ngIf"], ["caption", i18n_24, 3, "control"], ["id", "nui-form-field-test-datepicker", "formControlName", "datepicker", 3, "inline", 4, "ngIf"], ["caption", i18n_26, 3, "control"], ["id", "nui-form-field-test-timepicker", "formControlName", "timepicker", 4, "ngIf"], ["caption", "Date Time Picker", "hint", "Some pretty long text with hint. Longer than previous even. This text should not ellipsify.", "info", "text", 3, "control"], ["id", "nui-form-field-test-datetimepicker", "formControlName", "dateTimePicker", 4, "ngIf"], ["id", "nui-form-field-test-datetimepicker-model"], ["caption", i18n_28, 3, "control"], ["formControlName", "selectV2", "id", "nui-form-field-test-select", 4, "ngIf"], ["caption", i18n_30, 3, "control"], ["formControlName", "comboboxV2", "id", "nui-form-field-test-combobox", 4, "ngIf"], ["caption", i18n_32, "hint", i18n_34, "id", "nui-demo-form-field-with-template", 3, "infoTemplate"], i18n_36, ["template", ""], ["caption", i18n_38, "id", "nui-demo-form-field-hint-with-template", 3, "hintTemplate"], ["hintTemplate", ""], ["id", "nui-form-field-test-textbox", "formControlName", "textbox"], ["id", "nui-form-field-test-textbox-number", "formControlName", "textboxNumber"], ["id", "nui-form-field-test-switch", "formControlName", "switch"], ["id", "nui-form-field-test-radio", "formControlName", "radio"], ["ariaLabel", "Radio"], ["formControlName", "checkbox", "id", "nui-form-field-test-checkbox"], ["id", "nui-form-field-test-checkbox-group", "formControlName", "checkboxGroup"], [3, "ariaLabel", "value", 4, "ngFor", "ngForOf"], [3, "ariaLabel", "value"], ["id", "nui-form-field-test-datepicker", "formControlName", "datepicker", 3, "inline"], ["id", "nui-form-field-test-timepicker", "formControlName", "timepicker"], ["id", "nui-form-field-test-datetimepicker", "formControlName", "dateTimePicker"], ["formControlName", "selectV2", "id", "nui-form-field-test-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "comboboxV2", "id", "nui-form-field-test-combobox"], ["href", "", 3, "routerLink"], i18n_41]; }, template: function FormFieldTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormFieldTestComponent_nui_textbox_1_Template, 1, 0, "nui-textbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-validation-message", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormFieldTestComponent_Template_button_click_5_listener() { return ctx.toggleDisabledState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Toggle Disabled State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nui-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormFieldTestComponent_nui_textbox_8_Template, 1, 0, "nui-textbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nui-validation-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](10, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nui-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FormFieldTestComponent_nui_textbox_number_12_Template, 1, 0, "nui-textbox-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nui-validation-message", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nui-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormFieldTestComponent_nui_switch_16_Template, 1, 0, "nui-switch", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nui-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FormFieldTestComponent_nui_radio_group_18_Template, 3, 0, "nui-radio-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "nui-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, FormFieldTestComponent_nui_checkbox_20_Template, 2, 0, "nui-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nui-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, FormFieldTestComponent_nui_checkbox_group_22_Template, 2, 1, "nui-checkbox-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "nui-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, FormFieldTestComponent_nui_date_picker_24_Template, 1, 1, "nui-date-picker", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nui-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, FormFieldTestComponent_nui_time_picker_26_Template, 1, 0, "nui-time-picker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "nui-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, FormFieldTestComponent_nui_date_time_picker_28_Template, 1, 0, "nui-date-time-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nui-validation-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "nui-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, FormFieldTestComponent_nui_select_v2_34_Template, 2, 2, "nui-select-v2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "nui-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, FormFieldTestComponent_nui_combobox_v2_36_Template, 2, 2, "nui-combobox-v2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nui-form-field", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, FormFieldTestComponent_nui_textbox_38_Template, 1, 0, "nui-textbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "nui-validation-message", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](40, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, FormFieldTestComponent_ng_template_41_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nui-form-field", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, FormFieldTestComponent_nui_textbox_44_Template, 1, 0, "nui-textbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, FormFieldTestComponent_ng_template_45_Template, 2, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](42);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.dynamicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["textbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["textboxNumber"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["switch"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["radio"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["checkbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["checkboxGroup"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["datepicker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["timepicker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["dateTimePicker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dateTimePickerModel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["selectV2"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["comboboxV2"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("infoTemplate", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hintTemplate", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_7__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_8__["TextboxNumberComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_9__["SwitchComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_10__["RadioGroupComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_10__["RadioComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_13__["DatePickerComponent"], _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_14__["TimePickerComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_15__["DateTimePickerComponent"], _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_16__["SelectV2Component"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_17__["SelectV2OptionComponent"], _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_18__["ComboboxV2Component"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "L+Iw":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/nested-forms-as-component/nested-forms-as-component.example.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, EventEmitter, Inject, OnInit, Output } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-nested-forms-as-component-example\",\n    templateUrl: \"./nested-forms-as-component.example.component.html\",\n})\nexport class NestedFormsAsComponentExampleComponent implements OnInit {\n    public fancyForm: FormGroup;\n\n    constructor(private fb: FormBuilder,\n                @Inject(ToastService) private toastService: ToastService) {}\n\n    ngOnInit() {\n\n        this.fancyForm = this.fb.group({\n            nickname: this.fb.control (\"\", [Validators.required, Validators.min(3)]),\n        });\n    }\n\n    formInitialized(name: string, form: FormGroup) {\n        this.fancyForm.setControl(name, form);\n    }\n    public onSubmit(value: FormGroup) {\n        this.toastService.success({\n            message: `Form is valid: ${value.valid}`,\n            title: \"Submit\",\n        });\n    }\n}\n\n/**\n * Component representing form group for name and surname\n */\n@Component({\n    selector: \"nui-first-custom-form-example\",\n    template: `<div [formGroup]=\"firstForm\">\n        <nui-form-field class=\"d-block mb-4\"\n                        caption=\"First Name\" i18n-caption\n                        [control]=\"firstForm.controls['firstName']\">\n            <nui-textbox formControlName=\"firstName\"></nui-textbox>\n            <nui-validation-message for=\"required\" i18n>\n                This is required\n            </nui-validation-message>\n        </nui-form-field>\n        <nui-form-field class=\"d-block mb-4\"\n                        caption=\"Last Name\" i18n-caption\n                        [control]=\"firstForm.controls['lastName']\">\n            <nui-textbox formControlName=\"lastName\"></nui-textbox>\n            <nui-validation-message for=\"required\" i18n>\n                This is required\n            </nui-validation-message>\n        </nui-form-field>\n    </div>`,\n})\nexport class FirstCustomFormExampleComponent implements OnInit {\n    @Output() formReady = new EventEmitter<FormGroup>();\n    public firstForm: FormGroup;\n\n    ngOnInit() {\n        this.firstForm = this.fb.group({\n            firstName: this.fb.control (\"\", Validators.required),\n            lastName: this.fb.control (\"\", Validators.required),\n        });\n\n        this.formReady.emit(this.firstForm);\n    }\n\n    constructor(private fb: FormBuilder) {}\n}\n\n/**\n * Component representing address form group\n */\n@Component({\n    selector: \"nui-second-custom-form-example\",\n    template: `\n        <div [formGroup]=\"secondForm\">\n            <nui-form-field class=\"d-block mb-4\"\n                            caption=\"City\" i18n-caption\n                            [control]=\"secondForm.controls['city']\">\n                <nui-textbox formControlName=\"city\"></nui-textbox>\n                <nui-validation-message for=\"required\" i18n>\n                    This is required\n                </nui-validation-message>\n            </nui-form-field>\n            <nui-form-field class=\"d-block mb-4\"\n                            caption=\"Address\" i18n-caption\n                            [control]=\"secondForm.controls['address']\">\n                <nui-textbox formControlName=\"address\"></nui-textbox>\n                <nui-validation-message for=\"required\" i18n>\n                    This is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>`,\n})\nexport class SecondCustomFormExampleComponent implements OnInit {\n    @Output() formReady = new EventEmitter<FormGroup>();\n    public secondForm: FormGroup;\n\n    ngOnInit() {\n        this.secondForm = this.fb.group({\n            city: null,\n            address: null,\n        });\n\n        this.formReady.emit(this.secondForm);\n    }\n\n    constructor(private fb: FormBuilder) {}\n}\n");

/***/ }),

/***/ "LEGT":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/form-field-docs/form-field-docs.example.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FormFieldExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldExampleComponent", function() { return FormFieldExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _basic_basic_form_field_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic/basic-form-field.example.component */ "dcob");
/* harmony import */ var _basic_reactive_basic_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-reactive/basic-reactive-form-field.example.component */ "i2B5");
/* harmony import */ var _basic_reactive_basic_reactive_form_field_custom_validation_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basic-reactive/basic-reactive-form-field-custom-validation.example.component */ "GU3L");
/* harmony import */ var _complex_form_field_complex_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../complex/form-field-complex.example.component */ "CalX");
/* harmony import */ var _html_as_info_html_as_info_in_form_field_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html-as-info/html-as-info-in-form-field.example.component */ "37Ks");
/* harmony import */ var _basic_hint_form_field_hint_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basic-hint/form-field-hint.example.component */ "wBE4");
/* harmony import */ var _dynamic_disabling_form_field_dynamic_disabling_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dynamic-disabling/form-field-dynamic-disabling.example.component */ "V7n8");
/* harmony import */ var _nested_forms_as_component_nested_forms_as_component_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nested-forms-as-component/nested-forms-as-component.example.component */ "5Ynj");
/* harmony import */ var _in_form_in_form_form_field_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../in-form/in-form-form-field.example.component */ "7rV9");
/* harmony import */ var _form_field_validation_triggering_form_field_validation_triggering_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form-field-validation-triggering/form-field-validation-triggering.example.component */ "yt2M");












class FormFieldExampleComponent {
    getItemConfigKey(key) {
        return key;
    }
}
FormFieldExampleComponent.ɵfac = function FormFieldExampleComponent_Factory(t) { return new (t || FormFieldExampleComponent)(); };
FormFieldExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldExampleComponent, selectors: [["nui-form-field-docs-example"]], decls: 168, vars: 2, consts: [["filenamePrefix", "basic-form-field", "exampleTitle", "Basic Form Field"], ["filenamePrefix", "basic-reactive-form-field", "exampleTitle", "Validation Messages Inside Reactive Form"], ["filenamePrefix", "basic-reactive-form-field-custom-validation", "exampleTitle", "Custom Styled Validation Messages Inside Reactive Form"], ["filenamePrefix", "form-field-complex", "exampleTitle", "Form Field with custom validation"], ["filenamePrefix", "html-as-info-in-form-field", "exampleTitle", "HTML inside popover"], ["filenamePrefix", "form-field-hint", "exampleTitle", "Form Field Hints"], ["filenamePrefix", "form-field-dynamic-disabling", "exampleTitle", "Form Field with dynamic disabling"], ["filenamePrefix", "nested-forms-as-component", "exampleTitle", "Nested form components"], ["filenamePrefix", "in-form-form-field", "exampleTitle", "Form Field inside the Form"], ["filenamePrefix", "form-field-validation-triggering", "exampleTitle", "Form Field Validation Triggering"]], template: function FormFieldExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiFormFieldModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Form Field is a convenient wrapper that helps to combine your inputs in a form. Currently we support these types of form items (but please note that not all of these components are in alpha stage):\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "textNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "checkboxGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "combobox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "radioGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "datePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "timePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "nui-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " is a building block for any form. It gives an ability to add label for any input, complementary help text under it and info icon with a popover to display some additional text.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nui-form-field-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Validation Messages Inside Reactive Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " In order to use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "nui-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " within reactive form you need to pass it access to a control ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "[control]=\"reactiveForm.controls['email']\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ". Also ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "formControlName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " needs to be set directly on the input element you're using with the name of a form control.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "nui-validation-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " component can be added inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "nui-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ". It has 2 inputs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ". Form Field Component will change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " by itself to control visibility of the error message (this input is useful for consumers only outside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "nui-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "for");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " input accepts validator name.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "nui-form-field-basic-reactive-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " For customization purposes, we provide the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "nui-custom-validation-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " component that does not contain internal styling and html elements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Input properties are similar to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "nui-validation-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "nui-form-field-basic-reactive-custom-validation-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Compound Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " In the example below an example of a compound validation can be seen. To validate group of fields you need to find the first common parent FormGroup and add validator there (click \"Source\" above and open the TS tab to see the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "matchPassword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " validator).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " The current validation state of the form is displayed at the bottom of the example.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-form-field-complex-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "HTML as info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " There is a possibility to have additional information to each field. It can be done using either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " input, that is just a text, passed as a string, or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "infoTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " input, that uses html inside the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ". Note: the template is provided completely by the user and we do not do any sanitizing.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "nui-form-field-with-html-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Hint Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Hint text can give the user additional information about a form field and will appear below the field's user input area. The text for a hint can be specified in one of two ways: either by setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " input with a string value or by providing a templateRef through the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nui-form-field-hint-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Dynamic Disabling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Example to show possibility of controlling disabled state (setting initial, dynamic change of state).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "nui-form-field-dynamic-disabling-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Nested Form Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " In order to avoid code duplication, it may be useful to combine a form from several components. In this example there is a Form Group that consists of Nickname control an 2 child Form Groups represented by separate components: one is for personal data (name, surname) called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "nui-first-custom-form-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " and another is for address (city, address) called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "nui-second-custom-form-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, ". In order to achieve that we need to let the parent form know that there are some child groups that should be appended. This is done by calling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "formInitialized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " method from the parent form group on the event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "formReady");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " of the child. Also there is a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "CustomFormFieldExampleComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " from previous example reused in child components to illustrate even more flexibility of this approach.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " The current validation state of the form is displayed at the bottom of the example.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Note that there are several ways to use components as a form group, but this is currently the most convenient way.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "nui-nested-forms-as-component-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Various Components in a Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " This example shows all possible inputs combined in one form\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "nui-form-field-in-form-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Validation Triggering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " This example shows all possible ways for validation message triggering by touch, value changes or status changes event.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "nui-example-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "nui-form-field-validation-triggering-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getItemConfigKey("hint"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getItemConfigKey("hintTemplate"));
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _basic_basic_form_field_example_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldBasicExampleComponent"], _basic_reactive_basic_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldBasicReactiveExampleComponent"], _basic_reactive_basic_reactive_form_field_custom_validation_example_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldBasicReactiveCustomValidationExampleComponent"], _complex_form_field_complex_example_component__WEBPACK_IMPORTED_MODULE_5__["FormFieldComplexExampleComponent"], _html_as_info_html_as_info_in_form_field_example_component__WEBPACK_IMPORTED_MODULE_6__["FormFieldWithHTMLExampleComponent"], _basic_hint_form_field_hint_example_component__WEBPACK_IMPORTED_MODULE_7__["FormFieldBasicHintExampleComponent"], _dynamic_disabling_form_field_dynamic_disabling_example_component__WEBPACK_IMPORTED_MODULE_8__["FormFieldDynamicDisablingExampleComponent"], _nested_forms_as_component_nested_forms_as_component_example_component__WEBPACK_IMPORTED_MODULE_9__["NestedFormsAsComponentExampleComponent"], _in_form_in_form_form_field_example_component__WEBPACK_IMPORTED_MODULE_10__["FormFieldInFormExampleComponent"], _form_field_validation_triggering_form_field_validation_triggering_example_component__WEBPACK_IMPORTED_MODULE_11__["FormFieldValidationTriggeringxampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "M3M7":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/form-field-visual-test/form-field-visual-test.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FormFieldVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldVisualTestComponent", function() { return FormFieldVisualTestComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_validation_message_custom_validation_message_custom_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/custom-validation-message/custom-validation-message.component */ "ZJWg");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox-group.component */ "s1l0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/radio/radio-group.component */ "lLUT");
/* harmony import */ var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/select/combobox/combobox.component */ "KXc3");
/* harmony import */ var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/select/select.component */ "8Za4");
/* harmony import */ var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/time-picker/time-picker.component */ "eBkL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");

















function FormFieldVisualTestComponent_nui_checkbox_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vegetable_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r2, " ");
} }
function FormFieldVisualTestComponent_nui_radio_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vegetable_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r3, " ");
} }
class FormFieldVisualTestComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.vegetables = ["Cabbage", "Potato", "Tomato", "Carrot"];
    }
    ngOnInit() {
        this.fancyForm = this.formBuilder.group({
            nickname: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(3)]),
            city: this.formBuilder.control(""),
            textbox: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            checkbox: this.formBuilder.control(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]),
            checkboxGroup: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            radioGroup: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            switch: this.formBuilder.control(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]),
            select: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            combobox: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            timePicker: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    formInitialized(name, form) {
        this.fancyForm.setControl(name, form);
    }
    markAsTouched() {
        Object.keys(this.fancyForm.controls).forEach(key => {
            this.fancyForm.controls[key].markAsDirty();
            this.fancyForm.controls[key].updateValueAndValidity();
        });
    }
}
FormFieldVisualTestComponent.ɵfac = function FormFieldVisualTestComponent_Factory(t) { return new (t || FormFieldVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FormFieldVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormFieldVisualTestComponent, selectors: [["nui-form-field-visual-test"]], decls: 80, vars: 19, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9090525441904932003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VISUAL_TEST_FORM_FIELD_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Textbox");
        i18n_0 = MSG_EXTERNAL_9090525441904932003$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VISUAL_TEST_FORM_FIELD_VISUAL_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟13e484a9137abc5ffe21c2b65aeb1358c2e4fb55␟9090525441904932003:Textbox`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9220464142217077465$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VISUAL_TEST_FORM_FIELD_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Try to leave empty this required field");
        i18n_2 = MSG_EXTERNAL_9220464142217077465$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VISUAL_TEST_FORM_FIELD_VISUAL_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟9a2dfb9f7f6d7e658c55260d533e30ea0dceb55d␟9220464142217077465:Try to leave empty this required field`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7701017716933852953$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VISUAL_TEST_FORM_FIELD_VISUAL_TEST_COMPONENT_TS_5 = goog.getMsg("This is required");
        i18n_4 = MSG_EXTERNAL_7701017716933852953$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VISUAL_TEST_FORM_FIELD_VISUAL_TEST_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟49b4d9b713056cd894c236bab88f10d4382dfad8␟7701017716933852953:This is required`;
    } return [[1, "container"], [1, "nui-edge-definer", 3, "formGroup"], ["caption", "Nickname", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["formControlName", "nickname", "id", "nui-form-field-visual-test-nickname"], ["for", "required"], ["caption", "City", 3, "control"], ["formControlName", "city", "id", "nui-form-field-visual-test-city"], [3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, 3, "control"], ["formControlName", "textbox", "type", "textbox"], ["icon", "status_critical", "iconSize", "small", "aria-hidden", "true"], [1, "ml-1"], i18n_4, [1, "row"], [1, "col"], ["caption", "Textbox", "hint", "This should be any valid email", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-textbox", "formControlName", "textbox"], ["for", "email"], ["id", "nui-form-field-visual-test-form-field", "caption", "Checkbox", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-checkbox", "formControlName", "checkbox"], ["caption", "Switch", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-switch", "formControlName", "switch"], ["caption", "Checkbox Group", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-checkbox-group", "formControlName", "checkboxGroup", "name", "vegetable"], [3, "value", 4, "ngFor", "ngForOf"], ["caption", "Radio Group", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-radio", "formControlName", "radioGroup", "name", "vegetable", "required", ""], ["caption", "Combobox", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-combobox", "formControlName", "combobox", 3, "itemsSource"], ["caption", "Select", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-select", "formControlName", "select", 3, "itemsSource"], ["caption", "Time Picker", "hint", "Some pretty long text with hint", "info", "text", 3, "control"], ["id", "nui-form-field-visual-test-timepicker", "formControlName", "timePicker"], [1, "my-3", "d-flex", "flex-row", "justify-content-center"], ["nui-button", "", "id", "nui-demo-mark-as-touched-button", 1, "btn", 3, "click"], [1, "d-flex", "flex-row", "justify-content-center"], [1, "w-100", "d-flex", "flex-column"], [3, "value"]]; }, template: function FormFieldVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nested form components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-textbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " This is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nui-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Custom error message styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "nui-textbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nui-custom-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "nui-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Various Components in a Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nui-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "nui-textbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nui-validation-message", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Something, but not enough ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nui-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "nui-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nui-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "nui-switch", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nui-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nui-checkbox-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, FormFieldVisualTestComponent_nui_checkbox_46_Template, 2, 2, "nui-checkbox", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nui-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "nui-radio-group", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, FormFieldVisualTestComponent_nui_radio_52_Template, 2, 2, "nui-radio", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nui-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "nui-combobox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "nui-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "nui-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nui-form-field", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "nui-time-picker", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormFieldVisualTestComponent_Template_button_click_74_listener() { return ctx.markAsTouched(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Mark as Dirty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["nickname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["City"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["textbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["textbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["checkbox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["switch"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["checkboxGroup"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["radioGroup"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["combobox"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["select"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["timePicker"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("fancyForm.valid = ", ctx.fancyForm.valid, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageComponent"], _src_lib_validation_message_custom_validation_message_custom_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["CustomValidationMessageComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_8__["SwitchComponent"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_11__["RadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_12__["ComboboxComponent"], _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_13__["SelectComponent"], _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_14__["TimePickerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_11__["RadioComponent"]], encapsulation: 2 });


/***/ }),

/***/ "M8su":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/html-as-info/html-as-info-in-form-field.example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-form-field-with-html-example\",\n    templateUrl: \"./html-as-info-in-form-field.example.component.html\",\n})\nexport class FormFieldWithHTMLExampleComponent {\n\n}\n");

/***/ }),

/***/ "P5BU":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/complex/form-field-complex.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectorRef, Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n\n@Component({\n    selector: \"nui-form-field-complex-example\",\n    templateUrl: \"./form-field-complex.example.component.html\",\n})\nexport class FormFieldComplexExampleComponent implements OnInit {\n    public fancyForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef) {\n    }\n\n    public ngOnInit() {\n\n        this.fancyForm = this.formBuilder.group({\n            password: this.formBuilder.control(\"\", Validators.required),\n            confirmPassword: this.formBuilder.control(\"\", Validators.required),\n        }, {\n            validator: this.matchPassword.bind(this.formBuilder.group),\n        });\n    }\n\n    private matchPassword(group: FormGroup) {\n        const password = group.controls.password;\n        const confirm = group.controls.confirmPassword;\n        if (password.pristine || confirm.pristine) {\n            return null;\n        }\n\n        group.markAsTouched();\n\n        if (password.value === confirm.value) {\n            return null;\n        }\n\n        return {\n            isValid: false,\n        };\n    }\n}\n");

/***/ }),

/***/ "QwNZ":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/html-as-info/html-as-info-in-form-field.example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-form-field caption=\"This caption is generic for all form fields\" i18n-caption\n                [infoTemplate]=\"template\"\n                hint=\"Hint may be useful\" i18n-hint>\n    <nui-textbox></nui-textbox>\n</nui-form-field>\n<ng-template #template>\n    New custom info text.\n    <p>My paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis purus ut odio tempus, ut venenatis diam egestas.</p>\n    <h1>My header</h1>\n    <a href=\"http://apollo-docs.swdev.local/\" target=\"_blank\">My link</a>\n    <br>\n    <i>Italic text</i>\n    <br>\n    <strong>Strong text</strong>\n</ng-template>\n");

/***/ }),

/***/ "U7AO":
/*!******************************************************!*\
  !*** ./demo/src/components/demo/form-field/index.ts ***!
  \******************************************************/
/*! exports provided: FormFieldExampleComponent, FormFieldBasicExampleComponent, FormFieldBasicReactiveExampleComponent, FormFieldInFormExampleComponent, FormFieldComplexExampleComponent, NestedFormsAsComponentExampleComponent, FirstCustomFormExampleComponent, SecondCustomFormExampleComponent, FormFieldVisualTestComponent, FormFieldDynamicDisablingExampleComponent, FormFieldTestComponent, FormFieldWithHTMLExampleComponent, FormFieldValidationTriggeringxampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_field_docs_form_field_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-field-docs/form-field-docs.example.component */ "LEGT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldExampleComponent", function() { return _form_field_docs_form_field_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["FormFieldExampleComponent"]; });

/* harmony import */ var _basic_basic_form_field_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/basic-form-field.example.component */ "dcob");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldBasicExampleComponent", function() { return _basic_basic_form_field_example_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldBasicExampleComponent"]; });

/* harmony import */ var _basic_reactive_basic_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-reactive/basic-reactive-form-field.example.component */ "i2B5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldBasicReactiveExampleComponent", function() { return _basic_reactive_basic_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldBasicReactiveExampleComponent"]; });

/* harmony import */ var _in_form_in_form_form_field_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./in-form/in-form-form-field.example.component */ "7rV9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldInFormExampleComponent", function() { return _in_form_in_form_form_field_example_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldInFormExampleComponent"]; });

/* harmony import */ var _complex_form_field_complex_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complex/form-field-complex.example.component */ "CalX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldComplexExampleComponent", function() { return _complex_form_field_complex_example_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldComplexExampleComponent"]; });

/* harmony import */ var _nested_forms_as_component_nested_forms_as_component_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nested-forms-as-component/nested-forms-as-component.example.component */ "5Ynj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NestedFormsAsComponentExampleComponent", function() { return _nested_forms_as_component_nested_forms_as_component_example_component__WEBPACK_IMPORTED_MODULE_5__["NestedFormsAsComponentExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FirstCustomFormExampleComponent", function() { return _nested_forms_as_component_nested_forms_as_component_example_component__WEBPACK_IMPORTED_MODULE_5__["FirstCustomFormExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondCustomFormExampleComponent", function() { return _nested_forms_as_component_nested_forms_as_component_example_component__WEBPACK_IMPORTED_MODULE_5__["SecondCustomFormExampleComponent"]; });

/* harmony import */ var _form_field_visual_test_form_field_visual_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-field-visual-test/form-field-visual-test.component */ "M3M7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldVisualTestComponent", function() { return _form_field_visual_test_form_field_visual_test_component__WEBPACK_IMPORTED_MODULE_6__["FormFieldVisualTestComponent"]; });

/* harmony import */ var _dynamic_disabling_form_field_dynamic_disabling_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-disabling/form-field-dynamic-disabling.example.component */ "V7n8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldDynamicDisablingExampleComponent", function() { return _dynamic_disabling_form_field_dynamic_disabling_example_component__WEBPACK_IMPORTED_MODULE_7__["FormFieldDynamicDisablingExampleComponent"]; });

/* harmony import */ var _form_field_test_form_field_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-field-test/form-field-test.component */ "Hnb+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldTestComponent", function() { return _form_field_test_form_field_test_component__WEBPACK_IMPORTED_MODULE_8__["FormFieldTestComponent"]; });

/* harmony import */ var _html_as_info_html_as_info_in_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html-as-info/html-as-info-in-form-field.example.component */ "37Ks");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldWithHTMLExampleComponent", function() { return _html_as_info_html_as_info_in_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__["FormFieldWithHTMLExampleComponent"]; });

/* harmony import */ var _form_field_validation_triggering_form_field_validation_triggering_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-field-validation-triggering/form-field-validation-triggering.example.component */ "yt2M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFieldValidationTriggeringxampleComponent", function() { return _form_field_validation_triggering_form_field_validation_triggering_example_component__WEBPACK_IMPORTED_MODULE_10__["FormFieldValidationTriggeringxampleComponent"]; });














/***/ }),

/***/ "V7n8":
/*!*****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/dynamic-disabling/form-field-dynamic-disabling.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FormFieldDynamicDisablingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldDynamicDisablingExampleComponent", function() { return FormFieldDynamicDisablingExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");








class FormFieldDynamicDisablingExampleComponent {
    constructor(formBuilder, toastService) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
            password: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            confirmPassword: this.formBuilder.control({ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
    onPasswordBlurred() {
        if (this.dynamicForm.controls.password.valid) {
            this.dynamicForm.controls.confirmPassword.enable();
        }
        else {
            this.dynamicForm.controls.confirmPassword.disable();
        }
    }
    toggleRadio() {
        this.visibleRadio = !this.visibleRadio;
    }
}
FormFieldDynamicDisablingExampleComponent.ɵfac = function FormFieldDynamicDisablingExampleComponent_Factory(t) { return new (t || FormFieldDynamicDisablingExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
FormFieldDynamicDisablingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormFieldDynamicDisablingExampleComponent, selectors: [["nui-form-field-dynamic-disabling-example"]], decls: 9, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Password");
        i18n_0 = MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟c32ef07f8803a223a83ed17024b38e8d82292407␟1431416938026210429:Password`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" This is required ");
        i18n_2 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3241357959735682038$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Confirm Password");
        i18n_4 = MSG_EXTERNAL_3241357959735682038$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟c1b7e6d75ff4285c7636c67e5ef259629b81725b␟3241357959735682038:Confirm Password`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" This is required ");
        i18n_6 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_DYNAMIC_DISABLING_FORM_FIELD_DYNAMIC_DISABLING_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } return [[3, "formGroup"], ["caption", i18n_0, "id", "nui-form-field-dynamic-disabling", 1, "d-block", "mb-4", 3, "control"], ["id", "nui-form-field-dynamic-disabling-password", "formControlName", "password", 3, "textChange"], ["for", "required"], i18n_2, ["caption", i18n_4, 3, "control"], ["id", "nui-form-field-dynamic-disabling-confirm-password", "formControlName", "confirmPassword"], i18n_6]; }, template: function FormFieldDynamicDisablingExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("textChange", function FormFieldDynamicDisablingExampleComponent_Template_nui_textbox_textChange_2_listener() { return ctx.onPasswordBlurred(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "nui-textbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.dynamicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.dynamicForm.controls["confirmPassword"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"]], encapsulation: 2 });


/***/ }),

/***/ "VHCc":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/form-field-visual-test/form-field-visual-test.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <h3>Nested form components</h3>\n    <form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\">\n        <nui-form-field caption=\"Nickname\"\n                        hint=\"Some pretty long text with hint\"\n                        info=\"text\"\n                        [control]=\"fancyForm.controls['nickname']\">\n            <nui-textbox formControlName=\"nickname\" id=\"nui-form-field-visual-test-nickname\"></nui-textbox>\n            <nui-validation-message for=\"required\">\n                This is required\n            </nui-validation-message>\n        </nui-form-field>\n        <nui-form-field caption=\"City\"\n                        [control]=\"fancyForm.controls['City']\">\n            <nui-textbox formControlName=\"city\" id=\"nui-form-field-visual-test-city\"></nui-textbox>\n        </nui-form-field>\n    </form>\n    <h3>Custom error message styling</h3>\n    <form [formGroup]=\"fancyForm\">\n        <nui-form-field i18n-caption caption=\"Textbox\"\n                        i18n-hint hint=\"Try to leave empty this required field\"\n                        [control]=\"fancyForm.controls['textbox']\">\n            <nui-textbox formControlName=\"textbox\" type=\"textbox\"></nui-textbox>\n\n            <nui-custom-validation-message for=\"required\">\n                <nui-icon icon=\"status_critical\" iconSize=\"small\" aria-hidden=\"true\"></nui-icon>\n                <span class=\"ml-1\"><em i18n>This is required</em></span>\n            </nui-custom-validation-message>\n        </nui-form-field>\n    </form>\n    <h3>Various Components in a Form</h3>\n    <form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <nui-form-field caption=\"Textbox\"\n                            hint=\"This should be any valid email\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['textbox']\">\n                <nui-textbox id=\"nui-form-field-visual-test-textbox\"\n                             formControlName=\"textbox\"></nui-textbox>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n                <nui-validation-message for=\"email\">\n                    Something, but not enough\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"col\">\n            <nui-form-field id=\"nui-form-field-visual-test-form-field\"\n                            caption=\"Checkbox\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['checkbox']\">\n                <nui-checkbox id=\"nui-form-field-visual-test-checkbox\"\n                                formControlName=\"checkbox\"></nui-checkbox>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"col\">\n            <nui-form-field caption=\"Switch\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['switch']\">\n                <nui-switch id=\"nui-form-field-visual-test-switch\"\n                            formControlName=\"switch\"></nui-switch>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <hr />\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <nui-form-field caption=\"Checkbox Group\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['checkboxGroup']\">\n                <nui-checkbox-group id=\"nui-form-field-visual-test-checkbox-group\"\n                                    formControlName=\"checkboxGroup\"\n                                    name=\"vegetable\">\n                    <nui-checkbox *ngFor=\"let vegetable of vegetables;\"\n                                  [value]=\"vegetable\">\n                        {{vegetable}}\n                    </nui-checkbox>\n                </nui-checkbox-group>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"col\">\n            <nui-form-field caption=\"Radio Group\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['radioGroup']\">\n                <nui-radio-group id=\"nui-form-field-visual-test-radio\"\n                                 formControlName=\"radioGroup\"\n                                 name=\"vegetable\" required>\n                    <nui-radio *ngFor=\"let vegetable of vegetables\"\n                               [value]=\"vegetable\">\n                        {{vegetable}}\n                    </nui-radio>\n                </nui-radio-group>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <hr />\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <nui-form-field caption=\"Combobox\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['combobox']\">\n                <nui-combobox id=\"nui-form-field-visual-test-combobox\"\n                                formControlName=\"combobox\"\n                                [itemsSource]=\"vegetables\"></nui-combobox>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"col\">\n            <nui-form-field caption=\"Select\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['select']\">\n                <nui-select id=\"nui-form-field-visual-test-select\"\n                            formControlName=\"select\"\n                            [itemsSource]=\"vegetables\"></nui-select>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"col\">\n            <nui-form-field caption=\"Time Picker\"\n                            hint=\"Some pretty long text with hint\"\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['timePicker']\">\n                <nui-time-picker id=\"nui-form-field-visual-test-timepicker\"\n                                    formControlName=\"timePicker\"></nui-time-picker>\n                <nui-validation-message for=\"required\">\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n    </div>\n    <div class=\"my-3 d-flex flex-row justify-content-center\">\n        <div>\n            <button nui-button class=\"btn\" id=\"nui-demo-mark-as-touched-button\" (click)=\"markAsTouched()\">Mark as Dirty</button>\n        </div>\n    </div>\n    <div class=\"d-flex flex-row justify-content-center\">\n        <div class=\"w-100 d-flex flex-column\">\n            <pre>fancyForm.valid = {{fancyForm.valid}}</pre>\n        </div>\n    </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "XKa7":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/nested-forms-as-component/nested-forms-as-component.example.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"fancyForm\" (submit)=\"onSubmit(fancyForm)\" class=\"nui-edge-definer\">\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Nickname\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['nickname']\">\n        <nui-textbox formControlName=\"nickname\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-first-custom-form-example (formReady)=\"formInitialized('firstForm', $event)\"></nui-first-custom-form-example>\n    <nui-second-custom-form-example (formReady)=\"formInitialized('secondForm', $event)\"></nui-second-custom-form-example>\n    <pre>fancyForm.valid = {{fancyForm.valid}}</pre>\n</form>\n");

/***/ }),

/***/ "Zso1":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/in-form/in-form-form-field.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\">\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Textbox\" i18n-caption\n                    hint=\"This is a configurable help hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['textbox']\" >\n        <nui-textbox id=\"input-textbox\"\n                    formControlName=\"textbox\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Textbox number\" i18n-caption\n                    hint=\"This is a configurable help hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['textNumber']\" >\n        <nui-textbox-number id=\"input-textNumber\"\n                            formControlName=\"textNumber\"></nui-textbox-number>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Checkbox\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['checkbox']\">\n        <nui-checkbox id=\"input-checkbox\"\n                    formControlName=\"checkbox\" required></nui-checkbox>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Checkbox Group\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['checkboxGroup']\">\n        <nui-checkbox-group id=\"input-checkboxGroup\"\n                            formControlName=\"checkboxGroup\"\n                            name=\"vegetable\">\n            <nui-checkbox *ngFor=\"let vegetable of vegetables;\"\n                        [value]=\"vegetable\">\n                {{vegetable}}\n            </nui-checkbox>\n        </nui-checkbox-group>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Radio Group\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['radioGroup']\">\n        <nui-radio-group id=\"input-radioGroup\"\n                        formControlName=\"radioGroup\"\n                        name=\"vegetable\" required>\n            <nui-radio *ngFor=\"let vegetable of vegetables\"\n                    [value]=\"vegetable\">\n                {{vegetable}}\n            </nui-radio>\n        </nui-radio-group>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Switch\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['switch']\">\n        <nui-switch id=\"input-switch\"\n                    formControlName=\"switch\"></nui-switch>\n        <nui-validation-message for=\"required\">\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Select\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['select']\">\n        <nui-select id=\"input-select\"\n                    formControlName=\"select\"\n                    [itemsSource]=\"vegetables\"></nui-select>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Combobox\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['combobox']\">\n        <nui-combobox id=\"input-combobox\"\n                    formControlName=\"combobox\"\n                    [itemsSource]=\"vegetables\"></nui-combobox>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Date Picker\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['datePicker']\">\n        <nui-date-picker id=\"input-datePicker\"\n                        formControlName=\"datePicker\"></nui-date-picker>\n        <nui-validation-message for=\"invalidFormat\" i18n>\n            The format is incorrect\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Time Picker\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['timePicker']\">\n        <nui-time-picker id=\"input-timePicker\"\n                        formControlName=\"timePicker\"></nui-time-picker>\n        <nui-validation-message for=\"required\" i18n>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field caption=\"Date Time Picker\"\n        hint=\"Some pretty long text with hint. Longer than previous even. This text should not ellipsify.\"\n        info=\"text\">\n        <nui-date-time-picker id=\"input-dateTimePicker\"\n                            formControlName=\"dateTimePicker\">\n        </nui-date-time-picker>\n        <nui-validation-message>\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n");

/***/ }),

/***/ "dcob":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/basic/basic-form-field.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormFieldBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldBasicExampleComponent", function() { return FormFieldBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");



class FormFieldBasicExampleComponent {
}
FormFieldBasicExampleComponent.ɵfac = function FormFieldBasicExampleComponent_Factory(t) { return new (t || FormFieldBasicExampleComponent)(); };
FormFieldBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldBasicExampleComponent, selectors: [["nui-form-field-basic-example"]], decls: 2, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_BASIC_FORM_FIELD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("This caption is generic for all form fields");
        i18n_0 = MSG_EXTERNAL_142576418225531130$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_BASIC_FORM_FIELD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟8cc9ef837083fdca9e3d36307bf3d6a709c3a4c5␟142576418225531130:This caption is generic for all form fields`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_BASIC_FORM_FIELD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some info to show");
        i18n_2 = MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_BASIC_FORM_FIELD_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟9242098ea6d730b60edbc034c251dad1f0096a6c␟8622149352614771940:Some info to show`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_BASIC_FORM_FIELD_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Hint may be useful");
        i18n_4 = MSG_EXTERNAL_2443417359056666139$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_BASIC_FORM_FIELD_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟b510f6f6db7d097c9ef1f462c80dace7dcaf7eed␟2443417359056666139:Hint may be useful`;
    } return [["caption", i18n_0, "info", i18n_2, "hint", i18n_4]]; }, template: function FormFieldBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "diQS":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/index.ts ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./form-field-docs/form-field-docs.example.component\";\nexport * from \"./basic/basic-form-field.example.component\";\nexport * from \"./basic-reactive/basic-reactive-form-field.example.component\";\nexport * from \"./in-form/in-form-form-field.example.component\";\nexport * from \"./complex/form-field-complex.example.component\";\nexport * from \"./nested-forms-as-component/nested-forms-as-component.example.component\";\nexport * from \"./form-field-visual-test/form-field-visual-test.component\";\nexport * from \"./dynamic-disabling/form-field-dynamic-disabling.example.component\";\nexport * from \"./form-field-test/form-field-test.component\";\nexport * from \"./html-as-info/html-as-info-in-form-field.example.component\";\nexport * from \"./form-field-validation-triggering/form-field-validation-triggering.example.component\";\n");

/***/ }),

/***/ "e4Ap":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/dynamic-disabling/form-field-dynamic-disabling.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-form-field-dynamic-disabling-example\",\n    templateUrl: \"./form-field-dynamic-disabling.example.component.html\",\n})\nexport class FormFieldDynamicDisablingExampleComponent implements OnInit {\n    public dynamicForm: FormGroup;\n    public visibleRadio: boolean;\n\n    constructor(private formBuilder: FormBuilder,\n                @Inject(ToastService) private toastService: ToastService) {\n    }\n\n    public ngOnInit() {\n        this.dynamicForm = this.formBuilder.group({\n            password: this.formBuilder.control(\"\", Validators.required),\n            confirmPassword: this.formBuilder.control({value: \"\", disabled: true}, Validators.required),\n        });\n    }\n\n    public onPasswordBlurred() {\n        if (this.dynamicForm.controls.password.valid) {\n            this.dynamicForm.controls.confirmPassword.enable();\n        } else {\n            this.dynamicForm.controls.confirmPassword.disable();\n        }\n    }\n\n    public toggleRadio() {\n        this.visibleRadio = !this.visibleRadio;\n    }\n}\n");

/***/ }),

/***/ "fWie":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic-reactive/basic-reactive-form-field.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-form-field-basic-reactive-example\",\n    templateUrl: \"./basic-reactive-form-field.example.component.html\",\n})\nexport class FormFieldBasicReactiveExampleComponent implements OnInit {\n    public reactiveForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {\n    }\n\n    public ngOnInit() {\n        this.reactiveForm = this.formBuilder.group({\n            email: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.email,\n            ]),\n        });\n    }\n}\n");

/***/ }),

/***/ "i2B5":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/basic-reactive/basic-reactive-form-field.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: FormFieldBasicReactiveExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldBasicReactiveExampleComponent", function() { return FormFieldBasicReactiveExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");






class FormFieldBasicReactiveExampleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.reactiveForm = this.formBuilder.group({
            email: this.formBuilder.control("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
            ]),
        });
    }
}
FormFieldBasicReactiveExampleComponent.ɵfac = function FormFieldBasicReactiveExampleComponent_Factory(t) { return new (t || FormFieldBasicReactiveExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FormFieldBasicReactiveExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormFieldBasicReactiveExampleComponent, selectors: [["nui-form-field-basic-reactive-example"]], decls: 7, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Email address");
        i18n_0 = MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟69b6ac577a19acc39fc0c22342092f327fff2529␟3967269098753656610:Email address`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_447729048517267806$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Try to change value or remove everything");
        i18n_2 = MSG_EXTERNAL_447729048517267806$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟173c8fd02aaf59e1c9fb0287d50cab2b920c67b2␟447729048517267806:Try to change value or remove everything`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" This is required ");
        i18n_4 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5065496809598164058$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" This should be a valid email ");
        i18n_6 = MSG_EXTERNAL_5065496809598164058$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_REACTIVE_BASIC_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟54904c876b39f85dadca37d4c85bd13d764e8602␟5065496809598164058: This should be a valid email `;
    } return [[3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, 3, "control"], ["formControlName", "email", "type", "email"], ["for", "required"], i18n_4, ["for", "email"], i18n_6]; }, template: function FormFieldBasicReactiveExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.reactiveForm.controls["email"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageComponent"]], encapsulation: 2 });


/***/ }),

/***/ "kbAz":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic-hint/form-field-hint.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-form-field class=\"d-block mb-4\"\n                caption=\"Form field with string hint\" i18n-caption\n                info=\"Some info to show\" i18n-info\n                hint=\"Hint may be useful Some pretty long text with hint.\">\n    <nui-textbox></nui-textbox>\n</nui-form-field>\n<nui-form-field caption=\"Form field with hint template\" i18n-caption\n                info=\"Some info to show\" i18n-info\n                [hintTemplate]=\"hintTemplate\">\n    <nui-textbox></nui-textbox>\n</nui-form-field>\n<ng-template #hintTemplate>\n    <ng-container i18n>Some pretty long text with hint. <a href=\"\" [routerLink]=\"\">Example link.</a></ng-container>\n</ng-template>\n");

/***/ }),

/***/ "o/AE":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic-hint/form-field-hint.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-form-field-hint-basic-example\",\n    templateUrl: \"./form-field-hint.example.component.html\",\n})\nexport class FormFieldBasicHintExampleComponent {\n\n}\n");

/***/ }),

/***/ "qA8t":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/complex/form-field-complex.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\">\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Password\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['password']\">\n        <nui-textbox formControlName=\"password\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Confirm Password\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['confirmPassword']\">\n        <nui-textbox formControlName=\"confirmPassword\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n<pre>fancyForm.valid = {{fancyForm.valid}}</pre>\n");

/***/ }),

/***/ "rvYP":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/basic-reactive/basic-reactive-form-field-custom-validation.example.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"reactiveForm\">\n    <nui-form-field i18n-caption caption=\"Email address\"\n                    i18n-hint hint=\"Try to change value or remove everything\"\n                    [control]=\"reactiveForm.controls['email']\">\n        <nui-textbox formControlName=\"email\" type=\"email\"></nui-textbox>\n\n        <nui-custom-validation-message for=\"required\">\n            <div class=\"nui-validation-message\" role=\"alert\">\n                <nui-icon icon=\"status_critical\" iconSize=\"small\" aria-hidden=\"true\"></nui-icon>\n                <span class=\"ml-1\"><em i18n>This is required</em></span>\n            </div>\n        </nui-custom-validation-message>\n\n        <nui-custom-validation-message for=\"email\">\n            <div class=\"nui-validation-message\" role=\"alert\">\n                <nui-icon icon=\"status_critical\" iconSize=\"small\" aria-hidden=\"true\"></nui-icon>\n                <span class=\"ml-1\"><em i18n>This should be a valid email</em></span>\n            </div>\n        </nui-custom-validation-message>\n    </nui-form-field>\n</form>\n");

/***/ }),

/***/ "wBE4":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/basic-hint/form-field-hint.example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FormFieldBasicHintExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldBasicHintExampleComponent", function() { return FormFieldBasicHintExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function FormFieldBasicHintExampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class FormFieldBasicHintExampleComponent {
}
FormFieldBasicHintExampleComponent.ɵfac = function FormFieldBasicHintExampleComponent_Factory(t) { return new (t || FormFieldBasicHintExampleComponent)(); };
FormFieldBasicHintExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormFieldBasicHintExampleComponent, selectors: [["nui-form-field-hint-basic-example"]], decls: 6, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9161992652492550990$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Form field with string hint");
        i18n_0 = MSG_EXTERNAL_9161992652492550990$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟45961792f778f07933bddd5422880217e7ca0617␟9161992652492550990:Form field with string hint`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some info to show");
        i18n_2 = MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟9242098ea6d730b60edbc034c251dad1f0096a6c␟8622149352614771940:Some info to show`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5568220659433218723$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Form field with hint template");
        i18n_4 = MSG_EXTERNAL_5568220659433218723$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟63113db505ffc382d737874d3e8810efcfbac339␟5568220659433218723:Form field with hint template`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Some info to show");
        i18n_6 = MSG_EXTERNAL_8622149352614771940$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟9242098ea6d730b60edbc034c251dad1f0096a6c␟8622149352614771940:Some info to show`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8722530415435566871$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Some pretty long text with hint. {$startLink}Example link.{$closeLink}", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
        i18n_8 = MSG_EXTERNAL_8722530415435566871$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_BASIC_HINT_FORM_FIELD_HINT_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟fb392594f59f6d91bba7011bdace78497d45e2c5␟8722530415435566871:Some pretty long text with hint. ${"\uFFFD#2\uFFFD"}:START_LINK:Example link.${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
    } return [["caption", i18n_0, "info", i18n_2, "hint", "Hint may be useful Some pretty long text with hint.", 1, "d-block", "mb-4"], ["caption", i18n_4, "info", i18n_6, 3, "hintTemplate"], ["hintTemplate", ""], i18n_8, ["href", "", 3, "routerLink"]]; }, template: function FormFieldBasicHintExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-textbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormFieldBasicHintExampleComponent_ng_template_4_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hintTemplate", _r0);
    } }, directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "xUJR":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/form-field/dynamic-disabling/form-field-dynamic-disabling.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"dynamicForm\">\n    <nui-form-field class=\"d-block mb-4\"\n                    caption=\"Password\" i18n-caption\n                    [control]=\"dynamicForm.controls['password']\"\n                    id=\"nui-form-field-dynamic-disabling\">\n        <nui-textbox id=\"nui-form-field-dynamic-disabling-password\" formControlName=\"password\"\n                    (textChange)=\"onPasswordBlurred()\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n    <nui-form-field caption=\"Confirm Password\" i18n-caption\n                    [control]=\"dynamicForm.controls['confirmPassword']\">\n        <nui-textbox id=\"nui-form-field-dynamic-disabling-confirm-password\"\n                    formControlName=\"confirmPassword\"></nui-textbox>\n        <nui-validation-message for=\"required\" i18n>\n            This is required\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n");

/***/ }),

/***/ "yt2M":
/*!************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/form-field/form-field-validation-triggering/form-field-validation-triggering.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: FormFieldValidationTriggeringxampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldValidationTriggeringxampleComponent", function() { return FormFieldValidationTriggeringxampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







class FormFieldValidationTriggeringxampleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.reactiveForm = this.formBuilder.group({
            email: this.formBuilder.control(""),
        });
    }
    onAddValidators() {
        var _a;
        (_a = this.reactiveForm.get("email")) === null || _a === void 0 ? void 0 : _a.setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
        ]);
    }
    onTouch() {
        var _a, _b, _c, _d, _e;
        if (((_a = this.reactiveForm.get("email")) === null || _a === void 0 ? void 0 : _a.value) === "" && ((_b = this.reactiveForm.get("email")) === null || _b === void 0 ? void 0 : _b.errors) === null && ((_c = this.reactiveForm.get("email")) === null || _c === void 0 ? void 0 : _c.validator)) {
            (_d = this.reactiveForm.get("email")) === null || _d === void 0 ? void 0 : _d.setErrors({ required: true });
        }
        (_e = this.reactiveForm.get("email")) === null || _e === void 0 ? void 0 : _e.markAsTouched();
    }
    onValueChange() {
        var _a, _b;
        const text = ((_a = this.reactiveForm.get("email")) === null || _a === void 0 ? void 0 : _a.value) === "" ? "some text here" : "";
        (_b = this.reactiveForm.get("email")) === null || _b === void 0 ? void 0 : _b.setValue(text);
    }
    onStatusChange() {
        var _a;
        const errors = this.reactiveForm.valid ? { hasError: true } : null;
        (_a = this.reactiveForm.get("email")) === null || _a === void 0 ? void 0 : _a.setErrors(errors);
    }
    onReset() {
        var _a, _b, _c;
        (_a = this.reactiveForm.get("email")) === null || _a === void 0 ? void 0 : _a.reset("");
        (_b = this.reactiveForm.get("email")) === null || _b === void 0 ? void 0 : _b.setErrors(null);
        (_c = this.reactiveForm.get("email")) === null || _c === void 0 ? void 0 : _c.setValidators(null);
    }
}
FormFieldValidationTriggeringxampleComponent.ɵfac = function FormFieldValidationTriggeringxampleComponent_Factory(t) { return new (t || FormFieldValidationTriggeringxampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
FormFieldValidationTriggeringxampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormFieldValidationTriggeringxampleComponent, selectors: [["nui-form-field-validation-triggering-example"]], decls: 18, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Email address");
        i18n_0 = MSG_EXTERNAL_3967269098753656610$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟69b6ac577a19acc39fc0c22342092f327fff2529␟3967269098753656610:Email address`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_447729048517267806$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Try to change value or remove everything");
        i18n_2 = MSG_EXTERNAL_447729048517267806$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟173c8fd02aaf59e1c9fb0287d50cab2b920c67b2␟447729048517267806:Try to change value or remove everything`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" This is required ");
        i18n_4 = MSG_EXTERNAL_5122856513661375976$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟13e0b6b3a912bf45c1bc602000243dc858c850c3␟5122856513661375976: This is required `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5065496809598164058$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" This should be a valid email ");
        i18n_6 = MSG_EXTERNAL_5065496809598164058$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟54904c876b39f85dadca37d4c85bd13d764e8602␟5065496809598164058: This should be a valid email `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4979991375359828435$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Add Validators");
        i18n_8 = MSG_EXTERNAL_4979991375359828435$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟5ab6bc51aa78906c963679059c874ab4f9e08b97␟4979991375359828435:Add Validators`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4895436907379943936$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Touch");
        i18n_10 = MSG_EXTERNAL_4895436907379943936$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟ca0592ee28617ea9ee60ca17d3c10b86b7d75d11␟4895436907379943936:Touch`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6060095287104451420$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Value Change");
        i18n_12 = MSG_EXTERNAL_6060095287104451420$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟51777f42cd10a2b21cbd8bcc80a890b788d17fb8␟6060095287104451420:Value Change`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_117661888608204797$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Status Change");
        i18n_14 = MSG_EXTERNAL_117661888608204797$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟1d2c127d28f070ed349b6878f7e501f2dad52fc4␟117661888608204797:Status Change`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7808756054397155068$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_17 = goog.getMsg("Reset");
        i18n_16 = MSG_EXTERNAL_7808756054397155068$$DEMO_SRC_COMPONENTS_DEMO_FORM_FIELD_FORM_FIELD_VALIDATION_TRIGGERING_FORM_FIELD_VALIDATION_TRIGGERING_EXAMPLE_COMPONENT_TS_17;
    }
    else {
        i18n_16 = $localize `:␟06c663bf1474713f57551123a46b34318543b67d␟7808756054397155068:Reset`;
    } return [[3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "email", "type", "email"], ["for", "required"], i18n_4, ["for", "email"], i18n_6, [1, "btn-group"], ["nui-button", "", "type", "button", 3, "click"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16]; }, template: function FormFieldValidationTriggeringxampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-validation-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-validation-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormFieldValidationTriggeringxampleComponent_Template_button_click_8_listener() { return ctx.onAddValidators(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormFieldValidationTriggeringxampleComponent_Template_button_click_10_listener() { return ctx.onTouch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormFieldValidationTriggeringxampleComponent_Template_button_click_12_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormFieldValidationTriggeringxampleComponent_Template_button_click_14_listener() { return ctx.onStatusChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormFieldValidationTriggeringxampleComponent_Template_button_click_16_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.reactiveForm.controls["email"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-form-field-form-field-module-es2015.js.map