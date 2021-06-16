(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-chart-docs-gauge-module"], {
    /***/
    "6tuR":
    /*!*********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-content/donut-gauge-with-content-example.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: DonutGaugeWithContentExampleComponent */

    /***/
    function tuR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithContentExampleComponent", function () {
        return DonutGaugeWithContentExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_content_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-content-example.component.html */
      "2Th4");
      /* harmony import */


      var _donut_gauge_with_content_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-content-example.component.less */
      "W9mO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithContentExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithContentExampleComponent() {
          _classCallCheck(this, DonutGaugeWithContentExampleComponent);

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
        }

        _createClass(DonutGaugeWithContentExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var initialValue = 178;
            this.gaugeConfig = this.getGaugeConfig(initialValue);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]); // Adding the plugin for the donut inner content

            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
            this.chartAssist.chart.addPlugin(this.contentPlugin);
            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.gaugeConfig = this.getGaugeConfig(value);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 200,
              thresholds: this.thresholds
            };
          }
        }]);

        return DonutGaugeWithContentExampleComponent;
      }();

      DonutGaugeWithContentExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-content-example",
        template: _raw_loader_donut_gauge_with_content_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_content_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithContentExampleComponent);
      /***/
    },

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
        "./donut-basic/donut-gauge-basic-example.component.html": "R/Os",
        "./donut-basic/donut-gauge-basic-example.component.less": "ZVh5",
        "./donut-basic/donut-gauge-basic-example.component.ts": "qaJP",
        "./donut-with-content/donut-gauge-with-content-example.component.html": "2Th4",
        "./donut-with-content/donut-gauge-with-content-example.component.less": "MnH5",
        "./donut-with-content/donut-gauge-with-content-example.component.ts": "4fWi",
        "./donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.html": "ib0S",
        "./donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.less": "8Jux",
        "./donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.ts": "QL48",
        "./donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.html": "wf0O",
        "./donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.less": "p49R",
        "./donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.ts": "s484",
        "./donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.html": "yMj0",
        "./donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.less": "3me9",
        "./donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.ts": "k4Bf",
        "./donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.html": "/Et5",
        "./donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.less": "xSwD",
        "./donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.ts": "ONZv",
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
    "CGFR":
    /*!*******************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-basic/donut-gauge-basic-example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: DonutGaugeBasicExampleComponent */

    /***/
    function CGFR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeBasicExampleComponent", function () {
        return DonutGaugeBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-basic-example.component.html */
      "R/Os");
      /* harmony import */


      var _donut_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-basic-example.component.less */
      "iHp2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeBasicExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeBasicExampleComponent() {
          _classCallCheck(this, DonutGaugeBasicExampleComponent);
        }

        _createClass(DonutGaugeBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Setting up the gauge config
            var initialValue = 128;
            this.gaugeConfig = this.getGaugeConfig(initialValue); // Creating the chart

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]); // Assembling the series

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut); // Updating the chart

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            // Updating the gauge config
            this.gaugeConfig = this.getGaugeConfig(value); // Updating the series set with the new config

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig); // Updating the chart with the updated series set

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 200
            };
          }
        }]);

        return DonutGaugeBasicExampleComponent;
      }();

      DonutGaugeBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-basic-example",
        template: _raw_loader_donut_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeBasicExampleComponent);
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
    "PBqg":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.less ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PBqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtY3VzdG9tLXRocmVzaG9sZC1sYWJlbHMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC1jdXN0b20tdGhyZXNob2xkLWxhYmVscy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbn1cbiJdfQ== */";
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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
              this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
            }
          }
        }, {
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
    "W9mO":
    /*!***********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-content/donut-gauge-with-content-example.component.less ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W9mO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 250px;\n  width: 250px;\n}\n.content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtY29udGVudC1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFESjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBRkoiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC1jb250ZW50LWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY29udGVudC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "bP6y":
    /*!*********************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.less ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bP6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */";
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
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! lodash/cloneDeep */
      "BkRI");
      /* harmony import */


      var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);

      var GaugeVisualTestComponent = /*#__PURE__*/function () {
        function GaugeVisualTestComponent() {
          _classCallCheck(this, GaugeVisualTestComponent);

          this.warningEnabled = true;
          this.gaugeConfigs = [this.getGaugeConfig(42), this.getGaugeConfig(130), this.getGaugeConfig(178)];
        }

        _createClass(GaugeVisualTestComponent, [{
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 200,
              thresholds: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["GaugeUtil"].createStandardThresholdsConfig(100, 158)
            };
          }
        }, {
          key: "onWarningEnabledChange",
          value: function onWarningEnabledChange(enabled) {
            var _this = this;

            this.warningEnabled = enabled;
            this.gaugeConfigs = this.gaugeConfigs.map(function (c) {
              var _a;

              var config = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(c);
              ((_a = config.thresholds) === null || _a === void 0 ? void 0 : _a.definitions)[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StandardGaugeThresholdId"].Warning].enabled = _this.warningEnabled;
              return config;
            });
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
    "daWV":
    /*!***************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.less ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function daWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtbWFya2VyLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXdpdGgtbWFya2VyLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */";
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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
              this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
            }
          }
        }, {
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
    "iHp2":
    /*!*********************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-basic/donut-gauge-basic-example.component.less ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iHp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 200px;\n  width: 200px;\n}\n.value-input {\n  margin-right: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUFKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4udmFsdWUtaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "kmV5":
    /*!*************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithMarkerTogglingExampleComponent */

    /***/
    function kmV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithMarkerTogglingExampleComponent", function () {
        return DonutGaugeWithMarkerTogglingExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_marker_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-marker-toggling-example.component.html */
      "wf0O");
      /* harmony import */


      var _donut_gauge_with_marker_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-marker-toggling-example.component.less */
      "daWV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithMarkerTogglingExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithMarkerTogglingExampleComponent() {
          _classCallCheck(this, DonutGaugeWithMarkerTogglingExampleComponent);

          this.value = 128;
          this.markersEnabled = true;
          this.labelsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"](); // Generating a standard set of thresholds with warning and critical levels

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
        }

        _createClass(DonutGaugeWithMarkerTogglingExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gaugeConfig = this.getGaugeConfig();
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]); // Adding the labels plugin
            // Note: This plugin can be completely omitted if labels aren't needed for your use case.

            this.chartAssist.chart.addPlugin(this.labelsPlugin);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.value = value;
            this.updateGauge();
          }
        }, {
          key: "onMarkersEnabledChange",
          value: function onMarkersEnabledChange(enabled) {
            this.markersEnabled = enabled; // Enabling or disabling the threshold markers

            this.thresholds.disableMarkers = !this.markersEnabled; // Enabling or disabling the threshold labels
            // Note: In addition to toggling the label plugin's 'disableThresholdLabels' configuration property,
            // the plugin can simply be omitted if labels aren't needed at all for your use case.

            this.labelsPlugin.config.disableThresholdLabels = !this.markersEnabled;
            this.updateGauge();
          }
        }, {
          key: "updateGauge",
          value: function updateGauge() {
            this.gaugeConfig = this.getGaugeConfig();
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig() {
            return {
              value: this.value,
              max: 200,
              thresholds: this.thresholds
            };
          }
        }]);

        return DonutGaugeWithMarkerTogglingExampleComponent;
      }();

      DonutGaugeWithMarkerTogglingExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-marker-toggling-example",
        template: _raw_loader_donut_gauge_with_marker_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_marker_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithMarkerTogglingExampleComponent);
      /***/
    },

    /***/
    "nY5s":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithCustomThresholdLabelsExampleComponent */

    /***/
    function nY5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithCustomThresholdLabelsExampleComponent", function () {
        return DonutGaugeWithCustomThresholdLabelsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_custom_threshold_labels_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-custom-threshold-labels-example.component.html */
      "ib0S");
      /* harmony import */


      var _donut_gauge_with_custom_threshold_labels_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-custom-threshold-labels-example.component.less */
      "PBqg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithCustomThresholdLabelsExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithCustomThresholdLabelsExampleComponent() {
          _classCallCheck(this, DonutGaugeWithCustomThresholdLabelsExampleComponent);

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(50, 80);
        }

        _createClass(DonutGaugeWithCustomThresholdLabelsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var initialValue = 64;
            this.gaugeConfig = this.getGaugeConfig(initialValue);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]); // Adding the labels plugin

            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.gaugeConfig = this.getGaugeConfig(value);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 100,
              thresholds: this.thresholds,
              // Setting a custom label formatter
              labelFormatter: function labelFormatter(d) {
                return "".concat(d, "%");
              }
            };
          }
        }]);

        return DonutGaugeWithCustomThresholdLabelsExampleComponent;
      }();

      DonutGaugeWithCustomThresholdLabelsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-custom-threshold-labels-example",
        template: _raw_loader_donut_gauge_with_custom_threshold_labels_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_custom_threshold_labels_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithCustomThresholdLabelsExampleComponent);
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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
              this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
            }
          }
        }, {
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
    "une2":
    /*!*******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithThresholdTogglingExampleComponent */

    /***/
    function une2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithThresholdTogglingExampleComponent", function () {
        return DonutGaugeWithThresholdTogglingExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_threshold_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-threshold-toggling-example.component.html */
      "/Et5");
      /* harmony import */


      var _donut_gauge_with_threshold_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-threshold-toggling-example.component.less */
      "bP6y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithThresholdTogglingExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithThresholdTogglingExampleComponent() {
          _classCallCheck(this, DonutGaugeWithThresholdTogglingExampleComponent);

          this.value = 128;
          this.warningEnabled = true;
          this.criticalEnabled = true; // Generating a standard set of thresholds with warning and critical levels

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
        }

        _createClass(DonutGaugeWithThresholdTogglingExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gaugeConfig = this.getGaugeConfig();
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]); // Adding the labels plugin

            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.value = value;
            this.updateGauge();
          }
        }, {
          key: "onWarningEnabledChange",
          value: function onWarningEnabledChange(enabled) {
            this.warningEnabled = enabled; // Enabling or disabling the warning threshold

            this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Warning].enabled = this.warningEnabled;
            this.updateGauge();
          }
        }, {
          key: "onCriticalEnabledChange",
          value: function onCriticalEnabledChange(enabled) {
            this.criticalEnabled = enabled; // Enabling or disabling the critical threshold

            this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Critical].enabled = this.criticalEnabled;
            this.updateGauge();
          }
        }, {
          key: "updateGauge",
          value: function updateGauge() {
            this.gaugeConfig = this.getGaugeConfig();
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig() {
            return {
              value: this.value,
              max: 200,
              thresholds: this.thresholds
            };
          }
        }]);

        return DonutGaugeWithThresholdTogglingExampleComponent;
      }();

      DonutGaugeWithThresholdTogglingExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-threshold-toggling-example",
        template: _raw_loader_donut_gauge_with_threshold_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_threshold_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithThresholdTogglingExampleComponent);
      /***/
    },

    /***/
    "vGhi":
    /*!*****************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithThresholdMarkersExampleComponent */

    /***/
    function vGhi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithThresholdMarkersExampleComponent", function () {
        return DonutGaugeWithThresholdMarkersExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_threshold_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-threshold-markers-example.component.html */
      "yMj0");
      /* harmony import */


      var _donut_gauge_with_threshold_markers_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-threshold-markers-example.component.less */
      "y8io");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithThresholdMarkersExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithThresholdMarkersExampleComponent() {
          _classCallCheck(this, DonutGaugeWithThresholdMarkersExampleComponent);

          this.value = 178;
          this.reversed = false;
          this.lowThreshold = 100;
          this.highThreshold = 158; // Generating a standard set of thresholds with warning and critical levels

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(this.lowThreshold, this.highThreshold);
        }

        _createClass(DonutGaugeWithThresholdMarkersExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gaugeConfig = this.getGaugeConfig();
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]); // Adding the labels plugin

            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.value = value;
            this.updateGauge();
          }
        }, {
          key: "onReversedChange",
          value: function onReversedChange(reversed) {
            this.reversed = reversed;
            this.thresholds.reversed = reversed; // swap the values of the warning and critical thresholds

            this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Warning].value = this.reversed ? this.highThreshold : this.lowThreshold;
            this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Critical].value = this.reversed ? this.lowThreshold : this.highThreshold;
            this.updateGauge();
          }
        }, {
          key: "updateGauge",
          value: function updateGauge() {
            this.gaugeConfig = this.getGaugeConfig();
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig() {
            return {
              value: this.value,
              max: 200,
              // Enabling the thresholds
              thresholds: this.thresholds
            };
          }
        }]);

        return DonutGaugeWithThresholdMarkersExampleComponent;
      }();

      DonutGaugeWithThresholdMarkersExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-threshold-markers-example",
        template: _raw_loader_donut_gauge_with_threshold_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_threshold_markers_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithThresholdMarkersExampleComponent);
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
    "y8io":
    /*!*******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.less ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function y8io(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLW1hcmtlcnMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC10aHJlc2hvbGQtbWFya2Vycy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbn1cbiJdfQ== */";
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
      /* harmony import */


      var _donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./donut-basic/donut-gauge-basic-example.component */
      "CGFR");
      /* harmony import */


      var _donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./donut-with-content/donut-gauge-with-content-example.component */
      "6tuR");
      /* harmony import */


      var _donut_with_threshold_markers_donut_gauge_with_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component */
      "vGhi");
      /* harmony import */


      var _donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component */
      "une2");
      /* harmony import */


      var _donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component */
      "nY5s");
      /* harmony import */


      var _donut_with_marker_toggling_donut_gauge_with_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component */
      "kmV5");
      /* eslint-disable max-len */


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
      }, {
        path: "donut-basic",
        component: _donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__["DonutGaugeBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-threshold-markers",
        component: _donut_with_threshold_markers_donut_gauge_with_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_14__["DonutGaugeWithThresholdMarkersExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-content",
        component: _donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__["DonutGaugeWithContentExampleComponent"],
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
        declarations: [_chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"], _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["GaugeVisualTestComponent"], _visual_test_horizontal_horizontal_gauge_tester_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalGaugeTesterComponent"], _visual_test_donut_donut_gauge_tester_component__WEBPACK_IMPORTED_MODULE_10__["DonutGaugeTesterComponent"], _donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__["DonutGaugeBasicExampleComponent"], _donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__["DonutGaugeWithContentExampleComponent"], _donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__["DonutGaugeWithCustomThresholdLabelsExampleComponent"], _donut_with_marker_toggling_donut_gauge_with_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_17__["DonutGaugeWithMarkerTogglingExampleComponent"], _donut_with_threshold_markers_donut_gauge_with_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_14__["DonutGaugeWithThresholdMarkersExampleComponent"], _donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__["DonutGaugeWithThresholdTogglingExampleComponent"], _visual_test_vertical_vertical_gauge_tester_component__WEBPACK_IMPORTED_MODULE_11__["VerticalGaugeTesterComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
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