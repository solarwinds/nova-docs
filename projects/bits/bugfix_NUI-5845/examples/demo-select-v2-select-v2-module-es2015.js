(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-select-v2-select-v2-module"],{

/***/ "/Hvy":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-error/select-v2-error.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SelectV2ErrorExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2ErrorExampleComponent", function() { return SelectV2ErrorExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");





function SelectV2ErrorExampleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class SelectV2ErrorExampleComponent {
    constructor() {
        this.items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);
        this.error = false;
    }
}
SelectV2ErrorExampleComponent.ɵfac = function SelectV2ErrorExampleComponent_Factory(t) { return new (t || SelectV2ErrorExampleComponent)(); };
SelectV2ErrorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2ErrorExampleComponent, selectors: [["nui-select-v2-error-example"]], hostAttrs: [1, "select-container"], decls: 4, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_ERROR_SELECT_V2_ERROR_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_ERROR_SELECT_V2_ERROR_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6222469594242551638$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_ERROR_SELECT_V2_ERROR_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Toggle error state\n");
        i18n_2 = MSG_EXTERNAL_6222469594242551638$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_ERROR_SELECT_V2_ERROR_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8be663d50519e814efd0a41e9f01c07ed108c259␟6222469594242551638: Toggle error state
`;
    } return [["placeholder", i18n_0, 1, "w-50", "d-inline-flex", 3, "isInErrorState"], [4, "ngFor", "ngForOf"], [1, "d-inline-flex", 2, "padding-left", "15px", 3, "value", "valueChange"], i18n_2, [3, "value"]]; }, template: function SelectV2ErrorExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2ErrorExampleComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SelectV2ErrorExampleComponent_Template_nui_switch_valueChange_2_listener($event) { return ctx.error = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInErrorState", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.error);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "/ZZw":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-color-picker/select-v2-color-picker.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SelectV2ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2ColorPickerComponent", function() { return SelectV2ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");





function SelectV2ColorPickerComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("mix-blend-mode", item_r3 === ctx_r5.defaultColor ? "difference" : null);
} }
function SelectV2ColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectV2ColorPickerComponent_div_2_div_5_Template, 1, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3)("displayValueContext", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("color-picker-option--selected", _r4 == null ? null : _r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4 == null ? null : _r4.selected);
} }
function SelectV2ColorPickerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const open_r8 = ctx.open;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", open_r8 ? "rotate(180deg)" : "");
} }
const CHART_PALETTE_CS1 = [
    "var(--nui-color-bg-secondary)",
    "var(--nui-color-chart-one)",
    "var(--nui-color-chart-two)",
    "var(--nui-color-chart-three)",
    "var(--nui-color-chart-four)",
    "var(--nui-color-chart-five)",
    "var(--nui-color-chart-six)",
    "var(--nui-color-chart-seven)",
    "var(--nui-color-chart-eight)",
    "var(--nui-color-chart-nine)",
    "var(--nui-color-chart-ten)",
];
// Left and right paddings of .color-picker-container element
const CONTAINER_SIDE_PADDINGS_PX = 20;
// Width of the .box element
const BOX_WIDTH_PX = 30;
class SelectV2ColorPickerComponent {
    constructor() {
        // With this param one is able to configure how many columns wide should the color picker be
        this.cols = 6;
        this.overlayConfig = {
            // To automatically calculate the max-width use the approach below if you want to optionally change the amount of color boxes per row,
            // but for most cases just hardcoding the necessary value will be enough
            maxWidth: this.cols
                ? (this.cols * BOX_WIDTH_PX) + CONTAINER_SIDE_PADDINGS_PX + "px"
                : "150px",
        };
        this.backgroundColors = CHART_PALETTE_CS1;
        this.defaultColor = "var(--nui-color-bg-secondary)";
    }
}
SelectV2ColorPickerComponent.ɵfac = function SelectV2ColorPickerComponent_Factory(t) { return new (t || SelectV2ColorPickerComponent)(); };
SelectV2ColorPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2ColorPickerComponent, selectors: [["nui-select-v2-color-picker"]], decls: 5, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_COLOR_PICKER_SELECT_V2_COLOR_PICKER_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_COLOR_PICKER_SELECT_V2_COLOR_PICKER_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 1, "color-picker-select", 3, "overlayConfig", "syncWidth", "displayValueTemplate"], [1, "color-picker-container"], ["class", "d-inline-flex flex-wrap box", 4, "ngFor", "ngForOf"], ["colorSelectTemplate", ""], [1, "d-inline-flex", "flex-wrap", "box"], [1, "w-100", "h-100", "reset-box-sizes", 3, "value", "displayValueContext"], ["option", ""], [1, "color-picker-option"], [1, "color-picker-option__color-box"], ["class", "color-picker-option__glyph", 3, "mix-blend-mode", 4, "ngIf"], [1, "color-picker-option__glyph"], [1, "color-picker-input"], [1, "color-picker-input__box"], [1, "color-picker-input__color-box"], [1, "color-picker-input__toggle"], ["icon", "caret-down"]]; }, template: function SelectV2ColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectV2ColorPickerComponent_div_2_Template, 6, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectV2ColorPickerComponent_ng_template_3_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlayConfig", ctx.overlayConfig)("syncWidth", false)("displayValueTemplate", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.backgroundColors);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2OptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], styles: [".box[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.color-picker-container[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.color-picker-select[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: unset;\n  cursor: pointer;\n}\n.color-picker-input[_ngcontent-%COMP%] {\n  display: flex;\n}\n.color-picker-input__box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n}\n.color-picker-input__color-box[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  border: 1px solid;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  width: 17px;\n  height: 17px;\n  flex-grow: 1;\n  margin: 0 10px;\n}\n.color-picker-input__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-left: 1px solid;\n  border-left-color: var(--nui-color-line-default,#d9d9d9);\n  width: 30px;\n  height: 30px;\n}\n.color-picker-option[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.color-picker-option__color-box[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 3px;\n  border: 1px solid;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  padding: 1px 0 0 1px;\n}\n.color-picker-option--selected[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n}\n.color-picker-option--selected[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.color-picker-option__glyph[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: 12px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS54dWktY2hlY2tib3gtZ2x5cGh7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1saW5lY2FwOnJvdW5kO30KPC9zdHlsZT4KPHBvbHlsaW5lIGNsYXNzPSJ4dWktY2hlY2tib3gtZ2x5cGgiIHBvaW50cz0iMTcsNCA4LDE1IDMsOSAiLz4KPC9zdmc+\");\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC12Mi1jb2xvci1waWNrZXIuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jaGVja2JveC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQWxCSSxXQUFBO0VBQ0EsWUFBQTtBQUZKO0FBd0JJO0VBQ0ksaUJBQUE7QUF0QlI7QUF3Qkk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF0QlI7QUF5Qkk7RUFDSSxhQUFBO0FBdkJSO0FBeUJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXZCWjtBQTBCUTtFQXBDSixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUNQQSxtREFBQTtFRGFBLFdBQUE7RUFDQSxZQUFBO0VBNEJRLFlBQUE7RUFDQSxjQUFBO0FBbEJaO0FBcUJRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQ2xEUix3REFBQTtFRERBLFdBQUE7RUFDQSxZQUFBO0FBa0NKO0FBc0JJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBcEJSO0FBc0JRO0VBMURKLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQ1BBLG1EQUFBO0VEZ0VRLG9CQUFBO0FBaEJaO0FBbUJRO0VDbkVKLGtFQUFBO0FEbURKO0FBa0JZO0VBQ0ksYUFBQTtBQWhCaEI7QUFvQlE7RUUvREosV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUdBLG1yQkFBQTtFRjREUSw0QkFBQTtBQWZaIiwiZmlsZSI6InNlbGVjdC12Mi1jb2xvci1waWNrZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnNcIjtcblxuLnBpY2tlci10aWxlLXNpemUoKSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY29sb3ItYm94KCkge1xuICAgIHdpZHRoOiBAbnVpLXNwYWNlLW1kICsgMTtcbiAgICBoZWlnaHQ6IEBudWktc3BhY2UtbWQgKyAxO1xuICAgIGJvcmRlci1yYWRpdXM6IEBudWktcmFkaXVzLWRlZmF1bHQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG59XG5cbi5jb2xvci1ib3gtaW5wdXQoKSB7XG4gICAgLmNvbG9yLWJveCgpO1xuICAgIHdpZHRoOiBAbnVpLXNwYWNlLW1kICsgQG51aS1zcGFjZS14eHM7XG4gICAgaGVpZ2h0OiBAbnVpLXNwYWNlLW1kICsgQG51aS1zcGFjZS14eHM7XG59XG5cbi5ib3gge1xuICAgIC5waWNrZXItdGlsZS1zaXplKClcbn1cblxuLmNvbG9yLXBpY2tlciB7XG4gICAgJi1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLXhzIEBudWktc3BhY2Utc207XG4gICAgfVxuICAgICYtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJi1pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgJl9fYm94IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fY29sb3ItYm94IHtcbiAgICAgICAgICAgIC5jb2xvci1ib3gtaW5wdXQoKTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1sZWZ0LWNvbG9yLCBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAgICAgICAgIC5waWNrZXItdGlsZS1zaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLW9wdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgJl9fY29sb3ItYm94IHtcbiAgICAgICAgICAgIC5jb2xvci1ib3goKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwIDAgMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tc2VsZWN0ZWR7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLXNlbGVjdGVkKTtcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmX19nbHlwaCB7XG4gICAgICAgICAgICAubnVpLWNoZWNrYm94X19nbHlwaCgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIiwiQGltcG9ydCAocmVmZXJlbmNlKSB1cmwoJy4uL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3MnKTtcblxuLm51aS1jaGVja2JveF9fbWFyaygpIHtcbiAgICBib3JkZXI6IHNvbGlkIEBudWktbGluZS1tZWRpdW07XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IDAgY2VudGVyO1xuICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1hY3RpdmUpO1xuICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3ItYmctY29udGVudCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAaWNvbi1zaXplLWRlZmF1bHQ7XG4gICAgYm9yZGVyLXJhZGl1czogQG51aS1yYWRpdXMtZGVmYXVsdDtcbiAgICBtaW4td2lkdGg6IEBpY29uLXNpemUtZGVmYXVsdDtcbiAgICB3aWR0aDogQGljb24tc2l6ZS1kZWZhdWx0O1xuICAgIGhlaWdodDogQGljb24tc2l6ZS1kZWZhdWx0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XG59XG5cbi5udWktY2hlY2tib3hfX2dseXBoKCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IChAaWNvbi1zaXplLWRlZmF1bHQgLSAoQG51aS1saW5lLW1lZGl1bSAqIDIpKTtcblxuICAgIC8vIFRvRG86IFdlIHNob3VsZCByaWQgb2YgYmFzZTY0IGNvZGUgaGVyZVxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJS0NTQjJhV1YzUW05NFBTSXdJREFnTWpBZ01qQWlJSGRwWkhSb1BTSXlNQ0lnYUdWcFoyaDBQU0l5TUNJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWpBZ01qQTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajRLQ1M1NGRXa3RZMmhsWTJ0aWIzZ3RaMng1Y0doN1ptbHNiRHB1YjI1bE8zTjBjbTlyWlRvalJrWkdSa1pHTzNOMGNtOXJaUzEzYVdSMGFEb3pPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzNOMGNtOXJaUzFzYVc1bFkyRndPbkp2ZFc1a08zMEtQQzl6ZEhsc1pUNEtQSEJ2Ykhsc2FXNWxJR05zWVhOelBTSjRkV2t0WTJobFkydGliM2d0WjJ4NWNHZ2lJSEJ2YVc1MGN6MGlNVGNzTkNBNExERTFJRE1zT1NBaUx6NEtQQzl6ZG1jK1wiKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "0NJQ":
/*!*********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-options-changed/select-v2-options-changed.example.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SelectV2OptionsChangedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2OptionsChangedExampleComponent", function() { return SelectV2OptionsChangedExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");







function SelectV2OptionsChangedExampleComponent_nui_select_v2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
} }
class SelectV2OptionsChangedExampleComponent {
    constructor() {
        this.items = [];
        this.itemSet = [
            [
                $localize `Item 1`,
                $localize `Item 2`,
                $localize `Item 3`,
                $localize `Item 4`,
            ],
            [
                $localize `Item 3`,
                $localize `Item 4`,
                $localize `Item 5`,
                $localize `Item 6`,
            ],
        ];
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    ngOnInit() {
        this.items = this.itemSet[0];
    }
    setItems(i) {
        this.items = this.itemSet[i];
    }
}
SelectV2OptionsChangedExampleComponent.ɵfac = function SelectV2OptionsChangedExampleComponent_Factory(t) { return new (t || SelectV2OptionsChangedExampleComponent)(); };
SelectV2OptionsChangedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2OptionsChangedExampleComponent, selectors: [["nui-select-v2-options-changed-example"]], hostAttrs: [1, "select-container"], decls: 11, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OPTIONS_CHANGED_SELECT_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OPTIONS_CHANGED_SELECT_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6602753656016090774$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OPTIONS_CHANGED_SELECT_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Set items: 1, 2, 3, 4");
        i18n_2 = MSG_EXTERNAL_6602753656016090774$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OPTIONS_CHANGED_SELECT_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟88907de97f07da173cbae35e528068baaa303a9f␟6602753656016090774:Set items: 1, 2, 3, 4`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3366342520245221259$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OPTIONS_CHANGED_SELECT_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Set items: 3, 4, 5, 6");
        i18n_4 = MSG_EXTERNAL_3366342520245221259$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OPTIONS_CHANGED_SELECT_V2_OPTIONS_CHANGED_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟546d7c2a5e1a2d4b895c66a8507f43a9800c1ef2␟3366342520245221259:Set items: 3, 4, 5, 6`;
    } return [["placeholder", i18n_0, 3, "formControl"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_2, i18n_4, [3, "value"]]; }, template: function SelectV2OptionsChangedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-select-v2", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectV2OptionsChangedExampleComponent_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2OptionsChangedExampleComponent_Template_button_click_7_listener() { return ctx.setItems(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2OptionsChangedExampleComponent_Template_button_click_9_listener() { return ctx.setItems(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Value: ", _r0.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FormControl.value: ", ctx.selectControl.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "0O/l":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-basic/select-v2-basic.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder [formControl]=\"selectControl\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n");

/***/ }),

/***/ "17vA":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-error/select-v2-error.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-select-v2-error-example\",\n    templateUrl: \"./select-v2-error.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2ErrorExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize`Item ${i}`);\n    public error: boolean = false;\n}\n");

/***/ }),

/***/ "30HK":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-custom-control/select-v2-custom-control.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n               [manualDropdownControl]=\"true\"\n               class=\"w-25\"\n               >\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">\n        {{item}}\n    </nui-select-v2-option>\n\n</nui-select-v2>\n\n<div class=\"ml-4 d-flex w-75\">\n    <button nui-button\n            type=\"button\"\n            class=\"mr-3\"\n            (click)=\"showList($event)\">Show</button>\n\n    <button nui-button\n            type=\"button\"\n            class=\"mr-3\"\n            (click)=\"hideList($event)\">Hide</button>\n\n    <button nui-button\n            type=\"button\"\n            class=\"mr-3\"\n            (click)=\"toggleList($event)\">Toggle</button>\n\n    <div class=\"d-flex align-items-center\">\n        <nui-switch [(value)]=\"handleClicksOutside\" i18n>\n            Close on focus-out\n        </nui-switch>\n    </div>\n</div>\n");

/***/ }),

/***/ "4N+t":
/*!****************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2.module.ts ***!
  \****************************************************************/
/*! exports provided: SelectV2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2Module", function() { return SelectV2Module; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "TSO1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2DocsComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2BasicExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "getting-value",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2GettingValueExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "setting-value",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2SettingValueExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "customize-options",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2CustomizeOptionsExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "grouped",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2GroupedItemsExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "disabled",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2DisabledExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "error",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2ErrorExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "inline",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2InlineExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "styling",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2StylingExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "virtual-scroll",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2VirtualScrollExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "overlay-config",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2OverlayConfigExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "reactive-form",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2ReactiveFormFieldExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "custom-control",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2CustomControlExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "custom-content",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2CustomContentExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "options-changed",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionsChangedExampleComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "color-picker",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2ColorPickerComponent"],
        data: {
            showThemeSwitcher: true,
            srlc: {
                stage: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "test",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2TestExampleComponent"],
        data: {
            "srlc": {
                hideIndicator: true,
            },
        },
    },
];
class SelectV2Module {
}
SelectV2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SelectV2Module });
SelectV2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function SelectV2Module_Factory(t) { return new (t || SelectV2Module)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("5KeD"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDividerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectV2Module"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiValidationMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDialogModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiOverlayAdditionsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SelectV2Module, { declarations: [_index__WEBPACK_IMPORTED_MODULE_4__["SelectV2BasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2DisabledExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2ErrorExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2InlineExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2DocsComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2GroupedItemsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2StylingExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2VirtualScrollExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2OverlayConfigExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2ReactiveFormFieldExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2CustomizeOptionsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2CustomControlExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2TestExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2CustomContentExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionsChangedExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2GettingValueExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2SettingValueExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["SelectV2ColorPickerComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDividerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectV2Module"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiValidationMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiFormFieldModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDialogModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiOverlayAdditionsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "4NXY":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-grouped-items/select-v2-grouped-items.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option-group *ngFor=\"let itemGroup of items; let last = last\">\n        <span class=\"nui-select-v2-option-group--header\">{{itemGroup.header}}</span>\n        <nui-select-v2-option *ngFor=\"let item of itemGroup.items\"\n            [value]=\"item\">\n            {{item.name}}\n        </nui-select-v2-option>\n        <nui-divider *ngIf=\"!last\" size=\"extra-small\"></nui-divider>\n    </nui-select-v2-option-group>\n</nui-select-v2>\n");

/***/ }),

/***/ "4eXU":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-color-picker/select-v2-color-picker.component.less ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n.picker-tile-size() {\n    width: 30px;\n    height: 30px;\n}\n\n.color-box() {\n    width: @nui-space-md + 1;\n    height: @nui-space-md + 1;\n    border-radius: @nui-radius-default;\n    border: 1px solid;\n    .setCssVariable(border-color, nui-color-line-default);\n}\n\n.color-box-input() {\n    .color-box();\n    width: @nui-space-md + @nui-space-xxs;\n    height: @nui-space-md + @nui-space-xxs;\n}\n\n.box {\n    .picker-tile-size()\n}\n\n.color-picker {\n    &-container {\n        padding: @nui-space-xs @nui-space-sm;\n    }\n    &-select {\n        width: fit-content;\n        min-width: unset;\n        cursor: pointer;\n    }\n\n    &-input {\n        display: flex;\n\n        &__box {\n            display: flex;\n            align-items: center;\n            flex-grow: 1;\n        }\n\n        &__color-box {\n            .color-box-input();\n            flex-grow: 1;\n            margin: 0 10px;\n        }\n\n        &__toggle {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            border-left: 1px solid;\n            .setCssVariable(border-left-color, nui-color-line-default);\n            .picker-tile-size();\n        }\n    }\n\n    &-option {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n\n        &__color-box {\n            .color-box();\n            padding: 1px 0 0 1px;\n        }\n\n        &--selected{\n            .setCssVariable(background-color, nui-color-selected);\n            &:focus {\n                outline: none;\n            }\n        }\n\n        &__glyph {\n            .nui-checkbox__glyph();\n            background-repeat: no-repeat;\n        }\n    }\n}\n");

/***/ }),

/***/ "5KeD":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2 sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "Amdf",
	"./select-v2-basic/select-v2-basic.example.component.html": "0O/l",
	"./select-v2-basic/select-v2-basic.example.component.ts": "6Ghz",
	"./select-v2-color-picker/select-v2-color-picker.component.html": "fEfU",
	"./select-v2-color-picker/select-v2-color-picker.component.less": "4eXU",
	"./select-v2-color-picker/select-v2-color-picker.component.ts": "CB5l",
	"./select-v2-custom-content/select-v2-custom-content.example.component.html": "X3o+",
	"./select-v2-custom-content/select-v2-custom-content.example.component.less": "7Gwx",
	"./select-v2-custom-content/select-v2-custom-content.example.component.ts": "YCyW",
	"./select-v2-custom-control/select-v2-custom-control.example.component.html": "30HK",
	"./select-v2-custom-control/select-v2-custom-control.example.component.ts": "E/8B",
	"./select-v2-customize-options/select-v2-customize-options.example.component.html": "InqL",
	"./select-v2-customize-options/select-v2-customize-options.example.component.ts": "gp4e",
	"./select-v2-disabled/select-v2-disabled.example.component.html": "kGRe",
	"./select-v2-disabled/select-v2-disabled.example.component.ts": "xdqU",
	"./select-v2-docs/select-v2-docs.example.component.html": "oOWr",
	"./select-v2-docs/select-v2-docs.example.component.less": "zumQ",
	"./select-v2-docs/select-v2-docs.example.component.ts": "xVRf",
	"./select-v2-error/select-v2-error.example.component.html": "hlfU",
	"./select-v2-error/select-v2-error.example.component.ts": "17vA",
	"./select-v2-getting-value/select-v2-getting-value.example.component.html": "NbFc",
	"./select-v2-getting-value/select-v2-getting-value.example.component.ts": "jIGl",
	"./select-v2-grouped-items/select-v2-grouped-items.example.component.html": "4NXY",
	"./select-v2-grouped-items/select-v2-grouped-items.example.component.ts": "ozD1",
	"./select-v2-inline/select-v2-inline.example.component.html": "o9Un",
	"./select-v2-inline/select-v2-inline.example.component.ts": "UnJU",
	"./select-v2-options-changed/select-v2-options-changed.example.component.html": "hyTk",
	"./select-v2-options-changed/select-v2-options-changed.example.component.ts": "7UDb",
	"./select-v2-overlay-config/select-v2-overlay-config.example.component.html": "hTve",
	"./select-v2-overlay-config/select-v2-overlay-config.example.component.ts": "t3Xk",
	"./select-v2-reactive-form-field/select-v2-reactive-form-field.example.component.html": "y2vA",
	"./select-v2-reactive-form-field/select-v2-reactive-form-field.example.component.ts": "pge4",
	"./select-v2-setting-value/select-v2-setting-value.example.component.html": "UP+A",
	"./select-v2-setting-value/select-v2-setting-value.example.component.ts": "RIDx",
	"./select-v2-styling/select-v2-styling.example.component.html": "FN6Y",
	"./select-v2-styling/select-v2-styling.example.component.less": "uXSP",
	"./select-v2-styling/select-v2-styling.example.component.ts": "9Kjx",
	"./select-v2-test/select-v2-test.example.component.html": "qAK4",
	"./select-v2-test/select-v2-test.example.component.less": "sYsV",
	"./select-v2-test/select-v2-test.example.component.ts": "8Uhj",
	"./select-v2-virtual-scroll/select-v2-virtual-scroll.example.component.html": "m4Yc",
	"./select-v2-virtual-scroll/select-v2-virtual-scroll.example.component.ts": "EALM",
	"./select-v2.module.ts": "aJWh"
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
webpackContext.id = "5KeD";

/***/ }),

/***/ "6Ghz":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-basic/select-v2-basic.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-select-v2-basic-example\",\n    templateUrl: \"select-v2-basic.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2BasicExampleComponent {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public selectControl = new FormControl();\n}\n");

/***/ }),

/***/ "7Gwx":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-custom-content/select-v2-custom-content.example.component.less ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"../../../../../../src/styles/components/combobox-v2-addons.less\";\n@import (reference) \"mixins\";\n\nnui-select-v2 {\n    width: 320px;\n    height: 36px;\n}\n\nnui-select-v2-option {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    &:not(.selected) {\n        .setCssVariable(color, primary_blue) !important;\n    }\n\n    &.selected {\n        .setCssVariable(background-color, nui-color-selected) !important;\n    }\n}\n\n.custom-container {\n    cursor: pointer;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: space-between;\n    padding: @nui-space-xs @nui-space-sm;\n}\n\n.custom-input-template {\n    display: flex;\n    align-items: center;\n\n    .setCssVariable(color, primary_blue);\n    font-family: @font-family-open-sans;\n    font-size: @nui-font-size-hero;\n    font-weight: @nui-font-weight-regular;\n    line-height: @nui-line-height-big;\n\n    nui-icon {\n        position: relative;\n        top: -4px;\n    }\n}\n\n.custom-box {\n    .nui-combobox-v2__popup-box();\n    width: 100%;\n    max-width: unset !important;\n    justify-content: flex-start !important;\n}\n\n\n");

/***/ }),

/***/ "7UDb":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-options-changed/select-v2-options-changed.example.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-select-v2-options-changed-example\",\n    templateUrl: \"select-v2-options-changed.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2OptionsChangedExampleComponent implements OnInit {\n    public items: string[] = [];\n    private itemSet = [\n        [\n            $localize `Item 1`,\n            $localize `Item 2`,\n            $localize `Item 3`,\n            $localize `Item 4`,\n        ],\n        [\n            $localize `Item 3`,\n            $localize `Item 4`,\n            $localize `Item 5`,\n            $localize `Item 6`,\n        ],\n    ];\n    public selectControl = new FormControl();\n\n    public ngOnInit() {\n        this.items = this.itemSet[0];\n    }\n\n    public setItems(i: number) {\n        this.items = this.itemSet[i];\n    }\n}\n");

/***/ }),

/***/ "7vco":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-docs/select-v2-docs.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SelectV2DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2DocsComponent", function() { return SelectV2DocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _select_v2_basic_select_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-v2-basic/select-v2-basic.example.component */ "ITiL");
/* harmony import */ var _select_v2_getting_value_select_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-v2-getting-value/select-v2-getting-value.example.component */ "sLIz");
/* harmony import */ var _select_v2_setting_value_select_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../select-v2-setting-value/select-v2-setting-value.example.component */ "Cq4+");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _select_v2_customize_options_select_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select-v2-customize-options/select-v2-customize-options.example.component */ "h3Y2");
/* harmony import */ var _select_v2_custom_content_select_v2_custom_content_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-v2-custom-content/select-v2-custom-content.example.component */ "Twss");
/* harmony import */ var _select_v2_grouped_items_select_v2_grouped_items_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../select-v2-grouped-items/select-v2-grouped-items.example.component */ "Z5mw");
/* harmony import */ var _select_v2_reactive_form_field_select_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-v2-reactive-form-field/select-v2-reactive-form-field.example.component */ "J1Qm");
/* harmony import */ var _select_v2_virtual_scroll_select_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select-v2-virtual-scroll/select-v2-virtual-scroll.example.component */ "vRmy");
/* harmony import */ var _select_v2_disabled_select_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../select-v2-disabled/select-v2-disabled.example.component */ "GEoz");
/* harmony import */ var _select_v2_error_select_v2_error_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-v2-error/select-v2-error.example.component */ "/Hvy");
/* harmony import */ var _select_v2_styling_select_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../select-v2-styling/select-v2-styling.example.component */ "y1aD");
/* harmony import */ var _select_v2_inline_select_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../select-v2-inline/select-v2-inline.example.component */ "Cj9S");
/* harmony import */ var _select_v2_overlay_config_select_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../select-v2-overlay-config/select-v2-overlay-config.example.component */ "hoVv");
/* harmony import */ var _select_v2_custom_control_select_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../select-v2-custom-control/select-v2-custom-control.example.component */ "eoDd");
/* harmony import */ var _select_v2_color_picker_select_v2_color_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../select-v2-color-picker/select-v2-color-picker.component */ "/ZZw");


















class SelectV2DocsComponent {
}
SelectV2DocsComponent.ɵfac = function SelectV2DocsComponent_Factory(t) { return new (t || SelectV2DocsComponent)(); };
SelectV2DocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2DocsComponent, selectors: [["nui-select-v2-docs-example"]], decls: 430, vars: 8, consts: [["href", "../components/ComboboxV2Component.html", "target", "_blank"], ["filenamePrefix", "select-v2-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "select-v2-getting-value", "exampleTitle", "Getting value"], ["href", "https://angular.io/guide/reactive-forms#replacing-a-form-control-value", "target", "_blank"], ["filenamePrefix", "select-v2-setting-value", "exampleTitle", "Setting value"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "select-v2-customize-options", "exampleTitle", "Customize Options"], ["filenamePrefix", "select-v2-custom-content", "exampleTitle", "Custom Content"], ["filenamePrefix", "select-v2-grouped-items", "exampleTitle", "Grouped Options"], ["href", "../components/FormFieldComponent.html", "target", "_blank"], ["filenamePrefix", "select-v2-reactive-form-field", "exampleTitle", "Reactive form field"], ["href", "https://material.angular.io/cdk/scrolling/overview#virtual-scrolling", "target", "_blank"], ["href", "https://material.angular.io/cdk/scrolling/api"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "select-v2-virtual-scroll", "exampleTitle", "Virtual Scroll"], ["filenamePrefix", "select-v2-disabled", "exampleTitle", "Disabled Mode"], ["filenamePrefix", "select-v2-error", "exampleTitle", "Error state"], ["filenamePrefix", "select-v2-styling", "exampleTitle", "Styling"], ["filenamePrefix", "select-v2-inline", "exampleTitle", "Inline"], ["href", "https://material.angular.io/cdk/overlay/api#OverlayConfig"], ["filenamePrefix", "select-v2-overlay-config", "exampleTitle", "Overlay configuration"], ["filenamePrefix", "select-v2-custom-control", "exampleTitle", "Custom Control"], ["filenamePrefix", "select-v2-color-picker", "exampleTitle", "Color Picker"]], template: function SelectV2DocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<nui-select-v2>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component allows users to select item(s) from a list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Select component is a perfect fit for simple cases or if your options list is small enough. Otherwise consider using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Combobox Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "However, it's recommended to use Select component in case you need input customization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NuiSelectV2Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "<nui-select-v2>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " wrap each option within a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "<select-v2-option>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " instance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "<select-v2-option>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " has the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " input so that it's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " for each option.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " You can use a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " or an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " as a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, ". In some cases, e.g. if using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Grouped items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ", it's recommended to use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " and provide some id's, because you can have the same option title in the different groups and it's necessary to distinguish them somehow. Also, using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " may cause ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " issues as far as the same value is used for model and displaying on the view.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Wrap all of the options inside a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "<nui-select-v2>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " instance as a content projection for the dropdown.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "You can put pretty much anything inside a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "<nui-select-v2>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " dropdown. For example, if you need the dropdown to display some info text, you can project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "standard HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " into the dropdown and it will be shown as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "standard HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " rather than a select option.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nui-select-v2-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Getting and setting the select value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Getting a Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "You can use the following ways to get a value from a select component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " property on the component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Bind to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "valueSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " output - emits the selected value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nui-select-v2-getting-value-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Setting a Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " To set a value for a select, you can use either the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " input or the reactive form control ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "setValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " method, to provide an option from the list.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "nui-select-v2-setting-value-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Customize Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " It's possible to use a custom template for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "s in the list. You can use pretty much any layout for the options by putting the template inside a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "<select-v2-option>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " instance.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Also, it's possible to use custom template instead of default select input. For that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "[displayValueTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " input is used.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " In this example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "[displayValueContext]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " property of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "select-v2-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " element is used to pass a context to custom input template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " All you put in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "[displayValueContext]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " input will be passed to custom template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "#customTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " as a context in the example.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "nui-select-v2-customize-options-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Custom Content and Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " You can use custom content for either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " or select input or dropdown content. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " To use custom content on select input use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "[displayValueContext]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " input which takes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "templateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " for the desired input. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Note that you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "[displayValueContext]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " input on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "nui-select-v2-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " option element to pass a context for custom input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " To use some HTML in the dropdown just pass it as a content projection to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "nui-select-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " together with options.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " For styling the elements you can just apply desired styles to an element you want to change visual representation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " In this example, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, ".less");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " styles are used, you can check styles in the code inspector.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "nui-select-v2-custom-content-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Grouped Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " If you want to group options you can wrap them in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "<nui-select-v2-option-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " instance. You can also provide a header for a group (optionally).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " To use default styles for a header (as in the example below), apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, ".nui-select-v2-option-group--header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " class to the header.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Technically you can use any template instead of, or in addition to, the header.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "nui-select-v2-grouped-items-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Using With Reactive Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "nui-select-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " with reactive forms, create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " that represents the form model. Then, bind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "nui-select-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " to this form element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " It's recommended to use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "<nui-form-field>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " component as a wrapper if you are going to use validation, captions, labels, etc.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "nui-select-v2-reactive-form-field-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Virtual Scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " The options dropdown can use virtual scroll. For that, wrap the options list in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "cdk-virtual-scroll-viewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, ". You can adjust virtual scroll container to your needs according to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Virtual Scroll API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "nui-message", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Warning:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " All the items inside a dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "must");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " be of the same height!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " You should set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "itemSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " property of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "cdk-virtual-scroll-viewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "exact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " value of an option height. Otherwise, some features may not work.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "nui-example-wrapper", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "nui-select-v2-virtual-scroll-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Disabled Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " It is possible to disable either the entire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "select-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " or one or more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "select-v2-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "s. To do that, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "isDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " input to true on the appropriate component.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "nui-example-wrapper", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "nui-select-v2-disabled-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Error State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "isInErrorState");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " input is used to set/change the visual validation state of the component. This can be used in custom situations in which you need to manually indicate that the component is in error state.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "nui-message", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " If you want to use a select as a form field with validation, consider using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "nui-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " component. For information about that, see the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Using With Reactive Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " section.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "nui-example-wrapper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "nui-select-v2-error-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " To style the select's dropdown simply use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "overlayConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " input and fill in its ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "panelClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " property with the global CSS class with the desired styles.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "nui-example-wrapper", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "nui-select-v2-styling-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Inline Display Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " To put a select in inline display mode, add necessary styles to the component. For example, you can add bootstrap ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "d-inline-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " style.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "nui-example-wrapper", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "nui-select-v2-inline-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Overlay configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, " To adjust ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "SelectComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "'s popup overlay properties, such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " or other, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "overlayConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " input in accordance with Angular CDK Overlay Config ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "NOTE: in case you need to set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " using the overlay config make sure to disable the automatic width synchronization, which is enabled by default. This can be done by setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "syncWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " input to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Select-v2 and Combobox-v2 contain default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "with-popup-styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " (you can import it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "POPUP_STYLES_CLASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "@nova-ui/bits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, ") class which styles the popup according to the Nova Design Language. Setting custom styles through the global classes using the `panelClass` will override the default styles of the overlay. If you want to preserve default overlay styles please consider adding the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "with-popup-styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " class when setting styles using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "overlayConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, ". Please see the example below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "nui-example-wrapper", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "nui-select-v2-overlay-config-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Custom Dropdown Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "manualDropdownControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " input gives you total control over opening and closing the dropdown. When set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, ", the default behavior of the dropdown is blocked, and you can provide your own behavior.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "clickOutsideDropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " output can be used to close the dropdown manually on clicks outside both the host element and the dropdown.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, " In order for keyboard navigation work as you open the dropdown you have to manually set focus to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "inputElement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " in case you are triggering the dropdown outside the host element. For that, you can do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "select.inputElement.nativeElement.focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "nui-example-wrapper", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "nui-select-v2-custom-control-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Color Picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "nui-select-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, " can be customized in a number of ways, including such a popular use case like color picker. The example below is purely based on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "select-v2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "select-v2-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, " components, and only requires adding some css. Check the example below.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "nui-example-wrapper", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "nui-select-v2-color-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Keyboard interaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "<nui-select-v2>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, " comes with built-in accessibility features:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "TAB/Shift+TAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, " for focusing the component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "ARROW UP/ARROW DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, " for navigation inside an option list.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "PAGE UP/PAGE DOWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " for navigation inside the list to top/bottom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "ENTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " to select an option.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "ESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " to close the dropdown.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _select_v2_basic_select_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2BasicExampleComponent"], _select_v2_getting_value_select_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2GettingValueExampleComponent"], _select_v2_setting_value_select_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2SettingValueExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _select_v2_customize_options_select_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2CustomizeOptionsExampleComponent"], _select_v2_custom_content_select_v2_custom_content_example_component__WEBPACK_IMPORTED_MODULE_7__["SelectV2CustomContentExampleComponent"], _select_v2_grouped_items_select_v2_grouped_items_example_component__WEBPACK_IMPORTED_MODULE_8__["SelectV2GroupedItemsExampleComponent"], _select_v2_reactive_form_field_select_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__["SelectV2ReactiveFormFieldExampleComponent"], _select_v2_virtual_scroll_select_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_10__["SelectV2VirtualScrollExampleComponent"], _select_v2_disabled_select_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_11__["SelectV2DisabledExampleComponent"], _select_v2_error_select_v2_error_example_component__WEBPACK_IMPORTED_MODULE_12__["SelectV2ErrorExampleComponent"], _select_v2_styling_select_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_13__["SelectV2StylingExampleComponent"], _select_v2_inline_select_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_14__["SelectV2InlineExampleComponent"], _select_v2_overlay_config_select_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_15__["SelectV2OverlayConfigExampleComponent"], _select_v2_custom_control_select_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_16__["SelectV2CustomControlExampleComponent"], _select_v2_color_picker_select_v2_color_picker_component__WEBPACK_IMPORTED_MODULE_17__["SelectV2ColorPickerComponent"]], styles: ["[_nghost-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC12Mi1kb2NzLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDd0IsU0FBQTtBQUN4QjtBQUZBO0VBR1Esa0JBQUE7QUFFUjtBQUxBO0VBTVksZ0JBQUE7QUFFWiIsImZpbGUiOiJzZWxlY3QtdjItZG9jcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5zZWxlY3QtY29udGFpbmVyIHsgbWFyZ2luOiAwOyB9O1xuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "8Uhj":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-test/select-v2-test.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { AfterViewInit, Component, Inject, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from \"@angular/core\";\nimport { FormBuilder, FormControl, FormGroup, Validators } from \"@angular/forms\";\nimport { DialogService, ISelectGroup, NuiDialogRef, OVERLAY_WITH_POPUP_STYLES_CLASS, SelectV2Component } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\ninterface IExampleItem {\n    id: string;\n    name?: string;\n    icon?: string;\n    disabled?: boolean;\n}\n\n@Component({\n    selector: \"nui-select-v2-test-example\",\n    templateUrl: \"./select-v2-test.example.component.html\",\n    styleUrls: [\"./select-v2-test.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n    host: { class: \"select-container\" },\n})\nexport class SelectV2TestExampleComponent implements OnInit, AfterViewInit, OnDestroy {\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n                                       private formBuilder: FormBuilder) {}\n    public selectedItem: IExampleItem;\n    public handleClicksOutside: boolean = false;\n    public iconItems = [\n        \"status_warning\",\n        \"status_up\",\n        \"status_critical\",\n        \"status_reserved\",\n        \"status_unplugged\",\n        \"status_unknown\",\n        \"status_down\",\n        \"status_missing\",\n        \"status_sleep\",\n    ];\n\n    // Datasources\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public itemsDisplayValue: IExampleItem[] = Array.from({ length: 100 }).map((_, i) =>\n        ({\n            id: `value-${i}`,\n            name: $localize `Item ${i}`,\n            icon: \"status_warning\",\n            disabled: !!(i % 2),\n        }));\n\n    public itemsWithIconsOnly: IExampleItem[] = this.iconItems.map((icon, i) =>\n        ({\n            id: `value-${i}`,\n            icon: icon,\n        }));\n\n    public groupedItems: ISelectGroup[] = Array.from({ length: 10 }).map((_, i) => ({\n        header: $localize `Header line ${i + 1}`,\n        items: Array.from({ length: 5 }).map((v, n) => ({\n            id: `value-${i}`,\n            name: $localize `Item ${n + 1}`,\n        })),\n    }));\n\n    // Form\n    public selectControl = new FormControl();\n    public fancyForm: FormGroup;\n\n\n    // Test\n    public customStylesOverlayConfig: OverlayConfig = {\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"custom-select-styles\"],\n    };\n\n    private destroy$: Subject<any> = new Subject<any>();\n    private activeDialog: NuiDialogRef;\n\n    @ViewChild(\"custom_control\") private select: SelectV2Component;\n\n    // Dialog\n    public open(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    public isInErrorState() {\n        return !this.selectedItem;\n    }\n\n    public showList(event: Event): void {\n        event.stopPropagation();\n        this.select.showDropdown();\n        this.select.inputElement.nativeElement.focus();\n    }\n\n    public hideList(event: Event): void {\n        event.stopPropagation();\n        this.select.hideDropdown();\n    }\n\n    public toggleList(event: Event): void {\n        event.stopPropagation();\n        this.select.toggleDropdown();\n        this.select.inputElement.nativeElement.focus();\n    }\n\n    ngOnInit(): void {\n        this.fancyForm = this.formBuilder.group({\n            select: this.formBuilder.control(\"\", Validators.required),\n        });\n\n        this.selectControl.valueChanges\n            .pipe(\n                takeUntil(this.destroy$)\n            )\n            .subscribe(value => {\n                this.selectedItem = value;\n            });\n    }\n\n    ngAfterViewInit() {\n        this.select.clickOutsideDropdown.subscribe(() => {\n            if (this.handleClicksOutside) { this.select.hideDropdown(); }\n        });\n    }\n\n    ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n}\n");

/***/ }),

/***/ "9Kjx":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-styling/select-v2-styling.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component, ViewEncapsulation } from \"@angular/core\";\nimport { OVERLAY_WITH_POPUP_STYLES_CLASS } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-v2-styling-example\",\n    templateUrl: \"./select-v2-styling.example.component.html\",\n    styleUrls: [\"./select-v2-styling.example.component.less\"],\n    host: { class: \"select-container\" },\n    // This is done to make class from the less file global.\n    // Make sure the class from the less file is added to your global style sheet.\n    encapsulation: ViewEncapsulation.None,\n})\nexport class SelectV2StylingExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => ($localize`Item ${i}`));\n\n    public config: OverlayConfig = {\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"nui-overlay-styling-demo-custom-class\"],\n    };\n}\n");

/***/ }),

/***/ "Amdf":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./select-v2-basic/select-v2-basic.example.component\";\nexport * from \"./select-v2-docs/select-v2-docs.example.component\";\nexport * from \"./select-v2-grouped-items/select-v2-grouped-items.example.component\";\nexport * from \"./select-v2-disabled/select-v2-disabled.example.component\";\nexport * from \"./select-v2-error/select-v2-error.example.component\";\nexport * from \"./select-v2-inline/select-v2-inline.example.component\";\nexport * from \"./select-v2-styling/select-v2-styling.example.component\";\nexport * from \"./select-v2-virtual-scroll/select-v2-virtual-scroll.example.component\";\nexport * from \"./select-v2-overlay-config/select-v2-overlay-config.example.component\";\nexport * from \"./select-v2-reactive-form-field/select-v2-reactive-form-field.example.component\";\nexport * from \"./select-v2-customize-options/select-v2-customize-options.example.component\";\nexport * from \"./select-v2-custom-control/select-v2-custom-control.example.component\";\nexport * from \"./select-v2-test/select-v2-test.example.component\";\nexport * from \"./select-v2-custom-content/select-v2-custom-content.example.component\";\nexport * from \"./select-v2-options-changed/select-v2-options-changed.example.component\";\nexport * from \"./select-v2-getting-value/select-v2-getting-value.example.component\";\nexport * from \"./select-v2-setting-value/select-v2-setting-value.example.component\";\nexport * from \"./select-v2-color-picker/select-v2-color-picker.component\";\n");

/***/ }),

/***/ "CB5l":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-color-picker/select-v2-color-picker.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component } from \"@angular/core\";\n\nconst CHART_PALETTE_CS1: string[] = [\n    \"var(--nui-color-bg-secondary)\",\n    \"var(--nui-color-chart-one)\",\n    \"var(--nui-color-chart-two)\",\n    \"var(--nui-color-chart-three)\",\n    \"var(--nui-color-chart-four)\",\n    \"var(--nui-color-chart-five)\",\n    \"var(--nui-color-chart-six)\",\n    \"var(--nui-color-chart-seven)\",\n    \"var(--nui-color-chart-eight)\",\n    \"var(--nui-color-chart-nine)\",\n    \"var(--nui-color-chart-ten)\",\n];\n\n// Left and right paddings of .color-picker-container element\nconst CONTAINER_SIDE_PADDINGS_PX: number = 20;\n// Width of the .box element\nconst BOX_WIDTH_PX: number = 30;\n\n@Component({\n    selector: \"nui-select-v2-color-picker\",\n    templateUrl: \"./select-v2-color-picker.component.html\",\n    styleUrls: [\"./select-v2-color-picker.component.less\"],\n})\nexport class SelectV2ColorPickerComponent {\n    // With this param one is able to configure how many columns wide should the color picker be\n    public cols: number = 6;\n\n    public overlayConfig: OverlayConfig = {\n        // To automatically calculate the max-width use the approach below if you want to optionally change the amount of color boxes per row,\n        // but for most cases just hardcoding the necessary value will be enough\n        maxWidth: this.cols\n            ? (this.cols * BOX_WIDTH_PX) + CONTAINER_SIDE_PADDINGS_PX + \"px\"\n            : \"150px\", // defaults to 4 columns picker\n    };\n    public backgroundColors: string[] = CHART_PALETTE_CS1;\n    public defaultColor = \"var(--nui-color-bg-secondary)\";\n}\n");

/***/ }),

/***/ "Cj9S":
/*!***************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-inline/select-v2-inline.example.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SelectV2InlineExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2InlineExampleComponent", function() { return SelectV2InlineExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");




function SelectV2InlineExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2, " ");
} }
function SelectV2InlineExampleComponent_nui_select_v2_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
} }
class SelectV2InlineExampleComponent {
    constructor() {
        this.items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);
    }
}
SelectV2InlineExampleComponent.ɵfac = function SelectV2InlineExampleComponent_Factory(t) { return new (t || SelectV2InlineExampleComponent)(); };
SelectV2InlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2InlineExampleComponent, selectors: [["nui-select-v2-inline-example"]], hostAttrs: [1, "select-container"], decls: 4, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_INLINE_SELECT_V2_INLINE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_INLINE_SELECT_V2_INLINE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_INLINE_SELECT_V2_INLINE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Select Item");
        i18n_2 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_INLINE_SELECT_V2_INLINE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 1, "d-inline-flex", 2, "margin-right", "15px"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", i18n_2, 1, "d-inline-flex"], [3, "value"]]; }, template: function SelectV2InlineExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2InlineExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-select-v2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectV2InlineExampleComponent_nui_select_v2_option_3_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Cq4+":
/*!*****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-setting-value/select-v2-setting-value.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SelectV2SettingValueExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2SettingValueExampleComponent", function() { return SelectV2SettingValueExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");






function SelectV2SettingValueExampleComponent_nui_select_v2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
} }
function SelectV2SettingValueExampleComponent_nui_select_v2_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3);
} }
class SelectV2SettingValueExampleComponent {
    constructor() {
        this.items = Array.from({ length: 50 }).map((_, i) => $localize `Item ${i}`);
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    ngOnInit() {
        this.selectControl.setValue(this.items[1]);
    }
}
SelectV2SettingValueExampleComponent.ɵfac = function SelectV2SettingValueExampleComponent_Factory(t) { return new (t || SelectV2SettingValueExampleComponent)(); };
SelectV2SettingValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2SettingValueExampleComponent, selectors: [["nui-select-v2-setting-value-example"]], hostAttrs: [1, "select-container"], decls: 14, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_SETTING_VALUE_SELECT_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_SETTING_VALUE_SELECT_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_SETTING_VALUE_SELECT_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Select Item");
        i18n_2 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_SETTING_VALUE_SELECT_V2_SETTING_VALUE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", i18n_2, 3, "formControl"], [3, "value"]]; }, template: function SelectV2SettingValueExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Setting value using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectV2SettingValueExampleComponent_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Setting value using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "FormControl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-select-v2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SelectV2SettingValueExampleComponent_nui_select_v2_option_13_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.items[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "E/8B":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-custom-control/select-v2-custom-control.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, Component, ViewChild } from \"@angular/core\";\nimport { SelectV2Component } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-v2-custom-control-example\",\n    templateUrl: \"select-v2-custom-control.example.component.html\",\n    host: { class: \"select-container d-flex justify-content-between\" },\n})\nexport class SelectV2CustomControlExampleComponent implements AfterViewInit {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n    public handleClicksOutside: boolean = false;\n\n    @ViewChild(SelectV2Component) private select: SelectV2Component;\n\n    public ngAfterViewInit() {\n        this.select.clickOutsideDropdown.subscribe(() => {\n            if (this.handleClicksOutside) { this.select.hideDropdown(); }\n        });\n    }\n\n    public showList(event: Event): void {\n        event.stopPropagation();\n        this.select.showDropdown();\n        this.select.inputElement.nativeElement.focus();\n    }\n\n    public hideList(event: Event): void {\n        event.stopPropagation();\n        this.select.hideDropdown();\n    }\n\n    public toggleList(event: Event): void {\n        event.stopPropagation();\n        this.select.toggleDropdown();\n        this.select.inputElement.nativeElement.focus();\n    }\n}\n");

/***/ }),

/***/ "EALM":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-virtual-scroll/select-v2-virtual-scroll.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { CdkVirtualScrollViewport } from \"@angular/cdk/scrolling\";\nimport { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { SelectV2Component } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-select-v2-virtual-scroll-example\",\n    templateUrl: \"select-v2-virtual-scroll.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2VirtualScrollExampleComponent implements OnInit, OnDestroy, AfterViewInit {\n    public icons: any[] = [\"check\", \"email\", \"execute\"];\n    public items = Array.from({ length: 100000 }).map((_, i) => $localize `Item ${i}`);\n\n    public selectControl = new FormControl();\n    public containerHeight: number = 300;\n\n    private destroy$: Subject<void> = new Subject();\n    private scrollOffset: number = 0;\n\n    @ViewChild(CdkVirtualScrollViewport) private viewport: CdkVirtualScrollViewport;\n    @ViewChild(SelectV2Component) private select: SelectV2Component;\n\n    @HostListener(\"click\", [\"$event\"])\n    public handleClick(event: MouseEvent) {\n        if (this.viewport) {\n            this.viewport.scrollToOffset(this.scrollOffset);\n            this.viewport.checkViewportSize();\n        }\n    }\n\n    ngOnInit() {\n        this.selectControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(value => {\n            console.log(\"Value from Select\", value);\n        });\n    }\n\n    ngAfterViewInit(): void {\n        this.select.valueSelected.pipe(takeUntil(this.destroy$)).subscribe((selectionText) => {\n            this.scrollOffset = this.viewport.measureScrollOffset();\n        });\n    }\n\n    ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n}\n");

/***/ }),

/***/ "FN6Y":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-styling/select-v2-styling.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n               [overlayConfig]=\"config\"\n               style=\"max-width: 50%;\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n");

/***/ }),

/***/ "GEoz":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-disabled/select-v2-disabled.example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SelectV2DisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2DisabledExampleComponent", function() { return SelectV2DisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");





function SelectV2DisabledExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1)("isDisabled", item_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
class SelectV2DisabledExampleComponent {
    constructor() {
        this.items = Array.from({ length: 100 }).map((_, i) => ({
            name: $localize `Item ${i}`,
            disabled: Boolean(Math.round(Math.random())),
        }));
        this.isSelectDisabled = false;
    }
}
SelectV2DisabledExampleComponent.ɵfac = function SelectV2DisabledExampleComponent_Factory(t) { return new (t || SelectV2DisabledExampleComponent)(); };
SelectV2DisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2DisabledExampleComponent, selectors: [["nui-select-v2-disabled-example"]], hostAttrs: [1, "select-container"], decls: 4, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_DISABLED_SELECT_V2_DISABLED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_DISABLED_SELECT_V2_DISABLED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5704424605088380008$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_DISABLED_SELECT_V2_DISABLED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Toggle disabling\n");
        i18n_2 = MSG_EXTERNAL_5704424605088380008$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_DISABLED_SELECT_V2_DISABLED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟4fd336b63e20279fcb27a6a9db9e6c774507ccee␟5704424605088380008: Toggle disabling
`;
    } return [["placeholder", i18n_0, 1, "w-50", "d-inline-flex", 3, "isDisabled"], [3, "value", "isDisabled", 4, "ngFor", "ngForOf"], [1, "d-inline-flex", 2, "padding-left", "15px", 3, "value", "valueChange"], i18n_2, [3, "value", "isDisabled"]]; }, template: function SelectV2DisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2DisabledExampleComponent_nui_select_v2_option_1_Template, 2, 3, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SelectV2DisabledExampleComponent_Template_nui_switch_valueChange_2_listener($event) { return ctx.isSelectDisabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDisabled", ctx.isSelectDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isSelectDisabled);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ITiL":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-basic/select-v2-basic.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SelectV2BasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2BasicExampleComponent", function() { return SelectV2BasicExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");






