(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-wizard-v2-wizard-module"],{

/***/ "/QbS":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: WizardRestoreStateExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardRestoreStateExampleComponent", function() { return WizardRestoreStateExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ "Y+p1");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/date-picker/date-picker.component */ "uIAT");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");

























const _c0 = ["dynamicTemplate1"];
const _c1 = ["dynamicTemplate2"];
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c16 = function () { return { form: "personDetails" }; };
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_0_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 44);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c16));
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c21 = function () { return { form: "organization" }; };
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_0_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_1_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_ng_container_2_Template, 1, 0, "ng-container", 44);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c21));
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const step_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r30.title);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 43);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r21);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_1_Template, 1, 1, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_container_3_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_ng_template_4_Template, 2, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r30.templateRef);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.resetStep(_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_2_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_ng_container_3_Template, 1, 0, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.completeWizard("contactDetails", _r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Finish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19);
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const form_r42 = ctx.form; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.validateStep(form_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c26 = function () { return ["personDetails"]; };
const _c27 = function () { return ["personDetails", "name"]; };
const _c28 = function () { return ["personDetails", "privacy"]; };
const _c29 = function () { return ["organization"]; };
const _c30 = function () { return ["organization", "title"]; };
const _c31 = function () { return ["organization", "date"]; };
const _c32 = function () { return ["organization", "createDynamicStep1"]; };
const _c33 = function () { return ["organization", "createDynamicStep2"]; };
const _c34 = function () { return ["contactDetails"]; };
const _c35 = function () { return ["contactDetails", "email"]; };
const _c36 = function () { return ["contactDetails", "options"]; };
function WizardRestoreStateExampleComponent_ng_template_0_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-horizontal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function WizardRestoreStateExampleComponent_ng_template_0_form_1_Template_nui_wizard_horizontal_finished_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.saveState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard-step-v2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-textbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_6_Template, 2, 0, "nui-validation-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Privacy Policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_10_Template, 2, 0, "nui-validation-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_11_Template, 2, 4, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-wizard-step-v2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-textbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_16_Template, 2, 0, "nui-validation-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-date-picker", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_19_Template, 2, 0, "nui-validation-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Add first step dynamically ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Add second step dynamically ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_26_Template, 3, 5, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_wizard_step_v2_27_Template, 5, 1, "nui-wizard-step-v2", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-wizard-step-v2", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_30_Template, 2, 0, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-form-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-textbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_34_Template, 2, 0, "nui-validation-message", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WizardRestoreStateExampleComponent_ng_template_0_form_1_nui_validation_message_35_Template, 2, 0, "nui-validation-message", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-select-v2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-select-v2-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Item 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-select-v2-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Item 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_42_Template, 6, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_43_Template, 2, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_45_Template, 2, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, WizardRestoreStateExampleComponent_ng_template_0_form_1_ng_template_47_Template, 2, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    let tmp_4_0 = null;
    let tmp_7_0 = null;
    let tmp_10_0 = null;
    let tmp_12_0 = null;
    let tmp_20_0 = null;
    let tmp_21_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r6.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c26)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c27)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c27))) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c28)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c28))) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c29)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c30)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c30))) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c31)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c31))) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c32)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c33)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.dynamicSteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c34)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c35)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_20_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c35))) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c35))) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r6.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c36)));
} }
function WizardRestoreStateExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardRestoreStateExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRestoreStateExampleComponent_ng_template_0_form_1_Template, 49, 40, "form", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form);
} }
function WizardRestoreStateExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_4_nui_message_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You are awesome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRestoreStateExampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_ng_template_4_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.awesome = !ctx_r52.awesome; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click if you're awesome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardRestoreStateExampleComponent_ng_template_4_nui_message_4_Template, 2, 0, "nui-message", 58);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.awesome);
} }
class WizardRestoreStateExampleComponent {
    constructor(formBuilder, dialogService, toastService) {
        this.formBuilder = formBuilder;
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.dynamicSteps = [];
        this.awesome = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        var _a, _b;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "personDetails": this.formBuilder.group({
                "name": [
                    "",
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)],
                ],
                "privacy": [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]],
            }),
            "organization": this.formBuilder.group({
                "title": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                "date": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                "createDynamicStep1": [false],
                "createDynamicStep2": [false],
            }),
            "contactDetails": this.formBuilder.group({
                "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                "options": [""],
            }),
        });
        (_a = this.form.get(["organization", "createDynamicStep1"])) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(changes => {
            this.handleDynamicSteps("I was created dynamically!", this.template1, changes);
        });
        (_b = this.form.get(["organization", "createDynamicStep2"])) === null || _b === void 0 ? void 0 : _b.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(changes => {
            this.handleDynamicSteps("Another dynamic step", this.template2, changes);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    openDialog(content) {
        this.activeDialog = this.dialogService.open(content, { size: "lg" });
    }
    closeDialog() {
        this.activeDialog.close();
    }
    saveState(state) {
        this.state = state;
    }
    completeWizard(formControlName, step) {
        this.validateStep(formControlName);
        if (!this.form.valid) {
            return;
        }
        step.completed = true;
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
        this.activeDialog.close();
    }
    resetStep(step) {
        step.reset();
    }
    validateStep(formGroup) {
        var _a;
        (_a = this.form.get(formGroup)) === null || _a === void 0 ? void 0 : _a.markAllAsTouched();
    }
    handleDynamicSteps(title, template, controlValue) {
        const newStep = { title: title, templateRef: template };
        const index = this.dynamicSteps.findIndex(step => lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(step, newStep));
        controlValue
            ? this.dynamicSteps.push(Object.assign({}, newStep))
            : this.dynamicSteps.splice(index, 1);
    }
}
WizardRestoreStateExampleComponent.ɵfac = function WizardRestoreStateExampleComponent_Factory(t) { return new (t || WizardRestoreStateExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ToastService"])); };
WizardRestoreStateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardRestoreStateExampleComponent, selectors: [["nui-wizard-restore-state-example"]], viewQuery: function WizardRestoreStateExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template2 = _t.first);
    } }, decls: 8, vars: 0, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7400666062557911013$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Open dialog wizard");
        i18n_2 = MSG_EXTERNAL_7400666062557911013$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8afaab79e8c7c81abcd01a1765efedf88025e83a␟7400666062557911013: Open dialog wizard`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7255713106739464219$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Restore Wizard State");
        i18n_4 = MSG_EXTERNAL_7255713106739464219$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟6bda9fb7e1e685cbeecae2b67224c3f5b392474f␟7255713106739464219:Restore Wizard State`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___7 = goog.getMsg("Name");
        i18n_6 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___7;
    }
    else {
        i18n_6 = $localize `:␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3076687427621376223$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___9 = goog.getMsg("Organization");
        i18n_8 = MSG_EXTERNAL_3076687427621376223$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___9;
    }
    else {
        i18n_8 = $localize `:␟f3a58c8a81b9ffda26a154eae25a422c9f7de37b␟3076687427621376223:Organization`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___11 = goog.getMsg("Email");
        i18n_10 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS___11;
    }
    else {
        i18n_10 = $localize `:␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____13 = goog.getMsg(" This is required ");
        i18n_12 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____13;
    }
    else {
        i18n_12 = $localize `:␟2ff6269296a5c01c535689ec579e8a0cdca6734c␟190263083628071291: This is required `;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____15 = goog.getMsg(" This is required ");
        i18n_14 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____15;
    }
    else {
        i18n_14 = $localize `:␟2ff6269296a5c01c535689ec579e8a0cdca6734c␟190263083628071291: This is required `;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____18 = goog.getMsg(" This is required ");
        i18n_17 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____18;
    }
    else {
        i18n_17 = $localize `:␟2ff6269296a5c01c535689ec579e8a0cdca6734c␟190263083628071291: This is required `;
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____20 = goog.getMsg(" This is required ");
        i18n_19 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____20;
    }
    else {
        i18n_19 = $localize `:␟2ff6269296a5c01c535689ec579e8a0cdca6734c␟190263083628071291: This is required `;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____23 = goog.getMsg(" This is required ");
        i18n_22 = MSG_EXTERNAL_190263083628071291$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____23;
    }
    else {
        i18n_22 = $localize `:␟2ff6269296a5c01c535689ec579e8a0cdca6734c␟190263083628071291: This is required `;
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8995796957675959197$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____25 = goog.getMsg(" Invalid email ");
        i18n_24 = MSG_EXTERNAL_8995796957675959197$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS____25;
    }
    else {
        i18n_24 = $localize `:␟d7d97d967e41cead564a8e382a5ecdff681ca273␟8995796957675959197: Invalid email `;
    } let i18n_37; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4112588876557774719$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__38 = goog.getMsg("Hi! I was created dynamically, because you've checked the checkbox on the previous step! Uncheck it to hide me!");
        i18n_37 = MSG_EXTERNAL_4112588876557774719$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__38;
    }
    else {
        i18n_37 = $localize `:␟8f3a5db3476b6ca7f7899c4fe83d8fe985878f13␟4112588876557774719:Hi! I was created dynamically, because you've checked the checkbox on the previous step! Uncheck it to hide me!`;
    } let i18n_39; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1948430504046934093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__40 = goog.getMsg("This is another template rendered dynamically!");
        i18n_39 = MSG_EXTERNAL_1948430504046934093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESTORE_STATE_WIZARD_RESTORE_STATE_EXAMPLE_COMPONENT_TS__40;
    }
    else {
        i18n_39 = $localize `:␟bea0d681251e36acc3cbf2d4062176cb960166f5␟1948430504046934093:This is another template rendered dynamically!`;
    } return [["dialogWizard", ""], ["dynamicTemplate1", ""], ["dynamicTemplate2", ""], ["nui-button", "", "type", "button", 3, "click"], i18n_2, ["title", i18n_4, 3, "closed"], ["class", "dialog-body compact-mode", 3, "formGroup", 4, "ngIf"], [1, "dialog-body", "compact-mode", 3, "formGroup"], [3, "state", "finished"], ["label", "Person Details", "formGroupName", "personDetails", 3, "stepControl"], [1, "px-5", "pb-5"], ["caption", i18n_6, 1, "d-block", "mb-4", "mt-4", 3, "control"], ["formControlName", "name"], ["for", "required", 4, "ngIf"], [3, "control"], ["formControlName", "privacy", 3, "value"], ["nuiWizardStepFooter", ""], ["label", "Organization", "formGroupName", "organization", 3, "stepControl"], [1, "p-5"], ["caption", i18n_8, 1, "d-block", "mb-4", 3, "control"], ["formControlName", "title"], ["caption", "Date", 1, "d-block", "mb-4", 3, "control"], ["formControlName", "date"], [1, "d-block", 3, "control"], ["formControlName", "createDynamicStep1", 3, "value"], ["formControlName", "createDynamicStep2", 3, "value"], [4, "ngFor", "ngForOf"], ["formGroupName", "contactDetails", 3, "stepControl"], ["finalStep", ""], ["nuiWizardStepLabel", ""], ["caption", i18n_10, 1, "d-block", "mb-4", "mt-4", 3, "control"], ["type", "email", "formControlName", "email"], ["for", "email", 4, "ngIf"], ["caption", "Select", 3, "control"], ["formControlName", "options"], ["value", "Item 1"], ["value", "Item 2"], ["wizardPrevious", ""], ["wizardNext", ""], ["wizardCancel", ""], ["for", "required"], i18n_12, i18n_14, [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], i18n_17, i18n_19, i18n_22, ["for", "email"], i18n_24, ["nui-button", "", "type", "button", "icon", "reset", 1, "btn-reset", 3, "click"], ["type", "button", "nui-button", "", "displayStyle", "primary", 3, "click"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"], ["type", "button", "nui-button", "", "displayStyle", "action", 3, "click"], i18n_37, i18n_39, ["type", "button", "nui-button", "", 1, "mb-3", 3, "click"], ["type", "ok", 4, "ngIf"], ["type", "ok"]]; }, template: function WizardRestoreStateExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRestoreStateExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRestoreStateExampleComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardRestoreStateExampleComponent_ng_template_4_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRestoreStateExampleComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.openDialog(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_7__["DialogHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_10__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_11__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_12__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxComponent"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_14__["WizardStepFooterDirective"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_15__["DatePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_16__["WizardStepLabelDirective"], _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_17__["SelectV2Component"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_18__["SelectV2OptionComponent"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_19__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_20__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_20__["WizardStepperNextDirective"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_21__["MessageComponent"]], styles: [".btn-reset[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1yZXN0b3JlLXN0YXRlLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6IndpemFyZC1yZXN0b3JlLXN0YXRlLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXJlc2V0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ "0dsp":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-remove-step/wizard-remove-step-example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n    AfterViewInit,\n    Component,\n    TemplateRef,\n    ViewChild,\n} from \"@angular/core\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-remove-step-example\",\n    templateUrl: \"./wizard-remove-step-example.component.html\",\n})\nexport class WizardRemoveStepExampleComponent implements AfterViewInit {\n    public steps: IWizardStepData[] = [];\n\n    @ViewChild(\"normalStep\") normalStep: TemplateRef<string>;\n    @ViewChild(\"wizard\") private wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public ngAfterViewInit(): void {\n        this.addStep(this.normalStep, $localize`Normal step`);\n    }\n\n    public addStep(templateRef: TemplateRef<string>, title?: string): void {\n        this.steps.push({ title: title ?? `Dynamic Step`, templateRef: templateRef });\n    }\n\n    public removeStep(index: number): void {\n        this.steps.splice(index, 1);\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "1sWM":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom-example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formGroup\">\n    <nui-wizard-custom #wizard>\n        <!-- Overview content-->\n        <ng-container summary>\n            <h2>Overview</h2>\n            <nui-progress [show]=\"true\"\n                          [stacked]=\"true\"\n                          [percent]=\"progress| number: '1.0-0'\"\n                          [showNumber]=\"true\">\n            </nui-progress>\n            <p>Step {{selectedIndex+1}} out of {{steps}} steps</p>\n            <p>Name: {{formGroup.get(['personDetails', 'name'])?.value || \"Not provided\"}}</p>\n            <p>Symptoms:\n                <ng-container [ngSwitch]=\"formGroup.get(['personDetails','symptoms'])?.value\">\n                    <ng-container *ngSwitchCase=\"true\">\n                        {{ formGroup.get(['diseaseDetails','date']).valid ? \"Since \" + formGroup.get(['diseaseDetails','date'])?.value.format('D MMM YYYY') : \"Yes\" }}\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"false\" i18n>No</ng-container>\n                    <ng-container *ngSwitchDefault i18n>Unknown</ng-container>\n                </ng-container>\n            </p>\n            <p>Email: {{formGroup.get(['contactDetails', 'email'])?.value || \"Not provided\"}}</p>\n        </ng-container>\n\n        <!--  content of the 1st step -->\n        <nui-wizard-step-v2 i18n-label label=\"Person Details\"\n                            formGroupName=\"personDetails\" [stepControl]=\"formGroup.get(['personDetails'])\">\n            <!-- content of the current step -->\n            <nui-form-field [control]=\"formGroup.get(['personDetails','name'])\" i18n-caption\n                            caption=\"Name\">\n                <nui-textbox formControlName=\"name\"></nui-textbox>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['personDetails','name'])?.errors?.required\"\n                                        i18n>\n                    This is required\n                </nui-validation-message>\n                <nui-validation-message for=\"minlength\"\n                                        *ngIf=\"formGroup.get(['personDetails','name'])?.errors?.minlength\"\n                                        i18n>\n                    Minimum length is 3\n                </nui-validation-message>\n            </nui-form-field>\n\n            <nui-form-field [control]=\"formGroup.get(['personDetails','symptoms'])\" i18n-caption\n                            caption=\"Do you have Covid ?\">\n                <nui-checkbox formControlName=\"symptoms\" [indeterminate]=\"formGroup.get(['personDetails','symptoms'])?.pristine\" i18n>\n                    Diseases symptoms\n                </nui-checkbox>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['personDetails','symptoms'])?.errors?.required\"\n                                        i18n>\n                    This is required\n                </nui-validation-message>\n            </nui-form-field>\n\n            <!-- content of the footer -->\n            <ng-template nuiWizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <!--  content of the optional step -->\n        <nui-wizard-step-v2 *ngIf=\"formGroup.get(['personDetails','symptoms'])?.value\"\n                            i18n-label label=\"Disease Details\"\n                            formGroupName=\"diseaseDetails\" [stepControl]=\"formGroup.get(['diseaseDetails'])\">\n            <ng-template nuiWizardStepLabel i18n>Disease Details for your Symptoms</ng-template>\n            <nui-form-field [control]=\"formGroup.get(['diseaseDetails','date'])\" i18n-caption\n                            caption=\"When did you noticed your first symptoms ?\">\n                <nui-date-picker formControlName=\"date\" i18n></nui-date-picker>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['diseaseDetails','date'])?.errors?.required\"\n                                        i18n>\n                    Date when disease manifested is required\n                </nui-validation-message>\n            </nui-form-field>\n            <ng-template nuiWizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <!--  content of the 2nd step -->\n        <nui-wizard-step-v2 i18n-label label=\"Contact Details\"\n                            formGroupName=\"contactDetails\" [stepControl]=\"formGroup.get(['contactDetails'])\">\n            <!-- content of the current step -->\n            <nui-form-field [control]=\"formGroup.get(['contactDetails','email'])\" i18n-caption\n                            caption=\"Email\">\n                <nui-textbox type=\"email\" formControlName=\"email\"></nui-textbox>\n                <nui-validation-message for=\"required\"\n                                        *ngIf=\"formGroup.get(['contactDetails','email'])?.errors?.required\"\n                                        i18n>\n                    This is required\n                </nui-validation-message>\n\n                <nui-validation-message for=\"email\"\n                                        *ngIf=\"formGroup.get(['contactDetails','email'])?.errors?.email\"\n                                        i18n>\n                    Invalid email\n                </nui-validation-message>\n            </nui-form-field>\n            <nui-form-field [control]=\"formGroup.get(['contactDetails','phone'])\" i18n-caption\n                            caption=\"Phone\">\n                <nui-textbox type=\"email\" formControlName=\"phone\"></nui-textbox>\n            </nui-form-field>\n\n            <!-- content of the footer -->\n            <ng-template nuiWizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <!--  content of the final step -->\n        <nui-wizard-step-v2 i18n-label label=\"Final step\">\n            <span i18n>Thanks for your feedback and take care!</span>\n            <ng-template nuiWizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <button type=\"button\" nui-button (click)=\"wizard.reset()\">Reset</button>\n            </ng-template>\n        </nui-wizard-step-v2>\n\n        <ng-template #wizardPrevious>\n            <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">Back</button>\n        </ng-template>\n\n        <ng-template #wizardNext>\n            <button nuiWizardNext\n                    type=\"button\"\n                    nui-button\n                    displayStyle=\"primary\"\n                    icon=\"caret-right\"\n                    iconRight=\"true\"\n                    (click)=\"validate(wizard.selected)\"\n            >Next\n            </button>\n        </ng-template>\n    </nui-wizard-custom>\n</form>\n");

/***/ }),

/***/ "2/6m":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizard>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <!-- content of the current step -->\n        <div class=\"p-5\">\n            <span i18n>This is the first step of our horizontal wizard</span>\n        </div>\n\n        <!-- content of the footer -->\n        <ng-template nuiWizardStepFooter>\n            <div class=\"custom-footer step_1\">\n                <button class=\"btn-custom\" nui-button type=\"button\" icon=\"add\" i18n>Custom button 1</button>\n                <span i18n>This is some custom content added in the footer for our first step</span>\n                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </div>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the final step -->\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <div class=\"p-5\">\n            <span i18n>We finally reached our last step!</span>\n        </div>\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template nuiWizardStepFooter>\n            <div class=\"custom-footer step_2\">\n                <span i18n>This is some custom content added in the footer for our second step</span>\n                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                <button nui-button type=\"button\" icon=\"remove\" i18n>Custom button 2</button>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                    Finish\n                </button>\n            </div>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardCancel>\n        <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n            Cancel\n        </button>\n    </ng-template>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n");

/***/ }),

/***/ "2HkB":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-tooltip/wizard-tooltip-example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WizardTooltipExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardTooltipExampleComponent", function() { return WizardTooltipExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");











const _c0 = ["wizardComponent"];
function WizardTooltipExampleComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardTooltipExampleComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardTooltipExampleComponent_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function WizardTooltipExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Without tooltip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardTooltipExampleComponent_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardTooltipExampleComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardTooltipExampleComponent_ng_template_12_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WizardTooltipExampleComponent_ng_template_12_ng_container_2_Template, 1, 0, "ng-container", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function WizardTooltipExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Custom Label template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardTooltipExampleComponent_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardTooltipExampleComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardTooltipExampleComponent_ng_template_18_ng_container_0_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardTooltipExampleComponent_ng_template_18_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardTooltipExampleComponent_ng_template_18_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function WizardTooltipExampleComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardTooltipExampleComponent_ng_template_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardTooltipExampleComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardTooltipExampleComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WizardTooltipExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardTooltipExampleComponent.ɵfac = function WizardTooltipExampleComponent_Factory(t) { return new (t || WizardTooltipExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
WizardTooltipExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WizardTooltipExampleComponent, selectors: [["nui-wizard-tooltip-example"]], viewQuery: function WizardTooltipExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 25, vars: 0, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1219326972886372646$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Very long header text. Very long header text");
        i18n_1 = MSG_EXTERNAL_1219326972886372646$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟839220c03b0954db5615f789e0fb64b805245c29␟1219326972886372646:Very long header text. Very long header text`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3114667934996381093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Step with long header text");
        i18n_3 = MSG_EXTERNAL_3114667934996381093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟7158cde00f54624da124f314489b3ba50911558e␟3114667934996381093:Step with long header text`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_896306602164895272$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Step without header tooltip");
        i18n_5 = MSG_EXTERNAL_896306602164895272$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟ff1916d214c01d65329ce71c6b7248163a222688␟896306602164895272:Step without header tooltip`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8904623462624064262$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Step with custom label in header");
        i18n_7 = MSG_EXTERNAL_8904623462624064262$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟52e096e32940c64e8e9716a80e9c71a6dedd9950␟8904623462624064262:Step with custom label in header`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5934323026342022997$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("Custom Label template");
        i18n_9 = MSG_EXTERNAL_5934323026342022997$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:␟3ce18a39b3d2dc5576f4928e6f1792d58ba2469e␟5934323026342022997:Custom Label template`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_672616534019620173$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__12 = goog.getMsg(" Finish ");
        i18n_11 = MSG_EXTERNAL_672616534019620173$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:␟fee31043e29b7abc612c7ca942e8a3f64f2ddcdf␟672616534019620173: Finish `;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__14 = goog.getMsg(" Cancel ");
        i18n_13 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__14;
    }
    else {
        i18n_13 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6168722822529020983$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__16 = goog.getMsg(" Back ");
        i18n_15 = MSG_EXTERNAL_6168722822529020983$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__16;
    }
    else {
        i18n_15 = $localize `:␟9dc973b1a2fa6ac0ac5a539eeb8a44c2f7ab8138␟6168722822529020983: Back `;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7200802776192640190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__18 = goog.getMsg(" Next ");
        i18n_17 = MSG_EXTERNAL_7200802776192640190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_TOOLTIP_WIZARD_TOOLTIP_EXAMPLE_COMPONENT_TS__18;
    }
    else {
        i18n_17 = $localize `:␟75db05d5e0bebee12a6a7b0e31ea09754d18d8fb␟7200802776192640190: Next `;
    } return [["wizardComponent", ""], ["label", i18n_1], [1, "p-5"], i18n_3, ["nuiWizardStepFooter", ""], ["nuiWizardStepLabel", ""], i18n_5, i18n_7, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["nuiTooltip", i18n_9], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_11, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_13, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], i18n_15, ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], i18n_17]; }, template: function WizardTooltipExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-wizard-step-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardTooltipExampleComponent_ng_template_6_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-wizard-step-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WizardTooltipExampleComponent_ng_template_8_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WizardTooltipExampleComponent_ng_template_12_Template, 3, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-wizard-step-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WizardTooltipExampleComponent_ng_template_14_Template, 3, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, WizardTooltipExampleComponent_ng_template_18_Template, 4, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, WizardTooltipExampleComponent_ng_template_19_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, WizardTooltipExampleComponent_ng_template_21_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, WizardTooltipExampleComponent_ng_template_23_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepFooterDirective"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_5__["WizardStepLabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_9__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_9__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "38M/":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-responsive-header/wizard-responsive-header-example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #nuiWizard>\n\n    <ng-container *ngFor=\"let step of steps; let i = index;\">\n        <nui-wizard-step-v2 i18n-label [label]=\"'Step ' + (i+1)\">\n            <div class=\"m-5\">\n                <span i18n>This is the step #{{i + 1}}</span>.\n            </div>\n            <ng-template nuiWizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                <ng-container *ngIf=\"i\">\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"i !== steps.length - 1\">\n                    <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                </ng-container>\n                <ng-container *ngIf=\"i === steps.length - 1\">\n                    <ng-container *ngTemplateOutlet=\"wizardFinish\"></ng-container>\n                </ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n    </ng-container>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\">\n            Next\n        </button>\n    </ng-template>\n\n    <ng-template #wizardCancel>\n        <button type=\"button\" nui-button displayStyle=\"action\" (click)=\"reset(); notifyOnCancel()\">\n            Cancel\n        </button>\n    </ng-template>\n\n    <ng-template #wizardFinish>\n        <button type=\"button\" nui-button displayStyle=\"primary\" (click)=\"notifyOnFinished()\">\n            Finish\n        </button>\n    </ng-template>\n</nui-wizard-horizontal>\n");

/***/ }),

