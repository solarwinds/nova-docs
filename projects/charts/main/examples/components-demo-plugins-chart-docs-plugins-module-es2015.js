(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-plugins-chart-docs-plugins-module"],{

/***/ "BGub":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/bar-chart/bar-chart-with-tooltips.example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\" #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data}}</span>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "C3y4":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/plugins sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-plugins.module.ts": "EFvm",
	"./popovers/bar-chart/bar-chart-with-popover.example.component.html": "NnDr",
	"./popovers/bar-chart/bar-chart-with-popover.example.component.ts": "p1Bg",
	"./popovers/chart-docs-popovers.component.html": "t80E",
	"./popovers/chart-docs-popovers.component.ts": "mkmb",
	"./popovers/chart-docs-popovers.module.ts": "CfHS",
	"./popovers/donut-chart/donut-chart-with-popover.example.component.html": "ZI3Q",
	"./popovers/donut-chart/donut-chart-with-popover.example.component.ts": "LwkG",
	"./popovers/line-chart/line-chart-with-popover.example.component.html": "oOVS",
	"./popovers/line-chart/line-chart-with-popover.example.component.ts": "weFs",
	"./popovers/popover-visual-test/popover-visual-test.component.html": "sGkY",
	"./popovers/popover-visual-test/popover-visual-test.component.ts": "dN/v",
	"./tooltips/bar-chart/bar-chart-with-tooltips.example.component.html": "BGub",
	"./tooltips/bar-chart/bar-chart-with-tooltips.example.component.ts": "gXOl",
	"./tooltips/chart-docs-tooltips.component.html": "U+s9",
	"./tooltips/chart-docs-tooltips.component.ts": "Pkp1",
	"./tooltips/chart-docs-tooltips.module.ts": "cFqG",
	"./tooltips/donut-chart/donut-chart-with-tooltips.example.component.html": "W+hr",
	"./tooltips/donut-chart/donut-chart-with-tooltips.example.component.ts": "bRPr",
	"./tooltips/line-chart/line-chart-with-tooltips.example.component.html": "ZdrO",
	"./tooltips/line-chart/line-chart-with-tooltips.example.component.ts": "XPc+",
	"./tooltips/visual-test/tooltips-visual-test.component.html": "CiTo",
	"./tooltips/visual-test/tooltips-visual-test.component.less": "l6mW",
	"./tooltips/visual-test/tooltips-visual-test.component.ts": "IrCi"
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
webpackContext.id = "C3y4";

/***/ }),

/***/ "CfHS":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/chart-docs-popovers.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { BarChartWithPopoverExampleComponent } from \"./bar-chart/bar-chart-with-popover.example.component\";\nimport { ChartDocsPopoversComponent } from \"./chart-docs-popovers.component\";\nimport { DonutChartWithPopoverExampleComponent } from \"./donut-chart/donut-chart-with-popover.example.component\";\nimport { LineChartWithPopoverExampleComponent } from \"./line-chart/line-chart-with-popover.example.component\";\nimport { PopoverVisualTestComponent } from \"./popover-visual-test/popover-visual-test.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsPopoversComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"bar\",\n        component: BarChartWithPopoverExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"line\",\n        component: LineChartWithPopoverExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"visual-test\",\n        component: PopoverVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        BarChartWithPopoverExampleComponent,\n        DonutChartWithPopoverExampleComponent,\n        ChartDocsPopoversComponent,\n        LineChartWithPopoverExampleComponent,\n        PopoverVisualTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        FormsModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsPopoversModule {\n}\n");

/***/ }),

