(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-layout-layout-module"],{

/***/ "+JNi":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-fit-content/layout-fit-content.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LayoutFitContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFitContentComponent", function() { return LayoutFitContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_group_card_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card-group/card-group.component */ "8CAV");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");





class LayoutFitContentComponent {
}
LayoutFitContentComponent.ɵfac = function LayoutFitContentComponent_Factory(t) { return new (t || LayoutFitContentComponent)(); };
LayoutFitContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutFitContentComponent, selectors: [["nui-layout-fit-content"]], decls: 22, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5978919300758852237$$DEMO_SRC_COMPONENTS_DEMO_LAYOUT_LAYOUT_FIT_CONTENT_LAYOUT_FIT_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" HAS MAX AND MIN WIDTH, SPECIFIC WIDTH IS SET, CARD DIRECTION IS ROW ");
        i18n_0 = MSG_EXTERNAL_5978919300758852237$$DEMO_SRC_COMPONENTS_DEMO_LAYOUT_LAYOUT_FIT_CONTENT_LAYOUT_FIT_CONTENT_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟3d9457a0efbbdc96294b13b6e11e09c53c00a71a␟5978919300758852237: HAS MAX AND MIN WIDTH, SPECIFIC WIDTH IS SET, CARD DIRECTION IS ROW `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7569398634045932982$$DEMO_SRC_COMPONENTS_DEMO_LAYOUT_LAYOUT_FIT_CONTENT_LAYOUT_FIT_CONTENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" HAS MAX AND MIN WIDTH, SPECIFIC WIDTH IS SET, CARD DIRECTION UNSPECIFIED ");
        i18n_2 = MSG_EXTERNAL_7569398634045932982$$DEMO_SRC_COMPONENTS_DEMO_LAYOUT_LAYOUT_FIT_CONTENT_LAYOUT_FIT_CONTENT_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟d53c2f7c77f8255c53fca39f4ee4f9c87d73a768␟7569398634045932982: HAS MAX AND MIN WIDTH, SPECIFIC WIDTH IS SET, CARD DIRECTION UNSPECIFIED `;
    } return [[1, "nui-demo-custom-container"], ["direction", "row"], ["direction", "column", 3, "fitContent"], [1, "nui-demo-nui-card__block-element--min-width", "nui-demo-nui-card__block-element--max-width-regular", "nui-demo-nui-card__block-element--exact-width", "nui-demo-nui-card__block-element"], i18n_0, [1, "nui-demo-nui-card__block-element--min-width", "nui-demo-nui-card__block-element--max-width-small", "nui-demo-nui-card__block-element--exact-width", "exactHeight", "nui-demo-nui-card__block-element"], i18n_2, ["direction", "column"], [1, "nui-demo-nui-card__block-element--width-stretch", "nui-demo-nui-card__block-element--height-regular"], [1, "nui-demo-nui-card__block-element--width-stretch", "nui-demo-nui-card__block-element--height-large"], [1, "nui-demo-nui-card__block-element--width-stretch", "nui-demo-nui-card__block-element--height-small"]]; }, template: function LayoutFitContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-sheet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-sheet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-card-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fitContent", true);
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_group_card_group_component__WEBPACK_IMPORTED_MODULE_3__["CardGroupComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: [".nui-demo-nui-card__block-element[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-semantic-critical-bg,#fceae6);\n}\n.nui-demo-nui-card__block-element--min-width[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.nui-demo-nui-card__block-element--max-width-small[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n.nui-demo-nui-card__block-element--max-width-regular[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n.nui-demo-nui-card__block-element--exact-width[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.nui-demo-nui-card__block-element--exact-height[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.nui-demo-nui-card__block-element--width-stretch[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--nui-color-semantic-critical-bg,#fceae6);\n}\n.nui-demo-nui-card__block-element--height-small[_ngcontent-%COMP%] {\n  height: 110px;\n}\n.nui-demo-nui-card__block-element--height-regular[_ngcontent-%COMP%] {\n  height: 130px;\n}\n.nui-demo-nui-card__block-element--height-large[_ngcontent-%COMP%] {\n  height: 230px;\n}\n.nui-demo-custom-container[_ngcontent-%COMP%] {\n  height: 750px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1maXQtY29udGVudC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VDR0ksK0RBQUE7QURISjtBQUdBO0VBQ0ksZ0JBQUE7QUFESjtBQUdBO0VBQ0ksZ0JBQUE7QUFESjtBQUdBO0VBQ0ksZ0JBQUE7QUFESjtBQUdBO0VBQ0ksWUFBQTtBQURKO0FBR0E7RUFDSSxhQUFBO0FBREo7QUFHQTtFQUNJLFdBQUE7RUNoQkEsK0RBQUE7QURnQko7QUFHQTtFQUNJLGFBQUE7QUFESjtBQUdBO0VBQ0ksYUFBQTtBQURKO0FBR0E7RUFDSSxhQUFBO0FBREo7QUFHQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREoiLCJmaWxlIjoibGF5b3V0LWZpdC1jb250ZW50LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnNcIjtcbi5udWktZGVtby1udWktY2FyZF9fYmxvY2stZWxlbWVudCB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbC1iZyk7XG59XG4ubnVpLWRlbW8tbnVpLWNhcmRfX2Jsb2NrLWVsZW1lbnQtLW1pbi13aWR0aCB7XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5udWktZGVtby1udWktY2FyZF9fYmxvY2stZWxlbWVudC0tbWF4LXdpZHRoLXNtYWxsIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLm51aS1kZW1vLW51aS1jYXJkX19ibG9jay1lbGVtZW50LS1tYXgtd2lkdGgtcmVndWxhciB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbn1cbi5udWktZGVtby1udWktY2FyZF9fYmxvY2stZWxlbWVudC0tZXhhY3Qtd2lkdGgge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbi5udWktZGVtby1udWktY2FyZF9fYmxvY2stZWxlbWVudC0tZXhhY3QtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xufVxuLm51aS1kZW1vLW51aS1jYXJkX19ibG9jay1lbGVtZW50LS13aWR0aC1zdHJldGNoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWJnKTtcbn1cbi5udWktZGVtby1udWktY2FyZF9fYmxvY2stZWxlbWVudC0taGVpZ2h0LXNtYWxsIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xufVxuLm51aS1kZW1vLW51aS1jYXJkX19ibG9jay1lbGVtZW50LS1oZWlnaHQtcmVndWxhciB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbn1cbi5udWktZGVtby1udWktY2FyZF9fYmxvY2stZWxlbWVudC0taGVpZ2h0LWxhcmdlIHtcbiAgICBoZWlnaHQ6IDIzMHB4O1xufVxuLm51aS1kZW1vLWN1c3RvbS1jb250YWluZXIge1xuICAgIGhlaWdodDogNzUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "05ui":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-init-size/layout-init-size.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-sheet-group sheetsType=\"joined\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"%\" style=\"height: 710px\">\n    <nui-sheet-group id=\"nui-demo-sheet-group--outer\" sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\">\n        <nui-sheet-group sheetsType=\"joined\">\n            <nui-sheet>\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n        </nui-sheet-group>\n        <nui-sheet-group\n            resizeUnit=\"%\"\n            initialSizeValue=\"215px\"\n            id=\"nui-demo-sheet-group--inner\"\n            [isResizable]=\"true\"\n            sheetsType=\"joined\">\n            <nui-sheet>\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n            <nui-sheet id=\"nui-demo-sheet-group__sheet\">\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n            <nui-sheet initialSizeValue=\"50%\">\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n        </nui-sheet-group>\n    </nui-sheet-group>\n    <nui-sheet-group\n        sheetsType=\"joined\"\n        direction=\"column\"\n        [isResizable]=\"true\"\n        resizeUnit=\"%\">\n        <nui-sheet class=\"pt-2\">\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet class=\"pt-2\">\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet class=\"pt-2\">\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n    </nui-sheet-group>\n</nui-sheet-group>\n");

/***/ }),

