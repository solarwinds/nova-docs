(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-scales-domains-chart-docs-domains-module"], {
    /***/
    "3q4r":
    /*!*********************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales/domains/chart-docs-domains.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ChartDocsDomainsModule */

    /***/
    function q4r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsDomainsModule", function () {
        return ChartDocsDomainsModule;
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


      var _chart_docs_domains_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-domains.component */
      "uGT6");
      /* harmony import */


      var _fixed_domains_fixed_domains_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./fixed-domains/fixed-domains.example.component */
      "VlJp");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_domains_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsDomainsComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }];

      var ChartDocsDomainsModule = function ChartDocsDomainsModule() {
        _classCallCheck(this, ChartDocsDomainsModule);
      };

      ChartDocsDomainsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chart_docs_domains_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsDomainsComponent"], _fixed_domains_fixed_domains_example_component__WEBPACK_IMPORTED_MODULE_6__["FixedDomainsExampleComponent"]],
        imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("Pn6x");
          }
        }]
      })], ChartDocsDomainsModule);
      /***/
    },

    /***/
    "Pn6x":
    /*!********************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales/domains sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \********************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function Pn6x(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-domains.component.html": "c7pr",
        "./chart-docs-domains.component.ts": "dNNE",
        "./chart-docs-domains.module.ts": "Z/rz",
        "./fixed-domains/fixed-domains.example.component.html": "VIrZ",
        "./fixed-domains/fixed-domains.example.component.ts": "vfx1"
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
      webpackContext.id = "Pn6x";
      /***/
    },

    /***/
    "VlJp":
    /*!*****************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales/domains/fixed-domains/fixed-domains.example.component.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: FixedDomainsExampleComponent */

    /***/
    function VlJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedDomainsExampleComponent", function () {
        return FixedDomainsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fixed_domains_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fixed-domains.example.component.html */
      "VIrZ");
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

      var FixedDomainsExampleComponent = /*#__PURE__*/function () {
        function FixedDomainsExampleComponent() {
          _classCallCheck(this, FixedDomainsExampleComponent);

          this.xScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]();
          this.yScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
          this.format = "YYYY-MM-DDTHH:mm:ssZ";
        }

        _createClass(FixedDomainsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var scales = {
              x: this.xScale,
              y: this.yScale
            }; // Default domain calculator
            // scales.y.domainCalculator = getAutomaticDomain;

            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.axis.bottom.fit = true;
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            this.seriesSet = getData(this.format).map(function (d) {
              return Object.assign(Object.assign({}, d), {
                scales: scales,
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]()
              });
            });
            this.chart.update(this.seriesSet);
            this.chart.updateDimensions();
          }
        }, {
          key: "fixXDomain",
          value: function fixXDomain() {
            var startDatetime = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T06:00:00.000Z", this.format).toDate();
            var endDatetime = moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-04T06:00:00.000Z", this.format).toDate();
            this.xScale.fixDomain([startDatetime, endDatetime]);
            this.chart.update(this.seriesSet);
          }
        }, {
          key: "fixYDomain",
          value: function fixYDomain() {
            this.yScale.fixDomain([0, 100]);
            this.chart.update(this.seriesSet);
          }
        }, {
          key: "resetDomains",
          value: function resetDomains() {
            this.xScale.isDomainFixed = false;
            this.yScale.isDomainFixed = false;
            this.chart.update(this.seriesSet);
          }
        }]);

        return FixedDomainsExampleComponent;
      }();

      FixedDomainsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-fixed-domains-example",
        template: _raw_loader_fixed_domains_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FixedDomainsExampleComponent);
      /* Chart data */

      function getData(format) {
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
            y: 45
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format),
            y: 35
          }]
        }];
      }
      /***/

    },

    /***/
    "uGT6":
    /*!************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/scales/domains/chart-docs-domains.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: ChartDocsDomainsComponent */

    /***/
    function uGT6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsDomainsComponent", function () {
        return ChartDocsDomainsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_domains_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-domains.component.html */
      "c7pr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChartDocsDomainsComponent = function ChartDocsDomainsComponent() {
        _classCallCheck(this, ChartDocsDomainsComponent);

        this.fixedDomainExplicit = "const bandScale = new BandScale();\nbandScale.domain([\"John\", \"Paul\", \"George\", \"Ringo\"]);\nbandScale.isDomainFixed = true;\n...";
        this.continuousDomain = "[0, 100]";
        this.ordinalDomain = "[\"John\", \"Paul\", \"George\", \"Ringo\"]";
        this.disablingFixedDomain = "scale.isDomainFixed = false;\n...";
        this.fixedDomainShorthand = "const scale = new LinearScale();\nscale.fixDomain([0, 100]);\n...";
        this.automaticDomainWithIncludedInterval = "this.scales.y.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n...";
      };

      ChartDocsDomainsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-domains",
        template: _raw_loader_chart_docs_domains_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsDomainsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-scales-domains-chart-docs-domains-module-es5.js.map