/***/ "CiTo":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/visual-test/tooltips-visual-test.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<charts-test-harness>\n    <nui-bar-chart-with-tooltips-example id=\"visual-test-bar-chart-tooltips\"></nui-bar-chart-with-tooltips-example>\n    <nui-donut-chart-with-tooltips-example id=\"visual-test-donut-chart-tooltips\"></nui-donut-chart-with-tooltips-example>\n    <nui-line-chart-with-tooltips-example id=\"visual-test-line-chart-tooltips\"></nui-line-chart-with-tooltips-example>\n    <div class=\"scrollable-container\">\n        <div class=\"tall-div\"></div>\n        <nui-line-chart-with-tooltips-example id=\"visual-test-line-chart-tooltips-with-scroll\"></nui-line-chart-with-tooltips-example>\n    </div>\n</charts-test-harness>\n");

/***/ }),

/***/ "EFvm":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/chart-docs-plugins.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN } from \"@nova-ui/bits\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"tooltips\",\n        loadChildren: () => import(\"components/demo/plugins/tooltips/chart-docs-tooltips.module\").then(m => m.ChartDocsTooltipsModule),\n    },\n    {\n        path: \"popovers\",\n        loadChildren: () => import(\"components/demo/plugins/popovers/chart-docs-popovers.module\").then(m => m.ChartDocsPopoversModule),\n    },\n];\n\n@NgModule({\n    declarations: [],\n    imports: [\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsPluginsModule {\n}\n");

/***/ }),

/***/ "IrCi":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/visual-test/tooltips-visual-test.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-tooltips-visual-test\",\n    templateUrl: \"./tooltips-visual-test.component.html\",\n    styleUrls: [\"./tooltips-visual-test.component.less\"],\n})\nexport class TooltipsVisualTestComponent { }\n");

/***/ }),

/***/ "LwkG":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/donut-chart/donut-chart-with-popover.example.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, CHART_PALETTE_CS_S, MappedValueProvider, radial, RadialAccessors, radialGrid, RadialPopoverPlugin, RadialRenderer, radialScales,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-donut-chart-with-popover-example\",\n    templateUrl: \"./donut-chart-with-popover.example.component.html\",\n})\nexport class DonutChartWithPopoverExampleComponent implements OnInit {\n    public popoverPlugin: RadialPopoverPlugin;\n    public chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n\n    public ngOnInit() {\n        // plugin setup\n        this.popoverPlugin = new RadialPopoverPlugin();\n        this.chartAssist.chart.addPlugin(this.popoverPlugin);\n\n        // accessors setup for colors\n        const accessors = new RadialAccessors();\n        const statusColorProvider = createStatusColorProvider();\n        accessors.series.color = statusColorProvider.get;\n\n        const renderer = new RadialRenderer();\n        const scales = radialScales();\n\n        // chart assist setup\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\nenum Status {\n    Up = \"up\",\n    Warning = \"warning\",\n    Critical = \"critical\",\n    Down = \"down\",\n    Unmanaged = \"unmanaged\",\n    Unknown = \"unknown\",\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { status: Status.Up, value: 42 },\n        { status: Status.Warning, value: 14 },\n        { status: Status.Critical, value: 8 },\n        { status: Status.Down, value: 7 },\n        { status: Status.Unmanaged, value: 5 },\n        { status: Status.Unknown, value: 3 },\n    ].map(d => ({ id: d.status, name: d.status, data: [d.value] }));\n}\n\nfunction createStatusColorProvider() {\n    return new MappedValueProvider<string>({\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n        [Status.Down]: CHART_PALETTE_CS_S[0],\n        [Status.Unmanaged]: CHART_PALETTE_CS_S[5],\n        [Status.Unknown]: CHART_PALETTE_CS_S[3],\n    });\n}\n");

/***/ }),