/***/ "1bdn":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-page-content/layout-page-content.example.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"nui-framework-palette\";\n@import (reference) \"mixins\";\n.nui-demo-workspace {\n    padding: @nui-space-md;\n    .setCssVariable(background-color, nui-color-bg-secondary);\n    height: 200px; // This is for demo purpose. in real world it will be something like 100%\n\n    &__header {\n        h1 {\n            margin: @nui-space-sm 0;\n        }\n    }\n}\n");

/***/ }),

/***/ "24YG":
/*!**************************************************!*\
  !*** ./demo/src/components/demo/layout/index.ts ***!
  \**************************************************/
/*! exports provided: LayoutBasicExampleComponent, LayoutSeparateSheetsExampleComponent, LayoutExampleComponent, LayoutFitContentComponent, LayoutResizeExampleComponent, LayoutVisualTestComponent, LayoutTestComponent, LayoutComplexExampleComponent, LayoutInitSizeExampleComponent, LayoutPageContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_basic_layout_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-basic/layout-basic.example.component */ "S1lT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutBasicExampleComponent", function() { return _layout_basic_layout_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["LayoutBasicExampleComponent"]; });

/* harmony import */ var _layout_separate_sheets_layout_separate_sheets_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-separate-sheets/layout-separate-sheets.example.component */ "V/Gx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutSeparateSheetsExampleComponent", function() { return _layout_separate_sheets_layout_separate_sheets_example_component__WEBPACK_IMPORTED_MODULE_1__["LayoutSeparateSheetsExampleComponent"]; });

/* harmony import */ var _layout_docs_layout_docs_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-docs/layout-docs.example.component */ "mR0x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutExampleComponent", function() { return _layout_docs_layout_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["LayoutExampleComponent"]; });

/* harmony import */ var _layout_fit_content_layout_fit_content_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-fit-content/layout-fit-content.example.component */ "+JNi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFitContentComponent", function() { return _layout_fit_content_layout_fit_content_example_component__WEBPACK_IMPORTED_MODULE_3__["LayoutFitContentComponent"]; });

/* harmony import */ var _layout_resize_layout_resize_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-resize/layout-resize.example.component */ "M7QA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutResizeExampleComponent", function() { return _layout_resize_layout_resize_example_component__WEBPACK_IMPORTED_MODULE_4__["LayoutResizeExampleComponent"]; });

/* harmony import */ var _layout_visual_test_layout_visual_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-visual-test/layout-visual-test.component */ "x0zI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutVisualTestComponent", function() { return _layout_visual_test_layout_visual_test_component__WEBPACK_IMPORTED_MODULE_5__["LayoutVisualTestComponent"]; });

/* harmony import */ var _layout_test_layout_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-test/layout-test.component */ "3S4s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutTestComponent", function() { return _layout_test_layout_test_component__WEBPACK_IMPORTED_MODULE_6__["LayoutTestComponent"]; });

/* harmony import */ var _layout_complex_layout_complex_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-complex/layout-complex.example.component */ "2ciL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComplexExampleComponent", function() { return _layout_complex_layout_complex_example_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComplexExampleComponent"]; });

/* harmony import */ var _layout_init_size_layout_init_size_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout-init-size/layout-init-size.component */ "69oz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutInitSizeExampleComponent", function() { return _layout_init_size_layout_init_size_component__WEBPACK_IMPORTED_MODULE_8__["LayoutInitSizeExampleComponent"]; });

/* harmony import */ var _layout_page_content_layout_page_content_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout-page-content/layout-page-content.example.component */ "HUHN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutPageContentExampleComponent", function() { return _layout_page_content_layout_page_content_example_component__WEBPACK_IMPORTED_MODULE_9__["LayoutPageContentExampleComponent"]; });













/***/ }),

/***/ "2ciL":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-complex/layout-complex.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LayoutComplexExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComplexExampleComponent", function() { return LayoutComplexExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_group_card_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card-group/card-group.component */ "8CAV");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");





class LayoutComplexExampleComponent {
}
LayoutComplexExampleComponent.ɵfac = function LayoutComplexExampleComponent_Factory(t) { return new (t || LayoutComplexExampleComponent)(); };
LayoutComplexExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComplexExampleComponent, selectors: [["nui-layout-complex-example"]], decls: 41, vars: 8, consts: [["sheetsType", "separate", "direction", "row", "resizeUnit", "px", 1, "nui-demo-group-height", 3, "isResizable"], ["sheetsType", "separate", "direction", "column", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "separate"], [1, "nui-demo-custom-card-content"], ["sheetsType", "separate", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "joined", "direction", "column", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "joined", "direction", "row", "resizeUnit", "px", 1, "nui-demo-group-height", 3, "isResizable"], ["sheetsType", "joined"], ["sheetsType", "joined", "resizeUnit", "%", 3, "isResizable"]], template: function LayoutComplexExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-sheet-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-sheet-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-sheet-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-sheet-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-sheet-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-sheet-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-sheet-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nui-sheet-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-sheet-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_group_card_group_component__WEBPACK_IMPORTED_MODULE_3__["CardGroupComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: [".nui-demo-custom-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-width: 10px;\n  min-height: 10px;\n}\n.nui-demo-group-height[_ngcontent-%COMP%] {\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1jb21wbGV4LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0E7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoibGF5b3V0LWNvbXBsZXguZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udWktZGVtby1jdXN0b20tY2FyZC1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XG59XG4ubnVpLWRlbW8tZ3JvdXAtaGVpZ2h0e1xuICAgIGhlaWdodDogNTAwcHhcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "3CWI":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-init-size/layout-init-size.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-init-size-example\",\n    templateUrl: \"./layout-init-size.component.html\",\n})\nexport class LayoutInitSizeExampleComponent {\n}\n");

/***/ }),

/***/ "3EbT":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-visual-test/layout-visual-test.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-visual-test\",\n    templateUrl: \"./layout-visual-test.component.html\",\n})\nexport class LayoutVisualTestComponent {\n}\n");

/***/ }),

/***/ "3S4s":
/*!******************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-test/layout-test.component.ts ***!
  \******************************************************************************/