function SelectV2BasicExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
} }
class SelectV2BasicExampleComponent {
    constructor() {
        this.items = Array.from({ length: 50 }).map((_, i) => $localize `Item ${i}`);
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
}
SelectV2BasicExampleComponent.ɵfac = function SelectV2BasicExampleComponent_Factory(t) { return new (t || SelectV2BasicExampleComponent)(); };
SelectV2BasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2BasicExampleComponent, selectors: [["nui-select-v2-basic-example"]], hostAttrs: [1, "select-container"], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_BASIC_SELECT_V2_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_BASIC_SELECT_V2_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]]; }, template: function SelectV2BasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectV2BasicExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "InqL":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-customize-options/select-v2-customize-options.example.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"selectControl\"\n    [displayValueTemplate]=\"customTemplate\"\n    #select>\n    <nui-select-v2-option *ngFor=\"let item of items\"\n        [value]=\"item.id\"\n        [displayValueContext]=\"item\">\n        Name is {{item.name}} and icon is <nui-icon [icon]=\"item.icon\"></nui-icon>\n    </nui-select-v2-option>\n</nui-select-v2>\n\n<ng-template #customTemplate let-item>\n    <div class=\"nui-select-v2__value\">\n        <div *ngIf=\"item else empty\" class=\"d-flex align-items-center nui-select-v2__value-content\">\n            <nui-icon class=\"mr-2\" [icon]=\"item.icon\"></nui-icon> {{item.name}}\n        </div>\n\n        <nui-icon  [style.transform]=\"select.isDropdownOpen ? 'rotate(180deg)' : ''\"\n            icon=\"caret-down\"></nui-icon>\n    </div>\n\n    <ng-template #empty>\n        <span class=\"nui-select-v2__placeholder\">Select Item</span>\n    </ng-template>\n\n</ng-template>\n");

