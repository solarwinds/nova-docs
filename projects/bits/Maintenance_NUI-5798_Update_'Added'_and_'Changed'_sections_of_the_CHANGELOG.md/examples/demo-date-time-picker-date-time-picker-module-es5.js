(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-date-time-picker-date-time-picker-module"], {
    /***/
    "+eGj":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-basic/date-time-picker-basic.example.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eGj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-basic-example\",\n    templateUrl: \"./date-time-picker-basic.example.component.html\",\n})\n\nexport class DateTimePickerBasicExampleComponent {\n    public dt: Moment;\n    public selectedDate: Date;\n    constructor() {\n        this.dt = moment();\n        this.selectedDate = new Date(this.dt.valueOf());\n    }\n\n    onModelChanged(event: any) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "/eBl":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-docs/date-time-picker-docs.example.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eBl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiDateTimePickerModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    <code>&lt;nui-date-time-picker&gt;</code> allows user to select a specific time moment setting correspondent date and time.\n    For time selecting <code><a href=\"../components/TimePickerComponent.html\">nui-time-picker</a></code> is used, for date selecting <code><a href=\"../components/DatePickerComponent.html\">nui-date-picker</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-basic\" exampleTitle=\"Basic Usage\">\n    <nui-date-time-picker-basic-example></nui-date-time-picker-basic-example>\n</nui-example-wrapper>\n\n<h2>Empty Initial State</h2>\n<p>\n    <code>&lt;nui-date-time-picker&gt;</code> allows user to init a component with the empty values using the attribute \"initEmpty\".\n    For time selecting <code><a href=\"../components/TimePickerComponent.html\">nui-time-picker</a></code> is used, for date selecting <code><a href=\"../components/DatePickerComponent.html\">nui-date-picker</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-empty-state\" exampleTitle=\"Empty Initial State\">\n    <nui-date-time-picker-empty-state></nui-date-time-picker-empty-state>\n</nui-example-wrapper>\n\n<h2>Reactive Form Usage</h2>\n<p>\n    <code>&lt;nui-date-time-picker&gt;</code> may be used in a reactive form by setting the <code>formControl</code> input.\n</p>\n<nui-example-wrapper\n    filenamePrefix=\"date-time-picker-reactive-form\"\n    exampleTitle=\"Reactive Form Usage\">\n    <nui-date-time-picker-reactive-forms-example></nui-date-time-picker-reactive-forms-example>\n</nui-example-wrapper>\n\n<h2>Min/Max value</h2>\n<p>\n    To set min or max date for date field of  <code>dateTimePicker</code> use minDate or maxDate input (as shown in DatePicker docs).\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-range-values\" exampleTitle=\"Date Range Values\">\n    <nui-date-time-picker-range-values-example></nui-date-time-picker-range-values-example>\n</nui-example-wrapper>\n\n<h2>Disabled Mode</h2>\n<p>\n    To disable dateTimePicker set isDisabled input to true\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-disabled\" exampleTitle=\"Disabled Mode\">\n    <nui-date-time-picker-disabled-example></nui-date-time-picker-disabled-example>\n</nui-example-wrapper>\n\n<h2>Inline Mode</h2>\n<p>\n    Set displayMode mode binding to 'inline' in order to set row direction for <code>dateTimePicker's</code> input fields.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-inline\" exampleTitle=\"Inline Mode\">\n    <nui-date-time-picker-inline-example></nui-date-time-picker-inline-example>\n</nui-example-wrapper>\n\n<h2>Timezones</h2>\n<p>\n    As far as <code>DateTimePickerComponent</code> uses <code>DatePickerComponent</code> it can also be used with handling timezones.\n    Setting <code>handleTimezone</code> flag to <code>true</code> makes handling timezone.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-timezones\" exampleTitle=\"Timezones\">\n    <nui-date-time-picker-timezones-example></nui-date-time-picker-timezones-example>\n</nui-example-wrapper>\n\n<h2>Appending Popup Controls to the Document Body</h2>\n<p>\n    DateTimePicker popups (for both  <code>DatePicker</code> and <code>TimePicker</code>) can be appended to the document <code>body</code>\n    by setting the <code>appendToBody</code> input to <code>true</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-time-picker-dialog\" exampleTitle=\"Appending Popups to Document Body\">\n    <nui-date-time-picker-dialog-example></nui-date-time-picker-dialog-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "0zR/":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-test/date-time-picker-test.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-test\",\n    templateUrl: \"./date-time-picker-test.component.html\",\n})\n\nexport class DateTimePickerTestComponent {\n    public dt: Moment;\n    public selectedDate: string;\n\n    constructor() {\n        this.dt = moment().set({\n            year: 1970,\n            month: 2,\n            date: 15,\n            hour: 15,\n            minute: 30,\n        });\n        this.selectedDate = moment(this.dt).format(\"YYYY-MM-DD HH:mm\");\n    }\n\n    onModelChanged(event: any) {\n        this.selectedDate = moment(event).format(\"YYYY-MM-DD HH:mm\");\n    }\n}\n";
      /***/
    },

    /***/
    "262F":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-visual-test/date-time-picker-visual-test.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: DateTimePickerVisualTestComponent */

    /***/
    function F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerVisualTestComponent", function () {
        return DateTimePickerVisualTestComponent;
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


      var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");

      function DateTimePickerVisualTestComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DateTimePickerVisualTestComponent_ng_template_25_Template_nui_dialog_header_closed_0_listener() {
            var close_r2 = ctx.close;
            return close_r2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-date-time-picker", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateTimePickerVisualTestComponent_ng_template_25_Template_button_click_5_listener() {
            var close_r2 = ctx.close;
            return close_r2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1.dt)("appendToBody", true);
        }
      }

      var DateTimePickerVisualTestComponent = /*#__PURE__*/function () {
        function DateTimePickerVisualTestComponent(dialogService) {
          _classCallCheck(this, DateTimePickerVisualTestComponent);

          this.dialogService = dialogService;
          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()("2018-02-02");
          this.minDate = this.dt.clone().date(1);
          this.maxDate = this.dt.clone().date(20);
        }

        _createClass(DateTimePickerVisualTestComponent, [{
          key: "open",
          value: function open(content) {
            this.dialogService.open(content, {
              size: "sm"
            });
          }
        }]);

        return DateTimePickerVisualTestComponent;
      }();

      DateTimePickerVisualTestComponent.ɵfac = function DateTimePickerVisualTestComponent_Factory(t) {
        return new (t || DateTimePickerVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]));
      };

      DateTimePickerVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateTimePickerVisualTestComponent,
        selectors: [["nui-date-time-picker-visual-test"]],
        decls: 29,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6797255531066199749$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_VISUAL_TEST_DATE_TIME_PICKER_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Open dialog");
            i18n_0 = MSG_EXTERNAL_6797255531066199749$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_VISUAL_TEST_DATE_TIME_PICKER_VISUAL_TEST_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral([":\u241F3f83d7b9853be0556ddf713900eff116b87b8b33\u241F6797255531066199749:Open dialog"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_VISUAL_TEST_DATE_TIME_PICKER_VISUAL_TEST_COMPONENT_TS__3 = goog.getMsg("Dialog title");
            i18n_2 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_VISUAL_TEST_DATE_TIME_PICKER_VISUAL_TEST_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241Feeb379308b8767b98aa0d27308f4f8dd6b46e559\u241F5892089246202495025:Dialog title"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3204205427074542687$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_VISUAL_TEST_DATE_TIME_PICKER_VISUAL_TEST_COMPONENT_TS__5 = goog.getMsg(" Close ");
            i18n_4 = MSG_EXTERNAL_3204205427074542687$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_VISUAL_TEST_DATE_TIME_PICKER_VISUAL_TEST_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([":\u241F87881c05f814686ebaf1c0c887bd9acd40dbad44\u241F3204205427074542687: Close "])));
          }

          return [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-basic-date-time-picker", 3, "model"], ["id", "nui-date-time-picker-ranged", 3, "model", "minDate", "maxDate"], ["id", "nui-date-time-picker-disabled", 3, "model", "isDisabled"], ["displayMode", "inline", "id", "nui-date-time-picker-inline", 3, "model"], ["content", ""], ["id", "nui-visual-test-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["title", i18n_2, 3, "closed"], [1, "dialog-body", "responsive-mode"], [1, "demo-options-section"], ["displayMode", "inline", "id", "nui-date-time-picker-dialog", 3, "model", "appendToBody"], ["nui-button", "", "type", "button", 3, "click"], i18n_4];
        },
        template: function DateTimePickerVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-date-time-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nui-date-time-picker", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nui-date-time-picker", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nui-date-time-picker", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DateTimePickerVisualTestComponent_ng_template_25_Template, 7, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateTimePickerVisualTestComponent_Template_button_click_27_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

              return ctx.open(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](28, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.dt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.dt)("minDate", ctx.minDate)("maxDate", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.dt)("isDisabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.dt);
          }
        },
        directives: [_src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_5__["DialogHeaderComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__["DialogFooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "2SS3":
    /*!**********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-basic/date-time-picker-basic.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: DateTimePickerBasicExampleComponent */

    /***/
    function SS3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerBasicExampleComponent", function () {
        return DateTimePickerBasicExampleComponent;
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


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");

      var DateTimePickerBasicExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerBasicExampleComponent() {
          _classCallCheck(this, DateTimePickerBasicExampleComponent);

          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
          this.selectedDate = new Date(this.dt.valueOf());
        }

        _createClass(DateTimePickerBasicExampleComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerBasicExampleComponent;
      }();

      DateTimePickerBasicExampleComponent.ɵfac = function DateTimePickerBasicExampleComponent_Factory(t) {
        return new (t || DateTimePickerBasicExampleComponent)();
      };

      DateTimePickerBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DateTimePickerBasicExampleComponent,
        selectors: [["nui-date-time-picker-basic-example"]],
        decls: 4,
        vars: 2,
        consts: [[1, "demo-options-section"], [3, "model", "modelChanged"], [1, "mt-2"]],
        template: function DateTimePickerBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-date-time-picker", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChanged", function DateTimePickerBasicExampleComponent_Template_nui_date_time_picker_modelChanged_1_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.dt);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate);
          }
        },
        directives: [_src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "4TpA":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-inline/date-time-picker-inline.example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TpA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-inline-example\",\n    templateUrl: \"./date-time-picker-inline.example.component.html\",\n})\n\nexport class DateTimePickerInlineExampleComponent {\n    public dt: Moment;\n    public selectedDate: Date;\n    constructor() {\n        this.dt = moment();\n        this.selectedDate = new Date(this.dt.valueOf());\n    }\n\n    onModelChanged(event: any) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "6ThW":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-visual-test/date-time-picker-visual-test.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ThW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2>Basic</h2>\n            <nui-date-time-picker [model]=\"dt\" id=\"nui-basic-date-time-picker\"></nui-date-time-picker>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h2>Range</h2>\n            <nui-date-time-picker [model]=\"dt\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" id=\"nui-date-time-picker-ranged\"></nui-date-time-picker>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2>Disabled</h2>\n            <nui-date-time-picker [model]=\"dt\" [isDisabled]=\"true\" id=\"nui-date-time-picker-disabled\"></nui-date-time-picker>\n            <hr />\n        </div>\n        <div class=\"col\">\n            <h2>Inline</h2>\n            <nui-date-time-picker displayMode=\"inline\" [model]=\"dt\" id=\"nui-date-time-picker-inline\"></nui-date-time-picker>\n            <hr />\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n                <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n                <div class=\"dialog-body responsive-mode\">\n                    <section class=\"demo-options-section\">\n                        <nui-date-time-picker displayMode=\"inline\" [model]=\"dt\" [appendToBody]=\"true\" id=\"nui-date-time-picker-dialog\"></nui-date-time-picker>\n                    </section>\n                </div>\n                <nui-dialog-footer>\n                    <button nui-button type=\"button\"\n                            (click)=\"close()\" i18n>\n                        Close\n                    </button>\n                </nui-dialog-footer>\n            </ng-template>\n\n            <button id=\"nui-visual-test-dialog-btn\" nui-button type=\"button\" (click)=\"open(content)\" i18n>Open dialog</button>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "6xvE":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-reactive-form/date-time-picker-reactive-form.example.component.html ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xvE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-form-field caption=\"Date Time Picker\" [control]=\"control\">\n        <nui-date-time-picker [formControl]=\"control\" (modelChanged)=\"onModelChanged($event)\"></nui-date-time-picker>\n        <nui-validation-message for=\"required\">\n            This field is required\n        </nui-validation-message>\n        <nui-validation-message for=\"invalidFormat\">\n            Invalid format\n        </nui-validation-message>\n    </nui-form-field>\n    <p class=\"mt-2\">Value: {{selectedDate}}</p>\n    <p class=\"mt-2\">Valid: {{control.valid}}</p>\n    <p class=\"mt-2\">Touched: {{control.touched}}</p>\n    <p class=\"mt-2\">Dirty: {{control.dirty}}</p>\n</section>\n";
      /***/
    },

    /***/
    "8goZ":
    /*!*******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*******************************************************************************************************************/

    /*! no static exports found */

    /***/
    function goZ(module, exports, __webpack_require__) {
      var map = {
        "./date-time-picker-basic/date-time-picker-basic.example.component.html": "hEPh",
        "./date-time-picker-basic/date-time-picker-basic.example.component.ts": "+eGj",
        "./date-time-picker-dialog/date-time-picker-dialog.example.component.html": "M23q",
        "./date-time-picker-dialog/date-time-picker-dialog.example.component.ts": "x74E",
        "./date-time-picker-disabled/date-time-picker-disabled.example.component.html": "fWpA",
        "./date-time-picker-disabled/date-time-picker-disabled.example.component.ts": "cBOF",
        "./date-time-picker-docs/date-time-picker-docs.example.component.html": "/eBl",
        "./date-time-picker-docs/date-time-picker-docs.example.component.ts": "XKGa",
        "./date-time-picker-empty-state/date-time-picker-empty-state.component.html": "Z1Ac",
        "./date-time-picker-empty-state/date-time-picker-empty-state.component.ts": "FxyN",
        "./date-time-picker-inline/date-time-picker-inline.example.component.html": "F2Om",
        "./date-time-picker-inline/date-time-picker-inline.example.component.ts": "4TpA",
        "./date-time-picker-range-values/date-time-picker-range-values.example.component.html": "OQ3J",
        "./date-time-picker-range-values/date-time-picker-range-values.example.component.ts": "gooq",
        "./date-time-picker-reactive-form/date-time-picker-reactive-form.example.component.html": "6xvE",
        "./date-time-picker-reactive-form/date-time-picker-reactive-form.example.component.ts": "dBKT",
        "./date-time-picker-test/date-time-picker-test.component.html": "eYCR",
        "./date-time-picker-test/date-time-picker-test.component.ts": "0zR/",
        "./date-time-picker-timezones/date-time-picker-timezones.example.component.html": "rza2",
        "./date-time-picker-timezones/date-time-picker-timezones.example.component.ts": "MLGG",
        "./date-time-picker-visual-test/date-time-picker-visual-test.component.html": "6ThW",
        "./date-time-picker-visual-test/date-time-picker-visual-test.component.ts": "Bpft",
        "./date-time-picker.module.ts": "SzFf",
        "./index.ts": "IXEY"
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
      webpackContext.id = "8goZ";
      /***/
    },

    /***/
    "AjMG":
    /*!******************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker.module.ts ***!
      \******************************************************************************/

    /*! exports provided: DateTimePickerModule */

    /***/
    function AjMG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerModule", function () {
        return DateTimePickerModule;
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
      "Ve8L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "date-time-picker-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerTestComponent"]
      }, {
        path: "date-time-picker-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "dialog",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerDialogExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var DateTimePickerModule = function DateTimePickerModule() {
        _classCallCheck(this, DateTimePickerModule);
      };

      DateTimePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: DateTimePickerModule
      });
      DateTimePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function DateTimePickerModule_Factory(t) {
          return new (t || DateTimePickerModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("8goZ");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDateTimePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DateTimePickerModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerRangeValuesExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerReactiveFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerEmptyStateComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerTimezonesExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerDialogExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDateTimePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Bpft":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-visual-test/date-time-picker-visual-test.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bpft(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-visual-test\",\n    templateUrl: \"./date-time-picker-visual-test.component.html\",\n})\n\nexport class DateTimePickerVisualTestComponent {\n    public dt: Moment = moment(\"2018-02-02\");\n    public minDate: Moment = this.dt.clone().date(1);\n    public maxDate: Moment = this.dt.clone().date(20);\n\n    constructor(@Inject(DialogService) private dialogService: DialogService) {\n    }\n\n    public open(content: TemplateRef<string>) {\n        this.dialogService.open(content, {size: \"sm\"});\n    }\n}\n";
      /***/
    },

    /***/
    "DwF9":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-inline/date-time-picker-inline.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: DateTimePickerInlineExampleComponent */

    /***/
    function DwF9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerInlineExampleComponent", function () {
        return DateTimePickerInlineExampleComponent;
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


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");

      var DateTimePickerInlineExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerInlineExampleComponent() {
          _classCallCheck(this, DateTimePickerInlineExampleComponent);

          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
          this.selectedDate = new Date(this.dt.valueOf());
        }

        _createClass(DateTimePickerInlineExampleComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerInlineExampleComponent;
      }();

      DateTimePickerInlineExampleComponent.ɵfac = function DateTimePickerInlineExampleComponent_Factory(t) {
        return new (t || DateTimePickerInlineExampleComponent)();
      };

      DateTimePickerInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DateTimePickerInlineExampleComponent,
        selectors: [["nui-date-time-picker-inline-example"]],
        decls: 4,
        vars: 2,
        consts: [[1, "demo-options-section"], ["displayMode", "inline", 3, "model", "modelChanged"], [1, "mt-2"]],
        template: function DateTimePickerInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-date-time-picker", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChanged", function DateTimePickerInlineExampleComponent_Template_nui_date_time_picker_modelChanged_1_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.dt);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate);
          }
        },
        directives: [_src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "F2Om":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-inline/date-time-picker-inline.example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F2Om(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-date-time-picker displayMode=\"inline\" (modelChanged)=\"onModelChanged($event)\"  [model]=\"dt\"></nui-date-time-picker>\n    <p class=\"mt-2\">{{selectedDate}}</p>\n</section>\n";
      /***/
    },

    /***/
    "FOA1":
    /*!******************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-timezones/date-time-picker-timezones.example.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: DateTimePickerTimezonesExampleComponent */

    /***/
    function FOA1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerTimezonesExampleComponent", function () {
        return DateTimePickerTimezonesExampleComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment-timezone */
      "f0Wu");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var zonesData = __webpack_require__(
      /*! moment-timezone/data/packed/latest.json */
      "bNI1");

      moment_timezone__WEBPACK_IMPORTED_MODULE_1___default.a.tz.add(zonesData.zones);

      var DateTimePickerTimezonesExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerTimezonesExampleComponent() {
          _classCallCheck(this, DateTimePickerTimezonesExampleComponent);

          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
          this.zones = zonesData.zones.map(function (z) {
            return z.split("|")[0];
          });
          this.displayedZones = this.zones;
          this.initialZone = "Australia/Sydney";
          this.control.setValue(this.control.value.tz(this.initialZone));
        }

        _createClass(DateTimePickerTimezonesExampleComponent, [{
          key: "selectedDate",
          get: function get() {
            return this.control.value.toString();
          }
        }, {
          key: "textboxChanged",
          value: function textboxChanged(searchQuery) {
            var val = searchQuery.newValue;
            this.displayedZones = this.zones.filter(function (z) {
              return z.toLowerCase().includes(val.toLowerCase());
            });

            if (this.zones.find(function (z) {
              return z === val;
            })) {
              this.control.setValue(this.control.value.tz(val));
            }
          }
        }]);

        return DateTimePickerTimezonesExampleComponent;
      }();

      DateTimePickerTimezonesExampleComponent.ɵfac = function DateTimePickerTimezonesExampleComponent_Factory(t) {
        return new (t || DateTimePickerTimezonesExampleComponent)();
      };

      DateTimePickerTimezonesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DateTimePickerTimezonesExampleComponent,
        selectors: [["nui-date-time-picker-timezones-example"]],
        decls: 6,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_TIMEZONES_DATE_TIME_PICKER_TIMEZONES_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_TIMEZONES_DATE_TIME_PICKER_TIMEZONES_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [[1, "demo-options-section"], ["caption", "Date Picker", 3, "control"], [3, "formControl", "handleTimezone"], [1, "mt-2"], ["placeholder", i18n_0, 3, "itemsSource", "value", "changed"]];
        },
        template: function DateTimePickerTimezonesExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-date-time-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-combobox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function DateTimePickerTimezonesExampleComponent_Template_nui_combobox_changed_5_listener($event) {
              return ctx.textboxChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.control)("handleTimezone", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Value: ", ctx.selectedDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.displayedZones)("value", ctx.initialZone);
          }
        },
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_4__["DateTimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "FxyN":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-empty-state/date-time-picker-empty-state.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FxyN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl, Validators } from \"@angular/forms\";\nimport { Moment } from \"moment/moment\";\n\n\n@Component({\n  selector: \"nui-date-time-picker-empty-state\",\n  templateUrl: \"./date-time-picker-empty-state.component.html\",\n})\nexport class DateTimePickerEmptyStateComponent {\n  public dt: Moment | undefined = undefined;\n  public selectedDate: Date | String = \"\";\n  public initEmpty: boolean = true;\n  public control: FormControl = new FormControl(this.dt, Validators.required);\n\n  constructor() {}\n\n  onModelChanged(event: Moment) {\n    this.selectedDate = new Date(event.valueOf());\n  }\n\n}\n";
      /***/
    },

    /***/
    "IXEY":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/index.ts ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IXEY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./date-time-picker-basic/date-time-picker-basic.example.component\" ;\nexport * from \"./date-time-picker-empty-state/date-time-picker-empty-state.component\";\nexport * from \"./date-time-picker-docs/date-time-picker-docs.example.component\";\nexport * from \"./date-time-picker-test/date-time-picker-test.component\";\nexport * from \"./date-time-picker-inline/date-time-picker-inline.example.component\";\nexport * from \"./date-time-picker-disabled/date-time-picker-disabled.example.component\";\nexport * from \"./date-time-picker-range-values/date-time-picker-range-values.example.component\";\nexport * from \"./date-time-picker-visual-test/date-time-picker-visual-test.component\";\nexport * from \"./date-time-picker-reactive-form/date-time-picker-reactive-form.example.component\";\nexport * from \"./date-time-picker-timezones/date-time-picker-timezones.example.component\";\nexport * from \"./date-time-picker-dialog/date-time-picker-dialog.example.component\";\n";
      /***/
    },

    /***/
    "M23q":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-dialog/date-time-picker-dialog.example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M23q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-template #content let-close=\"close\" let-dismiss=\"dismiss\">\n    <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n    <div class=\"dialog-body responsive-mode\">\n        <section class=\"demo-options-section\">\n            <nui-date-time-picker (modelChanged)=\"onModelChanged($event)\" displayMode=\"inline\" [model]=\"dt\" [appendToBody]=\"true\"></nui-date-time-picker>\n            <p class=\"mt-2\">{{selectedDate}}</p>\n        </section>\n    </div>\n    <nui-dialog-footer>\n        <button nui-button type=\"button\"\n                (click)=\"close()\" i18n>\n            Close\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n\n<button id=\"nui-demo-default-dialog-btn\" nui-button type=\"button\" (click)=\"open(content)\" i18n>Open dialog</button>\n\n";
      /***/
    },

    /***/
    "MLGG":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-timezones/date-time-picker-timezones.example.component.ts ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MLGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl, Validators } from \"@angular/forms\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\nimport moment from \"moment-timezone\";\n\nconst zonesData = require(\"moment-timezone/data/packed/latest.json\");\nmoment.tz.add(zonesData.zones);\n\n@Component({\n    selector: \"nui-date-time-picker-timezones-example\",\n    templateUrl: \"./date-time-picker-timezones.example.component.html\",\n})\nexport class DateTimePickerTimezonesExampleComponent {\n    public control = new FormControl(moment(), Validators.required);\n    get selectedDate() { return this.control.value.toString(); }\n    public zones: string[] = zonesData.zones.map((z: string) => z.split(\"|\")[0]);\n    public displayedZones = this.zones;\n    public initialZone = \"Australia/Sydney\";\n\n    constructor() {\n        this.control.setValue(this.control.value.tz(this.initialZone));\n    }\n\n    public textboxChanged(searchQuery: ISelectChangedEvent<any>) {\n        const val = searchQuery.newValue;\n        this.displayedZones = this.zones.filter(z => z.toLowerCase().includes(val.toLowerCase()));\n\n        if (this.zones.find(z => z === val)) {\n            this.control.setValue(this.control.value.tz(val));\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "N4Es":
    /*!************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-range-values/date-time-picker-range-values.example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: DateTimePickerRangeValuesExampleComponent */

    /***/
    function N4Es(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerRangeValuesExampleComponent", function () {
        return DateTimePickerRangeValuesExampleComponent;
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


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");

      var DateTimePickerRangeValuesExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerRangeValuesExampleComponent() {
          _classCallCheck(this, DateTimePickerRangeValuesExampleComponent);

          this.currentDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
          this.minDate = this.currentDate.clone().date(5);
          this.maxDate = this.currentDate.clone().date(25);
          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
          this.selectedDate = new Date(this.dt.valueOf());
        }

        _createClass(DateTimePickerRangeValuesExampleComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerRangeValuesExampleComponent;
      }();

      DateTimePickerRangeValuesExampleComponent.ɵfac = function DateTimePickerRangeValuesExampleComponent_Factory(t) {
        return new (t || DateTimePickerRangeValuesExampleComponent)();
      };

      DateTimePickerRangeValuesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DateTimePickerRangeValuesExampleComponent,
        selectors: [["nui-date-time-picker-range-values-example"]],
        decls: 4,
        vars: 4,
        consts: [[1, "demo-options-section"], [3, "minDate", "maxDate", "model", "modelChanged"], [1, "mt-2"]],
        template: function DateTimePickerRangeValuesExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-date-time-picker", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChanged", function DateTimePickerRangeValuesExampleComponent_Template_nui_date_time_picker_modelChanged_1_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx.minDate)("maxDate", ctx.maxDate)("model", ctx.dt);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate);
          }
        },
        directives: [_src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "OQ3J":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-range-values/date-time-picker-range-values.example.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OQ3J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-date-time-picker [minDate]=\"minDate\" [maxDate]=\"maxDate\" (modelChanged)=\"onModelChanged($event)\"  [model]=\"dt\"></nui-date-time-picker>\n    <p class=\"mt-2\">{{selectedDate}}</p>\n</section>\n";
      /***/
    },

    /***/
    "SzFf":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker.module.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SzFf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDateTimePickerModule,\n    NuiDialogModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule,\n    NuiSelectModule,\n    NuiValidationMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    DateTimePickerBasicExampleComponent,\n    DateTimePickerDialogExampleComponent,\n    DateTimePickerDisabledExampleComponent,\n    DateTimePickerDocsComponent,\n    DateTimePickerEmptyStateComponent,\n    DateTimePickerInlineExampleComponent,\n    DateTimePickerRangeValuesExampleComponent,\n    DateTimePickerReactiveFormExampleComponent,\n    DateTimePickerTestComponent,\n    DateTimePickerTimezonesExampleComponent,\n    DateTimePickerVisualTestComponent,\n} from \"./index\";\n\n\nconst routes = [\n    {\n        path: \"\",\n        component: DateTimePickerDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"date-time-picker-test\",\n        component: DateTimePickerTestComponent,\n    },\n    {\n        path: \"date-time-picker-visual-test\",\n        component: DateTimePickerVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"dialog\",\n        component: DateTimePickerDialogExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiDateTimePickerModule,\n        NuiDialogModule,\n        NuiFormFieldModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiSelectModule,\n        NuiValidationMessageModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n        NuiDialogModule,\n    ],\n    declarations: [\n        DateTimePickerTestComponent,\n        DateTimePickerBasicExampleComponent,\n        DateTimePickerInlineExampleComponent,\n        DateTimePickerDisabledExampleComponent,\n        DateTimePickerRangeValuesExampleComponent,\n        DateTimePickerVisualTestComponent,\n        DateTimePickerDocsComponent,\n        DateTimePickerReactiveFormExampleComponent,\n        DateTimePickerEmptyStateComponent,\n        DateTimePickerTimezonesExampleComponent,\n        DateTimePickerDialogExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class DateTimePickerModule {\n}\n";
      /***/
    },

    /***/
    "Ve8L":
    /*!************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/index.ts ***!
      \************************************************************/

    /*! exports provided: DateTimePickerBasicExampleComponent, DateTimePickerEmptyStateComponent, DateTimePickerDocsComponent, DateTimePickerTestComponent, DateTimePickerInlineExampleComponent, DateTimePickerDisabledExampleComponent, DateTimePickerRangeValuesExampleComponent, DateTimePickerVisualTestComponent, DateTimePickerReactiveFormExampleComponent, DateTimePickerTimezonesExampleComponent, DateTimePickerDialogExampleComponent */

    /***/
    function Ve8L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _date_time_picker_basic_date_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./date-time-picker-basic/date-time-picker-basic.example.component */
      "2SS3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerBasicExampleComponent", function () {
        return _date_time_picker_basic_date_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["DateTimePickerBasicExampleComponent"];
      });
      /* harmony import */


      var _date_time_picker_empty_state_date_time_picker_empty_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./date-time-picker-empty-state/date-time-picker-empty-state.component */
      "fvUN");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerEmptyStateComponent", function () {
        return _date_time_picker_empty_state_date_time_picker_empty_state_component__WEBPACK_IMPORTED_MODULE_1__["DateTimePickerEmptyStateComponent"];
      });
      /* harmony import */


      var _date_time_picker_docs_date_time_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-time-picker-docs/date-time-picker-docs.example.component */
      "xL07");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerDocsComponent", function () {
        return _date_time_picker_docs_date_time_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerDocsComponent"];
      });
      /* harmony import */


      var _date_time_picker_test_date_time_picker_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./date-time-picker-test/date-time-picker-test.component */
      "fYD7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerTestComponent", function () {
        return _date_time_picker_test_date_time_picker_test_component__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerTestComponent"];
      });
      /* harmony import */


      var _date_time_picker_inline_date_time_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./date-time-picker-inline/date-time-picker-inline.example.component */
      "DwF9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerInlineExampleComponent", function () {
        return _date_time_picker_inline_date_time_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_4__["DateTimePickerInlineExampleComponent"];
      });
      /* harmony import */


      var _date_time_picker_disabled_date_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./date-time-picker-disabled/date-time-picker-disabled.example.component */
      "ghaD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerDisabledExampleComponent", function () {
        return _date_time_picker_disabled_date_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerDisabledExampleComponent"];
      });
      /* harmony import */


      var _date_time_picker_range_values_date_time_picker_range_values_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./date-time-picker-range-values/date-time-picker-range-values.example.component */
      "N4Es");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerRangeValuesExampleComponent", function () {
        return _date_time_picker_range_values_date_time_picker_range_values_example_component__WEBPACK_IMPORTED_MODULE_6__["DateTimePickerRangeValuesExampleComponent"];
      });
      /* harmony import */


      var _date_time_picker_visual_test_date_time_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./date-time-picker-visual-test/date-time-picker-visual-test.component */
      "262F");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerVisualTestComponent", function () {
        return _date_time_picker_visual_test_date_time_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_7__["DateTimePickerVisualTestComponent"];
      });
      /* harmony import */


      var _date_time_picker_reactive_form_date_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./date-time-picker-reactive-form/date-time-picker-reactive-form.example.component */
      "sSok");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerReactiveFormExampleComponent", function () {
        return _date_time_picker_reactive_form_date_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_8__["DateTimePickerReactiveFormExampleComponent"];
      });
      /* harmony import */


      var _date_time_picker_timezones_date_time_picker_timezones_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./date-time-picker-timezones/date-time-picker-timezones.example.component */
      "FOA1");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerTimezonesExampleComponent", function () {
        return _date_time_picker_timezones_date_time_picker_timezones_example_component__WEBPACK_IMPORTED_MODULE_9__["DateTimePickerTimezonesExampleComponent"];
      });
      /* harmony import */


      var _date_time_picker_dialog_date_time_picker_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./date-time-picker-dialog/date-time-picker-dialog.example.component */
      "hWkX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerDialogExampleComponent", function () {
        return _date_time_picker_dialog_date_time_picker_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__["DateTimePickerDialogExampleComponent"];
      });
      /***/

    },

    /***/
    "XKGa":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-docs/date-time-picker-docs.example.component.ts ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XKGa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-time-picker-docs-example\",\n    templateUrl: \"./date-time-picker-docs.example.component.html\",\n})\nexport class DateTimePickerDocsComponent {\n}\n";
      /***/
    },

    /***/
    "Z1Ac":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-empty-state/date-time-picker-empty-state.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z1Ac(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-form-field caption=\"Date Time Picker\" [control]=\"control\">\n        <nui-date-time-picker [initEmpty] = \"initEmpty\" [formControl]=\"control\" (modelChanged)=\"onModelChanged($event)\"></nui-date-time-picker>\n        <nui-validation-message for=\"required\">\n            This field is required\n        </nui-validation-message>\n        <nui-validation-message for=\"invalidFormat\">\n            Invalid format\n        </nui-validation-message>\n    </nui-form-field>\n    <p class=\"mt-2\">Value: {{selectedDate}}</p>\n    <p class=\"mt-2\">Valid: {{control.valid}}</p>\n    <p class=\"mt-2\">Touched: {{control.touched}}</p>\n    <p class=\"mt-2\">Dirty: {{control.dirty}}</p>\n</section>";
      /***/
    },

    /***/
    "cBOF":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-disabled/date-time-picker-disabled.example.component.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cBOF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-disabled-example\",\n    templateUrl: \"./date-time-picker-disabled.example.component.html\",\n})\n\nexport class DateTimePickerDisabledExampleComponent {\n    public dt: Moment;\n    public selectedDate: Date;\n    constructor() {\n        this.dt = moment();\n        this.selectedDate = new Date(this.dt.valueOf());\n    }\n\n    onModelChanged(event: any) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "dBKT":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-reactive-form/date-time-picker-reactive-form.example.component.ts ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dBKT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl, Validators } from \"@angular/forms\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-reactive-forms-example\",\n    templateUrl: \"./date-time-picker-reactive-form.example.component.html\",\n})\n\nexport class DateTimePickerReactiveFormExampleComponent {\n    public dt: Moment = moment();\n    public selectedDate: Date = new Date(this.dt.valueOf());\n    public control = new FormControl(this.dt, Validators.required);\n\n    constructor() {}\n\n    onModelChanged(event: Moment) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "eYCR":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-test/date-time-picker-test.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eYCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <div class=\"row\">\n        <div class=\"col-6\">\n            <nui-date-time-picker id=\"nui-demo-date-time-picker\"\n                                  (modelChanged)=\"onModelChanged($event)\"\n                                  [model]=\"dt\"></nui-date-time-picker>\n        </div>\n        <div class=\"col-6\">\n            <p id=\"model-value\">\n                {{selectedDate}}\n            </p>\n        </div>\n    </div>\n</section>\n";
      /***/
    },

    /***/
    "fWpA":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-disabled/date-time-picker-disabled.example.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fWpA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-date-time-picker [isDisabled]=\"true\" (modelChanged)=\"onModelChanged($event)\"  [model]=\"dt\"></nui-date-time-picker>\n    <p class=\"mt-2\">{{selectedDate}}</p>\n</section>\n";
      /***/
    },

    /***/
    "fYD7":
    /*!************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-test/date-time-picker-test.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: DateTimePickerTestComponent */

    /***/
    function fYD7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerTestComponent", function () {
        return DateTimePickerTestComponent;
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


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");

      var DateTimePickerTestComponent = /*#__PURE__*/function () {
        function DateTimePickerTestComponent() {
          _classCallCheck(this, DateTimePickerTestComponent);

          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()().set({
            year: 1970,
            month: 2,
            date: 15,
            hour: 15,
            minute: 30
          });
          this.selectedDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(this.dt).format("YYYY-MM-DD HH:mm");
        }

        _createClass(DateTimePickerTestComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(event).format("YYYY-MM-DD HH:mm");
          }
        }]);

        return DateTimePickerTestComponent;
      }();

      DateTimePickerTestComponent.ɵfac = function DateTimePickerTestComponent_Factory(t) {
        return new (t || DateTimePickerTestComponent)();
      };

      DateTimePickerTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DateTimePickerTestComponent,
        selectors: [["nui-date-time-picker-test"]],
        decls: 7,
        vars: 2,
        consts: [[1, "demo-options-section"], [1, "row"], [1, "col-6"], ["id", "nui-demo-date-time-picker", 3, "model", "modelChanged"], ["id", "model-value"]],
        template: function DateTimePickerTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-date-time-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChanged", function DateTimePickerTestComponent_Template_nui_date_time_picker_modelChanged_3_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx.dt);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedDate, " ");
          }
        },
        directives: [_src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fvUN":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-empty-state/date-time-picker-empty-state.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: DateTimePickerEmptyStateComponent */

    /***/
    function fvUN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerEmptyStateComponent", function () {
        return DateTimePickerEmptyStateComponent;
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


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");

      var DateTimePickerEmptyStateComponent = /*#__PURE__*/function () {
        function DateTimePickerEmptyStateComponent() {
          _classCallCheck(this, DateTimePickerEmptyStateComponent);

          this.dt = undefined;
          this.selectedDate = "";
          this.initEmpty = true;
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dt, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        }

        _createClass(DateTimePickerEmptyStateComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerEmptyStateComponent;
      }();

      DateTimePickerEmptyStateComponent.ɵfac = function DateTimePickerEmptyStateComponent_Factory(t) {
        return new (t || DateTimePickerEmptyStateComponent)();
      };

      DateTimePickerEmptyStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DateTimePickerEmptyStateComponent,
        selectors: [["nui-date-time-picker-empty-state"]],
        decls: 15,
        vars: 7,
        consts: [[1, "demo-options-section"], ["caption", "Date Time Picker", 3, "control"], [3, "initEmpty", "formControl", "modelChanged"], ["for", "required"], ["for", "invalidFormat"], [1, "mt-2"]],
        template: function DateTimePickerEmptyStateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-date-time-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChanged", function DateTimePickerEmptyStateComponent_Template_nui_date_time_picker_modelChanged_2_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-validation-message", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " This field is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-validation-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Invalid format ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("control", ctx.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initEmpty", ctx.initEmpty)("formControl", ctx.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Value: ", ctx.selectedDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Valid: ", ctx.control.valid, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Touched: ", ctx.control.touched, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Dirty: ", ctx.control.dirty, "");
          }
        },
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_2__["FormFieldComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ghaD":
    /*!****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-disabled/date-time-picker-disabled.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: DateTimePickerDisabledExampleComponent */

    /***/
    function ghaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerDisabledExampleComponent", function () {
        return DateTimePickerDisabledExampleComponent;
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


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");

      var DateTimePickerDisabledExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerDisabledExampleComponent() {
          _classCallCheck(this, DateTimePickerDisabledExampleComponent);

          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
          this.selectedDate = new Date(this.dt.valueOf());
        }

        _createClass(DateTimePickerDisabledExampleComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerDisabledExampleComponent;
      }();

      DateTimePickerDisabledExampleComponent.ɵfac = function DateTimePickerDisabledExampleComponent_Factory(t) {
        return new (t || DateTimePickerDisabledExampleComponent)();
      };

      DateTimePickerDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DateTimePickerDisabledExampleComponent,
        selectors: [["nui-date-time-picker-disabled-example"]],
        decls: 4,
        vars: 3,
        consts: [[1, "demo-options-section"], [3, "isDisabled", "model", "modelChanged"], [1, "mt-2"]],
        template: function DateTimePickerDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-date-time-picker", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modelChanged", function DateTimePickerDisabledExampleComponent_Template_nui_date_time_picker_modelChanged_1_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isDisabled", true)("model", ctx.dt);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate);
          }
        },
        directives: [_src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gooq":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-range-values/date-time-picker-range-values.example.component.ts ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gooq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-range-values-example\",\n    templateUrl: \"./date-time-picker-range-values.example.component.html\",\n})\n\nexport class DateTimePickerRangeValuesExampleComponent {\n    private currentDate = moment();\n\n    public dt: Moment;\n    public selectedDate: Date;\n    public minDate: Moment = this.currentDate.clone().date(5);\n    public maxDate: Moment = this.currentDate.clone().date(25);\n\n    constructor() {\n        this.dt = moment();\n        this.selectedDate = new Date(this.dt.valueOf());\n    }\n\n    onModelChanged(event: any) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "hEPh":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-basic/date-time-picker-basic.example.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hEPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-date-time-picker (modelChanged)=\"onModelChanged($event)\"  [model]=\"dt\"></nui-date-time-picker>\n    <p class=\"mt-2\">{{selectedDate}}</p>\n</section>\n";
      /***/
    },

    /***/
    "hWkX":
    /*!************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-dialog/date-time-picker-dialog.example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: DateTimePickerDialogExampleComponent */

    /***/
    function hWkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerDialogExampleComponent", function () {
        return DateTimePickerDialogExampleComponent;
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


      var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-header.component */
      "skCw");
      /* harmony import */


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");

      function DateTimePickerDialogExampleComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DateTimePickerDialogExampleComponent_ng_template_0_Template_nui_dialog_header_closed_0_listener() {
            var close_r2 = ctx.close;
            return close_r2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-date-time-picker", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChanged", function DateTimePickerDialogExampleComponent_ng_template_0_Template_nui_date_time_picker_modelChanged_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onModelChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateTimePickerDialogExampleComponent_ng_template_0_Template_button_click_7_listener() {
            var close_r2 = ctx.close;
            return close_r2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1.dt)("appendToBody", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.selectedDate);
        }
      }

      var DateTimePickerDialogExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerDialogExampleComponent(dialogService) {
          _classCallCheck(this, DateTimePickerDialogExampleComponent);

          this.dialogService = dialogService;
          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()();
          this.selectedDate = new Date(this.dt.valueOf());
        }

        _createClass(DateTimePickerDialogExampleComponent, [{
          key: "open",
          value: function open(content) {
            this.dialogService.open(content, {
              size: "sm"
            });
          }
        }, {
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerDialogExampleComponent;
      }();

      DateTimePickerDialogExampleComponent.ɵfac = function DateTimePickerDialogExampleComponent_Factory(t) {
        return new (t || DateTimePickerDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DialogService"]));
      };

      DateTimePickerDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateTimePickerDialogExampleComponent,
        selectors: [["nui-date-time-picker-dialog-example"]],
        decls: 4,
        vars: 0,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6797255531066199749$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_DIALOG_DATE_TIME_PICKER_DIALOG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Open dialog");
            i18n_0 = MSG_EXTERNAL_6797255531066199749$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_DIALOG_DATE_TIME_PICKER_DIALOG_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([":\u241F3f83d7b9853be0556ddf713900eff116b87b8b33\u241F6797255531066199749:Open dialog"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_DIALOG_DATE_TIME_PICKER_DIALOG_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Dialog title");
            i18n_2 = MSG_EXTERNAL_5892089246202495025$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_DIALOG_DATE_TIME_PICKER_DIALOG_EXAMPLE_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([":\u241Feeb379308b8767b98aa0d27308f4f8dd6b46e559\u241F5892089246202495025:Dialog title"])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6975384774410505859$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_DIALOG_DATE_TIME_PICKER_DIALOG_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Close ");
            i18n_4 = MSG_EXTERNAL_6975384774410505859$$DEMO_SRC_COMPONENTS_DEMO_DATE_TIME_PICKER_DATE_TIME_PICKER_DIALOG_DATE_TIME_PICKER_DIALOG_EXAMPLE_COMPONENT_TS__5;
          } else {
            i18n_4 = $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([":\u241Fd75a04595ddc9cb39464ffed9863f53f6e192b67\u241F6975384774410505859: Close "])));
          }

          return [["content", ""], ["id", "nui-demo-default-dialog-btn", "nui-button", "", "type", "button", 3, "click"], i18n_0, ["title", i18n_2, 3, "closed"], [1, "dialog-body", "responsive-mode"], [1, "demo-options-section"], ["displayMode", "inline", 3, "model", "appendToBody", "modelChanged"], [1, "mt-2"], ["nui-button", "", "type", "button", 3, "click"], i18n_4];
        },
        template: function DateTimePickerDialogExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DateTimePickerDialogExampleComponent_ng_template_0_Template, 9, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateTimePickerDialogExampleComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

              return ctx.open(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_dialog_dialog_header_component__WEBPACK_IMPORTED_MODULE_4__["DialogHeaderComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerComponent"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_6__["DialogFooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "rza2":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-timezones/date-time-picker-timezones.example.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rza2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-form-field caption=\"Date Picker\" [control]=\"control\">\n        <nui-date-time-picker [formControl]=\"control\" [handleTimezone]=\"true\"></nui-date-time-picker>\n    </nui-form-field>\n    <p class=\"mt-2\">Value: {{selectedDate}}</p>\n\n    <nui-combobox [itemsSource]=\"displayedZones\"\n        [value]=\"initialZone\"\n        (changed)=\"textboxChanged($event)\"\n        placeholder=\"Select item\" i18n-placeholder\n    ></nui-combobox>\n\n</section>\n";
      /***/
    },

    /***/
    "sSok":
    /*!**************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-reactive-form/date-time-picker-reactive-form.example.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: DateTimePickerReactiveFormExampleComponent */

    /***/
    function sSok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerReactiveFormExampleComponent", function () {
        return DateTimePickerReactiveFormExampleComponent;
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


      var _src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/form-field/form-field.component */
      "L5T1");
      /* harmony import */


      var _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-time-picker/date-time-picker.component */
      "/NB1");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");

      var DateTimePickerReactiveFormExampleComponent = /*#__PURE__*/function () {
        function DateTimePickerReactiveFormExampleComponent() {
          _classCallCheck(this, DateTimePickerReactiveFormExampleComponent);

          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();
          this.selectedDate = new Date(this.dt.valueOf());
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dt, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        }

        _createClass(DateTimePickerReactiveFormExampleComponent, [{
          key: "onModelChanged",
          value: function onModelChanged(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DateTimePickerReactiveFormExampleComponent;
      }();

      DateTimePickerReactiveFormExampleComponent.ɵfac = function DateTimePickerReactiveFormExampleComponent_Factory(t) {
        return new (t || DateTimePickerReactiveFormExampleComponent)();
      };

      DateTimePickerReactiveFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DateTimePickerReactiveFormExampleComponent,
        selectors: [["nui-date-time-picker-reactive-forms-example"]],
        decls: 15,
        vars: 6,
        consts: [[1, "demo-options-section"], ["caption", "Date Time Picker", 3, "control"], [3, "formControl", "modelChanged"], ["for", "required"], ["for", "invalidFormat"], [1, "mt-2"]],
        template: function DateTimePickerReactiveFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-date-time-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("modelChanged", function DateTimePickerReactiveFormExampleComponent_Template_nui_date_time_picker_modelChanged_2_listener($event) {
              return ctx.onModelChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nui-validation-message", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " This field is required ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-validation-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Invalid format ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Value: ", ctx.selectedDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Valid: ", ctx.control.valid, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Touched: ", ctx.control.touched, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Dirty: ", ctx.control.dirty, "");
          }
        },
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_date_time_picker_date_time_picker_component__WEBPACK_IMPORTED_MODULE_4__["DateTimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "x74E":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-time-picker/date-time-picker-dialog/date-time-picker-dialog.example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x74E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject, TemplateRef } from \"@angular/core\";\nimport { DialogService } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-time-picker-dialog-example\",\n    templateUrl: \"./date-time-picker-dialog.example.component.html\",\n})\n\nexport class DateTimePickerDialogExampleComponent {\n    public dt: Moment;\n    public selectedDate: Date;\n\n    constructor(@Inject(DialogService) private dialogService: DialogService) {\n\n        this.dt = moment();\n        this.selectedDate = new Date(this.dt.valueOf());\n    }\n\n    public open(content: TemplateRef<string>) {\n        this.dialogService.open(content, {size: \"sm\"});\n    }\n\n    onModelChanged(event: any) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "xL07":
    /*!********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-time-picker/date-time-picker-docs/date-time-picker-docs.example.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: DateTimePickerDocsComponent */

    /***/
    function xL07(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimePickerDocsComponent", function () {
        return DateTimePickerDocsComponent;
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


      var _date_time_picker_basic_date_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../date-time-picker-basic/date-time-picker-basic.example.component */
      "2SS3");
      /* harmony import */


      var _date_time_picker_empty_state_date_time_picker_empty_state_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../date-time-picker-empty-state/date-time-picker-empty-state.component */
      "fvUN");
      /* harmony import */


      var _date_time_picker_reactive_form_date_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../date-time-picker-reactive-form/date-time-picker-reactive-form.example.component */
      "sSok");
      /* harmony import */


      var _date_time_picker_range_values_date_time_picker_range_values_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../date-time-picker-range-values/date-time-picker-range-values.example.component */
      "N4Es");
      /* harmony import */


      var _date_time_picker_disabled_date_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../date-time-picker-disabled/date-time-picker-disabled.example.component */
      "ghaD");
      /* harmony import */


      var _date_time_picker_inline_date_time_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../date-time-picker-inline/date-time-picker-inline.example.component */
      "DwF9");
      /* harmony import */


      var _date_time_picker_timezones_date_time_picker_timezones_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../date-time-picker-timezones/date-time-picker-timezones.example.component */
      "FOA1");
      /* harmony import */


      var _date_time_picker_dialog_date_time_picker_dialog_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../date-time-picker-dialog/date-time-picker-dialog.example.component */
      "hWkX");

      var DateTimePickerDocsComponent = function DateTimePickerDocsComponent() {
        _classCallCheck(this, DateTimePickerDocsComponent);
      };

      DateTimePickerDocsComponent.ɵfac = function DateTimePickerDocsComponent_Factory(t) {
        return new (t || DateTimePickerDocsComponent)();
      };

      DateTimePickerDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateTimePickerDocsComponent,
        selectors: [["nui-date-time-picker-docs-example"]],
        decls: 112,
        vars: 0,
        consts: [["href", "../components/TimePickerComponent.html"], ["href", "../components/DatePickerComponent.html"], ["filenamePrefix", "date-time-picker-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "date-time-picker-empty-state", "exampleTitle", "Empty Initial State"], ["filenamePrefix", "date-time-picker-reactive-form", "exampleTitle", "Reactive Form Usage"], ["filenamePrefix", "date-time-picker-range-values", "exampleTitle", "Date Range Values"], ["filenamePrefix", "date-time-picker-disabled", "exampleTitle", "Disabled Mode"], ["filenamePrefix", "date-time-picker-inline", "exampleTitle", "Inline Mode"], ["filenamePrefix", "date-time-picker-timezones", "exampleTitle", "Timezones"], ["filenamePrefix", "date-time-picker-dialog", "exampleTitle", "Appending Popups to Document Body"]],
        template: function DateTimePickerDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiDateTimePickerModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "<nui-date-time-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " allows user to select a specific time moment setting correspondent date and time. For time selecting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "nui-time-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " is used, for date selecting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "nui-date-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nui-date-time-picker-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Empty Initial State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "<nui-date-time-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " allows user to init a component with the empty values using the attribute \"initEmpty\". For time selecting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "nui-time-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " is used, for date selecting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nui-date-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nui-date-time-picker-empty-state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Reactive Form Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "<nui-date-time-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " may be used in a reactive form by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "formControl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "nui-date-time-picker-reactive-forms-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Min/Max value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " To set min or max date for date field of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "dateTimePicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " use minDate or maxDate input (as shown in DatePicker docs).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "nui-date-time-picker-range-values-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Disabled Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " To disable dateTimePicker set isDisabled input to true\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "nui-date-time-picker-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Inline Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Set displayMode mode binding to 'inline' in order to set row direction for ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "dateTimePicker's");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " input fields.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nui-date-time-picker-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Timezones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " As far as ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "DateTimePickerComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " uses ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "DatePickerComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " it can also be used with handling timezones. Setting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "handleTimezone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " flag to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " makes handling timezone.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "nui-date-time-picker-timezones-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Appending Popup Controls to the Document Body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " DateTimePicker popups (for both ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "DatePicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "TimePicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, ") can be appended to the document ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "appendToBody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "nui-date-time-picker-dialog-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _date_time_picker_basic_date_time_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["DateTimePickerBasicExampleComponent"], _date_time_picker_empty_state_date_time_picker_empty_state_component__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerEmptyStateComponent"], _date_time_picker_reactive_form_date_time_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_4__["DateTimePickerReactiveFormExampleComponent"], _date_time_picker_range_values_date_time_picker_range_values_example_component__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerRangeValuesExampleComponent"], _date_time_picker_disabled_date_time_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_6__["DateTimePickerDisabledExampleComponent"], _date_time_picker_inline_date_time_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_7__["DateTimePickerInlineExampleComponent"], _date_time_picker_timezones_date_time_picker_timezones_example_component__WEBPACK_IMPORTED_MODULE_8__["DateTimePickerTimezonesExampleComponent"], _date_time_picker_dialog_date_time_picker_dialog_example_component__WEBPACK_IMPORTED_MODULE_9__["DateTimePickerDialogExampleComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-date-time-picker-date-time-picker-module-es5.js.map