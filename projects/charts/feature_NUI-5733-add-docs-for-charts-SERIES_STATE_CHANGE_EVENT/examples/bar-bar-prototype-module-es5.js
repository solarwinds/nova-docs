(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bar-bar-prototype-module"], {
    /***/
    "Vker":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/bar/stacked-bar/stacked-bar-prototype.component.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vker(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, Mbps</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"true\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.id\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.value}}</span>\n    </div>\n</ng-template>";
      /***/
    },

    /***/
    "j7u1":
    /*!*************************************************************************************************!*\
      !*** ./examples/components/demo/development/bar/stacked-bar/stacked-bar-prototype.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: StackedBarPrototypeComponent */

    /***/
    function j7u1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StackedBarPrototypeComponent", function () {
        return StackedBarPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stacked_bar_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stacked-bar-prototype.component.html */
      "Vker");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__); // eslint-disable-next-line no-restricted-imports


      var StackedBarPrototypeComponent = /*#__PURE__*/function () {
        function StackedBarPrototypeComponent() {
          _classCallCheck(this, StackedBarPrototypeComponent);

          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarTooltipsPlugin"]();
        }

        _createClass(StackedBarPrototypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])()); // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label

            chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            chart.addPlugin(this.tooltipsPlugin); // "stack" is a function that calls data preprocessor for recalculating stacks

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"]);
            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
            }); // const scales = barScales();

            var scales = {
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(1, "day"))
            };

            accessors.data.value = function (data) {
              return data.value;
            };

            accessors.data.category = function (data) {
              return moment__WEBPACK_IMPORTED_MODULE_4___default()(data.time, "YYYY-MM-DD HH:mm:ss").toDate();
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

        return StackedBarPrototypeComponent;
      }();

      StackedBarPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "stacked-bar-prototype",
        template: _raw_loader_stacked_bar_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StackedBarPrototypeComponent);
      /* Chart data */

      function getData() {
        return [{
          "id": "TAMA:1433",
          "data": [{
            "time": "2020-08-29T00:00:00.000-05:00",
            "value": 16.216666666666665
          }, {
            "time": "2020-08-30T00:00:00.000-05:00",
            "value": 14.633333333333333
          }, {
            "time": "2020-08-31T00:00:00.000-05:00",
            "value": 13.816666666666666
          }, {
            "time": "2020-09-01T00:00:00.000-05:00",
            "value": 9.883333333333333
          }, {
            "time": "2020-09-02T00:00:00.000-05:00",
            "value": 2.0166666666666666
          }, {
            "time": "2020-09-03T00:00:00.000-05:00",
            "value": 8.633333333333333
          }, {
            "time": "2020-09-04T00:00:00.000-05:00",
            "value": 9.716666666666667
          }, {
            "time": "2020-09-05T00:00:00.000-05:00",
            "value": 13.183333333333334
          }, {
            "time": "2020-09-06T00:00:00.000-05:00",
            "value": 13.216666666666667
          }, {
            "time": "2020-09-07T00:00:00.000-05:00",
            "value": 12.566666666666666
          }, {
            "time": "2020-09-08T00:00:00.000-05:00",
            "value": 12.483333333333333
          }, {
            "time": "2020-09-09T00:00:00.000-05:00",
            "value": 12.633333333333333
          }, {
            "time": "2020-09-10T00:00:00.000-05:00",
            "value": 10.85
          }, {
            "time": "2020-09-11T00:00:00.000-05:00",
            "value": 7.716666666666667
          }]
        }, {
          "id": "DPAPOST114EDBOR.IGNITE.LOCAL:5444",
          "data": [//     {
          //     "time": "2020-08-29T00:00:00.000-05:00",
          //     "value": 5.1,
          // }, {
          //     "time": "2020-08-30T00:00:00.000-05:00",
          //     "value": 1.6333333333333333,
          // }, {
          //     "time": "2020-08-31T00:00:00.000-05:00",
          //     "value": 14.633333333333333,
          // },
          {
            "time": "2020-09-01T00:00:00.000-05:00",
            "value": 15.983333333333333
          }, {
            "time": "2020-09-02T00:00:00.000-05:00",
            "value": 3.95
          }, {
            "time": "2020-09-03T00:00:00.000-05:00",
            "value": 3.033333333333333
          }, {
            "time": "2020-09-04T00:00:00.000-05:00",
            "value": 5.233333333333333
          }, {
            "time": "2020-09-05T00:00:00.000-05:00",
            "value": 1.6666666666666667
          }, {
            "time": "2020-09-06T00:00:00.000-05:00",
            "value": 3.4166666666666665
          }, {
            "time": "2020-09-07T00:00:00.000-05:00",
            "value": 1.1166666666666667
          }, {
            "time": "2020-09-08T00:00:00.000-05:00",
            "value": 1.25
          }, {
            "time": "2020-09-09T00:00:00.000-05:00",
            "value": 5.5
          }]
        }, {
          "id": "ORCL_DPAORA11ASM",
          "data": [{
            "time": "2020-08-29T00:00:00.000-05:00",
            "value": 2.15
          }, {
            "time": "2020-08-30T00:00:00.000-05:00",
            "value": 2.4
          }, {
            "time": "2020-08-31T00:00:00.000-05:00",
            "value": 6.666666666666667
          }, {
            "time": "2020-09-01T00:00:00.000-05:00",
            "value": 4.866666666666666
          }, {
            "time": "2020-09-02T00:00:00.000-05:00",
            "value": 0.21666666666666667
          }, {
            "time": "2020-09-03T00:00:00.000-05:00",
            "value": 0.65
          }, {
            "time": "2020-09-04T00:00:00.000-05:00",
            "value": 0.6333333333333333
          }, {
            "time": "2020-09-05T00:00:00.000-05:00",
            "value": 2
          }, {
            "time": "2020-09-06T00:00:00.000-05:00",
            "value": 1.7333333333333334
          }, {
            "time": "2020-09-07T00:00:00.000-05:00",
            "value": 3.2333333333333334
          }, {
            "time": "2020-09-08T00:00:00.000-05:00",
            "value": 2.95
          }, {
            "time": "2020-09-09T00:00:00.000-05:00",
            "value": 2
          }, {
            "time": "2020-09-10T00:00:00.000-05:00",
            "value": 1.7
          }, {
            "time": "2020-09-11T00:00:00.000-05:00",
            "value": 1.4833333333333334
          }]
        }, {
          "id": "LUDWIG",
          "data": [{
            "time": "2020-08-29T00:00:00.000-05:00",
            "value": 2.05
          }, {
            "time": "2020-08-30T00:00:00.000-05:00",
            "value": 2.1666666666666665
          }, {
            "time": "2020-08-31T00:00:00.000-05:00",
            "value": 2.1166666666666667
          }, {
            "time": "2020-09-01T00:00:00.000-05:00",
            "value": 1.3166666666666667
          }, {
            "time": "2020-09-02T00:00:00.000-05:00",
            "value": 0.4
          }, {
            "time": "2020-09-03T00:00:00.000-05:00",
            "value": 1.2833333333333334
          }, {
            "time": "2020-09-04T00:00:00.000-05:00",
            "value": 1.4
          }, {
            "time": "2020-09-05T00:00:00.000-05:00",
            "value": 2.1166666666666667
          }, {
            "time": "2020-09-06T00:00:00.000-05:00",
            "value": 2.0166666666666666
          }, {
            "time": "2020-09-07T00:00:00.000-05:00",
            "value": 2.15
          }, {
            "time": "2020-09-08T00:00:00.000-05:00",
            "value": 1.95
          }, {
            "time": "2020-09-09T00:00:00.000-05:00",
            "value": 1.8833333333333333
          }, {
            "time": "2020-09-10T00:00:00.000-05:00",
            "value": 1.7166666666666666
          }, {
            "time": "2020-09-11T00:00:00.000-05:00",
            "value": 1
          }]
        }, {
          "id": "LUDWIG-TWO",
          "data": [{
            "time": "2020-08-29T00:00:00.000-05:00",
            "value": 2.5
          }, {
            "time": "2020-08-30T00:00:00.000-05:00",
            "value": 2.2666666666666665
          }, // {
          //     "time": "2020-08-31T00:00:00.000-05:00",
          //     "value": 2.7166666666666667,
          // }, {
          //     "time": "2020-09-01T00:00:00.000-05:00",
          //     "value": 2.3166666666666667,
          // }, {
          //     "time": "2020-09-02T00:00:00.000-05:00",
          //     "value": 1.4,
          // }, {
          //     "time": "2020-09-03T00:00:00.000-05:00",
          //     "value": 1.2833333333333334,
          // },
          {
            "time": "2020-09-04T00:00:00.000-05:00",
            "value": 1.001
          }, {
            "time": "2020-09-05T00:00:00.000-05:00",
            "value": 2.2166666666666667
          }, {
            "time": "2020-09-06T00:00:00.000-05:00",
            "value": 2.4166666666666666
          }, {
            "time": "2020-09-07T00:00:00.000-05:00",
            "value": 2.45
          }, {
            "time": "2020-09-08T00:00:00.000-05:00",
            "value": 1.45
          }, {
            "time": "2020-09-09T00:00:00.000-05:00",
            "value": 1.9833333333333333
          }, {
            "time": "2020-09-10T00:00:00.000-05:00",
            "value": 1.6166666666666666
          }, {
            "time": "2020-09-11T00:00:00.000-05:00",
            "value": 1.9
          }]
        }, {
          "id": "DPAORA10_DPAORA10",
          "data": [{
            "time": "2020-08-29T00:00:00.000-05:00",
            "value": 2.55
          }, {
            "time": "2020-08-30T00:00:00.000-05:00",
            "value": 2.6333333333333333
          }, {
            "time": "2020-08-31T00:00:00.000-05:00",
            "value": 2.8666666666666667
          }, {
            "time": "2020-09-01T00:00:00.000-05:00",
            "value": 1.1
          }, {
            "time": "2020-09-02T00:00:00.000-05:00",
            "value": 0.38333333333333336
          }, {
            "time": "2020-09-03T00:00:00.000-05:00",
            "value": 0.8
          }, {
            "time": "2020-09-04T00:00:00.000-05:00",
            "value": 1.1333333333333333
          }, {
            "time": "2020-09-05T00:00:00.000-05:00",
            "value": 1.0833333333333333
          }]
        }];
      }
      /***/

    },

    /***/
    "pO+Z":
    /*!**************************************************************************!*\
      !*** ./examples/components/demo/development/bar/bar-prototype.module.ts ***!
      \**************************************************************************/

    /*! exports provided: BarPrototypeModule */

    /***/
    function pOZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BarPrototypeModule", function () {
        return BarPrototypeModule;
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


      var _stacked_bar_stacked_bar_prototype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./stacked-bar/stacked-bar-prototype.component */
      "j7u1");

      var routes = [{
        path: "stacked-bar",
        component: _stacked_bar_stacked_bar_prototype_component__WEBPACK_IMPORTED_MODULE_6__["StackedBarPrototypeComponent"]
      }];

      var BarPrototypeModule = function BarPrototypeModule() {
        _classCallCheck(this, BarPrototypeModule);
      };

      BarPrototypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stacked_bar_stacked_bar_prototype_component__WEBPACK_IMPORTED_MODULE_6__["StackedBarPrototypeComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDividerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], BarPrototypeModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bar-bar-prototype-module-es5.js.map