/***/ "NnDr":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/bar-chart/bar-chart-with-popover.example.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n\n<nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n<ng-template #popoverTemplate let-dataPoints=\"dataPoints\">\n    <div class=\"p-2\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.value.dataSeries.name}}: </strong>\n            <code>{{item.value.data}}</code>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "O5oh":
/*!***********************************************************************!*\
  !*** ./examples/components/demo/plugins/chart-docs-plugins.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChartDocsPluginsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsPluginsModule", function() { return ChartDocsPluginsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");




const exampleRoutes = [
    {
        path: "tooltips",
        loadChildren: () => Promise.all(/*! import() | components-demo-plugins-tooltips-chart-docs-tooltips-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("components-demo-plugins-tooltips-chart-docs-tooltips-module")]).then(__webpack_require__.bind(null, /*! components/demo/plugins/tooltips/chart-docs-tooltips.module */ "KBYt")).then(m => m.ChartDocsTooltipsModule),
    },
    {
        path: "popovers",
        loadChildren: () => Promise.all(/*! import() | components-demo-plugins-popovers-chart-docs-popovers-module */[__webpack_require__.e("default~bar-bar-prototype-module~chart-collection-chart-collection-example-module~components-demo-ad~ec3dd4a6"), __webpack_require__.e("common"), __webpack_require__.e("components-demo-plugins-popovers-chart-docs-popovers-module")]).then(__webpack_require__.bind(null, /*! components/demo/plugins/popovers/chart-docs-popovers.module */ "gZ1U")).then(m => m.ChartDocsPopoversModule),
    },
];
let ChartDocsPluginsModule = class ChartDocsPluginsModule {
};
ChartDocsPluginsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("C3y4") },
        ],
    })
], ChartDocsPluginsModule);



/***/ }),

/***/ "Pkp1":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/chart-docs-tooltips.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-tooltips\",\n    templateUrl: \"./chart-docs-tooltips.component.html\",\n})\nexport class ChartDocsTooltipsComponent {\n    public tooltipsTypeScript = `this.tooltipsPlugin = new ChartTooltipsPlugin();\nthis.chart.addPlugin(this.tooltipsPlugin);\n...`;\n    public tooltipsHtml = `...\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.y}}</span>\n    </div>\n</ng-template>\n...`;\n}\n");

/***/ }),

