(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-popover-popover-module"],{

/***/ "1QO/":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-docs/popover-docs.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><code>&lt;nui-popover&gt;</code> is a popup control that can contain any HTML markup and be applied to block or\n    in-line elements. It can basically be thought of as a more data-rich tooltip.\n</p>\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiPopoverModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<p>\n    A simple popover can be added to the page by adding an <code>&lt;nui-popover&gt;</code> element and passing\n    a <code>TemplateRef&lt;string&gt;</code> value to the <code>template</code> input. The provided template serves\n    as the popover's body content. The simplest way to do this is to create an <code>ng-template</code> element and pass its\n    template reference variable name to the <code>template</code> input.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-basic-usage\" exampleTitle=\"Basic Usage\">\n    <nui-popover-basic-usage-example></nui-popover-basic-usage-example>\n</nui-example-wrapper>\n\n<h2>Debounced Displaying</h2>\n<p>To debounce the displaying of the tooltip provide the time in milliseconds via the <code>delay</code> input.</p>\n<nui-example-wrapper filenamePrefix=\"popover-debounce\" exampleTitle=\"Popover Debounce\">\n    <nui-popover-debounce-example></nui-popover-debounce-example>\n</nui-example-wrapper>\n\n<h2>Adding a Title</h2>\n<p>To add a title to the popover, pass a string via the <code>popoverTitle</code> input.</p>\n<p>\n    If you need to hide overflow of long strings (for example long url) just wrap your popover content with <code>div</code> which has <code>overflow: hidden</code>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-with-title\" exampleTitle=\"Popover with Title\">\n    <nui-popover-with-title-example></nui-popover-with-title-example>\n</nui-example-wrapper>\n\n<p>\n    <strong>\n        Note: Popover must be used as an attribute when the <code>trigger</code> input is set to 'focus'.\n        See the focus example under <em>Trigger Events</em> below.\n    </strong>\n</p>\n\n\n<h2>Trigger Events</h2>\n<p>\n    Popover supports four trigger events: 'click' | 'mouseenter' | 'mouseleave' | 'focus'. To specify a trigger, set the\n    <code>trigger</code> input to one or more of the supported events. If no event is not specified, 'mouseenter' will be used\n    as the default.\n</p>\n<p>A popover can be configured to react to more than one event by specifying multiple trigger events as in the example below.</p>\n<p><code>trigger='click mouseenter'</code></p>\n\n<nui-example-wrapper filenamePrefix=\"popover-click-trigger\" exampleTitle=\"Click\">\n    <nui-popover-click-trigger-example></nui-popover-click-trigger-example>\n</nui-example-wrapper>\n<nui-example-wrapper filenamePrefix=\"popover-mouseenter-trigger\" exampleTitle=\"Mouse Enter\">\n    <nui-popover-mouseenter-trigger-example></nui-popover-mouseenter-trigger-example>\n</nui-example-wrapper>\n<nui-example-wrapper filenamePrefix=\"popover-focus-trigger\" exampleTitle=\"Focus\">\n    <nui-popover-focus-trigger-example></nui-popover-focus-trigger-example>\n</nui-example-wrapper>\n\n<p>\n    <strong>\n        Note: The 'focus' trigger is only available when Popover is used as an attribute.\n        See <em>Usage as an Attribute</em> above.\n    </strong>\n</p>\n\n<h2>Prevent Closing on Click</h2>\n<p>\n    To allow the user to interact with components within the popover such as a checkbox, link, etc. and prevent\n    the popover from closing when this content is cliсked, set the <code>preventClosing</code> input to true.\n    The default value is <code>false</code>. <br>\n    In this case popover can be closed via <code>nuiClosePopover</code> subject that you provide to\n    <code>nuiPopoverDirective</code> or <code>closePopover</code> of <code>PopoverComponent</code>.\n    So when you need to close popover you just call <code>next()</code> method of this subject. No arguments are required.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-prevent-close-on-click\" exampleTitle=\"Prevent Closing on Click\">\n    <nui-popover-prevent-close-on-click-example></nui-popover-prevent-close-on-click-example>\n</nui-example-wrapper>\n\n<h2>Appending to a Container</h2>\n<p>\n    Passing an HTMLElement via the <code>container</code> input tells the popover which element to append itself to.\n    By default the popover is appended to the document body. The simplest way to do this is to append an Angular template\n    reference variable name to the container element and pass the name to the <code>container</code> input.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-with-container\" exampleTitle=\"Appending to a Container\">\n    <nui-popover-with-container-example></nui-popover-with-container-example>\n</nui-example-wrapper>\n\n<h2>Removing Padding</h2>\n<p>\n    Setting the <code>hasPadding</code> input to false removes all padding from the popover body. <code>hasPadding</code>\n    is true by default.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-no-padding\" exampleTitle=\"Removing Padding\">\n    <nui-popover-no-padding-example></nui-popover-no-padding-example>\n</nui-example-wrapper>\n\n\n<h2>Removing Width and Height Limitations</h2>\n<p>\n    Setting the <code>unlimited</code> input to true removes all maximum and minimum limitations for width and height of the popover body.\n    <code>unlimited</code> is false by default.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-unlimited\" exampleTitle=\"Removing Width and Height Limitations\">\n    <nui-popover-unlimited-example></nui-popover-unlimited-example>\n</nui-example-wrapper>\n\n\n<h2>Outputs</h2>\n<p>The <code>(shown)</code> output emits an event upon display of the popover.</p>\n<p>The <code>(hidden)</code> output emits an event upon disappearance of the popover</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-outputs\" exampleTitle=\"Show and Hide\">\n    <nui-popover-outputs-example></nui-popover-outputs-example>\n</nui-example-wrapper>\n\n\n<h2>Placement</h2>\n<p>\n    To specify placement of popover set the <code>placement</code> input to 'left', 'right', 'top' or 'bottom'.\n    The default is 'right'.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-placement\" exampleTitle=\"Right or Left\">\n    <nui-popover-placement-example></nui-popover-placement-example>\n</nui-example-wrapper>\n\n<p>\n    Note: Popover adapts to available space around it. So, if you set <code>placement=\"left\"</code> but there is not enough\n    free space on the left, the popover will be displayed to the right instead.\n</p>\n\n\n<h2>Icon/Status</h2>\n<p>Pass an icon name to the <code>icon</code> input to display an icon in the popover.</p>\n<p>\n    If the popover has a title, the icon will display to the left of the title. If, however, the popover\n    does not have a title, the icon will be displayed to the left of the popover body.\n</p>\n<p>\n    If you want to use popover with status indicator overlay and underline, you can achieve it by writing your own markup like in the example below.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-icon\" exampleTitle=\"Icon\">\n    <nui-popover-icon-example></nui-popover-icon-example>\n</nui-example-wrapper>\n<nui-example-wrapper filenamePrefix=\"popover-status\" exampleTitle=\"Status\">\n    <nui-popover-status-example></nui-popover-status-example>\n</nui-example-wrapper>\n\n<h2>Modal Mode</h2>\n<p>\n    To display a popover in a modal style (with a darkened backdrop between the page and the popover)\n    set the <code>modal</code> input to true.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-modal\" exampleTitle=\"Modal Mode\">\n    <nui-popover-modal-example></nui-popover-modal-example>\n</nui-example-wrapper>\n\n<h2>Disabled</h2>\n<p>\n    To prevent popover from showing set the <code>disabled</code> input to true\n</p>\n\n<nui-example-wrapper filenamePrefix=\"popover-disabled\" exampleTitle=\"Disabled\">\n    <nui-popover-disabled-example></nui-popover-disabled-example>\n</nui-example-wrapper>\n<h2>Opening and Closing Popover Programmatically</h2>\n<p>\n    To open or close popover programmatically do next steps:\n</p>\n<ol>\n    <li>\n        Set <code>trigger=\"openPopoverSubject\"</code>.\n    </li>\n    <li>\n        Pass <code>Subject</code> as input to <code>[closePopover]</code> and <code>[openPopover]</code> inputs.\n    </li>\n    <li>\n        Do <code>this.openPopoverSubject.next()</code> or <code>this.closePopoverSubject.next()</code> on needed event to trigger popover.\n    </li>\n</ol>\n<nui-example-wrapper filenamePrefix=\"popover-open-and-close-programmatically\" exampleTitle=\"Opening and Closing Popover Programmatically\">\n    <nui-popover-open-and-close-programmatically-example></nui-popover-open-and-close-programmatically-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "1g4a":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-status/popover-status.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover [hasPadding]=\"false\"\n             [template]=\"popoverWithStatus\" i18n>\n    Hover over me!\n</nui-popover>\n\n<ng-template #popoverWithStatus i18n>\n    <div class=\"example-popover-header\">\n        <nui-icon class=\"a\" icon=\"application\" status=\"critical\"></nui-icon>\n        <span class=\"ml-2\">Here goes the title!</span>\n    </div>\n    <div class=\"example-popover-body\">\n        I'm implemented to show how to create popover with status!\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "21Ez":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-focus-trigger/popover-focus-trigger.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PopoverFocusTriggerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverFocusTriggerExampleComponent", function() { return PopoverFocusTriggerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverFocusTriggerExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverFocusTriggerExampleComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 12);
} }
class PopoverFocusTriggerExampleComponent {
}
PopoverFocusTriggerExampleComponent.ɵfac = function PopoverFocusTriggerExampleComponent_Factory(t) { return new (t || PopoverFocusTriggerExampleComponent)(); };
PopoverFocusTriggerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverFocusTriggerExampleComponent, selectors: [["nui-popover-focus-trigger-example"]], decls: 18, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4359847060009771702$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Set");
        i18n_0 = MSG_EXTERNAL_4359847060009771702$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟55dd9f44e64851bca3b7bfc9283a5ff36f030228␟4359847060009771702:Set`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3546251928667934308$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Popover with Focus Trigger");
        i18n_2 = MSG_EXTERNAL_3546251928667934308$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟a2f04a6bcd4bd559d08a80a1e0d6d2c6222c3113␟3546251928667934308:Popover with Focus Trigger`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1424718195570154868$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("focus");
        i18n_4 = MSG_EXTERNAL_1424718195570154868$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟d8d2e11af48b0a1236e83003c4e5602588a54247␟1424718195570154868:focus`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7304984467779629906$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("on me!");
        i18n_6 = MSG_EXTERNAL_7304984467779629906$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟437fc037e98498dafa9eca7628fd29973d7e63eb␟7304984467779629906:on me!`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590685479513680095$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Then, tab over to");
        i18n_8 = MSG_EXTERNAL_2590685479513680095$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟9d06ffb6b02a0ef4a9f14c5f273988daf51699cc␟2590685479513680095:Then, tab over to`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3546251928667934308$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Popover with Focus Trigger");
        i18n_10 = MSG_EXTERNAL_3546251928667934308$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟a2f04a6bcd4bd559d08a80a1e0d6d2c6222c3113␟3546251928667934308:Popover with Focus Trigger`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1424718195570154868$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("focus");
        i18n_12 = MSG_EXTERNAL_1424718195570154868$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟d8d2e11af48b0a1236e83003c4e5602588a54247␟1424718195570154868:focus`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7304984467779629906$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("on me!");
        i18n_14 = MSG_EXTERNAL_7304984467779629906$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟437fc037e98498dafa9eca7628fd29973d7e63eb␟7304984467779629906:on me!`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_715383766367247267$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS__17 = goog.getMsg(" I'm focused and ready-to-go! ");
        i18n_16 = MSG_EXTERNAL_715383766367247267$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:␟7dd951c831c92a6ec1d162b521b9cedf1f893a7e␟715383766367247267: I'm focused and ready-to-go! `;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2282271425043213110$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS__19 = goog.getMsg(" Now, I'm the one who's focused and ready-to-go!\n");
        i18n_18 = MSG_EXTERNAL_2282271425043213110$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_FOCUS_TRIGGER_POPOVER_FOCUS_TRIGGER_EXAMPLE_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:␟c5b7bfe5a1d7d117c46a5de3c288a62df0be29ce␟2282271425043213110: Now, I'm the one who's focused and ready-to-go!