/***/ "3Uzl":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-docs/wizard-docs.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Layout</h2>\n<h3>Horizontal Layout Wizard</h3>\n<p>\n    To use the horizontal wizard component, place a <code>nui-wizard-horizontal</code> element in your template and include one or more\n    <code><a href=\"../components/WizardStepComponent.html\" target=\"_blank\">nui-wizard-step-v2</a></code> elements as children of the\n    <code>nui-wizard-horizontal</code> element.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-horizontal-layout\" exampleTitle=\"Horizontal Layout Wizard\">\n    <nui-wizard-horizontal-example></nui-wizard-horizontal-example>\n</nui-example-wrapper>\n\n<h3>Wizard with confirmation dialog</h3>\n<p>\n    It may be a good idea to ask a user whether they really want to quit a wizard, e.g.if they decide to hit `Cancel` while some of the wizard step fields are already filled in. This example reflects this use case and shows how one can add a confirmation dialog to make a user decide whether they really want to quit or stay where they are and continue. \n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-with-confirmation-dialog-on-cancel\" exampleTitle=\"Wizard with confirmation dialog on cancel\">\n    <nui-wizard-with-confirmation-dialog-on-cancel-example></nui-wizard-with-confirmation-dialog-on-cancel-example>\n</nui-example-wrapper>\n\n<!--Will be updated in scope of the NUI-6099-->\n\n<!--<h3>Vertical Layout Wizard</h3>-->\n<!--<nui-example-wrapper filenamePrefix=\"wizard-vertical-layout\" exampleTitle=\"Vertical Layout Wizard\">-->\n<!--    <nui-wizard-vertical-example></nui-wizard-vertical-example>-->\n<!--</nui-example-wrapper>-->\n\n<h3>Usage with a dialog</h3>\n<p>\n    You can pass an existing wizard component as content of the dialog window. You should insert wizard component in dialog body.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-dialog\" exampleTitle=\"wizard in dialog\">\n    <nui-wizard-v2-dialog-example></nui-wizard-v2-dialog-example>\n</nui-example-wrapper>\n\n<h3>Busy step</h3>\n<p>You can make your step busy to forbid actions.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-busy\" exampleTitle=\"wizard step busy\">\n    <nui-wizard-v2-busy-example></nui-wizard-v2-busy-example>\n</nui-example-wrapper>\n\n<h3>Adding step dynamically</h3>\n<p>\n    You are able to add wizard steps dynamically. The dynamic step can be enabled/disabled programmatically \n    by clicking the \"Enable/Disable step w/button\" under the wizard.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-dynamic\" exampleTitle=\"wizard add dynamic step\">\n    <nui-wizard-dynamic-example></nui-wizard-dynamic-example>\n</nui-example-wrapper>\n\n<h3>Removing step</h3>\n<p>You are able to remove steps by index.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-remove-step\" exampleTitle=\"wizard remove step\">\n    <nui-wizard-remove-step-example></nui-wizard-remove-step-example>\n</nui-example-wrapper>\n\n<!--TODO Fix Custom Layout Wizard in scope NUI-6112 -->\n<!--<h3>Custom Layout Wizard</h3>-->\n<!--<nui-example-wrapper filenamePrefix=\"wizard-custom-layout\" exampleTitle=\"Custom Layout Wizard\">-->\n<!--    <nui-wizard-custom-example></nui-wizard-custom-example>-->\n<!--</nui-example-wrapper>-->\n\n<h3>Async Form Validation</h3>\n<p>\n    To handle async validation check 'PENDING' status of WizardV2Step stepControl\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-async-form-validation\" exampleTitle=\"Async Form Validation\">\n    <nui-wizard-async-form-validation-example></nui-wizard-async-form-validation-example>\n</nui-example-wrapper>\n\n<h3>Wizard with custom step state icons</h3>\n<p>\n    The wizard step can be in four different states: <code>initial</code>, <code>selected</code>, <code>completed</code>, and <code>error</code>.\n    For each of these steps there is a corresponding icon in the header for a certain step, which dynamically changes along with the step state change.\n    It is possible to override the default set of step state icons and their colors, and there are two ways of doing that.\n</p>\n<ol>\n    <li>Global</li>\n    <li>Step Specific</li>\n</ol>\n<p><u>Global</u></p>\n<p>\n    Nova provides you with the <code>WIZARD_CONFIG</code> injection token, which allows you to override the default wizard settings in a global context. For instance,\n    set the necessary icons settings with this token on a module level to allow all wizards within a module to receive the same icon configuration.\n</p>\n<p><u>Step Specific</u></p>\n<p>\n    Use the <code>stepIconsConfig</code> input of the <code>nui-wizard-step-v2</code> component to pass the step icons config specifically to this step. It will\n    override the global settings for this particular step.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-with-custom-icons-example\" exampleTitle=\"Wizard with custom icons\">\n    <nui-wizard-with-custom-icons-example></nui-wizard-with-custom-icons-example>\n</nui-example-wrapper>\n\n\n<h3>Custom footer</h3>\n<p>Customizing the footer layout content and style for each step is quite easy, as you can see in the example below:</p>\n<nui-example-wrapper filenamePrefix=\"wizard-custom-footer\" exampleTitle=\"Wizard with Custom Footer\">\n    <nui-wizard-custom-footer-example></nui-wizard-custom-footer-example>\n</nui-example-wrapper>\n\n<h3>Restore Wizard State</h3>\n<p>\n    To restore the wizard state you need to pass previous wizard steps as input. See the example below.\n    You can press the \"Reset step\" button on the last step in the wizard. After that close the dialog and open the wizard again. \n    You will see that all steps except the last are restored.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-restore-state\" exampleTitle=\"Restore Wizard State\">\n    <nui-wizard-restore-state-example></nui-wizard-restore-state-example>\n</nui-example-wrapper> \n\n<h3>Wizard Step Change Event Example</h3>\n<p>\n    You are able to subscribe when the selected step has changed.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-step-change-example\" exampleTitle=\"Wizard Step Change\">\n    <nui-wizard-step-change-example></nui-wizard-step-change-example>\n</nui-example-wrapper> \n\n<h3>Responsive Header</h3>\n<p>\n    This example shows how Wizard V2 handles the multiple steps. When there are a lot of steps in the wizard the\n    step header can overflow the headers container. If this happens, Wizard V2 switches to the responsive mode\n    and put the overflown items into overflow components, which indicate how many items are there hidden. You can try\n    navigating through the items and resizing the browser window to see how this responsive behavior works.\n</p>\n<nui-example-wrapper filenamePrefix=\"nui-wizard-responsive-header-example\" exampleTitle=\"Wizard Header Responsiveness\">\n    <nui-wizard-responsive-header-example></nui-wizard-responsive-header-example>\n</nui-example-wrapper>\n\n<h3>Wizard Tooltip</h3>\n<p>\n    We always show tooltip for string label. If you use custom template for label or don't want to see tooltip\n    you could define it inside content projection.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-tooltip-example\" exampleTitle=\"Wizard Tooltip\">\n    <nui-wizard-tooltip-example></nui-wizard-tooltip-example>\n</nui-example-wrapper>\n\n<h2>Keyboard interaction</h2>\n<ul>\n    <li><code>TAB/SHIFT+TAB</code> for focusing on the next/previous tabbable element</li>\n    <li><code>LEFT_ARROW/RIGHT_ARROW</code> for navigation on the previous/next step header</li>\n    <li><code>HOME/END</code> for focusing on the first/last step header</li>\n    <li><code>ENTER, SPACE</code> to select the step</li>\n</ul>\n");

/***/ }),

/***/ "4Nvg":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-with-custom-icons/wizard-with-custom-icons-example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: WizardWithCustomIconsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardWithCustomIconsExampleComponent", function() { return WizardWithCustomIconsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");









const _c0 = ["wizard"];
function WizardWithCustomIconsExampleComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardWithCustomIconsExampleComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardWithCustomIconsExampleComponent_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function WizardWithCustomIconsExampleComponent_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardWithCustomIconsExampleComponent_ng_template_11_ng_container_0_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardWithCustomIconsExampleComponent_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WizardWithCustomIconsExampleComponent_ng_template_11_ng_container_2_Template, 1, 0, "ng-container", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function WizardWithCustomIconsExampleComponent_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardWithCustomIconsExampleComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardWithCustomIconsExampleComponent_ng_template_16_ng_container_0_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardWithCustomIconsExampleComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardWithCustomIconsExampleComponent_ng_template_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function WizardWithCustomIconsExampleComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardWithCustomIconsExampleComponent_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardWithCustomIconsExampleComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardWithCustomIconsExampleComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WizardWithCustomIconsExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.secondStepIconConfig = {
            initial: {
                icon: "execute",
                iconColor: "primary-blue",
            },
            visited: {
                icon: "star-full",
                iconColor: "light-blue",
            },
            active: {
                icon: "star-full",
                iconColor: "orange",
            },
        };
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardWithCustomIconsExampleComponent.ɵfac = function WizardWithCustomIconsExampleComponent_Factory(t) { return new (t || WizardWithCustomIconsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
WizardWithCustomIconsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WizardWithCustomIconsExampleComponent, selectors: [["nui-wizard-with-custom-icons-example"]], viewQuery: function WizardWithCustomIconsExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["WIZARD_CONFIG"],
                useValue: {
                    stepState: {
                        active: {
                            icon: "email",
                            iconColor: "orange",
                        },
                    },
                },
            },
        ])], decls: 23, vars: 1, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("First step");
        i18n_1 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟9170783b7882b9260aea1a22ae5cf2407fa3e64f␟8373557087720397153:First step`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7728051243826368955$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("This is the first step of our wizard.");
        i18n_3 = MSG_EXTERNAL_7728051243826368955$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟e0f909cf592d5e3cd450632131cb9405d25851ad␟7728051243826368955:This is the first step of our wizard.`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Second step");
        i18n_5 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟b29f4fd21a1d511462918ede337438d03dab18e5␟2997617654392962041:Second step`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6343602341729018942$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("This is the second step of our wizard.");
        i18n_7 = MSG_EXTERNAL_6343602341729018942$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟a0270d2c34c58daea15a284234927d25b886fcac␟6343602341729018942:This is the second step of our wizard.`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_10 = goog.getMsg("Final step");
        i18n_9 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_10;
    }
    else {
        i18n_9 = $localize `:␟0de8f1dbd57123d294729d71fd278eaf936d4a2b␟5385737502167048240:Final step`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_12 = goog.getMsg("We finally reached our last step");
        i18n_11 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS_12;
    }
    else {
        i18n_11 = $localize `:␟414c233c4cbaae1a74728ed5d64304bbd36cdbe5␟7100330853882173244:We finally reached our last step`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_672616534019620173$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__14 = goog.getMsg(" Finish ");
        i18n_13 = MSG_EXTERNAL_672616534019620173$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__14;
    }
    else {
        i18n_13 = $localize `:␟fee31043e29b7abc612c7ca942e8a3f64f2ddcdf␟672616534019620173: Finish `;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__16 = goog.getMsg(" Cancel ");
        i18n_15 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__16;
    }
    else {
        i18n_15 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6168722822529020983$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__18 = goog.getMsg(" Back ");
        i18n_17 = MSG_EXTERNAL_6168722822529020983$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__18;
    }
    else {
        i18n_17 = $localize `:␟9dc973b1a2fa6ac0ac5a539eeb8a44c2f7ab8138␟6168722822529020983: Back `;
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3885497195825665706$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__20 = goog.getMsg("Next");
        i18n_19 = MSG_EXTERNAL_3885497195825665706$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CUSTOM_ICONS_WIZARD_WITH_CUSTOM_ICONS_EXAMPLE_COMPONENT_TS__20;
    }
    else {
        i18n_19 = $localize `:␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } return [["wizard", ""], ["label", i18n_1], [1, "p-5"], i18n_3, ["nuiWizardStepFooter", ""], ["label", i18n_5, 3, "stepStateConfig"], i18n_7, ["label", i18n_9], i18n_11, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_13, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_15, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], i18n_17, ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], i18n_19]; }, template: function WizardWithCustomIconsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-wizard-step-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardWithCustomIconsExampleComponent_ng_template_6_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-wizard-step-v2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WizardWithCustomIconsExampleComponent_ng_template_11_Template, 3, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-wizard-step-v2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WizardWithCustomIconsExampleComponent_ng_template_16_Template, 4, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WizardWithCustomIconsExampleComponent_ng_template_17_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, WizardWithCustomIconsExampleComponent_ng_template_19_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, WizardWithCustomIconsExampleComponent_ng_template_21_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepStateConfig", ctx.secondStepIconConfig);
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "5iu2":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.less ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\n    border: 1px orange dashed;\n}\n");

/***/ }),

/***/ "6Lmt":
/*!*********************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: WizardWithConfirmationDialogOnCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardWithConfirmationDialogOnCancelComponent", function() { return WizardWithConfirmationDialogOnCancelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");


















const _c0 = ["wizard"];
function WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c25 = function () { return { form: "personDetails" }; };
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_13_ng_container_0_Template, 1, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_13_ng_container_1_Template, 1, 0, "ng-container", 33);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c25));
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-validation-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c32 = function () { return { form: "contactDetails" }; };
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_ng_container_0_Template, 1, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_ng_container_1_Template, 1, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_ng_container_2_Template, 1, 0, "ng-container", 33);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c32));
} }
const _c33 = function () { return ["contactDetails", "phone"]; };
function WizardWithConfirmationDialogOnCancelComponent_form_0_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone: ", ctx_r9.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c33)).value, "");
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c34 = function () { return { formControlName: "confirm" }; };
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_ng_container_0_Template, 1, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_ng_container_1_Template, 1, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_ng_container_2_Template, 1, 0, "ng-container", 33);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r19)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c34));
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_44_Template_nui_dialog_header_closed_0_listener() { const close_r29 = ctx.close; return close_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_44_Template_button_click_5_listener() { const close_r29 = ctx.close; return close_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_44_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const close_r29 = ctx.close; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r32.resetWizard(); return close_r29(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](45); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.openConfirmationDialog(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const form_r36 = ctx.form; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.validate(form_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_52_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const formControlName_r39 = ctx.formControlName; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.onSubmit(formControlName_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c51 = function () { return ["personDetails"]; };
const _c52 = function () { return ["personDetails", "firstName"]; };
const _c53 = function () { return ["personDetails", "lastName"]; };
const _c54 = function () { return ["contactDetails"]; };
const _c55 = function () { return ["contactDetails", "email"]; };
const _c56 = function () { return ["confirm"]; };
const _c57 = function () { return ["confirm", "confirmed"]; };
function WizardWithConfirmationDialogOnCancelComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-horizontal", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-wizard-step-v2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Person Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-textbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_9_Template, 2, 0, "nui-validation-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-textbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_12_Template, 2, 0, "nui-validation-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_13_Template, 2, 4, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-wizard-step-v2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nui-textbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_20_Template, 2, 0, "nui-validation-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_21_Template, 2, 0, "nui-validation-message", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nui-textbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WizardWithConfirmationDialogOnCancelComponent_form_0_nui_validation_message_24_Template, 2, 0, "nui-validation-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_25_Template, 3, 5, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-wizard-step-v2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](29, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WizardWithConfirmationDialogOnCancelComponent_form_0_li_37_Template, 2, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](40, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nui-validation-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](42, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_43_Template, 3, 5, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_44_Template, 9, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_46_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_48_Template, 2, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_50_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, WizardWithConfirmationDialogOnCancelComponent_form_0_ng_template_52_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_3_0 = null;
    let tmp_5_0 = null;
    let tmp_8_0 = null;
    let tmp_9_0 = null;
    let tmp_11_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c51)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c52)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c52))) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c53)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c53))) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c54)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c55)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c55))) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c55))) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c33)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c33))) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c56)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("First name: ", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c52)).value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last name: ", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c53)).value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c55)).value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c33)).value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c57)));
} }
class WizardWithConfirmationDialogOnCancelComponent {
    constructor(dialogService, toastService, formBuilder, cd) {
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.cd = cd;
    }
    ngOnInit() {
        this.initForm();
    }
    // Open confirmation dialog
    openConfirmationDialog(content) {
        if (this.wizard.selectedIndex === 0) {
            this.resetWizard();
            return;
        }
        this.confirmationDialog = this.dialogService.open(content, {
            size: "sm",
            windowClass: "active-dialog",
        });
    }
    resetWizard() {
        this.wizard.reset();
    }
    // Validate form before changing selected step
    validate(formGroup) {
        var _a;
        (_a = this.form.get(formGroup)) === null || _a === void 0 ? void 0 : _a.markAllAsTouched();
    }
    onSubmit(formControlName) {
        this.validate(formControlName);
        if (!this.form.valid) {
            return;
        }
        this.toastService.info({
            title: $localize `Form was successfully submitted.`,
            options: {
                timeOut: 5000,
                extendedTimeOut: 2000,
            },
        });
        this.wizard.reset();
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "personDetails": this.formBuilder.group({
                "firstName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                "lastName": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            }),
            "contactDetails": this.formBuilder.group({
                "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                "phone": [""],
            }),
            "confirm": this.formBuilder.group({
                "confirmed": [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            }),
        });
    }
}
WizardWithConfirmationDialogOnCancelComponent.ɵfac = function WizardWithConfirmationDialogOnCancelComponent_Factory(t) { return new (t || WizardWithConfirmationDialogOnCancelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
WizardWithConfirmationDialogOnCancelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardWithConfirmationDialogOnCancelComponent, selectors: [["nui-wizard-with-confirmation-dialog-on-cancel-example"]], viewQuery: function WizardWithConfirmationDialogOnCancelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 1, vars: 1, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_605334371811086804$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__2 = goog.getMsg("Person Details");
        i18n_1 = MSG_EXTERNAL_605334371811086804$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__2;
    }
    else {
        i18n_1 = $localize `:␟5f59ef3c1033f37e26e42d4c34dbe3a6d59b26ca␟605334371811086804:Person Details`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5342432350421167093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__4 = goog.getMsg("First name");
        i18n_3 = MSG_EXTERNAL_5342432350421167093$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__4;
    }
    else {
        i18n_3 = $localize `:␟62b6c66981335ca6eecc36b331103c60f09d1026␟5342432350421167093:First name`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3586674587150281199$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__6 = goog.getMsg("Last name");
        i18n_5 = MSG_EXTERNAL_3586674587150281199$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__6;
    }
    else {
        i18n_5 = $localize `:␟6ce3dadf53dda1a1ab0c3167a8ed8dced471b0dc␟3586674587150281199:Last name`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5562779130499238810$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__8 = goog.getMsg("Contact Details");
        i18n_7 = MSG_EXTERNAL_5562779130499238810$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__8;
    }
    else {
        i18n_7 = $localize `:␟43161dab615da78790ff6e28f5730e88b96e21e0␟5562779130499238810:Contact Details`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__10 = goog.getMsg("Email");
        i18n_9 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3262236020277300799$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__12 = goog.getMsg("Phone");
        i18n_11 = MSG_EXTERNAL_3262236020277300799$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:␟6934d8edd276d59e050006fe91b695ebad0218f8␟3262236020277300799:Phone`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__14 = goog.getMsg("Final step");
        i18n_13 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__14;
    }
    else {
        i18n_13 = $localize `:␟0de8f1dbd57123d294729d71fd278eaf936d4a2b␟5385737502167048240:Final step`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_455020787256668145$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__16 = goog.getMsg("Confirm your data");
        i18n_15 = MSG_EXTERNAL_455020787256668145$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__16;
    }
    else {
        i18n_15 = $localize `:␟c148bca0576dffec95f7d4d4bc2376f0e760baf2␟455020787256668145:Confirm your data`;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7762506485477255385$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__18 = goog.getMsg(" Confirm ");
        i18n_17 = MSG_EXTERNAL_7762506485477255385$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__18;
    }
    else {
        i18n_17 = $localize `:␟dbc462c50706e4bcdfd251b64c9f559dfe142a9e␟7762506485477255385: Confirm `;
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5827614299366867402$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__20 = goog.getMsg(" Confirmation is required ");
        i18n_19 = MSG_EXTERNAL_5827614299366867402$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS__20;
    }
    else {
        i18n_19 = $localize `:␟b3f398371e896de57bfb1f075f04818d79a22a44␟5827614299366867402: Confirmation is required `;
    } let i18n_21; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2556711619852492075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___22 = goog.getMsg(" First name is required ");
        i18n_21 = MSG_EXTERNAL_2556711619852492075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___22;
    }
    else {
        i18n_21 = $localize `:␟e2de34963876cb602b9e8630941025dd28ab3cdc␟2556711619852492075: First name is required `;
    } let i18n_23; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_359617289371072842$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___24 = goog.getMsg(" Last name is required ");
        i18n_23 = MSG_EXTERNAL_359617289371072842$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___24;
    }
    else {
        i18n_23 = $localize `:␟5e960c0ab227d83e13092eb3d686d4152c0dfd00␟359617289371072842: Last name is required `;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___27 = goog.getMsg(" This is required ");
        i18n_26 = MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___27;
    }
    else {
        i18n_26 = $localize `:␟f0cfc81a3cf98503602b26d160e924777f03cbaf␟3208836223768257750: This is required `;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4650401672807616233$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___29 = goog.getMsg(" Invalid email ");
        i18n_28 = MSG_EXTERNAL_4650401672807616233$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___29;
    }
    else {
        i18n_28 = $localize `:␟8a35a7091a6881fe2b61c13ce6c4c3fd6cbd797d␟4650401672807616233: Invalid email `;
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___31 = goog.getMsg(" This is required ");
        i18n_30 = MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___31;
    }
    else {
        i18n_30 = $localize `:␟f0cfc81a3cf98503602b26d160e924777f03cbaf␟3208836223768257750: This is required `;
    } let i18n_35; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_850755304192568180$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___36 = goog.getMsg("Really want to leave?");
        i18n_35 = MSG_EXTERNAL_850755304192568180$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___36;
    }
    else {
        i18n_35 = $localize `:␟a965396984be88f67efd42c6f0a03a9935eff37e␟850755304192568180:Really want to leave?`;
    } let i18n_37; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5521905646265014326$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___38 = goog.getMsg(" There is at least one accomplished step within this wizard. Are you sure you want to leave? ");
        i18n_37 = MSG_EXTERNAL_5521905646265014326$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___38;
    }
    else {
        i18n_37 = $localize `:␟874b5cac0dde3a435b0ab7251120056d9a94d568␟5521905646265014326: There is at least one accomplished step within this wizard. Are you sure you want to leave? `;
    } let i18n_39; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___40 = goog.getMsg(" Cancel ");
        i18n_39 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___40;
    }
    else {
        i18n_39 = $localize `:␟6a3777f913cf3f288664f0632b9f24794fdcc24e␟6991067716289442185: Cancel `;
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7936525963584982643$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___42 = goog.getMsg(" Leave ");
        i18n_41 = MSG_EXTERNAL_7936525963584982643$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___42;
    }
    else {
        i18n_41 = $localize `:␟4e3c0a1ee48cbaee2bc8ba3fbbbe4f7382c7b3c1␟7936525963584982643: Leave `;
    } let i18n_43; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2396240877469461361$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___44 = goog.getMsg(" Cancel ");
        i18n_43 = MSG_EXTERNAL_2396240877469461361$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___44;
    }
    else {
        i18n_43 = $localize `:␟fb4d1e0ce01940692d80037663169dffea9bf880␟2396240877469461361: Cancel `;
    } let i18n_45; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_454897612769798863$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___46 = goog.getMsg(" Back ");
        i18n_45 = MSG_EXTERNAL_454897612769798863$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___46;
    }
    else {
        i18n_45 = $localize `:␟07cc110238d037fe80098e0f9b7f162124eb0a11␟454897612769798863: Back `;
    } let i18n_47; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3885497195825665706$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___48 = goog.getMsg("Next");
        i18n_47 = MSG_EXTERNAL_3885497195825665706$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___48;
    }
    else {
        i18n_47 = $localize `:␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_49; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___50 = goog.getMsg("Submit");
        i18n_49 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_WIZARD_WITH_CONFIRMATION_DIALOG_ON_CANCEL_COMPONENT_TS___50;
    }
    else {
        i18n_49 = $localize `:␟71c77bb8cecdf11ec3eead24dd1ba506573fa9cd␟935187492052582731:Submit`;
    } return [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["wizard", ""], ["label", i18n_1, "formGroupName", "personDetails", 3, "stepControl"], [1, "step-content-wrapper"], ["caption", i18n_3, 3, "control"], ["formControlName", "firstName", "customBoxWidth", "150px"], ["for", "required", 4, "ngIf"], ["caption", i18n_5, 3, "control"], ["formControlName", "lastName", "customBoxWidth", "150px"], ["nuiWizardStepFooter", ""], ["label", i18n_7, "formGroupName", "contactDetails", 3, "stepControl"], ["caption", i18n_9, 3, "control"], ["type", "email", "formControlName", "email", "customBoxWidth", "150px"], ["for", "email", 4, "ngIf"], ["caption", i18n_11, 3, "control"], ["type", "phone", "formControlName", "phone", "customBoxWidth", "150px"], ["label", i18n_13, "formGroupName", "confirm", 3, "stepControl"], i18n_15, [4, "ngIf"], [3, "control"], ["formControlName", "confirmed", "required", ""], i18n_17, ["for", "required"], i18n_19, ["confirmDialog", ""], ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], ["wizardSubmit", ""], i18n_21, i18n_23, [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], i18n_26, ["for", "email"], i18n_28, i18n_30, ["title", i18n_35, 3, "closed"], [1, "dialog-body"], i18n_37, ["nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_39, ["nui-button", "", "type", "button", 3, "click"], i18n_41, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_43, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], i18n_45, ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"], i18n_47, ["type", "button", "nui-button", "", "displayStyle", "primary", 3, "click"], i18n_49]; }, template: function WizardWithConfirmationDialogOnCancelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardWithConfirmationDialogOnCancelComponent_form_0_Template, 54, 35, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_6__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_7__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_8__["WizardStepFooterDirective"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_10__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_11__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_12__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_14__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_14__["WizardStepperNextDirective"]], styles: [".step-content-wrapper[_ngcontent-%COMP%] {\n  padding: 0 15px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC13aXRoLWNvbmZpcm1hdGlvbi1kaWFsb2ctb24tY2FuY2VsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQUE7QUFESiIsImZpbGUiOiJ3aXphcmQtd2l0aC1jb25maXJtYXRpb24tZGlhbG9nLW9uLWNhbmNlbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXNwYWNlc1wiO1xuXG4uc3RlcC1jb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgQG51aS1zcGFjZS1tZCBAbnVpLXNwYWNlLW1kO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "6e2i":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dynamic/wizard-dynamic.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, Component, TemplateRef, ViewChild } from \"@angular/core\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-dynamic-example\",\n    templateUrl: \"./wizard-dynamic.example.component.html\",\n})\nexport class WizardDynamicExampleComponent implements AfterViewInit {\n    public enableDynamicStepWithButton = false;\n    public steps: IWizardStepData[] = [];\n\n    @ViewChild(\"dynamicTemplate1\") dynamicTemplate1: TemplateRef<string>;\n    @ViewChild(\"wizardComponent\") private wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public ngAfterViewInit(): void {\n        this.addStep(this.dynamicTemplate1, $localize`My first dynamic step`);\n    }\n\n    public toggleStep(): void {\n        this.enableDynamicStepWithButton = !this.enableDynamicStepWithButton;\n    }\n\n    public addStep(templateRef: TemplateRef<string>, title?: string): void {\n        this.steps.push({ title: title ?? `Dynamic Step ${this.steps.length + 1}`, templateRef: templateRef });\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "A7H6":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-vertical-layout/wizard-vertical-example.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-vertical>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <!-- content of the current step -->\n        <span i18n>This is the first step of our vertical wizard.</span>\n\n        <!-- content of the footer -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the 2nd step -->\n    <nui-wizard-step-v2 i18n-label label=\"Second step\">\n        <!-- content of the current step -->\n        <span i18n>This is the second step of our vertical wizard.</span>\n\n        <!-- content of the footer -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the final step -->\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <span i18n>We finally reached our last step!</span>\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-vertical>\n");

/***/ }),

/***/ "A8yM":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #dialogWizard>\n    <div nuiResizeObserver #dialog>\n        <div nui-busy [busy]=\"busy\">\n            <div class=\"busy-content\">\n                <nui-dialog-header i18n-title title=\"Wizard dialog\" (closed)=\"closeDialog()\"></nui-dialog-header>\n                <div class=\"dialog-body compact-mode\">\n                    <nui-wizard-horizontal #wizard>\n\n                        <!--  This defines the first step of the wizard -->\n                        <nui-wizard-step-v2>\n                            <!-- This defines the header label of this wizard step  -->\n                            <ng-template nuiWizardStepLabel>Completed</ng-template>\n\n                            <!-- the current step content -->\n                            <div class=\"step-content-wrapper\">\n                                <span i18n>This is the first step of our horizontal wizard.</span>\n                            </div>\n                            <!-- content of the footer -->\n                            <ng-template nuiWizardStepFooter>\n                                <button class=\"btn-busy\" type=\"button\" nui-button icon=\"reload\" (click)=\"toggleBusy()\">\n                                    Toggle busy\n                                </button>\n                                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                            </ng-template>\n                        </nui-wizard-step-v2>\n\n                        <nui-wizard-step-v2>\n                            <ng-template nuiWizardStepLabel>Active</ng-template>\n\n                            <div class=\"step-content-wrapper\">\n                                <span i18n>This is the second step of our horizontal wizard.</span>\n                            </div>\n                            <ng-template nuiWizardStepFooter>\n                                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                            </ng-template>\n                        </nui-wizard-step-v2>\n\n                        <nui-wizard-step-v2>\n                            <ng-template nuiWizardStepLabel>Not visited</ng-template>\n\n                            <div class=\"step-content-wrapper\">\n                                <span i18n>This is the third step of our horizontal wizard</span>\n                            </div>\n\n                            <ng-template nuiWizardStepFooter>\n                                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                            </ng-template>\n                        </nui-wizard-step-v2>\n\n                        <nui-wizard-step-v2>\n                            <ng-template nuiWizardStepLabel>Summary</ng-template>\n                            <div class=\"step-content-wrapper\">\n                                <span i18n>We finally reached our last step</span>\n                            </div>\n                            <ng-template nuiWizardStepFooter>\n                                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                                <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard(); overlay.hide(); closeDialog()\" i18n>\n                                    Finish\n                                </button>\n                            </ng-template>\n                        </nui-wizard-step-v2>\n\n                        <ng-template #wizardCancel>\n                            <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"openConfirmationOverlay(overlay, wizard)\">\n                                Cancel\n                            </button>\n                        </ng-template>\n\n                        <ng-template #wizardPrevious>\n                            <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                                Back\n                            </button>\n                        </ng-template>\n\n                        <ng-template #wizardNext>\n                            <button nuiWizardNext\n                                    type=\"button\"\n                                    nui-button\n                                    displayStyle=\"primary\"\n                                    icon=\"caret-right\"\n                                    iconRight=\"true\"\n                            >Next</button>\n                        </ng-template>\n                    </nui-wizard-horizontal>\n                </div>\n            </div>\n            <nui-spinner size=\"large\" i18n-message message=\"Data is loading from remote server...\"></nui-spinner>\n        </div>\n    </div>\n    <nui-overlay #overlay [toggleReference]=\"dialog\">\n        <div class=\"overlay-class\">\n            <div class=\"overlay-content\">\n                <div class=\"header\">\n                    Really want to leave?\n                </div>\n                <div class=\"body\">\n                    <p i18n>\n                        There is at least one accomplished step within this wizard.\n                        Are you sure you want to leave?\n                    </p>\n                </div>\n                <div class=\"footer\">\n                    <button nui-button displayStyle=\"action\" type=\"button\" (click)=\"overlay.hide()\">Cancel</button>\n                    <button nui-button type=\"button\" (click)=\"overlay.hide(); closeDialog()\">Leave</button>\n                </div>\n            </div>\n        </div>\n    </nui-overlay>\n</ng-template>\n\n<button nui-button type=\"button\"\n        (click)=\"openDialog(dialogWizard)\"\n        i18n>\n    Open dialog wizard\n</button>\n");

/***/ }),

/***/ "Cu7f":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-vertical-layout/wizard-vertical-example.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n@Component({\n    selector: \"nui-wizard-vertical-example\",\n    templateUrl: \"./wizard-vertical-example.component.html\",\n})\nexport class WizardVerticalExampleComponent { }\n");

/***/ }),

/***/ "Dz05":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-horizontal-layout/wizard-horizontal-example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-horizontal-example\",\n    templateUrl: \"./wizard-horizontal-example.component.html\",\n})\nexport class WizardHorizontalExampleComponent {\n    @ViewChild(\"wizard\") private wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "ErOQ":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nui-busy [busy]=\"busy\" class=\"example-container\">\n    <div class=\"busy-content\">\n        <nui-wizard-horizontal #wizard>\n\n            <!--  content of the 1st step -->\n            <nui-wizard-step-v2>\n                <!-- define the label which is displayed on the header stepper -->\n                <ng-template nuiWizardStepLabel>Make step busy</ng-template>\n\n                <!-- content of the current step -->\n                <p class=\"m-5\" i18n>Welcome!</p>\n\n                <!-- content of the footer -->\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <!--  content of the 2nd step -->\n            <nui-wizard-step-v2>\n                <!-- define the label which is displayed on the header stepper -->\n                <ng-template nuiWizardStepLabel>Final</ng-template>\n\n                <!-- content of the current step -->\n                <div class=\"p-5\">\n                    <nui-checkbox name=\"nui-demo-checkbox\"\n                                i18n-title\n                                title=\"Check box with help text\"\n                                i18n-hint\n                                hint=\"This is some help text\"\n                                required=\"true\"\n                                [value]=\"false\"\n                                i18n>Check box with help text\n                    </nui-checkbox>\n                    <nui-checkbox name=\"nui-demo-checkbox-plain\"\n                                [checked]=\"true\"\n                                [value]=\"false\"\n                                i18n>Plain checkbox\n                    </nui-checkbox>\n                </div>\n\n                <!-- content of the footer -->\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                        Finish\n                    </button>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <ng-template #wizardCancel>\n                <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n                    Cancel\n                </button>\n            </ng-template>\n\n            <ng-template #wizardPrevious>\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Back\n                </button>\n            </ng-template>\n\n            <ng-template #wizardNext>\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                >Next</button>\n            </ng-template>\n        </nui-wizard-horizontal>\n    </div>\n    <nui-spinner id=\"nui-demo-spinner\" size=\"large\" i18n-message message=\"Data is loading from remote server...\"></nui-spinner>\n</div>\n\n<button nui-button type=\"button\" id=\"nui-demo-busy-button\" (click)=\"toggleStepBusy()\" i18n>Toggle busy on current step</button>\n");

/***/ }),

/***/ "EyYP":
/*!*************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard.module.ts ***!
  \*************************************************************/
/*! exports provided: WizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardModule", function() { return WizardModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "wZEo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["WizardDocsComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
];
class WizardModule {
}
WizardModule.ɵfac = function WizardModule_Factory(t) { return new (t || WizardModule)(); };
WizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WizardModule });
WizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("Ptpp"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiWizardV2Module"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSpinnerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiBusyModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiProgressModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectV2Module"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiOverlayModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTooltipModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WizardModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["WizardDocsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardHorizontalExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardVerticalExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardDialogExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardBusyExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomFooterExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardDynamicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardRemoveStepExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardAsyncFormValidationExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardWithCustomIconsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardRestoreStateExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardStepChangeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardResponsiveHeaderExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardWithConfirmationDialogOnCancelComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["WizardTooltipExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiWizardV2Module"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSpinnerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiBusyModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiProgressModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectV2Module"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiOverlayModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTooltipModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "Fn2p":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-remove-step/wizard-remove-step-example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WizardRemoveStepExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardRemoveStepExampleComponent", function() { return WizardRemoveStepExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */ "ShSb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");












const _c0 = ["normalStep"];
const _c1 = ["wizard"];
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const step_r7 = ctx_r13.$implicit;
    const i_r8 = ctx_r13.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r7.title + " (" + i_r8 + ")");
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_1_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_2_Template, 3, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_3_Template, 3, 0, "ng-container", 14);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const isLast_r9 = ctx_r22.last;
    const i_r8 = ctx_r22.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r9 || i_r8 >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r9 && i_r8 >= 1);
} }
function WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_1_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_ng_template_3_Template, 4, 4, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r7.templateRef);
} }
function WizardRemoveStepExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardRemoveStepExampleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRemoveStepExampleComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx_r23.addStep(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add dynamic step w/template ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c12 = function () { return { "font-weight": "bold" }; };
class WizardRemoveStepExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.steps = [];
    }
    ngAfterViewInit() {
        this.addStep(this.normalStep, $localize `Normal step`);
    }
    addStep(templateRef, title) {
        this.steps.push({ title: title !== null && title !== void 0 ? title : `Dynamic Step`, templateRef: templateRef });
    }
    removeStep(index) {
        this.steps.splice(index, 1);
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardRemoveStepExampleComponent.ɵfac = function WizardRemoveStepExampleComponent_Factory(t) { return new (t || WizardRemoveStepExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
WizardRemoveStepExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardRemoveStepExampleComponent, selectors: [["nui-wizard-remove-step-example"]], viewQuery: function WizardRemoveStepExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.normalStep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 16, vars: 5, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1726131819944962604$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Remove step dynamically ");
        i18n_2 = MSG_EXTERNAL_1726131819944962604$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟0204750c4ece2a4fc149e671dd2c3ba82298f9ac␟1726131819944962604: Remove step dynamically `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS____5 = goog.getMsg(" Cancel ");
        i18n_4 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS____5;
    }
    else {
        i18n_4 = $localize `:␟6a3777f913cf3f288664f0632b9f24794fdcc24e␟6991067716289442185: Cancel `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS____7 = goog.getMsg(" Finish ");
        i18n_6 = MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS____7;
    }
    else {
        i18n_6 = $localize `:␟1f581bf7024667635d7fab3a751333a71fd83422␟5996951212305115011: Finish `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !");
        i18n_8 = MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟256cc8ce36c7ece03c014ef84736f10288179f3f␟2900895229541262648:Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Hi! You can add next step dynamically");
        i18n_10 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_REMOVE_STEP_WIZARD_REMOVE_STEP_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟9dfa7b9ebe128bde7cab896a85986ebb450f99f7␟4074000604906025359:Hi! You can add next step dynamically`;
    } return [["wizard", ""], [4, "ngFor", "ngForOf"], ["dynamicStep", ""], ["normalStep", ""], [1, "d-flex"], [1, ""], [1, "nui-textbox--bold", 3, "ngStyle"], [3, "minValue"], ["number", ""], ["displayStyle", "destructive", "nui-button", "", "type", "button", 1, "ml-3", "h-25", "align-self-end", 3, "disabled", "click"], i18n_2, ["nuiWizardStepLabel", ""], [4, "ngTemplateOutlet"], ["nuiWizardStepFooter", ""], [4, "ngIf"], ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_4, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_6, [1, "m-5"], i18n_8, [1, "p-5"], i18n_10, ["nui-button", "", "type", "button", 3, "click"]]; }, template: function WizardRemoveStepExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardRemoveStepExampleComponent_nui_wizard_step_v2_2_Template, 4, 1, "nui-wizard-step-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardRemoveStepExampleComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardRemoveStepExampleComponent_ng_template_5_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Step index to remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-textbox-number", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardRemoveStepExampleComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.removeStep(+_r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("minValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", +_r6.value < 1);
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_4__["TextboxNumberComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_6__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_7__["WizardStepLabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_8__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_9__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_9__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "JqMI":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-horizontal-layout/wizard-horizontal-example.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: WizardHorizontalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardHorizontalExampleComponent", function() { return WizardHorizontalExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");









const _c0 = ["wizard"];
function WizardHorizontalExampleComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardHorizontalExampleComponent_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardHorizontalExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardHorizontalExampleComponent_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardHorizontalExampleComponent_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 10);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function WizardHorizontalExampleComponent_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardHorizontalExampleComponent_ng_template_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardHorizontalExampleComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardHorizontalExampleComponent_ng_template_11_ng_container_0_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardHorizontalExampleComponent_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardHorizontalExampleComponent_ng_template_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function WizardHorizontalExampleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardHorizontalExampleComponent_ng_template_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardHorizontalExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardHorizontalExampleComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WizardHorizontalExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardHorizontalExampleComponent.ɵfac = function WizardHorizontalExampleComponent_Factory(t) { return new (t || WizardHorizontalExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
WizardHorizontalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WizardHorizontalExampleComponent, selectors: [["nui-wizard-horizontal-example"]], viewQuery: function WizardHorizontalExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 18, vars: 0, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("First step");
        i18n_1 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟9170783b7882b9260aea1a22ae5cf2407fa3e64f␟8373557087720397153:First step`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("This is the first step of our horizontal wizard");
        i18n_3 = MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟c9bf00bfbb1b8a6e46eb4e43075cf64abecea307␟8675920705208401217:This is the first step of our horizontal wizard`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Final step");
        i18n_5 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟0de8f1dbd57123d294729d71fd278eaf936d4a2b␟5385737502167048240:Final step`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8844434073042428468$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("We finally reached our last step!");
        i18n_7 = MSG_EXTERNAL_8844434073042428468$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟4b91d8fe7d2e6d8e08adecc9623459b2df8b1e72␟8844434073042428468:We finally reached our last step!`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_672616534019620173$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS__10 = goog.getMsg(" Finish ");
        i18n_9 = MSG_EXTERNAL_672616534019620173$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:␟fee31043e29b7abc612c7ca942e8a3f64f2ddcdf␟672616534019620173: Finish `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS__12 = goog.getMsg(" Cancel ");
        i18n_11 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_HORIZONTAL_LAYOUT_WIZARD_HORIZONTAL_EXAMPLE_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } return [["wizard", ""], ["label", i18n_1], [1, "p-5"], i18n_3, ["nuiWizardStepFooter", ""], ["label", i18n_5], i18n_7, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_9, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_11, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]]; }, template: function WizardHorizontalExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-wizard-step-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardHorizontalExampleComponent_ng_template_6_Template, 2, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-wizard-step-v2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WizardHorizontalExampleComponent_ng_template_11_Template, 4, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WizardHorizontalExampleComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WizardHorizontalExampleComponent_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WizardHorizontalExampleComponent_ng_template_16_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "KD0g":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: WizardBusyExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardBusyExampleComponent", function() { return WizardBusyExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");