/*! exports provided: LayoutTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutTestComponent", function() { return LayoutTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");




class LayoutTestComponent {
}
LayoutTestComponent.ɵfac = function LayoutTestComponent_Factory(t) { return new (t || LayoutTestComponent)(); };
LayoutTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutTestComponent, selectors: [["nui-layout-test"]], decls: 19, vars: 4, consts: [["sheetsType", "joined", "direction", "row", "resizeUnit", "px", 2, "height", "500px", 3, "isResizable"], ["id", "nui-demo-sheet-group--outer", "sheetsType", "joined", "direction", "column", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "joined"], ["id", "nui-demo-sheet-group--inner", "sheetsType", "joined", "resizeUnit", "%", 3, "isResizable"], ["id", "nui-demo-sheet-group__sheet"], ["sheetsType", "joined", "direction", "column", "resizeUnit", "%", 3, "isResizable"], [1, "pt-2"]], template: function LayoutTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-sheet-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-sheet-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-sheet-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-sheet-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-sheet", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-sheet", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-sheet", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], encapsulation: 2 });


/***/ }),

/***/ "3dlP":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/index.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./layout-basic/layout-basic.example.component\";\nexport * from \"./layout-separate-sheets/layout-separate-sheets.example.component\";\nexport * from \"./layout-docs/layout-docs.example.component\";\nexport * from \"./layout-fit-content/layout-fit-content.example.component\";\nexport * from \"./layout-resize/layout-resize.example.component\";\nexport * from \"./layout-visual-test/layout-visual-test.component\";\nexport * from \"./layout-test/layout-test.component\";\nexport * from \"./layout-complex/layout-complex.example.component\";\nexport * from \"./layout-init-size/layout-init-size.component\";\nexport * from \"./layout-page-content/layout-page-content.example.component\";\n");

/***/ }),

/***/ "3mLz":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-complex/layout-complex.example.component.less ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-demo-custom-card-content {\n    width: 100%;\n    height: 100%;\n    min-width: 10px;\n    min-height: 10px;\n}\n.nui-demo-group-height{\n    height: 500px\n}\n");

/***/ }),

/***/ "4cQ8":
/*!*********************************************************************************************************!*\
  !*** ./demo/src/components/demo/layout sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "3dlP",
	"./layout-basic/layout-basic.example.component.html": "BvRC",
	"./layout-basic/layout-basic.example.component.less": "lUhS",
	"./layout-basic/layout-basic.example.component.ts": "J1C5",
	"./layout-complex/layout-complex.example.component.html": "Ic0q",
	"./layout-complex/layout-complex.example.component.less": "3mLz",
	"./layout-complex/layout-complex.example.component.ts": "wJFq",
	"./layout-docs/layout-docs.example.component.html": "RkHq",
	"./layout-docs/layout-docs.example.component.ts": "EDSe",
	"./layout-fit-content/layout-fit-content.example.component.html": "p5uN",
	"./layout-fit-content/layout-fit-content.example.component.less": "pn6r",
	"./layout-fit-content/layout-fit-content.example.component.ts": "k6qr",
	"./layout-init-size/layout-init-size.component.html": "05ui",
	"./layout-init-size/layout-init-size.component.ts": "3CWI",
	"./layout-page-content/layout-page-content.example.component.html": "K8ds",
	"./layout-page-content/layout-page-content.example.component.ts": "BoVa",
	"./layout-page-content/layout-page-content.example.less": "1bdn",
	"./layout-resize/layout-resize.example.component.html": "VtLs",
	"./layout-resize/layout-resize.example.component.less": "gCvZ",
	"./layout-resize/layout-resize.example.component.ts": "fxjH",
	"./layout-separate-sheets/layout-separate-sheets.example.component.html": "fow4",
	"./layout-separate-sheets/layout-separate-sheets.example.component.less": "VNiJ",
	"./layout-separate-sheets/layout-separate-sheets.example.component.ts": "GAQf",
	"./layout-test/layout-test.component.html": "sR79",
	"./layout-test/layout-test.component.ts": "w417",
	"./layout-visual-test/layout-visual-test.component.html": "ss33",
	"./layout-visual-test/layout-visual-test.component.ts": "3EbT",
	"./layout.module.ts": "Thkm"
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
webpackContext.id = "4cQ8";

/***/ }),

/***/ "69oz":
/*!****************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-init-size/layout-init-size.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LayoutInitSizeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutInitSizeExampleComponent", function() { return LayoutInitSizeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");




class LayoutInitSizeExampleComponent {
}
LayoutInitSizeExampleComponent.ɵfac = function LayoutInitSizeExampleComponent_Factory(t) { return new (t || LayoutInitSizeExampleComponent)(); };
LayoutInitSizeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutInitSizeExampleComponent, selectors: [["nui-layout-init-size-example"]], decls: 19, vars: 4, consts: [["sheetsType", "joined", "direction", "row", "resizeUnit", "%", 2, "height", "710px", 3, "isResizable"], ["id", "nui-demo-sheet-group--outer", "sheetsType", "joined", "direction", "column", 3, "isResizable"], ["sheetsType", "joined"], ["resizeUnit", "%", "initialSizeValue", "215px", "id", "nui-demo-sheet-group--inner", "sheetsType", "joined", 3, "isResizable"], ["id", "nui-demo-sheet-group__sheet"], ["initialSizeValue", "50%"], ["sheetsType", "joined", "direction", "column", "resizeUnit", "%", 3, "isResizable"], [1, "pt-2"]], template: function LayoutInitSizeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-sheet-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-sheet-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-sheet-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-sheet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-sheet-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-sheet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-sheet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-sheet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], encapsulation: 2 });


/***/ }),

/***/ "BoVa":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-page-content/layout-page-content.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-page-content-example\",\n    templateUrl: \"./layout-page-content.example.component.html\",\n    styleUrls: [\"./layout-page-content.example.less\"],\n})\nexport class LayoutPageContentExampleComponent {\n}\n");

/***/ }),

/***/ "BvRC":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-basic/layout-basic.example.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-sheet class=\"nui-demo-basic-usage-sheet\">\n    <nui-card>\n        <div class=\"nui-demo-basic-usage-card\"></div>\n    </nui-card>\n</nui-sheet>\n\n");

/***/ }),

/***/ "EDSe":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-docs/layout-docs.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-docs-example\",\n    templateUrl: \"./layout-docs.example.component.html\",\n})\nexport class LayoutExampleComponent {\n\n}\n");

/***/ }),

/***/ "GAQf":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-separate-sheets/layout-separate-sheets.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-separate-sheets-example\",\n    templateUrl: \"./layout-separate-sheets.example.component.html\",\n    styleUrls: [\"./layout-separate-sheets.example.component.less\"],\n})\nexport class LayoutSeparateSheetsExampleComponent {\n\n}\n");

/***/ }),