`;
    } return [i18n_0, ["id", "nui-demo-popover-focus", "tabindex", "1", "popoverTitle", i18n_2, "trigger", "focus", 3, "template"], i18n_4, i18n_6, i18n_8, ["tabindex", "2", "popoverTitle", i18n_10, "trigger", "focus", 3, "template"], i18n_12, i18n_14, ["popoverFocusTriggerTemplate0", ""], ["popoverFocusTriggerTemplate1", ""], ["id", "nui-demo-popover-modal-focus"], i18n_16, i18n_18]; }, template: function PopoverFocusTriggerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-popover", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-popover", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PopoverFocusTriggerExampleComponent_ng_template_14_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PopoverFocusTriggerExampleComponent_ng_template_16_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r2);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "475p":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-basic-usage/popover-basic-usage.example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover [template]=\"popoverWithBasicUsage\" i18n>\n        Hover over me!\n</nui-popover>\n\n<ng-template #popoverWithBasicUsage i18n>\n    I'm implemented with the simplest usage! Expand my source code above to see how!\n</ng-template>\n");

/***/ }),

/***/ "574c":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-disabled/popover-disabled.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-popover-disabled-example\",\n    templateUrl: \"./popover-disabled.example.component.html\",\n})\nexport class PopoverDisabledExampleComponent {\n    public disabled = false;\n    public buttonName = $localize `Disable`;\n\n    constructor() { }\n\n    changeStatus() {\n        this.disabled = !this.disabled;\n        this.buttonName = this.disabled ? $localize `Enable` : $localize `Disable`;\n    }\n}\n");

/***/ }),

/***/ "5EQs":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-prevent-close-on-click/popover-prevent-close-on-click.example.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover popoverTitle=\"Prevent close popover on click\" i18n-popoverTitle\n             id=\"nui-demo-popover-prevent-onclick\"\n             trigger=\"click\"\n             [template]=\"popoverPreventClose\"\n             [closePopover]=\"closePopoverSubject\"\n             [preventClosing]=\"true\">\n    <button nui-button type=\"button\">\n        <span i18n>Click me!</span>\n    </button>\n</nui-popover>\n\n<ng-template #popoverPreventClose>\n    <div id=\"nui-demo-popover-modal-prevent\">\n        <nui-checkbox id=\"nui-demo-checkbox-in-popover\" i18n>Hi, check me!</nui-checkbox>\n        <nui-combobox id=\"nui-demo-popover-combobox\"\n                      [itemsSource]=\"dataset.items\"\n                      placeholder=\"Select item\" i18n-placeholder></nui-combobox>\n        <div class=\"mt-2 d-flex justify-content-end\">\n            <button id=\"nui-demo-custom-close-popover\"\n                    nui-button\n                    type=\"button\"\n                    displayStyle=\"action\"\n                    (click)=\"closePopover()\" i18n>Close</button>\n            <button nui-button\n                    class=\"ml-3\"\n                    type=\"button\"\n                    displayStyle=\"primary\"\n                    (click)=\"closePopover()\" i18n>Confirm</button>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "5eee":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-with-title/popover-with-title.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover popoverTitle=\"Some Long Url\"\n             i18n-popoverTitle\n             [template]=\"popoverWithTitle\"\n             i18n>\n    Hover over me!\n</nui-popover>\n\n<ng-template #popoverWithTitle>\n    <div style=\"overflow: hidden\" i18n>\n        https://somelongstringsomelongstringsomelongstringsomelongstringsomelongstring.url/somelongstring?=somelongstringsomelongstringsomelongstring\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "6sg9":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./popover-docs/popover-docs.example.component\";\nexport * from \"./popover-disabled/popover-disabled.example.component\";\nexport * from \"./popover-basic-usage/popover-basic-usage.example.component\";\nexport * from \"./popover-no-padding/popover-no-padding.example.component\";\nexport * from \"./popover-with-title/popover-with-title.example.component\";\nexport * from \"./popover-with-container/popover-with-container.example.component\";\nexport * from \"./popover-click-trigger/popover-click-trigger.example.component\";\nexport * from \"./popover-focus-trigger/popover-focus-trigger.example.component\";\nexport * from \"./popover-mouseenter-trigger/popover-mouseenter-trigger.example.component\";\nexport * from \"./popover-icon/popover-icon.example.component\";\nexport * from \"./popover-modal/popover-modal.example.component\";\nexport * from \"./popover-placement/popover-placement.example.component\";\nexport * from \"./popover-prevent-close-on-click/popover-prevent-close-on-click.example.component\";\nexport * from \"./popover-outputs/popover-outputs.example.component\";\nexport * from \"./popover-visual-test/popover-visual-test.component\";\nexport * from \"./popover-unlimited/popover-unlimited.example.component\";\nexport * from \"./popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component\";\nexport * from \"./popover-status/popover-status.example.component\";\nexport * from \"./popover-debounce/popover-debounce.example.component\";\n");

/***/ }),

/***/ "7/Ha":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-prevent-close-on-click/popover-prevent-close-on-click.example.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-popover-prevent-close-on-click-example\",\n    templateUrl: \"./popover-prevent-close-on-click.example.component.html\",\n})\nexport class PopoverPreventCloseOnClickExampleComponent {\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n    };\n    public closePopoverSubject = new Subject();\n\n    public closePopover() {\n        this.closePopoverSubject.next();\n    }\n}\n");

/***/ }),

/***/ "7Ff3":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-outputs/popover-outputs.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover [template]=\"outputTemplate\"\n             (hidden)=\"onHide()\"\n             (shown)=\"onShow()\"\n             i18n>\n    Hover over me!\n</nui-popover>\n\n<ng-template #outputTemplate>\n    <div i18n>I'm shown! Just mouseleave to see me hide.</div>\n</ng-template>\n");

/***/ }),

/***/ "8Wm0":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-icon/popover-icon.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-popover icon=\"application\"\n                 [template]=\"iconPopoverTemplateNoTitle\"\n                 i18n>\n        Hover over me!\n    </nui-popover>\n</div>\n<div>\n    <nui-popover popoverTitle=\"Popover with Icon\"\n                 i18n-popoverTitle\n                 icon=\"application\"\n                 [template]=\"iconPopoverTemplateWithTitle\"\n                 i18n>\n        Hover over me, too!\n    </nui-popover>\n</div>\n\n<ng-template #iconPopoverTemplateNoTitle i18n>I have an application icon and no title!</ng-template>\n<ng-template #iconPopoverTemplateWithTitle i18n>I have an application icon and a title!</ng-template>\n");

/***/ }),

/***/ "96T2":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover id=\"nui-demo-popover-open-close-programmatically\"\n             popoverTitle=\"Opened Programmatically\"\n             i18n-popoverTitle\n             trigger=\"openPopoverSubject\"\n             [template]=\"popoverOpenClose\"\n             [openPopover]=\"openPopoverSubject\"\n             [closePopover]=\"closePopoverSubject\">\n    <span i18n>This popover will be triggered programmatically!</span>\n</nui-popover>\n\n<ng-template #popoverOpenClose>\n    <div id=\"nui-demo-popover-open-close\" i18n>\n        Hey, I'm opened programmatically.\n    </div>\n</ng-template>\n\n<div class=\"mt-2\">\n    <button id=\"nui-demo-popover-close-programmatically-btn\"\n            nui-button\n            type=\"button\"\n            (click)=\"closePopover()\"\n            i18n>Close popover</button>\n    <button id=\"nui-demo-popover-open-programmatically-btn\"\n            nui-button\n            class=\"ml-2\"\n            type=\"button\"\n            (click)=\"openPopover()\"\n            i18n>Open popover</button>\n</div>\n");

/***/ }),

/***/ "9XZJ":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-click-trigger/popover-click-trigger.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover popoverTitle=\"Popover with Click Trigger\"\n             i18n-popoverTitle\n             id=\"nui-demo-popover-onclick\"\n             trigger=\"click\"\n             [template]=\"popoverWithClickTrigger\">\n        <span i18n>Click me!</span>\n</nui-popover>\n\n<ng-template #popoverWithClickTrigger>\n    <div id=\"nui-demo-popover-modal-click\" i18n>Hi, I'm clicked!</div>\n</ng-template>\n");

/***/ }),

/***/ "9g3b":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-debounce/popover-debounce.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PopoverDebounceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDebounceExampleComponent", function() { return PopoverDebounceExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverDebounceExampleComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function PopoverDebounceExampleComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 10);
} }
function PopoverDebounceExampleComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 11);
} }
class PopoverDebounceExampleComponent {
}
PopoverDebounceExampleComponent.ɵfac = function PopoverDebounceExampleComponent_Factory(t) { return new (t || PopoverDebounceExampleComponent)(); };
PopoverDebounceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverDebounceExampleComponent, selectors: [["nui-popover-debounce-example"]], decls: 15, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8478023079854309700$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Hover over me 1st!");
        i18n_0 = MSG_EXTERNAL_8478023079854309700$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟9b63bc8fd3e1fe860ec20a84f76a3e28736c0797␟8478023079854309700:Hover over me 1st!`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3329365158926432941$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hover over me 2nd!");
        i18n_2 = MSG_EXTERNAL_3329365158926432941$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟5debf8a97b759bd4ac5e78451f574cce269d5dd3␟3329365158926432941:Hover over me 2nd!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9103135743375043916$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Hover over me 3rd!");
        i18n_4 = MSG_EXTERNAL_9103135743375043916$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟6f1901b8a39b6487a9e09fe3e357c1bcc9d38816␟9103135743375043916:Hover over me 3rd!`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8957030008703967817$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("{$startTagSpan}I'm the 1st implementation with the debounce!{$closeTagSpan}", { "startTagSpan": "\uFFFD#1\uFFFD", "closeTagSpan": "\uFFFD/#1\uFFFD" });
        i18n_6 = MSG_EXTERNAL_8957030008703967817$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟d35ab4fe1539c17ada9e25f1f05614b7ad55e405␟8957030008703967817:${"\uFFFD#1\uFFFD"}:START_TAG_SPAN:I'm the 1st implementation with the debounce!${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_SPAN:`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6780604070332311692$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" I'm the 2nd implementation with the debounce!\n");
        i18n_8 = MSG_EXTERNAL_6780604070332311692$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟17fe796c815e87fb6298e5637b065d0c1b7660ba␟6780604070332311692: I'm the 2nd implementation with the debounce!
`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5954004807252402815$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" I'm the 3rd implementation with the debounce!\n");
        i18n_10 = MSG_EXTERNAL_5954004807252402815$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DEBOUNCE_POPOVER_DEBOUNCE_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟a89e2c44e40902c4a65e3d9c2cc83395fce792f6␟5954004807252402815: I'm the 3rd implementation with the debounce!
`;
    } return [["id", "nui-demo-popover-debounce-1", 3, "template", "delay"], i18n_0, [3, "template", "delay"], i18n_2, i18n_4, ["popoverDebounce1st", ""], ["popoverDebounce2nd", ""], ["popoverDebounce3rd", ""], i18n_6, ["id", "nui-demo-popover-modal-debounce-1"], i18n_8, i18n_10]; }, template: function PopoverDebounceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-popover", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-popover", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PopoverDebounceExampleComponent_ng_template_9_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopoverDebounceExampleComponent_ng_template_11_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PopoverDebounceExampleComponent_ng_template_13_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0)("delay", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r2)("delay", 1000);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r4)("delay", 1000);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "AlDU":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDocsModule,\n    NuiPopoverModule,\n    NuiSelectModule,\n    NuiSelectV2Module,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    PopoverBasicUsageExampleComponent,\n    PopoverClickTriggerExampleComponent,\n    PopoverDebounceExampleComponent,\n    PopoverDisabledExampleComponent,\n    PopoverExampleComponent,\n    PopoverFocusTriggerExampleComponent,\n    PopoverIconExampleComponent,\n    PopoverModalExampleComponent,\n    PopoverMouseenterTriggerExampleComponent,\n    PopoverNoPaddingExampleComponent,\n    PopoverOpenAndCloseProgrammaticallyExampleComponent,\n    PopoverOutputsExampleComponent,\n    PopoverPlacementExampleComponent,\n    PopoverPreventCloseOnClickExampleComponent,\n    PopoverStatusExampleComponent,\n    PopoverUnlimitedExampleComponent,\n    PopoverVisualTestComponent,\n    PopoverWithContainerExampleComponent,\n    PopoverWithTitleExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: PopoverExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"popover-test\",\n        component: PopoverExampleComponent,\n    },\n    {\n        path: \"popover-visual-test\",\n        component: PopoverVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiPopoverModule,\n        NuiCheckboxModule,\n        NuiSelectModule,\n        NuiSelectV2Module,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        PopoverBasicUsageExampleComponent,\n        PopoverClickTriggerExampleComponent,\n        PopoverDisabledExampleComponent,\n        PopoverExampleComponent,\n        PopoverFocusTriggerExampleComponent,\n        PopoverIconExampleComponent,\n        PopoverModalExampleComponent,\n        PopoverMouseenterTriggerExampleComponent,\n        PopoverNoPaddingExampleComponent,\n        PopoverOutputsExampleComponent,\n        PopoverOpenAndCloseProgrammaticallyExampleComponent,\n        PopoverPlacementExampleComponent,\n        PopoverPreventCloseOnClickExampleComponent,\n        PopoverWithContainerExampleComponent,\n        PopoverWithTitleExampleComponent,\n        PopoverVisualTestComponent,\n        PopoverUnlimitedExampleComponent,\n        PopoverStatusExampleComponent,\n        PopoverDebounceExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class PopoverModule {\n}\n");

/***/ }),

/***/ "B6Eq":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-with-container/popover-with-container.example.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-with-container-example\",\n    templateUrl: \"./popover-with-container.example.component.html\",\n})\nexport class PopoverWithContainerExampleComponent {}\n");

/***/ }),

/***/ "CMW8":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-basic-usage/popover-basic-usage.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-basic-usage-example\",\n    templateUrl: \"./popover-basic-usage.example.component.html\",\n})\nexport class PopoverBasicUsageExampleComponent {}\n");

/***/ }),

/***/ "EZZh":
/*!***************************************************!*\
  !*** ./demo/src/components/demo/popover/index.ts ***!
  \***************************************************/
/*! exports provided: PopoverExampleComponent, PopoverDisabledExampleComponent, PopoverBasicUsageExampleComponent, PopoverNoPaddingExampleComponent, PopoverWithTitleExampleComponent, PopoverWithContainerExampleComponent, PopoverClickTriggerExampleComponent, PopoverFocusTriggerExampleComponent, PopoverMouseenterTriggerExampleComponent, PopoverIconExampleComponent, PopoverModalExampleComponent, PopoverPlacementExampleComponent, PopoverPreventCloseOnClickExampleComponent, PopoverOutputsExampleComponent, PopoverVisualTestComponent, PopoverUnlimitedExampleComponent, PopoverOpenAndCloseProgrammaticallyExampleComponent, PopoverStatusExampleComponent, PopoverDebounceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popover_docs_popover_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-docs/popover-docs.example.component */ "K+HX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverExampleComponent", function() { return _popover_docs_popover_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["PopoverExampleComponent"]; });

/* harmony import */ var _popover_disabled_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-disabled/popover-disabled.example.component */ "Wwgo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDisabledExampleComponent", function() { return _popover_disabled_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_1__["PopoverDisabledExampleComponent"]; });

/* harmony import */ var _popover_basic_usage_popover_basic_usage_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-basic-usage/popover-basic-usage.example.component */ "jiS0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverBasicUsageExampleComponent", function() { return _popover_basic_usage_popover_basic_usage_example_component__WEBPACK_IMPORTED_MODULE_2__["PopoverBasicUsageExampleComponent"]; });

/* harmony import */ var _popover_no_padding_popover_no_padding_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-no-padding/popover-no-padding.example.component */ "SNXf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverNoPaddingExampleComponent", function() { return _popover_no_padding_popover_no_padding_example_component__WEBPACK_IMPORTED_MODULE_3__["PopoverNoPaddingExampleComponent"]; });

/* harmony import */ var _popover_with_title_popover_with_title_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-with-title/popover-with-title.example.component */ "q7yg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverWithTitleExampleComponent", function() { return _popover_with_title_popover_with_title_example_component__WEBPACK_IMPORTED_MODULE_4__["PopoverWithTitleExampleComponent"]; });