/***/ }),

/***/ "J1Qm":
/*!*****************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-reactive-form-field/select-v2-reactive-form-field.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SelectV2ReactiveFormFieldExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2ReactiveFormFieldExampleComponent", function() { return SelectV2ReactiveFormFieldExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");








function SelectV2ReactiveFormFieldExampleComponent_nui_select_v2_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
} }
class SelectV2ReactiveFormFieldExampleComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);
    }
    ngOnInit() {
        this.fancyForm = this.formBuilder.group({
            select: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
}
SelectV2ReactiveFormFieldExampleComponent.ɵfac = function SelectV2ReactiveFormFieldExampleComponent_Factory(t) { return new (t || SelectV2ReactiveFormFieldExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
SelectV2ReactiveFormFieldExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2ReactiveFormFieldExampleComponent, selectors: [["nui-select-v2-reactive-form-field-example"]], hostAttrs: [1, "select-container"], decls: 6, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3797570084942068182$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_REACTIVE_FORM_FIELD_SELECT_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select");
        i18n_0 = MSG_EXTERNAL_3797570084942068182$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_REACTIVE_FORM_FIELD_SELECT_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟9ca82952a6bc860b5391d5975322d8af8ceddfa4␟3797570084942068182:Select`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_REACTIVE_FORM_FIELD_SELECT_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some pretty long text with hint");
        i18n_2 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_REACTIVE_FORM_FIELD_SELECT_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_REACTIVE_FORM_FIELD_SELECT_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Select Item");
        i18n_4 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_REACTIVE_FORM_FIELD_SELECT_V2_REACTIVE_FORM_FIELD_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [[1, "nui-edge-definer", 2, "max-width", "30%", 3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, "info", "text", 3, "control"], ["placeholder", i18n_4, "formControlName", "select"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "required"], [3, "value"]]; }, template: function SelectV2ReactiveFormFieldExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-select-v2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectV2ReactiveFormFieldExampleComponent_nui_select_v2_option_3_Template, 2, 2, "nui-select-v2-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-validation-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " This field is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["select"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "NbFc":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-getting-value/select-v2-getting-value.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<b>Accessing value using <code>value</code></b>\n<nui-select-v2 #selectValueExample placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n<p class=\"my-3\">You selected: {{ selectValueExample.value }}</p>\n\n<b>Accessing value using <code>valueSelected</code> output</b>\n<nui-select-v2 #selectValueSelectedExample placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n<p class=\"my-3\">You selected: {{ selectValueSelectedValue }}</p>\n");

/***/ }),

