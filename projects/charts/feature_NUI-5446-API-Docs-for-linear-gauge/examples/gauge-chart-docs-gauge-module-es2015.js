(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-chart-docs-gauge-module"],{

/***/ "1u20":
/*!*******************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/linear/horizontal-gauge-basic-example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: HorizontalGaugeBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalGaugeBasicExampleComponent", function() { return HorizontalGaugeBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_horizontal_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./horizontal-gauge-basic-example.component.html */ "5pvG");
/* harmony import */ var _horizontal_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-gauge-basic-example.component.less */ "UnY2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let HorizontalGaugeBasicExampleComponent = class HorizontalGaugeBasicExampleComponent {
    ngOnInit() {
        // Setting up the gauge config
        const initialValue = 64;
        this.gaugeConfig = this.getGaugeConfig(initialValue);
        // Setting up the horizontal grid
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal));
        // Creating the chart (Note the use of the stack preprocessor function. This handles the "stacking"
        // of the quantity and remainder visualization's side-by-side on the gauge.)
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
        // Assembling the series
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
        // Updating the chart
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        // Updating the gauge config
        this.gaugeConfig = this.getGaugeConfig(value);
        // Updating the series set with the new config
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        // Updating the chart with the updated series set
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig(value) {
        return {
            value,
            max: 100,
        };
    }
};
HorizontalGaugeBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "horizontal-gauge-basic-example",
        template: _raw_loader_horizontal_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_horizontal_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HorizontalGaugeBasicExampleComponent);



/***/ }),

/***/ "6gvS":
/*!*************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-basic/donut-gauge-basic-example.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DonutGaugeBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeBasicExampleComponent", function() { return DonutGaugeBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-basic-example.component.html */ "QUxe");
/* harmony import */ var _donut_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-basic-example.component.less */ "Npi5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeBasicExampleComponent = class DonutGaugeBasicExampleComponent {
    ngOnInit() {
        // Setting up the gauge config
        const initialValue = 128;
        this.gaugeConfig = this.getGaugeConfig(initialValue);
        // Creating the chart
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        // Assembling the series
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        // Updating the chart
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        // Updating the gauge config
        this.gaugeConfig = this.getGaugeConfig(value);
        // Updating the series set with the new config
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        // Updating the chart with the updated series set
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig(value) {
        return {
            value,
            max: 200,
        };
    }
};
DonutGaugeBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-basic-example",
        template: _raw_loader_donut_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeBasicExampleComponent);



/***/ }),

/***/ "6k7h":
/*!***************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.less ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jaGFydCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "AVdE":
/*!********************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-gauge.component.html": "ZWN/",
	"./chart-docs-gauge.component.ts": "2DII",
	"./chart-docs-gauge.module.ts": "ZDgL",
	"./donut/donut-basic/donut-gauge-basic-example.component.html": "QUxe",
	"./donut/donut-basic/donut-gauge-basic-example.component.less": "z2tb",
	"./donut/donut-basic/donut-gauge-basic-example.component.ts": "mDnq",
	"./donut/donut-with-content/donut-gauge-with-content-example.component.html": "dXgp",
	"./donut/donut-with-content/donut-gauge-with-content-example.component.less": "91pg",
	"./donut/donut-with-content/donut-gauge-with-content-example.component.ts": "/sCd",
	"./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.html": "G2WF",
	"./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.less": "Yu0q",
	"./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.ts": "r3Ox",
	"./donut/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.html": "fjMI",
	"./donut/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.less": "eOaR",
	"./donut/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.ts": "4rqB",
	"./donut/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.html": "wxT2",
	"./donut/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.less": "xhxi",
	"./donut/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.ts": "O6Ab",
	"./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.html": "1oNZ",
	"./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.less": "2ZQm",
	"./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.ts": "ZvUs",
	"./linear/horizontal-gauge-basic-example.component.html": "5pvG",
	"./linear/horizontal-gauge-basic-example.component.less": "lg37",
	"./linear/horizontal-gauge-basic-example.component.ts": "Ul85",
	"./linear/vertical-gauge-basic-example.component.html": "Ppwf",
	"./linear/vertical-gauge-basic-example.component.less": "GfGZ",
	"./linear/vertical-gauge-basic-example.component.ts": "tkA1",
	"./visual-test/donut/donut-gauge-tester.component.html": "3Isn",
	"./visual-test/donut/donut-gauge-tester.component.less": "WISq",
	"./visual-test/donut/donut-gauge-tester.component.ts": "wITR",
	"./visual-test/gauge-visual-test.component.html": "m1aH",
	"./visual-test/gauge-visual-test.component.ts": "d56P",
	"./visual-test/horizontal/horizontal-gauge-tester.component.html": "CqTf",
	"./visual-test/horizontal/horizontal-gauge-tester.component.less": "QoLo",
	"./visual-test/horizontal/horizontal-gauge-tester.component.ts": "Nchi",
	"./visual-test/vertical/vertical-gauge-tester.component.html": "OzOS",
	"./visual-test/vertical/vertical-gauge-tester.component.less": "rphd",
	"./visual-test/vertical/vertical-gauge-tester.component.ts": "WxU7"
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
webpackContext.id = "AVdE";

/***/ }),

