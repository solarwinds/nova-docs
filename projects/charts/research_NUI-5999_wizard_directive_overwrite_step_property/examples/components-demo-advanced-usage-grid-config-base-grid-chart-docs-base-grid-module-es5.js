(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-grid-config-base-grid-chart-docs-base-grid-module"], {
    /***/
    "6WVA":
    /*!******************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.module.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ChartDocsBaseGridModule */

    /***/
    function WVA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsBaseGridModule", function () {
        return ChartDocsBaseGridModule;
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


      var _chart_docs_base_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chart-docs-base-grid.component */
      "qDKz");
      /* harmony import */


      var _disabling_interaction_base_grid_disabling_interaction_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./disabling-interaction/base-grid-disabling-interaction.example.component */
      "drMT");
      /* harmony import */


      var _height_and_width_base_grid_height_and_width_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./height-and-width/base-grid-height-and-width.example.component */
      "jsF8");
      /* harmony import */


      var _margins_base_grid_auto_margins_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./margins/base-grid-auto-margins.example.component */
      "CizW");
      /* harmony import */


      var _margins_base_grid_margins_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./margins/base-grid-margins.example.component */
      "px56");
      /* harmony import */


      var _padding_base_grid_padding_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./padding/base-grid-padding.example.component */
      "ddR9");

      var exampleRoutes = [{
        path: "",
        component: _chart_docs_base_grid_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsBaseGridComponent"],
        data: {
          "srlc": {
            "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta
          },
          showThemeSwitcher: true
        }
      }, {
        path: "disabling-interaction",
        component: _disabling_interaction_base_grid_disabling_interaction_example_component__WEBPACK_IMPORTED_MODULE_6__["BaseGridDisablingInteractionExampleComponent"]
      }, {
        path: "margins",
        component: _margins_base_grid_margins_example_component__WEBPACK_IMPORTED_MODULE_9__["BaseGridMarginsExampleComponent"]
      }, {
        path: "padding",
        component: _padding_base_grid_padding_example_component__WEBPACK_IMPORTED_MODULE_10__["BaseGridPaddingExampleComponent"]
      }, {
        path: "height-and-width",
        component: _height_and_width_base_grid_height_and_width_example_component__WEBPACK_IMPORTED_MODULE_7__["BaseGridHeightAndWidthExampleComponent"]
      }];

      var ChartDocsBaseGridModule = function ChartDocsBaseGridModule() {
        _classCallCheck(this, ChartDocsBaseGridModule);
      };

      ChartDocsBaseGridModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_disabling_interaction_base_grid_disabling_interaction_example_component__WEBPACK_IMPORTED_MODULE_6__["BaseGridDisablingInteractionExampleComponent"], _margins_base_grid_auto_margins_example_component__WEBPACK_IMPORTED_MODULE_8__["BaseGridAutoMarginsExampleComponent"], _margins_base_grid_margins_example_component__WEBPACK_IMPORTED_MODULE_9__["BaseGridMarginsExampleComponent"], _padding_base_grid_padding_example_component__WEBPACK_IMPORTED_MODULE_10__["BaseGridPaddingExampleComponent"], _height_and_width_base_grid_height_and_width_example_component__WEBPACK_IMPORTED_MODULE_7__["BaseGridHeightAndWidthExampleComponent"], _chart_docs_base_grid_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsBaseGridComponent"]],
        imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCheckboxModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("G96f");
          }
        }]
      })], ChartDocsBaseGridModule);
      /***/
    },

    /***/
    "CizW":
    /*!***************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/margins/base-grid-auto-margins.example.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: BaseGridAutoMarginsExampleComponent */

    /***/
    function CizW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseGridAutoMarginsExampleComponent", function () {
        return BaseGridAutoMarginsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_base_grid_auto_margins_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./base-grid-auto-margins.example.component.html */
      "u0jB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BaseGridAutoMarginsExampleComponent = /*#__PURE__*/function () {
        function BaseGridAutoMarginsExampleComponent() {
          _classCallCheck(this, BaseGridAutoMarginsExampleComponent);
        }

        _createClass(BaseGridAutoMarginsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.axis.bottom.fit = false;
            gridConfig.axis.left.fit = false;
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
                scales: {
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                }
              });
            });
            this.chart.update(seriesSet);
          }
        }, {
          key: "toggleFit",
          value: function toggleFit() {
            var gridConfig = this.chart.getGrid().config();
            gridConfig.axis.bottom.fit = !gridConfig.axis.bottom.fit;
            gridConfig.axis.left.fit = !gridConfig.axis.left.fit;

            if (!gridConfig.axis.bottom.fit) {
              gridConfig.dimension.margin = Object.assign({}, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"].DEFAULT_MARGIN);
            }

            this.chart.updateDimensions();
            this.chartComponent.redraw();
          }
        }]);

        return BaseGridAutoMarginsExampleComponent;
      }();

      BaseGridAutoMarginsExampleComponent.propDecorators = {
        chartComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]]
        }]
      };
      BaseGridAutoMarginsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-base-grid-auto-margins-example",
        template: _raw_loader_base_grid_auto_margins_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BaseGridAutoMarginsExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: 100,
            y: 10000
          }, {
            x: 200,
            y: 30000
          }, {
            x: 300,
            y: 5000
          }, {
            x: 400,
            y: 20000
          }, {
            x: 500,
            y: 15000
          }]
        }];
      }
      /***/

    },

    /***/
    "G96f":
    /*!***************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function G96f(module, exports, __webpack_require__) {
      var map = {
        "./chart-docs-base-grid.component.html": "zB9g",
        "./chart-docs-base-grid.component.ts": "r8lI",
        "./chart-docs-base-grid.module.ts": "jFy7",
        "./disabling-interaction/base-grid-disabling-interaction.example.component.html": "Fl8W",
        "./disabling-interaction/base-grid-disabling-interaction.example.component.ts": "bJ8T",
        "./height-and-width/base-grid-height-and-width.example.component.html": "pOcv",
        "./height-and-width/base-grid-height-and-width.example.component.ts": "CyQ5",
        "./margins/base-grid-auto-margins.example.component.html": "u0jB",
        "./margins/base-grid-auto-margins.example.component.ts": "HAcT",
        "./margins/base-grid-margins.example.component.html": "ohXm",
        "./margins/base-grid-margins.example.component.ts": "/6ss",
        "./padding/base-grid-padding.example.component.html": "6nh+",
        "./padding/base-grid-padding.example.component.ts": "0BQA"
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
      webpackContext.id = "G96f";
      /***/
    },

    /***/
    "ddR9":
    /*!**********************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/padding/base-grid-padding.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: BaseGridPaddingExampleComponent */

    /***/
    function ddR9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseGridPaddingExampleComponent", function () {
        return BaseGridPaddingExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_base_grid_padding_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./base-grid-padding.example.component.html */
      "6nh+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BaseGridPaddingExampleComponent = /*#__PURE__*/function () {
        function BaseGridPaddingExampleComponent() {
          _classCallCheck(this, BaseGridPaddingExampleComponent);
        }

        _createClass(BaseGridPaddingExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.dimension.padding = {
              top: 25,
              right: 50,
              bottom: 25,
              left: 50
            };
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
                scales: {
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                }
              });
            });
            this.chart.update(seriesSet);
          }
        }]);

        return BaseGridPaddingExampleComponent;
      }();

      BaseGridPaddingExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-base-grid-padding-example",
        template: _raw_loader_base_grid_padding_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BaseGridPaddingExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: 1,
            y: 10
          }, {
            x: 2,
            y: 30
          }, {
            x: 3,
            y: 5
          }, {
            x: 4,
            y: 20
          }, {
            x: 5,
            y: 15
          }]
        }];
      }
      /***/

    },

    /***/
    "drMT":
    /*!**************************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: BaseGridDisablingInteractionExampleComponent */

    /***/
    function drMT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseGridDisablingInteractionExampleComponent", function () {
        return BaseGridDisablingInteractionExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_base_grid_disabling_interaction_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./base-grid-disabling-interaction.example.component.html */
      "Fl8W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BaseGridDisablingInteractionExampleComponent = /*#__PURE__*/function () {
        function BaseGridDisablingInteractionExampleComponent() {
          _classCallCheck(this, BaseGridDisablingInteractionExampleComponent);
        }

        _createClass(BaseGridDisablingInteractionExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.interactive = false;
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                scales: {
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                },
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]()
              });
            });
            this.chart.update(seriesSet);
          }
        }]);

        return BaseGridDisablingInteractionExampleComponent;
      }();

      BaseGridDisablingInteractionExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-base-grid-disabling-interaction-example",
        template: _raw_loader_base_grid_disabling_interaction_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BaseGridDisablingInteractionExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: 1,
            y: 10
          }, {
            x: 2,
            y: 30
          }, {
            x: 3,
            y: 5
          }, {
            x: 4,
            y: 20
          }, {
            x: 5,
            y: 15
          }]
        }];
      }
      /***/

    },

    /***/
    "jsF8":
    /*!****************************************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/height-and-width/base-grid-height-and-width.example.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: BaseGridHeightAndWidthExampleComponent */

    /***/
    function jsF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseGridHeightAndWidthExampleComponent", function () {
        return BaseGridHeightAndWidthExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_base_grid_height_and_width_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./base-grid-height-and-width.example.component.html */
      "pOcv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BaseGridHeightAndWidthExampleComponent = /*#__PURE__*/function () {
        function BaseGridHeightAndWidthExampleComponent() {
          _classCallCheck(this, BaseGridHeightAndWidthExampleComponent);
        }

        _createClass(BaseGridHeightAndWidthExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.dimension.autoHeight = false;
            gridConfig.dimension.autoWidth = false;
            gridConfig.dimension.height(50);
            gridConfig.dimension.width(100);
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                scales: {
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                },
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]()
              });
            });
            this.chart.update(seriesSet);
          }
        }]);

        return BaseGridHeightAndWidthExampleComponent;
      }();

      BaseGridHeightAndWidthExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-base-grid-height-and-width-example",
        template: _raw_loader_base_grid_height_and_width_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BaseGridHeightAndWidthExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: 1,
            y: 10
          }, {
            x: 2,
            y: 30
          }, {
            x: 3,
            y: 5
          }, {
            x: 4,
            y: 20
          }, {
            x: 5,
            y: 15
          }]
        }];
      }
      /***/

    },

    /***/
    "px56":
    /*!**********************************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/margins/base-grid-margins.example.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: BaseGridMarginsExampleComponent */

    /***/
    function px56(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseGridMarginsExampleComponent", function () {
        return BaseGridMarginsExampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_base_grid_margins_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./base-grid-margins.example.component.html */
      "ohXm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var BaseGridMarginsExampleComponent = /*#__PURE__*/function () {
        function BaseGridMarginsExampleComponent() {
          _classCallCheck(this, BaseGridMarginsExampleComponent);
        }

        _createClass(BaseGridMarginsExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var gridConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"]();
            gridConfig.dimension.margin = {
              top: 30,
              bottom: 30,
              left: 100,
              right: 100
            };
            this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](gridConfig));
            var seriesSet = getData().map(function (d) {
              return Object.assign(Object.assign({}, d), {
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
                scales: {
                  x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                  y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
                }
              });
            });
            this.chart.update(seriesSet);
          }
        }]);

        return BaseGridMarginsExampleComponent;
      }();

      BaseGridMarginsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-base-grid-margins-example",
        template: _raw_loader_base_grid_margins_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BaseGridMarginsExampleComponent);
      /* Chart data */

      function getData() {
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: 1,
            y: 10
          }, {
            x: 2,
            y: 30
          }, {
            x: 3,
            y: 5
          }, {
            x: 4,
            y: 20
          }, {
            x: 5,
            y: 15
          }]
        }];
      }
      /***/

    },

    /***/
    "qDKz":
    /*!*********************************************************************************************************!*\
      !*** ./examples/components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ChartDocsBaseGridComponent */

    /***/
    function qDKz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsBaseGridComponent", function () {
        return ChartDocsBaseGridComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chart_docs_base_grid_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chart-docs-base-grid.component.html */
      "zB9g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");

      var ChartDocsBaseGridComponent = function ChartDocsBaseGridComponent() {
        _classCallCheck(this, ChartDocsBaseGridComponent);

        this.gridInstantiation = "const gridConfig = new XYGridConfig();\ngridConfig.dimension.padding.left = 20;\nthis.chart = new Chart(new XYGrid(gridConfig));\n...";
        this.gridReconfiguration = "const gridConfig = new XYGridConfig();\ngridConfig.dimension.padding.left = 20;\nthis.chart.getGrid().config(gridConfig);\n...";
        this.defaultMargins = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGridConfig"].DEFAULT_MARGIN;
      };

      ChartDocsBaseGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-base-grid",
        template: _raw_loader_chart_docs_base_grid_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartDocsBaseGridComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-advanced-usage-grid-config-base-grid-chart-docs-base-grid-module-es5.js.map