/***/ "RIDx":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-setting-value/select-v2-setting-value.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-select-v2-setting-value-example\",\n    templateUrl: \"select-v2-setting-value.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2SettingValueExampleComponent implements OnInit {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public selectControl: FormControl = new FormControl();\n\n    ngOnInit(): void {\n        this.selectControl.setValue(this.items[1]);\n    }\n}\n");

/***/ }),

/***/ "TSO1":
/*!*****************************************************!*\
  !*** ./demo/src/components/demo/select-v2/index.ts ***!
  \*****************************************************/
/*! exports provided: SelectV2BasicExampleComponent, SelectV2DocsComponent, SelectV2GroupedItemsExampleComponent, SelectV2DisabledExampleComponent, SelectV2ErrorExampleComponent, SelectV2InlineExampleComponent, SelectV2StylingExampleComponent, SelectV2VirtualScrollExampleComponent, SelectV2OverlayConfigExampleComponent, SelectV2ReactiveFormFieldExampleComponent, SelectV2CustomizeOptionsExampleComponent, SelectV2CustomControlExampleComponent, SelectV2TestExampleComponent, SelectV2CustomContentExampleComponent, SelectV2OptionsChangedExampleComponent, SelectV2GettingValueExampleComponent, SelectV2SettingValueExampleComponent, SelectV2ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_v2_basic_select_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-v2-basic/select-v2-basic.example.component */ "ITiL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2BasicExampleComponent", function() { return _select_v2_basic_select_v2_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["SelectV2BasicExampleComponent"]; });

/* harmony import */ var _select_v2_docs_select_v2_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-v2-docs/select-v2-docs.example.component */ "7vco");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2DocsComponent", function() { return _select_v2_docs_select_v2_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["SelectV2DocsComponent"]; });

/* harmony import */ var _select_v2_grouped_items_select_v2_grouped_items_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-v2-grouped-items/select-v2-grouped-items.example.component */ "Z5mw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2GroupedItemsExampleComponent", function() { return _select_v2_grouped_items_select_v2_grouped_items_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2GroupedItemsExampleComponent"]; });

/* harmony import */ var _select_v2_disabled_select_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-v2-disabled/select-v2-disabled.example.component */ "GEoz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2DisabledExampleComponent", function() { return _select_v2_disabled_select_v2_disabled_example_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2DisabledExampleComponent"]; });

/* harmony import */ var _select_v2_error_select_v2_error_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-v2-error/select-v2-error.example.component */ "/Hvy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2ErrorExampleComponent", function() { return _select_v2_error_select_v2_error_example_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2ErrorExampleComponent"]; });

/* harmony import */ var _select_v2_inline_select_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-v2-inline/select-v2-inline.example.component */ "Cj9S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2InlineExampleComponent", function() { return _select_v2_inline_select_v2_inline_example_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2InlineExampleComponent"]; });

/* harmony import */ var _select_v2_styling_select_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-v2-styling/select-v2-styling.example.component */ "y1aD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2StylingExampleComponent", function() { return _select_v2_styling_select_v2_styling_example_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2StylingExampleComponent"]; });

/* harmony import */ var _select_v2_virtual_scroll_select_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-v2-virtual-scroll/select-v2-virtual-scroll.example.component */ "vRmy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2VirtualScrollExampleComponent", function() { return _select_v2_virtual_scroll_select_v2_virtual_scroll_example_component__WEBPACK_IMPORTED_MODULE_7__["SelectV2VirtualScrollExampleComponent"]; });

/* harmony import */ var _select_v2_overlay_config_select_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-v2-overlay-config/select-v2-overlay-config.example.component */ "hoVv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2OverlayConfigExampleComponent", function() { return _select_v2_overlay_config_select_v2_overlay_config_example_component__WEBPACK_IMPORTED_MODULE_8__["SelectV2OverlayConfigExampleComponent"]; });

/* harmony import */ var _select_v2_reactive_form_field_select_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-v2-reactive-form-field/select-v2-reactive-form-field.example.component */ "J1Qm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2ReactiveFormFieldExampleComponent", function() { return _select_v2_reactive_form_field_select_v2_reactive_form_field_example_component__WEBPACK_IMPORTED_MODULE_9__["SelectV2ReactiveFormFieldExampleComponent"]; });

/* harmony import */ var _select_v2_customize_options_select_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select-v2-customize-options/select-v2-customize-options.example.component */ "h3Y2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2CustomizeOptionsExampleComponent", function() { return _select_v2_customize_options_select_v2_customize_options_example_component__WEBPACK_IMPORTED_MODULE_10__["SelectV2CustomizeOptionsExampleComponent"]; });

/* harmony import */ var _select_v2_custom_control_select_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select-v2-custom-control/select-v2-custom-control.example.component */ "eoDd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2CustomControlExampleComponent", function() { return _select_v2_custom_control_select_v2_custom_control_example_component__WEBPACK_IMPORTED_MODULE_11__["SelectV2CustomControlExampleComponent"]; });

/* harmony import */ var _select_v2_test_select_v2_test_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select-v2-test/select-v2-test.example.component */ "ciDn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2TestExampleComponent", function() { return _select_v2_test_select_v2_test_example_component__WEBPACK_IMPORTED_MODULE_12__["SelectV2TestExampleComponent"]; });

/* harmony import */ var _select_v2_custom_content_select_v2_custom_content_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./select-v2-custom-content/select-v2-custom-content.example.component */ "Twss");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2CustomContentExampleComponent", function() { return _select_v2_custom_content_select_v2_custom_content_example_component__WEBPACK_IMPORTED_MODULE_13__["SelectV2CustomContentExampleComponent"]; });

/* harmony import */ var _select_v2_options_changed_select_v2_options_changed_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select-v2-options-changed/select-v2-options-changed.example.component */ "0NJQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2OptionsChangedExampleComponent", function() { return _select_v2_options_changed_select_v2_options_changed_example_component__WEBPACK_IMPORTED_MODULE_14__["SelectV2OptionsChangedExampleComponent"]; });

/* harmony import */ var _select_v2_getting_value_select_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select-v2-getting-value/select-v2-getting-value.example.component */ "sLIz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2GettingValueExampleComponent", function() { return _select_v2_getting_value_select_v2_getting_value_example_component__WEBPACK_IMPORTED_MODULE_15__["SelectV2GettingValueExampleComponent"]; });

/* harmony import */ var _select_v2_setting_value_select_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-v2-setting-value/select-v2-setting-value.example.component */ "Cq4+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2SettingValueExampleComponent", function() { return _select_v2_setting_value_select_v2_setting_value_example_component__WEBPACK_IMPORTED_MODULE_16__["SelectV2SettingValueExampleComponent"]; });

/* harmony import */ var _select_v2_color_picker_select_v2_color_picker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./select-v2-color-picker/select-v2-color-picker.component */ "/ZZw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectV2ColorPickerComponent", function() { return _select_v2_color_picker_select_v2_color_picker_component__WEBPACK_IMPORTED_MODULE_17__["SelectV2ColorPickerComponent"]; });





















/***/ }),

/***/ "Twss":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-custom-content/select-v2-custom-content.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SelectV2CustomContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2CustomContentExampleComponent", function() { return SelectV2CustomContentExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option-group/select-v2-option-group.component */ "2nXI");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/divider/divider.component */ "UGtJ");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");










function SelectV2CustomContentExampleComponent_nui_select_v2_option_group_2_nui_select_v2_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2CustomContentExampleComponent_nui_select_v2_option_group_2_nui_select_v2_option_6_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.actionSimulation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r6.id)("displayValueContext", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "menu");
} }
function SelectV2CustomContentExampleComponent_nui_select_v2_option_group_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2CustomContentExampleComponent_nui_select_v2_option_group_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.actionSimulation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add new filtered state");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-divider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectV2CustomContentExampleComponent_nui_select_v2_option_group_2_nui_select_v2_option_6_Template, 3, 4, "nui-select-v2-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.headerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r4.options);
} }
function SelectV2CustomContentExampleComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const context_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](context_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", context_r11.icon);
} }
function SelectV2CustomContentExampleComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectV2CustomContentExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectV2CustomContentExampleComponent_ng_template_3_div_1_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectV2CustomContentExampleComponent_ng_template_3_ng_template_3_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const context_r11 = ctx.$implicit;
    const open_r12 = ctx.open;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", context_r11)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", open_r12 ? "rotate(180deg)" : "");
} }
class SelectV2CustomContentExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.items = [{
                headerName: $localize `Saved Data Filters`,
                options: [
                    {
                        id: 1,
                        name: $localize `All Services`,
                        icon: "check",
                    },
                    {
                        id: 2,
                        name: $localize `Unified Communication Apps`,
                        icon: "execute",
                    },
                ],
            }];
    }
    actionSimulation(event) {
        this.toastService.info({
            message: $localize `Action Occurred!`,
        });
        event === null || event === void 0 ? void 0 : event.stopPropagation();
    }
}
SelectV2CustomContentExampleComponent.ɵfac = function SelectV2CustomContentExampleComponent_Factory(t) { return new (t || SelectV2CustomContentExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
SelectV2CustomContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2CustomContentExampleComponent, selectors: [["nui-select-v2-custom-content-example"]], decls: 5, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOM_CONTENT_SELECT_V2_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOM_CONTENT_SELECT_V2_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 1, "action", 3, "displayValueTemplate"], ["select", ""], [4, "ngFor", "ngForOf"], ["customTemplate", ""], ["nui-button", "", "type", "button", "displayStyle", "action", 1, "custom-box", 3, "icon", "click"], ["size", "extra-small"], [1, "nui-select-v2-option-group--header"], [3, "value", "displayValueContext", 4, "ngFor", "ngForOf"], [3, "value", "displayValueContext"], ["nui-button", "", "type", "button", "displayStyle", "action", 3, "icon", "click"], [1, "custom-container"], ["class", "custom-input-template", 4, "ngIf", "ngIfElse"], ["icon", "caret-down"], ["empty", ""], [1, "custom-input-template"], [1, "ml-2", 3, "icon"], [1, "nui-select-v2__placeholder"]]; }, template: function SelectV2CustomContentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectV2CustomContentExampleComponent_nui_select_v2_option_group_2_Template, 7, 3, "nui-select-v2-option-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectV2CustomContentExampleComponent_ng_template_3_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayValueTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionGroupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_6__["DividerComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__["SelectV2OptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"]], styles: ["nui-select-v2[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 36px;\n}\nnui-select-v2-option[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnui-select-v2-option[_ngcontent-%COMP%]:not(.selected) {\n  color: var(--primary_blue,#0079aa) !important;\n}\nnui-select-v2-option.selected[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1)) !important;\n}\n.custom-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 10px;\n}\n.custom-input-template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--primary_blue,#0079aa);\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 22px;\n}\n.custom-input-template[_ngcontent-%COMP%]   nui-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: -4px;\n}\n.custom-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  min-width: 250px;\n  min-height: 30px;\n  text-align: left;\n  line-height: 14px;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  width: 100%;\n  max-width: unset !important;\n  justify-content: flex-start !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC12Mi1jdXN0b20tY29udGVudC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9jb21wb25lbnRzL2NvbWJvYm94LXYyLWFkZG9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFISjtBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VDVEEsNkNBQUE7QURNSjtBQU9JO0VDYkEsNkVBQUE7QURTSjtBQVNBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQVBKO0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUM5QkEsa0NBQUE7RURpQ0Esd0VBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVRKO0FBQ0E7RUFXUSxrQkFBQTtFQUNBLFNBQUE7QUFUUjtBQWFBO0VFcEJJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdFQUFBO0VBQ0EsZ0JBQUE7RUZjQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtBQUhKIiwiZmlsZSI6InNlbGVjdC12Mi1jdXN0b20tY29udGVudC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9jb21wb25lbnRzL2NvbWJvYm94LXYyLWFkZG9ucy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbm51aS1zZWxlY3QtdjIge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG59XG5cbm51aS1zZWxlY3QtdjItb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJjpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgcHJpbWFyeV9ibHVlKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLXNlbGVjdGVkKSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmN1c3RvbS1jb250YWluZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLXhzIEBudWktc3BhY2Utc207XG59XG5cbi5jdXN0b20taW5wdXQtdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgcHJpbWFyeV9ibHVlKTtcbiAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LW9wZW4tc2FucztcbiAgICBmb250LXNpemU6IEBudWktZm9udC1zaXplLWhlcm87XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbiAgICBsaW5lLWhlaWdodDogQG51aS1saW5lLWhlaWdodC1iaWc7XG5cbiAgICBudWktaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtNHB4O1xuICAgIH1cbn1cblxuLmN1c3RvbS1ib3gge1xuICAgIC5udWktY29tYm9ib3gtdjJfX3BvcHVwLWJveCgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuXG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vbWl4aW5zLmxlc3NcIjtcblxuQGJveC1taW4td2lkdGg6IDI1MHB4O1xuQGJveC1taW4taGVpZ2h0OiAzMHB4O1xuXG4ubnVpLWNvbWJvYm94LXYyIHtcbiAgICAmX19lbXB0eS1zZWFyY2gge1xuICAgICAgICAubnVpLWNvbWJvYm94LXYyX19wb3B1cC1ib3goKTtcbiAgICAgICAgY29sb3I6IHJnYmEoMTcsIDE3LCAxNywgMC42KTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGNvbG9yLCBudWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICBmb250LXNpemU6IEBudWktZm9udC1zaXplLXNtYWxsO1xuICAgIH1cblxuICAgICZfX2NyZWF0ZS1vcHRpb24ge1xuICAgICAgICAudGV4dC1vdmVyZmxvdyhlbGxpcHNpcyk7XG4gICAgICAgIC5udWktY29tYm9ib3gtdjJfX3BvcHVwLWJveCgpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICAgICAgICBmb250LXNpemU6IEBudWktZm9udC1zaXplLWRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiBAcHJpbWFyeV9ibHVlO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWJnLXRyYW5zcGFyZW50LWhvdmVyKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLm51aS1jb21ib2JveC12Ml9fcG9wdXAtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCBAbnVpLXNwYWNlLXNtO1xuICAgIG1pbi13aWR0aDogQGJveC1taW4td2lkdGg7XG4gICAgbWluLWhlaWdodDogQGJveC1taW4taGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IEBudWktbGluZS1oZWlnaHQtc21hbGw7XG4gICAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1vcGVuLXNhbnM7XG4gICAgZm9udC13ZWlnaHQ6IEBudWktZm9udC13ZWlnaHQtcmVndWxhcjtcbn1cblxuLmFjdGl2ZS1pdGVtKCkge1xuICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3Itc2VsZWN0ZWQpO1xuICAgIC5mb2N1cy1vdXRsaW5lLWluc2V0KCk7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "UP+A":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-setting-value/select-v2-setting-value.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<b>Setting value using <code>value</code> input</b>\n<nui-select-v2 [value]=\"items[0]\" placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n\n<br>\n\n<b>Setting value using <code>FormControl</code></b>\n<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder [formControl]=\"selectControl\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n");

/***/ }),

/***/ "UnJU":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-inline/select-v2-inline.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-select-v2-inline-example\",\n    templateUrl: \"./select-v2-inline.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2InlineExampleComponent {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize`Item ${i}`);\n}\n");

/***/ }),

