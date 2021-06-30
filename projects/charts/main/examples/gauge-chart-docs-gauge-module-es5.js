(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-chart-docs-gauge-module"], {
    /***/
    "4TGt":
    /*!************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/linear-thickness-adjustment/linear-gauge-thickness-adjustment-example.component.less ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TGt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__inputs {\n  margin-right: 50px;\n}\n.demo__charts {\n  width: 255px;\n}\n.demo__vertical-chart {\n  height: 200px;\n}\n.demo__horizontal-chart {\n  width: 200px;\n  margin-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVhci1nYXVnZS10aGlja25lc3MtYWRqdXN0bWVudC1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUVBO0VBQ0ksWUFBQTtBQUFKO0FBSUE7RUFDSSxhQUFBO0FBRko7QUFNQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUpKIiwiZmlsZSI6ImxpbmVhci1nYXVnZS10aGlja25lc3MtYWRqdXN0bWVudC1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW9fX2lucHV0cyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uZGVtb19fY2hhcnRzIHtcbiAgICB3aWR0aDogMjU1cHg7XG59XG5cbi8vIFNldHRpbmcgdGhlIGhlaWdodCBvbiB0aGUgY2hhcnQgZWxlbWVudCBkZXRlcm1pbmVzIHRoZSB2ZXJ0aWNhbCBsZW5ndGggb2YgdGhlIGdhdWdlXG4uZGVtb19fdmVydGljYWwtY2hhcnQge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi8vIFNldHRpbmcgdGhlIHdpZHRoIG9uIHRoZSBjaGFydCBlbGVtZW50IGRldGVybWluZXMgdGhlIGhvcml6b250YWwgbGVuZ3RoIG9mIHRoZSBnYXVnZVxuLmRlbW9fX2hvcml6b250YWwtY2hhcnQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "6gvS":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-basic/donut-gauge-basic-example.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: DonutGaugeBasicExampleComponent */

    /***/
    function gvS(module, __webpack_exports__, __webpack_require__) {
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
      "QUxe");
      /* harmony import */


      var _donut_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-basic-example.component.less */
      "Npi5");
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
            this.gaugeConfig = this.getGaugeConfig(initialValue); // Creating the chart assist

            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut); // Assembling the series

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut); // Updating the chart

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            // Updating the gauge config
            this.gaugeConfig = this.getGaugeConfig(value); // Updating the series set with the new config

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig); // Updating the chart with the updated series set

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
    "6k7h":
    /*!***************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.less ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k7h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtb19fY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */";
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
        "./donut/donut-basic/donut-gauge-basic-example.component.html": "QUxe",
        "./donut/donut-basic/donut-gauge-basic-example.component.less": "z2tb",
        "./donut/donut-basic/donut-gauge-basic-example.component.ts": "mDnq",
        "./donut/donut-with-content/donut-gauge-with-content-example.component.html": "dXgp",
        "./donut/donut-with-content/donut-gauge-with-content-example.component.less": "91pg",
        "./donut/donut-with-content/donut-gauge-with-content-example.component.ts": "/sCd",
        "./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.html": "G2WF",
        "./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.less": "Yu0q",
        "./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.ts": "r3Ox",
        "./donut/donut-with-threshold-marker-toggling/donut-gauge-with-threshold-marker-toggling-example.component.html": "TW+J",
        "./donut/donut-with-threshold-marker-toggling/donut-gauge-with-threshold-marker-toggling-example.component.less": "MV1o",
        "./donut/donut-with-threshold-marker-toggling/donut-gauge-with-threshold-marker-toggling-example.component.ts": "19lF",
        "./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.html": "1oNZ",
        "./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.less": "2ZQm",
        "./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.ts": "ZvUs",
        "./donut/donut-with-thresholds/donut-gauge-with-thresholds-example.component.html": "wSIz",
        "./donut/donut-with-thresholds/donut-gauge-with-thresholds-example.component.less": "i4Pe",
        "./donut/donut-with-thresholds/donut-gauge-with-thresholds-example.component.ts": "hSR7",
        "./donut/donut-without-threshold-markers/donut-gauge-without-threshold-markers-example.component.html": "jp58",
        "./donut/donut-without-threshold-markers/donut-gauge-without-threshold-markers-example.component.less": "J6rO",
        "./donut/donut-without-threshold-markers/donut-gauge-without-threshold-markers-example.component.ts": "j5fe",
        "./linear/horizontal-basic/horizontal-gauge-basic-example.component.html": "0Cj1",
        "./linear/horizontal-basic/horizontal-gauge-basic-example.component.less": "IzSJ",
        "./linear/horizontal-basic/horizontal-gauge-basic-example.component.ts": "uxvK",
        "./linear/linear-thickness-adjustment/linear-gauge-thickness-adjustment-example.component.html": "BDzF",
        "./linear/linear-thickness-adjustment/linear-gauge-thickness-adjustment-example.component.less": "Xr13",
        "./linear/linear-thickness-adjustment/linear-gauge-thickness-adjustment-example.component.ts": "jmb1",
        "./linear/linear-with-thresholds/linear-gauge-with-thresholds-example.component.html": "3dr6",
        "./linear/linear-with-thresholds/linear-gauge-with-thresholds-example.component.less": "bakv",
        "./linear/linear-with-thresholds/linear-gauge-with-thresholds-example.component.ts": "jRwM",
        "./linear/vertical-basic/vertical-gauge-basic-example.component.html": "aI42",
        "./linear/vertical-basic/vertical-gauge-basic-example.component.less": "6LbR",
        "./linear/vertical-basic/vertical-gauge-basic-example.component.ts": "S5Pj",
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
    "E0x5":
    /*!**************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/linear-with-thresholds/linear-gauge-with-thresholds-example.component.less ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E0x5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__value-input {\n  margin-right: 50px;\n}\n.demo__vertical-chart {\n  height: 200px;\n}\n.demo__horizontal-chart {\n  width: 200px;\n  margin-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVhci1nYXVnZS13aXRoLXRocmVzaG9sZHMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFHQTtFQUNJLGFBQUE7QUFESjtBQUtBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBSEoiLCJmaWxlIjoibGluZWFyLWdhdWdlLXdpdGgtdGhyZXNob2xkcy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW9fX3ZhbHVlLWlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi8vIFNldHRpbmcgdGhlIGhlaWdodCBvbiB0aGUgY2hhcnQgZWxlbWVudCBkZXRlcm1pbmVzIHRoZSB2ZXJ0aWNhbCBsZW5ndGggb2YgdGhlIGdhdWdlXG4uZGVtb19fdmVydGljYWwtY2hhcnQge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi8vIFNldHRpbmcgdGhlIHdpZHRoIG9uIHRoZSBjaGFydCBlbGVtZW50IGRldGVybWluZXMgdGhlIGhvcml6b250YWwgbGVuZ3RoIG9mIHRoZSBnYXVnZVxuLmRlbW9fX2hvcml6b250YWwtY2hhcnQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "FLog":
    /*!*********************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-thresholds/donut-gauge-with-thresholds-example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithThresholdsExampleComponent */

    /***/
    function FLog(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithThresholdsExampleComponent", function () {
        return DonutGaugeWithThresholdsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_thresholds_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-thresholds-example.component.html */
      "wSIz");
      /* harmony import */


      var _donut_gauge_with_thresholds_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-thresholds-example.component.less */
      "d39z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithThresholdsExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithThresholdsExampleComponent() {
          _classCallCheck(this, DonutGaugeWithThresholdsExampleComponent);

          this.value = 178;
          this.reversed = false;
          this.lowThreshold = 100;
          this.highThreshold = 158;
        }

        _createClass(DonutGaugeWithThresholdsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Generating a standard set of thresholds with warning and critical levels
            this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(this.lowThreshold, this.highThreshold);
            /**
             * Optionally, instead of using the 'createStandardThresholdsConfig' function as above, you can manually create a thresholds
             * config object like the following with as many or as few threshold definitions as you need.
             */
            // this.thresholds = {
            //     definitions: {
            //         [StandardGaugeThresholdId.Warning]: {
            //             id: StandardGaugeThresholdId.Warning,
            //             value: this.lowThreshold,
            //             enabled: true,
            //             color: StandardGaugeColor.Warning,
            //         },
            //         [StandardGaugeThresholdId.Critical]: {
            //             id: StandardGaugeThresholdId.Critical,
            //             value: this.highThreshold,
            //             enabled: true,
            //             color: StandardGaugeColor.Critical,
            //         },
            //     },
            //     reversed: false,
            //     disableMarkers: false,
            //     markerRadius: StandardGaugeThresholdMarkerRadius.Large,
            // };

            this.gaugeConfig = this.getGaugeConfig();
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
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
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig);
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

        return DonutGaugeWithThresholdsExampleComponent;
      }();

      DonutGaugeWithThresholdsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-thresholds-example",
        template: _raw_loader_donut_gauge_with_thresholds_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_thresholds_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithThresholdsExampleComponent);
      /***/
    },

    /***/
    "FQjS":
    /*!*****************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-content/donut-gauge-with-content-example.component.less ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FQjS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__chart {\n  height: 250px;\n  width: 250px;\n}\n.demo__content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtY29udGVudC1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFESjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBRkoiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC1jb250ZW50LWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uZGVtb19fY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uZGVtb19fY29udGVudC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogdmFyKC0tbnVpLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cbiJdfQ== */";
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
    "Jef4":
    /*!********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/vertical-basic/vertical-gauge-basic-example.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: VerticalGaugeBasicExampleComponent */

    /***/
    function Jef4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalGaugeBasicExampleComponent", function () {
        return VerticalGaugeBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vertical_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vertical-gauge-basic-example.component.html */
      "aI42");
      /* harmony import */


      var _vertical_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vertical-gauge-basic-example.component.less */
      "bxQ0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var VerticalGaugeBasicExampleComponent = /*#__PURE__*/function () {
        function VerticalGaugeBasicExampleComponent() {
          _classCallCheck(this, VerticalGaugeBasicExampleComponent);
        }

        _createClass(VerticalGaugeBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Setting up the gauge config
            var initialValue = 64;
            this.gaugeConfig = this.getGaugeConfig(initialValue); // Creating the chart assist

            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical); // Assembling the series

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical); // Updating the chart

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            // Updating the gauge config
            this.gaugeConfig = this.getGaugeConfig(value); // Updating the series set with the new config

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig); // Updating the chart with the updated series set

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 100
            };
          }
        }]);

        return VerticalGaugeBasicExampleComponent;
      }();

      VerticalGaugeBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "vertical-gauge-basic-example",
        template: _raw_loader_vertical_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vertical_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerticalGaugeBasicExampleComponent);
      /***/
    },

    /***/
    "Jq9P":
    /*!************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/linear-with-thresholds/linear-gauge-with-thresholds-example.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: LinearGaugeWithThresholdsExampleComponent */

    /***/
    function Jq9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearGaugeWithThresholdsExampleComponent", function () {
        return LinearGaugeWithThresholdsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_linear_gauge_with_thresholds_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./linear-gauge-with-thresholds-example.component.html */
      "3dr6");
      /* harmony import */


      var _linear_gauge_with_thresholds_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./linear-gauge-with-thresholds-example.component.less */
      "E0x5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LinearGaugeWithThresholdsExampleComponent = /*#__PURE__*/function () {
        function LinearGaugeWithThresholdsExampleComponent() {
          _classCallCheck(this, LinearGaugeWithThresholdsExampleComponent);

          this.value = 64;
        }

        _createClass(LinearGaugeWithThresholdsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Generating a standard set of thresholds with warning and critical levels
            this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(50, 79);
            /**
             * Optionally, instead of using the 'createStandardThresholdsConfig' function as above, you can manually create a thresholds
             * config object like the following with as many or as few threshold definitions as you need.
             */
            // this.thresholds = {
            //     definitions: {
            //         [StandardGaugeThresholdId.Warning]: {
            //             id: StandardGaugeThresholdId.Warning,
            //             value: 50,
            //             enabled: true,
            //             color: StandardGaugeColor.Warning,
            //         },
            //         [StandardGaugeThresholdId.Critical]: {
            //             id: StandardGaugeThresholdId.Critical,
            //             value: 79,
            //             enabled: true,
            //             color: StandardGaugeColor.Critical,
            //         },
            //     },
            //     reversed: false,
            //     disableMarkers: false,
            //     markerRadius: StandardGaugeThresholdMarkerRadius.Large,
            // };

            this.gaugeConfig = this.getGaugeConfig(); // Creating the horizontal gauge

            this.horizontalChartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
            this.horizontalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
            this.horizontalChartAssist.update(this.horizontalSeriesSet); // Creating the vertical gauge

            this.verticalChartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
            this.verticalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
            this.verticalChartAssist.update(this.verticalSeriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.value = value;
            this.updateGauges();
          }
        }, {
          key: "updateGauges",
          value: function updateGauges() {
            this.gaugeConfig = this.getGaugeConfig(); // Updating the horizontal gauge

            this.horizontalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.horizontalSeriesSet, this.gaugeConfig);
            this.horizontalChartAssist.update(this.horizontalSeriesSet); // Updating the vertical gauge

            this.verticalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.verticalSeriesSet, this.gaugeConfig);
            this.verticalChartAssist.update(this.verticalSeriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig() {
            return {
              value: this.value,
              max: 100,
              // Enabling the thresholds
              thresholds: this.thresholds
            };
          }
        }]);

        return LinearGaugeWithThresholdsExampleComponent;
      }();

      LinearGaugeWithThresholdsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "linear-gauge-with-thresholds-example",
        template: _raw_loader_linear_gauge_with_thresholds_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linear_gauge_with_thresholds_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LinearGaugeWithThresholdsExampleComponent);
      /***/
    },

    /***/
    "Npi5":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-basic/donut-gauge-basic-example.component.less ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Npi5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__value-input {\n  margin-right: 40px;\n}\n.demo__chart {\n  height: 200px;\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtb19fdmFsdWUtaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmRlbW9fX2NoYXJ0IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "NqMt":
    /*!**********************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/linear-thickness-adjustment/linear-gauge-thickness-adjustment-example.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: LinearGaugeThicknessAdjustmentExampleComponent */

    /***/
    function NqMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearGaugeThicknessAdjustmentExampleComponent", function () {
        return LinearGaugeThicknessAdjustmentExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_linear_gauge_thickness_adjustment_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./linear-gauge-thickness-adjustment-example.component.html */
      "BDzF");
      /* harmony import */


      var _linear_gauge_thickness_adjustment_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./linear-gauge-thickness-adjustment-example.component.less */
      "4TGt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LinearGaugeThicknessAdjustmentExampleComponent = /*#__PURE__*/function () {
        function LinearGaugeThicknessAdjustmentExampleComponent() {
          _classCallCheck(this, LinearGaugeThicknessAdjustmentExampleComponent);

          this.value = 64;
          this.compact = true;
          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(50, 79);
        }

        _createClass(LinearGaugeThicknessAdjustmentExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Setting the initial threshold marker radius
            this.thresholds.markerRadius = this.compact ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdMarkerRadius"].Small : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdMarkerRadius"].Large;
            this.gaugeConfig = this.getGaugeConfig(); // Creating the horizontal gauge

            this.horizontalChartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
            this.horizontalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
            this.horizontalChartAssist.update(this.horizontalSeriesSet); // Creating the vertical gauge

            this.verticalChartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
            this.verticalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
            this.verticalChartAssist.update(this.verticalSeriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.value = value;
            this.updateGauges();
          }
        }, {
          key: "onCompactChange",
          value: function onCompactChange(compact) {
            this.compact = compact; // Adjusting the threshold marker radius

            this.thresholds.markerRadius = this.compact ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdMarkerRadius"].Small : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdMarkerRadius"].Large;
            this.updateGauges(); // Updating the thickness

            this.updateThickness();
          }
        }, {
          key: "updateThickness",
          value: function updateThickness() {
            // Using standard thicknesses based on whether the gauge is in compact mode
            var thickness = this.compact ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardLinearGaugeThickness"].Small : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardLinearGaugeThickness"].Large; // Updating the horizontal gauge height with the desired gauge thickness in pixels

            var horizontalGridConfig = this.horizontalChartAssist.chart.getGrid().config();
            horizontalGridConfig.dimension.height(thickness);
            this.horizontalChartAssist.chart.updateDimensions(); // Updating the vertical gauge width with the desired gauge thickness in pixels

            var verticalGridConfig = this.verticalChartAssist.chart.getGrid().config();
            verticalGridConfig.dimension.width(thickness);
            this.verticalChartAssist.chart.updateDimensions();
          }
        }, {
          key: "updateGauges",
          value: function updateGauges() {
            this.gaugeConfig = this.getGaugeConfig(); // Updating the horizontal gauge

            this.horizontalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.horizontalSeriesSet, this.gaugeConfig);
            this.horizontalChartAssist.update(this.horizontalSeriesSet); // Updating the vertical gauge

            this.verticalSeriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.verticalSeriesSet, this.gaugeConfig);
            this.verticalChartAssist.update(this.verticalSeriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig() {
            return {
              value: this.value,
              max: 100,
              thresholds: this.thresholds,
              // Setting the initial thickness based on whether the gauge is in compact mode
              // The 'createChartAssist' function uses this to configure the grid's dimensions
              linearThickness: this.compact ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardLinearGaugeThickness"].Small : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardLinearGaugeThickness"].Large
            };
          }
        }]);

        return LinearGaugeThicknessAdjustmentExampleComponent;
      }();

      LinearGaugeThicknessAdjustmentExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "linear-gauge-thickness-adjustment-example",
        template: _raw_loader_linear_gauge_thickness_adjustment_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linear_gauge_thickness_adjustment_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LinearGaugeThicknessAdjustmentExampleComponent);
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
              this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
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
    "RsPz":
    /*!*************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithThresholdTogglingExampleComponent */

    /***/
    function RsPz(module, __webpack_exports__, __webpack_require__) {
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
      "1oNZ");
      /* harmony import */


      var _donut_gauge_with_threshold_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-threshold-toggling-example.component.less */
      "6k7h");
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

          this.value = 178;
          this.warningEnabled = true;
          this.criticalEnabled = true; // Generating a standard set of thresholds with warning and critical levels

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
        }

        _createClass(DonutGaugeWithThresholdTogglingExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gaugeConfig = this.getGaugeConfig();
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
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
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig);
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
    "TPJA":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-marker-toggling/donut-gauge-with-threshold-marker-toggling-example.component.less ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TPJA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLW1hcmtlci10b2dnbGluZy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJkb251dC1nYXVnZS13aXRoLXRocmVzaG9sZC1tYXJrZXItdG9nZ2xpbmctZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vX19jaGFydCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */";
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
    "bxQ0":
    /*!**********************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/vertical-basic/vertical-gauge-basic-example.component.less ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bxQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__value-input {\n  margin-right: 40px;\n}\n.demo__chart {\n  height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBR0E7RUFDSSxhQUFBO0FBREoiLCJmaWxlIjoidmVydGljYWwtZ2F1Z2UtYmFzaWMtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vX192YWx1ZS1pbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4vLyBTZXR0aW5nIHRoZSBoZWlnaHQgb24gdGhlIGNoYXJ0IGVsZW1lbnQgZGV0ZXJtaW5lcyB0aGUgdmVydGljYWwgbGVuZ3RoIG9mIHRoZSBnYXVnZVxuLmRlbW9fX2NoYXJ0IHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "d39z":
    /*!***********************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-thresholds/donut-gauge-with-thresholds-example.component.less ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d39z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkcy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJkb251dC1nYXVnZS13aXRoLXRocmVzaG9sZHMtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vX19jaGFydCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */";
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
              this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
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
    "gpsY":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-without-threshold-markers/donut-gauge-without-threshold-markers-example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithoutThresholdMarkersExampleComponent */

    /***/
    function gpsY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithoutThresholdMarkersExampleComponent", function () {
        return DonutGaugeWithoutThresholdMarkersExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_without_threshold_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-without-threshold-markers-example.component.html */
      "jp58");
      /* harmony import */


      var _donut_gauge_without_threshold_markers_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-without-threshold-markers-example.component.less */
      "swUS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithoutThresholdMarkersExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithoutThresholdMarkersExampleComponent() {
          _classCallCheck(this, DonutGaugeWithoutThresholdMarkersExampleComponent);

          this.value = 128;
        }

        _createClass(DonutGaugeWithoutThresholdMarkersExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Generating a standard set of thresholds with warning and critical levels
            this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158); // Turning off the markers

            this.thresholds.disableMarkers = true;
            this.gaugeConfig = this.getGaugeConfig();
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
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
          key: "updateGauge",
          value: function updateGauge() {
            this.gaugeConfig = this.getGaugeConfig();
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig);
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

        return DonutGaugeWithoutThresholdMarkersExampleComponent;
      }();

      DonutGaugeWithoutThresholdMarkersExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-without-threshold-markers-example",
        template: _raw_loader_donut_gauge_without_threshold_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_without_threshold_markers_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithoutThresholdMarkersExampleComponent);
      /***/
    },

    /***/
    "j2WA":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-marker-toggling/donut-gauge-with-threshold-marker-toggling-example.component.ts ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithThresholdMarkerTogglingExampleComponent */

    /***/
    function j2WA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DonutGaugeWithThresholdMarkerTogglingExampleComponent", function () {
        return DonutGaugeWithThresholdMarkerTogglingExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_donut_gauge_with_threshold_marker_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./donut-gauge-with-threshold-marker-toggling-example.component.html */
      "TW+J");
      /* harmony import */


      var _donut_gauge_with_threshold_marker_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-threshold-marker-toggling-example.component.less */
      "TPJA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var DonutGaugeWithThresholdMarkerTogglingExampleComponent = /*#__PURE__*/function () {
        function DonutGaugeWithThresholdMarkerTogglingExampleComponent() {
          _classCallCheck(this, DonutGaugeWithThresholdMarkerTogglingExampleComponent);

          this.value = 128;
          this.markersEnabled = true;
          this.labelsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"](); // Generating a standard set of thresholds with warning and critical levels

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
        }

        _createClass(DonutGaugeWithThresholdMarkerTogglingExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Setting up the gauge config
            this.gaugeConfig = this.getGaugeConfig(); // Setting up the chart assist with a local instance of the labels plugin for direct control of the label display

            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut, this.labelsPlugin); // Assembling the series

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut); // Updating the chart

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

            this.labelsPlugin.config.disableThresholdLabels = !this.markersEnabled;
            this.updateGauge();
          }
        }, {
          key: "updateGauge",
          value: function updateGauge() {
            this.gaugeConfig = this.getGaugeConfig();
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig);
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

        return DonutGaugeWithThresholdMarkerTogglingExampleComponent;
      }();

      DonutGaugeWithThresholdMarkerTogglingExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-threshold-marker-toggling-example",
        template: _raw_loader_donut_gauge_with_threshold_marker_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_threshold_marker_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DonutGaugeWithThresholdMarkerTogglingExampleComponent);
      /***/
    },

    /***/
    "lqKu":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.less ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lqKu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtY3VzdG9tLXRocmVzaG9sZC1sYWJlbHMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC1jdXN0b20tdGhyZXNob2xkLWxhYmVscy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW9fX2NoYXJ0IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "mSgw":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithCustomThresholdLabelsExampleComponent */

    /***/
    function mSgw(module, __webpack_exports__, __webpack_require__) {
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
      "G2WF");
      /* harmony import */


      var _donut_gauge_with_custom_threshold_labels_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-custom-threshold-labels-example.component.less */
      "lqKu");
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

          this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(50, 75);
        }

        _createClass(DonutGaugeWithCustomThresholdLabelsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var initialValue = 40;
            this.gaugeConfig = this.getGaugeConfig(initialValue);
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.gaugeConfig = this.getGaugeConfig(value);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig);
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
              labels: {
                formatter: function formatter(d) {
                  return "".concat(d, "%");
                }
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
    "opha":
    /*!***************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-content/donut-gauge-with-content-example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: DonutGaugeWithContentExampleComponent */

    /***/
    function opha(module, __webpack_exports__, __webpack_require__) {
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
      "dXgp");
      /* harmony import */


      var _donut_gauge_with_content_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./donut-gauge-with-content-example.component.less */
      "FQjS");
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
            var initialValue = 128;
            this.gaugeConfig = this.getGaugeConfig(initialValue);
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut); // Adding the plugin for the donut inner content

            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
            this.chartAssist.chart.addPlugin(this.contentPlugin);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            this.gaugeConfig = this.getGaugeConfig(value);
            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig);
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
    "swUS":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/donut/donut-without-threshold-markers/donut-gauge-without-threshold-markers-example.component.less ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function swUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__value-input {\n  margin-right: 40px;\n}\n.demo__chart {\n  height: 190px;\n  width: 190px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGhvdXQtdGhyZXNob2xkLW1hcmtlcnMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aG91dC10aHJlc2hvbGQtbWFya2Vycy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW9fX3ZhbHVlLWlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi5kZW1vX19jaGFydCB7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgICB3aWR0aDogMTkwcHg7XG59XG4iXX0= */";
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
              this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
            this.chartAssist.chart.addPlugin(this.contentPlugin);
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
    "ucP/":
    /*!**************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/horizontal-basic/horizontal-gauge-basic-example.component.less ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ucP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".demo__value-input {\n  margin-right: 40px;\n}\n.demo__chart {\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtZ2F1Z2UtYmFzaWMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7QUFHQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJob3Jpem9udGFsLWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtb19fdmFsdWUtaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLy8gU2V0dGluZyB0aGUgd2lkdGggb24gdGhlIGNoYXJ0IGVsZW1lbnQgZGV0ZXJtaW5lcyB0aGUgaG9yaXpvbnRhbCBsZW5ndGggb2YgdGhlIGdhdWdlXG4uZGVtb19fY2hhcnQge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */";
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
      /* harmony import */


      var _donut_donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./donut/donut-basic/donut-gauge-basic-example.component */
      "6gvS");
      /* harmony import */


      var _donut_donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./donut/donut-with-content/donut-gauge-with-content-example.component */
      "opha");
      /* harmony import */


      var _donut_donut_with_thresholds_donut_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./donut/donut-with-thresholds/donut-gauge-with-thresholds-example.component */
      "FLog");
      /* harmony import */


      var _donut_donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component */
      "RsPz");
      /* harmony import */


      var _donut_donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component */
      "mSgw");
      /* harmony import */


      var _linear_horizontal_basic_horizontal_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./linear/horizontal-basic/horizontal-gauge-basic-example.component */
      "yWOU");
      /* harmony import */


      var _linear_vertical_basic_vertical_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./linear/vertical-basic/vertical-gauge-basic-example.component */
      "Jef4");
      /* harmony import */


      var _donut_donut_without_threshold_markers_donut_gauge_without_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./donut/donut-without-threshold-markers/donut-gauge-without-threshold-markers-example.component */
      "gpsY");
      /* harmony import */


      var _donut_donut_with_threshold_marker_toggling_donut_gauge_with_threshold_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./donut/donut-with-threshold-marker-toggling/donut-gauge-with-threshold-marker-toggling-example.component */
      "j2WA");
      /* harmony import */


      var _linear_linear_with_thresholds_linear_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./linear/linear-with-thresholds/linear-gauge-with-thresholds-example.component */
      "Jq9P");
      /* harmony import */


      var _linear_linear_thickness_adjustment_linear_gauge_thickness_adjustment_example_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./linear/linear-thickness-adjustment/linear-gauge-thickness-adjustment-example.component */
      "NqMt");
      /* eslint-disable max-len */


      var exampleRoutes = [{
        path: "",
        component: _chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"],
        data: {
          showThemeSwitcher: true,
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].ga
          }
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
        component: _donut_donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__["DonutGaugeBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-content",
        component: _donut_donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__["DonutGaugeWithContentExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-custom-labels",
        component: _donut_donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__["DonutGaugeWithCustomThresholdLabelsExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-without-markers",
        component: _donut_donut_without_threshold_markers_donut_gauge_without_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_19__["DonutGaugeWithoutThresholdMarkersExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-marker-toggling",
        component: _donut_donut_with_threshold_marker_toggling_donut_gauge_with_threshold_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_20__["DonutGaugeWithThresholdMarkerTogglingExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-thresholds",
        component: _donut_donut_with_thresholds_donut_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_14__["DonutGaugeWithThresholdsExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "donut-with-threshold-toggling",
        component: _donut_donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__["DonutGaugeWithThresholdTogglingExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "horizontal-basic",
        component: _linear_horizontal_basic_horizontal_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_17__["HorizontalGaugeBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "vertical-basic",
        component: _linear_vertical_basic_vertical_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_18__["VerticalGaugeBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "linear-with-thresholds",
        component: _linear_linear_with_thresholds_linear_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_21__["LinearGaugeWithThresholdsExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "linear-thickness",
        component: _linear_linear_with_thresholds_linear_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_21__["LinearGaugeWithThresholdsExampleComponent"],
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
        declarations: [_chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"], _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["GaugeVisualTestComponent"], _linear_horizontal_basic_horizontal_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_17__["HorizontalGaugeBasicExampleComponent"], _linear_linear_with_thresholds_linear_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_21__["LinearGaugeWithThresholdsExampleComponent"], _visual_test_horizontal_horizontal_gauge_tester_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalGaugeTesterComponent"], _visual_test_donut_donut_gauge_tester_component__WEBPACK_IMPORTED_MODULE_10__["DonutGaugeTesterComponent"], _donut_donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__["DonutGaugeBasicExampleComponent"], _donut_donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__["DonutGaugeWithContentExampleComponent"], _donut_donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__["DonutGaugeWithCustomThresholdLabelsExampleComponent"], _donut_donut_with_threshold_marker_toggling_donut_gauge_with_threshold_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_20__["DonutGaugeWithThresholdMarkerTogglingExampleComponent"], _donut_donut_without_threshold_markers_donut_gauge_without_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_19__["DonutGaugeWithoutThresholdMarkersExampleComponent"], _donut_donut_with_thresholds_donut_gauge_with_thresholds_example_component__WEBPACK_IMPORTED_MODULE_14__["DonutGaugeWithThresholdsExampleComponent"], _donut_donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__["DonutGaugeWithThresholdTogglingExampleComponent"], _linear_vertical_basic_vertical_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_18__["VerticalGaugeBasicExampleComponent"], _linear_linear_thickness_adjustment_linear_gauge_thickness_adjustment_example_component__WEBPACK_IMPORTED_MODULE_22__["LinearGaugeThicknessAdjustmentExampleComponent"], _visual_test_vertical_vertical_gauge_tester_component__WEBPACK_IMPORTED_MODULE_11__["VerticalGaugeTesterComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCheckboxModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiFormFieldModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("AVdE");
          }
        }]
      })], ChartDocsGaugeModule);
      /***/
    },

    /***/
    "yWOU":
    /*!************************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types/gauge/linear/horizontal-basic/horizontal-gauge-basic-example.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: HorizontalGaugeBasicExampleComponent */

    /***/
    function yWOU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HorizontalGaugeBasicExampleComponent", function () {
        return HorizontalGaugeBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_horizontal_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./horizontal-gauge-basic-example.component.html */
      "0Cj1");
      /* harmony import */


      var _horizontal_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./horizontal-gauge-basic-example.component.less */
      "ucP/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var HorizontalGaugeBasicExampleComponent = /*#__PURE__*/function () {
        function HorizontalGaugeBasicExampleComponent() {
          _classCallCheck(this, HorizontalGaugeBasicExampleComponent);
        }

        _createClass(HorizontalGaugeBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Setting up the gauge config
            var initialValue = 64;
            this.gaugeConfig = this.getGaugeConfig(initialValue); // Creating the chart assist

            this.chartAssist = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createChartAssist(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal); // Assembling the series

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal); // Updating the chart

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "onValueChange",
          value: function onValueChange(value) {
            // Updating the gauge config
            this.gaugeConfig = this.getGaugeConfig(value); // Updating the series set with the new config

            this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].update(this.seriesSet, this.gaugeConfig); // Updating the chart with the updated series set

            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "getGaugeConfig",
          value: function getGaugeConfig(value) {
            return {
              value: value,
              max: 100
            };
          }
        }]);

        return HorizontalGaugeBasicExampleComponent;
      }();

      HorizontalGaugeBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "horizontal-gauge-basic-example",
        template: _raw_loader_horizontal_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_horizontal_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HorizontalGaugeBasicExampleComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gauge-chart-docs-gauge-module-es5.js.map