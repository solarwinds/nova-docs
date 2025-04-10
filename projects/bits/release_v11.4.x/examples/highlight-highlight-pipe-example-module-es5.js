(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["highlight-highlight-pipe-example-module"], {
    /***/
    "STls":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/highlight/highlight-pipe-docs/highlight-pipe-docs.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: HighlightPipeDocsExampleComponent */

    /***/
    function STls(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightPipeDocsExampleComponent", function () {
        return HighlightPipeDocsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../highlight-pipe/highlight-pipe.example.component */
      "yc7x");

      var HighlightPipeDocsExampleComponent = function HighlightPipeDocsExampleComponent() {
        _classCallCheck(this, HighlightPipeDocsExampleComponent);
      };

      HighlightPipeDocsExampleComponent.ɵfac = function HighlightPipeDocsExampleComponent_Factory(t) {
        return new (t || HighlightPipeDocsExampleComponent)();
      };

      HighlightPipeDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HighlightPipeDocsExampleComponent,
        selectors: [["nui-pipes-docs-example"]],
        decls: 21,
        vars: 0,
        consts: [["href", "../pipes/HighlightPipe.html#info", "target", "_parent"], ["filenamePrefix", "highlight-pipe", "exampleTitle", "Basic Usage"]],
        template: function HighlightPipeDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "nuiHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " pipe is used to mark a portion of text. It will search the provided text for the specified string and highlight it.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NuiCommonModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This pipe can only be used with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "innerHTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " attribute. It escapes all the characters by default, and highlights every match in the string.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nui-demo-highlight-pipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "soum":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/highlight/highlight-pipe-example.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: HighlightPipeExampleModule */

    /***/
    function soum(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightPipeExampleModule", function () {
        return HighlightPipeExampleModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _highlight_pipe_docs_highlight_pipe_docs_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./highlight-pipe-docs/highlight-pipe-docs.example.component */
      "STls");
      /* harmony import */


      var _highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./highlight-pipe/highlight-pipe.example.component */
      "yc7x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _highlight_pipe_docs_highlight_pipe_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "highlight-pipe",
        component: _highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_3__["HighlightPipeExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          },
          showThemeSwitcher: true
        }
      }];

      var HighlightPipeExampleModule = function HighlightPipeExampleModule() {
        _classCallCheck(this, HighlightPipeExampleModule);
      };

      HighlightPipeExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: HighlightPipeExampleModule
      });
      HighlightPipeExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function HighlightPipeExampleModule_Factory(t) {
          return new (t || HighlightPipeExampleModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("w4eR");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HighlightPipeExampleModule, {
          declarations: [_highlight_pipe_docs_highlight_pipe_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeDocsExampleComponent"], _highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_3__["HighlightPipeExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "w4eR":
    /*!******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/highlight sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \******************************************************************************************************************/

    /*! no static exports found */

    /***/
    function w4eR(module, exports, __webpack_require__) {
      var map = {
        "./highlight-pipe-docs/highlight-pipe-docs.example.component.html": "/m90",
        "./highlight-pipe-docs/highlight-pipe-docs.example.component.ts": "i9Ed",
        "./highlight-pipe-example.module.ts": "dMpX",
        "./highlight-pipe/highlight-pipe.example.component.html": "dniG",
        "./highlight-pipe/highlight-pipe.example.component.ts": "VP4k"
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
      webpackContext.id = "w4eR";
      /***/
    },

    /***/
    "yc7x":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes/highlight/highlight-pipe/highlight-pipe.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: HighlightPipeExampleComponent */

    /***/
    function yc7x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightPipeExampleComponent", function () {
        return HighlightPipeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _src_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/pipes/highlight.pipe */
      "ZlWS");

      var HighlightPipeExampleComponent = /*#__PURE__*/function () {
        function HighlightPipeExampleComponent() {
          _classCallCheck(this, HighlightPipeExampleComponent);

          this.term = "bar";
          this.searchString = "hello <span class=\"x\">FOO</span> bar";
        }

        _createClass(HighlightPipeExampleComponent, [{
          key: "changeSearchValue",
          value: function changeSearchValue(value) {
            this.term = value;
          }
        }]);

        return HighlightPipeExampleComponent;
      }();

      HighlightPipeExampleComponent.ɵfac = function HighlightPipeExampleComponent_Factory(t) {
        return new (t || HighlightPipeExampleComponent)();
      };

      HighlightPipeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HighlightPipeExampleComponent,
        selectors: [["nui-demo-highlight-pipe"]],
        decls: 9,
        vars: 9,
        consts: [[3, "innerHTML"], [3, "value", "inputChange"]],
        template: function HighlightPipeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Highlighting a portion of text:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "nuiHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dynamic highlighting (for example, with search):");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-search", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function HighlightPipeExampleComponent_Template_nui_search_inputChange_6_listener($event) {
              return ctx.changeSearchValue($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "nuiHighlight");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, "hello world", "world"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.term);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, ctx.searchString, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
        pipes: [_src_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_2__["HighlightPipe"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=highlight-highlight-pipe-example-module-es5.js.map