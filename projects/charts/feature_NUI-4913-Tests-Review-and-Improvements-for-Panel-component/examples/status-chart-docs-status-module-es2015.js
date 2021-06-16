(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-chart-docs-status-module"],{

/***/ "+yb5":
/*!******************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status/status-legend-chart/status-legend-chart.example.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: StatusLegendChartExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusLegendChartExampleComponent", function() { return StatusLegendChartExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_legend_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-legend-chart.example.component.html */ "jbW9");
/* harmony import */ var _status_legend_chart_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-legend-chart.example.component.less */ "5g+D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







var Status;
(function (Status) {
    Status["Unknown"] = "unknown";
    Status["Up"] = "up";
    Status["Warning"] = "warning";
    Status["Down"] = "down";
    Status["Critical"] = "critical";
})(Status || (Status = {}));
const OPACITY_BACKGROUND_EMPHASIZED = 0.4;
let StatusLegendChartExampleComponent = class StatusLegendChartExampleComponent {
    constructor(iconService) {
        this.iconService = iconService;
    }
    ngOnInit() {
        const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["XYGrid"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["BarStatusGridConfig"]()));
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["ChartAssist"](chart);
        const statusColors = createColorProvider();
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["statusAccessors"])(statusColors);
        // Thickness accessor should be used to specify which status corresponds to a thin bar or thick
        accessors.data.thickness = (data) => data.status === Status.Up ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["BarRenderer"].THIN : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["BarRenderer"].THICK;
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["BarHighlightStrategy"]("x") });
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["BandScale"]().fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["StatusAccessors"].STATUS_DOMAIN),
        };
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        this.chartAssist.chart.update(seriesSet);
        const statusMarkers = createMarkerProvider(this.iconService);
        const palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["ChartPalette"](statusColors, { backgroundOpacity: OPACITY_BACKGROUND_EMPHASIZED });
        // legendLabelData$ is a stream of data that can be used to display data in legend
        // (last value while user does not interact with chart and current value while interacting).
        // This can help to generate stream of labels/icons/backgrounds:
        this.legendLabel$ = this.chartAssist.legendLabelData$(seriesSet[0])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(d => d.status));
        this.legendIcon$ = this.legendLabel$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(statusMarkers.get));
        this.legendBackground$ = this.legendLabel$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(palette.backgroundColors.get));
    }
};
StatusLegendChartExampleComponent.ctorParameters = () => [
    { type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["IconService"] }
];
StatusLegendChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-status-legend-chart-example",
        template: _raw_loader_status_legend_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_status_legend_chart_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["IconService"]])
], StatusLegendChartExampleComponent);

function createColorProvider() {
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["MappedValueProvider"]({
        [Status.Unknown]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["CHART_PALETTE_CS_S"][3],
        [Status.Up]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["CHART_PALETTE_CS_S"][4],
        [Status.Warning]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["CHART_PALETTE_CS_S"][2],
        [Status.Down]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["CHART_PALETTE_CS_S"][0],
        [Status.Critical]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["CHART_PALETTE_CS_S"][1],
    });
}
function createMarkerProvider(iconService) {
    const getStatusMarker = (status) => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["SvgMarker"](iconService.getStatusIcon(status));
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["MappedValueProvider"]({
        [Status.Unknown]: getStatusMarker(Status.Unknown),
        [Status.Up]: getStatusMarker(Status.Up),
        [Status.Warning]: getStatusMarker(Status.Warning),
        [Status.Down]: getStatusMarker(Status.Down),
        [Status.Critical]: getStatusMarker(Status.Critical),
    });
}
/* Chart data */
function getData() {
    return [{
            id: "series-1",
            name: "Series 1",
            data: [
                {
                    status: Status.Up,
                    start: new Date(2012, 5, 3),
                    end: new Date(2012, 5, 6),
                },
                {
                    status: Status.Down,
                    start: new Date(2012, 5, 6),
                    end: new Date(2012, 5, 17),
                },
                {
                    status: Status.Warning,
                    start: new Date(2012, 5, 17),
                    end: new Date(2012, 5, 18),
                },
            ].map(d => ({
                value: d.end,
                status: d.status,
                start: d.start,
                end: d.end,
            })),
        }];
}


/***/ }),

/***/ "5g+D":
/*!********************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status/status-legend-chart/status-legend-chart.example.component.less ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-legend-tile {\n  width: 60px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1sZWdlbmQtY2hhcnQuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFdBQUE7QUFKSiIsImZpbGUiOiJzdGF0dXMtbGVnZW5kLWNoYXJ0LmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4vLyBUb2RvOiBwcm92aWRlIGl0IGZyb20gZnJhbWV3b3JrIGluIHNjb3BlIG9mIE5VSS0zNDMwXG5AbnVpLXJpY2gtbGVnZW5kLXRpbGUtd2lkdGg6IDYwcHg7XG5cbi5jdXN0b20tbGVnZW5kLXRpbGUge1xuICAgIHdpZHRoOiBAbnVpLXJpY2gtbGVnZW5kLXRpbGUtd2lkdGg7XG59XG4iXX0= */");

