(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-tooltip-tooltip-module"],{

/***/ "0DQD":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-position/tooltip-position.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-row justify-content-start\">\n    <div class=\"d-flex flex-column mr-5\">\n        <h4 i18n>Selected position:</h4>\n        <nui-radio-group name=\"positions\" [(value)]=\"selectedPosition\">\n            <nui-radio *ngFor=\"let position of positions\"\n                        [value]=\"position\"\n                        [checked]=\"position === 'top'\" i18n>\n                {{position}}\n            </nui-radio>\n        </nui-radio-group>\n    </div>\n    <div class=\"d-flex ml-5\">\n        <div class=\"d-flex flex-column justify-content-center align-items-center container\">\n            <div class=\"with-border\">\n                <span nuiTooltip=\"I'm the Tooltip!\" [tooltipPlacement]=\"selectedPosition\" i18n>Hover Over Me!</span>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "36zm":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip-position/tooltip-position.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TooltipPositionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPositionExampleComponent", function() { return TooltipPositionExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/radio/radio-group.component */ "lLUT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");




function TooltipPositionExampleComponent_nui_radio_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", position_r1)("checked", position_r1 === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](position_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
class TooltipPositionExampleComponent {
    constructor() {
        this.positions = ["top", "bottom", "left", "right"];
    }
}
TooltipPositionExampleComponent.ɵfac = function TooltipPositionExampleComponent_Factory(t) { return new (t || TooltipPositionExampleComponent)(); };
TooltipPositionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipPositionExampleComponent, selectors: [["nui-tooltip-position-example"]], decls: 11, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2554383328893262900$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_POSITION_TOOLTIP_POSITION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selected position:");
        i18n_0 = MSG_EXTERNAL_2554383328893262900$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_POSITION_TOOLTIP_POSITION_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟9ed590aa36a5b9bb1cea7452be48936cfeba56f4␟2554383328893262900:Selected position:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8782966583577653016$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_POSITION_TOOLTIP_POSITION_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hover Over Me!");
        i18n_2 = MSG_EXTERNAL_8782966583577653016$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_POSITION_TOOLTIP_POSITION_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟45b3b1c7b7326d2186f5aebff9d8420daff8bcee␟8782966583577653016:Hover Over Me!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1651614882280735010$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_POSITION_TOOLTIP_POSITION_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_4 = MSG_EXTERNAL_1651614882280735010$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_POSITION_TOOLTIP_POSITION_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟271b0ee65ade388d16c7697960f56793643b52f0␟1651614882280735010: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } return [[1, "d-flex", "flex-row", "justify-content-start"], [1, "d-flex", "flex-column", "mr-5"], i18n_0, ["name", "positions", 3, "value", "valueChange"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [1, "d-flex", "ml-5"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "container"], [1, "with-border"], ["nuiTooltip", "I'm the Tooltip!", 3, "tooltipPlacement"], i18n_2, [3, "value", "checked"], i18n_4]; }, template: function TooltipPositionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-radio-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TooltipPositionExampleComponent_Template_nui_radio_group_valueChange_4_listener($event) { return ctx.selectedPosition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TooltipPositionExampleComponent_nui_radio_5_Template, 2, 3, "nui-radio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.positions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltipPlacement", ctx.selectedPosition);
    } }, directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 300px;\n  border: 1px dashed;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n  padding: 0;\n}\n.with-border[_ngcontent-%COMP%] {\n  border: 1px red dashed;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXAtcG9zaXRpb24uZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQ0NBLG1EQUFBO0VEQ0EsVUFBQTtBQURKO0FBSUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJ0b29sdGlwLXBvc2l0aW9uLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLWxpbmUtZGVmYXVsdCk7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLndpdGgtYm9yZGVyIHtcbiAgICBib3JkZXI6IDFweCByZWQgZGFzaGVkO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"] });


/***/ }),

/***/ "51/i":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip-docs/tooltip-docs.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TooltipDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDocsExampleComponent", function() { return TooltipDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _tooltip_basic_tooltip_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip-basic/tooltip-basic.example.component */ "lEYG");
/* harmony import */ var _tooltip_disabled_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip-disabled/tooltip-disabled.example.component */ "RGPP");
/* harmony import */ var _tooltip_position_tooltip_position_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tooltip-position/tooltip-position.example.component */ "36zm");
/* harmony import */ var _tooltip_trigger_tooltip_trigger_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tooltip-trigger/tooltip-trigger.example.component */ "gUk4");







