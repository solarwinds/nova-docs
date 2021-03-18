(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-events-chart-docs-events-module"],{

/***/ "Z/G6":
/*!************************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/events sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-events.component.html": "5wfK",
	"./chart-docs-events.component.ts": "SjNZ",
	"./chart-docs-events.module.ts": "aZDi",
	"./event-sampler/event-sampler.component.html": "unPA",
	"./event-sampler/event-sampler.component.less": "TdBD",
	"./event-sampler/event-sampler.component.ts": "qSaD",
	"./events-basic/events-basic-example.component.html": "6jeb",
	"./events-basic/events-basic-example.component.ts": "f8zi"
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
webpackContext.id = "Z/G6";

/***/ }),

/***/ "dEDO":
/*!***************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/events/chart-docs-events.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChartDocsEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsEventsComponent", function() { return ChartDocsEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_events_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-events.component.html */ "5wfK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsEventsComponent = class ChartDocsEventsComponent {
};
ChartDocsEventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-events",
        template: _raw_loader_chart_docs_events_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsEventsComponent);



/***/ }),

/***/ "jKAp":
/*!*******************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/events/events-basic/events-basic-example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: EventsBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsBasicExampleComponent", function() { return EventsBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_events_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./events-basic-example.component.html */ "6jeb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);





let EventsBasicExampleComponent = class EventsBasicExampleComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
    }
    ngOnInit() {
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"]();
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"]();
        const scales = {
            x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"](),
            y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"](),
        };
        const seriesSet = getData().map(d => (Object.assign(Object.assign({}, d), { accessors,
            renderer,
            scales })));
        // - subscribe to a chosen chart event
        // - unsubscribing is not necessary as the chart will be destroyed when the component used to place it on the page will be destroyed;
        //   the subscription will be unsubscribed automatically
        this.chart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["INTERACTION_VALUES_EVENT"]).subscribe((event) => {
            // process the event
            this.payload = JSON.stringify(event.data, null, 4);
            // in case of using a OnPush change detection strategy you need to detectChanges manually as the event is internal to this component and
            // wouldn't cause the UI to update
            this.changeDetectorRef.detectChanges();
        });
        this.chart.update(seriesSet);
    }
};
EventsBasicExampleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
EventsBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-events-basic",
        template: _raw_loader_events_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
], EventsBasicExampleComponent);

/* Chart data */
function getData() {
    const format = "YYYY-MM-DDTHH:mm:ssZ";
    return [
        {
            id: "series-1",
            name: "Series 1",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format), y: 30 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format), y: 95 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format), y: 15 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format), y: 35 },
            ],
        },
        {
            id: "series-2",
            name: "Series 2",
            data: [
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-25T15:14:29.909Z", format), y: 60 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-27T15:14:29.909Z", format), y: 40 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-29T15:14:29.909Z", format), y: 70 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2016-12-31T15:14:29.909Z", format), y: 45 },
                { x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()("2017-01-03T15:14:29.909Z", format), y: 90 },
            ],
        },
    ];
}


/***/ }),

/***/ "pNBX":
/*!*************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EventSamplerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventSamplerComponent", function() { return EventSamplerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_event_sampler_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./event-sampler.component.html */ "unPA");
/* harmony import */ var _event_sampler_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-sampler.component.less */ "wg5y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/each */ "xkGU");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/zipObject */ "VJLA");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_6__);







