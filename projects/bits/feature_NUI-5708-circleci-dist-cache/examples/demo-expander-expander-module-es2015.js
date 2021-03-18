(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-expander-expander-module"],{

/***/ "0V5N":
/*!**************************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-custom-header/expander-custom-header.example.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ExpanderCustomHeaderExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderCustomHeaderExampleComponent", function() { return ExpanderCustomHeaderExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");



class ExpanderCustomHeaderExampleComponent {
    constructor() {
        this.itemsSource = [
            {
                header: "Group 1", itemsSource: [
                    { title: $localize `Item 1`, itemType: "action", action: this.actionDone },
                    { title: $localize `Item 2`, itemType: "action", action: () => alert($localize `hello`) },
                ],
            },
            {
                itemsSource: [
                    { title: $localize `Item 3`, itemType: "action", action: this.actionDone },
                ],
            },
        ];
    }
    actionDone() {
        console.log("Action Done");
    }
}
ExpanderCustomHeaderExampleComponent.ɵfac = function ExpanderCustomHeaderExampleComponent_Factory(t) { return new (t || ExpanderCustomHeaderExampleComponent)(); };
ExpanderCustomHeaderExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderCustomHeaderExampleComponent, selectors: [["nui-expander-custom-header-example"]], decls: 8, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2980688108457243770$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_CUSTOM_HEADER_EXPANDER_CUSTOM_HEADER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Advanced options");
        i18n_0 = MSG_EXTERNAL_2980688108457243770$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_CUSTOM_HEADER_EXPANDER_CUSTOM_HEADER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟6057ac678896fa14227163a94d804163290166e3␟2980688108457243770:Advanced options`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5604123572044860269$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_CUSTOM_HEADER_EXPANDER_CUSTOM_HEADER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Content is here");
        i18n_2 = MSG_EXTERNAL_5604123572044860269$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_CUSTOM_HEADER_EXPANDER_CUSTOM_HEADER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟40d572c70cba31b8774e3b60b58cfa17b82ba2cd␟5604123572044860269:Content is here`;
    } return [[1, "d-inline-block", "col-lg-2", "col-md-4", "col-sm-8", "px-0"], ["id", "nui-demo-expander-custom-header"], ["nuiExpanderHeader", "", 1, "d-flex", "align-items-center", "justify-content-between"], [1, "nui-text-label"], i18n_0, ["id", "nui-demo-expander-header-menu", "icon", "menu", "displayStyle", "action", "nuiClickInterceptor", "", 1, "ml-3", 3, "itemsSource"], i18n_2]; }, template: function ExpanderCustomHeaderExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-expander", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], encapsulation: 2 });


/***/ }),

/***/ "0VTe":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-open-change/expander-open-change.example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-expander\n    id=\"nui-demo-expander-open-change\"\n    i18n-header\n    header=\"Advanced options\"\n    (openChange)=\"onOpenChange($event)\"\n    [open]=\"bindingExampleOpen\">\n    <p i18n>Content goes here</p>\n</nui-expander>\n<button type=\"button\" class=\"nui-demo-expander-open-change-button\" nui-button (click)=\"bindingExampleOpen = !bindingExampleOpen\">\n    {{getButtonLabel()}}\n</button>\n");

/***/ }),

/***/ "2ntt":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-header-text/expander-header-text.example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-expander-header-text-example\",\n    templateUrl: \"expander-header-text.example.component.html\",\n})\n\nexport class ExpanderHeaderTextExampleComponent {\n}\n");

/***/ }),

/***/ "3gio":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-initially-expanded/expander-initially-expanded.example.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-expander id=\"nui-demo-expander-initially-expanded\" i18n-header header=\"Advanced Options\" [open]=\"true\">\n    <p i18n>Content goes here</p>\n</nui-expander>\n");

/***/ }),

/***/ "3uTE":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-custom-header/expander-custom-header.example.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { IMenuGroup } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-expander-custom-header-example\",\n    templateUrl: \"expander-custom-header.example.component.html\",\n})\nexport class ExpanderCustomHeaderExampleComponent {\n    public itemsSource: IMenuGroup[] = [\n        {\n            header: \"Group 1\", itemsSource: [\n                { title: $localize `Item 1`, itemType: \"action\", action: this.actionDone },\n                { title: $localize `Item 2`, itemType: \"action\", action: () => alert($localize `hello`) },\n            ],\n        },\n        {\n            itemsSource: [\n                { title: $localize `Item 3`, itemType: \"action\", action: this.actionDone },\n            ],\n        },\n    ];\n\n    constructor() { }\n\n    public actionDone(): void {\n        console.log(\"Action Done\");\n    }\n}\n\n");

/***/ }),

