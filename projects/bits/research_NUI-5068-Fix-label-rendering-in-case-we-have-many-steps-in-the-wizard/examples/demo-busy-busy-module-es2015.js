(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-busy-busy-module"],{

/***/ "+4mb":
/*!************************************************!*\
  !*** ./demo/src/components/demo/busy/index.ts ***!
  \************************************************/
/*! exports provided: BusyBasicExampleComponent, BusyDocsExampleComponent, BusyProgressExampleComponent, BusySpinnerExampleComponent, BusyVisualTestComponent, BusyTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _busy_basic_busy_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./busy-basic/busy-basic.example.component */ "UXGw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyBasicExampleComponent", function() { return _busy_basic_busy_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["BusyBasicExampleComponent"]; });

/* harmony import */ var _busy_docs_busy_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./busy-docs/busy-docs.example.component */ "EOVp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyDocsExampleComponent", function() { return _busy_docs_busy_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["BusyDocsExampleComponent"]; });

/* harmony import */ var _busy_progress_busy_progress_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./busy-progress/busy-progress.example.component */ "2qxw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyProgressExampleComponent", function() { return _busy_progress_busy_progress_example_component__WEBPACK_IMPORTED_MODULE_2__["BusyProgressExampleComponent"]; });

/* harmony import */ var _busy_spinner_busy_spinner_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./busy-spinner/busy-spinner.example.component */ "Y2l0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusySpinnerExampleComponent", function() { return _busy_spinner_busy_spinner_example_component__WEBPACK_IMPORTED_MODULE_3__["BusySpinnerExampleComponent"]; });

/* harmony import */ var _busy_visual_test_busy_visual_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./busy-visual-test/busy-visual-test.component */ "ihgi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyVisualTestComponent", function() { return _busy_visual_test_busy_visual_test_component__WEBPACK_IMPORTED_MODULE_4__["BusyVisualTestComponent"]; });

/* harmony import */ var _busy_test_busy_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./busy-test/busy-test.component */ "y2fB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BusyTestComponent", function() { return _busy_test_busy_test_component__WEBPACK_IMPORTED_MODULE_5__["BusyTestComponent"]; });









/***/ }),

/***/ "+qLq":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-basic/busy-basic.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-busy-basic-example\",\n    templateUrl: \"./busy-basic.example.component.html\",\n    styleUrls: [\n        \"./busy-basic.example.component.less\",\n    ],\n})\nexport class BusyBasicExampleComponent {\n    public busy: boolean;\n\n    public switchBusy() {\n        this.busy = !this.busy;\n    }\n}\n");

/***/ }),

/***/ "/Brj":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-test/busy-test.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-busy-test\",\n    templateUrl: \"./busy-test.component.html\",\n})\nexport class BusyTestComponent {\n    public busy: boolean;\n    public items = [\"Item 1\", \"Item 2\", \"Item 3\", \"Item 4\", \"Item 5\"];\n\n    public switchBusy() {\n        this.busy = !this.busy;\n    }\n}\n");

/***/ }),

/***/ "0X5G":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-docs/busy-docs.example.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-busy-docs-example\",\n    templateUrl: \"./busy-docs.example.component.html\",\n})\nexport class BusyDocsExampleComponent {\n}\n");

/***/ }),

/***/ "2qId":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-spinner/busy-spinner.example.component.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".busy-content {\n    height: 100px;\n}");

/***/ }),

/***/ "2qxw":
/*!****************************************************************************************!*\
  !*** ./demo/src/components/demo/busy/busy-progress/busy-progress.example.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BusyProgressExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyProgressExampleComponent", function() { return BusyProgressExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/progress/progress.component */ "FA8p");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");





