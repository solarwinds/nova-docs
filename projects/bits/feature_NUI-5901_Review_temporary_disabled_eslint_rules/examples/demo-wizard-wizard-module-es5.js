(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-wizard-wizard-module"], {
    /***/
    "+QPo":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-steps/wizard-steps.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QPo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy, OnInit, ViewChild } from \"@angular/core\";\nimport { IWizardSelectionEvent, WizardComponent, WizardStepComponent } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { takeUntil } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-wizard-steps-example\",\n    templateUrl: \"./wizard-steps.example.component.html\",\n})\nexport class WizardStepsExampleComponent implements OnDestroy, OnInit {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"dynamicStep\") dynamicStep: WizardStepComponent;\n\n    public selectedIndex: number;\n\n    private destroy$ = new Subject();\n    \n    public myForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n\n    public ngOnInit(): void {\n        this.myForm = this.formBuilder.group({\n            name: this.formBuilder.control(\"\",\n                                           Validators.required),\n            email: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.pattern(\"[^ @]*@[^ @]*\"),\n                Validators.email,\n            ]),\n            password: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.minLength(8),\n            ]),\n        });\n    }\n\n    public select(event: IWizardSelectionEvent): void {\n        this.selectedIndex = event.selectedIndex;\n    }\n\n    public addStep(): void {\n        // addStepDynamic returns an instance of WizardStepComponent that was dynamically added\n        const step: WizardStepComponent = this.wizardComponent.addStepDynamic(this.dynamicStep, this.selectedIndex + 1);\n        \n        step.enter.pipe(takeUntil(this.destroy$))\n            .subscribe(() => console.log(`Enter event has been emitted from WizardStepComponent`));\n\n        step.exit.pipe(takeUntil(this.destroy$))\n            .subscribe(() => console.log(`Exit event has been emitted from WizardStepComponent`));\n    }\n\n    public ngOnDestroy(): void {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n}\n";
      /***/
    },

    /***/
    "/qNy":
    /*!****************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-steps/wizard-steps.example.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: WizardStepsExampleComponent */

    /***/
    function qNy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardStepsExampleComponent", function () {
        return WizardStepsExampleComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");

      var _c0 = ["wizardComponent"];
      var _c1 = ["dynamicStep"];

      function WizardStepsExampleComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WizardStepsExampleComponent_ng_template_8_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.addStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardStepsExampleComponent_ng_template_10_nui_validation_message_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardStepsExampleComponent_ng_template_10_nui_validation_message_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardStepsExampleComponent_ng_template_10_nui_validation_message_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardStepsExampleComponent_ng_template_10_nui_validation_message_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function WizardStepsExampleComponent_ng_template_10_nui_validation_message_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-validation-message", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c32 = function _c32() {
        return ["email"];
      };

      var _c33 = function _c33() {
        return ["password"];
      };

      function WizardStepsExampleComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nui-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "nui-textbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nui-form-field", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nui-textbox", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WizardStepsExampleComponent_ng_template_10_nui_validation_message_7_Template, 2, 0, "nui-validation-message", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, WizardStepsExampleComponent_ng_template_10_nui_validation_message_8_Template, 2, 0, "nui-validation-message", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, WizardStepsExampleComponent_ng_template_10_nui_validation_message_9_Template, 2, 0, "nui-validation-message", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nui-validation-message", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](11, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nui-form-field", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "nui-textbox", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WizardStepsExampleComponent_ng_template_10_nui_validation_message_15_Template, 2, 0, "nui-validation-message", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WizardStepsExampleComponent_ng_template_10_nui_validation_message_16_Template, 2, 0, "nui-validation-message", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "nui-validation-message", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](18, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var tmp_2_0 = null;
          var tmp_3_0 = null;
          var tmp_4_0 = null;
          var tmp_8_0 = null;
          var tmp_9_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r7.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r7.myForm.controls["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r7.myForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c32))) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r7.myForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c32))) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r7.myForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c32))) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r7.myForm.controls["password"])("showOptionalText", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r7.myForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c33))) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r7.myForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c33))) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show", true);
        }
      }

      function WizardStepsExampleComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](1, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var WizardStepsExampleComponent = /*#__PURE__*/function () {
        function WizardStepsExampleComponent(formBuilder) {
          _classCallCheck(this, WizardStepsExampleComponent);

          this.formBuilder = formBuilder;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(WizardStepsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              name: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
              email: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
              password: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
            });
          }
        }, {
          key: "select",
          value: function select(event) {
            this.selectedIndex = event.selectedIndex;
          }
        }, {
          key: "addStep",
          value: function addStep() {
            // addStepDynamic returns an instance of WizardStepComponent that was dynamically added
            var step = this.wizardComponent.addStepDynamic(this.dynamicStep, this.selectedIndex + 1);
            step.enter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function () {
              return console.log("Enter event has been emitted from WizardStepComponent");
            });
            step.exit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function () {
              return console.log("Exit event has been emitted from WizardStepComponent");
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return WizardStepsExampleComponent;
      }();

      WizardStepsExampleComponent.ɵfac = function WizardStepsExampleComponent_Factory(t) {
        return new (t || WizardStepsExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      WizardStepsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: WizardStepsExampleComponent,
        selectors: [["nui-wizard-steps-example"]],
        viewQuery: function WizardStepsExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dynamicStep = _t.first);
          }
        },
        decls: 14,
        vars: 5,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Finish");
            i18n_2 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7648268751296041024$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Add step dynamically");
            i18n_4 = MSG_EXTERNAL_7648268751296041024$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Fbd5772b9673205503673958067be0dd245d3955b\u241F7648268751296041024:Add step dynamically"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7555941619776368370$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Third step");
            i18n_6 = MSG_EXTERNAL_7555941619776368370$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F58c5b4c2622894df7f56d5c6c3ff7d0703d93ba2\u241F7555941619776368370:Third step"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! You can add next step dynamically");
            i18n_8 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F9dfa7b9ebe128bde7cab896a85986ebb450f99f7\u241F4074000604906025359:Hi! You can add next step dynamically"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2815688941003513063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Add dynamic step");
            i18n_10 = MSG_EXTERNAL_2815688941003513063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F7f455eb4baba5bce4523070171e75e46bbc0a4b6\u241F2815688941003513063:Add dynamic step"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Name");
            i18n_12 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("Email");
            i18n_14 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241F244aae9346da82b0922506c2d2581373a15641cc\u241F4768749765465246664:Email"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_104115633754407961$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__17 = goog.getMsg(" This message is always here ");
            i18n_16 = MSG_EXTERNAL_104115633754407961$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__17;
          } else {
            i18n_16 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F41f758f0c10865be5ce4dd69cb37b6cd28457ef6\u241F104115633754407961: This message is always here "])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__19 = goog.getMsg("Password");
            i18n_18 = MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__19;
          } else {
            i18n_18 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241Fc32ef07f8803a223a83ed17024b38e8d82292407\u241F1431416938026210429:Password"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_104115633754407961$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__21 = goog.getMsg(" This message is always here ");
            i18n_20 = MSG_EXTERNAL_104115633754407961$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__21;
          } else {
            i18n_20 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241F41f758f0c10865be5ce4dd69cb37b6cd28457ef6\u241F104115633754407961: This message is always here "])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___23 = goog.getMsg(" This is required ");
            i18n_22 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___23;
          } else {
            i18n_22 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F42b47c9df37297506ee0ddf14763cb0ddfa58ea6\u241F5777549257495630003: This is required "])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3099868474448484472$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___25 = goog.getMsg(" Please put at least \"@\" to pass this validator ");
            i18n_24 = MSG_EXTERNAL_3099868474448484472$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___25;
          } else {
            i18n_24 = $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([":\u241Fb6d39c8dc54711c73844a8e8fb0d28083686fb9c\u241F3099868474448484472: Please put at least \"@\" to pass this validator "])));
          }

          var i18n_26;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1993848246772897942$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___27 = goog.getMsg(" This should be a valid email? ");
            i18n_26 = MSG_EXTERNAL_1993848246772897942$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___27;
          } else {
            i18n_26 = $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([":\u241Fb3622c7de0d27ada81ddb98962219c3c28cd2391\u241F1993848246772897942: This should be a valid email? "])));
          }

          var i18n_28;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___29 = goog.getMsg(" This is required ");
            i18n_28 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___29;
          } else {
            i18n_28 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F42b47c9df37297506ee0ddf14763cb0ddfa58ea6\u241F5777549257495630003: This is required "])));
          }

          var i18n_30;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1167811080737319619$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___31 = goog.getMsg(" Minimum length is 8 ");
            i18n_30 = MSG_EXTERNAL_1167811080737319619$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS___31;
          } else {
            i18n_30 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241F48d8ea160d17791496135040fb79f5e1379a9e77\u241F1167811080737319619: Minimum length is 8 "])));
          }

          var i18n_34;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9115950652940647254$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__35 = goog.getMsg("This is step #3");
            i18n_34 = MSG_EXTERNAL_9115950652940647254$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_STEPS_WIZARD_STEPS_EXAMPLE_COMPONENT_TS__35;
          } else {
            i18n_34 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241Fb24c86b770b967c3186b73a019db0c992513d68b\u241F9115950652940647254:This is step #3"])));
          }

          return [["id", "nui-demo-wizard-add-dynamic", "finishText", i18n_2, 3, "selectionChange"], ["wizardComponent", ""], ["title", i18n_4, 3, "stepTemplate"], ["wizardStepAdd", ""], ["title", i18n_6, 3, "stepTemplate"], ["wizardStep3", ""], [3, "title", "stepTemplate", "stepControl"], ["dynamicStep", ""], ["step1", ""], ["stepWithValidation", ""], ["step3", ""], i18n_8, ["nui-button", "", "type", "button", "id", "nui-demo-dynamic-button", 3, "click"], i18n_10, [3, "formGroup"], [1, "form-group"], ["caption", i18n_12, 1, "d-block", "mb-4"], ["id", "stepInputName", "formControlName", "name"], ["caption", i18n_14, 1, "d-block", "mb-4", 3, "control"], ["type", "email", "id", "stepInputEmail", "formControlName", "email"], ["for", "required", 4, "ngIf"], ["for", "pattern", 4, "ngIf"], ["for", "email", 4, "ngIf"], [3, "show"], i18n_16, ["caption", i18n_18, 1, "d-block", "mb-4", 3, "control", "showOptionalText"], ["type", "password", "id", "stepInputPassword", "formControlName", "password"], ["for", "minlength", 4, "ngIf"], i18n_20, ["for", "required"], i18n_22, ["for", "pattern"], i18n_24, ["for", "email"], i18n_26, i18n_28, ["for", "minlength"], i18n_30, i18n_34];
        },
        template: function WizardStepsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-wizard", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function WizardStepsExampleComponent_Template_nui_wizard_selectionChange_0_listener($event) {
              return ctx.select($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-wizard-step", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "nui-wizard-step", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "nui-wizard-step", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, WizardStepsExampleComponent_ng_template_8_Template, 4, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, WizardStepsExampleComponent_ng_template_10_Template, 19, 16, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, WizardStepsExampleComponent_ng_template_12_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepTemplate", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stepTemplate", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Dynamic")("stepTemplate", _r6)("stepControl", ctx.myForm.valid);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_5__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_6__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_8__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_9__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_11__["ValidationMessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "04Lg":
    /*!**********************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-dynamic-remove/wizard-dynamic-remove.example.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: WizardDynamicRemoveExampleComponent */

    /***/
    function Lg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDynamicRemoveExampleComponent", function () {
        return WizardDynamicRemoveExampleComponent;
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


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var _c0 = ["wizardComponent"];
      var _c1 = ["dynamicStep"];

      function WizardDynamicRemoveExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WizardDynamicRemoveExampleComponent_ng_template_6_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.addStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](3, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicRemoveExampleComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](1, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c14 = function _c14() {
        return {
          "font-weight": "bold"
        };
      };

      var WizardDynamicRemoveExampleComponent = /*#__PURE__*/function () {
        function WizardDynamicRemoveExampleComponent() {
          _classCallCheck(this, WizardDynamicRemoveExampleComponent);

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(WizardDynamicRemoveExampleComponent, [{
          key: "select",
          value: function select(event) {
            this.selectedIndex = event.selectedIndex;
          }
        }, {
          key: "addStep",
          value: function addStep() {
            var index = this.selectedIndex + 1;
            var step = this.wizardComponent.addStepDynamic(this.dynamicStep, index);
            step.enter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
              return console.log("Enter event has been emitted from WizardStepComponent");
            });
            step.exit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
              return console.log("Exit event has been emitted from WizardStepComponent");
            });
          }
        }, {
          key: "removeStep",
          value: function removeStep(index) {
            this.wizardComponent.removeStep(index);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }]);

        return WizardDynamicRemoveExampleComponent;
      }();

      WizardDynamicRemoveExampleComponent.ɵfac = function WizardDynamicRemoveExampleComponent_Factory(t) {
        return new (t || WizardDynamicRemoveExampleComponent)();
      };

      WizardDynamicRemoveExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: WizardDynamicRemoveExampleComponent,
        selectors: [["nui-wizard-dynamic-remove-example"]],
        viewQuery: function WizardDynamicRemoveExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dynamicStep = _t.first);
          }
        },
        decls: 19,
        vars: 6,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Finish");
            i18n_2 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7648268751296041024$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Add step dynamically");
            i18n_4 = MSG_EXTERNAL_7648268751296041024$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241Fbd5772b9673205503673958067be0dd245d3955b\u241F7648268751296041024:Add step dynamically"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1726131819944962604$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" Remove step dynamically ");
            i18n_6 = MSG_EXTERNAL_1726131819944962604$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241F0204750c4ece2a4fc149e671dd2c3ba82298f9ac\u241F1726131819944962604: Remove step dynamically "])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! You can add next step dynamically");
            i18n_8 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241F9dfa7b9ebe128bde7cab896a85986ebb450f99f7\u241F4074000604906025359:Hi! You can add next step dynamically"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2815688941003513063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Add dynamic step");
            i18n_10 = MSG_EXTERNAL_2815688941003513063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241F7f455eb4baba5bce4523070171e75e46bbc0a4b6\u241F2815688941003513063:Add dynamic step"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_392108755776816996$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Hi! I'm dynamic step!");
            i18n_12 = MSG_EXTERNAL_392108755776816996$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_REMOVE_WIZARD_DYNAMIC_REMOVE_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([":\u241Fac4915de7d495c385f232606717e4c85222997da\u241F392108755776816996:Hi! I'm dynamic step!"])));
          }

          return [["id", "nui-demo-wizard-remove-dynamic", "finishText", i18n_2, 3, "selectionChange"], ["wizardComponent", ""], ["title", i18n_4, 3, "stepTemplate"], ["wizardStepAdd", ""], [3, "title", "stepTemplate"], ["dynamicStep", ""], ["step1", ""], ["dynamicStepTemplate", ""], [1, "d-flex"], [1, ""], [1, "nui-textbox--bold", 3, "ngStyle"], [3, "minValue"], ["number", ""], ["displayStyle", "destructive", "nui-button", "", "type", "button", 1, "ml-3", "h-25", "align-self-end", 3, "click"], i18n_6, i18n_8, ["nui-button", "", "type", "button", 3, "click"], i18n_10, i18n_12];
        },
        template: function WizardDynamicRemoveExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-wizard", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function WizardDynamicRemoveExampleComponent_Template_nui_wizard_selectionChange_0_listener($event) {
              return ctx.select($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-wizard-step", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "nui-wizard-step", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WizardDynamicRemoveExampleComponent_ng_template_6_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WizardDynamicRemoveExampleComponent_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Step index to remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "nui-textbox-number", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WizardDynamicRemoveExampleComponent_Template_button_click_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

              var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);

              return ctx.removeStep(+_r7.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](18, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Dynamic")("stepTemplate", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c14));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minValue", 1);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_5__["WizardStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_7__["TextboxNumberComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "2Vzo":
    /*!******************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-simple/wizard-simple.example.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: WizardSimpleExampleComponent */

    /***/
    function Vzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardSimpleExampleComponent", function () {
        return WizardSimpleExampleComponent;
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


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      var _c0 = ["wizardComponent"];
      var _c1 = ["wizardStep2"];
      var _c2 = ["wizardStep3"];
      var _c3 = ["dynamicStep"];

      function WizardSimpleExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-textbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function WizardSimpleExampleComponent_ng_template_0_Template_nui_textbox_textChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onOptionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.hint);
        }
      }

      function WizardSimpleExampleComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);
        }
      }

      var WizardSimpleExampleComponent = /*#__PURE__*/function () {
        function WizardSimpleExampleComponent(formBuilder, toastService, dialogService) {
          _classCallCheck(this, WizardSimpleExampleComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.dialogService = dialogService;
          this.hint = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["example-hint"])));
          this.caption = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["example-caption"])));
          this.vegetables = [$localize(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Cabbage"]))), $localize(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Tomato"]))), $localize(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Carrot"])))];
          this.selectedVegetables = [$localize(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Tomato"])))];
          this.secondStepBusyConfig = {
            busy: false,
            message: $localize(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Step is busy"])))
          };
          this.busyConfig = {
            busy: false,
            message: $localize(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Step is busy"])))
          };
        }

        _createClass(WizardSimpleExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              name: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[^ @]*@[^ @]*")]),
              password: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
            });
          }
        }, {
          key: "onOptionChange",
          value: function onOptionChange(value) {
            this.hint = value;
          }
        }, {
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }, {
          key: "valuesChanged",
          value: function valuesChanged(values) {
            this.selectedVegetables = _toConsumableArray(values);
          }
        }, {
          key: "addStep",
          value: function addStep() {
            this.wizardComponent.addStepDynamic(this.dynamicStep, this.selectedIndex + 1);
          }
        }, {
          key: "disableSecondStep",
          value: function disableSecondStep() {
            this.wizardComponent.disableStep(this.wizardStep2Component);
          }
        }, {
          key: "hideThirdStep",
          value: function hideThirdStep() {
            this.wizardComponent.hideStep(this.wizardStep3Component);
          }
        }, {
          key: "visibleThirdStep",
          value: function visibleThirdStep() {
            this.wizardComponent.showStep(this.wizardStep3Component);
          }
        }, {
          key: "makeSecondStepBusy",
          value: function makeSecondStepBusy() {
            var _this = this;

            this.secondStepBusyConfig.busy = true;
            this.wizardComponent.navigationControl.next({
              busyState: this.secondStepBusyConfig,
              allowStepChange: false
            });
            setTimeout(function () {
              _this.secondStepBusyConfig.busy = false;

              _this.wizardComponent.navigationControl.next({
                busyState: _this.secondStepBusyConfig,
                allowStepChange: true
              });
            }, 1000);
          }
        }, {
          key: "onNextClick",
          value: function onNextClick() {
            this.toastService.info({
              message: $localize(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Next button clicked!"]))),
              title: $localize(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }, {
          key: "onCancelClick",
          value: function onCancelClick(content) {
            if (this.wizardComponent.steps.toArray().filter(function (step) {
              return step.complete;
            }).length !== 0) {
              this.activeDialog = this.dialogService.open(content, {
                size: "sm"
              });
            } else {
              this.toastService.info({
                message: $localize(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Cancel button clicked!"]))),
                title: $localize(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Event"])))
              });
            }
          }
        }, {
          key: "onFinishClick",
          value: function onFinishClick() {
            this.toastService.info({
              message: $localize(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Finish button clicked!"]))),
              title: $localize(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }, {
          key: "handleClick",
          value: function handleClick() {
            this.toastService.info({
              message: $localize(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Additional button clicked!"]))),
              title: $localize(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }, {
          key: "select",
          value: function select(event) {
            this.selectedIndex = event.selectedIndex;
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(title) {
            title === "Leave" ? this.actionDone() : this.actionCanceled();
            this.activeDialog.close();
          }
        }, {
          key: "preventGoingNext",
          value: function preventGoingNext() {
            var _this2 = this;

            this.busyConfig.busy = true;
            this.wizardComponent.navigationControl.next({
              busyState: this.busyConfig,
              allowStepChange: false
            });
            setTimeout(function () {
              _this2.busyConfig.busy = false;

              _this2.wizardComponent.navigationControl.next({
                busyState: _this2.busyConfig,
                allowStepChange: true
              });
            }, 1000);
          }
        }, {
          key: "actionDone",
          value: function actionDone() {
            this.toastService.success({
              message: $localize(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Leave Done!"]))),
              title: $localize(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }, {
          key: "actionCanceled",
          value: function actionCanceled() {
            this.toastService.info({
              message: $localize(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Action Canceled!"]))),
              title: $localize(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }]);

        return WizardSimpleExampleComponent;
      }();

      WizardSimpleExampleComponent.ɵfac = function WizardSimpleExampleComponent_Factory(t) {
        return new (t || WizardSimpleExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DialogService"]));
      };

      WizardSimpleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardSimpleExampleComponent,
        selectors: [["nui-wizard-simple-example"]],
        viewQuery: function WizardSimpleExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardStep2Component = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardStep3Component = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dynamicStep = _t.first);
          }
        },
        decls: 8,
        vars: 2,
        consts: function consts() {
          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Finish");
            i18n_4 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("First");
            i18n_6 = MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral([":\u241Ff2f852318759c6396b5d3d17031d53817d7b38cc\u241F2241508602425256033:First"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4609200447119745819$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Final");
            i18n_8 = MSG_EXTERNAL_4609200447119745819$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral([":\u241F5233e7292acd46d01dfa207d4921e4a723110ed2\u241F4609200447119745819:Final"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("First");
            i18n_10 = MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral([":\u241Ff2f852318759c6396b5d3d17031d53817d7b38cc\u241F2241508602425256033:First"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Check box with help text");
            i18n_12 = MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral([":\u241Fc42399c4f4c441cd575f6140076703ec297e247b\u241F5530604904987545137:Check box with help text"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("This is some help text");
            i18n_14 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral([":\u241Fba785d6cbb33a003a3ce1d20077ba67264374284\u241F829155627086234075:This is some help text"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7423534081684222193$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__17 = goog.getMsg("Check box with help text ");
            i18n_16 = MSG_EXTERNAL_7423534081684222193$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_SIMPLE_WIZARD_SIMPLE_EXAMPLE_COMPONENT_TS__17;
          } else {
            i18n_16 = $localize(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral([":\u241Fafe4e37e44b987e90ca54c9344a8cec80dcbd337\u241F7423534081684222193:Check box with help text "])));
          }

          return [["step1", ""], ["step2", ""], ["id", "nui-demo-wizard", "finishText", i18n_4], ["wizardComponent", ""], ["id", "nui-demo-wizard-step", "title", i18n_6, 3, "stepTemplate"], ["title", i18n_8, 3, "stepTemplate"], ["caption", i18n_10, "name", "hint", "customBoxWidth", "150px", 3, "value", "textChange"], ["name", "nui-demo-checkbox", "title", i18n_12, "hint", i18n_14, "required", "true", 3, "value"], i18n_16];
        },
        template: function WizardSimpleExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardSimpleExampleComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardSimpleExampleComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-wizard", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-wizard-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-wizard-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r2);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_5__["TextboxComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "3bUS":
    /*!**********************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-disabled/wizard-disabled.example.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: WizardDisabledExampleComponent */

    /***/
    function bUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDisabledExampleComponent", function () {
        return WizardDisabledExampleComponent;
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


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var _c0 = ["wizardComponent"];
      var _c1 = ["wizardStepDisable"];

      function WizardDisabledExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardDisabledExampleComponent_ng_template_6_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.disableStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardDisabledExampleComponent_ng_template_6_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.enableStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function WizardDisabledExampleComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var WizardDisabledExampleComponent = /*#__PURE__*/function () {
        function WizardDisabledExampleComponent() {
          _classCallCheck(this, WizardDisabledExampleComponent);
        }

        _createClass(WizardDisabledExampleComponent, [{
          key: "disableStep",
          value: function disableStep() {
            this.wizardComponent.disableStep(this.wizardStepDisabledComponent);
          }
        }, {
          key: "enableStep",
          value: function enableStep() {
            this.wizardComponent.enableStep(this.wizardStepDisabledComponent);
          }
        }]);

        return WizardDisabledExampleComponent;
      }();

      WizardDisabledExampleComponent.ɵfac = function WizardDisabledExampleComponent_Factory(t) {
        return new (t || WizardDisabledExampleComponent)();
      };

      WizardDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WizardDisabledExampleComponent,
        selectors: [["nui-wizard-disabled-example"]],
        viewQuery: function WizardDisabledExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardStepDisabledComponent = _t.first);
          }
        },
        decls: 10,
        vars: 2,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Finish");
            i18n_2 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1331971591971868635$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Disable next step");
            i18n_4 = MSG_EXTERNAL_1331971591971868635$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral([":\u241Fe7a26effb715506da3ab7e1f92cd78d88da7125c\u241F1331971591971868635:Disable next step"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Second step");
            i18n_6 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral([":\u241Fb29f4fd21a1d511462918ede337438d03dab18e5\u241F2997617654392962041:Second step"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7221569171534126792$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! You can disable next step");
            i18n_8 = MSG_EXTERNAL_7221569171534126792$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral([":\u241F4be18d58236d537354da5f646a110d22e210d7f6\u241F7221569171534126792:Hi! You can disable next step"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1331971591971868635$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Disable next step");
            i18n_10 = MSG_EXTERNAL_1331971591971868635$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral([":\u241Fe7a26effb715506da3ab7e1f92cd78d88da7125c\u241F1331971591971868635:Disable next step"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3224931727584976630$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Enable next step");
            i18n_12 = MSG_EXTERNAL_3224931727584976630$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral([":\u241Feb798a43ed2f6bf1808273150dc183d91b95eeb5\u241F3224931727584976630:Enable next step"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2139408017885432467$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("Disabled step");
            i18n_14 = MSG_EXTERNAL_2139408017885432467$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DISABLED_WIZARD_DISABLED_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral([":\u241F18f9bfc289da4346747bb99c3c06c8dd30222c4b\u241F2139408017885432467:Disabled step"])));
          }

          return [["id", "nui-demo-wizard-disable", "finishText", i18n_2], ["wizardComponent", ""], ["title", i18n_4, 3, "stepTemplate"], ["wizardStepFirst", ""], ["title", i18n_6, 3, "stepTemplate"], ["wizardStepDisable", ""], ["step1", ""], ["stepDisabled", ""], i18n_8, [1, "btn-group"], ["nui-button", "", "type", "button", "id", "nui-demo-disable-button", 3, "click"], i18n_10, ["nui-button", "", "type", "button", "id", "nui-demo-enable-button", 3, "click"], i18n_12, i18n_14];
        },
        template: function WizardDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-wizard-step", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-wizard-step", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardDisabledExampleComponent_ng_template_6_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WizardDisabledExampleComponent_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r5);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "5QmC":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-hide/wizard-hide.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QmC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-hide-show\"\n            finishText=\"Finish\"\n            i18n-finishText>\n        <nui-wizard-step #wizardStepFirst i18n-title title=\"Hide show next step\" [stepTemplate]=\"step1\"></nui-wizard-step>\n        <nui-wizard-step #wizardStepHidden i18n-title title=\"Second step\" [stepTemplate]=\"stepHidden\"></nui-wizard-step>\n</nui-wizard>\n<ng-template #step1>\n    <p i18n>Hi! You can hide and show next step</p>\n    <div class=\"btn-group\">\n        <button nui-button type=\"button\" id=\"nui-demo-hide-button\" (click)=\"hideStep()\" i18n>Hide next step</button>\n        <button nui-button type=\"button\" id=\"nui-demo-show-button\" (click)=\"showStep()\" i18n>Show next step</button>\n    </div>\n</ng-template>\n<ng-template #stepHidden>\n    <p i18n>Hello from second step</p>\n</ng-template>\n";
      /***/
    },

    /***/
    "6prp":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-validation/wizard-validation.example.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function prp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { WizardComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-validation-example\",\n    templateUrl: \"./wizard-validation.example.component.html\",\n})\n\nexport class WizardValidationExampleComponent implements OnInit {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    public myForm: FormGroup;\n    public secondStepForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {}\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            name: this.formBuilder.control(\"\",\n                                           Validators.required),\n            email: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.pattern(\"[^ @]*@[^ @]*\"),\n                Validators.email,\n            ]),\n            password: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.minLength(8),\n            ]),\n        });\n        this.secondStepForm = this.formBuilder.group({\n            formCheckbox: [false, [Validators.requiredTrue]],\n        });\n    }\n\n    public updateValidity() {\n        this.secondStepForm.get(\"formCheckbox\")?.updateValueAndValidity();\n    }\n}\n";
      /***/
    },

    /***/
    "AFmX":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-dynamic-remove/wizard-dynamic-remove.example.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AFmX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-remove-dynamic\"\n            finishText=\"Finish\"\n            (selectionChange)=\"select($event)\"\n            i18n-finishText>\n    <nui-wizard-step #wizardStepAdd i18n-title title=\"Add step dynamically\" [stepTemplate]=\"step1\"></nui-wizard-step>\n</nui-wizard>\n<nui-wizard-step #dynamicStep [title]=\"'Dynamic'\" [stepTemplate]=\"dynamicStepTemplate\"></nui-wizard-step>\n<ng-template #step1>\n    <p i18n>Hi! You can add next step dynamically</p>\n    <button nui-button type=\"button\" (click)=\"addStep()\" i18n>Add dynamic step</button>\n</ng-template>\n<ng-template #dynamicStepTemplate>\n    <p i18n>Hi! I'm dynamic step!</p>\n</ng-template>\n\n<div class=\"d-flex\">\n    <div class=\"\">\n        <span class=\"nui-textbox--bold\" [ngStyle]=\"{ 'font-weight': 'bold' }\">Step index to remove</span> <br>\n        <nui-textbox-number [minValue]=\"1\" #number></nui-textbox-number>\n    </div>\n    <button class=\"ml-3 h-25 align-self-end\"\n            displayStyle=\"destructive\"\n            nui-button type=\"button\"\n            (click)=\"removeStep(+number.value)\"\n            i18n>\n        Remove step dynamically\n    </button>\n</div>\n\n";
      /***/
    },

    /***/
    "B07R":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-disabled/wizard-disabled.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B07R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewChild } from \"@angular/core\";\nimport { WizardComponent, WizardStepComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-disabled-example\",\n    templateUrl: \"./wizard-disabled.example.component.html\",\n})\nexport class WizardDisabledExampleComponent  {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"wizardStepDisable\") wizardStepDisabledComponent: WizardStepComponent;\n\n    public disableStep() {\n        this.wizardComponent.disableStep(this.wizardStepDisabledComponent);\n    }\n\n    public  enableStep() {\n        this.wizardComponent.enableStep(this.wizardStepDisabledComponent);\n    }\n}\n";
      /***/
    },

    /***/
    "DNeV":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-docs/wizard-docs.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DNeV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-wizard-example\",\n    templateUrl: \"./wizard-docs.example.component.html\",\n})\nexport class WizardExampleComponent {}\n";
      /***/
    },

    /***/
    "ERD8":
    /*!******************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-dialog/wizard-dialog.example.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: WizardDialogExampleComponent */

    /***/
    function ERD8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDialogExampleComponent", function () {
        return WizardDialogExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox-group.component */
      "s1l0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");

      var _c0 = ["wizardComponent"];

      function WizardDialogExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true)("value", false);
        }
      }

      function WizardDialogExampleComponent_ng_template_2_nui_checkbox_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vegetable_r11 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", vegetable_r11)("checked", ctx_r10.isChecked(vegetable_r11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vegetable_r11, " ");
        }
      }

      function WizardDialogExampleComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox-group", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valuesChange", function WizardDialogExampleComponent_ng_template_2_Template_nui_checkbox_group_valuesChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.selectedVegetables = $event;
          })("valuesChange", function WizardDialogExampleComponent_ng_template_2_Template_nui_checkbox_group_valuesChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.valuesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WizardDialogExampleComponent_ng_template_2_nui_checkbox_1_Template, 2, 3, "nui-checkbox", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("values", ctx_r3.selectedVegetables);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.vegetables);
        }
      }

      function WizardDialogExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDialogExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardDialogExampleComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardDialogExampleComponent_ng_template_8_Template_nui_dialog_header_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function WizardDialogExampleComponent_ng_template_8_Template_nui_wizard_cancel_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-wizard-step", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-wizard-step", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-wizard-step", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-wizard-step", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r6);
        }
      }

      var WizardDialogExampleComponent = /*#__PURE__*/function () {
        function WizardDialogExampleComponent(dialogService, toastService) {
          _classCallCheck(this, WizardDialogExampleComponent);

          this.dialogService = dialogService;
          this.toastService = toastService;
          this.vegetables = [$localize(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["Cabbage"]))), $localize(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["Tomato"]))), $localize(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["Carrot"])))];
          this.selectedVegetables = [$localize(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Potato"]))), $localize(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Tomato"])))];
        }

        _createClass(WizardDialogExampleComponent, [{
          key: "isChecked",
          value: function isChecked(vegetable) {
            return this.selectedVegetables.indexOf(vegetable) > -1;
          }
        }, {
          key: "valuesChanged",
          value: function valuesChanged(values) {
            this.selectedVegetables = _toConsumableArray(values);
          }
        }, {
          key: "openDialog",
          value: function openDialog(content) {
            this.activeDialog = this.dialogService.open(content, {
              size: "lg"
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.activeDialog.close();
          }
        }]);

        return WizardDialogExampleComponent;
      }();

      WizardDialogExampleComponent.ɵfac = function WizardDialogExampleComponent_Factory(t) {
        return new (t || WizardDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      WizardDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardDialogExampleComponent,
        selectors: [["nui-wizard-dialog-example"]],
        viewQuery: function WizardDialogExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
          }
        },
        decls: 12,
        vars: 0,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7400666062557911013$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS_2 = goog.getMsg(" Open dialog wizard");
            i18n_1 = MSG_EXTERNAL_7400666062557911013$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral([":\u241F8afaab79e8c7c81abcd01a1765efedf88025e83a\u241F7400666062557911013: Open dialog wizard"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__4 = goog.getMsg("Check box with help text");
            i18n_3 = MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__4;
          } else {
            i18n_3 = $localize(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral([":\u241Fc42399c4f4c441cd575f6140076703ec297e247b\u241F5530604904987545137:Check box with help text"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__6 = goog.getMsg("This is some help text");
            i18n_5 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__6;
          } else {
            i18n_5 = $localize(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral([":\u241Fba785d6cbb33a003a3ce1d20077ba67264374284\u241F829155627086234075:This is some help text"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7423534081684222193$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__8 = goog.getMsg("Check box with help text ");
            i18n_7 = MSG_EXTERNAL_7423534081684222193$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__8;
          } else {
            i18n_7 = $localize(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral([":\u241Fafe4e37e44b987e90ca54c9344a8cec80dcbd337\u241F7423534081684222193:Check box with help text "])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7797723356051242784$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("Plain checkbox ");
            i18n_9 = MSG_EXTERNAL_7797723356051242784$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__10;
          } else {
            i18n_9 = $localize(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral([":\u241F4279bb41f011a36dde2569b52bd9296a94480c6e\u241F7797723356051242784:Plain checkbox "])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7739984345837935405$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__12 = goog.getMsg("Not visited");
            i18n_11 = MSG_EXTERNAL_7739984345837935405$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__12;
          } else {
            i18n_11 = $localize(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral([":\u241F766ce184c3957a086cb9a547cb2a900bf5c6c873\u241F7739984345837935405:Not visited"])));
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4739818603756173797$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__14 = goog.getMsg("Summary");
            i18n_13 = MSG_EXTERNAL_4739818603756173797$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__14;
          } else {
            i18n_13 = $localize(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral([":\u241Fa8233de047500bf0f0d9f9f1712ddb071501a283\u241F4739818603756173797:Summary"])));
          }

          var i18n_15;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2559467589081529119$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__16 = goog.getMsg("Wizard dialog");
            i18n_15 = MSG_EXTERNAL_2559467589081529119$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__16;
          } else {
            i18n_15 = $localize(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral([":\u241Fbfccc7449a42f7d944233041ac0d93921c543934\u241F2559467589081529119:Wizard dialog"])));
          }

          var i18n_17;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__18 = goog.getMsg("Finish");
            i18n_17 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__18;
          } else {
            i18n_17 = $localize(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_19;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1161299114153631702$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__20 = goog.getMsg("Completed");
            i18n_19 = MSG_EXTERNAL_1161299114153631702$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__20;
          } else {
            i18n_19 = $localize(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral([":\u241Fa7c328c4773db932ff14a1954e15e43dca58e7b7\u241F1161299114153631702:Completed"])));
          }

          var i18n_21;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8204176479746810612$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__22 = goog.getMsg("Active");
            i18n_21 = MSG_EXTERNAL_8204176479746810612$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__22;
          } else {
            i18n_21 = $localize(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral([":\u241Fb36e1450940b7f6028d8587568c7d669b53f7a06\u241F8204176479746810612:Active"])));
          }

          var i18n_23;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7739984345837935405$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__24 = goog.getMsg("Not visited");
            i18n_23 = MSG_EXTERNAL_7739984345837935405$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__24;
          } else {
            i18n_23 = $localize(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral([":\u241F766ce184c3957a086cb9a547cb2a900bf5c6c873\u241F7739984345837935405:Not visited"])));
          }

          var i18n_25;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4739818603756173797$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__26 = goog.getMsg("Summary");
            i18n_25 = MSG_EXTERNAL_4739818603756173797$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DIALOG_WIZARD_DIALOG_EXAMPLE_COMPONENT_TS__26;
          } else {
            i18n_25 = $localize(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral([":\u241Fa8233de047500bf0f0d9f9f1712ddb071501a283\u241F4739818603756173797:Summary"])));
          }

          return [["step1", ""], ["step2", ""], ["step3", ""], ["step4", ""], ["dialogWizard", ""], ["id", "nui-demo-dialog-wizard-btn", "nui-button", "", "type", "button", 3, "click"], i18n_1, ["name", "nui-demo-checkbox", "title", i18n_3, "hint", i18n_5, "required", "true", 3, "value"], i18n_7, ["name", "nui-demo-checkbox-plain", 3, "checked", "value"], i18n_9, ["name", "vegetable", 3, "values", "valuesChange"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "value", "checked"], i18n_11, i18n_13, ["title", i18n_15, 3, "closed"], [1, "dialog-body", "compact-mode"], ["id", "nui-demo-wizard-dialog", "finishText", i18n_17, 3, "cancel"], ["title", i18n_19, 3, "stepTemplate"], ["title", i18n_21, 3, "stepTemplate"], ["title", i18n_23, 3, "stepTemplate"], ["title", i18n_25, 3, "stepTemplate"]];
        },
        template: function WizardDialogExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardDialogExampleComponent_ng_template_0_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardDialogExampleComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardDialogExampleComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardDialogExampleComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WizardDialogExampleComponent_ng_template_8_Template, 7, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardDialogExampleComponent_Template_button_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.openDialog(_r8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_6__["DialogHeaderComponent"], _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_7__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_8__["WizardStepComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Fa+E":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-visual-test/wizard-visual-test.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: WizardVisualTestComponent */

    /***/
    function FaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardVisualTestComponent", function () {
        return WizardVisualTestComponent;
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


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");

      var _c0 = ["wizardComponent"];
      var _c1 = ["dialogWizardBusy"];

      function WizardVisualTestComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contents of the step 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardVisualTestComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contents of the step 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardVisualTestComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Review the entire configurations before performing the final action.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus magna non sem bibendum ultricies. Proin non nisl vel augue eleifend tempor sed sit amet tortor. Nam vitae fermentum lorem, vel sollicitudin metus. Praesent consectetur, metus in venenatis condimentum, libero orci varius justo, maximus efficitur massa ipsum eu quam. Curabitur ac lacus sed neque facilisis dapibus sed non lacus. Praesent rhoncus sem at neque fringilla, non faucibus diam tincidunt. Vestibulum congue sodales elit, quis maximus lectus dapibus ut. Praesent at tellus vel tellus facilisis volutpat. Ut est dolor, molestie vehicula bibendum et, hendrerit non eros. Aliquam erat volutpat. Suspendisse quis interdum turpis. Nunc in nulla lacinia, sagittis metus ut, faucibus ligula. Donec finibus posuere ornare. Suspendisse vel convallis metus, in sodales est. Donec ultricies hendrerit mi sed convallis. Ut vitae arcu in tellus hendrerit sodales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardVisualTestComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Review the entire configurations before performing the final action.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardVisualTestComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Set step to busy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardVisualTestComponent_ng_template_11_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.makeStepBusy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Make current step busy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardVisualTestComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function WizardVisualTestComponent_ng_template_23_Template_nui_dialog_header_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-wizard", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function WizardVisualTestComponent_ng_template_23_Template_nui_wizard_cancel_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-wizard-step", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nui-wizard-step", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-wizard-step", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-wizard-step", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r6);
        }
      }

      var WizardVisualTestComponent = /*#__PURE__*/function () {
        function WizardVisualTestComponent(formBuilder, dialogService) {
          _classCallCheck(this, WizardVisualTestComponent);

          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.hint = "example-hint";
          this.caption = "example-caption";
          this.secondStepBusyConfig = {
            busy: false,
            message: "Step is busy"
          };
          this.busyConfig = {
            busy: false,
            message: "Step is busy"
          };
        }

        _createClass(WizardVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              name: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[^ @]*@[^ @]*")]),
              password: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
            });
          }
        }, {
          key: "onOptionChange",
          value: function onOptionChange(value) {
            this.hint = value;
          }
        }, {
          key: "makeSecondStepBusy",
          value: function makeSecondStepBusy() {
            var _this3 = this;

            this.secondStepBusyConfig.busy = true;
            this.wizardComponent.navigationControl.next({
              busyState: this.secondStepBusyConfig,
              allowStepChange: false
            });
            setTimeout(function () {
              _this3.secondStepBusyConfig.busy = false;

              _this3.wizardComponent.navigationControl.next({
                busyState: _this3.secondStepBusyConfig,
                allowStepChange: true
              });
            }, 1000);
          }
        }, {
          key: "onCancelClick",
          value: function onCancelClick(content) {
            if (this.wizardComponent.steps.toArray().filter(function (step) {
              return step.complete;
            }).length !== 0) {
              this.activeDialog = this.dialogService.open(content, {
                size: "sm"
              });
            }
          }
        }, {
          key: "select",
          value: function select(event) {
            this.selectedIndex = event.selectedIndex;
          }
        }, {
          key: "preventGoingNext",
          value: function preventGoingNext() {
            var _this4 = this;

            this.busyConfig.busy = true;
            this.wizardComponent.navigationControl.next({
              busyState: this.busyConfig,
              allowStepChange: false
            });
            setTimeout(function () {
              _this4.busyConfig.busy = false;

              _this4.wizardComponent.navigationControl.next({
                busyState: _this4.busyConfig,
                allowStepChange: true
              });
            }, 1000);
          }
        }, {
          key: "openDialog",
          value: function openDialog(content) {
            this.activeDialog = this.dialogService.open(content, {
              size: "lg"
            });
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.activeDialog.close();
          }
        }, {
          key: "makeStepBusy",
          value: function makeStepBusy() {
            this.busyConfig.busy = true;
            this.dialogWizardBusy.navigationControl.next({
              busyState: this.busyConfig,
              allowStepChange: false
            });
          }
        }]);

        return WizardVisualTestComponent;
      }();

      WizardVisualTestComponent.ɵfac = function WizardVisualTestComponent_Factory(t) {
        return new (t || WizardVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DialogService"]));
      };

      WizardVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardVisualTestComponent,
        selectors: [["nui-wizard-visual"]],
        viewQuery: function WizardVisualTestComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialogWizardBusy = _t.first);
          }
        },
        decls: 37,
        vars: 10,
        consts: [[1, "container"], ["step1", ""], ["step2", ""], ["step3", ""], ["step4", ""], ["busy", ""], ["id", "nui-demo-wizard"], ["wizardComponent", ""], ["id", "nui-demo-wizard-step1", 3, "title", "stepTemplate"], ["id", "nui-demo-wizard-step2", 3, "title", "stepTemplate"], ["id", "nui-demo-wizard-step3", 3, "title", "stepTemplate"], ["nui-button", "", "type", "button", "id", "nui-demo-additional-button"], ["dialogWizard", ""], ["id", "nui-demo-dialog-wizard-btn", "nui-button", "", "type", "button", 3, "click"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-6"], ["id", "nui-demo-wizard-busy"], ["dialogWizardBusy", ""], [1, "row"], [1, "col", "text-justify"], ["nui-button", "", "type", "button", "id", "nui-demo-busy-button", 3, "click"], ["title", "Wizard dialog", 3, "closed"], [1, "dialog-body", "compact-mode"], ["id", "nui-demo-wizard-dialog", 3, "cancel"], ["title", "Completed", 3, "stepTemplate"], ["title", "Active", 3, "stepTemplate"], ["title", "Not visited", 3, "stepTemplate"], ["title", "Summary", 3, "stepTemplate"]],
        template: function WizardVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardVisualTestComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WizardVisualTestComponent_ng_template_5_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WizardVisualTestComponent_ng_template_7_Template, 6, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WizardVisualTestComponent_ng_template_9_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WizardVisualTestComponent_ng_template_11_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-wizard", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nui-wizard-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-wizard-step", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nui-wizard-step", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Additional button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Wizard in dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WizardVisualTestComponent_ng_template_23_Template, 7, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardVisualTestComponent_Template_button_click_25_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

              var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

              return ctx.openDialog(_r11);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Open dialog wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Busy wizard in dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nui-wizard", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nui-wizard-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nui-wizard-step", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "First")("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Second")("stepTemplate", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Summary")("stepTemplate", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "First")("stepTemplate", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Second")("stepTemplate", _r0);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_6__["DialogHeaderComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "L54k":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-custom-step-line-width/wizard-custom-step-line-width.example.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function L54k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-wizard-custom-step-line-width\",\n    templateUrl: \"./wizard-custom-step-line-width.example.component.html\",\n})\nexport class WizardCustomStepLineWidthComponent  {\n\n}\n";
      /***/
    },

    /***/
    "LXgN":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-confirmation-dialog/wizard-confirmation-dialog.example.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LXgN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard id=\"nui-demo-wizard-confirmation-dialog\"\n            (cancel)=\"openConfirmationDialog($event, content)\"\n            finishText=\"Finish\"\n            i18n-finishText>\n    <nui-wizard-step i18n-title title=\"First\" [stepTemplate]=\"step1\"></nui-wizard-step>\n    <nui-wizard-step i18n-title title=\"Second\" [stepTemplate]=\"step1\"></nui-wizard-step>\n    <nui-wizard-step i18n-title title=\"Third\" [stepTemplate]=\"step1\"></nui-wizard-step>\n</nui-wizard>\n<ng-template #step1>\n    <p i18n>Wizard cancel method behavior</p>\n</ng-template>\n<ng-template #content let-close=\"close\">\n    <nui-dialog-header i18n-title title=\"Really want to leave?\" (close)=\"onButtonClick()\"></nui-dialog-header>\n    <div class=\"dialog-body\">\n        <p i18n>\n            There is at least one completed step in this wizard. Are you sure you want to leave?\n        </p>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"onButtonClick('Stay')\"\n                i18n>\n            Stay\n        </button>\n        <button nui-button type=\"button\"\n                displayStyle=\"primary\"\n                (click)=\"onButtonClick('Leave')\"\n                i18n>\n            Leave\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n";
      /***/
    },

    /***/
    "LZXz":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-docs/wizard-docs.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LZXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiWizardModule</code>\n    </li>\n</ul>\n<h2>Basic Usage</h2>\n\n<p>\n    To use the wizard component, place a <code>nui-wizard</code> element in your template and include one or more\n    <code><a href=\"../components/WizardStepComponent.html\" target=\"_blank\">nui-wizard-step</a></code> elements as children of the\n    <code>nui-wizard</code> element.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> To specify a label for the finish button of the last step, specify a value for the\n    <code>nui-wizard</code>'s <code>finishText</code> input.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"wizard-simple\" exampleTitle=\"Simple wizard\">\n    <nui-wizard-simple-example></nui-wizard-simple-example>\n</nui-example-wrapper>\n\n<h2>Usage with a dialog</h2>\n<p>You can pass an existing wizard component as content of the dialog window. </p>\n<p>You should insert wizard component in dialog body. </p>\n<nui-example-wrapper filenamePrefix=\"wizard-dialog\" exampleTitle=\"wizard in dialog\">\n    <nui-wizard-dialog-example></nui-wizard-dialog-example>\n</nui-example-wrapper>\n<h2>Busy step</h2>\n<p>You can make your step busy to forbid actions.</p>\n<p>You should pass 'busyConfig' (look at type 'IBusyConfig') to 'navigationControl' method of wizard step to make it work.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-busy\" exampleTitle=\"wizard step busy\">\n    <nui-wizard-busy-example></nui-wizard-busy-example>\n</nui-example-wrapper>\n<h2>Validation</h2>\n<p>You can use any custom input validation to wizard step.</p>\n<p>To forbid passing to next step while form is not valid you should pass boolean value to next step's property 'stepControl'.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-validation\" exampleTitle=\"wizard step validation\">\n    <nui-wizard-validation-example></nui-wizard-validation-example>\n</nui-example-wrapper>\n<h2>Disabled step</h2>\n<p>You can disable wizard step to forbid user switch to this step.</p>\n<p>To make step disabled you should use wizard method 'disableStep' and pass wizardStep component to it.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-disabled\" exampleTitle=\"wizard step disable\">\n    <nui-wizard-disabled-example></nui-wizard-disabled-example>\n</nui-example-wrapper>\n<h2>Hide/show step</h2>\n<p>You can hide or show wizard steps.</p>\n<p>To make it you should use wizard methods 'hideStep', 'showStep' and pass wizardStepComponent to it.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-hide\" exampleTitle=\"wizard step hide/show\">\n    <nui-wizard-hide-example></nui-wizard-hide-example>\n</nui-example-wrapper>\n<h2>Adding step dynamically</h2>\n<p>You are able to add wizard steps dynamically</p>\n<p>To make it you should use wizard method 'addStepDynamic' and pass 2 arguments wizardStepComponent and index to insert it in correct place.</p>\n<p><strong>Note:</strong> Angular doesn't allow binding to outputs of dynamically created component from template. You can access outputs of\n    <code><a href=\"../components/WizardStepComponent.html\" target=\"_blank\">nui-wizard-step</a></code> directly.<code>addStepDynamic</code> method of Wizard\nreturns you instance of dynamically added step and you can manually subscribe to outputs like <code>enter</code>,<code>exit</code> etc.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-dynamic\" exampleTitle=\"wizard add dynamic step\">\n    <nui-wizard-dynamic-example></nui-wizard-dynamic-example>\n</nui-example-wrapper>\n<h2>Remove step dynamically</h2>\n<p>You are able to remove wizard steps dynamically</p>\n<p>To make it you should use wizard method 'removeStep' and pass index</p>\n<p><strong>Note:</strong> Your couldn't remove first (0 index) step</p>\n<nui-example-wrapper filenamePrefix=\"wizard-dynamic-remove\" exampleTitle=\"wizard remove dynamic step\">\n<nui-wizard-dynamic-remove-example></nui-wizard-dynamic-remove-example>\n</nui-example-wrapper>\n<h2>Additional button in footer example</h2>\n<p>You are able to provide additional button in footer of wizard.</p>\n<p>To do it you should provide nui-button as a content of nui-wizard component.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-additional-button\" exampleTitle=\"wizard additional button\">\n    <nui-wizard-additional-button-example></nui-wizard-additional-button-example>\n</nui-example-wrapper>\n<h2>Confirmation dialog</h2>\n<p>To implement confirmation dialog you should use method 'confirm' from dialog service and call it from outputs such as 'onCancel' or 'onFinish'.</p>\n<p>By default UX suggestion 'onCancel' output sends boolean event which is false when user is on first step.</p>\n<p>On this example confirmation dialog represents default UX behavior and does not appear on first wizard step.</p>\n<nui-example-wrapper filenamePrefix=\"wizard-confirmation-dialog\" exampleTitle=\"wizard confirmation dialog\">\n    <nui-wizard-confirmation-dialog-example></nui-wizard-confirmation-dialog-example>\n</nui-example-wrapper>\n<h2>Constant height</h2>\n<p>\n    To make the height of the wizard constant for all steps and have the body of a step scroll vertically if it extends beyond the fixed height, set the\n    <code>enableScroll</code> input to true and set the desired height of the wizard body container using the <code>bodyContainerHeight</code> input.\n</p>\n<p>\n    Supported values of <code>bodyContainerHeight</code> are the same as in CSS. For example: 100px, 5vh, etc.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-constant-height\" exampleTitle=\"wizard constant height\">\n    <nui-wizard-constant-height-example></nui-wizard-constant-height-example>\n</nui-example-wrapper>\n<h2>Stretched steps line width</h2>\n<p>\n    To make the width of the steps line stretch according to the largest of step labels, use <code>stretchStepLines</code> input.\n    With it set to <code>true</code>, wizard will calculate the width of the largest label and adjust all the lines so the labels don't overflow.\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-custom-step-line-width\" exampleTitle=\"wizard custom steps label width\">\n    <nui-wizard-custom-step-line-width></nui-wizard-custom-step-line-width>\n</nui-example-wrapper>\n\n<h2>Wizard steps combination</h2>\n<p>\n    You can provide a combination of static and dynamic steps of the wizard.\n    See example below:\n</p>\n<nui-example-wrapper filenamePrefix=\"wizard-steps\" exampleTitle=\"wizard steps combination\">\n    <nui-wizard-steps-example></nui-wizard-steps-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "MVzA":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-visual-test/wizard-visual-test.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MVzA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <h3>Basic Wizard</h3>\n    <ng-template #step1>\n        <p>Contents of the step 1</p>\n    </ng-template>\n    <ng-template #step2>\n        <p>Contents of the step 2</p>\n    </ng-template>\n    <ng-template #step3>\n        <div class=\"row\">\n            <div class=\"col text-justify\">\n                <p>Review the entire configurations before performing the final action.</p>\n\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus magna non sem bibendum\n                    ultricies.\n                    Proin non nisl vel augue eleifend tempor sed sit amet tortor. Nam vitae fermentum lorem, vel\n                    sollicitudin\n                    metus. Praesent consectetur, metus in venenatis condimentum, libero orci varius justo, maximus\n                    efficitur\n                    massa ipsum eu quam. Curabitur ac lacus sed neque facilisis dapibus sed non lacus. Praesent rhoncus\n                    sem at\n                    neque fringilla, non faucibus diam tincidunt. Vestibulum congue sodales elit, quis maximus lectus\n                    dapibus\n                    ut. Praesent at tellus vel tellus facilisis volutpat. Ut est dolor, molestie vehicula bibendum et,\n                    hendrerit\n                    non eros. Aliquam erat volutpat. Suspendisse quis interdum turpis. Nunc in nulla lacinia, sagittis\n                    metus ut,\n                    faucibus ligula. Donec finibus posuere ornare. Suspendisse vel convallis metus, in sodales est.\n                    Donec ultricies\n                    hendrerit mi sed convallis. Ut vitae arcu in tellus hendrerit sodales.</p>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template #step4>\n        <p>Review the entire configurations before performing the final action.</p>\n    </ng-template>\n    <ng-template #busy>\n        <p>Set step to busy</p>\n        <button nui-button type=\"button\" id=\"nui-demo-busy-button\" (click)=\"makeStepBusy()\">Make current step busy</button>\n    </ng-template>\n\n    <nui-wizard #wizardComponent id=\"nui-demo-wizard\">\n        <nui-wizard-step id=\"nui-demo-wizard-step1\" [title]=\"'First'\" [stepTemplate]=\"step1\"></nui-wizard-step>\n        <nui-wizard-step id=\"nui-demo-wizard-step2\" [title]=\"'Second'\" [stepTemplate]=\"step2\"></nui-wizard-step>\n        <nui-wizard-step id=\"nui-demo-wizard-step3\" [title]=\"'Summary'\" [stepTemplate]=\"step3\"></nui-wizard-step>\n        <button nui-button type=\"button\" id=\"nui-demo-additional-button\">Additional button</button>\n    </nui-wizard>\n    <hr />\n\n    <h3>Wizard in dialog</h3>\n    <ng-template #dialogWizard>\n        <nui-dialog-header title=\"Wizard dialog\" (closed)=\"closeDialog()\"></nui-dialog-header>\n        <div class=\"dialog-body compact-mode\">\n            <nui-wizard id=\"nui-demo-wizard-dialog\" (cancel)=\"closeDialog()\">\n                <nui-wizard-step title=\"Completed\" [stepTemplate]=\"step1\"></nui-wizard-step>\n                <nui-wizard-step title=\"Active\" [stepTemplate]=\"step2\"></nui-wizard-step>\n                <nui-wizard-step title=\"Not visited\" [stepTemplate]=\"step3\"></nui-wizard-step>\n                <nui-wizard-step title=\"Summary\" [stepTemplate]=\"step4\"></nui-wizard-step>\n            </nui-wizard>\n        </div>\n    </ng-template>\n    <button id=\"nui-demo-dialog-wizard-btn\" nui-button type=\"button\" (click)=\"openDialog(dialogWizard)\"> Open\n        dialog wizard</button>\n    <hr />\n\n    <h3>Busy wizard in dialog</h3>\n    <div class=\"row d-flex justify-content-center\">\n        <div class=\"col-md-6\">\n            <nui-wizard #dialogWizardBusy id=\"nui-demo-wizard-busy\">\n                <nui-wizard-step id=\"nui-demo-wizard-step1\" [title]=\"'First'\" [stepTemplate]=\"busy\"></nui-wizard-step>\n                <nui-wizard-step id=\"nui-demo-wizard-step2\" [title]=\"'Second'\" [stepTemplate]=\"step1\"></nui-wizard-step>\n            </nui-wizard>\n        </div>\n    </div>\n    <hr />\n</div>";
      /***/
    },

    /***/
    "OzPF":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-validation/wizard-validation.example.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OzPF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #stepWithValidation>\n    <form [formGroup]=\"myForm\">\n        <div class=\"form-group\">\n            <nui-form-field class=\"d-block mb-4\"\n                            i18n-caption caption=\"Name\">\n                <nui-textbox id=\"stepInputName\"\n                             formControlName=\"name\"></nui-textbox>\n            </nui-form-field>\n        </div>\n        <div class=\"form-group\">\n            <nui-form-field class=\"d-block mb-4\"\n                            [control]=\"myForm.controls['email']\"\n                            i18n-caption\n                            caption=\"Email\">\n                <nui-textbox type=\"email\"\n                             id=\"stepInputEmail\"\n                             formControlName=\"email\"></nui-textbox>\n                <nui-validation-message for=\"required\" *ngIf=\"myForm.controls['email'].errors?.required\" i18n>\n                    This is required\n                </nui-validation-message>\n                <nui-validation-message for=\"pattern\" *ngIf=\"myForm.controls['email'].errors?.pattern\" i18n>\n                    Please put at least \"@\" to pass this validator\n                </nui-validation-message>\n                <nui-validation-message for=\"email\" *ngIf=\"myForm.controls['email'].errors?.email\" i18n>\n                    This should be a valid email\n                </nui-validation-message>\n                <nui-validation-message [show]=\"true\" i18n>\n                    This message is always here\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"form-group\">\n            <nui-form-field class=\"d-block mb-4\"\n                            i18n-caption\n                            caption=\"Password\"\n                            [showOptionalText]=\"false\">\n                <nui-textbox type=\"password\"\n                             id=\"stepInputPassword\"\n                             formControlName=\"password\"></nui-textbox>\n            </nui-form-field>\n        </div>\n    </form>\n</ng-template>\n<ng-template #step2>\n    <p i18n>Hello from second step</p>\n    <p i18n>This step has a handler for the <code>next</code> event fired from this step only, rather than from the entire wizard.</p>\n    <form [formGroup]=\"secondStepForm\">\n        <div class=\"form-group\">\n            <nui-form-field [control]=\"secondStepForm.controls['formCheckbox']\">\n                <nui-validation-message for=\"required\">\n                    Confirm that you have configured all steps which are needed to proceed.\n                </nui-validation-message>\n                <nui-checkbox [required]=\"true\" [checked]=\"false\" formControlName=\"formCheckbox\">\n                    I need to be checked to go further\n                </nui-checkbox>\n            </nui-form-field>\n        </div>\n    </form>\n</ng-template>\n<ng-template #step3>\n    <p i18n>This is step #3</p>\n</ng-template>\n<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-validation\"\n            finishText=\"Finish\"\n            i18n-finishText>\n    <nui-wizard-step i18n-title\n                     title=\"Step with validation\"\n                     [stepTemplate]=\"stepWithValidation\"\n                     [stepControl]=\"myForm.valid\"></nui-wizard-step>\n    <nui-wizard-step #wizardStep2\n                     i18n-title\n                     title=\"Second step\"\n                     [stepTemplate]=\"step2\" [stepControl]=\"secondStepForm.valid\"\n                     (next)=\"updateValidity()\"></nui-wizard-step>\n    <nui-wizard-step i18n-title #wizardStep3 title=\"Third step\" [stepTemplate]=\"step3\"></nui-wizard-step>\n</nui-wizard>\n";
      /***/
    },

    /***/
    "RlMX":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-hide/wizard-hide.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: WizardHiddenExampleComponent */

    /***/
    function RlMX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardHiddenExampleComponent", function () {
        return WizardHiddenExampleComponent;
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


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var _c0 = ["wizardComponent"];
      var _c1 = ["wizardStepHidden"];

      function WizardHiddenExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardHiddenExampleComponent_ng_template_6_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.hideStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardHiddenExampleComponent_ng_template_6_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.showStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function WizardHiddenExampleComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var WizardHiddenExampleComponent = /*#__PURE__*/function () {
        function WizardHiddenExampleComponent() {
          _classCallCheck(this, WizardHiddenExampleComponent);
        }

        _createClass(WizardHiddenExampleComponent, [{
          key: "hideStep",
          value: function hideStep() {
            this.wizardComponent.hideStep(this.wizardStepHiddenComponent);
          }
        }, {
          key: "showStep",
          value: function showStep() {
            this.wizardComponent.showStep(this.wizardStepHiddenComponent);
          }
        }]);

        return WizardHiddenExampleComponent;
      }();

      WizardHiddenExampleComponent.ɵfac = function WizardHiddenExampleComponent_Factory(t) {
        return new (t || WizardHiddenExampleComponent)();
      };

      WizardHiddenExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WizardHiddenExampleComponent,
        selectors: [["nui-wizard-hide-example"]],
        viewQuery: function WizardHiddenExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardStepHiddenComponent = _t.first);
          }
        },
        decls: 10,
        vars: 2,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Finish");
            i18n_2 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9172538211741480449$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Hide show next step");
            i18n_4 = MSG_EXTERNAL_9172538211741480449$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral([":\u241Fdc65188ca25b0b8ff2b1357b2e9f1a8b2c8cdba0\u241F9172538211741480449:Hide show next step"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Second step");
            i18n_6 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral([":\u241Fb29f4fd21a1d511462918ede337438d03dab18e5\u241F2997617654392962041:Second step"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1561849658858885529$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Hi! You can hide and show next step");
            i18n_8 = MSG_EXTERNAL_1561849658858885529$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral([":\u241Ff4961757d9fb059fda0bc3601fc13a35f6ea7a91\u241F1561849658858885529:Hi! You can hide and show next step"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3002136059688526867$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Hide next step");
            i18n_10 = MSG_EXTERNAL_3002136059688526867$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral([":\u241Fd556e61b74fee5b89bacb8b63657514df97e2039\u241F3002136059688526867:Hide next step"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2285755983326368129$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__13 = goog.getMsg("Show next step");
            i18n_12 = MSG_EXTERNAL_2285755983326368129$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral([":\u241F6b8167bc45f6157c32e3125cbf87a50eb006c7d1\u241F2285755983326368129:Show next step"])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3170102086648208827$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("Hello from second step");
            i18n_14 = MSG_EXTERNAL_3170102086648208827$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_HIDE_WIZARD_HIDE_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral([":\u241F8483af4d9cc6c7e2834d3c251b5398540cc556a5\u241F3170102086648208827:Hello from second step"])));
          }

          return [["id", "nui-demo-wizard-hide-show", "finishText", i18n_2], ["wizardComponent", ""], ["title", i18n_4, 3, "stepTemplate"], ["wizardStepFirst", ""], ["title", i18n_6, 3, "stepTemplate"], ["wizardStepHidden", ""], ["step1", ""], ["stepHidden", ""], i18n_8, [1, "btn-group"], ["nui-button", "", "type", "button", "id", "nui-demo-hide-button", 3, "click"], i18n_10, ["nui-button", "", "type", "button", "id", "nui-demo-show-button", 3, "click"], i18n_12, i18n_14];
        },
        template: function WizardHiddenExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-wizard-step", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-wizard-step", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardHiddenExampleComponent_ng_template_6_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WizardHiddenExampleComponent_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r5);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "S0eR":
    /*!**************************************************!*\
      !*** ./demo/src/components/demo/wizard/index.ts ***!
      \**************************************************/

    /*! exports provided: WizardExampleComponent, WizardDialogExampleComponent, WizardSimpleExampleComponent, WizardBusyExampleComponent, WizardValidationExampleComponent, WizardDisabledExampleComponent, WizardHiddenExampleComponent, WizardDynamicExampleComponent, WizardAdditionalButtonExampleComponent, WizardConfirmationDialogExampleComponent, WizardVisualTestComponent, WizardConstantHeightExampleComponent, WizardCustomStepLineWidthComponent, WizardStepsExampleComponent, WizardDynamicRemoveExampleComponent */

    /***/
    function S0eR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _wizard_docs_wizard_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wizard-docs/wizard-docs.example.component */
      "csoI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardExampleComponent", function () {
        return _wizard_docs_wizard_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["WizardExampleComponent"];
      });
      /* harmony import */


      var _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wizard-dialog/wizard-dialog.example.component */
      "ERD8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDialogExampleComponent", function () {
        return _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_1__["WizardDialogExampleComponent"];
      });
      /* harmony import */


      var _wizard_simple_wizard_simple_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wizard-simple/wizard-simple.example.component */
      "2Vzo");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardSimpleExampleComponent", function () {
        return _wizard_simple_wizard_simple_example_component__WEBPACK_IMPORTED_MODULE_2__["WizardSimpleExampleComponent"];
      });
      /* harmony import */


      var _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wizard-busy/wizard-busy.example.component */
      "YrZP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardBusyExampleComponent", function () {
        return _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardBusyExampleComponent"];
      });
      /* harmony import */


      var _wizard_validation_wizard_validation_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wizard-validation/wizard-validation.example.component */
      "iV0u");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardValidationExampleComponent", function () {
        return _wizard_validation_wizard_validation_example_component__WEBPACK_IMPORTED_MODULE_4__["WizardValidationExampleComponent"];
      });
      /* harmony import */


      var _wizard_disabled_wizard_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wizard-disabled/wizard-disabled.example.component */
      "3bUS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDisabledExampleComponent", function () {
        return _wizard_disabled_wizard_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__["WizardDisabledExampleComponent"];
      });
      /* harmony import */


      var _wizard_hide_wizard_hide_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wizard-hide/wizard-hide.example.component */
      "RlMX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardHiddenExampleComponent", function () {
        return _wizard_hide_wizard_hide_example_component__WEBPACK_IMPORTED_MODULE_6__["WizardHiddenExampleComponent"];
      });
      /* harmony import */


      var _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./wizard-dynamic/wizard-dynamic.example.component */
      "eKxF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDynamicExampleComponent", function () {
        return _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_7__["WizardDynamicExampleComponent"];
      });
      /* harmony import */


      var _wizard_additional_button_wizard_additional_button_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./wizard-additional-button/wizard-additional-button.example.component */
      "fKXL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardAdditionalButtonExampleComponent", function () {
        return _wizard_additional_button_wizard_additional_button_example_component__WEBPACK_IMPORTED_MODULE_8__["WizardAdditionalButtonExampleComponent"];
      });
      /* harmony import */


      var _wizard_confirmation_dialog_wizard_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./wizard-confirmation-dialog/wizard-confirmation-dialog.example.component */
      "nOJm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardConfirmationDialogExampleComponent", function () {
        return _wizard_confirmation_dialog_wizard_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_9__["WizardConfirmationDialogExampleComponent"];
      });
      /* harmony import */


      var _wizard_visual_test_wizard_visual_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./wizard-visual-test/wizard-visual-test.component */
      "Fa+E");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardVisualTestComponent", function () {
        return _wizard_visual_test_wizard_visual_test_component__WEBPACK_IMPORTED_MODULE_10__["WizardVisualTestComponent"];
      });
      /* harmony import */


      var _wizard_constant_height_wizard_constant_height_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./wizard-constant-height/wizard-constant-height.example.component */
      "cNgq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardConstantHeightExampleComponent", function () {
        return _wizard_constant_height_wizard_constant_height_example_component__WEBPACK_IMPORTED_MODULE_11__["WizardConstantHeightExampleComponent"];
      });
      /* harmony import */


      var _wizard_custom_step_line_width_wizard_custom_step_line_width_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./wizard-custom-step-line-width/wizard-custom-step-line-width.example.component */
      "VBfl");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomStepLineWidthComponent", function () {
        return _wizard_custom_step_line_width_wizard_custom_step_line_width_example_component__WEBPACK_IMPORTED_MODULE_12__["WizardCustomStepLineWidthComponent"];
      });
      /* harmony import */


      var _wizard_steps_wizard_steps_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./wizard-steps/wizard-steps.example.component */
      "/qNy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardStepsExampleComponent", function () {
        return _wizard_steps_wizard_steps_example_component__WEBPACK_IMPORTED_MODULE_13__["WizardStepsExampleComponent"];
      });
      /* harmony import */


      var _wizard_dynamic_remove_wizard_dynamic_remove_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./wizard-dynamic-remove/wizard-dynamic-remove.example.component */
      "04Lg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WizardDynamicRemoveExampleComponent", function () {
        return _wizard_dynamic_remove_wizard_dynamic_remove_example_component__WEBPACK_IMPORTED_MODULE_14__["WizardDynamicRemoveExampleComponent"];
      });
      /***/

    },

    /***/
    "SG63":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-dynamic-remove/wizard-dynamic-remove.example.component.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SG63(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport { IWizardSelectionEvent, WizardComponent, WizardStepComponent } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\n@Component({\n    selector: \"nui-wizard-dynamic-remove-example\",\n    templateUrl: \"./wizard-dynamic-remove.example.component.html\",\n})\nexport class WizardDynamicRemoveExampleComponent implements OnDestroy {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"dynamicStep\") dynamicStep: WizardStepComponent;\n\n    public selectedIndex: number;\n\n    private destroy$ = new Subject();\n\n    public select(event: IWizardSelectionEvent): void {\n        this.selectedIndex = event.selectedIndex;\n    }\n\n    public addStep(): void {\n        const index = this.selectedIndex + 1;\n        const step: WizardStepComponent = this.wizardComponent.addStepDynamic(this.dynamicStep, index);\n\n        step.enter.pipe(takeUntil(this.destroy$))\n            .subscribe(() => console.log(`Enter event has been emitted from WizardStepComponent`));\n\n        step.exit.pipe(takeUntil(this.destroy$))\n            .subscribe(() => console.log(`Exit event has been emitted from WizardStepComponent`));\n    }\n\n    public removeStep(index: number): void {\n        this.wizardComponent.removeStep(index);\n    }\n\n    public ngOnDestroy(): void {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n}\n";
      /***/
    },

    /***/
    "SvgZ":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-custom-step-line-width/wizard-custom-step-line-width.example.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SvgZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #step1>\n   \n</ng-template>\n<ng-template #step2>\n    \n</ng-template>\n\n<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard\"\n            [stretchStepLines]=\"true\"\n            finishText=\"Finish\"\n            i18n-finishText>\n    <nui-wizard-step id=\"nui-demo-wizard-step\" i18n-title title=\"This is an excessively long title why would you do it\" [stepTemplate]=\"step1\"></nui-wizard-step>\n    <nui-wizard-step i18n-title title=\"This title is pretty long too lorem ipsum dolor\" [stepTemplate]=\"step2\"></nui-wizard-step>\n</nui-wizard>\n";
      /***/
    },

    /***/
    "Tl9n":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/index.ts ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tl9n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./wizard-docs/wizard-docs.example.component\";\nexport * from \"./wizard-dialog/wizard-dialog.example.component\";\nexport * from \"./wizard-simple/wizard-simple.example.component\";\nexport * from \"./wizard-busy/wizard-busy.example.component\";\nexport * from \"./wizard-validation/wizard-validation.example.component\";\nexport * from \"./wizard-disabled/wizard-disabled.example.component\";\nexport * from \"./wizard-hide/wizard-hide.example.component\";\nexport * from \"./wizard-dynamic/wizard-dynamic.example.component\";\nexport * from \"./wizard-additional-button/wizard-additional-button.example.component\";\nexport * from \"./wizard-confirmation-dialog/wizard-confirmation-dialog.example.component\";\nexport * from \"./wizard-visual-test/wizard-visual-test.component\";\nexport * from \"./wizard-constant-height/wizard-constant-height.example.component\";\nexport * from \"./wizard-custom-step-line-width/wizard-custom-step-line-width.example.component\";\nexport * from \"./wizard-steps/wizard-steps.example.component\";\nexport * from \"./wizard-dynamic-remove/wizard-dynamic-remove.example.component\";\n";
      /***/
    },

    /***/
    "VBfl":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-custom-step-line-width/wizard-custom-step-line-width.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: WizardCustomStepLineWidthComponent */

    /***/
    function VBfl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardCustomStepLineWidthComponent", function () {
        return WizardCustomStepLineWidthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");

      function WizardCustomStepLineWidthComponent_ng_template_0_Template(rf, ctx) {}

      function WizardCustomStepLineWidthComponent_ng_template_2_Template(rf, ctx) {}

      var WizardCustomStepLineWidthComponent = function WizardCustomStepLineWidthComponent() {
        _classCallCheck(this, WizardCustomStepLineWidthComponent);
      };

      WizardCustomStepLineWidthComponent.ɵfac = function WizardCustomStepLineWidthComponent_Factory(t) {
        return new (t || WizardCustomStepLineWidthComponent)();
      };

      WizardCustomStepLineWidthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardCustomStepLineWidthComponent,
        selectors: [["nui-wizard-custom-step-line-width"]],
        decls: 8,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CUSTOM_STEP_LINE_WIDTH_WIZARD_CUSTOM_STEP_LINE_WIDTH_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Finish");
            i18n_0 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CUSTOM_STEP_LINE_WIDTH_WIZARD_CUSTOM_STEP_LINE_WIDTH_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6515836526217536121$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CUSTOM_STEP_LINE_WIDTH_WIZARD_CUSTOM_STEP_LINE_WIDTH_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This is an excessively long title why would you do it");
            i18n_2 = MSG_EXTERNAL_6515836526217536121$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CUSTOM_STEP_LINE_WIDTH_WIZARD_CUSTOM_STEP_LINE_WIDTH_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral([":\u241Fe04e55929b568ca5b4da3eaf5e712784ecf952cc\u241F6515836526217536121:This is an excessively long title why would you do it"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3461752174865311542$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CUSTOM_STEP_LINE_WIDTH_WIZARD_CUSTOM_STEP_LINE_WIDTH_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("This title is pretty long too lorem ipsum dolor");
            i18n_4 = MSG_EXTERNAL_3461752174865311542$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CUSTOM_STEP_LINE_WIDTH_WIZARD_CUSTOM_STEP_LINE_WIDTH_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral([":\u241F0f09490cb2f23f0118deaf19a5b94275d4051bce\u241F3461752174865311542:This title is pretty long too lorem ipsum dolor"])));
          }

          return [["step1", ""], ["step2", ""], ["id", "nui-demo-wizard", "finishText", i18n_0, 3, "stretchStepLines"], ["wizardComponent", ""], ["id", "nui-demo-wizard-step", "title", i18n_2, 3, "stepTemplate"], ["title", i18n_4, 3, "stepTemplate"]];
        },
        template: function WizardCustomStepLineWidthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardCustomStepLineWidthComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardCustomStepLineWidthComponent_ng_template_2_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-wizard", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-wizard-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-wizard-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stretchStepLines", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r2);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "W6/q":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-dynamic/wizard-dynamic.example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W6Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport { IWizardSelectionEvent, WizardComponent, WizardStepComponent } from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\n@Component({\n    selector: \"nui-wizard-dynamic-example\",\n    templateUrl: \"./wizard-dynamic.example.component.html\",\n})\nexport class WizardDynamicExampleComponent implements OnDestroy {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"dynamicStep\") dynamicStep: WizardStepComponent;\n\n    public selectedIndex: number;\n\n    private dynamicStepsSubscriptions: Subscription[] = [];\n\n    public select(event: IWizardSelectionEvent) {\n        this.selectedIndex = event.selectedIndex;\n    }\n\n    public addStep() {\n        // addStepDynamic returns an instance of WizardStepComponent that was dynamically added\n        const step: WizardStepComponent = this.wizardComponent.addStepDynamic(this.dynamicStep, this.selectedIndex + 1);\n        // subscribe to entering the dynamic step and push it to subscriptions array\n        this.dynamicStepsSubscriptions.push(step.enter.subscribe(() => {\n            console.log(\"Enter event has been emitted from WizardStepComponent\");\n        }));\n        // subscribe to exiting the dynamic step and push it to subscriptions array\n        this.dynamicStepsSubscriptions.push(step.exit.subscribe(() => {\n            console.log(\"Exit event has been emitted from WizardStepComponent\");\n        }));\n    }\n\n    public ngOnDestroy(): void {\n        this.dynamicStepsSubscriptions.forEach(subscription => subscription.unsubscribe());\n    }\n}\n";
      /***/
    },

    /***/
    "XQtI":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-busy/wizard-busy.example.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XQtI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #stepBusy>\n    <p i18n>Welcome!</p>\n</ng-template>\n<ng-template #step2>\n    <nui-checkbox name=\"nui-demo-checkbox\"\n                    i18n-title\n                    title=\"Check box with help text\"\n                    i18n-hint\n                    hint=\"This is some help text\"\n                    required=\"true\"\n                    [value]=\"false\"\n                    i18n>Check box with help text\n    </nui-checkbox>\n    <nui-checkbox name=\"nui-demo-checkbox-plain\"\n                    [checked]=\"true\"\n                    [value]=\"false\"\n                    i18n>Plain checkbox\n    </nui-checkbox>\n</ng-template>\n<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-busy\"\n            finishText=\"Finish\"\n            i18n-finishText>\n    <nui-wizard-step i18n-title title=\"Make step busy\" [stepTemplate]=\"stepBusy\"></nui-wizard-step>\n    <nui-wizard-step i18n-title title=\"Final\" [stepTemplate]=\"step2\"></nui-wizard-step>\n</nui-wizard>\n\n<button nui-button type=\"button\" id=\"nui-demo-busy-button\" (click)=\"toggleStepBusy()\" i18n>Toggle busy on current step</button>\n";
      /***/
    },

    /***/
    "XTji":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-confirmation-dialog/wizard-confirmation-dialog.example.component.ts ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XTji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-confirmation-dialog-example\",\n    templateUrl: \"./wizard-confirmation-dialog.example.component.html\",\n})\nexport class WizardConfirmationDialogExampleComponent {\n    public activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n        @Inject(ToastService) private toastService: ToastService) { }\n\n    public openConfirmationDialog($event: boolean, content: TemplateRef<string>) {\n        if ($event) {\n            this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n        } else {\n            this.toastService.info({\n                message: $localize `Cancel button clicked!`,\n                title: $localize `Event`,\n            });\n        }\n    }\n\n    public onButtonClick(title: string) {\n        title === \"Leave\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    private actionDone(): void {\n        this.toastService.success({\n            message: $localize `Leave Done!`,\n            title: $localize `Event`,\n        });\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({\n            message: $localize `Action Canceled!`,\n            title: $localize `Event`,\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "XeuQ":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-visual-test/wizard-visual-test.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XeuQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit, TemplateRef, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport {\n    DialogService, IBusyConfig, IWizardSelectionEvent, NuiDialogRef, WizardComponent, WizardStepComponent\n} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-visual\",\n    templateUrl: \"./wizard-visual-test.component.html\",\n})\nexport class WizardVisualTestComponent implements OnInit {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"dialogWizardBusy\") dialogWizardBusy: WizardComponent;\n\n    public myForm: FormGroup;\n    public hint = \"example-hint\";\n    public caption = \"example-caption\";\n    public secondStepBusyConfig: IBusyConfig = {\n        busy: false,\n        message: \"Step is busy\",\n    };\n    public busyConfig: IBusyConfig = {\n        busy: false,\n        message: \"Step is busy\",\n    };\n    public selectedIndex: number;\n\n    private activeDialog: NuiDialogRef;\n\n    constructor(private formBuilder: FormBuilder,\n                @Inject(DialogService) private dialogService: DialogService) {}\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            name: this.formBuilder.control(\"\",\n                                           Validators.required),\n            email: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.pattern(\"[^ @]*@[^ @]*\"),\n            ]),\n            password: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.minLength(8),\n            ]),\n        });\n    }\n\n    public onOptionChange(value: string) {\n        this.hint = value;\n    }\n\n    public makeSecondStepBusy() {\n        this.secondStepBusyConfig.busy = true;\n        this.wizardComponent.navigationControl.next({ busyState: this.secondStepBusyConfig, allowStepChange: false});\n        setTimeout(() => {\n            this.secondStepBusyConfig.busy = false;\n            this.wizardComponent.navigationControl.next({ busyState: this.secondStepBusyConfig, allowStepChange: true});\n        }, 1000);\n    }\n\n    public onCancelClick(content: TemplateRef<string>) {\n        if (this.wizardComponent.steps.toArray().filter((step: WizardStepComponent) => step.complete).length !== 0) {\n            this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n        }\n    }\n\n    public select(event: IWizardSelectionEvent) {\n        this.selectedIndex = event.selectedIndex;\n    }\n\n    public preventGoingNext() {\n        this.busyConfig.busy = true;\n        this.wizardComponent.navigationControl.next({ busyState: this.busyConfig, allowStepChange: false});\n        setTimeout(() => {\n            this.busyConfig.busy = false;\n            this.wizardComponent.navigationControl.next({ busyState: this.busyConfig, allowStepChange: true});\n        }, 1000);\n    }\n\n    public openDialog(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"lg\"});\n    }\n\n    public closeDialog() {\n        this.activeDialog.close();\n    }\n\n    public makeStepBusy() {\n        this.busyConfig.busy = true;\n        this.dialogWizardBusy.navigationControl.next({ busyState: this.busyConfig, allowStepChange: false});\n    }\n}\n";
      /***/
    },

    /***/
    "Y0jJ":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-busy/wizard-busy.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y0jJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewChild } from \"@angular/core\";\nimport { IBusyConfig, WizardComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-busy-example\",\n    templateUrl: \"./wizard-busy.example.component.html\",\n})\nexport class WizardBusyExampleComponent  {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n\n    public busyConfig: IBusyConfig = {\n        busy: false,\n        message: $localize `Step is busy`,\n    };\n\n    constructor() {}\n\n    public toggleStepBusy() {\n        this.busyConfig.busy = !this.busyConfig.busy;\n        this.wizardComponent.navigationControl.next({ busyState: this.busyConfig, allowStepChange: !this.busyConfig.busy});\n    }\n}\n";
      /***/
    },

    /***/
    "YrZP":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-busy/wizard-busy.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: WizardBusyExampleComponent */

    /***/
    function YrZP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardBusyExampleComponent", function () {
        return WizardBusyExampleComponent;
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


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      var _c0 = ["wizardComponent"];

      function WizardBusyExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function WizardBusyExampleComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true)("value", false);
        }
      }

      var WizardBusyExampleComponent = /*#__PURE__*/function () {
        function WizardBusyExampleComponent() {
          _classCallCheck(this, WizardBusyExampleComponent);

          this.busyConfig = {
            busy: false,
            message: $localize(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Step is busy"])))
          };
        }

        _createClass(WizardBusyExampleComponent, [{
          key: "toggleStepBusy",
          value: function toggleStepBusy() {
            this.busyConfig.busy = !this.busyConfig.busy;
            this.wizardComponent.navigationControl.next({
              busyState: this.busyConfig,
              allowStepChange: !this.busyConfig.busy
            });
          }
        }]);

        return WizardBusyExampleComponent;
      }();

      WizardBusyExampleComponent.ɵfac = function WizardBusyExampleComponent_Factory(t) {
        return new (t || WizardBusyExampleComponent)();
      };

      WizardBusyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WizardBusyExampleComponent,
        selectors: [["nui-wizard-busy-example"]],
        viewQuery: function WizardBusyExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
          }
        },
        decls: 10,
        vars: 2,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Finish");
            i18n_1 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3075523710276010487$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Make step busy");
            i18n_3 = MSG_EXTERNAL_3075523710276010487$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_4;
          } else {
            i18n_3 = $localize(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral([":\u241F23e740336d60746d6da9c90a50d593287c4d94ac\u241F3075523710276010487:Make step busy"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4609200447119745819$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Final");
            i18n_5 = MSG_EXTERNAL_4609200447119745819$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_6;
          } else {
            i18n_5 = $localize(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral([":\u241F5233e7292acd46d01dfa207d4921e4a723110ed2\u241F4609200447119745819:Final"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5760615285289112280$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Toggle busy on current step");
            i18n_7 = MSG_EXTERNAL_5760615285289112280$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS_8;
          } else {
            i18n_7 = $localize(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral([":\u241F4b5cefe4cdf44c6487b4f166461d54d331e7896d\u241F5760615285289112280:Toggle busy on current step"])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5890833044137447416$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("Welcome!");
            i18n_9 = MSG_EXTERNAL_5890833044137447416$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__10;
          } else {
            i18n_9 = $localize(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral([":\u241F356501fb47a7de720e71263c3d1cce5d6e681c4b\u241F5890833044137447416:Welcome!"])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__12 = goog.getMsg("Check box with help text");
            i18n_11 = MSG_EXTERNAL_5530604904987545137$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__12;
          } else {
            i18n_11 = $localize(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral([":\u241Fc42399c4f4c441cd575f6140076703ec297e247b\u241F5530604904987545137:Check box with help text"])));
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__14 = goog.getMsg("This is some help text");
            i18n_13 = MSG_EXTERNAL_829155627086234075$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__14;
          } else {
            i18n_13 = $localize(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral([":\u241Fba785d6cbb33a003a3ce1d20077ba67264374284\u241F829155627086234075:This is some help text"])));
          }

          var i18n_15;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7423534081684222193$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__16 = goog.getMsg("Check box with help text ");
            i18n_15 = MSG_EXTERNAL_7423534081684222193$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__16;
          } else {
            i18n_15 = $localize(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral([":\u241Fafe4e37e44b987e90ca54c9344a8cec80dcbd337\u241F7423534081684222193:Check box with help text "])));
          }

          var i18n_17;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7797723356051242784$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__18 = goog.getMsg("Plain checkbox ");
            i18n_17 = MSG_EXTERNAL_7797723356051242784$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_BUSY_WIZARD_BUSY_EXAMPLE_COMPONENT_TS__18;
          } else {
            i18n_17 = $localize(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral([":\u241F4279bb41f011a36dde2569b52bd9296a94480c6e\u241F7797723356051242784:Plain checkbox "])));
          }

          return [["stepBusy", ""], ["step2", ""], ["id", "nui-demo-wizard-busy", "finishText", i18n_1], ["wizardComponent", ""], ["title", i18n_3, 3, "stepTemplate"], ["title", i18n_5, 3, "stepTemplate"], ["nui-button", "", "type", "button", "id", "nui-demo-busy-button", 3, "click"], i18n_7, i18n_9, ["name", "nui-demo-checkbox", "title", i18n_11, "hint", i18n_13, "required", "true", 3, "value"], i18n_15, ["name", "nui-demo-checkbox-plain", 3, "checked", "value"], i18n_17];
        },
        template: function WizardBusyExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, WizardBusyExampleComponent_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, WizardBusyExampleComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-wizard", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "nui-wizard-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-wizard-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardBusyExampleComponent_Template_button_click_8_listener() {
              return ctx.toggleStepBusy();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r2);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "a83j":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-additional-button/wizard-additional-button.example.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a83j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-additional-button-example\",\n    templateUrl: \"./wizard-additional-button.example.component.html\",\n})\nexport class WizardAdditionalButtonExampleComponent  {\n    constructor(@Inject(ToastService) private toastService: ToastService) {}\n\n    public onAdditionalButtonClick() {\n        this.toastService.info({message: $localize `Additional button clicked!`});\n    }\n}\n";
      /***/
    },

    /***/
    "bD21":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bD21(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiDialogModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule,\n    NuiRadioModule,\n    NuiTextboxModule,\n    NuiValidationMessageModule,\n    NuiWizardModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    WizardAdditionalButtonExampleComponent,\n    WizardBusyExampleComponent,\n    WizardConfirmationDialogExampleComponent,\n    WizardConstantHeightExampleComponent,\n    WizardCustomStepLineWidthComponent,\n    WizardDialogExampleComponent,\n    WizardDisabledExampleComponent,\n    WizardDynamicExampleComponent,\n    WizardExampleComponent,\n    WizardHiddenExampleComponent,\n    WizardSimpleExampleComponent,\n    WizardStepsExampleComponent,\n    WizardValidationExampleComponent,\n    WizardVisualTestComponent,\n    WizardDynamicRemoveExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: WizardExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"wizard-test\",\n        component: WizardExampleComponent,\n    },\n    {\n        path: \"wizard-visual-test\",\n        component: WizardVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"wizard-steps\",\n        component: WizardStepsExampleComponent,\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiWizardModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        NuiTextboxModule,\n        NuiRadioModule,\n        NuiCheckboxModule,\n        NuiDialogModule,\n        NuiValidationMessageModule,\n        NuiFormFieldModule,\n        FormsModule,\n        ReactiveFormsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        WizardAdditionalButtonExampleComponent,\n        WizardBusyExampleComponent,\n        WizardConfirmationDialogExampleComponent,\n        WizardConstantHeightExampleComponent,\n        WizardDialogExampleComponent,\n        WizardDisabledExampleComponent,\n        WizardDynamicExampleComponent,\n        WizardExampleComponent,\n        WizardHiddenExampleComponent,\n        WizardSimpleExampleComponent,\n        WizardValidationExampleComponent,\n        WizardVisualTestComponent,\n        WizardCustomStepLineWidthComponent,\n        WizardDynamicRemoveExampleComponent,\n        WizardStepsExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class WizardModule {\n}\n";
      /***/
    },

    /***/
    "bDMd":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-simple/wizard-simple.example.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bDMd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #step1>\n    <nui-textbox\n        i18n-caption\n        caption=\"First\"\n        name=\"hint\"\n        [value]=\"hint\"\n        customBoxWidth=\"150px\"\n        (textChange)=\"onOptionChange($event)\">\n    </nui-textbox>\n</ng-template>\n<ng-template #step2>\n    <nui-checkbox name=\"nui-demo-checkbox\"\n                  i18n-title\n                  title=\"Check box with help text\"\n                  i18n-hint\n                  hint=\"This is some help text\"\n                  required=\"true\"\n                  [value]=\"false\" i18n>Check box with help text\n    </nui-checkbox>\n</ng-template>\n\n<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard\"\n            finishText=\"Finish\"\n            i18n-finishText>\n    <nui-wizard-step id=\"nui-demo-wizard-step\" i18n-title title=\"First\" [stepTemplate]=\"step1\"></nui-wizard-step>\n    <nui-wizard-step i18n-title title=\"Final\" [stepTemplate]=\"step2\"></nui-wizard-step>\n</nui-wizard>\n";
      /***/
    },

    /***/
    "boY1":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-dialog/wizard-dialog.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function boY1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, TemplateRef, ViewChild } from \"@angular/core\";\nimport { DialogService, NuiDialogRef, ToastService, WizardComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-dialog-example\",\n    templateUrl: \"./wizard-dialog.example.component.html\",\n})\nexport class WizardDialogExampleComponent {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n\n    public activeDialog: NuiDialogRef;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService,\n        @Inject(ToastService) private toastService: ToastService) { }\n\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n    public selectedVegetables = [$localize `Potato`, $localize `Tomato`];\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n\n    public valuesChanged(values: any[]) {\n        this.selectedVegetables = [...values];\n    }\n\n    public openDialog(content: TemplateRef<string>) {\n        this.activeDialog = this.dialogService.open(content, {size: \"lg\"});\n    }\n\n    public closeDialog() {\n        this.activeDialog.close();\n    }\n}\n";
      /***/
    },

    /***/
    "cNgq":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-constant-height/wizard-constant-height.example.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: WizardConstantHeightExampleComponent */

    /***/
    function cNgq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardConstantHeightExampleComponent", function () {
        return WizardConstantHeightExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");
      /* harmony import */


      var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/radio/radio-group.component */
      "lLUT");

      function WizardConstantHeightExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardConstantHeightExampleComponent_ng_template_0_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.increaseHeight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardConstantHeightExampleComponent_ng_template_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.decreaseHeight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardConstantHeightExampleComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
        }
      }

      function WizardConstantHeightExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-textbox", 18);
        }
      }

      function WizardConstantHeightExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-radio-group", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-radio", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-radio", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-radio", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardConstantHeightExampleComponent = /*#__PURE__*/function () {
        function WizardConstantHeightExampleComponent() {
          _classCallCheck(this, WizardConstantHeightExampleComponent);

          this.wizardBodyHeight = "200px";
        }

        _createClass(WizardConstantHeightExampleComponent, [{
          key: "increaseHeight",
          value: function increaseHeight() {
            this.wizardBodyHeight = "".concat(parseInt(this.wizardBodyHeight, 10) + 20, "px");
          }
        }, {
          key: "decreaseHeight",
          value: function decreaseHeight() {
            this.wizardBodyHeight = "".concat(parseInt(this.wizardBodyHeight, 10) - 20, "px");
          }
        }]);

        return WizardConstantHeightExampleComponent;
      }();

      WizardConstantHeightExampleComponent.ɵfac = function WizardConstantHeightExampleComponent_Factory(t) {
        return new (t || WizardConstantHeightExampleComponent)();
      };

      WizardConstantHeightExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardConstantHeightExampleComponent,
        selectors: [["nui-wizard-constant-height-example"]],
        decls: 14,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Finish");
            i18n_0 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("First");
            i18n_2 = MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral([":\u241Ff2f852318759c6396b5d3d17031d53817d7b38cc\u241F2241508602425256033:First"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4791345740322435630$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Second");
            i18n_4 = MSG_EXTERNAL_4791345740322435630$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral([":\u241Ff6bbd50fdb03237c630dbbf141ef4b5e61746220\u241F4791345740322435630:Second"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7328891136796337314$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Third");
            i18n_6 = MSG_EXTERNAL_7328891136796337314$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral([":\u241F9777c63a86244efea1c9b3fb018fd2531d019927\u241F7328891136796337314:Third"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4609200447119745819$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Final");
            i18n_8 = MSG_EXTERNAL_4609200447119745819$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS_9;
          } else {
            i18n_8 = $localize(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral([":\u241F5233e7292acd46d01dfa207d4921e4a723110ed2\u241F4609200447119745819:Final"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5947660084102544301$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" Increase height of container ");
            i18n_10 = MSG_EXTERNAL_5947660084102544301$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral([":\u241Fa78bc09029868c2f583a1531ff0a847d159da895\u241F5947660084102544301: Increase height of container "])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2594883992796459597$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__13 = goog.getMsg(" Decrease height of container ");
            i18n_12 = MSG_EXTERNAL_2594883992796459597$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral([":\u241Fcbc97e5efb46ff57fcec13110c14944d319a59a2\u241F2594883992796459597: Decrease height of container "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1927737112092041895$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__15 = goog.getMsg("Checkbox 1");
            i18n_14 = MSG_EXTERNAL_1927737112092041895$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral([":\u241Febf8fe790f164d65689a6bf985dda6dc75569d96\u241F1927737112092041895:Checkbox 1"])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5478291317649644619$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__17 = goog.getMsg("Checkbox 2");
            i18n_16 = MSG_EXTERNAL_5478291317649644619$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__17;
          } else {
            i18n_16 = $localize(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral([":\u241F83f68834910679c12c8102d37942e373f031eec5\u241F5478291317649644619:Checkbox 2"])));
          }

          var i18n_18;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8669046756134502985$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__19 = goog.getMsg("Checkbox 3");
            i18n_18 = MSG_EXTERNAL_8669046756134502985$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__19;
          } else {
            i18n_18 = $localize(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral([":\u241F142395aa27cff12fa86bede77be54f4014acf344\u241F8669046756134502985:Checkbox 3"])));
          }

          var i18n_20;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8927356839446745609$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__21 = goog.getMsg(" Banana ");
            i18n_20 = MSG_EXTERNAL_8927356839446745609$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__21;
          } else {
            i18n_20 = $localize(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral([":\u241F1896b6fcd6cbe500b4cbf07c127f098f38e6730c\u241F8927356839446745609: Banana "])));
          }

          var i18n_22;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_637222728950322780$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__23 = goog.getMsg(" Mango ");
            i18n_22 = MSG_EXTERNAL_637222728950322780$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__23;
          } else {
            i18n_22 = $localize(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral([":\u241F0c7dca16d4528f3b5b1b0d8230265853a4f2b72f\u241F637222728950322780: Mango "])));
          }

          var i18n_24;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5190273791909760567$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__25 = goog.getMsg(" Kiwi ");
            i18n_24 = MSG_EXTERNAL_5190273791909760567$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONSTANT_HEIGHT_WIZARD_CONSTANT_HEIGHT_EXAMPLE_COMPONENT_TS__25;
          } else {
            i18n_24 = $localize(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral([":\u241F8c505bfaf0e492ea4fa0db42867fbc5ef516d1f7\u241F5190273791909760567: Kiwi "])));
          }

          return [["step1", ""], ["step2", ""], ["step3", ""], ["step4", ""], ["id", "nui-demo-wizard-constant-height", "finishText", i18n_0, 3, "enableScroll", "bodyContainerHeight"], ["wizardComponent", ""], ["id", "nui-demo-wizard-height-invariable-step", "title", i18n_2, 3, "stepTemplate"], ["title", i18n_4, 3, "stepTemplate"], ["title", i18n_6, 3, "stepTemplate"], ["title", i18n_8, 3, "stepTemplate"], ["name", "hint", "value", "Example Value"], ["nui-button", "", "type", "button", 1, "m-2", 3, "click"], i18n_10, i18n_12, [3, "checked"], i18n_14, i18n_16, i18n_18, ["name", "hint", "value", "Step 3 value"], ["name", "fruit"], ["value", "Banana"], i18n_20, ["value", "Mango"], i18n_22, ["value", "Kiwi"], i18n_24];
        },
        template: function WizardConstantHeightExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WizardConstantHeightExampleComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WizardConstantHeightExampleComponent_ng_template_2_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardConstantHeightExampleComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardConstantHeightExampleComponent_ng_template_6_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-wizard", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-wizard-step", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nui-wizard-step", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-wizard-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nui-wizard-step", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableScroll", true)("bodyContainerHeight", ctx.wizardBodyHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r6);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_2__["WizardStepComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_3__["TextboxComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_6__["RadioGroupComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_6__["RadioComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "csoI":
    /*!**************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-docs/wizard-docs.example.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: WizardExampleComponent */

    /***/
    function csoI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardExampleComponent", function () {
        return WizardExampleComponent;
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


      var _wizard_simple_wizard_simple_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wizard-simple/wizard-simple.example.component */
      "2Vzo");
      /* harmony import */


      var _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../wizard-dialog/wizard-dialog.example.component */
      "ERD8");
      /* harmony import */


      var _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../wizard-busy/wizard-busy.example.component */
      "YrZP");
      /* harmony import */


      var _wizard_validation_wizard_validation_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../wizard-validation/wizard-validation.example.component */
      "iV0u");
      /* harmony import */


      var _wizard_disabled_wizard_disabled_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../wizard-disabled/wizard-disabled.example.component */
      "3bUS");
      /* harmony import */


      var _wizard_hide_wizard_hide_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../wizard-hide/wizard-hide.example.component */
      "RlMX");
      /* harmony import */


      var _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../wizard-dynamic/wizard-dynamic.example.component */
      "eKxF");
      /* harmony import */


      var _wizard_dynamic_remove_wizard_dynamic_remove_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../wizard-dynamic-remove/wizard-dynamic-remove.example.component */
      "04Lg");
      /* harmony import */


      var _wizard_additional_button_wizard_additional_button_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../wizard-additional-button/wizard-additional-button.example.component */
      "fKXL");
      /* harmony import */


      var _wizard_confirmation_dialog_wizard_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../wizard-confirmation-dialog/wizard-confirmation-dialog.example.component */
      "nOJm");
      /* harmony import */


      var _wizard_constant_height_wizard_constant_height_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../wizard-constant-height/wizard-constant-height.example.component */
      "cNgq");
      /* harmony import */


      var _wizard_custom_step_line_width_wizard_custom_step_line_width_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../wizard-custom-step-line-width/wizard-custom-step-line-width.example.component */
      "VBfl");
      /* harmony import */


      var _wizard_steps_wizard_steps_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../wizard-steps/wizard-steps.example.component */
      "/qNy");

      var WizardExampleComponent = function WizardExampleComponent() {
        _classCallCheck(this, WizardExampleComponent);
      };

      WizardExampleComponent.ɵfac = function WizardExampleComponent_Factory(t) {
        return new (t || WizardExampleComponent)();
      };

      WizardExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardExampleComponent,
        selectors: [["nui-wizard-example"]],
        decls: 162,
        vars: 1,
        consts: [["href", "../components/WizardStepComponent.html", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "wizard-simple", "exampleTitle", "Simple wizard"], ["filenamePrefix", "wizard-dialog", "exampleTitle", "wizard in dialog"], ["filenamePrefix", "wizard-busy", "exampleTitle", "wizard step busy"], ["filenamePrefix", "wizard-validation", "exampleTitle", "wizard step validation"], ["filenamePrefix", "wizard-disabled", "exampleTitle", "wizard step disable"], ["filenamePrefix", "wizard-hide", "exampleTitle", "wizard step hide/show"], ["filenamePrefix", "wizard-dynamic", "exampleTitle", "wizard add dynamic step"], ["filenamePrefix", "wizard-dynamic-remove", "exampleTitle", "wizard remove dynamic step"], ["filenamePrefix", "wizard-additional-button", "exampleTitle", "wizard additional button"], ["filenamePrefix", "wizard-confirmation-dialog", "exampleTitle", "wizard confirmation dialog"], ["filenamePrefix", "wizard-constant-height", "exampleTitle", "wizard constant height"], ["filenamePrefix", "wizard-custom-step-line-width", "exampleTitle", "wizard custom steps label width"], ["filenamePrefix", "wizard-steps", "exampleTitle", "wizard steps combination"]],
        template: function WizardExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiWizardModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To use the wizard component, place a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "nui-wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " element in your template and include one or more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "nui-wizard-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " elements as children of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "nui-wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " element.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-message", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " To specify a label for the finish button of the last step, specify a value for the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "nui-wizard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "'s ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "finishText");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nui-wizard-simple-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Usage with a dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "You can pass an existing wizard component as content of the dialog window. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "You should insert wizard component in dialog body. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-wizard-dialog-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Busy step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "You can make your step busy to forbid actions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "You should pass 'busyConfig' (look at type 'IBusyConfig') to 'navigationControl' method of wizard step to make it work.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "nui-wizard-busy-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "You can use any custom input validation to wizard step.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "To forbid passing to next step while form is not valid you should pass boolean value to next step's property 'stepControl'.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "nui-wizard-validation-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Disabled step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "You can disable wizard step to forbid user switch to this step.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "To make step disabled you should use wizard method 'disableStep' and pass wizardStep component to it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "nui-wizard-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Hide/show step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "You can hide or show wizard steps.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "To make it you should use wizard methods 'hideStep', 'showStep' and pass wizardStepComponent to it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-wizard-hide-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Adding step dynamically");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "You are able to add wizard steps dynamically");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "To make it you should use wizard method 'addStepDynamic' and pass 2 arguments wizardStepComponent and index to insert it in correct place.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Angular doesn't allow binding to outputs of dynamically created component from template. You can access outputs of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "nui-wizard-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " directly.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "addStepDynamic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " method of Wizard\nreturns you instance of dynamically added step and you can manually subscribe to outputs like ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "enter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, ",");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " etc.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "nui-wizard-dynamic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Remove step dynamically");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "You are able to remove wizard steps dynamically");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "To make it you should use wizard method 'removeStep' and pass index");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Your couldn't remove first (0 index) step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "nui-wizard-dynamic-remove-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Additional button in footer example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "You are able to provide additional button in footer of wizard.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "To do it you should provide nui-button as a content of nui-wizard component.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "nui-wizard-additional-button-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Confirmation dialog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "To implement confirmation dialog you should use method 'confirm' from dialog service and call it from outputs such as 'onCancel' or 'onFinish'.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "By default UX suggestion 'onCancel' output sends boolean event which is false when user is on first step.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "On this example confirmation dialog represents default UX behavior and does not appear on first wizard step.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "nui-example-wrapper", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "nui-wizard-confirmation-dialog-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Constant height");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " To make the height of the wizard constant for all steps and have the body of a step scroll vertically if it extends beyond the fixed height, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "enableScroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " input to true and set the desired height of the wizard body container using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "bodyContainerHeight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Supported values of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "bodyContainerHeight");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " are the same as in CSS. For example: 100px, 5vh, etc.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "nui-example-wrapper", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "nui-wizard-constant-height-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Stretched steps line width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " To make the width of the steps line stretch according to the largest of step labels, use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "stretchStepLines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " input. With it set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ", wizard will calculate the width of the largest label and adjust all the lines so the labels don't overflow.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "nui-example-wrapper", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "nui-wizard-custom-step-line-width");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Wizard steps combination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " You can provide a combination of static and dynamic steps of the wizard. See example below:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nui-example-wrapper", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "nui-wizard-steps-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _wizard_simple_wizard_simple_example_component__WEBPACK_IMPORTED_MODULE_3__["WizardSimpleExampleComponent"], _wizard_dialog_wizard_dialog_example_component__WEBPACK_IMPORTED_MODULE_4__["WizardDialogExampleComponent"], _wizard_busy_wizard_busy_example_component__WEBPACK_IMPORTED_MODULE_5__["WizardBusyExampleComponent"], _wizard_validation_wizard_validation_example_component__WEBPACK_IMPORTED_MODULE_6__["WizardValidationExampleComponent"], _wizard_disabled_wizard_disabled_example_component__WEBPACK_IMPORTED_MODULE_7__["WizardDisabledExampleComponent"], _wizard_hide_wizard_hide_example_component__WEBPACK_IMPORTED_MODULE_8__["WizardHiddenExampleComponent"], _wizard_dynamic_wizard_dynamic_example_component__WEBPACK_IMPORTED_MODULE_9__["WizardDynamicExampleComponent"], _wizard_dynamic_remove_wizard_dynamic_remove_example_component__WEBPACK_IMPORTED_MODULE_10__["WizardDynamicRemoveExampleComponent"], _wizard_additional_button_wizard_additional_button_example_component__WEBPACK_IMPORTED_MODULE_11__["WizardAdditionalButtonExampleComponent"], _wizard_confirmation_dialog_wizard_confirmation_dialog_example_component__WEBPACK_IMPORTED_MODULE_12__["WizardConfirmationDialogExampleComponent"], _wizard_constant_height_wizard_constant_height_example_component__WEBPACK_IMPORTED_MODULE_13__["WizardConstantHeightExampleComponent"], _wizard_custom_step_line_width_wizard_custom_step_line_width_example_component__WEBPACK_IMPORTED_MODULE_14__["WizardCustomStepLineWidthComponent"], _wizard_steps_wizard_steps_example_component__WEBPACK_IMPORTED_MODULE_15__["WizardStepsExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "d6/z":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-disabled/wizard-disabled.example.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-disable\"\n            finishText=\"Finish\"\n            i18n-finishText>\n        <nui-wizard-step #wizardStepFirst i18n-title title=\"Disable next step\" [stepTemplate]=\"step1\"></nui-wizard-step>\n        <nui-wizard-step #wizardStepDisable i18n-title title=\"Second step\" [stepTemplate]=\"stepDisabled\"></nui-wizard-step>\n</nui-wizard>\n<ng-template #step1>\n    <p i18n>Hi! You can disable next step</p>\n    <div class=\"btn-group\">\n        <button nui-button type=\"button\" id=\"nui-demo-disable-button\" (click)=\"disableStep()\" i18n>Disable next step</button>\n        <button nui-button type=\"button\" id=\"nui-demo-enable-button\" (click)=\"enableStep()\" i18n>Enable next step</button>\n    </div>\n</ng-template>\n<ng-template #stepDisabled>\n    <p i18n>Disabled step</p>\n</ng-template>\n";
      /***/
    },

    /***/
    "eKxF":
    /*!********************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-dynamic/wizard-dynamic.example.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: WizardDynamicExampleComponent */

    /***/
    function eKxF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardDynamicExampleComponent", function () {
        return WizardDynamicExampleComponent;
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


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var _c0 = ["wizardComponent"];
      var _c1 = ["dynamicStep"];

      function WizardDynamicExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardDynamicExampleComponent_ng_template_6_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.addStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function WizardDynamicExampleComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var WizardDynamicExampleComponent = /*#__PURE__*/function () {
        function WizardDynamicExampleComponent() {
          _classCallCheck(this, WizardDynamicExampleComponent);

          this.dynamicStepsSubscriptions = [];
        }

        _createClass(WizardDynamicExampleComponent, [{
          key: "select",
          value: function select(event) {
            this.selectedIndex = event.selectedIndex;
          }
        }, {
          key: "addStep",
          value: function addStep() {
            // addStepDynamic returns an instance of WizardStepComponent that was dynamically added
            var step = this.wizardComponent.addStepDynamic(this.dynamicStep, this.selectedIndex + 1); // subscribe to entering the dynamic step and push it to subscriptions array

            this.dynamicStepsSubscriptions.push(step.enter.subscribe(function () {
              console.log("Enter event has been emitted from WizardStepComponent");
            })); // subscribe to exiting the dynamic step and push it to subscriptions array

            this.dynamicStepsSubscriptions.push(step.exit.subscribe(function () {
              console.log("Exit event has been emitted from WizardStepComponent");
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dynamicStepsSubscriptions.forEach(function (subscription) {
              return subscription.unsubscribe();
            });
          }
        }]);

        return WizardDynamicExampleComponent;
      }();

      WizardDynamicExampleComponent.ɵfac = function WizardDynamicExampleComponent_Factory(t) {
        return new (t || WizardDynamicExampleComponent)();
      };

      WizardDynamicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WizardDynamicExampleComponent,
        selectors: [["nui-wizard-dynamic-example"]],
        viewQuery: function WizardDynamicExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dynamicStep = _t.first);
          }
        },
        decls: 10,
        vars: 3,
        consts: function consts() {
          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Finish");
            i18n_2 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7648268751296041024$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Add step dynamically");
            i18n_4 = MSG_EXTERNAL_7648268751296041024$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral([":\u241Fbd5772b9673205503673958067be0dd245d3955b\u241F7648268751296041024:Add step dynamically"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__7 = goog.getMsg("Hi! You can add next step dynamically");
            i18n_6 = MSG_EXTERNAL_4074000604906025359$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__7;
          } else {
            i18n_6 = $localize(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral([":\u241F9dfa7b9ebe128bde7cab896a85986ebb450f99f7\u241F4074000604906025359:Hi! You can add next step dynamically"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2815688941003513063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Add dynamic step");
            i18n_8 = MSG_EXTERNAL_2815688941003513063$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral([":\u241F7f455eb4baba5bce4523070171e75e46bbc0a4b6\u241F2815688941003513063:Add dynamic step"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_392108755776816996$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Hi! I'm dynamic step!");
            i18n_10 = MSG_EXTERNAL_392108755776816996$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_DYNAMIC_WIZARD_DYNAMIC_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral([":\u241Fac4915de7d495c385f232606717e4c85222997da\u241F392108755776816996:Hi! I'm dynamic step!"])));
          }

          return [["id", "nui-demo-wizard-add-dynamic", "finishText", i18n_2, 3, "selectionChange"], ["wizardComponent", ""], ["title", i18n_4, 3, "stepTemplate"], ["wizardStepAdd", ""], [3, "title", "stepTemplate"], ["dynamicStep", ""], ["step1", ""], ["dynamicStepTemplate", ""], i18n_6, ["nui-button", "", "type", "button", "id", "nui-demo-dynamic-button", 3, "click"], i18n_8, i18n_10];
        },
        template: function WizardDynamicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function WizardDynamicExampleComponent_Template_nui_wizard_selectionChange_0_listener($event) {
              return ctx.select($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-wizard-step", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-wizard-step", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardDynamicExampleComponent_ng_template_6_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, WizardDynamicExampleComponent_ng_template_8_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Dynamic")("stepTemplate", _r5);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "epAE":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function epAE(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "Tl9n",
        "./wizard-additional-button/wizard-additional-button.example.component.html": "f1pX",
        "./wizard-additional-button/wizard-additional-button.example.component.ts": "a83j",
        "./wizard-busy/wizard-busy.example.component.html": "XQtI",
        "./wizard-busy/wizard-busy.example.component.ts": "Y0jJ",
        "./wizard-confirmation-dialog/wizard-confirmation-dialog.example.component.html": "LXgN",
        "./wizard-confirmation-dialog/wizard-confirmation-dialog.example.component.ts": "XTji",
        "./wizard-constant-height/wizard-constant-height.example.component.html": "fKPJ",
        "./wizard-constant-height/wizard-constant-height.example.component.ts": "p347",
        "./wizard-custom-step-line-width/wizard-custom-step-line-width.example.component.html": "SvgZ",
        "./wizard-custom-step-line-width/wizard-custom-step-line-width.example.component.ts": "L54k",
        "./wizard-dialog/wizard-dialog.example.component.html": "lkAy",
        "./wizard-dialog/wizard-dialog.example.component.ts": "boY1",
        "./wizard-disabled/wizard-disabled.example.component.html": "d6/z",
        "./wizard-disabled/wizard-disabled.example.component.ts": "B07R",
        "./wizard-docs/wizard-docs.example.component.html": "LZXz",
        "./wizard-docs/wizard-docs.example.component.ts": "DNeV",
        "./wizard-dynamic-remove/wizard-dynamic-remove.example.component.html": "AFmX",
        "./wizard-dynamic-remove/wizard-dynamic-remove.example.component.ts": "SG63",
        "./wizard-dynamic/wizard-dynamic.example.component.html": "gffW",
        "./wizard-dynamic/wizard-dynamic.example.component.ts": "W6/q",
        "./wizard-hide/wizard-hide.example.component.html": "5QmC",
        "./wizard-hide/wizard-hide.example.component.ts": "h2WL",
        "./wizard-simple/wizard-simple.example.component.html": "bDMd",
        "./wizard-simple/wizard-simple.example.component.ts": "zu0y",
        "./wizard-steps/wizard-steps.example.component.html": "uLIj",
        "./wizard-steps/wizard-steps.example.component.ts": "+QPo",
        "./wizard-validation/wizard-validation.example.component.html": "OzPF",
        "./wizard-validation/wizard-validation.example.component.ts": "6prp",
        "./wizard-visual-test/wizard-visual-test.component.html": "MVzA",
        "./wizard-visual-test/wizard-visual-test.component.ts": "XeuQ",
        "./wizard.module.ts": "bD21"
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
      webpackContext.id = "epAE";
      /***/
    },

    /***/
    "f1pX":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-additional-button/wizard-additional-button.example.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f1pX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-add-additional-button\"\n            finishText=\"Finish\"\n            i18n-finishText>\n        <nui-wizard-step #wizardStepAdditional [title]=\"'Additional button step'\" [stepTemplate]=\"step1\"></nui-wizard-step>\n        <button nui-button type=\"button\" id=\"nui-demo-additional-button\"(click)=\"onAdditionalButtonClick()\" i18n>Additional button</button>\n</nui-wizard>\n<ng-template #step1>\n    <p i18n>There is example of additional button in footer</p>\n</ng-template>\n";
      /***/
    },

    /***/
    "fKPJ":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-constant-height/wizard-constant-height.example.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fKPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #step1>\n    <nui-textbox\n        name=\"hint\"\n        value=\"Example Value\">\n    </nui-textbox>\n    <button nui-button\n            class=\"m-2\"\n            type=\"button\"\n            (click)=\"increaseHeight()\" i18n>\n        Increase height of container\n    </button>\n    <button nui-button\n            class=\"m-2\"\n            type=\"button\"\n            (click)=\"decreaseHeight()\" i18n>\n        Decrease height of container\n    </button>\n</ng-template>\n<ng-template #step2>\n    <nui-checkbox [checked]=\"true\" i18n>Checkbox 1</nui-checkbox>\n    <nui-checkbox [checked]=\"false\" i18n>Checkbox 2</nui-checkbox>\n    <nui-checkbox [checked]=\"true\" i18n>Checkbox 3</nui-checkbox>\n</ng-template>\n<ng-template #step3>\n    <nui-textbox\n        name=\"hint\"\n        value=\"Step 3 value\">\n    </nui-textbox>\n</ng-template>\n<ng-template #step4>\n    <nui-radio-group name=\"fruit\">\n        <nui-radio value=\"Banana\" i18n>\n            Banana\n        </nui-radio>\n        <nui-radio value=\"Mango\" i18n>\n            Mango\n        </nui-radio>\n        <nui-radio value=\"Kiwi\" i18n>\n            Kiwi\n        </nui-radio>\n    </nui-radio-group>\n</ng-template>\n<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-constant-height\"\n            [enableScroll]=\"true\"\n            [bodyContainerHeight]=\"wizardBodyHeight\"\n            finishText=\"Finish\"\n            i18n-finishText>\n    <nui-wizard-step id=\"nui-demo-wizard-height-invariable-step\"\n                     i18n-title\n                     title=\"First\"\n                     [stepTemplate]=\"step1\"></nui-wizard-step>\n    <nui-wizard-step i18n-title\n                     title=\"Second\"\n                     [stepTemplate]=\"step2\"></nui-wizard-step>\n    <nui-wizard-step i18n-title\n                     title=\"Third\"\n                     [stepTemplate]=\"step3\"></nui-wizard-step>\n    <nui-wizard-step i18n-title\n                     title=\"Final\"\n                     [stepTemplate]=\"step4\"></nui-wizard-step>\n</nui-wizard>\n";
      /***/
    },

    /***/
    "fKXL":
    /*!****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-additional-button/wizard-additional-button.example.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: WizardAdditionalButtonExampleComponent */

    /***/
    function fKXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardAdditionalButtonExampleComponent", function () {
        return WizardAdditionalButtonExampleComponent;
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


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function WizardAdditionalButtonExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var WizardAdditionalButtonExampleComponent = /*#__PURE__*/function () {
        function WizardAdditionalButtonExampleComponent(toastService) {
          _classCallCheck(this, WizardAdditionalButtonExampleComponent);

          this.toastService = toastService;
        }

        _createClass(WizardAdditionalButtonExampleComponent, [{
          key: "onAdditionalButtonClick",
          value: function onAdditionalButtonClick() {
            this.toastService.info({
              message: $localize(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["Additional button clicked!"])))
            });
          }
        }]);

        return WizardAdditionalButtonExampleComponent;
      }();

      WizardAdditionalButtonExampleComponent.ɵfac = function WizardAdditionalButtonExampleComponent_Factory(t) {
        return new (t || WizardAdditionalButtonExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      WizardAdditionalButtonExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: WizardAdditionalButtonExampleComponent,
        selectors: [["nui-wizard-additional-button-example"]],
        decls: 8,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_ADDITIONAL_BUTTON_WIZARD_ADDITIONAL_BUTTON_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Finish");
            i18n_0 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_ADDITIONAL_BUTTON_WIZARD_ADDITIONAL_BUTTON_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_181808587444048100$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_ADDITIONAL_BUTTON_WIZARD_ADDITIONAL_BUTTON_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Additional button");
            i18n_2 = MSG_EXTERNAL_181808587444048100$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_ADDITIONAL_BUTTON_WIZARD_ADDITIONAL_BUTTON_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral([":\u241F116b035df5f55c340b627022579d03e64427f386\u241F181808587444048100:Additional button"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4798341153218182161$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_ADDITIONAL_BUTTON_WIZARD_ADDITIONAL_BUTTON_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("There is example of additional button in footer");
            i18n_4 = MSG_EXTERNAL_4798341153218182161$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_ADDITIONAL_BUTTON_WIZARD_ADDITIONAL_BUTTON_EXAMPLE_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral([":\u241F75fc830d964475a10d9b8899f7a9b3124508bfdd\u241F4798341153218182161:There is example of additional button in footer"])));
          }

          return [["id", "nui-demo-wizard-add-additional-button", "finishText", i18n_0], ["wizardComponent", ""], [3, "title", "stepTemplate"], ["wizardStepAdditional", ""], ["nui-button", "", "type", "button", "id", "nui-demo-additional-button", 3, "click"], i18n_2, ["step1", ""], i18n_4];
        },
        template: function WizardAdditionalButtonExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-wizard", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-wizard-step", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WizardAdditionalButtonExampleComponent_Template_button_click_4_listener() {
              return ctx.onAdditionalButtonClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, WizardAdditionalButtonExampleComponent_ng_template_6_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Additional button step")("stepTemplate", _r2);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gffW":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-dynamic/wizard-dynamic.example.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gffW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-add-dynamic\"\n            (selectionChange)=\"select($event)\"\n            finishText=\"Finish\"\n            i18n-finishText>\n        <nui-wizard-step #wizardStepAdd i18n-title title=\"Add step dynamically\" [stepTemplate]=\"step1\"></nui-wizard-step>\n</nui-wizard>\n<nui-wizard-step #dynamicStep [title]=\"'Dynamic'\" [stepTemplate]=\"dynamicStepTemplate\"></nui-wizard-step>\n<ng-template #step1>\n    <p i18n>Hi! You can add next step dynamically</p>\n    <button nui-button type=\"button\" id=\"nui-demo-dynamic-button\" (click)=\"addStep()\" i18n>Add dynamic step</button>\n</ng-template>\n<ng-template #dynamicStepTemplate>\n    <p i18n>Hi! I'm dynamic step!</p>\n</ng-template>\n";
      /***/
    },

    /***/
    "h2WL":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-hide/wizard-hide.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function h2WL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, ViewChild } from \"@angular/core\";\nimport { WizardComponent, WizardStepComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-hide-example\",\n    templateUrl: \"./wizard-hide.example.component.html\",\n})\nexport class WizardHiddenExampleComponent  {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"wizardStepHidden\") wizardStepHiddenComponent: WizardStepComponent;\n\n    public hideStep() {\n        this.wizardComponent.hideStep(this.wizardStepHiddenComponent);\n    }\n\n    public showStep() {\n        this.wizardComponent.showStep(this.wizardStepHiddenComponent);\n    }\n}\n";
      /***/
    },

    /***/
    "iV0u":
    /*!**************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-validation/wizard-validation.example.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: WizardValidationExampleComponent */

    /***/
    function iV0u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardValidationExampleComponent", function () {
        return WizardValidationExampleComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox.component */
      "nOFM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");
      /* harmony import */


      var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/checkbox/checkbox.component */
      "Oh8U");

      var _c0 = ["wizardComponent"];

      function WizardValidationExampleComponent_ng_template_0_nui_validation_message_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-validation-message", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function WizardValidationExampleComponent_ng_template_0_nui_validation_message_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-validation-message", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function WizardValidationExampleComponent_ng_template_0_nui_validation_message_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-validation-message", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function WizardValidationExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nui-textbox", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "nui-textbox", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WizardValidationExampleComponent_ng_template_0_nui_validation_message_7_Template, 2, 0, "nui-validation-message", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WizardValidationExampleComponent_ng_template_0_nui_validation_message_8_Template, 2, 0, "nui-validation-message", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WizardValidationExampleComponent_ng_template_0_nui_validation_message_9_Template, 2, 0, "nui-validation-message", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nui-validation-message", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](11, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nui-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "nui-textbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r1.myForm.controls["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.myForm.controls["email"].errors == null ? null : ctx_r1.myForm.controls["email"].errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.myForm.controls["email"].errors == null ? null : ctx_r1.myForm.controls["email"].errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.myForm.controls["email"].errors == null ? null : ctx_r1.myForm.controls["email"].errors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showOptionalText", false);
        }
      }

      function WizardValidationExampleComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nStart"](3, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18nEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nui-form-field", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nui-validation-message", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Confirm that you have configured all steps which are needed to proceed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nui-checkbox", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " I need to be checked to go further ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.secondStepForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx_r3.secondStepForm.controls["formCheckbox"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("required", true)("checked", false);
        }
      }

      function WizardValidationExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](1, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var WizardValidationExampleComponent = /*#__PURE__*/function () {
        function WizardValidationExampleComponent(formBuilder) {
          _classCallCheck(this, WizardValidationExampleComponent);

          this.formBuilder = formBuilder;
        }

        _createClass(WizardValidationExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              name: this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              email: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("[^ @]*@[^ @]*"), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
              password: this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)])
            });
            this.secondStepForm = this.formBuilder.group({
              formCheckbox: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]]
            });
          }
        }, {
          key: "updateValidity",
          value: function updateValidity() {
            var _a;

            (_a = this.secondStepForm.get("formCheckbox")) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
          }
        }]);

        return WizardValidationExampleComponent;
      }();

      WizardValidationExampleComponent.ɵfac = function WizardValidationExampleComponent_Factory(t) {
        return new (t || WizardValidationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      WizardValidationExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: WizardValidationExampleComponent,
        selectors: [["nui-wizard-validation-example"]],
        viewQuery: function WizardValidationExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.wizardComponent = _t.first);
          }
        },
        decls: 13,
        vars: 5,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_2 = goog.getMsg("Finish");
            i18n_1 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_2;
          } else {
            i18n_1 = $localize(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3049673300876415199$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_4 = goog.getMsg("Step with validation");
            i18n_3 = MSG_EXTERNAL_3049673300876415199$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_4;
          } else {
            i18n_3 = $localize(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral([":\u241F6c785d3c1b3c2d07114806a3f4003eba30438760\u241F3049673300876415199:Step with validation"])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_6 = goog.getMsg("Second step");
            i18n_5 = MSG_EXTERNAL_2997617654392962041$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_6;
          } else {
            i18n_5 = $localize(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral([":\u241Fb29f4fd21a1d511462918ede337438d03dab18e5\u241F2997617654392962041:Second step"])));
          }

          var i18n_7;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7555941619776368370$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_8 = goog.getMsg("Third step");
            i18n_7 = MSG_EXTERNAL_7555941619776368370$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS_8;
          } else {
            i18n_7 = $localize(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral([":\u241F58c5b4c2622894df7f56d5c6c3ff7d0703d93ba2\u241F7555941619776368370:Third step"])));
          }

          var i18n_9;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__10 = goog.getMsg("Name");
            i18n_9 = MSG_EXTERNAL_8953033926734869941$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__10;
          } else {
            i18n_9 = $localize(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
          }

          var i18n_11;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__12 = goog.getMsg("Email");
            i18n_11 = MSG_EXTERNAL_4768749765465246664$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__12;
          } else {
            i18n_11 = $localize(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral([":\u241F244aae9346da82b0922506c2d2581373a15641cc\u241F4768749765465246664:Email"])));
          }

          var i18n_13;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_104115633754407961$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__14 = goog.getMsg(" This message is always here ");
            i18n_13 = MSG_EXTERNAL_104115633754407961$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__14;
          } else {
            i18n_13 = $localize(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral([":\u241F41f758f0c10865be5ce4dd69cb37b6cd28457ef6\u241F104115633754407961: This message is always here "])));
          }

          var i18n_15;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__16 = goog.getMsg("Password");
            i18n_15 = MSG_EXTERNAL_1431416938026210429$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__16;
          } else {
            i18n_15 = $localize(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral([":\u241Fc32ef07f8803a223a83ed17024b38e8d82292407\u241F1431416938026210429:Password"])));
          }

          var i18n_17;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS___18 = goog.getMsg(" This is required ");
            i18n_17 = MSG_EXTERNAL_5777549257495630003$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS___18;
          } else {
            i18n_17 = $localize(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral([":\u241F42b47c9df37297506ee0ddf14763cb0ddfa58ea6\u241F5777549257495630003: This is required "])));
          }

          var i18n_19;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3099868474448484472$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS___20 = goog.getMsg(" Please put at least \"@\" to pass this validator ");
            i18n_19 = MSG_EXTERNAL_3099868474448484472$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS___20;
          } else {
            i18n_19 = $localize(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral([":\u241Fb6d39c8dc54711c73844a8e8fb0d28083686fb9c\u241F3099868474448484472: Please put at least \"@\" to pass this validator "])));
          }

          var i18n_21;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_8371578491478396458$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS___22 = goog.getMsg(" This should be a valid email ");
            i18n_21 = MSG_EXTERNAL_8371578491478396458$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS___22;
          } else {
            i18n_21 = $localize(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral([":\u241Fb766ddb973af5c40e19b3f7c1c01de58f2ceeabe\u241F8371578491478396458: This should be a valid email "])));
          }

          var i18n_23;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3170102086648208827$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__24 = goog.getMsg("Hello from second step");
            i18n_23 = MSG_EXTERNAL_3170102086648208827$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__24;
          } else {
            i18n_23 = $localize(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral([":\u241F8483af4d9cc6c7e2834d3c251b5398540cc556a5\u241F3170102086648208827:Hello from second step"])));
          }

          var i18n_25;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4245970060244450100$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__26 = goog.getMsg("This step has a handler for the {$startTagCode}next{$closeTagCode} event fired from this step only, rather than from the entire wizard.", {
              "startTagCode": "\uFFFD#4\uFFFD",
              "closeTagCode": "\uFFFD/#4\uFFFD"
            });
            i18n_25 = MSG_EXTERNAL_4245970060244450100$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__26;
          } else {
            i18n_25 = $localize(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral([":\u241F8985494094ab04be1bfed5d856b24ce1225cd1de\u241F4245970060244450100:This step has a handler for the ", ":START_TAG_CODE:next", ":CLOSE_TAG_CODE: event fired from this step only, rather than from the entire wizard."])), "\uFFFD#4\uFFFD", "\uFFFD/#4\uFFFD");
          }

          var i18n_27;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_9115950652940647254$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__28 = goog.getMsg("This is step #3");
            i18n_27 = MSG_EXTERNAL_9115950652940647254$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_VALIDATION_WIZARD_VALIDATION_EXAMPLE_COMPONENT_TS__28;
          } else {
            i18n_27 = $localize(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral([":\u241Fb24c86b770b967c3186b73a019db0c992513d68b\u241F9115950652940647254:This is step #3"])));
          }

          return [["stepWithValidation", ""], ["step2", ""], ["step3", ""], ["id", "nui-demo-wizard-validation", "finishText", i18n_1], ["wizardComponent", ""], ["title", i18n_3, 3, "stepTemplate", "stepControl"], ["title", i18n_5, 3, "stepTemplate", "stepControl", "next"], ["wizardStep2", ""], ["title", i18n_7, 3, "stepTemplate"], ["wizardStep3", ""], [3, "formGroup"], [1, "form-group"], ["caption", i18n_9, 1, "d-block", "mb-4"], ["id", "stepInputName", "formControlName", "name"], ["caption", i18n_11, 1, "d-block", "mb-4", 3, "control"], ["type", "email", "id", "stepInputEmail", "formControlName", "email"], ["for", "required", 4, "ngIf"], ["for", "pattern", 4, "ngIf"], ["for", "email", 4, "ngIf"], [3, "show"], i18n_13, ["caption", i18n_15, 1, "d-block", "mb-4", 3, "showOptionalText"], ["type", "password", "id", "stepInputPassword", "formControlName", "password"], ["for", "required"], i18n_17, ["for", "pattern"], i18n_19, ["for", "email"], i18n_21, i18n_23, i18n_25, [3, "control"], ["formControlName", "formCheckbox", 3, "required", "checked"], i18n_27];
        },
        template: function WizardValidationExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, WizardValidationExampleComponent_ng_template_0_Template, 15, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WizardValidationExampleComponent_ng_template_2_Template, 12, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WizardValidationExampleComponent_ng_template_4_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nui-wizard", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "nui-wizard-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nui-wizard-step", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("next", function WizardValidationExampleComponent_Template_nui_wizard_step_next_9_listener() {
              return ctx.updateValidity();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "nui-wizard-step", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepTemplate", _r0)("stepControl", ctx.myForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepTemplate", _r2)("stepControl", ctx.secondStepForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("stepTemplate", _r4);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_4__["WizardStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_5__["FormFieldComponent"], _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_6__["TextboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_8__["ValidationMessageComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "lkAy":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-dialog/wizard-dialog.example.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lkAy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #step1>\n    <nui-checkbox name=\"nui-demo-checkbox\"\n                  i18n-title\n                  title=\"Check box with help text\"\n                  i18n-hint\n                  hint=\"This is some help text\"\n                  required=\"true\"\n                  [value]=\"false\"\n                  i18n>Check box with help text\n    </nui-checkbox>\n    <nui-checkbox name=\"nui-demo-checkbox-plain\"\n                  [checked]=\"true\"\n                  [value]=\"false\"\n                  i18n>Plain checkbox\n    </nui-checkbox>\n</ng-template>\n<ng-template #step2>\n    <nui-checkbox-group name=\"vegetable\" [(values)]=\"selectedVegetables\"\n                        (valuesChange)=\"valuesChanged($event)\">\n        <nui-checkbox *ngFor=\"let vegetable of vegetables\"\n                      [value]=\"vegetable\"\n                      [checked]=\"isChecked(vegetable)\">\n            {{vegetable}}\n        </nui-checkbox>\n    </nui-checkbox-group>\n</ng-template>\n<ng-template #step3>\n    <p i18n>Not visited</p>\n</ng-template>\n<ng-template #step4>\n    <p i18n>Summary</p>\n</ng-template>\n<ng-template #dialogWizard>\n    <nui-dialog-header i18n-title title=\"Wizard dialog\" (closed)=\"closeDialog()\"></nui-dialog-header>\n    <div class=\"dialog-body compact-mode\">\n        <nui-wizard id=\"nui-demo-wizard-dialog\"\n                    (cancel)=\"closeDialog()\"\n                    finishText=\"Finish\"\n                    i18n-finishText>\n            <nui-wizard-step i18n-title title=\"Completed\" [stepTemplate]=\"step1\"></nui-wizard-step>\n            <nui-wizard-step i18n-title title=\"Active\" [stepTemplate]=\"step2\"></nui-wizard-step>\n            <nui-wizard-step i18n-title title=\"Not visited\" [stepTemplate]=\"step3\"></nui-wizard-step>\n            <nui-wizard-step i18n-title title=\"Summary\" [stepTemplate]=\"step4\"></nui-wizard-step>\n        </nui-wizard>\n    </div>\n</ng-template>\n<button id=\"nui-demo-dialog-wizard-btn\" nui-button type=\"button\" (click)=\"openDialog(dialogWizard)\" i18n> Open dialog wizard</button>\n";
      /***/
    },

    /***/
    "nOJm":
    /*!********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard-confirmation-dialog/wizard-confirmation-dialog.example.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: WizardConfirmationDialogExampleComponent */

    /***/
    function nOJm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardConfirmationDialogExampleComponent", function () {
        return WizardConfirmationDialogExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var _src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard.component */
      "23SV");
      /* harmony import */


      var _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/wizard/wizard-step.component */
      "cz7d");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      function WizardConfirmationDialogExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WizardConfirmationDialogExampleComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function WizardConfirmationDialogExampleComponent_ng_template_6_Template_nui_dialog_header_close_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardConfirmationDialogExampleComponent_ng_template_6_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onButtonClick("Stay");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardConfirmationDialogExampleComponent_ng_template_6_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onButtonClick("Leave");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WizardConfirmationDialogExampleComponent = /*#__PURE__*/function () {
        function WizardConfirmationDialogExampleComponent(dialogService, toastService) {
          _classCallCheck(this, WizardConfirmationDialogExampleComponent);

          this.dialogService = dialogService;
          this.toastService = toastService;
        }

        _createClass(WizardConfirmationDialogExampleComponent, [{
          key: "openConfirmationDialog",
          value: function openConfirmationDialog($event, content) {
            if ($event) {
              this.activeDialog = this.dialogService.open(content, {
                size: "sm"
              });
            } else {
              this.toastService.info({
                message: $localize(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["Cancel button clicked!"]))),
                title: $localize(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["Event"])))
              });
            }
          }
        }, {
          key: "onButtonClick",
          value: function onButtonClick(title) {
            title === "Leave" ? this.actionDone() : this.actionCanceled();
            this.activeDialog.close();
          }
        }, {
          key: "actionDone",
          value: function actionDone() {
            this.toastService.success({
              message: $localize(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["Leave Done!"]))),
              title: $localize(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }, {
          key: "actionCanceled",
          value: function actionCanceled() {
            this.toastService.info({
              message: $localize(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["Action Canceled!"]))),
              title: $localize(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["Event"])))
            });
          }
        }]);

        return WizardConfirmationDialogExampleComponent;
      }();

      WizardConfirmationDialogExampleComponent.ɵfac = function WizardConfirmationDialogExampleComponent_Factory(t) {
        return new (t || WizardConfirmationDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      WizardConfirmationDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardConfirmationDialogExampleComponent,
        selectors: [["nui-wizard-confirmation-dialog-example"]],
        decls: 8,
        vars: 3,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Finish");
            i18n_0 = MSG_EXTERNAL_65984904390749158$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral([":\u241F3ea51cf415feffef55e82c7b60e9486055837661\u241F65984904390749158:Finish"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("First");
            i18n_2 = MSG_EXTERNAL_2241508602425256033$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_3;
          } else {
            i18n_2 = $localize(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral([":\u241Ff2f852318759c6396b5d3d17031d53817d7b38cc\u241F2241508602425256033:First"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4791345740322435630$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Second");
            i18n_4 = MSG_EXTERNAL_4791345740322435630$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_5;
          } else {
            i18n_4 = $localize(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral([":\u241Ff6bbd50fdb03237c630dbbf141ef4b5e61746220\u241F4791345740322435630:Second"])));
          }

          var i18n_6;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7328891136796337314$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Third");
            i18n_6 = MSG_EXTERNAL_7328891136796337314$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS_7;
          } else {
            i18n_6 = $localize(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral([":\u241F9777c63a86244efea1c9b3fb018fd2531d019927\u241F7328891136796337314:Third"])));
          }

          var i18n_8;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6479908091784620951$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("Wizard cancel method behavior");
            i18n_8 = MSG_EXTERNAL_6479908091784620951$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__9;
          } else {
            i18n_8 = $localize(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral([":\u241F556bbbd061e644b61d6e76159cf4e7a987033fb5\u241F6479908091784620951:Wizard cancel method behavior"])));
          }

          var i18n_10;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_850755304192568180$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__11 = goog.getMsg("Really want to leave?");
            i18n_10 = MSG_EXTERNAL_850755304192568180$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__11;
          } else {
            i18n_10 = $localize(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral([":\u241Fa965396984be88f67efd42c6f0a03a9935eff37e\u241F850755304192568180:Really want to leave?"])));
          }

          var i18n_12;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7404808497023647349$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__13 = goog.getMsg(" There is at least one completed step in this wizard. Are you sure you want to leave? ");
            i18n_12 = MSG_EXTERNAL_7404808497023647349$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__13;
          } else {
            i18n_12 = $localize(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral([":\u241Ffaf936b547945527845e6a8fcdd2b4917c6248fd\u241F7404808497023647349: There is at least one completed step in this wizard. Are you sure you want to leave? "])));
          }

          var i18n_14;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6546223536596661743$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__15 = goog.getMsg(" Stay ");
            i18n_14 = MSG_EXTERNAL_6546223536596661743$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__15;
          } else {
            i18n_14 = $localize(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral([":\u241Fe8a0649fbe12bde2bd3363c13c669ed7011f55ee\u241F6546223536596661743: Stay "])));
          }

          var i18n_16;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3970632707551705064$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__17 = goog.getMsg(" Leave ");
            i18n_16 = MSG_EXTERNAL_3970632707551705064$$DEMO_SRC_COMPONENTS_DEMO_WIZARD_WIZARD_CONFIRMATION_DIALOG_WIZARD_CONFIRMATION_DIALOG_EXAMPLE_COMPONENT_TS__17;
          } else {
            i18n_16 = $localize(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral([":\u241Ff09202e621b2475a4dfe1d0aaf6a9e57c5b14f1b\u241F3970632707551705064: Leave "])));
          }

          return [["id", "nui-demo-wizard-confirmation-dialog", "finishText", i18n_0, 3, "cancel"], ["title", i18n_2, 3, "stepTemplate"], ["title", i18n_4, 3, "stepTemplate"], ["title", i18n_6, 3, "stepTemplate"], ["step1", ""], ["content", ""], i18n_8, ["title", i18n_10, 3, "close"], [1, "dialog-body"], i18n_12, ["nui-button", "", "type", "button", 3, "click"], i18n_14, ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], i18n_16];
        },
        template: function WizardConfirmationDialogExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-wizard", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function WizardConfirmationDialogExampleComponent_Template_nui_wizard_cancel_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              return ctx.openConfirmationDialog($event, _r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-wizard-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nui-wizard-step", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-wizard-step", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WizardConfirmationDialogExampleComponent_ng_template_4_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WizardConfirmationDialogExampleComponent_ng_template_6_Template, 9, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepTemplate", _r0);
          }
        },
        directives: [_src_lib_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _src_lib_wizard_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_5__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "p347":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-constant-height/wizard-constant-height.example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function p347(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-wizard-constant-height-example\",\n    templateUrl: \"./wizard-constant-height.example.component.html\",\n})\n\nexport class WizardConstantHeightExampleComponent {\n    public wizardBodyHeight: string = \"200px\";\n\n    public increaseHeight() {\n        this.wizardBodyHeight = `${parseInt(this.wizardBodyHeight, 10) + 20}px`;\n    }\n\n    public decreaseHeight() {\n        this.wizardBodyHeight = `${parseInt(this.wizardBodyHeight, 10) - 20}px`;\n    }\n}\n";
      /***/
    },

    /***/
    "r5eT":
    /*!**********************************************************!*\
      !*** ./demo/src/components/demo/wizard/wizard.module.ts ***!
      \**********************************************************/

    /*! exports provided: WizardModule */

    /***/
    function r5eT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardModule", function () {
        return WizardModule;
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
      "S0eR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["WizardExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "wizard-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["WizardExampleComponent"]
      }, {
        path: "wizard-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["WizardVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "wizard-steps",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["WizardStepsExampleComponent"]
      }];

      var WizardModule = function WizardModule() {
        _classCallCheck(this, WizardModule);
      };

      WizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: WizardModule
      });
      WizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function WizardModule_Factory(t) {
          return new (t || WizardModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("epAE");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiWizardModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WizardModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["WizardAdditionalButtonExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardBusyExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardConfirmationDialogExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardConstantHeightExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardDialogExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardDynamicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardHiddenExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardSimpleExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardValidationExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardCustomStepLineWidthComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardDynamicRemoveExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["WizardStepsExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiWizardModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRadioModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "uLIj":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-steps/wizard-steps.example.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uLIj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-wizard #wizardComponent\n            id=\"nui-demo-wizard-add-dynamic\"\n            (selectionChange)=\"select($event)\"\n            finishText=\"Finish\"\n            i18n-finishText>\n        <nui-wizard-step #wizardStepAdd i18n-title title=\"Add step dynamically\" [stepTemplate]=\"step1\"></nui-wizard-step>\n        <nui-wizard-step i18n-title #wizardStep3 title=\"Third step\" [stepTemplate]=\"step3\"></nui-wizard-step>\n</nui-wizard>\n<nui-wizard-step #dynamicStep \n                [title]=\"'Dynamic'\" \n                [stepTemplate]=\"stepWithValidation\"\n                [stepControl]=\"myForm.valid\"></nui-wizard-step>\n<!-- 1 step -->\n<ng-template #step1>\n    <p i18n>Hi! You can add next step dynamically</p>\n    <button nui-button type=\"button\" id=\"nui-demo-dynamic-button\" (click)=\"addStep()\" i18n>Add dynamic step</button>\n</ng-template>\n<!-- 2 step dynamic -->\n<ng-template #stepWithValidation>\n    <form [formGroup]=\"myForm\">\n        <div class=\"form-group\">\n            <nui-form-field class=\"d-block mb-4\"\n                            i18n-caption caption=\"Name\">\n                <nui-textbox id=\"stepInputName\"\n                             formControlName=\"name\"></nui-textbox>\n            </nui-form-field>\n        </div>\n        <div class=\"form-group\">\n            <nui-form-field class=\"d-block mb-4\"\n                            [control]=\"myForm.controls['email']\"\n                            i18n-caption\n                            caption=\"Email\">\n                <nui-textbox type=\"email\"\n                             id=\"stepInputEmail\"\n                             formControlName=\"email\"></nui-textbox>\n                <nui-validation-message for=\"required\" *ngIf=\"myForm.get(['email'])?.errors?.required\" i18n>\n                    This is required\n                </nui-validation-message>\n                <nui-validation-message for=\"pattern\" *ngIf=\"myForm.get(['email'])?.errors?.pattern\" i18n>\n                    Please put at least \"@\" to pass this validator\n                </nui-validation-message>\n                <nui-validation-message for=\"email\" *ngIf=\"myForm.get(['email'])?.errors?.email\" i18n>\n                    This should be a valid email?\n                </nui-validation-message>\n                <nui-validation-message [show]=\"true\" i18n>\n                    This message is always here\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n        <div class=\"form-group\">\n            <nui-form-field class=\"d-block mb-4\"\n                            [control]=\"myForm.controls['password']\"\n                            i18n-caption\n                            caption=\"Password\"\n                            [showOptionalText]=\"false\">\n                <nui-textbox type=\"password\"\n                             id=\"stepInputPassword\"\n                             formControlName=\"password\"></nui-textbox>\n                <nui-validation-message for=\"required\" *ngIf=\"myForm.get(['password'])?.errors?.required\" i18n>\n                    This is required\n                </nui-validation-message>\n                <nui-validation-message for=\"minlength\" *ngIf=\"myForm.get(['password'])?.errors?.minlength\" i18n>\n                    Minimum length is 8\n                </nui-validation-message>\n                <nui-validation-message [show]=\"true\" i18n>\n                    This message is always here\n                </nui-validation-message>\n            </nui-form-field>\n        </div>\n    </form>\n</ng-template>\n<!-- 3 step -->\n<ng-template #step3>\n    <p i18n>This is step #3</p>\n</ng-template>\n";
      /***/
    },

    /***/
    "zu0y":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/wizard/wizard-simple/wizard-simple.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zu0y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit, TemplateRef, ViewChild } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport {\n    DialogService, IBusyConfig, IWizardSelectionEvent, NuiDialogRef, ToastService, WizardComponent, WizardStepComponent\n} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-wizard-simple-example\",\n    templateUrl: \"./wizard-simple.example.component.html\",\n})\nexport class WizardSimpleExampleComponent implements OnInit {\n    @ViewChild(\"wizardComponent\") wizardComponent: WizardComponent;\n    @ViewChild(\"wizardStep2\") wizardStep2Component: WizardStepComponent;\n    @ViewChild(\"wizardStep3\") wizardStep3Component: WizardStepComponent;\n    @ViewChild(\"dynamicStep\") dynamicStep: WizardStepComponent;\n\n    public myForm: FormGroup;\n    public hint = $localize `example-hint`;\n    public caption = $localize `example-caption`;\n    public vegetables = [$localize `Cabbage`, $localize `Potato`, $localize `Tomato`, $localize `Carrot`];\n    public selectedVegetables = [$localize `Potato`, $localize `Tomato`];\n    public secondStepBusyConfig: IBusyConfig = {\n        busy: false,\n        message: $localize `Step is busy`,\n    };\n    public busyConfig: IBusyConfig = {\n        busy: false,\n        message: $localize `Step is busy`,\n    };\n    public selectedIndex: number;\n\n    private activeDialog: NuiDialogRef;\n\n    constructor(private formBuilder: FormBuilder,\n        @Inject(ToastService) private toastService: ToastService,\n        @Inject(DialogService) private dialogService: DialogService) { }\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            name: this.formBuilder.control(\"\",\n                                           Validators.required),\n            email: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.pattern(\"[^ @]*@[^ @]*\"),\n            ]),\n            password: this.formBuilder.control(\"\", [\n                Validators.required,\n                Validators.minLength(8),\n            ]),\n        });\n    }\n\n    public onOptionChange(value: string) {\n        this.hint = value;\n    }\n\n    public isChecked(vegetable: string): boolean {\n        return this.selectedVegetables.indexOf(vegetable) > -1;\n    }\n\n    public valuesChanged(values: any[]) {\n        this.selectedVegetables = [...values];\n    }\n\n    public addStep() {\n        this.wizardComponent.addStepDynamic(this.dynamicStep, this.selectedIndex + 1);\n    }\n\n    public disableSecondStep() {\n        this.wizardComponent.disableStep(this.wizardStep2Component);\n    }\n\n    public hideThirdStep() {\n        this.wizardComponent.hideStep(this.wizardStep3Component);\n    }\n\n    public visibleThirdStep() {\n        this.wizardComponent.showStep(this.wizardStep3Component);\n    }\n\n    public makeSecondStepBusy() {\n        this.secondStepBusyConfig.busy = true;\n        this.wizardComponent.navigationControl.next({ busyState: this.secondStepBusyConfig, allowStepChange: false});\n        setTimeout(() => {\n            this.secondStepBusyConfig.busy = false;\n            this.wizardComponent.navigationControl.next({ busyState: this.secondStepBusyConfig, allowStepChange: true});\n        }, 1000);\n    }\n\n    public onNextClick() {\n        this.toastService.info({\n            message: $localize `Next button clicked!`,\n            title: $localize `Event`,\n        });\n    }\n\n    public onCancelClick(content: TemplateRef<string>) {\n        if (this.wizardComponent.steps.toArray().filter((step: WizardStepComponent) => step.complete).length !== 0) {\n            this.activeDialog = this.dialogService.open(content, {size: \"sm\"});\n        } else {\n            this.toastService.info({\n                message: $localize `Cancel button clicked!`,\n                title: $localize `Event`,\n            });\n        }\n    }\n\n    public onFinishClick() {\n        this.toastService.info({\n            message: $localize `Finish button clicked!`,\n            title: $localize `Event`,\n        });\n    }\n\n    public handleClick() {\n        this.toastService.info({\n            message: $localize `Additional button clicked!`,\n            title: $localize `Event`,\n        });\n    }\n\n    public select(event: IWizardSelectionEvent) {\n        this.selectedIndex = event.selectedIndex;\n    }\n    public onButtonClick(title: string) {\n        title === \"Leave\" ? this.actionDone() : this.actionCanceled();\n        this.activeDialog.close();\n    }\n\n    public preventGoingNext() {\n        this.busyConfig.busy = true;\n        this.wizardComponent.navigationControl.next({ busyState: this.busyConfig, allowStepChange: false});\n        setTimeout(() => {\n            this.busyConfig.busy = false;\n            this.wizardComponent.navigationControl.next({ busyState: this.busyConfig, allowStepChange: true});\n        }, 1000);\n    }\n\n    private actionDone(): void {\n        this.toastService.success({message: $localize `Leave Done!`, title: $localize `Event`});\n    }\n\n    private actionCanceled(): void {\n        this.toastService.info({message: $localize `Action Canceled!`, title: $localize `Event`});\n    }\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-wizard-wizard-module-es5.js.map