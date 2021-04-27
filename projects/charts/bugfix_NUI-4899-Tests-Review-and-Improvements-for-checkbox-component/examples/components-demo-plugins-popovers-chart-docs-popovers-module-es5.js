(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-plugins-popovers-chart-docs-popovers-module"], {
    /***/
    "XO+Y":
    /*!***********************************************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers/line-chart/line-chart-with-popover.example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: LineChartWithPopoverExampleComponent */

    /***/
    function XOY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartWithPopoverExampleComponent", function () {
        return LineChartWithPopoverExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_with_popover_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-with-popover.example.component.html */
      "oOVS");
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

      var LineChartWithPopoverExampleComponent = /*#__PURE__*/function () {
        function LineChartWithPopoverExampleComponent() {
          _classCallCheck(this, LineChartWithPopoverExampleComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
          this.popoverPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPopoverPlugin"]();
        }

        _createClass(LineChartWithPopoverExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // providing chartAssist colors and markers to LineAccessors will share them with the line chart

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var seriesSet = getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            }); // plugin setup

            this.chart.addPlugin(this.popoverPlugin); // chart assist needs to be used to update data

            this.chartAssist.update(seriesSet);
          }
        }]);

        return LineChartWithPopoverExampleComponent;
      }();

      LineChartWithPopoverExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-line-chart-with-popover-example",
        template: _raw_loader_line_chart_with_popover_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartWithPopoverExampleComponent);
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
    "XdK2":
    /*!************************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers/chart-docs-popovers.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ChartDocsPopoversComponent */

    /***/
    function XdK2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsPopoversComponent", function () {
        return ChartDocsPopoversComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_popovers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-popovers.component.html */
      "t80E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsPopoversComponent = function ChartDocsPopoversComponent() {
        _classCallCheck(this, ChartDocsPopoversComponent);

        this.popoverTypeScript = "this.popoverPlugin = new ChartPopoverPlugin();\nthis.chart.addPlugin(this.popoverPlugin);\n...";
        this.popoverHtml = "...\n<nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n<ng-template #popoverTemplate let-dataPoints=\"dataPoints\">\n    <div class=\"p-3\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.key}}: </strong>\n            <code>{{item.value.data | json}}</code>\n        </div>\n    </div>\n</ng-template>\n...";
      };

      ChartDocsPopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-popovers",
        template: _raw_loader_chart_docs_popovers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsPopoversComponent);
      /***/
    },

    /***/
    "gZ1U":
    /*!*********************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers/chart-docs-popovers.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ChartDocsPopoversModule */

    /***/
    function gZ1U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsPopoversModule", function () {
        return ChartDocsPopoversModule;
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


      var _bar_chart_bar_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bar-chart/bar-chart-with-popover.example.component */
      "q74O");
      /* harmony import */


      var _chart_docs_popovers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chart-docs-popovers.component */
      "XdK2");
      /* harmony import */


      var _donut_chart_donut_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./donut-chart/donut-chart-with-popover.example.component */
      "nwVm");
      /* harmony import */


      var _line_chart_line_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./line-chart/line-chart-with-popover.example.component */
      "XO+Y");
      /* harmony import */


      var _popover_visual_test_popover_visual_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./popover-visual-test/popover-visual-test.component */
      "lB8k");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_popovers_component__WEBPACK_IMPORTED_MODULE_8__["ChartDocsPopoversComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "bar",
        component: _bar_chart_bar_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_7__["BarChartWithPopoverExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "line",
        component: _line_chart_line_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_10__["LineChartWithPopoverExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "visual-test",
        component: _popover_visual_test_popover_visual_test_component__WEBPACK_IMPORTED_MODULE_11__["PopoverVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsPopoversModule = function ChartDocsPopoversModule() {
        _classCallCheck(this, ChartDocsPopoversModule);
      };

      ChartDocsPopoversModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bar_chart_bar_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_7__["BarChartWithPopoverExampleComponent"], _donut_chart_donut_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_9__["DonutChartWithPopoverExampleComponent"], _chart_docs_popovers_component__WEBPACK_IMPORTED_MODULE_8__["ChartDocsPopoversComponent"], _line_chart_line_chart_with_popover_example_component__WEBPACK_IMPORTED_MODULE_10__["LineChartWithPopoverExampleComponent"], _popover_visual_test_popover_visual_test_component__WEBPACK_IMPORTED_MODULE_11__["PopoverVisualTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("xfRU");
          }
        }]
      })], ChartDocsPopoversModule);
      /***/
    },

    /***/
    "lB8k":
    /*!********************************************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers/popover-visual-test/popover-visual-test.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: PopoverVisualTestComponent */

    /***/
    function lB8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverVisualTestComponent", function () {
        return PopoverVisualTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popover_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popover-visual-test.component.html */
      "sGkY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PopoverVisualTestComponent = function PopoverVisualTestComponent() {
        _classCallCheck(this, PopoverVisualTestComponent);
      };

      PopoverVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-popover-visual-test",
        template: _raw_loader_popover_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PopoverVisualTestComponent);
      /***/
    },

    /***/
    "nwVm":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers/donut-chart/donut-chart-with-popover.example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: DonutChartWithPopoverExampleComponent */

    /***/
    function nwVm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutChartWithPopoverExampleComponent", function () {
        return DonutChartWithPopoverExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_chart_with_popover_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-chart-with-popover.example.component.html */
      "ZI3Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutChartWithPopoverExampleComponent = /*#__PURE__*/function () {
        function DonutChartWithPopoverExampleComponent() {
          _classCallCheck(this, DonutChartWithPopoverExampleComponent);

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
        }

        _createClass(DonutChartWithPopoverExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // plugin setup
            this.popoverPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialPopoverPlugin"]();
            this.chartAssist.chart.addPlugin(this.popoverPlugin); // accessors setup for colors

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
            var statusColorProvider = createStatusColorProvider();
            accessors.series.color = statusColorProvider.get;
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"]();
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])(); // chart assist setup

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                scales: scales,
                renderer: renderer
              });
            }));
          }
        }]);

        return DonutChartWithPopoverExampleComponent;
      }();

      DonutChartWithPopoverExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-donut-chart-with-popover-example",
        template: _raw_loader_donut_chart_with_popover_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DonutChartWithPopoverExampleComponent);
      var Status;

      (function (Status) {
        Status["Up"] = "up";
        Status["Warning"] = "warning";
        Status["Critical"] = "critical";
        Status["Down"] = "down";
        Status["Unmanaged"] = "unmanaged";
        Status["Unknown"] = "unknown";
      })(Status || (Status = {}));
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

      function createStatusColorProvider() {
        var _nova_ui_charts__WEBP;

        return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]((_nova_ui_charts__WEBP = {}, _defineProperty(_nova_ui_charts__WEBP, Status.Up, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4]), _defineProperty(_nova_ui_charts__WEBP, Status.Warning, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2]), _defineProperty(_nova_ui_charts__WEBP, Status.Critical, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1]), _defineProperty(_nova_ui_charts__WEBP, Status.Down, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][0]), _defineProperty(_nova_ui_charts__WEBP, Status.Unmanaged, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][5]), _defineProperty(_nova_ui_charts__WEBP, Status.Unknown, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][3]), _nova_ui_charts__WEBP));
      }
      /***/

    },

    /***/
    "q74O":
    /*!*********************************************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers/bar-chart/bar-chart-with-popover.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: BarChartWithPopoverExampleComponent */

    /***/
    function q74O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarChartWithPopoverExampleComponent", function () {
        return BarChartWithPopoverExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bar_chart_with_popover_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bar-chart-with-popover.example.component.html */
      "NnDr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BarChartWithPopoverExampleComponent = /*#__PURE__*/function () {
        function BarChartWithPopoverExampleComponent() {
          _classCallCheck(this, BarChartWithPopoverExampleComponent);

          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()));
          this.popoverPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPopoverPlugin"]();
        }

        _createClass(BarChartWithPopoverExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // plugin setup (absence of InteractionLinePlugin setup will result in no interaction line)
            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            this.chartAssist.chart.addPlugin(this.popoverPlugin); // grid configuration

            var gridConfig = this.chartAssist.chart.getGrid().config();
            gridConfig.interactionPlugins = false;
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarSeriesHighlightStrategy"]("x")
            });
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(); // tell the chart assist to populate the chart

            this.chartAssist.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            }));
          }
        }]);

        return BarChartWithPopoverExampleComponent;
      }();

      BarChartWithPopoverExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-bar-chart-with-popover-example",
        template: _raw_loader_bar_chart_with_popover_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BarChartWithPopoverExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "chrome",
          name: "Chrome",
          data: [20]
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
          id: "edge",
          name: "Edge",
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
    "xfRU":
    /*!*******************************************************************************************************************!*\
      !*** ./examples/components/demo/plugins/popovers sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*******************************************************************************************************************/

    /*! no static exports found */

    /***/
    function xfRU(module, exports, __webpack_require__) {
      var map = {
        "./bar-chart/bar-chart-with-popover.example.component.html": "NnDr",
        "./bar-chart/bar-chart-with-popover.example.component.ts": "p1Bg",
        "./chart-docs-popovers.component.html": "t80E",
        "./chart-docs-popovers.component.ts": "mkmb",
        "./chart-docs-popovers.module.ts": "CfHS",
        "./donut-chart/donut-chart-with-popover.example.component.html": "ZI3Q",
        "./donut-chart/donut-chart-with-popover.example.component.ts": "LwkG",
        "./line-chart/line-chart-with-popover.example.component.html": "oOVS",
        "./line-chart/line-chart-with-popover.example.component.ts": "weFs",
        "./popover-visual-test/popover-visual-test.component.html": "sGkY",
        "./popover-visual-test/popover-visual-test.component.ts": "dN/v"
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
      webpackContext.id = "xfRU";
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-plugins-popovers-chart-docs-popovers-module-es5.js.map