/* harmony import */ var _popover_with_container_popover_with_container_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-with-container/popover-with-container.example.component */ "GWmS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverWithContainerExampleComponent", function() { return _popover_with_container_popover_with_container_example_component__WEBPACK_IMPORTED_MODULE_5__["PopoverWithContainerExampleComponent"]; });

/* harmony import */ var _popover_click_trigger_popover_click_trigger_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover-click-trigger/popover-click-trigger.example.component */ "hxdJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverClickTriggerExampleComponent", function() { return _popover_click_trigger_popover_click_trigger_example_component__WEBPACK_IMPORTED_MODULE_6__["PopoverClickTriggerExampleComponent"]; });

/* harmony import */ var _popover_focus_trigger_popover_focus_trigger_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover-focus-trigger/popover-focus-trigger.example.component */ "21Ez");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverFocusTriggerExampleComponent", function() { return _popover_focus_trigger_popover_focus_trigger_example_component__WEBPACK_IMPORTED_MODULE_7__["PopoverFocusTriggerExampleComponent"]; });

/* harmony import */ var _popover_mouseenter_trigger_popover_mouseenter_trigger_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popover-mouseenter-trigger/popover-mouseenter-trigger.example.component */ "oIgB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverMouseenterTriggerExampleComponent", function() { return _popover_mouseenter_trigger_popover_mouseenter_trigger_example_component__WEBPACK_IMPORTED_MODULE_8__["PopoverMouseenterTriggerExampleComponent"]; });

/* harmony import */ var _popover_icon_popover_icon_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popover-icon/popover-icon.example.component */ "b5N+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverIconExampleComponent", function() { return _popover_icon_popover_icon_example_component__WEBPACK_IMPORTED_MODULE_9__["PopoverIconExampleComponent"]; });

/* harmony import */ var _popover_modal_popover_modal_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover-modal/popover-modal.example.component */ "zbu8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModalExampleComponent", function() { return _popover_modal_popover_modal_example_component__WEBPACK_IMPORTED_MODULE_10__["PopoverModalExampleComponent"]; });

/* harmony import */ var _popover_placement_popover_placement_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popover-placement/popover-placement.example.component */ "PtQR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverPlacementExampleComponent", function() { return _popover_placement_popover_placement_example_component__WEBPACK_IMPORTED_MODULE_11__["PopoverPlacementExampleComponent"]; });

/* harmony import */ var _popover_prevent_close_on_click_popover_prevent_close_on_click_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./popover-prevent-close-on-click/popover-prevent-close-on-click.example.component */ "qD/J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverPreventCloseOnClickExampleComponent", function() { return _popover_prevent_close_on_click_popover_prevent_close_on_click_example_component__WEBPACK_IMPORTED_MODULE_12__["PopoverPreventCloseOnClickExampleComponent"]; });

/* harmony import */ var _popover_outputs_popover_outputs_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popover-outputs/popover-outputs.example.component */ "rpyR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverOutputsExampleComponent", function() { return _popover_outputs_popover_outputs_example_component__WEBPACK_IMPORTED_MODULE_13__["PopoverOutputsExampleComponent"]; });

/* harmony import */ var _popover_visual_test_popover_visual_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./popover-visual-test/popover-visual-test.component */ "wpne");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverVisualTestComponent", function() { return _popover_visual_test_popover_visual_test_component__WEBPACK_IMPORTED_MODULE_14__["PopoverVisualTestComponent"]; });

/* harmony import */ var _popover_unlimited_popover_unlimited_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popover-unlimited/popover-unlimited.example.component */ "ZeBf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverUnlimitedExampleComponent", function() { return _popover_unlimited_popover_unlimited_example_component__WEBPACK_IMPORTED_MODULE_15__["PopoverUnlimitedExampleComponent"]; });

/* harmony import */ var _popover_open_and_close_programmatically_popover_open_and_close_programmatically_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component */ "mnIO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverOpenAndCloseProgrammaticallyExampleComponent", function() { return _popover_open_and_close_programmatically_popover_open_and_close_programmatically_example_component__WEBPACK_IMPORTED_MODULE_16__["PopoverOpenAndCloseProgrammaticallyExampleComponent"]; });

/* harmony import */ var _popover_status_popover_status_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./popover-status/popover-status.example.component */ "H/uS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverStatusExampleComponent", function() { return _popover_status_popover_status_example_component__WEBPACK_IMPORTED_MODULE_17__["PopoverStatusExampleComponent"]; });

/* harmony import */ var _popover_debounce_popover_debounce_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./popover-debounce/popover-debounce.example.component */ "9g3b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDebounceExampleComponent", function() { return _popover_debounce_popover_debounce_example_component__WEBPACK_IMPORTED_MODULE_18__["PopoverDebounceExampleComponent"]; });






















/***/ }),

/***/ "GWmS":
/*!*************************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-with-container/popover-with-container.example.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PopoverWithContainerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverWithContainerExampleComponent", function() { return PopoverWithContainerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverWithContainerExampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 5);
} }
class PopoverWithContainerExampleComponent {
}
PopoverWithContainerExampleComponent.ɵfac = function PopoverWithContainerExampleComponent_Factory(t) { return new (t || PopoverWithContainerExampleComponent)(); };
PopoverWithContainerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverWithContainerExampleComponent, selectors: [["nui-popover-with-container-example"]], decls: 6, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_CONTAINER_POPOVER_WITH_CONTAINER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me!\n");
        i18n_0 = MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_CONTAINER_POPOVER_WITH_CONTAINER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟56700cf447d42925391735d49215301d03ee19f7␟3181889294487144022: Hover over me!
`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7410052246225172357$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_CONTAINER_POPOVER_WITH_CONTAINER_EXAMPLE_COMPONENT_TS__3 = goog.getMsg(" I'm appended to a container!\n");
        i18n_2 = MSG_EXTERNAL_7410052246225172357$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_CONTAINER_POPOVER_WITH_CONTAINER_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟f05cbef541d79151a66653162260768aedd8410c␟7410052246225172357: I'm appended to a container!
`;
    } return [["id", "nui-demo-popover-container"], ["popoverContainer", ""], ["id", "nui-demo-popover-with-container", 3, "container", "template"], i18n_0, ["popoverWithContainerTemplate", ""], i18n_2]; }, template: function PopoverWithContainerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-popover", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopoverWithContainerExampleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("container", _r0)("template", _r1);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "H/uS":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-status/popover-status.example.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PopoverStatusExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverStatusExampleComponent", function() { return PopoverStatusExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverStatusExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
class PopoverStatusExampleComponent {
}
PopoverStatusExampleComponent.ɵfac = function PopoverStatusExampleComponent_Factory(t) { return new (t || PopoverStatusExampleComponent)(); };
PopoverStatusExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverStatusExampleComponent, selectors: [["nui-popover-status-example"]], decls: 4, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_STATUS_POPOVER_STATUS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me!\n");
        i18n_0 = MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_STATUS_POPOVER_STATUS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟56700cf447d42925391735d49215301d03ee19f7␟3181889294487144022: Hover over me!
`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5144903362112685252$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_STATUS_POPOVER_STATUS_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("{$startTagDiv}{$startTagNuiIcon}{$closeTagNuiIcon}{$startTagSpan}Here goes the title!{$closeTagSpan}{$closeTagDiv}{$startTagDiv_1} I'm implemented to show how to create popover with status! {$closeTagDiv}", { "startTagDiv": "\uFFFD#1\uFFFD", "startTagNuiIcon": "\uFFFD#2\uFFFD", "closeTagNuiIcon": "\uFFFD/#2\uFFFD", "startTagSpan": "\uFFFD#3\uFFFD", "closeTagSpan": "\uFFFD/#3\uFFFD", "closeTagDiv": "[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]", "startTagDiv_1": "\uFFFD#4\uFFFD" });
        i18n_2 = MSG_EXTERNAL_5144903362112685252$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_STATUS_POPOVER_STATUS_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟c8f42c842a27c14584c20d18c824ed56244987c5␟5144903362112685252:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_NUI_ICON:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_NUI_ICON:${"\uFFFD#3\uFFFD"}:START_TAG_SPAN:Here goes the title!${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_SPAN:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#4\uFFFD"}:START_TAG_DIV_1: I'm implemented to show how to create popover with status! ${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_DIV:`;
    } i18n_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_2); return [[3, "hasPadding", "template"], i18n_0, ["popoverWithStatus", ""], i18n_2, [1, "example-popover-header"], ["icon", "application", "status", "critical", 1, "a"], [1, "ml-2"], [1, "example-popover-body"]]; }, template: function PopoverStatusExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverStatusExampleComponent_ng_template_2_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasPadding", false)("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "IheK":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-click-trigger/popover-click-trigger.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-click-trigger-example\",\n    templateUrl: \"./popover-click-trigger.example.component.html\",\n})\nexport class PopoverClickTriggerExampleComponent {}\n");

/***/ }),

/***/ "ItgN":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-status/popover-status.example.component.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n\n.example-popover {\n    &-body {\n        padding: @nui-space-sm;\n    }\n\n    &-header {\n        display: flex;\n        align-items: center;\n        font-size: @nui-font-size-default;\n        font-weight: @nui-font-weight-semibold;\n        border-bottom: @nui-line-medium solid @nui-color-line-critical;\n        border-bottom: @nui-line-medium solid var(--nui-color-line-critical, @nui-color-line-critical);\n        padding: @nui-space-sm;\n    }\n}\n\n");

/***/ }),

/***/ "JIV6":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-visual-test/popover-visual-test.component.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 60px;\n}\n\n.large-height {\n    height: 150px;\n}");

/***/ }),

/***/ "Jiex":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-placement/popover-placement.example.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-3\">\n        <nui-popover popoverTitle=\"Popover with Right Placement\"\n                     i18n-popoverTitle\n                     id=\"nui-demo-popover-placement-right\"\n                     [template]=\"rightPlacementTemplate\"\n                     placement=\"right\"\n                     trigger=\"click\">\n            <button nui-button type=\"button\" i18n>\n                open right\n            </button>\n        </nui-popover>\n    </div>\n    <div class=\"col-3\">\n        <nui-popover popoverTitle=\"Popover with Left Placement\"\n                     i18n-popoverTitle\n                     placement=\"left\"\n                     id=\"nui-demo-popover-placement-left\"\n                     [template]=\"leftPlacementTemplate\"\n                     trigger=\"click\">\n            <button nui-button type=\"button\" i18n >\n                open left\n            </button>\n        </nui-popover>\n    </div>\n    <div class=\"col-3\">\n        <nui-popover popoverTitle=\"Popover with Top Placement\"\n                     i18n-popoverTitle\n                     id=\"nui-demo-popover-placement-top\"\n                     placement=\"top\"\n                     [template]=\"topPlacementTemplate\"\n                     trigger=\"click\">\n            <button nui-button type=\"button\" i18n>\n                open top\n            </button>\n        </nui-popover>\n    </div>\n    <div class=\"col-3\">\n        <nui-popover popoverTitle=\"Popover with Bottom Placement\"\n                     i18n-popoverTitle\n                     id=\"nui-demo-popover-placement-bottom\"\n                     [template]=\"bottomPlacementTemplate\"\n                     placement=\"bottom\"\n                     trigger=\"click\">\n            <button nui-button type=\"button\" i18n>\n                open bottom\n            </button>\n        </nui-popover>\n    </div>\n</div>\n\n\n<ng-template #rightPlacementTemplate>\n    <span id=\"nui-demo-popover-modal-placement-right\" i18n>\n         I'm shown on the right of the button.\n    </span>\n</ng-template>\n<ng-template #leftPlacementTemplate>\n    <span id=\"nui-demo-popover-modal-placement-left\" i18n>\n        I'm shown on the left of the button.\n    </span>\n</ng-template>\n<ng-template #topPlacementTemplate>\n    <span id=\"nui-demo-popover-modal-placement-top\" i18n>\n         I'm shown on top of the button.\n    </span>\n</ng-template>\n<ng-template #bottomPlacementTemplate>\n    <span id=\"nui-demo-popover-modal-placement-bottom\" i18n>\n        I'm shown under the button.\n    </span>\n</ng-template>\n");

/***/ }),

/***/ "K+HX":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-docs/popover-docs.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PopoverExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverExampleComponent", function() { return PopoverExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _popover_basic_usage_popover_basic_usage_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popover-basic-usage/popover-basic-usage.example.component */ "jiS0");
/* harmony import */ var _popover_debounce_popover_debounce_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popover-debounce/popover-debounce.example.component */ "9g3b");
/* harmony import */ var _popover_with_title_popover_with_title_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popover-with-title/popover-with-title.example.component */ "q7yg");
/* harmony import */ var _popover_click_trigger_popover_click_trigger_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover-click-trigger/popover-click-trigger.example.component */ "hxdJ");
/* harmony import */ var _popover_mouseenter_trigger_popover_mouseenter_trigger_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover-mouseenter-trigger/popover-mouseenter-trigger.example.component */ "oIgB");
/* harmony import */ var _popover_focus_trigger_popover_focus_trigger_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover-focus-trigger/popover-focus-trigger.example.component */ "21Ez");
/* harmony import */ var _popover_prevent_close_on_click_popover_prevent_close_on_click_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover-prevent-close-on-click/popover-prevent-close-on-click.example.component */ "qD/J");
/* harmony import */ var _popover_with_container_popover_with_container_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popover-with-container/popover-with-container.example.component */ "GWmS");
/* harmony import */ var _popover_no_padding_popover_no_padding_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popover-no-padding/popover-no-padding.example.component */ "SNXf");
/* harmony import */ var _popover_unlimited_popover_unlimited_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../popover-unlimited/popover-unlimited.example.component */ "ZeBf");
/* harmony import */ var _popover_outputs_popover_outputs_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../popover-outputs/popover-outputs.example.component */ "rpyR");
/* harmony import */ var _popover_placement_popover_placement_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../popover-placement/popover-placement.example.component */ "PtQR");
/* harmony import */ var _popover_icon_popover_icon_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../popover-icon/popover-icon.example.component */ "b5N+");
/* harmony import */ var _popover_status_popover_status_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../popover-status/popover-status.example.component */ "H/uS");
/* harmony import */ var _popover_modal_popover_modal_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../popover-modal/popover-modal.example.component */ "zbu8");
/* harmony import */ var _popover_disabled_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../popover-disabled/popover-disabled.example.component */ "Wwgo");
/* harmony import */ var _popover_open_and_close_programmatically_popover_open_and_close_programmatically_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component */ "mnIO");



















