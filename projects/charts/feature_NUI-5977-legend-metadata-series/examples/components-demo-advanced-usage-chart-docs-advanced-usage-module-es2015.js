(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-advanced-usage-chart-docs-advanced-usage-module"],{

/***/ "+9tC":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-interactive/legend-interactive.example.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, ChartAssist, LineAccessors, LineRenderer, XYGrid } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-interactive-example\",\n    templateUrl: \"./legend-interactive.example.component.html\",\n})\nexport class LegendInteractiveExampleComponent implements OnInit {\n\n    // Set up the chart assist to keep track of the series selection and emphasis states\n    public chartAssist: ChartAssist = new ChartAssist(new Chart(new XYGrid()));\n\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public ngOnInit() {\n        const accessors = new LineAccessors();\n        const renderer = new LineRenderer();\n        this.chartAssist.update([\n            {\n                id: this.firstSeriesId,\n                data: [],\n                accessors,\n                renderer,\n                scales: {},\n            },\n            {\n                id: this.secondSeriesId,\n                data: [],\n                accessors,\n                renderer,\n                scales: {},\n            },\n        ]);\n    }\n}\n");

/***/ }),

/***/ "/6ss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/margins/base-grid-margins.example.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid, XYGridConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-base-grid-margins-example\",\n    templateUrl: \"./base-grid-margins.example.component.html\",\n})\nexport class BaseGridMarginsExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.dimension.margin = {\n            top: 30,\n            bottom: 30,\n            left: 100,\n            right: 100,\n        };\n\n        this.chart = new Chart(new XYGrid(gridConfig));\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n            scales: {\n                x: new LinearScale(),\n                y: new LinearScale(),\n            },\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: 1, y: 10 },\n            { x: 2, y: 30 },\n            { x: 3, y: 5 },\n            { x: 4, y: 20 },\n            { x: 5, y: 15 },\n        ],\n    }];\n}\n");

/***/ }),

/***/ "/O2m":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-active/legend-active.example.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend [active]=\"true\">\n    <nui-legend-series descriptionPrimary=\"Basic Tile Primary Description\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Basic Tile Secondary Description\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile value=\"21.9\"\n                              unitLabel=\"Mbps\"\n                              [backgroundColor]=\"colors.get(firstSeriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Rich Tile Primary Description\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Rich Tile Secondary Description\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile value=\"11.5\"\n                              unitLabel=\"Kbps\"\n                              i18n-unitLabel\n                              [backgroundColor]=\"colors.get(secondSeriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "0BQA":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/padding/base-grid-padding.example.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid, XYGridConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-base-grid-padding-example\",\n    templateUrl: \"./base-grid-padding.example.component.html\",\n})\nexport class BaseGridPaddingExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.dimension.padding = {\n            top: 25,\n            right: 50,\n            bottom: 25,\n            left: 50,\n        };\n\n        this.chart = new Chart(new XYGrid(gridConfig));\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n            scales: {\n                x: new LinearScale(),\n                y: new LinearScale(),\n            },\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: 1, y: 10 },\n            { x: 2, y: 30 },\n            { x: 3, y: 5 },\n            { x: 4, y: 20 },\n            { x: 5, y: 15 },\n        ],\n    }];\n}\n");

/***/ }),

/***/ "0C3L":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-metadata/legend-metadata-example.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    areaGrid,\n    AreaRenderer,\n    Chart,\n    ChartAssist,\n    IAccessors,\n    IAreaAccessors,\n    IChartSeries,\n    IDataSeries,\n    IXYScales,\n    LinearScale,\n    stackedArea,\n    stackedAreaAccessors,\n    TimeScale,\n    XYAccessors,\n    XYRenderer,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-stack-example\",\n    templateUrl: \"./legend-metadata-example.component.html\",\n})\nexport class LegendMetadataExampleComponent implements OnInit {\n    public chart: Chart;\n    public chartAssist: ChartAssist;\n    public avgSeries: Partial<IChartSeries<XYAccessors>>\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.\n        this.chart = new Chart(areaGrid());\n        // ChartAssist will use the preprocessor to stack the series' numeric values on the same progression domain\n        this.chartAssist = new ChartAssist(this.chart, stackedArea);\n\n        // Stacked Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = stackedAreaAccessors();\n        // 'y1' defines access to the numeric values we want to visualize.\n        // The items in the data array of this example have a property named 'value',so we'll use that.\n        accessors.data.y1 = (d) => d.value;\n\n        // The area renderer will make the chart look like a area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of a area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n        const dataSeries = getData();\n        const averageData = calculateAverageSeries(dataSeries);\n        // We are using the base XYRenderer so the metadata does not get displayed on the chart.\n        // Set `ignoreForDomainCalculation` to true to prevent the metadata from affecting the domain.\n        const metaDataRenderer = new XYRenderer({ ignoreForDomainCalculation: true });\n        // Here we create an accessor for our average metadata\n        const avgAccessors = new XYAccessors();\n        // This is so the legend knows the value for the y\n        avgAccessors.data.y = (d) => d.value;\n\n        this.avgSeries = {\n            ...averageData,\n            accessors: avgAccessors,\n            renderer: metaDataRenderer,\n            scales: scales,\n            // showInLegend is false because we manually add our own series\n            showInLegend: false,\n            // preprocess is false to let the area processor know it is already formatted properly\n            preprocess: false,\n        }\n        // Here we assemble the complete chart series.\n        let seriesSet: Partial<IChartSeries<IAccessors>>[] = dataSeries.map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n        // Combining both sets in an array of series\n        seriesSet = [...seriesSet, this.avgSeries];\n\n        // Finally, pass the series set to the chart's update method\n        this.chartAssist.update(seriesSet as IChartSeries<IAreaAccessors>[]);\n    }\n}\n\nfunction calculateAverageSeries(seriesSet: Partial<IDataSeries<XYAccessors>>[]): Partial<IDataSeries<XYAccessors>> {\n    let arrAverage = [];\n    const dataLength =  seriesSet[0].data?.length ?? 0;\n    const numOfSeries = seriesSet.length\n    const averageSeries = {\n        id: \"average\",\n        name: \"Average Speed\",\n        data: [],\n    }\n    if(!seriesSet.length) {\n        return averageSeries;\n    }\n    for (let n = 0; n < dataLength; n++) {\n        let avg = 0;\n        for (let i = 0; i < seriesSet.length; i++) {\n            const series = seriesSet[i];\n            avg += series?.data?.[n].value ?? 0;\n        }\n        avg = avg/numOfSeries\n        arrAverage.push({ x: seriesSet[0].data?.[n].x, value: avg });\n    }\n    return {\n        ...averageSeries,\n        data: arrAverage,\n    };\n}\n\n/* Chart data */\nfunction getData(): Partial<IDataSeries<XYAccessors>>[] {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 6 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 33 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 15 },\n                { x: moment(\"2016-12-25T13:15:29.909Z\", format), value: 20 },\n                { x: moment(\"2016-12-25T13:40:29.909Z\", format), value: 30 },\n                { x: moment(\"2016-12-25T13:55:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T14:20:29.909Z\", format), value: 6 },\n                { x: moment(\"2016-12-25T14:40:29.909Z\", format), value: 35 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 23 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 25 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 38 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 25 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 43 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 28 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 65 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 30 },\n                { x: moment(\"2016-12-25T13:15:29.909Z\", format), value: 40 },\n                { x: moment(\"2016-12-25T13:40:29.909Z\", format), value: 60 },\n                { x: moment(\"2016-12-25T13:55:29.909Z\", format), value: 23 },\n                { x: moment(\"2016-12-25T14:20:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 45 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 50 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 75 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 50 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 85 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 55 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "0EkY":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Markers</h1>\n<p>\n    The use of data markers is often the primary visual means of indicating which series a data point belongs to,\n    especially in the case of line charts. The marker used for each series is determined by the series marker\n    accessor. For the line accessors, if a marker accessor isn't specified, a default\n    <a href=\"../classes/SequentialChartMarkerProvider.html\" target=\"_blank\">SequentialChartMarkerProvider</a>\n    instantiated automatically distributes markers sequentially to each series and tracks the marker\n    distribution by seriesId. The job of the SequentialChartMarkerProvider is to ensure markers are used in the\n    order provided and that a marker doesn't get used more than once unless the number of series exceeds the number\n    of markers in the provided set.\n</p>\n\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Proceed with caution!</strong>\n    Examples below are provided to describe the possibilities of charting framework and give a better understanding\n    of its principles. This is not a recommendation for regular usage. If you find yourself doing something like\n    this, please consult with UX to double check that your mockups follow the Nova Design Language.\n</nui-message>\n\n<h2>Custom Marker Accessor</h2>\n<p>\n    If you want to manually specify which markers are accessed for a chart's series, you can optionally provide your\n    own marker accessor. In the following snippet, a custom accessor plucks a marker from\n    the UX-approved chart marker set and uses it for every series that the renderer instance gets assigned to. The\n    nova-provided set of chart markers can be found\n    <a href=\"../miscellaneous/variables.html#regularShapes\" target=\"_blank\">here</a>.\n</p>\n<pre>{{customAccessorSnippet}}</pre>\n<p>pre\n    As you can see in the snippet, the seriesId automatically gets passed as an argument to the marker accessor, so\n    you can optionally add logic that uses the seriesId to determine which marker gets returned. To see a custom\n    marker accessor in action, take a look at the code in the source expander of the following example.\n</p>\n<nui-example-wrapper filenamePrefix=\"markers-custom-accessor\"\n                     exampleTitle=\"Custom Accessor\">\n    <nui-markers-custom-accessor-example></nui-markers-custom-accessor-example>\n</nui-example-wrapper>\n\n<h2>Custom Sequential Marker Provider</h2>\n<p>\n    If the set of markers provided by the line renderer's default SequentialChartMarkerProvider doesn't meet your\n    specifications or you are using a renderer that doesn't have a default SequentialChartMarkerProvider, you can\n    instantiate your own marker provider with a custom set of markers to be distributed sequentially and\n    tracked by seriesId as in the following snippet:\n</p>\n<pre>{{customProviderSnippet}}</pre>\n<nui-example-wrapper filenamePrefix=\"markers-custom-provider\"\n                     exampleTitle=\"Custom Sequential Marker Provider\">\n    <nui-markers-custom-provider-example></nui-markers-custom-provider-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "1QZF":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-metadata/legend-metadata-example.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"Mbps\" i18n-seriesUnitLabel\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <!-- This is the metadata series -->\n            <nui-legend-series [interactive]=\"false\"\n                               [descriptionPrimary]=\"avgSeries['name']\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(avgSeries, 'y')\"\n                                      backgroundColor=\"var(--nui-color-bg-mid_dark)\"\n                                      color=\"var(--nui-color-text-light)\">\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n            <!-- These are the series displayed on the chart -->\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <!-- Specify 'undefined' for the formatter key since we're not applying any special formatting to the data values shown in the legend -->\n                <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', undefined, 'y1')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n");

/***/ }),

/***/ "2kwe":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-accessors-data\",\n    templateUrl: \"./chart-docs-accessors-data.component.html\",\n})\nexport class ChartDocsAccessorsDataComponent {\n    public customAccessorCode = `const customAccessors = new LineAccessors();\ncustomAccessors.data = {\n    x: (datum: any) => datum.z,\n    y: (datum: any) => datum.y * 2,\n};\n...`;\n}\n");

/***/ }),

/***/ "3cAq":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-accessors-colors\",\n    templateUrl: \"./chart-docs-accessors-colors.component.html\",\n})\nexport class ChartDocsAccessorsColorsComponent {\n    public customAccessorSnippet = `const accessors: ILineAccessors = new LineAccessors();\naccessors.series.color = () => CHART_PALETTE_CS2[6];\n...`;\n    public customProviderSnippet = `const accessors = new LineAccessors();\nconst customPalette = [CHART_PALETTE_CS2[2], CHART_PALETTE_CS2[4], CHART_PALETTE_CS2[0]];\naccessors.series.color = new SequentialColorProvider(customPalette).get;\n...`;\n}\n");

/***/ }),

/***/ "4/br":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/chart-docs-legend-example.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { LegendActiveExampleComponent } from \"./legend-active/legend-active.example.component\";\nimport { LegendBasicExampleComponent } from \"./legend-basic/legend-basic.example.component\";\nimport { LegendCompactExampleComponent } from \"./legend-compact/legend-compact.example.component\";\nimport { LegendDescriptionProjectionExampleComponent } from \"./legend-description-content-projection/legend-description-projection.example.component\";\nimport { LegendDocsExampleComponent } from \"./legend-docs/legend-docs.example.component\";\nimport { LegendHorizontalExampleComponent } from \"./legend-horizontal/legend-horizontal.example.component\";\nimport { LegendInteractiveExampleComponent } from \"./legend-interactive/legend-interactive.example.component\";\nimport { LegendRichTileContentProjectionExampleComponent } from \"./legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component\";\nimport { LegendRichTileExampleComponent } from \"./legend-rich-tile/legend-rich-tile.example.component\";\nimport { LegendTestExampleComponent } from \"./legend-test/legend-test.component\";\nimport { LegendTextColorExampleComponent } from \"./legend-text-color/legend-text-color.example.component\";\nimport { LegendVisualTestComponent } from \"./legend-visual-test/legend-visual-test.component\";\nimport { LegendMetadataExampleComponent } from \"./legend-metadata/legend-metadata-example.component\";\n\nconst legendRoutes: Routes = [\n    {\n        path: \"\",\n        component: LegendDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: LegendBasicExampleComponent,\n    },\n    {\n        path: \"interactive\",\n        component: LegendInteractiveExampleComponent,\n    },\n    {\n        path: \"test\",\n        component: LegendTestExampleComponent,\n    },\n    {\n        path: \"rich-tile-content-projection\",\n        component: LegendRichTileContentProjectionExampleComponent,\n    },\n    {\n        path: \"metadata\",\n        component: LegendMetadataExampleComponent,\n    },\n    {\n        path: \"visual-test\",\n        component: LegendVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        LegendActiveExampleComponent,\n        LegendBasicExampleComponent,\n        LegendCompactExampleComponent,\n        LegendDocsExampleComponent,\n        LegendHorizontalExampleComponent,\n        LegendInteractiveExampleComponent,\n        LegendRichTileExampleComponent,\n        LegendTestExampleComponent,\n        LegendTextColorExampleComponent,\n        LegendVisualTestComponent,\n        LegendDescriptionProjectionExampleComponent,\n        LegendRichTileContentProjectionExampleComponent,\n        LegendMetadataExampleComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiChartsModule,\n        RouterModule.forChild(legendRoutes),\n        NuiDocsModule,\n        NuiIconModule,\n        NuiButtonModule,\n        NuiMessageModule,\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsLegendExampleModule {\n}\n");

/***/ }),

/***/ "5A4g":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/data/accessors/accessors.example.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid } from \"@nova-ui/charts\";\n\ninterface IMyDataPoint {\n    x: number;\n    y: number;\n    z: number;\n}\n\n@Component({\n    selector: \"nui-accessors-example\",\n    templateUrl: \"./accessors.example.component.html\",\n})\nexport class RendererAccessorsExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public seriesSet: IChartSeries<ILineAccessors>[];\n\n    public ngOnInit() {\n        const renderer = new LineRenderer();\n        const scales = {\n            x: new LinearScale(),\n            y: new LinearScale(),\n        };\n\n        const data: IMyDataPoint[] = [\n            { x: 1, y: 10, z: 0 },\n            { x: 2, y: 30, z: 1 },\n            { x: 3, y: 5, z: 2 },\n            { x: 4, y: 20, z: 3 },\n            { x: 5, y: 15, z: 4 },\n        ];\n\n        const customAccessors = new LineAccessors();\n        // Customizing data accessors\n        customAccessors.data = {\n            x: (datum: IMyDataPoint) => datum.z,\n            y: (datum: IMyDataPoint) => datum.y * 2,\n        };\n\n        this.seriesSet = [\n            {\n                id: \"series-1\",\n                name: \"Series 1\",\n                data,\n                scales,\n                renderer,\n                accessors: new LineAccessors(), // using default LineAccessors\n            },\n            {\n                id: \"series-2\",\n                name: \"Series 2\",\n                data,\n                scales,\n                renderer,\n                accessors: customAccessors, // using customized LineAccessors\n            },\n        ];\n\n        this.chart.update(this.seriesSet);\n    }\n}\n");

/***/ }),