const _c0 = ["wizard"];
function WizardBusyExampleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Make step busy");
} }
function WizardBusyExampleComponent_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardBusyExampleComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardBusyExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardBusyExampleComponent_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardBusyExampleComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 18);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r9);
} }
function WizardBusyExampleComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Final");
} }
function WizardBusyExampleComponent_ng_template_16_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardBusyExampleComponent_ng_template_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardBusyExampleComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardBusyExampleComponent_ng_template_16_ng_container_0_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WizardBusyExampleComponent_ng_template_16_ng_container_1_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardBusyExampleComponent_ng_template_16_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function WizardBusyExampleComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardBusyExampleComponent_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardBusyExampleComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardBusyExampleComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WizardBusyExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    resetWizard() {
        this.wizard.reset();
    }
    toggleStepBusy() {
        this.busy = !this.busy;
        setTimeout(() => {
            this.busy = false;
        }, 3000);
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardBusyExampleComponent.ɵfac = function WizardBusyExampleComponent_Factory(t) { return new (t || WizardBusyExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
WizardBusyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WizardBusyExampleComponent, selectors: [["nui-wizard-v2-busy-example"]], viewQuery: function WizardBusyExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 26, vars: 4, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5890833044137447416$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Welcome!");
        i18n_1 = MSG_EXTERNAL_5890833044137447416$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟356501fb47a7de720e71263c3d1cce5d6e681c4b␟5890833044137447416:Welcome!`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Check box with help text");
        i18n_3 = MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟c42399c4f4c441cd575f6140076703ec297e247b␟5530604904987545137:Check box with help text`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("This is some help text");
        i18n_5 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟ba785d6cbb33a003a3ce1d20077ba67264374284␟829155627086234075:This is some help text`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_419120742718201951$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Check box with help text ");
        i18n_7 = MSG_EXTERNAL_419120742718201951$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟ced6d8adb069287bebcdd9651e0f2ba6beec7dea␟419120742718201951:Check box with help text `;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7305596232038413712$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_10 = goog.getMsg("Plain checkbox ");
        i18n_9 = MSG_EXTERNAL_7305596232038413712$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_10;
    }
    else {
        i18n_9 = $localize `:␟3eb929e5cbe62056ead70d67c6ebc0cbe069624a␟7305596232038413712:Plain checkbox `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_12 = goog.getMsg("Data is loading from remote server...");
        i18n_11 = MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_12;
    }
    else {
        i18n_11 = $localize `:␟dc0a65d80c4379ceca3424563f96da6b49156f5c␟25258399261550967:Data is loading from remote server...`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5760615285289112280$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_14 = goog.getMsg("Toggle busy on current step");
        i18n_13 = MSG_EXTERNAL_5760615285289112280$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_14;
    }
    else {
        i18n_13 = $localize `:␟4b5cefe4cdf44c6487b4f166461d54d331e7896d␟5760615285289112280:Toggle busy on current step`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2273133766183660530$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__16 = goog.getMsg(" Finish ");
        i18n_15 = MSG_EXTERNAL_2273133766183660530$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__16;
    }
    else {
        i18n_15 = $localize `:␟255b836d1904086189b0d2daa5b2f36d33cd1d1f␟2273133766183660530: Finish `;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__18 = goog.getMsg(" Cancel ");
        i18n_17 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__18;
    }
    else {
        i18n_17 = $localize `:␟6a3777f913cf3f288664f0632b9f24794fdcc24e␟6991067716289442185: Cancel `;
    } return [["nui-busy", "", 1, "example-container", 3, "busy"], [1, "busy-content"], ["wizard", ""], ["nuiWizardStepLabel", ""], [1, "m-5"], i18n_1, ["nuiWizardStepFooter", ""], [1, "p-5"], ["name", "nui-demo-checkbox", "title", i18n_3, "hint", i18n_5, "required", "true", 3, "value"], i18n_7, ["name", "nui-demo-checkbox-plain", 3, "checked", "value"], i18n_9, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], ["id", "nui-demo-spinner", "size", "large", "message", i18n_11], ["nui-button", "", "type", "button", "id", "nui-demo-busy-button", 3, "click"], i18n_13, [4, "ngTemplateOutlet"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_15, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_17, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]]; }, template: function WizardBusyExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-wizard-horizontal", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-wizard-step-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WizardBusyExampleComponent_ng_template_5_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WizardBusyExampleComponent_ng_template_8_Template, 2, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-wizard-step-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WizardBusyExampleComponent_ng_template_10_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-checkbox", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nui-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WizardBusyExampleComponent_ng_template_16_Template, 4, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WizardBusyExampleComponent_ng_template_17_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, WizardBusyExampleComponent_ng_template_19_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, WizardBusyExampleComponent_ng_template_21_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "nui-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardBusyExampleComponent_Template_button_click_24_listener() { return ctx.toggleStepBusy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](25, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true)("value", false);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_2__["BusyComponent"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_3__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_5__["WizardStepLabelDirective"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_6__["WizardStepFooterDirective"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_11__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_11__["WizardStepperNextDirective"]], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px orange dashed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1idXN5LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6IndpemFyZC1idXN5LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IG9yYW5nZSBkYXNoZWQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Knos":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.less ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-spaces\";\n\n.step-content-wrapper {\n    padding: 0 @nui-space-md @nui-space-md;\n}\n");

/***/ }),

/***/ "L0aV":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.less ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-reset {\n    margin-right: auto;\n}");

/***/ }),

/***/ "LiSh":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.less ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-footer {\n    width: 100%;\n    padding: 10px;\n    border: 1px transparent dashed;\n    color: white;\n    display: flex;\n\n    &.step_1 {\n        border-color: orange;\n\n        .btn-custom {\n            margin-right: auto;\n        }\n    }\n\n    &.step_2 {\n        border-color: green;\n    }\n\n    span {\n        color: black;\n        line-height: 30px;\n        margin-right: auto;\n    }\n\n    button {\n        margin-left: 15px;\n    }\n}\n");

/***/ }),

/***/ "LnRm":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: WizardCustomFooterExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCustomFooterExampleComponent", function() { return WizardCustomFooterExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");









const _c0 = ["wizard"];
function WizardCustomFooterExampleComponent_ng_template_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardCustomFooterExampleComponent_ng_template_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardCustomFooterExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WizardCustomFooterExampleComponent_ng_template_6_ng_container_5_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardCustomFooterExampleComponent_ng_template_6_ng_container_6_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function WizardCustomFooterExampleComponent_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardCustomFooterExampleComponent_ng_template_11_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function WizardCustomFooterExampleComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WizardCustomFooterExampleComponent_ng_template_11_ng_container_3_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardCustomFooterExampleComponent_ng_template_11_ng_container_6_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardCustomFooterExampleComponent_ng_template_11_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function WizardCustomFooterExampleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardCustomFooterExampleComponent_ng_template_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardCustomFooterExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WizardCustomFooterExampleComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WizardCustomFooterExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardCustomFooterExampleComponent.ɵfac = function WizardCustomFooterExampleComponent_Factory(t) { return new (t || WizardCustomFooterExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
WizardCustomFooterExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WizardCustomFooterExampleComponent, selectors: [["nui-wizard-custom-footer-example"]], viewQuery: function WizardCustomFooterExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 18, vars: 0, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("First step");
        i18n_1 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟9170783b7882b9260aea1a22ae5cf2407fa3e64f␟8373557087720397153:First step`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("This is the first step of our horizontal wizard");
        i18n_3 = MSG_EXTERNAL_8675920705208401217$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟c9bf00bfbb1b8a6e46eb4e43075cf64abecea307␟8675920705208401217:This is the first step of our horizontal wizard`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Final step");
        i18n_5 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟0de8f1dbd57123d294729d71fd278eaf936d4a2b␟5385737502167048240:Final step`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8844434073042428468$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("We finally reached our last step!");
        i18n_7 = MSG_EXTERNAL_8844434073042428468$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟4b91d8fe7d2e6d8e08adecc9623459b2df8b1e72␟8844434073042428468:We finally reached our last step!`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3668697390496092496$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("Custom button 1");
        i18n_9 = MSG_EXTERNAL_3668697390496092496$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:␟96e3b7d5379a74e0cfd2a2afd2b82a1f24ad4085␟3668697390496092496:Custom button 1`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5882938439796417832$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__12 = goog.getMsg("This is some custom content added in the footer for our first step");
        i18n_11 = MSG_EXTERNAL_5882938439796417832$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:␟14c7cd9caddd910b1fe744e22aea16613de15369␟5882938439796417832:This is some custom content added in the footer for our first step`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3664805732406301295$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__14 = goog.getMsg("This is some custom content added in the footer for our second step");
        i18n_13 = MSG_EXTERNAL_3664805732406301295$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__14;
    }
    else {
        i18n_13 = $localize `:␟327cd06b7de9ba341005254f7dd8f8ef1b863481␟3664805732406301295:This is some custom content added in the footer for our second step`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_42274725056941112$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__16 = goog.getMsg("Custom button 2");
        i18n_15 = MSG_EXTERNAL_42274725056941112$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__16;
    }
    else {
        i18n_15 = $localize `:␟b8e6835f3c34197445b33db7dd9a4daade3a9149␟42274725056941112:Custom button 2`;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__18 = goog.getMsg(" Finish ");
        i18n_17 = MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__18;
    }
    else {
        i18n_17 = $localize `:␟1f581bf7024667635d7fab3a751333a71fd83422␟5996951212305115011: Finish `;
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__20 = goog.getMsg(" Cancel ");
        i18n_19 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_FOOTER_WIZARD_CUSTOM_FOOTER_EXAMPLE_COMPONENT_TS__20;
    }
    else {
        i18n_19 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } return [["wizard", ""], ["label", i18n_1], [1, "p-5"], i18n_3, ["nuiWizardStepFooter", ""], ["label", i18n_5], i18n_7, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], [1, "custom-footer", "step_1"], ["nui-button", "", "type", "button", "icon", "add", 1, "btn-custom"], i18n_9, i18n_11, [4, "ngTemplateOutlet"], [1, "custom-footer", "step_2"], i18n_13, ["nui-button", "", "type", "button", "icon", "remove"], i18n_15, ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_17, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_19, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]]; }, template: function WizardCustomFooterExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-wizard-step-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardCustomFooterExampleComponent_ng_template_6_Template, 7, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-wizard-step-v2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WizardCustomFooterExampleComponent_ng_template_11_Template, 9, 2, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, WizardCustomFooterExampleComponent_ng_template_12_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WizardCustomFooterExampleComponent_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, WizardCustomFooterExampleComponent_ng_template_16_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_4__["WizardStepFooterDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperNextDirective"]], styles: [".custom-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px transparent dashed;\n  color: white;\n  display: flex;\n}\n.custom-footer.step_1[_ngcontent-%COMP%] {\n  border-color: orange;\n}\n.custom-footer.step_1[_ngcontent-%COMP%]   .btn-custom[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.custom-footer.step_2[_ngcontent-%COMP%] {\n  border-color: green;\n}\n.custom-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  line-height: 30px;\n  margin-right: auto;\n}\n.custom-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1jdXN0b20tZm9vdGVyLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0ksb0JBQUE7QUFDUjtBQUZJO0VBSVEsa0JBQUE7QUFDWjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQWZBO0VBb0JRLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFwQkE7RUEwQlEsaUJBQUE7QUFIUiIsImZpbGUiOiJ3aXphcmQtY3VzdG9tLWZvb3Rlci1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQgZGFzaGVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJi5zdGVwXzEge1xuICAgICAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcblxuICAgICAgICAuYnRuLWN1c3RvbSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN0ZXBfMiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "OrrU":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-step-change-example/wizard-step-change-example.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizard (selectionChange)=\"onSelectionChange($event)\">\n    <nui-wizard-step-v2 *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-template nuiWizardStepLabel>{{step.title}}</ng-template>\n        <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngIf=\"!isLast || i >= 1\">\n                <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n                    Cancel\n                </button>\n            </ng-container>\n            <ng-container *ngIf=\"i !== 0\">\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Back\n                </button>\n            </ng-container>\n            <ng-container *ngIf=\"!isLast\">\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                >Next</button>\n            </ng-container>\n            <ng-container *ngIf=\"isLast && i >= 1\">\n                <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                    Finish\n                </button>\n            </ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #dynamicStep>\n        <p i18n>Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !</p>\n    </ng-template>\n\n    <ng-template #normalStep>\n        <div class=\"p-5\">\n            <p i18n>Hi! You can add next step dynamically</p>\n\n            <button nui-button type=\"button\" (click)=\"addStep(dynamicStep)\">\n                Add dynamic step\n            </button>\n        </div>\n    </ng-template>\n</nui-wizard-horizontal>\n\n");

/***/ }),