/***/ "X3o+":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-custom-content/select-v2-custom-content.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n    class=\"action\"\n    #select\n    [displayValueTemplate]=\"customTemplate\">\n    <nui-select-v2-option-group *ngFor=\"let item of items\">\n        <button nui-button type=\"button\" displayStyle=\"action\" [icon]=\"'add'\" class=\"custom-box\" (click)=\"actionSimulation()\">Add new filtered state</button>\n        <nui-divider size=\"extra-small\"></nui-divider>\n        <span class=\"nui-select-v2-option-group--header\">{{item.headerName}}</span>\n        <nui-select-v2-option\n            *ngFor=\"let option of item.options\"\n            [value]=\"option.id\"\n            [displayValueContext]=\"option\">\n                {{option.name}}\n            <button nui-button type=\"button\" displayStyle=\"action\" [icon]=\"'menu'\" (click)=\"actionSimulation($event)\"></button>\n    </nui-select-v2-option>\n    </nui-select-v2-option-group>\n</nui-select-v2>\n\n\n\n<ng-template #customTemplate let-context let-open=\"open\">\n    <div class=\"custom-container\">\n        <div *ngIf=\"context else empty\" class=\"custom-input-template\">\n            <span>{{context.name}}</span>\n            <nui-icon class=\"ml-2\" [icon]=\"context.icon\"></nui-icon>\n        </div>\n\n        <nui-icon  [style.transform]=\"open ? 'rotate(180deg)' : ''\"\n            icon=\"caret-down\"></nui-icon>\n    </div>\n\n    <ng-template #empty>\n        <span class=\"nui-select-v2__placeholder\">Select Item</span>\n    </ng-template>\n\n</ng-template>\n");

/***/ }),

/***/ "YCyW":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-custom-content/select-v2-custom-content.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-v2-custom-content-example\",\n    templateUrl: \"./select-v2-custom-content.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    styleUrls: [\"select-v2-custom-content.example.component.less\"],\n})\nexport class SelectV2CustomContentExampleComponent {\n    public items = [{\n        headerName: $localize `Saved Data Filters`,\n        options: [\n            {\n                id: 1,\n                name: $localize `All Services`,\n                icon: \"check\",\n            },\n            {\n                id: 2,\n                name: $localize `Unified Communication Apps`,\n                icon: \"execute\",\n            },\n        ],\n    }];\n\n    constructor(@Inject(ToastService) private toastService: ToastService) {}\n\n    public actionSimulation(event: Event) {\n        this.toastService.info({\n            message: $localize `Action Occurred!`,\n        });\n        event?.stopPropagation();\n    }\n}\n");

/***/ }),

/***/ "Z5mw":
/*!*****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-grouped-items/select-v2-grouped-items.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SelectV2GroupedItemsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2GroupedItemsExampleComponent", function() { return SelectV2GroupedItemsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option-group/select-v2-option-group.component */ "2nXI");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/divider/divider.component */ "UGtJ");






function SelectV2GroupedItemsExampleComponent_nui_select_v2_option_group_1_nui_select_v2_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function SelectV2GroupedItemsExampleComponent_nui_select_v2_option_group_1_nui_divider_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-divider", 6);
} }
function SelectV2GroupedItemsExampleComponent_nui_select_v2_option_group_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectV2GroupedItemsExampleComponent_nui_select_v2_option_group_1_nui_select_v2_option_3_Template, 2, 2, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectV2GroupedItemsExampleComponent_nui_select_v2_option_group_1_nui_divider_4_Template, 1, 0, "nui-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemGroup_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemGroup_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemGroup_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
} }
const getRandomNumberTo = (max) => Math.floor(Math.random() * Math.floor(max) + 1);
class SelectV2GroupedItemsExampleComponent {
    constructor() {
        this.items = Array.from({ length: 10 }).map((_, i) => ({
            header: $localize `Header line ${i + 1}`,
            items: Array.from({ length: getRandomNumberTo(5) }).map((v, n) => ({
                id: `value-${i}`,
                name: $localize `Item ${n + 1}`,
            })),
        }));
    }
}
SelectV2GroupedItemsExampleComponent.ɵfac = function SelectV2GroupedItemsExampleComponent_Factory(t) { return new (t || SelectV2GroupedItemsExampleComponent)(); };
SelectV2GroupedItemsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2GroupedItemsExampleComponent, selectors: [["nui-select-v2-grouped-items-example"]], hostAttrs: [1, "select-container"], decls: 2, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_GROUPED_ITEMS_SELECT_V2_GROUPED_ITEMS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_GROUPED_ITEMS_SELECT_V2_GROUPED_ITEMS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0], [4, "ngFor", "ngForOf"], [1, "nui-select-v2-option-group--header"], [3, "value", 4, "ngFor", "ngForOf"], ["size", "extra-small", 4, "ngIf"], [3, "value"], ["size", "extra-small"]]; }, template: function SelectV2GroupedItemsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2GroupedItemsExampleComponent_nui_select_v2_option_group_1_Template, 5, 3, "nui-select-v2-option-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_1__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_3__["SelectV2OptionGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"]], encapsulation: 2 });


/***/ }),

/***/ "aJWh":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ScrollingModule } from \"@angular/cdk/scrolling\";\nimport { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule, NuiDialogModule,\n    NuiDividerModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiIconModule,\n    NuiMessageModule,\n    NuiOverlayAdditionsModule,\n    NuiSelectV2Module,\n    NuiSwitchModule,\n    NuiValidationMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    SelectV2BasicExampleComponent,\n    SelectV2ColorPickerComponent,\n    SelectV2CustomContentExampleComponent,\n    SelectV2CustomControlExampleComponent,\n    SelectV2CustomizeOptionsExampleComponent,\n    SelectV2DisabledExampleComponent,\n    SelectV2DocsComponent,\n    SelectV2ErrorExampleComponent,\n    SelectV2GettingValueExampleComponent,\n    SelectV2GroupedItemsExampleComponent,\n    SelectV2InlineExampleComponent,\n    SelectV2OptionsChangedExampleComponent,\n    SelectV2OverlayConfigExampleComponent,\n    SelectV2ReactiveFormFieldExampleComponent,\n    SelectV2SettingValueExampleComponent,\n    SelectV2StylingExampleComponent,\n    SelectV2TestExampleComponent,\n    SelectV2VirtualScrollExampleComponent,\n} from \"./index\";\n\n\nconst routes = [\n    {\n        path: \"\",\n        component: SelectV2DocsComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"basic\",\n        component: SelectV2BasicExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"getting-value\",\n        component: SelectV2GettingValueExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"setting-value\",\n        component: SelectV2SettingValueExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"customize-options\",\n        component: SelectV2CustomizeOptionsExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"grouped\",\n        component: SelectV2GroupedItemsExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"disabled\",\n        component: SelectV2DisabledExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"error\",\n        component: SelectV2ErrorExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"inline\",\n        component: SelectV2InlineExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"styling\",\n        component: SelectV2StylingExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"virtual-scroll\",\n        component: SelectV2VirtualScrollExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"overlay-config\",\n        component: SelectV2OverlayConfigExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"reactive-form\",\n        component: SelectV2ReactiveFormFieldExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"custom-control\",\n        component: SelectV2CustomControlExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"custom-content\",\n        component: SelectV2CustomContentExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"options-changed\",\n        component: SelectV2OptionsChangedExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"color-picker\",\n        component: SelectV2ColorPickerComponent,\n        data: {\n            showThemeSwitcher: true,\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: SelectV2TestExampleComponent,\n        data: {\n            \"srlc\": {\n                hideIndicator: true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiIconModule,\n        NuiDividerModule,\n        NuiSelectV2Module,\n        ReactiveFormsModule,\n        FormsModule,\n        NuiSwitchModule,\n        NuiValidationMessageModule,\n        NuiFormFieldModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        ScrollingModule,\n        NuiDialogModule,\n        NuiOverlayAdditionsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        SelectV2BasicExampleComponent,\n        SelectV2DisabledExampleComponent,\n        SelectV2ErrorExampleComponent,\n        SelectV2InlineExampleComponent,\n        SelectV2DocsComponent,\n        SelectV2GroupedItemsExampleComponent,\n        SelectV2StylingExampleComponent,\n        SelectV2VirtualScrollExampleComponent,\n        SelectV2OverlayConfigExampleComponent,\n        SelectV2ReactiveFormFieldExampleComponent,\n        SelectV2CustomizeOptionsExampleComponent,\n        SelectV2CustomControlExampleComponent,\n        SelectV2TestExampleComponent,\n        SelectV2CustomContentExampleComponent,\n        SelectV2OptionsChangedExampleComponent,\n        SelectV2GettingValueExampleComponent,\n        SelectV2SettingValueExampleComponent,\n        SelectV2ColorPickerComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SelectV2Module {\n}\n");

/***/ }),

/***/ "ciDn":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-test/select-v2-test.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SelectV2TestExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2TestExampleComponent", function() { return SelectV2TestExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/form-field/form-field.component */ "L5T1");
/* harmony import */ var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/validation-message/validation-message.component */ "Dm7Q");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option-group/select-v2-option-group.component */ "2nXI");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../src/lib/divider/divider.component */ "UGtJ");
/* harmony import */ var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-header.component */ "skCw");
/* harmony import */ var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../src/lib/dialog/dialog-footer.component */ "NHEo");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");




















