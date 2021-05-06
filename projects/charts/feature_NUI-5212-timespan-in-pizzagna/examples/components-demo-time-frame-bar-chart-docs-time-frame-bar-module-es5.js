(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-time-frame-bar-chart-docs-time-frame-bar-module"], {
    /***/
    "47r6":
    /*!****************************************************************************************************************!*\
      !*** ./examples/components/demo/time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: TimeFrameBarBasicExampleComponent */

    /***/
    function r6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarBasicExampleComponent", function () {
        return TimeFrameBarBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_time_frame_bar_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./time-frame-bar-basic.example.component.html */
      "EUdT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "Rr1A");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_5__);

      var TimeFrameBarBasicExampleComponent = /*#__PURE__*/function () {
        function TimeFrameBarBasicExampleComponent(history, dataSourceService) {
          _classCallCheck(this, TimeFrameBarBasicExampleComponent);

          this.history = history;
          this.dataSourceService = dataSourceService;
          this.series = getData();
          this.fromDate = moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-05-01 15:00:00").subtract(5.2, "days");
          this.toDate = moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2019-01-01 15:00:00");
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.chart);
          this.xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeScale"]("time-scale");
          this.yScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]();
          this.seriesSet = [];
        }

        _createClass(TimeFrameBarBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]();
            this.yScale.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["getAutomaticDomainWithIncludedInterval"])([0, 100]);
            this.seriesSet = Object.keys(this.series).map(function (key) {
              return {
                id: key,
                name: key,
                data: buildTimeSeriesFromData(_this.fromDate, _this.toDate, _this.series[key]),
                accessors: accessors,
                renderer: renderer,
                scales: {
                  x: _this.xScale,
                  y: _this.yScale
                }
              };
            });
            this.timeFrame = this.history.save({
              startDatetime: this.fromDate,
              endDatetime: this.toDate,
              selectedPresetId: undefined
            });
            this.chart.addPlugins(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ZoomPlugin"]()); // Update Time Frame Bar when chart got zoomed

            this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SET_DOMAIN_EVENT"]).subscribe(function (event) {
              var payload = event.data;
              var newDomain = payload[_this.xScale.id];
              _this.timeFrame = _this.history.save({
                startDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()(newDomain[0]),
                endDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()(newDomain[1]),
                selectedPresetId: undefined
              });
              void _this.dataSourceService.applyFilters();
            });
            this.filteringSubscription = this.setUpFiltering();
            void this.dataSourceService.applyFilters();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.filteringSubscription) {
              this.filteringSubscription.unsubscribe();
            }
          }
        }, {
          key: "updateTimeFrame",
          value: function updateTimeFrame(value) {
            this.timeFrame = this.history.restart(value);
            void this.dataSourceService.applyFilters();
          } // Use the history storage to go back one time frame

        }, {
          key: "zoomUndo",
          value: function zoomUndo() {
            this.timeFrame = this.history.undo();
            void this.dataSourceService.applyFilters();
          } // Reset the history storage and save a new initial value if provided
          // Otherwise preserve the previous one

        }, {
          key: "zoomReset",
          value: function zoomReset(value) {
            this.timeFrame = this.history.restart(value);
            void this.dataSourceService.applyFilters();
          }
        }, {
          key: "setUpFiltering",
          value: function setUpFiltering() {
            var _this2 = this;

            this.dataSourceService.registerComponent({
              timeframe: {
                componentInstance: {
                  getFilters: function getFilters() {
                    return {
                      type: "ITimeframe",
                      value: _this2.timeFrame
                    };
                  }
                }
              }
            });
            return this.dataSourceService.outputsSubject.subscribe(function (data) {
              _this2.xScale.fixDomain([data.timeframe.value.startDatetime.toDate(), data.timeframe.value.endDatetime.toDate()]);

              _this2.chartAssist.update(_this2.seriesSet);
            });
          }
        }]);

        return TimeFrameBarBasicExampleComponent;
      }();

      TimeFrameBarBasicExampleComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["HistoryStorage"]
        }, {
          type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NoopDataSourceService"]
        }];
      };

      TimeFrameBarBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-time-frame-bar-example",
        template: _raw_loader_time_frame_bar_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NoopDataSourceService"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["HistoryStorage"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["HistoryStorage"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NoopDataSourceService"]])], TimeFrameBarBasicExampleComponent);
      /* Chart data */

      function getData() {
        return {
          "Tex-lab-aus-2621": [18, 27, 35, 33, 26, 50, 36, 47, 58, 66, 65, 50, 40, 31, 42, 62, 57, 99, 75, 55, 73, 69, 77, 57, 61, 68, 82, 81, 78, 67],
          "Cz-lab-brn-02": [41, 50, 56, 40, 44, 35, 27, 42, 38, 23, 20, 13, 29, 42, 84, 93, 71, 60, 54, 79, 64, 49, 48, 59, 76, 63, 52, 84, 89, 80]
        };
      }

      function buildTimeSeriesFromData(from, to, data) {
        var count = data.length;

        if (!from || !to || count === 0) {
          return [];
        }

        var interval = count > 1 ? to.diff(from) / (count - 1) : 0;
        return data.map(function (y, i) {
          return {
            x: from.clone().add(moment_moment__WEBPACK_IMPORTED_MODULE_5___default.a.duration(i * interval)),
            y: y
          };
        });
      }
      /***/

    },

    /***/
    "EUdT":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EUdT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-time-frame-bar [timeFrame]=\"timeFrame\"\n                    (timeFrameChange)=\"updateTimeFrame($event)\"\n                    [historyIndex]=\"history.index\"\n                    [minDate]=\"fromDate\"\n                    [maxDate]=\"toDate\"\n                    (undo)=\"zoomUndo()\"\n                    (clear)=\"zoomReset()\">\n    <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n    {{timeFrame | timeFrame}}\n    <nui-quick-picker timeFrameSelection>\n        <nui-time-frame-picker></nui-time-frame-picker>\n    </nui-quick-picker>\n</nui-time-frame-bar>\n\n<div class=\"nui-chart-layout p-3\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Average CPU load (%)</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"d-flex w-100 h-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"%\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "KYwu":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/chart-docs-time-frame-bar.module.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KYwu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN, NuiBusyModule, NuiButtonModule, NuiCommonModule, NuiDialogModule, NuiDocsModule, NuiIconModule, NuiLayoutModule, NuiPopoverModule,\n    NuiTimeFrameBarModule, NuiTimeFramePickerModule, NuiTooltipModule, SrlcStage\n} from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../common/demo-common.module\";\n\nimport { ChartDocsTimeFrameBarComponent } from \"./chart-docs-time-frame-bar.component\";\nimport { TimeFrameBarBasicExampleComponent } from \"./time-frame-bar-basic/time-frame-bar-basic.example.component\";\nimport { TimeFrameBarTestComponent } from \"./time-frame-bar-test/time-frame-bar-test.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsTimeFrameBarComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"example\",\n        component: TimeFrameBarBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: TimeFrameBarTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsTimeFrameBarComponent,\n        TimeFrameBarBasicExampleComponent,\n        TimeFrameBarTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiButtonModule,\n        NuiBusyModule,\n        NuiChartsModule,\n        NuiCommonModule,\n        NuiDialogModule,\n        NuiDocsModule,\n        NuiIconModule,\n        NuiLayoutModule,\n        NuiPopoverModule,\n        NuiTimeFramePickerModule,\n        NuiTimeFrameBarModule,\n        NuiTooltipModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsTimeFrameBarModule {\n}\n";
      /***/
    },

    /***/
    "LGh7":
    /*!*************************************************************************************!*\
      !*** ./examples/components/demo/time-frame-bar/chart-docs-time-frame-bar.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ChartDocsTimeFrameBarModule */

    /***/
    function LGh7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsTimeFrameBarModule", function () {
        return ChartDocsTimeFrameBarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "Rr1A");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/demo-common.module */
      "s1Ul");
      /* harmony import */


      var _chart_docs_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chart-docs-time-frame-bar.component */
      "jNox");
      /* harmony import */


      var _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./time-frame-bar-basic/time-frame-bar-basic.example.component */
      "47r6");
      /* harmony import */


      var _time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./time-frame-bar-test/time-frame-bar-test.component */
      "VnDG");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsTimeFrameBarComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "example",
        component: _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["TimeFrameBarBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "test",
        component: _time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_8__["TimeFrameBarTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsTimeFrameBarModule = function ChartDocsTimeFrameBarModule() {
        _classCallCheck(this, ChartDocsTimeFrameBarModule);
      };

      ChartDocsTimeFrameBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_time_frame_bar_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsTimeFrameBarComponent"], _time_frame_bar_basic_time_frame_bar_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["TimeFrameBarBasicExampleComponent"], _time_frame_bar_test_time_frame_bar_test_component__WEBPACK_IMPORTED_MODULE_8__["TimeFrameBarTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiBusyModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDialogModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiLayoutModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiPopoverModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiTimeFramePickerModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiTimeFrameBarModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("Xc7/");
          }
        }]
      })], ChartDocsTimeFrameBarModule);
      /***/
    },

    /***/
    "Tkac":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/time-frame-bar-test/time-frame-bar-data.service.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tkac(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import moment, { Moment } from \"moment/moment\";\nimport { Observable, of } from \"rxjs\";\nimport { delay } from \"rxjs/operators\";\n\nenum DataInterval {\n    Poll = 5,\n    Hour = 60,\n    // Day = 24 * 60,\n    // Week = 7 * 24 * 60,\n}\n\nexport class TimeFrameBarDataService {\n    /* eslint-disable max-len */\n    private factors = {\n        \"day\": [42, 7, 63, 33, 10, 16, 57, 16, 88, 44, 35, 85, 46, 73, 29, 35, 51, 52, 100, 51, 40, 87, 42, 90, 75, 90, 70, 16, 4, 43, 18, 63, 28, 15, 86, 81, 48, 86, 91, 89, 15, 89, 66, 35, 65, 18, 59, 75, 69, 64, 55, 67, 60, 76, 29, 81, 87, 73, 10, 19, 29, 83, 16, 72, 80, 43, 28, 53, 38, 24, 88, 81, 14, 68, 80, 44, 72, 56, 89, 83, 6, 1, 1, 11, 66, 39, 42, 81, 31, 48, 11, 76, 41, 60, 40, 15, 75, 33, 90, 80, 37, 40, 39, 58, 69, 31, 61, 80, 85, 57, 38, 3, 45, 36, 71, 66, 36, 58, 82, 70, 90, 78, 33, 72, 98, 36, 32, 61, 44, 13, 22, 90, 66, 87, 55, 21, 63, 70, 41, 61, 19, 42, 65, 79, 17, 14, 85, 69, 79, 77, 99, 86, 5, 31, 94, 2, 37, 54, 79, 32, 63, 83, 64, 52, 59, 35, 18, 45, 58, 23, 58, 99, 61, 60, 78, 95, 63, 35, 27, 93, 46, 86, 51, 80, 73, 6, 66, 72, 96, 7, 90, 94, 3, 66, 1, 38, 30, 11, 58, 91, 84, 100, 90, 70, 51, 77, 56, 53, 49, 42, 84, 10, 76, 11, 66, 41, 38, 68, 24, 84, 89, 72, 74, 54, 29, 18, 36, 13, 17, 18, 82, 14, 50, 10, 47, 12, 1, 4, 63, 59, 62, 78, 83, 5, 25, 8, 59, 59, 28, 56, 35, 33, 31, 37, 5, 67, 34, 93, 25, 66, 69, 64, 23, 69, 60, 24, 26, 81, 88, 66, 80, 45, 91, 68, 83, 8, 83, 43, 96, 85, 8, 47, 67, 14, 64, 26, 96, 45],\n        \"year\": [64, 70, 41, 96, 74, 38, 38, 79, 77, 24, 98, 78, 22, 90, 7, 42, 95, 76, 92, 86, 13, 5, 80, 6, 9, 90, 40, 94, 66, 12, 28, 7, 76, 74, 23, 79, 82, 9, 9, 84, 59, 92, 63, 15, 25, 18, 83, 35, 46, 14, 22, 84, 34, 17, 9, 25, 34, 89, 48, 80, 76, 38, 60, 43, 41, 88, 35, 32, 62, 80, 76, 64, 41, 49, 23, 61, 27, 56, 3, 88, 37, 24, 15, 88, 85, 18, 41, 74, 81, 13, 40, 10, 39, 30, 45, 21, 32, 46, 54, 8, 28, 19, 74, 87, 36, 43, 74, 15, 58, 24, 98, 14, 49, 96, 51, 83, 4, 4, 13, 72, 42, 62, 26, 80, 85, 46, 74, 60, 14, 5, 97, 16, 90, 84, 52, 10, 18, 26, 8, 49, 71, 34, 87, 32, 15, 46, 23, 10, 86, 7, 18, 51, 31, 72, 20, 43, 10, 91, 74, 51, 86, 89, 32, 79, 94, 5, 41, 16, 79, 66, 84, 24, 74, 78, 69, 85, 46, 57, 92, 92, 3, 14, 5, 12, 63, 1, 6, 37, 85, 79, 18, 88, 42, 8, 25, 94, 87, 7, 52, 16, 35, 43, 65, 63, 46, 38, 98, 55, 100, 14, 45, 50, 49, 90, 98, 47, 20, 83, 84, 84, 58, 79, 100, 19, 75, 94, 34, 5, 94, 29, 96, 80, 46, 33, 73, 82, 58, 68, 98, 100, 10, 46, 96, 87, 96, 5, 64, 53, 5, 7, 19, 65, 91, 78, 59, 14, 19, 12, 15, 92, 8, 15, 19, 99, 26, 25, 45, 29, 39, 1, 61, 74, 88, 27, 43, 1, 93, 75, 91, 97, 38, 39, 24, 94, 29, 18, 88, 56, 62, 7, 88, 13, 34, 21, 20, 41, 90, 95, 2, 17, 26, 4, 44, 70, 18, 65, 75, 62, 18, 46, 18, 73, 76, 95, 2, 30, 31, 77, 77, 80, 23, 51, 48, 42, 78, 65, 78, 56, 37, 46, 96, 72, 49, 48, 8, 45, 89, 42, 87, 28, 42, 53, 94, 73, 57, 30, 75, 53, 77, 62, 9, 71, 9, 48, 97, 92, 91, 24, 44, 83, 8, 86, 41, 6, 21, 45],\n        \"century\": [85, 83, 87, 82, 77, 65, 67, 72, 75, 76, 82, 87, 91, 93, 94, 90, 84, 89, 86, 88, 86, 85, 82, 84, 81, 77, 77, 77, 80, 97, 18, 6, 25, 85, 90, 25, 72, 99, 61, 79, 62, 7, 50, 41, 40, 6, 60, 65, 1, 98, 90, 31, 57, 74, 50, 57, 68, 20, 12, 16, 33, 1, 32, 53, 76, 57, 89, 33, 48, 28, 89, 35, 15, 3, 33, 77, 10, 1, 36, 4, 36, 88, 26, 66, 50, 3, 66, 37, 77, 70, 9, 40, 20, 14, 55, 96, 88, 14, 9, 54],\n    };\n    /* eslint-enable max-len */\n\n    /* Chart data */\n    private seriesValueFunctions: Record<string, (fs: [number, number, number]) => number> = {\n        \"Tex-lab-aus-2621\": ([a, b, c]) => a + 0.1 * (b - 30) + (c - 50),\n        \"Cz-lab-brn-02\": ([a, b, c]) => a + 0.01 * b * (b - 50) + 20 * Math.cos(c * 0.02 * Math.PI),\n    };\n\n    public getChartData(from: Moment, to: Moment, delayInterval: number = 0): Observable<Record<string, { x: Moment, y: number }[]>> {\n        const rules = this.seriesValueFunctions;\n        const results: Record<string, { x: moment.Moment; y: number }[]> = {};\n\n        const duration = moment.duration(to.diff(from));\n        const dataInterval = duration.asHours() > 12 ? DataInterval.Hour : DataInterval.Poll;\n\n        for (const seriesId of Object.keys(rules)) {\n            results[seriesId] = this.getData(from, to, rules[seriesId], dataInterval);\n        }\n\n        return of(results).pipe(delay(delayInterval));\n    }\n\n    private getData(\n        start: Moment,\n        end: Moment,\n        valueFn: (fs: [number, number, number]) => number,\n        interval: DataInterval = DataInterval.Poll\n    ): { x: moment.Moment; y: number }[] {\n        const startCorrector = start.minutes() % interval;\n        const currentDate = start.clone().subtract(startCorrector, \"minutes\").seconds(0); // rounds to pollInterval\n        const endCorrector = interval - end.minutes() % interval;\n        const endDate = end.clone().add(endCorrector, \"minutes\").seconds(0); // rounds to 5 minutes pollInterval\n        const count = Math.ceil(moment.duration(endDate.diff(currentDate)).asMinutes() / interval);\n        const results = [];\n\n        for (let i = 0; i < count; i++) {\n            const fDay = this.factors.day[Math.ceil((60 * currentDate.hours() + currentDate.minutes()) / 5)];\n            const fYear = this.factors.year[currentDate.dayOfYear()];\n            const fCentury = this.factors.century[currentDate.year() % 100];\n            results.push({\n                x: currentDate.clone(),\n                y: valueFn([fCentury, fYear, fDay]),\n            });\n            currentDate.add(interval, \"minutes\");\n        }\n\n        return results;\n    }\n\n}\n";
      /***/
    },

    /***/
    "VnDG":
    /*!******************************************************************************************************!*\
      !*** ./examples/components/demo/time-frame-bar/time-frame-bar-test/time-frame-bar-test.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: TimeFrameBarTestComponent */

    /***/
    function VnDG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarTestComponent", function () {
        return TimeFrameBarTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_time_frame_bar_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./time-frame-bar-test.component.html */
      "oS9I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/bits */
      "Rr1A");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _time_frame_bar_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./time-frame-bar-data.service */
      "fePE");

      var TimeFrameBarTestComponent = /*#__PURE__*/function () {
        function TimeFrameBarTestComponent(history, dataSourceService) {
          _classCallCheck(this, TimeFrameBarTestComponent);

          this.history = history;
          this.dataSourceService = dataSourceService;
          this.fromDate = moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-05-01 15:00:00").subtract(2, "days");
          this.toDate = moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-05-01 15:00:00");
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.chart);
          this.addDelay = true;
          this.xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeScale"]("time-scale");
          this.yScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]();
          this.accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
          this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]();
          this.dataService = new _time_frame_bar_data_service__WEBPACK_IMPORTED_MODULE_6__["TimeFrameBarDataService"]();
        }

        _createClass(TimeFrameBarTestComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this3 = this;

            this.yScale.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["getAutomaticDomainWithIncludedInterval"])([0, 100]);
            this.chart.addPlugins(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ZoomPlugin"]());
            this.filteringSubscription = this.setUpFiltering();
            this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SET_DOMAIN_EVENT"]).subscribe(function (event) {
              var payload = event.data;
              var newDomain = payload[_this3.xScale.id];

              _this3.applyFilters(_this3.history.save({
                startDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()(newDomain[0]),
                endDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()(newDomain[1]),
                selectedPresetId: undefined
              }));
            });
            this.applyFilters(this.history.save({
              startDatetime: this.fromDate,
              endDatetime: this.toDate,
              selectedPresetId: undefined
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.filteringSubscription) {
              this.filteringSubscription.unsubscribe();
            }
          }
        }, {
          key: "updateTimeFrame",
          value: function updateTimeFrame(value) {
            this.applyFilters(this.history.restart(value));
          }
        }, {
          key: "zoomUndo",
          value: function zoomUndo() {
            this.applyFilters(this.history.undo());
          }
        }, {
          key: "applyFilters",
          value: function applyFilters(value) {
            this.busy = true;
            this.timeFrame = value;
            this.xScale.fixDomain([value.startDatetime.toDate(), value.endDatetime.toDate()]);
            this.chart.updateDimensions();
            void this.dataSourceService.applyFilters();
          }
        }, {
          key: "setUpFiltering",
          value: function setUpFiltering() {
            var _this4 = this;

            this.dataSourceService.registerComponent({
              timeframe: {
                componentInstance: {
                  getFilters: function getFilters() {
                    return {
                      type: "ITimeframe",
                      value: _this4.timeFrame
                    };
                  }
                }
              }
            });
            return this.dataSourceService.outputsSubject.subscribe(function (data) {
              var start = data.timeframe.value.startDatetime;
              var end = data.timeframe.value.endDatetime;

              _this4.dataService.getChartData(start, end, _this4.addDelay ? 1000 : 0).subscribe(function (series) {
                _this4.chartAssist.update(Object.keys(series).map(function (key) {
                  return {
                    id: key,
                    name: key,
                    data: series[key],
                    accessors: _this4.accessors,
                    renderer: _this4.renderer,
                    scales: {
                      x: _this4.xScale,
                      y: _this4.yScale
                    }
                  };
                }));

                _this4.busy = false;
              });
            });
          }
        }]);

        return TimeFrameBarTestComponent;
      }();

      TimeFrameBarTestComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["HistoryStorage"]
        }, {
          type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NoopDataSourceService"]
        }];
      };

      TimeFrameBarTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-time-frame-bar-test",
        template: _raw_loader_time_frame_bar_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NoopDataSourceService"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["HistoryStorage"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["HistoryStorage"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NoopDataSourceService"]])], TimeFrameBarTestComponent);
      /***/
    },

    /***/
    "Xc7/":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/time-frame-bar sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*****************************************************************************************************************/

    /*! no static exports found */

    /***/
    function Xc7(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-time-frame-bar.component.html": "dsON",
        "./chart-docs-time-frame-bar.component.ts": "oRth",
        "./chart-docs-time-frame-bar.module.ts": "KYwu",
        "./time-frame-bar-basic/time-frame-bar-basic.example.component.html": "EUdT",
        "./time-frame-bar-basic/time-frame-bar-basic.example.component.ts": "dO4p",
        "./time-frame-bar-test/time-frame-bar-data.service.ts": "Tkac",
        "./time-frame-bar-test/time-frame-bar-test.component.html": "oS9I",
        "./time-frame-bar-test/time-frame-bar-test.component.ts": "vG5J"
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
      webpackContext.id = "Xc7/";
      /***/
    },

    /***/
    "dO4p":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/time-frame-bar-basic/time-frame-bar-basic.example.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dO4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnDestroy, OnInit } from \"@angular/core\";\nimport { HistoryStorage, IFilter, IFilteringOutputs, ITimeframe, NoopDataSourceService } from \"@nova-ui/bits\";\nimport {\n    Chart, ChartAssist, getAutomaticDomainWithIncludedInterval, IAccessors, IChartAssistSeries, ISetDomainEventPayload, LineAccessors, LinearScale,\n    LineRenderer, SET_DOMAIN_EVENT, TimeScale, XYGrid, ZoomPlugin\n} from \"@nova-ui/charts\";\nimport moment, { Moment } from \"moment/moment\";\nimport { Subscription } from \"rxjs\";\n\n@Component({\n    selector: \"nui-time-frame-bar-example\",\n    templateUrl: \"./time-frame-bar-basic.example.component.html\",\n    providers: [NoopDataSourceService, HistoryStorage],\n})\nexport class TimeFrameBarBasicExampleComponent implements OnInit, OnDestroy {\n    private series = getData();\n    public fromDate = moment(\"2018-05-01 15:00:00\").subtract(5.2, \"days\");\n    public toDate = moment(\"2019-01-01 15:00:00\");\n\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public timeFrame: ITimeframe;\n\n    private xScale = new TimeScale(\"time-scale\");\n    private yScale = new LinearScale();\n    private seriesSet: IChartAssistSeries<IAccessors>[] = [];\n    private filteringSubscription: Subscription;\n\n    constructor(public history: HistoryStorage<ITimeframe>,\n                private dataSourceService: NoopDataSourceService<ITimeframe>) {\n    }\n\n    public ngOnInit() {\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n        this.yScale.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n        this.seriesSet = Object.keys(this.series).map((key: string) => ({\n            id: key,\n            name: key,\n            data: buildTimeSeriesFromData(this.fromDate, this.toDate, this.series[key]),\n            accessors,\n            renderer,\n            scales: { x: this.xScale, y: this.yScale },\n        }));\n\n        this.timeFrame = this.history.save({\n            startDatetime: this.fromDate,\n            endDatetime: this.toDate,\n            selectedPresetId: undefined,\n        });\n\n        this.chart.addPlugins(new ZoomPlugin());\n\n        // Update Time Frame Bar when chart got zoomed\n        this.chart.getEventBus().getStream(SET_DOMAIN_EVENT).subscribe((event) => {\n            const payload = <ISetDomainEventPayload>event.data;\n            const newDomain = payload[this.xScale.id];\n            this.timeFrame = this.history.save({\n                startDatetime: moment(newDomain[0]),\n                endDatetime: moment(newDomain[1]),\n                selectedPresetId: undefined,\n            });\n\n            void this.dataSourceService.applyFilters();\n        });\n\n        this.filteringSubscription = this.setUpFiltering();\n\n        void this.dataSourceService.applyFilters();\n    }\n\n    public ngOnDestroy() {\n        if (this.filteringSubscription) {\n            this.filteringSubscription.unsubscribe();\n        }\n    }\n\n    public updateTimeFrame(value: ITimeframe) {\n        this.timeFrame = this.history.restart(value);\n        void this.dataSourceService.applyFilters();\n    }\n\n    // Use the history storage to go back one time frame\n    public zoomUndo() {\n        this.timeFrame = this.history.undo();\n        void this.dataSourceService.applyFilters();\n    }\n\n    // Reset the history storage and save a new initial value if provided\n    // Otherwise preserve the previous one\n    public zoomReset(value?: ITimeframe) {\n        this.timeFrame = this.history.restart(value);\n        void this.dataSourceService.applyFilters();\n    }\n\n    private setUpFiltering(): any {\n        this.dataSourceService.registerComponent({\n            timeframe: {\n                componentInstance: {\n                    getFilters: () => <IFilter<ITimeframe>>({\n                        type: \"ITimeframe\",\n                        value: this.timeFrame,\n                    }),\n                },\n            },\n        });\n\n        return this.dataSourceService.outputsSubject.subscribe((data: IFilteringOutputs) => {\n            this.xScale.fixDomain([data.timeframe.value.startDatetime.toDate(), data.timeframe.value.endDatetime.toDate()]);\n            this.chartAssist.update(this.seriesSet);\n        });\n    }\n}\n\n/* Chart data */\nfunction getData(): Record<string, number[]> {\n    return {\n        \"Tex-lab-aus-2621\": [18, 27, 35, 33, 26, 50, 36, 47, 58, 66, 65, 50, 40, 31, 42, 62, 57, 99, 75, 55, 73, 69, 77, 57, 61, 68, 82, 81, 78, 67],\n        \"Cz-lab-brn-02\": [41, 50, 56, 40, 44, 35, 27, 42, 38, 23, 20, 13, 29, 42, 84, 93, 71, 60, 54, 79, 64, 49, 48, 59, 76, 63, 52, 84, 89, 80],\n    };\n}\n\nfunction buildTimeSeriesFromData(from: Moment, to: Moment, data: number[]): { x: Moment, y: number }[] {\n    const count = data.length;\n    if (!from || !to || count === 0) {\n        return [];\n    }\n\n    const interval = count > 1 ? to.diff(from) / (count - 1) : 0;\n    return data.map((y, i) => ({\n        x: from.clone().add(moment.duration(i * interval)),\n        y,\n    }));\n}\n";
      /***/
    },

    /***/
    "dsON":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/chart-docs-time-frame-bar.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dsON(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Time Frame Bar</h1>\n\n<p>\n    This example shows the current way of implementing a chart with zooming capability and a time frame bar.\n    We don't provide components that would encapsulate this logic, so it needs to be implemented from scratch like this. It takes advantage of the filtering\n    session implementation to connect the filtering components on the page.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"time-frame-bar-basic\"\n                     exampleTitle=\"Time Frame Bar\">\n    <nui-time-frame-bar-example></nui-time-frame-bar-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "fePE":
    /*!****************************************************************************************************!*\
      !*** ./examples/components/demo/time-frame-bar/time-frame-bar-test/time-frame-bar-data.service.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TimeFrameBarDataService */

    /***/
    function fePE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeFrameBarDataService", function () {
        return TimeFrameBarDataService;
      });
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var DataInterval;

      (function (DataInterval) {
        DataInterval[DataInterval["Poll"] = 5] = "Poll";
        DataInterval[DataInterval["Hour"] = 60] = "Hour"; // Day = 24 * 60,
        // Week = 7 * 24 * 60,
      })(DataInterval || (DataInterval = {}));

      var TimeFrameBarDataService = /*#__PURE__*/function () {
        function TimeFrameBarDataService() {
          _classCallCheck(this, TimeFrameBarDataService);

          /* eslint-disable max-len */
          this.factors = {
            "day": [42, 7, 63, 33, 10, 16, 57, 16, 88, 44, 35, 85, 46, 73, 29, 35, 51, 52, 100, 51, 40, 87, 42, 90, 75, 90, 70, 16, 4, 43, 18, 63, 28, 15, 86, 81, 48, 86, 91, 89, 15, 89, 66, 35, 65, 18, 59, 75, 69, 64, 55, 67, 60, 76, 29, 81, 87, 73, 10, 19, 29, 83, 16, 72, 80, 43, 28, 53, 38, 24, 88, 81, 14, 68, 80, 44, 72, 56, 89, 83, 6, 1, 1, 11, 66, 39, 42, 81, 31, 48, 11, 76, 41, 60, 40, 15, 75, 33, 90, 80, 37, 40, 39, 58, 69, 31, 61, 80, 85, 57, 38, 3, 45, 36, 71, 66, 36, 58, 82, 70, 90, 78, 33, 72, 98, 36, 32, 61, 44, 13, 22, 90, 66, 87, 55, 21, 63, 70, 41, 61, 19, 42, 65, 79, 17, 14, 85, 69, 79, 77, 99, 86, 5, 31, 94, 2, 37, 54, 79, 32, 63, 83, 64, 52, 59, 35, 18, 45, 58, 23, 58, 99, 61, 60, 78, 95, 63, 35, 27, 93, 46, 86, 51, 80, 73, 6, 66, 72, 96, 7, 90, 94, 3, 66, 1, 38, 30, 11, 58, 91, 84, 100, 90, 70, 51, 77, 56, 53, 49, 42, 84, 10, 76, 11, 66, 41, 38, 68, 24, 84, 89, 72, 74, 54, 29, 18, 36, 13, 17, 18, 82, 14, 50, 10, 47, 12, 1, 4, 63, 59, 62, 78, 83, 5, 25, 8, 59, 59, 28, 56, 35, 33, 31, 37, 5, 67, 34, 93, 25, 66, 69, 64, 23, 69, 60, 24, 26, 81, 88, 66, 80, 45, 91, 68, 83, 8, 83, 43, 96, 85, 8, 47, 67, 14, 64, 26, 96, 45],
            "year": [64, 70, 41, 96, 74, 38, 38, 79, 77, 24, 98, 78, 22, 90, 7, 42, 95, 76, 92, 86, 13, 5, 80, 6, 9, 90, 40, 94, 66, 12, 28, 7, 76, 74, 23, 79, 82, 9, 9, 84, 59, 92, 63, 15, 25, 18, 83, 35, 46, 14, 22, 84, 34, 17, 9, 25, 34, 89, 48, 80, 76, 38, 60, 43, 41, 88, 35, 32, 62, 80, 76, 64, 41, 49, 23, 61, 27, 56, 3, 88, 37, 24, 15, 88, 85, 18, 41, 74, 81, 13, 40, 10, 39, 30, 45, 21, 32, 46, 54, 8, 28, 19, 74, 87, 36, 43, 74, 15, 58, 24, 98, 14, 49, 96, 51, 83, 4, 4, 13, 72, 42, 62, 26, 80, 85, 46, 74, 60, 14, 5, 97, 16, 90, 84, 52, 10, 18, 26, 8, 49, 71, 34, 87, 32, 15, 46, 23, 10, 86, 7, 18, 51, 31, 72, 20, 43, 10, 91, 74, 51, 86, 89, 32, 79, 94, 5, 41, 16, 79, 66, 84, 24, 74, 78, 69, 85, 46, 57, 92, 92, 3, 14, 5, 12, 63, 1, 6, 37, 85, 79, 18, 88, 42, 8, 25, 94, 87, 7, 52, 16, 35, 43, 65, 63, 46, 38, 98, 55, 100, 14, 45, 50, 49, 90, 98, 47, 20, 83, 84, 84, 58, 79, 100, 19, 75, 94, 34, 5, 94, 29, 96, 80, 46, 33, 73, 82, 58, 68, 98, 100, 10, 46, 96, 87, 96, 5, 64, 53, 5, 7, 19, 65, 91, 78, 59, 14, 19, 12, 15, 92, 8, 15, 19, 99, 26, 25, 45, 29, 39, 1, 61, 74, 88, 27, 43, 1, 93, 75, 91, 97, 38, 39, 24, 94, 29, 18, 88, 56, 62, 7, 88, 13, 34, 21, 20, 41, 90, 95, 2, 17, 26, 4, 44, 70, 18, 65, 75, 62, 18, 46, 18, 73, 76, 95, 2, 30, 31, 77, 77, 80, 23, 51, 48, 42, 78, 65, 78, 56, 37, 46, 96, 72, 49, 48, 8, 45, 89, 42, 87, 28, 42, 53, 94, 73, 57, 30, 75, 53, 77, 62, 9, 71, 9, 48, 97, 92, 91, 24, 44, 83, 8, 86, 41, 6, 21, 45],
            "century": [85, 83, 87, 82, 77, 65, 67, 72, 75, 76, 82, 87, 91, 93, 94, 90, 84, 89, 86, 88, 86, 85, 82, 84, 81, 77, 77, 77, 80, 97, 18, 6, 25, 85, 90, 25, 72, 99, 61, 79, 62, 7, 50, 41, 40, 6, 60, 65, 1, 98, 90, 31, 57, 74, 50, 57, 68, 20, 12, 16, 33, 1, 32, 53, 76, 57, 89, 33, 48, 28, 89, 35, 15, 3, 33, 77, 10, 1, 36, 4, 36, 88, 26, 66, 50, 3, 66, 37, 77, 70, 9, 40, 20, 14, 55, 96, 88, 14, 9, 54]
          };
          /* eslint-enable max-len */

          /* Chart data */

          this.seriesValueFunctions = {
            "Tex-lab-aus-2621": function TexLabAus2621(_ref) {
              var _ref2 = _slicedToArray(_ref, 3),
                  a = _ref2[0],
                  b = _ref2[1],
                  c = _ref2[2];

              return a + 0.1 * (b - 30) + (c - 50);
            },
            "Cz-lab-brn-02": function CzLabBrn02(_ref3) {
              var _ref4 = _slicedToArray(_ref3, 3),
                  a = _ref4[0],
                  b = _ref4[1],
                  c = _ref4[2];

              return a + 0.01 * b * (b - 50) + 20 * Math.cos(c * 0.02 * Math.PI);
            }
          };
        }

        _createClass(TimeFrameBarDataService, [{
          key: "getChartData",
          value: function getChartData(from, to) {
            var delayInterval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var rules = this.seriesValueFunctions;
            var results = {};
            var duration = moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(to.diff(from));
            var dataInterval = duration.asHours() > 12 ? DataInterval.Hour : DataInterval.Poll;

            for (var _i2 = 0, _Object$keys = Object.keys(rules); _i2 < _Object$keys.length; _i2++) {
              var seriesId = _Object$keys[_i2];
              results[seriesId] = this.getData(from, to, rules[seriesId], dataInterval);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(results).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(delayInterval));
          }
        }, {
          key: "getData",
          value: function getData(start, end, valueFn) {
            var interval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DataInterval.Poll;
            var startCorrector = start.minutes() % interval;
            var currentDate = start.clone().subtract(startCorrector, "minutes").seconds(0); // rounds to pollInterval

            var endCorrector = interval - end.minutes() % interval;
            var endDate = end.clone().add(endCorrector, "minutes").seconds(0); // rounds to 5 minutes pollInterval

            var count = Math.ceil(moment_moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(endDate.diff(currentDate)).asMinutes() / interval);
            var results = [];

            for (var i = 0; i < count; i++) {
              var fDay = this.factors.day[Math.ceil((60 * currentDate.hours() + currentDate.minutes()) / 5)];
              var fYear = this.factors.year[currentDate.dayOfYear()];
              var fCentury = this.factors.century[currentDate.year() % 100];
              results.push({
                x: currentDate.clone(),
                y: valueFn([fCentury, fYear, fDay])
              });
              currentDate.add(interval, "minutes");
            }

            return results;
          }
        }]);

        return TimeFrameBarDataService;
      }();
      /***/

    },

    /***/
    "jNox":
    /*!****************************************************************************************!*\
      !*** ./examples/components/demo/time-frame-bar/chart-docs-time-frame-bar.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ChartDocsTimeFrameBarComponent */

    /***/
    function jNox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsTimeFrameBarComponent", function () {
        return ChartDocsTimeFrameBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_time_frame_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-time-frame-bar.component.html */
      "dsON");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsTimeFrameBarComponent = function ChartDocsTimeFrameBarComponent() {
        _classCallCheck(this, ChartDocsTimeFrameBarComponent);
      };

      ChartDocsTimeFrameBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-time-frame-bar",
        template: _raw_loader_chart_docs_time_frame_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsTimeFrameBarComponent);
      /***/
    },

    /***/
    "oRth":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/chart-docs-time-frame-bar.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oRth(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-time-frame-bar\",\n    templateUrl: \"./chart-docs-time-frame-bar.component.html\",\n})\nexport class ChartDocsTimeFrameBarComponent {\n}\n";
      /***/
    },

    /***/
    "oS9I":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/time-frame-bar-test/time-frame-bar-test.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oS9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<charts-test-harness>\n    <div class=\"nui-time-frame-bar-test\">\n        <div class=\"m-5\" nui-busy [busy]=\"busy\" style=\"border: 1px solid lightgrey;\">\n            <nui-time-frame-bar [timeFrame]=\"timeFrame\"\n                                (timeFrameChange)=\"updateTimeFrame($event)\"\n                                [historyIndex]=\"history.index\"\n                                [minDate]=\"fromDate\"\n                                [maxDate]=\"toDate\"\n                                (undo)=\"zoomUndo()\"\n                                (clear)=\"updateTimeFrame()\"\n                                style=\"display: block; border-bottom: 1px solid lightgrey;\"\n                                class=\"time-frame-bar\">\n                <nui-icon icon=\"calendar\" class=\"pr-3\"></nui-icon>\n                {{timeFrame | timeFrame}}\n                <nui-quick-picker timeFrameSelection>\n                    <nui-time-frame-picker></nui-time-frame-picker>\n                </nui-quick-picker>\n            </nui-time-frame-bar>\n            <div class=\"nui-chart-layout p-3\">\n                <div class=\"axis-label-left nui-text-small\"><strong i18n>Average CPU load (%)</strong></div>\n                <div class=\"chart\">\n                    <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n                </div>\n                <div class=\"legend\">\n                    <nui-legend seriesUnitLabel=\"%\"\n                                [active]=\"chartAssist.isLegendActive\"\n                                [interactive]=\"true\"\n                                (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n                        <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                                           [descriptionPrimary]=\"legendSeries['name']\"\n                                           (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                                           [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                                           [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                                           (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                            <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                                  [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                                  [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                                <nui-chart-marker rightEdge\n                                                  [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                                  [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                                </nui-chart-marker>\n                            </nui-rich-legend-tile>\n                        </nui-legend-series>\n                    </nui-legend>\n                </div>\n            </div>\n        </div>\n        <div class=\"p-5\">\n            <input id=\"delay\" name=\"delay\" type=\"checkbox\" [checked]=\"addDelay\" (change)=\"addDelay = !addDelay\" />\n            <label for=\"delay\" class=\"pl-2\">Add delay to server requests</label>\n        </div>\n    </div>\n</charts-test-harness>\n";
      /***/
    },

    /***/
    "vG5J":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/time-frame-bar/time-frame-bar-test/time-frame-bar-test.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vG5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterContentInit, Component, OnDestroy } from \"@angular/core\";\nimport { HistoryStorage, IFilter, IFilteringOutputs, ITimeframe, NoopDataSourceService } from \"@nova-ui/bits\";\nimport {\n    Chart, ChartAssist, getAutomaticDomainWithIncludedInterval, ISetDomainEventPayload, LineAccessors, LinearScale,\n    LineRenderer, SET_DOMAIN_EVENT, TimeScale, XYGrid, ZoomPlugin\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\nimport { Subscription } from \"rxjs\";\n\nimport { TimeFrameBarDataService } from \"./time-frame-bar-data.service\";\n\n@Component({\n    selector: \"nui-time-frame-bar-test\",\n    templateUrl: \"./time-frame-bar-test.component.html\",\n    providers: [NoopDataSourceService, HistoryStorage],\n})\nexport class TimeFrameBarTestComponent implements AfterContentInit, OnDestroy {\n    public fromDate = moment(\"2018-05-01 15:00:00\").subtract(2, \"days\");\n    public toDate = moment(\"2018-05-01 15:00:00\");\n\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public timeFrame: ITimeframe;\n    public busy: boolean;\n    public addDelay: boolean = true;\n\n    private xScale = new TimeScale(\"time-scale\");\n    private yScale = new LinearScale();\n    private accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n    private renderer = new LineRenderer();\n    private filteringSubscription: Subscription;\n\n    private dataService = new TimeFrameBarDataService();\n\n    constructor(public history: HistoryStorage<ITimeframe>,\n        private dataSourceService: NoopDataSourceService<ITimeframe>) {\n    }\n\n    public ngAfterContentInit() {\n        this.yScale.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n        this.chart.addPlugins(new ZoomPlugin());\n\n        this.filteringSubscription = this.setUpFiltering();\n\n        this.chart.getEventBus().getStream(SET_DOMAIN_EVENT).subscribe((event) => {\n            const payload = <ISetDomainEventPayload>event.data;\n            const newDomain = payload[this.xScale.id];\n\n            this.applyFilters(this.history.save({\n                startDatetime: moment(newDomain[0]),\n                endDatetime: moment(newDomain[1]),\n                selectedPresetId: undefined,\n            }));\n        });\n\n        this.applyFilters(this.history.save({\n            startDatetime: this.fromDate,\n            endDatetime: this.toDate,\n            selectedPresetId: undefined,\n        }));\n    }\n\n    public ngOnDestroy() {\n        if (this.filteringSubscription) {\n            this.filteringSubscription.unsubscribe();\n        }\n    }\n\n    public updateTimeFrame(value?: ITimeframe) {\n        this.applyFilters(this.history.restart(value));\n    }\n\n    public zoomUndo() {\n        this.applyFilters(this.history.undo());\n    }\n\n    private applyFilters(value: ITimeframe) {\n        this.busy = true;\n        this.timeFrame = value;\n        this.xScale.fixDomain([value.startDatetime.toDate(), value.endDatetime.toDate()]);\n        this.chart.updateDimensions();\n        void this.dataSourceService.applyFilters();\n    }\n\n    private setUpFiltering(): any {\n        this.dataSourceService.registerComponent({\n            timeframe: {\n                componentInstance: {\n                    getFilters: () => <IFilter<ITimeframe>>({\n                        type: \"ITimeframe\",\n                        value: this.timeFrame,\n                    }),\n                },\n            },\n        });\n\n        return this.dataSourceService.outputsSubject.subscribe((data: IFilteringOutputs) => {\n            const start = data.timeframe.value.startDatetime;\n            const end = data.timeframe.value.endDatetime;\n            this.dataService.getChartData(start, end, this.addDelay ? 1000 : 0).subscribe((series) => {\n                this.chartAssist.update(Object.keys(series).map((key: string) => ({\n                    id: key,\n                    name: key,\n                    data: series[key],\n                    accessors: this.accessors,\n                    renderer: this.renderer,\n                    scales: { x: this.xScale, y: this.yScale },\n                })));\n                this.busy = false;\n            });\n\n        });\n    }\n}\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-time-frame-bar-chart-docs-time-frame-bar-module-es5.js.map