/***/ "PL0w":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom-example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from \"@angular/cdk/stepper\";\nimport {\n    AfterViewInit,\n    ChangeDetectionStrategy,\n    Component,\n    OnInit,\n    ViewChild,\n    ViewEncapsulation,\n} from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { WizardDirective, WizardStepV2Component } from \"@nova-ui/bits\";\nimport { tap } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-wizard-custom\",\n    templateUrl: \"wizard-custom.component.html\",\n    styleUrls: [\"wizard-custom.component.less\"],\n    host: {\n        \"class\": \"nui-wizard-custom-layout\",\n        \"aria-orientation\": \"horizontal\",\n    },\n    providers: [\n        { provide: WizardDirective, useExisting: WizardCustomComponent },\n        { provide: CdkStepper, useExisting: WizardCustomComponent },\n    ],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class WizardCustomComponent extends WizardDirective { }\n\n@Component({\n    selector: \"nui-wizard-custom-example\",\n    templateUrl: \"./wizard-custom-example.component.html\",\n    styleUrls: [\"wizard-custom.component.less\"],\n    providers: [{\n        provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false },\n    }],\n})\nexport class WizardCustomExampleComponent implements OnInit, AfterViewInit {\n    public formGroup: FormGroup;\n    public steps: number = 1;\n    public selectedIndex: number = 0;\n    public progress: number;\n\n    @ViewChild(\"wizard\") wizard: WizardCustomComponent;\n\n    constructor(private formBuilder: FormBuilder) { }\n\n    ngOnInit(): void {\n        this.formGroup = new FormGroup({\n            \"personDetails\": this.formBuilder.group({\n                \"name\": [\"\", [Validators.required, Validators.minLength(3)]],\n                \"symptoms\": [undefined, Validators.required],\n            }),\n            \"diseaseDetails\": this.formBuilder.group({\n                \"date\": [\"\", Validators.required],\n            }),\n            \"contactDetails\": this.formBuilder.group({\n                \"email\": [\"\", [Validators.required, Validators.email]],\n                \"phone\": [\"\"],\n            }),\n        });\n    }\n\n    ngAfterViewInit(): void {\n        const update = (selectedIndex?: number, steps?: number) => {\n            setTimeout(() => {\n                if (steps) {\n                    this.steps = steps;\n                }\n                if (selectedIndex !== undefined && selectedIndex >= 0) {\n                    this.selectedIndex = selectedIndex;\n                }\n                this.progress = 100 * (1 + this.selectedIndex) / this.steps;\n            });\n        };\n\n        this.wizard.selectionChange.pipe(\n            tap(i => {\n                update(i.selectedIndex);\n            })\n        ).subscribe();\n\n        this.wizard.steps.changes.pipe(\n            tap(c => {\n                update(undefined, c.length);\n            })\n        ).subscribe();\n    }\n\n    validate(step: WizardStepV2Component): void {\n        // mark all fields from current step as touched\n        // in order to display the validation messages\n        Object.keys((step.stepControl as FormGroup)?.controls || {})\n            .forEach(key => {\n                const field = this.wizard.selected.stepControl.get(key);\n                field?.markAsTouched();\n            });\n    }\n}\n");

/***/ }),

/***/ "PipA":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row custom-header\">\n        <div class=\"col-9 p-0\">\n            <div class=\"nui-wizard-horizontal-header-container\">\n                <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n                    <nui-wizard-step-header\n                        class=\"nui-wizard-horizontal-header\"\n                        (click)=\"step.select()\"\n                        (keydown)=\"_onKeydown($event)\"\n                        [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n                        [id]=\"_getStepLabelId(i)\"\n                        [attr.aria-posinset]=\"i + 1\"\n                        [attr.aria-setsize]=\"steps.length\"\n                        [attr.aria-controls]=\"_getStepContentId(i)\"\n                        [attr.aria-selected]=\"selectedIndex == i\"\n                        [attr.aria-label]=\"step.ariaLabel || null\"\n                        [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n                        [index]=\"i\"\n                        [label]=\"step.label || step.stepLabel\"\n                        [selected]=\"selectedIndex === i\"\n                        [active]=\"step.completed || selectedIndex === i || !linear\"\n                        [step]=\"step\"\n                        [errorMessage]=\"step.errorMessage\">\n                    </nui-wizard-step-header>\n                    <div *ngIf=\"!isLast\" class=\"nui-wizard-horizontal-line\"></div>\n                </ng-container>\n            </div>\n            <div class=\"nui-wizard-horizontal-content-container\">\n                <h2>\n                    <ng-container *ngIf=\"selected.stepLabel\" [ngTemplateOutlet]=\"selected.stepLabel.template\"></ng-container>\n                    <ng-container *ngIf=\"!selected.stepLabel\">{{selected.label}}</ng-container>\n                </h2>\n                <div *ngFor=\"let step of steps; let i = index\"\n                     [attr.tabindex]=\"selectedIndex === i ? 0 : null\"\n                     class=\"nui-wizard-horizontal-content\" role=\"tabpanel\"\n                     [id]=\"_getStepContentId(i)\"\n                     [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n                     [attr.aria-expanded]=\"selectedIndex === i\">\n                    <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-3 custom-summary\">\n            <ng-content select=[summary]></ng-content>\n            <div *ngIf=\"selected.stepFooter\" class=\"row nui-wizard-horizontal-footer-container\">\n                <wizard-footer [footer]=\"selected.stepFooter\"></wizard-footer>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Ptpp":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2 sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "iAoM",
	"./wizard-async-validation-form/wizard-async-form-validation.example.component.html": "jYwr",
	"./wizard-async-validation-form/wizard-async-form-validation.example.component.ts": "qZWR",
	"./wizard-busy/wizard-busy.example.component.html": "ErOQ",
	"./wizard-busy/wizard-busy.example.component.less": "5iu2",
	"./wizard-busy/wizard-busy.example.component.ts": "rjNf",
	"./wizard-custom-footer/wizard-custom-footer-example.component.html": "2/6m",
	"./wizard-custom-footer/wizard-custom-footer-example.component.less": "LiSh",
	"./wizard-custom-footer/wizard-custom-footer-example.component.ts": "WLwN",
	"./wizard-custom-layout/wizard-custom-example.component.html": "1sWM",
	"./wizard-custom-layout/wizard-custom-example.component.ts": "PL0w",
	"./wizard-custom-layout/wizard-custom.component.html": "PipA",
	"./wizard-custom-layout/wizard-custom.component.less": "nrQw",
	"./wizard-dialog/wizard-dialog.example.component.html": "A8yM",
	"./wizard-dialog/wizard-dialog.example.component.less": "bb5i",
	"./wizard-dialog/wizard-dialog.example.component.ts": "mbMD",
	"./wizard-docs/wizard-docs.component.html": "3Uzl",
	"./wizard-docs/wizard-docs.component.ts": "U0rU",
	"./wizard-dynamic/wizard-dynamic.example.component.html": "Vkgm",
	"./wizard-dynamic/wizard-dynamic.example.component.ts": "6e2i",
	"./wizard-horizontal-layout/wizard-horizontal-example.component.html": "s3gB",
	"./wizard-horizontal-layout/wizard-horizontal-example.component.ts": "Dz05",
	"./wizard-remove-step/wizard-remove-step-example.component.html": "U9Jp",
	"./wizard-remove-step/wizard-remove-step-example.component.ts": "0dsp",
	"./wizard-responsive-header/wizard-responsive-header-example.component.html": "38M/",
	"./wizard-responsive-header/wizard-responsive-header-example.component.ts": "eAHx",
	"./wizard-restore-state/wizard-restore-state.example.component.html": "gtxr",
	"./wizard-restore-state/wizard-restore-state.example.component.less": "L0aV",
	"./wizard-restore-state/wizard-restore-state.example.component.ts": "knXS",
	"./wizard-step-change-example/wizard-step-change-example.component.html": "OrrU",
	"./wizard-step-change-example/wizard-step-change-example.component.ts": "z1B6",
	"./wizard-tooltip/wizard-tooltip-example.component.html": "RKIm",
	"./wizard-tooltip/wizard-tooltip-example.component.ts": "U/4t",
	"./wizard-vertical-layout/wizard-vertical-example.component.html": "A7H6",
	"./wizard-vertical-layout/wizard-vertical-example.component.ts": "Cu7f",
	"./wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.html": "osmv",
	"./wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.less": "Knos",
	"./wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.ts": "aJhT",
	"./wizard-with-custom-icons/wizard-with-custom-icons-example.component.html": "oZ+g",
	"./wizard-with-custom-icons/wizard-with-custom-icons-example.component.ts": "mO7N",
	"./wizard.module.ts": "TL+W"
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
webpackContext.id = "Ptpp";

/***/ }),

/***/ "RKIm":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-tooltip/wizard-tooltip-example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizardComponent>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"Very long header text. Very long header text\">\n        <!-- content of the current step -->\n        <div class=\"p-5\">\n            <span i18n>Step with long header text</span>\n        </div>\n\n        <!-- content of the footer -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  step without tooltip -->\n    <nui-wizard-step-v2>\n        <ng-template nuiWizardStepLabel>\n            <span>Without tooltip</span>\n        </ng-template>\n        <div class=\"p-5\">\n            <span i18n>Step without header tooltip</span>\n        </div>\n        <!-- content of the footer -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  Step with custom label template and tooltip-->\n    <nui-wizard-step-v2>\n        <ng-template nuiWizardStepLabel >\n            <span i18n-nuiTooltip nuiTooltip=\"Custom Label template\">\n                <i>Custom Label template</i>\n            </span>\n        </ng-template>\n        <div class=\"p-5\">\n            <span i18n>Step with custom label in header</span>\n        </div>\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                Finish\n            </button>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardCancel>\n        <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n            Cancel\n        </button>\n    </ng-template>\n\n    <ng-template #wizardPrevious>\n        <button i18n type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                i18n\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\">\n            Next\n        </button>\n    </ng-template>\n</nui-wizard-horizontal>\n");

/***/ }),

/***/ "TL+W":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiBusyModule,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDatePickerModule,\n    NuiDialogModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiIconModule,\n    NuiMessageModule,\n    NuiProgressModule,\n    NuiRadioModule,\n    NuiSpinnerModule,\n    NuiTextboxModule,\n    NuiValidationMessageModule,\n    NuiWizardV2Module,\n    SrlcStage,\n    NuiSelectV2Module,\n    NuiOverlayModule,\n    NuiTooltipModule,\n} from \"@nova-ui/bits\";\n\nimport {\n    WizardBusyExampleComponent,\n    WizardCustomComponent,\n    WizardCustomExampleComponent,\n    WizardCustomFooterExampleComponent,\n    WizardDialogExampleComponent,\n    WizardDocsComponent,\n    WizardDynamicExampleComponent,\n    WizardHorizontalExampleComponent,\n    WizardRemoveStepExampleComponent,\n    WizardVerticalExampleComponent,\n    WizardAsyncFormValidationExampleComponent,\n    WizardWithCustomIconsExampleComponent,\n    WizardRestoreStateExampleComponent,\n    WizardStepChangeExampleComponent,\n    WizardResponsiveHeaderExampleComponent,\n    WizardWithConfirmationDialogOnCancelComponent,\n    WizardTooltipExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: WizardDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        NuiTextboxModule,\n        NuiRadioModule,\n        NuiCheckboxModule,\n        NuiDialogModule,\n        NuiValidationMessageModule,\n        NuiFormFieldModule,\n        FormsModule,\n        ReactiveFormsModule,\n        RouterModule.forChild(routes),\n        NuiWizardV2Module,\n        NuiSpinnerModule,\n        NuiBusyModule,\n        NuiProgressModule,\n        NuiDatePickerModule,\n        NuiIconModule,\n        NuiSelectV2Module,\n        NuiOverlayModule,\n        NuiTooltipModule,\n    ],\n    declarations: [\n        WizardDocsComponent,\n        WizardHorizontalExampleComponent,\n        WizardVerticalExampleComponent,\n        WizardCustomExampleComponent,\n        WizardCustomComponent,\n        WizardDialogExampleComponent,\n        WizardBusyExampleComponent,\n        WizardCustomFooterExampleComponent,\n        WizardDynamicExampleComponent,\n        WizardRemoveStepExampleComponent,\n        WizardAsyncFormValidationExampleComponent,\n        WizardWithCustomIconsExampleComponent,\n        WizardRestoreStateExampleComponent,\n        WizardStepChangeExampleComponent,\n        WizardResponsiveHeaderExampleComponent,\n        WizardWithConfirmationDialogOnCancelComponent,\n        WizardTooltipExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class WizardModule { }\n");

/***/ }),

/***/ "U/4t":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-tooltip/wizard-tooltip-example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-tooltip-example\",\n    templateUrl: \"./wizard-tooltip-example.component.html\",\n})\nexport class WizardTooltipExampleComponent {\n    @ViewChild(\"wizardComponent\") wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "U0rU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-docs/wizard-docs.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-wizard-v2-example\",\n    templateUrl: \"./wizard-docs.component.html\",\n})\nexport class WizardDocsComponent { }\n");

/***/ }),

/***/ "U9Jp":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-remove-step/wizard-remove-step-example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizard>\n    <nui-wizard-step-v2 *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-template nuiWizardStepLabel>{{step.title + \" (\" + i + \")\"}}</ng-template>\n        <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngIf=\"!isLast || i >= 1\">\n                <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n                    Cancel\n                </button>\n            </ng-container>\n            <ng-container *ngIf=\"i !== 0\">\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Back\n                </button>\n            </ng-container>\n            <ng-container *ngIf=\"!isLast\">\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                >Next</button>\n            </ng-container>\n            <ng-container *ngIf=\"isLast && i >= 1\">\n                <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                    Finish\n                </button>\n            </ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #dynamicStep>\n        <p class=\"m-5\" i18n>Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !</p>\n    </ng-template>\n\n    <ng-template #normalStep>\n        <div class=\"p-5\">\n            <p i18n>Hi! You can add next step dynamically</p>\n\n            <button nui-button type=\"button\" (click)=\"addStep(dynamicStep)\">\n                Add dynamic step w/template\n            </button>\n        </div>\n    </ng-template>\n</nui-wizard-horizontal>\n<div class=\"d-flex\">\n    <div class=\"\">\n        <span class=\"nui-textbox--bold\" [ngStyle]=\"{ 'font-weight': 'bold' }\">Step index to remove</span> <br>\n        <nui-textbox-number [minValue]=\"1\" #number></nui-textbox-number>\n    </div>\n    <button class=\"ml-3 h-25 align-self-end\"\n            displayStyle=\"destructive\"\n            nui-button type=\"button\"\n            [disabled]=\"+number.value < 1\"\n            (click)=\"removeStep(+number.value)\"\n            i18n>\n        Remove step dynamically\n    </button>\n</div>\n");

/***/ }),

/***/ "Vkgm":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dynamic/wizard-dynamic.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizardComponent>\n    <!--Static step-->\n    <nui-wizard-step-v2 i18n-label label=\"Normal step\">\n        <div class=\"p-5\">\n            <p i18n>Hi! You can add next step dynamically</p>\n\n            <button nui-button type=\"button\" (click)=\"addStep(dynamicTemplate2)\">\n                Add dynamic step w/template\n            </button>\n        </div>\n\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <nui-wizard-step-v2 *ngIf=\"enableDynamicStepWithButton\" i18n-label label=\"Added dynamically\">\n        <ng-template nuiWizardStepLabel>Dynamic w/button</ng-template>\n        <p class=\"m-5\" i18n>Hi! I'm dynamic step that can be enabled/disabled programmatically via the toggle button under the wizard!</p>\n\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-container *ngTemplateOutlet=\"dynamicStepWithTemplate\" ngProjectAs=\"nui-wizard-step-v2\"></ng-container>\n    <ng-template #dynamicStepWithTemplate>\n        <nui-wizard-step-v2>\n            <ng-template nuiWizardStepLabel>Dynamic w/template</ng-template>\n            <p class=\"m-5\" i18n>Hi! I'm dynamic step added automatically!</p>\n\n            <ng-template nuiWizardStepFooter>\n                <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n            </ng-template>\n        </nui-wizard-step-v2>\n    </ng-template>\n\n    <nui-wizard-step-v2 *ngFor=\"let step of steps; let isLast = last\">\n        <ng-template nuiWizardStepLabel>{{step.title}}</ng-template>\n        <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"!isLast && wizardNext\"></ng-container>\n            <ng-container *ngIf=\"isLast && i >= 1\">\n                <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                    Finish\n                </button>\n            </ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #dynamicTemplate1>\n        <p class=\"m-5\" i18n>Hi! I'm dynamic step added automatically during ngAfterViewInit of this wizard using a TemplateRef!</p>\n    </ng-template>\n\n    <ng-template #dynamicTemplate2>\n        <p class=\"m-5\" i18n>Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !</p>\n    </ng-template>\n\n    <ng-template #wizardCancel>\n        <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n            Cancel\n        </button>\n    </ng-template>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n<div>\n    <button nui-button type=\"button\" (click)=\"toggleStep()\">\n        {{!enableDynamicStepWithButton ? \"Enable\" : \"Disable\" }} dynamic step w/button\n    </button>\n</div>\n");

/***/ }),

/***/ "WLwN":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-footer/wizard-custom-footer-example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-custom-footer-example\",\n    templateUrl: \"./wizard-custom-footer-example.component.html\",\n    styleUrls: [\"./wizard-custom-footer-example.component.less\"],\n})\nexport class WizardCustomFooterExampleComponent {\n    @ViewChild(\"wizard\") private wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "aJhT":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, TemplateRef, ViewChild } from \"@angular/core\";\nimport {\n    DialogService,\n    NuiDialogRef,\n    ToastService,\n    WizardHorizontalComponent,\n} from \"@nova-ui/bits\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-wizard-with-confirmation-dialog-on-cancel-example\",\n    templateUrl: \"./wizard-with-confirmation-dialog-on-cancel.component.html\",\n    styleUrls: [\"./wizard-with-confirmation-dialog-on-cancel.component.less\"],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class WizardWithConfirmationDialogOnCancelComponent implements OnInit {\n    public confirmationDialog: NuiDialogRef;\n    public form: FormGroup;\n\n    @ViewChild(\"wizard\") private wizard: WizardHorizontalComponent;\n\n    constructor(\n        @Inject(DialogService) private dialogService: DialogService,\n        private toastService: ToastService,\n        private formBuilder: FormBuilder,\n        public cd: ChangeDetectorRef) { }\n\n    public ngOnInit(): void {\n        this.initForm();\n    }\n\n    // Open confirmation dialog\n    public openConfirmationDialog(content: TemplateRef<string>): void {\n        if (this.wizard.selectedIndex === 0) {\n            this.resetWizard();\n            return;\n        }\n\n        this.confirmationDialog = this.dialogService.open(content, {\n            size: \"sm\",\n            windowClass: \"active-dialog\",\n        });\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    // Validate form before changing selected step\n    public validate(formGroup: string): void {\n        this.form.get(formGroup)?.markAllAsTouched();\n    }\n\n    public onSubmit(formControlName: string): void {\n        this.validate(formControlName);\n\n        if (!this.form.valid) {\n            return;\n        }\n\n        this.toastService.info({\n            title: $localize`Form was successfully submitted.`,\n            options: {\n                timeOut: 5000,\n                extendedTimeOut: 2000,\n            },\n        });\n        this.wizard.reset();\n    }\n\n    private initForm(): void {\n        this.form = new FormGroup({\n            \"personDetails\": this.formBuilder.group({\n                \"firstName\": [\"\", [Validators.required, Validators.minLength(3)]],\n                \"lastName\": [\"\", [Validators.required, Validators.minLength(3)]],\n            }),\n            \"contactDetails\": this.formBuilder.group({\n                \"email\": [\"\", [Validators.required, Validators.email]],\n                \"phone\": [\"\"],\n            }),\n            \"confirm\": this.formBuilder.group({\n                \"confirmed\": [false, Validators.requiredTrue],\n            }),\n        });\n    }\n}\n");

/***/ }),

/***/ "bb5i":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-colors\";\n@import (reference) \"nui-framework-spaces\";\n@import (reference) \"nui-framework-typography\";\n\n.step-content-wrapper {\n    padding: @nui-space-md;\n}\n\n.btn-busy {\n    margin-right: auto;\n}\n\n.overlay {\n    &-class {\n        display: flex;\n        height: 100%;\n        .setCssVariable(background-color, nui-color-overlay-busy);\n    }\n\n    &-content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        max-width: 460px;\n        margin: auto;\n        padding: (@nui-space-md * 2);\n        .setCssVariable(background-color, nui-color-bg-content);\n\n        .header {\n            display: flex;\n            justify-content: center;\n            margin-bottom: @nui-space-md;\n            .nui-text-widget();\n        }\n\n        .body {\n            display: flex;\n            text-align: center;\n            .nui-text-size(default);\n        }\n\n        .footer {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n\n            button[displayStyle=\"action\"] {\n                margin-right: @nui-space-md;\n            }\n        }\n    }\n}\n");

/***/ }),

/***/ "cde7":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-dynamic/wizard-dynamic.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WizardDynamicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardDynamicExampleComponent", function() { return WizardDynamicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");











const _c0 = ["dynamicTemplate1"];
const _c1 = ["wizardComponent"];
function WizardDynamicExampleComponent_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r15);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dynamic w/button");
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r15);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_1_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardDynamicExampleComponent_nui_wizard_step_v2_9_ng_template_4_Template, 3, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDynamicExampleComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 20);
} }
function WizardDynamicExampleComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dynamic w/template");
} }
function WizardDynamicExampleComponent_ng_template_11_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_ng_template_11_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_ng_template_11_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_ng_template_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_ng_template_11_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_ng_template_11_ng_template_4_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDynamicExampleComponent_ng_template_11_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r15);
} }
function WizardDynamicExampleComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_ng_template_11_ng_template_1_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardDynamicExampleComponent_ng_template_11_ng_template_4_Template, 3, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const step_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r29.title);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_2_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_ng_container_3_Template, 3, 0, "ng-container", 22);
} if (rf & 2) {
    const isLast_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().last;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !isLast_r30 && _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r30 && ctx_r33.i >= 1);
} }
function WizardDynamicExampleComponent_nui_wizard_step_v2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_1_Template, 1, 1, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_container_2_Template, 1, 0, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardDynamicExampleComponent_nui_wizard_step_v2_13_ng_template_3_Template, 4, 4, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r29.templateRef);
} }
function WizardDynamicExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDynamicExampleComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDynamicExampleComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_ng_template_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDynamicExampleComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDynamicExampleComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WizardDynamicExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.enableDynamicStepWithButton = false;
        this.steps = [];
    }
    ngAfterViewInit() {
        this.addStep(this.dynamicTemplate1, $localize `My first dynamic step`);
    }
    toggleStep() {
        this.enableDynamicStepWithButton = !this.enableDynamicStepWithButton;
    }
    addStep(templateRef, title) {
        this.steps.push({ title: title !== null && title !== void 0 ? title : `Dynamic Step ${this.steps.length + 1}`, templateRef: templateRef });
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardDynamicExampleComponent.ɵfac = function WizardDynamicExampleComponent_Factory(t) { return new (t || WizardDynamicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
WizardDynamicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardDynamicExampleComponent, selectors: [["nui-wizard-dynamic-example"]], viewQuery: function WizardDynamicExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dynamicTemplate1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 27, vars: 4, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7057102079154255396$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Normal step");
        i18n_2 = MSG_EXTERNAL_7057102079154255396$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟4c3fab8d69b61816e7bdb18941b4f57a499c1618␟7057102079154255396:Normal step`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Hi! You can add next step dynamically");
        i18n_4 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟9dfa7b9ebe128bde7cab896a85986ebb450f99f7␟4074000604906025359:Hi! You can add next step dynamically`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7677587117161478042$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Added dynamically");
        i18n_6 = MSG_EXTERNAL_7677587117161478042$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟e8b043308e5746251c9d64a33aa7c6050291d341␟7677587117161478042:Added dynamically`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8217901131119689518$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! I'm dynamic step that can be enabled/disabled programmatically via the toggle button under the wizard!");
        i18n_8 = MSG_EXTERNAL_8217901131119689518$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟cc5de94f2f4e2ebcb549fd9161269d5702b37bdb␟8217901131119689518:Hi! I'm dynamic step that can be enabled/disabled programmatically via the toggle button under the wizard!`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8902866676882267310$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Hi! I'm dynamic step added automatically!");
        i18n_10 = MSG_EXTERNAL_8902866676882267310$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟2d747f63c6c233b9fb7b10782dcf2ee72b616af9␟8902866676882267310:Hi! I'm dynamic step added automatically!`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS____13 = goog.getMsg(" Finish ");
        i18n_12 = MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS____13;
    }
    else {
        i18n_12 = $localize `:␟1f581bf7024667635d7fab3a751333a71fd83422␟5996951212305115011: Finish `;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6741901999086012076$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("Hi! I'm dynamic step added automatically during ngAfterViewInit of this wizard using a TemplateRef!");
        i18n_14 = MSG_EXTERNAL_6741901999086012076$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__15;
    }
    else {
        i18n_14 = $localize `:␟dcc1be5be7d583d8da709807686db795b39e4e4d␟6741901999086012076:Hi! I'm dynamic step added automatically during ngAfterViewInit of this wizard using a TemplateRef!`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__17 = goog.getMsg("Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !");
        i18n_16 = MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:␟256cc8ce36c7ece03c014ef84736f10288179f3f␟2900895229541262648:Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__19 = goog.getMsg(" Cancel ");
        i18n_18 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } return [["wizardComponent", ""], ["label", i18n_2], [1, "p-5"], i18n_4, ["nui-button", "", "type", "button", 3, "click"], ["nuiWizardStepFooter", ""], ["label", i18n_6, 4, "ngIf"], ["ngProjectAs", "nui-wizard-step-v2", 5, ["nui-wizard-step-v2"], 4, "ngTemplateOutlet"], ["dynamicStepWithTemplate", ""], [4, "ngFor", "ngForOf"], ["dynamicTemplate1", ""], ["dynamicTemplate2", ""], ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["label", i18n_6], ["nuiWizardStepLabel", ""], [1, "m-5"], i18n_8, ["ngProjectAs", "nui-wizard-step-v2", 5, ["nui-wizard-step-v2"]], i18n_10, [4, "ngIf"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_12, i18n_14, i18n_16, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_18, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]]; }, template: function WizardDynamicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard-step-v2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.addStep(_r9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add dynamic step w/template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WizardDynamicExampleComponent_ng_template_8_Template, 2, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WizardDynamicExampleComponent_nui_wizard_step_v2_9_Template, 5, 0, "nui-wizard-step-v2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WizardDynamicExampleComponent_ng_container_10_Template, 1, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WizardDynamicExampleComponent_ng_template_11_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardDynamicExampleComponent_nui_wizard_step_v2_13_Template, 4, 1, "nui-wizard-step-v2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WizardDynamicExampleComponent_ng_template_14_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WizardDynamicExampleComponent_ng_template_16_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, WizardDynamicExampleComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, WizardDynamicExampleComponent_ng_template_20_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WizardDynamicExampleComponent_ng_template_22_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_Template_button_click_25_listener() { return ctx.toggleStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableDynamicStepWithButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.enableDynamicStepWithButton ? "Enable" : "Disable", " dynamic step w/button ");
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepV2Component"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_5__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_7__["WizardStepLabelDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "eAHx":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-responsive-header/wizard-responsive-header-example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport { WizardHorizontalComponent } from \"../../../../../../src/nui-api\";\nimport { ToastService } from \"../../../../../../src/public_api\";\n@Component({\n    selector: \"nui-wizard-responsive-header-example\",\n    templateUrl: \"./wizard-responsive-header-example.component.html\",\n})\nexport class WizardResponsiveHeaderExampleComponent {\n    public steps: Array<any> = Array.from({length: 20});\n\n    @ViewChild(\"nuiWizard\") public wizard: WizardHorizontalComponent;\n\n    constructor(private toast: ToastService) {}\n\n    public reset(): void {\n        this.wizard.reset();\n    }\n\n    public notifyOnFinished(): void {\n        this.toast.info({title: \"Finished!\", message: \"You have completed the wizard\"});\n    }\n\n    public notifyOnCancel(): void {\n        this.toast.warning({title: \"Cancelled!\", message: \"You've hit the wizard's 'Cancel' button! The wizard is now restored to its initial state.\"});\n    }\n\n}\n");

/***/ }),

