(function () {
  var _templateObject, _templateObject2, _templateObject3;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-search-search-module"], {
    /***/
    "/f0G":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-focus-change/search-focus-change.example.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: SearchFocusChangeExampleComponent */

    /***/
    function f0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFocusChangeExampleComponent", function () {
        return SearchFocusChangeExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var SearchFocusChangeExampleComponent = /*#__PURE__*/function () {
        function SearchFocusChangeExampleComponent(toastService) {
          _classCallCheck(this, SearchFocusChangeExampleComponent);

          this.toastService = toastService;
          this.isFocused = false;
        }

        _createClass(SearchFocusChangeExampleComponent, [{
          key: "onFocusChange",
          value: function onFocusChange(focused) {
            this.isFocused = focused;
            this.toastService.success({
              message: this.isFocused ? "Focused in!" : "Focused out"
            });
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            this.isFocused = true;
            this.toastService.success({
              message: "Focused in!"
            });
          }
        }]);

        return SearchFocusChangeExampleComponent;
      }();

      SearchFocusChangeExampleComponent.ɵfac = function SearchFocusChangeExampleComponent_Factory(t) {
        return new (t || SearchFocusChangeExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      SearchFocusChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SearchFocusChangeExampleComponent,
        selectors: [["nui-search-focus-change-example"]],
        decls: 3,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3038762907122558535$$DEMO_SRC_COMPONENTS_DEMO_SEARCH_SEARCH_FOCUS_CHANGE_SEARCH_FOCUS_CHANGE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Focus Programmatically");
            i18n_0 = MSG_EXTERNAL_3038762907122558535$$DEMO_SRC_COMPONENTS_DEMO_SEARCH_SEARCH_FOCUS_CHANGE_SEARCH_FOCUS_CHANGE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F53b6eb29aa31bc17505987fa9c512c28961ece98\u241F3038762907122558535:Focus Programmatically"])));
          }

          return [[3, "captureFocus", "focusChange"], ["type", "button", "nui-button", "", 1, "mt-1", 3, "click"], i18n_0];
        },
        template: function SearchFocusChangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-search", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusChange", function SearchFocusChangeExampleComponent_Template_nui_search_focusChange_0_listener($event) {
              return ctx.onFocusChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchFocusChangeExampleComponent_Template_button_click_1_listener() {
              return ctx.setFocus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("captureFocus", ctx.isFocused);
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "63dL":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-input-change/search-input-change.example.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-search [value]=\"value\" (inputChange)=\"onInputChange($event)\"></nui-search>\n<p i18n class=\"nui-text-default\">Current value is {{value}}</p>\n";
      /***/
    },

    /***/
    "78F7":
    /*!**************************************************!*\
      !*** ./demo/src/components/demo/search/index.ts ***!
      \**************************************************/

    /*! exports provided: SearchVisualTestComponent, SearchBasicExampleComponent, SearchDocsExampleComponent, SearchPlaceholderExampleComponent, SearchFocusChangeExampleComponent, SearchTestExampleComponent, SearchInputChangeExampleComponent, SearchOnSearchCancelExampleComponent */

    /***/
    function F7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _search_visual_test_search_visual_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search-visual-test/search-visual-test.component */
      "NBId");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchVisualTestComponent", function () {
        return _search_visual_test_search_visual_test_component__WEBPACK_IMPORTED_MODULE_0__["SearchVisualTestComponent"];
      });
      /* harmony import */


      var _search_basic_search_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search-basic/search-basic.example.component */
      "JSjv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchBasicExampleComponent", function () {
        return _search_basic_search_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["SearchBasicExampleComponent"];
      });
      /* harmony import */


      var _search_docs_search_docs_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-docs/search-docs.example.component */
      "FuGg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchDocsExampleComponent", function () {
        return _search_docs_search_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["SearchDocsExampleComponent"];
      });
      /* harmony import */


      var _search_placeholder_search_placeholder_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-placeholder/search-placeholder.example.component */
      "LSe1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchPlaceholderExampleComponent", function () {
        return _search_placeholder_search_placeholder_example_component__WEBPACK_IMPORTED_MODULE_3__["SearchPlaceholderExampleComponent"];
      });
      /* harmony import */


      var _search_focus_change_search_focus_change_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./search-focus-change/search-focus-change.example.component */
      "/f0G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchFocusChangeExampleComponent", function () {
        return _search_focus_change_search_focus_change_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchFocusChangeExampleComponent"];
      });
      /* harmony import */


      var _search_test_search_test_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-test/search-test.example.component */
      "gK7r");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchTestExampleComponent", function () {
        return _search_test_search_test_example_component__WEBPACK_IMPORTED_MODULE_5__["SearchTestExampleComponent"];
      });
      /* harmony import */


      var _search_input_change_search_input_change_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-input-change/search-input-change.example.component */
      "eTzn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchInputChangeExampleComponent", function () {
        return _search_input_change_search_input_change_example_component__WEBPACK_IMPORTED_MODULE_6__["SearchInputChangeExampleComponent"];
      });
      /* harmony import */


      var _search_on_search_cancel_search_on_search_cancel_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./search-on-search-cancel/search-on-search-cancel.example.component */
      "rvzm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchOnSearchCancelExampleComponent", function () {
        return _search_on_search_cancel_search_on_search_cancel_example_component__WEBPACK_IMPORTED_MODULE_7__["SearchOnSearchCancelExampleComponent"];
      });
      /***/

    },

    /***/
    "9aOq":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-basic/search-basic.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aOq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-search-basic-example\",\n    templateUrl: \"search-basic.example.component.html\",\n})\n\nexport class SearchBasicExampleComponent {\n}\n";
      /***/
    },

    /***/
    "Cs/D":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-basic/search-basic.example.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CsD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-search></nui-search>\n";
      /***/
    },

    /***/
    "EFQq":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-input-change/search-input-change.example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EFQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-search-input-change-example\",\n    templateUrl: \"search-input-change.example.component.html\",\n})\n\nexport class SearchInputChangeExampleComponent {\n    public value: string = \"example value\";\n\n    public onInputChange(value: string) {\n        this.value = value;\n    }\n}\n";
      /***/
    },

    /***/
    "FuGg":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-docs/search-docs.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SearchDocsExampleComponent */

    /***/
    function FuGg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchDocsExampleComponent", function () {
        return SearchDocsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _search_basic_search_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../search-basic/search-basic.example.component */
      "JSjv");
      /* harmony import */


      var _search_placeholder_search_placeholder_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../search-placeholder/search-placeholder.example.component */
      "LSe1");
      /* harmony import */


      var _search_input_change_search_input_change_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../search-input-change/search-input-change.example.component */
      "eTzn");
      /* harmony import */


      var _search_focus_change_search_focus_change_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../search-focus-change/search-focus-change.example.component */
      "/f0G");
      /* harmony import */


      var _search_on_search_cancel_search_on_search_cancel_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../search-on-search-cancel/search-on-search-cancel.example.component */
      "rvzm");

      var SearchDocsExampleComponent = function SearchDocsExampleComponent() {
        _classCallCheck(this, SearchDocsExampleComponent);
      };

      SearchDocsExampleComponent.ɵfac = function SearchDocsExampleComponent_Factory(t) {
        return new (t || SearchDocsExampleComponent)();
      };

      SearchDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchDocsExampleComponent,
        selectors: [["nui-search-docs-example"]],
        decls: 84,
        vars: 0,
        consts: [["filenamePrefix", "search-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "search-placeholder", "exampleTitle", "Placeholder"], ["filenamePrefix", "search-input-change", "exampleTitle", "Initial Value and Input Change"], ["filenamePrefix", "search-focus-change", "exampleTitle", "Capture Focus and Focus Change"], ["filenamePrefix", "search-on-search-cancel", "exampleTitle", "On Search and On Cancel"]],
        template: function SearchDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiSearchModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To use the search component add an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-search>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " to your template.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "<nui-search>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " min-width is 180px and max-width is 400px.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nui-search-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " To set the placeholder (string that will be placed as a watermark inside of the search when it's empty) for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "<nui-search>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-search-placeholder-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Initial Value and Input Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " To subscribe to value change in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "<nui-search>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " you can use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "(inputChanged)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " output which emits ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "string");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " when input field value is changed. Optionally, you can set an initial value via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "nui-search-input-change-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Capture Focus and Focus Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " There is a possibility to focus search programmatically. To focus the search pass true to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "captureFocus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " input. Also there is a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "(focusChange)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " output that is fired on external focus changes (e.g. initiated by user via UI). Use it if you bind an external input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "captureFocus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " input for matching them both.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nui-search-focus-change-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "On Search and On Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "There are two outputs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "(search)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(cancel)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(cancel)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " event is fired on each 'cancel' button click, clears the value and emits it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "(search)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " event is fired when 'search' button is clicked or on Enter keypress and emits value of the search.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "nui-search-on-search-cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _search_basic_search_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["SearchBasicExampleComponent"], _search_placeholder_search_placeholder_example_component__WEBPACK_IMPORTED_MODULE_3__["SearchPlaceholderExampleComponent"], _search_input_change_search_input_change_example_component__WEBPACK_IMPORTED_MODULE_4__["SearchInputChangeExampleComponent"], _search_focus_change_search_focus_change_example_component__WEBPACK_IMPORTED_MODULE_5__["SearchFocusChangeExampleComponent"], _search_on_search_cancel_search_on_search_cancel_example_component__WEBPACK_IMPORTED_MODULE_6__["SearchOnSearchCancelExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Fvf2":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-on-search-cancel/search-on-search-cancel.example.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fvf2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-search-on-search-cancel\",\n    templateUrl: \"search-on-search-cancel.example.component.html\",\n})\n\nexport class SearchOnSearchCancelExampleComponent {\n    constructor(@Inject(ToastService) public toastService: ToastService) { }\n\n    public onSearch(value: string) {\n        this.toastService.success({message: `OnSearch triggered. Current value is: ${value}`});\n    }\n    public onCancel(value: string) {\n        this.toastService.success({message: `OnCancel triggered. Current value is: ${value}`});\n    }\n}\n";
      /***/
    },

    /***/
    "H7QH":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-focus-change/search-focus-change.example.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H7QH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-search [captureFocus]=\"isFocused\" (focusChange)=\"onFocusChange($event)\"></nui-search>\n<button type=\"button\" nui-button class=\"mt-1\" (click)=\"setFocus()\" i18n>Focus Programmatically</button>\n";
      /***/
    },

    /***/
    "JSjv":
    /*!****************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-basic/search-basic.example.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: SearchBasicExampleComponent */

    /***/
    function JSjv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchBasicExampleComponent", function () {
        return SearchBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");

      var SearchBasicExampleComponent = function SearchBasicExampleComponent() {
        _classCallCheck(this, SearchBasicExampleComponent);
      };

      SearchBasicExampleComponent.ɵfac = function SearchBasicExampleComponent_Factory(t) {
        return new (t || SearchBasicExampleComponent)();
      };

      SearchBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchBasicExampleComponent,
        selectors: [["nui-search-basic-example"]],
        decls: 1,
        vars: 0,
        template: function SearchBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-search");
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "JTk2":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-visual-test/search-visual-test.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JTk2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-search-visual-test\",\n    templateUrl: \"./search-visual-test.component.html\",\n})\nexport class SearchVisualTestComponent {\n    public value: string = \"example value\";\n}\n";
      /***/
    },

    /***/
    "JcK+":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-placeholder/search-placeholder.example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JcK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-search i18n-placeholder placeholder=\"Type here to search...\"></nui-search>\n";
      /***/
    },

    /***/
    "LSe1":
    /*!****************************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-placeholder/search-placeholder.example.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: SearchPlaceholderExampleComponent */

    /***/
    function LSe1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPlaceholderExampleComponent", function () {
        return SearchPlaceholderExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");

      var SearchPlaceholderExampleComponent = function SearchPlaceholderExampleComponent() {
        _classCallCheck(this, SearchPlaceholderExampleComponent);

        this.placeholder = "Search something...";
      };

      SearchPlaceholderExampleComponent.ɵfac = function SearchPlaceholderExampleComponent_Factory(t) {
        return new (t || SearchPlaceholderExampleComponent)();
      };

      SearchPlaceholderExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchPlaceholderExampleComponent,
        selectors: [["nui-search-placeholder-example"]],
        decls: 1,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5726951213176065359$$DEMO_SRC_COMPONENTS_DEMO_SEARCH_SEARCH_PLACEHOLDER_SEARCH_PLACEHOLDER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Type here to search...");
            i18n_0 = MSG_EXTERNAL_5726951213176065359$$DEMO_SRC_COMPONENTS_DEMO_SEARCH_SEARCH_PLACEHOLDER_SEARCH_PLACEHOLDER_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F4406936ec78030b904dfde9598d7320929212353\u241F5726951213176065359:Type here to search..."])));
          }

          return [["placeholder", i18n_0]];
        },
        template: function SearchPlaceholderExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-search", 0);
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "NBId":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-visual-test/search-visual-test.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: SearchVisualTestComponent */

    /***/
    function NBId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchVisualTestComponent", function () {
        return SearchVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");

      var SearchVisualTestComponent = function SearchVisualTestComponent() {
        _classCallCheck(this, SearchVisualTestComponent);

        this.value = "example value";
      };

      SearchVisualTestComponent.ɵfac = function SearchVisualTestComponent_Factory(t) {
        return new (t || SearchVisualTestComponent)();
      };

      SearchVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchVisualTestComponent,
        selectors: [["nui-search-visual-test"]],
        decls: 15,
        vars: 1,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-visual-test-basic-search"], ["placeholder", "Type here to search...", "id", "nui-visual-test-search-with-placeholder"], ["id", "nui-visual-test-search-with-input-text", 3, "value"]],
        template: function SearchVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-search", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search with Custom Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-search", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search with input text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-search", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "NYqX":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-on-search-cancel/search-on-search-cancel.example.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NYqX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-search (cancel)=\"onCancel($event)\" (search)=\"onSearch($event)\"></nui-search>\n";
      /***/
    },

    /***/
    "V/2q":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/search/search.module.ts ***!
      \**********************************************************/

    /*! exports provided: SearchModule */

    /***/
    function V2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
        return SearchModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./index */
      "78F7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["SearchDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "search-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["SearchTestExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "search-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["SearchVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var SearchModule = function SearchModule() {
        _classCallCheck(this, SearchModule);
      };

      SearchModule.ɵfac = function SearchModule_Factory(t) {
        return new (t || SearchModule)();
      };

      SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: SearchModule
      });
      SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("YvYQ");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SearchModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["SearchTestExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchFocusChangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchInputChangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchOnSearchCancelExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchPlaceholderExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["SearchVisualTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "VpSi":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-docs/search-docs.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VpSi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiSearchModule</code>\n    </li>\n</ul>\n<h1>Basic Usage</h1>\n<p>\n    To use the search component add an <code>&lt;nui-search&gt;</code> to your template.<br>\n    <b>Note:</b> <code>&lt;nui-search&gt;</code> min-width is 180px and max-width is 400px.\n</p>\n<nui-example-wrapper filenamePrefix=\"search-basic\" exampleTitle=\"Basic Usage\">\n    <nui-search-basic-example></nui-search-basic-example>\n</nui-example-wrapper>\n\n<h1>Placeholder</h1>\n<p>\n    To set the placeholder (string that will be placed as a watermark inside of the search when it's empty) for the\n    <code>&lt;nui-search&gt;</code> use the <code>placeholder</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"search-placeholder\" exampleTitle=\"Placeholder\">\n    <nui-search-placeholder-example></nui-search-placeholder-example>\n</nui-example-wrapper>\n\n<h1>Initial Value and Input Change</h1>\n<p>\n    To subscribe to value change in <code>&lt;nui-search&gt;</code> you can use the <code>(inputChanged)</code> output which emits\n    <code>string</code> when input field value is changed. Optionally, you can set an initial value via the <code>value</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"search-input-change\" exampleTitle=\"Initial Value and Input Change\">\n    <nui-search-input-change-example></nui-search-input-change-example>\n</nui-example-wrapper>\n\n<h1>Capture Focus and Focus Change</h1>\n<p>\n    There is a possibility to focus search programmatically. To focus the search pass true to the <code>captureFocus</code>\n    input. Also there is a <code>(focusChange)</code> output that is fired on external focus changes (e.g. initiated by user via UI).\n    Use it if you bind an external input to <code>captureFocus</code> input for matching them both.\n</p>\n<nui-example-wrapper filenamePrefix=\"search-focus-change\" exampleTitle=\"Capture Focus and Focus Change\">\n    <nui-search-focus-change-example></nui-search-focus-change-example>\n</nui-example-wrapper>\n\n<h1>On Search and On Cancel</h1>\n<p>There are two outputs <code>(search)</code> and <code>(cancel)</code>. <code>(cancel)</code> event is fired on each\n    'cancel' button click, clears the value and emits it. <code>(search)</code> event is fired when\n    'search' button is clicked or on Enter keypress and emits value of the search.\n</p>\n<nui-example-wrapper filenamePrefix=\"search-on-search-cancel\" exampleTitle=\"On Search and On Cancel\">\n    <nui-search-on-search-cancel></nui-search-on-search-cancel>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "W9YW":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W9YW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCommonModule,\n    NuiDocsModule,\n    NuiSearchModule,\n    NuiSelectModule,\n    NuiTextboxModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    SearchBasicExampleComponent,\n    SearchDocsExampleComponent,\n    SearchFocusChangeExampleComponent,\n    SearchInputChangeExampleComponent,\n    SearchOnSearchCancelExampleComponent,\n    SearchPlaceholderExampleComponent,\n    SearchTestExampleComponent,\n    SearchVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: SearchDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"search-test\",\n        component: SearchTestExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"search-visual-test\",\n        component: SearchVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiSearchModule,\n        NuiTextboxModule,\n        NuiDocsModule,\n        NuiCommonModule,\n        FormsModule,\n        ReactiveFormsModule,\n        RouterModule.forChild(routes),\n        NuiSelectModule,\n    ],\n    declarations: [\n        SearchTestExampleComponent,\n        SearchBasicExampleComponent,\n        SearchDocsExampleComponent,\n        SearchFocusChangeExampleComponent,\n        SearchInputChangeExampleComponent,\n        SearchOnSearchCancelExampleComponent,\n        SearchPlaceholderExampleComponent,\n        SearchVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SearchModule {\n}\n";
      /***/
    },

    /***/
    "YvYQ":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/search sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function YvYQ(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "x055",
        "./search-basic/search-basic.example.component.html": "Cs/D",
        "./search-basic/search-basic.example.component.ts": "9aOq",
        "./search-docs/search-docs.example.component.html": "VpSi",
        "./search-docs/search-docs.example.component.ts": "oUUe",
        "./search-focus-change/search-focus-change.example.component.html": "H7QH",
        "./search-focus-change/search-focus-change.example.component.ts": "ua0L",
        "./search-input-change/search-input-change.example.component.html": "63dL",
        "./search-input-change/search-input-change.example.component.ts": "EFQq",
        "./search-on-search-cancel/search-on-search-cancel.example.component.html": "NYqX",
        "./search-on-search-cancel/search-on-search-cancel.example.component.ts": "Fvf2",
        "./search-placeholder/search-placeholder.example.component.html": "JcK+",
        "./search-placeholder/search-placeholder.example.component.ts": "hRAW",
        "./search-test/search-test.example.component.html": "hVNC",
        "./search-test/search-test.example.component.ts": "e347",
        "./search-visual-test/search-visual-test.component.html": "xtky",
        "./search-visual-test/search-visual-test.component.ts": "JTk2",
        "./search.module.ts": "W9YW"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
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
      webpackContext.id = "YvYQ";
      /***/
    },

    /***/
    "e347":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-test/search-test.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e347(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-search-example\",\n    templateUrl: \"./search-test.example.component.html\",\n})\nexport class SearchTestExampleComponent {\n    public active = false;\n    public captureFocus = true;\n    public name = \"example-name\";\n    public searchKey: string;\n    public stringToSearch = `\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat.\n        Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate.\n        Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula\n        fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae\n        hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis.\n        Phasellus mauris arcu, blandit id congue vitae, elementum amet enim.\n        Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum.\n        Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare.\n        Fusce porttitor laoreet dui a mollis.\n    `;\n    public value: string;\n\n    public interval = 2000;\n\n    public onCancel(value: string) {\n        this.value = \"\";\n        this.searchKey = \"\";\n    }\n\n    public onFocusChange(event: boolean) {\n        this.captureFocus = event;\n    }\n\n    public onInputChange(value: string) {\n        this.value = value;\n    }\n\n    public onSearch(value: string) {\n        this.doSearch(value);\n    }\n\n    public setFocus() {\n        this.captureFocus = true;\n        setTimeout(() => {\n            this.captureFocus = false;\n        }, this.interval);\n    }\n\n    private doSearch(value: string) {\n        this.searchKey = value;\n    }\n}\n";
      /***/
    },

    /***/
    "eTzn":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-input-change/search-input-change.example.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: SearchInputChangeExampleComponent */

    /***/
    function eTzn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchInputChangeExampleComponent", function () {
        return SearchInputChangeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");

      var SearchInputChangeExampleComponent = /*#__PURE__*/function () {
        function SearchInputChangeExampleComponent() {
          _classCallCheck(this, SearchInputChangeExampleComponent);

          this.value = "example value";
        }

        _createClass(SearchInputChangeExampleComponent, [{
          key: "onInputChange",
          value: function onInputChange(value) {
            this.value = value;
          }
        }]);

        return SearchInputChangeExampleComponent;
      }();

      SearchInputChangeExampleComponent.ɵfac = function SearchInputChangeExampleComponent_Factory(t) {
        return new (t || SearchInputChangeExampleComponent)();
      };

      SearchInputChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchInputChangeExampleComponent,
        selectors: [["nui-search-input-change-example"]],
        decls: 3,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3476040400735937016$$DEMO_SRC_COMPONENTS_DEMO_SEARCH_SEARCH_INPUT_CHANGE_SEARCH_INPUT_CHANGE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Current value is {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_3476040400735937016$$DEMO_SRC_COMPONENTS_DEMO_SEARCH_SEARCH_INPUT_CHANGE_SEARCH_INPUT_CHANGE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F333b9c51679e106ee63e18803cbd180143d28f6b\u241F3476040400735937016:Current value is ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [[3, "value", "inputChange"], [1, "nui-text-default"], i18n_0];
        },
        template: function SearchInputChangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-search", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function SearchInputChangeExampleComponent_Template_nui_search_inputChange_0_listener($event) {
              return ctx.onInputChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](2);
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gK7r":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-test/search-test.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SearchTestExampleComponent */

    /***/
    function gK7r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchTestExampleComponent", function () {
        return SearchTestExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/pipes/highlight.pipe */
      "ZlWS");

      var SearchTestExampleComponent = /*#__PURE__*/function () {
        function SearchTestExampleComponent() {
          _classCallCheck(this, SearchTestExampleComponent);

          this.active = false;
          this.captureFocus = true;
          this.name = "example-name";
          this.stringToSearch = "\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur rutrum lacus id vulputate.\n        Integer eu ex eu augue efficitur luctus quis ac elit. Nam odio est, iaculis nec varius id, congue erat.\n        Nullam mi lectus, gravida quis pretium sit amet, accumsan non elit. In tempus commodo sem ac vulputate.\n        Sed vel sagittis purus. Integer non ornare felis. Sed aliquam, purus et euismod tincidunt, felis ligula\n        fermentum mi, eget commodo nisl orci efficitur dui. Etiam interdum justo magna consequat, vitae\n        hendrerit mi aliquam. Sed non ex eu purus ornare lobortis tempus id est. Aenean dictum at dui sit amet mollis.\n        Phasellus mauris arcu, blandit id congue vitae, elementum amet enim.\n        Pellentesque et facilisis leo, sit amet rhoncus magna. Integer commodo lobortis arcu et bibendum.\n        Pellentesque sagittis magna sed tellus volutpat, sed eleifend justo ornare.\n        Fusce porttitor laoreet dui a mollis.\n    ";
          this.interval = 2000;
        }

        _createClass(SearchTestExampleComponent, [{
          key: "onCancel",
          value: function onCancel(value) {
            this.value = "";
            this.searchKey = "";
          }
        }, {
          key: "onFocusChange",
          value: function onFocusChange(event) {
            this.captureFocus = event;
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(value) {
            this.value = value;
          }
        }, {
          key: "onSearch",
          value: function onSearch(value) {
            this.doSearch(value);
          }
        }, {
          key: "setFocus",
          value: function setFocus() {
            var _this = this;

            this.captureFocus = true;
            setTimeout(function () {
              _this.captureFocus = false;
            }, this.interval);
          }
        }, {
          key: "doSearch",
          value: function doSearch(value) {
            this.searchKey = value;
          }
        }]);

        return SearchTestExampleComponent;
      }();

      SearchTestExampleComponent.ɵfac = function SearchTestExampleComponent_Factory(t) {
        return new (t || SearchTestExampleComponent)();
      };

      SearchTestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchTestExampleComponent,
        selectors: [["nui-search-example"]],
        decls: 18,
        vars: 9,
        consts: [["id", "nui-demo-search", 3, "name", "value", "captureFocus", "focusChange", "inputChange", "search", "cancel"], [3, "innerHTML"], ["nui-button", "", "type", "button", "id", "nui-demo-search-set-focus-btn", "displayStyle", "default", 3, "click"]],
        template: function SearchTestExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-search", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusChange", function SearchTestExampleComponent_Template_nui_search_focusChange_0_listener($event) {
              return ctx.onFocusChange($event);
            })("inputChange", function SearchTestExampleComponent_Template_nui_search_inputChange_0_listener($event) {
              return ctx.onInputChange($event);
            })("search", function SearchTestExampleComponent_Template_nui_search_search_0_listener($event) {
              return ctx.onSearch($event);
            })("cancel", function SearchTestExampleComponent_Template_nui_search_cancel_0_listener($event) {
              return ctx.onCancel($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Result:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "nuiHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Input parameters:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " captureFocus ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchTestExampleComponent_Template_button_click_16_listener() {
              return ctx.setFocus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.name)("value", ctx.value)("captureFocus", ctx.captureFocus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, ctx.stringToSearch, ctx.searchKey), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx.captureFocus ? "true" : "false", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Set Focus for ", ctx.interval / 1000, " sec. ");
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]],
        pipes: [_src_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_4__["HighlightPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "hRAW":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-placeholder/search-placeholder.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hRAW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-search-placeholder-example\",\n    templateUrl: \"search-placeholder.example.component.html\",\n})\n\nexport class SearchPlaceholderExampleComponent {\n    public placeholder = \"Search something...\";\n}\n";
      /***/
    },

    /***/
    "hVNC":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-test/search-test.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hVNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-search id=\"nui-demo-search\"\n            [name]=\"name\"\n            [value]=\"value\"\n            [captureFocus]=\"captureFocus\"\n            (focusChange)=\"onFocusChange($event)\"\n            (inputChange)=\"onInputChange($event)\"\n            (search)=\"onSearch($event)\"\n            (cancel)=\"onCancel($event)\">\n</nui-search>\n<div>\n    <h3>Search Result:</h3>\n    <div>\n        <p [innerHTML]=\"stringToSearch | nuiHighlight: searchKey\"></p>\n    </div>\n</div>\n<h4>Input parameters:</h4>\n<form>\n    <div>\n        <div>\n            <code> captureFocus </code>\n            <span> : {{captureFocus ? 'true' : 'false'}}</span>\n        </div>\n        <button nui-button type=\"button\"\n                           id=\"nui-demo-search-set-focus-btn\"\n                           displayStyle=\"default\"\n                           (click)=\"setFocus()\">\n            Set Focus for {{interval/1000}} sec.\n        </button>\n    </div>\n</form>\n";
      /***/
    },

    /***/
    "oUUe":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-docs/search-docs.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oUUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-search-docs-example\",\n    templateUrl: \"./search-docs.example.component.html\",\n})\nexport class SearchDocsExampleComponent  { }\n";
      /***/
    },

    /***/
    "rvzm":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/search/search-on-search-cancel/search-on-search-cancel.example.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: SearchOnSearchCancelExampleComponent */

    /***/
    function rvzm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchOnSearchCancelExampleComponent", function () {
        return SearchOnSearchCancelExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");

      var SearchOnSearchCancelExampleComponent = /*#__PURE__*/function () {
        function SearchOnSearchCancelExampleComponent(toastService) {
          _classCallCheck(this, SearchOnSearchCancelExampleComponent);

          this.toastService = toastService;
        }

        _createClass(SearchOnSearchCancelExampleComponent, [{
          key: "onSearch",
          value: function onSearch(value) {
            this.toastService.success({
              message: "OnSearch triggered. Current value is: ".concat(value)
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel(value) {
            this.toastService.success({
              message: "OnCancel triggered. Current value is: ".concat(value)
            });
          }
        }]);

        return SearchOnSearchCancelExampleComponent;
      }();

      SearchOnSearchCancelExampleComponent.ɵfac = function SearchOnSearchCancelExampleComponent_Factory(t) {
        return new (t || SearchOnSearchCancelExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      SearchOnSearchCancelExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SearchOnSearchCancelExampleComponent,
        selectors: [["nui-search-on-search-cancel"]],
        decls: 1,
        vars: 0,
        consts: [[3, "cancel", "search"]],
        template: function SearchOnSearchCancelExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-search", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cancel", function SearchOnSearchCancelExampleComponent_Template_nui_search_cancel_0_listener($event) {
              return ctx.onCancel($event);
            })("search", function SearchOnSearchCancelExampleComponent_Template_nui_search_search_0_listener($event) {
              return ctx.onSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ua0L":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-focus-change/search-focus-change.example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ua0L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-search-focus-change-example\",\n    templateUrl: \"./search-focus-change.example.component.html\",\n})\n\nexport class SearchFocusChangeExampleComponent {\n    public isFocused: boolean = false;\n\n    constructor(@Inject(ToastService) public toastService: ToastService) {\n    }\n\n    public onFocusChange(focused: boolean) {\n        this.isFocused = focused;\n        this.toastService.success({message: this.isFocused ? \"Focused in!\" : \"Focused out\"});\n    }\n\n    public setFocus() {\n        this.isFocused = true;\n        this.toastService.success({message: \"Focused in!\"});\n    }\n}\n";
      /***/
    },

    /***/
    "x055":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/index.ts ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function x055(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./search-visual-test/search-visual-test.component\";\nexport * from \"./search-basic/search-basic.example.component\";\nexport * from \"./search-docs/search-docs.example.component\";\nexport * from \"./search-placeholder/search-placeholder.example.component\";\nexport * from \"./search-focus-change/search-focus-change.example.component\";\nexport * from \"./search-test/search-test.example.component\";\nexport * from \"./search-input-change/search-input-change.example.component\";\nexport * from \"./search-on-search-cancel/search-on-search-cancel.example.component\";\n";
      /***/
    },

    /***/
    "xtky":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/search/search-visual-test/search-visual-test.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xtky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Search</h3>\n            <nui-search id=\"nui-visual-test-basic-search\"></nui-search>\n        </div>\n        <div class=\"col\">\n            <h3>Search with Custom Placeholder</h3>\n            <nui-search placeholder=\"Type here to search...\" id=\"nui-visual-test-search-with-placeholder\"></nui-search>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Search with input text</h3>\n            <nui-search [value]=\"value\" id=\"nui-visual-test-search-with-input-text\"></nui-search>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-search-search-module-es5.js.map