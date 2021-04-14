(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gauge-gauge-prototypes-module"],{

/***/ "8yQX":
/*!**************************************************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/horizontal/linear-gauge-horizontal-prototype.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LinearGaugeHorizontalPrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGaugeHorizontalPrototypeComponent", function() { return LinearGaugeHorizontalPrototypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_linear_gauge_horizontal_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./linear-gauge-horizontal-prototype.component.html */ "X9ap");
/* harmony import */ var _linear_gauge_horizontal_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear-gauge-horizontal-prototype.component.less */ "IS5b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let LinearGaugeHorizontalPrototypeComponent = class LinearGaugeHorizontalPrototypeComponent {
    constructor() {
        this.flipLabels = false;
    }
    ngOnChanges(changes) {
        if ((changes.thickness && !changes.thickness.firstChange) || (changes.flipLabels && !changes.flipLabels.firstChange)) {
            const gridConfig = this.chartAssist.chart.getGrid().config();
            if (changes.thickness) {
                gridConfig.dimension.height(this.thickness);
            }
            if (changes.flipLabels) {
                this.labelsPlugin.config.flipLabels = this.flipLabels;
                // reset the margins to accommodate the label direction change
                gridConfig.dimension.margin = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                };
            }
            this.chartAssist.chart.updateDimensions();
        }
        if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
            this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
        }
    }
    ngOnInit() {
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal, this.thickness));
        const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
        this.labelsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearGaugeLabelsPlugin"]({ flipLabels: this.flipLabels });
        this.chartAssist.chart.addPlugin(this.labelsPlugin);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Horizontal);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].setThresholdLabelFormatter((d) => `${d}ms`, this.seriesSet);
        this.chartAssist.update(this.seriesSet);
    }
};
LinearGaugeHorizontalPrototypeComponent.propDecorators = {
    thickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    gaugeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    flipLabels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
LinearGaugeHorizontalPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "linear-gauge-horizontal-prototype",
        template: _raw_loader_linear_gauge_horizontal_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linear_gauge_horizontal_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LinearGaugeHorizontalPrototypeComponent);



/***/ }),

/***/ "AHBK":
/*!***********************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/gauge-test-page.component.less ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".testing-region {\n  height: 500px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhdWdlLXRlc3QtcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJnYXVnZS10ZXN0LXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdGluZy1yZWdpb24ge1xuICAgIGhlaWdodDogNTAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "GwJp":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/gauge-test-page.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<charts-test-harness>\n    <div class=\"testing-region d-flex align-items-center justify-content-around\">\n        <donut-gauge-prototype [gaugeConfig]=\"gaugeConfig\" [size]=\"donutSize\" [annularGrowth]=\"annularGrowth\" [annularWidth]=\"thickness\"></donut-gauge-prototype>\n        <linear-gauge-vertical-prototype [gaugeConfig]=\"gaugeConfig\" [thickness]=\"thickness\" [flipLabels]=\"flipLabels\"></linear-gauge-vertical-prototype>\n        <linear-gauge-horizontal-prototype [gaugeConfig]=\"gaugeConfig\" [thickness]=\"thickness\" [flipLabels]=\"flipLabels\"></linear-gauge-horizontal-prototype>\n    </div>\n\n    <div class=\"mb-2\">\n        <label for=\"valueInput\">\n            Value\n        </label>\n        <br />\n        <nui-textbox-number type=\"number\"\n                            [ngModel]=\"value\"\n                            (ngModelChange)=\"onValueChange($event)\"\n                            [minValue]=\"0\"\n                            [maxValue]=\"maxValue\"\n                            customBoxWidth=\"75px\"\n                            name=\"valueInput\"></nui-textbox-number>\n    </div>\n    <div class=\"mb-2\">\n        <label for=\"thicknessInput\">\n            Thickness\n        </label>\n        <br />\n        <nui-textbox-number type=\"number\"\n                            [(ngModel)]=\"thickness\"\n                            [minValue]=\"0\"\n                            customBoxWidth=\"75px\"\n                            name=\"thicknessInput\"></nui-textbox-number>\n    </div>\n    <div class=\"mb-2\">\n        <nui-form-field caption=\"Donut Annular Growth\"\n                        hint=\"Set to zero to have the donut obey the manual thickness setting\"\n                        [showOptionalText]=\"false\">\n            <nui-textbox-number type=\"number\"\n                                [(ngModel)]=\"annularGrowth\"\n                                [minValue]=\"0\"\n                                [step]=\"0.01\"\n                                customBoxWidth=\"75px\"></nui-textbox-number>\n        </nui-form-field>\n    </div>\n    <div class=\"mb-2\">\n        <label for=\"donutSizeInput\">\n            Donut Size\n        </label>\n        <br />\n        <nui-textbox-number type=\"number\"\n                            [(ngModel)]=\"donutSize\"\n                            [minValue]=\"0\"\n                            [step]=\"25\"\n                            customBoxWidth=\"75px\"\n                            name=\"donutSizeInput\"></nui-textbox-number>\n    </div>\n</charts-test-harness>\n<div class=\"ml-3\">\n    <div class=\"d-flex align-items-center\">\n        <input id=\"reversed\"\n               class=\"mb-2\"\n               type=\"checkbox\"\n               [ngModel]=\"reversed\"\n               (ngModelChange)=\"onReverseChange($event)\" />\n        <label class=\"px-3\" for=\"reversed\">Reversed</label>\n    </div>\n</div>\n<div class=\"ml-3\">\n    <div class=\"d-flex align-items-center\">\n        <input id=\"flip-labels\"\n               class=\"mb-2\"\n               type=\"checkbox\"\n               [(ngModel)]=\"flipLabels\" />\n        <label class=\"px-3\" for=\"flip-labels\">Flip Labels</label>\n    </div>\n</div>\n");

/***/ }),

