(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-switch-switch-module"], {
    /***/
    "1OYp":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-docs/switch-docs.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OYp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p><code>&lt;nui-switch&gt;</code> is a simple toggle control that can be associated with a binary value. Use the <strong>value</strong> input to control the value.</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiSwitchModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<nui-example-wrapper filenamePrefix=\"switch-simple\" exampleTitle=\"Basic Usage\">\n     <nui-switch-simple-example></nui-switch-simple-example>\n</nui-example-wrapper>\n\n<h2>Value Change Callback</h2>\n<p>For subscribing to value-change events, use the <strong>valueChange</strong> callback</p>\n<nui-example-wrapper filenamePrefix=\"switch-value-change\" exampleTitle=\"Value Change\">\n    <nui-switch-value-change-example></nui-switch-value-change-example>\n</nui-example-wrapper>\n\n<h2>Disabled Switch</h2>\n<p>Use the <strong>disabled</strong> input to enable/disable the switch</p>\n<nui-example-wrapper filenamePrefix=\"switch-disable\" exampleTitle=\"Disable\">\n    <nui-switch-disable-example></nui-switch-disable-example>\n</nui-example-wrapper>\n\n";
      /***/
    },

    /***/
    "48/h":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-value-change/switch-value-change.example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-switch-value-change-example\",\n    templateUrl: \"./switch-value-change.example.component.html\",\n})\n\nexport class SwitchValueChangeExampleComponent {\n    @Input() isOn = true;\n    private valueChangeCount = 0;\n    public changeMessage = $localize `Value has not changed`;\n\n    constructor() {\n    }\n\n    public onValueChanged(value: boolean): void {\n        this.isOn = value;\n        ++this.valueChangeCount;\n        this.changeMessage = $localize `Value changed ${ this.valueChangeCount} times.`;\n    }\n}\n";
      /***/
    },

    /***/
    "5d9R":
    /*!******************************************************************************************!*\
      !*** ./demo/src/components/demo/switch/switch-simple/switch-simple.example.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SwitchSimpleExampleComponent */

    /***/
    function d9R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchSimpleExampleComponent", function () {
        return SwitchSimpleExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");

      var SwitchSimpleExampleComponent = function SwitchSimpleExampleComponent() {
        _classCallCheck(this, SwitchSimpleExampleComponent);

        this.isOn = true;
      };

      SwitchSimpleExampleComponent.ɵfac = function SwitchSimpleExampleComponent_Factory(t) {
        return new (t || SwitchSimpleExampleComponent)();
      };

      SwitchSimpleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwitchSimpleExampleComponent,
        selectors: [["nui-switch-simple-example"]],
        inputs: {
          isOn: "isOn"
        },
        decls: 2,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3472865780454984874$$DEMO_SRC_COMPONENTS_DEMO_SWITCH_SWITCH_SIMPLE_SWITCH_SIMPLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" {$interpolation}\n", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_3472865780454984874$$DEMO_SRC_COMPONENTS_DEMO_SWITCH_SWITCH_SIMPLE_SWITCH_SIMPLE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241Fc172c1bd2a49d42d89b4b2423b3d237983732b62\u241F3472865780454984874: ", ":INTERPOLATION:\n"])), "\uFFFD0\uFFFD");
          }

          return [["id", "nui-switch-simple-example", 3, "value", "valueChange"], i18n_0];
        },
        template: function SwitchSimpleExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-switch", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchSimpleExampleComponent_Template_nui_switch_valueChange_0_listener($event) {
              return ctx.isOn = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isOn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.isOn ? "On" : "Off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
          }
        },
        directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__["SwitchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "85Ok":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-docs/switch-docs.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-switch-docs-example\",\n    templateUrl: \"./switch-docs.example.component.html\",\n})\n\nexport class SwitchDocsExampleComponent {\n}\n";
      /***/
    },

    /***/
    "8uHc":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-visual-test/switch-visual-test.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uHc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-switch-visual\",\n    templateUrl: \"./switch-visual-test.component.html\",\n})\nexport class SwitchVisualTestComponent {\n    @Input() isOn = true;\n    @Input() isEnabled = false;\n    public isDisabled = true;\n}\n";
      /***/
    },

    /***/
    "AoZz":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-visual-test/switch-visual-test.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AoZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic switch is ON</h3>\n            <nui-switch id=\"nui-switch-simple-example\" [(value)]=\"isOn\">\n                {{isOn ? 'On' : 'Off'}}\n            </nui-switch>\n        </div>\n\n        <div class=\"col\">\n            <h3>Basic switch is ON and disabled</h3>\n            <nui-switch id=\"nui-switch-simple-example\" [(value)]=\"isOn\" [disabled]=\"isDisabled\">\n                {{isOn ? 'On' : 'Off'}}\n            </nui-switch>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic switch is OFF</h3>\n            <nui-switch id=\"nui-switch-disabled-example\" [(value)]=\"isEnabled\">{{isEnabled ? 'On' : 'Off'}}\n            </nui-switch>\n        </div>\n\n        <div class=\"col\">\n            <h3>Basic switch is OFF and disabled</h3>\n            <nui-switch id=\"nui-switch-disabled-example\" [(value)]=\"isEnabled\" [disabled]=\"isDisabled\">{{isEnabled ?\n                'On' : 'Off'}}\n            </nui-switch>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "D44T":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-test/switch-test.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D44T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-switch-test\",\n    templateUrl: \"./switch-test.component.html\",\n})\n\nexport class SwitchTestComponent {\n}\n";
      /***/
    },

    /***/
    "FfAm":
    /*!**************************************************!*\
      !*** ./demo/src/components/demo/switch/index.ts ***!
      \**************************************************/

    /*! exports provided: SwitchDocsExampleComponent, SwitchSimpleExampleComponent, SwitchDisableExampleComponent, SwitchValueChangeExampleComponent, SwitchTestComponent, SwitchVisualTestComponent */

    /***/
    function FfAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _switch_docs_switch_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./switch-docs/switch-docs.example.component */
      "KB+p");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SwitchDocsExampleComponent", function () {
        return _switch_docs_switch_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["SwitchDocsExampleComponent"];
      });
      /* harmony import */


      var _switch_simple_switch_simple_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./switch-simple/switch-simple.example.component */
      "5d9R");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SwitchSimpleExampleComponent", function () {
        return _switch_simple_switch_simple_example_component__WEBPACK_IMPORTED_MODULE_1__["SwitchSimpleExampleComponent"];
      });
      /* harmony import */


      var _switch_disable_switch_disable_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./switch-disable/switch-disable.example.component */
      "GF8C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SwitchDisableExampleComponent", function () {
        return _switch_disable_switch_disable_example_component__WEBPACK_IMPORTED_MODULE_2__["SwitchDisableExampleComponent"];
      });
      /* harmony import */


      var _switch_value_change_switch_value_change_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./switch-value-change/switch-value-change.example.component */
      "kd8u");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SwitchValueChangeExampleComponent", function () {
        return _switch_value_change_switch_value_change_example_component__WEBPACK_IMPORTED_MODULE_3__["SwitchValueChangeExampleComponent"];
      });
      /* harmony import */


      var _switch_test_switch_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./switch-test/switch-test.component */
      "SfyW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SwitchTestComponent", function () {
        return _switch_test_switch_test_component__WEBPACK_IMPORTED_MODULE_4__["SwitchTestComponent"];
      });
      /* harmony import */


      var _switch_visual_test_switch_visual_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./switch-visual-test/switch-visual-test.component */
      "wdlE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SwitchVisualTestComponent", function () {
        return _switch_visual_test_switch_visual_test_component__WEBPACK_IMPORTED_MODULE_5__["SwitchVisualTestComponent"];
      });
      /***/

    },

    /***/
    "GF8C":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/switch/switch-disable/switch-disable.example.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: SwitchDisableExampleComponent */

    /***/
    function GF8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchDisableExampleComponent", function () {
        return SwitchDisableExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");

      var SwitchDisableExampleComponent = function SwitchDisableExampleComponent() {
        _classCallCheck(this, SwitchDisableExampleComponent);

        this.isOn = true;
        this.isDisabled = true;
      };

      SwitchDisableExampleComponent.ɵfac = function SwitchDisableExampleComponent_Factory(t) {
        return new (t || SwitchDisableExampleComponent)();
      };

      SwitchDisableExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwitchDisableExampleComponent,
        selectors: [["nui-switch-disable-example"]],
        inputs: {
          isOn: "isOn"
        },
        decls: 4,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1361196194381770729$$DEMO_SRC_COMPONENTS_DEMO_SWITCH_SWITCH_DISABLE_SWITCH_DISABLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Toggle Enable\n");
            i18n_0 = MSG_EXTERNAL_1361196194381770729$$DEMO_SRC_COMPONENTS_DEMO_SWITCH_SWITCH_DISABLE_SWITCH_DISABLE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fab07c7829645e7f748a8b9e4b41255be5d02bb9e\u241F1361196194381770729: Toggle Enable\n"])));
          }

          return [["nui-button", "", "type", "button", "id", "nui-switch-toggle-button", "displayStyle", "primary", 1, "lead", 3, "click"], i18n_0, ["id", "nui-switch-disabled-example", 3, "value", "disabled", "valueChange"]];
        },
        template: function SwitchDisableExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitchDisableExampleComponent_Template_button_click_0_listener() {
              return ctx.isDisabled = !ctx.isDisabled;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-switch", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchDisableExampleComponent_Template_nui_switch_valueChange_2_listener($event) {
              return ctx.isOn = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isOn)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isOn ? "On" : "Off", "\n");
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__["SwitchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "KB+p":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/switch/switch-docs/switch-docs.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SwitchDocsExampleComponent */

    /***/
    function KBP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchDocsExampleComponent", function () {
        return SwitchDocsExampleComponent;
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


      var _switch_simple_switch_simple_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../switch-simple/switch-simple.example.component */
      "5d9R");
      /* harmony import */


      var _switch_value_change_switch_value_change_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../switch-value-change/switch-value-change.example.component */
      "kd8u");
      /* harmony import */


      var _switch_disable_switch_disable_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../switch-disable/switch-disable.example.component */
      "GF8C");

      var SwitchDocsExampleComponent = function SwitchDocsExampleComponent() {
        _classCallCheck(this, SwitchDocsExampleComponent);
      };

      SwitchDocsExampleComponent.ɵfac = function SwitchDocsExampleComponent_Factory(t) {
        return new (t || SwitchDocsExampleComponent)();
      };

      SwitchDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwitchDocsExampleComponent,
        selectors: [["nui-switch-docs-example"]],
        decls: 35,
        vars: 0,
        consts: [["filenamePrefix", "switch-simple", "exampleTitle", "Basic Usage"], ["filenamePrefix", "switch-value-change", "exampleTitle", "Value Change"], ["filenamePrefix", "switch-disable", "exampleTitle", "Disable"]],
        template: function SwitchDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-switch>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is a simple toggle control that can be associated with a binary value. Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " input to control the value.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NuiSwitchModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-switch-simple-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Value Change Callback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "For subscribing to value-change events, use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "valueChange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " callback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nui-switch-value-change-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Disabled Switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " input to enable/disable the switch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nui-switch-disable-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _switch_simple_switch_simple_example_component__WEBPACK_IMPORTED_MODULE_2__["SwitchSimpleExampleComponent"], _switch_value_change_switch_value_change_example_component__WEBPACK_IMPORTED_MODULE_3__["SwitchValueChangeExampleComponent"], _switch_disable_switch_disable_example_component__WEBPACK_IMPORTED_MODULE_4__["SwitchDisableExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "M0FA":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-disable/switch-disable.example.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M0FA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"lead\" nui-button type=\"button\"\n        id=\"nui-switch-toggle-button\"\n        (click)=\"isDisabled = !isDisabled\"\n        displayStyle=\"primary\" i18n>\n        Toggle Enable\n</button>\n<nui-switch id=\"nui-switch-disabled-example\" [(value)]=\"isOn\" [disabled]=\"isDisabled\">{{isOn ? 'On' : 'Off'}}\n</nui-switch>\n";
      /***/
    },

    /***/
    "NqYI":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/switch sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function NqYI(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "rmiq",
        "./switch-disable/switch-disable.example.component.html": "M0FA",
        "./switch-disable/switch-disable.example.component.ts": "x+gB",
        "./switch-docs/switch-docs.example.component.html": "1OYp",
        "./switch-docs/switch-docs.example.component.ts": "85Ok",
        "./switch-simple/switch-simple.example.component.html": "ZahJ",
        "./switch-simple/switch-simple.example.component.ts": "llPH",
        "./switch-test/switch-test.component.html": "ZEBg",
        "./switch-test/switch-test.component.ts": "D44T",
        "./switch-value-change/switch-value-change.example.component.html": "TQmH",
        "./switch-value-change/switch-value-change.example.component.ts": "48/h",
        "./switch-visual-test/switch-visual-test.component.html": "AoZz",
        "./switch-visual-test/switch-visual-test.component.ts": "8uHc",
        "./switch.module.ts": "bOG/"
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
      webpackContext.id = "NqYI";
      /***/
    },

    /***/
    "SfyW":
    /*!******************************************************************************!*\
      !*** ./demo/src/components/demo/switch/switch-test/switch-test.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SwitchTestComponent */

    /***/
    function SfyW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchTestComponent", function () {
        return SwitchTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _switch_simple_switch_simple_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../switch-simple/switch-simple.example.component */
      "5d9R");
      /* harmony import */


      var _switch_disable_switch_disable_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../switch-disable/switch-disable.example.component */
      "GF8C");

      var SwitchTestComponent = function SwitchTestComponent() {
        _classCallCheck(this, SwitchTestComponent);
      };

      SwitchTestComponent.ɵfac = function SwitchTestComponent_Factory(t) {
        return new (t || SwitchTestComponent)();
      };

      SwitchTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwitchTestComponent,
        selectors: [["nui-switch-test"]],
        decls: 2,
        vars: 0,
        template: function SwitchTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-switch-simple-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-switch-disable-example");
          }
        },
        directives: [_switch_simple_switch_simple_example_component__WEBPACK_IMPORTED_MODULE_1__["SwitchSimpleExampleComponent"], _switch_disable_switch_disable_example_component__WEBPACK_IMPORTED_MODULE_2__["SwitchDisableExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TQmH":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-value-change/switch-value-change.example.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TQmH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-switch id=\"switch-value-change-example\" [value]=\"isOn\" (valueChange)=\"onValueChanged($event)\">\n    {{changeMessage}}\n</nui-switch>\n\n";
      /***/
    },

    /***/
    "ZEBg":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-test/switch-test.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZEBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-switch-simple-example></nui-switch-simple-example>\n<nui-switch-disable-example></nui-switch-disable-example>\n";
      /***/
    },

    /***/
    "ZahJ":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-simple/switch-simple.example.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZahJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-switch id=\"nui-switch-simple-example\" [(value)]=\"isOn\" i18n>\n    {{isOn ? 'On' : 'Off'}}\n</nui-switch>\n";
      /***/
    },

    /***/
    "bOG/":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bOG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiSwitchModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport {\n    SwitchDisableExampleComponent,\n    SwitchDocsExampleComponent,\n    SwitchSimpleExampleComponent,\n    SwitchTestComponent,\n    SwitchValueChangeExampleComponent,\n    SwitchVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: SwitchDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"switch-test\",\n        component: SwitchTestComponent,\n    },\n    {\n        path: \"switch-visual-test\",\n        component: SwitchVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiSwitchModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        SwitchDisableExampleComponent,\n        SwitchDocsExampleComponent,\n        SwitchSimpleExampleComponent,\n        SwitchTestComponent,\n        SwitchValueChangeExampleComponent,\n        SwitchVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SwitchModule {\n}\n";
      /***/
    },

    /***/
    "kd8u":
    /*!******************************************************************************************************!*\
      !*** ./demo/src/components/demo/switch/switch-value-change/switch-value-change.example.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: SwitchValueChangeExampleComponent */

    /***/
    function kd8u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchValueChangeExampleComponent", function () {
        return SwitchValueChangeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");

      var SwitchValueChangeExampleComponent = /*#__PURE__*/function () {
        function SwitchValueChangeExampleComponent() {
          _classCallCheck(this, SwitchValueChangeExampleComponent);

          this.isOn = true;
          this.valueChangeCount = 0;
          this.changeMessage = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Value has not changed"])));
        }

        _createClass(SwitchValueChangeExampleComponent, [{
          key: "onValueChanged",
          value: function onValueChanged(value) {
            this.isOn = value;
            ++this.valueChangeCount;
            this.changeMessage = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Value changed ", " times."])), this.valueChangeCount);
          }
        }]);

        return SwitchValueChangeExampleComponent;
      }();

      SwitchValueChangeExampleComponent.ɵfac = function SwitchValueChangeExampleComponent_Factory(t) {
        return new (t || SwitchValueChangeExampleComponent)();
      };

      SwitchValueChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwitchValueChangeExampleComponent,
        selectors: [["nui-switch-value-change-example"]],
        inputs: {
          isOn: "isOn"
        },
        decls: 2,
        vars: 2,
        consts: [["id", "switch-value-change-example", 3, "value", "valueChange"]],
        template: function SwitchValueChangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-switch", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchValueChangeExampleComponent_Template_nui_switch_valueChange_0_listener($event) {
              return ctx.onValueChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isOn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.changeMessage, "\n");
          }
        },
        directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__["SwitchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "llPH":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-simple/switch-simple.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function llPH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-switch-simple-example\",\n    templateUrl: \"./switch-simple.example.component.html\",\n})\n\nexport class SwitchSimpleExampleComponent {\n    @Input() isOn = true;\n}\n";
      /***/
    },

    /***/
    "rmiq":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/index.ts ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function rmiq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./switch-docs/switch-docs.example.component\";\nexport * from \"./switch-simple/switch-simple.example.component\";\nexport * from \"./switch-disable/switch-disable.example.component\";\nexport * from \"./switch-value-change/switch-value-change.example.component\";\nexport * from \"./switch-test/switch-test.component\";\nexport * from \"./switch-visual-test/switch-visual-test.component\";\n";
      /***/
    },

    /***/
    "wBid":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/switch/switch.module.ts ***!
      \**********************************************************/

    /*! exports provided: SwitchModule */

    /***/
    function wBid(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchModule", function () {
        return SwitchModule;
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
      "FfAm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SwitchDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "switch-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SwitchTestComponent"]
      }, {
        path: "switch-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SwitchVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var SwitchModule = function SwitchModule() {
        _classCallCheck(this, SwitchModule);
      };

      SwitchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: SwitchModule
      });
      SwitchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function SwitchModule_Factory(t) {
          return new (t || SwitchModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("NqYI");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SwitchModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["SwitchDisableExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SwitchDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SwitchSimpleExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SwitchTestComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SwitchValueChangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_2__["SwitchVisualTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wdlE":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/switch/switch-visual-test/switch-visual-test.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: SwitchVisualTestComponent */

    /***/
    function wdlE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SwitchVisualTestComponent", function () {
        return SwitchVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/switch/switch.component */
      "6CEj");

      var SwitchVisualTestComponent = function SwitchVisualTestComponent() {
        _classCallCheck(this, SwitchVisualTestComponent);

        this.isOn = true;
        this.isEnabled = false;
        this.isDisabled = true;
      };

      SwitchVisualTestComponent.ɵfac = function SwitchVisualTestComponent_Factory(t) {
        return new (t || SwitchVisualTestComponent)();
      };

      SwitchVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SwitchVisualTestComponent,
        selectors: [["nui-switch-visual"]],
        inputs: {
          isOn: "isOn",
          isEnabled: "isEnabled"
        },
        decls: 23,
        vars: 10,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-switch-simple-example", 3, "value", "valueChange"], ["id", "nui-switch-simple-example", 3, "value", "disabled", "valueChange"], ["id", "nui-switch-disabled-example", 3, "value", "valueChange"], ["id", "nui-switch-disabled-example", 3, "value", "disabled", "valueChange"]],
        template: function SwitchVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic switch is ON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-switch", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchVisualTestComponent_Template_nui_switch_valueChange_5_listener($event) {
              return ctx.isOn = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Basic switch is ON and disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-switch", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchVisualTestComponent_Template_nui_switch_valueChange_10_listener($event) {
              return ctx.isOn = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Basic switch is OFF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-switch", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchVisualTestComponent_Template_nui_switch_valueChange_16_listener($event) {
              return ctx.isEnabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Basic switch is OFF and disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-switch", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SwitchVisualTestComponent_Template_nui_switch_valueChange_21_listener($event) {
              return ctx.isEnabled = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isOn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isOn ? "On" : "Off", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isOn)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isOn ? "On" : "Off", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isEnabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isEnabled ? "On" : "Off", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.isEnabled)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.isEnabled ? "On" : "Off", " ");
          }
        },
        directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__["SwitchComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "x+gB":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/switch/switch-disable/switch-disable.example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-switch-disable-example\",\n    templateUrl: \"./switch-disable.example.component.html\",\n})\n\nexport class SwitchDisableExampleComponent {\n   @Input() isOn = true;\n    isDisabled = true;\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-switch-switch-module-es5.js.map