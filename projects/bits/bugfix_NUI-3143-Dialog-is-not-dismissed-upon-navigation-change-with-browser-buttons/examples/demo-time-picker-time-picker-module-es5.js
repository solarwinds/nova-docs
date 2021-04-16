(function () {
  var _templateObject, _templateObject2, _templateObject3;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-time-picker-time-picker-module"], {
    /***/
    "5OEi":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-disabled/time-picker-disabled.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-picker id=\"nui-demo-timepicker-disabled\" [isDisabled]=\"true\"></nui-time-picker>\n";
      /***/
    },

    /***/
    "7wq3":
    /*!****************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: TimePickerPreserveInsignificantExampleComponent */

    /***/
    function wq3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerPreserveInsignificantExampleComponent", function () {
        return TimePickerPreserveInsignificantExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerPreserveInsignificantExampleComponent = /*#__PURE__*/function () {
        function TimePickerPreserveInsignificantExampleComponent(toastService) {
          _classCallCheck(this, TimePickerPreserveInsignificantExampleComponent);

          this.toastService = toastService;
          this.time = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();
        }

        _createClass(TimePickerPreserveInsignificantExampleComponent, [{
          key: "valueChange",
          value: function valueChange(time) {
            this.time = time;
            this.toastService.info({
              message: $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Selected time is: "]))) + this.time.toString()
            });
          }
        }]);

        return TimePickerPreserveInsignificantExampleComponent;
      }();

      TimePickerPreserveInsignificantExampleComponent.ɵfac = function TimePickerPreserveInsignificantExampleComponent_Factory(t) {
        return new (t || TimePickerPreserveInsignificantExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      TimePickerPreserveInsignificantExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimePickerPreserveInsignificantExampleComponent,
        selectors: [["nui-time-picker-preserve-insignificant"]],
        decls: 1,
        vars: 2,
        consts: [[3, "model", "preserveInsignificant", "timeChanged"]],
        template: function TimePickerPreserveInsignificantExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-time-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeChanged", function TimePickerPreserveInsignificantExampleComponent_Template_nui_time_picker_timeChanged_0_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.time)("preserveInsignificant", true);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["TimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "A0IM":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-docs/time-picker-docs.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A0IM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiTimePickerModule</code>\n    </li>\n</ul>\n<h2>Basic Usage</h2>\n<p>\n    To use the time picker add an <code>&lt;nui-time-picker&gt;</code> element to your template.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-basic\" exampleTitle=\"Basic Usage\">\n    <nui-time-picker-basic></nui-time-picker-basic>\n</nui-example-wrapper>\n\n<h2>Binding to Model Changes</h2>\n<p>\n    The <code>[model]</code> input represents the model of the time picker. To get the selected time, bind to the\n    <code>(timeChanged)</code> output which emits a <code>moment() object</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-model-change\" exampleTitle=\"Changing Model\">\n    <nui-time-picker-model-change></nui-time-picker-model-change>\n</nui-example-wrapper>\n\n<h2>Emitting the Day and Year</h2>\n<p>\n    To have <code>(timeChanged)</code> emit the current day and year in addition to the time, set the\n    <code>[preserveInsignificant]</code> input to true.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-preserve-insignificant\" exampleTitle=\"Emitting Day and Year\">\n    <nui-time-picker-preserve-insignificant></nui-time-picker-preserve-insignificant>\n</nui-example-wrapper>\n\n<h2>Setting Disabled</h2>\n<p>\n    To disable the time-picker, set the <code>[isDisabled]</code> input to true.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-disabled\" exampleTitle=\"Setting Disabled\">\n    <nui-time-picker-disabled></nui-time-picker-disabled>\n</nui-example-wrapper>\n\n<h2>Setting a Custom Time Format</h2>\n<p>\n    A custom time format can be applied via the <code>timeFormat</code> input. The default format is \"LT\".\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-custom-format\" exampleTitle=\"Custom Time Format\">\n    <nui-time-picker-custom-format></nui-time-picker-custom-format>\n</nui-example-wrapper>\n\n<h2>Setting a Custom Time Step</h2>\n<p>\n    A custom time step (the interval in minutes between selectable times) can be applied via the <code>timeStep</code> input.\n    The default time step is \"30\".\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-custom-step\" exampleTitle=\"Custom Time Step\">\n    <nui-time-picker-custom-step></nui-time-picker-custom-step>\n</nui-example-wrapper>\n\n<h2>Using with Reactive Forms</h2>\n<p>\n    To use <code>&lt;nui-time-picker&gt;</code> in a reactive form, create a <code>FormGroup</code> that represents the\n    form model. Then, bind <code>&lt;nui-time-picker&gt;</code> to a form element using the <code>formControlName</code>\n    attribute.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-picker-reactive-form\" exampleTitle=\"Reactive Form\">\n    <nui-time-picker-reactive-form></nui-time-picker-reactive-form>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "DTjw":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-model-change/time-picker-model-change.example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DTjw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-time-picker-model-change\",\n    templateUrl: \"./time-picker-model-change.example.component.html\",\n})\n\nexport class TimePickerModelChangeExampleComponent {\n    public time: Moment;\n    constructor(@Inject(ToastService) private toastService: ToastService) {\n        this.time = moment(\"01:20 AM\", \"HH:mm a\");\n    }\n    public valueChange(time: any): void {\n        this.time = time;\n        this.toastService.info({message: $localize `Selected time is: ` + this.time.toString()});\n    }\n}\n";
      /***/
    },

    /***/
    "FrSB":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FrSB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDateTimePickerModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiIconModule,\n    NuiTimeFrameBarModule,\n    NuiTimeFramePickerModule,\n    NuiTimePickerModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    TimePickerBasicExampleComponent,\n    TimePickerCustomFormatExampleComponent,\n    TimePickerCustomStepExampleComponent,\n    TimePickerDisabledExampleComponent,\n    TimePickerDocsExampleComponent,\n    TimePickerLocalizedExampleComponent,\n    TimePickerModelChangeExampleComponent,\n    TimePickerPreserveInsignificantExampleComponent,\n    TimePickerReactiveFormExampleComponent,\n    TimePickerVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TimePickerDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"localized\",\n        component: TimePickerLocalizedExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"time-picker-visual-test\",\n        component: TimePickerVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiTimePickerModule,\n        FormsModule,\n        NuiFormFieldModule,\n        ReactiveFormsModule,\n        NuiDocsModule,\n        NuiIconModule,\n        NuiTimeFrameBarModule,\n        NuiDateTimePickerModule,\n        NuiTimeFramePickerModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        TimePickerBasicExampleComponent,\n        TimePickerCustomFormatExampleComponent,\n        TimePickerCustomStepExampleComponent,\n        TimePickerDisabledExampleComponent,\n        TimePickerDocsExampleComponent,\n        TimePickerLocalizedExampleComponent,\n        TimePickerModelChangeExampleComponent,\n        TimePickerPreserveInsignificantExampleComponent,\n        TimePickerReactiveFormExampleComponent,\n        TimePickerVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class TimePickerModule {\n}\n";
      /***/
    },

    /***/
    "GxVZ":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-basic/time-picker-basic.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GxVZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-picker-basic\",\n    templateUrl: \"./time-picker-basic.example.component.html\",\n})\n\nexport class TimePickerBasicExampleComponent {}\n";
      /***/
    },

    /***/
    "HjR6":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-basic/time-picker-basic.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: TimePickerBasicExampleComponent */

    /***/
    function HjR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerBasicExampleComponent", function () {
        return TimePickerBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerBasicExampleComponent = function TimePickerBasicExampleComponent() {
        _classCallCheck(this, TimePickerBasicExampleComponent);
      };

      TimePickerBasicExampleComponent.ɵfac = function TimePickerBasicExampleComponent_Factory(t) {
        return new (t || TimePickerBasicExampleComponent)();
      };

      TimePickerBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimePickerBasicExampleComponent,
        selectors: [["nui-time-picker-basic"]],
        decls: 1,
        vars: 0,
        consts: [["id", "nui-demo-timepicker-basic"]],
        template: function TimePickerBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-time-picker", 0);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Ia5T":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-custom-format/time-picker-custom-format.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ia5T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-picker-custom-format\",\n    templateUrl: \"./time-picker-custom-format.example.component.html\",\n})\n\nexport class TimePickerCustomFormatExampleComponent {}\n";
      /***/
    },

    /***/
    "JMLm":
    /*!*******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-custom-step/time-picker-custom-step.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: TimePickerCustomStepExampleComponent */

    /***/
    function JMLm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerCustomStepExampleComponent", function () {
        return TimePickerCustomStepExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerCustomStepExampleComponent = function TimePickerCustomStepExampleComponent() {
        _classCallCheck(this, TimePickerCustomStepExampleComponent);
      };

      TimePickerCustomStepExampleComponent.ɵfac = function TimePickerCustomStepExampleComponent_Factory(t) {
        return new (t || TimePickerCustomStepExampleComponent)();
      };

      TimePickerCustomStepExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimePickerCustomStepExampleComponent,
        selectors: [["nui-time-picker-custom-step"]],
        decls: 1,
        vars: 1,
        consts: [[3, "timeStep"]],
        template: function TimePickerCustomStepExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-time-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeStep", 10);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "LsnU":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-custom-format/time-picker-custom-format.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: TimePickerCustomFormatExampleComponent */

    /***/
    function LsnU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerCustomFormatExampleComponent", function () {
        return TimePickerCustomFormatExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerCustomFormatExampleComponent = function TimePickerCustomFormatExampleComponent() {
        _classCallCheck(this, TimePickerCustomFormatExampleComponent);
      };

      TimePickerCustomFormatExampleComponent.ɵfac = function TimePickerCustomFormatExampleComponent_Factory(t) {
        return new (t || TimePickerCustomFormatExampleComponent)();
      };

      TimePickerCustomFormatExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimePickerCustomFormatExampleComponent,
        selectors: [["nui-time-picker-custom-format"]],
        decls: 1,
        vars: 0,
        consts: [["id", "nui-demo-timepicker-custom-format", "timeFormat", "h:mm:ss"]],
        template: function TimePickerCustomFormatExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-time-picker", 0);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "MHf0":
    /*!*********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-model-change/time-picker-model-change.example.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: TimePickerModelChangeExampleComponent */

    /***/
    function MHf0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerModelChangeExampleComponent", function () {
        return TimePickerModelChangeExampleComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerModelChangeExampleComponent = /*#__PURE__*/function () {
        function TimePickerModelChangeExampleComponent(toastService) {
          _classCallCheck(this, TimePickerModelChangeExampleComponent);

          this.toastService = toastService;
          this.time = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()("01:20 AM", "HH:mm a");
        }

        _createClass(TimePickerModelChangeExampleComponent, [{
          key: "valueChange",
          value: function valueChange(time) {
            this.time = time;
            this.toastService.info({
              message: $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Selected time is: "]))) + this.time.toString()
            });
          }
        }]);

        return TimePickerModelChangeExampleComponent;
      }();

      TimePickerModelChangeExampleComponent.ɵfac = function TimePickerModelChangeExampleComponent_Factory(t) {
        return new (t || TimePickerModelChangeExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      TimePickerModelChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimePickerModelChangeExampleComponent,
        selectors: [["nui-time-picker-model-change"]],
        decls: 1,
        vars: 1,
        consts: [[3, "model", "timeChanged"]],
        template: function TimePickerModelChangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-time-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeChanged", function TimePickerModelChangeExampleComponent_Template_nui_time_picker_timeChanged_0_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.time);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["TimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "McA8":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-reactive-form/time-picker-reactive-form.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: TimePickerReactiveFormExampleComponent */

    /***/
    function McA8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerReactiveFormExampleComponent", function () {
        return TimePickerReactiveFormExampleComponent;
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


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");

      var TimePickerReactiveFormExampleComponent = /*#__PURE__*/function () {
        function TimePickerReactiveFormExampleComponent(formBuilder, toastService) {
          _classCallCheck(this, TimePickerReactiveFormExampleComponent);

          this.formBuilder = formBuilder;
          this.toastService = toastService;
        }

        _createClass(TimePickerReactiveFormExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              timePickerFormControl: this.formBuilder.control(this.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }, {
          key: "valueChange",
          value: function valueChange(time) {
            this.time = time;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.myForm.valid ? this.toastService.success({
              message: "Your form is valid!"
            }) : this.toastService.error({
              message: "Your form is invalid!"
            });
          }
        }]);

        return TimePickerReactiveFormExampleComponent;
      }();

      TimePickerReactiveFormExampleComponent.ɵfac = function TimePickerReactiveFormExampleComponent_Factory(t) {
        return new (t || TimePickerReactiveFormExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      TimePickerReactiveFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimePickerReactiveFormExampleComponent,
        selectors: [["nui-time-picker-reactive-form"]],
        decls: 5,
        vars: 2,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3263153710941510208$$DEMO_SRC_COMPONENTS_DEMO_TIME_PICKER_TIME_PICKER_REACTIVE_FORM_TIME_PICKER_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" Submit ");
            i18n_0 = MSG_EXTERNAL_3263153710941510208$$DEMO_SRC_COMPONENTS_DEMO_TIME_PICKER_TIME_PICKER_REACTIVE_FORM_TIME_PICKER_REACTIVE_FORM_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F0d864c588719b2a5a3e20801cf147866a93f636b\u241F3263153710941510208: Submit "])));
          }

          return [[3, "formGroup", "submit"], [1, "form-group"], ["formControlName", "timePickerFormControl", 3, "isInErrorState", "timeChanged"], ["nui-button", "", "type", "submit", 1, "mt-1"], i18n_0];
        },
        template: function TimePickerReactiveFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function TimePickerReactiveFormExampleComponent_Template_form_submit_0_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-time-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeChanged", function TimePickerReactiveFormExampleComponent_Template_nui_time_picker_timeChanged_2_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isInErrorState", ctx.myForm.controls["timePickerFormControl"].invalid && ctx.myForm.controls["timePickerFormControl"].touched);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["TimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "NZIx":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**************************************************************************************************************/

    /*! no static exports found */

    /***/
    function NZIx(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "VIhZ",
        "./time-picker-basic/time-picker-basic.example.component.html": "oheX",
        "./time-picker-basic/time-picker-basic.example.component.ts": "GxVZ",
        "./time-picker-custom-format/time-picker-custom-format.example.component.html": "NlW6",
        "./time-picker-custom-format/time-picker-custom-format.example.component.ts": "Ia5T",
        "./time-picker-custom-step/time-picker-custom-step.example.component.html": "QP6x",
        "./time-picker-custom-step/time-picker-custom-step.example.component.ts": "kQmh",
        "./time-picker-disabled/time-picker-disabled.example.component.html": "5OEi",
        "./time-picker-disabled/time-picker-disabled.example.component.ts": "TUyf",
        "./time-picker-docs/time-picker-docs.example.component.html": "A0IM",
        "./time-picker-docs/time-picker-docs.example.component.ts": "b56M",
        "./time-picker-localized/time-picker-localized.example.component.html": "Tr0m",
        "./time-picker-localized/time-picker-localized.example.component.ts": "nLQy",
        "./time-picker-model-change/time-picker-model-change.example.component.html": "xMbr",
        "./time-picker-model-change/time-picker-model-change.example.component.ts": "DTjw",
        "./time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component.html": "g6Yt",
        "./time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component.ts": "wWvt",
        "./time-picker-reactive-form/time-picker-reactive-form.example.component.html": "wVuW",
        "./time-picker-reactive-form/time-picker-reactive-form.example.component.ts": "tJ2+",
        "./time-picker-visual-test/time-picker-visual-test.component.html": "iMkN",
        "./time-picker-visual-test/time-picker-visual-test.component.ts": "k0eM",
        "./time-picker.module.ts": "FrSB"
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
      webpackContext.id = "NZIx";
      /***/
    },

    /***/
    "NlW6":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-custom-format/time-picker-custom-format.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NlW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-picker id=\"nui-demo-timepicker-custom-format\" timeFormat=\"h:mm:ss\"></nui-time-picker>\n";
      /***/
    },

    /***/
    "QP6x":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-custom-step/time-picker-custom-step.example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QP6x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-picker [timeStep]=\"10\"></nui-time-picker>\n";
      /***/
    },

    /***/
    "RreX":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-docs/time-picker-docs.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: TimePickerDocsExampleComponent */

    /***/
    function RreX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerDocsExampleComponent", function () {
        return TimePickerDocsExampleComponent;
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


      var _time_picker_basic_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../time-picker-basic/time-picker-basic.example.component */
      "HjR6");
      /* harmony import */


      var _time_picker_model_change_time_picker_model_change_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../time-picker-model-change/time-picker-model-change.example.component */
      "MHf0");
      /* harmony import */


      var _time_picker_preserve_isignificant_time_picker_preserve_insignificant_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component */
      "7wq3");
      /* harmony import */


      var _time_picker_disabled_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../time-picker-disabled/time-picker-disabled.example.component */
      "dj98");
      /* harmony import */


      var _time_picker_custom_format_time_picker_custom_format_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../time-picker-custom-format/time-picker-custom-format.example.component */
      "LsnU");
      /* harmony import */


      var _time_picker_custom_step_time_picker_custom_step_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../time-picker-custom-step/time-picker-custom-step.example.component */
      "JMLm");
      /* harmony import */


      var _time_picker_reactive_form_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../time-picker-reactive-form/time-picker-reactive-form.example.component */
      "McA8");

      var TimePickerDocsExampleComponent = function TimePickerDocsExampleComponent() {
        _classCallCheck(this, TimePickerDocsExampleComponent);
      };

      TimePickerDocsExampleComponent.ɵfac = function TimePickerDocsExampleComponent_Factory(t) {
        return new (t || TimePickerDocsExampleComponent)();
      };

      TimePickerDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimePickerDocsExampleComponent,
        selectors: [["nui-time-picker-docs"]],
        decls: 87,
        vars: 0,
        consts: [["filenamePrefix", "time-picker-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "time-picker-model-change", "exampleTitle", "Changing Model"], ["filenamePrefix", "time-picker-preserve-insignificant", "exampleTitle", "Emitting Day and Year"], ["filenamePrefix", "time-picker-disabled", "exampleTitle", "Setting Disabled"], ["filenamePrefix", "time-picker-custom-format", "exampleTitle", "Custom Time Format"], ["filenamePrefix", "time-picker-custom-step", "exampleTitle", "Custom Time Step"], ["filenamePrefix", "time-picker-reactive-form", "exampleTitle", "Reactive Form"]],
        template: function TimePickerDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiTimePickerModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To use the time picker add an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-time-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " element to your template.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-example-wrapper", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-time-picker-basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Binding to Model Changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "[model]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " input represents the model of the time picker. To get the selected time, bind to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(timeChanged)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " output which emits a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "moment() object");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nui-time-picker-model-change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Emitting the Day and Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " To have ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "(timeChanged)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " emit the current day and year in addition to the time, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "[preserveInsignificant]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " input to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-time-picker-preserve-insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Setting Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " To disable the time-picker, set the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "[isDisabled]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " input to true.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "nui-time-picker-disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Setting a Custom Time Format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " A custom time format can be applied via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "timeFormat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " input. The default format is \"LT\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "nui-time-picker-custom-format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Setting a Custom Time Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " A custom time step (the interval in minutes between selectable times) can be applied via the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "timeStep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " input. The default time step is \"30\".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "nui-time-picker-custom-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Using with Reactive Forms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " To use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "<nui-time-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " in a reactive form, create a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "FormGroup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " that represents the form model. Then, bind ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "<nui-time-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " to a form element using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "formControlName");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " attribute.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "nui-time-picker-reactive-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _time_picker_basic_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["TimePickerBasicExampleComponent"], _time_picker_model_change_time_picker_model_change_example_component__WEBPACK_IMPORTED_MODULE_3__["TimePickerModelChangeExampleComponent"], _time_picker_preserve_isignificant_time_picker_preserve_insignificant_example_component__WEBPACK_IMPORTED_MODULE_4__["TimePickerPreserveInsignificantExampleComponent"], _time_picker_disabled_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerDisabledExampleComponent"], _time_picker_custom_format_time_picker_custom_format_example_component__WEBPACK_IMPORTED_MODULE_6__["TimePickerCustomFormatExampleComponent"], _time_picker_custom_step_time_picker_custom_step_example_component__WEBPACK_IMPORTED_MODULE_7__["TimePickerCustomStepExampleComponent"], _time_picker_reactive_form_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_8__["TimePickerReactiveFormExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TUyf":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-disabled/time-picker-disabled.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TUyf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-picker-disabled\",\n    templateUrl: \"./time-picker-disabled.example.component.html\",\n})\n\nexport class TimePickerDisabledExampleComponent {}\n";
      /***/
    },

    /***/
    "Tr0m":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-localized/time-picker-localized.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tr0m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Time Picker</h2>\n<nui-time-picker></nui-time-picker>\n\n<h2>Date Time Picker</h2>\n<nui-date-time-picker></nui-date-time-picker>\n\n<h2>Time Frame Bar</h2>\n<nui-time-frame-bar [minDate]=\"minDate\"\n                    [maxDate]=\"maxDate\"\n                    [(timeFrame)]=\"timeFrame\">\n\n    <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n    {{timeFrame | timeFrame}}\n\n    <nui-quick-picker timeFrameSelection>\n        <nui-time-frame-picker></nui-time-frame-picker>\n    </nui-quick-picker>\n\n</nui-time-frame-bar>\n";
      /***/
    },

    /***/
    "VIhZ":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/index.ts ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VIhZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./time-picker-docs/time-picker-docs.example.component\";\nexport * from \"./time-picker-basic/time-picker-basic.example.component\";\nexport * from \"./time-picker-disabled/time-picker-disabled.example.component\";\nexport * from \"./time-picker-custom-format/time-picker-custom-format.example.component\";\nexport * from \"./time-picker-custom-step/time-picker-custom-step.example.component\";\nexport * from \"./time-picker-localized/time-picker-localized.example.component\";\nexport * from \"./time-picker-reactive-form/time-picker-reactive-form.example.component\";\nexport * from \"./time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component\";\nexport * from \"./time-picker-model-change/time-picker-model-change.example.component\";\nexport * from \"./time-picker-visual-test/time-picker-visual-test.component\";\n";
      /***/
    },

    /***/
    "Xikk":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-localized/time-picker-localized.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: TimePickerLocalizedExampleComponent */

    /***/
    function Xikk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerLocalizedExampleComponent", function () {
        return TimePickerLocalizedExampleComponent;
      });
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");
      /* harmony import */


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");
      /* harmony import */


      var _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/convenience/time-frame-bar/time-frame-bar.component */
      "SKIm");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      var TimePickerLocalizedExampleComponent = /*#__PURE__*/function () {
        function TimePickerLocalizedExampleComponent() {
          _classCallCheck(this, TimePickerLocalizedExampleComponent);
        }

        _createClass(TimePickerLocalizedExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.oldLocale = moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale();
            moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale(window.navigator.language);
            this.baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()([2018, 5, 1, 15, 0, 0]);
            this.minDate = this.baseDate.clone().subtract(1, "months");
            this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
            this.timeFrame = {
              startDatetime: this.baseDate.clone().subtract(1, "weeks"),
              endDatetime: this.baseDate.clone(),
              // @ts-ignore
              selectedPresetId: null
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale(this.oldLocale);
          }
        }]);

        return TimePickerLocalizedExampleComponent;
      }();

      TimePickerLocalizedExampleComponent.ɵfac = function TimePickerLocalizedExampleComponent_Factory(t) {
        return new (t || TimePickerLocalizedExampleComponent)();
      };

      TimePickerLocalizedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TimePickerLocalizedExampleComponent,
        selectors: [["nui-time-picker-localized"]],
        decls: 14,
        vars: 6,
        consts: [[3, "minDate", "maxDate", "timeFrame", "timeFrameChange"], ["icon", "calendar", 1, "pr-3"], ["timeFrameSelection", ""]],
        template: function TimePickerLocalizedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Time Picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nui-time-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Date Time Picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-date-time-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Time Frame Bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-time-frame-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeFrameChange", function TimePickerLocalizedExampleComponent_Template_nui_time_frame_bar_timeFrameChange_8_listener($event) {
              return ctx.timeFrame = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nui-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nui-quick-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "nui-time-frame-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx.minDate)("maxDate", ctx.maxDate)("timeFrame", ctx.timeFrame);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, ctx.timeFrame), " ");
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["TimePickerComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerComponent"], _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameBarComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_6__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_7__["TimeFramePickerComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "b56M":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-docs/time-picker-docs.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b56M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-picker-docs\",\n    templateUrl: \"./time-picker-docs.example.component.html\",\n})\n\nexport class TimePickerDocsExampleComponent {}\n";
      /***/
    },

    /***/
    "dj98":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-disabled/time-picker-disabled.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: TimePickerDisabledExampleComponent */

    /***/
    function dj98(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerDisabledExampleComponent", function () {
        return TimePickerDisabledExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerDisabledExampleComponent = function TimePickerDisabledExampleComponent() {
        _classCallCheck(this, TimePickerDisabledExampleComponent);
      };

      TimePickerDisabledExampleComponent.ɵfac = function TimePickerDisabledExampleComponent_Factory(t) {
        return new (t || TimePickerDisabledExampleComponent)();
      };

      TimePickerDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimePickerDisabledExampleComponent,
        selectors: [["nui-time-picker-disabled"]],
        decls: 1,
        vars: 1,
        consts: [["id", "nui-demo-timepicker-disabled", 3, "isDisabled"]],
        template: function TimePickerDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-time-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDisabled", true);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "g6Yt":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component.html ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function g6Yt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-picker\n    [model]=\"time\"\n    [preserveInsignificant]=\"true\"\n    (timeChanged)=\"valueChange($event)\"></nui-time-picker>\n";
      /***/
    },

    /***/
    "iMkN":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-visual-test/time-picker-visual-test.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iMkN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Basic TimePicker</h3>\n            <nui-time-picker [model]=\"myTime\" id=\"nui-visual-test-timepicker-basic\"></nui-time-picker>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>Disabled TimePicker</h3>\n            <nui-time-picker [model]=\"myTime\" id=\"nui-visual-test-timepicker-disabled\" [isDisabled]=\"true\"></nui-time-picker>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col\">\n            <h3>TimePicker with Custom Format</h3>\n            <nui-time-picker [model]=\"myTime\" id=\"nui-visual-test-custom-format-timepicker\" timeFormat=\"h:mm:ss\"></nui-time-picker>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h3>TimePicker with Custom Step</h3>\n            <nui-time-picker [model]=\"myTime\" id=\"nui-visual-test-custom-step-timepicker\" [timeStep]=\"10\"></nui-time-picker>\n            <hr />\n        </div>\n        <div class=\"w-100\"></div>\n        <div class=\"col-6\">\n            <h3>Using TimePicker with Validation</h3>\n            <form [formGroup]=\"myForm\">\n                <div class=\"form-group\">\n                    <nui-time-picker\n                        [model]=\"myTime\"\n                        id=\"nui-visual-test-required-timepicker\"\n                        formControlName=\"timePickerFormControl\"\n                        [isInErrorState]=\"myForm.controls['timePickerFormControl'].invalid\"\n                        (timeChanged)=\"valueChange($event)\">\n                    </nui-time-picker>\n                </div>\n            </form>\n            <hr />\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "jiuX":
    /*!*******************************************************!*\
      !*** ./demo/src/components/demo/time-picker/index.ts ***!
      \*******************************************************/

    /*! exports provided: TimePickerDocsExampleComponent, TimePickerBasicExampleComponent, TimePickerDisabledExampleComponent, TimePickerCustomFormatExampleComponent, TimePickerCustomStepExampleComponent, TimePickerLocalizedExampleComponent, TimePickerReactiveFormExampleComponent, TimePickerPreserveInsignificantExampleComponent, TimePickerModelChangeExampleComponent, TimePickerVisualTestComponent */

    /***/
    function jiuX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _time_picker_docs_time_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./time-picker-docs/time-picker-docs.example.component */
      "RreX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerDocsExampleComponent", function () {
        return _time_picker_docs_time_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["TimePickerDocsExampleComponent"];
      });
      /* harmony import */


      var _time_picker_basic_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./time-picker-basic/time-picker-basic.example.component */
      "HjR6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerBasicExampleComponent", function () {
        return _time_picker_basic_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["TimePickerBasicExampleComponent"];
      });
      /* harmony import */


      var _time_picker_disabled_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-picker-disabled/time-picker-disabled.example.component */
      "dj98");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerDisabledExampleComponent", function () {
        return _time_picker_disabled_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_2__["TimePickerDisabledExampleComponent"];
      });
      /* harmony import */


      var _time_picker_custom_format_time_picker_custom_format_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./time-picker-custom-format/time-picker-custom-format.example.component */
      "LsnU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerCustomFormatExampleComponent", function () {
        return _time_picker_custom_format_time_picker_custom_format_example_component__WEBPACK_IMPORTED_MODULE_3__["TimePickerCustomFormatExampleComponent"];
      });
      /* harmony import */


      var _time_picker_custom_step_time_picker_custom_step_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./time-picker-custom-step/time-picker-custom-step.example.component */
      "JMLm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerCustomStepExampleComponent", function () {
        return _time_picker_custom_step_time_picker_custom_step_example_component__WEBPACK_IMPORTED_MODULE_4__["TimePickerCustomStepExampleComponent"];
      });
      /* harmony import */


      var _time_picker_localized_time_picker_localized_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./time-picker-localized/time-picker-localized.example.component */
      "Xikk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerLocalizedExampleComponent", function () {
        return _time_picker_localized_time_picker_localized_example_component__WEBPACK_IMPORTED_MODULE_5__["TimePickerLocalizedExampleComponent"];
      });
      /* harmony import */


      var _time_picker_reactive_form_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./time-picker-reactive-form/time-picker-reactive-form.example.component */
      "McA8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerReactiveFormExampleComponent", function () {
        return _time_picker_reactive_form_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_6__["TimePickerReactiveFormExampleComponent"];
      });
      /* harmony import */


      var _time_picker_preserve_isignificant_time_picker_preserve_insignificant_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component */
      "7wq3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerPreserveInsignificantExampleComponent", function () {
        return _time_picker_preserve_isignificant_time_picker_preserve_insignificant_example_component__WEBPACK_IMPORTED_MODULE_7__["TimePickerPreserveInsignificantExampleComponent"];
      });
      /* harmony import */


      var _time_picker_model_change_time_picker_model_change_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./time-picker-model-change/time-picker-model-change.example.component */
      "MHf0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerModelChangeExampleComponent", function () {
        return _time_picker_model_change_time_picker_model_change_example_component__WEBPACK_IMPORTED_MODULE_8__["TimePickerModelChangeExampleComponent"];
      });
      /* harmony import */


      var _time_picker_visual_test_time_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./time-picker-visual-test/time-picker-visual-test.component */
      "zOQQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimePickerVisualTestComponent", function () {
        return _time_picker_visual_test_time_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_9__["TimePickerVisualTestComponent"];
      });
      /***/

    },

    /***/
    "k0eM":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-visual-test/time-picker-visual-test.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k0eM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"time-picker-visual-test\",\n    templateUrl: \"./time-picker-visual-test.component.html\",\n})\n\nexport class TimePickerVisualTestComponent implements OnInit {\n    public time: Moment;\n    public myTime: Moment;\n    public myForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder) {\n        this.myTime = moment(\"2018-12-14T12:00:00+02:00\");\n    }\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            timePickerFormControl: this.formBuilder.control( this.time, [Validators.required]),\n        });\n    }\n\n    public valueChange(time: any): void {\n        this.time = time;\n    }\n}\n";
      /***/
    },

    /***/
    "kQmh":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-custom-step/time-picker-custom-step.example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kQmh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-picker-custom-step\",\n    templateUrl: \"./time-picker-custom-step.example.component.html\",\n})\n\nexport class TimePickerCustomStepExampleComponent {}\n";
      /***/
    },

    /***/
    "nLQy":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-localized/time-picker-localized.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nLQy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy, OnInit } from \"@angular/core\";\nimport { ITimeframe } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-time-picker-localized\",\n    templateUrl: \"./time-picker-localized.example.component.html\",\n})\nexport class TimePickerLocalizedExampleComponent implements OnInit, OnDestroy {\n\n    public minDate: Moment;\n    public maxDate: Moment;\n    public timeFrame: ITimeframe;\n\n    private baseDate: Moment;\n    private oldLocale: string;\n\n    ngOnInit() {\n        this.oldLocale = moment.locale();\n        moment.locale(window.navigator.language);\n\n        this.baseDate = moment([2018, 5, 1, 15, 0, 0]);\n        this.minDate = this.baseDate.clone().subtract(1, \"months\");\n        this.maxDate = moment();\n\n        this.timeFrame = {\n            startDatetime: this.baseDate.clone().subtract(1, \"weeks\"),\n            endDatetime: this.baseDate.clone(),\n            // @ts-ignore\n            selectedPresetId: null,\n        };\n    }\n\n    ngOnDestroy() {\n        moment.locale(this.oldLocale);\n    }\n}\n";
      /***/
    },

    /***/
    "oheX":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-basic/time-picker-basic.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oheX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-picker id=\"nui-demo-timepicker-basic\"></nui-time-picker>\n";
      /***/
    },

    /***/
    "sHjY":
    /*!********************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker.module.ts ***!
      \********************************************************************/

    /*! exports provided: TimePickerModule */

    /***/
    function sHjY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerModule", function () {
        return TimePickerModule;
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
      "jiuX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "localized",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerLocalizedExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "time-picker-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var TimePickerModule = function TimePickerModule() {
        _classCallCheck(this, TimePickerModule);
      };

      TimePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: TimePickerModule
      });
      TimePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function TimePickerModule_Factory(t) {
          return new (t || TimePickerModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("NZIx");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimePickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimeFrameBarModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDateTimePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimeFramePickerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TimePickerModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["TimePickerBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerCustomFormatExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerCustomStepExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerLocalizedExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerModelChangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerPreserveInsignificantExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerReactiveFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimePickerVisualTestComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimePickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimeFrameBarModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDateTimePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimeFramePickerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "tJ2+":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-reactive-form/time-picker-reactive-form.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tJ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport { ToastService } from \"@nova-ui/bits\";\nimport { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-time-picker-reactive-form\",\n    templateUrl: \"./time-picker-reactive-form.example.component.html\",\n})\n\nexport class TimePickerReactiveFormExampleComponent implements OnInit {\n    public time: Moment;\n    public myForm: FormGroup;\n\n    constructor(private formBuilder: FormBuilder,\n        @Inject(ToastService) private toastService: ToastService) { }\n\n    public ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            timePickerFormControl: this.formBuilder.control( this.time, [Validators.required]),\n        });\n    }\n\n    public valueChange(time: any): void {\n        this.time = time;\n    }\n\n    public onSubmit() {\n        this.myForm.valid ? this.toastService.success({message: `Your form is valid!`}) :\n            this.toastService.error({message: `Your form is invalid!`});\n    }\n\n}\n";
      /***/
    },

    /***/
    "wVuW":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-reactive-form/time-picker-reactive-form.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wVuW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"myForm\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <nui-time-picker\n            formControlName=\"timePickerFormControl\"\n            [isInErrorState]=\"myForm.controls['timePickerFormControl'].invalid && myForm.controls['timePickerFormControl'].touched\"\n            (timeChanged)=\"valueChange($event)\"></nui-time-picker>\n        <button nui-button\n                type=\"submit\"\n                class=\"mt-1\"\n                i18n>\n            Submit\n        </button>\n    </div>\n</form>\n";
      /***/
    },

    /***/
    "wWvt":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-preserve-isignificant/time-picker-preserve-insignificant.example.component.ts ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wWvt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { ToastService } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-time-picker-preserve-insignificant\",\n    templateUrl: \"./time-picker-preserve-insignificant.example.component.html\",\n})\n\nexport class TimePickerPreserveInsignificantExampleComponent {\n    public time: Moment;\n\n    constructor(@Inject(ToastService) private toastService: ToastService) {\n        this.time = moment();\n    }\n\n    public valueChange(time: any): void {\n        this.time = time;\n        this.toastService.info({message: $localize `Selected time is: ` + this.time.toString()});\n    }\n}\n";
      /***/
    },

    /***/
    "xMbr":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-picker/time-picker-model-change/time-picker-model-change.example.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xMbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-picker [model]=\"time\" (timeChanged)=\"valueChange($event)\"></nui-time-picker>\n";
      /***/
    },

    /***/
    "zOQQ":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-picker/time-picker-visual-test/time-picker-visual-test.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: TimePickerVisualTestComponent */

    /***/
    function zOQQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimePickerVisualTestComponent", function () {
        return TimePickerVisualTestComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-picker/time-picker.component */
      "eBkL");

      var TimePickerVisualTestComponent = /*#__PURE__*/function () {
        function TimePickerVisualTestComponent(formBuilder) {
          _classCallCheck(this, TimePickerVisualTestComponent);

          this.formBuilder = formBuilder;
          this.myTime = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()("2018-12-14T12:00:00+02:00");
        }

        _createClass(TimePickerVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              timePickerFormControl: this.formBuilder.control(this.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }, {
          key: "valueChange",
          value: function valueChange(time) {
            this.time = time;
          }
        }]);

        return TimePickerVisualTestComponent;
      }();

      TimePickerVisualTestComponent.ɵfac = function TimePickerVisualTestComponent_Factory(t) {
        return new (t || TimePickerVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      TimePickerVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimePickerVisualTestComponent,
        selectors: [["time-picker-visual-test"]],
        decls: 31,
        vars: 9,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-visual-test-timepicker-basic", 3, "model"], ["id", "nui-visual-test-timepicker-disabled", 3, "model", "isDisabled"], [1, "w-100"], ["id", "nui-visual-test-custom-format-timepicker", "timeFormat", "h:mm:ss", 3, "model"], ["id", "nui-visual-test-custom-step-timepicker", 3, "model", "timeStep"], [1, "col-6"], [3, "formGroup"], [1, "form-group"], ["id", "nui-visual-test-required-timepicker", "formControlName", "timePickerFormControl", 3, "model", "isInErrorState", "timeChanged"]],
        template: function TimePickerVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Basic TimePicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nui-time-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Disabled TimePicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "nui-time-picker", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "TimePicker with Custom Format");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "nui-time-picker", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "TimePicker with Custom Step");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "nui-time-picker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Using TimePicker with Validation");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nui-time-picker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeChanged", function TimePickerVisualTestComponent_Template_nui_time_picker_timeChanged_29_listener($event) {
              return ctx.valueChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.myTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.myTime)("isDisabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.myTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.myTime)("timeStep", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", ctx.myTime)("isInErrorState", ctx.myForm.controls["timePickerFormControl"].invalid);
          }
        },
        directives: [_src_lib_time_picker_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["TimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-time-picker-time-picker-module-es5.js.map