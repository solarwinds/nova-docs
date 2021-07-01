(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spark-spark-prototype-module"], {
    /***/
    "K6k8":
    /*!*************************************************************************************************!*\
      !*** ./examples/components/demo/development/spark/spark-prototype/spark-prototype.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: SparkPrototypeComponent */

    /***/
    function K6k8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkPrototypeComponent", function () {
        return SparkPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spark_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spark-prototype.component.html */
      "XjM0");
      /* harmony import */


      var _spark_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spark-prototype.component.less */
      "wxIz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var _data_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../data-generator */
      "kBc7");
      /**
       * This is here just to test a prototype of an angular component that will use Nova Charts
       */


      var SparkPrototypeComponent = /*#__PURE__*/function () {
        function SparkPrototypeComponent() {
          _classCallCheck(this, SparkPrototypeComponent);

          this.colorPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS1"]);
          this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_MARKERS"]);
          this.sparkXScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]();
        }

        _createClass(SparkPrototypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sparkLineRenderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]();

            this.sparkXScale.formatters.tick = function (value) {
              return Math.round(value).toString();
            };

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SparkChartAssist"]();
            this.update();
          }
        }, {
          key: "update",
          value: function update() {
            this.chartAssist.updateSparks(this.generateSparkSeriesSet(Math.floor(Math.random() * 6 + 1)));
          }
        }, {
          key: "generateSparkSeriesSet",
          value: function generateSparkSeriesSet(numSparks) {
            var sparks = [];
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"](this.colorPalette.standardColors, this.markers);

            for (var i = 0; i < numSparks; ++i) {
              var sparkYScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]();

              sparkYScale.formatters.value = function (v) {
                return Number(v).toPrecision(4);
              };

              var sparkScales = {
                x: this.sparkXScale,
                y: sparkYScale
              };
              sparks.push({
                id: "".concat(i),
                chartSeriesSet: [{
                  id: "spark-series-".concat(i + 1),
                  name: "Spark Series ".concat(i + 1),
                  accessors: accessors,
                  data: _data_generator__WEBPACK_IMPORTED_MODULE_5__["DataGenerator"].mockLineData(10),
                  scales: sparkScales,
                  renderer: this.sparkLineRenderer
                }, {
                  id: "spark-series-".concat(i + 1, "-b"),
                  name: "Spark Series ".concat(i + 1, "-b"),
                  accessors: accessors,
                  data: _data_generator__WEBPACK_IMPORTED_MODULE_5__["DataGenerator"].mockLineData(10),
                  scales: sparkScales,
                  renderer: this.sparkLineRenderer
                }]
              });
            }

            return sparks;
          }
        }]);

        return SparkPrototypeComponent;
      }();

      SparkPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-spark-prototype",
        template: _raw_loader_spark_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spark_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SparkPrototypeComponent);
      /***/
    },

    /***/
    "XjM0":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/spark/spark-prototype/spark-prototype.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XjM0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button nui-button\n        (click)=\"update()\"\n        type=\"button\">Refresh\n</button>\n<div class=\"spark-container mt-5 p-3\">\n    <div *ngFor=\"let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn\">\n        <div class=\"d-flex\">\n            <nui-chart class=\"w-100\" [chart]=\"spark.chart\" nuiChartCollectionId=\"1\"></nui-chart>\n            <div class=\"d-flex flex-column pl-2\">\n                <nui-legend-series [interactive]=\"false\"\n                                   [active]=\"chartAssist.isLegendActive\"\n                                   [descriptionPrimary]=\"spark.chartSeriesSet[0].name\">\n                    <nui-rich-legend-tile unitLabel=\"sec\"\n                                          [value]=\"chartAssist.getHighlightedValue(spark.chartSeriesSet[0], 'y', 'value')\"\n                                          [backgroundColor]=\"colorPalette.standardColors.get(spark.chartSeriesSet[0].id)\"\n                                          [color]=\"colorPalette.textColors.get(spark.chartSeriesSet[0].id)\">\n                        <nui-chart-marker [marker]=\"markers.get(spark.chartSeriesSet[0].id)\"\n                                          [color]=\"colorPalette.standardColors.get(spark.chartSeriesSet[0].id)\"\n                                          rightEdge>\n                        </nui-chart-marker>\n                    </nui-rich-legend-tile>\n                </nui-legend-series>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "pim5":
    /*!******************************************************************************!*\
      !*** ./examples/components/demo/development/spark/spark-prototype.module.ts ***!
      \******************************************************************************/

    /*! exports provided: SparkPrototypeModule */

    /***/
    function pim5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SparkPrototypeModule", function () {
        return SparkPrototypeModule;
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


      var _spark_prototype_spark_prototype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./spark-prototype/spark-prototype.component */
      "K6k8");

      var routes = [{
        path: "",
        component: _spark_prototype_spark_prototype_component__WEBPACK_IMPORTED_MODULE_6__["SparkPrototypeComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var SparkPrototypeModule = function SparkPrototypeModule() {
        _classCallCheck(this, SparkPrototypeModule);
      };

      SparkPrototypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_spark_prototype_spark_prototype_component__WEBPACK_IMPORTED_MODULE_6__["SparkPrototypeComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], SparkPrototypeModule);
      /***/
    },

    /***/
    "wxIz":
    /*!***************************************************************************************************!*\
      !*** ./examples/components/demo/development/spark/spark-prototype/spark-prototype.component.less ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wxIz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".spark-container {\n  width: 500px;\n  box-shadow: 2px 2px 10px -2px black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwYXJrLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtBQUFSIiwiZmlsZSI6InNwYXJrLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFyayB7XG4gICAgJi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAtMnB4IGJsYWNrO1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=spark-spark-prototype-module-es5.js.map