class TooltipDocsExampleComponent {
}
TooltipDocsExampleComponent.ɵfac = function TooltipDocsExampleComponent_Factory(t) { return new (t || TooltipDocsExampleComponent)(); };
TooltipDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipDocsExampleComponent, selectors: [["nui-tooltip-docs-example"]], decls: 107, vars: 1, consts: [["type", "info", 3, "allowDismiss"], ["filenamePrefix", "tooltip-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "tooltip-disabled", "exampleTitle", "Disabled Tooltip Usage Example"], ["filenamePrefix", "tooltip-position", "exampleTitle", "Position Tooltip Usage Example"], ["filenamePrefix", "tooltip-trigger", "exampleTitle", "Manual Tooltip Trigger Usage Example"]], template: function TooltipDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiTooltipModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " is a directive that creates a tooltip container, and can be used with any element on the page. It is extremely easy to use, simply add a tooltip directive attribute, and assign a desired value to it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Toolitp's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "MAX WIDTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "250px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". The longer text will wrap to a new line if exceeds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-tooltip-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Disabled Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " can be conditionally disabled, meaning it is possible to quit showing it under certain conditions. Here is an example:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-tooltip-disabled-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Tooltip Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " can be positioned differently in relation to a host component. By default, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "nui-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " position is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", however, the tooltip can change its position if there is not enough space to position itself in a chosen direction. The example below shows how you can manually set the position of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "nui-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "tooltipPlacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " attribute.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Available placement options should be of a type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "TooltipPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "nui-tooltip-position-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Tooltip Manual Trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " can be triggered manually using it's public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "show()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "hide()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "toggle()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " methods. Exmple below shows the example of typical usage of the feature.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Available placement options should be of a type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "TooltipPosition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Thanks to the cdk overlay scrolling strategy, a tooltip will disappear on scrolling only if it's gone off the viewport of the screen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "nui-tooltip-trigger-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _tooltip_basic_tooltip_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["TooltipBasicExampleComponent"], _tooltip_disabled_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__["TooltipDisabledExampleComponent"], _tooltip_position_tooltip_position_example_component__WEBPACK_IMPORTED_MODULE_5__["TooltipPositionExampleComponent"], _tooltip_trigger_tooltip_trigger_example_component__WEBPACK_IMPORTED_MODULE_6__["TooltipTriggerExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "BFJ/":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./tooltip-basic/tooltip-basic.example.component\";\nexport * from \"./tooltip-docs/tooltip-docs.example.component\";\nexport * from \"./tooltip-disabled/tooltip-disabled.example.component\";\nexport * from \"./tooltip-position/tooltip-position.example.component\";\nexport * from \"./tooltip-trigger/tooltip-trigger.example.component\";\nexport * from \"./tooltip-visual-test/tooltip-visual-test.component\";\n");

/***/ }),

/***/ "Bo5W":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-trigger/tooltip-trigger.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-start align-items-center w-25\">\n    <button nui-button\n            class=\"mr-auto\"\n            #tooltip=\"nuiTooltip\"\n            type=\"button\"\n            [nuiTooltip]=\"tooltipText\"\n            [nuiTooltipDisabled]=\"isDisabled\"\n            (click)=\"tooltip.toggle()\"\n            (mouseenter)=\"disableTooltip(true)\" i18n>\n            <strong>Toggle</strong> Tooltip\n    </button>\n\n    <div class=\"d-flex align-items-start flex-column\">\n        <button nui-button\n                type=\"button\"\n                size=\"compact\"displayStyle=\"action\"\n                (click)=\"handleClick($event, tooltip)\" i18n>\n            Click to <strong>show</strong> tooltip\n        </button>\n\n        <button nui-button\n                type=\"button\"\n                size=\"compact\"displayStyle=\"action\"\n                (click)=\"tooltip.hide()\" i18n>\n            Click to <strong>hide</strong> tooltip\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "FE9U":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-visual-test/tooltip-visual-test.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tooltip-visual-test\",\n    templateUrl: \"./tooltip-visual-test.component.html\",\n})\nexport class TooltipVisualTestComponent {\n    tooltipMessage = \"ThisTooltipHasBeenCalledManuallyWithCriticallyLongTooltipMessage\";\n}\n");

/***/ }),