/***/ "HUHN":
/*!******************************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-page-content/layout-page-content.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LayoutPageContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageContentExampleComponent", function() { return LayoutPageContentExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");




class LayoutPageContentExampleComponent {
}
LayoutPageContentExampleComponent.ɵfac = function LayoutPageContentExampleComponent_Factory(t) { return new (t || LayoutPageContentExampleComponent)(); };
LayoutPageContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutPageContentExampleComponent, selectors: [["nui-layout-page-content-example"]], decls: 7, vars: 0, consts: [[1, "d-flex", "flex-column", "nui-demo-workspace"], [1, "nui-demo-workspace__header", "flex-row"], [1, "flex-fill"]], template: function LayoutPageContentExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Page Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-sheet-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".nui-demo-workspace[_ngcontent-%COMP%] {\n  padding: 15px;\n  background-color: var(--nui-color-bg-secondary,#fafafa);\n  height: 200px;\n}\n.nui-demo-workspace__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1wYWdlLWNvbnRlbnQuZXhhbXBsZS5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQ0NBLHVEQUFBO0VEQ0EsYUFBQTtBQUZKO0FBSUk7RUFFUSxjQUFBO0FBSFoiLCJmaWxlIjoibGF5b3V0LXBhZ2UtY29udGVudC5leGFtcGxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXBhbGV0dGVcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnNcIjtcbi5udWktZGVtby13b3Jrc3BhY2Uge1xuICAgIHBhZGRpbmc6IEBudWktc3BhY2UtbWQ7XG4gICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICAgIGhlaWdodDogMjAwcHg7IC8vIFRoaXMgaXMgZm9yIGRlbW8gcHVycG9zZS4gaW4gcmVhbCB3b3JsZCBpdCB3aWxsIGJlIHNvbWV0aGluZyBsaWtlIDEwMCVcblxuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbjogQG51aS1zcGFjZS1zbSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Ic0q":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-complex/layout-complex.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-sheet-group class=\"nui-demo-group-height\" sheetsType=\"separate\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"px\">\n    <nui-sheet-group sheetsType=\"separate\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n        <nui-sheet-group sheetsType=\"separate\">\n            <nui-sheet>\n                <nui-card-group>\n                    <nui-card>\n                        <div class=\"nui-demo-custom-card-content\">\n                        </div>\n                    </nui-card>\n                </nui-card-group>\n            </nui-sheet>\n        </nui-sheet-group>\n        <nui-sheet-group [isResizable]=\"true\" sheetsType=\"separate\" resizeUnit=\"%\">\n            <nui-sheet>\n                <nui-card-group>\n                    <nui-card>\n                        <div class=\"nui-demo-custom-card-content\">\n                        </div>\n                    </nui-card>\n                </nui-card-group>\n            </nui-sheet>\n            <nui-sheet>\n                <nui-card-group>\n                    <nui-card>\n                        <div class=\"nui-demo-custom-card-content\">\n                        </div>\n                    </nui-card>\n                </nui-card-group>\n            </nui-sheet>\n            <nui-sheet>\n                <nui-card-group>\n                    <nui-card>\n                        <div class=\"nui-demo-custom-card-content\">\n                        </div>\n                    </nui-card>\n                </nui-card-group>\n            </nui-sheet>\n        </nui-sheet-group>\n    </nui-sheet-group>\n    <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n        <nui-sheet-group class=\"nui-demo-group-height\" sheetsType=\"joined\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"px\">\n            <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n                <nui-sheet-group sheetsType=\"joined\">\n                    <nui-sheet>\n                        <nui-card>\n                            <div class=\"nui-demo-custom-card-content\">\n                            </div>\n                        </nui-card>\n                    </nui-sheet>\n                </nui-sheet-group>\n                <nui-sheet-group [isResizable]=\"true\" sheetsType=\"joined\" resizeUnit=\"%\">\n                    <nui-sheet>\n                        <nui-card>\n                            <div class=\"nui-demo-custom-card-content\">\n                            </div>\n                        </nui-card>\n                    </nui-sheet>\n                    <nui-sheet>\n                        <nui-card>\n                            <div class=\"nui-demo-custom-card-content\">\n                            </div>\n                        </nui-card>\n                    </nui-sheet>\n                    <nui-sheet>\n                        <nui-card>\n                            <div class=\"nui-demo-custom-card-content\">\n                            </div>\n                        </nui-card>\n                    </nui-sheet>\n                </nui-sheet-group>\n            </nui-sheet-group>\n            <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n                <nui-sheet>\n                    <nui-card>\n                        <div class=\"nui-demo-custom-card-content\">\n                        </div>\n                    </nui-card>\n                </nui-sheet>\n            </nui-sheet-group>\n        </nui-sheet-group>\n    </nui-sheet-group>\n</nui-sheet-group>\n");

/***/ }),

/***/ "J1C5":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-basic/layout-basic.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-basic-example\",\n    templateUrl: \"./layout-basic.example.component.html\",\n    styleUrls: [\"./layout-basic.example.component.less\"],\n})\nexport class LayoutBasicExampleComponent {\n\n}\n");

/***/ }),

/***/ "K8ds":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-page-content/layout-page-content.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column nui-demo-workspace\">\n    <div class=\"nui-demo-workspace__header flex-row\">\n        <h1>\n            Page Title\n        </h1>\n    </div>\n    <nui-sheet-group class=\"flex-fill\">\n        <nui-sheet>\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n    </nui-sheet-group>\n</div>\n");

/***/ }),

