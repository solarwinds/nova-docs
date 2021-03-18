(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spark-chart-docs-spark-module"], {
    /***/
    "+2hk":
    /*!*******************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/chart-docs-spark.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChartDocsSparkModule */

    /***/
    function hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsSparkModule", function () {
        return ChartDocsSparkModule;
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


      var _chart_docs_spark_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chart-docs-spark.component */
      "22gD");
      /* harmony import */


      var _spark_chart_basic_spark_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./spark-chart-basic/spark-chart-basic.example.component */
      "zSj9");
      /* harmony import */


      var _spark_chart_legend_spark_chart_legend_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./spark-chart-legend/spark-chart-legend.example.component */
      "bBYV");
      /* harmony import */


      var _spark_chart_multiple_spark_chart_multiple_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./spark-chart-multiple/spark-chart-multiple.example.component */
      "kYOj");
      /* harmony import */


      var _spark_chart_stroke_test_area_spark_minimal_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./spark-chart-stroke-test/area-spark-minimal-test.component */
      "xIQF");
      /* harmony import */


      var _spark_chart_table_spark_chart_table_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./spark-chart-table/spark-chart-table.example.component */
      "yUfv");
      /* harmony import */


      var _spark_chart_test_spark_chart_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./spark-chart-test/spark-chart-test.component */
      "s5h1");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_spark_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsSparkComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _spark_chart_basic_spark_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["SparkChartBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "legend",
        component: _spark_chart_legend_spark_chart_legend_example_component__WEBPACK_IMPORTED_MODULE_8__["SparkChartLegendExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "multiple",
        component: _spark_chart_multiple_spark_chart_multiple_example_component__WEBPACK_IMPORTED_MODULE_9__["SparkChartMultipleExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "table",
        component: _spark_chart_table_spark_chart_table_example_component__WEBPACK_IMPORTED_MODULE_11__["SparkChartTableExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "test",
        component: _spark_chart_test_spark_chart_test_component__WEBPACK_IMPORTED_MODULE_12__["SparkChartTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsSparkModule = function ChartDocsSparkModule() {
        _classCallCheck(this, ChartDocsSparkModule);
      };

      ChartDocsSparkModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_spark_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsSparkComponent"], _spark_chart_basic_spark_chart_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["SparkChartBasicExampleComponent"], _spark_chart_legend_spark_chart_legend_example_component__WEBPACK_IMPORTED_MODULE_8__["SparkChartLegendExampleComponent"], _spark_chart_multiple_spark_chart_multiple_example_component__WEBPACK_IMPORTED_MODULE_9__["SparkChartMultipleExampleComponent"], _spark_chart_table_spark_chart_table_example_component__WEBPACK_IMPORTED_MODULE_11__["SparkChartTableExampleComponent"], _spark_chart_test_spark_chart_test_component__WEBPACK_IMPORTED_MODULE_12__["SparkChartTestComponent"], _spark_chart_stroke_test_area_spark_minimal_test_component__WEBPACK_IMPORTED_MODULE_10__["AreaSparkMinimalTestComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTableModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("FbsN");
          }
        }]
      })], ChartDocsSparkModule);
      /***/
    },

    /***/
    "22gD":
    /*!**********************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/chart-docs-spark.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ChartDocsSparkComponent */

    /***/
    function gD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsSparkComponent", function () {
        return ChartDocsSparkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_spark_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-spark.component.html */
      "VXYK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsSparkComponent = function ChartDocsSparkComponent() {
        _classCallCheck(this, ChartDocsSparkComponent);

        this.gridConfiguration = "public chart = new Chart(new XYGrid(new SparkChartGridConfig(false, false)));\n...";
        this.scaleInstantiationWithId = "const scale = new TimeScale(\"example-scale-id\");\n...";
        this.collectionIdHtml = "<div *ngFor=\"let s of chartAssist.sparks\">\n    <nui-chart class=\"d-flex\" [chart]=\"s.chart\" nuiChartCollectionId=\"example-collection-id\"></nui-chart>\n</div>";
      };

      ChartDocsSparkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-spark",
        template: _raw_loader_chart_docs_spark_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsSparkComponent);
      /***/
    },

    /***/
    "FbsN":
    /*!********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************************/

    /*! no static exports found */

    /***/
    function FbsN(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-spark.component.html": "VXYK",
        "./chart-docs-spark.component.ts": "aEDV",
        "./chart-docs-spark.module.ts": "WWui",
        "./spark-chart-basic/spark-chart-basic.example.component.html": "VU9g",
        "./spark-chart-basic/spark-chart-basic.example.component.ts": "9WrG",
        "./spark-chart-legend/spark-chart-legend.example.component.html": "kBhg",
        "./spark-chart-legend/spark-chart-legend.example.component.ts": "VUb8",
        "./spark-chart-multiple/spark-chart-multiple.example.component.html": "O2Lm",
        "./spark-chart-multiple/spark-chart-multiple.example.component.ts": "4T4B",
        "./spark-chart-stroke-test/area-spark-minimal-test.component.html": "Voir",
        "./spark-chart-stroke-test/area-spark-minimal-test.component.less": "Z35r",
        "./spark-chart-stroke-test/area-spark-minimal-test.component.ts": "BCaa",
        "./spark-chart-table/spark-chart-table.example.component.html": "xLy/",
        "./spark-chart-table/spark-chart-table.example.component.ts": "MhnZ",
        "./spark-chart-test/spark-chart-test.component.html": "k9+c",
        "./spark-chart-test/spark-chart-test.component.ts": "zT5C"
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
      webpackContext.id = "FbsN";
      /***/
    },

    /***/
    "Hpov":
    /*!*******************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-stroke-test/area-spark-minimal-test.component.less ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hpov(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart-container {\n  border-left: 1px solid var(--nui-color-line-strong, #999);\n  border-right: 1px solid var(--nui-color-line-strong, #999);\n  height: 42px;\n  width: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWEtc3BhcmstbWluaW1hbC10ZXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSwwREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXJlYS1zcGFyay1taW5pbWFsLXRlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtY29udGFpbmVyIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLW51aS1jb2xvci1saW5lLXN0cm9uZywgIzk5OSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbnVpLWNvbG9yLWxpbmUtc3Ryb25nLCAjOTk5KTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "bBYV":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-legend/spark-chart-legend.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: SparkChartLegendExampleComponent */

    /***/
    function bBYV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkChartLegendExampleComponent", function () {
        return SparkChartLegendExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spark_chart_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spark-chart-legend.example.component.html */
      "kBhg");
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

      var SparkChartLegendExampleComponent = /*#__PURE__*/function () {
        function SparkChartLegendExampleComponent() {
          _classCallCheck(this, SparkChartLegendExampleComponent);
        }

        _createClass(SparkChartLegendExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // spark chart setup
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SparkChartAssist"]();
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
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

        return SparkChartLegendExampleComponent;
      }();

      SparkChartLegendExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-spark-chart-legend-example",
        template: _raw_loader_spark_chart_legend_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SparkChartLegendExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 85
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 99
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 55
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 73
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 77
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 61
          }]
        }];
      }
      /***/

    },

    /***/
    "kYOj":
    /*!*******************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-multiple/spark-chart-multiple.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: SparkChartMultipleExampleComponent */

    /***/
    function kYOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkChartMultipleExampleComponent", function () {
        return SparkChartMultipleExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spark_chart_multiple_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spark-chart-multiple.example.component.html */
      "O2Lm");
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

      var SparkChartMultipleExampleComponent = /*#__PURE__*/function () {
        function SparkChartMultipleExampleComponent() {
          _classCallCheck(this, SparkChartMultipleExampleComponent);
        }

        _createClass(SparkChartMultipleExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // spark chart setup
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SparkChartAssist"](); // providing chartAssist colors and markers to LineAccessors will share them with the line chart

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: {
                  // using the same scale id for the x-axes is necessary to achieve synchronized hover interaction between charts
                  // - sharing the same instance of the scale would work as well
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]("shared-id"),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                }
              });
            }); // chart assist needs to be used to update data

            this.chartAssist.update(seriesSet);
          }
        }]);

        return SparkChartMultipleExampleComponent;
      }();

      SparkChartMultipleExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-spark-chart-multiple-example",
        template: _raw_loader_spark_chart_multiple_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SparkChartMultipleExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "spark-series-1",
          name: "Tex-lab-aus-2621",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 85
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 99
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 55
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 73
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 77
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 61
          }]
        }, {
          id: "spark-series-2",
          name: "Cz-lab-brn-02",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 93
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 71
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 85
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 54
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 79
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 64
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 49
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 59
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 76
          }]
        }, {
          id: "spark-series-3",
          name: "Ua-lab-kie-03",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 42
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 84
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 41
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 50
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 56
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 44
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 48
          }]
        }];
      }
      /***/

    },

    /***/
    "s5h1":
    /*!***************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-test/spark-chart-test.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: SparkChartTestComponent */

    /***/
    function s5h1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkChartTestComponent", function () {
        return SparkChartTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spark_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spark-chart-test.component.html */
      "k9+c");
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

      var SparkChartTestComponent = /*#__PURE__*/function () {
        function SparkChartTestComponent() {
          _classCallCheck(this, SparkChartTestComponent);

          this.colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];
          this.initialInput = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
          this.baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()([2016, 11, 25]);
          this.xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
          this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
          this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](this.colors);
          this.accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.palette.standardColors);
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SparkChartAssist"](true, true, this.palette);
        }

        _createClass(SparkChartTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.input = JSON.stringify(this.initialInput);
            this.configureGrid(this.chartAssist.gridConfig);
            this.configureGrid(this.chartAssist.lastGridConfig);
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
            var seriesSet = this.generateSparkSeriesSet(input);
            this.chartAssist.update(seriesSet);
          }
        }, {
          key: "configureGrid",
          value: function configureGrid(gridConfig) {
            gridConfig.dimension.autoWidth = false;
            gridConfig.dimension.width(400);
          }
        }, {
          key: "generateSparkSeriesSet",
          value: function generateSparkSeriesSet(input) {
            var _this = this;

            return input.map(function (seriesData, i) {
              var sparkYScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
              sparkYScale.fixDomain([0, 26]); // spark chart height is 26px (36px - 5px top - 5px bottom padding)

              sparkYScale.formatters.value = function (v) {
                return Number(v).toPrecision(4);
              };

              var sparkScales = {
                x: _this.xScale,
                y: sparkYScale
              };
              return {
                id: "".concat(i + 1),
                name: "dev-aus-vm-0".concat(i + 1),
                accessors: _this.accessors,
                data: _this.getData(seriesData),
                scales: sparkScales,
                renderer: _this.renderer
              };
            });
          }
        }, {
          key: "getData",
          value: function getData(seriesData) {
            var _this2 = this;

            return seriesData.map(function (value, i) {
              return {
                x: _this2.baseDate.clone().add(i, "days"),
                y: value
              };
            });
          }
        }]);

        return SparkChartTestComponent;
      }();

      SparkChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-spark-chart-test",
        template: _raw_loader_spark_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SparkChartTestComponent);
      /***/
    },

    /***/
    "xIQF":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-stroke-test/area-spark-minimal-test.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: AreaSparkMinimalTestComponent */

    /***/
    function xIQF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaSparkMinimalTestComponent", function () {
        return AreaSparkMinimalTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_area_spark_minimal_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./area-spark-minimal-test.component.html */
      "Voir");
      /* harmony import */


      var _area_spark_minimal_test_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./area-spark-minimal-test.component.less */
      "Hpov");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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

      var AreaSparkMinimalTestComponent = /*#__PURE__*/function () {
        function AreaSparkMinimalTestComponent() {
          _classCallCheck(this, AreaSparkMinimalTestComponent);
        }

        _createClass(AreaSparkMinimalTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGridConfig"]();
            gridConfig.axis.left.visible = false;
            gridConfig.axis.bottom.visible = false;
            gridConfig.axis.top.visible = false;
            gridConfig.axis.right.visible = false;
            gridConfig.borders.bottom.visible = false;
            gridConfig.dimension.padding.bottom = 0;
            gridConfig.interactive = false;
            gridConfig.dimension.margin.right = 0;
            gridConfig.dimension.margin.bottom = 0;
            gridConfig.dimension.margin.top = 0;
            gridConfig.dimension.margin.left = 0;
            gridConfig.axis.left.gridTicks = false; // Create an x-y grid by passing the spark chart grid config as an argument to the constructor

            var grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](gridConfig); // Instantiate the chart using the configured spark chart grid as an argument to the chart's constructor

            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid); // Generate line accessors, x-y scales, and a line renderer to be included in the IChartSeries collection

            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stackedAreaAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["AreaRenderer"]({
              strokeWidth: 0
            });
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]()
            }; // Assemble the series set

            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }); // Invoke the chart's update method with the IChartSeries collection as the argument

            this.chart.update(seriesSet);
          }
        }]);

        return AreaSparkMinimalTestComponent;
      }();

      AreaSparkMinimalTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-area-spark-minimal-test",
        template: _raw_loader_area_spark_minimal_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_area_spark_minimal_test_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AreaSparkMinimalTestComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-07-08T01:51:43.448Z", format),
            y: 62
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-07-21T17:35:10.344Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-08-04T09:18:37.241Z", format),
            y: 99
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-08-18T01:02:04.137Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-08-31T16:45:31.034Z", format),
            y: 55
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-09-14T08:28:57.931Z", format),
            y: 73
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-09-28T00:12:24.827Z", format),
            y: 69
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-10-11T15:55:51.724Z", format),
            y: 77
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-10-25T07:39:18.620Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-11-07T23:22:45.517Z", format),
            y: 61
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-11-21T15:06:12.413Z", format),
            y: 68
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-12-05T06:49:39.310Z", format),
            y: 82
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2018-12-18T22:33:06.206Z", format),
            y: 81
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2019-01-01T14:16:33.103Z", format),
            y: 78
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2019-01-15T06:00:00.000Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "yUfv":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-table/spark-chart-table.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: SparkChartTableExampleComponent */

    /***/
    function yUfv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkChartTableExampleComponent", function () {
        return SparkChartTableExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spark_chart_table_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spark-chart-table.example.component.html */
      "xLy/");
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

      var SparkChartTableExampleComponent = /*#__PURE__*/function () {
        function SparkChartTableExampleComponent() {
          _classCallCheck(this, SparkChartTableExampleComponent);

          this.displayedColumns = ["name", "chart"];
          this.dataSource = [];
        }

        _createClass(SparkChartTableExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateTableData();
          }
        }, {
          key: "generateTableData",
          value: function generateTableData() {
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            this.dataSource = getData().map(function (d, i) {
              var _a; // Chart assist setup


              var chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SparkChartAssist"](false, false); // using a new accessors instance for each spark allows for the sequential
              // color provider within to provide the same color for each sparkline

              var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
              var yScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();

              yScale.formatters.value = function (v) {
                return Number(v).toPrecision(4);
              };

              var scales = {
                // using the same scale id for the x-axes is necessary to achieve synchronized hover interaction between charts
                // - sharing the same instance of the scale would work as well
                x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]("shared-id"),
                y: yScale
              }; // series setup

              var dataSeries = {
                id: "spark-series-".concat(i + 1),
                name: d.node,
                data: d.cpu,
                accessors: accessors,
                renderer: renderer,
                scales: scales
              }; // chart assist needs to be used to update data

              chartAssist.update([dataSeries]); // popover plugin must be added after the initial update as the spark chart assist creates the sparks on update

              var popoverPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPopoverPlugin"]();
              (_a = chartAssist.sparks[0].chart) === null || _a === void 0 ? void 0 : _a.addPlugin(popoverPlugin); // assembly of table row data

              var row = Object.assign(Object.assign({}, d), {
                chartAssist: chartAssist,
                popoverPlugin: popoverPlugin
              });
              return row;
            });
          }
        }]);

        return SparkChartTableExampleComponent;
      }();

      SparkChartTableExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-spark-chart-table-example",
        template: _raw_loader_spark_chart_table_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SparkChartTableExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          node: "Tex-lab-aus-2621",
          cpu: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 85
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 99
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 55
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 73
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 77
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 61
          }]
        }, {
          node: "Cz-lab-brn-02",
          cpu: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 93
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 71
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 85
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 54
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 79
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 64
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 49
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 59
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 76
          }]
        }];
      }
      /***/

    },

    /***/
    "zSj9":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/spark/spark-chart-basic/spark-chart-basic.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: SparkChartBasicExampleComponent */

    /***/
    function zSj9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkChartBasicExampleComponent", function () {
        return SparkChartBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spark_chart_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spark-chart-basic.example.component.html */
      "VU9g");
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

      var SparkChartBasicExampleComponent = /*#__PURE__*/function () {
        function SparkChartBasicExampleComponent() {
          _classCallCheck(this, SparkChartBasicExampleComponent);
        }

        _createClass(SparkChartBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // This grid configuration is what turns a regular chart into a spark chart
            var gridConfig = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["sparkChartGridConfig"])(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"](), false, false);
            gridConfig.interactive = false; // Create an x-y grid by passing the spark chart grid config as an argument to the constructor

            var grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig); // Instantiate the chart using the configured sprk chart grid as an argument to the chart's constructor

            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](grid); // Generate line accessors, x-y scales, and a line renderer to be included in the IChartSeries collection

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            }; // Assemble the series set

            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }); // Invoke the chart's update method with the IChartSeries collection as the argument

            this.chart.update(seriesSet);
          }
        }]);

        return SparkChartBasicExampleComponent;
      }();

      SparkChartBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-spark-chart-basic-example",
        template: _raw_loader_spark_chart_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SparkChartBasicExampleComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-08T01:51:43.448Z", format),
            y: 62
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-07-21T17:35:10.344Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-04T09:18:37.241Z", format),
            y: 99
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-18T01:02:04.137Z", format),
            y: 75
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-08-31T16:45:31.034Z", format),
            y: 55
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-14T08:28:57.931Z", format),
            y: 73
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-09-28T00:12:24.827Z", format),
            y: 69
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-11T15:55:51.724Z", format),
            y: 77
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-10-25T07:39:18.620Z", format),
            y: 57
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-07T23:22:45.517Z", format),
            y: 61
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-11-21T15:06:12.413Z", format),
            y: 68
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-12-05T06:49:39.310Z", format),
            y: 82
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2018-12-18T22:33:06.206Z", format),
            y: 81
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2019-01-01T14:16:33.103Z", format),
            y: 78
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2019-01-15T06:00:00.000Z", format),
            y: 90
          }]
        }];
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=spark-chart-docs-spark-module-es5.js.map