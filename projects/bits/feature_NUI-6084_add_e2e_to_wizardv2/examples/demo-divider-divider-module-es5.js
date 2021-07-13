(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-divider-divider-module"], {
    /***/
    "+mah":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/vertical-dividers/vertical-dividers.example.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-vertical-dividers-example\",\n    templateUrl: \"./vertical-dividers.example.component.html\",\n})\nexport class VerticalDividersExampleComponent {}\n";
      /***/
    },

    /***/
    "1j3u":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/divider-docs/divider-docs.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-divider-docs-example\",\n    templateUrl: \"./divider-docs.example.component.html\",\n})\nexport class DividerExampleComponent {}\n";
      /***/
    },

    /***/
    "7NlH":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/index.ts ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function NlH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./divider-docs/divider-docs.example.component\";\nexport * from \"./horizontal-dividers/horizontal-dividers.example.component\";\nexport * from \"./vertical-dividers/vertical-dividers.example.component\";\n";
      /***/
    },

    /***/
    "K2py":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/divider.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K2py(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDividerModule, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport { DividerExampleComponent, HorizontalDividersExampleComponent, VerticalDividersExampleComponent } from \"./index\";\n\nconst routes = [{\n    path: \"\",\n    component: DividerExampleComponent,\n    data: {\n        \"srlc\": {\n            \"stage\": SrlcStage.alpha,\n        },\n    },\n}];\n\n@NgModule({\n    imports: [\n        NuiDividerModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        DividerExampleComponent,\n        HorizontalDividersExampleComponent,\n        VerticalDividersExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class DividerModule {\n}\n";
      /***/
    },

    /***/
    "Mh5S":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/divider/horizontal-dividers/horizontal-dividers.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: HorizontalDividersExampleComponent */

    /***/
    function Mh5S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalDividersExampleComponent", function () {
        return HorizontalDividersExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/divider/divider.component */
      "UGtJ");

      var HorizontalDividersExampleComponent = function HorizontalDividersExampleComponent() {
        _classCallCheck(this, HorizontalDividersExampleComponent);
      };

      HorizontalDividersExampleComponent.ɵfac = function HorizontalDividersExampleComponent_Factory(t) {
        return new (t || HorizontalDividersExampleComponent)();
      };

      HorizontalDividersExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HorizontalDividersExampleComponent,
        selectors: [["nui-horizontal-dividers-example"]],
        decls: 23,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" No margins ");
            i18n_0 = MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241Fd939fe182435ab9c6647f2829e442682076073d1\u241F7432016746913190221: No margins "])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" No margins ");
            i18n_2 = MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fd939fe182435ab9c6647f2829e442682076073d1\u241F7432016746913190221: No margins "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4972934301183002404$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Extra-small size ");
            i18n_4 = MSG_EXTERNAL_4972934301183002404$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F692d7414c30e82943e5fcee890d7270fac3f9cd6\u241F4972934301183002404: Extra-small size "])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4972934301183002404$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" Extra-small size ");
            i18n_6 = MSG_EXTERNAL_4972934301183002404$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F692d7414c30e82943e5fcee890d7270fac3f9cd6\u241F4972934301183002404: Extra-small size "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_9 = goog.getMsg(" Small size ");
            i18n_8 = MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F1d17ccc4d90a7e1ab5f164ba4c2783c2b7ec5941\u241F989000836284043576: Small size "])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_11 = goog.getMsg(" Small size ");
            i18n_10 = MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F1d17ccc4d90a7e1ab5f164ba4c2783c2b7ec5941\u241F989000836284043576: Small size "])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_13 = goog.getMsg(" Medium size ");
            i18n_12 = MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241Fecc9fe076973d98c08e42c0e81191981255059a6\u241F6120974117031617313: Medium size "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_15 = goog.getMsg(" Medium size ");
            i18n_14 = MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_HORIZONTAL_DIVIDERS_HORIZONTAL_DIVIDERS_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241Fecc9fe076973d98c08e42c0e81191981255059a6\u241F6120974117031617313: Medium size "])));
          }

          return [i18n_0, ["id", "nui-demo-no-margin-horizontal", "size", "no-margin"], i18n_2, i18n_4, ["id", "nui-demo-extra-small-horizontal", "size", "extra-small"], i18n_6, i18n_8, ["id", "nui-demo-small-horizontal", "size", "small"], i18n_10, i18n_12, ["id", "nui-demo-medium-horizontal", "size", "medium"], i18n_14];
        },
        template: function HorizontalDividersExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-divider", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-divider", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-divider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nui-divider", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](22, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_1__["DividerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "QSx/":
    /*!***************************************************************************************************!*\
      !*** ./demo/src/components/demo/divider/vertical-dividers/vertical-dividers.example.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: VerticalDividersExampleComponent */

    /***/
    function QSx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalDividersExampleComponent", function () {
        return VerticalDividersExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/divider/divider.component */
      "UGtJ");

      var VerticalDividersExampleComponent = function VerticalDividersExampleComponent() {
        _classCallCheck(this, VerticalDividersExampleComponent);
      };

      VerticalDividersExampleComponent.ɵfac = function VerticalDividersExampleComponent_Factory(t) {
        return new (t || VerticalDividersExampleComponent)();
      };

      VerticalDividersExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerticalDividersExampleComponent,
        selectors: [["nui-vertical-dividers-example"]],
        decls: 27,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" No margins ");
            i18n_0 = MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241Fd939fe182435ab9c6647f2829e442682076073d1\u241F7432016746913190221: No margins "])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" No margins ");
            i18n_2 = MSG_EXTERNAL_7432016746913190221$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241Fd939fe182435ab9c6647f2829e442682076073d1\u241F7432016746913190221: No margins "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_487551556226017696$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Extra small size ");
            i18n_4 = MSG_EXTERNAL_487551556226017696$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241Fb1bc5549c42d146fbc7fad7eb7cc0905636fbc88\u241F487551556226017696: Extra small size "])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_487551556226017696$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" Extra small size ");
            i18n_6 = MSG_EXTERNAL_487551556226017696$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241Fb1bc5549c42d146fbc7fad7eb7cc0905636fbc88\u241F487551556226017696: Extra small size "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_9 = goog.getMsg(" Small size ");
            i18n_8 = MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F1d17ccc4d90a7e1ab5f164ba4c2783c2b7ec5941\u241F989000836284043576: Small size "])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_11 = goog.getMsg(" Small size ");
            i18n_10 = MSG_EXTERNAL_989000836284043576$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F1d17ccc4d90a7e1ab5f164ba4c2783c2b7ec5941\u241F989000836284043576: Small size "])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_13 = goog.getMsg(" Medium size ");
            i18n_12 = MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241Fecc9fe076973d98c08e42c0e81191981255059a6\u241F6120974117031617313: Medium size "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_15 = goog.getMsg(" Medium size ");
            i18n_14 = MSG_EXTERNAL_6120974117031617313$$DEMO_SRC_COMPONENTS_DEMO_DIVIDER_VERTICAL_DIVIDERS_VERTICAL_DIVIDERS_EXAMPLE_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fecc9fe076973d98c08e42c0e81191981255059a6\u241F6120974117031617313: Medium size "])));
          }

          return [[1, "d-flex", 2, "height", "50px"], [1, "align-self-center"], i18n_0, ["id", "nui-demo-no-margin-vertical", "size", "no-margin", 3, "isVertical"], i18n_2, i18n_4, ["id", "nui-demo-extra-small-vertical", "size", "extra-small", 3, "isVertical"], i18n_6, i18n_8, ["id", "nui-demo-small-vertical", "size", "small", 3, "isVertical"], i18n_10, i18n_12, ["id", "nui-demo-medium-vertical", "size", "medium", 3, "isVertical"], i18n_14];
        },
        template: function VerticalDividersExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-divider", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-divider", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-divider", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](23, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-divider", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](26, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isVertical", true);
          }
        },
        directives: [_src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_1__["DividerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "T7av":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/divider sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**********************************************************************************************************/

    /*! no static exports found */

    /***/
    function T7av(module, exports, __webpack_require__) {
      var map = {
        "./divider-docs/divider-docs.example.component.html": "XJh3",
        "./divider-docs/divider-docs.example.component.ts": "1j3u",
        "./divider.module.ts": "K2py",
        "./horizontal-dividers/horizontal-dividers.example.component.html": "uHA6",
        "./horizontal-dividers/horizontal-dividers.example.component.ts": "mtTy",
        "./index.ts": "7NlH",
        "./vertical-dividers/vertical-dividers.example.component.html": "sN8t",
        "./vertical-dividers/vertical-dividers.example.component.ts": "+mah"
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
      webpackContext.id = "T7av";
      /***/
    },

    /***/
    "T86i":
    /*!***************************************************!*\
      !*** ./demo/src/components/demo/divider/index.ts ***!
      \***************************************************/

    /*! exports provided: DividerExampleComponent, HorizontalDividersExampleComponent, VerticalDividersExampleComponent */

    /***/
    function T86i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _divider_docs_divider_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./divider-docs/divider-docs.example.component */
      "U4cw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DividerExampleComponent", function () {
        return _divider_docs_divider_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["DividerExampleComponent"];
      });
      /* harmony import */


      var _horizontal_dividers_horizontal_dividers_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horizontal-dividers/horizontal-dividers.example.component */
      "Mh5S");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HorizontalDividersExampleComponent", function () {
        return _horizontal_dividers_horizontal_dividers_example_component__WEBPACK_IMPORTED_MODULE_1__["HorizontalDividersExampleComponent"];
      });
      /* harmony import */


      var _vertical_dividers_vertical_dividers_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vertical-dividers/vertical-dividers.example.component */
      "QSx/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VerticalDividersExampleComponent", function () {
        return _vertical_dividers_vertical_dividers_example_component__WEBPACK_IMPORTED_MODULE_2__["VerticalDividersExampleComponent"];
      });
      /***/

    },

    /***/
    "U4cw":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/divider/divider-docs/divider-docs.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: DividerExampleComponent */

    /***/
    function U4cw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerExampleComponent", function () {
        return DividerExampleComponent;
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


      var _horizontal_dividers_horizontal_dividers_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../horizontal-dividers/horizontal-dividers.example.component */
      "Mh5S");
      /* harmony import */


      var _vertical_dividers_vertical_dividers_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../vertical-dividers/vertical-dividers.example.component */
      "QSx/");

      var DividerExampleComponent = function DividerExampleComponent() {
        _classCallCheck(this, DividerExampleComponent);
      };

      DividerExampleComponent.ɵfac = function DividerExampleComponent_Factory(t) {
        return new (t || DividerExampleComponent)();
      };

      DividerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DividerExampleComponent,
        selectors: [["nui-divider-docs-example"]],
        decls: 54,
        vars: 0,
        consts: [["filenamePrefix", "horizontal-dividers", "exampleTitle", "Horizontal Divider sizes"], ["filenamePrefix", "vertical-dividers", "exampleTitle", "Vertical Divider sizes"]],
        template: function DividerExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nui-divider can be used as a horizontal or vertical line divider with customizable margins.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Horizontal Dividers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " binding corresponds to divider's margins. There are 4 sizes for divider:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "no-margin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " - margin-top and margin-bottom equals 0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "extra-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " - margin-top and margin-bottom equals 5px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " - margin-top and margin-bottom equals 10px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " - margin-top and margin-bottom equals 15px. This is the default.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Default margin for horizontal divider is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "medium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nui-horizontal-dividers-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vertical Dividers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Vertical divider could be added by using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "[isVertical]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " binding on divider.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "As well as horizontal dividers, vertical has the same sizes so it affects left and right margins respectively.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Default margin for vertical divider is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "extra-small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "NOTE:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " divider should be placed into flex container (only applies to vertical dividers).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nui-vertical-dividers-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _horizontal_dividers_horizontal_dividers_example_component__WEBPACK_IMPORTED_MODULE_2__["HorizontalDividersExampleComponent"], _vertical_dividers_vertical_dividers_example_component__WEBPACK_IMPORTED_MODULE_3__["VerticalDividersExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "XJh3":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/divider-docs/divider-docs.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XJh3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Basics</h2>\n\n<p>Nui-divider can be used as a horizontal or vertical line divider with customizable margins.</p>\n\n<h2>Horizontal Dividers</h2>\n\n<p><code>size</code> binding corresponds to divider's margins. There are 4 sizes for divider:</p>\n<ul>\n    <li><code>no-margin</code> - margin-top and margin-bottom equals 0</li>\n    <li><code>extra-small</code> - margin-top and margin-bottom equals 5px</li>\n    <li><code>small</code> - margin-top and margin-bottom equals 10px</li>\n    <li><code>medium</code> - margin-top and margin-bottom equals 15px. This is the default.</li>\n</ul>\n<p>Default margin for horizontal divider is <code>medium</code>.</p>\n\n<nui-example-wrapper filenamePrefix=\"horizontal-dividers\" exampleTitle=\"Horizontal Divider sizes\">\n    <nui-horizontal-dividers-example></nui-horizontal-dividers-example>\n</nui-example-wrapper>\n\n<h2>Vertical Dividers</h2>\n\n<p>Vertical divider could be added by using <code>[isVertical]=\"true\"</code> binding on divider.</p>\n<p>As well as horizontal dividers, vertical has the same sizes so it affects left and right margins respectively.</p>\n<p>Default margin for vertical divider is <code>extra-small</code>.</p>\n\n<p><b>NOTE:</b> divider should be placed into flex container (only applies to vertical dividers).</p>\n\n<nui-example-wrapper filenamePrefix=\"vertical-dividers\" exampleTitle=\"Vertical Divider sizes\">\n    <nui-vertical-dividers-example></nui-vertical-dividers-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "mtTy":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/horizontal-dividers/horizontal-dividers.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mtTy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-horizontal-dividers-example\",\n    templateUrl: \"./horizontal-dividers.example.component.html\",\n})\nexport class HorizontalDividersExampleComponent {}\n";
      /***/
    },

    /***/
    "rFmi":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/divider/divider.module.ts ***!
      \************************************************************/

    /*! exports provided: DividerModule */

    /***/
    function rFmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerModule", function () {
        return DividerModule;
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
      "T86i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["DividerExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].alpha
          }
        }
      }];

      var DividerModule = function DividerModule() {
        _classCallCheck(this, DividerModule);
      };

      DividerModule.ɵfac = function DividerModule_Factory(t) {
        return new (t || DividerModule)();
      };

      DividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: DividerModule
      });
      DividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("T7av");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DividerModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["DividerExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["HorizontalDividersExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["VerticalDividersExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "sN8t":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/vertical-dividers/vertical-dividers.example.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sN8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\" style=\"height: 50px;\">\n    <div class=\"align-self-center\" i18n> No margins </div>\n    <nui-divider id=\"nui-demo-no-margin-vertical\" [isVertical]=\"true\" size=\"no-margin\"></nui-divider>\n    <div class=\"align-self-center\" i18n> No margins </div>\n</div>\n<br>\n<div class=\"d-flex\" style=\"height: 50px;\">\n    <div class=\"align-self-center\" i18n> Extra small size </div>\n    <nui-divider id=\"nui-demo-extra-small-vertical\" [isVertical]=\"true\" size=\"extra-small\"></nui-divider>\n    <div class=\"align-self-center\" i18n> Extra small size </div>\n</div>\n<br>\n<div class=\"d-flex\" style=\"height: 50px;\">\n    <div class=\"align-self-center\" i18n> Small size </div>\n    <nui-divider id=\"nui-demo-small-vertical\" [isVertical]=\"true\" size=\"small\"></nui-divider>\n    <div class=\"align-self-center\" i18n> Small size </div>\n</div>\n<br>\n<div class=\"d-flex\" style=\"height: 50px;\">\n    <div class=\"align-self-center\" i18n> Medium size </div>\n    <nui-divider id=\"nui-demo-medium-vertical\" [isVertical]=\"true\" size=\"medium\"></nui-divider>\n    <div class=\"align-self-center\" i18n> Medium size </div>\n</div>\n";
      /***/
    },

    /***/
    "uHA6":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/divider/horizontal-dividers/horizontal-dividers.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uHA6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div i18n> No margins </div>\n<nui-divider id=\"nui-demo-no-margin-horizontal\" size=\"no-margin\"></nui-divider>\n<div i18n> No margins </div>\n<br>\n<div i18n> Extra-small size </div>\n<nui-divider id=\"nui-demo-extra-small-horizontal\" size=\"extra-small\"></nui-divider>\n<div i18n> Extra-small size </div>\n<br>\n<div i18n> Small size </div>\n<nui-divider id=\"nui-demo-small-horizontal\" size=\"small\"></nui-divider>\n<div i18n> Small size </div>\n<br>\n<div i18n> Medium size </div>\n<nui-divider id=\"nui-demo-medium-horizontal\" size=\"medium\"></nui-divider>\n<div i18n> Medium size </div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-divider-divider-module-es5.js.map