const _c0 = ["custom_control"];
function SelectV2TestExampleComponent_nui_select_v2_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function SelectV2TestExampleComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
} }
function SelectV2TestExampleComponent_nui_select_v2_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function SelectV2TestExampleComponent_nui_select_v2_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " String can't get long, can it?:) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r28.icon);
} }
function SelectV2TestExampleComponent_nui_select_v2_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r29)("isDisabled", item_r29.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r29.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function SelectV2TestExampleComponent_ng_container_40_nui_select_v2_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r34.name, " ");
} }
function SelectV2TestExampleComponent_ng_container_40_nui_divider_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-divider", 49);
} }
function SelectV2TestExampleComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectV2TestExampleComponent_ng_container_40_nui_select_v2_option_4_Template, 2, 2, "nui-select-v2-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectV2TestExampleComponent_ng_container_40_nui_divider_5_Template, 1, 0, "nui-divider", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const itemGroup_r30 = ctx.$implicit;
    const last_r31 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemGroup_r30.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemGroup_r30.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r31);
} }
function SelectV2TestExampleComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
} }
function SelectV2TestExampleComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
} }
function SelectV2TestExampleComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
} }
function SelectV2TestExampleComponent_nui_select_v2_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function SelectV2TestExampleComponent_nui_select_v2_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function SelectV2TestExampleComponent_ng_template_86_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r40.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r40.name, " ");
} }
function SelectV2TestExampleComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2TestExampleComponent_ng_template_86_div_1_Template, 3, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const open_r41 = ctx.open;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r40)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", open_r41 ? "rotate(180deg)" : "");
} }
function SelectV2TestExampleComponent_ng_template_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r44.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r44.name, " ");
} }
function SelectV2TestExampleComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2TestExampleComponent_ng_template_88_div_1_Template, 3, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const open_r45 = ctx.open;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r44)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", open_r45 ? "rotate(180deg)" : "");
} }
function SelectV2TestExampleComponent_ng_template_90_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r48.name, " ");
} }
function SelectV2TestExampleComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectV2TestExampleComponent_ng_template_90_div_1_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    const open_r49 = ctx.open;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r48)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", open_r49 ? "rotate(180deg)" : "");
} }
function SelectV2TestExampleComponent_ng_template_92_nui_select_v2_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-select-v2-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function SelectV2TestExampleComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function SelectV2TestExampleComponent_ng_template_92_Template_nui_dialog_header_closed_0_listener() { const close_r52 = ctx.close; return close_r52(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-select-v2", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectV2TestExampleComponent_ng_template_92_nui_select_v2_option_3_Template, 2, 2, "nui-select-v2-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectV2TestExampleComponent_ng_template_92_Template_button_click_7_listener() { const close_r52 = ctx.close; return close_r52(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectV2TestExampleComponent_ng_template_92_Template_button_click_9_listener() { const close_r52 = ctx.close; return close_r52(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.items);
} }
function SelectV2TestExampleComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SelectV2TestExampleComponent {
    constructor(dialogService, formBuilder) {
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.handleClicksOutside = false;
        this.iconItems = [
            "status_warning",
            "status_up",
            "status_critical",
            "status_reserved",
            "status_unplugged",
            "status_unknown",
            "status_down",
            "status_missing",
            "status_sleep",
        ];
        // Datasources
        this.items = Array.from({ length: 50 }).map((_, i) => $localize `Item ${i}`);
        this.itemsDisplayValue = Array.from({ length: 100 }).map((_, i) => ({
            id: `value-${i}`,
            name: $localize `Item ${i}`,
            icon: "status_warning",
            disabled: !!(i % 2),
        }));
        this.itemsWithIconsOnly = this.iconItems.map((icon, i) => ({
            id: `value-${i}`,
            icon: icon,
        }));
        this.groupedItems = Array.from({ length: 10 }).map((_, i) => ({
            header: $localize `Header line ${i + 1}`,
            items: Array.from({ length: 5 }).map((v, n) => ({
                id: `value-${i}`,
                name: $localize `Item ${n + 1}`,
            })),
        }));
        // Form
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        // Test
        this.customStylesOverlayConfig = {
            panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "custom-select-styles"],
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    // Dialog
    open(content) {
        this.activeDialog = this.dialogService.open(content, { size: "sm" });
    }
    isInErrorState() {
        return !this.selectedItem;
    }
    showList(event) {
        event.stopPropagation();
        this.select.showDropdown();
        this.select.inputElement.nativeElement.focus();
    }
    hideList(event) {
        event.stopPropagation();
        this.select.hideDropdown();
    }
    toggleList(event) {
        event.stopPropagation();
        this.select.toggleDropdown();
        this.select.inputElement.nativeElement.focus();
    }
    ngOnInit() {
        this.fancyForm = this.formBuilder.group({
            select: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.selectControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(value => {
            this.selectedItem = value;
        });
    }
    ngAfterViewInit() {
        this.select.clickOutsideDropdown.subscribe(() => {
            if (this.handleClicksOutside) {
                this.select.hideDropdown();
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SelectV2TestExampleComponent.ɵfac = function SelectV2TestExampleComponent_Factory(t) { return new (t || SelectV2TestExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
SelectV2TestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectV2TestExampleComponent, selectors: [["nui-select-v2-test-example"]], viewQuery: function SelectV2TestExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, hostAttrs: [1, "select-container"], decls: 96, vars: 25, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Select Item");
        i18n_1 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3797570084942068182$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Select");
        i18n_3 = MSG_EXTERNAL_3797570084942068182$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟9ca82952a6bc860b5391d5975322d8af8ceddfa4␟3797570084942068182:Select`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Some pretty long text with hint");
        i18n_5 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_6;
    }
    else {
        i18n_5 = $localize `:␟e157d4486793f15c2f27fb0f1011c4e2781f6936␟3367498155686111134:Some pretty long text with hint`;
    } let i18n_7; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Select Item");
        i18n_7 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_8;
    }
    else {
        i18n_7 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8999046125839025839$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_10 = goog.getMsg(" This field is required ");
        i18n_9 = MSG_EXTERNAL_8999046125839025839$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_10;
    }
    else {
        i18n_9 = $localize `:␟8eb0e5b7a8ec1199d38c9e92ca26bd4b3aae7f2c␟8999046125839025839: This field is required `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_12 = goog.getMsg("Select Item");
        i18n_11 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_12;
    }
    else {
        i18n_11 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_13; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_14 = goog.getMsg("Select Item");
        i18n_13 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_14;
    }
    else {
        i18n_13 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_15; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_16 = goog.getMsg("Select Item");
        i18n_15 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_16;
    }
    else {
        i18n_15 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_17; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_18 = goog.getMsg("Select Item");
        i18n_17 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_18;
    }
    else {
        i18n_17 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_19; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_20 = goog.getMsg("Select Item");
        i18n_19 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_20;
    }
    else {
        i18n_19 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_21; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_22 = goog.getMsg("Select Item");
        i18n_21 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_22;
    }
    else {
        i18n_21 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_23; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_24 = goog.getMsg("Select Item");
        i18n_23 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_24;
    }
    else {
        i18n_23 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_25; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3708095263074810002$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_26 = goog.getMsg("Call dialog with select");
        i18n_25 = MSG_EXTERNAL_3708095263074810002$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_26;
    }
    else {
        i18n_25 = $localize `:␟0c06003bbd90ee40def5d1978754ab83b38604e5␟3708095263074810002:Call dialog with select`;
    } let i18n_27; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_28 = goog.getMsg("Select Item");
        i18n_27 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_28;
    }
    else {
        i18n_27 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_29; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1644749003923884153$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_30 = goog.getMsg(" Close on focus-out ");
        i18n_29 = MSG_EXTERNAL_1644749003923884153$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS_30;
    }
    else {
        i18n_29 = $localize `:␟7ed18d46de8405c63206204bd0538ffaf84de78b␟1644749003923884153: Close on focus-out `;
    } let i18n_31; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__32 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_31 = MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__32;
    }
    else {
        i18n_31 = $localize `:␟bbffadc040d79a90f05c750b360e43a0cadce635␟1628382286062172232:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_33; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7666056425885373480$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__34 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_33 = MSG_EXTERNAL_7666056425885373480$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__34;
    }
    else {
        i18n_33 = $localize `:␟5ee16d9d35f2f7d16dd97075d0c872990fb85361␟7666056425885373480: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_35; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__36 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_35 = MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__36;
    }
    else {
        i18n_35 = $localize `:␟bbffadc040d79a90f05c750b360e43a0cadce635␟1628382286062172232:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_37; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7005353892180637230$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__38 = goog.getMsg(" Name is {$interpolation} and icon is {$startTagNuiIcon}{$closeTagNuiIcon}", { "interpolation": "\uFFFD0\uFFFD", "startTagNuiIcon": "\uFFFD#2\uFFFD", "closeTagNuiIcon": "\uFFFD/#2\uFFFD" });
        i18n_37 = MSG_EXTERNAL_7005353892180637230$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__38;
    }
    else {
        i18n_37 = $localize `:␟2f5afd47f576d59da5785dbdd5fce9a950aeeab0␟7005353892180637230: Name is ${"\uFFFD0\uFFFD"}:INTERPOLATION: and icon is ${"\uFFFD#2\uFFFD"}:START_TAG_NUI_ICON:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_NUI_ICON:`;
    } let i18n_39; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3208343296639145808$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__40 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_39 = MSG_EXTERNAL_3208343296639145808$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__40;
    }
    else {
        i18n_39 = $localize `:␟4e38a2ad9f05eb609c90a420ea05a96beda64813␟3208343296639145808: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_41; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2981777175439482920$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__42 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_41 = MSG_EXTERNAL_2981777175439482920$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__42;
    }
    else {
        i18n_41 = $localize `:␟c59c5fd11ab937166bf17bdc5482bd87f249d0e9␟2981777175439482920: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_43; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1888320862951610212$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__44 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_43 = MSG_EXTERNAL_1888320862951610212$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__44;
    }
    else {
        i18n_43 = $localize `:␟5639aa83f522fbbc640f350ddc0775e01898cbef␟1888320862951610212: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_45; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__46 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_45 = MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__46;
    }
    else {
        i18n_45 = $localize `:␟bbffadc040d79a90f05c750b360e43a0cadce635␟1628382286062172232:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_47; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1222525096397002861$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__48 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_47 = MSG_EXTERNAL_1222525096397002861$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__48;
    }
    else {
        i18n_47 = $localize `:␟82959a3e279b4b9d78fdad06f9c94f0fc77c4149␟1222525096397002861: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } let i18n_49; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__50 = goog.getMsg("Dialog title");
        i18n_49 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__50;
    }
    else {
        i18n_49 = $localize `:␟eeb379308b8767b98aa0d27308f4f8dd6b46e559␟5892089246202495025:Dialog title`;
    } let i18n_51; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__52 = goog.getMsg("Select Item");
        i18n_51 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__52;
    }
    else {
        i18n_51 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_53; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__54 = goog.getMsg(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. ");
        i18n_53 = MSG_EXTERNAL_7188163738299238705$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__54;
    }
    else {
        i18n_53 = $localize `:␟f62f9e2e728dea80e19b1e7a6f61424d55bab5ea␟7188163738299238705: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus. Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue. Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh. `;
    } let i18n_55; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__56 = goog.getMsg(" Cancel ");
        i18n_55 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__56;
    }
    else {
        i18n_55 = $localize `:␟bf844a41a29961b6dacc48a20eaf97bef0cf5013␟7452095619502551190: Cancel `;
    } let i18n_57; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__58 = goog.getMsg(" Action ");
        i18n_57 = MSG_EXTERNAL_4946554391652567902$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS__58;
    }
    else {
        i18n_57 = $localize `:␟01b5385da84ee4b609f8273d7ae56600c3fb3cbe␟4946554391652567902: Action `;
    } let i18n_59; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS___60 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_59 = MSG_EXTERNAL_1628382286062172232$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_TEST_SELECT_V2_TEST_EXAMPLE_COMPONENT_TS___60;
    }
    else {
        i18n_59 = $localize `:␟bbffadc040d79a90f05c750b360e43a0cadce635␟1628382286062172232:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } return [["tabindex", "-1", 1, "select-test-focus-drop"], [1, "row", "mb-3", "justify-content-center"], [1, "row", "mb-3"], [1, "col"], ["id", "error-state", "placeholder", i18n_1, 3, "isInErrorState", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["caption", i18n_3, "hint", i18n_5, "info", "text", 3, "control"], ["placeholder", i18n_7, "id", "reactive-form", "formControlName", "select"], [4, "ngFor", "ngForOf"], ["for", "required"], i18n_9, ["placeholder", i18n_11, "id", "basic"], ["placeholder", "Select Item", "id", "display-value-mw200", 3, "displayValueTemplate"], ["placeholder", i18n_13, "id", "display-value", 3, "displayValueTemplate"], [3, "value", "isDisabled", 4, "ngFor", "ngForOf"], ["placeholder", i18n_15, "id", "grouped", 3, "displayValueTemplate"], [1, "row", "mb-3", "align-items-center"], ["placeholder", i18n_17, 1, "d-inline-flex", "mr-3"], ["placeholder", i18n_19, 1, "d-inline-flex"], ["placeholder", i18n_21, "id", "overlay-styles", 3, "formControl", "overlayConfig"], ["placeholder", i18n_23, "id", "disabled", 3, "isDisabled"], ["id", "dialog-btn", 3, "click"], i18n_25, ["placeholder", i18n_27, "id", "custom-control", 3, "manualDropdownControl"], ["custom_control", ""], [1, "row", "m-auto", "align-items-center"], ["id", "show", "type", "button", 1, "mt-2", 3, "click"], ["show", ""], ["id", "hide", "type", "button", 1, "mt-2", 3, "click"], ["hide", ""], ["id", "toggle", "type", "button", 1, "mt-2", 3, "click"], ["toggle", ""], ["id", "switch", 3, "value", "valueChange"], i18n_29, ["temp", ""], ["iconsOnly", ""], ["displayValueTemplate", ""], ["content", ""], ["empty", ""], [3, "value"], i18n_31, i18n_33, i18n_35, [3, "icon"], [3, "value", "isDisabled"], i18n_37, [1, "nui-select-v2-option-group--header"], ["size", "extra-small", 4, "ngIf"], ["size", "extra-small"], i18n_39, i18n_41, i18n_43, i18n_45, i18n_47, [1, "nui-select-v2__value"], ["class", "d-flex align-items-center nui-select-v2__value-content", 4, "ngIf", "ngIfElse"], ["icon", "caret-down"], [1, "d-flex", "align-items-center", "nui-select-v2__value-content"], [1, "mr-2", 3, "icon"], ["title", i18n_49, 3, "closed"], [1, "dialog-body"], ["placeholder", i18n_51, "id", "inside-dialog"], i18n_53, ["nui-button", "", "type", "button", 3, "click"], i18n_55, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_57, i18n_59, [1, "nui-select-v2__placeholder"]]; }, template: function SelectV2TestExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Select V2 Testing Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Error State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-select-v2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectV2TestExampleComponent_nui_select_v2_option_9_Template, 2, 2, "nui-select-v2-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reactive form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-select-v2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SelectV2TestExampleComponent_ng_container_16_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-validation-message", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-select-v2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SelectV2TestExampleComponent_nui_select_v2_option_24_Template, 2, 2, "nui-select-v2-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Display value (max-width = 200px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-select-v2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SelectV2TestExampleComponent_nui_select_v2_option_30_Template, 3, 2, "nui-select-v2-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Display value (no width rescrictions)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nui-select-v2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SelectV2TestExampleComponent_nui_select_v2_option_35_Template, 3, 4, "nui-select-v2-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Grouped items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-select-v2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SelectV2TestExampleComponent_ng_container_40_Template, 6, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nui-select-v2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SelectV2TestExampleComponent_ng_container_48_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi. Vestibulum rhoncus est pellentesque elit ullamcorper. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nui-select-v2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SelectV2TestExampleComponent_ng_container_51_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\nAt erat pellentesque adipiscing commodo. Justo donec enim diam vulputate. Libero volutpat sed cras ornare arcu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Custom overlay styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nui-select-v2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SelectV2TestExampleComponent_ng_container_57_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nui-select-v2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SelectV2TestExampleComponent_nui_select_v2_option_62_Template, 2, 2, "nui-select-v2-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectV2TestExampleComponent_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](93); return ctx.open(_r21); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](66, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Custom control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-select-v2", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SelectV2TestExampleComponent_nui_select_v2_option_73_Template, 2, 2, "nui-select-v2-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectV2TestExampleComponent_Template_button_click_75_listener($event) { return ctx.showList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectV2TestExampleComponent_Template_button_click_78_listener($event) { return ctx.hideList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectV2TestExampleComponent_Template_button_click_81_listener($event) { return ctx.toggleList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nui-switch", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SelectV2TestExampleComponent_Template_nui_switch_valueChange_84_listener($event) { return ctx.handleClicksOutside = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](85, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, SelectV2TestExampleComponent_ng_template_86_Template, 3, 4, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, SelectV2TestExampleComponent_ng_template_88_Template, 3, 4, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, SelectV2TestExampleComponent_ng_template_90_Template, 3, 4, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, SelectV2TestExampleComponent_ng_template_92_Template, 11, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SelectV2TestExampleComponent_ng_template_94_Template, 2, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInErrorState", ctx.isInErrorState())("formControl", ctx.selectControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fancyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.fancyForm.controls["select"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", 200, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayValueTemplate", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsWithIconsOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayValueTemplate", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsDisplayValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayValueTemplate", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groupedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.selectControl)("overlayConfig", ctx.customStylesOverlayConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDisabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("manualDropdownControl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.handleClicksOutside);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_5__["SelectV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_7__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__["ValidationMessageComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_9__["SwitchComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_10__["SelectV2OptionComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _src_lib_select_v2_option_group_select_v2_option_group_component__WEBPACK_IMPORTED_MODULE_12__["SelectV2OptionGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_13__["DividerComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_14__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_15__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_16__["ButtonComponent"]], styles: [".select-test-focus-drop {\n  height: 1px;\n  width: 1px;\n}\n.custom-select-styles.nui-overlay-panel .nui-overlay {\n  height: 200px;\n  background-color: deepskyblue;\n  border-radius: 5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC12Mi10ZXN0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUE7RUFFUSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQURSIiwiZmlsZSI6InNlbGVjdC12Mi10ZXN0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LXRlc3QtZm9jdXMtZHJvcCB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbn1cblxuLmN1c3RvbS1zZWxlY3Qtc3R5bGVzLm51aS1vdmVybGF5LXBhbmVsIHtcbiAgICAubnVpLW92ZXJsYXkge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkZWVwc2t5Ymx1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "eoDd":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-custom-control/select-v2-custom-control.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SelectV2CustomControlExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2CustomControlExampleComponent", function() { return SelectV2CustomControlExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");







function SelectV2CustomControlExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class SelectV2CustomControlExampleComponent {
    constructor() {
        this.items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);
        this.handleClicksOutside = false;
    }
    ngAfterViewInit() {
        this.select.clickOutsideDropdown.subscribe(() => {
            if (this.handleClicksOutside) {
                this.select.hideDropdown();
            }
        });
    }
    showList(event) {
        event.stopPropagation();
        this.select.showDropdown();
        this.select.inputElement.nativeElement.focus();
    }
    hideList(event) {
        event.stopPropagation();
        this.select.hideDropdown();
    }
    toggleList(event) {
        event.stopPropagation();
        this.select.toggleDropdown();
        this.select.inputElement.nativeElement.focus();
    }
}
SelectV2CustomControlExampleComponent.ɵfac = function SelectV2CustomControlExampleComponent_Factory(t) { return new (t || SelectV2CustomControlExampleComponent)(); };
SelectV2CustomControlExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2CustomControlExampleComponent, selectors: [["nui-select-v2-custom-control-example"]], viewQuery: function SelectV2CustomControlExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectV2Component"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, hostAttrs: [1, "select-container", "d-flex", "justify-content-between"], decls: 12, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOM_CONTROL_SELECT_V2_CUSTOM_CONTROL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOM_CONTROL_SELECT_V2_CUSTOM_CONTROL_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7190911341416824783$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOM_CONTROL_SELECT_V2_CUSTOM_CONTROL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Close on focus-out ");
        i18n_2 = MSG_EXTERNAL_7190911341416824783$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOM_CONTROL_SELECT_V2_CUSTOM_CONTROL_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟5a845ece889b921123b84c73a01faa22aa7a0eac␟7190911341416824783: Close on focus-out `;
    } return [["placeholder", i18n_0, 1, "w-25", 3, "manualDropdownControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml-4", "d-flex", "w-75"], ["nui-button", "", "type", "button", 1, "mr-3", 3, "click"], [1, "d-flex", "align-items-center"], [3, "value", "valueChange"], i18n_2, [3, "value"]]; }, template: function SelectV2CustomControlExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectV2CustomControlExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2CustomControlExampleComponent_Template_button_click_3_listener($event) { return ctx.showList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Show");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2CustomControlExampleComponent_Template_button_click_5_listener($event) { return ctx.hideList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectV2CustomControlExampleComponent_Template_button_click_7_listener($event) { return ctx.toggleList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nui-switch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SelectV2CustomControlExampleComponent_Template_nui_switch_valueChange_10_listener($event) { return ctx.handleClicksOutside = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("manualDropdownControl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.handleClicksOutside);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["SwitchComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "fEfU":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-color-picker/select-v2-color-picker.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Since we need the select input to show only the current color we need to use displayValueTemplate input and a corresponding template.\n     Don't forget to disable the width synchronization, so that the overlay does not follow the toggle reference's width -->\n<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n               class=\"color-picker-select\"\n               [overlayConfig]=\"overlayConfig\"\n               [syncWidth]='false'\n               [displayValueTemplate]=\"colorSelectTemplate\"\n               >\n               <!-- The following block (along with the corresponding ng-template below) builds the markup of the color picker boxes inside the overlay. -->\n               <div class=\"color-picker-container\">\n                   <div class=\"d-inline-flex flex-wrap box\" *ngFor=\"let item of backgroundColors\">\n                        <nui-select-v2-option [value]=\"item\"\n                                              [displayValueContext]=\"item\"\n                                              class=\"w-100 h-100 reset-box-sizes\"\n                                              #option\n                                              >\n                            <!-- This block defines the overlay color boxes markup -->\n                            <div class=\"color-picker-option\"\n                                 [class.color-picker-option--selected]=\"option?.selected\">\n                                <div class=\"color-picker-option__color-box\" [style.background-color]=\"item\">\n                                        <!-- Notice here how 'mix-blend-mode' is used conditionally. Since the glyph sign is always white and is being set as a background image, \n                                            we need a way to make it visible on white background. Since white background is default for the light theme, we bind to that and\n                                            apply the property to mix and differ two backgrounds - the glyph and the underlaying box color background -->\n                                    <div class=\"color-picker-option__glyph\"\n                                         [style.mix-blend-mode]=\"item === defaultColor ? 'difference': null\"\n                                         *ngIf=\"option?.selected\"\n                                    ></div>\n                                </div>\n                            </div>\n                        </nui-select-v2-option>\n                   </div>\n               </div>\n</nui-select-v2>\n\n<!-- This template defines the input markup -->\n<ng-template #colorSelectTemplate let-item let-open=\"open\">\n    <div class=\"color-picker-input\">\n        <div class=\"color-picker-input__box\">\n            <div class=\"color-picker-input__color-box\" [style.background-color]=\"item\"></div>\n        </div>\n        <div class=\"color-picker-input__toggle\">\n            <nui-icon  [style.transform]=\"open ? 'rotate(180deg)' : ''\" icon=\"caret-down\"></nui-icon>\n        </div>\n    </div>\n</ng-template>");

/***/ }),

/***/ "gp4e":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-customize-options/select-v2-customize-options.example.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\n\ninterface IExampleItem {\n    id: string;\n    name: string;\n    icon: string;\n}\n\n@Component({\n    selector: \"nui-select-v2-customize-options-example\",\n    templateUrl: \"select-v2-customize-options.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2CustomizeOptionsExampleComponent {\n    public icons: any[] = [\"check\", \"email\", \"execute\"];\n    public items: IExampleItem[] = Array.from({ length: 100 }).map((_, i) =>\n        ({\n            id: `value-${i}`,\n            name: $localize `Item ${i}`,\n            icon: this.getRandomIcon(),\n        }));\n    public selectControl = new FormControl();\n\n    private getRandomIcon() {\n        return this.icons[Math.round(Math.random() * 2)];\n    }\n}\n");

/***/ }),

/***/ "h3Y2":
/*!*************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-customize-options/select-v2-customize-options.example.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SelectV2CustomizeOptionsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2CustomizeOptionsExampleComponent", function() { return SelectV2CustomizeOptionsExampleComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");







function SelectV2CustomizeOptionsExampleComponent_nui_select_v2_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r4.id)("displayValueContext", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Name is ", item_r4.name, " and icon is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r4.icon);
} }
function SelectV2CustomizeOptionsExampleComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", item_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function SelectV2CustomizeOptionsExampleComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Select Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SelectV2CustomizeOptionsExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectV2CustomizeOptionsExampleComponent_ng_template_3_div_1_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectV2CustomizeOptionsExampleComponent_ng_template_3_ng_template_3_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", _r0.isDropdownOpen ? "rotate(180deg)" : "");
} }
class SelectV2CustomizeOptionsExampleComponent {
    constructor() {
        this.icons = ["check", "email", "execute"];
        this.items = Array.from({ length: 100 }).map((_, i) => ({
            id: `value-${i}`,
            name: $localize `Item ${i}`,
            icon: this.getRandomIcon(),
        }));
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    getRandomIcon() {
        return this.icons[Math.round(Math.random() * 2)];
    }
}
SelectV2CustomizeOptionsExampleComponent.ɵfac = function SelectV2CustomizeOptionsExampleComponent_Factory(t) { return new (t || SelectV2CustomizeOptionsExampleComponent)(); };
SelectV2CustomizeOptionsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2CustomizeOptionsExampleComponent, selectors: [["nui-select-v2-customize-options-example"]], hostAttrs: [1, "select-container"], decls: 5, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOMIZE_OPTIONS_SELECT_V2_CUSTOMIZE_OPTIONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_CUSTOMIZE_OPTIONS_SELECT_V2_CUSTOMIZE_OPTIONS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 3, "formControl", "displayValueTemplate"], ["select", ""], [3, "value", "displayValueContext", 4, "ngFor", "ngForOf"], ["customTemplate", ""], [3, "value", "displayValueContext"], [3, "icon"], [1, "nui-select-v2__value"], ["class", "d-flex align-items-center nui-select-v2__value-content", 4, "ngIf", "ngIfElse"], ["icon", "caret-down"], ["empty", ""], [1, "d-flex", "align-items-center", "nui-select-v2__value-content"], [1, "mr-2", 3, "icon"], [1, "nui-select-v2__placeholder"]]; }, template: function SelectV2CustomizeOptionsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectV2CustomizeOptionsExampleComponent_nui_select_v2_option_2_Template, 3, 4, "nui-select-v2-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectV2CustomizeOptionsExampleComponent_ng_template_3_Template, 5, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectControl)("displayValueTemplate", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "hTve":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-overlay-config/select-v2-overlay-config.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder [overlayConfig]=\"overlayConfig\" [syncWidth]=\"false\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{ item }}</nui-select-v2-option>\n</nui-select-v2>\n");

/***/ }),

/***/ "hlfU":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-error/select-v2-error.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 [isInErrorState]=\"error\"\n    placeholder=\"Select Item\" i18n-placeholder\n    class=\"w-50 d-inline-flex\">\n    <ng-container *ngFor=\"let item of items\">\n        <nui-select-v2-option [value]=\"item\">\n            {{item}}\n        </nui-select-v2-option>\n    </ng-container>\n</nui-select-v2>\n\n<nui-switch class=\"d-inline-flex\"\n    style=\"padding-left: 15px;\"\n    [(value)]=\"error\" i18n>\n    Toggle error state\n</nui-switch>\n");

/***/ }),

/***/ "hoVv":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-overlay-config/select-v2-overlay-config.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SelectV2OverlayConfigExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2OverlayConfigExampleComponent", function() { return SelectV2OverlayConfigExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");





function SelectV2OverlayConfigExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
} }
class SelectV2OverlayConfigExampleComponent {
    constructor() {
        this.overlayConfig = {
            width: 300,
            height: 200,
            panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "overlay-config-demo-custom-class"],
        };
        this.items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);
    }
}
SelectV2OverlayConfigExampleComponent.ɵfac = function SelectV2OverlayConfigExampleComponent_Factory(t) { return new (t || SelectV2OverlayConfigExampleComponent)(); };
SelectV2OverlayConfigExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2OverlayConfigExampleComponent, selectors: [["nui-select-v2-overlay-config-example"]], hostAttrs: [1, "select-container"], decls: 2, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OVERLAY_CONFIG_SELECT_V2_OVERLAY_CONFIG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_OVERLAY_CONFIG_SELECT_V2_OVERLAY_CONFIG_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 3, "overlayConfig", "syncWidth"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]]; }, template: function SelectV2OverlayConfigExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectV2OverlayConfigExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlayConfig", ctx.overlayConfig)("syncWidth", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "hyTk":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-options-changed/select-v2-options-changed.example.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Value: {{select.value}}</p>\n<p>FormControl.value: {{selectControl.value}}</p>\n\n<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n    [formControl]=\"selectControl\"\n    #select>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setItems(0)\">Set items: 1, 2, 3, 4</button>\n<button nui-button type=\"button\" displayStyle=\"action\" i18n (click)=\"setItems(1)\">Set items: 3, 4, 5, 6</button>\n");

/***/ }),

/***/ "jIGl":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-getting-value/select-v2-getting-value.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, Component, ViewChild } from \"@angular/core\";\nimport { SelectV2Component } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil, tap } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-select-v2-getting-value-example\",\n    templateUrl: \"select-v2-getting-value.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2GettingValueExampleComponent implements AfterViewInit {\n    public items = Array.from({ length : 50 }).map((_, i) => $localize `Item ${i}`);\n    public selectValueSelectedValue: string;\n\n    @ViewChild(\"selectValueSelectedExample\") private selectValueSelectedExample: SelectV2Component;\n    private destroy$: Subject<any> = new Subject<any>();\n\n    ngAfterViewInit(): void {\n        this.selectValueSelectedExample.valueSelected.pipe(\n            tap(value => this.selectValueSelectedValue = value as string),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n}\n");

/***/ }),

/***/ "kGRe":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-disabled/select-v2-disabled.example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 [isDisabled]=\"isSelectDisabled\"\n    placeholder=\"Select Item\" i18n-placeholder\n    class=\"w-50 d-inline-flex\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" [isDisabled]=\"item.disabled\">\n        {{item.name}}\n    </nui-select-v2-option>\n</nui-select-v2>\n\n<nui-switch class=\"d-inline-flex\"\n    style=\"padding-left: 15px;\"\n    [(value)]=\"isSelectDisabled\" i18n>\n    Toggle disabling\n</nui-switch>\n\n");

/***/ }),

/***/ "m4Yc":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-virtual-scroll/select-v2-virtual-scroll.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n               [formControl]=\"selectControl\">\n    <cdk-virtual-scroll-viewport itemSize=\"30\"\n                                 [minBufferPx]=\"containerHeight\"\n                                 [maxBufferPx]=\"containerHeight * 2\"\n                                 [style.height.px]=\"containerHeight\">\n\n        <div *cdkVirtualFor=\"let item of items; index as i\">\n            <nui-select-v2-option [value]=\"item\" [index]=\"i\" class=\"d-flex align-items-center\">\n                {{item}}\n            </nui-select-v2-option>\n        </div>\n\n    </cdk-virtual-scroll-viewport>\n</nui-select-v2>\n");

/***/ }),

/***/ "o9Un":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-inline/select-v2-inline.example.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-select-v2 class=\"d-inline-flex\" placeholder=\"Select Item\" i18n-placeholder style=\"margin-right: 15px;\">\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}} </nui-select-v2-option>\n</nui-select-v2>\n\n<nui-select-v2 class=\"d-inline-flex\" placeholder=\"Select Item\" i18n-placeholder>\n    <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n</nui-select-v2>\n");

/***/ }),

/***/ "oOWr":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-docs/select-v2-docs.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>The <code>&lt;nui-select-v2&gt;</code> component allows users to select item(s) from a list.</p>\n<p>\n    Select component is a perfect fit for simple cases or if your options list is small enough.\n    Otherwise consider using <code><a href=\"../components/ComboboxV2Component.html\" target=\"_blank\">Combobox Component</a></code>.\n</p>\n<p>However, it's recommended to use Select component in case you need input customization.</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiSelectV2Module</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>To use <code>&lt;nui-select-v2&gt;</code> wrap each option within a <code>&lt;select-v2-option&gt;</code> instance.\n    <code>&lt;select-v2-option&gt;</code> has the <code>value</code> input so that it's <strong>unique</strong> for each\n    option.</p>\n\n<p>\n    You can use a <code>string</code> or an <code>object</code> as a\n    <code>value</code>. In some cases, e.g. if using <em>Grouped items</em>, it's recommended\n    to use <code>object</code> and provide some id's, because you can have the same option title\n    in the different groups and it's necessary to distinguish them somehow.\n    Also, using <code>string</code> may cause <code>i18n</code> issues as far as the same value is used for model and displaying on the view.\n</p>\n\n<p>Wrap all of the options inside a <code>&lt;nui-select-v2&gt;</code> instance as a content\n    projection for the dropdown.</p>\n\n<p>You can put pretty much anything inside a\n    <code>&lt;nui-select-v2&gt;</code> dropdown. For example, if you need the dropdown to display some\n    info text, you can project <em>standard HTML</em> into the dropdown and it will be shown as <em>standard HTML</em>\n    rather than a select option.</p>\n\n<nui-example-wrapper filenamePrefix=\"select-v2-basic\" exampleTitle=\"Basic Usage\">\n    <nui-select-v2-basic-example></nui-select-v2-basic-example>\n</nui-example-wrapper>\n\n<h2>Getting and setting the select value</h2>\n\n<h3>Getting a Value</h3>\n<p>You can use the following ways to get a value from a select component:</p>\n<ul>\n    <li>Access the <code>value</code> property on the component</li>\n    <li>Bind to the <code>valueSelected</code> output - emits the selected value</li>\n</ul>\n\n<nui-example-wrapper filenamePrefix=\"select-v2-getting-value\" exampleTitle=\"Getting value\">\n    <nui-select-v2-getting-value-example></nui-select-v2-getting-value-example>\n</nui-example-wrapper>\n\n<h3>Setting a Value</h3>\n<p>\n    To set a value for a select, you can use either the <code>value</code> input or\n    the reactive form control\n    <code><a href=\"https://angular.io/guide/reactive-forms#replacing-a-form-control-value\" target=\"_blank\">setValue</a></code>\n    method, to provide an option from the list.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"select-v2-setting-value\" exampleTitle=\"Setting value\">\n    <nui-select-v2-setting-value-example></nui-select-v2-setting-value-example>\n</nui-example-wrapper>\n\n<h2>Customize Options</h2>\n<p>\n    It's possible to use a custom template for the <code>option</code>s in the list. You can use pretty\n    much any layout for the options by putting the template inside a\n    <code>&lt;select-v2-option&gt;</code> instance.\n</p>\n<p>\n    Also, it's possible to use custom template instead of default select input.\n    For that <code>[displayValueTemplate]</code> input is used.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <p><strong>Note:</strong> In this example <code>[displayValueContext]</code> property of <code>select-v2-option</code> element is used to pass a context to custom input template.</p>\n    All you put in <code>[displayValueContext]</code> input will be passed to custom template <code>#customTemplate</code> as a context in the example.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"select-v2-customize-options\" exampleTitle=\"Customize Options\">\n    <nui-select-v2-customize-options-example></nui-select-v2-customize-options-example>\n</nui-example-wrapper>\n\n<h2>Custom Content and Styling</h2>\n<p>\n    You can use custom content for either <code>option</code> or select input or dropdown content. <br/>\n    To use custom content on select input use <code>[displayValueContext]</code> input which takes <code>templateRef</code> for the desired input. <br/>\n    Note that you can use <code>[displayValueContext]</code> input on <code>nui-select-v2-option</code> option element to pass a context for custom input.<br/>\n    To use some HTML in the dropdown just pass it as a content projection to <code>nui-select-v2</code> together with options.\n</p>\n<p>\n    For styling the elements you can just apply desired styles to an element you want to change visual representation.<br/>\n    In this example, <code>.less</code> styles are used, you can check styles in the code inspector.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-v2-custom-content\" exampleTitle=\"Custom Content\">\n    <nui-select-v2-custom-content-example></nui-select-v2-custom-content-example>\n</nui-example-wrapper>\n\n<h2>Grouped Options</h2>\n<p>\n    If you want to group options you can wrap them in a <code>&lt;nui-select-v2-option-group&gt;</code>\n    instance. You can also provide a header for a group (optionally).\n</p>\n<p>\n    To use default styles for a header (as in the example below), apply\n    <code>.nui-select-v2-option-group--header</code> class to the header.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> Technically you can use any template instead of, or in addition to, the header.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"select-v2-grouped-items\" exampleTitle=\"Grouped Options\">\n    <nui-select-v2-grouped-items-example></nui-select-v2-grouped-items-example>\n</nui-example-wrapper>\n\n<h2>Using With Reactive Forms</h2>\n<p>\n    To use <code>nui-select-v2</code> with reactive forms, create a <code>FormControl</code> that\n    represents the form model. Then, bind <code>nui-select-v2</code> to this form element.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> It's recommended to use the\n    <code><a href=\"../components/FormFieldComponent.html\" target=\"_blank\">&lt;nui-form-field&gt;</a></code>\n    component as a wrapper if you are going to use validation, captions, labels, etc.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"select-v2-reactive-form-field\" exampleTitle=\"Reactive form field\">\n    <nui-select-v2-reactive-form-field-example></nui-select-v2-reactive-form-field-example>\n</nui-example-wrapper>\n\n<h2>Virtual Scroll</h2>\n<p>\n    The options dropdown can use virtual scroll. For that, wrap the options list in a\n    <code><a href=\"https://material.angular.io/cdk/scrolling/overview#virtual-scrolling\" target=\"_blank\">cdk-virtual-scroll-viewport</a></code>.\n    You can adjust virtual scroll container to your needs according to\n    <a href=\"https://material.angular.io/cdk/scrolling/api\">Virtual Scroll API</a>.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <p><strong>Warning:</strong> All the items inside a dropdown <strong>must</strong> be of the same height!</p>\n    You should set <code>itemSize</code> property of <code>cdk-virtual-scroll-viewport</code> to the <strong>exact</strong> value of an option height. Otherwise, some features may not work.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"select-v2-virtual-scroll\" exampleTitle=\"Virtual Scroll\">\n    <nui-select-v2-virtual-scroll-example></nui-select-v2-virtual-scroll-example>\n</nui-example-wrapper>\n\n<h2>Disabled Mode</h2>\n<p>\n    It is possible to disable either the entire <code>select-v2</code> or one or more\n    <code>select-v2-option</code>s. To do that, set the <code>isDisabled</code> input to true on the\n    appropriate component.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-v2-disabled\" exampleTitle=\"Disabled Mode\">\n    <nui-select-v2-disabled-example></nui-select-v2-disabled-example>\n</nui-example-wrapper>\n\n<h2>Error State</h2>\n<p>\n    The <code>isInErrorState</code> input is used to set/change the visual validation state of the\n    component. This can be used in custom situations in which you need to manually indicate that the\n    component is in error state.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> If you want to use a select as a form field with validation, consider using\n    the <code><a href=\"../components/FormFieldComponent.html\" target=\"_blank\">nui-form-field</a></code>\n    component. For information about that, see the <strong>Using With Reactive Forms</strong> section.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"select-v2-error\" exampleTitle=\"Error state\">\n    <nui-select-v2-error-example></nui-select-v2-error-example>\n</nui-example-wrapper>\n\n<h2>Styling</h2>\n<p>\n    To style the select's dropdown simply use <code>overlayConfig</code> input and fill in its <code>panelClass</code> property with the global CSS class with\n    the desired styles.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-v2-styling\" exampleTitle=\"Styling\">\n    <nui-select-v2-styling-example></nui-select-v2-styling-example>\n</nui-example-wrapper>\n\n<h2>Inline Display Mode</h2>\n<p>\n    To put a select in inline display mode, add necessary styles to the component. For example, you can add bootstrap <code>d-inline-flex</code> style.\n</p>\n<nui-example-wrapper filenamePrefix=\"select-v2-inline\" exampleTitle=\"Inline\">\n    <nui-select-v2-inline-example></nui-select-v2-inline-example>\n</nui-example-wrapper>\n\n<h2>Overlay configuration</h2>\n<p>\n    To adjust <code>SelectComponent</code>'s popup overlay properties, such as <code>width</code>, <code>height</code>\n    or other, set the <code>overlayConfig</code> input in accordance with Angular CDK Overlay Config\n    <a href=\"https://material.angular.io/cdk/overlay/api#OverlayConfig\">interface</a><br>\n    <mark>NOTE: in case you need to set the <code>width</code> using the overlay config make sure to disable the\n    automatic width synchronization, which is enabled by default. This can be done by setting the <code>syncWidth</code>\n    input to <code>false</code></mark>\n    <nui-message type=\"info\" [allowDismiss]=\"false\">\n        <strong>Note:</strong> Select-v2 and Combobox-v2 contain default <code>with-popup-styles</code> (you can import it <code>POPUP_STYLES_CLASS</code> from <code>@nova-ui/bits</code>) class which styles the popup according to the\n        Nova Design Language. Setting custom styles through the global classes using the `panelClass` will override the default styles of the overlay.\n        If you want to preserve default overlay styles please consider adding the <code>with-popup-styles</code> class when setting styles using the <code>overlayConfig</code>.\n        Please see the example below.\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"select-v2-overlay-config\" exampleTitle=\"Overlay configuration\">\n    <nui-select-v2-overlay-config-example></nui-select-v2-overlay-config-example>\n</nui-example-wrapper>\n\n<h2>Custom Dropdown Control</h2>\n<p>\n    The <code>manualDropdownControl</code> input gives you\n    total control over opening and closing the dropdown. When set to <code>true</code>, the default behavior of the\n    dropdown is blocked, and you can provide your own behavior.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> The <code>clickOutsideDropdown</code> output can be used to close the dropdown\n    manually on clicks outside both the host element and the dropdown.\n</nui-message>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> In order for keyboard navigation work as you open the dropdown you have to manually set focus to the <code>inputElement</code> in case you are triggering the dropdown outside the host element.\n    For that, you can do <code>select.inputElement.nativeElement.focus()</code>\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"select-v2-custom-control\" exampleTitle=\"Custom Control\">\n    <nui-select-v2-custom-control-example></nui-select-v2-custom-control-example>\n</nui-example-wrapper>\n\n<h2>Color Picker</h2>\n<p>\n    <code>nui-select-v2</code> can be customized in a number of ways, including such a popular use case like color picker. The example below is\n    purely based on <code>select-v2</code> and <code>select-v2-option</code> components, and only requires adding some css. Check the example below.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"select-v2-color-picker\" exampleTitle=\"Color Picker\">\n    <nui-select-v2-color-picker></nui-select-v2-color-picker>\n</nui-example-wrapper>\n\n<h2>Keyboard interaction</h2>\n<p><code>&lt;nui-select-v2&gt;</code> comes with built-in accessibility features:</p>\n<ul>\n    <li><code>TAB/Shift+TAB</code> for focusing the component.</li>\n    <li><code>ARROW UP/ARROW DOWN</code> for navigation inside an option list.</li>\n    <li><code>PAGE UP/PAGE DOWN</code> for navigation inside the list to top/bottom.</li>\n    <li><code>ENTER</code> to select an option.</li>\n    <li><code>ESC</code> to close the dropdown.</li>\n</ul>\n");

/***/ }),

/***/ "ozD1":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-grouped-items/select-v2-grouped-items.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { ISelectGroup } from \"@nova-ui/bits\";\n\nconst getRandomNumberTo = (max: number) => Math.floor(Math.random() * Math.floor(max) + 1);\n\n@Component({\n    selector: \"nui-select-v2-grouped-items-example\",\n    templateUrl: \"select-v2-grouped-items.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2GroupedItemsExampleComponent {\n    public items: ISelectGroup[] = Array.from({ length: 10 }).map((_, i) => ({\n        header: $localize `Header line ${i + 1}`,\n        items: Array.from({ length: getRandomNumberTo(5) }).map((v, n) => ({\n            id: `value-${i}`,\n            name: $localize `Item ${n + 1}`,\n        })),\n    }));\n}\n");

/***/ }),

/***/ "pge4":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-reactive-form-field/select-v2-reactive-form-field.example.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-select-v2-reactive-form-field-example\",\n    templateUrl: \"./select-v2-reactive-form-field.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2ReactiveFormFieldExampleComponent implements OnInit {\n    public items = Array.from({ length: 100 }).map((_, i) => $localize`Item ${i}`);\n    public fancyForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) { }\n\n    ngOnInit(): void {\n        this.fancyForm = this.formBuilder.group({\n            select: this.formBuilder.control(\"\", Validators.required),\n        });\n    }\n}\n");

/***/ }),

/***/ "qAK4":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-test/select-v2-test.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Focus drop is an invisible item which can be used to drop the focus state to the start of the page if needed -->\n<div class=\"select-test-focus-drop\" tabindex=\"-1\"></div>\n\n<div class=\"row mb-3 justify-content-center\">\n    <h1>\n        Select V2 Testing Page\n    </h1>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Error State</h4>\n        <nui-select-v2 [isInErrorState]=\"isInErrorState()\"\n                       id=\"error-state\"\n                       placeholder=\"Select Item\"\n                       i18n-placeholder\n                       [formControl]=\"selectControl\">\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" i18n>{{item}}</nui-select-v2-option>\n        </nui-select-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Reactive form</h4>\n        <form [formGroup]=\"fancyForm\">\n            <nui-form-field caption=\"Select\" i18n-caption\n                            hint=\"Some pretty long text with hint\" i18n-hint\n                            info=\"text\"\n                            [control]=\"fancyForm.controls['select']\">\n                <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n                               id=\"reactive-form\"\n                               formControlName=\"select\">\n                    <ng-container *ngFor=\"let item of items\">\n                        <nui-select-v2-option [value]=\"item\" i18n>\n                            {{item}}\n                        </nui-select-v2-option>\n                    </ng-container>\n                </nui-select-v2>\n                <nui-validation-message for=\"required\" i18n>\n                    This field is required\n                </nui-validation-message>\n            </nui-form-field>\n        </form>\n    </div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Basic</h4>\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder id=\"basic\">\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" i18n>{{item}}</nui-select-v2-option>\n        </nui-select-v2>\n    </div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <h4>Display value (max-width = 200px)</h4>\n        <nui-select-v2 placeholder=\"Select Item\"\n                       [displayValueTemplate]=\"iconsOnly\"\n                       [style.max-width.px]=\"200\"\n                       id=\"display-value-mw200\"\n                        >\n            <nui-select-v2-option *ngFor=\"let item of itemsWithIconsOnly\" [value]=\"item\">\n                    String can't get long, can it?:) <nui-icon [icon]=\"item.icon\"></nui-icon></nui-select-v2-option>\n            </nui-select-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Display value (no width rescrictions)</h4>\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n                       [displayValueTemplate]=\"temp\"\n                       id=\"display-value\"\n                        >\n            <nui-select-v2-option *ngFor=\"let item of itemsDisplayValue\"\n                                  [value]=\"item\"\n                                  i18n\n                                  [isDisabled]=\"item.disabled\">\n                                  Name is {{item.name}} and icon is <nui-icon [icon]=\"item.icon\"></nui-icon></nui-select-v2-option>\n        </nui-select-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Grouped items</h4>\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n                       [displayValueTemplate]=\"displayValueTemplate\"\n                       id=\"grouped\">\n            <ng-container *ngFor=\"let itemGroup of groupedItems; let last = last\">\n                <nui-select-v2-option-group>\n                    <span class=\"nui-select-v2-option-group--header\">{{itemGroup.header}}</span>\n                    <nui-select-v2-option *ngFor=\"let item of itemGroup.items\"\n                        [value]=\"item\">\n                        {{item.name}}\n                    </nui-select-v2-option>\n                    <nui-divider *ngIf=\"!last\" size=\"extra-small\"></nui-divider>\n                </nui-select-v2-option-group>\n            </ng-container>\n        </nui-select-v2>\n    </div>\n</div>\n<div class=\"row mb-3 align-items-center\">\n    <div class=\"col\">\n        <h4>Inline</h4>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <nui-select-v2 class=\"d-inline-flex mr-3\" placeholder=\"Select Item\" i18n-placeholder >\n                                                                        <ng-container *ngFor=\"let item of items\">\n                                                                            <nui-select-v2-option [value]=\"item\" i18n>\n                                                                                {{item}}\n                                                                            </nui-select-v2-option>\n                                                                        </ng-container>\n                                                                    </nui-select-v2>\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi. Vestibulum rhoncus est pellentesque elit ullamcorper. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. <nui-select-v2 class=\"d-inline-flex\" placeholder=\"Select Item\" i18n-placeholder>\n                            <ng-container *ngFor=\"let item of items\">\n                                <nui-select-v2-option [value]=\"item\" i18n>\n                                    {{item}}\n                                </nui-select-v2-option>\n                            </ng-container>\n                        </nui-select-v2>\nAt erat pellentesque adipiscing commodo. Justo donec enim diam vulputate. Libero volutpat sed cras ornare arcu.\n        </p>\n    </div>\n    <div class=\"col\">\n        <h4>Custom overlay styles</h4>\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n                       [formControl]=\"selectControl\"\n                       id=\"overlay-styles\"\n                       [overlayConfig]=\"customStylesOverlayConfig\">\n            <ng-container *ngFor=\"let item of items\">\n                <nui-select-v2-option [value]=\"item\" i18n>\n                    {{item}}\n                </nui-select-v2-option>\n            </ng-container>\n        </nui-select-v2>\n    </div>\n    <div class=\"col\">\n        <h4>Disabled</h4>\n        <nui-select-v2 [isDisabled]=\"true\"\n                       placeholder=\"Select Item\"\n                       i18n-placeholder\n                       id=\"disabled\"\n                       >\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" i18n>{{item}}</nui-select-v2-option>\n        </nui-select-v2>\n    </div>\n</div>\n<div class=\"row mb-3\">\n    <div class=\"col\">\n        <button id=\"dialog-btn\" (click)=\"open(content)\" i18n>Call dialog with select</button>\n    </div>\n    <div class=\"col\"></div>\n    <div class=\"col\">\n        <h4>Custom control</h4>\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n                       [manualDropdownControl]=\"true\"\n                       #custom_control\n                       id=\"custom-control\">\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" i18n>\n                {{item}}\n            </nui-select-v2-option>\n        </nui-select-v2>\n\n        <div class=\"row m-auto align-items-center\">\n            <button #show\n                    id=\"show\"\n                    type=\"button\"\n                    class=\"mt-2\"\n                    (click)=\"showList($event)\">Show</button>\n\n            <button #hide\n                    id=\"hide\"\n                    type=\"button\"\n                    class=\"mt-2\"\n                    (click)=\"hideList($event)\">Hide</button>\n\n            <button #toggle\n                    id=\"toggle\"\n                    type=\"button\"\n                    class=\"mt-2\"\n                    (click)=\"toggleList($event)\">Toggle</button>\n\n            <nui-switch [(value)]=\"handleClicksOutside\" i18n id=\"switch\">\n                Close on focus-out\n            </nui-switch>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #temp let-item let-open=\"open\">\n\n    <div class=\"nui-select-v2__value\">\n        <div *ngIf=\"item else empty\" class=\"d-flex align-items-center nui-select-v2__value-content\">\n            <nui-icon class=\"mr-2\" [icon]=\"item.icon\"></nui-icon> {{item.name}}\n        </div>\n\n        <nui-icon  [style.transform]=\"open ? 'rotate(180deg)' : ''\"\n            icon=\"caret-down\"></nui-icon>\n    </div>\n\n</ng-template>\n\n<ng-template #iconsOnly let-item let-open=\"open\">\n\n    <div class=\"nui-select-v2__value\">\n        <div *ngIf=\"item else empty\" class=\"d-flex align-items-center nui-select-v2__value-content\">\n            <nui-icon class=\"mr-2\" [icon]=\"item.icon\"></nui-icon> {{item.name}}\n        </div>\n\n        <nui-icon  [style.transform]=\"open ? 'rotate(180deg)' : ''\"\n            icon=\"caret-down\"></nui-icon>\n    </div>\n\n</ng-template>\n\n<ng-template #displayValueTemplate let-item let-open=\"open\">\n    <div class=\"nui-select-v2__value\">\n        <div *ngIf=\"item else empty\" class=\"d-flex align-items-center nui-select-v2__value-content\">\n            {{item.name}}\n        </div>\n\n        <nui-icon  [style.transform]=\"open ? 'rotate(180deg)' : ''\"\n            icon=\"caret-down\"></nui-icon>\n    </div>\n</ng-template>\n\n<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder id=\"inside-dialog\">\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\" i18n>{{item}}</nui-select-v2-option>\n        </nui-select-v2>\n        <p i18n>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n            Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n            Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n            Maecenas eget arcu ac ante sagittis eleifend vel ut purus.\n            Pellentesque sit amet semper ipsum, eu vulputate tortor. Aliquam vitae nisi augue.\n            Duis non erat sit amet sem venenatis accumsan at ullamcorper lorem. Morbi non turpis nibh.\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"close()\" i18n>\n            Cancel\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"close()\" i18n>\n            Action\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<ng-template #empty>\n    <span class=\"nui-select-v2__placeholder\">Select Item</span>\n</ng-template>\n");

/***/ }),

/***/ "sLIz":
/*!*****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-getting-value/select-v2-getting-value.example.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SelectV2GettingValueExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2GettingValueExampleComponent", function() { return SelectV2GettingValueExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");







const _c0 = ["selectValueSelectedExample"];
function SelectV2GettingValueExampleComponent_nui_select_v2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-select-v2-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4);
} }
function SelectV2GettingValueExampleComponent_nui_select_v2_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-select-v2-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5);
} }
class SelectV2GettingValueExampleComponent {
    constructor() {
        this.items = Array.from({ length: 50 }).map((_, i) => $localize `Item ${i}`);
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngAfterViewInit() {
        this.selectValueSelectedExample.valueSelected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => this.selectValueSelectedValue = value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
    }
}
SelectV2GettingValueExampleComponent.ɵfac = function SelectV2GettingValueExampleComponent_Factory(t) { return new (t || SelectV2GettingValueExampleComponent)(); };
SelectV2GettingValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SelectV2GettingValueExampleComponent, selectors: [["nui-select-v2-getting-value-example"]], viewQuery: function SelectV2GettingValueExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selectValueSelectedExample = _t.first);
    } }, hostAttrs: [1, "select-container"], decls: 19, vars: 4, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_GETTING_VALUE_SELECT_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Select Item");
        i18n_1 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_GETTING_VALUE_SELECT_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_GETTING_VALUE_SELECT_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Select Item");
        i18n_3 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_GETTING_VALUE_SELECT_V2_GETTING_VALUE_EXAMPLE_COMPONENT_TS_4;
    }
    else {
        i18n_3 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_1], ["selectValueExample", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "my-3"], ["placeholder", i18n_3], ["selectValueSelectedExample", ""], [3, "value"]]; }, template: function SelectV2GettingValueExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Accessing value using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nui-select-v2", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SelectV2GettingValueExampleComponent_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Accessing value using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "valueSelected");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " output");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nui-select-v2", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SelectV2GettingValueExampleComponent_nui_select_v2_option_16_Template, 2, 2, "nui-select-v2-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You selected: ", _r0.value, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You selected: ", ctx.selectValueSelectedValue, "");
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "sYsV":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-test/select-v2-test.example.component.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-test-focus-drop {\n    height: 1px;\n    width: 1px;\n}\n\n.custom-select-styles.nui-overlay-panel {\n    .nui-overlay {\n        height: 200px;\n        background-color: deepskyblue;\n        border-radius: 5%;\n    }\n}\n");

/***/ }),

/***/ "t3Xk":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-overlay-config/select-v2-overlay-config.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component } from \"@angular/core\";\nimport { OVERLAY_WITH_POPUP_STYLES_CLASS } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-select-v2-overlay-config-example\",\n    templateUrl: \"./select-v2-overlay-config.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2OverlayConfigExampleComponent {\n    public overlayConfig: OverlayConfig = {\n        width: 300,\n        height: 200,\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"overlay-config-demo-custom-class\"],\n    };\n\n    public items = Array.from({ length: 100 }).map((_, i) => $localize `Item ${i}`);\n}\n");

/***/ }),

/***/ "uXSP":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-styling/select-v2-styling.example.component.less ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// This is how the global styles look like\n\n.nui-overlay-styling-demo-custom-class {\n    border: 1px solid red;\n\n    .nui-overlay {\n        border: 2px red dashed;\n        padding: 10px;\n        background-color: antiquewhite;\n    }\n}\n");

/***/ }),

/***/ "vRmy":
/*!*******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-virtual-scroll/select-v2-virtual-scroll.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SelectV2VirtualScrollExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2VirtualScrollExampleComponent", function() { return SelectV2VirtualScrollExampleComponent; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");










function SelectV2VirtualScrollExampleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nui-select-v2-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r1)("index", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class SelectV2VirtualScrollExampleComponent {
    constructor() {
        this.icons = ["check", "email", "execute"];
        this.items = Array.from({ length: 100000 }).map((_, i) => $localize `Item ${i}`);
        this.selectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.containerHeight = 300;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.scrollOffset = 0;
    }
    handleClick(event) {
        if (this.viewport) {
            this.viewport.scrollToOffset(this.scrollOffset);
            this.viewport.checkViewportSize();
        }
    }
    ngOnInit() {
        this.selectControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(value => {
            console.log("Value from Select", value);
        });
    }
    ngAfterViewInit() {
        this.select.valueSelected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe((selectionText) => {
            this.scrollOffset = this.viewport.measureScrollOffset();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SelectV2VirtualScrollExampleComponent.ɵfac = function SelectV2VirtualScrollExampleComponent_Factory(t) { return new (t || SelectV2VirtualScrollExampleComponent)(); };
SelectV2VirtualScrollExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SelectV2VirtualScrollExampleComponent, selectors: [["nui-select-v2-virtual-scroll-example"]], viewQuery: function SelectV2VirtualScrollExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.viewport = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    } }, hostAttrs: [1, "select-container"], hostBindings: function SelectV2VirtualScrollExampleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SelectV2VirtualScrollExampleComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); });
    } }, decls: 3, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_VIRTUAL_SCROLL_SELECT_V2_VIRTUAL_SCROLL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_VIRTUAL_SCROLL_SELECT_V2_VIRTUAL_SCROLL_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 3, "formControl"], ["itemSize", "30", 3, "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "d-flex", "align-items-center", 3, "value", "index"]]; }, template: function SelectV2VirtualScrollExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SelectV2VirtualScrollExampleComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.selectControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("height", ctx.containerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("minBufferPx", ctx.containerHeight)("maxBufferPx", ctx.containerHeight * 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkVirtualForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_6__["SelectV2Component"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_7__["SelectV2OptionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "xVRf":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-docs/select-v2-docs.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-select-v2-docs-example\",\n    templateUrl: \"./select-v2-docs.example.component.html\",\n    styleUrls: [\"select-v2-docs.example.component.less\"],\n})\nexport class SelectV2DocsComponent {\n}\n");

/***/ }),

/***/ "xdqU":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-disabled/select-v2-disabled.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\ninterface IExampleItem {\n    name: string;\n    disabled: boolean;\n}\n\n@Component({\n    selector: \"nui-select-v2-disabled-example\",\n    templateUrl: \"./select-v2-disabled.example.component.html\",\n    host: { class: \"select-container\" },\n})\nexport class SelectV2DisabledExampleComponent {\n    public items: IExampleItem[] = Array.from({ length: 100 }).map((_, i) => ({\n        name: $localize`Item ${i}`,\n        disabled: Boolean(Math.round(Math.random())),\n    }));\n    public isSelectDisabled = false;\n}\n");

/***/ }),

/***/ "y1aD":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/select-v2/select-v2-styling/select-v2-styling.example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SelectV2StylingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectV2StylingExampleComponent", function() { return SelectV2StylingExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/select/select-v2.component */ "UpNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");





function SelectV2StylingExampleComponent_nui_select_v2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
} }
class SelectV2StylingExampleComponent {
    constructor() {
        this.items = Array.from({ length: 100 }).map((_, i) => ($localize `Item ${i}`));
        this.config = {
            panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "nui-overlay-styling-demo-custom-class"],
        };
    }
}
SelectV2StylingExampleComponent.ɵfac = function SelectV2StylingExampleComponent_Factory(t) { return new (t || SelectV2StylingExampleComponent)(); };
SelectV2StylingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectV2StylingExampleComponent, selectors: [["nui-select-v2-styling-example"]], hostAttrs: [1, "select-container"], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_STYLING_SELECT_V2_STYLING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select Item");
        i18n_0 = MSG_EXTERNAL_8325381706328570325$$DEMO_SRC_COMPONENTS_DEMO_SELECT_V2_SELECT_V2_STYLING_SELECT_V2_STYLING_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟42daf87f19836ef3d1b8f58a5cf93e2c43b82c1c␟8325381706328570325:Select Item`;
    } return [["placeholder", i18n_0, 2, "max-width", "50%", 3, "overlayConfig"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]]; }, template: function SelectV2StylingExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-select-v2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectV2StylingExampleComponent_nui_select_v2_option_1_Template, 2, 2, "nui-select-v2-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlayConfig", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_select_v2_select_select_v2_component__WEBPACK_IMPORTED_MODULE_2__["SelectV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_4__["SelectV2OptionComponent"]], styles: [".nui-overlay-styling-demo-custom-class {\n  border: 1px solid red;\n}\n.nui-overlay-styling-demo-custom-class .nui-overlay {\n  border: 2px red dashed;\n  padding: 10px;\n  background-color: antiquewhite;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC12Mi1zdHlsaW5nLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtBQURKO0FBQUE7RUFJUSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQURSIiwiZmlsZSI6InNlbGVjdC12Mi1zdHlsaW5nLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGhvdyB0aGUgZ2xvYmFsIHN0eWxlcyBsb29rIGxpa2VcblxuLm51aS1vdmVybGF5LXN0eWxpbmctZGVtby1jdXN0b20tY2xhc3Mge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcblxuICAgIC5udWktb3ZlcmxheSB7XG4gICAgICAgIGJvcmRlcjogMnB4IHJlZCBkYXNoZWQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgICB9XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "y2vA":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-reactive-form-field/select-v2-reactive-form-field.example.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"fancyForm\" class=\"nui-edge-definer\" style=\"max-width: 30%;\">\n    <nui-form-field caption=\"Select\" i18n-caption\n                    hint=\"Some pretty long text with hint\" i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['select']\">\n        <nui-select-v2 placeholder=\"Select Item\" i18n-placeholder\n                       formControlName=\"select\">\n            <nui-select-v2-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</nui-select-v2-option>\n        </nui-select-v2>\n        <nui-validation-message for=\"required\">\n            This field is required\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n");

/***/ }),

/***/ "zumQ":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/select-v2/select-v2-docs/select-v2-docs.example.component.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    .select-container { margin: 0; };\n    ul {\n        padding-left: 40px;\n\n        li {\n            list-style: disc;\n        }\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-select-v2-select-v2-module-es2015.js.map