/***/ "55Ug":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-docs/expander-docs.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiExpanderModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To implement basic <code>&lt;nui-expander&gt;</code> wrap content with <code>&lt;nui-expander&gt;</code> element.\n</p>\n<nui-example-wrapper filenamePrefix=\"expander-basic\" exampleTitle=\"Basic usage\">\n    <nui-expander-basic-example></nui-expander-basic-example>\n</nui-example-wrapper>\n\n<h2>Header Text</h2>\n<p>\n    To add heading to <code>&lt;nui-expander&gt;</code> header you need to pass <code>header</code> property with text, that\n    you want to be added as a expander heading.\n</p>\n<nui-example-wrapper filenamePrefix=\"expander-header-text\" exampleTitle=\"Header text\">\n    <nui-expander-header-text-example></nui-expander-header-text-example>\n</nui-example-wrapper>\n\n<h2>Header Text and Icon</h2>\n<p>\n    To add icon to <code>&lt;nui-expander&gt;</code> header you need to pass <code>icon</code> property with the name of\n    the icon.\n</p>\n<nui-example-wrapper filenamePrefix=\"expander-text-and-icon\" exampleTitle=\"Header text and icon\">\n    <nui-expander-text-and-icon-example></nui-expander-text-and-icon-example>\n</nui-example-wrapper>\n\n<h2>Custom Header</h2>\n\n<p>\n    Instead of using <code>header</code> and <code>icon</code> properties to set expander's header you can create\n    custom expander header. To create custom header you need to pass custom content inside <code>&lt;nui-expander&gt;</code>\n    and to add <code>nuiExpanderHeader</code> attribute to the element, which contains this custom content.\n</p>\n<p>\n    Components with independent actions may be embedded into custom expander header. The following example demonstrates\n    how to create custom expander header with embedded menu.\n</p>\n\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> The following example makes use of the <code>nuiClickInterceptor</code> directive. To use this directive, be sure to import <code>NuiCommonModule</code> in your component's parent module.\n\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"expander-custom-header\" exampleTitle=\"Custom header\">\n    <nui-expander-custom-header-example></nui-expander-custom-header-example>\n</nui-example-wrapper>\n\n<h2>Initially Expanded</h2>\n<p>\n    If you want to have <code>&lt;nui-expander&gt;</code> opened by default you need to pass <code>[open]=\"true\"</code>\n    property into the <code>&lt;nui-expander&gt;</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"expander-initially-expanded\" exampleTitle=\"Initially expanded\">\n    <nui-expander-initially-expanded-example></nui-expander-initially-expanded-example>\n</nui-example-wrapper>\n\n<h2>Subscribing to Open Change</h2>\n<p>\n    If you want to subscribe to <code>&lt;nui-expander&gt;</code> opening and closing event you need to use\n    <code>(openChange)</code> output.\n</p>\n<nui-example-wrapper filenamePrefix=\"expander-open-change\" exampleTitle=\"Subscribing to open change\">\n    <nui-expander-open-change-example></nui-expander-open-change-example>\n</nui-example-wrapper>\n\n<h2>Without Expand Line</h2>\n<p>\n    If you want to remove left dotted line from <code>&lt;nui-expander&gt;</code> you need to pass\n    <code>[hideLeftBorder]=\"true\"</code> to <code>&lt;nui-expander&gt;</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"expander-without-border\" exampleTitle=\"Without expand line\">\n    <nui-expander-without-border-example></nui-expander-without-border-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "5nCS":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-without-border/expander-without-border.example.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-expander id=\"nui-demo-expander-without-border\" i18n-header header=\"Advanced Options\" [hideLeftBorder]=\"true\">\n    <p i18n>Content goes here</p>\n</nui-expander>\n");

/***/ }),

/***/ "6kzh":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-initially-expanded/expander-initially-expanded.example.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-expander-initially-expanded-example\",\n    templateUrl: \"expander-initially-expanded.example.component.html\",\n})\n\nexport class ExpanderInitiallyExpandedExampleComponent {\n}\n");

/***/ }),

/***/ "BDOU":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-basic/expander-basic.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-expander-basic-example\",\n    templateUrl: \"expander-basic.example.component.html\",\n})\n\nexport class ExpanderBasicExampleComponent {\n}\n");

/***/ }),

/***/ "Cuoo":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/index.ts ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./expander-basic/expander-basic.example.component\";\nexport * from \"./expander-docs/expander-docs.example.component\";\nexport * from \"./expander-custom-header/expander-custom-header.example.component\";\nexport * from \"./expander-header-text/expander-header-text.example.component\";\nexport * from \"./expander-text-and-icon/expander-text-and-icon.example.component\";\nexport * from \"./expander-initially-expanded/expander-initially-expanded.example.component\";\nexport * from \"./expander-open-change/expander-open-change.example.component\";\nexport * from \"./expander-without-border/expander-without-border.example.component\";\nexport * from \"./expander-visual-test/expander-visual-test.component\";\n");