/***/ "M7QA":
/*!******************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-resize/layout-resize.example.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LayoutResizeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutResizeExampleComponent", function() { return LayoutResizeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");




class LayoutResizeExampleComponent {
}
LayoutResizeExampleComponent.ɵfac = function LayoutResizeExampleComponent_Factory(t) { return new (t || LayoutResizeExampleComponent)(); };
LayoutResizeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutResizeExampleComponent, selectors: [["nui-layout-resize-example"]], decls: 26, vars: 4, consts: [["sheetsType", "separate", "direction", "row", "resizeUnit", "px", 2, "height", "500px", 3, "isResizable"], ["sheetsType", "separate", "direction", "column", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "separate"], [1, "nui-demo-nui-card__block-element"], ["sheetsType", "separate", "resizeUnit", "%", 3, "isResizable"]], template: function LayoutResizeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-sheet-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-sheet-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-sheet-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".nui-demo-nui-card__block-element[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-width: 10px;\n  min-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1yZXNpemUuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibGF5b3V0LXJlc2l6ZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm51aS1kZW1vLW51aS1jYXJkX19ibG9jay1lbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "RkHq":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-docs/layout-docs.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> As always, inline styles are not recommended. They are only used in \n    the examples on this page in an effort to make them more easily digestible.\n</nui-message>\n<p>\n    <code>&lt;nui-sheet-group&gt;</code>,\n    <code>&lt;nui-sheet&gt;</code>,\n    <code>&lt;nui-card-group&gt;</code>,\n    <code>&lt;nui-card&gt;</code>,\n    allow you to build up a layout of different complexity.\n</p>\n<h2>Basic Usage</h2>\n<p>\n    Basic example of sheet and card. Sheets must have at least one card.\n</p>\n<nui-example-wrapper filenamePrefix=\"layout-basic\" exampleTitle=\"Basic Layout\">\n    <nui-layout-basic-example></nui-layout-basic-example>\n</nui-example-wrapper>\n\n<h2>Page Content</h2>\n<p>\n    This example shows how easy it is to create a layout for the page content.\n</p>\n<nui-example-wrapper filenamePrefix=\"layout-page-content\" exampleTitle=\"Page Content Example\">\n    <nui-layout-page-content-example></nui-layout-page-content-example>\n</nui-example-wrapper>\n\n<h2>Separate vs. Joined</h2>\n<p>\n    Use <code>&lt;nui-sheet-group&gt;</code> as a root element for your layout.\n    Inside <code>&lt;nui-sheet-group&gt;</code> go <code>&lt;nui-sheet&gt;</code> elements\n    which in turn take either <code>&lt;nui-card-group&gt;</code> elements with\n    <code>&lt;nui-card&gt;</code>s\n    or just <code>&lt;nui-card&gt;</code>s on their own.\n</p>\n<p>\n    <code>&lt;nui-sheet-group&gt;</code> can be <code>separate</code> or <code>joined</code>.\n    Use input <code>sheetsType</code> to set this value.\n    By default, <code>sheetsType</code> is <code>joined</code>.\n    All elements, namely <code>&lt;nui-sheet-group&gt;</code>,\n    <code>&lt;nui-sheet&gt;</code>,\n    <code>&lt;nui-card-group&gt;</code>,\n    <code>&lt;nui-card&gt;</code>\n    have <code>direction</code> input which can have a value of <code>row</code> or <code>column</code>.\n    Every element apart from <code>&lt;nui-card&gt;</code> has <code>direction</code> input default value of <code>row</code>.\n    <code>&lt;nui-card&gt;</code> doesn't have a default for <code>direction</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"layout-separate-sheets\" exampleTitle=\"Basic Separate Layout\">\n    <nui-layout-separate-sheets-example></nui-layout-separate-sheets-example>\n</nui-example-wrapper>\n\n<h2>Fit Content</h2>\n<p>\n    Besides <code>direction</code> input, <code>&lt;nui-sheet&gt;</code> has also a boolean input <code>fitContent</code>.\n    When set to <code>true</code>, <code>fitContent</code> makes it such that <code>&lt;nui-sheet&gt;</code>'s width is the same as its children's one.\n</p>\n<p>\n    Also, <code>&lt;nui-sheet&gt;</code> and  <code>&lt;nui-card-group&gt;</code> are both scrollable.\n</p>\n<nui-example-wrapper filenamePrefix=\"layout-fit-content\" exampleTitle=\"Fit Content\">\n    <nui-layout-fit-content></nui-layout-fit-content>\n</nui-example-wrapper>\n\n<h2>Enabling Resize</h2>\n<p>\n    To make <code>&lt;nui-sheet-group&gt;</code> resizable you should set to <code>true</code> a boolean input <code>isResizable</code>.\n    You can also configure a resize value of <code>&lt;nui-sheet-group&gt;</code>'s child elements\n    by passing <code>\"%\"</code> or <code>\"px\"</code> to <code>resizeUnit</code> input.\n    By default pixels are used.\n</p>\n<nui-example-wrapper filenamePrefix=\"layout-resize\" exampleTitle=\"Resizable Layout\">\n    <nui-layout-resize-example></nui-layout-resize-example>\n</nui-example-wrapper>\n\n<h2>Passing Initial Size</h2>\n<p>\n    <code>&lt;nui-sheet-group&gt;</code> and <code>&lt;nui-sheet&gt;</code> can be passed an initial size.\n    Use input <code>initialSizeValue</code> to set this value. NOTE: setting initial size does not work with <code>fitContent</code> property.\n    Pay attention to the <code>resizeUnit</code> of <code>&lt;nui-sheet-group&gt;</code>.\n    Pass an appropriate value in <code>\"%\"</code> or <code>\"px\"</code> to <code>&lt;nui-sheet-group&gt;</code> and <code>&lt;nui-sheet&gt;</code>.\n    This will tell components what unit to use (pixels or percents), when trying to resize your layout.\n</p>\n<nui-example-wrapper filenamePrefix=\"layout-init-size\" exampleTitle=\"Initial Size\">\n    <nui-layout-init-size-example></nui-layout-init-size-example>\n</nui-example-wrapper>\n\n\n<h2>Complex Example</h2>\n\n<nui-example-wrapper filenamePrefix=\"layout-complex\" exampleTitle=\"Complex Example\">\n    <nui-layout-complex-example></nui-layout-complex-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "S1lT":
/*!****************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-basic/layout-basic.example.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LayoutBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutBasicExampleComponent", function() { return LayoutBasicExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");



class LayoutBasicExampleComponent {
}
LayoutBasicExampleComponent.ɵfac = function LayoutBasicExampleComponent_Factory(t) { return new (t || LayoutBasicExampleComponent)(); };
LayoutBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutBasicExampleComponent, selectors: [["nui-layout-basic-example"]], decls: 3, vars: 0, consts: [[1, "nui-demo-basic-usage-sheet"], [1, "nui-demo-basic-usage-card"]], template: function LayoutBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-sheet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_1__["SheetComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: [".nui-demo-basic-usage-sheet[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n.nui-demo-basic-usage-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1iYXNpYy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJsYXlvdXQtYmFzaWMuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udWktZGVtby1iYXNpYy11c2FnZS1zaGVldCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG4ubnVpLWRlbW8tYmFzaWMtdXNhZ2UtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "Thkm":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout.module.ts ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiLayoutModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    LayoutBasicExampleComponent,\n    LayoutComplexExampleComponent,\n    LayoutExampleComponent,\n    LayoutFitContentComponent,\n    LayoutInitSizeExampleComponent,\n    LayoutPageContentExampleComponent,\n    LayoutResizeExampleComponent,\n    LayoutSeparateSheetsExampleComponent,\n    LayoutTestComponent,\n    LayoutVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: LayoutExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"layout-test\",\n        component: LayoutTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"layout-visual-test\",\n        component: LayoutVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiLayoutModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        LayoutExampleComponent,\n        LayoutBasicExampleComponent,\n        LayoutSeparateSheetsExampleComponent,\n        LayoutFitContentComponent,\n        LayoutResizeExampleComponent,\n        LayoutTestComponent,\n        LayoutVisualTestComponent,\n        LayoutComplexExampleComponent,\n        LayoutInitSizeExampleComponent,\n        LayoutPageContentExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class LayoutModule {\n}\n");

/***/ }),

/***/ "V/Gx":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-separate-sheets/layout-separate-sheets.example.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: LayoutSeparateSheetsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSeparateSheetsExampleComponent", function() { return LayoutSeparateSheetsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");




class LayoutSeparateSheetsExampleComponent {
}
LayoutSeparateSheetsExampleComponent.ɵfac = function LayoutSeparateSheetsExampleComponent_Factory(t) { return new (t || LayoutSeparateSheetsExampleComponent)(); };
LayoutSeparateSheetsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutSeparateSheetsExampleComponent, selectors: [["nui-layout-separate-sheets-example"]], decls: 15, vars: 0, consts: [["sheetsType", "separate"], ["sheetsType", "joined", "direction", "column"], ["direction", "row"], [1, "nui-demo-nui-card__block-element"], ["sheetsType", "separate", "direction", "column"], ["direction", "column"]], template: function LayoutSeparateSheetsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-sheet-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-sheet-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-sheet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-sheet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-sheet-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-sheet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-sheet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], styles: [".nui-demo-nui-card__block-element[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC1zZXBhcmF0ZS1zaGVldHMuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibGF5b3V0LXNlcGFyYXRlLXNoZWV0cy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm51aS1kZW1vLW51aS1jYXJkX19ibG9jay1lbGVtZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "VNiJ":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-separate-sheets/layout-separate-sheets.example.component.less ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-demo-nui-card__block-element {\n    width: 100%;\n    height: 100%;\n}\n");

