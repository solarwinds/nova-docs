(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pipes-pipes-module"], {
    /***/
    "/m90":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/highlight/highlight-pipe-docs/highlight-pipe-docs.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    Highlight pipe is used to mark a part of the text. It will look through your text and find the specified word or part of the text and highlights it.\n    Since it is an example of angular's pipe, user can change the search term dynamically.\n</p>\n<p>\n    This pipe can only be used with `innerHTML` directive. It escapes all the characters by default and highlights every match in the string.\n</p>\n<nui-example-wrapper filenamePrefix=\"highlight-pipe\" exampleTitle=\"Highlight Pipe\">\n    <nui-demo-highlight-pipe></nui-demo-highlight-pipe>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "5xI0":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/pipes.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xI0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiSearchModule, NuiCommonModule } from \"@nova-ui/bits\";\n\nimport { HighlightPipeDocsExampleComponent, HighlightPipeExampleComponent } from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: HighlightPipeDocsExampleComponent,\n    },\n    {\n        path: \"highlight-pipe\",\n        component: HighlightPipeDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiDocsModule,\n        NuiSearchModule,\n        NuiCommonModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        HighlightPipeExampleComponent,\n        HighlightPipeDocsExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class PipesModule {\n}\n";
      /***/
    },

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
        decls: 6,
        vars: 0,
        consts: [["filenamePrefix", "highlight-pipe", "exampleTitle", "Highlight Pipe"]],
        template: function HighlightPipeDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Highlight pipe is used to mark a part of the text. It will look through your text and find the specified word or part of the text and highlights it. Since it is an example of angular's pipe, user can change the search term dynamically.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This pipe can only be used with `innerHTML` directive. It escapes all the characters by default and highlights every match in the string.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-demo-highlight-pipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "VP4k":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/highlight/highlight-pipe/highlight-pipe.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VP4k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component} from \"@angular/core\";\n\n@Component({\n    selector: \"nui-demo-highlight-pipe\",\n    templateUrl: \"./highlight-pipe.example.component.html\",\n})\nexport class HighlightPipeExampleComponent {\n    term: string = \"bar\";\n    searchString: string = `hello <span class=\"x\">FOO</span> bar`;\n    changeSearchValue(value: string) {\n        this.term = value;\n    }\n}\n";
      /***/
    },

    /***/
    "dniG":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/highlight/highlight-pipe/highlight-pipe.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dniG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "Highlight some part of the text:\n<p [innerHTML]='\"hello world\" | nuiHighlight:\"world\"' >\n</p>\nDynamic highlight(for example, using with search):\n<nui-search (inputChange)=\"changeSearchValue($event)\" [value]=\"term\"></nui-search>\n<p [innerHTML]='searchString | nuiHighlight: term '></p>\n";
      /***/
    },

    /***/
    "gtie":
    /*!*************************************************!*\
      !*** ./demo/src/components/demo/pipes/index.ts ***!
      \*************************************************/

    /*! exports provided: HighlightPipeExampleComponent, HighlightPipeDocsExampleComponent */

    /***/
    function gtie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _highlight_highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./highlight/highlight-pipe/highlight-pipe.example.component */
      "yc7x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightPipeExampleComponent", function () {
        return _highlight_highlight_pipe_highlight_pipe_example_component__WEBPACK_IMPORTED_MODULE_0__["HighlightPipeExampleComponent"];
      });
      /* harmony import */


      var _highlight_highlight_pipe_docs_highlight_pipe_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./highlight/highlight-pipe-docs/highlight-pipe-docs.example.component */
      "STls");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HighlightPipeDocsExampleComponent", function () {
        return _highlight_highlight_pipe_docs_highlight_pipe_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["HighlightPipeDocsExampleComponent"];
      });
      /***/

    },

    /***/
    "i/3M":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/pipes sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************/

    /*! no static exports found */

    /***/
    function i3M(module, exports, __webpack_require__) {
      var map = {
        "./highlight/highlight-pipe-docs/highlight-pipe-docs.example.component.html": "/m90",
        "./highlight/highlight-pipe-docs/highlight-pipe-docs.example.component.ts": "i9Ed",
        "./highlight/highlight-pipe/highlight-pipe.example.component.html": "dniG",
        "./highlight/highlight-pipe/highlight-pipe.example.component.ts": "VP4k",
        "./index.ts": "i4x5",
        "./pipes.module.ts": "5xI0"
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
      webpackContext.id = "i/3M";
      /***/
    },

    /***/
    "i4x5":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/index.ts ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function i4x5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./highlight/highlight-pipe/highlight-pipe.example.component\";\nexport * from \"./highlight/highlight-pipe-docs/highlight-pipe-docs.example.component\";\n";
      /***/
    },

    /***/
    "i9Ed":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/highlight/highlight-pipe-docs/highlight-pipe-docs.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i9Ed(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-pipes-docs-example\",\n    templateUrl: \"./highlight-pipe-docs.example.component.html\",\n})\n\nexport class HighlightPipeDocsExampleComponent {}\n";
      /***/
    },

    /***/
    "ieFS":
    /*!********************************************************!*\
      !*** ./demo/src/components/demo/pipes/pipes.module.ts ***!
      \********************************************************/

    /*! exports provided: PipesModule */

    /***/
    function ieFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index */
      "gtie");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeDocsExampleComponent"]
      }, {
        path: "highlight-pipe",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeDocsExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          },
          showThemeSwitcher: true
        }
      }];

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: PipesModule
      });
      PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function PipesModule_Factory(t) {
          return new (t || PipesModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("i/3M");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PipesModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["HighlightPipeDocsExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
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
        decls: 7,
        vars: 9,
        consts: [[3, "innerHTML"], [3, "value", "inputChange"]],
        template: function HighlightPipeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Highlight some part of the text:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nuiHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nDynamic highlight(for example, using with search):\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-search", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function HighlightPipeExampleComponent_Template_nui_search_inputChange_4_listener($event) {
              return ctx.changeSearchValue($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "nuiHighlight");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 3, "hello world", "world"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.term);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 6, ctx.searchString, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
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
//# sourceMappingURL=demo-pipes-pipes-module-es5.js.map