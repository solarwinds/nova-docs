(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-events-chart-docs-events-module"], {
    /***/
    "Z/G6":
    /*!************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/events sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function ZG6(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-events.component.html": "5wfK",
        "./chart-docs-events.component.ts": "SjNZ",
        "./chart-docs-events.module.ts": "aZDi",
        "./event-sampler/event-sampler.component.html": "unPA",
        "./event-sampler/event-sampler.component.less": "TdBD",
        "./event-sampler/event-sampler.component.ts": "qSaD",
        "./events-basic/events-basic-example.component.html": "6jeb",
        "./events-basic/events-basic-example.component.ts": "f8zi"
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
      webpackContext.id = "Z/G6";
      /***/
    },

    /***/
    "dEDO":
    /*!***************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/events/chart-docs-events.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ChartDocsEventsComponent */

    /***/
    function dEDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsEventsComponent", function () {
        return ChartDocsEventsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_events_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-events.component.html */
      "5wfK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsEventsComponent = function ChartDocsEventsComponent() {
        _classCallCheck(this, ChartDocsEventsComponent);
      };

      ChartDocsEventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-events",
        template: _raw_loader_chart_docs_events_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsEventsComponent);
      /***/
    },

    /***/
    "jKAp":
    /*!*******************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/events/events-basic/events-basic-example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: EventsBasicExampleComponent */

    /***/
    function jKAp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsBasicExampleComponent", function () {
        return EventsBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_events_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./events-basic-example.component.html */
      "6jeb");
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

      var EventsBasicExampleComponent = /*#__PURE__*/function () {
        function EventsBasicExampleComponent(changeDetectorRef) {
          _classCallCheck(this, EventsBasicExampleComponent);

          this.changeDetectorRef = changeDetectorRef;
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        }

        _createClass(EventsBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

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
            }); // - subscribe to a chosen chart event
            // - unsubscribing is not necessary as the chart will be destroyed when the component used to place it on the page will be destroyed;
            //   the subscription will be unsubscribed automatically

            this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_VALUES_EVENT"]).subscribe(function (event) {
              // process the event
              _this.payload = JSON.stringify(event.data, null, 4); // in case of using a OnPush change detection strategy you need to detectChanges manually as the event is internal to this component and
              // wouldn't cause the UI to update

              _this.changeDetectorRef.detectChanges();
            });
            this.chart.update(seriesSet);
          }
        }]);

        return EventsBasicExampleComponent;
      }();

      EventsBasicExampleComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      };

      EventsBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-events-basic",
        template: _raw_loader_events_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])], EventsBasicExampleComponent);
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
    "pNBX":
    /*!*************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: EventSamplerComponent */

    /***/
    function pNBX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventSamplerComponent", function () {
        return EventSamplerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_event_sampler_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./event-sampler.component.html */
      "unPA");
      /* harmony import */


      var _event_sampler_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-sampler.component.less */
      "wg5y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var lodash_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash/each */
      "xkGU");
      /* harmony import */


      var lodash_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var lodash_zipObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash/zipObject */
      "VJLA");
      /* harmony import */


      var lodash_zipObject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_6__);

      var ChartType;

      (function (ChartType) {
        ChartType["StackedBar"] = "Stacked Bar";
        ChartType["GroupedBar"] = "Grouped Bar";
        ChartType["Line"] = "Line";
      })(ChartType || (ChartType = {}));

      var EventSamplerComponent = /*#__PURE__*/function () {
        function EventSamplerComponent(changeDetector) {
          _classCallCheck(this, EventSamplerComponent);

          this.changeDetector = changeDetector;
          this.parsedEvent = {};
          this.eventFilters = [{
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MOUSE_ACTIVE_EVENT"],
            name: "MOUSE_ACTIVE_EVENT"
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"],
            name: "INTERACTION_VALUES_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_DATA_POINTS_EVENT"],
            name: "INTERACTION_DATA_POINTS_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_DATA_POINT_EVENT"],
            name: "INTERACTION_DATA_POINT_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Hover]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_DATA_POINT_EVENT"],
            name: "HIGHLIGHT_DATA_POINT_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_SERIES_EVENT"],
            name: "HIGHLIGHT_SERIES_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_SERIES_EVENT"],
            name: "INTERACTION_SERIES_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SELECT_DATA_POINT_EVENT"],
            name: "SELECT_DATA_POINT_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click]
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_VIEW_STATUS_EVENT"],
            name: "CHART_VIEW_STATUS_EVENT"
          }, {
            id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SERIES_STATE_CHANGE_EVENT"],
            name: "SERIES_STATE_CHANGE_EVENT",
            interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove]
          }];
          this.selectedEvent = this.eventFilters[0];
          this.selectedInteractionType = "";
          this.chartTypes = [ChartType.GroupedBar, ChartType.StackedBar, ChartType.Line];
          this.categories = ["Q1", "Q2", "Q3", "Q4"];
          this.subCategories = ["down", "critical", "warning", "unknown", "ok", "other"];
          this.values = [[24, 16, 7, 6, 97, 4], [13, 8, 5, 17, 5, 25], [97, 41, 24, 6, 7, 6], [45, 87, 23, 48, 24, 9]];
        }

        _createClass(EventSamplerComponent, [{
          key: "onEventFilterChange",
          value: function onEventFilterChange(selectedEvent) {
            this.selectedEvent = selectedEvent;
            this.selectedInteractionType = this.selectedEvent.interactionTypes ? this.selectedEvent.interactionTypes[0] : "";
          }
        }, {
          key: "onInteractionTypeChange",
          value: function onInteractionTypeChange(type) {
            this.selectedInteractionType = type;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.valueAccessor = function (i, j) {
              return _this2.values[j][i];
            };

            this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_6___default()(this.subCategories, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"])));
            this.updateChartType(this.chartTypes[0]);
          }
        }, {
          key: "updateChartType",
          value: function updateChartType(chartType) {
            this.selectedChartType = chartType;
            this.buildChart();
            this.subscribeToChart();
            this.updateChart();
          }
        }, {
          key: "buildChart",
          value: function buildChart() {
            var _this$getChartAttribu = this.getChartAttributes(this.selectedChartType),
                grid = _this$getChartAttribu.grid,
                accessors = _this$getChartAttribu.accessors,
                renderer = _this$getChartAttribu.renderer,
                scales = _this$getChartAttribu.scales,
                seriesProcessor = _this$getChartAttribu.seriesProcessor;

            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](this.chart);
            this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLabelPlugin"]());
            this.renderer = renderer;
            this.accessors = accessors;
            this.scales = scales;
            this.seriesProcessor = seriesProcessor;
          }
        }, {
          key: "subscribeToChart",
          value: function subscribeToChart() {
            var _this3 = this;

            lodash_each__WEBPACK_IMPORTED_MODULE_5___default()(this.eventFilters, function (filter) {
              _this3.chart.getEventBus().getStream(filter.id).subscribe(function (event) {
                if (_this3.selectedEvent.id === filter.id) {
                  if (!event.data.interactionType || _this3.selectedInteractionType === event.data.interactionType) {
                    recursivelyReplacePropValue(event, "dataSeries", "<< IChartSeries info is available here (replaced in output for brevity) >>");
                    _this3.parsedEvent = event;

                    _this3.changeDetector.markForCheck();
                  }
                }
              });
            });
          }
        }, {
          key: "updateChart",
          value: function updateChart() {
            var seriesSet = this.buildChartSeries(this.categories, this.subCategories, this.valueAccessor); // TODO: Refactor this to be able to pass different types of seriesSet to get rid of the any

            seriesSet = this.seriesProcessor ? this.seriesProcessor(seriesSet, function () {
              return true;
            }) : seriesSet;
            this.chartAssist.update(seriesSet);
          }
        }, {
          key: "buildChartSeries",
          value: function buildChartSeries(categories, subCategories, valueAccessor) {
            var _this4 = this;

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
                accessors: _this4.accessors,
                renderer: _this4.renderer,
                scales: _this4.scales
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

            if (t.seriesProcessor) {
              result = Object.assign(Object.assign({}, result), {
                seriesProcessor: t.seriesProcessor
              });
            }

            return result;
          }
        }, {
          key: "getChartTools",
          value: function getChartTools(chartType) {
            var _this5 = this,
                _chartTools;

            var chartTools = (_chartTools = {}, _defineProperty(_chartTools, ChartType.StackedBar, {
              seriesProcessor: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stackedPreprocessor"],
              gridFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barGrid"],
              rendererFunction: function rendererFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"]({
                  highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarHighlightStrategy"]("x")
                });
              },
              accessorFunction: function accessorFunction() {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barAccessors"])(undefined, _this5.palette.standardColors);
              },
              scaleFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barScales"]
            }), _defineProperty(_chartTools, ChartType.GroupedBar, {
              gridFunction: function gridFunction() {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barGrid"])({
                  grouped: true
                });
              },
              rendererFunction: function rendererFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"]({
                  highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarSeriesHighlightStrategy"]("x")
                });
              },
              accessorFunction: function accessorFunction() {
                var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barAccessors"])({
                  grouped: true
                }, _this5.palette.standardColors);

                accessors.data.category = function (data, i, series, dataSeries) {
                  return [data.category, dataSeries.name];
                };

                return accessors;
              },
              scaleFunction: function scaleFunction() {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barScales"])({
                  grouped: true
                });
              }
            }), _defineProperty(_chartTools, ChartType.Line, {
              gridFunction: function gridFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"]();
              },
              rendererFunction: function rendererFunction() {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]({
                  interactionStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineSelectSeriesInteractionStrategy"](),
                  markerInteraction: {
                    enabled: true,
                    clickable: true
                  }
                });
              },
              accessorFunction: function accessorFunction() {
                var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"](_this5.palette.standardColors);

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
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BandScale"]().fixDomain(_this5.categories),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"]()
                };
              }
            }), _chartTools);
            return chartTools[chartType];
          }
        }]);

        return EventSamplerComponent;
      }();

      EventSamplerComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      EventSamplerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-chart-event-sampler",
        template: _raw_loader_event_sampler_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_event_sampler_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], EventSamplerComponent);

      function recursivelyReplacePropValue(obj, property, replacement) {
        for (var prop in obj) {
          if (prop === property) {
            obj[prop] = replacement;
          } else if (typeof obj[prop] === "object") {
            recursivelyReplacePropValue(obj[prop], property, replacement);
          }
        }
      }
      /***/

    },

    /***/
    "w47B":
    /*!************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/events/chart-docs-events.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ChartDocsEventsModule */

    /***/
    function w47B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsEventsModule", function () {
        return ChartDocsEventsModule;
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


      var _chart_docs_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-events.component */
      "dEDO");
      /* harmony import */


      var _event_sampler_event_sampler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./event-sampler/event-sampler.component */
      "pNBX");
      /* harmony import */


      var _events_basic_events_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./events-basic/events-basic-example.component */
      "jKAp");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_events_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsEventsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _events_basic_events_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["EventsBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "event-sampler",
        component: _event_sampler_event_sampler_component__WEBPACK_IMPORTED_MODULE_6__["EventSamplerComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsEventsModule = function ChartDocsEventsModule() {
        _classCallCheck(this, ChartDocsEventsModule);
      };

      ChartDocsEventsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_events_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsEventsComponent"], _events_basic_events_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["EventsBasicExampleComponent"], _event_sampler_event_sampler_component__WEBPACK_IMPORTED_MODULE_6__["EventSamplerComponent"]],
        imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCheckboxModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("Z/G6");
          }
        }]
      })], ChartDocsEventsModule);
      /***/
    },

    /***/
    "wg5y":
    /*!***************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.less ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wg5y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sampler-output__container {\n  height: 660px;\n  overflow-y: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXNhbXBsZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJldmVudC1zYW1wbGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNhbXBsZXItb3V0cHV0LWNvbnRhaW5lci1oZWlnaHQ6IDY2MHB4O1xuXG4uc2FtcGxlci1vdXRwdXRfX2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBAc2FtcGxlci1vdXRwdXQtY29udGFpbmVyLWhlaWdodDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-events-chart-docs-events-module-es5.js.map