/***/ }),

/***/ "EX9H":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-open-change/expander-open-change.example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExpanderOpenChangeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderOpenChangeExampleComponent", function() { return ExpanderOpenChangeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");



class ExpanderOpenChangeExampleComponent {
    constructor() {
        this.bindingExampleOpen = false;
    }
    getButtonLabel() {
        return this.bindingExampleOpen ? $localize `Close` : $localize `Open`;
    }
    onOpenChange(event) {
        this.bindingExampleOpen = event;
    }
}
ExpanderOpenChangeExampleComponent.ɵfac = function ExpanderOpenChangeExampleComponent_Factory(t) { return new (t || ExpanderOpenChangeExampleComponent)(); };
ExpanderOpenChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderOpenChangeExampleComponent, selectors: [["nui-expander-open-change-example"]], decls: 5, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2980688108457243770$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_OPEN_CHANGE_EXPANDER_OPEN_CHANGE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Advanced options");
        i18n_0 = MSG_EXTERNAL_2980688108457243770$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_OPEN_CHANGE_EXPANDER_OPEN_CHANGE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟6057ac678896fa14227163a94d804163290166e3␟2980688108457243770:Advanced options`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_OPEN_CHANGE_EXPANDER_OPEN_CHANGE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Content goes here");
        i18n_2 = MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_OPEN_CHANGE_EXPANDER_OPEN_CHANGE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8a3deffdaf691c1424e47239832379213c73320b␟7091744842168829224:Content goes here`;
    } return [["id", "nui-demo-expander-open-change", "header", i18n_0, 3, "open", "openChange"], i18n_2, ["type", "button", "nui-button", "", 1, "nui-demo-expander-open-change-button", 3, "click"]]; }, template: function ExpanderOpenChangeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-expander", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openChange", function ExpanderOpenChangeExampleComponent_Template_nui_expander_openChange_0_listener($event) { return ctx.onOpenChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpanderOpenChangeExampleComponent_Template_button_click_3_listener() { return ctx.bindingExampleOpen = !ctx.bindingExampleOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.bindingExampleOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getButtonLabel(), "\n");
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "H/2L":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-custom-header/expander-custom-header.example.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-inline-block col-lg-2 col-md-4 col-sm-8 px-0\">\n    <nui-expander id=\"nui-demo-expander-custom-header\">\n        <div nuiExpanderHeader\n             class=\"d-flex align-items-center justify-content-between\">\n            <span i18n class=\"nui-text-label\">Advanced options</span>\n            <nui-menu class=\"ml-3\"\n                      id=\"nui-demo-expander-header-menu\"\n                      icon=\"menu\"\n                      displayStyle=\"action\"\n                      [itemsSource]=\"itemsSource\"\n                      nuiClickInterceptor></nui-menu>\n        </div>\n        <p i18n>Content is here</p>\n    </nui-expander>\n</div>\n");

/***/ }),

/***/ "Lh5B":
/*!**************************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-text-and-icon/expander-text-and-icon.example.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ExpanderTextAndIconExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderTextAndIconExampleComponent", function() { return ExpanderTextAndIconExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");


class ExpanderTextAndIconExampleComponent {
}
ExpanderTextAndIconExampleComponent.ɵfac = function ExpanderTextAndIconExampleComponent_Factory(t) { return new (t || ExpanderTextAndIconExampleComponent)(); };
ExpanderTextAndIconExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderTextAndIconExampleComponent, selectors: [["nui-expander-text-and-icon-example"]], decls: 3, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6358767024326715915$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_TEXT_AND_ICON_EXPANDER_TEXT_AND_ICON_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Advanced Options");
        i18n_0 = MSG_EXTERNAL_6358767024326715915$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_TEXT_AND_ICON_EXPANDER_TEXT_AND_ICON_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟61cc73163be97beb025909b9ac3596e8c98156fd␟6358767024326715915:Advanced Options`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_TEXT_AND_ICON_EXPANDER_TEXT_AND_ICON_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Content goes here");
        i18n_2 = MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_TEXT_AND_ICON_EXPANDER_TEXT_AND_ICON_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8a3deffdaf691c1424e47239832379213c73320b␟7091744842168829224:Content goes here`;
    } return [["id", "nui-demo-expander-text-and-icon", "header", i18n_0, "icon", "orion-sitemaster"], i18n_2]; }, template: function ExpanderTextAndIconExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-expander", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"]], encapsulation: 2 });


/***/ }),

/***/ "NGd+":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-text-and-icon/expander-text-and-icon.example.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-expander id=\"nui-demo-expander-text-and-icon\" i18n-header header=\"Advanced Options\" icon=\"orion-sitemaster\">\n    <p i18n>Content goes here</p>\n</nui-expander>\n");

