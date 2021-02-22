(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-scales-chart-docs-scales-module"], {
    /***/
    "535R":
    /*!***************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales/chart-docs-scales.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ChartDocsScalesComponent */

    /***/
    function R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsScalesComponent", function () {
        return ChartDocsScalesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_scales_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-scales.component.html */
      "QKvx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsScalesComponent = function ChartDocsScalesComponent() {
        _classCallCheck(this, ChartDocsScalesComponent);

        this.scaleDefinition = "const xScale = new LinearScale();\n...";
        this.scaleWithId = "const yScale = new LinearScale(\"percentile\");\n...";
      };

      ChartDocsScalesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-scales",
        template: _raw_loader_chart_docs_scales_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsScalesComponent);
      /***/
    },

    /***/
    "7BBB":
    /*!************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function BBB(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-scales.component.html": "QKvx",
        "./chart-docs-scales.component.ts": "Nmns",
        "./chart-docs-scales.module.ts": "Goil",
        "./domains/chart-docs-domains.component.html": "c7pr",
        "./domains/chart-docs-domains.component.ts": "dNNE",
        "./domains/chart-docs-domains.module.ts": "Z/rz",
        "./domains/fixed-domains/fixed-domains.example.component.html": "VIrZ",
        "./domains/fixed-domains/fixed-domains.example.component.ts": "vfx1",
        "./formatters/chart-docs-formatters.component.html": "WdGD",
        "./formatters/chart-docs-formatters.component.ts": "zmJ9",
        "./formatters/chart-docs-formatters.module.ts": "Dzs2",
        "./formatters/tick-formatter/tick-formatter.example.component.html": "nhCc",
        "./formatters/tick-formatter/tick-formatter.example.component.ts": "dkyL"
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
      webpackContext.id = "7BBB";
      /***/
    },

    /***/
    "eqoo":
    /*!************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales/chart-docs-scales.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ChartDocsScalesModule */

    /***/
    function eqoo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsScalesModule", function () {
        return ChartDocsScalesModule;
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


      var _chart_docs_scales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-scales.component */
      "535R");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_scales_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsScalesComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          }
        }
      }, {
        path: "domains",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-demo-advanced-usage-scales-domains-chart-docs-domains-module */
          "components-demo-advanced-usage-scales-domains-chart-docs-domains-module").then(__webpack_require__.bind(null,
          /*! components/demo/advanced-usage/scales/domains/chart-docs-domains.module */
          "3q4r")).then(function (m) {
            return m.ChartDocsDomainsModule;
          });
        }
      }, {
        path: "formatters",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-demo-advanced-usage-scales-formatters-chart-docs-formatters-module */
          "components-demo-advanced-usage-scales-formatters-chart-docs-formatters-module").then(__webpack_require__.bind(null,
          /*! components/demo/advanced-usage/scales/formatters/chart-docs-formatters.module */
          "82q9")).then(function (m) {
            return m.ChartDocsFormattersModule;
          });
        }
      }];

      var ChartDocsScalesModule = function ChartDocsScalesModule() {
        _classCallCheck(this, ChartDocsScalesModule);
      };

      ChartDocsScalesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_scales_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsScalesComponent"]],
        imports: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("7BBB");
          }
        }]
      })], ChartDocsScalesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-scales-chart-docs-scales-module-es5.js.map