/***/ "5wfK":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/chart-docs-events.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Chart Events</h1>\n<p>\n    A chart's <code><a href=\"../classes/EventBus.html\" target=\"_blank\">EventBus</a></code> events allow\n    your code to potentially keep up to date with events happening with your chart. These can include\n    user interactions, such as mouse movements, clicks, mouseenter, mouseleave, etc., or things that are\n    happening internally with your chart such as refresh events, destroy events, setting of domains, etc.\n</p>\n<p>\n    The payload of each event is of type\n    <code><a href=\"../interfaces/IChartEvent.html\" target=\"_blank\">IChartEvent</a></code> and the actual\n    data of the payload is contained in its <code>data</code> property.\n</p>\n<h2>Supported Events</h2>\n<h3>Interaction Events</h3>\n<h4><a href=\"../miscellaneous/variables.html#MOUSE_ACTIVE_EVENT\" target=\"_blank\">MOUSE_ACTIVE_EVENT</a></h4>\n<p>\n    This event is triggered each time the mouse enters or leaves the\n    chart. The data is a boolean value: true for mouseenter and false for mouseleave.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#INTERACTION_VALUES_EVENT\" target=\"_blank\">INTERACTION_VALUES_EVENT</a></h4>\n<p>\n    Triggered when the chart is clicked and as the mouse\n    moves across the chart, the data of this event's payload is of type\n    <code><a href=\"../interfaces/IInteractionValuesPayload.html\" target=\"_blank\">IInteractionValuesPayload</a></code>\n    which consists of the raw scale values corresponding to the mouse's position over the chart.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#HIGHLIGHT_DATA_POINT_EVENT\" target=\"_blank\">HIGHLIGHT_DATA_POINT_EVENT</a></h4>\n<p>\n    This event is triggered as the mouse moves across the\n    chart, and the data of its payload is of type\n    <code><a href=\"../interfaces/IDataPoint.html\" target=\"_blank\">IDataPoint</a></code>\n    which consists of information about the data point closest to the mouse's position within a single data series.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#SELECT_DATA_POINT_EVENT\" target=\"_blank\">SELECT_DATA_POINT_EVENT</a></h4>\n<p>\n    Triggered when a specific data point is clicked on the\n    chart, the data of the payload is of type\n    <code><a href=\"../interfaces/IDataPoint.html\" target=\"_blank\">IDataPoint</a></code>\n    and consists of information about the clicked\n    data point. Currently, this event is only supported for bar charts.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#HIGHLIGHT_SERIES_EVENT\" target=\"_blank\">HIGHLIGHT_SERIES_EVENT</a></h4>\n<p>\n    Triggered when a series is hovered, the payload's <code>data</code> property is\n    of type\n    <code><a href=\"../interfaces/IDataPoint.html\" target=\"_blank\">IDataPoint</a></code>\n    which contains information specifically about the target series. This event\n    is currently supported for line, bar, pie, and donut charts. For line charts, this event can be\n    enabled by setting the\n    <code><a href=\"../interfaces/ILineRendererConfig.html\" target=\"_blank\">ILineRendererConfig</a></code>\n    &nbsp;<code>interactionStrategy</code> property to an instance of\n    <code><a href=\"../classes/LineSelectSeriesInteractionStrategy.html\" target=\"_blank\">LineSelectSeriesInteractionStrategy</a></code>.\n    For bar charts, this event can be enabled by setting the\n    <code><a href=\"../interfaces/IBarRendererConfig.html\" target=\"_blank\">IBarRendererConfig</a></code>\n    &nbsp;<code>highlightStrategy</code> property to an instance of\n    <code><a href=\"../classes/BarSeriesHighlightStrategy.html\" target=\"_blank\">BarSeriesHighlightStrategy</a></code>.\n    Pass the configuration object to the renderer's constructor.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#INTERACTION_SERIES_EVENT\" target=\"_blank\">INTERACTION_SERIES_EVENT</a></h4>\n<p>\n    Triggered when a series is clicked, it contains information specifically about the target series. The\n    <code>data</code> property of its payload consists of two sub-properties:\n    <code>interactionType</code> and <code>payload</code>. The <code>interactionType</code> property is\n    of type\n    <code><a href=\"../miscellaneous/enumerations.html#InteractionType\" target=\"_blank\">InteractionType</a></code>\n    and indicates the type of interaction that occurred, e.g. <code>InteractionType.Click</code>, and the\n    <code>payload</code> property is of type\n    <code><a href=\"../interfaces/IDataPoint.html\" target=\"_blank\">IDataPoint</a></code>.\n</p>\n<p>\n    This event is currently supported only for line charts. Enable\n    this event on the chart by setting the\n    <code><a href=\"../interfaces/ILineRendererConfig.html\" target=\"_blank\">ILineRendererConfig</a></code>\n    &nbsp;<code>interactionStrategy</code> property to an instance of\n    <code><a href=\"../classes/LineSelectSeriesInteractionStrategy.html\" target=\"_blank\">LineSelectSeriesInteractionStrategy</a></code>.\n    Pass the configuration object to the renderer's constructor.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#INTERACTION_DATA_POINTS_EVENT\" target=\"_blank\">INTERACTION_DATA_POINTS_EVENT</a></h4>\n<p>\n    Triggered on click or mousemove over the chart, the <code>data</code> property for this event is of type\n    <code><a href=\"../interfaces/IInteractionDataPointsEvent.html\" target=\"_blank\">IInteractionDataPointsEvent</a></code>\n    and consists of information about the data points closest to the mouse's position over the chart\n    across all the data series.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#INTERACTION_DATA_POINT_EVENT\" target=\"_blank\">INTERACTION_DATA_POINT_EVENT</a></h4>\n<p>\n    Triggered on click or hover over a line or area chart's individual data point markers, the\n    <code>data</code> property of this event is of type\n    <code><a href=\"../interfaces/IInteractionDataPointEvent.html\" target=\"_blank\">IInteractionDataPointEvent</a></code>\n    and consists of information about the data point being hovered or clicked.\n</p>\n<p>\n    This event is currently supported for line and area charts. Enable the event by\n    setting the <code>markerInteraction</code> property on the\n    <code><a href=\"../interfaces/ILineRendererConfig.html\" target=\"_blank\">ILineRendererConfig</a></code> or\n    <code><a href=\"../interfaces/IAreaRendererConfig.html\" target=\"_blank\">IAreaRendererConfig</a></code>\n    to an object of type\n    <code><a href=\"../interfaces/IMarkerInteractionConfig.html\" target=\"_blank\">IMarkerInteractionConfig</a></code>\n    with a value of <code>true</code> for the <code>enabled</code> property. Pass this configuration\n    object to the renderer's constructor.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#SERIES_STATE_CHANGE_EVENT\" target=\"_blank\">SERIES_STATE_CHANGE_EVENT</a></h4>\n<p>\n    Triggered on series render state changes such as visibility or emphasis, the\n    <code>data</code> property of this event is of type\n    <code><a href=\"../interfaces/IRenderStateData.html\" target=\"_blank\">IRenderStateData[]</a></code> and consists of information about the render state of each series. The event will be emitted if the user hovers over or deselects a series on the legend for example.</p>\n<h3>Internal Events</h3>\n<h4><a href=\"../miscellaneous/variables.html#DESTROY_EVENT\" target=\"_blank\">DESTROY_EVENT</a></h4>\n<p>\n    Triggered when the chart instance is destroyed. This event's payload has a null <code>data</code>\n    property.\n</p>\n<h4><a href=\"../miscellaneous/variables.html#SET_DOMAIN_EVENT\" target=\"_blank\">SET_DOMAIN_EVENT</a></h4>\n<p>\n    This event can be triggered by an entity that wants to request a domain\n    change for a set of scales. For example, if a zoom plugin needs to change the domain of the x\n    scale on a line chart, it can emit one of these with a payload whose <code>data</code> property\n    consists of a mapping of scale id to domain\n    (<code><a href=\"../interfaces/ISetDomainEventPayload.html\" target=\"_blank\">ISetDomainEventPayload</a></code>).\n</p>\n<h4><a href=\"../miscellaneous/variables.html#REFRESH_EVENT\" target=\"_blank\">REFRESH_EVENT</a></h4>\n<p>\n    Trigger this event to refresh the chart. The payload of this event is null.\n</p>\n\n<h4><a href=\"../miscellaneous/variables.html#CHART_VIEW_STATUS_EVENT\" target=\"_blank\">CHART_VIEW_STATUS_EVENT</a></h4>\n<p>\n    Triggered when the chart becomes visible or hidden within its nearest scrollable parent.\n    The <code>data</code> property of this event is of type\n    <code><a href=\"../interfaces/IChartViewStatusEventPayload.html\" target=\"_blank\">IChartViewStatusEventPayload</a></code>.\n</p>\n\n<h4><a href=\"../miscellaneous/variables.html#AXES_STYLE_CHANGE_EVENT\" target=\"_blank\">AXES_STYLE_CHANGE_EVENT</a></h4>\n<p>\n    Triggered when the right or left axis of an XY grid with two Y axes changes its opacity due to a change in series emphasis.\n    The <code>data</code> property of this event is of type <code></code>\n    <code><a href=\"../interfaces/IAxesStyleChangeEventPayload.html\" target=\"_blank\">IAxesStyleChangeEventPayload</a></code>.\n</p>\n\n\n<h2>Basic Event Processing</h2>\n\n<p>\n    This example demonstrates the process of subscribing to an event of your choice from the chart's\n    event bus. Keep in mind that when you're using an OnPush change detection strategy in your component,\n    you need to manually check for changes whenever you expect your UI to update.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"events-basic-example\" exampleTitle=\"Basic Event Processing\">\n    <nui-chart-events-basic></nui-chart-events-basic>\n</nui-example-wrapper>\n\n<h2>Interaction Event Sampler</h2>\n<p>\n    The following event sampler tool allows you to interact with the chart to see the resulting event\n    payload.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=false>\n    <strong>Note:</strong> INTERACTION_SERIES_EVENT is currently only supported for the line chart, and\n    INTERACTION_DATA_POINT_EVENT is currently only supported for line and area charts. To see these\n    events in action in the sampler, select the line chart and either the INTERACTION_SERIES_EVENT or the\n    INTERACTION_DATA_POINT_EVENT.\n</nui-message>\n<nui-message type=\"warning\" [allowDismiss]=false>\n    <strong>Note:</strong> HIGHLIGHT_SERIES_EVENT is currently supported for pie, donut, line, bar chart\n    types. The following example only enables the event for line and grouped bar charts. To see it in\n    action in the sampler, select the line or grouped bar chart and the HIGHLIGHT_SERIES_EVENT.\n</nui-message>\n<nui-chart-event-sampler></nui-chart-event-sampler>\n");

/***/ }),

/***/ "6SvY":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-horizontal/legend-horizontal.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-horizontal-example\",\n    templateUrl: \"./legend-horizontal.example.component.html\",\n})\nexport class LegendHorizontalExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "6jeb":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/events-basic/events-basic-example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n\n<pre><code>{{payload}}</code></pre>\n");

/***/ }),

/***/ "6nh+":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/padding/base-grid-padding.example.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "7fPP":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/custom-provider/markers-custom-provider.example.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, CHART_MARKERS, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, SequentialChartMarkerProvider, XYGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-markers-custom-provider-example\",\n    templateUrl: \"./markers-custom-provider.example.component.html\",\n})\nexport class RendererMarkersCustomProviderExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public ngOnInit() {\n        const scales = {\n            x: new LinearScale(),\n            y: new LinearScale(),\n        };\n\n        const renderer = new LineRenderer();\n\n        const accessors = new LineAccessors();\n        // Defining custom marker set\n        const customMarkerSet = [CHART_MARKERS[6], CHART_MARKERS[8], CHART_MARKERS[9]];\n        // Setting marker accessor to use new SequentialChartMarkerProvider with custom markers\n        accessors.series.marker = new SequentialChartMarkerProvider(customMarkerSet).get;\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: 1, y: 30 },\n                { x: 2, y: 50 },\n                { x: 3, y: 25 },\n                { x: 4, y: 40 },\n                { x: 5, y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: 1, y: 20 },\n                { x: 2, y: 40 },\n                { x: 3, y: 15 },\n                { x: 4, y: 30 },\n                { x: 5, y: 25 },\n            ],\n        },\n        {\n            id: \"series-3\",\n            name: \"Series 3\",\n            data: [\n                { x: 1, y: 10 },\n                { x: 2, y: 30 },\n                { x: 3, y: 5 },\n                { x: 4, y: 20 },\n                { x: 5, y: 15 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "7x2n":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-interactive/legend-interactive.example.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend [interactive]=\"true\" (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n    <nui-legend-series descriptionPrimary=\"Basic Tile Primary Description\"\n                       i18n-descriptionPrimary\n                       (mouseenter)=\"chartAssist.emphasizeSeries(firstSeriesId)\"\n                       [seriesRenderState]=\"chartAssist.renderStatesIndex[firstSeriesId]?.state\"\n                       [isSelected]=\"!chartAssist.isSeriesHidden(firstSeriesId)\"\n                       (isSelectedChange)=\"chartAssist.toggleSeries(firstSeriesId, $event)\">\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"chartAssist.markers.get(firstSeriesId)\"\n                              [color]=\"chartAssist.palette.standardColors.get(firstSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Rich Tile Primary Description\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Rich Tile Secondary Description\"\n                       i18n-descriptionSecondary\n                       (mouseenter)=\"chartAssist.emphasizeSeries(secondSeriesId)\"\n                       [seriesRenderState]=\"chartAssist.renderStatesIndex[secondSeriesId]?.state\"\n                       [isSelected]=\"!chartAssist.isSeriesHidden(secondSeriesId)\"\n                       (isSelectedChange)=\"chartAssist.toggleSeries(secondSeriesId, $event)\">\n        <nui-rich-legend-tile value=\"23.2\"\n                              unitLabel=\"Kbps\"\n                              i18n-unitLabel\n                              [backgroundColor]=\"chartAssist.palette.standardColors.get(secondSeriesId)\">\n            <nui-chart-marker [marker]=\"chartAssist.markers.get(secondSeriesId)\"\n                              [color]=\"chartAssist.palette.standardColors.get(secondSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "874e":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/custom-accessor/markers-custom-accessor.example.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, CHART_MARKERS, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-markers-custom-accessor-example\",\n    templateUrl: \"./markers-custom-accessor.example.component.html\",\n})\nexport class RendererMarkersCustomAccessorExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public ngOnInit() {\n        const scales = {\n            x: new LinearScale(),\n            y: new LinearScale(),\n        };\n\n        const renderer = new LineRenderer();\n        const accessors = new LineAccessors();\n        // Custom marker accessor\n        accessors.series.marker = () => CHART_MARKERS[2];\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: 1, y: 30 },\n                { x: 2, y: 50 },\n                { x: 3, y: 25 },\n                { x: 4, y: 40 },\n                { x: 5, y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: 1, y: 20 },\n                { x: 2, y: 40 },\n                { x: 3, y: 15 },\n                { x: 4, y: 30 },\n                { x: 5, y: 25 },\n            ],\n        },\n        {\n            id: \"series-3\",\n            name: \"Series 3\",\n            data: [\n                { x: 1, y: 10 },\n                { x: 2, y: 30 },\n                { x: 3, y: 5 },\n                { x: 4, y: 20 },\n                { x: 5, y: 15 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "Aa05":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Input Structure</h1>\n\n<h2>Data</h2>\n<p>\n    <a href=\"../additional-documentation/advanced-usage/input-structure/data.html\" target=\"_parent\">Data Accessors</a>\n    and their associated accessor keys are used for accessing domain data from a chart's input data set(s).\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    There is no interface that will enforce the structure of your data, but there are defaults you can follow\n    to require as little extra configuration as possible. See <a href=\"../additional-documentation/advanced-usage/input-structure/data.html\"\n                                                                 target=\"_parent\">Data Accessors</a> page for more details.\n</nui-message>\n\n<h2>Colors</h2>\n<p>\n    <a href=\"../additional-documentation/advanced-usage/input-structure/colors.html\" target=\"_parent\">Colors</a>\n    for data series can be customized beyond the default\n    <a href=\"../miscellaneous/variables.html#CHART_PALETTE_CS1\" target=\"_blank\">palette</a>.\n</p>\n\n<h2>Markers</h2>\n<p>\n    The <a href=\"../additional-documentation/advanced-usage/input-structure/markers.html\" target=\"_parent\">Markers</a>\n    used for identifying which data series a data point belongs to can be customized beyond the default\n    <a href=\"../miscellaneous/variables.html#regularShapes\" target=\"_blank\">marker set</a>.\n</p>\n");

/***/ }),

/***/ "Ad9u":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.ts ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-rich-tile-content-projection-example\",\n    templateUrl: \"legend-rich-tile-content-projection.example.component.html\",\n    styleUrls: [\"legend-rich-tile-content-projection.example.component.less\"],\n})\n\nexport class LegendRichTileContentProjectionExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "Cj3G":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./legend-basic/legend-basic.example.component\";\nexport * from \"./legend-test/legend-test.component\";\nexport * from \"./legend-docs/legend-docs.example.component\";\n");

/***/ }),

/***/ "CyQ5":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/height-and-width/base-grid-height-and-width.example.component.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid, XYGridConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-base-grid-height-and-width-example\",\n    templateUrl: \"./base-grid-height-and-width.example.component.html\",\n})\nexport class BaseGridHeightAndWidthExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.dimension.autoHeight = false;\n        gridConfig.dimension.autoWidth = false;\n        gridConfig.dimension.height(50);\n        gridConfig.dimension.width(100);\n\n        this.chart = new Chart(new XYGrid(gridConfig));\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales: {\n                x: new LinearScale(),\n                y: new LinearScale(),\n            },\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: 1, y: 10 },\n            { x: 2, y: 30 },\n            { x: 3, y: 5 },\n            { x: 4, y: 20 },\n            { x: 5, y: 15 },\n        ],\n    }];\n}\n");

/***/ }),

/***/ "D4b+":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { RendererAccessorsExampleComponent } from \"./accessors/accessors.example.component\";\nimport { ChartDocsAccessorsDataComponent } from \"./chart-docs-accessors-data.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsAccessorsDataComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"accessors\",\n        component: RendererAccessorsExampleComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        RendererAccessorsExampleComponent,\n        ChartDocsAccessorsDataComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAccessorsDataModule {\n}\n");