class BusyProgressExampleComponent {
    switchBusy() {
        this.busy = !this.busy;
    }
}
BusyProgressExampleComponent.ɵfac = function BusyProgressExampleComponent_Factory(t) { return new (t || BusyProgressExampleComponent)(); };
BusyProgressExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusyProgressExampleComponent, selectors: [["nui-busy-progress-example"]], decls: 7, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6887483002075545129$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_PROGRESS_BUSY_PROGRESS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Attempts to change my checked state will fail when busy is enabled ");
        i18n_0 = MSG_EXTERNAL_6887483002075545129$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_PROGRESS_BUSY_PROGRESS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟83e12761b4abf30b5889eab635d9c2a1850aa0c3␟6887483002075545129: Attempts to change my checked state will fail when busy is enabled `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_PROGRESS_BUSY_PROGRESS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hello from custom busy");
        i18n_2 = MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_PROGRESS_BUSY_PROGRESS_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b1203654bb65c56eb8ba40a2a9f1b1d26d516c51␟6776140435076536653:Hello from custom busy`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5767490880058191194$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_PROGRESS_BUSY_PROGRESS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Switch busy state\n");
        i18n_4 = MSG_EXTERNAL_5767490880058191194$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_PROGRESS_BUSY_PROGRESS_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟141c2f9ed6986f36ce72531923e8011703731904␟5767490880058191194: Switch busy state