/***/ }),

/***/ "TNXm":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./expander-basic/expander-basic.example.component.html": "wEze",
	"./expander-basic/expander-basic.example.component.ts": "BDOU",
	"./expander-custom-header/expander-custom-header.example.component.html": "H/2L",
	"./expander-custom-header/expander-custom-header.example.component.ts": "3uTE",
	"./expander-docs/expander-docs.example.component.html": "55Ug",
	"./expander-docs/expander-docs.example.component.ts": "rg5m",
	"./expander-header-text/expander-header-text.example.component.html": "cGD0",
	"./expander-header-text/expander-header-text.example.component.ts": "2ntt",
	"./expander-initially-expanded/expander-initially-expanded.example.component.html": "3gio",
	"./expander-initially-expanded/expander-initially-expanded.example.component.ts": "6kzh",
	"./expander-open-change/expander-open-change.example.component.html": "0VTe",
	"./expander-open-change/expander-open-change.example.component.ts": "fiK1",
	"./expander-text-and-icon/expander-text-and-icon.example.component.html": "NGd+",
	"./expander-text-and-icon/expander-text-and-icon.example.component.ts": "isy5",
	"./expander-visual-test/expander-visual-test.component.html": "Zord",
	"./expander-visual-test/expander-visual-test.component.ts": "yV4x",
	"./expander-without-border/expander-without-border.example.component.html": "5nCS",
	"./expander-without-border/expander-without-border.example.component.ts": "c0fA",
	"./expander.module.ts": "aAeX",
	"./index.ts": "Cuoo"
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
webpackContext.id = "TNXm";

/***/ }),

/***/ "Xqgv":
/*!************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-initially-expanded/expander-initially-expanded.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ExpanderInitiallyExpandedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderInitiallyExpandedExampleComponent", function() { return ExpanderInitiallyExpandedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");


class ExpanderInitiallyExpandedExampleComponent {
}
ExpanderInitiallyExpandedExampleComponent.ɵfac = function ExpanderInitiallyExpandedExampleComponent_Factory(t) { return new (t || ExpanderInitiallyExpandedExampleComponent)(); };
ExpanderInitiallyExpandedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderInitiallyExpandedExampleComponent, selectors: [["nui-expander-initially-expanded-example"]], decls: 3, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6358767024326715915$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_INITIALLY_EXPANDED_EXPANDER_INITIALLY_EXPANDED_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Advanced Options");
        i18n_0 = MSG_EXTERNAL_6358767024326715915$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_INITIALLY_EXPANDED_EXPANDER_INITIALLY_EXPANDED_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟61cc73163be97beb025909b9ac3596e8c98156fd␟6358767024326715915:Advanced Options`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_INITIALLY_EXPANDED_EXPANDER_INITIALLY_EXPANDED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Content goes here");
        i18n_2 = MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_INITIALLY_EXPANDED_EXPANDER_INITIALLY_EXPANDED_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8a3deffdaf691c1424e47239832379213c73320b␟7091744842168829224:Content goes here`;
    } return [["id", "nui-demo-expander-initially-expanded", "header", i18n_0, 3, "open"], i18n_2]; }, template: function ExpanderInitiallyExpandedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-expander", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", true);
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Zord":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-visual-test/expander-visual-test.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Expander</h3>\n            <nui-expander id=\"nui-visual-test-expander-basic\">\n                <p>Content is here</p>\n            </nui-expander>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Expander without Expand Line</h3>\n            <nui-expander id=\"nui-visual-test-expander-without-border\"\n                          [hideLeftBorder]=\"true\">\n                <p>Content is here</p>\n            </nui-expander>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Expander with Text</h3>\n            <nui-expander id=\"nui-visual-test-expander-header-text\"\n                          header=\"Advanced Layout Settings\">\n                <p>Content is here</p>\n            </nui-expander>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Expander with Text and Icon</h3>\n            <nui-expander id=\"nui-visual-test-expander-text-and-icon\"\n                          header=\"Advanced Options\"\n                          icon=\"orion-sitemaster\">\n                <p>Content is here</p>\n            </nui-expander>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col-4\">\n            <h3>Expander with Custom Header</h3>\n            <nui-expander id=\"nui-visual-test-expander-custom-header\">\n                <div nuiExpanderHeader\n                     class=\"d-flex align-items-center justify-content-between\">\n                    <span>Advanced options</span>\n                    <nui-menu class=\"ml-3\"\n                              id=\"nui-demo-expander-header-menu\"\n                              icon=\"menu\"\n                              displayStyle=\"action\"\n                              nuiClickInterceptor\n                              [itemsSource]=\"itemsSource\"></nui-menu>\n                </div>\n                <p>Content is here</p>\n            </nui-expander>\n            <hr />\n        </div>\n        <div class=\"col-6 ml-auto\">\n            <h3>Staked Expanders</h3>\n            <nui-expander id=\"nui-visual-test-staked-expander-1\" header=\"Advanced Layout Settings\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.</p>\n            </nui-expander>\n            <nui-expander id=\"nui-visual-test-staked-expander-2\">\n                <div nuiExpanderHeader class=\"nui-text-default\">\n                    <span>Advanced options</span>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.</p>\n            </nui-expander>\n            <nui-expander id=\"nui-visual-test-staked-expander-3\">\n                <div nuiExpanderHeader class=\"nui-text-secondary\">\n                    <span>Advanced options</span>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum.\n                    Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus.\n                    Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus.\n                    Maecenas eget arcu ac ante sagittis eleifend vel ut purus.</p>\n            </nui-expander>\n            <hr />\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "aAeX":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiExpanderModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    ExpanderBasicExampleComponent,\n    ExpanderCustomHeaderExampleComponent,\n    ExpanderDocsExampleComponent,\n    ExpanderHeaderTextExampleComponent,\n    ExpanderInitiallyExpandedExampleComponent,\n    ExpanderOpenChangeExampleComponent,\n    ExpanderTextAndIconExampleComponent,\n    ExpanderVisualTestComponent,\n    ExpanderWithoutBorderExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ExpanderDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"expander-visual-test\",\n        component: ExpanderVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiExpanderModule,\n        NuiMenuModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ExpanderBasicExampleComponent,\n        ExpanderCustomHeaderExampleComponent,\n        ExpanderDocsExampleComponent,\n        ExpanderHeaderTextExampleComponent,\n        ExpanderInitiallyExpandedExampleComponent,\n        ExpanderTextAndIconExampleComponent,\n        ExpanderOpenChangeExampleComponent,\n        ExpanderWithoutBorderExampleComponent,\n        ExpanderVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ExpanderModule {\n}\n");

/***/ }),

