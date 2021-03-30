(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-legend-chart-docs-legend-example-module"], {
    /***/
    "/+md":
    /*!***********************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-compact/legend-compact.example.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: LegendCompactExampleComponent */

    /***/
    function md(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendCompactExampleComponent", function () {
        return LegendCompactExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_compact_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-compact.example.component.html */
      "aSCB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendCompactExampleComponent = function LegendCompactExampleComponent() {
        _classCallCheck(this, LegendCompactExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
      };

      LegendCompactExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-compact-example",
        template: _raw_loader_legend_compact_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendCompactExampleComponent);
      /***/
    },

    /***/
    "/fBC":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: LegendRichTileContentProjectionExampleComponent */

    /***/
    function fBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendRichTileContentProjectionExampleComponent", function () {
        return LegendRichTileContentProjectionExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_rich_tile_content_projection_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-rich-tile-content-projection.example.component.html */
      "gjCY");
      /* harmony import */


      var _legend_rich_tile_content_projection_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./legend-rich-tile-content-projection.example.component.less */
      "93rr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendRichTileContentProjectionExampleComponent = function LegendRichTileContentProjectionExampleComponent() {
        _classCallCheck(this, LegendRichTileContentProjectionExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_MARKERS"]);
      };

      LegendRichTileContentProjectionExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-legend-rich-tile-content-projection-example",
        template: _raw_loader_legend_rich_tile_content_projection_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legend_rich_tile_content_projection_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LegendRichTileContentProjectionExampleComponent);
      /***/
    },

    /***/
    "2yk5":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-horizontal/legend-horizontal.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: LegendHorizontalExampleComponent */

    /***/
    function yk5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendHorizontalExampleComponent", function () {
        return LegendHorizontalExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-horizontal.example.component.html */
      "TvWw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendHorizontalExampleComponent = function LegendHorizontalExampleComponent() {
        _classCallCheck(this, LegendHorizontalExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
      };

      LegendHorizontalExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-horizontal-example",
        template: _raw_loader_legend_horizontal_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendHorizontalExampleComponent);
      /***/
    },

    /***/
    "3j+N":
    /*!*********************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-test/legend-test.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LegendTestExampleComponent */

    /***/
    function jN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendTestExampleComponent", function () {
        return LegendTestExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-test.component.html */
      "pMRv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendTestExampleComponent = function LegendTestExampleComponent() {
        _classCallCheck(this, LegendTestExampleComponent);

        this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        this.seriesData = [{
          seriesId: "1",
          value: 15.5,
          unitLabel: "Kbps",
          descriptionPrimary: "Primary Description 1",
          descriptionSecondary: "Secondary Description 1",
          status: "critical"
        }, {
          seriesId: "2",
          value: 20.8,
          unitLabel: "%",
          descriptionPrimary: "Primary Description 2",
          descriptionSecondary: "Secondary Description 2",
          status: "warning"
        }];
        var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        this.chartAssist.update(this.seriesData.map(function (series) {
          return {
            id: series.seriesId,
            data: [series.value],
            accessors: accessors,
            renderer: renderer,
            scales: {}
          };
        }));
      };

      LegendTestExampleComponent.ctorParameters = function () {
        return [];
      };

      LegendTestExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-test",
        template: _raw_loader_legend_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LegendTestExampleComponent);
      /***/
    },

    /***/
    "3lnh":
    /*!************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function lnh(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-legend-example.module.ts": "4/br",
        "./index.ts": "Cj3G",
        "./legend-active/legend-active.example.component.html": "/O2m",
        "./legend-active/legend-active.example.component.ts": "Z4eM",
        "./legend-basic/legend-basic.example.component.html": "P/Ik",
        "./legend-basic/legend-basic.example.component.ts": "oGOk",
        "./legend-compact/legend-compact.example.component.html": "aSCB",
        "./legend-compact/legend-compact.example.component.ts": "UQCh",
        "./legend-description-content-projection/legend-description-projection.example.component.html": "ZNmB",
        "./legend-description-content-projection/legend-description-projection.example.component.ts": "ys1o",
        "./legend-docs/legend-docs.example.component.html": "QBpC",
        "./legend-docs/legend-docs.example.component.ts": "zIE5",
        "./legend-horizontal/legend-horizontal.example.component.html": "TvWw",
        "./legend-horizontal/legend-horizontal.example.component.ts": "6SvY",
        "./legend-interactive/legend-interactive.example.component.html": "7x2n",
        "./legend-interactive/legend-interactive.example.component.ts": "+9tC",
        "./legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.html": "gjCY",
        "./legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.less": "swLD",
        "./legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.ts": "Ad9u",
        "./legend-rich-tile/legend-rich-tile.example.component.html": "ghjL",
        "./legend-rich-tile/legend-rich-tile.example.component.ts": "ooOc",
        "./legend-test/legend-test.component.html": "pMRv",
        "./legend-test/legend-test.component.ts": "akNU",
        "./legend-text-color/legend-text-color.example.component.html": "qDJM",
        "./legend-text-color/legend-text-color.example.component.ts": "ne+A",
        "./legend-visual-test/legend-visual-test.component.html": "fZ1x",
        "./legend-visual-test/legend-visual-test.component.less": "w51a",
        "./legend-visual-test/legend-visual-test.component.ts": "cpli"
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
      webpackContext.id = "3lnh";
      /***/
    },

    /***/
    "67ML":
    /*!*******************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-interactive/legend-interactive.example.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: LegendInteractiveExampleComponent */

    /***/
    function ML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendInteractiveExampleComponent", function () {
        return LegendInteractiveExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_interactive_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-interactive.example.component.html */
      "7x2n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendInteractiveExampleComponent = /*#__PURE__*/function () {
        function LegendInteractiveExampleComponent() {
          _classCallCheck(this, LegendInteractiveExampleComponent);

          // Set up the chart assist to keep track of the series selection and emphasis states
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]()));
          this.firstSeriesId = "1";
          this.secondSeriesId = "2";
        }

        _createClass(LegendInteractiveExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
            this.chartAssist.update([{
              id: this.firstSeriesId,
              data: [],
              accessors: accessors,
              renderer: renderer,
              scales: {}
            }, {
              id: this.secondSeriesId,
              data: [],
              accessors: accessors,
              renderer: renderer,
              scales: {}
            }]);
          }
        }]);

        return LegendInteractiveExampleComponent;
      }();

      LegendInteractiveExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-interactive-example",
        template: _raw_loader_legend_interactive_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendInteractiveExampleComponent);
      /***/
    },

    /***/
    "93rr":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.less ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".projected-value,\n.projected-unit-label {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.projected-value {\n  font-weight: 600;\n  margin-bottom: -3px;\n}\n.projected-unit-label {\n  font-size: 11px;\n  margin-top: -3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZ2VuZC1yaWNoLXRpbGUtY29udGVudC1wcm9qZWN0aW9uLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7O0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFISiIsImZpbGUiOiJsZWdlbmQtcmljaC10aWxlLWNvbnRlbnQtcHJvamVjdGlvbi5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9udWktY2hhcnRzLmxlc3NcIjtcblxuLnByb2plY3RlZC12YWx1ZSxcbi5wcm9qZWN0ZWQtdW5pdC1sYWJlbCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcm9qZWN0ZWQtdmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXNlbWlib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IC1AbnVpLWxlZ2VuZC1zZXJpZXMtY29udGVudC1tYXJnaW47XG59XG5cbi5wcm9qZWN0ZWQtdW5pdC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiBAbnVpLWZvbnQtc2l6ZS1zbWFsbDtcbiAgICBtYXJnaW4tdG9wOiAtQG51aS1sZWdlbmQtc2VyaWVzLWNvbnRlbnQtbWFyZ2luO1xufVxuIl19 */";
      /***/
    },

    /***/
    "BJDE":
    /*!*************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-description-content-projection/legend-description-projection.example.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: LegendDescriptionProjectionExampleComponent */

    /***/
    function BJDE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendDescriptionProjectionExampleComponent", function () {
        return LegendDescriptionProjectionExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_description_projection_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-description-projection.example.component.html */
      "ZNmB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendDescriptionProjectionExampleComponent = /*#__PURE__*/function () {
        function LegendDescriptionProjectionExampleComponent() {
          _classCallCheck(this, LegendDescriptionProjectionExampleComponent);

          this.firstSeriesId = "1";
          this.secondSeriesId = "2";
          this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
          this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
          this.active = false;
        }

        _createClass(LegendDescriptionProjectionExampleComponent, [{
          key: "toggleActive",
          value: function toggleActive() {
            this.active = !this.active;
          }
        }]);

        return LegendDescriptionProjectionExampleComponent;
      }();

      LegendDescriptionProjectionExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-description-projection-example",
        template: _raw_loader_legend_description_projection_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendDescriptionProjectionExampleComponent);
      /***/
    },

    /***/
    "BhAj":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-text-color/legend-text-color.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: LegendTextColorExampleComponent */

    /***/
    function BhAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendTextColorExampleComponent", function () {
        return LegendTextColorExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_text_color_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-text-color.example.component.html */
      "qDJM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendTextColorExampleComponent = function LegendTextColorExampleComponent() {
        _classCallCheck(this, LegendTextColorExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
      };

      LegendTextColorExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-text-color-example",
        template: _raw_loader_legend_text_color_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendTextColorExampleComponent);
      /***/
    },

    /***/
    "MBMx":
    /*!*********************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-active/legend-active.example.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: LegendActiveExampleComponent */

    /***/
    function MBMx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendActiveExampleComponent", function () {
        return LegendActiveExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_active_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-active.example.component.html */
      "/O2m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendActiveExampleComponent = function LegendActiveExampleComponent() {
        _classCallCheck(this, LegendActiveExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
      };

      LegendActiveExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-active-example",
        template: _raw_loader_legend_active_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendActiveExampleComponent);
      /***/
    },

    /***/
    "WDE9":
    /*!***********************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-visual-test/legend-visual-test.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: LegendVisualTestComponent */

    /***/
    function WDE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendVisualTestComponent", function () {
        return LegendVisualTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-visual-test.component.html */
      "fZ1x");
      /* harmony import */


      var _legend_visual_test_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./legend-visual-test.component.less */
      "WtO5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendVisualTestComponent = function LegendVisualTestComponent() {
        _classCallCheck(this, LegendVisualTestComponent);

        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_MARKERS"]);
        this.seriesData = [{
          seriesId: "1",
          value: 15.5,
          unitLabel: "Kbps",
          descriptionPrimary: "Primary Description 1",
          descriptionSecondary: "Secondary Description 1"
        }, {
          seriesId: "2",
          value: "9999k",
          unitLabel: "%",
          descriptionPrimary: "Primary Description 2",
          descriptionSecondary: "Secondary Description 2"
        }];
        this.tileBackgroundColor = "#1f77b4";
        this.tileColor = "white";
        this.renderStates = Object.keys(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["RenderState"]);
      };

      LegendVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-legend-visual-test",
        template: _raw_loader_legend_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legend_visual_test_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LegendVisualTestComponent);
      /***/
    },

    /***/
    "WtO5":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-visual-test/legend-visual-test.component.less ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WtO5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face{font-family:Roboto,Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;src:url(Roboto-Regular.woff) format(\"woff\"),url(Roboto-Regular.woff2) format(\"woff2\");font-weight:400;font-style:normal}@font-face{font-family:Roboto,Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;src:url(Roboto-Bold.woff) format(\"woff\"),url(Roboto-Bold.woff2) format(\"woff2\");font-weight:700;font-style:normal}.text-style-roboto {\n  font-family: \"Roboto\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Abm92YS11aS9iaXRzL2J1bmRsZXMvY3NzL3N0eWxlcy1mb250LXJvYm90by5jc3MiLCJsZWdlbmQtdmlzdWFsLXRlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxzRUFBc0UsQ0FBQyxxRkFBcUYsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsV0FBVyxzRUFBc0UsQ0FBQywrRUFBK0UsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENDRTdZO0VBQ0kscUJBQUE7QUFBSiIsImZpbGUiOiJsZWdlbmQtdmlzdWFsLXRlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle2ZvbnQtZmFtaWx5OlJvYm90byxPcGVuIFNhbnMsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7c3JjOnVybChSb2JvdG8tUmVndWxhci53b2ZmKSBmb3JtYXQoXCJ3b2ZmXCIpLHVybChSb2JvdG8tUmVndWxhci53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6Um9ib3RvLE9wZW4gU2FucyxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtzcmM6dXJsKFJvYm90by1Cb2xkLndvZmYpIGZvcm1hdChcIndvZmZcIiksdXJsKFJvYm90by1Cb2xkLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWx9IiwiQGltcG9ydCBcIkBub3ZhLXVpL2JpdHMvYnVuZGxlcy9jc3Mvc3R5bGVzLWZvbnQtcm9ib3RvLmNzc1wiO1xuXG4udGV4dC1zdHlsZS1yb2JvdG8ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufSJdfQ== */";
      /***/
    },

    /***/
    "YSKE":
    /*!*****************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-docs/legend-docs.example.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: LegendDocsExampleComponent */

    /***/
    function YSKE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendDocsExampleComponent", function () {
        return LegendDocsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_docs_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-docs.example.component.html */
      "QBpC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LegendDocsExampleComponent = function LegendDocsExampleComponent() {
        _classCallCheck(this, LegendDocsExampleComponent);

        this.legendHtml = "<nui-legend-series (mouseenter)=\"chartAssist.emphasizeSeries(seriesId)\"\n       [seriesRenderState]=\"chartAssist.renderStatesIndex[seriesId]?.state\"\n       [isSelected]=\"!chartAssist.isSeriesHidden(seriesId)\"\n       (isSelectedChange)=\"chartAssist.toggleSeries(seriesId, $event)\">\n</nui-legend-series>";
      };

      LegendDocsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-docs-example",
        template: _raw_loader_legend_docs_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendDocsExampleComponent);
      /***/
    },

    /***/
    "Yzl7":
    /*!*******************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-basic/legend-basic.example.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: LegendBasicExampleComponent */

    /***/
    function Yzl7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendBasicExampleComponent", function () {
        return LegendBasicExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-basic.example.component.html */
      "P/Ik");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendBasicExampleComponent = function LegendBasicExampleComponent() {
        _classCallCheck(this, LegendBasicExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
      };

      LegendBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-basic-example",
        template: _raw_loader_legend_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendBasicExampleComponent);
      /***/
    },

    /***/
    "o7g7":
    /*!********************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/chart-docs-legend-example.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: ChartDocsLegendExampleModule */

    /***/
    function o7g7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsLegendExampleModule", function () {
        return ChartDocsLegendExampleModule;
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


      var _legend_active_legend_active_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./legend-active/legend-active.example.component */
      "MBMx");
      /* harmony import */


      var _legend_basic_legend_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./legend-basic/legend-basic.example.component */
      "Yzl7");
      /* harmony import */


      var _legend_compact_legend_compact_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./legend-compact/legend-compact.example.component */
      "/+md");
      /* harmony import */


      var _legend_description_content_projection_legend_description_projection_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./legend-description-content-projection/legend-description-projection.example.component */
      "BJDE");
      /* harmony import */


      var _legend_docs_legend_docs_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./legend-docs/legend-docs.example.component */
      "YSKE");
      /* harmony import */


      var _legend_horizontal_legend_horizontal_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./legend-horizontal/legend-horizontal.example.component */
      "2yk5");
      /* harmony import */


      var _legend_interactive_legend_interactive_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./legend-interactive/legend-interactive.example.component */
      "67ML");
      /* harmony import */


      var _legend_rich_tile_content_projection_legend_rich_tile_content_projection_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component */
      "/fBC");
      /* harmony import */


      var _legend_rich_tile_legend_rich_tile_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./legend-rich-tile/legend-rich-tile.example.component */
      "ps50");
      /* harmony import */


      var _legend_test_legend_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./legend-test/legend-test.component */
      "3j+N");
      /* harmony import */


      var _legend_text_color_legend_text_color_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./legend-text-color/legend-text-color.example.component */
      "BhAj");
      /* harmony import */


      var _legend_visual_test_legend_visual_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./legend-visual-test/legend-visual-test.component */
      "WDE9");

      var legendRoutes = [{
        path: "",
        component: _legend_docs_legend_docs_example_component__WEBPACK_IMPORTED_MODULE_10__["LegendDocsExampleComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "basic",
        component: _legend_basic_legend_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["LegendBasicExampleComponent"]
      }, {
        path: "interactive",
        component: _legend_interactive_legend_interactive_example_component__WEBPACK_IMPORTED_MODULE_12__["LegendInteractiveExampleComponent"]
      }, {
        path: "test",
        component: _legend_test_legend_test_component__WEBPACK_IMPORTED_MODULE_15__["LegendTestExampleComponent"]
      }, {
        path: "rich-tile-content-projection",
        component: _legend_rich_tile_content_projection_legend_rich_tile_content_projection_example_component__WEBPACK_IMPORTED_MODULE_13__["LegendRichTileContentProjectionExampleComponent"]
      }, {
        path: "visual-test",
        component: _legend_visual_test_legend_visual_test_component__WEBPACK_IMPORTED_MODULE_17__["LegendVisualTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var ChartDocsLegendExampleModule = function ChartDocsLegendExampleModule() {
        _classCallCheck(this, ChartDocsLegendExampleModule);
      };

      ChartDocsLegendExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_legend_active_legend_active_example_component__WEBPACK_IMPORTED_MODULE_6__["LegendActiveExampleComponent"], _legend_basic_legend_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["LegendBasicExampleComponent"], _legend_compact_legend_compact_example_component__WEBPACK_IMPORTED_MODULE_8__["LegendCompactExampleComponent"], _legend_docs_legend_docs_example_component__WEBPACK_IMPORTED_MODULE_10__["LegendDocsExampleComponent"], _legend_horizontal_legend_horizontal_example_component__WEBPACK_IMPORTED_MODULE_11__["LegendHorizontalExampleComponent"], _legend_interactive_legend_interactive_example_component__WEBPACK_IMPORTED_MODULE_12__["LegendInteractiveExampleComponent"], _legend_rich_tile_legend_rich_tile_example_component__WEBPACK_IMPORTED_MODULE_14__["LegendRichTileExampleComponent"], _legend_test_legend_test_component__WEBPACK_IMPORTED_MODULE_15__["LegendTestExampleComponent"], _legend_text_color_legend_text_color_example_component__WEBPACK_IMPORTED_MODULE_16__["LegendTextColorExampleComponent"], _legend_visual_test_legend_visual_test_component__WEBPACK_IMPORTED_MODULE_17__["LegendVisualTestComponent"], _legend_description_content_projection_legend_description_projection_example_component__WEBPACK_IMPORTED_MODULE_9__["LegendDescriptionProjectionExampleComponent"], _legend_rich_tile_content_projection_legend_rich_tile_content_projection_example_component__WEBPACK_IMPORTED_MODULE_13__["LegendRichTileContentProjectionExampleComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(legendRoutes), _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"]],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("3lnh");
          }
        }]
      })], ChartDocsLegendExampleModule);
      /***/
    },

    /***/
    "ps50":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/legend/legend-rich-tile/legend-rich-tile.example.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: LegendRichTileExampleComponent */

    /***/
    function ps50(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LegendRichTileExampleComponent", function () {
        return LegendRichTileExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_legend_rich_tile_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./legend-rich-tile.example.component.html */
      "ghjL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var LegendRichTileExampleComponent = function LegendRichTileExampleComponent() {
        _classCallCheck(this, LegendRichTileExampleComponent);

        this.firstSeriesId = "1";
        this.secondSeriesId = "2";
        this.colors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialColorProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        this.markers = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["SequentialChartMarkerProvider"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_MARKERS"]);
      };

      LegendRichTileExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-legend-rich-tile-example",
        template: _raw_loader_legend_rich_tile_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LegendRichTileExampleComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-legend-chart-docs-legend-example-module-es5.js.map