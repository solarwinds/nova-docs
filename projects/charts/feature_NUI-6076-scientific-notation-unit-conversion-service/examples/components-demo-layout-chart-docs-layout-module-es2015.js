(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-demo-layout-chart-docs-layout-module"],{

/***/ "2v69":
/*!************************************************************************!*\
  !*** ./examples/components/demo/layout/chart-docs-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: ChartDocsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsLayoutComponent", function() { return ChartDocsLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-layout.component.html */ "OLwk");
/* harmony import */ var _chart_docs_layout_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-docs-layout.component.less */ "LTDF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ChartDocsLayoutComponent = class ChartDocsLayoutComponent {
    constructor() {
        this.hasLegend = true;
        this.hasLegendBottom = true;
        this.hasAxisLabelLeft = true;
        this.hasAxisLabelRight = true;
        this.hasAxisLabelBottom = true;
        this.intro = `
    <div class="nui-chart-layout">
        <div class="chart">Chart</div>
    `;
        this.outro = `</div>`;
        this.overlay = `<div class="nui-chart-layout">
    <div class="chart has-overlay">
        ...
        <div class="overlay"> ... </div>
    </div>
</div>`;
    }
    getCodeLine(className, text) {
        return `<div class="${className}">${text}</div>`;
    }
};
ChartDocsLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "nui-chart-docs-layout",
        template: _raw_loader_chart_docs_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_docs_layout_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChartDocsLayoutComponent);



/***/ }),

/***/ "Kks0":
/*!*********************************************************************!*\
  !*** ./examples/components/demo/layout/chart-docs-layout.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChartDocsLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsLayoutModule", function() { return ChartDocsLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/demo-common.module */ "s1Ul");
/* harmony import */ var _chart_docs_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart-docs-layout.component */ "2v69");






const exampleRoutes = [
    {
        path: "",
        component: _chart_docs_layout_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsLayoutComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SrlcStage"].beta,
            },
        },
    },
];
let ChartDocsLayoutModule = class ChartDocsLayoutModule {
};
ChartDocsLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chart_docs_layout_component__WEBPACK_IMPORTED_MODULE_5__["ChartDocsLayoutComponent"],
        ],
        imports: [
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_4__["DemoCommonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiSwitchModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(exampleRoutes),
        ],
    })
], ChartDocsLayoutModule);



/***/ }),

