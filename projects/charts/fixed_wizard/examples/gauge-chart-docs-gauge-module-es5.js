(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-chart-docs-gauge-module"], {
    /***/
    "AVdE":
    /*!********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************************/

    /*! no static exports found */

    /***/
    function AVdE(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-gauge.component.html": "ZWN/",
        "./chart-docs-gauge.component.ts": "2DII",
        "./chart-docs-gauge.module.ts": "ZDgL",
        "./visual-test/donut/donut-gauge-tester.component.html": "3Isn",
        "./visual-test/donut/donut-gauge-tester.component.less": "WISq",
        "./visual-test/donut/donut-gauge-tester.component.ts": "wITR",
        "./visual-test/gauge-visual-test.component.html": "m1aH",
        "./visual-test/gauge-visual-test.component.ts": "d56P",
        "./visual-test/horizontal/horizontal-gauge-tester.component.html": "CqTf",
        "./visual-test/horizontal/horizontal-gauge-tester.component.less": "QoLo",
        "./visual-test/horizontal/horizontal-gauge-tester.component.ts": "Nchi",
        "./visual-test/vertical/vertical-gauge-tester.component.html": "OzOS",
        "./visual-test/vertical/vertical-gauge-tester.component.less": "rphd",
        "./visual-test/vertical/vertical-gauge-tester.component.ts": "WxU7"
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
      webpackContext.id = "AVdE";
      /***/
    },

    /***/
    "GN1g":
    /*!********************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.less ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GN1g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXRlc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQURKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXRlc3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5cbi5jb250ZW50LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */";
      /***/
    },

    /***/
    "PxlK":
    /*!************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: VerticalGaugeTesterComponent */

    /***/
    function PxlK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalGaugeTesterComponent", function () {
        return VerticalGaugeTesterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vertical_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vertical-gauge-tester.component.html */
      "OzOS");
      /* harmony import */


      var _vertical_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vertical-gauge-tester.component.less */
      "qQ1H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var VerticalGaugeTesterComponent = /*#__PURE__*/function () {
        function VerticalGaugeTesterComponent() {
          _classCallCheck(this, VerticalGaugeTesterComponent);
        }

        _createClass(VerticalGaugeTesterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical));
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
            this.chartAssist.update(this.seriesSet);
          }
        }]);

        return VerticalGaugeTesterComponent;
      }();

      VerticalGaugeTesterComponent.propDecorators = {
        gaugeConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      VerticalGaugeTesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "vertical-gauge-tester",
        template: _raw_loader_vertical_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vertical_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerticalGaugeTesterComponent);
      /***/
    },

    /***/
    "SejL":
    /*!**********************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/chart-docs-gauge.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ChartDocsGaugeComponent */

    /***/
    function SejL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsGaugeComponent", function () {
        return ChartDocsGaugeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_gauge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-gauge.component.html */
      "ZWN/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsGaugeComponent = function ChartDocsGaugeComponent() {
        _classCallCheck(this, ChartDocsGaugeComponent);
      };

      ChartDocsGaugeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-gauge",
        template: _raw_loader_chart_docs_gauge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsGaugeComponent);
      /***/
    },

    /***/
    "bapz":
    /*!***********************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/gauge-visual-test.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: GaugeVisualTestComponent */

    /***/
    function bapz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaugeVisualTestComponent", function () {
        return GaugeVisualTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gauge_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gauge-visual-test.component.html */
      "m1aH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GaugeVisualTestComponent = /*#__PURE__*/function () {
        function GaugeVisualTestComponent() {
          _classCallCheck(this, GaugeVisualTestComponent);

          this.lowValue = 42;
          this.mediumValue = 130;
          this.highValue = 178;
        }

        _createClass(GaugeVisualTestComponent, [{
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 200,
              thresholds: [100, 158],
              enableThresholdMarkers: true
            };
          }
        }]);

        return GaugeVisualTestComponent;
      }();

      GaugeVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "gauge-visual-test",
        template: _raw_loader_gauge_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], GaugeVisualTestComponent);
      /***/
    },

    /***/
    "f1Ud":
    /*!****************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: HorizontalGaugeTesterComponent */

    /***/
    function f1Ud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalGaugeTesterComponent", function () {
        return HorizontalGaugeTesterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_horizontal_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./horizontal-gauge-tester.component.html */
      "CqTf");
      /* harmony import */


      var _horizontal_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./horizontal-gauge-tester.component.less */
      "wsHt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var HorizontalGaugeTesterComponent = /*#__PURE__*/function () {
        function HorizontalGaugeTesterComponent() {
          _classCallCheck(this, HorizontalGaugeTesterComponent);
        }

        _createClass(HorizontalGaugeTesterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal));
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
            this.chartAssist.update(this.seriesSet);
          }
        }]);

        return HorizontalGaugeTesterComponent;
      }();

      HorizontalGaugeTesterComponent.propDecorators = {
        gaugeConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HorizontalGaugeTesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "horizontal-gauge-tester",
        template: _raw_loader_horizontal_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_horizontal_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HorizontalGaugeTesterComponent);
      /***/
    },

    /***/
    "qQ1H":
    /*!**************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.less ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qQ1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLWdhdWdlLXRlc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESiIsImZpbGUiOiJ2ZXJ0aWNhbC1nYXVnZS10ZXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uY2hhcnQge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "t+VH":
    /*!******************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: DonutGaugeTesterComponent */

    /***/
    function tVH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeTesterComponent", function () {
        return DonutGaugeTesterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-tester.component.html */
      "3Isn");
      /* harmony import */


      var _donut_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-tester.component.less */
      "GN1g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeTesterComponent = /*#__PURE__*/function () {
        function DonutGaugeTesterComponent() {
          _classCallCheck(this, DonutGaugeTesterComponent);

          this.size = 250;
        }

        _createClass(DonutGaugeTesterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
            this.chartAssist.chart.addPlugin(this.contentPlugin);
            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }]);

        return DonutGaugeTesterComponent;
      }();

      DonutGaugeTesterComponent.propDecorators = {
        gaugeConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DonutGaugeTesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-tester",
        template: _raw_loader_donut_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeTesterComponent);
      /***/
    },

    /***/
    "wsHt":
    /*!******************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.less ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wsHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtZ2F1Z2UtdGVzdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKIiwiZmlsZSI6Imhvcml6b250YWwtZ2F1Z2UtdGVzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuLmNoYXJ0IHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "yAut":
    /*!*******************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/chart-docs-gauge.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChartDocsGaugeModule */

    /***/
    function yAut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsGaugeModule", function () {
        return ChartDocsGaugeModule;
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


      var _chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chart-docs-gauge.component */
      "SejL");
      /* harmony import */


      var _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./visual-test/gauge-visual-test.component */
      "bapz");
      /* harmony import */


      var _visual_test_horizontal_horizontal_gauge_tester_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./visual-test/horizontal/horizontal-gauge-tester.component */
      "f1Ud");
      /* harmony import */


      var _visual_test_donut_donut_gauge_tester_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./visual-test/donut/donut-gauge-tester.component */
      "t+VH");
      /* harmony import */


      var _visual_test_vertical_vertical_gauge_tester_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./visual-test/vertical/vertical-gauge-tester.component */
      "PxlK");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"],
        data: {
          showThemeSwitcher: true
        }
      }, {
        path: "visual-test",
        component: _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["GaugeVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsGaugeModule = function ChartDocsGaugeModule() {
        _classCallCheck(this, ChartDocsGaugeModule);
      };

      ChartDocsGaugeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"], _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["GaugeVisualTestComponent"], _visual_test_horizontal_horizontal_gauge_tester_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalGaugeTesterComponent"], _visual_test_donut_donut_gauge_tester_component__WEBPACK_IMPORTED_MODULE_10__["DonutGaugeTesterComponent"], _visual_test_vertical_vertical_gauge_tester_component__WEBPACK_IMPORTED_MODULE_11__["VerticalGaugeTesterComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("AVdE");
          }
        }]
      })], ChartDocsGaugeModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gauge-chart-docs-gauge-module-es5.js.map