/***/ }),

/***/ "6p0O":
/*!*********************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status/chart-docs-status.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ChartDocsStatusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsStatusModule", function() { return ChartDocsStatusModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _chart_docs_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart-docs-status.component */ "7l4U");
/* harmony import */ var _status_chart_status_chart_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./status-chart/status-chart.example.component */ "aYRN");
/* harmony import */ var _status_legend_chart_status_legend_chart_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status-legend-chart/status-legend-chart.example.component */ "+yb5");
/* harmony import */ var _status_test_status_chart_test_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status-test/status-chart-test.component */ "7t/l");










const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_status_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsStatusComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "basic",
        component: _status_chart_status_chart_example_component__WEBPACK_IMPORTED_MODULE_7__["StatusChartExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "legend",
        component: _status_legend_chart_status_legend_chart_example_component__WEBPACK_IMPORTED_MODULE_8__["StatusLegendChartExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "test",
        component: _status_test_status_chart_test_component__WEBPACK_IMPORTED_MODULE_9__["StatusChartTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ChartDocsStatusModule = class ChartDocsStatusModule {
};
ChartDocsStatusModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_docs_status_component__WEBPACK_IMPORTED_MODULE_6__["ChartDocsStatusComponent"],
            _status_chart_status_chart_example_component__WEBPACK_IMPORTED_MODULE_7__["StatusChartExampleComponent"],
            _status_legend_chart_status_legend_chart_example_component__WEBPACK_IMPORTED_MODULE_8__["StatusLegendChartExampleComponent"],
            _status_test_status_chart_test_component__WEBPACK_IMPORTED_MODULE_9__["StatusChartTestComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("ZIt9") },
        ],
    })
], ChartDocsStatusModule);



/***/ }),

/***/ "7l4U":
/*!************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status/chart-docs-status.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChartDocsStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsStatusComponent", function() { return ChartDocsStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_status_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-status.component.html */ "CL57");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsStatusComponent = class ChartDocsStatusComponent {
};
ChartDocsStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-status",
        template: _raw_loader_chart_docs_status_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsStatusComponent);



/***/ }),

/***/ "7t/l":
/*!************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status/status-test/status-chart-test.component.ts ***!
  \************************************************************************************************/
/*! exports provided: StatusChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusChartTestComponent", function() { return StatusChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-chart-test.component.html */ "JmEi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_5__);






var Status;
(function (Status) {
    Status["Unknown"] = "unknown";
    Status["Up"] = "up";
    Status["Warning"] = "warning";
    Status["Down"] = "down";
    Status["Critical"] = "critical";
})(Status || (Status = {}));
let StatusChartTestComponent = class StatusChartTestComponent {
    constructor(iconService) {
        this.iconService = iconService;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarStatusGridConfig"]()));
        this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarTooltipsPlugin"]({ horizontal: true });
    }
    ngOnInit() {
        this.statusMarkers = createMarkerProvider(this.iconService);
        this.chart.addPlugin(this.tooltipsPlugin);
        // In order to set interaction Label Formatter that is independent from bottom tick formatter,
        // it should be added separately with formatter name in a constructor
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLabelPlugin"]("labelFormatter"));
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLinePlugin"]());
        this.chart.updateDimensions();
        const statusColors = createColorProvider();
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["statusAccessors"])(statusColors);
        const iconSize = 10;
        const icons = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"](getResizedIconsValueMap(this.iconService, iconSize));
        // Thickness accessor should be used to specify which status corresponds to a thin bar or thick
        accessors.data.thickness = (data) => data.status === Status.Up ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].THIN : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].THICK;
        accessors.data.marker = (data) => icons.get(data.status);
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarHighlightStrategy"]("x") });
        const bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BandScale"]();
        const timeScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeScale"]();
        // This formats label in interaction label plugin
        timeScale.formatters.labelFormatter = (d) => moment_moment__WEBPACK_IMPORTED_MODULE_5___default()(d).format("LL");
        bandScale.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StatusAccessors"].STATUS_DOMAIN);
        const scales = {
            y: bandScale,
            x: timeScale,
        };
        // Marker accessor is used to draw marker on a bar depending on the data point
        accessors.data.marker = (data) => icons.get(data.status);
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        this.chart.update(seriesSet);
        // Sample events that can be used in order to handle click or highlighting of certain status
        this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_DATA_POINT_EVENT"]).subscribe(console.log);
        this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SELECT_DATA_POINT_EVENT"]).subscribe(console.log);
    }
};
StatusChartTestComponent.ctorParameters = () => [
    { type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["IconService"] }
];
StatusChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-status-chart-test",
        template: _raw_loader_status_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["IconService"]])
], StatusChartTestComponent);