/***/ "FQjS":
/*!*****************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-content/donut-gauge-with-content-example.component.less ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 250px;\n  width: 250px;\n}\n.demo-content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtY29udGVudC1leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFESjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBRkoiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC1jb250ZW50LWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uZGVtby1jaGFydCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5kZW1vLWNvbnRlbnQtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLW51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG4iXX0= */");

/***/ }),

/***/ "GN1g":
/*!********************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.less ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXRlc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQURKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXRlc3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5cbi5jb250ZW50LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */");

/***/ }),

/***/ "KDkq":
/*!*********************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.less ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtbWFya2VyLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXdpdGgtbWFya2VyLXRvZ2dsaW5nLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jaGFydCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "Npi5":
/*!***************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-basic/donut-gauge-basic-example.component.less ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 200px;\n  width: 200px;\n}\n.demo-value-input {\n  margin-right: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtBQUFKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1jaGFydCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5kZW1vLXZhbHVlLWlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "OdNu":
/*!***********************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: DonutGaugeWithThresholdMarkersExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeWithThresholdMarkersExampleComponent", function() { return DonutGaugeWithThresholdMarkersExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_with_threshold_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-with-threshold-markers-example.component.html */ "wxT2");
/* harmony import */ var _donut_gauge_with_threshold_markers_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-with-threshold-markers-example.component.less */ "XyVC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeWithThresholdMarkersExampleComponent = class DonutGaugeWithThresholdMarkersExampleComponent {
    constructor() {
        this.value = 178;
        this.reversed = false;
        this.lowThreshold = 100;
        this.highThreshold = 158;
        // Generating a standard set of thresholds with warning and critical levels
        this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(this.lowThreshold, this.highThreshold);
    }
    ngOnInit() {
        this.gaugeConfig = this.getGaugeConfig();
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        // Adding the labels plugin
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        this.value = value;
        this.updateGauge();
    }
    onReversedChange(reversed) {
        this.reversed = reversed;
        this.thresholds.reversed = reversed;
        // swap the values of the warning and critical thresholds
        this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Warning].value = this.reversed ? this.highThreshold : this.lowThreshold;
        this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Critical].value = this.reversed ? this.lowThreshold : this.highThreshold;
        this.updateGauge();
    }
    updateGauge() {
        this.gaugeConfig = this.getGaugeConfig();
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig() {
        return {
            value: this.value,
            max: 200,
            // Enabling the thresholds
            thresholds: this.thresholds,
        };
    }
};
DonutGaugeWithThresholdMarkersExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-threshold-markers-example",
        template: _raw_loader_donut_gauge_with_threshold_markers_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_threshold_markers_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeWithThresholdMarkersExampleComponent);



/***/ }),

/***/ "PxlK":
/*!************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: VerticalGaugeTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalGaugeTesterComponent", function() { return VerticalGaugeTesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vertical_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vertical-gauge-tester.component.html */ "OzOS");
/* harmony import */ var _vertical_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical-gauge-tester.component.less */ "qQ1H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let VerticalGaugeTesterComponent = class VerticalGaugeTesterComponent {
    ngOnChanges(changes) {
        if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
            this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
        }
    }
    ngOnInit() {
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical));
        const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
        this.chartAssist.update(this.seriesSet);
    }
};
VerticalGaugeTesterComponent.propDecorators = {
    gaugeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
VerticalGaugeTesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "vertical-gauge-tester",
        template: _raw_loader_vertical_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vertical_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerticalGaugeTesterComponent);



/***/ }),

/***/ "Qq1k":
/*!*****************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/linear/vertical-gauge-basic-example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VerticalGaugeBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalGaugeBasicExampleComponent", function() { return VerticalGaugeBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_vertical_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./vertical-gauge-basic-example.component.html */ "Ppwf");
/* harmony import */ var _vertical_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical-gauge-basic-example.component.less */ "szv6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let VerticalGaugeBasicExampleComponent = class VerticalGaugeBasicExampleComponent {
    ngOnInit() {
        // Setting up the gauge config
        const initialValue = 64;
        this.gaugeConfig = this.getGaugeConfig(initialValue);
        // Setting up the vertical grid
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical));
        // Creating the chart (Note the use of the stack preprocessor function. This handles the "stacking"
        // of the quantity and remainder visualization's vertically on the gauge.)
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
        // Assembling the series
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
        // Updating the chart
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        // Updating the gauge config
        this.gaugeConfig = this.getGaugeConfig(value);
        // Updating the series set with the new config
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        // Updating the chart with the updated series set
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig(value) {
        return {
            value,
            max: 100,
        };
    }
};
VerticalGaugeBasicExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "vertical-gauge-basic-example",
        template: _raw_loader_vertical_gauge_basic_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vertical_gauge_basic_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerticalGaugeBasicExampleComponent);



/***/ }),

/***/ "RsPz":
/*!*************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: DonutGaugeWithThresholdTogglingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeWithThresholdTogglingExampleComponent", function() { return DonutGaugeWithThresholdTogglingExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_with_threshold_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-with-threshold-toggling-example.component.html */ "1oNZ");
/* harmony import */ var _donut_gauge_with_threshold_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-with-threshold-toggling-example.component.less */ "6k7h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeWithThresholdTogglingExampleComponent = class DonutGaugeWithThresholdTogglingExampleComponent {
    constructor() {
        this.value = 128;
        this.warningEnabled = true;
        this.criticalEnabled = true;
        // Generating a standard set of thresholds with warning and critical levels
        this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
    }
    ngOnInit() {
        this.gaugeConfig = this.getGaugeConfig();
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        // Adding the labels plugin
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        this.value = value;
        this.updateGauge();
    }
    onWarningEnabledChange(enabled) {
        this.warningEnabled = enabled;
        // Enabling or disabling the warning threshold
        this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Warning].enabled = this.warningEnabled;
        this.updateGauge();
    }
    onCriticalEnabledChange(enabled) {
        this.criticalEnabled = enabled;
        // Enabling or disabling the critical threshold
        this.thresholds.definitions[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardGaugeThresholdId"].Critical].enabled = this.criticalEnabled;
        this.updateGauge();
    }
    updateGauge() {
        this.gaugeConfig = this.getGaugeConfig();
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig() {
        return {
            value: this.value,
            max: 200,
            thresholds: this.thresholds,
        };
    }
};
DonutGaugeWithThresholdTogglingExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-threshold-toggling-example",
        template: _raw_loader_donut_gauge_with_threshold_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_threshold_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeWithThresholdTogglingExampleComponent);



/***/ }),

