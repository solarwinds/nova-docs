(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-time-frame-picker-time-frame-picker-module"], {
    /***/
    "/t6y":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/index.ts ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "export * from \"./time-frame-picker-docs/time-frame-picker-docs.example.component\";\nexport * from \"./time-frame-picker-basic/time-frame-picker-basic.example.component\";\nexport * from \"./time-frame-picker-custom/time-frame-picker-custom.example.component\";\nexport * from \"./quick-picker-basic/quick-picker-basic.example.component\";\nexport * from \"./time-frame-picker-inline/time-frame-picker-inline.example.component\";\nexport * from \"./time-frame-picker-date/time-frame-picker-date.example.component\";\nexport * from \"./time-frame-picker-test/time-frame-picker-test.example.component\";\nexport * from \"./time-frame-picker-visual-test/time-frame-picker-visual-test.component\";\nexport * from \"./time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component\";\n";
      /***/
    },

    /***/
    "3nrA":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-basic/time-frame-picker-basic.example.component.ts ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ITimeframe, ITimeFramePresetDictionary, TimeframeService } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-time-frame-picker-basic-example\",\n    templateUrl: \"./time-frame-picker-basic.example.component.html\",\n})\n\nexport class TimeFramePickerBasicExampleComponent {\n    public presets: ITimeFramePresetDictionary;\n    public selectedPresetKey?: string = \"lastHour\";\n    public acceptedTimeframe: ITimeframe;\n    public tf: ITimeframe;\n\n    public showFooter: boolean = false;\n\n    constructor(public timeframeService: TimeframeService) {\n        this.presets = timeframeService.getDefaultPresets();\n        this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey);\n        this.tf = this.acceptedTimeframe;\n    }\n\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    public updateTf(value: ITimeframe) {\n        this.tf = value;\n\n        const timeFrameDatesValid = () => this.timeframeService.areTimeFrameDatesValid(value);\n        const timeFrameDatesEqual = () => this.timeframeService.isEqual(this.tf, this.acceptedTimeframe);\n        if (timeFrameDatesValid() && !timeFrameDatesEqual()) { this.showFooter = true; }\n\n        this.selectedPresetKey = this.tf.selectedPresetId;\n    }\n\n    public confirmPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n        this.acceptedTimeframe = this.tf;\n    }\n    public cancelPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public handlePresetSelection(presetKey: string) {\n        this.selectedPresetKey = presetKey;\n        this.tf = this.timeframeService.getTimeframeByPresetId(presetKey);\n        this.acceptedTimeframe = this.tf;\n        this.closePopoverSubject.next();\n    }\n}\n";
      /***/
    },

    /***/
    "4QCL":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-basic/time-frame-picker-basic.example.component.html ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popover trigger='click'\n             [template]=\"popoverTimeFramePicker\"\n             [hasPadding]=\"false\"\n             [closePopover]=\"closePopoverSubject\"\n             [modal]=\"true\">\n    <span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ acceptedTimeframe | timeFrame }}</span>\n</nui-popover>\n\n<ng-template #popoverTimeFramePicker>\n    <div>\n        <nui-quick-picker [presets]=\"presets\"\n                          [selectedPreset]=\"acceptedTimeframe.selectedPresetId\"\n                          (presetSelected)=\"handlePresetSelection($event)\"\n                          pickerTitle=\"Custom Range\"\n                          i18n-pickerTitle>\n            <nui-time-frame-picker [startModel]=\"acceptedTimeframe\"\n                                          (changed)=\"updateTf($event)\">\n            </nui-time-frame-picker>\n        </nui-quick-picker>\n    </div>\n    <nui-dialog-footer *ngIf=\"showFooter\">\n        <button nui-button\n                type=\"button\"\n                displayStyle=\"action\"\n                class=\"pr-3 nui-time-frame-picker__cancel\"\n                (click)=\"cancelPopover()\"\n                i18n>\n            Cancel\n        </button>\n        <button nui-button\n                type=\"button\"\n                displayStyle=\"primary\"\n                class=\"nui-time-frame-picker__use\"\n                (click)=\"confirmPopover()\"\n                i18n>\n            Use\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n";
      /***/
    },

    /***/
    "5/Sd":
    /*!********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************************/

    /*! no static exports found */

    /***/
    function Sd(module, exports, __webpack_require__) {
      var map = {
        "./index.ts": "/t6y",
        "./quick-picker-basic/quick-picker-basic.example.component.html": "ey9Y",
        "./quick-picker-basic/quick-picker-basic.example.component.ts": "TNbh",
        "./time-frame-picker-basic/time-frame-picker-basic.example.component.html": "4QCL",
        "./time-frame-picker-basic/time-frame-picker-basic.example.component.ts": "3nrA",
        "./time-frame-picker-custom/time-frame-picker-custom.example.component.html": "OAyX",
        "./time-frame-picker-custom/time-frame-picker-custom.example.component.ts": "rvpb",
        "./time-frame-picker-date/time-frame-picker-date.example.component.html": "as+W",
        "./time-frame-picker-date/time-frame-picker-date.example.component.ts": "YIVX",
        "./time-frame-picker-docs/time-frame-picker-docs.example.component.html": "8C/+",
        "./time-frame-picker-docs/time-frame-picker-docs.example.component.ts": "WyuH",
        "./time-frame-picker-inline/time-frame-picker-inline.example.component.html": "dXpY",
        "./time-frame-picker-inline/time-frame-picker-inline.example.component.ts": "I/lz",
        "./time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component.html": "ESxD",
        "./time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component.ts": "jlVH",
        "./time-frame-picker-test/time-frame-picker-test.example.component.html": "IRxw",
        "./time-frame-picker-test/time-frame-picker-test.example.component.ts": "Ktlp",
        "./time-frame-picker-visual-test/time-frame-picker-visual-test.component.html": "cw5P",
        "./time-frame-picker-visual-test/time-frame-picker-visual-test.component.ts": "Gis4",
        "./time-frame-picker.module.ts": "EIs/"
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
      webpackContext.id = "5/Sd";
      /***/
    },

    /***/
    "8C/+":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-docs/time-frame-picker-docs.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiTimeFramePickerModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<p>\n    The <code>&lt;nui-time-frame-picker&gt;</code> component allows the user to select a time range. Its model is\n    an <code><a href=\"../interfaces/ITimeframe.html\" target=\"_blank\">ITimeframe</a></code> which can be set using the\n    <code>startModel</code> input. All changes can be detected using the <code>changed</code> output. Additionally,\n    max and min dates can be defined by setting the <code>maxDate</code> and <code>minDate</code> inputs with moment\n    instances.\n</p>\n<p>\n    If the user selects a start time that's later than the currently selected end time, the selected end time will\n    adjust accordingly to preserve the current timeframe duration.\n</p>\n<p>\n    If the user attempts to select an end time that's the same as or earlier than the currently selected start time,\n    no changes occur on either the view or the model.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"time-frame-picker-inline\" exampleTitle=\"Basic Usage\">\n    <nui-time-frame-picker-inline></nui-time-frame-picker-inline>\n</nui-example-wrapper>\n\n<h2>Quick Picker Component</h2>\n\n<p>\n    The <code>&lt;nui-quick-picker&gt;</code> component is a helper component in the TimeFramePicker module.\n</p>\n<p>\n    In most cases, the default title \"Quick Picks\" on the left pane should be sufficient; however, if needed, the\n\ttitle can be customized using the <code>presetsTitle</code> input.\n</p>\n<p>\n    If a custom ordering of presets is needed, an array of keys can be passed to the <code>presetKeysOrder</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"quick-picker-basic\" exampleTitle=\"Quick Picker\">\n    <nui-quick-picker-basic></nui-quick-picker-basic>\n</nui-example-wrapper>\n\n<h2>Timeframe Picker in a Popover</h2>\n\n<p>\n    To implement the common use-case of a timeframe picker in a popover, combine the <code>&lt;nui-time-frame-picker&gt;</code>,\n\t<code>nui-quick-picker</code> and <code>nui-popover</code> elements as shown below.\n</p>\n<p>\n    To achieve a modal effect, you can set the popover's <code>[modal]</code> input to <code>true</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-frame-picker-basic\" exampleTitle=\"Timeframe Picker in a Popover\">\n    <nui-time-frame-picker-basic-example></nui-time-frame-picker-basic-example>\n</nui-example-wrapper>\n\n<h2>Date-Based Picker in Popover</h2>\n\n<nui-message type=\"info\"  [allowDismiss]=\"false\">\n    Please note that in order to adjust popover to the width of inner components you may need to pass <code>[unlimited]=\"true\"</code> to it.\n</nui-message>\n<p>\n    You are free to use different types of components inside a Quick Picker. The following example shows how to put a DatePicker inside.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"time-frame-picker-date\" exampleTitle=\"Date-Based Picker in Popover\">\n    <nui-time-frame-picker-date></nui-time-frame-picker-date>\n</nui-example-wrapper>\n\n<h2>Custom presets with Timeframe Picker</h2>\n\n<p>\n    Presets can be changed using <code>timeframeService.currentPresets</code> field.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Please note that TimeFrameService is provided in scope of NuiTimeFramePickerModule once, and\n    since one TimeFrameService instance can keep only one set of presets, in order to have different presets in 2 different\n    components of an application, please provide different TimeFrameService instances in scope of those components\n    (as in the example below, which includes <code>providers: [TimeframeService]</code> in a component decorator).\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"time-frame-picker-custom\" exampleTitle=\"Date-Based Picker in Popover\">\n    <nui-time-frame-picker-custom></nui-time-frame-picker-custom>\n</nui-example-wrapper>\n\n<h2>Multiple pickers with custom presets</h2>\n<p>\n    If you want to have multiple instances of <code>TimeFrameService</code> for your time frame pickers, you should provide one in the components providers.\n</p>\n<p>\n    The example below shows how to create a component that will be responsible for creating <code>TimeFrameService</code> per component.\n</p>\n<nui-example-wrapper filenamePrefix=\"time-frame-picker-multiple-custom-pickers\" exampleTitle=\"Multiple pickers with custom presets\">\n    <nui-time-frame-picker-multiple-custom-pickers></nui-time-frame-picker-multiple-custom-pickers>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "8sSx":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: TimeFramePickerMultipleCustomPickersExampleComponent, TimeframeServiceScoperExampleComponent */

    /***/
    function sSx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerMultipleCustomPickersExampleComponent", function () {
        return TimeFramePickerMultipleCustomPickersExampleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeframeServiceScoperExampleComponent", function () {
        return TimeframeServiceScoperExampleComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      var _c0 = ["scoper"];

      function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_nui_dialog_footer_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_nui_dialog_footer_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.cancelPopover(index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_nui_dialog_footer_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.confirmPopover(index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-quick-picker", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("presetSelected", function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.handlePresetSelection($event, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-time-frame-picker", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_Template_nui_time_frame_picker_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.updateTf($event, index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_nui_dialog_footer_3_Template, 5, 0, "nui-dialog-footer", 8);
        }

        if (rf & 2) {
          var picker_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("presets", picker_r1.presets)("selectedPreset", picker_r1.acceptedTimeframe.selectedPresetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startModel", picker_r1.acceptedTimeframe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showFooter);
        }
      }

      function TimeFramePickerMultipleCustomPickersExampleComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-time-frame-service-scoper", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-popover", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "timeFrame");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimeFramePickerMultipleCustomPickersExampleComponent_div_0_ng_template_7_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var picker_r1 = ctx.$implicit;

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r4)("hasPadding", false)("closePopover", ctx_r0.closePopoverSubject)("modal", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, picker_r1.acceptedTimeframe));
        }
      }

      var _c7 = ["*"];

      var TimeFramePickerMultipleCustomPickersExampleComponent = /*#__PURE__*/function () {
        function TimeFramePickerMultipleCustomPickersExampleComponent(cdRef) {
          _classCallCheck(this, TimeFramePickerMultipleCustomPickersExampleComponent);

          this.cdRef = cdRef;
          this.pickers = [{
            id: "1",
            presets: {
              "last42Hours": {
                name: $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Last 42 hours"]))),
                startDatetimePattern: {
                  hours: -42
                },
                endDatetimePattern: {}
              },
              "last749Days": {
                name: $localize(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Last 749 days"]))),
                startDatetimePattern: {
                  days: -749
                },
                endDatetimePattern: {}
              }
            },
            selectedPresetKey: "last749Days"
          }, {
            id: "2",
            presets: {
              "last42Hours": {
                name: $localize(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["Last 42 hours"]))),
                startDatetimePattern: {
                  hours: -42
                },
                endDatetimePattern: {}
              }
            },
            selectedPresetKey: "last42Hours"
          }, {
            id: "3",
            presets: {
              "lastYear": {
                name: $localize(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["Last year"]))),
                startDatetimePattern: {
                  year: -1
                },
                endDatetimePattern: {}
              },
              "last10Years": {
                name: $localize(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Last 10 years"]))),
                startDatetimePattern: {
                  year: -10
                },
                endDatetimePattern: {}
              }
            },
            selectedPresetKey: "lastYear"
          }];
          this.presets = {
            "last42Hours": {
              name: $localize(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Last 42 hours"]))),
              startDatetimePattern: {
                hours: -42
              },
              endDatetimePattern: {}
            },
            "last749Days": {
              name: $localize(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Last 749 days"]))),
              startDatetimePattern: {
                days: -749
              },
              endDatetimePattern: {}
            }
          };
          this.showFooter = false;
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(TimeFramePickerMultipleCustomPickersExampleComponent, [{
          key: "updateTf",
          value: function updateTf(value, index) {
            var picker = this.pickers[index];
            picker.tf = value;

            var timeFrameDatesValid = function timeFrameDatesValid() {
              var _a;

              return (_a = picker.timeframeService) === null || _a === void 0 ? void 0 : _a.areTimeFrameDatesValid(value);
            };

            var timeFrameDatesEqual = function timeFrameDatesEqual() {
              var _a;

              return (_a = picker.timeframeService) === null || _a === void 0 ? void 0 : _a.isEqual(picker.tf, picker.acceptedTimeframe);
            };

            if (timeFrameDatesValid() && !timeFrameDatesEqual()) {
              this.showFooter = true;
            }

            picker.selectedPresetKey = picker.tf.selectedPresetId;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.tfScopers.forEach(function (scoper, i) {
              var picker = _this.pickers[i];
              var timeframeService = scoper.timeframeService;
              picker.timeframeService = timeframeService;
              timeframeService.currentPresets = picker.presets;
              picker.acceptedTimeframe = timeframeService.getTimeframeByPresetId(picker.selectedPresetKey);
              picker.tf = picker.acceptedTimeframe;
            });
            this.cdRef.detectChanges();
          }
        }, {
          key: "confirmPopover",
          value: function confirmPopover(index) {
            var picker = this.pickers[index];
            this.showFooter = false;
            this.closePopoverSubject.next();
            picker.acceptedTimeframe = picker.tf;
          }
        }, {
          key: "cancelPopover",
          value: function cancelPopover(index) {
            this.showFooter = false;
            this.closePopoverSubject.next();
          }
        }, {
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey, index) {
            var _a;

            var picker = this.pickers[index];
            picker.selectedPresetKey = presetKey;
            picker.tf = (_a = picker.timeframeService) === null || _a === void 0 ? void 0 : _a.getTimeframeByPresetId(presetKey);
            picker.acceptedTimeframe = picker.tf;
            this.closePopoverSubject.next();
          }
        }]);

        return TimeFramePickerMultipleCustomPickersExampleComponent;
      }();

      TimeFramePickerMultipleCustomPickersExampleComponent.ɵfac = function TimeFramePickerMultipleCustomPickersExampleComponent_Factory(t) {
        return new (t || TimeFramePickerMultipleCustomPickersExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      TimeFramePickerMultipleCustomPickersExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimeFramePickerMultipleCustomPickersExampleComponent,
        selectors: [["nui-time-frame-picker-multiple-custom-pickers"]],
        viewQuery: function TimeFramePickerMultipleCustomPickersExampleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tfScopers = _t);
          }
        },
        decls: 1,
        vars: 1,
        consts: function consts() {
          var i18n_1;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_EXAMPLE_COMPONENT_TS___2 = goog.getMsg("Custom Range");
            i18n_1 = MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_EXAMPLE_COMPONENT_TS___2;
          } else {
            i18n_1 = $localize(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([":\u241F8946b0053f321c7db24853d1b213b1ea9794c789\u241F2079707468789363335:Custom Range"])));
          }

          var i18n_3;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_EXAMPLE_COMPONENT_TS____4 = goog.getMsg(" Cancel ");
            i18n_3 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_EXAMPLE_COMPONENT_TS____4;
          } else {
            i18n_3 = $localize(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([":\u241F6a3777f913cf3f288664f0632b9f24794fdcc24e\u241F6991067716289442185: Cancel "])));
          }

          var i18n_5;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3260792159339867964$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_EXAMPLE_COMPONENT_TS____6 = goog.getMsg(" Use ");
            i18n_5 = MSG_EXTERNAL_3260792159339867964$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_TIME_FRAME_PICKER_MULTIPLE_CUSTOM_PICKERS_EXAMPLE_COMPONENT_TS____6;
          } else {
            i18n_5 = $localize(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([":\u241Fed00b437e9ad627b97f49a51d7efc46c7f8001e5\u241F3260792159339867964: Use "])));
          }

          return [["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["scoper", ""], ["trigger", "click", 3, "template", "hasPadding", "closePopover", "modal"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverTimeFramePicker", ""], ["pickerTitle", i18n_1, 3, "presets", "selectedPreset", "presetSelected"], [3, "startModel", "changed"], [4, "ngIf"], ["nui-button", "", "type", "button", "displayStyle", "action", 1, "pr-3", "nui-time-frame-picker__cancel", 3, "click"], i18n_3, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-time-frame-picker__use", 3, "click"], i18n_5];
        },
        template: function TimeFramePickerMultipleCustomPickersExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimeFramePickerMultipleCustomPickersExampleComponent_div_0_Template, 9, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pickers);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], TimeframeServiceScoperExampleComponent, _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_7__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]];
        },
        pipes: function pipes() {
          return [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeFrameFormatPipe"]];
        },
        encapsulation: 2
      });

      var TimeframeServiceScoperExampleComponent = function TimeframeServiceScoperExampleComponent(timeframeService) {
        _classCallCheck(this, TimeframeServiceScoperExampleComponent);

        this.timeframeService = timeframeService;
      };

      TimeframeServiceScoperExampleComponent.ɵfac = function TimeframeServiceScoperExampleComponent_Factory(t) {
        return new (t || TimeframeServiceScoperExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["TimeframeService"]));
      };

      TimeframeServiceScoperExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimeframeServiceScoperExampleComponent,
        selectors: [["nui-time-frame-service-scoper"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["TimeframeService"]])],
        ngContentSelectors: _c7,
        decls: 1,
        vars: 0,
        template: function TimeframeServiceScoperExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "EIs/":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDatePickerModule,\n    NuiDialogModule,\n    NuiDividerModule,\n    NuiDocsModule,\n    NuiMessageModule,\n    NuiPopoverModule,\n    NuiTextboxModule,\n    NuiTimeFramePickerModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    QuickPickerBasicExampleComponent,\n    TimeFramePickerBasicExampleComponent,\n    TimeFramePickerCustomExampleComponent,\n    TimeFramePickerDateExampleComponent,\n    TimeFramePickerDocsExampleComponent,\n    TimeFramePickerInlineExampleComponent,\n    TimeFramePickerMultipleCustomPickersExampleComponent,\n    TimeFramePickerTestExampleComponent,\n    TimeFramePickerVisualTestComponent,\n    TimeframeServiceScoperExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TimeFramePickerDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"time-frame-picker-test\",\n        component: TimeFramePickerTestExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"time-frame-picker-visual-test\",\n        component: TimeFramePickerVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"multiple-custom-pickers\",\n        component: TimeFramePickerMultipleCustomPickersExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiTimeFramePickerModule,\n        NuiDividerModule,\n        NuiMessageModule,\n        FormsModule,\n        NuiPopoverModule,\n        NuiDocsModule,\n        NuiTextboxModule,\n        RouterModule.forChild(routes),\n        NuiDialogModule,\n        NuiDatePickerModule,\n    ],\n    declarations: [\n        QuickPickerBasicExampleComponent,\n        TimeFramePickerBasicExampleComponent,\n        TimeFramePickerCustomExampleComponent,\n        TimeFramePickerDateExampleComponent,\n        TimeFramePickerInlineExampleComponent,\n        TimeFramePickerTestExampleComponent,\n        TimeFramePickerDocsExampleComponent,\n        TimeFramePickerVisualTestComponent,\n        TimeFramePickerMultipleCustomPickersExampleComponent,\n        TimeframeServiceScoperExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class TimeFramePickerModule {\n}\n";
      /***/
    },

    /***/
    "ESxD":
    /*!*****************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component.html ***!
      \*****************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ESxD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"d-flex\" *ngFor=\"let picker of pickers; let index = index\">\n    <nui-time-frame-service-scoper #scoper>\n        <nui-popover trigger='click'\n            [template]=\"popoverTimeFramePicker\"\n            [hasPadding]=\"false\"\n            [closePopover]=\"closePopoverSubject\"\n            [modal]=\"true\"\n            ><span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ picker.acceptedTimeframe | timeFrame }}</span>\n        </nui-popover>\n\n        <ng-template #popoverTimeFramePicker>\n            <div>\n                <nui-quick-picker [presets]=\"picker.presets\"\n                    [selectedPreset]=\"picker.acceptedTimeframe.selectedPresetId\"\n                    (presetSelected)=\"handlePresetSelection($event, index)\"\n                    pickerTitle=\"Custom Range\"\n                    i18n-pickerTitle>\n                    <nui-time-frame-picker [startModel]=\"picker.acceptedTimeframe\"\n                        (changed)=\"updateTf($event, index)\"\n                    ></nui-time-frame-picker>\n                </nui-quick-picker>\n            </div>\n            <nui-dialog-footer *ngIf=\"showFooter\">\n                <button nui-button type=\"button\" displayStyle=\"action\" class=\"pr-3 nui-time-frame-picker__cancel\"\n                        (click)=\"cancelPopover(index)\" i18n>\n                    Cancel\n                </button>\n                <button nui-button type=\"button\" displayStyle=\"primary\" class=\"nui-time-frame-picker__use\"\n                        (click)=\"confirmPopover(index)\" i18n>\n                    Use\n                </button>\n            </nui-dialog-footer>\n        </ng-template>\n    </nui-time-frame-service-scoper>\n</div>\n";
      /***/
    },

    /***/
    "FwFK":
    /*!***************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/quick-picker-basic/quick-picker-basic.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: QuickPickerBasicExampleComponent */

    /***/
    function FwFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickPickerBasicExampleComponent", function () {
        return QuickPickerBasicExampleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */
      "ShSb");

      var QuickPickerBasicExampleComponent = /*#__PURE__*/function () {
        function QuickPickerBasicExampleComponent() {
          _classCallCheck(this, QuickPickerBasicExampleComponent);

          this.presets = {
            "99": {
              name: "99-th percentile"
            },
            "95": {
              name: "95-th percentile"
            },
            "80": {
              name: "80-th percentile"
            }
          };
          this.presetKeysOrder = ["95", "99", "80"];
          this.selectedPresetKey = "95";
          this.selectedValue = +(this.selectedPresetKey || "");
        }

        _createClass(QuickPickerBasicExampleComponent, [{
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey) {
            this.selectedPresetKey = presetKey;

            if (presetKey) {
              this.selectedValue = +this.selectedPresetKey;
            }
          }
        }, {
          key: "handleCustomSelection",
          value: function handleCustomSelection(num) {
            if (Object.keys(this.presets).indexOf(num.toString()) !== -1) {
              this.selectedPresetKey = num.toString();
            } else {
              this.selectedPresetKey = undefined;
            }

            this.selectedValue = num;
          }
        }, {
          key: "getTextboxValue",
          value: function getTextboxValue() {
            return +(this.selectedPresetKey || "") || this.selectedValue;
          }
        }]);

        return QuickPickerBasicExampleComponent;
      }();

      QuickPickerBasicExampleComponent.ɵfac = function QuickPickerBasicExampleComponent_Factory(t) {
        return new (t || QuickPickerBasicExampleComponent)();
      };

      QuickPickerBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuickPickerBasicExampleComponent,
        selectors: [["nui-quick-picker-basic"]],
        decls: 4,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7512936423899299183$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_QUICK_PICKER_BASIC_QUICK_PICKER_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Custom percentiles");
            i18n_0 = MSG_EXTERNAL_7512936423899299183$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_QUICK_PICKER_BASIC_QUICK_PICKER_BASIC_EXAMPLE_COMPONENT_TS_1;
          } else {
            i18n_0 = $localize(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([":\u241F01454926e96a89d8121942c3a93886cd93487572\u241F7512936423899299183:Custom percentiles"])));
          }

          return [["pickerTitle", i18n_0, 3, "presets", "selectedPreset", "presetKeysOrder", "presetSelected"], [3, "maxValue", "value", "valueChange"], [1, "nui-text-secondary"]];
        },
        template: function QuickPickerBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-quick-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("presetSelected", function QuickPickerBasicExampleComponent_Template_nui_quick_picker_presetSelected_0_listener($event) {
              return ctx.handlePresetSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-textbox-number", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function QuickPickerBasicExampleComponent_Template_nui_textbox_number_valueChange_1_listener($event) {
              return ctx.handleCustomSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("presets", ctx.presets)("selectedPreset", ctx.selectedPresetKey)("presetKeysOrder", ctx.presetKeysOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxValue", 100)("value", ctx.getTextboxValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Selected Quick Pick is ", ctx.selectedPresetKey || "null", ", Selected Value is ", ctx.selectedValue, "");
          }
        },
        directives: [_src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_1__["QuickPickerComponent"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_2__["TextboxNumberComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Gis4":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-visual-test/time-frame-picker-visual-test.component.ts ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gis4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport {\n    IQuickPickPresetDictionary, ITimeframe, ITimeFramePresetDictionary, TimeframeService,\n} from \"@nova-ui/bits\";\nimport _find from \"lodash/find\";\nimport _isUndefined from \"lodash/isUndefined\";\nimport moment, { Moment } from \"moment/moment\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-time-frame-picker-visual-test\",\n    templateUrl: \"./time-frame-picker-visual-test.component.html\",\n})\n\nexport class TimeFramePickerVisualTestComponent {\n    public presets: ITimeFramePresetDictionary;\n    public presetsDatePicker: IQuickPickPresetDictionary;\n    public selectedPresetKey?: string = \"lastHour\";\n    public selectedPresetKeyDatePicker = \"dimasBirthday\";\n    public acceptedTimeframe: ITimeframe;\n    public tf: ITimeframe;\n    public selectedDate: Moment;\n\n    public showFooter: boolean = false;\n\n    constructor(public timeframeService: TimeframeService) {\n        this.presets = timeframeService.getDefaultPresets();\n        this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey, \"02/17/1986\");\n        this.tf = this.acceptedTimeframe;\n        this.presetsDatePicker = this.getDefaultPresets();\n        this.selectedDate = this.getDateFromPreset(this.selectedPresetKeyDatePicker);\n    }\n\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    public updateTf(value: ITimeframe) {\n        this.tf = value;\n        const timeFrameDatesValid = () => this.timeframeService.areTimeFrameDatesValid(value);\n        const timeFrameDatesEqual = () => this.timeframeService.isEqual(this.tf, this.acceptedTimeframe);\n        if (timeFrameDatesValid() && !timeFrameDatesEqual()) { this.showFooter = true; }\n        this.selectedPresetKey = this.tf.selectedPresetId;\n    }\n\n    public confirmPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n        this.acceptedTimeframe = this.tf;\n    }\n    public cancelPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public handlePresetSelection(presetKey: string) {\n        this.selectedPresetKeyDatePicker = presetKey;\n        this.tf = this.timeframeService.getTimeframeByPresetId(presetKey, \"02/17/1986\");\n        this.acceptedTimeframe = this.tf;\n        this.closePopoverSubject.next();\n    }\n\n    public confirmPopoverDatePicker() {\n        this.closePopoverSubject.next();\n    }\n\n    public handlePresetSelectionDatePicker(presetKey: string) {\n        this.selectedDate = this.getDateFromPreset(presetKey);\n        this.selectedPresetKeyDatePicker = presetKey;\n        this.confirmPopoverDatePicker();\n    }\n\n    public dateChanged(value: Moment) {\n        if (!this.selectedDate.isSame(value, \"day\")) {\n            this.selectedDate = value;\n            this.selectedPresetKeyDatePicker = this.getPresetFromDate(value); // will return undefined if not found, exactly what's needed\n            this.confirmPopoverDatePicker();\n        }\n    }\n\n    private getDefaultPresets(): {[key: string]: any} {\n        return {\n            today: {name: \"Today\", pattern: () => moment()},\n            yesterday: { name: \"Yesterday\", pattern: () => moment().subtract(1, \"days\")},\n            dimasBirthday: {name: \"Dima's Birthday\", pattern: () => moment(\"1986-02-17\")},\n            random: {\n                name: \"Random date (to show that we can)\",\n                pattern: () => moment(+(new Date()) - Math.floor(Math.random() * 100000000000)),\n            },\n        };\n    }\n\n    private getDateFromPreset(presetKey: string): Moment {\n        const preset = this.getDefaultPresets()[presetKey];\n        return preset ? preset.pattern() : moment();\n    }\n\n    private getPresetFromDate(date: Moment): string {\n        const preset: string | undefined = _find(Object.keys(this.presets), (key) => date.isSame(this.getDateFromPreset(key), \"day\"));\n        if (_isUndefined(preset)) {\n            throw new Error(\"DatePreset was not found\");\n        }\n        return preset;\n    }\n}\n";
      /***/
    },

    /***/
    "I/lz":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-inline/time-frame-picker-inline.example.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ILz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ITimeframe } from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-time-frame-picker-inline\",\n    templateUrl: \"./time-frame-picker-inline.example.component.html\",\n})\n\nexport class TimeFramePickerInlineExampleComponent {\n    public tf: ITimeframe = {\n        startDatetime: moment(\"04/09/2018\", \"L\"),\n        endDatetime: moment(\"04/10/2018\", \"L\"),\n        // @ts-ignore\n        selectedPresetId: null,\n    };\n\n    public minDate = moment(\"04/07/2018\", \"L\"); // \"L\" is \"MM/DD/YYY\" in moment.js\n    public maxDate = moment();\n\n    public updateTf(value: any) {\n        this.tf = value;\n    }\n}\n";
      /***/
    },

    /***/
    "IRxw":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-test/time-frame-picker-test.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IRxw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popover id=\"nui-demo-basic-time-frame-picker\"\n             trigger='click'\n             [template]=\"popoverTimeFramePicker\"\n             [hasPadding]=\"false\"\n             [closePopover]=\"closePopoverSubject\">\n    <span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ acceptedTimeframe | timeFrame }}</span>\n</nui-popover>\n\n<div>{{ acceptedTimeframe | timeFrame:\"LL LTS\" }}</div>\n\n<ng-template #popoverTimeFramePicker>\n    <div>\n        <nui-quick-picker [presets]=\"presets\"\n                          [selectedPreset]=\"acceptedTimeframe.selectedPresetId\"\n                          (presetSelected)=\"handlePresetSelection($event)\"\n                          pickerTitle=\"Custom Range\"\n                          i18n-pickerTitle>\n            <nui-time-frame-picker [startModel]=\"acceptedTimeframe\"\n                                   (changed)=\"updateTf($event)\"\n                                   [maxDate]=\"maxDate\"\n                                   [minDate]=\"minDate\">\n            </nui-time-frame-picker>\n        </nui-quick-picker>\n    </div>\n    <nui-dialog-footer *ngIf=\"showFooter\">\n        <button nui-button\n                type=\"button\"\n                displayStyle=\"action\"\n                class=\"pr-3 nui-time-frame-picker__cancel\"\n                (click)=\"cancelPopover()\"\n                id=\"nui-demo-basic-time-frame-picker-cancel\"\n                i18n>\n            Cancel\n        </button>\n        <button nui-button\n                type=\"button\"\n                displayStyle=\"primary\"\n                class=\"nui-time-frame-picker__use\"\n                (click)=\"confirmPopover()\"\n                id=\"nui-demo-basic-time-frame-picker-use\"\n                i18n>\n            Use\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n";
      /***/
    },

    /***/
    "IdVO":
    /*!***************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-custom/time-frame-picker-custom.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: TimeFramePickerCustomExampleComponent */

    /***/
    function IdVO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerCustomExampleComponent", function () {
        return TimeFramePickerCustomExampleComponent;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      function TimeFramePickerCustomExampleComponent_ng_template_4_nui_dialog_footer_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFramePickerCustomExampleComponent_ng_template_4_nui_dialog_footer_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r3.cancelPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFramePickerCustomExampleComponent_ng_template_4_nui_dialog_footer_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r5.confirmPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function TimeFramePickerCustomExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-quick-picker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("presetSelected", function TimeFramePickerCustomExampleComponent_ng_template_4_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.handlePresetSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-time-frame-picker", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function TimeFramePickerCustomExampleComponent_ng_template_4_Template_nui_time_frame_picker_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.updateTf($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TimeFramePickerCustomExampleComponent_ng_template_4_nui_dialog_footer_3_Template, 5, 0, "nui-dialog-footer", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("presets", ctx_r1.presets)("selectedPreset", ctx_r1.acceptedTimeframe.selectedPresetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startModel", ctx_r1.acceptedTimeframe);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showFooter);
        }
      }

      var TimeFramePickerCustomExampleComponent = /*#__PURE__*/function () {
        function TimeFramePickerCustomExampleComponent(timeframeService) {
          _classCallCheck(this, TimeFramePickerCustomExampleComponent);

          this.timeframeService = timeframeService;
          this.presets = {
            "last42Hours": {
              name: $localize(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Last 42 hours"]))),
              startDatetimePattern: {
                hours: -42
              },
              endDatetimePattern: {}
            },
            "last749Days": {
              name: $localize(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Last 749 days"]))),
              startDatetimePattern: {
                days: -749
              },
              endDatetimePattern: {}
            }
          };
          this.selectedPresetKey = "last42Hours";
          this.showFooter = false;
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.timeframeService.currentPresets = this.presets;
          this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey);
          this.tf = this.acceptedTimeframe;
        }

        _createClass(TimeFramePickerCustomExampleComponent, [{
          key: "updateTf",
          value: function updateTf(value) {
            var _this2 = this;

            this.tf = value;

            var timeFrameDatesValid = function timeFrameDatesValid() {
              return _this2.timeframeService.areTimeFrameDatesValid(value);
            };

            var timeFrameDatesEqual = function timeFrameDatesEqual() {
              return _this2.timeframeService.isEqual(_this2.tf, _this2.acceptedTimeframe);
            };

            if (timeFrameDatesValid() && !timeFrameDatesEqual()) {
              this.showFooter = true;
            }

            this.selectedPresetKey = this.tf.selectedPresetId;
          }
        }, {
          key: "confirmPopover",
          value: function confirmPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
            this.acceptedTimeframe = this.tf;
          }
        }, {
          key: "cancelPopover",
          value: function cancelPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
          }
        }, {
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey) {
            this.selectedPresetKey = presetKey;
            this.tf = this.timeframeService.getTimeframeByPresetId(presetKey);
            this.acceptedTimeframe = this.tf;
            this.closePopoverSubject.next();
          }
        }]);

        return TimeFramePickerCustomExampleComponent;
      }();

      TimeFramePickerCustomExampleComponent.ɵfac = function TimeFramePickerCustomExampleComponent_Factory(t) {
        return new (t || TimeFramePickerCustomExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["TimeframeService"]));
      };

      TimeFramePickerCustomExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimeFramePickerCustomExampleComponent,
        selectors: [["nui-time-frame-picker-custom"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["TimeframeService"]])],
        decls: 6,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_CUSTOM_TIME_FRAME_PICKER_CUSTOM_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("Custom Range");
            i18n_0 = MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_CUSTOM_TIME_FRAME_PICKER_CUSTOM_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([":\u241F8946b0053f321c7db24853d1b213b1ea9794c789\u241F2079707468789363335:Custom Range"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_CUSTOM_TIME_FRAME_PICKER_CUSTOM_EXAMPLE_COMPONENT_TS___3 = goog.getMsg(" Cancel ");
            i18n_2 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_CUSTOM_TIME_FRAME_PICKER_CUSTOM_EXAMPLE_COMPONENT_TS___3;
          } else {
            i18n_2 = $localize(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([":\u241Fbf844a41a29961b6dacc48a20eaf97bef0cf5013\u241F7452095619502551190: Cancel "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3416889908563565605$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_CUSTOM_TIME_FRAME_PICKER_CUSTOM_EXAMPLE_COMPONENT_TS___5 = goog.getMsg(" Use ");
            i18n_4 = MSG_EXTERNAL_3416889908563565605$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_CUSTOM_TIME_FRAME_PICKER_CUSTOM_EXAMPLE_COMPONENT_TS___5;
          } else {
            i18n_4 = $localize(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([":\u241F3c8adc665cde2a280fd027f86fca78239d8a890c\u241F3416889908563565605: Use "])));
          }

          return [["trigger", "click", 3, "template", "hasPadding", "closePopover", "modal"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverTimeFramePicker", ""], ["pickerTitle", i18n_0, 3, "presets", "selectedPreset", "presetSelected"], [3, "startModel", "changed"], [4, "ngIf"], ["nui-button", "", "type", "button", "displayStyle", "action", 1, "pr-3", "nui-time-frame-picker__cancel", 3, "click"], i18n_2, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-time-frame-picker__use", 3, "click"], i18n_4];
        },
        template: function TimeFramePickerCustomExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-popover", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TimeFramePickerCustomExampleComponent_ng_template_4_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("modal", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.acceptedTimeframe));
          }
        },
        directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_4__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_5__["TimeFramePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_7__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Ktlp":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-test/time-frame-picker-test.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ktlp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ITimeframe, ITimeFramePresetDictionary, TimeframeService } from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-time-frame-picker-test\",\n    templateUrl: \"./time-frame-picker-test.example.component.html\",\n})\n\nexport class TimeFramePickerTestExampleComponent {\n    public presets: ITimeFramePresetDictionary;\n    public selectedPresetKey?: string = \"lastHour\";\n    public acceptedTimeframe: ITimeframe;\n    public tf: ITimeframe;\n\n    public minDate = moment(\"04/07/2018\", \"L\"); // \"L\" is \"MM/DD/YYY\" in moment.js\n    public maxDate = moment();\n\n    public showFooter: boolean = false;\n\n    constructor(public timeframeService: TimeframeService) {\n        this.presets = timeframeService.getDefaultPresets();\n        this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey);\n        this.tf = this.acceptedTimeframe;\n    }\n\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    public updateTf(value: ITimeframe) {\n        this.tf = value;\n        const timeFrameDatesValid = () => this.timeframeService.areTimeFrameDatesValid(value);\n        const timeFrameDatesEqual = () => this.timeframeService.isEqual(this.tf, this.acceptedTimeframe);\n        if (timeFrameDatesValid() && !timeFrameDatesEqual()) { this.showFooter = true; }\n\n        this.selectedPresetKey = this.tf.selectedPresetId;\n    }\n\n    public confirmPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n        this.acceptedTimeframe = this.tf;\n    }\n    public cancelPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public handlePresetSelection(presetKey: string) {\n        this.selectedPresetKey = presetKey;\n        this.tf = this.timeframeService.getTimeframeByPresetId(presetKey);\n        this.acceptedTimeframe = this.tf;\n        this.closePopoverSubject.next();\n    }\n}\n";
      /***/
    },

    /***/
    "OAyX":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-custom/time-frame-picker-custom.example.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OAyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popover trigger='click'\n             [template]=\"popoverTimeFramePicker\"\n             [hasPadding]=\"false\"\n             [closePopover]=\"closePopoverSubject\"\n             [modal]=\"true\">\n    <span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ acceptedTimeframe | timeFrame }}</span>\n</nui-popover>\n\n<ng-template #popoverTimeFramePicker>\n    <div>\n        <nui-quick-picker [presets]=\"presets\"\n                          [selectedPreset]=\"acceptedTimeframe.selectedPresetId\"\n                          (presetSelected)=\"handlePresetSelection($event)\"\n                          pickerTitle=\"Custom Range\"\n                          i18n-pickerTitle>\n            <nui-time-frame-picker [startModel]=\"acceptedTimeframe\"\n                                          (changed)=\"updateTf($event)\">\n            </nui-time-frame-picker>\n        </nui-quick-picker>\n    </div>\n    <nui-dialog-footer *ngIf=\"showFooter\">\n        <button nui-button\n                type=\"button\"\n                displayStyle=\"action\"\n                class=\"pr-3 nui-time-frame-picker__cancel\"\n                (click)=\"cancelPopover()\"\n                i18n>\n            Cancel\n        </button>\n        <button nui-button\n                type=\"button\"\n                displayStyle=\"primary\"\n                class=\"nui-time-frame-picker__use\"\n                (click)=\"confirmPopover()\"\n                i18n>\n            Use\n        </button>\n    </nui-dialog-footer>\n</ng-template>\n";
      /***/
    },

    /***/
    "OxFi":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-docs/time-frame-picker-docs.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: TimeFramePickerDocsExampleComponent */

    /***/
    function OxFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerDocsExampleComponent", function () {
        return TimeFramePickerDocsExampleComponent;
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


      var _time_frame_picker_inline_time_frame_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../time-frame-picker-inline/time-frame-picker-inline.example.component */
      "ZY4c");
      /* harmony import */


      var _quick_picker_basic_quick_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../quick-picker-basic/quick-picker-basic.example.component */
      "FwFK");
      /* harmony import */


      var _time_frame_picker_basic_time_frame_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../time-frame-picker-basic/time-frame-picker-basic.example.component */
      "V14i");
      /* harmony import */


      var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/message/message.component */
      "4pDv");
      /* harmony import */


      var _time_frame_picker_date_time_frame_picker_date_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../time-frame-picker-date/time-frame-picker-date.example.component */
      "QSCk");
      /* harmony import */


      var _time_frame_picker_custom_time_frame_picker_custom_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../time-frame-picker-custom/time-frame-picker-custom.example.component */
      "IdVO");
      /* harmony import */


      var _time_frame_picker_multiple_custom_pickers_time_frame_picker_multiple_custom_pickers_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component */
      "8sSx");

      var TimeFramePickerDocsExampleComponent = function TimeFramePickerDocsExampleComponent() {
        _classCallCheck(this, TimeFramePickerDocsExampleComponent);
      };

      TimeFramePickerDocsExampleComponent.ɵfac = function TimeFramePickerDocsExampleComponent_Factory(t) {
        return new (t || TimeFramePickerDocsExampleComponent)();
      };

      TimeFramePickerDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimeFramePickerDocsExampleComponent,
        selectors: [["nui-time-frame-picker-docs"]],
        decls: 116,
        vars: 2,
        consts: [["href", "../interfaces/ITimeframe.html", "target", "_blank"], ["filenamePrefix", "time-frame-picker-inline", "exampleTitle", "Basic Usage"], ["filenamePrefix", "quick-picker-basic", "exampleTitle", "Quick Picker"], ["filenamePrefix", "time-frame-picker-basic", "exampleTitle", "Timeframe Picker in a Popover"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "time-frame-picker-date", "exampleTitle", "Date-Based Picker in Popover"], ["filenamePrefix", "time-frame-picker-custom", "exampleTitle", "Date-Based Picker in Popover"], ["filenamePrefix", "time-frame-picker-multiple-custom-pickers", "exampleTitle", "Multiple pickers with custom presets"]],
        template: function TimeFramePickerDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiTimeFramePickerModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "<nui-time-frame-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " component allows the user to select a time range. Its model is an ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ITimeframe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " which can be set using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "startModel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " input. All changes can be detected using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "changed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " output. Additionally, max and min dates can be defined by setting the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "maxDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "minDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " inputs with moment instances.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " If the user selects a start time that's later than the currently selected end time, the selected end time will adjust accordingly to preserve the current timeframe duration.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " If the user attempts to select an end time that's the same as or earlier than the currently selected start time, no changes occur on either the view or the model.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nui-example-wrapper", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nui-time-frame-picker-inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Quick Picker Component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "<nui-quick-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " component is a helper component in the TimeFramePicker module.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " In most cases, the default title \"Quick Picks\" on the left pane should be sufficient; however, if needed, the title can be customized using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "presetsTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " If a custom ordering of presets is needed, an array of keys can be passed to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "presetKeysOrder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " input.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nui-example-wrapper", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nui-quick-picker-basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Timeframe Picker in a Popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " To implement the common use-case of a timeframe picker in a popover, combine the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "<nui-time-frame-picker>");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "nui-quick-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "nui-popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " elements as shown below.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " To achieve a modal effect, you can set the popover's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "[modal]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " input to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nui-example-wrapper", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "nui-time-frame-picker-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Date-Based Picker in Popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nui-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Please note that in order to adjust popover to the width of inner components you may need to pass ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "[unlimited]=\"true\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " to it.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " You are free to use different types of components inside a Quick Picker. The following example shows how to put a DatePicker inside.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nui-time-frame-picker-date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Custom presets with Timeframe Picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Presets can be changed using ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "timeframeService.currentPresets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " field.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "nui-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Please note that TimeFrameService is provided in scope of NuiTimeFramePickerModule once, and since one TimeFrameService instance can keep only one set of presets, in order to have different presets in 2 different components of an application, please provide different TimeFrameService instances in scope of those components (as in the example below, which includes ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "providers: [TimeframeService]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " in a component decorator).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "nui-time-frame-picker-custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Multiple pickers with custom presets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " If you want to have multiple instances of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "TimeFrameService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " for your time frame pickers, you should provide one in the components providers.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " The example below shows how to create a component that will be responsible for creating ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "TimeFrameService");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " per component.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nui-example-wrapper", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "nui-time-frame-picker-multiple-custom-pickers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _time_frame_picker_inline_time_frame_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_2__["TimeFramePickerInlineExampleComponent"], _quick_picker_basic_quick_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["QuickPickerBasicExampleComponent"], _time_frame_picker_basic_time_frame_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["TimeFramePickerBasicExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _time_frame_picker_date_time_frame_picker_date_example_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerDateExampleComponent"], _time_frame_picker_custom_time_frame_picker_custom_example_component__WEBPACK_IMPORTED_MODULE_7__["TimeFramePickerCustomExampleComponent"], _time_frame_picker_multiple_custom_pickers_time_frame_picker_multiple_custom_pickers_example_component__WEBPACK_IMPORTED_MODULE_8__["TimeFramePickerMultipleCustomPickersExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "QSCk":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-date/time-frame-picker-date.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: TimeFramePickerDateExampleComponent */

    /***/
    function QSCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerDateExampleComponent", function () {
        return TimeFramePickerDateExampleComponent;
      });
      /* harmony import */


      var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash/find */
      "J2m7");
      /* harmony import */


      var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash/isUndefined */
      "TP7S");
      /* harmony import */


      var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");

      function TimeFramePickerDateExampleComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nui-quick-picker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("presetSelected", function TimeFramePickerDateExampleComponent_ng_template_7_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.handlePresetSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nui-date-picker", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function TimeFramePickerDateExampleComponent_ng_template_7_Template_nui_date_picker_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.dateChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("presets", ctx_r1.presets)("selectedPreset", ctx_r1.selectedPresetKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("inline", true)("value", ctx_r1.selectedDate)("preserveInsignificant", false);
        }
      }

      var TimeFramePickerDateExampleComponent = /*#__PURE__*/function () {
        function TimeFramePickerDateExampleComponent() {
          _classCallCheck(this, TimeFramePickerDateExampleComponent);

          this.selectedPresetKey = "ihorsBirthday";
          this.showFooter = true;
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.presets = this.getDefaultPresets();
          this.selectedDate = this.getDateFromPreset(this.selectedPresetKey);
        }

        _createClass(TimeFramePickerDateExampleComponent, [{
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey) {
            this.selectedDate = this.getDateFromPreset(presetKey);
            this.selectedPresetKey = presetKey;
            this.confirmPopover();
          }
        }, {
          key: "dateChanged",
          value: function dateChanged(value) {
            if (!this.selectedDate.isSame(value, "day")) {
              this.selectedDate = value;
              this.selectedPresetKey = this.getPresetFromDate(value); // will return undefined if not found, exactly what's needed

              this.confirmPopover();
            }
          }
        }, {
          key: "confirmPopover",
          value: function confirmPopover() {
            this.closePopoverSubject.next();
          } // These private methods are specific and will be in any case abstracted to a service by end users:

        }, {
          key: "getDefaultPresets",
          value: function getDefaultPresets() {
            return {
              today: {
                name: "Today",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_2___default()();
                }
              },
              yesterday: {
                name: "Yesterday",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(1, "days");
                }
              },
              ihorsBirthday: {
                name: "Ihor's Birthday",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_2___default()("1989-04-09");
                }
              },
              random: {
                name: "Random date (to show that we can)",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_2___default()(+new Date() - Math.floor(Math.random() * 100000000000));
                }
              }
            };
          }
        }, {
          key: "getDateFromPreset",
          value: function getDateFromPreset(presetKey) {
            var preset = this.getDefaultPresets()[presetKey];
            return preset ? preset.pattern() : moment_moment__WEBPACK_IMPORTED_MODULE_2___default()();
          }
        }, {
          key: "getPresetFromDate",
          value: function getPresetFromDate(date) {
            var _this3 = this;

            var preset = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(Object.keys(this.presets), function (key) {
              return date.isSame(_this3.getDateFromPreset(key), "day");
            });

            if (lodash_isUndefined__WEBPACK_IMPORTED_MODULE_1___default()(preset)) {
              throw new Error("DatePreset was not found");
            }

            return preset;
          }
        }]);

        return TimeFramePickerDateExampleComponent;
      }();

      TimeFramePickerDateExampleComponent.ɵfac = function TimeFramePickerDateExampleComponent_Factory(t) {
        return new (t || TimeFramePickerDateExampleComponent)();
      };

      TimeFramePickerDateExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TimeFramePickerDateExampleComponent,
        selectors: [["nui-time-frame-picker-date"]],
        decls: 9,
        vars: 6,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_6223578779816929641$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_DATE_TIME_FRAME_PICKER_DATE_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("Custom Date");
            i18n_0 = MSG_EXTERNAL_6223578779816929641$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_DATE_TIME_FRAME_PICKER_DATE_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([":\u241F3097578df437c16281ba2d26960e4ec68092bd55\u241F6223578779816929641:Custom Date"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_4115009543277682440$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_DATE_TIME_FRAME_PICKER_DATE_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Baselines");
            i18n_2 = MSG_EXTERNAL_4115009543277682440$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_DATE_TIME_FRAME_PICKER_DATE_EXAMPLE_COMPONENT_TS__3;
          } else {
            i18n_2 = $localize(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([":\u241F0bcfbf63721dae8aa56ca8e134c4e572c95d54db\u241F4115009543277682440:Baselines"])));
          }

          return [["trigger", "click", 3, "template", "hasPadding", "closePopover", "unlimited", "modal"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverDayPicker", ""], ["pickerTitle", i18n_0, "presetsTitle", i18n_2, 3, "presets", "selectedPreset", "presetSelected"], [3, "inline", "value", "preserveInsignificant", "valueChange"]];
        },
        template: function TimeFramePickerDateExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-popover", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Select day");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Selected date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TimeFramePickerDateExampleComponent_ng_template_7_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("unlimited", true)("modal", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.selectedDate == null ? null : ctx.selectedDate.format("MMMM Do, YYYY"));
          }
        },
        directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_6__["QuickPickerComponent"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TNbh":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/quick-picker-basic/quick-picker-basic.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TNbh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IQuickPickPresetDictionary } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-quick-picker-basic\",\n    templateUrl: \"./quick-picker-basic.example.component.html\",\n})\n\nexport class QuickPickerBasicExampleComponent {\n    public presets: IQuickPickPresetDictionary = {\n        \"99\": {\n            name: \"99-th percentile\",\n        },\n        \"95\": {\n            name: \"95-th percentile\",\n        },\n        \"80\": {\n            name: \"80-th percentile\",\n        },\n    };\n    public presetKeysOrder = [\"95\", \"99\", \"80\"];\n    public selectedPresetKey?: string = \"95\";\n    public selectedValue: number = +(this.selectedPresetKey || \"\");\n    public handlePresetSelection(presetKey: string) {\n        this.selectedPresetKey = presetKey;\n        if (presetKey) {\n            this.selectedValue = +this.selectedPresetKey;\n        }\n    }\n    public handleCustomSelection(num: number) {\n        if (Object.keys(this.presets).indexOf(num.toString()) !== -1) {\n            this.selectedPresetKey = num.toString();\n        } else {\n            this.selectedPresetKey = undefined;\n        }\n        this.selectedValue = num;\n    }\n\n    public getTextboxValue() {\n        return +(this.selectedPresetKey || \"\") || this.selectedValue;\n    }\n}\n";
      /***/
    },

    /***/
    "UOCq":
    /*!*****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-visual-test/time-frame-picker-visual-test.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: TimeFramePickerVisualTestComponent */

    /***/
    function UOCq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerVisualTestComponent", function () {
        return TimeFramePickerVisualTestComponent;
      });
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nova-ui/bits */
      "b5Xb");
      /* harmony import */


      var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash/find */
      "J2m7");
      /* harmony import */


      var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash/isUndefined */
      "TP7S");
      /* harmony import */


      var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../../src/lib/date-picker/date-picker.component */
      "uIAT");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      function TimeFramePickerVisualTestComponent_ng_template_9_nui_dialog_footer_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimeFramePickerVisualTestComponent_ng_template_9_nui_dialog_footer_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r7.cancelPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TimeFramePickerVisualTestComponent_ng_template_9_nui_dialog_footer_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r9.confirmPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function TimeFramePickerVisualTestComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nui-quick-picker", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("presetSelected", function TimeFramePickerVisualTestComponent_ng_template_9_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.handlePresetSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nui-time-frame-picker", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changed", function TimeFramePickerVisualTestComponent_ng_template_9_Template_nui_time_frame_picker_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r12.updateTf($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TimeFramePickerVisualTestComponent_ng_template_9_nui_dialog_footer_3_Template, 5, 0, "nui-dialog-footer", 12);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("presets", ctx_r1.presets)("selectedPreset", ctx_r1.acceptedTimeframe.selectedPresetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("startModel", ctx_r1.acceptedTimeframe);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showFooter);
        }
      }

      function TimeFramePickerVisualTestComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nui-quick-picker", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("presetSelected", function TimeFramePickerVisualTestComponent_ng_template_21_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r13.handlePresetSelectionDatePicker($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nui-date-picker", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function TimeFramePickerVisualTestComponent_ng_template_21_Template_nui_date_picker_valueChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r15.dateChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("presets", ctx_r3.presetsDatePicker)("selectedPreset", ctx_r3.selectedPresetKeyDatePicker);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inline", true)("value", ctx_r3.selectedDate)("preserveInsignificant", false);
        }
      }

      function TimeFramePickerVisualTestComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nui-quick-picker", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("presetSelected", function TimeFramePickerVisualTestComponent_ng_template_30_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r16.handlePresetSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nui-time-frame-picker", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changed", function TimeFramePickerVisualTestComponent_ng_template_30_Template_nui_time_frame_picker_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r18.updateTf($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nui-date-picker", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function TimeFramePickerVisualTestComponent_ng_template_30_Template_nui_date_picker_valueChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.dateChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("presets", ctx_r5.presets)("selectedPreset", ctx_r5.acceptedTimeframe.selectedPresetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("startModel", ctx_r5.acceptedTimeframe);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inline", true)("value", ctx_r5.selectedDate)("preserveInsignificant", false);
        }
      }

      var TimeFramePickerVisualTestComponent = /*#__PURE__*/function () {
        function TimeFramePickerVisualTestComponent(timeframeService) {
          _classCallCheck(this, TimeFramePickerVisualTestComponent);

          this.timeframeService = timeframeService;
          this.selectedPresetKey = "lastHour";
          this.selectedPresetKeyDatePicker = "dimasBirthday";
          this.showFooter = false;
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.presets = timeframeService.getDefaultPresets();
          this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey, "02/17/1986");
          this.tf = this.acceptedTimeframe;
          this.presetsDatePicker = this.getDefaultPresets();
          this.selectedDate = this.getDateFromPreset(this.selectedPresetKeyDatePicker);
        }

        _createClass(TimeFramePickerVisualTestComponent, [{
          key: "updateTf",
          value: function updateTf(value) {
            var _this4 = this;

            this.tf = value;

            var timeFrameDatesValid = function timeFrameDatesValid() {
              return _this4.timeframeService.areTimeFrameDatesValid(value);
            };

            var timeFrameDatesEqual = function timeFrameDatesEqual() {
              return _this4.timeframeService.isEqual(_this4.tf, _this4.acceptedTimeframe);
            };

            if (timeFrameDatesValid() && !timeFrameDatesEqual()) {
              this.showFooter = true;
            }

            this.selectedPresetKey = this.tf.selectedPresetId;
          }
        }, {
          key: "confirmPopover",
          value: function confirmPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
            this.acceptedTimeframe = this.tf;
          }
        }, {
          key: "cancelPopover",
          value: function cancelPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
          }
        }, {
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey) {
            this.selectedPresetKeyDatePicker = presetKey;
            this.tf = this.timeframeService.getTimeframeByPresetId(presetKey, "02/17/1986");
            this.acceptedTimeframe = this.tf;
            this.closePopoverSubject.next();
          }
        }, {
          key: "confirmPopoverDatePicker",
          value: function confirmPopoverDatePicker() {
            this.closePopoverSubject.next();
          }
        }, {
          key: "handlePresetSelectionDatePicker",
          value: function handlePresetSelectionDatePicker(presetKey) {
            this.selectedDate = this.getDateFromPreset(presetKey);
            this.selectedPresetKeyDatePicker = presetKey;
            this.confirmPopoverDatePicker();
          }
        }, {
          key: "dateChanged",
          value: function dateChanged(value) {
            if (!this.selectedDate.isSame(value, "day")) {
              this.selectedDate = value;
              this.selectedPresetKeyDatePicker = this.getPresetFromDate(value); // will return undefined if not found, exactly what's needed

              this.confirmPopoverDatePicker();
            }
          }
        }, {
          key: "getDefaultPresets",
          value: function getDefaultPresets() {
            return {
              today: {
                name: "Today",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()();
                }
              },
              yesterday: {
                name: "Yesterday",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()().subtract(1, "days");
                }
              },
              dimasBirthday: {
                name: "Dima's Birthday",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("1986-02-17");
                }
              },
              random: {
                name: "Random date (to show that we can)",
                pattern: function pattern() {
                  return moment_moment__WEBPACK_IMPORTED_MODULE_3___default()(+new Date() - Math.floor(Math.random() * 100000000000));
                }
              }
            };
          }
        }, {
          key: "getDateFromPreset",
          value: function getDateFromPreset(presetKey) {
            var preset = this.getDefaultPresets()[presetKey];
            return preset ? preset.pattern() : moment_moment__WEBPACK_IMPORTED_MODULE_3___default()();
          }
        }, {
          key: "getPresetFromDate",
          value: function getPresetFromDate(date) {
            var _this5 = this;

            var preset = lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(Object.keys(this.presets), function (key) {
              return date.isSame(_this5.getDateFromPreset(key), "day");
            });

            if (lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(preset)) {
              throw new Error("DatePreset was not found");
            }

            return preset;
          }
        }]);

        return TimeFramePickerVisualTestComponent;
      }();

      TimeFramePickerVisualTestComponent.ɵfac = function TimeFramePickerVisualTestComponent_Factory(t) {
        return new (t || TimeFramePickerVisualTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["TimeframeService"]));
      };

      TimeFramePickerVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: TimeFramePickerVisualTestComponent,
        selectors: [["nui-time-frame-picker-visual-test"]],
        decls: 32,
        vars: 21,
        consts: [[1, "container"], [1, "row"], [1, "col"], ["trigger", "click", "id", "nui-demo-visual-default-popover", 3, "template", "hasPadding", "closePopover", "modal"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverTimeFramePicker", ""], ["trigger", "click", "id", "nui-demo-visual-datepicker-popover", 3, "template", "hasPadding", "closePopover", "unlimited", "modal"], ["popoverDayPicker", ""], ["trigger", "click", "id", "nui-demo-visual-complex-popover", 3, "template", "hasPadding", "closePopover", "modal", "unlimited"], ["popoverTimeFramePickerUnlimited", ""], ["pickerTitle", "Custom Range", 3, "presets", "selectedPreset", "presetSelected"], [3, "startModel", "changed"], [4, "ngIf"], ["nui-button", "", "type", "button", "displayStyle", "action", 1, "pr-3", "nui-time-frame-picker__cancel", 3, "click"], ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-time-frame-picker__use", 3, "click"], ["pickerTitle", "Custom Date", "presetsTitle", "Baselines", 3, "presets", "selectedPreset", "presetSelected"], [3, "inline", "value", "preserveInsignificant", "valueChange"]],
        template: function TimeFramePickerVisualTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "TimeFrame Picker in Popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "nui-popover", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TimeFramePickerVisualTestComponent_ng_template_9_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "TimeFrame Picker with other components");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "nui-popover", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Select day");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Selected date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TimeFramePickerVisualTestComponent_ng_template_21_Template, 3, 5, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "TimeFrame Picker + Date picker with unlimited width in Popover");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "nui-popover", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TimeFramePickerVisualTestComponent_ng_template_30_Template, 4, 6, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("modal", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 17, ctx.acceptedTimeframe));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("template", _r2)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("unlimited", true)("modal", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.selectedDate == null ? null : ctx.selectedDate.format("MMMM Do, YYYY"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("template", _r4)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("modal", true)("unlimited", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 19, ctx.acceptedTimeframe));
          }
        },
        directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_7__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_8__["TimeFramePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_10__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], _src_lib_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_12__["DatePickerComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_13__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "V14i":
    /*!*************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-basic/time-frame-picker-basic.example.component.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: TimeFramePickerBasicExampleComponent */

    /***/
    function V14i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerBasicExampleComponent", function () {
        return TimeFramePickerBasicExampleComponent;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      function TimeFramePickerBasicExampleComponent_ng_template_4_nui_dialog_footer_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFramePickerBasicExampleComponent_ng_template_4_nui_dialog_footer_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r3.cancelPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](2, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFramePickerBasicExampleComponent_ng_template_4_nui_dialog_footer_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r5.confirmPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](4, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function TimeFramePickerBasicExampleComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-quick-picker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("presetSelected", function TimeFramePickerBasicExampleComponent_ng_template_4_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.handlePresetSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-time-frame-picker", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changed", function TimeFramePickerBasicExampleComponent_ng_template_4_Template_nui_time_frame_picker_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.updateTf($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TimeFramePickerBasicExampleComponent_ng_template_4_nui_dialog_footer_3_Template, 5, 0, "nui-dialog-footer", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("presets", ctx_r1.presets)("selectedPreset", ctx_r1.acceptedTimeframe.selectedPresetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("startModel", ctx_r1.acceptedTimeframe);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showFooter);
        }
      }

      var TimeFramePickerBasicExampleComponent = /*#__PURE__*/function () {
        function TimeFramePickerBasicExampleComponent(timeframeService) {
          _classCallCheck(this, TimeFramePickerBasicExampleComponent);

          this.timeframeService = timeframeService;
          this.selectedPresetKey = "lastHour";
          this.showFooter = false;
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.presets = timeframeService.getDefaultPresets();
          this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey);
          this.tf = this.acceptedTimeframe;
        }

        _createClass(TimeFramePickerBasicExampleComponent, [{
          key: "updateTf",
          value: function updateTf(value) {
            var _this6 = this;

            this.tf = value;

            var timeFrameDatesValid = function timeFrameDatesValid() {
              return _this6.timeframeService.areTimeFrameDatesValid(value);
            };

            var timeFrameDatesEqual = function timeFrameDatesEqual() {
              return _this6.timeframeService.isEqual(_this6.tf, _this6.acceptedTimeframe);
            };

            if (timeFrameDatesValid() && !timeFrameDatesEqual()) {
              this.showFooter = true;
            }

            this.selectedPresetKey = this.tf.selectedPresetId;
          }
        }, {
          key: "confirmPopover",
          value: function confirmPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
            this.acceptedTimeframe = this.tf;
          }
        }, {
          key: "cancelPopover",
          value: function cancelPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
          }
        }, {
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey) {
            this.selectedPresetKey = presetKey;
            this.tf = this.timeframeService.getTimeframeByPresetId(presetKey);
            this.acceptedTimeframe = this.tf;
            this.closePopoverSubject.next();
          }
        }]);

        return TimeFramePickerBasicExampleComponent;
      }();

      TimeFramePickerBasicExampleComponent.ɵfac = function TimeFramePickerBasicExampleComponent_Factory(t) {
        return new (t || TimeFramePickerBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["TimeframeService"]));
      };

      TimeFramePickerBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimeFramePickerBasicExampleComponent,
        selectors: [["nui-time-frame-picker-basic-example"]],
        decls: 6,
        vars: 7,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_BASIC_TIME_FRAME_PICKER_BASIC_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("Custom Range");
            i18n_0 = MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_BASIC_TIME_FRAME_PICKER_BASIC_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([":\u241F8946b0053f321c7db24853d1b213b1ea9794c789\u241F2079707468789363335:Custom Range"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_BASIC_TIME_FRAME_PICKER_BASIC_EXAMPLE_COMPONENT_TS___3 = goog.getMsg(" Cancel ");
            i18n_2 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_BASIC_TIME_FRAME_PICKER_BASIC_EXAMPLE_COMPONENT_TS___3;
          } else {
            i18n_2 = $localize(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([":\u241Fbf844a41a29961b6dacc48a20eaf97bef0cf5013\u241F7452095619502551190: Cancel "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3416889908563565605$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_BASIC_TIME_FRAME_PICKER_BASIC_EXAMPLE_COMPONENT_TS___5 = goog.getMsg(" Use ");
            i18n_4 = MSG_EXTERNAL_3416889908563565605$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_BASIC_TIME_FRAME_PICKER_BASIC_EXAMPLE_COMPONENT_TS___5;
          } else {
            i18n_4 = $localize(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([":\u241F3c8adc665cde2a280fd027f86fca78239d8a890c\u241F3416889908563565605: Use "])));
          }

          return [["trigger", "click", 3, "template", "hasPadding", "closePopover", "modal"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverTimeFramePicker", ""], ["pickerTitle", i18n_0, 3, "presets", "selectedPreset", "presetSelected"], [3, "startModel", "changed"], [4, "ngIf"], ["nui-button", "", "type", "button", "displayStyle", "action", 1, "pr-3", "nui-time-frame-picker__cancel", 3, "click"], i18n_2, ["nui-button", "", "type", "button", "displayStyle", "primary", 1, "nui-time-frame-picker__use", 3, "click"], i18n_4];
        },
        template: function TimeFramePickerBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-popover", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TimeFramePickerBasicExampleComponent_ng_template_4_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("modal", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx.acceptedTimeframe));
          }
        },
        directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_4__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_5__["TimeFramePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_7__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "WyuH":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-docs/time-frame-picker-docs.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WyuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-time-frame-picker-docs\",\n    templateUrl: \"./time-frame-picker-docs.example.component.html\",\n})\n\nexport class TimeFramePickerDocsExampleComponent {}\n\n";
      /***/
    },

    /***/
    "YIVX":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-date/time-frame-picker-date.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YIVX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IQuickPickPresetDictionary } from \"@nova-ui/bits\";\nimport _find from \"lodash/find\";\nimport _isUndefined from \"lodash/isUndefined\";\nimport moment, { Moment } from \"moment/moment\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-time-frame-picker-date\",\n    templateUrl: \"./time-frame-picker-date.example.component.html\",\n})\n\nexport class TimeFramePickerDateExampleComponent {\n    public presets: IQuickPickPresetDictionary;\n    public selectedPresetKey = \"ihorsBirthday\";\n    public selectedDate: Moment;\n\n    public showFooter: boolean = true;\n\n    constructor() {\n        this.presets = this.getDefaultPresets();\n        this.selectedDate = this.getDateFromPreset(this.selectedPresetKey);\n    }\n\n    public closePopoverSubject = new Subject();\n\n    public handlePresetSelection(presetKey: string) {\n        this.selectedDate = this.getDateFromPreset(presetKey);\n        this.selectedPresetKey = presetKey;\n        this.confirmPopover();\n    }\n\n    public dateChanged(value: Moment) {\n        if (!this.selectedDate.isSame(value, \"day\")) {\n            this.selectedDate = value;\n            this.selectedPresetKey = this.getPresetFromDate(value); // will return undefined if not found, exactly what's needed\n            this.confirmPopover();\n        }\n    }\n\n    public confirmPopover() {\n        this.closePopoverSubject.next();\n    }\n\n    // These private methods are specific and will be in any case abstracted to a service by end users:\n\n    private getDefaultPresets(): {[key: string]: any} {\n        return {\n            today: {name: \"Today\", pattern: () => moment()},\n            yesterday: { name: \"Yesterday\", pattern: () => moment().subtract(1, \"days\")},\n            ihorsBirthday: {name: \"Ihor's Birthday\", pattern: () => moment(\"1989-04-09\")},\n            random: {\n                name: \"Random date (to show that we can)\",\n                pattern: () => moment(+(new Date()) - Math.floor(Math.random() * 100000000000)),\n            },\n        };\n    }\n\n    private getDateFromPreset(presetKey: string): Moment {\n        const preset = this.getDefaultPresets()[presetKey];\n        return preset ? preset.pattern() : moment();\n    }\n\n    private getPresetFromDate(date: Moment): string {\n        const preset: string | undefined = _find(Object.keys(this.presets), (key) => date.isSame(this.getDateFromPreset(key), \"day\"));\n        if (_isUndefined(preset)) {\n            throw new Error(\"DatePreset was not found\");\n        }\n        return preset;\n    }\n}\n";
      /***/
    },

    /***/
    "ZY4c":
    /*!***************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-inline/time-frame-picker-inline.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: TimeFramePickerInlineExampleComponent */

    /***/
    function ZY4c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerInlineExampleComponent", function () {
        return TimeFramePickerInlineExampleComponent;
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


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      var TimeFramePickerInlineExampleComponent = /*#__PURE__*/function () {
        function TimeFramePickerInlineExampleComponent() {
          _classCallCheck(this, TimeFramePickerInlineExampleComponent);

          this.tf = {
            startDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("04/09/2018", "L"),
            endDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("04/10/2018", "L"),
            // @ts-ignore
            selectedPresetId: null
          };
          this.minDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("04/07/2018", "L"); // "L" is "MM/DD/YYY" in moment.js

          this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()();
        }

        _createClass(TimeFramePickerInlineExampleComponent, [{
          key: "updateTf",
          value: function updateTf(value) {
            this.tf = value;
          }
        }]);

        return TimeFramePickerInlineExampleComponent;
      }();

      TimeFramePickerInlineExampleComponent.ɵfac = function TimeFramePickerInlineExampleComponent_Factory(t) {
        return new (t || TimeFramePickerInlineExampleComponent)();
      };

      TimeFramePickerInlineExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TimeFramePickerInlineExampleComponent,
        selectors: [["nui-time-frame-picker-inline"]],
        decls: 4,
        vars: 6,
        consts: [[3, "startModel", "maxDate", "minDate", "changed"], [1, "nui-text-secondary"]],
        template: function TimeFramePickerInlineExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-time-frame-picker", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function TimeFramePickerInlineExampleComponent_Template_nui_time_frame_picker_changed_0_listener($event) {
              return ctx.updateTf($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("startModel", ctx.tf)("maxDate", ctx.maxDate)("minDate", ctx.minDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Selected timeframe is ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.tf), "");
          }
        },
        directives: [_src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_2__["TimeFramePickerComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "as+W":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-date/time-frame-picker-date.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function asW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-popover trigger='click'\n             [template]=\"popoverDayPicker\"\n             [hasPadding]=\"false\"\n             [closePopover]=\"closePopoverSubject\"\n             [unlimited]=\"true\"\n             [modal]=\"true\">\n    <span class=\"nui-text-link\" style=\"cursor: pointer;\">Select day</span>\n</nui-popover>\n\n<p>\n    Selected date:\n    <em>{{selectedDate?.format(\"MMMM Do, YYYY\")}}</em>\n</p>\n\n<ng-template #popoverDayPicker>\n    <div>\n        <nui-quick-picker [presets]=\"presets\"\n                          [selectedPreset]=\"selectedPresetKey\"\n                          (presetSelected)=\"handlePresetSelection($event)\"\n                          pickerTitle=\"Custom Date\"\n                          i18n-pickerTitle\n                          presetsTitle=\"Baselines\"\n                          i18n-presetsTitle>\n            <nui-date-picker [inline]=\"true\"\n                             [value]=\"selectedDate\"\n                             [preserveInsignificant]=\"false\"\n                             (valueChange)=\"dateChanged($event)\">\n            </nui-date-picker>\n        </nui-quick-picker>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "bnaE":
    /*!*************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/index.ts ***!
      \*************************************************************/

    /*! exports provided: TimeFramePickerDocsExampleComponent, TimeFramePickerBasicExampleComponent, TimeFramePickerCustomExampleComponent, QuickPickerBasicExampleComponent, TimeFramePickerInlineExampleComponent, TimeFramePickerDateExampleComponent, TimeFramePickerTestExampleComponent, TimeFramePickerVisualTestComponent, TimeFramePickerMultipleCustomPickersExampleComponent, TimeframeServiceScoperExampleComponent */

    /***/
    function bnaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _time_frame_picker_docs_time_frame_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./time-frame-picker-docs/time-frame-picker-docs.example.component */
      "OxFi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerDocsExampleComponent", function () {
        return _time_frame_picker_docs_time_frame_picker_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["TimeFramePickerDocsExampleComponent"];
      });
      /* harmony import */


      var _time_frame_picker_basic_time_frame_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./time-frame-picker-basic/time-frame-picker-basic.example.component */
      "V14i");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerBasicExampleComponent", function () {
        return _time_frame_picker_basic_time_frame_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["TimeFramePickerBasicExampleComponent"];
      });
      /* harmony import */


      var _time_frame_picker_custom_time_frame_picker_custom_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-frame-picker-custom/time-frame-picker-custom.example.component */
      "IdVO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerCustomExampleComponent", function () {
        return _time_frame_picker_custom_time_frame_picker_custom_example_component__WEBPACK_IMPORTED_MODULE_2__["TimeFramePickerCustomExampleComponent"];
      });
      /* harmony import */


      var _quick_picker_basic_quick_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quick-picker-basic/quick-picker-basic.example.component */
      "FwFK");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "QuickPickerBasicExampleComponent", function () {
        return _quick_picker_basic_quick_picker_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["QuickPickerBasicExampleComponent"];
      });
      /* harmony import */


      var _time_frame_picker_inline_time_frame_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./time-frame-picker-inline/time-frame-picker-inline.example.component */
      "ZY4c");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerInlineExampleComponent", function () {
        return _time_frame_picker_inline_time_frame_picker_inline_example_component__WEBPACK_IMPORTED_MODULE_4__["TimeFramePickerInlineExampleComponent"];
      });
      /* harmony import */


      var _time_frame_picker_date_time_frame_picker_date_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./time-frame-picker-date/time-frame-picker-date.example.component */
      "QSCk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerDateExampleComponent", function () {
        return _time_frame_picker_date_time_frame_picker_date_example_component__WEBPACK_IMPORTED_MODULE_5__["TimeFramePickerDateExampleComponent"];
      });
      /* harmony import */


      var _time_frame_picker_test_time_frame_picker_test_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./time-frame-picker-test/time-frame-picker-test.example.component */
      "tfMG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerTestExampleComponent", function () {
        return _time_frame_picker_test_time_frame_picker_test_example_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerTestExampleComponent"];
      });
      /* harmony import */


      var _time_frame_picker_visual_test_time_frame_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./time-frame-picker-visual-test/time-frame-picker-visual-test.component */
      "UOCq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerVisualTestComponent", function () {
        return _time_frame_picker_visual_test_time_frame_picker_visual_test_component__WEBPACK_IMPORTED_MODULE_7__["TimeFramePickerVisualTestComponent"];
      });
      /* harmony import */


      var _time_frame_picker_multiple_custom_pickers_time_frame_picker_multiple_custom_pickers_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component */
      "8sSx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerMultipleCustomPickersExampleComponent", function () {
        return _time_frame_picker_multiple_custom_pickers_time_frame_picker_multiple_custom_pickers_example_component__WEBPACK_IMPORTED_MODULE_8__["TimeFramePickerMultipleCustomPickersExampleComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeframeServiceScoperExampleComponent", function () {
        return _time_frame_picker_multiple_custom_pickers_time_frame_picker_multiple_custom_pickers_example_component__WEBPACK_IMPORTED_MODULE_8__["TimeframeServiceScoperExampleComponent"];
      });
      /***/

    },

    /***/
    "cw5P":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-visual-test/time-frame-picker-visual-test.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cw5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h4>TimeFrame Picker in Popover</h4>\n            <nui-popover trigger='click'\n                         [template]=\"popoverTimeFramePicker\"\n                         [hasPadding]=\"false\"\n                         [closePopover]=\"closePopoverSubject\"\n                         [modal]=\"true\"\n                         id=\"nui-demo-visual-default-popover\">\n                        <span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ acceptedTimeframe | timeFrame }}</span>\n            </nui-popover>\n\n            <ng-template #popoverTimeFramePicker>\n                <div>\n                    <nui-quick-picker [presets]=\"presets\"\n                                      [selectedPreset]=\"acceptedTimeframe.selectedPresetId\"\n                                      (presetSelected)=\"handlePresetSelection($event)\"\n                                      pickerTitle=\"Custom Range\">\n                        <nui-time-frame-picker [startModel]=\"acceptedTimeframe\"\n                                               (changed)=\"updateTf($event)\">\n                        </nui-time-frame-picker>\n                    </nui-quick-picker>\n                </div>\n                <nui-dialog-footer *ngIf=\"showFooter\">\n                    <button nui-button\n                            type=\"button\"\n                            displayStyle=\"action\"\n                            class=\"pr-3 nui-time-frame-picker__cancel\"\n                            (click)=\"cancelPopover()\">\n                        Cancel\n                    </button>\n                    <button nui-button\n                            type=\"button\"\n                            displayStyle=\"primary\"\n                            class=\"nui-time-frame-picker__use\"\n                            (click)=\"confirmPopover()\">\n                        Use\n                    </button>\n                </nui-dialog-footer>\n            </ng-template>\n        </div>\n        <div class=\"col\">\n            <h4>TimeFrame Picker with other components</h4>\n            <nui-popover trigger='click'\n                         [template]=\"popoverDayPicker\"\n                         [hasPadding]=\"false\"\n                         [closePopover]=\"closePopoverSubject\"\n                         [unlimited]=\"true\"\n                         [modal]=\"true\"\n                         id=\"nui-demo-visual-datepicker-popover\">\n                         <span class=\"nui-text-link\" style=\"cursor: pointer;\">Select day</span>\n            </nui-popover>\n\n            <p>\n            Selected date:\n            <em>{{selectedDate?.format(\"MMMM Do, YYYY\")}}</em>\n            </p>\n\n            <ng-template #popoverDayPicker>\n            <div>\n                <nui-quick-picker [presets]=\"presetsDatePicker\"\n                                  [selectedPreset]=\"selectedPresetKeyDatePicker\"\n                                  (presetSelected)=\"handlePresetSelectionDatePicker($event)\"\n                                  pickerTitle=\"Custom Date\"\n                                  presetsTitle=\"Baselines\">\n                    <nui-date-picker [inline]=\"true\"\n                                     [value]=\"selectedDate\"\n                                     [preserveInsignificant]=\"false\"\n                                     (valueChange)=\"dateChanged($event)\">\n                    </nui-date-picker>\n                </nui-quick-picker>\n            </div>\n            </ng-template>\n        </div>\n        <div class=\"col\">\n            <h4>TimeFrame Picker + Date picker with unlimited width in Popover</h4>\n            <nui-popover trigger='click'\n                            [template]=\"popoverTimeFramePickerUnlimited\"\n                            [hasPadding]=\"false\"\n                            [closePopover]=\"closePopoverSubject\"\n                            [modal]=\"true\"\n                            [unlimited]=\"true\"\n                            id=\"nui-demo-visual-complex-popover\">\n                        <span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ acceptedTimeframe | timeFrame }}</span>\n            </nui-popover>\n\n            <ng-template #popoverTimeFramePickerUnlimited>\n                <div>\n                    <nui-quick-picker [presets]=\"presets\"\n                                      [selectedPreset]=\"acceptedTimeframe.selectedPresetId\"\n                                      (presetSelected)=\"handlePresetSelection($event)\"\n                                      pickerTitle=\"Custom Range\">\n                        <nui-time-frame-picker [startModel]=\"acceptedTimeframe\"\n                                                    (changed)=\"updateTf($event)\">\n                        </nui-time-frame-picker>\n                        <nui-date-picker [inline]=\"true\"\n                                         [value]=\"selectedDate\"\n                                         [preserveInsignificant]=\"false\"\n                                         (valueChange)=\"dateChanged($event)\">\n                        </nui-date-picker>\n                    </nui-quick-picker>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "dXpY":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-inline/time-frame-picker-inline.example.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dXpY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-frame-picker [startModel]=\"tf\"\n                       (changed)=\"updateTf($event)\"\n                       [maxDate]=\"maxDate\"\n                       [minDate]=\"minDate\">\n</nui-time-frame-picker>\n\n<span class=\"nui-text-secondary\">Selected timeframe is {{ tf | timeFrame }}</span>\n";
      /***/
    },

    /***/
    "ey9Y":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/quick-picker-basic/quick-picker-basic.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ey9Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-quick-picker [presets]=\"presets\"\n                  [selectedPreset]=\"selectedPresetKey\"\n                  (presetSelected)=\"handlePresetSelection($event)\"\n                  pickerTitle=\"Custom percentiles\"\n                  [presetKeysOrder]=\"presetKeysOrder\"\n                  i18n-pickerTitle>\n    <nui-textbox-number [maxValue]=\"100\"\n                        (valueChange)=\"handleCustomSelection($event)\"\n                        [value]=\"getTextboxValue()\">\n    </nui-textbox-number>\n</nui-quick-picker>\n\n<span class=\"nui-text-secondary\">Selected Quick Pick is {{selectedPresetKey||\"null\"}}, Selected Value is {{selectedValue}}</span>\n";
      /***/
    },

    /***/
    "jlVH":
    /*!***************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-multiple-custom-pickers/time-frame-picker-multiple-custom-pickers.example.component.ts ***!
      \***************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jlVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChildren } from \"@angular/core\";\nimport { ITimeframe, ITimeFramePresetDictionary, TimeframeService } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\n\ninterface IPicker {\n    id: string;\n    presets: ITimeFramePresetDictionary;\n    timeframeService?: TimeframeService;\n    tf?: ITimeframe;\n    acceptedTimeframe?: ITimeframe;\n    selectedPresetKey: string;\n}\n\n@Component({\n    selector: \"nui-time-frame-picker-multiple-custom-pickers\",\n    templateUrl: \"./time-frame-picker-multiple-custom-pickers.example.component.html\",\n})\nexport class TimeFramePickerMultipleCustomPickersExampleComponent implements AfterViewInit {\n    @ViewChildren(\"scoper\")\n    private tfScopers: QueryList<TimeframeServiceScoperExampleComponent>;\n\n    public pickers: IPicker[] = [\n        {\n            id: \"1\",\n            presets: {\n                \"last42Hours\": {\n                    name: $localize `Last 42 hours`,\n                    startDatetimePattern: {hours: -42},\n                    endDatetimePattern: {},\n                },\n                \"last749Days\": {\n                    name: $localize `Last 749 days`,\n                    startDatetimePattern: {days: -749},\n                    endDatetimePattern: {},\n                },\n            },\n            selectedPresetKey: \"last749Days\",\n        },\n        {\n            id: \"2\",\n            presets: {\n                \"last42Hours\": {\n                    name: $localize `Last 42 hours`,\n                    startDatetimePattern: {hours: -42},\n                    endDatetimePattern: {},\n                },\n            },\n            selectedPresetKey: \"last42Hours\",\n        },\n        {\n            id: \"3\",\n            presets: {\n                \"lastYear\": {\n                    name: $localize `Last year`,\n                    startDatetimePattern: {year: -1},\n                    endDatetimePattern: {},\n                },\n                \"last10Years\": {\n                    name: $localize `Last 10 years`,\n                    startDatetimePattern: {year: -10},\n                    endDatetimePattern: {},\n                },\n            },\n            selectedPresetKey: \"lastYear\",\n        },\n    ];\n\n\n    public presets: ITimeFramePresetDictionary = {\n        \"last42Hours\": {\n            name: $localize `Last 42 hours`,\n            startDatetimePattern: {hours: -42},\n            endDatetimePattern: {},\n        },\n        \"last749Days\": {\n            name: $localize `Last 749 days`,\n            startDatetimePattern: {days: -749},\n            endDatetimePattern: {},\n        },\n    };\n\n    public showFooter: boolean = false;\n\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n\n    constructor(private cdRef: ChangeDetectorRef) {\n    }\n\n    public updateTf(value: ITimeframe, index: number) {\n        const picker = this.pickers[index];\n        picker.tf = value;\n\n        const timeFrameDatesValid = () => picker.timeframeService?.areTimeFrameDatesValid(value);\n        const timeFrameDatesEqual = () => picker.timeframeService?.isEqual(\n            <ITimeframe>picker.tf,\n            <ITimeframe>picker.acceptedTimeframe\n        );\n        if (timeFrameDatesValid() && !timeFrameDatesEqual()) { this.showFooter = true; }\n\n        picker.selectedPresetKey = <string>picker.tf.selectedPresetId;\n    }\n\n    public ngAfterViewInit() {\n        this.tfScopers.forEach((scoper, i) => {\n            const picker = this.pickers[i];\n            const timeframeService = scoper.timeframeService;\n\n            picker.timeframeService = timeframeService;\n            timeframeService.currentPresets = picker.presets;\n            picker.acceptedTimeframe = timeframeService.getTimeframeByPresetId(picker.selectedPresetKey);\n            picker.tf = picker.acceptedTimeframe;\n        });\n        this.cdRef.detectChanges();\n    }\n\n    public confirmPopover(index: number) {\n        const picker = this.pickers[index];\n\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n        picker.acceptedTimeframe = picker.tf;\n    }\n    public cancelPopover(index: number) {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public handlePresetSelection(presetKey: string, index: number) {\n        const picker = this.pickers[index];\n\n        picker.selectedPresetKey = presetKey;\n        picker.tf = picker.timeframeService?.getTimeframeByPresetId(presetKey);\n        picker.acceptedTimeframe = picker.tf;\n        this.closePopoverSubject.next();\n    }\n}\n\n@Component({\n    selector: \"nui-time-frame-service-scoper\",\n    providers: [TimeframeService],\n    template: `<ng-content></ng-content>`,\n})\nexport class TimeframeServiceScoperExampleComponent {\n    constructor(public timeframeService: TimeframeService) { }\n}\n";
      /***/
    },

    /***/
    "rvpb":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/time-frame-picker/time-frame-picker-custom/time-frame-picker-custom.example.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rvpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { ITimeframe, ITimeFramePresetDictionary, TimeframeService } from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\n\n@Component({\n    selector: \"nui-time-frame-picker-custom\",\n    templateUrl: \"./time-frame-picker-custom.example.component.html\",\n    providers: [TimeframeService],\n})\n\nexport class TimeFramePickerCustomExampleComponent {\n    public presets: ITimeFramePresetDictionary = {\n        \"last42Hours\": {\n            name: $localize `Last 42 hours`,\n            startDatetimePattern: {hours: -42},\n            endDatetimePattern: {},\n        },\n        \"last749Days\": {\n            name: $localize `Last 749 days`,\n            startDatetimePattern: {days: -749},\n            endDatetimePattern: {},\n        },\n    };\n    public selectedPresetKey?: string = \"last42Hours\";\n    public acceptedTimeframe: ITimeframe;\n    public tf: ITimeframe;\n\n    public showFooter: boolean = false;\n\n    constructor(public timeframeService: TimeframeService) {\n        this.timeframeService.currentPresets = this.presets;\n        this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey);\n        this.tf = this.acceptedTimeframe;\n    }\n\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    public updateTf(value: ITimeframe) {\n        this.tf = value;\n        const timeFrameDatesValid = () => this.timeframeService.areTimeFrameDatesValid(value);\n        const timeFrameDatesEqual = () => this.timeframeService.isEqual(this.tf, this.acceptedTimeframe);\n        if (timeFrameDatesValid() && !timeFrameDatesEqual()) { this.showFooter = true; }\n\n        this.selectedPresetKey = this.tf.selectedPresetId;\n    }\n\n    public confirmPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n        this.acceptedTimeframe = this.tf;\n    }\n    public cancelPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public handlePresetSelection(presetKey: string) {\n        this.selectedPresetKey = presetKey;\n        this.tf = this.timeframeService.getTimeframeByPresetId(presetKey);\n        this.acceptedTimeframe = this.tf;\n        this.closePopoverSubject.next();\n    }\n}\n";
      /***/
    },

    /***/
    "tfMG":
    /*!***********************************************************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker-test/time-frame-picker-test.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: TimeFramePickerTestExampleComponent */

    /***/
    function tfMG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerTestExampleComponent", function () {
        return TimeFramePickerTestExampleComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../src/lib/popover/popover.component */
      "N1kL");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../src/lib/dialog/dialog-footer.component */
      "NHEo");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      function TimeFramePickerTestExampleComponent_ng_template_7_nui_dialog_footer_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-dialog-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeFramePickerTestExampleComponent_ng_template_7_nui_dialog_footer_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r3.cancelPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](2, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeFramePickerTestExampleComponent_ng_template_7_nui_dialog_footer_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r5.confirmPopover();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵi18n"](4, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TimeFramePickerTestExampleComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nui-quick-picker", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("presetSelected", function TimeFramePickerTestExampleComponent_ng_template_7_Template_nui_quick_picker_presetSelected_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.handlePresetSelection($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nui-time-frame-picker", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changed", function TimeFramePickerTestExampleComponent_ng_template_7_Template_nui_time_frame_picker_changed_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.updateTf($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TimeFramePickerTestExampleComponent_ng_template_7_nui_dialog_footer_3_Template, 5, 0, "nui-dialog-footer", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("presets", ctx_r1.presets)("selectedPreset", ctx_r1.acceptedTimeframe.selectedPresetId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("startModel", ctx_r1.acceptedTimeframe)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showFooter);
        }
      }

      var TimeFramePickerTestExampleComponent = /*#__PURE__*/function () {
        function TimeFramePickerTestExampleComponent(timeframeService) {
          _classCallCheck(this, TimeFramePickerTestExampleComponent);

          this.timeframeService = timeframeService;
          this.selectedPresetKey = "lastHour";
          this.minDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()("04/07/2018", "L"); // "L" is "MM/DD/YYY" in moment.js

          this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()();
          this.showFooter = false;
          this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.presets = timeframeService.getDefaultPresets();
          this.acceptedTimeframe = this.timeframeService.getTimeframeByPresetId(this.selectedPresetKey);
          this.tf = this.acceptedTimeframe;
        }

        _createClass(TimeFramePickerTestExampleComponent, [{
          key: "updateTf",
          value: function updateTf(value) {
            var _this7 = this;

            this.tf = value;

            var timeFrameDatesValid = function timeFrameDatesValid() {
              return _this7.timeframeService.areTimeFrameDatesValid(value);
            };

            var timeFrameDatesEqual = function timeFrameDatesEqual() {
              return _this7.timeframeService.isEqual(_this7.tf, _this7.acceptedTimeframe);
            };

            if (timeFrameDatesValid() && !timeFrameDatesEqual()) {
              this.showFooter = true;
            }

            this.selectedPresetKey = this.tf.selectedPresetId;
          }
        }, {
          key: "confirmPopover",
          value: function confirmPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
            this.acceptedTimeframe = this.tf;
          }
        }, {
          key: "cancelPopover",
          value: function cancelPopover() {
            this.showFooter = false;
            this.closePopoverSubject.next();
          }
        }, {
          key: "handlePresetSelection",
          value: function handlePresetSelection(presetKey) {
            this.selectedPresetKey = presetKey;
            this.tf = this.timeframeService.getTimeframeByPresetId(presetKey);
            this.acceptedTimeframe = this.tf;
            this.closePopoverSubject.next();
          }
        }]);

        return TimeFramePickerTestExampleComponent;
      }();

      TimeFramePickerTestExampleComponent.ɵfac = function TimeFramePickerTestExampleComponent_Factory(t) {
        return new (t || TimeFramePickerTestExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["TimeframeService"]));
      };

      TimeFramePickerTestExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TimeFramePickerTestExampleComponent,
        selectors: [["nui-time-frame-picker-test"]],
        decls: 9,
        vars: 10,
        consts: function consts() {
          var i18n_0;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_TEST_TIME_FRAME_PICKER_TEST_EXAMPLE_COMPONENT_TS__1 = goog.getMsg("Custom Range");
            i18n_0 = MSG_EXTERNAL_2079707468789363335$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_TEST_TIME_FRAME_PICKER_TEST_EXAMPLE_COMPONENT_TS__1;
          } else {
            i18n_0 = $localize(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([":\u241F8946b0053f321c7db24853d1b213b1ea9794c789\u241F2079707468789363335:Custom Range"])));
          }

          var i18n_2;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_TEST_TIME_FRAME_PICKER_TEST_EXAMPLE_COMPONENT_TS___3 = goog.getMsg(" Cancel ");
            i18n_2 = MSG_EXTERNAL_7452095619502551190$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_TEST_TIME_FRAME_PICKER_TEST_EXAMPLE_COMPONENT_TS___3;
          } else {
            i18n_2 = $localize(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([":\u241Fbf844a41a29961b6dacc48a20eaf97bef0cf5013\u241F7452095619502551190: Cancel "])));
          }

          var i18n_4;

          if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
            var MSG_EXTERNAL_3416889908563565605$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_TEST_TIME_FRAME_PICKER_TEST_EXAMPLE_COMPONENT_TS___5 = goog.getMsg(" Use ");
            i18n_4 = MSG_EXTERNAL_3416889908563565605$$DEMO_SRC_COMPONENTS_DEMO_TIME_FRAME_PICKER_TIME_FRAME_PICKER_TEST_TIME_FRAME_PICKER_TEST_EXAMPLE_COMPONENT_TS___5;
          } else {
            i18n_4 = $localize(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([":\u241F3c8adc665cde2a280fd027f86fca78239d8a890c\u241F3416889908563565605: Use "])));
          }

          return [["id", "nui-demo-basic-time-frame-picker", "trigger", "click", 3, "template", "hasPadding", "closePopover"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverTimeFramePicker", ""], ["pickerTitle", i18n_0, 3, "presets", "selectedPreset", "presetSelected"], [3, "startModel", "maxDate", "minDate", "changed"], [4, "ngIf"], ["nui-button", "", "type", "button", "displayStyle", "action", "id", "nui-demo-basic-time-frame-picker-cancel", 1, "pr-3", "nui-time-frame-picker__cancel", 3, "click"], i18n_2, ["nui-button", "", "type", "button", "displayStyle", "primary", "id", "nui-demo-basic-time-frame-picker-use", 1, "nui-time-frame-picker__use", 3, "click"], i18n_4];
        },
        template: function TimeFramePickerTestExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-popover", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TimeFramePickerTestExampleComponent_ng_template_7_Template, 4, 6, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, ctx.acceptedTimeframe));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 7, ctx.acceptedTimeframe, "LL LTS"));
          }
        },
        directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _src_lib_dialog_dialog_footer_component__WEBPACK_IMPORTED_MODULE_8__["DialogFooterComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_9__["ButtonComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_10__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vvKb":
    /*!********************************************************************************!*\
      !*** ./demo/src/components/demo/time-frame-picker/time-frame-picker.module.ts ***!
      \********************************************************************************/

    /*! exports provided: TimeFramePickerModule */

    /***/
    function vvKb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFramePickerModule", function () {
        return TimeFramePickerModule;
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
      "bnaE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga
          },
          showThemeSwitcher: true
        }
      }, {
        path: "time-frame-picker-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerTestExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "time-frame-picker-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "multiple-custom-pickers",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerMultipleCustomPickersExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var TimeFramePickerModule = function TimeFramePickerModule() {
        _classCallCheck(this, TimeFramePickerModule);
      };

      TimeFramePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: TimeFramePickerModule
      });
      TimeFramePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function TimeFramePickerModule_Factory(t) {
          return new (t || TimeFramePickerModule)();
        },
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("5/Sd");
          }
        }],
        imports: [[_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimeFramePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TimeFramePickerModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["QuickPickerBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerBasicExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerCustomExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerDateExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerInlineExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerTestExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerDocsExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerVisualTestComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeFramePickerMultipleCustomPickersExampleComponent"], _index__WEBPACK_IMPORTED_MODULE_3__["TimeframeServiceScoperExampleComponent"]],
          imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTimeFramePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDividerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDatePickerModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=demo-time-frame-picker-time-frame-picker-module-es5.js.map