var ChartType;
(function (ChartType) {
    ChartType["StackedBar"] = "Stacked Bar";
    ChartType["GroupedBar"] = "Grouped Bar";
    ChartType["Line"] = "Line";
})(ChartType || (ChartType = {}));
let EventSamplerComponent = class EventSamplerComponent {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.parsedEvent = {};
        this.eventFilters = [
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MOUSE_ACTIVE_EVENT"],
                name: "MOUSE_ACTIVE_EVENT",
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_VALUES_EVENT"],
                name: "INTERACTION_VALUES_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_DATA_POINTS_EVENT"],
                name: "INTERACTION_DATA_POINTS_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_DATA_POINT_EVENT"],
                name: "INTERACTION_DATA_POINT_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Hover],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_DATA_POINT_EVENT"],
                name: "HIGHLIGHT_DATA_POINT_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["HIGHLIGHT_SERIES_EVENT"],
                name: "HIGHLIGHT_SERIES_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].MouseMove],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_SERIES_EVENT"],
                name: "INTERACTION_SERIES_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["SELECT_DATA_POINT_EVENT"],
                name: "SELECT_DATA_POINT_EVENT",
                interactionTypes: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionType"].Click],
            },
            {
                id: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_VIEW_STATUS_EVENT"],
                name: "CHART_VIEW_STATUS_EVENT",
            },
        ];
        this.selectedEvent = this.eventFilters[0];
        this.selectedInteractionType = "";
        this.chartTypes = [ChartType.GroupedBar, ChartType.StackedBar, ChartType.Line];
        this.categories = ["Q1", "Q2", "Q3", "Q4"];
        this.subCategories = ["down", "critical", "warning", "unknown", "ok", "other"];
        this.values = [
            [24, 16, 7, 6, 97, 4],
            [13, 8, 5, 17, 5, 25],
            [97, 41, 24, 6, 7, 6],
            [45, 87, 23, 48, 24, 9],
        ];
    }
    onEventFilterChange(selectedEvent) {
        this.selectedEvent = selectedEvent;
        this.selectedInteractionType = this.selectedEvent.interactionTypes ? this.selectedEvent.interactionTypes[0] : "";
    }
    onInteractionTypeChange(type) {
        this.selectedInteractionType = type;
    }
    ngOnInit() {
        this.valueAccessor = (i, j) => this.values[j][i];
        this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_6___default()(this.subCategories, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["CHART_PALETTE_CS_S"])));
        this.updateChartType(this.chartTypes[0]);
    }
    updateChartType(chartType) {
        this.selectedChartType = chartType;
        this.buildChart();
        this.subscribeToChart();
        this.updateChart();
    }
    buildChart() {
        const { grid, accessors, renderer, scales, seriesProcessor } = this.getChartAttributes(this.selectedChartType);
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["InteractionLabelPlugin"]());
        this.renderer = renderer;
        this.accessors = accessors;
        this.scales = scales;
        this.seriesProcessor = seriesProcessor;
    }
    subscribeToChart() {
        lodash_each__WEBPACK_IMPORTED_MODULE_5___default()(this.eventFilters, filter => {
            this.chart.getEventBus().getStream(filter.id).subscribe((event) => {
                if (this.selectedEvent.id === filter.id) {
                    if (!event.data.interactionType || this.selectedInteractionType === event.data.interactionType) {
                        recursivelyReplacePropValue(event, "dataSeries", "<< IChartSeries info is available here (replaced in output for brevity) >>");
                        this.parsedEvent = event;
                        this.changeDetector.markForCheck();
                    }
                }
            });
        });
    }
    updateChart() {
        let seriesSet = this.buildChartSeries(this.categories, this.subCategories, this.valueAccessor);
        // TODO: Refactor this to be able to pass different types of seriesSet to get rid of the any
        seriesSet = this.seriesProcessor ? this.seriesProcessor(seriesSet, () => true) : seriesSet;
        this.chart.update(seriesSet);
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
        let result = {
            grid: t.gridFunction(),
            accessors: t.accessorFunction(),
            renderer: t.rendererFunction(),
            scales: t.scaleFunction(),
        };
        if (t.seriesProcessor) {
            result = Object.assign(Object.assign({}, result), { seriesProcessor: t.seriesProcessor });
        }
        return result;
    }
    getChartTools(chartType) {
        const chartTools = {
            [ChartType.StackedBar]: {
                seriesProcessor: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stackedPreprocessor"],
                gridFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barGrid"],
                rendererFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarHighlightStrategy"]("x") }),
                accessorFunction: () => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barAccessors"])(undefined, this.palette.standardColors),
                scaleFunction: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barScales"],
            },
            [ChartType.GroupedBar]: {
                gridFunction: () => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barGrid"])({ grouped: true }),
                rendererFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BarSeriesHighlightStrategy"]("x") }),
                accessorFunction: () => {
                    const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barAccessors"])({ grouped: true }, this.palette.standardColors);
                    accessors.data.category = (data, i, series, dataSeries) => [data.category, dataSeries.name];
                    return accessors;
                },
                scaleFunction: () => Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["barScales"])({ grouped: true }),
            },
            [ChartType.Line]: {
                gridFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](),
                rendererFunction: () => new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineRenderer"]({
                    interactionStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineSelectSeriesInteractionStrategy"](),
                    markerInteraction: { enabled: true, clickable: true },
                }),
                accessorFunction: () => {
                    const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LineAccessors"](this.palette.standardColors);
                    accessors.data.x = d => d.category;
                    accessors.data.y = d => d.value;
                    accessors.data.value = d => d.value;
                    return accessors;
                },
                scaleFunction: () => ({
                    x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["BandScale"]().fixDomain(this.categories),
                    y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearScale"](),
                }),
            },
        };
        return chartTools[chartType];
    }
};
EventSamplerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
EventSamplerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-chart-event-sampler",
        template: _raw_loader_event_sampler_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_event_sampler_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], EventSamplerComponent);

function recursivelyReplacePropValue(obj, property, replacement) {
    for (const prop in obj) {
        if (prop === property) {
            obj[prop] = replacement;
        }
        else if (typeof obj[prop] === "object") {
            recursivelyReplacePropValue(obj[prop], property, replacement);
        }
    }
}


/***/ }),

/***/ "w47B":
/*!************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/events/chart-docs-events.module.ts ***!
  \************************************************************************************/
/*! exports provided: ChartDocsEventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsEventsModule", function() { return ChartDocsEventsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _chart_docs_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-docs-events.component */ "dEDO");
/* harmony import */ var _event_sampler_event_sampler_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-sampler/event-sampler.component */ "pNBX");
/* harmony import */ var _events_basic_events_basic_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events-basic/events-basic-example.component */ "jKAp");








const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_events_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsEventsComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "basic",
        component: _events_basic_events_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["EventsBasicExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "event-sampler",
        component: _event_sampler_event_sampler_component__WEBPACK_IMPORTED_MODULE_6__["EventSamplerComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ChartDocsEventsModule = class ChartDocsEventsModule {
};
ChartDocsEventsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_docs_events_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsEventsComponent"],
            _events_basic_events_basic_example_component__WEBPACK_IMPORTED_MODULE_7__["EventsBasicExampleComponent"],
            _event_sampler_event_sampler_component__WEBPACK_IMPORTED_MODULE_6__["EventSamplerComponent"],
        ],
        imports: [
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiCheckboxModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("Z/G6") },
        ],
    })
], ChartDocsEventsModule);



/***/ }),

/***/ "wg5y":
/*!***************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.less ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sampler-output__container {\n  height: 660px;\n  overflow-y: scroll;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXNhbXBsZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJldmVudC1zYW1wbGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNhbXBsZXItb3V0cHV0LWNvbnRhaW5lci1oZWlnaHQ6IDY2MHB4O1xuXG4uc2FtcGxlci1vdXRwdXRfX2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBAc2FtcGxlci1vdXRwdXQtY29udGFpbmVyLWhlaWdodDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-events-chart-docs-events-module-es2015.js.map