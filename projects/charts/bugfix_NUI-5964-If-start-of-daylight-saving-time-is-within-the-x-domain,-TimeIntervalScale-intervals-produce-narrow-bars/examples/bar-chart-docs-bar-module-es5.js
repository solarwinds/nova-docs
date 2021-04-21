(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bar-chart-docs-bar-module"], {
    /***/
    "+6AG":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/dst-test-page.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: DstTestPageComponent */

    /***/
    function AG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DstTestPageComponent", function () {
        return DstTestPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dst_test_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dst-test-page.component.html */
      "pyLK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);

      var DstTestPageComponent = function DstTestPageComponent() {
        _classCallCheck(this, DstTestPageComponent);

        this.insideDstData = getInsideDstData();
        this.outsideDstData = getOutsideDstData();
        this.startDstOneMinuteData = getStartDstOneMinuteData();
        this.startDstOneHourData = getStartDstOneHourData();
        this.startDstTwoHourData = getStartDstTwoHourData();
        this.startDstOneDayData = getStartDstOneDayData();
        this.endDstOneMinuteData = getEndDstOneMinuteData();
        this.endDstOneHourData = getEndDstOneHourData();
        this.endDstTwoHourData = getEndDstTwoHourData();
        this.endDstOneDayData = getEndDstOneDayData();
        this.oneMinuteInterval = Object(moment_moment__WEBPACK_IMPORTED_MODULE_3__["duration"])(1, "minute");
        this.oneDayInterval = Object(moment_moment__WEBPACK_IMPORTED_MODULE_3__["duration"])(1, "days");
        this.oneHourInterval = Object(moment_moment__WEBPACK_IMPORTED_MODULE_3__["duration"])(1, "hours");
        this.twoHourInterval = Object(moment_moment__WEBPACK_IMPORTED_MODULE_3__["duration"])(2, "hours");
      };

      DstTestPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_dst_test_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DstTestPageComponent);

      function getStartDstOneMinuteData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T07:58:00.000Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T07:59:00.000Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T08:00:00.000Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T08:01:00.000Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T08:02:00.000Z", format).toDate(),
            y: 35
          }]
        }];
      }

      function getStartDstOneHourData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T06:00:00.000Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T07:00:00.000Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T08:00:00.000Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T09:00:00.000Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T10:00:00.000Z", format).toDate(),
            y: 35
          }]
        }];
      }

      function getStartDstTwoHourData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T04:00:00.000Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T06:00:00.000Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T08:00:00.000Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T10:00:00.000Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T12:00:00.000Z", format).toDate(),
            y: 35
          }]
        }];
      }

      function getStartDstOneDayData() {
        var format = "YYYY-MM-DDTHH";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-13T0", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-14T0", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-15T0", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-16T0", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-03-17T0", format).toDate(),
            y: 35
          }]
        }];
      }

      function getEndDstOneMinuteData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T06:58:00.000Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T06:59:00.000Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T07:00:00.000Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T07:01:00.000Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T07:02:00.000Z", format).toDate(),
            y: 35
          }]
        }];
      }

      function getEndDstOneHourData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T06:00:00.000Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T07:00:00.000Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T08:00:00.000Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T09:00:00.000Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T10:00:00.000Z", format).toDate(),
            y: 35
          }]
        }];
      }

      function getEndDstTwoHourData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T03:00:00.000Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T05:00:00.000Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T07:00:00.000Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T09:00:00.000Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T11:00:00.000Z", format).toDate(),
            y: 35
          }]
        }];
      }

      function getEndDstOneDayData() {
        var format = "YYYY-MM-DDTHH";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-10-31T0", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-01T0", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-02T0", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-03T0", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-11-04T0", format).toDate(),
            y: 35
          }]
        }];
      }

      function getInsideDstData() {
        var format = "YYYY-MM-DDTHH";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-04-03T0", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-04-04T0", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-04-05T0", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-04-06T0", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2021-04-07T0", format).toDate(),
            y: 35
          }]
        }];
      }

      function getOutsideDstData() {
        var format = "YYYY-MM-DDTHH";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-12-01T0", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-12-02T0", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-12-03T0", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-12-04T0", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("2020-12-05T0", format).toDate(),
            y: 35
          }]
        }];
      }
      /***/

    },

    /***/
    "0h2D":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-time-scale/bar-chart-time-scale.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: BarChartTimeScaleExampleComponent */

    /***/
    function h2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartTimeScaleExampleComponent", function () {
        return BarChartTimeScaleExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_time_scale_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-time-scale.example.component.html */
      "1v3Y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var BarChartTimeScaleExampleComponent = /*#__PURE__*/function () {
        function BarChartTimeScaleExampleComponent() {
          _classCallCheck(this, BarChartTimeScaleExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
        }

        _createClass(BarChartTimeScaleExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
            var linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
            linearScale.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 0]);
            var scales = {
              x: bandScale,
              y: linearScale
            };
            var start = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()([2018, 7, 4]);
            var seriesSet = getData(start).map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            bandScale.fixDomain(seriesSet.map(function (s) {
              return s.data[0].category;
            }));
            var scaleId = "bottom";
            var time = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](scaleId);
            var end = start.clone().add(seriesSet.length, "hour");
            time.fixDomain([start.clone().toDate(), end.toDate()]); // This is the most crucial part: users need to add "fake" series, so framework would be able to use provided time scale.
            // You need to provide scale for x or y and provide the id (for bottom or left scale). Id must be the same as the one used to create scale.
            // We suggest using Noops (render, accessor, other scale) for this fake series.

            seriesSet.push({
              id: "0",
              name: "hidden",
              data: [],
              accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopAccessors"](),
              renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopRenderer"](),
              scales: {
                x: time,
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopScale"]()
              }
            });
            this.chart.getGrid().bottomScaleId = scaleId;
            this.chart.update(seriesSet);
          }
        }]);

        return BarChartTimeScaleExampleComponent;
      }();

      BarChartTimeScaleExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-time-scale-example",
        template: _raw_loader_bar_chart_time_scale_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartTimeScaleExampleComponent);
      /* Chart data */

      function getData(start) {
        var values = [66, 14, 5, 40, 3, 23, 15];
        var dataSet = [];

        for (var i = 0; i < values.length; i++) {
          var date = start.clone().add(i, "hour");
          dataSet.push({
            id: "id-".concat(i),
            name: date.toString(),
            data: [_defineProperty({
              value: values[i],
              category: date.toString()
            }, "__bar", {
              start: 0,
              end: values[i]
            })]
          });
        }

        return dataSet;
      }
      /***/

    },

    /***/
    "3TZA":
    /*!*******************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart/bar-chart.example.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: BarChartExampleComponent */

    /***/
    function TZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartExampleComponent", function () {
        return BarChartExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart.example.component.html */
      "J97j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartExampleComponent = /*#__PURE__*/function () {
        function BarChartExampleComponent() {
          _classCallCheck(this, BarChartExampleComponent);

          // this configuration passed to barGrid, barAccessors, barScales determines the orientation of the bar chart
          this.config = {
            horizontal: false
          };
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.config));
        }

        _createClass(BarChartExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.config);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.config);
            this.chart.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BarChartExampleComponent;
      }();

      BarChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-example",
        template: _raw_loader_bar_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [66]
        }, {
          id: "safari",
          name: "Safari",
          data: [14]
        }, {
          id: "firefox",
          name: "Firefox",
          data: [5]
        }, {
          id: "uc ",
          name: "UC Browser",
          data: [4]
        }, {
          id: "opera",
          name: "Opera",
          data: [3]
        }, {
          id: "other",
          name: "Other",
          data: [5]
        }];
      }
      /***/

    },

    /***/
    "5xc8":
    /*!***************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/chart-docs-bar.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ChartDocsBarModule */

    /***/
    function xc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsBarModule", function () {
        return ChartDocsBarModule;
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
      /*! ../../common/demo-common.module */
      "s1Ul");
      /* harmony import */


      var _bar_chart_horizontal_bar_chart_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bar-chart-horizontal/bar-chart-horizontal.example.component */
      "P8wC");
      /* harmony import */


      var _bar_chart_test_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bar-chart-test/bar-chart-test.component */
      "venF");
      /* harmony import */


      var _bar_chart_test_bar_chart_tick_label_max_width_with_margin_bar_chart_tick_label_max_width_with_margin_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component */
      "d8q9");
      /* harmony import */


      var _bar_chart_test_bar_chart_tick_label_max_width_bar_chart_tick_label_max_width_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component */
      "w4ni");
      /* harmony import */


      var _bar_chart_test_basic_horizontal_basic_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component */
      "x55w");
      /* harmony import */


      var _bar_chart_test_basic_vertical_basic_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component */
      "Kz8y");
      /* harmony import */


      var _bar_chart_test_daylight_saving_time_bar_chart_time_interval_bar_chart_time_interval_dst_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component */
      "7141");
      /* harmony import */


      var _bar_chart_test_daylight_saving_time_dst_test_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./bar-chart-test/daylight-saving-time/dst-test-page.component */
      "+6AG");
      /* harmony import */


      var _bar_chart_test_horizontal_with_legend_horizontal_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component */
      "u+UU");
      /* harmony import */


      var _bar_chart_test_time_interval_time_interval_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./bar-chart-test/time-interval/time-interval.test.component */
      "gHkq");
      /* harmony import */


      var _bar_chart_test_vertical_with_legend_vertical_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component */
      "y362");
      /* harmony import */


      var _bar_chart_test_vertical_with_timescale_vertical_with_timescale_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component */
      "pGMu");
      /* harmony import */


      var _bar_chart_time_interval_bar_chart_time_interval_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./bar-chart-time-interval/bar-chart-time-interval.example.component */
      "d/zz");
      /* harmony import */


      var _bar_chart_time_scale_bar_chart_time_scale_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./bar-chart-time-scale/bar-chart-time-scale.example.component */
      "0h2D");
      /* harmony import */


      var _bar_chart_with_legend_bar_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./bar-chart-with-legend/bar-chart-with-legend.example.component */
      "8Iil");
      /* harmony import */


      var _bar_chart_bar_chart_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./bar-chart/bar-chart.example.component */
      "3TZA");
      /* harmony import */


      var _chart_docs_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./chart-docs-bar.component */
      "ld5b"); // eslint-disable-next-line max-len


      var exampleRoutes = [{
        path: "",
        component: _chart_docs_bar_component__WEBPACK_IMPORTED_MODULE_22__["ChartDocsBarComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "bar-chart",
        component: _bar_chart_bar_chart_example_component__WEBPACK_IMPORTED_MODULE_21__["BarChartExampleComponent"],
        data: {
          "srlc": {
            hideIndicator: true
          }
        }
      }, {
        path: "horizontal",
        component: _bar_chart_horizontal_bar_chart_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__["BarChartHorizontalExampleComponent"],
        data: {
          "srlc": {
            hideIndicator: true
          }
        }
      }, {
        path: "with-legend",
        component: _bar_chart_with_legend_bar_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_20__["BarChartWithLegendExampleComponent"]
      }, {
        path: "test",
        component: _bar_chart_test_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_7__["BarChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "dst-test",
        component: _bar_chart_test_daylight_saving_time_dst_test_page_component__WEBPACK_IMPORTED_MODULE_13__["DstTestPageComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "time-interval",
        component: _bar_chart_time_interval_bar_chart_time_interval_example_component__WEBPACK_IMPORTED_MODULE_18__["BarChartTimeIntervalExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "vertical-bar-test",
        component: _bar_chart_test_basic_vertical_basic_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_11__["BasicVerticalBarChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "horizontal-bar-test",
        component: _bar_chart_test_basic_horizontal_basic_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["BasicHorizontalBarChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "bar-chart-max-width-test",
        component: _bar_chart_test_bar_chart_tick_label_max_width_bar_chart_tick_label_max_width_test_component__WEBPACK_IMPORTED_MODULE_9__["BarChartTickLabelMaxWidthTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "bar-chart-max-width-with-margin-test",
        component: _bar_chart_test_bar_chart_tick_label_max_width_with_margin_bar_chart_tick_label_max_width_with_margin_test_component__WEBPACK_IMPORTED_MODULE_8__["BarChartTickLabelMaxWidthWithMarginTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsBarModule = function ChartDocsBarModule() {
        _classCallCheck(this, ChartDocsBarModule);
      };

      ChartDocsBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_bar_component__WEBPACK_IMPORTED_MODULE_22__["ChartDocsBarComponent"], _bar_chart_bar_chart_example_component__WEBPACK_IMPORTED_MODULE_21__["BarChartExampleComponent"], _bar_chart_horizontal_bar_chart_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__["BarChartHorizontalExampleComponent"], _bar_chart_time_scale_bar_chart_time_scale_example_component__WEBPACK_IMPORTED_MODULE_19__["BarChartTimeScaleExampleComponent"], _bar_chart_time_interval_bar_chart_time_interval_example_component__WEBPACK_IMPORTED_MODULE_18__["BarChartTimeIntervalExampleComponent"], _bar_chart_test_bar_chart_tick_label_max_width_bar_chart_tick_label_max_width_test_component__WEBPACK_IMPORTED_MODULE_9__["BarChartTickLabelMaxWidthTestComponent"], _bar_chart_test_bar_chart_tick_label_max_width_with_margin_bar_chart_tick_label_max_width_with_margin_test_component__WEBPACK_IMPORTED_MODULE_8__["BarChartTickLabelMaxWidthWithMarginTestComponent"], _bar_chart_with_legend_bar_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_20__["BarChartWithLegendExampleComponent"], _bar_chart_test_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_7__["BarChartTestComponent"], _bar_chart_test_basic_horizontal_basic_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["BasicHorizontalBarChartTestComponent"], _bar_chart_test_basic_vertical_basic_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_11__["BasicVerticalBarChartTestComponent"], _bar_chart_test_daylight_saving_time_dst_test_page_component__WEBPACK_IMPORTED_MODULE_13__["DstTestPageComponent"], _bar_chart_test_daylight_saving_time_bar_chart_time_interval_bar_chart_time_interval_dst_test_component__WEBPACK_IMPORTED_MODULE_12__["BarChartTimeIntervalDstTestComponent"], _bar_chart_test_vertical_with_timescale_vertical_with_timescale_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_17__["VerticalWithTimescaleBarChartTestComponent"], _bar_chart_test_vertical_with_legend_vertical_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_16__["VerticalWithLegendBarChartTestComponent"], _bar_chart_test_horizontal_with_legend_horizontal_with_legend_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_14__["HorizontalWithLegendBarChartTestComponent"], _bar_chart_test_time_interval_time_interval_test_component__WEBPACK_IMPORTED_MODULE_15__["TimeIntervalTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("vn8Z");
          }
        }]
      })], ChartDocsBarModule);
      /***/
    },

    /***/
    "7141":
    /*!************************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: BarChartTimeIntervalDstTestComponent */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartTimeIntervalDstTestComponent", function () {
        return BarChartTimeIntervalDstTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_time_interval_dst_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-time-interval-dst-test.component.html */
      "JozS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var BarChartTimeIntervalDstTestComponent = /*#__PURE__*/function () {
        function BarChartTimeIntervalDstTestComponent() {
          _classCallCheck(this, BarChartTimeIntervalDstTestComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
        }

        _createClass(BarChartTimeIntervalDstTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();

            accessors.data.category = function (d) {
              return d.x;
            };

            accessors.data.value = function (d) {
              return d.y;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x"),
              pointerEvents: false
            });
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](this.interval),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            this.chart.update(this.data.map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BarChartTimeIntervalDstTestComponent;
      }();

      BarChartTimeIntervalDstTestComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        interval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      BarChartTimeIntervalDstTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "bar-chart-time-interval-dst-test",
        template: _raw_loader_bar_chart_time_interval_dst_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartTimeIntervalDstTestComponent);
      /***/
    },

    /***/
    "8Iil":
    /*!*******************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-with-legend/bar-chart-with-legend.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: BarChartWithLegendExampleComponent */

    /***/
    function Iil(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartWithLegendExampleComponent", function () {
        return BarChartWithLegendExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_with_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-with-legend.example.component.html */
      "1Aus");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartWithLegendExampleComponent = /*#__PURE__*/function () {
        function BarChartWithLegendExampleComponent() {
          _classCallCheck(this, BarChartWithLegendExampleComponent);

          this.barConfig = {
            horizontal: false
          }; // the usage of ChartAssist helps with connecting the chart with the legend

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig)));
        }

        _createClass(BarChartWithLegendExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig, this.chartAssist.palette.standardColors);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              // highlightStrategy determines how the bar chart should manage highlighting.
              // BarSeriesHighlightStrategy emphasizes the entire series on hovering a single bar,
              // which also triggers emphasis on the legend tile.
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x"
              /* "x" determines which scale the highlight should be driven by */
              )
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig); // it is important to update the chart via the chartAssist so that the legend is also updated

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return BarChartWithLegendExampleComponent;
      }();

      BarChartWithLegendExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-with-legend-example",
        template: _raw_loader_bar_chart_with_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartWithLegendExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [66]
        }, {
          id: "safari",
          name: "Safari",
          data: [14]
        }, {
          id: "firefox",
          name: "Firefox",
          data: [5]
        }, {
          id: "uc",
          name: "UC Browser",
          data: [4]
        }, {
          id: "opera",
          name: "Opera",
          data: [3]
        }, {
          id: "other",
          name: "Other",
          data: [5]
        }];
      }
      /***/

    },

    /***/
    "Kz8y":
    /*!***************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: BasicVerticalBarChartTestComponent */

    /***/
    function Kz8y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicVerticalBarChartTestComponent", function () {
        return BasicVerticalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-vertical-bar-chart-test.component.html */
      "IISk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BasicVerticalBarChartTestComponent = /*#__PURE__*/function () {
        function BasicVerticalBarChartTestComponent() {
          _classCallCheck(this, BasicVerticalBarChartTestComponent);

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()));
        }

        _createClass(BasicVerticalBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BasicVerticalBarChartTestComponent;
      }();

      BasicVerticalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-basic-vertical-bar-chart-test",
        template: _raw_loader_basic_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasicVerticalBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [66]
        }, {
          id: "safari",
          name: "Safari",
          data: [14]
        }, {
          id: "firefox",
          name: "Firefox",
          data: [5]
        }, {
          id: "uc ",
          name: "UC Browser",
          data: [4]
        }, {
          id: "opera",
          name: "Opera",
          data: [3]
        }, {
          id: "other",
          name: "Other",
          data: [5]
        }];
      }
      /***/

    },

    /***/
    "P8wC":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-horizontal/bar-chart-horizontal.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: BarChartHorizontalExampleComponent */

    /***/
    function P8wC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartHorizontalExampleComponent", function () {
        return BarChartHorizontalExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-horizontal.example.component.html */
      "9/l/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartHorizontalExampleComponent = /*#__PURE__*/function () {
        function BarChartHorizontalExampleComponent() {
          _classCallCheck(this, BarChartHorizontalExampleComponent);

          this.barConfig = {
            horizontal: true
          };
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig));
        }

        _createClass(BarChartHorizontalExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig);
            this.chart.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BarChartHorizontalExampleComponent;
      }();

      BarChartHorizontalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-horizontal-example",
        template: _raw_loader_bar_chart_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartHorizontalExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [66]
        }, {
          id: "safari",
          name: "Safari",
          data: [14]
        }, {
          id: "firefox",
          name: "Firefox",
          data: [5]
        }, {
          id: "uc ",
          name: "UC Browser",
          data: [4]
        }, {
          id: "opera",
          name: "Opera",
          data: [3]
        }, {
          id: "other",
          name: "Other",
          data: [5]
        }];
      }
      /***/

    },

    /***/
    "d/zz":
    /*!***********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-time-interval/bar-chart-time-interval.example.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: BarChartTimeIntervalExampleComponent */

    /***/
    function dZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartTimeIntervalExampleComponent", function () {
        return BarChartTimeIntervalExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_time_interval_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-time-interval.example.component.html */
      "0Rf4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var BarChartTimeIntervalExampleComponent = /*#__PURE__*/function () {
        function BarChartTimeIntervalExampleComponent() {
          _classCallCheck(this, BarChartTimeIntervalExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
        }

        _createClass(BarChartTimeIntervalExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();

            accessors.data.category = function (d) {
              return d.x;
            };

            accessors.data.value = function (d) {
              return d.y;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(1, "days")),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            this.chart.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BarChartTimeIntervalExampleComponent;
      }();

      BarChartTimeIntervalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-time-interval-example",
        template: _raw_loader_bar_chart_time_interval_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartTimeIntervalExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-01T0", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-02T0", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-03T0", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-04T0", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-05T0", format).toDate(),
            y: 35
          }]
        }];
      }
      /***/

    },

    /***/
    "d8q9":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.ts ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: BarChartTickLabelMaxWidthWithMarginTestComponent */

    /***/
    function d8q9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartTickLabelMaxWidthWithMarginTestComponent", function () {
        return BarChartTickLabelMaxWidthWithMarginTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_tick_label_max_width_with_margin_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-tick-label-max-width-with-margin-test.component.html */
      "YH2w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartTickLabelMaxWidthWithMarginTestComponent = /*#__PURE__*/function () {
        function BarChartTickLabelMaxWidthWithMarginTestComponent() {
          _classCallCheck(this, BarChartTickLabelMaxWidthWithMarginTestComponent);
        }

        _createClass(BarChartTickLabelMaxWidthWithMarginTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var config = {
              horizontal: true
            };
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(config);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(config);
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(config));
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
            var gridConfig = this.chart.getGrid().config();
            gridConfig.axis.left.fit = false;
            gridConfig.dimension.margin.left = 100;
            gridConfig.axis.left.tickLabel.maxWidth = 50;
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            this.chartAssist.update(seriesSet);
          }
        }]);

        return BarChartTickLabelMaxWidthWithMarginTestComponent;
      }();

      BarChartTickLabelMaxWidthWithMarginTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-tick-label-max-width-with-margin-test",
        template: _raw_loader_bar_chart_tick_label_max_width_with_margin_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartTickLabelMaxWidthWithMarginTestComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Long Name Test Long Name Test",
          data: [20]
        }, {
          id: "series-2",
          name: "Results",
          data: [80]
        }, {
          id: "series-3",
          name: "Supercalifragilisticexpialidocious",
          data: [45]
        }];
      }
      /***/

    },

    /***/
    "gHkq":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/time-interval/time-interval.test.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: TimeIntervalTestComponent */

    /***/
    function gHkq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeIntervalTestComponent", function () {
        return TimeIntervalTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_time_interval_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./time-interval.test.component.html */
      "RqGI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var TimeIntervalTestComponent = /*#__PURE__*/function () {
        function TimeIntervalTestComponent() {
          _classCallCheck(this, TimeIntervalTestComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
        }

        _createClass(TimeIntervalTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();

            accessors.data.category = function (d) {
              return d.x;
            };

            accessors.data.value = function (d) {
              return d.y;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(1, "days")),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            this.chart.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return TimeIntervalTestComponent;
      }();

      TimeIntervalTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-time-interval-test",
        template: _raw_loader_time_interval_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TimeIntervalTestComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-01T0", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-02T0", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-03T0", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-04T0", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2020-07-05T0", format).toDate(),
            y: 35
          }]
        }];
      }
      /***/

    },

    /***/
    "ld5b":
    /*!******************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/chart-docs-bar.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ChartDocsBarComponent */

    /***/
    function ld5b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsBarComponent", function () {
        return ChartDocsBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-bar.component.html */
      "2kIB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsBarComponent = function ChartDocsBarComponent() {
        _classCallCheck(this, ChartDocsBarComponent);

        this.horizontalConfig = "public config = { horizontal: true } as IBarChartConfig;\n...\n... barGrid(this.config) ...\n... barScales(this.config) ...\n... barAccessors(this.config) ...";
      };

      ChartDocsBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-bar",
        template: _raw_loader_chart_docs_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsBarComponent);
      /***/
    },

    /***/
    "pGMu":
    /*!*********************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: VerticalWithTimescaleBarChartTestComponent */

    /***/
    function pGMu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalWithTimescaleBarChartTestComponent", function () {
        return VerticalWithTimescaleBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vertical_with_timescale_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vertical-with-timescale-bar-chart-test.component.html */
      "jZPK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var VerticalWithTimescaleBarChartTestComponent = /*#__PURE__*/function () {
        function VerticalWithTimescaleBarChartTestComponent() {
          _classCallCheck(this, VerticalWithTimescaleBarChartTestComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])());
        }

        _createClass(VerticalWithTimescaleBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
            var start = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()([2018, 7, 4]);
            var seriesSet = getData(start).map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            scales.x.fixDomain(seriesSet.map(function (s) {
              return s.data[0].category;
            }));
            var scaleId = "bottom";
            var time = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](scaleId);
            var end = start.clone().add(seriesSet.length, "hour");
            time.fixDomain([start.clone().toDate(), end.toDate()]); // This is the most crucial part: users need to add "fake" series, so framework would be able to use provided time scale.
            // You need to provide scale for x or y and provide the id (for bottom or left scale). Id must be the same as the one used to create scale.
            // We suggest using Noops (render, accessor, other scale) for this fake series.

            seriesSet.push({
              id: "0",
              name: "hidden",
              data: [],
              accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopAccessors"](),
              renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopRenderer"](),
              scales: {
                x: time,
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NoopScale"]()
              }
            });
            this.chart.getGrid().bottomScaleId = scaleId;
            this.chart.update(seriesSet);
          }
        }]);

        return VerticalWithTimescaleBarChartTestComponent;
      }();

      VerticalWithTimescaleBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-vertical-with-timescale-bar-chart-test",
        template: _raw_loader_vertical_with_timescale_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], VerticalWithTimescaleBarChartTestComponent);
      /* Chart data */

      function getData(start) {
        var values = [66, 14, 5, 40, 3, 23, 15];
        var dataSet = [];

        for (var i = 0; i < values.length; i++) {
          var date = start.clone().add(i, "hour");
          dataSet.push({
            id: "id-".concat(i),
            name: date.toString(),
            data: [_defineProperty({
              value: values[i],
              category: date.toString()
            }, "__bar", {
              start: 0,
              end: values[i]
            })]
          });
        }

        return dataSet;
      }
      /***/

    },

    /***/
    "u+UU":
    /*!*******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: HorizontalWithLegendBarChartTestComponent */

    /***/
    function uUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalWithLegendBarChartTestComponent", function () {
        return HorizontalWithLegendBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_horizontal_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./horizontal-with-legend-bar-chart-test.component.html */
      "x45f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var HorizontalWithLegendBarChartTestComponent = /*#__PURE__*/function () {
        function HorizontalWithLegendBarChartTestComponent() {
          _classCallCheck(this, HorizontalWithLegendBarChartTestComponent);

          this.barConfig = {
            horizontal: true
          };
          this.grid = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig);
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.grid));
        }

        _createClass(HorizontalWithLegendBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.grid.config().axis.left.visible = false;
            this.grid.config().dimension.margin.left = 0;
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig, this.chartAssist.palette.standardColors);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("y")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig);
            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return HorizontalWithLegendBarChartTestComponent;
      }();

      HorizontalWithLegendBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-horizontal-with-legend-bar-chart-test",
        template: _raw_loader_horizontal_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], HorizontalWithLegendBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [66]
        }, {
          id: "safari",
          name: "Safari",
          data: [14]
        }, {
          id: "firefox",
          name: "Firefox",
          data: [5]
        }, {
          id: "uc",
          name: "UC Browser",
          data: [4]
        }, {
          id: "opera",
          name: "Opera",
          data: [3]
        }, {
          id: "other",
          name: "Other",
          data: [5]
        }];
      }
      /***/

    },

    /***/
    "venF":
    /*!*********************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-test.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: BarChartTestComponent */

    /***/
    function venF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartTestComponent", function () {
        return BarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-test.component.html */
      "V5TH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BarChartTestComponent = function BarChartTestComponent() {
        _classCallCheck(this, BarChartTestComponent);
      };

      BarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-test",
        template: _raw_loader_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartTestComponent);
      /***/
    },

    /***/
    "vn8Z":
    /*!******************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \******************************************************************************************************************/

    /*! no static exports found */

    /***/
    function vn8Z(module, exports, __webpack_require__) {
      var map = {
        "./bar-chart-horizontal/bar-chart-horizontal.example.component.html": "9/l/",
        "./bar-chart-horizontal/bar-chart-horizontal.example.component.ts": "j71K",
        "./bar-chart-test/bar-chart-test.component.html": "V5TH",
        "./bar-chart-test/bar-chart-test.component.ts": "HO4h",
        "./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.html": "YH2w",
        "./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.ts": "62iK",
        "./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.html": "0txK",
        "./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.ts": "zjRD",
        "./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.html": "OID3",
        "./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.ts": "iqrN",
        "./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.html": "IISk",
        "./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.ts": "bkbR",
        "./bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.html": "JozS",
        "./bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.ts": "PSNa",
        "./bar-chart-test/daylight-saving-time/daylight-saving-time-test.module.ts": "x13I",
        "./bar-chart-test/daylight-saving-time/dst-test-page.component.html": "pyLK",
        "./bar-chart-test/daylight-saving-time/dst-test-page.component.ts": "Uued",
        "./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.html": "x45f",
        "./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.ts": "cktB",
        "./bar-chart-test/time-interval/time-interval.test.component.html": "RqGI",
        "./bar-chart-test/time-interval/time-interval.test.component.ts": "uzU3",
        "./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.html": "JuaB",
        "./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.ts": "9LuY",
        "./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.html": "jZPK",
        "./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.ts": "vYZz",
        "./bar-chart-time-interval/bar-chart-time-interval.example.component.html": "0Rf4",
        "./bar-chart-time-interval/bar-chart-time-interval.example.component.ts": "DevO",
        "./bar-chart-time-scale/bar-chart-time-scale.example.component.html": "1v3Y",
        "./bar-chart-time-scale/bar-chart-time-scale.example.component.ts": "pYVe",
        "./bar-chart-with-legend/bar-chart-with-legend.example.component.html": "1Aus",
        "./bar-chart-with-legend/bar-chart-with-legend.example.component.ts": "j9Gm",
        "./bar-chart/bar-chart.example.component.html": "J97j",
        "./bar-chart/bar-chart.example.component.ts": "Zw7l",
        "./chart-docs-bar.component.html": "2kIB",
        "./chart-docs-bar.component.ts": "7LK1",
        "./chart-docs-bar.module.ts": "N8dz"
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
      webpackContext.id = "vn8Z";
      /***/
    },

    /***/
    "w4ni":
    /*!*************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: BarChartTickLabelMaxWidthTestComponent */

    /***/
    function w4ni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartTickLabelMaxWidthTestComponent", function () {
        return BarChartTickLabelMaxWidthTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_tick_label_max_width_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-tick-label-max-width-test.component.html */
      "0txK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartTickLabelMaxWidthTestComponent = /*#__PURE__*/function () {
        function BarChartTickLabelMaxWidthTestComponent() {
          _classCallCheck(this, BarChartTickLabelMaxWidthTestComponent);
        }

        _createClass(BarChartTickLabelMaxWidthTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var config = {
              horizontal: true
            };
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(config);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(config);
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(config));
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
            var gridConfig = this.chart.getGrid().config();
            gridConfig.axis.left.tickLabel.maxWidth = 100;
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            this.chartAssist.update(seriesSet);
          }
        }]);

        return BarChartTickLabelMaxWidthTestComponent;
      }();

      BarChartTickLabelMaxWidthTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-tick-label-max-width-test",
        template: _raw_loader_bar_chart_tick_label_max_width_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartTickLabelMaxWidthTestComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Long Name Test Long Name Test",
          data: [20]
        }, {
          id: "series-2",
          name: "Results",
          data: [80]
        }, {
          id: "series-3",
          name: "Supercalifragilisticexpialidocious",
          data: [45]
        }];
      }
      /***/

    },

    /***/
    "x55w":
    /*!*******************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: BasicHorizontalBarChartTestComponent */

    /***/
    function x55w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicHorizontalBarChartTestComponent", function () {
        return BasicHorizontalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-horizontal-bar-chart-test.component.html */
      "OID3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BasicHorizontalBarChartTestComponent = /*#__PURE__*/function () {
        function BasicHorizontalBarChartTestComponent() {
          _classCallCheck(this, BasicHorizontalBarChartTestComponent);

          this.config = {
            horizontal: true
          };
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.config));
          var gridConfig = this.chart.getGrid().config();
          gridConfig.axis.left.fit = false;
          gridConfig.dimension.margin.left = 150;
        }

        _createClass(BasicHorizontalBarChartTestComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.config);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.config);
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            this.chart.update(seriesSet);
          }
        }]);

        return BasicHorizontalBarChartTestComponent;
      }();

      BasicHorizontalBarChartTestComponent.ctorParameters = function () {
        return [];
      };

      BasicHorizontalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-basic-horizontal-bar-chart-test",
        template: _raw_loader_basic_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BasicHorizontalBarChartTestComponent);

      function getData() {
        return [{
          id: "series-1",
          name: "Long Name Test Long Name Test",
          data: [20]
        }, {
          id: "series-2",
          name: "Results",
          data: [80]
        }];
      }
      /***/

    },

    /***/
    "y362":
    /*!***************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: VerticalWithLegendBarChartTestComponent */

    /***/
    function y362(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalWithLegendBarChartTestComponent", function () {
        return VerticalWithLegendBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vertical_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vertical-with-legend-bar-chart-test.component.html */
      "JuaB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var Status;

      (function (Status) {
        Status["Up"] = "up";
        Status["Warning"] = "warning";
        Status["Critical"] = "critical";
        Status["Down"] = "down";
        Status["Unmanaged"] = "unmanaged";
        Status["Unknown"] = "unknown";
      })(Status || (Status = {}));

      var VerticalWithLegendBarChartTestComponent = /*#__PURE__*/function () {
        function VerticalWithLegendBarChartTestComponent() {
          _classCallCheck(this, VerticalWithLegendBarChartTestComponent);

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()));
        }

        _createClass(VerticalWithLegendBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var statusColorProvider = createColorProvider();
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();

            accessors.series.color = function (seriesId, dataSeries) {
              return statusColorProvider.get(dataSeries.name);
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();

            scales.x.formatters.tick = function (value) {
              return value.charAt(0).toUpperCase() + value.slice(1);
            };

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return VerticalWithLegendBarChartTestComponent;
      }();

      VerticalWithLegendBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-vertical-with-legend-bar-chart-test",
        template: _raw_loader_vertical_with_legend_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], VerticalWithLegendBarChartTestComponent);

      function createColorProvider() {
        var _nova_ui_charts__WEBP;

        return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]((_nova_ui_charts__WEBP = {}, _defineProperty(_nova_ui_charts__WEBP, Status.Up, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4]), _defineProperty(_nova_ui_charts__WEBP, Status.Warning, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2]), _defineProperty(_nova_ui_charts__WEBP, Status.Critical, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1]), _defineProperty(_nova_ui_charts__WEBP, Status.Down, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][0]), _defineProperty(_nova_ui_charts__WEBP, Status.Unmanaged, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][5]), _defineProperty(_nova_ui_charts__WEBP, Status.Unknown, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][3]), _nova_ui_charts__WEBP));
      }
      /* Chart data */


      function getData() {
        return [{
          id: Status.Up,
          name: Status.Up,
          data: [42]
        }, {
          id: Status.Warning,
          name: Status.Warning,
          data: [14]
        }, {
          id: Status.Critical,
          name: Status.Critical,
          data: [8]
        }, {
          id: Status.Down,
          name: Status.Down,
          data: [7]
        }, {
          id: Status.Unmanaged,
          name: Status.Unmanaged,
          data: [5]
        }, {
          id: Status.Unknown,
          name: Status.Unknown,
          data: [3]
        }];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=bar-chart-docs-bar-module-es5.js.map