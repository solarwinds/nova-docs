(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["line-chart-docs-line-module"], {
    /***/
    "40GA":
    /*!********************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: LineChartInterruptedCalculatedExampleComponent */

    /***/
    function GA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartInterruptedCalculatedExampleComponent", function () {
        return LineChartInterruptedCalculatedExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_interrupted_calculated_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-interrupted-calculated-example.component.html */
      "NmCU");
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

      var LineChartInterruptedCalculatedExampleComponent = /*#__PURE__*/function () {
        function LineChartInterruptedCalculatedExampleComponent() {
          _classCallCheck(this, LineChartInterruptedCalculatedExampleComponent);

          // XYGrid is used for rendering axes as well as other grid elements
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        }

        _createClass(LineChartInterruptedCalculatedExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // In case of a line chart, the scale definitions are flexible.
            // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
            var interval = Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(1, "hour");
            var xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](interval);
            var scales = {
              x: xScale,
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var incomingSeries = getData(); // Here we assemble the complete chart series.

            var seriesSet = []; // The line renderer will make the chart look like a line chart.

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers); // Renderer for the missing dataSeries

            var rendererMissing = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MissingDataLineRendererConfig"]());
            var accessorsMissing = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers); // Link the colors from 'parent' series

            var origColorAccessor = accessorsMissing.series.color;

            accessorsMissing.series.color = function (seriesId, series) {
              return origColorAccessor === null || origColorAccessor === void 0 ? void 0 : origColorAccessor(seriesId.split("__")[0], series);
            }; // We need to store the original value of the 'defined' accessor


            var origDefinedAccessor = accessorsMissing.data.defined; // We're calling the original 'defined' accessor implementation, but inverting it's logic because, from the missing data
            // series point of view, the undefined data are actually visualized as defined.

            accessorsMissing.data.defined = function (d, i, data, dataSeries) {
              var _a;

              return (_a = !(origDefinedAccessor === null || origDefinedAccessor === void 0 ? void 0 : origDefinedAccessor(d, i, data, dataSeries))) !== null && _a !== void 0 ? _a : true;
            };

            var _iterator = _createForOfIteratorHelper(incomingSeries),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var s = _step.value;
                // The first data series is for rendering the valid data
                var cs = Object.assign(Object.assign({}, s), {
                  accessors: accessors,
                  renderer: renderer,
                  scales: scales
                }); // We're using this convenience function to calculate the missing data according to the scale's interval

                var data = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["calculateMissingData"])(cs, "x", xScale.interval()); // We have to use data that includes the missing data points for the first series as well

                cs.data = data;
                seriesSet.push(cs); // This series will be used to visualize the missing data points

                seriesSet.push({
                  // This naming convention will connect these two series and their interaction will be synchronized
                  id: s.id + "__missing",
                  data: data,
                  accessors: accessorsMissing,
                  renderer: rendererMissing,
                  scales: scales,
                  showInLegend: false
                });
              } // Finally, pass the series set to the chart's update method

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartInterruptedCalculatedExampleComponent;
      }();

      LineChartInterruptedCalculatedExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-interrupted-calculated-example",
        template: _raw_loader_line_chart_interrupted_calculated_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartInterruptedCalculatedExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: new Date(2016, 11, 25, 5),
            y: 30
          }, {
            x: new Date(2016, 11, 25, 6),
            y: 95
          }, {
            x: new Date(2016, 11, 25, 7),
            y: 60
          }, {
            x: new Date(2016, 11, 25, 10),
            y: 75
          }, {
            x: new Date(2016, 11, 25, 12),
            y: 35
          }, {
            x: new Date(2016, 11, 25, 13),
            y: 20
          }]
        }];
      }
      /***/

    },

    /***/
    "9/Kd":
    /*!********************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: LineChartWithAxisLabelsExampleComponent */

    /***/
    function Kd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartWithAxisLabelsExampleComponent", function () {
        return LineChartWithAxisLabelsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_with_axis_labels_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-with-axis-labels.example.component.html */
      "5b7l");
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

      var LineChartWithAxisLabelsExampleComponent = /*#__PURE__*/function () {
        function LineChartWithAxisLabelsExampleComponent() {
          _classCallCheck(this, LineChartWithAxisLabelsExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        }

        _createClass(LineChartWithAxisLabelsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // providing chartAssist colors and markers to LineAccessors will share them with the line chart
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }); // chart assist needs to be used to update data

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartWithAxisLabelsExampleComponent;
      }();

      LineChartWithAxisLabelsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-with-axis-labels-example",
        template: _raw_loader_line_chart_with_axis_labels_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartWithAxisLabelsExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "A+Y2":
    /*!************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: LineChartWith2YAxesExampleComponent */

    /***/
    function AY2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartWith2YAxesExampleComponent", function () {
        return LineChartWith2YAxesExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_with_2y_axes_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-with-2y-axes-example.component.html */
      "Vd4P");
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

      var LineChartWith2YAxesExampleComponent = /*#__PURE__*/function () {
        function LineChartWith2YAxesExampleComponent() {
          _classCallCheck(this, LineChartWith2YAxesExampleComponent);
        }

        _createClass(LineChartWith2YAxesExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
            var yLeftScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();

            yLeftScale.formatters.tick = function (value) {
              return "".concat(value, "%");
            };

            var yRightScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();

            yRightScale.formatters.tick = function (value) {
              return "".concat(value, "G");
            };

            var xyGrid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](); // Set the grid's left and right scale id's using the id's of the corresponding scales

            xyGrid.leftScaleId = yLeftScale.id;
            xyGrid.rightScaleId = yRightScale.id; // Set the grid's 'axis.left.fit' property to 'true' to accommodate the extra label width required by the
            // left scale's tick formatter output (Note: 'axis.right.fit' is true by default.).

            xyGrid.config().axis.left.fit = true;
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](xyGrid);
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: {
                  x: xScale,
                  // In this case, we're using the right-hand scale only for "series-3"
                  y: d.id === "series-3" ? yRightScale : yLeftScale
                }
              });
            }); // chart assist needs to be used to update data

            this.chart.update(seriesSet);
          }
        }]);

        return LineChartWith2YAxesExampleComponent;
      }();

      LineChartWith2YAxesExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-with-2y-axes-example",
        template: _raw_loader_line_chart_with_2y_axes_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartWith2YAxesExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Average CPU Load",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Packet Loss",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }, {
          id: "series-3",
          name: "Average Memory Used",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 10
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 22
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "HNrN":
    /*!**************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-visual-test/line-chart-visual-test.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: LineChartVisualTestComponent */

    /***/
    function HNrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartVisualTestComponent", function () {
        return LineChartVisualTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-visual-test.component.html */
      "y8gy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LineChartVisualTestComponent = function LineChartVisualTestComponent() {
        _classCallCheck(this, LineChartVisualTestComponent);
      };

      LineChartVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_line_chart_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartVisualTestComponent);
      /***/
    },

    /***/
    "c9IB":
    /*!*****************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/chart-docs-line.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ChartDocsLineModule */

    /***/
    function c9IB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsLineModule", function () {
        return ChartDocsLineModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/bits */
      "Rr1A");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../common/demo-common.module */
      "s1Ul");
      /* harmony import */


      var _chart_docs_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chart-docs-line.component */
      "sR5w");
      /* harmony import */


      var _line_chart_basic_line_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./line-chart-basic/line-chart-basic.example.component */
      "sDTt");
      /* harmony import */


      var _line_chart_interrupted_basic_line_chart_interrupted_basic_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./line-chart-interrupted-basic/line-chart-interrupted-basic-example.component */
      "vgzo");
      /* harmony import */


      var _line_chart_interrupted_calculated_line_chart_interrupted_calculated_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component */
      "40GA");
      /* harmony import */


      var _line_chart_interrupted_path_terminus_line_chart_interrupted_path_terminus_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component */
      "fy3S");
      /* harmony import */


      var _line_chart_test_line_chart_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./line-chart-test/line-chart-test.component */
      "rplO");
      /* harmony import */


      var _line_chart_visual_test_line_chart_visual_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./line-chart-visual-test/line-chart-visual-test.component */
      "HNrN");
      /* harmony import */


      var _line_chart_with_2y_axes_line_chart_with_2y_axes_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./line-chart-with-2y-axes/line-chart-with-2y-axes-example.component */
      "A+Y2");
      /* harmony import */


      var _line_chart_with_axis_labels_line_chart_with_axis_labels_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./line-chart-with-axis-labels/line-chart-with-axis-labels.example.component */
      "9/Kd");
      /* harmony import */


      var _line_chart_with_legend_line_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./line-chart-with-legend/line-chart-with-legend.example.component */
      "ldeL");
      /* harmony import */


      var _line_chart_with_rich_tile_legend_line_chart_with_rich_tile_legend_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component */
      "cEyI"); // tslint:disable-next-line: max-line-length


      var exampleRoutes = [{
        path: "",
        component: _chart_docs_line_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsLineComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "axis-labels",
        component: _line_chart_with_axis_labels_line_chart_with_axis_labels_example_component__WEBPACK_IMPORTED_MODULE_15__["LineChartWithAxisLabelsExampleComponent"]
      }, {
        path: "two-y-axes",
        component: _line_chart_with_2y_axes_line_chart_with_2y_axes_example_component__WEBPACK_IMPORTED_MODULE_14__["LineChartWith2YAxesExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "basic",
        component: _line_chart_basic_line_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_8__["LineChartBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "interrupted",
        component: _line_chart_interrupted_basic_line_chart_interrupted_basic_example_component__WEBPACK_IMPORTED_MODULE_9__["LineChartInterruptedBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "interrupted-calculated",
        component: _line_chart_interrupted_calculated_line_chart_interrupted_calculated_example_component__WEBPACK_IMPORTED_MODULE_10__["LineChartInterruptedCalculatedExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "interrupted-path-terminus",
        component: _line_chart_interrupted_path_terminus_line_chart_interrupted_path_terminus_example_component__WEBPACK_IMPORTED_MODULE_11__["LineChartInterruptedPathTerminusExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "test",
        component: _line_chart_test_line_chart_test_component__WEBPACK_IMPORTED_MODULE_12__["LineChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "visual-test",
        component: _line_chart_visual_test_line_chart_visual_test_component__WEBPACK_IMPORTED_MODULE_13__["LineChartVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsLineModule = function ChartDocsLineModule() {
        _classCallCheck(this, ChartDocsLineModule);
      };

      ChartDocsLineModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_line_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsLineComponent"], _line_chart_with_axis_labels_line_chart_with_axis_labels_example_component__WEBPACK_IMPORTED_MODULE_15__["LineChartWithAxisLabelsExampleComponent"], _line_chart_basic_line_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_8__["LineChartBasicExampleComponent"], _line_chart_test_line_chart_test_component__WEBPACK_IMPORTED_MODULE_12__["LineChartTestComponent"], _line_chart_visual_test_line_chart_visual_test_component__WEBPACK_IMPORTED_MODULE_13__["LineChartVisualTestComponent"], _line_chart_with_legend_line_chart_with_legend_example_component__WEBPACK_IMPORTED_MODULE_16__["LineChartWithLegendExampleComponent"], _line_chart_with_rich_tile_legend_line_chart_with_rich_tile_legend_example_component__WEBPACK_IMPORTED_MODULE_17__["LineChartWithRichTileLegendExampleComponent"], _line_chart_with_2y_axes_line_chart_with_2y_axes_example_component__WEBPACK_IMPORTED_MODULE_14__["LineChartWith2YAxesExampleComponent"], _line_chart_interrupted_basic_line_chart_interrupted_basic_example_component__WEBPACK_IMPORTED_MODULE_9__["LineChartInterruptedBasicExampleComponent"], _line_chart_interrupted_path_terminus_line_chart_interrupted_path_terminus_example_component__WEBPACK_IMPORTED_MODULE_11__["LineChartInterruptedPathTerminusExampleComponent"], _line_chart_interrupted_calculated_line_chart_interrupted_calculated_example_component__WEBPACK_IMPORTED_MODULE_10__["LineChartInterruptedCalculatedExampleComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("vIrG");
          }
        }]
      })], ChartDocsLineModule);
      /***/
    },

    /***/
    "cEyI":
    /*!******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: LineChartWithRichTileLegendExampleComponent */

    /***/
    function cEyI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartWithRichTileLegendExampleComponent", function () {
        return LineChartWithRichTileLegendExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_with_rich_tile_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-with-rich-tile-legend.example.component.html */
      "0X5f");
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

      var LineChartWithRichTileLegendExampleComponent = /*#__PURE__*/function () {
        function LineChartWithRichTileLegendExampleComponent() {
          _classCallCheck(this, LineChartWithRichTileLegendExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        }

        _createClass(LineChartWithRichTileLegendExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // providing chartAssist colors and markers to LineAccessors will share them with the line chart
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]({
              // for series interaction and ability to handle click configure renderer with interactionStrategy
              interactionStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineSelectSeriesInteractionStrategy"]()
            });
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            }); // chart assist needs to be used to update data

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartWithRichTileLegendExampleComponent;
      }();

      LineChartWithRichTileLegendExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-with-rich-tile-legend-example",
        template: _raw_loader_line_chart_with_rich_tile_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartWithRichTileLegendExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "fy3S":
    /*!**************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: LineChartInterruptedPathTerminusExampleComponent */

    /***/
    function fy3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartInterruptedPathTerminusExampleComponent", function () {
        return LineChartInterruptedPathTerminusExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_interrupted_path_terminus_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-interrupted-path-terminus-example.component.html */
      "YODk");
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

      var LineChartInterruptedPathTerminusExampleComponent = /*#__PURE__*/function () {
        function LineChartInterruptedPathTerminusExampleComponent() {
          _classCallCheck(this, LineChartInterruptedPathTerminusExampleComponent);

          // XYGrid is used for rendering axes as well as other grid elements
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        }

        _createClass(LineChartInterruptedPathTerminusExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // In case of a line chart, the scale definitions are flexible.
            // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var incomingSeries = getData(); // Here we assemble the complete chart series.

            var seriesSet = []; // The line renderer will make the chart look like a line chart.

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers); // Renderer for the missing dataSeries

            var rendererMissing = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MissingDataLineRendererConfig"]());
            var accessorsMissing = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](); // we need to store the original value of the `defined` accessor

            var origDefinedAccessor = accessorsMissing.data.defined; // we're calling the original accessor implementation, but inverting it's logic

            accessorsMissing.data.defined = function (d, i, data, dataSeries) {
              var _a;

              return (_a = !(origDefinedAccessor === null || origDefinedAccessor === void 0 ? void 0 : origDefinedAccessor(d, i, data, dataSeries))) !== null && _a !== void 0 ? _a : true;
            };

            var _iterator2 = _createForOfIteratorHelper(incomingSeries),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var s = _step2.value;
                var cs = Object.assign(Object.assign({}, s), {
                  accessors: accessors,
                  renderer: renderer,
                  scales: scales
                });
                seriesSet.push(cs); // this series will be used to visualize the missing data points

                seriesSet.push({
                  // this naming convention will connect these two series and their interaction will be synchronized
                  id: s.id + "__missing",
                  data: s.data,
                  accessors: accessorsMissing,
                  renderer: rendererMissing,
                  scales: scales,
                  showInLegend: false
                });
              } // Finally, pass the series set to the chart's update method

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartInterruptedPathTerminusExampleComponent;
      }();

      LineChartInterruptedPathTerminusExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-interrupted-path-terminus-example",
        template: _raw_loader_line_chart_interrupted_path_terminus_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartInterruptedPathTerminusExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format).toDate(),
            y: 30,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format).toDate(),
            y: 95,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-28T15:14:29.909Z", format).toDate(),
            y: 35
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format).toDate(),
            y: 35
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-04T15:14:29.909Z", format).toDate(),
            y: 20
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-04T15:14:29.909Z", format).toDate(),
            y: 20,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-05T15:14:29.909Z", format).toDate(),
            y: 35,
            defined: false
          }]
        }];
      }
      /***/

    },

    /***/
    "ldeL":
    /*!**********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-with-legend/line-chart-with-legend.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: LineChartWithLegendExampleComponent */

    /***/
    function ldeL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartWithLegendExampleComponent", function () {
        return LineChartWithLegendExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_with_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-with-legend.example.component.html */
      "rG87");
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

      var LineChartWithLegendExampleComponent = /*#__PURE__*/function () {
        function LineChartWithLegendExampleComponent() {
          _classCallCheck(this, LineChartWithLegendExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        }

        _createClass(LineChartWithLegendExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // providing chartAssist colors and markers to LineAccessors will share them with the line chart
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            }); // chart assist needs to be used to update data

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartWithLegendExampleComponent;
      }();

      LineChartWithLegendExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-with-legend-example",
        template: _raw_loader_line_chart_with_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartWithLegendExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "rplO":
    /*!************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-test/line-chart-test.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: LineChartTestComponent */

    /***/
    function rplO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartTestComponent", function () {
        return LineChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-test.component.html */
      "F/E+");
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

      var LineChartTestComponent = /*#__PURE__*/function () {
        function LineChartTestComponent() {
          _classCallCheck(this, LineChartTestComponent);

          this.initialInput = [[30, 95, 15, 60, 35], [60, 40, 70, 45, 90]];
        }

        _createClass(LineChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.input = JSON.stringify(this.initialInput);
            this.configureChart();
            this.buildSeriesSet();
            this.update(this.initialInput);
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(value) {
            this.update(JSON.parse(value));
          }
        }, {
          key: "update",
          value: function update(input) {
            this.seriesSet.forEach(function (s, i) {
              var seriesInput = input[i] || [];
              s.data.forEach(function (datum, j) {
                var newValue = seriesInput[j] || 0;
                datum.y = newValue;
              });
            });
            this.chart.update(this.seriesSet);
          }
        }, {
          key: "configureChart",
          value: function configureChart() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.dimension.autoHeight = false;
            gridConfig.dimension.autoWidth = false;
            gridConfig.dimension.height(110);
            gridConfig.dimension.width(400);
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
          }
        }, {
          key: "buildSeriesSet",
          value: function buildSeriesSet() {
            var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];
            var dates = ["2016-12-25", "2016-12-26", "2016-12-27", "2016-12-28", "2016-12-29"];
            var format = "YYYY-MM-DD";
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](colors));
            var yScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
            yScale.fixDomain([0, 100]);
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: yScale
            };
            this.seriesSet = [{
              id: "1",
              name: "Series 1",
              data: dates.map(function (d) {
                return {
                  x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(d, format),
                  y: 0
                };
              })
            }, {
              id: "2",
              name: "Series 2",
              data: dates.map(function (d) {
                return {
                  x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(d, format),
                  y: 0
                };
              })
            }].map(function (s) {
              return Object.assign(Object.assign({}, s), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            });
          }
        }]);

        return LineChartTestComponent;
      }();

      LineChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-test",
        template: _raw_loader_line_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartTestComponent);
      /***/
    },

    /***/
    "sDTt":
    /*!**********************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-basic/line-chart-basic.example.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: LineChartBasicExampleComponent */

    /***/
    function sDTt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartBasicExampleComponent", function () {
        return LineChartBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-basic.example.component.html */
      "vEm8");
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

      var LineChartBasicExampleComponent = /*#__PURE__*/function () {
        function LineChartBasicExampleComponent() {
          _classCallCheck(this, LineChartBasicExampleComponent);

          // XYGrid is used for rendering axes and other grid elements
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        }

        _createClass(LineChartBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](); // The line renderer will make the chart look like a line chart.

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // In case of a line chart, the scale definitions are flexible.
            // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.

            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            }; // Here we assemble the complete chart series.

            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }); // Finally, pass the series set to the chart's update method

            this.chart.update(seriesSet);
          }
        }]);

        return LineChartBasicExampleComponent;
      }();

      LineChartBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-basic-example",
        template: _raw_loader_line_chart_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartBasicExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "sR5w":
    /*!********************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/chart-docs-line.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ChartDocsLineComponent */

    /***/
    function sR5w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsLineComponent", function () {
        return ChartDocsLineComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_line_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-line.component.html */
      "z/RP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsLineComponent = /*#__PURE__*/function () {
        function ChartDocsLineComponent() {
          _classCallCheck(this, ChartDocsLineComponent);
        }

        _createClass(ChartDocsLineComponent, [{
          key: "getEnhancedLineCapConfigPropKey",
          value: function getEnhancedLineCapConfigPropKey(key) {
            return key;
          }
        }, {
          key: "getLineRendererConfigPropKey",
          value: function getLineRendererConfigPropKey(key) {
            return key;
          }
        }, {
          key: "getLineRendererPropKey",
          value: function getLineRendererPropKey(key) {
            return key;
          }
        }]);

        return ChartDocsLineComponent;
      }();

      ChartDocsLineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-line",
        template: _raw_loader_chart_docs_line_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsLineComponent);
      /***/
    },

    /***/
    "vIrG":
    /*!*******************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*******************************************************************************************************************/

    /*! no static exports found */

    /***/
    function vIrG(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-line.component.html": "z/RP",
        "./chart-docs-line.component.ts": "gHhF",
        "./chart-docs-line.module.ts": "FHSh",
        "./line-chart-basic/line-chart-basic.example.component.html": "vEm8",
        "./line-chart-basic/line-chart-basic.example.component.ts": "8a5L",
        "./line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.html": "XZqO",
        "./line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.ts": "X3ST",
        "./line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.html": "NmCU",
        "./line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.ts": "3dis",
        "./line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.html": "YODk",
        "./line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.ts": "EIZE",
        "./line-chart-test/line-chart-test.component.html": "F/E+",
        "./line-chart-test/line-chart-test.component.ts": "PW6j",
        "./line-chart-visual-test/line-chart-visual-test.component.html": "y8gy",
        "./line-chart-visual-test/line-chart-visual-test.component.ts": "W6rv",
        "./line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.html": "Vd4P",
        "./line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.ts": "TxwX",
        "./line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.html": "5b7l",
        "./line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.ts": "IyFi",
        "./line-chart-with-legend/line-chart-with-legend.example.component.html": "rG87",
        "./line-chart-with-legend/line-chart-with-legend.example.component.ts": "2Waz",
        "./line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.html": "0X5f",
        "./line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.ts": "xW1a"
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
      webpackContext.id = "vIrG";
      /***/
    },

    /***/
    "vgzo":
    /*!**********************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/line/line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.ts ***!
      \**********************************************************************************************************************************/

    /*! exports provided: LineChartInterruptedBasicExampleComponent */

    /***/
    function vgzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartInterruptedBasicExampleComponent", function () {
        return LineChartInterruptedBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_interrupted_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-interrupted-basic-example.component.html */
      "XZqO");
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

      var LineChartInterruptedBasicExampleComponent = /*#__PURE__*/function () {
        function LineChartInterruptedBasicExampleComponent() {
          _classCallCheck(this, LineChartInterruptedBasicExampleComponent);

          // XYGrid is used for rendering axes as well as other grid elements
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        }

        _createClass(LineChartInterruptedBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // In case of a line chart, the scale definitions are flexible.
            // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var incomingSeries = getData(); // Here we assemble the complete chart series.

            var seriesSet = []; // The line renderer will make the chart look like a line chart.

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers); // Renderer for the missing dataSeries

            var rendererMissing = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MissingDataLineRendererConfig"]());
            var accessorsMissing = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](); // We need to store the original value of the 'defined' accessor

            var origDefinedAccessor = accessorsMissing.data.defined; // We're calling the original 'defined' accessor implementation, but inverting it's logic because, from the missing data
            // series point of view, the undefined data are actually visualized as defined.

            accessorsMissing.data.defined = function (d, i, data, dataSeries) {
              var _a;

              return (_a = !(origDefinedAccessor === null || origDefinedAccessor === void 0 ? void 0 : origDefinedAccessor(d, i, data, dataSeries))) !== null && _a !== void 0 ? _a : true;
            };

            var _iterator3 = _createForOfIteratorHelper(incomingSeries),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var s = _step3.value;
                // The first data series is for rendering the valid data
                var cs = Object.assign(Object.assign({}, s), {
                  accessors: accessors,
                  renderer: renderer,
                  scales: scales
                });
                seriesSet.push(cs); // This series will be used to visualize the missing data points

                seriesSet.push({
                  // This naming convention will connect these two series and their interaction will be synchronized
                  id: s.id + "__missing",
                  data: s.data,
                  accessors: accessorsMissing,
                  renderer: rendererMissing,
                  scales: scales,
                  showInLegend: false
                });
              } // Finally, pass the series set to the chart's update method

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartInterruptedBasicExampleComponent;
      }();

      LineChartInterruptedBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-interrupted-basic-example",
        template: _raw_loader_line_chart_interrupted_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartInterruptedBasicExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format).toDate(),
            y: 95
          }, // missing data segment
          {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format).toDate(),
            y: 95,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format).toDate(),
            y: 30,
            defined: false
          }, // single defined data point surrounded by missing data segments
          {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format).toDate(),
            y: 30
          }, // missing data segment
          {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format).toDate(),
            y: 30,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format).toDate(),
            y: 60,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format).toDate(),
            y: 35
          }, // missing data segment
          {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format).toDate(),
            y: 35,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-04T15:14:29.909Z", format).toDate(),
            y: 20,
            defined: false
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-04T15:14:29.909Z", format).toDate(),
            y: 20
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-05T15:14:29.909Z", format).toDate(),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format).toDate(),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format).toDate(),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format).toDate(),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format).toDate(),
            y: 90
          }]
        }];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=line-chart-docs-line-module-es5.js.map