/***/ }),

/***/ "Dzs2":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/formatters/chart-docs-formatters.module.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsFormattersComponent } from \"./chart-docs-formatters.component\";\nimport { TickFormatterExampleComponent } from \"./tick-formatter/tick-formatter.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsFormattersComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"tick\",\n        component: TickFormatterExampleComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        TickFormatterExampleComponent,\n        ChartDocsFormattersComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsFormattersModule {\n}\n");

/***/ }),

/***/ "Efuy":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/custom-provider/markers-custom-provider.example.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "ElYs":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/chart-docs-accessors.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"overview\",\n        loadChildren: async () =>\n            import(\"components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.module\").then(m => m.ChartDocsAccessorsOverviewModule),\n    },\n    {\n        path: \"data\",\n        loadChildren: async () =>\n            import(\"components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.module\").then(m => m.ChartDocsAccessorsDataModule),\n    },\n    {\n        path: \"colors\",\n        loadChildren: async () =>\n            import(\"components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.module\").then(m => m.ChartDocsAccessorsColorsModule),\n    },\n    {\n        path: \"markers\",\n        loadChildren: async () =>\n            import(\"components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.module\").then(m => m.ChartDocsAccessorsMarkersModule),\n    },\n];\n\n@NgModule({\n    declarations: [],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAccessorsModule {\n}\n");

/***/ }),

/***/ "Fl8W":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "Goil":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/chart-docs-scales.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsScalesComponent } from \"./chart-docs-scales.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsScalesComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"domains\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/scales/domains/chart-docs-domains.module\").then(m => m.ChartDocsDomainsModule),\n    },\n    {\n        path: \"formatters\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/scales/formatters/chart-docs-formatters.module\")\n            .then(m => m.ChartDocsFormattersModule),\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsScalesComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsScalesModule {\n}\n");

/***/ }),

/***/ "HAcT":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/margins/base-grid-auto-margins.example.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit, ViewChild } from \"@angular/core\";\nimport { Chart, ChartComponent, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid, XYGridConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-base-grid-auto-margins-example\",\n    templateUrl: \"./base-grid-auto-margins.example.component.html\",\n})\nexport class BaseGridAutoMarginsExampleComponent implements OnInit {\n    public chart: Chart;\n\n    @ViewChild(ChartComponent) chartComponent: ChartComponent;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.axis.bottom.fit = false;\n        gridConfig.axis.left.fit = false;\n\n        this.chart = new Chart(new XYGrid(gridConfig));\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n            scales: {\n                x: new LinearScale(),\n                y: new LinearScale(),\n            },\n        }));\n\n        this.chart.update(seriesSet);\n    }\n\n    public toggleFit() {\n        const gridConfig = this.chart.getGrid().config() as XYGridConfig;\n        gridConfig.axis.bottom.fit = !gridConfig.axis.bottom.fit;\n        gridConfig.axis.left.fit = !gridConfig.axis.left.fit;\n        if (!gridConfig.axis.bottom.fit) {\n            gridConfig.dimension.margin = Object.assign({}, XYGridConfig.DEFAULT_MARGIN);\n        }\n        this.chart.updateDimensions();\n        this.chartComponent.redraw();\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: 100, y: 10000 },\n            { x: 200, y: 30000 },\n            { x: 300, y: 5000 },\n            { x: 400, y: 20000 },\n            { x: 500, y: 15000 },\n        ],\n    }];\n}\n");

/***/ }),

/***/ "IRIh":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-chart-setup\",\n    templateUrl: \"./chart-docs-chart-setup.component.html\",\n})\nexport class ChartDocsChartSetupComponent {\n    public basicChartTemplate = `<nui-chart [chart]=\"chart\"></nui-chart>`;\n    public basicSeries = `const chartSeries: IChartSeries = {\n    id: \"series-1\",\n    name: \"Series 1\",\n    data: [\n        { x: 1, y: 10 },\n        { x: 2, y: 20 },\n    ],\n    scales: {\n        x: new LinearScale(),\n        y: new LinearScale(),\n    },\n    renderer: new LineRenderer(),\n};\n...`;\n    public basicData = `const chartSeries: IChartSeries = {\n    id: \"series-1\",\n    name: \"Series 1\",\n    data: [\n        { x: 1, y: 10 },\n        { x: 2, y: 20 },\n    ],\n    ...\n};`;\n    public basicScales = `const chartSeries: IChartSeries = {\n    ...\n    scales: {\n        x: new LinearScale(),\n        y: new LinearScale(),\n    },\n    ...\n};`;\n    public renderer = `const chartSeries: IChartSeries = {\n    ...\n    renderer: new LineRenderer(),\n    ...\n};`;\n    public chartSetup = `const chart = new Chart(new XYGrid());\n...`;\n    public chartUpdate = `const seriesSet: IChartSeries[] = [...];\nchart.update(seriesSet);\n...`;\n}\n");

/***/ }),

/***/ "Izli":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.module.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsAccessorsOverviewComponent } from \"./chart-docs-accessors-overview.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsAccessorsOverviewComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsAccessorsOverviewComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAccessorsOverviewModule {\n}\n");

/***/ }),

/***/ "JTeL":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.module.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsAccessorsMarkersComponent } from \"./chart-docs-accessors-markers.component\";\nimport { RendererMarkersCustomAccessorExampleComponent } from \"./custom-accessor/markers-custom-accessor.example.component\";\nimport { RendererMarkersCustomProviderExampleComponent } from \"./custom-provider/markers-custom-provider.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsAccessorsMarkersComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"custom-provider\",\n        component: RendererMarkersCustomProviderExampleComponent,\n    },\n    {\n        path: \"custom-accessor\",\n        component: RendererMarkersCustomAccessorExampleComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        RendererMarkersCustomProviderExampleComponent,\n        RendererMarkersCustomAccessorExampleComponent,\n        ChartDocsAccessorsMarkersComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAccessorsMarkersModule {\n}\n");

/***/ }),

/***/ "NXqR":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/chart-setup/line-chart/line-chart.example.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-line-chart-example\",\n    templateUrl: \"./line-chart.example.component.html\",\n})\nexport class LineChartExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public seriesSet: IChartSeries<ILineAccessors>[];\n\n    public ngOnInit() {\n        this.seriesSet = [{\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: 1, y: 10 },\n                { x: 2, y: 30 },\n                { x: 3, y: 5 },\n                { x: 4, y: 20 },\n                { x: 5, y: 15 },\n            ],\n            scales: {\n                x: new LinearScale(),\n                y: new LinearScale(),\n            },\n            renderer: new LineRenderer(),\n            accessors: new LineAccessors(),\n        }];\n\n        this.chart.update(this.seriesSet);\n    }\n}\n");

/***/ }),

/***/ "Nmns":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/chart-docs-scales.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-scales\",\n    templateUrl: \"./chart-docs-scales.component.html\",\n})\nexport class ChartDocsScalesComponent {\n    scaleDefinition = `const xScale = new LinearScale();\n...`;\n\n    scaleWithId = `const yScale = new LinearScale(\"percentile\");\n...`;\n\n}\n");

/***/ }),

/***/ "P/Ik":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-basic/legend-basic.example.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend>\n    <nui-legend-series descriptionPrimary=\"Primary Description 1\"\n                       i18n-descriptionPrimary>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Primary Description 2\"\n                       i18n-descriptionPrimary>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "Pxap":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/chart-setup/line-chart/line-chart.example.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "QBpC":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-docs/legend-docs.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Legend Setup</h1>\n\n<h2>Basic Usage</h2>\n<p>\n    To implement <code><a href=\"../components/LegendComponent.html\" target=\"_blank\">nui-legend</a></code>,\n    perform the following steps:\n</p>\n<ol>\n    <li>\n        Place a <code>nui-legend</code> in the template.\n    </li>\n    <li>\n        Put one or more\n        <code><a href=\"../components/LegendSeriesComponent.html\" target=\"_blank\">nui-legend-series</a></code>\n        elements inside the <code>nui-legend</code> element.\n    </li>\n    <li>\n        Use\n        <code><a href=\"../components/LegendSeriesComponent.html#descriptionPrimary\" target=\"_blank\">descriptionPrimary</a></code>\n        input to set the primary description for the series.\n    </li>\n    <li>\n        Place a\n        <code><a href=\"../components/BasicLegendTileComponent.html\" target=\"_blank\">nui-basic-legend-tile</a></code>\n        inside the <code>nui-legend-series</code>.\n    </li>\n</ol>\n<p>\n    To add markers to a <code>nui-basic-legend-tile</code>, place a\n    <code><a href=\"../components/ChartMarkerComponent.html\" target=\"_blank\">nui-chart-marker</a></code>\n    element inside it, and optionally set the\n    <code><a href=\"../components/ChartMarkerComponent.html#drawLine\" target=\"_blank\">drawLine</a></code>\n    input to true to draw a line through the marker that matches the series line on the chart.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Per UX guidelines, when used with a line chart, basic tiles should have the <code>drawLine</code> input set to true.\n</nui-message>\n<p>\n    To get markers and colors working, generate marker and color providers and bind their respective get methods to the\n    marker and color inputs on the <code>nui-chart-marker</code> component. To see how to do this, take a look at the\n    typescript and html source of the next example. The providers in this example are created using the framework's\n    built-in <code><a href=\"../miscellaneous/variables.html#CHART_PALETTE_CS1\" target=\"_blank\">CHART_PALETTE_CS1</a></code>\n    chart colors and <code><a href=\"..//miscellaneous/variables.html#CHART_MARKERS\" target=\"_blank\">CHART_MARKERS</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"legend-basic\" exampleTitle=\"Basic Usage\">\n    <nui-legend-basic-example></nui-legend-basic-example>\n</nui-example-wrapper>\n\n<h2>Rich Tile</h2>\n<p>\n    To create a more information-rich legend, perform the following steps:\n</p>\n<ol>\n    <li>\n        Place a <code>nui-legend</code> in the template.\n    </li>\n    <li>\n        Put one or more\n        <code><a href=\"../components/LegendSeriesComponent.html\" target=\"_blank\">nui-legend-series</a></code>\n        elements inside the <code>nui-legend</code> element.\n    </li>\n    <li>\n        Use\n        <code><a href=\"../components/LegendSeriesComponent.html#descriptionPrimary\" target=\"_blank\">descriptionPrimary</a></code>\n        input to set the primary description for the series.\n    </li>\n    <li>\n        Use the <code>descriptionSecondary</code> input of <code>nui-legend-series</code> to set a secondary description.\n    </li>\n    <li>\n        Place a\n        <code><a href=\"../components/RichLegendTileComponent.html\" target=\"_blank\">nui-rich-legend-tile</a></code>,\n        instead of a <code>nui-basic-legend-tile</code>, inside the <code>nui-legend-series</code>.\n    </li>\n    <li>\n        Use the <code>value</code> input of <code>nui-rich-legend-tile</code> to set the series value.\n    </li>\n    <li>\n        Use the <code>seriesUnitLabel</code> input of <code>nui-legend</code> to set same labels for all series, or set the\n        <code>unitLabel</code> input on the <code>nui-rich-legend-tile</code> to specify the label on each series separately.\n    </li>\n</ol>\n<p>\n    To add markers to the <code>nui-rich-legend-tile</code>, use the same approach as for <code>nui-basic-legend-tile</code> except\n    you'll also need to add the <code>rightEdge</code> attribute to the <code>nui-chart-marker</code> element so that the marker\n    appears on the right edge of the tile. If you want something such as an icon placed on the left edge of the tile, you can\n    use the <code>leftEdge</code> attribute.\n</p>\n<p>\n    To add colors to the <code>nui-rich-legend-tile</code>, pass a color value to the <code>backgroundColor</code> input.\n    Optionally, you can set the <code>seriesColor</code> input on the <code>nui-legend</code> component to specify a default\n    background color for all tiles.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"legend-rich-tile\" exampleTitle=\"Applying Value and Unit Label Via Input\">\n    <nui-legend-rich-tile-example></nui-legend-rich-tile-example>\n</nui-example-wrapper>\n<h3>Rich Tile Content Projection</h3>\n<p>\n    Instead of the value and unitLabel inputs, you can optionally use content projection to populate the\n    tile by providing elements inside the <code>nui-rich-legend-tile</code> with <code>top</code> and/or\n    <code>bottom</code> attributes indicating the desired positions of the projected elements. The\n    following example manually styles the value and unit label projections with the same css styling as\n    that provided automatically by the value and unitLabel inputs, but you can also set the styling\n    differently based on your requirements. See the example's html and less source files for how this can\n    be done.\n</p>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> For <code>text-overflow: ellipsis</code> to work on projected tile content, you need to set the max-width\n    on the content to either a fixed value or 100%.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"legend-rich-tile-content-projection\" exampleTitle=\"Applying Value and Unit Label Via Content Projection\">\n    <nui-legend-rich-tile-content-projection-example></nui-legend-rich-tile-content-projection-example>\n</nui-example-wrapper>\n\n<h2>Text Color</h2>\n<p>\n    Set the <code>color</code> input on the <code>nui-rich-legend-tile</code> component to specify tilebox text color.\n</p>\n<nui-example-wrapper filenamePrefix=\"legend-text-color\" exampleTitle=\"Text Color\">\n    <nui-legend-text-color-example></nui-legend-text-color-example>\n</nui-example-wrapper>\n\n<h2>Horizontal</h2>\n<p>\n    Set the <code>orientation</code> input on the <code>nui-legend</code> component to \"horizontal\" to display legend series horizontally.\n</p>\n<nui-example-wrapper filenamePrefix=\"legend-horizontal\" exampleTitle=\"Horizontal\">\n    <nui-legend-horizontal-example></nui-legend-horizontal-example>\n</nui-example-wrapper>\n\n<h2>Compact Mode</h2>\n<p>\n    To implement a rich tile legend in compact mode simply omit passing <code>descriptionPrimary</code> and\n    <code>descriptionSecondary</code> into the <code>nui-legend-series</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"legend-compact\" exampleTitle=\"Compact Mode\">\n    <nui-legend-compact-example></nui-legend-compact-example>\n</nui-example-wrapper>\n\n<h2>Active State</h2>\n<p>\n    Set the <code>active</code> input on the <code>nui-legend</code> component to <code>true</code> to set the legend state to active.\n</p>\n<nui-example-wrapper filenamePrefix=\"legend-active\" exampleTitle=\"Active State\">\n    <nui-legend-active-example></nui-legend-active-example>\n</nui-example-wrapper>\n\n<h2>Interactive Mode</h2>\n<p>\n    Set <code>interactive</code> input on the <code>nui-legend</code> component to <code>true</code> to enable legend interactive mode.\n    For interactive mode to work fully, create a chart assist in your component typescript file:\n</p>\n<pre>public chartAssist: ChartAssist = new ChartAssist(new Chart(new XYGrid()));</pre>\n<p>\n    Add the following binding to <code>nui-legend</code>:\n</p>\n<pre>&lt;nui-legend (mouseleave)=\"chartAssist.resetVisibleSeries()\"&gt;&lt;/nui-legend&gt;</pre>\n<p>\n    Add following bindings to <code>nui-legend-series</code>:\n</p>\n<pre>{{legendHtml}}</pre>\n<nui-example-wrapper filenamePrefix=\"legend-interactive\" exampleTitle=\"Interactive Mode\">\n    <nui-legend-interactive-example></nui-legend-interactive-example>\n</nui-example-wrapper>\n<h2>Description Content Projection</h2>\n<p>\n    To provide a custom layout for the series description you can place an element with the <code>description</code> attribute\n    inside the <code>nui-legend-series</code> and provide your custom layout inside that element.\n</p>\n<nui-example-wrapper filenamePrefix=\"legend-description-projection\" exampleTitle=\"Description Content Projection\">\n    <nui-legend-description-projection-example></nui-legend-description-projection-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "QKvx":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/chart-docs-scales.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Scales</h1>\n\n<h4>Subtopics</h4>\n<ol>\n    <li><a href=\"../additional-documentation/advanced-usage/scales/domains.html\" target=\"_parent\">Domains</a></li>\n    <li><a href=\"../additional-documentation/advanced-usage/scales/formatters.html\" target=\"_parent\">Formatters</a></li>\n</ol>\n\n<h1>Overview</h1>\n<p>\n    <code><a href=\"../classes/Scale.html\" target=\"_blank\">Scale</a></code> is the abstract projection of your\n    domain specific data value boundaries to screen pixel range. Generally speaking, it lets you to convert any\n    data value into pixel based coordinates on the screen and vice versa. Because of that scales are extremely\n    handy when you build your own\n    <a href=\"../additional-documentation/advanced-usage/renderers.html\" target=\"_parent\">Renderer</a>. Nova\n    scale is an extended version of <a href=\"https://github.com/d3/d3-scale#d3-scale\" target=\"_blank\">D3 Scale</a>.\n</p>\n<p>\n    And, they are also used for tick generation and tick label formatting. But, in addition to formatting for tick\n    labels, a scale can have the whole set of\n    <a href=\"../additional-documentation/advanced-usage/scales/formatters.html\" target=\"_parent\">Formatters</a>\n    to be used for various purposes.\n</p>\n\n<h2>Principles</h2>\n<p>\n    Every scale is defined by its <strong>domain</strong> and <strong>range</strong>. The range will be set by the\n    chart itself and will represent the amount of screen space that is available for rendering. Meanwhile, the\n    domain is controlled by a data provider (it's you) and allows for plenty of possibilities. Some of those\n    possiblities are described on the dedicated\n    <a href=\"../additional-documentation/advanced-usage/scales/domains.html\" target=\"_parent\">Domains</a>\n    page.\n</p>\n\n<h2>Usage</h2>\n<p>\n    As a user of the chart framework you will usually need to provide a couple of scales with your\n    <code><a href=\"../interfaces/IChartSeries.html\" target=\"_blank\">IChartSeries</a></code>. Don't know how to do\n    it? You may find it helpful to start with the\n    <a href=\"../additional-documentation/advanced-usage/basics.html\" target=\"_parent\">Chart Basics</a> page\n    first.\n</p>\n<p>\n    But, if you're ready to create a scale, just instantiate any class that implements the\n    <code><a href=\"../interfaces/IScale.html\" target=\"_blank\">IScale</a></code> interface. Let's use\n    <code><a href=\"../classes/LinearScale.html\" target=\"_blank\">LinearScale</a></code> as an example:\n</p>\n<pre>{{scaleDefinition}}</pre>\n\n<h2>Scale ID</h2>\n<p>\n    Scales are reusable and can be shared between multiple charts. Scales are identified by the value of their\n    <code>id</code> field. It can be passed as a parameter on scale instantiation, otherwise it will be\n    autogenerated.\n</p>\n<pre>{{scaleWithId}}</pre>\n\n\n\n\n");