/***/ "G3nC":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-position/tooltip-position.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { TooltipPosition } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-tooltip-position-example\",\n    templateUrl: \"tooltip-position.example.component.html\",\n    styleUrls: [\"./tooltip-position.example.component.less\"],\n})\n\nexport class TooltipPositionExampleComponent {\n    public positions: TooltipPosition[] = [ \"top\", \"bottom\", \"left\", \"right\" ];\n    public selectedPosition: string;\n}\n");

/***/ }),

/***/ "JoS3":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-trigger/tooltip-trigger.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { TooltipDirective } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-tooltip-trigger-example\",\n    templateUrl: \"tooltip-trigger.example.component.html\",\n})\n\nexport class TooltipTriggerExampleComponent {\n    public tooltipText = \"I am a Tooltip!\";\n    public isDisabled = false;\n\n    constructor() {}\n\n    public disableTooltip(state: boolean) {\n        this.isDisabled = state;\n        // We only set the tooltip to a disabled state above to hide the tooltip.\n        // Now we want to enable it back, so it works with the click event.\n        setTimeout(() => this.isDisabled = !state, 0);\n    }\n\n    public handleClick(event: MouseEvent, tooltip: TooltipDirective) {\n        event.stopPropagation();\n        tooltip.show();\n    }\n}\n");

/***/ }),

/***/ "N4ju":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-basic/tooltip-basic.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-tooltip-basic-example\",\n    templateUrl: \"tooltip-basic.example.component.html\",\n})\n\nexport class TooltipBasicExampleComponent {\n    public tooltip = $localize `I am a Tooltip!`;\n\n    constructor() {}\n}\n");

/***/ }),

/***/ "O9ru":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-position/tooltip-position.example.component.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins\";\n\n.container {\n    width: 300px;\n    border: 1px dashed;\n    .setCssVariable(border-color, nui-color-line-default);\n    padding: 0;\n}\n\n.with-border {\n    border: 1px red dashed;\n    padding: 5px;\n}\n");

/***/ }),

