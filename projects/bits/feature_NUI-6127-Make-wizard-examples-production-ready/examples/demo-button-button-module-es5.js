(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-button-button-module"], {
    /***/
    "2JKq":
    /*!**************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-repeatable/button-repeatable.example.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ButtonRepeatableExampleComponent */

    /***/
    function JKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonRepeatableExampleComponent", function () {
        return ButtonRepeatableExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonRepeatableExampleComponent = /*#__PURE__*/function () {
        function ButtonRepeatableExampleComponent() {
          _classCallCheck(this, ButtonRepeatableExampleComponent);

          this.count = 100;
        }

        _createClass(ButtonRepeatableExampleComponent, [{
          key: "onCountUpClick",
          value: function onCountUpClick() {
            this.count++;
          }
        }, {
          key: "onCountDownClick",
          value: function onCountDownClick() {
            this.count--;
          }
        }]);

        return ButtonRepeatableExampleComponent;
      }();

      ButtonRepeatableExampleComponent.ɵfac = function ButtonRepeatableExampleComponent_Factory(t) {
        return new (t || ButtonRepeatableExampleComponent)();
      };

      ButtonRepeatableExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonRepeatableExampleComponent,
        selectors: [["nui-button-repeatable-example"]],
        decls: 4,
        vars: 3,
        consts: [["nui-button", "", "type", "button", "displayStyle", "action", "icon", "caret-up", 3, "isRepeat", "click"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "caret-down", 3, "isRepeat", "click"], [1, "nui-text-default"]],
        template: function ButtonRepeatableExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonRepeatableExampleComponent_Template_button_click_0_listener() {
              return ctx.onCountUpClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonRepeatableExampleComponent_Template_button_click_1_listener() {
              return ctx.onCountDownClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRepeat", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRepeat", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "2aQW":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-display-style-primary/button-display-style-primary.example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aQW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" displayStyle=\"primary\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "3LVe":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-display-style-action/button-display-style-action.example.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LVe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-display-style-action-example\",\n    templateUrl: \"./button-display-style-action.example.component.html\",\n})\nexport class ButtonDisplayStyleActionExampleComponent {}\n";
      /***/
    },

    /***/
    "3LtH":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/index.ts ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function LtH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./button-docs/button-docs.example.component\";\nexport * from \"./button-test/button-test.component\";\nexport * from \"./button-basic/button-basic.example.component\";\nexport * from \"./button-busy/button-busy.example.component\";\nexport * from \"./button-display-style-primary/button-display-style-primary.example.component\";\nexport * from \"./button-display-style-action/button-display-style-action.example.component\";\nexport * from \"./button-display-style-destructive/button-display-style-destructive.example.component\";\nexport * from \"./button-repeatable/button-repeatable.example.component\";\nexport * from \"./button-size/button-size.example.component\";\nexport * from \"./button-with-icon/button-with-icon.example.component\";\nexport * from \"./button-with-icon-only/button-with-icon-only.example.component\";\nexport * from \"./button-with-icon-right/button-with-icon-right.example.component\";\nexport * from \"./button-with-icon-custom-color/button-with-icon-custom-color.example.component\";\nexport * from \"./button-group/button-group.example.component\";\nexport * from \"./button-visual-test/button-visual-test.component\";\nexport * from \"./button-long-text/button-with-long-text-example.component\";\n";
      /***/
    },

    /***/
    "3XmR":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-basic/button-basic.example.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XmR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" (click)=\"onClick()\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "3lLK":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon-right/button-with-icon-right.example.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lLK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" icon=\"reload\" [iconRight]=\"true\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "4qDP":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-long-text/button-with-long-text-example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qDP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-with-button-long-text-example\",\n    templateUrl: \"./button-with-long-text-example.component.html\",\n})\nexport class ButtonWithLongTextExampleComponent {\n    public disableWidthRestriction = true;\n\n    public toggleWidthRestriction() {\n        this.disableWidthRestriction = !this.disableWidthRestriction;\n    }\n}\n";
      /***/
    },

    /***/
    "7tVZ":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-visual-test/button-visual-test.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: ButtonVisualTestComponent */

    /***/
    function tVZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonVisualTestComponent", function () {
        return ButtonVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonVisualTestComponent = function ButtonVisualTestComponent() {
        _classCallCheck(this, ButtonVisualTestComponent);
      };

      ButtonVisualTestComponent.ɵfac = function ButtonVisualTestComponent_Factory(t) {
        return new (t || ButtonVisualTestComponent)();
      };

      ButtonVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonVisualTestComponent,
        selectors: [["nui-button-visual"]],
        decls: 88,
        vars: 10,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3009058853923760985$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_VISUAL_TEST_BUTTON_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Disabled Primary");
            i18n_0 = MSG_EXTERNAL_3009058853923760985$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_VISUAL_TEST_BUTTON_VISUAL_TEST_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241Ffe03320f7a47b99eb1c1b371eff994502abcc36b\u241F3009058853923760985:Disabled Primary"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2097605193093296225$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_VISUAL_TEST_BUTTON_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Disabled Action");
            i18n_2 = MSG_EXTERNAL_2097605193093296225$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_VISUAL_TEST_BUTTON_VISUAL_TEST_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F928530c69ff78938c4a66cdfbe254a826a0cd4f1\u241F2097605193093296225:Disabled Action"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7813900013056642814$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_VISUAL_TEST_BUTTON_VISUAL_TEST_COMPONENT_TS_5 = goog.getMsg("Disabled Destructive");
            i18n_4 = MSG_EXTERNAL_7813900013056642814$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_VISUAL_TEST_BUTTON_VISUAL_TEST_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241Fc1063420593b7c9546136e41036b8948e2b40108\u241F7813900013056642814:Disabled Destructive"])));
          }

          return [[1, "container"], [1, "row"], ["nui-button", "", "id", "basic-button", "type", "button"], ["nui-button", "", "id", "primary-button", "type", "button", "displayStyle", "primary"], ["nui-button", "", "id", "action-button", "type", "button", "displayStyle", "action"], ["nui-button", "", "type", "button", "displayStyle", "destructive"], [1, "row", 2, "display", "block"], ["nui-button", "", "type", "button", "size", "compact"], ["nui-button", "", "type", "button"], ["nui-button", "", "type", "button", "size", "large"], ["nui-button", "", "type", "button", "icon", "add"], ["nui-button", "", "type", "button", "icon", "reload", 3, "iconRight"], ["nui-button", "", "type", "button", "icon", "power-on", "iconColor", "orange"], ["nui-button", "", "type", "button", "icon", "star-full"], [1, "w-100", "mt-2"], ["nui-button", "", "id", "primary-button", "type", "button", "displayStyle", "primary", "icon", "add"], ["nui-button", "", "id", "action-button", "type", "button", "displayStyle", "action", "icon", "status_warning"], ["nui-button", "", "type", "button", "displayStyle", "destructive", "icon", "printer"], ["nui-button", "", "type", "button", "size", "large", "displayStyle", "primary", "icon", "add", 3, "iconRight", "disabled"], i18n_0, ["nui-button", "", "type", "button", "size", "large", "displayStyle", "action", "icon", "status_warning", 3, "iconRight", "disabled"], i18n_2, ["nui-button", "", "type", "button", "size", "large", "displayStyle", "destructive", "icon", "printer", 3, "iconRight", "disabled"], i18n_4, ["nui-button", "", "type", "button", "size", "compact", "icon", "add"], ["nui-button", "", "type", "button", "size", "large", "icon", "add"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "caret-up", 3, "isRepeat"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "caret-down", 3, "isRepeat"], ["nui-button", "", "type", "button", 3, "isBusy"], [1, "btn-group"]];
        },
        template: function ButtonVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Basic button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Primary, Action, and Destructive buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sized buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Large");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Buttons with icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](47, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](49, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](51, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sized buttons with icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Compact + icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Default + icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Large + icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Buttons with repeat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Button with busy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Click me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Buttons in a group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "First");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Second");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Third");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Fourth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Fifth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRepeat", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRepeat", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBusy", true);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "9oyA":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-size/button-size.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oyA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" size=\"compact\" i18n>Compact</button>\n<button nui-button type=\"button\" i18n>Default</button>\n<button nui-button type=\"button\" size=\"large\" i18n>Large</button>\n";
      /***/
    },

    /***/
    "Ac4+":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-busy/button-busy.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ac4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-busy-example\",\n    templateUrl: \"./button-busy.example.component.html\",\n})\nexport class ButtonBusyExampleComponent {}\n";
      /***/
    },

    /***/
    "CzVH":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon-only/button-with-icon-only.example.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CzVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" icon=\"star-full\"></button>\n";
      /***/
    },

    /***/
    "DJQC":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-long-text/button-with-long-text-example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DJQC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button [class.unlimited-width]=\"disableWidthRestriction\" nui-button type=\"button\" (click)=\"toggleWidthRestriction()\" i18n>\n    Toggle button's max-width restriction with a press of a button\n</button>\n";
      /***/
    },

    /***/
    "Dw5z":
    /*!**********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-display-style-action/button-display-style-action.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ButtonDisplayStyleActionExampleComponent */

    /***/
    function Dw5z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDisplayStyleActionExampleComponent", function () {
        return ButtonDisplayStyleActionExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonDisplayStyleActionExampleComponent = function ButtonDisplayStyleActionExampleComponent() {
        _classCallCheck(this, ButtonDisplayStyleActionExampleComponent);
      };

      ButtonDisplayStyleActionExampleComponent.ɵfac = function ButtonDisplayStyleActionExampleComponent_Factory(t) {
        return new (t || ButtonDisplayStyleActionExampleComponent)();
      };

      ButtonDisplayStyleActionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonDisplayStyleActionExampleComponent,
        selectors: [["nui-button-display-style-action-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_DISPLAY_STYLE_ACTION_BUTTON_DISPLAY_STYLE_ACTION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_DISPLAY_STYLE_ACTION_BUTTON_DISPLAY_STYLE_ACTION_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", "displayStyle", "action"], i18n_0];
        },
        template: function ButtonDisplayStyleActionExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "H/Or":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-size/button-size.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ButtonSizeExampleComponent */

    /***/
    function HOr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonSizeExampleComponent", function () {
        return ButtonSizeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonSizeExampleComponent = function ButtonSizeExampleComponent() {
        _classCallCheck(this, ButtonSizeExampleComponent);
      };

      ButtonSizeExampleComponent.ɵfac = function ButtonSizeExampleComponent_Factory(t) {
        return new (t || ButtonSizeExampleComponent)();
      };

      ButtonSizeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonSizeExampleComponent,
        selectors: [["nui-button-size-example"]],
        decls: 6,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4046649033157042513$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_SIZE_BUTTON_SIZE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Compact");
            i18n_0 = MSG_EXTERNAL_4046649033157042513$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_SIZE_BUTTON_SIZE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F81cf037f1784108531987672cb369ae17e385eb8\u241F4046649033157042513:Compact"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5607669932062416162$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_SIZE_BUTTON_SIZE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Default");
            i18n_2 = MSG_EXTERNAL_5607669932062416162$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_SIZE_BUTTON_SIZE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241Fff7cee38a2259526c519f878e71b964f41db4348\u241F5607669932062416162:Default"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3905533329051691155$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_SIZE_BUTTON_SIZE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Large");
            i18n_4 = MSG_EXTERNAL_3905533329051691155$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_SIZE_BUTTON_SIZE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F3226d87abb40b9e64b9b50b6797c3d30269c1e17\u241F3905533329051691155:Large"])));
          }

          return [["nui-button", "", "type", "button", "size", "compact"], i18n_0, ["nui-button", "", "type", "button"], i18n_2, ["nui-button", "", "type", "button", "size", "large"], i18n_4];
        },
        template: function ButtonSizeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "IqKK":
    /*!********************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-display-style-destructive/button-display-style-destructive.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: ButtonDisplayStyleDestructiveExampleComponent */

    /***/
    function IqKK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDisplayStyleDestructiveExampleComponent", function () {
        return ButtonDisplayStyleDestructiveExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonDisplayStyleDestructiveExampleComponent = function ButtonDisplayStyleDestructiveExampleComponent() {
        _classCallCheck(this, ButtonDisplayStyleDestructiveExampleComponent);
      };

      ButtonDisplayStyleDestructiveExampleComponent.ɵfac = function ButtonDisplayStyleDestructiveExampleComponent_Factory(t) {
        return new (t || ButtonDisplayStyleDestructiveExampleComponent)();
      };

      ButtonDisplayStyleDestructiveExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonDisplayStyleDestructiveExampleComponent,
        selectors: [["nui-button-display-style-destructive-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_DISPLAY_STYLE_DESTRUCTIVE_BUTTON_DISPLAY_STYLE_DESTRUCTIVE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_DISPLAY_STYLE_DESTRUCTIVE_BUTTON_DISPLAY_STYLE_DESTRUCTIVE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", "displayStyle", "destructive"], i18n_0];
        },
        template: function ButtonDisplayStyleDestructiveExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "J4Gl":
    /*!******************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-test/button-test.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ButtonTestComponent */

    /***/
    function J4Gl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonTestComponent", function () {
        return ButtonTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _button_long_text_button_with_long_text_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../button-long-text/button-with-long-text-example.component */
      "bX81");

      var ButtonTestComponent = /*#__PURE__*/function () {
        function ButtonTestComponent() {
          _classCallCheck(this, ButtonTestComponent);

          this.isRepeat = "true";
          this.count = 100;
        }

        _createClass(ButtonTestComponent, [{
          key: "onCountUpClick",
          value: function onCountUpClick() {
            this.count++;
          }
        }]);

        return ButtonTestComponent;
      }();

      ButtonTestComponent.ɵfac = function ButtonTestComponent_Factory(t) {
        return new (t || ButtonTestComponent)();
      };

      ButtonTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonTestComponent,
        selectors: [["nui-button-test"]],
        decls: 22,
        vars: 9,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8706736617333460404$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_1 = goog.getMsg(" Compact\n");
            i18n_0 = MSG_EXTERNAL_8706736617333460404$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F00b29e1bb9ed20c8c82c2264f981cf9bc6e3a9c1\u241F8706736617333460404: Compact\n"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_865426891610429215$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_3 = goog.getMsg(" Large + icon\n");
            i18n_2 = MSG_EXTERNAL_865426891610429215$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241Fcf9714419ecd7706bbc61bc3097a1d70f3ba617f\u241F865426891610429215: Large + icon\n"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4351913332106990374$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_5 = goog.getMsg(" Disabled\n");
            i18n_4 = MSG_EXTERNAL_4351913332106990374$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241Faadc7b008e89071cdcd5a21dabfe5d3bf1062e87\u241F4351913332106990374: Disabled\n"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_73409365769624885$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_7 = goog.getMsg(" Busy\n");
            i18n_6 = MSG_EXTERNAL_73409365769624885$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F17dda5e72858307562ab4a140c1dfb48422b0a40\u241F73409365769624885: Busy\n"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8706736617333460404$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_9 = goog.getMsg(" Compact\n");
            i18n_8 = MSG_EXTERNAL_8706736617333460404$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241F00b29e1bb9ed20c8c82c2264f981cf9bc6e3a9c1\u241F8706736617333460404: Compact\n"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_865426891610429215$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_11 = goog.getMsg(" Large + icon\n");
            i18n_10 = MSG_EXTERNAL_865426891610429215$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241Fcf9714419ecd7706bbc61bc3097a1d70f3ba617f\u241F865426891610429215: Large + icon\n"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8706736617333460404$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_13 = goog.getMsg(" Compact\n");
            i18n_12 = MSG_EXTERNAL_8706736617333460404$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_13;
          } else {
            i18n_12 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241F00b29e1bb9ed20c8c82c2264f981cf9bc6e3a9c1\u241F8706736617333460404: Compact\n"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1369743847649479916$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_15 = goog.getMsg(" Icon\n");
            i18n_14 = MSG_EXTERNAL_1369743847649479916$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_TEST_BUTTON_TEST_COMPONENT_TS_15;
          } else {
            i18n_14 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fba3095c0b882037f6640665af3184031ee980ac5\u241F1369743847649479916: Icon\n"])));
          }

          return [["id", "is-repeat-off", "type", "radio", "value", "false", 3, "ngModel", "ngModelChange"], ["id", "is-repeat-on", "type", "radio", "value", "true", 3, "ngModel", "ngModelChange"], ["id", "nui-demo-click-results"], ["id", "nui-demo-up-btn", "nui-button", "", "type", "button", "icon", "caret-up", 3, "isRepeat", "click"], ["id", "nui-demo-primary-compact-btn", "nui-button", "", "type", "button", "size", "compact", "displayStyle", "primary"], i18n_0, ["id", "nui-demo-primary-large-plus-icon-btn", "nui-button", "", "type", "button", "size", "large", "displayStyle", "primary", "icon", "add", 3, "iconRight"], i18n_2, ["id", "nui-demo-primary-large-plus-icon-disabled-btn", "nui-button", "", "type", "button", "size", "large", "displayStyle", "primary", "icon", "add", 3, "iconRight", "disabled"], i18n_4, ["id", "nui-demo-primary-large-plus-icon-busy-btn", "nui-button", "", "type", "button", "size", "large", "displayStyle", "primary", "icon", "add", 3, "iconRight", "isBusy"], i18n_6, ["nui-button", "", "id", "nui-demo-default-compact-btn", "type", "button", "size", "compact", "displayStyle", "default", "icon", "add"], i18n_8, ["id", "nui-default-large-btn", "nui-button", "", "type", "button", "size", "large", "displayStyle", "default", "icon", "add", 1, "testClass"], i18n_10, ["id", "nui-demo-action-compact-btn", "nui-button", "", "type", "button", "size", "compact", "displayStyle", "action"], i18n_12, ["id", "nui-demo-btn-with-icon", "nui-button", "", "type", "button", "icon", "add"], i18n_14, ["id", "nui-demo-long-text-btn"]];
        },
        template: function ButtonTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonTestComponent_Template_input_ngModelChange_0_listener($event) {
              return ctx.isRepeat = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ButtonTestComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.isRepeat = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonTestComponent_Template_button_click_4_listener() {
              return ctx.onCountUpClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](18, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](20, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nui-with-button-long-text-example", 20);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isRepeat);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isRepeat);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isRepeat", ctx.isRepeat === "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true)("isBusy", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _button_long_text_button_with_long_text_example_component__WEBPACK_IMPORTED_MODULE_3__["ButtonWithLongTextExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "JtML":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon/button-with-icon.example.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JtML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" icon=\"add\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "KSXG":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-size/button-size.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KSXG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-size-example\",\n    templateUrl: \"./button-size.example.component.html\",\n})\nexport class ButtonSizeExampleComponent {}\n";
      /***/
    },

    /***/
    "LaiG":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-docs/button-docs.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LaiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-docs-example\",\n    templateUrl: \"./button-docs.example.component.html\",\n})\nexport class ButtonDocsComponent {}\n";
      /***/
    },

    /***/
    "M9sE":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-group/button-group.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M9sE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-group-example\",\n    templateUrl: \"./button-group.example.component.html\",\n})\nexport class ButtonGroupExampleComponent {}\n";
      /***/
    },

    /***/
    "NOaf":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-repeatable/button-repeatable.example.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NOaf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button\n    type=\"button\"\n    [isRepeat]=\"true\"\n    displayStyle=\"action\"\n    icon=\"caret-up\"\n    (click)=\"onCountUpClick()\">\n</button>\n<button nui-button\n    type=\"button\"\n    [isRepeat]=\"true\"\n    displayStyle=\"action\"\n    icon=\"caret-down\"\n    (click)=\"onCountDownClick()\">\n</button>\n<span class=\"nui-text-default\">{{count}}</span>\n";
      /***/
    },

    /***/
    "P+hW":
    /*!**************************************************!*\
      !*** ./demo/src/components/demo/button/index.ts ***!
      \**************************************************/

    /*! exports provided: ButtonDocsComponent, ButtonTestComponent, ButtonBasicExampleComponent, ButtonBusyExampleComponent, ButtonDisplayStylePrimaryExampleComponent, ButtonDisplayStyleActionExampleComponent, ButtonDisplayStyleDestructiveExampleComponent, ButtonRepeatableExampleComponent, ButtonSizeExampleComponent, ButtonWithIconExampleComponent, ButtonWithIconOnlyExampleComponent, ButtonWithIconRightExampleComponent, ButtonWithIconCustomColorExampleComponent, ButtonGroupExampleComponent, ButtonVisualTestComponent, ButtonWithLongTextExampleComponent */

    /***/
    function PHW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _button_docs_button_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./button-docs/button-docs.example.component */
      "ZCMx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonDocsComponent", function () {
        return _button_docs_button_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["ButtonDocsComponent"];
      });
      /* harmony import */


      var _button_test_button_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./button-test/button-test.component */
      "J4Gl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonTestComponent", function () {
        return _button_test_button_test_component__WEBPACK_IMPORTED_MODULE_1__["ButtonTestComponent"];
      });
      /* harmony import */


      var _button_basic_button_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./button-basic/button-basic.example.component */
      "tJT6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonBasicExampleComponent", function () {
        return _button_basic_button_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ButtonBasicExampleComponent"];
      });
      /* harmony import */


      var _button_busy_button_busy_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./button-busy/button-busy.example.component */
      "YCta");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonBusyExampleComponent", function () {
        return _button_busy_button_busy_example_component__WEBPACK_IMPORTED_MODULE_3__["ButtonBusyExampleComponent"];
      });
      /* harmony import */


      var _button_display_style_primary_button_display_style_primary_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./button-display-style-primary/button-display-style-primary.example.component */
      "sLaO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonDisplayStylePrimaryExampleComponent", function () {
        return _button_display_style_primary_button_display_style_primary_example_component__WEBPACK_IMPORTED_MODULE_4__["ButtonDisplayStylePrimaryExampleComponent"];
      });
      /* harmony import */


      var _button_display_style_action_button_display_style_action_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./button-display-style-action/button-display-style-action.example.component */
      "Dw5z");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonDisplayStyleActionExampleComponent", function () {
        return _button_display_style_action_button_display_style_action_example_component__WEBPACK_IMPORTED_MODULE_5__["ButtonDisplayStyleActionExampleComponent"];
      });
      /* harmony import */


      var _button_display_style_destructive_button_display_style_destructive_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./button-display-style-destructive/button-display-style-destructive.example.component */
      "IqKK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonDisplayStyleDestructiveExampleComponent", function () {
        return _button_display_style_destructive_button_display_style_destructive_example_component__WEBPACK_IMPORTED_MODULE_6__["ButtonDisplayStyleDestructiveExampleComponent"];
      });
      /* harmony import */


      var _button_repeatable_button_repeatable_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./button-repeatable/button-repeatable.example.component */
      "2JKq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonRepeatableExampleComponent", function () {
        return _button_repeatable_button_repeatable_example_component__WEBPACK_IMPORTED_MODULE_7__["ButtonRepeatableExampleComponent"];
      });
      /* harmony import */


      var _button_size_button_size_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./button-size/button-size.example.component */
      "H/Or");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonSizeExampleComponent", function () {
        return _button_size_button_size_example_component__WEBPACK_IMPORTED_MODULE_8__["ButtonSizeExampleComponent"];
      });
      /* harmony import */


      var _button_with_icon_button_with_icon_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./button-with-icon/button-with-icon.example.component */
      "s70P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconExampleComponent", function () {
        return _button_with_icon_button_with_icon_example_component__WEBPACK_IMPORTED_MODULE_9__["ButtonWithIconExampleComponent"];
      });
      /* harmony import */


      var _button_with_icon_only_button_with_icon_only_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./button-with-icon-only/button-with-icon-only.example.component */
      "frM2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconOnlyExampleComponent", function () {
        return _button_with_icon_only_button_with_icon_only_example_component__WEBPACK_IMPORTED_MODULE_10__["ButtonWithIconOnlyExampleComponent"];
      });
      /* harmony import */


      var _button_with_icon_right_button_with_icon_right_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./button-with-icon-right/button-with-icon-right.example.component */
      "huVn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconRightExampleComponent", function () {
        return _button_with_icon_right_button_with_icon_right_example_component__WEBPACK_IMPORTED_MODULE_11__["ButtonWithIconRightExampleComponent"];
      });
      /* harmony import */


      var _button_with_icon_custom_color_button_with_icon_custom_color_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./button-with-icon-custom-color/button-with-icon-custom-color.example.component */
      "wY/y");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconCustomColorExampleComponent", function () {
        return _button_with_icon_custom_color_button_with_icon_custom_color_example_component__WEBPACK_IMPORTED_MODULE_12__["ButtonWithIconCustomColorExampleComponent"];
      });
      /* harmony import */


      var _button_group_button_group_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./button-group/button-group.example.component */
      "bhAQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonGroupExampleComponent", function () {
        return _button_group_button_group_example_component__WEBPACK_IMPORTED_MODULE_13__["ButtonGroupExampleComponent"];
      });
      /* harmony import */


      var _button_visual_test_button_visual_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./button-visual-test/button-visual-test.component */
      "7tVZ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonVisualTestComponent", function () {
        return _button_visual_test_button_visual_test_component__WEBPACK_IMPORTED_MODULE_14__["ButtonVisualTestComponent"];
      });
      /* harmony import */


      var _button_long_text_button_with_long_text_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./button-long-text/button-with-long-text-example.component */
      "bX81");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithLongTextExampleComponent", function () {
        return _button_long_text_button_with_long_text_example_component__WEBPACK_IMPORTED_MODULE_15__["ButtonWithLongTextExampleComponent"];
      });
      /***/

    },

    /***/
    "QqQK":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-display-style-destructive/button-display-style-destructive.example.component.ts ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QqQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-display-style-destructive-example\",\n    templateUrl: \"./button-display-style-destructive.example.component.html\",\n})\nexport class ButtonDisplayStyleDestructiveExampleComponent {}\n";
      /***/
    },

    /***/
    "SXoX":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon-custom-color/button-with-icon-custom-color.example.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SXoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" icon=\"power-on\" iconColor=\"orange\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "T82f":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-test/button-test.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T82f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-test\",\n    templateUrl: \"./button-test.component.html\",\n})\nexport class ButtonTestComponent {\n    isRepeat = \"true\";\n    count = 100;\n\n    onCountUpClick() {\n        this.count++;\n    }\n}\n";
      /***/
    },

    /***/
    "X79h":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-busy/button-busy.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X79h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" [isBusy]=\"true\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "YCta":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-busy/button-busy.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ButtonBusyExampleComponent */

    /***/
    function YCta(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonBusyExampleComponent", function () {
        return ButtonBusyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonBusyExampleComponent = function ButtonBusyExampleComponent() {
        _classCallCheck(this, ButtonBusyExampleComponent);
      };

      ButtonBusyExampleComponent.ɵfac = function ButtonBusyExampleComponent_Factory(t) {
        return new (t || ButtonBusyExampleComponent)();
      };

      ButtonBusyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonBusyExampleComponent,
        selectors: [["nui-button-busy-example"]],
        decls: 2,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_BUSY_BUTTON_BUSY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_BUSY_BUTTON_BUSY_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", 3, "isBusy"], i18n_0];
        },
        template: function ButtonBusyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBusy", true);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ZCMx":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-docs/button-docs.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ButtonDocsComponent */

    /***/
    function ZCMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDocsComponent", function () {
        return ButtonDocsComponent;
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


      var _button_basic_button_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../button-basic/button-basic.example.component */
      "tJT6");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _button_display_style_primary_button_display_style_primary_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../button-display-style-primary/button-display-style-primary.example.component */
      "sLaO");
      /* harmony import */


      var _button_display_style_action_button_display_style_action_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../button-display-style-action/button-display-style-action.example.component */
      "Dw5z");
      /* harmony import */


      var _button_display_style_destructive_button_display_style_destructive_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../button-display-style-destructive/button-display-style-destructive.example.component */
      "IqKK");
      /* harmony import */


      var _button_size_button_size_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../button-size/button-size.example.component */
      "H/Or");
      /* harmony import */


      var _button_long_text_button_with_long_text_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../button-long-text/button-with-long-text-example.component */
      "bX81");
      /* harmony import */


      var _button_with_icon_button_with_icon_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../button-with-icon/button-with-icon.example.component */
      "s70P");
      /* harmony import */


      var _button_with_icon_right_button_with_icon_right_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../button-with-icon-right/button-with-icon-right.example.component */
      "huVn");
      /* harmony import */


      var _button_with_icon_custom_color_button_with_icon_custom_color_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../button-with-icon-custom-color/button-with-icon-custom-color.example.component */
      "wY/y");
      /* harmony import */


      var _button_with_icon_only_button_with_icon_only_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../button-with-icon-only/button-with-icon-only.example.component */
      "frM2");
      /* harmony import */


      var _button_repeatable_button_repeatable_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../button-repeatable/button-repeatable.example.component */
      "2JKq");
      /* harmony import */


      var _button_busy_button_busy_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../button-busy/button-busy.example.component */
      "YCta");
      /* harmony import */


      var _button_group_button_group_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../button-group/button-group.example.component */
      "bhAQ");

      var ButtonDocsComponent = function ButtonDocsComponent() {
        _classCallCheck(this, ButtonDocsComponent);
      };

      ButtonDocsComponent.ɵfac = function ButtonDocsComponent_Factory(t) {
        return new (t || ButtonDocsComponent)();
      };

      ButtonDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonDocsComponent,
        selectors: [["nui-button-docs-example"]],
        decls: 180,
        vars: 0,
        consts: [["filenamePrefix", "button-basic", "exampleTitle", "Basic Usage"], ["type", "warning"], ["filenamePrefix", "button-display-style-primary", "exampleTitle", "Primary"], ["filenamePrefix", "button-display-style-action", "exampleTitle", "Action"], ["filenamePrefix", "button-display-style-destructive", "exampleTitle", "Destructive"], ["filenamePrefix", "button-size", "exampleTitle", "Size"], ["filenamePrefix", "button-long-text", "exampleTitle", "Removing the Width Limitation"], ["target", "_blank", "href", "../components/IconComponent.html"], ["filenamePrefix", "button-with-icon", "exampleTitle", "Default Placement"], ["filenamePrefix", "button-with-icon-right", "exampleTitle", "Right Placement"], ["filenamePrefix", "button-with-icon-custom-color", "exampleTitle", "Custom Color"], ["filenamePrefix", "button-with-icon-only", "exampleTitle", "Icon Only"], ["filenamePrefix", "button-repeatable", "exampleTitle", "Repeat"], ["filenamePrefix", "button-busy", "exampleTitle", "Busy"], ["filenamePrefix", "button-group", "exampleTitle", "Grouping"]],
        template: function ButtonDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "nui-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " allows for easy customization of a button such as changing the size and display style, configuring an icon, making a button auto-repeatable, etc. Typically, the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nui-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " attribute is applied to the native ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " tag, but it can be applied other HTML elements as well.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "NuiButtonModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This first example demonstrates the default values for the inputs. For example, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "displayStyle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " is not being set explicitly here, so the resulting button is shown with the default styling. See the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Display Style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " section for additional display styles.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nui-button-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-message", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reminder:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " The default type of any HTML button is \"submit\". If submit behavior is not desired for your use case, be sure to set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "type=\"button\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " explicitly.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Display Style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " To override the default display style, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "displayStyle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " input to one of the following string values: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "'primary'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "'action'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "'destructive'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "nui-button-display-style-primary-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "nui-button-display-style-action-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-button-display-style-destructive-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " To override the default size, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " input to one of the following string values: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "'compact'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ", or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "'large'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-button-size-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Removing Width Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " By default all Nova buttons have a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "max-width: 250px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " set for their inner content; in case that width is exceeded, their content will be truncated to fit within that maximum width.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " In order to remove that restriction, you can apply the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "unlimited-width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " CSS class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " element as shown in the example below.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "nui-with-button-long-text-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Adding an Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " To add an icon, pass an icon name to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " input. For a list of supported icons and icon names see the documentation for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "IconComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "nui-button-with-icon-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " The default left placement of the icon can be overridden. To place the icon to the right of the text within the button set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "iconRight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " input to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nui-button-with-icon-right-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " You can optionally set the icon's color through the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "iconColor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " input. When no value is provided for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "iconColor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ", the default color is determined by the button's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "displayStyle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " setting.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " For ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "displayStyle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " \"primary\", the icon color is not configurable and is set to \"white\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "nui-button-with-icon-custom-color-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " To create an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "nui-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " containing only an icon, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " and leave the inner content empty.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nui-example-wrapper", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "nui-button-with-icon-only-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Repeat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " To set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "nui-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " to repeatedly emit click events while the button is pressed continuously, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "isRepeat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " input to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "nui-example-wrapper", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "nui-button-repeatable-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Busy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "nui-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " to busy by passing true to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "isBusy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nui-example-wrapper", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "nui-button-busy-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Grouping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " An adjacent set of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "nui-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " instances can be given a style indicating they are part of a group. This can be done by placing them inside a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "<span>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "<div>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " with the class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "btn-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, ". Some of the style accommodations for grouped buttons include rounded corners applied only to the left side of the left-most button and the right side of the right-most button and displaying only a single border between the buttons.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "nui-example-wrapper", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "nui-button-group-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _button_basic_button_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["ButtonBasicExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], _button_display_style_primary_button_display_style_primary_example_component__WEBPACK_IMPORTED_MODULE_4__["ButtonDisplayStylePrimaryExampleComponent"], _button_display_style_action_button_display_style_action_example_component__WEBPACK_IMPORTED_MODULE_5__["ButtonDisplayStyleActionExampleComponent"], _button_display_style_destructive_button_display_style_destructive_example_component__WEBPACK_IMPORTED_MODULE_6__["ButtonDisplayStyleDestructiveExampleComponent"], _button_size_button_size_example_component__WEBPACK_IMPORTED_MODULE_7__["ButtonSizeExampleComponent"], _button_long_text_button_with_long_text_example_component__WEBPACK_IMPORTED_MODULE_8__["ButtonWithLongTextExampleComponent"], _button_with_icon_button_with_icon_example_component__WEBPACK_IMPORTED_MODULE_9__["ButtonWithIconExampleComponent"], _button_with_icon_right_button_with_icon_right_example_component__WEBPACK_IMPORTED_MODULE_10__["ButtonWithIconRightExampleComponent"], _button_with_icon_custom_color_button_with_icon_custom_color_example_component__WEBPACK_IMPORTED_MODULE_11__["ButtonWithIconCustomColorExampleComponent"], _button_with_icon_only_button_with_icon_only_example_component__WEBPACK_IMPORTED_MODULE_12__["ButtonWithIconOnlyExampleComponent"], _button_repeatable_button_repeatable_example_component__WEBPACK_IMPORTED_MODULE_13__["ButtonRepeatableExampleComponent"], _button_busy_button_busy_example_component__WEBPACK_IMPORTED_MODULE_14__["ButtonBusyExampleComponent"], _button_group_button_group_example_component__WEBPACK_IMPORTED_MODULE_15__["ButtonGroupExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ZayP":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-visual-test/button-visual-test.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZayP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-visual\",\n    templateUrl: \"./button-visual-test.component.html\",\n})\nexport class ButtonVisualTestComponent {\n    public busy: boolean;\n}\n";
      /***/
    },

    /***/
    "ZjBk":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-visual-test/button-visual-test.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZjBk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\"><h3>Basic button</h3></div>\n    <div class=\"row\"><button nui-button id=\"basic-button\" type=\"button\">Click me!</button></div>\n\n    <div class=\"row\"><h3>Primary, Action, and Destructive buttons</h3></div>\n    <div class=\"row\">\n        <button nui-button id=\"primary-button\" type=\"button\" displayStyle=\"primary\">Click me!</button>\n        <button nui-button id=\"action-button\" type=\"button\" displayStyle=\"action\">Click me!</button>\n        <button nui-button type=\"button\" displayStyle=\"destructive\">Click me!</button>\n    </div>\n\n    <div class=\"row\"><h3>Sized buttons</h3></div>\n    <!-- nui-button is vulnerable to bootstrap 'row' class which sets 'display: flex'. Consider removing the inline style \n         from the following div either when the issue is resolved or shadow dom is applied to the component-->\n    <div class=\"row\" style=\"display: block\">\n        <button nui-button type=\"button\" size=\"compact\">Compact</button>\n        <button nui-button type=\"button\">Default</button>\n        <button nui-button type=\"button\" size=\"large\">Large</button>\n    </div>\n\n    <div class=\"row\"><h3>Buttons with icons</h3></div>\n    <div class=\"row\" style=\"display: block\">\n        <button nui-button type=\"button\" icon=\"add\">Click me!</button>\n        <button nui-button type=\"button\" icon=\"reload\" [iconRight]=\"true\">Click me!</button>\n        <button nui-button type=\"button\" icon=\"power-on\" iconColor=\"orange\">Click me!</button>\n        <button nui-button type=\"button\" icon=\"star-full\"></button>\n        <div class=\"w-100 mt-2\"></div>\n        <button nui-button id=\"primary-button\" type=\"button\" displayStyle=\"primary\" icon=\"add\">Click me!</button>\n        <button nui-button id=\"action-button\" type=\"button\" displayStyle=\"action\" icon=\"status_warning\">Click me!</button>\n        <button nui-button type=\"button\" displayStyle=\"destructive\" icon=\"printer\">Click me!</button>\n        <div class=\"w-100 mt-2\"></div>\n        <button nui-button type=\"button\" size=\"large\" displayStyle=\"primary\" icon=\"add\" [iconRight]=\"true\" [disabled]=\"true\" i18n>Disabled Primary</button>\n        <button nui-button type=\"button\" size=\"large\" displayStyle=\"action\" icon=\"status_warning\" [iconRight]=\"true\" [disabled]=\"true\" i18n>Disabled Action</button>\n        <button nui-button type=\"button\" size=\"large\" displayStyle=\"destructive\" icon=\"printer\" [iconRight]=\"true\" [disabled]=\"true\" i18n>Disabled Destructive</button>\n\n    </div>\n\n    <div class=\"row\" style=\"display: block\"><h3>Sized buttons with icons</h3>\n        <button nui-button type=\"button\" size=\"compact\" icon=\"add\">Compact + icon</button>\n        <button nui-button type=\"button\" icon=\"add\">Default + icon</button>\n        <button nui-button type=\"button\" size=\"large\" icon=\"add\">Large + icon</button>\n    </div>\n\n    <div class=\"row\"><h3>Buttons with repeat</h3></div>\n    <div class=\"row\">\n        <button nui-button type=\"button\" [isRepeat]=\"true\" displayStyle=\"action\" icon=\"caret-up\"></button>\n        <button nui-button type=\"button\" [isRepeat]=\"true\" displayStyle=\"action\" icon=\"caret-down\"></button>\n    </div>\n\n    <div class=\"row\"><h3>Button with busy</h3></div>\n    <div class=\"row\"><button nui-button type=\"button\" [isBusy]=\"true\">Click me!</button></div>\n\n    <div class=\"row\"><h3>Buttons in a group</h3></div>\n    <div class=\"row\">\n        <div class=\"btn-group\">\n            <button nui-button type=\"button\">First</button>\n            <button nui-button type=\"button\">Second</button>\n            <button nui-button type=\"button\">Third</button>\n            <button nui-button type=\"button\">Fourth</button>\n            <button nui-button type=\"button\">Fifth</button>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "ZsAX":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-test/button-test.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZsAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<input id=\"is-repeat-off\" type=\"radio\" [(ngModel)]=\"isRepeat\" value=\"false\" />\n<input id=\"is-repeat-on\" type=\"radio\" [(ngModel)]=\"isRepeat\" value=\"true\" />\n<span id=\"nui-demo-click-results\">{{count}}</span>\n\n<button id=\"nui-demo-up-btn\" nui-button type=\"button\" [isRepeat]=\"isRepeat === 'true'\" icon=\"caret-up\" (click)=\"onCountUpClick()\">\n</button>\n<button id=\"nui-demo-primary-compact-btn\" nui-button type=\"button\" size=\"compact\" displayStyle=\"primary\" i18n>\n    Compact\n</button>\n<button id=\"nui-demo-primary-large-plus-icon-btn\" nui-button type=\"button\" size=\"large\" displayStyle=\"primary\" icon=\"add\" [iconRight]=\"true\" i18n>\n    Large + icon\n</button>\n<button id=\"nui-demo-primary-large-plus-icon-disabled-btn\" nui-button type=\"button\" size=\"large\" displayStyle=\"primary\" icon=\"add\" [iconRight]=\"true\"\n        [disabled]=\"true\" i18n>\n    Disabled\n</button>\n<button id=\"nui-demo-primary-large-plus-icon-busy-btn\" nui-button type=\"button\" size=\"large\" displayStyle=\"primary\" icon=\"add\" [iconRight]=\"true\"\n        [isBusy]=\"true\" i18n>\n    Busy\n</button>\n<button nui-button id=\"nui-demo-default-compact-btn\" type=\"button\" size=\"compact\" displayStyle=\"default\" icon=\"add\" i18n>\n    Compact\n</button>\n<button id=\"nui-default-large-btn\" nui-button class=\"testClass\" type=\"button\" size=\"large\" displayStyle=\"default\" icon=\"add\" i18n>\n    Large + icon\n</button>\n<button id=\"nui-demo-action-compact-btn\" nui-button type=\"button\" size=\"compact\" displayStyle=\"action\" i18n>\n    Compact\n</button>\n<button id=\"nui-demo-btn-with-icon\" nui-button type=\"button\" icon=\"add\" i18n>\n    Icon\n</button>\n\n<nui-with-button-long-text-example id=\"nui-demo-long-text-btn\"></nui-with-button-long-text-example>\n";
      /***/
    },

    /***/
    "bNqU":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-display-style-destructive/button-display-style-destructive.example.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bNqU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" displayStyle=\"destructive\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "bVn8":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon-right/button-with-icon-right.example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVn8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-with-icon-right-example\",\n    templateUrl: \"./button-with-icon-right.example.component.html\",\n})\nexport class ButtonWithIconRightExampleComponent {}\n";
      /***/
    },

    /***/
    "bX81":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-long-text/button-with-long-text-example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ButtonWithLongTextExampleComponent */

    /***/
    function bX81(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithLongTextExampleComponent", function () {
        return ButtonWithLongTextExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonWithLongTextExampleComponent = /*#__PURE__*/function () {
        function ButtonWithLongTextExampleComponent() {
          _classCallCheck(this, ButtonWithLongTextExampleComponent);

          this.disableWidthRestriction = true;
        }

        _createClass(ButtonWithLongTextExampleComponent, [{
          key: "toggleWidthRestriction",
          value: function toggleWidthRestriction() {
            this.disableWidthRestriction = !this.disableWidthRestriction;
          }
        }]);

        return ButtonWithLongTextExampleComponent;
      }();

      ButtonWithLongTextExampleComponent.ɵfac = function ButtonWithLongTextExampleComponent_Factory(t) {
        return new (t || ButtonWithLongTextExampleComponent)();
      };

      ButtonWithLongTextExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonWithLongTextExampleComponent,
        selectors: [["nui-with-button-long-text-example"]],
        decls: 2,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8136485690875748959$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_LONG_TEXT_BUTTON_WITH_LONG_TEXT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Toggle button's max-width restriction with a press of a button\n");
            i18n_0 = MSG_EXTERNAL_8136485690875748959$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_LONG_TEXT_BUTTON_WITH_LONG_TEXT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241F38d548daad69d87e4528c701ac532f0028f43714\u241F8136485690875748959: Toggle button's max-width restriction with a press of a button\n"])));
          }

          return [["nui-button", "", "type", "button", 3, "click"], i18n_0];
        },
        template: function ButtonWithLongTextExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonWithLongTextExampleComponent_Template_button_click_0_listener() {
              return ctx.toggleWidthRestriction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("unlimited-width", ctx.disableWidthRestriction);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "bhAQ":
    /*!****************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-group/button-group.example.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ButtonGroupExampleComponent */

    /***/
    function bhAQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonGroupExampleComponent", function () {
        return ButtonGroupExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonGroupExampleComponent = function ButtonGroupExampleComponent() {
        _classCallCheck(this, ButtonGroupExampleComponent);
      };

      ButtonGroupExampleComponent.ɵfac = function ButtonGroupExampleComponent_Factory(t) {
        return new (t || ButtonGroupExampleComponent)();
      };

      ButtonGroupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonGroupExampleComponent,
        selectors: [["nui-button-group-example"]],
        decls: 11,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("First");
            i18n_0 = MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241Ff2f852318759c6396b5d3d17031d53817d7b38cc\u241F2241508602425256033:First"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4791345740322435630$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Second");
            i18n_2 = MSG_EXTERNAL_4791345740322435630$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241Ff6bbd50fdb03237c630dbbf141ef4b5e61746220\u241F4791345740322435630:Second"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7328891136796337314$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Third");
            i18n_4 = MSG_EXTERNAL_7328891136796337314$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241F9777c63a86244efea1c9b3fb018fd2531d019927\u241F7328891136796337314:Third"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8042630356363435217$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Fourth");
            i18n_6 = MSG_EXTERNAL_8042630356363435217$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([":\u241Fb9b8e54df4aa10d2a655c0b501668e3986f0db22\u241F8042630356363435217:Fourth"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_741369556528226179$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Fifth");
            i18n_8 = MSG_EXTERNAL_741369556528226179$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_GROUP_BUTTON_GROUP_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241F77293ef6aed5866dafe7f933e6edc97b47d307ae\u241F741369556528226179:Fifth"])));
          }

          return [[1, "btn-group"], ["nui-button", "", "type", "button"], i18n_0, i18n_2, i18n_4, i18n_6, i18n_8];
        },
        template: function ButtonGroupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "cuqC":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-docs/button-docs.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cuqC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>nui-button</code> allows for easy customization of a button such as changing the size and display style,\n    configuring an icon, making a button auto-repeatable, etc. Typically, the <code>nui-button</code> attribute is\n    applied to the native <code>button</code> tag, but it can be applied other HTML elements as well.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiButtonModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    This first example demonstrates the default values for the inputs. For example, <code>displayStyle</code> is not\n    being set explicitly here, so the resulting button is shown with the default styling. See the\n    <strong>Display Style</strong> section for additional display styles.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-basic\" exampleTitle=\"Basic Usage\">\n    <nui-button-basic-example></nui-button-basic-example>\n</nui-example-wrapper>\n\n<nui-message type=\"warning\">\n    <strong>Reminder:</strong> The default type of any HTML button is \"submit\". If submit behavior is not desired for\n    your use case, be sure to set <code>type=\"button\"</code> explicitly.\n</nui-message>\n\n<h2>Display Style</h2>\n<p>\n    To override the default display style, set the <code>displayStyle</code> input to one of the following string\n    values: <code>'primary'</code>, <code>'action'</code>, or <code>'destructive'</code>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-display-style-primary\" exampleTitle=\"Primary\">\n    <nui-button-display-style-primary-example></nui-button-display-style-primary-example>\n</nui-example-wrapper>\n\n<nui-example-wrapper filenamePrefix=\"button-display-style-action\" exampleTitle=\"Action\">\n    <nui-button-display-style-action-example></nui-button-display-style-action-example>\n</nui-example-wrapper>\n\n<nui-example-wrapper filenamePrefix=\"button-display-style-destructive\" exampleTitle=\"Destructive\">\n    <nui-button-display-style-destructive-example></nui-button-display-style-destructive-example>\n</nui-example-wrapper>\n\n<h2>Size</h2>\n<p>\n    To override the default size, set the <code>size</code> input to one of the following string values:\n    <code>'compact'</code>, or <code>'large'</code>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-size\" exampleTitle=\"Size\">\n    <nui-button-size-example></nui-button-size-example>\n</nui-example-wrapper>\n\n<h2>Removing Width Restriction</h2>\n<p>\n    By default all Nova buttons have a <code>max-width: 250px</code> set for their inner content;\n    in case that width is exceeded, their content will be truncated to fit within that maximum width.\n</p>\n<p>\n    In order to remove that restriction, you can apply the <code>unlimited-width</code> CSS class\n    to the <code>button</code> element as shown in the example below.\n</p>\n<nui-example-wrapper filenamePrefix=\"button-long-text\" exampleTitle=\"Removing the Width Limitation\">\n    <nui-with-button-long-text-example></nui-with-button-long-text-example>\n</nui-example-wrapper>\n\n\n<h2>Adding an Icon</h2>\n<p>\n    To add an icon, pass an icon name to the <code>icon</code> input. For a list of supported icons and icon names see\n    the documentation for <a target=\"_blank\" href=\"../components/IconComponent.html\">IconComponent</a>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-with-icon\" exampleTitle=\"Default Placement\">\n    <nui-button-with-icon-example></nui-button-with-icon-example>\n</nui-example-wrapper>\n\n<p>\n    The default left placement of the icon can be overridden. To place the icon to the right of the text within the\n    button set the <code>iconRight</code> input to true.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-with-icon-right\" exampleTitle=\"Right Placement\">\n    <nui-button-with-icon-right-example></nui-button-with-icon-right-example>\n</nui-example-wrapper>\n\n<p>\n    You can optionally set the icon's color through the <code>iconColor</code> input. When no value is provided for\n    <code>iconColor</code>, the default color is determined by the button's <code>displayStyle</code> setting.\n</p>\n\n<p>\n    <strong>Note:</strong> For <code>displayStyle</code> \"primary\", the icon color is not configurable and is set to\n    \"white\".\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-with-icon-custom-color\" exampleTitle=\"Custom Color\">\n    <nui-button-with-icon-custom-color-example></nui-button-with-icon-custom-color-example>\n</nui-example-wrapper>\n\n<p>\n    To create an <code>nui-button</code> containing only an icon, set the <code>input</code> and leave the inner\n    content empty.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-with-icon-only\" exampleTitle=\"Icon Only\">\n    <nui-button-with-icon-only-example></nui-button-with-icon-only-example>\n</nui-example-wrapper>\n\n<h2>Repeat</h2>\n<p>\n    To set <code>nui-button</code> to repeatedly emit click events while the button is pressed continuously, set the\n    <code>isRepeat</code> input to true.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-repeatable\" exampleTitle=\"Repeat\">\n    <nui-button-repeatable-example></nui-button-repeatable-example>\n</nui-example-wrapper>\n\n<h2>Busy</h2>\n<p>\n    Set <code>nui-button</code> to busy by passing true to the <code>isBusy</code> input.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-busy\" exampleTitle=\"Busy\">\n    <nui-button-busy-example></nui-button-busy-example>\n</nui-example-wrapper>\n\n<h2>Grouping</h2>\n<p>\n    An adjacent set of <code>nui-button</code> instances can be given a style indicating they are part of a group. This\n    can be done by placing them inside a <code>&lt;span&gt;</code> or <code>&lt;div&gt;</code> with the class\n    <code>btn-group</code>. Some of the style accommodations for grouped buttons include rounded corners applied only\n    to the left side of the left-most button and the right side of the right-most button and displaying only a single\n    border between the buttons.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"button-group\" exampleTitle=\"Grouping\">\n    <nui-button-group-example></nui-button-group-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "etyZ":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/button/button.module.ts ***!
      \**********************************************************/

    /*! exports provided: ButtonModule */

    /***/
    function etyZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonModule", function () {
        return ButtonModule;
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
      "P+hW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ButtonDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "button-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ButtonTestComponent"]
      }, {
        path: "button-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["ButtonVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ButtonModule = function ButtonModule() {
        _classCallCheck(this, ButtonModule);
      };

      ButtonModule.ɵfac = function ButtonModule_Factory(t) {
        return new (t || ButtonModule)();
      };

      ButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ButtonModule
      });
      ButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("hRAe");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ButtonModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["ButtonDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonDisplayStyleActionExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonDisplayStyleDestructiveExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonDisplayStylePrimaryExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonGroupExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonRepeatableExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonBusyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonSizeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonWithIconExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonWithIconRightExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonWithIconCustomColorExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonWithIconOnlyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ButtonWithLongTextExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "fl7e":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon-only/button-with-icon-only.example.component.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fl7e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-with-icon-only-example\",\n    templateUrl: \"./button-with-icon-only.example.component.html\",\n})\nexport class ButtonWithIconOnlyExampleComponent {}\n";
      /***/
    },

    /***/
    "frM2":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-with-icon-only/button-with-icon-only.example.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ButtonWithIconOnlyExampleComponent */

    /***/
    function frM2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconOnlyExampleComponent", function () {
        return ButtonWithIconOnlyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonWithIconOnlyExampleComponent = function ButtonWithIconOnlyExampleComponent() {
        _classCallCheck(this, ButtonWithIconOnlyExampleComponent);
      };

      ButtonWithIconOnlyExampleComponent.ɵfac = function ButtonWithIconOnlyExampleComponent_Factory(t) {
        return new (t || ButtonWithIconOnlyExampleComponent)();
      };

      ButtonWithIconOnlyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonWithIconOnlyExampleComponent,
        selectors: [["nui-button-with-icon-only-example"]],
        decls: 1,
        vars: 0,
        consts: [["nui-button", "", "type", "button", "icon", "star-full"]],
        template: function ButtonWithIconOnlyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 0);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "hRAe":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/button sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function hRAe(module, exports, __webpack_require__) {
      var map = {
        "./button-basic/button-basic.example.component.html": "3XmR",
        "./button-basic/button-basic.example.component.ts": "tQ2/",
        "./button-busy/button-busy.example.component.html": "X79h",
        "./button-busy/button-busy.example.component.ts": "Ac4+",
        "./button-display-style-action/button-display-style-action.example.component.html": "w1An",
        "./button-display-style-action/button-display-style-action.example.component.ts": "3LVe",
        "./button-display-style-destructive/button-display-style-destructive.example.component.html": "bNqU",
        "./button-display-style-destructive/button-display-style-destructive.example.component.ts": "QqQK",
        "./button-display-style-primary/button-display-style-primary.example.component.html": "2aQW",
        "./button-display-style-primary/button-display-style-primary.example.component.ts": "uHEg",
        "./button-docs/button-docs.example.component.html": "cuqC",
        "./button-docs/button-docs.example.component.ts": "LaiG",
        "./button-group/button-group.example.component.html": "ptgC",
        "./button-group/button-group.example.component.ts": "M9sE",
        "./button-long-text/button-with-long-text-example.component.html": "DJQC",
        "./button-long-text/button-with-long-text-example.component.ts": "4qDP",
        "./button-repeatable/button-repeatable.example.component.html": "NOaf",
        "./button-repeatable/button-repeatable.example.component.ts": "rcXP",
        "./button-size/button-size.example.component.html": "9oyA",
        "./button-size/button-size.example.component.ts": "KSXG",
        "./button-test/button-test.component.html": "ZsAX",
        "./button-test/button-test.component.ts": "T82f",
        "./button-visual-test/button-visual-test.component.html": "ZjBk",
        "./button-visual-test/button-visual-test.component.ts": "ZayP",
        "./button-with-icon-custom-color/button-with-icon-custom-color.example.component.html": "SXoX",
        "./button-with-icon-custom-color/button-with-icon-custom-color.example.component.ts": "rze8",
        "./button-with-icon-only/button-with-icon-only.example.component.html": "CzVH",
        "./button-with-icon-only/button-with-icon-only.example.component.ts": "fl7e",
        "./button-with-icon-right/button-with-icon-right.example.component.html": "3lLK",
        "./button-with-icon-right/button-with-icon-right.example.component.ts": "bVn8",
        "./button-with-icon/button-with-icon.example.component.html": "JtML",
        "./button-with-icon/button-with-icon.example.component.ts": "uvUU",
        "./button.module.ts": "rsMe",
        "./index.ts": "3LtH"
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
      webpackContext.id = "hRAe";
      /***/
    },

    /***/
    "huVn":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-with-icon-right/button-with-icon-right.example.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ButtonWithIconRightExampleComponent */

    /***/
    function huVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconRightExampleComponent", function () {
        return ButtonWithIconRightExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonWithIconRightExampleComponent = function ButtonWithIconRightExampleComponent() {
        _classCallCheck(this, ButtonWithIconRightExampleComponent);
      };

      ButtonWithIconRightExampleComponent.ɵfac = function ButtonWithIconRightExampleComponent_Factory(t) {
        return new (t || ButtonWithIconRightExampleComponent)();
      };

      ButtonWithIconRightExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonWithIconRightExampleComponent,
        selectors: [["nui-button-with-icon-right-example"]],
        decls: 2,
        vars: 1,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_WITH_ICON_RIGHT_BUTTON_WITH_ICON_RIGHT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_WITH_ICON_RIGHT_BUTTON_WITH_ICON_RIGHT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", "icon", "reload", 3, "iconRight"], i18n_0];
        },
        template: function ButtonWithIconRightExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", true);
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ptgC":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-group/button-group.example.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ptgC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"btn-group\">\n    <button nui-button type=\"button\" i18n>First</button>\n    <button nui-button type=\"button\" i18n>Second</button>\n    <button nui-button type=\"button\" i18n>Third</button>\n    <button nui-button type=\"button\" i18n>Fourth</button>\n    <button nui-button type=\"button\" i18n>Fifth</button>\n</div>\n";
      /***/
    },

    /***/
    "rcXP":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-repeatable/button-repeatable.example.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rcXP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-repeatable-example\",\n    templateUrl: \"./button-repeatable.example.component.html\",\n})\nexport class ButtonRepeatableExampleComponent {\n    count = 100;\n\n    onCountUpClick() {\n        this.count++;\n    }\n\n    onCountDownClick() {\n        this.count--;\n    }\n}\n";
      /***/
    },

    /***/
    "rsMe":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rsMe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    ButtonBasicExampleComponent,\n    ButtonBusyExampleComponent,\n    ButtonDisplayStyleActionExampleComponent,\n    ButtonDisplayStyleDestructiveExampleComponent,\n    ButtonDisplayStylePrimaryExampleComponent,\n    ButtonDocsComponent,\n    ButtonGroupExampleComponent,\n    ButtonRepeatableExampleComponent,\n    ButtonSizeExampleComponent,\n    ButtonTestComponent,\n    ButtonVisualTestComponent,\n    ButtonWithIconCustomColorExampleComponent,\n    ButtonWithIconExampleComponent,\n    ButtonWithIconOnlyExampleComponent,\n    ButtonWithIconRightExampleComponent,\n    ButtonWithLongTextExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ButtonDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"button-test\",\n        component: ButtonTestComponent,\n    },\n    {\n        path: \"button-visual-test\",\n        component: ButtonVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        ButtonDocsComponent,\n        ButtonDisplayStyleActionExampleComponent,\n        ButtonDisplayStyleDestructiveExampleComponent,\n        ButtonDisplayStylePrimaryExampleComponent,\n        ButtonGroupExampleComponent,\n        ButtonRepeatableExampleComponent,\n        ButtonBasicExampleComponent,\n        ButtonBusyExampleComponent,\n        ButtonSizeExampleComponent,\n        ButtonTestComponent,\n        ButtonVisualTestComponent,\n        ButtonWithIconExampleComponent,\n        ButtonWithIconRightExampleComponent,\n        ButtonWithIconCustomColorExampleComponent,\n        ButtonWithIconOnlyExampleComponent,\n        ButtonWithLongTextExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ButtonModule {\n}\n";
      /***/
    },

    /***/
    "rze8":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon-custom-color/button-with-icon-custom-color.example.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rze8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-with-icon-custom-color-example\",\n    templateUrl: \"./button-with-icon-custom-color.example.component.html\",\n})\nexport class ButtonWithIconCustomColorExampleComponent {}\n";
      /***/
    },

    /***/
    "s70P":
    /*!************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-with-icon/button-with-icon.example.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ButtonWithIconExampleComponent */

    /***/
    function s70P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconExampleComponent", function () {
        return ButtonWithIconExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonWithIconExampleComponent = function ButtonWithIconExampleComponent() {
        _classCallCheck(this, ButtonWithIconExampleComponent);
      };

      ButtonWithIconExampleComponent.ɵfac = function ButtonWithIconExampleComponent_Factory(t) {
        return new (t || ButtonWithIconExampleComponent)();
      };

      ButtonWithIconExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonWithIconExampleComponent,
        selectors: [["nui-button-with-icon-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_WITH_ICON_BUTTON_WITH_ICON_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_WITH_ICON_BUTTON_WITH_ICON_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", "icon", "add"], i18n_0];
        },
        template: function ButtonWithIconExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "sLaO":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-display-style-primary/button-display-style-primary.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ButtonDisplayStylePrimaryExampleComponent */

    /***/
    function sLaO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDisplayStylePrimaryExampleComponent", function () {
        return ButtonDisplayStylePrimaryExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonDisplayStylePrimaryExampleComponent = function ButtonDisplayStylePrimaryExampleComponent() {
        _classCallCheck(this, ButtonDisplayStylePrimaryExampleComponent);
      };

      ButtonDisplayStylePrimaryExampleComponent.ɵfac = function ButtonDisplayStylePrimaryExampleComponent_Factory(t) {
        return new (t || ButtonDisplayStylePrimaryExampleComponent)();
      };

      ButtonDisplayStylePrimaryExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonDisplayStylePrimaryExampleComponent,
        selectors: [["nui-button-display-style-primary-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_DISPLAY_STYLE_PRIMARY_BUTTON_DISPLAY_STYLE_PRIMARY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_DISPLAY_STYLE_PRIMARY_BUTTON_DISPLAY_STYLE_PRIMARY_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", "displayStyle", "primary"], i18n_0];
        },
        template: function ButtonDisplayStylePrimaryExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "tJT6":
    /*!****************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-basic/button-basic.example.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ButtonBasicExampleComponent */

    /***/
    function tJT6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonBasicExampleComponent", function () {
        return ButtonBasicExampleComponent;
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


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonBasicExampleComponent = /*#__PURE__*/function () {
        function ButtonBasicExampleComponent(toastService) {
          _classCallCheck(this, ButtonBasicExampleComponent);

          this.toastService = toastService;
        }

        _createClass(ButtonBasicExampleComponent, [{
          key: "onClick",
          value: function onClick() {
            this.toastService.info({
              message: $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Button clicked!"]))),
              title: $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }]);

        return ButtonBasicExampleComponent;
      }();

      ButtonBasicExampleComponent.ɵfac = function ButtonBasicExampleComponent_Factory(t) {
        return new (t || ButtonBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ButtonBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ButtonBasicExampleComponent,
        selectors: [["nui-button-basic-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_BASIC_BUTTON_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_BASIC_BUTTON_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", 3, "click"], i18n_0];
        },
        template: function ButtonBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonBasicExampleComponent_Template_button_click_0_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "tQ2/":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-basic/button-basic.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tQ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-button-basic-example\",\n    templateUrl: \"./button-basic.example.component.html\",\n})\nexport class ButtonBasicExampleComponent {\n    constructor(@Inject(ToastService) private toastService: ToastService) {\n    }\n\n    onClick() {\n        this.toastService.info({\n            message: $localize `Button clicked!`,\n            title: $localize `Event`,\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "uHEg":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-display-style-primary/button-display-style-primary.example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uHEg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-display-style-primary-example\",\n    templateUrl: \"./button-display-style-primary.example.component.html\",\n})\nexport class ButtonDisplayStylePrimaryExampleComponent {}\n";
      /***/
    },

    /***/
    "uvUU":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-with-icon/button-with-icon.example.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uvUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-button-with-icon-example\",\n    templateUrl: \"./button-with-icon.example.component.html\",\n})\nexport class ButtonWithIconExampleComponent {}\n";
      /***/
    },

    /***/
    "w1An":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/button/button-display-style-action/button-display-style-action.example.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w1An(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button type=\"button\" displayStyle=\"action\" i18n>Click me!</button>\n";
      /***/
    },

    /***/
    "wY/y":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/button/button-with-icon-custom-color/button-with-icon-custom-color.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: ButtonWithIconCustomColorExampleComponent */

    /***/
    function wYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonWithIconCustomColorExampleComponent", function () {
        return ButtonWithIconCustomColorExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var ButtonWithIconCustomColorExampleComponent = function ButtonWithIconCustomColorExampleComponent() {
        _classCallCheck(this, ButtonWithIconCustomColorExampleComponent);
      };

      ButtonWithIconCustomColorExampleComponent.ɵfac = function ButtonWithIconCustomColorExampleComponent_Factory(t) {
        return new (t || ButtonWithIconCustomColorExampleComponent)();
      };

      ButtonWithIconCustomColorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonWithIconCustomColorExampleComponent,
        selectors: [["nui-button-with-icon-custom-color-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_WITH_ICON_CUSTOM_COLOR_BUTTON_WITH_ICON_CUSTOM_COLOR_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Click me!");
            i18n_0 = MSG_EXTERNAL_2590927982756485133$$DEMO_SRC_COMPONENTS_DEMO_BUTTON_BUTTON_WITH_ICON_CUSTOM_COLOR_BUTTON_WITH_ICON_CUSTOM_COLOR_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral([":\u241Fb37956781d4525308454d483be8c66447da39538\u241F2590927982756485133:Click me!"])));
          }

          return [["nui-button", "", "type", "button", "icon", "power-on", "iconColor", "orange"], i18n_0];
        },
        template: function ButtonWithIconCustomColorExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-button-button-module-es5.js.map