/***/ }),

/***/ "QsMe":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.module.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsAccessorsColorsComponent } from \"./chart-docs-accessors-colors.component\";\nimport { RendererColorsCustomAccessorExampleComponent } from \"./custom-accessor/colors-custom-accessor.example.component\";\nimport { RendererColorsCustomProviderExampleComponent } from \"./custom-provider/colors-custom-provider.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsAccessorsColorsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"custom-provider\",\n        component: RendererColorsCustomProviderExampleComponent,\n    },\n    {\n        path: \"custom-accessor\",\n        component: RendererColorsCustomAccessorExampleComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        RendererColorsCustomProviderExampleComponent,\n        RendererColorsCustomAccessorExampleComponent,\n        ChartDocsAccessorsColorsComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAccessorsColorsModule {\n}\n");

/***/ }),

/***/ "SW6y":
/*!*************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage/chart-docs-advanced-usage.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ChartDocsAdvancedUsageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsAdvancedUsageModule", function() { return ChartDocsAdvancedUsageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





const exampleRoutes = [
    {
        path: "accessors",
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return __webpack_require__.e(/*! import() | components-demo-advanced-usage-accessors-chart-docs-accessors-module */ "components-demo-advanced-usage-accessors-chart-docs-accessors-module").then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/accessors/chart-docs-accessors.module */ "VOXW")).then(m => m.ChartDocsAccessorsModule); }),
    },
    {
        path: "chart-setup",
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return __webpack_require__.e(/*! import() | components-demo-advanced-usage-chart-setup-chart-docs-chart-setup-module */ "components-demo-advanced-usage-chart-setup-chart-docs-chart-setup-module").then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.module */ "xb04")).then(m => m.ChartDocsChartSetupModule); }),
    },
    {
        path: "events",
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return Promise.all(/*! import() | components-demo-advanced-usage-events-chart-docs-events-module */[__webpack_require__.e("common"), __webpack_require__.e("components-demo-advanced-usage-events-chart-docs-events-module")]).then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/events/chart-docs-events.module */ "w47B")).then(m => m.ChartDocsEventsModule); }),
    },
    {
        path: "grid-config",
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return __webpack_require__.e(/*! import() | components-demo-advanced-usage-grid-config-chart-docs-grid-config-module */ "components-demo-advanced-usage-grid-config-chart-docs-grid-config-module").then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/grid-config/chart-docs-grid-config.module */ "4SuK")).then(m => m.ChartDocsGridConfigModule); }),
    },
    {
        path: "legend",
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return Promise.all(/*! import() | components-demo-advanced-usage-legend-chart-docs-legend-example-module */[__webpack_require__.e("common"), __webpack_require__.e("components-demo-advanced-usage-legend-chart-docs-legend-example-module")]).then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/legend/chart-docs-legend-example.module */ "o7g7")).then(m => m.ChartDocsLegendExampleModule); }),
    },
    {
        path: "scales",
        loadChildren: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return __webpack_require__.e(/*! import() | components-demo-advanced-usage-scales-chart-docs-scales-module */ "components-demo-advanced-usage-scales-chart-docs-scales-module").then(__webpack_require__.bind(null, /*! components/demo/advanced-usage/scales/chart-docs-scales.module */ "eqoo")).then(m => m.ChartDocsScalesModule); }),
    },
];
let ChartDocsAdvancedUsageModule = class ChartDocsAdvancedUsageModule {
};
ChartDocsAdvancedUsageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("qggg") },
        ],
    })
], ChartDocsAdvancedUsageModule);



/***/ }),

/***/ "SjNZ":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/chart-docs-events.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-events\",\n    templateUrl: \"./chart-docs-events.component.html\",\n})\nexport class ChartDocsEventsComponent { }\n");

/***/ }),

/***/ "TdBD":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@sampler-output-container-height: 660px;\n\n.sampler-output__container {\n    height: @sampler-output-container-height;\n    overflow-y: scroll;\n}\n");

/***/ }),

/***/ "TvWw":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-horizontal/legend-horizontal.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend orientation=\"horizontal\">\n    <nui-legend-series descriptionPrimary=\"Primary Description 1\"\n                       i18n-descriptionPrimary>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Primary Description 2\"\n                       i18n-descriptionPrimary>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "UAvc":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/custom-accessor/colors-custom-accessor.example.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, CHART_PALETTE_CS2, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-colors-custom-accessor-example\",\n    templateUrl: \"./colors-custom-accessor.example.component.html\",\n})\nexport class RendererColorsCustomAccessorExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public ngOnInit() {\n        const scales = {\n            x: new LinearScale(),\n            y: new LinearScale(),\n        };\n        const renderer = new LineRenderer();\n        const accessors: ILineAccessors = new LineAccessors();\n        // Custom color accessor\n        accessors.series.color = () => CHART_PALETTE_CS2[6];\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: 1, y: 30 },\n                { x: 2, y: 50 },\n                { x: 3, y: 25 },\n                { x: 4, y: 40 },\n                { x: 5, y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: 1, y: 20 },\n                { x: 2, y: 40 },\n                { x: 3, y: 15 },\n                { x: 4, y: 30 },\n                { x: 5, y: 25 },\n            ],\n        },\n        {\n            id: \"series-3\",\n            name: \"Series 3\",\n            data: [\n                { x: 1, y: 10 },\n                { x: 2, y: 30 },\n                { x: 3, y: 5 },\n                { x: 4, y: 20 },\n                { x: 5, y: 15 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "UCMR":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Chart Setup</h1>\n<p>\n    To create a data visualization, start by doing the following:\n</p>\n<p>\n    Instantiate a <code><a href=\"../classes/Chart.html\" target=\"_blank\">Chart</a></code> by passing an\n    implementation of the <code><a href=\"../interfaces/IGrid.html\" target=\"_blank\">IGrid</a></code>\n    interface as an argument to the constructor--for example an\n    <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code> for line and bar charts.\n</p>\n<pre>{{chartSetup}}</pre>\n<p>\n    The purpose of the grid is to give the chart a well-defined place to show its data. In the case of a line or bar\n    chart, this includes grid lines, axes, ticks, tick labels, etc. For information about other types of grids, see\n    the <a href=\"../additional-documentation/advanced-usage/grid.html\" target=\"_parent\">Grid Configuration</a>\n    page in the documentation.\n</p>\n<p>In your template, pass the chart class instance to the chart input on the chart component.</p>\n<pre>{{basicChartTemplate}}</pre>\n<p>\n    To initialize your chart with data or to update it later, invoke the chart class's\n    <code><a href=\"../classes/Chart.html#update\" target=\"_blank\">update</a></code> method with an array of one or more\n    chart series (<code><a href=\"../interfaces/IChartSeries.html\" target=\"_blank\">IChartSeries[]</a></code>) as an\n    argument.\n</p>\n<pre>{{chartUpdate}}</pre>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> See the <em>Chart Series Setup</em> section below for how to set up a chart series.\n</nui-message>\n\n<h1>Example</h1>\n<nui-example-wrapper filenamePrefix=\"line-chart\"\n                     exampleTitle=\"Basic Line Chart\">\n    <nui-line-chart-example></nui-line-chart-example>\n</nui-example-wrapper>\n\n<h1>Chart Series Setup</h1>\n<p>\n    Each <code><a href=\"../interfaces/IChartSeries.html\" target=\"_blank\">IChartSeries</a></code> is\n    an extension of\n    <code><a href=\"../interfaces/IDataSeries.html\" target=\"_blank\">IDataSeries</a></code> and includes scales\n    (<code><a href=\"../miscellaneous/typealiases.html#Scales\" target=\"_blank\">Scales</a></code>) and a renderer\n    (<code><a href=\"../classes/Renderer.html\" target=\"_blank\">Renderer</a></code>) in addition to the\n    data to be visualized.\n</p>\n\n<p>\n    To start setting up a chart series, provide an <code>id</code> (string), a display <code>name</code>\n    (string), and an array of <code>data</code> (<code>any[]</code>). The items in the array can be as simple as\n    numbers or can be represented with more complex objects. The objects in the data array can\n    be any shape you want, but the most basic setup for a two dimensional visualization is:\n</p>\n<pre>{{basicData}}</pre>\n<p>\n    For a basic x-y coordinate system, the x values are used for the chart's x-axis and the y values are\n    used for the y-axis.\n</p>\n\n<h2>Scales</h2>\n<p>\n    Next, provide as part of the IChartSeries a set of scales (<code><a href=\"../miscellaneous/typealiases.html#Scales\" target=\"_blank\">Scales</a></code>)\n    which allow the renderer to calculate exactly where to render a data point inside the grid.\n</p>\n<p>\n    For a basic x-y grid, the scales can be set as an object with x and y properties--indicating which axis each\n    scale applies to. Some of the available scale types are\n    <code><a href=\"../classes/LinearScale.html\" target=\"_blank\">LinearScale</a></code>,\n    <code><a href=\"../classes/TimeScale.html\" target=\"_blank\">TimeScale</a></code>,\n    <code><a href=\"../classes/BandScale.html\" target=\"_blank\">BandScale</a></code> and\n    <code><a href=\"../classes/TimeIntervalScale.html\" target=\"_blank\">TimeIntervalScale</a></code>.\n</p>\n<pre>{{basicScales}}</pre>\n\n<h2>Renderer</h2>\n<p>\n    Finally, provide a renderer which determines the type and appearance of a chart's visualization.\n    For instance, to render the data as a line, instantiate a\n    <code><a href=\"../classes/LineRenderer.html\" target=\"_blank\">LineRenderer</a></code> and assign it to\n    the <code>renderer</code> property of the corresponding\n    <code><a href=\"../interfaces/IChartSeries.html\" target=\"_blank\">IChartSeries</a></code>.\n</p>\n<pre>{{renderer}}</pre>\n\n<h2>Complete Chart Series</h2>\n<pre>{{basicSeries}}</pre>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Note:</strong> To check out the full basic line chart usage, click the \"Show Source\"\n    button on the live example at the top of the page.\n</nui-message>\n");

/***/ }),

/***/ "UQCh":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-compact/legend-compact.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-compact-example\",\n    templateUrl: \"./legend-compact.example.component.html\",\n})\nexport class LegendCompactExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "VIrZ":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/domains/fixed-domains/fixed-domains.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n<hr />\n<div class=\"btn-group\">\n    <button nui-button (click)=\"fixXDomain()\" type=\"button\">Fix X Domain to [29-Dec, 4-Jan]</button>\n    <button nui-button (click)=\"fixYDomain()\" type=\"button\">Fix Y Domain to [0, 100]</button>\n    <button nui-button (click)=\"resetDomains()\" type=\"button\">Reset Domains</button>\n</div>\n");

/***/ }),

/***/ "WdGD":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/formatters/chart-docs-formatters.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Formatters</h1>\n\n<p>\n    Scale <a href=\"../interfaces/IScale.html#formatters\" target=\"_blank\">formatters</a> allow you to define how a \n    chart's scale values should be transformed before they're presented to the user.\n</p>\n\n<h2>Ticks</h2>\n<p>\n    If the formats of the ticks on an X-Y scale need to be customized beyond their default behavior, you can provide\n    custom formatters for one or both scales. The following snippet reformats the x and y scales\n    using a Math function and a template literal.\n</p>\n<pre>{{customTicks}}</pre>\n<p>\n    <strong>Note:</strong> In addition to demonstrating how to set a custom formatter for the y-axis, the \n    following example uses a <code><a href=\"../classes/TimeScale.html\" target=\"_blank\">TimeScale</a></code> for \n    its x-axis. TimeScale's tick formatter is  automatically set to Nova Charts' \n    <code><a href=\"../miscellaneous/variables.html#datetimeFormatter\" target=\"_blank\">dateTimeFormatter</a></code> \n    which determines a reasonable format based on the date for each tick.\n</p>\n<p>\n    If your requirements for formatting tick dates differ from the one's provided by TimeScale's default tick \n    formatter, you can still set a custom one using the above syntax.\n</p>\n<nui-example-wrapper filenamePrefix=\"tick-formatter\"\n                     exampleTitle=\"Ticks\">\n    <nui-chart-tick-formatter-example></nui-chart-tick-formatter-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "Y2mW":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/data/chart-docs-accessors-data.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Data Accessors</h1>\n\n<p>\n    Renderers are responsible for rendering your data, so they need to understand how your data is structured.\n    That is the role of accessors. There is no interface that will enforce the structure of your data,\n    but there are defaults you can follow to require as little extra configuration as possible.\n</p>\n<p>\n    A renderer such as the <code><a href=\"../classes/LineRenderer.html\" target=\"_blank\">LineRenderer</a></code>\n    that derives from <code><a href=\"../classes/XYRenderer.html\" target=\"_blank\">XYRenderer</a></code> has\n    an associated <code><a href=\"../classes/LineAccessors.html\" target=\"_blank\">LineAccessors</a></code> implementation\n    with data accessor keys <code>x</code> and <code>y</code> which are used for accessing x and y domain data\n    respectively from a chart's input data set(s).\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">The general convention for data accessors is to use data point properties\n    of the same name. So data accessor <code>x</code> uses a property <code>x</code> on the data point.</nui-message>\n<p>\n    The following descriptions use the LineRenderer as an example. And, even though renderers not derived from XYRenderer may\n    have different sets of default accessor keys, the same patterns for customizing data access still apply.\n</p>\n\n<h2>Custom Accessors</h2>\n<p>\n    Accessors define how data is accessed in a domain, and framework allows you to define custom accessors on one\n    or more domains. A renderer will invoke the appropriate accessor on each datum within a domain. By default, a\n    renderer visualizes raw data as is, i.e. without modification, but defining custom accessors\n    makes it possible to add logic for deciding how to mutate the data before it gets visualized on the\n    chart. In the following snippet, each datum in the y-domain gets multiplied by two before being rendered on the\n    chart and for x-domain <code>z</code> property will be used, instead of default <code>x</code> property.\n</p>\n<pre>{{customAccessorCode}}</pre>\n<p>\n    The following example contains two series each with its own line renderer visualizing the same raw data.\n    One of the accessors has been customized to multiply each <code>y</code>\n    datum by two and return <code>z</code> property value for <code>x</code> datum, as shown in the snippet above.\n</p>\n<nui-example-wrapper filenamePrefix=\"accessors\"\n                     exampleTitle=\"Custom Accessors\">\n    <nui-accessors-example></nui-accessors-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "YTI/":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/data/accessors/accessors.example.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "Yrve":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/custom-provider/colors-custom-provider.example.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, CHART_PALETTE_CS2, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, SequentialColorProvider, XYGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-colors-custom-provider-example\",\n    templateUrl: \"./colors-custom-provider.example.component.html\",\n})\nexport class RendererColorsCustomProviderExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public ngOnInit() {\n        const scales = {\n            x: new LinearScale(),\n            y: new LinearScale(),\n        };\n        const renderer = new LineRenderer();\n        // Defining custom color palette\n        const customColors = [CHART_PALETTE_CS2[2], CHART_PALETTE_CS2[4], CHART_PALETTE_CS2[0]];\n        // Setting color accessor to use new SequentialColorProvider with custom colors\n        const accessors = new LineAccessors(new SequentialColorProvider(customColors));\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: 1, y: 30 },\n                { x: 2, y: 50 },\n                { x: 3, y: 25 },\n                { x: 4, y: 40 },\n                { x: 5, y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: 1, y: 20 },\n                { x: 2, y: 40 },\n                { x: 3, y: 15 },\n                { x: 4, y: 30 },\n                { x: 5, y: 25 },\n            ],\n        },\n        {\n            id: \"series-3\",\n            name: \"Series 3\",\n            data: [\n                { x: 1, y: 10 },\n                { x: 2, y: 30 },\n                { x: 3, y: 5 },\n                { x: 4, y: 20 },\n                { x: 5, y: 15 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "Z/rz":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/domains/chart-docs-domains.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsDomainsComponent } from \"./chart-docs-domains.component\";\nimport { FixedDomainsExampleComponent } from \"./fixed-domains/fixed-domains.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsDomainsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsDomainsComponent,\n        FixedDomainsExampleComponent,\n    ],\n    imports: [\n        NuiButtonModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsDomainsModule {\n}\n");