function createMarkerProvider(iconService) {
    const getStatusMarker = (status) => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SvgMarker"](iconService.getStatusIcon(status));
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"]({
        [Status.Unknown]: getStatusMarker(Status.Unknown),
        [Status.Up]: getStatusMarker(Status.Up),
        [Status.Warning]: getStatusMarker(Status.Warning),
        [Status.Down]: getStatusMarker(Status.Down),
        [Status.Critical]: getStatusMarker(Status.Critical),
    });
}
function createColorProvider() {
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"]({
        [Status.Unknown]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][3],
        [Status.Up]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][4],
        [Status.Warning]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][2],
        [Status.Down]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][0],
        [Status.Critical]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][1],
    });
}
function getResizedIconsValueMap(iconService, iconSize) {
    return {
        [Status.Unknown]: iconService.getIconResized(iconService.getStatusIcon(Status.Unknown), iconSize),
        [Status.Up]: iconService.getIconResized(iconService.getStatusIcon(Status.Up), iconSize),
        [Status.Warning]: iconService.getIconResized(iconService.getStatusIcon(Status.Warning), iconSize),
        [Status.Down]: iconService.getIconResized(iconService.getStatusIcon(Status.Down), iconSize),
        [Status.Critical]: iconService.getIconResized(iconService.getStatusIcon(Status.Critical), iconSize),
    };
}
/* Chart data */
function getData() {
    return [{
            id: "1",
            name: "Series 1",
            data: [
                {
                    status: Status.Up,
                    start: 0,
                    end: 22,
                },
                {
                    status: Status.Warning,
                    start: 22,
                    end: 39,
                },
                {
                    status: Status.Unknown,
                    start: 39,
                    end: 59,
                },
                {
                    status: Status.Down,
                    start: 59,
                    end: 109,
                },
                {
                    status: Status.Critical,
                    start: 109,
                    end: 178,
                },
                {
                    status: Status.Up,
                    start: 178,
                    end: 877,
                },
                {
                    status: Status.Critical,
                    start: 877,
                    end: 980,
                },
                {
                    status: Status.Warning,
                    start: 980,
                    end: 1000,
                },
            ].map(d => ({
                value: d.end - d.start,
                status: d.status,
                start: getDate(d.start),
                end: getDate(d.end),
            })),
        }];
}
function getDate(hours) {
    return moment_moment__WEBPACK_IMPORTED_MODULE_5___default()("1986-02-17").add({ hours }).toDate();
}


/***/ }),

/***/ "ZIt9":
/*!*********************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-status.component.html": "CL57",
	"./chart-docs-status.component.ts": "xtT8",
	"./chart-docs-status.module.ts": "AOID",
	"./status-chart/status-chart.example.component.html": "zEWV",
	"./status-chart/status-chart.example.component.ts": "UY5a",
	"./status-legend-chart/status-legend-chart.example.component.html": "jbW9",
	"./status-legend-chart/status-legend-chart.example.component.less": "fTb4",
	"./status-legend-chart/status-legend-chart.example.component.ts": "PvYx",
	"./status-test/status-chart-test.component.html": "JmEi",
	"./status-test/status-chart-test.component.ts": "FEzG"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
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
webpackContext.id = "ZIt9";

/***/ }),

/***/ "aYRN":
/*!****************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/status/status-chart/status-chart.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: StatusChartExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusChartExampleComponent", function() { return StatusChartExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status-chart.example.component.html */ "zEWV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_5__);






