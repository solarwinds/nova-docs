(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-chart-types-chart-docs-chart-types-module"], {
    /***/
    "+NPZ":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-stack-percentage/area-chart-stack-percentage-example.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NPZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"Mbps\" i18n-seriesUnitLabel\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n\n                <!-- Specify 'undefined' for the formatter key since we're not applying any special formatting to the data values shown in the legend -->\n                <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', undefined, 'y1')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "/7IX":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-percentage/bar-chart-percentage.example.component.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales, BarTooltipsPlugin, Chart, ChartAssist, InteractionLabelPlugin, stack,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-percentage-example\",\n    templateUrl: \"./bar-chart-percentage.example.component.html\",\n})\nexport class BarChartPercentageExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public tooltipsPlugin = new BarTooltipsPlugin();\n    private mbpsUnit = $localize `Mbps`;\n\n    constructor() {\n    }\n\n    ngOnInit() {\n        this.chartAssist = new ChartAssist(new Chart(barGrid()), stack);\n\n        // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label\n        this.chartAssist.chart.addPlugin(new InteractionLabelPlugin());\n        this.chartAssist.chart.addPlugin(this.tooltipsPlugin);\n\n        const accessors = barAccessors();\n        // Note changed data accessor matching value.percentageValue instead of just value\n        // accessors.data.value = (data: any) => data.percentageValue;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n        const scales = barScales();\n\n        const dataSeriesSet = getData();\n\n        // TODO: make the calculation to be a part of data preprocessing\n\n        // Preprocess data to have both percentage and real values\n        // 1. Gather sum of all items per category\n        // const sums = dataSeriesSet.reduce((acc: number[], next: any) => acc.map((v: any, i: number) => v + next.data[i].value), [0, 0, 0, 0]);\n        // 2. Normalize data using the sum\n        // dataSeriesSet.forEach((dataSeries: any) => {\n        //     dataSeries.data.forEach((d: any, i: number) => {\n        //         d.percentageValue = d.value / sums[i] * 100;\n        //     });\n        // });\n\n        const chartSeriesSet = dataSeriesSet.map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(chartSeriesSet);\n    }\n\n    public getTitleFromDataPoint(dataPoint: any) {\n        // This generates content for a tooltip.\n        // Both seriesId and the data of the corresponding bar are available in the tooltip.\n        return `${dataPoint.seriesId}: ${dataPoint.data.value}${this.mbpsUnit} (${Math.round(dataPoint.data.percentageValue)}%)`;\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 167 },\n                { \"category\": \"Q2 2018\", \"value\": 122 },\n                { \"category\": \"Q3 2018\", \"value\": 141 },\n                { \"category\": \"Q4 2018\", \"value\": 66 },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 167 },\n                { \"category\": \"Q2 2018\", \"value\": 198 },\n                { \"category\": \"Q3 2018\", \"value\": 208 },\n                { \"category\": \"Q4 2018\", \"value\": 233 },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 167 },\n                { \"category\": \"Q2 2018\", \"value\": 15 },\n                { \"category\": \"Q3 2018\", \"value\": 208 },\n                { \"category\": \"Q4 2018\", \"value\": 123 },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 11 },\n                { \"category\": \"Q2 2018\", \"value\": 99 },\n                { \"category\": \"Q3 2018\", \"value\": 17 },\n                { \"category\": \"Q4 2018\", \"value\": 25 },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 121 },\n                { \"category\": \"Q2 2018\", \"value\": 222 },\n                { \"category\": \"Q3 2018\", \"value\": 319 },\n                { \"category\": \"Q4 2018\", \"value\": 328 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "/8ED":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-area-multiple/spark-chart-area-multiple.example.component.html ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ED(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn\">\n    <nui-chart class=\"d-flex\" [chart]=\"spark.chart\" nuiChartCollectionId=\"example-collection-id\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "0Gka":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.html ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gka(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, Mbps</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"false\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.name\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.value}}</span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "0Rf4":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-time-interval/bar-chart-time-interval.example.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Rf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "0X5f":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.html ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X5f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "0txK":
    /*!*****************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.html ***!
      \*****************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function txK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "13F8":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/chart-docs-chart-types.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"bar\",\n        loadChildren: () => import(\"./bar/chart-docs-bar.module\").then(m => m.ChartDocsBarModule),\n    },\n    {\n        path: \"bucketed-bar\",\n        loadChildren: () => import(\"./bucketed-bar/chart-docs-bucketed-bar.module\").then(m => m.ChartDocsBucketedBarModule),\n    },\n    {\n        path: \"line\",\n        loadChildren: () => import(\"./line/chart-docs-line.module\").then(m => m.ChartDocsLineModule),\n    },\n    {\n        path: \"pie-and-donut\",\n        loadChildren: () => import(\"./pie-and-donut/chart-docs-pie-and-donut.module\").then(m => m.ChartDocsPieAndDonutModule),\n    },\n    {\n        path: \"spark\",\n        loadChildren: () => import(\"./spark/chart-docs-spark.module\").then(m => m.ChartDocsSparkModule),\n    },\n    {\n        path: \"gauge\",\n        loadChildren: () => import(\"./gauge/chart-docs-gauge.module\").then(m => m.ChartDocsGaugeModule),\n    },\n    {\n        path: \"status\",\n        loadChildren: () => import(\"./status/chart-docs-status.module\").then(m => m.ChartDocsStatusModule),\n    },\n    {\n        path: \"waterfall\",\n        loadChildren: () => import(\"./waterfall/chart-docs-waterfall.module\").then(m => m.ChartDocsWaterfallModule),\n    },\n    {\n        path: \"area\",\n        loadChildren: () => import(\"./area/chart-docs-area.module\").then(m => m.ChartDocsAreaModule),\n    },\n];\n\n@NgModule({\n    declarations: [],\n    imports: [\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsChartTypesModule {\n}\n";
      /***/
    },

    /***/
    "1Aus":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-with-legend/bar-chart-with-legend.example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Aus(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"legendSeries.data[0]\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "1v3Y":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-time-scale/bar-chart-time-scale.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function v3Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "2+7X":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-variable-baseline/area-chart-variable-baseline-example.component.html ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "2DII":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/chart-docs-gauge.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n@Component({\n    selector: \"nui-chart-docs-gauge\",\n    templateUrl: \"./chart-docs-gauge.component.html\",\n})\nexport class ChartDocsGaugeComponent {\n}\n";
      /***/
    },

    /***/
    "2Th4":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-with-content/donut-gauge-with-content-example.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Th4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex flex-column align-items-center\">\n    <div class=\"d-flex\">\n        <nui-chart class=\"chart\" [chart]=\"chartAssist.chart\"></nui-chart>\n\n        <nui-chart-donut-content style=\"position: absolute;\"\n                                 [plugin]=\"contentPlugin\">\n            <div class=\"h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center\">\n                <div class=\"d-inline-block\" nuiZoomContent [zoomRatio]=\"0.65\">\n                    {{gaugeConfig.value | number:'1.0-0'}}\n                </div>\n                <div class=\"content-label\">Network Latency</div>\n                <div class=\"content-label\">(ms)</div>\n            </div>\n        </nui-chart-donut-content>\n    </div>\n    <nui-form-field caption=\"Value\"\n                    [showOptionalText]=\"false\">\n        <nui-textbox-number type=\"number\"\n                            [ngModel]=\"gaugeConfig.value\"\n                            (ngModelChange)=\"onValueChange($event)\"\n                            [minValue]=\"0\"\n                            [maxValue]=\"gaugeConfig.max\"\n                            customBoxWidth=\"75px\"></nui-textbox-number>\n    </nui-form-field>\n</div>\n";
      /***/
    },

    /***/
    "2Waz":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-legend/line-chart-with-legend.example.component.ts ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Waz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-line-chart-with-legend-example\",\n    templateUrl: \"./line-chart-with-legend.example.component.html\",\n})\nexport class LineChartWithLegendExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit() {\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "2kIB":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/chart-docs-bar.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Bar Charts</h1>\n\n<p>\n    A bar chart is a graph that presents categorical data with rectangular bars whose heights or lengths, depending\n    on orientation, are proportional to the values that they represent.\n</p>\n<p>\n    A bar graph shows comparisons among <b>discrete categories</b>. One axis of the chart shows the specific\n    categories being compared, and the other axis represents the measured value. Advanced types of bar charts can be\n    clustered in groups of more than one, showing the values of more than one measured variable. Examples of this\n    include Grouped Bar charts and Stacked Bar charts (not covered in the scope of this page).\n</p>\n\n<h2>Prerequisites</h2>\n<p>\n    For any bar chart you will need:\n</p>\n<ol>\n    <li>\n        <strong>Grid.</strong> Just use good old\n        <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code> with\n        <code><a href=\"../classes/BarGridConfig.html\" target=\"_blank\">BarGridConfig</a></code> or\n        <code><a href=\"../classes/BarHorizontalGridConfig.html\" target=\"_blank\">BarHorizontalGridConfig</a></code>.\n        To make it easier we provide you with a convenience function\n        <code><a href=\"../miscellaneous/functions.html#barGrid\" target=\"_blank\">barGrid</a></code> that will create an\n        instance for you.\n    </li>\n    <li>\n        <strong>Accessors.</strong> There are pre-configured\n        <code><a href=\"../classes/HorizontalBarAccessors.html\" target=\"_blank\">HorizontalBarAccessors</a></code> or\n        <code><a href=\"../classes/VerticalBarAccessors.html\" target=\"_blank\">VerticalBarAccessors</a></code> that you\n        can use. And, the\n        <code><a href=\"../miscellaneous/functions.html#barAccessors\" target=\"_blank\">barAccessors</a></code> function\n        that will create one for you.\n    </li>\n    <li>\n        <strong>Renderer.</strong> Create an instance of the\n        <code><a href=\"../classes/BarRenderer.html\" target=\"_blank\">BarRenderer</a></code>.\n        When instantiating the <code>BarRenderer</code>, you can optionally pass a configuration object of type\n        <code><a href=\"../interfaces/IBarRendererConfig.html\" target=\"_blank\">IBarRendererConfig</a></code>\n        to make certain modifications to the behavior of the chart.\n    </li>\n    <li>\n        <strong>Scales.</strong> For the \"category\" axis you should use a band-ish scale. For the opposite axis with \"values\"\n        any supported scale should work.\n        Our <code><a href=\"../miscellaneous/functions.html#barScales\" target=\"_blank\">barScales</a></code> function\n        returns the proper combination of\n        <code><a href=\"../classes/BandScale.html\" target=\"_blank\">BandScale</a></code> vs a value scale\n        (<code><a href=\"../classes/LinearScale.html\" target=\"_blank\">LinearScale</a></code> by default) according to the provided\n        configuration.\n    </li>\n</ol>\n\n<h2>Basic Usage</h2>\n<p>\n    There are many possible scenarios of data visualization using a bar chart, but the simplest one is visualizing values divided among several\n    unstructured categories. In this use case, we configure the chart using our convenience methods that provide defaults for generic use cases. In this\n    case, the chart dimension is defined by a\n    <code><a href=\"../classes/LinearScale.html\" target=\"_blank\">LinearScale</a></code> on the <code>y</code> axis representing the values and\n    <code><a href=\"../classes/BandScale.html\" target=\"_blank\">BandScale</a></code> on the <code>x</code> axis representing the categories. Grid margins and\n    labels are set up properly and most importantly, a proper data accessors implementation translates the input data into an appropriate coordinate system. All\n    that happens right in front of your eyes in the following example, where all the complexity has been hidden behind the convenience functions.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart\"\n                     exampleTitle=\"Basic Usage\">\n    <nui-bar-chart-example></nui-bar-chart-example>\n</nui-example-wrapper>\n\n<h2>Orientation</h2>\n\n<p>\n    For switching the orientation of a bucketed bar chart layout you'll need a different grid configuration, set of scales,\n    accessors, and plugin configurations. Or, if you're using convenience functions, just pass an\n    <code><a href=\"../interfaces/IBarChartConfig.html\" target=\"_blank\">IBarChartConfig</a></code>\n    object with the <code>horizontal</code> property set to <code>true</code>.\n\n<pre>{{horizontalConfig}}</pre>\n\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    If no configuration is passed - a vertical layout will be applied by default.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"bar-chart-horizontal\"\n                     exampleTitle=\"Horizontal Orientation\">\n    <nui-bar-chart-horizontal-example></nui-bar-chart-horizontal-example>\n</nui-example-wrapper>\n\n<h2>Legend</h2>\n<p>\n    Adding a legend to the chart is the same as with other chart types. The usage of\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code> is really recommended here.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart-with-legend\"\n                     exampleTitle=\"Adding a Legend\">\n    <nui-bar-chart-with-legend-example></nui-bar-chart-with-legend-example>\n</nui-example-wrapper>\n\n<h2>Time Interval</h2>\n<p>\n    The discrete categories used for value comparison can also take the form of time intervals in which each value of\n    a data set is visualized as a bar within a time interval. To create a bar visualization over a series of time\n    intervals, you can set the scale for the x-axis to an instance of  <a href=\"../classes/TimeIntervalScale.html\" target=\"_blank\"><code>TimeIntervalScale</code></a> and pass\n    the desired interval of type moment <a href=\"https://momentjs.com/docs/#/durations/\" target=\"_blank\"><code>Duration</code> </a> to the <a href=\"../classes/TimeIntervalScale.html\" target=\"_blank\"><code>TimeIntervalScale</code></a>'s constructor.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart-time-interval\"\n                     exampleTitle=\"Time Interval\">\n    <nui-bar-chart-time-interval-example></nui-bar-chart-time-interval-example>\n</nui-example-wrapper>\n\n<h2>Tooltips</h2>\n<p>\n    For information about how to add tooltips to bar charts, take a look at the\n    <a href=\"../additional-documentation/plugins/tooltips.html\" target=\"_parent\">tooltips</a> page.\n</p>\n\n<h2>Popovers</h2>\n<p>\n    For information about how to add popovers to bar charts, take a look at the\n    <a href=\"../additional-documentation/plugins/popovers.html\" target=\"_parent\">popovers</a> page.\n</p>\n";
      /***/
    },

    /***/
    "36JG":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.ts ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, barAccessors, barGrid, BarHighlightStrategy, BarRenderer, Chart, ChartAssist, IBarChartConfig, INTERACTION_DATA_POINTS_EVENT, LinearScale,\n    Scales, SELECT_DATA_POINT_EVENT,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-grouped-horizontal-bar-chart-test\",\n    templateUrl: \"./grouped-horizontal-bar-chart-test.component.html\",\n})\n\nexport class GroupedHorizontalBarChartTestComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public barConfig: IBarChartConfig = { horizontal: true };\n\n    ngOnInit() {\n        const chart = new Chart(barGrid(this.barConfig));\n        this.chartAssist = new ChartAssist(chart);\n\n        const accessors = barAccessors(this.barConfig, this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        // Both category and sub-category need to be defined to properly draw groups.\n        accessors.data.category = (data: any) => [data.name, data.subCategory];\n\n        const bandScale = new BandScale().reverse();\n        bandScale.padding(0.25); // TODO: fix!!!\n        bandScale.innerScale = new BandScale();\n\n        const scales: Scales = {\n            x: new LinearScale(),\n            y: bandScale,\n        };\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n\n        const mappedSeries = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Sample events that can be used in order to handle click or highlighting of certain status\n        chart.getEventBus().getStream(INTERACTION_DATA_POINTS_EVENT).subscribe(console.log);\n        chart.getEventBus().getStream(SELECT_DATA_POINT_EVENT).subscribe(console.log);\n\n        this.chartAssist.update(mappedSeries);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 122,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 141,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 66,\n                },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 198,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 233,\n                },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Edinburgh\",\n                    \"value\": 167,\n                },\n                // sparse data is handled as well\n                // {\n                //     \"name\": \"Q2 2018\",\n                //     \"subCategory\": \"Edinburgh\",\n                //     \"value\": 15,\n                // },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Edinburgh\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Edinburgh\",\n                    \"value\": 123,\n                },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 11,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 99,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 17,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 25,\n                },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 121,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 222,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 319,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 328,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "3EEk":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/pie-chart-test/pie-chart-test.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-pie-chart-basic-test\">\n    <nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "3Isn":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Isn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart [style.height.px]=\"size\" [style.width.px]=\"size\" class=\"d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n\n    <nui-chart-donut-content style=\"position: absolute;\"\n                             [plugin]=\"contentPlugin\">\n        <div class=\"h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center\">\n            <div class=\"d-inline-block\" nuiZoomContent [zoomRatio]=\"0.65\">\n                {{gaugeConfig.value | number:'1.0-0'}}\n            </div>\n            <div class=\"content-label\">Network Latency</div>\n            <div class=\"content-label\">(ms)</div>\n        </div>\n    </nui-chart-donut-content>\n</div>\n";
      /***/
    },

    /***/
    "3OzY":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-variable-baseline/area-chart-variable-baseline-example.component.ts ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OzY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { AreaAccessors, areaGrid, AreaRenderer, Chart, IAreaAccessors, IChartSeries, IXYScales, LinearScale, TimeScale } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-variable-baseline-example\",\n    templateUrl: \"./area-chart-variable-baseline-example.component.html\",\n})\nexport class AreaChartVariableBaselineExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements\n        const grid = areaGrid();\n        // set the 'axis.left.fit' property to 'true' to accommodate the extra width required by the negative sign on the left axis labels\n        grid.config().axis.left.fit = true;\n        // pass the configured grid to the chart's constructor\n        this.chart = new Chart(grid);\n\n        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new AreaAccessors();\n        // 'x' defines access for values in the data that correspond to the horizontal axis\n        accessors.data.x = (d) => d.timeStamp;\n        // 'y0' defines access to the baseline values we want to visualize, in other words, where the area starts\n        accessors.data.y0 = (d) => d.start;\n        // 'y1' defines access to the top line values we want to visualize, in other words, where the area ends\n        accessors.data.y1 = (d) => d.end;\n\n        // The area renderer will make the chart look like an area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of a area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Fixing the domain is optional.\n        scales.y.fixDomain([-100, 100]);\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartSeries<IAreaAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Finally, pass the series set to the chart's update method.\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { timeStamp: moment(\"2016-12-25T11:45:29.909Z\", format), start: -58, end: 12 },\n                { timeStamp: moment(\"2016-12-25T12:10:29.909Z\", format), start: -5, end: 65 },\n                { timeStamp: moment(\"2016-12-25T12:50:29.909Z\", format), start: -40, end: 30 },\n                { timeStamp: moment(\"2016-12-25T13:15:29.909Z\", format), start: -30, end: 40 },\n                { timeStamp: moment(\"2016-12-25T13:40:29.909Z\", format), start: -10, end: 60 },\n                { timeStamp: moment(\"2016-12-25T13:55:29.909Z\", format), start: -47, end: 23 },\n                { timeStamp: moment(\"2016-12-25T14:20:29.909Z\", format), start: -58, end: 12 },\n                { timeStamp: moment(\"2016-12-25T14:40:29.909Z\", format), start: 0, end: 70 },\n                { timeStamp: moment(\"2016-12-25T15:00:29.909Z\", format), start: -25, end: 45 },\n                { timeStamp: moment(\"2016-12-25T15:25:29.909Z\", format), start: -20, end: 50 },\n                { timeStamp: moment(\"2016-12-25T15:45:29.909Z\", format), start: 5, end: 75 },\n                { timeStamp: moment(\"2016-12-25T16:10:29.909Z\", format), start: -20, end: 50 },\n                { timeStamp: moment(\"2016-12-25T16:30:29.909Z\", format), start: 15, end: 85 },\n                { timeStamp: moment(\"2016-12-25T16:45:29.909Z\", format), start: -15, end: 55 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "3azN":
    /*!*******************************************************************************!*\
      !*** ./examples/components/demo/chart-types/chart-docs-chart-types.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ChartDocsChartTypesModule */

    /***/
    function azN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartDocsChartTypesModule", function () {
        return ChartDocsChartTypesModule;
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

      var exampleRoutes = [{
        path: "bar",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bar-chart-docs-bar-module */
          [__webpack_require__.e("common"), __webpack_require__.e("bar-chart-docs-bar-module")]).then(__webpack_require__.bind(null,
          /*! ./bar/chart-docs-bar.module */
          "5xc8")).then(function (m) {
            return m.ChartDocsBarModule;
          });
        }
      }, {
        path: "bucketed-bar",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bucketed-bar-chart-docs-bucketed-bar-module */
          [__webpack_require__.e("common"), __webpack_require__.e("bucketed-bar-chart-docs-bucketed-bar-module")]).then(__webpack_require__.bind(null,
          /*! ./bucketed-bar/chart-docs-bucketed-bar.module */
          "kjNC")).then(function (m) {
            return m.ChartDocsBucketedBarModule;
          });
        }
      }, {
        path: "line",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | line-chart-docs-line-module */
          [__webpack_require__.e("common"), __webpack_require__.e("line-chart-docs-line-module")]).then(__webpack_require__.bind(null,
          /*! ./line/chart-docs-line.module */
          "c9IB")).then(function (m) {
            return m.ChartDocsLineModule;
          });
        }
      }, {
        path: "pie-and-donut",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pie-and-donut-chart-docs-pie-and-donut-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pie-and-donut-chart-docs-pie-and-donut-module")]).then(__webpack_require__.bind(null,
          /*! ./pie-and-donut/chart-docs-pie-and-donut.module */
          "tvJs")).then(function (m) {
            return m.ChartDocsPieAndDonutModule;
          });
        }
      }, {
        path: "spark",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | spark-chart-docs-spark-module */
          "spark-chart-docs-spark-module").then(__webpack_require__.bind(null,
          /*! ./spark/chart-docs-spark.module */
          "+2hk")).then(function (m) {
            return m.ChartDocsSparkModule;
          });
        }
      }, {
        path: "gauge",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | gauge-chart-docs-gauge-module */
          [__webpack_require__.e("common"), __webpack_require__.e("gauge-chart-docs-gauge-module")]).then(__webpack_require__.bind(null,
          /*! ./gauge/chart-docs-gauge.module */
          "yAut")).then(function (m) {
            return m.ChartDocsGaugeModule;
          });
        }
      }, {
        path: "status",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | status-chart-docs-status-module */
          [__webpack_require__.e("common"), __webpack_require__.e("status-chart-docs-status-module")]).then(__webpack_require__.bind(null,
          /*! ./status/chart-docs-status.module */
          "6p0O")).then(function (m) {
            return m.ChartDocsStatusModule;
          });
        }
      }, {
        path: "waterfall",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | waterfall-chart-docs-waterfall-module */
          [__webpack_require__.e("common"), __webpack_require__.e("waterfall-chart-docs-waterfall-module")]).then(__webpack_require__.bind(null,
          /*! ./waterfall/chart-docs-waterfall.module */
          "68rf")).then(function (m) {
            return m.ChartDocsWaterfallModule;
          });
        }
      }, {
        path: "area",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | area-chart-docs-area-module */
          [__webpack_require__.e("common"), __webpack_require__.e("area-chart-docs-area-module")]).then(__webpack_require__.bind(null,
          /*! ./area/chart-docs-area.module */
          "V3MY")).then(function (m) {
            return m.ChartDocsAreaModule;
          });
        }
      }];

      var ChartDocsChartTypesModule = function ChartDocsChartTypesModule() {
        _classCallCheck(this, ChartDocsChartTypesModule);
      };

      ChartDocsChartTypesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("PVrp");
          }
        }]
      })], ChartDocsChartTypesModule);
      /***/
    },

    /***/
    "3dis":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.ts ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    calculateMissingData,\n    Chart,\n    ChartAssist,\n    IChartAssistSeries,\n    IChartSeries,\n    ILineAccessors,\n    IXYScales,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    MissingDataLineRendererConfig,\n    TimeIntervalScale,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport { duration } from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-interrupted-calculated-example\",\n    templateUrl: \"./line-chart-interrupted-calculated-example.component.html\",\n})\nexport class LineChartInterruptedCalculatedExampleComponent implements OnInit {\n    // XYGrid is used for rendering axes as well as other grid elements\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit() {\n        // In case of a line chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const interval = duration(1, \"hour\");\n        const xScale = new TimeIntervalScale(interval);\n        const scales: IXYScales = {\n            x: xScale,\n            y: new LinearScale(),\n        };\n\n        const incomingSeries = getData();\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartAssistSeries<ILineAccessors>[] = [];\n\n        // The line renderer will make the chart look like a line chart.\n        const renderer = new LineRenderer();\n        // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        // Renderer for the missing dataSeries\n        const rendererMissing = new LineRenderer(new MissingDataLineRendererConfig());\n        const accessorsMissing = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        // Link the colors from 'parent' series\n        const origColorAccessor = accessorsMissing.series.color;\n        accessorsMissing.series.color = (seriesId, series) => origColorAccessor?.(seriesId.split(\"__\")[0], series);\n\n        // We need to store the original value of the 'defined' accessor\n        const origDefinedAccessor = accessorsMissing.data.defined;\n        // We're calling the original 'defined' accessor implementation, but inverting it's logic because, from the missing data\n        // series point of view, the undefined data are actually visualized as defined.\n        accessorsMissing.data.defined = (d, i, data, dataSeries) =>\n            !origDefinedAccessor?.(d, i, data, dataSeries) ?? true;\n\n        for (const s of incomingSeries) {\n            // The first data series is for rendering the valid data\n            const cs: IChartSeries<ILineAccessors> = {\n                ...s,\n                accessors,\n                renderer,\n                scales,\n            };\n            // We're using this convenience function to calculate the missing data according to the scale's interval\n            const data = calculateMissingData(cs, \"x\", xScale.interval());\n            // We have to use data that includes the missing data points for the first series as well\n            cs.data = data;\n            seriesSet.push(cs);\n\n            // This series will be used to visualize the missing data points\n            seriesSet.push({\n                // This naming convention will connect these two series and their interaction will be synchronized\n                id: s.id + \"__missing\",\n                data: data,\n                accessors: accessorsMissing,\n                renderer: rendererMissing,\n                scales,\n                showInLegend: false, // We don't want to show this in the legend\n            });\n        }\n\n        // Finally, pass the series set to the chart's update method\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: new Date(2016, 11, 25, 5), y: 30 },\n                { x: new Date(2016, 11, 25, 6), y: 95 },\n                { x: new Date(2016, 11, 25, 7), y: 60 },\n                { x: new Date(2016, 11, 25, 10), y: 75 },\n                { x: new Date(2016, 11, 25, 12), y: 35 },\n                { x: new Date(2016, 11, 25, 13), y: 20 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "3me9":
    /*!*********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.less ***!
      \*********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function me9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n    height: 250px;\n    width: 250px;\n}\n";
      /***/
    },

    /***/
    "4H1E":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-test/waterfall-chart-test.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H1E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"waterfall-chart-test-component\",\n    templateUrl: \"./waterfall-chart-test.component.html\",\n})\n\nexport class WaterfallChartTestComponent {\n}\n";
      /***/
    },

    /***/
    "4T4B":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-multiple/spark-chart-multiple.example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T4B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IChartAssistSeries, ILineAccessors, LineAccessors, LinearScale, LineRenderer, SparkChartAssist, TimeScale } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-spark-chart-multiple-example\",\n    templateUrl: \"./spark-chart-multiple.example.component.html\",\n})\nexport class SparkChartMultipleExampleComponent implements OnInit {\n    public chartAssist: SparkChartAssist;\n\n    public ngOnInit() {\n        // spark chart setup\n        this.chartAssist = new SparkChartAssist();\n\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n\n        const seriesSet: IChartAssistSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales: {\n                // using the same scale id for the x-axes is necessary to achieve synchronized hover interaction between charts\n                // - sharing the same instance of the scale would work as well\n                x: new TimeScale(\"shared-id\"),\n                y: new LinearScale(),\n            },\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"spark-series-1\",\n            name: \"Tex-lab-aus-2621\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 85 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 57 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 99 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 75 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 55 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 73 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 30 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 77 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 57 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 61 },\n            ],\n        },\n        {\n            id: \"spark-series-2\",\n            name: \"Cz-lab-brn-02\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 93 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 71 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 85 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 54 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 79 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 64 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 49 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 70 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 59 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 76 },\n            ],\n        },\n        {\n            id: \"spark-series-3\",\n            name: \"Ua-lab-kie-03\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 60 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 75 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 42 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 84 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 41 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 50 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 56 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 44 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 75 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 48 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "4fWi":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-with-content/donut-gauge-with-content-example.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fWi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    ChartDonutContentPlugin,\n    DonutGaugeLabelsPlugin,\n    GaugeMode,\n    GaugeUtil,\n    IAccessors,\n    IChartAssistSeries,\n    IGaugeConfig,\n    radial,\n    radialGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"donut-gauge-with-content-example\",\n    templateUrl: \"./donut-gauge-with-content-example.component.html\",\n    styleUrls: [\"./donut-gauge-with-content-example.component.less\"],\n})\nexport class DonutGaugeWithContentExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public contentPlugin: ChartDonutContentPlugin;\n    public gaugeConfig: IGaugeConfig;\n\n    private seriesSet: IChartAssistSeries<IAccessors>[];\n\n    public ngOnInit() {\n        // Setting up the gauge config\n        const initialValue = 128;\n        this.gaugeConfig = this.getGaugeConfig(initialValue);\n\n        // Creating the chart\n        this.chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n\n        // Adding the plugin for the inner content\n        this.contentPlugin = new ChartDonutContentPlugin();\n        this.chartAssist.chart.addPlugin(this.contentPlugin);\n\n        // Adding the labels plugin\n        this.chartAssist.chart.addPlugin(new DonutGaugeLabelsPlugin());\n\n        // Assembling the series\n        this.seriesSet = GaugeUtil.assembleSeriesSet(this.gaugeConfig, GaugeMode.Donut);\n\n        // Updating the chart\n        this.chartAssist.update(this.seriesSet);\n    }\n\n    public onValueChange(value: number) {\n        // Updating the gauge config\n        this.gaugeConfig = this.getGaugeConfig(value);\n\n        // Updating the series set with the new config\n        this.seriesSet = GaugeUtil.updateSeriesSet(this.seriesSet, this.gaugeConfig);\n\n        // Updating the chart with the updated series set\n        this.chartAssist.update(this.seriesSet);\n    }\n\n    private getGaugeConfig(value: number): IGaugeConfig {\n        return {\n            value,\n            max: 200,\n            thresholds: [100, 158],\n            enableThresholdMarkers: true,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "5b7l":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Left axis label</strong></div>\n    <div class=\"axis-label-right nui-text-small\"><strong i18n>Right axis label</strong></div>\n    <div class=\"axis-label-bottom nui-text-small\"><strong i18n>Bottom axis label</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "5qbj":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-stack/area-chart-stack-example.component.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qbj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    areaGrid,\n    AreaRenderer,\n    Chart,\n    ChartAssist,\n    IAreaAccessors,\n    IChartSeries,\n    IXYScales,\n    LinearScale,\n    stackedArea,\n    stackedAreaAccessors,\n    TimeScale,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-stack-example\",\n    templateUrl: \"./area-chart-stack-example.component.html\",\n})\nexport class AreaChartStackExampleComponent implements OnInit {\n    public chart: Chart;\n    public chartAssist: ChartAssist;\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.\n        this.chart = new Chart(areaGrid());\n        // ChartAssist will use the preprocessor to stack the series' numeric values on the same progression domain\n        this.chartAssist = new ChartAssist(this.chart, stackedArea);\n\n        // Stacked Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors =  stackedAreaAccessors();\n        // 'y1' defines access to the numeric values we want to visualize.\n        // The items in the data array of this example have a property named 'value',so we'll use that.\n        accessors.data.y1 = (d) => d.value;\n\n        // The area renderer will make the chart look like a area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of a area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartSeries<IAreaAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Finally, pass the series set to the chart's update method\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 6 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 33 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 15 },\n                { x: moment(\"2016-12-25T13:15:29.909Z\", format), value: 20 },\n                { x: moment(\"2016-12-25T13:40:29.909Z\", format), value: 30 },\n                { x: moment(\"2016-12-25T13:55:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T14:20:29.909Z\", format), value: 6 },\n                { x: moment(\"2016-12-25T14:40:29.909Z\", format), value: 35 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 23 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 25 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 38 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 25 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 43 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 28 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 65 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 30 },\n                { x: moment(\"2016-12-25T13:15:29.909Z\", format), value: 40 },\n                { x: moment(\"2016-12-25T13:40:29.909Z\", format), value: 60 },\n                { x: moment(\"2016-12-25T13:55:29.909Z\", format), value: 23 },\n                { x: moment(\"2016-12-25T14:20:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 45 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 50 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 75 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 50 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 85 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 55 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "61M4":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\" [style.min-height.px]=\"'500'\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"false\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.name\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "62iK":
    /*!***************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.ts ***!
      \***************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales,\n    Chart, ChartAssist, IBarAccessors, IBarChartConfig, IChart, IChartSeries, XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-tick-label-max-width-with-margin-test\",\n    templateUrl: \"./bar-chart-tick-label-max-width-with-margin-test.component.html\",\n})\nexport class BarChartTickLabelMaxWidthWithMarginTestComponent implements OnInit {\n    public chart: IChart;\n    public chartAssist: ChartAssist;\n    public ngOnInit() {\n        const config: IBarChartConfig = { horizontal: true };\n        const accessors = barAccessors(config);\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n        const scales = barScales(config);\n        \n        this.chart = new Chart(barGrid(config));\n        this.chartAssist = new ChartAssist(this.chart);\n\n        const gridConfig = this.chart.getGrid().config() as XYGridConfig;\n        gridConfig.axis.left.fit = false;\n        gridConfig.dimension.margin.left = 100;\n        gridConfig.axis.left.tickLabel.maxWidth = 50;\n\n        const seriesSet: IChartSeries<IBarAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Long Name Test Long Name Test\",\n            data: [20],\n        },\n        {\n            id: \"series-2\",\n            name: \"Results\",\n            data: [80],\n        },\n        {\n            id: \"series-3\",\n            name: \"Supercalifragilisticexpialidocious\",\n            data: [45],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "7D5C":
    /*!***************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart-with-content/donut-chart-with-content.example.component.html ***!
      \***************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D5C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"p-5 col-6\">\n        <div class=\"nui-chart-layout\">\n            <div class=\"chart has-overlay\">\n                <nui-chart class=\"flex-fill\" [chart]=\"chartAssist1.chart\"></nui-chart>\n                <div class=\"overlay flex-column\">\n                    <div class=\"nui-text-page\">{{ series.map(value).join(\" / \") }}</div>\n                    <div class=\"nui-text-secondary\">{{ series.map(name).join(\" / \") }}</div>\n                </div>\n            </div>\n            <div class=\"axis-label-bottom nui-text-small\" i18n><strong>'overlay' class</strong></div>\n        </div>\n    </div>\n    <div class=\"p-5 col-6\">\n        <div class=\"nui-chart-layout\">\n            <div class=\"chart has-overlay\">\n                <nui-chart class=\"flex-fill\" [chart]=\"chartAssist2.chart\"></nui-chart>\n                <nui-chart-donut-content [plugin]=\"contentPlugin\">\n                    <div class=\"nui-text-page\">80%</div>\n                    <div class=\"nui-text-secondary\" i18n>of this donut is blue</div>\n                </nui-chart-donut-content>\n            </div>\n            <div class=\"axis-label-bottom nui-text-small\" i18n><strong>'nui-chart-donut-content' with plugin</strong></div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "7LK1":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/chart-docs-bar.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LK1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-bar\",\n    templateUrl: \"./chart-docs-bar.component.html\",\n})\nexport class ChartDocsBarComponent {\n    public horizontalConfig = `public config = { horizontal: true } as IBarChartConfig;\n...\n... barGrid(this.config) ...\n... barScales(this.config) ...\n... barAccessors(this.config) ...`;\n}\n";
      /***/
    },

    /***/
    "7yfv":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart-interactive/donut-chart-interactive.example.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yfv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name'] | titlecase\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"legendSeries.data[0]?.value\"\n                                      backgroundColor=\"transparent\">\n                </nui-rich-legend-tile>\n                <nui-icon [icon]=\"'status_' + legendSeries['name']\"></nui-icon>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "8Y2C":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart-test/donut-chart-test.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Y2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-donut-chart-basic-test\">\n    <div class=\"d-flex flex-column\" [style.height]=\"'150px'\">\n        <div class=\"d-flex flex-fill w-100 h-100\" style=\"position: relative;\">\n            <nui-chart class=\"flex-fill w-100 h-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n            <nui-chart-donut-content [plugin]=\"contentPlugin\">\n                <div class=\"nui-text-page\">57</div>\n                <div class=\"nui-text-secondary\">donuts</div>\n            </nui-chart-donut-content>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "8a5L":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-basic/line-chart-basic.example.component.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function a5L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { Chart, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-line-chart-basic-example\",\n    templateUrl: \"./line-chart-basic.example.component.html\",\n})\nexport class LineChartBasicExampleComponent implements OnInit {\n    // XYGrid is used for rendering axes and other grid elements\n    public chart = new Chart(new XYGrid());\n\n    public ngOnInit() {\n        // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new LineAccessors();\n\n        // The line renderer will make the chart look like a line chart.\n        const renderer = new LineRenderer();\n\n        // In case of a line chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Finally, pass the series set to the chart's update method\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "8bWw":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.ts ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bWw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, BarHighlightStrategy, BarHorizontalGridConfig, BarRenderer, BarTooltipsPlugin, Chart, ChartAssist, HorizontalBarAccessors, LinearScale, Scales,\n    stack, XYGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-stacked-horizontal-example\",\n    templateUrl: \"./bar-chart-stacked-horizontal.example.component.html\",\n})\nexport class BarChartStackedHorizontalExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public tooltipsPlugin = new BarTooltipsPlugin();\n\n    ngOnInit() {\n        const gridConfig = new BarHorizontalGridConfig();\n\n        const chart = new Chart(new XYGrid(gridConfig));\n        chart.addPlugin(this.tooltipsPlugin);\n        this.chartAssist = new ChartAssist(chart, stack);\n\n        const accessors = new HorizontalBarAccessors();\n        // This matches field in data by which chart preprocessor will gather categories to build stacks\n        accessors.data.category = (data: any) => data.name;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n\n        const scales: Scales = {\n            y: new BandScale(),\n            x: new LinearScale(),\n        };\n\n        const seriesSet = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 122,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 141,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 66,\n                },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                // Please note the fact that not all categories are required to be present in every data point.\n                // Sparse data is ok too.\n                // {\n                //     \"name\": \"Q2 2018\",\n                //     \"value\": 198,\n                // },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 233,\n                },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 15,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 123,\n                },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 11,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 99,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 17,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 25,\n                },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 121,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 222,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 319,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 328,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "8f59":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/bar-chart-bucketed-test.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function f59(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <charts-test-harness>\n        <div class=\"m-5\">\n            <h4>Basic Stacked Horizontal Bar Chart</h4>\n            <nui-basic-stacked-horizontal-bar-chart-test></nui-basic-stacked-horizontal-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Basic Stacked Vertical Bar Chart</h4>\n            <nui-basic-stacked-vertical-bar-chart-test></nui-basic-stacked-vertical-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Grouped Horizontal Bar Chart</h4>\n            <nui-grouped-horizontal-bar-chart-test></nui-grouped-horizontal-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Grouped Vertical Bar Chart</h4>\n            <nui-grouped-vertical-bar-chart-test></nui-grouped-vertical-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Proportional Vertical Bar Chart</h4>\n            <nui-proportional-vertical-bar-chart-test></nui-proportional-vertical-bar-chart-test>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "9/l/":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-horizontal/bar-chart-horizontal.example.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "9LuY":
    /*!*****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.ts ***!
      \*****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LuY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors,\n    barGrid,\n    BarRenderer,\n    barScales,\n    BarSeriesHighlightStrategy,\n    Chart,\n    ChartAssist,\n    CHART_PALETTE_CS_S,\n    MappedValueProvider,\n} from \"@nova-ui/charts\";\n\nenum Status {\n    Up = \"up\",\n    Warning = \"warning\",\n    Critical = \"critical\",\n    Down = \"down\",\n    Unmanaged = \"unmanaged\",\n    Unknown = \"unknown\",\n}\n\n@Component({\n    selector: \"nui-vertical-with-legend-bar-chart-test\",\n    templateUrl: \"./vertical-with-legend-bar-chart-test.component.html\",\n})\n\nexport class VerticalWithLegendBarChartTestComponent implements OnInit {\n    public chartAssist = new ChartAssist(new Chart(barGrid()));\n\n    public ngOnInit() {\n        const statusColorProvider = createColorProvider();\n\n        const accessors = barAccessors();\n        accessors.series.color = (seriesId: string, dataSeries: any) => statusColorProvider.get(dataSeries.name);\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarSeriesHighlightStrategy(\"x\") });\n        const scales = barScales();\n        scales.x.formatters.tick = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\nfunction createColorProvider() {\n    return new MappedValueProvider<string>({\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n        [Status.Down]: CHART_PALETTE_CS_S[0],\n        [Status.Unmanaged]: CHART_PALETTE_CS_S[5],\n        [Status.Unknown]: CHART_PALETTE_CS_S[3],\n    });\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: Status.Up, name: Status.Up, data: [42] },\n        { id: Status.Warning, name: Status.Warning, data: [14] },\n        { id: Status.Critical, name: Status.Critical, data: [8] },\n        { id: Status.Down, name: Status.Down, data: [7] },\n        { id: Status.Unmanaged, name: Status.Unmanaged, data: [5] },\n        { id: Status.Unknown, name: Status.Unknown, data: [3] },\n    ];\n}\n";
      /***/
    },

    /***/
    "9WrG":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-basic/spark-chart-basic.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WrG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, IChart, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, sparkChartGridConfig, TimeScale, XYGrid, XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-spark-chart-basic-example\",\n    templateUrl: \"./spark-chart-basic.example.component.html\",\n})\nexport class SparkChartBasicExampleComponent implements OnInit {\n    public chart: IChart;\n\n    public ngOnInit() {\n        // This grid configuration is what turns a regular chart into a spark chart\n        const gridConfig = sparkChartGridConfig(new XYGridConfig(), false, false);\n        gridConfig.interactive = false;\n\n        // Create an x-y grid by passing the spark chart grid config as an argument to the constructor\n        const grid = new XYGrid(gridConfig);\n\n        // Instantiate the chart using the configured sprk chart grid as an argument to the chart's constructor\n        this.chart = new Chart(grid);\n\n        // Generate line accessors, x-y scales, and a line renderer to be included in the IChartSeries collection\n        const accessors = new LineAccessors();\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Assemble the series set\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Invoke the chart's update method with the IChartSeries collection as the argument\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [{\n        id: \"1\",\n        name: \"Series 1\",\n        data: [\n            { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 62 },\n            { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 57 },\n            { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 99 },\n            { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 75 },\n            { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 55 },\n            { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 73 },\n            { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 69 },\n            { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 77 },\n            { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 57 },\n            { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 61 },\n            { x: moment(\"2018-11-21T15:06:12.413Z\", format), y: 68 },\n            { x: moment(\"2018-12-05T06:49:39.310Z\", format), y: 82 },\n            { x: moment(\"2018-12-18T22:33:06.206Z\", format), y: 81 },\n            { x: moment(\"2019-01-01T14:16:33.103Z\", format), y: 78 },\n            { x: moment(\"2019-01-15T06:00:00.000Z\", format), y: 90 },\n        ],\n    }];\n}\n";
      /***/
    },

    /***/
    "9us9":
    /*!********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.html ***!
      \********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function us9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"nui-demo-vertical-stacked-bar-chart\" class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, Mbps</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"false\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.name\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "AOID":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/chart-docs-status.module.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AOID(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { ChartDocsStatusComponent } from \"./chart-docs-status.component\";\nimport { StatusChartExampleComponent } from \"./status-chart/status-chart.example.component\";\nimport { StatusLegendChartExampleComponent } from \"./status-legend-chart/status-legend-chart.example.component\";\nimport { StatusChartTestComponent } from \"./status-test/status-chart-test.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsStatusComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: StatusChartExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"legend\",\n        component: StatusLegendChartExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: StatusChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsStatusComponent,\n        StatusChartExampleComponent,\n        StatusLegendChartExampleComponent,\n        StatusChartTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsStatusModule {\n}\n";
      /***/
    },

    /***/
    "B1nc":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart-test/donut-chart-test.component.ts ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function B1nc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { Chart, ChartAssist, ChartDonutContentPlugin, radial, RadialAccessors, radialGrid, RadialRenderer, radialScales } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-donut-chart-test\",\n    templateUrl: \"./donut-chart-test.component.html\",\n})\nexport class DonutChartTestComponent implements OnInit {\n\n    public chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n    public contentPlugin: ChartDonutContentPlugin;\n\n    ngOnInit() {\n        this.contentPlugin = new ChartDonutContentPlugin();\n        this.chartAssist.chart.addPlugin(this.contentPlugin);\n\n        const accessors = new RadialAccessors();\n        const scales = radialScales();\n        const renderer = new RadialRenderer();\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [70] },\n        { id: \"edge\", name: \"Edge\", data: [20] },\n        { id: \"ff\", name: \"FF\", data: [10] },\n    ];\n}\n";
      /***/
    },

    /***/
    "BCaa":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-stroke-test/area-spark-minimal-test.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BCaa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    AreaRenderer,\n    Chart,\n    IChart,\n    IChartSeries,\n    ILineAccessors,\n    IXYScales,\n    LinearScale,\n    stackedAreaAccessors,\n    TimeScale,\n    XYGrid,\n    XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-area-spark-minimal-test\",\n    templateUrl: \"./area-spark-minimal-test.component.html\",\n    styleUrls: [\"./area-spark-minimal-test.component.less\"],\n})\nexport class AreaSparkMinimalTestComponent implements OnInit {\n    public chart: IChart;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.axis.left.visible = false;\n        gridConfig.axis.bottom.visible = false;\n        gridConfig.axis.top.visible = false;\n        gridConfig.axis.right.visible = false;\n        gridConfig.borders.bottom.visible = false;\n        gridConfig.dimension.padding.bottom = 0;\n        gridConfig.interactive = false;\n        gridConfig.dimension.margin.right = 0;\n        gridConfig.dimension.margin.bottom = 0;\n        gridConfig.dimension.margin.top = 0;\n        gridConfig.dimension.margin.left = 0;\n        gridConfig.axis.left.gridTicks = false;\n\n        // Create an x-y grid by passing the spark chart grid config as an argument to the constructor\n        const grid = new XYGrid(gridConfig);\n\n        // Instantiate the chart using the configured spark chart grid as an argument to the chart's constructor\n        this.chart = new Chart(grid);\n\n        // Generate line accessors, x-y scales, and a line renderer to be included in the IChartSeries collection\n        const accessors = stackedAreaAccessors();\n        const renderer = new AreaRenderer({ strokeWidth: 0 });\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Assemble the series set\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Invoke the chart's update method with the IChartSeries collection as the argument\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [{\n        id: \"1\",\n        name: \"Series 1\",\n        data: [\n            { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 62 },\n            { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 57 },\n            { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 99 },\n            { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 75 },\n            { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 55 },\n            { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 73 },\n            { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 69 },\n            { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 77 },\n            { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 57 },\n            { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 61 },\n            { x: moment(\"2018-11-21T15:06:12.413Z\", format), y: 68 },\n            { x: moment(\"2018-12-05T06:49:39.310Z\", format), y: 82 },\n            { x: moment(\"2018-12-18T22:33:06.206Z\", format), y: 81 },\n            { x: moment(\"2019-01-01T14:16:33.103Z\", format), y: 78 },\n            { x: moment(\"2019-01-15T06:00:00.000Z\", format), y: 90 },\n        ],\n    }];\n}\n";
      /***/
    },

    /***/
    "Bhj1":
    /*!**********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.ts ***!
      \**********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bhj1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales, Chart, ChartAssist, IBarChartConfig, stack } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-basic-stacked-horizontal-bar-chart-test\",\n    templateUrl: \"./basic-stacked-horizontal-bar-chart-test.component.html\",\n})\n\nexport class BasicStackedHorizontalBarChartTestComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    ngOnInit() {\n        const config = { horizontal: true } as IBarChartConfig;\n\n        const chart = new Chart(barGrid(config));\n        this.chartAssist = new ChartAssist(chart, stack);\n\n        const accessors = barAccessors(config);\n        // This matches field in data by which chart preprocessor will gather categories to build stacks\n        accessors.data.category = (data: any) => data.name;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n\n        const scales = barScales(config);\n\n        const seriesSet = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 122,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 141,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 66,\n                },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                // Please note the fact that not all categories are required to be present in every data point.\n                // Sparse data is ok too.\n                // {\n                //     \"name\": \"Q2 2018\",\n                //     \"value\": 198,\n                // },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 233,\n                },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 15,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 123,\n                },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 11,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 99,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 17,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 25,\n                },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 121,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 222,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 319,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 328,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "CL57":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/chart-docs-status.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CL57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Status Charts</h1>\n\n<p>\n    A Status Chart represents the state of a system over time.\n</p>\n\n<h2>Basic Usage</h2>\n<p>\n    For the process of creating a status chart, take a look at the inline comments explaining it in the example source below.\n</p>\n<p>\n    Please note that\n    <code><a href=\"../classes/InteractionLinePlugin.html\" target=\"_blank\">InteractionLinePlugin</a></code> and\n    <code><a href=\"../classes/InteractionLabelPlugin.html\" target=\"_blank\">InteractionLabelPlugin</a></code> plugins should be\n    added manually.\n</p>\n<nui-example-wrapper filenamePrefix=\"status-chart\"\n                     exampleTitle=\"Status Chart\">\n    <nui-status-chart-example></nui-status-chart-example>\n</nui-example-wrapper>\n\n<h2>Legend Interaction</h2>\n<p>\n    If there is a space for legend, it is possible to communicate current status not via tooltip, but via legend.\n</p>\n<p>\n    Please note how this is implemented using <code>chartAssist.legendLabelData$</code> stream.\n</p>\n<nui-example-wrapper filenamePrefix=\"status-legend-chart\"\n                     exampleTitle=\"Legend Interaction\">\n    <nui-status-legend-chart-example></nui-status-legend-chart-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "CqTf":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CqTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "DSTu":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.ts ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DSTu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales, BarTooltipsPlugin, Chart, ChartAssist, IBarChartConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-grouped-horizontal-example\",\n    templateUrl: \"./bar-chart-grouped-horizontal.example.component.html\",\n})\nexport class BarChartGroupedHorizontalExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    // The configuration to be used with plugins and convenience functions\n    public barConfig: IBarChartConfig = { horizontal: true, grouped: true };\n    public tooltipsPlugin = new BarTooltipsPlugin(this.barConfig);\n\n    ngOnInit() {\n        const chart = new Chart(barGrid(this.barConfig));\n        this.chartAssist = new ChartAssist(chart);\n\n        chart.addPlugin(this.tooltipsPlugin);\n\n        const accessors = barAccessors(this.barConfig);\n        // Both category and sub-category need to be defined to properly draw groups.\n        accessors.data.category = (data, i, series, dataSeries) => [data.name, dataSeries.name];\n\n        // BarHighlightStrategy should be applied to a different axis in case of horizontal layout\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n\n        // Nested BandScales with a LinearScale for values can be instantiated with the barAccessors function\n        const scales = barScales(this.barConfig);\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 167 },\n                { \"name\": \"Q2 2018\", \"value\": 122 },\n                { \"name\": \"Q3 2018\", \"value\": 141 },\n                { \"name\": \"Q4 2018\", \"value\": 66 },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 167 },\n                { \"name\": \"Q2 2018\", \"value\": 198 },\n                { \"name\": \"Q3 2018\", \"value\": 208 },\n                { \"name\": \"Q4 2018\", \"value\": 233 },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 167 },\n                // sparse data is handled as well\n                // { \"name\": \"Q2 2018\", \"value\": 15 },\n                { \"name\": \"Q3 2018\", \"value\": 208 },\n                { \"name\": \"Q4 2018\", \"value\": 123 },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 11 },\n                { \"name\": \"Q2 2018\", \"value\": 99 },\n                { \"name\": \"Q3 2018\", \"value\": 17 },\n                { \"name\": \"Q4 2018\", \"value\": 25 },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 121 },\n                { \"name\": \"Q2 2018\", \"value\": 222 },\n                { \"name\": \"Q3 2018\", \"value\": 319 },\n                { \"name\": \"Q4 2018\", \"value\": 328 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "DevO":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-time-interval/bar-chart-time-interval.example.component.ts ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DevO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors,\n    barGrid,\n    BarRenderer,\n    Chart,\n    LinearScale,\n    Scales,\n    TimeIntervalScale,\n} from \"@nova-ui/charts\";\nimport moment, { duration } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-bar-chart-time-interval-example\",\n    templateUrl: \"./bar-chart-time-interval.example.component.html\",\n})\nexport class BarChartTimeIntervalExampleComponent implements OnInit {\n    public chart = new Chart(barGrid());\n\n    ngOnInit() {\n        const accessors = barAccessors();\n        accessors.data.category = (d) => d.x;\n        accessors.data.value = (d) => d.y;\n\n        const renderer = new BarRenderer();\n\n        const scales: Scales = {\n            x: new TimeIntervalScale(duration(1, \"days\")),\n            y: new LinearScale(),\n        };\n\n        this.chart.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                {x: moment(\"2020-07-01T0\", format).toDate(), y: 30},\n                {x: moment(\"2020-07-02T0\", format).toDate(), y: 95},\n                {x: moment(\"2020-07-03T0\", format).toDate(), y: 15},\n                {x: moment(\"2020-07-04T0\", format).toDate(), y: 60},\n                {x: moment(\"2020-07-05T0\", format).toDate(), y: 35},\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "EIZE":
    /*!****************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.ts ***!
      \****************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EIZE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    IChartAssistSeries,\n    IChartSeries,\n    ILineAccessors,\n    IXYScales,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    MissingDataLineRendererConfig,\n    TimeScale,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-interrupted-path-terminus-example\",\n    templateUrl: \"./line-chart-interrupted-path-terminus-example.component.html\",\n})\nexport class LineChartInterruptedPathTerminusExampleComponent implements OnInit {\n    // XYGrid is used for rendering axes as well as other grid elements\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit() {\n        // In case of a line chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const incomingSeries = getData();\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartAssistSeries<ILineAccessors>[] = [];\n\n        // The line renderer will make the chart look like a line chart.\n        const renderer = new LineRenderer();\n        // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        // Renderer for the missing dataSeries\n        const rendererMissing = new LineRenderer(new MissingDataLineRendererConfig());\n        const accessorsMissing = new LineAccessors();\n        // we need to store the original value of the `defined` accessor\n        const origDefinedAccessor = accessorsMissing.data.defined;\n        // we're calling the original accessor implementation, but inverting it's logic\n        accessorsMissing.data.defined = (d, i, data, dataSeries) =>\n            !origDefinedAccessor?.(d, i, data, dataSeries) ?? true;\n\n        for (const s of incomingSeries) {\n            const cs: IChartSeries<ILineAccessors> = {\n                ...s,\n                accessors,\n                renderer,\n                scales,\n            };\n            seriesSet.push(cs);\n\n            // this series will be used to visualize the missing data points\n            seriesSet.push({\n                // this naming convention will connect these two series and their interaction will be synchronized\n                id: s.id + \"__missing\",\n                data: s.data,\n                accessors: accessorsMissing,\n                renderer: rendererMissing,\n                scales,\n                showInLegend: false, // we don't want to show this in the legend\n            });\n        }\n\n        // Finally, pass the series set to the chart's update method\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format).toDate(), y: 30, defined: false },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format).toDate(), y: 95, defined: false },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format).toDate(), y: 95 },\n                { x: moment(\"2016-12-28T15:14:29.909Z\", format).toDate(), y: 35 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format).toDate(), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format).toDate(), y: 35 },\n                { x: moment(\"2017-01-04T15:14:29.909Z\", format).toDate(), y: 20 },\n                { x: moment(\"2017-01-04T15:14:29.909Z\", format).toDate(), y: 20, defined: false },\n                { x: moment(\"2017-01-05T15:14:29.909Z\", format).toDate(), y: 35, defined: false },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "F/E+":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-test/line-chart-test.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-line-chart-basic-test\">\n    <nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n    <input id=\"data-input\" type=\"text\" class=\"w-100 mt-5\" [ngModel]=\"input\" (ngModelChange)=\"inputChanged($event)\">\n</div>\n";
      /***/
    },

    /***/
    "FEzG":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-test/status-chart-test.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FEzG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IconService } from \"@nova-ui/bits\";\nimport {\n    BandScale, BarHighlightStrategy, BarRenderer, BarStatusGridConfig, BarTooltipsPlugin, Chart, CHART_PALETTE_CS_S, HIGHLIGHT_DATA_POINT_EVENT,\n    InteractionLabelPlugin, InteractionLinePlugin, IValueProvider, IXYScales, MappedValueProvider, SELECT_DATA_POINT_EVENT, statusAccessors, StatusAccessors,\n    SvgMarker, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\nenum Status {\n    Unknown = \"unknown\",\n    Up = \"up\",\n    Warning = \"warning\",\n    Down = \"down\",\n    Critical = \"critical\",\n}\n\n@Component({\n    selector: \"nui-status-chart-test\",\n    templateUrl: \"./status-chart-test.component.html\",\n})\nexport class StatusChartTestComponent implements OnInit {\n    public chart = new Chart(new XYGrid(new BarStatusGridConfig()));\n    public tooltipsPlugin = new BarTooltipsPlugin({ horizontal: true });\n    public statusMarkers: IValueProvider<SvgMarker>;\n\n    constructor(private iconService: IconService) {\n    }\n\n    public ngOnInit() {\n        this.statusMarkers = createMarkerProvider(this.iconService);\n        this.chart.addPlugin(this.tooltipsPlugin);\n\n        // In order to set interaction Label Formatter that is independent from bottom tick formatter,\n        // it should be added separately with formatter name in a constructor\n        this.chart.addPlugin(new InteractionLabelPlugin(\"labelFormatter\"));\n        this.chart.addPlugin(new InteractionLinePlugin());\n\n        this.chart.updateDimensions();\n\n        const statusColors = createColorProvider();\n        const accessors = statusAccessors(statusColors);\n        const iconSize: number = 10;\n        const icons = new MappedValueProvider(getResizedIconsValueMap(this.iconService, iconSize));\n        // Thickness accessor should be used to specify which status corresponds to a thin bar or thick\n        accessors.data.thickness = (data: any) => data.status === Status.Up ? BarRenderer.THIN : BarRenderer.THICK;\n        accessors.data.marker = (data: any) => icons.get(data.status);\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        const bandScale = new BandScale();\n        const timeScale = new TimeScale();\n        // This formats label in interaction label plugin\n        timeScale.formatters.labelFormatter = (d: any) => moment(d).format(\"LL\");\n        bandScale.fixDomain(StatusAccessors.STATUS_DOMAIN);\n        const scales: IXYScales = {\n            y: bandScale,\n            x: timeScale,\n        };\n\n        // Marker accessor is used to draw marker on a bar depending on the data point\n        accessors.data.marker = (data: any) => icons.get(data.status);\n\n        const seriesSet = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chart.update(seriesSet);\n\n        // Sample events that can be used in order to handle click or highlighting of certain status\n        this.chart.getEventBus().getStream(HIGHLIGHT_DATA_POINT_EVENT).subscribe(console.log);\n        this.chart.getEventBus().getStream(SELECT_DATA_POINT_EVENT).subscribe(console.log);\n    }\n}\n\nfunction createMarkerProvider(iconService: IconService): IValueProvider<SvgMarker> {\n    const getStatusMarker = (status: string) => new SvgMarker(iconService.getStatusIcon(status));\n\n    return new MappedValueProvider({\n        [Status.Unknown]: getStatusMarker(Status.Unknown),\n        [Status.Up]: getStatusMarker(Status.Up),\n        [Status.Warning]: getStatusMarker(Status.Warning),\n        [Status.Down]: getStatusMarker(Status.Down),\n        [Status.Critical]: getStatusMarker(Status.Critical),\n    });\n}\n\nfunction createColorProvider(): IValueProvider<string> {\n    return new MappedValueProvider<string>({\n        [Status.Unknown]: CHART_PALETTE_CS_S[3],\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Down]: CHART_PALETTE_CS_S[0],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n    });\n}\n\nfunction getResizedIconsValueMap(iconService: IconService, iconSize: number) {\n    return {\n        [Status.Unknown]: iconService.getIconResized(iconService.getStatusIcon(Status.Unknown), iconSize),\n        [Status.Up]: iconService.getIconResized(iconService.getStatusIcon(Status.Up), iconSize),\n        [Status.Warning]: iconService.getIconResized(iconService.getStatusIcon(Status.Warning), iconSize),\n        [Status.Down]: iconService.getIconResized(iconService.getStatusIcon(Status.Down), iconSize),\n        [Status.Critical]: iconService.getIconResized(iconService.getStatusIcon(Status.Critical), iconSize),\n    };\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"1\",\n        name: \"Series 1\",\n        data: [\n            {\n                status: Status.Up,\n                start: 0, // in days from today\n                end: 22,\n            },\n            {\n                status: Status.Warning,\n                start: 22,\n                end: 39,\n            },\n            {\n                status: Status.Unknown,\n                start: 39,\n                end: 59,\n            },\n            {\n                status: Status.Down,\n                start: 59,\n                end: 109,\n            },\n            {\n                status: Status.Critical,\n                start: 109,\n                end: 178,\n            },\n            {\n                status: Status.Up,\n                start: 178,\n                end: 877,\n            },\n            {\n                status: Status.Critical,\n                start: 877,\n                end: 980,\n            },\n            {\n                status: Status.Warning,\n                start: 980,\n                end: 1000,\n            },\n        ].map(d => ({\n            value: d.end - d.start,\n            status: d.status,\n            start: getDate(d.start),\n            end: getDate(d.end),\n        })),\n    }];\n}\n\nfunction getDate(hours: number) {\n    return moment(\"1986-02-17\").add({ hours }).toDate();\n}\n";
      /***/
    },

    /***/
    "FHSh":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/chart-docs-line.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FHSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { ChartDocsLineComponent } from \"./chart-docs-line.component\";\nimport { LineChartBasicExampleComponent } from \"./line-chart-basic/line-chart-basic.example.component\";\nimport { LineChartInterruptedBasicExampleComponent } from \"./line-chart-interrupted-basic/line-chart-interrupted-basic-example.component\";\nimport { LineChartInterruptedCalculatedExampleComponent } from \"./line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component\";\n// eslint-disable-next-line max-len\nimport { LineChartInterruptedPathTerminusExampleComponent } from \"./line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component\";\nimport { LineChartTestComponent } from \"./line-chart-test/line-chart-test.component\";\nimport { LineChartVisualTestComponent } from \"./line-chart-visual-test/line-chart-visual-test.component\";\nimport { LineChartWith2YAxesExampleComponent } from \"./line-chart-with-2y-axes/line-chart-with-2y-axes-example.component\";\nimport { LineChartWithAxisLabelsExampleComponent } from \"./line-chart-with-axis-labels/line-chart-with-axis-labels.example.component\";\nimport { LineChartWithLargeValuesExampleComponent } from \"./line-chart-with-large-values/line-chart-with-large-values.example.component\";\nimport { LineChartWithLegendExampleComponent } from \"./line-chart-with-legend/line-chart-with-legend.example.component\";\nimport { LineChartWithRichTileLegendExampleComponent } from \"./line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsLineComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"axis-labels\",\n        component: LineChartWithAxisLabelsExampleComponent,\n    },\n    {\n        path: \"two-y-axes\",\n        component: LineChartWith2YAxesExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"basic\",\n        component: LineChartBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"interrupted\",\n        component: LineChartInterruptedBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"interrupted-calculated\",\n        component: LineChartInterruptedCalculatedExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"interrupted-path-terminus\",\n        component: LineChartInterruptedPathTerminusExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: LineChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"visual-test\",\n        component: LineChartVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsLineComponent,\n        LineChartWithAxisLabelsExampleComponent,\n        LineChartBasicExampleComponent,\n        LineChartTestComponent,\n        LineChartVisualTestComponent,\n        LineChartWithLegendExampleComponent,\n        LineChartWithRichTileLegendExampleComponent,\n        LineChartWith2YAxesExampleComponent,\n        LineChartInterruptedBasicExampleComponent,\n        LineChartInterruptedPathTerminusExampleComponent,\n        LineChartInterruptedCalculatedExampleComponent,\n        LineChartWithLargeValuesExampleComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        FormsModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsLineModule {\n}\n";
      /***/
    },

    /***/
    "FULb":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-large-values/line-chart-with-large-values.example.component.ts ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FULb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid, XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-with-large-values-example\",\n    templateUrl: \"./line-chart-with-large-values.example.component.html\",\n})\nexport class LineChartWithLargeValuesExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit(): void {\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        (this.chart.getGrid().config() as XYGridConfig).axis.left.fit = true;\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 3000 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 9500 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 1500 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 6000 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 3500 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 6000 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 4000 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 7000 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 4500 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 9000 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "HO4h":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-test.component.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HO4h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-bar-chart-test\",\n    templateUrl: \"./bar-chart-test.component.html\",\n})\n\nexport class BarChartTestComponent {\n\n}\n";
      /***/
    },

    /***/
    "HZrt":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart/donut-chart.example.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HZrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { Chart, ChartAssist, radial, RadialAccessors, radialGrid, RadialRenderer, radialScales } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-donut-chart-example\",\n    templateUrl: \"./donut-chart.example.component.html\",\n})\nexport class DonutChartExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    ngOnInit() {\n        // Create a Chart instance using the result of the radialGrid configuration function as the constructor argument\n        const chart = new Chart(radialGrid());\n\n        // Create a ChartAssist instance passing the chart and the radial series processor as constructor arguments\n        this.chartAssist = new ChartAssist(chart, radial);\n\n        // Generate radial accessors, scales, and renderer to be included in the IChartAssistSeries collection\n        const accessors = new RadialAccessors();\n        const scales = radialScales();\n        const renderer = new RadialRenderer();\n\n        // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [80] },\n        { id: \"edge\", name: \"Edge\", data: [20] },\n    ];\n}\n";
      /***/
    },

    /***/
    "Hyit":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/test/area-chart-test.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hyit(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <charts-test-harness>\n        <div class=\"m-5\">\n            <h4>Basic Usage</h4>\n            <area-chart-basic-example></area-chart-basic-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Bi-Directional with Legend</h4>\n            <area-chart-bi-directional-example></area-chart-bi-directional-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Variable Baseline</h4>\n            <area-chart-variable-baseline-example></area-chart-variable-baseline-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Vertical</h4>\n            <area-chart-vertical-example></area-chart-vertical-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Stacked</h4>\n            <area-chart-stack-example></area-chart-stack-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Stacked Percentage</h4>\n            <area-chart-stack-percentage-example></area-chart-stack-percentage-example>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "IISk":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IISk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart id=\"nui-demo-bar-chart-vertical\" class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>";
      /***/
    },

    /***/
    "IlQ7":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/chart-docs-pie-and-donut.module.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IlQ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsPieAndDonutComponent } from \"./chart-docs-pie-and-donut.component\";\nimport { DonutChartInteractiveExampleComponent } from \"./donut-chart-interactive/donut-chart-interactive.example.component\";\nimport { DonutChartTestComponent } from \"./donut-chart-test/donut-chart-test.component\";\nimport { DonutChartWithContentExampleComponent } from \"./donut-chart-with-content/donut-chart-with-content.example.component\";\nimport { DonutChartExampleComponent } from \"./donut-chart/donut-chart.example.component\";\nimport { PieChartTestComponent } from \"./pie-chart-test/pie-chart-test.component\";\nimport { PieChartExampleComponent } from \"./pie-chart/pie-chart.example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsPieAndDonutComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"pie\",\n        component: PieChartExampleComponent,\n    },\n    {\n        path: \"donut-interactive\",\n        component: DonutChartInteractiveExampleComponent,\n    },\n    {\n        path: \"pie-test\",\n        component: PieChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"donut\",\n        component: DonutChartExampleComponent,\n    },\n    {\n        path: \"donut-with-content\",\n        component: DonutChartWithContentExampleComponent,\n    },\n    {\n        path: \"donut-test\",\n        component: DonutChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsPieAndDonutComponent,\n        DonutChartExampleComponent,\n        DonutChartWithContentExampleComponent,\n        DonutChartInteractiveExampleComponent,\n        DonutChartTestComponent,\n        PieChartExampleComponent,\n        PieChartTestComponent,\n    ],\n    imports: [\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsPieAndDonutModule {\n}\n";
      /***/
    },

    /***/
    "Ipb4":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-chart-simple/waterfall-chart-simple.example.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ipb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "IyFi":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.ts ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IyFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-with-axis-labels-example\",\n    templateUrl: \"./line-chart-with-axis-labels.example.component.html\",\n})\nexport class LineChartWithAxisLabelsExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit() {\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "J97j":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart/bar-chart.example.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J97j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "JmEi":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-test/status-chart-test.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JmEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"nui-status-chart-with-icons\" class=\"container\" [style.margin-top.px]=\"50\">\n    <charts-test-harness>\n        <!-- 50px top margin to give tooltips space on the top -->\n        <div class=\"d-flex\">\n            <nui-chart class=\"d-flex w-100\" [chart]=\"chart\"></nui-chart>\n\n            <nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n            <ng-template let-dataPoint=\"dataPoint\"\n                         #tooltipTemplate>\n                <div class=\"p-1 d-flex align-items-center\">\n                    <nui-chart-marker [marker]=\"statusMarkers.get(dataPoint.data.status)\"></nui-chart-marker>\n                    <span class=\"pl-2\"><strong>{{dataPoint.data.status | titlecase}}</strong></span>\n                    <span class=\"pl-2\">{{\" for \" + dataPoint.data.value + \" days\"}}</span>\n                </div>\n            </ng-template>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "JozS":
    /*!****************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.html ***!
      \****************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JozS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart style=\"height: 60px; max-width: 400px;\" class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "JuaB":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JuaB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"nui-demo-bar-chart-vertical-with-legend\" class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name'] | titlecase\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"legendSeries.data\"\n                                      backgroundColor=\"transparent\">\n                </nui-rich-legend-tile>\n                <nui-icon [icon]=\"'status_' + legendSeries['name'] | lowercase\"></nui-icon>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "MhnZ":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-table/spark-chart-table.example.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MhnZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    ChartPopoverPlugin, IChartAssistSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, SparkChartAssist, TimeScale,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-spark-chart-table-example\",\n    templateUrl: \"./spark-chart-table.example.component.html\",\n})\nexport class SparkChartTableExampleComponent implements OnInit {\n    public displayedColumns = [\"name\", \"chart\"];\n    public dataSource: any[] = [];\n\n    public ngOnInit() {\n        this.generateTableData();\n    }\n\n    private generateTableData() {\n        const renderer = new LineRenderer();\n\n        this.dataSource = getData().map((d, i: number) => {\n            // Chart assist setup\n            const chartAssist = new SparkChartAssist(false, false);\n\n            // using a new accessors instance for each spark allows for the sequential\n            // color provider within to provide the same color for each sparkline\n            const accessors = new LineAccessors();\n            const yScale = new LinearScale();\n            yScale.formatters.value = v => (Number(v).toPrecision(4));\n            const scales: IXYScales = {\n                // using the same scale id for the x-axes is necessary to achieve synchronized hover interaction between charts\n                // - sharing the same instance of the scale would work as well\n                x: new TimeScale(\"shared-id\"),\n                y: yScale,\n            };\n\n            // series setup\n            const dataSeries: IChartAssistSeries<ILineAccessors> = {\n                id: `spark-series-${i + 1}`,\n                name: d.node,\n                data: d.cpu,\n                accessors,\n                renderer,\n                scales,\n            };\n\n            // chart assist needs to be used to update data\n            chartAssist.update([dataSeries]);\n\n            // popover plugin must be added after the initial update as the spark chart assist creates the sparks on update\n            const popoverPlugin = new ChartPopoverPlugin();\n            chartAssist.sparks[0].chart?.addPlugin(popoverPlugin);\n\n            // assembly of table row data\n            const row = { ...d, chartAssist, popoverPlugin };\n            return row;\n        });\n    }\n}\n\n/* Chart data */\nfunction getData(): any[] {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n    return [\n        {\n            node: \"Tex-lab-aus-2621\",\n            cpu: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 85 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 57 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 99 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 75 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 55 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 73 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 30 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 77 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 57 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 61 },\n            ],\n        },\n        {\n            node: \"Cz-lab-brn-02\",\n            cpu: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 93 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 71 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 85 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 54 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 79 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 64 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 49 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 70 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 59 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 76 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "MjEx":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-basic/area-chart-basic-example.component.ts ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MjEx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { AreaAccessors, areaGrid, AreaRenderer, Chart, IAreaAccessors, IChartSeries, IXYScales, LinearScale, TimeScale } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-basic-example\",\n    templateUrl: \"./area-chart-basic-example.component.html\",\n})\nexport class AreaChartBasicExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements\n        this.chart = new Chart(areaGrid());\n\n        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new AreaAccessors();\n        // 'x' defines access for values in the data that correspond to the horizontal axis\n        accessors.data.x = (d) => d.timeStamp;\n        // 'y0' defines the baseline, in other words, where the area starts\n        accessors.data.y0 = () => 0;\n        // 'y1' defines access to the numeric values we want to visualize, in other words, where the area ends\n        accessors.data.y1 = (d) => d.value;\n        // 'x' and 'y' accessors define the position of the marker. 'x' was already defined, so now we need to define 'y' as well.\n        // Notice that the 'y' is assigned the 'absoluteY1' accessor which takes into account areas that may be stacked below\n        // the current area and retrieves the absolute distance from the baseline to the area's value line.\n        accessors.data.y = accessors.data.absoluteY1;\n\n        // The area renderer will make the chart look like an area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of a area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Fixing the domain is optional.\n        scales.y.fixDomain([0, 100]);\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartSeries<IAreaAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Finally, pass the series set to the chart's update method.\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { timeStamp: moment(\"2016-12-25T11:45:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T12:10:29.909Z\", format), value: 65 },\n                { timeStamp: moment(\"2016-12-25T12:50:29.909Z\", format), value: 30 },\n                { timeStamp: moment(\"2016-12-25T13:15:29.909Z\", format), value: 40 },\n                { timeStamp: moment(\"2016-12-25T13:40:29.909Z\", format), value: 60 },\n                { timeStamp: moment(\"2016-12-25T13:55:29.909Z\", format), value: 23 },\n                { timeStamp: moment(\"2016-12-25T14:20:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { timeStamp: moment(\"2016-12-25T15:00:29.909Z\", format), value: 45 },\n                { timeStamp: moment(\"2016-12-25T15:25:29.909Z\", format), value: 50 },\n                { timeStamp: moment(\"2016-12-25T15:45:29.909Z\", format), value: 75 },\n                { timeStamp: moment(\"2016-12-25T16:10:29.909Z\", format), value: 50 },\n                { timeStamp: moment(\"2016-12-25T16:30:29.909Z\", format), value: 85 },\n                { timeStamp: moment(\"2016-12-25T16:45:29.909Z\", format), value: 55 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "MnH5":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-with-content/donut-gauge-with-content-example.component.less ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MnH5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"@nova-ui/bits/sdk/less/nui-framework-variables\";\n\n.chart {\n    height: 250px;\n    width: 250px;\n}\n\n.content-label {\n    line-height: 14px;\n    font-size: 11px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: var(--nui-color-text-secondary);\n}\n";
      /***/
    },

    /***/
    "Mr0e":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-stack-percentage/area-chart-stack-percentage-example.component.ts ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Mr0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    areaGrid,\n    AreaRenderer,\n    Chart,\n    ChartAssist,\n    IAreaAccessors,\n    IChartSeries,\n    IXYScales,\n    LinearScale,\n    stackedAreaAccessors,\n    stackedPercentageArea,\n    TimeScale,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-stack-percentage-example\",\n    templateUrl: \"./area-chart-stack-percentage-example.component.html\",\n})\nexport class AreaChartStackPercentageExampleComponent implements OnInit {\n    public chart: Chart;\n    public chartAssist: ChartAssist;\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.\n        this.chart = new Chart(areaGrid());\n        // ChartAssist will use the preprocessor to stack the series' numeric values on the same progression domain.\n        // In this case we use the 'stackedPercentageArea' preprocessor to scale each series area as a percentage of the sum of all corresponding series values.\n        this.chartAssist = new ChartAssist(this.chart, stackedPercentageArea);\n\n        // Stacked Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors =  stackedAreaAccessors();\n        // 'y1' defines access to the numeric values we want to visualize.\n        // The items in the data array of this example have a property named 'value',so we'll use that.\n        accessors.data.y1 = (d) => d.value;\n\n        // The area renderer will make the chart look like a area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of a area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartSeries<IAreaAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Finally, pass the series set to the chart's update method\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 6 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 33 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 15 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 23 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 25 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 38 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 25 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 43 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 28 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 65 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 30 },\n                { x: moment(\"2016-12-25T13:15:29.909Z\", format), value: 40 },\n                { x: moment(\"2016-12-25T13:40:29.909Z\", format), value: 60 },\n                { x: moment(\"2016-12-25T13:55:29.909Z\", format), value: 23 },\n                { x: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 45 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 50 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 75 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 50 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 85 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 55 },\n            ],\n        },\n        {\n            id: \"series-3\",\n            name: \"Series 3\",\n            data: [\n                { x: moment(\"2016-12-25T11:45:29.909Z\", format), value: 17 },\n                { x: moment(\"2016-12-25T12:10:29.909Z\", format), value: 42 },\n                { x: moment(\"2016-12-25T12:50:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T13:15:29.909Z\", format), value: 47 },\n                { x: moment(\"2016-12-25T13:40:29.909Z\", format), value: 90 },\n                { x: moment(\"2016-12-25T13:55:29.909Z\", format), value: 21 },\n                { x: moment(\"2016-12-25T14:20:29.909Z\", format), value: 12 },\n                { x: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { x: moment(\"2016-12-25T15:00:29.909Z\", format), value: 454 },\n                { x: moment(\"2016-12-25T15:25:29.909Z\", format), value: 550 },\n                { x: moment(\"2016-12-25T15:45:29.909Z\", format), value: 7 },\n                { x: moment(\"2016-12-25T16:10:29.909Z\", format), value: 5 },\n                { x: moment(\"2016-12-25T16:30:29.909Z\", format), value: 110 },\n                { x: moment(\"2016-12-25T16:45:29.909Z\", format), value: 550 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "N8dz":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/chart-docs-bar.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N8dz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { BarChartHorizontalExampleComponent } from \"./bar-chart-horizontal/bar-chart-horizontal.example.component\";\nimport { BarChartTestComponent } from \"./bar-chart-test/bar-chart-test.component\";\n// eslint-disable-next-line max-len\nimport { BarChartTickLabelMaxWidthWithMarginTestComponent } from \"./bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component\";\nimport { BarChartTickLabelMaxWidthTestComponent } from \"./bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component\";\nimport { BasicHorizontalBarChartTestComponent } from \"./bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component\";\nimport { BasicVerticalBarChartTestComponent } from \"./bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component\";\nimport { BarChartTimeIntervalDstTestComponent } from \"./bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component\";\nimport { DstTimeIntervalTestPageComponent } from \"./bar-chart-test/daylight-saving-time/dst-time-interval-test-page.component\";\nimport { HorizontalWithLegendBarChartTestComponent } from \"./bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component\";\nimport { TimeIntervalTestComponent } from \"./bar-chart-test/time-interval/time-interval.test.component\";\nimport { VerticalWithLegendBarChartTestComponent } from \"./bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component\";\nimport { VerticalWithTimescaleBarChartTestComponent } from \"./bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component\";\nimport { BarChartTimeIntervalExampleComponent } from \"./bar-chart-time-interval/bar-chart-time-interval.example.component\";\nimport { BarChartTimeScaleExampleComponent } from \"./bar-chart-time-scale/bar-chart-time-scale.example.component\";\nimport { BarChartWithLegendExampleComponent } from \"./bar-chart-with-legend/bar-chart-with-legend.example.component\";\nimport { BarChartExampleComponent } from \"./bar-chart/bar-chart.example.component\";\nimport { ChartDocsBarComponent } from \"./chart-docs-bar.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsBarComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"bar-chart\",\n        component: BarChartExampleComponent,\n        data: {\n            \"srlc\": {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"horizontal\",\n        component: BarChartHorizontalExampleComponent,\n        data: {\n            \"srlc\": {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"with-legend\",\n        component: BarChartWithLegendExampleComponent,\n    },\n    {\n        path: \"test\",\n        component: BarChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"dst-time-interval-test\",\n        component: DstTimeIntervalTestPageComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"time-interval\",\n        component: BarChartTimeIntervalExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"vertical-bar-test\",\n        component: BasicVerticalBarChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"horizontal-bar-test\",\n        component: BasicHorizontalBarChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"bar-chart-max-width-test\",\n        component: BarChartTickLabelMaxWidthTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"bar-chart-max-width-with-margin-test\",\n        component: BarChartTickLabelMaxWidthWithMarginTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsBarComponent,\n        BarChartExampleComponent,\n        BarChartHorizontalExampleComponent,\n        BarChartTimeScaleExampleComponent,\n        BarChartTimeIntervalExampleComponent,\n        BarChartTickLabelMaxWidthTestComponent,\n        BarChartTickLabelMaxWidthWithMarginTestComponent,\n        BarChartWithLegendExampleComponent,\n        BarChartTestComponent,\n        BasicHorizontalBarChartTestComponent,\n        BasicVerticalBarChartTestComponent,\n        DstTimeIntervalTestPageComponent,\n        BarChartTimeIntervalDstTestComponent,\n        VerticalWithTimescaleBarChartTestComponent,\n        VerticalWithLegendBarChartTestComponent,\n        HorizontalWithLegendBarChartTestComponent,\n        TimeIntervalTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsBarModule {\n}\n";
      /***/
    },

    /***/
    "Nchi":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nchi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    GaugeMode,\n    GaugeUtil,\n    IAccessors,\n    IChartAssistSeries,\n    IGaugeConfig,\n    linearGaugeGridConfig,\n    LinearGaugeLabelsPlugin,\n    stack,\n    XYGrid,\n    XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"horizontal-gauge-tester\",\n    templateUrl: \"./horizontal-gauge-tester.component.html\",\n    styleUrls: [\"./horizontal-gauge-tester.component.less\"],\n})\nexport class HorizontalGaugeTesterComponent implements OnInit {\n    @Input() public gaugeConfig: IGaugeConfig;\n\n    public chartAssist: ChartAssist;\n    public seriesSet: IChartAssistSeries<IAccessors>[];\n\n    public ngOnInit() {\n        const grid = new XYGrid(linearGaugeGridConfig(GaugeMode.Horizontal) as XYGridConfig);\n        const chart = new Chart(grid);\n\n        this.chartAssist = new ChartAssist(chart, stack);\n        this.chartAssist.chart.addPlugin(new LinearGaugeLabelsPlugin());\n\n        this.seriesSet = GaugeUtil.assembleSeriesSet(this.gaugeConfig, GaugeMode.Horizontal);\n        this.chartAssist.update(this.seriesSet);\n    }\n}\n";
      /***/
    },

    /***/
    "NmCU":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NmCU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "NmR+":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NmR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"chart mb-5\">\n    <div [style.margin-left.px]=\"rowSize + iconSize\" #gridChartPlaceholder></div>\n    <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n        <div *ngFor=\"let item of listItems; let i = index; let first = first\" class=\"d-flex flex-row align-items-center waterfall-chart-list-item\" cdkDrag>\n            <nui-icon icon=\"{{item.icon}}\" class=\"p-1\"></nui-icon>\n            <div style=\"overflow: hidden;\" [style.width.px]=\"rowSize\" class=\"p-1\">\n                <span>{{item.url}}</span>\n            </div>\n            <div class=\"d-flex\">\n                <div class=\"d-flex h-100\" *ngIf=\"first\"></div>\n                <nui-chart class=\"d-flex\" [chart]=\"item.chart\" nuiChartCollectionId=\"1\"></nui-chart>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #templatePortalGrid>\n    <nui-chart class=\"d-flex\" [chart]=\"gridChart\" nuiChartCollectionId=\"1\"></nui-chart>\n</ng-template>\n";
      /***/
    },

    /***/
    "O2Lm":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-multiple/spark-chart-multiple.example.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function O2Lm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn\">\n    <nui-chart class=\"d-flex\" [chart]=\"spark.chart\" nuiChartCollectionId=\"example-collection-id\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "OCfy":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/dst-time-interval-test-page.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OCfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <div class=\"mr-5\">\n        <h3>Start of Daylight Saving Time</h3>\n        <h4>1-minute Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"startDstOneMinuteData\" [interval]=\"oneMinuteInterval\"></bar-chart-time-interval-dst-test>\n        <h4>1-hour Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"startDstOneHourData\" [interval]=\"oneHourInterval\"></bar-chart-time-interval-dst-test>\n        <h4>2-hour Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"startDstTwoHourData\" [interval]=\"twoHourInterval\"></bar-chart-time-interval-dst-test>\n        <h4>1-Day Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"startDstOneDayData\" [interval]=\"oneDayInterval\"></bar-chart-time-interval-dst-test>\n    </div>\n    <div class=\"mr-5\">\n        <h3>End of Daylight Saving Time</h3>\n        <h4>1-minute Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"endDstOneMinuteData\" [interval]=\"oneMinuteInterval\"></bar-chart-time-interval-dst-test>\n        <h4>1-hour Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"endDstOneHourData\" [interval]=\"oneHourInterval\"></bar-chart-time-interval-dst-test>\n        <h4>2-hour Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"endDstTwoHourData\" [interval]=\"twoHourInterval\"></bar-chart-time-interval-dst-test>\n        <h4>1-Day Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"endDstOneDayData\" [interval]=\"oneDayInterval\"></bar-chart-time-interval-dst-test>\n    </div>\n    <div>\n        <h3>Inside Daylight Saving Time</h3>\n        <h4>1-Day Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"insideDstData\" [interval]=\"oneDayInterval\"></bar-chart-time-interval-dst-test>\n        <h3>Outside of Daylight Saving Time</h3>\n        <h4>1-Day Interval</h4>\n        <bar-chart-time-interval-dst-test [data]=\"outsideDstData\" [interval]=\"oneDayInterval\"></bar-chart-time-interval-dst-test>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "OID3":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OID3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>";
      /***/
    },

    /***/
    "OMuH":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-large-values/line-chart-with-large-values.example.component.html ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OMuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Left axis label</strong></div>\n    <div class=\"axis-label-right nui-text-small\"><strong i18n>Right axis label</strong></div>\n    <div class=\"axis-label-bottom nui-text-small\"><strong i18n>Bottom axis label</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"ms\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', 'tick')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Oh5A":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/chart-docs-bucketed-bar.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Oh5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Bucketed Bar Charts</h1>\n<p>\n    When you need to provide a complex comparison of data with categorical groups that have two or more\n    bars, Stacked Bar Chart or Grouped Bar Chart can be used.\n</p>\n\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    For more details, please see the inline comments in the example sources below.\n</nui-message>\n\n<h1>Stacked Bar Charts</h1>\n<p>\n    Stacked bar chart represents categories with values stacked on top of each other.\n</p>\n\n<p>\n    The overall data model is similar to the one described in the\n    <a href=\"../additional-documentation/chart-types/line.html\" target=\"_parent\">Line Chart</a> documentation.\n    But, to stack your data you will need to use\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code> with\n    <code><a href=\"../miscellaneous/functions.html#stack\" target=\"_blank\">stack</a></code> preprocessor.\n</p>\n\n<h2>Basic Stacked Bar Chart</h2>\n<p>\n    The following example of a stacked bar chart uses\n    <code><a href=\"../classes/BarTooltipsPlugin.html\" target=\"_blank\">BarTooltipsPlugin</a></code>,\n    and <code><a href=\"../classes/InteractionLabelPlugin.html\" target=\"_blank\">InteractionLabelPlugin</a></code>.\n    Interaction is possible thanks to\n    <code><a href=\"../classes/BarHighlightStrategy.html\" target=\"_blank\">BarHighlightStrategy</a></code> in renderer\n    configuration.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart-stacked\" exampleTitle=\"Stacked Bar Chart\">\n    <nui-bar-chart-stacked-example></nui-bar-chart-stacked-example>\n</nui-example-wrapper>\n<!--\n<h2>Horizontal Stacked Bar Chart</h2>\n<p>\n    The following example of a horizontal stacked bar chart uses\n    <code><a href=\"../classes/BarHorizontalGridConfig.html\" target=\"_blank\">BarHorizontalGridConfig</a></code>,\n    which includes a default grid configurations for this type of chart, and\n    <code><a href=\"../classes/BarTooltipsPlugin.html\" target=\"_blank\">BarTooltipsPlugin</a></code>,\n    whose constructor takes an offset pixel value and an orientation value of <code>\"top\"</code>\n    which configures the chart to show a tooltip above the top right corner of each stacked bar.\n</p>\n<p><strong>Note:</strong> The x and y scales of the horizontal stacked bar chart are inverted as\n    compared to those of the basic stacked bar chart.</p>\n\n<nui-example-wrapper filenamePrefix=\"bar-chart-stacked-horizontal\" exampleTitle=\"Horizontal Stacked Bar Chart\">\n    <nui-bar-chart-stacked-horizontal-example></nui-bar-chart-stacked-horizontal-example>\n</nui-example-wrapper>\n<h2>Percentage Stacked Bar Chart</h2>\n<p>\n    In order to have a normalized (percentage-based) stacked bar chart, some pre-processing of the data\n    is needed. That is, the data must be mutated so that each data point includes not only an\n    absolute value (e.g. Mbps), but also a percentage value. In order to use percentages to build stacks,\n    you can use <code>accessors.data.value = (data: any) => data.percentageValue;</code> as shown in the\n    example source below.\n</p>\n<nui-example-wrapper filenamePrefix=\"bar-chart-percentage\" exampleTitle=\"Percentage Stacked Bar Chart\">\n    <nui-bar-chart-percentage-example></nui-bar-chart-percentage-example>\n</nui-example-wrapper>\n\n<br>\n-->\n\n<h1>Grouped Bar Charts</h1>\n\n<p>\n    Data interpretation using a Stacked chart becomes difficult when you want to compare the constituent parts of each\n    entity across the various entities.\n    Try comparing data for Austin across quarters in the chart above: since bars do not share a common base, it is\n    cumbersome to compare them.\n</p>\n\n<p>To facilitate such analysis, we can use the Grouped Bar chart.</p>\n\n<p>\n    In the Grouped Column chart, all the columns have the same baseline and thus it is much easier to compare the\n    heights of the individual columns.\n</p>\n\n\n<h2>Basic Grouped Bar Chart</h2>\n\n<p>\n    For this type of the chart no preprocessor is needed. Still you should set your scales and accessors in the way that\n    will make grouping possible.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"bar-chart-grouped\" exampleTitle=\"Grouped Bar Chart\">\n    <nui-bar-chart-grouped-example></nui-bar-chart-grouped-example>\n</nui-example-wrapper>\n\n<h2>Horizontal Grouped Bar Chart</h2>\n\n<p>\n    BarTooltipsPlugin can be configured with the same\n    <code><a href=\"../interfaces/IBarChartConfig.html\" target=\"_blank\">IBarChartConfig</a></code>\n    object that we mentioned before.\n</p>\n\n<p>\n    For proper highlight behavior you will need to tell\n    <code><a href=\"../classes/BarHighlightStrategy.html\" target=\"_blank\">BarHighlightStrategy</a></code>\n    to use your <code>\"y\"</code> axis instead of <code>\"x\"</code>.\n</p>\n\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    Horizontal orientation of grouped bar chart requires much more vertical space in comparison to regular one (in case\n    of many items in one group).\n    Example below has chart height explicitly set to 500px to illustrate this fact.\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"bar-chart-grouped-horizontal\" exampleTitle=\"Horizontal Grouped Bar Chart\">\n    <nui-bar-chart-grouped-horizontal-example></nui-bar-chart-grouped-horizontal-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "OzOS":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OzOS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "PSNa":
    /*!**************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.ts ***!
      \**************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PSNa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, OnInit } from \"@angular/core\";\nimport {\n    barAccessors,\n    barGrid,\n    BarHighlightStrategy,\n    BarRenderer,\n    Chart,\n    IAccessors,\n    IChartSeries,\n    IDataSeries,\n    InteractionLabelPlugin,\n    LinearScale,\n    Scales,\n    TimeIntervalScale,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"bar-chart-time-interval-dst-test\",\n    templateUrl: \"./bar-chart-time-interval-dst-test.component.html\",\n})\nexport class BarChartTimeIntervalDstTestComponent implements OnInit {\n    @Input() data: Partial<IDataSeries<IAccessors>>[];\n    @Input() interval: moment.Duration;\n\n    public chart = new Chart(barGrid());\n\n    ngOnInit() {\n        const accessors = barAccessors();\n        accessors.data.category = (d) => d.x;\n        accessors.data.value = (d) => d.y;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\"), pointerEvents: false });\n\n        const scales: Scales = {\n            x: new TimeIntervalScale(this.interval),\n            y: new LinearScale(),\n        };\n\n        this.chart.addPlugin(new InteractionLabelPlugin());\n        this.chart.update(this.data.map((s: Partial<IDataSeries<IAccessors>>) => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })) as IChartSeries<IAccessors>[]);\n    }\n}\n";
      /***/
    },

    /***/
    "PVrp":
    /*!**************************************************************************************************************!*\
      !*** ./examples/components/demo/chart-types sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \**************************************************************************************************************/

    /*! no static exports found */

    /***/
    function PVrp(module, exports, __webpack_require__) {
      var map = {
        "./area/area-chart-basic/area-chart-basic-example.component.html": "piB5",
        "./area/area-chart-basic/area-chart-basic-example.component.ts": "MjEx",
        "./area/area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.html": "RZLy",
        "./area/area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.ts": "nX1H",
        "./area/area-chart-bi-directional/area-chart-bi-directional-example.component.html": "gPTH",
        "./area/area-chart-bi-directional/area-chart-bi-directional-example.component.ts": "bkcT",
        "./area/area-chart-stack-percentage/area-chart-stack-percentage-example.component.html": "+NPZ",
        "./area/area-chart-stack-percentage/area-chart-stack-percentage-example.component.ts": "Mr0e",
        "./area/area-chart-stack/area-chart-stack-example.component.html": "cOoB",
        "./area/area-chart-stack/area-chart-stack-example.component.ts": "5qbj",
        "./area/area-chart-variable-baseline/area-chart-variable-baseline-example.component.html": "2+7X",
        "./area/area-chart-variable-baseline/area-chart-variable-baseline-example.component.ts": "3OzY",
        "./area/area-chart-vertical/area-chart-vertical-example.component.html": "gtoS",
        "./area/area-chart-vertical/area-chart-vertical-example.component.less": "kxlW",
        "./area/area-chart-vertical/area-chart-vertical-example.component.ts": "ahTr",
        "./area/chart-docs-area.component.html": "e7Ie",
        "./area/chart-docs-area.component.ts": "TdCo",
        "./area/chart-docs-area.module.ts": "VNrK",
        "./area/test/area-chart-test.component.html": "Hyit",
        "./area/test/area-chart-test.component.ts": "zWfn",
        "./bar/bar-chart-horizontal/bar-chart-horizontal.example.component.html": "9/l/",
        "./bar/bar-chart-horizontal/bar-chart-horizontal.example.component.ts": "j71K",
        "./bar/bar-chart-test/bar-chart-test.component.html": "V5TH",
        "./bar/bar-chart-test/bar-chart-test.component.ts": "HO4h",
        "./bar/bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.html": "YH2w",
        "./bar/bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.ts": "62iK",
        "./bar/bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.html": "0txK",
        "./bar/bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.ts": "zjRD",
        "./bar/bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.html": "OID3",
        "./bar/bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.ts": "iqrN",
        "./bar/bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.html": "IISk",
        "./bar/bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.ts": "bkbR",
        "./bar/bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.html": "JozS",
        "./bar/bar-chart-test/daylight-saving-time/bar-chart-time-interval/bar-chart-time-interval-dst-test.component.ts": "PSNa",
        "./bar/bar-chart-test/daylight-saving-time/date-time-util.ts": "YAOY",
        "./bar/bar-chart-test/daylight-saving-time/daylight-saving-time-test.module.ts": "x13I",
        "./bar/bar-chart-test/daylight-saving-time/dst-time-interval-test-page.component.html": "OCfy",
        "./bar/bar-chart-test/daylight-saving-time/dst-time-interval-test-page.component.ts": "Uetg",
        "./bar/bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.html": "x45f",
        "./bar/bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.ts": "cktB",
        "./bar/bar-chart-test/time-interval/time-interval.test.component.html": "RqGI",
        "./bar/bar-chart-test/time-interval/time-interval.test.component.ts": "uzU3",
        "./bar/bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.html": "JuaB",
        "./bar/bar-chart-test/vertical-with-legend/vertical-with-legend-bar-chart-test.component.ts": "9LuY",
        "./bar/bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.html": "jZPK",
        "./bar/bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.ts": "vYZz",
        "./bar/bar-chart-time-interval/bar-chart-time-interval.example.component.html": "0Rf4",
        "./bar/bar-chart-time-interval/bar-chart-time-interval.example.component.ts": "DevO",
        "./bar/bar-chart-time-scale/bar-chart-time-scale.example.component.html": "1v3Y",
        "./bar/bar-chart-time-scale/bar-chart-time-scale.example.component.ts": "pYVe",
        "./bar/bar-chart-with-legend/bar-chart-with-legend.example.component.html": "1Aus",
        "./bar/bar-chart-with-legend/bar-chart-with-legend.example.component.ts": "j9Gm",
        "./bar/bar-chart/bar-chart.example.component.html": "J97j",
        "./bar/bar-chart/bar-chart.example.component.ts": "Zw7l",
        "./bar/chart-docs-bar.component.html": "2kIB",
        "./bar/chart-docs-bar.component.ts": "7LK1",
        "./bar/chart-docs-bar.module.ts": "N8dz",
        "./bucketed-bar/bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.html": "kMRS",
        "./bucketed-bar/bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.ts": "DSTu",
        "./bucketed-bar/bar-chart-grouped/bar-chart-grouped.example.component.html": "oeUc",
        "./bucketed-bar/bar-chart-grouped/bar-chart-grouped.example.component.ts": "wLcr",
        "./bucketed-bar/bar-chart-percentage/bar-chart-percentage.example.component.html": "lful",
        "./bucketed-bar/bar-chart-percentage/bar-chart-percentage.example.component.ts": "/7IX",
        "./bucketed-bar/bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.html": "0Gka",
        "./bucketed-bar/bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component.ts": "8bWw",
        "./bucketed-bar/bar-chart-stacked/bar-chart-stacked.example.component.html": "T5W4",
        "./bucketed-bar/bar-chart-stacked/bar-chart-stacked.example.component.ts": "u3CC",
        "./bucketed-bar/bar-chart-test/bar-chart-bucketed-test.component.html": "8f59",
        "./bucketed-bar/bar-chart-test/bar-chart-bucketed-test.component.ts": "cGUO",
        "./bucketed-bar/bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.html": "apYU",
        "./bucketed-bar/bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.ts": "Bhj1",
        "./bucketed-bar/bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.html": "9us9",
        "./bucketed-bar/bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.ts": "i0Gj",
        "./bucketed-bar/bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.html": "61M4",
        "./bucketed-bar/bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component.ts": "36JG",
        "./bucketed-bar/bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.html": "c/4/",
        "./bucketed-bar/bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.ts": "qQYL",
        "./bucketed-bar/bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.html": "Vr5r",
        "./bucketed-bar/bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.ts": "psX6",
        "./bucketed-bar/chart-docs-bucketed-bar.component.html": "Oh5A",
        "./bucketed-bar/chart-docs-bucketed-bar.component.ts": "PuQb",
        "./bucketed-bar/chart-docs-bucketed-bar.module.ts": "YNr8",
        "./chart-docs-chart-types.module.ts": "13F8",
        "./gauge/chart-docs-gauge.component.html": "ZWN/",
        "./gauge/chart-docs-gauge.component.ts": "2DII",
        "./gauge/chart-docs-gauge.module.ts": "ZDgL",
        "./gauge/donut-basic/donut-gauge-basic-example.component.html": "R/Os",
        "./gauge/donut-basic/donut-gauge-basic-example.component.less": "ZVh5",
        "./gauge/donut-basic/donut-gauge-basic-example.component.ts": "qaJP",
        "./gauge/donut-with-content/donut-gauge-with-content-example.component.html": "2Th4",
        "./gauge/donut-with-content/donut-gauge-with-content-example.component.less": "MnH5",
        "./gauge/donut-with-content/donut-gauge-with-content-example.component.ts": "4fWi",
        "./gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.html": "yMj0",
        "./gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.less": "3me9",
        "./gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.ts": "k4Bf",
        "./gauge/visual-test/donut/donut-gauge-tester.component.html": "3Isn",
        "./gauge/visual-test/donut/donut-gauge-tester.component.less": "WISq",
        "./gauge/visual-test/donut/donut-gauge-tester.component.ts": "wITR",
        "./gauge/visual-test/gauge-visual-test.component.html": "m1aH",
        "./gauge/visual-test/gauge-visual-test.component.ts": "d56P",
        "./gauge/visual-test/horizontal/horizontal-gauge-tester.component.html": "CqTf",
        "./gauge/visual-test/horizontal/horizontal-gauge-tester.component.less": "QoLo",
        "./gauge/visual-test/horizontal/horizontal-gauge-tester.component.ts": "Nchi",
        "./gauge/visual-test/vertical/vertical-gauge-tester.component.html": "OzOS",
        "./gauge/visual-test/vertical/vertical-gauge-tester.component.less": "rphd",
        "./gauge/visual-test/vertical/vertical-gauge-tester.component.ts": "WxU7",
        "./line/chart-docs-line.component.html": "z/RP",
        "./line/chart-docs-line.component.ts": "gHhF",
        "./line/chart-docs-line.module.ts": "FHSh",
        "./line/line-chart-basic/line-chart-basic.example.component.html": "vEm8",
        "./line/line-chart-basic/line-chart-basic.example.component.ts": "8a5L",
        "./line/line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.html": "XZqO",
        "./line/line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.ts": "X3ST",
        "./line/line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.html": "NmCU",
        "./line/line-chart-interrupted-calculated/line-chart-interrupted-calculated-example.component.ts": "3dis",
        "./line/line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.html": "YODk",
        "./line/line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.ts": "EIZE",
        "./line/line-chart-test/line-chart-test.component.html": "F/E+",
        "./line/line-chart-test/line-chart-test.component.ts": "PW6j",
        "./line/line-chart-visual-test/line-chart-visual-test.component.html": "y8gy",
        "./line/line-chart-visual-test/line-chart-visual-test.component.ts": "W6rv",
        "./line/line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.html": "Vd4P",
        "./line/line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.ts": "TxwX",
        "./line/line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.html": "5b7l",
        "./line/line-chart-with-axis-labels/line-chart-with-axis-labels.example.component.ts": "IyFi",
        "./line/line-chart-with-large-values/line-chart-with-large-values.example.component.html": "OMuH",
        "./line/line-chart-with-large-values/line-chart-with-large-values.example.component.ts": "FULb",
        "./line/line-chart-with-legend/line-chart-with-legend.example.component.html": "rG87",
        "./line/line-chart-with-legend/line-chart-with-legend.example.component.ts": "2Waz",
        "./line/line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.html": "0X5f",
        "./line/line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.ts": "xW1a",
        "./pie-and-donut/chart-docs-pie-and-donut.component.html": "muHI",
        "./pie-and-donut/chart-docs-pie-and-donut.component.ts": "ggvU",
        "./pie-and-donut/chart-docs-pie-and-donut.module.ts": "IlQ7",
        "./pie-and-donut/donut-chart-interactive/donut-chart-interactive.example.component.html": "7yfv",
        "./pie-and-donut/donut-chart-interactive/donut-chart-interactive.example.component.ts": "yWWf",
        "./pie-and-donut/donut-chart-test/donut-chart-test.component.html": "8Y2C",
        "./pie-and-donut/donut-chart-test/donut-chart-test.component.ts": "B1nc",
        "./pie-and-donut/donut-chart-with-content/donut-chart-with-content.example.component.html": "7D5C",
        "./pie-and-donut/donut-chart-with-content/donut-chart-with-content.example.component.ts": "fPMf",
        "./pie-and-donut/donut-chart/donut-chart.example.component.html": "jpmM",
        "./pie-and-donut/donut-chart/donut-chart.example.component.ts": "HZrt",
        "./pie-and-donut/pie-chart-test/pie-chart-test.component.html": "3EEk",
        "./pie-and-donut/pie-chart-test/pie-chart-test.component.ts": "VH8F",
        "./pie-and-donut/pie-chart/pie-chart.example.component.html": "RAMD",
        "./pie-and-donut/pie-chart/pie-chart.example.component.ts": "mcih",
        "./spark/chart-docs-spark.component.html": "VXYK",
        "./spark/chart-docs-spark.component.ts": "aEDV",
        "./spark/chart-docs-spark.module.ts": "WWui",
        "./spark/spark-chart-area-multiple/spark-chart-area-multiple.example.component.html": "/8ED",
        "./spark/spark-chart-area-multiple/spark-chart-area-multiple.example.component.ts": "slmc",
        "./spark/spark-chart-basic/spark-chart-basic.example.component.html": "VU9g",
        "./spark/spark-chart-basic/spark-chart-basic.example.component.ts": "9WrG",
        "./spark/spark-chart-legend/spark-chart-legend.example.component.html": "kBhg",
        "./spark/spark-chart-legend/spark-chart-legend.example.component.ts": "VUb8",
        "./spark/spark-chart-multiple/spark-chart-multiple.example.component.html": "O2Lm",
        "./spark/spark-chart-multiple/spark-chart-multiple.example.component.ts": "4T4B",
        "./spark/spark-chart-stroke-test/area-spark-minimal-test.component.html": "Voir",
        "./spark/spark-chart-stroke-test/area-spark-minimal-test.component.less": "Z35r",
        "./spark/spark-chart-stroke-test/area-spark-minimal-test.component.ts": "BCaa",
        "./spark/spark-chart-table/spark-chart-table.example.component.html": "xLy/",
        "./spark/spark-chart-table/spark-chart-table.example.component.ts": "MhnZ",
        "./spark/spark-chart-test/spark-chart-test.component.html": "k9+c",
        "./spark/spark-chart-test/spark-chart-test.component.ts": "zT5C",
        "./status/chart-docs-status.component.html": "CL57",
        "./status/chart-docs-status.component.ts": "xtT8",
        "./status/chart-docs-status.module.ts": "AOID",
        "./status/status-chart/status-chart.example.component.html": "zEWV",
        "./status/status-chart/status-chart.example.component.ts": "UY5a",
        "./status/status-legend-chart/status-legend-chart.example.component.html": "jbW9",
        "./status/status-legend-chart/status-legend-chart.example.component.less": "fTb4",
        "./status/status-legend-chart/status-legend-chart.example.component.ts": "PvYx",
        "./status/status-test/status-chart-test.component.html": "JmEi",
        "./status/status-test/status-chart-test.component.ts": "FEzG",
        "./waterfall/chart-docs-waterfall.component.html": "gRjP",
        "./waterfall/chart-docs-waterfall.component.ts": "u/6E",
        "./waterfall/chart-docs-waterfall.module.ts": "hNHc",
        "./waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.html": "NmR+",
        "./waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.less": "X7MK",
        "./waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.ts": "nuLn",
        "./waterfall/waterfall-chart-simple/waterfall-chart-simple.example.component.html": "Ipb4",
        "./waterfall/waterfall-chart-simple/waterfall-chart-simple.example.component.ts": "nLao",
        "./waterfall/waterfall-test/waterfall-chart-test.component.html": "a/lW",
        "./waterfall/waterfall-test/waterfall-chart-test.component.ts": "4H1E"
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
      webpackContext.id = "PVrp";
      /***/
    },

    /***/
    "PW6j":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-test/line-chart-test.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PW6j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, SequentialColorProvider, TimeScale, XYGrid, XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\ninterface ChartDatum {\n    x: moment.Moment;\n    y: number;\n}\n\n@Component({\n    selector: \"nui-line-chart-test\",\n    templateUrl: \"./line-chart-test.component.html\",\n})\nexport class LineChartTestComponent implements OnInit {\n\n    public input: string;\n    public chart: Chart;\n    private seriesSet: IChartSeries<ILineAccessors>[];\n    private initialInput = [[30, 95, 15, 60, 35], [60, 40, 70, 45, 90]];\n\n    public ngOnInit() {\n        this.input = JSON.stringify(this.initialInput);\n        this.configureChart();\n        this.buildSeriesSet();\n\n        this.update(this.initialInput);\n    }\n\n    public inputChanged(value: string) {\n        this.update(JSON.parse(value));\n    }\n\n    private update(input: number[][]) {\n        this.seriesSet.forEach((s: IChartSeries<ILineAccessors>, i: number) => {\n            const seriesInput = input[i] || [];\n            s.data.forEach((datum: ChartDatum, j: number) => {\n                const newValue = seriesInput[j] || 0;\n                datum.y = newValue;\n            });\n        });\n\n        this.chart.update(this.seriesSet);\n    }\n\n    private configureChart() {\n        const gridConfig = new XYGridConfig();\n        gridConfig.dimension.autoHeight = false;\n        gridConfig.dimension.autoWidth = false;\n        gridConfig.dimension.height(110);\n        gridConfig.dimension.width(400);\n        this.chart = new Chart(new XYGrid(gridConfig));\n    }\n\n    private buildSeriesSet() {\n        const colors = [\"red\", \"orange\", \"yellow\", \"green\", \"blue\", \"purple\", \"black\", \"white\"];\n        const dates = [\"2016-12-25\", \"2016-12-26\", \"2016-12-27\", \"2016-12-28\", \"2016-12-29\"];\n        const format = \"YYYY-MM-DD\";\n        const renderer = new LineRenderer();\n        const accessors = new LineAccessors(new SequentialColorProvider(colors));\n        const yScale = new LinearScale();\n        yScale.fixDomain([0, 100]);\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: yScale,\n        };\n\n        this.seriesSet = [\n            {\n                id: \"1\",\n                name: \"Series 1\",\n                data: dates.map((d: string) => ({ x: moment(d, format), y: 0 })),\n            },\n            {\n                id: \"2\",\n                name: \"Series 2\",\n                data: dates.map((d: string) => ({ x: moment(d, format), y: 0 })),\n            },\n        ].map(s => ({ ...s, scales, renderer, accessors }));\n    }\n}\n";
      /***/
    },

    /***/
    "PuQb":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/chart-docs-bucketed-bar.component.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PuQb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-bucketed-bar\",\n    templateUrl: \"./chart-docs-bucketed-bar.component.html\",\n})\nexport class ChartDocsBucketedBarComponent {\n}\n";
      /***/
    },

    /***/
    "PvYx":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-legend-chart/status-legend-chart.example.component.ts ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PvYx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IconService } from \"@nova-ui/bits\";\nimport {\n    BandScale, BarHighlightStrategy, BarRenderer, BarStatusGridConfig, Chart, ChartAssist, ChartPalette, CHART_PALETTE_CS_S, IXYScales, MappedValueProvider,\n    statusAccessors, StatusAccessors, SvgMarker, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport { Observable } from \"rxjs\";\nimport { map } from \"rxjs/operators\";\n\nenum Status {\n    Unknown = \"unknown\",\n    Up = \"up\",\n    Warning = \"warning\",\n    Down = \"down\",\n    Critical = \"critical\",\n}\n\nconst OPACITY_BACKGROUND_EMPHASIZED = 0.4;\n\n@Component({\n    selector: \"nui-status-legend-chart-example\",\n    templateUrl: \"./status-legend-chart.example.component.html\",\n    styleUrls: [\"./status-legend-chart.example.component.less\"],\n})\nexport class StatusLegendChartExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    public legendLabel$: Observable<any>;\n    public legendIcon$: Observable<any>;\n    public legendBackground$: Observable<any>;\n\n    constructor(private iconService: IconService) {\n    }\n\n    public ngOnInit() {\n        const chart = new Chart(new XYGrid(new BarStatusGridConfig()));\n        this.chartAssist = new ChartAssist(chart);\n\n        const statusColors = createColorProvider();\n        const accessors = statusAccessors(statusColors);\n        // Thickness accessor should be used to specify which status corresponds to a thin bar or thick\n        accessors.data.thickness = (data: any) => data.status === Status.Up ? BarRenderer.THIN : BarRenderer.THICK;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new BandScale().fixDomain(StatusAccessors.STATUS_DOMAIN),\n        };\n\n        const seriesSet = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.chart.update(seriesSet);\n\n        const statusMarkers = createMarkerProvider(this.iconService);\n        const palette = new ChartPalette(statusColors, { backgroundOpacity: OPACITY_BACKGROUND_EMPHASIZED });\n        // legendLabelData$ is a stream of data that can be used to display data in legend\n        // (last value while user does not interact with chart and current value while interacting).\n        // This can help to generate stream of labels/icons/backgrounds:\n        this.legendLabel$ = this.chartAssist.legendLabelData$(seriesSet[0])\n            .pipe(\n                map(d => d.status)\n            );\n        this.legendIcon$ = this.legendLabel$\n            .pipe(\n                map(statusMarkers.get)\n            );\n        this.legendBackground$ = this.legendLabel$\n            .pipe(\n                map(palette.backgroundColors.get)\n            );\n    }\n}\n\nfunction createColorProvider() {\n    return new MappedValueProvider<string>({\n        [Status.Unknown]: CHART_PALETTE_CS_S[3],\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Down]: CHART_PALETTE_CS_S[0],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n    });\n}\n\nfunction createMarkerProvider(iconService: IconService) {\n    const getStatusMarker = (status: string) => new SvgMarker(iconService.getStatusIcon(status));\n\n    return new MappedValueProvider({\n        [Status.Unknown]: getStatusMarker(Status.Unknown),\n        [Status.Up]: getStatusMarker(Status.Up),\n        [Status.Warning]: getStatusMarker(Status.Warning),\n        [Status.Down]: getStatusMarker(Status.Down),\n        [Status.Critical]: getStatusMarker(Status.Critical),\n    });\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"series-1\",\n        name: \"Series 1\",\n        data: [\n            {\n                status: Status.Up,\n                start: new Date(2012, 5, 3),\n                end: new Date(2012, 5, 6),\n            },\n            {\n                status: Status.Down,\n                start: new Date(2012, 5, 6),\n                end: new Date(2012, 5, 17),\n            },\n            {\n                status: Status.Warning,\n                start: new Date(2012, 5, 17),\n                end: new Date(2012, 5, 18),\n            },\n        ].map(d => ({\n            value: d.end,\n            status: d.status,\n            start: d.start,\n            end: d.end,\n        })),\n    }];\n}\n";
      /***/
    },

    /***/
    "QoLo":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.less ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QoLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"@nova-ui/bits/sdk/less/nui-framework-variables\";\n\n.chart {\n    width: 200px;\n}\n";
      /***/
    },

    /***/
    "R/Os":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-basic/donut-gauge-basic-example.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ROs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex flex-column align-items-center\">\n    <nui-chart class=\"chart\" [chart]=\"chartAssist.chart\"></nui-chart>\n    <nui-form-field class=\"mt-5\"\n                    caption=\"Value\"\n                    [showOptionalText]=\"false\">\n        <nui-textbox-number type=\"number\"\n                            [ngModel]=\"gaugeConfig.value\"\n                            (ngModelChange)=\"onValueChange($event)\"\n                            [minValue]=\"0\"\n                            [maxValue]=\"gaugeConfig.max\"\n                            customBoxWidth=\"75px\"></nui-textbox-number>\n    </nui-form-field>\n</div>\n";
      /***/
    },

    /***/
    "RAMD":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/pie-chart/pie-chart.example.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RAMD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "RZLy":
    /*!************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.html ***!
      \************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RZLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssistTop.chart\" nuiChartCollectionId=\"bi-di-stacked-area\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <ng-container *ngTemplateOutlet=\"legend; context: { chartAssist: chartAssistTop}\"></ng-container>\n    </div>\n</div>\n<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssistBottom.chart\" nuiChartCollectionId=\"bi-di-stacked-area\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <ng-container *ngTemplateOutlet=\"legend; context: { chartAssist: chartAssistBottom}\"></ng-container>\n    </div>\n</div>\n\n<ng-template #legend let-chartAssist=\"chartAssist\">\n    <nui-legend seriesUnitLabel=\"Mbps\" i18n-seriesUnitLabel\n                [active]=\"chartAssist.isLegendActive\"\n                [interactive]=\"true\"\n                (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n        <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                           [descriptionPrimary]=\"legendSeries['name']\"\n                           (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                           [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                           [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                           (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n\n            <!-- Specify the 'tick' formatter to display positive values for both series in the legend. -->\n            <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->\n            <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', 'tick', 'y1')\"\n                                  [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                  [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                <nui-chart-marker rightEdge\n                                  [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                  [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                </nui-chart-marker>\n            </nui-rich-legend-tile>\n        </nui-legend-series>\n    </nui-legend>\n</ng-template>\n";
      /***/
    },

    /***/
    "RqGI":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/time-interval/time-interval.test.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RqGI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "T5W4":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-stacked/bar-chart-stacked.example.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function T5W4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, Mbps</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"true\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.id\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.value}}</span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "TdCo":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/chart-docs-area.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TdCo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-area\",\n    templateUrl: \"./chart-docs-area.component.html\",\n})\nexport class ChartDocsAreaComponent {\n}\n";
      /***/
    },

    /***/
    "TxwX":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TxwX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { ChangeDetectorRef, Component, OnDestroy, OnInit } from \"@angular/core\";\nimport {\n    AXES_STYLE_CHANGE_EVENT,\n    Chart,\n    ChartAssist,\n    IAxesStyleChangeEventPayload,\n    IChartEvent,\n    IChartSeries,\n    ILineAccessors,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    TimeScale,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\nimport { Subject } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\n@Component({\n    selector: \"line-chart-with-2y-axes-example\",\n    templateUrl: \"./line-chart-with-2y-axes-example.component.html\",\n})\nexport class LineChartWith2YAxesExampleComponent implements OnInit, OnDestroy {\n    public chart: Chart;\n    public chartAssist: ChartAssist;\n\n    public yLeftScale: LinearScale;\n    public yRightScale: LinearScale;\n    public axesStyles: IAxesStyleChangeEventPayload;\n\n    private destroy$ = new Subject();\n\n    public get leftAxisStyles() {\n        return this.axesStyles?.[this.yLeftScale.id] ?? {};\n    }\n\n    public get rightAxisStyles() {\n        return this.axesStyles?.[this.yRightScale.id] ?? {};\n    }\n\n    constructor(public changeDetector: ChangeDetectorRef) {\n    }\n\n    public ngOnInit() {\n        const xScale = new TimeScale();\n        this.yLeftScale = new LinearScale();\n        this.yLeftScale.formatters.tick = (value: Number) => `${value}%`;\n\n        this.yRightScale = new LinearScale();\n        this.yRightScale.formatters.tick = (value: Number) => `${value}G`;\n\n        const xyGrid = new XYGrid();\n\n        // Set the grid's left and right scale id's using the id's of the corresponding scales\n        xyGrid.leftScaleId = this.yLeftScale.id;\n        xyGrid.rightScaleId = this.yRightScale.id;\n\n        // Set the grid's 'axis.left.fit' property to 'true' to accommodate the extra label width required by the\n        // left scale's tick formatter output (Note: 'axis.right.fit' is true by default.).\n        xyGrid.config().axis.left.fit = true;\n\n        this.chart = new Chart(xyGrid);\n        this.chartAssist = new ChartAssist(this.chart);\n\n        const accessors = new LineAccessors();\n        const renderer = new LineRenderer();\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales: {\n                x: xScale,\n                // In this case, we're using the right-hand scale only for \"series-3\"\n                y: d.id === \"series-3\" ? this.yRightScale : this.yLeftScale,\n            },\n            unitLabel: d.id === \"series-3\" ? \"GB\" : \"%\",\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n\n        // Here we subscribe to an event indicating changes on axis styling. We use that information to style axis labels\n        this.chart.eventBus.getStream(AXES_STYLE_CHANGE_EVENT)\n            .pipe(takeUntil(this.destroy$))\n            .subscribe((event: IChartEvent<IAxesStyleChangeEventPayload>) => {\n                this.axesStyles = event.data;\n                this.changeDetector.markForCheck();\n            });\n    }\n\n    public ngOnDestroy(): void {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Average CPU Load\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Packet Loss\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n        {\n            id: \"series-3\",\n            name: \"Average Memory Used\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 10 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 75 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 22 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n        {\n            id: \"series-4\",\n            name: \"No data\",\n            data: [],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "UY5a":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-chart/status-chart.example.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UY5a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IconService } from \"@nova-ui/bits\";\nimport {\n    BandScale, BarHighlightStrategy, BarRenderer, BarStatusGridConfig, BarTooltipsPlugin, Chart, CHART_PALETTE_CS_S, HIGHLIGHT_DATA_POINT_EVENT,\n    InteractionLabelPlugin, InteractionLinePlugin, IValueProvider, IXYScales, MappedValueProvider, SELECT_DATA_POINT_EVENT, statusAccessors, StatusAccessors,\n    SvgMarker, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\nenum Status {\n    Unknown = \"unknown\",\n    Up = \"up\",\n    Warning = \"warning\",\n    Down = \"down\",\n    Critical = \"critical\",\n}\n\n@Component({\n    selector: \"nui-status-chart-example\",\n    templateUrl: \"./status-chart.example.component.html\",\n})\nexport class StatusChartExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid(new BarStatusGridConfig()));\n    public tooltipsPlugin: BarTooltipsPlugin;\n    public tooltipsStatusMarkers: IValueProvider<SvgMarker>;\n\n    constructor(private iconService: IconService) {\n    }\n\n    public ngOnInit() {\n        // Configure the tooltips plugin (if needed)\n        this.tooltipsStatusMarkers = createTooltipMarkerProvider(this.iconService);\n        this.tooltipsPlugin = new BarTooltipsPlugin({ horizontal: true });\n        this.chart.addPlugin(this.tooltipsPlugin);\n\n        // In order to set an interaction Label Formatter that is independent from bottom tick formatter,\n        // it should be added separately with the formatter name in the constructor.\n        // See timeScale.formatters.labelFormatter instance below.\n        this.chart.addPlugin(new InteractionLabelPlugin(\"labelFormatter\"));\n        this.chart.addPlugin(new InteractionLinePlugin());\n\n        // Create a MappedValueProvider to map the statuses to their corresponding colors and pass it to the\n        // statusAccessors function to generate a StatusAccessors instance\n        const statusColors = createColorProvider();\n        const accessors = statusAccessors(statusColors);\n\n        // Thickness accessor should be used to specify which status corresponds to a thin bar or thick\n        accessors.data.thickness = (data: any) => data.status === Status.Up ? BarRenderer.THIN : BarRenderer.THICK;\n\n        // Configure the marker accessor to provide the symbols displayed at the center of each status bar\n        // depending on the value of the datapoint.\n        const iconSize: number = 10;\n        const icons = new MappedValueProvider(getResizedIconsValueMap(this.iconService, iconSize));\n        accessors.data.marker = (data: any) => icons.get(data.status);\n\n        // Create the bar renderer. The 'x' BarHighlightStrategy indicates that bars will be highlighted\n        // as the mouse moves along the x-axis. This makes sense for the status chart since it's\n        // horizontally oriented and all bars are aligned at the same y coordinate.\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        // Create the scales making sure that the scale for the y-axis is a band scale\n        const bandScale = new BandScale();\n        const timeScale = new TimeScale();\n        const scales: IXYScales = {\n            x: timeScale,\n            y: bandScale,\n        };\n\n        // This formats label in interaction label plugin\n        timeScale.formatters.labelFormatter = (d: any) => moment(d).format(\"LL\");\n\n        // Fix the band scale domain to a single value, in this case STATUS_DOMAIN\n        bandScale.fixDomain(StatusAccessors.STATUS_DOMAIN);\n\n        // Assemble the series set\n        const seriesSet = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Update the chart\n        this.chart.update(seriesSet);\n\n        // Sample events that can be used in order to handle click or highlighting of certain status\n        this.chart.getEventBus().getStream(HIGHLIGHT_DATA_POINT_EVENT).subscribe(console.log);\n        this.chart.getEventBus().getStream(SELECT_DATA_POINT_EVENT).subscribe(console.log);\n    }\n}\n\nfunction createTooltipMarkerProvider(iconService: IconService): IValueProvider<SvgMarker> {\n    const getStatusMarker = (status: string) => new SvgMarker(iconService.getStatusIcon(status));\n\n    return new MappedValueProvider({\n        [Status.Unknown]: getStatusMarker(Status.Unknown),\n        [Status.Up]: getStatusMarker(Status.Up),\n        [Status.Warning]: getStatusMarker(Status.Warning),\n        [Status.Down]: getStatusMarker(Status.Down),\n        [Status.Critical]: getStatusMarker(Status.Critical),\n    });\n}\n\nfunction createColorProvider(): IValueProvider<string> {\n    return new MappedValueProvider<string>({\n        [Status.Unknown]: CHART_PALETTE_CS_S[3],\n        [Status.Up]: CHART_PALETTE_CS_S[4],\n        [Status.Warning]: CHART_PALETTE_CS_S[2],\n        [Status.Down]: CHART_PALETTE_CS_S[0],\n        [Status.Critical]: CHART_PALETTE_CS_S[1],\n    });\n}\n\nfunction getResizedIconsValueMap(iconService: IconService, iconSize: number) {\n    return {\n        [Status.Unknown]: iconService.getIconResized(iconService.getStatusIcon(Status.Unknown), iconSize),\n        [Status.Up]: iconService.getIconResized(iconService.getStatusIcon(Status.Up), iconSize),\n        [Status.Warning]: iconService.getIconResized(iconService.getStatusIcon(Status.Warning), iconSize),\n        [Status.Down]: iconService.getIconResized(iconService.getStatusIcon(Status.Down), iconSize),\n        [Status.Critical]: iconService.getIconResized(iconService.getStatusIcon(Status.Critical), iconSize),\n    };\n}\n\n/* Chart data */\nfunction getData() {\n    return [{\n        id: \"1\",\n        name: \"Series 1\",\n        data: [\n            {\n                status: Status.Up,\n                start: 0, // in days from today\n                end: 22,\n            },\n            {\n                status: Status.Warning,\n                start: 22,\n                end: 39,\n            },\n            {\n                status: Status.Unknown,\n                start: 39,\n                end: 59,\n            },\n            {\n                status: Status.Down,\n                start: 59,\n                end: 109,\n            },\n            {\n                status: Status.Critical,\n                start: 109,\n                end: 178,\n            },\n            {\n                status: Status.Up,\n                start: 178,\n                end: 877,\n            },\n            {\n                status: Status.Critical,\n                start: 877,\n                end: 980,\n            },\n            {\n                status: Status.Warning,\n                start: 980,\n                end: 1000,\n            },\n        ].map(d => ({\n            value: d.end - d.start,\n            status: d.status,\n            start: getDate(d.start),\n            end: getDate(d.end),\n        })),\n    }];\n}\n\nfunction getDate(hours: number) {\n    return moment().add({ hours }).toDate();\n}\n";
      /***/
    },

    /***/
    "Uetg":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/dst-time-interval-test-page.component.ts ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Uetg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IAccessors, IDataSeries } from \"@nova-ui/charts\";\nimport moment, { duration } from \"moment/moment\";\nimport { DateTimeUtil } from \"./date-time-util\";\n\n@Component({\n    templateUrl: \"./dst-time-interval-test-page.component.html\",\n})\nexport class DstTimeIntervalTestPageComponent {\n    public insideDstData = getInsideDstData();\n    public outsideDstData = getOutsideDstData();\n    public startDstOneMinuteData: Partial<IDataSeries<IAccessors>>[];\n    public startDstOneHourData: Partial<IDataSeries<IAccessors>>[];\n    public startDstTwoHourData: Partial<IDataSeries<IAccessors>>[];\n    public startDstOneDayData: Partial<IDataSeries<IAccessors>>[];\n    public endDstOneMinuteData: Partial<IDataSeries<IAccessors>>[];\n    public endDstOneHourData: Partial<IDataSeries<IAccessors>>[];\n    public endDstTwoHourData: Partial<IDataSeries<IAccessors>>[];\n    public endDstOneDayData: Partial<IDataSeries<IAccessors>>[];\n    public oneMinuteInterval = duration(1, \"minute\");\n    public oneDayInterval = duration(1, \"days\");\n    public oneHourInterval = duration(1, \"hours\");\n    public twoHourInterval = duration(2, \"hours\");\n\n    private startDstMidnight: Date;\n    private startDstHour: Date;\n    private endDstMidnight: Date;\n    private endDstHour: Date;\n\n    constructor() {\n        this.startDstMidnight = DateTimeUtil.getStartDstMidnight(2021);\n        this.startDstHour = DateTimeUtil.getStartDstHour(2021);\n        this.endDstMidnight = DateTimeUtil.getEndDstMidnight(2021);\n        this.endDstHour = DateTimeUtil.getEndDstHour(2021);\n\n        this.startDstOneMinuteData = getStartDstOneMinuteData(this.startDstHour);\n        this.startDstOneHourData = getStartDstOneHourData(this.startDstHour);\n        this.startDstTwoHourData = getStartDstTwoHourData(this.startDstHour);\n        this.startDstOneDayData = getStartDstOneDayData(this.startDstMidnight);\n        this.endDstOneMinuteData = getEndDstOneMinuteData(this.endDstHour);\n        this.endDstOneHourData = getEndDstOneHourData(this.endDstHour);\n        this.endDstTwoHourData = getEndDstTwoHourData(this.endDstHour);\n        this.endDstOneDayData = getEndDstOneDayData(this.endDstMidnight);\n\n        console.log(\"Local Time Zone:\", Intl.DateTimeFormat().resolvedOptions().timeZone);\n    }\n}\n\nfunction getStartDstOneMinuteData(startDstHour: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(startDstHour).subtract(1, \"minute\").toDate(), y: 30 },\n                { x: startDstHour, y: 95 },\n                { x: moment(startDstHour).add(1, \"minute\").toDate(), y: 15 },\n                { x: moment(startDstHour).add(2, \"minutes\").toDate(), y: 60 },\n                { x: moment(startDstHour).add(3, \"minutes\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getStartDstOneHourData(startDstHour: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(startDstHour).subtract(1, \"hour\").toDate(), y: 30 },\n                { x: startDstHour, y: 95 },\n                { x: moment(startDstHour).add(1, \"hour\").toDate(), y: 15 },\n                { x: moment(startDstHour).add(2, \"hours\").toDate(), y: 60 },\n                { x: moment(startDstHour).add(3, \"hours\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getStartDstTwoHourData(startDstHour: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(startDstHour).subtract(2, \"hours\").toDate(), y: 30 },\n                { x: startDstHour, y: 95 },\n                { x: moment(startDstHour).add(2, \"hours\").toDate(), y: 15 },\n                { x: moment(startDstHour).add(4, \"hours\").toDate(), y: 60 },\n                { x: moment(startDstHour).add(6, \"hours\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getStartDstOneDayData(startDstMidnight: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(startDstMidnight).subtract(1, \"day\").toDate(), y: 30 },\n                { x: startDstMidnight, y: 95 },\n                { x: moment(startDstMidnight).add(1, \"day\").toDate(), y: 15 },\n                { x: moment(startDstMidnight).add(2, \"days\").toDate(), y: 60 },\n                { x: moment(startDstMidnight).add(3, \"days\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getEndDstOneMinuteData(endDstHour: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(endDstHour).subtract(1, \"minute\").toDate(), y: 30 },\n                { x: endDstHour, y: 95 },\n                { x: moment(endDstHour).add(1, \"minute\").toDate(), y: 15 },\n                { x: moment(endDstHour).add(2, \"minutes\").toDate(), y: 60 },\n                { x: moment(endDstHour).add(3, \"minutes\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getEndDstOneHourData(endDstHour: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(endDstHour).subtract(1, \"hour\").toDate(), y: 30 },\n                { x: endDstHour, y: 95 },\n                { x: moment(endDstHour).add(1, \"hour\").toDate(), y: 15 },\n                { x: moment(endDstHour).add(2, \"hours\").toDate(), y: 60 },\n                { x: moment(endDstHour).add(3, \"hours\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getEndDstTwoHourData(endDstHour: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(endDstHour).subtract(2, \"hours\").toDate(), y: 30 },\n                { x: endDstHour, y: 95 },\n                { x: moment(endDstHour).add(2, \"hours\").toDate(), y: 15 },\n                { x: moment(endDstHour).add(4, \"hours\").toDate(), y: 60 },\n                { x: moment(endDstHour).add(6, \"hours\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getEndDstOneDayData(endDstMidnight: Date): Partial<IDataSeries<IAccessors>>[] {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(endDstMidnight).subtract(1, \"day\").toDate(), y: 30 },\n                { x: endDstMidnight, y: 95 },\n                { x: moment(endDstMidnight).add(1, \"day\").toDate(), y: 15 },\n                { x: moment(endDstMidnight).add(2, \"days\").toDate(), y: 60 },\n                { x: moment(endDstMidnight).add(3, \"days\").toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getInsideDstData(): Partial<IDataSeries<IAccessors>>[] {\n    const format = \"YYYY-MM-DDTHH\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2021-07-03T0\", format).toDate(), y: 30 },\n                { x: moment(\"2021-07-04T0\", format).toDate(), y: 95 },\n                { x: moment(\"2021-07-05T0\", format).toDate(), y: 15 },\n                { x: moment(\"2021-07-06T0\", format).toDate(), y: 60 },\n                { x: moment(\"2021-07-07T0\", format).toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n\nfunction getOutsideDstData(): Partial<IDataSeries<IAccessors>>[] {\n    const format = \"YYYY-MM-DDTHH\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2020-12-01T0\", format).toDate(), y: 30 },\n                { x: moment(\"2020-12-02T0\", format).toDate(), y: 95 },\n                { x: moment(\"2020-12-03T0\", format).toDate(), y: 15 },\n                { x: moment(\"2020-12-04T0\", format).toDate(), y: 60 },\n                { x: moment(\"2020-12-05T0\", format).toDate(), y: 35 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "V5TH":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-test.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function V5TH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <charts-test-harness>\n        <div class=\"m-5\">\n            <h4>Basic vertical bar chart</h4>\n            <nui-basic-vertical-bar-chart-test></nui-basic-vertical-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Horizontal bar chart with legend</h4>\n            <nui-horizontal-with-legend-bar-chart-test></nui-horizontal-with-legend-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Vertical bar chart with legend</h4>\n            <nui-vertical-with-legend-bar-chart-test></nui-vertical-with-legend-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Vertical bar chart with timescale</h4>\n            <nui-vertical-with-timescale-bar-chart-test></nui-vertical-with-timescale-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Basic horizontal bar chart</h4>\n            <nui-basic-horizontal-bar-chart-test></nui-basic-horizontal-bar-chart-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Time Interval bar</h4>\n            <nui-time-interval-test></nui-time-interval-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Bar Chart with tick label max width</h4>\n            <nui-bar-chart-tick-label-max-width-test></nui-bar-chart-tick-label-max-width-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Bar Chart with tick label max width with margin</h4>\n            <nui-bar-chart-tick-label-max-width-with-margin-test></nui-bar-chart-tick-label-max-width-with-margin-test>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "VH8F":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/pie-chart-test/pie-chart-test.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VH8F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { Chart, ChartAssist, PieRenderer, radial, RadialAccessors, radialGrid, radialScales } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-pie-chart-test\",\n    templateUrl: \"./pie-chart-test.component.html\",\n})\nexport class PieChartTestComponent implements OnInit {\n\n    public chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n\n    ngOnInit() {\n        const accessors = new RadialAccessors();\n        const scales = radialScales();\n        const renderer = new PieRenderer();\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [60] },\n        { id: \"edge\", name: \"Edge\", data: [30] },\n        { id: \"ff\", name: \"FF\", data: [15] },\n        { id: \"safari\", name: \"Safari\", data: [5] },\n    ];\n}\n";
      /***/
    },

    /***/
    "VNrK":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/chart-docs-area.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VNrK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { AreaChartBasicExampleComponent } from \"./area-chart-basic/area-chart-basic-example.component\";\nimport { AreaChartBiDirectionalExampleComponent } from \"./area-chart-bi-directional/area-chart-bi-directional-example.component\";\nimport { AreaChartStackPercentageExampleComponent } from \"./area-chart-stack-percentage/area-chart-stack-percentage-example.component\";\nimport { AreaChartStackExampleComponent } from \"./area-chart-stack/area-chart-stack-example.component\";\nimport { AreaChartVariableBaselineExampleComponent } from \"./area-chart-variable-baseline/area-chart-variable-baseline-example.component\";\nimport { AreaChartVerticalExampleComponent } from \"./area-chart-vertical/area-chart-vertical-example.component\";\nimport { ChartDocsAreaComponent } from \"./chart-docs-area.component\";\nimport { AreaChartTestComponent } from \"./test/area-chart-test.component\";\nimport { AreaChartBiDirectionalStackedExampleComponent } from \"./area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsAreaComponent,\n        data: {\n            srlc: {\n                stage: SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: AreaChartBasicExampleComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"bi-directional\",\n        component: AreaChartBiDirectionalExampleComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"variable-baseline\",\n        component: AreaChartVariableBaselineExampleComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"vertical\",\n        component: AreaChartVerticalExampleComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: AreaChartTestComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"stacked\",\n        component: AreaChartStackExampleComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n    {\n        path: \"bi-directional-stacked\",\n        component: AreaChartBiDirectionalStackedExampleComponent,\n        data: {\n            srlc: {\n                hideIndicator: true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsAreaComponent,\n        AreaChartBasicExampleComponent,\n        AreaChartBiDirectionalExampleComponent,\n        AreaChartBiDirectionalStackedExampleComponent,\n        AreaChartVariableBaselineExampleComponent,\n        AreaChartVerticalExampleComponent,\n        AreaChartStackExampleComponent,\n        AreaChartStackPercentageExampleComponent,\n        AreaChartTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        FormsModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsAreaModule {\n}\n";
      /***/
    },

    /***/
    "VU9g":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-basic/spark-chart-basic.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VU9g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"w-25 d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "VUb8":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-legend/spark-chart-legend.example.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VUb8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, SparkChartAssist, TimeScale } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-spark-chart-legend-example\",\n    templateUrl: \"./spark-chart-legend.example.component.html\",\n})\nexport class SparkChartLegendExampleComponent implements OnInit {\n    public chartAssist: SparkChartAssist;\n\n    public ngOnInit() {\n        // spark chart setup\n        this.chartAssist = new SparkChartAssist();\n\n        const accessors = new LineAccessors();\n        const renderer = new LineRenderer();\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [{\n        id: \"1\",\n        name: \"Series 1\",\n        data: [\n            { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 85 },\n            { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 57 },\n            { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 99 },\n            { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 75 },\n            { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 55 },\n            { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 73 },\n            { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 30 },\n            { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 77 },\n            { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 57 },\n            { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 61 },\n        ],\n    }];\n}\n";
      /***/
    },

    /***/
    "VXYK":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/chart-docs-spark.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VXYK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Spark Chart</h1>\n<p>\n    A spark chart is really just a line chart that's been resized and styled to give it a sparkline look\n    and feel. Theoretically you can turn any chart into a spark chart. But, practically, there are only a\n    few use cases for a spark chart that are needed so far, and these use cases are represented by the\n    examples on this page.\n</p>\n\n<h2>Simple Sparkline</h2>\n<p>\n    The simplest sparkline chart, i.e. a line visualization with no grid, axis lines, or other details, can be done as in\n    the example below. Features not described here — such as tooltips — are configured in the same way as\n    for a generic X/Y chart, so feel free to check the\n    <a href=\"../additional-documentation/chart-types/line.html\" target=\"_parent\">Line Chart</a> page for\n    guidance.\n</p>\n<p>\n    The magic of a Nova spark chart originates from the\n    <code><a href=\"../miscellaneous/functions.html#sparkChartGridConfig\" target=\"_blank\">sparkChartGridConfig</a></code>\n    function which creates a pre-baked spark chart <code><a href=\"../classes/XYGridConfig.html\" target=\"_blank\">XYGridConfig</a></code>\n    for setting up the\n    <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code>.\n</p>\n<p>\n    See the inline comments of the example source below for more details on how to achieve it.\n</p>\n<nui-example-wrapper filenamePrefix=\"spark-chart-basic\"\n                     exampleTitle=\"Simple Sparkline\">\n    <nui-spark-chart-basic-example></nui-spark-chart-basic-example>\n</nui-example-wrapper>\n\n<h2>Multiple Series</h2>\n<p>\n    Following the same approach as in the case of a\n    <a href=\"../additional-documentation/chart-types/line.html\" target=\"_parent\">Line Chart</a>,\n    using a chart assist is the easiest way to set up and manage a\n    <a href=\"../additional-documentation/advanced-usage/chart.html\" target=\"_parent\">chart</a>\n    visualization. There is one difference with spark charts though. Whereas regular line charts\n    sometimes visualize multiple data series at once, spark charts are designed to visualize a\n    single primary data series per chart.\n</p>\n<p>\n    What this means is that to visualize multiple primary series in a spark chart format, we need\n    multiple spark chart instances to be stacked discretely on top of each other. So, the\n    <code><a href=\"../classes/SparkChartAssist.html\" target=\"_blank\">SparkChartAssist</a></code>\n    reflects this pattern in that multiple primary input series result in multiple stacked spark chart\n    instances.\n</p>\n<p>\n    SparkChartAssist conceptualizes each spark chart as an\n    <code><a href=\"../interfaces/ISpark.html\" target=\"_blank\">ISpark</a></code> which consists of an id, a chart instance,\n    and an associated <code><a href=\"../interfaces/IChartAssistSeries.html\" target=\"_blank\">IChartAssistSeries</a></code>\n    collection. Typically, the series collection is a collection of one\n    primary data series and zero or more dependent series such as a background threshold series. See the\n    <a href=\"../additional-documentation/thresholds.html\" target=\"_parent\">thresholds page</a> for information\n    on how to add a threshold series to a spark chart.\n</p>\n<h3>Event Synchronization</h3>\n<p>\n    Notice the\n    <code><a href=\"../directives/ChartCollectionIdDirective.html\" target=\"_blank\">nuiChartCollectionId</a></code>\n    attribute directive used in the template of the following example. This is what allows for\n    synchronization of the events among charts. This can be seen in the following example in which\n    hovering over one sparkline results in the duplication of the interaction line for each\n    of the other sparklines.\n</p>\n<p>To get the interaction line synchronization working do the following:</p>\n<ol>\n    <li>\n        Ensure that each sparkline <code>nui-chart</code> shares the same\n        <code>nuiChartCollectionId</code> value:\n        <pre>{{collectionIdHtml}}</pre>\n    </li>\n    <li>\n        Ensure that the x-axis scale id of each spark series is the same by either using the same\n        scale instance across all series or by passing the same scale id to the scale\n        constructor parameter each time a new scale is instantiated.\n        <pre>{{scaleInstantiationWithId}}</pre>\n    </li>\n</ol>\n<h3>trackBy</h3>\n<p>\n    Also, notice in the template of the example below that the <code>trackBy</code> on the\n    <code>ngFor</code> is set to the SparkChartAssist's\n    <a href=\"../classes/SparkChartAssist.html#trackByFn\" target=\"_blank\"><code>trackByFn</code></a>\n    function. This enables SparkChartAssist and Angular to reuse an existing nui-chart if the chart's\n    associated <code><a href=\"../interfaces/ISpark.html\" target=\"_blank\">ISpark</a></code> id is the same\n    as an id that's already in use.\n</p>\n<h3>update vs. updateSparks</h3>\n<p>\n    The SparkChartAssist's\n    <code><a href=\"../classes/SparkChartAssist.html#update\" target=\"_blank\">update</a></code> method can\n    be used to initiate a spark visualization if each of your sparklines has a primary data series\n    and <strong>no</strong> dependent secondary series. The method takes a set of IChartAssistSeries as its argument, and the\n    resulting ISpark's generated by the SparkChartAssist will automatically have\n    id's equal to the corresponding series id's. The following example demonstrates how to use the update method.\n</p>\n<p>\n    The SparkChartAssist's\n    <code><a href=\"../classes/SparkChartAssist.html#updateSparks\" target=\"_blank\">updateSparks</a></code>\n    method can be used in the above case as well. But, if each of your sparkline's\n    primary data series has one or more dependent series, updateSparks <strong>must</strong> be used. Note that the method takes a set of\n    ISparks instead of IChartAssistSeries as its argument. Also, note that you do not need to provide the chart instance\n    as part of the ISpark. The SparkChartAssist generates the chart for each ISpark automatically and appends it to the ISpark object. See the\n    <a href=\"../additional-documentation/thresholds.html\" target=\"_parent\">thresholds page</a> for an example\n    of updateSparks usage.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    In the case of updateSparks, each ISpark passed to the method must be assigned an explicit id\n    to take advantage of the trackBy functionality mentioned above.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"spark-chart-multiple\"\n                     exampleTitle=\"Multiple Series\">\n    <nui-spark-chart-multiple-example></nui-spark-chart-multiple-example>\n</nui-example-wrapper>\n\n<p>\n    The next example is very similar to the above with two major changes. Here we use the\n    <code><a href=\"../classes/AreaRenderer.html\" target=\"_blank\">AreaRenderer</a></code> and the\n    <code><a href=\"../miscellaneous/functions.html#stackedAreaAccessors\" target=\"_blank\">stackedAreaAccessors</a></code> \n    function to generate and assign the <code>x</code>, <code>y</code>, <code>y0</code> and <code>y1</code> accessors. Check out the \n    <a href=\"../additional-documentation/chart-types/area.html\" target=\"_parent\">Area Chart </a>\n    page for additional guidance.\n</p>\n<nui-example-wrapper filenamePrefix=\"spark-chart-area-multiple\"\n                     exampleTitle=\"Area with Multiple Series\">\n    <nui-spark-chart-area-multiple-example></nui-spark-chart-area-multiple-example>\n</nui-example-wrapper>\n\n<h2>Adding a Legend</h2>\n<p>\n    Using a chart assist is the easiest way to manage the communication of a\n    <a href=\"../additional-documentation/advanced-usage/chart.html\" target=\"_parent\">chart</a> and\n    a <a href=\"../additional-documentation/advanced-usage/legend.html\" target=\"_parent\">legend</a>. See the example html below\n    for how to set it up.\n</p>\n<nui-example-wrapper filenamePrefix=\"spark-chart-legend\"\n                     exampleTitle=\"Adding a legend\">\n    <nui-spark-chart-legend-example></nui-spark-chart-legend-example>\n</nui-example-wrapper>\n\n<h2>Table</h2>\n<p>\n    The next example demonstrates how to implement multiple sparklines within a table. Instantiation of\n    <code><a href=\"../classes/SparkChartAssist.html\" target=\"_blank\">SparkChartAssist</a></code> including plugins and\n    all related functionality has to be done for every row in the table.\n</p>\n<nui-example-wrapper filenamePrefix=\"spark-chart-table\"\n                     exampleTitle=\"Table\">\n    <nui-spark-chart-table-example></nui-spark-chart-table-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "Vd4P":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-2y-axes/line-chart-with-2y-axes-example.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vd4P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n [style]=\"leftAxisStyles\">Left axis label</strong></div>\n    <div class=\"axis-label-right nui-text-small\"><strong i18n [style]=\"rightAxisStyles\">Right axis label</strong></div>\n    <div class=\"axis-label-bottom nui-text-small\"><strong i18n>Bottom axis label</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\"\n                                      [unitLabel]=\"legendSeries.unitLabel\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Voir":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-stroke-test/area-spark-minimal-test.component.html ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Voir(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"chart-container\">\n    <nui-chart class=\"d-flex h-100\" [chart]=\"chart\"></nui-chart>\n</div>\n";
      /***/
    },

    /***/
    "Vr5r":
    /*!******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.html ***!
      \******************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vr5r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, %</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"false\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.name\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "W6rv":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-visual-test/line-chart-visual-test.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W6rv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./line-chart-visual-test.component.html\",\n})\nexport class LineChartVisualTestComponent { }\n";
      /***/
    },

    /***/
    "WISq":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.less ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WISq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"@nova-ui/bits/sdk/less/nui-framework-variables\";\n\n.content-label {\n    line-height: 14px;\n    font-size: 11px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: var(--nui-color-text-secondary);\n}\n";
      /***/
    },

    /***/
    "WWui":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/chart-docs-spark.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WWui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiMessageModule, NuiTableModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { ChartDocsSparkComponent } from \"./chart-docs-spark.component\";\nimport { SparkChartBasicExampleComponent } from \"./spark-chart-basic/spark-chart-basic.example.component\";\nimport { SparkChartLegendExampleComponent } from \"./spark-chart-legend/spark-chart-legend.example.component\";\nimport { SparkChartMultipleExampleComponent } from \"./spark-chart-multiple/spark-chart-multiple.example.component\";\nimport { AreaSparkMinimalTestComponent } from \"./spark-chart-stroke-test/area-spark-minimal-test.component\";\nimport { SparkChartTableExampleComponent } from \"./spark-chart-table/spark-chart-table.example.component\";\nimport { SparkChartTestComponent } from \"./spark-chart-test/spark-chart-test.component\";\nimport { SparkChartAreaMultipleExampleComponent } from \"./spark-chart-area-multiple/spark-chart-area-multiple.example.component\"\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsSparkComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: SparkChartBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"legend\",\n        component: SparkChartLegendExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"multiple\",\n        component: SparkChartMultipleExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"table\",\n        component: SparkChartTableExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"area\",\n        component: SparkChartAreaMultipleExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: SparkChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsSparkComponent,\n        SparkChartBasicExampleComponent,\n        SparkChartLegendExampleComponent,\n        SparkChartMultipleExampleComponent,\n        SparkChartTableExampleComponent,\n        SparkChartAreaMultipleExampleComponent,\n        SparkChartTestComponent,\n        AreaSparkMinimalTestComponent,\n    ],\n    imports: [\n        FormsModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiTableModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsSparkModule {\n}\n";
      /***/
    },

    /***/
    "WxU7":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.ts ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WxU7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    GaugeMode,\n    GaugeUtil,\n    IAccessors,\n    IChartAssistSeries,\n    IGaugeConfig,\n    linearGaugeGridConfig,\n    LinearGaugeLabelsPlugin,\n    stack,\n    XYGrid,\n    XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"vertical-gauge-tester\",\n    templateUrl: \"./vertical-gauge-tester.component.html\",\n    styleUrls: [\"./vertical-gauge-tester.component.less\"],\n})\nexport class VerticalGaugeTesterComponent implements OnInit {\n    @Input() public gaugeConfig: IGaugeConfig;\n\n    public chartAssist: ChartAssist;\n    public seriesSet: IChartAssistSeries<IAccessors>[];\n\n    public ngOnInit() {\n        const grid = new XYGrid(linearGaugeGridConfig(GaugeMode.Vertical) as XYGridConfig);\n        const chart = new Chart(grid);\n\n        this.chartAssist = new ChartAssist(chart, stack);\n        this.chartAssist.chart.addPlugin(new LinearGaugeLabelsPlugin());\n\n        this.seriesSet = GaugeUtil.assembleSeriesSet(this.gaugeConfig, GaugeMode.Vertical);\n        this.chartAssist.update(this.seriesSet);\n    }\n}\n";
      /***/
    },

    /***/
    "X3ST":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.ts ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X3ST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    IChartAssistSeries,\n    IChartSeries,\n    ILineAccessors,\n    IXYScales,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    MissingDataLineRendererConfig,\n    TimeScale,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-interrupted-basic-example\",\n    templateUrl: \"./line-chart-interrupted-basic-example.component.html\",\n})\nexport class LineChartInterruptedBasicExampleComponent implements OnInit {\n    // XYGrid is used for rendering axes as well as other grid elements\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit() {\n        // In case of a line chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const incomingSeries = getData();\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartAssistSeries<ILineAccessors>[] = [];\n\n        // The line renderer will make the chart look like a line chart.\n        const renderer = new LineRenderer();\n        // Line accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        // Renderer for the missing dataSeries\n        const rendererMissing = new LineRenderer(new MissingDataLineRendererConfig());\n        const accessorsMissing = new LineAccessors();\n        // We need to store the original value of the 'defined' accessor\n        const origDefinedAccessor = accessorsMissing.data.defined;\n        // We're calling the original 'defined' accessor implementation, but inverting it's logic because, from the missing data\n        // series point of view, the undefined data are actually visualized as defined.\n        accessorsMissing.data.defined = (d, i, data, dataSeries) =>\n            !origDefinedAccessor?.(d, i, data, dataSeries) ?? true;\n\n        for (const s of incomingSeries) {\n            // The first data series is for rendering the valid data\n            const cs: IChartSeries<ILineAccessors> = {\n                ...s,\n                accessors,\n                renderer,\n                scales,\n            };\n            seriesSet.push(cs);\n\n            // This series will be used to visualize the missing data points\n            seriesSet.push({\n                // This naming convention will connect these two series and their interaction will be synchronized\n                id: s.id + \"__missing\",\n                data: s.data,\n                accessors: accessorsMissing,\n                renderer: rendererMissing,\n                scales,\n                showInLegend: false, // We don't want to show this in the legend\n            });\n        }\n\n        // Finally, pass the series set to the chart's update method\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format).toDate(), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format).toDate(), y: 95 },\n\n                // missing data segment\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format).toDate(), y: 95, defined: false },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format).toDate(), y: 30, defined: false  },\n\n                // single defined data point surrounded by missing data segments\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format).toDate(), y: 30 },\n\n                // missing data segment\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format).toDate(), y: 30, defined: false  },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format).toDate(), y: 60, defined: false },\n\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format).toDate(), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format).toDate(), y: 35 },\n\n                // missing data segment\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format).toDate(), y: 35, defined: false },\n                { x: moment(\"2017-01-04T15:14:29.909Z\", format).toDate(), y: 20, defined: false },\n\n                { x: moment(\"2017-01-04T15:14:29.909Z\", format).toDate(), y: 20 },\n                { x: moment(\"2017-01-05T15:14:29.909Z\", format).toDate(), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format).toDate(), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format).toDate(), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format).toDate(), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format).toDate(), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format).toDate(), y: 90 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "X7MK":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.less ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function X7MK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"@nova-ui/bits/sdk/less/nui-framework-variables\";\n@import \"@nova-ui/bits/sdk/less/mixins\";\n\n.waterfall-chart-list-item:hover {\n    .setCssVariable(background-color, nui-color-selected);\n}\n\n.waterfall-chart-list-item {\n    .setCssVariable(background-color, nui-color-bg-content);\n}\n";
      /***/
    },

    /***/
    "XZqO":
    /*!**************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-interrupted-basic/line-chart-interrupted-basic-example.component.html ***!
      \**************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XZqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "YAOY":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/date-time-util.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YAOY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import moment from \"moment/moment\";\n\n/** Class with common time utilities */\nexport class DateTimeUtil {\n    /**\n     * Gets the local midnight date-time of the day containing the start of daylight saving time for the provided year\n     *\n     * @param year The year to get the midnight date-time for the start of daylight saving time\n     *\n     * @returns {Date} The local midnight date-time of the day containing the start of daylight saving time for the provided year\n     */\n    public static getStartDstMidnight(year: number): Date {\n        const datesInYear = [];\n        for (let i = 1; i <= 365; i++) {\n            const d = new Date(year, 0, 1);\n            d.setDate(i);\n            datesInYear.push(d);\n        }\n\n        let foundStart = false;\n        return datesInYear.reduce((prev: Date, curr: Date) => {\n            if (curr.getTimezoneOffset() < prev.getTimezoneOffset()) {\n                foundStart = true;\n                return prev;\n            }\n            return foundStart ? prev : curr;\n        });\n    }\n\n    /**\n     * Gets the exact local date-time of the start of daylight saving time for the provided year\n     *\n     * @param year The year to get the exact date-time for the start of daylight saving time\n     *\n     * @returns {Date} The exact local date-time of the day containing the start of daylight saving time for the provided year\n     */\n    public static getStartDstHour(year: number): Date {\n        const startDstMidnight = DateTimeUtil.getStartDstMidnight(year);\n        const hoursInDstStartDay = [];\n        for (let i = 0; i < 24; i++) {\n            const d = new Date(startDstMidnight);\n            d.setHours(i);\n            hoursInDstStartDay.push(d);\n        }\n\n        let foundStart = false;\n        return hoursInDstStartDay.reduce((prev: Date, curr: Date) => {\n            if (curr.getTimezoneOffset() < prev.getTimezoneOffset()) {\n                foundStart = true;\n                return curr;\n            }\n            return foundStart ? prev : curr;\n        });\n    }\n\n    /**\n     * Gets the local midnight date-time of the day containing the end of daylight saving time for the provided year\n     *\n     * @param year The year to get the midnight date-time for the end of daylight saving time\n     *\n     * @returns {Date} The local midnight date-time of the day containing the end of daylight saving time for the provided year\n     */\n    public static getEndDstMidnight(year: number): Date {\n        const datesInYear = [];\n        for (let i = 1; i <= 365; i++) {\n            const d = new Date(year, 0, 1);\n            d.setDate(i);\n            datesInYear.push(d);\n        }\n\n        return datesInYear.reduce((prev: Date, curr: Date) => {\n            if (curr.getTimezoneOffset() > prev.getTimezoneOffset()) {\n                return prev;\n            }\n            return curr;\n        });\n    }\n\n    /**\n     * Gets the exact local date-time of the end of daylight saving time for the provided year\n     *\n     * @param year The year to get the exact date-time for the end of daylight saving time\n     *\n     * @returns {Date} The exact local date-time of the day containing the end of daylight saving time for the provided year\n     */\n    public static getEndDstHour(year: number): Date {\n        const endDstMidnight = DateTimeUtil.getEndDstMidnight(year);\n        const hoursInDstEndDay = [];\n        for (let i = 0; i < 24; i++) {\n            const d = new Date(endDstMidnight);\n            d.setHours(i);\n            hoursInDstEndDay.push(d);\n        }\n\n        return hoursInDstEndDay.reduce((prev: Date, curr: Date) => {\n            if (curr.getTimezoneOffset() > prev.getTimezoneOffset()) {\n                return moment(curr).subtract(1, \"hour\").toDate();\n            }\n            return prev;\n        });\n    }\n}\n";
      /***/
    },

    /***/
    "YH2w":
    /*!*****************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width-with-margin/bar-chart-tick-label-max-width-with-margin-test.component.html ***!
      \*****************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YH2w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "YNr8":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/chart-docs-bucketed-bar.module.ts ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YNr8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN, NuiButtonModule, NuiCheckboxModule, NuiDocsModule, NuiIconModule, NuiMessageModule, NuiSwitchModule, SrlcStage,\n} from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { BarChartGroupedHorizontalExampleComponent } from \"./bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component\";\nimport { BarChartGroupedExampleComponent } from \"./bar-chart-grouped/bar-chart-grouped.example.component\";\nimport { BarChartPercentageExampleComponent } from \"./bar-chart-percentage/bar-chart-percentage.example.component\";\nimport { BarChartStackedHorizontalExampleComponent } from \"./bar-chart-stacked-horizontal/bar-chart-stacked-horizontal.example.component\";\nimport { BarChartStackedExampleComponent } from \"./bar-chart-stacked/bar-chart-stacked.example.component\";\nimport { BarChartBucketedTestComponent } from \"./bar-chart-test/bar-chart-bucketed-test.component\";\nimport { BasicStackedHorizontalBarChartTestComponent } from \"./bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component\";\nimport { BasicStackedVerticalBarChartTestComponent } from \"./bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component\";\nimport { GroupedHorizontalBarChartTestComponent } from \"./bar-chart-test/grouped-horizontal/grouped-horizontal-bar-chart-test.component\";\nimport { GroupedVerticalBarChartTestComponent } from \"./bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component\";\nimport { ProportionalVerticalBarChartTestComponent } from \"./bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component\";\nimport { ChartDocsBucketedBarComponent } from \"./chart-docs-bucketed-bar.component\";\n\nconst routes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsBucketedBarComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"stacked\",\n        component: BarChartStackedExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"stacked-test\",\n        component: BasicStackedVerticalBarChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"percentage\",\n        component: BarChartPercentageExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"grouped\",\n        component: BarChartGroupedExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"grouped-horizontal\",\n        component: BarChartGroupedHorizontalExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: BarChartBucketedTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsBucketedBarComponent,\n        BarChartGroupedExampleComponent,\n        BarChartGroupedHorizontalExampleComponent,\n        BarChartPercentageExampleComponent,\n        BarChartStackedExampleComponent,\n        BarChartStackedHorizontalExampleComponent,\n        BasicStackedHorizontalBarChartTestComponent,\n        BasicStackedVerticalBarChartTestComponent,\n        GroupedHorizontalBarChartTestComponent,\n        GroupedVerticalBarChartTestComponent,\n        ProportionalVerticalBarChartTestComponent,\n        BarChartBucketedTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiButtonModule,\n        NuiCheckboxModule,\n        NuiSwitchModule,\n        NuiChartsModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsBucketedBarModule {\n}\n";
      /***/
    },

    /***/
    "YODk":
    /*!******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-interrupted-path-terminus/line-chart-interrupted-path-terminus-example.component.html ***!
      \******************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YODk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"sec\"\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "Z35r":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-stroke-test/area-spark-minimal-test.component.less ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Z35r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart-container {\n    border-left: 1px solid var(--nui-color-line-strong, #999);\n    border-right: 1px solid var(--nui-color-line-strong, #999);\n    height: 42px;\n    width: 150px;\n}\n";
      /***/
    },

    /***/
    "ZDgL":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/chart-docs-gauge.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZDgL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { FormsModule } from \"@angular/forms\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiCommonModule, NuiDocsModule, NuiFormFieldModule, NuiIconModule, NuiMessageModule, NuiTextboxModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { ChartDocsGaugeComponent } from \"./chart-docs-gauge.component\";\nimport { GaugeVisualTestComponent } from \"./visual-test/gauge-visual-test.component\";\nimport { HorizontalGaugeTesterComponent } from \"./visual-test/horizontal/horizontal-gauge-tester.component\";\nimport { DonutGaugeTesterComponent } from \"./visual-test/donut/donut-gauge-tester.component\";\nimport { VerticalGaugeTesterComponent } from \"./visual-test/vertical/vertical-gauge-tester.component\";\nimport { DonutGaugeBasicExampleComponent } from \"./donut-basic/donut-gauge-basic-example.component\";\nimport { DonutGaugeWithContentExampleComponent } from \"./donut-with-content/donut-gauge-with-content-example.component\";\nimport { DonutGaugeWithThresholdMarkersExampleComponent } from \"./donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component\";\n\nconst exampleRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsGaugeComponent,\n        data: {\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"visual-test\",\n        component: GaugeVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"donut-basic\",\n        component: DonutGaugeBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"donut-with-threshold-markers\",\n        component: DonutGaugeWithThresholdMarkersExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"donut-with-content\",\n        component: DonutGaugeWithContentExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsGaugeComponent,\n        GaugeVisualTestComponent,\n        HorizontalGaugeTesterComponent,\n        DonutGaugeTesterComponent,\n        DonutGaugeBasicExampleComponent,\n        DonutGaugeWithContentExampleComponent,\n        DonutGaugeWithThresholdMarkersExampleComponent,\n        VerticalGaugeTesterComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        FormsModule,\n        NuiChartsModule,\n        NuiCommonModule,\n        NuiFormFieldModule,\n        NuiIconModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiTextboxModule,\n        RouterModule.forChild(exampleRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsGaugeModule {\n}\n";
      /***/
    },

    /***/
    "ZVh5":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-basic/donut-gauge-basic-example.component.less ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZVh5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n    height: 200px;\n    width: 200px;\n}\n";
      /***/
    },

    /***/
    "ZWN/":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/chart-docs-gauge.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZWN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Gauges</h1>\n<p>\n    Gauges can be an effective way to display a single metric value in visual form. And, Nova Charts provides the ability to create two types of gauges\n    (donut and linear) with the assistance of a utility class called <a href=\"../classes/GaugeUtil.html\" target=\"_blank\"><code>GaugeUtil</code></a>. The main\n    set of static methods provided by the <code>GaugeUtil</code> that get you most of the way towards a functioning gauge are:\n</p>\n<ul>\n    <li>\n        <code><a href=\"../classes/GaugeUtil.html#assembleSeriesSet\" target=\"_blank\">assembleSeriesSet</a></code>: assembles a gauge series set with all of the\n        standard requisite scales, renderers, accessors, etc. needed for creating a gauge visualization based on the provided\n        <code><a href=\"../interfaces/IGaugeConfig.html\" target=\"_blank\">IGaugeConfig</a></code> object and\n        <code><a href=\"../miscellaneous/enumerations.html#GaugeMode\" target=\"_blank\">GaugeMode</a></code>.\n    </li>\n    <li>\n        <code><a href=\"../classes/GaugeUtil.html#updateSeriesSet\" target=\"_blank\">updateSeriesSet</a></code>: updates a gauge series set with the latest value,\n        max value, thresholds, and color accessors based on the provided <code><a href=\"../interfaces/IGaugeConfig.html\" target=\"_blank\">IGaugeConfig</a></code> object.\n    </li>\n</ul>\n\n<h2>Donut Type</h2>\n<p>\n    A donut gauge is well suited for use cases that consist of a larger area to display a metric visualization such as a dashboard. For use cases, with a more\n    compact display area, consider the linear gauge type also documented on this page.\n</p>\n\n<h3>Basic Donut Usage</h3>\n<p>\n    From the Nova perspective, a donut gauge is basically the same as a\n    <a href=\"../additional-documentation/chart-types/pie-and-donut.html\" target=\"_parent\">donut chart</a> but with data series formatted in a way that will\n    result in a gauge visualization. To create a donut gauge, first instantiate a donut chart, and then update the chart with a series set generated by the\n    <code>GaugeUtil</code>'s\n    <code><a href=\"../classes/GaugeUtil.html#assembleSeriesSet\" target=\"_blank\">assembleSeriesSet</a></code> function. It takes an\n    <code><a href=\"../interfaces/IGaugeConfig.html\" target=\"_blank\">IGaugeConfig</a></code> object\n    containing a value and a max value for the gauge as the first argument and a\n    <code><a href=\"../miscellaneous/enumerations.html#GaugeMode\" target=\"_blank\">GaugeMode</a></code> value of <code>GaugeMode.Donut</code> for the second\n    argument. Later, you may optionally update the\n    gauge with a new value, max value, thresholds, or even a different color accessor using the <code>GaugeUtil</code>'s\n    <code><a href=\"../classes/GaugeUtil.html#updateSeriesSet\" target=\"_blank\">updateSeriesSet</a></code> function.\n</p>\n<nui-example-wrapper filenamePrefix=\"donut-gauge-basic-example\" exampleTitle=\"Basic Donut\">\n    <donut-gauge-basic-example></donut-gauge-basic-example>\n</nui-example-wrapper>\n\n<h3>Adding Donut Thresholds and Threshold Markers</h3>\n<p>\n    The next example adds thresholds and their associated colors, markers, and labels. To see the labels, hover your mouse over the arcs of the donut.\n</p>\n<p>\n    To add thresholds, specify an array of ordered numbers on the\n    <code><a href=\"../interfaces/IGaugeConfig.html#thresholds\" target=\"_blank\">thresholds</a></code> property of the\n    <code><a href=\"../interfaces/IGaugeConfig.html\" target=\"_blank\">IGaugeConfig</a></code> passed to the <code>GaugeUtil</code>'s\n    <code><a href=\"../classes/GaugeUtil.html#assembleSeriesSet\" target=\"_blank\">assembleSeriesSet</a></code>\n    function. Each number corresponds to a threshold. For instance <code>[25, 75]</code> indicates a warning threshold of 25 and a critical threshold of 75.\n    By default, Nova gauges provide a <a href=\"../classes/GaugeUtil.html#createDefaultQuantityColorAccessor\" target=\"_blank\">standard color accessor</a> for\n    the thresholds which outputs a yellow color for warning and a red color for critical. The\n    default color accessor can be overridden to handle any number of thresholds by setting a custom\n    <code><a href=\"../additional-documentation/advanced-usage/input-structure/data.html\" target=\"_parent\">DataAccessor</a></code> value for the\n    <code>IGaugeConfig</code> object's <code><a href=\"../interfaces/IGaugeConfig.html#quantityColorAccessor\" target=\"_blank\">quantityColorAccessor</a></code>\n    property. Additionally, if you need a color accessor that reverses the colors of the default color accessor so that high values are visualized as \"good\"\n    and low values are visualized as \"bad\", GaugeUtil has a convenience method for creating such a color accessor called\n    <code><a href=\"../classes/GaugeUtil.html#createReversedQuantityThresholdColorAccessor\" target=\"_blank\">createReversedQuantityThresholdColorAccessor</a></code>.\n    Similar to a custom color accessor, the return value of this method can be used on the <code>IGaugeConfig</code>'s <code>quantityColorAccessor</code> property.\n</p>\n<p>\n    To enable the threshold marker dots, set the\n    <code><a href=\"../interfaces/IGaugeConfig.html#enableThresholdMarkers\" target=\"_blank\">enableThresholdMarkers</a></code> property on the\n    <code>IGaugeConfig</code> object to <code>true</code>. And, to add labels for the markers, add a\n    <code><a href=\"../classes/DonutGaugeLabelsPlugin.html\" target=\"_blank\">DonutGaugeLabelsPlugin</a></code> instance to the chart.\n</p>\n<nui-example-wrapper filenamePrefix=\"donut-gauge-with-threshold-markers-example\" exampleTitle=\"Donut with Threshold Markers\">\n    <donut-gauge-with-threshold-markers-example></donut-gauge-with-threshold-markers-example>\n</nui-example-wrapper>\n\n<h3>Adding Donut Inner Content</h3>\n<p>\n    The process for adding inner content to the donut gauge is the same as that of the donut chart. The instructions for that can be found on\n    <a href=\"../additional-documentation/chart-types/pie-and-donut.html\" target=\"_parent\">this</a> page. But, for\n    a quick look at how to do it, see the example below.\n</p>\n<nui-example-wrapper filenamePrefix=\"donut-gauge-with-content-example\" exampleTitle=\"Donut with Inner Content\">\n    <donut-gauge-with-content-example></donut-gauge-with-content-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "Zw7l":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart/bar-chart.example.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Zw7l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { barAccessors, barGrid, BarRenderer, barScales, Chart, IBarChartConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-example\",\n    templateUrl: \"./bar-chart.example.component.html\",\n})\nexport class BarChartExampleComponent implements OnInit {\n    // this configuration passed to barGrid, barAccessors, barScales determines the orientation of the bar chart\n    public config = { horizontal: false } as IBarChartConfig;\n\n    public chart = new Chart(barGrid(this.config));\n\n    ngOnInit() {\n        const accessors = barAccessors(this.config);\n        const renderer = new BarRenderer();\n        const scales = barScales(this.config);\n\n        this.chart.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [66] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc \", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n";
      /***/
    },

    /***/
    "a/lW":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-test/waterfall-chart-test.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aLW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\" [style.margin-top.px]=\"50\">\n    <charts-test-harness>\n        <!-- 50px top margin to give tooltips space on the top -->\n        <div class=\"d-flex flex-row\">\n            <nui-waterfall-chart-simple-example class=\"w-100 mb-5\" id=\"nui-waterfall-chart-simple\"></nui-waterfall-chart-simple-example>\n        </div>\n        <div class=\"d-flex flex-row\">\n            <nui-waterfall-chart-advanced-example class=\"w-100 mt-5\" id=\"nui-waterfall-chart-advanced\"></nui-waterfall-chart-advanced-example>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "aEDV":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/chart-docs-spark.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aEDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-spark\",\n    templateUrl: \"./chart-docs-spark.component.html\",\n})\nexport class ChartDocsSparkComponent {\n    public gridConfiguration = `public chart = new Chart(new XYGrid(new SparkChartGridConfig(false, false)));\n...`;\n    public scaleInstantiationWithId = `const scale = new TimeScale(\"example-scale-id\");\n...`;\n    public collectionIdHtml = `<div *ngFor=\"let s of chartAssist.sparks\">\n    <nui-chart class=\"d-flex\" [chart]=\"s.chart\" nuiChartCollectionId=\"example-collection-id\"></nui-chart>\n</div>`;\n}\n";
      /***/
    },

    /***/
    "ahTr":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-vertical/area-chart-vertical-example.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ahTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    AreaAccessors,\n    AreaRenderer,\n    Chart,\n    IAreaAccessors,\n    IChartSeries,\n    IXYScales,\n    LinearScale,\n    XYGrid,\n    XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"area-chart-vertical-example\",\n    templateUrl: \"./area-chart-vertical-example.component.html\",\n    styleUrls: [\"./area-chart-vertical-example.component.less\"],\n})\nexport class AreaChartVerticalExampleComponent implements OnInit {\n    public chart: Chart;\n\n    public ngOnInit() {\n        const gridConfig = new XYGridConfig();\n        // Disable interaction because we don't support a horizontal interaction line yet\n        gridConfig.interactionPlugins = false;\n        gridConfig.axis.left.gridTicks = false;\n        gridConfig.axis.left.tickSize = 0;\n        gridConfig.axis.bottom.gridTicks = true;\n        gridConfig.axis.left.fit = true;\n        gridConfig.axis.bottom.fit = true;\n        gridConfig.axis.bottom.tickSize = 0;\n        gridConfig.axis.left.tickSize = 5;\n        gridConfig.dimension.padding.left = 2; // 2 for border\n        gridConfig.borders.left.visible = true;\n        gridConfig.borders.bottom.visible = false;\n\n        this.chart = new Chart(new XYGrid(gridConfig));\n\n        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new AreaAccessors();\n        accessors.data.y = (d, i) => i;\n        accessors.data.x0 = () => 0;\n        accessors.data.x1 = (d) => d.value;\n\n        // The area renderer will make the chart look like an area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of a area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new LinearScale(),\n            y: new LinearScale(),\n        };\n\n        scales.x.fixDomain([0, 100]);\n\n        // Here we assemble the complete chart series.\n        const seriesSet: IChartSeries<IAreaAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        // Finally, pass the series set to the chart's update method\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { value: 12 },\n                { value: 65 },\n                { value: 30 },\n                { value: 40 },\n                { value: 90 },\n                { value: 23 },\n                { value: 12 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "apYU":
    /*!************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/basic-stacked-horizontal/basic-stacked-horizontal-bar-chart-test.component.html ***!
      \************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function apYU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"nui-demo-horizontal-stacked-bat-chart\" class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, Mbps</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"false\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.name\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "bkbR":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/basic-vertical/basic-vertical-bar-chart-test.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bkbR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { barAccessors, barGrid, BarRenderer, barScales, BarSeriesHighlightStrategy, Chart, ChartAssist } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-basic-vertical-bar-chart-test\",\n    templateUrl: \"./basic-vertical-bar-chart-test.component.html\",\n})\n\nexport class BasicVerticalBarChartTestComponent implements OnInit {\n    public chartAssist = new ChartAssist(new Chart(barGrid()));\n\n    ngOnInit() {\n        const accessors = barAccessors();\n        const renderer = new BarRenderer({ highlightStrategy: new BarSeriesHighlightStrategy(\"x\") });\n        const scales = barScales();\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [66] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc \", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n";
      /***/
    },

    /***/
    "bkcT":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-bi-directional/area-chart-bi-directional-example.component.ts ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bkcT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    AreaAccessors, areaGrid, AreaRenderer, Chart, ChartAssist, IAreaAccessors, IChartSeries, IXYScales, LinearScale, TimeScale,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-bi-directional-example\",\n    templateUrl: \"./area-chart-bi-directional-example.component.html\",\n})\nexport class AreaChartBiDirectionalExampleComponent implements OnInit {\n    public chart: Chart;\n    public chartAssist: ChartAssist;\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.\n        this.chart = new Chart(areaGrid());\n        // ChartAssist helps with synchronizing hover events between the chart and the legend\n        this.chartAssist = new ChartAssist(this.chart);\n\n        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors1 = new AreaAccessors();\n        // 'x' defines access for values in the data that correspond to the horizontal axis\n        accessors1.data.x = (d) => d.timeStamp;\n        // 'y0' defines the baseline, in other words, where the area starts\n        accessors1.data.y0 = () => 0;\n        // 'y1' defines access to the numeric values we want to visualize, in other words, where the area ends\n        accessors1.data.y1 = (d) => d.value;\n        // 'x' and 'y' accessors define the position of the marker. 'x' was already defined, so now we need to define 'y' as well.\n        // Notice that the 'y' is assigned the 'absoluteY1' accessor which takes into account areas that may be stacked below\n        // the current area and retrieves the absolute distance from the baseline to the area's value line.\n        accessors1.data.y = accessors1.data.absoluteY1;\n        // Even though we're using different accessor instances for each series, we want to use the same marker\n        // accessor so that each series is assigned a different marker shape from the same marker sequence.\n        // Take a look also at the marker assignment for the second accessors instance below.\n        accessors1.series.marker = this.chartAssist.markers.get;\n\n        /**\n         * This second AreaAccessors instance flips the sign of the value so that\n         * the area is displayed below the baseline.\n         */\n        const accessors2 = new AreaAccessors();\n        accessors2.data.x = (d) => d.timeStamp;\n        accessors2.data.y0 = () => 0;\n        // Here's where we flip the sign of the value so that the area is displayed below the baseline\n        accessors2.data.y1 = (d) => -d.value;\n        // Both series use the same color accessor so that the second series will use the second color in the sequence\n        accessors2.series.color = accessors1.series.color;\n        // 'y' defines the position of the marker\n        accessors2.data.y = accessors2.data.absoluteY1;\n        // Even though we're using different accessor instances for each series, we want to use the same marker\n        // accessor so that each series is assigned a different marker shape from the same marker sequence.\n        accessors2.series.marker = this.chartAssist.markers.get;\n\n        // The area renderer will make the chart look like an area chart.\n        const renderer = new AreaRenderer();\n\n        // In case of an area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        /**\n         * This tick formatter will format values on the left axis as positive both above and baseline as\n         * well as in the legend. For legend setup, see 'chartAssist.getHighlightedValue' usage in the\n         * template file.\n         */\n        scales.y.formatters.tick = (value: number) => `${Math.abs(value)}`;\n\n        // Fixing the domain is optional.\n        scales.y.fixDomain([-100, 100]);\n\n        // Here we assemble the complete chart series.\n        const seriesSet: Partial<IChartSeries<IAreaAccessors>>[] = getData().map(d => ({\n            ...d,\n            renderer,\n            scales,\n        }));\n\n        // In this case, each series has its own accessors instance.\n        seriesSet[0].accessors = accessors1;\n        seriesSet[1].accessors = accessors2;\n\n        // Finally, pass the series set to the chart's update method.\n        this.chartAssist.update(seriesSet as IChartSeries<IAreaAccessors>[]);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"up\",\n            name: \"Up Speed\",\n            data: [\n                { timeStamp: moment(\"2016-12-25T11:45:29.909Z\", format), value: 6 },\n                { timeStamp: moment(\"2016-12-25T12:10:29.909Z\", format), value: 33 },\n                { timeStamp: moment(\"2016-12-25T12:50:29.909Z\", format), value: 15 },\n                { timeStamp: moment(\"2016-12-25T13:15:29.909Z\", format), value: 20 },\n                { timeStamp: moment(\"2016-12-25T13:40:29.909Z\", format), value: 30 },\n                { timeStamp: moment(\"2016-12-25T13:55:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T14:20:29.909Z\", format), value: 6 },\n                { timeStamp: moment(\"2016-12-25T14:40:29.909Z\", format), value: 35 },\n                { timeStamp: moment(\"2016-12-25T15:00:29.909Z\", format), value: 23 },\n                { timeStamp: moment(\"2016-12-25T15:25:29.909Z\", format), value: 25 },\n                { timeStamp: moment(\"2016-12-25T15:45:29.909Z\", format), value: 38 },\n                { timeStamp: moment(\"2016-12-25T16:10:29.909Z\", format), value: 25 },\n                { timeStamp: moment(\"2016-12-25T16:30:29.909Z\", format), value: 43 },\n                { timeStamp: moment(\"2016-12-25T16:45:29.909Z\", format), value: 28 },\n            ],\n        },\n        {\n            id: \"down\",\n            name: \"Dn Speed\",\n            data: [\n                { timeStamp: moment(\"2016-12-25T11:45:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T12:10:29.909Z\", format), value: 65 },\n                { timeStamp: moment(\"2016-12-25T12:50:29.909Z\", format), value: 30 },\n                { timeStamp: moment(\"2016-12-25T13:15:29.909Z\", format), value: 40 },\n                { timeStamp: moment(\"2016-12-25T13:40:29.909Z\", format), value: 60 },\n                { timeStamp: moment(\"2016-12-25T13:55:29.909Z\", format), value: 23 },\n                { timeStamp: moment(\"2016-12-25T14:20:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { timeStamp: moment(\"2016-12-25T15:00:29.909Z\", format), value: 45 },\n                { timeStamp: moment(\"2016-12-25T15:25:29.909Z\", format), value: 50 },\n                { timeStamp: moment(\"2016-12-25T15:45:29.909Z\", format), value: 75 },\n                { timeStamp: moment(\"2016-12-25T16:10:29.909Z\", format), value: 50 },\n                { timeStamp: moment(\"2016-12-25T16:30:29.909Z\", format), value: 85 },\n                { timeStamp: moment(\"2016-12-25T16:45:29.909Z\", format), value: 55 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "c/4/":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.html ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function c4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"false\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.name\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "cGUO":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/bar-chart-bucketed-test.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cGUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-bar-bucketed-chart-test\",\n    templateUrl: \"./bar-chart-bucketed-test.component.html\",\n})\n\nexport class BarChartBucketedTestComponent {\n\n}\n";
      /***/
    },

    /***/
    "cOoB":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-stack/area-chart-stack-example.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cOoB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"Mbps\" i18n-seriesUnitLabel\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n\n                <!-- Specify 'undefined' for the formatter key since we're not applying any special formatting to the data values shown in the legend -->\n                <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', undefined, 'y1')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "cktB":
    /*!*********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.ts ***!
      \*********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cktB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { barAccessors, barGrid, BarRenderer, barScales, BarSeriesHighlightStrategy, Chart, ChartAssist } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-horizontal-with-legend-bar-chart-test\",\n    templateUrl: \"./horizontal-with-legend-bar-chart-test.component.html\",\n})\n\nexport class HorizontalWithLegendBarChartTestComponent implements OnInit {\n    public barConfig = { horizontal: true };\n    public grid = barGrid(this.barConfig);\n    public chartAssist = new ChartAssist(new Chart(this.grid));\n\n    ngOnInit() {\n        this.grid.config().axis.left.visible = false;\n        this.grid.config().dimension.margin.left = 0;\n\n        const accessors = barAccessors(this.barConfig, this.chartAssist.palette.standardColors);\n        const renderer = new BarRenderer({ highlightStrategy: new BarSeriesHighlightStrategy(\"y\") });\n        const scales = barScales(this.barConfig);\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [66] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc\", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n";
      /***/
    },

    /***/
    "d56P":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/gauge-visual-test.component.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function d56P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IGaugeConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"gauge-visual-test\",\n    templateUrl: \"./gauge-visual-test.component.html\",\n})\nexport class GaugeVisualTestComponent {\n    public lowValue = 42;\n    public mediumValue = 130;\n    public highValue = 178;\n\n    public getGaugeConfig(value: number): IGaugeConfig {\n        return {\n            value,\n            max: 200,\n            thresholds: [100, 158],\n            enableThresholdMarkers: true,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "e7Ie":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/chart-docs-area.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e7Ie(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Area Charts</h1>\n\n<p>\n    An area chart visualization can be thought of as a hybrid between a line and a bar chart.\n    Similar to a line chart, an area chart shows how the numeric values of one or more series change\n    over the progression of another variable, usually time. And, similar to a bar chart, an area chart\n    consists of a shaded area between a baseline (typically zero) and the line representing the\n    numeric values.\n</p>\n<p>\n    In real world scenarios, using an area chart visualization may make the most sense if you want to\n    compare quantities between two or more series by stacking them one on top of another. If, on the\n    other hand, you only have a single series to visualize, it may be more practical to use just a simple\n    bar or line chart, depending of course on what you want to communicate about the data. With that in\n    mind, the first example on this page does show, for simplicity's sake, a single series visualized as\n    an area.\n</p>\n\n<h2>Basic Usage</h2>\n<p>\n    To create a simple area chart, the basic elements you need are much the same as those of a\n    <a href=\"../additional-documentation/chart-types/line.html\" target=\"_parent\">line chart</a>. The main\n    differences in usage lie in the use of\n    <code><a href=\"../classes/AreaRenderer.html\" target=\"_blank\">AreaRenderer</a></code> instead of\n    <code><a href=\"../classes/LineRenderer.html\" target=\"_blank\">LineRenderer</a></code>\n    and in the configuration of the data accessors implemented by the\n    <code><a href=\"../classes/AreaAccessors.html\" target=\"_blank\">AreaAccessors</a></code> class.\n    When instantiating the <code>AreaRenderer</code>, you can optionally pass a configuration object of type\n    <code><a href=\"../interfaces/IAreaRendererConfig.html\" target=\"_blank\">IAreaRendererConfig</a></code>\n    to make certain modifications to the behavior of the chart.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    As with other chart types, this first example implements an area chart without the aid of a\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code> since it doesn't\n    need to either process the stacking of multiple series or handle interaction with an external\n    component such as a legend. Subsequent examples that include series stacking or legend interaction\n    will make use of a <code>ChartAssist</code> instance to handle those tasks.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"area-chart-basic-example\"\n                     exampleTitle=\"Basic Usage\">\n    <area-chart-basic-example></area-chart-basic-example>\n</nui-example-wrapper>\n<p>\n    In the example above, we create an instance of\n    <code><a href=\"../classes/AreaAccessors.html\" target=\"_blank\">AreaAccessors</a></code> and configure\n    it to work specifically with the data being fed into the chart. For the standard, horizontally\n    oriented area chart we provide implementation-specific definitions for the following accessors:\n</p>\n<ul>\n    <li>\n        An <code>x</code> accessor for values in the data that correspond to the horizontal axis. Again,\n        this is typically a datetime value. This value is also used as a coordinate for the data point marker.\n    </li>\n    <li>\n        A <code>y</code> accessor for values to be used as the <code>y</code> coordinate for the\n        data point marker. The <code>y</code> accessor is assigned the <code>absoluteY1</code> accessor\n        which takes into account areas that may be stacked below the current area and retrieves the absolute\n        distance from the baseline to the area's value line.\n    </li>\n    <li>\n        A <code>y0</code> accessor for the baseline on the vertical axis which, in this particular case,\n        will always return the typical baseline value of zero.\n    </li>\n    <li>\n        A <code>y1</code> accessor for the value line on the vertical axis that provides access to the\n        numeric values we want to visualize in the data.\n    </li>\n</ul>\n<p>\n    <strong>Note:</strong> For a vertically oriented chart in which the progression runs along the y\n    axis, you can configure the opposite accessors from those above, i.e. <code>y</code>,\n    <code>x0</code>, and <code>x1</code>, but with the same corresponding implementations.\n</p>\n<p>\n    In addition to data access, the\n    <code><a href=\"../classes/AreaAccessors.html\" target=\"_blank\">AreaAccessors</a></code> indicate what\n    color and marker symbol the chart should use for each series visualization. For additional\n    information about chart setup, take a look at\n    <a href=\"../../additional-documentation/advanced-usage/chart.html\" target=\"_parent\">this</a> page.\n</p>\n<p>\n    To instantiate a grid that conforms to UX guidelines for area visualizations, we invoke the\n    <code><a href=\"../miscellaneous/functions.html#areaGrid\" target=\"_blank\">areaGrid</a></code>\n    function and pass the result to the\n    <code><a href=\"../classes/Chart.html#constructor\" target=\"_blank\">Chart</a></code> constructor.\n</p>\n\n<h2>Stacked</h2>\n<p>\n    As mentioned above, an area chart may be an ideal option if you want to compare a progression of\n    quantities between two or more series. In that case, you'll likely want to display the series in\n    a stacked formation, and the easiest way to do that is to pass the\n    <code><a href=\"../miscellaneous/functions.html#stackedArea\" target=\"_blank\">stackedArea</a></code>\n    preprocessor to an instance of the previously mentioned\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code> which will use\n    the preprocessor to stack the series' numeric values on the same progression domain.\n</p>\n<p>\n    <strong>Note:</strong> The <code>absoluteY1</code> accessor is assigned to the <code>y</code> accessor\n    to position data point markers in the stacked series correctly.\n</p>\n<nui-example-wrapper filenamePrefix=\"area-chart-stack-example\"\n                     exampleTitle=\"Stacked\">\n    <area-chart-stack-example></area-chart-stack-example>\n</nui-example-wrapper>\n\n<h2>Unstacked or Overlapping Areas</h2>\n<p>\n    The use of an unstacked or overlapping area visualization is generally discouraged for a few key\n    reasons:\n</p>\n<ul>\n    <li>\n        Area charts are typically expected to be stacked, and the main benefit this configuration\n        provides is that it can help the user to visualize a total value's progression over time along\n        with a running breakdown of subgroup contributions to that total. If, however, the areas are\n        unstacked, the total value visualization is obviously absent. And, the user may consequently find\n        it more difficult to discern a comparison of each group's contribution to their sum.\n    </li>\n    <li>\n        Colors generated by the combination of overlapping areas are inherently not represented in the\n        legend which can create unnecessary mental strain on the user as they try to determine what\n        metrics in the legend correspond to the overlapping values.\n    </li>\n    <li>\n        If subgroup values along the progression never intersect, the visualization can be easily\n        mistaken for a stacked area.\n    </li>\n</ul>\n<p>\n    If you're considering implementing an unstacked area chart, it's a good idea to consider these\n    and other potential drawbacks. While making your considerations, it's possible you'll determine\n    that implementing a\n    <a href=\"../additional-documentation/chart-types/line.html\" target=\"_parent\">line chart</a>\n    instead will result in a better overall experience for your users. If however you find that your use\n    case is extra, super special, and you really, really need an unstacked area chart, please contact the\n    Nova team so that we can show you how to assemble the visualization. Additionally, please consult\n    with Nova Design System leadership before proceeding so that they can work with you to provide the\n    best solution possible.\n</p>\n\n<h2>Stacked Percentage</h2>\n<p>\n    Stacked percentage area charts are similar to standard stacked area charts in that they facilitate\n    the comparison of quantities between two or more series across the progression of another variable.\n    The difference is that a stacked percentage area chart visualizes each quantity in relation to the\n    sum of all quantities along that progression. It can be thought of as a pie chart with an added\n    dimension, usually time, in which you can see what portion of the sum total each data point\n    represents over a given period of time.\n</p>\n<p>\n    Because of the similarities to standard stacked area charts, the usage for a stacked percentage chart\n    is much the same but with a minor difference. Instead of passing the <code>stackedArea</code>\n    preprocessor to the <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code>,\n    you pass the\n    <code><a href=\"../miscellaneous/functions.html#stackedPercentageArea\" target=\"_blank\">stackedPercentageArea</a></code>\n    preprocessor which will not only stack the series' numeric values on the same progression domain but\n    will also vertically scale each series area as a percentage of the sum of all corresponding series\n    values.\n</p>\n<nui-example-wrapper filenamePrefix=\"area-chart-stack-percentage-example\"\n                     exampleTitle=\"Stacked Percentage\">\n    <area-chart-stack-percentage-example></area-chart-stack-percentage-example>\n</nui-example-wrapper>\n\n<h2>Variable Baseline</h2>\n<p>\n    Sometimes the baseline of an area chart isn't fixed at zero. If you have a use case in which the\n    baseline varies with each data point, you can set the <code>y0</code> accessor to provide access to\n    the value in the data to be used as the baseline. In the following example, the data contains\n    <code>start</code> and <code>end</code> properties that are used as the <code>y0</code> and\n    <code>y1</code> values respectively.\n</p>\n<nui-example-wrapper filenamePrefix=\"area-chart-variable-baseline-example\"\n                     exampleTitle=\"Variable Baseline\">\n    <area-chart-variable-baseline-example></area-chart-variable-baseline-example>\n</nui-example-wrapper>\n\n<h2>Bi-Directional</h2>\n<p>\n    To display a progression of two correlated values on opposite sides of a baseline, you can implement\n    a data accessor that flips the values of one series from positive to negative. In this example, the\n    positive values for download speed are flipped to negative in that series's <code>y1</code> data\n    accessor. Additionally, the example implements a y-scale \"tick\" formatter to display positive values\n    for the axis ticks below the zero baseline and in the legend.\n</p>\n<nui-example-wrapper filenamePrefix=\"area-chart-bi-directional-example\"\n                     exampleTitle=\"Bi-Directional\">\n    <area-chart-bi-directional-example></area-chart-bi-directional-example>\n</nui-example-wrapper>\n\n<!--<h2>Bi-Directional stacked</h2>-->\n<!--<nui-example-wrapper filenamePrefix=\"area-chart-bi-directional-stacked-example\"-->\n<!--                     exampleTitle=\"Bi-Directional Stacked\">-->\n<!--    <area-chart-bi-directional-stacked-example></area-chart-bi-directional-stacked-example>-->\n<!--</nui-example-wrapper>-->\n";
      /***/
    },

    /***/
    "fPMf":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart-with-content/donut-chart-with-content.example.component.ts ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fPMf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { Chart, ChartAssist, ChartDonutContentPlugin, radial, RadialAccessors, radialGrid, RadialRenderer, radialScales } from \"@nova-ui/charts\";\n\ninterface IExampleSeries {\n    id: string;\n    name: string;\n    data: number[];\n}\n\n@Component({\n    selector: \"nui-donut-chart-with-content-example\",\n    templateUrl: \"./donut-chart-with-content.example.component.html\",\n})\nexport class DonutChartWithContentExampleComponent implements OnInit {\n    public chartAssist1: ChartAssist;\n    public chartAssist2: ChartAssist;\n    public contentPlugin: ChartDonutContentPlugin;\n    public series: any[];\n\n    ngOnInit() {\n        // Instantiate the charts and chart assists\n        this.chartAssist1 = new ChartAssist(new Chart(radialGrid()), radial);\n        this.chartAssist2 = new ChartAssist(new Chart(radialGrid()), radial);\n\n        // Create the donut content plugin\n        this.contentPlugin = new ChartDonutContentPlugin();\n\n        // Register the content plugin with the chart. In addition to registering the plugin with the chart,\n        // pass it to the plugin input of the nui-chart-donut-content component in the template.\n        this.chartAssist2.chart.addPlugin(this.contentPlugin);\n\n        // Create radial accessors, scales, and a renderer to be included in the IChartAssistSeries collection\n        const accessors = new RadialAccessors();\n        const scales1 = radialScales();\n        const scales2 = radialScales();\n        const renderer = new RadialRenderer();\n\n        this.series = getData();\n        // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument\n        this.chartAssist1.update(this.series.map(s => ({\n            ...s,\n            accessors,\n            scales: scales1,\n            renderer,\n        })));\n\n        this.chartAssist2.update(this.series.map(s => ({\n            ...s,\n            accessors,\n            scales: scales2,\n            renderer,\n        })));\n    }\n\n    public value = (s: IExampleSeries) => s.data[0];\n    public name = (s: IExampleSeries) => s.name;\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [80] },\n        { id: \"edge\", name: \"Edge\", data: [20] },\n    ];\n}\n";
      /***/
    },

    /***/
    "fTb4":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-legend-chart/status-legend-chart.example.component.less ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fTb4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import (reference) \"@nova-ui/bits/sdk/less/nui-framework-variables\";\n\n// Todo: provide it from framework in scope of NUI-3430\n@nui-rich-legend-tile-width: 60px;\n\n.custom-legend-tile {\n    width: @nui-rich-legend-tile-width;\n}\n";
      /***/
    },

    /***/
    "gHhF":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/chart-docs-line.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gHhF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\nimport { IEnhancedLineCapConfig, ILineRendererConfig, LineRenderer } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-chart-docs-line\",\n    templateUrl: \"./chart-docs-line.component.html\",\n})\nexport class ChartDocsLineComponent {\n    getEnhancedLineCapConfigPropKey(key: keyof IEnhancedLineCapConfig): string {\n        return key;\n    }\n\n    getLineRendererConfigPropKey(key: keyof ILineRendererConfig): string {\n        return key;\n    }\n\n    getLineRendererPropKey(key: keyof LineRenderer): string {\n        return key;\n    }\n}\n";
      /***/
    },

    /***/
    "gPTH":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-bi-directional/area-chart-bi-directional-example.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gPTH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend seriesUnitLabel=\"Mbps\" i18n-seriesUnitLabel\n                    [active]=\"chartAssist.isLegendActive\"\n                    [interactive]=\"true\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n\n                <!-- Specify the 'tick' formatter to display positive values for both series in the legend. -->\n                <!-- Specify the 'y1' data accessor to let the chart assist know how to access the data for the legend. -->\n                <nui-rich-legend-tile [value]=\"chartAssist.getHighlightedValue(legendSeries, 'y', 'tick', 'y1')\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.textColors.get(legendSeries.id)\">\n                    <nui-chart-marker rightEdge\n                                      [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                                      [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "gRjP":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/chart-docs-waterfall.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gRjP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Waterfall Charts</h1>\n\n<p>\n    A Waterfall Chart is a chart that shows a certain category events on the timeline.\n</p>\n\n<h2>Simple Waterfall Chart</h2>\n<p>\n    To build a simple Waterfall chart follow the instructions in the example source code:\n</p>\n\n<nui-example-wrapper filenamePrefix=\"waterfall-chart-simple\"\n                     exampleTitle=\"Simple Waterfall Chart\">\n    <nui-waterfall-chart-simple-example></nui-waterfall-chart-simple-example>\n</nui-example-wrapper>\n\n<h2>Advanced Waterfall Chart</h2>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Caution!!!</strong>\n    Example below is provided as a proof of concept and is not meant to be used in production code.\n</nui-message>\n<p>\n    It is possible to build fancy waterfall charts with more complex functionality, like the one below. Each series provides a separate\n    instance of bar chart that is rendered inside grid, which is a separate empty chart positioned using CDK Overlay on top of bar charts.\n</p>\n<p>\n    To build an advanced Waterfall chart below follow the instructions:\n</p>\n<ol>\n    <li>\n        Make sure your series provide a new instance of\n        <code><a href=\"../classes/Chart.html\" target=\"_blank\">Chart</a></code>\n        with an instance of\n        <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code>\n        passed in as an argument.\n        <code>new <a href=\"../classes/BarStatusGridConfig.html\" target=\"_blank\">BarStatusGridConfig</a>()</code> config instance goes as an argument to <code>XYGrid</code> with the\n        <code>showBottomAxis</code> option set to <code>false</code>.\n    </li>\n    <li>\n        Instantiate and configure a\n        <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code>\n    </li>\n    <li>\n        Instantiate and configure an\n        <code><a href=\"https://material.angular.io/cdk/overlay/overview\" target=\"_blank\">Overlay</a></code> and corresponding\n        <code><a href=\"https://material.angular.io/cdk/portal/overview\" target=\"_blank\">Portal</a></code> to attach the grid to\n        a correct point of the first series on the page.\n    </li>\n    <li>\n        Instantiate\n        <code><a href=\"../classes/HorizontalBarAccessors.html\" target=\"_blank\">HorizontalBarAccessors</a></code>. Using the accessor, assign\n        the color or the bar to the corresponding data type retrieved from the <code>ChartPalette</code>.\n    </li>\n    <li>\n        Configure the thickness of the bar using the\n        <code><a href=\"../classes/BandScale.html\" target=\"_blank\">BandScale</a></code> method\n        <code><a href=\"../classes/BandScale.html#padding\" target=\"_blank\">padding</a></code>.\n    </li>\n</ol>\n<nui-example-wrapper filenamePrefix=\"waterfall-chart-advanced\"\n                     exampleTitle=\"Advanced Waterfall Chart\">\n    <nui-waterfall-chart-advanced-example></nui-waterfall-chart-advanced-example>\n</nui-example-wrapper>\n";
      /***/
    },

    /***/
    "ggvU":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/chart-docs-pie-and-donut.component.ts ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ggvU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-pie-and-donut\",\n    templateUrl: \"./chart-docs-pie-and-donut.component.html\",\n})\nexport class ChartDocsPieAndDonutComponent {\n}\n";
      /***/
    },

    /***/
    "gtoS":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-vertical/area-chart-vertical-example.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gtoS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex chart\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "hNHc":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/chart-docs-waterfall.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hNHc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { DragDropModule } from \"@angular/cdk/drag-drop\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiIconModule, NuiMessageModule, SrlcStage } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { ChartDocsWaterfallComponent } from \"./chart-docs-waterfall.component\";\nimport { WaterfallChartAdvancedComponent } from \"./waterfall-advanced-charts/waterfall-chart-advanced.example.component\";\nimport { WaterfallChartSimpleComponent } from \"./waterfall-chart-simple/waterfall-chart-simple.example.component\";\nimport { WaterfallChartTestComponent } from \"./waterfall-test/waterfall-chart-test.component\";\n\nconst collectionRoutes: Routes = [\n    {\n        path: \"\",\n        component: ChartDocsWaterfallComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"simple\",\n        component: WaterfallChartSimpleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"advanced\",\n        component: WaterfallChartAdvancedComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"test\",\n        component: WaterfallChartTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        ChartDocsWaterfallComponent,\n        WaterfallChartSimpleComponent,\n        WaterfallChartAdvancedComponent,\n        WaterfallChartTestComponent,\n    ],\n    imports: [\n        DragDropModule,\n        NuiIconModule,\n        NuiDocsModule,\n        DemoCommonModule,\n        NuiChartsModule,\n        NuiMessageModule,\n        RouterModule.forChild(collectionRoutes),\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/) },\n    ],\n})\nexport class ChartDocsWaterfallModule {\n}\n";
      /***/
    },

    /***/
    "i0Gj":
    /*!******************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/basic-stacked-vertical/basic-stacked-vertical-bar-chart-test.component.ts ***!
      \******************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i0Gj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, barAccessors, barGrid, BarHighlightStrategy, BarRenderer, Chart, ChartAssist, InteractionLabelPlugin, LinearScale, Scales, stack,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-basic-stacked-vertical-bar-chart-test\",\n    templateUrl: \"./basic-stacked-vertical-bar-chart-test.component.html\",\n})\n\nexport class BasicStackedVerticalBarChartTestComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    ngOnInit() {\n        const chart = new Chart(barGrid());\n\n        // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label\n        chart.addPlugin(new InteractionLabelPlugin());\n        this.chartAssist = new ChartAssist(chart, stack);\n\n        const accessors = barAccessors();\n        // This matches field in data by which chart preprocessor will gather categories to build stacks\n        accessors.data.category = (data: any) => data.name;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        const scales: Scales = {\n            x: new BandScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST\",\n                    \"value\": 122,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 141,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 66,\n                },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                // Please note the fact that not all categories are required to be present in every data point.\n                // Sparse data is ok too.\n                // {\n                //     \"name\": \"Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST\",\n                //     \"value\": 198,\n                // },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 233,\n                },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST\",\n                    \"value\": 15,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 123,\n                },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 11,\n                },\n                {\n                    \"name\": \"Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST\",\n                    \"value\": 99,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 17,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 25,\n                },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 121,\n                },\n                {\n                    \"name\": \"Q2 2018 LONG NAME TEST LONG NAME TEST LONG NAME TEST\",\n                    \"value\": 222,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 319,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 328,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "iqrN":
    /*!*********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/basic-horizontal/basic-horizontal-bar-chart-test.component.ts ***!
      \*********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iqrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { AfterViewInit, Component } from \"@angular/core\";\nimport {\n    barAccessors,\n    barGrid,\n    BarHighlightStrategy,\n    BarRenderer,\n    barScales,\n    Chart,\n    IBarAccessors,\n    IBarChartConfig,\n    IChartSeries,\n    XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-basic-horizontal-bar-chart-test\",\n    templateUrl: \"./basic-horizontal-bar-chart-test.component.html\",\n})\n\nexport class BasicHorizontalBarChartTestComponent implements AfterViewInit {\n    public config: IBarChartConfig = { horizontal: true };\n    public chart = new Chart(barGrid(this.config));\n\n    constructor() {\n        const gridConfig = this.chart.getGrid().config() as XYGridConfig;\n        gridConfig.axis.left.fit = false;\n        gridConfig.dimension.margin.left = 150;\n    }\n\n    public ngAfterViewInit() {\n        const accessors = barAccessors(this.config);\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n\n        const scales = barScales(this.config);\n\n        const seriesSet: IChartSeries<IBarAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chart.update(seriesSet);\n    }\n}\n\nfunction getData() {\n    return [\n        { id: \"series-1\", name: \"Long Name Test Long Name Test\", data: [20] },\n        { id: \"series-2\", name: \"Results\", data: [80] },\n    ];\n}\n";
      /***/
    },

    /***/
    "j71K":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-horizontal/bar-chart-horizontal.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j71K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { barAccessors, barGrid, BarRenderer, barScales, Chart, IBarChartConfig } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-horizontal-example\",\n    templateUrl: \"./bar-chart-horizontal.example.component.html\",\n})\nexport class BarChartHorizontalExampleComponent implements OnInit {\n    public barConfig: IBarChartConfig = { horizontal: true };\n    public chart = new Chart(barGrid(this.barConfig));\n\n    ngOnInit() {\n        const accessors = barAccessors(this.barConfig);\n        const renderer = new BarRenderer();\n        const scales = barScales(this.barConfig);\n\n        this.chart.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [66] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc \", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n";
      /***/
    },

    /***/
    "j9Gm":
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-with-legend/bar-chart-with-legend.example.component.ts ***!
      \*********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j9Gm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { barAccessors, barGrid, BarRenderer, barScales, BarSeriesHighlightStrategy, Chart, ChartAssist } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-with-legend-example\",\n    templateUrl: \"./bar-chart-with-legend.example.component.html\",\n})\nexport class BarChartWithLegendExampleComponent implements OnInit {\n    public barConfig = { horizontal: false };\n\n    // the usage of ChartAssist helps with connecting the chart with the legend\n    public chartAssist = new ChartAssist(new Chart(barGrid(this.barConfig)));\n\n    ngOnInit() {\n        const accessors = barAccessors(this.barConfig, this.chartAssist.palette.standardColors);\n        const renderer = new BarRenderer({\n            // highlightStrategy determines how the bar chart should manage highlighting.\n            // BarSeriesHighlightStrategy emphasizes the entire series on hovering a single bar,\n            // which also triggers emphasis on the legend tile.\n            highlightStrategy: new BarSeriesHighlightStrategy(\"x\" /* \"x\" determines which scale the highlight should be driven by */),\n        });\n        const scales = barScales(this.barConfig);\n\n        // it is important to update the chart via the chartAssist so that the legend is also updated\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [66] },\n        { id: \"safari\", name: \"Safari\", data: [14] },\n        { id: \"firefox\", name: \"Firefox\", data: [5] },\n        { id: \"uc\", name: \"UC Browser\", data: [4] },\n        { id: \"opera\", name: \"Opera\", data: [3] },\n        { id: \"other\", name: \"Other\", data: [5] },\n    ];\n}\n";
      /***/
    },

    /***/
    "jZPK":
    /*!*************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.html ***!
      \*************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jZPK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>";
      /***/
    },

    /***/
    "jbW9":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-legend-chart/status-legend-chart.example.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jbW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex flex-column\">\n    <div class=\"d-flex flex-fill w-100 h-100\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n        <div class=\"d-flex flex-column pl-2\">\n            <nui-legend [active]=\"chartAssist.isLegendActive\">\n                <nui-legend-series [descriptionPrimary]=\"legendLabel$ | async | titlecase\"\n                                   descriptionSecondary=\"Secondary Text\" i18n-descriptionSecondary>\n                    <div class=\"custom-legend-tile d-flex justify-content-center align-items-center\" [ngStyle]=\"{backgroundColor: legendBackground$ | async}\">\n                        <nui-chart-marker [marker]=\"legendIcon$ | async\"></nui-chart-marker>\n                    </div>\n                </nui-legend-series>\n            </nui-legend>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "jpmM":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart/donut-chart.example.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jpmM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chartAssist.chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "k4Bf":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.ts ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k4Bf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    DonutGaugeLabelsPlugin,\n    GaugeMode,\n    GaugeUtil,\n    IAccessors,\n    IChartAssistSeries,\n    IDataSeries,\n    IGaugeConfig,\n    radial,\n    radialGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"donut-gauge-with-threshold-markers-example\",\n    templateUrl: \"./donut-gauge-with-threshold-markers-example.component.html\",\n    styleUrls: [\"./donut-gauge-with-threshold-markers-example.component.less\"],\n})\nexport class DonutGaugeWithThresholdMarkersExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public gaugeConfig: IGaugeConfig;\n\n    private seriesSet: IChartAssistSeries<IAccessors>[];\n\n    public ngOnInit() {\n        // Setting up the gauge config\n        const initialValue = 128;\n        this.gaugeConfig = this.getGaugeConfig(initialValue);\n\n        // Creating the chart\n        this.chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n\n        // Adding the labels plugin\n        this.chartAssist.chart.addPlugin(new DonutGaugeLabelsPlugin());\n\n        // Assembling the series set\n        this.seriesSet = GaugeUtil.assembleSeriesSet(this.gaugeConfig, GaugeMode.Donut);\n\n        // Updating the chart\n        this.chartAssist.update(this.seriesSet);\n    }\n\n    public onValueChange(value: number) {\n        // Updating the gauge config\n        this.gaugeConfig = this.getGaugeConfig(value);\n\n        // Updating the series set with the new config\n        this.seriesSet = GaugeUtil.updateSeriesSet(this.seriesSet, this.gaugeConfig);\n\n        // Updating the chart with the updated series set\n        this.chartAssist.update(this.seriesSet);\n    }\n\n    private getGaugeConfig(value: number): IGaugeConfig {\n        return {\n            value,\n            max: 200,\n\n            // Enabling the thresholds\n            thresholds: [100, 158],\n\n            // Enabling the threshold markers\n            enableThresholdMarkers: true,\n\n            // ** Optional color accessor override **\n            // quantityColorAccessor: (data: any, i: number, series: number[], dataSeries: IDataSeries<IAccessors>) => {\n            //     if (this.gaugeConfig?.thresholds && this.gaugeConfig.thresholds[1] <= data.value) {\n            //         return \"purple\";\n            //     }\n            //     if (this.gaugeConfig?.thresholds && this.gaugeConfig.thresholds[0] <= data.value) {\n            //         return \"pink\";\n            //     }\n            //     return \"green\";\n            // },\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "k9+c":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-test/spark-chart-test.component.html ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <charts-test-harness>\n        <div class=\"m-5\">\n            <h4>Sparkline Chart Multiple Test</h4>\n            <div class=\"nui-spark-chart-multiple-test\">\n                <div *ngFor=\"let spark of chartAssist.sparks; trackBy: chartAssist.trackByFn\">\n                    <div class=\"d-flex\">\n                        <nui-chart [chart]=\"spark.chart\" nuiChartCollectionId=\"1\"></nui-chart>\n                        <div class=\"d-flex flex-column pl-2\">\n                            <nui-legend-series [interactive]=\"false\" [active]=\"chartAssist.isLegendActive\"\n                                            [descriptionPrimary]=\"spark.chartSeriesSet[0].name\">\n                                <nui-rich-legend-tile unitLabel=\"sec\"\n                                                    [value]=\"chartAssist.getHighlightedValue(spark.chartSeriesSet[0], 'y', 'value')\"\n                                                    [backgroundColor]=\"chartAssist.palette.standardColors.get(spark.chartSeriesSet[0].id)\"\n                                                    [color]=\"chartAssist.palette.textColors.get(spark.chartSeriesSet[0].id)\">\n                                    <nui-chart-marker [marker]=\"chartAssist.markers.get(spark.chartSeriesSet[0].id)\"\n                                                    [color]=\"chartAssist.palette.standardColors.get(spark.chartSeriesSet[0].id)\"\n                                                    rightEdge>\n                                    </nui-chart-marker>\n                                </nui-rich-legend-tile>\n                            </nui-legend-series>\n                        </div>\n                    </div>\n                </div>\n                <input id=\"data-input\" type=\"text\" class=\"w-100 mt-5\" [ngModel]=\"input\" (ngModelChange)=\"inputChanged($event)\">\n            </div>\n        </div>\n        <div class=\"m-5\">\n            <h4>Sparkline Chart Multiple series</h4>\n            <nui-spark-chart-multiple-example></nui-spark-chart-multiple-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Sparkline Chart Area Minimal</h4>\n            <nui-area-spark-minimal-test></nui-area-spark-minimal-test>\n        </div>\n        <div class=\"m-5\">\n            <h4>Sparkline Chart Area Multiple series</h4>\n            <nui-spark-chart-area-multiple-example></nui-spark-chart-area-multiple-example>\n        </div>\n    </charts-test-harness>\n</div>";
      /***/
    },

    /***/
    "kBhg":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-legend/spark-chart-legend.example.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kBhg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex\">\n    <nui-chart class=\"w-100\" [chart]=\"chartAssist.sparks[0].chart\"></nui-chart>\n    <div class=\"d-flex flex-column pl-2\">\n        <nui-legend-series [interactive]=\"false\"\n                           [active]=\"chartAssist.isLegendActive\"\n                           descriptionPrimary=\"CPU\"\n                           i18n-descriptionPrimary\n                           descriptionSecondary=\"Tex-lab-aus-2621\"\n                           i18n-descriptionSecondary>\n            <nui-rich-legend-tile unitLabel=\"sec\"\n                                  i18n-unitLabel\n                                  [value]=\"chartAssist.getHighlightedValue(chartAssist.sparks[0].chartSeriesSet[0], 'y', 'value')\"\n                                  [backgroundColor]=\"chartAssist.palette.standardColors.get(chartAssist.sparks[0].chartSeriesSet[0].id)\"\n                                  [color]=\"chartAssist.palette.textColors.get(chartAssist.sparks[0].chartSeriesSet[0].id)\">\n                <nui-chart-marker [marker]=\"chartAssist.markers.get(chartAssist.sparks[0].chartSeriesSet[0].id)\"\n                                  [color]=\"chartAssist.palette.standardColors.get(chartAssist.sparks[0].chartSeriesSet[0].id)\"\n                                  rightEdge>\n                </nui-chart-marker>\n            </nui-rich-legend-tile>\n        </nui-legend-series>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "kMRS":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-grouped-horizontal/bar-chart-grouped-horizontal.example.component.html ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kMRS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <!-- This is where we set the minimum height of the chart to make more space for the bars -->\n    <div class=\"chart\" style=\"min-height: 500px\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"true\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.value || \"no data\"}}</span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "kxlW":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-vertical/area-chart-vertical-example.component.less ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kxlW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart {\n    height: 275px;\n    width: 300px;\n}\n";
      /***/
    },

    /***/
    "lful":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-percentage/bar-chart-percentage.example.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lful(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"axis-label-left nui-text-small\"><strong i18n>Network Traffic, %</strong></div>\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"true\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries.id\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{getTitleFromDataPoint(dataPoint)}}</span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "m1aH":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/gauge-visual-test.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function m1aH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"container\">\n    <charts-test-harness>\n        <h3>Donut</h3>\n        <div class=\"d-flex justify-content-around\">\n            <donut-gauge-tester [gaugeConfig]=\"getGaugeConfig(lowValue)\" [size]=\"250\"></donut-gauge-tester>\n            <donut-gauge-tester [gaugeConfig]=\"getGaugeConfig(mediumValue)\" [size]=\"300\"></donut-gauge-tester>\n            <donut-gauge-tester id=\"visual-test-gauge-donut-high-value\" [gaugeConfig]=\"getGaugeConfig(highValue)\" [size]=\"350\"></donut-gauge-tester>\n        </div>\n        <h3>Horizontal</h3>\n        <div class=\"d-flex justify-content-around\">\n            <horizontal-gauge-tester [gaugeConfig]=\"getGaugeConfig(lowValue)\"></horizontal-gauge-tester>\n            <horizontal-gauge-tester id=\"visual-test-gauge-horizontal-medium-value\"  [gaugeConfig]=\"getGaugeConfig(mediumValue)\"></horizontal-gauge-tester>\n            <horizontal-gauge-tester [gaugeConfig]=\"getGaugeConfig(highValue)\"></horizontal-gauge-tester>\n        </div>\n        <h3>Vertical</h3>\n        <div class=\"d-flex justify-content-around\">\n            <vertical-gauge-tester id=\"visual-test-gauge-vertical-low-value\" [gaugeConfig]=\"getGaugeConfig(lowValue)\"></vertical-gauge-tester>\n            <vertical-gauge-tester [gaugeConfig]=\"getGaugeConfig(mediumValue)\"></vertical-gauge-tester>\n            <vertical-gauge-tester [gaugeConfig]=\"getGaugeConfig(highValue)\"></vertical-gauge-tester>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "mcih":
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/pie-chart/pie-chart.example.component.ts ***!
      \*******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mcih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { Chart, ChartAssist, PieRenderer, radial, RadialAccessors, radialGrid, radialScales } from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-pie-chart-example\",\n    templateUrl: \"./pie-chart.example.component.html\",\n})\nexport class PieChartExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    ngOnInit() {\n        // Create a Chart instance using the result of the radialGrid configuration function as the constructor argument\n        const chart = new Chart(radialGrid());\n\n        // Create a ChartAssist instance passing the chart and the radial series processor as constructor arguments\n        this.chartAssist = new ChartAssist(chart, radial);\n\n        // Instantiate radial accessors and scales to be included in the IChartAssistSeries collection\n        const accessors = new RadialAccessors();\n        const scales = radialScales();\n\n        // Instantiate a PieRenderer to be included in the IChartAssistSeries collection\n        const renderer = new PieRenderer();\n\n        // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { id: \"chrome\", name: \"Chrome\", data: [80] },\n        { id: \"edge\", name: \"Edge\", data: [20] },\n    ];\n}\n";
      /***/
    },

    /***/
    "muHI":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/chart-docs-pie-and-donut.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function muHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Pie and Donut Charts</h1>\n\n<p>\n    Pie Chart is a common way of showing part-to-whole data - but be aware that one of the shortcomings of this\n    visualization is that, depending on the data to be visualized, it can be difficult for users to accurately\n    compare the size of the segments.\n</p>\n<p>\n    A donut chart is similar to a pie chart - but the open center area can be a good place to include\n    more information about the data (eg. the total of all segments).\n</p>\n\n<h2>Basic Donut chart</h2>\n<p>\n    For the process of creating a donut chart, please refer to the inline comments of the example source code below.\n    For further reference, here are documentation links to the elements required for creating a donut chart:\n    <code><a href=\"../classes/Chart.html\" target=\"_blank\">Chart</a></code>,\n    <code><a href=\"../miscellaneous/functions.html#radialGrid\" target=\"_blank\">radialGrid</a></code>,\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code>,\n    <code><a href=\"../classes/RadialAccessors.html\" target=\"_blank\">RadialAccessors</a></code>,\n    <code><a href=\"../miscellaneous/functions.html#radialScales\" target=\"_blank\">radialScales</a></code>,\n    <code><a href=\"../classes/RadialRenderer.html\" target=\"_blank\">RadialRenderer</a></code>, and\n    <code><a href=\"../interfaces/IChartAssistSeries.html\" target=\"_blank\">IChartAssistSeries</a></code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"donut-chart\"\n                     exampleTitle=\"Donut Chart\">\n    <nui-donut-chart-example></nui-donut-chart-example>\n</nui-example-wrapper>\n\n<h2>Basic Pie chart</h2>\n<p>\n    The process of creating of a pie chart is very similar to that of creating a donut chart. The only difference is that\n    the renderer passed to the chart assist update method is a\n    <code><a href=\"../classes/PieRenderer.html\" target=\"_blank\">PieRenderer</a></code> instead of a RadialRenderer.\n</p>\n<nui-example-wrapper filenamePrefix=\"pie-chart\"\n                     exampleTitle=\"Pie Chart\">\n    <nui-pie-chart-example></nui-pie-chart-example>\n</nui-example-wrapper>\n\n<h2>Content Inside the Donut Chart</h2>\n<p>\n    There are a couple of ways to create a Donut Chart with nested custom content.\n</p>\n<ol>\n    <li>\n      Use <code>has-overlay</code> and <code>overlay</code> css classes to center the content\n      <strong>over</strong> the chart. Of the two methods, this one is simpler to use and will likely \n      serve your needs if your content doesn't need to be responsive to dynamic chart resizing.\n    </li>\n    <li>\n        Use\n        <code><a href=\"../components/ChartDonutContentComponent.html\" target=\"_blank\">nui-chart-donut-content</a></code>\n        with an instance of\n        <code><a href=\"../classes/ChartDonutContentPlugin.html\" target=\"_blank\">ChartDonutContentPlugin</a></code>.\n        This will put your content in a container that fits exactly <strong>inside</strong> of the donut.\n        This can be useful if your content should be responsive to the chart size (e.g. do word wrap).\n    </li>\n</ol>\n<p>\n    The following example demonstrates both options side by side.\n</p>\n<nui-example-wrapper filenamePrefix=\"donut-chart-with-content\"\n                     exampleTitle=\"Donut Chart With Content\">\n    <nui-donut-chart-with-content-example></nui-donut-chart-with-content-example>\n</nui-example-wrapper>\n\n<h2>Chart Interaction With the Legend and Custom Colors</h2>\n<p>\n    Using features of the charting framework, it is possible to easily implement a fully-working interactive chart and legend combo.\n    The interaction between the chart and the legend is set up in the html by applying chart assist method calls and property values\n    to the <code><a href=\"../components/LegendComponent.html\" target=\"_blank\">nui-legend</a></code>,\n    <code><a href=\"../components/LegendSeriesComponent.html\" target=\"_blank\">nui-legend-series</a></code>, and\n    <code><a href=\"../components/RichLegendTileComponent.html\" target=\"_blank\">nui-rich-legend-tile</a></code> component inputs.\n    The example below demonstrates a donut chart, but legend interaction can be achieved in the same way for a pie chart.\n    Take a look at the example's html source to see how it to do it.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Color assignment happens automatically if you only need default colors. But, if you need custom colors, the following example's\n    typescript source file demonstrates how to provide them to the chart.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"donut-chart-interactive\"\n                     exampleTitle=\"Donut Chart Interacting With a Legend\">\n    <nui-donut-chart-interactive-example></nui-donut-chart-interactive-example>\n</nui-example-wrapper>\n\n<h2>Tooltips</h2>\n<p>\n    For information about how to add tooltips to pie and donut charts, take a look at the\n    <a href=\"../additional-documentation/plugins/tooltips.html\" target=\"_parent\">tooltips</a> page.\n</p>\n\n<h2>Popovers</h2>\n<p>\n    For information about how to add popovers to pie and donut charts, take a look at the\n    <a href=\"../additional-documentation/plugins/popovers.html\" target=\"_parent\">popovers</a> page.\n</p>\n";
      /***/
    },

    /***/
    "nLao":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-chart-simple/waterfall-chart-simple.example.component.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nLao(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales, Chart, CHART_PALETTE_CS1, IBarChartConfig, InteractionLinePlugin,\n    MappedValueProvider,\n} from \"@nova-ui/charts\";\nimport zipObject from \"lodash/zipObject\";\n\n@Component({\n    selector: \"nui-waterfall-chart-simple-example\",\n    templateUrl: \"./waterfall-chart-simple.example.component.html\",\n})\nexport class WaterfallChartSimpleComponent implements OnInit {\n    // Step 1 - Create a new horizontal bar chart\n    private chartConfig: IBarChartConfig = { horizontal: true };\n    public chart = new Chart(barGrid(this.chartConfig));\n\n    public ngOnInit(): void {\n        const accessors = barAccessors(this.chartConfig);\n        const scales = barScales(this.chartConfig);\n\n        // Step 1 - Optionally, add interaction highlighting behavior.\n        // If highlighting behavior is not desired, the renderer can be instantiated without a 'highlightStrategy' configuration\n        // and the InteractionLinePlugin registration can be skipped.\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n        this.chart.addPlugin(new InteractionLinePlugin());\n\n        // Step 2 - Create a color provider that maps the statuses (or types) of categories to their corresponding colors\n        const colorProvider = new MappedValueProvider(zipObject([\"connect\", \"dns\", \"send\", \"ttfb\", \"cdownload\"], CHART_PALETTE_CS1));\n\n        // Step 3 - Adjust the color accessor, to retrieve the color or the bar by the corresponding data type.\n        accessors.data.color = (d) => colorProvider.get(d.type);\n\n        // Step 4 - Configure the format of the bottom label by setting custom scales.x.formatter function.\n        scales.x.formatters.tick = (value: number) => `${parseFloat(Number(value / 1000).toFixed(1)).toLocaleString()}s`;\n\n        // Step 5 - Configure the thickness of the bar using the BandScale.padding method on your scales.y.\n        (<BandScale>scales.y).padding(0.5);\n\n        this.chart.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/** Chart Data */\nfunction getData() {\n    return [\n        {\n            id: \"1\",\n            name: \"Category 1\",\n            data: [\n                {\n                    type: \"connect\",\n                    start: 0, // in ms\n                    end: 22,\n                },\n                {\n                    type: \"dns\",\n                    start: 22,\n                    end: 39,\n                },\n                {\n                    type: \"send\",\n                    start: 39,\n                    end: 59,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 59,\n                    end: 109,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 109,\n                    end: 178,\n                },\n            ],\n        }, {\n            id: \"2\",\n            name: \"Category 2\",\n            data: [\n                {\n                    type: \"connect\",\n                    start: 0, // in ms\n                    end: 22,\n                },\n                {\n                    type: \"dns\",\n                    start: 22,\n                    end: 39,\n                },\n                {\n                    type: \"send\",\n                    start: 39,\n                    end: 59,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 59,\n                    end: 109,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 109,\n                    end: 788,\n                },\n            ],\n        },\n        {\n            id: \"3\",\n            name: \"Category 3\",\n            data: [\n                {\n                    type: \"connect\",\n                    start: 178, // in ms\n                    end: 222,\n                },\n                {\n                    type: \"dns\",\n                    start: 222,\n                    end: 239,\n                },\n                {\n                    type: \"send\",\n                    start: 239,\n                    end: 259,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 259,\n                    end: 309,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 309,\n                    end: 578,\n                },\n            ],\n        },\n        {\n            id: \"4\",\n            name: \"Category 4\",\n            data: [\n                {\n                    type: \"connect\",\n                    start: 578, // in ms\n                    end: 590,\n                },\n                {\n                    type: \"dns\",\n                    start: 590,\n                    end: 799,\n                },\n                {\n                    type: \"send\",\n                    start: 799,\n                    end: 888,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 888,\n                    end: 900,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 900,\n                    end: 990,\n                },\n            ],\n        },\n    ];\n\n}\n";
      /***/
    },

    /***/
    "nX1H":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-bi-directional-stacked/area-chart-bi-directional-stacked-example.component.ts ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nX1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    AreaAccessors,\n    areaGrid,\n    AreaRenderer,\n    Chart,\n    ChartAssist,\n    IAreaAccessors,\n    IChartSeries,\n    IXYScales,\n    LinearScale,\n    stackedArea,\n    TimeScale,\n    XYGrid,\n    XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"area-chart-bi-directional-stacked-example\",\n    templateUrl: \"./area-chart-bi-directional-stacked-example.component.html\",\n})\nexport class AreaChartBiDirectionalStackedExampleComponent implements OnInit {\n    public chartTop: Chart;\n    public chartAssistTop: ChartAssist;\n\n    public chartBottom: Chart;\n    public chartAssistBottom: ChartAssist;\n\n    public ngOnInit() {\n        // areaGrid returns an XYGrid configured for displaying an area chart's axes and other grid elements.\n        this.chartTop = new Chart(new XYGrid(topChartConfig()));\n        this.chartAssistTop = new ChartAssist(this.chartTop, stackedArea);\n\n        this.chartBottom = new Chart(new XYGrid(bottomChartConfig()));\n        this.chartAssistBottom = new ChartAssist(this.chartBottom, stackedArea);\n\n        // Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        const accessors = new AreaAccessors();\n        // 'x' defines access for values in the data that correspond to the horizontal axis\n        accessors.data.x = (d) => d.timeStamp;\n        // 'y0' defines the baseline, in other words, where the area starts\n        accessors.data.y0 = () => 0;\n        // 'y1' defines access to the numeric values we want to visualize, in other words, where the area ends\n        accessors.data.y1 = (d) => d.value;\n        // 'x' and 'y' accessors define the position of the marker. 'x' was already defined, so now we need to define 'y' as well.\n        // Notice that the 'y' is assigned the 'absoluteY1' accessor which takes into account areas that may be stacked below\n        // the current area and retrieves the absolute distance from the baseline to the area's value line.\n        accessors.data.y = accessors.data.absoluteY1;\n        // Even though we're using different accessor instances for each series, we want to use the same marker\n        // accessor so that each series is assigned a different marker shape from the same marker sequence.\n        // Take a look also at the marker assignment for the second accessors instance below.\n        accessors.series.marker = this.chartAssistTop.markers.get;\n\n        // The area renderer will make the chart look like an area chart.\n        const renderer = new AreaRenderer();\n\n        const xScale = new TimeScale();\n\n        // In case of an area chart, the scale definitions are flexible.\n        // This example demonstrates a scenario with time on the X scale and a numeric value on the Y scale.\n        const scalesTop: IXYScales = {\n            x: xScale,\n            y: new LinearScale(),\n        };\n\n        const scalesBottom: IXYScales = {\n            x: xScale,\n            y: new LinearScale().reverse(),\n        };\n\n        // Here we assemble the complete chart series.\n        const seriesSetTop: Partial<IChartSeries<IAreaAccessors>>[] = getData().map(d => ({\n            ...d,\n            renderer,\n            accessors,\n            scales: scalesTop,\n        }));\n        this.chartAssistTop.update(seriesSetTop as IChartSeries<IAreaAccessors>[]);\n\n        const seriesSetBottom: Partial<IChartSeries<IAreaAccessors>>[] = getData().map(d => ({\n            ...d,\n            renderer,\n            accessors,\n            scales: scalesBottom,\n        }));\n        this.chartAssistBottom.update(seriesSetBottom as IChartSeries<IAreaAccessors>[]);\n    }\n}\n\nfunction topChartConfig(c: XYGridConfig = new XYGridConfig()): XYGridConfig {\n    c.dimension.margin.bottom = 0;\n    c.dimension.padding.bottom = 0;\n    c.borders.bottom.visible = false;\n\n    return c;\n}\n\nfunction bottomChartConfig(c: XYGridConfig = new XYGridConfig()): XYGridConfig {\n    c.dimension.padding.top = 0;\n    c.dimension.margin.top = 0;\n\n    return c;\n}\n\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"up\",\n            name: \"Up Speed\",\n            data: [\n                { timeStamp: moment(\"2016-12-25T11:45:29.909Z\", format), value: 6 },\n                { timeStamp: moment(\"2016-12-25T12:10:29.909Z\", format), value: 33 },\n                { timeStamp: moment(\"2016-12-25T12:50:29.909Z\", format), value: 15 },\n                { timeStamp: moment(\"2016-12-25T13:15:29.909Z\", format), value: 20 },\n                { timeStamp: moment(\"2016-12-25T13:40:29.909Z\", format), value: 30 },\n                { timeStamp: moment(\"2016-12-25T13:55:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T14:20:29.909Z\", format), value: 6 },\n                { timeStamp: moment(\"2016-12-25T14:40:29.909Z\", format), value: 35 },\n                { timeStamp: moment(\"2016-12-25T15:00:29.909Z\", format), value: 23 },\n                { timeStamp: moment(\"2016-12-25T15:25:29.909Z\", format), value: 25 },\n                { timeStamp: moment(\"2016-12-25T15:45:29.909Z\", format), value: 38 },\n                { timeStamp: moment(\"2016-12-25T16:10:29.909Z\", format), value: 25 },\n                { timeStamp: moment(\"2016-12-25T16:30:29.909Z\", format), value: 43 },\n                { timeStamp: moment(\"2016-12-25T16:45:29.909Z\", format), value: 28 },\n            ],\n        },\n        {\n            id: \"down\",\n            name: \"Dn Speed\",\n            data: [\n                { timeStamp: moment(\"2016-12-25T11:45:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T12:10:29.909Z\", format), value: 65 },\n                { timeStamp: moment(\"2016-12-25T12:50:29.909Z\", format), value: 30 },\n                { timeStamp: moment(\"2016-12-25T13:15:29.909Z\", format), value: 40 },\n                { timeStamp: moment(\"2016-12-25T13:40:29.909Z\", format), value: 60 },\n                { timeStamp: moment(\"2016-12-25T13:55:29.909Z\", format), value: 23 },\n                { timeStamp: moment(\"2016-12-25T14:20:29.909Z\", format), value: 12 },\n                { timeStamp: moment(\"2016-12-25T14:40:29.909Z\", format), value: 70 },\n                { timeStamp: moment(\"2016-12-25T15:00:29.909Z\", format), value: 45 },\n                { timeStamp: moment(\"2016-12-25T15:25:29.909Z\", format), value: 50 },\n                { timeStamp: moment(\"2016-12-25T15:45:29.909Z\", format), value: 75 },\n                { timeStamp: moment(\"2016-12-25T16:10:29.909Z\", format), value: 50 },\n                { timeStamp: moment(\"2016-12-25T16:30:29.909Z\", format), value: 85 },\n                { timeStamp: moment(\"2016-12-25T16:45:29.909Z\", format), value: 55 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "nuLn":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.ts ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nuLn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { CdkDragDrop, moveItemInArray } from \"@angular/cdk/drag-drop\";\nimport {\n    ConnectionPositionPair,\n    Overlay,\n    OverlayPositionBuilder,\n    OverlayRef,\n    PositionStrategy,\n    ScrollStrategyOptions,\n} from \"@angular/cdk/overlay\";\nimport { TemplatePortal } from \"@angular/cdk/portal\";\nimport {\n    AfterViewInit,\n    Component,\n    ElementRef,\n    HostListener,\n    OnInit,\n    TemplateRef,\n    ViewChild,\n    ViewContainerRef,\n} from \"@angular/core\";\nimport {\n    BandScale,\n    BarHighlightStrategy,\n    BarRenderer,\n    BarStatusGridConfig,\n    Chart,\n    ChartPalette,\n    CHART_PALETTE_CS1,\n    HorizontalBarAccessors,\n    ISetDomainEventPayload,\n    LinearScale,\n    MappedValueProvider,\n    NoopAccessors,\n    NoopRenderer,\n    SET_DOMAIN_EVENT,\n    XYGrid,\n    XYGridConfig,\n    ZoomPlugin,\n} from \"@nova-ui/charts\";\n\n/**\n * This is here just to test a prototype of angular component, that will use new chart core\n *\n * @ignore\n */\n@Component({\n    selector: \"nui-waterfall-chart-advanced-example\",\n    templateUrl: \"./waterfall-chart-advanced.example.component.html\",\n    styleUrls: [\"./waterfall-chart-advanced.example.component.less\"],\n})\nexport class WaterfallChartAdvancedComponent implements AfterViewInit, OnInit {\n    // Declaring chart config for charts in series\n    private seriesChartConfig = new BarStatusGridConfig({showBottomAxis: false});\n\n    // Icon and row sizes are used to properly place cdk overlay with grid over the chart\n    public iconSize: number = 20;\n    public rowSize: number = 200;\n\n    public palette = new ChartPalette(new MappedValueProvider<string>({\n        \"connect\": CHART_PALETTE_CS1[0],\n        \"dns\": CHART_PALETTE_CS1[1],\n        \"send\": CHART_PALETTE_CS1[2],\n        \"ttfb\": CHART_PALETTE_CS1[3],\n        \"cdownload\": CHART_PALETTE_CS1[4],\n    }));\n\n    public gridChart = new Chart(new XYGrid());\n\n    // We need both to properly handle portal and positioning for the cdk overlay\n    public positionStrategy: PositionStrategy;\n    public templatePortal: TemplatePortal<any>;\n    public listItems = getData(this.seriesChartConfig);\n\n    private scales: { x: LinearScale, y: BandScale };\n    private overlayRef: OverlayRef;\n\n    @ViewChild(\"templatePortalGrid\") templatePortalGrid: TemplateRef<any>;\n    @ViewChild(\"gridChartPlaceholder\") gridChartPlaceholder: ElementRef;\n\n    // This listener updates the grid position to follow the chart if client size changes on user interaction with the page.\n    // In case client size changes dynamically another solution is needed.\n    @HostListener(\"document:click\")\n    public updateGridPosition() {\n        this.overlayRef.updatePosition();\n    }\n\n    constructor(private overlay: Overlay,\n                private overlayPositionBuilder: OverlayPositionBuilder,\n                private _viewContainerRef: ViewContainerRef,\n                private scrollStrategyOptions: ScrollStrategyOptions) {\n    }\n\n    public ngOnInit() {\n        this.gridChart.addPlugin(new ZoomPlugin());\n\n        this.gridChart.getEventBus().getStream(SET_DOMAIN_EVENT).subscribe((event) => {\n            const payload = <ISetDomainEventPayload>event.data;\n            this.listItems.forEach(item => {\n                this.scales.x.fixDomain(payload[this.scales.x.id]);\n                item.chart.updateDimensions();\n            });\n        });\n    }\n\n    public ngAfterViewInit() {\n        // Here you configure the template portal and overlay\n\n        this.templatePortal = new TemplatePortal(this.templatePortalGrid, this._viewContainerRef);\n        const positions: ConnectionPositionPair[] =\n            [\n                {\n                    originX: \"start\",\n                    originY: \"top\",\n                    overlayX: \"start\",\n                    overlayY: \"top\",\n                },\n                {\n                    originX: \"start\",\n                    originY: \"top\",\n                    overlayX: \"start\",\n                    overlayY: \"top\",\n                },\n            ];\n\n        this.positionStrategy = this.overlay.position()\n            .flexibleConnectedTo(this.gridChartPlaceholder)\n            .withPositions(positions)\n            .withPush(false);\n\n        this.overlayRef = this.overlay.create({\n            positionStrategy: this.positionStrategy,\n            scrollStrategy: this.scrollStrategyOptions.reposition(),\n        });\n\n        const bandScale = new BandScale();\n        const linearScale = new LinearScale();\n        linearScale.fixDomain([0, 1000]);\n        bandScale.fixDomain([\"cat1\"]);\n\n        // Here you handle scales, assign colors via data accessors, and format series\n\n        this.scales = {\n            x: linearScale,\n            y: bandScale,\n        };\n        this.scales.x.formatters.tick = (value: number) => `${Number(value / 1000).toFixed(1)}s`;\n        const renderer = new BarRenderer({highlightStrategy: new BarHighlightStrategy(\"x\")});\n        const accessors = new HorizontalBarAccessors();\n        accessors.data.color = (d: any) => this.palette.standardColors.get(d.type);\n\n        let commonWidth = 0;\n\n        this.listItems.forEach(item => {\n            const seriesSet = [\n                {\n                    id: \"series-1\",\n                    name: \"Series 1\",\n                    data: item.data.map(d => ({\n                        value: d.end - d.start,\n                        start: d.start,\n                        end: d.end,\n                        category: \"cat1\",\n                        type: d.type,\n                    })),\n                    accessors,\n                    scales: this.scales,\n                    renderer,\n                }];\n\n            item.chart.update(seriesSet);\n\n            commonWidth = item.chart.getGrid().config().dimension.width(); // TODO: executed n times\n\n        });\n\n        // Here you configure grid\n\n        const config = this.gridChart.getGrid().config() as XYGridConfig;\n        // This handles the automatic resize of the grid depending on the number of series\n        // We also use the height defined by BarStatusGridConfig() at the very top for each chart in series.\n        config.dimension.height(this.listItems.length * this.seriesChartConfig.dimension.height());\n        config.dimension.width(commonWidth);\n        config.dimension.autoHeight = false; // We must disable this option to let the grid to properly adjust\n        config.axis.left.visible = false;\n        config.axis.left.gridTicks = false;\n        config.axis.bottom.gridTicks = true;\n\n        this.gridChart.update([\n            {\n                id: \"i am grid\",\n                name: \"i am grid\",\n                data: [],\n                accessors: new NoopAccessors(),\n                scales: this.scales,\n                renderer: new NoopRenderer(),\n            },\n        ]);\n\n        this.gridChart.updateDimensions();\n\n        this.overlayRef.attach(this.templatePortal);\n    }\n\n    drop(event: CdkDragDrop<string[]>) {\n        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);\n    }\n}\n\nfunction getData(config: XYGridConfig) {\n    return [\n        {\n            url: \"http://www.google.com\",\n            size: 924, // in Bytes\n            icon: \"xml-file\",\n            chart: new Chart(new XYGrid(config)),\n            data: [\n                {\n                    type: \"connect\",\n                    start: 0, // in ms\n                    end: 22,\n                },\n                {\n                    type: \"dns\",\n                    start: 22,\n                    end: 39,\n                },\n                {\n                    type: \"send\",\n                    start: 39,\n                    end: 59,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 59,\n                    end: 109,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 109,\n                    end: 178,\n                },\n            ],\n        }, {\n            url: \"http://www2.google.com\",\n            size: 924, // in Bytes\n            icon: \"xml-file\",\n            chart: new Chart(new XYGrid(config)),\n            data: [\n                {\n                    type: \"connect\",\n                    start: 0, // in ms\n                    end: 22,\n                },\n                {\n                    type: \"dns\",\n                    start: 22,\n                    end: 39,\n                },\n                {\n                    type: \"send\",\n                    start: 39,\n                    end: 59,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 59,\n                    end: 109,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 109,\n                    end: 788,\n                },\n            ],\n        },\n        {\n            url: \"http://www.google.com/cat.png\",\n            size: 3333, // in Bytes\n            icon: \"image\",\n            chart: new Chart(new XYGrid(config)),\n            data: [\n                {\n                    type: \"connect\",\n                    start: 178, // in ms\n                    end: 222,\n                },\n                {\n                    type: \"dns\",\n                    start: 222,\n                    end: 239,\n                },\n                {\n                    type: \"send\",\n                    start: 239,\n                    end: 259,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 259,\n                    end: 309,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 309,\n                    end: 578,\n                },\n            ],\n        },\n        {\n            url: \"http://www.google.com/revenge.png\",\n            size: 3333, // in Bytes\n            icon: \"image\",\n            chart: new Chart(new XYGrid(config)),\n            data: [\n                {\n                    type: \"connect\",\n                    start: 578, // in ms\n                    end: 590,\n                },\n                {\n                    type: \"dns\",\n                    start: 590,\n                    end: 799,\n                },\n                {\n                    type: \"send\",\n                    start: 799,\n                    end: 888,\n                },\n                {\n                    type: \"ttfb\",\n                    start: 888,\n                    end: 900,\n                },\n                {\n                    type: \"cdownload\",\n                    start: 900,\n                    end: 990,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "oeUc":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-grouped/bar-chart-grouped.example.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oeUc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend-bottom\">\n        <nui-legend [interactive]=\"true\"\n                    orientation=\"horizontal\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n                    class=\"flex-wrap\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-basic-legend-tile>\n                    <nui-chart-marker\n                        [drawLine]=\"false\"\n                        [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                        [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                    </nui-chart-marker>\n                </nui-basic-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"dataPoint.dataSeries.accessors.series.marker(dataPoint.seriesId)\"\n                          [color]=\"dataPoint.dataSeries.accessors.series.color(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\">{{dataPoint.data.value || \"no data\"}}</span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "pYVe":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-time-scale/bar-chart-time-scale.example.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pYVe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, barAccessors, barGrid, BarRenderer, Chart, getAutomaticDomainWithIncludedInterval, IAccessors, IChartSeries, LinearScale, NoopAccessors,\n    NoopRenderer, NoopScale, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-bar-chart-time-scale-example\",\n    templateUrl: \"./bar-chart-time-scale.example.component.html\",\n})\nexport class BarChartTimeScaleExampleComponent implements OnInit {\n    public chart = new Chart(barGrid());\n\n    ngOnInit() {\n        const accessors = barAccessors();\n        const renderer = new BarRenderer();\n\n        const bandScale = new BandScale();\n        const linearScale = new LinearScale();\n        linearScale.domainCalculator = getAutomaticDomainWithIncludedInterval([0, 0]);\n        const scales: any = {\n            x: bandScale,\n            y: linearScale,\n        };\n\n        const start = moment([2018, 7, 4]);\n        const seriesSet = getData(start).map((d): IChartSeries<IAccessors> => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        bandScale.fixDomain(seriesSet.map(s => s.data[0].category));\n\n        const scaleId = \"bottom\";\n        const time = new TimeScale(scaleId);\n        const end = start.clone().add(seriesSet.length, \"hour\");\n        time.fixDomain([start.clone().toDate(), end.toDate()]);\n\n        // This is the most crucial part: users need to add \"fake\" series, so framework would be able to use provided time scale.\n        // You need to provide scale for x or y and provide the id (for bottom or left scale). Id must be the same as the one used to create scale.\n        // We suggest using Noops (render, accessor, other scale) for this fake series.\n        seriesSet.push({\n            id: \"0\",\n            name: \"hidden\",\n            data: [],\n            accessors: new NoopAccessors(),\n            renderer: new NoopRenderer(),\n            scales: {\n                x: time,\n                y: new NoopScale(),\n            },\n        });\n        (this.chart.getGrid() as XYGrid).bottomScaleId = scaleId;\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData(start: Moment) {\n    const values = [66, 14, 5, 40, 3, 23, 15];\n\n    const dataSet = [];\n    for (let i = 0; i < values.length; i++) {\n        const date = start.clone().add(i, \"hour\");\n        dataSet.push({\n            id: `id-${i}`,\n            name: date.toString(),\n            data: [{\n                value: values[i],\n                category: date.toString(),\n                [\"__bar\"]: {\n                    start: 0,\n                    end: values[i],\n                },\n            }],\n        });\n    }\n\n    return dataSet;\n}\n\n";
      /***/
    },

    /***/
    "piB5":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/area-chart-basic/area-chart-basic-example.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function piB5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "psX6":
    /*!****************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/proportional-vertical/proportional-vertical-bar-chart-test.component.ts ***!
      \****************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function psX6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, barAccessors, barGrid, BarHighlightStrategy, BarRenderer, Chart, ChartAssist, InteractionLabelPlugin, LinearScale, Scales, stack,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-proportional-vertical-bar-chart-test\",\n    templateUrl: \"./proportional-vertical-bar-chart-test.component.html\",\n})\n\nexport class ProportionalVerticalBarChartTestComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    private mbpsUnit = \"Mbps\";\n\n    constructor() {}\n\n    ngOnInit() {\n        this.chartAssist = new ChartAssist(new Chart(barGrid()), stack);\n\n        // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label\n        this.chartAssist.chart.addPlugin(new InteractionLabelPlugin());\n\n        const accessors = barAccessors();\n        accessors.data.category = (data: any) => data.name;\n        // Note changed data accessor matching value.percentageValue instead of just value\n        accessors.data.value = (data: any) => data.percentageValue;\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        const bandScale = new BandScale();\n        const linearScale = new LinearScale();\n        const scales: Scales = {\n            x: bandScale,\n            y: linearScale,\n        };\n\n        const dataSeriesSet = getData();\n        // Preprocess data to have both percentage and real values\n        // 1. Gather sum of all items per category\n        const sums = dataSeriesSet.reduce((acc: number[], next: any) => acc.map((v: any, i: number) => v + next.data[i].value), [0, 0, 0, 0]);\n        // 2. Normalize data using the sum\n        dataSeriesSet.forEach((dataSeries: any) => {\n            dataSeries.data.forEach((d: any, i: number) => {\n                d.percentageValue = d.value / sums[i] * 100;\n            });\n        });\n\n        const chartSeriesSet = dataSeriesSet.map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(chartSeriesSet);\n    }\n\n    public getTitleFromDataPoint(dataPoint: any) {\n        // This generates content for a tooltip.\n        // Both seriesId and the data of the corresponding bar are available in the tooltip.\n        return `${dataPoint.seriesId}: ${dataPoint.data.value}${this.mbpsUnit} (${Math.round(dataPoint.data.percentageValue)}%)`;\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 122,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 141,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 66,\n                },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 198,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 233,\n                },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 15,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 123,\n                },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 11,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 99,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 17,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 25,\n                },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"value\": 121,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"value\": 222,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"value\": 319,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"value\": 328,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "qQYL":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-test/grouped-vertical/grouped-vertical-bar-chart-test.component.ts ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qQYL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    BandScale, barAccessors, barGrid, BarHighlightStrategy, BarRenderer, Chart, ChartAssist, InteractionLabelPlugin, INTERACTION_DATA_POINTS_EVENT, LinearScale,\n    Scales,\n    SELECT_DATA_POINT_EVENT,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-grouped-vertical-bar-chart-test\",\n    templateUrl: \"./grouped-vertical-bar-chart-test.component.html\",\n})\n\nexport class GroupedVerticalBarChartTestComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public accessors = barAccessors();\n\n    ngOnInit() {\n        const chart = new Chart(barGrid());\n\n        // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label\n        chart.addPlugin(new InteractionLabelPlugin());\n\n        const bandScale = new BandScale();\n        bandScale.padding(0.25);\n        bandScale.innerScale = new BandScale();\n\n        const linearScale = new LinearScale();\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        this.accessors.data.category = (data: any) => [data.name, data.subCategory];\n\n        this.chartAssist = new ChartAssist(chart);\n\n        const scales: Scales = {\n            x: bandScale,\n            y: linearScale,\n        };\n\n        const mappedSeries = getData().map(d => ({\n            ...d,\n            accessors: this.accessors,\n            renderer,\n            scales,\n        }));\n\n        // Sample events that can be used in order to handle click or highlighting of certain status\n        chart.getEventBus().getStream(INTERACTION_DATA_POINTS_EVENT).subscribe(console.log);\n        chart.getEventBus().getStream(SELECT_DATA_POINT_EVENT).subscribe(console.log);\n\n        this.chartAssist.update(mappedSeries);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 122,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 141,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Brno\",\n                    \"value\": 66,\n                },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 167,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 198,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Austin\",\n                    \"value\": 233,\n                },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Edinburgh\",\n                    \"value\": 167,\n                },\n                // sparse data is handled as well\n                // {\n                //     \"name\": \"Q2 2018\",\n                //     \"subCategory\": \"Edinburgh\",\n                //     \"value\": 15,\n                // },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Edinburgh\",\n                    \"value\": 208,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Edinburgh\",\n                    \"value\": 123,\n                },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 11,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 99,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 17,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Newcastle\",\n                    \"value\": 25,\n                },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                {\n                    \"name\": \"Q1 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 121,\n                },\n                {\n                    \"name\": \"Q2 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 222,\n                },\n                {\n                    \"name\": \"Q3 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 319,\n                },\n                {\n                    \"name\": \"Q4 2018\",\n                    \"subCategory\": \"Kyiv\",\n                    \"value\": 328,\n                },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "qaJP":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-basic/donut-gauge-basic-example.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qaJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    GaugeMode,\n    GaugeUtil,\n    IAccessors,\n    IChartAssistSeries,\n    IGaugeConfig,\n    radial,\n    radialGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"donut-gauge-basic-example\",\n    templateUrl: \"./donut-gauge-basic-example.component.html\",\n    styleUrls: [\"./donut-gauge-basic-example.component.less\"],\n})\nexport class DonutGaugeBasicExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public gaugeConfig: IGaugeConfig;\n\n    private seriesSet: IChartAssistSeries<IAccessors>[];\n\n    public ngOnInit() {\n        // Setting up the gauge config\n        const initialValue = 128;\n        this.gaugeConfig = this.getGaugeConfig(initialValue);\n\n        // Creating the chart\n        this.chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n\n        // Assembling the series\n        this.seriesSet = GaugeUtil.assembleSeriesSet(this.gaugeConfig, GaugeMode.Donut);\n\n        // Updating the chart\n        this.chartAssist.update(this.seriesSet);\n    }\n\n    public onValueChange(value: number) {\n        // Updating the gauge config\n        this.gaugeConfig = this.getGaugeConfig(value);\n\n        // Updating the series set with the new config\n        this.seriesSet = GaugeUtil.updateSeriesSet(this.seriesSet, this.gaugeConfig);\n\n        // Updating the chart with the updated series set\n        this.chartAssist.update(this.seriesSet);\n    }\n\n    private getGaugeConfig(value: number): IGaugeConfig {\n        return {\n            value,\n            max: 200,\n        };\n    }\n}\n";
      /***/
    },

    /***/
    "rG87":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-legend/line-chart-with-legend.example.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rG87(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n<nui-legend seriesUnitLabel=\"sec\"\n            i18n-seriesUnitLabel\n            [interactive]=\"true\"\n            (mouseleave)=\"chartAssist.resetVisibleSeries()\"\n            orientation=\"horizontal\">\n    <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                       [descriptionPrimary]=\"legendSeries['name']\"\n                       (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                       [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                       [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                       (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n        <nui-basic-legend-tile>\n            <nui-chart-marker [marker]=\"chartAssist.markers.get(legendSeries.id)\"\n                              [color]=\"chartAssist.palette.standardColors.get(legendSeries.id)\"\n                              [drawLine]=\"true\"></nui-chart-marker>\n        </nui-basic-legend-tile>\n    </nui-legend-series>\n</nui-legend>\n";
      /***/
    },

    /***/
    "rphd":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.less ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rphd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import \"@nova-ui/bits/sdk/less/nui-framework-variables\";\n\n.chart {\n    height: 200px;\n}\n";
      /***/
    },

    /***/
    "slmc":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-area-multiple/spark-chart-area-multiple.example.component.ts ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function slmc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport { AreaRenderer, IAreaAccessors, IChartAssistSeries, LinearScale, SparkChartAssist, TimeScale, stackedAreaAccessors } from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-spark-chart-area-multiple-example\",\n    templateUrl: \"./spark-chart-area-multiple.example.component.html\",\n})\nexport class SparkChartAreaMultipleExampleComponent implements OnInit {\n    public chartAssist: SparkChartAssist;\n\n    public ngOnInit() {\n        // spark chart setup\n        this.chartAssist = new SparkChartAssist();\n\n        // Stacked Area accessors let the renderer know how to access x and y domain data respectively from a chart's input data set(s).\n        // providing chartAssist colors and markers to stackedAreaAccessors will share them with the area chart\n        const accessors = stackedAreaAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        // setting the AreaRenderer congif's strokeWidth to zero so no stroke is added around the filled area\n        const renderer = new AreaRenderer({ strokeWidth: 0 });\n\n        const seriesSet: IChartAssistSeries<IAreaAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales: {\n                // using the same scale id for the x-axes is necessary to achieve synchronized hover interaction between charts\n                // - sharing the same instance of the scale would work as well\n                x: new TimeScale(\"shared_id\"),\n                y: new LinearScale(),\n            },\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"spark-series-1\",\n            name: \"Tex-lab-aus-2621\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 85 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 57 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 99 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 75 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 55 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 73 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 30 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 77 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 57 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 61 },\n            ],\n        },\n        {\n            id: \"spark-series-2\",\n            name: \"Cz-lab-brn-02\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 93 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 71 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 85 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 54 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 79 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 64 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 49 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 70 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 59 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 76 },\n            ],\n        },\n        {\n            id: \"spark-series-3\",\n            name: \"Ua-lab-kie-03\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 60 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 75 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 42 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 84 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 41 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 50 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 56 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 44 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 75 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 48 },\n            ],\n        },\n        {\n            id: \"spark-series-4\",\n            name: \"Tex-lab-kie-3203\",\n            data: [\n                { x: moment(\"2018-07-08T01:51:43.448Z\", format), y: 30 },\n                { x: moment(\"2018-07-21T17:35:10.344Z\", format), y: 25 },\n                { x: moment(\"2018-08-04T09:18:37.241Z\", format), y: 84 },\n                { x: moment(\"2018-08-18T01:02:04.137Z\", format), y: 44 },\n                { x: moment(\"2018-08-31T16:45:31.034Z\", format), y: 56 },\n                { x: moment(\"2018-09-14T08:28:57.931Z\", format), y: 70 },\n                { x: moment(\"2018-09-28T00:12:24.827Z\", format), y: 15 },\n                { x: moment(\"2018-10-11T15:55:51.724Z\", format), y: 27 },\n                { x: moment(\"2018-10-25T07:39:18.620Z\", format), y: 85 },\n                { x: moment(\"2018-11-07T23:22:45.517Z\", format), y: 30 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "u/6E":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/waterfall/chart-docs-waterfall.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-waterfall\",\n    templateUrl: \"./chart-docs-waterfall.component.html\",\n})\nexport class ChartDocsWaterfallComponent {\n}\n";
      /***/
    },

    /***/
    "u3CC":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-stacked/bar-chart-stacked.example.component.ts ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u3CC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales, BarTooltipsPlugin, Chart, ChartAssist, InteractionLabelPlugin, stack,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-stacked-example\",\n    templateUrl: \"./bar-chart-stacked.example.component.html\",\n})\nexport class BarChartStackedExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public tooltipsPlugin = new BarTooltipsPlugin();\n\n    ngOnInit() {\n        const chart = new Chart(barGrid());\n\n        // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label\n        chart.addPlugin(new InteractionLabelPlugin());\n        chart.addPlugin(this.tooltipsPlugin);\n\n        // \"stack\" is a function that calls data preprocessor for recalculating stacks\n        this.chartAssist = new ChartAssist(chart, stack);\n\n        const accessors = barAccessors();\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n        const scales = barScales();\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 167 },\n                { \"category\": \"Q2 2018\", \"value\": 122 },\n                { \"category\": \"Q3 2018\", \"value\": 141 },\n                { \"category\": \"Q4 2018\", \"value\": 66 },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 167 },\n                // Please note the fact that not all categories are required to be present in every data point.\n                // Sparse data is ok too.\n                // { \"category\": \"Q2 2018\", \"value\": 198 },\n                { \"category\": \"Q3 2018\", \"value\": 208 },\n                { \"category\": \"Q4 2018\", \"value\": 233 },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 167 },\n                { \"category\": \"Q2 2018\", \"value\": 15 },\n                { \"category\": \"Q3 2018\", \"value\": 208 },\n                { \"category\": \"Q4 2018\", \"value\": 123 },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 11 },\n                { \"category\": \"Q2 2018\", \"value\": 99 },\n                { \"category\": \"Q3 2018\", \"value\": 17 },\n                { \"category\": \"Q4 2018\", \"value\": 25 },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"data\": [\n                { \"category\": \"Q1 2018\", \"value\": 121 },\n                { \"category\": \"Q2 2018\", \"value\": 222 },\n                { \"category\": \"Q3 2018\", \"value\": 319 },\n                { \"category\": \"Q4 2018\", \"value\": 328 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "uzU3":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/time-interval/time-interval.test.component.ts ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uzU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors,\n    barGrid,\n    BarRenderer,\n    Chart,\n    LinearScale,\n    Scales,\n    TimeIntervalScale,\n} from \"@nova-ui/charts\";\nimport moment, { duration } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-time-interval-test\",\n    templateUrl: \"./time-interval.test.component.html\",\n})\nexport class TimeIntervalTestComponent implements OnInit {\n    public chart = new Chart(barGrid());\n\n    ngOnInit() {\n        const accessors = barAccessors();\n        accessors.data.category = (d) => d.x;\n        accessors.data.value = (d) => d.y;\n\n        const renderer = new BarRenderer();\n\n        const scales: Scales = {\n            x: new TimeIntervalScale(duration(1, \"days\")),\n            y: new LinearScale(),\n        };\n\n        this.chart.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                {x: moment(\"2020-07-01T0\", format).toDate(), y: 30},\n                {x: moment(\"2020-07-02T0\", format).toDate(), y: 95},\n                {x: moment(\"2020-07-03T0\", format).toDate(), y: 15},\n                {x: moment(\"2020-07-04T0\", format).toDate(), y: 60},\n                {x: moment(\"2020-07-05T0\", format).toDate(), y: 35},\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "vEm8":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-basic/line-chart-basic.example.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vEm8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\"></nui-chart>\n";
      /***/
    },

    /***/
    "vYZz":
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/vertical-with-timescale/vertical-with-timescale-bar-chart-test.component.ts ***!
      \***********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vYZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarRenderer, barScales, Chart, IBarAccessors, IChartSeries, NoopAccessors, NoopRenderer, NoopScale, TimeScale, XYGrid,\n} from \"@nova-ui/charts\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-vertical-with-timescale-bar-chart-test\",\n    templateUrl: \"./vertical-with-timescale-bar-chart-test.component.html\",\n})\n\nexport class VerticalWithTimescaleBarChartTestComponent implements OnInit {\n    public chart = new Chart(barGrid());\n\n    ngOnInit() {\n        const accessors = barAccessors();\n        const renderer = new BarRenderer();\n\n        const scales = barScales();\n\n        const start = moment([2018, 7, 4]);\n        const seriesSet = getData(start).map((d): IChartSeries<IBarAccessors> => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        scales.x.fixDomain(seriesSet.map(s => s.data[0].category));\n\n        const scaleId = \"bottom\";\n        const time = new TimeScale(scaleId);\n        const end = start.clone().add(seriesSet.length, \"hour\");\n        time.fixDomain([start.clone().toDate(), end.toDate()]);\n\n        // This is the most crucial part: users need to add \"fake\" series, so framework would be able to use provided time scale.\n        // You need to provide scale for x or y and provide the id (for bottom or left scale). Id must be the same as the one used to create scale.\n        // We suggest using Noops (render, accessor, other scale) for this fake series.\n        seriesSet.push({\n            id: \"0\",\n            name: \"hidden\",\n            data: [],\n            accessors: new NoopAccessors(),\n            renderer: new NoopRenderer(),\n            scales: {\n                x: time,\n                y: new NoopScale(),\n            },\n        });\n        (this.chart.getGrid() as XYGrid).bottomScaleId = scaleId;\n\n        this.chart.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData(start: Moment) {\n    const values = [66, 14, 5, 40, 3, 23, 15];\n\n    const dataSet = [];\n    for (let i = 0; i < values.length; i++) {\n        const date = start.clone().add(i, \"hour\");\n        dataSet.push({\n            id: `id-${i}`,\n            name: date.toString(),\n            data: [{\n                value: values[i],\n                category: date.toString(),\n                [\"__bar\"]: {\n                    start: 0,\n                    end: values[i],\n                },\n            }],\n        });\n    }\n\n    return dataSet;\n}\n";
      /***/
    },

    /***/
    "wITR":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.ts ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wITR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, Input, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    ChartDonutContentPlugin,\n    DonutGaugeLabelsPlugin,\n    GaugeMode,\n    GaugeUtil,\n    IAccessors,\n    IChartAssistSeries,\n    IGaugeConfig,\n    radial,\n    radialGrid,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"donut-gauge-tester\",\n    templateUrl: \"./donut-gauge-tester.component.html\",\n    styleUrls: [\"./donut-gauge-tester.component.less\"],\n})\nexport class DonutGaugeTesterComponent implements OnInit {\n    @Input() public gaugeConfig: IGaugeConfig;\n    @Input() public size = 250;\n\n    public chartAssist: ChartAssist;\n    public contentPlugin: ChartDonutContentPlugin;\n    public seriesSet: IChartAssistSeries<IAccessors>[];\n\n    public ngOnInit() {\n        this.chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n        this.contentPlugin = new ChartDonutContentPlugin();\n        this.chartAssist.chart.addPlugin(this.contentPlugin);\n        this.chartAssist.chart.addPlugin(new DonutGaugeLabelsPlugin());\n\n        this.seriesSet = GaugeUtil.assembleSeriesSet(this.gaugeConfig, GaugeMode.Donut);\n        this.chartAssist.update(this.seriesSet);\n    }\n}\n";
      /***/
    },

    /***/
    "wLcr":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bucketed-bar/bar-chart-grouped/bar-chart-grouped.example.component.ts ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wLcr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales, BarTooltipsPlugin, Chart, ChartAssist, IBarChartConfig, InteractionLabelPlugin,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-grouped-example\",\n    templateUrl: \"./bar-chart-grouped.example.component.html\",\n})\nexport class BarChartGroupedExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n    public tooltipsPlugin = new BarTooltipsPlugin();\n    public config = { grouped: true, horizontal: false } as IBarChartConfig;\n\n    ngOnInit() {\n        const chart = new Chart(barGrid(this.config));\n        this.chartAssist = new ChartAssist(chart);\n\n        // We're manually adding Interaction Label plugin (without Interaction Line plugin) to have only label\n        chart.addPlugin(new InteractionLabelPlugin());\n        chart.addPlugin(this.tooltipsPlugin);\n\n        // 1. Call the convenience function to create bar chart scales. Like this:\n        const scales = barScales(this.config);\n\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"x\") });\n\n        // 2. Make your category accessor to return the value like [ category, subCategory ]\n        const accessors = barAccessors(this.config);\n        accessors.data.category = (data, i, series, dataSeries) => [data.name, dataSeries.name];\n\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            renderer,\n            scales,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            \"id\": \"Brno\",\n            \"name\": \"Brno\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 167 },\n                { \"name\": \"Q2 2018\", \"value\": 122 },\n                { \"name\": \"Q3 2018\", \"value\": 141 },\n                { \"name\": \"Q4 2018\", \"value\": 66 },\n            ],\n        },\n        {\n            \"id\": \"Austin\",\n            \"name\": \"Austin\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 167 },\n                { \"name\": \"Q2 2018\", \"value\": 198 },\n                { \"name\": \"Q3 2018\", \"value\": 208 },\n                { \"name\": \"Q4 2018\", \"value\": 233 },\n            ],\n        },\n        {\n            \"id\": \"Edinburgh\",\n            \"name\": \"Edinburgh\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 167 },\n                // sparse data is handled as well\n                // { \"name\": \"Q2 2018\", \"value\": 15 },\n                { \"name\": \"Q3 2018\", \"value\": 208 },\n                { \"name\": \"Q4 2018\", \"value\": 123 },\n            ],\n        },\n        {\n            \"id\": \"Newcastle\",\n            \"name\": \"Newcastle\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 11 },\n                { \"name\": \"Q2 2018\", \"value\": 99 },\n                { \"name\": \"Q3 2018\", \"value\": 17 },\n                { \"name\": \"Q4 2018\", \"value\": 25 },\n            ],\n        },\n        {\n            \"id\": \"Kyiv\",\n            \"name\": \"Kyiv\",\n            \"data\": [\n                { \"name\": \"Q1 2018\", \"value\": 121 },\n                { \"name\": \"Q2 2018\", \"value\": 222 },\n                { \"name\": \"Q3 2018\", \"value\": 319 },\n                { \"name\": \"Q4 2018\", \"value\": 328 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "x13I":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/daylight-saving-time/daylight-saving-time-test.module.ts ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x13I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../../../common/demo-common.module\";\nimport { BarChartTimeIntervalDstTestComponent } from \"./bar-chart-time-interval/bar-chart-time-interval-dst-test.component\";\nimport { DstTimeIntervalTestPageComponent } from \"./dst-time-interval-test-page.component\";\n\n@NgModule({\n    declarations: [\n        BarChartTimeIntervalDstTestComponent,\n        DstTimeIntervalTestPageComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiDocsModule,\n        NuiChartsModule,\n    ],\n    providers: [\n        { provide: DEMO_PATH_TOKEN, useFactory: () =>  (<any> require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/)},\n    ],\n})\nexport class DaylightSavingTimeTestModule { }\n";
      /***/
    },

    /***/
    "x45f":
    /*!***********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/horizontal-with-legend/horizontal-with-legend-bar-chart-test.component.html ***!
      \***********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function x45f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"nui-demo-bar-chart-horizontal-with-legend\" class=\"nui-chart-layout\">\n    <div class=\"chart\">\n        <nui-chart class=\"w-100\" [chart]=\"chartAssist.chart\"></nui-chart>\n    </div>\n    <div class=\"legend\">\n        <nui-legend [interactive]=\"false\"\n                    (mouseleave)=\"chartAssist.resetVisibleSeries()\">\n            <nui-legend-series *ngFor=\"let legendSeries of chartAssist.legendSeriesSet; trackBy: chartAssist.seriesTrackByFn\"\n                               [descriptionPrimary]=\"legendSeries['name']\"\n                               [seriesRenderState]=\"chartAssist.renderStatesIndex[legendSeries.id]?.state\"\n                               (mouseenter)=\"chartAssist.emphasizeSeries(legendSeries.id)\"\n                               [isSelected]=\"!chartAssist.isSeriesHidden(legendSeries.id)\"\n                               (isSelectedChange)=\"chartAssist.toggleSeries(legendSeries.id, $event)\">\n                <nui-rich-legend-tile [value]=\"legendSeries.data[0]\"\n                                      [backgroundColor]=\"chartAssist.palette.standardColors.get(legendSeries.id)\">\n                </nui-rich-legend-tile>\n            </nui-legend-series>\n        </nui-legend>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "xLy/":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-table/spark-chart-table.example.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<table nui-table [dataSource]=\"dataSource\">\n    <ng-container nuiColumnDef=\"name\">\n        <th nui-header-cell *nuiHeaderCellDef i18n>Node</th>\n        <td nui-cell *nuiCellDef=\"let element\"> {{element.node}} </td>\n    </ng-container>\n\n    <ng-container nuiColumnDef=\"chart\">\n        <th nui-header-cell *nuiHeaderCellDef i18n>CPU</th>\n        <td nui-cell *nuiCellDef=\"let element;\">\n            <div class=\"d-flex\">\n                <nui-chart class=\"d-flex w-100\" [chart]=\"element.chartAssist.sparks[0].chart\"></nui-chart>\n                <div class=\"d-flex flex-column pl-2\">\n                    <nui-legend-series [interactive]=\"false\" [active]=\"element.chartAssist.isLegendActive\">\n                        <nui-rich-legend-tile unitLabel=\"sec\"\n                                              i18n-unitLabel\n                                              [value]=\"element.chartAssist.getHighlightedValue(element.chartAssist.sparks[0].chartSeriesSet[0], 'y', 'value')\"\n                                              [backgroundColor]=\"element.chartAssist.palette.standardColors.get(element.chartAssist.sparks[0].chartSeriesSet[0].id)\"\n                                              [color]=\"element.chartAssist.palette.textColors.get(element.chartAssist.sparks[0].chartSeriesSet[0].id)\">\n                            <nui-chart-marker [marker]=\"element.chartAssist.markers.get(element.chartAssist.sparks[0].chartSeriesSet[0].id)\"\n                                              [color]=\"element.chartAssist.palette.standardColors.get(element.chartAssist.sparks[0].chartSeriesSet[0].id)\"\n                                              rightEdge>\n                            </nui-chart-marker>\n                        </nui-rich-legend-tile>\n                    </nui-legend-series>\n                </div>\n            </div>\n\n            <!-- this plugin component has to be placed in the table cell template as every chart\n                 will have separate positioning data provided through it's plugin -->\n            <nui-chart-popover [plugin]=\"element.popoverPlugin\" [template]=\"popoverTemplate\"></nui-chart-popover>\n        </td>\n    </ng-container>\n\n    <tr nui-header-row *nuiHeaderRowDef=\"displayedColumns;\"></tr>\n    <tr nui-row *nuiRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n\n<!-- It is sufficient to provide a single template definition if the table is using the same popover template for all rows -->\n<ng-template #popoverTemplate let-dataPoints=\"dataPoints\">\n    <div class=\"p-3\">\n        <div *ngFor=\"let item of dataPoints | keyvalue\">\n            <strong>{{item.key}}: </strong>\n            <code>{{item.value.data | json}}</code>\n        </div>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "xW1a":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-with-rich-tile-legend/line-chart-with-rich-tile-legend.example.component.ts ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xW1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, IChartSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, LineSelectSeriesInteractionStrategy, TimeScale,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"nui-line-chart-with-rich-tile-legend-example\",\n    templateUrl: \"./line-chart-with-rich-tile-legend.example.component.html\",\n})\nexport class LineChartWithRichTileLegendExampleComponent implements OnInit {\n    public chart = new Chart(new XYGrid());\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n\n    public ngOnInit() {\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n        const renderer = new LineRenderer({\n            // for series interaction and ability to handle click configure renderer with interactionStrategy\n            interactionStrategy: new LineSelectSeriesInteractionStrategy(),\n        });\n        const scales: IXYScales = {\n            x: new TimeScale(),\n            y: new LinearScale(),\n        };\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(d => ({\n            ...d,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 30 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 95 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 15 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 35 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(\"2016-12-25T15:14:29.909Z\", format), y: 60 },\n                { x: moment(\"2016-12-27T15:14:29.909Z\", format), y: 40 },\n                { x: moment(\"2016-12-29T15:14:29.909Z\", format), y: 70 },\n                { x: moment(\"2016-12-31T15:14:29.909Z\", format), y: 45 },\n                { x: moment(\"2017-01-03T15:14:29.909Z\", format), y: 90 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "xtT8":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/chart-docs-status.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xtT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chart-docs-status\",\n    templateUrl: \"./chart-docs-status.component.html\",\n})\nexport class ChartDocsStatusComponent {\n}\n";
      /***/
    },

    /***/
    "y8gy":
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/line-chart-visual-test/line-chart-visual-test.component.html ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function y8gy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <charts-test-harness>\n        <div class=\"m-5\">\n            <h4>Basic Usage With Rich Tile Legend and Axis Labels</h4>\n            <line-chart-with-axis-labels-example></line-chart-with-axis-labels-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Large Values</h4>\n            <line-chart-with-large-values-example></line-chart-with-large-values-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Two Y Axes</h4>\n            <line-chart-with-2y-axes-example></line-chart-with-2y-axes-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Missing data manual</h4>\n            <line-chart-interrupted-basic-example></line-chart-interrupted-basic-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Missing data calculated</h4>\n            <line-chart-interrupted-calculated-example></line-chart-interrupted-calculated-example>\n        </div>\n        <div class=\"m-5\">\n            <h4>Missing data on path terminus</h4>\n            <line-chart-interrupted-path-terminus-example></line-chart-interrupted-path-terminus-example>\n        </div>\n    </charts-test-harness>\n</div>\n";
      /***/
    },

    /***/
    "yMj0":
    /*!*********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/gauge/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.html ***!
      \*********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yMj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex flex-column align-items-center\">\n    <nui-chart class=\"chart\" [chart]=\"chartAssist.chart\"></nui-chart>\n    <nui-form-field caption=\"Value\"\n                    [showOptionalText]=\"false\">\n        <nui-textbox-number type=\"number\"\n                            [ngModel]=\"gaugeConfig.value\"\n                            (ngModelChange)=\"onValueChange($event)\"\n                            [minValue]=\"0\"\n                            [maxValue]=\"gaugeConfig.max\"\n                            customBoxWidth=\"75px\"></nui-textbox-number>\n    </nui-form-field>\n</div>\n";
      /***/
    },

    /***/
    "yWWf":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/pie-and-donut/donut-chart-interactive/donut-chart-interactive.example.component.ts ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yWWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartAssist, CHART_PALETTE_CS_S, MappedValueProvider, radial, RadialAccessors, radialGrid, RadialRenderer, radialScales,\n} from \"@nova-ui/charts\";\nimport zipObject from \"lodash/zipObject\";\n\nenum Status {\n    Up = \"up\",\n    Warning = \"warning\",\n    Critical = \"critical\",\n    Down = \"down\",\n    Unmanaged = \"unmanaged\",\n    Unknown = \"unknown\",\n}\n\n@Component({\n    selector: \"nui-donut-chart-interactive-example\",\n    templateUrl: \"./donut-chart-interactive.example.component.html\",\n})\nexport class DonutChartInteractiveExampleComponent implements OnInit {\n    public chartAssist: ChartAssist;\n\n    public ngOnInit() {\n        // Instantiate the chart and chart assist\n        this.chartAssist = new ChartAssist(new Chart(radialGrid()), radial);\n\n        // If custom colors are needed, instantiate a custom color provider in the form of a MappedValueProvider.\n        // This is only needed if your chart requires colors that deviate from the ones provided by the default\n        // color provider.\n        const statusColorProvider = new MappedValueProvider<string>(zipObject(\n            [Status.Down, Status.Critical, Status.Warning, Status.Unknown, Status.Up, Status.Unmanaged],\n            CHART_PALETTE_CS_S\n        ));\n\n        // Instantiate the RadialAccessors and set the series color accessor to the new\n        // color provider's get method\n        const accessors = new RadialAccessors();\n        accessors.series.color = statusColorProvider.get;\n\n        // Create radial scales and a renderer to be included in the IChartAssistSeries collection\n        const scales = radialScales();\n        const renderer = new RadialRenderer();\n\n        // Invoke the chart assist's update method with the IChartAssistSeries collection as the argument\n        this.chartAssist.update(getData().map(s => ({\n            ...s,\n            accessors,\n            scales,\n            renderer,\n        })));\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        { status: Status.Up, value: 42 },\n        { status: Status.Warning, value: 14 },\n        { status: Status.Critical, value: 8 },\n        { status: Status.Down, value: 7 },\n        { status: Status.Unmanaged, value: 5 },\n        { status: Status.Unknown, value: 3 },\n    ].map(d => ({ id: d.status, name: d.status, data: [d.value] }));\n}\n";
      /***/
    },

    /***/
    "z/RP":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/line/chart-docs-line.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h1>Line Charts</h1>\n\n<p>\n    From the Nova charting framework's point of view, there's actually no such thing as a line chart.\n    What actually makes a line chart, well, a line chart is really just data series specifically configured\n    to be rendered using what we call a\n    <code><a href=\"../classes/LineRenderer.html\" target=\"_blank\">LineRenderer</a></code>.\n    A different renderer might allow the data to be visualized as a bar chart. But, regardless of how the framework\n    sees it, a line chart is a pretty basic visualization scenario, and so it's ideal for demonstrating the basic concepts\n    of the Nova charting framework.\n</p>\n\n<h2>Basic Line Chart</h2>\n<p>\n    To create a simple line chart, the basic elements you need are: an instance of the\n    <code><a href=\"../classes/Chart.html\" target=\"_blank\">Chart</a></code>\n    class, an instance <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code>, and a set of\n    <code><a href=\"../interfaces/IChartSeries.html\" target=\"_blank\">IChartSeries</a></code>\n    including some data for the chart to visualize.\n</p>\n<p>\n    Each IChartSeries consists of an\n    <code><a href=\"../interfaces/IDataSeries.html\" target=\"_blank\">IDataSeries</a></code>,\n    an <code><a href=\"../interfaces/IXYScales.html\" target=\"_blank\">IXYScales</a></code> object,\n    and a <code><a href=\"../classes/LineRenderer.html\" target=\"_blank\">LineRenderer</a></code>.\n    In most cases, the same instances of IXYScales and LineRenderer can be used for each IChartSeries.\n    When instantiating the <code>LineRenderer</code>, you can optionally pass a configuration object of type\n    <code><a href=\"../interfaces/ILineRendererConfig.html\" target=\"_blank\">ILineRendererConfig</a></code>\n    to make certain modifications to the behavior of the chart.\n</p>\n<p>\n    The IDataSeries in each IChartSeries consists of the data to be visualized, an id, and a\n    <code><a href=\"../classes/LineAccessors.html\" target=\"_blank\">LineAccessors</a></code> instance.\n</p>\n<p>\n    LineAccessors, by default, let the chart know that the values for x and y can be found specifically under\n    properties named 'x' and 'y' at the root level within the data you provide. If, however, your data doesn't have\n    properties 'x' and 'y', or if 'x' and 'y' are not at the root level, you can customize the accessors\n    to let the chart know exactly where to find the correct values. For how to do this, the\n    <a href=\"../additional-documentation/advanced-usage/input-structure/data.html\" target=\"_parent\">Data Accessors</a> page\n    may be a handy guide.\n</p>\n<p>\n    In addition to data access, the LineAccessors also indicate what color and marker symbol the chart should use for each series\n    visualization.\n</p>\n<p>\n    Finally, to initiate the line chart visualization, pass the Chart instance reference to the <code>chart</code> input of\n    <code>nui-chart</code> in your template and invoke the chart's update method passing the collection of\n    IChartSeries as the argument. For additional information about chart setup, take a look at\n    <a href=\"../../additional-documentation/advanced-usage/chart.html\" target=\"_parent\">this</a> page.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    This first example implements a line chart without the aid of a\n    <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code> since it doesn't require any interaction\n    with an external component such as a legend. Subsequent examples that include a legend will make use of an\n    instance of ChartAssist.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"line-chart-basic\"\n                     exampleTitle=\"Basic Line Chart\">\n    <nui-line-chart-basic-example></nui-line-chart-basic-example>\n</nui-example-wrapper>\n\n<h2>Legends</h2>\n<nui-message type=\"info\" [allowDismiss]=\"false\">If you're adding a legend to your chart, the easiest way to manage the\n    communication between the chart and the legend is to use an instance of\n    the <code><a href=\"../classes/ChartAssist.html\" target=\"_blank\">ChartAssist</a></code>.\n    Take a closer look at the following examples as there are some structural differences from the example above\n    in the configuration and updating of the chart.\n</nui-message>\n<p>\n    The main documentation page for legends can be found\n    <a href=\"../additional-documentation/advanced-usage/legend.html\"\n       target=\"_parent\">here</a>. But, in\n    this section you'll find some quick examples of how to use legends with a line chart.\n</p>\n<h3>Legend with Basic Tiles</h3>\n<p>\n    To add a legend with basic tiles, add one or more\n    <code><a href=\"../components/BasicLegendTileComponent.html\" target=\"_blank\">nui-basic-legend-tiles</a></code>\n    nested within one or more\n    <code><a href=\"../components/LegendSeriesComponent.html\" target=\"_blank\">nui-legend-series</a></code> nested within a\n    <code><a href=\"../components/LegendComponent.html\" target=\"_blank\">nui-legend</a></code> to your template. To see\n    what this looks like, you can view the html of the example by opening the source expander.\n</p>\n<nui-example-wrapper filenamePrefix=\"line-chart-with-legend\"\n                     exampleTitle=\"Legend with Basic Tiles\">\n    <nui-line-chart-with-legend-example></nui-line-chart-with-legend-example>\n</nui-example-wrapper>\n\n<h3>Legend with Rich Tiles</h3>\n<p>\n    To add a legend with rich tiles, add one or more\n    <code><a href=\"../components/RichLegendTileComponent.html\" target=\"_blank\">nui-rich-legend-tiles</a></code>\n    nested within one or more\n    <code><a href=\"../components/LegendSeriesComponent.html\" target=\"_blank\">nui-legend-series</a></code> nested within a\n    <code><a href=\"../components/LegendComponent.html\" target=\"_blank\">nui-legend</a></code> to your template. To see\n    what this looks like, you can view the html of the example by opening the source expander.\n</p>\n<nui-example-wrapper filenamePrefix=\"line-chart-with-rich-tile-legend\"\n                     exampleTitle=\"Legend with Rich Tiles\">\n    <nui-line-chart-with-rich-tile-legend-example></nui-line-chart-with-rich-tile-legend-example>\n</nui-example-wrapper>\n\n<h2>Axis Labels</h2>\n<p>\n    Labels for each axis can be added using a\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout\" target=\"_blank\">css grid</a> layout.\n    The following example's html source demonstrates how to set it up using the Nova Chart layout classes: \"nui-chart-layout\",\n    \"axis-label-left\", \"axis-label-right\", \"axis-label-bottom\", \"chart\", and \"legend\".\n</p>\n<p>\n    For more information about the nova chart\n    grid layout, check out the layout page <a href=\"../additional-documentation/layout.html\" target=\"_parent\">here</a>.\n</p>\n<nui-example-wrapper filenamePrefix=\"line-chart-with-axis-labels\"\n                     exampleTitle=\"Axis Labels\">\n    <line-chart-with-axis-labels-example></line-chart-with-axis-labels-example>\n</nui-example-wrapper>\n\n<h2>Adding a Second Y-Axis</h2>\n<p>\n    To add a second y-axis, we need to configure the <code><a href=\"../classes/XYGrid.html\" target=\"_blank\">XYGrid</a></code>\n    instance with values for the <code>leftScaleId</code> and <code>rightScaleId</code> properties. The values for these properties\n    should match the id's of the left scale and right scale respectively.\n</p>\n<p>\n    Customizing the content displayed for each axis can be achieved by specifying the tick formatter for the desired scale\n    as documented on the <a href=\"../additional-documentation/advanced-usage/scales/formatters.html\" target=\"_blank\">Formatters</a>\n    page.\n</p>\n<nui-example-wrapper filenamePrefix=\"line-chart-with-2y-axes\"\n                     exampleTitle=\"Adding a Second Y-Axis\">\n    <line-chart-with-2y-axes-example></line-chart-with-2y-axes-example>\n</nui-example-wrapper>\n\n<h2>Interrupted Data</h2>\n<p>\n    If you want to emphasize the fact that parts of the data you're plotting on the chart are not\n    continuous, you can use the following approach to display a line with gaps. To indicate a missing\n    data segment, you'll need to use two data series, one for rendering the data itself and the other for\n    rendering gaps in the data. You can use the same data array for both data series. The difference in\n    visualization is achieved using a separate <code>renderer</code> instance configured to recognize\n    missing data and appropriately style the output.\n</p>\n<p>\n    For standard missing data styling, pass an instance of\n    <code><a href=\"../classes/MissingDataLineRendererConfig.html\" target=\"_blank\">MissingDataLineRendererConfig</a></code>\n    to the <code><a href=\"../classes/LineRenderer.html\" target=\"_blank\">LineRenderer</a></code>\n    constructor. The configuration can optionally be customized by modifying the values of its\n    properties. The following example demonstrates the use of standard missing data styling in more\n    detail.\n</p>\n<h4>Enhanced Line Caps</h4>\n<p>\n    By default, the styling for interrupted data includes enhanced line caps, or dots, at each vertex of the\n    path representing the missing data. To disable the line caps, set the\n    <code>{{getLineRendererConfigPropKey(\"useEnhancedLineCaps\")}}</code> property on the renderer's\n    <code>{{getLineRendererPropKey(\"config\")}}</code> property to <code>false</code>. To modify the\n    styling of the enhanced line caps, set alternate values on the renderer\n    <code>{{getLineRendererPropKey(\"config\")}}</code>'s\n    <code>{{getLineRendererConfigPropKey(\"enhancedLineCap\")}}</code> property of type\n    <code><a href=\"../interfaces/IEnhancedLineCapConfig.html\" target=\"_blank\">IEnhancedLineCapConfig</a></code>.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    The <code>defined</code> accessor used in the following example directly implements the behavior of\n    the D3\n    <code><a href=\"https://github.com/d3/d3-shape#line_defined\" target=\"_blank\">line.defined</a></code>\n    method, so you can head over there to read more detailed documentation.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"line-chart-interrupted-basic\"\n                     exampleTitle=\"Interrupted Data\">\n    <line-chart-interrupted-basic-example></line-chart-interrupted-basic-example>\n</nui-example-wrapper>\n\n<h3>Automatic Calculation of Interrupted Segments</h3>\n<p>\n    If your data is time based and is defined at regular intervals, it's possible to calculate the\n    missing data segments automatically. Nova Charts provides a convenience function for this called\n    <a href=\"../miscellaneous/functions.html#calculateMissingData\"><code>calculateMissingData</code></a>\n    which creates a new data array with data points inserted to indicate interruptions in your series.\n    It's important to keep in mind that the new data array must be assigned to both series used in the\n    missing data visualization--one indicating the valid data segments and the other indicating the\n    missing data segments.\n</p>\n<nui-example-wrapper filenamePrefix=\"line-chart-interrupted-calculated\"\n                     exampleTitle=\"Calculated Segments of Interrupted Data\">\n    <line-chart-interrupted-calculated-example></line-chart-interrupted-calculated-example>\n</nui-example-wrapper>\n\n<h2>Tooltips</h2>\n<p>\n    For information about how to add tooltips to line charts, take a look at the\n    <a href=\"../additional-documentation/plugins/tooltips.html\" target=\"_parent\">tooltips</a> page.\n</p>\n\n<h2>Popovers</h2>\n<p>\n    For information about how to add popovers to line charts, take a look at the\n    <a href=\"../additional-documentation/plugins/popovers.html\" target=\"_parent\">popovers</a> page.\n</p>\n";
      /***/
    },

    /***/
    "zEWV":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/status/status-chart/status-chart.example.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zEWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div height=\"150px\" class=\"d-flex flex-column\">\n    <nui-chart class=\"d-flex\" [chart]=\"chart\" class=\"p-2\"></nui-chart>\n</div>\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"tooltipsStatusMarkers.get(dataPoint.data.status)\"></nui-chart-marker>\n        <span class=\"pl-2\"><strong>{{dataPoint.data.status | titlecase}}</strong></span>\n        <span class=\"pl-2\">{{\" for \" + dataPoint.data.value + \" days\"}}</span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "zT5C":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/spark/spark-chart-test/spark-chart-test.component.ts ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zT5C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart, ChartPalette, IChartAssistSeries, ILineAccessors, IXYScales, LineAccessors, LinearScale, LineRenderer, SparkChartAssist, TimeScale, XYGridConfig,\n} from \"@nova-ui/charts\";\nimport moment, { Moment } from \"moment/moment\";\n\n@Component({\n    selector: \"nui-spark-chart-test\",\n    templateUrl: \"./spark-chart-test.component.html\",\n})\nexport class SparkChartTestComponent implements OnInit {\n    private colors = [\"red\", \"orange\", \"yellow\", \"green\", \"blue\", \"purple\", \"black\", \"white\"];\n    private initialInput = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];\n    private baseDate = moment([2016, 11, 25]);\n\n    private xScale = new TimeScale();\n    private renderer = new LineRenderer();\n    private palette = new ChartPalette(this.colors);\n    private accessors = new LineAccessors(this.palette.standardColors);\n    public chartAssist: SparkChartAssist = new SparkChartAssist(true, true, this.palette);\n\n    public input: string;\n    public chart: Chart;\n\n    public ngOnInit() {\n        this.input = JSON.stringify(this.initialInput);\n        this.configureGrid(this.chartAssist.gridConfig);\n        this.configureGrid(this.chartAssist.lastGridConfig);\n        this.update(this.initialInput);\n    }\n\n    public inputChanged(value: string) {\n        this.update(JSON.parse(value));\n    }\n\n    private update(input: number[][]) {\n        const seriesSet = this.generateSparkSeriesSet(input);\n        this.chartAssist.update(seriesSet);\n    }\n\n    private configureGrid(gridConfig: XYGridConfig) {\n        gridConfig.dimension.autoWidth = false;\n        gridConfig.dimension.width(400);\n    }\n\n    private generateSparkSeriesSet(input: number[][]): IChartAssistSeries<ILineAccessors>[] {\n        return input.map((seriesData: number[], i: number) => {\n            const sparkYScale = new LinearScale();\n            sparkYScale.fixDomain([0, 26]); // spark chart height is 26px (36px - 5px top - 5px bottom padding)\n            sparkYScale.formatters.value = v => (Number(v).toPrecision(4));\n            const sparkScales: IXYScales = {\n                x: this.xScale,\n                y: sparkYScale,\n            };\n            return {\n                id: `${i + 1}`,\n                name: `dev-aus-vm-0${i + 1}`,\n                accessors: this.accessors,\n                data: this.getData(seriesData),\n                scales: sparkScales,\n                renderer: this.renderer,\n            } as IChartAssistSeries<ILineAccessors>;\n        });\n    }\n\n    private getData(seriesData: number[]): { x: Moment, y: number }[] {\n        return seriesData.map((value: number, i: number) => ({\n            x: this.baseDate.clone().add(i, \"days\"),\n            y: value,\n        }));\n    }\n\n}\n";
      /***/
    },

    /***/
    "zWfn":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/area/test/area-chart-test.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zWfn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"area-chart-test\",\n    templateUrl: \"./area-chart-test.component.html\",\n})\nexport class AreaChartTestComponent {\n\n}\n";
      /***/
    },

    /***/
    "zjRD":
    /*!***************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/chart-types/bar/bar-chart-test/bar-chart-tick-label-max-width/bar-chart-tick-label-max-width-test.component.ts ***!
      \***************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zjRD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    barAccessors, barGrid, BarHighlightStrategy, BarRenderer, barScales,\n    Chart, ChartAssist, IBarAccessors, IBarChartConfig, IChart, IChartSeries, XYGridConfig,\n} from \"@nova-ui/charts\";\n\n@Component({\n    selector: \"nui-bar-chart-tick-label-max-width-test\",\n    templateUrl: \"./bar-chart-tick-label-max-width-test.component.html\",\n})\nexport class BarChartTickLabelMaxWidthTestComponent implements OnInit {\n    public chart: IChart;\n    public chartAssist: ChartAssist;\n    public ngOnInit() {\n        const config: IBarChartConfig = { horizontal: true };\n        const accessors = barAccessors(config);\n        const renderer = new BarRenderer({ highlightStrategy: new BarHighlightStrategy(\"y\") });\n        const scales = barScales(config);\n        \n        this.chart = new Chart(barGrid(config));\n        this.chartAssist = new ChartAssist(this.chart);\n\n        const gridConfig = this.chart.getGrid().config() as XYGridConfig;\n        gridConfig.axis.left.tickLabel.maxWidth = 100;\n\n        const seriesSet: IChartSeries<IBarAccessors>[] = getData().map(d => ({\n            ...d,\n            accessors,\n            renderer,\n            scales,\n        }));\n\n        this.chartAssist.update(seriesSet);\n    }\n}\n\n/* Chart data */\nfunction getData() {\n    return [\n        {\n            id: \"series-1\",\n            name: \"Long Name Test Long Name Test\",\n            data: [20],\n        },\n        {\n            id: \"series-2\",\n            name: \"Results\",\n            data: [80],\n        },\n        {\n            id: \"series-3\",\n            name: \"Supercalifragilisticexpialidocious\",\n            data: [45],\n        },\n    ];\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-demo-chart-types-chart-docs-chart-types-module-es5.js.map