/***/ "eHNd":
/*!***************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-step-change-example/wizard-step-change-example.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: WizardStepChangeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepChangeExampleComponent", function() { return WizardStepChangeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");











const _c0 = ["normalStep"];
const _c1 = ["wizard"];
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const step_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r6.title);
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_0_Template, 3, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_1_Template, 3, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_2_Template, 3, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_ng_container_3_Template, 3, 0, "ng-container", 8);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const isLast_r8 = ctx_r21.last;
    const i_r7 = ctx_r21.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r8 || i_r7 >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r8 && i_r7 >= 1);
} }
function WizardStepChangeExampleComponent_nui_wizard_step_v2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_1_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_ng_template_3_Template, 4, 4, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", step_r6.templateRef);
} }
function WizardStepChangeExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardStepChangeExampleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardStepChangeExampleComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx_r22.addStep(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add dynamic step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WizardStepChangeExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.steps = [];
    }
    ngAfterViewInit() {
        this.addStep(this.normalStep, $localize `Normal step`);
    }
    addStep(templateRef, title) {
        this.steps.push({ title: title !== null && title !== void 0 ? title : `Dynamic Step`, templateRef: templateRef });
    }
    onSelectionChange($event) {
        this.toastService.info({
            title: $localize `Selected step changed.`,
            message: $localize `You moved from step with index ${$event.previouslySelectedIndex} to step with index ${$event.selectedIndex}`,
            options: {
                timeOut: 5000,
                extendedTimeOut: 2000,
            },
        });
    }
    resetWizard() {
        this.wizard.reset();
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
}
WizardStepChangeExampleComponent.ɵfac = function WizardStepChangeExampleComponent_Factory(t) { return new (t || WizardStepChangeExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
WizardStepChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardStepChangeExampleComponent, selectors: [["nui-wizard-step-change-example"]], viewQuery: function WizardStepChangeExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.normalStep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 7, vars: 1, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS____3 = goog.getMsg(" Cancel ");
        i18n_2 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS____3;
    }
    else {
        i18n_2 = $localize `:␟6a3777f913cf3f288664f0632b9f24794fdcc24e␟6991067716289442185: Cancel `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS____5 = goog.getMsg(" Finish ");
        i18n_4 = MSG_EXTERNAL_5996951212305115011$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS____5;
    }
    else {
        i18n_4 = $localize `:␟1f581bf7024667635d7fab3a751333a71fd83422␟5996951212305115011: Finish `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !");
        i18n_6 = MSG_EXTERNAL_2900895229541262648$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟256cc8ce36c7ece03c014ef84736f10288179f3f␟2900895229541262648:Hi! I'm a step added dynamically using a TemplateRef by clicking a button from the first step !`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! You can add next step dynamically");
        i18n_8 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_STEP_CHANGE_EXAMPLE_WIZARD_STEP_CHANGE_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟9dfa7b9ebe128bde7cab896a85986ebb450f99f7␟4074000604906025359:Hi! You can add next step dynamically`;
    } return [[3, "selectionChange"], ["wizard", ""], [4, "ngFor", "ngForOf"], ["dynamicStep", ""], ["normalStep", ""], ["nuiWizardStepLabel", ""], [4, "ngTemplateOutlet"], ["nuiWizardStepFooter", ""], [4, "ngIf"], ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_2, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_4, i18n_6, [1, "p-5"], i18n_8, ["nui-button", "", "type", "button", 3, "click"]]; }, template: function WizardStepChangeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-horizontal", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function WizardStepChangeExampleComponent_Template_nui_wizard_horizontal_selectionChange_0_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardStepChangeExampleComponent_nui_wizard_step_v2_2_Template, 4, 1, "nui-wizard-step-v2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardStepChangeExampleComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardStepChangeExampleComponent_ng_template_5_Template, 5, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_5__["WizardStepLabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_6__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_8__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "gtxr":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #dialogWizard>\n    <nui-dialog-header i18n-title\n                       title=\"Restore Wizard State\"\n                       (closed)=\"closeDialog()\">\n    </nui-dialog-header>\n    <form class=\"dialog-body compact-mode\"\n          [formGroup]=\"form\"\n          *ngIf=\"form\">\n        <nui-wizard-horizontal\n            [state]=\"state\"\n            (finished)=\"saveState($event)\"\n        >\n            <nui-wizard-step-v2 label=\"Person Details\"\n                                formGroupName=\"personDetails\"\n                                [stepControl]=\"form.get(['personDetails'])\">\n\n                <div class=\"px-5 pb-5\">\n                    <nui-form-field [control]=\"form.get(['personDetails','name'])\"\n                                    class=\"d-block mb-4 mt-4\"\n                                    i18n-caption\n                                    caption=\"Name\">\n                        <nui-textbox formControlName=\"name\"></nui-textbox>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['personDetails','name'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n\n                    <nui-form-field [control]=\"form.get(['personDetails','privacy'])\">\n                        <nui-checkbox formControlName=\"privacy\" [value]=\"true\">\n                            Privacy Policy\n                        </nui-checkbox>\n\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['personDetails','privacy'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n                </div>\n\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext; context: { form: 'personDetails' }\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 label=\"Organization\"\n                                formGroupName=\"organization\"\n                                [stepControl]=\"form.get(['organization'])\">\n\n                <div class=\"p-5\">\n                    <nui-form-field [control]=\"form.get(['organization', 'title'])\"\n                                    class=\"d-block mb-4\"\n                                    i18n-caption\n                                    caption=\"Organization\">\n                        <nui-textbox formControlName=\"title\"></nui-textbox>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['organization','title'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n                    <nui-form-field caption=\"Date\"\n                                    class=\"d-block mb-4\"\n                                    [control]=\"form.get(['organization','date'])\">\n                        <nui-date-picker formControlName=\"date\" i18n></nui-date-picker>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['organization','date'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n                    </nui-form-field>\n                    <nui-form-field [control]=\"form.get(['organization','createDynamicStep1'])\" class=\"d-block\">\n                        <nui-checkbox formControlName=\"createDynamicStep1\" [value]=\"true\">\n                            Add first step dynamically\n                        </nui-checkbox>\n                    </nui-form-field>\n                    <nui-form-field [control]=\"form.get(['organization','createDynamicStep2'])\" class=\"d-block\">\n                        <nui-checkbox formControlName=\"createDynamicStep2\" [value]=\"true\">\n                            Add second step dynamically\n                        </nui-checkbox>\n                    </nui-form-field>\n                </div>\n\n                    <ng-template nuiWizardStepFooter>\n                        <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                        <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                        <ng-container *ngTemplateOutlet=\"wizardNext; context: { form: 'organization' }\"></ng-container>\n                    </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 *ngFor=\"let step of dynamicSteps\">\n                <ng-template nuiWizardStepLabel>{{step.title}}</ng-template>\n                <div class=\"p-5\">\n                    <ng-container *ngTemplateOutlet=\"step.templateRef\"></ng-container>\n                </div>\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 formGroupName=\"contactDetails\"\n                                [stepControl]=\"form.get(['contactDetails'])\"\n                                #finalStep>\n\n                <ng-template nuiWizardStepLabel>\n                    <span>Contact Details</span>\n                </ng-template>\n\n                <div class=\"px-5 pb-5\">\n                    <nui-form-field [control]=\"form.get(['contactDetails','email'])\"\n                                    class=\"d-block mb-4 mt-4\"\n                                    i18n-caption\n                                    caption=\"Email\">\n                        <nui-textbox type=\"email\" formControlName=\"email\"></nui-textbox>\n                        <nui-validation-message for=\"required\"\n                                                *ngIf=\"form.get(['contactDetails','email'])?.errors?.required\"\n                                                i18n>\n                            This is required\n                        </nui-validation-message>\n\n                        <nui-validation-message for=\"email\"\n                                                *ngIf=\"form.get(['contactDetails','email'])?.errors?.email\"\n                                                i18n>\n                            Invalid email\n                        </nui-validation-message>\n                    </nui-form-field>\n\n                    <nui-form-field caption=\"Select\"\n                        [control]=\"form.get(['contactDetails','options'])\">\n                        <nui-select-v2 formControlName=\"options\">\n                            <nui-select-v2-option value=\"Item 1\">Item 1</nui-select-v2-option>\n                            <nui-select-v2-option value=\"Item 2\">Item 2</nui-select-v2-option>\n                        </nui-select-v2>\n                    </nui-form-field>\n                </div>\n\n                    <ng-template nuiWizardStepFooter>\n                        <button nui-button\n                                class=\"btn-reset\"\n                                type=\"button\"\n                                icon=\"reset\"\n                                (click)=\"resetStep(finalStep)\">\n                            Reset step\n                        </button>\n                        <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                        <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                        <button type=\"button\"\n                                nui-button\n                                displayStyle=\"primary\"\n                                (click)=\"completeWizard('contactDetails', finalStep)\"\n                        >\n                            Finish\n                        </button>\n                    </ng-template>\n            </nui-wizard-step-v2>\n\n            <ng-template #wizardPrevious>\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Back\n                </button>\n            </ng-template>\n\n            <ng-template #wizardNext let-form=\"form\">\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                        (click)=\"validateStep(form)\"\n                >Next</button>\n            </ng-template>\n\n            <ng-template #wizardCancel>\n                <button type=\"button\" nui-button displayStyle=\"action\" (click)=\"closeDialog()\">\n                    Cancel\n                </button>\n            </ng-template>\n        </nui-wizard-horizontal>\n    </form>\n</ng-template>\n\n<ng-template #dynamicTemplate1>\n    <p i18n>Hi! I was created dynamically, because you've checked the checkbox on the previous step! Uncheck it to hide me!</p>\n</ng-template>\n\n<ng-template #dynamicTemplate2>\n    <p i18n>This is another template rendered dynamically!</p>\n    <button type=\"button\" nui-button class=\"mb-3\" (click)=\"awesome = !awesome\">Click if you're awesome</button>\n    <nui-message *ngIf=\"awesome\" type=\"ok\">You are awesome!</nui-message>\n</ng-template>\n\n<button nui-button type=\"button\" (click)=\"openDialog(dialogWizard)\" i18n> Open dialog wizard</button>\n");

/***/ }),

/***/ "i5CQ":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom-example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WizardCustomComponent, WizardCustomExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCustomComponent", function() { return WizardCustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardCustomExampleComponent", function() { return WizardCustomExampleComponent; });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_header_wizard_step_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-header/wizard-step-header.component */ "WuwZ");
/* harmony import */ var _src_lib_wizard_v2_wizard_footer_wizard_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-footer/wizard-footer.component */ "Gufs");
/* harmony import */ var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/progress/progress.component */ "FA8p");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../src/lib/date-picker/date-picker.component */ "uIAT");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");




















function WizardCustomComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 13);
} }
function WizardCustomComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nui-wizard-step-header", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardCustomComponent_ng_container_4_Template_nui_wizard_step_header_click_1_listener() { const step_r5 = ctx.$implicit; return step_r5.select(); })("keydown", function WizardCustomComponent_ng_container_4_Template_nui_wizard_step_header_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10._onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WizardCustomComponent_ng_container_4_div_2_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const isLast_r7 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r6 ? 0 : -1)("id", ctx_r0._getStepLabelId(i_r6))("index", i_r6)("label", step_r5.label || step_r5.stepLabel)("selected", ctx_r0.selectedIndex === i_r6)("active", step_r5.completed || ctx_r0.selectedIndex === i_r6 || !ctx_r0.linear)("step", step_r5)("errorMessage", step_r5.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-posinset", i_r6 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r6))("aria-selected", ctx_r0.selectedIndex == i_r6)("aria-label", step_r5.ariaLabel || null)("aria-labelledby", !step_r5.ariaLabel && step_r5.ariaLabelledby ? step_r5.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !isLast_r7);
} }
function WizardCustomComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0, 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.selected.stepLabel.template);
} }
function WizardCustomComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.selected.label);
} }
function WizardCustomComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getStepContentId(i_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", ctx_r3.selectedIndex === i_r13 ? 0 : null)("aria-labelledby", ctx_r3._getStepLabelId(i_r13))("aria-expanded", ctx_r3.selectedIndex === i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", step_r12.content);
} }
function WizardCustomComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "wizard-footer", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footer", ctx_r4.selected.stepFooter);
} }
const _c0 = [[["", "summary", ""]]];
const _c1 = ["[summary]"];
const _c2 = ["wizard"];
const _c23 = function () { return ["diseaseDetails", "date"]; };
function WizardCustomExampleComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c23)).valid ? "Since " + ((tmp_0_0 = ctx_r1.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c23))) == null ? null : tmp_0_0.value.format("D MMM YYYY")) : "Yes", " ");
} }
function WizardCustomExampleComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function WizardCustomExampleComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function WizardCustomExampleComponent_nui_validation_message_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_nui_validation_message_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_nui_validation_message_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_ng_template_29_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardCustomExampleComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_ng_template_29_ng_container_0_Template, 1, 0, "ng-container", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
} }
function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](0, 39);
} }
function WizardCustomExampleComponent_nui_wizard_step_v2_30_nui_validation_message_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_0_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
} }
const _c40 = function () { return ["diseaseDetails"]; };
function WizardCustomExampleComponent_nui_wizard_step_v2_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-wizard-step-v2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_1_Template, 1, 0, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nui-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nui-date-picker", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WizardCustomExampleComponent_nui_wizard_step_v2_30_nui_validation_message_4_Template, 2, 0, "nui-validation-message", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WizardCustomExampleComponent_nui_wizard_step_v2_30_ng_template_5_Template, 2, 2, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_2_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx_r8.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c40)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r8.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c23)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r8.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c23))) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);
} }
function WizardCustomExampleComponent_nui_validation_message_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_nui_validation_message_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_ng_template_38_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardCustomExampleComponent_ng_template_38_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardCustomExampleComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_ng_template_38_ng_container_0_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardCustomExampleComponent_ng_template_38_ng_container_1_Template, 1, 0, "ng-container", 34);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
} }
function WizardCustomExampleComponent_ng_template_42_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardCustomExampleComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardCustomExampleComponent_ng_template_42_ng_container_0_Template, 1, 0, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardCustomExampleComponent_ng_template_42_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); return _r0.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);
} }
function WizardCustomExampleComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardCustomExampleComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardCustomExampleComponent_ng_template_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); return ctx_r28.validate(_r0.selected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c45 = function () { return ["personDetails", "name"]; };
const _c46 = function () { return ["personDetails", "symptoms"]; };
const _c47 = function () { return ["contactDetails", "email"]; };
const _c48 = function () { return ["personDetails"]; };
const _c49 = function () { return ["contactDetails"]; };
const _c50 = function () { return ["contactDetails", "phone"]; };
class WizardCustomComponent extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["WizardDirective"] {
}
WizardCustomComponent.ɵfac = function WizardCustomComponent_Factory(t) { return ɵWizardCustomComponent_BaseFactory(t || WizardCustomComponent); };
WizardCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WizardCustomComponent, selectors: [["nui-wizard-custom"]], hostAttrs: ["aria-orientation", "horizontal", 1, "nui-wizard-custom-layout"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["WizardDirective"], useExisting: WizardCustomComponent },
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["CdkStepper"], useExisting: WizardCustomComponent },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [[1, "container"], [1, "row", "custom-header"], [1, "col-9", "p-0"], [1, "nui-wizard-horizontal-header-container"], [4, "ngFor", "ngForOf"], [1, "nui-wizard-horizontal-content-container"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], ["class", "nui-wizard-horizontal-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-3", "custom-summary"], ["class", "row nui-wizard-horizontal-footer-container", 4, "ngIf"], [1, "nui-wizard-horizontal-header", 3, "tabIndex", "id", "index", "label", "selected", "active", "step", "errorMessage", "click", "keydown"], ["class", "nui-wizard-horizontal-line", 4, "ngIf"], [1, "nui-wizard-horizontal-line"], [3, "ngTemplateOutlet"], ["role", "tabpanel", 1, "nui-wizard-horizontal-content", 3, "id"], [1, "row", "nui-wizard-horizontal-footer-container"], [3, "footer"]], template: function WizardCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WizardCustomComponent_ng_container_4_Template, 3, 15, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WizardCustomComponent_ng_container_7_Template, 1, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, WizardCustomComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WizardCustomComponent_div_9_Template, 2, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WizardCustomComponent_div_12_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected.stepLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selected.stepLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selected.stepFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_lib_wizard_v2_wizard_step_header_wizard_step_header_component__WEBPACK_IMPORTED_MODULE_6__["WizardStepHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_footer_wizard_footer_component__WEBPACK_IMPORTED_MODULE_7__["WizardFooterComponent"]], styles: [".nui-wizard-custom-layout .container {\n  border: 1px solid;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n}\n.nui-wizard-custom-layout .nui-wizard-step-header {\n  border: 1px solid;\n  border-radius: 5px;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  background: var(--nui-color-bg-content,#fff);\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  padding: 0 8px;\n}\n.nui-wizard-custom-layout .nui-wizard-step-header--selected {\n  background-color: var(--nui-color-active,#0079aa);\n  color: #fff;\n  border-color: transparent;\n}\n.nui-wizard-custom-layout .nui-wizard-step-header--selected .nui-wizard-step-label {\n  color: var(--nui-color-text-inverse,#fff);\n}\n.nui-wizard-custom-layout .custom-header .nui-wizard-horizontal-header-container {\n  border-top: none;\n}\n.nui-wizard-custom-layout .custom-header .nui-wizard-horizontal-header-container .nui-wizard-horizontal-line {\n  margin: 0;\n}\n.nui-wizard-custom-layout .custom-header .custom-summary {\n  border-left: 1px #d9d9d9 solid;\n}\n.nui-wizard-custom-layout .nui-wizard-footer {\n  border: none;\n  justify-content: space-between;\n}\n.nui-wizard-custom-layout .nui-wizard-footer button {\n  min-width: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1jdXN0b20uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxpQkFBQTtFQ0FKLG1EQUFBO0FERko7QUFBQTtFQU9RLGlCQUFBO0VBQ0Esa0JBQUE7RUNOSixtREFBQTtFQUFBLDRDQUFBO0VEU0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFKUjtBQVRBO0VDRUksaURBQUE7RURpQkksV0FBQTtFQUNBLHlCQUFBO0FBTlI7QUFkQTtFQ0VJLHlDQUFBO0FEZUo7QUFqQkE7RUE2QlksZ0JBQUE7QUFUWjtBQXBCQTtFQWdDZ0IsU0FBQTtBQVRoQjtBQXZCQTtFQXlDWSw4QkFBQTtBQWZaO0FBMUJBO0VBOENRLFlBQUE7RUFDQSw4QkFBQTtBQWpCUjtBQTlCQTtFQWtEWSxZQUFBO0VBQ0EsU0FBQTtBQWpCWiIsImZpbGUiOiJ3aXphcmQtY3VzdG9tLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy5sZXNzXCI7XG5cbi5udWktd2l6YXJkLWN1c3RvbS1sYXlvdXR7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogQG51aS1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1saW5lLWRlZmF1bHQpO1xuICAgIH1cblxuICAgIC5udWktd2l6YXJkLXN0ZXAtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyOiBAbnVpLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQsIG51aS1jb2xvci1iZy1jb250ZW50KTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB9XG5cbiAgICAubnVpLXdpemFyZC1zdGVwLWhlYWRlci0tc2VsZWN0ZWQge1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWFjdGl2ZSk7XG5cbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItdGV4dC1saWdodDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAubnVpLXdpemFyZC1zdGVwLWxhYmVse1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1pbnZlcnNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1oZWFkZXIge1xuICAgICAgICAubnVpLXdpemFyZC1ob3Jpem9udGFsLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgICAgICAgLm51aS13aXphcmQtaG9yaXpvbnRhbC1saW5lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLy5udWktd2l6YXJkLWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgICAgICAvLyAgICBwYWRkaW5nOiAwO1xuICAgICAgICAvL31cblxuICAgICAgICAuY3VzdG9tLXN1bW1hcnkge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm51aS13aXphcmQtZm9vdGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });
const ɵWizardCustomComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](WizardCustomComponent);
class WizardCustomExampleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.steps = 1;
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "personDetails": this.formBuilder.group({
                "name": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                "symptoms": [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            "diseaseDetails": this.formBuilder.group({
                "date": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            "contactDetails": this.formBuilder.group({
                "email": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                "phone": [""],
            }),
        });
    }
    ngAfterViewInit() {
        const update = (selectedIndex, steps) => {
            setTimeout(() => {
                if (steps) {
                    this.steps = steps;
                }
                if (selectedIndex !== undefined && selectedIndex >= 0) {
                    this.selectedIndex = selectedIndex;
                }
                this.progress = 100 * (1 + this.selectedIndex) / this.steps;
            });
        };
        this.wizard.selectionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(i => {
            update(i.selectedIndex);
        })).subscribe();
        this.wizard.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(c => {
            update(undefined, c.length);
        })).subscribe();
    }
    validate(step) {
        var _a;
        // mark all fields from current step as touched
        // in order to display the validation messages
        Object.keys(((_a = step.stepControl) === null || _a === void 0 ? void 0 : _a.controls) || {})
            .forEach(key => {
            const field = this.wizard.selected.stepControl.get(key);
            field === null || field === void 0 ? void 0 : field.markAsTouched();
        });
    }
}
WizardCustomExampleComponent.ɵfac = function WizardCustomExampleComponent_Factory(t) { return new (t || WizardCustomExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
WizardCustomExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WizardCustomExampleComponent, selectors: [["nui-wizard-custom-example"]], viewQuery: function WizardCustomExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_0__["STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false },
            }])], decls: 47, vars: 44, consts: function () { let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_605334371811086804$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Person Details");
        i18n_3 = MSG_EXTERNAL_605334371811086804$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟5f59ef3c1033f37e26e42d4c34dbe3a6d59b26ca␟605334371811086804:Person Details`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Name");
        i18n_5 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4120846771083210767$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Do you have Covid ?");
        i18n_7 = MSG_EXTERNAL_4120846771083210767$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟7b395bc36132043b976f1e141e04adcc5926d5a5␟4120846771083210767:Do you have Covid ?`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6277022918162857182$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_10 = goog.getMsg(" Diseases symptoms ");
        i18n_9 = MSG_EXTERNAL_6277022918162857182$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_10;
    }
    else {
        i18n_9 = $localize `:␟375767ee70dccb99058f23ecedcc8c24405727ab␟6277022918162857182: Diseases symptoms `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7162433653691257124$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_12 = goog.getMsg("Disease Details");
        i18n_11 = MSG_EXTERNAL_7162433653691257124$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_12;
    }
    else {
        i18n_11 = $localize `:␟f757fa9193778f02fcaf6263ee76b78576ab6314␟7162433653691257124:Disease Details`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5562779130499238810$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_14 = goog.getMsg("Contact Details");
        i18n_13 = MSG_EXTERNAL_5562779130499238810$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_14;
    }
    else {
        i18n_13 = $localize `:␟43161dab615da78790ff6e28f5730e88b96e21e0␟5562779130499238810:Contact Details`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_16 = goog.getMsg("Email");
        i18n_15 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_16;
    }
    else {
        i18n_15 = $localize `:␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3262236020277300799$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_18 = goog.getMsg("Phone");
        i18n_17 = MSG_EXTERNAL_3262236020277300799$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_18;
    }
    else {
        i18n_17 = $localize `:␟6934d8edd276d59e050006fe91b695ebad0218f8␟3262236020277300799:Phone`;
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_20 = goog.getMsg("Final step");
        i18n_19 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_20;
    }
    else {
        i18n_19 = $localize `:␟0de8f1dbd57123d294729d71fd278eaf936d4a2b␟5385737502167048240:Final step`;
    } let i18n_21; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8016377913006875396$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_22 = goog.getMsg("Thanks for your feedback and take care!");
        i18n_21 = MSG_EXTERNAL_8016377913006875396$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS_22;
    }
    else {
        i18n_21 = $localize `:␟f4be1189665a2b5479c20e64b3590588db56f312␟8016377913006875396:Thanks for your feedback and take care!`;
    } let i18n_24; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3542042671420335679$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__25 = goog.getMsg("No");
        i18n_24 = MSG_EXTERNAL_3542042671420335679$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__25;
    }
    else {
        i18n_24 = $localize `:␟3d3ae7deebc5949b0c1c78b9847886a94321d9fd␟3542042671420335679:No`;
    } let i18n_26; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4467323362722952678$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__27 = goog.getMsg("Unknown");
        i18n_26 = MSG_EXTERNAL_4467323362722952678$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__27;
    }
    else {
        i18n_26 = $localize `:␟e5d8bb389c702588877f039d72178f219453a72d␟4467323362722952678:Unknown`;
    } let i18n_28; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__29 = goog.getMsg(" This is required ");
        i18n_28 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__29;
    }
    else {
        i18n_28 = $localize `:␟42b47c9df37297506ee0ddf14763cb0ddfa58ea6␟5777549257495630003: This is required `;
    } let i18n_30; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4051919749793167830$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__31 = goog.getMsg(" Minimum length is 3 ");
        i18n_30 = MSG_EXTERNAL_4051919749793167830$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__31;
    }
    else {
        i18n_30 = $localize `:␟f2b2fd6e0fe932b925f3ac59d2a9b6c7f1184730␟4051919749793167830: Minimum length is 3 `;
    } let i18n_32; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__33 = goog.getMsg(" This is required ");
        i18n_32 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__33;
    }
    else {
        i18n_32 = $localize `:␟42b47c9df37297506ee0ddf14763cb0ddfa58ea6␟5777549257495630003: This is required `;
    } let i18n_34; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5739234873707288973$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__35 = goog.getMsg("When did you noticed your first symptoms ?");
        i18n_34 = MSG_EXTERNAL_5739234873707288973$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__35;
    }
    else {
        i18n_34 = $localize `:␟bcddbff8ba74b058149e57426d3e0e1bebaa5af2␟5739234873707288973:When did you noticed your first symptoms ?`;
    } let i18n_36; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4177329805747956962$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___37 = goog.getMsg("Disease Details for your Symptoms");
        i18n_36 = MSG_EXTERNAL_4177329805747956962$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___37;
    }
    else {
        i18n_36 = $localize `:␟35a38f292530a0caf89578654f4946701ce21de1␟4177329805747956962:Disease Details for your Symptoms`;
    } let i18n_38; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7318991029858475691$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___39 = goog.getMsg(" Date when disease manifested is required ");
        i18n_38 = MSG_EXTERNAL_7318991029858475691$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS___39;
    }
    else {
        i18n_38 = $localize `:␟e3571ab256189bbeb2d67b21687b9c345a676c12␟7318991029858475691: Date when disease manifested is required `;
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__42 = goog.getMsg(" This is required ");
        i18n_41 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__42;
    }
    else {
        i18n_41 = $localize `:␟42b47c9df37297506ee0ddf14763cb0ddfa58ea6␟5777549257495630003: This is required `;
    } let i18n_43; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8282537682490899422$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__44 = goog.getMsg(" Invalid email ");
        i18n_43 = MSG_EXTERNAL_8282537682490899422$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_CUSTOM_LAYOUT_WIZARD_CUSTOM_EXAMPLE_COMPONENT_TS__44;
    }
    else {
        i18n_43 = $localize `:␟f3a8cb1da2b4fad362bc53bd5b9118b9f26e6cbb␟8282537682490899422: Invalid email `;
    } return [[3, "formGroup"], ["wizard", ""], ["summary", ""], [3, "show", "stacked", "percent", "showNumber"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["label", i18n_3, "formGroupName", "personDetails", 3, "stepControl"], ["caption", i18n_5, 3, "control"], ["formControlName", "name"], ["for", "required", 4, "ngIf"], ["for", "minlength", 4, "ngIf"], ["caption", i18n_7, 3, "control"], ["formControlName", "symptoms", 3, "indeterminate"], i18n_9, ["nuiWizardStepFooter", ""], ["label", i18n_11, "formGroupName", "diseaseDetails", 3, "stepControl", 4, "ngIf"], ["label", i18n_13, "formGroupName", "contactDetails", 3, "stepControl"], ["caption", i18n_15, 3, "control"], ["type", "email", "formControlName", "email"], ["for", "email", 4, "ngIf"], ["caption", i18n_17, 3, "control"], ["type", "email", "formControlName", "phone"], ["label", i18n_19], i18n_21, ["wizardPrevious", ""], ["wizardNext", ""], i18n_24, i18n_26, ["for", "required"], i18n_28, ["for", "minlength"], i18n_30, i18n_32, [4, "ngTemplateOutlet"], ["label", i18n_11, "formGroupName", "diseaseDetails", 3, "stepControl"], ["nuiWizardStepLabel", ""], ["caption", i18n_34, 3, "control"], ["formControlName", "date"], i18n_36, i18n_38, i18n_41, ["for", "email"], i18n_43, ["type", "button", "nui-button", "", 3, "click"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"]]; }, template: function WizardCustomExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nui-wizard-custom", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nui-progress", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Symptoms: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WizardCustomExampleComponent_ng_container_15_Template, 2, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WizardCustomExampleComponent_ng_container_16_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WizardCustomExampleComponent_ng_container_17_Template, 2, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "nui-wizard-step-v2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nui-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "nui-textbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, WizardCustomExampleComponent_nui_validation_message_23_Template, 2, 0, "nui-validation-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, WizardCustomExampleComponent_nui_validation_message_24_Template, 2, 0, "nui-validation-message", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "nui-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nui-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](27, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, WizardCustomExampleComponent_nui_validation_message_28_Template, 2, 0, "nui-validation-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, WizardCustomExampleComponent_ng_template_29_Template, 1, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, WizardCustomExampleComponent_nui_wizard_step_v2_30_Template, 6, 6, "nui-wizard-step-v2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "nui-wizard-step-v2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "nui-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "nui-textbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, WizardCustomExampleComponent_nui_validation_message_34_Template, 2, 0, "nui-validation-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, WizardCustomExampleComponent_nui_validation_message_35_Template, 2, 0, "nui-validation-message", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "nui-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "nui-textbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, WizardCustomExampleComponent_ng_template_38_Template, 2, 2, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "nui-wizard-step-v2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](41, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, WizardCustomExampleComponent_ng_template_42_Template, 3, 1, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, WizardCustomExampleComponent_ng_template_43_Template, 2, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, WizardCustomExampleComponent_ng_template_45_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_10_0 = null;
        let tmp_13_0 = null;
        let tmp_14_0 = null;
        let tmp_16_0 = null;
        let tmp_17_0 = null;
        let tmp_18_0 = null;
        let tmp_21_0 = null;
        let tmp_22_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show", true)("stacked", true)("percent", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 25, ctx.progress, "1.0-0"))("showNumber", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Step ", ctx.selectedIndex + 1, " out of ", ctx.steps, " steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Name: ", ((tmp_6_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](28, _c45))) == null ? null : tmp_6_0.value) || "Not provided", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", (tmp_7_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c46))) == null ? null : tmp_7_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Email: ", ((tmp_10_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c47))) == null ? null : tmp_10_0.value) || "Not provided", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c48)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](32, _c45)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](33, _c45))) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c45))) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](35, _c46)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("indeterminate", (tmp_16_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](36, _c46))) == null ? null : tmp_16_0.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](37, _c46))) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](38, _c46))) == null ? null : tmp_18_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](39, _c49)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](40, _c47)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](41, _c47))) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_22_0 = ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](42, _c47))) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.formGroup.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c50)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], WizardCustomComponent, _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__["ProgressComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_9__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_10__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_11__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxComponent"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_13__["WizardStepFooterDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_15__["WizardStepLabelDirective"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_16__["DatePickerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_17__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_18__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_18__["WizardStepperNextDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".nui-wizard-custom-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-step-header[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-radius: 5px;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  background: var(--nui-color-bg-content,#fff);\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  padding: 0 8px;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-step-header--selected[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-active,#0079aa);\n  color: #fff;\n  border-color: transparent;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-step-header--selected[_ngcontent-%COMP%]   .nui-wizard-step-label[_ngcontent-%COMP%] {\n  color: var(--nui-color-text-inverse,#fff);\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]   .nui-wizard-horizontal-header-container[_ngcontent-%COMP%] {\n  border-top: none;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]   .nui-wizard-horizontal-header-container[_ngcontent-%COMP%]   .nui-wizard-horizontal-line[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .custom-header[_ngcontent-%COMP%]   .custom-summary[_ngcontent-%COMP%] {\n  border-left: 1px #d9d9d9 solid;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-footer[_ngcontent-%COMP%] {\n  border: none;\n  justify-content: space-between;\n}\n.nui-wizard-custom-layout[_ngcontent-%COMP%]   .nui-wizard-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1jdXN0b20uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxpQkFBQTtFQ0FKLG1EQUFBO0FERko7QUFBQTtFQU9RLGlCQUFBO0VBQ0Esa0JBQUE7RUNOSixtREFBQTtFQUFBLDRDQUFBO0VEU0ksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFKUjtBQVRBO0VDRUksaURBQUE7RURpQkksV0FBQTtFQUNBLHlCQUFBO0FBTlI7QUFkQTtFQ0VJLHlDQUFBO0FEZUo7QUFqQkE7RUE2QlksZ0JBQUE7QUFUWjtBQXBCQTtFQWdDZ0IsU0FBQTtBQVRoQjtBQXZCQTtFQXlDWSw4QkFBQTtBQWZaO0FBMUJBO0VBOENRLFlBQUE7RUFDQSw4QkFBQTtBQWpCUjtBQTlCQTtFQWtEWSxZQUFBO0VBQ0EsU0FBQTtBQWpCWiIsImZpbGUiOiJ3aXphcmQtY3VzdG9tLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy5sZXNzXCI7XG5cbi5udWktd2l6YXJkLWN1c3RvbS1sYXlvdXR7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlcjogQG51aS1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1saW5lLWRlZmF1bHQpO1xuICAgIH1cblxuICAgIC5udWktd2l6YXJkLXN0ZXAtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyOiBAbnVpLWxpbmUtZGVmYXVsdCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQsIG51aS1jb2xvci1iZy1jb250ZW50KTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB9XG5cbiAgICAubnVpLXdpemFyZC1zdGVwLWhlYWRlci0tc2VsZWN0ZWQge1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWFjdGl2ZSk7XG5cbiAgICAgICAgY29sb3I6IEBudWktY29sb3ItdGV4dC1saWdodDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAubnVpLXdpemFyZC1zdGVwLWxhYmVse1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1pbnZlcnNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1oZWFkZXIge1xuICAgICAgICAubnVpLXdpemFyZC1ob3Jpem9udGFsLWhlYWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgICAgICAgLm51aS13aXphcmQtaG9yaXpvbnRhbC1saW5lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLy5udWktd2l6YXJkLWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICAgICAgICAvLyAgICBwYWRkaW5nOiAwO1xuICAgICAgICAvL31cblxuICAgICAgICAuY3VzdG9tLXN1bW1hcnkge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IEBudWktbGluZS1kZWZhdWx0IEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm51aS13aXphcmQtZm9vdGVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"] });


/***/ }),

/***/ "iAoM":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./wizard-docs/wizard-docs.component\";\nexport * from \"./wizard-horizontal-layout/wizard-horizontal-example.component\";\nexport * from \"./wizard-vertical-layout/wizard-vertical-example.component\";\nexport * from \"./wizard-custom-layout/wizard-custom-example.component\";\nexport * from \"./wizard-busy/wizard-busy.example.component\";\nexport * from \"./wizard-dialog/wizard-dialog.example.component\";\nexport * from \"./wizard-custom-footer/wizard-custom-footer-example.component\";\nexport * from \"./wizard-dynamic/wizard-dynamic.example.component\";\nexport * from \"./wizard-remove-step/wizard-remove-step-example.component\";\nexport * from \"./wizard-async-validation-form/wizard-async-form-validation.example.component\";\nexport * from \"./wizard-with-custom-icons/wizard-with-custom-icons-example.component\";\nexport * from \"./wizard-restore-state/wizard-restore-state.example.component\";\nexport * from \"./wizard-step-change-example/wizard-step-change-example.component\";\nexport * from \"./wizard-responsive-header/wizard-responsive-header-example.component\";\nexport * from \"./wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component\";\nexport * from \"./wizard-tooltip/wizard-tooltip-example.component\";\n\n");

/***/ }),

/***/ "jYwr":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-async-validation-form/wizard-async-form-validation.example.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nui-busy [busy]=\"busy\">\n    <form [formGroup]=\"form\" *ngIf=\"form\">\n        <nui-wizard-horizontal #wizard>\n            <nui-wizard-step-v2 label=\"Person Details\"\n                                formGroupName=\"personDetails\"\n                                [stepControl]=\"form.get(['personDetails'])\">\n                <nui-form-field class=\"p-5\" \n                                [control]=\"form.get(['personDetails','name'])\"\n                                i18n-caption\n                                caption=\"Name\">\n                    <nui-textbox formControlName=\"name\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['personDetails','name'])?.errors?.required\"\n                                            i18n>\n                        This is required\n                    </nui-validation-message>\n                </nui-form-field>\n\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n                </ng-template>\n            </nui-wizard-step-v2>\n\n            <nui-wizard-step-v2 formGroupName=\"contactDetails\"\n                                [stepControl]=\"form.get(['contactDetails'])\">\n\n                <ng-template nuiWizardStepLabel>\n                    <span (click)=\"onNextClick(wizard.selected)\">Contact Details</span>\n                </ng-template>\n\n                <nui-form-field class=\"p-5\"\n                                [control]=\"form.get(['contactDetails','email'])\"\n                                i18n-caption\n                                caption=\"Email\">\n                    <nui-textbox type=\"email\" formControlName=\"email\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['contactDetails','email'])?.errors?.required\"\n                                            i18n>\n                        This is required\n                    </nui-validation-message>\n\n                    <nui-validation-message for=\"email\"\n                                            *ngIf=\"form.get(['contactDetails','email'])?.errors?.email\"\n                                            i18n>\n                        Invalid email\n                    </nui-validation-message>\n                </nui-form-field>\n\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                        Finish\n                    </button>\n                </ng-template>\n                \n            </nui-wizard-step-v2>\n\n            <ng-template #wizardCancel>\n                <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n                    Cancel\n                </button>\n            </ng-template>\n\n            <ng-template #wizardPrevious>\n                <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n                    Back\n                </button>\n            </ng-template>\n\n            <ng-template #wizardNext>\n                <button nuiWizardNext\n                        type=\"button\"\n                        nui-button\n                        displayStyle=\"primary\"\n                        icon=\"caret-right\"\n                        iconRight=\"true\"\n                        (click)=\"onNextClick(wizard.selected)\"\n                >Next</button>\n            </ng-template>\n        </nui-wizard-horizontal>\n    </form>\n\n    <nui-spinner size=\"large\"\n                 i18n-message\n                 message=\"Async Validation is firing...\">\n    </nui-spinner>\n</div>\n");

/***/ }),

/***/ "knXS":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-restore-state/wizard-restore-state.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { DialogService, NuiDialogRef, WizardStepV2Component, IWizardState, ToastService } from \"@nova-ui/bits\";\nimport isEqual from \"lodash/isEqual\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-restore-state-example\",\n    templateUrl: \"./wizard-restore-state.example.component.html\",\n    styleUrls: [\"wizard-restore-state.example.component.less\"],\n})\nexport class WizardRestoreStateExampleComponent implements OnInit, OnDestroy {\n    public form: FormGroup;\n    public activeDialog: NuiDialogRef;\n    public state: IWizardState;\n    public dynamicSteps: IWizardStepData[] = [];\n    public awesome: boolean = false;\n\n    private destroy$: Subject<any> = new Subject();\n\n    @ViewChild(\"dynamicTemplate1\") public template1: TemplateRef<string>;\n    @ViewChild(\"dynamicTemplate2\") public template2: TemplateRef<string>;\n\n    constructor(\n        private formBuilder: FormBuilder,\n        @Inject(DialogService) private dialogService: DialogService,\n        private toastService: ToastService\n    ) { }\n\n    ngOnInit(): void {\n        this.form = new FormGroup({\n            \"personDetails\": this.formBuilder.group({\n                \"name\": [\n                    \"\",\n                    [Validators.required, Validators.minLength(3)],\n                ],\n                \"privacy\": [false, [Validators.requiredTrue]],\n            }),\n            \"organization\": this.formBuilder.group({\n                \"title\": [\"\", [Validators.required]],\n                \"date\": [\"\", [Validators.required]],\n                \"createDynamicStep1\": [false],\n                \"createDynamicStep2\": [false],\n            }),\n            \"contactDetails\": this.formBuilder.group({\n                \"email\": [\"\", [Validators.required, Validators.email]],\n                \"options\": [\"\"],\n            }),\n        });\n\n        this.form.get([\"organization\", \"createDynamicStep1\"])?.valueChanges\n            .pipe(takeUntil(this.destroy$))\n            .subscribe(changes => {\n                this.handleDynamicSteps(\"I was created dynamically!\", this.template1, changes);\n            });\n\n        this.form.get([\"organization\", \"createDynamicStep2\"])?.valueChanges\n            .pipe(takeUntil(this.destroy$))\n            .subscribe(changes => {\n                this.handleDynamicSteps(\"Another dynamic step\", this.template2, changes);\n            });\n    }\n\n    ngOnDestroy(): void {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n    public openDialog(content: TemplateRef<string>): void {\n        this.activeDialog = this.dialogService.open(content, { size: \"lg\" });\n    }\n\n    public closeDialog(): void {\n        this.activeDialog.close();\n    }\n\n    public saveState(state: IWizardState): void {\n        this.state = state;\n    }\n\n    public completeWizard(formControlName: string, step: WizardStepV2Component): void {\n        this.validateStep(formControlName);\n\n        if (!this.form.valid) {\n            return;\n        }\n\n        step.completed = true;\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n        this.activeDialog.close();\n    }\n\n    public resetStep(step: WizardStepV2Component): void {\n        step.reset();\n    }\n\n    private validateStep(formGroup: string): void {\n        this.form.get(formGroup)?.markAllAsTouched();\n    }\n\n    private handleDynamicSteps(title: string, template: TemplateRef<string>, controlValue: boolean) {\n        const newStep: IWizardStepData = { title: title, templateRef: template };\n        const index = this.dynamicSteps.findIndex(step => isEqual(step, newStep));\n\n        controlValue\n            ? this.dynamicSteps.push({ ...newStep })\n            : this.dynamicSteps.splice(index, 1);\n    }\n}\n");

/***/ }),

/***/ "lKXi":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WizardDialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardDialogExampleComponent", function() { return WizardDialogExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_overlay_overlay_component_overlay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/overlay/overlay-component/overlay.component */ "eWZz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");

















function WizardDialogExampleComponent_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Completed");
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_13_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_ng_template_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.toggleBusy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Toggle busy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_0_ng_template_13_ng_container_2_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardDialogExampleComponent_ng_template_0_ng_template_13_ng_container_3_Template, 1, 0, "ng-container", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Active");
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_19_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_ng_template_19_ng_container_0_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_0_ng_template_19_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_0_ng_template_19_ng_container_2_Template, 1, 0, "ng-container", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Not visited");
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_25_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_25_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_ng_template_25_ng_container_0_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_0_ng_template_25_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_0_ng_template_25_ng_container_2_Template, 1, 0, "ng-container", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Summary");
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_31_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_ng_template_31_ng_container_0_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_0_ng_template_31_ng_container_1_Template, 1, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_ng_template_31_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r31.finishWizard(); _r18.hide(); return ctx_r31.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14);
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_ng_template_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.openConfirmationOverlay(_r18, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDialogExampleComponent_ng_template_0_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardDialogExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardDialogExampleComponent_ng_template_0_Template_nui_dialog_header_closed_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-wizard-horizontal", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WizardDialogExampleComponent_ng_template_0_ng_template_9_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardDialogExampleComponent_ng_template_0_ng_template_13_Template, 4, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WizardDialogExampleComponent_ng_template_0_ng_template_15_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, WizardDialogExampleComponent_ng_template_0_ng_template_19_Template, 3, 3, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WizardDialogExampleComponent_ng_template_0_ng_template_21_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, WizardDialogExampleComponent_ng_template_0_ng_template_25_Template, 3, 3, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-wizard-step-v2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, WizardDialogExampleComponent_ng_template_0_ng_template_27_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](30, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WizardDialogExampleComponent_ng_template_0_ng_template_31_Template, 4, 2, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WizardDialogExampleComponent_ng_template_0_ng_template_32_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, WizardDialogExampleComponent_ng_template_0_ng_template_34_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WizardDialogExampleComponent_ng_template_0_ng_template_36_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nui-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-overlay", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Really want to leave? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](47, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); return _r18.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_ng_template_0_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); _r18.hide(); return ctx_r38.closeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Leave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r1.busy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleReference", _r2);
} }
class WizardDialogExampleComponent {
    constructor(dialogService, toastService) {
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.overlayTriggered$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.busy = false;
        this.vegetables = [
            $localize `Cabbage`,
            $localize `Potato`,
            $localize `Tomato`,
            $localize `Carrot`,
        ];
        this.selectedVegetables = [$localize `Potato`, $localize `Tomato`];
    }
    isChecked(vegetable) {
        return this.selectedVegetables.indexOf(vegetable) > -1;
    }
    valuesChanged(values) {
        this.selectedVegetables = [...values];
    }
    openDialog(content) {
        this.activeDialog = this.dialogService.open(content, {
            size: "lg",
            windowClass: "active-dialog",
        });
    }
    closeDialog() {
        this.activeDialog.close();
    }
    toggleBusy() {
        this.busy = !this.busy;
        setTimeout(() => {
            this.busy = false;
        }, 3000);
    }
    // Open confirmation overlay
    openConfirmationOverlay(overlay, wizard) {
        var _a;
        if (wizard.selectedIndex === 0) {
            this.closeDialog();
            return;
        }
        this.overlayTriggered$.next();
        // Toggling the overlay to get an access to the 'overlayRef'
        overlay.toggle();
        this.overlayRef = overlay.getOverlayRef();
        // Here we update the positions for the overlay. By default, the overlay service connects the overlay to the bottom-left
        // corner of the toggle reference element. We change this behavior here by setting new positions, since we want overlay to
        // stick to the upper-top corner of the parent container
        this.overlayRef.getConfig().positionStrategy.withPositions([{
                originX: "start",
                originY: "top",
                overlayX: "start",
                overlayY: "top",
            }]);
        // We update the size of the overlay container to follow the dimensions of the new 'toggle reference' container we set in the very first step
        this.updateOverlayDimensions(overlay);
        // Handling ESC events inside overlay
        (_a = this.activeDialog) === null || _a === void 0 ? void 0 : _a.closed$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.overlayTriggered$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.onDestroy$)).subscribe(() => overlay.hide());
    }
    open(content) {
        this.activeDialog = this.dialogService.open(content, { size: "lg", backdrop: "static", useOverlay: true });
    }
    actionDone() {
        this.activeDialog.close();
    }
    onContainerResize(overlay) {
        this.updateOverlayDimensions(overlay);
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.overlayTriggered$.complete();
    }
    updateOverlayDimensions(overlay) {
        var _a;
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.updateSize({
            width: overlay.toggleReference.getBoundingClientRect().width,
            height: overlay.toggleReference.getBoundingClientRect().height,
        });
    }
}
WizardDialogExampleComponent.ɵfac = function WizardDialogExampleComponent_Factory(t) { return new (t || WizardDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
WizardDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardDialogExampleComponent, selectors: [["nui-wizard-v2-dialog-example"]], decls: 4, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6576529212829839238$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Open dialog wizard\n");
        i18n_0 = MSG_EXTERNAL_6576529212829839238$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3b7b7dc38a7e4341daf9a73684d37fe7bc08d2d1␟6576529212829839238: Open dialog wizard
`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2559467589081529119$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Wizard dialog");
        i18n_2 = MSG_EXTERNAL_2559467589081529119$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟bfccc7449a42f7d944233041ac0d93921c543934␟2559467589081529119:Wizard dialog`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6849091314002358955$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("This is the first step of our horizontal wizard.");
        i18n_4 = MSG_EXTERNAL_6849091314002358955$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟a616b432b88a4942fd2094a80dbc2eed38f7de42␟6849091314002358955:This is the first step of our horizontal wizard.`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1651087672748480586$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("This is the second step of our horizontal wizard.");
        i18n_6 = MSG_EXTERNAL_1651087672748480586$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟34ecf95e60a82e2978d3a4d812503b068cac3aba␟1651087672748480586:This is the second step of our horizontal wizard.`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7104742727847308533$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("This is the third step of our horizontal wizard");
        i18n_8 = MSG_EXTERNAL_7104742727847308533$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟95e8f79c6ab835e5be1e96ec6afe816aba2d855e␟7104742727847308533:This is the third step of our horizontal wizard`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("We finally reached our last step");
        i18n_10 = MSG_EXTERNAL_7100330853882173244$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟414c233c4cbaae1a74728ed5d64304bbd36cdbe5␟7100330853882173244:We finally reached our last step`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Data is loading from remote server...");
        i18n_12 = MSG_EXTERNAL_25258399261550967$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__13;
    }
    else {
        i18n_12 = $localize `:␟dc0a65d80c4379ceca3424563f96da6b49156f5c␟25258399261550967:Data is loading from remote server...`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7102495419400096836$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__15 = goog.getMsg(" There is at least one accomplished step within this wizard. Are you sure you want to leave? ");
        i18n_14 = MSG_EXTERNAL_7102495419400096836$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__15;
    }
    else {
        i18n_14 = $localize `:␟55d9b5b02da3a3ca355e4efd2fe345f67a037f56␟7102495419400096836: There is at least one accomplished step within this wizard. Are you sure you want to leave? `;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2724296301677750489$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS___17 = goog.getMsg(" Finish ");
        i18n_16 = MSG_EXTERNAL_2724296301677750489$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS___17;
    }
    else {
        i18n_16 = $localize `:␟7bb9d8723ecb7b3ed6b5c6a1f4293319cd0046c5␟2724296301677750489: Finish `;
    } return [["dialogWizard", ""], ["nui-button", "", "type", "button", 3, "click"], i18n_0, ["nuiResizeObserver", ""], ["dialog", ""], ["nui-busy", "", 3, "busy"], [1, "busy-content"], ["title", i18n_2, 3, "closed"], [1, "dialog-body", "compact-mode"], ["wizard", ""], ["nuiWizardStepLabel", ""], [1, "step-content-wrapper"], i18n_4, ["nuiWizardStepFooter", ""], i18n_6, i18n_8, i18n_10, ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], ["size", "large", "message", i18n_12], [3, "toggleReference"], ["overlay", ""], [1, "overlay-class"], [1, "overlay-content"], [1, "header"], [1, "body"], i18n_14, [1, "footer"], ["nui-button", "", "displayStyle", "action", "type", "button", 3, "click"], ["type", "button", "nui-button", "", "icon", "reload", 1, "btn-busy", 3, "click"], [4, "ngTemplateOutlet"], ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_16, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]]; }, template: function WizardDialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_Template, 53, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.openDialog(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_5__["BusyComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_6__["DialogHeaderComponent"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_7__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_8__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_9__["WizardStepLabelDirective"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_10__["WizardStepFooterDirective"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"], _src_lib_overlay_overlay_component_overlay_component__WEBPACK_IMPORTED_MODULE_12__["OverlayComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_14__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_14__["WizardStepperNextDirective"]], styles: [".step-content-wrapper[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.btn-busy[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.overlay-class[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--nui-color-overlay-busy,rgba(255, 255, 255, 0.9));\n}\n.overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 460px;\n  margin: auto;\n  padding: 30px;\n  background-color: var(--nui-color-bg-content,#fff);\n}\n.overlay-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n  line-height: 22px;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--nui-color-text-default,#111);\n}\n.overlay-content[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  line-height: 18px;\n  font-size: 13px;\n}\n.overlay-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.overlay-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   button[displayStyle=\"action\"][_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC1kaWFsb2cuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbnVpLWZyYW1ld29yay10eXBvZ3JhcGh5Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxhQUFBO0FBSEo7QUFNQTtFQUNJLGtCQUFBO0FBSko7QUFRSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VDVkosd0VBQUE7QURLSjtBQVNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VDcEJKLGtEQUFBO0FEY0o7QUFBSTtFQVVRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VFMUJSLGlCQUFBO0VBQ0EsZUFBQTtFQVlBLGdCQUFBO0VEYkEseUNBQUE7QUR1Qko7QUFUSTtFQWlCUSxhQUFBO0VBQ0Esa0JBQUE7RUVoQ1IsaUJBQUE7RUFDQSxlQUFBO0FGNEJKO0FBZkk7RUF1QlEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFMWjtBQXBCSTtFQTRCWSxrQkFBQTtBQUxoQiIsImZpbGUiOiJ3aXphcmQtZGlhbG9nLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay1jb2xvcnNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXNwYWNlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdHlwb2dyYXBoeVwiO1xuXG4uc3RlcC1jb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IEBudWktc3BhY2UtbWQ7XG59XG5cbi5idG4tYnVzeSB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgJi1jbGFzcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1vdmVybGF5LWJ1c3kpO1xuICAgIH1cblxuICAgICYtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDQ2MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IChAbnVpLXNwYWNlLW1kICogMik7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3ItYmctY29udGVudCk7XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBAbnVpLXNwYWNlLW1kO1xuICAgICAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBidXR0b25bZGlzcGxheVN0eWxlPVwiYWN0aW9uXCJdIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IEBudWktc3BhY2UtbWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zLmxlc3NcIjtcblxuLyogZm9udC1zaXplICovXG4ubnVpLXRleHQtc2l6ZShAc2l6ZTogZGVmYXVsdCkge1xuICAgIGxpbmUtaGVpZ2h0OiB+XCJAe251aS1saW5lLWhlaWdodC1Ae3NpemV9fVwiO1xuICAgIGZvbnQtc2l6ZTogflwiQHtudWktZm9udC1zaXplLUB7c2l6ZX19XCI7XG59XG4vKiBmb250LXNpemUgZW5kcyAqL1xuXG4ubnVpLXRleHQtcGFnZSgpIHtcbiAgICAubnVpLXRleHQtc2l6ZShoZXJvKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xufVxuXG4ubnVpLXRleHQtd2lkZ2V0KCkge1xuICAgIC5udWktdGV4dC1zaXplKGJpZyk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbn1cblxuLm51aS10ZXh0LXBhbmVsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtbGFiZWwoQGNvbG9yLCBAY29sb3JOYW1lKSB7XG4gICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtc2VtaWJvbGQ7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtZGVmYXVsdChAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LXNlY29uZGFyeShAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAY29sb3IsIEBjb2xvck5hbWUpIHtcbiAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLm51aS10ZXh0LXNtYWxsKEBjb2xvciwgQGNvbG9yTmFtZSkge1xuICAgIC5udWktdGV4dC1zaXplKHNtYWxsKTtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgIGNvbG9yOiBAY29sb3I7XG4gICAgY29sb3I6IH5cInZhcigtLUB7Y29sb3JOYW1lfSxAe2NvbG9yfSlcIjtcbn1cblxuLy8gVGhpcyBtaXhpbiBpcyBkZXByZWNhdGVkLiBVc2UgbnVpLXRleHQtc21hbGwoKSBpbnN0ZWFkXG4ubnVpLXRleHQtaGludChAY29sb3IsIEBjb2xvck5hbWUpICB7XG4gICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgY29sb3I6IEBjb2xvcjtcbiAgICBjb2xvcjogflwidmFyKC0tQHtjb2xvck5hbWV9LEB7Y29sb3J9KVwiO1xufVxuXG4ubnVpLXRleHQtaG92ZXJhYmxlKCkge1xuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBkb3R0ZWQ7XG59XG5cbi5udWktdGV4dC1zbWFsbC1zZWNvbmRhcnkoKSB7XG4gICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLy9zZW1hbnRpYyBzdHlsZXNcbi5udWktdGV4dCB7XG4gICAgJi1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCwgbnVpLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICAgIH1cbiAgICAmLXByb2R1Y3Qge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShoZXJvKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1yb2JvdG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LWJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtcGFnZSB7XG4gICAgICAgIC5udWktdGV4dC1wYWdlKCk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1wYWdlKCk7XG4gICAgICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXdpZGdldCB7XG4gICAgICAgIC5udWktdGV4dC13aWRnZXQoKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXdpZGdldCgpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1wYW5lbCB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICB9XG5cbiAgICAmLXBhbmVsLS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtZGVmYXVsdCxudWktY29sb3ItdGV4dC1kZWZhdWx0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1wYW5lbChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtcGFuZWwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXBhbmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtbGFiZWwtLWludmVyc2Uge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWludmVyc2UsbnVpLWNvbG9yLXRleHQtaW52ZXJzZSk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LWxhYmVsKEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuXG4gICAgJi1sYWJlbC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtbGFiZWwoQG51aS1jb2xvci10ZXh0LWxpZ2h0LG51aS1jb2xvci10ZXh0LWxpZ2h0KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0taW52ZXJzZS1zZWxlY3RlZCB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyLG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIpO1xuICAgIH1cblxuICAgICYtZGVmYXVsdC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWRlZmF1bHQsbnVpLWNvbG9yLXRleHQtZGVmYXVsdCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1kZWZhdWx0KEBudWktY29sb3ItdGV4dC1saWdodCxudWktY29sb3ItdGV4dC1saWdodCk7XG4gICAgfVxuICAgICYtZGVmYXVsdC0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtbGlnaHQsbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1kZWZhdWx0LS1kYXJrYmctc2VsZWN0ZWQge1xuICAgICAgICAubnVpLXRleHQtZGVmYXVsdChAbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2JhcixudWktY29sb3ItdGV4dC1oaWdobGlnaHQtcGxhdGZvcm1fYmFyKTtcbiAgICB9XG5cbiAgICAmLWRlZmF1bHQtLWRhcmtiZy1zZWxlY3RlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWRlZmF1bHQoQG51aS1jb2xvci10ZXh0LWhpZ2hsaWdodC1wbGF0Zm9ybV9iYXIsbnVpLWNvbG9yLXRleHQtaGlnaGxpZ2h0LXBsYXRmb3JtX2Jhcik7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGFya2JnLS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtc2Vjb25kYXJ5LS1kaXNhYmxlZCB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG5cbiAgICAmLXNlY29uZGFyeS0tZGlzYWJsZWQtLWhvdmVyYWJsZSB7XG4gICAgICAgIC5udWktdGV4dC1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgIH1cblxuICAgICYtbGluayB7XG4gICAgICAgIC5udWktdGV4dC1zaXplKGRlZmF1bHQpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1yZWd1bGFyO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWxpbmspO1xuICAgIH1cbiAgICAmLWxpbms6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmLWxpbmstc21hbGwge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShzbWFsbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLXRleHQtbGluayk7XG4gICAgfVxuICAgICYtbGluay1zbWFsbDpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICYtc291cmNlLWNvZGUge1xuICAgICAgICAubnVpLXRleHQtc2l6ZShkZWZhdWx0KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zb3VyY2UtY29kZS1wcm87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG5cbiAgICAgICAgJi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNpemUoZGVmYXVsdCk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXNvdXJjZS1jb2RlLXBybztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLXRpdGxlLXNlY29uZGFyeSB7XG4gICAgICAgIC5udWktdGV4dC10aXRsZS1zZWNvbmRhcnkoQG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXRpdGxlLXNlY29uZGFyeShAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgICYtdGl0bGUtc2Vjb25kYXJ5LS1kYXJrYmcge1xuICAgICAgICAubnVpLXRleHQtdGl0bGUtc2Vjb25kYXJ5KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLXNtYWxsIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgIH1cblxuICAgICYtc21hbGwtc2Vjb25kYXJ5IHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtc21hbGwtc2Vjb25kYXJ5LS1pbnZlcnNlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1pbnZlcnNlLXNlY29uZGFyeSk7XG5cbiAgICAgICAgJi0taG92ZXJhYmxlIHtcbiAgICAgICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtaW52ZXJzZS1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC0taW52ZXJzZSB7XG4gICAgICAgIC5udWktdGV4dC1zbWFsbChAbnVpLWNvbG9yLXRleHQtaW52ZXJzZSxudWktY29sb3ItdGV4dC1pbnZlcnNlKTtcblxuICAgICAgICAmLS1ob3ZlcmFibGUge1xuICAgICAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1pbnZlcnNlLG51aS1jb2xvci10ZXh0LWludmVyc2UpO1xuICAgICAgICAgICAgLm51aS10ZXh0LWhvdmVyYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1zbWFsbC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kZWZhdWx0LG51aS1jb2xvci10ZXh0LWRlZmF1bHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGFya2JnIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1saWdodCwgbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgIH1cblxuICAgICYtc21hbGwtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1saWdodCwgbnVpLWNvbG9yLXRleHQtbGlnaHQpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi1zbWFsbC0tZGlzYWJsZWQge1xuICAgICAgICAubnVpLXRleHQtc21hbGwoQG51aS1jb2xvci10ZXh0LWRpc2FibGVkLG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbiAgICB9XG5cbiAgICAmLXNtYWxsLS1kaXNhYmxlZC0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LXNtYWxsKEBudWktY29sb3ItdGV4dC1kaXNhYmxlZCxudWktY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAvLyBgbnVpLXRleHQtaGludGAgc3R5bGVzIGFyZSBkZXByZWNhdGVkLiBVc2UgYG51aS10ZXh0LXNtYWxsLXNlY29uZGFyeWAgaW5zdGVhZC5cbiAgICAmLWhpbnQge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgJi1oaW50LS1ob3ZlcmFibGUge1xuICAgICAgICAubnVpLXRleHQtaGludChAbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5LG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIC5udWktdGV4dC1ob3ZlcmFibGUoKTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWRhcmtiZyB7XG4gICAgICAgIC5udWktdGV4dC1oaW50KEBudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnksbnVpLWNvbG9yLXRleHQtbGlnaHQtc2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICAmLWhpbnQtLWRhcmtiZy0taG92ZXJhYmxlIHtcbiAgICAgICAgLm51aS10ZXh0LWhpbnQoQG51aS1jb2xvci10ZXh0LWxpZ2h0LXNlY29uZGFyeSxudWktY29sb3ItdGV4dC1saWdodC1zZWNvbmRhcnkpO1xuICAgICAgICAubnVpLXRleHQtaG92ZXJhYmxlKCk7XG4gICAgfVxuXG4gICAgJi12YWxpZGF0aW9uIHtcbiAgICAgICAgLm51aS10ZXh0LXNpemUoc21hbGwpO1xuICAgICAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1jcml0aWNhbCk7XG4gICAgfVxuXG4gICAgJi1lbGxpcHNpcyB7XG4gICAgICAgIC50ZXh0LW92ZXJmbG93KGVsbGlwc2lzKTtcbiAgICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "mO7N":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-custom-icons/wizard-with-custom-icons-example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport { IWizardConfig, ToastService, WizardHorizontalComponent, WizardStepStateConfig, WIZARD_CONFIG } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-with-custom-icons-example\",\n    templateUrl: \"./wizard-with-custom-icons-example.component.html\",\n    providers: [\n        {\n            provide: WIZARD_CONFIG,\n            useValue: {\n                stepState: {\n                    active: {\n                        icon: \"email\",\n                        iconColor: \"orange\",\n                    },\n                },\n            } as IWizardConfig,\n        },\n    ],\n})\nexport class WizardWithCustomIconsExampleComponent {\n    @ViewChild(\"wizard\") wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public secondStepIconConfig: Partial<WizardStepStateConfig> = {\n        initial: {\n            icon: \"execute\",\n            iconColor: \"primary-blue\",\n        },\n        visited: {\n            icon: \"star-full\",\n            iconColor: \"light-blue\",\n        },\n        active: {\n            icon: \"star-full\",\n            iconColor: \"orange\",\n        },\n    };\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "mbMD":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-dialog/wizard-dialog.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject, OnDestroy, TemplateRef } from \"@angular/core\";\nimport {\n    DialogService,\n    NuiDialogRef,\n    OverlayComponent,\n    ToastService,\n    WizardHorizontalComponent,\n} from \"@nova-ui/bits\";\nimport { FlexibleConnectedPositionStrategy, OverlayRef } from \"@angular/cdk/overlay\";\nimport { takeUntil } from \"rxjs/operators\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-wizard-v2-dialog-example\",\n    templateUrl: \"./wizard-dialog.example.component.html\",\n    styleUrls: [\"./wizard-dialog.example.component.less\"],\n})\nexport class WizardDialogExampleComponent implements OnDestroy {\n    public onDestroy$ = new Subject<void>();\n    public overlayTriggered$ = new Subject<void>();\n\n    private overlayRef: OverlayRef;\n    public busy: boolean = false;\n    public activeDialog: NuiDialogRef;\n\n    constructor(\n        @Inject(DialogService) private dialogService: DialogService,\n        private toastService: ToastService\n    ) { }\n\n    public vegetables = [\n        $localize`Cabbage`,\n        $localize`Potato`,\n        $localize`Tomato`,\n        $localize`Carrot`,\n    ];\n    public selectedVegetables = [$localize`Potato`, $localize`Tomato`];\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n\n    public valuesChanged(values: any[]): void {\n        this.selectedVegetables = [...values];\n    }\n\n    public openDialog(content: TemplateRef<string>): void {\n        this.activeDialog = this.dialogService.open(content, {\n            size: \"lg\",\n            windowClass: \"active-dialog\",\n        });\n    }\n\n    public closeDialog(): void {\n        this.activeDialog.close();\n    }\n\n    public toggleBusy(): void {\n        this.busy = !this.busy;\n        setTimeout(() => {\n            this.busy = false;\n        }, 3000);\n    }\n\n    // Open confirmation overlay\n    public openConfirmationOverlay(overlay: OverlayComponent, wizard: WizardHorizontalComponent): void {\n        if (wizard.selectedIndex === 0) {\n            this.closeDialog();\n            return;\n        }\n\n        this.overlayTriggered$.next();\n\n        // Toggling the overlay to get an access to the 'overlayRef'\n        overlay.toggle();\n\n        this.overlayRef = overlay.getOverlayRef();\n        // Here we update the positions for the overlay. By default, the overlay service connects the overlay to the bottom-left\n        // corner of the toggle reference element. We change this behavior here by setting new positions, since we want overlay to\n        // stick to the upper-top corner of the parent container\n        (this.overlayRef.getConfig().positionStrategy as FlexibleConnectedPositionStrategy).withPositions([{\n            originX: \"start\",\n            originY: \"top\",\n            overlayX: \"start\",\n            overlayY: \"top\",\n        }]);\n        // We update the size of the overlay container to follow the dimensions of the new 'toggle reference' container we set in the very first step\n        this.updateOverlayDimensions(overlay);\n\n        // Handling ESC events inside overlay\n        this.activeDialog?.closed$.pipe(\n            takeUntil(this.overlayTriggered$),\n            takeUntil(this.onDestroy$)).subscribe(() => overlay.hide());\n    }\n\n    public open(content: TemplateRef<string>): void {\n        this.activeDialog = this.dialogService.open(content, { size: \"lg\", backdrop: \"static\", useOverlay: true });\n    }\n\n    public actionDone(): void {\n        this.activeDialog.close();\n    }\n\n    public onContainerResize(overlay: OverlayComponent): void {\n        this.updateOverlayDimensions(overlay);\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n\n    public ngOnDestroy(): void {\n        this.onDestroy$.next();\n        this.onDestroy$.complete();\n        this.overlayTriggered$.complete();\n    }\n\n    private updateOverlayDimensions(overlay: OverlayComponent): void {\n        this.overlayRef?.updateSize({\n            width: overlay.toggleReference.getBoundingClientRect().width,\n            height: overlay.toggleReference.getBoundingClientRect().height,\n        });\n    }\n}\n");

/***/ }),

/***/ "mbzW":
/*!***************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-async-validation-form/wizard-async-form-validation.example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: WizardAsyncFormValidationExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardAsyncFormValidationExampleComponent", function() { return WizardAsyncFormValidationExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-label.directive */ "JSul");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");



















const _c0 = ["wizard"];
function WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_ng_container_0_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_ng_container_1_Template, 1, 0, "ng-container", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r12);
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardAsyncFormValidationExampleComponent_form_1_ng_template_9_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.onNextClick(_r1.selected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contact Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_ng_container_0_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.finishWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardAsyncFormValidationExampleComponent_form_1_ng_template_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.resetWizard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WizardAsyncFormValidationExampleComponent_form_1_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardAsyncFormValidationExampleComponent_form_1_ng_template_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.onNextClick(_r1.selected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c17 = function () { return ["personDetails"]; };
const _c18 = function () { return ["personDetails", "name"]; };
const _c19 = function () { return ["contactDetails"]; };
const _c20 = function () { return ["contactDetails", "email"]; };
function WizardAsyncFormValidationExampleComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nui-wizard-horizontal", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nui-wizard-step-v2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nui-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nui-textbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_6_Template, 2, 0, "nui-validation-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WizardAsyncFormValidationExampleComponent_form_1_ng_template_7_Template, 2, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nui-wizard-step-v2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WizardAsyncFormValidationExampleComponent_form_1_ng_template_9_Template, 2, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nui-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "nui-textbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_12_Template, 2, 0, "nui-validation-message", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, WizardAsyncFormValidationExampleComponent_form_1_nui_validation_message_13_Template, 2, 0, "nui-validation-message", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, WizardAsyncFormValidationExampleComponent_form_1_ng_template_14_Template, 4, 2, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WizardAsyncFormValidationExampleComponent_form_1_ng_template_15_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WizardAsyncFormValidationExampleComponent_form_1_ng_template_17_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, WizardAsyncFormValidationExampleComponent_form_1_ng_template_19_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_3_0 = null;
    let tmp_6_0 = null;
    let tmp_7_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c17)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c18)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c18))) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepControl", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c19)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c20)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c20))) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r0.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c20))) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.email);
} }
const fakeAsyncValidator = (c) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(4000));
class WizardAsyncFormValidationExampleComponent {
    constructor(formBuilder, toastService) {
        this.formBuilder = formBuilder;
        this.toastService = toastService;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            personDetails: this.formBuilder.group({
                name: [
                    "",
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)],
                    [fakeAsyncValidator],
                ],
            }),
            contactDetails: this.formBuilder.group({
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
                phone: [""],
            }),
        });
    }
    onNextClick(selected) {
        const { stepControl } = selected;
        if (stepControl.status !== "PENDING") {
            stepControl.markAllAsTouched();
            return;
        }
        this.busy = true;
        stepControl.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((status) => {
            if (status === "VALID") {
                this.wizard.next();
                this.busy = false;
            }
        });
    }
    finishWizard() {
        this.toastService.success({
            title: $localize `Success`,
            message: $localize `Wizard was completed successfully`,
            options: {
                timeOut: 2000,
            },
        });
    }
    resetWizard() {
        this.wizard.reset();
    }
}
WizardAsyncFormValidationExampleComponent.ɵfac = function WizardAsyncFormValidationExampleComponent_Factory(t) { return new (t || WizardAsyncFormValidationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
WizardAsyncFormValidationExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WizardAsyncFormValidationExampleComponent, selectors: [["nui-wizard-async-form-validation-example"]], viewQuery: function WizardAsyncFormValidationExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 3, vars: 2, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6880797919794408969$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Async Validation is firing...");
        i18n_1 = MSG_EXTERNAL_6880797919794408969$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟7e71f76dbff7069dc125de76ad0d86ea6ffa286e␟6880797919794408969:Async Validation is firing...`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__4 = goog.getMsg("Name");
        i18n_3 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__4;
    }
    else {
        i18n_3 = $localize `:␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__6 = goog.getMsg("Email");
        i18n_5 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS__6;
    }
    else {
        i18n_5 = $localize `:␟244aae9346da82b0922506c2d2581373a15641cc␟4768749765465246664:Email`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___8 = goog.getMsg(" This is required ");
        i18n_7 = MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___8;
    }
    else {
        i18n_7 = $localize `:␟f0cfc81a3cf98503602b26d160e924777f03cbaf␟3208836223768257750: This is required `;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___10 = goog.getMsg(" This is required ");
        i18n_9 = MSG_EXTERNAL_3208836223768257750$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___10;
    }
    else {
        i18n_9 = $localize `:␟f0cfc81a3cf98503602b26d160e924777f03cbaf␟3208836223768257750: This is required `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4650401672807616233$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___12 = goog.getMsg(" Invalid email ");
        i18n_11 = MSG_EXTERNAL_4650401672807616233$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___12;
    }
    else {
        i18n_11 = $localize `:␟8a35a7091a6881fe2b61c13ce6c4c3fd6cbd797d␟4650401672807616233: Invalid email `;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2273133766183660530$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___14 = goog.getMsg(" Finish ");
        i18n_13 = MSG_EXTERNAL_2273133766183660530$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___14;
    }
    else {
        i18n_13 = $localize `:␟255b836d1904086189b0d2daa5b2f36d33cd1d1f␟2273133766183660530: Finish `;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___16 = goog.getMsg(" Cancel ");
        i18n_15 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_ASYNC_VALIDATION_FORM_WIZARD_ASYNC_FORM_VALIDATION_EXAMPLE_COMPONENT_TS___16;
    }
    else {
        i18n_15 = $localize `:␟6a3777f913cf3f288664f0632b9f24794fdcc24e␟6991067716289442185: Cancel `;
    } return [["nui-busy", "", 3, "busy"], [3, "formGroup", 4, "ngIf"], ["size", "large", "message", i18n_1], [3, "formGroup"], ["wizard", ""], ["label", "Person Details", "formGroupName", "personDetails", 3, "stepControl"], ["caption", i18n_3, 1, "p-5", 3, "control"], ["formControlName", "name"], ["for", "required", 4, "ngIf"], ["nuiWizardStepFooter", ""], ["formGroupName", "contactDetails", 3, "stepControl"], ["nuiWizardStepLabel", ""], ["caption", i18n_5, 1, "p-5", 3, "control"], ["type", "email", "formControlName", "email"], ["for", "email", 4, "ngIf"], ["wizardCancel", ""], ["wizardPrevious", ""], ["wizardNext", ""], ["for", "required"], i18n_7, [4, "ngTemplateOutlet"], [3, "click"], i18n_9, ["for", "email"], i18n_11, ["type", "button", "displayStyle", "primary", "nui-button", "", 3, "click"], i18n_13, ["type", "button", "displayStyle", "action", "nui-button", "", 3, "click"], i18n_15, ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true", 3, "click"]]; }, template: function WizardAsyncFormValidationExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WizardAsyncFormValidationExampleComponent_form_1_Template, 21, 15, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_5__["BusyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_8__["WizardHorizontalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_9__["WizardStepV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupName"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_10__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_11__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_12__["WizardStepFooterDirective"], _src_lib_wizard_v2_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_13__["WizardStepLabelDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_14__["ValidationMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_16__["WizardStepperPreviousDirective"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_16__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "nrQw":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-custom-layout/wizard-custom.component.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"../../../../../../src/styles/nui-framework-variables\";\n@import (reference) \"../../../../../../src/styles/mixins.less\";\n\n.nui-wizard-custom-layout{\n    .container {\n        border: @nui-line-default solid;\n        .setCssVariable(border-color, nui-color-line-default);\n    }\n\n    .nui-wizard-step-header {\n        border: @nui-line-default solid;\n        border-radius: 5px;\n        .setCssVariable(border-color, nui-color-line-default);\n        .setCssVariable(background, nui-color-bg-content);\n        flex-direction: row-reverse;\n        justify-content: flex-end;\n        padding: 0 8px;\n    }\n\n    .nui-wizard-step-header--selected {\n        .setCssVariable(background-color, nui-color-active);\n\n        color: @nui-color-text-light;\n        border-color: transparent;\n\n        .nui-wizard-step-label{\n            .setCssVariable(color, nui-color-text-inverse)\n        }\n    }\n\n    .custom-header {\n        .nui-wizard-horizontal-header-container {\n            border-top: none;\n\n            .nui-wizard-horizontal-line {\n                margin: 0;\n            }\n        }\n\n        //.nui-wizard-horizontal-content-container {\n        //    padding: 0;\n        //}\n\n        .custom-summary {\n            border-left: @nui-line-default @nui-color-line-default solid;\n        }\n    }\n\n    .nui-wizard-footer {\n        border: none;\n        justify-content: space-between;\n\n        button {\n            min-width: 0;\n            margin: 0;\n        }\n    }\n}\n");

/***/ }),

/***/ "oZ+g":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-custom-icons/wizard-with-custom-icons-example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizard>\n\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <div class=\"p-5\">\n            <span i18n>This is the first step of our wizard.</span>\n        </div>\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--\n        See how we use the 'stepIconsConfig' input here to override the global icons configuration\n        for this particular wizard step\n    -->\n    <nui-wizard-step-v2 i18n-label label=\"Second step\" [stepStateConfig]=\"secondStepIconConfig\">\n        <div class=\"p-5\">\n            <span i18n>This is the second step of our wizard.</span>\n        </div>\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <div class=\"p-5\">\n            <span i18n>We finally reached our last step</span>\n        </div>\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                Finish\n            </button>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardCancel>\n        <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n            Cancel\n        </button>\n    </ng-template>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\" i18n>\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n                i18n\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n");

/***/ }),

/***/ "osmv":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" *ngIf=\"form\">\n    <nui-wizard-horizontal #wizard>\n\n        <!--  This defines the first step of the wizard -->\n        <nui-wizard-step-v2 i18n-label label=\"Person Details\"\n                            formGroupName=\"personDetails\"\n                            [stepControl]=\"form.get(['personDetails'])\">\n\n            <!-- the current step content -->\n            <div class=\"step-content-wrapper\">\n                <h2>Person Details</h2>\n                <nui-form-field [control]=\"form.get(['personDetails','firstName'])\"\n                                i18n-caption\n                                caption=\"First name\">\n                    <nui-textbox formControlName=\"firstName\" customBoxWidth=\"150px\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['personDetails','firstName'])?.errors?.required\"\n                                            i18n>\n                        First name is required\n                    </nui-validation-message>\n                </nui-form-field>\n\n                <nui-form-field [control]=\"form.get(['personDetails','lastName'])\"\n                                i18n-caption\n                                caption=\"Last name\">\n                    <nui-textbox formControlName=\"lastName\" customBoxWidth=\"150px\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['personDetails','lastName'])?.errors?.required\"\n                                            i18n>\n                        Last name is required\n                    </nui-validation-message>\n                </nui-form-field>\n                <!-- content of the footer -->\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext; context: { form: 'personDetails' }\"></ng-container>\n                </ng-template>\n            </div>\n        </nui-wizard-step-v2>\n\n        <nui-wizard-step-v2 i18n-label label=\"Contact Details\"\n                            formGroupName=\"contactDetails\"\n                            [stepControl]=\"form.get(['contactDetails'])\">\n\n            <div class=\"step-content-wrapper\">\n                <h2>Contact Details</h2>\n                <nui-form-field [control]=\"form.get(['contactDetails','email'])\"\n                                i18n-caption\n                                caption=\"Email\">\n                    <nui-textbox type=\"email\" formControlName=\"email\" customBoxWidth=\"150px\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['contactDetails','email'])?.errors?.required\"\n                                            i18n>\n                        This is required\n                    </nui-validation-message>\n\n                    <nui-validation-message for=\"email\"\n                                            *ngIf=\"form.get(['contactDetails','email'])?.errors?.email\"\n                                            i18n>\n                        Invalid email\n                    </nui-validation-message>\n                </nui-form-field>\n                <nui-form-field [control]=\"form.get(['contactDetails','phone'])\"\n                                i18n-caption\n                                caption=\"Phone\">\n                    <nui-textbox type=\"phone\" formControlName=\"phone\" customBoxWidth=\"150px\"></nui-textbox>\n                    <nui-validation-message for=\"required\"\n                                            *ngIf=\"form.get(['contactDetails','phone'])?.errors?.required\"\n                                            i18n>\n                        This is required\n                    </nui-validation-message>\n                </nui-form-field>\n\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardNext; context: { form: 'contactDetails' }\"></ng-container>\n                </ng-template>\n            </div>\n        </nui-wizard-step-v2>\n\n        <nui-wizard-step-v2 i18n-label label=\"Final step\"\n                            formGroupName=\"confirm\"\n                            [stepControl]=\"form.get(['confirm'])\">\n            <div class=\"step-content-wrapper\">\n                <h2 i18n>Confirm your data</h2>\n                <ul>\n                    <li>First name: {{form.get(['personDetails','firstName']).value}}</li>\n                    <li>Last name: {{form.get(['personDetails','lastName']).value}}</li>\n                    <li>Email: {{form.get(['contactDetails','email']).value}}</li>\n                    <li *ngIf=\"form.get(['contactDetails','phone']).value\">Phone: {{form.get(['contactDetails','phone']).value}}</li>\n                </ul>\n                <nui-form-field [control]=\"form.get(['confirm','confirmed'])\">\n                    <nui-checkbox formControlName=\"confirmed\" i18n required>\n                        Confirm\n                    </nui-checkbox>\n                    <nui-validation-message for=\"required\" i18n>\n                        Confirmation is required\n                    </nui-validation-message>\n                </nui-form-field>\n\n                <ng-template nuiWizardStepFooter>\n                    <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"wizardSubmit; context: { formControlName: 'confirm' }\"></ng-container>\n                </ng-template>\n            </div>\n        </nui-wizard-step-v2>\n\n        <!-- content of the confirmation dialog -->\n        <ng-template #confirmDialog let-close=\"close\">\n            <nui-dialog-header title=\"Really want to leave?\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n            <div class=\"dialog-body\">\n                <p i18n>\n                    There is at least one accomplished step within this wizard.\n                    Are you sure you want to leave?\n                </p>\n            </div>\n            <nui-dialog-footer>\n                <button nui-button type=\"button\" displayStyle=\"action\" (click)=\"close()\" i18n>\n                    Cancel\n                </button>\n                <button nui-button type=\"button\" (click)=\"resetWizard(); close()\" i18n>\n                    Leave\n                </button>\n            </nui-dialog-footer>\n        </ng-template>\n\n        <!-- content of the cancel button -->\n        <ng-template #wizardCancel>\n            <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"openConfirmationDialog(confirmDialog)\" i18n>\n                Cancel\n            </button>\n        </ng-template>\n\n        <!-- content of the previous button -->\n        <ng-template #wizardPrevious>\n            <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\" i18n>\n                Back\n            </button>\n        </ng-template>\n\n        <!-- content of the next button -->\n        <ng-template #wizardNext let-form=\"form\">\n            <button nuiWizardNext\n                    type=\"button\"\n                    nui-button\n                    displayStyle=\"primary\"\n                    icon=\"caret-right\"\n                    iconRight=\"true\"\n                    (click)=\"validate(form)\"\n                    i18n\n            >Next</button>\n        </ng-template>\n\n        <!-- content of the submit button -->\n        <ng-template #wizardSubmit let-formControlName=\"formControlName\">\n            <button type=\"button\"\n                    nui-button\n                    displayStyle=\"primary\"\n                    (click)=\"onSubmit(formControlName)\"\n                    i18n\n            >Submit</button>\n        </ng-template>\n    </nui-wizard-horizontal>\n</form>\n\n");

/***/ }),

/***/ "qZWR":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-async-validation-form/wizard-async-form-validation.example.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormControl, FormGroup, Validators } from \"@angular/forms\";\nimport { of } from \"rxjs\";\nimport { delay, take } from \"rxjs/operators\";\nimport { ToastService, WizardHorizontalComponent, WizardStepV2Component } from \"@nova-ui/bits\";\n\nconst fakeAsyncValidator = (c: FormControl) => of(null).pipe(delay(4000));\n\n@Component({\n    selector: \"nui-wizard-async-form-validation-example\",\n    templateUrl: \"./wizard-async-form-validation.example.component.html\",\n})\nexport class WizardAsyncFormValidationExampleComponent implements OnInit {\n    public busy: boolean;\n    public form: FormGroup;\n\n    @ViewChild(\"wizard\") wizard: WizardHorizontalComponent;\n\n    constructor(\n        private formBuilder: FormBuilder,\n        private toastService: ToastService\n    ) { }\n\n    ngOnInit(): void {\n        this.form = new FormGroup({\n            personDetails: this.formBuilder.group({\n                name: [\n                    \"\",\n                    [Validators.required, Validators.minLength(3)],\n                    [fakeAsyncValidator],\n                ],\n            }),\n            contactDetails: this.formBuilder.group({\n                email: [\"\", [Validators.required, Validators.email]],\n                phone: [\"\"],\n            }),\n        });\n    }\n\n    public onNextClick(selected: WizardStepV2Component): void {\n        const { stepControl } = selected;\n\n        if (stepControl.status !== \"PENDING\") {\n            stepControl.markAllAsTouched();\n\n            return;\n        }\n\n        this.busy = true;\n        stepControl.statusChanges.pipe(take(1)).subscribe((status) => {\n            if (status === \"VALID\") {\n                this.wizard.next();\n                this.busy = false;\n            }\n        });\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n}\n");

/***/ }),

/***/ "ripU":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-responsive-header/wizard-responsive-header-example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: WizardResponsiveHeaderExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardResponsiveHeaderExampleComponent", function() { return WizardResponsiveHeaderExampleComponent; });
/* harmony import */ var _src_nui_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/nui-api */ "Ks4r");
/* harmony import */ var _src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/public_api */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-horizontal/wizard-horizontal.component */ "ZgeA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");










const _c0 = ["nuiWizard"];
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_1_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_2_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_ng_container_3_Template, 2, 1, "ng-container", 11);
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r11 !== ctx_r12.steps.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r11 === ctx_r12.steps.length - 1);
} }
function WizardResponsiveHeaderExampleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-wizard-step-v2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, WizardResponsiveHeaderExampleComponent_ng_container_2_ng_template_6_Template, 4, 4, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "Step " + (i_r11 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nExp"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nApply"](4);
} }
function WizardResponsiveHeaderExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WizardResponsiveHeaderExampleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WizardResponsiveHeaderExampleComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizardResponsiveHeaderExampleComponent_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r21.reset(); return ctx_r21.notifyOnCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function WizardResponsiveHeaderExampleComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WizardResponsiveHeaderExampleComponent_ng_template_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.notifyOnFinished(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Finish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class WizardResponsiveHeaderExampleComponent {
    constructor(toast) {
        this.toast = toast;
        this.steps = Array.from({ length: 20 });
    }
    reset() {
        this.wizard.reset();
    }
    notifyOnFinished() {
        this.toast.info({ title: "Finished!", message: "You have completed the wizard" });
    }
    notifyOnCancel() {
        this.toast.warning({ title: "Cancelled!", message: "You've hit the wizard's 'Cancel' button! The wizard is now restored to its initial state." });
    }
}
WizardResponsiveHeaderExampleComponent.ɵfac = function WizardResponsiveHeaderExampleComponent_Factory(t) { return new (t || WizardResponsiveHeaderExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ToastService"])); };
WizardResponsiveHeaderExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WizardResponsiveHeaderExampleComponent, selectors: [["nui-wizard-responsive-header-example"]], viewQuery: function WizardResponsiveHeaderExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
    } }, decls: 11, vars: 1, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7572161121068015277$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESPONSIVE_HEADER_WIZARD_RESPONSIVE_HEADER_EXAMPLE_COMPONENT_TS__2 = goog.getMsg("This is the step #{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_1 = MSG_EXTERNAL_7572161121068015277$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_RESPONSIVE_HEADER_WIZARD_RESPONSIVE_HEADER_EXAMPLE_COMPONENT_TS__2;
    }
    else {
        i18n_1 = $localize `:␟9f2fcd844c01d26274733553cdabd5574031be5c␟7572161121068015277:This is the step #${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } return [["nuiWizard", ""], [4, "ngFor", "ngForOf"], ["wizardPrevious", ""], ["wizardNext", ""], ["wizardCancel", ""], ["wizardFinish", ""], [3, "label"], [1, "m-5"], i18n_1, ["nuiWizardStepFooter", ""], [4, "ngTemplateOutlet"], [4, "ngIf"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"], ["type", "button", "nui-button", "", "displayStyle", "action", 3, "click"], ["type", "button", "nui-button", "", "displayStyle", "primary", 3, "click"]]; }, template: function WizardResponsiveHeaderExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-wizard-horizontal", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WizardResponsiveHeaderExampleComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WizardResponsiveHeaderExampleComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, WizardResponsiveHeaderExampleComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WizardResponsiveHeaderExampleComponent_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WizardResponsiveHeaderExampleComponent_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_src_lib_wizard_v2_wizard_horizontal_wizard_horizontal_component__WEBPACK_IMPORTED_MODULE_3__["WizardHorizontalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_6__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperPreviousDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_7__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ }),

/***/ "rjNf":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-busy/wizard-busy.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-v2-busy-example\",\n    templateUrl: \"./wizard-busy.example.component.html\",\n    styleUrls: [\"./wizard-busy.example.component.less\"],\n})\nexport class WizardBusyExampleComponent {\n    public busy: boolean;\n\n    @ViewChild(\"wizard\") private wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public toggleStepBusy(): void {\n        this.busy = !this.busy;\n        setTimeout(() => {\n            this.busy = false;\n        }, 3000);\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "s3gB":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-horizontal-layout/wizard-horizontal-example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-wizard-horizontal #wizard>\n\n    <!--  content of the 1st step -->\n    <nui-wizard-step-v2 i18n-label label=\"First step\">\n        <!-- content of the current step -->\n        <div class=\"p-5\">\n            <span i18n>This is the first step of our horizontal wizard</span>\n        </div>\n\n        <!-- content of the footer -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardNext\"></ng-container>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <!--  content of the final step -->\n    <nui-wizard-step-v2 i18n-label label=\"Final step\">\n        <div class=\"p-5\">\n            <span i18n>We finally reached our last step!</span>\n        </div>\n        <!-- Notice how both label and footer can be placed anywhere in the content of wizard step -->\n        <ng-template nuiWizardStepFooter>\n            <ng-container *ngTemplateOutlet=\"wizardCancel\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"wizardPrevious\"></ng-container>\n            <button type=\"button\" displayStyle=\"primary\" nui-button (click)=\"finishWizard()\" i18n>\n                Finish\n            </button>\n        </ng-template>\n    </nui-wizard-step-v2>\n\n    <ng-template #wizardCancel>\n        <button type=\"button\" displayStyle=\"action\" nui-button (click)=\"resetWizard()\" i18n>\n            Cancel\n        </button>\n    </ng-template>\n\n    <ng-template #wizardPrevious>\n        <button type=\"button\" nuiWizardPrevious nui-button icon=\"caret-left\">\n            Back\n        </button>\n    </ng-template>\n\n    <ng-template #wizardNext>\n        <button nuiWizardNext\n                type=\"button\"\n                nui-button\n                displayStyle=\"primary\"\n                icon=\"caret-right\"\n                iconRight=\"true\"\n        >Next</button>\n    </ng-template>\n</nui-wizard-horizontal>\n");