`;
    } return [["id", "nui-demo-progress-busy", "nui-busy", "", 3, "busy"], [1, "busy-content"], i18n_0, ["id", "nui-demo-progress", "message", i18n_2], ["id", "nui-demo-progress-button", "nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_4]; }, template: function BusyProgressExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-progress", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusyProgressExampleComponent_Template_button_click_5_listener() { return ctx.switchBusy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__["BusyComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"], _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: [".busy-content[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3ktcHJvZ3Jlc3MuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJidXN5LXByb2dyZXNzLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVzeS1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "6iJg":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-progress/busy-progress.example.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"nui-demo-progress-busy\" nui-busy [busy]=\"busy\">\n    <div class=\"busy-content\">\n        <nui-checkbox i18n>\n            Attempts to change my checked state will fail when busy is enabled\n        </nui-checkbox>\n    </div>\n    <nui-progress id=\"nui-demo-progress\" i18n-message message=\"Hello from custom busy\"></nui-progress>\n</div>\n<button id=\"nui-demo-progress-button\"\n        nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        (click)=\"switchBusy()\"\n        i18n>\n    Switch busy state\n</button>\n");

/***/ }),

/***/ "77LL":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-test/busy-test.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic small busy</h3>\n            <div id=\"nui-busy-test-basic\" nui-busy [busy]=\"busy\">\n                <div class=\"test-busy-content\">\n                    Busy content\n                </div>\n            </div>\n            <hr />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Progress busy</h3>\n            <div id=\"nui-busy-test-progress\" nui-busy [busy]=\"busy\">\n                <div class=\"test-busy-content\">\n                    Busy content\n                </div>\n                <nui-progress id=\"nui-demo-progress\" message=\"Hello from custom busy\"></nui-progress>\n            </div>\n            <hr />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Custom busy</h3>\n            <nui-select class=\"row justify-content-md-center\"\n                        id=\"nui-busy-select-overlay\"\n                        [appendToBody]=\"true\"\n                        [itemsSource]=\"items\"></nui-select>\n            <div id=\"nui-busy-test-custom\" nui-busy [busy]=\"busy\">\n                <div class=\"test-busy-content\">\n                    <div>Busy content</div>\n                    <div>A bit more content</div>\n                    <div>A bit more content</div>\n                    <div>A bit more content to overlap with second item in the select</div>\n                    <button id=\"focusable-button-inside-busy-component\">button</button>\n                    <a href=\"#\">link</a>\n                    <nui-checkbox i18n>\n                        Attempts to change my checked state will fail when busy is enabled\n                    </nui-checkbox>\n\n                </div>\n                <nui-spinner id=\"nui-demo-spinner\" size=\"large\" message=\"Hello from custom busy\"></nui-spinner>\n            </div>\n            <hr />\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <button id=\"nui-busy-test-button\"\n                nui-button\n                type=\"button\"\n                (click)=\"switchBusy()\">\n            Switch busy state\n        </button>\n    </div>\n</div>\n");

/***/ }),

/***/ "7lOo":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-spinner/busy-spinner.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-busy-spinner-example\",\n    templateUrl: \"./busy-spinner.example.component.html\",\n    styleUrls: [\n        \"./busy-spinner.example.component.less\",\n    ],\n})\nexport class BusySpinnerExampleComponent {\n    public busy: boolean;\n\n    public switchBusy() {\n        this.busy = !this.busy;\n    }\n}\n");

/***/ }),

/***/ "DgiH":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-visual-test/busy-visual-test.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic small busy</h3>\n            <div id=\"nui-busy-test-basic\" nui-busy [busy]=\"busy\">\n                <div>Busy content</div>\n                <div>With any kind of content should have busy indication in the center of parent container</div>\n            </div>\n            <hr />\n        </div>\n    </div>\n\n     <div class=\"row\">\n        <div class=\"col\">\n            <h3>Custom busy</h3>\n            <div id=\"nui-busy-test-custom\" nui-busy [busy]=\"busy\">\n                <div class=\"visual-test-busy-content\">\n                    Busy content\n                </div>\n                <nui-spinner id=\"nui-demo-spinner\" size=\"large\" i18n-message message=\"Hello from custom busy\"></nui-spinner>\n            </div>\n            <hr />\n        </div>\n     </div>\n\n     <div class=\"row\">\n        <div class=\"col\">\n            <h3>Progress busy</h3>\n            <div id=\"nui-busy-test-progress\" nui-busy [busy]=\"busy\">\n                <div class=\"visual-test-busy-content\">\n                    Busy content\n                </div>\n                <nui-progress id=\"nui-demo-progress\" i18n-message message=\"Hello from custom busy\"></nui-progress>\n            </div>\n            <hr />\n        </div>\n     </div>\n\n     <div class=\"row\">\n        <div class=\"col\">\n            <h3>Progress busy from the start</h3>\n            <div id=\"nui-busy-test-progress\" nui-busy [busy]=\"busyAtTheStart\">\n                <div class=\"visual-test-busy-content\">\n                    Busy content\n                </div>\n                <nui-progress id=\"nui-demo-progress\" i18n-message message=\"Hello from custom busy\"></nui-progress>\n            </div>\n            <hr />\n        </div>\n     </div>\n\n     <div class=\"row\">\n        <div class=\"col\">\n            <h3>Custom busy</h3>\n            <div id=\"nui-busy-test-custom\" nui-busy [busy]=\"busyAtTheStart\">\n                <div class=\"visual-test-busy-content\">\n                    Busy content\n                </div>\n                <nui-spinner id=\"nui-demo-spinner\" size=\"large\" i18n-message message=\"Hello from custom busy\"></nui-spinner>\n            </div>\n            <hr />\n        </div>\n     </div>\n\n     <div class=\"row\">\n        <button id=\"nui-busy-test-button\" (click)=\"switchBusy()\">Switch busy state</button>\n     </div>\n</div>\n");

/***/ }),

/***/ "EOVp":
/*!********************************************************************************!*\
  !*** ./demo/src/components/demo/busy/busy-docs/busy-docs.example.component.ts ***!
  \********************************************************************************/
/*! exports provided: BusyDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyDocsExampleComponent", function() { return BusyDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _busy_basic_busy_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../busy-basic/busy-basic.example.component */ "UXGw");
/* harmony import */ var _busy_spinner_busy_spinner_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../busy-spinner/busy-spinner.example.component */ "Y2l0");
/* harmony import */ var _busy_progress_busy_progress_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../busy-progress/busy-progress.example.component */ "2qxw");






class BusyDocsExampleComponent {
}
BusyDocsExampleComponent.ɵfac = function BusyDocsExampleComponent_Factory(t) { return new (t || BusyDocsExampleComponent)(); };
BusyDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusyDocsExampleComponent, selectors: [["nui-busy-docs-example"]], decls: 69, vars: 2, consts: [["type", "warning", 3, "allowDismiss"], ["href", "../components/SpinnerComponent.html", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "busy-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "busy-spinner", "exampleTitle", "Custom Spinner"], ["href", "../components/ProgressComponent.html", "target", "_blank"], ["filenamePrefix", "busy-progress", "exampleTitle", "Custom Progress"]], template: function BusyDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pay Attention!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " For proper usage of this component, you may have to import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "BrowserAnimationsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NuiBusyModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " To add a busy overlay to some page content, add an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "nui-busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " attribute to the direct parent of the content to be overlaid. By default an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "<nui-spinner>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " component will be placed at the center of the busy overlay. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-message", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Busy overlay fills the whole area of an element with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "nui-busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-busy-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Custom Spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " To replace the default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "<nui-spinner>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " component, instantiate your own ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "<nui-spinner>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " and place it as a direct child of the element that has the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "nui-busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " attribute. You can set any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "<nui-spinner>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " inputs to customize it.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-busy-spinner-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Custom Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " To replace the default spinner with an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "<nui-progress>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " component, instantiate an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "<nui-progress>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " and place it as a direct child of the element that has the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "nui-busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " attribute. You can set any ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "<nui-progress>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " inputs to customize it.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "nui-busy-progress-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _busy_basic_busy_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["BusyBasicExampleComponent"], _busy_spinner_busy_spinner_example_component__WEBPACK_IMPORTED_MODULE_4__["BusySpinnerExampleComponent"], _busy_progress_busy_progress_example_component__WEBPACK_IMPORTED_MODULE_5__["BusyProgressExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "EZUW":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/busy sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./busy-basic/busy-basic.example.component.html": "k7Hg",
	"./busy-basic/busy-basic.example.component.less": "ioGz",
	"./busy-basic/busy-basic.example.component.ts": "+qLq",
	"./busy-docs/busy-docs.example.component.html": "w3d6",
	"./busy-docs/busy-docs.example.component.ts": "0X5G",
	"./busy-progress/busy-progress.example.component.html": "6iJg",
	"./busy-progress/busy-progress.example.component.less": "hwpB",
	"./busy-progress/busy-progress.example.component.ts": "Unmp",
	"./busy-spinner/busy-spinner.example.component.html": "lj+8",
	"./busy-spinner/busy-spinner.example.component.less": "2qId",
	"./busy-spinner/busy-spinner.example.component.ts": "7lOo",
	"./busy-test/busy-test.component.html": "77LL",
	"./busy-test/busy-test.component.ts": "/Brj",
	"./busy-visual-test/busy-visual-test.component.html": "DgiH",
	"./busy-visual-test/busy-visual-test.component.less": "dNFo",
	"./busy-visual-test/busy-visual-test.component.ts": "L6Uz",
	"./busy.module.ts": "TtOc",
	"./index.ts": "YZcI"
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
webpackContext.id = "EZUW";

/***/ }),

/***/ "FJuw":
/*!******************************************************!*\
  !*** ./demo/src/components/demo/busy/busy.module.ts ***!
  \******************************************************/
/*! exports provided: BusyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyModule", function() { return BusyModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _busy_docs_busy_docs_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./busy-docs/busy-docs.example.component */ "EOVp");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "+4mb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        component: _busy_docs_busy_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["BusyDocsExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "busy-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["BusyVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "busy-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["BusyTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class BusyModule {
}
BusyModule.ɵfac = function BusyModule_Factory(t) { return new (t || BusyModule)(); };
BusyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BusyModule });
BusyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("EZUW"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiBusyModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSpinnerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiProgressModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BusyModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["BusyBasicExampleComponent"],
        _busy_docs_busy_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["BusyDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["BusySpinnerExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["BusyProgressExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["BusyTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["BusyVisualTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiBusyModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSpinnerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCheckboxModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiProgressModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "L6Uz":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-visual-test/busy-visual-test.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-busy-visual\",\n    templateUrl: \"./busy-visual-test.component.html\",\n    styleUrls: [\n        \"./busy-visual-test.component.less\",\n    ],\n})\nexport class BusyVisualTestComponent {\n    public busy: boolean;\n    public busyAtTheStart: boolean = true;\n\n    public switchBusy() {\n        this.busy = !this.busy;\n    }\n}\n");

/***/ }),

/***/ "TtOc":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy.module.ts ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiBusyModule,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiProgressModule,\n    NuiSelectModule,\n    NuiSpinnerModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { BusyDocsExampleComponent } from \"./busy-docs/busy-docs.example.component\";\nimport {\n    BusyBasicExampleComponent,\n    BusyProgressExampleComponent,\n    BusySpinnerExampleComponent,\n    BusyTestComponent,\n    BusyVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: BusyDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"busy-visual-test\",\n        component: BusyVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"busy-test\",\n        component: BusyTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiBusyModule,\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiSpinnerModule,\n        NuiCheckboxModule,\n        NuiSelectModule,\n        NuiProgressModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        BusyBasicExampleComponent,\n        BusyDocsExampleComponent,\n        BusySpinnerExampleComponent,\n        BusyProgressExampleComponent,\n        BusyTestComponent,\n        BusyVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class BusyModule {\n}\n");

/***/ }),

/***/ "UXGw":
/*!**********************************************************************************!*\
  !*** ./demo/src/components/demo/busy/busy-basic/busy-basic.example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BusyBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyBasicExampleComponent", function() { return BusyBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");




class BusyBasicExampleComponent {
    switchBusy() {
        this.busy = !this.busy;
    }
}
BusyBasicExampleComponent.ɵfac = function BusyBasicExampleComponent_Factory(t) { return new (t || BusyBasicExampleComponent)(); };
BusyBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusyBasicExampleComponent, selectors: [["nui-busy-basic-example"]], decls: 6, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6887483002075545129$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_BASIC_BUSY_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Attempts to change my checked state will fail when busy is enabled ");
        i18n_0 = MSG_EXTERNAL_6887483002075545129$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_BASIC_BUSY_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟83e12761b4abf30b5889eab635d9c2a1850aa0c3␟6887483002075545129: Attempts to change my checked state will fail when busy is enabled `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8943622373071831690$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_BASIC_BUSY_BASIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Switch busy\n");
        i18n_2 = MSG_EXTERNAL_8943622373071831690$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_BASIC_BUSY_BASIC_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟d07e8901378984a33b5196683bd690949e7ed5ed␟8943622373071831690: Switch busy
