(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pie-and-donut-chart-docs-pie-and-donut-module"], {
    /***/
    "/ZAa":
    /*!**************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/chart-docs-pie-and-donut.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ChartDocsPieAndDonutComponent */

    /***/
    function ZAa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsPieAndDonutComponent", function () {
        return ChartDocsPieAndDonutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_pie_and_donut_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-pie-and-donut.component.html */
      "muHI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsPieAndDonutComponent = function ChartDocsPieAndDonutComponent() {
        _classCallCheck(this, ChartDocsPieAndDonutComponent);
      };

      ChartDocsPieAndDonutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-pie-and-donut",
        template: _raw_loader_chart_docs_pie_and_donut_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsPieAndDonutComponent);
      /***/
    },

    /***/
    "QfNg":
    /*!*******************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/pie-chart-test/pie-chart-test.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PieChartTestComponent */

    /***/
    function QfNg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartTestComponent", function () {
        return PieChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pie_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pie-chart-test.component.html */
      "3EEk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var PieChartTestComponent = /*#__PURE__*/function () {
        function PieChartTestComponent() {
          _classCallCheck(this, PieChartTestComponent);

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
        }

        _createClass(PieChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PieRenderer"]();
            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return PieChartTestComponent;
      }();

      PieChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-pie-chart-test",
        template: _raw_loader_pie_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PieChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [60]
        }, {
          id: "edge",
          name: "Edge",
          data: [30]
        }, {
          id: "ff",
          name: "FF",
          data: [15]
        }, {
          id: "safari",
          name: "Safari",
          data: [5]
        }];
      }
      /***/

    },

    /***/
    "WcXC":
    /*!****************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \****************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function WcXC(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-pie-and-donut.component.html": "muHI",
        "./chart-docs-pie-and-donut.component.ts": "ggvU",
        "./chart-docs-pie-and-donut.module.ts": "IlQ7",
        "./donut-chart-interactive/donut-chart-interactive.example.component.html": "7yfv",
        "./donut-chart-interactive/donut-chart-interactive.example.component.ts": "yWWf",
        "./donut-chart-test/donut-chart-test.component.html": "8Y2C",
        "./donut-chart-test/donut-chart-test.component.ts": "B1nc",
        "./donut-chart-with-content/donut-chart-with-content.example.component.html": "7D5C",
        "./donut-chart-with-content/donut-chart-with-content.example.component.ts": "fPMf",
        "./donut-chart/donut-chart.example.component.html": "jpmM",
        "./donut-chart/donut-chart.example.component.ts": "HZrt",
        "./pie-chart-test/pie-chart-test.component.html": "3EEk",
        "./pie-chart-test/pie-chart-test.component.ts": "VH8F",
        "./pie-chart/pie-chart.example.component.html": "RAMD",
        "./pie-chart/pie-chart.example.component.ts": "mcih"
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
      webpackContext.id = "WcXC";
      /***/
    },

    /***/
    "jvAB":
    /*!***********************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/donut-chart-with-content/donut-chart-with-content.example.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: DonutChartWithContentExampleComponent */

    /***/
    function jvAB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutChartWithContentExampleComponent", function () {
        return DonutChartWithContentExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_chart_with_content_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-chart-with-content.example.component.html */
      "7D5C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutChartWithContentExampleComponent = /*#__PURE__*/function () {
        function DonutChartWithContentExampleComponent() {
          _classCallCheck(this, DonutChartWithContentExampleComponent);

          this.value = function (s) {
            return s.data[0];
          };

          this.name = function (s) {
            return s.name;
          };
        }

        _createClass(DonutChartWithContentExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Instantiate the charts and chart assists
            this.chartAssist1 = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
            this.chartAssist2 = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]); // Create the donut content plugin

            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartDonutContentPlugin"](); // Register the content plugin with the chart. In addition to registering the plugin with the chart,
            // pass it to the plugin input of the nui-chart-donut-content component in the template.

            this.chartAssist2.chart.addPlugin(this.contentPlugin); // Create radial accessors, scales, and a renderer to be included in the IChartAssistSeries collection

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            var scales1 = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            var scales2 = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"]();
            this.series = getData(); // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument

            this.chartAssist1.update(this.series.map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales1,
                renderer: renderer
              });
            }));
            this.chartAssist2.update(this.series.map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales2,
                renderer: renderer
              });
            }));
          }
        }]);

        return DonutChartWithContentExampleComponent;
      }();

      DonutChartWithContentExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-donut-chart-with-content-example",
        template: _raw_loader_donut_chart_with_content_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DonutChartWithContentExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [80]
        }, {
          id: "edge",
          name: "Edge",
          data: [20]
        }];
      }
      /***/

    },

    /***/
    "l3SP":
    /*!*********************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/donut-chart/donut-chart.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: DonutChartExampleComponent */

    /***/
    function l3SP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutChartExampleComponent", function () {
        return DonutChartExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-chart.example.component.html */
      "jpmM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutChartExampleComponent = /*#__PURE__*/function () {
        function DonutChartExampleComponent() {
          _classCallCheck(this, DonutChartExampleComponent);
        }

        _createClass(DonutChartExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Create a Chart instance using the result of the radialGrid configuration function as the constructor argument
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()); // Create a ChartAssist instance passing the chart and the radial series processor as constructor arguments

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]); // Generate radial accessors, scales, and renderer to be included in the IChartAssistSeries collection

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"](); // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return DonutChartExampleComponent;
      }();

      DonutChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-donut-chart-example",
        template: _raw_loader_donut_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DonutChartExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [80]
        }, {
          id: "edge",
          name: "Edge",
          data: [20]
        }];
      }
      /***/

    },

    /***/
    "lUJQ":
    /*!***********************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/donut-chart-test/donut-chart-test.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: DonutChartTestComponent */

    /***/
    function lUJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutChartTestComponent", function () {
        return DonutChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-chart-test.component.html */
      "8Y2C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutChartTestComponent = /*#__PURE__*/function () {
        function DonutChartTestComponent() {
          _classCallCheck(this, DonutChartTestComponent);

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
        }

        _createClass(DonutChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartDonutContentPlugin"]();
            this.chartAssist.chart.addPlugin(this.contentPlugin);
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"]();
            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return DonutChartTestComponent;
      }();

      DonutChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-donut-chart-test",
        template: _raw_loader_donut_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DonutChartTestComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [70]
        }, {
          id: "edge",
          name: "Edge",
          data: [20]
        }, {
          id: "ff",
          name: "FF",
          data: [10]
        }];
      }
      /***/

    },

    /***/
    "nM9i":
    /*!*****************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/pie-chart/pie-chart.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: PieChartExampleComponent */

    /***/
    function nM9i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartExampleComponent", function () {
        return PieChartExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pie_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pie-chart.example.component.html */
      "RAMD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var PieChartExampleComponent = /*#__PURE__*/function () {
        function PieChartExampleComponent() {
          _classCallCheck(this, PieChartExampleComponent);
        }

        _createClass(PieChartExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Create a Chart instance using the result of the radialGrid configuration function as the constructor argument
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()); // Create a ChartAssist instance passing the chart and the radial series processor as constructor arguments

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]); // Instantiate radial accessors and scales to be included in the IChartAssistSeries collection

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])(); // Instantiate a PieRenderer to be included in the IChartAssistSeries collection

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PieRenderer"](); // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return PieChartExampleComponent;
      }();

      PieChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-pie-chart-example",
        template: _raw_loader_pie_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PieChartExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [80]
        }, {
          id: "edge",
          name: "Edge",
          data: [20]
        }];
      }
      /***/

    },

    /***/
    "rMx9":
    /*!*********************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/donut-chart-interactive/donut-chart-interactive.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: DonutChartInteractiveExampleComponent */

    /***/
    function rMx9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutChartInteractiveExampleComponent", function () {
        return DonutChartInteractiveExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_chart_interactive_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-chart-interactive.example.component.html */
      "7yfv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash/zipObject */
      "VJLA");
      /* harmony import */


      var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__);

      var Status;

      (function (Status) {
        Status["Up"] = "up";
        Status["Warning"] = "warning";
        Status["Critical"] = "critical";
        Status["Down"] = "down";
        Status["Unmanaged"] = "unmanaged";
        Status["Unknown"] = "unknown";
      })(Status || (Status = {}));

      var DonutChartInteractiveExampleComponent = /*#__PURE__*/function () {
        function DonutChartInteractiveExampleComponent() {
          _classCallCheck(this, DonutChartInteractiveExampleComponent);
        }

        _createClass(DonutChartInteractiveExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Instantiate the chart and chart assist
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]); // If custom colors are needed, instantiate a custom color provider in the form of a MappedValueProvider.
            // This is only needed if your chart requires colors that deviate from the ones provided by the default
            // color provider.

            var statusColorProvider = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()([Status.Down, Status.Critical, Status.Warning, Status.Unknown, Status.Up, Status.Unmanaged], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"])); // Instantiate the RadialAccessors and set the series color accessor to the new
            // color provider's get method

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            accessors.series.color = statusColorProvider.get; // Create radial scales and a renderer to be included in the IChartAssistSeries collection

            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"](); // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return DonutChartInteractiveExampleComponent;
      }();

      DonutChartInteractiveExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-donut-chart-interactive-example",
        template: _raw_loader_donut_chart_interactive_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DonutChartInteractiveExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          status: Status.Up,
          value: 42
        }, {
          status: Status.Warning,
          value: 14
        }, {
          status: Status.Critical,
          value: 8
        }, {
          status: Status.Down,
          value: 7
        }, {
          status: Status.Unmanaged,
          value: 5
        }, {
          status: Status.Unknown,
          value: 3
        }].map(function (d) {
          return {
            id: d.status,
            name: d.status,
            data: [d.value]
          };
        });
      }
      /***/

    },

    /***/
    "tvJs":
    /*!***********************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/pie-and-donut/chart-docs-pie-and-donut.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ChartDocsPieAndDonutModule */

    /***/
    function tvJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsPieAndDonutModule", function () {
        return ChartDocsPieAndDonutModule;
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


      var _chart_docs_pie_and_donut_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-pie-and-donut.component */
      "/ZAa");
      /* harmony import */


      var _donut_chart_interactive_donut_chart_interactive_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./donut-chart-interactive/donut-chart-interactive.example.component */
      "rMx9");
      /* harmony import */


      var _donut_chart_test_donut_chart_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./donut-chart-test/donut-chart-test.component */
      "lUJQ");
      /* harmony import */


      var _donut_chart_with_content_donut_chart_with_content_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./donut-chart-with-content/donut-chart-with-content.example.component */
      "jvAB");
      /* harmony import */


      var _donut_chart_donut_chart_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./donut-chart/donut-chart.example.component */
      "l3SP");
      /* harmony import */


      var _pie_chart_test_pie_chart_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pie-chart-test/pie-chart-test.component */
      "QfNg");
      /* harmony import */


      var _pie_chart_pie_chart_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pie-chart/pie-chart.example.component */
      "nM9i");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_pie_and_donut_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsPieAndDonutComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "pie",
        component: _pie_chart_pie_chart_example_component__WEBPACK_IMPORTED_MODULE_11__["PieChartExampleComponent"]
      }, {
        path: "donut-interactive",
        component: _donut_chart_interactive_donut_chart_interactive_example_component__WEBPACK_IMPORTED_MODULE_6__["DonutChartInteractiveExampleComponent"]
      }, {
        path: "pie-test",
        component: _pie_chart_test_pie_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["PieChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut",
        component: _donut_chart_donut_chart_example_component__WEBPACK_IMPORTED_MODULE_9__["DonutChartExampleComponent"]
      }, {
        path: "donut-with-content",
        component: _donut_chart_with_content_donut_chart_with_content_example_component__WEBPACK_IMPORTED_MODULE_8__["DonutChartWithContentExampleComponent"]
      }, {
        path: "donut-test",
        component: _donut_chart_test_donut_chart_test_component__WEBPACK_IMPORTED_MODULE_7__["DonutChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsPieAndDonutModule = function ChartDocsPieAndDonutModule() {
        _classCallCheck(this, ChartDocsPieAndDonutModule);
      };

      ChartDocsPieAndDonutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_pie_and_donut_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsPieAndDonutComponent"], _donut_chart_donut_chart_example_component__WEBPACK_IMPORTED_MODULE_9__["DonutChartExampleComponent"], _donut_chart_with_content_donut_chart_with_content_example_component__WEBPACK_IMPORTED_MODULE_8__["DonutChartWithContentExampleComponent"], _donut_chart_interactive_donut_chart_interactive_example_component__WEBPACK_IMPORTED_MODULE_6__["DonutChartInteractiveExampleComponent"], _donut_chart_test_donut_chart_test_component__WEBPACK_IMPORTED_MODULE_7__["DonutChartTestComponent"], _pie_chart_pie_chart_example_component__WEBPACK_IMPORTED_MODULE_11__["PieChartExampleComponent"], _pie_chart_test_pie_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["PieChartTestComponent"]],
        imports: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("WcXC");
          }
        }]
      })], ChartDocsPieAndDonutModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pie-and-donut-chart-docs-pie-and-donut-module-es5.js.map