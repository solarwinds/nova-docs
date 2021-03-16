(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-collection-chart-collection-example-module"],{

/***/ "Surc":
/*!************************************************************************************************************************!*\
  !*** ./examples/components/demo/development/chart-collection/chart-collection-test/chart-collection-test.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ChartCollectionTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartCollectionTestComponent", function() { return ChartCollectionTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_collection_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-collection-test.component.html */ "qhKW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _data_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data-generator */ "kBc7");





/**
 * This is here just to test a prototype of angular component, that will use new chart core
 *
 * @ignore
 */
let ChartCollectionTestComponent = class ChartCollectionTestComponent {
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        this.myCharts = [];
        this.chartCount = 2;
        for (let i = 0; i < this.chartCount; i++) {
            const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
            const myChart = {
                chart,
                chartAssist: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart),
                scales: { x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]("x"), y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]() },
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](),
            };
            this.myCharts.push(myChart);
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.myCharts.forEach((myChart, index) => {
            myChart.chartAssist.update(this.generateChartAssistSeriesSet(myChart, 4, index));
        });
        this.changeDetection.detectChanges();
    }
    generateChartAssistSeriesSet(myChart, dataSeriesCount, index) {
        const timeLineSeriesSet = this.generateDataSeriesSet(dataSeriesCount, index);
        return timeLineSeriesSet.map(dataSeries => (Object.assign(Object.assign({}, dataSeries), { scales: myChart.scales, renderer: myChart.renderer, accessors: myChart.accessors, showInLegend: true })));
    }
    generateDataSeriesSet(dataSeriesCount, chartIndex) {
        const chartNumber = chartIndex + 1;
        return Array.from(Array(dataSeriesCount).keys()).map((i) => {
            const seriesNumber = i + 1;
            return {
                id: `series-${chartNumber}-${seriesNumber}`,
                name: `Series ${chartNumber}-${seriesNumber}`,
                data: _data_generator__WEBPACK_IMPORTED_MODULE_4__["DataGenerator"].mockTimeLineData(seriesNumber * 10),
            };
        });
    }
};
ChartCollectionTestComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
ChartCollectionTestComponent.propDecorators = {
    charts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"],] }]
};
ChartCollectionTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-collection-test",
        template: _raw_loader_chart_collection_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], ChartCollectionTestComponent);



/***/ }),

/***/ "fwtQ":
/*!**************************************************************************************************!*\
  !*** ./examples/components/demo/development/chart-collection/chart-collection-example.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChartCollectionExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartCollectionExampleModule", function() { return ChartCollectionExampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _chart_collection_test_chart_collection_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart-collection-test/chart-collection-test.component */ "Surc");







const collectionRoutes = [
    {
        path: "",
        component: _chart_collection_test_chart_collection_test_component__WEBPACK_IMPORTED_MODULE_6__["ChartCollectionTestComponent"],
    },
];
let ChartCollectionExampleModule = class ChartCollectionExampleModule {
};
ChartCollectionExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_collection_test_chart_collection_test_component__WEBPACK_IMPORTED_MODULE_6__["ChartCollectionTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDividerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(collectionRoutes),
        ],
    })
], ChartCollectionExampleModule);



/***/ }),

/***/ "qhKW":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/chart-collection/chart-collection-test/chart-collection-test.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [style.min-height]=\"150\" *ngFor=\"let myChart of myCharts; let i = index\">\n    <div class=\"d-flex w-100 h-100\">\n        <nui-chart class=\"w-100\" nuiChartCollectionId=\"1\"\n                   [chart]=\"myChart.chart\"></nui-chart>\n    </div>\n    <nui-divider *ngIf=\"myCharts.length - 1 > i\"></nui-divider>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=chart-collection-chart-collection-example-module-es2015.js.map