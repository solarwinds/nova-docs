(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["time-bands-time-bands-example-module"], {
    /***/
    "12rl":
    /*!**************************************************************************************!*\
      !*** ./examples/components/demo/development/time-bands/time-bands-example.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: TimeBandsExampleModule */

    /***/
    function rl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeBandsExampleModule", function () {
        return TimeBandsExampleModule;
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


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../common/demo-common.module */
      "s1Ul");
      /* harmony import */


      var _line_time_series_line_time_series_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./line-time-series/line-time-series-test.component */
      "eFyL");

      var collectionRoutes = [{
        path: "line",
        component: _line_time_series_line_time_series_test_component__WEBPACK_IMPORTED_MODULE_5__["LineTimeSeriesTestComponent"]
      }];

      var TimeBandsExampleModule = function TimeBandsExampleModule() {
        _classCallCheck(this, TimeBandsExampleModule);
      };

      TimeBandsExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_line_time_series_line_time_series_test_component__WEBPACK_IMPORTED_MODULE_5__["LineTimeSeriesTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__["DemoCommonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NuiChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(collectionRoutes)]
      })], TimeBandsExampleModule);
      /***/
    },

    /***/
    "4Nlq":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/time-bands/line-time-series/line-time-series-test.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nlq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "eFyL":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/development/time-bands/line-time-series/line-time-series-test.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: LineTimeSeriesTestComponent */

    /***/
    function eFyL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineTimeSeriesTestComponent", function () {
        return LineTimeSeriesTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_time_series_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-time-series-test.component.html */
      "4Nlq");
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

      var format = "YYYY-MM-DDTHH:mm:ssZ";

      var LineTimeSeriesTestComponent = /*#__PURE__*/function () {
        function LineTimeSeriesTestComponent() {
          _classCallCheck(this, LineTimeSeriesTestComponent);

          // XYGrid is used for rendering the axes
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        }

        _createClass(LineTimeSeriesTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ZoomPlugin"]()); // In case of a line chart, the scale definitions are flexible.
            // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.

            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(5, "minutes")).fixDomain([moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T14:30:00Z", format).toDate(), moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T18:00:00Z", format).toDate()]),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var lines = this.getLines(scales);
            var bars = this.getBars(scales);
            this.chart.update([].concat(_toConsumableArray(lines), _toConsumableArray(bars)));
          }
        }, {
          key: "getLines",
          value: function getLines(scales) {
            var _this = this;

            // The line renderer will make the chart look like a line chart.
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();

            accessors.series.color = function (seriesId, series) {
              return _this.palette.standardColors.get(series.name);
            };

            return [{
              id: "series-1",
              name: "Series 1",
              data: [{
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(),
                y: 30
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:21:00Z", format).toDate(),
                y: 95
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:44:00Z", format).toDate(),
                y: 15
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:00:00Z", format).toDate(),
                y: 60
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:30:00Z", format).toDate(),
                y: 35
              }]
            }, {
              id: "series-2",
              name: "Series 2",
              data: [{
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(),
                y: 60
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:10:00Z", format).toDate(),
                y: 40
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:00Z", format).toDate(),
                y: 70
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:15:00Z", format).toDate(),
                y: 45
              }, {
                x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:20:00Z", format).toDate(),
                y: 90
              }]
            }].map(function (s) {
              return Object.assign(Object.assign({}, s), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            });
          }
        }, {
          key: "getBars",
          value: function getBars(scales) {
            // The line renderer will make the chart look like a line chart.
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(undefined, this.palette.backgroundColors);

            accessors.data.start = function (d) {
              return d.value / 2;
            };

            accessors.data.end = function (d) {
              return d.value * 1.5;
            };

            return [{
              id: "bars-1",
              name: "Series 1",
              data: [{
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(),
                value: 30
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:20:00Z", format).toDate(),
                value: 95
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:40:00Z", format).toDate(),
                value: 15
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:00:00Z", format).toDate(),
                value: 60
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:30:00Z", format).toDate(),
                value: 35
              }]
            }, {
              id: "bars-2",
              name: "Series 2",
              data: [{
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:00:00Z", format).toDate(),
                value: 60
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:10:00Z", format).toDate(),
                value: 40
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:45:00Z", format).toDate(),
                value: 70
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:15:00Z", format).toDate(),
                value: 45
              }, {
                category: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T17:20:00Z", format).toDate(),
                value: 90
              }]
            }].map(function (s) {
              return Object.assign(Object.assign({}, s), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            });
          }
        }]);

        return LineTimeSeriesTestComponent;
      }();

      LineTimeSeriesTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-time-series-test",
        template: _raw_loader_line_time_series_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineTimeSeriesTestComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=time-bands-time-bands-example-module-es5.js.map