/***/ }),

/***/ "Z4eM":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-active/legend-active.example.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-active-example\",\n    templateUrl: \"./legend-active.example.component.html\",\n})\nexport class LegendActiveExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "ZDPj":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/chart-docs-accessors-markers.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-accessors-markers\",\n    templateUrl: \"./chart-docs-accessors-markers.component.html\",\n})\nexport class ChartDocsAccessorsMarkersComponent {\n    public customAccessorSnippet = `const accessors = new LineAccessors();\naccessors.series.marker = () => CHART_MARKERS[2];\n...`;\n    public customProviderSnippet = `const accessors = new LineAccessors();\nconst customMarkerSet = [CHART_MARKERS[6], CHART_MARKERS[8], CHART_MARKERS[9]];\naccessors.series.marker = new SequentialChartMarkerProvider(customMarkerSet).get;\n...`;\n}\n");

/***/ }),

/***/ "ZNmB":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-description-content-projection/legend-description-projection.example.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend [active]=\"active\">\n    <nui-legend-series>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n\n        <!-- custom description content -->\n        <div description class=\"d-flex align-items-center px-2\">\n            <nui-icon icon=\"printer\" status=\"up\"></nui-icon>\n            <span class=\"nui-text-default\" i18n>Custom Description 1</span>\n        </div>\n\n    </nui-legend-series>\n    <nui-legend-series>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n\n        <!-- custom description content -->\n        <div description class=\"d-flex align-items-center px-2\">\n            <nui-icon icon=\"port\" status=\"critical\"></nui-icon>\n            <span class=\"nui-text-default\" i18n>Custom Description 2</span>\n        </div>\n\n    </nui-legend-series>\n</nui-legend>\n<br>\n<button class=\"mt-2\" nui-button type=\"button\" (click)=\"toggleActive()\">Toggle Active State</button>\n");

/***/ }),

/***/ "aSCB":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-compact/legend-compact.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend>\n    <nui-legend-series>\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series>\n        <nui-rich-legend-tile value=\"31.9\"\n                              unitLabel=\"Kbps\"\n                              i18n-unitLabel\n                              [backgroundColor]=\"colors.get(secondSeriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "aZDi":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/chart-docs-events.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN, NuiButtonModule, NuiCheckboxModule, NuiDocsModule, NuiMessageModule, NuiSelectModule, SrlcStage,\n} from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsEventsComponent } from \"./chart-docs-events.component\";\nimport { EventSamplerComponent } from \"./event-sampler/event-sampler.component\";\nimport { EventsBasicExampleComponent } from \"./events-basic/events-basic-example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsEventsComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: EventsBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"event-sampler\",\n        component: EventSamplerComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsEventsComponent,\n        EventsBasicExampleComponent,\n        EventSamplerComponent,\n    ],\n    imports: [\n        NuiButtonModule,\n        NuiCheckboxModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiSelectModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsEventsModule { }\n");

/***/ }),

/***/ "akNU":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-test/legend-test.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, ChartPalette, CHART_MARKERS, CHART_PALETTE_CS1, IChartMarker, IChartPalette, IValueProvider, LineAccessors, LineRenderer,\n    SequentialChartMarkerProvider, XYGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-test\",\n    templateUrl: \"./legend-test.component.html\",\n})\nexport class LegendTestExampleComponent {\n    public palette: IChartPalette = new ChartPalette(CHART_PALETTE_CS1);\n    public markers: IValueProvider<IChartMarker> = new SequentialChartMarkerProvider(CHART_MARKERS);\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public seriesData = [\n        {\n            seriesId: \"1\",\n            value: 15.5,\n            unitLabel: \"Kbps\",\n            descriptionPrimary: \"Primary Description 1\",\n            descriptionSecondary: \"Secondary Description 1\",\n            status: \"critical\",\n        },\n        {\n            seriesId: \"2\",\n            value: 20.8,\n            unitLabel: \"%\",\n            descriptionPrimary: \"Primary Description 2\",\n            descriptionSecondary: \"Secondary Description 2\",\n            status: \"warning\",\n        },\n    ];\n\n    constructor() {\n        const accessors = new LineAccessors();\n        const renderer = new LineRenderer();\n        this.chartAssist.update(this.seriesData.map(series => ({\n            id: series.seriesId,\n            data: [series.value],\n            accessors,\n            renderer,\n            scales: {},\n        })));\n    }\n}\n");

/***/ }),

/***/ "b+XA":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/custom-accessor/colors-custom-accessor.example.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "bJ8T":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, XYGrid, XYGridConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-base-grid-disabling-interaction-example\",\n    templateUrl: \"./base-grid-disabling-interaction.example.component.html\",\n})\nexport class BaseGridDisablingInteractionExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.interactive = false;\n        this.chart = new Chart(new XYGrid(gridConfig));\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales: {\n                x: new LinearScale(),\n                y: new LinearScale(),\n            },\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            { x: 1, y: 10 },\n            { x: 2, y: 30 },\n            { x: 3, y: 5 },\n            { x: 4, y: 20 },\n            { x: 5, y: 15 },\n        ],\n    }];\n}\n");

/***/ }),

/***/ "bVjY":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/markers/custom-accessor/markers-custom-accessor.example.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "c7pr":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/domains/chart-docs-domains.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Domains</h1>\n\n<p>\n    A domain on a scale represents the breadth of visualized data.  \n</p>\n<p>\n    For continuous data, the scale is represented using two values, which define the interval.\n</p>\n<pre>{{continuousDomain}}</pre>\n<p>\n    An ordinal scale, on the other hand, which is used for data divided into categories represents its \n    domain as a list of discrete values.\n</p>\n<pre>{{ordinalDomain}}</pre>\n<h2>Domain Calculation</h2>\n<p>\n    By default, scale domain calculation is done automatically based on the accompanying series data. However,\n    domains can also be configured as fixed at two domain endpoints.\n</p>\n\n<h3>Fixed Domain</h3>\n<p>\n    Fixed domains are user-defined domains for scales that are not intended to be updated internally by the chart.\n    Examples of those could be:\n</p>\n<ul>\n    <li>- Time scale on a time series chart where we want to be in control of the displayed time range, which is\n        very often a subset of all data provided</li>\n    <li>- Percentage scale representing a fixed range of <code>&lt;0%, 100%&gt;</code></li>\n    <li>- Ordinal scales such as those for bar chart categories</li>\n</ul>\n<p>\n    A domain can be set to fixed using the\n    <code><a href=\"../classes/Scale.html#fixDomain\" target=\"_blank\">fixDomain</a></code> method.\n</p>\n<pre>{{fixedDomainShorthand}}</pre>\n<p>\n    If a domain is fixed, it's domain calculation behavior is ignored, but by switching\n    <code>isDomainFixed</code> back and forth, you can switch between automatic and fixed domain.\n</p>\n<pre>{{disablingFixedDomain}}</pre>\n<nui-example-wrapper filenamePrefix=\"fixed-domains\"\n                     exampleTitle=\"Fixed Domains\">\n    <nui-chart-fixed-domains-example></nui-chart-fixed-domains-example>\n</nui-example-wrapper>\n<nui-message type=\"info\"\n             [allowDismiss]=\"false\">\n    <strong>Note:</strong> The example above initially uses an automatic domain to determine the\n    dimensions of the visualized data. When one of the Fix Domain buttons is clicked, the target domain is\n    recalculated using a set of specified domain endpoints.\n</nui-message>\n<p>\n    An alternate way to fix a domain is to set the domain values directly and configure the domain as fixed:\n</p>\n<pre>{{fixedDomainExplicit}}</pre>\n\n<h3>Automatic Domain</h3>\n<p>\n    Scale domains for a chart series are automatically calculated using the chart series data and are\n    updated on every chart update. The default behavior is to calculate the domain from the range of\n    values that is currently visible on the chart. This is implemented in the\n    <a href=\"../../../miscellaneous/variables.html#getAutomaticDomain\"\n       target=\"_blank\">getAutomaticDomain</a>\n    function, which is the default value of a scale's\n    <a href=\"../../../interfaces/IScale.html#domainCalculator\"\n       target=\"_blank\">domainCalculator</a>\n    property.\n</p>\n<h4>Setting an Included Interval</h4>\n<p>\n    In addition to the default automatic domain calculation, it's possible to set a min/max interval that\n    is guaranteed to be included in the calculated domain. To set a min/max domain interval, assign\n    the <code><a href=\"../../../miscellaneous/variables.html#getAutomaticDomainWithIncludedInterval\"\n       target=\"_blank\">getAutomaticDomainWithIncludedInterval</a></code> function result to the scale's\n    <a href=\"../../../interfaces/IScale.html#domainCalculator\"\n       target=\"_blank\"><code>domainCalculator</code></a>\n    property:\n</p>\n<pre>{{automaticDomainWithIncludedInterval}}</pre>\n<h4>A Fixed Domain Scale May Affect a Related Scale's Automatic Domain</h4>\n<p>\n    A concept worth mentioning is that the automatic domain calculation for a scale may be affected by the fixed\n    domain of another related scale. What may happen is the data set of a y-axis scale with an automatic domain,\n    is truncated by the data on the x-axis scale by virtue of the opposing x scale's fixed domain. In this case,\n    only the data within the y scale's truncated data set is considered when calculating its domain. In other words,\n    if you have an automatic-domain y scale and a fixed-domain time series x scale, only data on the y scale that\n    is within the fixed time window on the x is considered for y domain calculation.\n</p>\n\n<hr />\n<nui-message type=\"info\"\n             [allowDismiss]=\"false\">\n    For more information on domains, check out the\n    <a href=\"https://github.com/d3/d3-scale\"\n       target=\"_blank\">D3 scales documentation</a>.\n</nui-message>\n");

/***/ }),

/***/ "cpli":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-visual-test/legend-visual-test.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, IChartMarker, IValueProvider, RenderState, SequentialChartMarkerProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-visual-test\",\n    templateUrl: \"./legend-visual-test.component.html\",\n    styleUrls: [\"legend-visual-test.component.less\"],\n})\nexport class LegendVisualTestComponent {\n    public markers: IValueProvider<IChartMarker> = new SequentialChartMarkerProvider(CHART_MARKERS);\n\n    public seriesData = [\n        {\n            seriesId: \"1\",\n            value: 15.5,\n            unitLabel: \"Kbps\",\n            descriptionPrimary: \"Primary Description 1\",\n            descriptionSecondary: \"Secondary Description 1\",\n        },\n        {\n            seriesId: \"2\",\n            value: \"9999k\",\n            unitLabel: \"%\",\n            descriptionPrimary: \"Primary Description 2\",\n            descriptionSecondary: \"Secondary Description 2\",\n        },\n    ];\n\n    public tileBackgroundColor = \"#1f77b4\";\n    public tileColor = \"white\";\n\n    public renderStates = Object.keys(RenderState);\n}\n");

/***/ }),

/***/ "dNNE":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/domains/chart-docs-domains.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-domains\",\n    templateUrl: \"./chart-docs-domains.component.html\",\n})\nexport class ChartDocsDomainsComponent {\n    public fixedDomainExplicit = `const bandScale = new BandScale();\nbandScale.domain([\"John\", \"Paul\", \"George\", \"Ringo\"]);\nbandScale.isDomainFixed = true;\n...`;\n\n    public continuousDomain = `[0, 100]`;\n    public ordinalDomain = `[\"John\", \"Paul\", \"George\", \"Ringo\"]`;\n\n    public disablingFixedDomain = `scale.isDomainFixed = false;\n...`;\n\n    public fixedDomainShorthand = `const scale = new LinearScale();\nscale.fixDomain([0, 100]);\n...`;\n\n    public automaticDomainWithIncludedInterval = `this.scales.y.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 100]);\n...`;\n}\n");

/***/ }),

