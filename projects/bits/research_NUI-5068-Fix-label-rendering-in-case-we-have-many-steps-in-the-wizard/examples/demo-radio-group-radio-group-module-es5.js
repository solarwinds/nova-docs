(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-radio-group-radio-group-module"], {
    /***/
    "+9YT":
    /*!********************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group.module.ts ***!
      \********************************************************************/

    /*! exports provided: RadioGroupModule */

    /***/
    function YT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupModule", function () {
        return RadioGroupModule;
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
      "P67R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "radio-group-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupTestComponent"]
      }, {
        path: "radio-group-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var RadioGroupModule = function RadioGroupModule() {
        _classCallCheck(this, RadioGroupModule);
      };

      RadioGroupModule.ɵfac = function RadioGroupModule_Factory(t) {
        return new (t || RadioGroupModule)();
      };

      RadioGroupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: RadioGroupModule
      });
      RadioGroupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("6EFm");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RadioGroupModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["BasicRadioGroupExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DisabledRadioGroupExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupHintsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupInFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["RadioGroupVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["ValueChangeRadioGroupExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "+SPn":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/disabled-radio-group/disabled-radio-group.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SPn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 i18n>Selected fruit: {{selectedFruit}}</h1>\n<nui-radio-group id=\"fruit-radio-group\"\n                 name=\"fruit\"\n                 [(value)]=\"selectedFruit\">\n    <nui-radio *ngFor=\"let fruit of fruits\"\n               [value]=\"fruit\"\n               [checked]=\"fruit === 'Orange'\"\n               [disabled]=\"fruit === 'Banana'\">\n        {{fruit}}\n    </nui-radio>\n</nui-radio-group>\n";
      /***/
    },

    /***/
    "0xcr":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xcr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiCheckboxModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiRadioModule,\n    NuiValidationMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    BasicRadioGroupExampleComponent,\n    DisabledRadioGroupExampleComponent,\n    RadioGroupDocsExampleComponent,\n    RadioGroupHintsExampleComponent,\n    RadioGroupInFormExampleComponent,\n    RadioGroupInlineExampleComponent,\n    RadioGroupTestComponent,\n    RadioGroupVisualTestComponent,\n    ValueChangeRadioGroupExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: RadioGroupDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"radio-group-test\",\n        component: RadioGroupTestComponent,\n    },\n    {\n        path: \"radio-group-visual-test\",\n        component: RadioGroupVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiRadioModule,\n        NuiCheckboxModule,\n        NuiFormFieldModule,\n        ReactiveFormsModule,\n        FormsModule,\n        NuiValidationMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        BasicRadioGroupExampleComponent,\n        DisabledRadioGroupExampleComponent,\n        RadioGroupDocsExampleComponent,\n        RadioGroupHintsExampleComponent,\n        RadioGroupInFormExampleComponent,\n        RadioGroupInlineExampleComponent,\n        RadioGroupTestComponent,\n        RadioGroupVisualTestComponent,\n        ValueChangeRadioGroupExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class RadioGroupModule {\n}\n";
      /***/
    },

    /***/
    "1SyL":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/disabled-radio-group/disabled-radio-group.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: DisabledRadioGroupExampleComponent */

    /***/
    function SyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisabledRadioGroupExampleComponent", function () {
        return DisabledRadioGroupExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DisabledRadioGroupExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fruit_r1)("checked", fruit_r1 === "Orange")("disabled", fruit_r1 === "Banana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruit_r1, " ");
        }
      }

      var DisabledRadioGroupExampleComponent = function DisabledRadioGroupExampleComponent() {
        _classCallCheck(this, DisabledRadioGroupExampleComponent);

        this.fruits = [$localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Banana"]))), $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Orange"]))), $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Kiwi"]))), $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Papaya"])))];
      };

      DisabledRadioGroupExampleComponent.ɵfac = function DisabledRadioGroupExampleComponent_Factory(t) {
        return new (t || DisabledRadioGroupExampleComponent)();
      };

      DisabledRadioGroupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DisabledRadioGroupExampleComponent,
        selectors: [["nui-disabled-radio-group-example"]],
        decls: 4,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8732319579184328444$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_DISABLED_RADIO_GROUP_DISABLED_RADIO_GROUP_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selected fruit: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_8732319579184328444$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_DISABLED_RADIO_GROUP_DISABLED_RADIO_GROUP_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F76fcbe97be58e408b35d13a78f727194e9b6688c\u241F8732319579184328444:Selected fruit: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [i18n_0, ["id", "fruit-radio-group", "name", "fruit", 3, "value", "valueChange"], [3, "value", "checked", "disabled", 4, "ngFor", "ngForOf"], [3, "value", "checked", "disabled"]];
        },
        template: function DisabledRadioGroupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DisabledRadioGroupExampleComponent_Template_nui_radio_group_valueChange_2_listener($event) {
              return ctx.selectedFruit = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisabledRadioGroupExampleComponent_nui_radio_3_Template, 2, 4, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fruits);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "3kM1":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group-visual-test/radio-group-visual-test.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: RadioGroupVisualTestComponent */

    /***/
    function kM1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupVisualTestComponent", function () {
        return RadioGroupVisualTestComponent;
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


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _radio_group_in_form_radio_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../radio-group-in-form/radio-group-in-form.example.component */
      "9LW3");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");

      function RadioGroupVisualTestComponent_nui_radio_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r4)("checked", fruit_r4 === "Orange")("disabled", fruit_r4 === "Kiwi");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r4, " ");
        }
      }

      function RadioGroupVisualTestComponent_nui_radio_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r5 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", color_r5)("hint", ctx_r1.colorHints[color_r5])("disabled", color_r5 === "Blue")("checked", color_r5 === "Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", color_r5, " ");
        }
      }

      function RadioGroupVisualTestComponent_nui_radio_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", color_r6)("hint", ctx_r2.colorHints[color_r6])("disabled", color_r6 === "Red")("checked", color_r6 === "Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", color_r6, " ");
        }
      }

      function RadioGroupVisualTestComponent_nui_radio_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r7, " ");
        }
      }

      var RadioGroupVisualTestComponent = /*#__PURE__*/function () {
        function RadioGroupVisualTestComponent(formBuilder) {
          _classCallCheck(this, RadioGroupVisualTestComponent);

          this.formBuilder = formBuilder;
          this.colors = ["Red", "Green", "Blue"];
          this.colorHints = {
            "Red": "hot color",
            "Green": "color of nature",
            "Blue": "color of sky"
          };
          this.fruits = ["Banana", "Orange", "Kiwi", "Papaya"];
        }

        _createClass(RadioGroupVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.disabledForm = this.formBuilder.group({
              radioGroup: this.formBuilder.control({
                value: "",
                disabled: true
              })
            });
          }
        }]);

        return RadioGroupVisualTestComponent;
      }();

      RadioGroupVisualTestComponent.ɵfac = function RadioGroupVisualTestComponent_Factory(t) {
        return new (t || RadioGroupVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      RadioGroupVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RadioGroupVisualTestComponent,
        selectors: [["nui-radio-group-visual-test"]],
        decls: 24,
        vars: 9,
        consts: [[1, "container"], ["id", "fruit-radio-group", "name", "fruit", 3, "value", "valueChange"], [3, "value", "checked", "disabled", 4, "ngFor", "ngForOf"], ["id", "color-radio-group", "name", "color", 3, "value", "valueChange"], [3, "value", "hint", "disabled", "checked", 4, "ngFor", "ngForOf"], ["id", "inline-color-radio-group", "name", "color", 1, "nui-radio-group-inline", 3, "value", "valueChange"], ["id", "vegetable-radio-group"], [3, "formGroup"], ["caption", "Disabled Radio Group in form", 3, "control"], ["id", "fruit-radio-group-disabled", "formControlName", "radioGroup", "name", "fruit-disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", "checked", "disabled"], [3, "value", "hint", "disabled", "checked"], [3, "value"]],
        template: function RadioGroupVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic Radio Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RadioGroupVisualTestComponent_Template_nui_radio_group_valueChange_3_listener($event) {
              return ctx.selectedFruit = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RadioGroupVisualTestComponent_nui_radio_4_Template, 2, 4, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Radio Group with pre-selected option and hints");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-radio-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RadioGroupVisualTestComponent_Template_nui_radio_group_valueChange_8_listener($event) {
              return ctx.selectedColor = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RadioGroupVisualTestComponent_nui_radio_9_Template, 2, 5, "nui-radio", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Inline Horizontal Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nui-radio-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RadioGroupVisualTestComponent_Template_nui_radio_group_valueChange_13_listener($event) {
              return ctx.selectedColor = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RadioGroupVisualTestComponent_nui_radio_14_Template, 2, 5, "nui-radio", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Part Of Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "nui-radio-group-in-form-example", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nui-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nui-radio-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RadioGroupVisualTestComponent_nui_radio_23_Template, 2, 2, "nui-radio", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.disabledForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.disabledForm.controls["radioGroup"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _radio_group_in_form_radio_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_4__["RadioGroupInFormExampleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_5__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "6EFm":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**************************************************************************************************************/

    /*! no static exports found */

    /***/
    function EFm(module, exports, __webpack_require__) {
      var map = {
        "./basic-radio-group/basic-radio-group.example.component.html": "Tjpb",
        "./basic-radio-group/basic-radio-group.example.component.ts": "PfI1",
        "./disabled-radio-group/disabled-radio-group.example.component.html": "+SPn",
        "./disabled-radio-group/disabled-radio-group.example.component.ts": "q5Yi",
        "./index.ts": "snYg",
        "./radio-group-docs/radio-group-docs.example.component.html": "Posh",
        "./radio-group-docs/radio-group-docs.example.component.ts": "D9z8",
        "./radio-group-in-form/radio-group-in-form.example.component.html": "9hV4",
        "./radio-group-in-form/radio-group-in-form.example.component.ts": "lqxX",
        "./radio-group-inline/radio-group-inline.example.component.html": "73us",
        "./radio-group-inline/radio-group-inline.example.component.ts": "RD99",
        "./radio-group-test/radio-group-test.component.html": "e8M6",
        "./radio-group-test/radio-group-test.component.ts": "8dux",
        "./radio-group-visual-test/radio-group-visual-test.component.html": "BWgK",
        "./radio-group-visual-test/radio-group-visual-test.component.ts": "zQ9T",
        "./radio-group-with-hints/radio-group-hints.example.component.html": "O42u",
        "./radio-group-with-hints/radio-group-hints.example.component.ts": "F8B8",
        "./radio-group.module.ts": "0xcr",
        "./value-change-radio-group/value-change-radio-group.example.component.html": "gWQZ",
        "./value-change-radio-group/value-change-radio-group.example.component.ts": "GGa2"
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
      webpackContext.id = "6EFm";
      /***/
    },

    /***/
    "73us":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-inline/radio-group-inline.example.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function us(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 i18n>Selected fruit: {{selectedFruit}}</h1>\n<nui-radio-group id=\"fruit-radio-group-inline\"\n                 name=\"fruit\"\n                 class=\"nui-radio-group-inline\"\n                 [(value)]=\"selectedFruit\">\n    <nui-radio *ngFor=\"let fruit of fruits\"\n               [value]=\"fruit\"\n               [checked]=\"fruit === 'Orange'\">\n        {{fruit}}\n    </nui-radio>\n</nui-radio-group>\n";
      /***/
    },

    /***/
    "8dux":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-test/radio-group-test.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dux(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\nimport { CheckboxChangeEvent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-radio-group-test\",\n    templateUrl: \"./radio-group-test.component.html\",\n})\nexport class RadioGroupTestComponent implements OnInit {\n    public disabledForm: FormGroup;\n\n    public fruits = [$localize `Banana`, $localize `Orange`, $localize `Kiwi`, $localize `Papaya`];\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n\n    public selectedFruit: string;\n    public selectedFruitInline: string;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    public ngOnInit() {\n        this.disabledForm = this.formBuilder.group({\n            radioGroup: this.formBuilder.control({value: \"\", disabled: true}),\n        });\n    }\n\n    public toggleDisabled(event: CheckboxChangeEvent) {\n        this.disabledForm.get(\"radioGroup\")?.[!event.target.checked ? \"enable\" : \"disable\"]();\n    }\n}\n";
      /***/
    },

    /***/
    "9LW3":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group-in-form/radio-group-in-form.example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: RadioGroupInFormExampleComponent */

    /***/
    function LW3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupInFormExampleComponent", function () {
        return RadioGroupInFormExampleComponent;
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


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");

      function RadioGroupInFormExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r1, " ");
        }
      }

      var RadioGroupInFormExampleComponent = /*#__PURE__*/function () {
        function RadioGroupInFormExampleComponent(formBuilder) {
          _classCallCheck(this, RadioGroupInFormExampleComponent);

          this.formBuilder = formBuilder;
          this.vegetables = [$localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Cabbage"]))), $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Tomato"]))), $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Carrot"])))];
        }

        _createClass(RadioGroupInFormExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fancyForm = this.formBuilder.group({
              radioGroup: this.formBuilder.control(this.vegetables[1], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }]);

        return RadioGroupInFormExampleComponent;
      }();

      RadioGroupInFormExampleComponent.ɵfac = function RadioGroupInFormExampleComponent_Factory(t) {
        return new (t || RadioGroupInFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      RadioGroupInFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RadioGroupInFormExampleComponent,
        selectors: [["nui-radio-group-in-form-example"]],
        decls: 6,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2149804490499414880$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_IN_FORM_RADIO_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Radio Group");
            i18n_0 = MSG_EXTERNAL_2149804490499414880$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_IN_FORM_RADIO_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241Fa6b27c896615a366373b7f68ddc797384b079cb2\u241F2149804490499414880:Radio Group"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_IN_FORM_RADIO_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Some pretty long text with hint");
            i18n_2 = MSG_EXTERNAL_3367498155686111134$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_IN_FORM_RADIO_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241Fe157d4486793f15c2f27fb0f1011c4e2781f6936\u241F3367498155686111134:Some pretty long text with hint"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4827660480850289382$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_IN_FORM_RADIO_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" This is required. C'mon ");
            i18n_4 = MSG_EXTERNAL_4827660480850289382$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_IN_FORM_RADIO_GROUP_IN_FORM_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241F55a2d69eb1c3b57a9a4baf37f6e88232ed0f9f32\u241F4827660480850289382: This is required. C'mon "])));
          }

          return [[3, "formGroup"], ["caption", i18n_0, "hint", i18n_2, "info", "text", 3, "control"], ["id", "input-radioGroup", "formControlName", "radioGroup", "name", "vegetable", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "required"], i18n_4, [3, "value"]];
        },
        template: function RadioGroupInFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RadioGroupInFormExampleComponent_nui_radio_3_Template, 2, 2, "nui-radio", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-validation-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fancyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.fancyForm.controls["radioGroup"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_3__["RadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_3__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "9hV4":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-in-form/radio-group-in-form.example.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"fancyForm\">\n    <nui-form-field caption=\"Radio Group\"\n                    i18n-caption\n                    hint=\"Some pretty long text with hint\"\n                    i18n-hint\n                    info=\"text\"\n                    [control]=\"fancyForm.controls['radioGroup']\">\n        <nui-radio-group id=\"input-radioGroup\"\n                         formControlName=\"radioGroup\"\n                         name=\"vegetable\" required>\n            <nui-radio *ngFor=\"let vegetable of vegetables\"\n                       [value]=\"vegetable\">\n                {{vegetable}}\n            </nui-radio>\n        </nui-radio-group>\n        <nui-validation-message for=\"required\" i18n>\n            This is required. C'mon\n        </nui-validation-message>\n    </nui-form-field>\n</form>\n";
      /***/
    },

    /***/
    "BWgK":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-visual-test/radio-group-visual-test.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BWgK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h3>Basic Radio Group</h3>\n    <nui-radio-group id=\"fruit-radio-group\"\n                    name=\"fruit\"\n                    [(value)]=\"selectedFruit\">\n        <nui-radio *ngFor=\"let fruit of fruits\"\n                    [value]=\"fruit\"\n                    [checked]=\"fruit === 'Orange'\"\n                    [disabled]=\"fruit === 'Kiwi'\">\n            {{fruit}}\n        </nui-radio>\n    </nui-radio-group>\n    <hr />\n\n    <h3>Radio Group with pre-selected option and hints</h3>\n    <nui-radio-group id=\"color-radio-group\"\n                    name=\"color\"\n                    [(value)]=\"selectedColor\">\n        <nui-radio *ngFor=\"let color of colors\"\n                    [value]=\"color\"\n                    [hint]=\"colorHints[color]\"\n                    [disabled]=\"color === 'Blue'\"\n                    [checked]=\"color === 'Green'\">\n            {{color}}\n        </nui-radio>\n    </nui-radio-group>\n    <hr />\n\n    <h3>Inline Horizontal Group</h3>\n    <nui-radio-group class=\"nui-radio-group-inline\"\n                    id=\"inline-color-radio-group\"\n                    name=\"color\"\n                    [(value)]=\"selectedColor\">\n        <nui-radio *ngFor=\"let color of colors\"\n                    [value]=\"color\"\n                    [hint]=\"colorHints[color]\"\n                    [disabled]=\"color === 'Red'\"\n                    [checked]=\"color === 'Green'\">\n            {{color}}\n        </nui-radio>\n    </nui-radio-group>\n    <hr />\n\n    <h3>Part Of Form</h3>\n    <nui-radio-group-in-form-example id=\"vegetable-radio-group\"></nui-radio-group-in-form-example>\n    <hr />\n\n    <form [formGroup]=\"disabledForm\">\n        <nui-form-field caption=\"Disabled Radio Group in form\"\n                        [control]=\"disabledForm.controls['radioGroup']\">\n            <nui-radio-group id=\"fruit-radio-group-disabled\"\n                             formControlName=\"radioGroup\"\n                             name=\"fruit-disabled\">\n                <nui-radio *ngFor=\"let fruit of fruits\"\n                            [value]=\"fruit\">\n                    {{fruit}}\n                </nui-radio>\n            </nui-radio-group>\n        </nui-form-field>\n    </form>\n</div>\n";
      /***/
    },

    /***/
    "D9z8":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-docs/radio-group-docs.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D9z8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-radio-docs-example\",\n    templateUrl: \"./radio-group-docs.example.component.html\",\n})\nexport class RadioGroupDocsExampleComponent {\n}\n";
      /***/
    },

    /***/
    "F8B8":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-with-hints/radio-group-hints.example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F8B8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-with-hints-radio-group-example\",\n    templateUrl: \"./radio-group-hints.example.component.html\",\n})\nexport class RadioGroupHintsExampleComponent {\n    public colors = [$localize `Red`, $localize `Green`, $localize `Blue`];\n    public colorHints = { \"Red\": $localize `hot color`, \"Green\": $localize `color of nature`, \"Blue\": $localize `color of sky` };\n    public selectedColor: string;\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "GGa2":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/value-change-radio-group/value-change-radio-group.example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GGa2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-value-change-radio-group-example\",\n    templateUrl: \"./value-change-radio-group.example.component.html\",\n})\nexport class ValueChangeRadioGroupExampleComponent {\n    public colors = [$localize `Red`, $localize `Green`, $localize `Blue`];\n    public colorHints = { \"Red\": $localize `hot color`, \"Green\": $localize `color of nature`, \"Blue\": $localize `color of sky` };\n    public selectedColor: string;\n\n    constructor(@Inject(ToastService) private toastService: IToastService) {}\n\n    public showSelected() {\n        this.toastService.success({\n            message: $localize `You selected ${this.selectedColor}. Nice!`,\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "Lurw":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/basic-radio-group/basic-radio-group.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: BasicRadioGroupExampleComponent */

    /***/
    function Lurw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicRadioGroupExampleComponent", function () {
        return BasicRadioGroupExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BasicRadioGroupExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fruit_r1)("checked", fruit_r1 === "Orange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruit_r1, " ");
        }
      }

      var BasicRadioGroupExampleComponent = function BasicRadioGroupExampleComponent() {
        _classCallCheck(this, BasicRadioGroupExampleComponent);

        this.fruits = [$localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Banana"]))), $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Orange"]))), $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Kiwi"]))), $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Papaya"])))];
      };

      BasicRadioGroupExampleComponent.ɵfac = function BasicRadioGroupExampleComponent_Factory(t) {
        return new (t || BasicRadioGroupExampleComponent)();
      };

      BasicRadioGroupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasicRadioGroupExampleComponent,
        selectors: [["nui-basic-radio-group-example"]],
        decls: 4,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8732319579184328444$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_BASIC_RADIO_GROUP_BASIC_RADIO_GROUP_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selected fruit: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_8732319579184328444$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_BASIC_RADIO_GROUP_BASIC_RADIO_GROUP_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241F76fcbe97be58e408b35d13a78f727194e9b6688c\u241F8732319579184328444:Selected fruit: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [i18n_0, ["name", "fruit", 3, "value", "valueChange"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "value", "checked"]];
        },
        template: function BasicRadioGroupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function BasicRadioGroupExampleComponent_Template_nui_radio_group_valueChange_2_listener($event) {
              return ctx.selectedFruit = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BasicRadioGroupExampleComponent_nui_radio_3_Template, 2, 3, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fruits);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "O42u":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-with-hints/radio-group-hints.example.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O42u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 i18n>Selected color: {{selectedColor}}</h1>\n<nui-radio-group id=\"color-radio-group\"\n                 name=\"color\"\n                 [(value)]=\"selectedColor\">\n    <nui-radio *ngFor=\"let color of colors\"\n               [value]=\"color\"\n               [checked]=\"color === 'Green'\"\n               [hint]=\"colorHints[color]\">\n        {{color}}\n    </nui-radio>\n</nui-radio-group>\n";
      /***/
    },

    /***/
    "P67R":
    /*!*******************************************************!*\
      !*** ./demo/src/components/demo/radio-group/index.ts ***!
      \*******************************************************/

    /*! exports provided: RadioGroupDocsExampleComponent, BasicRadioGroupExampleComponent, DisabledRadioGroupExampleComponent, RadioGroupHintsExampleComponent, ValueChangeRadioGroupExampleComponent, RadioGroupInlineExampleComponent, RadioGroupVisualTestComponent, RadioGroupInFormExampleComponent, RadioGroupTestComponent */

    /***/
    function P67R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _radio_group_docs_radio_group_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./radio-group-docs/radio-group-docs.example.component */
      "X0+J");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupDocsExampleComponent", function () {
        return _radio_group_docs_radio_group_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["RadioGroupDocsExampleComponent"];
      });
      /* harmony import */


      var _basic_radio_group_basic_radio_group_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-radio-group/basic-radio-group.example.component */
      "Lurw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BasicRadioGroupExampleComponent", function () {
        return _basic_radio_group_basic_radio_group_example_component__WEBPACK_IMPORTED_MODULE_1__["BasicRadioGroupExampleComponent"];
      });
      /* harmony import */


      var _disabled_radio_group_disabled_radio_group_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./disabled-radio-group/disabled-radio-group.example.component */
      "1SyL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DisabledRadioGroupExampleComponent", function () {
        return _disabled_radio_group_disabled_radio_group_example_component__WEBPACK_IMPORTED_MODULE_2__["DisabledRadioGroupExampleComponent"];
      });
      /* harmony import */


      var _radio_group_with_hints_radio_group_hints_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./radio-group-with-hints/radio-group-hints.example.component */
      "S8sn");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupHintsExampleComponent", function () {
        return _radio_group_with_hints_radio_group_hints_example_component__WEBPACK_IMPORTED_MODULE_3__["RadioGroupHintsExampleComponent"];
      });
      /* harmony import */


      var _value_change_radio_group_value_change_radio_group_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./value-change-radio-group/value-change-radio-group.example.component */
      "ksBc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ValueChangeRadioGroupExampleComponent", function () {
        return _value_change_radio_group_value_change_radio_group_example_component__WEBPACK_IMPORTED_MODULE_4__["ValueChangeRadioGroupExampleComponent"];
      });
      /* harmony import */


      var _radio_group_inline_radio_group_inline_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./radio-group-inline/radio-group-inline.example.component */
      "llyl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupInlineExampleComponent", function () {
        return _radio_group_inline_radio_group_inline_example_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupInlineExampleComponent"];
      });
      /* harmony import */


      var _radio_group_visual_test_radio_group_visual_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./radio-group-visual-test/radio-group-visual-test.component */
      "3kM1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupVisualTestComponent", function () {
        return _radio_group_visual_test_radio_group_visual_test_component__WEBPACK_IMPORTED_MODULE_6__["RadioGroupVisualTestComponent"];
      });
      /* harmony import */


      var _radio_group_in_form_radio_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./radio-group-in-form/radio-group-in-form.example.component */
      "9LW3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupInFormExampleComponent", function () {
        return _radio_group_in_form_radio_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_7__["RadioGroupInFormExampleComponent"];
      });
      /* harmony import */


      var _radio_group_test_radio_group_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./radio-group-test/radio-group-test.component */
      "Ytpc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupTestComponent", function () {
        return _radio_group_test_radio_group_test_component__WEBPACK_IMPORTED_MODULE_8__["RadioGroupTestComponent"];
      });
      /***/

    },

    /***/
    "PfI1":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/basic-radio-group/basic-radio-group.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PfI1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-basic-radio-group-example\",\n    templateUrl: \"./basic-radio-group.example.component.html\",\n})\nexport class BasicRadioGroupExampleComponent {\n    public fruits = [$localize `Banana`, $localize `Orange`, $localize `Kiwi`, $localize `Papaya`];\n    public selectedFruit: string;\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "Posh":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-docs/radio-group-docs.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Posh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-radio-group&gt;</code> is used to get and store value of selected <code>&lt;nui-radio&gt;</code>\n    buttons. Radio buttons allow users to choose one option from a set of mutually exclusive options.\n    The user must select only one option, never zero.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiRadioModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To implement a radio group you need to pass a variable to <code>[(value)]</code> where you want to store the\n    selected radio button.\n    Then just add <code>&lt;nui-radio&gt;</code> with <code>[value]</code> property inside\n    <code>&lt;nui-radio-group&gt;</code>.\n    Also you can preselect value of <code>&lt;nui-radio&gt;</code> using <code>[checked]</code> property.\n</p>\n<nui-example-wrapper filenamePrefix=\"basic-radio-group\" exampleTitle=\"Basic usage\">\n    <nui-basic-radio-group-example></nui-basic-radio-group-example>\n</nui-example-wrapper>\n\n<h2>Inline</h2>\n<p>\n    Add <code>class=\"nui-radio-group-inline\"</code> to <code>&lt;nui-radio-group&gt;</code>\n    to display radio group inline.\n</p>\n<nui-example-wrapper filenamePrefix=\"radio-group-inline\" exampleTitle=\"Inline\">\n    <nui-radio-group-inline-example></nui-radio-group-inline-example>\n</nui-example-wrapper>\n\n<h2>Disabled</h2>\n<p>\n    To disable a radio button inside radio group you need to pass <code>[disabled]</code>\n    property to the <code>&lt;nui-radio&gt;</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"disabled-radio-group\" exampleTitle=\"Disabled\">\n    <nui-disabled-radio-group-example></nui-disabled-radio-group-example>\n</nui-example-wrapper>\n\n<h2>Hints</h2>\n<p>\n    If you want to have hints below the radio buttons then you need to pass <code>[hint]</code> property to the\n    <code>&lt;nui-radio&gt;</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"radio-group-hints\" exampleTitle=\"Hints\">\n    <nui-with-hints-radio-group-example></nui-with-hints-radio-group-example>\n</nui-example-wrapper>\n\n<h2>Value Change Event</h2>\n<p>\n    You can pass <code>(valueChange)</code> property to the <code>&lt;nui-radio-group&gt;</code> and do something\n    when the value of radio group changes.\n</p>\n<nui-example-wrapper filenamePrefix=\"value-change-radio-group\" exampleTitle=\"Value change event\">\n    <nui-value-change-radio-group-example></nui-value-change-radio-group-example>\n</nui-example-wrapper>\n\n<h2>Part Of Form</h2>\n<p>\n    <code>&lt;nui-radio-group&gt;</code> can be used in reactive forms.\n</p>\n<nui-example-wrapper filenamePrefix=\"radio-group-in-form\" exampleTitle=\"In form\">\n    <nui-radio-group-in-form-example></nui-radio-group-in-form-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "RD99":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-inline/radio-group-inline.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RD99(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-radio-group-inline-example\",\n    templateUrl: \"./radio-group-inline.example.component.html\",\n})\nexport class RadioGroupInlineExampleComponent {\n    public fruits = [$localize `Banana`, $localize `Orange`, $localize `Kiwi`, $localize `Papaya`];\n    public selectedFruit: string;\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "S8sn":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group-with-hints/radio-group-hints.example.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: RadioGroupHintsExampleComponent */

    /***/
    function S8sn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupHintsExampleComponent", function () {
        return RadioGroupHintsExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RadioGroupHintsExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", color_r1)("checked", color_r1 === "Green")("hint", ctx_r0.colorHints[color_r1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", color_r1, " ");
        }
      }

      var RadioGroupHintsExampleComponent = function RadioGroupHintsExampleComponent() {
        _classCallCheck(this, RadioGroupHintsExampleComponent);

        this.colors = [$localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Red"]))), $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Green"]))), $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Blue"])))];
        this.colorHints = {
          "Red": $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["hot color"]))),
          "Green": $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["color of nature"]))),
          "Blue": $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["color of sky"])))
        };
      };

      RadioGroupHintsExampleComponent.ɵfac = function RadioGroupHintsExampleComponent_Factory(t) {
        return new (t || RadioGroupHintsExampleComponent)();
      };

      RadioGroupHintsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RadioGroupHintsExampleComponent,
        selectors: [["nui-with-hints-radio-group-example"]],
        decls: 4,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9064383497908812977$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_WITH_HINTS_RADIO_GROUP_HINTS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selected color: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_9064383497908812977$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_WITH_HINTS_RADIO_GROUP_HINTS_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241F29f157c41e563e411cfa5dc0a3134f0bb4313b77\u241F9064383497908812977:Selected color: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [i18n_0, ["id", "color-radio-group", "name", "color", 3, "value", "valueChange"], [3, "value", "checked", "hint", 4, "ngFor", "ngForOf"], [3, "value", "checked", "hint"]];
        },
        template: function RadioGroupHintsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RadioGroupHintsExampleComponent_Template_nui_radio_group_valueChange_2_listener($event) {
              return ctx.selectedColor = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RadioGroupHintsExampleComponent_nui_radio_3_Template, 2, 4, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colors);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Tjpb":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/basic-radio-group/basic-radio-group.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tjpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 i18n>Selected fruit: {{selectedFruit}}</h1>\n<nui-radio-group name=\"fruit\"\n                 [(value)]=\"selectedFruit\">\n    <nui-radio *ngFor=\"let fruit of fruits\"\n               [value]=\"fruit\"\n               [checked]=\"fruit === 'Orange'\">\n        {{fruit}}\n    </nui-radio>\n</nui-radio-group>\n";
      /***/
    },

    /***/
    "X0+J":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group-docs/radio-group-docs.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: RadioGroupDocsExampleComponent */

    /***/
    function X0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupDocsExampleComponent", function () {
        return RadioGroupDocsExampleComponent;
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


      var _basic_radio_group_basic_radio_group_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../basic-radio-group/basic-radio-group.example.component */
      "Lurw");
      /* harmony import */


      var _radio_group_inline_radio_group_inline_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../radio-group-inline/radio-group-inline.example.component */
      "llyl");
      /* harmony import */


      var _disabled_radio_group_disabled_radio_group_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../disabled-radio-group/disabled-radio-group.example.component */
      "1SyL");
      /* harmony import */


      var _radio_group_with_hints_radio_group_hints_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../radio-group-with-hints/radio-group-hints.example.component */
      "S8sn");
      /* harmony import */


      var _value_change_radio_group_value_change_radio_group_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../value-change-radio-group/value-change-radio-group.example.component */
      "ksBc");
      /* harmony import */


      var _radio_group_in_form_radio_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../radio-group-in-form/radio-group-in-form.example.component */
      "9LW3");

      var RadioGroupDocsExampleComponent = function RadioGroupDocsExampleComponent() {
        _classCallCheck(this, RadioGroupDocsExampleComponent);
      };

      RadioGroupDocsExampleComponent.ɵfac = function RadioGroupDocsExampleComponent_Factory(t) {
        return new (t || RadioGroupDocsExampleComponent)();
      };

      RadioGroupDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RadioGroupDocsExampleComponent,
        selectors: [["nui-radio-docs-example"]],
        decls: 93,
        vars: 0,
        consts: [["filenamePrefix", "basic-radio-group", "exampleTitle", "Basic usage"], ["filenamePrefix", "radio-group-inline", "exampleTitle", "Inline"], ["filenamePrefix", "disabled-radio-group", "exampleTitle", "Disabled"], ["filenamePrefix", "radio-group-hints", "exampleTitle", "Hints"], ["filenamePrefix", "value-change-radio-group", "exampleTitle", "Value change event"], ["filenamePrefix", "radio-group-in-form", "exampleTitle", "In form"]],
        template: function RadioGroupDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-radio-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is used to get and store value of selected ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<nui-radio>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " buttons. Radio buttons allow users to choose one option from a set of mutually exclusive options. The user must select only one option, never zero.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NuiRadioModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " To implement a radio group you need to pass a variable to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "[(value)]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " where you want to store the selected radio button. Then just add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "<nui-radio>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "[value]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " property inside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "<nui-radio-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ". Also you can preselect value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "<nui-radio>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "[checked]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " property.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nui-basic-radio-group-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Add ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "class=\"nui-radio-group-inline\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "<nui-radio-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " to display radio group inline.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "nui-radio-group-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " To disable a radio button inside radio group you need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "[disabled]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " property to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "<nui-radio>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "nui-disabled-radio-group-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Hints");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " If you want to have hints below the radio buttons then you need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "[hint]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " property to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "<nui-radio>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nui-with-hints-radio-group-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Value Change Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " You can pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "(valueChange)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " property to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "<nui-radio-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " and do something when the value of radio group changes.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nui-value-change-radio-group-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Part Of Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "<nui-radio-group>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " can be used in reactive forms.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "nui-radio-group-in-form-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _basic_radio_group_basic_radio_group_example_component__WEBPACK_IMPORTED_MODULE_2__["BasicRadioGroupExampleComponent"], _radio_group_inline_radio_group_inline_example_component__WEBPACK_IMPORTED_MODULE_3__["RadioGroupInlineExampleComponent"], _disabled_radio_group_disabled_radio_group_example_component__WEBPACK_IMPORTED_MODULE_4__["DisabledRadioGroupExampleComponent"], _radio_group_with_hints_radio_group_hints_example_component__WEBPACK_IMPORTED_MODULE_5__["RadioGroupHintsExampleComponent"], _value_change_radio_group_value_change_radio_group_example_component__WEBPACK_IMPORTED_MODULE_6__["ValueChangeRadioGroupExampleComponent"], _radio_group_in_form_radio_group_in_form_example_component__WEBPACK_IMPORTED_MODULE_7__["RadioGroupInFormExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Ytpc":
    /*!*********************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group-test/radio-group-test.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: RadioGroupTestComponent */

    /***/
    function Ytpc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupTestComponent", function () {
        return RadioGroupTestComponent;
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


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      function RadioGroupTestComponent_nui_radio_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fruit_r2)("checked", fruit_r2 === "Orange")("disabled", fruit_r2 === "Banana");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", fruit_r2, " ");
        }
      }

      function RadioGroupTestComponent_nui_radio_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", vegetable_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", vegetable_r3, " ");
        }
      }

      var RadioGroupTestComponent = /*#__PURE__*/function () {
        function RadioGroupTestComponent(formBuilder) {
          _classCallCheck(this, RadioGroupTestComponent);

          this.formBuilder = formBuilder;
          this.fruits = [$localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Banana"]))), $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Orange"]))), $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Kiwi"]))), $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Papaya"])))];
          this.vegetables = [$localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Cabbage"]))), $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Tomato"]))), $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Carrot"])))];
        }

        _createClass(RadioGroupTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.disabledForm = this.formBuilder.group({
              radioGroup: this.formBuilder.control({
                value: "",
                disabled: true
              })
            });
          }
        }, {
          key: "toggleDisabled",
          value: function toggleDisabled(event) {
            var _a;

            (_a = this.disabledForm.get("radioGroup")) === null || _a === void 0 ? void 0 : _a[!event.target.checked ? "enable" : "disable"]();
          }
        }]);

        return RadioGroupTestComponent;
      }();

      RadioGroupTestComponent.ɵfac = function RadioGroupTestComponent_Factory(t) {
        return new (t || RadioGroupTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      RadioGroupTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RadioGroupTestComponent,
        selectors: [["nui-radio-group-test"]],
        decls: 9,
        vars: 6,
        consts: [[1, "container"], ["id", "basic-radio-group", "name", "fruit", 3, "value", "valueChange"], [3, "value", "checked", "disabled", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["caption", "Radio Group", 3, "control"], ["id", "disabled-radio-group", "formControlName", "radioGroup", "name", "vegetable"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "toggle-disabled-group-checkbox", 3, "checked", "valueChange"], [3, "value", "checked", "disabled"], [3, "value"]],
        template: function RadioGroupTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RadioGroupTestComponent_Template_nui_radio_group_valueChange_1_listener($event) {
              return ctx.selectedFruit = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RadioGroupTestComponent_nui_radio_2_Template, 2, 4, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-radio-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RadioGroupTestComponent_nui_radio_6_Template, 2, 2, "nui-radio", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RadioGroupTestComponent_Template_nui_checkbox_valueChange_7_listener($event) {
              return ctx.toggleDisabled($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Disabled ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.disabledForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.disabledForm.controls["radioGroup"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.vegetables);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "e8M6":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-test/radio-group-test.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e8M6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <nui-radio-group id=\"basic-radio-group\"\n                    name=\"fruit\"\n                    [(value)]=\"selectedFruit\">\n        <nui-radio *ngFor=\"let fruit of fruits\"\n                    [value]=\"fruit\"\n                    [checked]=\"fruit === 'Orange'\"\n                    [disabled]=\"fruit === 'Banana'\">\n        {{fruit}}\n        </nui-radio>\n    </nui-radio-group>\n\n\n    <form [formGroup]=\"disabledForm\">\n        <nui-form-field caption=\"Radio Group\"\n                        [control]=\"disabledForm.controls['radioGroup']\">\n            <nui-radio-group id=\"disabled-radio-group\"\n                             formControlName=\"radioGroup\"\n                             name=\"vegetable\">\n                <nui-radio *ngFor=\"let vegetable of vegetables\"\n                            [value]=\"vegetable\">\n                    {{vegetable}}\n                </nui-radio>\n            </nui-radio-group>\n        </nui-form-field>\n    </form>\n    <nui-checkbox id=\"toggle-disabled-group-checkbox\"\n                [checked]=\"true\"\n                (valueChange)=\"toggleDisabled($event)\">\n                Disabled\n    </nui-checkbox>\n</div>\n";
      /***/
    },

    /***/
    "gWQZ":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/value-change-radio-group/value-change-radio-group.example.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gWQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1 i18n>Selected color: {{selectedColor}}</h1>\n<nui-radio-group name=\"color\"\n                 [(value)]=\"selectedColor\"\n                 (valueChange)=\"showSelected()\">\n    <nui-radio *ngFor=\"let color of colors\"\n               [value]=\"color\"\n               [hint]=\"colorHints[color]\">\n        {{color}}\n    </nui-radio>\n</nui-radio-group>\n";
      /***/
    },

    /***/
    "ksBc":
    /*!*********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/value-change-radio-group/value-change-radio-group.example.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ValueChangeRadioGroupExampleComponent */

    /***/
    function ksBc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValueChangeRadioGroupExampleComponent", function () {
        return ValueChangeRadioGroupExampleComponent;
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


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ValueChangeRadioGroupExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-radio", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var color_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", color_r1)("hint", ctx_r0.colorHints[color_r1]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", color_r1, " ");
        }
      }

      var ValueChangeRadioGroupExampleComponent = /*#__PURE__*/function () {
        function ValueChangeRadioGroupExampleComponent(toastService) {
          _classCallCheck(this, ValueChangeRadioGroupExampleComponent);

          this.toastService = toastService;
          this.colors = [$localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Red"]))), $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Green"]))), $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Blue"])))];
          this.colorHints = {
            "Red": $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["hot color"]))),
            "Green": $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["color of nature"]))),
            "Blue": $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["color of sky"])))
          };
        }

        _createClass(ValueChangeRadioGroupExampleComponent, [{
          key: "showSelected",
          value: function showSelected() {
            this.toastService.success({
              message: $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["You selected ", ". Nice!"])), this.selectedColor)
            });
          }
        }]);

        return ValueChangeRadioGroupExampleComponent;
      }();

      ValueChangeRadioGroupExampleComponent.ɵfac = function ValueChangeRadioGroupExampleComponent_Factory(t) {
        return new (t || ValueChangeRadioGroupExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      ValueChangeRadioGroupExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ValueChangeRadioGroupExampleComponent,
        selectors: [["nui-value-change-radio-group-example"]],
        decls: 4,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9064383497908812977$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_VALUE_CHANGE_RADIO_GROUP_VALUE_CHANGE_RADIO_GROUP_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selected color: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_9064383497908812977$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_VALUE_CHANGE_RADIO_GROUP_VALUE_CHANGE_RADIO_GROUP_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral([":\u241F29f157c41e563e411cfa5dc0a3134f0bb4313b77\u241F9064383497908812977:Selected color: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [i18n_0, ["name", "color", 3, "value", "valueChange"], [3, "value", "hint", 4, "ngFor", "ngForOf"], [3, "value", "hint"]];
        },
        template: function ValueChangeRadioGroupExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ValueChangeRadioGroupExampleComponent_Template_nui_radio_group_valueChange_2_listener($event) {
              return ctx.selectedColor = $event;
            })("valueChange", function ValueChangeRadioGroupExampleComponent_Template_nui_radio_group_valueChange_2_listener() {
              return ctx.showSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ValueChangeRadioGroupExampleComponent_nui_radio_3_Template, 2, 3, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.colors);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "llyl":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/radio-group/radio-group-inline/radio-group-inline.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: RadioGroupInlineExampleComponent */

    /***/
    function llyl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioGroupInlineExampleComponent", function () {
        return RadioGroupInlineExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RadioGroupInlineExampleComponent_nui_radio_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", fruit_r1)("checked", fruit_r1 === "Orange");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruit_r1, " ");
        }
      }

      var RadioGroupInlineExampleComponent = function RadioGroupInlineExampleComponent() {
        _classCallCheck(this, RadioGroupInlineExampleComponent);

        this.fruits = [$localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Banana"]))), $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Orange"]))), $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Kiwi"]))), $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Papaya"])))];
      };

      RadioGroupInlineExampleComponent.ɵfac = function RadioGroupInlineExampleComponent_Factory(t) {
        return new (t || RadioGroupInlineExampleComponent)();
      };

      RadioGroupInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RadioGroupInlineExampleComponent,
        selectors: [["nui-radio-group-inline-example"]],
        decls: 4,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8732319579184328444$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_INLINE_RADIO_GROUP_INLINE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selected fruit: {$interpolation}", {
              "interpolation": "\uFFFD0\uFFFD"
            });
            i18n_0 = MSG_EXTERNAL_8732319579184328444$$DEMO_SRC_COMPONENTS_DEMO_RADIO_GROUP_RADIO_GROUP_INLINE_RADIO_GROUP_INLINE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral([":\u241F76fcbe97be58e408b35d13a78f727194e9b6688c\u241F8732319579184328444:Selected fruit: ", ":INTERPOLATION:"])), "\uFFFD0\uFFFD");
          }

          return [i18n_0, ["id", "fruit-radio-group-inline", "name", "fruit", 1, "nui-radio-group-inline", 3, "value", "valueChange"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "value", "checked"]];
        },
        template: function RadioGroupInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RadioGroupInlineExampleComponent_Template_nui_radio_group_valueChange_2_listener($event) {
              return ctx.selectedFruit = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RadioGroupInlineExampleComponent_nui_radio_3_Template, 2, 3, "nui-radio", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedFruit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fruits);
          }
        },
        directives: [_src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_1__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "lqxX":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-in-form/radio-group-in-form.example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lqxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\n\n\n@Component({\n    selector: \"nui-radio-group-in-form-example\",\n    templateUrl: \"./radio-group-in-form.example.component.html\",\n})\nexport class RadioGroupInFormExampleComponent implements OnInit {\n    public fancyForm: FormGroup;\n\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n    constructor(private formBuilder: FormBuilder) {}\n    public ngOnInit() {\n        this.fancyForm = this.formBuilder.group({\n            radioGroup: this.formBuilder.control(this.vegetables[1], [\n                Validators.required,\n            ]),\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "q5Yi":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/disabled-radio-group/disabled-radio-group.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function q5Yi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-disabled-radio-group-example\",\n    templateUrl: \"./disabled-radio-group.example.component.html\",\n})\nexport class DisabledRadioGroupExampleComponent {\n    public fruits = [$localize `Banana`, $localize `Orange`, $localize `Kiwi`, $localize `Papaya`];\n    public selectedFruit: string;\n\n    constructor() { }\n}\n";
      /***/
    },

    /***/
    "snYg":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/index.ts ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function snYg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./radio-group-docs/radio-group-docs.example.component\";\nexport * from \"./basic-radio-group/basic-radio-group.example.component\";\nexport * from \"./disabled-radio-group/disabled-radio-group.example.component\";\nexport * from \"./radio-group-with-hints/radio-group-hints.example.component\";\nexport * from \"./value-change-radio-group/value-change-radio-group.example.component\";\nexport * from \"./radio-group-inline/radio-group-inline.example.component\";\nexport * from \"./radio-group-visual-test/radio-group-visual-test.component\";\nexport * from \"./radio-group-in-form/radio-group-in-form.example.component\";\nexport * from \"./radio-group-test/radio-group-test.component\";\n";
      /***/
    },

    /***/
    "zQ9T":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/radio-group/radio-group-visual-test/radio-group-visual-test.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zQ9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\n\n@Component({\n    selector: \"nui-radio-group-visual-test\",\n    templateUrl: \"./radio-group-visual-test.component.html\",\n})\nexport class RadioGroupVisualTestComponent implements OnInit {\n    public disabledForm: FormGroup;\n    public colors = [\"Red\", \"Green\", \"Blue\"];\n    public colorHints = { \"Red\": \"hot color\", \"Green\": \"color of nature\", \"Blue\": \"color of sky\" };\n    public fruits = [\"Banana\", \"Orange\", \"Kiwi\", \"Papaya\"];\n    public selectedFruit: string;\n    public selectedColor: string;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    public ngOnInit() {\n        this.disabledForm = this.formBuilder.group({\n            radioGroup: this.formBuilder.control({value: \"\", disabled: true}),\n        });\n    }\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-radio-group-radio-group-module-es5.js.map