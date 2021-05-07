(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["waterfall-chart-docs-waterfall-module"],{

/***/ "68rf":
/*!***************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall/chart-docs-waterfall.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ChartDocsWaterfallModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsWaterfallModule", function() { return ChartDocsWaterfallModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "Rr1A");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/demo-common.module */ "s1Ul");
/* harmony import */ var _chart_docs_waterfall_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chart-docs-waterfall.component */ "OLlA");
/* harmony import */ var _waterfall_advanced_charts_waterfall_chart_advanced_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./waterfall-advanced-charts/waterfall-chart-advanced.example.component */ "xYgJ");
/* harmony import */ var _waterfall_chart_simple_waterfall_chart_simple_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waterfall-chart-simple/waterfall-chart-simple.example.component */ "rANy");
/* harmony import */ var _waterfall_test_waterfall_chart_test_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./waterfall-test/waterfall-chart-test.component */ "BDzE");











const collectionRoutes = [
    {
        path: "",
        component: _chart_docs_waterfall_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsWaterfallComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "simple",
        component: _waterfall_chart_simple_waterfall_chart_simple_example_component__WEBPACK_IMPORTED_MODULE_9__["WaterfallChartSimpleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "advanced",
        component: _waterfall_advanced_charts_waterfall_chart_advanced_example_component__WEBPACK_IMPORTED_MODULE_8__["WaterfallChartAdvancedComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "test",
        component: _waterfall_test_waterfall_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["WaterfallChartTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
let ChartDocsWaterfallModule = class ChartDocsWaterfallModule {
};
ChartDocsWaterfallModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _chart_docs_waterfall_component__WEBPACK_IMPORTED_MODULE_7__["ChartDocsWaterfallComponent"],
            _waterfall_chart_simple_waterfall_chart_simple_example_component__WEBPACK_IMPORTED_MODULE_9__["WaterfallChartSimpleComponent"],
            _waterfall_advanced_charts_waterfall_chart_advanced_example_component__WEBPACK_IMPORTED_MODULE_8__["WaterfallChartAdvancedComponent"],
            _waterfall_test_waterfall_chart_test_component__WEBPACK_IMPORTED_MODULE_10__["WaterfallChartTestComponent"],
        ],
        imports: [
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"],
            _common_demo_common_module__WEBPACK_IMPORTED_MODULE_6__["DemoCommonModule"],
            _nova_ui_charts__WEBPACK_IMPORTED_MODULE_5__["NuiChartsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(collectionRoutes),
        ],
        providers: [
            { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"], useFactory: () => __webpack_require__("Gh7m") },
        ],
    })
], ChartDocsWaterfallModule);



/***/ }),

/***/ "BDzE":
/*!*********************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall/waterfall-test/waterfall-chart-test.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: WaterfallChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterfallChartTestComponent", function() { return WaterfallChartTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_waterfall_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./waterfall-chart-test.component.html */ "a/lW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let WaterfallChartTestComponent = class WaterfallChartTestComponent {
};
WaterfallChartTestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "waterfall-chart-test-component",
        template: _raw_loader_waterfall_chart_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], WaterfallChartTestComponent);



/***/ }),

/***/ "Gh7m":
/*!************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./chart-docs-waterfall.component.html": "gRjP",
	"./chart-docs-waterfall.component.ts": "u/6E",
	"./chart-docs-waterfall.module.ts": "hNHc",
	"./waterfall-advanced-charts/waterfall-chart-advanced.example.component.html": "NmR+",
	"./waterfall-advanced-charts/waterfall-chart-advanced.example.component.less": "X7MK",
	"./waterfall-advanced-charts/waterfall-chart-advanced.example.component.ts": "nuLn",
	"./waterfall-chart-simple/waterfall-chart-simple.example.component.html": "Ipb4",
	"./waterfall-chart-simple/waterfall-chart-simple.example.component.ts": "nLao",
	"./waterfall-test/waterfall-chart-test.component.html": "a/lW",
	"./waterfall-test/waterfall-chart-test.component.ts": "4H1E"
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
webpackContext.id = "Gh7m";

/***/ }),

