(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-switch-type-switch-example-module"], {
    /***/
    "Mtx1":
    /*!*********************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/type-switch/one-dimensional-data-example/one-dimensional-data.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: OneDimensionalDataExampleComponent */

    /***/
    function Mtx1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OneDimensionalDataExampleComponent", function () {
        return OneDimensionalDataExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_one_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./one-dimensional-data.example.component.html */
      "PxfP");
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

      var OneDimensionalDataExampleComponent = /*#__PURE__*/function () {
        function OneDimensionalDataExampleComponent() {
          _classCallCheck(this, OneDimensionalDataExampleComponent);

          this.chartTypes = ["horizontal bar", "vertical bar", "pie", "donut"];
          this.chartType = this.chartTypes[0];
          this.categories = ["down", "critical", "warning", "unknown", "ok", "other"];
          this.iconNames = ["down", "critical", "warning", "unknown", "up", "unmanaged"];
          this.values = [24, 16, 7, 6, 97, 4];
          this.iconMap = lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.categories, this.iconNames.map(function (n) {
            return "status_".concat(n);
          }));
          this.colorProvider = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.categories, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"]));
        }

        _createClass(OneDimensionalDataExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateChartType();
          }
        }, {
          key: "updateChartType",
          value: function updateChartType() {
            this.buildChart();
            this.chartAssist.chart.updateDimensions();
            this.updateChart();
          }
        }, {
          key: "buildChart",
          value: function buildChart() {
            this.donutContentPlugin = undefined;

            switch (this.chartType) {
              case "horizontal bar":
                {
                  this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])({
                    horizontal: true
                  })));
                  break;
                }

              case "vertical bar":
                {
                  this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])({
                    horizontal: false
                  })));
                  break;
                }

              case "pie":
                {
                  this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
                  break;
                }

              case "donut":
                {
                  this.donutContentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartDonutContentPlugin"]();
                  this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
                  this.chartAssist.chart.addPlugin(this.donutContentPlugin);
                  break;
                }
            }
          }
        }, {
          key: "getRenderer",
          value: function getRenderer() {
            switch (this.chartType) {
              case "horizontal bar":
              case "vertical bar":
                {
                  return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
                }

              case "pie":
                {
                  return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PieRenderer"]();
                }

              case "donut":
                {
                  return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"]();
                }
            }
          }
        }, {
          key: "updateChart",
          value: function updateChart() {
            var accessors = this.getAccessors();
            var renderer = this.getRenderer();
            var scales = this.getScales();

            if (!accessors || !renderer || !scales) {
              throw new Error("Accessors, renderer or scales are unavailable");
            }

            this.chartAssist.update(this.getChartAssistSeries(this.categories, this.values, accessors, renderer, scales));
          }
        }, {
          key: "getScales",
          value: function getScales() {
            var bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
            var linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
            linearScale.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 0]);

            switch (this.chartType) {
              case "horizontal bar":
                return {
                  x: linearScale,
                  y: bandScale
                };

              case "vertical bar":
                return {
                  x: bandScale,
                  y: linearScale
                };

              case "pie":
              case "donut":
                {
                  return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
                }
            }
          }
        }, {
          key: "getAccessors",
          value: function getAccessors() {
            switch (this.chartType) {
              case "horizontal bar":
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["HorizontalBarAccessors"](this.colorProvider);

              case "vertical bar":
                {
                  return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["VerticalBarAccessors"](this.colorProvider);
                }

              case "pie":
              case "donut":
                {
                  var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
                  accessors.series.color = this.colorProvider.get;
                  return accessors;
                }
            }

            return;
          }
        }, {
          key: "getChartAssistSeries",
          value: function getChartAssistSeries(categories, values, accessors, renderer, scales) {
            return categories.map(function (category, i) {
              var value = values[i] || 0;
              return {
                id: category,
                data: [{
                  category: category,
                  value: value
                }],
                accessors: accessors,
                renderer: renderer,
                scales: scales
              };
            });
          }
        }]);

        return OneDimensionalDataExampleComponent;
      }();

      OneDimensionalDataExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-one-dimensional-data-example",
        template: _raw_loader_one_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], OneDimensionalDataExampleComponent);
      /***/
    },

    /***/
    "PxfP":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/type-switch/one-dimensional-data-example/one-dimensional-data.example.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PxfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\" style=\"position: relative;\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n        <ng-container *ngIf=\"donutContentPlugin\">\n            <nui-chart-donut-content [plugin]=\"donutContentPlugin\">\n                <div class=\"nui-text-page\">57</div>\n                <div class=\"nui-text-secondary\">donuts</div>\n            </nui-chart-donut-content>\n        </ng-container>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               descriptionPrimary=\"{{legendSeries.id | titlecase}}\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"legendSeries.data[0]?.value\"\n                                      backgroundColor=\"transparent\">\n                </nui-rich-legend-tile>\n                <nui-icon [icon]=\"iconMap[legendSeries.id]\"></nui-icon>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-radio-group class=\"nui-radio-group-inline\"\n                         [(value)]=\"chartType\"\n                         (valueChange)=\"updateChartType()\">\n            <nui-radio *ngFor=\"let type of chartTypes\"\n                       [value]=\"type\">\n                {{type | titlecase}}\n            </nui-radio>\n        </nui-radio-group>\n    </div>\n</div>\n\n";
      /***/
    },

    /***/
    "W2zq":
    /*!*********************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/type-switch/two-dimensional-data-example/two-dimensional-data.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: TwoDimensionalDataExampleComponent */

    /***/
    function W2zq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoDimensionalDataExampleComponent", function () {
        return TwoDimensionalDataExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_two_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./two-dimensional-data.example.component.html */
      "hzus");
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

      var ChartType;

      (function (ChartType) {
        ChartType["StackedBar"] = "stacked bar";
        ChartType["GroupedBar"] = "grouped bar";
        ChartType["Line"] = "line";
      })(ChartType || (ChartType = {}));

      var TwoDimensionalDataExampleComponent = /*#__PURE__*/function () {
        function TwoDimensionalDataExampleComponent() {
          _classCallCheck(this, TwoDimensionalDataExampleComponent);

          this.chartTypes = [ChartType.StackedBar, ChartType.GroupedBar, ChartType.Line];
          this.chartType = this.chartTypes[0];
          this.mainCategoryOptions = ["quarters", "statuses"];
          this.mainCategory = this.mainCategoryOptions[0];
          this.statuses = ["down", "critical", "warning", "unknown", "ok", "other"];
          this.quarters = ["Q1", "Q2", "Q3", "Q4"];
          this.iconNames = ["down", "critical", "warning", "unknown", "up", "unmanaged"];
          this.values = [[24, 16, 7, 6, 97, 4], [13, 8, 5, 17, 5, 25], [97, 41, 24, 6, 7, 6], [45, 87, 23, 48, 24, 9]];
          this.iconMap = lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.statuses, this.iconNames.map(function (n) {
            return "status_".concat(n);
          }));
        }

        _createClass(TwoDimensionalDataExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateMainCategory();
          }
        }, {
          key: "updateMainCategory",
          value: function updateMainCategory() {
            var _this = this;

            var statusPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.statuses, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"])));
            var standardPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
            var groupByQuarter = this.mainCategory === this.mainCategoryOptions[0];
            this.categories = groupByQuarter ? this.statuses : this.quarters;
            this.subCategories = groupByQuarter ? this.quarters : this.statuses;
            this.valueAccessor = groupByQuarter ? function (i, j) {
              return _this.values[i][j];
            } : function (i, j) {
              return _this.values[j][i];
            };
            this.palette = groupByQuarter ? standardPalette : statusPalette;
            this.updateChartType();
          }
        }, {
          key: "updateChartType",
          value: function updateChartType() {
            this.buildChart();
            this.updateChart();
          }
        }, {
          key: "buildChart",
          value: function buildChart() {
            var _this$getChartAttribu = this.getChartAttributes(this.chartType),
                grid = _this$getChartAttribu.grid,
                accessors = _this$getChartAttribu.accessors,
                renderer = _this$getChartAttribu.renderer,
                scales = _this$getChartAttribu.scales,
                preprocessor = _this$getChartAttribu.preprocessor;

            this.renderer = renderer;
            this.accessors = accessors;
            this.scales = scales;
            var chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](grid);
            chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, preprocessor, this.palette);

            if (this.chartType === ChartType.StackedBar) {
              this.chartAssist.seriesProcessor = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"];
            }
          }
        }, {
          key: "updateChart",
          value: function updateChart() {
            this.chartAssist.update(this.buildChartSeries(this.categories, this.subCategories, this.valueAccessor));
          }
        }, {
          key: "buildChartSeries",
          value: function buildChartSeries(categories, subCategories, valueAccessor) {
            var _this2 = this;

            return subCategories.map(function (subCategory, i) {
              return {
                id: subCategory,
                name: subCategory,
                data: categories.map(function (xCategory, j) {
                  return {
                    category: xCategory,
                    value: valueAccessor(i, j) || 0
                  };
                }),
                accessors: _this2.accessors,
                renderer: _this2.renderer,
                scales: _this2.scales
              };
            });
          }
        }, {
          key: "getChartAttributes",
          value: function getChartAttributes(chartType) {
            var t = this.getChartTools(chartType);
            var result = {
              grid: t.gridFunction(),
              accessors: t.accessorFunction(),
              renderer: t.rendererFunction(),
              scales: t.scaleFunction()
            };

            if (t.preprocessor) {
              result.preprocessor = t.preprocessor;
            }

            return result;
          }
        }, {
          key: "getChartTools",
          value: function getChartTools(chartType) {
            var _this3 = this,
                _chartTools;

            var chartTools = (_chartTools = {}, _defineProperty(_chartTools, ChartType.StackedBar, {
              preprocessor: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"],
              gridFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"],
              rendererFunction: function rendererFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
                  highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
                });
              },
              accessorFunction: function accessorFunction() {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(undefined, _this3.palette.standardColors);
              },
              scaleFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"]
            }), _defineProperty(_chartTools, ChartType.GroupedBar, {
              gridFunction: function gridFunction() {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])({
                  grouped: true
                });
              },
              rendererFunction: function rendererFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({
                  highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x")
                });
              },
              accessorFunction: function accessorFunction() {
                var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])({
                  grouped: true
                }, _this3.palette.standardColors);

                accessors.data.category = function (data, i, series, dataSeries) {
                  return [data.category, dataSeries.name];
                };

                return accessors;
              },
              scaleFunction: function scaleFunction() {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])({
                  grouped: true
                });
              }
            }), _defineProperty(_chartTools, ChartType.Line, {
              gridFunction: function gridFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]();
              },
              rendererFunction: function rendererFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
              },
              accessorFunction: function accessorFunction() {
                var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](_this3.palette.standardColors);

                accessors.data.x = function (d) {
                  return d.category;
                };

                accessors.data.y = function (d) {
                  return d.value;
                };

                accessors.data.value = function (d) {
                  return d.value;
                };

                return accessors;
              },
              scaleFunction: function scaleFunction() {
                return {
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_this3.categories),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                };
              }
            }), _chartTools);
            return chartTools[chartType];
          }
        }]);

        return TwoDimensionalDataExampleComponent;
      }();

      TwoDimensionalDataExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-two-dimensional-data-example",
        template: _raw_loader_two_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TwoDimensionalDataExampleComponent);
      /***/
    },

    /***/
    "dLxB":
    /*!****************************************************************************************!*\
      !*** ./examples/components/demo/development/type-switch/type-switch-example.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: TypeSwitchExampleModule */

    /***/
    function dLxB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypeSwitchExampleModule", function () {
        return TypeSwitchExampleModule;
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


      var _one_dimensional_data_example_one_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./one-dimensional-data-example/one-dimensional-data.example.component */
      "Mtx1");
      /* harmony import */


      var _two_dimensional_data_example_two_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./two-dimensional-data-example/two-dimensional-data.example.component */
      "W2zq");

      var routes = [{
        path: "1d",
        component: _one_dimensional_data_example_one_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_6__["OneDimensionalDataExampleComponent"]
      }, {
        path: "2d",
        component: _two_dimensional_data_example_two_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_7__["TwoDimensionalDataExampleComponent"]
      }];

      var TypeSwitchExampleModule = function TypeSwitchExampleModule() {
        _classCallCheck(this, TypeSwitchExampleModule);
      };

      TypeSwitchExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_one_dimensional_data_example_one_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_6__["OneDimensionalDataExampleComponent"], _two_dimensional_data_example_two_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_7__["TwoDimensionalDataExampleComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiRadioModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], TypeSwitchExampleModule);
      /***/
    },

    /***/
    "hzus":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/type-switch/two-dimensional-data-example/two-dimensional-data.example.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hzus(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h3>\n    Legend by\n    <nui-radio-group class=\"nui-radio-group-inline\"\n                     [(value)]=\"mainCategory\"\n                     (valueChange)=\"updateMainCategory()\">\n        <nui-radio *ngFor=\"let category of mainCategoryOptions\"\n                   [value]=\"category\">\n            {{category | titlecase}}\n        </nui-radio>\n    </nui-radio-group>\n</h3>\n<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               descriptionPrimary=\"{{legendSeries.id | titlecase}}\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"accessors.data['value'](legendSeries.data[0], 0, null, null)\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                </nui-rich-legend-tile>\n                <nui-icon [icon]=\"iconMap[legendSeries.id]\" *ngIf=\"iconMap[legendSeries.id]\" class=\"mt-1 ml-3\"></nui-icon>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-radio-group class=\"nui-radio-group-inline\"\n                         [(value)]=\"chartType\"\n                         (valueChange)=\"updateChartType()\">\n            <nui-radio *ngFor=\"let type of chartTypes\"\n                       [value]=\"type\">\n                {{type | titlecase}}\n            </nui-radio>\n        </nui-radio-group>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=type-switch-type-switch-example-module-es5.js.map