/***/ }),

/***/ "VtLs":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-resize/layout-resize.example.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-sheet-group sheetsType=\"separate\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"px\" style=\"height: 500px\">\n    <nui-sheet-group sheetsType=\"separate\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n        <nui-sheet-group sheetsType=\"separate\">\n            <nui-sheet>\n                <nui-card>\n                    <div class=\"nui-demo-nui-card__block-element\"></div>\n                </nui-card>\n            </nui-sheet>\n        </nui-sheet-group>\n        <nui-sheet-group [isResizable]=\"true\" sheetsType=\"separate\" resizeUnit=\"%\">\n            <nui-sheet>\n                <nui-card>\n                    <div class=\"nui-demo-nui-card__block-element\"></div>\n                </nui-card>\n            </nui-sheet>\n            <nui-sheet>\n                <nui-card>\n                    <div class=\"nui-demo-nui-card__block-element\"></div>\n                </nui-card>\n            </nui-sheet>\n            <nui-sheet>\n                <nui-card>\n                    <div class=\"nui-demo-nui-card__block-element\"></div>\n                </nui-card>\n            </nui-sheet>\n        </nui-sheet-group>\n    </nui-sheet-group>\n    <nui-sheet-group sheetsType=\"separate\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n        <nui-sheet>\n            <nui-card>\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet>\n            <nui-card>\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet>\n            <nui-card>\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n    </nui-sheet-group>\n</nui-sheet-group>\n");

/***/ }),

/***/ "fow4":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-separate-sheets/layout-separate-sheets.example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-sheet-group sheetsType=\"separate\">\n    <nui-sheet-group sheetsType=\"joined\" direction=\"column\">\n        <nui-sheet direction=\"row\">\n            <nui-card direction=\"row\">\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet direction=\"row\">\n            <nui-card>\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n    </nui-sheet-group>\n    <nui-sheet-group sheetsType=\"separate\" direction=\"column\">\n        <nui-sheet direction=\"row\">\n            <nui-card direction=\"column\">\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet direction=\"row\">\n            <nui-card direction=\"column\">\n                <div class=\"nui-demo-nui-card__block-element\"></div>\n            </nui-card>\n        </nui-sheet>\n    </nui-sheet-group>\n</nui-sheet-group>\n");

/***/ }),

/***/ "fxjH":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-resize/layout-resize.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-resize-example\",\n    templateUrl: \"./layout-resize.example.component.html\",\n    styleUrls: [\"./layout-resize.example.component.less\"],\n})\nexport class LayoutResizeExampleComponent {\n}\n");

/***/ }),

/***/ "g2C3":
/*!**********************************************************!*\
  !*** ./demo/src/components/demo/layout/layout.module.ts ***!
  \**********************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "24YG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["LayoutExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "layout-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["LayoutTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "layout-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["LayoutVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("4cQ8"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiLayoutModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["LayoutExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutSeparateSheetsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutFitContentComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutResizeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutComplexExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutInitSizeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["LayoutPageContentExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiLayoutModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gCvZ":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-resize/layout-resize.example.component.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-demo-nui-card__block-element {\n    width: 100%;\n    height: 100%;\n    min-width: 10px;\n    min-height: 10px;\n}\n");

/***/ }),

/***/ "k6qr":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-fit-content/layout-fit-content.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-fit-content\",\n    templateUrl: \"./layout-fit-content.example.component.html\",\n    styleUrls: [\"./layout-fit-content.example.component.less\"],\n})\nexport class LayoutFitContentComponent {\n\n}\n");

/***/ }),

/***/ "lUhS":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-basic/layout-basic.example.component.less ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-demo-basic-usage-sheet {\n    width: 300px;\n    height: 300px;\n}\n.nui-demo-basic-usage-card {\n    width: 100%;\n    height: 100%;\n}\n");

/***/ }),

/***/ "mR0x":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-docs/layout-docs.example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LayoutExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutExampleComponent", function() { return LayoutExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _layout_basic_layout_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-basic/layout-basic.example.component */ "S1lT");
/* harmony import */ var _layout_page_content_layout_page_content_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout-page-content/layout-page-content.example.component */ "HUHN");
/* harmony import */ var _layout_separate_sheets_layout_separate_sheets_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout-separate-sheets/layout-separate-sheets.example.component */ "V/Gx");
/* harmony import */ var _layout_fit_content_layout_fit_content_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-fit-content/layout-fit-content.example.component */ "+JNi");
/* harmony import */ var _layout_resize_layout_resize_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout-resize/layout-resize.example.component */ "M7QA");
/* harmony import */ var _layout_init_size_layout_init_size_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout-init-size/layout-init-size.component */ "69oz");
/* harmony import */ var _layout_complex_layout_complex_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout-complex/layout-complex.example.component */ "2ciL");










