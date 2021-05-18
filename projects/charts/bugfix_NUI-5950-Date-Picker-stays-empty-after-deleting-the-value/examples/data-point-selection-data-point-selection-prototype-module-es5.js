(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-point-selection-data-point-selection-prototype-module"], {
    /***/
    "25si":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/development/data-point-selection/data-point-selection-prototype.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: DataPointSelectionPrototypeComponent */

    /***/
    function si(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataPointSelectionPrototypeComponent", function () {
        return DataPointSelectionPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_data_point_selection_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./data-point-selection-prototype.component.html */
      "IPrL");
      /* harmony import */


      var _data_point_selection_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data-point-selection-prototype.component.less */
      "tgWw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! lodash/isEmpty */
      "E+oP");
      /* harmony import */


      var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! lodash/isUndefined */
      "TP7S");
      /* harmony import */


      var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_7__);

      var format = "YYYY-MM-DDTHH:mm:ssZ";
      var baseDate = "2016-12-25T15:05:00Z";
      var Status;

      (function (Status) {
        Status["Up"] = "up";
        Status["Warning"] = "warning";
        Status["Critical"] = "critical";
      })(Status || (Status = {}));

      var DataPointSelectionPrototypeComponent = /*#__PURE__*/function () {
        function DataPointSelectionPrototypeComponent() {
          var _this = this;

          _classCallCheck(this, DataPointSelectionPrototypeComponent);

          // Use the same 'x' scale id for both charts to ensure that interaction events such as hover are shared between the charts
          this.xScaleId = "xScale";
          this.selectedDataPoints = {};
          this.labelPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLabelPlugin"]();
          this.colorProvider = {
            // sets the bars used to visualize the selection box to 'transparent'. All other bars just use the first color in the CS1 palette.
            get: function get(seriesId) {
              return seriesId === "selection-box" ? "transparent" : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS1"][0];
            },
            reset: function reset() {}
          };

          this.handleDataPointsInteraction = function (event) {
            var data = event.data; // we're interested in data point click events here

            if (data.interactionType === _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click) {
              // set the selected data points
              _this.selectedDataPoints = data.dataPoints;

              if (_this.renderer.config.stateStyles) {
                // change the bar container opacity from 0.1 to 0.3
                _this.renderer.config.stateStyles.deemphasized = {
                  opacity: 0.3
                };
              } // redraw the charts to apply the selected data point style


              _this.redrawCharts(); // store the interaction label position for the selected data point


              _this.selectedLabelPosition = _this.calculateInteractionLabelPosition(data); // apply the label position based on the click

              _this.barChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"]).next({
                data: {
                  interactionType: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove,
                  values: _this.selectedLabelPosition
                }
              });
            }
          };

          this.handleInteractionLabelUpdates = function (event) {
            var data = event.data; // The condition checks whether the mouse has moved away from the chart and a selected label position is stored

            if (data.interactionType === _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove && lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(data.values) && _this.selectedLabelPosition) {
              // ensure label updates are enabled
              _this.labelPlugin.areLabelUpdatesEnabled = true; // Update the label with the stored label position by manually emitting an 'INTERACTION_VALUES_EVENT'.
              // Note that 'broadcast' is set to 'true' to let the 'nuiChartCollection' directive know that the event is
              // coming from outside the chart and should not propagate to other charts in the collection.

              _this.barChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"]).next({
                data: {
                  interactionType: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove,
                  values: _this.selectedLabelPosition
                },
                broadcast: true
              }); // disable further label updates


              _this.labelPlugin.areLabelUpdatesEnabled = false;
            } else if (data.interactionType === _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(data.values)) {
              // allow label updates while the mouse is hovering over the chart
              _this.labelPlugin.areLabelUpdatesEnabled = true;
            }
          };

          this.handleMouseActive = function (event) {
            if (_this.renderer.config.stateStyles) {
              if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(_this.selectedDataPoints) && !event.data) {
                // if there's a selected data point and the mouse has moved away
                // from the chart, set the bar container opacity to 0.3
                _this.renderer.config.stateStyles.deemphasized = {
                  opacity: 0.3
                };
              } else if (event.data) {
                // if the mouse is over the chart set the bar container opacity to 0.3
                _this.renderer.config.stateStyles.deemphasized = {
                  opacity: 0.1
                };
              }
            }

            if (_this.barChart.getDataManager().chartSeriesSet.length > 0 && _this.statusChart.getDataManager().chartSeriesSet.length > 0) {
              // redraw the charts if we have data
              _this.redrawCharts();
            }
          };
          /**
           * Allows the 'BarHighlightingStrategy' to know which data point (or bar) on a series is selected, if any.
           * Return 'DATA_POINT_NOT_FOUND' if no data point is selected on the specified series.
           */


          this.selectedDataPointIdxFn = function (seriesId) {
            var _a, _b, _c;

            return (_c = (_b = (_a = _this.selectedDataPoints) === null || _a === void 0 ? void 0 : _a[seriesId]) === null || _b === void 0 ? void 0 : _b.index) !== null && _c !== void 0 ? _c : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DATA_POINT_NOT_FOUND"];
          };
          /**
           * Sets the stroke color of the selection box when a time interval is selected
           *
           * @returns The 'selected' class (see less file) if a bar is selected, the series id matches the selection box series, and the
           * selected data point index matches the current index; otherwise, returns an empty string.
           */


          this.cssClassAccessor = function (d, i, series, dataSeries) {
            var _a;

            return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(_this.selectedDataPoints) && dataSeries.id === "selection-box" && ((_a = _this.selectedDataPoints[dataSeries.id]) === null || _a === void 0 ? void 0 : _a.index) === i ? "selected" : "";
          };
        }

        _createClass(DataPointSelectionPrototypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setUpBarChart();
            this.setUpStatusChart();
          }
        }, {
          key: "onReset",
          value: function onReset() {
            // Reset the stored selection
            this.selectedDataPoints = {};
            this.selectedLabelPosition = undefined; // Redraw the charts

            this.redrawCharts(); // Re-enable interaction label updates and hide the label by emitting a mouse move 'INTERACTION_VALUES_EVENT' with empty values.

            this.labelPlugin.areLabelUpdatesEnabled = true;
            this.barChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"]).next({
              data: {
                interactionType: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove,
                values: {}
              }
            });
          }
        }, {
          key: "setUpBarChart",
          value: function setUpBarChart() {
            var _this2 = this;

            this.barChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.configureBarGrid());
            this.barChart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLinePlugin"]());
            this.barChart.addPlugin(this.labelPlugin); // Setting up data point click handling

            this.barChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_DATA_POINTS_EVENT"]).subscribe(this.handleDataPointsInteraction); // Setting up interaction label update handling

            this.barChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"]).subscribe(this.handleInteractionLabelUpdates); // Setting up what happens on chart mouseenter and mouseleave

            this.barChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MOUSE_ACTIVE_EVENT"]).subscribe(this.handleMouseActive); // The color provider sets the selection boxes to 'transparent'

            var accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barAccessors"])({}, this.colorProvider); // The 'cssClassAccessor' updates the stroke color of the selection box when a time interval is selected

            accessors.data.cssClass = this.cssClassAccessor;
            var scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barScales"])(); // Use the same 'x' scale id as the status chart to ensure that interaction events such as hover are shared between the charts

            scales.x = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_7__["duration"])(5, "minutes"), this.xScaleId); // The 'barThickness' method sets the selection box width to be larger than the standard bars

            accessors.data.thickness = this.barThickness(scales);
            var rendererConfig = {
              // Supply a 'selectedDataPointIdxFn' to the 'BarHighlightStrategy' to prevent the selected bar
              // from being deemphasized/grayed out as the chart is hovered.
              highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarHighlightStrategy"]("x", 1, this.selectedDataPointIdxFn),
              cursor: "pointer"
            };
            this.renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"](rendererConfig); // Initialize the bar chart

            this.barChart.update(getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                accessors: accessors,
                renderer: _this2.renderer,
                scales: scales
              });
            }));
          }
        }, {
          key: "setUpStatusChart",
          value: function setUpStatusChart() {
            var _this3 = this;

            this.statusChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.configureStatusGrid());
            this.statusChart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLinePlugin"]()); // Setting up the status chart scales

            var statusYScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BandScale"]();
            statusYScale.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StatusAccessors"].STATUS_DOMAIN); // Use the same 'x' scale id as the bar chart to ensure that interaction events such as hover are shared between the charts

            var statusXScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_7__["duration"])(5, "minutes"), this.xScaleId);
            statusXScale.fixDomain([moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).toDate(), moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(25, "minutes").toDate()]);
            var statusScales = {
              x: statusXScale,
              y: statusYScale
            }; // Setting up the status chart accessors

            var myStatusAccessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["statusAccessors"])(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"](getStatusValueMap()));

            myStatusAccessors.data.thickness = function (data) {
              return data.status === Status.Up ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].THIN : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].THICK;
            }; // The 'cssClassAccessor' updates the stroke color of the selection box when a time interval is selected
            // TODO: Implement 'selection-box' series for displaying the selection box on the status chart. For reference,
            // see 'selection-box' data series on the bar chart.


            myStatusAccessors.data.cssClass = this.cssClassAccessor; // Initializing the status chart

            this.statusChart.update(getStatusData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: myStatusAccessors,
                renderer: _this3.renderer,
                scales: statusScales
              });
            }));
          }
        }, {
          key: "configureBarGrid",
          value: function configureBarGrid() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarGridConfig"]();
            gridConfig.axis.left.visible = false;
            gridConfig.axis.left.gridTicks = false; // Disable 'axis.bottom.fit' to set left and right margins manually

            gridConfig.axis.bottom.fit = false;
            gridConfig.borders.top = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BorderConfig"]();
            gridConfig.cursor = "pointer";
            gridConfig.dimension.padding.top = 0; // Synchronize the left and right margins (left margin default is 30px)

            gridConfig.dimension.margin.right = gridConfig.dimension.margin.left; // Use these settings to make the bar chart the same height as the status chart
            // gridConfig.dimension.autoHeight = false;
            // gridConfig.dimension.height(30);

            return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](gridConfig);
          }
        }, {
          key: "configureStatusGrid",
          value: function configureStatusGrid() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarStatusGridConfig"]();
            gridConfig.axis.bottom.visible = false;
            gridConfig.cursor = "pointer";
            gridConfig.dimension.margin.bottom = 0; // Synchronize the left and right margins (left margin default is 30px)

            gridConfig.dimension.margin.right = gridConfig.dimension.margin.left;
            gridConfig.borders.bottom.visible = false;
            return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](gridConfig);
          }
        }, {
          key: "redrawCharts",
          value: function redrawCharts() {
            this.barChart.update(this.barChart.getDataManager().chartSeriesSet);
            this.statusChart.update(this.statusChart.getDataManager().chartSeriesSet);
          }
          /**
           * Sets the width of the bars on the bar chart. (This is only necessary if you want the selection boxes
           * to be wider than the standard bars).
           */

        }, {
          key: "barThickness",
          value: function barThickness(scales) {
            return function (d, i, series, dataSeries) {
              var _a, _b, _c, _d;

              var thickness;
              var x1 = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["convert"])(scales.x, (_b = (_a = dataSeries.accessors.data) === null || _a === void 0 ? void 0 : _a["startX"]) === null || _b === void 0 ? void 0 : _b.call(_a, d, i, dataSeries.data, dataSeries), 0);
              var x2 = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["convert"])(scales.x, (_d = (_c = dataSeries.accessors.data) === null || _c === void 0 ? void 0 : _c["endX"]) === null || _d === void 0 ? void 0 : _d.call(_c, d, i, dataSeries.data, dataSeries), 1);
              thickness = Math.abs(x1 - x2); // Allow the selection boxes to be a little wider than the data bars

              thickness -= dataSeries.id === "selection-box" ? 2 : 6;
              thickness = Math.max(thickness, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].MIN_BAR_THICKNESS);
              return thickness;
            };
          }
          /**
           * Calculates the desired position of the interaction label based on the position of the first data point in the event payload
           */

        }, {
          key: "calculateInteractionLabelPosition",
          value: function calculateInteractionLabelPosition(data) {
            var sampleDataPoint = data.dataPoints[Object.keys(data.dataPoints)[0]];
            var xScales = [sampleDataPoint.dataSeries.scales.x];
            var yScales = [sampleDataPoint.dataSeries.scales.y];

            if (!sampleDataPoint.position || lodash_isUndefined__WEBPACK_IMPORTED_MODULE_6___default()(sampleDataPoint.position.width) || lodash_isUndefined__WEBPACK_IMPORTED_MODULE_6___default()(sampleDataPoint.position.height)) {
              throw new Error("Can't calculate x and y values");
            }

            var xCoordinate = sampleDataPoint.position.x + sampleDataPoint.position.width / 2;
            var yCoordinate = sampleDataPoint.position.y + sampleDataPoint.position.height / 2;
            return _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["UtilityService"].getXYValues(xScales, yScales, xCoordinate, yCoordinate);
          }
        }]);

        return DataPointSelectionPrototypeComponent;
      }();

      DataPointSelectionPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_data_point_selection_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_data_point_selection_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DataPointSelectionPrototypeComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          data: [{
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).toDate(),
            value: 66
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(5, "minutes").toDate(),
            value: 14
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(10, "minutes").toDate(),
            value: 25
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(15, "minutes").toDate(),
            value: 55
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(20, "minutes").toDate(),
            value: 33
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(25, "minutes").toDate(),
            value: 5
          }]
        }, // The sole purpose of this series is to define the selection boxes that have a togglable selection
        // outline. The 'fill' of the boxes is set to transparent by the 'colorProvider' in the component
        // above. And, the blue outline of the selected time interval is toggled by the 'cssClassAccessor'
        // method in the above component.
        {
          id: "selection-box",
          data: [{
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).toDate(),
            value: 100
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(5, "minutes").toDate(),
            value: 100
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(10, "minutes").toDate(),
            value: 100
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(15, "minutes").toDate(),
            value: 100
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(20, "minutes").toDate(),
            value: 100
          }, {
            category: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(25, "minutes").toDate(),
            value: 100
          }]
        }];
      }

      function getStatusValueMap() {
        var _ref;

        return _ref = {}, _defineProperty(_ref, Status.Up, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][4]), _defineProperty(_ref, Status.Warning, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][2]), _defineProperty(_ref, Status.Critical, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][1]), _ref;
      }

      function getStatusData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            status: Status.Up,
            start: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).toDate(),
            end: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).toDate()
          }, {
            status: Status.Warning,
            start: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(5, "minutes").toDate(),
            end: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(5, "minutes").toDate()
          }, {
            status: Status.Critical,
            start: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(10, "minutes").toDate(),
            end: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(10, "minutes").toDate()
          }, {
            status: Status.Up,
            start: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(15, "minutes").toDate(),
            end: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(15, "minutes").toDate()
          }, {
            status: Status.Critical,
            start: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(20, "minutes").toDate(),
            end: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(20, "minutes").toDate()
          }, {
            status: Status.Up,
            start: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(25, "minutes").toDate(),
            end: moment_moment__WEBPACK_IMPORTED_MODULE_7___default()(baseDate, format).add(25, "minutes").toDate()
          }]
        }];
      }
      /***/

    },

    /***/
    "E2It":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/data-point-selection/data-point-selection-prototype.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function E2It(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit, ViewEncapsulation } from \"@angular/core\";\nimport {\n    BandScale,\n    barAccessors,\n    BarGridConfig,\n    BarHighlightStrategy,\n    BarRenderer,\n    barScales,\n    BarStatusGridConfig,\n    BorderConfig,\n    Chart,\n    CHART_PALETTE_CS1,\n    CHART_PALETTE_CS_S,\n    convert,\n    DataAccessor,\n    DATA_POINT_NOT_FOUND,\n    IAccessors,\n    IBarRendererConfig,\n    IChartEvent,\n    IDataPoint,\n    IDataSeries,\n    IInteractionDataPointsEvent,\n    IInteractionValues,\n    IInteractionValuesPayload,\n    InteractionLabelPlugin,\n    InteractionLinePlugin,\n    InteractionType,\n    INTERACTION_DATA_POINTS_EVENT,\n    INTERACTION_VALUES_EVENT,\n    IXYScales,\n    MappedValueProvider,\n    MOUSE_ACTIVE_EVENT,\n    SelectedDatPointIdxFn,\n    StatusAccessors,\n    statusAccessors,\n    TimeIntervalScale,\n    UtilityService,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport isEmpty from \"lodash/isEmpty\";\nimport isUndefined from \"lodash/isUndefined\";\nimport moment, { duration } from \"moment/moment\";\n\nconst format = \"YYYY-MM-DDTHH:mm:ssZ\";\nconst baseDate = \"2016-12-25T15:05:00Z\";\n\nenum Status {\n    Up = \"up\",\n    Warning = \"warning\",\n    Critical = \"critical\",\n}\n\n@Component({\n    templateUrl: \"./data-point-selection-prototype.component.html\",\n    styleUrls: [\"./data-point-selection-prototype.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class DataPointSelectionPrototypeComponent implements OnInit {\n    public barChart: Chart;\n    public statusChart: Chart;\n\n    // Use the same 'x' scale id for both charts to ensure that interaction events such as hover are shared between the charts\n    private xScaleId = \"xScale\";\n\n    private selectedDataPoints: Record<string, IDataPoint> = {};\n    private labelPlugin = new InteractionLabelPlugin();\n    private renderer: BarRenderer;\n    private selectedLabelPosition?: IInteractionValues;\n\n    private colorProvider = {\n        // sets the bars used to visualize the selection box to 'transparent'. All other bars just use the first color in the CS1 palette.\n        get: (seriesId: string) => seriesId === \"selection-box\" ? \"transparent\" : CHART_PALETTE_CS1[0],\n        reset: () => { },\n    };\n\n    public ngOnInit() {\n        this.setUpBarChart();\n        this.setUpStatusChart();\n    }\n\n    public onReset() {\n        // Reset the stored selection\n        this.selectedDataPoints = {};\n        this.selectedLabelPosition = undefined;\n\n        // Redraw the charts\n        this.redrawCharts();\n\n        // Re-enable interaction label updates and hide the label by emitting a mouse move 'INTERACTION_VALUES_EVENT' with empty values.\n        this.labelPlugin.areLabelUpdatesEnabled = true;\n        this.barChart.getEventBus().getStream(INTERACTION_VALUES_EVENT).next({ data: { interactionType: InteractionType.MouseMove, values: {} } });\n    }\n\n    private setUpBarChart() {\n        this.barChart = new Chart(this.configureBarGrid());\n        this.barChart.addPlugin(new InteractionLinePlugin());\n        this.barChart.addPlugin(this.labelPlugin);\n\n        // Setting up data point click handling\n        this.barChart.getEventBus().getStream(INTERACTION_DATA_POINTS_EVENT).subscribe(this.handleDataPointsInteraction);\n        // Setting up interaction label update handling\n        this.barChart.getEventBus().getStream(INTERACTION_VALUES_EVENT).subscribe(this.handleInteractionLabelUpdates);\n        // Setting up what happens on chart mouseenter and mouseleave\n        this.barChart.getEventBus().getStream(MOUSE_ACTIVE_EVENT).subscribe(this.handleMouseActive);\n\n        // The color provider sets the selection boxes to 'transparent'\n        const accessors = barAccessors({}, this.colorProvider);\n        // The 'cssClassAccessor' updates the stroke color of the selection box when a time interval is selected\n        accessors.data.cssClass = this.cssClassAccessor;\n\n        const scales = barScales();\n        // Use the same 'x' scale id as the status chart to ensure that interaction events such as hover are shared between the charts\n        scales.x = new TimeIntervalScale(duration(5, \"minutes\"), this.xScaleId);\n\n        // The 'barThickness' method sets the selection box width to be larger than the standard bars\n        accessors.data.thickness = this.barThickness(scales);\n\n        const rendererConfig: IBarRendererConfig = {\n            // Supply a 'selectedDataPointIdxFn' to the 'BarHighlightStrategy' to prevent the selected bar\n            // from being deemphasized/grayed out as the chart is hovered.\n            highlightStrategy: new BarHighlightStrategy(\"x\", 1, this.selectedDataPointIdxFn),\n            cursor: \"pointer\",\n        };\n        this.renderer = new BarRenderer(rendererConfig);\n\n        // Initialize the bar chart\n        this.barChart.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer: this.renderer,\n            scales,\n        })));\n    }\n\n    private setUpStatusChart() {\n        this.statusChart = new Chart(this.configureStatusGrid());\n        this.statusChart.addPlugin(new InteractionLinePlugin());\n\n        // Setting up the status chart scales\n        const statusYScale = new BandScale();\n        statusYScale.fixDomain(StatusAccessors.STATUS_DOMAIN);\n        // Use the same 'x' scale id as the bar chart to ensure that interaction events such as hover are shared between the charts\n        const statusXScale = new TimeIntervalScale(duration(5, \"minutes\"), this.xScaleId);\n        statusXScale.fixDomain([moment(baseDate, format).toDate(), moment(baseDate, format).add(25, \"minutes\").toDate()]);\n        const statusScales = {\n            x: statusXScale,\n            y: statusYScale,\n        };\n\n        // Setting up the status chart accessors\n        const myStatusAccessors = statusAccessors(new MappedValueProvider<string>(getStatusValueMap()));\n        myStatusAccessors.data.thickness = (data: any) => data.status === Status.Up ? BarRenderer.THIN : BarRenderer.THICK;\n\n        // The 'cssClassAccessor' updates the stroke color of the selection box when a time interval is selected\n        // TODO: Implement 'selection-box' series for displaying the selection box on the status chart. For reference,\n        // see 'selection-box' data series on the bar chart.\n        myStatusAccessors.data.cssClass = this.cssClassAccessor;\n\n        // Initializing the status chart\n        this.statusChart.update(getStatusData()\n            .map(d => ({\n                ...d,\n                accessors: myStatusAccessors,\n                renderer: this.renderer,\n                scales: statusScales,\n            })));\n    }\n\n    private configureBarGrid() {\n        const gridConfig = new BarGridConfig();\n\n        gridConfig.axis.left.visible = false;\n        gridConfig.axis.left.gridTicks = false;\n        // Disable 'axis.bottom.fit' to set left and right margins manually\n        gridConfig.axis.bottom.fit = false;\n        gridConfig.borders.top = new BorderConfig();\n        gridConfig.cursor = \"pointer\";\n        gridConfig.dimension.padding.top = 0;\n        // Synchronize the left and right margins (left margin default is 30px)\n        gridConfig.dimension.margin.right = gridConfig.dimension.margin.left;\n\n        // Use these settings to make the bar chart the same height as the status chart\n        // gridConfig.dimension.autoHeight = false;\n        // gridConfig.dimension.height(30);\n\n        return new XYGrid(gridConfig);\n    }\n\n    private configureStatusGrid() {\n        const gridConfig = new BarStatusGridConfig();\n\n        gridConfig.axis.bottom.visible = false;\n        gridConfig.cursor = \"pointer\";\n        gridConfig.dimension.margin.bottom = 0;\n        // Synchronize the left and right margins (left margin default is 30px)\n        gridConfig.dimension.margin.right = gridConfig.dimension.margin.left;\n        gridConfig.borders.bottom.visible = false;\n\n        return new XYGrid(gridConfig);\n    }\n\n    private redrawCharts() {\n        this.barChart.update(this.barChart.getDataManager().chartSeriesSet);\n        this.statusChart.update(this.statusChart.getDataManager().chartSeriesSet);\n    }\n\n    private handleDataPointsInteraction = (event: IChartEvent) => {\n        const data: IInteractionDataPointsEvent = event.data;\n        // we're interested in data point click events here\n        if (data.interactionType === InteractionType.Click) {\n            // set the selected data points\n            this.selectedDataPoints = data.dataPoints;\n\n            if (this.renderer.config.stateStyles) {\n                // change the bar container opacity from 0.1 to 0.3\n                this.renderer.config.stateStyles.deemphasized = { opacity: 0.3 };\n            }\n\n            // redraw the charts to apply the selected data point style\n            this.redrawCharts();\n\n            // store the interaction label position for the selected data point\n            this.selectedLabelPosition = this.calculateInteractionLabelPosition(data);\n\n            // apply the label position based on the click\n            this.barChart.getEventBus().getStream(INTERACTION_VALUES_EVENT).next({\n                data: { interactionType: InteractionType.MouseMove, values: this.selectedLabelPosition },\n            });\n        }\n    }\n\n    private handleInteractionLabelUpdates = (event: IChartEvent) => {\n        const data: IInteractionValuesPayload = event.data;\n\n        // The condition checks whether the mouse has moved away from the chart and a selected label position is stored\n        if (data.interactionType === InteractionType.MouseMove && isEmpty(data.values) && this.selectedLabelPosition) {\n\n            // ensure label updates are enabled\n            this.labelPlugin.areLabelUpdatesEnabled = true;\n\n            // Update the label with the stored label position by manually emitting an 'INTERACTION_VALUES_EVENT'.\n            // Note that 'broadcast' is set to 'true' to let the 'nuiChartCollection' directive know that the event is\n            // coming from outside the chart and should not propagate to other charts in the collection.\n            this.barChart.getEventBus().getStream(INTERACTION_VALUES_EVENT).next({\n                data: { interactionType: InteractionType.MouseMove, values: this.selectedLabelPosition },\n                broadcast: true,\n            });\n\n            // disable further label updates\n            this.labelPlugin.areLabelUpdatesEnabled = false;\n\n        } else if (data.interactionType === InteractionType.MouseMove && !isEmpty(data.values)) {\n\n            // allow label updates while the mouse is hovering over the chart\n            this.labelPlugin.areLabelUpdatesEnabled = true;\n        }\n    }\n\n    private handleMouseActive = (event: IChartEvent) => {\n        if (this.renderer.config.stateStyles) {\n            if (!isEmpty(this.selectedDataPoints) && !event.data) {\n                // if there's a selected data point and the mouse has moved away\n                // from the chart, set the bar container opacity to 0.3\n                this.renderer.config.stateStyles.deemphasized = { opacity: 0.3 };\n            } else if (event.data) {\n                // if the mouse is over the chart set the bar container opacity to 0.3\n                this.renderer.config.stateStyles.deemphasized = { opacity: 0.1 };\n            }\n        }\n\n        if (this.barChart.getDataManager().chartSeriesSet.length > 0 && this.statusChart.getDataManager().chartSeriesSet.length > 0) {\n            // redraw the charts if we have data\n            this.redrawCharts();\n        }\n    }\n\n    /**\n     * Sets the width of the bars on the bar chart. (This is only necessary if you want the selection boxes\n     * to be wider than the standard bars).\n     */\n    private barThickness(scales: IXYScales): DataAccessor<any, any> {\n        return (d: any, i: number, series: any[], dataSeries: IDataSeries<IAccessors>) => {\n            let thickness: number;\n            const x1 = convert(scales.x, dataSeries.accessors.data?.[\"startX\"]?.(d, i, dataSeries.data, dataSeries), 0);\n            const x2 = convert(scales.x, dataSeries.accessors.data?.[\"endX\"]?.(d, i, dataSeries.data, dataSeries), 1);\n            thickness = Math.abs(x1 - x2);\n\n            // Allow the selection boxes to be a little wider than the data bars\n            thickness -= dataSeries.id === \"selection-box\" ? 2 : 6;\n            thickness = Math.max(thickness, BarRenderer.MIN_BAR_THICKNESS);\n            return thickness;\n        };\n    }\n\n    /**\n     * Allows the 'BarHighlightingStrategy' to know which data point (or bar) on a series is selected, if any.\n     * Return 'DATA_POINT_NOT_FOUND' if no data point is selected on the specified series.\n     */\n    private selectedDataPointIdxFn: SelectedDatPointIdxFn = (seriesId: string): number => this.selectedDataPoints?.[seriesId]?.index ?? DATA_POINT_NOT_FOUND;\n\n    /**\n     * Sets the stroke color of the selection box when a time interval is selected\n     *\n     * @returns The 'selected' class (see less file) if a bar is selected, the series id matches the selection box series, and the\n     * selected data point index matches the current index; otherwise, returns an empty string.\n     */\n    private cssClassAccessor = (d: any, i: number, series: any, dataSeries: any): string =>\n        !isEmpty(this.selectedDataPoints) && dataSeries.id === \"selection-box\" && this.selectedDataPoints[dataSeries.id]?.index === i ? \"selected\" : \"\"\n\n    /**\n     * Calculates the desired position of the interaction label based on the position of the first data point in the event payload\n     */\n    private calculateInteractionLabelPosition(data: IInteractionDataPointsEvent): IInteractionValues {\n        const sampleDataPoint = data.dataPoints[Object.keys(data.dataPoints)[0]];\n        const xScales = [sampleDataPoint.dataSeries.scales.x];\n        const yScales = [sampleDataPoint.dataSeries.scales.y];\n\n        if (!sampleDataPoint.position || isUndefined(sampleDataPoint.position.width) || isUndefined(sampleDataPoint.position.height)) {\n            throw new Error(\"Can't calculate x and y values\");\n        }\n\n        const xCoordinate = sampleDataPoint.position.x + sampleDataPoint.position.width / 2;\n        const yCoordinate = sampleDataPoint.position.y + sampleDataPoint.position.height / 2;\n\n        return UtilityService.getXYValues(xScales, yScales, xCoordinate, yCoordinate);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            data: [\n                { category: moment(baseDate, format).toDate(), value: 66 },\n                { category: moment(baseDate, format).add(5, \"minutes\").toDate(), value: 14 },\n                { category: moment(baseDate, format).add(10, \"minutes\").toDate(), value: 25 },\n                { category: moment(baseDate, format).add(15, \"minutes\").toDate(), value: 55 },\n                { category: moment(baseDate, format).add(20, \"minutes\").toDate(), value: 33 },\n                { category: moment(baseDate, format).add(25, \"minutes\").toDate(), value: 5 },\n            ],\n        },\n\n        // The sole purpose of this series is to define the selection boxes that have a togglable selection\n        // outline. The 'fill' of the boxes is set to transparent by the 'colorProvider' in the component\n        // above. And, the blue outline of the selected time interval is toggled by the 'cssClassAccessor'\n        // method in the above component.\n        {\n            id: \"selection-box\",\n            data: [\n                { category: moment(baseDate, format).toDate(), value: 100 },\n                { category: moment(baseDate, format).add(5, \"minutes\").toDate(), value: 100 },\n                { category: moment(baseDate, format).add(10, \"minutes\").toDate(), value: 100 },\n                { category: moment(baseDate, format).add(15, \"minutes\").toDate(), value: 100 },\n                { category: moment(baseDate, format).add(20, \"minutes\").toDate(), value: 100 },\n                { category: moment(baseDate, format).add(25, \"minutes\").toDate(), value: 100 },\n            ],\n        },\n    ];\n}\n\nfunction getStatusValueMap() {\n    return {\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n    };\n}\n\nfunction getStatusData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            {\n                status: Status.Up,\n                start: moment(baseDate, format).toDate(),\n                end: moment(baseDate, format).toDate(),\n            },\n            {\n                status: Status.Warning,\n                start: moment(baseDate, format).add(5, \"minutes\").toDate(),\n                end: moment(baseDate, format).add(5, \"minutes\").toDate(),\n            },\n            {\n                status: Status.Critical,\n                start: moment(baseDate, format).add(10, \"minutes\").toDate(),\n                end: moment(baseDate, format).add(10, \"minutes\").toDate(),\n            },\n            {\n                status: Status.Up,\n                start: moment(baseDate, format).add(15, \"minutes\").toDate(),\n                end: moment(baseDate, format).add(15, \"minutes\").toDate(),\n            },\n            {\n                status: Status.Critical,\n                start: moment(baseDate, format).add(20, \"minutes\").toDate(),\n                end: moment(baseDate, format).add(20, \"minutes\").toDate(),\n            },\n            {\n                status: Status.Up,\n                start: moment(baseDate, format).add(25, \"minutes\").toDate(),\n                end: moment(baseDate, format).add(25, \"minutes\").toDate(),\n            },\n        ],\n    }];\n\n}\n";
      /***/
    },

    /***/
    "IPrL":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/data-point-selection/data-point-selection-prototype.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IPrL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-example-wrapper filenamePrefix=\"data-point-selection-prototype\" exampleTitle=\"Data Point Selection Prototype\">\n    <nui-message type=\"critical\" [allowDismiss]=\"false\">\n        <strong>Note:</strong> This is only a prototype, so its implementation is unpolished. Please\n        use discretion when copying the code as there are likely solutions more concise and/or\n        elegant than those presented here.\n        <strong>For assistance, please contact Blake Simmon or Lukas Holcik.</strong>\n    </nui-message>\n    <hr>\n    <nui-chart class=\"d-flex chart\" [chart]=\"statusChart\" nuiChartCollectionId=\"collection\"></nui-chart>\n    <nui-chart class=\"d-flex chart\" [chart]=\"barChart\" nuiChartCollectionId=\"collection\"></nui-chart>\n    <hr>\n    <button type=\"button\" nui-button (click)=\"onReset()\">Reset</button>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "Onqy":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/data-point-selection/data-point-selection-prototype.module.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Onqy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiIconModule, NuiMessageModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { DataPointSelectionPrototypeComponent } from \"./data-point-selection-prototype.component\";\n\nconst routes: Routes = [\n    {\n        path: \"\",\n        component: DataPointSelectionPrototypeComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        DataPointSelectionPrototypeComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiButtonModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiChartsModule,\n        NuiIconModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () =>  (<any> require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/)},\n    ],\n})\nexport class DataPointSelectionPrototypeModule {\n}\n";
      /***/
    },

    /***/
    "YAGT":
    /*!***********************************************************************************************************************************!*\
      !*** ./examples/components/demo/development/data-point-selection sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***********************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function YAGT(module, exports, __webpack_require__) {
      var map = {
        "./data-point-selection-prototype.component.html": "IPrL",
        "./data-point-selection-prototype.component.less": "emcV",
        "./data-point-selection-prototype.component.ts": "E2It",
        "./data-point-selection-prototype.module.ts": "Onqy"
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
      webpackContext.id = "YAGT";
      /***/
    },

    /***/
    "a1WQ":
    /*!************************************************************************************************************!*\
      !*** ./examples/components/demo/development/data-point-selection/data-point-selection-prototype.module.ts ***!
      \************************************************************************************************************/

    /*! exports provided: DataPointSelectionPrototypeModule */

    /***/
    function a1WQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataPointSelectionPrototypeModule", function () {
        return DataPointSelectionPrototypeModule;
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


      var _data_point_selection_prototype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data-point-selection-prototype.component */
      "25si");

      var routes = [{
        path: "",
        component: _data_point_selection_prototype_component__WEBPACK_IMPORTED_MODULE_6__["DataPointSelectionPrototypeComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var DataPointSelectionPrototypeModule = function DataPointSelectionPrototypeModule() {
        _classCallCheck(this, DataPointSelectionPrototypeModule);
      };

      DataPointSelectionPrototypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_data_point_selection_prototype_component__WEBPACK_IMPORTED_MODULE_6__["DataPointSelectionPrototypeComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("YAGT");
          }
        }]
      })], DataPointSelectionPrototypeModule);
      /***/
    },

    /***/
    "emcV":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/data-point-selection/data-point-selection-prototype.component.less ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function emcV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".selected {\n    stroke: #52d9e3 !important;\n}\n\n.chart {\n    max-width: 800px;\n}\n";
      /***/
    },

    /***/
    "tgWw":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/development/data-point-selection/data-point-selection-prototype.component.less ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tgWw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".selected {\n  stroke: #52d9e3 !important;\n}\n.chart {\n  max-width: 800px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtcG9pbnQtc2VsZWN0aW9uLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7QUFFQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoiZGF0YS1wb2ludC1zZWxlY3Rpb24tcHJvdG90eXBlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcbiAgICBzdHJva2U6ICM1MmQ5ZTMgIWltcG9ydGFudDtcbn1cblxuLmNoYXJ0IHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuIl19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=data-point-selection-data-point-selection-prototype-module-es5.js.map