/***/ "LTDF":
/*!**************************************************************************!*\
  !*** ./examples/components/demo/layout/chart-docs-layout.component.less ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".highlight-areas {\n  border: 1px grey solid;\n}\n.highlight-areas > div {\n  border: 1px lightgrey solid;\n  padding: 10px;\n  background-color: ghostwhite;\n}\n.turned-off {\n  opacity: 0.2;\n}\n.code-line {\n  background: var(--nui-color-bg-mid_dark,#333);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LWRvY3MtbGF5b3V0LmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHNCQUFBO0FBRko7QUFJSTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBRlI7QUFNQTtFQUNJLFlBQUE7QUFKSjtBQU9BO0VDWkksNkNBQUE7QURRSiIsImZpbGUiOiJjaGFydC1kb2NzLWxheW91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9taXhpbnMubGVzc1wiO1xuXG4uaGlnaGxpZ2h0LWFyZWFzIHtcbiAgICBib3JkZXI6IDFweCBncmV5IHNvbGlkO1xuXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIGJvcmRlcjogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogQG51aS1zcGFjZS1zbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcbiAgICB9XG59XG5cbi50dXJuZWQtb2ZmIHtcbiAgICBvcGFjaXR5OiAuMjtcbn1cblxuLmNvZGUtbGluZSB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQsIG51aS1jb2xvci1iZy1taWRfZGFyayk7XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "OLwk":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./examples/components/demo/layout/chart-docs-layout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Charts Layout</h1>\n\n<h2>Before We Start</h2>\n<p>\n    You probably know we are not building large hero components any more. They turned out to be hard to extend and update,\n    and it was problematic to maintain them in general. So our new trend word is <code>DECOMPOSITION</code>.\n</p>\n<p>\n    Now, you will have a full access to every part of a complex component. It will give you all the power to\n    lay them out and set them up in a way that works best for you.\n    It also decreases the risk of breaking super-components when we need to change something on a low level.\n</p>\n<p>\n    And, a bright example of our decomposition strategy is the Nova charting framework, which we are happy to introduce.\n</p>\n\n<h2>OMG! Do I Need To Do All the Layouts MYSELF?!?!?</h2>\n<p>\n    Don't panic!\n</p>\n<p>\n    We realize that putting it all together can be a nightmare for you, so we try to do our best to help you with this.\n</p>\n<h2>Helper Classes</h2>\n<p>\n    The chart layout is supposed to be very common and will include the chart itself and other optional elements--like\n    axis labels for left, right or bottom axis. You can also have the legend located to the right or below the chart.\n    Or, maybe a chart without a legend at all?\n</p>\n<p>\n    All you need to do is wrap all your chart stuff into a <code>nui-chart-layout</code> classed element.\n    Then, mark your separate pieces with the right classes to make them appear in the right spot.\n    Here are the class names you can use:\n</p>\n<ul>\n    <li>- <code>chart</code></li>\n    <li>- <code>legend</code></li>\n    <li>- <code>legend-bottom</code></li>\n    <li>- <code>axis-label-left</code></li>\n    <li>- <code>axis-label-right</code></li>\n    <li>- <code>axis-label-bottom</code></li>\n</ul>\n<p>\n    Easy! Isn't it?\n</p>\n<p>\n    Especially when the order of the elements doesn't matter as long as they are wrapped by an element with the <code>nui-chart-layout</code> css class.\n</p>\n<p>\n    And here is how it's going to look:\n</p>\n<div class=\"nui-chart-layout highlight-areas m-5\">\n    <div class=\"chart\"><strong>Chart</strong></div>\n    <div class=\"legend\" *ngIf=\"hasLegend\"><strong>Legend</strong></div>\n    <div class=\"legend-bottom\" *ngIf=\"hasLegendBottom\"><strong>Bottom legend</strong></div>\n    <div class=\"axis-label-left\" *ngIf=\"hasAxisLabelLeft\"><strong>Left axis label</strong></div>\n    <div class=\"axis-label-right\" *ngIf=\"hasAxisLabelRight\"><strong>Right axis label</strong></div>\n    <div class=\"axis-label-bottom\" *ngIf=\"hasAxisLabelBottom\"><strong>Bottom axis label</strong></div>\n</div>\n<nui-example-code language=\"html\">{{ intro }}</nui-example-code>\n<div class=\"d-flex align-items-center code-line px-3\">\n    <nui-switch [(value)]=\"hasLegend\"></nui-switch>\n    <nui-example-code language=\"html\" [ngClass]=\"{ 'turned-off': !hasLegend }\">\n        {{ getCodeLine(\"legend\", \"Legend\") }}\n    </nui-example-code>\n</div>\n<div class=\"d-flex align-items-center code-line px-3\">\n    <nui-switch [(value)]=\"hasLegendBottom\"></nui-switch>\n    <nui-example-code language=\"html\" [ngClass]=\"{ 'turned-off': !hasLegendBottom }\">\n        {{ getCodeLine(\"legend-bottom\", \"Bottom legend\") }}\n    </nui-example-code>\n</div>\n<div class=\"d-flex align-items-center code-line px-3\">\n    <nui-switch [(value)]=\"hasAxisLabelLeft\"></nui-switch>\n    <nui-example-code language=\"html\" [ngClass]=\"{ 'turned-off': !hasAxisLabelLeft }\">\n        {{ getCodeLine(\"axis-label-left\", \"Left axis label\") }}\n    </nui-example-code>\n</div>\n<div class=\"d-flex align-items-center code-line px-3\">\n    <nui-switch [(value)]=\"hasAxisLabelRight\"></nui-switch>\n    <nui-example-code language=\"html\" [ngClass]=\"{ 'turned-off': !hasAxisLabelRight }\">\n        {{ getCodeLine(\"axis-label-right\", \"Right axis label\") }}\n    </nui-example-code>\n</div>\n<div class=\"d-flex align-items-center code-line px-3\">\n    <nui-switch [(value)]=\"hasAxisLabelBottom\"></nui-switch>\n    <nui-example-code language=\"html\" [ngClass]=\"{ 'turned-off': !hasAxisLabelBottom }\">\n        {{ getCodeLine(\"axis-label-bottom\", \"Bottom axis label\") }}\n    </nui-example-code>\n</div>\n<nui-example-code language=\"html\">{{ outro }}</nui-example-code>\n\n<h2>Extensions</h2>\n\n<h3>Chart Overlay</h3>\n<p>\n    Sometimes it can be useful to have an overlay over the chart area that's perfectly centered with the\n    chart. This can be seen in the\n    <code><a href=\"../additional-documentation/chart-types/pie-and-donut\">Donut Chart</a></code> example\n    that shows content nested inside the donut.\n</p>\n<p>\n    To achieve this, consider decorating the <code>chart</code> element with the <code>has-overlay</code>\n    class and use the <code>overlay</code> class on the child element containing the overlay content.\n</p>\n<p>It should look like this:</p>\n<pre>{{ overlay }}</pre>\n");

/***/ })

}]);
//# sourceMappingURL=components-demo-layout-chart-docs-layout-module-es2015.js.map