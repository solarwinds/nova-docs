(function () {
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


      __webpack_exports__["default"] = "<p>\n    The <code><a href=\"../pipes/HighlightPipe.html#info\" target=\"_parent\">nuiHighlight</a></code> pipe is used to mark a portion of text. It will search the\n    provided text for the specified string and highlight it.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiCommonModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    This pipe can only be used with the <code>innerHTML</code> attribute. It escapes all the characters by default, and highlights every match in the string.\n</p>\n<nui-example-wrapper filenamePrefix=\"highlight-pipe\" exampleTitle=\"Basic Usage\">\n    <nui-demo-highlight-pipe></nui-demo-highlight-pipe>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "3uq/":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.ts ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"unit-conversion-pipe-basic-example\",\n    templateUrl: \"./unit-conversion-pipe-basic.example.component.html\",\n    styleUrls: [\"./unit-conversion-pipe-basic.example.component.less\"],\n})\nexport class UnitConversionPipeBasicExampleComponent {\n    public num = 998990;\n}\n";
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


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule } from \"@nova-ui/bits\";\n\nconst routes = [\n    {\n        path: \"highlight\",\n        loadChildren: () => import(\"./highlight/highlight-pipe-example.module\").then(m => m.HighlightPipeExampleModule),\n    },\n    {\n        path: \"unit-conversion\",\n        loadChildren: () => import(\"./unit-conversion/unit-conversion-pipe-example.module\").then(m => m.UnitConversionPipeExampleModule),\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class PipesModule {\n}\n";
      /***/
    },

    /***/
    "6F/a":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/docs/unit-conversion-pipe-docs.component.less ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ul {\n    padding-left: 40px;\n\n    li {\n        list-style: disc;\n    }\n}\n";
      /***/
    },

    /***/
    "BWQn":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/unit-conversion-pipe-example.module.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BWQn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiCommonModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule,\n    NuiTextboxModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { UnitConversionPipeDocsComponent } from \"./docs/unit-conversion-pipe-docs.component\";\nimport { UnitConversionPipeBasicExampleComponent } from \"./unit-conversion-basic/unit-conversion-pipe-basic.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: UnitConversionPipeDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: UnitConversionPipeBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                hideIndicator: true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        UnitConversionPipeDocsComponent,\n        UnitConversionPipeBasicExampleComponent,\n    ],\n    imports: [\n        FormsModule,\n        NuiCommonModule,\n        NuiDocsModule,\n        NuiFormFieldModule,\n        NuiMessageModule,\n        NuiTextboxModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class UnitConversionPipeExampleModule { }\n";
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
    "Yw5f":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yw5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"conversion d-flex flex-column align-items-end\">\n    {{ num | unitConversion : 2 : false : \"bitsPerSecond\" }}\n</div>\n<hr>\n<nui-form-field class=\"d-block mt-5\"\n                caption=\"Bits Per Second\"\n                [showOptionalText]=\"false\">\n    <nui-textbox-number type=\"number\"\n                        [(ngModel)]=\"num\"\n                        [minValue]=\"0\"\n                        [step]=\"10\"\n                        customBoxWidth=\"200px\"></nui-textbox-number>\n</nui-form-field>\n";
      /***/
    },

    /***/
    "dMpX":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/highlight/highlight-pipe-example.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dMpX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiCommonModule,\n    NuiDocsModule,\n    NuiSearchModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { HighlightPipeDocsExampleComponent } from \"./highlight-pipe-docs/highlight-pipe-docs.example.component\";\nimport { HighlightPipeExampleComponent } from \"./highlight-pipe/highlight-pipe.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: HighlightPipeDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"highlight-pipe\",\n        component: HighlightPipeExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        HighlightPipeDocsExampleComponent,\n        HighlightPipeExampleComponent,\n    ],\n    imports: [\n        NuiCommonModule,\n        NuiDocsModule,\n        NuiSearchModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class HighlightPipeExampleModule { }\n";
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


      __webpack_exports__["default"] = "<h3>Highlighting a portion of text:</h3>\n<p [innerHTML]='\"hello world\" | nuiHighlight:\"world\"' ></p>\n\n<h3>Dynamic highlighting (for example, with search):</h3>\n<nui-search (inputChange)=\"changeSearchValue($event)\" [value]=\"term\"></nui-search>\n<p [innerHTML]='searchString | nuiHighlight: term '></p>\n";
      /***/
    },

    /***/
    "eD/Y":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.less ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eDY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".conversion {\n    font-size: 25px;\n    width: 150px;\n}\n";
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
        "./highlight/highlight-pipe-example.module.ts": "dMpX",
        "./highlight/highlight-pipe/highlight-pipe.example.component.html": "dniG",
        "./highlight/highlight-pipe/highlight-pipe.example.component.ts": "VP4k",
        "./pipes.module.ts": "5xI0",
        "./unit-conversion/docs/unit-conversion-pipe-docs.component.html": "jxIk",
        "./unit-conversion/docs/unit-conversion-pipe-docs.component.less": "6F/a",
        "./unit-conversion/docs/unit-conversion-pipe-docs.component.ts": "wD7G",
        "./unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.html": "Yw5f",
        "./unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.less": "eD/Y",
        "./unit-conversion/unit-conversion-basic/unit-conversion-pipe-basic.example.component.ts": "3uq/",
        "./unit-conversion/unit-conversion-pipe-example.module.ts": "BWQn"
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "highlight",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | highlight-highlight-pipe-example-module */
          "highlight-highlight-pipe-example-module").then(__webpack_require__.bind(null,
          /*! ./highlight/highlight-pipe-example.module */
          "soum")).then(function (m) {
            return m.HighlightPipeExampleModule;
          });
        }
      }, {
        path: "unit-conversion",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | unit-conversion-unit-conversion-pipe-example-module */
          "unit-conversion-unit-conversion-pipe-example-module").then(__webpack_require__.bind(null,
          /*! ./unit-conversion/unit-conversion-pipe-example.module */
          "dlWr")).then(function (m) {
            return m.UnitConversionPipeExampleModule;
          });
        }
      }];

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PipesModule
      });
      PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function PipesModule_Factory(t) {
          return new (t || PipesModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("i/3M");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PipesModule, {
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "jxIk":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/docs/unit-conversion-pipe-docs.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jxIk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    The <code><a href=\"../pipes/UnitConversionPipe.html#info\" target=\"_parent\">unitConversion</a></code> pipe can be used to convert a large value of a small\n    basic unit to a smaller value of a larger unit--for example, converting a quantity of 1024 in bytes to \"1 KB\". The converted unit label is automatically\n    appended to the output. Supported units are of type <code><a href=\"../miscellaneous/typealiases.html#UnitOption\" target=\"_blank\">UnitOption</a></code> and\n    include the following: <code>\"generic\"</code> (e.g. 1K for 1000), <code>\"bytes\"</code>, <code>\"bytesPerSecond\"</code>, <code>\"bitsPerSecond\"</code>, and\n    <code>\"hertz\"</code>.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> The pipe will localize the output for all supported units except the \"generic\" unit. Localization for the \"generic\" unit is not\n    yet supported.\n</nui-message>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Under the hood, this pipe uses the <code><a href=\"../injectables/UnitConversionService.html\" target=\"_blank\">UnitConversionService</a></code>. If the pipe\n    doesn't offer something that you need, such as separating the value and unit out into separate outputs, or you need to convert a value outside the context\n    of a template, using the service directly may be a better option for you.\n</nui-message>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiCommonModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>To get started with using the pipe, take a look at the template source of the example below.</p>\n\n<h3>Parameters</h3>\n<p>The pipe accepts the following parameters:</p>\n<ul>\n    <li>\n        <strong>value</strong> - The value to be converted.\n    </li>\n    <li>\n        <strong>scale</strong> - The decimal scale of the formatted value for specifying how many significant digits to display to the right of the decimal.\n        Defaults to <code>0</code>.\n    </li>\n    <li>\n        <strong>plusSign</strong> - Boolean for specifying whether to prefix the output with a '+' when the source value is greater than zero. Defaults to false.\n    </li>\n    <li>\n        <strong>unit</strong> - The basic unit to use for the conversion. Accepts arguments of type\n        <code><a href=\"../miscellaneous/typealiases.html#UnitOption\" target=\"_blank\">UnitOption</a></code>. Defaults to <code>\"bytes\"</code>.\n    </li>\n</ul>\n\n<nui-example-wrapper filenamePrefix=\"unit-conversion-pipe-basic\" exampleTitle=\"Basic Usage\">\n    <unit-conversion-pipe-basic-example></unit-conversion-pipe-basic-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "wD7G":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/pipes/unit-conversion/docs/unit-conversion-pipe-docs.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wD7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./unit-conversion-pipe-docs.component.html\",\n    styleUrls: [\"./unit-conversion-pipe-docs.component.less\"],\n})\nexport class UnitConversionPipeDocsComponent { }\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-pipes-pipes-module-es5.js.map