`;
    } return [["id", "nui-demo-busy-host", "nui-busy", "", 3, "busy"], i18n_0, ["id", "nui-demo-busy-button", "nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_2]; }, template: function BusyBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusyBasicExampleComponent_Template_button_click_4_listener() { return ctx.switchBusy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__["BusyComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], styles: ["#nui-demo-busy-host[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3ktYmFzaWMuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJidXN5LWJhc2ljLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbnVpLWRlbW8tYnVzeS1ob3N0IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "Unmp":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-progress/busy-progress.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-busy-progress-example\",\n    templateUrl: \"./busy-progress.example.component.html\",\n    styleUrls: [\n        \"./busy-progress.example.component.less\",\n    ],\n})\nexport class BusyProgressExampleComponent {\n    public busy: boolean;\n\n    public switchBusy() {\n        this.busy = !this.busy;\n    }\n}\n");

/***/ }),

/***/ "Y2l0":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/busy/busy-spinner/busy-spinner.example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BusySpinnerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusySpinnerExampleComponent", function() { return BusySpinnerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");





class BusySpinnerExampleComponent {
    switchBusy() {
        this.busy = !this.busy;
    }
}
BusySpinnerExampleComponent.ɵfac = function BusySpinnerExampleComponent_Factory(t) { return new (t || BusySpinnerExampleComponent)(); };
BusySpinnerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusySpinnerExampleComponent, selectors: [["nui-busy-spinner-example"]], decls: 7, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6887483002075545129$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_SPINNER_BUSY_SPINNER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Attempts to change my checked state will fail when busy is enabled ");
        i18n_0 = MSG_EXTERNAL_6887483002075545129$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_SPINNER_BUSY_SPINNER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟83e12761b4abf30b5889eab635d9c2a1850aa0c3␟6887483002075545129: Attempts to change my checked state will fail when busy is enabled `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_SPINNER_BUSY_SPINNER_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Hello from custom busy");
        i18n_2 = MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_SPINNER_BUSY_SPINNER_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b1203654bb65c56eb8ba40a2a9f1b1d26d516c51␟6776140435076536653:Hello from custom busy`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5767490880058191194$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_SPINNER_BUSY_SPINNER_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Switch busy state\n");
        i18n_4 = MSG_EXTERNAL_5767490880058191194$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_SPINNER_BUSY_SPINNER_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟141c2f9ed6986f36ce72531923e8011703731904␟5767490880058191194: Switch busy state
`;
    } return [["id", "nui-demo-custom-spinner-busy", "nui-busy", "", 3, "busy"], [1, "busy-content"], i18n_0, ["id", "nui-demo-spinner", "size", "large", "message", i18n_2], ["id", "nui-demo-spinner-button", "nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_4]; }, template: function BusySpinnerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusySpinnerExampleComponent_Template_button_click_5_listener() { return ctx.switchBusy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__["BusyComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: [".busy-content[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3ktc3Bpbm5lci5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImJ1c3ktc3Bpbm5lci5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c3ktY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "YZcI":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/index.ts ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./busy-basic/busy-basic.example.component\";\nexport * from \"./busy-docs/busy-docs.example.component\";\nexport * from \"./busy-progress/busy-progress.example.component\";\nexport * from \"./busy-spinner/busy-spinner.example.component\";\nexport * from \"./busy-visual-test/busy-visual-test.component\";\nexport * from \"./busy-test/busy-test.component\";\n");

/***/ }),