/***/ "IS5b":
/*!****************************************************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/horizontal/linear-gauge-horizontal-prototype.component.less ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n  width: 225px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVhci1nYXVnZS1ob3Jpem9udGFsLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJsaW5lYXItZ2F1Z2UtaG9yaXpvbnRhbC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG4uY2hhcnQge1xuICAgIHdpZHRoOiAyMjVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "JiQA":
/*!*********************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/gauge-test-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GaugeTestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeTestPageComponent", function() { return GaugeTestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_gauge_test_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./gauge-test-page.component.html */ "GwJp");
/* harmony import */ var _gauge_test_page_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gauge-test-page.component.less */ "AHBK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let GaugeTestPageComponent = class GaugeTestPageComponent {
    constructor() {
        this.value = 95;
        this.maxValue = 200;
        this.annularGrowth = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RADIAL_RENDERER_CONFIG"].annularGrowth;
        this.thickness = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["StandardLinearGaugeThickness"].Large;
        this.donutSize = 200;
        this.thresholds = [100, 150];
        this.reversed = false;
        this.flipLabels = false;
        // this.thresholds = new Array(200).fill(null).map((e, i) => i);
        // this.thresholds = [50, 75, 100, 125, 150, 175, 200];
        this.reversedValueColorAccessor = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].createReversedColorAccessor(this.thresholds);
        this.gaugeConfig = this.getGaugeConfig();
    }
    onReverseChange(reversed) {
        this.reversed = reversed;
        this.gaugeConfig = this.getGaugeConfig();
    }
    onValueChange(value) {
        this.value = value;
        this.gaugeConfig = this.getGaugeConfig();
    }
    getGaugeConfig() {
        return {
            value: this.value,
            max: this.maxValue,
            thresholds: this.thresholds,
            valueColorAccessor: this.reversed ? this.reversedValueColorAccessor : undefined,
            enableThresholdMarkers: true,
        };
    }
};
GaugeTestPageComponent.ctorParameters = () => [];
GaugeTestPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "gauge-test-page",
        template: _raw_loader_gauge_test_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gauge_test_page_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], GaugeTestPageComponent);



/***/ }),

/***/ "Q1Xi":
/*!************************************************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/vertical/linear-gauge-vertical-prototype.component.less ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chart {\n  height: 225px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmVhci1nYXVnZS12ZXJ0aWNhbC1wcm90b3R5cGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FBREoiLCJmaWxlIjoibGluZWFyLWdhdWdlLXZlcnRpY2FsLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5cbi5jaGFydCB7XG4gICAgaGVpZ2h0OiAyMjVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "X9ap":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/horizontal/linear-gauge-horizontal-prototype.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n");

/***/ }),

