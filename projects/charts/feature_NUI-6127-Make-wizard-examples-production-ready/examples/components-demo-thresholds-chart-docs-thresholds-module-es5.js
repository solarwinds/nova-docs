(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-thresholds-chart-docs-thresholds-module"], {
    /***/
    "/Odg":
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component.ts ***!
      \***********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Odg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { ISimpleThresholdZone } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-thresholds-summary-test-harness\",\n    templateUrl: \"./thresholds-summary-test-harness.component.html\",\n})\nexport class ThresholdsSummaryTestHarnessComponent implements OnInit {\n    public data = { \"series-1\": [10, 30, 70, 30, 10], \"series-2\": [0, 40, 60, 40, 0] };\n    public zones: ISimpleThresholdZone[] = [\n        { status: \"error\", start: 50 },\n        { status: \"warning\", start: 20, end: 50 },\n    ];\n    public startDate = moment([2016, 11, 25, 15, 14, 29]); // \"2016-12-25T15:14:29.000Z\"\n\n    public ngOnInit() {\n    }\n\n    public dataChanged(value: string) {\n        this.data = this.validateInput(value) || this.data;\n    }\n\n    public zonesChanged(value: string) {\n        this.zones = this.validateInput(value) || this.zones;\n    }\n\n    private validateInput(value: string) {\n        let validatedInput: any;\n        try {\n            validatedInput = JSON.parse(value);\n        } catch {\n        }\n        return validatedInput;\n    }\n\n}\n";
      /***/
    },

    /***/
    "15el":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-spark/thresholds-spark.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function el(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, CHART_MARKERS, CHART_PALETTE_CS1, CHART_PALETTE_CS_S, getColorValueByName, IChartSeries, ILineAccessors,\n    LineAccessors, LinearScale, LineRenderer, MappedValueProvider, SequentialChartMarkerProvider, SequentialColorProvider,\n    SparkChartAssist, StatusAccessors, ThresholdsService, TimeScale,\n} from \"@nova-ui/charts\";\nimport { rgb } from \"d3-color\";\nimport get from \"lodash/get\";\nimport moment, { Duration, Moment } from \"moment/moment\";\n\nenum Status {\n    Error = \"error\",\n    Warning = \"warning\",\n}\n\n@Component({\n    selector: \"nui-thresholds-spark-example\",\n    templateUrl: \"./thresholds-spark.example.component.html\",\n})\nexport class ThresholdsSparkExampleComponent implements OnInit {\n    public chartAssist: SparkChartAssist;\n    public statusBgColors = new MappedValueProvider({\n        [Status.Error]: addOpacity(CHART_PALETTE_CS_S[1], 0.2),\n        [Status.Warning]: addOpacity(CHART_PALETTE_CS_S[2], 0.3),\n    }, \"transparent\");\n    public statusIcons = { [Status.Error]: \"status_critical\", [Status.Warning]: \"status_warning\" };\n\n    private renderer: LineRenderer;\n    private accessors: LineAccessors;\n    private xScale = new TimeScale();\n\n    constructor(private thresholdsService: ThresholdsService) {\n    }\n\n    public ngOnInit() {\n        this.chartAssist = new SparkChartAssist();\n        this.renderer = new LineRenderer();\n        this.accessors = new LineAccessors(new SequentialColorProvider([CHART_PALETTE_CS1[0]]), new SequentialChartMarkerProvider([CHART_MARKERS[0]]));\n        this.accessors.data.status = (d) => (get(d, \"__thresholds.status\"));\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getLineSeries(this.xScale, this.renderer, this.accessors);\n\n        // Zone definitions tell the threshold service where threshold zones begin and end\n        const zoneDefinitions = getZoneDefinitions();\n\n        const sparks = seriesSet.map(s => {\n            // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that\n            // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing\n            // start or end value indicates an infinite zone.)\n            // Those values are then converted into a set of data series in this step.\n            const zones = this.thresholdsService.getThresholdZones(s, zoneDefinitions, this.statusBgColors);\n\n            // Backgrounds use the StatusBarRenderer which requires a special set of scales.\n            // Note that the x scale is shared between the foreground series and the background series.\n            // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN\n            const bgScales = { x: s.scales.x, y: new BandScale().fixDomain(StatusAccessors.STATUS_DOMAIN) };\n\n            // This injects threshold data into every data point of the source series. It is important, because later we can\n            // access related threshold information from many different places such as the legend.\n            this.thresholdsService.injectThresholdsData(s, zones);\n            // We can use the thresholds service to create the background series for each spark\n            const backgrounds = this.thresholdsService.getBackgrounds(s, zones, bgScales, this.statusBgColors);\n\n            return {\n                id: s.id,\n                chartSeriesSet: [s, backgrounds],\n            };\n        });\n\n        this.chartAssist.updateSparks(sparks);\n    }\n}\n\n/* Chart data */\nfunction getZoneDefinitions() {\n    return [\n        { status: Status.Error, start: 90 },\n        { status: Status.Warning, start: 70, end: 90 },\n    ];\n}\n\nfunction getLineSeries(xScale: TimeScale, renderer: LineRenderer, accessors: LineAccessors): IChartSeries<ILineAccessors>[] {\n    const baseDate = moment([2016, 11, 25]);\n    const interval = moment.duration(1, \"hours\");\n    const series = [\n        {\n            id: \"shared-pool-size\",\n            name: \"Shared pool size\",\n            units: \"MB\",\n            values: [67, 16, 3, 56, 26, 68, 74, 45, 54, 81, 13, 90, 72, 61, 97, 32, 64, 22, 60, 11, 53, 77, 88, 49, 66],\n        },\n        {\n            id: \"buffer-cache-size\",\n            name: \"Buffer cache size\",\n            units: \"MB\",\n            values: [5, 15, 52, 75, 64, 74, 6, 24, 100, 26, 91, 38, 4, 45, 93, 44, 59, 48, 99, 96, 53, 72, 32, 69, 27],\n        },\n        {\n            id: \"pga-cache-size\",\n            name: \"PGA cache size\",\n            units: \"MB\",\n            values: [83, 21, 43, 8, 96, 100, 5, 53, 14, 20, 82, 23, 29, 62, 33, 34, 94, 72, 77, 45, 81, 80, 19, 26, 86],\n        },\n        {\n            id: \"db-logical-read-rate\",\n            name: \"DB logical read rate\",\n            units: \"%\",\n            values: [74, 9, 10, 87, 83, 41, 4, 96, 100, 33, 30, 26, 40, 12, 21, 3, 69, 59, 32, 93, 62, 25, 90, 58, 51],\n        },\n        {\n            id: \"buffer-cache-hit-ratio\",\n            name: \"Buffer cache hit ratio\",\n            units: \"rps\",\n            values: [55, 78, 26, 35, 4, 37, 88, 64, 71, 40, 45, 9, 30, 51, 72, 44, 75, 39, 67, 24, 19, 1, 59, 11, 25],\n        },\n        {\n            id: \"library-cache-hit-ratio\",\n            name: \"Library cache hit ratio\",\n            units: \"%\",\n            values: [71, 57, 1, 3, 23, 4, 79, 54, 10, 29, 36, 99, 34, 75, 94, 24, 26, 50, 73, 64, 96, 12, 59, 95, 97],\n        },\n    ];\n\n    return series.map(s => ({\n        ...s,\n        data: getTimeData(s.values, baseDate, interval),\n        scales: {\n            x: xScale,\n            y: new LinearScale(),\n        },\n        renderer,\n        accessors,\n    }));\n}\n\nfunction getTimeData(values: number[], baseDate: Moment, interval: Duration): { x: Moment, y: number }[] {\n    return values.map((v, i) => ({\n        x: baseDate.clone().add(moment.duration(i * interval.asMilliseconds())),\n        y: v,\n    }));\n}\n\nfunction addOpacity(c: string, opacity: number): string {\n    const color = getColorValueByName(c);\n    const rgbColor = rgb(color);\n    rgbColor.opacity = opacity;\n    return rgbColor.toString();\n}\n";
      /***/
    },

    /***/
    "39Fa":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-test/thresholds-summary-test.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Fa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex align-items-start\">\n    <div class=\"d-flex flex-column\">\n        <nui-chart class=\"thresholds-main-chart\" [chart]=\"chart\" [nuiChartCollectionId]=\"uid\"></nui-chart>\n        <nui-chart class=\"thresholds-summary-chart\" [chart]=\"summaryChart\" [nuiChartCollectionId]=\"uid\"></nui-chart>\n    </div>\n    <nui-legend class=\"ml-2 thresholds-legend\"\n                seriesUnitLabel=\"sec\"\n                [active]=\"chartAssist.isLegendActive\"\n                [interactive]=\"true\"\n                (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n        <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                           [descriptionPrimary]=\"legendSeries['name']\"\n                           (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                           [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                           [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                           (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n            <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                  [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                  [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                <nui-chart-marker rightEdge\n                                  [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                  [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                </nui-chart-marker>\n            </nui-rich-legend-tile>\n        </nui-legend-series>\n    </nui-legend>\n</div>\n";
      /***/
    },

    /***/
    "3EtR":
    /*!*******************************************************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: ThresholdsSummaryVisualTestComponent */

    /***/
    function EtR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsSummaryVisualTestComponent", function () {
        return ThresholdsSummaryVisualTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_summary_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-summary-visual-test.component.html */
      "IZgm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);

      var ThresholdsSummaryVisualTestComponent = function ThresholdsSummaryVisualTestComponent() {
        _classCallCheck(this, ThresholdsSummaryVisualTestComponent);

        this.singleSeries = {
          "series-1": [30, 95, 15, 60, 35]
        };
        this.thresholdEdges = {
          "series-1": [30, 80, 80, 80, 45, 60, 10, 35]
        };
        this.singleSeriesNoHits = {
          "series-1": [30, 55, 25, 55, 35]
        };
        this.multipleSeries = {
          "series-1": [30, 95, 15, 60, 35],
          "series-2": [100, 40, 70, 45, 90]
        };
        this.zones = [{
          status: "error",
          start: 80
        }, {
          status: "error",
          start: -100,
          end: 10
        }, {
          status: "warning",
          start: 60,
          end: 80
        }, {
          status: "warning",
          start: 10,
          end: 20
        }];
        this.startDate = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()([2016, 11, 25, 15, 14, 29]); // "2016-12-25T15:14:29.000Z"
      };

      ThresholdsSummaryVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-summary-visual-test",
        template: _raw_loader_thresholds_summary_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ThresholdsSummaryVisualTestComponent);
      /***/
    },

    /***/
    "5sUz":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/chart-docs-thresholds.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-thresholds\",\n    templateUrl: \"./chart-docs-thresholds.component.html\",\n})\nexport class ChartDocsThresholdsComponent {\n}\n";
      /***/
    },

    /***/
    "90nt":
    /*!****************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-spark/thresholds-spark.example.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ThresholdsSparkExampleComponent */

    /***/
    function nt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsSparkExampleComponent", function () {
        return ThresholdsSparkExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_spark_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-spark.example.component.html */
      "u9+C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var d3_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! d3-color */
      "SC+/");
      /* harmony import */


      var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash/get */
      "mwIZ");
      /* harmony import */


      var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_6__);

      var Status;

      (function (Status) {
        Status["Error"] = "error";
        Status["Warning"] = "warning";
      })(Status || (Status = {}));

      var ThresholdsSparkExampleComponent = /*#__PURE__*/function () {
        function ThresholdsSparkExampleComponent(thresholdsService) {
          var _nova_ui_charts__WEBP, _this$statusIcons;

          _classCallCheck(this, ThresholdsSparkExampleComponent);

          this.thresholdsService = thresholdsService;
          this.statusBgColors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]((_nova_ui_charts__WEBP = {}, _defineProperty(_nova_ui_charts__WEBP, Status.Error, addOpacity(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1], 0.2)), _defineProperty(_nova_ui_charts__WEBP, Status.Warning, addOpacity(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2], 0.3)), _nova_ui_charts__WEBP), "transparent");
          this.statusIcons = (_this$statusIcons = {}, _defineProperty(_this$statusIcons, Status.Error, "status_critical"), _defineProperty(_this$statusIcons, Status.Warning, "status_warning"), _this$statusIcons);
          this.xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
        }

        _createClass(ThresholdsSparkExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SparkChartAssist"]();
            this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            this.accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"]([_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"][0]]), new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"]([_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"][0]]));

            this.accessors.data.status = function (d) {
              return lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(d, "__thresholds.status");
            };

            var seriesSet = getLineSeries(this.xScale, this.renderer, this.accessors); // Zone definitions tell the threshold service where threshold zones begin and end

            var zoneDefinitions = getZoneDefinitions();
            var sparks = seriesSet.map(function (s) {
              // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that
              // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing
              // start or end value indicates an infinite zone.)
              // Those values are then converted into a set of data series in this step.
              var zones = _this.thresholdsService.getThresholdZones(s, zoneDefinitions, _this.statusBgColors); // Backgrounds use the StatusBarRenderer which requires a special set of scales.
              // Note that the x scale is shared between the foreground series and the background series.
              // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN


              var bgScales = {
                x: s.scales.x,
                y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN)
              }; // This injects threshold data into every data point of the source series. It is important, because later we can
              // access related threshold information from many different places such as the legend.

              _this.thresholdsService.injectThresholdsData(s, zones); // We can use the thresholds service to create the background series for each spark


              var backgrounds = _this.thresholdsService.getBackgrounds(s, zones, bgScales, _this.statusBgColors);

              return {
                id: s.id,
                chartSeriesSet: [s, backgrounds]
              };
            });
            this.chartAssist.updateSparks(sparks);
          }
        }]);

        return ThresholdsSparkExampleComponent;
      }();

      ThresholdsSparkExampleComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]
        }];
      };

      ThresholdsSparkExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-spark-example",
        template: _raw_loader_thresholds_spark_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]])], ThresholdsSparkExampleComponent);
      /* Chart data */

      function getZoneDefinitions() {
        return [{
          status: Status.Error,
          start: 90
        }, {
          status: Status.Warning,
          start: 70,
          end: 90
        }];
      }

      function getLineSeries(xScale, renderer, accessors) {
        var baseDate = moment_moment__WEBPACK_IMPORTED_MODULE_6___default()([2016, 11, 25]);
        var interval = moment_moment__WEBPACK_IMPORTED_MODULE_6___default.a.duration(1, "hours");
        var series = [{
          id: "shared-pool-size",
          name: "Shared pool size",
          units: "MB",
          values: [67, 16, 3, 56, 26, 68, 74, 45, 54, 81, 13, 90, 72, 61, 97, 32, 64, 22, 60, 11, 53, 77, 88, 49, 66]
        }, {
          id: "buffer-cache-size",
          name: "Buffer cache size",
          units: "MB",
          values: [5, 15, 52, 75, 64, 74, 6, 24, 100, 26, 91, 38, 4, 45, 93, 44, 59, 48, 99, 96, 53, 72, 32, 69, 27]
        }, {
          id: "pga-cache-size",
          name: "PGA cache size",
          units: "MB",
          values: [83, 21, 43, 8, 96, 100, 5, 53, 14, 20, 82, 23, 29, 62, 33, 34, 94, 72, 77, 45, 81, 80, 19, 26, 86]
        }, {
          id: "db-logical-read-rate",
          name: "DB logical read rate",
          units: "%",
          values: [74, 9, 10, 87, 83, 41, 4, 96, 100, 33, 30, 26, 40, 12, 21, 3, 69, 59, 32, 93, 62, 25, 90, 58, 51]
        }, {
          id: "buffer-cache-hit-ratio",
          name: "Buffer cache hit ratio",
          units: "rps",
          values: [55, 78, 26, 35, 4, 37, 88, 64, 71, 40, 45, 9, 30, 51, 72, 44, 75, 39, 67, 24, 19, 1, 59, 11, 25]
        }, {
          id: "library-cache-hit-ratio",
          name: "Library cache hit ratio",
          units: "%",
          values: [71, 57, 1, 3, 23, 4, 79, 54, 10, 29, 36, 99, 34, 75, 94, 24, 26, 50, 73, 64, 96, 12, 59, 95, 97]
        }];
        return series.map(function (s) {
          return Object.assign(Object.assign({}, s), {
            data: getTimeData(s.values, baseDate, interval),
            scales: {
              x: xScale,
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            },
            renderer: renderer,
            accessors: accessors
          });
        });
      }

      function getTimeData(values, baseDate, interval) {
        return values.map(function (v, i) {
          return {
            x: baseDate.clone().add(moment_moment__WEBPACK_IMPORTED_MODULE_6___default.a.duration(i * interval.asMilliseconds())),
            y: v
          };
        });
      }

      function addOpacity(c, opacity) {
        var color = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getColorValueByName"])(c);
        var rgbColor = Object(d3_color__WEBPACK_IMPORTED_MODULE_4__["rgb"])(color);
        rgbColor.opacity = opacity;
        return rgbColor.toString();
      }
      /***/

    },

    /***/
    "BVyO":
    /*!***********************************************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-example/thresholds-summary.example.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: ThresholdsSummaryExampleComponent */

    /***/
    function BVyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsSummaryExampleComponent", function () {
        return ThresholdsSummaryExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_summary_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-summary.example.component.html */
      "MZ3U");
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
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_5__);

      var Status;

      (function (Status) {
        Status["Error"] = "error";
        Status["Warning"] = "warning";
        Status["Ok"] = "ok";
      })(Status || (Status = {}));

      var ThresholdsSummaryExampleComponent = /*#__PURE__*/function () {
        function ThresholdsSummaryExampleComponent(thresholdsService) {
          _classCallCheck(this, ThresholdsSummaryExampleComponent);

          this.thresholdsService = thresholdsService;
        }

        _createClass(ThresholdsSummaryExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _nova_ui_charts__WEBP2;

            // When instantiating the charts, use the provided grid configuration functions for the main grid and summary grid
            var mainChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["thresholdsTopGridConfig"])()));
            var summaryChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["thresholdsSummaryGridConfig"])())); // Instantiate a chart assist for the main chart and summary chart

            this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](mainChart);
            this.summaryChartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](summaryChart); // Synchronize the legend interaction events between the chart assists

            this.summaryChartAssist.syncWithChartAssist(this.chartAssist); // Create scales for the main chart data series
            // Note that the x scale is shared between the main chart data series, main chart thresholds, and summary visualizations

            var sharedXScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
            var mainChartDataScales = {
              x: sharedXScale,
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            }; // Set the left scale ID on the main chart grid to let it know which scale to use for the left axis ticks

            mainChart.getGrid().leftScaleId = mainChartDataScales.y.id; // To give the data series visualization some vertical breathing room, set the y scale's
            // domainCalculator by invoking getAutomaticDomainWithIncludedInterval, where the
            // specified interval is larger than the expected domain of the visualized data

            mainChartDataScales.y.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 100]); // Create a palette with a mapped value provider that maps status to color

            this.thresholdsPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]((_nova_ui_charts__WEBP2 = {}, _defineProperty(_nova_ui_charts__WEBP2, Status.Error, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1]), _defineProperty(_nova_ui_charts__WEBP2, Status.Warning, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2]), _defineProperty(_nova_ui_charts__WEBP2, Status.Ok, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4]), _nova_ui_charts__WEBP2), "transparent")); // Standard line renderer for the data series visualization

            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // Providing chartAssist colors and markers to LineAccessors will share them with the line chart

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers); // Here we define the data series on the main chart which will be visualized as lines.
            // These series are also used in the creation of the corresponding main chart threshold series
            // and summary chart series.

            var mainChartDataSeriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: mainChartDataScales
              });
            }); // Zone definitions tell the threshold service where threshold zones begin and end

            var zoneDefinitions = getZoneDefinitions(); // See the createMainChartThresholdSeriesSet method definition below for how to assemble
            // the required elements for thresholds on the main chart

            var mainChartThresholdSeriesSet = this.createMainChartThresholdSeriesSet(mainChartDataSeriesSet, mainChartDataScales, zoneDefinitions); // See the createSummarySeriesSet method definition below for how to assemble the required elements
            // for thresholds on the summary chart

            var summarySeriesSet = this.createSummarySeriesSet(mainChartDataSeriesSet, sharedXScale, zoneDefinitions); // Invoke the update method on each of the chart assists passing the appropriate series sets
            // ---
            // *Note:* The order in which these series sets are rendered on the chart corresponds to the order in which
            // the series are passed here. So, in this case, since the 'mainChartDataSeriesSet' appears after the
            // 'mainChartThresholdSeriesSet' in this array, the main data elements will be rendered in front of the
            // threshold-related elements on the chart.

            this.chartAssist.update([].concat(_toConsumableArray(mainChartThresholdSeriesSet), _toConsumableArray(mainChartDataSeriesSet)));
            this.summaryChartAssist.update(summarySeriesSet);
          }
        }, {
          key: "createMainChartThresholdSeriesSet",
          value: function createMainChartThresholdSeriesSet(mainChartDataSeriesSet, mainChartDataScales, zoneDefinitions) {
            // Create scales for the main chart thresholds.
            // Note that the same x scale from the data series scales is used here.
            // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN
            var thresholdScales = {
              x: mainChartDataScales.x,
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN)
            };
            var thresholdSeriesSet = [];

            var _iterator = _createForOfIteratorHelper(mainChartDataSeriesSet),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var s = _step.value;
                // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that
                // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing
                // start or end value indicates an infinite zone.)
                // Those values are then converted into a set of data series in this step.
                var zones = this.thresholdsService.getThresholdZones(s, zoneDefinitions, this.thresholdsPalette.standardColors); // This injects threshold data into every data point of the source series. It is important, because later we can
                // access related threshold information from many different places like legend, tooltips or even when calculating
                // other threshold related data series, which we do in the following step.

                this.thresholdsService.injectThresholdsData(s, zones); // Here we create the threshold related visuals for this series. The methods on the thresholdService are broken down and
                // generate separate elements of the whole, because some situations only require, for example, the backgrounds to be applied.
                // In this case, we're creating backgrounds, side indicators, and threshold lines.
                // ---
                // *Note:* The order in which these elements are rendered on the chart corresponds to the order in which
                // the elements are defined here. So, in this case, since the threshold lines are defined after the
                // backgrounds in this array, the threshold lines will be rendered in front of the backgrounds on the chart.

                var seriesThresholds = [this.thresholdsService.getBackgrounds(s, zones, thresholdScales, this.thresholdsPalette.backgroundColors)].concat(_toConsumableArray(this.thresholdsService.getThresholdLines(zones)), _toConsumableArray(this.thresholdsService.getSideIndicators(zones, mainChartDataScales)));
                thresholdSeriesSet.push.apply(thresholdSeriesSet, _toConsumableArray(seriesThresholds));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return thresholdSeriesSet;
          }
        }, {
          key: "createSummarySeriesSet",
          value: function createSummarySeriesSet(seriesSet, xScale, zoneDefinitions) {
            var _this2 = this;

            // Zone definitions let the threshold service know where threshold zones begin and end.
            //
            // The summary zones use the same definitions as those on the main chart,
            // but they also include an "ok" zone for time periods during which a threshold is not exceeded.
            // The reason the main chart thresholds don't include an "ok" zone is that there just isn't
            // a need to visualize the data in an "ok" state there.
            //
            // On the summary, data falling within the "ok" zone is visualized as a thin green line.
            var summaryZoneDefs = [].concat(_toConsumableArray(zoneDefinitions), [{
              status: Status.Ok
            }]); // Create scales for the summary chart.
            // Note that the same x scale from the data series scales of the main chart is used here.
            // Also note that, similar to the main chart thresholds, the y band scale fixes the domain to a single value of STATUS_DOMAIN

            var summaryScales = {
              x: xScale,
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN)
            }; // A thickness map can be provided to the thresholds service getBackgrounds method if you want to specify a custom
            // height for the threshold visualization. The default thickness is the full height of the grid.

            var thicknessMap = _defineProperty({}, Status.Ok, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"].THIN);

            var summarySeriesSet = _toConsumableArray(seriesSet).map(function (s) {
              // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that
              // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing
              // start or end value indicates an infinite zone.)
              // Those values are then converted into a set of data series in this step.
              var zones = _this2.thresholdsService.getThresholdZones(s, summaryZoneDefs, _this2.thresholdsPalette.standardColors); // This injects threshold data into every data point of the source series. It's important, because later we can
              // access related threshold information from many different places like legend, tooltips or even when calculating
              // other threshold related data series, which we do in the following step.


              _this2.thresholdsService.injectThresholdsData(s, zones); // Finally, create the thresholds series by invoking the threshold service's getBackgrounds method
              // with arguments for the data series, the defined zones, the palette's standard colors
              // and the predefined THRESHOLDS_SUMMARY_RENDERER_CONFIG.
              // The renderer config defines the behavior of series when they are emphasized, hidden, etc.


              return _this2.thresholdsService.getBackgrounds(s, zones, summaryScales, _this2.thresholdsPalette.standardColors, thicknessMap, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["THRESHOLDS_SUMMARY_RENDERER_CONFIG"]));
            });

            return summarySeriesSet;
          }
        }]);

        return ThresholdsSummaryExampleComponent;
      }();

      ThresholdsSummaryExampleComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]
        }];
      };

      ThresholdsSummaryExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-summary-example",
        template: _raw_loader_thresholds_summary_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]])], ThresholdsSummaryExampleComponent);
      /** Chart data */

      function getZoneDefinitions() {
        return [{
          status: Status.Error,
          start: 80
        }, {
          status: Status.Warning,
          start: 60,
          end: 80
        }];
      }

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:14:29.909Z", format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-27T15:14:29.909Z", format),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-29T15:14:29.909Z", format),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-27T15:14:29.909Z", format),
            y: 40
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-29T15:14:29.909Z", format),
            y: 70
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-31T15:14:29.909Z", format),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2017-01-03T15:14:29.909Z", format),
            y: 90
          }]
        }];
      }
      /***/

    },

    /***/
    "BpZJ":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-example/thresholds-summary.example.component.ts ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BpZJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, BarRenderer, Chart, ChartAssist, ChartPalette, CHART_PALETTE_CS_S, getAutomaticDomainWithIncludedInterval, IAccessors, IChartAssistSeries,\n    IChartSeries, ILineAccessors, IScale, ISimpleThresholdZone, IXYScales, LineAccessors, LinearScale, LineRenderer, MappedValueProvider, StatusAccessors,\n    ThresholdsService, thresholdsSummaryGridConfig, thresholdsTopGridConfig, THRESHOLDS_SUMMARY_RENDERER_CONFIG, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport cloneDeep from \"lodash/cloneDeep\";\nimport moment from \"moment/moment\";\n\nenum Status {\n    Error = \"error\",\n    Warning = \"warning\",\n    Ok = \"ok\",\n}\n\n@Component({\n    selector: \"nui-thresholds-summary-example\",\n    templateUrl: \"./thresholds-summary.example.component.html\",\n})\nexport class ThresholdsSummaryExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public summaryChartAssist: ChartAssist;\n\n    private thresholdsPalette: ChartPalette;\n\n    constructor(private thresholdsService: ThresholdsService) {\n    }\n\n    public ngOnInit() {\n        // When instantiating the charts, use the provided grid configuration functions for the main grid and summary grid\n        const mainChart = new Chart(new XYGrid(thresholdsTopGridConfig()));\n        const summaryChart = new Chart(new XYGrid(thresholdsSummaryGridConfig()));\n\n        // Instantiate a chart assist for the main chart and summary chart\n        this.chartAssist = new ChartAssist(mainChart);\n        this.summaryChartAssist = new ChartAssist(summaryChart);\n\n        // Synchronize the legend interaction events between the chart assists\n        this.summaryChartAssist.syncWithChartAssist(this.chartAssist);\n\n        // Create scales for the main chart data series\n        // Note that the x scale is shared between the main chart data series, main chart thresholds, and summary visualizations\n        const sharedXScale = new TimeScale();\n        const mainChartDataScales: IXYScales = {\n            x: sharedXScale,\n            y: new LinearScale(),\n        };\n\n        // Set the left scale ID on the main chart grid to let it know which scale to use for the left axis ticks\n        (mainChart.getGrid() as XYGrid).leftScaleId = mainChartDataScales.y.id;\n\n        // To give the data series visualization some vertical breathing room, set the y scale's\n        // domainCalculator by invoking getAutomaticDomainWithIncludedInterval, where the\n        // specified interval is larger than the expected domain of the visualized data\n        mainChartDataScales.y.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n\n        // Create a palette with a mapped value provider that maps status to color\n        this.thresholdsPalette = new ChartPalette(new MappedValueProvider({\n            [Status.Error]: CHART_PALETTE_CS_S[1],\n            [Status.Warning]: CHART_PALETTE_CS_S[2],\n            [Status.Ok]: CHART_PALETTE_CS_S[4],\n        }, \"transparent\"));\n\n        // Standard line renderer for the data series visualization\n        const renderer = new LineRenderer();\n        // Providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        // Here we define the data series on the main chart which will be visualized as lines.\n        // These series are also used in the creation of the corresponding main chart threshold series\n        // and summary chart series.\n        const mainChartDataSeriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales: mainChartDataScales,\n        }));\n\n        // Zone definitions tell the threshold service where threshold zones begin and end\n        const zoneDefinitions: ISimpleThresholdZone[] = getZoneDefinitions();\n\n        // See the createMainChartThresholdSeriesSet method definition below for how to assemble\n        // the required elements for thresholds on the main chart\n        const mainChartThresholdSeriesSet = this.createMainChartThresholdSeriesSet(mainChartDataSeriesSet, mainChartDataScales, zoneDefinitions);\n\n        // See the createSummarySeriesSet method definition below for how to assemble the required elements\n        // for thresholds on the summary chart\n        const summarySeriesSet = this.createSummarySeriesSet(mainChartDataSeriesSet, sharedXScale, zoneDefinitions);\n\n        // Invoke the update method on each of the chart assists passing the appropriate series sets\n        // ---\n        // *Note:* The order in which these series sets are rendered on the chart corresponds to the order in which\n        // the series are passed here. So, in this case, since the 'mainChartDataSeriesSet' appears after the\n        // 'mainChartThresholdSeriesSet' in this array, the main data elements will be rendered in front of the\n        // threshold-related elements on the chart.\n        this.chartAssist.update([...mainChartThresholdSeriesSet, ...mainChartDataSeriesSet]);\n        this.summaryChartAssist.update(summarySeriesSet);\n    }\n\n    private createMainChartThresholdSeriesSet(mainChartDataSeriesSet: IChartSeries<ILineAccessors>[],\n                                              mainChartDataScales: IXYScales,\n                                              zoneDefinitions: ISimpleThresholdZone[]) {\n        // Create scales for the main chart thresholds.\n        // Note that the same x scale from the data series scales is used here.\n        // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN\n        const thresholdScales = {\n            x: mainChartDataScales.x,\n            y: new BandScale().fixDomain(StatusAccessors.STATUS_DOMAIN),\n        };\n\n        const thresholdSeriesSet: IChartAssistSeries<IAccessors>[] = [];\n        for (const s of mainChartDataSeriesSet) {\n            // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that\n            // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing\n            // start or end value indicates an infinite zone.)\n            // Those values are then converted into a set of data series in this step.\n            const zones = this.thresholdsService.getThresholdZones(s, zoneDefinitions, this.thresholdsPalette.standardColors);\n\n            // This injects threshold data into every data point of the source series. It is important, because later we can\n            // access related threshold information from many different places like legend, tooltips or even when calculating\n            // other threshold related data series, which we do in the following step.\n            this.thresholdsService.injectThresholdsData(s, zones);\n\n            // Here we create the threshold related visuals for this series. The methods on the thresholdService are broken down and\n            // generate separate elements of the whole, because some situations only require, for example, the backgrounds to be applied.\n            // In this case, we're creating backgrounds, side indicators, and threshold lines.\n            // ---\n            // *Note:* The order in which these elements are rendered on the chart corresponds to the order in which\n            // the elements are defined here. So, in this case, since the threshold lines are defined after the\n            // backgrounds in this array, the threshold lines will be rendered in front of the backgrounds on the chart.\n            const seriesThresholds = [\n                this.thresholdsService.getBackgrounds(s, zones, thresholdScales, this.thresholdsPalette.backgroundColors),\n                ...this.thresholdsService.getThresholdLines(zones),\n                ...this.thresholdsService.getSideIndicators(zones, mainChartDataScales),\n            ];\n\n            thresholdSeriesSet.push(...seriesThresholds);\n        }\n        return thresholdSeriesSet;\n    }\n\n    private createSummarySeriesSet(seriesSet: IChartSeries<ILineAccessors>[], xScale: IScale<any>, zoneDefinitions: ISimpleThresholdZone[]) {\n        // Zone definitions let the threshold service know where threshold zones begin and end.\n        //\n        // The summary zones use the same definitions as those on the main chart,\n        // but they also include an \"ok\" zone for time periods during which a threshold is not exceeded.\n        // The reason the main chart thresholds don't include an \"ok\" zone is that there just isn't\n        // a need to visualize the data in an \"ok\" state there.\n        //\n        // On the summary, data falling within the \"ok\" zone is visualized as a thin green line.\n        const summaryZoneDefs = [\n            ...zoneDefinitions,\n            { status: Status.Ok },\n        ];\n\n        // Create scales for the summary chart.\n        // Note that the same x scale from the data series scales of the main chart is used here.\n        // Also note that, similar to the main chart thresholds, the y band scale fixes the domain to a single value of STATUS_DOMAIN\n        const summaryScales = {\n            x: xScale,\n            y: new BandScale().fixDomain(StatusAccessors.STATUS_DOMAIN),\n        };\n\n        // A thickness map can be provided to the thresholds service getBackgrounds method if you want to specify a custom\n        // height for the threshold visualization. The default thickness is the full height of the grid.\n        const thicknessMap = { [Status.Ok]: BarRenderer.THIN };\n\n        const summarySeriesSet: IChartAssistSeries<IAccessors>[] = [...seriesSet].map(s => {\n            // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that\n            // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing\n            // start or end value indicates an infinite zone.)\n            // Those values are then converted into a set of data series in this step.\n            const zones = this.thresholdsService.getThresholdZones(s, summaryZoneDefs, this.thresholdsPalette.standardColors);\n\n            // This injects threshold data into every data point of the source series. It's important, because later we can\n            // access related threshold information from many different places like legend, tooltips or even when calculating\n            // other threshold related data series, which we do in the following step.\n            this.thresholdsService.injectThresholdsData(s, zones);\n\n            // Finally, create the thresholds series by invoking the threshold service's getBackgrounds method\n            // with arguments for the data series, the defined zones, the palette's standard colors\n            // and the predefined THRESHOLDS_SUMMARY_RENDERER_CONFIG.\n            // The renderer config defines the behavior of series when they are emphasized, hidden, etc.\n            return this.thresholdsService.getBackgrounds(s, zones, summaryScales, this.thresholdsPalette.standardColors,\n                                                         thicknessMap, cloneDeep(THRESHOLDS_SUMMARY_RENDERER_CONFIG));\n        });\n\n        return summarySeriesSet;\n    }\n}\n\n/** Chart data */\nfunction getZoneDefinitions() {\n    return [\n        { status: Status.Error, start: 80 },\n        { status: Status.Warning, start: 60, end: 80 },\n    ];\n}\n\nfunction getData(): any[] {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "EYAC":
    /*!*****************************************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-test/thresholds-summary-test.component.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ThresholdsSummaryTestComponent */

    /***/
    function EYAC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsSummaryTestComponent", function () {
        return ThresholdsSummaryTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_summary_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-summary-test.component.html */
      "39Fa");
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

      var ThresholdsSummaryTestComponent = /*#__PURE__*/function () {
        function ThresholdsSummaryTestComponent(thresholdsService) {
          _classCallCheck(this, ThresholdsSummaryTestComponent);

          this.thresholdsService = thresholdsService;
          this.uid = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].uuid();
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["thresholdsTopGridConfig"])()));
          this.summaryChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["thresholdsSummaryGridConfig"])()));
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
          this.summaryChartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.summaryChart);
          this.scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
          };
          this.backgroundScales = {
            x: this.scales.x,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]()
          };
          this.summaryScales = {
            x: this.scales.x,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]()
          };
          this.configureGrids(this.scales.y.id);
          this.summaryChartAssist.syncWithChartAssist(this.chartAssist);
          this.scales.y.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 100]);
          this.backgroundScales.y.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN);
          this.summaryScales.y.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN);
          this.thresholdsPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]({
            "error": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1],
            "warning": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2],
            "ok": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4]
          }, "transparent"));
          this.thicknessMap = {
            "ok": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"].THIN
          };
          this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
          this.accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
        }

        _createClass(ThresholdsSummaryTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.update(this.data);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes["data"] || changes["zones"]) {
              this.update(this.data);
            }
          }
        }, {
          key: "update",
          value: function update(data) {
            var _this3 = this;

            var seriesSet = getDataSeriesSet(data, this.accessors, this.startDate).map(function (d) {
              return Object.assign(Object.assign({}, d), {
                renderer: _this3.renderer,
                scales: _this3.scales
              });
            });

            var summarySeriesSet = _toConsumableArray(seriesSet).map(function (s) {
              var summaryZoneDefs = [].concat(_toConsumableArray(_this3.zones), [{
                status: "ok"
              }]);

              var zones = _this3.thresholdsService.getThresholdZones(s, summaryZoneDefs, _this3.thresholdsPalette.standardColors);

              _this3.thresholdsService.injectThresholdsData(s, zones);

              return _this3.thresholdsService.getBackgrounds(s, zones, _this3.summaryScales, _this3.thresholdsPalette.standardColors, _this3.thicknessMap, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["THRESHOLDS_SUMMARY_RENDERER_CONFIG"]));
            });

            var thresholdSeriesSet = [];

            var _iterator2 = _createForOfIteratorHelper(seriesSet),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var s = _step2.value;
                var zones = this.thresholdsService.getThresholdZones(s, this.zones, this.thresholdsPalette.standardColors);
                this.thresholdsService.injectThresholdsData(s, zones);
                thresholdSeriesSet.push.apply(thresholdSeriesSet, [this.thresholdsService.getBackgrounds(s, zones, this.backgroundScales, this.thresholdsPalette.backgroundColors)].concat(_toConsumableArray(this.thresholdsService.getThresholdLines(zones)), _toConsumableArray(this.thresholdsService.getSideIndicators(zones, this.scales))));
              } // chart assist needs to be used to update data

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.chartAssist.update([].concat(thresholdSeriesSet, _toConsumableArray(seriesSet)));
            this.summaryChartAssist.update(summarySeriesSet);
          }
        }, {
          key: "configureGrids",
          value: function configureGrids(mainChartLeftScaleId) {
            var topGrid = this.chart.getGrid();
            topGrid.leftScaleId = mainChartLeftScaleId;
            var topGridConfig = topGrid.config();
            topGridConfig.dimension.width(400);
            topGridConfig.dimension.height(110);
            topGridConfig.dimension.autoWidth = false;
            topGridConfig.dimension.autoHeight = false;
            var summaryGridConfig = this.summaryChart.getGrid().config();
            summaryGridConfig.dimension.width(400);
            summaryGridConfig.dimension.autoWidth = false;
          }
        }]);

        return ThresholdsSummaryTestComponent;
      }();

      ThresholdsSummaryTestComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]
        }];
      };

      ThresholdsSummaryTestComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        zones: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        startDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      ThresholdsSummaryTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-summary-test",
        template: _raw_loader_thresholds_summary_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]])], ThresholdsSummaryTestComponent);

      function getDataSeriesSet(data, accessors, startDate) {
        var toDataPoint = function toDataPoint(y, i) {
          return {
            x: startDate.clone().add(i, "d"),
            y: y
          };
        };

        return Object.keys(data).map(function (seriesId) {
          var seriesData = data[seriesId];
          var dataValues = seriesData.map(toDataPoint);
          return {
            id: seriesId,
            name: seriesId,
            data: dataValues,
            accessors: accessors
          };
        });
      }
      /***/

    },

    /***/
    "HweL":
    /*!*********************************************************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: ThresholdsSummaryTestHarnessComponent */

    /***/
    function HweL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsSummaryTestHarnessComponent", function () {
        return ThresholdsSummaryTestHarnessComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_summary_test_harness_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-summary-test-harness.component.html */
      "qW1a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);

      var ThresholdsSummaryTestHarnessComponent = /*#__PURE__*/function () {
        function ThresholdsSummaryTestHarnessComponent() {
          _classCallCheck(this, ThresholdsSummaryTestHarnessComponent);

          this.data = {
            "series-1": [10, 30, 70, 30, 10],
            "series-2": [0, 40, 60, 40, 0]
          };
          this.zones = [{
            status: "error",
            start: 50
          }, {
            status: "warning",
            start: 20,
            end: 50
          }];
          this.startDate = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()([2016, 11, 25, 15, 14, 29]); // "2016-12-25T15:14:29.000Z"
        }

        _createClass(ThresholdsSummaryTestHarnessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dataChanged",
          value: function dataChanged(value) {
            this.data = this.validateInput(value) || this.data;
          }
        }, {
          key: "zonesChanged",
          value: function zonesChanged(value) {
            this.zones = this.validateInput(value) || this.zones;
          }
        }, {
          key: "validateInput",
          value: function validateInput(value) {
            var validatedInput;

            try {
              validatedInput = JSON.parse(value);
            } catch (_a) {}

            return validatedInput;
          }
        }]);

        return ThresholdsSummaryTestHarnessComponent;
      }();

      ThresholdsSummaryTestHarnessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-summary-test-harness",
        template: _raw_loader_thresholds_summary_test_harness_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ThresholdsSummaryTestHarnessComponent);
      /***/
    },

    /***/
    "IZgm":
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component.html ***!
      \***********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IZgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<charts-test-harness>\n    <nui-thresholds-summary-test class=\"nui-thresholds-summary-single-1\" [data]=\"singleSeries\" [zones]=\"zones\" [startDate]=\"startDate\"></nui-thresholds-summary-test>\n    <nui-thresholds-summary-test class=\"nui-thresholds-summary-single-2\" [data]=\"singleSeriesNoHits\" [zones]=\"zones\" [startDate]=\"startDate\"></nui-thresholds-summary-test>\n    <nui-thresholds-summary-test class=\"nui-thresholds-summary-single-3\" [data]=\"thresholdEdges\" [zones]=\"zones\"\n                                 [startDate]=\"startDate\"></nui-thresholds-summary-test>\n    <nui-thresholds-summary-with-interval-scale-test></nui-thresholds-summary-with-interval-scale-test>\n    <nui-thresholds-summary-test class=\"nui-thresholds-summary-multiple-1\" [data]=\"multipleSeries\" [zones]=\"zones\" [startDate]=\"startDate\"></nui-thresholds-summary-test>\n    <nui-thresholds-summary-test class=\"nui-thresholds-summary-multiple-2\" [data]=\"multipleSeries\" [zones]=\"zones\" [startDate]=\"startDate\"></nui-thresholds-summary-test>\n    <nui-thresholds-summary-test class=\"nui-thresholds-summary-multiple-3\" [data]=\"multipleSeries\" [zones]=\"zones\" [startDate]=\"startDate\"></nui-thresholds-summary-test>\n</charts-test-harness>\n";
      /***/
    },

    /***/
    "Ig0H":
    /*!****************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-basic/thresholds-basic.example.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: ThresholdsBasicExampleComponent */

    /***/
    function Ig0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsBasicExampleComponent", function () {
        return ThresholdsBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-basic.example.component.html */
      "fdc+");
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

      var Status;

      (function (Status) {
        Status["Error"] = "error";
        Status["Warning"] = "warning";
      })(Status || (Status = {}));

      var ThresholdsBasicExampleComponent = /*#__PURE__*/function () {
        function ThresholdsBasicExampleComponent(thresholdsService) {
          var _nova_ui_charts__WEBP3;

          _classCallCheck(this, ThresholdsBasicExampleComponent);

          this.thresholdsService = thresholdsService;
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
          this.thresholdsPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]((_nova_ui_charts__WEBP3 = {}, _defineProperty(_nova_ui_charts__WEBP3, Status.Error, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1]), _defineProperty(_nova_ui_charts__WEBP3, Status.Warning, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2]), _nova_ui_charts__WEBP3)));
        }

        _createClass(ThresholdsBasicExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(5, "minutes")),
              // The example highlights time intervals defined by data points because of the type of scale that's used.
              // All that's necessary to achieve status zones defined by data lines intersecting with threshold zones is
              // to change the scale type to a continuous time scale by changing the 'x' scale definition to:
              // x: new TimeScale(),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            }; // Set the left scale ID on the chart's grid to let it know which scale to use for the left axis ticks

            this.chart.getGrid().leftScaleId = scales.y.id; // Backgrounds use the StatusBarRenderer which requires a special set of scales.
            // Note that the x scale is shared between the foreground series and the background series.
            // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN

            var bgScales = {
              x: scales.x,
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN)
            }; // Zone definitions tell the threshold service where threshold zones begin and end

            var zoneDefinitions = getZoneDefinitions(); // Here we define the main data series on the chart which will be visualized as lines

            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: accessors,
                renderer: renderer,
                scales: scales
              });
            });
            var thresholds = [];

            var _iterator3 = _createForOfIteratorHelper(seriesSet),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var s = _step3.value;
                // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that
                // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing
                // start or end value indicates an infinite zone.)
                // Those values are then converted into a set of data series in this step.
                var zones = this.thresholdsService.getThresholdZones(s, zoneDefinitions, this.thresholdsPalette.standardColors); // This injects threshold data into every data point of the source series. It is important, because later we can
                // access related threshold information from many different places like legend, tooltips or even when calculating
                // other threshold related data series, which we do in the following step.

                this.thresholdsService.injectThresholdsData(s, zones); // Here we create all threshold related visuals for this series. The methods on the thresholdService are broken down and
                // generate separate elements of the whole, because some situations only require, for example, the backgrounds to be applied.
                // In this case, we're creating backgrounds, side indicators, and threshold lines.
                // ---
                // *Note:* The order in which these elements are rendered on the chart corresponds to the order in which
                // the elements are defined here. So, in this case, since the threshold lines are defined after the
                // backgrounds in this array, the threshold lines will be rendered in front of the backgrounds on the chart.

                var seriesThresholds = [this.thresholdsService.getBackgrounds(s, zones, bgScales, this.thresholdsPalette.backgroundColors)].concat(_toConsumableArray(this.thresholdsService.getThresholdLines(zones)), _toConsumableArray(this.thresholdsService.getSideIndicators(zones, scales)));
                thresholds.push.apply(thresholds, _toConsumableArray(seriesThresholds));
              } // Invoke the update method on the chart assist passing the appropriate series sets
              // ---
              // *Note:* The order in which these series sets are rendered on the chart corresponds to the order in which the series are
              // passed here. So, in this case, since the 'seriesSet' appears after the 'thresholds' in this array, the main data elements
              // will be rendered in front of the threshold-related elements on the chart.

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.chartAssist.update([].concat(thresholds, _toConsumableArray(seriesSet)));
          }
        }]);

        return ThresholdsBasicExampleComponent;
      }();

      ThresholdsBasicExampleComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]
        }];
      };

      ThresholdsBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-basic-example",
        template: _raw_loader_thresholds_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]])], ThresholdsBasicExampleComponent);
      /* Chart data */

      function getZoneDefinitions() {
        return [{
          status: Status.Error,
          start: 90
        }, {
          status: Status.Error,
          end: 10
        }, {
          status: Status.Warning,
          start: 70,
          end: 90
        }, {
          status: Status.Warning,
          start: 10,
          end: 30
        }];
      }

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:05:00Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:10:00Z", format).toDate(),
            y: 95
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:15:00Z", format).toDate(),
            y: 15
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:20:00Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:00Z", format).toDate(),
            y: 35
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:30:00Z", format).toDate(),
            y: 5
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:35:00Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:40:00Z", format).toDate(),
            y: 84
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:55:00Z", format).toDate(),
            y: 86
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T16:00:00Z", format).toDate(),
            y: 35
          }]
        }];
      }
      /***/

    },

    /***/
    "MT3c":
    /*!********************************************************************************!*\
      !*** ./examples/components/demo/thresholds/chart-docs-thresholds.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ChartDocsThresholdsComponent */

    /***/
    function MT3c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsThresholdsComponent", function () {
        return ChartDocsThresholdsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_thresholds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-thresholds.component.html */
      "vIjN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsThresholdsComponent = function ChartDocsThresholdsComponent() {
        _classCallCheck(this, ChartDocsThresholdsComponent);
      };

      ChartDocsThresholdsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-thresholds",
        template: _raw_loader_chart_docs_thresholds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsThresholdsComponent);
      /***/
    },

    /***/
    "MZ3U":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-example/thresholds-summary.example.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MZ3U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart d-flex flex-column\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\" nuiChartCollectionId=\"collection\"></nui-chart>\n        <nui-chart class=\"w-100\" [chart]=\"summaryChartAssist.chart\" nuiChartCollectionId=\"collection\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.id\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Nl5z":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-basic/thresholds-basic.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nl5z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, Chart, ChartAssist, ChartPalette, CHART_PALETTE_CS_S, IAccessors, IChartAssistSeries, IChartSeries, ILineAccessors, ISimpleThresholdZone,\n    IXYScales, LineAccessors, LinearScale, LineRenderer, MappedValueProvider, StatusAccessors, ThresholdsService, TimeIntervalScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment, { duration } from \"moment/moment\";\n\nenum Status {\n    Error = \"error\",\n    Warning = \"warning\",\n}\n\n@Component({\n    selector: \"nui-thresholds-basic-example\",\n    templateUrl: \"./thresholds-basic.example.component.html\",\n})\nexport class ThresholdsBasicExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public chartAssist = new ChartAssist(this.chart);\n\n    private thresholdsPalette = new ChartPalette(new MappedValueProvider({\n        [Status.Error]: CHART_PALETTE_CS_S[1],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n    }));\n\n    constructor(private thresholdsService: ThresholdsService) {\n    }\n\n    public ngOnInit() {\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeIntervalScale(duration(5, \"minutes\")),\n            // The example highlights time intervals defined by data points because of the type of scale that's used.\n            // All that's necessary to achieve status zones defined by data lines intersecting with threshold zones is\n            // to change the scale type to a continuous time scale by changing the 'x' scale definition to:\n            // x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Set the left scale ID on the chart's grid to let it know which scale to use for the left axis ticks\n        (this.chart.getGrid() as XYGrid).leftScaleId = scales.y.id;\n\n        // Backgrounds use the StatusBarRenderer which requires a special set of scales.\n        // Note that the x scale is shared between the foreground series and the background series.\n        // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN\n        const bgScales: IXYScales = {\n            x: scales.x,\n            y: new BandScale().fixDomain(StatusAccessors.STATUS_DOMAIN),\n        };\n\n        // Zone definitions tell the threshold service where threshold zones begin and end\n        const zoneDefinitions: ISimpleThresholdZone[] = getZoneDefinitions();\n        // Here we define the main data series on the chart which will be visualized as lines\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        const thresholds: IChartAssistSeries<IAccessors>[] = [];\n        for (const s of seriesSet) {\n            // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that\n            // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing\n            // start or end value indicates an infinite zone.)\n            // Those values are then converted into a set of data series in this step.\n            const zones = this.thresholdsService.getThresholdZones(s, zoneDefinitions, this.thresholdsPalette.standardColors);\n\n            // This injects threshold data into every data point of the source series. It is important, because later we can\n            // access related threshold information from many different places like legend, tooltips or even when calculating\n            // other threshold related data series, which we do in the following step.\n            this.thresholdsService.injectThresholdsData(s, zones);\n\n            // Here we create all threshold related visuals for this series. The methods on the thresholdService are broken down and\n            // generate separate elements of the whole, because some situations only require, for example, the backgrounds to be applied.\n            // In this case, we're creating backgrounds, side indicators, and threshold lines.\n            // ---\n            // *Note:* The order in which these elements are rendered on the chart corresponds to the order in which\n            // the elements are defined here. So, in this case, since the threshold lines are defined after the\n            // backgrounds in this array, the threshold lines will be rendered in front of the backgrounds on the chart.\n            const seriesThresholds = [\n                this.thresholdsService.getBackgrounds(s, zones, bgScales, this.thresholdsPalette.backgroundColors),\n                ...this.thresholdsService.getThresholdLines(zones),\n                ...this.thresholdsService.getSideIndicators(zones, scales),\n            ];\n\n            thresholds.push(...seriesThresholds);\n        }\n\n        // Invoke the update method on the chart assist passing the appropriate series sets\n        // ---\n        // *Note:* The order in which these series sets are rendered on the chart corresponds to the order in which the series are\n        // passed here. So, in this case, since the 'seriesSet' appears after the 'thresholds' in this array, the main data elements\n        // will be rendered in front of the threshold-related elements on the chart.\n        this.chartAssist.update([...thresholds, ...seriesSet]);\n    }\n}\n\n/* Chart data */\nfunction getZoneDefinitions() {\n    return [\n        { status: Status.Error, start: 90 },\n        { status: Status.Error, end: 10 },\n        { status: Status.Warning, start: 70, end: 90 },\n        { status: Status.Warning, start: 10, end: 30 },\n    ];\n}\n\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: moment(\"2016-12-25T15:05:00Z\", format).toDate(), y: 30 },\n            { x: moment(\"2016-12-25T15:10:00Z\", format).toDate(), y: 95 },\n            { x: moment(\"2016-12-25T15:15:00Z\", format).toDate(), y: 15 },\n            { x: moment(\"2016-12-25T15:20:00Z\", format).toDate(), y: 60 },\n            { x: moment(\"2016-12-25T15:25:00Z\", format).toDate(), y: 35 },\n            { x: moment(\"2016-12-25T15:30:00Z\", format).toDate(), y: 5 },\n            { x: moment(\"2016-12-25T15:35:00Z\", format).toDate(), y: 60 },\n            { x: moment(\"2016-12-25T15:40:00Z\", format).toDate(), y: 84 },\n            { x: moment(\"2016-12-25T15:55:00Z\", format).toDate(), y: 86 },\n            { x: moment(\"2016-12-25T16:00:00Z\", format).toDate(), y: 35 },\n        ],\n    }];\n}\n";
      /***/
    },

    /***/
    "P3qJ":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/chart-docs-thresholds.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P3qJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../common/demo-common.module\";\n\nimport { ChartDocsThresholdsComponent } from \"./chart-docs-thresholds.component\";\nimport { ThresholdsBasicExampleComponent } from \"./thresholds-basic/thresholds-basic.example.component\";\nimport { ThresholdsSparkExampleComponent } from \"./thresholds-spark/thresholds-spark.example.component\";\nimport { ThresholdsSummaryExampleComponent } from \"./thresholds-summary/thresholds-summary-example/thresholds-summary.example.component\";\nimport { ThresholdsSummaryTestHarnessComponent } from \"./thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component\";\nimport { ThresholdsSummaryTestComponent } from \"./thresholds-summary/thresholds-summary-test/thresholds-summary-test.component\";\nimport { ThresholdsSummaryVisualTestComponent } from \"./thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component\";\n// eslint-disable-next-line max-len\nimport { ThresholdsSummaryWithIntervalScaleTestComponent } from \"./thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsThresholdsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: ThresholdsBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"spark\",\n        component: ThresholdsSparkExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"summary\",\n        component: ThresholdsSummaryExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"summary-test\",\n        component: ThresholdsSummaryTestHarnessComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"summary-visual-test\",\n        component: ThresholdsSummaryVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsThresholdsComponent,\n        ThresholdsBasicExampleComponent,\n        ThresholdsSparkExampleComponent,\n        ThresholdsSummaryExampleComponent,\n        ThresholdsSummaryTestComponent,\n        ThresholdsSummaryTestHarnessComponent,\n        ThresholdsSummaryVisualTestComponent,\n        ThresholdsSummaryWithIntervalScaleTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        FormsModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiIconModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsThresholdsModule {\n}\n";
      /***/
    },

    /***/
    "XuAt":
    /*!***********************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component.ts ***!
      \***********************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XuAt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale,\n    BarRenderer,\n    Chart,\n    ChartAssist,\n    ChartPalette,\n    ChartTooltipsPlugin,\n    CHART_PALETTE_CS_S,\n    getAutomaticDomainWithIncludedInterval,\n    IAccessors,\n    IChartAssistSeries,\n    IChartSeries,\n    ILineAccessors,\n    IXYScales,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    MappedValueProvider,\n    StatusAccessors,\n    ThresholdsService,\n    thresholdsSummaryGridConfig,\n    thresholdsTopGridConfig,\n    THRESHOLDS_SUMMARY_RENDERER_CONFIG,\n    TimeIntervalScale,\n    UtilityService,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport cloneDeep from \"lodash/cloneDeep\";\nimport moment, { duration } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-thresholds-summary-with-interval-scale-test\",\n    templateUrl: \"./thresholds-summary-with-interval-scale-test.component.html\",\n})\nexport class ThresholdsSummaryWithIntervalScaleTestComponent implements OnInit {\n    public zones = [\n        { status: \"error\", start: 80 },\n        { status: \"error\", start: -100, end: 10 },\n        { status: \"warning\", start: 60, end: 80 },\n        { status: \"warning\", start: 10, end: 20 },\n    ];\n    public summaryZones = [...this.zones, { status: \"ok\", start: 20, end: 60 }];\n    public startDate = moment([2016, 11, 25, 15, 14, 29]); // \"2016-12-25T15:14:29.000Z\"\n    public uid = UtilityService.uuid();\n\n    public chart = new Chart(new XYGrid(thresholdsTopGridConfig()));\n    public summaryChart = new Chart(new XYGrid(thresholdsSummaryGridConfig()));\n\n    public chartAssist = new ChartAssist(this.chart);\n    public summaryChartAssist = new ChartAssist(this.summaryChart);\n    public tooltipsPlugin: ChartTooltipsPlugin;\n    public thresholdsPalette: ChartPalette;\n    public thicknessMap: Record<string, number>;\n\n    private accessors: LineAccessors;\n    private renderer: LineRenderer;\n    private scales: IXYScales;\n    private backgroundScales: IXYScales;\n    private summaryScales: IXYScales;\n\n    constructor(private thresholdsService: ThresholdsService) {\n        this.scales = {\n            x: new TimeIntervalScale(duration(5, \"minutes\")),\n            y: new LinearScale(),\n        };\n\n        this.backgroundScales = {\n            x: this.scales.x,\n            y: new BandScale(),\n        };\n\n        this.summaryScales = {\n            x: this.scales.x,\n            y: new BandScale(),\n        };\n\n        this.configureGrids(this.scales.y.id);\n\n        this.summaryChartAssist.syncWithChartAssist(this.chartAssist);\n\n        this.scales.y.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n        this.backgroundScales.y.fixDomain(StatusAccessors.STATUS_DOMAIN);\n        this.summaryScales.y.fixDomain(StatusAccessors.STATUS_DOMAIN);\n\n        this.thresholdsPalette = new ChartPalette(new MappedValueProvider({\n            \"error\": CHART_PALETTE_CS_S[1],\n            \"warning\": CHART_PALETTE_CS_S[2],\n            \"ok\": CHART_PALETTE_CS_S[4],\n        }, \"transparent\"));\n        this.thicknessMap = { \"ok\": BarRenderer.THIN };\n\n        this.renderer = new LineRenderer();\n        this.accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n    }\n\n    public ngOnInit() {\n        this.update();\n    }\n\n    private update() {\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map((d: any) => ({\n            ...d,\n            renderer: this.renderer,\n            accessors: this.accessors,\n            scales: this.scales,\n        }));\n\n        const summarySeriesSet: IChartAssistSeries<IAccessors>[] = [...seriesSet].map(s => {\n            const zones = this.thresholdsService.getThresholdZones(s, this.summaryZones, this.thresholdsPalette.standardColors);\n            this.thresholdsService.injectThresholdsData(s, zones);\n            return this.thresholdsService.getBackgrounds(s, zones, this.summaryScales,\n                                                         this.thresholdsPalette.standardColors,\n                                                         this.thicknessMap, cloneDeep(THRESHOLDS_SUMMARY_RENDERER_CONFIG));\n        });\n        const thresholdSeriesSet: IChartAssistSeries<IAccessors>[] = [];\n        for (const s of seriesSet) {\n            const zones = this.thresholdsService.getThresholdZones(s, this.zones, this.thresholdsPalette.standardColors);\n            this.thresholdsService.injectThresholdsData(s, zones);\n            thresholdSeriesSet.push(...[\n                this.thresholdsService.getBackgrounds(s, zones, this.backgroundScales, this.thresholdsPalette.backgroundColors),\n                ...this.thresholdsService.getThresholdLines(zones),\n                ...this.thresholdsService.getSideIndicators(zones, this.scales),\n            ]);\n        }\n        // chart assist needs to be used to update data\n        this.chartAssist.update([...thresholdSeriesSet, ...seriesSet]);\n        this.summaryChartAssist.update(summarySeriesSet);\n    }\n\n    private configureGrids(mainChartLeftScaleId: string) {\n        const topGrid = this.chart.getGrid() as XYGrid;\n        topGrid.leftScaleId = mainChartLeftScaleId;\n        const topGridConfig = topGrid.config();\n        topGridConfig.dimension.width(400);\n        topGridConfig.dimension.height(110);\n        topGridConfig.dimension.autoWidth = false;\n        topGridConfig.dimension.autoHeight = false;\n\n        const summaryGridConfig = this.summaryChart.getGrid().config();\n        summaryGridConfig.dimension.width(400);\n        summaryGridConfig.dimension.autoWidth = false;\n    }\n\n}\n\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: moment(\"2016-12-25T15:05:00Z\", format).toDate(), y: 30 },\n            { x: moment(\"2016-12-25T15:10:00Z\", format).toDate(), y: 80 },\n            { x: moment(\"2016-12-25T15:15:00Z\", format).toDate(), y: 80 },\n            { x: moment(\"2016-12-25T15:20:00Z\", format).toDate(), y: 80 },\n            { x: moment(\"2016-12-25T15:25:00Z\", format).toDate(), y: 45 },\n            { x: moment(\"2016-12-25T15:30:00Z\", format).toDate(), y: 60 },\n            { x: moment(\"2016-12-25T15:35:00Z\", format).toDate(), y: 10 },\n            { x: moment(\"2016-12-25T15:40:00Z\", format).toDate(), y: 35 },\n        ],\n    }];\n}\n\n";
      /***/
    },

    /***/
    "Z9Re":
    /*!*****************************************************************************!*\
      !*** ./examples/components/demo/thresholds/chart-docs-thresholds.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ChartDocsThresholdsModule */

    /***/
    function Z9Re(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsThresholdsModule", function () {
        return ChartDocsThresholdsModule;
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
      /*! ../common/demo-common.module */
      "s1Ul");
      /* harmony import */


      var _chart_docs_thresholds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chart-docs-thresholds.component */
      "MT3c");
      /* harmony import */


      var _thresholds_basic_thresholds_basic_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./thresholds-basic/thresholds-basic.example.component */
      "Ig0H");
      /* harmony import */


      var _thresholds_spark_thresholds_spark_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./thresholds-spark/thresholds-spark.example.component */
      "90nt");
      /* harmony import */


      var _thresholds_summary_thresholds_summary_example_thresholds_summary_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./thresholds-summary/thresholds-summary-example/thresholds-summary.example.component */
      "BVyO");
      /* harmony import */


      var _thresholds_summary_thresholds_summary_test_harness_thresholds_summary_test_harness_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component */
      "HweL");
      /* harmony import */


      var _thresholds_summary_thresholds_summary_test_thresholds_summary_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./thresholds-summary/thresholds-summary-test/thresholds-summary-test.component */
      "EYAC");
      /* harmony import */


      var _thresholds_summary_thresholds_summary_visual_test_thresholds_summary_visual_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component */
      "3EtR");
      /* harmony import */


      var _thresholds_summary_thresholds_summary_with_interval_scale_test_thresholds_summary_with_interval_scale_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component */
      "hLjc"); // eslint-disable-next-line max-len


      var exampleRoutes = [{
        path: "",
        component: _chart_docs_thresholds_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsThresholdsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _thresholds_basic_thresholds_basic_example_component__WEBPACK_IMPORTED_MODULE_8__["ThresholdsBasicExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "spark",
        component: _thresholds_spark_thresholds_spark_example_component__WEBPACK_IMPORTED_MODULE_9__["ThresholdsSparkExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "summary",
        component: _thresholds_summary_thresholds_summary_example_thresholds_summary_example_component__WEBPACK_IMPORTED_MODULE_10__["ThresholdsSummaryExampleComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "summary-test",
        component: _thresholds_summary_thresholds_summary_test_harness_thresholds_summary_test_harness_component__WEBPACK_IMPORTED_MODULE_11__["ThresholdsSummaryTestHarnessComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }, {
        path: "summary-visual-test",
        component: _thresholds_summary_thresholds_summary_visual_test_thresholds_summary_visual_test_component__WEBPACK_IMPORTED_MODULE_13__["ThresholdsSummaryVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsThresholdsModule = function ChartDocsThresholdsModule() {
        _classCallCheck(this, ChartDocsThresholdsModule);
      };

      ChartDocsThresholdsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_thresholds_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsThresholdsComponent"], _thresholds_basic_thresholds_basic_example_component__WEBPACK_IMPORTED_MODULE_8__["ThresholdsBasicExampleComponent"], _thresholds_spark_thresholds_spark_example_component__WEBPACK_IMPORTED_MODULE_9__["ThresholdsSparkExampleComponent"], _thresholds_summary_thresholds_summary_example_thresholds_summary_example_component__WEBPACK_IMPORTED_MODULE_10__["ThresholdsSummaryExampleComponent"], _thresholds_summary_thresholds_summary_test_thresholds_summary_test_component__WEBPACK_IMPORTED_MODULE_12__["ThresholdsSummaryTestComponent"], _thresholds_summary_thresholds_summary_test_harness_thresholds_summary_test_harness_component__WEBPACK_IMPORTED_MODULE_11__["ThresholdsSummaryTestHarnessComponent"], _thresholds_summary_thresholds_summary_visual_test_thresholds_summary_visual_test_component__WEBPACK_IMPORTED_MODULE_13__["ThresholdsSummaryVisualTestComponent"], _thresholds_summary_thresholds_summary_with_interval_scale_test_thresholds_summary_with_interval_scale_test_component__WEBPACK_IMPORTED_MODULE_14__["ThresholdsSummaryWithIntervalScaleTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("ZHgH");
          }
        }]
      })], ChartDocsThresholdsModule);
      /***/
    },

    /***/
    "ZHgH":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \*************************************************************************************************************/

    /*! no static exports found */

    /***/
    function ZHgH(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-thresholds.component.html": "vIjN",
        "./chart-docs-thresholds.component.ts": "5sUz",
        "./chart-docs-thresholds.module.ts": "P3qJ",
        "./thresholds-basic/thresholds-basic.example.component.html": "fdc+",
        "./thresholds-basic/thresholds-basic.example.component.ts": "Nl5z",
        "./thresholds-spark/thresholds-spark.example.component.html": "u9+C",
        "./thresholds-spark/thresholds-spark.example.component.ts": "15el",
        "./thresholds-summary/thresholds-summary-example/thresholds-summary.example.component.html": "MZ3U",
        "./thresholds-summary/thresholds-summary-example/thresholds-summary.example.component.ts": "BpZJ",
        "./thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component.html": "qW1a",
        "./thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component.ts": "/Odg",
        "./thresholds-summary/thresholds-summary-test/thresholds-summary-test.component.html": "39Fa",
        "./thresholds-summary/thresholds-summary-test/thresholds-summary-test.component.ts": "kEB1",
        "./thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component.html": "IZgm",
        "./thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component.ts": "b84I",
        "./thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component.html": "ZNpb",
        "./thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component.ts": "XuAt"
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
      webpackContext.id = "ZHgH";
      /***/
    },

    /***/
    "ZNpb":
    /*!*************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component.html ***!
      \*************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZNpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex align-items-start\">\n    <div class=\"d-flex flex-column\">\n        <nui-chart class=\"thresholds-main-chart\" [chart]=\"chart\" [nuiChartCollectionId]=\"uid\"></nui-chart>\n        <nui-chart class=\"thresholds-summary-chart\" [chart]=\"summaryChart\" [nuiChartCollectionId]=\"uid\"></nui-chart>\n    </div>\n    <nui-legend class=\"ml-2 thresholds-legend\"\n                seriesUnitLabel=\"sec\"\n                [active]=\"chartAssist.isLegendActive\"\n                [interactive]=\"true\"\n                (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n        <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                           [descriptionPrimary]=\"legendSeries['name']\"\n                           (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                           [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                           [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                           (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n            <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                  [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                  [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                <nui-chart-marker rightEdge\n                                  [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                  [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                </nui-chart-marker>\n            </nui-rich-legend-tile>\n        </nui-legend-series>\n    </nui-legend>\n</div>\n";
      /***/
    },

    /***/
    "b84I":
    /*!*********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-visual-test/thresholds-summary-visual-test.component.ts ***!
      \*********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b84I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-thresholds-summary-visual-test\",\n    templateUrl: \"./thresholds-summary-visual-test.component.html\",\n})\nexport class ThresholdsSummaryVisualTestComponent {\n    public singleSeries = { \"series-1\": [30, 95, 15, 60, 35] };\n    public thresholdEdges = { \"series-1\": [30, 80, 80, 80, 45, 60, 10, 35] };\n    public singleSeriesNoHits = { \"series-1\": [30, 55, 25, 55, 35] };\n    public multipleSeries = { \"series-1\": [30, 95, 15, 60, 35], \"series-2\": [100, 40, 70, 45, 90] };\n\n    public zones = [\n        { status: \"error\", start: 80 },\n        { status: \"error\", start: -100, end: 10 },\n        { status: \"warning\", start: 60, end: 80 },\n        { status: \"warning\", start: 10, end: 20 },\n    ];\n    public startDate = moment([2016, 11, 25, 15, 14, 29]); // \"2016-12-25T15:14:29.000Z\"\n}\n";
      /***/
    },

    /***/
    "fdc+":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-basic/thresholds-basic.example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fdc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "hLjc":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-with-interval-scale-test/thresholds-summary-with-interval-scale-test.component.ts ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: ThresholdsSummaryWithIntervalScaleTestComponent */

    /***/
    function hLjc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThresholdsSummaryWithIntervalScaleTestComponent", function () {
        return ThresholdsSummaryWithIntervalScaleTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thresholds_summary_with_interval_scale_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thresholds-summary-with-interval-scale-test.component.html */
      "ZNpb");
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
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_5__);

      var ThresholdsSummaryWithIntervalScaleTestComponent = /*#__PURE__*/function () {
        function ThresholdsSummaryWithIntervalScaleTestComponent(thresholdsService) {
          _classCallCheck(this, ThresholdsSummaryWithIntervalScaleTestComponent);

          this.thresholdsService = thresholdsService;
          this.zones = [{
            status: "error",
            start: 80
          }, {
            status: "error",
            start: -100,
            end: 10
          }, {
            status: "warning",
            start: 60,
            end: 80
          }, {
            status: "warning",
            start: 10,
            end: 20
          }];
          this.summaryZones = [].concat(_toConsumableArray(this.zones), [{
            status: "ok",
            start: 20,
            end: 60
          }]);
          this.startDate = moment_moment__WEBPACK_IMPORTED_MODULE_5___default()([2016, 11, 25, 15, 14, 29]); // "2016-12-25T15:14:29.000Z"

          this.uid = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["UtilityService"].uuid();
          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["thresholdsTopGridConfig"])()));
          this.summaryChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["thresholdsSummaryGridConfig"])()));
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
          this.summaryChartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.summaryChart);
          this.scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_5__["duration"])(5, "minutes")),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
          };
          this.backgroundScales = {
            x: this.scales.x,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]()
          };
          this.summaryScales = {
            x: this.scales.x,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]()
          };
          this.configureGrids(this.scales.y.id);
          this.summaryChartAssist.syncWithChartAssist(this.chartAssist);
          this.scales.y.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 100]);
          this.backgroundScales.y.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN);
          this.summaryScales.y.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN);
          this.thresholdsPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]({
            "error": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1],
            "warning": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2],
            "ok": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][4]
          }, "transparent"));
          this.thicknessMap = {
            "ok": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"].THIN
          };
          this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
          this.accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
        }

        _createClass(ThresholdsSummaryWithIntervalScaleTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.update();
          }
        }, {
          key: "update",
          value: function update() {
            var _this4 = this;

            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                renderer: _this4.renderer,
                accessors: _this4.accessors,
                scales: _this4.scales
              });
            });

            var summarySeriesSet = _toConsumableArray(seriesSet).map(function (s) {
              var zones = _this4.thresholdsService.getThresholdZones(s, _this4.summaryZones, _this4.thresholdsPalette.standardColors);

              _this4.thresholdsService.injectThresholdsData(s, zones);

              return _this4.thresholdsService.getBackgrounds(s, zones, _this4.summaryScales, _this4.thresholdsPalette.standardColors, _this4.thicknessMap, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["THRESHOLDS_SUMMARY_RENDERER_CONFIG"]));
            });

            var thresholdSeriesSet = [];

            var _iterator4 = _createForOfIteratorHelper(seriesSet),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var s = _step4.value;
                var zones = this.thresholdsService.getThresholdZones(s, this.zones, this.thresholdsPalette.standardColors);
                this.thresholdsService.injectThresholdsData(s, zones);
                thresholdSeriesSet.push.apply(thresholdSeriesSet, [this.thresholdsService.getBackgrounds(s, zones, this.backgroundScales, this.thresholdsPalette.backgroundColors)].concat(_toConsumableArray(this.thresholdsService.getThresholdLines(zones)), _toConsumableArray(this.thresholdsService.getSideIndicators(zones, this.scales))));
              } // chart assist needs to be used to update data

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.chartAssist.update([].concat(thresholdSeriesSet, _toConsumableArray(seriesSet)));
            this.summaryChartAssist.update(summarySeriesSet);
          }
        }, {
          key: "configureGrids",
          value: function configureGrids(mainChartLeftScaleId) {
            var topGrid = this.chart.getGrid();
            topGrid.leftScaleId = mainChartLeftScaleId;
            var topGridConfig = topGrid.config();
            topGridConfig.dimension.width(400);
            topGridConfig.dimension.height(110);
            topGridConfig.dimension.autoWidth = false;
            topGridConfig.dimension.autoHeight = false;
            var summaryGridConfig = this.summaryChart.getGrid().config();
            summaryGridConfig.dimension.width(400);
            summaryGridConfig.dimension.autoWidth = false;
          }
        }]);

        return ThresholdsSummaryWithIntervalScaleTestComponent;
      }();

      ThresholdsSummaryWithIntervalScaleTestComponent.ctorParameters = function () {
        return [{
          type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]
        }];
      };

      ThresholdsSummaryWithIntervalScaleTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-thresholds-summary-with-interval-scale-test",
        template: _raw_loader_thresholds_summary_with_interval_scale_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]])], ThresholdsSummaryWithIntervalScaleTestComponent);

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:05:00Z", format).toDate(),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:10:00Z", format).toDate(),
            y: 80
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:15:00Z", format).toDate(),
            y: 80
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:20:00Z", format).toDate(),
            y: 80
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:25:00Z", format).toDate(),
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:30:00Z", format).toDate(),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:35:00Z", format).toDate(),
            y: 10
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("2016-12-25T15:40:00Z", format).toDate(),
            y: 35
          }]
        }];
      }
      /***/

    },

    /***/
    "kEB1":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-test/thresholds-summary-test.component.ts ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kEB1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, OnChanges, OnInit, SimpleChanges } from \"@angular/core\";\nimport {\n    BandScale, BarRenderer, Chart, ChartAssist, ChartPalette, ChartTooltipsPlugin, CHART_PALETTE_CS_S, getAutomaticDomainWithIncludedInterval, IAccessors,\n    IChartAssistSeries, IChartSeries, IDataSeries, ILineAccessors, ISimpleThresholdZone, IXYScales, LineAccessors, LinearScale, LineRenderer,\n    MappedValueProvider, StatusAccessors, ThresholdsService, thresholdsSummaryGridConfig, thresholdsTopGridConfig, THRESHOLDS_SUMMARY_RENDERER_CONFIG,\n    TimeScale, UtilityService, XYGrid,\n} from \"@nova-ui/charts\";\nimport cloneDeep from \"lodash/cloneDeep\";\nimport { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-thresholds-summary-test\",\n    templateUrl: \"./thresholds-summary-test.component.html\",\n})\nexport class ThresholdsSummaryTestComponent implements OnChanges, OnInit {\n    @Input() data: Record<string, number[]>;\n    @Input() zones: ISimpleThresholdZone[];\n    @Input() startDate: Moment;\n\n    public uid = UtilityService.uuid();\n\n    public chart = new Chart(new XYGrid(thresholdsTopGridConfig()));\n    public summaryChart = new Chart(new XYGrid(thresholdsSummaryGridConfig()));\n\n    public chartAssist = new ChartAssist(this.chart);\n    public summaryChartAssist = new ChartAssist(this.summaryChart);\n    public tooltipsPlugin: ChartTooltipsPlugin;\n    public thresholdsPalette: ChartPalette;\n    public thicknessMap: Record<string, number>;\n\n    private accessors: LineAccessors;\n    private renderer: LineRenderer;\n    private scales: IXYScales;\n    private backgroundScales: IXYScales;\n    private summaryScales: IXYScales;\n\n    constructor(private thresholdsService: ThresholdsService) {\n        this.scales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        this.backgroundScales = {\n            x: this.scales.x,\n            y: new BandScale(),\n        };\n\n        this.summaryScales = {\n            x: this.scales.x,\n            y: new BandScale(),\n        };\n\n        this.configureGrids(this.scales.y.id);\n\n        this.summaryChartAssist.syncWithChartAssist(this.chartAssist);\n\n        this.scales.y.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n        this.backgroundScales.y.fixDomain(StatusAccessors.STATUS_DOMAIN);\n        this.summaryScales.y.fixDomain(StatusAccessors.STATUS_DOMAIN);\n\n        this.thresholdsPalette = new ChartPalette(new MappedValueProvider({\n            \"error\": CHART_PALETTE_CS_S[1],\n            \"warning\": CHART_PALETTE_CS_S[2],\n            \"ok\": CHART_PALETTE_CS_S[4],\n        }, \"transparent\"));\n        this.thicknessMap = { \"ok\": BarRenderer.THIN };\n\n        this.renderer = new LineRenderer();\n        this.accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n    }\n\n    public ngOnInit() {\n        this.update(this.data);\n    }\n\n    public ngOnChanges(changes: SimpleChanges): void {\n        if (changes[\"data\"] || changes[\"zones\"]) {\n            this.update(this.data);\n        }\n    }\n\n    private update(data: Record<string, number[]>) {\n        const seriesSet: IChartSeries<ILineAccessors>[] = getDataSeriesSet(data, this.accessors, this.startDate).map((d: any) => ({\n            ...d,\n            renderer: this.renderer,\n            scales: this.scales,\n        }));\n\n        const summarySeriesSet: IChartAssistSeries<IAccessors>[] = [...seriesSet].map(s => {\n            const summaryZoneDefs = [...this.zones, { status: \"ok\" }];\n            const zones = this.thresholdsService.getThresholdZones(s, summaryZoneDefs, this.thresholdsPalette.standardColors);\n            this.thresholdsService.injectThresholdsData(s, zones);\n            return this.thresholdsService.getBackgrounds(s, zones, this.summaryScales,\n                                                         this.thresholdsPalette.standardColors,\n                                                         this.thicknessMap, cloneDeep(THRESHOLDS_SUMMARY_RENDERER_CONFIG));\n        });\n        const thresholdSeriesSet: IChartAssistSeries<IAccessors>[] = [];\n        for (const s of seriesSet) {\n            const zones = this.thresholdsService.getThresholdZones(s, this.zones, this.thresholdsPalette.standardColors);\n            this.thresholdsService.injectThresholdsData(s, zones);\n            thresholdSeriesSet.push(...[\n                this.thresholdsService.getBackgrounds(s, zones, this.backgroundScales, this.thresholdsPalette.backgroundColors),\n                ...this.thresholdsService.getThresholdLines(zones),\n                ...this.thresholdsService.getSideIndicators(zones, this.scales),\n            ]);\n        }\n        // chart assist needs to be used to update data\n        this.chartAssist.update([...thresholdSeriesSet, ...seriesSet]);\n        this.summaryChartAssist.update(summarySeriesSet);\n    }\n\n    private configureGrids(mainChartLeftScaleId: string) {\n        const topGrid = this.chart.getGrid() as XYGrid;\n        topGrid.leftScaleId = mainChartLeftScaleId;\n        const topGridConfig = topGrid.config();\n        topGridConfig.dimension.width(400);\n        topGridConfig.dimension.height(110);\n        topGridConfig.dimension.autoWidth = false;\n        topGridConfig.dimension.autoHeight = false;\n\n        const summaryGridConfig = this.summaryChart.getGrid().config();\n        summaryGridConfig.dimension.width(400);\n        summaryGridConfig.dimension.autoWidth = false;\n    }\n\n}\n\nfunction getDataSeriesSet(data: Record<string, number[]>, accessors: LineAccessors, startDate: Moment): IDataSeries<LineAccessors>[] {\n    const toDataPoint = (y: number, i: number) => ({ x: startDate.clone().add(i, \"d\"), y });\n\n    return Object.keys(data).map((seriesId) => {\n        const seriesData = data[seriesId];\n        const dataValues = seriesData.map(toDataPoint);\n\n        return {\n            id: seriesId,\n            name: seriesId,\n            data: dataValues,\n            accessors,\n        };\n    });\n}\n";
      /***/
    },

    /***/
    "qW1a":
    /*!*************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-summary/thresholds-summary-test-harness/thresholds-summary-test-harness.component.html ***!
      \*************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qW1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-thresholds-summary-test-harness\">\n    <nui-thresholds-summary-test [data]=\"data\" [zones]=\"zones\" [startDate]=\"startDate\"></nui-thresholds-summary-test>\n    <br>\n    <h2>Data</h2>\n    <input id=\"data-input\" type=\"text\" class=\"w-100 mt-5\" [ngModel]=\"data | json\" (ngModelChange)=\"dataChanged($event)\">\n    <h2>Zones</h2>\n    <textarea id=\"zones-input\" rows=\"13\" cols=\"30\" [ngModel]=\"zones | json\" (ngModelChange)=\"zonesChanged($event)\"></textarea>\n</div>\n";
      /***/
    },

    /***/
    "u9+C":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/thresholds-spark/thresholds-spark.example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn\" class=\"d-flex\">\n    <nui-chart class=\"w-100\" [chart]=\"spark.chart\" nuiChartCollectionId=\"example-collection-id\"></nui-chart>\n    <div class=\"d-flex flex-column pl-2\">\n        <nui-legend-series *ngIf=\"spark.chartSeriesSet[0]; let lineSeries\"\n                           [interactive]=\"false\"\n                           [descriptionSecondary]=\"lineSeries.name\">\n            <nui-rich-legend-tile [unitLabel]=\"lineSeries.units\"\n                                  [value]=\"chartAssist.getHighlightedValue(lineSeries, 'y')\"\n                                  [backgroundColor]=\"statusBgColors.get(chartAssist.getHighlightedValue(lineSeries, 'status'))\"\n                                  [attr.data-title]=\"chartAssist.getHighlightedValue(lineSeries, 'status')\">\n                <nui-icon *ngIf=\"chartAssist.getHighlightedValue(lineSeries, 'status'); let status\"\n                          iconSize=\"small\"\n                          [icon]=\"statusIcons[status]\"\n                          leftEdge></nui-icon>\n            </nui-rich-legend-tile>\n        </nui-legend-series>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "vIjN":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/thresholds/chart-docs-thresholds.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vIjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Thresholds</h1>\n<p>\n    Unlike in <code>novajs</code> charts, threshold functionality is not built into the chart component.\n    To get threshold specific elements on your chart you need separate data series that will be used by generic\n    renderers such as the\n    <code><a href=\"../classes/BarRenderer.html\" target=\"_blank\">BarRenderer</a></code> to\n    display the threshold visualizations. The process of creating the data series needed for thresholds\n    consists mainly of the following:\n</p>\n<ol>\n    <li>Creating one or more zone series that define the threshold areas</li>\n    <li>Injecting the zone data into the standard data series to provide access to this information from the legend, tooltips, etc.</li>\n    <li>Creating the threshold series that actually visualize the thresholds on the chart</li>\n    <li>\n        Creating additional visual elements such as side indicators and horizontal lines indicating\n        the start and end of each threshold zone\n    </li>\n</ol>\n<p>\n    To help you with all of this, we've built a\n    <code><a href=\"../injectables/ThresholdsService.html\" target=\"_blank\">ThresholdsService</a></code>\n    that does the most common tasks in terms of threshold data calculation and new series generation.\n</p>\n<p>\n    Sound complicated still?\n</p>\n<p>\n    Let's give it a try. Check out the inline comments of the following example.\n</p>\n<nui-example-wrapper filenamePrefix=\"thresholds-basic\"\n                     exampleTitle=\"Basic Thresholds For Line Chart\">\n    <nui-thresholds-basic-example></nui-thresholds-basic-example>\n</nui-example-wrapper>\n\n<p>\n    For the above example we used\n    <code><a href=\"../classes/TimeIntervalScale.html\" target=\"_blank\">TimeIntervalScale</a></code> for the\n    horizontal axis, but it can easily be replaced with a continuous\n    <code><a href=\"../classes/TimeScale.html\" target=\"_blank\">TimeScale</a></code> if needed. The\n    service will do more precise calculations of background colored areas for a continuous scale. For an example\n    of this, see the <strong>Thresholds Summary</strong> demo farther down the page.\n</p>\n\n<h2>Spark Chart With Thresholds</h2>\n<p>\n    The process is similar for a spark chart. To see how, take a look at the inline comments of the example below.\n</p>\n<nui-example-wrapper filenamePrefix=\"thresholds-spark\"\n                     exampleTitle=\"Thresholds For Spark Charts\">\n    <nui-thresholds-spark-example></nui-thresholds-spark-example>\n</nui-example-wrapper>\n\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    When having multiple series per spark, you need to call\n    <code><a href=\"../classes/SparkChartAssist.html#updateSparks\" target=\"_blank\">updateSparks()</a></code>\n    method of <code><a href=\"../classes/SparkChartAssist.html\" target=\"_blank\">SparkChartAssist</a></code>\n    instead of <code><a href=\"../classes/SparkChartAssist.html#update\" target=\"_blank\">update()</a></code>\n    as usual. <strong>For general information about implementing spark charts, please see the spark chart page\n    <a href=\"../additional-documentation/spark.html\" target=\"_parent\">here</a></strong>.\n</nui-message>\n\n<h2>Thresholds Summary</h2>\n<p>\n    If you want to add an area below the main chart that displays a summary of the threshold data from multiple series,\n    you can add a second <code><a href=\"../components/ChartComponent.html\" target=\"_blank\">nui-chart</a></code>\n    to the page with the help of an additional instance of\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code>. To configure each\n    of the chart grids to have the correct appearance you can use the\n    <code><a href=\"../miscellaneous/functions.html#thresholdsTopGridConfig\" target=\"_blank\">thresholdsTopGridConfig</a></code>\n    function for the main chart grid and\n    the <code><a href=\"../miscellaneous/functions.html#thresholdsSummaryGridConfig\" target=\"_blank\">thresholdsSummaryGridConfig</a></code>\n    function for the summary chart grid.\n</p>\n<p>\n    In order to synchronize the behaviors of the summary chart with the main chart's various legend\n    interaction behaviors, you can invoke ChartAssist's\n    <code><a href=\"../classes/ChartAssist.html#syncWithChartAssist\" target=\"_blank\">syncWithChartAssist</a></code>\n    method on the summary chart assist passing a reference to the main chart assist.\n</p>\n<p>\n    The rest of the process is very similar to what's been shown in the previous examples. For more details\n    about how to implement the summary chart take a look at the inline comments of the example source below.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> By UX design, the threshold visualizations on the main chart of the following example are\n    only displayed when a series is either hovered on the legend or is the only series selected on the legend. This\n    behavior is meant to keep the visualizations focused on the primary data and to allow the user to inspect\n    the secondary threshold data of each series via the legend if desired.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"thresholds-summary\" exampleTitle=\"Thresholds Summary\">\n    <nui-thresholds-summary-example></nui-thresholds-summary-example>\n</nui-example-wrapper>\n\n<p>\n    Easy! Isn't it?\n</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-thresholds-chart-docs-thresholds-module-es5.js.map