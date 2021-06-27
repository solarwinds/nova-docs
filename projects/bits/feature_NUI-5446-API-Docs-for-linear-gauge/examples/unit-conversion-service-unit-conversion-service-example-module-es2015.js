(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-conversion-service-unit-conversion-service-example-module"],{

/***/ "681S":
/*!**************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/unit-conversion-service/unit-conversion-service-basic/unit-conversion-service-basic.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: UnitConversionServiceBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConversionServiceBasicExampleComponent", function() { return UnitConversionServiceBasicExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */ "ShSb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class UnitConversionServiceBasicExampleComponent {
    constructor(unitConversionService) {
        this.unitConversionService = unitConversionService;
    }
    ngOnInit() {
        this.onNumberChange(110000);
    }
    onNumberChange(num) {
        this.num = num;
        const conversionResult = this.unitConversionService.convert(this.num, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["UnitBase"].Bytes, 2);
        this.conversionDisplay = this.unitConversionService.getFullDisplay(conversionResult, "bytes");
    }
}
UnitConversionServiceBasicExampleComponent.ɵfac = function UnitConversionServiceBasicExampleComponent_Factory(t) { return new (t || UnitConversionServiceBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["UnitConversionService"])); };
UnitConversionServiceBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitConversionServiceBasicExampleComponent, selectors: [["unit-conversion-service-basic-example"]], decls: 5, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2532651638721346732$$DEMO_SRC_COMPONENTS_DEMO_COMMON_UNIT_CONVERSION_SERVICE_UNIT_CONVERSION_SERVICE_BASIC_UNIT_CONVERSION_SERVICE_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Bytes");
        i18n_0 = MSG_EXTERNAL_2532651638721346732$$DEMO_SRC_COMPONENTS_DEMO_COMMON_UNIT_CONVERSION_SERVICE_UNIT_CONVERSION_SERVICE_BASIC_UNIT_CONVERSION_SERVICE_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟202089a05af9e72384c4fa73de07301dbf7c6062␟2532651638721346732:Bytes`;
    } return [[1, "conversion", "d-flex", "flex-column", "align-items-end"], ["caption", i18n_0, 1, "d-block", "mt-5", 3, "showOptionalText"], ["type", "number", "customBoxWidth", "200px", 3, "ngModel", "minValue", "step", "ngModelChange"]]; }, template: function UnitConversionServiceBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-textbox-number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UnitConversionServiceBasicExampleComponent_Template_nui_textbox_number_ngModelChange_4_listener($event) { return ctx.onNumberChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.conversionDisplay, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOptionalText", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.num)("minValue", 0)("step", 10);
    } }, directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".conversion[_ngcontent-%COMP%] {\n  font-size: 25px;\n  width: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtY29udmVyc2lvbi1zZXJ2aWNlLWJhc2ljLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InVuaXQtY29udmVyc2lvbi1zZXJ2aWNlLWJhc2ljLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udmVyc2lvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiAxNDBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "BEgu":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/unit-conversion-service/unit-conversion-service-example.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: UnitConversionServiceExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConversionServiceExampleModule", function() { return UnitConversionServiceExampleModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _docs_unit_conversion_service_docs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs/unit-conversion-service-docs.component */ "mkvO");
/* harmony import */ var _unit_conversion_service_basic_unit_conversion_service_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit-conversion-service-basic/unit-conversion-service-basic.example.component */ "681S");
/* harmony import */ var _unit_conversion_service_separate_unit_display_unit_conversion_service_separate_unit_display_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit-conversion-service-separate-unit-display/unit-conversion-service-separate-unit-display.example.component */ "uDGR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: "",
        component: _docs_unit_conversion_service_docs_component__WEBPACK_IMPORTED_MODULE_3__["UnitConversionServiceDocsComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "basic",
        component: _unit_conversion_service_basic_unit_conversion_service_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["UnitConversionServiceBasicExampleComponent"],
        data: {
            "srlc": {
                hideIndicator: true,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "separate-unit-display",
        component: _unit_conversion_service_separate_unit_display_unit_conversion_service_separate_unit_display_example_component__WEBPACK_IMPORTED_MODULE_5__["UnitConversionServiceSeparateUnitDisplayExampleComponent"],
        data: {
            "srlc": {
                hideIndicator: true,
            },
            showThemeSwitcher: true,
        },
    },
];
class UnitConversionServiceExampleModule {
}
UnitConversionServiceExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UnitConversionServiceExampleModule });
UnitConversionServiceExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function UnitConversionServiceExampleModule_Factory(t) { return new (t || UnitConversionServiceExampleModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("xfy0"),
        },
    ], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UnitConversionServiceExampleModule, { declarations: [_docs_unit_conversion_service_docs_component__WEBPACK_IMPORTED_MODULE_3__["UnitConversionServiceDocsComponent"],
        _unit_conversion_service_basic_unit_conversion_service_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["UnitConversionServiceBasicExampleComponent"],
        _unit_conversion_service_separate_unit_display_unit_conversion_service_separate_unit_display_example_component__WEBPACK_IMPORTED_MODULE_5__["UnitConversionServiceSeparateUnitDisplayExampleComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "mkvO":
/*!****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/unit-conversion-service/docs/unit-conversion-service-docs.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: UnitConversionServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConversionServiceDocsComponent", function() { return UnitConversionServiceDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _unit_conversion_service_basic_unit_conversion_service_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../unit-conversion-service-basic/unit-conversion-service-basic.example.component */ "681S");
/* harmony import */ var _unit_conversion_service_separate_unit_display_unit_conversion_service_separate_unit_display_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-conversion-service-separate-unit-display/unit-conversion-service-separate-unit-display.example.component */ "uDGR");





class UnitConversionServiceDocsComponent {
}
UnitConversionServiceDocsComponent.ɵfac = function UnitConversionServiceDocsComponent_Factory(t) { return new (t || UnitConversionServiceDocsComponent)(); };
UnitConversionServiceDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnitConversionServiceDocsComponent, selectors: [["ng-component"]], decls: 120, vars: 4, consts: [["href", "../injectables/UnitConversionService.html#info", "target", "_parent"], ["type", "info", 3, "allowDismiss"], ["href", "../pipes/UnitConversionPipe.html", "target", "_blank"], ["href", "../miscellaneous/enumerations.html#UnitBase", "target", "_blank"], ["href", "../interfaces/IUnitConversionResult.html", "target", "_blank"], ["type", "warning", 3, "allowDismiss"], ["href", "../miscellaneous/typealiases.html#UnitOption", "target", "_blank"], ["filenamePrefix", "unit-conversion-service-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "unit-conversion-service-separate-unit-display", "exampleTitle", "Separating the Value and Unit for Display"]], template: function UnitConversionServiceDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UnitConversionService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " can be used to convert a large value of a small basic unit to a smaller value of a larger unit\u2014for example, converting 1024 B (bytes) to 1 KB.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There is also a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "unitConversion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " pipe that makes use of this service. If your use case is a simple conversion of a value within the context of a template, the pipe may offer a more syntactically succinct method of conversion than using the methods of this service directly.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " To convert a value, use the service's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "convert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " method which accepts three arguments:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - The number to be converted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " - An optional base value to use for the exponential expression when calculating the conversion result (defaults to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "UnitBase.Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ", or 1000) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "scale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " - An optional scale value for specifying how many significant digits to the right of the decimal to preserve in the output (defaults to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " The result of the conversion is of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "IUnitConversionResult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " For converting a value in bytes, be sure to specify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "UnitBase.Bytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ", or 1024, for the convert method's base parameter.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Once the conversion has been calculated, the result can be converted to a display string that includes both the value and the unit. This can be done via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "getFullDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " method. Supported basic units are of type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "UnitOption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " and include the following: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\"generic\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " (e.g. 1K for 1000), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\"bytes\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\"bytesPerSecond\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\"bitsPerSecond\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\"hertz\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nui-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "getFullDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " method will localize the output for all supported units except for the \"generic\" unit. Localization for the \"generic\" unit is not yet supported.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "unit-conversion-service-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Separating the Value and Unit for Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " The display strings for the value and unit can also be determined separately for situations in which you'd like to display the conversion data in separate elements on the page. To get just the converted value for display, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "getValueDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " method, and to get just the converted unit for display, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "getUnitDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " method. If you need to convert the value into scientific notation use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "getScientificDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " instead.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "getValueDisplay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " method offers a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "localize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " parameter which defaults to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ". However, if you're using the \"generic\" unit type, it's recommended to set this argument to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " as localization is not yet supported for the \"generic\" unit.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "unit-conversion-service-separate-unit-display-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _unit_conversion_service_basic_unit_conversion_service_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["UnitConversionServiceBasicExampleComponent"], _unit_conversion_service_separate_unit_display_unit_conversion_service_separate_unit_display_example_component__WEBPACK_IMPORTED_MODULE_4__["UnitConversionServiceSeparateUnitDisplayExampleComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtY29udmVyc2lvbi1zZXJ2aWNlLWRvY3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBRkE7RUFJUSxnQkFBQTtBQUNSIiwiZmlsZSI6InVuaXQtY29udmVyc2lvbi1zZXJ2aWNlLWRvY3MuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuXG4gICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBkaXNjO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "uDGR":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/unit-conversion-service/unit-conversion-service-separate-unit-display/unit-conversion-service-separate-unit-display.example.component.ts ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: UnitConversionServiceSeparateUnitDisplayExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitConversionServiceSeparateUnitDisplayExampleComponent", function() { return UnitConversionServiceSeparateUnitDisplayExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */ "ShSb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function UnitConversionServiceSeparateUnitDisplayExampleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.unitDisplay);
} }
class UnitConversionServiceSeparateUnitDisplayExampleComponent {
    constructor(unitConversionService) {
        this.unitConversionService = unitConversionService;
    }
    ngOnInit() {
        this.onNumberChange(1000);
    }
    onNumberChange(num) {
        this.num = num;
        const conversion = this.unitConversionService.convert(this.num, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["UnitBase"].Standard, 2);
        this.unitDisplay = this.unitConversionService.getUnitDisplay(conversion, "hertz");
        if (this.unitDisplay) {
            this.valueDisplay = this.unitConversionService.getValueDisplay(conversion);
        }
        else {
            // An undefined getUnitDisplay return value indicates the input value was too large to be converted,
            // so the base unit and scientific notation can be used as fallbacks.
            this.unitDisplay = this.unitConversionService.getUnitDisplayBaseValue("hertz");
            this.valueDisplay = this.unitConversionService.getScientificDisplay(conversion);
        }
    }
}
UnitConversionServiceSeparateUnitDisplayExampleComponent.ɵfac = function UnitConversionServiceSeparateUnitDisplayExampleComponent_Factory(t) { return new (t || UnitConversionServiceSeparateUnitDisplayExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["UnitConversionService"])); };
UnitConversionServiceSeparateUnitDisplayExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitConversionServiceSeparateUnitDisplayExampleComponent, selectors: [["unit-conversion-service-separate-unit-display-example"]], decls: 8, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3843284836206601463$$DEMO_SRC_COMPONENTS_DEMO_COMMON_UNIT_CONVERSION_SERVICE_UNIT_CONVERSION_SERVICE_SEPARATE_UNIT_DISPLAY_UNIT_CONVERSION_SERVICE_SEPARATE_UNIT_DISPLAY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Hertz");
        i18n_0 = MSG_EXTERNAL_3843284836206601463$$DEMO_SRC_COMPONENTS_DEMO_COMMON_UNIT_CONVERSION_SERVICE_UNIT_CONVERSION_SERVICE_SEPARATE_UNIT_DISPLAY_UNIT_CONVERSION_SERVICE_SEPARATE_UNIT_DISPLAY_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟078a3217f0edacd1fd914514565f546ff501347e␟3843284836206601463:Hertz`;
    } return [[1, "d-flex"], [1, "conversion", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "conversion__value"], ["class", "conversion__unit", 4, "ngIf"], ["caption", i18n_0, 1, "d-block", "mt-5", 3, "showOptionalText"], ["type", "number", "customBoxWidth", "200px", 3, "ngModel", "minValue", "step", "ngModelChange"], [1, "conversion__unit"]]; }, template: function UnitConversionServiceSeparateUnitDisplayExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UnitConversionServiceSeparateUnitDisplayExampleComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-textbox-number", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UnitConversionServiceSeparateUnitDisplayExampleComponent_Template_nui_textbox_number_ngModelChange_7_listener($event) { return ctx.onNumberChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.valueDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.unitDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showOptionalText", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.num)("minValue", 0)("step", 10);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_4__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".conversion[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 70px;\n}\n.conversion__value[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.conversion__unit[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtY29udmVyc2lvbi1zZXJ2aWNlLXNlcGFyYXRlLXVuaXQtZGlzcGxheS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0FBQVIiLCJmaWxlIjoidW5pdC1jb252ZXJzaW9uLXNlcnZpY2Utc2VwYXJhdGUtdW5pdC1kaXNwbGF5LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udmVyc2lvbiB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNzBweDtcblxuICAgICZfX3ZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cblxuICAgICZfX3VuaXQge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "xfy0":
/*!*********************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/unit-conversion-service sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./docs/unit-conversion-service-docs.component.html": "ho9u",
	"./docs/unit-conversion-service-docs.component.less": "VxP2",
	"./docs/unit-conversion-service-docs.component.ts": "k2Lh",
	"./unit-conversion-service-basic/unit-conversion-service-basic.example.component.html": "MdlX",
	"./unit-conversion-service-basic/unit-conversion-service-basic.example.component.less": "YZ53",
	"./unit-conversion-service-basic/unit-conversion-service-basic.example.component.ts": "2cfX",
	"./unit-conversion-service-example.module.ts": "TQVq",
	"./unit-conversion-service-separate-unit-display/unit-conversion-service-separate-unit-display.example.component.html": "6Ucd",
	"./unit-conversion-service-separate-unit-display/unit-conversion-service-separate-unit-display.example.component.less": "EpeO",
	"./unit-conversion-service-separate-unit-display/unit-conversion-service-separate-unit-display.example.component.ts": "Hnko"
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
webpackContext.id = "xfy0";

/***/ })

}]);
//# sourceMappingURL=unit-conversion-service-unit-conversion-service-example-module-es2015.js.map