/***/ "dVq8":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/donut/donut-gauge-prototype.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n\n    <nui-chart-donut-content style=\"position: absolute;\"\n                             [plugin]=\"contentPlugin\">\n        <div class=\"h-100 w-100 d-flex flex-column justify-content-center align-items-center text-center\">\n            <div class=\"d-inline-block\" nuiZoomContent [zoomRatio]=\"0.65\">\n                {{gaugeConfig.value | number:'1.0-0'}}\n            </div>\n            <div class=\"content-label\">Network Latency</div>\n            <div class=\"content-label\">(ms)</div>\n        </div>\n    </nui-chart-donut-content>\n</div>\n");

/***/ }),

/***/ "g1SA":
/*!*********************************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/donut/donut-gauge-prototype.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DonutGaugePrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutGaugePrototypeComponent", function() { return DonutGaugePrototypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_donut_gauge_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./donut-gauge-prototype.component.html */ "dVq8");
/* harmony import */ var _donut_gauge_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donut-gauge-prototype.component.less */ "odU6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let DonutGaugePrototypeComponent = class DonutGaugePrototypeComponent {
    ngOnChanges(changes) {
        if ((changes.size && !changes.size.firstChange) ||
            (changes.annularWidth && !changes.annularWidth.firstChange) ||
            (changes.annularGrowth && !changes.annularGrowth.firstChange)) {
            this.updateDonutSize();
            this.updateAnnularAttributes();
            this.chartAssist.chart.updateDimensions();
        }
        if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
            this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
        }
    }
    ngOnInit() {
        const grid = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radialGrid"])();
        grid.config().dimension.autoHeight = false;
        grid.config().dimension.autoWidth = false;
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid), _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["radial"]);
        this.contentPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartDonutContentPlugin"]();
        this.chartAssist.chart.addPlugin(this.contentPlugin);
        const labelConfig = {
            clearance: { top: 40, right: 40, bottom: 40, left: 40 },
        };
        this.chartAssist.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["DonutGaugeLabelsPlugin"](labelConfig));
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Donut);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].setThresholdLabelFormatter((d) => `${d}ms`, this.seriesSet);
        this.updateDonutSize();
        this.updateAnnularAttributes();
        this.chartAssist.update(this.seriesSet);
    }
    updateDonutSize() {
        const gridDimensions = this.chartAssist.chart.getGrid().config().dimension;
        gridDimensions.height(this.size);
        gridDimensions.width(this.size);
    }
    updateAnnularAttributes() {
        this.seriesSet.forEach(series => {
            const rendererConfig = series.renderer.config;
            // increase the max thickness from 30 for testing purposes
            rendererConfig.maxThickness = 200;
            rendererConfig.annularGrowth = this.annularGrowth;
            rendererConfig.annularWidth = this.annularWidth;
        });
    }
};
DonutGaugePrototypeComponent.propDecorators = {
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    annularGrowth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    annularWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    gaugeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DonutGaugePrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "donut-gauge-prototype",
        template: _raw_loader_donut_gauge_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_donut_gauge_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DonutGaugePrototypeComponent);



/***/ }),

/***/ "hyeb":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/development/gauge/vertical/linear-gauge-vertical-prototype.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n    <nui-chart class=\"chart d-block\" [chart]=\"chartAssist.chart\"></nui-chart>\n</div>\n");

/***/ }),

/***/ "iGZy":
/*!*******************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/gauge-prototypes.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GaugePrototypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugePrototypesModule", function() { return GaugePrototypesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _donut_donut_gauge_prototype_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donut/donut-gauge-prototype.component */ "g1SA");
/* harmony import */ var _gauge_test_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gauge-test-page.component */ "JiQA");
/* harmony import */ var _horizontal_linear_gauge_horizontal_prototype_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./horizontal/linear-gauge-horizontal-prototype.component */ "8yQX");
/* harmony import */ var _vertical_linear_gauge_vertical_prototype_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vertical/linear-gauge-vertical-prototype.component */ "m76+");