/***/ "c0fA":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-without-border/expander-without-border.example.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-expander-without-border-example\",\n    templateUrl: \"expander-without-border.example.component.html\",\n})\n\nexport class ExpanderWithoutBorderExampleComponent {\n}\n");

/***/ }),

/***/ "cGD0":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-header-text/expander-header-text.example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-expander id=\"nui-demo-expander-header-text\" i18n-header header=\"Advanced Layout Settings\">\n    <p i18n>Content goes here</p>\n</nui-expander>\n");

/***/ }),

/***/ "eDM8":
/*!**************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander.module.ts ***!
  \**************************************************************/
/*! exports provided: ExpanderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderModule", function() { return ExpanderModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "y46J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderDocsExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "expander-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class ExpanderModule {
}
ExpanderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExpanderModule });
ExpanderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ExpanderModule_Factory(t) { return new (t || ExpanderModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("TNXm"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiExpanderModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExpanderModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["ExpanderBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderCustomHeaderExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderHeaderTextExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderInitiallyExpandedExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderTextAndIconExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderOpenChangeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderWithoutBorderExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ExpanderVisualTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiExpanderModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fiK1":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-open-change/expander-open-change.example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-expander-open-change-example\",\n    templateUrl: \"expander-open-change.example.component.html\",\n})\n\nexport class ExpanderOpenChangeExampleComponent {\n    public bindingExampleOpen: boolean = false;\n\n    constructor() {}\n\n    public getButtonLabel() {\n        return this.bindingExampleOpen ? $localize `Close` : $localize `Open`;\n    }\n\n    public onOpenChange(event: boolean) {\n        this.bindingExampleOpen = event;\n    }\n}\n");

/***/ }),

/***/ "hWcb":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-header-text/expander-header-text.example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ExpanderHeaderTextExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderHeaderTextExampleComponent", function() { return ExpanderHeaderTextExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");


class ExpanderHeaderTextExampleComponent {
}
ExpanderHeaderTextExampleComponent.ɵfac = function ExpanderHeaderTextExampleComponent_Factory(t) { return new (t || ExpanderHeaderTextExampleComponent)(); };
ExpanderHeaderTextExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderHeaderTextExampleComponent, selectors: [["nui-expander-header-text-example"]], decls: 3, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8178768099721362919$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_HEADER_TEXT_EXPANDER_HEADER_TEXT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Advanced Layout Settings");
        i18n_0 = MSG_EXTERNAL_8178768099721362919$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_HEADER_TEXT_EXPANDER_HEADER_TEXT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟15dd734b4e4fc313147d0fa7516d40c3e21abe1e␟8178768099721362919:Advanced Layout Settings`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_HEADER_TEXT_EXPANDER_HEADER_TEXT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Content goes here");
        i18n_2 = MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_HEADER_TEXT_EXPANDER_HEADER_TEXT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8a3deffdaf691c1424e47239832379213c73320b␟7091744842168829224:Content goes here`;
    } return [["id", "nui-demo-expander-header-text", "header", i18n_0], i18n_2]; }, template: function ExpanderHeaderTextExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-expander", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"]], encapsulation: 2 });


