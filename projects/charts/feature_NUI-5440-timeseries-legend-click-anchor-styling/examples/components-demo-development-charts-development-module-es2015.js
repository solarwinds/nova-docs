(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-development-charts-development-module"],{

/***/ "eExj":
/*!***************************************************************************!*\
  !*** ./examples/components/demo/development/charts-development.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChartsDevelopmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsDevelopmentModule", function() { return ChartsDevelopmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const chartsRoutes = [
    {
        path: "core",
        loadChildren: () => Promise.all(/*! import() | core-core-example-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("core-core-example-module")]).then(__webpack_require__.bind(null, /*! ./core/core-example.module */ "PhPh")).then(m => m.CoreExampleModule),
    },
    {
        path: "pie",
        loadChildren: () => Promise.all(/*! import() | pie-chart-pie-chart-example-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("pie-chart-pie-chart-example-module")]).then(__webpack_require__.bind(null, /*! ./pie-chart/pie-chart-example.module */ "hsLt")).then(m => m.PieChartExampleModule),
    },
    {
        path: "bar",
        loadChildren: () => Promise.all(/*! import() | bar-bar-prototype-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("bar-bar-prototype-module")]).then(__webpack_require__.bind(null, /*! ./bar/bar-prototype.module */ "pO+Z")).then(m => m.BarPrototypeModule),
    },
    {
        path: "collection",
        loadChildren: () => Promise.all(/*! import() | chart-collection-chart-collection-example-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("chart-collection-chart-collection-example-module")]).then(__webpack_require__.bind(null, /*! ./chart-collection/chart-collection-example.module */ "fwtQ")).then(m => m.ChartCollectionExampleModule),
    },
    {
        path: "popovers",
        loadChildren: () => Promise.all(/*! import() | popovers-popovers-prototype-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("popovers-popovers-prototype-module")]).then(__webpack_require__.bind(null, /*! ./popovers/popovers-prototype.module */ "c/20")).then(m => m.PopoversPrototypeModule),
    },
    {
        path: "tooltips",
        loadChildren: () => Promise.all(/*! import() | tooltips-tooltips-prototype-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("tooltips-tooltips-prototype-module")]).then(__webpack_require__.bind(null, /*! ./tooltips/tooltips-prototype.module */ "j2zr")).then(m => m.TooltipsPrototypeModule),
    },
    {
        path: "spark",
        loadChildren: () => Promise.all(/*! import() | spark-spark-prototype-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("spark-spark-prototype-module")]).then(__webpack_require__.bind(null, /*! ./spark/spark-prototype.module */ "pim5")).then(m => m.SparkPrototypeModule),
    },
    {
        path: "gauge",
        loadChildren: () => Promise.all(/*! import() | gauge-gauge-prototypes-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("gauge-gauge-prototypes-module")]).then(__webpack_require__.bind(null, /*! ./gauge/gauge-prototypes.module */ "iGZy")).then(m => m.GaugePrototypesModule),
    },
    {
        path: "type-switch",
        loadChildren: () => Promise.all(/*! import() | type-switch-type-switch-example-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("type-switch-type-switch-example-module")]).then(__webpack_require__.bind(null, /*! ./type-switch/type-switch-example.module */ "dLxB")).then(m => m.TypeSwitchExampleModule),
    },
    {
        path: "status",
        loadChildren: () => Promise.all(/*! import() | status-chart-status-example-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("status-chart-status-example-module")]).then(__webpack_require__.bind(null, /*! ./status/chart-status-example.module */ "6biZ")).then(m => m.ChartStatusExampleModule),
    },
    {
        path: "time-bands",
        loadChildren: () => Promise.all(/*! import() | time-bands-time-bands-example-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("time-bands-time-bands-example-module")]).then(__webpack_require__.bind(null, /*! ./time-bands/time-bands-example.module */ "12rl")).then(m => m.TimeBandsExampleModule),
    },
    {
        path: "data-point-selection",
        loadChildren: () => Promise.all(/*! import() | data-point-selection-data-point-selection-prototype-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("data-point-selection-data-point-selection-prototype-module")]).then(__webpack_require__.bind(null, /*! ./data-point-selection/data-point-selection-prototype.module */ "a1WQ")).then(m => m.DataPointSelectionPrototypeModule),
    },
    {
        path: "thresholds",
        loadChildren: () => Promise.all(/*! import() | thresholds-thresholds-prototype-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("thresholds-thresholds-prototype-module")]).then(__webpack_require__.bind(null, /*! ./thresholds/thresholds-prototype.module */ "Dj89")).then(m => m.ThresholdsPrototypeModule),
    },
];
let ChartsDevelopmentModule = class ChartsDevelopmentModule {
};
ChartsDevelopmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(chartsRoutes),
        ],
    })
], ChartsDevelopmentModule);



/***/ })

}]);
//# sourceMappingURL=components-demo-development-charts-development-module-es2015.js.map