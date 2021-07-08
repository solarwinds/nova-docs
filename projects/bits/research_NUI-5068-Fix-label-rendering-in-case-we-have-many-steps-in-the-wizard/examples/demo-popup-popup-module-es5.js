(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-popup-popup-module"], {
    /***/
    "/11A":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-append-to-body/popup-append-to-body.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewEncapsulation } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-popup-append-to-body-example\",\n    templateUrl: \"./popup-append-to-body.example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupAppendToBodyExampleComponent {\n\n    public icon = \"caret-down\";\n    public itemsSource: string[] = [\n        $localize `Item 1`,\n        $localize `Item 2`,\n        $localize `Item 3`,\n        $localize `Item 4`,\n    ];\n\n    constructor() {}\n\n}\n";
      /***/
    },

    /***/
    "/8cC":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-styling/popup-with-custom-styling.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popup  contextClass=\"nui-demo-custom-class\">\n    <button nui-button\n            nuiPopupToggle\n            width=\"90px\"\n            type=\"button\"\n            [icon]=\"icon\"\n            [iconRight]=\"true\"\n            class=\"menu-button\"\n            [isEmpty]=\"false\"\n            i18n>\n            Click\n    </button>\n    <div popupAreaContent>\n        <ng-container *ngFor=\"let item of itemsSource\">\n            <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n        </ng-container>\n    </div>\n</nui-popup>\n";
      /***/
    },

    /***/
    "0Grj":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-styling/popup-with-custom-styling.example.component.less ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Grj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "// The following styles are used for demonstration purposes only\n\n.popup-adapter-overlay {\n    .nui-demo-custom-class.nui-overlay {\n        background-color: yellowgreen !important;\n        font-family: 'Courier New', Courier, monospace;\n        font-weight: bold;\n        text-decoration: underline overline black dotted;\n        padding: 20px;\n    }\n\n}\n";
      /***/
    },

    /***/
    "13R7":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-width/popup-with-custom-width.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popup [width]=\"width\">\n    <button nui-button\n            nuiPopupToggle\n            type=\"button\"\n            [icon]=\"icon\"\n            [iconRight]=\"true\"\n            class=\"menu-button\"\n            [isEmpty]=\"false\"\n            i18n>\n        Click\n    </button>\n    <div popupAreaContent>\n        <ng-container *ngFor=\"let item of itemsSource\">\n            <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n        </ng-container>\n    </div>\n</nui-popup>\n";
      /***/
    },

    /***/
    "48Cw":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDocsModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    NuiPopupModule,\n    NuiSearchModule,\n    NuiTextboxModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    PopupAppendToBodyExampleComponent,\n    PopupDifferentDirectionsExampleComponent,\n    PopupExampleComponent,\n    PopupSimpleExampleComponent,\n    PopupTestComponent,\n    PopupWithCustomContentComponent,\n    PopupWithCustomStylingComponent,\n    PopupWithCustomWidthComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: PopupExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.support,\n                \"eolDate\": new Date(\"2020-07-09\"),\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"popup-test\",\n        component: PopupTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"basic\",\n        component: PopupSimpleExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiPopupModule,\n        NuiMessageModule,\n        NuiButtonModule,\n        ReactiveFormsModule,\n        FormsModule,\n        NuiCheckboxModule,\n        NuiSearchModule,\n        NuiDocsModule,\n        NuiMenuModule,\n        RouterModule.forChild(routes),\n        NuiTextboxModule,\n    ],\n    declarations: [\n        PopupSimpleExampleComponent,\n        PopupDifferentDirectionsExampleComponent,\n        PopupWithCustomStylingComponent,\n        PopupWithCustomWidthComponent,\n        PopupWithCustomContentComponent,\n        PopupTestComponent,\n        PopupAppendToBodyExampleComponent,\n        PopupExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class PopupModule {\n}\n";
      /***/
    },

    /***/
    "67RD":
    /*!********************************************************!*\
      !*** ./demo/src/components/demo/popup/popup.module.ts ***!
      \********************************************************/

    /*! exports provided: PopupModule */

    /***/
    function RD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupModule", function () {
        return PopupModule;
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
      "N1bI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["PopupExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].support,
            "eolDate": new Date("2020-07-09")
          },
          showThemeSwitcher: true
        }
      }, {
        path: "popup-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["PopupTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["PopupSimpleExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var PopupModule = function PopupModule() {
        _classCallCheck(this, PopupModule);
      };

      PopupModule.ɵfac = function PopupModule_Factory(t) {
        return new (t || PopupModule)();
      };

      PopupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: PopupModule
      });
      PopupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("MT7e");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiPopupModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PopupModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["PopupSimpleExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupDifferentDirectionsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupWithCustomStylingComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupWithCustomWidthComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupWithCustomContentComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupAppendToBodyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["PopupExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiPopupModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSearchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "8ur6":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-append-to-body/popup-append-to-body.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PopupAppendToBodyExampleComponent */

    /***/
    function ur6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupAppendToBodyExampleComponent", function () {
        return PopupAppendToBodyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */
      "fNSn");

      function PopupAppendToBodyExampleComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
        }
      }

      var PopupAppendToBodyExampleComponent = function PopupAppendToBodyExampleComponent() {
        _classCallCheck(this, PopupAppendToBodyExampleComponent);

        this.icon = "caret-down";
        this.itemsSource = [$localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Item 4"])))];
      };

      PopupAppendToBodyExampleComponent.ɵfac = function PopupAppendToBodyExampleComponent_Factory(t) {
        return new (t || PopupAppendToBodyExampleComponent)();
      };

      PopupAppendToBodyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupAppendToBodyExampleComponent,
        selectors: [["nui-popup-append-to-body-example"]],
        decls: 5,
        vars: 5,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3408041980846512444$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_APPEND_TO_BODY_POPUP_APPEND_TO_BODY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Click ");
            i18n_0 = MSG_EXTERNAL_3408041980846512444$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_APPEND_TO_BODY_POPUP_APPEND_TO_BODY_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F6a57ad6e558fdec72478a1931528dfff5a51d3d5\u241F3408041980846512444: Click "])));
          }

          return [[3, "appendToBody"], ["nui-button", "", "nuiPopupToggle", "", "type", "button", 1, "menu-button", 3, "icon", "iconRight", "isEmpty"], i18n_0, ["popupAreaContent", ""], [4, "ngFor", "ngForOf"], ["tabindex", "0"]];
        },
        template: function PopupAppendToBodyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popup", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupAppendToBodyExampleComponent_ng_container_4_Template, 3, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appendToBody", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["PopupToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "9Hqo":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-styling/popup-with-custom-styling.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewEncapsulation } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-popup-with-custom-styling-example\",\n    templateUrl: \"./popup-with-custom-styling.example.component.html\",\n    styleUrls: [\"popup-with-custom-styling.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupWithCustomStylingComponent {\n\n    public icon = \"caret-down\";\n    public itemsSource: string[] = [\n        $localize `Item 1`,\n        $localize `Item 2`,\n        $localize `Item 3`,\n        $localize `Item 4`,\n    ];\n\n    constructor() {}\n\n}\n";
      /***/
    },

    /***/
    "AK8X":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-docs/popup-docs.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK8X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popup-docs-example\",\n    templateUrl: \"./popup-docs.example.component.html\",\n})\nexport class PopupExampleComponent {}\n";
      /***/
    },

    /***/
    "CQIr":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-docs/popup-docs.example.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CQIr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-popup&gt;</code> is a base component for the most of dropdown-like Nova components, but this doesn't limit it's abilities.\n    It allows you to put any HTML templates into it's body to build more complex and exciting components.\n</p>\n<nui-message [allowDismiss]=\"false\" type=\"warning\">\n    <strong>Pay attention!</strong> The following examples demonstrate only basic scenarios. To get familiar with more complex use cases, you can refer to \n    the documentation for components built on top of the <code>nui-popup</code>, such as \n    <a href=\"../components/ComboboxComponent.html#example\" target=\"_blank\">nui-combobox</a>, \n    <a href=\"../components/MenuComponent.html#example\" target=\"_blank\">nui-menu</a>, \n    <a href=\"../components/SelectComponent.html#example\" target=\"_blank\">nui-select</a>, etc.,\n    and explore their internal structure in the codebase.\n</nui-message>\n<!-- ------------------------------------------------------------------------------------------- -->\n<h2>Basic Usage</h2>\n<p>\n    A simple popup can be added to the page by adding a <code>&lt;nui-popup&gt;</code> element.\n    It must wrap two types of elements: one that toggles the popup and one that defines the content.\n    To achieve this, the element responsible for toggling the popup must contain the <code>nuiPopupToggle</code> directive.\n    The area with the content must be wrapped up inside a <code>div</code> with the <code>popupAreaContent</code> directive \n    assigned to it.\n</p>\n<nui-example-wrapper filenamePrefix=\"popup-simple-usage\" exampleTitle=\"Basic Usage\">\n    <nui-popup-simple-usage-example></nui-popup-simple-usage-example>\n</nui-example-wrapper>\n\n<!-- ------------------------------------------------------------------------------------------- -->\n\n<h2>Custom Width</h2>\n<p>\n    One can change the width of the popup by setting the <code>width</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"popup-with-custom-width\" exampleTitle=\"Custom Width\">\n    <nui-popup-with-custom-width-example></nui-popup-with-custom-width-example>\n</nui-example-wrapper>\n\n<!-- ------------------------------------------------------------------------------------------- -->\n\n<h2>Appended to Body</h2>\n<p>\n    <code>nui-popup</code> can be appended to the body of the page if required. To achieve this, add the <code>appendToBody</code> \n    input to the component.\n</p>\n<nui-message [allowDismiss]=\"false\" type=\"warning\">\n    <strong>Please be aware</strong> that the positioning of the <code>nui-popup</code> component is treated differently when the <code>appendToBody</code> \n    input is used. There is a technical limitation that causes the <code>directionTop</code> and <code>directionRight</code> inputs not\n    to work when <code>appendToBody</code> is true. In this case, the positioning of the component is controlled exclusively by the \n    <code>edgeDetectionService</code>.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"popup-append-to-body\" exampleTitle=\"Appended to Body\">\n    <nui-popup-append-to-body-example></nui-popup-append-to-body-example>\n</nui-example-wrapper>\n\n<!-- ------------------------------------------------------------------------------------------- -->\n\n<h2>Custom Open Direction</h2>\n<p>\n    Even though <code>nui-popup</code> automatically detects the window edges and adjusts the open direction accordingly\n    thanks to the <code>edgeDetectionService</code>, it's possible to force the <code>nui-popup</code> to open in\n    a specific direction. Available inputs are: <code>directionRight</code> and <code>directionTop</code>, which receive boolean values.\n</p>\n<nui-example-wrapper filenamePrefix=\"popup-different-directions\" exampleTitle=\"Custom Open Direction\">\n    <nui-popup-different-directions-example></nui-popup-different-directions-example>\n</nui-example-wrapper>\n\n<!-- ------------------------------------------------------------------------------------------- -->\n\n<h2>Custom Classes</h2>\n<p>\n    It is also easy to apply custom classes to the popup. Use the <code>contextClass</code> input to pass the desired css class.\n</p>\n<nui-example-wrapper filenamePrefix=\"popup-with-custom-styling\" exampleTitle=\"Custom Styling\">\n    <nui-popup-with-custom-styling-example></nui-popup-with-custom-styling-example>\n</nui-example-wrapper>\n\n<!-- ------------------------------------------------------------------------------------------- -->\n\n<h2>Custom Content</h2>\n<p>\n    You can put pretty much anything you want inside the <code>nui-popup</code> component. You can use it to build more complex components, and \n    configure them to your liking.\n</p>\n<nui-example-wrapper filenamePrefix=\"popup-with-custom-content\" exampleTitle=\"Custom Content\">\n    <nui-popup-with-custom-content-example></nui-popup-with-custom-content-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "FFqk":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-simple-usage/popup-simple-usage.example.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FFqk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popup>\n    <button nui-button\n            nuiPopupToggle\n            type=\"button\"\n            [icon]=\"icon\"\n            [iconRight]=\"true\"\n            class=\"menu-button\"\n            [isEmpty]=\"false\"\n            i18n>\n        Click\n    </button>\n    <div popupAreaContent>\n        <ng-container *ngFor=\"let item of itemsSource\">\n            <nui-menu-item tabindex=\"0\" nuiTooltip=\"This icon is draggable\">{{item}}</nui-menu-item>\n        </ng-container>\n    </div>\n</nui-popup>\n";
      /***/
    },

    /***/
    "FOM3":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-content/popup-with-custom-content.example.component.less ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FOM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".nui-demo-popover-custom-form-styles {\n    padding: 20px;\n}\n\n.top-buffer {\n    margin-top: 5px;\n}\n\na[nuiPopupToggle] {\n    cursor: pointer;\n}";
      /***/
    },

    /***/
    "FdYI":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-docs/popup-docs.example.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: PopupExampleComponent */

    /***/
    function FdYI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupExampleComponent", function () {
        return PopupExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _popup_simple_usage_popup_simple_usage_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../popup-simple-usage/popup-simple-usage.example.component */
      "wKka");
      /* harmony import */


      var _popup_with_custom_width_popup_with_custom_width_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../popup-with-custom-width/popup-with-custom-width.example.component */
      "QVeh");
      /* harmony import */


      var _popup_append_to_body_popup_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../popup-append-to-body/popup-append-to-body.example.component */
      "8ur6");
      /* harmony import */


      var _popup_different_directions_popup_different_directions_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../popup-different-directions/popup-different-directions.example.component */
      "oPUI");
      /* harmony import */


      var _popup_with_custom_styling_popup_with_custom_styling_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../popup-with-custom-styling/popup-with-custom-styling.example.component */
      "poY8");
      /* harmony import */


      var _popup_with_custom_content_popup_with_custom_content_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../popup-with-custom-content/popup-with-custom-content.example.component */
      "Kl82");

      var PopupExampleComponent = function PopupExampleComponent() {
        _classCallCheck(this, PopupExampleComponent);
      };

      PopupExampleComponent.ɵfac = function PopupExampleComponent_Factory(t) {
        return new (t || PopupExampleComponent)();
      };

      PopupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupExampleComponent,
        selectors: [["nui-popup-docs-example"]],
        decls: 119,
        vars: 2,
        consts: [["type", "warning", 3, "allowDismiss"], ["href", "../components/ComboboxComponent.html#example", "target", "_blank"], ["href", "../components/MenuComponent.html#example", "target", "_blank"], ["href", "../components/SelectComponent.html#example", "target", "_blank"], ["filenamePrefix", "popup-simple-usage", "exampleTitle", "Basic Usage"], ["filenamePrefix", "popup-with-custom-width", "exampleTitle", "Custom Width"], ["filenamePrefix", "popup-append-to-body", "exampleTitle", "Appended to Body"], ["filenamePrefix", "popup-different-directions", "exampleTitle", "Custom Open Direction"], ["filenamePrefix", "popup-with-custom-styling", "exampleTitle", "Custom Styling"], ["filenamePrefix", "popup-with-custom-content", "exampleTitle", "Custom Content"]],
        template: function PopupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-popup>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is a base component for the most of dropdown-like Nova components, but this doesn't limit it's abilities. It allows you to put any HTML templates into it's body to build more complex and exciting components.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pay attention!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The following examples demonstrate only basic scenarios. To get familiar with more complex use cases, you can refer to the documentation for components built on top of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", such as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "nui-combobox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "nui-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "nui-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ", etc., and explore their internal structure in the codebase.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " A simple popup can be added to the page by adding a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "<nui-popup>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " element. It must wrap two types of elements: one that toggles the popup and one that defines the content. To achieve this, the element responsible for toggling the popup must contain the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "nuiPopupToggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " directive. The area with the content must be wrapped up inside a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "popupAreaContent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " directive assigned to it.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-popup-simple-usage-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Custom Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " One can change the width of the popup by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "nui-popup-with-custom-width-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Appended to Body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " can be appended to the body of the page if required. To achieve this, add the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "appendToBody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " input to the component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Please be aware");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " that the positioning of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " component is treated differently when the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "appendToBody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " input is used. There is a technical limitation that causes the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "directionTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "directionRight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " inputs not to work when ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "appendToBody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " is true. In this case, the positioning of the component is controlled exclusively by the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "edgeDetectionService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "nui-popup-append-to-body-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Custom Open Direction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Even though ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " automatically detects the window edges and adjusts the open direction accordingly thanks to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "edgeDetectionService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, ", it's possible to force the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " to open in a specific direction. Available inputs are: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "directionRight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "directionTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ", which receive boolean values.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "nui-popup-different-directions-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Custom Classes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " It is also easy to apply custom classes to the popup. Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "contextClass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " input to pass the desired css class.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "nui-popup-with-custom-styling-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Custom Content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " You can put pretty much anything you want inside the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " component. You can use it to build more complex components, and configure them to your liking.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "nui-popup-with-custom-content-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _popup_simple_usage_popup_simple_usage_example_component__WEBPACK_IMPORTED_MODULE_3__["PopupSimpleExampleComponent"], _popup_with_custom_width_popup_with_custom_width_example_component__WEBPACK_IMPORTED_MODULE_4__["PopupWithCustomWidthComponent"], _popup_append_to_body_popup_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_5__["PopupAppendToBodyExampleComponent"], _popup_different_directions_popup_different_directions_example_component__WEBPACK_IMPORTED_MODULE_6__["PopupDifferentDirectionsExampleComponent"], _popup_with_custom_styling_popup_with_custom_styling_example_component__WEBPACK_IMPORTED_MODULE_7__["PopupWithCustomStylingComponent"], _popup_with_custom_content_popup_with_custom_content_example_component__WEBPACK_IMPORTED_MODULE_8__["PopupWithCustomContentComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "GPOX":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-test/popup-test.example.component.less ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GPOX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "// The following styles are used for demonstration purposes only\n.nui-demo-custom-class {\n    background-color: yellowgreen !important;\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: bold;\n    text-decoration: underline overline black dotted;\n    padding: 20px;\n}";
      /***/
    },

    /***/
    "GlmZ":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-test/popup-test.example.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GlmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"row mt-5\">\n        <div class=\"col\">\n            <p>\n                Simple example\n            </p>\n            <nui-popup id=\"nui-demo-popup-simple\">\n                <button nuiPopupToggle>Click</button>\n                <div popupAreaContent>\n                    <ng-container *ngFor=\"let item of itemsSource\">\n                        <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                    </ng-container>\n                </div>\n            </nui-popup>\n        </div>\n        <div class=\"col\">\n            <p>\n                Custom width\n            </p>\n            <nui-popup [width]=\"width\" id=\"nui-demo-popup-custom-width\">\n                <button nuiPopupToggle>Click</button>\n                <div popupAreaContent>\n                    <ng-container *ngFor=\"let item of itemsSource\">\n                        <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                    </ng-container>\n                </div>\n            </nui-popup>\n        </div>\n        <div class=\"col\">\n            <p>\n                Append to Body\n            </p>\n            <nui-popup [appendToBody]=\"true\" [directionRight]=true id=\"nui-demo-popup-append-to-body\" contextClass=\"additional-host-class\">\n                <button nuiPopupToggle>Click</button>\n                <div popupAreaContent>\n                    <ng-container *ngFor=\"let item of itemsSource\">\n                        <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                    </ng-container>\n                </div>\n            </nui-popup>\n        </div>\n    </div>\n    <div class=\"row mt-5\">\n        <div class=\"col\">\n            <p>\n                Open Direction Right\n            </p>\n            <nui-popup [directionRight]=\"true\" id=\"nui-demo-popup-direction-right\">\n                <button nuiPopupToggle>Click</button>\n                <div popupAreaContent>\n                    <ng-container *ngFor=\"let item of itemsSource\">\n                        <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                    </ng-container>\n                </div>\n            </nui-popup>\n        </div>\n        <div class=\"col\">\n            <p>\n                Open Direction Top\n            </p>\n            <nui-popup [directionRight]=\"false\" [directionTop]=\"true\" id=\"nui-demo-popup-direction-top\">\n                <button nuiPopupToggle>Click</button>\n                <div popupAreaContent>\n                    <ng-container *ngFor=\"let item of itemsSource\">\n                        <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                    </ng-container>\n                </div>\n            </nui-popup>\n        </div>\n        <div class=\"col\">\n            <p>\n                IsOpen = true\n            </p>\n            <nui-popup id=\"nui-demo-popup-isOpen-true\" [isOpen]=\"true\">\n                <button nuiPopupToggle>Click</button>\n                <div popupAreaContent>\n                    <ng-container *ngFor=\"let item of itemsSource\">\n                        <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                    </ng-container>\n                </div>\n            </nui-popup>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "JgZo":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-simple-usage/popup-simple-usage.example.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JgZo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewEncapsulation } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-popup-simple-usage-example\",\n    templateUrl: \"./popup-simple-usage.example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupSimpleExampleComponent {\n    public icon = \"caret-down\";\n    public itemsSource: string[] = [\n        $localize `Item 1`,\n        $localize `Item 2`,\n        $localize `Item 3`,\n        $localize `Item 4`,\n    ];\n}\n";
      /***/
    },

    /***/
    "K1WP":
    /*!***********************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-test/popup-test.example.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: PopupTestComponent */

    /***/
    function K1WP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupTestComponent", function () {
        return PopupTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */
      "fNSn");

      function PopupTestComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6);
        }
      }

      function PopupTestComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7);
        }
      }

      function PopupTestComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8);
        }
      }

      function PopupTestComponent_ng_container_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9);
        }
      }

      function PopupTestComponent_ng_container_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10);
        }
      }

      function PopupTestComponent_ng_container_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11);
        }
      }

      var PopupTestComponent = /*#__PURE__*/function () {
        function PopupTestComponent() {
          _classCallCheck(this, PopupTestComponent);

          this.width = "200px";
          this.icon = "caret-down";
          this.itemsSource = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
        }

        _createClass(PopupTestComponent, [{
          key: "handleClick",
          value: function handleClick(event) {
            event.stopPropagation();
          }
        }]);

        return PopupTestComponent;
      }();

      PopupTestComponent.ɵfac = function PopupTestComponent_Factory(t) {
        return new (t || PopupTestComponent)();
      };

      PopupTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupTestComponent,
        selectors: [["nui-popup-test"]],
        decls: 51,
        vars: 13,
        consts: [[1, "container"], [1, "row", "mt-5"], [1, "col"], ["id", "nui-demo-popup-simple"], ["nuiPopupToggle", ""], ["popupAreaContent", ""], [4, "ngFor", "ngForOf"], ["id", "nui-demo-popup-custom-width", 3, "width"], ["id", "nui-demo-popup-append-to-body", "contextClass", "additional-host-class", 3, "appendToBody", "directionRight"], ["id", "nui-demo-popup-direction-right", 3, "directionRight"], ["id", "nui-demo-popup-direction-top", 3, "directionRight", "directionTop"], ["id", "nui-demo-popup-isOpen-true", 3, "isOpen"], ["tabindex", "0"]],
        template: function PopupTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Simple example ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-popup", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PopupTestComponent_ng_container_9_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Custom width ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-popup", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PopupTestComponent_ng_container_17_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Append to Body ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-popup", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PopupTestComponent_ng_container_25_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Open Direction Right ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nui-popup", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PopupTestComponent_ng_container_34_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Open Direction Top ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-popup", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PopupTestComponent_ng_container_42_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " IsOpen = true ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-popup", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PopupTestComponent_ng_container_50_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appendToBody", true)("directionRight", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("directionRight", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("directionRight", false)("directionTop", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isOpen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_2__["PopupToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_4__["MenuItemComponent"]],
        styles: [".nui-demo-custom-class {\n  background-color: yellowgreen !important;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  -webkit-text-decoration: underline overline black dotted;\n          text-decoration: underline overline black dotted;\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXRlc3QuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdDQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoicG9wdXAtdGVzdC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGZvbGxvd2luZyBzdHlsZXMgYXJlIHVzZWQgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seVxuLm51aS1kZW1vLWN1c3RvbS1jbGFzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIG92ZXJsaW5lIGJsYWNrIGRvdHRlZDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Kl82":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-with-custom-content/popup-with-custom-content.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PopupWithCustomContentComponent */

    /***/
    function Kl82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupWithCustomContentComponent", function () {
        return PopupWithCustomContentComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/search/search.component */
      "dYN2");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function PopupWithCustomContentComponent_nui_message_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-message", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowDismiss", false);
        }
      }

      function PopupWithCustomContentComponent_nui_checkbox_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2, " ");
        }
      }

      var PopupWithCustomContentComponent = /*#__PURE__*/function () {
        function PopupWithCustomContentComponent(formBuilder) {
          _classCallCheck(this, PopupWithCustomContentComponent);

          this.formBuilder = formBuilder;
          this.icon = "caret-down";
          this.width = "200px";
          this.itemsSource = [$localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Item 4"])))];
        }

        _createClass(PopupWithCustomContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.demoFormGroup = this.formBuilder.group({
              checkboxGroup: this.formBuilder.control([this.itemsSource[0], this.itemsSource[1], this.itemsSource[2]], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)])
            });
          }
        }, {
          key: "handleClick",
          value: function handleClick(event) {
            event.stopPropagation();
          }
        }]);

        return PopupWithCustomContentComponent;
      }();

      PopupWithCustomContentComponent.ɵfac = function PopupWithCustomContentComponent_Factory(t) {
        return new (t || PopupWithCustomContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      PopupWithCustomContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PopupWithCustomContentComponent,
        selectors: [["nui-popup-with-custom-content-example"]],
        decls: 25,
        vars: 5,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4378519773295396951$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Simple search bar ");
            i18n_0 = MSG_EXTERNAL_4378519773295396951$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F913bfcfa271c6372109ca746c7cb63df039b5b89\u241F4378519773295396951: Simple search bar "])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7380639996209720541$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Popover with Form and Checkbox Group Inside ");
            i18n_2 = MSG_EXTERNAL_7380639996209720541$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F5760f4934b29f662e3cac26772fe7eb3a19d9632\u241F7380639996209720541: Popover with Form and Checkbox Group Inside "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5702586263328570222$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("More Options...");
            i18n_4 = MSG_EXTERNAL_5702586263328570222$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241Fe76f223796947fb1a57f3daa562f44d09a27bcf3\u241F5702586263328570222:More Options..."])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Submit");
            i18n_6 = MSG_EXTERNAL_935187492052582731$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F71c77bb8cecdf11ec3eead24dd1ba506573fa9cd\u241F935187492052582731:Submit"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3498101055154698277$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Select minimum 3 checkboxes!");
            i18n_8 = MSG_EXTERNAL_3498101055154698277$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_CONTENT_POPUP_WITH_CUSTOM_CONTENT_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241Faaf9b8331666795542f417fe39c78014513ca737\u241F3498101055154698277:Select minimum 3 checkboxes!"])));
          }

          return [[1, "row", "top-buffer"], [1, "col-3", "nui-text-default"], i18n_0, i18n_2, [1, "col-3"], ["nui-button", "", "type", "button", "nuiPopupToggle", "", "icon", "search"], ["popupAreaContent", ""], [3, "click"], ["contextClass", "nui-demo-popover-custom-form-styles", 3, "width"], ["nuiPopupToggle", ""], i18n_4, [3, "formGroup", "click"], [1, "form-group"], ["type", "critical", 3, "allowDismiss", 4, "ngIf"], ["formControlName", "checkboxGroup", "name", "item", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["nui-button", "", "type", "submit", 3, "disabled"], i18n_6, ["type", "critical", 3, "allowDismiss"], i18n_8, [3, "value"]];
        },
        template: function PopupWithCustomContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nui-search", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupWithCustomContentComponent_Template_nui_search_click_11_listener($event) {
              return ctx.handleClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-popup", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupWithCustomContentComponent_Template_form_click_18_listener($event) {
              return ctx.handleClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PopupWithCustomContentComponent_nui_message_20_Template, 3, 1, "nui-message", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nui-checkbox-group", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PopupWithCustomContentComponent_nui_checkbox_22_Template, 2, 2, "nui-checkbox", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](24, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.demoFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.demoFormGroup.controls["checkboxGroup"].valid && ctx.demoFormGroup.controls["checkboxGroup"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.demoFormGroup.controls["checkboxGroup"].invalid);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_2__["PopupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_4__["PopupToggleDirective"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxComponent"]],
        styles: [".nui-demo-popover-custom-form-styles {\n  padding: 20px;\n}\n.top-buffer {\n  margin-top: 5px;\n}\na[nuiPopupToggle] {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXdpdGgtY3VzdG9tLWNvbnRlbnQuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0FBREoiLCJmaWxlIjoicG9wdXAtd2l0aC1jdXN0b20tY29udGVudC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm51aS1kZW1vLXBvcG92ZXItY3VzdG9tLWZvcm0tc3R5bGVzIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udG9wLWJ1ZmZlciB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5hW251aVBvcHVwVG9nZ2xlXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "LZGP":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-width/popup-with-custom-width.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LZGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewEncapsulation } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-popup-with-custom-width-example\",\n    templateUrl: \"./popup-with-custom-width.example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupWithCustomWidthComponent {\n\n    public icon = \"caret-down\";\n    public width = \"130px\";\n    public itemsSource: string[] = [\n        $localize `Item 1`,\n        $localize `Item 2`,\n        $localize `Item 3`,\n        $localize `Item 4`,\n    ];\n\n    constructor() {}\n}\n";
      /***/
    },

    /***/
    "MT7e":
    /*!********************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************/

    /*! no static exports found */

    /***/
    function MT7e(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "zX8v",
        "./popup-append-to-body/popup-append-to-body.example.component.html": "Wk4U",
        "./popup-append-to-body/popup-append-to-body.example.component.ts": "/11A",
        "./popup-different-directions/popup-different-directions.example.component.html": "mcGX",
        "./popup-different-directions/popup-different-directions.example.component.ts": "QJnK",
        "./popup-docs/popup-docs.example.component.html": "CQIr",
        "./popup-docs/popup-docs.example.component.ts": "AK8X",
        "./popup-simple-usage/popup-simple-usage.example.component.html": "FFqk",
        "./popup-simple-usage/popup-simple-usage.example.component.ts": "JgZo",
        "./popup-test/popup-test.example.component.html": "GlmZ",
        "./popup-test/popup-test.example.component.less": "GPOX",
        "./popup-test/popup-test.example.component.ts": "bqGP",
        "./popup-with-custom-content/popup-with-custom-content.example.component.html": "o/N5",
        "./popup-with-custom-content/popup-with-custom-content.example.component.less": "FOM3",
        "./popup-with-custom-content/popup-with-custom-content.example.component.ts": "kdon",
        "./popup-with-custom-styling/popup-with-custom-styling.example.component.html": "/8cC",
        "./popup-with-custom-styling/popup-with-custom-styling.example.component.less": "0Grj",
        "./popup-with-custom-styling/popup-with-custom-styling.example.component.ts": "9Hqo",
        "./popup-with-custom-width/popup-with-custom-width.example.component.html": "13R7",
        "./popup-with-custom-width/popup-with-custom-width.example.component.ts": "LZGP",
        "./popup.module.ts": "48Cw"
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
      webpackContext.id = "MT7e";
      /***/
    },

    /***/
    "N1bI":
    /*!*************************************************!*\
      !*** ./demo/src/components/demo/popup/index.ts ***!
      \*************************************************/

    /*! exports provided: PopupSimpleExampleComponent, PopupExampleComponent, PopupDifferentDirectionsExampleComponent, PopupWithCustomStylingComponent, PopupWithCustomWidthComponent, PopupWithCustomContentComponent, PopupTestComponent, PopupAppendToBodyExampleComponent */

    /***/
    function N1bI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _popup_simple_usage_popup_simple_usage_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./popup-simple-usage/popup-simple-usage.example.component */
      "wKka");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupSimpleExampleComponent", function () {
        return _popup_simple_usage_popup_simple_usage_example_component__WEBPACK_IMPORTED_MODULE_0__["PopupSimpleExampleComponent"];
      });
      /* harmony import */


      var _popup_docs_popup_docs_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./popup-docs/popup-docs.example.component */
      "FdYI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupExampleComponent", function () {
        return _popup_docs_popup_docs_example_component__WEBPACK_IMPORTED_MODULE_1__["PopupExampleComponent"];
      });
      /* harmony import */


      var _popup_different_directions_popup_different_directions_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popup-different-directions/popup-different-directions.example.component */
      "oPUI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupDifferentDirectionsExampleComponent", function () {
        return _popup_different_directions_popup_different_directions_example_component__WEBPACK_IMPORTED_MODULE_2__["PopupDifferentDirectionsExampleComponent"];
      });
      /* harmony import */


      var _popup_with_custom_styling_popup_with_custom_styling_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-with-custom-styling/popup-with-custom-styling.example.component */
      "poY8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupWithCustomStylingComponent", function () {
        return _popup_with_custom_styling_popup_with_custom_styling_example_component__WEBPACK_IMPORTED_MODULE_3__["PopupWithCustomStylingComponent"];
      });
      /* harmony import */


      var _popup_with_custom_width_popup_with_custom_width_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./popup-with-custom-width/popup-with-custom-width.example.component */
      "QVeh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupWithCustomWidthComponent", function () {
        return _popup_with_custom_width_popup_with_custom_width_example_component__WEBPACK_IMPORTED_MODULE_4__["PopupWithCustomWidthComponent"];
      });
      /* harmony import */


      var _popup_with_custom_content_popup_with_custom_content_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-with-custom-content/popup-with-custom-content.example.component */
      "Kl82");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupWithCustomContentComponent", function () {
        return _popup_with_custom_content_popup_with_custom_content_example_component__WEBPACK_IMPORTED_MODULE_5__["PopupWithCustomContentComponent"];
      });
      /* harmony import */


      var _popup_test_popup_test_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-test/popup-test.example.component */
      "K1WP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupTestComponent", function () {
        return _popup_test_popup_test_example_component__WEBPACK_IMPORTED_MODULE_6__["PopupTestComponent"];
      });
      /* harmony import */


      var _popup_append_to_body_popup_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./popup-append-to-body/popup-append-to-body.example.component */
      "8ur6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PopupAppendToBodyExampleComponent", function () {
        return _popup_append_to_body_popup_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_7__["PopupAppendToBodyExampleComponent"];
      });
      /***/

    },

    /***/
    "QJnK":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-different-directions/popup-different-directions.example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QJnK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewEncapsulation } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-popup-different-directions-example\",\n    templateUrl: \"./popup-different-directions.example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupDifferentDirectionsExampleComponent {\n\n    public icon = \"caret-down\";\n    public itemsSource: string[] = [\n        $localize `Item 1`,\n        $localize `Item 2`,\n        $localize `Item 3`,\n        $localize `Item 4`,\n    ];\n\n    constructor() {}\n\n}\n";
      /***/
    },

    /***/
    "QVeh":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-with-custom-width/popup-with-custom-width.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: PopupWithCustomWidthComponent */

    /***/
    function QVeh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupWithCustomWidthComponent", function () {
        return PopupWithCustomWidthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */
      "fNSn");

      function PopupWithCustomWidthComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
        }
      }

      var PopupWithCustomWidthComponent = function PopupWithCustomWidthComponent() {
        _classCallCheck(this, PopupWithCustomWidthComponent);

        this.icon = "caret-down";
        this.width = "130px";
        this.itemsSource = [$localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Item 4"])))];
      };

      PopupWithCustomWidthComponent.ɵfac = function PopupWithCustomWidthComponent_Factory(t) {
        return new (t || PopupWithCustomWidthComponent)();
      };

      PopupWithCustomWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupWithCustomWidthComponent,
        selectors: [["nui-popup-with-custom-width-example"]],
        decls: 5,
        vars: 5,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5447226842725737379$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_WIDTH_POPUP_WITH_CUSTOM_WIDTH_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Click ");
            i18n_0 = MSG_EXTERNAL_5447226842725737379$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_WIDTH_POPUP_WITH_CUSTOM_WIDTH_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241Fb9891481aa58d6c0ec8a41e95f4e13da269f9e93\u241F5447226842725737379: Click "])));
          }

          return [[3, "width"], ["nui-button", "", "nuiPopupToggle", "", "type", "button", 1, "menu-button", 3, "icon", "iconRight", "isEmpty"], i18n_0, ["popupAreaContent", ""], [4, "ngFor", "ngForOf"], ["tabindex", "0"]];
        },
        template: function PopupWithCustomWidthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popup", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupWithCustomWidthComponent_ng_container_4_Template, 3, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["PopupToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Wk4U":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-append-to-body/popup-append-to-body.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wk4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popup [appendToBody]=\"true\">\n    <button nui-button\n            nuiPopupToggle\n            type=\"button\"\n            [icon]=\"icon\"\n            [iconRight]=\"true\"\n            class=\"menu-button\"\n            [isEmpty]=\"false\"\n            i18n>\n            Click\n    </button>\n    <div popupAreaContent>\n        <ng-container *ngFor=\"let item of itemsSource\">\n            <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n        </ng-container>\n    </div>\n</nui-popup>\n";
      /***/
    },

    /***/
    "bqGP":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-test/popup-test.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bqGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewEncapsulation } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-popup-test\",\n    templateUrl: \"./popup-test.example.component.html\",\n    styleUrls: [\"popup-test.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupTestComponent {\n\n    public width = \"200px\";\n    public icon = \"caret-down\";\n    public itemsSource: string[] = [\n        \"Item 1\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\",\n    ];\n\n    public handleClick(event: MouseEvent) {\n        event.stopPropagation();\n    }\n\n}\n";
      /***/
    },

    /***/
    "kdon":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-content/popup-with-custom-content.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kdon(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit, ViewEncapsulation } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n\n@Component({\n    selector: \"nui-popup-with-custom-content-example\",\n    templateUrl: \"./popup-with-custom-content.example.component.html\",\n    styleUrls: [\"./popup-with-custom-content.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class PopupWithCustomContentComponent implements OnInit {\n\n    public demoFormGroup: FormGroup;\n    public icon = \"caret-down\";\n    public width = \"200px\";\n    public itemsSource: string[] = [\n        $localize `Item 1`,\n        $localize `Item 2`,\n        $localize `Item 3`,\n        $localize `Item 4`,\n    ];\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    public ngOnInit() {\n        this.demoFormGroup = this.formBuilder.group({\n            checkboxGroup: this.formBuilder.control([this.itemsSource[0], this.itemsSource[1], this.itemsSource[2]], [\n                Validators.required, Validators.minLength(3)]),\n        });\n    }\n\n    public handleClick(event: MouseEvent) {\n        event.stopPropagation();\n    }\n\n}\n";
      /***/
    },

    /***/
    "mcGX":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-different-directions/popup-different-directions.example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mcGX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col nui-text-default\" i18n>Bottom Right</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <nui-popup [directionRight]=\"true\">\n                    <button nui-button\n                            nuiPopupToggle\n                            type=\"button\"\n                            [icon]=\"icon\"\n                            [iconRight]=\"true\"\n                            class=\"menu-button\"\n                            [isEmpty]=\"false\"\n                            i18n>\n                        Click\n                    </button>\n                    <div popupAreaContent>\n                        <ng-container *ngFor=\"let item of itemsSource\">\n                            <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                        </ng-container>\n                    </div>\n                </nui-popup>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col nui-text-default\" i18n>Top Left</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <nui-popup  [directionTop]=\"true\">\n                    <button nui-button\n                            nuiPopupToggle\n                            type=\"button\"\n                            [icon]=\"icon\"\n                            [iconRight]=\"true\"\n                            class=\"menu-button\"\n                            [isEmpty]=\"false\"\n                            i18n>\n                        Click\n                    </button>\n                    <div popupAreaContent>\n                        <ng-container *ngFor=\"let item of itemsSource\">\n                            <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                        </ng-container>\n                    </div>\n                </nui-popup>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"row\">\n            <div class=\"col nui-text-default\" i18n>Top Right</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <nui-popup  [directionTop]=\"true\" [directionRight]=\"true\">\n                    <button nui-button\n                            nuiPopupToggle\n                            type=\"button\"\n                            [icon]=\"icon\"\n                            [iconRight]=\"true\"\n                            class=\"menu-button\"\n                            [isEmpty]=\"false\"\n                            i18n>\n                        Click\n                    </button>\n                    <div popupAreaContent>\n                        <ng-container *ngFor=\"let item of itemsSource\">\n                            <nui-menu-item tabindex=\"0\">{{item}}</nui-menu-item>\n                        </ng-container>\n                    </div>\n                </nui-popup>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "o/N5":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/popup-with-custom-content/popup-with-custom-content.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oN5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row top-buffer\">\n    <div class=\"col-3 nui-text-default\" i18n>\n        Simple search bar\n    </div>\n    <div class=\"col-3 nui-text-default\" i18n>\n        Popover with Form and Checkbox Group Inside\n    </div>\n</div>\n<div class=\"row top-buffer\">\n    <div class=\"col-3\">\n        <nui-popup>\n            <button nui-button type=\"button\" nuiPopupToggle icon=\"search\"></button>\n            <div popupAreaContent>\n                <ng-container>\n                    <nui-search (click)=\"handleClick($event)\"></nui-search>\n                </ng-container>\n            </div>\n        </nui-popup>\n    </div>\n    <div class=\"col-3\">\n        <nui-popup [width]=\"width\" contextClass=\"nui-demo-popover-custom-form-styles\">\n            <a nuiPopupToggle i18n>More Options...</a>\n            <div popupAreaContent>\n                <ng-container>\n                    <form [formGroup]=\"demoFormGroup\" (click)=\"handleClick($event)\">\n                        <div class=\"form-group\">\n                            <nui-message [allowDismiss]=\"false\" type=\"critical\" *ngIf=\"!demoFormGroup.controls['checkboxGroup'].valid && demoFormGroup.controls['checkboxGroup'].touched\" >\n                                <b i18n>Select minimum 3 checkboxes!</b>\n                            </nui-message>\n                            <nui-checkbox-group formControlName=\"checkboxGroup\"\n                                                name=\"item\" required>\n                                <nui-checkbox *ngFor=\"let item of itemsSource\"\n                                                [value]=\"item\">\n                                    {{item}}\n                                </nui-checkbox>\n                            </nui-checkbox-group>\n                        </div>\n                        <button nui-button type=\"submit\" [disabled]=\"demoFormGroup.controls['checkboxGroup'].invalid\" i18n>Submit</button>\n                    </form>\n                </ng-container>\n            </div>\n        </nui-popup>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "oPUI":
    /*!*******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-different-directions/popup-different-directions.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: PopupDifferentDirectionsExampleComponent */

    /***/
    function oPUI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupDifferentDirectionsExampleComponent", function () {
        return PopupDifferentDirectionsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */
      "fNSn");

      function PopupDifferentDirectionsExampleComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3);
        }
      }

      function PopupDifferentDirectionsExampleComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
        }
      }

      function PopupDifferentDirectionsExampleComponent_ng_container_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
        }
      }

      var PopupDifferentDirectionsExampleComponent = function PopupDifferentDirectionsExampleComponent() {
        _classCallCheck(this, PopupDifferentDirectionsExampleComponent);

        this.icon = "caret-down";
        this.itemsSource = [$localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Item 4"])))];
      };

      PopupDifferentDirectionsExampleComponent.ɵfac = function PopupDifferentDirectionsExampleComponent_Factory(t) {
        return new (t || PopupDifferentDirectionsExampleComponent)();
      };

      PopupDifferentDirectionsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupDifferentDirectionsExampleComponent,
        selectors: [["nui-popup-different-directions-example"]],
        decls: 34,
        vars: 16,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4924851972474284371$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Bottom Right");
            i18n_0 = MSG_EXTERNAL_4924851972474284371$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241F46da044aba9d406390f9c64af220d4a0bb0323d1\u241F4924851972474284371:Bottom Right"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2646673539903348309$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" Click ");
            i18n_2 = MSG_EXTERNAL_2646673539903348309$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":\u241Fb42d2abc66e7a091f008ab22619f89643be23e13\u241F2646673539903348309: Click "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7437546388321615771$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Top Left");
            i18n_4 = MSG_EXTERNAL_7437546388321615771$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([":\u241F250702fe9f51cbc403e97d00a982a7a37bf8c00f\u241F7437546388321615771:Top Left"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2646673539903348309$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" Click ");
            i18n_6 = MSG_EXTERNAL_2646673539903348309$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral([":\u241Fb42d2abc66e7a091f008ab22619f89643be23e13\u241F2646673539903348309: Click "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8224585816284521000$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Top Right");
            i18n_8 = MSG_EXTERNAL_8224585816284521000$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral([":\u241F14d127bb77248be55149f61286a4a46c5ce74be3\u241F8224585816284521000:Top Right"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2646673539903348309$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_11 = goog.getMsg(" Click ");
            i18n_10 = MSG_EXTERNAL_2646673539903348309$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_DIFFERENT_DIRECTIONS_POPUP_DIFFERENT_DIRECTIONS_EXAMPLE_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([":\u241Fb42d2abc66e7a091f008ab22619f89643be23e13\u241F2646673539903348309: Click "])));
          }

          return [[1, "row"], [1, "col"], [1, "col", "nui-text-default"], i18n_0, [3, "directionRight"], ["nui-button", "", "nuiPopupToggle", "", "type", "button", 1, "menu-button", 3, "icon", "iconRight", "isEmpty"], i18n_2, ["popupAreaContent", ""], [4, "ngFor", "ngForOf"], i18n_4, [3, "directionTop"], i18n_6, i18n_8, [3, "directionTop", "directionRight"], i18n_10, ["tabindex", "0"]];
        },
        template: function PopupDifferentDirectionsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-popup", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopupDifferentDirectionsExampleComponent_ng_container_11_Template, 3, 1, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-popup", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PopupDifferentDirectionsExampleComponent_ng_container_22_Template, 3, 1, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](26, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-popup", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](31, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PopupDifferentDirectionsExampleComponent_ng_container_33_Template, 3, 1, "ng-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("directionRight", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("directionTop", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("directionTop", true)("directionRight", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["PopupToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "poY8":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-with-custom-styling/popup-with-custom-styling.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: PopupWithCustomStylingComponent */

    /***/
    function poY8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupWithCustomStylingComponent", function () {
        return PopupWithCustomStylingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */
      "fNSn");

      function PopupWithCustomStylingComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
        }
      }

      var PopupWithCustomStylingComponent = function PopupWithCustomStylingComponent() {
        _classCallCheck(this, PopupWithCustomStylingComponent);

        this.icon = "caret-down";
        this.itemsSource = [$localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Item 4"])))];
      };

      PopupWithCustomStylingComponent.ɵfac = function PopupWithCustomStylingComponent_Factory(t) {
        return new (t || PopupWithCustomStylingComponent)();
      };

      PopupWithCustomStylingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupWithCustomStylingComponent,
        selectors: [["nui-popup-with-custom-styling-example"]],
        decls: 5,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3408041980846512444$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_STYLING_POPUP_WITH_CUSTOM_STYLING_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Click ");
            i18n_0 = MSG_EXTERNAL_3408041980846512444$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_WITH_CUSTOM_STYLING_POPUP_WITH_CUSTOM_STYLING_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([":\u241F6a57ad6e558fdec72478a1931528dfff5a51d3d5\u241F3408041980846512444: Click "])));
          }

          return [["contextClass", "nui-demo-custom-class"], ["nui-button", "", "nuiPopupToggle", "", "width", "90px", "type", "button", 1, "menu-button", 3, "icon", "iconRight", "isEmpty"], i18n_0, ["popupAreaContent", ""], [4, "ngFor", "ngForOf"], ["tabindex", "0"]];
        },
        template: function PopupWithCustomStylingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popup", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupWithCustomStylingComponent_ng_container_4_Template, 3, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["PopupToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"]],
        styles: [".popup-adapter-overlay .nui-demo-custom-class.nui-overlay {\n  background-color: yellowgreen !important;\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  -webkit-text-decoration: underline overline black dotted;\n          text-decoration: underline overline black dotted;\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLXdpdGgtY3VzdG9tLXN0eWxpbmcuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLHdDQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7RUFDQSxhQUFBO0FBRlIiLCJmaWxlIjoicG9wdXAtd2l0aC1jdXN0b20tc3R5bGluZy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGZvbGxvd2luZyBzdHlsZXMgYXJlIHVzZWQgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seVxuXG4ucG9wdXAtYWRhcHRlci1vdmVybGF5IHtcbiAgICAubnVpLWRlbW8tY3VzdG9tLWNsYXNzLm51aS1vdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW4gIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIG92ZXJsaW5lIGJsYWNrIGRvdHRlZDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbn1cbiJdfQ== */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "wKka":
    /*!***************************************************************************************************!*\
      !*** ./demo/src/components/demo/popup/popup-simple-usage/popup-simple-usage.example.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: PopupSimpleExampleComponent */

    /***/
    function wKka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupSimpleExampleComponent", function () {
        return PopupSimpleExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup-adapter/popup-adapter.component */
      "tUgt");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popup/popup-toggle.directive */
      "Yclq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */
      "fNSn");

      function PopupSimpleExampleComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
        }
      }

      var PopupSimpleExampleComponent = function PopupSimpleExampleComponent() {
        _classCallCheck(this, PopupSimpleExampleComponent);

        this.icon = "caret-down";
        this.itemsSource = [$localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Item 1"]))), $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Item 2"]))), $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Item 3"]))), $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Item 4"])))];
      };

      PopupSimpleExampleComponent.ɵfac = function PopupSimpleExampleComponent_Factory(t) {
        return new (t || PopupSimpleExampleComponent)();
      };

      PopupSimpleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupSimpleExampleComponent,
        selectors: [["nui-popup-simple-usage-example"]],
        decls: 5,
        vars: 4,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5447226842725737379$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_SIMPLE_USAGE_POPUP_SIMPLE_USAGE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Click ");
            i18n_0 = MSG_EXTERNAL_5447226842725737379$$DEMO_SRC_COMPONENTS_DEMO_POPUP_POPUP_SIMPLE_USAGE_POPUP_SIMPLE_USAGE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral([":\u241Fb9891481aa58d6c0ec8a41e95f4e13da269f9e93\u241F5447226842725737379: Click "])));
          }

          return [["nui-button", "", "nuiPopupToggle", "", "type", "button", 1, "menu-button", 3, "icon", "iconRight", "isEmpty"], i18n_0, ["popupAreaContent", ""], [4, "ngFor", "ngForOf"], ["tabindex", "0", "nuiTooltip", "This icon is draggable"]];
        },
        template: function PopupSimpleExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupSimpleExampleComponent_ng_container_4_Template, 3, 1, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icon)("iconRight", true)("isEmpty", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemsSource);
          }
        },
        directives: [_src_lib_popup_adapter_popup_adapter_component__WEBPACK_IMPORTED_MODULE_1__["PopupComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_popup_popup_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["PopupToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zX8v":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/popup/index.ts ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zX8v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./popup-simple-usage/popup-simple-usage.example.component\";\nexport * from \"./popup-docs/popup-docs.example.component\";\nexport * from \"./popup-different-directions/popup-different-directions.example.component\";\nexport * from \"./popup-with-custom-styling/popup-with-custom-styling.example.component\";\nexport * from \"./popup-with-custom-width/popup-with-custom-width.example.component\";\nexport * from \"./popup-with-custom-content/popup-with-custom-content.example.component\";\nexport * from \"./popup-test/popup-test.example.component\";\nexport * from \"./popup-append-to-body/popup-append-to-body.example.component\";\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-popup-popup-module-es5.js.map