class PopoverExampleComponent {
}
PopoverExampleComponent.ɵfac = function PopoverExampleComponent_Factory(t) { return new (t || PopoverExampleComponent)(); };
PopoverExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverExampleComponent, selectors: [["nui-popover-docs-example"]], decls: 247, vars: 0, consts: [["filenamePrefix", "popover-basic-usage", "exampleTitle", "Basic Usage"], ["filenamePrefix", "popover-debounce", "exampleTitle", "Popover Debounce"], ["filenamePrefix", "popover-with-title", "exampleTitle", "Popover with Title"], ["filenamePrefix", "popover-click-trigger", "exampleTitle", "Click"], ["filenamePrefix", "popover-mouseenter-trigger", "exampleTitle", "Mouse Enter"], ["filenamePrefix", "popover-focus-trigger", "exampleTitle", "Focus"], ["filenamePrefix", "popover-prevent-close-on-click", "exampleTitle", "Prevent Closing on Click"], ["filenamePrefix", "popover-with-container", "exampleTitle", "Appending to a Container"], ["filenamePrefix", "popover-no-padding", "exampleTitle", "Removing Padding"], ["filenamePrefix", "popover-unlimited", "exampleTitle", "Removing Width and Height Limitations"], ["filenamePrefix", "popover-outputs", "exampleTitle", "Show and Hide"], ["filenamePrefix", "popover-placement", "exampleTitle", "Right or Left"], ["filenamePrefix", "popover-icon", "exampleTitle", "Icon"], ["filenamePrefix", "popover-status", "exampleTitle", "Status"], ["filenamePrefix", "popover-modal", "exampleTitle", "Modal Mode"], ["filenamePrefix", "popover-disabled", "exampleTitle", "Disabled"], ["filenamePrefix", "popover-open-and-close-programmatically", "exampleTitle", "Opening and Closing Popover Programmatically"]], template: function PopoverExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-popover>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is a popup control that can contain any HTML markup and be applied to block or in-line elements. It can basically be thought of as a more data-rich tooltip.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NuiPopoverModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " A simple popover can be added to the page by adding an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "<nui-popover>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " element and passing a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "TemplateRef<string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " value to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " input. The provided template serves as the popover's body content. The simplest way to do this is to create an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " element and pass its template reference variable name to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-popover-basic-usage-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Debounced Displaying");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "To debounce the displaying of the tooltip provide the time in milliseconds via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "delay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-popover-debounce-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Adding a Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "To add a title to the popover, pass a string via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "popoverTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " If you need to hide overflow of long strings (for example long url) just wrap your popover content with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " which has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "overflow: hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-popover-with-title-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Note: Popover must be used as an attribute when the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " input is set to 'focus'. See the focus example under ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Trigger Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Trigger Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Popover supports four trigger events: 'click' | 'mouseenter' | 'mouseleave' | 'focus'. To specify a trigger, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " input to one or more of the supported events. If no event is not specified, 'mouseenter' will be used as the default.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "A popover can be configured to react to more than one event by specifying multiple trigger events as in the example below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "trigger='click mouseenter'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "nui-popover-click-trigger-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nui-popover-mouseenter-trigger-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "nui-popover-focus-trigger-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Note: The 'focus' trigger is only available when Popover is used as an attribute. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Usage as an Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " above. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Prevent Closing on Click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " To allow the user to interact with components within the popover such as a checkbox, link, etc. and prevent the popover from closing when this content is cli\u0441ked, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "preventClosing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " input to true. The default value is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " In this case popover can be closed via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "nuiClosePopover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " subject that you provide to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "nuiPopoverDirective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "closePopover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "PopoverComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, ". So when you need to close popover you just call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "next()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " method of this subject. No arguments are required.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "nui-popover-prevent-close-on-click-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Appending to a Container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Passing an HTMLElement via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " input tells the popover which element to append itself to. By default the popover is appended to the document body. The simplest way to do this is to append an Angular template reference variable name to the container element and pass the name to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "nui-popover-with-container-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Removing Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "hasPadding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " input to false removes all padding from the popover body. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "hasPadding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " is true by default.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "nui-popover-no-padding-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Removing Width and Height Limitations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " input to true removes all maximum and minimum limitations for width and height of the popover body. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "unlimited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " is false by default.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "nui-example-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "nui-popover-unlimited-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Outputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "(shown)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " output emits an event upon display of the popover.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "(hidden)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " output emits an event upon disappearance of the popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "nui-popover-outputs-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " To specify placement of popover set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "placement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " input to 'left', 'right', 'top' or 'bottom'. The default is 'right'.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "nui-example-wrapper", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "nui-popover-placement-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Note: Popover adapts to available space around it. So, if you set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "placement=\"left\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " but there is not enough free space on the left, the popover will be displayed to the right instead.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Icon/Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Pass an icon name to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " input to display an icon in the popover.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " If the popover has a title, the icon will display to the left of the title. If, however, the popover does not have a title, the icon will be displayed to the left of the popover body.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " If you want to use popover with status indicator overlay and underline, you can achieve it by writing your own markup like in the example below.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "nui-example-wrapper", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "nui-popover-icon-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "nui-example-wrapper", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "nui-popover-status-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Modal Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " To display a popover in a modal style (with a darkened backdrop between the page and the popover) set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " input to true.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "nui-example-wrapper", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "nui-popover-modal-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " To prevent popover from showing set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " input to true\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "nui-example-wrapper", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "nui-popover-disabled-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Opening and Closing Popover Programmatically");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " To open or close popover programmatically do next steps:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "trigger=\"openPopoverSubject\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " as input to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "[closePopover]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "[openPopover]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " inputs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Do ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "this.openPopoverSubject.next()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "this.closePopoverSubject.next()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " on needed event to trigger popover. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "nui-example-wrapper", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "nui-popover-open-and-close-programmatically-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _popover_basic_usage_popover_basic_usage_example_component__WEBPACK_IMPORTED_MODULE_2__["PopoverBasicUsageExampleComponent"], _popover_debounce_popover_debounce_example_component__WEBPACK_IMPORTED_MODULE_3__["PopoverDebounceExampleComponent"], _popover_with_title_popover_with_title_example_component__WEBPACK_IMPORTED_MODULE_4__["PopoverWithTitleExampleComponent"], _popover_click_trigger_popover_click_trigger_example_component__WEBPACK_IMPORTED_MODULE_5__["PopoverClickTriggerExampleComponent"], _popover_mouseenter_trigger_popover_mouseenter_trigger_example_component__WEBPACK_IMPORTED_MODULE_6__["PopoverMouseenterTriggerExampleComponent"], _popover_focus_trigger_popover_focus_trigger_example_component__WEBPACK_IMPORTED_MODULE_7__["PopoverFocusTriggerExampleComponent"], _popover_prevent_close_on_click_popover_prevent_close_on_click_example_component__WEBPACK_IMPORTED_MODULE_8__["PopoverPreventCloseOnClickExampleComponent"], _popover_with_container_popover_with_container_example_component__WEBPACK_IMPORTED_MODULE_9__["PopoverWithContainerExampleComponent"], _popover_no_padding_popover_no_padding_example_component__WEBPACK_IMPORTED_MODULE_10__["PopoverNoPaddingExampleComponent"], _popover_unlimited_popover_unlimited_example_component__WEBPACK_IMPORTED_MODULE_11__["PopoverUnlimitedExampleComponent"], _popover_outputs_popover_outputs_example_component__WEBPACK_IMPORTED_MODULE_12__["PopoverOutputsExampleComponent"], _popover_placement_popover_placement_example_component__WEBPACK_IMPORTED_MODULE_13__["PopoverPlacementExampleComponent"], _popover_icon_popover_icon_example_component__WEBPACK_IMPORTED_MODULE_14__["PopoverIconExampleComponent"], _popover_status_popover_status_example_component__WEBPACK_IMPORTED_MODULE_15__["PopoverStatusExampleComponent"], _popover_modal_popover_modal_example_component__WEBPACK_IMPORTED_MODULE_16__["PopoverModalExampleComponent"], _popover_disabled_popover_disabled_example_component__WEBPACK_IMPORTED_MODULE_17__["PopoverDisabledExampleComponent"], _popover_open_and_close_programmatically_popover_open_and_close_programmatically_example_component__WEBPACK_IMPORTED_MODULE_18__["PopoverOpenAndCloseProgrammaticallyExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "PtQR":
/*!***************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-placement/popover-placement.example.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PopoverPlacementExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPlacementExampleComponent", function() { return PopoverPlacementExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");



function PopoverPlacementExampleComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverPlacementExampleComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverPlacementExampleComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopoverPlacementExampleComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopoverPlacementExampleComponent {
}
PopoverPlacementExampleComponent.ɵfac = function PopoverPlacementExampleComponent_Factory(t) { return new (t || PopoverPlacementExampleComponent)(); };
PopoverPlacementExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverPlacementExampleComponent, selectors: [["nui-popover-placement-example"]], decls: 25, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5568721703970561944$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Popover with Right Placement");
        i18n_0 = MSG_EXTERNAL_5568721703970561944$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f20cbd8e2aca68de26b1222ae2d797d7712bc91e␟5568721703970561944:Popover with Right Placement`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9109670669306520162$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" open right ");
        i18n_2 = MSG_EXTERNAL_9109670669306520162$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟3601ac479326874da8e96fa8f78aadf2a1fd83bc␟9109670669306520162: open right `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1689603886268417550$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Popover with Left Placement");
        i18n_4 = MSG_EXTERNAL_1689603886268417550$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟32f6f4418b76c109765c42e0483f6c3dad6ab8f5␟1689603886268417550:Popover with Left Placement`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2841762789843668102$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" open left ");
        i18n_6 = MSG_EXTERNAL_2841762789843668102$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟cd3617827137fab82be6c25fa9d1cc4ac5b66607␟2841762789843668102: open left `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5111770527831168980$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Popover with Top Placement");
        i18n_8 = MSG_EXTERNAL_5111770527831168980$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟adfb24f135cb929b3b7c963930a6ab4260fee0d8␟5111770527831168980:Popover with Top Placement`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1382724834799742906$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_11 = goog.getMsg(" open top ");
        i18n_10 = MSG_EXTERNAL_1382724834799742906$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟dd4db98f4a619d1db8407035013b2da691d3c5b6␟1382724834799742906: open top `;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4665827471351057652$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Popover with Bottom Placement");
        i18n_12 = MSG_EXTERNAL_4665827471351057652$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟26c2b0e47e115f829853cfba6c4eabad59a627de␟4665827471351057652:Popover with Bottom Placement`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3779635785397297923$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_15 = goog.getMsg(" open bottom ");
        i18n_14 = MSG_EXTERNAL_3779635785397297923$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟e0648d1ff51b004c4ecdc39b7b6b1342687455af␟3779635785397297923: open bottom `;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1543283137415394045$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__17 = goog.getMsg(" I'm shown on the right of the button. ");
        i18n_16 = MSG_EXTERNAL_1543283137415394045$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:␟cb5187435c157eb6788d8576d2b20e4e5f7a5bf4␟1543283137415394045: I'm shown on the right of the button. `;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4229202210716919099$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__19 = goog.getMsg(" I'm shown on the left of the button. ");
        i18n_18 = MSG_EXTERNAL_4229202210716919099$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:␟ae8409a091a5ad9c302c51f673fdd456f1cfb9c1␟4229202210716919099: I'm shown on the left of the button. `;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5866958120626935488$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__21 = goog.getMsg(" I'm shown on top of the button. ");
        i18n_20 = MSG_EXTERNAL_5866958120626935488$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__21;
    }
    else {
        i18n_20 = $localize `:␟22867fad62db59a17b2c4e65e3661bce836bcff0␟5866958120626935488: I'm shown on top of the button. `;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8713601701275372119$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__23 = goog.getMsg(" I'm shown under the button. ");
        i18n_22 = MSG_EXTERNAL_8713601701275372119$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PLACEMENT_POPOVER_PLACEMENT_EXAMPLE_COMPONENT_TS__23;
    }
    else {
        i18n_22 = $localize `:␟0041e2f6ef701f972c8862dccb55e8e09855aadd␟8713601701275372119: I'm shown under the button. `;
    } return [[1, "row"], [1, "col-3"], ["popoverTitle", i18n_0, "id", "nui-demo-popover-placement-right", "placement", "right", "trigger", "click", 3, "template"], ["nui-button", "", "type", "button"], i18n_2, ["popoverTitle", i18n_4, "placement", "left", "id", "nui-demo-popover-placement-left", "trigger", "click", 3, "template"], i18n_6, ["popoverTitle", i18n_8, "id", "nui-demo-popover-placement-top", "placement", "top", "trigger", "click", 3, "template"], i18n_10, ["popoverTitle", i18n_12, "id", "nui-demo-popover-placement-bottom", "placement", "bottom", "trigger", "click", 3, "template"], i18n_14, ["rightPlacementTemplate", ""], ["leftPlacementTemplate", ""], ["topPlacementTemplate", ""], ["bottomPlacementTemplate", ""], ["id", "nui-demo-popover-modal-placement-right"], i18n_16, ["id", "nui-demo-popover-modal-placement-left"], i18n_18, ["id", "nui-demo-popover-modal-placement-top"], i18n_20, ["id", "nui-demo-popover-modal-placement-bottom"], i18n_22]; }, template: function PopoverPlacementExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-popover", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-popover", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-popover", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-popover", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PopoverPlacementExampleComponent_ng_template_17_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PopoverPlacementExampleComponent_ng_template_19_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PopoverPlacementExampleComponent_ng_template_21_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PopoverPlacementExampleComponent_ng_template_23_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r6);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Q5dp":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-disabled/popover-disabled.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover popoverTitle=\"Disabled Popover\"\n             i18n-popoverTitle\n             id=\"nui-demo-popover-disabled\"\n             trigger=\"click\"\n             [disabled]=\"disabled\"\n             [template]=\"popoverDisabled\">\n    <button nui-button type=\"button\">\n        <span i18n>Click me!</span>\n    </button>\n</nui-popover>\n\n<div class=\"mt-2\">\n    <button id=\"nui-disable-popover-toggle\" nui-button type=\"button\" (click)=\"changeStatus()\">\n        {{buttonName}}\n    </button>\n</div>\n<ng-template #popoverDisabled>\n    <div id=\"nui-demo-popover-modal-disabled\" i18n>Hi, I'm clicked after being enabled!</div>\n</ng-template>\n");

/***/ }),