/***/ "dkyL":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/formatters/tick-formatter/tick-formatter.example.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-chart-tick-formatter-example\",\n    templateUrl: \"./tick-formatter.example.component.html\",\n})\nexport class TickFormatterExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        const scales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        scales.y.formatters.tick = (value: Number) => `> ${value} %`;\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n            scales,\n        }));\n\n        const grid = new XYGrid();\n        // Set the grid's 'axis.left.fit' property to 'true' to accommodate the extra label width required by the y-scale's tick formatter output.\n        grid.config().axis.left.fit = true;\n        this.chart = new Chart(grid);\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "f8zi":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/events-basic/events-basic-example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, IChartEvent, IChartSeries, ILineAccessors, INTERACTION_VALUES_EVENT, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-chart-events-basic\",\n    templateUrl: \"./events-basic-example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class EventsBasicExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public payload: string;\n\n    constructor(private changeDetectorRef: ChangeDetectorRef) {\n    }\n\n    public ngOnInit() {\n        const accessors = new LineAccessors();\n        const renderer = new LineRenderer();\n\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // - subscribe to a chosen chart event\n        // - unsubscribing is not necessary as the chart will be destroyed when the component used to place it on the page will be destroyed;\n        //   the subscription will be unsubscribed automatically\n        this.chart.getEventBus().getStream(INTERACTION_VALUES_EVENT).subscribe((event: IChartEvent) => {\n            // process the event\n            this.payload = JSON.stringify(event.data, null, 4);\n            // in case of using a OnPush change detection strategy you need to detectChanges manually as the event is internal to this component and\n            // wouldn't cause the UI to update\n            this.changeDetectorRef.detectChanges();\n        });\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "fZ1x":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-visual-test/legend-visual-test.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<charts-test-harness>\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <h4>Legend in Default State with Rich Tile</h4>\n            <nui-legend class=\"rich-tile-legend-default-state\">\n                <nui-legend-series *ngFor=\"let data of seriesData\"\n                                   [descriptionPrimary]=\"data.descriptionPrimary\"\n                                   [descriptionSecondary]=\"data.descriptionSecondary\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [unitLabel]=\"data.unitLabel\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend in Active State with Rich Tile</h4>\n            <nui-legend class=\"rich-tile-legend-active-state\" [active]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\"\n                                   [descriptionPrimary]=\"data.descriptionPrimary\"\n                                   [descriptionSecondary]=\"data.descriptionSecondary\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [unitLabel]=\"data.unitLabel\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend in Active State with Rich Tile and Horizontal Orientation</h4>\n            <nui-legend class=\"rich-tile-horizontal-legend-active-state\" [active]=\"true\" orientation=\"horizontal\">\n                <nui-legend-series *ngFor=\"let data of seriesData\"\n                                   [descriptionPrimary]=\"data.descriptionPrimary\"\n                                   [descriptionSecondary]=\"data.descriptionSecondary\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [unitLabel]=\"data.unitLabel\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend Interactive Mode in Default State with Rich Tile</h4>\n            <nui-legend class=\"rich-tile-interactive-legend-default-state\" [interactive]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\"\n                                   [descriptionPrimary]=\"data.descriptionPrimary\"\n                                   [descriptionSecondary]=\"data.descriptionSecondary\">\n                    <nui-rich-legend-tile [value]=\"data.value\"\n                                          [unitLabel]=\"data.unitLabel\"\n                                          [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend Interactive Mode in Active State with Rich Tile</h4>\n            <nui-legend class=\"rich-tile-interactive-legend-active-state\" [active]=\"true\" [interactive]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\"\n                                   [descriptionPrimary]=\"data.descriptionPrimary\"\n                                   [descriptionSecondary]=\"data.descriptionSecondary\">\n                    <nui-rich-legend-tile [value]=\"data.value\"\n                                          [unitLabel]=\"data.unitLabel\"\n                                          [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend Series Render States</h4>\n            <nui-legend class=\"legend-series-render-states\"\n                        [interactive]=\"true\">\n                <nui-legend-series descriptionPrimary=\"unselected/hidden\"\n                                   descriptionSecondary=\"unselected/hidden\"\n                                   seriesRenderState=\"hidden\"\n                                   [isSelected]=\"false\">\n                    <nui-rich-legend-tile value=\"0\"\n                                          unitLabel=\"Mbps\"\n                                          [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n                <nui-legend-series *ngFor=\"let renderState of renderStates\"\n                                   [descriptionPrimary]=\"renderState\"\n                                   [descriptionSecondary]=\"renderState\"\n                                   [seriesRenderState]=\"renderState\">\n                    <nui-rich-legend-tile value=\"0\"\n                                          unitLabel=\"Mbps\"\n                                          [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4 class=\"text-style-roboto\">Testing Roboto Font</h4>\n\n        </div>\n        <div class=\"col-md-3\">\n            <h4>Rich Tile Legend Compact Mode</h4>\n            <nui-legend class=\"rich-tile-legend-compact-mode-test\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [unitLabel]=\"data.unitLabel\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Mode Active State</h4>\n            <nui-legend class=\"rich-tile-legend-compact-mode-active-state-test\" [active]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [unitLabel]=\"data.unitLabel\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Mode Active State with Horizontal Orientation</h4>\n            <nui-legend class=\"rich-tile-horizontal-legend-compact-mode-active-state-test\"\n                        [active]=\"true\"\n                        orientation=\"horizontal\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [unitLabel]=\"data.unitLabel\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Interactive Mode</h4>\n            <nui-legend class=\"rich-tile-compact-interactive-legend-test\" [interactive]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\"\n                                          [unitLabel]=\"data.unitLabel\"\n                                          [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Mode with Markers in Active State</h4>\n            <nui-legend class=\"rich-tile-compact-interactive-legend-active-state\" [active]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\"\n                                          [unitLabel]=\"data.unitLabel\"\n                                          [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\">\n                        <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                                          [color]=\"tileBackgroundColor\"\n                                          rightEdge></nui-chart-marker>\n                    </nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend with Chart Markers, Icons, and Projected Content</h4>\n            <nui-legend>\n                <nui-legend-series>\n                    <nui-rich-legend-tile [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\">\n                        <div top>15.5</div>\n                        <nui-icon iconSize=\"small\"\n                                  icon=\"status_up\"\n                                  leftEdge></nui-icon>\n                        <nui-chart-marker [marker]=\"markers.get('1')\"\n                                          [color]=\"tileBackgroundColor\"\n                                          rightEdge></nui-chart-marker>\n                    </nui-rich-legend-tile>\n                    <div description>\n                        <div>Primary Description 1</div>\n                    </div>\n                </nui-legend-series>\n                <nui-legend-series>\n                    <nui-rich-legend-tile [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\">\n                        <div top>9999k</div>\n                        <div bottom>%</div>\n                        <nui-icon iconSize=\"small\"\n                                  icon=\"status_warning\"\n                                  leftEdge></nui-icon>\n                        <nui-chart-marker [marker]=\"markers.get('2')\"\n                                          [color]=\"tileBackgroundColor\"\n                                          rightEdge></nui-chart-marker>\n                    </nui-rich-legend-tile>\n                    <div description>\n                        <div>Primary Description 2</div>\n                        <div>Secondary Description 2</div>\n                    </div>\n                </nui-legend-series>\n                <nui-legend-series>\n                    <nui-rich-legend-tile [backgroundColor]=\"tileBackgroundColor\"\n                                          [color]=\"tileColor\">\n                        <div top>15.5</div>\n                        <div bottom>Kbps</div>\n                        <nui-icon iconSize=\"small\"\n                                  icon=\"status_critical\"\n                                  leftEdge></nui-icon>\n                        <nui-chart-marker [marker]=\"markers.get('3')\"\n                                          [color]=\"tileBackgroundColor\"\n                                          rightEdge></nui-chart-marker>\n                    </nui-rich-legend-tile>\n                    <div description>\n                        <div>Primary Description 3</div>\n                        <div>Secondary Description 3</div>\n                        <div>Tertiary Description 3</div>\n                    </div>\n                </nui-legend-series>\n            </nui-legend>\n        </div>\n        <div class=\"col-md-3\">\n            <h4>Rich Tile Legend Compact Mode No Label</h4>\n            <nui-legend class=\"rich-tile-legend-compact-mode-test\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Mode Active State No Label</h4>\n            <nui-legend class=\"rich-tile-legend-compact-mode-active-state-test\" [active]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Mode Active State with Horizontal Orientation No Label</h4>\n            <nui-legend class=\"rich-tile-horizontal-legend-compact-mode-active-state-test\"\n                        [active]=\"true\"\n                        orientation=\"horizontal\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Rich Tile Legend Compact Interactive Mode No Label</h4>\n            <nui-legend class=\"rich-tile-compact-interactive-legend-test\" [interactive]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [backgroundColor]=\"tileBackgroundColor\" [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n            <h4>Legend in Default State with Rich Tile No Label</h4>\n            <nui-legend class=\"rich-tile-legend-default-state\">\n                <nui-legend-series *ngFor=\"let data of seriesData\" [descriptionPrimary]=\"data.descriptionPrimary\">\n                    <nui-rich-legend-tile [value]=\"data.value\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend in Active State with Rich Tile No Label</h4>\n            <nui-legend class=\"rich-tile-legend-active-state\" [active]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\" [descriptionPrimary]=\"data.descriptionPrimary\">\n                    <nui-rich-legend-tile [value]=\"data.value\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend in Active State with Rich Tile and Horizontal Orientation No Label</h4>\n            <nui-legend class=\"rich-tile-horizontal-legend-active-state\" [active]=\"true\" orientation=\"horizontal\">\n                <nui-legend-series *ngFor=\"let data of seriesData\" [descriptionPrimary]=\"data.descriptionPrimary\">\n                    <nui-rich-legend-tile [value]=\"data.value\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend Interactive Mode in Default State with Rich Tile No Label</h4>\n            <nui-legend class=\"rich-tile-interactive-legend-default-state\" [interactive]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\" [descriptionPrimary]=\"data.descriptionPrimary\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [backgroundColor]=\"tileBackgroundColor\" [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n\n            <h4>Legend Interactive Mode in Active State with Rich Tile No Label</h4>\n            <nui-legend class=\"rich-tile-interactive-legend-active-state\" [active]=\"true\" [interactive]=\"true\">\n                <nui-legend-series *ngFor=\"let data of seriesData\" [descriptionPrimary]=\"data.descriptionPrimary\">\n                    <nui-rich-legend-tile [value]=\"data.value\" [backgroundColor]=\"tileBackgroundColor\" [color]=\"tileColor\"></nui-rich-legend-tile>\n                </nui-legend-series>\n            </nui-legend>\n        </div>\n    </div>\n</charts-test-harness>\n");

/***/ }),

/***/ "ghjL":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-rich-tile/legend-rich-tile.example.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend seriesUnitLabel=\"Mbps\"\n            i18n-seriesUnitLabel\n            [seriesColor]=\"colors.get(firstSeriesId)\">\n    <nui-legend-series descriptionPrimary=\"Primary Description 1\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Secondary Description 1\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile value=\"15.5\">\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Primary Description 2\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Secondary Description 2\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile value=\"20.8\"\n                              [backgroundColor]=\"colors.get(secondSeriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "gjCY":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend [seriesColor]=\"colors.get(firstSeriesId)\">\n    <nui-legend-series descriptionPrimary=\"Primary Description 1\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Secondary Description 1\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile>\n            <div class=\"projected-value\" top>15.5</div>\n            <div class=\"projected-unit-label\" bottom i18n>Kbps</div>\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Primary Description 2\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Secondary Description 2\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile [backgroundColor]=\"colors.get(secondSeriesId)\">\n            <div class=\"projected-value\" top>20.8</div>\n            <div class=\"projected-unit-label\" bottom i18n>Kbps</div>\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "i4WR":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/custom-provider/colors-custom-provider.example.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "jFy7":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.module.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiCheckboxModule, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsBaseGridComponent } from \"./chart-docs-base-grid.component\";\nimport { BaseGridDisablingInteractionExampleComponent } from \"./disabling-interaction/base-grid-disabling-interaction.example.component\";\nimport { BaseGridHeightAndWidthExampleComponent } from \"./height-and-width/base-grid-height-and-width.example.component\";\nimport { BaseGridAutoMarginsExampleComponent } from \"./margins/base-grid-auto-margins.example.component\";\nimport { BaseGridMarginsExampleComponent } from \"./margins/base-grid-margins.example.component\";\nimport { BaseGridPaddingExampleComponent } from \"./padding/base-grid-padding.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsBaseGridComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"disabling-interaction\",\n        component: BaseGridDisablingInteractionExampleComponent,\n    },\n    {\n        path: \"margins\",\n        component: BaseGridMarginsExampleComponent,\n    },\n    {\n        path: \"padding\",\n        component: BaseGridPaddingExampleComponent,\n    },\n    {\n        path: \"height-and-width\",\n        component: BaseGridHeightAndWidthExampleComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        BaseGridDisablingInteractionExampleComponent,\n        BaseGridAutoMarginsExampleComponent,\n        BaseGridMarginsExampleComponent,\n        BaseGridPaddingExampleComponent,\n        BaseGridHeightAndWidthExampleComponent,\n        ChartDocsBaseGridComponent,\n    ],\n    imports: [\n        NuiCheckboxModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsBaseGridModule {\n}\n");

/***/ }),

/***/ "ne+A":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-text-color/legend-text-color.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-text-color-example\",\n    templateUrl: \"./legend-text-color.example.component.html\",\n})\nexport class LegendTextColorExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "ngjk":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/colors/chart-docs-accessors-colors.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Colors</h1>\n<p>\n    The use of color is often the primary visual means of differentiating one data series from another, especially\n    in the case of line charts. The colors used for each series are determined by the series color accessor.\n    If a color accessor isn't specified, a default\n    <a href=\"../classes/SequentialColorProvider.html\" target=\"_blank\">SequentialColorProvider</a> instantiated\n    automatically distributes colors sequentially to each series and tracks the color distribution by\n    series ID. The job of the SequentialColorProvider is to ensure colors are used in the order provided and that a\n    color doesn't get used more than once unless the number of series exceeds the number of colors in the provided\n    palette.\n</p>\n\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Proceed with caution!</strong>\n    Examples below are provided to describe the possibilities of charting framework and give a better understanding\n    of its principles. This is not a recommendation for regular usage. If you find yourself doing something like\n    this, please consult with UX to double check that your mockups follow the Nova Design Language.\n</nui-message>\n\n<h2>Custom Color Accessor</h2>\n<p>\n    If you want to manually specify how colors are accessed for a chart's series, you can optionally provide your\n    own color accessor per renderer instance. In the following snippet, a custom accessor plucks a color from one of\n    the UX-approved chart\n    <a href=\"https://marvelapp.com/project/3222505/screen/46622038\" target=\"_blank\">color sequences</a> and uses it\n    for every series that the renderer instance gets assigned to. Color sequence constants like the one used in the\n    example can be found\n    <a href=\"../miscellaneous/variables.html#CHART_PALETTE_CS1\" target=\"_blank\">here</a>.\n</p>\n<pre>{{customAccessorSnippet}}</pre>\n<p>\n    As you can see in the snippet, the seriesId automatically gets passed as an argument to the color accessor, so\n    you can optionally add logic that uses the seriesId to determine which color gets returned. To see a custom\n    color accessor in action, take a look at the code in the source expander of the following example.\n</p>\n<nui-example-wrapper filenamePrefix=\"colors-custom-accessor\"\n                     exampleTitle=\"Custom Accessor\">\n    <nui-colors-custom-accessor-example></nui-colors-custom-accessor-example>\n</nui-example-wrapper>\n\n<h2>Custom Sequential Color Provider</h2>\n<p>\n    If the palette provided by the default SequentialColorProvider doesn't meet your specifications, you can\n    instantiate your own color provider with a custom set of colors to be distributed sequentially and tracked by\n    seriesId as in the following snippet:\n</p>\n<pre>{{customProviderSnippet}}</pre>\n<nui-example-wrapper filenamePrefix=\"colors-custom-provider\"\n                     exampleTitle=\"Custom Sequential Color Provider\">\n    <nui-colors-custom-provider-example></nui-colors-custom-provider-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "nhCc":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/formatters/tick-formatter/tick-formatter.example.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "oGOk":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-basic/legend-basic.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-basic-example\",\n    templateUrl: \"./legend-basic.example.component.html\",\n})\nexport class LegendBasicExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "ohXm":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/margins/base-grid-margins.example.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "ooOc":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-rich-tile/legend-rich-tile.example.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-rich-tile-example\",\n    templateUrl: \"./legend-rich-tile.example.component.html\",\n})\nexport class LegendRichTileExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n}\n");

/***/ }),

/***/ "pMRv":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-test/legend-test.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Basic Legend</h3>\n<nui-legend id=\"basic-tile-legend-default-state\">\n    <nui-legend-series *ngFor=\"let legendSeries of seriesData\"\n                       [descriptionPrimary]=\"legendSeries.descriptionPrimary\"\n                       [descriptionSecondary]=\"legendSeries.descriptionSecondary\">\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(legendSeries.seriesId)\"\n                              [color]=\"palette.standardColors.get(legendSeries.seriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Basic Interactive Legend</h3>\n<nui-legend id=\"basic-tile-legend-interactive-state\"\n            [interactive]=\"true\"\n            (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n    <nui-legend-series *ngFor=\"let legendSeries of seriesData\"\n                       [descriptionPrimary]=\"legendSeries.descriptionPrimary\"\n                       [descriptionSecondary]=\"legendSeries.descriptionSecondary\"\n                       [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.seriesId]?.state\"\n                       [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.seriesId)\"\n                       (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.seriesId, $event)\"\n                       (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.seriesId)\">\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(legendSeries.seriesId)\"\n                              [color]=\"palette.standardColors.get(legendSeries.seriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Legend with Horizontal Orientation</h3>\n<nui-legend orientation=\"horizontal\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [descriptionPrimary]=\"data.descriptionPrimary\">\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend</h3>\n<nui-legend id=\"rich-tile-legend-default-state\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [descriptionPrimary]=\"data.descriptionPrimary\"\n                       [descriptionSecondary]=\"data.descriptionSecondary\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend with Projected Description, Value, and Unit Label</h3>\n<nui-legend id=\"rich-tile-legend-with-projected-description-default-state\">\n    <nui-legend-series *ngFor=\"let data of seriesData\">\n        <nui-rich-legend-tile [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <div value>{{data.value}}</div>\n            <div unitLabel>{{data.unitLabel}}</div>\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n        <div description>\n            <div>{{data.descriptionPrimary}}</div>\n            <div>{{data.descriptionSecondary}}</div>\n        </div>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Compact Mode</h3>\n<nui-legend class=\"rich-tile-legend-compact-mode-test\">\n    <nui-legend-series *ngFor=\"let data of seriesData\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Active State</h3>\n<nui-legend class=\"rich-tile-legend-active-state-test\"\n            [active]=\"true\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [descriptionPrimary]=\"data.descriptionPrimary\"\n                       [descriptionSecondary]=\"data.descriptionSecondary\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Active State with Horizontal Orientation</h3>\n<nui-legend class=\"rich-tile-horizontal-legend-active-state-test\"\n            [active]=\"true\"\n            orientation=\"horizontal\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [descriptionPrimary]=\"data.descriptionPrimary\"\n                       [descriptionSecondary]=\"data.descriptionSecondary\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Compact Mode Active State</h3>\n<nui-legend class=\"rich-tile-legend-compact-mode-active-state-test\"\n            [active]=\"true\">\n    <nui-legend-series *ngFor=\"let data of seriesData\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Compact Mode Active State with Horizontal Orientation</h3>\n<nui-legend class=\"rich-tile-horizontal-legend-compact-mode-active-state-test\"\n            [active]=\"true\"\n            orientation=\"horizontal\">\n    <nui-legend-series *ngFor=\"let data of seriesData\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Interactive Mode with Icons</h3>\n<nui-legend id=\"rich-tile-interactive-legend-test\"\n            [interactive]=\"true\"\n            (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [descriptionPrimary]=\"data.descriptionPrimary\"\n                       [descriptionSecondary]=\"data.descriptionSecondary\"\n                       [seriesRenderState]=\"chartAssist.renderStatesIndex[data.seriesId]?.state\"\n                       [isSelected]=\"!chartAssist.isSeriesHidden(data.seriesId)\"\n                       (isSelectedChange)=\"chartAssist.toggleSeries(data.seriesId, $event)\"\n                       (mouseenter)=\"chartAssist.emphasizeSeries(data.seriesId)\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-icon iconSize=\"small\"\n                      [icon]=\"'status_' + data.status\"\n                      leftEdge></nui-icon>\n                <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                                  [color]=\"palette.standardColors.get(data.seriesId)\"\n                                  rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Compact Interactive Mode</h3>\n<nui-legend class=\"rich-tile-compact-interactive-legend-test\"\n            [interactive]=\"true\"\n            (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [seriesRenderState]=\"chartAssist.renderStatesIndex[data.seriesId]?.state\"\n                       [isSelected]=\"!chartAssist.isSeriesHidden(data.seriesId)\"\n                       (isSelectedChange)=\"chartAssist.toggleSeries(data.seriesId, $event)\"\n                       (mouseenter)=\"chartAssist.emphasizeSeries(data.seriesId)\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n\n<h3>Rich Tile Legend Interactive Mode Active State</h3>\n<nui-legend class=\"rich-tile-interactive-legend-active-state-test\"\n            [active]=\"true\"\n            [interactive]=\"true\">\n    <nui-legend-series *ngFor=\"let data of seriesData\"\n                       [descriptionPrimary]=\"data.descriptionPrimary\"\n                       [descriptionSecondary]=\"data.descriptionSecondary\">\n        <nui-rich-legend-tile [value]=\"data.value\"\n                              [unitLabel]=\"data.unitLabel\"\n                              [backgroundColor]=\"palette.standardColors.get(data.seriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(data.seriesId)\"\n                              [color]=\"palette.standardColors.get(data.seriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "pOcv":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/height-and-width/base-grid-height-and-width.example.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n");

/***/ }),

