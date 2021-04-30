(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["type-switch-type-switch-example-module"],{

/***/ "Mtx1":
/*!*********************************************************************************************************************************!*\
  !*** ./examples/components/demo/development/type-switch/one-dimensional-data-example/one-dimensional-data.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: OneDimensionalDataExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDimensionalDataExampleComponent", function() { return OneDimensionalDataExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_one_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./one-dimensional-data.example.component.html */ "PxfP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/zipObject */ "VJLA");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__);





let OneDimensionalDataExampleComponent = class OneDimensionalDataExampleComponent {
    constructor() {
        this.chartTypes = ["horizontal bar", "vertical bar", "pie", "donut"];
        this.chartType = this.chartTypes[0];
        this.categories = ["down", "critical", "warning", "unknown", "ok", "other"];
        this.iconNames = ["down", "critical", "warning", "unknown", "up", "unmanaged"];
        this.values = [24, 16, 7, 6, 97, 4];
        this.iconMap = lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.categories, this.iconNames.map(n => `status_${n}`));
        this.colorProvider = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.categories, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"]));
    }
    ngOnInit() {
        this.updateChartType();
    }
    updateChartType() {
        this.buildChart();
        this.chartAssist.chart.updateDimensions();
        this.updateChart();
    }
    buildChart() {
        this.donutContentPlugin = undefined;
        switch (this.chartType) {
            case "horizontal bar": {
                this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])({ horizontal: true })));
                break;
            }
            case "vertical bar": {
                this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])({ horizontal: false })));
                break;
            }
            case "pie": {
                this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
                break;
            }
            case "donut": {
                this.donutContentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartDonutContentPlugin"]();
                this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radial"]);
                this.chartAssist.chart.addPlugin(this.donutContentPlugin);
                break;
            }
        }
    }
    getRenderer() {
        switch (this.chartType) {
            case "horizontal bar":
            case "vertical bar": {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]();
            }
            case "pie": {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["PieRenderer"]();
            }
            case "donut": {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialRenderer"]();
            }
        }
    }
    updateChart() {
        const accessors = this.getAccessors();
        const renderer = this.getRenderer();
        const scales = this.getScales();
        if (!accessors || !renderer || !scales) {
            throw new Error("Accessors, renderer or scales are unavailable");
        }
        this.chartAssist.update(this.getChartAssistSeries(this.categories, this.values, accessors, renderer, scales));
    }
    getScales() {
        const bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]();
        const linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]();
        linearScale.domainCalculator = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["getAutomaticDomainWithIncludedInterval"])([0, 0]);
        switch (this.chartType) {
            case "horizontal bar":
                return {
                    x: linearScale,
                    y: bandScale,
                };
            case "vertical bar":
                return {
                    x: bandScale,
                    y: linearScale,
                };
            case "pie":
            case "donut": {
                return Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["radialScales"])();
            }
        }
    }
    getAccessors() {
        switch (this.chartType) {
            case "horizontal bar":
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["HorizontalBarAccessors"](this.colorProvider);
            case "vertical bar": {
                return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["VerticalBarAccessors"](this.colorProvider);
            }
            case "pie":
            case "donut": {
                const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["RadialAccessors"]();
                accessors.series.color = this.colorProvider.get;
                return accessors;
            }
        }
        return;
    }
    getChartAssistSeries(categories, values, accessors, renderer, scales) {
        return categories.map((category, i) => {
            const value = values[i] || 0;
            return {
                id: category,
                data: [{ category, value }],
                accessors,
                renderer,
                scales,
            };
        });
    }
};
OneDimensionalDataExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-one-dimensional-data-example",
        template: _raw_loader_one_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], OneDimensionalDataExampleComponent);



/***/ }),

