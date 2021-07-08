(function () {
  var _templateObject, _templateObject2, _templateObject3;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-date-picker-date-picker-module"], {
    /***/
    "+H9U":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-formatting/date-picker-formatting.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-formatting-example\",\n    templateUrl: \"./date-picker-formatting.example.component.html\",\n})\nexport class DatePickerFormattingExampleComponent {\n    public initDate: Moment = moment();\n}\n";
      /***/
    },

    /***/
    "/0bv":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-year-range/date-picker-year-range.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DatePickerYearRangeExampleComponent */

    /***/
    function bv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerYearRangeExampleComponent", function () {
        return DatePickerYearRangeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerYearRangeExampleComponent = function DatePickerYearRangeExampleComponent() {
        _classCallCheck(this, DatePickerYearRangeExampleComponent);
      };

      DatePickerYearRangeExampleComponent.ɵfac = function DatePickerYearRangeExampleComponent_Factory(t) {
        return new (t || DatePickerYearRangeExampleComponent)();
      };

      DatePickerYearRangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerYearRangeExampleComponent,
        selectors: [["nui-date-picker-year-range-example"]],
        decls: 1,
        vars: 2,
        consts: [["datepickerMode", "year", 3, "inline", "yearRange"]],
        template: function DatePickerYearRangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("yearRange", 5);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "0pH0":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-modes-range/date-picker-modes-range.example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pH0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\"\n    datepickerMode=\"year\"\n    minMode=\"month\"\n    maxMode=\"year\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "0w1E":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-docs/date-picker-docs.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w1E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-docs-example\",\n    templateUrl: \"./date-picker-docs.example.component.html\",\n})\nexport class DatePickerDocsComponent {\n}\n";
      /***/
    },

    /***/
    "2Ak0":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-modes-range/date-picker-modes-range.example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ak0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-modes-range-example\",\n    templateUrl: \"./date-picker-modes-range.example.component.html\",\n})\nexport class DatePickerModesRangeExampleComponent {\n}\n";
      /***/
    },

    /***/
    "2hRs":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-date-range/date-picker-date-range.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hRs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-date-range-example\",\n    templateUrl: \"./date-picker-date-range.example.component.html\",\n})\nexport class DatePickerDateRangeExampleComponent {\n    private currentDate = moment();\n\n    public minDate: Moment = this.currentDate.clone().date(5);\n    public maxDate: Moment = this.currentDate.clone().date(25);\n}\n";
      /***/
    },

    /***/
    "2rwc":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-current-month/date-picker-current-month.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rwc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-current-month-example\",\n    templateUrl: \"./date-picker-current-month.example.component.html\",\n})\nexport class DatePickerCurrentMonthExampleComponent {\n}\n";
      /***/
    },

    /***/
    "3Prd":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-test/date-picker-test.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Prd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Basic Datepicker</h2>\n<nui-date-picker id=\"nui-demo-datepicker-basic\">\n</nui-date-picker>\n\n<hr>\n\n<h2>Datepicker with preserve insignificant</h2>\n<nui-date-picker id=\"nui-demo-datepicker-preserve\"\n                 [value]=\"dtPreserve\"\n                 [preserveInsignificant]=\"true\"\n                 (valueChange)=\"dateChangedPreserved($event)\">\n</nui-date-picker>\n<p>\n    Selected date:\n    <span id=\"nui-demo-datepicker-active-date-value-preserve\">{{localActiveDatePreserve.format()}}</span>\n</p>\n\n<hr>\n\n<h2>Inline datepicker</h2>\n<nui-date-picker id=\"nui-demo-datepicker-inline\"\n                 [value]=\"dt\"\n                 [inline]=\"true\"\n                 (valueChange)=\"dateChanged($event)\">\n</nui-date-picker>\n<p>\n    Selected date:\n    <span id=\"nui-demo-datepicker-active-date-value\">{{localActiveDate.format()}}</span>\n</p>\n\n<hr>\n\n<h2>Datepicker with min and max values</h2>\n<nui-date-picker id=\"nui-demo-datepicker-min-max\"\n                 [value]=\"dt\"\n                 [minDate]=\"minDate\"\n                 [maxDate]=\"maxDate\"\n                 (valueChange)=\"dateChangedMinMax($event)\">\n</nui-date-picker>\n<p>\n    Selected date:\n    <span id=\"nui-demo-datepicker-min-max-value\">{{localActiveDateMinMax.format()}}</span>\n</p>\n<p>\n    Min date:\n    <span id=\"nui-demo-datepicker-min-date\">{{minDate.format()}}</span>\n</p>\n<p>\n    Max date:\n    <span id=\"nui-demo-datepicker-max-date\">{{maxDate.format()}}</span>\n</p>\n\n<hr>\n\n<h2>Datepicker with reactive form</h2>\n<form [formGroup]=\"reactiveDatepickerForm\">\n<nui-date-picker id=\"nui-demo-date-picker-reactive\"\n                 [isInErrorState]=\"reactiveDatepickerForm.controls['datePicker'].invalid\"\n                 formControlName=\"datePicker\">\n</nui-date-picker>\n</form>\n\n<hr>\n\n<h2>Datepicker with disabled dates</h2>\n<nui-date-picker id=\"nui-demo-datepicker-disabled-dates\"\n                 [value]=\"dt\"\n                 [disabledDates]=\"dateDisabled\"\n                 (valueChange)=\"dateChangedDisabledDates($event)\">\n</nui-date-picker>\n<p>\n    Selected date:\n    <span id=\"nui-demo-datepicker-disabled-dates-value\">{{localActiveDateDisabledDates.format()}}</span>\n</p>\n<p>\n    Dates, disabled with <code>dateDisabled</code>: {{dateDisabled | json}}}\n</p>\n\n<hr>\n\n<h2>Datepicker with disabled today button</h2>\n<nui-date-picker id=\"nui-demo-datepicker-disabled-today\"\n                 [disabledDates]=\"todayDateDisabled\">\n</nui-date-picker>\n\n<hr>\n\n<h2>Datepicker with initial date, time and preserve insignificant</h2>\n<nui-date-picker id=\"nui-demo-datepicker-init-date-preserve\"\n                 [value]=\"initDate\"\n                 [preserveInsignificant]=\"true\"\n                 (valueChange)=\"initDateChangedPreserved($event)\">\n</nui-date-picker>\n<div id=\"nui-demo-datepicker-init-date-value-preserve\">{{initDatePreserve.format()}}</div>\n\n<hr>\n\n<h2>Datepicker with custom first day of the week</h2>\n<nui-date-picker id=\"nui-demo-datepicker-custom-first-day-of-the-week\"\n                 [startingDay]=\"5\">\n</nui-date-picker>\n\n<hr>\n\n<h2>Datepicker with custom date format</h2>\n<nui-date-picker id=\"nui-demo-datepicker-custom-date-format\"\n                 dateFormat=\"MM/DD/YY\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "3kVr":
    /*!*****************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-docs/date-picker-docs.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: DatePickerDocsComponent */

    /***/
    function kVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDocsComponent", function () {
        return DatePickerDocsComponent;
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


      var _date_picker_basic_date_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../date-picker-basic/date-picker-basic.example.component */
      "bRl6");
      /* harmony import */


      var _date_picker_value_change_date_picker_value_change_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../date-picker-value-change/date-picker-value-change.example.component */
      "k3CJ");
      /* harmony import */


      var _date_picker_calendar_navigated_date_picker_calendar_navigated_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../date-picker-calendar-navigated/date-picker-calendar-navigated.example.component */
      "4+wy");
      /* harmony import */


      var _date_picker_disabled_date_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../date-picker-disabled/date-picker-disabled.example.component */
      "4+Q9");
      /* harmony import */


      var _date_picker_with_error_date_picker_with_error_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../date-picker-with-error/date-picker-with-error.example.component */
      "iMUJ");
      /* harmony import */


      var _date_picker_inline_date_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../date-picker-inline/date-picker-inline.example.component */
      "g1M9");
      /* harmony import */


      var _date_picker_current_month_date_picker_current_month_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../date-picker-current-month/date-picker-current-month.example.component */
      "zUPy");
      /* harmony import */


      var _date_picker_show_weeks_date_picker_show_weeks_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../date-picker-show-weeks/date-picker-show-weeks.example.component */
      "g+ya");
      /* harmony import */


      var _date_picker_first_date_of_week_date_picker_first_date_of_week_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../date-picker-first-date-of-week/date-picker-first-date-of-week.example.component */
      "uRB6");
      /* harmony import */


      var _date_picker_init_date_date_picker_init_date_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../date-picker-init-date/date-picker-init-date.example.component */
      "aGW9");
      /* harmony import */


      var _date_picker_reactive_form_date_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../date-picker-reactive-form/date-picker-reactive-form.example.component */
      "KCze");
      /* harmony import */


      var _date_picker_date_range_date_picker_date_range_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../date-picker-date-range/date-picker-date-range.example.component */
      "Fj0R");
      /* harmony import */


      var _date_picker_init_mode_date_picker_init_mode_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../date-picker-init-mode/date-picker-init-mode.example.component */
      "uBnM");
      /* harmony import */


      var _date_picker_modes_range_date_picker_modes_range_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../date-picker-modes-range/date-picker-modes-range.example.component */
      "5eD4");
      /* harmony import */


      var _date_picker_year_range_date_picker_year_range_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../date-picker-year-range/date-picker-year-range.example.component */
      "/0bv");
      /* harmony import */


      var _date_picker_disable_date_date_picker_disable_date_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../date-picker-disable-date/date-picker-disable-date.example.component */
      "VzA4");
      /* harmony import */


      var _date_picker_formatting_date_picker_formatting_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../date-picker-formatting/date-picker-formatting.example.component */
      "ZlDf");
      /* harmony import */


      var _date_picker_insignificant_date_picker_insignificant_example_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../date-picker-insignificant/date-picker-insignificant.example.component */
      "RJ82");
      /* harmony import */


      var _date_picker_timezone_date_picker_timezone_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../date-picker-timezone/date-picker-timezone.example.component */
      "VWj0");

      var DatePickerDocsComponent = function DatePickerDocsComponent() {
        _classCallCheck(this, DatePickerDocsComponent);
      };

      DatePickerDocsComponent.ɵfac = function DatePickerDocsComponent_Factory(t) {
        return new (t || DatePickerDocsComponent)();
      };

      DatePickerDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerDocsComponent,
        selectors: [["nui-date-picker-docs-example"]],
        decls: 403,
        vars: 1,
        consts: [["href", "../interfaces/IDatePickerConfig.html", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "date-picker-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "date-picker-value-change", "exampleTitle", "Value Change Event"], ["filenamePrefix", "date-picker-calendar-navigated", "exampleTitle", "Calendar Navigated Event"], ["filenamePrefix", "date-picker-disabled", "exampleTitle", "Disabled"], ["filenamePrefix", "date-picker-with-error", "exampleTitle", "With Error"], ["filenamePrefix", "date-picker-inline", "exampleTitle", "Inline"], ["filenamePrefix", "date-picker-current-month", "exampleTitle", "Current Month"], ["filenamePrefix", "date-picker-show-weeks", "exampleTitle", "Show Weeks"], ["filenamePrefix", "date-picker-first-date-of-week", "exampleTitle", "First Day of the Week"], ["filenamePrefix", "date-picker-init-date", "exampleTitle", "Initial Date"], ["filenamePrefix", "date-picker-reactive-form", "exampleTitle", "Date Picker in a Reactive Form"], ["filenamePrefix", "date-picker-date-range", "exampleTitle", "Dates Range"], ["filenamePrefix", "date-picker-init-mode", "exampleTitle", "Modes"], ["filenamePrefix", "date-picker-modes-range", "exampleTitle", "Modes Range"], ["filenamePrefix", "date-picker-year-range", "exampleTitle", "Years Range"], ["href", "../interfaces/IDatePickerDisabledDates.html", "target", "_blank"], ["filenamePrefix", "date-picker-disable-date", "exampleTitle", "Disabled Dates"], ["href", "https://momentjs.com/docs/#/displaying/format/", "target", "_blank"], ["filenamePrefix", "date-picker-formatting", "exampleTitle", "Formatting"], ["filenamePrefix", "date-picker-insignificant", "exampleTitle", "Preserve Insignificant"], ["filenamePrefix", "date-picker-timezone", "exampleTitle", "Basic Usage"]],
        template: function DatePickerDocsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<nui-date-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " allows user to select a specific date. Date Picker consists of Date Input Field with Date Icon and Daily Calendar. Clicking on the date input field opens the daily calendar. The date field itself allows user to either type a specific date directly into the field or select a date using the calendar in the popover. Note: The input for this field is validated. Date picker supports various attributes for user configuration using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IDatePickerConfig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-message", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Note, BrowserAnimationModule is required to make DatePicker component work.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " NuiDatePickerModule ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " To implement a date picker you need to use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "<nui-date-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nui-date-picker-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Value Change Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " You can pass the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(valueChange)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " input to the date picker and perform an action when the selected date changes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "(valueChange)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " output emits ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Moment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " object.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nui-date-picker-value-change-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Calendar Navigated Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Every time one navigates the calendar back and forth using navigation arrows, the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(calendarNavigated)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " output is triggered to notify user with navigated date (first day of the month in a Moment format).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nui-example-wrapper", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "nui-date-picker-calendar-navigated-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "[isDisabled]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " input is used to disable the date picker input field.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nui-date-picker-disabled-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "With Error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "[isInErrorState]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " input is used to apply error state styles to the date picker.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "nui-date-picker-with-error-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " To make date picker inline you can use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "[inline]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-date-picker-inline-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Current Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " You can pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "[onlyCurrentMonth]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " input to show only the dates for the selected month in the day picker.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nui-example-wrapper", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nui-date-picker-current-month-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Show Weeks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " You can pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "[showWeeks]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " input to show weeks numbers from the start of the year.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nui-example-wrapper", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "nui-date-picker-show-weeks-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "First Day of the Week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " To set which day to use as the first day of the week use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "startingDay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " attribute. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "startingDay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " must be specified as a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " in the range ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, ", where ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Sunday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Saturday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nui-example-wrapper", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nui-date-picker-first-date-of-week-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Initial Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " To set an initial preselected date use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " input of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Moment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "nui-example-wrapper", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "nui-date-picker-init-date-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Date Picker in a Reactive Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "<nui-date-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " may be used in a reactive form by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "formControl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "nui-example-wrapper", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "nui-date-picker-reactive-forms-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Dates Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Attributes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "minDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "maxDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " are used to set a selectable range of dates, making other dates disabled. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "minDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "maxDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " must be specified as type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Moment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "nui-example-wrapper", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "nui-date-picker-date-range-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Modes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " To change initial date picker view mode use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "datepickerMode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " attribute of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "String");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, ". Supported values are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\"day\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " (default), ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\"month\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\"year\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "nui-example-wrapper", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "nui-date-picker-init-mode-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Modes Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " To set constraints on the date picker view modes use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "minMode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "maxMode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " attributes of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "String");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " in combination with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "datepickerMode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, ". Supported values are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "\"day\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\"month\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "\"year\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "nui-example-wrapper", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "nui-date-picker-modes-range-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Years Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " The attribute ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "yearRange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " is used to set the selectable range of years starting from the current year, making other years disabled. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "yearRange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " must be specified as a positive ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "nui-example-wrapper", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "nui-date-picker-year-range-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Disabled Dates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Attribute ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "dateDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "IDatePickerDisabledDates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " allows the user to specify an array of dates to be disabled for selection. The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " field of each array element specifies the date to be disabled, and the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " field allows the user to specify the mode: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "\"day\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " (default), ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\"month\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "\"year\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, ". For example, if ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " is set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\"day\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, ", only the specified date will be disabled. If ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " is set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\"month\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, ", the whole month of the specified date will be disabled. If ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " is set to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "\"year\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, ", the whole year of the specified date will be disabled. If current date is disabled - \"Today\" button of day picker will also be disabled.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "nui-example-wrapper", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "nui-date-picker-disable-date-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Formatting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " You can use custom formats to change the visualization of dates, days, months, years, and headings in the date picker. See ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Moment.js date formats");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " for more information about the construction of date formats. Use the following attributes of type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "String");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " to apply custom formats: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "dateFormat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " - textbox date format. The selected date or typed-in date, if valid, will be modified inline and displayed using this format. If the value of dateFormat is an invalid format, or if it isn't specified, it will be set to a default value of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\"DD MMM YYYY\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "formatDay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " - format of the days in the day picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "formatMonth");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " - format of the months in the month picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "formatYear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " - format of the years in the year picker and of the year picker title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "formatDayHeader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " - format of the day of the week in the week header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "formatDayTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " - format of the day picker title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "formatMonthTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " - format of the month picker title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Supported formats: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\"D MMM YY\": 3 Aug 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "\"D MMM YYYY\": 3 Aug 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "\"DD MMM YY\": 03 Aug 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "\"DD MMM YYYY\": 03 Aug 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "\"Do MMM YY\": 3rd Aug 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "\"Do MMM YYYY\": 3rd Aug 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\"MMM D, YY\": Aug 3, 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "\"MMM D, YYYY\": Aug 3, 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "\"MMM DD, YY\": Aug 03, 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\"MMM DD, YYYY\": Aug 03, 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "\"MMM Do, YY\": Aug 3rd, 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\"MMM Do, YYYY\": Aug 3rd, 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\"M/D/YY\": 8/3/18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "\"M/D/YYYY\": 8/3/2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "\"MM/DD/YY\": 08/03/18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "\"MM/DD/YYYY\": 08/03/2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "\"M-D-YY\": 8-3-18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "\"M-D-YYYY\": 8-3-2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "\"MM-DD-YY\": 08-03-18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "\"MM-DD-YYYY\": 08-03-2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "\"M D YY\": 8 3 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "\"M D YYYY\": 8 3 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\"MM DD YY\": 08 03 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "\"MM DD YYYY\": 08 03 2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "\"M.D.YY\": 8.3.18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "\"M.D.YYYY\": 8.3.2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "\"MM.DD.YY\": 08.03.18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "\"MM.DD.YYYY\": 08.03.2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "nui-example-wrapper", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "nui-date-picker-formatting-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Preserve Insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "[preserveInsignificant]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " input tells date picker whether to preserve the hours, minutes, seconds, and milliseconds of the date.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "nui-example-wrapper", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "nui-date-picker-insignificant-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Date Picker using in different timezones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " It's possible to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "DatePickerComponent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " in different timezones. To preserve timezone value set ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "handleTimezone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, " flag on the component to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "nui-example-wrapper", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "nui-date-picker-timezone-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _date_picker_basic_date_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerBasicExampleComponent"], _date_picker_value_change_date_picker_value_change_example_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerValueChangeExampleComponent"], _date_picker_calendar_navigated_date_picker_calendar_navigated_example_component__WEBPACK_IMPORTED_MODULE_5__["DatePickerCalendarNavigatedExampleComponent"], _date_picker_disabled_date_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_6__["DatePickerDisabledExampleComponent"], _date_picker_with_error_date_picker_with_error_example_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerWithErrorExampleComponent"], _date_picker_inline_date_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_8__["DatePickerInlineExampleComponent"], _date_picker_current_month_date_picker_current_month_example_component__WEBPACK_IMPORTED_MODULE_9__["DatePickerCurrentMonthExampleComponent"], _date_picker_show_weeks_date_picker_show_weeks_example_component__WEBPACK_IMPORTED_MODULE_10__["DatePickerShowWeeksExampleComponent"], _date_picker_first_date_of_week_date_picker_first_date_of_week_example_component__WEBPACK_IMPORTED_MODULE_11__["DatePickerFirstDateOfWeekExampleComponent"], _date_picker_init_date_date_picker_init_date_example_component__WEBPACK_IMPORTED_MODULE_12__["DatePickerInitDateExampleComponent"], _date_picker_reactive_form_date_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_13__["DatePickerReactiveFormExampleComponent"], _date_picker_date_range_date_picker_date_range_example_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerDateRangeExampleComponent"], _date_picker_init_mode_date_picker_init_mode_example_component__WEBPACK_IMPORTED_MODULE_15__["DatePickerInitModeExampleComponent"], _date_picker_modes_range_date_picker_modes_range_example_component__WEBPACK_IMPORTED_MODULE_16__["DatePickerModesRangeExampleComponent"], _date_picker_year_range_date_picker_year_range_example_component__WEBPACK_IMPORTED_MODULE_17__["DatePickerYearRangeExampleComponent"], _date_picker_disable_date_date_picker_disable_date_example_component__WEBPACK_IMPORTED_MODULE_18__["DatePickerDisableDateExampleComponent"], _date_picker_formatting_date_picker_formatting_example_component__WEBPACK_IMPORTED_MODULE_19__["DatePickerFormattingExampleComponent"], _date_picker_insignificant_date_picker_insignificant_example_component__WEBPACK_IMPORTED_MODULE_20__["DatePickerInsignificantExampleComponent"], _date_picker_timezone_date_picker_timezone_example_component__WEBPACK_IMPORTED_MODULE_21__["DatePickerTimezoneExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "3qsz":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-disable-date/date-picker-disable-date.example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qsz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IDatePickerDisabledDate } from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-disable-date-example\",\n    templateUrl: \"./date-picker-disable-date.example.component.html\",\n})\nexport class DatePickerDisableDateExampleComponent {\n    private currentDate = moment();\n    private yesterdayDate = this.currentDate.clone().add(-1, \"days\");\n    private tomorrowDate = this.currentDate.clone().add(1, \"days\");\n    private lastMonthDate = this.currentDate.clone().add(-1, \"months\");\n    private nextYearDate = this.currentDate.clone().add(1, \"years\");\n\n    public dateDisabled: IDatePickerDisabledDate[] = [\n        {\n            date: this.currentDate,\n            mode: \"day\",\n        },\n        {\n            date: this.yesterdayDate,\n            mode: \"day\",\n        },\n        {\n            date: this.tomorrowDate,\n            mode: \"day\",\n        },\n        {\n            date: this.lastMonthDate,\n            mode: \"month\",\n        },\n        {\n            date: this.nextYearDate,\n            mode: \"year\",\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "4+Q9":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-disabled/date-picker-disabled.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: DatePickerDisabledExampleComponent */

    /***/
    function Q9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDisabledExampleComponent", function () {
        return DatePickerDisabledExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerDisabledExampleComponent = function DatePickerDisabledExampleComponent() {
        _classCallCheck(this, DatePickerDisabledExampleComponent);
      };

      DatePickerDisabledExampleComponent.ɵfac = function DatePickerDisabledExampleComponent_Factory(t) {
        return new (t || DatePickerDisabledExampleComponent)();
      };

      DatePickerDisabledExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerDisabledExampleComponent,
        selectors: [["nui-date-picker-disabled-example"]],
        decls: 1,
        vars: 1,
        consts: [[3, "isDisabled"]],
        template: function DatePickerDisabledExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isDisabled", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "4+wy":
    /*!*********************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-calendar-navigated/date-picker-calendar-navigated.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: DatePickerCalendarNavigatedExampleComponent */

    /***/
    function wy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerCalendarNavigatedExampleComponent", function () {
        return DatePickerCalendarNavigatedExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerCalendarNavigatedExampleComponent = /*#__PURE__*/function () {
        function DatePickerCalendarNavigatedExampleComponent() {
          _classCallCheck(this, DatePickerCalendarNavigatedExampleComponent);
        }

        _createClass(DatePickerCalendarNavigatedExampleComponent, [{
          key: "dateChanged",
          value: function dateChanged(event) {
            this.calendarChangedDate = new Date(event.valueOf());
          }
        }]);

        return DatePickerCalendarNavigatedExampleComponent;
      }();

      DatePickerCalendarNavigatedExampleComponent.ɵfac = function DatePickerCalendarNavigatedExampleComponent_Factory(t) {
        return new (t || DatePickerCalendarNavigatedExampleComponent)();
      };

      DatePickerCalendarNavigatedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerCalendarNavigatedExampleComponent,
        selectors: [["nui-date-picker-calendar-navigated-example"]],
        decls: 10,
        vars: 2,
        consts: [["id", "nui-demo-datepicker-value-change", 3, "inline", "calendarNavigated"]],
        template: function DatePickerCalendarNavigatedExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Press the calendar navigation arrows to trigger the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "calendarNavigated");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Navigated to date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-date-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("calendarNavigated", function DatePickerCalendarNavigatedExampleComponent_Template_nui_date_picker_calendarNavigated_9_listener($event) {
              return ctx.dateChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.calendarChangedDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "5D8B":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-formatting/date-picker-formatting.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [value]=\"initDate\"\n    dateFormat=\"MM/DD/YY\"\n    formatDay=\"Do\"\n    formatMonth=\"MMM\"\n    formatYear=\"YY\"\n    formatDayHeader=\"ddd\"\n    formatDayTitle=\"MMM YY\"\n    formatMonthTitle=\"YY\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "5eD4":
    /*!*******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-modes-range/date-picker-modes-range.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: DatePickerModesRangeExampleComponent */

    /***/
    function eD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerModesRangeExampleComponent", function () {
        return DatePickerModesRangeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerModesRangeExampleComponent = function DatePickerModesRangeExampleComponent() {
        _classCallCheck(this, DatePickerModesRangeExampleComponent);
      };

      DatePickerModesRangeExampleComponent.ɵfac = function DatePickerModesRangeExampleComponent_Factory(t) {
        return new (t || DatePickerModesRangeExampleComponent)();
      };

      DatePickerModesRangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerModesRangeExampleComponent,
        selectors: [["nui-date-picker-modes-range-example"]],
        decls: 1,
        vars: 1,
        consts: [["datepickerMode", "year", "minMode", "month", "maxMode", "year", 3, "inline"]],
        template: function DatePickerModesRangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "6/+n":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-test/date-picker-test.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup } from \"@angular/forms\";\nimport { IDatePickerDisabledDate } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-test\",\n    templateUrl: \"./date-picker-test.component.html\",\n})\nexport class DatePickerTestComponent implements OnInit {\n    public dt: Moment;\n    public dtPreserve: Moment;\n    public minDate: Moment;\n    public maxDate: Moment;\n    public localActiveDate: Moment;\n    public localActiveDatePreserve: Moment;\n    public localActiveDateMinMax: Moment;\n    public localActiveDateDisabledDates: Moment;\n    public initDate: Moment;\n    public initDatePreserve: Moment;\n    public month: number;\n    public year: number;\n    public caption: string;\n    public reactiveDatepickerForm: FormGroup;\n    public dateDisabled: IDatePickerDisabledDate[];\n    public todayDateDisabled: IDatePickerDisabledDate[];\n\n    constructor(private formBuilder: FormBuilder) {\n        this.dt = moment();\n        this.dtPreserve = moment();\n        this.localActiveDate = this.dt;\n        this.localActiveDatePreserve = this.dtPreserve;\n        this.localActiveDateMinMax = this.dt;\n        this.localActiveDateDisabledDates = this.dt;\n        this.month = this.dt.month() + 1;\n        this.year = this.dt.year();\n        this.minDate = moment({year: this.year, month: this.month - 1, date: 5});\n        this.maxDate = moment({year: this.year, month: this.month - 1, date: 25});\n        this.caption = \"Custom caption for date-picker\";\n        this.initDate = moment().utcOffset(0).hour(23).minute(15).add(1, \"day\");\n        this.initDatePreserve = this.initDate;\n        this.dateDisabled = [\n            {\n                date: moment({year: this.year, month: this.month - 1, date: 10}),\n                mode: \"day\",\n            },\n            {\n                date: moment({year: this.year, month: this.month - 1, date: 11}),\n                mode: \"day\",\n            },\n            {\n                date: moment({year: this.year, month: this.month - 1, date: 12}),\n                mode: \"day\",\n            },\n            {\n                date: moment({year: this.year, month: this.month, date: 12}),\n                mode: \"month\",\n            },\n            {\n                date: moment({year: this.year + 1, month: this.month - 1, date: 12}),\n                mode: \"year\",\n            },\n        ];\n        this.todayDateDisabled = [\n            {\n                date: this.dt,\n                mode: \"day\",\n            },\n        ];\n    }\n\n    ngOnInit() {\n        this.reactiveDatepickerForm = this.formBuilder.group({\n            datePicker: this.formBuilder.control(moment()),\n        });\n    }\n\n    public dateChanged(event: any) {\n        this.localActiveDate = event;\n    }\n\n    public dateChangedPreserved(event: any) {\n        this.localActiveDatePreserve = event;\n    }\n\n    public dateChangedMinMax(event: any) {\n        this.localActiveDateMinMax = event;\n    }\n\n    public dateChangedDisabledDates(event: any) {\n        this.localActiveDateDisabledDates = event;\n    }\n\n    public initDateChangedPreserved(event: any) {\n        this.initDatePreserve = event;\n    }\n}\n";
      /***/
    },

    /***/
    "6fBh":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-init-mode/date-picker-init-mode.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fBh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-init-mode-example\",\n    templateUrl: \"./date-picker-init-mode.example.component.html\",\n})\nexport class DatePickerInitModeExampleComponent {\n}\n";
      /***/
    },

    /***/
    "84eC":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-reactive-form/date-picker-reactive-form.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl, Validators } from \"@angular/forms\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-reactive-forms-example\",\n    templateUrl: \"./date-picker-reactive-form.example.component.html\",\n})\n\nexport class DatePickerReactiveFormExampleComponent {\n    public dt: Moment = moment();\n    public selectedDate: Date = new Date(this.dt.valueOf());\n    public control = new FormControl(this.dt, Validators.required);\n\n    constructor() {}\n\n    onValueChange(event: Moment) {\n        this.selectedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "BW+c":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-year-range/date-picker-year-range.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BWC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\"\n    datepickerMode=\"year\"\n    [yearRange]=\"5\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "CE59":
    /*!**************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**************************************************************************************************************/

    /*! no static exports found */

    /***/
    function CE59(module, exports, __webpack_require__) {
      var map = {
        "./date-picker-basic/date-picker-basic.example.component.html": "bbBs",
        "./date-picker-basic/date-picker-basic.example.component.ts": "UTQn",
        "./date-picker-calendar-navigated/date-picker-calendar-navigated.example.component.html": "ss+P",
        "./date-picker-calendar-navigated/date-picker-calendar-navigated.example.component.ts": "T/Ob",
        "./date-picker-current-month/date-picker-current-month.example.component.html": "d8hO",
        "./date-picker-current-month/date-picker-current-month.example.component.ts": "2rwc",
        "./date-picker-date-range/date-picker-date-range.example.component.html": "T7yO",
        "./date-picker-date-range/date-picker-date-range.example.component.ts": "2hRs",
        "./date-picker-disable-date/date-picker-disable-date.example.component.html": "yC3A",
        "./date-picker-disable-date/date-picker-disable-date.example.component.ts": "3qsz",
        "./date-picker-disabled/date-picker-disabled.example.component.html": "w+22",
        "./date-picker-disabled/date-picker-disabled.example.component.ts": "X8Zs",
        "./date-picker-docs/date-picker-docs.example.component.html": "ZTgF",
        "./date-picker-docs/date-picker-docs.example.component.ts": "0w1E",
        "./date-picker-first-date-of-week/date-picker-first-date-of-week.example.component.html": "MDnm",
        "./date-picker-first-date-of-week/date-picker-first-date-of-week.example.component.ts": "QH8W",
        "./date-picker-formatting/date-picker-formatting.example.component.html": "5D8B",
        "./date-picker-formatting/date-picker-formatting.example.component.ts": "+H9U",
        "./date-picker-init-date/date-picker-init-date.example.component.html": "RWCo",
        "./date-picker-init-date/date-picker-init-date.example.component.ts": "FBde",
        "./date-picker-init-mode/date-picker-init-mode.example.component.html": "KH2+",
        "./date-picker-init-mode/date-picker-init-mode.example.component.ts": "6fBh",
        "./date-picker-inline/date-picker-inline.example.component.html": "Zqd+",
        "./date-picker-inline/date-picker-inline.example.component.ts": "DY4x",
        "./date-picker-insignificant/date-picker-insignificant.example.component.html": "s2l4",
        "./date-picker-insignificant/date-picker-insignificant.example.component.ts": "nmCD",
        "./date-picker-modes-range/date-picker-modes-range.example.component.html": "0pH0",
        "./date-picker-modes-range/date-picker-modes-range.example.component.ts": "2Ak0",
        "./date-picker-reactive-form/date-picker-reactive-form.example.component.html": "nSfH",
        "./date-picker-reactive-form/date-picker-reactive-form.example.component.ts": "84eC",
        "./date-picker-show-weeks/date-picker-show-weeks.example.component.html": "OtdL",
        "./date-picker-show-weeks/date-picker-show-weeks.example.component.ts": "Pygo",
        "./date-picker-test/date-picker-test.component.html": "3Prd",
        "./date-picker-test/date-picker-test.component.ts": "6/+n",
        "./date-picker-timezone/date-picker-timezone.example.component.html": "nsEz",
        "./date-picker-timezone/date-picker-timezone.example.component.ts": "WZiT",
        "./date-picker-value-change/date-picker-value-change.example.component.html": "fa0T",
        "./date-picker-value-change/date-picker-value-change.example.component.ts": "iKET",
        "./date-picker-visual-test/date-picker-visual-test.component.html": "zAeW",
        "./date-picker-visual-test/date-picker-visual-test.component.ts": "ynJR",
        "./date-picker-with-error/date-picker-with-error.example.component.html": "Irzz",
        "./date-picker-with-error/date-picker-with-error.example.component.ts": "FhQQ",
        "./date-picker-year-range/date-picker-year-range.example.component.html": "BW+c",
        "./date-picker-year-range/date-picker-year-range.example.component.ts": "TQHA",
        "./date-picker.module.ts": "hLUF",
        "./index.ts": "YNIE"
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
      webpackContext.id = "CE59";
      /***/
    },

    /***/
    "DY4x":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-inline/date-picker-inline.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DY4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-inline-example\",\n    templateUrl: \"./date-picker-inline.example.component.html\",\n})\nexport class DatePickerInlineExampleComponent {\n}\n";
      /***/
    },

    /***/
    "FBde":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-init-date/date-picker-init-date.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FBde(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-init-date-example\",\n    templateUrl: \"./date-picker-init-date.example.component.html\",\n})\nexport class DatePickerInitDateExampleComponent {\n    public initDate: Moment = moment(\"2018-08-04\");\n}\n";
      /***/
    },

    /***/
    "FhQQ":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-with-error/date-picker-with-error.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FhQQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-with-error-example\",\n    templateUrl: \"./date-picker-with-error.example.component.html\",\n})\nexport class DatePickerWithErrorExampleComponent {\n}\n";
      /***/
    },

    /***/
    "Fj0R":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-date-range/date-picker-date-range.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DatePickerDateRangeExampleComponent */

    /***/
    function Fj0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDateRangeExampleComponent", function () {
        return DatePickerDateRangeExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerDateRangeExampleComponent = function DatePickerDateRangeExampleComponent() {
        _classCallCheck(this, DatePickerDateRangeExampleComponent);

        this.currentDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
        this.minDate = this.currentDate.clone().date(5);
        this.maxDate = this.currentDate.clone().date(25);
      };

      DatePickerDateRangeExampleComponent.ɵfac = function DatePickerDateRangeExampleComponent_Factory(t) {
        return new (t || DatePickerDateRangeExampleComponent)();
      };

      DatePickerDateRangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatePickerDateRangeExampleComponent,
        selectors: [["nui-date-picker-date-range-example"]],
        decls: 1,
        vars: 2,
        consts: [[3, "minDate", "maxDate"]],
        template: function DatePickerDateRangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx.minDate)("maxDate", ctx.maxDate);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Irzz":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-with-error/date-picker-with-error.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Irzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [isInErrorState]=\"true\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "KCze":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-reactive-form/date-picker-reactive-form.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: DatePickerReactiveFormExampleComponent */

    /***/
    function KCze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerReactiveFormExampleComponent", function () {
        return DatePickerReactiveFormExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");
      /* harmony import */


      var _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/validation-message/validation-message.component */
      "Dm7Q");

      var DatePickerReactiveFormExampleComponent = /*#__PURE__*/function () {
        function DatePickerReactiveFormExampleComponent() {
          _classCallCheck(this, DatePickerReactiveFormExampleComponent);

          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();
          this.selectedDate = new Date(this.dt.valueOf());
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dt, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        }

        _createClass(DatePickerReactiveFormExampleComponent, [{
          key: "onValueChange",
          value: function onValueChange(event) {
            this.selectedDate = new Date(event.valueOf());
          }
        }]);

        return DatePickerReactiveFormExampleComponent;
      }();

      DatePickerReactiveFormExampleComponent.ɵfac = function DatePickerReactiveFormExampleComponent_Factory(t) {
        return new (t || DatePickerReactiveFormExampleComponent)();
      };

      DatePickerReactiveFormExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DatePickerReactiveFormExampleComponent,
        selectors: [["nui-date-picker-reactive-forms-example"]],
        decls: 15,
        vars: 6,
        consts: [[1, "demo-options-section"], ["caption", "Date Picker", 3, "control"], [3, "formControl", "valueChange"], ["for", "required"], ["for", "invalidFormat"], [1, "mt-2"]],
        template: function DatePickerReactiveFormExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-date-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerReactiveFormExampleComponent_Template_nui_date_picker_valueChange_2_listener($event) {
              return ctx.onValueChange($event);
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
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_validation_message_validation_message_component__WEBPACK_IMPORTED_MODULE_5__["ValidationMessageComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "KH2+":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-init-mode/date-picker-init-mode.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\"\n    datepickerMode=\"month\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "MDnm":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-first-date-of-week/date-picker-first-date-of-week.example.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MDnm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\"\n    [startingDay]=\"5\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "NPB/":
    /*!***********************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-visual-test/date-picker-visual-test.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DatePickerVisualTestComponent */

    /***/
    function NPB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerVisualTestComponent", function () {
        return DatePickerVisualTestComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerVisualTestComponent = /*#__PURE__*/function () {
        function DatePickerVisualTestComponent(formBuilder) {
          _classCallCheck(this, DatePickerVisualTestComponent);

          this.formBuilder = formBuilder;
          this.initDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()().set({
            year: 2017,
            month: 11,
            date: 23,
            hour: 15,
            minute: 30
          });
          this.emptyDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()("");
        }

        _createClass(DatePickerVisualTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.formBuilder.group({
              datePickerFormControl: this.formBuilder.control(this.emptyDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }]);

        return DatePickerVisualTestComponent;
      }();

      DatePickerVisualTestComponent.ɵfac = function DatePickerVisualTestComponent_Factory(t) {
        return new (t || DatePickerVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      DatePickerVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DatePickerVisualTestComponent,
        selectors: [["date-picker-visual-test"]],
        decls: 77,
        vars: 31,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "nui-basic-usage-datepicker", 3, "value", "preserveInsignificant"], ["id", "nui-disabled-datepicker", 3, "value", "isDisabled", "preserveInsignificant"], [3, "formGroup"], [1, "form-group"], ["id", "nui-error-state-datepicker", "formControlName", "datePickerFormControl", 3, "preserveInsignificant", "isInErrorState"], ["id", "nui-inline-state-datepicker", 3, "value", "inline", "preserveInsignificant"], ["id", "nui-current-month-state-datepicker", 3, "value", "inline", "onlyCurrentMonth", "preserveInsignificant"], ["id", "nui-show-weeks-datepicker", 3, "value", "showWeeks", "inline", "preserveInsignificant"], ["id", "nui-modes-month-state-datepicker", "datepickerMode", "month", 3, "value", "inline", "preserveInsignificant"], ["id", "nui-modes-year-state-datepicker", "datepickerMode", "year", 3, "value", "inline", "preserveInsignificant"], ["id", "nui-modes-year-range-datepicker", "datepickerMode", "year", 3, "value", "inline", "yearRange"], ["id", "nui-formatting-state-datepicker", "formatDay", "Do", "formatMonth", "MMM", "formatYear", "YY", "formatDayHeader", "ddd", "formatDayTitle", "MMM YY", "formatMonthTitle", "YY", 3, "value", "inline", "preserveInsignificant"]],
        template: function DatePickerVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "nui-date-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "nui-date-picker", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Error State");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "nui-date-picker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Inline State");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "nui-date-picker", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Current Month State");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "nui-date-picker", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Show Weeks");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "nui-date-picker", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Modes (month)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "nui-date-picker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Modes (year)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "nui-date-picker", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Years Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "nui-date-picker", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " [preserveInsignificant]=\"true\"> ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Formatting");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "nui-date-picker", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("isDisabled", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preserveInsignificant", true)("isInErrorState", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("inline", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("inline", true)("onlyCurrentMonth", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("showWeeks", true)("inline", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("inline", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("inline", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("inline", true)("yearRange", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("inline", true)("preserveInsignificant", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "OtdL":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-show-weeks/date-picker-show-weeks.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OtdL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\"\n    [showWeeks]=\"true\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "Pygo":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-show-weeks/date-picker-show-weeks.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Pygo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-show-weeks-example\",\n    templateUrl: \"./date-picker-show-weeks.example.component.html\",\n})\nexport class DatePickerShowWeeksExampleComponent {\n}\n";
      /***/
    },

    /***/
    "QH8W":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-first-date-of-week/date-picker-first-date-of-week.example.component.ts ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QH8W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-first-date-of-week-example\",\n    templateUrl: \"./date-picker-first-date-of-week.example.component.html\",\n})\nexport class DatePickerFirstDateOfWeekExampleComponent {\n}\n";
      /***/
    },

    /***/
    "RJ82":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-insignificant/date-picker-insignificant.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: DatePickerInsignificantExampleComponent */

    /***/
    function RJ82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInsignificantExampleComponent", function () {
        return DatePickerInsignificantExampleComponent;
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


      var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerInsignificantExampleComponent = /*#__PURE__*/function () {
        function DatePickerInsignificantExampleComponent(toastService) {
          _classCallCheck(this, DatePickerInsignificantExampleComponent);

          this.toastService = toastService;
          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf("day");
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.dt);
        }

        _createClass(DatePickerInsignificantExampleComponent, [{
          key: "dateChanged",
          value: function dateChanged(event) {
            this.selectedDate = new Date(event.valueOf());
            this.toastService.info({
              message: $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Selected date: ", ""])), event.toString())
            });
          }
        }]);

        return DatePickerInsignificantExampleComponent;
      }();

      DatePickerInsignificantExampleComponent.ɵfac = function DatePickerInsignificantExampleComponent_Factory(t) {
        return new (t || DatePickerInsignificantExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ToastService"]));
      };

      DatePickerInsignificantExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DatePickerInsignificantExampleComponent,
        selectors: [["nui-date-picker-insignificant-example"]],
        decls: 6,
        vars: 5,
        consts: [[3, "formControl", "inline", "preserveInsignificant", "valueChange"], [1, "mt-2"]],
        template: function DatePickerInsignificantExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-date-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function DatePickerInsignificantExampleComponent_Template_nui_date_picker_valueChange_0_listener($event) {
              return ctx.dateChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.control)("inline", true)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Value: ", ctx.selectedDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Control Value: ", ctx.control.value.toISOString(), "");
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "RWCo":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-init-date/date-picker-init-date.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RWCo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker [value]=\"initDate\"></nui-date-picker>\n";
      /***/
    },

    /***/
    "T/Ob":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-calendar-navigated/date-picker-calendar-navigated.example.component.ts ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TOb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-calendar-navigated-example\",\n    templateUrl: \"./date-picker-calendar-navigated.example.component.html\",\n})\nexport class DatePickerCalendarNavigatedExampleComponent {\n    public calendarChangedDate: Date;\n\n    public dateChanged(event: Moment) {\n        this.calendarChangedDate = new Date(event.valueOf());\n    }\n}\n";
      /***/
    },

    /***/
    "T7yO":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-date-range/date-picker-date-range.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T7yO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [minDate]=\"minDate\"\n    [maxDate]=\"maxDate\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "TQHA":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-year-range/date-picker-year-range.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TQHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-year-range-example\",\n    templateUrl: \"./date-picker-year-range.example.component.html\",\n})\nexport class DatePickerYearRangeExampleComponent {\n}\n";
      /***/
    },

    /***/
    "UTQn":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-basic/date-picker-basic.example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UTQn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-basic-example\",\n    templateUrl: \"./date-picker-basic.example.component.html\",\n})\nexport class DatePickerBasicExampleComponent {\n}\n";
      /***/
    },

    /***/
    "VWj0":
    /*!*************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-timezone/date-picker-timezone.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: DatePickerTimezoneExampleComponent */

    /***/
    function VWj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerTimezoneExampleComponent", function () {
        return DatePickerTimezoneExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");
      /* harmony import */


      var _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/select/combobox/combobox.component */
      "KXc3");

      var zonesData = __webpack_require__(
      /*! moment-timezone/data/packed/latest.json */
      "bNI1");

      moment_timezone__WEBPACK_IMPORTED_MODULE_1___default.a.tz.add(zonesData.zones);

      var DatePickerTimezoneExampleComponent = /*#__PURE__*/function () {
        function DatePickerTimezoneExampleComponent() {
          _classCallCheck(this, DatePickerTimezoneExampleComponent);

          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
          this.zones = zonesData.zones.map(function (z) {
            return z.split("|")[0];
          });
          this.displayedZones = this.zones;
          this.initialZone = "Australia/Sydney";
          this.control.setValue(this.control.value.tz(this.initialZone));
        }

        _createClass(DatePickerTimezoneExampleComponent, [{
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

        return DatePickerTimezoneExampleComponent;
      }();

      DatePickerTimezoneExampleComponent.ɵfac = function DatePickerTimezoneExampleComponent_Factory(t) {
        return new (t || DatePickerTimezoneExampleComponent)();
      };

      DatePickerTimezoneExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DatePickerTimezoneExampleComponent,
        selectors: [["nui-date-picker-timezone-example"]],
        decls: 6,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_DATE_PICKER_DATE_PICKER_TIMEZONE_DATE_PICKER_TIMEZONE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Select item");
            i18n_0 = MSG_EXTERNAL_7558413604919060916$$DEMO_SRC_COMPONENTS_DEMO_DATE_PICKER_DATE_PICKER_TIMEZONE_DATE_PICKER_TIMEZONE_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([":\u241F67f44542ec05ae560bd4a45c9e26a0d834489f4a\u241F7558413604919060916:Select item"])));
          }

          return [[1, "demo-options-section"], ["caption", "Date Picker", 3, "control"], [3, "formControl", "handleTimezone"], [1, "mt-2"], ["placeholder", i18n_0, 3, "itemsSource", "value", "changed"]];
        },
        template: function DatePickerTimezoneExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-date-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-combobox", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function DatePickerTimezoneExampleComponent_Template_nui_combobox_changed_5_listener($event) {
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
        directives: [_src_lib_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__["FormFieldComponent"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _src_lib_select_combobox_combobox_component__WEBPACK_IMPORTED_MODULE_5__["ComboboxComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "VzA4":
    /*!*********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-disable-date/date-picker-disable-date.example.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: DatePickerDisableDateExampleComponent */

    /***/
    function VzA4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDisableDateExampleComponent", function () {
        return DatePickerDisableDateExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerDisableDateExampleComponent = function DatePickerDisableDateExampleComponent() {
        _classCallCheck(this, DatePickerDisableDateExampleComponent);

        this.currentDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
        this.yesterdayDate = this.currentDate.clone().add(-1, "days");
        this.tomorrowDate = this.currentDate.clone().add(1, "days");
        this.lastMonthDate = this.currentDate.clone().add(-1, "months");
        this.nextYearDate = this.currentDate.clone().add(1, "years");
        this.dateDisabled = [{
          date: this.currentDate,
          mode: "day"
        }, {
          date: this.yesterdayDate,
          mode: "day"
        }, {
          date: this.tomorrowDate,
          mode: "day"
        }, {
          date: this.lastMonthDate,
          mode: "month"
        }, {
          date: this.nextYearDate,
          mode: "year"
        }];
      };

      DatePickerDisableDateExampleComponent.ɵfac = function DatePickerDisableDateExampleComponent_Factory(t) {
        return new (t || DatePickerDisableDateExampleComponent)();
      };

      DatePickerDisableDateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatePickerDisableDateExampleComponent,
        selectors: [["nui-date-picker-disable-date-example"]],
        decls: 1,
        vars: 1,
        consts: [[3, "disabledDates"]],
        template: function DatePickerDisableDateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabledDates", ctx.dateDisabled);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "WZiT":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-timezone/date-picker-timezone.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WZiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { FormControl, Validators } from \"@angular/forms\";\nimport { ISelectChangedEvent } from \"@nova-ui/bits\";\nimport moment from \"moment-timezone\";\n\nconst zonesData = require(\"moment-timezone/data/packed/latest.json\");\nmoment.tz.add(zonesData.zones);\n\n@Component({\n    selector: \"nui-date-picker-timezone-example\",\n    templateUrl: \"./date-picker-timezone.example.component.html\",\n})\nexport class DatePickerTimezoneExampleComponent {\n    public control = new FormControl(moment(), Validators.required);\n    get selectedDate() { return this.control.value.toString(); }\n    public zones: string[] = zonesData.zones.map((z: string) => z.split(\"|\")[0]);\n    public displayedZones = this.zones;\n    public initialZone = \"Australia/Sydney\";\n\n    constructor() {\n        this.control.setValue(this.control.value.tz(this.initialZone));\n    }\n\n    public textboxChanged(searchQuery: ISelectChangedEvent<any>) {\n        const val = searchQuery.newValue;\n        this.displayedZones = this.zones.filter(z => z.toLowerCase().includes(val.toLowerCase()));\n\n        if (this.zones.find(z => z === val)) {\n            this.control.setValue(this.control.value.tz(val));\n        }\n    }\n}\n";
      /***/
    },

    /***/
    "X8Zs":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-disabled/date-picker-disabled.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X8Zs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-date-picker-disabled-example\",\n    templateUrl: \"./date-picker-disabled.example.component.html\",\n})\nexport class DatePickerDisabledExampleComponent {\n}\n";
      /***/
    },

    /***/
    "YNIE":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/index.ts ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function YNIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./date-picker-basic/date-picker-basic.example.component\";\nexport * from \"./date-picker-current-month/date-picker-current-month.example.component\";\nexport * from \"./date-picker-date-range/date-picker-date-range.example.component\";\nexport * from \"./date-picker-disable-date/date-picker-disable-date.example.component\";\nexport * from \"./date-picker-disabled/date-picker-disabled.example.component\";\nexport * from \"./date-picker-docs/date-picker-docs.example.component\";\nexport * from \"./date-picker-first-date-of-week/date-picker-first-date-of-week.example.component\";\nexport * from \"./date-picker-formatting/date-picker-formatting.example.component\";\nexport * from \"./date-picker-init-date/date-picker-init-date.example.component\";\nexport * from \"./date-picker-init-mode/date-picker-init-mode.example.component\";\nexport * from \"./date-picker-inline/date-picker-inline.example.component\";\nexport * from \"./date-picker-insignificant/date-picker-insignificant.example.component\";\nexport * from \"./date-picker-modes-range/date-picker-modes-range.example.component\";\nexport * from \"./date-picker-show-weeks/date-picker-show-weeks.example.component\";\nexport * from \"./date-picker-value-change/date-picker-value-change.example.component\";\nexport * from \"./date-picker-with-error/date-picker-with-error.example.component\";\nexport * from \"./date-picker-year-range/date-picker-year-range.example.component\";\nexport * from \"./date-picker-test/date-picker-test.component\";\nexport * from \"./date-picker-visual-test/date-picker-visual-test.component\";\nexport * from \"./date-picker-calendar-navigated/date-picker-calendar-navigated.example.component\";\nexport * from \"./date-picker-reactive-form/date-picker-reactive-form.example.component\";\nexport * from \"./date-picker-timezone/date-picker-timezone.example.component\";\n\n";
      /***/
    },

    /***/
    "ZTgF":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-docs/date-picker-docs.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZTgF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    <code>&lt;nui-date-picker&gt;</code> allows user to select a specific date. Date Picker consists of Date Input Field with\n    Date Icon and Daily Calendar. Clicking on the date input field opens the daily calendar. The date field itself\n    allows user to either type a specific date directly into the field or select a date using the calendar in the\n    popover. Note: The input for this field is validated. Date picker supports various attributes for user configuration\n    using <code><a href=\"../interfaces/IDatePickerConfig.html\" target=\"_blank\">IDatePickerConfig</a></code>.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">Note, BrowserAnimationModule is required to make DatePicker component work.</nui-message>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code> NuiDatePickerModule </code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To implement a date picker you need to use the <code>&lt;nui-date-picker&gt;</code> component.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-basic\" exampleTitle=\"Basic Usage\">\n    <nui-date-picker-basic-example></nui-date-picker-basic-example>\n</nui-example-wrapper>\n\n<h2>Value Change Event</h2>\n<p>\n    You can pass the <code>(valueChange)</code> input to the date picker and perform an action\n    when the selected date changes. <code>(valueChange)</code> output emits <code>Moment</code> object.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-value-change\" exampleTitle=\"Value Change Event\">\n    <nui-date-picker-value-change-example></nui-date-picker-value-change-example>\n</nui-example-wrapper>\n\n<h2>Calendar Navigated Event</h2>\n<p>\n    Every time one navigates the calendar back and forth using navigation arrows, the <code>(calendarNavigated)</code> output is triggered\n    to notify user with navigated date (first day of the month in a Moment format).\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-calendar-navigated\" exampleTitle=\"Calendar Navigated Event\">\n    <nui-date-picker-calendar-navigated-example></nui-date-picker-calendar-navigated-example>\n</nui-example-wrapper>\n\n<h2>Disabled</h2>\n<p>\n    <code>[isDisabled]=\"true\"</code> input is used to disable the date picker input field.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-disabled\" exampleTitle=\"Disabled\">\n    <nui-date-picker-disabled-example></nui-date-picker-disabled-example>\n</nui-example-wrapper>\n\n<h2>With Error</h2>\n<p>\n    <code>[isInErrorState]=\"true\"</code> input is used to apply error state styles to the date picker.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-with-error\" exampleTitle=\"With Error\">\n    <nui-date-picker-with-error-example></nui-date-picker-with-error-example>\n</nui-example-wrapper>\n\n<h2>Inline</h2>\n<p>\n    To make date picker inline you can use <code>[inline]=\"true\"</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-inline\" exampleTitle=\"Inline\">\n    <nui-date-picker-inline-example></nui-date-picker-inline-example>\n</nui-example-wrapper>\n\n<h2>Current Month</h2>\n<p>\n    You can pass <code>[onlyCurrentMonth]=\"true\"</code> input to show only the dates for the selected\n    month in the day picker.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-current-month\" exampleTitle=\"Current Month\">\n    <nui-date-picker-current-month-example></nui-date-picker-current-month-example>\n</nui-example-wrapper>\n\n<h2>Show Weeks</h2>\n<p>\n    You can pass <code>[showWeeks]=\"true\"</code> input to show weeks numbers from the start of the year.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-show-weeks\" exampleTitle=\"Show Weeks\">\n    <nui-date-picker-show-weeks-example></nui-date-picker-show-weeks-example>\n</nui-example-wrapper>\n\n<h2>First Day of the Week</h2>\n<p>\n    To set which day to use as the first day of the week use the <code>startingDay</code> attribute.\n    <code>startingDay</code> must be specified as a <code>Number</code> in the range <b>0</b> to <b>6</b>,\n    where <b>0</b> is <b>Sunday</b> and <b>6</b> is <b>Saturday</b>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-first-date-of-week\" exampleTitle=\"First Day of the Week\">\n    <nui-date-picker-first-date-of-week-example></nui-date-picker-first-date-of-week-example>\n</nui-example-wrapper>\n\n<h2>Initial Date</h2>\n<p>\n    To set an initial preselected date use the <code>value</code> input of type <code>Moment</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-init-date\" exampleTitle=\"Initial Date\">\n    <nui-date-picker-init-date-example></nui-date-picker-init-date-example>\n</nui-example-wrapper>\n\n<h2>Date Picker in a Reactive Form</h2>\n<p>\n    <code>&lt;nui-date-picker&gt;</code> may be used in a reactive form by setting the <code>formControl</code> input.\n</p>\n<nui-example-wrapper\n    filenamePrefix=\"date-picker-reactive-form\"\n    exampleTitle=\"Date Picker in a Reactive Form\">\n    <nui-date-picker-reactive-forms-example></nui-date-picker-reactive-forms-example>\n</nui-example-wrapper>\n\n<h2>Dates Range</h2>\n<p>\n    Attributes <code>minDate</code> and <code>maxDate</code> are used to set a selectable range of dates,\n    making other dates disabled. <code>minDate</code> and <code>maxDate</code> must be specified as\n    type <code>Moment</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-date-range\" exampleTitle=\"Dates Range\">\n    <nui-date-picker-date-range-example></nui-date-picker-date-range-example>\n</nui-example-wrapper>\n\n<h2>Modes</h2>\n<p>\n    To change initial date picker view mode use <code>datepickerMode</code> attribute of type <code>String</code>.\n    Supported values are <b>\"day\"</b> (default), <b>\"month\"</b> and <b>\"year\"</b>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-init-mode\" exampleTitle=\"Modes\">\n    <nui-date-picker-init-mode-example></nui-date-picker-init-mode-example>\n</nui-example-wrapper>\n\n<h2>Modes Range</h2>\n<p>\n    To set constraints on the date picker view modes use the <code>minMode</code> and <code>maxMode</code> attributes\n    of type <code>String</code> in combination with <code>datepickerMode</code>.\n    Supported values are <b>\"day\"</b>, <b>\"month\"</b> and <b>\"year\"</b>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-modes-range\" exampleTitle=\"Modes Range\">\n    <nui-date-picker-modes-range-example></nui-date-picker-modes-range-example>\n</nui-example-wrapper>\n\n<h2>Years Range</h2>\n<p>\n    The attribute <code>yearRange</code> is used to set the selectable range of years starting from the current year,\n    making other years disabled. <code>yearRange</code> must be specified as a positive <code>Number</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-year-range\" exampleTitle=\"Years Range\">\n    <nui-date-picker-year-range-example></nui-date-picker-year-range-example>\n</nui-example-wrapper>\n\n<h2>Disabled Dates</h2>\n<p>\n    Attribute <code>dateDisabled</code> of type\n    <code><a href=\"../interfaces/IDatePickerDisabledDates.html\" target=\"_blank\">IDatePickerDisabledDates</a></code>\n    allows the user to specify an array of dates to be disabled for selection. The <code>date</code> field of each\n    array element specifies the date to be disabled, and the <code>mode</code> field allows the user to specify the\n    mode: <b>\"day\"</b> (default), <b>\"month\"</b> or <b>\"year\"</b>. For example, if <code>mode</code> is set to\n    <b>\"day\"</b>, only the specified date will be disabled. If <code>mode</code> is set to <b>\"month\"</b>, the whole\n    month of the specified date will be disabled. If <code>mode</code> is set to <b>\"year\"</b>, the whole year of the\n    specified date will be disabled. If current date is disabled - \"Today\" button of day picker will also be disabled.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-disable-date\" exampleTitle=\"Disabled Dates\">\n    <nui-date-picker-disable-date-example></nui-date-picker-disable-date-example>\n</nui-example-wrapper>\n\n<h2>Formatting</h2>\n<div>\n    You can use custom formats to change the visualization of dates, days, months, years, and headings in the date picker.\n    See <code><a href=\"https://momentjs.com/docs/#/displaying/format/\" target=\"_blank\">Moment.js date formats</a></code>\n    for more information about the construction of date formats. Use the following attributes of type <code>String</code>\n    to apply custom formats:\n    <ul>\n        <li>\n            <code>dateFormat</code> - textbox date format. The selected date or typed-in date, if valid, will be\n            modified inline and displayed using this format. If the value of dateFormat is an invalid format,\n            or if it isn't specified, it will be set to a default value of <code>\"DD MMM YYYY\"</code>.\n        </li>\n        <li><code>formatDay</code> - format of the days in the day picker</li>\n        <li><code>formatMonth</code> - format of the months in the month picker</li>\n        <li><code>formatYear</code> - format of the years in the year picker and of the year picker title</li>\n        <li><code>formatDayHeader</code> - format of the day of the week in the week header</li>\n        <li><code>formatDayTitle</code> - format of the day picker title</li>\n        <li><code>formatMonthTitle</code> - format of the month picker title</li>\n    </ul>\n    Supported formats:\n    <ul>\n        <li>\"D MMM YY\":  3 Aug 18</li>\n        <li>\"D MMM YYYY\":  3 Aug 2018</li>\n        <li>\"DD MMM YY\":  03 Aug 18</li>\n        <li>\"DD MMM YYYY\":  03 Aug 2018</li>\n        <li>\"Do MMM YY\":  3rd Aug 18</li>\n        <li>\"Do MMM YYYY\":  3rd Aug 2018</li>\n        <li>\"MMM D, YY\":  Aug 3, 18</li>\n        <li>\"MMM D, YYYY\":  Aug 3, 2018</li>\n        <li>\"MMM DD, YY\":  Aug 03, 18</li>\n        <li>\"MMM DD, YYYY\":  Aug 03, 2018</li>\n        <li>\"MMM Do, YY\":  Aug 3rd, 18</li>\n        <li>\"MMM Do, YYYY\":  Aug 3rd, 2018</li>\n        <li>\"M/D/YY\":  8/3/18</li>\n        <li>\"M/D/YYYY\":  8/3/2018</li>\n        <li>\"MM/DD/YY\":  08/03/18</li>\n        <li>\"MM/DD/YYYY\":  08/03/2018</li>\n        <li>\"M-D-YY\":  8-3-18</li>\n        <li>\"M-D-YYYY\":  8-3-2018</li>\n        <li>\"MM-DD-YY\":  08-03-18</li>\n        <li>\"MM-DD-YYYY\":  08-03-2018</li>\n        <li>\"M D YY\":  8 3 18</li>\n        <li>\"M D YYYY\":  8 3 2018</li>\n        <li>\"MM DD YY\":  08 03 18</li>\n        <li>\"MM DD YYYY\":  08 03 2018</li>\n        <li>\"M.D.YY\":  8.3.18</li>\n        <li>\"M.D.YYYY\":  8.3.2018</li>\n        <li>\"MM.DD.YY\":  08.03.18</li>\n        <li>\"MM.DD.YYYY\":  08.03.2018</li>\n    </ul>\n</div>\n<nui-example-wrapper filenamePrefix=\"date-picker-formatting\" exampleTitle=\"Formatting\">\n    <nui-date-picker-formatting-example></nui-date-picker-formatting-example>\n</nui-example-wrapper>\n\n<h2>Preserve Insignificant</h2>\n<p>\n    <code>[preserveInsignificant]=\"true\"</code> input tells date picker whether to preserve\n    the hours, minutes, seconds, and milliseconds of the date.\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-insignificant\" exampleTitle=\"Preserve Insignificant\">\n    <nui-date-picker-insignificant-example></nui-date-picker-insignificant-example>\n</nui-example-wrapper>\n\n<h2>Date Picker using in different timezones</h2>\n<p>\n    It's possible to use <code>DatePickerComponent</code> in different timezones.\n    To preserve timezone value set <code>handleTimezone</code> flag on the component to <code>true</code>\n</p>\n<nui-example-wrapper filenamePrefix=\"date-picker-timezone\" exampleTitle=\"Basic Usage\">\n    <nui-date-picker-timezone-example></nui-date-picker-timezone-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "ZlDf":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-formatting/date-picker-formatting.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DatePickerFormattingExampleComponent */

    /***/
    function ZlDf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerFormattingExampleComponent", function () {
        return DatePickerFormattingExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerFormattingExampleComponent = function DatePickerFormattingExampleComponent() {
        _classCallCheck(this, DatePickerFormattingExampleComponent);

        this.initDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
      };

      DatePickerFormattingExampleComponent.ɵfac = function DatePickerFormattingExampleComponent_Factory(t) {
        return new (t || DatePickerFormattingExampleComponent)();
      };

      DatePickerFormattingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatePickerFormattingExampleComponent,
        selectors: [["nui-date-picker-formatting-example"]],
        decls: 1,
        vars: 1,
        consts: [["dateFormat", "MM/DD/YY", "formatDay", "Do", "formatMonth", "MMM", "formatYear", "YY", "formatDayHeader", "ddd", "formatDayTitle", "MMM YY", "formatMonthTitle", "YY", 3, "value"]],
        template: function DatePickerFormattingExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.initDate);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Zqd+":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-inline/date-picker-inline.example.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zqd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "aGW9":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-init-date/date-picker-init-date.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: DatePickerInitDateExampleComponent */

    /***/
    function aGW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInitDateExampleComponent", function () {
        return DatePickerInitDateExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerInitDateExampleComponent = function DatePickerInitDateExampleComponent() {
        _classCallCheck(this, DatePickerInitDateExampleComponent);

        this.initDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("2018-08-04");
      };

      DatePickerInitDateExampleComponent.ɵfac = function DatePickerInitDateExampleComponent_Factory(t) {
        return new (t || DatePickerInitDateExampleComponent)();
      };

      DatePickerInitDateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatePickerInitDateExampleComponent,
        selectors: [["nui-date-picker-init-date-example"]],
        decls: 1,
        vars: 1,
        consts: [[3, "value"]],
        template: function DatePickerInitDateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.initDate);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "bRl6":
    /*!*******************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-basic/date-picker-basic.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: DatePickerBasicExampleComponent */

    /***/
    function bRl6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerBasicExampleComponent", function () {
        return DatePickerBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerBasicExampleComponent = function DatePickerBasicExampleComponent() {
        _classCallCheck(this, DatePickerBasicExampleComponent);
      };

      DatePickerBasicExampleComponent.ɵfac = function DatePickerBasicExampleComponent_Factory(t) {
        return new (t || DatePickerBasicExampleComponent)();
      };

      DatePickerBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerBasicExampleComponent,
        selectors: [["nui-date-picker-basic-example"]],
        decls: 1,
        vars: 0,
        template: function DatePickerBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker");
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "bbBs":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-basic/date-picker-basic.example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bbBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker></nui-date-picker>\n";
      /***/
    },

    /***/
    "ctL9":
    /*!*******************************************************!*\
      !*** ./demo/src/components/demo/date-picker/index.ts ***!
      \*******************************************************/

    /*! exports provided: DatePickerBasicExampleComponent, DatePickerCurrentMonthExampleComponent, DatePickerDateRangeExampleComponent, DatePickerDisableDateExampleComponent, DatePickerDisabledExampleComponent, DatePickerDocsComponent, DatePickerFirstDateOfWeekExampleComponent, DatePickerFormattingExampleComponent, DatePickerInitDateExampleComponent, DatePickerInitModeExampleComponent, DatePickerInlineExampleComponent, DatePickerInsignificantExampleComponent, DatePickerModesRangeExampleComponent, DatePickerShowWeeksExampleComponent, DatePickerValueChangeExampleComponent, DatePickerWithErrorExampleComponent, DatePickerYearRangeExampleComponent, DatePickerTestComponent, DatePickerVisualTestComponent, DatePickerCalendarNavigatedExampleComponent, DatePickerReactiveFormExampleComponent, DatePickerTimezoneExampleComponent */

    /***/
    function ctL9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _date_picker_basic_date_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./date-picker-basic/date-picker-basic.example.component */
      "bRl6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerBasicExampleComponent", function () {
        return _date_picker_basic_date_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_0__["DatePickerBasicExampleComponent"];
      });
      /* harmony import */


      var _date_picker_current_month_date_picker_current_month_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./date-picker-current-month/date-picker-current-month.example.component */
      "zUPy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerCurrentMonthExampleComponent", function () {
        return _date_picker_current_month_date_picker_current_month_example_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerCurrentMonthExampleComponent"];
      });
      /* harmony import */


      var _date_picker_date_range_date_picker_date_range_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-picker-date-range/date-picker-date-range.example.component */
      "Fj0R");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDateRangeExampleComponent", function () {
        return _date_picker_date_range_date_picker_date_range_example_component__WEBPACK_IMPORTED_MODULE_2__["DatePickerDateRangeExampleComponent"];
      });
      /* harmony import */


      var _date_picker_disable_date_date_picker_disable_date_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./date-picker-disable-date/date-picker-disable-date.example.component */
      "VzA4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDisableDateExampleComponent", function () {
        return _date_picker_disable_date_date_picker_disable_date_example_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerDisableDateExampleComponent"];
      });
      /* harmony import */


      var _date_picker_disabled_date_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./date-picker-disabled/date-picker-disabled.example.component */
      "4+Q9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDisabledExampleComponent", function () {
        return _date_picker_disabled_date_picker_disabled_example_component__WEBPACK_IMPORTED_MODULE_4__["DatePickerDisabledExampleComponent"];
      });
      /* harmony import */


      var _date_picker_docs_date_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./date-picker-docs/date-picker-docs.example.component */
      "3kVr");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDocsComponent", function () {
        return _date_picker_docs_date_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_5__["DatePickerDocsComponent"];
      });
      /* harmony import */


      var _date_picker_first_date_of_week_date_picker_first_date_of_week_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./date-picker-first-date-of-week/date-picker-first-date-of-week.example.component */
      "uRB6");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerFirstDateOfWeekExampleComponent", function () {
        return _date_picker_first_date_of_week_date_picker_first_date_of_week_example_component__WEBPACK_IMPORTED_MODULE_6__["DatePickerFirstDateOfWeekExampleComponent"];
      });
      /* harmony import */


      var _date_picker_formatting_date_picker_formatting_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./date-picker-formatting/date-picker-formatting.example.component */
      "ZlDf");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerFormattingExampleComponent", function () {
        return _date_picker_formatting_date_picker_formatting_example_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerFormattingExampleComponent"];
      });
      /* harmony import */


      var _date_picker_init_date_date_picker_init_date_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./date-picker-init-date/date-picker-init-date.example.component */
      "aGW9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInitDateExampleComponent", function () {
        return _date_picker_init_date_date_picker_init_date_example_component__WEBPACK_IMPORTED_MODULE_8__["DatePickerInitDateExampleComponent"];
      });
      /* harmony import */


      var _date_picker_init_mode_date_picker_init_mode_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./date-picker-init-mode/date-picker-init-mode.example.component */
      "uBnM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInitModeExampleComponent", function () {
        return _date_picker_init_mode_date_picker_init_mode_example_component__WEBPACK_IMPORTED_MODULE_9__["DatePickerInitModeExampleComponent"];
      });
      /* harmony import */


      var _date_picker_inline_date_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./date-picker-inline/date-picker-inline.example.component */
      "g1M9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInlineExampleComponent", function () {
        return _date_picker_inline_date_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_10__["DatePickerInlineExampleComponent"];
      });
      /* harmony import */


      var _date_picker_insignificant_date_picker_insignificant_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./date-picker-insignificant/date-picker-insignificant.example.component */
      "RJ82");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInsignificantExampleComponent", function () {
        return _date_picker_insignificant_date_picker_insignificant_example_component__WEBPACK_IMPORTED_MODULE_11__["DatePickerInsignificantExampleComponent"];
      });
      /* harmony import */


      var _date_picker_modes_range_date_picker_modes_range_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./date-picker-modes-range/date-picker-modes-range.example.component */
      "5eD4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerModesRangeExampleComponent", function () {
        return _date_picker_modes_range_date_picker_modes_range_example_component__WEBPACK_IMPORTED_MODULE_12__["DatePickerModesRangeExampleComponent"];
      });
      /* harmony import */


      var _date_picker_show_weeks_date_picker_show_weeks_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./date-picker-show-weeks/date-picker-show-weeks.example.component */
      "g+ya");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerShowWeeksExampleComponent", function () {
        return _date_picker_show_weeks_date_picker_show_weeks_example_component__WEBPACK_IMPORTED_MODULE_13__["DatePickerShowWeeksExampleComponent"];
      });
      /* harmony import */


      var _date_picker_value_change_date_picker_value_change_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./date-picker-value-change/date-picker-value-change.example.component */
      "k3CJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerValueChangeExampleComponent", function () {
        return _date_picker_value_change_date_picker_value_change_example_component__WEBPACK_IMPORTED_MODULE_14__["DatePickerValueChangeExampleComponent"];
      });
      /* harmony import */


      var _date_picker_with_error_date_picker_with_error_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./date-picker-with-error/date-picker-with-error.example.component */
      "iMUJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerWithErrorExampleComponent", function () {
        return _date_picker_with_error_date_picker_with_error_example_component__WEBPACK_IMPORTED_MODULE_15__["DatePickerWithErrorExampleComponent"];
      });
      /* harmony import */


      var _date_picker_year_range_date_picker_year_range_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./date-picker-year-range/date-picker-year-range.example.component */
      "/0bv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerYearRangeExampleComponent", function () {
        return _date_picker_year_range_date_picker_year_range_example_component__WEBPACK_IMPORTED_MODULE_16__["DatePickerYearRangeExampleComponent"];
      });
      /* harmony import */


      var _date_picker_test_date_picker_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./date-picker-test/date-picker-test.component */
      "dLnb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerTestComponent", function () {
        return _date_picker_test_date_picker_test_component__WEBPACK_IMPORTED_MODULE_17__["DatePickerTestComponent"];
      });
      /* harmony import */


      var _date_picker_visual_test_date_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./date-picker-visual-test/date-picker-visual-test.component */
      "NPB/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerVisualTestComponent", function () {
        return _date_picker_visual_test_date_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_18__["DatePickerVisualTestComponent"];
      });
      /* harmony import */


      var _date_picker_calendar_navigated_date_picker_calendar_navigated_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./date-picker-calendar-navigated/date-picker-calendar-navigated.example.component */
      "4+wy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerCalendarNavigatedExampleComponent", function () {
        return _date_picker_calendar_navigated_date_picker_calendar_navigated_example_component__WEBPACK_IMPORTED_MODULE_19__["DatePickerCalendarNavigatedExampleComponent"];
      });
      /* harmony import */


      var _date_picker_reactive_form_date_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./date-picker-reactive-form/date-picker-reactive-form.example.component */
      "KCze");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerReactiveFormExampleComponent", function () {
        return _date_picker_reactive_form_date_picker_reactive_form_example_component__WEBPACK_IMPORTED_MODULE_20__["DatePickerReactiveFormExampleComponent"];
      });
      /* harmony import */


      var _date_picker_timezone_date_picker_timezone_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./date-picker-timezone/date-picker-timezone.example.component */
      "VWj0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatePickerTimezoneExampleComponent", function () {
        return _date_picker_timezone_date_picker_timezone_example_component__WEBPACK_IMPORTED_MODULE_21__["DatePickerTimezoneExampleComponent"];
      });
      /***/

    },

    /***/
    "d8hO":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-current-month/date-picker-current-month.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d8hO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [inline]=\"true\"\n    [onlyCurrentMonth]=\"true\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "dLnb":
    /*!*********************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-test/date-picker-test.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: DatePickerTestComponent */

    /***/
    function dLnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerTestComponent", function () {
        return DatePickerTestComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DatePickerTestComponent = /*#__PURE__*/function () {
        function DatePickerTestComponent(formBuilder) {
          _classCallCheck(this, DatePickerTestComponent);

          this.formBuilder = formBuilder;
          this.dt = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();
          this.dtPreserve = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();
          this.localActiveDate = this.dt;
          this.localActiveDatePreserve = this.dtPreserve;
          this.localActiveDateMinMax = this.dt;
          this.localActiveDateDisabledDates = this.dt;
          this.month = this.dt.month() + 1;
          this.year = this.dt.year();
          this.minDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
            year: this.year,
            month: this.month - 1,
            date: 5
          });
          this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
            year: this.year,
            month: this.month - 1,
            date: 25
          });
          this.caption = "Custom caption for date-picker";
          this.initDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()().utcOffset(0).hour(23).minute(15).add(1, "day");
          this.initDatePreserve = this.initDate;
          this.dateDisabled = [{
            date: moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
              year: this.year,
              month: this.month - 1,
              date: 10
            }),
            mode: "day"
          }, {
            date: moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
              year: this.year,
              month: this.month - 1,
              date: 11
            }),
            mode: "day"
          }, {
            date: moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
              year: this.year,
              month: this.month - 1,
              date: 12
            }),
            mode: "day"
          }, {
            date: moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
              year: this.year,
              month: this.month,
              date: 12
            }),
            mode: "month"
          }, {
            date: moment_moment__WEBPACK_IMPORTED_MODULE_1___default()({
              year: this.year + 1,
              month: this.month - 1,
              date: 12
            }),
            mode: "year"
          }];
          this.todayDateDisabled = [{
            date: this.dt,
            mode: "day"
          }];
        }

        _createClass(DatePickerTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reactiveDatepickerForm = this.formBuilder.group({
              datePicker: this.formBuilder.control(moment_moment__WEBPACK_IMPORTED_MODULE_1___default()())
            });
          }
        }, {
          key: "dateChanged",
          value: function dateChanged(event) {
            this.localActiveDate = event;
          }
        }, {
          key: "dateChangedPreserved",
          value: function dateChangedPreserved(event) {
            this.localActiveDatePreserve = event;
          }
        }, {
          key: "dateChangedMinMax",
          value: function dateChangedMinMax(event) {
            this.localActiveDateMinMax = event;
          }
        }, {
          key: "dateChangedDisabledDates",
          value: function dateChangedDisabledDates(event) {
            this.localActiveDateDisabledDates = event;
          }
        }, {
          key: "initDateChangedPreserved",
          value: function initDateChangedPreserved(event) {
            this.initDatePreserve = event;
          }
        }]);

        return DatePickerTestComponent;
      }();

      DatePickerTestComponent.ɵfac = function DatePickerTestComponent_Factory(t) {
        return new (t || DatePickerTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      DatePickerTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DatePickerTestComponent,
        selectors: [["nui-date-picker-test"]],
        decls: 72,
        vars: 25,
        consts: [["id", "nui-demo-datepicker-basic"], ["id", "nui-demo-datepicker-preserve", 3, "value", "preserveInsignificant", "valueChange"], ["id", "nui-demo-datepicker-active-date-value-preserve"], ["id", "nui-demo-datepicker-inline", 3, "value", "inline", "valueChange"], ["id", "nui-demo-datepicker-active-date-value"], ["id", "nui-demo-datepicker-min-max", 3, "value", "minDate", "maxDate", "valueChange"], ["id", "nui-demo-datepicker-min-max-value"], ["id", "nui-demo-datepicker-min-date"], ["id", "nui-demo-datepicker-max-date"], [3, "formGroup"], ["id", "nui-demo-date-picker-reactive", "formControlName", "datePicker", 3, "isInErrorState"], ["id", "nui-demo-datepicker-disabled-dates", 3, "value", "disabledDates", "valueChange"], ["id", "nui-demo-datepicker-disabled-dates-value"], ["id", "nui-demo-datepicker-disabled-today", 3, "disabledDates"], ["id", "nui-demo-datepicker-init-date-preserve", 3, "value", "preserveInsignificant", "valueChange"], ["id", "nui-demo-datepicker-init-date-value-preserve"], ["id", "nui-demo-datepicker-custom-first-day-of-the-week", 3, "startingDay"], ["id", "nui-demo-datepicker-custom-date-format", "dateFormat", "MM/DD/YY"]],
        template: function DatePickerTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Basic Datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-date-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Datepicker with preserve insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nui-date-picker", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerTestComponent_Template_nui_date_picker_valueChange_6_listener($event) {
              return ctx.dateChangedPreserved($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Selected date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Inline datepicker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nui-date-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerTestComponent_Template_nui_date_picker_valueChange_14_listener($event) {
              return ctx.dateChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Selected date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Datepicker with min and max values");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nui-date-picker", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerTestComponent_Template_nui_date_picker_valueChange_22_listener($event) {
              return ctx.dateChangedMinMax($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Selected date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Min date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Max date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Datepicker with reactive form");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "nui-date-picker", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Datepicker with disabled dates");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nui-date-picker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerTestComponent_Template_nui_date_picker_valueChange_43_listener($event) {
              return ctx.dateChangedDisabledDates($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Selected date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Dates, disabled with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "dateDisabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Datepicker with disabled today button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "nui-date-picker", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Datepicker with initial date, time and preserve insignificant");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "nui-date-picker", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerTestComponent_Template_nui_date_picker_valueChange_61_listener($event) {
              return ctx.initDateChangedPreserved($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Datepicker with custom first day of the week");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "nui-date-picker", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Datepicker with custom date format");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "nui-date-picker", 17);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.dtPreserve)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localActiveDatePreserve.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.dt)("inline", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localActiveDate.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.dt)("minDate", ctx.minDate)("maxDate", ctx.maxDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localActiveDateMinMax.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.minDate.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.maxDate.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.reactiveDatepickerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isInErrorState", ctx.reactiveDatepickerForm.controls["datePicker"].invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.dt)("disabledDates", ctx.dateDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localActiveDateDisabledDates.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 23, ctx.dateDisabled), "}\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabledDates", ctx.todayDateDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.initDate)("preserveInsignificant", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.initDatePreserve.format());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startingDay", 5);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fa0T":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-value-change/date-picker-value-change.example.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fa0T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker id=\"nui-demo-datepicker-value-change\"\n                 [inline]=\"true\"\n                 (valueChange)=\"dateChanged($event)\">\n</nui-date-picker>\n\n<div id=\"active-date-value\">\n    {{selectedDate}}\n</div>\n";
      /***/
    },

    /***/
    "g+ya":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-show-weeks/date-picker-show-weeks.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DatePickerShowWeeksExampleComponent */

    /***/
    function gYa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerShowWeeksExampleComponent", function () {
        return DatePickerShowWeeksExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerShowWeeksExampleComponent = function DatePickerShowWeeksExampleComponent() {
        _classCallCheck(this, DatePickerShowWeeksExampleComponent);
      };

      DatePickerShowWeeksExampleComponent.ɵfac = function DatePickerShowWeeksExampleComponent_Factory(t) {
        return new (t || DatePickerShowWeeksExampleComponent)();
      };

      DatePickerShowWeeksExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerShowWeeksExampleComponent,
        selectors: [["nui-date-picker-show-weeks-example"]],
        decls: 1,
        vars: 2,
        consts: [[3, "inline", "showWeeks"]],
        template: function DatePickerShowWeeksExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("showWeeks", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "g1M9":
    /*!*********************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-inline/date-picker-inline.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: DatePickerInlineExampleComponent */

    /***/
    function g1M9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInlineExampleComponent", function () {
        return DatePickerInlineExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerInlineExampleComponent = function DatePickerInlineExampleComponent() {
        _classCallCheck(this, DatePickerInlineExampleComponent);
      };

      DatePickerInlineExampleComponent.ɵfac = function DatePickerInlineExampleComponent_Factory(t) {
        return new (t || DatePickerInlineExampleComponent)();
      };

      DatePickerInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerInlineExampleComponent,
        selectors: [["nui-date-picker-inline-example"]],
        decls: 1,
        vars: 1,
        consts: [[3, "inline"]],
        template: function DatePickerInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "hLUF":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hLUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiDatePickerModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule,\n    NuiSelectModule,\n    NuiValidationMessageModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    DatePickerBasicExampleComponent,\n    DatePickerCalendarNavigatedExampleComponent,\n    DatePickerCurrentMonthExampleComponent,\n    DatePickerDateRangeExampleComponent,\n    DatePickerDisableDateExampleComponent,\n    DatePickerDisabledExampleComponent,\n    DatePickerDocsComponent,\n    DatePickerFirstDateOfWeekExampleComponent,\n    DatePickerFormattingExampleComponent,\n    DatePickerInitDateExampleComponent,\n    DatePickerInitModeExampleComponent,\n    DatePickerInlineExampleComponent,\n    DatePickerInsignificantExampleComponent,\n    DatePickerModesRangeExampleComponent,\n    DatePickerReactiveFormExampleComponent,\n    DatePickerShowWeeksExampleComponent,\n    DatePickerTestComponent,\n    DatePickerTimezoneExampleComponent,\n    DatePickerValueChangeExampleComponent,\n    DatePickerVisualTestComponent,\n    DatePickerWithErrorExampleComponent,\n    DatePickerYearRangeExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: DatePickerDocsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"date-picker-test\",\n        component: DatePickerTestComponent,\n    },\n    {\n        path: \"date-picker-visual-test\",\n        component: DatePickerVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiDatePickerModule,\n        NuiSelectModule,\n        NuiFormFieldModule,\n        NuiValidationMessageModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        DatePickerBasicExampleComponent,\n        DatePickerCurrentMonthExampleComponent,\n        DatePickerDateRangeExampleComponent,\n        DatePickerDisableDateExampleComponent,\n        DatePickerDisabledExampleComponent,\n        DatePickerDocsComponent,\n        DatePickerFirstDateOfWeekExampleComponent,\n        DatePickerFormattingExampleComponent,\n        DatePickerInitDateExampleComponent,\n        DatePickerInitModeExampleComponent,\n        DatePickerInlineExampleComponent,\n        DatePickerInsignificantExampleComponent,\n        DatePickerModesRangeExampleComponent,\n        DatePickerShowWeeksExampleComponent,\n        DatePickerValueChangeExampleComponent,\n        DatePickerWithErrorExampleComponent,\n        DatePickerYearRangeExampleComponent,\n        DatePickerTestComponent,\n        DatePickerVisualTestComponent,\n        DatePickerCalendarNavigatedExampleComponent,\n        DatePickerReactiveFormExampleComponent,\n        DatePickerTimezoneExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class DatePickerModule {\n}\n";
      /***/
    },

    /***/
    "iKET":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-value-change/date-picker-value-change.example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iKET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { IToastService, ToastService } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-value-change-example\",\n    templateUrl: \"./date-picker-value-change.example.component.html\",\n})\nexport class DatePickerValueChangeExampleComponent {\n    public selectedDate: Date = new Date(moment().valueOf());\n\n    constructor(@Inject(ToastService) private toastService: IToastService) {}\n\n    public dateChanged(event: Moment) {\n        this.selectedDate = new Date(event.valueOf());\n        this.toastService.info({message: $localize `Selected date: ${event.toString()}`});\n    }\n}\n";
      /***/
    },

    /***/
    "iMUJ":
    /*!*****************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-with-error/date-picker-with-error.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DatePickerWithErrorExampleComponent */

    /***/
    function iMUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerWithErrorExampleComponent", function () {
        return DatePickerWithErrorExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerWithErrorExampleComponent = function DatePickerWithErrorExampleComponent() {
        _classCallCheck(this, DatePickerWithErrorExampleComponent);
      };

      DatePickerWithErrorExampleComponent.ɵfac = function DatePickerWithErrorExampleComponent_Factory(t) {
        return new (t || DatePickerWithErrorExampleComponent)();
      };

      DatePickerWithErrorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerWithErrorExampleComponent,
        selectors: [["nui-date-picker-with-error-example"]],
        decls: 1,
        vars: 1,
        consts: [[3, "isInErrorState"]],
        template: function DatePickerWithErrorExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isInErrorState", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ild4":
    /*!********************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker.module.ts ***!
      \********************************************************************/

    /*! exports provided: DatePickerModule */

    /***/
    function ild4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerModule", function () {
        return DatePickerModule;
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
      "ctL9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerDocsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "date-picker-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerTestComponent"]
      }, {
        path: "date-picker-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var DatePickerModule = function DatePickerModule() {
        _classCallCheck(this, DatePickerModule);
      };

      DatePickerModule.ɵfac = function DatePickerModule_Factory(t) {
        return new (t || DatePickerModule)();
      };

      DatePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: DatePickerModule
      });
      DatePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("CE59");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DatePickerModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["DatePickerBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerCurrentMonthExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerDateRangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerDisableDateExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerDisabledExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerDocsComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerFirstDateOfWeekExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerFormattingExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerInitDateExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerInitModeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerInsignificantExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerModesRangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerShowWeeksExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerValueChangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerWithErrorExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerYearRangeExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerCalendarNavigatedExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerReactiveFormExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["DatePickerTimezoneExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSelectModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiValidationMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "k3CJ":
    /*!*********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-value-change/date-picker-value-change.example.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: DatePickerValueChangeExampleComponent */

    /***/
    function k3CJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerValueChangeExampleComponent", function () {
        return DatePickerValueChangeExampleComponent;
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


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerValueChangeExampleComponent = /*#__PURE__*/function () {
        function DatePickerValueChangeExampleComponent(toastService) {
          _classCallCheck(this, DatePickerValueChangeExampleComponent);

          this.toastService = toastService;
          this.selectedDate = new Date(moment_moment__WEBPACK_IMPORTED_MODULE_1___default()().valueOf());
        }

        _createClass(DatePickerValueChangeExampleComponent, [{
          key: "dateChanged",
          value: function dateChanged(event) {
            this.selectedDate = new Date(event.valueOf());
            this.toastService.info({
              message: $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Selected date: ", ""])), event.toString())
            });
          }
        }]);

        return DatePickerValueChangeExampleComponent;
      }();

      DatePickerValueChangeExampleComponent.ɵfac = function DatePickerValueChangeExampleComponent_Factory(t) {
        return new (t || DatePickerValueChangeExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"]));
      };

      DatePickerValueChangeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DatePickerValueChangeExampleComponent,
        selectors: [["nui-date-picker-value-change-example"]],
        decls: 3,
        vars: 2,
        consts: [["id", "nui-demo-datepicker-value-change", 3, "inline", "valueChange"], ["id", "active-date-value"]],
        template: function DatePickerValueChangeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-date-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function DatePickerValueChangeExampleComponent_Template_nui_date_picker_valueChange_0_listener($event) {
              return ctx.dateChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inline", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.selectedDate, "\n");
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "nSfH":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-reactive-form/date-picker-reactive-form.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-form-field caption=\"Date Picker\" [control]=\"control\">\n        <nui-date-picker [formControl]=\"control\" (valueChange)=\"onValueChange($event)\"></nui-date-picker>\n        <nui-validation-message for=\"required\">\n            This field is required\n        </nui-validation-message>\n        <nui-validation-message for=\"invalidFormat\">\n            Invalid format\n        </nui-validation-message>\n    </nui-form-field>\n    <p class=\"mt-2\">Value: {{selectedDate}}</p>\n    <p class=\"mt-2\">Valid: {{control.valid}}</p>\n    <p class=\"mt-2\">Touched: {{control.touched}}</p>\n    <p class=\"mt-2\">Dirty: {{control.dirty}}</p>\n</section>\n";
      /***/
    },

    /***/
    "nmCD":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-insignificant/date-picker-insignificant.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nmCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Inject } from \"@angular/core\";\nimport { FormControl } from \"@angular/forms\";\nimport { IToastService, ToastService } from \"@nova-ui/bits\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-date-picker-insignificant-example\",\n    templateUrl: \"./date-picker-insignificant.example.component.html\",\n})\nexport class DatePickerInsignificantExampleComponent {\n    public dt: Moment = moment().endOf(\"day\");\n    public selectedDate: Date;\n    public control = new FormControl(this.dt);\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    public dateChanged(event: Moment) {\n        this.selectedDate = new Date(event.valueOf());\n        this.toastService.info({message: $localize `Selected date: ${event.toString()}`});\n    }\n}\n";
      /***/
    },

    /***/
    "nsEz":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-timezone/date-picker-timezone.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nsEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"demo-options-section\">\n    <nui-form-field caption=\"Date Picker\" [control]=\"control\">\n        <nui-date-picker [formControl]=\"control\" [handleTimezone]=\"true\"></nui-date-picker>\n    </nui-form-field>\n    <p class=\"mt-2\">Value: {{selectedDate}}</p>\n\n    <nui-combobox [itemsSource]=\"displayedZones\"\n        [value]=\"initialZone\"\n        (changed)=\"textboxChanged($event)\"\n        placeholder=\"Select item\" i18n-placeholder\n    ></nui-combobox>\n\n</section>\n";
      /***/
    },

    /***/
    "s2l4":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-insignificant/date-picker-insignificant.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s2l4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [formControl]=\"control\"\n    [inline]=\"true\"\n    [preserveInsignificant]=\"true\"\n    (valueChange)=\"dateChanged($event)\">\n</nui-date-picker>\n\n<div>\n    <p class=\"mt-2\">Value: {{selectedDate}}</p>\n    <p class=\"mt-2\">Control Value: {{control.value.toISOString()}}</p>\n</div>\n";
      /***/
    },

    /***/
    "ss+P":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-calendar-navigated/date-picker-calendar-navigated.example.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ssP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>Press the calendar navigation arrows to trigger the <code>calendarNavigated</code> event</p>\n<p>\n    Navigated to date: <strong>{{calendarChangedDate}}</strong>\n</p>\n<nui-date-picker id=\"nui-demo-datepicker-value-change\"\n                 [inline]=\"true\"\n                 (calendarNavigated)=\"dateChanged($event)\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "uBnM":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-init-mode/date-picker-init-mode.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: DatePickerInitModeExampleComponent */

    /***/
    function uBnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerInitModeExampleComponent", function () {
        return DatePickerInitModeExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerInitModeExampleComponent = function DatePickerInitModeExampleComponent() {
        _classCallCheck(this, DatePickerInitModeExampleComponent);
      };

      DatePickerInitModeExampleComponent.ɵfac = function DatePickerInitModeExampleComponent_Factory(t) {
        return new (t || DatePickerInitModeExampleComponent)();
      };

      DatePickerInitModeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerInitModeExampleComponent,
        selectors: [["nui-date-picker-init-mode-example"]],
        decls: 1,
        vars: 1,
        consts: [["datepickerMode", "month", 3, "inline"]],
        template: function DatePickerInitModeExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "uRB6":
    /*!*********************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-first-date-of-week/date-picker-first-date-of-week.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: DatePickerFirstDateOfWeekExampleComponent */

    /***/
    function uRB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerFirstDateOfWeekExampleComponent", function () {
        return DatePickerFirstDateOfWeekExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerFirstDateOfWeekExampleComponent = function DatePickerFirstDateOfWeekExampleComponent() {
        _classCallCheck(this, DatePickerFirstDateOfWeekExampleComponent);
      };

      DatePickerFirstDateOfWeekExampleComponent.ɵfac = function DatePickerFirstDateOfWeekExampleComponent_Factory(t) {
        return new (t || DatePickerFirstDateOfWeekExampleComponent)();
      };

      DatePickerFirstDateOfWeekExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerFirstDateOfWeekExampleComponent,
        selectors: [["nui-date-picker-first-date-of-week-example"]],
        decls: 1,
        vars: 2,
        consts: [[3, "inline", "startingDay"]],
        template: function DatePickerFirstDateOfWeekExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("startingDay", 5);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "w+22":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-disabled/date-picker-disabled.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function w22(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [isDisabled]=\"true\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "yC3A":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-disable-date/date-picker-disable-date.example.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yC3A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-date-picker\n    [disabledDates]=\"dateDisabled\">\n</nui-date-picker>\n";
      /***/
    },

    /***/
    "ynJR":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-visual-test/date-picker-visual-test.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ynJR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { FormBuilder, FormGroup, Validators } from \"@angular/forms\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"date-picker-visual-test\",\n    templateUrl: \"./date-picker-visual-test.component.html\",\n})\nexport class DatePickerVisualTestComponent implements OnInit {\n    public myForm: FormGroup;\n    public initDate: Moment = moment().set({\n        year: 2017,\n        month: 11,\n        date: 23,\n        hour: 15,\n        minute: 30,\n    });\n    public emptyDate = moment(\"\");\n\n    constructor(private formBuilder: FormBuilder) { }\n\n    ngOnInit() {\n        this.myForm = this.formBuilder.group({\n            datePickerFormControl: this.formBuilder.control( this.emptyDate, [Validators.required]),\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "zAeW":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/date-picker/date-picker-visual-test/date-picker-visual-test.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zAeW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"row\"><h3>Basic Usage</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-basic-usage-datepicker\"\n                                    [value]=\"initDate\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Disabled</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-disabled-datepicker\"\n                                    [value]=\"initDate\"\n                                    [isDisabled]=\"true\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Error State</h3></div>\n            <div class=\"row\">\n                <form [formGroup]=\"myForm\">\n                    <div class=\"form-group\">\n                        <nui-date-picker id=\"nui-error-state-datepicker\"\n                                            formControlName=\"datePickerFormControl\"\n                                            [preserveInsignificant]=\"true\"\n                                            [isInErrorState]=\"true\">\n                        </nui-date-picker>\n                    </div>\n                </form>\n            </div>\n            <hr>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"row\"><h3>Inline State</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-inline-state-datepicker\"\n                                    [value]=\"initDate\"\n                                    [inline]=\"true\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Current Month State</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-current-month-state-datepicker\"\n                                    [value]=\"initDate\"\n                                    [inline]=\"true\"\n                                    [onlyCurrentMonth]=\"true\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Show Weeks</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-show-weeks-datepicker\"\n                                    [value]=\"initDate\"\n                                    [showWeeks]=\"true\"\n                                    [inline]=\"true\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"row\"><h3>Modes (month)</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-modes-month-state-datepicker\"\n                                    [value]=\"initDate\"\n                                    datepickerMode=\"month\"\n                                    [inline]=\"true\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Modes (year)</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-modes-year-state-datepicker\"\n                                    [value]=\"initDate\"\n                                    datepickerMode=\"year\"\n                                    [inline]=\"true\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Years Range</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-modes-year-range-datepicker\"\n                                    [value]=\"initDate\"\n                                    [inline]=\"true\"\n                                    datepickerMode=\"year\"\n                                    [yearRange]=\"5\">\n                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n\n        <div class=\"col\">\n            <div class=\"row\"><h3>Formatting</h3></div>\n            <div class=\"row\">\n                <nui-date-picker id=\"nui-formatting-state-datepicker\"\n                                    [value]=\"initDate\"\n                                    [inline]=\"true\"\n                                    formatDay=\"Do\"\n                                    formatMonth=\"MMM\"\n                                    formatYear=\"YY\"\n                                    formatDayHeader=\"ddd\"\n                                    formatDayTitle=\"MMM YY\"\n                                    formatMonthTitle=\"YY\"\n                                    [preserveInsignificant]=\"true\">\n                </nui-date-picker>\n            </div>\n            <hr>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "zUPy":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/date-picker/date-picker-current-month/date-picker-current-month.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: DatePickerCurrentMonthExampleComponent */

    /***/
    function zUPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerCurrentMonthExampleComponent", function () {
        return DatePickerCurrentMonthExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      var DatePickerCurrentMonthExampleComponent = function DatePickerCurrentMonthExampleComponent() {
        _classCallCheck(this, DatePickerCurrentMonthExampleComponent);
      };

      DatePickerCurrentMonthExampleComponent.ɵfac = function DatePickerCurrentMonthExampleComponent_Factory(t) {
        return new (t || DatePickerCurrentMonthExampleComponent)();
      };

      DatePickerCurrentMonthExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerCurrentMonthExampleComponent,
        selectors: [["nui-date-picker-current-month-example"]],
        decls: 1,
        vars: 2,
        consts: [[3, "inline", "onlyCurrentMonth"]],
        template: function DatePickerCurrentMonthExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-date-picker", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("onlyCurrentMonth", true);
          }
        },
        directives: [_src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_1__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-date-picker-date-picker-module-es5.js.map