/***/ "dNFo":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-visual-test/busy-visual-test.component.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".visual-test-busy-content {\n    height: 50px;\n}\n#nui-busy-test-basic {\n    height: 100px;\n}\n");

/***/ }),

/***/ "hwpB":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-progress/busy-progress.example.component.less ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".busy-content {\n    height: 100px;\n}");

/***/ }),

/***/ "ihgi":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/busy/busy-visual-test/busy-visual-test.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BusyVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyVisualTestComponent", function() { return BusyVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/progress/progress.component */ "FA8p");




class BusyVisualTestComponent {
    constructor() {
        this.busyAtTheStart = true;
    }
    switchBusy() {
        this.busy = !this.busy;
    }
}
BusyVisualTestComponent.ɵfac = function BusyVisualTestComponent_Factory(t) { return new (t || BusyVisualTestComponent)(); };
BusyVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusyVisualTestComponent, selectors: [["nui-busy-visual"]], decls: 50, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Hello from custom busy");
        i18n_0 = MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b1203654bb65c56eb8ba40a2a9f1b1d26d516c51␟6776140435076536653:Hello from custom busy`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Hello from custom busy");
        i18n_2 = MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟b1203654bb65c56eb8ba40a2a9f1b1d26d516c51␟6776140435076536653:Hello from custom busy`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_5 = goog.getMsg("Hello from custom busy");
        i18n_4 = MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟b1203654bb65c56eb8ba40a2a9f1b1d26d516c51␟6776140435076536653:Hello from custom busy`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_7 = goog.getMsg("Hello from custom busy");
        i18n_6 = MSG_EXTERNAL_6776140435076536653$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_VISUAL_TEST_BUSY_VISUAL_TEST_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟b1203654bb65c56eb8ba40a2a9f1b1d26d516c51␟6776140435076536653:Hello from custom busy`;
    } return [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-busy-test-basic", "nui-busy", "", 3, "busy"], ["id", "nui-busy-test-custom", "nui-busy", "", 3, "busy"], [1, "visual-test-busy-content"], ["id", "nui-demo-spinner", "size", "large", "message", i18n_0], ["id", "nui-busy-test-progress", "nui-busy", "", 3, "busy"], ["id", "nui-demo-progress", "message", i18n_2], ["id", "nui-demo-progress", "message", i18n_4], ["id", "nui-demo-spinner", "size", "large", "message", i18n_6], ["id", "nui-busy-test-button", 3, "click"]]; }, template: function BusyVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic small busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Busy content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "With any kind of content should have busy indication in the center of parent container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Custom busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Busy content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Progress busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Busy content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nui-progress", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Progress busy from the start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Busy content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nui-progress", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Custom busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Busy content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "nui-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusyVisualTestComponent_Template_button_click_48_listener() { return ctx.switchBusy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Switch busy state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busyAtTheStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busyAtTheStart);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__["BusyComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"], _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_3__["ProgressComponent"]], styles: [".visual-test-busy-content[_ngcontent-%COMP%] {\n  height: 50px;\n}\n#nui-busy-test-basic[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c3ktdmlzdWFsLXRlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFDQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJidXN5LXZpc3VhbC10ZXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc3VhbC10ZXN0LWJ1c3ktY29udGVudCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuI251aS1idXN5LXRlc3QtYmFzaWMge1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ioGz":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-basic/busy-basic.example.component.less ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#nui-demo-busy-host {\n    height: 200px;\n}\n");

/***/ }),