class LayoutExampleComponent {
}
LayoutExampleComponent.ɵfac = function LayoutExampleComponent_Factory(t) { return new (t || LayoutExampleComponent)(); };
LayoutExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutExampleComponent, selectors: [["nui-layout-docs-example"]], decls: 206, vars: 1, consts: [["type", "info", 3, "allowDismiss"], ["filenamePrefix", "layout-basic", "exampleTitle", "Basic Layout"], ["filenamePrefix", "layout-page-content", "exampleTitle", "Page Content Example"], ["filenamePrefix", "layout-separate-sheets", "exampleTitle", "Basic Separate Layout"], ["filenamePrefix", "layout-fit-content", "exampleTitle", "Fit Content"], ["filenamePrefix", "layout-resize", "exampleTitle", "Resizable Layout"], ["filenamePrefix", "layout-init-size", "exampleTitle", "Initial Size"], ["filenamePrefix", "layout-complex", "exampleTitle", "Complex Example"]], template: function LayoutExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " As always, inline styles are not recommended. They are only used in the examples on this page in an effort to make them more easily digestible.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "<nui-card-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "<nui-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ", allow you to build up a layout of different complexity.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Basic example of sheet and card. Sheets must have at least one card.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nui-layout-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Page Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " This example shows how easy it is to create a layout for the page content.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nui-layout-page-content-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Separate vs. Joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " as a root element for your layout. Inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " elements which in turn take either ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "<nui-card-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " elements with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "<nui-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "s or just ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "<nui-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "s on their own.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " can be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "separate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ". Use input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "sheetsType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " to set this value. By default, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "sheetsType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ". All elements, namely ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "<nui-card-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "<nui-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " input which can have a value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ". Every element apart from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "<nui-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " input default value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "<nui-card>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " doesn't have a default for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nui-layout-separate-sheets-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Fit Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Besides ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " input, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " has also a boolean input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "fitContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ". When set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "fitContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " makes it such that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "'s width is the same as its children's one.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Also, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "<nui-card-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " are both scrollable.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "nui-layout-fit-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Enabling Resize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " To make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " resizable you should set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " a boolean input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "isResizable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ". You can also configure a resize value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "'s child elements by passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\"%\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\"px\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "resizeUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " input. By default pixels are used.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "nui-layout-resize-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Passing Initial Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " can be passed an initial size. Use input ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "initialSizeValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " to set this value. NOTE: setting initial size does not work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "fitContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " property. Pay attention to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "resizeUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, ". Pass an appropriate value in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\"%\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\"px\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "<nui-sheet-group>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "<nui-sheet>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, ". This will tell components what unit to use (pixels or percents), when trying to resize your layout.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "nui-layout-init-size-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Complex Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "nui-layout-complex-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _layout_basic_layout_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["LayoutBasicExampleComponent"], _layout_page_content_layout_page_content_example_component__WEBPACK_IMPORTED_MODULE_4__["LayoutPageContentExampleComponent"], _layout_separate_sheets_layout_separate_sheets_example_component__WEBPACK_IMPORTED_MODULE_5__["LayoutSeparateSheetsExampleComponent"], _layout_fit_content_layout_fit_content_example_component__WEBPACK_IMPORTED_MODULE_6__["LayoutFitContentComponent"], _layout_resize_layout_resize_example_component__WEBPACK_IMPORTED_MODULE_7__["LayoutResizeExampleComponent"], _layout_init_size_layout_init_size_component__WEBPACK_IMPORTED_MODULE_8__["LayoutInitSizeExampleComponent"], _layout_complex_layout_complex_example_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComplexExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "p5uN":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-fit-content/layout-fit-content.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-demo-custom-container\">\n    <nui-sheet-group direction=\"row\">\n        <nui-sheet direction=\"column\" [fitContent]=\"true\">\n            <nui-card-group>\n                <nui-card direction=\"row\">\n                    <div\n                        class=\"nui-demo-nui-card__block-element--min-width nui-demo-nui-card__block-element--max-width-regular nui-demo-nui-card__block-element--exact-width nui-demo-nui-card__block-element\"\n                        i18n>\n                        HAS MAX AND MIN WIDTH, SPECIFIC WIDTH IS SET, CARD DIRECTION IS ROW\n                    </div>\n                </nui-card>\n                <nui-card>\n                    <div\n                        class=\"nui-demo-nui-card__block-element--min-width nui-demo-nui-card__block-element--max-width-small nui-demo-nui-card__block-element--exact-width exactHeight nui-demo-nui-card__block-element\"\n                        i18n>\n                        HAS MAX AND MIN WIDTH, SPECIFIC WIDTH IS SET, CARD DIRECTION UNSPECIFIED\n                    </div>\n                </nui-card>\n            </nui-card-group>\n        </nui-sheet>\n        <nui-sheet direction=\"column\">\n            <nui-card-group direction=\"column\">\n                <nui-card><div class=\"nui-demo-nui-card__block-element--width-stretch nui-demo-nui-card__block-element--height-regular\"></div></nui-card>\n                <nui-card><div class=\"nui-demo-nui-card__block-element--width-stretch nui-demo-nui-card__block-element--height-large\"></div></nui-card>\n                <nui-card><div class=\"nui-demo-nui-card__block-element--width-stretch nui-demo-nui-card__block-element--height-small\"></div></nui-card>\n                <nui-card><div class=\"nui-demo-nui-card__block-element--width-stretch nui-demo-nui-card__block-element--height-small\"></div></nui-card>\n                <nui-card><div class=\"nui-demo-nui-card__block-element--width-stretch nui-demo-nui-card__block-element--height-small\"></div></nui-card>\n            </nui-card-group>\n        </nui-sheet>\n    </nui-sheet-group>\n</div>\n");

/***/ }),

/***/ "pn6r":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-fit-content/layout-fit-content.example.component.less ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n.nui-demo-nui-card__block-element {\n    .setCssVariable(background-color, nui-color-semantic-critical-bg);\n}\n.nui-demo-nui-card__block-element--min-width {\n    min-width: 100px;\n}\n.nui-demo-nui-card__block-element--max-width-small {\n    max-width: 150px;\n}\n.nui-demo-nui-card__block-element--max-width-regular {\n    max-width: 200px;\n}\n.nui-demo-nui-card__block-element--exact-width {\n    width: 150px;\n}\n.nui-demo-nui-card__block-element--exact-height {\n    height: 300px;\n}\n.nui-demo-nui-card__block-element--width-stretch {\n    width: 100%;\n    .setCssVariable(background-color, nui-color-semantic-critical-bg);\n}\n.nui-demo-nui-card__block-element--height-small {\n    height: 110px;\n}\n.nui-demo-nui-card__block-element--height-regular {\n    height: 130px;\n}\n.nui-demo-nui-card__block-element--height-large {\n    height: 230px;\n}\n.nui-demo-custom-container {\n    height: 750px;\n    width: 100%;\n}\n");

/***/ }),

/***/ "sR79":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-test/layout-test.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-sheet-group sheetsType=\"joined\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"px\" style=\"height: 500px\">\n    <nui-sheet-group\n    id=\"nui-demo-sheet-group--outer\"\n    sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n        <nui-sheet-group sheetsType=\"joined\">\n            <nui-sheet>\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n        </nui-sheet-group>\n        <nui-sheet-group\n            id=\"nui-demo-sheet-group--inner\"\n            [isResizable]=\"true\" sheetsType=\"joined\" resizeUnit=\"%\">\n            <nui-sheet>\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n            <nui-sheet id=\"nui-demo-sheet-group__sheet\">\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n            <nui-sheet>\n                <nui-card>\n                </nui-card>\n            </nui-sheet>\n        </nui-sheet-group>\n    </nui-sheet-group>\n    <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n        <nui-sheet class=\"pt-2\">\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet class=\"pt-2\">\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n        <nui-sheet class=\"pt-2\">\n            <nui-card>\n            </nui-card>\n        </nui-sheet>\n    </nui-sheet-group>\n</nui-sheet-group>\n");

/***/ }),