/***/ "SejL":
/*!**********************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/chart-docs-gauge.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChartDocsGaugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsGaugeComponent", function() { return ChartDocsGaugeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_gauge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-gauge.component.html */ "ZWN/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsGaugeComponent = class ChartDocsGaugeComponent {
};
ChartDocsGaugeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-gauge",
        template: _raw_loader_chart_docs_gauge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsGaugeComponent);



/***/ }),

/***/ "Sk0/":
/*!*******************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: DonutGaugeWithMarkerTogglingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeWithMarkerTogglingExampleComponent", function() { return DonutGaugeWithMarkerTogglingExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_with_marker_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-with-marker-toggling-example.component.html */ "fjMI");
/* harmony import */ var _donut_gauge_with_marker_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-with-marker-toggling-example.component.less */ "KDkq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeWithMarkerTogglingExampleComponent = class DonutGaugeWithMarkerTogglingExampleComponent {
    constructor() {
        this.value = 128;
        this.markersEnabled = true;
        this.labelsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]();
        // Generating a standard set of thresholds with warning and critical levels
        this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
    }
    ngOnInit() {
        this.gaugeConfig = this.getGaugeConfig();
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        // Adding the labels plugin
        // Note: This plugin can be completely omitted if labels aren't needed for your use case.
        this.chartAssist.chart.addPlugin(this.labelsPlugin);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        this.value = value;
        this.updateGauge();
    }
    onMarkersEnabledChange(enabled) {
        this.markersEnabled = enabled;
        // Enabling or disabling the threshold markers
        this.thresholds.disableMarkers = !this.markersEnabled;
        // Enabling or disabling the threshold labels
        // Note: In addition to toggling the label plugin's 'disableThresholdLabels' configuration property,
        // the plugin can simply be omitted if labels aren't needed at all for your use case.
        this.labelsPlugin.config.disableThresholdLabels = !this.markersEnabled;
        this.updateGauge();
    }
    updateGauge() {
        this.gaugeConfig = this.getGaugeConfig();
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig() {
        return {
            value: this.value,
            max: 200,
            thresholds: this.thresholds,
        };
    }
};
DonutGaugeWithMarkerTogglingExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-marker-toggling-example",
        template: _raw_loader_donut_gauge_with_marker_toggling_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_marker_toggling_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeWithMarkerTogglingExampleComponent);



/***/ }),

/***/ "UnY2":
/*!*********************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/linear/horizontal-gauge-basic-example.component.less ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtZ2F1Z2UtYmFzaWMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7QUFBSiIsImZpbGUiOiJob3Jpem9udGFsLWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZXR0aW5nIHRoZSB3aWR0aCBvbiB0aGUgY2hhcnQgZWxlbWVudCBkZXRlcm1pbmVzIHRoZSBob3Jpem9udGFsIGxlbmd0aCBvZiB0aGUgZ2F1Z2Vcbi5kZW1vLWNoYXJ0IHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "XyVC":
/*!*************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component.less ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtdGhyZXNob2xkLW1hcmtlcnMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC10aHJlc2hvbGQtbWFya2Vycy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "bapz":
/*!***********************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/gauge-visual-test.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: GaugeVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeVisualTestComponent", function() { return GaugeVisualTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gauge_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gauge-visual-test.component.html */ "m1aH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/cloneDeep */ "BkRI");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);





let GaugeVisualTestComponent = class GaugeVisualTestComponent {
    constructor() {
        this.warningEnabled = true;
        this.gaugeConfigs = [this.getGaugeConfig(42), this.getGaugeConfig(130), this.getGaugeConfig(178)];
    }
    getGaugeConfig(value) {
        return {
            value,
            max: 200,
            thresholds: _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["GaugeUtil"].createStandardThresholdsConfig(100, 158),
        };
    }
    onWarningEnabledChange(enabled) {
        this.warningEnabled = enabled;
        this.gaugeConfigs = this.gaugeConfigs.map(c => {
            var _a;
            const config = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(c);
            ((_a = config.thresholds) === null || _a === void 0 ? void 0 : _a.definitions)[_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["StandardGaugeThresholdId"].Warning].enabled = this.warningEnabled;
            return config;
        });
    }
};
GaugeVisualTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "gauge-visual-test",
        template: _raw_loader_gauge_visual_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], GaugeVisualTestComponent);



