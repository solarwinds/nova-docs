(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tooltips-tooltips-prototype-module"], {
    /***/
    "01NB":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/tooltips/line-chart/line-chart-tooltips-prototype.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nui-chart class=\"d-flex\" [chart]=\"chart\" nuiChartCollectionId=\"1\"></nui-chart>\n\n<nui-chart-tooltips [plugin]=\"tooltipsPlugin\" [template]=\"tooltipTemplate\"></nui-chart-tooltips>\n\n<ng-template let-dataPoint=\"dataPoint\"\n             #tooltipTemplate>\n    <div class=\"p-1 d-flex align-items-center\">\n        <nui-chart-marker [marker]=\"chartAssist.markers.get(dataPoint.seriesId)\"\n                          [color]=\"chartAssist.palette.standardColors.get(dataPoint.seriesId)\"></nui-chart-marker>\n        <span class=\"pl-2\" [textContent]=\"formatNumber(dataPoint.data.y)\"></span>\n    </div>\n</ng-template>\n";
      /***/
    },

    /***/
    "1LtL":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/tooltips/line-chart/tooltips-performance-test.component.ts ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component } from \"@angular/core\";\n\n@Component({\n    templateUrl: \"./tooltips-performance-test.component.html\",\n    styleUrls: [\"./tooltips-performance-test.component.less\"],\n})\nexport class TooltipsPerformanceTestComponent { }\n";
      /***/
    },

    /***/
    "CvyS":
    /*!***********************************************************************************************************!*\
      !*** ./examples/components/demo/development/tooltips/line-chart/tooltips-performance-test.component.less ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CvyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart-container {\n  height: 80vh;\n  overflow: auto;\n}\n.chart {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2x0aXBzLXBlcmZvcm1hbmNlLXRlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUE7RUFDSSxnQkFBQTtBQUFKIiwiZmlsZSI6InRvb2x0aXBzLXBlcmZvcm1hbmNlLXRlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jaGFydCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "NZM7":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/tooltips/line-chart/tooltips-performance-test.component.less ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NZM7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chart-container {\n    height: 80vh;\n    overflow: auto;\n}\n\n.chart {\n    margin-top: 30px;\n}\n";
      /***/
    },

    /***/
    "P3l5":
    /*!*********************************************************************************************************!*\
      !*** ./examples/components/demo/development/tooltips/line-chart/tooltips-performance-test.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: TooltipsPerformanceTestComponent */

    /***/
    function P3l5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipsPerformanceTestComponent", function () {
        return TooltipsPerformanceTestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tooltips_performance_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tooltips-performance-test.component.html */
      "RKdM");
      /* harmony import */


      var _tooltips_performance_test_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tooltips-performance-test.component.less */
      "CvyS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TooltipsPerformanceTestComponent = function TooltipsPerformanceTestComponent() {
        _classCallCheck(this, TooltipsPerformanceTestComponent);
      };

      TooltipsPerformanceTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_tooltips_performance_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tooltips_performance_test_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TooltipsPerformanceTestComponent);
      /***/
    },

    /***/
    "PtHN":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/tooltips/line-chart/line-chart-tooltips-prototype.component.ts ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PtHN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { Component, OnInit } from \"@angular/core\";\nimport {\n    Chart,\n    ChartAssist,\n    ChartTooltipsPlugin,\n    IChartSeries,\n    ILineAccessors,\n    IXYScales,\n    LineAccessors,\n    LinearScale,\n    LineRenderer,\n    TimeScale,\n    XYGrid,\n} from \"@nova-ui/charts\";\nimport moment from \"moment/moment\";\n\n@Component({\n    selector: \"line-chart-tooltips-prototype\",\n    templateUrl: \"./line-chart-tooltips-prototype.component.html\",\n})\nexport class LineChartTooltipsPrototypeComponent implements OnInit {\n\n    public chart = new Chart(new XYGrid());\n\n    public chartAssist: ChartAssist = new ChartAssist(this.chart);\n    public tooltipsPlugin = new ChartTooltipsPlugin();\n\n    public ngOnInit() {\n        const scales: IXYScales = {\n            x: new TimeScale(\"x\"),\n            y: new LinearScale(),\n        };\n        const renderer = new LineRenderer();\n        // providing chartAssist colors and markers to LineAccessors will share them with the line chart\n        const accessors = new LineAccessors(this.chartAssist.palette.standardColors, this.chartAssist.markers);\n\n        const seriesSet: IChartSeries<ILineAccessors>[] = getData().map(s => ({\n            ...s,\n            scales,\n            renderer,\n            accessors,\n        }));\n\n        // plugin setup\n        this.chart.addPlugin(this.tooltipsPlugin);\n        (this.chart.getGrid() as XYGrid).config().axis.left.fit = true;\n\n        // chart assist needs to be used to update data\n        this.chartAssist.update(seriesSet);\n    }\n\n    public formatNumber(intNum: number, nanMessage: string = \"Undefined\", precision: number = 0): string {\n        if (!this.isNumericValuePresent(intNum)) {\n            return nanMessage;\n        }\n        return intNum.toLocaleString(undefined, {maximumFractionDigits: precision});\n    }\n\n    // eslint-disable-next-line arrow-body-style\n    public isNumericValuePresent = (numericValue: number): boolean => {\n        return numericValue !== undefined && numericValue !== null;\n    }\n\n}\n\n/* Chart data */\nfunction getData() {\n    const format = \"YYYY-MM-DDTHH:mm:ssZ\";\n    const baseDate = \"2016-12-25T15:14:29.909Z\";\n\n    return [\n        {\n            id: \"series-1\",\n            name: \"Series 1\",\n            data: [\n                { x: moment(baseDate, format), y: 30 },\n                { x: moment(baseDate, format).add(1, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(2, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(3, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(4, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(5, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(6, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(7, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(8, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(9, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(10, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(11, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(12, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(13, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(14, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(15, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(16, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(17, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(18, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(19, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(20, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(21, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(22, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(23, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(24, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(25, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(26, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(27, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(28, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(29, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(30, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(31, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(32, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(33, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(34, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(35, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(36, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(37, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(38, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(39, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(40, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(41, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(42, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(43, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(44, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(45, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(46, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(47, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(48, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(49, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(50, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(51, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(52, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(53, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(54, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(55, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(56, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(57, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(58, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(59, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(60, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(61, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(62, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(63, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(64, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(65, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(66, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(67, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(68, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(69, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(70, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(71, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(72, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(73, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(74, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(75, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(76, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(77, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(78, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(79, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(80, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(81, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(82, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(83, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(84, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(85, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(86, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(87, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(88, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(89, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(90, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(91, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(92, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(93, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(94, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(95, \"day\"), y: 60000 },\n                { x: moment(baseDate, format).add(96, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(97, \"day\"), y: 35000 },\n                { x: moment(baseDate, format).add(98, \"day\"), y: 95000 },\n                { x: moment(baseDate, format).add(99, \"day\"), y: 15000 },\n                { x: moment(baseDate, format).add(100, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(101, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(102, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(103, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(104, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(105, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(106, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(107, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(108, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(109, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(110, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(111, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(112, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(113, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(114, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(115, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(116, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(117, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(118, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(119, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(120, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(121, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(122, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(123, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(124, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(125, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(126, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(127, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(128, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(129, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(130, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(131, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(132, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(133, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(134, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(135, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(136, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(137, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(138, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(139, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(140, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(141, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(142, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(143, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(144, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(145, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(146, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(147, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(148, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(149, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(150, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(151, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(152, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(153, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(154, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(155, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(156, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(157, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(158, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(159, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(160, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(161, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(162, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(163, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(164, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(165, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(166, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(167, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(168, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(169, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(170, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(171, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(172, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(173, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(174, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(175, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(176, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(177, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(178, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(179, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(180, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(181, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(182, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(183, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(184, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(185, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(186, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(187, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(188, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(189, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(190, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(191, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(192, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(193, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(194, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(195, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(196, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(197, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(198, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(199, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(200, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(201, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(202, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(203, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(204, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(205, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(206, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(207, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(208, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(209, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(210, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(211, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(212, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(213, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(214, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(215, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(216, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(217, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(218, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(219, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(220, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(221, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(222, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(223, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(224, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(225, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(226, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(227, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(228, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(229, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(230, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(231, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(232, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(233, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(234, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(235, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(236, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(237, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(238, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(239, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(240, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(241, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(242, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(243, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(244, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(245, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(246, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(247, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(248, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(249, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(250, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(251, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(252, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(253, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(254, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(255, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(256, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(257, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(258, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(259, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(260, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(261, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(262, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(263, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(264, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(265, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(266, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(267, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(268, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(269, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(270, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(271, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(272, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(273, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(274, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(275, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(276, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(277, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(278, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(279, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(280, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(281, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(282, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(283, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(284, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(285, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(286, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(287, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(288, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(289, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(290, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(291, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(292, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(293, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(294, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(295, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(296, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(297, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(298, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(299, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(300, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(301, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(302, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(303, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(304, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(305, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(306, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(307, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(308, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(309, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(310, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(311, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(312, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(313, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(314, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(315, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(316, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(317, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(318, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(319, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(320, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(321, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(322, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(323, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(324, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(325, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(326, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(327, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(328, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(329, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(330, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(331, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(332, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(333, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(334, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(335, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(336, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(337, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(338, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(339, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(340, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(341, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(342, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(343, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(344, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(345, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(346, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(347, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(348, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(349, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(350, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(351, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(352, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(353, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(354, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(355, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(356, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(357, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(358, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(359, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(360, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(361, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(362, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(363, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(364, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(365, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(366, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(367, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(368, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(369, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(370, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(371, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(372, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(373, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(374, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(375, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(376, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(377, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(378, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(379, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(380, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(381, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(382, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(383, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(384, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(385, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(386, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(387, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(388, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(389, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(390, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(391, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(392, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(393, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(394, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(395, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(396, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(397, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(398, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(399, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(400, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(401, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(402, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(403, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(404, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(405, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(406, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(407, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(408, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(409, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(410, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(411, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(412, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(413, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(414, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(415, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(416, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(417, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(418, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(419, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(420, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(421, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(422, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(423, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(424, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(425, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(426, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(427, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(428, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(429, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(430, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(431, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(432, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(433, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(434, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(435, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(436, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(437, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(438, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(439, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(440, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(441, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(442, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(443, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(444, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(445, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(446, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(447, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(448, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(449, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(450, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(451, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(452, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(453, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(454, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(455, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(456, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(457, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(458, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(459, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(460, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(461, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(462, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(463, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(464, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(465, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(466, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(467, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(468, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(469, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(470, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(471, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(472, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(473, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(474, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(475, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(476, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(477, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(478, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(479, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(480, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(481, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(482, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(483, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(484, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(485, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(486, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(487, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(488, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(489, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(490, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(491, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(492, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(493, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(494, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(495, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(496, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(497, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(498, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(499, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(500, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(501, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(502, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(503, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(504, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(505, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(506, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(507, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(508, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(509, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(510, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(511, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(512, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(513, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(514, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(515, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(516, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(517, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(518, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(519, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(520, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(521, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(522, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(523, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(524, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(525, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(526, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(527, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(528, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(529, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(530, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(531, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(532, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(533, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(534, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(535, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(536, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(537, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(538, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(539, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(540, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(541, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(542, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(543, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(544, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(545, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(546, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(547, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(548, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(549, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(550, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(551, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(552, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(553, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(554, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(555, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(556, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(557, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(558, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(559, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(560, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(561, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(562, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(563, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(564, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(565, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(566, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(567, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(568, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(569, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(570, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(571, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(572, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(573, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(574, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(575, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(576, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(577, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(578, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(579, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(580, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(581, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(582, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(583, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(584, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(585, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(586, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(587, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(588, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(589, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(590, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(591, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(592, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(593, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(594, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(595, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(596, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(597, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(598, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(599, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(600, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(601, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(602, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(603, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(604, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(605, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(606, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(607, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(608, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(609, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(610, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(611, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(612, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(613, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(614, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(615, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(616, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(617, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(618, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(619, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(620, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(621, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(622, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(623, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(624, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(625, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(626, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(627, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(628, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(629, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(630, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(631, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(632, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(633, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(634, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(635, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(636, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(637, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(638, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(639, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(640, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(641, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(642, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(643, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(644, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(645, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(646, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(647, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(648, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(649, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(650, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(651, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(652, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(653, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(654, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(655, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(656, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(657, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(658, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(659, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(660, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(661, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(662, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(663, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(664, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(665, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(666, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(667, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(668, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(669, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(670, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(671, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(672, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(673, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(674, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(675, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(676, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(677, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(678, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(679, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(680, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(681, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(682, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(683, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(684, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(685, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(686, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(687, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(688, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(689, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(690, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(691, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(692, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(693, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(694, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(695, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(696, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(697, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(698, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(699, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(700, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(701, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(702, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(703, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(704, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(705, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(706, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(707, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(708, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(709, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(710, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(711, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(712, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(713, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(714, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(715, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(716, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(717, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(718, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(719, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(720, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(721, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(722, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(723, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(724, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(725, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(726, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(727, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(728, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(729, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(730, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(731, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(732, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(733, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(734, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(735, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(736, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(737, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(738, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(739, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(740, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(741, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(742, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(743, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(744, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(745, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(746, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(747, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(748, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(749, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(750, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(751, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(752, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(753, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(754, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(755, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(756, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(757, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(758, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(759, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(760, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(761, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(762, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(763, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(764, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(765, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(766, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(767, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(768, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(769, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(770, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(771, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(772, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(773, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(774, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(775, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(776, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(777, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(778, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(779, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(780, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(781, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(782, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(783, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(784, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(785, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(786, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(787, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(788, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(789, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(790, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(791, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(792, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(793, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(794, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(795, \"day\"), y: 95000 },\n                // { x: moment(baseDate, format).add(796, \"day\"), y: 15000 },\n                // { x: moment(baseDate, format).add(797, \"day\"), y: 60000 },\n                // { x: moment(baseDate, format).add(798, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(799, \"day\"), y: 35000 },\n                // { x: moment(baseDate, format).add(800, \"day\"), y: 95000 },\n            ],\n        },\n        {\n            id: \"series-2\",\n            name: \"Series 2\",\n            data: [\n                { x: moment(baseDate, format), y: 60 },\n                { x: moment(baseDate, format).add(1, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(3, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(5, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(7, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(9, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(11, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(13, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(15, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(17, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(19, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(21, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(23, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(25, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(27, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(29, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(31, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(33, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(35, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(37, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(39, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(41, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(43, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(45, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(47, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(49, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(51, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(53, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(55, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(57, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(59, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(61, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(63, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(65, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(67, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(69, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(71, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(73, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(75, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(77, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(79, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(81, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(83, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(85, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(87, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(89, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(91, \"day\"), y: 40000 },\n                { x: moment(baseDate, format).add(93, \"day\"), y: 70000 },\n                { x: moment(baseDate, format).add(95, \"day\"), y: 45000 },\n                { x: moment(baseDate, format).add(97, \"day\"), y: 90000 },\n                { x: moment(baseDate, format).add(99, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(101, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(103, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(105, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(107, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(109, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(111, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(113, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(115, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(117, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(119, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(121, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(123, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(125, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(127, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(129, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(131, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(133, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(135, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(137, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(139, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(141, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(143, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(145, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(147, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(149, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(151, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(153, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(155, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(157, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(159, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(161, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(163, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(165, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(167, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(169, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(171, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(173, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(175, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(177, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(179, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(181, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(183, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(185, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(187, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(189, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(191, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(193, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(195, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(197, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(199, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(201, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(203, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(205, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(207, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(209, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(211, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(213, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(215, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(217, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(219, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(221, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(223, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(225, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(227, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(229, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(231, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(233, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(235, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(237, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(239, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(241, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(243, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(245, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(247, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(249, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(251, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(253, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(255, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(257, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(259, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(261, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(263, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(265, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(267, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(269, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(271, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(273, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(275, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(277, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(279, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(281, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(283, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(285, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(287, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(289, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(291, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(293, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(295, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(297, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(299, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(301, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(303, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(305, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(307, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(309, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(311, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(313, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(315, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(317, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(319, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(321, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(323, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(325, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(327, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(329, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(331, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(333, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(335, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(337, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(339, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(341, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(343, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(345, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(347, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(349, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(351, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(353, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(355, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(357, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(359, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(361, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(363, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(365, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(367, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(369, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(371, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(373, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(375, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(377, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(379, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(381, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(383, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(385, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(387, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(389, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(391, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(393, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(395, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(397, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(399, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(401, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(403, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(405, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(407, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(409, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(411, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(413, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(415, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(417, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(419, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(421, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(423, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(425, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(427, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(429, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(431, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(433, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(435, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(437, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(439, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(441, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(443, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(445, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(447, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(449, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(451, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(453, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(455, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(457, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(459, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(461, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(463, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(465, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(467, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(469, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(471, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(473, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(475, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(477, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(479, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(481, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(483, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(485, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(487, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(489, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(491, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(493, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(495, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(497, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(499, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(501, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(503, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(505, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(507, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(509, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(511, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(513, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(515, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(517, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(519, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(521, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(523, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(525, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(527, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(529, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(531, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(533, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(535, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(537, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(539, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(541, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(543, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(545, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(547, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(549, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(551, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(553, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(555, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(557, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(559, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(561, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(563, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(565, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(567, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(569, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(571, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(573, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(575, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(577, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(579, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(581, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(583, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(585, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(587, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(589, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(591, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(593, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(595, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(597, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(599, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(601, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(603, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(605, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(607, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(609, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(611, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(613, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(615, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(617, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(619, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(621, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(623, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(625, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(627, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(629, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(631, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(633, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(635, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(637, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(639, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(641, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(643, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(645, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(647, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(649, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(651, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(653, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(655, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(657, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(659, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(661, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(663, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(665, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(667, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(669, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(671, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(673, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(675, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(677, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(679, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(681, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(683, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(685, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(687, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(689, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(691, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(693, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(695, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(697, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(699, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(701, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(703, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(705, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(707, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(709, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(711, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(713, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(715, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(717, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(719, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(721, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(723, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(725, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(727, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(729, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(731, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(733, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(735, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(737, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(739, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(741, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(743, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(745, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(747, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(749, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(751, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(753, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(755, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(757, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(759, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(761, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(763, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(765, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(767, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(769, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(771, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(773, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(775, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(777, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(779, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(781, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(783, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(785, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(787, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(789, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(791, \"day\"), y: 40000 },\n                // { x: moment(baseDate, format).add(793, \"day\"), y: 70000 },\n                // { x: moment(baseDate, format).add(795, \"day\"), y: 45000 },\n                // { x: moment(baseDate, format).add(797, \"day\"), y: 90000 },\n                // { x: moment(baseDate, format).add(799, \"day\"), y: 90000 },\n            ],\n        },\n    ];\n}\n";
      /***/
    },

    /***/
    "RKdM":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/tooltips/line-chart/tooltips-performance-test.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RKdM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"chart-container\">\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n    <line-chart-tooltips-prototype class=\"chart d-block\"></line-chart-tooltips-prototype>\n</div>\n";
      /***/
    },

    /***/
    "ZAg8":
    /*!*************************************************************************************************************!*\
      !*** ./examples/components/demo/development/tooltips/line-chart/line-chart-tooltips-prototype.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: LineChartTooltipsPrototypeComponent */

    /***/
    function ZAg8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartTooltipsPrototypeComponent", function () {
        return LineChartTooltipsPrototypeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_chart_tooltips_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line-chart-tooltips-prototype.component.html */
      "01NB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nova-ui/charts */
      "gKry");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment/moment */
      "wd/R");
      /* harmony import */


      var moment_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_4__);

      var LineChartTooltipsPrototypeComponent = /*#__PURE__*/function () {
        function LineChartTooltipsPrototypeComponent() {
          _classCallCheck(this, LineChartTooltipsPrototypeComponent);

          this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["XYGrid"]());
          this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartAssist"](this.chart);
          this.tooltipsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["ChartTooltipsPlugin"](); // eslint-disable-next-line arrow-body-style

          this.isNumericValuePresent = function (numericValue) {
            return numericValue !== undefined && numericValue !== null;
          };
        }

        _createClass(LineChartTooltipsPrototypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var scales = {
              x: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["TimeScale"]("x"),
              y: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LinearScale"]()
            };
            var renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineRenderer"](); // providing chartAssist colors and markers to LineAccessors will share them with the line chart

            var accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["LineAccessors"](this.chartAssist.palette.standardColors, this.chartAssist.markers);
            var seriesSet = getData().map(function (s) {
              return Object.assign(Object.assign({}, s), {
                scales: scales,
                renderer: renderer,
                accessors: accessors
              });
            }); // plugin setup

            this.chart.addPlugin(this.tooltipsPlugin);
            this.chart.getGrid().config().axis.left.fit = true; // chart assist needs to be used to update data

            this.chartAssist.update(seriesSet);
          }
        }, {
          key: "formatNumber",
          value: function formatNumber(intNum) {
            var nanMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Undefined";
            var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (!this.isNumericValuePresent(intNum)) {
              return nanMessage;
            }

            return intNum.toLocaleString(undefined, {
              maximumFractionDigits: precision
            });
          }
        }]);

        return LineChartTooltipsPrototypeComponent;
      }();

      LineChartTooltipsPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "line-chart-tooltips-prototype",
        template: _raw_loader_line_chart_tooltips_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LineChartTooltipsPrototypeComponent);
      /* Chart data */

      function getData() {
        var format = "YYYY-MM-DDTHH:mm:ssZ";
        var baseDate = "2016-12-25T15:14:29.909Z";
        return [{
          id: "series-1",
          name: "Series 1",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format),
            y: 30
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(1, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(2, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(3, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(4, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(5, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(6, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(7, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(8, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(9, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(10, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(11, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(12, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(13, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(14, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(15, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(16, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(17, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(18, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(19, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(20, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(21, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(22, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(23, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(24, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(25, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(26, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(27, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(28, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(29, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(30, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(31, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(32, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(33, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(34, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(35, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(36, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(37, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(38, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(39, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(40, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(41, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(42, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(43, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(44, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(45, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(46, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(47, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(48, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(49, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(50, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(51, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(52, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(53, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(54, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(55, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(56, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(57, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(58, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(59, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(60, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(61, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(62, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(63, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(64, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(65, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(66, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(67, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(68, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(69, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(70, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(71, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(72, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(73, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(74, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(75, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(76, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(77, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(78, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(79, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(80, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(81, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(82, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(83, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(84, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(85, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(86, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(87, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(88, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(89, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(90, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(91, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(92, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(93, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(94, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(95, "day"),
            y: 60000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(96, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(97, "day"),
            y: 35000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(98, "day"),
            y: 95000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(99, "day"),
            y: 15000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(100, "day"),
            y: 60000
          }]
        }, {
          id: "series-2",
          name: "Series 2",
          data: [{
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format),
            y: 60
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(1, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(3, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(5, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(7, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(9, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(11, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(13, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(15, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(17, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(19, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(21, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(23, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(25, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(27, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(29, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(31, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(33, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(35, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(37, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(39, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(41, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(43, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(45, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(47, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(49, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(51, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(53, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(55, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(57, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(59, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(61, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(63, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(65, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(67, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(69, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(71, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(73, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(75, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(77, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(79, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(81, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(83, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(85, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(87, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(89, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(91, "day"),
            y: 40000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(93, "day"),
            y: 70000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(95, "day"),
            y: 45000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(97, "day"),
            y: 90000
          }, {
            x: moment_moment__WEBPACK_IMPORTED_MODULE_4___default()(baseDate, format).add(99, "day"),
            y: 90000
          }]
        }];
      }
      /***/

    },

    /***/
    "cRMs":
    /*!***********************************************************************************************************************!*\
      !*** ./examples/components/demo/development/tooltips sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
      \***********************************************************************************************************************/

    /*! no static exports found */

    /***/
    function cRMs(module, exports, __webpack_require__) {
      var map = {
        "./line-chart/line-chart-tooltips-prototype.component.html": "01NB",
        "./line-chart/line-chart-tooltips-prototype.component.ts": "PtHN",
        "./line-chart/tooltips-performance-test.component.html": "RKdM",
        "./line-chart/tooltips-performance-test.component.less": "NZM7",
        "./line-chart/tooltips-performance-test.component.ts": "1LtL",
        "./tooltips-prototype.module.ts": "u/+C"
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
      webpackContext.id = "cRMs";
      /***/
    },

    /***/
    "j2zr":
    /*!************************************************************************************!*\
      !*** ./examples/components/demo/development/tooltips/tooltips-prototype.module.ts ***!
      \************************************************************************************/

    /*! exports provided: TooltipsPrototypeModule */

    /***/
    function j2zr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipsPrototypeModule", function () {
        return TooltipsPrototypeModule;
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


      var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../common/demo-common.module */
      "s1Ul");
      /* harmony import */


      var _line_chart_line_chart_tooltips_prototype_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./line-chart/line-chart-tooltips-prototype.component */
      "ZAg8");
      /* harmony import */


      var _line_chart_tooltips_performance_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./line-chart/tooltips-performance-test.component */
      "P3l5");

      var routes = [{
        path: "performance",
        component: _line_chart_tooltips_performance_test_component__WEBPACK_IMPORTED_MODULE_7__["TooltipsPerformanceTestComponent"],
        data: {
          "srlc": {
            "hideIndicator": true
          }
        }
      }];

      var TooltipsPrototypeModule = function TooltipsPrototypeModule() {
        _classCallCheck(this, TooltipsPrototypeModule);
      };

      TooltipsPrototypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_line_chart_line_chart_tooltips_prototype_component__WEBPACK_IMPORTED_MODULE_6__["LineChartTooltipsPrototypeComponent"], _line_chart_tooltips_performance_test_component__WEBPACK_IMPORTED_MODULE_7__["TooltipsPerformanceTestComponent"]],
        imports: [_common_demo_common_module__WEBPACK_IMPORTED_MODULE_5__["DemoCommonModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiButtonModule"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["NuiChartsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiIconModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        providers: [{
          provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
          useFactory: function useFactory() {
            return __webpack_require__("cRMs");
          }
        }]
      })], TooltipsPrototypeModule);
      /***/
    },

    /***/
    "u/+C":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/tooltips/tooltips-prototype.module.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiDocsModule, NuiIconModule, NuiSwitchModule } from \"@nova-ui/bits\";\nimport { NuiChartsModule } from \"@nova-ui/charts\";\n\nimport { DemoCommonModule } from \"../../common/demo-common.module\";\n\nimport { LineChartTooltipsPrototypeComponent } from \"./line-chart/line-chart-tooltips-prototype.component\";\nimport { TooltipsPerformanceTestComponent } from \"./line-chart/tooltips-performance-test.component\";\n\nconst routes: Routes = [\n    {\n        path: \"performance\",\n        component: TooltipsPerformanceTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        LineChartTooltipsPrototypeComponent,\n        TooltipsPerformanceTestComponent,\n    ],\n    imports: [\n        DemoCommonModule,\n        NuiButtonModule,\n        NuiChartsModule,\n        NuiDocsModule,\n        NuiIconModule,\n        NuiSwitchModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n})\nexport class TooltipsPrototypeModule {\n}\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tooltips-tooltips-prototype-module-es5.js.map