/***/ "RuwF":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-modal/popover-modal.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-popover-modal-example\",\n    templateUrl: \"./popover-modal.example.component.html\",\n})\nexport class PopoverModalExampleComponent {\n    public closePopoverSubject: Subject<void> = new Subject<void>();\n\n    public closePopover() {\n        this.closePopoverSubject.next();\n    }\n}\n");

/***/ }),

/***/ "SNXf":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-no-padding/popover-no-padding.example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PopoverNoPaddingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverNoPaddingExampleComponent", function() { return PopoverNoPaddingExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverNoPaddingExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 2);
} }
class PopoverNoPaddingExampleComponent {
}
PopoverNoPaddingExampleComponent.ɵfac = function PopoverNoPaddingExampleComponent_Factory(t) { return new (t || PopoverNoPaddingExampleComponent)(); };
PopoverNoPaddingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverNoPaddingExampleComponent, selectors: [["nui-popover-no-padding-example"]], decls: 4, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4906836318086108891$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_NO_PADDING_POPOVER_NO_PADDING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("My body has no padding");
        i18n_0 = MSG_EXTERNAL_4906836318086108891$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_NO_PADDING_POPOVER_NO_PADDING_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟91a09137381c6748665acb77b51d2bda4c3e7c3f␟4906836318086108891:My body has no padding`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5421529722264500812$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_NO_PADDING_POPOVER_NO_PADDING_EXAMPLE_COMPONENT_TS__3 = goog.getMsg(" I lack padding because I'm configured that way.\n");
        i18n_2 = MSG_EXTERNAL_5421529722264500812$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_NO_PADDING_POPOVER_NO_PADDING_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟fb6afa4eccffab454eb715319ae8ae786b3c45e1␟5421529722264500812: I lack padding because I'm configured that way.
`;
    } return [["popoverTitle", i18n_0, 3, "hasPadding", "template"], ["popoverNoPadding", ""], i18n_2]; }, template: function PopoverNoPaddingExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hover over me!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverNoPaddingExampleComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasPadding", false)("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Vqwv":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-no-padding/popover-no-padding.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-no-padding-example\",\n    templateUrl: \"./popover-no-padding.example.component.html\",\n})\nexport class PopoverNoPaddingExampleComponent {}\n");

/***/ }),

/***/ "Wwgo":
/*!*************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-disabled/popover-disabled.example.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PopoverDisabledExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDisabledExampleComponent", function() { return PopoverDisabledExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");



function PopoverDisabledExampleComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopoverDisabledExampleComponent {
    constructor() {
        this.disabled = false;
        this.buttonName = $localize `Disable`;
    }
    changeStatus() {
        this.disabled = !this.disabled;
        this.buttonName = this.disabled ? $localize `Enable` : $localize `Disable`;
    }
}
PopoverDisabledExampleComponent.ɵfac = function PopoverDisabledExampleComponent_Factory(t) { return new (t || PopoverDisabledExampleComponent)(); };
PopoverDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverDisabledExampleComponent, selectors: [["nui-popover-disabled-example"]], decls: 9, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7876592355320106819$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DISABLED_POPOVER_DISABLED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Disabled Popover");
        i18n_0 = MSG_EXTERNAL_7876592355320106819$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DISABLED_POPOVER_DISABLED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟a3e0cbc976bf6fbc1af57a1cea2d882a6ae7d8c9␟7876592355320106819:Disabled Popover`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DISABLED_POPOVER_DISABLED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Click me!");
        i18n_2 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DISABLED_POPOVER_DISABLED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3659313151859757832$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DISABLED_POPOVER_DISABLED_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Hi, I'm clicked after being enabled!");
        i18n_4 = MSG_EXTERNAL_3659313151859757832$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_DISABLED_POPOVER_DISABLED_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟6968be280ae7d44598db581e4ba5af07bb2fb100␟3659313151859757832:Hi, I'm clicked after being enabled!`;
    } return [["popoverTitle", i18n_0, "id", "nui-demo-popover-disabled", "trigger", "click", 3, "disabled", "template"], ["nui-button", "", "type", "button"], i18n_2, [1, "mt-2"], ["id", "nui-disable-popover-toggle", "nui-button", "", "type", "button", 3, "click"], ["popoverDisabled", ""], ["id", "nui-demo-popover-modal-disabled"], i18n_4]; }, template: function PopoverDisabledExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDisabledExampleComponent_Template_button_click_5_listener() { return ctx.changeStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopoverDisabledExampleComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("template", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonName, " ");
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "XhPB":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-mouseenter-trigger/popover-mouseenter-trigger.example.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-mouseenter-trigger-example\",\n    templateUrl: \"./popover-mouseenter-trigger.example.component.html\",\n})\nexport class PopoverMouseenterTriggerExampleComponent {}\n");

/***/ }),

/***/ "YfJk":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-placement/popover-placement.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-placement-example\",\n    templateUrl: \"./popover-placement.example.component.html\",\n})\nexport class PopoverPlacementExampleComponent {}\n");

/***/ }),

/***/ "ZeBf":
/*!***************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-unlimited/popover-unlimited.example.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PopoverUnlimitedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverUnlimitedExampleComponent", function() { return PopoverUnlimitedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverUnlimitedExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 6);
} }
function PopoverUnlimitedExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
class PopoverUnlimitedExampleComponent {
}
PopoverUnlimitedExampleComponent.ɵfac = function PopoverUnlimitedExampleComponent_Factory(t) { return new (t || PopoverUnlimitedExampleComponent)(); };
PopoverUnlimitedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverUnlimitedExampleComponent, selectors: [["nui-popover-unlimited-example"]], decls: 10, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5596597027159403995$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me! ");
        i18n_0 = MSG_EXTERNAL_5596597027159403995$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟a8f2d0aae406c5c4786e652a2fe0dd13349b29cf␟5596597027159403995: Hover over me! `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5596597027159403995$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Hover over me! ");
        i18n_2 = MSG_EXTERNAL_5596597027159403995$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟a8f2d0aae406c5c4786e652a2fe0dd13349b29cf␟5596597027159403995: Hover over me! `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3741737015191401759$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" I'm implemented without restrictions on my width and height! That's why I'm taking up as much space as I have available on the page. Expand my source code above to see how!\n");
        i18n_4 = MSG_EXTERNAL_3741737015191401759$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟a951792f8d4c72b4f13d6217c4d03ceaa8265981␟3741737015191401759: I'm implemented without restrictions on my width and height! That's why I'm taking up as much space as I have available on the page. Expand my source code above to see how!
`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_466849726805472650$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" I'm implemented with respect to the default {$startTagCode}max-width{$closeTagCode} and {$startTagCode}max-height{$closeTagCode} restrictions defined by the Nova Design Language! That's why my text will nicely wrap when it exceeds the {$startTagCode}max-width{$closeTagCode} limit. Expand my source code above to see how!\n", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" });
        i18n_6 = MSG_EXTERNAL_466849726805472650$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_UNLIMITED_POPOVER_UNLIMITED_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟eca07eb3748bad054d705806303eaf403caa42cd␟466849726805472650: I'm implemented with respect to the default ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:max-width${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:max-height${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: restrictions defined by the Nova Design Language! That's why my text will nicely wrap when it exceeds the ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:max-width${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: limit. Expand my source code above to see how!
`;
    } i18n_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_6); return [[3, "template", "unlimited"], i18n_0, [3, "template"], i18n_2, ["popoverUnlimited", ""], ["popoverDefaultRestrictions", ""], i18n_4, i18n_6]; }, template: function PopoverUnlimitedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-popover", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopoverUnlimitedExampleComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PopoverUnlimitedExampleComponent_ng_template_8_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0)("unlimited", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r2);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "aSU9":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-focus-trigger/popover-focus-trigger.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span i18n>Set</span>\n<nui-popover id=\"nui-demo-popover-focus\"\n             tabindex=\"1\"\n             popoverTitle=\"Popover with Focus Trigger\"\n             i18n-popoverTitle\n             trigger=\"focus\"\n    [template]=\"popoverFocusTriggerTemplate0\"><mark i18n>focus</mark></nui-popover>\n<span i18n>on me!</span>\n<span i18n>Then, tab over to</span>\n<nui-popover tabindex=\"2\"\n             popoverTitle=\"Popover with Focus Trigger\"\n             i18n-popoverTitle\n             trigger=\"focus\"\n             [template]=\"popoverFocusTriggerTemplate1\"><mark i18n>focus</mark></nui-popover>\n\n<span i18n>on me!</span>\n\n<ng-template #popoverFocusTriggerTemplate0>\n    <span id=\"nui-demo-popover-modal-focus\" i18n>\n        I'm focused and ready-to-go!\n    </span>\n</ng-template>\n\n<ng-template #popoverFocusTriggerTemplate1 i18n>\n    Now, I'm the one who's focused and ready-to-go!\n</ng-template>\n");

/***/ }),

/***/ "b4Ch":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-unlimited/popover-unlimited.example.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <nui-popover [template]=\"popoverUnlimited\" [unlimited]=\"true\" i18n>\n        Hover over me!\n    </nui-popover>\n</div>\n\n<div>\n    <nui-popover [template]=\"popoverDefaultRestrictions\" i18n>\n        Hover over me!\n    </nui-popover>\n</div>\n\n<ng-template #popoverUnlimited i18n>\n    I'm implemented without restrictions on my width and height!\n    That's why I'm taking up as much space as I have available on the page.\n    Expand my source code above to see how!\n</ng-template>\n\n<ng-template #popoverDefaultRestrictions i18n>\n    I'm implemented with respect to the default <code>max-width</code> and <code>max-height</code> restrictions defined by the Nova Design Language!\n    That's why my text will nicely wrap when it exceeds the <code>max-width</code> limit.\n    Expand my source code above to see how!\n</ng-template>\n");

/***/ }),