/***/ }),

/***/ "isy5":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-text-and-icon/expander-text-and-icon.example.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-expander-text-and-icon-example\",\n    templateUrl: \"expander-text-and-icon.example.component.html\",\n})\n\nexport class ExpanderTextAndIconExampleComponent {\n}\n");

/***/ }),

/***/ "pTw4":
/*!****************************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-without-border/expander-without-border.example.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ExpanderWithoutBorderExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderWithoutBorderExampleComponent", function() { return ExpanderWithoutBorderExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");


class ExpanderWithoutBorderExampleComponent {
}
ExpanderWithoutBorderExampleComponent.ɵfac = function ExpanderWithoutBorderExampleComponent_Factory(t) { return new (t || ExpanderWithoutBorderExampleComponent)(); };
ExpanderWithoutBorderExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderWithoutBorderExampleComponent, selectors: [["nui-expander-without-border-example"]], decls: 3, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6358767024326715915$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_WITHOUT_BORDER_EXPANDER_WITHOUT_BORDER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Advanced Options");
        i18n_0 = MSG_EXTERNAL_6358767024326715915$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_WITHOUT_BORDER_EXPANDER_WITHOUT_BORDER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟61cc73163be97beb025909b9ac3596e8c98156fd␟6358767024326715915:Advanced Options`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_WITHOUT_BORDER_EXPANDER_WITHOUT_BORDER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Content goes here");
        i18n_2 = MSG_EXTERNAL_7091744842168829224$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_WITHOUT_BORDER_EXPANDER_WITHOUT_BORDER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8a3deffdaf691c1424e47239832379213c73320b␟7091744842168829224:Content goes here`;
    } return [["id", "nui-demo-expander-without-border", "header", i18n_0, 3, "hideLeftBorder"], i18n_2]; }, template: function ExpanderWithoutBorderExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-expander", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideLeftBorder", true);
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"]], encapsulation: 2 });


/***/ }),

/***/ "qyJo":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-docs/expander-docs.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ExpanderDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderDocsExampleComponent", function() { return ExpanderDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _expander_basic_expander_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expander-basic/expander-basic.example.component */ "sSlZ");
/* harmony import */ var _expander_header_text_expander_header_text_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expander-header-text/expander-header-text.example.component */ "hWcb");
/* harmony import */ var _expander_text_and_icon_expander_text_and_icon_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expander-text-and-icon/expander-text-and-icon.example.component */ "Lh5B");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _expander_custom_header_expander_custom_header_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../expander-custom-header/expander-custom-header.example.component */ "0V5N");
/* harmony import */ var _expander_initially_expanded_expander_initially_expanded_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../expander-initially-expanded/expander-initially-expanded.example.component */ "Xqgv");
/* harmony import */ var _expander_open_change_expander_open_change_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../expander-open-change/expander-open-change.example.component */ "EX9H");
/* harmony import */ var _expander_without_border_expander_without_border_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../expander-without-border/expander-without-border.example.component */ "pTw4");