/***/ }),

/***/ "f1Ud":
/*!****************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: HorizontalGaugeTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalGaugeTesterComponent", function() { return HorizontalGaugeTesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_horizontal_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./horizontal-gauge-tester.component.html */ "CqTf");
/* harmony import */ var _horizontal_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./horizontal-gauge-tester.component.less */ "wsHt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let HorizontalGaugeTesterComponent = class HorizontalGaugeTesterComponent {
    ngOnChanges(changes) {
        if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
            this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
        }
    }
    ngOnInit() {
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal));
        const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
        this.chartAssist.update(this.seriesSet);
    }
};
HorizontalGaugeTesterComponent.propDecorators = {
    gaugeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HorizontalGaugeTesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "horizontal-gauge-tester",
        template: _raw_loader_horizontal_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_horizontal_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HorizontalGaugeTesterComponent);



/***/ }),

/***/ "lqKu":
/*!*************************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.less ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 250px;\n  width: 250px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXdpdGgtY3VzdG9tLXRocmVzaG9sZC1sYWJlbHMtZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiZG9udXQtZ2F1Z2Utd2l0aC1jdXN0b20tdGhyZXNob2xkLWxhYmVscy1leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2hhcnQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "mSgw":
/*!***********************************************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: DonutGaugeWithCustomThresholdLabelsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeWithCustomThresholdLabelsExampleComponent", function() { return DonutGaugeWithCustomThresholdLabelsExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_with_custom_threshold_labels_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-with-custom-threshold-labels-example.component.html */ "G2WF");
/* harmony import */ var _donut_gauge_with_custom_threshold_labels_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-with-custom-threshold-labels-example.component.less */ "lqKu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeWithCustomThresholdLabelsExampleComponent = class DonutGaugeWithCustomThresholdLabelsExampleComponent {
    constructor() {
        this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(50, 80);
    }
    ngOnInit() {
        const initialValue = 64;
        this.gaugeConfig = this.getGaugeConfig(initialValue);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        // Adding the labels plugin
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        this.gaugeConfig = this.getGaugeConfig(value);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig(value) {
        return {
            value,
            max: 100,
            thresholds: this.thresholds,
            // Setting a custom label formatter
            labelFormatter: (d) => `${d}%`,
        };
    }
};
DonutGaugeWithCustomThresholdLabelsExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-custom-threshold-labels-example",
        template: _raw_loader_donut_gauge_with_custom_threshold_labels_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_custom_threshold_labels_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeWithCustomThresholdLabelsExampleComponent);



/***/ }),

/***/ "opha":
/*!***************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/donut/donut-with-content/donut-gauge-with-content-example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: DonutGaugeWithContentExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeWithContentExampleComponent", function() { return DonutGaugeWithContentExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_with_content_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-with-content-example.component.html */ "dXgp");
/* harmony import */ var _donut_gauge_with_content_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-with-content-example.component.less */ "FQjS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeWithContentExampleComponent = class DonutGaugeWithContentExampleComponent {
    constructor() {
        this.thresholds = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createStandardThresholdsConfig(100, 158);
    }
    ngOnInit() {
        const initialValue = 178;
        this.gaugeConfig = this.getGaugeConfig(initialValue);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        // Adding the plugin for the donut inner content
        this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
        this.chartAssist.chart.addPlugin(this.contentPlugin);
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.chartAssist.update(this.seriesSet);
    }
    onValueChange(value) {
        this.gaugeConfig = this.getGaugeConfig(value);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig);
        this.chartAssist.update(this.seriesSet);
    }
    getGaugeConfig(value) {
        return {
            value,
            max: 200,
            thresholds: this.thresholds,
        };
    }
};
DonutGaugeWithContentExampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-with-content-example",
        template: _raw_loader_donut_gauge_with_content_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_with_content_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeWithContentExampleComponent);



