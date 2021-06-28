(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-accessors-chart-docs-accessors-module"], {
    /***/
    "NbXf":
    /*!***************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/accessors sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function NbXf(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-accessors.module.ts": "ElYs",
        "./colors/chart-docs-accessors-colors.component.html": "ngjk",
        "./colors/chart-docs-accessors-colors.component.ts": "3cAq",
        "./colors/chart-docs-accessors-colors.module.ts": "QsMe",
        "./colors/custom-accessor/colors-custom-accessor.example.component.html": "b+XA",
        "./colors/custom-accessor/colors-custom-accessor.example.component.ts": "UAvc",
        "./colors/custom-provider/colors-custom-provider.example.component.html": "i4WR",
        "./colors/custom-provider/colors-custom-provider.example.component.ts": "Yrve",
        "./data/accessors/accessors.example.component.html": "YTI/",
        "./data/accessors/accessors.example.component.ts": "5A4g",
        "./data/chart-docs-accessors-data.component.html": "Y2mW",
        "./data/chart-docs-accessors-data.component.ts": "2kwe",
        "./data/chart-docs-accessors-data.module.ts": "D4b+",
        "./markers/chart-docs-accessors-markers.component.html": "0EkY",
        "./markers/chart-docs-accessors-markers.component.ts": "ZDPj",
        "./markers/chart-docs-accessors-markers.module.ts": "JTeL",
        "./markers/custom-accessor/markers-custom-accessor.example.component.html": "bVjY",
        "./markers/custom-accessor/markers-custom-accessor.example.component.ts": "874e",
        "./markers/custom-provider/markers-custom-provider.example.component.html": "Efuy",
        "./markers/custom-provider/markers-custom-provider.example.component.ts": "7fPP",
        "./overview/chart-docs-accessors-overview.component.html": "Aa05",
        "./overview/chart-docs-accessors-overview.component.ts": "rNr/",
        "./overview/chart-docs-accessors-overview.module.ts": "Izli"
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
      webpackContext.id = "NbXf";
      /***/
    },

    /***/
    "VOXW":
    /*!******************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/accessors/chart-docs-accessors.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: ChartDocsAccessorsModule */

    /***/
    function VOXW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsAccessorsModule", function () {
        return ChartDocsAccessorsModule;
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

      var exampleRoutes = [{
        path: "overview",
        loadChildren: function loadChildren() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", __webpack_require__.e(
                    /*! import() | components-demo-advanced-usage-accessors-overview-chart-docs-accessors-overview-module */
                    "components-demo-advanced-usage-accessors-overview-chart-docs-accessors-overview-module").then(__webpack_require__.bind(null,
                    /*! components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.module */
                    "/BjU")).then(function (m) {
                      return m.ChartDocsAccessorsOverviewModule;
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        path: "data",
        loadChildren: function loadChildren() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", __webpack_require__.e(
                    /*! import() | components-demo-advanced-usage-accessors-data-chart-docs-accessors-data-module */
                    "components-demo-advanced-usage-accessors-data-chart-docs-accessors-data-module").then(__webpack_require__.bind(null,
                    /*! components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.module */
                    "HRsf")).then(function (m) {
                      return m.ChartDocsAccessorsDataModule;
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        path: "colors",
        loadChildren: function loadChildren() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", __webpack_require__.e(
                    /*! import() | components-demo-advanced-usage-accessors-colors-chart-docs-accessors-colors-module */
                    "components-demo-advanced-usage-accessors-colors-chart-docs-accessors-colors-module").then(__webpack_require__.bind(null,
                    /*! components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.module */
                    "25IG")).then(function (m) {
                      return m.ChartDocsAccessorsColorsModule;
                    }));

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        path: "markers",
        loadChildren: function loadChildren() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", __webpack_require__.e(
                    /*! import() | components-demo-advanced-usage-accessors-markers-chart-docs-accessors-markers-module */
                    "components-demo-advanced-usage-accessors-markers-chart-docs-accessors-markers-module").then(__webpack_require__.bind(null,
                    /*! components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.module */
                    "TI39")).then(function (m) {
                      return m.ChartDocsAccessorsMarkersModule;
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }];

      var ChartDocsAccessorsModule = function ChartDocsAccessorsModule() {
        _classCallCheck(this, ChartDocsAccessorsModule);
      };

      ChartDocsAccessorsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("NbXf");
          }
        }]
      })], ChartDocsAccessorsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-accessors-chart-docs-accessors-module-es5.js.map