var Status;
(function (Status) {
    Status["Unknown"] = "unknown";
    Status["Up"] = "up";
    Status["Warning"] = "warning";
    Status["Down"] = "down";
    Status["Critical"] = "critical";
})(Status || (Status = {}));
let StatusChartExampleComponent = class StatusChartExampleComponent {
    constructor(iconService) {
        this.iconService = iconService;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarStatusGridConfig"]()));
    }
    ngOnInit() {
        // Configure the tooltips plugin (if needed)
        this.tooltipsStatusMarkers = createTooltipMarkerProvider(this.iconService);
        this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarTooltipsPlugin"]({ horizontal: true });
        this.chart.addPlugin(this.tooltipsPlugin);
        // In order to set an interaction Label Formatter that is independent from bottom tick formatter,
        // it should be added separately with the formatter name in the constructor.
        // See timeScale.formatters.labelFormatter instance below.
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLabelPlugin"]("labelFormatter"));
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLinePlugin"]());
        // Create a MappedValueProvider to map the statuses to their corresponding colors and pass it to the
        // statusAccessors function to generate a StatusAccessors instance
        const statusColors = createColorProvider();
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["statusAccessors"])(statusColors);
        // Thickness accessor should be used to specify which status corresponds to a thin bar or thick
        accessors.data.thickness = (data) => data.status === Status.Up ? _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].THIN : _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"].THICK;
        // Configure the marker accessor to provide the symbols displayed at the center of each status bar
        // depending on the value of the datapoint.
        const iconSize = 10;
        const icons = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"](getResizedIconsValueMap(this.iconService, iconSize));
        accessors.data.marker = (data) => icons.get(data.status);
        // Create the bar renderer. The 'x' BarHighlightStrategy indicates that bars will be highlighted
        // as the mouse moves along the x-axis. This makes sense for the status chart since it's
        // horizontally oriented and all bars are aligned at the same y coordinate.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarHighlightStrategy"]("x") });
        // Create the scales making sure that the scale for the y-axis is a band scale
        const bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BandScale"]();
        const timeScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["TimeScale"]();
        const scales = {
            x: timeScale,
            y: bandScale,
        };
        // This formats label in interaction label plugin
        timeScale.formatters.labelFormatter = (d) => moment_moment__WEBPACK_IMPORTED_MODULE_5___default()(d).format("LL");
        // Fix the band scale domain to a single value, in this case STATUS_DOMAIN
        bandScale.fixDomain(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StatusAccessors"].STATUS_DOMAIN);
        // Assemble the series set
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // Update the chart
        this.chart.update(seriesSet);
        // Sample events that can be used in order to handle click or highlighting of certain status
        this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_DATA_POINT_EVENT"]).subscribe(console.log);
        this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SELECT_DATA_POINT_EVENT"]).subscribe(console.log);
    }
};
StatusChartExampleComponent.ctorParameters = () => [
    { type: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["IconService"] }
];
StatusChartExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-status-chart-example",
        template: _raw_loader_status_chart_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["IconService"]])
], StatusChartExampleComponent);

function createTooltipMarkerProvider(iconService) {
    const getStatusMarker = (status) => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SvgMarker"](iconService.getStatusIcon(status));
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"]({
        [Status.Unknown]: getStatusMarker(Status.Unknown),
        [Status.Up]: getStatusMarker(Status.Up),
        [Status.Warning]: getStatusMarker(Status.Warning),
        [Status.Down]: getStatusMarker(Status.Down),
        [Status.Critical]: getStatusMarker(Status.Critical),
    });
}
function createColorProvider() {
    return new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"]({
        [Status.Unknown]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][3],
        [Status.Up]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][4],
        [Status.Warning]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][2],
        [Status.Down]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][0],
        [Status.Critical]: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"][1],
    });
}
function getResizedIconsValueMap(iconService, iconSize) {
    return {
        [Status.Unknown]: iconService.getIconResized(iconService.getStatusIcon(Status.Unknown), iconSize),
        [Status.Up]: iconService.getIconResized(iconService.getStatusIcon(Status.Up), iconSize),
        [Status.Warning]: iconService.getIconResized(iconService.getStatusIcon(Status.Warning), iconSize),
        [Status.Down]: iconService.getIconResized(iconService.getStatusIcon(Status.Down), iconSize),
        [Status.Critical]: iconService.getIconResized(iconService.getStatusIcon(Status.Critical), iconSize),
    };
}
/* Chart data */
function getData() {
    return [{
            id: "1",
            name: "Series 1",
            data: [
                {
                    status: Status.Up,
                    start: 0,
                    end: 22,
                },
                {
                    status: Status.Warning,
                    start: 22,
                    end: 39,
                },
                {
                    status: Status.Unknown,
                    start: 39,
                    end: 59,
                },
                {
                    status: Status.Down,
                    start: 59,
                    end: 109,
                },
                {
                    status: Status.Critical,
                    start: 109,
                    end: 178,
                },
                {
                    status: Status.Up,
                    start: 178,
                    end: 877,
                },
                {
                    status: Status.Critical,
                    start: 877,
                    end: 980,
                },
                {
                    status: Status.Warning,
                    start: 980,
                    end: 1000,
                },
            ].map(d => ({
                value: d.end - d.start,
                status: d.status,
                start: getDate(d.start),
                end: getDate(d.end),
            })),
        }];
}
function getDate(hours) {
    return moment_moment__WEBPACK_IMPORTED_MODULE_5___default()().add({ hours }).toDate();
}


/***/ })

}]);
//# sourceMappingURL=status-chart-docs-status-module-es2015.js.map