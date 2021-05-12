(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thresholds-thresholds-prototype-module"],{

/***/ "Dj89":
/*!****************************************************************************************!*\
  !*** ./examples/components/demo/development/thresholds/thresholds-prototype.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ThresholdsPrototypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThresholdsPrototypeModule", function() { return ThresholdsPrototypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _thresholds_prototype_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thresholds-prototype.component */ "USd3");






const routes = [
    {
        path: "",
        component: _thresholds_prototype_component__WEBPACK_IMPORTED_MODULE_5__["ThresholdsPrototypeComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ThresholdsPrototypeModule = class ThresholdsPrototypeModule {
};
ThresholdsPrototypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _thresholds_prototype_component__WEBPACK_IMPORTED_MODULE_5__["ThresholdsPrototypeComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["NuiChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
    })
], ThresholdsPrototypeModule);



/***/ }),

/***/ "USd3":
/*!*******************************************************************************************!*\
  !*** ./examples/components/demo/development/thresholds/thresholds-prototype.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ThresholdsPrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThresholdsPrototypeComponent", function() { return ThresholdsPrototypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thresholds_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thresholds-prototype.component.html */ "tOIg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





var Status;
(function (Status) {
    Status["Error"] = "error";
    Status["Warning"] = "warning";
})(Status || (Status = {}));
let ThresholdsPrototypeComponent = class ThresholdsPrototypeComponent {
    constructor(thresholdsService) {
        this.thresholdsService = thresholdsService;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.reversedThresholdsChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
        this.reversedThresholdsChartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.reversedThresholdsChart);
        this.thresholdsPalette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"]({
            [Status.Error]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][1],
            [Status.Warning]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS_S"][2],
        }));
    }
    ngOnInit() {
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeIntervalScale"](Object(moment_moment__WEBPACK_IMPORTED_MODULE_4__["duration"])(5, "minutes")),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        scales.y.fixDomain([0, 100]);
        const reversedThresholdScales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        reversedThresholdScales.y.fixDomain([0, 100]);
        // Backgrounds use the StatusBarRenderer which requires a special set of scales.
        // Note that the x scale is shared between the foreground series and the background series.
        // Also note that the y band scale fixes the domain to a single value of STATUS_DOMAIN
        const bgScales = {
            x: scales.x,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN),
        };
        const reversedThresholdBgScales = {
            x: reversedThresholdScales.x,
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StatusAccessors"].STATUS_DOMAIN),
        };
        // Zone definitions tell the threshold service where threshold zones begin and end
        const zoneDefinitions = getZoneDefinitions();
        const reversedZoneDefinitions = getReversedZoneDefinitions();
        // Here we define the main data series on the chart which will be visualized as lines
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        const thresholds = [];
        for (const s of seriesSet) {
            // It's possible to manually define zones by area-like data series with start/end values for every data point. We don't do that
            // here, but what we do instead is use simplified zones that are defined by a start value and/or an end value. (A missing
            // start or end value indicates an infinite zone.)
            // Those values are then converted into a set of data series in this step.
            const zones = this.thresholdsService.getThresholdZones(s, zoneDefinitions, this.thresholdsPalette.standardColors);
            // This injects threshold data into every data point of the source series. It is important, because later we can
            // access related threshold information from many different places like legend, tooltips or even when calculating
            // other threshold related data series, which we do in the following step.
            this.thresholdsService.injectThresholdsData(s, zones);
            // Here we create all threshold related visuals for this series. The methods on the thresholdService are broken down and
            // generate separate elements of the whole, because some situations only require, for example, the backgrounds to be applied.
            const seriesThresholds = [
                ...this.thresholdsService.getThresholdLines(zones),
                this.thresholdsService.getBackgrounds(s, zones, bgScales, this.thresholdsPalette.backgroundColors),
            ];
            thresholds.push(...seriesThresholds);
        }
        const reversedThresholdsSeriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer, scales: reversedThresholdScales })));
        const reversedThresholds = [];
        for (const s of reversedThresholdsSeriesSet) {
            const zones = this.thresholdsService.getThresholdZones(s, reversedZoneDefinitions, this.thresholdsPalette.standardColors);
            this.thresholdsService.injectThresholdsData(s, zones);
            const seriesThresholds = [
                ...this.thresholdsService.getThresholdLines(zones),
                this.thresholdsService.getBackgrounds(s, zones, reversedThresholdBgScales, this.thresholdsPalette.backgroundColors),
            ];
            reversedThresholds.push(...seriesThresholds);
        }
        this.chartAssist.update([...thresholds, ...seriesSet]);
        this.reversedThresholdsChartAssist.update([...reversedThresholds, ...reversedThresholdsSeriesSet]);
    }
};
ThresholdsPrototypeComponent.ctorParameters = () => [
    { type: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"] }
];
ThresholdsPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_thresholds_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ThresholdsService"]])
], ThresholdsPrototypeComponent);

/* Chart data */
function getZoneDefinitions() {
    return [
        { status: Status.Error, start: 70, end: 90 },
        { status: Status.Warning, start: 40, end: 70 },
    ];
}
function getReversedZoneDefinitions() {
    return [
        { status: Status.Error, end: 20 },
        { status: Status.Warning, start: 20, end: 40 },
    ];
}
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [{
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:05:00Z", format).toDate(), y: 20 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:10:00Z", format).toDate(), y: 80 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:15:00Z", format).toDate(), y: 10 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:20:00Z", format).toDate(), y: 0 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:25:00Z", format).toDate(), y: 50 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:30:00Z", format).toDate(), y: 20 },
            ],
        }];
}


/***/ }),

/***/ "tOIg":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/thresholds/thresholds-prototype.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n<br>\n<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"reversedThresholdsChart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"reversedThresholdsChartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"reversedThresholdsChartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of reversedThresholdsChartAssist.legendSeriesSet; trackBy: reversedThresholdsChartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"reversedThresholdsChartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"reversedThresholdsChartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!reversedThresholdsChartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"reversedThresholdsChartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"reversedThresholdsChartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"reversedThresholdsChartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"reversedThresholdsChartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"reversedThresholdsChartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"reversedThresholdsChartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=thresholds-thresholds-prototype-module-es2015.js.map