/***/ "qDJM":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-text-color/legend-text-color.example.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-legend>\n    <nui-legend-series descriptionPrimary=\"Primary Description 1\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Secondary Description 1\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile value=\"15.5\"\n                              unitLabel=\"Kbps\"\n                              i18n-unitLabel\n                              color=\"white\"\n                              [backgroundColor]=\"colors.get(firstSeriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(firstSeriesId)\"\n                              [color]=\"colors.get(firstSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n    <nui-legend-series descriptionPrimary=\"Primary Description 2\"\n                       i18n-descriptionPrimary\n                       descriptionSecondary=\"Secondary Description 2\"\n                       i18n-descriptionSecondary>\n        <nui-rich-legend-tile value=\"20.8\"\n                              unitLabel=\"%\"\n                              i18n-unitLabel\n                              color=\"white\"\n                              [backgroundColor]=\"colors.get(secondSeriesId)\">\n            <nui-chart-marker [marker]=\"markers.get(secondSeriesId)\"\n                              [color]=\"colors.get(secondSeriesId)\"\n                              rightEdge></nui-chart-marker>\n        </nui-rich-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n");

/***/ }),

/***/ "qSaD":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from \"@angular/core\";\nimport {\n    BandScale,\n    barAccessors,\n    barGrid,\n    BarHighlightStrategy,\n    BarRenderer,\n    barScales,\n    BarSeriesHighlightStrategy,\n    Chart,\n    ChartAssist,\n    ChartPalette,\n    CHART_PALETTE_CS_S,\n    CHART_VIEW_STATUS_EVENT,\n    HIGHLIGHT_DATA_POINT_EVENT,\n    HIGHLIGHT_SERIES_EVENT,\n    IAccessors,\n    IBarAccessors,\n    IChartEvent,\n    IChartMarker,\n    IChartSeries,\n    IGrid,\n    InteractionLabelPlugin,\n    InteractionType,\n    INTERACTION_DATA_POINTS_EVENT,\n    INTERACTION_DATA_POINT_EVENT,\n    INTERACTION_SERIES_EVENT,\n    INTERACTION_VALUES_EVENT,\n    IValueProvider,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    LineSelectSeriesInteractionStrategy,\n    MappedValueProvider,\n    MOUSE_ACTIVE_EVENT,\n    Renderer,\n    Scales,\n    SELECT_DATA_POINT_EVENT,\n    SERIES_STATE_CHANGE_EVENT,\n    stackedPreprocessor,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport each from \"lodash/each\";\nimport zipObject from \"lodash/zipObject\";\n\ninterface IEventInfo {\n    id: string;\n    name: string;\n    interactionTypes?: string[];\n}\n\nenum ChartType {\n    StackedBar = \"Stacked Bar\",\n    GroupedBar = \"Grouped Bar\",\n    Line = \"Line\",\n}\n\ntype SeriesProcessor<T = IAccessors> = (series: IChartSeries<T>[], isVisible: (chartSeries: IChartSeries<T>) => boolean) => IChartSeries<T>[];\n\ninterface IChartTools<T = IAccessors> {\n    seriesProcessor?: SeriesProcessor<T>;\n    gridFunction: () => IGrid;\n    rendererFunction: () => Renderer<IAccessors>;\n    accessorFunction: (colors?: IValueProvider<string>, markers?: IValueProvider<IChartMarker>) => T;\n    scaleFunction: () => Scales;\n}\n\nexport interface IChartAttributes<T = IAccessors> {\n    seriesProcessor?: SeriesProcessor<T>;\n    grid: IGrid;\n    renderer: Renderer<IAccessors>;\n    accessors: T;\n    scales: Scales;\n}\n\n@Component({\n    selector: \"nui-chart-event-sampler\",\n    templateUrl: \"./event-sampler.component.html\",\n    styleUrls: [\"./event-sampler.component.less\"],\n    encapsulation: ViewEncapsulation.Emulated,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class EventSamplerComponent implements OnInit {\n    public parsedEvent = {};\n    public readonly eventFilters = [\n        {\n            id: MOUSE_ACTIVE_EVENT,\n            name: \"MOUSE_ACTIVE_EVENT\",\n        },\n        {\n            id: INTERACTION_VALUES_EVENT,\n            name: \"INTERACTION_VALUES_EVENT\",\n            interactionTypes: [InteractionType.Click, InteractionType.MouseMove],\n        },\n        {\n            id: INTERACTION_DATA_POINTS_EVENT,\n            name: \"INTERACTION_DATA_POINTS_EVENT\",\n            interactionTypes: [InteractionType.Click, InteractionType.MouseMove],\n        },\n        {\n            id: INTERACTION_DATA_POINT_EVENT,\n            name: \"INTERACTION_DATA_POINT_EVENT\",\n            interactionTypes: [InteractionType.Click, InteractionType.Hover],\n        },\n        {\n            id: HIGHLIGHT_DATA_POINT_EVENT,\n            name: \"HIGHLIGHT_DATA_POINT_EVENT\",\n            interactionTypes: [InteractionType.MouseMove],\n        },\n        {\n            id: HIGHLIGHT_SERIES_EVENT,\n            name: \"HIGHLIGHT_SERIES_EVENT\",\n            interactionTypes: [InteractionType.MouseMove],\n        },\n        {\n            id: INTERACTION_SERIES_EVENT,\n            name: \"INTERACTION_SERIES_EVENT\",\n            interactionTypes: [InteractionType.Click],\n        },\n        {\n            id: SELECT_DATA_POINT_EVENT,\n            name: \"SELECT_DATA_POINT_EVENT\",\n            interactionTypes: [InteractionType.Click],\n        },\n        {\n            id: CHART_VIEW_STATUS_EVENT,\n            name: \"CHART_VIEW_STATUS_EVENT\",\n        },\n        {\n            id: SERIES_STATE_CHANGE_EVENT,\n            name: \"SERIES_STATE_CHANGE_EVENT\",\n        },\n    ];\n\n    public selectedEvent: IEventInfo = this.eventFilters[0];\n    public selectedInteractionType = \"\";\n\n    public chartTypes = [ChartType.GroupedBar, ChartType.StackedBar, ChartType.Line];\n    public selectedChartType: ChartType;\n    public categories = [\"Q1\", \"Q2\", \"Q3\", \"Q4\"];\n    public subCategories = [\"down\", \"critical\", \"warning\", \"unknown\", \"ok\", \"other\"];\n    public values = [\n        [24, 16, 7, 6, 97, 4],\n        [13, 8, 5, 17, 5, 25],\n        [97, 41, 24, 6, 7, 6],\n        [45, 87, 23, 48, 24, 9],\n    ];\n    public valueAccessor: (i: number, j: number) => number;\n    public chartAssist: ChartAssist;\n    public palette: ChartPalette;\n\n    private accessors: IBarAccessors | IAccessors;\n    private renderer: Renderer<IAccessors>;\n    private scales: Scales;\n    private seriesProcessor?: SeriesProcessor<IBarAccessors> | SeriesProcessor;\n\n    public onEventFilterChange(selectedEvent: IEventInfo) {\n        this.selectedEvent = selectedEvent;\n        this.selectedInteractionType = this.selectedEvent.interactionTypes ? this.selectedEvent.interactionTypes[0] : \"\";\n    }\n\n    public onInteractionTypeChange(type: InteractionType) {\n        this.selectedInteractionType = type;\n    }\n\n    constructor(private changeDetector: ChangeDetectorRef) {\n    }\n\n    ngOnInit() {\n        this.valueAccessor = (i, j) => this.values[j][i];\n        this.palette = new ChartPalette(new MappedValueProvider<string>(zipObject(this.subCategories, CHART_PALETTE_CS_S)));\n\n        this.updateChartType(this.chartTypes[0]);\n    }\n\n    public updateChartType(chartType: ChartType) {\n        this.selectedChartType = chartType;\n        this.buildChart();\n        this.subscribeToChart();\n        this.updateChart();\n    }\n\n    private buildChart() {\n        const {grid, accessors, renderer, scales, seriesProcessor} = this.getChartAttributes(this.selectedChartType);\n\n        this.chartAssist = new ChartAssist(new Chart(grid));\n        this.chartAssist.palette = this.palette;\n\n        this.chartAssist.chart.addPlugin(new InteractionLabelPlugin());\n\n        this.renderer = renderer;\n        this.accessors = accessors;\n        this.scales = scales;\n        this.seriesProcessor = seriesProcessor;\n    }\n\n    private subscribeToChart() {\n        each(this.eventFilters, filter => {\n            this.chartAssist.chart.getEventBus().getStream(filter.id).subscribe((event: IChartEvent) => {\n                if (this.selectedEvent.id === filter.id) {\n                    if (!event.data.interactionType || this.selectedInteractionType === event.data.interactionType) {\n                        recursivelyReplacePropValue(event, \"dataSeries\", \"<< IChartSeries info is available here (replaced in output for brevity) >>\");\n                        this.parsedEvent = event;\n                        this.changeDetector.markForCheck();\n                    }\n                }\n            });\n        });\n    }\n\n    private updateChart(): void {\n        let seriesSet: IChartSeries<IAccessors>[]\n            | IChartSeries<IBarAccessors>[] = this.buildChartSeries(this.categories, this.subCategories, this.valueAccessor);\n        // TODO: Refactor this to be able to pass different types of seriesSet to get rid of the any\n        seriesSet = this.seriesProcessor ? this.seriesProcessor(<any>seriesSet, () => true) : seriesSet;\n        this.chartAssist.update(seriesSet);\n    }\n\n    private buildChartSeries(\n        categories: string[],\n        subCategories: string[],\n        valueAccessor: (i: number, j: number) => number\n    ): IChartSeries<IBarAccessors>[] | IChartSeries<IAccessors>[] {\n        return subCategories.map((subCategory, i) => ({\n            id: subCategory,\n            name: subCategory,\n            data: categories.map((xCategory, j) => ({category: xCategory, value: valueAccessor(i, j) || 0})),\n            accessors: this.accessors,\n            renderer: this.renderer,\n            scales: this.scales,\n        }));\n    }\n\n    private getChartAttributes(chartType: ChartType): IChartAttributes | IChartAttributes<IBarAccessors> {\n        const t: IChartTools | IChartTools<IBarAccessors> = this.getChartTools(chartType);\n        let result: IChartAttributes | IChartAttributes<IBarAccessors> = {\n            grid: t.gridFunction(),\n            accessors: t.accessorFunction(),\n            renderer: t.rendererFunction(),\n            scales: t.scaleFunction(),\n        };\n\n        if (t.seriesProcessor) {\n            result = {...result, seriesProcessor: t.seriesProcessor} as IChartAttributes<IBarAccessors>;\n        }\n        return result;\n    }\n\n    private getChartTools(chartType: ChartType): IChartTools<IBarAccessors> | IChartTools {\n        const chartTools: Record<ChartType, IChartTools<IBarAccessors> | IChartTools> = {\n            [ChartType.StackedBar]: {\n                seriesProcessor: stackedPreprocessor,\n                gridFunction: barGrid,\n                rendererFunction: () => new BarRenderer({highlightStrategy: new BarHighlightStrategy(\"x\")}),\n                accessorFunction: () => barAccessors(undefined, this.palette.standardColors),\n                scaleFunction: barScales,\n            },\n            [ChartType.GroupedBar]: {\n                gridFunction: () => barGrid({grouped: true}),\n                rendererFunction: () => new BarRenderer({highlightStrategy: new BarSeriesHighlightStrategy(\"x\")}),\n                accessorFunction: () => {\n                    const accessors = barAccessors({grouped: true}, this.palette.standardColors);\n                    accessors.data.category = (data, i, series, dataSeries) => [data.category, dataSeries.name];\n                    return accessors;\n                },\n                scaleFunction: () => barScales({grouped: true}),\n            },\n            [ChartType.Line]: {\n                gridFunction: () => new XYGrid(),\n                rendererFunction: () => new LineRenderer({\n                    interactionStrategy: new LineSelectSeriesInteractionStrategy(),\n                    markerInteraction: { enabled: true, clickable: true },\n                }),\n                accessorFunction: () => {\n                    const accessors = new LineAccessors(this.palette.standardColors);\n                    accessors.data.x = d => d.category;\n                    accessors.data.y = d => d.value;\n                    accessors.data.value = d => d.value;\n                    return accessors;\n                },\n                scaleFunction: () => ({\n                    x: new BandScale().fixDomain(this.categories),\n                    y: new LinearScale(),\n                }),\n            },\n        };\n\n        return chartTools[chartType];\n    }\n\n}\n\nfunction recursivelyReplacePropValue(obj: Record<string, any>, property: string, replacement: string): void {\n    for (const prop in obj) {\n        if (prop === property) {\n            obj[prop] = replacement;\n        } else if (typeof obj[prop] === \"object\") {\n            recursivelyReplacePropValue(obj[prop], property, replacement);\n        }\n    }\n}\n");

/***/ }),

/***/ "qggg":
/*!*****************************************************************************************************************!*\
  !*** ./examples/components/demo/advanced-usage sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accessors/chart-docs-accessors.module.ts": "ElYs",
	"./accessors/colors/chart-docs-accessors-colors.component.html": "ngjk",
	"./accessors/colors/chart-docs-accessors-colors.component.ts": "3cAq",
	"./accessors/colors/chart-docs-accessors-colors.module.ts": "QsMe",
	"./accessors/colors/custom-accessor/colors-custom-accessor.example.component.html": "b+XA",
	"./accessors/colors/custom-accessor/colors-custom-accessor.example.component.ts": "UAvc",
	"./accessors/colors/custom-provider/colors-custom-provider.example.component.html": "i4WR",
	"./accessors/colors/custom-provider/colors-custom-provider.example.component.ts": "Yrve",
	"./accessors/data/accessors/accessors.example.component.html": "YTI/",
	"./accessors/data/accessors/accessors.example.component.ts": "5A4g",
	"./accessors/data/chart-docs-accessors-data.component.html": "Y2mW",
	"./accessors/data/chart-docs-accessors-data.component.ts": "2kwe",
	"./accessors/data/chart-docs-accessors-data.module.ts": "D4b+",
	"./accessors/markers/chart-docs-accessors-markers.component.html": "0EkY",
	"./accessors/markers/chart-docs-accessors-markers.component.ts": "ZDPj",
	"./accessors/markers/chart-docs-accessors-markers.module.ts": "JTeL",
	"./accessors/markers/custom-accessor/markers-custom-accessor.example.component.html": "bVjY",
	"./accessors/markers/custom-accessor/markers-custom-accessor.example.component.ts": "874e",
	"./accessors/markers/custom-provider/markers-custom-provider.example.component.html": "Efuy",
	"./accessors/markers/custom-provider/markers-custom-provider.example.component.ts": "7fPP",
	"./accessors/overview/chart-docs-accessors-overview.component.html": "Aa05",
	"./accessors/overview/chart-docs-accessors-overview.component.ts": "rNr/",
	"./accessors/overview/chart-docs-accessors-overview.module.ts": "Izli",
	"./chart-docs-advanced-usage.module.ts": "yJvD",
	"./chart-setup/chart-docs-chart-setup.component.html": "UCMR",
	"./chart-setup/chart-docs-chart-setup.component.ts": "IRIh",
	"./chart-setup/chart-docs-chart-setup.module.ts": "ztii",
	"./chart-setup/line-chart/line-chart.example.component.html": "Pxap",
	"./chart-setup/line-chart/line-chart.example.component.ts": "NXqR",
	"./events/chart-docs-events.component.html": "5wfK",
	"./events/chart-docs-events.component.ts": "SjNZ",
	"./events/chart-docs-events.module.ts": "aZDi",
	"./events/event-sampler/event-sampler.component.html": "unPA",
	"./events/event-sampler/event-sampler.component.less": "TdBD",
	"./events/event-sampler/event-sampler.component.ts": "qSaD",
	"./events/events-basic/events-basic-example.component.html": "6jeb",
	"./events/events-basic/events-basic-example.component.ts": "f8zi",
	"./grid-config/base-grid/chart-docs-base-grid.component.html": "zB9g",
	"./grid-config/base-grid/chart-docs-base-grid.component.ts": "r8lI",
	"./grid-config/base-grid/chart-docs-base-grid.module.ts": "jFy7",
	"./grid-config/base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.html": "Fl8W",
	"./grid-config/base-grid/disabling-interaction/base-grid-disabling-interaction.example.component.ts": "bJ8T",
	"./grid-config/base-grid/height-and-width/base-grid-height-and-width.example.component.html": "pOcv",
	"./grid-config/base-grid/height-and-width/base-grid-height-and-width.example.component.ts": "CyQ5",
	"./grid-config/base-grid/margins/base-grid-auto-margins.example.component.html": "u0jB",
	"./grid-config/base-grid/margins/base-grid-auto-margins.example.component.ts": "HAcT",
	"./grid-config/base-grid/margins/base-grid-margins.example.component.html": "ohXm",
	"./grid-config/base-grid/margins/base-grid-margins.example.component.ts": "/6ss",
	"./grid-config/base-grid/padding/base-grid-padding.example.component.html": "6nh+",
	"./grid-config/base-grid/padding/base-grid-padding.example.component.ts": "0BQA",
	"./grid-config/chart-docs-grid-config.module.ts": "rs1v",
	"./legend/chart-docs-legend-example.module.ts": "4/br",
	"./legend/index.ts": "Cj3G",
	"./legend/legend-active/legend-active.example.component.html": "/O2m",
	"./legend/legend-active/legend-active.example.component.ts": "Z4eM",
	"./legend/legend-basic/legend-basic.example.component.html": "P/Ik",
	"./legend/legend-basic/legend-basic.example.component.ts": "oGOk",
	"./legend/legend-compact/legend-compact.example.component.html": "aSCB",
	"./legend/legend-compact/legend-compact.example.component.ts": "UQCh",
	"./legend/legend-description-content-projection/legend-description-projection.example.component.html": "ZNmB",
	"./legend/legend-description-content-projection/legend-description-projection.example.component.ts": "ys1o",
	"./legend/legend-docs/legend-docs.example.component.html": "QBpC",
	"./legend/legend-docs/legend-docs.example.component.ts": "zIE5",
	"./legend/legend-horizontal/legend-horizontal.example.component.html": "TvWw",
	"./legend/legend-horizontal/legend-horizontal.example.component.ts": "6SvY",
	"./legend/legend-interactive/legend-interactive.example.component.html": "7x2n",
	"./legend/legend-interactive/legend-interactive.example.component.ts": "+9tC",
	"./legend/legend-metadata/legend-metadata-example.component.html": "1QZF",
	"./legend/legend-metadata/legend-metadata-example.component.ts": "0C3L",
	"./legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.html": "gjCY",
	"./legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.less": "swLD",
	"./legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.ts": "Ad9u",
	"./legend/legend-rich-tile/legend-rich-tile.example.component.html": "ghjL",
	"./legend/legend-rich-tile/legend-rich-tile.example.component.ts": "ooOc",
	"./legend/legend-test/legend-test.component.html": "pMRv",
	"./legend/legend-test/legend-test.component.ts": "akNU",
	"./legend/legend-text-color/legend-text-color.example.component.html": "qDJM",
	"./legend/legend-text-color/legend-text-color.example.component.ts": "ne+A",
	"./legend/legend-visual-test/legend-visual-test.component.html": "fZ1x",
	"./legend/legend-visual-test/legend-visual-test.component.less": "w51a",
	"./legend/legend-visual-test/legend-visual-test.component.ts": "cpli",
	"./scales/chart-docs-scales.component.html": "QKvx",
	"./scales/chart-docs-scales.component.ts": "Nmns",
	"./scales/chart-docs-scales.module.ts": "Goil",
	"./scales/domains/chart-docs-domains.component.html": "c7pr",
	"./scales/domains/chart-docs-domains.component.ts": "dNNE",
	"./scales/domains/chart-docs-domains.module.ts": "Z/rz",
	"./scales/domains/fixed-domains/fixed-domains.example.component.html": "VIrZ",
	"./scales/domains/fixed-domains/fixed-domains.example.component.ts": "vfx1",
	"./scales/formatters/chart-docs-formatters.component.html": "WdGD",
	"./scales/formatters/chart-docs-formatters.component.ts": "zmJ9",
	"./scales/formatters/chart-docs-formatters.module.ts": "Dzs2",
	"./scales/formatters/tick-formatter/tick-formatter.example.component.html": "nhCc",
	"./scales/formatters/tick-formatter/tick-formatter.example.component.ts": "dkyL"
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
webpackContext.id = "qggg";

/***/ }),