/***/ "OLlA":
/*!******************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall/chart-docs-waterfall.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChartDocsWaterfallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDocsWaterfallComponent", function() { return ChartDocsWaterfallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_docs_waterfall_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-docs-waterfall.component.html */ "gRjP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ChartDocsWaterfallComponent = class ChartDocsWaterfallComponent {
};
ChartDocsWaterfallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-chart-docs-waterfall",
        template: _raw_loader_chart_docs_waterfall_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ChartDocsWaterfallComponent);



/***/ }),

/***/ "Q/L5":
/*!**********************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** draggable items states */\n.nui-dnd-hover-state {\n  background: #f2f2f2;\n}\n.nui-dnd-raised-state {\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.nui-dnd-preview {\n  border: 1px #d9d9d9 solid;\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.nui-dnd-dropzone {\n  /** dropzone states */\n  /** other customziations */\n}\n.nui-dnd-dropzone.nui-dnd-dropzone--active {\n  border: 4px dashed #999 !important;\n}\n.nui-dnd-dropzone.nui-dnd-dropzone--drop-allowed {\n  cursor: move;\n  border: 4px solid #00c4d2 !important;\n  background-color: rgba(0, 196, 210, 0.2);\n}\n.nui-dnd-dropzone.nui-dnd-dropzone--drop-not-allowed {\n  cursor: move;\n  border: 4px solid #dd2c00 !important;\n  background-color: rgba(221, 44, 0, 0.2);\n}\n.nui-dnd-dropzone .centered-overlay,\n.nui-dnd-dropzone .nui-icon-item:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.nui-dnd-dropzone .nui-icon-item:before {\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 40px;\n  width: 40px;\n  z-index: -1;\n}\n.nui-dnd-dropzone .drop-circle-permanent .nui-icon-item:before {\n  background-color: #fff;\n}\n.nui-dnd-dropzone .drop-circle-permanent .nui-icon-item svg polygon {\n  fill: #111;\n}\n.nui-dnd-dropzone .drop-circle-allowed .nui-icon-item:before {\n  background-color: #00c4d2;\n}\n.nui-dnd-dropzone .drop-circle-allowed .nui-icon-item svg polygon {\n  -webkit-clip-path: circle(5px);\n          clip-path: circle(5px);\n  fill: #fff;\n}\n.nui-dnd-dropzone .drop-circle-not-allowed .nui-icon-item:before {\n  background-color: #dd2c00;\n}\n.nui-dnd-dropzone .drop-circle-not-allowed .nui-icon-item svg path {\n  -webkit-clip-path: circle(5px);\n          clip-path: circle(5px);\n  fill: #fff;\n}\n.waterfall-chart-list-item:hover {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n}\n.waterfall-chart-list-item {\n  background-color: var(--nui-color-bg-content,#fff);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGVyZmFsbC1jaGFydC1hZHZhbmNlZC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbWl4aW5zL2RuZC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbWl4aW5zL3ZlbmRvci1wcmVmaXhlcy5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bub3ZhLXVpL2JpdHMvc2RrL2xlc3MvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUNPNUI7RUFDSSxtQkFBQTtBRExKO0FDUUE7RUFDSSxVQUFBO0VBRUEsc0JBQUE7RUFDQSx1RUFBQTtBRFBKO0FDVUE7RUFDSSx5QkFBQTtFQVhBLG1CQUFBO0VBSUEsVUFBQTtFQUVBLHNCQUFBO0VBQ0EsdUVBQUE7QURBSjtBQ1NBO0VEUEUscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1QjtBQ09JO0VBQ0ksa0NBQUE7QURMUjtBQ1FJO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7QUROUjtBQ1FJO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUROUjtBQ1JBOztFQW1CUSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VDMkdFLGdDQUFBO0FGOUdWO0FDUVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FETlo7QUNjZ0I7RUFDSSxzQkFBQTtBRFpwQjtBQ2VvQjtFQUNJLFVBQUE7QURieEI7QUNxQmdCO0VBQ0kseUJBQUE7QURuQnBCO0FDdUJvQjtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxVQUFBO0FEckJ4QjtBQzZCZ0I7RUFDSSx5QkFBQTtBRDNCcEI7QUMrQm9CO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtFQUNBLFVBQUE7QUQ3QnhCO0FBbkVBO0VHRUksa0VBQUE7QUhvRUo7QUFsRUE7RUdGSSxrREFBQTtBSHVFSiIsImZpbGUiOiJ3YXRlcmZhbGwtY2hhcnQtYWR2YW5jZWQuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAbm92YS11aS9iaXRzL3Nkay9sZXNzL251aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQG5vdmEtdWkvYml0cy9zZGsvbGVzcy9taXhpbnNcIjtcblxuLndhdGVyZmFsbC1jaGFydC1saXN0LWl0ZW06aG92ZXIge1xuICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3Itc2VsZWN0ZWQpO1xufVxuXG4ud2F0ZXJmYWxsLWNoYXJ0LWxpc3QtaXRlbSB7XG4gICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1iZy1jb250ZW50KTtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG5AZG5kLWl0ZW0tYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbkBkbmQtem9uZS1ib3JkZXItd2lkdGg6IEBudWktbGluZS1mYXQ7XG5AZG5kLXpvbmUtaWNvbi1zaXplOiA0MHB4O1xuXG4vKiogZHJhZ2dhYmxlIGl0ZW1zIHN0YXRlcyAqL1xuLm51aS1kbmQtaG92ZXItc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudC1ob3Zlcjtcbn1cblxuLm51aS1kbmQtcmFpc2VkLXN0YXRlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1lbGV2YXRlZDtcbn1cblxuLm51aS1kbmQtcHJldmlldyB7XG4gICAgYm9yZGVyOiBAZG5kLWl0ZW0tYm9yZGVyLXdpZHRoIEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG59XG5cbi5udWktZG5kLWRyb3B6b25lIHtcbiAgICAvKiogZHJvcHpvbmUgc3RhdGVzICovXG4gICAgJi5udWktZG5kLWRyb3B6b25lLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggZGFzaGVkIEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93biAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1hbGxvd2VkIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggc29saWQgQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWFjdGl2ZTtcbiAgICB9O1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1ub3QtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlO1xuICAgIH1cblxuICAgIC8qKiBvdGhlciBjdXN0b216aWF0aW9ucyAqL1xuICAgIC5jZW50ZXJlZC1vdmVybGF5LCAubnVpLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIC50cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB3aWR0aDogQGRuZC16b25lLWljb24tc2l6ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQFRPRE8gZml4L3JlbW92ZSB0aGlzIGhhY2tpbmcgc3R5bGUgb25jZSBudWktaWNvbiBnZXRzIHByb3BlciBzdXBwb3J0IGZvciBzaXplLCBiZyBjb2xvciBhbmQgZmlsbCBjb2xvclxuICAgIC5kcm9wLWNpcmNsZXtcbiAgICAgICAgJi1wZXJtYW5lbnQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hbGxvd2VkIHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IEBudWktY29sb3ItaWNvbi1pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1ub3QtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgd2lsbCBiZSByZW1vdmVkIGluIHY0LlxuXG4vLyAtIEFuaW1hdGlvbnNcbi8vIC0gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gLSBCb3ggc2hhZG93XG4vLyAtIEJveCBzaXppbmdcbi8vIC0gQ29udGVudCBjb2x1bW5zXG4vLyAtIEh5cGhlbnNcbi8vIC0gUGxhY2Vob2xkZXIgdGV4dFxuLy8gLSBUcmFuc2Zvcm1hdGlvbnNcbi8vIC0gVHJhbnNpdGlvbnNcbi8vIC0gVXNlciBTZWxlY3RcblxuXG4vLyBBbmltYXRpb25zXG4uYW5pbWF0aW9uKEBhbmltYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IEBhbmltYXRpb247XG4gICAgICAgLW8tYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1uYW1lKEBuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IEBuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbn1cblxuLmFuaW1hdGlvbi1kdXJhdGlvbihAZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IEBkdXJhdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IEBkdXJhdGlvbjtcbn1cblxuLmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRpbWluZy1mdW5jdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1kZWxheShAZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IEBkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IEBkZWxheTtcbn1cblxuLmFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoQGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogQGl0ZXJhdGlvbi1jb3VudDtcbn1cblxuLmFuaW1hdGlvbi1kaXJlY3Rpb24oQGRpcmVjdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogQGRpcmVjdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1maWxsLW1vZGUoQGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogQGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuLmJhY2tmYWNlLXZpc2liaWxpdHkoQHZpc2liaWxpdHkpe1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xuICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xufVxuXG4vLyBCb3ggc2l6aW5nXG4uYm94LXNpemluZyhAYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBAYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6IEBib3htb2RlbDtcbn1cblxuLy8gQ1NTMyBDb250ZW50IENvbHVtbnNcbi5jb250ZW50LWNvbHVtbnMoQGNvbHVtbi1jb3VudDsgQGNvbHVtbi1nYXA6IEBncmlkLWd1dHRlci13aWR0aCkge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAtd2Via2l0LWNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xuICAgICAtbW96LWNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xuICAgICAgICAgIGNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xufVxuXG4vLyBPcHRpb25hbCBoeXBoZW5hdGlvblxuLmh5cGhlbnMoQG1vZGU6IGF1dG8pIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWh5cGhlbnM6IEBtb2RlO1xuICAgICAtbW96LWh5cGhlbnM6IEBtb2RlO1xuICAgICAgLW1zLWh5cGhlbnM6IEBtb2RlOyAvLyBJRTEwK1xuICAgICAgIC1vLWh5cGhlbnM6IEBtb2RlO1xuICAgICAgICAgIGh5cGhlbnM6IEBtb2RlO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG4ucGxhY2Vob2xkZXIoQGNvbG9yOiBAaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIsIEBmb250V2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpIHtcbiAgLy8gRmlyZWZveFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICAgIGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodDtcbiAgfVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC5zZXRDc3NWYXJpYWJsZShjb2xvciwgaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpOyBmb250LXdlaWdodDogQGZvbnRXZWlnaHQgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVHJhbnNmb3JtYXRpb25zXG4uc2NhbGUoQGZhY3Rvcikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbn1cblxuLnNjYWxlKEByYXRpb1g7IEByYXRpb1kpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG59XG5cbi5zY2FsZVgoQHJhdGlvKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xufVxuXG4uc2NhbGVZKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbn1cblxuLnNrZXcoQHg7IEB5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG59XG5cbi50cmFuc2xhdGUoQHg7IEB5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbn1cblxuLnRyYW5zbGF0ZTNkKEB4OyBAeTsgQHopIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQHgsIEB5LCBAeik7XG59XG5cbi5yb3RhdGUoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVYKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbn1cblxuLnJvdGF0ZVkoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xufVxuXG4ucGVyc3BlY3RpdmUoQHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG59XG5cbi5wZXJzcGVjdGl2ZS1vcmlnaW4oQHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG59XG5cbi50cmFuc2Zvcm0tb3JpZ2luKEBvcmlnaW4pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47XG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjsgLy8gSUU5IG9ubHlcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xufVxuXG5cbi8vIFRyYW5zaXRpb25zXG5cbi50cmFuc2l0aW9uKEB0cmFuc2l0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgICAgLW8tdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG59XG5cbi50cmFuc2l0aW9uLXByb3BlcnR5KEB0cmFuc2l0aW9uLXByb3BlcnR5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5cbi50cmFuc2l0aW9uLWRlbGF5KEB0cmFuc2l0aW9uLWRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogQHRyYW5zaXRpb24tZGVsYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogQHRyYW5zaXRpb24tZGVsYXk7XG59XG5cbi50cmFuc2l0aW9uLWR1cmF0aW9uKEB0cmFuc2l0aW9uLWR1cmF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb247XG59XG5cbi50cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbihAdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi50cmFuc2l0aW9uLXRyYW5zZm9ybShAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gQHRyYW5zaXRpb247XG59XG5cblxuLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG4udXNlci1zZWxlY3QoQHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBAc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBAc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBAc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBAc2VsZWN0O1xufVxuIiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iXX0= */");

/***/ }),

