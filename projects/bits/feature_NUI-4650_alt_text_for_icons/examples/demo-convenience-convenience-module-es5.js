(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-convenience-convenience-module"], {
    /***/
    "QwpX":
    /*!********************************************************************!*\
      !*** ./demo/src/components/demo/convenience/convenience.module.ts ***!
      \********************************************************************/

    /*! exports provided: ConvenienceModule */

    /***/
    function QwpX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConvenienceModule", function () {
        return ConvenienceModule;
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
      "w5o8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "summary",
        pathMatch: "full"
      }, {
        path: "summary",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].beta
          }
        }
      }, {
        path: "time-frame-bar",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | time-frame-bar-time-frame-bar-module */
          "time-frame-bar-time-frame-bar-module").then(__webpack_require__.bind(null,
          /*! ./time-frame-bar/time-frame-bar.module */
          "dOrA")).then(function (m) {
            return m.TimeFrameBarModule;
          });
        }
      }];

      var ConvenienceModule = function ConvenienceModule() {
        _classCallCheck(this, ConvenienceModule);
      };

      ConvenienceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: ConvenienceModule
      });
      ConvenienceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function ConvenienceModule_Factory(t) {
          return new (t || ConvenienceModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ConvenienceModule, {
          declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Zfd4":
    /*!******************************************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-test/time-frame-bar-test.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: TimeFrameBarTestComponent */

    /***/
    function Zfd4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarTestComponent", function () {
        return TimeFrameBarTestComponent;
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


      var _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/convenience/time-frame-bar/time-frame-bar.component */
      "SKIm");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");

      var TimeFrameBarTestComponent = /*#__PURE__*/function () {
        function TimeFrameBarTestComponent(history) {
          _classCallCheck(this, TimeFrameBarTestComponent);

          this.history = history;
          this.baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()([2018, 5, 1, 15, 0, 0]);
          this.fromDate = this.baseDate.clone().subtract(1, "month");
          this.toDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()([2050]);
          this.resetDefault();
        }

        _createClass(TimeFrameBarTestComponent, [{
          key: "onChange",
          value: function onChange(value) {
            this.timeFrame = this.history.restart(value);
          }
        }, {
          key: "zoomIn",
          value: function zoomIn() {
            this.timeFrame = this.history.save({
              startDatetime: this.timeFrame.startDatetime.clone().add(1, "day"),
              endDatetime: this.timeFrame.endDatetime.clone().subtract(1, "day")
            });
          }
        }, {
          key: "resetDefault",
          value: function resetDefault() {
            this.onChange({
              startDatetime: this.baseDate.clone().subtract(1, "week"),
              endDatetime: this.baseDate.clone()
            });
          }
        }]);

        return TimeFrameBarTestComponent;
      }();

      TimeFrameBarTestComponent.ɵfac = function TimeFrameBarTestComponent_Factory(t) {
        return new (t || TimeFrameBarTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["HistoryStorage"]));
      };

      TimeFrameBarTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimeFrameBarTestComponent,
        selectors: [["nui-convenience-time-frame-bar-test"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["HistoryStorage"]])],
        decls: 11,
        vars: 7,
        consts: [[1, "nui-time-frame-bar-test"], [3, "minDate", "maxDate", "timeFrame", "historyIndex", "timeFrameChange", "undo", "clear"], ["icon", "calendar", 1, "pr-3"], ["timeFrameSelection", ""], [1, "btn-zoom-in", 3, "click"], [1, "btn-set-default", 3, "click"]],
        template: function TimeFrameBarTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-time-frame-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeFrameChange", function TimeFrameBarTestComponent_Template_nui_time_frame_bar_timeFrameChange_1_listener($event) {
              return ctx.onChange($event);
            })("undo", function TimeFrameBarTestComponent_Template_nui_time_frame_bar_undo_1_listener() {
              return ctx.timeFrame = ctx.history.undo();
            })("clear", function TimeFrameBarTestComponent_Template_nui_time_frame_bar_clear_1_listener() {
              return ctx.onChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nui-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nui-quick-picker", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "nui-time-frame-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFrameBarTestComponent_Template_button_click_7_listener() {
              return ctx.zoomIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Zoom In");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFrameBarTestComponent_Template_button_click_9_listener() {
              return ctx.resetDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Set Default TimeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minDate", ctx.fromDate)("maxDate", ctx.toDate)("timeFrame", ctx.timeFrame)("historyIndex", ctx.history.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, ctx.timeFrame), " ");
          }
        },
        directives: [_src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_3__["TimeFrameBarComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeFrameFormatPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "c3yb":
    /*!****************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: TimeFrameBarBasicExampleComponent */

    /***/
    function c3yb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarBasicExampleComponent", function () {
        return TimeFrameBarBasicExampleComponent;
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


      var _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../../src/lib/convenience/time-frame-bar/time-frame-bar.component */
      "SKIm");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var TimeFrameBarBasicExampleComponent = /*#__PURE__*/function () {
        function TimeFrameBarBasicExampleComponent() {
          _classCallCheck(this, TimeFrameBarBasicExampleComponent);

          this.baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()([2018, 5, 1, 15, 0, 0]);
        }

        _createClass(TimeFrameBarBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Set the minimum and maximum selectable dates (optional)
            this.minDate = this.baseDate.clone().subtract(1, "months");
            this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_0___default()(); // Set the initial time frame

            this.timeFrame = {
              startDatetime: this.baseDate.clone().subtract(1, "weeks"),
              endDatetime: this.baseDate.clone()
            };
          }
        }]);

        return TimeFrameBarBasicExampleComponent;
      }();

      TimeFrameBarBasicExampleComponent.ɵfac = function TimeFrameBarBasicExampleComponent_Factory(t) {
        return new (t || TimeFrameBarBasicExampleComponent)();
      };

      TimeFrameBarBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TimeFrameBarBasicExampleComponent,
        selectors: [["nui-convenience-time-frame-bar-basic-example"]],
        decls: 9,
        vars: 9,
        consts: [[3, "minDate", "maxDate", "timeFrame", "timeFrameChange"], ["icon", "calendar", 1, "pr-3"], ["timeFrameSelection", ""]],
        template: function TimeFrameBarBasicExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-time-frame-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeFrameChange", function TimeFrameBarBasicExampleComponent_Template_nui_time_frame_bar_timeFrameChange_0_listener($event) {
              return ctx.timeFrame = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-quick-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-time-frame-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minDate", ctx.minDate)("maxDate", ctx.maxDate)("timeFrame", ctx.timeFrame);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.timeFrame), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, ctx.timeFrame));
          }
        },
        directives: [_src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_2__["TimeFrameBarComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_4__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_5__["TimeFramePickerComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_6__["TimeFrameFormatPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fWKI":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-zoom/time-frame-bar-zoom.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: TimeFrameBarZoomExampleComponent */

    /***/
    function fWKI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarZoomExampleComponent", function () {
        return TimeFrameBarZoomExampleComponent;
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


      var _src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../../src/lib/convenience/time-frame-bar/time-frame-bar.component */
      "SKIm");
      /* harmony import */


      var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../../../src/lib/icon/icon.component */
      "45Bz");
      /* harmony import */


      var _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/quick-picker/quick-picker.component */
      "KiNg");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-picker.component */
      "chzP");
      /* harmony import */


      var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../src/lib/button/button.component */
      "6urz");
      /* harmony import */


      var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */
      "Y/g/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var TimeFrameBarZoomExampleComponent = /*#__PURE__*/function () {
        // Inject an instance of HistoryStorage
        function TimeFrameBarZoomExampleComponent(history) {
          var _this = this;

          _classCallCheck(this, TimeFrameBarZoomExampleComponent);

          this.history = history;
          this.baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()([2018, 5, 1, 15, 0, 0]);
          this.zoomLevels = ["weeks", "days", "hours", "minutes"]; // Save the new timeframe to the history storage and set it as the current timeFrame

          this.onZoomIn = function () {
            return _this.timeFrame = _this.history.save(_this.getTimeFrame(_this.zoomLevels[_this.history.index + 1]));
          }; // Use the history storage to go back one time frame


          this.onUndo = function () {
            return _this.timeFrame = _this.history.undo();
          }; // Reset the history storage and save a new initial value if provided
          // Otherwise preserve the previous one


          this.onChange = function (value) {
            return _this.timeFrame = _this.history.restart(value);
          };
        }

        _createClass(TimeFrameBarZoomExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Set the minimum and maximum selectable dates
            this.minDate = this.baseDate.clone().subtract(1, "months");
            this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_1___default()(); // Set the initial time frame

            this.onChange(this.getTimeFrame(this.zoomLevels[0]));
          } // This method is for demo purposes only

        }, {
          key: "canZoom",
          value: function canZoom() {
            var expectedTF = this.getTimeFrame(this.zoomLevels[this.history.index]);
            var matchesZoomLevel = this.timeFrame.startDatetime.isSame(expectedTF.startDatetime) && this.timeFrame.endDatetime.isSame(expectedTF.endDatetime);
            return matchesZoomLevel && this.history.index < this.zoomLevels.length - 1;
          } // This method is for demo purposes only

        }, {
          key: "getTimeFrame",
          value: function getTimeFrame(zoomLevel) {
            return {
              startDatetime: this.baseDate.clone().subtract(1, zoomLevel),
              endDatetime: this.baseDate.clone().add(1, zoomLevel)
            };
          }
        }]);

        return TimeFrameBarZoomExampleComponent;
      }();

      TimeFrameBarZoomExampleComponent.ɵfac = function TimeFrameBarZoomExampleComponent_Factory(t) {
        return new (t || TimeFrameBarZoomExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["HistoryStorage"]));
      };

      TimeFrameBarZoomExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TimeFrameBarZoomExampleComponent,
        selectors: [["nui-convenience-time-frame-bar-zoom-example"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["HistoryStorage"]])],
        decls: 11,
        vars: 11,
        consts: [[3, "minDate", "maxDate", "timeFrame", "historyIndex", "timeFrameChange", "undo", "clear"], ["icon", "calendar", 1, "pr-3"], ["timeFrameSelection", ""], ["nui-button", "", "type", "button", "icon", "zoom-in", "displayStyle", "primary", 3, "disabled", "click"]],
        template: function TimeFrameBarZoomExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-time-frame-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("timeFrameChange", function TimeFrameBarZoomExampleComponent_Template_nui_time_frame_bar_timeFrameChange_0_listener($event) {
              return ctx.onChange($event);
            })("undo", function TimeFrameBarZoomExampleComponent_Template_nui_time_frame_bar_undo_0_listener() {
              return ctx.onUndo();
            })("clear", function TimeFrameBarZoomExampleComponent_Template_nui_time_frame_bar_clear_0_listener() {
              return ctx.onChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nui-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nui-quick-picker", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nui-time-frame-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TimeFrameBarZoomExampleComponent_Template_button_click_9_listener() {
              return ctx.onZoomIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Zoom In");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("minDate", ctx.minDate)("maxDate", ctx.maxDate)("timeFrame", ctx.timeFrame)("historyIndex", ctx.history.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, ctx.timeFrame), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, ctx.timeFrame));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.canZoom());
          }
        },
        directives: [_src_lib_convenience_time_frame_bar_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_3__["TimeFrameBarComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _src_lib_time_frame_picker_quick_picker_quick_picker_component__WEBPACK_IMPORTED_MODULE_5__["QuickPickerComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_6__["TimeFramePickerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"]],
        pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeFrameFormatPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vrpX":
    /*!**************************************************************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/time-frame-bar/time-frame-bar-docs/time-frame-bar-docs.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: TimeFrameBarDocsExampleComponent */

    /***/
    function vrpX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarDocsExampleComponent", function () {
        return TimeFrameBarDocsExampleComponent;
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


      var _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../time-frame-bar-basic/time-frame-bar-basic.example.component */
      "c3yb");
      /* harmony import */


      var _time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../time-frame-bar-zoom/time-frame-bar-zoom.example.component */
      "fWKI");

      var TimeFrameBarDocsExampleComponent = function TimeFrameBarDocsExampleComponent() {
        _classCallCheck(this, TimeFrameBarDocsExampleComponent);
      };

      TimeFrameBarDocsExampleComponent.ɵfac = function TimeFrameBarDocsExampleComponent_Factory(t) {
        return new (t || TimeFrameBarDocsExampleComponent)();
      };

      TimeFrameBarDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimeFrameBarDocsExampleComponent,
        selectors: [["nui-time-frame-bar-docs-example"]],
        decls: 108,
        vars: 1,
        consts: [["href", "../components/TimeFrameBarComponent.html", "target", "_blank"], ["href", "../additional-documentation/convenience-components.html", "target", "_parent"], ["href", "../components/TimeFramePickerComponent.html", "target", "_blank"], ["href", "../components/QuickPickerComponent.html", "target", "_blank"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "time-frame-bar-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "time-frame-bar-zoom", "exampleTitle", "Adding Zoom Functionality"], ["href", "../injectables/HistoryStorage.html", "target", "_blank"]],
        template: function TimeFrameBarDocsExampleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Time Frame Bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nui-time-frame-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " is a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "convenience component");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " designed to simplify adding time frame selection to your view. It provides the following:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buttons to sequentially select an earlier or later time frame");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A projection slot for the time frame display value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "A projection slot for a popover time frame picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Required Modules");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "NuiTimeFrameBarModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "NuiTimeFramePickerModule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Basic Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " The time frame bar defines a couple of projection slots that enable its basic functionality while maintaining some flexibility:\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " The default projection slot serves as the popover trigger and typically contains the time frame's display value. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " The time frame selection slot takes an element tagged with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "timeFrameSelection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " attribute and provides the user with the ability to select a specific time frame. Supported content for this slot is the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "nui-time-frame-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " which can be optionally wrapped with a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "nui-quick-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " element. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nui-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Note:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Any values set on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "minDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "maxDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ", and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "startModel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " inputs of the projected ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "nui-time-frame-picker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " will be ignored. So, be sure to use the minDate, maxDate, and timeFrame inputs respectively on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "nui-time-frame-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " instead.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " An additional projection slot (not shown in the example) is available for projecting secondary template content on the right side of the bar. To use this slot, tag the element to be projected with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "rightContent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " attribute.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Take a look at the source of the following example to see how easy it can be to use the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "nui-time-frame-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nui-example-wrapper", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nui-convenience-time-frame-bar-basic-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Adding Zoom Functionality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Adding the ability to zoom may be desired if the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "nui-time-frame-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " is used in conjunction with a time-based chart. Take a look at the source of the following example to see how easy it is to add zooming to a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "nui-time-frame-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nui-example-wrapper", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "nui-convenience-time-frame-bar-zoom-example");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " As you can see in the source code of the example above, keeping track of the zoom step history lets the user zoom in and out incrementally using the same time frames in each direction. This can be done using an instance of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "HistoryStorage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " class.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Also note in the example template that a separate handler, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "onChange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ", is assigned to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "timeFrameChange");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " output instead of using the \"banana-in-a-box\" notation on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "timeFrame");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " attribute. This is done to allow a restart of the zoom history whenever a time frame change originates from within the TimeFrameBarComponent.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
          }
        },
        directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_3__["TimeFrameBarBasicExampleComponent"], _time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameBarZoomExampleComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "w5o8":
    /*!*******************************************************!*\
      !*** ./demo/src/components/demo/convenience/index.ts ***!
      \*******************************************************/

    /*! exports provided: SummaryComponent, TimeFrameBarBasicExampleComponent, TimeFrameBarZoomExampleComponent, TimeFrameBarDocsExampleComponent, TimeFrameBarTestComponent */

    /***/
    function w5o8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summary/summary.component */
      "yxz5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
        return _summary_summary_component__WEBPACK_IMPORTED_MODULE_0__["SummaryComponent"];
      });
      /* harmony import */


      var _time_frame_bar_time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component */
      "c3yb");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarBasicExampleComponent", function () {
        return _time_frame_bar_time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["TimeFrameBarBasicExampleComponent"];
      });
      /* harmony import */


      var _time_frame_bar_time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./time-frame-bar/time-frame-bar-zoom/time-frame-bar-zoom.example.component */
      "fWKI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarZoomExampleComponent", function () {
        return _time_frame_bar_time_frame_bar_zoom_time_frame_bar_zoom_example_component__WEBPACK_IMPORTED_MODULE_2__["TimeFrameBarZoomExampleComponent"];
      });
      /* harmony import */


      var _time_frame_bar_time_frame_bar_docs_time_frame_bar_docs_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./time-frame-bar/time-frame-bar-docs/time-frame-bar-docs.example.component */
      "vrpX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarDocsExampleComponent", function () {
        return _time_frame_bar_time_frame_bar_docs_time_frame_bar_docs_example_component__WEBPACK_IMPORTED_MODULE_3__["TimeFrameBarDocsExampleComponent"];
      });
      /* harmony import */


      var _time_frame_bar_time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./time-frame-bar/time-frame-bar-test/time-frame-bar-test.component */
      "Zfd4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarTestComponent", function () {
        return _time_frame_bar_time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_4__["TimeFrameBarTestComponent"];
      });
      /***/

    },

    /***/
    "yxz5":
    /*!***************************************************************************!*\
      !*** ./demo/src/components/demo/convenience/summary/summary.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SummaryComponent */

    /***/
    function yxz5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
        return SummaryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SummaryComponent = function SummaryComponent() {
        _classCallCheck(this, SummaryComponent);
      };

      SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
        return new (t || SummaryComponent)();
      };

      SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SummaryComponent,
        selectors: [["nui-convenience-summary"]],
        decls: 22,
        vars: 0,
        consts: [["type", "a"]],
        template: function SummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "What is a convenience component?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " A convenience component is a composition of several bits components into a larger component that's pre-configured/pre-implemented to accommodate the majority of use cases within its problem set. In addition to reusability, a convenience component is optimized for ease-of-use, meaning its internal workings are hidden away and you shouldn't have to fuss too much to get it working. The public interface is ideally as small as possible and relatively straight-forward.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sounds great! What's the catch?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Well, there are a couple of things that could be considered drawbacks, but hopefully the benefits, more often than not, outweigh any downsides.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " An easy-to-use, small interface comes at the cost of flexibility which means, if you want a convenience component to do something out of the ordinary, you may need to instead use the requisite bits components to create your own custom version of the larger component. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This relative lack of flexibility may be an insurmountable inconvenience in some cases, but to mitigate at least some of the reduction in flexibility, wherever it's practical, a convenience component will provide projection slots to: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ol", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Allow certain nested components to be optional or interchangeable with other components ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Allow for a very limited amount of layout flexibility ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " A convenience component's interface is itself pretty rigid and resistant to change to ensure that the internal overhead of maintaining the component is minimized. So, adding features to a convenience component is a rare occurrence, and this could be another reason you might need to implement your own composition instead of using a convenience component. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-convenience-convenience-module-es5.js.map