/***/ "b5N+":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-icon/popover-icon.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PopoverIconExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverIconExampleComponent", function() { return PopoverIconExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverIconExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 6);
} }
function PopoverIconExampleComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 7);
} }
class PopoverIconExampleComponent {
}
PopoverIconExampleComponent.ɵfac = function PopoverIconExampleComponent_Factory(t) { return new (t || PopoverIconExampleComponent)(); };
PopoverIconExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverIconExampleComponent, selectors: [["nui-popover-icon-example"]], decls: 10, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5596597027159403995$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me! ");
        i18n_0 = MSG_EXTERNAL_5596597027159403995$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟a8f2d0aae406c5c4786e652a2fe0dd13349b29cf␟5596597027159403995: Hover over me! `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8798089228526735668$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Popover with Icon");
        i18n_2 = MSG_EXTERNAL_8798089228526735668$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟ee4b8a66533ff1191410c907b1be947137d1bcf9␟8798089228526735668:Popover with Icon`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_544653789841528982$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Hover over me, too! ");
        i18n_4 = MSG_EXTERNAL_544653789841528982$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟4e91f0b8b315b927c679215f160c8993561828b5␟544653789841528982: Hover over me, too! `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2184841015823789376$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("I have an application icon and no title!");
        i18n_6 = MSG_EXTERNAL_2184841015823789376$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟d846137b55be66c164548ae464a93a5ca2180a8b␟2184841015823789376:I have an application icon and no title!`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6794609643040463135$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("I have an application icon and a title!");
        i18n_8 = MSG_EXTERNAL_6794609643040463135$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_ICON_POPOVER_ICON_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟6cfb2a348a0975f1163796f4b532c8255582e103␟6794609643040463135:I have an application icon and a title!`;
    } return [["icon", "application", 3, "template"], i18n_0, ["popoverTitle", i18n_2, "icon", "application", 3, "template"], i18n_4, ["iconPopoverTemplateNoTitle", ""], ["iconPopoverTemplateWithTitle", ""], i18n_6, i18n_8]; }, template: function PopoverIconExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-popover", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopoverIconExampleComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PopoverIconExampleComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r2);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "cK4J":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-no-padding/popover-no-padding.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover [hasPadding]=\"false\"\n             popoverTitle=\"My body has no padding\"\n             i18n-popoverTitle\n             [template]=\"popoverNoPadding\">\n        Hover over me!\n</nui-popover>\n\n<ng-template #popoverNoPadding i18n>\n    I lack padding because I'm configured that way.\n</ng-template>\n");

/***/ }),

/***/ "d4vd":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-visual-test/popover-visual-test.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { OverlayConfig } from \"@angular/cdk/overlay\";\nimport { Component } from \"@angular/core\";\nimport { OVERLAY_WITH_POPUP_STYLES_CLASS } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-popover-visual-test\",\n    templateUrl: \"./popover-visual-test.component.html\",\n    styleUrls: [\"./popover-visual-test.component.less\"],\n})\nexport class PopoverVisualTestComponent {\n    public dataset = {\n        items: [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"],\n    };\n    public closePopoverSubject = new Subject();\n    // Testing only\n    public overlayConfig: OverlayConfig = {\n        panelClass: [OVERLAY_WITH_POPUP_STYLES_CLASS, \"combobox-v2-test-pane\"],\n    };\n    closePopover() {\n        this.closePopoverSubject.next();\n    }\n}\n");

/***/ }),

/***/ "ddxJ":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-docs/popover-docs.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-docs-example\",\n    templateUrl: \"./popover-docs.example.component.html\",\n})\nexport class PopoverExampleComponent {}\n");

/***/ }),

/***/ "e6tO":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-visual-test/popover-visual-test.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between\">\n    <nui-popover popoverTitle=\"Title\"\n                 trigger=\"click\"\n                 icon=\"application\"\n                 [template]=\"popoverTemplate\"\n                 [preventClosing]=\"true\">\n        <button class=\"placement-check-btn\">Show top left popover</button>\n    </nui-popover>\n\n    <nui-popover popoverTitle=\"Title\"\n                 trigger=\"click\"\n                 icon=\"application\"\n                 [template]=\"popoverTemplate\"\n                 [preventClosing]=\"true\">\n        <button class=\"placement-check-btn\">Show top right popover</button>\n    </nui-popover>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Popover</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex\">\n                <nui-popover id=\"nui-demo-popover-basic\"\n                             [template]=\"popoverWithBasicUsage\">\n                    Hover over me!\n                </nui-popover>\n\n                <ng-template #popoverWithBasicUsage>\n                    I'm implemented with the simplest usage! Expand my source code above to see how!\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Popover - Prevent Closing on Click</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-8\">\n            <div class=\"d-flex\">\n                <nui-popover popoverTitle=\"Prevent close popover on click\"\n                             trigger=\"click\"\n                             id=\"nui-demo-popover-prevent-closing\"\n                             [template]=\"popoverPreventClose\"\n                             [closePopover]=\"closePopoverSubject\"\n                             [preventClosing]=\"true\">\n                    <button id=\"nui-demo-button-prevent-onclick\"><span>Click me!</span></button>\n                </nui-popover>\n\n                <ng-template #popoverPreventClose>\n                    <div class=\"mb-2\">\n                        <nui-checkbox id=\"nui-demo-checkbox-in-popover\">Hi, check me!</nui-checkbox>\n                    </div>\n                    <div class=\"mb-2\">\n                        <nui-combobox id=\"nui-demo-popover-combobox\"\n                                      [itemsSource]=\"dataset.items\"\n                                      placeholder=\"Select item combo\"></nui-combobox>\n                        <nui-combobox-v2 [overlayConfig]=\"overlayConfig\" id=\"nui-demo-combobox-v2-in-popover\" placeholder=\"Select item combo v2\">\n                            <nui-select-v2-option *ngFor=\"let item of dataset.items\" [value]=\"item\">{{ item }}</nui-select-v2-option>\n                        </nui-combobox-v2>\n\n                    </div>\n                    <div class=\"d-flex justify-content-end\">\n                        <button nui-button\n                                type=\"button\"\n                                displayStyle=\"action\"\n                                (click)=\"closePopover()\">Close</button>\n                        <button nui-button\n                                class=\"ml-3\"\n                                type=\"button\"\n                                displayStyle=\"primary\"\n                                (click)=\"closePopover()\">Confirm</button>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n        <div class=\"col col-4\">\n            <div class=\"d-flex\">\n                <nui-popover popoverTitle=\"Popover with Left Placement\"\n                             placement=\"left\"\n                             trigger=\"click\"\n                             [template]=\"popoverLeftPlacement\"\n                             [preventClosing]=\"true\">\n                    <button class=\"placement-check-btn\"><span>Click me!</span></button>\n                </nui-popover>\n\n                <ng-template #popoverLeftPlacement>\n                    <nui-checkbox>Placement is set to LEFT in this case</nui-checkbox>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Removing Padding</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex\">\n                <nui-popover [hasPadding]=\"false\"\n                             id=\"nui-demo-popover-no-padding\"\n                             popoverTitle=\"My body has no padding\"\n                             [template]=\"popoverNoPadding\">\n                    Hover over me!\n                </nui-popover>\n\n                <ng-template #popoverNoPadding>\n                    I lack padding because I'm configured that way.\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Icon</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex flex-column\">\n                <div>\n                    <nui-popover icon=\"application\"\n                                 [template]=\"iconPopoverTemplateNoTitle\">\n                        Hover over me!\n                    </nui-popover>\n                </div>\n                <div>\n                    <nui-popover popoverTitle=\"Popover with Icon\"\n                                 icon=\"application\"\n                                 [template]=\"iconPopoverTemplateWithTitle\">\n                        Hover over me, too!\n                    </nui-popover>\n                </div>\n\n                <ng-template #iconPopoverTemplateNoTitle>I have an application icon and no title!</ng-template>\n                <ng-template #iconPopoverTemplateWithTitle>I have an application icon and a title!</ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Removing Width and Height Limitations</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex flex-column\">\n                <div>\n                    <nui-popover [template]=\"popoverUnlimited\"\n                                 [unlimited]=\"true\"\n                                 icon=\"application\"\n                                 id=\"nui-demo-popover-no-limits\">\n                        Hover over me!\n                    </nui-popover>\n                </div>\n\n                <div>\n                    <nui-popover [template]=\"popoverDefaultRestrictions\"\n                                 id=\"nui-demo-popover-limited-and-multiline\">\n                        Hover over me!\n                    </nui-popover>\n                </div>\n\n                <ng-template #popoverUnlimited>\n                    I'm implemented without restrictions on my width and height!\n                    That's why I'm taking up as much space as I have available on the page.\n                    Expand my source code above to see how!\n                </ng-template>\n\n                <ng-template #popoverDefaultRestrictions>\n                    I'm implemented with respect to the default <code>max-width</code> and <code>max-height</code> restrictions defined by the Nova Design\n                    Language!\n                    That's why my text will nicely wrap when it exceeds the <code>max-width</code> limit.\n                    Expand my source code above to see how!\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Modal Mode</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex\">\n                <nui-popover popoverTitle=\"Title\"\n                             id=\"nui-demo-popover-modal\"\n                             trigger=\"click\"\n                             placement=\"right\"\n                             icon=\"application\"\n                             [template]=\"popoverTemplate\"\n                             [modal]=\"true\">\n                    <button>Show modal popover</button>\n                </nui-popover>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Large Trigger Element Height</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"d-flex\">\n                <nui-popover popoverTitle=\"Popover with Top Placement\"\n                             placement=\"top\"\n                             [template]=\"popoverTemplate\"\n                             trigger=\"click\"\n                             [preventClosing]=\"true\">\n                    <button class=\"large-height placement-check-btn\">\n                        open top\n                    </button>\n                </nui-popover>\n\n                <nui-popover popoverTitle=\"Popover with Bottom Placement\"\n                             placement=\"bottom\"\n                             [template]=\"popoverTemplate\"\n                             trigger=\"click\"\n                             [preventClosing]=\"true\">\n                    <button class=\"large-height placement-check-btn\">\n                        open bottom\n                    </button>\n                </nui-popover>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"d-flex footer justify-content-between align-items-center p-2\">\n    <nui-popover popoverTitle=\"Title\"\n                 id=\"nui-demo-popover-bottom-left\"\n                 trigger=\"click\"\n                 icon=\"application\"\n                 [template]=\"popoverTemplate\"\n                 [preventClosing]=\"true\">\n        <button class=\"placement-check-btn\">Show bottom-left popover</button>\n    </nui-popover>\n    <nui-popover popoverTitle=\"Title\"\n                 id=\"nui-demo-popover-bottom-right\"\n                 trigger=\"click\"\n                 icon=\"application\"\n                 [template]=\"popoverTemplate\"\n                 [preventClosing]=\"true\">\n        <button class=\"placement-check-btn\">Show bottom-right popover</button>\n    </nui-popover>\n</div>\n\n<ng-template #popoverTemplate>\n    Test Template\n</ng-template>\n");

/***/ }),

/***/ "eaSP":
/*!************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover.module.ts ***!
  \************************************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "EZZh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PopoverExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "popover-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PopoverExampleComponent"],
    },
    {
        path: "popover-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["PopoverVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class PopoverModule {
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PopoverModule });
PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("zhSv"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectV2Module"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["PopoverBasicUsageExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverClickTriggerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverDisabledExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverFocusTriggerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverIconExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverModalExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverMouseenterTriggerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverNoPaddingExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverOutputsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverOpenAndCloseProgrammaticallyExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacementExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverPreventCloseOnClickExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverWithContainerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverWithTitleExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverUnlimitedExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverStatusExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["PopoverDebounceExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCheckboxModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectV2Module"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "hxdJ":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-click-trigger/popover-click-trigger.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PopoverClickTriggerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverClickTriggerExampleComponent", function() { return PopoverClickTriggerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverClickTriggerExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopoverClickTriggerExampleComponent {
}
PopoverClickTriggerExampleComponent.ɵfac = function PopoverClickTriggerExampleComponent_Factory(t) { return new (t || PopoverClickTriggerExampleComponent)(); };
PopoverClickTriggerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverClickTriggerExampleComponent, selectors: [["nui-popover-click-trigger-example"]], decls: 5, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_810675428451510836$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_CLICK_TRIGGER_POPOVER_CLICK_TRIGGER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Popover with Click Trigger");
        i18n_0 = MSG_EXTERNAL_810675428451510836$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_CLICK_TRIGGER_POPOVER_CLICK_TRIGGER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟c8e52c72a9dda81a804f2d0b24eb30bd909b2f4e␟810675428451510836:Popover with Click Trigger`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_CLICK_TRIGGER_POPOVER_CLICK_TRIGGER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Click me!");
        i18n_2 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_CLICK_TRIGGER_POPOVER_CLICK_TRIGGER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3468082423397170556$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_CLICK_TRIGGER_POPOVER_CLICK_TRIGGER_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Hi, I'm clicked!");
        i18n_4 = MSG_EXTERNAL_3468082423397170556$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_CLICK_TRIGGER_POPOVER_CLICK_TRIGGER_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟1e2020d28952aab2cc24774abcdbba7d5e36b227␟3468082423397170556:Hi, I'm clicked!`;
    } return [["popoverTitle", i18n_0, "id", "nui-demo-popover-onclick", "trigger", "click", 3, "template"], i18n_2, ["popoverWithClickTrigger", ""], ["id", "nui-demo-popover-modal-click"], i18n_4]; }, template: function PopoverClickTriggerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopoverClickTriggerExampleComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "jiS0":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-basic-usage/popover-basic-usage.example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PopoverBasicUsageExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverBasicUsageExampleComponent", function() { return PopoverBasicUsageExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverBasicUsageExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, 3);
} }
class PopoverBasicUsageExampleComponent {
}
PopoverBasicUsageExampleComponent.ɵfac = function PopoverBasicUsageExampleComponent_Factory(t) { return new (t || PopoverBasicUsageExampleComponent)(); };
PopoverBasicUsageExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverBasicUsageExampleComponent, selectors: [["nui-popover-basic-usage-example"]], decls: 4, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3461134866326180848$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_BASIC_USAGE_POPOVER_BASIC_USAGE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me!\n");
        i18n_0 = MSG_EXTERNAL_3461134866326180848$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_BASIC_USAGE_POPOVER_BASIC_USAGE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟5f1b875c663c5de19a215d171c7f31f365dbc817␟3461134866326180848: Hover over me!
`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6678361540400968799$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_BASIC_USAGE_POPOVER_BASIC_USAGE_EXAMPLE_COMPONENT_TS__3 = goog.getMsg(" I'm implemented with the simplest usage! Expand my source code above to see how!\n");
        i18n_2 = MSG_EXTERNAL_6678361540400968799$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_BASIC_USAGE_POPOVER_BASIC_USAGE_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟106ff90ad59b2f24e23759dffd0bfc1157019ad6␟6678361540400968799: I'm implemented with the simplest usage! Expand my source code above to see how!
`;
    } return [[3, "template"], i18n_0, ["popoverWithBasicUsage", ""], i18n_2]; }, template: function PopoverBasicUsageExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverBasicUsageExampleComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "kvwF":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/styles.less ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import \"./popover-icon/popover-icon.example.component.less\";\n@import \"./popover-status/popover-status.example.component.less\";\n");

/***/ }),

/***/ "lTsw":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-mouseenter-trigger/popover-mouseenter-trigger.example.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover id=\"nui-demo-popover-mouseenter\"\n             popoverTitle=\"Popover with Mouseenter Trigger\"\n             i18n-popoverTitle\n             trigger=\"mouseenter\"\n             [template]=\"popoverMouseenterTrigger\"\n             i18n>Hover over me!\n</nui-popover>\n\n<ng-template #popoverMouseenterTrigger>\n    <span id=\"nui-demo-popover-modal-mouseenter\" i18n>Hi, I'm hovered!</span>\n</ng-template>\n");

/***/ }),

/***/ "lxAA":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-modal/popover-modal.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-popover popoverTitle=\"Modal Popover\" i18n-popoverTitle\n             trigger=\"click\"\n             placement=\"right\"\n             [template]=\"popoverModal\"\n             [modal]=\"true\"\n             [preventClosing]=\"true\"\n             [closePopover]=\"closePopoverSubject\">\n    <button nui-button type=\"button\" id=\"nui-demo-popover-modal\" i18n>\n        Show modal popover\n    </button>\n</nui-popover>\n\n<ng-template #popoverModal>\n    <span i18n>A modal popover can be used to grab the user's attention.</span>\n    <div class=\"mt-2 d-flex justify-content-end\">\n        <button id=\"nui-demo-custom-close-popover\"\n                nui-button\n                type=\"button\"\n                displayStyle=\"action\"\n                (click)=\"closePopover()\" i18n>Close</button>\n        <button nui-button\n                class=\"ml-3\"\n                type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"closePopover()\" i18n>Confirm</button>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "mZOL":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-icon/popover-icon.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-icon-example\",\n    templateUrl: \"./popover-icon.example.component.html\",\n})\nexport class PopoverIconExampleComponent {}\n");

/***/ }),