/***/ "P0cZ":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-visual-test/tooltip-visual-test.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\"><h3>Basic button</h3></div>\n    <div class=\"row\">\n        <button nui-button type=\"button\" id=\"basic-tooltip\" nuiTooltip=\"Default tooltip\">\n            Standard tooltip example\n        </button>\n    </div>\n\n    <div class=\"row\"><h3>Custom position: left, bottom, right</h3></div>\n    <div class=\"row\">\n        <button nui-button\n                id=\"left-tooltip\"\n                nuiTooltip=\"Left-side tooltip\"\n                tooltipPlacement=\"left\"\n                type=\"button\">\n            Tooltip on the left\n        </button>\n        <button nui-button\n                id=\"bottom-tooltip\"\n                nuiTooltip=\"Bottom-placed tooltip\"\n                tooltipPlacement=\"bottom\"\n                type=\"button\">\n            Tooltip on the bottom\n        </button>\n        <button nui-button\n                id=\"right-tooltip\"\n                nuiTooltip=\"Right-side tooltip\"\n                tooltipPlacement=\"right\"\n                type=\"button\">\n            Tooltip on the right\n        </button>\n    </div>\n\n    <div class=\"row\"><h3>Manual Triggering</h3></div>\n    <div class=\"row\">\n        <span #tooltip=\"nuiTooltip\"\n              [nuiTooltip]=\"tooltipMessage\">\n        </span>\n        <button id=\"manual-tooltip\" nui-button type=\"button\" (click)=\"tooltip.toggle()\">\n            Manually toggle tooltip\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "RGPP":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip-disabled/tooltip-disabled.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TooltipDisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDisabledExampleComponent", function() { return TooltipDisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");



class TooltipDisabledExampleComponent {
    constructor() {
        this.isDisabled = false;
        this.tooltip = $localize `I am a Tooltip!`;
        this.message = $localize `Toggle to switch state`;
    }
    onValueChanged(value) {
        this.isDisabled = value;
        this.message = value
            ? $localize `Tooltip is Disabled and hidden!`
            : $localize `Tooltip is Enabled and can be shown"`;
    }
}
TooltipDisabledExampleComponent.ɵfac = function TooltipDisabledExampleComponent_Factory(t) { return new (t || TooltipDisabledExampleComponent)(); };
TooltipDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipDisabledExampleComponent, selectors: [["nui-tooltip-disabled-example"]], decls: 7, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9092730064398031370$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_DISABLED_TOOLTIP_DISABLED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me! ");
        i18n_0 = MSG_EXTERNAL_9092730064398031370$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_DISABLED_TOOLTIP_DISABLED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟592e9a3b44b87d09ae2ebfa75edb6f8ebc7ec808␟9092730064398031370: Hover over me! `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7627021879112587269$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_DISABLED_TOOLTIP_DISABLED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_2 = MSG_EXTERNAL_7627021879112587269$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_DISABLED_TOOLTIP_DISABLED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟16de4b1c8733e6811c32ae14ba0643bb354914e1␟7627021879112587269: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
    } return [[1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "mb-5"], [3, "nuiTooltip", "nuiTooltipDisabled"], i18n_0, [1, "d-flex", "flex-row"], [3, "value", "valueChange"], i18n_2]; }, template: function TooltipDisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-switch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TooltipDisabledExampleComponent_Template_nui_switch_valueChange_5_listener($event) { return ctx.onValueChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiTooltip", ctx.tooltip)("nuiTooltipDisabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](6);
    } }, directives: [_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__["SwitchComponent"]], encapsulation: 2 });


/***/ }),

/***/ "RvtI":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "BFJ/",
	"./tooltip-basic/tooltip-basic.example.component.html": "lIGJ",
	"./tooltip-basic/tooltip-basic.example.component.ts": "N4ju",
	"./tooltip-disabled/tooltip-disabled.example.component.html": "YsOG",
	"./tooltip-disabled/tooltip-disabled.example.component.ts": "cjQU",
	"./tooltip-docs/tooltip-docs.example.component.html": "zTQh",
	"./tooltip-docs/tooltip-docs.example.component.ts": "dXiJ",
	"./tooltip-position/tooltip-position.example.component.html": "0DQD",
	"./tooltip-position/tooltip-position.example.component.less": "O9ru",
	"./tooltip-position/tooltip-position.example.component.ts": "G3nC",
	"./tooltip-trigger/tooltip-trigger.example.component.html": "Bo5W",
	"./tooltip-trigger/tooltip-trigger.example.component.ts": "JoS3",
	"./tooltip-visual-test/tooltip-visual-test.component.html": "P0cZ",
	"./tooltip-visual-test/tooltip-visual-test.component.ts": "FE9U",
	"./tooltip.module.ts": "wbyP"
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
webpackContext.id = "RvtI";

/***/ }),

/***/ "V9dS":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip-visual-test/tooltip-visual-test.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TooltipVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipVisualTestComponent", function() { return TooltipVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");



class TooltipVisualTestComponent {
    constructor() {
        this.tooltipMessage = "ThisTooltipHasBeenCalledManuallyWithCriticallyLongTooltipMessage";
    }
}
TooltipVisualTestComponent.ɵfac = function TooltipVisualTestComponent_Factory(t) { return new (t || TooltipVisualTestComponent)(); };
TooltipVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipVisualTestComponent, selectors: [["nui-tooltip-visual-test"]], decls: 25, vars: 1, consts: [[1, "container"], [1, "row"], ["nui-button", "", "type", "button", "id", "basic-tooltip", "nuiTooltip", "Default tooltip"], ["nui-button", "", "id", "left-tooltip", "nuiTooltip", "Left-side tooltip", "tooltipPlacement", "left", "type", "button"], ["nui-button", "", "id", "bottom-tooltip", "nuiTooltip", "Bottom-placed tooltip", "tooltipPlacement", "bottom", "type", "button"], ["nui-button", "", "id", "right-tooltip", "nuiTooltip", "Right-side tooltip", "tooltipPlacement", "right", "type", "button"], [3, "nuiTooltip"], ["tooltip", "nuiTooltip"], ["id", "manual-tooltip", "nui-button", "", "type", "button", 3, "click"]], template: function TooltipVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Standard tooltip example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Custom position: left, bottom, right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Tooltip on the left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tooltip on the bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Tooltip on the right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Manual Triggering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipVisualTestComponent_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Manually toggle tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiTooltip", ctx.tooltipMessage);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], encapsulation: 2 });


/***/ }),

/***/ "YsOG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-disabled/tooltip-disabled.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column\">\n    <div class=\"d-flex flex-row mb-5\">\n        <span [nuiTooltip]=\"tooltip\" [nuiTooltipDisabled]=\"isDisabled\" i18n>\n            Hover over me!\n        </span>\n    </div>\n    <div class=\"d-flex flex-row\">\n        <nui-switch [value]=\"isDisabled\" (valueChange)=\"onValueChanged($event)\" i18n>\n            {{message}}\n        </nui-switch>\n    </div>\n</div>\n");

/***/ }),

/***/ "ZW98":
/*!************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip.module.ts ***!
  \************************************************************/
/*! exports provided: TooltipDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDemoModule", function() { return TooltipDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "lD4S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["TooltipDocsExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "tooltip-basic",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["TooltipBasicExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "tooltip-disabled",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["TooltipDisabledExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "tooltip-position",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["TooltipPositionExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "tooltip-trigger",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["TooltipTriggerExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "tooltip-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["TooltipVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class TooltipDemoModule {
}
TooltipDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TooltipDemoModule });
TooltipDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function TooltipDemoModule_Factory(t) { return new (t || TooltipDemoModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("RvtI"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTooltipModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiRadioModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TooltipDemoModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["TooltipBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["TooltipDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["TooltipDisabledExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["TooltipPositionExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["TooltipTriggerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["TooltipVisualTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiTooltipModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiRadioModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "cjQU":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-disabled/tooltip-disabled.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-tooltip-disabled-example\",\n    templateUrl: \"tooltip-disabled.example.component.html\",\n})\n\nexport class TooltipDisabledExampleComponent {\n    public isDisabled = false;\n    public tooltip = $localize `I am a Tooltip!`;\n    public message = $localize `Toggle to switch state`;\n\n\n    constructor() {}\n\n    public onValueChanged(value: boolean) {\n        this.isDisabled = value;\n        this.message = value\n            ? $localize `Tooltip is Disabled and hidden!`\n            : $localize `Tooltip is Enabled and can be shown\"`;\n    }\n}\n");