/***/ "ss33":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-visual-test/layout-visual-test.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\" style=\"height: 150px\">\n            <h3>Joined Sheet Group with Sheet Cards</h3>\n            <nui-sheet-group sheetsType=\"joined\">\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n            </nui-sheet-group>\n        </div>\n        <div class=\"col\">\n            <h3>Joined Sheet Group with Sheet Cards</h3>\n            <nui-sheet-group sheetsType=\"separate\">\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet style=\"height: 150px;\">\n                    <nui-card-group>\n                        <nui-card>\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n            </nui-sheet-group>\n        </div>\n    </div>\n    <div>\n        <h3>Complex Example</h3>\n        <nui-sheet-group sheetsType=\"separate\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"px\" style=\"height: 500px\" id=\"nui-visual-test-layout-separated-sheet-group\">\n            <nui-sheet-group sheetsType=\"separate\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n                <nui-sheet-group sheetsType=\"separate\">\n                    <nui-sheet>\n                        <nui-card-group>\n                            <nui-card>\n                            </nui-card>\n                        </nui-card-group>\n                    </nui-sheet>\n                </nui-sheet-group>\n                <nui-sheet-group [isResizable]=\"true\" sheetsType=\"separate\" resizeUnit=\"%\">\n                    <nui-sheet>\n                        <nui-card-group>\n                            <nui-card>\n                            </nui-card>\n                        </nui-card-group>\n                    </nui-sheet>\n                    <nui-sheet>\n                        <nui-card-group>\n                            <nui-card>\n                            </nui-card>\n                        </nui-card-group>\n                    </nui-sheet>\n                    <nui-sheet>\n                        <nui-card-group>\n                            <nui-card>\n                            </nui-card>\n                        </nui-card-group>\n                    </nui-sheet>\n                </nui-sheet-group>\n            </nui-sheet-group>\n            <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\"  id=\"nui-visual-test-layout-joined-sheet-group\">\n                <nui-sheet-group sheetsType=\"joined\" direction=\"row\" [isResizable]=\"true\" resizeUnit=\"px\" style=\"height: 500px\">\n                    <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n                        <nui-sheet-group sheetsType=\"joined\">\n                            <nui-sheet>\n                                <nui-card>\n                                </nui-card>\n                            </nui-sheet>\n                        </nui-sheet-group>\n                        <nui-sheet-group [isResizable]=\"true\" sheetsType=\"joined\" resizeUnit=\"%\">\n                            <nui-sheet>\n                                <nui-card>\n                                </nui-card>\n                            </nui-sheet>\n                            <nui-sheet>\n                                <nui-card>\n                                </nui-card>\n                            </nui-sheet>\n                            <nui-sheet>\n                                <nui-card>\n                                </nui-card>\n                            </nui-sheet>\n                        </nui-sheet-group>\n                    </nui-sheet-group>\n                    <nui-sheet-group sheetsType=\"joined\" direction=\"column\" [isResizable]=\"true\" resizeUnit=\"%\">\n                        <nui-sheet class=\"pt-2\">\n                            <nui-card>\n                            </nui-card>\n                        </nui-sheet>\n                        <nui-sheet class=\"pt-2\">\n                            <nui-card>\n                            </nui-card>\n                        </nui-sheet>\n                        <nui-sheet class=\"pt-2\">\n                            <nui-card>\n                            </nui-card>\n                        </nui-sheet>\n                    </nui-sheet-group>\n                </nui-sheet-group>\n            </nui-sheet-group>\n        </nui-sheet-group>\n    </div>\n    <div>\n        <h3>Fit Content</h3>\n        <div style=\"height:300px\">\n            <nui-sheet-group direction=\"row\">\n                <nui-sheet direction=\"column\" [fitContent]=\"true\">\n                    <nui-card-group>\n                        <nui-card style=\"min-width:200px\" direction=\"row\">\n                        </nui-card>\n                        <nui-card style=\"min-width:200px\" direction=\"row\">\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n                <nui-sheet direction=\"column\">\n                    <nui-card-group direction=\"column\">\n                        <nui-card style=\"min-height:100px\">\n                        </nui-card>\n                        <nui-card style=\"min-height:100px\">\n                        </nui-card>\n                        <nui-card style=\"min-height:100px\">\n                        </nui-card>\n                        <nui-card style=\"min-height:100px\">\n                        </nui-card>\n                        <nui-card style=\"min-height:100px\">\n                        </nui-card>\n                        <nui-card style=\"min-height:100px\">\n                        </nui-card>\n                    </nui-card-group>\n                </nui-sheet>\n            </nui-sheet-group>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "w417":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-test/layout-test.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-test\",\n    templateUrl: \"./layout-test.component.html\",\n})\nexport class LayoutTestComponent {\n}\n");

/***/ }),

/***/ "wJFq":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/layout/layout-complex/layout-complex.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-layout-complex-example\",\n    templateUrl: \"./layout-complex.example.component.html\",\n    styleUrls: [\"./layout-complex.example.component.less\"],\n})\nexport class LayoutComplexExampleComponent {\n\n}\n");

/***/ }),

/***/ "x0zI":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/layout/layout-visual-test/layout-visual-test.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LayoutVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutVisualTestComponent", function() { return LayoutVisualTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet-group/sheet-group.component */ "ZMK9");
/* harmony import */ var _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/layout/sheet/sheet.component */ "JnKo");
/* harmony import */ var _src_lib_layout_card_group_card_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card-group/card-group.component */ "8CAV");
/* harmony import */ var _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/layout/card/card.component */ "djS2");





class LayoutVisualTestComponent {
}
LayoutVisualTestComponent.ɵfac = function LayoutVisualTestComponent_Factory(t) { return new (t || LayoutVisualTestComponent)(); };
LayoutVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutVisualTestComponent, selectors: [["nui-layout-visual-test"]], decls: 90, vars: 9, consts: [[1, "container"], [1, "row"], [1, "col", 2, "height", "150px"], ["sheetsType", "joined"], [2, "height", "150px"], [1, "col"], ["sheetsType", "separate"], ["sheetsType", "separate", "direction", "row", "resizeUnit", "px", "id", "nui-visual-test-layout-separated-sheet-group", 2, "height", "500px", 3, "isResizable"], ["sheetsType", "separate", "direction", "column", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "separate", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "joined", "direction", "column", "resizeUnit", "%", "id", "nui-visual-test-layout-joined-sheet-group", 3, "isResizable"], ["sheetsType", "joined", "direction", "row", "resizeUnit", "px", 2, "height", "500px", 3, "isResizable"], ["sheetsType", "joined", "direction", "column", "resizeUnit", "%", 3, "isResizable"], ["sheetsType", "joined", "resizeUnit", "%", 3, "isResizable"], [1, "pt-2"], [2, "height", "300px"], ["direction", "row"], ["direction", "column", 3, "fitContent"], ["direction", "row", 2, "min-width", "200px"], ["direction", "column"], [2, "min-height", "100px"]], template: function LayoutVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Joined Sheet Group with Sheet Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-sheet-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Joined Sheet Group with Sheet Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-sheet-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-sheet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Complex Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nui-sheet-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-sheet-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-sheet-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nui-sheet-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nui-sheet-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nui-sheet-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-sheet-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nui-sheet-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nui-sheet-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nui-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nui-sheet-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nui-sheet", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nui-sheet", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-sheet", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nui-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Fit Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nui-sheet-group", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nui-sheet", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nui-card-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "nui-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nui-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nui-sheet", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nui-card-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nui-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "nui-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "nui-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nui-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "nui-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "nui-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isResizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fitContent", true);
    } }, directives: [_src_lib_layout_sheet_group_sheet_group_component__WEBPACK_IMPORTED_MODULE_1__["SheetGroupComponent"], _src_lib_layout_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_2__["SheetComponent"], _src_lib_layout_card_group_card_group_component__WEBPACK_IMPORTED_MODULE_3__["CardGroupComponent"], _src_lib_layout_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-layout-layout-module-es2015.js.map