/***/ "rANy":
/*!***************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall/waterfall-chart-simple/waterfall-chart-simple.example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: WaterfallChartSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterfallChartSimpleComponent", function() { return WaterfallChartSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_waterfall_chart_simple_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./waterfall-chart-simple.example.component.html */ "Ipb4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/zipObject */ "VJLA");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_4__);





let WaterfallChartSimpleComponent = class WaterfallChartSimpleComponent {
    constructor() {
        // Step 1 - Create a new horizontal bar chart
        this.chartConfig = { horizontal: true };
        this.chart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["Chart"](Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barGrid"])(this.chartConfig));
    }
    ngOnInit() {
        const accessors = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barAccessors"])(this.chartConfig);
        const scales = Object(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["barScales"])(this.chartConfig);
        // Step 1 - Optionally, add interaction highlighting behavior.
        // If highlighting behavior is not desired, the renderer can be instantiated without a 'highlightStrategy' configuration
        // and the InteractionLinePlugin registration can be skipped.
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["BarHighlightStrategy"]("x") });
        this.chart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["InteractionLinePlugin"]());
        // Step 2 - Create a color provider that maps the statuses (or types) of categories to their corresponding colors
        const colorProvider = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["MappedValueProvider"](lodash_zipObject__WEBPACK_IMPORTED_MODULE_4___default()(["connect", "dns", "send", "ttfb", "cdownload"], _nova_ui_charts__WEBPACK_IMPORTED_MODULE_3__["CHART_PALETTE_CS1"]));
        // Step 3 - Adjust the color accessor, to retrieve the color or the bar by the corresponding data type.
        accessors.data.color = (d) => colorProvider.get(d.type);
        // Step 4 - Configure the format of the bottom label by setting custom scales.x.formatter function.
        scales.x.formatters.tick = (value) => `${parseFloat(Number(value / 1000).toFixed(1)).toLocaleString()}s`;
        // Step 5 - Configure the thickness of the bar using the BandScale.padding method on your scales.y.
        scales.y.padding(0.5);
        this.chart.update(getData().map(s => (Object.assign(Object.assign({}, s), { accessors,
            scales,
            renderer }))));
    }
};
WaterfallChartSimpleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "nui-waterfall-chart-simple-example",
        template: _raw_loader_waterfall_chart_simple_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], WaterfallChartSimpleComponent);