/***/ }),

/***/ "dXiJ":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-docs/tooltip-docs.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tooltip-docs-example\",\n    templateUrl: \"./tooltip-docs.example.component.html\",\n})\n\nexport class TooltipDocsExampleComponent {}\n\n");

/***/ }),

/***/ "gUk4":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip-trigger/tooltip-trigger.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TooltipTriggerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipTriggerExampleComponent", function() { return TooltipTriggerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");



class TooltipTriggerExampleComponent {
    constructor() {
        this.tooltipText = "I am a Tooltip!";
        this.isDisabled = false;
    }
    disableTooltip(state) {
        this.isDisabled = state;
        // We only set the tooltip to a disabled state above to hide the tooltip.
        // Now we want to enable it back, so it works with the click event.
        setTimeout(() => this.isDisabled = !state, 0);
    }
    handleClick(event, tooltip) {
        event.stopPropagation();
        tooltip.show();
    }
}
TooltipTriggerExampleComponent.ɵfac = function TooltipTriggerExampleComponent_Factory(t) { return new (t || TooltipTriggerExampleComponent)(); };
TooltipTriggerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipTriggerExampleComponent, selectors: [["nui-tooltip-trigger-example"]], decls: 12, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6346233514746567345$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_TRIGGER_TOOLTIP_TRIGGER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startTagStrong}Toggle{$closeTagStrong} Tooltip ", { "startTagStrong": "\uFFFD#4\uFFFD", "closeTagStrong": "\uFFFD/#4\uFFFD" });
        i18n_0 = MSG_EXTERNAL_6346233514746567345$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_TRIGGER_TOOLTIP_TRIGGER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟90b70fdbf321a371caf379f93a8628a91f4063bd␟6346233514746567345:${"\uFFFD#4\uFFFD"}:START_TAG_STRONG:Toggle${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_STRONG: Tooltip `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8214394447123073028$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_TRIGGER_TOOLTIP_TRIGGER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Click to {$startTagStrong}show{$closeTagStrong} tooltip ", { "startTagStrong": "\uFFFD#8\uFFFD", "closeTagStrong": "\uFFFD/#8\uFFFD" });
        i18n_2 = MSG_EXTERNAL_8214394447123073028$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_TRIGGER_TOOLTIP_TRIGGER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟6c027bcb91d7c26487a16f1d3dffaad389d476a1␟8214394447123073028: Click to ${"\uFFFD#8\uFFFD"}:START_TAG_STRONG:show${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_STRONG: tooltip `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2948859004306546862$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_TRIGGER_TOOLTIP_TRIGGER_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Click to {$startTagStrong}hide{$closeTagStrong} tooltip ", { "startTagStrong": "\uFFFD#11\uFFFD", "closeTagStrong": "\uFFFD/#11\uFFFD" });
        i18n_4 = MSG_EXTERNAL_2948859004306546862$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_TRIGGER_TOOLTIP_TRIGGER_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟85209488c72ee60521e870395af449ede1053e1a␟2948859004306546862: Click to ${"\uFFFD#11\uFFFD"}:START_TAG_STRONG:hide${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_STRONG: tooltip `;
    } return [[1, "d-flex", "justify-content-start", "align-items-center", "w-25"], ["nui-button", "", "type", "button", 1, "mr-auto", 3, "nuiTooltip", "nuiTooltipDisabled", "click", "mouseenter"], ["tooltip", "nuiTooltip"], i18n_0, [1, "d-flex", "align-items-start", "flex-column"], ["nui-button", "", "type", "button", "size", "compact", "displayStyle", "action", 3, "click"], i18n_2, i18n_4]; }, template: function TooltipTriggerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipTriggerExampleComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); })("mouseenter", function TooltipTriggerExampleComponent_Template_button_mouseenter_1_listener() { return ctx.disableTooltip(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipTriggerExampleComponent_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.handleClick($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TooltipTriggerExampleComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiTooltip", ctx.tooltipText)("nuiTooltipDisabled", ctx.isDisabled);
    } }, directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], encapsulation: 2 });


/***/ }),

/***/ "lD4S":
/*!***************************************************!*\
  !*** ./demo/src/components/demo/tooltip/index.ts ***!
  \***************************************************/
/*! exports provided: TooltipBasicExampleComponent, TooltipDocsExampleComponent, TooltipDisabledExampleComponent, TooltipPositionExampleComponent, TooltipTriggerExampleComponent, TooltipVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_basic_tooltip_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip-basic/tooltip-basic.example.component */ "lEYG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipBasicExampleComponent", function() { return _tooltip_basic_tooltip_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["TooltipBasicExampleComponent"]; });

/* harmony import */ var _tooltip_docs_tooltip_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip-docs/tooltip-docs.example.component */ "51/i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDocsExampleComponent", function() { return _tooltip_docs_tooltip_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["TooltipDocsExampleComponent"]; });

/* harmony import */ var _tooltip_disabled_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip-disabled/tooltip-disabled.example.component */ "RGPP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDisabledExampleComponent", function() { return _tooltip_disabled_tooltip_disabled_example_component__WEBPACK_IMPORTED_MODULE_2__["TooltipDisabledExampleComponent"]; });

/* harmony import */ var _tooltip_position_tooltip_position_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip-position/tooltip-position.example.component */ "36zm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipPositionExampleComponent", function() { return _tooltip_position_tooltip_position_example_component__WEBPACK_IMPORTED_MODULE_3__["TooltipPositionExampleComponent"]; });

/* harmony import */ var _tooltip_trigger_tooltip_trigger_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip-trigger/tooltip-trigger.example.component */ "gUk4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipTriggerExampleComponent", function() { return _tooltip_trigger_tooltip_trigger_example_component__WEBPACK_IMPORTED_MODULE_4__["TooltipTriggerExampleComponent"]; });

/* harmony import */ var _tooltip_visual_test_tooltip_visual_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip-visual-test/tooltip-visual-test.component */ "V9dS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipVisualTestComponent", function() { return _tooltip_visual_test_tooltip_visual_test_component__WEBPACK_IMPORTED_MODULE_5__["TooltipVisualTestComponent"]; });









/***/ }),

/***/ "lEYG":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/tooltip/tooltip-basic/tooltip-basic.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TooltipBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipBasicExampleComponent", function() { return TooltipBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/tooltip/tooltip.directive */ "mgRW");


class TooltipBasicExampleComponent {
    constructor() {
        this.tooltip = $localize `I am a Tooltip!`;
    }
}
TooltipBasicExampleComponent.ɵfac = function TooltipBasicExampleComponent_Factory(t) { return new (t || TooltipBasicExampleComponent)(); };
TooltipBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipBasicExampleComponent, selectors: [["nui-tooltip-basic-example"]], decls: 2, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_208065897726818670$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_BASIC_TOOLTIP_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Hover over me!");
        i18n_0 = MSG_EXTERNAL_208065897726818670$$DEMO_SRC_COMPONENTS_DEMO_TOOLTIP_TOOLTIP_BASIC_TOOLTIP_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟464bf087222ccf614bd3e83b95656607b0314f70␟208065897726818670:Hover over me!`;
    } return [[3, "nuiTooltip"], i18n_0]; }, template: function TooltipBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiTooltip", ctx.tooltip);
    } }, directives: [_src_lib_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_1__["TooltipDirective"]], encapsulation: 2 });


