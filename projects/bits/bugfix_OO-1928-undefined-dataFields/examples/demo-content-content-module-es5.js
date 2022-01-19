(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-content-content-module"], {
    /***/
    "KYrg":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/content/content.module.ts ***!
      \************************************************************/

    /*! exports provided: ContentModule */

    /***/
    function KYrg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentModule", function () {
        return ContentModule;
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


      var _content_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./content.example.component */
      "oMLM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _content_example_component__WEBPACK_IMPORTED_MODULE_2__["ContentExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].alpha
          }
        }
      }];

      var ContentModule = function ContentModule() {
        _classCallCheck(this, ContentModule);
      };

      ContentModule.ɵfac = function ContentModule_Factory(t) {
        return new (t || ContentModule)();
      };

      ContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ContentModule
      });
      ContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("kKHq");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiContentModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContentModule, {
          declarations: [_content_example_component__WEBPACK_IMPORTED_MODULE_2__["ContentExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiContentModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ScgF":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/content/content.example.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ScgF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>Small Size</h3>\n<nui-content id=\"test-element-small\" size=\"small\">\n    <div>\n        <button nui-button type=\"button\" id=\"test-element\" (click)=\"changeButtonText($event)\">Click</button>\n        {{dynamicContent}}\n    </div>\n</nui-content>\n<h3>Default Size</h3>\n<nui-content id=\"test-element-normal\">{{dynamicContent}}</nui-content>\n<h3>Large Size</h3>\n<nui-content id=\"test-element-large\" size=\"large\">{{dynamicContent}}</nui-content>\n";
      /***/
    },

    /***/
    "ULGE":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/content/content.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ULGE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./content.example.component.html\",\n})\nexport class ContentExampleComponent {\n    public dynamicContent = `\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at viverra orci.\n        Sed elementum lacus eget finibus varius. Fusce rhoncus libero augue.\n        Cras cursus purus convallis ex laoreet, a pulvinar neque mollis.\n        Maecenas fermentum, turpis non aliquam suscipit, sapien ligula feugiat lorem, a suscipit nulla\n        Sed mollis iaculis varius. Suspendisse auctor finibus diam, eget laoreet tellus fermentum nec.\n        Fusce iaculis varius lorem at lacinia. Curabitur et cursus eros, at congue lorem.\n        Aenean urna ipsum, sollicitudin sed ultrices nec, malesuada eu lacus.\n        Sed orci mauris, scelerisque vitae consectetur sit amet, venenatis a mauris.\n        Donc consectetur libero eget bibendum consequat. Donec tincidunt molestie viverra.\n        Nunc vel congue orci.Nullam suscipit dui sit amet justo consectetur hendrerit.\n        Nullam condimentum accumsan commodo. Donec vehicula lorem dui, ac consectetur dolor mollis at.\n        Vivamus et magna nec nulla maximus imperdiet et non quam. Quisque iaculis faucibus mi, et\n        Praesent sit amet lacus vel nulla suscipit eleifend. Pellentesque habitant morbi tristique.\n        Proin odio erat, mattis in ultrices sit amet, pharetra accumsan purus.\n        In sit amet dui sed sem cursus varius. Fusce sed tortor rutrum, sagittis nulla ut, maximus urna.\n        Integer pharetra nisi odio.Nulla mollis molestie mi a tincidunt. Donec egestas nibh id feugiat.\n        Integer imperdiet eu justo suscipit eleifend. Praesent egestas mi ac magna congue, ut consectetur\n        Morbi placerat nisi dolor, eu accumsan justo elementum ut. Suspendisse semper laoreet magna quis.\n        Nullam convallis egestas auctor. Nulla elementum enim convallis, egestas justo in, pulvinar.\n        Morbi nec feugiat mauris. In hac habitasse platea dictumst. Phasellus laoreet hendrerit mauris.\n        Cras vitae luctus magna, a sagittis magna. Aliquam sagittis sodales nibh vel posuere.\n        Maecenas pellentesque tristique aliquet.Sed ultrices erat arcu, molestie faucibus lectus et.\n        Aenean porta risus at libero venenatis vestibulum. Nullam laoreet nisl nec elit laoreet sodales.\n        Curabitur vehicula laoreet sapien a condimentum. Proin pharetra augue vel hendrerit mattis.\n        Aenean eu dolor sed erat molestie finibus quis vel ex. Praesent auctor consequat ultricies.\n        Morbi dolor eros, finibus et felis a, semper bibendum orci. Pellentesque accumsan ante finibus.\n        Suspendisse ac mi eu est eleifend iaculis. Aliquam purus diam, viverra scelerisque lectus ut.\n        Sed rhoncus et dui vitae rhoncus. Aliquam volutpat eu turpis at consectetur.Cum sociis natoque\n        Ut vitae ultricies diam. Fusce ultrices faucibus neque ut malesuada. Morbi malesuada facilisis.\n        Sed ultricies eu diam quis imperdiet. Maecenas tincidunt luctus nisl condimentum mollis.\n    `;\n\n    changeButtonText(event: any) {\n        event.target.textContent = \"Clicked!\";\n    }\n}\n";
      /***/
    },

    /***/
    "XNLf":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/content/content.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XNLf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiContentModule, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport { ContentExampleComponent } from \"./content.example.component\";\n\n\nconst routes = [{\n    path: \"\",\n    component: ContentExampleComponent,\n    data: {\n        \"srlc\": {\n            \"stage\": SrlcStage.alpha,\n        },\n    },\n}];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiContentModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ContentExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ContentModule {\n}\n";
      /***/
    },

    /***/
    "kKHq":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/content sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**********************************************************************************************************/

    /*! no static exports found */

    /***/
    function kKHq(module, exports, __webpack_require__) {
      var map = {
        "./content.example.component.html": "ScgF",
        "./content.example.component.ts": "ULGE",
        "./content.module.ts": "XNLf"
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
      webpackContext.id = "kKHq";
      /***/
    },

    /***/
    "oMLM":
    /*!***********************************************************************!*\
      !*** ./demo/src/components/demo/content/content.example.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ContentExampleComponent */

    /***/
    function oMLM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentExampleComponent", function () {
        return ContentExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../src/lib/content/content.component */
      "O5AL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../src/lib/button/button.component */
      "6urz");

      var ContentExampleComponent = /*#__PURE__*/function () {
        function ContentExampleComponent() {
          _classCallCheck(this, ContentExampleComponent);

          this.dynamicContent = "\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at viverra orci.\n        Sed elementum lacus eget finibus varius. Fusce rhoncus libero augue.\n        Cras cursus purus convallis ex laoreet, a pulvinar neque mollis.\n        Maecenas fermentum, turpis non aliquam suscipit, sapien ligula feugiat lorem, a suscipit nulla\n        Sed mollis iaculis varius. Suspendisse auctor finibus diam, eget laoreet tellus fermentum nec.\n        Fusce iaculis varius lorem at lacinia. Curabitur et cursus eros, at congue lorem.\n        Aenean urna ipsum, sollicitudin sed ultrices nec, malesuada eu lacus.\n        Sed orci mauris, scelerisque vitae consectetur sit amet, venenatis a mauris.\n        Donc consectetur libero eget bibendum consequat. Donec tincidunt molestie viverra.\n        Nunc vel congue orci.Nullam suscipit dui sit amet justo consectetur hendrerit.\n        Nullam condimentum accumsan commodo. Donec vehicula lorem dui, ac consectetur dolor mollis at.\n        Vivamus et magna nec nulla maximus imperdiet et non quam. Quisque iaculis faucibus mi, et\n        Praesent sit amet lacus vel nulla suscipit eleifend. Pellentesque habitant morbi tristique.\n        Proin odio erat, mattis in ultrices sit amet, pharetra accumsan purus.\n        In sit amet dui sed sem cursus varius. Fusce sed tortor rutrum, sagittis nulla ut, maximus urna.\n        Integer pharetra nisi odio.Nulla mollis molestie mi a tincidunt. Donec egestas nibh id feugiat.\n        Integer imperdiet eu justo suscipit eleifend. Praesent egestas mi ac magna congue, ut consectetur\n        Morbi placerat nisi dolor, eu accumsan justo elementum ut. Suspendisse semper laoreet magna quis.\n        Nullam convallis egestas auctor. Nulla elementum enim convallis, egestas justo in, pulvinar.\n        Morbi nec feugiat mauris. In hac habitasse platea dictumst. Phasellus laoreet hendrerit mauris.\n        Cras vitae luctus magna, a sagittis magna. Aliquam sagittis sodales nibh vel posuere.\n        Maecenas pellentesque tristique aliquet.Sed ultrices erat arcu, molestie faucibus lectus et.\n        Aenean porta risus at libero venenatis vestibulum. Nullam laoreet nisl nec elit laoreet sodales.\n        Curabitur vehicula laoreet sapien a condimentum. Proin pharetra augue vel hendrerit mattis.\n        Aenean eu dolor sed erat molestie finibus quis vel ex. Praesent auctor consequat ultricies.\n        Morbi dolor eros, finibus et felis a, semper bibendum orci. Pellentesque accumsan ante finibus.\n        Suspendisse ac mi eu est eleifend iaculis. Aliquam purus diam, viverra scelerisque lectus ut.\n        Sed rhoncus et dui vitae rhoncus. Aliquam volutpat eu turpis at consectetur.Cum sociis natoque\n        Ut vitae ultricies diam. Fusce ultrices faucibus neque ut malesuada. Morbi malesuada facilisis.\n        Sed ultricies eu diam quis imperdiet. Maecenas tincidunt luctus nisl condimentum mollis.\n    ";
        }

        _createClass(ContentExampleComponent, [{
          key: "changeButtonText",
          value: function changeButtonText(event) {
            event.target.textContent = "Clicked!";
          }
        }]);

        return ContentExampleComponent;
      }();

      ContentExampleComponent.ɵfac = function ContentExampleComponent_Factory(t) {
        return new (t || ContentExampleComponent)();
      };

      ContentExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentExampleComponent,
        selectors: [["ng-component"]],
        decls: 15,
        vars: 3,
        consts: [["id", "test-element-small", "size", "small"], ["nui-button", "", "type", "button", "id", "test-element", 3, "click"], ["id", "test-element-normal"], ["id", "test-element-large", "size", "large"]],
        template: function ContentExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Small Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentExampleComponent_Template_button_click_4_listener($event) {
              return ctx.changeButtonText($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Default Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Large Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dynamicContent, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dynamicContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dynamicContent);
          }
        },
        directives: [_src_lib_content_content_component__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-content-content-module-es5.js.map