class ExpanderDocsExampleComponent {
}
ExpanderDocsExampleComponent.ɵfac = function ExpanderDocsExampleComponent_Factory(t) { return new (t || ExpanderDocsExampleComponent)(); };
ExpanderDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderDocsExampleComponent, selectors: [["nui-expander-docs-example"]], decls: 114, vars: 1, consts: [["filenamePrefix", "expander-basic", "exampleTitle", "Basic usage"], ["filenamePrefix", "expander-header-text", "exampleTitle", "Header text"], ["filenamePrefix", "expander-text-and-icon", "exampleTitle", "Header text and icon"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "expander-custom-header", "exampleTitle", "Custom header"], ["filenamePrefix", "expander-initially-expanded", "exampleTitle", "Initially expanded"], ["filenamePrefix", "expander-open-change", "exampleTitle", "Subscribing to open change"], ["filenamePrefix", "expander-without-border", "exampleTitle", "Without expand line"]], template: function ExpanderDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiExpanderModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To implement basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " wrap content with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " element.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-expander-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Header Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " To add heading to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " header you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " property with text, that you want to be added as a expander heading.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-expander-header-text-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Header Text and Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " To add icon to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " header you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " property with the name of the icon.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-expander-text-and-icon-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Custom Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Instead of using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " properties to set expander's header you can create custom expander header. To create custom header you need to pass custom content inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " and to add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "nuiExpanderHeader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " attribute to the element, which contains this custom content.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Components with independent actions may be embedded into custom expander header. The following example demonstrates how to create custom expander header with embedded menu.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " The following example makes use of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "nuiClickInterceptor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " directive. To use this directive, be sure to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "NuiCommonModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " in your component's parent module. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-expander-custom-header-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Initially Expanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " If you want to have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " opened by default you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "[open]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " property into the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "nui-expander-initially-expanded-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Subscribing to Open Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " If you want to subscribe to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " opening and closing event you need to use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "(openChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " output.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "nui-expander-open-change-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Without Expand Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " If you want to remove left dotted line from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "[hideLeftBorder]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "<nui-expander>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "nui-expander-without-border-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _expander_basic_expander_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ExpanderBasicExampleComponent"], _expander_header_text_expander_header_text_example_component__WEBPACK_IMPORTED_MODULE_3__["ExpanderHeaderTextExampleComponent"], _expander_text_and_icon_expander_text_and_icon_example_component__WEBPACK_IMPORTED_MODULE_4__["ExpanderTextAndIconExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _expander_custom_header_expander_custom_header_example_component__WEBPACK_IMPORTED_MODULE_6__["ExpanderCustomHeaderExampleComponent"], _expander_initially_expanded_expander_initially_expanded_example_component__WEBPACK_IMPORTED_MODULE_7__["ExpanderInitiallyExpandedExampleComponent"], _expander_open_change_expander_open_change_example_component__WEBPACK_IMPORTED_MODULE_8__["ExpanderOpenChangeExampleComponent"], _expander_without_border_expander_without_border_example_component__WEBPACK_IMPORTED_MODULE_9__["ExpanderWithoutBorderExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "rIRT":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-visual-test/expander-visual-test.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExpanderVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderVisualTestComponent", function() { return ExpanderVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");



class ExpanderVisualTestComponent {
    constructor() {
        this.itemsSource = [
            {
                header: "Group 1", itemsSource: [
                    { title: "Item 1" },
                    { title: "Item 2" },
                ],
            },
            {
                itemsSource: [
                    { title: "Item 3" },
                ],
            },
        ];
    }
}
ExpanderVisualTestComponent.ɵfac = function ExpanderVisualTestComponent_Factory(t) { return new (t || ExpanderVisualTestComponent)(); };
ExpanderVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderVisualTestComponent, selectors: [["expander-visual-test"]], decls: 62, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-visual-test-expander-basic"], ["id", "nui-visual-test-expander-without-border", 3, "hideLeftBorder"], [1, "w-100"], ["id", "nui-visual-test-expander-header-text", "header", "Advanced Layout Settings"], ["id", "nui-visual-test-expander-text-and-icon", "header", "Advanced Options", "icon", "orion-sitemaster"], [1, "col-4"], ["id", "nui-visual-test-expander-custom-header"], ["nuiExpanderHeader", "", 1, "d-flex", "align-items-center", "justify-content-between"], ["id", "nui-demo-expander-header-menu", "icon", "menu", "displayStyle", "action", "nuiClickInterceptor", "", 1, "ml-3", 3, "itemsSource"], [1, "col-6", "ml-auto"], ["id", "nui-visual-test-staked-expander-1", "header", "Advanced Layout Settings"], ["id", "nui-visual-test-staked-expander-2"], ["nuiExpanderHeader", "", 1, "nui-text-default"], ["id", "nui-visual-test-staked-expander-3"], ["nuiExpanderHeader", "", 1, "nui-text-secondary"]], template: function ExpanderVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Expander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-expander", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Content is here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expander without Expand Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-expander", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Content is here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Expander with Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-expander", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Content is here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Expander with Text and Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nui-expander", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Content is here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Expander with Custom Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nui-expander", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Advanced options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Content is here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Staked Expanders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-expander", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nui-expander", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Advanced options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-expander", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Advanced options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus faucibus bibendum. Aenean feugiat interdum leo sed posuere. Etiam at pulvinar enim, nec interdum purus. Duis elit metus, lobortis vitae quam a, malesuada cursus quam. Duis vel lacinia purus. Maecenas eget arcu ac ante sagittis eleifend vel ut purus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideLeftBorder", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"], _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], encapsulation: 2 });


/***/ }),

/***/ "rg5m":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-docs/expander-docs.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-expander-docs-example\",\n    templateUrl: \"expander-docs.example.component.html\",\n})\n\nexport class ExpanderDocsExampleComponent {\n}\n\n");

/***/ }),

/***/ "sSlZ":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/expander/expander-basic/expander-basic.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ExpanderBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpanderBasicExampleComponent", function() { return ExpanderBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/expander/expander.component */ "j4OC");