/***/ "mnIO":
/*!***********************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: PopoverOpenAndCloseProgrammaticallyExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverOpenAndCloseProgrammaticallyExampleComponent", function() { return PopoverOpenAndCloseProgrammaticallyExampleComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");




function PopoverOpenAndCloseProgrammaticallyExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PopoverOpenAndCloseProgrammaticallyExampleComponent {
    constructor() {
        this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    closePopover() {
        this.closePopoverSubject.next();
    }
    openPopover() {
        this.openPopoverSubject.next();
    }
}
PopoverOpenAndCloseProgrammaticallyExampleComponent.ɵfac = function PopoverOpenAndCloseProgrammaticallyExampleComponent_Factory(t) { return new (t || PopoverOpenAndCloseProgrammaticallyExampleComponent)(); };
PopoverOpenAndCloseProgrammaticallyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverOpenAndCloseProgrammaticallyExampleComponent, selectors: [["nui-popover-open-and-close-programmatically-example"]], decls: 10, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_44440026028859844$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Opened Programmatically");
        i18n_0 = MSG_EXTERNAL_44440026028859844$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟25511c003cf7a56f1efd32f0137124c63d485fec␟44440026028859844:Opened Programmatically`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6433609647320588193$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This popover will be triggered programmatically!");
        i18n_2 = MSG_EXTERNAL_6433609647320588193$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟e03f9d15ae2953186b2c2d87395274f3a84f38fa␟6433609647320588193:This popover will be triggered programmatically!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1958848798090690173$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Close popover");
        i18n_4 = MSG_EXTERNAL_1958848798090690173$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟03f9807dfb3715c6414669889bb4cf269031ec23␟1958848798090690173:Close popover`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6118709462718619508$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Open popover");
        i18n_6 = MSG_EXTERNAL_6118709462718619508$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟15cc1cbfa6fff49b2ab7689d3bec56596ef67dd8␟6118709462718619508:Open popover`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6015202412337043736$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Hey, I'm opened programmatically. ");
        i18n_8 = MSG_EXTERNAL_6015202412337043736$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_POPOVER_OPEN_AND_CLOSE_PROGRAMMATICALLY_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟a94ce372dc3586e4d81c1d4552cbd08ae31363ad␟6015202412337043736: Hey, I'm opened programmatically. `;
    } return [["id", "nui-demo-popover-open-close-programmatically", "popoverTitle", i18n_0, "trigger", "openPopoverSubject", 3, "template", "openPopover", "closePopover"], i18n_2, ["popoverOpenClose", ""], [1, "mt-2"], ["id", "nui-demo-popover-close-programmatically-btn", "nui-button", "", "type", "button", 3, "click"], i18n_4, ["id", "nui-demo-popover-open-programmatically-btn", "nui-button", "", "type", "button", 1, "ml-2", 3, "click"], i18n_6, ["id", "nui-demo-popover-open-close"], i18n_8]; }, template: function PopoverOpenAndCloseProgrammaticallyExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopoverOpenAndCloseProgrammaticallyExampleComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverOpenAndCloseProgrammaticallyExampleComponent_Template_button_click_6_listener() { return ctx.closePopover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverOpenAndCloseProgrammaticallyExampleComponent_Template_button_click_8_listener() { return ctx.openPopover(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r0)("openPopover", ctx.openPopoverSubject)("closePopover", ctx.closePopoverSubject);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "nJTf":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-debounce/popover-debounce.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><nui-popover id=\"nui-demo-popover-debounce-1\" [template]=\"popoverDebounce1st\" [delay]=\"1000\" i18n>Hover over me 1st!</nui-popover></p>\n<p><nui-popover [template]=\"popoverDebounce2nd\" [delay]=\"1000\" i18n>Hover over me 2nd!</nui-popover></p>\n<p><nui-popover [template]=\"popoverDebounce3rd\" [delay]=\"1000\" i18n>Hover over me 3rd!</nui-popover></p>\n\n<ng-template #popoverDebounce1st i18n>\n    <span id=\"nui-demo-popover-modal-debounce-1\">I'm the 1st implementation with the debounce!</span>\n</ng-template>\n\n<ng-template #popoverDebounce2nd i18n>\n    I'm the 2nd implementation with the debounce!\n</ng-template>\n\n<ng-template #popoverDebounce3rd i18n>\n    I'm the 3rd implementation with the debounce!\n</ng-template>\n");

/***/ }),

/***/ "oIgB":
/*!*********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-mouseenter-trigger/popover-mouseenter-trigger.example.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PopoverMouseenterTriggerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverMouseenterTriggerExampleComponent", function() { return PopoverMouseenterTriggerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverMouseenterTriggerExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopoverMouseenterTriggerExampleComponent {
}
PopoverMouseenterTriggerExampleComponent.ɵfac = function PopoverMouseenterTriggerExampleComponent_Factory(t) { return new (t || PopoverMouseenterTriggerExampleComponent)(); };
PopoverMouseenterTriggerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverMouseenterTriggerExampleComponent, selectors: [["nui-popover-mouseenter-trigger-example"]], decls: 4, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8014969885123740600$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MOUSEENTER_TRIGGER_POPOVER_MOUSEENTER_TRIGGER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Popover with Mouseenter Trigger");
        i18n_0 = MSG_EXTERNAL_8014969885123740600$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MOUSEENTER_TRIGGER_POPOVER_MOUSEENTER_TRIGGER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟4805fc86495a7124109baf8a838ec9927ea493dc␟8014969885123740600:Popover with Mouseenter Trigger`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8260197977636580299$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MOUSEENTER_TRIGGER_POPOVER_MOUSEENTER_TRIGGER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hover over me!\n");
        i18n_2 = MSG_EXTERNAL_8260197977636580299$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MOUSEENTER_TRIGGER_POPOVER_MOUSEENTER_TRIGGER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟206b1eac2e635feb87b3ae9f1a9d9c08221f3065␟8260197977636580299:Hover over me!
`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5742196481257095680$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MOUSEENTER_TRIGGER_POPOVER_MOUSEENTER_TRIGGER_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Hi, I'm hovered!");
        i18n_4 = MSG_EXTERNAL_5742196481257095680$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MOUSEENTER_TRIGGER_POPOVER_MOUSEENTER_TRIGGER_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟9bf81e0ff231dfc1dacb42a70f74784fe8edd497␟5742196481257095680:Hi, I'm hovered!`;
    } return [["id", "nui-demo-popover-mouseenter", "popoverTitle", i18n_0, "trigger", "mouseenter", 3, "template"], i18n_2, ["popoverMouseenterTrigger", ""], ["id", "nui-demo-popover-modal-mouseenter"], i18n_4]; }, template: function PopoverMouseenterTriggerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverMouseenterTriggerExampleComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "pHsd":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-debounce/popover-debounce.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-debounce-example\",\n    templateUrl: \"./popover-debounce.example.component.html\",\n})\nexport class PopoverDebounceExampleComponent {}\n");

/***/ }),

/***/ "q3Nw":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-popover-open-and-close-programmatically-example\",\n    templateUrl: \"./popover-open-and-close-programmatically.example.component.html\",\n})\nexport class PopoverOpenAndCloseProgrammaticallyExampleComponent {\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    public closePopover() {\n        this.closePopoverSubject.next();\n    }\n\n    public openPopover() {\n        this.openPopoverSubject.next();\n    }\n}\n");

/***/ }),

/***/ "q7yg":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-with-title/popover-with-title.example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PopoverWithTitleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverWithTitleExampleComponent", function() { return PopoverWithTitleExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");


function PopoverWithTitleExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopoverWithTitleExampleComponent {
}
PopoverWithTitleExampleComponent.ɵfac = function PopoverWithTitleExampleComponent_Factory(t) { return new (t || PopoverWithTitleExampleComponent)(); };
PopoverWithTitleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverWithTitleExampleComponent, selectors: [["nui-popover-with-title-example"]], decls: 4, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1907250321022619978$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_TITLE_POPOVER_WITH_TITLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Some Long Url");
        i18n_0 = MSG_EXTERNAL_1907250321022619978$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_TITLE_POPOVER_WITH_TITLE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟9dff00d8d815b82674a198f39f5ab2806686cf19␟1907250321022619978:Some Long Url`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_TITLE_POPOVER_WITH_TITLE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Hover over me!\n");
        i18n_2 = MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_TITLE_POPOVER_WITH_TITLE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟56700cf447d42925391735d49215301d03ee19f7␟3181889294487144022: Hover over me!
`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3963718199791772910$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_TITLE_POPOVER_WITH_TITLE_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" https://somelongstringsomelongstringsomelongstringsomelongstringsomelongstring.url/somelongstring?=somelongstringsomelongstringsomelongstring ");
        i18n_4 = MSG_EXTERNAL_3963718199791772910$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_WITH_TITLE_POPOVER_WITH_TITLE_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟b88c7ad5bb86e5c813fd8b6f297d9de152f8aac7␟3963718199791772910: https://somelongstringsomelongstringsomelongstringsomelongstringsomelongstring.url/somelongstring?=somelongstringsomelongstringsomelongstring `;
    } return [["popoverTitle", i18n_0, 3, "template"], i18n_2, ["popoverWithTitle", ""], [2, "overflow", "hidden"], i18n_4]; }, template: function PopoverWithTitleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopoverWithTitleExampleComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_1__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "qAU8":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-with-container/popover-with-container.example.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #popoverContainer id=\"nui-demo-popover-container\"></div>\n\n<nui-popover id=\"nui-demo-popover-with-container\"\n             [container]=\"popoverContainer\"\n             [template]=\"popoverWithContainerTemplate\"\n             i18n>\n    Hover over me!\n</nui-popover>\n\n<ng-template #popoverWithContainerTemplate i18n>\n    I'm appended to a container!\n</ng-template>\n");

/***/ }),

/***/ "qD/J":
/*!*****************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-prevent-close-on-click/popover-prevent-close-on-click.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PopoverPreventCloseOnClickExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPreventCloseOnClickExampleComponent", function() { return PopoverPreventCloseOnClickExampleComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/select/combobox/combobox.component */ "KXc3");






function PopoverPreventCloseOnClickExampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-combobox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverPreventCloseOnClickExampleComponent_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.closePopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverPreventCloseOnClickExampleComponent_ng_template_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.closePopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx_r1.dataset.items);
} }
class PopoverPreventCloseOnClickExampleComponent {
    constructor() {
        this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        };
        this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    closePopover() {
        this.closePopoverSubject.next();
    }
}
PopoverPreventCloseOnClickExampleComponent.ɵfac = function PopoverPreventCloseOnClickExampleComponent_Factory(t) { return new (t || PopoverPreventCloseOnClickExampleComponent)(); };
PopoverPreventCloseOnClickExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverPreventCloseOnClickExampleComponent, selectors: [["nui-popover-prevent-close-on-click-example"]], decls: 6, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3509397511735259642$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Prevent close popover on click");
        i18n_0 = MSG_EXTERNAL_3509397511735259642$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟a57b103ce74d8636a02375516af2013370e571c3␟3509397511735259642:Prevent close popover on click`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Click me!");
        i18n_2 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b37956781d4525308454d483be8c66447da39538␟2590927982756485133:Click me!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6395647059199024263$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Hi, check me!");
        i18n_4 = MSG_EXTERNAL_6395647059199024263$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟5a5e556323375ea4212ee01f926f9afb64e20c24␟6395647059199024263:Hi, check me!`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Select item");
        i18n_6 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟67f44542ec05ae560bd4a45c9e26a0d834489f4a␟7558413604919060916:Select item`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Close");
        i18n_8 = MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Confirm");
        i18n_10 = MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_PREVENT_CLOSE_ON_CLICK_POPOVER_PREVENT_CLOSE_ON_CLICK_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟68e710782ccb5398b3acb8844caf0b199da2c3da␟9178182467454450952:Confirm`;
    } return [["popoverTitle", i18n_0, "id", "nui-demo-popover-prevent-onclick", "trigger", "click", 3, "template", "closePopover", "preventClosing"], ["nui-button", "", "type", "button"], i18n_2, ["popoverPreventClose", ""], ["id", "nui-demo-popover-modal-prevent"], ["id", "nui-demo-checkbox-in-popover"], i18n_4, ["id", "nui-demo-popover-combobox", "placeholder", i18n_6, 3, "itemsSource"], [1, "mt-2", "d-flex", "justify-content-end"], ["id", "nui-demo-custom-close-popover", "nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_8, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "ml-3", 3, "click"], i18n_10]; }, template: function PopoverPreventCloseOnClickExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PopoverPreventCloseOnClickExampleComponent_ng_template_4_Template, 9, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r0)("closePopover", ctx.closePopoverSubject)("preventClosing", true);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxComponent"]], encapsulation: 2 });


/***/ }),

/***/ "qD9R":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-icon/popover-icon.example.component.less ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-examples {\n    &__item-body {\n    margin-top: 15px;\n}\n    &__row {\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        margin: 15px 15px 15px 0;\n        &-item {\n            margin-right: 80px;\n        }\n    }\n}\n");

/***/ }),

/***/ "rpyR":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-outputs/popover-outputs.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PopoverOutputsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverOutputsExampleComponent", function() { return PopoverOutputsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");



function PopoverOutputsExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PopoverOutputsExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    onHide() {
        this.toastService.success({ message: $localize `onHide was invoked` });
    }
    onShow() {
        this.toastService.success({ message: $localize `onShow was invoked` });
    }
}
PopoverOutputsExampleComponent.ɵfac = function PopoverOutputsExampleComponent_Factory(t) { return new (t || PopoverOutputsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
PopoverOutputsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverOutputsExampleComponent, selectors: [["nui-popover-outputs-example"]], decls: 4, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OUTPUTS_POPOVER_OUTPUTS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Hover over me!\n");
        i18n_0 = MSG_EXTERNAL_3181889294487144022$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OUTPUTS_POPOVER_OUTPUTS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟56700cf447d42925391735d49215301d03ee19f7␟3181889294487144022: Hover over me!
`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1371692844311162112$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OUTPUTS_POPOVER_OUTPUTS_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("I'm shown! Just mouseleave to see me hide.");
        i18n_2 = MSG_EXTERNAL_1371692844311162112$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_OUTPUTS_POPOVER_OUTPUTS_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟bd76c1c8fa9ea4f989c6a000a357f573b908367b␟1371692844311162112:I'm shown! Just mouseleave to see me hide.`;
    } return [[3, "template", "hidden", "shown"], i18n_0, ["outputTemplate", ""], i18n_2]; }, template: function PopoverOutputsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hidden", function PopoverOutputsExampleComponent_Template_nui_popover_hidden_0_listener() { return ctx.onHide(); })("shown", function PopoverOutputsExampleComponent_Template_nui_popover_shown_0_listener() { return ctx.onShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PopoverOutputsExampleComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r0);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"]], encapsulation: 2 });


/***/ }),

/***/ "tIEi":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-unlimited/popover-unlimited.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-unlimited-example\",\n    templateUrl: \"./popover-unlimited.example.component.html\",\n})\nexport class PopoverUnlimitedExampleComponent {}\n");

/***/ }),

/***/ "tKzj":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-with-title/popover-with-title.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-with-title-example\",\n    templateUrl: \"./popover-with-title.example.component.html\",\n})\nexport class PopoverWithTitleExampleComponent {}\n");