const routes = [
    {
        path: "",
        component: _gauge_test_page_component__WEBPACK_IMPORTED_MODULE_8__["GaugeTestPageComponent"],
        data: {
            srlc: {
                hideIndicator: true,
            },
        },
    },
];
let GaugePrototypesModule = class GaugePrototypesModule {
};
GaugePrototypesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _horizontal_linear_gauge_horizontal_prototype_component__WEBPACK_IMPORTED_MODULE_9__["LinearGaugeHorizontalPrototypeComponent"],
            _vertical_linear_gauge_vertical_prototype_component__WEBPACK_IMPORTED_MODULE_10__["LinearGaugeVerticalPrototypeComponent"],
            _donut_donut_gauge_prototype_component__WEBPACK_IMPORTED_MODULE_7__["DonutGaugePrototypeComponent"],
            _gauge_test_page_component__WEBPACK_IMPORTED_MODULE_8__["GaugeTestPageComponent"],
        ],
        imports: [
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"],
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ],
    })
], GaugePrototypesModule);



/***/ }),

/***/ "m76+":
/*!**********************************************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/vertical/linear-gauge-vertical-prototype.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LinearGaugeVerticalPrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearGaugeVerticalPrototypeComponent", function() { return LinearGaugeVerticalPrototypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_linear_gauge_vertical_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./linear-gauge-vertical-prototype.component.html */ "hyeb");
/* harmony import */ var _linear_gauge_vertical_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear-gauge-vertical-prototype.component.less */ "Q1Xi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");





let LinearGaugeVerticalPrototypeComponent = class LinearGaugeVerticalPrototypeComponent {
    constructor() {
        this.flipLabels = false;
    }
    ngOnChanges(changes) {
        if ((changes.thickness && !changes.thickness.firstChange) || (changes.flipLabels && !changes.flipLabels.firstChange)) {
            const gridConfig = this.chartAssist.chart.getGrid().config();
            if (changes.thickness) {
                gridConfig.dimension.width(this.thickness);
            }
            if (changes.flipLabels) {
                this.labelsPlugin.config.flipLabels = this.flipLabels;
                // reset the margins to accommodate the label direction change
                gridConfig.dimension.margin = {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                };
            }
            this.chartAssist.chart.updateDimensions();
        }
        if (changes.gaugeConfig && !changes.gaugeConfig.firstChange) {
            this.chartAssist.update(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].updateSeriesSet(this.seriesSet, this.gaugeConfig));
        }
    }
    ngOnInit() {
        const grid = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["XYGrid"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["linearGaugeGridConfig"])(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical, this.thickness));
        const chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["Chart"](grid);
        this.chartAssist = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["ChartAssist"](chart, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["stack"]);
        const labelConfig = {
            flipLabels: this.flipLabels,
            // extra clearance for the longer labels generated by the formatter
            clearance: {
                top: 0,
                right: 40,
                bottom: 0,
                left: 40,
            },
        };
        this.labelsPlugin = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["LinearGaugeLabelsPlugin"](labelConfig);
        this.chartAssist.chart.addPlugin(this.labelsPlugin);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].assembleSeriesSet(this.gaugeConfig, _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeMode"].Vertical);
        this.seriesSet = _nova_ui_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeUtil"].setThresholdLabelFormatter((d) => `${d}ms`, this.seriesSet);
        this.chartAssist.update(this.seriesSet);
    }
};
LinearGaugeVerticalPrototypeComponent.propDecorators = {
    thickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    gaugeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    flipLabels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
LinearGaugeVerticalPrototypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "linear-gauge-vertical-prototype",
        template: _raw_loader_linear_gauge_vertical_prototype_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_linear_gauge_vertical_prototype_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LinearGaugeVerticalPrototypeComponent);



/***/ }),

/***/ "odU6":
/*!***********************************************************************************************!*\
  !*** ./examples/components/demo/development/gauge/donut/donut-gauge-prototype.component.less ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-label {\n  line-height: 14px;\n  font-size: 11px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--nui-color-text-secondary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbnV0LWdhdWdlLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtBQURKIiwiZmlsZSI6ImRvbnV0LWdhdWdlLXByb3RvdHlwZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5cbi5jb250ZW50LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1udWktY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=gauge-gauge-prototypes-module-es2015.js.map