/***/ }),

/***/ "lIGJ":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-basic/tooltip-basic.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span [nuiTooltip]=\"tooltip\" i18n>Hover over me!</span>\n");

/***/ }),

/***/ "wbyP":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiRadioModule,\n    NuiSwitchModule,\n    NuiTooltipModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    TooltipBasicExampleComponent,\n    TooltipDisabledExampleComponent,\n    TooltipDocsExampleComponent,\n    TooltipPositionExampleComponent,\n    TooltipTriggerExampleComponent,\n    TooltipVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TooltipDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"tooltip-basic\",\n        component: TooltipBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"tooltip-disabled\",\n        component: TooltipDisabledExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"tooltip-position\",\n        component: TooltipPositionExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"tooltip-trigger\",\n        component: TooltipTriggerExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"tooltip-visual-test\",\n        component: TooltipVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiTooltipModule,\n        NuiSwitchModule,\n        NuiRadioModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        TooltipBasicExampleComponent,\n        TooltipDocsExampleComponent,\n        TooltipDisabledExampleComponent,\n        TooltipPositionExampleComponent,\n        TooltipTriggerExampleComponent,\n        TooltipVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class TooltipDemoModule {\n}\n");

/***/ }),

/***/ "zTQh":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/tooltip/tooltip-docs/tooltip-docs.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiTooltipModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    <code>Tooltip</code> is a directive that creates a tooltip container, and can be used with any element on the page. It is extremely easy to use, simply add a tooltip directive \n    attribute, and assign a desired value to it.<br />\n    <nui-message type=\"info\"\n                 [allowDismiss]=\"false\">\n                 <strong>Note:</strong> Toolitp's <em>MAX WIDTH</em> is <strong>250px</strong>. The longer text will wrap to a new line if exceeds\n    </nui-message>\n</p>\n\n<nui-example-wrapper filenamePrefix=\"tooltip-basic\" exampleTitle=\"Basic Usage\">\n    <nui-tooltip-basic-example></nui-tooltip-basic-example>\n</nui-example-wrapper>\n\n<h2>Disabled Tooltip</h2>\n<p>\n    <code>Tooltip</code> can be conditionally disabled, meaning it is possible to quit showing it under certain conditions. Here is an example:\n</p>\n\n<nui-example-wrapper filenamePrefix=\"tooltip-disabled\" exampleTitle=\"Disabled Tooltip Usage Example\">\n    <nui-tooltip-disabled-example></nui-tooltip-disabled-example>\n</nui-example-wrapper>\n\n<h2>Tooltip Placement</h2>\n<p>\n    <code>Tooltip</code> can be positioned differently in relation to a host component. By default, <code>nui-tooltip</code> position is <code>top</code>, however, the tooltip \n    can change its position if there is not enough space to position itself in a chosen direction. The example below shows how you can manually set the position of <code>nui-tooltip</code> \n    using the <code>tooltipPlacement</code> attribute.\n</p>\n<p>\n    Available placement options should be of a type <code>TooltipPosition</code>: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"tooltip-position\" exampleTitle=\"Position Tooltip Usage Example\">\n    <nui-tooltip-position-example></nui-tooltip-position-example>\n</nui-example-wrapper>\n\n<h2>Tooltip Manual Trigger</h2>\n<p>\n    <code>Tooltip</code> can be triggered manually using it's public <code>show()</code>, <code>hide()</code>, and <code>toggle()</code> methods. \n    Exmple below shows the example of typical usage of the feature.\n</p>\n<p>\n    Available placement options should be of a type <code>TooltipPosition</code>: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>.<br />\n    <mark>Thanks to the cdk overlay scrolling strategy, a tooltip will disappear on scrolling only if it's gone off the viewport of the screen.</mark>\n</p>\n\n<nui-example-wrapper filenamePrefix=\"tooltip-trigger\" exampleTitle=\"Manual Tooltip Trigger Usage Example\">\n    <nui-tooltip-trigger-example></nui-tooltip-trigger-example>\n</nui-example-wrapper>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=demo-tooltip-tooltip-module-es2015.js.map