/***/ "k7Hg":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-basic/busy-basic.example.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"nui-demo-busy-host\" nui-busy [busy]=\"busy\">\n    <div>\n        <nui-checkbox i18n>\n            Attempts to change my checked state will fail when busy is enabled\n        </nui-checkbox>\n    </div>\n</div>\n\n<button id=\"nui-demo-busy-button\"\n        nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        (click)=\"switchBusy()\"\n        i18n>\n    Switch busy\n</button>\n");

/***/ }),

/***/ "lj+8":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-spinner/busy-spinner.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"nui-demo-custom-spinner-busy\" nui-busy [busy]=\"busy\">\n    <div class=\"busy-content\">\n        <nui-checkbox i18n>\n            Attempts to change my checked state will fail when busy is enabled\n        </nui-checkbox>\n    </div>\n    <nui-spinner id=\"nui-demo-spinner\" size=\"large\" i18n-message message=\"Hello from custom busy\"></nui-spinner>\n</div>\n<button id=\"nui-demo-spinner-button\"\n        nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        (click)=\"switchBusy()\"\n        i18n>\n    Switch busy state\n</button>\n");

/***/ }),

/***/ "w3d6":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/busy/busy-docs/busy-docs.example.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Pay Attention!</strong> For proper usage of this component, you may have to import <code>BrowserAnimationsModule</code>.\n</nui-message>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiBusyModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To add a busy overlay to some page content, add an <code>nui-busy</code> attribute to the direct parent of the content to be overlaid.\n    By default an <code><a href=\"../components/SpinnerComponent.html\" target=\"_blank\">&lt;nui-spinner&gt;</a></code> component will be placed\n    at the center of the busy overlay.\n    <nui-message [allowDismiss]=\"false\" type=\"info\">Busy overlay fills the whole area of an element with <code>nui-busy</code> attribute</nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"busy-basic\" exampleTitle=\"Basic Usage\">\n    <nui-busy-basic-example></nui-busy-basic-example>\n</nui-example-wrapper>\n\n<h2>Custom Spinner</h2>\n<p>\n    To replace the default <code><a href=\"../components/SpinnerComponent.html\" target=\"_blank\">&lt;nui-spinner&gt;</a></code> component, instantiate your own\n    <code>&lt;nui-spinner&gt;</code> and place it as a direct child of the element that has the <code>nui-busy</code> attribute.\n    You can set any <code>&lt;nui-spinner&gt;</code> inputs to customize it.\n</p>\n<nui-example-wrapper filenamePrefix=\"busy-spinner\" exampleTitle=\"Custom Spinner\">\n    <nui-busy-spinner-example></nui-busy-spinner-example>\n</nui-example-wrapper>\n\n<h2>Custom Progress</h2>\n<p>\n    To replace the default spinner with an <code><a href=\"../components/ProgressComponent.html\" target=\"_blank\">&lt;nui-progress&gt;</a></code> component,\n    instantiate an <code>&lt;nui-progress&gt;</code> and place it as a direct child of the element that has the <code>nui-busy</code> attribute.\n    You can set any <code>&lt;nui-progress&gt;</code> inputs to customize it.\n</p>\n<nui-example-wrapper filenamePrefix=\"busy-progress\" exampleTitle=\"Custom Progress\">\n    <nui-busy-progress-example></nui-busy-progress-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "y2fB":
/*!************************************************************************!*\
  !*** ./demo/src/components/demo/busy/busy-test/busy-test.component.ts ***!
  \************************************************************************/