/** Chart Data */
function getData() {
    return [
        {
            id: "1",
            name: "Category 1",
            data: [
                {
                    type: "connect",
                    start: 0,
                    end: 22,
                },
                {
                    type: "dns",
                    start: 22,
                    end: 39,
                },
                {
                    type: "send",
                    start: 39,
                    end: 59,
                },
                {
                    type: "ttfb",
                    start: 59,
                    end: 109,
                },
                {
                    type: "cdownload",
                    start: 109,
                    end: 178,
                },
            ],
        }, {
            id: "2",
            name: "Category 2",
            data: [
                {
                    type: "connect",
                    start: 0,
                    end: 22,
                },
                {
                    type: "dns",
                    start: 22,
                    end: 39,
                },
                {
                    type: "send",
                    start: 39,
                    end: 59,
                },
                {
                    type: "ttfb",
                    start: 59,
                    end: 109,
                },
                {
                    type: "cdownload",
                    start: 109,
                    end: 788,
                },
            ],
        },
        {
            id: "3",
            name: "Category 3",
            data: [
                {
                    type: "connect",
                    start: 178,
                    end: 222,
                },
                {
                    type: "dns",
                    start: 222,
                    end: 239,
                },
                {
                    type: "send",
                    start: 239,
                    end: 259,
                },
                {
                    type: "ttfb",
                    start: 259,
                    end: 309,
                },
                {
                    type: "cdownload",
                    start: 309,
                    end: 578,
                },
            ],
        },
        {
            id: "4",
            name: "Category 4",
            data: [
                {
                    type: "connect",
                    start: 578,
                    end: 590,
                },
                {
                    type: "dns",
                    start: 590,
                    end: 799,
                },
                {
                    type: "send",
                    start: 799,
                    end: 888,
                },
                {
                    type: "ttfb",
                    start: 888,
                    end: 900,
                },
                {
                    type: "cdownload",
                    start: 900,
                    end: 990,
                },
            ],
        },
    ];
}


