(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-chart-setup-chart-docs-chart-setup-module"], {
    /***/
    "BJYk":
    /*!*************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ChartDocsChartSetupComponent */

    /***/
    function BJYk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsChartSetupComponent", function () {
        return ChartDocsChartSetupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_chart_setup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-chart-setup.component.html */
      "UCMR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsChartSetupComponent = function ChartDocsChartSetupComponent() {
        _classCallCheck(this, ChartDocsChartSetupComponent);

        this.basicChartTemplate = "<nui-chart [chart]=\"chart\"></nui-chart>";
        this.basicSeries = "const chartSeries: IChartSeries = {\n    id: \"series-1\",\n    name: \"Series 1\",\n    data: [\n        { x: 1, y: 10 },\n        { x: 2, y: 20 },\n    ],\n    scales: {\n        x: new LinearScale(),\n        y: new LinearScale(),\n    },\n    renderer: new LineRenderer(),\n};\n...";
        this.basicData = "const chartSeries: IChartSeries = {\n    id: \"series-1\",\n    name: \"Series 1\",\n    data: [\n        { x: 1, y: 10 },\n        { x: 2, y: 20 },\n    ],\n    ...\n};";
        this.basicScales = "const chartSeries: IChartSeries = {\n    ...\n    scales: {\n        x: new LinearScale(),\n        y: new LinearScale(),\n    },\n    ...\n};";
        this.renderer = "const chartSeries: IChartSeries = {\n    ...\n    renderer: new LineRenderer(),\n    ...\n};";
        this.chartSetup = "const chart = new Chart(new XYGrid());\n...";
        this.chartUpdate = "const seriesSet: IChartSeries[] = [...];\nchart.update(seriesSet);\n...";
      };

      ChartDocsChartSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-chart-setup",
        template: _raw_loader_chart_docs_chart_setup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsChartSetupComponent);
      /***/
    },

    /***/
    "ngfI":
    /*!********************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/chart-setup/line-chart/line-chart.example.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: LineChartExampleComponent */

    /***/
    function ngfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartExampleComponent", function () {
        return LineChartExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart.example.component.html */
      "Pxap");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LineChartExampleComponent = /*#__PURE__*/function () {
        function LineChartExampleComponent() {
          _classCallCheck(this, LineChartExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        }

        _createClass(LineChartExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.seriesSet = [{
              id: "series-1",
              name: "Series 1",
              data: [{
                x: 1,
                y: 10
              }, {
                x: 2,
                y: 30
              }, {
                x: 3,
                y: 5
              }, {
                x: 4,
                y: 20
              }, {
                x: 5,
                y: 15
              }],
              scales: {
                x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
              },
              renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
              accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]()
            }];
            this.chart.update(this.seriesSet);
          }
        }]);

        return LineChartExampleComponent;
      }();

      LineChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-example",
        template: _raw_loader_line_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartExampleComponent);
      /***/
    },

    /***/
    "u5q0":
    /*!*****************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/chart-setup sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*****************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function u5q0(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-chart-setup.component.html": "UCMR",
        "./chart-docs-chart-setup.component.ts": "IRIh",
        "./chart-docs-chart-setup.module.ts": "ztii",
        "./line-chart/line-chart.example.component.html": "Pxap",
        "./line-chart/line-chart.example.component.ts": "NXqR"
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
      webpackContext.id = "u5q0";
      /***/
    },

    /***/
    "xb04":
    /*!**********************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ChartDocsChartSetupModule */

    /***/
    function xb04(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsChartSetupModule", function () {
        return ChartDocsChartSetupModule;
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


      var _chart_docs_chart_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-chart-setup.component */
      "BJYk");
      /* harmony import */


      var _line_chart_line_chart_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./line-chart/line-chart.example.component */
      "ngfI");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_chart_setup_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsChartSetupComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "line-chart",
        component: _line_chart_line_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["LineChartExampleComponent"]
      }];

      var ChartDocsChartSetupModule = function ChartDocsChartSetupModule() {
        _classCallCheck(this, ChartDocsChartSetupModule);
      };

      ChartDocsChartSetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_line_chart_line_chart_example_component__WEBPACK_IMPORTED_MODULE_6__["LineChartExampleComponent"], _chart_docs_chart_setup_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsChartSetupComponent"]],
        imports: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("u5q0");
          }
        }]
      })], ChartDocsChartSetupModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-chart-setup-chart-docs-chart-setup-module-es5.js.map