/*! exports provided: BusyTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusyTestComponent", function() { return BusyTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/busy/busy.component */ "3XPh");
/* harmony import */ var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/progress/progress.component */ "FA8p");
/* harmony import */ var _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/select/select.component */ "8Za4");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/spinner/spinner.component */ "NFOm");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");







class BusyTestComponent {
    constructor() {
        this.items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
    }
    switchBusy() {
        this.busy = !this.busy;
    }
}
BusyTestComponent.ɵfac = function BusyTestComponent_Factory(t) { return new (t || BusyTestComponent)(); };
BusyTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusyTestComponent, selectors: [["nui-busy-test"]], decls: 44, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3656907322428282268$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_TEST_BUSY_TEST_COMPONENT_TS_1 = goog.getMsg(" Attempts to change my checked state will fail when busy is enabled ");
        i18n_0 = MSG_EXTERNAL_3656907322428282268$$DEMO_SRC_COMPONENTS_DEMO_BUSY_BUSY_TEST_BUSY_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3a5518c8224b7fd24ab73d9dfd55a27c652488c0␟3656907322428282268: Attempts to change my checked state will fail when busy is enabled `;
    } return [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-busy-test-basic", "nui-busy", "", 3, "busy"], [1, "test-busy-content"], ["id", "nui-busy-test-progress", "nui-busy", "", 3, "busy"], ["id", "nui-demo-progress", "message", "Hello from custom busy"], ["id", "nui-busy-select-overlay", 1, "row", "justify-content-md-center", 3, "appendToBody", "itemsSource"], ["id", "nui-busy-test-custom", "nui-busy", "", 3, "busy"], ["id", "focusable-button-inside-busy-component"], ["href", "#"], i18n_0, ["id", "nui-demo-spinner", "size", "large", "message", "Hello from custom busy"], ["id", "nui-busy-test-button", "nui-button", "", "type", "button", 3, "click"]]; }, template: function BusyTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic small busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Busy content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Progress busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Busy content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Custom busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nui-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Busy content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "A bit more content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "A bit more content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "A bit more content to overlap with second item in the select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](38, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-spinner", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusyTestComponent_Template_button_click_42_listener() { return ctx.switchBusy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Switch busy state ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appendToBody", true)("itemsSource", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx.busy);
    } }, directives: [_src_lib_busy_busy_component__WEBPACK_IMPORTED_MODULE_1__["BusyComponent"], _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_2__["ProgressComponent"], _src_lib_select_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _src_lib_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-busy-busy-module-es2015.js.map