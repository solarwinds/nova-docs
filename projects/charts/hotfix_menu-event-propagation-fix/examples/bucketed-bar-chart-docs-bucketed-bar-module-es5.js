(function () {
  var _templateObject;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bucketed-bar-chart-docs-bucketed-bar-module"], {
    /***/
    "0VGh":
    /*!********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-stacked/bar-chart-stacked.example.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: BarChartStackedExampleComponent */

    /***/
    function VGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartStackedExampleComponent", function () {
        return BarChartStackedExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_stacked_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-stacked.example.component.html */
      "T5W4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartStackedExampleComponent = /*#__PURE__*/function () {
        function BarChartStackedExampleComponent() {
          _classCallCheck(this, BarChartStackedExampleComponent);

          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"]();
        }

        _createClass(BarChartStackedExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            chart.addPlugin(this.tooltipsPlugin); // "stack" is a function that calls data preprocessor for recalculating stacks

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
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

        return BarChartStackedExampleComponent;
      }();

      BarChartStackedExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-stacked-example",
        template: _raw_loader_bar_chart_stacked_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartStackedExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "data": [{
            "category": "Q1 2018",
            "value": 167
          }, {
            "category": "Q2 2018",
            "value": 122
          }, {
            "category": "Q3 2018",
            "value": 141
          }, {
            "category": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "data": [{
            "category": "Q1 2018",
            "value": 167
          }, // Please note the fact that not all categories are required to be present in every data point.
          // Sparse data is ok too.
          // { "category": "Q2 2018", "value": 198 },
          {
            "category": "Q3 2018",
            "value": 208
          }, {
            "category": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "data": [{
            "category": "Q1 2018",
            "value": 167
          }, {
            "category": "Q2 2018",
            "value": 15
          }, {
            "category": "Q3 2018",
            "value": 208
          }, {
            "category": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "data": [{
            "category": "Q1 2018",
            "value": 11
          }, {
            "category": "Q2 2018",
            "value": 99
          }, {
            "category": "Q3 2018",
            "value": 17
          }, {
            "category": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "data": [{
            "category": "Q1 2018",
            "value": 121
          }, {
            "category": "Q2 2018",
            "value": 222
          }, {
            "category": "Q3 2018",
            "value": 319
          }, {
            "category": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "1zNQ":
    /*!**************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: ProportionalVerticalBarChartTestComponent */

    /***/
    function zNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProportionalVerticalBarChartTestComponent", function () {
        return ProportionalVerticalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_proportional_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./proportional-vertical-bar-chart-test.component.html */
      "Vr5r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var ProportionalVerticalBarChartTestComponent = /*#__PURE__*/function () {
        function ProportionalVerticalBarChartTestComponent() {
          _classCallCheck(this, ProportionalVerticalBarChartTestComponent);

          this.mbpsUnit = "Mbps";
        }

        _createClass(ProportionalVerticalBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();

            accessors.data.category = function (data) {
              return data.name;
            }; // Note changed data accessor matching value.percentageValue instead of just value


            accessors.data.value = function (data) {
              return data.percentageValue;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
            });
            var bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
            var linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
            var scales = {
              x: bandScale,
              y: linearScale
            };
            var dataSeriesSet = getData(); // Preprocess data to have both percentage and real values
            // 1. Gather sum of all items per category

            var sums = dataSeriesSet.reduce(function (acc, next) {
              return acc.map(function (v, i) {
                return v + next.data[i].value;
              });
            }, [0, 0, 0, 0]); // 2. Normalize data using the sum

            dataSeriesSet.forEach(function (dataSeries) {
              dataSeries.data.forEach(function (d, i) {
                d.percentageValue = d.value / sums[i] * 100;
              });
            });
            var chartSeriesSet = dataSeriesSet.map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            this.chartAssist.update(chartSeriesSet);
          }
        }, {
          key: "getTitleFromDataPoint",
          value: function getTitleFromDataPoint(dataPoint) {
            // This generates content for a tooltip.
            // Both seriesId and the data of the corresponding bar are available in the tooltip.
            return "".concat(dataPoint.seriesId, ": ").concat(dataPoint.data.value).concat(this.mbpsUnit, " (").concat(Math.round(dataPoint.data.percentageValue), "%)");
          }
        }]);

        return ProportionalVerticalBarChartTestComponent;
      }();

      ProportionalVerticalBarChartTestComponent.ctorParameters = function () {
        return [];
      };

      ProportionalVerticalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-proportional-vertical-bar-chart-test",
        template: _raw_loader_proportional_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProportionalVerticalBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 122
          }, {
            "name": "Q3 2018",
            "value": 141
          }, {
            "name": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 198
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 15
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "value": 11
          }, {
            "name": "Q2 2018",
            "value": 99
          }, {
            "name": "Q3 2018",
            "value": 17
          }, {
            "name": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "value": 121
          }, {
            "name": "Q2 2018",
            "value": 222
          }, {
            "name": "Q3 2018",
            "value": 319
          }, {
            "name": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "4yYw":
    /*!********************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.ts ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: BasicStackedHorizontalBarChartTestComponent */

    /***/
    function yYw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicStackedHorizontalBarChartTestComponent", function () {
        return BasicStackedHorizontalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_stacked_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-stacked-horizontal-bar-chart-test.component.html */
      "apYU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BasicStackedHorizontalBarChartTestComponent = /*#__PURE__*/function () {
        function BasicStackedHorizontalBarChartTestComponent() {
          _classCallCheck(this, BasicStackedHorizontalBarChartTestComponent);
        }

        _createClass(BasicStackedHorizontalBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var config = {
              horizontal: true
            };
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(config));
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(config); // This matches field in data by which chart preprocessor will gather categories to build stacks

            accessors.data.category = function (data) {
              return data.name;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(config);
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

        return BasicStackedHorizontalBarChartTestComponent;
      }();

      BasicStackedHorizontalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-basic-stacked-horizontal-bar-chart-test",
        template: _raw_loader_basic_stacked_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasicStackedHorizontalBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 122
          }, {
            "name": "Q3 2018",
            "value": 141
          }, {
            "name": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, // Please note the fact that not all categories are required to be present in every data point.
          // Sparse data is ok too.
          // {
          //     "name": "Q2 2018",
          //     "value": 198,
          // },
          {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 15
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "value": 11
          }, {
            "name": "Q2 2018",
            "value": 99
          }, {
            "name": "Q3 2018",
            "value": 17
          }, {
            "name": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "value": 121
          }, {
            "name": "Q2 2018",
            "value": 222
          }, {
            "name": "Q3 2018",
            "value": 319
          }, {
            "name": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "7sAI":
    /*!********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-grouped/bar-chart-grouped.example.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: BarChartGroupedExampleComponent */

    /***/
    function sAI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartGroupedExampleComponent", function () {
        return BarChartGroupedExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_grouped_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-grouped.example.component.html */
      "oeUc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartGroupedExampleComponent = /*#__PURE__*/function () {
        function BarChartGroupedExampleComponent() {
          _classCallCheck(this, BarChartGroupedExampleComponent);

          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"]();
          this.config = {
            grouped: true,
            horizontal: false
          };
        }

        _createClass(BarChartGroupedExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.config));
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            chart.addPlugin(this.tooltipsPlugin); // 1. Call the convenience function to create bar chart scales. Like this:

            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.config);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
            }); // 2. Make your category accessor to return the value like [ category, subCategory ]

            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.config);

            accessors.data.category = function (data, i, series, dataSeries) {
              return [data.name, dataSeries.name];
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

        return BarChartGroupedExampleComponent;
      }();

      BarChartGroupedExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-grouped-example",
        template: _raw_loader_bar_chart_grouped_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartGroupedExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 122
          }, {
            "name": "Q3 2018",
            "value": 141
          }, {
            "name": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 198
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, // sparse data is handled as well
          // { "name": "Q2 2018", "value": 15 },
          {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "value": 11
          }, {
            "name": "Q2 2018",
            "value": 99
          }, {
            "name": "Q3 2018",
            "value": 17
          }, {
            "name": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "value": 121
          }, {
            "name": "Q2 2018",
            "value": 222
          }, {
            "name": "Q3 2018",
            "value": 319
          }, {
            "name": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "CQZE":
    /*!****************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: GroupedVerticalBarChartTestComponent */

    /***/
    function CQZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupedVerticalBarChartTestComponent", function () {
        return GroupedVerticalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_grouped_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./grouped-vertical-bar-chart-test.component.html */
      "c/4/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var GroupedVerticalBarChartTestComponent = /*#__PURE__*/function () {
        function GroupedVerticalBarChartTestComponent() {
          _classCallCheck(this, GroupedVerticalBarChartTestComponent);

          this.accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
        }

        _createClass(GroupedVerticalBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            var bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
            bandScale.padding(0.25);
            bandScale.innerScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
            var linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
            });

            this.accessors.data.category = function (data) {
              return [data.name, data.subCategory];
            };

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart);
            var scales = {
              x: bandScale,
              y: linearScale
            };
            var mappedSeries = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: _this.accessors,
                renderer: renderer,
                scales: scales
              });
            }); // Sample events that can be used in order to handle click or highlighting of certain status

            chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_DATA_POINTS_EVENT"]).subscribe(console.log);
            chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SELECT_DATA_POINT_EVENT"]).subscribe(console.log);
            this.chartAssist.update(mappedSeries);
          }
        }]);

        return GroupedVerticalBarChartTestComponent;
      }();

      GroupedVerticalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-grouped-vertical-bar-chart-test",
        template: _raw_loader_grouped_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], GroupedVerticalBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Brno",
            "value": 167
          }, {
            "name": "Q2 2018",
            "subCategory": "Brno",
            "value": 122
          }, {
            "name": "Q3 2018",
            "subCategory": "Brno",
            "value": 141
          }, {
            "name": "Q4 2018",
            "subCategory": "Brno",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Austin",
            "value": 167
          }, {
            "name": "Q2 2018",
            "subCategory": "Austin",
            "value": 198
          }, {
            "name": "Q3 2018",
            "subCategory": "Austin",
            "value": 208
          }, {
            "name": "Q4 2018",
            "subCategory": "Austin",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Edinburgh",
            "value": 167
          }, // sparse data is handled as well
          // {
          //     "name": "Q2 2018",
          //     "subCategory": "Edinburgh",
          //     "value": 15,
          // },
          {
            "name": "Q3 2018",
            "subCategory": "Edinburgh",
            "value": 208
          }, {
            "name": "Q4 2018",
            "subCategory": "Edinburgh",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Newcastle",
            "value": 11
          }, {
            "name": "Q2 2018",
            "subCategory": "Newcastle",
            "value": 99
          }, {
            "name": "Q3 2018",
            "subCategory": "Newcastle",
            "value": 17
          }, {
            "name": "Q4 2018",
            "subCategory": "Newcastle",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Kyiv",
            "value": 121
          }, {
            "name": "Q2 2018",
            "subCategory": "Kyiv",
            "value": 222
          }, {
            "name": "Q3 2018",
            "subCategory": "Kyiv",
            "value": 319
          }, {
            "name": "Q4 2018",
            "subCategory": "Kyiv",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "NDW0":
    /*!**************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-percentage/bar-chart-percentage.example.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: BarChartPercentageExampleComponent */

    /***/
    function NDW0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartPercentageExampleComponent", function () {
        return BarChartPercentageExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_percentage_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-percentage.example.component.html */
      "lful");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartPercentageExampleComponent = /*#__PURE__*/function () {
        function BarChartPercentageExampleComponent() {
          _classCallCheck(this, BarChartPercentageExampleComponent);

          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"]();
          this.mbpsUnit = $localize(_templateObject || (_templateObject = _taggedTemplateLiteral(["Mbps"])));
        }

        _createClass(BarChartPercentageExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            this.chartAssist.chart.addPlugin(this.tooltipsPlugin);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(); // Note changed data accessor matching value.percentageValue instead of just value
            // accessors.data.value = (data: any) => data.percentageValue;

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])();
            var dataSeriesSet = getData(); // TODO: make the calculation to be a part of data preprocessing
            // Preprocess data to have both percentage and real values
            // 1. Gather sum of all items per category
            // const sums = dataSeriesSet.reduce((acc: number[], next: any) => acc.map((v: any, i: number) => v + next.data[i].value), [0, 0, 0, 0]);
            // 2. Normalize data using the sum
            // dataSeriesSet.forEach((dataSeries: any) => {
            //     dataSeries.data.forEach((d: any, i: number) => {
            //         d.percentageValue = d.value / sums[i] * 100;
            //     });
            // });

            var chartSeriesSet = dataSeriesSet.map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            this.chartAssist.update(chartSeriesSet);
          }
        }, {
          key: "getTitleFromDataPoint",
          value: function getTitleFromDataPoint(dataPoint) {
            // This generates content for a tooltip.
            // Both seriesId and the data of the corresponding bar are available in the tooltip.
            return "".concat(dataPoint.seriesId, ": ").concat(dataPoint.data.value).concat(this.mbpsUnit, " (").concat(Math.round(dataPoint.data.percentageValue), "%)");
          }
        }]);

        return BarChartPercentageExampleComponent;
      }();

      BarChartPercentageExampleComponent.ctorParameters = function () {
        return [];
      };

      BarChartPercentageExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-percentage-example",
        template: _raw_loader_bar_chart_percentage_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BarChartPercentageExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "data": [{
            "category": "Q1 2018",
            "value": 167
          }, {
            "category": "Q2 2018",
            "value": 122
          }, {
            "category": "Q3 2018",
            "value": 141
          }, {
            "category": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "data": [{
            "category": "Q1 2018",
            "value": 167
          }, {
            "category": "Q2 2018",
            "value": 198
          }, {
            "category": "Q3 2018",
            "value": 208
          }, {
            "category": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "data": [{
            "category": "Q1 2018",
            "value": 167
          }, {
            "category": "Q2 2018",
            "value": 15
          }, {
            "category": "Q3 2018",
            "value": 208
          }, {
            "category": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "data": [{
            "category": "Q1 2018",
            "value": 11
          }, {
            "category": "Q2 2018",
            "value": 99
          }, {
            "category": "Q3 2018",
            "value": 17
          }, {
            "category": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "data": [{
            "category": "Q1 2018",
            "value": 121
          }, {
            "category": "Q2 2018",
            "value": 222
          }, {
            "category": "Q3 2018",
            "value": 319
          }, {
            "category": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "SiKB":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/bar-chart-bucketed-test.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: BarChartBucketedTestComponent */

    /***/
    function SiKB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartBucketedTestComponent", function () {
        return BarChartBucketedTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_bucketed_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-bucketed-test.component.html */
      "8f59");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BarChartBucketedTestComponent = function BarChartBucketedTestComponent() {
        _classCallCheck(this, BarChartBucketedTestComponent);
      };

      BarChartBucketedTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-bucketed-chart-test",
        template: _raw_loader_bar_chart_bucketed_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartBucketedTestComponent);
      /***/
    },

    /***/
    "V/EH":
    /*!******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: BarChartGroupedHorizontalExampleComponent */

    /***/
    function VEH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartGroupedHorizontalExampleComponent", function () {
        return BarChartGroupedHorizontalExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_grouped_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-grouped-horizontal.example.component.html */
      "kMRS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartGroupedHorizontalExampleComponent = /*#__PURE__*/function () {
        function BarChartGroupedHorizontalExampleComponent() {
          _classCallCheck(this, BarChartGroupedHorizontalExampleComponent);

          // The configuration to be used with plugins and convenience functions
          this.barConfig = {
            horizontal: true,
            grouped: true
          };
          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"](this.barConfig);
        }

        _createClass(BarChartGroupedHorizontalExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig));
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart);
            chart.addPlugin(this.tooltipsPlugin);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig); // Both category and sub-category need to be defined to properly draw groups.

            accessors.data.category = function (data, i, series, dataSeries) {
              return [data.name, dataSeries.name];
            }; // BarHighlightStrategy should be applied to a different axis in case of horizontal layout


            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            }); // Nested BandScales with a LinearScale for values can be instantiated with the barAccessors function

            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.barConfig);
            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BarChartGroupedHorizontalExampleComponent;
      }();

      BarChartGroupedHorizontalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-grouped-horizontal-example",
        template: _raw_loader_bar_chart_grouped_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartGroupedHorizontalExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 122
          }, {
            "name": "Q3 2018",
            "value": 141
          }, {
            "name": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 198
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, // sparse data is handled as well
          // { "name": "Q2 2018", "value": 15 },
          {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "value": 11
          }, {
            "name": "Q2 2018",
            "value": 99
          }, {
            "name": "Q3 2018",
            "value": 17
          }, {
            "name": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "value": 121
          }, {
            "name": "Q2 2018",
            "value": 222
          }, {
            "name": "Q3 2018",
            "value": 319
          }, {
            "name": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "ajwM":
    /*!******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: BarChartStackedHorizontalExampleComponent */

    /***/
    function ajwM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartStackedHorizontalExampleComponent", function () {
        return BarChartStackedHorizontalExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_stacked_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-stacked-horizontal.example.component.html */
      "0Gka");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartStackedHorizontalExampleComponent = /*#__PURE__*/function () {
        function BarChartStackedHorizontalExampleComponent() {
          _classCallCheck(this, BarChartStackedHorizontalExampleComponent);

          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"]();
        }

        _createClass(BarChartStackedHorizontalExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHorizontalGridConfig"]();
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            chart.addPlugin(this.tooltipsPlugin);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]);
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["HorizontalBarAccessors"](); // This matches field in data by which chart preprocessor will gather categories to build stacks

            accessors.data.category = function (data) {
              return data.name;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            });
            var scales = {
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"](),
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
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

        return BarChartStackedHorizontalExampleComponent;
      }();

      BarChartStackedHorizontalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-stacked-horizontal-example",
        template: _raw_loader_bar_chart_stacked_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartStackedHorizontalExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 122
          }, {
            "name": "Q3 2018",
            "value": 141
          }, {
            "name": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, // Please note the fact that not all categories are required to be present in every data point.
          // Sparse data is ok too.
          // {
          //     "name": "Q2 2018",
          //     "value": 198,
          // },
          {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018",
            "value": 15
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "value": 11
          }, {
            "name": "Q2 2018",
            "value": 99
          }, {
            "name": "Q3 2018",
            "value": 17
          }, {
            "name": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "value": 121
          }, {
            "name": "Q2 2018",
            "value": 222
          }, {
            "name": "Q3 2018",
            "value": 319
          }, {
            "name": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "d0d1":
    /*!********************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: GroupedHorizontalBarChartTestComponent */

    /***/
    function d0d1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupedHorizontalBarChartTestComponent", function () {
        return GroupedHorizontalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_grouped_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./grouped-horizontal-bar-chart-test.component.html */
      "61M4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var GroupedHorizontalBarChartTestComponent = /*#__PURE__*/function () {
        function GroupedHorizontalBarChartTestComponent() {
          _classCallCheck(this, GroupedHorizontalBarChartTestComponent);

          this.barConfig = {
            horizontal: true
          };
        }

        _createClass(GroupedHorizontalBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.barConfig));
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.barConfig, this.chartAssist.palette.standardColors, this.chartAssist.markers); // Both category and sub-category need to be defined to properly draw groups.

            accessors.data.category = function (data) {
              return [data.name, data.subCategory];
            };

            var bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().reverse();
            bandScale.padding(0.25); // TODO: fix!!!

            bandScale.innerScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
              y: bandScale
            };
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("y")
            });
            var mappedSeries = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }); // Sample events that can be used in order to handle click or highlighting of certain status

            chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_DATA_POINTS_EVENT"]).subscribe(console.log);
            chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SELECT_DATA_POINT_EVENT"]).subscribe(console.log);
            this.chartAssist.update(mappedSeries);
          }
        }]);

        return GroupedHorizontalBarChartTestComponent;
      }();

      GroupedHorizontalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-grouped-horizontal-bar-chart-test",
        template: _raw_loader_grouped_horizontal_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], GroupedHorizontalBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Brno",
            "value": 167
          }, {
            "name": "Q2 2018",
            "subCategory": "Brno",
            "value": 122
          }, {
            "name": "Q3 2018",
            "subCategory": "Brno",
            "value": 141
          }, {
            "name": "Q4 2018",
            "subCategory": "Brno",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Austin",
            "value": 167
          }, {
            "name": "Q2 2018",
            "subCategory": "Austin",
            "value": 198
          }, {
            "name": "Q3 2018",
            "subCategory": "Austin",
            "value": 208
          }, {
            "name": "Q4 2018",
            "subCategory": "Austin",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Edinburgh",
            "value": 167
          }, // sparse data is handled as well
          // {
          //     "name": "Q2 2018",
          //     "subCategory": "Edinburgh",
          //     "value": 15,
          // },
          {
            "name": "Q3 2018",
            "subCategory": "Edinburgh",
            "value": 208
          }, {
            "name": "Q4 2018",
            "subCategory": "Edinburgh",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Newcastle",
            "value": 11
          }, {
            "name": "Q2 2018",
            "subCategory": "Newcastle",
            "value": 99
          }, {
            "name": "Q3 2018",
            "subCategory": "Newcastle",
            "value": 17
          }, {
            "name": "Q4 2018",
            "subCategory": "Newcastle",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "subCategory": "Kyiv",
            "value": 121
          }, {
            "name": "Q2 2018",
            "subCategory": "Kyiv",
            "value": 222
          }, {
            "name": "Q3 2018",
            "subCategory": "Kyiv",
            "value": 319
          }, {
            "name": "Q4 2018",
            "subCategory": "Kyiv",
            "value": 328
          }]
        }];
      }
      /***/

    },

    /***/
    "dV9Q":
    /*!***************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function dV9Q(module, exports, __webpack_require__) {
      var map = {
        "./bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.html": "kMRS",
        "./bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.ts": "DSTu",
        "./bar-chart-grouped/bar-chart-grouped.example.component.html": "oeUc",
        "./bar-chart-grouped/bar-chart-grouped.example.component.ts": "wLcr",
        "./bar-chart-percentage/bar-chart-percentage.example.component.html": "lful",
        "./bar-chart-percentage/bar-chart-percentage.example.component.ts": "/7IX",
        "./bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.html": "0Gka",
        "./bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.ts": "8bWw",
        "./bar-chart-stacked/bar-chart-stacked.example.component.html": "T5W4",
        "./bar-chart-stacked/bar-chart-stacked.example.component.ts": "u3CC",
        "./bar-chart-test/bar-chart-bucketed-test.component.html": "8f59",
        "./bar-chart-test/bar-chart-bucketed-test.component.ts": "cGUO",
        "./bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.html": "apYU",
        "./bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.ts": "Bhj1",
        "./bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.html": "9us9",
        "./bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.ts": "i0Gj",
        "./bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.html": "61M4",
        "./bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.ts": "36JG",
        "./bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.html": "c/4/",
        "./bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.ts": "qQYL",
        "./bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.html": "Vr5r",
        "./bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.ts": "psX6",
        "./chart-docs-bucketed-bar.component.html": "Oh5A",
        "./chart-docs-bucketed-bar.component.ts": "PuQb",
        "./chart-docs-bucketed-bar.module.ts": "YNr8"
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
      webpackContext.id = "dV9Q";
      /***/
    },

    /***/
    "h39I":
    /*!************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/chart-docs-bucketed-bar.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ChartDocsBucketedBarComponent */

    /***/
    function h39I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsBucketedBarComponent", function () {
        return ChartDocsBucketedBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_bucketed_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-bucketed-bar.component.html */
      "Oh5A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsBucketedBarComponent = function ChartDocsBucketedBarComponent() {
        _classCallCheck(this, ChartDocsBucketedBarComponent);
      };

      ChartDocsBucketedBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-bucketed-bar",
        template: _raw_loader_chart_docs_bucketed_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsBucketedBarComponent);
      /***/
    },

    /***/
    "kjNC":
    /*!*********************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/chart-docs-bucketed-bar.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ChartDocsBucketedBarModule */

    /***/
    function kjNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsBucketedBarModule", function () {
        return ChartDocsBucketedBarModule;
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


      var _bar_chart_grouped_horizontal_bar_chart_grouped_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component */
      "V/EH");
      /* harmony import */


      var _bar_chart_grouped_bar_chart_grouped_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bar-chart-grouped/bar-chart-grouped.example.component */
      "7sAI");
      /* harmony import */


      var _bar_chart_percentage_bar_chart_percentage_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./bar-chart-percentage/bar-chart-percentage.example.component */
      "NDW0");
      /* harmony import */


      var _bar_chart_stacked_horizontal_bar_chart_stacked_horizontal_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component */
      "ajwM");
      /* harmony import */


      var _bar_chart_stacked_bar_chart_stacked_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./bar-chart-stacked/bar-chart-stacked.example.component */
      "0VGh");
      /* harmony import */


      var _bar_chart_test_bar_chart_bucketed_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./bar-chart-test/bar-chart-bucketed-test.component */
      "SiKB");
      /* harmony import */


      var _bar_chart_test_basic_stacked_horizontal_basic_stacked_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component */
      "4yYw");
      /* harmony import */


      var _bar_chart_test_basic_stacked_vertical_basic_stacked_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component */
      "krms");
      /* harmony import */


      var _bar_chart_test_grouped_horizontal_grouped_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component */
      "d0d1");
      /* harmony import */


      var _bar_chart_test_grouped_vertical_grouped_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component */
      "CQZE");
      /* harmony import */


      var _bar_chart_test_proportional_vertical_proportional_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component */
      "1zNQ");
      /* harmony import */


      var _chart_docs_bucketed_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./chart-docs-bucketed-bar.component */
      "h39I");

      var routes = [{
        path: "",
        component: _chart_docs_bucketed_bar_component__WEBPACK_IMPORTED_MODULE_17__["ChartDocsBucketedBarComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "stacked",
        component: _bar_chart_stacked_bar_chart_stacked_example_component__WEBPACK_IMPORTED_MODULE_10__["BarChartStackedExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "stacked-test",
        component: _bar_chart_test_basic_stacked_vertical_basic_stacked_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_13__["BasicStackedVerticalBarChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "percentage",
        component: _bar_chart_percentage_bar_chart_percentage_example_component__WEBPACK_IMPORTED_MODULE_8__["BarChartPercentageExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "grouped",
        component: _bar_chart_grouped_bar_chart_grouped_example_component__WEBPACK_IMPORTED_MODULE_7__["BarChartGroupedExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "grouped-horizontal",
        component: _bar_chart_grouped_horizontal_bar_chart_grouped_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__["BarChartGroupedHorizontalExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "test",
        component: _bar_chart_test_bar_chart_bucketed_test_component__WEBPACK_IMPORTED_MODULE_11__["BarChartBucketedTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsBucketedBarModule = function ChartDocsBucketedBarModule() {
        _classCallCheck(this, ChartDocsBucketedBarModule);
      };

      ChartDocsBucketedBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_bucketed_bar_component__WEBPACK_IMPORTED_MODULE_17__["ChartDocsBucketedBarComponent"], _bar_chart_grouped_bar_chart_grouped_example_component__WEBPACK_IMPORTED_MODULE_7__["BarChartGroupedExampleComponent"], _bar_chart_grouped_horizontal_bar_chart_grouped_horizontal_example_component__WEBPACK_IMPORTED_MODULE_6__["BarChartGroupedHorizontalExampleComponent"], _bar_chart_percentage_bar_chart_percentage_example_component__WEBPACK_IMPORTED_MODULE_8__["BarChartPercentageExampleComponent"], _bar_chart_stacked_bar_chart_stacked_example_component__WEBPACK_IMPORTED_MODULE_10__["BarChartStackedExampleComponent"], _bar_chart_stacked_horizontal_bar_chart_stacked_horizontal_example_component__WEBPACK_IMPORTED_MODULE_9__["BarChartStackedHorizontalExampleComponent"], _bar_chart_test_basic_stacked_horizontal_basic_stacked_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_12__["BasicStackedHorizontalBarChartTestComponent"], _bar_chart_test_basic_stacked_vertical_basic_stacked_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_13__["BasicStackedVerticalBarChartTestComponent"], _bar_chart_test_grouped_horizontal_grouped_horizontal_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_14__["GroupedHorizontalBarChartTestComponent"], _bar_chart_test_grouped_vertical_grouped_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_15__["GroupedVerticalBarChartTestComponent"], _bar_chart_test_proportional_vertical_proportional_vertical_bar_chart_test_component__WEBPACK_IMPORTED_MODULE_16__["ProportionalVerticalBarChartTestComponent"], _bar_chart_test_bar_chart_bucketed_test_component__WEBPACK_IMPORTED_MODULE_11__["BarChartBucketedTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("dV9Q");
          }
        }]
      })], ChartDocsBucketedBarModule);
      /***/
    },

    /***/
    "krms":
    /*!****************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: BasicStackedVerticalBarChartTestComponent */

    /***/
    function krms(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicStackedVerticalBarChartTestComponent", function () {
        return BasicStackedVerticalBarChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_stacked_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic-stacked-vertical-bar-chart-test.component.html */
      "9us9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BasicStackedVerticalBarChartTestComponent = /*#__PURE__*/function () {
        function BasicStackedVerticalBarChartTestComponent() {
          _classCallCheck(this, BasicStackedVerticalBarChartTestComponent);
        }

        _createClass(BasicStackedVerticalBarChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(); // This matches field in data by which chart preprocessor will gather categories to build stacks

            accessors.data.category = function (data) {
              return data.name;
            };

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
            });
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
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

        return BasicStackedVerticalBarChartTestComponent;
      }();

      BasicStackedVerticalBarChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-basic-stacked-vertical-bar-chart-test",
        template: _raw_loader_basic_stacked_vertical_bar_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasicStackedVerticalBarChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "Brno",
          "name": "Brno",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST",
            "value": 122
          }, {
            "name": "Q3 2018",
            "value": 141
          }, {
            "name": "Q4 2018",
            "value": 66
          }]
        }, {
          "id": "Austin",
          "name": "Austin",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, // Please note the fact that not all categories are required to be present in every data point.
          // Sparse data is ok too.
          // {
          //     "name": "Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST",
          //     "value": 198,
          // },
          {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 233
          }]
        }, {
          "id": "Edinburgh",
          "name": "Edinburgh",
          "data": [{
            "name": "Q1 2018",
            "value": 167
          }, {
            "name": "Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST",
            "value": 15
          }, {
            "name": "Q3 2018",
            "value": 208
          }, {
            "name": "Q4 2018",
            "value": 123
          }]
        }, {
          "id": "Newcastle",
          "name": "Newcastle",
          "data": [{
            "name": "Q1 2018",
            "value": 11
          }, {
            "name": "Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST",
            "value": 99
          }, {
            "name": "Q3 2018",
            "value": 17
          }, {
            "name": "Q4 2018",
            "value": 25
          }]
        }, {
          "id": "Kyiv",
          "name": "Kyiv",
          "data": [{
            "name": "Q1 2018",
            "value": 121
          }, {
            "name": "Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST",
            "value": 222
          }, {
            "name": "Q3 2018",
            "value": 319
          }, {
            "name": "Q4 2018",
            "value": 328
          }]
        }];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=bucketed-bar-chart-docs-bucketed-bar-module-es5.js.map