/***/ }),

/***/ "wZEo":
/*!*****************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/index.ts ***!
  \*****************************************************/
/*! exports provided: WizardDocsComponent, WizardHorizontalExampleComponent, WizardVerticalExampleComponent, WizardCustomComponent, WizardCustomExampleComponent, WizardBusyExampleComponent, WizardDialogExampleComponent, WizardCustomFooterExampleComponent, WizardDynamicExampleComponent, WizardRemoveStepExampleComponent, WizardAsyncFormValidationExampleComponent, WizardWithCustomIconsExampleComponent, WizardRestoreStateExampleComponent, WizardStepChangeExampleComponent, WizardResponsiveHeaderExampleComponent, WizardWithConfirmationDialogOnCancelComponent, WizardTooltipExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wizard_docs_wizard_docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wizard-docs/wizard-docs.component */ "x5Xb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardDocsComponent", function() { return _wizard_docs_wizard_docs_component__WEBPACK_IMPORTED_MODULE_0__["WizardDocsComponent"]; });

/* harmony import */ var _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard-horizontal-layout/wizard-horizontal-example.component */ "JqMI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardHorizontalExampleComponent", function() { return _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_1__["WizardHorizontalExampleComponent"]; });

/* harmony import */ var _wizard_vertical_layout_wizard_vertical_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard-vertical-layout/wizard-vertical-example.component */ "zBaW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardVerticalExampleComponent", function() { return _wizard_vertical_layout_wizard_vertical_example_component__WEBPACK_IMPORTED_MODULE_2__["WizardVerticalExampleComponent"]; });