/***/ "PxfP":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/type-switch/one-dimensional-data-example/one-dimensional-data.example.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-chart-layout\">\n    <div class=\"chart\" style=\"position: relative;\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n        <ng-container *ngIf=\"donutContentPlugin\">\n            <nui-chart-donut-content [plugin]=\"donutContentPlugin\">\n                <div class=\"nui-text-page\">57</div>\n                <div class=\"nui-text-secondary\">donuts</div>\n            </nui-chart-donut-content>\n        </ng-container>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               descriptionPrimary=\"{{legendSeries.id | titlecase}}\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"legendSeries.data[0]?.value\"\n                                      backgroundColor=\"transparent\">\n                </nui-rich-legend-tile>\n                <nui-icon [icon]=\"iconMap[legendSeries.id]\"></nui-icon>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-radio-group class=\"nui-radio-group-inline\"\n                         [(value)]=\"chartType\"\n                         (valueChange)=\"updateChartType()\">\n            <nui-radio *ngFor=\"let type of chartTypes\"\n                       [value]=\"type\">\n                {{type | titlecase}}\n            </nui-radio>\n        </nui-radio-group>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "W2zq":
/*!*********************************************************************************************************************************!*\
  !*** ./examples/components/demo/development/type-switch/two-dimensional-data-example/two-dimensional-data.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: TwoDimensionalDataExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDimensionalDataExampleComponent", function() { return TwoDimensionalDataExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_two_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./two-dimensional-data.example.component.html */ "hzus");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/zipObject */ "VJLA");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__);





var ChartType;
(function (ChartType) {
    ChartType["StackedBar"] = "stacked bar";
    ChartType["GroupedBar"] = "grouped bar";
    ChartType["Line"] = "line";
})(ChartType || (ChartType = {}));
let TwoDimensionalDataExampleComponent = class TwoDimensionalDataExampleComponent {
    constructor() {
        this.chartTypes = [ChartType.StackedBar, ChartType.GroupedBar, ChartType.Line];
        this.chartType = this.chartTypes[0];
        this.mainCategoryOptions = ["quarters", "statuses"];
        this.mainCategory = this.mainCategoryOptions[0];
        this.statuses = ["down", "critical", "warning", "unknown", "ok", "other"];
        this.quarters = ["Q1", "Q2", "Q3", "Q4"];
        this.iconNames = ["down", "critical", "warning", "unknown", "up", "unmanaged"];
        this.values = [
            [24, 16, 7, 6, 97, 4],
            [13, 8, 5, 17, 5, 25],
            [97, 41, 24, 6, 7, 6],
            [45, 87, 23, 48, 24, 9],
        ];
        this.iconMap = lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.statuses, this.iconNames.map(n => `status_${n}`));
    }
    ngOnInit() {
        this.updateMainCategory();
    }
    updateMainCategory() {
        const statusPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(this.statuses, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"])));
        const standardPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]);
        const groupByQuarter = this.mainCategory === this.mainCategoryOptions[0];
        this.categories = groupByQuarter ? this.statuses : this.quarters;
        this.subCategories = groupByQuarter ? this.quarters : this.statuses;
        this.valueAccessor = groupByQuarter ? (i, j) => this.values[i][j] : (i, j) => this.values[j][i];
        this.palette = groupByQuarter ? standardPalette : statusPalette;
        this.updateChartType();
    }
    updateChartType() {
        this.buildChart();
        this.updateChart();
    }
    buildChart() {
        const { grid, accessors, renderer, scales, preprocessor } = this.getChartAttributes(this.chartType);
        this.renderer = renderer;
        this.accessors = accessors;
        this.scales = scales;
        const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](grid);
        chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLabelPlugin"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](chart, preprocessor, this.palette);
        if (this.chartType === ChartType.StackedBar) {
            this.chartAssist.seriesProcessor = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"];
        }
    }
    updateChart() {
        this.chartAssist.update(this.buildChartSeries(this.categories, this.subCategories, this.valueAccessor));
    }
    buildChartSeries(categories, subCategories, valueAccessor) {
        return subCategories.map((subCategory, i) => ({
            id: subCategory,
            name: subCategory,
            data: categories.map((xCategory, j) => ({ category: xCategory, value: valueAccessor(i, j) || 0 })),
            accessors: this.accessors,
            renderer: this.renderer,
            scales: this.scales,
        }));
    }
    getChartAttributes(chartType) {
        const t = this.getChartTools(chartType);
        const result = {
            grid: t.gridFunction(),
            accessors: t.accessorFunction(),
            renderer: t.rendererFunction(),
            scales: t.scaleFunction(),
        };
        if (t.preprocessor) {
            result.preprocessor = t.preprocessor;
        }
        return result;
    }
    getChartTools(chartType) {
        const chartTools = {
            [ChartType.StackedBar]: {
                preprocessor: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["stack"],
                gridFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"],
                rendererFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x") }),
                accessorFunction: () => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(undefined, this.palette.standardColors),
                scaleFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"],
            },
            [ChartType.GroupedBar]: {
                gridFunction: () => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])({ grouped: true }),
                rendererFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x") }),
                accessorFunction: () => {
                    const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])({ grouped: true }, this.palette.standardColors);
                    accessors.data.category = (data, i, series, dataSeries) => [data.category, dataSeries.name];
                    return accessors;
                },
                scaleFunction: () => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])({ grouped: true }),
            },
            [ChartType.Line]: {
                gridFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"](),
                rendererFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](),
                accessorFunction: () => {
                    const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.palette.standardColors);
                    accessors.data.x = d => d.category;
                    accessors.data.y = d => d.value;
                    accessors.data.value = d => d.value;
                    return accessors;
                },
                scaleFunction: () => ({
                    x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(this.categories),
                    y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
                }),
            },
        };
        return chartTools[chartType];
    }
};
TwoDimensionalDataExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-two-dimensional-data-example",
        template: _raw_loader_two_dimensional_data_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TwoDimensionalDataExampleComponent);