/***/ "U+s9":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/chart-docs-tooltips.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Tooltips</h1>\n\n<h2>Line Chart</h2>\n<p>\n    To set up tooltips for a line chart, do the following:\n</p>\n<ol>\n    <li>\n        Create an instance if the \n        <code><a href=\"../classes/ChartTooltipsPlugin.html\" target=\"_blank\">ChartTooltipsPlugin</a></code>\n    </li>\n    <li>\n        Register the plugin with the chart using the chart's addPlugin method\n        <pre>{{tooltipsTypeScript}}</pre>\n    </li>\n    <li>\n        Create a \n        <code><a href=\"../components/ChartTooltipsComponent.html\" target=\"_blank\">nui-chart-tooltips</a></code>\n        component on the template\n    </li>\n    <li>Pass the plugin to the component's plugin input</li>\n    <li>\n        Create an ng-template and pass it to the component's template input\n        <pre>{{tooltipsHtml}}</pre>\n    </li>\n</ol>\n<nui-example-wrapper filenamePrefix=\"line-chart-with-tooltips\"\n                     exampleTitle=\"Line Chart\">\n    <nui-line-chart-with-tooltips-example></nui-line-chart-with-tooltips-example>\n</nui-example-wrapper>\n\n<h2>Bar Chart</h2>\n<p>\n    Tooltips can be added to a bar chart in the same way as for line charts. Please see above. It's\n    recommended that the interaction line be turned off by setting the interactionPlugins property on the \n    grid configuration to false and then enabling the interaction label by adding the\n    InteractionLabelPlugin to the chart manually.\n</p>\n<p>\n    It's also recommended that you set the interactive property on the grid configuration to true. This\n    will result in the popover being displayed when hovering in the space above each bar as opposed to\n    only displaying the popover when hovering over the bar itself.\n</p>\n<p>\n    In addition to the above, the following example also configures a custom marker provider and color\n    provider for use by the tooltip.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart-with-tooltips\"\n                     exampleTitle=\"Bar Chart\">\n    <nui-bar-chart-with-tooltips-example></nui-bar-chart-with-tooltips-example>\n</nui-example-wrapper>\n\n<h2>Donut Chart</h2>\n<p>\n    Tooltips are added to a donut or pie chart in a way that's similar to adding them to a line or\n    bar chart. The only difference is the type of the plugin that's used. Instead of the standard\n    <code><a href=\"../classes/ChartTooltipsPlugin.html\" target=\"_blank\">ChartTooltipsPlugin</a></code>,\n    you must use the \n    <code><a href=\"../classes/RadialTooltipsPlugin.html\" target=\"_blank\">RadialTooltipsPlugin</a></code>.\n</p>\n<p>\n    In addition to the above, the following example also configures a custom color accessor, and makes\n    use of the category value in the data for determining which icon to use in the tooltip.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note: </strong> To change the chart in the following example to a pie, all you need to do is\n    instantiate a \n    <code><a href=\"../classes/PieChartAssist.html\" target=\"_blank\">PieChartAssist</a></code> instead of a \n    <code><a href=\"../classes/DonutChartAssist.html\" target=\"_blank\">DonutChartAssist</a></code>.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"donut-chart-with-tooltips\"\n                     exampleTitle=\"Donut Chart\">\n    <nui-donut-chart-with-tooltips-example></nui-donut-chart-with-tooltips-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "W+hr":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/donut-chart/donut-chart-with-tooltips.example.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"donutTooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\" #donutTooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-icon [icon]=\"'status_' + dataPoint.dataSeries.name\"></nui-icon>\n        <span class=\"pl-2\">{{dataPoint.data.data | number}}</span>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "XPc+":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/line-chart/line-chart-with-tooltips.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, ChartTooltipsPlugin, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-line-chart-with-tooltips-example\",\n    templateUrl: \"./line-chart-with-tooltips.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class LineChartWithTooltipsExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public chartAssist = new ChartAssist(this.chart);\n    public tooltipsPlugin = new ChartTooltipsPlugin();\n\n    constructor(private changeDetector: ChangeDetectorRef) {\n    }\n\n    public ngOnInit() {\n        // this is necessary to make the chart work in OnPush change detection mode\n        this.chartAssist.onEvent = () => this.changeDetector.detectChanges();\n\n        // plugin setup\n        this.chart.addPlugin(this.tooltipsPlugin);\n\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // chart assist needs to be used to update the chart's data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "ZI3Q":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/donut-chart/donut-chart-with-popover.example.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n<nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n<ng-template #popoverTemplate let-dataPoints=\"dataPoints\">\n    <div class=\"p-2\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.value.dataSeries.name | titlecase}}: </strong>\n            <code>{{item.value.data.data}}</code>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "ZdrO":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/line-chart/line-chart-with-tooltips.example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.y}}</span>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "bRPr":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/donut-chart/donut-chart-with-tooltips.example.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, ChartPalette, CHART_PALETTE_CS_S, MappedValueProvider, radial, RadialAccessors, radialGrid, RadialRenderer, radialScales,\n    RadialTooltipsPlugin,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-donut-chart-with-tooltips-example\",\n    templateUrl: \"./donut-chart-with-tooltips.example.component.html\",\n})\nexport class DonutChartWithTooltipsExampleComponent implements OnInit {\n    public chartAssist = new ChartAssist(new Chart(radialGrid()), radial,\n                                         new ChartPalette(createStatusColorProvider()));\n\n    // RadialTooltipsPlugin handles specific positioning requirements for tooltips on a donut chart\n    public tooltipsPlugin = new RadialTooltipsPlugin();\n\n    public ngOnInit() {\n        // plugin setup\n        this.chartAssist.chart.addPlugin(this.tooltipsPlugin);\n\n        // accessors setup for colors\n        const accessors = new RadialAccessors(this.chartAssist.palette.standardColors);\n\n        const scales = radialScales();\n        const renderer = new RadialRenderer();\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\nenum Status {\n    Up = \"up\",\n    Warning = \"warning\",\n    Critical = \"critical\",\n    Down = \"down\",\n    Unmanaged = \"unmanaged\",\n    Unknown = \"unknown\",\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { status: Status.Up, value: 42 },\n        { status: Status.Warning, value: 14 },\n        { status: Status.Critical, value: 8 },\n        { status: Status.Down, value: 7 },\n        { status: Status.Unmanaged, value: 5 },\n        { status: Status.Unknown, value: 3 },\n    ].map(d => ({ id: d.status, name: d.status, data: [d.value] }));\n}\n\nfunction createStatusColorProvider() {\n    return new MappedValueProvider<string>({\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n        [Status.Down]: CHART_PALETTE_CS_S[0],\n        [Status.Unmanaged]: CHART_PALETTE_CS_S[5],\n        [Status.Unknown]: CHART_PALETTE_CS_S[3],\n    });\n}\n");