class ExpanderBasicExampleComponent {
}
ExpanderBasicExampleComponent.ɵfac = function ExpanderBasicExampleComponent_Factory(t) { return new (t || ExpanderBasicExampleComponent)(); };
ExpanderBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderBasicExampleComponent, selectors: [["nui-expander-basic-example"]], decls: 3, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5604123572044860269$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_BASIC_EXPANDER_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Content is here");
        i18n_0 = MSG_EXTERNAL_5604123572044860269$$DEMO_SRC_COMPONENTS_DEMO_EXPANDER_EXPANDER_BASIC_EXPANDER_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟40d572c70cba31b8774e3b60b58cfa17b82ba2cd␟5604123572044860269:Content is here`;
    } return [["id", "nui-demo-expander-basic"], i18n_0]; }, template: function ExpanderBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-expander", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderComponent"]], encapsulation: 2 });


/***/ }),

/***/ "wEze":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-basic/expander-basic.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-expander id=\"nui-demo-expander-basic\">\n    <p i18n>Content is here</p>\n</nui-expander>\n");

/***/ }),

/***/ "y46J":
/*!****************************************************!*\
  !*** ./demo/src/components/demo/expander/index.ts ***!
  \****************************************************/
/*! exports provided: ExpanderBasicExampleComponent, ExpanderDocsExampleComponent, ExpanderCustomHeaderExampleComponent, ExpanderHeaderTextExampleComponent, ExpanderTextAndIconExampleComponent, ExpanderInitiallyExpandedExampleComponent, ExpanderOpenChangeExampleComponent, ExpanderWithoutBorderExampleComponent, ExpanderVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expander_basic_expander_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expander-basic/expander-basic.example.component */ "sSlZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderBasicExampleComponent", function() { return _expander_basic_expander_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["ExpanderBasicExampleComponent"]; });

/* harmony import */ var _expander_docs_expander_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expander-docs/expander-docs.example.component */ "qyJo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderDocsExampleComponent", function() { return _expander_docs_expander_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["ExpanderDocsExampleComponent"]; });

/* harmony import */ var _expander_custom_header_expander_custom_header_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expander-custom-header/expander-custom-header.example.component */ "0V5N");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderCustomHeaderExampleComponent", function() { return _expander_custom_header_expander_custom_header_example_component__WEBPACK_IMPORTED_MODULE_2__["ExpanderCustomHeaderExampleComponent"]; });

/* harmony import */ var _expander_header_text_expander_header_text_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expander-header-text/expander-header-text.example.component */ "hWcb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderHeaderTextExampleComponent", function() { return _expander_header_text_expander_header_text_example_component__WEBPACK_IMPORTED_MODULE_3__["ExpanderHeaderTextExampleComponent"]; });

/* harmony import */ var _expander_text_and_icon_expander_text_and_icon_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expander-text-and-icon/expander-text-and-icon.example.component */ "Lh5B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderTextAndIconExampleComponent", function() { return _expander_text_and_icon_expander_text_and_icon_example_component__WEBPACK_IMPORTED_MODULE_4__["ExpanderTextAndIconExampleComponent"]; });

/* harmony import */ var _expander_initially_expanded_expander_initially_expanded_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expander-initially-expanded/expander-initially-expanded.example.component */ "Xqgv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderInitiallyExpandedExampleComponent", function() { return _expander_initially_expanded_expander_initially_expanded_example_component__WEBPACK_IMPORTED_MODULE_5__["ExpanderInitiallyExpandedExampleComponent"]; });

/* harmony import */ var _expander_open_change_expander_open_change_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expander-open-change/expander-open-change.example.component */ "EX9H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderOpenChangeExampleComponent", function() { return _expander_open_change_expander_open_change_example_component__WEBPACK_IMPORTED_MODULE_6__["ExpanderOpenChangeExampleComponent"]; });

/* harmony import */ var _expander_without_border_expander_without_border_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expander-without-border/expander-without-border.example.component */ "pTw4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderWithoutBorderExampleComponent", function() { return _expander_without_border_expander_without_border_example_component__WEBPACK_IMPORTED_MODULE_7__["ExpanderWithoutBorderExampleComponent"]; });

/* harmony import */ var _expander_visual_test_expander_visual_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expander-visual-test/expander-visual-test.component */ "rIRT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpanderVisualTestComponent", function() { return _expander_visual_test_expander_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["ExpanderVisualTestComponent"]; });












/***/ }),

/***/ "yV4x":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/expander/expander-visual-test/expander-visual-test.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { IMenuGroup } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"expander-visual-test\",\n    templateUrl: \"./expander-visual-test.component.html\",\n})\n\nexport class ExpanderVisualTestComponent {\n    public itemsSource: IMenuGroup[] = [\n        {\n            header: \"Group 1\", itemsSource: [\n                { title: \"Item 1\" },\n                { title: \"Item 2\" },\n            ],\n        },\n        {\n            itemsSource: [\n                { title: \"Item 3\" },\n            ],\n        },\n    ];\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-expander-expander-module-es2015.js.map