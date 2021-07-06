(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-textbox-textbox-module"], {
    /***/
    "2nBV":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-getting-value/textbox-getting-value.example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: TextboxGettingValueExampleComponent */

    /***/
    function nBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxGettingValueExampleComponent", function () {
        return TextboxGettingValueExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var _c0 = ["textboxValueChangedExample"];

      var TextboxGettingValueExampleComponent = /*#__PURE__*/function () {
        function TextboxGettingValueExampleComponent() {
          _classCallCheck(this, TextboxGettingValueExampleComponent);

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(TextboxGettingValueExampleComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.textbox.textChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) {
              return _this.textboxValueChangedValue = value;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe();
          }
        }]);

        return TextboxGettingValueExampleComponent;
      }();

      TextboxGettingValueExampleComponent.ɵfac = function TextboxGettingValueExampleComponent_Factory(t) {
        return new (t || TextboxGettingValueExampleComponent)();
      };

      TextboxGettingValueExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TextboxGettingValueExampleComponent,
        selectors: [["nui-textbox-getting-value-example"]],
        viewQuery: function TextboxGettingValueExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.textbox = _t.first);
          }
        },
        decls: 9,
        vars: 1,
        consts: [["value", "example value"], ["textboxValueChangedExample", ""], [1, "my-3"]],
        template: function TextboxGettingValueExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Accessing value using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "textChanged");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " output");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "nui-textbox", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("You typed: ", ctx.textboxValueChangedValue, "");
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_4__["TextboxComponent"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    "2o0d":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-readonly/textbox-readonly.example.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o0d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-readonly-textbox-item\"\n    value=\"readonly textbox\"\n    readonly=\"true\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "4srG":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-visual-test/textbox-number-visual-test.component.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-textbox-number-visual\",\n    templateUrl: \"./textbox-number-visual-test.component.html\",\n})\n\nexport class TextboxNumberVisualTestComponent {\n    public reactiveForm: FormGroup;\n\n    constructor(public formBuilder: FormBuilder) {\n        this.reactiveForm = formBuilder.group({\n            \"number\": [10],\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "5wMe":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-info/textbox-info.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TextboxInfoExampleComponent */

    /***/
    function wMe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxInfoExampleComponent", function () {
        return TextboxInfoExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxInfoExampleComponent = function TextboxInfoExampleComponent() {
        _classCallCheck(this, TextboxInfoExampleComponent);
      };

      TextboxInfoExampleComponent.ɵfac = function TextboxInfoExampleComponent_Factory(t) {
        return new (t || TextboxInfoExampleComponent)();
      };

      TextboxInfoExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxInfoExampleComponent,
        selectors: [["nui-textbox-info-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3213272057430462206$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_INFO_TEXTBOX_INFO_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Textbox with info");
            i18n_0 = MSG_EXTERNAL_3213272057430462206$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_INFO_TEXTBOX_INFO_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241Fef397591ecebb5cf8b9e5ac2d738745e470dd5f2\u241F3213272057430462206:Textbox with info"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4370429481611654175$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_INFO_TEXTBOX_INFO_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is additional info for textbox");
            i18n_2 = MSG_EXTERNAL_4370429481611654175$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_INFO_TEXTBOX_INFO_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fa6686594afcd74dda0fbb1776e81afb541586faa\u241F4370429481611654175:This is additional info for textbox"])));
          }

          return [["caption", i18n_0, "info", i18n_2], ["id", "demo-options-info-textbox-item", "value", "Textbox with info"]];
        },
        template: function TextboxInfoExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-textbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "7TET":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-basic/textbox-number-basic.example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox-number id=\"test-textbox-number\"></nui-textbox-number>\n";
      /***/
    },

    /***/
    "8wsL":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-visual-test/textbox-visual-test.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wsL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"textbox-visual-test\",\n    templateUrl: \"./textbox-visual-test.component.html\",\n})\n\nexport class TextboxVisualTestComponent {\n    public isRequired = true;\n    public value = \"\";\n\n    public isInErrorState() {\n        return this.isRequired && !this.value;\n    }\n\n    public textChanged($event: string) {\n        this.value = $event;\n    }\n}\n";
      /***/
    },

    /***/
    "ABbj":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-basic/textbox-number-basic.example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ABbj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-number-basic-example\",\n    templateUrl: \"./textbox-number-basic.example.component.html\",\n})\n\nexport class TextboxNumberBasicExampleComponent {}\n";
      /***/
    },

    /***/
    "BIaZ":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-placeholder/textbox-placeholder.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BIaZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-placeholder-example\",\n    templateUrl: \"./textbox-placeholder.example.component.html\",\n})\n\nexport class TextboxPlaceholderExampleComponent {}\n";
      /***/
    },

    /***/
    "BinI":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-placeholder/textbox-placeholder.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: TextboxPlaceholderExampleComponent */

    /***/
    function BinI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxPlaceholderExampleComponent", function () {
        return TextboxPlaceholderExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxPlaceholderExampleComponent = function TextboxPlaceholderExampleComponent() {
        _classCallCheck(this, TextboxPlaceholderExampleComponent);
      };

      TextboxPlaceholderExampleComponent.ɵfac = function TextboxPlaceholderExampleComponent_Factory(t) {
        return new (t || TextboxPlaceholderExampleComponent)();
      };

      TextboxPlaceholderExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxPlaceholderExampleComponent,
        selectors: [["nui-textbox-placeholder-example"]],
        decls: 1,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7268800494531353315$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_PLACEHOLDER_TEXTBOX_PLACEHOLDER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("textbox placeholder");
            i18n_0 = MSG_EXTERNAL_7268800494531353315$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_PLACEHOLDER_TEXTBOX_PLACEHOLDER_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F029a18b6f94a7bd9aed6ec32aba747dee042dcce\u241F7268800494531353315:textbox placeholder"])));
          }

          return [["id", "demo-options-placeholder-textbox-item", "placeholder", i18n_0]];
        },
        template: function TextboxPlaceholderExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "CDc/":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-custom-width/textbox-custom-width.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CDc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-custom-box-width-example\",\n    templateUrl: \"./textbox-custom-width.example.component.html\",\n})\n\nexport class TextboxCustomBoxWidthExampleComponent {}\n";
      /***/
    },

    /***/
    "CSYb":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-hint/textbox-hint.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CSYb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-hint-example\",\n    templateUrl: \"./textbox-hint.example.component.html\",\n})\n\nexport class TextboxHintExampleComponent {}\n";
      /***/
    },

    /***/
    "EMGs":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EMGs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule,\n    NuiTextboxModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    TextboxAreaExampleComponent,\n    TextboxBasicExampleComponent,\n    TextboxCustomBoxWidthExampleComponent,\n    TextboxDisabledExampleComponent,\n    TextboxDocsExampleComponent,\n    TextboxGettingValueExampleComponent,\n    TextboxHintExampleComponent,\n    TextboxInfoExampleComponent,\n    TextboxNumberBasicExampleComponent,\n    TextboxNumberDocsExampleComponent,\n    TextboxNumberMinMaxExampleComponent,\n    TextboxNumberTestComponent,\n    TextboxNumberVisualTestComponent,\n    TextboxPlaceholderExampleComponent,\n    TextboxReadonlyExampleComponent,\n    TextboxRequiredExampleComponent,\n    TextboxVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TextboxDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"textbox-number\",\n        component: TextboxNumberDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"textbox-visual-test\",\n        component: TextboxVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"textbox-number-test\",\n        component: TextboxNumberTestComponent,\n    },\n    {\n        path: \"textbox-number-visual-test\",\n        component: TextboxNumberVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiTextboxModule,\n        NuiFormFieldModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        TextboxAreaExampleComponent,\n        TextboxCustomBoxWidthExampleComponent,\n        TextboxDocsExampleComponent,\n        TextboxDisabledExampleComponent,\n        TextboxHintExampleComponent,\n        TextboxInfoExampleComponent,\n        TextboxNumberDocsExampleComponent,\n        TextboxNumberMinMaxExampleComponent,\n        TextboxNumberBasicExampleComponent,\n        TextboxNumberTestComponent,\n        TextboxPlaceholderExampleComponent,\n        TextboxBasicExampleComponent,\n        TextboxRequiredExampleComponent,\n        TextboxReadonlyExampleComponent,\n        TextboxVisualTestComponent,\n        TextboxNumberVisualTestComponent,\n        TextboxGettingValueExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class TextboxModule {\n}\n";
      /***/
    },

    /***/
    "EYx+":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-basic/textbox-basic.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EYx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-basic-example\",\n    templateUrl: \"./textbox-basic.example.component.html\",\n})\n\nexport class TextboxBasicExampleComponent {\n}\n";
      /***/
    },

    /***/
    "FXCL":
    /*!***********************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-visual-test/textbox-visual-test.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: TextboxVisualTestComponent */

    /***/
    function FXCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxVisualTestComponent", function () {
        return TextboxVisualTestComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");

      var TextboxVisualTestComponent = /*#__PURE__*/function () {
        function TextboxVisualTestComponent() {
          _classCallCheck(this, TextboxVisualTestComponent);

          this.isRequired = true;
          this.value = "";
        }

        _createClass(TextboxVisualTestComponent, [{
          key: "isInErrorState",
          value: function isInErrorState() {
            return this.isRequired && !this.value;
          }
        }, {
          key: "textChanged",
          value: function textChanged($event) {
            this.value = $event;
          }
        }]);

        return TextboxVisualTestComponent;
      }();

      TextboxVisualTestComponent.ɵfac = function TextboxVisualTestComponent_Factory(t) {
        return new (t || TextboxVisualTestComponent)();
      };

      TextboxVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxVisualTestComponent,
        selectors: [["textbox-visual-test"]],
        decls: 58,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7268800494531353315$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("textbox placeholder");
            i18n_0 = MSG_EXTERNAL_7268800494531353315$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F029a18b6f94a7bd9aed6ec32aba747dee042dcce\u241F7268800494531353315:textbox placeholder"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2352284556335663569$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Textbox with hint");
            i18n_2 = MSG_EXTERNAL_2352284556335663569$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F5b2765ee6dd3174d79476590dad7a0869df35573\u241F2352284556335663569:Textbox with hint"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_763722882015866721$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_5 = goog.getMsg("custom hint");
            i18n_4 = MSG_EXTERNAL_763722882015866721$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241F4a720500a256f1424e5915fca9dad1965f4a7bdf\u241F763722882015866721:custom hint"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3213272057430462206$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_7 = goog.getMsg("Textbox with info");
            i18n_6 = MSG_EXTERNAL_3213272057430462206$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241Fef397591ecebb5cf8b9e5ac2d738745e470dd5f2\u241F3213272057430462206:Textbox with info"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4370429481611654175$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_9 = goog.getMsg("This is additional info for textbox");
            i18n_8 = MSG_EXTERNAL_4370429481611654175$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241Fa6686594afcd74dda0fbb1776e81afb541586faa\u241F4370429481611654175:This is additional info for textbox"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3021712147801470722$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_11 = goog.getMsg("area textbox placeholder");
            i18n_10 = MSG_EXTERNAL_3021712147801470722$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_VISUAL_TEST_TEXTBOX_VISUAL_TEST_COMPONENT_TS_11;
          } else {
            i18n_10 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F0a2af07a733155c6c02080b2d9af1dc5b089bc3b\u241F3021712147801470722:area textbox placeholder"])));
          }

          return [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-visual-test-textbox-item", "value", "example value"], ["id", "nui-visual-test-placeholder-textbox-item", "placeholder", i18n_0], [1, "w-100"], ["id", "nui-visual-test-disabled-textbox-item", "value", "disabled textbox", "disabled", "true"], ["id", "nui-visual-test-readonly-textbox-item", "value", "readonly textbox", "readonly", "true"], ["id", "nui-visual-test-required-textbox-item", 3, "value", "isInErrorState", "textChange"], ["id", "nui-visual-test-custom-width-textbox-item", "customBoxWidth", "200px"], ["caption", i18n_2, "hint", i18n_4], ["id", "nui-visual-test-hint-textbox-item"], ["caption", i18n_6, "info", i18n_8, "id", "nui-visual-test-info-formfield-item"], ["id", "nui-visual-test-info-textbox-item", "value", "Textbox with info"], ["id", "nui-visual-test-area-textbox-item", "value", "Text area", "rows", "5"], ["id", "nui-visual-test-placeholder-area-textbox-item", "rows", "5", "placeholder", i18n_10]];
        },
        template: function TextboxVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic Textbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-textbox", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Textbox with Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-textbox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Disabled Textbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-textbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Readonly Textbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nui-textbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Required Textbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nui-textbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function TextboxVisualTestComponent_Template_nui_textbox_textChange_27_listener($event) {
              return ctx.textChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Textbox with Custom Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "nui-textbox", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Textbox with Hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-textbox", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Textbox with Info Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nui-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "nui-textbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Textbox with Textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "nui-textbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Textbox with Textarea and Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-textbox", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("isInErrorState", ctx.isInErrorState());
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "GkCc":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-area/textbox-area.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GkCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-area-textbox-item\"\n    value=\"Text area\"\n    rows=\"5\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "Hfgb":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-docs/textbox-number-docs.example.component.less ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hfgb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n    ul {\n        padding-left: 40px;\n\n        li {\n            list-style: disc;\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "KV4G":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**********************************************************************************************************/

    /*! no static exports found */

    /***/
    function KV4G(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "yarz",
        "./textbox-area/textbox-area.example.component.html": "GkCc",
        "./textbox-area/textbox-area.example.component.ts": "PQdc",
        "./textbox-basic/textbox-basic.example.component.html": "g9C6",
        "./textbox-basic/textbox-basic.example.component.ts": "EYx+",
        "./textbox-custom-width/textbox-custom-width.example.component.html": "Z3PY",
        "./textbox-custom-width/textbox-custom-width.example.component.ts": "CDc/",
        "./textbox-disabled/textbox-disabled.example.component.html": "Meel",
        "./textbox-disabled/textbox-disabled.example.ts": "wFEk",
        "./textbox-docs/textbox-docs.example.component.html": "wACj",
        "./textbox-docs/textbox-docs.example.component.ts": "YSvQ",
        "./textbox-getting-value/textbox-getting-value.example.component.html": "jvY6",
        "./textbox-getting-value/textbox-getting-value.example.component.ts": "l4VS",
        "./textbox-hint/textbox-hint.example.component.html": "LI8Y",
        "./textbox-hint/textbox-hint.example.component.ts": "CSYb",
        "./textbox-info/textbox-info.example.component.html": "eKnD",
        "./textbox-info/textbox-info.example.component.ts": "op1+",
        "./textbox-number/index.ts": "WBab",
        "./textbox-number/textbox-number-basic/textbox-number-basic.example.component.html": "7TET",
        "./textbox-number/textbox-number-basic/textbox-number-basic.example.component.ts": "ABbj",
        "./textbox-number/textbox-number-docs/textbox-number-docs.example.component.html": "lWFS",
        "./textbox-number/textbox-number-docs/textbox-number-docs.example.component.less": "Hfgb",
        "./textbox-number/textbox-number-docs/textbox-number-docs.example.component.ts": "ujJD",
        "./textbox-number/textbox-number-min-max/textbox-number-min-max.example.component.html": "bYSV",
        "./textbox-number/textbox-number-min-max/textbox-number-min-max.example.component.ts": "QVk+",
        "./textbox-number/textbox-number-test/textbox-number-test.component.html": "gxHp",
        "./textbox-number/textbox-number-test/textbox-number-test.component.ts": "i5bo",
        "./textbox-number/textbox-number-visual-test/textbox-number-visual-test.component.html": "c+nd",
        "./textbox-number/textbox-number-visual-test/textbox-number-visual-test.component.ts": "4srG",
        "./textbox-placeholder/textbox-placeholder.example.component.html": "bOqm",
        "./textbox-placeholder/textbox-placeholder.example.component.ts": "BIaZ",
        "./textbox-readonly/textbox-readonly.example.component.html": "2o0d",
        "./textbox-readonly/textbox-readonly.example.component.ts": "Z2IU",
        "./textbox-required/textbox-required.example.component.html": "iGiO",
        "./textbox-required/textbox-required.example.component.ts": "SGmf",
        "./textbox-visual-test/textbox-visual-test.component.html": "xuuu",
        "./textbox-visual-test/textbox-visual-test.component.ts": "8wsL",
        "./textbox.module.ts": "EMGs"
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
      webpackContext.id = "KV4G";
      /***/
    },

    /***/
    "KsOM":
    /*!*************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-readonly/textbox-readonly.example.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TextboxReadonlyExampleComponent */

    /***/
    function KsOM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxReadonlyExampleComponent", function () {
        return TextboxReadonlyExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxReadonlyExampleComponent = function TextboxReadonlyExampleComponent() {
        _classCallCheck(this, TextboxReadonlyExampleComponent);
      };

      TextboxReadonlyExampleComponent.ɵfac = function TextboxReadonlyExampleComponent_Factory(t) {
        return new (t || TextboxReadonlyExampleComponent)();
      };

      TextboxReadonlyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxReadonlyExampleComponent,
        selectors: [["nui-textbox-readonly-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "demo-options-readonly-textbox-item", "value", "readonly textbox", "readonly", "true"]],
        template: function TextboxReadonlyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "LI8Y":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-hint/textbox-hint.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LI8Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-form-field i18n-caption\n                caption=\"Textbox with hint\"\n                i18n-hint\n                hint=\"custom hint\">\n    <nui-textbox id=\"demo-options-hint-textbox-item\">\n    </nui-textbox>\n</nui-form-field>\n";
      /***/
    },

    /***/
    "Lxex":
    /*!***************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-disabled/textbox-disabled.example.ts ***!
      \***************************************************************************************/

    /*! exports provided: TextboxDisabledExampleComponent */

    /***/
    function Lxex(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxDisabledExampleComponent", function () {
        return TextboxDisabledExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxDisabledExampleComponent = function TextboxDisabledExampleComponent() {
        _classCallCheck(this, TextboxDisabledExampleComponent);
      };

      TextboxDisabledExampleComponent.ɵfac = function TextboxDisabledExampleComponent_Factory(t) {
        return new (t || TextboxDisabledExampleComponent)();
      };

      TextboxDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxDisabledExampleComponent,
        selectors: [["nui-textbox-disabled-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "demo-options-disabled-textbox-item", "value", "disabled textbox", "disabled", "true"]],
        template: function TextboxDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "M5+q":
    /*!****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-number/textbox-number-visual-test/textbox-number-visual-test.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: TextboxNumberVisualTestComponent */

    /***/
    function M5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberVisualTestComponent", function () {
        return TextboxNumberVisualTestComponent;
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


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");

      var TextboxNumberVisualTestComponent = function TextboxNumberVisualTestComponent(formBuilder) {
        _classCallCheck(this, TextboxNumberVisualTestComponent);

        this.formBuilder = formBuilder;
        this.reactiveForm = formBuilder.group({
          "number": [10]
        });
      };

      TextboxNumberVisualTestComponent.ɵfac = function TextboxNumberVisualTestComponent_Factory(t) {
        return new (t || TextboxNumberVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      TextboxNumberVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TextboxNumberVisualTestComponent,
        selectors: [["nui-textbox-number-visual"]],
        decls: 20,
        vars: 4,
        consts: [[1, "container"], [1, "row"], [1, "col-xl"], ["id", "nui-visual-test-textbox-number"], [3, "formGroup"], ["id", "nui-visual-test-textbox-number-min-max", "formControlName", "number", 3, "minValue", "maxValue"], ["id", "nui-visual-test-textbox-number-disabled", "value", "-7", 3, "disabled"]],
        template: function TextboxNumberVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Textbox number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-textbox-number", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Textbox number with min\\max");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nui-textbox-number", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Disabled Textbox number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "nui-textbox-number", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minValue", 1)("maxValue", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
          }
        },
        directives: [_src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "MS43":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox.module.ts ***!
      \************************************************************/

    /*! exports provided: TextboxModule */

    /***/
    function MS43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxModule", function () {
        return TextboxModule;
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
      "w4JT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TextboxDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "textbox-number",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "textbox-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TextboxVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "textbox-number-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberTestComponent"]
      }, {
        path: "textbox-number-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var TextboxModule = function TextboxModule() {
        _classCallCheck(this, TextboxModule);
      };

      TextboxModule.ɵfac = function TextboxModule_Factory(t) {
        return new (t || TextboxModule)();
      };

      TextboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: TextboxModule
      });
      TextboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("KV4G");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TextboxModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["TextboxAreaExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxCustomBoxWidthExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxHintExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxInfoExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberMinMaxExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxPlaceholderExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxRequiredExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxReadonlyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TextboxGettingValueExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Meel":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-disabled/textbox-disabled.example.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Meel(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-disabled-textbox-item\"\n    value=\"disabled textbox\"\n    disabled=\"true\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "PQdc":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-area/textbox-area.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PQdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-area-example\",\n    templateUrl: \"./textbox-area.example.component.html\",\n})\n\nexport class TextboxAreaExampleComponent {}\n";
      /***/
    },

    /***/
    "QVk+":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-min-max/textbox-number-min-max.example.component.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QVk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-textbox-number-min-max-example\",\n    templateUrl: \"./textbox-number-min-max.example.component.html\",\n})\n\nexport class TextboxNumberMinMaxExampleComponent {\n    public value = 10;\n\n    public reactiveForm: FormGroup;\n\n    constructor(public formBuilder: FormBuilder) {\n        this.reactiveForm = formBuilder.group({\n            \"number\": [1],\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "RmD4":
    /*!*************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-required/textbox-required.example.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: TextboxRequiredExampleComponent */

    /***/
    function RmD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxRequiredExampleComponent", function () {
        return TextboxRequiredExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxRequiredExampleComponent = /*#__PURE__*/function () {
        function TextboxRequiredExampleComponent() {
          _classCallCheck(this, TextboxRequiredExampleComponent);

          this.isRequired = true;
          this.value = "";
        }

        _createClass(TextboxRequiredExampleComponent, [{
          key: "isInErrorState",
          value: function isInErrorState() {
            return this.isRequired && !this.value;
          }
        }, {
          key: "textChanged",
          value: function textChanged($event) {
            this.value = $event;
          }
        }]);

        return TextboxRequiredExampleComponent;
      }();

      TextboxRequiredExampleComponent.ɵfac = function TextboxRequiredExampleComponent_Factory(t) {
        return new (t || TextboxRequiredExampleComponent)();
      };

      TextboxRequiredExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxRequiredExampleComponent,
        selectors: [["nui-textbox-required-example"]],
        decls: 1,
        vars: 2,
        consts: [["id", "demo-options-required-textbox-item", 3, "value", "isInErrorState", "textChange"]],
        template: function TextboxRequiredExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-textbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function TextboxRequiredExampleComponent_Template_nui_textbox_textChange_0_listener($event) {
              return ctx.textChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("isInErrorState", ctx.isInErrorState());
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "SGmf":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-required/textbox-required.example.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SGmf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-required-example\",\n    templateUrl: \"./textbox-required.example.component.html\",\n})\n\nexport class TextboxRequiredExampleComponent {\n    public isRequired = true;\n    public value = \"\";\n\n    public isInErrorState() {\n        return this.isRequired && !this.value;\n    }\n\n    public textChanged($event: string) {\n        this.value = $event;\n    }\n}\n";
      /***/
    },

    /***/
    "UU1U":
    /*!****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-number/textbox-number-min-max/textbox-number-min-max.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: TextboxNumberMinMaxExampleComponent */

    /***/
    function UU1U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberMinMaxExampleComponent", function () {
        return TextboxNumberMinMaxExampleComponent;
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


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");

      var TextboxNumberMinMaxExampleComponent = function TextboxNumberMinMaxExampleComponent(formBuilder) {
        _classCallCheck(this, TextboxNumberMinMaxExampleComponent);

        this.formBuilder = formBuilder;
        this.value = 10;
        this.reactiveForm = formBuilder.group({
          "number": [1]
        });
      };

      TextboxNumberMinMaxExampleComponent.ɵfac = function TextboxNumberMinMaxExampleComponent_Factory(t) {
        return new (t || TextboxNumberMinMaxExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      TextboxNumberMinMaxExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TextboxNumberMinMaxExampleComponent,
        selectors: [["nui-textbox-number-min-max-example"]],
        decls: 2,
        vars: 3,
        consts: [[3, "formGroup"], ["id", "test-textbox-number-min-max", "formControlName", "number", 3, "minValue", "maxValue"]],
        template: function TextboxNumberMinMaxExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-textbox-number", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minValue", 1)("maxValue", 10);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "WBab":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/index.ts ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WBab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./textbox-number-docs/textbox-number-docs.example.component\";\nexport * from \"./textbox-number-basic/textbox-number-basic.example.component\";\nexport * from \"./textbox-number-min-max/textbox-number-min-max.example.component\";\nexport * from \"./textbox-number-visual-test/textbox-number-visual-test.component\";\nexport * from \"./textbox-number-test/textbox-number-test.component\";\n";
      /***/
    },

    /***/
    "XsBf":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-number/textbox-number-basic/textbox-number-basic.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: TextboxNumberBasicExampleComponent */

    /***/
    function XsBf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberBasicExampleComponent", function () {
        return TextboxNumberBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");

      var TextboxNumberBasicExampleComponent = function TextboxNumberBasicExampleComponent() {
        _classCallCheck(this, TextboxNumberBasicExampleComponent);
      };

      TextboxNumberBasicExampleComponent.ɵfac = function TextboxNumberBasicExampleComponent_Factory(t) {
        return new (t || TextboxNumberBasicExampleComponent)();
      };

      TextboxNumberBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxNumberBasicExampleComponent,
        selectors: [["nui-textbox-number-basic-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "test-textbox-number"]],
        template: function TextboxNumberBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox-number", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_1__["TextboxNumberComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "YSvQ":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-docs/textbox-docs.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YSvQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-docs-example\",\n    templateUrl: \"./textbox-docs.example.component.html\",\n})\n\nexport class TextboxDocsExampleComponent {}\n";
      /***/
    },

    /***/
    "Z2IU":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-readonly/textbox-readonly.example.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z2IU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-readonly-example\",\n    templateUrl: \"./textbox-readonly.example.component.html\",\n})\n\nexport class TextboxReadonlyExampleComponent {}\n";
      /***/
    },

    /***/
    "Z3PY":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-custom-width/textbox-custom-width.example.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z3PY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-custom-width-textbox-item\"\n    customBoxWidth=\"200px\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "bOqm":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-placeholder/textbox-placeholder.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bOqm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-placeholder-textbox-item\"\n    i18n-placeholder\n    placeholder=\"textbox placeholder\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "bYSV":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-min-max/textbox-number-min-max.example.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bYSV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [formGroup]=\"reactiveForm\">\n    <nui-textbox-number  id=\"test-textbox-number-min-max\" formControlName=\"number\" [minValue]=\"1\" [maxValue]=\"10\"></nui-textbox-number>\n</div>\n";
      /***/
    },

    /***/
    "c+nd":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-visual-test/textbox-number-visual-test.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Basic Textbox number</h3>\n            <nui-textbox-number id=\"nui-visual-test-textbox-number\"></nui-textbox-number>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Textbox number with min\\max</h3>\n            <div [formGroup]=\"reactiveForm\">\n                <nui-textbox-number  id=\"nui-visual-test-textbox-number-min-max\"\n                                     formControlName=\"number\"\n                                     [minValue]=\"1\"\n                                     [maxValue]=\"10\">\n                </nui-textbox-number>\n            </div>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Disabled Textbox number</h3>\n            <nui-textbox-number id=\"nui-visual-test-textbox-number-disabled\"\n                                value=\"-7\"\n                                [disabled]=\"true\">\n            </nui-textbox-number>\n            <hr />\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "dkU5":
    /*!*******************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-basic/textbox-basic.example.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: TextboxBasicExampleComponent */

    /***/
    function dkU5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxBasicExampleComponent", function () {
        return TextboxBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxBasicExampleComponent = function TextboxBasicExampleComponent() {
        _classCallCheck(this, TextboxBasicExampleComponent);
      };

      TextboxBasicExampleComponent.ɵfac = function TextboxBasicExampleComponent_Factory(t) {
        return new (t || TextboxBasicExampleComponent)();
      };

      TextboxBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxBasicExampleComponent,
        selectors: [["nui-textbox-basic-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "demo-options-textbox-item", "value", "example value"]],
        template: function TextboxBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "eKnD":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-info/textbox-info.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eKnD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-form-field i18n-caption\n                caption=\"Textbox with info\"\n                i18n-info\n                info=\"This is additional info for textbox\">\n    <nui-textbox id=\"demo-options-info-textbox-item\"\n                 value=\"Textbox with info\">\n    </nui-textbox>\n</nui-form-field>\n";
      /***/
    },

    /***/
    "eVfk":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-number/textbox-number-test/textbox-number-test.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: TextboxNumberTestComponent */

    /***/
    function eVfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberTestComponent", function () {
        return TextboxNumberTestComponent;
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


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var TextboxNumberTestComponent = function TextboxNumberTestComponent(formBuilder) {
        _classCallCheck(this, TextboxNumberTestComponent);

        this.formBuilder = formBuilder;
        this.value = 10;
        this.reactiveForm = formBuilder.group({
          "number": [1]
        });
      };

      TextboxNumberTestComponent.ɵfac = function TextboxNumberTestComponent_Factory(t) {
        return new (t || TextboxNumberTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      TextboxNumberTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TextboxNumberTestComponent,
        selectors: [["nui-textbox-number-test"]],
        decls: 44,
        vars: 14,
        consts: [[1, "container"], [1, "row"], [1, "col-xl"], ["id", "test-textbox-number"], ["id", "test-textbox-number-min-max", "placeholder", "Enter value between 1 and 10", 3, "minValue", "maxValue"], ["id", "test-textbox-number-disabled", "value", "-7", 3, "disabled"], ["form", "ngForm"], ["id", "test-textbox-number-validation", "name", "number", 3, "ngModel", "minValue", "maxValue", "ngModelChange"], [1, "test-textbox-number-validation__valid"], [3, "formGroup"], ["id", "test-textbox-number-reactive", "formControlName", "number", 3, "minValue", "maxValue"]],
        template: function TextboxNumberTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Basic Textbox number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-textbox-number", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Textbox number with min\\max");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nui-textbox-number", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Disabled Textbox number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "nui-textbox-number", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Textbox number validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "form", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nui-textbox-number", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TextboxNumberTestComponent_Template_nui_textbox_number_ngModelChange_26_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "VALID = ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Textbox number reactive form value");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "nui-textbox-number", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minValue", 1)("maxValue", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value)("minValue", 1)("maxValue", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r0.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("VALUE = [", ctx.value, "]");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minValue", 1)("maxValue", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("FORM VALUE = [", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 12, ctx.reactiveForm.value), "]");
          }
        },
        directives: [_src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fd9+":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-hint/textbox-hint.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TextboxHintExampleComponent */

    /***/
    function fd9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxHintExampleComponent", function () {
        return TextboxHintExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxHintExampleComponent = function TextboxHintExampleComponent() {
        _classCallCheck(this, TextboxHintExampleComponent);
      };

      TextboxHintExampleComponent.ɵfac = function TextboxHintExampleComponent_Factory(t) {
        return new (t || TextboxHintExampleComponent)();
      };

      TextboxHintExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxHintExampleComponent,
        selectors: [["nui-textbox-hint-example"]],
        decls: 2,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2352284556335663569$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_HINT_TEXTBOX_HINT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Textbox with hint");
            i18n_0 = MSG_EXTERNAL_2352284556335663569$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_HINT_TEXTBOX_HINT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F5b2765ee6dd3174d79476590dad7a0869df35573\u241F2352284556335663569:Textbox with hint"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_763722882015866721$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_HINT_TEXTBOX_HINT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("custom hint");
            i18n_2 = MSG_EXTERNAL_763722882015866721$$DEMO_SRC_COMPONENTS_DEMO_TEXTBOX_TEXTBOX_HINT_TEXTBOX_HINT_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F4a720500a256f1424e5915fca9dad1965f4a7bdf\u241F763722882015866721:custom hint"])));
          }

          return [["caption", i18n_0, "hint", i18n_2], ["id", "demo-options-hint-textbox-item"]];
        },
        template: function TextboxHintExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-textbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_1__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "g9C6":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-basic/textbox-basic.example.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g9C6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-textbox-item\"\n    value=\"example value\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "gxHp":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-test/textbox-number-test.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gxHp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Basic Textbox number</h3>\n            <nui-textbox-number id=\"test-textbox-number\"></nui-textbox-number>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Textbox number with min\\max</h3>\n            <div>\n                <nui-textbox-number id=\"test-textbox-number-min-max\"\n                                    placeholder=\"Enter value between 1 and 10\"\n                                    [minValue]=\"1\"\n                                    [maxValue]=\"10\">\n                </nui-textbox-number>\n            </div>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Disabled Textbox number</h3>\n            <nui-textbox-number id=\"test-textbox-number-disabled\"\n                                value=\"-7\"\n                                [disabled]=\"true\">\n            </nui-textbox-number>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Textbox number validation</h3>\n            <form #form=\"ngForm\">\n                <nui-textbox-number id=\"test-textbox-number-validation\"\n                                    name=\"number\"\n                                    [(ngModel)]=\"value\"\n                                    [minValue]=\"1\"\n                                    [maxValue]=\"10\">\n                </nui-textbox-number>\n                <div>VALID = <span class=\"test-textbox-number-validation__valid\">{{form.valid}}</span></div>\n                <div>VALUE = [{{value}}]</div>\n            </form>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl\">\n            <h3>Textbox number reactive form value</h3>\n            <div [formGroup]=\"reactiveForm\">\n                <nui-textbox-number id=\"test-textbox-number-reactive\"\n                                    formControlName=\"number\"\n                                    [minValue]=\"1\"\n                                    [maxValue]=\"10\">\n                </nui-textbox-number>\n                <div>FORM VALUE = [{{reactiveForm.value | json}}]</div>\n            </div>\n            <hr />\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "i5bo":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-test/textbox-number-test.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i5bo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-textbox-number-test\",\n    templateUrl: \"./textbox-number-test.component.html\",\n})\n\nexport class TextboxNumberTestComponent {\n    public value = 10;\n\n    public reactiveForm: FormGroup;\n\n    constructor(public formBuilder: FormBuilder) {\n        this.reactiveForm = formBuilder.group({\n            \"number\": [1],\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "iGiO":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-required/textbox-required.example.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iGiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-textbox\n    id=\"demo-options-required-textbox-item\"\n    [value]=\"value\"\n    [isInErrorState]=\"isInErrorState()\"\n    (textChange)=\"textChanged($event)\">\n</nui-textbox>\n";
      /***/
    },

    /***/
    "jjJe":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-docs/textbox-docs.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TextboxDocsExampleComponent */

    /***/
    function jjJe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxDocsExampleComponent", function () {
        return TextboxDocsExampleComponent;
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


      var _textbox_basic_textbox_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../textbox-basic/textbox-basic.example.component */
      "dkU5");
      /* harmony import */


      var _textbox_placeholder_textbox_placeholder_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../textbox-placeholder/textbox-placeholder.example.component */
      "BinI");
      /* harmony import */


      var _textbox_disabled_textbox_disabled_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../textbox-disabled/textbox-disabled.example */
      "Lxex");
      /* harmony import */


      var _textbox_readonly_textbox_readonly_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../textbox-readonly/textbox-readonly.example.component */
      "KsOM");
      /* harmony import */


      var _textbox_required_textbox_required_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../textbox-required/textbox-required.example.component */
      "RmD4");
      /* harmony import */


      var _textbox_hint_textbox_hint_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../textbox-hint/textbox-hint.example.component */
      "fd9+");
      /* harmony import */


      var _textbox_info_textbox_info_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../textbox-info/textbox-info.example.component */
      "5wMe");
      /* harmony import */


      var _textbox_area_textbox_area_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../textbox-area/textbox-area.example.component */
      "zPrR");
      /* harmony import */


      var _textbox_custom_width_textbox_custom_width_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../textbox-custom-width/textbox-custom-width.example.component */
      "qG0U");
      /* harmony import */


      var _textbox_getting_value_textbox_getting_value_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../textbox-getting-value/textbox-getting-value.example.component */
      "2nBV");

      var TextboxDocsExampleComponent = function TextboxDocsExampleComponent() {
        _classCallCheck(this, TextboxDocsExampleComponent);
      };

      TextboxDocsExampleComponent.ɵfac = function TextboxDocsExampleComponent_Factory(t) {
        return new (t || TextboxDocsExampleComponent)();
      };

      TextboxDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxDocsExampleComponent,
        selectors: [["nui-textbox-docs-example"]],
        decls: 134,
        vars: 0,
        consts: [["filenamePrefix", "textbox-basic", "exampleTitle", "Basic usage"], ["filenamePrefix", "textbox-placeholder", "exampleTitle", "Textbox with placeholder"], ["filenamePrefix", "textbox-disabled", "exampleTitle", "Disabled textbox"], ["filenamePrefix", "textbox-readonly", "exampleTitle", "readonly textbox"], ["href", "../components/FormFieldComponent.html", "target", "_blank"], ["filenamePrefix", "textbox-required", "exampleTitle", "Required textbox"], ["filenamePrefix", "textbox-hint", "exampleTitle", "Textbox with hint"], ["filenamePrefix", "textbox-info", "exampleTitle", "Textbox with additional info"], ["filenamePrefix", "textbox-area", "exampleTitle", "Textarea"], ["filenamePrefix", "textbox-custom-width", "exampleTitle", "Textbox with custom box width"], ["filenamePrefix", "textbox-getting-value", "exampleTitle", "Getting a Value"]],
        template: function TextboxDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiTextboxModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To use the textbox component add an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-textbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " to your template. Optionally, you can set an initial value via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-textbox-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " To add a placeholder to your textbox, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " input to the desired string value.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-textbox-placeholder-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " To disable the textbox, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " input to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nui-textbox-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Readonly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " To make the textbox readonly, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "readonly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " input to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "nui-textbox-readonly-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Invalid State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " To manually set the textbox to an invalid value state, pass true to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "isInErrorState");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " input. Note that this input is only about styling. If a textbox with built-in validation is needed, please wrap your textbox in an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "<nui-form-field>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "nui-textbox-required-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Adding a Hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " To add a hint underneath the textbox, wrap ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "<nui-textbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " in an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "<nui-form-field>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " component and set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "<nui-form-field>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "'s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " input to the desired hint string.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "nui-textbox-hint-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Additional Info Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " To apply a hoverable \"additional info\" icon to the textbox, wrap ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "<nui-textbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " in an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "<nui-form-field>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " component and set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "<nui-form-field>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "'s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " input to the desired info string.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "nui-textbox-info-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Textarea");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " To create a textarea set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "rows");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " input to the desired number of textarea rows.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " To make textarea scrollable, add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "textarea-scrollable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " class to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "nui-textbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " element.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "nui-textbox-area-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Custom Width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Textbox can have a custom width. To configure it, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "customBoxWidth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " input to a css-style size value, e.g. \"200px\", \"10vw\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "nui-textbox-custom-box-width-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Getting a Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "You can use binding to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "valueChanged");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " output (emits after ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "input");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " was changed) to get a value from a textbox component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "nui-textbox-getting-value-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _textbox_basic_textbox_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["TextboxBasicExampleComponent"], _textbox_placeholder_textbox_placeholder_example_component__WEBPACK_IMPORTED_MODULE_3__["TextboxPlaceholderExampleComponent"], _textbox_disabled_textbox_disabled_example__WEBPACK_IMPORTED_MODULE_4__["TextboxDisabledExampleComponent"], _textbox_readonly_textbox_readonly_example_component__WEBPACK_IMPORTED_MODULE_5__["TextboxReadonlyExampleComponent"], _textbox_required_textbox_required_example_component__WEBPACK_IMPORTED_MODULE_6__["TextboxRequiredExampleComponent"], _textbox_hint_textbox_hint_example_component__WEBPACK_IMPORTED_MODULE_7__["TextboxHintExampleComponent"], _textbox_info_textbox_info_example_component__WEBPACK_IMPORTED_MODULE_8__["TextboxInfoExampleComponent"], _textbox_area_textbox_area_example_component__WEBPACK_IMPORTED_MODULE_9__["TextboxAreaExampleComponent"], _textbox_custom_width_textbox_custom_width_example_component__WEBPACK_IMPORTED_MODULE_10__["TextboxCustomBoxWidthExampleComponent"], _textbox_getting_value_textbox_getting_value_example_component__WEBPACK_IMPORTED_MODULE_11__["TextboxGettingValueExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "jvY6":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-getting-value/textbox-getting-value.example.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jvY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<b>Accessing value using <code>textChanged</code> output</b>\n<nui-textbox\n    value=\"example value\"\n    #textboxValueChangedExample>\n</nui-textbox>\n<p class=\"my-3\">You typed: {{ textboxValueChangedValue }}</p>";
      /***/
    },

    /***/
    "l4VS":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-getting-value/textbox-getting-value.example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l4VS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from \"@angular/core\";\nimport { TextboxComponent } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil, tap } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-textbox-getting-value-example\",\n    templateUrl: \"./textbox-getting-value.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\n\nexport class TextboxGettingValueExampleComponent implements AfterViewInit {\n    public textboxValueChangedValue: string | number;\n    private destroy$: Subject<any> = new Subject<any>();\n\n    @ViewChild(\"textboxValueChangedExample\") textbox: TextboxComponent;\n\n    ngAfterViewInit() {\n        this.textbox.textChange.pipe(\n            tap(value => this.textboxValueChangedValue = value as string),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n}\n";
      /***/
    },

    /***/
    "lWFS":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-docs/textbox-number-docs.example.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lWFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiTextboxModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To use the textbox number component, add an <code>&lt;nui-textbox-number&gt;</code> to your template.\n    By default, the <code>value</code> input is set to 0. However, if you want the component to show a\n    zero as soon as its rendered on the DOM, initialize the input explicitly.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> The example uses the default value of <code>1</code> for the <code>step</code>\n    input, so if you manually type in a floating point value, the increment/decrement buttons will still\n    increment by <code>1</code>. To have your implementation increment/decrement by fractional values,\n    set the <code>step</code> input to the desired floating point interval--<code>0.1</code>\n    for example.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"textbox-number-basic\" exampleTitle=\"Basic usage\">\n    <nui-textbox-number-basic-example></nui-textbox-number-basic-example>\n</nui-example-wrapper>\n\n<h2>Inputs</h2>\n<ul>\n    <li>\n        <code>value</code> - Value corresponding to the\n        <code><a href=\"https://angular.io/api/forms/ControlValueAccessor\" target=\"_blank\">ControlValueAccessor</a></code>\n        interface on the Angular forms API. Use banana-in-a-box notation or the <code>valueChange</code>\n        output to receive updates. Defaults to <code>0</code>.\n    </li>\n    <li>\n        <code>minValue</code>- Set the minimum allowed value for the input field. See the Min/Max section on this page for a live example.\n    </li>\n    <li>\n        <code>maxValue</code> - Set the maximum allowed value for the input field. See the Min/Max section on this page for a live example.\n    </li>\n    <li>\n        <code>step</code> - Step by which the value is incremented/decremented on click of the up/down buttons.\n        Note this can be set to a floating point value in addition to integers. Default is <code>1</code>.\n    </li>\n    <li>\n        <code>stepPrecision</code> - The decimal precision to use for rounding each step increase/decrease when clicking the up/down buttons. Default is <code>10</code>.\n    </li>\n    <li>\n        <code>placeholder</code> - Set the string to use as a placeholder for the text box. Default is <code>\"\"</code>.\n    </li>\n    <li>\n        <code>customBoxWidth</code> - Set a custom width in <code>px</code> for the input field.\n    </li>\n    <li>\n        <code>disabled</code> - Disable the field. Default is <code>false</code>.\n    </li>\n    <li>\n        <code>readonly</code> - Make the input read-only. Default is <code>false</code>.\n    </li>\n    <li>\n        <code>name</code> - Set the value of the HTML input element's\n        <code><a href=\"https://www.w3schools.com/tags/att_input_name.asp#:~:text=The%20name%20attribute%20specifies%20the,after%20a%20form%20is%20submitted.\" target=\"_blank\">name</a></code>\n        attribute.\n    </li>\n</ul>\n\n<h2>Outputs</h2>\n<ul>\n    <li>\n        <code>blurred</code> - Use this output to get the value of the input field when it is focused out.\n    </li>\n    <li>\n        <code>valueChange</code> - Use this output to get the value of the input field when it changes.\n    </li>\n</ul>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    For additional information about the above inputs and outputs, please take a look at the\n    <a href=\"../components/TextboxNumberComponent.html#info\" target=\"_parent\">API tab</a>\n    on this page. For usage examples of corresponding inputs on a similar component, visit the documentation\n    page for the <code><a href=\"../components/TextboxComponent.html\" target=\"_blank\">&lt;nui-textbox&gt;</a></code>\n    component.\n</nui-message>\n\n<h2>Min/Max Value Defined</h2>\n<p>\n    To define min/max value for <code>&lt;nui-textbox-number&gt;</code>, use the <code>minValue</code>\n    and <code>maxValue</code> inputs. In the following example, the min is set to 1 and the max is set to\n    10.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-number-min-max\" exampleTitle=\"min/max value defined\">\n    <nui-textbox-number-min-max-example></nui-textbox-number-min-max-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "maaG":
    /*!******************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-number/index.ts ***!
      \******************************************************************/

    /*! exports provided: TextboxNumberDocsExampleComponent, TextboxNumberBasicExampleComponent, TextboxNumberMinMaxExampleComponent, TextboxNumberVisualTestComponent, TextboxNumberTestComponent */

    /***/
    function maaG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _textbox_number_docs_textbox_number_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./textbox-number-docs/textbox-number-docs.example.component */
      "rA4/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberDocsExampleComponent", function () {
        return _textbox_number_docs_textbox_number_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["TextboxNumberDocsExampleComponent"];
      });
      /* harmony import */


      var _textbox_number_basic_textbox_number_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./textbox-number-basic/textbox-number-basic.example.component */
      "XsBf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberBasicExampleComponent", function () {
        return _textbox_number_basic_textbox_number_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["TextboxNumberBasicExampleComponent"];
      });
      /* harmony import */


      var _textbox_number_min_max_textbox_number_min_max_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./textbox-number-min-max/textbox-number-min-max.example.component */
      "UU1U");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberMinMaxExampleComponent", function () {
        return _textbox_number_min_max_textbox_number_min_max_example_component__WEBPACK_IMPORTED_MODULE_2__["TextboxNumberMinMaxExampleComponent"];
      });
      /* harmony import */


      var _textbox_number_visual_test_textbox_number_visual_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./textbox-number-visual-test/textbox-number-visual-test.component */
      "M5+q");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberVisualTestComponent", function () {
        return _textbox_number_visual_test_textbox_number_visual_test_component__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberVisualTestComponent"];
      });
      /* harmony import */


      var _textbox_number_test_textbox_number_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./textbox-number-test/textbox-number-test.component */
      "eVfk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberTestComponent", function () {
        return _textbox_number_test_textbox_number_test_component__WEBPACK_IMPORTED_MODULE_4__["TextboxNumberTestComponent"];
      });
      /***/

    },

    /***/
    "op1+":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-info/textbox-info.example.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function op1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-info-example\",\n    templateUrl: \"./textbox-info.example.component.html\",\n})\n\nexport class TextboxInfoExampleComponent {}\n";
      /***/
    },

    /***/
    "qG0U":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-custom-width/textbox-custom-width.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: TextboxCustomBoxWidthExampleComponent */

    /***/
    function qG0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxCustomBoxWidthExampleComponent", function () {
        return TextboxCustomBoxWidthExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxCustomBoxWidthExampleComponent = function TextboxCustomBoxWidthExampleComponent() {
        _classCallCheck(this, TextboxCustomBoxWidthExampleComponent);
      };

      TextboxCustomBoxWidthExampleComponent.ɵfac = function TextboxCustomBoxWidthExampleComponent_Factory(t) {
        return new (t || TextboxCustomBoxWidthExampleComponent)();
      };

      TextboxCustomBoxWidthExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxCustomBoxWidthExampleComponent,
        selectors: [["nui-textbox-custom-box-width-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "demo-options-custom-width-textbox-item", "customBoxWidth", "200px"]],
        template: function TextboxCustomBoxWidthExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "rA4/":
    /*!**********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-number/textbox-number-docs/textbox-number-docs.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: TextboxNumberDocsExampleComponent */

    /***/
    function rA4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberDocsExampleComponent", function () {
        return TextboxNumberDocsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */
      "CVg4");
      /* harmony import */


      var _textbox_number_basic_textbox_number_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../textbox-number-basic/textbox-number-basic.example.component */
      "XsBf");
      /* harmony import */


      var _textbox_number_min_max_textbox_number_min_max_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../textbox-number-min-max/textbox-number-min-max.example.component */
      "UU1U");

      var TextboxNumberDocsExampleComponent = function TextboxNumberDocsExampleComponent() {
        _classCallCheck(this, TextboxNumberDocsExampleComponent);
      };

      TextboxNumberDocsExampleComponent.ɵfac = function TextboxNumberDocsExampleComponent_Factory(t) {
        return new (t || TextboxNumberDocsExampleComponent)();
      };

      TextboxNumberDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxNumberDocsExampleComponent,
        selectors: [["nui-textbox-number-docs-example"]],
        decls: 147,
        vars: 2,
        consts: [["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "textbox-number-basic", "exampleTitle", "Basic usage"], ["href", "https://angular.io/api/forms/ControlValueAccessor", "target", "_blank"], ["href", "https://www.w3schools.com/tags/att_input_name.asp#:~:text=The%20name%20attribute%20specifies%20the,after%20a%20form%20is%20submitted.", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["href", "../components/TextboxNumberComponent.html#info", "target", "_parent"], ["href", "../components/TextboxComponent.html", "target", "_blank"], ["filenamePrefix", "textbox-number-min-max", "exampleTitle", "min/max value defined"]],
        template: function TextboxNumberDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiTextboxModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To use the textbox number component, add an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-textbox-number>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " to your template. By default, the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " input is set to 0. However, if you want the component to show a zero as soon as its rendered on the DOM, initialize the input explicitly.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-message", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The example uses the default value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " input, so if you manually type in a floating point value, the increment/decrement buttons will still increment by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". To have your implementation increment/decrement by fractional values, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " input to the desired floating point interval--");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "0.1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " for example.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nui-textbox-number-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inputs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " - Value corresponding to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ControlValueAccessor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " interface on the Angular forms API. Use banana-in-a-box notation or the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "valueChange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " output to receive updates. Defaults to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "minValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "- Set the minimum allowed value for the input field. See the Min/Max section on this page for a live example. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "maxValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " - Set the maximum allowed value for the input field. See the Min/Max section on this page for a live example. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " - Step by which the value is incremented/decremented on click of the up/down buttons. Note this can be set to a floating point value in addition to integers. Default is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "stepPrecision");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " - The decimal precision to use for rounding each step increase/decrease when clicking the up/down buttons. Default is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "10");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "placeholder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " - Set the string to use as a placeholder for the text box. Default is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\"\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "customBoxWidth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " - Set a custom width in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " for the input field. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " - Disable the field. Default is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "readonly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " - Make the input read-only. Default is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "false");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " - Set the value of the HTML input element's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " attribute. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Outputs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "blurred");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " - Use this output to get the value of the input field when it is focused out. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "valueChange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " - Use this output to get the value of the input field when it changes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " For additional information about the above inputs and outputs, please take a look at the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "API tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " on this page. For usage examples of corresponding inputs on a similar component, visit the documentation page for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "<nui-textbox>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Min/Max Value Defined");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " To define min/max value for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "<nui-textbox-number>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ", use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "minValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "maxValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " inputs. In the following example, the min is set to 1 and the max is set to 10.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "nui-textbox-number-min-max-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _textbox_number_basic_textbox_number_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["TextboxNumberBasicExampleComponent"], _textbox_number_min_max_textbox_number_min_max_example_component__WEBPACK_IMPORTED_MODULE_4__["TextboxNumberMinMaxExampleComponent"]],
        styles: ["[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRib3gtbnVtYmVyLWRvY3MuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFBO0FBQVI7QUFGQTtFQUtZLGdCQUFBO0FBQVoiLCJmaWxlIjoidGV4dGJveC1udW1iZXItZG9jcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ujJD":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-number/textbox-number-docs/textbox-number-docs.example.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ujJD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-number-docs-example\",\n    templateUrl: \"./textbox-number-docs.example.component.html\",\n    styleUrls: [ \"./textbox-number-docs.example.component.less\"],\n})\n\nexport class TextboxNumberDocsExampleComponent {}\n";
      /***/
    },

    /***/
    "w4JT":
    /*!***************************************************!*\
      !*** ./demo/src/components/demo/textbox/index.ts ***!
      \***************************************************/

    /*! exports provided: TextboxDocsExampleComponent, TextboxBasicExampleComponent, TextboxDisabledExampleComponent, TextboxRequiredExampleComponent, TextboxInfoExampleComponent, TextboxHintExampleComponent, TextboxPlaceholderExampleComponent, TextboxAreaExampleComponent, TextboxCustomBoxWidthExampleComponent, TextboxReadonlyExampleComponent, TextboxVisualTestComponent, TextboxNumberDocsExampleComponent, TextboxNumberBasicExampleComponent, TextboxNumberMinMaxExampleComponent, TextboxNumberVisualTestComponent, TextboxNumberTestComponent, TextboxGettingValueExampleComponent */

    /***/
    function w4JT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _textbox_docs_textbox_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./textbox-docs/textbox-docs.example.component */
      "jjJe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxDocsExampleComponent", function () {
        return _textbox_docs_textbox_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["TextboxDocsExampleComponent"];
      });
      /* harmony import */


      var _textbox_basic_textbox_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./textbox-basic/textbox-basic.example.component */
      "dkU5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxBasicExampleComponent", function () {
        return _textbox_basic_textbox_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["TextboxBasicExampleComponent"];
      });
      /* harmony import */


      var _textbox_disabled_textbox_disabled_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./textbox-disabled/textbox-disabled.example */
      "Lxex");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxDisabledExampleComponent", function () {
        return _textbox_disabled_textbox_disabled_example__WEBPACK_IMPORTED_MODULE_2__["TextboxDisabledExampleComponent"];
      });
      /* harmony import */


      var _textbox_required_textbox_required_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./textbox-required/textbox-required.example.component */
      "RmD4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxRequiredExampleComponent", function () {
        return _textbox_required_textbox_required_example_component__WEBPACK_IMPORTED_MODULE_3__["TextboxRequiredExampleComponent"];
      });
      /* harmony import */


      var _textbox_info_textbox_info_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./textbox-info/textbox-info.example.component */
      "5wMe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxInfoExampleComponent", function () {
        return _textbox_info_textbox_info_example_component__WEBPACK_IMPORTED_MODULE_4__["TextboxInfoExampleComponent"];
      });
      /* harmony import */


      var _textbox_hint_textbox_hint_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./textbox-hint/textbox-hint.example.component */
      "fd9+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxHintExampleComponent", function () {
        return _textbox_hint_textbox_hint_example_component__WEBPACK_IMPORTED_MODULE_5__["TextboxHintExampleComponent"];
      });
      /* harmony import */


      var _textbox_placeholder_textbox_placeholder_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./textbox-placeholder/textbox-placeholder.example.component */
      "BinI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxPlaceholderExampleComponent", function () {
        return _textbox_placeholder_textbox_placeholder_example_component__WEBPACK_IMPORTED_MODULE_6__["TextboxPlaceholderExampleComponent"];
      });
      /* harmony import */


      var _textbox_area_textbox_area_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./textbox-area/textbox-area.example.component */
      "zPrR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxAreaExampleComponent", function () {
        return _textbox_area_textbox_area_example_component__WEBPACK_IMPORTED_MODULE_7__["TextboxAreaExampleComponent"];
      });
      /* harmony import */


      var _textbox_custom_width_textbox_custom_width_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./textbox-custom-width/textbox-custom-width.example.component */
      "qG0U");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxCustomBoxWidthExampleComponent", function () {
        return _textbox_custom_width_textbox_custom_width_example_component__WEBPACK_IMPORTED_MODULE_8__["TextboxCustomBoxWidthExampleComponent"];
      });
      /* harmony import */


      var _textbox_readonly_textbox_readonly_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./textbox-readonly/textbox-readonly.example.component */
      "KsOM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxReadonlyExampleComponent", function () {
        return _textbox_readonly_textbox_readonly_example_component__WEBPACK_IMPORTED_MODULE_9__["TextboxReadonlyExampleComponent"];
      });
      /* harmony import */


      var _textbox_visual_test_textbox_visual_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./textbox-visual-test/textbox-visual-test.component */
      "FXCL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxVisualTestComponent", function () {
        return _textbox_visual_test_textbox_visual_test_component__WEBPACK_IMPORTED_MODULE_10__["TextboxVisualTestComponent"];
      });
      /* harmony import */


      var _textbox_number_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./textbox-number/index */
      "maaG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberDocsExampleComponent", function () {
        return _textbox_number_index__WEBPACK_IMPORTED_MODULE_11__["TextboxNumberDocsExampleComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberBasicExampleComponent", function () {
        return _textbox_number_index__WEBPACK_IMPORTED_MODULE_11__["TextboxNumberBasicExampleComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberMinMaxExampleComponent", function () {
        return _textbox_number_index__WEBPACK_IMPORTED_MODULE_11__["TextboxNumberMinMaxExampleComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberVisualTestComponent", function () {
        return _textbox_number_index__WEBPACK_IMPORTED_MODULE_11__["TextboxNumberVisualTestComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxNumberTestComponent", function () {
        return _textbox_number_index__WEBPACK_IMPORTED_MODULE_11__["TextboxNumberTestComponent"];
      });
      /* harmony import */


      var _textbox_getting_value_textbox_getting_value_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./textbox-getting-value/textbox-getting-value.example.component */
      "2nBV");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TextboxGettingValueExampleComponent", function () {
        return _textbox_getting_value_textbox_getting_value_example_component__WEBPACK_IMPORTED_MODULE_12__["TextboxGettingValueExampleComponent"];
      });
      /***/

    },

    /***/
    "wACj":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-docs/textbox-docs.example.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wACj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiTextboxModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To use the textbox component add an <code>&lt;nui-textbox&gt;</code> to your template. Optionally, you can set an initial value via the\n    <code>value</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-basic\" exampleTitle=\"Basic usage\">\n    <nui-textbox-basic-example></nui-textbox-basic-example>\n</nui-example-wrapper>\n\n<h2>Placeholder</h2>\n<p>\n    To add a placeholder to your textbox, set the <code>placeholder</code> input to the desired string value.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-placeholder\" exampleTitle=\"Textbox with placeholder\">\n    <nui-textbox-placeholder-example></nui-textbox-placeholder-example>\n</nui-example-wrapper>\n\n<h2>Disabled</h2>\n<p>\n    To disable the textbox, set the <code>disabled</code> input to true.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-disabled\" exampleTitle=\"Disabled textbox\">\n    <nui-textbox-disabled-example></nui-textbox-disabled-example>\n</nui-example-wrapper>\n\n<h2>Readonly</h2>\n<p>\n    To make the textbox readonly, set the <code>readonly</code> input to true.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-readonly\" exampleTitle=\"readonly textbox\">\n    <nui-textbox-readonly-example></nui-textbox-readonly-example>\n</nui-example-wrapper>\n\n<h2>Invalid State</h2>\n<p>\n    To manually set the textbox to an invalid value state, pass true to the <code>isInErrorState</code> input. Note that this input is only about styling. If\n    a textbox with built-in validation is needed, please wrap your textbox in an\n    <code><a href=\"../components/FormFieldComponent.html\" target=\"_blank\">&lt;nui-form-field&gt;</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-required\" exampleTitle=\"Required textbox\">\n    <nui-textbox-required-example></nui-textbox-required-example>\n</nui-example-wrapper>\n\n<h2>Adding a Hint</h2>\n<p>\n    To add a hint underneath the textbox, wrap <code>&lt;nui-textbox&gt;</code> in an <code>&lt;nui-form-field&gt;</code> component and set\n    <code>&lt;nui-form-field&gt;</code>'s <code>hint</code> input to the desired hint string.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-hint\" exampleTitle=\"Textbox with hint\">\n    <nui-textbox-hint-example></nui-textbox-hint-example>\n</nui-example-wrapper>\n\n<h2>Additional Info Icon</h2>\n<p>\n    To apply a hoverable \"additional info\" icon to the textbox, wrap <code>&lt;nui-textbox&gt;</code> in an <code>&lt;nui-form-field&gt;</code>\n    component and set <code>&lt;nui-form-field&gt;</code>'s <code>info</code> input to the desired info string.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-info\" exampleTitle=\"Textbox with additional info\">\n    <nui-textbox-info-example></nui-textbox-info-example>\n</nui-example-wrapper>\n\n<h2>Textarea</h2>\n<p>\n    To create a textarea set the <code>rows</code> input to the desired number of textarea rows.\n</p>\n<p>\n    <b>Note:</b> To make textarea scrollable, add <code>textarea-scrollable</code> class to the <code>nui-textbox</code> element.\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-area\" exampleTitle=\"Textarea\">\n    <nui-textbox-area-example></nui-textbox-area-example>\n</nui-example-wrapper>\n\n<h2>Custom Width</h2>\n<p>\n    Textbox can have a custom width. To configure it, set the <code>customBoxWidth</code> input to a css-style size value, e.g. \"200px\", \"10vw\".\n</p>\n<nui-example-wrapper filenamePrefix=\"textbox-custom-width\" exampleTitle=\"Textbox with custom box width\">\n    <nui-textbox-custom-box-width-example></nui-textbox-custom-box-width-example>\n</nui-example-wrapper>\n\n<h3>Getting a Value</h3>\n<p>You can use binding to the <code>valueChanged</code> output (emits after <strong>input</strong> was changed) to get a value from a textbox component</p>\n\n<nui-example-wrapper filenamePrefix=\"textbox-getting-value\" exampleTitle=\"Getting a Value\">\n    <nui-textbox-getting-value-example></nui-textbox-getting-value-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "wFEk":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-disabled/textbox-disabled.example.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wFEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-textbox-disabled-example\",\n    templateUrl: \"./textbox-disabled.example.component.html\",\n})\n\nexport class TextboxDisabledExampleComponent {}\n";
      /***/
    },

    /***/
    "xuuu":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/textbox-visual-test/textbox-visual-test.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xuuu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic Textbox</h3>\n            <nui-textbox\n                id=\"nui-visual-test-textbox-item\"\n                value=\"example value\">\n            </nui-textbox>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Textbox with Placeholder</h3>\n            <nui-textbox\n                id=\"nui-visual-test-placeholder-textbox-item\"\n                i18n-placeholder\n                placeholder=\"textbox placeholder\">\n            </nui-textbox>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Disabled Textbox</h3>\n            <nui-textbox\n                id=\"nui-visual-test-disabled-textbox-item\"\n                value=\"disabled textbox\"\n                disabled=\"true\">\n            </nui-textbox>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Readonly Textbox</h3>\n            <nui-textbox\n                id=\"nui-visual-test-readonly-textbox-item\"\n                value=\"readonly textbox\"\n                readonly=\"true\">\n            </nui-textbox>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Required Textbox</h3>\n            <nui-textbox\n                id=\"nui-visual-test-required-textbox-item\"\n                [value]=\"value\"\n                [isInErrorState]=\"isInErrorState()\"\n                (textChange)=\"textChanged($event)\">\n            </nui-textbox>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Textbox with Custom Width</h3>\n            <nui-textbox\n                id=\"nui-visual-test-custom-width-textbox-item\"\n                customBoxWidth=\"200px\">\n            </nui-textbox>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Textbox with Hint</h3>\n            <nui-form-field i18n-caption\n                            caption=\"Textbox with hint\"\n                            i18n-hint\n                            hint=\"custom hint\">\n                <nui-textbox id=\"nui-visual-test-hint-textbox-item\">\n                </nui-textbox>\n            </nui-form-field>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Textbox with Info Icon</h3>\n            <nui-form-field i18n-caption\n                            caption=\"Textbox with info\"\n                            i18n-info\n                            info=\"This is additional info for textbox\"\n                            id=\"nui-visual-test-info-formfield-item\">\n                <nui-textbox id=\"nui-visual-test-info-textbox-item\"\n                             value=\"Textbox with info\">\n                </nui-textbox>\n            </nui-form-field>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>Textbox with Textarea</h3>\n            <nui-textbox\n                id=\"nui-visual-test-area-textbox-item\"\n                value=\"Text area\"\n                rows=\"5\">\n            </nui-textbox>\n            <hr />\n        </div> <div class=\"col\">\n            <h3>Textbox with Textarea and Placeholder</h3>\n            <nui-textbox\n                id=\"nui-visual-test-placeholder-area-textbox-item\"\n                rows=\"5\"\n                i18n-placeholder\n                placeholder=\"area textbox placeholder\">\n            </nui-textbox>\n            <hr />\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "yarz":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/textbox/index.ts ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function yarz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./textbox-docs/textbox-docs.example.component\";\nexport * from \"./textbox-basic/textbox-basic.example.component\";\nexport * from \"./textbox-disabled/textbox-disabled.example\";\nexport * from \"./textbox-required/textbox-required.example.component\";\nexport * from \"./textbox-info/textbox-info.example.component\";\nexport * from \"./textbox-hint/textbox-hint.example.component\";\nexport * from \"./textbox-placeholder/textbox-placeholder.example.component\";\nexport * from \"./textbox-area/textbox-area.example.component\";\nexport * from \"./textbox-custom-width/textbox-custom-width.example.component\";\nexport * from \"./textbox-readonly/textbox-readonly.example.component\";\nexport * from \"./textbox-visual-test/textbox-visual-test.component\";\nexport * from \"./textbox-number/index\";\nexport * from \"./textbox-getting-value/textbox-getting-value.example.component\";\n";
      /***/
    },

    /***/
    "zPrR":
    /*!*****************************************************************************************!*\
      !*** ./demo/src/components/demo/textbox/textbox-area/textbox-area.example.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TextboxAreaExampleComponent */

    /***/
    function zPrR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextboxAreaExampleComponent", function () {
        return TextboxAreaExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");

      var TextboxAreaExampleComponent = function TextboxAreaExampleComponent() {
        _classCallCheck(this, TextboxAreaExampleComponent);
      };

      TextboxAreaExampleComponent.ɵfac = function TextboxAreaExampleComponent_Factory(t) {
        return new (t || TextboxAreaExampleComponent)();
      };

      TextboxAreaExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextboxAreaExampleComponent,
        selectors: [["nui-textbox-area-example"]],
        decls: 1,
        vars: 0,
        consts: [["id", "demo-options-area-textbox-item", "value", "Text area", "rows", "5"]],
        template: function TextboxAreaExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 0);
          }
        },
        directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-textbox-textbox-module-es5.js.map