/***/ }),

/***/ "cFqG":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/chart-docs-tooltips.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { BarChartWithTooltipsExampleComponent } from \"./bar-chart/bar-chart-with-tooltips.example.component\";\nimport { ChartDocsTooltipsComponent } from \"./chart-docs-tooltips.component\";\nimport { DonutChartWithTooltipsExampleComponent } from \"./donut-chart/donut-chart-with-tooltips.example.component\";\nimport { LineChartWithTooltipsExampleComponent } from \"./line-chart/line-chart-with-tooltips.example.component\";\nimport { TooltipsVisualTestComponent } from \"./visual-test/tooltips-visual-test.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsTooltipsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"line\",\n        component: LineChartWithTooltipsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"bar\",\n        component: BarChartWithTooltipsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"visual-test\",\n        component: TooltipsVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        BarChartWithTooltipsExampleComponent,\n        ChartDocsTooltipsComponent,\n        LineChartWithTooltipsExampleComponent,\n        DonutChartWithTooltipsExampleComponent,\n        TooltipsVisualTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        FormsModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsTooltipsModule {\n}\n");

/***/ }),

/***/ "dN/v":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/popover-visual-test/popover-visual-test.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-popover-visual-test\",\n    templateUrl: \"./popover-visual-test.component.html\",\n})\nexport class PopoverVisualTestComponent { }\n");

/***/ }),

/***/ "gXOl":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/bar-chart/bar-chart-with-tooltips.example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarRenderer, barScales, BarSeriesHighlightStrategy, BarTooltipsPlugin, Chart, ChartAssist, InteractionLabelPlugin,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-with-tooltips-example\",\n    templateUrl: \"./bar-chart-with-tooltips.example.component.html\",\n})\nexport class BarChartWithTooltipsExampleComponent implements OnInit {\n    public grid = barGrid();\n\n    public chartAssist = new ChartAssist(new Chart(this.grid));\n    public tooltipsPlugin = new BarTooltipsPlugin();\n\n    ngOnInit() {\n        // plugin setup (absence of InteractionLinePlugin setup will result in no interaction line)\n        this.chartAssist.chart.addPlugin(new InteractionLabelPlugin());\n        this.chartAssist.chart.addPlugin(this.tooltipsPlugin);\n\n        // grid configuration\n        this.grid.config().interactionPlugins = false;\n\n        // map each category to a specific color\n        const accessors = barAccessors(undefined, this.chartAssist.palette.standardColors);\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarSeriesHighlightStrategy(\"x\") });\n        const scales = barScales();\n\n        // tell the chart assist to populate the chart\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [20] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc \", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"edge\", name: \"Edge\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n");

/***/ }),

/***/ "l6mW":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/tooltips/visual-test/tooltips-visual-test.component.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scrollable-container {\n    height: 150px;\n    overflow: auto;\n}\n\n.tall-div {\n    height: 150px;\n}\n");

/***/ }),

/***/ "mkmb":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/chart-docs-popovers.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-popovers\",\n    templateUrl: \"./chart-docs-popovers.component.html\",\n})\nexport class ChartDocsPopoversComponent {\n    public popoverTypeScript = `this.popoverPlugin = new ChartPopoverPlugin();\nthis.chart.addPlugin(this.popoverPlugin);\n...`;\n    public popoverHtml = `...\n<nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n<ng-template #popoverTemplate let-dataPoints=\"dataPoints\">\n    <div class=\"p-3\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.key}}: </strong>\n            <code>{{item.value.data | json}}</code>\n        </div>\n    </div>\n</ng-template>\n...`;\n}\n");