/***/ }),

/***/ "qQ1H":
/*!**************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/vertical/vertical-gauge-tester.component.less ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n  height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLWdhdWdlLXRlc3Rlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUFESiIsImZpbGUiOiJ2ZXJ0aWNhbC1nYXVnZS10ZXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uY2hhcnQge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "szv6":
/*!*******************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/linear/vertical-gauge-basic-example.component.less ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-chart {\n  height: 200px;\n}\n.demo-value-input {\n  margin-right: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLWdhdWdlLWJhc2ljLWV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0FBREoiLCJmaWxlIjoidmVydGljYWwtZ2F1Z2UtYmFzaWMtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNldHRpbmcgdGhlIGhlaWdodCBvbiB0aGUgY2hhcnQgZWxlbWVudCBkZXRlcm1pbmVzIHRoZSB2ZXJ0aWNhbCBsZW5ndGggb2YgdGhlIGdhdWdlXG4uZGVtby1jaGFydCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmRlbW8tdmFsdWUtaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "t+VH":
/*!******************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/donut/donut-gauge-tester.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DonutGaugeTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugeTesterComponent", function() { return DonutGaugeTesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-tester.component.html */ "3Isn");
/* harmony import */ var _donut_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-tester.component.less */ "GN1g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugeTesterComponent = class DonutGaugeTesterComponent {
    constructor() {
        this.size = 250;
    }
    ngOnChanges(changes) {
        if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
            this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
        }
    }
    ngOnInit() {
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])()), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
        this.chartAssist.chart.addPlugin(this.contentPlugin);
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"]());
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.chartAssist.update(this.seriesSet);
    }
};
DonutGaugeTesterComponent.propDecorators = {
    gaugeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DonutGaugeTesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-tester",
        template: _raw_loader_donut_gauge_tester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_tester_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugeTesterComponent);



/***/ }),

/***/ "wsHt":
/*!******************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/visual-test/horizontal/horizontal-gauge-tester.component.less ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n  width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtZ2F1Z2UtdGVzdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKIiwiZmlsZSI6Imhvcml6b250YWwtZ2F1Z2UtdGVzdGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuLmNoYXJ0IHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "yAut":
/*!*******************************************************************************!*\
  !*** ./examples/components/demo/chart-types/gauge/chart-docs-gauge.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ChartDocsGaugeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsGaugeModule", function() { return ChartDocsGaugeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart-docs-gauge.component */ "SejL");
/* harmony import */ var _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visual-test/gauge-visual-test.component */ "bapz");
/* harmony import */ var _visual_test_horizontal_horizontal_gauge_tester_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visual-test/horizontal/horizontal-gauge-tester.component */ "f1Ud");
/* harmony import */ var _visual_test_donut_donut_gauge_tester_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visual-test/donut/donut-gauge-tester.component */ "t+VH");
/* harmony import */ var _visual_test_vertical_vertical_gauge_tester_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visual-test/vertical/vertical-gauge-tester.component */ "PxlK");
/* harmony import */ var _donut_donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./donut/donut-basic/donut-gauge-basic-example.component */ "6gvS");
/* harmony import */ var _donut_donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donut/donut-with-content/donut-gauge-with-content-example.component */ "opha");
/* harmony import */ var _donut_donut_with_threshold_markers_donut_gauge_with_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./donut/donut-with-threshold-markers/donut-gauge-with-threshold-markers-example.component */ "OdNu");
/* harmony import */ var _donut_donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./donut/donut-with-threshold-toggling/donut-gauge-with-threshold-toggling-example.component */ "RsPz");
/* harmony import */ var _donut_donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./donut/donut-with-custom-threshold-labels/donut-gauge-with-custom-threshold-labels-example.component */ "mSgw");
/* harmony import */ var _donut_donut_with_marker_toggling_donut_gauge_with_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./donut/donut-with-marker-toggling/donut-gauge-with-marker-toggling-example.component */ "Sk0/");
/* harmony import */ var _linear_horizontal_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./linear/horizontal-gauge-basic-example.component */ "1u20");
/* harmony import */ var _linear_vertical_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./linear/vertical-gauge-basic-example.component */ "Qq1k");