/* harmony import */ var _wizard_custom_layout_wizard_custom_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-custom-layout/wizard-custom-example.component */ "i5CQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCustomComponent", function() { return _wizard_custom_layout_wizard_custom_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardCustomComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCustomExampleComponent", function() { return _wizard_custom_layout_wizard_custom_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardCustomExampleComponent"]; });

/* harmony import */ var _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard-busy/wizard-busy.example.component */ "KD0g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardBusyExampleComponent", function() { return _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_4__["WizardBusyExampleComponent"]; });

/* harmony import */ var _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard-dialog/wizard-dialog.example.component */ "lKXi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardDialogExampleComponent", function() { return _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_5__["WizardDialogExampleComponent"]; });

/* harmony import */ var _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wizard-custom-footer/wizard-custom-footer-example.component */ "LnRm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardCustomFooterExampleComponent", function() { return _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_6__["WizardCustomFooterExampleComponent"]; });

/* harmony import */ var _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wizard-dynamic/wizard-dynamic.example.component */ "cde7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardDynamicExampleComponent", function() { return _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_7__["WizardDynamicExampleComponent"]; });

/* harmony import */ var _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wizard-remove-step/wizard-remove-step-example.component */ "Fn2p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardRemoveStepExampleComponent", function() { return _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_8__["WizardRemoveStepExampleComponent"]; });

/* harmony import */ var _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wizard-async-validation-form/wizard-async-form-validation.example.component */ "mbzW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardAsyncFormValidationExampleComponent", function() { return _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_9__["WizardAsyncFormValidationExampleComponent"]; });

/* harmony import */ var _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wizard-with-custom-icons/wizard-with-custom-icons-example.component */ "4Nvg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardWithCustomIconsExampleComponent", function() { return _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_10__["WizardWithCustomIconsExampleComponent"]; });

/* harmony import */ var _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard-restore-state/wizard-restore-state.example.component */ "/QbS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardRestoreStateExampleComponent", function() { return _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_11__["WizardRestoreStateExampleComponent"]; });

/* harmony import */ var _wizard_step_change_example_wizard_step_change_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wizard-step-change-example/wizard-step-change-example.component */ "eHNd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardStepChangeExampleComponent", function() { return _wizard_step_change_example_wizard_step_change_example_component__WEBPACK_IMPORTED_MODULE_12__["WizardStepChangeExampleComponent"]; });

/* harmony import */ var _wizard_responsive_header_wizard_responsive_header_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wizard-responsive-header/wizard-responsive-header-example.component */ "ripU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardResponsiveHeaderExampleComponent", function() { return _wizard_responsive_header_wizard_responsive_header_example_component__WEBPACK_IMPORTED_MODULE_13__["WizardResponsiveHeaderExampleComponent"]; });

/* harmony import */ var _wizard_with_confirmation_dialog_on_cancel_wizard_with_confirmation_dialog_on_cancel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component */ "6Lmt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardWithConfirmationDialogOnCancelComponent", function() { return _wizard_with_confirmation_dialog_on_cancel_wizard_with_confirmation_dialog_on_cancel_component__WEBPACK_IMPORTED_MODULE_14__["WizardWithConfirmationDialogOnCancelComponent"]; });

/* harmony import */ var _wizard_tooltip_wizard_tooltip_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./wizard-tooltip/wizard-tooltip-example.component */ "2HkB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WizardTooltipExampleComponent", function() { return _wizard_tooltip_wizard_tooltip_example_component__WEBPACK_IMPORTED_MODULE_15__["WizardTooltipExampleComponent"]; });



















/***/ }),

/***/ "x5Xb":
/*!*********************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-docs/wizard-docs.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WizardDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardDocsComponent", function() { return WizardDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wizard-horizontal-layout/wizard-horizontal-example.component */ "JqMI");
/* harmony import */ var _wizard_with_confirmation_dialog_on_cancel_wizard_with_confirmation_dialog_on_cancel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wizard-with-confirmation-dialog-on-cancel/wizard-with-confirmation-dialog-on-cancel.component */ "6Lmt");
/* harmony import */ var _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wizard-dialog/wizard-dialog.example.component */ "lKXi");
/* harmony import */ var _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wizard-busy/wizard-busy.example.component */ "KD0g");
/* harmony import */ var _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wizard-dynamic/wizard-dynamic.example.component */ "cde7");
/* harmony import */ var _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wizard-remove-step/wizard-remove-step-example.component */ "Fn2p");
/* harmony import */ var _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wizard-async-validation-form/wizard-async-form-validation.example.component */ "mbzW");
/* harmony import */ var _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wizard-with-custom-icons/wizard-with-custom-icons-example.component */ "4Nvg");
/* harmony import */ var _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wizard-custom-footer/wizard-custom-footer-example.component */ "LnRm");
/* harmony import */ var _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wizard-restore-state/wizard-restore-state.example.component */ "/QbS");
/* harmony import */ var _wizard_step_change_example_wizard_step_change_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wizard-step-change-example/wizard-step-change-example.component */ "eHNd");
/* harmony import */ var _wizard_responsive_header_wizard_responsive_header_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../wizard-responsive-header/wizard-responsive-header-example.component */ "ripU");
/* harmony import */ var _wizard_tooltip_wizard_tooltip_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../wizard-tooltip/wizard-tooltip-example.component */ "2HkB");















class WizardDocsComponent {
}
WizardDocsComponent.ɵfac = function WizardDocsComponent_Factory(t) { return new (t || WizardDocsComponent)(); };
WizardDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardDocsComponent, selectors: [["nui-wizard-v2-example"]], decls: 145, vars: 0, consts: [["href", "../components/WizardStepComponent.html", "target", "_blank"], ["filenamePrefix", "wizard-horizontal-layout", "exampleTitle", "Horizontal Layout Wizard"], ["filenamePrefix", "wizard-with-confirmation-dialog-on-cancel", "exampleTitle", "Wizard with confirmation dialog on cancel"], ["filenamePrefix", "wizard-dialog", "exampleTitle", "wizard in dialog"], ["filenamePrefix", "wizard-busy", "exampleTitle", "wizard step busy"], ["filenamePrefix", "wizard-dynamic", "exampleTitle", "wizard add dynamic step"], ["filenamePrefix", "wizard-remove-step", "exampleTitle", "wizard remove step"], ["filenamePrefix", "wizard-async-form-validation", "exampleTitle", "Async Form Validation"], ["filenamePrefix", "wizard-with-custom-icons-example", "exampleTitle", "Wizard with custom icons"], ["filenamePrefix", "wizard-custom-footer", "exampleTitle", "Wizard with Custom Footer"], ["filenamePrefix", "wizard-restore-state", "exampleTitle", "Restore Wizard State"], ["filenamePrefix", "wizard-step-change-example", "exampleTitle", "Wizard Step Change"], ["filenamePrefix", "nui-wizard-responsive-header-example", "exampleTitle", "Wizard Header Responsiveness"], ["filenamePrefix", "wizard-tooltip-example", "exampleTitle", "Wizard Tooltip"]], template: function WizardDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Horizontal Layout Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " To use the horizontal wizard component, place a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "nui-wizard-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " element in your template and include one or more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "nui-wizard-step-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " elements as children of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "nui-wizard-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-wizard-horizontal-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wizard with confirmation dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " It may be a good idea to ask a user whether they really want to quit a wizard, e.g.if they decide to hit `Cancel` while some of the wizard step fields are already filled in. This example reflects this use case and shows how one can add a confirmation dialog to make a user decide whether they really want to quit or stay where they are and continue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nui-wizard-with-confirmation-dialog-on-cancel-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Usage with a dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " You can pass an existing wizard component as content of the dialog window. You should insert wizard component in dialog body.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-wizard-v2-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Busy step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "You can make your step busy to forbid actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nui-wizard-v2-busy-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Adding step dynamically");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " You are able to add wizard steps dynamically. The dynamic step can be enabled/disabled programmatically by clicking the \"Enable/Disable step w/button\" under the wizard.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-wizard-dynamic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Removing step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "You are able to remove steps by index.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nui-wizard-remove-step-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Async Form Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " To handle async validation check 'PENDING' status of WizardV2Step stepControl\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nui-wizard-async-form-validation-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Wizard with custom step state icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " The wizard step can be in four different states: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ". For each of these steps there is a corresponding icon in the header for a certain step, which dynamically changes along with the step state change. It is possible to override the default set of step state icons and their colors, and there are two ways of doing that.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Global");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Step Specific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Global");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Nova provides you with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "WIZARD_CONFIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " injection token, which allows you to override the default wizard settings in a global context. For instance, set the necessary icons settings with this token on a module level to allow all wizards within a module to receive the same icon configuration.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Step Specific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "stepIconsConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " input of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "nui-wizard-step-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " component to pass the step icons config specifically to this step. It will override the global settings for this particular step.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "nui-wizard-with-custom-icons-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Custom footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Customizing the footer layout content and style for each step is quite easy, as you can see in the example below:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nui-example-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "nui-wizard-custom-footer-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Restore Wizard State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " To restore the wizard state you need to pass previous wizard steps as input. See the example below. You can press the \"Reset step\" button on the last step in the wizard. After that close the dialog and open the wizard again. You will see that all steps except the last are restored.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nui-wizard-restore-state-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Wizard Step Change Event Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " You are able to subscribe when the selected step has changed.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "nui-example-wrapper", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "nui-wizard-step-change-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Responsive Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " This example shows how Wizard V2 handles the multiple steps. When there are a lot of steps in the wizard the step header can overflow the headers container. If this happens, Wizard V2 switches to the responsive mode and put the overflown items into overflow components, which indicate how many items are there hidden. You can try navigating through the items and resizing the browser window to see how this responsive behavior works.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nui-example-wrapper", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "nui-wizard-responsive-header-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Wizard Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " We always show tooltip for string label. If you use custom template for label or don't want to see tooltip you could define it inside content projection.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nui-example-wrapper", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "nui-wizard-tooltip-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Keyboard interaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "TAB/SHIFT+TAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " for focusing on the next/previous tabbable element");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "LEFT_ARROW/RIGHT_ARROW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " for navigation on the previous/next step header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "HOME/END");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " for focusing on the first/last step header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "ENTER, SPACE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " to select the step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _wizard_horizontal_layout_wizard_horizontal_example_component__WEBPACK_IMPORTED_MODULE_2__["WizardHorizontalExampleComponent"], _wizard_with_confirmation_dialog_on_cancel_wizard_with_confirmation_dialog_on_cancel_component__WEBPACK_IMPORTED_MODULE_3__["WizardWithConfirmationDialogOnCancelComponent"], _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["WizardDialogExampleComponent"], _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_5__["WizardBusyExampleComponent"], _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_6__["WizardDynamicExampleComponent"], _wizard_remove_step_wizard_remove_step_example_component__WEBPACK_IMPORTED_MODULE_7__["WizardRemoveStepExampleComponent"], _wizard_async_validation_form_wizard_async_form_validation_example_component__WEBPACK_IMPORTED_MODULE_8__["WizardAsyncFormValidationExampleComponent"], _wizard_with_custom_icons_wizard_with_custom_icons_example_component__WEBPACK_IMPORTED_MODULE_9__["WizardWithCustomIconsExampleComponent"], _wizard_custom_footer_wizard_custom_footer_example_component__WEBPACK_IMPORTED_MODULE_10__["WizardCustomFooterExampleComponent"], _wizard_restore_state_wizard_restore_state_example_component__WEBPACK_IMPORTED_MODULE_11__["WizardRestoreStateExampleComponent"], _wizard_step_change_example_wizard_step_change_example_component__WEBPACK_IMPORTED_MODULE_12__["WizardStepChangeExampleComponent"], _wizard_responsive_header_wizard_responsive_header_example_component__WEBPACK_IMPORTED_MODULE_13__["WizardResponsiveHeaderExampleComponent"], _wizard_tooltip_wizard_tooltip_example_component__WEBPACK_IMPORTED_MODULE_14__["WizardTooltipExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "z1B6":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard-v2/wizard-step-change-example/wizard-step-change-example.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n    AfterViewInit,\n    Component,\n    TemplateRef,\n    ViewChild,\n} from \"@angular/core\";\n\nimport { StepperSelectionEvent } from \"@angular/cdk/stepper\";\nimport { ToastService, WizardHorizontalComponent } from \"@nova-ui/bits\";\n\ninterface IWizardStepData {\n    title: string;\n    templateRef: TemplateRef<string>;\n}\n\n@Component({\n    selector: \"nui-wizard-step-change-example\",\n    templateUrl: \"./wizard-step-change-example.component.html\",\n})\nexport class WizardStepChangeExampleComponent implements AfterViewInit {\n    public steps: IWizardStepData[] = [];\n\n    @ViewChild(\"normalStep\") normalStep: TemplateRef<string>;\n    @ViewChild(\"wizard\") wizard: WizardHorizontalComponent;\n\n    constructor(private toastService: ToastService) {\n    }\n\n    public ngAfterViewInit(): void {\n        this.addStep(this.normalStep, $localize`Normal step`);\n    }\n\n    public addStep(templateRef: TemplateRef<string>, title?: string): void {\n        this.steps.push({ title: title ?? `Dynamic Step`, templateRef: templateRef });\n    }\n\n    public onSelectionChange($event: StepperSelectionEvent): void {\n        this.toastService.info({\n            title: $localize`Selected step changed.`,\n            message: $localize`You moved from step with index ${$event.previouslySelectedIndex} to step with index ${$event.selectedIndex}`,\n            options: {\n                timeOut: 5000,\n                extendedTimeOut: 2000,\n            },\n        });\n    }\n\n    public resetWizard(): void {\n        this.wizard.reset();\n    }\n\n    public finishWizard(): void {\n        this.toastService.success({\n            title: $localize`Success`,\n            message: $localize`Wizard was completed successfully`,\n            options: {\n                timeOut: 2000,\n            },\n        });\n    }\n}\n");

/***/ }),

/***/ "zBaW":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/wizard-v2/wizard-vertical-layout/wizard-vertical-example.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WizardVerticalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardVerticalExampleComponent", function() { return WizardVerticalExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_wizard_v2_wizard_vertical_wizard_vertical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-vertical/wizard-vertical.component */ "EEH9");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step/wizard-step.component */ "9Oqf");
/* harmony import */ var _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-step-footer.directive */ "ZSn2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/wizard-v2/wizard-button/wizard-button */ "sp5V");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







function WizardVerticalExampleComponent_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardVerticalExampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardVerticalExampleComponent_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function WizardVerticalExampleComponent_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardVerticalExampleComponent_ng_template_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardVerticalExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardVerticalExampleComponent_ng_template_8_ng_container_0_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardVerticalExampleComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function WizardVerticalExampleComponent_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function WizardVerticalExampleComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardVerticalExampleComponent_ng_template_12_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function WizardVerticalExampleComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WizardVerticalExampleComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WizardVerticalExampleComponent {
}
WizardVerticalExampleComponent.ɵfac = function WizardVerticalExampleComponent_Factory(t) { return new (t || WizardVerticalExampleComponent)(); };
WizardVerticalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardVerticalExampleComponent, selectors: [["nui-wizard-vertical-example"]], decls: 17, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("First step");
        i18n_0 = MSG_EXTERNAL_8373557087720397153$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟9170783b7882b9260aea1a22ae5cf2407fa3e64f␟8373557087720397153:First step`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2164418195621105481$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is the first step of our vertical wizard.");
        i18n_2 = MSG_EXTERNAL_2164418195621105481$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dc2fbc12f415c4211b55928ea5f53ef96f747142␟2164418195621105481:This is the first step of our vertical wizard.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Second step");
        i18n_4 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟b29f4fd21a1d511462918ede337438d03dab18e5␟2997617654392962041:Second step`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1374318452745153063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("This is the second step of our vertical wizard.");
        i18n_6 = MSG_EXTERNAL_1374318452745153063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟0bf76a83babe590dd0d37a6d3f40cea68467a96b␟1374318452745153063:This is the second step of our vertical wizard.`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Final step");
        i18n_8 = MSG_EXTERNAL_5385737502167048240$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟0de8f1dbd57123d294729d71fd278eaf936d4a2b␟5385737502167048240:Final step`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8844434073042428468$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("We finally reached our last step!");
        i18n_10 = MSG_EXTERNAL_8844434073042428468$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_V2_WIZARD_VERTICAL_LAYOUT_WIZARD_VERTICAL_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟4b91d8fe7d2e6d8e08adecc9623459b2df8b1e72␟8844434073042428468:We finally reached our last step!`;
    } return [["label", i18n_0], i18n_2, ["nuiWizardStepFooter", ""], ["label", i18n_4], i18n_6, ["label", i18n_8], i18n_10, ["wizardPrevious", ""], ["wizardNext", ""], [4, "ngTemplateOutlet"], ["type", "button", "nuiWizardPrevious", "", "nui-button", "", "icon", "caret-left"], ["nuiWizardNext", "", "type", "button", "nui-button", "", "displayStyle", "primary", "icon", "caret-right", "iconRight", "true"]]; }, template: function WizardVerticalExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-wizard-step-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardVerticalExampleComponent_ng_template_4_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-wizard-step-v2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WizardVerticalExampleComponent_ng_template_8_Template, 2, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-wizard-step-v2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WizardVerticalExampleComponent_ng_template_12_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WizardVerticalExampleComponent_ng_template_13_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WizardVerticalExampleComponent_ng_template_15_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_wizard_v2_wizard_vertical_wizard_vertical_component__WEBPACK_IMPORTED_MODULE_1__["WizardVerticalComponent"], _src_lib_wizard_v2_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepV2Component"], _src_lib_wizard_v2_wizard_step_footer_directive__WEBPACK_IMPORTED_MODULE_3__["WizardStepFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__["WizardStepperPreviousDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_wizard_v2_wizard_button_wizard_button__WEBPACK_IMPORTED_MODULE_5__["WizardStepperNextDirective"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-wizard-v2-wizard-module-es2015.js.map