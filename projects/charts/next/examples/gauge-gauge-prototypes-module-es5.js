(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-gauge-prototypes-module"], {
    /***/
    "1f+2":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/component-prototype/gauge-component-prototype.component.less ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".radial-gauge__inner-content {\n  font-weight: 600;\n  font-family: \"Comic Sans MS\";\n  font-size: 42px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhdWdlLWNvbXBvbmVudC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6ImdhdWdlLWNvbXBvbmVudC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4ucmFkaWFsLWdhdWdlX19pbm5lci1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogQG51aS1mb250LXdlaWdodC1zZW1pYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCI7XG4gICAgZm9udC1zaXplOiA0MnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "5pWR":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/component-prototype/gauge-component-prototype.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: GaugeComponentPrototypeComponent */

    /***/
    function pWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaugeComponentPrototypeComponent", function () {
        return GaugeComponentPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gauge_component_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gauge-component-prototype.component.html */
      "pz1H");
      /* harmony import */


      var _gauge_component_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gauge-component-prototype.component.less */
      "1f+2");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /** @ignore */


      var GaugeComponentPrototypeComponent = /*#__PURE__*/function () {
        function GaugeComponentPrototypeComponent(_viewContainerRef, overlay, overlayPositionBuilder, scrollStrategyOptions) {
          _classCallCheck(this, GaugeComponentPrototypeComponent);

          this._viewContainerRef = _viewContainerRef;
          this.overlay = overlay;
          this.overlayPositionBuilder = overlayPositionBuilder;
          this.scrollStrategyOptions = scrollStrategyOptions;
          this.value = 42;
          this._thickness = 30;
          this.thresholds = {
            error: 90,
            warning: 65
          };
        }

        _createClass(GaugeComponentPrototypeComponent, [{
          key: "thickness",
          get: function get() {
            return this._thickness;
          },
          set: function set(val) {
            this._thickness = val;

            if (this.positionStrategy) {
              this.positionStrategy.apply();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.templatePortalContent, this._viewContainerRef);
            var positions = [{
              overlayX: "center",
              overlayY: "center",
              originX: "center",
              originY: "center"
            }];
            this.positionStrategy = this.overlayPositionBuilder.flexibleConnectedTo(this.gaugeWithContent.control).withPositions(positions).withFlexibleDimensions(true).withPush(true);
            var overlayRef = this.overlay.create({
              positionStrategy: this.positionStrategy,
              scrollStrategy: this.scrollStrategyOptions.close()
            });
            overlayRef.attach(this.templatePortal);
          }
        }]);

        return GaugeComponentPrototypeComponent;
      }();

      GaugeComponentPrototypeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayPositionBuilder"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ScrollStrategyOptions"]
        }];
      };

      GaugeComponentPrototypeComponent.propDecorators = {
        templatePortalContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ["templatePortalContent"]
        }],
        gaugeWithContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ["withConnectedContent"]
        }]
      };
      GaugeComponentPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "gauge-component-prototype",
        template: _raw_loader_gauge_component_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gauge_component_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ScrollStrategyOptions"]])], GaugeComponentPrototypeComponent);
      /***/
    },

    /***/
    "7xEu":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/chart-prototype/gauge-test-page.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xEu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<charts-test-harness>\n    <div class=\"d-flex\">\n        <radial-gauge-chart-prototype [value]=\"value\" [annularWidth]=\"thickness\" [thresholds]=\"thresholds\" [max]=\"maxValue\"></radial-gauge-chart-prototype>\n        <linear-gauge-vertical-chart-prototype class=\"ml-5\" [value]=\"value\" [thickness]=\"thickness\" [thresholds]=\"thresholds\" [max]=\"maxValue\"></linear-gauge-vertical-chart-prototype>\n        <linear-gauge-horizontal-chart-prototype class=\"ml-5\" [value]=\"value\" [thickness]=\"thickness\" [thresholds]=\"thresholds\" [max]=\"maxValue\"></linear-gauge-horizontal-chart-prototype>\n    </div>\n\n    <div class=\"mb-2\">\n        <label for=\"valueInput\">\n            Value\n        </label>\n        <br />\n        <nui-textbox-number type=\"number\"\n               [(ngModel)]=\"value\"\n               [minValue]=\"0\"\n               [maxValue]=\"maxValue\"\n               customBoxWidth=\"75px\"\n               name=\"valueInput\"></nui-textbox-number>\n    </div>\n    <div class=\"mb-2\">\n        <label for=\"thicknessInput\">\n            Thickness\n        </label>\n        <br />\n        <nui-textbox-number type=\"number\"\n               [(ngModel)]=\"thickness\"\n               [minValue]=\"10\"\n               [maxValue]=\"30\"\n               customBoxWidth=\"75px\"\n               name=\"thicknessInput\"></nui-textbox-number>\n    </div>\n</charts-test-harness>\n";
      /***/
    },

    /***/
    "8O0Z":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/chart-prototype/horizontal/linear-gauge-horizontal-chart-prototype.component.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O0Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "JVTH":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/chart-prototype/radial/radial-gauge-chart-prototype.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JVTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n\n    <nui-chart-donut-content style=\"position: absolute;\"\n                             [plugin]=\"contentPlugin\">\n        <div class=\"h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center\">\n            <div class=\"d-inline-block\" nuiZoomContent [zoomRatio]=\"0.65\">\n                {{value | number:'1.0-0'}}\n            </div>\n            <div class=\"content-label\">Network Latency</div>\n            <div class=\"content-label\">(ms)</div>\n        </div>\n    </nui-chart-donut-content>\n</div>\n";
      /***/
    },

    /***/
    "JqE2":
    /*!*************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/gauge-test-page.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: GaugeTestPageComponent */

    /***/
    function JqE2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaugeTestPageComponent", function () {
        return GaugeTestPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gauge_test_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gauge-test-page.component.html */
      "7xEu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var GaugeTestPageComponent = function GaugeTestPageComponent() {
        _classCallCheck(this, GaugeTestPageComponent);

        this.value = 95;
        this.maxValue = 200;
        this.thickness = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["GAUGE_THICKNESS_DEFAULT"];
        this.thresholds = [{
          value: 100
        }, {
          value: 112
        }, {
          value: 125
        }, {
          value: 150
        }, {
          value: 187
        }, {
          value: 200
        }]; // this.thresholds = new Array(200).fill(null).map((e, i) => ({ value: i }));
        // this.thresholds = [{ value: 187 }/* , { value: 50 }, { value: 75 },
        // { value: 100 }, { value: 125 }, { value: 150 }, { value: 175 }, { value: 200 } */];
      };

      GaugeTestPageComponent.ctorParameters = function () {
        return [];
      };

      GaugeTestPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "gauge-test-page",
        template: _raw_loader_gauge_test_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GaugeTestPageComponent);
      /***/
    },

    /***/
    "Mfry":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/chart-prototype/vertical/linear-gauge-vertical-chart-prototype.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mfry(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "NvWf":
    /*!************************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/horizontal/linear-gauge-horizontal-chart-prototype.component.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: LinearGaugeChartHorizontalPrototypeComponent */

    /***/
    function NvWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearGaugeChartHorizontalPrototypeComponent", function () {
        return LinearGaugeChartHorizontalPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_linear_gauge_horizontal_chart_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./linear-gauge-horizontal-chart-prototype.component.html */
      "8O0Z");
      /* harmony import */


      var _linear_gauge_horizontal_chart_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./linear-gauge-horizontal-chart-prototype.component.less */
      "Va4f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LinearGaugeChartHorizontalPrototypeComponent = /*#__PURE__*/function () {
        function LinearGaugeChartHorizontalPrototypeComponent(gaugeService) {
          _classCallCheck(this, LinearGaugeChartHorizontalPrototypeComponent);

          this.gaugeService = gaugeService;
          this.value = 42;
          this.max = 200;
          this.thickness = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GAUGE_THICKNESS_DEFAULT"];
        }

        _createClass(LinearGaugeChartHorizontalPrototypeComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.thickness && !changes.thickness.firstChange || changes.value && !changes.value.firstChange) {
              if (changes.thickness) {
                this.chartAssist.chart.getGrid().config().dimension.height(this.thickness);
                this.chartAssist.chart.updateDimensions();
              }

              this.chartAssist.update(this.gaugeService.updateSeriesSet(this.value, this.max, this.thresholds, this.seriesSet));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal, this.thickness));
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
            this.seriesSet = this.gaugeService.assembleSeriesSet(this.value, this.max, this.thresholds, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
            this.chartAssist.update(this.seriesSet);
          }
        }]);

        return LinearGaugeChartHorizontalPrototypeComponent;
      }();

      LinearGaugeChartHorizontalPrototypeComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeService"]
        }];
      };

      LinearGaugeChartHorizontalPrototypeComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        thickness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        thresholds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LinearGaugeChartHorizontalPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "linear-gauge-horizontal-chart-prototype",
        template: _raw_loader_linear_gauge_horizontal_chart_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linear_gauge_horizontal_chart_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeService"]])], LinearGaugeChartHorizontalPrototypeComponent);
      /***/
    },

    /***/
    "Va4f":
    /*!**************************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/horizontal/linear-gauge-horizontal-chart-prototype.component.less ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Va4f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVhci1nYXVnZS1ob3Jpem9udGFsLWNoYXJ0LXByb3RvdHlwZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJsaW5lYXItZ2F1Z2UtaG9yaXpvbnRhbC1jaGFydC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uY2hhcnQge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "d3Qa":
    /*!**********************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/vertical/linear-gauge-vertical-chart-prototype.component.less ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d3Qa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVhci1nYXVnZS12ZXJ0aWNhbC1jaGFydC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREoiLCJmaWxlIjoibGluZWFyLWdhdWdlLXZlcnRpY2FsLWNoYXJ0LXByb3RvdHlwZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5cbi5jaGFydCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "iGZy":
    /*!*******************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/gauge-prototypes.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: GaugePrototypesModule */

    /***/
    function iGZy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GaugePrototypesModule", function () {
        return GaugePrototypesModule;
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


      var _chart_prototype_gauge_test_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chart-prototype/gauge-test-page.component */
      "JqE2");
      /* harmony import */


      var _chart_prototype_horizontal_linear_gauge_horizontal_chart_prototype_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./chart-prototype/horizontal/linear-gauge-horizontal-chart-prototype.component */
      "NvWf");
      /* harmony import */


      var _chart_prototype_radial_radial_gauge_chart_prototype_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./chart-prototype/radial/radial-gauge-chart-prototype.component */
      "zT1w");
      /* harmony import */


      var _chart_prototype_vertical_linear_gauge_vertical_chart_prototype_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./chart-prototype/vertical/linear-gauge-vertical-chart-prototype.component */
      "nWyj");
      /* harmony import */


      var _component_prototype_gauge_component_prototype_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./component-prototype/gauge-component-prototype.component */
      "5pWR");

      var routes = [{
        path: "chart",
        component: _chart_prototype_gauge_test_page_component__WEBPACK_IMPORTED_MODULE_7__["GaugeTestPageComponent"],
        data: {
          srlc: {
            hideIndicator: true
          }
        }
      }, {
        path: "component",
        component: _component_prototype_gauge_component_prototype_component__WEBPACK_IMPORTED_MODULE_11__["GaugeComponentPrototypeComponent"],
        data: {
          srlc: {
            hideIndicator: true
          }
        }
      }];

      var GaugePrototypesModule = function GaugePrototypesModule() {
        _classCallCheck(this, GaugePrototypesModule);
      };

      GaugePrototypesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_prototype_gauge_component_prototype_component__WEBPACK_IMPORTED_MODULE_11__["GaugeComponentPrototypeComponent"], _chart_prototype_horizontal_linear_gauge_horizontal_chart_prototype_component__WEBPACK_IMPORTED_MODULE_8__["LinearGaugeChartHorizontalPrototypeComponent"], _chart_prototype_vertical_linear_gauge_vertical_chart_prototype_component__WEBPACK_IMPORTED_MODULE_10__["LinearGaugeChartVerticalPrototypeComponent"], _chart_prototype_radial_radial_gauge_chart_prototype_component__WEBPACK_IMPORTED_MODULE_9__["RadialGaugeChartPrototypeComponent"], _chart_prototype_gauge_test_page_component__WEBPACK_IMPORTED_MODULE_7__["GaugeTestPageComponent"]],
        imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"], _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
      })], GaugePrototypesModule);
      /***/
    },

    /***/
    "lNVS":
    /*!***********************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/radial/radial-gauge-chart-prototype.component.less ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lNVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n  width: 280px;\n  height: 280px;\n}\n.content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlhbC1nYXVnZS1jaGFydC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQURKO0FBSUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFGSiIsImZpbGUiOiJyYWRpYWwtZ2F1Z2UtY2hhcnQtcHJvdG90eXBlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuLmNoYXJ0IHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgaGVpZ2h0OiAyODBweDtcbn1cblxuLmNvbnRlbnQtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLW51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "nWyj":
    /*!********************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/vertical/linear-gauge-vertical-chart-prototype.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: LinearGaugeChartVerticalPrototypeComponent */

    /***/
    function nWyj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearGaugeChartVerticalPrototypeComponent", function () {
        return LinearGaugeChartVerticalPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_linear_gauge_vertical_chart_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./linear-gauge-vertical-chart-prototype.component.html */
      "Mfry");
      /* harmony import */


      var _linear_gauge_vertical_chart_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./linear-gauge-vertical-chart-prototype.component.less */
      "d3Qa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LinearGaugeChartVerticalPrototypeComponent = /*#__PURE__*/function () {
        function LinearGaugeChartVerticalPrototypeComponent(gaugeService) {
          _classCallCheck(this, LinearGaugeChartVerticalPrototypeComponent);

          this.gaugeService = gaugeService;
          this.value = 42;
          this.max = 200;
          this.thickness = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GAUGE_THICKNESS_DEFAULT"];
        }

        _createClass(LinearGaugeChartVerticalPrototypeComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.thickness && !changes.thickness.firstChange || changes.value && !changes.value.firstChange) {
              if (changes.thickness) {
                this.chartAssist.chart.getGrid().config().dimension.width(this.thickness);
                this.chartAssist.chart.updateDimensions();
              }

              this.chartAssist.update(this.gaugeService.updateSeriesSet(this.value, this.max, this.thresholds, this.seriesSet));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical, this.thickness));
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
            this.seriesSet = this.gaugeService.assembleSeriesSet(this.value, this.max, this.thresholds, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
            this.chartAssist.update(this.seriesSet);
          }
        }]);

        return LinearGaugeChartVerticalPrototypeComponent;
      }();

      LinearGaugeChartVerticalPrototypeComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeService"]
        }];
      };

      LinearGaugeChartVerticalPrototypeComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        thickness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        thresholds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LinearGaugeChartVerticalPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "linear-gauge-vertical-chart-prototype",
        template: _raw_loader_linear_gauge_vertical_chart_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linear_gauge_vertical_chart_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeService"]])], LinearGaugeChartVerticalPrototypeComponent);
      /***/
    },

    /***/
    "pz1H":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/component-prototype/gauge-component-prototype.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pz1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-gauge [value]=\"value\" [max]=\"100\" [thickness]=\"thickness\" [thresholds]=\"thresholds\" mode=\"horizontal\"></nui-gauge>\n</div>\n<div class=\"d-flex\">\n    <nui-gauge [value]=\"value\" [max]=\"100\" [thickness]=\"thickness\" [thresholds]=\"thresholds\" mode=\"radial\"></nui-gauge>\n    <nui-gauge [value]=\"value\" [max]=\"100\" [thickness]=\"thickness\" [thresholds]=\"thresholds\" mode=\"radial\" #withConnectedContent></nui-gauge>\n    <nui-gauge [value]=\"value\" [max]=\"100\" [thickness]=\"thickness\" [thresholds]=\"thresholds\" mode=\"radial\"></nui-gauge>\n</div>\n\n<div>\n    <label for=\"valueInput\">\n        Value\n    </label>\n    <br/>\n    <input type=\"range\" min=\"0\" max=\"100\" [(ngModel)]=\"value\" id=\"valueInput\">\n</div>\n\n<div>\n    <label for=\"thicknessInput\">\n        Thickness\n    </label>\n    <br/>\n    <input type=\"range\" min=\"1\" max=\"100\" [(ngModel)]=\"thickness\" id=\"thicknessInput\">\n</div>\n\n<ng-template #templatePortalContent>\n    <span class=\"radial-gauge__inner-content\">\n        {{value}}\n    </span>\n</ng-template>\n";
      /***/
    },

    /***/
    "zT1w":
    /*!*********************************************************************************************************************!*\
      !*** ./examples/components/demo/development/gauge/chart-prototype/radial/radial-gauge-chart-prototype.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: RadialGaugeChartPrototypeComponent */

    /***/
    function zT1w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadialGaugeChartPrototypeComponent", function () {
        return RadialGaugeChartPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_radial_gauge_chart_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./radial-gauge-chart-prototype.component.html */
      "JVTH");
      /* harmony import */


      var _radial_gauge_chart_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./radial-gauge-chart-prototype.component.less */
      "lNVS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var RadialGaugeChartPrototypeComponent = /*#__PURE__*/function () {
        function RadialGaugeChartPrototypeComponent(gaugeService) {
          _classCallCheck(this, RadialGaugeChartPrototypeComponent);

          this.gaugeService = gaugeService;
          this.value = 42;
          this.max = 200;
          this.annularWidth = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GAUGE_THICKNESS_DEFAULT"];
        }

        _createClass(RadialGaugeChartPrototypeComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.annularWidth && !changes.annularWidth.firstChange || changes.value && !changes.value.firstChange) {
              if (changes.annularWidth) {
                this.updateAnnularWidth();
              }

              this.chartAssist.update(this.gaugeService.updateSeriesSet(this.value, this.max, this.thresholds, this.seriesSet));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var grid = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])();
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
            this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
            this.chartAssist.chart.addPlugin(this.contentPlugin);
            var labelConfig = {
              gridMargin: {
                top: 40,
                right: 40,
                bottom: 40,
                left: 40
              }
            };
            this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["RadialGaugeThresholdLabelsPlugin"](labelConfig));
            this.seriesSet = this.gaugeService.assembleSeriesSet(this.value, this.max, this.thresholds, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Radial);
            this.seriesSet = this.gaugeService.setThresholdLabelFormatter(function (d) {
              return "".concat(d, "MS");
            }, this.seriesSet);
            this.updateAnnularWidth();
            this.chartAssist.update(this.seriesSet);
          }
        }, {
          key: "updateAnnularWidth",
          value: function updateAnnularWidth() {
            var _this = this;

            this.seriesSet.forEach(function (series) {
              series.renderer.config.annularWidth = _this.annularWidth;
            });
          }
        }]);

        return RadialGaugeChartPrototypeComponent;
      }();

      RadialGaugeChartPrototypeComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeService"]
        }];
      };

      RadialGaugeChartPrototypeComponent.propDecorators = {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        annularWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        thresholds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RadialGaugeChartPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "radial-gauge-chart-prototype",
        template: _raw_loader_radial_gauge_chart_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_radial_gauge_chart_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeService"]])], RadialGaugeChartPrototypeComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=gauge-gauge-prototypes-module-es5.js.map