/* eslint-disable max-len */



















const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"],
        data: {
            showThemeSwitcher: true,
        },
    },
    {
        path: "visual-test",
        component: _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["GaugeVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "donut-basic",
        component: _donut_donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__["DonutGaugeBasicExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "donut-with-content",
        component: _donut_donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__["DonutGaugeWithContentExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "donut-with-custom-labels",
        component: _donut_donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__["DonutGaugeWithCustomThresholdLabelsExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "donut-with-marker-toggling",
        component: _donut_donut_with_marker_toggling_donut_gauge_with_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_17__["DonutGaugeWithMarkerTogglingExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "donut-with-threshold-markers",
        component: _donut_donut_with_threshold_markers_donut_gauge_with_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_14__["DonutGaugeWithThresholdMarkersExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "donut-with-threshold-toggling",
        component: _donut_donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__["DonutGaugeWithThresholdTogglingExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "horizontal-basic",
        component: _linear_horizontal_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_18__["HorizontalGaugeBasicExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "vertical-basic",
        component: _linear_vertical_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_19__["VerticalGaugeBasicExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ChartDocsGaugeModule = class ChartDocsGaugeModule {
};
ChartDocsGaugeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_docs_gauge_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsGaugeComponent"],
            _visual_test_gauge_visual_test_component__WEBPACK_IMPORTED_MODULE_8__["GaugeVisualTestComponent"],
            _linear_horizontal_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_18__["HorizontalGaugeBasicExampleComponent"],
            _visual_test_horizontal_horizontal_gauge_tester_component__WEBPACK_IMPORTED_MODULE_9__["HorizontalGaugeTesterComponent"],
            _visual_test_donut_donut_gauge_tester_component__WEBPACK_IMPORTED_MODULE_10__["DonutGaugeTesterComponent"],
            _donut_donut_basic_donut_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_12__["DonutGaugeBasicExampleComponent"],
            _donut_donut_with_content_donut_gauge_with_content_example_component__WEBPACK_IMPORTED_MODULE_13__["DonutGaugeWithContentExampleComponent"],
            _donut_donut_with_custom_threshold_labels_donut_gauge_with_custom_threshold_labels_example_component__WEBPACK_IMPORTED_MODULE_16__["DonutGaugeWithCustomThresholdLabelsExampleComponent"],
            _donut_donut_with_marker_toggling_donut_gauge_with_marker_toggling_example_component__WEBPACK_IMPORTED_MODULE_17__["DonutGaugeWithMarkerTogglingExampleComponent"],
            _donut_donut_with_threshold_markers_donut_gauge_with_threshold_markers_example_component__WEBPACK_IMPORTED_MODULE_14__["DonutGaugeWithThresholdMarkersExampleComponent"],
            _donut_donut_with_threshold_toggling_donut_gauge_with_threshold_toggling_example_component__WEBPACK_IMPORTED_MODULE_15__["DonutGaugeWithThresholdTogglingExampleComponent"],
            _linear_vertical_gauge_basic_example_component__WEBPACK_IMPORTED_MODULE_19__["VerticalGaugeBasicExampleComponent"],
            _visual_test_vertical_vertical_gauge_tester_component__WEBPACK_IMPORTED_MODULE_11__["VerticalGaugeTesterComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(exampleRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("AVdE") },
        ],
    })
], ChartDocsGaugeModule);



/***/ })

}]);
//# sourceMappingURL=gauge-chart-docs-gauge-module-es2015.js.map