/***/ }),

/***/ "xYgJ":
/*!********************************************************************************************************************************!*\
  !*** ./examples/components/demo/chart-types/waterfall/waterfall-advanced-charts/waterfall-chart-advanced.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: WaterfallChartAdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterfallChartAdvancedComponent", function() { return WaterfallChartAdvancedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_waterfall_chart_advanced_example_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./waterfall-chart-advanced.example.component.html */ "NmR+");
/* harmony import */ var _waterfall_chart_advanced_example_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterfall-chart-advanced.example.component.less */ "Q/L5");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nova-ui/charts */ "gKry");








/**
 * This is here just to test a prototype of angular component, that will use new chart core
 *
 * @ignore
 */
let WaterfallChartAdvancedComponent = class WaterfallChartAdvancedComponent {
    constructor(overlay, overlayPositionBuilder, _viewContainerRef, scrollStrategyOptions) {
        this.overlay = overlay;
        this.overlayPositionBuilder = overlayPositionBuilder;
        this._viewContainerRef = _viewContainerRef;
        this.scrollStrategyOptions = scrollStrategyOptions;
        // Declaring chart config for charts in series
        this.seriesChartConfig = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["BarStatusGridConfig"]({ showBottomAxis: false });
        // Icon and row sizes are used to properly place cdk overlay with grid over the chart
        this.iconSize = 20;
        this.rowSize = 200;
        this.palette = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["ChartPalette"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["MappedValueProvider"]({
            "connect": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["CHART_PALETTE_CS1"][0],
            "dns": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["CHART_PALETTE_CS1"][1],
            "send": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["CHART_PALETTE_CS1"][2],
            "ttfb": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["CHART_PALETTE_CS1"][3],
            "cdownload": _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["CHART_PALETTE_CS1"][4],
        }));
        this.gridChart = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["XYGrid"]());
        this.listItems = getData(this.seriesChartConfig);
    }
    // This listener updates the grid position to follow the chart if client size changes on user interaction with the page.
    // In case client size changes dynamically another solution is needed.
    updateGridPosition() {
        this.overlayRef.updatePosition();
    }
    ngOnInit() {
        this.gridChart.addPlugin(new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["ZoomPlugin"]());
        this.gridChart.getEventBus().getStream(_nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["SET_DOMAIN_EVENT"]).subscribe((event) => {
            const payload = event.data;
            this.listItems.forEach(item => {
                this.scales.x.fixDomain(payload[this.scales.x.id]);
                item.chart.updateDimensions();
            });
        });
    }
    ngAfterViewInit() {
        // Here you configure the template portal and overlay
        this.templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["TemplatePortal"](this.templatePortalGrid, this._viewContainerRef);
        const positions = [
            {
                originX: "start",
                originY: "top",
                overlayX: "start",
                overlayY: "top",
            },
            {
                originX: "start",
                originY: "top",
                overlayX: "start",
                overlayY: "top",
            },
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.gridChartPlaceholder)
            .withPositions(positions)
            .withPush(false);
        this.overlayRef = this.overlay.create({
            positionStrategy: this.positionStrategy,
            scrollStrategy: this.scrollStrategyOptions.reposition(),
        });
        const bandScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["BandScale"]();
        const linearScale = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["LinearScale"]();
        linearScale.fixDomain([0, 1000]);
        bandScale.fixDomain(["cat1"]);
        // Here you handle scales, assign colors via data accessors, and format series
        this.scales = {
            x: linearScale,
            y: bandScale,
        };
        this.scales.x.formatters.tick = (value) => `${Number(value / 1000).toFixed(1)}s`;
        const renderer = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["BarRenderer"]({ highlightStrategy: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["BarHighlightStrategy"]("x") });
        const accessors = new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["HorizontalBarAccessors"]();
        accessors.data.color = (d) => this.palette.standardColors.get(d.type);
        let commonWidth = 0;
        this.listItems.forEach(item => {
            const seriesSet = [
                {
                    id: "series-1",
                    name: "Series 1",
                    data: item.data.map(d => ({
                        value: d.end - d.start,
                        start: d.start,
                        end: d.end,
                        category: "cat1",
                        type: d.type,
                    })),
                    accessors,
                    scales: this.scales,
                    renderer,
                }
            ];
            item.chart.update(seriesSet);
            commonWidth = item.chart.getGrid().config().dimension.width(); // TODO: executed n times
        });
        // Here you configure grid
        const config = this.gridChart.getGrid().config();
        // This handles the automatic resize of the grid depending on the number of series
        // We also use the height defined by BarStatusGridConfig() at the very top for each chart in series.
        config.dimension.height(this.listItems.length * this.seriesChartConfig.dimension.height());
        config.dimension.width(commonWidth);
        config.dimension.autoHeight = false; // We must disable this option to let the grid to properly adjust
        config.axis.left.visible = false;
        config.axis.left.gridTicks = false;
        config.axis.bottom.gridTicks = true;
        this.gridChart.update([
            {
                id: "i am grid",
                name: "i am grid",
                data: [],
                accessors: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["NoopAccessors"](),
                scales: this.scales,
                renderer: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["NoopRenderer"](),
            },
        ]);
        this.gridChart.updateDimensions();
        this.overlayRef.attach(this.templatePortal);
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.listItems, event.previousIndex, event.currentIndex);
    }
};
WaterfallChartAdvancedComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayPositionBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["ScrollStrategyOptions"] }
];
WaterfallChartAdvancedComponent.propDecorators = {
    templatePortalGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ["templatePortalGrid",] }],
    gridChartPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ["gridChartPlaceholder",] }],
    updateGridPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ["document:click",] }]
};
WaterfallChartAdvancedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: "nui-waterfall-chart-advanced-example",
        template: _raw_loader_waterfall_chart_advanced_example_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_waterfall_chart_advanced_example_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayPositionBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["ScrollStrategyOptions"]])
], WaterfallChartAdvancedComponent);

