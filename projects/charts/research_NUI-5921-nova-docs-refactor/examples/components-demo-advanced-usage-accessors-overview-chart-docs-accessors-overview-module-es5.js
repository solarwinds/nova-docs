(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-accessors-overview-chart-docs-accessors-overview-module"], {
    /***/
    "/BjU":
    /*!************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.module.ts ***!
      \************************************************************************************************************/

    /*! exports provided: ChartDocsAccessorsOverviewModule */

    /***/
    function BjU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsOverviewModule", function () {
        return ChartDocsAccessorsOverviewModule;
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


      var _chart_docs_accessors_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-accessors-overview.component */
      "GY5W");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_accessors_overview_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsAccessorsOverviewComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }];

      var ChartDocsAccessorsOverviewModule = function ChartDocsAccessorsOverviewModule() {
        _classCallCheck(this, ChartDocsAccessorsOverviewModule);
      };

      ChartDocsAccessorsOverviewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_accessors_overview_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsAccessorsOverviewComponent"]],
        imports: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("8lAb");
          }
        }]
      })], ChartDocsAccessorsOverviewModule);
      /***/
    },

    /***/
    "8lAb":
    /*!************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/accessors/overview sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function lAb(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-accessors-overview.component.html": "Aa05",
        "./chart-docs-accessors-overview.component.ts": "rNr/",
        "./chart-docs-accessors-overview.module.ts": "Izli"
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
      webpackContext.id = "8lAb";
      /***/
    },

    /***/
    "GY5W":
    /*!***************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ChartDocsAccessorsOverviewComponent */

    /***/
    function GY5W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsOverviewComponent", function () {
        return ChartDocsAccessorsOverviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_accessors_overview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-accessors-overview.component.html */
      "Aa05");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsAccessorsOverviewComponent = function ChartDocsAccessorsOverviewComponent() {
        _classCallCheck(this, ChartDocsAccessorsOverviewComponent);
      };

      ChartDocsAccessorsOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-accessors-overview",
        template: _raw_loader_chart_docs_accessors_overview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsAccessorsOverviewComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-accessors-overview-chart-docs-accessors-overview-module-es5.js.map