/***/ }),

/***/ "dLxB":
/*!****************************************************************************************!*\
  !*** ./examples/components/demo/development/type-switch/type-switch-example.module.ts ***!
  \****************************************************************************************/
/*! exports provided: TypeSwitchExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSwitchExampleModule", function() { return TypeSwitchExampleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _one_dimensional_data_example_one_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./one-dimensional-data-example/one-dimensional-data.example.component */ "Mtx1");
/* harmony import */ var _two_dimensional_data_example_two_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./two-dimensional-data-example/two-dimensional-data.example.component */ "W2zq");








const routes = [
    {
        path: "1d",
        component: _one_dimensional_data_example_one_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_6__["OneDimensionalDataExampleComponent"],
    },
    {
        path: "2d",
        component: _two_dimensional_data_example_two_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_7__["TwoDimensionalDataExampleComponent"],
    },
];
let TypeSwitchExampleModule = class TypeSwitchExampleModule {
};
TypeSwitchExampleModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _one_dimensional_data_example_one_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_6__["OneDimensionalDataExampleComponent"],
            _two_dimensional_data_example_two_dimensional_data_example_component__WEBPACK_IMPORTED_MODULE_7__["TwoDimensionalDataExampleComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiRadioModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
    })
], TypeSwitchExampleModule);



/***/ }),

/***/ "hzus":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/type-switch/two-dimensional-data-example/two-dimensional-data.example.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>\n    Legend by\n    <nui-radio-group class=\"nui-radio-group-inline\"\n                     [(value)]=\"mainCategory\"\n                     (valueChange)=\"updateMainCategory()\">\n        <nui-radio *ngFor=\"let category of mainCategoryOptions\"\n                   [value]=\"category\">\n            {{category | titlecase}}\n        </nui-radio>\n    </nui-radio-group>\n</h3>\n<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               descriptionPrimary=\"{{legendSeries.id | titlecase}}\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"accessors.data['value'](legendSeries.data[0], 0, null, null)\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                </nui-rich-legend-tile>\n                <nui-icon [icon]=\"iconMap[legendSeries.id]\" *ngIf=\"iconMap[legendSeries.id]\" class=\"mt-1 ml-3\"></nui-icon>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-radio-group class=\"nui-radio-group-inline\"\n                         [(value)]=\"chartType\"\n                         (valueChange)=\"updateChartType()\">\n            <nui-radio *ngFor=\"let type of chartTypes\"\n                       [value]=\"type\">\n                {{type | titlecase}}\n            </nui-radio>\n        </nui-radio-group>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=type-switch-type-switch-example-module-es2015.js.map