/***/ }),

/***/ "oOVS":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/line-chart/line-chart-with-popover.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n\n<nui-chart-popover [plugin]=\"popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n\n<ng-template let-dataPoints=\"dataPoints\"\n             #popoverTemplate>\n    <div class=\"p-3\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.key}}: </strong>\n            <code>{{item.value.data | json}}</code>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "p1Bg":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/bar-chart/bar-chart-with-popover.example.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarRenderer, barScales, BarSeriesHighlightStrategy, Chart, ChartAssist, ChartPopoverPlugin, InteractionLabelPlugin, XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-with-popover-example\",\n    templateUrl: \"./bar-chart-with-popover.example.component.html\",\n})\nexport class BarChartWithPopoverExampleComponent implements OnInit {\n    public chartAssist = new ChartAssist(new Chart(barGrid()));\n    public popoverPlugin = new ChartPopoverPlugin();\n\n    ngOnInit() {\n        // plugin setup (absence of InteractionLinePlugin setup will result in no interaction line)\n        this.chartAssist.chart.addPlugin(new InteractionLabelPlugin());\n        this.chartAssist.chart.addPlugin(this.popoverPlugin);\n\n        // grid configuration\n        const gridConfig = <XYGridConfig>this.chartAssist.chart.getGrid().config();\n        gridConfig.interactionPlugins = false;\n\n        const accessors = barAccessors();\n        const renderer = new BarRenderer({ highlightStrategy: new BarSeriesHighlightStrategy(\"x\") });\n        const scales = barScales();\n\n        // tell the chart assist to populate the chart\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [20] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc \", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"edge\", name: \"Edge\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n");

/***/ }),

/***/ "sGkY":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/popover-visual-test/popover-visual-test.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<charts-test-harness>\n    <div id=\"visual-test-bottom-position-popover\">\n        <nui-line-chart-with-popover-example></nui-line-chart-with-popover-example>\n    </div>\n\n    <!-- Tall element for testing relative positioning of popovers -->\n    <div style=\"height: 150px\"></div>\n\n    <!-- Relative parent for testing relative positioning of popovers -->\n    <div style=\"position: relative;\">\n        <div id=\"visual-test-bar-chart-popover\">\n            <nui-bar-chart-with-popover-example></nui-bar-chart-with-popover-example>\n        </div>\n        <div id=\"visual-test-donut-chart-popover\">\n            <nui-donut-chart-with-popover-example></nui-donut-chart-with-popover-example>\n        </div>\n        <div id=\"visual-test-line-chart-popover\">\n            <nui-line-chart-with-popover-example></nui-line-chart-with-popover-example>\n        </div>\n    </div>\n</charts-test-harness>\n");

/***/ }),