/***/ }),

/***/ "urh8":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-focus-trigger/popover-focus-trigger.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-focus-trigger-example\",\n    templateUrl: \"./popover-focus-trigger.example.component.html\",\n})\nexport class PopoverFocusTriggerExampleComponent {}\n");

/***/ }),

/***/ "v4jN":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-outputs/popover-outputs.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-popover-outputs-example\",\n    templateUrl: \"./popover-outputs.example.component.html\",\n})\nexport class PopoverOutputsExampleComponent {\n    constructor(@Inject(ToastService) private toastService: IToastService) {\n    }\n\n    public onHide(): void {\n        this.toastService.success({message: $localize `onHide was invoked`});\n    }\n\n    public onShow(): void {\n        this.toastService.success({message: $localize `onShow was invoked`});\n    }\n}\n");

/***/ }),

/***/ "wpne":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-visual-test/popover-visual-test.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PopoverVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverVisualTestComponent", function() { return PopoverVisualTestComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/select/combobox/combobox.component */ "KXc3");
/* harmony import */ var _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/combobox-v2/combobox-v2.component */ "eZSC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/lib/select-v2/option/select-v2-option.component */ "tpGn");










function PopoverVisualTestComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " I'm implemented with the simplest usage! Expand my source code above to see how! ");
} }
function PopoverVisualTestComponent_ng_template_30_nui_select_v2_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-select-v2-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r19);
} }
function PopoverVisualTestComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Hi, check me!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "nui-combobox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-combobox-v2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PopoverVisualTestComponent_ng_template_30_nui_select_v2_option_6_Template, 2, 2, "nui-select-v2-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverVisualTestComponent_ng_template_30_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.closePopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverVisualTestComponent_ng_template_30_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.closePopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx_r3.dataset.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("overlayConfig", ctx_r3.overlayConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.dataset.items);
} }
function PopoverVisualTestComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Placement is set to LEFT in this case");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PopoverVisualTestComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " I lack padding because I'm configured that way. ");
} }
function PopoverVisualTestComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "I have an application icon and no title!");
} }
function PopoverVisualTestComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "I have an application icon and a title!");
} }
function PopoverVisualTestComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " I'm implemented without restrictions on my width and height! That's why I'm taking up as much space as I have available on the page. Expand my source code above to see how! ");
} }
function PopoverVisualTestComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " I'm implemented with respect to the default ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "max-width");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "max-height");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " restrictions defined by the Nova Design Language! That's why my text will nicely wrap when it exceeds the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "max-width");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " limit. Expand my source code above to see how! ");
} }
function PopoverVisualTestComponent_ng_template_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Test Template\n");
} }
class PopoverVisualTestComponent {
    constructor() {
        this.dataset = {
            items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        };
        this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Testing only
        this.overlayConfig = {
            panelClass: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["OVERLAY_WITH_POPUP_STYLES_CLASS"], "combobox-v2-test-pane"],
        };
    }
    closePopover() {
        this.closePopoverSubject.next();
    }
}
PopoverVisualTestComponent.ɵfac = function PopoverVisualTestComponent_Factory(t) { return new (t || PopoverVisualTestComponent)(); };
PopoverVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PopoverVisualTestComponent, selectors: [["nui-popover-visual-test"]], decls: 117, vars: 27, consts: [[1, "d-flex", "justify-content-between"], ["popoverTitle", "Title", "trigger", "click", "icon", "application", 3, "template", "preventClosing"], [1, "placement-check-btn"], [1, "container"], [1, "row"], [1, "col"], [1, "d-flex"], ["id", "nui-demo-popover-basic", 3, "template"], ["popoverWithBasicUsage", ""], [1, "col", "col-8"], ["popoverTitle", "Prevent close popover on click", "trigger", "click", "id", "nui-demo-popover-prevent-closing", 3, "template", "closePopover", "preventClosing"], ["id", "nui-demo-button-prevent-onclick"], ["popoverPreventClose", ""], [1, "col", "col-4"], ["popoverTitle", "Popover with Left Placement", "placement", "left", "trigger", "click", 3, "template", "preventClosing"], ["popoverLeftPlacement", ""], ["id", "nui-demo-popover-no-padding", "popoverTitle", "My body has no padding", 3, "hasPadding", "template"], ["popoverNoPadding", ""], [1, "d-flex", "flex-column"], ["icon", "application", 3, "template"], ["popoverTitle", "Popover with Icon", "icon", "application", 3, "template"], ["iconPopoverTemplateNoTitle", ""], ["iconPopoverTemplateWithTitle", ""], ["icon", "application", "id", "nui-demo-popover-no-limits", 3, "template", "unlimited"], ["id", "nui-demo-popover-limited-and-multiline", 3, "template"], ["popoverUnlimited", ""], ["popoverDefaultRestrictions", ""], ["popoverTitle", "Title", "id", "nui-demo-popover-modal", "trigger", "click", "placement", "right", "icon", "application", 3, "template", "modal"], ["popoverTitle", "Popover with Top Placement", "placement", "top", "trigger", "click", 3, "template", "preventClosing"], [1, "large-height", "placement-check-btn"], ["popoverTitle", "Popover with Bottom Placement", "placement", "bottom", "trigger", "click", 3, "template", "preventClosing"], [1, "d-flex", "footer", "justify-content-between", "align-items-center", "p-2"], ["popoverTitle", "Title", "id", "nui-demo-popover-bottom-left", "trigger", "click", "icon", "application", 3, "template", "preventClosing"], ["popoverTitle", "Title", "id", "nui-demo-popover-bottom-right", "trigger", "click", "icon", "application", 3, "template", "preventClosing"], ["popoverTemplate", ""], [1, "mb-2"], ["id", "nui-demo-checkbox-in-popover"], ["id", "nui-demo-popover-combobox", "placeholder", "Select item combo", 3, "itemsSource"], ["id", "nui-demo-combobox-v2-in-popover", "placeholder", "Select item combo v2", 3, "overlayConfig"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end"], ["nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "ml-3", 3, "click"], [3, "value"]], template: function PopoverVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-popover", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Show top left popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nui-popover", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Show top right popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Basic Popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "nui-popover", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Hover over me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PopoverVisualTestComponent_ng_template_17_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Popover - Prevent Closing on Click");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nui-popover", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Click me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, PopoverVisualTestComponent_ng_template_30_Template, 12, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nui-popover", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Click me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, PopoverVisualTestComponent_ng_template_38_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Removing Padding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "nui-popover", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Hover over me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, PopoverVisualTestComponent_ng_template_49_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "nui-popover", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Hover over me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "nui-popover", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Hover over me, too! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, PopoverVisualTestComponent_ng_template_64_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, PopoverVisualTestComponent_ng_template_66_Template, 1, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Removing Width and Height Limitations");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "nui-popover", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Hover over me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "nui-popover", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Hover over me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, PopoverVisualTestComponent_ng_template_81_Template, 1, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, PopoverVisualTestComponent_ng_template_83_Template, 10, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Modal Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "nui-popover", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Show modal popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Large Trigger Element Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "nui-popover", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " open top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "nui-popover", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " open bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "nui-popover", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Show bottom-left popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "nui-popover", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Show bottom-right popover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, PopoverVisualTestComponent_ng_template_115_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](50);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](65);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](67);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](82);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](84);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r2)("closePopover", ctx.closePopoverSubject)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r4)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hasPadding", false)("template", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r12)("unlimited", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("preventClosing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r16)("preventClosing", true);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxComponent"], _src_lib_select_v2_combobox_v2_combobox_v2_component__WEBPACK_IMPORTED_MODULE_6__["ComboboxV2Component"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"], _src_lib_select_v2_option_select_v2_option_component__WEBPACK_IMPORTED_MODULE_9__["SelectV2OptionComponent"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n}\n.large-height[_ngcontent-%COMP%] {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXItdmlzdWFsLXRlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtBQUFKIiwiZmlsZSI6InBvcG92ZXItdmlzdWFsLXRlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4ubGFyZ2UtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "xQjU":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popover/popover-status/popover-status.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popover-status-example\",\n    templateUrl: \"popover-status.example.component.html\",\n})\n\nexport class PopoverStatusExampleComponent {\n}\n");

/***/ }),

/***/ "zbu8":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/popover/popover-modal/popover-modal.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PopoverModalExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModalExampleComponent", function() { return PopoverModalExampleComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");




function PopoverModalExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverModalExampleComponent_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.closePopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopoverModalExampleComponent_ng_template_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.closePopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PopoverModalExampleComponent {
    constructor() {
        this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    closePopover() {
        this.closePopoverSubject.next();
    }
}
PopoverModalExampleComponent.ɵfac = function PopoverModalExampleComponent_Factory(t) { return new (t || PopoverModalExampleComponent)(); };
PopoverModalExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopoverModalExampleComponent, selectors: [["nui-popover-modal-example"]], decls: 5, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2225120696754473064$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Modal Popover");
        i18n_0 = MSG_EXTERNAL_2225120696754473064$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟2bb1310acc94ca030f411cf84e6cf45466547208␟2225120696754473064:Modal Popover`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6967382299242769381$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Show modal popover ");
        i18n_2 = MSG_EXTERNAL_6967382299242769381$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟0f35b41015da53943f066be3fe150c64d5670139␟6967382299242769381: Show modal popover `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3280198363419758787$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("A modal popover can be used to grab the user's attention.");
        i18n_4 = MSG_EXTERNAL_3280198363419758787$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟4bd5316f7df0a71ad3b1c125358dbcba1e601fbb␟3280198363419758787:A modal popover can be used to grab the user's attention.`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Close");
        i18n_6 = MSG_EXTERNAL_7819314041543176992$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Confirm");
        i18n_8 = MSG_EXTERNAL_9178182467454450952$$DEMO_SRC_COMPONENTS_DEMO_POPOVER_POPOVER_MODAL_POPOVER_MODAL_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟68e710782ccb5398b3acb8844caf0b199da2c3da␟9178182467454450952:Confirm`;
    } return [["popoverTitle", i18n_0, "trigger", "click", "placement", "right", 3, "template", "modal", "preventClosing", "closePopover"], ["nui-button", "", "type", "button", "id", "nui-demo-popover-modal"], i18n_2, ["popoverModal", ""], i18n_4, [1, "mt-2", "d-flex", "justify-content-end"], ["id", "nui-demo-custom-close-popover", "nui-button", "", "type", "button", "displayStyle", "action", 3, "click"], i18n_6, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "ml-3", 3, "click"], i18n_8]; }, template: function PopoverModalExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PopoverModalExampleComponent_ng_template_3_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r0)("modal", true)("preventClosing", true)("closePopover", ctx.closePopoverSubject);
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__["PopoverComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "zhSv":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/popover sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "6sg9",
	"./popover-basic-usage/popover-basic-usage.example.component.html": "475p",
	"./popover-basic-usage/popover-basic-usage.example.component.ts": "CMW8",
	"./popover-click-trigger/popover-click-trigger.example.component.html": "9XZJ",
	"./popover-click-trigger/popover-click-trigger.example.component.ts": "IheK",
	"./popover-debounce/popover-debounce.example.component.html": "nJTf",
	"./popover-debounce/popover-debounce.example.component.ts": "pHsd",
	"./popover-disabled/popover-disabled.example.component.html": "Q5dp",
	"./popover-disabled/popover-disabled.example.component.ts": "574c",
	"./popover-docs/popover-docs.example.component.html": "1QO/",
	"./popover-docs/popover-docs.example.component.ts": "ddxJ",
	"./popover-focus-trigger/popover-focus-trigger.example.component.html": "aSU9",
	"./popover-focus-trigger/popover-focus-trigger.example.component.ts": "urh8",
	"./popover-icon/popover-icon.example.component.html": "8Wm0",
	"./popover-icon/popover-icon.example.component.less": "qD9R",
	"./popover-icon/popover-icon.example.component.ts": "mZOL",
	"./popover-modal/popover-modal.example.component.html": "lxAA",
	"./popover-modal/popover-modal.example.component.ts": "RuwF",
	"./popover-mouseenter-trigger/popover-mouseenter-trigger.example.component.html": "lTsw",
	"./popover-mouseenter-trigger/popover-mouseenter-trigger.example.component.ts": "XhPB",
	"./popover-no-padding/popover-no-padding.example.component.html": "cK4J",
	"./popover-no-padding/popover-no-padding.example.component.ts": "Vqwv",
	"./popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component.html": "96T2",
	"./popover-open-and-close-programmatically/popover-open-and-close-programmatically.example.component.ts": "q3Nw",
	"./popover-outputs/popover-outputs.example.component.html": "7Ff3",
	"./popover-outputs/popover-outputs.example.component.ts": "v4jN",
	"./popover-placement/popover-placement.example.component.html": "Jiex",
	"./popover-placement/popover-placement.example.component.ts": "YfJk",
	"./popover-prevent-close-on-click/popover-prevent-close-on-click.example.component.html": "5EQs",
	"./popover-prevent-close-on-click/popover-prevent-close-on-click.example.component.ts": "7/Ha",
	"./popover-status/popover-status.example.component.html": "1g4a",
	"./popover-status/popover-status.example.component.less": "ItgN",
	"./popover-status/popover-status.example.component.ts": "xQjU",
	"./popover-unlimited/popover-unlimited.example.component.html": "b4Ch",
	"./popover-unlimited/popover-unlimited.example.component.ts": "tIEi",
	"./popover-visual-test/popover-visual-test.component.html": "e6tO",
	"./popover-visual-test/popover-visual-test.component.less": "JIV6",
	"./popover-visual-test/popover-visual-test.component.ts": "d4vd",
	"./popover-with-container/popover-with-container.example.component.html": "qAU8",
	"./popover-with-container/popover-with-container.example.component.ts": "B6Eq",
	"./popover-with-title/popover-with-title.example.component.html": "5eee",
	"./popover-with-title/popover-with-title.example.component.ts": "tKzj",
	"./popover.module.ts": "AlDU",
	"./styles.less": "kvwF"
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
webpackContext.id = "zhSv";

/***/ })

}]);
//# sourceMappingURL=demo-popover-popover-module-es2015.js.map