/***/ "r8lI":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { XYGridConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-chart-docs-base-grid\",\n    templateUrl: \"./chart-docs-base-grid.component.html\",\n})\nexport class ChartDocsBaseGridComponent {\n    public gridInstantiation = `const gridConfig = new XYGridConfig();\ngridConfig.dimension.padding.left = 20;\nthis.chart = new Chart(new XYGrid(gridConfig));\n...`;\n    public gridReconfiguration = `const gridConfig = new XYGridConfig();\ngridConfig.dimension.padding.left = 20;\nthis.chart.getGrid().config(gridConfig);\n...`;\n    public defaultMargins = XYGridConfig.DEFAULT_MARGIN;\n}\n");

/***/ }),

/***/ "rNr/":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/accessors/overview/chart-docs-accessors-overview.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-accessors-overview\",\n    templateUrl: \"./chart-docs-accessors-overview.component.html\",\n})\nexport class ChartDocsAccessorsOverviewComponent {\n}\n");

/***/ }),

/***/ "rs1v":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/chart-docs-grid-config.module.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"base-grid\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.module\")\n            .then(m => m.ChartDocsBaseGridModule),\n    },\n];\n\n@NgModule({\n    declarations: [],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsGridConfigModule {\n}\n");

/***/ }),

/***/ "swLD":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-rich-tile-content-projection/legend-rich-tile-content-projection.example.component.less ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"../../../../../../src/nui-charts.less\";\n\n.projected-value,\n.projected-unit-label {\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.projected-value {\n    font-weight: @nui-font-weight-semibold;\n    margin-bottom: -@nui-legend-series-content-margin;\n}\n\n.projected-unit-label {\n    font-size: @nui-font-size-small;\n    margin-top: -@nui-legend-series-content-margin;\n}\n");

/***/ }),

/***/ "u0jB":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/margins/base-grid-auto-margins.example.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n<nui-checkbox (valueChange)=\"toggleFit()\">Toggle Axis Fit</nui-checkbox>\n");

/***/ }),

/***/ "unPA":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/events/event-sampler/event-sampler.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name'] | titlecase\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div><hr>\n\n<div class=\"d-flex\">\n    <div class=\"d-flex align-items-center\">\n        <strong>Chart Type:</strong>\n        <nui-select class=\"ml-2\"\n                    [itemsSource]=\"chartTypes\"\n                    [value]=\"selectedChartType\"\n                    (changed)=\"updateChartType($event.newValue)\"></nui-select>\n    </div>\n\n    <div class=\"d-flex align-items-center ml-3\">\n        <strong>Event:</strong>\n        <nui-select [itemsSource]=\"eventFilters\"\n                    class=\"ml-2\"\n                    [value]=\"selectedEvent\"\n                    displayValue=\"name\"\n                    (changed)=\"onEventFilterChange($event.newValue)\"></nui-select>\n    </div>\n\n    <div *ngIf=\"!!selectedInteractionType\"\n        class=\"d-flex align-items-center ml-3\">\n        <strong>Interaction Type:</strong>\n        <nui-select class=\"ml-2\"\n                    [itemsSource]=\"selectedEvent.interactionTypes\"\n                    [value]=\"selectedInteractionType\"\n                    (changed)=\"onInteractionTypeChange($event.newValue)\"></nui-select>\n    </div>\n</div>\n\n<div class=\"mt-3 sampler-output__container\">\n    <pre>{{parsedEvent | json}}</pre>\n</div>\n");

/***/ }),

/***/ "vfx1":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/domains/fixed-domains/fixed-domains.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, IChartSeries, ILineAccessors, IScale, LineAccessors, LinearScale, LineRenderer, Scales, TimeScale, XYGrid, XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-chart-fixed-domains-example\",\n    templateUrl: \"./fixed-domains.example.component.html\",\n})\nexport class FixedDomainsExampleComponent implements OnInit {\n    public xScale: IScale<Date> = new TimeScale();\n    public yScale: IScale<number> = new LinearScale();\n\n    public chart: Chart;\n    private seriesSet: IChartSeries<ILineAccessors>[];\n    private format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    ngOnInit() {\n        const scales: Scales = {\n            x: this.xScale,\n            y: this.yScale,\n        };\n\n        // Default domain calculator\n        // scales.y.domainCalculator = getAutomaticDomain;\n\n        const gridConfig = new XYGridConfig();\n        gridConfig.axis.bottom.fit = true;\n        this.chart = new Chart(new XYGrid(gridConfig));\n\n        this.seriesSet = getData(this.format).map(d => ({\n            ...d,\n            scales,\n            accessors: new LineAccessors(),\n            renderer: new LineRenderer(),\n        }));\n\n        this.chart.update(this.seriesSet);\n        this.chart.updateDimensions();\n    }\n\n    public fixXDomain() {\n        const startDatetime = moment(\"2016-12-29T06:00:00.000Z\", this.format).toDate();\n        const endDatetime = moment(\"2017-01-04T06:00:00.000Z\", this.format).toDate();\n\n        this.xScale.fixDomain([startDatetime, endDatetime]);\n        this.chart.update(this.seriesSet);\n    }\n\n    public fixYDomain() {\n        this.yScale.fixDomain([0, 100]);\n        this.chart.update(this.seriesSet);\n    }\n\n    public resetDomains() {\n        this.xScale.isDomainFixed = false;\n        this.yScale.isDomainFixed = false;\n        this.chart.update(this.seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData(format: string) {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n    ];\n}\n");

/***/ }),

/***/ "w51a":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-visual-test/legend-visual-test.component.less ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"@nova-ui/bits/sdk/less/mixins/font-roboto.less\";\n\n.font-roboto();\n\n.text-style-roboto {\n    font-family: @font-family-roboto;\n}");

/***/ }),

/***/ "yJvD":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/chart-docs-advanced-usage.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"accessors\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/accessors/chart-docs-accessors.module\").then(m => m.ChartDocsAccessorsModule),\n    },\n    {\n        path: \"chart-setup\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.module\").then(m => m.ChartDocsChartSetupModule),\n    },\n    {\n        path: \"events\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/events/chart-docs-events.module\").then(m => m.ChartDocsEventsModule),\n    },\n    {\n        path: \"grid-config\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/grid-config/chart-docs-grid-config.module\").then(m => m.ChartDocsGridConfigModule),\n    },\n    {\n        path: \"legend\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/legend/chart-docs-legend-example.module\").then(m => m.ChartDocsLegendExampleModule),\n    },\n    {\n        path: \"scales\",\n        loadChildren: async () => import(\"components/demo/advanced-usage/scales/chart-docs-scales.module\").then(m => m.ChartDocsScalesModule),\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAdvancedUsageModule {\n}\n");

/***/ }),

/***/ "ys1o":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-description-content-projection/legend-description-projection.example.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CHART_MARKERS, CHART_PALETTE_CS1, SequentialChartMarkerProvider, SequentialColorProvider } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-legend-description-projection-example\",\n    templateUrl: \"legend-description-projection.example.component.html\",\n})\n\nexport class LegendDescriptionProjectionExampleComponent {\n    public firstSeriesId = \"1\";\n    public secondSeriesId = \"2\";\n\n    public colors = new SequentialColorProvider(CHART_PALETTE_CS1);\n    public markers = new SequentialChartMarkerProvider(CHART_MARKERS);\n\n    public active: boolean = false;\n\n    public toggleActive() {\n        this.active = !this.active;\n    }\n}\n");

/***/ }),

/***/ "zB9g":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/grid-config/base-grid/chart-docs-base-grid.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Grid Configuration</h1>\n\n<p>\n    A chart's grid is what defines the area in which the data visualization will be rendered. The grid definition\n    includes its dimensions such as margins, padding, height, and width. The grid also defines whether the\n    rendered content will be interactive. The basic grid is set up with a default configuration that should work for\n    the majority of cases. But, if any of the its configuration items need adjustment for your particular use case,\n    the following examples demonstrate how.\n</p>\n\n<h2>Basic Usage</h2>\n<p>\n    You can preconfigure a grid by by passing an\n    <code><a href=\"../interfaces/IGridConfig.html\" target=\"_blank\">IGridConfig</a></code> to the grid's constructor\n    and then pass the grid instance to the\n    <code><a href=\"../classes/Chart.html\" target=\"_blank\">Chart</a></code> class's constructor. The code snippets\n    on this page use the <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code> and\n    <code><a href=\"../classes/XYGridConfig.html\" target=\"_blank\">XYGridConfig</a></code> as an example.\n</p>\n<pre>{{gridInstantiation}}</pre>\n<p>\n    Alternately, you can change an existing grid instance's configuration by accessing it\n    via the chart's <code><a href=\"../classes/Chart.html#getGrid\" target=\"_blank\">getGrid</a></code>\n    method. The grid's configuration can then be set by passing a new\n    <code><a href=\"../interfaces/IGridConfig.html\" target=\"_blank\">IGridConfig</a></code> to its\n    <code><a href=\"../interfaces/IGrid.html#config\" target=\"_blank\">config</a></code> method.\n</p>\n<pre>{{gridReconfiguration}}</pre>\n\n<h2>Disabling Interaction</h2>\n<p>\n    To disable all user interaction on the chart set the grid configuration's <code>interactive</code> property to\n    <code>false</code>. If you hover over the example below, you can tell that interaction is disabled by the fact\n    that no interaction line is shown.\n</p>\n<nui-example-wrapper filenamePrefix=\"base-grid-disabling-interaction\"\n                     exampleTitle=\"Disabling Interaction\">\n    <nui-base-grid-disabling-interaction-example></nui-base-grid-disabling-interaction-example>\n</nui-example-wrapper>\n\n<h2>Dimensions</h2>\n<p>\n    To adjust the grid's margins, padding, height, and width, modify the <code>dimension</code> property\n    (<code><a href=\"../classes/DimensionConfig.html\" target=\"_blank\">DimensionConfig</a></code>) on the grid\n    configuration as described below.\n</p>\n\n<h3>Margins</h3>\n<p>\n    The grid's margins can be adjusted by setting the grid configuration's <code>dimension.margin</code> property\n    with an <code><a href=\"../interfaces/IAllAround.html\" target=\"_blank\">IAllAround&lt;number&gt;</a></code> value\n    or by setting one of the margin number values directly, e.g. <code>gridConfig.dimension.margin.top = 15</code>.\n</p>\n\n<p>\n    The default values for the XYGridConfig margin are:\n</p>\n<pre>{{defaultMargins | json}}</pre>\n<nui-example-wrapper filenamePrefix=\"base-grid-margins\"\n                     exampleTitle=\"Margins\">\n    <nui-base-grid-margins-example></nui-base-grid-margins-example>\n</nui-example-wrapper>\n<p>\n    In addition to being able to specify the grid's margins manually, you can set the grid to\n    automatically adjust its margins based on the tick label width. For example, set\n    <code>axis.bottom.fit</code> to true to adjust the grid's horizontal margins so that the bottom axis tick\n    labels are not cropped on the left or right. And, set <code>axis.left.fit</code> to true to adjust the\n    grid's left margin to prevent the left axis tick labels from getting cropped on their left side.\n</p>\n<nui-example-wrapper filenamePrefix=\"base-grid-auto-margins\"\n                     exampleTitle=\"Auto Margins\">\n    <nui-base-grid-auto-margins-example></nui-base-grid-auto-margins-example>\n</nui-example-wrapper>\n\n<h3>Padding</h3>\n<p>\n    The grid's padding can be adjusted by setting the grid configuration's\n    <code>dimension.padding</code> property with an\n    <code><a href=\"../interfaces/IAllAround.html\" target=\"_blank\">IAllAround&lt;number&gt;</a></code> value\n    or by setting one of the padding number values directly, e.g.\n    <code>gridConfig.dimension.padding.top = 15</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"base-grid-padding\"\n                     exampleTitle=\"Padding\">\n    <nui-base-grid-padding-example></nui-base-grid-padding-example>\n</nui-example-wrapper>\n\n<h3>Height and Width</h3>\n<p>\n    The grid's height and/or width can be adjusted by first setting the grid configuration's\n    <code>dimension.autoHeight</code> and/or <code>dimension.autoWidth</code> properties to false.\n    With auto-height and/or auto-width disabled, you can then use the\n    <code><a href=\"../classes/DimensionConfig.html#height\" target=\"_blank\">height</a></code> and\n    <code><a href=\"../classes/DimensionConfig.html#width\" target=\"_blank\">width</a></code> methods on the grid\n    configuration's <code>dimension</code> property to adjust the height and width.\n</p>\n<nui-example-wrapper filenamePrefix=\"base-grid-height-and-width-example\"\n                     exampleTitle=\"Height and Width\">\n    <nui-base-grid-height-and-width-example></nui-base-grid-height-and-width-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "zIE5":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/legend/legend-docs/legend-docs.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-legend-docs-example\",\n    templateUrl: \"./legend-docs.example.component.html\",\n})\nexport class LegendDocsExampleComponent {\n    public legendHtml = `<nui-legend-series (mouseenter)=\"chartAssist.emphasizeSeries(seriesId)\"\n       [seriesRenderState]=\"chartAssist.renderStatesIndex[seriesId]?.state\"\n       [isSelected]=\"!chartAssist.isSeriesHidden(seriesId)\"\n       (isSelectedChange)=\"chartAssist.toggleSeries(seriesId, $event)\">\n</nui-legend-series>`;\n}\n");

/***/ }),

/***/ "zmJ9":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/scales/formatters/chart-docs-formatters.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-formatters\",\n    templateUrl: \"./chart-docs-formatters.component.html\",\n})\nexport class ChartDocsFormattersComponent {\n    public customTicks = `scales.x.formatters.tick = (value: Number) => (Number(value).toFixed(2));\nscales.y.formatters.tick = (value: Number) => \\`> $\\{value\\} %\\`;\n...`;\n}\n");

/***/ }),

/***/ "ztii":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/advanced-usage/chart-setup/chart-docs-chart-setup.module.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsChartSetupComponent } from \"./chart-docs-chart-setup.component\";\nimport { LineChartExampleComponent } from \"./line-chart/line-chart.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsChartSetupComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"line-chart\",\n        component: LineChartExampleComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        LineChartExampleComponent,\n        ChartDocsChartSetupComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsChartSetupModule {\n}\n");

/***/ })

}]);
//# sourceMappingURL=components-demo-advanced-usage-chart-docs-advanced-usage-module-es2015.js.map