function getData(config) {
    return [
        {
            url: "http://www.google.com",
            size: 924,
            icon: "xml-file",
            chart: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["XYGrid"](config)),
            data: [
                {
                    type: "connect",
                    start: 0,
                    end: 22,
                },
                {
                    type: "dns",
                    start: 22,
                    end: 39,
                },
                {
                    type: "send",
                    start: 39,
                    end: 59,
                },
                {
                    type: "ttfb",
                    start: 59,
                    end: 109,
                },
                {
                    type: "cdownload",
                    start: 109,
                    end: 178,
                },
            ],
        }, {
            url: "http://www2.google.com",
            size: 924,
            icon: "xml-file",
            chart: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["XYGrid"](config)),
            data: [
                {
                    type: "connect",
                    start: 0,
                    end: 22,
                },
                {
                    type: "dns",
                    start: 22,
                    end: 39,
                },
                {
                    type: "send",
                    start: 39,
                    end: 59,
                },
                {
                    type: "ttfb",
                    start: 59,
                    end: 109,
                },
                {
                    type: "cdownload",
                    start: 109,
                    end: 788,
                },
            ],
        },
        {
            url: "http://www.google.com/cat.png",
            size: 3333,
            icon: "image",
            chart: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["XYGrid"](config)),
            data: [
                {
                    type: "connect",
                    start: 178,
                    end: 222,
                },
                {
                    type: "dns",
                    start: 222,
                    end: 239,
                },
                {
                    type: "send",
                    start: 239,
                    end: 259,
                },
                {
                    type: "ttfb",
                    start: 259,
                    end: 309,
                },
                {
                    type: "cdownload",
                    start: 309,
                    end: 578,
                },
            ],
        },
        {
            url: "http://www.google.com/revenge.png",
            size: 3333,
            icon: "image",
            chart: new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["Chart"](new _nova_ui_charts__WEBPACK_IMPORTED_MODULE_7__["XYGrid"](config)),
            data: [
                {
                    type: "connect",
                    start: 578,
                    end: 590,
                },
                {
                    type: "dns",
                    start: 590,
                    end: 799,
                },
                {
                    type: "send",
                    start: 799,
                    end: 888,
                },
                {
                    type: "ttfb",
                    start: 888,
                    end: 900,
                },
                {
                    type: "cdownload",
                    start: 900,
                    end: 990,
                },
            ],
        },
    ];
}


/***/ })

}]);
//# sourceMappingURL=waterfall-chart-docs-waterfall-module-es2015.js.map