/***/ "t80E":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/chart-docs-popovers.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Popovers</h1>\n\n<h2>Line Chart</h2>\n<p>\n    To set up a popover for a line chart, do the following:\n</p>\n<ol>\n    <li>\n        Create an instance if the\n        <code><a href=\"../classes/ChartPopoverPlugin.html\" target=\"_blank\">ChartPopoverPlugin</a></code>\n        <br>\n        Plugin Configuration - You can optionally pass an argument of type\n        <code><a href=\"../interfaces/IPopoverPluginConfig.html\" target=\"_blank\">IPopoverPluginConfig</a></code>\n        to the plugin's constructor. Each of the configuration properties is optional:\n        <ul>\n            <li>\n                <code><a href=\"../classes/ChartPopoverPlugin.html#eventStreamId\" target=\"_blank\">eventStreamId</a></code> -\n                Specify either <code>INTERACTION_DATA_POINTS_EVENT</code> or\n                <code>INTERACTION_DATA_POINT_EVENT</code> to configure which event the plugin responds to.\n                The default value for this property is <code>INTERACTION_DATA_POINTS_EVENT</code> which\n                is supported by line, pie, donut, area, and bar charts and will position the popover in\n                relation to the center point between the leftmost and rightmost data points in the\n                payload. <code>INTERACTION_DATA_POINT_EVENT</code> is supported by line and area charts\n                and will position the popover in relation to a single data point's horizontal position on\n                the chart. For more information on chart events, take a look at\n                <a href=\"../additional-documentation/advanced-usage/events.html\" target=\"_parent\">this</a>\n                page.\n            </li>\n            <li>\n                <code><a href=\"../classes/ChartPopoverPlugin.html#interactionType\" target=\"_blank\">interactionType</a></code> -\n                Specify the\n                <code><a href=\"../miscellaneous/enumerations.html#InteractionType\" target=\"_blank\">InteractionType</a></code>\n                that will trigger the showing and hiding of popovers. The default value for this property is\n                <code>InteractionType.MouseMove</code>.\n            </li>\n        </ul>\n    </li>\n    <li>Register the plugin with the chart using the chart's\n        <code><a href=\"../classes/Chart.html#addPlugin\" target=\"_blank\">addPlugin</a></code> method\n        <pre>{{popoverTypeScript}}</pre>\n    </li>\n    <li>\n        Create a <code><a href=\"../components/ChartPopoverComponent.html\" target=\"_blank\">nui-chart-popover</a></code>\n        component on the template\n    </li>\n    <li>Pass the plugin to the component's plugin input</li>\n    <li>Create an ng-template and pass it to the component's template input\n        <pre>{{popoverHtml}}</pre>\n    </li>\n</ol>\n<nui-example-wrapper filenamePrefix=\"line-chart-with-popover\"\n                     exampleTitle=\"Line Chart\">\n    <nui-line-chart-with-popover-example></nui-line-chart-with-popover-example>\n</nui-example-wrapper>\n\n<h2>Bar Chart</h2>\n<p>\n    Popovers can be added to a bar chart in the same way as for line charts. Please see above. It's\n    recommended that the interaction line be turned off by setting the interactionPlugins property on the\n    grid configuration to false and then enabling the interaction label by adding the\n    InteractionLabelPlugin to the chart manually.\n</p>\n<p>\n    It's also recommended that you set the interactive property on the grid configuration to true. This\n    will result in the popover being displayed when hovering in the space above each bar as opposed to\n    only displaying the popover when hovering over the bar itself.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart-with-popover\"\n                     exampleTitle=\"Bar Chart\">\n    <nui-bar-chart-with-popover-example></nui-bar-chart-with-popover-example>\n</nui-example-wrapper>\n\n<h2>Donut Chart</h2>\n<p>\n    Popovers can be added to a donut chart in the same way as for line charts,\n    but using <code><a href=\"../classes/ChartPopoverPlugin.html\" target=\"_blank\">RadialPopoverPlugin</a></code>.\n    The following example also demonstrates how to create a custom color accessor for status.\n</p>\n<nui-example-wrapper filenamePrefix=\"donut-chart-with-popover\"\n                     exampleTitle=\"Donut Chart\">\n    <nui-donut-chart-with-popover-example></nui-donut-chart-with-popover-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "weFs":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/plugins/popovers/line-chart/line-chart-with-popover.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, ChartPopoverPlugin, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-line-chart-with-popover-example\",\n    templateUrl: \"./line-chart-with-popover.example.component.html\",\n})\nexport class LineChartWithPopoverExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n    public popoverPlugin = new ChartPopoverPlugin();\n\n    public ngOnInit() {\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n        const renderer = new LineRenderer();\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(s => ({\n            ...s,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        // plugin setup\n        this.chart.addPlugin(this.popoverPlugin);\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n");

/***/ })

}]);
//# sourceMappingURL=components-demo-plugins-chart-docs-plugins-module-es2015.js.map