(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-common-common-module"],{

/***/ "+SKk":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-color-black/badge-color-black.component.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    position: relative;\n    height: 30px;\n    width: 50px;\n    border: 1px solid #3c3c3c;\n}\n");

/***/ }),

/***/ "+XaK":
/*!*********************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DepreacatedDataSourceClientSideFilteringExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideFilteringExampleComponent", function() { return DepreacatedDataSourceClientSideFilteringExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "E+oP");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/panel/panel.component */ "Xk8b");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/expander/expander.component */ "j4OC");
/* harmony import */ var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/lib/checkbox/checkbox-group.component */ "s1l0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../src/lib/sorter/sorter.component */ "3WNR");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");
/* harmony import */ var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../src/lib/image/image.component */ "Qd0N");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
















const _c0 = ["filteringSearch"];
const _c1 = ["filteringSorter"];
const _c2 = ["filteringRepeat"];
const _c3 = ["filteringPaginator"];
function DepreacatedDataSourceClientSideFilteringExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r10.color, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.status);
} }
function DepreacatedDataSourceClientSideFilteringExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nui-image", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No data to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isWatermark", true);
} }
function DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_11_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r13.showStatus(status_r11));
} }
function DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_11_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", status_r11)("checked", ctx_r4.isColorTypeChecked(status_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r4.statusIcons[status_r11].iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](status_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.isGreaterThanZero(ctx_r4.showStatus(status_r11)));
} }
function DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_14_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.showColor(color_r15));
} }
function DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nui-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_14_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", color_r15)("checked", ctx_r5.isColorCriteriaChecked(color_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r5.colorIcons[color_r15].iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](color_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isGreaterThanZero(ctx_r5.showColor(color_r15)));
} }
function DepreacatedDataSourceClientSideFilteringExampleComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nui-repeat", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx_r8.filteringState == null ? null : ctx_r8.filteringState.repeat == null ? null : ctx_r8.filteringState.repeat.itemsSource)("repeatItemTemplateRef", _r0);
} }
const RANDOM_ARRAY = [
    { color: "regular-blue", status: "Critical" },
    { color: "regular-green", status: "Warning" },
    { color: "regular-yellow", status: "Up" },
    { color: "regular-cyan ", status: "Critical" },
    { color: "regular-magenta", status: "Warning" },
    { color: "regular-black", status: "Up" },
    { color: "regular-orange", status: "Up" },
    { color: "regular-rose", status: "Up" },
    { color: "regular-violet", status: "Up" },
    { color: "regular-azure", status: "Critical" },
    { color: "dark-blue", status: "Warning" },
    { color: "dark-green", status: "Up" },
    { color: "dark-yellow", status: "Critical" },
    { color: "dark-cyan ", status: "Warning" },
    { color: "dark-magenta", status: "Up" },
    { color: "dark-black", status: "Critical" },
    { color: "dark-orange", status: "Warning" },
    { color: "dark-rose", status: "Up" },
    { color: "dark-violet", status: "Critical" },
    { color: "dark-azure", status: "Warning" },
    { color: "light-blue", status: "Up" },
    { color: "light-green", status: "Critical" },
    { color: "light-yellow", status: "Warning" },
    { color: "light-cyan", status: "Up" },
    { color: "light-magenta", status: "Critical" },
    { color: "light-black", status: "Warning" },
    { color: "light-orange", status: "Up" },
    { color: "light-rose", status: "Critical" },
    { color: "light-violet", status: "Warning" },
    { color: "light-azure", status: "Up" },
];
/**
 * TODO: Remove in  - NUI-5835
 * @deprecated
 */
class DepreacatedDataSourceClientSideFilteringExampleComponent {
    constructor(dataSourceService) {
        this.dataSourceService = dataSourceService;
        this.panelOptions = {
            panelMode: "collapsible",
            heading: "Filters",
        };
        this.colorExpanderOptions = {
            expanded: true,
            header: "Colors",
        };
        this.statusExpanderOptions = {
            expanded: true,
            header: "Statuses",
        };
        this.statusIcons = {
            "Critical": { iconName: "status_critical" },
            "Warning": { iconName: "status_warning" },
            "Up": { iconName: "status_up" },
        };
        this.colorIcons = {
            "azure": { iconName: "record" },
            "black": { iconName: "status_up" },
            "blue": { iconName: "signal-0" },
            "cyan": { iconName: "signal-0" },
            "green": { iconName: "signal-1" },
            "orange": { iconName: "signal-2" },
            "rose": { iconName: "signal-0" },
            "violet": { iconName: "signal-0" },
            "yellow": { iconName: "signal-0" },
            "brown": { iconName: "signal-0" },
        };
        this.allStatuses = [
            "Warning",
            "Critical",
            "Up",
        ];
        this.allColors = [
            "azure",
            "black",
            "blue",
            "cyan",
            "green",
            "orange",
            "rose",
            "violet",
            "yellow",
            "brown",
        ];
        this.selectedColorTypes = [
            "Up",
        ];
        this.selectedCriteriaColors = [
            "azure",
        ];
        this.sorterItems = [
            {
                title: $localize `Color`,
                value: "color",
            },
        ];
        this.initialSortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SorterDirection"].ascending;
        this.sortBy = this.sorterItems[0].value;
        // By convention this is the object that will contain results of filtering, it should contain the same keys as registered components
        // We're using this object to bind to template items/paginator/filtering data
        this.filteringState = {
            repeat: {
                itemsSource: [],
            },
            color: [],
            status: [],
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        this.page = 1;
        this.searchTerm = "";
        this.chosenColors = [];
        this.chosenStatuses = [];
        this.registerComponents = () => ({
            // Here we're registering color and status filters
            color: {
                componentInstance: {
                    getFilters: () => ({
                        type: "string[]",
                        value: this.chosenColors,
                        metadata: {
                            allCategories: this.allColors,
                        },
                    }),
                },
            },
            status: {
                componentInstance: {
                    getFilters: () => ({
                        type: "string[]",
                        value: this.chosenStatuses,
                        metadata: {
                            allCategories: this.allStatuses,
                        },
                    }),
                },
            },
            search: {
                componentInstance: this.filteringSearch,
            },
            sorter: {
                componentInstance: this.filteringSorter,
            },
            paginator: {
                componentInstance: this.filteringPaginator,
            },
        });
        this.dataSourceService.setData(RANDOM_ARRAY);
    }
    ngAfterViewInit() {
        this.chosenColors = [...this.selectedCriteriaColors];
        this.chosenStatuses = [...this.selectedColorTypes];
        this.dataSourceService.registerComponent(Object.assign({}, this.registerComponents()));
        this.dataSourceService.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            this.filteringState = data;
            if (data && data.paginator && data.paginator.reset) {
                // This allows to go back to first page after filtering/search/sorting has changed
                this.filteringPaginator.goToPage(1);
            }
        });
    }
    ngOnDestroy() {
        if (this.outputsSubscription) {
            this.outputsSubscription.unsubscribe();
        }
    }
    applyFilters() {
        this.dataSourceService.applyFilters();
    }
    onSorterAction(changes) {
        this.sortBy = changes.newValue.sortBy;
        this.dataSourceService.applyFilters();
    }
    onSelectedCriteriaChange($event) {
        this.chosenColors = $event;
        this.dataSourceService.applyFilters();
    }
    onSelectedColorTypesChange($event) {
        this.chosenStatuses = $event;
        this.dataSourceService.applyFilters();
    }
    isColorCriteriaChecked(color) {
        return this.selectedCriteriaColors.indexOf(color) > -1;
    }
    isColorTypeChecked(status) {
        return this.selectedColorTypes.indexOf(status) > -1;
    }
    hasItems() {
        return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this, "filteringState.repeat.itemsSource"));
    }
    showStatus(status) {
        return this.filteringState.status ? this.filteringState.status[status] : this.filteringState.status;
    }
    showColor(color) {
        return this.filteringState.color ? this.filteringState.color[color] : this.filteringState.color;
    }
    isGreaterThanZero(amount) {
        return amount > 0;
    }
}
DepreacatedDataSourceClientSideFilteringExampleComponent.ɵfac = function DepreacatedDataSourceClientSideFilteringExampleComponent_Factory(t) { return new (t || DepreacatedDataSourceClientSideFilteringExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["DataSourceService"])); };
DepreacatedDataSourceClientSideFilteringExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DepreacatedDataSourceClientSideFilteringExampleComponent, selectors: [["nui-deprecated-client-side-filtering-data-source-example"]], viewQuery: function DepreacatedDataSourceClientSideFilteringExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filteringSorter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filteringRepeat = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
                provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["DataSourceService"],
                useClass: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["LocalFilteringDataSource"],
            }])], decls: 27, vars: 20, consts: [["listRepeatItemTemplate", ""], ["emptyListTemplate", ""], ["id", "collapsible-panel", 3, "panelMode"], ["nuiPanelEmbeddedHeading", ""], ["nuiPanelEmbeddedBody", ""], ["icon", "orion-sitemaster", 1, "mb-5", 3, "open", "header"], ["id", "nui-demo-checkbox-group-basic", "name", "cType", 3, "values", "valuesChange"], [3, "value", "checked", 4, "ngFor", "ngForOf"], ["id", "nui-demo-checkbox-group-basic", "name", "criteriaColor", 3, "values", "valuesChange"], [1, "push-down"], [1, "d-flex", "flex-row"], [1, "mb-3", 3, "hidden"], [3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], ["filteringSorter", ""], [1, "ml-auto"], [3, "value", "search"], ["filteringSearch", ""], [4, "ngIf", "ngIfElse"], [1, "mt-3", 3, "hidden"], [3, "page", "total", "pagerAction"], ["filteringPaginator", ""], [1, "d-flex", "flex-column", "align-items-center"], ["image", "no-data-to-show", 3, "isWatermark"], [1, "nui-text-small"], [3, "value", "checked"], [1, "d-flex", "align-items-center"], [1, "mr-2", 3, "icon"], [1, "mr-2"], ["class", "mr-2", 4, "ngIf"], ["paddingSize", "normal", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""]], template: function DepreacatedDataSourceClientSideFilteringExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DepreacatedDataSourceClientSideFilteringExampleComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DepreacatedDataSourceClientSideFilteringExampleComponent_ng_template_2_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nui-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nui-expander", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nui-checkbox-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valuesChange", function DepreacatedDataSourceClientSideFilteringExampleComponent_Template_nui_checkbox_group_valuesChange_10_listener($event) { return ctx.onSelectedColorTypesChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_11_Template, 6, 5, "nui-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nui-expander", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nui-checkbox-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valuesChange", function DepreacatedDataSourceClientSideFilteringExampleComponent_Template_nui_checkbox_group_valuesChange_13_listener($event) { return ctx.onSelectedCriteriaChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DepreacatedDataSourceClientSideFilteringExampleComponent_nui_checkbox_14_Template, 6, 5, "nui-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nui-sorter", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sorterAction", function DepreacatedDataSourceClientSideFilteringExampleComponent_Template_nui_sorter_sorterAction_18_listener($event) { return ctx.onSorterAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nui-search", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("search", function DepreacatedDataSourceClientSideFilteringExampleComponent_Template_nui_search_search_21_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DepreacatedDataSourceClientSideFilteringExampleComponent_div_23_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "nui-paginator", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pagerAction", function DepreacatedDataSourceClientSideFilteringExampleComponent_Template_nui_paginator_pagerAction_25_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("panelMode", ctx.panelOptions.panelMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.panelOptions.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("open", ctx.statusExpanderOptions.expanded)("header", ctx.statusExpanderOptions.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("values", ctx.selectedColorTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("open", ctx.colorExpanderOptions.expanded)("header", ctx.colorExpanderOptions.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("values", ctx.selectedCriteriaColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.hasItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.sorterItems)("selectedItem", ctx.sortBy)("sortDirection", ctx.initialSortDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasItems())("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.hasItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("page", ctx.page)("total", ctx.filteringState == null ? null : ctx.filteringState.paginator == null ? null : ctx.filteringState.paginator.total);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_5__["ExpanderComponent"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_8__["SorterComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_10__["PaginatorComponent"], _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_12__["CheckboxComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_14__["RepeatComponent"]], styles: [".push-down[_ngcontent-%COMP%] {\n  min-height: 550px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1zaWRlLWZpbHRlcmluZy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJjbGllbnQtc2lkZS1maWx0ZXJpbmcuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdXNoLWRvd24ge1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "+YHH":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-system-statuses/badge-system-statuses.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-badge-counter nui-badge-critical\" data-before=\"1\"></div>\n<div class=\"nui-badge-counter nui-badge-warning\" data-before=\"10\"></div>\n<div class=\"nui-badge-counter nui-badge-info\" data-before=\"100\"></div>\n<div class=\"nui-badge-counter nui-badge-ok\" data-before=\"999+\"></div>\n\n<div class=\"nui-badge-empty nui-badge-critical\"></div>\n<div class=\"nui-badge-empty nui-badge-warning\"></div>\n<div class=\"nui-badge-empty nui-badge-info\"></div>\n<div class=\"nui-badge-empty nui-badge-ok\"></div>\n");

/***/ }),

/***/ "+igE":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-docs/badge-docs.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-docs\",\n    templateUrl: \"./badge-docs.component.html\",\n    styleUrls: [\"./badge-docs.component.less\"],\n})\nexport class BadgeDocsComponent {\n}\n");

/***/ }),

/***/ "+pTI":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-with-selection/client-side-with-selection.example.component.ts ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    ClientSideDataSource,\n    INovaFilteringOutputs, ListService, PaginatorComponent, RepeatComponent, RepeatSelectionMode, SearchComponent, SelectionType\n} from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\ninterface IExampleItem {\n    color: string;\n}\n\n@Component({\n    selector: \"nui-client-side-with-selection-example\",\n    providers: [ClientSideDataSource],\n    templateUrl: \"./client-side-with-selection.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class DataSourceWithSelectionExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n\n    public state: INovaFilteringOutputs = {};\n\n    @ViewChild(PaginatorComponent) paginator: PaginatorComponent;\n    @ViewChild(SearchComponent) search: SearchComponent;\n    @ViewChild(RepeatComponent) repeat: RepeatComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(public dataSourceService: ClientSideDataSource<IExampleItem>,\n        public changeDetection: ChangeDetectorRef,\n        private listService: ListService) {\n        dataSourceService.setData(getData());\n    }\n\n    async ngAfterViewInit() {\n        this.dataSourceService.registerComponent({\n            search: {\n                componentInstance: this.search,\n            },\n            paginator: {\n                componentInstance: this.paginator,\n            },\n            repeat: {\n                componentInstance: this.repeat,\n            },\n        });\n\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = { ...this.state, ...data };\n            this.state = this.listService.updateSelectionState(this.state);\n\n            this.changeDetection.detectChanges();\n        });\n\n        await this.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public async applyFilters() {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public onSelectorOutput(selectionType: SelectionType) {\n        this.state = this.listService.applySelector(selectionType, this.state);\n    }\n\n    public onRepeatOutput(selectedItems: IExampleItem[]) {\n        this.state = this.listService.selectItems(selectedItems, RepeatSelectionMode.multi, this.state);\n    }\n}\n\nfunction getData() {\n    return [\n        { color: \"regular-blue\" },\n        { color: \"regular-green\" },\n        { color: \"regular-yellow\" },\n        { color: \"regular-cyan \" },\n        { color: \"regular-magenta\" },\n        { color: \"regular-black\" },\n        { color: \"dark-blue\" },\n        { color: \"dark-green\" },\n        { color: \"dark-yellow\" },\n        { color: \"dark-cyan \" },\n        { color: \"dark-magenta\" },\n        { color: \"dark-black\" },\n        { color: \"light-blue\" },\n        { color: \"light-green\" },\n        { color: \"light-yellow\" },\n        { color: \"light-cyan \" },\n        { color: \"light-magenta\" },\n        { color: \"light-black\" },\n    ];\n}\n");

/***/ }),

/***/ "/LMT":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/data-source.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN, NuiCheckboxModule,\n    NuiDocsModule,\n    NuiExpanderModule, NuiIconModule, NuiImageModule,\n    NuiMessageModule,\n    NuiPaginatorModule,\n    NuiPanelModule,\n    NuiRepeatModule,\n    NuiSearchModule,\n    NuiSelectorModule,\n    NuiSorterModule, SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {DataSourceClientSideBasicExampleComponent} from \"./client-side/client-side-basic/client-side-basic.example.component\";\nimport {DataSourceClientSideCustomSearchExampleComponent} from \"./client-side/client-side-custom-search/client-side-custom-search.example.component\";\nimport {DataSourceClientSideDelayedExampleComponent} from \"./client-side/client-side-delayed/client-side-delayed.example.component\";\nimport {DataSourceClientSideFilteringExampleComponent} from \"./client-side/client-side-filtering/client-side-filtering.example.component\";\nimport {DataSourceWithSelectionExampleComponent} from \"./client-side/client-side-with-selection/client-side-with-selection.example.component\";\nimport {ClientSideDataSourceDocsComponent} from \"./client-side/docs/client-side-data-source-docs.example.component\";\nimport {DepreacatedDataSourceClientSideBasicExampleComponent} from \"./deprecated-client-side/client-side-basic/client-side-basic.example.component\";\nimport {DepreacatedDataSourceClientSideCustomSearchExampleComponent} from \"./deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component\";\nimport {DepreacatedDataSourceClientSideDelayedExampleComponent} from \"./deprecated-client-side/client-side-delayed/client-side-delayed.example.component\";\nimport {DepreacatedDataSourceClientSideFilteringExampleComponent} from \"./deprecated-client-side/client-side-filtering/client-side-filtering.example.component\";\nimport {DepreacatedDataSourceWithSelectionExampleComponent} from \"./deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component\";\nimport {DataSourceExampleComponent} from \"./deprecated-client-side/docs/data-source-docs.example.component\";\n\nconst routes = [\n    {\n        path: \"deprecated-client-side\",\n        component: DataSourceExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.support,\n                \"eolDate\": new Date(\"2021-12-31\"),\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"client-side\",\n        component: ClientSideDataSourceDocsComponent,\n    },\n];\n\n@NgModule({\n    declarations: [\n        ClientSideDataSourceDocsComponent,\n        DataSourceExampleComponent,\n        DepreacatedDataSourceClientSideBasicExampleComponent,\n        DepreacatedDataSourceClientSideFilteringExampleComponent,\n        DepreacatedDataSourceClientSideDelayedExampleComponent,\n        DepreacatedDataSourceClientSideCustomSearchExampleComponent,\n        DepreacatedDataSourceWithSelectionExampleComponent,\n        DataSourceClientSideBasicExampleComponent,\n        DataSourceClientSideFilteringExampleComponent,\n        DataSourceClientSideDelayedExampleComponent,\n        DataSourceClientSideCustomSearchExampleComponent,\n        DataSourceWithSelectionExampleComponent,\n    ],\n    imports: [\n        NuiDocsModule,\n        NuiPaginatorModule,\n        NuiImageModule,\n        NuiIconModule,\n        NuiExpanderModule,\n        NuiSearchModule,\n        NuiRepeatModule,\n        NuiSelectorModule,\n        NuiSorterModule,\n        NuiCheckboxModule,\n        NuiPanelModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n        DataSourceExampleComponent,\n        ClientSideDataSourceDocsComponent,\n    ],\n})\nexport class DataSourceModule {\n}\n");

/***/ }),

/***/ "0Vs1":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-docs/badge-docs.component.less ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n    margin: 0;\n    padding: 0;\n}\n");

/***/ }),

/***/ "0ZHL":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/edge-detection-service/edge-detection-service.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, Component, ElementRef, ViewChild } from \"@angular/core\";\nimport { EdgeDetectionService, IEdgeDetectionResult } from \"@nova-ui/bits\";\nimport _set from \"lodash/set\";\n\n@Component({\n    selector: \"nui-edge-detection-service-example\",\n    templateUrl: \"./edge-detection-service.example.component.html\",\n    styleUrls: [\n        \"./edge-detection-service.example.component.less\",\n    ],\n})\nexport class EdgeDetectionServiceExampleComponent implements AfterViewInit {\n    @ViewChild(\"parent\") private parentElement: ElementRef;\n    @ViewChild(\"placementElement\") private toBePlacedElement: ElementRef;\n\n    public showPlaced: any = {};\n    public showAligned: any = {};\n    public deposit = {\n        width: 100,\n        height: 50,\n    };\n    public parentComponent = {\n        width: 300,\n        height: 150,\n    };\n    public addEdgeDefinerClass = false;\n\n    public canBe?: IEdgeDetectionResult = {\n        placed: {\n            top: false,\n            right: false,\n            bottom: false,\n            left: false,\n        },\n        aligned: {\n            top: false,\n            right: false,\n            bottom: false,\n            left: false,\n        },\n    };\n\n    constructor(private edgeDetectionService: EdgeDetectionService) {\n    }\n\n    public ngAfterViewInit(): void {\n        this.update();\n    }\n\n    public update() {\n        setTimeout(() => {\n            const parent = this.parentElement.nativeElement;\n            const basePointElement = parent.querySelector(\".base-point-element\");\n\n            if (this.parentComponent.width < 300) {\n                this.parentComponent.width = 300;\n            }\n\n            if (this.parentComponent.height < 50) {\n                this.parentComponent.height = 50;\n            }\n\n            if (this.addEdgeDefinerClass) {\n                parent.classList.add(\"nui-edge-definer\");\n            } else {\n                parent.classList.remove(\"nui-edge-definer\");\n            }\n\n            this.canBe = this.edgeDetectionService\n                .canBe(basePointElement, this.toBePlacedElement.nativeElement);\n        });\n    }\n\n    public switchCheckbox(): void {\n        this.addEdgeDefinerClass = !this.addEdgeDefinerClass;\n        this.update();\n    }\n\n    public changeText(path: string, value: any) {\n        _set(this, path, value);\n        this.update();\n    }\n}\n");

/***/ }),

/***/ "0pxp":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-lazy/tree-lazy.example.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        {{node.name}}\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node #nestedNode=cdkNestedTreeNode *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\" cdkTreeNodeToggle (click)=\"loadMore(node, nestedNode)\">\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <span class=\"nui-tree__header-title\">{{ node.name }} ({{ node.length }})</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n            <nui-spinner *ngIf=\"node.isLoading\" [show]=\"node.isLoading\" [delay]=\"0\"></nui-spinner>\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "0q3D":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-show-all-dialog/tree-show-all-dialog.example.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { CdkNestedTreeNode, CdkTree, NestedTreeControl } from \"@angular/cdk/tree\";\nimport { HttpClient, HttpParams } from \"@angular/common/http\";\nimport {\n    AfterViewInit,\n    ChangeDetectionStrategy,\n    ChangeDetectorRef,\n    Component,\n    Inject,\n    Injectable,\n    Input,\n    IterableDiffer,\n    IterableDiffers,\n    OnDestroy,\n    ViewChild\n} from \"@angular/core\";\nimport {\n    DataSourceService,\n    DialogService,\n    EventBusService,\n    expand,\n    IDataSource,\n    IFilter,\n    INovaFilteringOutputs,\n    INovaFilters,\n    IRepeatItemConfig,\n    LoggerService,\n    nameof,\n    NuiActiveDialog,\n    NuiDialogRef,\n    RepeatComponent,\n    VirtualViewportManager\n} from \"@nova-ui/bits\";\nimport isEqual from \"lodash/isEqual\";\nimport isNil from \"lodash/isNil\";\nimport { Observable, of, Subject } from \"rxjs\";\nimport { catchError, delay, map, take, takeUntil, tap } from \"rxjs/operators\";\n\ninterface IServerNode extends Partial<IServer> {\n    name: string;\n    hasChildren?: boolean;\n    isLoading?: boolean;\n    children?: IServerNode[];\n}\n\nexport enum ServerStatus {\n    active = \"Active\",\n    down = \"Down\",\n}\n\n// implement custom filters\nexport interface IServerFilters extends INovaFilters {\n    location?: IFilter<string>;\n    name?: IFilter<string>;\n    status?: IFilter<ServerStatus>;\n}\n\n// collection of items that we've transformed from the backend API\nexport interface IServersCollection {\n    items: IServer[];\n    count: number;\n    status?: IFilter<Record<string, number>>;\n    location?: IFilter<Record<string, number>>;\n}\n\n// main server model being received from the backend\nexport interface IServer {\n    location: string;\n    name: string;\n    status: ServerStatus;\n}\n// collection of items that we've received from the backend API response\nexport interface IServersApiResponse {\n    count: number;\n    items: IServer[];\n}\n\nconst TREE_DATA: IServerNode[] = [\n    {\n        name: \"Nodes\",\n        hasChildren: true,\n        children: [\n            {\n                name: \"Brno\",\n                hasChildren: true,\n                children: [],\n            },\n            {\n                name: \"Austin\",\n                hasChildren: true,\n                children: [],\n            },\n            {\n                name: \"Kyiv\",\n                hasChildren: true,\n                children: [],\n            },\n        ],\n    },\n];\n\nconst RESULTS_PER_PAGE = 25;\n\nexport const API_URL = \"https://nova-pg.swdev.local/api/v1/servers\";\n\n/**\n * Example of a ServerSide DataSourceService which is using the Nova Backend API\n * to fetch data\n */\n@Injectable()\nexport class VirtualScrollListDataSource<T = any> extends DataSourceService<T> implements IDataSource {\n    // cache used to store our previous fetched results while scrolling\n    // and more data is automatically fetched from the backend\n    private cache = Array.from<IServer>({ length: 0 });\n    private previousFilters: INovaFilters;\n\n    constructor(\n        private logger: LoggerService,\n        private http: HttpClient\n    ) {\n        super();\n    }\n\n    public async getFilteredData(filters: INovaFilters): Promise<INovaFilteringOutputs> {\n        // Every new search request or filter change should\n        // clear the cache in order to correctly display a new set of data\n        const reset = this.filtersChanged(filters,\n            nameof<IServerFilters>(\"status\"),\n            nameof<IServerFilters>(\"location\"),\n            nameof<IServerFilters>(\"search\"),\n            nameof<IServerFilters>(\"sorter\")\n        );\n\n        if (reset || filters.virtualScroll?.value.start === 0) {\n            this.cache = [];\n        }\n        return this.getBackendData(filters).pipe(\n            tap((response: IServersCollection) => {\n                // after receiving data we need to append it to our previous fetched results\n                this.cache = this.cache.concat(response.items);\n            }),\n            map((response: IServersCollection) => {\n                const itemsSource = this.cache;\n\n                return {\n                    repeat: { itemsSource: itemsSource },\n                    paginator: {\n                        total: response.count,\n                    },\n                };\n            })\n        ).toPromise();\n    }\n\n    public reset() {\n        this.cache = [];\n    }\n\n    // build query params specific to our backend API\n    private getRequestParams(filters: INovaFilters): HttpParams {\n        const paging = filters.virtualScroll?.value ?? { start: 0, end: 0 };\n        const params = new HttpParams()\n            // define the start page used by the virtual scroll internal \"paginator\"\n            .set(\"page\", Math.ceil(paging.start / RESULTS_PER_PAGE).toString())\n            // specify the maximum number of items we need to fetch for each request\n            .set(\n                \"pageSize\",\n                String(\n                    RESULTS_PER_PAGE\n                )\n            )\n            .set(\"searchField\", \"location\")\n            .set(\"searchContent\", filters.search?.value ?? \"\");\n\n        return params;\n    }\n\n    private getBackendData(filters: INovaFilters): Observable<IServersCollection> {\n        // fetch response from the backend\n        const requestParams = this.getRequestParams(filters);\n        return this.http\n            .get<IServersApiResponse>(API_URL, { params: requestParams })\n            .pipe(\n                delay(300),\n                map(response => ({\n                    items: response.items?.map(item => ({\n                        name: item.name,\n                        location: item.location,\n                        status: item.status,\n                    })) || [],\n                    count: response.count,\n                })),\n                catchError(e => {\n                    this.logger.error(e);\n                    return of({\n                        items: [],\n                        count: 0,\n                    });\n                })\n            );\n\n    }\n\n    // checks if any of the filters specified by name have changed from the previous evaluation\n    public filtersChanged(filters: INovaFilters, ...filterNames: string[]) {\n        for (let i = 0; i < filterNames.length; i++) {\n            const filterName = filterNames[i];\n            const filter = filters[filterName];\n            if (!isNil(filter?.value) && this.previousFilters\n                && !isEqual(filter?.value, this.previousFilters[filterName]?.value)) {\n\n                return true;\n            }\n        }\n\n        return false;\n    }\n}\n\n@Component({\n    selector: \"nui-tree-show-all-dialog-example\",\n    templateUrl: \"./tree-show-all-dialog.example.component.html\",\n    styleUrls: [\"./tree-show-all-dialog.component.example.less\"],\n    animations: [expand],\n    providers: [VirtualScrollListDataSource],\n})\nexport class TreeShowAllDialogExampleComponent implements OnDestroy {\n    private activeDialogRef: NuiDialogRef;\n    private get activeDialogComponent(): TreeDialogContentExampleComponent {\n        return this.activeDialogRef.componentInstance;\n    }\n    private destroy$ = new Subject();\n    @ViewChild(CdkTree) private cdkTree: CdkTree<IServerNode>;\n\n    public nodesTotalItems: { [key: string]: number } = {};\n\n    public treeControl = new NestedTreeControl<IServerNode>((node) => node.children);\n    public dataSource = new ArrayDataSource(TREE_DATA);\n\n    public hasChild = (_: number, node: IServerNode) => node.children;\n\n    constructor(\n        private virtualScrollListDataSource: VirtualScrollListDataSource,\n        private differ: IterableDiffers,\n        private eventBusService: EventBusService,\n        private dialogService: DialogService\n    ) {\n    }\n\n    public showAll(node: IServerNode) {\n        // setup the Dialog\n        this.activeDialogRef = this.dialogService.open(TreeDialogContentExampleComponent, { size: \"sm\" });\n        // pass the inputs to the context component\n        this.activeDialogComponent.items = [];\n        this.activeDialogComponent.isLoading = true;\n        this.activeDialogComponent.cdRef.detectChanges();\n\n        // Set location search criteria\n        this.setDsSearchFieldFor(node);\n        this.subscribeToDialogScrolling();\n\n        this.activeDialogRef.closed$.subscribe(() => {\n            this.virtualScrollListDataSource.deregisterComponent(\"virtualScroll\");\n            this.virtualScrollListDataSource.deregisterComponent(\"search\");\n            this.virtualScrollListDataSource.reset();\n        });\n    }\n\n    /**\n     * Register the viewport container to the DataSource\n     */\n    private subscribeToDialogScrolling() {\n        // 'setTimeout' to wait until the dialog is rendered\n        setTimeout(() => {\n            const viewPortManager = this.activeDialogComponent.viewPortManager;\n\n            this.virtualScrollListDataSource.registerComponent({\n                virtualScroll: { componentInstance: viewPortManager },\n            });\n\n            viewPortManager.observeNextPage$({ pageSize: RESULTS_PER_PAGE })\n                .pipe(\n                    tap(() => {\n                        this.virtualScrollListDataSource.applyFilters();\n                        this.virtualScrollListDataSource.outputsSubject\n                            .subscribe((v: any) => {\n                                if (!this.activeDialogComponent) { return; } // in case dialog was closed early\n                                const items = v.repeat.itemsSource as IServer[];\n                                this.activeDialogComponent.items = items;\n                                this.activeDialogComponent.isLoading = false;\n                                this.activeDialogComponent.cdRef.detectChanges();\n                            });\n                    }),\n                    takeUntil(this.destroy$)\n                ).subscribe();\n        });\n    }\n\n    /** Load first page on first open */\n    public onToggleClick(node: IServerNode, nestedNode: CdkNestedTreeNode<any>) {\n        this.eventBusService.getStream({id: \"document-click\"}).next();\n\n        if (node.hasChildren && node.children && !node.children.length) {\n            node.isLoading = true;\n            this.setDsSearchFieldFor(node);\n            this.virtualScrollListDataSource.applyFilters();\n            this.virtualScrollListDataSource.outputsSubject\n                .pipe(take(1))\n                .subscribe((v: any) => {\n                    const items = v.repeat.itemsSource as IServer[];\n\n                    this.handleNodeTotalItems(node.name, v.paginator.total);\n                    this.handleNodeContent(node, nestedNode, items);\n                    node.isLoading = false;\n                    this.virtualScrollListDataSource.deregisterComponent(\"search\");\n                });\n        }\n    }\n\n    private handleNodeTotalItems(nodeId: string, totalItems: number) {\n        this.nodesTotalItems[nodeId] = totalItems;\n    }\n\n    private handleNodeContent(node: IServerNode, nestedNodeDirective: CdkNestedTreeNode<any>, items: IServerNode[]) {\n        node.children = [];\n        const differ: IterableDiffer<IServerNode> = this.differ.find(node.children).create();\n        node.children = items;\n\n        // clear previously rendered leaf nodes\n        nestedNodeDirective.nodeOutlet.first.viewContainer.clear();\n        this.cdkTree.renderNodeChanges(node.children, differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);\n    }\n\n    /** Register node name as a search to get nodes of one location */\n    private setDsSearchFieldFor(node: IServerNode) {\n        this.virtualScrollListDataSource.registerComponent({\n            search: {\n                componentInstance: {\n                    getFilters: () => ({\n                        type: \"search\",\n                        value: node.name,\n                    }),\n                },\n            },\n        });\n    }\n\n    public ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n}\n\n@Component({\n    selector: \"nui-dialog-content-dialog-example\",\n    template: `\n        <nui-dialog-header title=\"Dialog title\" i18n-title (closed)=\"close()\"></nui-dialog-header>\n\n        <div nui-busy [busy]=\"isLoading\">\n            <div class=\"d-flex flex-row\">\n                <nui-repeat class=\"virtual-scroll-list-repeat\"\n                    [itemConfig]=\"itemConfig\"\n                    [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                    [itemsSource]=\"items\"\n                    [virtualScroll]=\"true\"\n                    [itemSize]=\"30\"\n                ></nui-repeat>\n            </div>\n        </div>\n\n        <nui-dialog-footer>\n            <button nui-button type=\"button\" (click)=\"close()\" i18n>\n                Close\n            </button>\n        </nui-dialog-footer>\n\n        <ng-template #repeatItemTemplate let-item=\"item\">\n            <div class=\"d-flex justify-content-between w-100\"><span>Node: {{item.name}}</span> <span> Status: {{item.status}}</span> </div>\n        </ng-template>\n    `,\n    animations: [],\n    providers: [VirtualViewportManager],\n    styles: [`\n        .virtual-scroll-list-repeat {\n            height: 400px; // height has to be defined if using 'nui-repeat' with virtual scroll\n        }\n    `],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TreeDialogContentExampleComponent implements AfterViewInit {\n    @Input() items: IServerNode[] = [];\n    @Input() isLoading: boolean = false;\n\n    public itemConfig: IRepeatItemConfig = {\n        trackBy: (index, item) => item?.name,\n    };\n\n    @ViewChild(RepeatComponent)\n    public repeat: RepeatComponent;\n\n    constructor(public cdRef: ChangeDetectorRef,\n        public viewPortManager: VirtualViewportManager,\n        @Inject(NuiActiveDialog) public activeDialog: any\n        ) {}\n\n    ngAfterViewInit() {\n        this.viewPortManager.setViewport(this.repeat.viewportRef);\n    }\n\n    close() {\n        this.activeDialog.close();\n    }\n\n}\n\n");

/***/ }),

/***/ "1lXE":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-basic/data-filter-basic.example.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-4\" style=\"border: 1px solid black\">\n    <div class=\"mt-2 mb-2\">\n        <nui-filtering-time-frame-picker (timeFrameChanged)=\"applyFilters()\" #timeFramePicker></nui-filtering-time-frame-picker>\n    </div>\n    <nui-divider></nui-divider>\n    <nui-data-filter-table-example></nui-data-filter-table-example>\n</div>\n\n");

/***/ }),

/***/ "1tGW":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-docs/tag-docs.example.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tag-docs-example\",\n    templateUrl: \"./tag-docs.example.component.html\",\n})\nexport class TagDocsExampleComponent {\n}\n");

/***/ }),

/***/ "24jC":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/event-propagation-service/event-propagation-service.example.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-demo-event-propagation-service\">\n    <h2>Shouldn't propagate examples:</h2>\n    <nui-textbox value=\"Textbox\"\n                 customBoxWidth=\"150px\"\n                 (click)=\"handleClick($event)\">\n    </nui-textbox>\n    <button nui-button\n            type=\"button\"\n            (click)=\"handleClick($event)\"\n            displayStyle=\"primary\">Button\n    </button>\n    <nui-radio value=\"readonly\"\n               [checked]=\"false\"\n               (click)=\"handleClick($event)\">Radio\n    </nui-radio>\n\n    <nui-checkbox value=\"example\"\n                  [checked]=\"false\"\n                  (click)=\"handleClick($event)\">Checkbox\n    </nui-checkbox>\n    <a role=\"button\" (click)=\"handleClick($event)\">Link</a>\n    <nui-divider></nui-divider>\n    <h2>Should propagate examples:</h2>\n    <div (click)=\"handleClick($event)\">\n        <nui-icon icon=\"severity_info\" iconSize=\"small\"></nui-icon>\n        Icon\n    </div>\n    <h4 (click)=\"handleClick($event)\">Header</h4>\n    <p (click)=\"handleClick($event)\">Paragraph</p>\n</div>\n\n<style>\n    .nui-demo-event-propagation-service{\n        max-width: 260px;\n    }\n</style>\n");

/***/ }),

/***/ "2VyY":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-novaui/badge-novaui.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Button example:</h3>\n\n<button nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        class=\"nui-badge-counter nui-badge-warning nui-badge-text-black\"\n        [attr.data-before]=\"buttonCounter\"\n        i18n>Click me!</button>\n\n<button nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        class=\"nui-badge-empty\"\n        i18n>Click me!</button>\n\n\n<h3>Input example:</h3>\n\n<div class=\"nui-badge-counter nui-badge-info\"\n     [attr.data-before]=\"textboxCounter\">\n    <nui-textbox\n        value=\"example value\">\n    </nui-textbox>\n</div>\n\n<div class=\"nui-badge-empty nui-badge-critical\">\n    <nui-textbox\n        value=\"example value\">\n    </nui-textbox>\n</div>\n");

/***/ }),

/***/ "2YcW":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/edge-detection-service/edge-detection-service.example.component.less ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#nui-demo-services-edge-detection .results {\n  display: flex;\n  display: -ms-flexbox;\n}\n\n#nui-demo-services-edge-detection .deposit {\n  position: absolute;\n  pointer-events: none;\n  display: flex;\n  display: -ms-flexbox;\n}\n\n#nui-demo-services-edge-detection .deposit-reference {\n  display: none;\n}\n\n#nui-demo-services-edge-detection .deposit.top,\n#nui-demo-services-edge-detection .deposit.bottom {\n  justify-content: center;\n  border-top: 1px solid #FF0000;\n  border-bottom: 1px solid #FF0000;\n  width: 100%;\n}\n\n#nui-demo-services-edge-detection .deposit.left,\n#nui-demo-services-edge-detection .deposit.right {\n  align-items: center;\n  border-left: 1px solid #FF0000;\n  border-right: 1px solid #FF0000;\n  height: 100%;\n}\n\n#nui-demo-services-edge-detection .deposit .arrow {\n  width: 0px;\n  height: 0px;\n}\n\n#nui-demo-services-edge-detection .arrow-up {\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 25px solid #FF0000;\n}\n\n#nui-demo-services-edge-detection .arrow-down {\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-top: 25px solid #FF0000;\n}\n\n#nui-demo-services-edge-detection .arrow-left {\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-right: 25px solid #FF0000;\n}\n\n#nui-demo-services-edge-detection .arrow-right {\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-left: 25px solid #FF0000;\n}\n\n#nui-demo-services-edge-detection .deposit.top .line,\n#nui-demo-services-edge-detection .deposit.bottom .line {\n  width: 50%;\n  height: 100%;\n  border-right: #FF0000 solid 2px;\n  position: absolute;\n  left: 1px;\n  top: 0px;\n}\n\n#nui-demo-services-edge-detection .deposit.left .line,\n#nui-demo-services-edge-detection .deposit.right .line {\n  width: 100%;\n  height: 50%;\n  border-bottom: #FF0000 solid 2px;\n  position: absolute;\n  top: 1px;\n  left: 0px;\n}\n\n#nui-demo-services-edge-detection .base-point {\n  display: inline-block;\n  position: relative;\n  background-color: #fff;\n}\n\n#nui-demo-services-edge-detection .parent-component {\n  display: table-cell;\n  min-width: 300px;\n  min-height: 50px;\n  vertical-align: middle;\n  text-align: center;\n}\n\n#nui-demo-services-edge-detection .nui-edge-definer {\n  background-color: rgba(1, 1, 1, 0.2);\n}\n\n#nui-demo-services-edge-detection .to-be-placed.left,\n#nui-demo-services-edge-detection .to-be-placed.right {\n  top: 0px;\n}\n\n.to-be-placed.top {\n  bottom: 100%;\n}\n\n.to-be-placed.right {\n  left: 100%;\n  justify-content: flex-end;\n}\n\n.to-be-placed.bottom {\n  align-items: flex-end;\n}\n\n.to-be-placed.left {\n  right: 100%;\n}\n\n.to-be-aligned.top {\n  top: 0px;\n  left: 0px;\n  align-items: flex-end;\n}\n\n.to-be-aligned.right {\n  top: 0px;\n  right: 0px;\n  margin-bottom: -8px;\n}\n\n.to-be-aligned.bottom {\n  bottom: 0px;\n}\n\n.to-be-aligned.left {\n  justify-content: flex-end;\n  top: 0px;\n}\n");

/***/ }),

/***/ "2lT4":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-with-icon/tag-with-icon.example.component.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-tag-warning {\n    border: none;\n}\n");

/***/ }),

/***/ "39vb":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/docs/client-side-data-source-docs.example.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Client Side Data Source</h2>\n<p>The main responsibility of a data source is to process one or more filters (e.g. pagination, sorting, search, etc.)\n    from any filtering components before exposing the data to a presentation layer.\n    The <code>ClientSideDataSource</code> aims to allow filtering components to be independent from\n    the main presentation component by allowing each of them to communicate to the service how they each individually\n    want to filter the data. The presentation component can then ask for the pre-filtered data via the service.\n</p>\n<span>Filtering components can be registered with the service in the following manner:</span>\n    <ul>\n        <li>use <code> this.dataSourceService.componentTree = {{'{'}}\n            search: {{'{'}}...{{'}'}}\n            {{'}'}};\n        </code> to set components that will be part of filtering process\n        </li>\n        <li>implement <code>getFilteredData</code> in your own service or use existing from <code>ClientSideDataSource</code>\n        </li>\n        <li>use it by subscribing to output and applying newly received data</li>\n    </ul>\n<p>Visualization of data flow is available <a target=\"_blank\"\n                                              href=\"https://cp.solarwinds.com/display/NU/Filtered+view+communication+mechanism\">here</a>.\n</p>\n\n<nui-message type=\"critical\">\n    <strong>Warning:</strong> If you are planning on using <abbr title=\"Ahead of Time\">AoT</abbr> compilation, avoid\n    <b>directly</b> providing <code>ClientSideDataSource</code>.  The search service inside <code>ClientSideDataSource</code>\n    will not be populated under AoT compilation (JIT compilation will work normally).  A simple work around is to create a\n    simple class, have it inherit/extend <code>ClientSideDataSource</code>, and then provide that.<br>\n    <p><nui-example-code language=\"typescript\">{{subclassCode}}</nui-example-code></p>\n</nui-message>\n\n\n<nui-example-wrapper filenamePrefix=\"client-side-basic\" exampleTitle=\"Basic Client Side\">\n    <nui-client-side-basic-data-source-example></nui-client-side-basic-data-source-example>\n</nui-example-wrapper>\n\n<h2>Custom Search</h2>\n<p>If needed to fully or partially override logic of <code>SearchService</code>, you can easily provide a new class extended\n    from <code>SearchService</code> using Angular DI on the Component level using\n    <a href=\"https://angular.io/guide/dependency-injection-providers#alternative-class-providers\">Alternative class provider</a>.\n</p>\n<p>This example shows how to do case-sensitive search.</p>\n<nui-example-wrapper filenamePrefix=\"client-side-custom-search\" exampleTitle=\"Client-Side Custom Search\">\n    <nui-client-side-custom-search-example></nui-client-side-custom-search-example>\n</nui-example-wrapper>\n\n<h2>Delayed Search</h2>\n<p>The rxjs pipe function can be used to introduce a delay or debounce.</p>\n<nui-example-wrapper filenamePrefix=\"client-side-delayed\" exampleTitle=\"Client Side Delayed\">\n    <nui-client-side-delayed-data-source-example></nui-client-side-delayed-data-source-example>\n</nui-example-wrapper>\n\n<h2>Filtering</h2>\n<p>\nHere we're combining several components to implement filter panel. For more information please see inline comments.\n</p>\n<nui-example-wrapper filenamePrefix=\"client-side-filtering\" exampleTitle=\"Manually Composed Filtering Layout\">\n    <nui-client-side-filtering-data-source-example></nui-client-side-filtering-data-source-example>\n</nui-example-wrapper>\n\n<h2>Selection</h2>\n<p>\n    <code><a href=\"../injectables/ListService.html\" target=\"_blank\">ListService</a></code> helps with\n    selection handling, both for the repeat and the selector.\n</p>\n<nui-example-wrapper filenamePrefix=\"client-side-with-selection\" exampleTitle=\"Client-Side Filtering With Selection\">\n    <nui-client-side-with-selection-example></nui-client-side-with-selection-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "3LSX":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/search-service/search-service.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { ISearchService, SearchService } from \"@nova-ui/bits\";\nimport _includes from \"lodash/includes\";\n\n@Component({\n    selector: \"nui-search-service-example\",\n    templateUrl: \"./search-service.example.component.html\",\n})\nexport class SearchServiceExampleComponent {\n    private now = new Date().getTime();\n    private week = 7 * 24 * 60 * 60 * 1000; // milliseconds 7 * 24 * 60 * 60 * 1000\n    public items = [\n        {stringContainer: \"abc\", numberContainer: 123, dateContainer: new Date(this.now - this.week)},\n        {stringContainer: \"abcd\", numberContainer: 1234, dateContainer: new Date(this.now)},\n        {stringContainer: \"abcde\", numberContainer: 12345, dateContainer: new Date(this.now + this.week)},\n    ];\n    public itemsFormatted = JSON.stringify(this.items, null, 2);\n    public searchResult: any;\n    public searchResultFormatted: any;\n    public searchValue: any;\n    public props = [\"stringContainer\", \"numberContainer\", \"dateContainer\"];\n\n    constructor(@Inject(SearchService) private searchService: ISearchService) {\n    }\n\n    public valuesChanged(values: any[]) {\n        this.props = [...values];\n    }\n\n    public search() {\n        const props = this.getProps();\n        this.searchResult = this.searchService.search(this.items, props, this.searchValue);\n        this.searchResultFormatted = JSON.stringify(this.searchResult, null, 2);\n    }\n\n    private getProps(): Array<string> {\n        const props = [];\n        if (_includes(this.props, \"1\")) {\n            this.props = [];\n            props.push(\"stringContainer\");\n        }\n        if (_includes(this.props, \"2\")) {\n            this.props = [];\n            props.push(\"numberContainer\");\n        }\n        if (_includes(this.props, \"3\")) {\n            this.props = [];\n            props.push(\"dateContainer\");\n        }\n\n        return props;\n    }\n}\n");

/***/ }),

/***/ "3M5X":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-leaf-pagination/tree-leaf-pagination.example.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { CdkNestedTreeNode, CdkTree, NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component, IterableDiffer, IterableDiffers, ViewChild } from \"@angular/core\";\nimport { EventBusService, expand } from \"@nova-ui/bits\";\n\nimport { HttpMockService } from \"../http-mock.service\";\n\ninterface FoodNode {\n    name: string;\n    page?: number;\n    children?: FoodNode[];\n    isLoading?: boolean;\n    hasPagination?: boolean;\n}\n\ninterface IApiResponse {\n    items: FoodNode[];\n    total: number;\n}\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Food\",\n        children: [\n            {\n                name: \"Vegetables\",\n                children: [],\n                hasPagination: true,\n            },\n            {\n                name: \"Fruits\",\n                children: [],\n                hasPagination: true,\n            },\n        ],\n    },\n\n];\n\n@Component({\n    selector: \"nui-tree-leaf-pagination-example\",\n    templateUrl: \"./tree-leaf-pagination.example.component.html\",\n    styleUrls: [\"./tree-leaf-pagination.component.example.less\"],\n    animations: [expand],\n    providers: [HttpMockService],\n})\n\nexport class TreeLeafPaginationExampleComponent {\n    public pageSize = 25; // used for 'nui-paginator'\n    public nodesTotalItems: { [key: string]: number } = {};\n\n    public treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    public dataSource = new ArrayDataSource(TREE_DATA);\n\n    @ViewChild(CdkTree) private cdkTree: CdkTree<FoodNode>;\n\n    hasChild = (_: number, node: FoodNode) => node.children;\n\n    constructor(private http: HttpMockService,\n                private differ: IterableDiffers,\n                private eventBusService: EventBusService) {\n    }\n\n    /** Load first page on first open */\n    public onToggleClick(node: FoodNode, nestedNode: CdkNestedTreeNode<any>) {\n        this.eventBusService.getStream({id: \"document-click\"}).next(new MouseEvent(\"click\"));\n\n        if (node.hasPagination && node.children && !node.children.length) {\n            const paginatorOptions = {\n                page: 1,\n                pageSize: this.pageSize,\n            };\n\n            this.loadNodeItems(node, nestedNode, paginatorOptions);\n        }\n    }\n\n    public loadNodeItems(node: FoodNode, nestedNodeDirective: CdkNestedTreeNode<any>, paginatorOptions: any): void {\n        if (node.isLoading) { return; }\n\n        node.isLoading = true;\n\n        this.http.getNodeItems(node.name, paginatorOptions.page, paginatorOptions.pageSize).subscribe((res: IApiResponse) => {\n            this.handleNodeTotalItems(node.name, res.total);\n            this.handleNodeContent(node, nestedNodeDirective, res.items);\n            node.isLoading = false;\n        });\n    }\n\n    private handleNodeTotalItems(nodeId: string, totalItems: number) {\n        this.nodesTotalItems[nodeId] = totalItems;\n    }\n\n    private handleNodeContent(node: FoodNode, nestedNodeDirective: CdkNestedTreeNode<any>, items: FoodNode[]) {\n        node.children = [];\n        const differ: IterableDiffer<FoodNode> = this.differ.find(node.children).create();\n        node.children = items;\n\n        // clear previously rendered leaf nodes\n        nestedNodeDirective.nodeOutlet.first.viewContainer.clear();\n        this.cdkTree.renderNodeChanges(node.children, differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);\n    }\n}\n");

/***/ }),

/***/ "4odw":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-load-more/tree-load-more.example.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        {{node.name}}, fromPage: {{node.page}}\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node #nestedNode=cdkNestedTreeNode *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\"\n            (click)=\"onToggleClick(node, nestedNode)\"\n            cdkTreeNodeToggle>\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n            <ng-container cdkTreeNodeOutlet ></ng-container>\n            <div *ngIf=\"node.hasPagination\">\n                <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n                <a *ngIf=\"!node.isLoading\" (click)=\"loadMoreItems(node, nestedNode)\">Load another {{pageSize}} (of {{remainingItemsCount[node.name]}})</a>\n                <nui-spinner *ngIf=\"node.isLoading\" [show]=\"node.isLoading\" [delay]=\"0\"></nui-spinner>\n            </div>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "4zoD":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-load-more/tree-load-more.example.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { CdkNestedTreeNode, CdkTree, NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component, IterableDiffer, IterableDiffers, ViewChild } from \"@angular/core\";\nimport { EventBusService, expand } from \"@nova-ui/bits\";\n\nimport { HttpMockService } from \"../http-mock.service\";\n\ninterface FoodNode {\n    name: string;\n    page?: number;\n    children?: FoodNode[];\n    isLoading?: boolean;\n    hasPagination?: boolean;\n}\n\ninterface IApiResponse {\n    items: FoodNode[];\n    total: number;\n}\n\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Food\",\n        children: [\n            {\n                name: \"Vegetables\",\n                children: [],\n                page: 1,\n                hasPagination: true,\n            },\n            {\n                name: \"Fruits\",\n                children: [],\n                page: 1,\n                hasPagination: true,\n            },\n        ],\n    },\n\n];\n\n@Component({\n    selector: \"nui-tree-load-more-example\",\n    templateUrl: \"./tree-load-more.example.component.html\",\n    styleUrls: [\"./tree-load-more.component.example.less\"],\n    animations: [expand],\n    providers: [HttpMockService],\n})\n\nexport class TreeLoadMoreExampleComponent {\n    public pageSize = 10;\n    public remainingItemsCount: { [key: string]: number } = {};\n\n    public treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    public dataSource = new ArrayDataSource(TREE_DATA);\n\n    @ViewChild(CdkTree) private cdkTree: CdkTree<FoodNode>;\n\n    hasChild = (_: number, node: FoodNode) => node.children;\n\n    constructor(private http: HttpMockService,\n                private differ: IterableDiffers,\n                private eventBusService: EventBusService) {\n    }\n\n    /** Load first page on first open */\n    public onToggleClick(node: FoodNode, nestedNode: CdkNestedTreeNode<any>) {\n        this.eventBusService.getStream({id: \"document-click\"}).next(new MouseEvent(\"click\"));\n\n        if (node.hasPagination && node.children && !node.children.length) {\n            node.page = 1;\n            this.loadMoreItems(node, nestedNode);\n        }\n    }\n\n    public loadMoreItems(node: FoodNode, nestedNodeDirective: CdkNestedTreeNode<any>): void {\n        if (node.isLoading) { return; }\n\n        node.isLoading = true;\n\n        const page = node.page ? node.page++ : 1;\n\n        this.http.getNodeItems(node.name, page, this.pageSize).subscribe((res: IApiResponse) => {\n            this.setRemainingItemsCount(node, res.total);\n            this.handleNodeContent(node, nestedNodeDirective, res.items);\n            node.isLoading = false;\n        });\n    }\n\n    private setRemainingItemsCount(node: FoodNode, totalItems: number) {\n        this.remainingItemsCount[node.name] = node.children ? totalItems - node.children?.length : totalItems;\n    }\n\n    private handleNodeContent(node: FoodNode, nestedNodeDirective: CdkNestedTreeNode<any>, items: FoodNode[]) {\n        const differ: IterableDiffer<FoodNode> = this.differ.find(node.children).create();\n        node.children?.push(...items);\n\n        // clear previously rendered leaf nodes\n        nestedNodeDirective.nodeOutlet.first.viewContainer.clear();\n        this.cdkTree.renderNodeChanges(node.children || [], differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);\n    }\n}\n");

/***/ }),

/***/ "5XLM":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-docs/tree-docs.example.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>The Angular CDK Tree module provides a way to easily and declaratively create Tree interfaces.</p>\n<p>To get started, import <code>CdkTreeModule</code> into the NgModule where you want to use <code>cdk-tree</code> features:</p>\n\n<nui-example-code language=\"typescript\">{{ initialSetupCode }}</nui-example-code>\n\n<p>For more details on the implementation of the @angular/cdk/tree, check the documentation\n    <a href=\"https://material.angular.io/cdk/tree/overview\" target=\"_blank\">here</a></p>\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        Angular CDK's <code>CdkTreeModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>This example shows how easy it is to create a <code>cdk-tree</code> element. Our examples are using <code>nui-expander</code>\n    css styles which we recommend to use. To add <code>nui-expander</code> styles, add <code>.expander()</code> mixin to the\n    component styles. In the result, appropriate css classes are generated which are used in the examples. For example\n    <code>.nui-tree__body</code> applies dotted line to the body of branch, or <code>.nui-tree_header</code> applies\n    <code>cursor: pointer</code>. Look into examples to find more css classes or extend existing css rules to achieve your goal.</p>\n<nui-example-wrapper filenamePrefix=\"basic\" exampleTitle=\"Basic Usage\">\n    <nui-tree-basic-example></nui-tree-basic-example>\n</nui-example-wrapper>\n\n<h2>Tree Styling</h2>\n<p>To apply unique styles for the particular node, provide icon/css class/etc. to this node in the <code>dataSource</code>,\n    and use it as usually in the template of component. Check the source code below:</p>\n<nui-example-wrapper filenamePrefix=\"styling\" exampleTitle=\"Styling\">\n    <nui-tree-styling-example></nui-tree-styling-example>\n</nui-example-wrapper>\n\n<h2>Tree Lazy-loading</h2>\n<p>To implement lazy-loading on <code>CdkTree</code> component branches, use <code>renderNodeChanges</code> method,\n    in order to synchronize data-source with DOM representation after an asynchronous operation has finished. Pay attention\n    to the <code>isLoading</code> flag into yours node objects while implementing lazy-loading.\n</p>\n<nui-example-wrapper filenamePrefix=\"lazy\" exampleTitle=\"Lazy loading\">\n    <nui-tree-lazy-example></nui-tree-lazy-example>\n</nui-example-wrapper>\n\n<h2>Tree with checkboxes</h2>\n<p>For handling state of checkboxes <a href=\"https://github.com/angular/components/blob/master/src/cdk/collections/selection-model.ts\">SelectionModel</a>\n   is used. You can easily grab all the selected items using <code>SelectionModel.selected</code> or subscribe to the changes\n   using <code>SelectionModel.changed</code>. Check one of the checkboxes to see it in action.\n   This example also shows how to implement \"indeterminate\" state of checkbox for branches.</p>\n<nui-example-wrapper filenamePrefix=\"checkbox\" exampleTitle=\"Checkbox\">\n    <nui-tree-checkbox-example></nui-tree-checkbox-example>\n</nui-example-wrapper>\n\n<h2>Tree with Checkboxes and Lazy Loading</h2>\n<p>\n    In case some selectable options are to be lazy loaded, it is possible to load additional selectable options asynchronously, while \n    still be able to track the selection properly. In the following example there are several places where some additional options are being loaded \n    on demand. Once triggered, if the parent selectable node is selected, all the lazy-loaded selectables will get selected once they're loaded.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"checkbox-lazy\" exampleTitle=\"Checkbox with Lazy Loading\">\n    <nui-tree-checkbox-lazy></nui-tree-checkbox-lazy>\n</nui-example-wrapper>\n\n<h2>Tree with Pagination on Leaf nodes</h2>\n<p>\n    If you have many items on leaf nodes, you might be interested in loading the data by parts.\n    You can use pagination as one of the options for such a purpose.\n</p>\n<p>\n    The example below shows how to do that.\n    In terms of this example, it's assumed that an API can return a necessary set of data for the node by it's identificator.\n    When you expand the node, it will load the first page and then will display a paginator.\n    At this point, on the first data fetch, an API should return a total amount of items to pass it to the paginator.\n</p>\n<p>\n    It's also recommended to use <code>nui-paginator</code> for handling the pagination.\n</p>\n<nui-example-wrapper filenamePrefix=\"leaf-pagination\" exampleTitle=\"Pagination on the leaf nodes\">\n    <nui-tree-leaf-pagination-example></nui-tree-leaf-pagination-example>\n</nui-example-wrapper>\n\n<h2>Tree With Additional Elements</h2>\n<p>To customize tree nodes, add any template. Below you see several typical cases with adding additional templates (menu, tag) into the tree.</p>\n\n<nui-example-wrapper filenamePrefix=\"with-additional-content\" exampleTitle=\"Tree With Additional Content\">\n    <nui-tree-with-additional-content-example></nui-tree-with-additional-content-example>\n</nui-example-wrapper>\n\n<h2>Tree Load More Nodes</h2>\n<p>The example below shows how to load data in portions using \"Load More\"</p>\n\n<nui-example-wrapper filenamePrefix=\"load-more\" exampleTitle=\"Tree Load More Nodes\">\n    <nui-tree-load-more-example></nui-tree-load-more-example>\n</nui-example-wrapper>\n\n<h2>Tree With show all in dialog</h2>\n<p>\n    It's possible the case when there're too many items on the leaf node. In this case, it's also possible to display all the items on the separate screen.\n    For example, inside the <code>nui-dialog</code>.\n\n</p>\n<p>\n    Current example uses Nova test BE service to get the data.\n    It can send the data by some portions for a certain criteria.\n    In this current example, there're 3 nodes that fetch the data per location, the service is implementing Nova\n    <code><a href=\"../injectables/DataSourceService.html\" target=\"_blank\">DataSourceService</a></code>.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"show-all-dialog\" exampleTitle=\"Tree With show all in dialog\">\n    <nui-tree-show-all-dialog-example></nui-tree-show-all-dialog-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "71a7":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-border-color/tag-border-color.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tag-border-color-example\",\n    templateUrl: \"./tag-border-color.example.component.html\",\n})\nexport class TagBorderColorExampleComponent {\n}\n");

/***/ }),

/***/ "7F6/":
/*!*****************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-delayed/client-side-delayed.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: DepreacatedDataSourceClientSideDelayedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideDelayedExampleComponent", function() { return DepreacatedDataSourceClientSideDelayedExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");









const _c0 = ["filteringPaginator"];
const _c1 = ["filteringSearch"];
const _c2 = ["filteringSorter"];
function DepreacatedDataSourceClientSideDelayedExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.color);
} }
const INITIAL_ARRAY = [
    { color: "regular-blue" },
    { color: "regular-green" },
    { color: "regular-yellow" },
    { color: "regular-cyan" },
    { color: "regular-magenta" },
    { color: "regular-black" },
    { color: "dark-blue" },
    { color: "dark-green" },
    { color: "dark-yellow" },
    { color: "dark-cyan" },
    { color: "dark-magenta" },
    { color: "light-blue" },
    { color: "light-green" },
    { color: "light-yellow" },
    { color: "light-cyan" },
    { color: "light-magenta" },
];
/**
 * TODO: Remove in v12 - NUI-5835
 * @deprecated
 */
class DepreacatedDataSourceClientSideDelayedExampleComponent {
    constructor(dataSourceService, changeDetection) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.searchTerm = "";
        this.page = 1;
        this.sorter = {
            columns: ["color", "red", "green", "blue"],
            sortedColumn: "color",
            direction: "asc",
        };
        this.state = {
            repeat: {
                itemsSource: [],
            },
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        this.delayActionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        dataSourceService.setData(INITIAL_ARRAY);
        this.filters = ["regular", "dark", "light"];
        this.selectedFilters = [];
    }
    ngAfterViewInit() {
        this.dataSourceService.componentTree = {
            search: {
                componentInstance: this.filteringSearch,
            },
            paginator: {
                componentInstance: this.filteringPaginator,
            },
        };
        this.dataSourceService.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            var _a;
            this.state = data;
            if ((_a = data.paginator) === null || _a === void 0 ? void 0 : _a.reset) {
                this.filteringPaginator.page = 1;
            }
            this.changeDetection.detectChanges();
        });
        this.delayActionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(() => {
            this.dataSourceService.applyFilters();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    onSearch() {
        this.delayActionSubject.next();
    }
    changePagination() {
        this.dataSourceService.applyFilters();
    }
}
DepreacatedDataSourceClientSideDelayedExampleComponent.ɵfac = function DepreacatedDataSourceClientSideDelayedExampleComponent_Factory(t) { return new (t || DepreacatedDataSourceClientSideDelayedExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DepreacatedDataSourceClientSideDelayedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepreacatedDataSourceClientSideDelayedExampleComponent, selectors: [["nui-deprecated-client-side-delayed-data-source-example"]], viewQuery: function DepreacatedDataSourceClientSideDelayedExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteringSorter = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"]])], decls: 11, vars: 5, consts: [["repeatItemTemplate", ""], [1, "client-side-delayed-example"], [1, "d-flex"], [1, "flex-row"], [3, "value", "inputChange", "cancel"], ["filteringSearch", ""], [3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 3, "page", "total", "pagerAction"], ["filteringPaginator", ""]], template: function DepreacatedDataSourceClientSideDelayedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepreacatedDataSourceClientSideDelayedExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function DepreacatedDataSourceClientSideDelayedExampleComponent_Template_nui_search_inputChange_5_listener() { return ctx.onSearch(); })("cancel", function DepreacatedDataSourceClientSideDelayedExampleComponent_Template_nui_search_cancel_5_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-repeat", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pagerAction", function DepreacatedDataSourceClientSideDelayedExampleComponent_Template_nui_paginator_pagerAction_9_listener() { return ctx.changePagination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_5__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_6__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "7IbH":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { CdkTreeModule } from \"@angular/cdk/tree\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiBusyModule,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiCommonModule,\n    NuiDialogModule,\n    NuiDocsModule,\n    NuiExpanderModule,\n    NuiIconModule,\n    NuiMenuModule,\n    NuiPaginatorModule,\n    NuiRepeatModule,\n    NuiSpinnerModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    TreeBasicExampleComponent,\n    TreeCheckboxExampleComponent,\n    TreeDialogContentExampleComponent,\n    TreeDocsExampleComponent,\n    TreeLazyExampleComponent,\n    TreeLeafPaginationExampleComponent,\n    TreeLoadMoreExampleComponent,\n    TreeShowAllDialogExampleComponent,\n    TreeStylingExampleComponent,\n    TreeVisualTestComponent,\n    TreeWithAdditionalContentExampleComponent\n} from \"./index\";\nimport { TreeCheckboxLazyComponent } from \"./tree-checkbox-lazy/tree-checkbox-lazy.component\";\nimport { TreeBasicTestComponent } from \"./tree-visual-test/tree-basic-test/tree-basic-test.component\";\nimport { TreeCheckboxTestComponent } from \"./tree-visual-test/tree-checkbox-test/tree-checkbox-test.component\";\nimport { TreePaginatorTestComponent } from \"./tree-visual-test/tree-paginator-test/tree-paginator-test.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TreeDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: TreeBasicExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"lazy\",\n        component: TreeLazyExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"leaf-pagination\",\n        component: TreeLeafPaginationExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"show-all-dialog\",\n        component: TreeShowAllDialogExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"styling\",\n        component: TreeStylingExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"with-additional-content\",\n        component: TreeWithAdditionalContentExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"checkbox\",\n        component: TreeCheckboxExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"checkbox-lazy\",\n        component: TreeCheckboxLazyComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"load-more\",\n        component: TreeLoadMoreExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"tree-visual-test\",\n        component: TreeVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        CdkTreeModule,\n        NuiDocsModule,\n        NuiCommonModule,\n        NuiIconModule,\n        NuiButtonModule,\n        NuiExpanderModule,\n        NuiButtonModule,\n        NuiMenuModule,\n        NuiSpinnerModule,\n        NuiCheckboxModule,\n        NuiPaginatorModule,\n        NuiDialogModule,\n        NuiRepeatModule,\n        NuiBusyModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        TreeBasicExampleComponent,\n        TreeDocsExampleComponent,\n        TreeStylingExampleComponent,\n        TreeVisualTestComponent,\n        TreeLazyExampleComponent,\n        TreeCheckboxExampleComponent,\n        TreeLeafPaginationExampleComponent,\n        TreeWithAdditionalContentExampleComponent,\n        TreeShowAllDialogExampleComponent,\n        TreeDialogContentExampleComponent,\n        TreeLoadMoreExampleComponent,\n        TreeBasicTestComponent,\n        TreeCheckboxTestComponent,\n        TreePaginatorTestComponent,\n        TreeCheckboxLazyComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n    entryComponents: [\n        TreeDialogContentExampleComponent,\n    ],\n})\nexport class TreeModule {\n}\n\n");

/***/ }),

/***/ "7JHD":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-filter/data-filter-basic/mocked-data.ts ***!
  \**************************************************************************************/
/*! exports provided: LIST_DATA, TABLE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_DATA", function() { return LIST_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_DATA", function() { return TABLE_DATA; });
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);

const LIST_DATA = [
    {
        issue: "Issue 1",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("01/02/2019", "MM/DD/YYYY"),
    },
    {
        issue: "Issue 2",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("01/11/2019", "MM/DD/YYYY"),
    },
    {
        issue: "Issue 3",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("02/12/2019", "MM/DD/YYYY"),
    },
    {
        issue: "Issue 4",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("01/02/2019", "MM/DD/YYYY"),
    },
    {
        issue: "Issue 5",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("02/10/2019", "MM/DD/YYYY"),
    },
];
const TABLE_DATA = [
    {
        position: 1,
        issue: "Issue 1",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("01/02/2019", "MM/DD/YYYY"),
    },
    {
        position: 2,
        issue: "Issue 2",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("01/11/2019", "MM/DD/YYYY"),
    },
    {
        position: 3,
        issue: "Issue 3",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("02/12/2019", "MM/DD/YYYY"),
    },
    {
        position: 4,
        issue: "Issue 4",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("01/02/2019", "MM/DD/YYYY"),
    },
    {
        position: 5,
        issue: "Issue 5",
        date: moment_moment__WEBPACK_IMPORTED_MODULE_0___default()("02/10/2019", "MM/DD/YYYY"),
    },
];


/***/ }),

/***/ "8/tt":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-with-hover/tag-with-hover.example.component.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-tag {\n    &-critical, &-warning, &-info, &-ok, &-default, .nui-tag-with-hover-styles {\n        border: none;\n    }\n}");

/***/ }),

/***/ "8NeV":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-leaf-pagination/tree-leaf-pagination.component.example.less ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n\n    .content-container {\n        min-height: 20px;\n    }\n}\n");

/***/ }),

/***/ "8Y+r":
/*!**************************************************************!*\
  !*** ./demo/src/components/demo/common/data-filter/index.ts ***!
  \**************************************************************/
/*! exports provided: DataFilterDocsExampleComponent, ListDatasource, TableDatasource, DataFilterBasicExampleComponent, NuiDataFilterTableComponent, NuiDataFilterListComponent, FilteringTimeFramePickerComponent, DataFilterTestComponent, DataFilterIsolatedExampleComponent, NuiDataFilterIsolatedTableComponent, NuiDataFilterIsolatedListComponent, FilteringIsolatedTimeFramePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_filter_docs_data_filter_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-filter-docs/data-filter-docs.example.component */ "XgtY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterDocsExampleComponent", function() { return _data_filter_docs_data_filter_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["DataFilterDocsExampleComponent"]; });

/* harmony import */ var _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-filter-basic/data-filter-basic.example.component */ "uG0b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDatasource", function() { return _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["ListDatasource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableDatasource", function() { return _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["TableDatasource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterBasicExampleComponent", function() { return _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["DataFilterBasicExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterTableComponent", function() { return _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["NuiDataFilterTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterListComponent", function() { return _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["NuiDataFilterListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilteringTimeFramePickerComponent", function() { return _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["FilteringTimeFramePickerComponent"]; });

/* harmony import */ var _data_filter_test_data_filter_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-filter-test/data-filter-test.component */ "lIMJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterTestComponent", function() { return _data_filter_test_data_filter_test_component__WEBPACK_IMPORTED_MODULE_2__["DataFilterTestComponent"]; });

/* harmony import */ var _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-filter-isolated/data-filter-isolated.example.component */ "oA+X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterIsolatedExampleComponent", function() { return _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__["DataFilterIsolatedExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterIsolatedTableComponent", function() { return _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__["NuiDataFilterIsolatedTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterIsolatedListComponent", function() { return _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__["NuiDataFilterIsolatedListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilteringIsolatedTimeFramePickerComponent", function() { return _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__["FilteringIsolatedTimeFramePickerComponent"]; });







/***/ }),

/***/ "8YnH":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-color/tag-color.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-tag nui-tag-critical nui-tag-text-light mr-1\">Tag critical</div>\n<div class=\"nui-tag nui-tag-warning mr-1\">Tag warning</div>\n<div class=\"nui-tag nui-tag-info nui-tag-text-light mr-1\">Tag info</div>\n<div class=\"nui-tag nui-tag-ok nui-tag-text-light mr-1\">Tag ok</div>\n<div class=\"nui-tag nui-tag-default mr-1\">Tag default</div>\n");

/***/ }),

/***/ "8jcL":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./data-filter-docs/data-filter-docs.example.component\";\nexport * from \"./data-filter-basic/data-filter-basic.example.component\";\nexport * from \"./data-filter-test/data-filter-test.component\";\nexport * from \"./data-filter-isolated/data-filter-isolated.example.component\";\n");

/***/ }),

/***/ "8k+f":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-docs/data-filter-docs.example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><code>DataFilterService</code> provides a mechanism of filtering data in hierarchical components.</p>\n<h2>Basic Usage</h2>\n<p>To use <code>DataFilterService</code> do following steps:</p>\n<ol>\n    <li>\n        Provide <code>DataFilterService</code> into providers of your parent and child components.\n    </li>\n    <li>\n        Register filters using <code>this.filterService.registerFilter()</code> function and pass\n        <a href=\"../interfaces/IFilteringParticipants.html\" target=\"_blank\"><code>IFilteringParticipants</code></a>\n        as a parameter.\n    </li>\n    <li>\n        Call <code>this.filterService.applyFilters()</code> function to apply filters on components which are used for\n        filtering.\n    </li>\n    <li>\n        Create custom <code>DataSource</code> (in our case we are extending\n        <a href=\"../injectables/LocalFilteringDataSource.html\" target=\"_blank\"><code>LocalFilteringDataSource</code></a>)\n        and inside that service inject <code>DataFilterService</code> and subscribe to <code>this.filterService.filteringSubject</code>\n        in constructor of your <code>DataSource</code> service.\n        <code>this.filterService.filteringSubject</code> will be emitted when <code>this.filterService.applyFilters()</code>\n        will be called in your component.\n    </li>\n    <li>\n        Perform filtering in your <code>DataSource</code> service. To make this happen in your custom\n        <code>DataSource</code> use <code>this.filterService.getFilters()</code> function to get filter\n        state of your component. You can see it in action in the example below (in <code>getFilteredData</code>\n        function in <code>DataSource</code>).\n    </li>\n</ol>\n<p>More details about multi-level filtering mechanism are available\n    <a target=\"_blank\" href=\"https://cp.solarwinds.com/pages/viewpage.action?spaceKey=NU&title=Filterable+Datasources\">here</a>.\n</p>\n<nui-example-wrapper filenamePrefix=\"data-filter-basic\" exampleTitle=\"Basic Usage\">\n    <nui-data-filter-basic-example></nui-data-filter-basic-example>\n</nui-example-wrapper>\n<h2>Isolated Filters</h2>\n<p>In this example you can see two components with <code>nui-search</code> which are independent from each other.\n    This is possible because of properly created component tree. Each component has its own\n    <code>DataFilterService</code>. This <code>DataFilterService</code> has reference to its parent and\n    doesn't have any references to sibling  components. It happens because in the example below we injected\n    <code>DataFilterService</code> in providers of each component and Angular creates correct DI tree.\n</p>\n<nui-example-wrapper filenamePrefix=\"data-filter-isolated\" exampleTitle=\"Isolated Filters\">\n    <nui-data-filter-isolated-example></nui-data-filter-isolated-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "AUYk":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-system-statuses/badge-system-statuses.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-system-statuses\",\n    templateUrl: \"./badge-system-statuses.component.html\",\n    styleUrls: [\"./badge-system-statuses.component.less\"],\n})\nexport class BadgeSystemStatusesComponent {\n}\n");

/***/ }),

/***/ "Aob3":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/event-propagation-service/event-propagation-service.example.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { EventPropagationService, IEventPropagationService, IToastService, ToastService } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-event-propagation-service-example\",\n    templateUrl: \"./event-propagation-service.example.component.html\",\n})\nexport class EventPropagationServiceExampleComponent {\n\n    constructor(@Inject(EventPropagationService) private eventPropagationService: IEventPropagationService,\n                @Inject(ToastService) private toastService: IToastService) {\n    }\n\n    public handleClick (event: Event): void {\n        const target = <Element>event.target;\n        this.toastService.clear();\n        if (this.eventPropagationService.targetShouldPropagate(event)) {\n            this.toastService.success({\n                message: \"Event Target Tag Name: \" + target.tagName,\n                title: \"Event Propagates!\",\n            });\n        } else {\n            this.toastService.warning({\n                message: \"Event Target Tag Name: \" + target.tagName,\n                title: \"Event Doesn't Propagate!\",\n            });\n        }\n    }\n}\n");

/***/ }),

/***/ "BRgb":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/common/scroll-shadows/scroll-shadows.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ScrollShadowsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollShadowsExampleComponent", function() { return ScrollShadowsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ScrollShadowsExampleComponent {
}
ScrollShadowsExampleComponent.ɵfac = function ScrollShadowsExampleComponent_Factory(t) { return new (t || ScrollShadowsExampleComponent)(); };
ScrollShadowsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollShadowsExampleComponent, selectors: [["nui-scroll-shadows-example"]], decls: 52, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8871081259138824232$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SCROLL_SHADOWS_SCROLL_SHADOWS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Aerials");
        i18n_0 = MSG_EXTERNAL_8871081259138824232$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SCROLL_SHADOWS_SCROLL_SHADOWS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟edea481f91f05b546a4cba70e3b01a036da2fe01␟8871081259138824232:Aerials`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5399266461611612281$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SCROLL_SHADOWS_SCROLL_SHADOWS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("System of a Down");
        i18n_2 = MSG_EXTERNAL_5399266461611612281$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SCROLL_SHADOWS_SCROLL_SHADOWS_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟95d18b4c60050fc35790856978fae74f3d23b87a␟5399266461611612281:System of a Down`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4798880168943712278$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SCROLL_SHADOWS_SCROLL_SHADOWS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" Life is a waterfall{$lineBreak} We're one in the river{$lineBreak} And one again after the fall{$lineBreak} Swimming through the void{$lineBreak} We hear the word{$lineBreak} We lose ourselves{$lineBreak} But we find it all?{$lineBreak} 'Cause we are the ones that want to play{$lineBreak} Always want to go{$lineBreak} But you never want to stay{$lineBreak} And we are the ones that want to choose{$lineBreak} Always want to play{$lineBreak} But you never want to lose{$lineBreak} Aerials in the sky{$lineBreak} When you lose small mind{$lineBreak} You free your life{$lineBreak} Life is a waterfall{$lineBreak} We drink from the river{$lineBreak} Then we turn around and put up our walls{$lineBreak} Swimming through the void{$lineBreak} We hear the word{$lineBreak} We lose ourselves{$lineBreak} But we find it all?{$lineBreak} 'Cause we are the ones that want to play{$lineBreak} Always want to go{$lineBreak} But you never want to stay{$lineBreak} And we are the ones that want to choose{$lineBreak} Always want to play{$lineBreak} But you never want to lose{$lineBreak} Aerials in the sky{$lineBreak} When you lose small mind{$lineBreak} You free your life{$lineBreak} Aerials so up high{$lineBreak} When you free your eyes{$lineBreak} Eternal prize{$lineBreak} Aerials in the sky{$lineBreak} When you lose small mind{$lineBreak} You free your life{$lineBreak} Aerials so up high{$lineBreak} When you free your eyes{$lineBreak} Eternal prize{$lineBreak}", { "lineBreak": "[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]" });
        i18n_4 = MSG_EXTERNAL_4798880168943712278$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SCROLL_SHADOWS_SCROLL_SHADOWS_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟65ed1d70c96e765d7495d06270748916ced7645b␟4798880168943712278: Life is a waterfall${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: We're one in the river${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: And one again after the fall${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Swimming through the void${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: We hear the word${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: We lose ourselves${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: But we find it all?${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: 'Cause we are the ones that want to play${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Always want to go${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: But you never want to stay${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: And we are the ones that want to choose${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Always want to play${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: But you never want to lose${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Aerials in the sky${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: When you lose small mind${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: You free your life${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Life is a waterfall${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: We drink from the river${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Then we turn around and put up our walls${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Swimming through the void${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: We hear the word${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: We lose ourselves${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: But we find it all?${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: 'Cause we are the ones that want to play${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Always want to go${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: But you never want to stay${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: And we are the ones that want to choose${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Always want to play${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: But you never want to lose${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Aerials in the sky${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: When you lose small mind${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: You free your life${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Aerials so up high${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: When you free your eyes${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Eternal prize${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Aerials in the sky${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: When you lose small mind${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: You free your life${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Aerials so up high${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: When you free your eyes${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK: Eternal prize${"[\uFFFD#11\uFFFD\uFFFD/#11\uFFFD|\uFFFD#12\uFFFD\uFFFD/#12\uFFFD|\uFFFD#13\uFFFD\uFFFD/#13\uFFFD|\uFFFD#14\uFFFD\uFFFD/#14\uFFFD|\uFFFD#15\uFFFD\uFFFD/#15\uFFFD|\uFFFD#16\uFFFD\uFFFD/#16\uFFFD|\uFFFD#17\uFFFD\uFFFD/#17\uFFFD|\uFFFD#18\uFFFD\uFFFD/#18\uFFFD|\uFFFD#19\uFFFD\uFFFD/#19\uFFFD|\uFFFD#20\uFFFD\uFFFD/#20\uFFFD|\uFFFD#21\uFFFD\uFFFD/#21\uFFFD|\uFFFD#22\uFFFD\uFFFD/#22\uFFFD|\uFFFD#23\uFFFD\uFFFD/#23\uFFFD|\uFFFD#24\uFFFD\uFFFD/#24\uFFFD|\uFFFD#25\uFFFD\uFFFD/#25\uFFFD|\uFFFD#26\uFFFD\uFFFD/#26\uFFFD|\uFFFD#27\uFFFD\uFFFD/#27\uFFFD|\uFFFD#28\uFFFD\uFFFD/#28\uFFFD|\uFFFD#29\uFFFD\uFFFD/#29\uFFFD|\uFFFD#30\uFFFD\uFFFD/#30\uFFFD|\uFFFD#31\uFFFD\uFFFD/#31\uFFFD|\uFFFD#32\uFFFD\uFFFD/#32\uFFFD|\uFFFD#33\uFFFD\uFFFD/#33\uFFFD|\uFFFD#34\uFFFD\uFFFD/#34\uFFFD|\uFFFD#35\uFFFD\uFFFD/#35\uFFFD|\uFFFD#36\uFFFD\uFFFD/#36\uFFFD|\uFFFD#37\uFFFD\uFFFD/#37\uFFFD|\uFFFD#38\uFFFD\uFFFD/#38\uFFFD|\uFFFD#39\uFFFD\uFFFD/#39\uFFFD|\uFFFD#40\uFFFD\uFFFD/#40\uFFFD|\uFFFD#41\uFFFD\uFFFD/#41\uFFFD|\uFFFD#42\uFFFD\uFFFD/#42\uFFFD|\uFFFD#43\uFFFD\uFFFD/#43\uFFFD|\uFFFD#44\uFFFD\uFFFD/#44\uFFFD|\uFFFD#45\uFFFD\uFFFD/#45\uFFFD|\uFFFD#46\uFFFD\uFFFD/#46\uFFFD|\uFFFD#47\uFFFD\uFFFD/#47\uFFFD|\uFFFD#48\uFFFD\uFFFD/#48\uFFFD|\uFFFD#49\uFFFD\uFFFD/#49\uFFFD|\uFFFD#50\uFFFD\uFFFD/#50\uFFFD|\uFFFD#51\uFFFD\uFFFD/#51\uFFFD]"}:LINE_BREAK:`;
    } i18n_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](i18n_4); return [[2, "width", "320px"], [1, "nui-scroll-shadows", 2, "height", "400px", "overflow-y", "auto", "padding", "0 5px", "border", "1px solid #ccc"], [2, "text-align", "center"], i18n_0, i18n_2, [2, "margin", "auto 10px"], i18n_4]; }, template: function ScrollShadowsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "BU2E":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-checkbox/tree-checkbox.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between\">\n    <cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" style=\"flex: 50%;\">\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n            <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n            <nui-checkbox class=\"leaf-control\"\n                          [checked]=\"selectionModel.isSelected(node)\"\n                          (valueChange)=\"leafItemSelectionToggle(node)\">{{node.name}}</nui-checkbox>\n        </cdk-nested-tree-node>\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n            <div class=\"nui-tree__header\" cdkTreeNodeToggle>\n                <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n                <nui-checkbox class=\"branch-control\"\n                              (click)=\"$event.stopPropagation()\"\n                              [checked]=\"descendantsAllSelected(node)\"\n                              [indeterminate]=\"descendantsPartiallySelected(node)\"\n                              (valueChange)=\"branchItemSelectionToggle(node)\">{{node.item}}</nui-checkbox>\n                <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n            </div>\n            <div class=\"nui-tree__body\"\n                 [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n                 [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n                <ng-container cdkTreeNodeOutlet></ng-container>\n            </div>\n        </cdk-nested-tree-node>\n    </cdk-tree>\n\n    <ul class=\"list-group list-group-striped\" style=\"flex: 50%;\">\n        <li class=\"list-group-item\"\n            *ngFor=\"let selected of selectionModel.selected\">\n            {{ selected.name }}\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "CjZ5":
/*!**************************************************!*\
  !*** ./demo/src/components/demo/common/index.ts ***!
  \**************************************************/
/*! exports provided: ClipboardExampleComponent, DataFilterDocsExampleComponent, ListDatasource, TableDatasource, DataFilterBasicExampleComponent, NuiDataFilterTableComponent, NuiDataFilterListComponent, FilteringTimeFramePickerComponent, DataFilterTestComponent, DataFilterIsolatedExampleComponent, NuiDataFilterIsolatedTableComponent, NuiDataFilterIsolatedListComponent, FilteringIsolatedTimeFramePickerComponent, DataSourceExampleComponent, DepreacatedDataSourceClientSideBasicExampleComponent, DepreacatedDataSourceClientSideFilteringExampleComponent, DepreacatedDataSourceClientSideDelayedExampleComponent, DepreacatedDataSourceWithSelectionExampleComponent, ClientSideCustomSearchService, DepreacatedDataSourceClientSideCustomSearchExampleComponent, EdgeDetectionServiceExampleComponent, EventPropagationServiceExampleComponent, ScrollShadowsExampleComponent, SearchServiceExampleComponent, SetFocusExampleComponent, WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clipboard_clipboard_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard/clipboard.example.component */ "KRMV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardExampleComponent", function() { return _clipboard_clipboard_example_component__WEBPACK_IMPORTED_MODULE_0__["ClipboardExampleComponent"]; });

/* harmony import */ var _data_filter_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-filter/index */ "8Y+r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterDocsExampleComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["DataFilterDocsExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListDatasource", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["ListDatasource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableDatasource", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["TableDatasource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterBasicExampleComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["DataFilterBasicExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterTableComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["NuiDataFilterTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterListComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["NuiDataFilterListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilteringTimeFramePickerComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["FilteringTimeFramePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterTestComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["DataFilterTestComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFilterIsolatedExampleComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["DataFilterIsolatedExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterIsolatedTableComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["NuiDataFilterIsolatedTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterIsolatedListComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["NuiDataFilterIsolatedListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilteringIsolatedTimeFramePickerComponent", function() { return _data_filter_index__WEBPACK_IMPORTED_MODULE_1__["FilteringIsolatedTimeFramePickerComponent"]; });

/* harmony import */ var _data_source_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-source/index */ "OsgS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceExampleComponent", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["DataSourceExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideBasicExampleComponent", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["DepreacatedDataSourceClientSideBasicExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideFilteringExampleComponent", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["DepreacatedDataSourceClientSideFilteringExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideDelayedExampleComponent", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["DepreacatedDataSourceClientSideDelayedExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceWithSelectionExampleComponent", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["DepreacatedDataSourceWithSelectionExampleComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientSideCustomSearchService", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["ClientSideCustomSearchService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideCustomSearchExampleComponent", function() { return _data_source_index__WEBPACK_IMPORTED_MODULE_2__["DepreacatedDataSourceClientSideCustomSearchExampleComponent"]; });

/* harmony import */ var _edge_detection_service_edge_detection_service_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edge-detection-service/edge-detection-service.example.component */ "xi77");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EdgeDetectionServiceExampleComponent", function() { return _edge_detection_service_edge_detection_service_example_component__WEBPACK_IMPORTED_MODULE_3__["EdgeDetectionServiceExampleComponent"]; });

/* harmony import */ var _event_propagation_service_event_propagation_service_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-propagation-service/event-propagation-service.example.component */ "jI/u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPropagationServiceExampleComponent", function() { return _event_propagation_service_event_propagation_service_example_component__WEBPACK_IMPORTED_MODULE_4__["EventPropagationServiceExampleComponent"]; });

/* harmony import */ var _scroll_shadows_scroll_shadows_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-shadows/scroll-shadows.example.component */ "BRgb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollShadowsExampleComponent", function() { return _scroll_shadows_scroll_shadows_example_component__WEBPACK_IMPORTED_MODULE_5__["ScrollShadowsExampleComponent"]; });

/* harmony import */ var _search_service_search_service_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-service/search-service.example.component */ "Inoq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchServiceExampleComponent", function() { return _search_service_search_service_example_component__WEBPACK_IMPORTED_MODULE_6__["SearchServiceExampleComponent"]; });

/* harmony import */ var _set_focus_set_focus_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set-focus/set-focus.example.component */ "DyWZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetFocusExampleComponent", function() { return _set_focus_set_focus_example_component__WEBPACK_IMPORTED_MODULE_7__["SetFocusExampleComponent"]; });

/* harmony import */ var _welcome_welcome_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome-page.component */ "aZxA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return _welcome_welcome_page_component__WEBPACK_IMPORTED_MODULE_8__["WelcomePageComponent"]; });












/***/ }),

/***/ "Cmzk":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-basic/tag-basic.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-tag\">\n    Tag label\n</div>");

/***/ }),

/***/ "CuH8":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-isolated/data-filter-isolated.example.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid black\">\n    <nui-filtering-isolated-time-frame-picker (timeFrameChanged)=\"applyFilters()\"\n                                              #timeFramePicker></nui-filtering-isolated-time-frame-picker>\n    <nui-divider size=\"extra-small\"></nui-divider>\n    <div class=\"d-flex\">\n        <div class=\"col m-3 pt-3\" style=\"border: 1px solid red\">\n            <nui-data-filter-isolated-table-example></nui-data-filter-isolated-table-example>\n        </div>\n        <div class=\"col m-3 pt-3\" style=\"border: 1px solid green\">\n            <nui-data-filter-isolated-list-example></nui-data-filter-isolated-list-example>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "DY+K":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-styling/tree-styling.example.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        <nui-icon class=\"nui-tree__icon\" *ngIf=\"node.icon\" [icon]=\"node.icon\"></nui-icon>\n        <span class=\"{{node.textStyle || textStyles.DEFAULT}}\">{{node.name}}</span>\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\" cdkTreeNodeToggle>\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <nui-icon class=\"nui-tree__icon\" *ngIf=\"node.icon\" [icon]=\"node.icon\"></nui-icon>\n            <span i18n class=\"nui-tree__header-title {{node.textStyle || textStyles.LABEL}}\">{{ node.name }}</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "DsA0":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-filtering/client-side-filtering.example.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, Component, Inject, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    DataSourceService, IFilter, IMenuItem, IMultiFilterMetadata, INovaFilteringOutputs,\n    ISorterChanges, LocalFilteringDataSource, PaginatorComponent, RepeatComponent, SearchComponent, SorterComponent, SorterDirection\n} from \"@nova-ui/bits\";\nimport _get from \"lodash/get\";\nimport _isEmpty from \"lodash/isEmpty\";\nimport { Subscription } from \"rxjs\";\n\ninterface ExampleItem {\n    color: string;\n    status: string;\n}\n\ninterface IconsOptions {\n    [key: string]: {\n        iconName: string;\n    };\n}\n\ninterface ExpanderOptions {\n    expanded: boolean;\n    header: string;\n}\n\ninterface PanelOptions {\n    panelMode: string;\n    heading: string;\n}\n\nconst RANDOM_ARRAY = [\n    { color: \"regular-blue\", status: \"Critical\" },\n    { color: \"regular-green\", status: \"Warning\" },\n    { color: \"regular-yellow\", status: \"Up\" },\n    { color: \"regular-cyan \", status: \"Critical\" },\n    { color: \"regular-magenta\", status: \"Warning\" },\n    { color: \"regular-black\", status: \"Up\" },\n    { color: \"regular-orange\", status: \"Up\" },\n    { color: \"regular-rose\", status: \"Up\" },\n    { color: \"regular-violet\", status: \"Up\" },\n    { color: \"regular-azure\", status: \"Critical\" },\n    { color: \"dark-blue\", status: \"Warning\" },\n    { color: \"dark-green\", status: \"Up\" },\n    { color: \"dark-yellow\", status: \"Critical\" },\n    { color: \"dark-cyan \", status: \"Warning\" },\n    { color: \"dark-magenta\", status: \"Up\" },\n    { color: \"dark-black\", status: \"Critical\" },\n    { color: \"dark-orange\", status: \"Warning\" },\n    { color: \"dark-rose\", status: \"Up\" },\n    { color: \"dark-violet\", status: \"Critical\" },\n    { color: \"dark-azure\", status: \"Warning\" },\n    { color: \"light-blue\", status: \"Up\" },\n    { color: \"light-green\", status: \"Critical\" },\n    { color: \"light-yellow\", status: \"Warning\" },\n    { color: \"light-cyan\", status: \"Up\" },\n    { color: \"light-magenta\", status: \"Critical\" },\n    { color: \"light-black\", status: \"Warning\" },\n    { color: \"light-orange\", status: \"Up\" },\n    { color: \"light-rose\", status: \"Critical\" },\n    { color: \"light-violet\", status: \"Warning\" },\n    { color: \"light-azure\", status: \"Up\" },\n];\n\n/**\n * @TODO Migrate LocalFilteringDataSource to ClientSideDataSource\n */\n@Component({\n    selector: \"nui-client-side-filtering-data-source-example\",\n    templateUrl: \"./client-side-filtering.example.component.html\",\n    styleUrls: [\"./client-side-filtering.example.component.less\"],\n    providers: [{\n        provide: DataSourceService,\n        useClass: LocalFilteringDataSource,\n    }],\n})\nexport class DataSourceClientSideFilteringExampleComponent implements AfterViewInit, OnDestroy {\n\n    public panelOptions: PanelOptions = {\n        panelMode: \"collapsible\",\n        heading: \"Filters\",\n    };\n\n    public colorExpanderOptions: ExpanderOptions = {\n        expanded: true,\n        header: \"Colors\",\n    };\n\n    public statusExpanderOptions: ExpanderOptions = {\n        expanded: true,\n        header: \"Statuses\",\n    };\n\n    public statusIcons: IconsOptions = {\n        \"Critical\": { iconName: \"status_critical\" },\n        \"Warning\": { iconName: \"status_warning\" },\n        \"Up\": { iconName: \"status_up\" },\n    };\n\n    public colorIcons: IconsOptions = {\n        \"azure\": { iconName: \"record\" },\n        \"black\": { iconName: \"status_up\" },\n        \"blue\": { iconName: \"signal-0\" },\n        \"cyan\": { iconName: \"signal-0\" },\n        \"green\": { iconName: \"signal-1\" },\n        \"orange\": { iconName: \"signal-2\" },\n        \"rose\": { iconName: \"signal-0\" },\n        \"violet\": { iconName: \"signal-0\" },\n        \"yellow\": { iconName: \"signal-0\" },\n        \"brown\": { iconName: \"signal-0\" },\n    };\n\n    public allStatuses: string[] = [\n        \"Warning\",\n        \"Critical\",\n        \"Up\",\n    ];\n\n    public allColors: string[] = [\n        \"azure\",\n        \"black\",\n        \"blue\",\n        \"cyan\",\n        \"green\",\n        \"orange\",\n        \"rose\",\n        \"violet\",\n        \"yellow\",\n        \"brown\",\n    ];\n\n    public selectedColorTypes: string[] = [\n        \"Up\",\n    ];\n\n    public selectedCriteriaColors: string[] = [\n        \"azure\",\n    ];\n\n    public readonly sorterItems: IMenuItem[] = [\n        {\n            title: $localize`Color`,\n            value: \"color\",\n        },\n    ];\n\n    public readonly initialSortDirection = SorterDirection.ascending;\n    public sortBy = this.sorterItems[0].value;\n\n    // By convention this is the object that will contain results of filtering, it should contain the same keys as registered components\n    // We're using this object to bind to template items/paginator/filtering data\n    public filteringState: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        color: [], // This will contain objects like {}\n        status: [],\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n    public page: number = 1;\n    public searchTerm: string = \"\";\n    public chosenColors: string[] = [];\n    public chosenStatuses: string[] = [];\n\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n    @ViewChild(\"filteringSorter\") filteringSorter: SorterComponent;\n    @ViewChild(\"filteringRepeat\") filteringRepeat: RepeatComponent;\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(@Inject(DataSourceService) public dataSourceService: LocalFilteringDataSource<ExampleItem>) {\n        this.dataSourceService.setData(RANDOM_ARRAY);\n    }\n\n    async ngAfterViewInit() {\n        this.chosenColors = [...this.selectedCriteriaColors];\n        this.chosenStatuses = [...this.selectedColorTypes];\n        this.dataSourceService.registerComponent({ ...this.registerComponents() });\n\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.filteringState = data;\n            if (data && data.paginator && data.paginator.reset) {\n                // This allows to go back to first page after filtering/search/sorting has changed\n                this.filteringPaginator.goToPage(1);\n            }\n        });\n\n        await this.applyFilters();\n    }\n\n    ngOnDestroy() {\n        if (this.outputsSubscription) {\n            this.outputsSubscription.unsubscribe();\n        }\n    }\n\n    private registerComponents = () => ({\n        // Here we're registering color and status filters\n        color: {\n            componentInstance: {\n                // mark this filter to be monitored by our datasource for any changes in order reset other filters(eg: pagination)\n                // before any new search is performed\n                detectFilterChanges: true,\n                getFilters: () => <IFilter<string[], IMultiFilterMetadata>>({\n                    type: \"string[]\",\n                    value: this.chosenColors,\n                    metadata: {\n                        allCategories: this.allColors,\n                    },\n                }),\n            },\n        },\n        status: {\n            componentInstance: {\n                // mark this filter to be monitored by our datasource for any changes in order reset other filters(eg: pagination)\n                // before any new search is performed\n                detectFilterChanges: true,\n                getFilters: () => <IFilter<string[], IMultiFilterMetadata>>({\n                    type: \"string[]\",\n                    value: this.chosenStatuses,\n                    metadata: {\n                        allCategories: this.allStatuses,\n                    },\n                }),\n            },\n        },\n        search: {\n            componentInstance: this.filteringSearch,\n        },\n        sorter: {\n            componentInstance: this.filteringSorter,\n        },\n        paginator: {\n            componentInstance: this.filteringPaginator,\n        },\n    })\n\n    public async applyFilters() {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async onSorterAction(changes: ISorterChanges) {\n        this.sortBy = changes.newValue.sortBy;\n        await this.applyFilters();\n    }\n\n    public async onSelectedCriteriaChange($event: string[]) {\n        this.chosenColors = $event;\n        await this.applyFilters();\n    }\n\n    public async onSelectedColorTypesChange($event: string[]) {\n        this.chosenStatuses = $event;\n        await this.applyFilters();\n    }\n\n    public isColorCriteriaChecked(color: string): boolean {\n        return this.selectedCriteriaColors.indexOf(color) > -1;\n    }\n\n    public isColorTypeChecked(status: string): boolean {\n        return this.selectedColorTypes.indexOf(status) > -1;\n    }\n\n    public hasItems(): boolean {\n        return !_isEmpty(_get(this, \"filteringState.repeat.itemsSource\"));\n    }\n\n    public showStatus(status: string) {\n        return this.filteringState.status ? this.filteringState.status[status] : this.filteringState.status;\n    }\n\n    public showColor(color: string) {\n        return this.filteringState.color ? this.filteringState.color[color] : this.filteringState.color;\n    }\n\n    public isGreaterThanZero(amount: number): boolean {\n        return amount > 0;\n    }\n\n}\n");

/***/ }),

/***/ "DyWZ":
/*!**********************************************************************************!*\
  !*** ./demo/src/components/demo/common/set-focus/set-focus.example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SetFocusExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFocusExampleComponent", function() { return SetFocusExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/radio/radio-group.component */ "lLUT");
/* harmony import */ var _src_common_directives_set_focus_set_focus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/common/directives/set-focus/set-focus.directive */ "IoYV");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");





class SetFocusExampleComponent {
    constructor() {
        this.choiceState = "carrot";
        this.carrotFocused = false;
        this.onionFocused = false;
        this.interval = 2000;
    }
    updateChoiceState(event) {
        this.choiceState = event;
    }
    setCarrotFocus() {
        this.carrotFocused = true;
        setTimeout(() => {
            this.carrotFocused = false;
        }, this.interval);
    }
    setOnionFocus() {
        this.onionFocused = true;
        setTimeout(() => {
            this.onionFocused = false;
        }, this.interval);
    }
}
SetFocusExampleComponent.ɵfac = function SetFocusExampleComponent_Factory(t) { return new (t || SetFocusExampleComponent)(); };
SetFocusExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetFocusExampleComponent, selectors: [["nui-set-focus-example"]], decls: 16, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4602342255117194264$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg(" carrot ");
        i18n_0 = MSG_EXTERNAL_4602342255117194264$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟ea6ccc80f95508a2f05a37eaf79665689597594f␟4602342255117194264: carrot `;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2865069090310580181$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg(" onion ");
        i18n_2 = MSG_EXTERNAL_2865069090310580181$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟336a3cc7a88b15311b80cdc4ee6f84e82a8f968c␟2865069090310580181: onion `;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2568677045759335924$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg(" temporary carrot focus ");
        i18n_4 = MSG_EXTERNAL_2568677045759335924$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟32d5b199a98294ed0cdc9c33fa5ad8ec82a24af3␟2568677045759335924: temporary carrot focus `;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1960816035833689365$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" temporary onion focus ");
        i18n_6 = MSG_EXTERNAL_1960816035833689365$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟b64c9eaf5a206658894feb947bfd6aa4de25110e␟1960816035833689365: temporary onion focus `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4828493137687861410$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("carrot focused: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_8 = MSG_EXTERNAL_4828493137687861410$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟700ff0801ae8e44b00130c650f422bb03adcdbb7␟4828493137687861410:carrot focused: ${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4022825747133439188$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("onion focused: {$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
        i18n_10 = MSG_EXTERNAL_4022825747133439188$$DEMO_SRC_COMPONENTS_DEMO_COMMON_SET_FOCUS_SET_FOCUS_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟aa4adba290d293eec2d92fd2d9270e5c4df5ac7a␟4022825747133439188:onion focused: ${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
    } return [[1, "nui"], ["id", "nui-demo-setfocus-radio-carrot", "value", "carrot", "checked", "", 3, "nuiSetFocus"], i18n_0, ["id", "nui-demo-setfocus-radio-onion", "value", "onion", 3, "nuiSetFocus"], i18n_2, ["id", "nui-demo-setfocus-button-carrot", "nui-button", "", "type", "button", 3, "click"], i18n_4, ["id", "nui-demo-setfocus-button-onion", "nui-button", "", "type", "button", 3, "click"], i18n_6, i18n_8, i18n_10]; }, template: function SetFocusExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-radio-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-radio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-radio", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetFocusExampleComponent_Template_button_click_8_listener() { return ctx.setCarrotFocus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetFocusExampleComponent_Template_button_click_10_listener() { return ctx.setOnionFocus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiSetFocus", ctx.carrotFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiSetFocus", ctx.onionFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.carrotFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx.onionFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](15);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioGroupComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_2__["RadioComponent"], _src_common_directives_set_focus_set_focus_directive__WEBPACK_IMPORTED_MODULE_3__["SetFocusDirective"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "EDqv":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-delayed/client-side-delayed.example.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    ClientSideDataSource,\n    INovaFilteringOutputs, PaginatorComponent, SearchComponent, SorterComponent\n} from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { Subscription } from \"rxjs\";\nimport { debounceTime } from \"rxjs/operators\";\n\nconst INITIAL_ARRAY = [\n    {color: \"regular-blue\"},\n    {color: \"regular-green\"},\n    {color: \"regular-yellow\"},\n    {color: \"regular-cyan\"},\n    {color: \"regular-magenta\"},\n    {color: \"regular-black\"},\n    {color: \"dark-blue\"},\n    {color: \"dark-green\"},\n    {color: \"dark-yellow\"},\n    {color: \"dark-cyan\"},\n    {color: \"dark-magenta\"},\n    {color: \"light-blue\"},\n    {color: \"light-green\"},\n    {color: \"light-yellow\"},\n    {color: \"light-cyan\"},\n    {color: \"light-magenta\"},\n];\n\n@Component({\n    selector: \"nui-client-side-delayed-data-source-example\",\n    providers: [ClientSideDataSource],\n    templateUrl: \"./client-side-delayed.example.component.html\",\n})\nexport class DataSourceClientSideDelayedExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n    public sorter = {\n        columns: [\"color\", \"red\", \"green\", \"blue\"],\n        sortedColumn: \"color\",\n        direction: \"asc\",\n    };\n\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n\n    public filters: any[];\n    public selectedFilters: any[];\n\n    private delayActionSubject: Subject<any> = new Subject();\n    private outputsSubscription: Subscription;\n\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n    @ViewChild(\"filteringSorter\") filteringSorter: SorterComponent;\n\n    constructor(public dataSourceService: ClientSideDataSource<any>,\n                public changeDetection: ChangeDetectorRef) {\n        dataSourceService.setData(INITIAL_ARRAY);\n\n        this.filters = [\"regular\", \"dark\", \"light\"];\n        this.selectedFilters = [];\n    }\n\n    async ngAfterViewInit() {\n        this.dataSourceService.componentTree = {\n            search: {\n                componentInstance: this.filteringSearch,\n            },\n            paginator: {\n                componentInstance: this.filteringPaginator,\n            },\n        };\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = data;\n            this.changeDetection.detectChanges();\n        });\n        this.delayActionSubject.pipe(debounceTime(500)).subscribe(() => {\n            this.dataSourceService.applyFilters();\n        });\n\n        await this.dataSourceService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public onSearch() {\n        this.delayActionSubject.next();\n    }\n\n    public async changePagination() {\n        await this.dataSourceService.applyFilters();\n    }\n\n}\n");

/***/ }),

/***/ "Eh+W":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/set-focus/set-focus.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-set-focus-example\",\n    templateUrl: \"./set-focus.example.component.html\",\n})\nexport class SetFocusExampleComponent {\n    public choiceState = \"carrot\";\n    public carrotFocused = false;\n    public onionFocused = false;\n    private interval = 2000;\n\n    public updateChoiceState(event: any) {\n        this.choiceState = event;\n    }\n\n    public setCarrotFocus(): void {\n        this.carrotFocused = true;\n        setTimeout(() => {\n            this.carrotFocused = false;\n        }, this.interval);\n    }\n\n    public setOnionFocus(): void {\n        this.onionFocused = true;\n        setTimeout(() => {\n            this.onionFocused = false;\n        }, this.interval);\n    }\n}\n");

/***/ }),

/***/ "FF7H":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-color-black/badge-color-black.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-color-black\",\n    templateUrl: \"./badge-color-black.component.html\",\n    styleUrls: [\"./badge-color-black.component.less\"],\n})\nexport class BadgeColorBlackComponent {\n}\n");

/***/ }),

/***/ "FJF3":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-novaui/badge-novaui.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-novaui\",\n    templateUrl: \"./badge-novaui.component.html\",\n    styleUrls: [\"./badge-novaui.component.less\"],\n})\nexport class BadgeNovauiComponent {\n    buttonCounter = \"1\";\n    textboxCounter = \"1\";\n}\n");

/***/ }),

/***/ "G7E/":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-color/tag-color.example.component.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-tag {\n    border: none;\n}");

/***/ }),

/***/ "G8qU":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-basic/tree-basic.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        {{node.name}}\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\" cdkTreeNodeToggle>\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "GKtr":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-counter-basic/badge-counter-basic.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-counter-basic\",\n    templateUrl: \"./badge-counter-basic.component.html\",\n    styleUrls: [\"./badge-counter-basic.component.less\"],\n})\nexport class BadgeCounterBasicComponent {\n    counter = \"1\";\n}\n");

/***/ }),

/***/ "GX8n":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./badge-color-black/badge-color-black.component\";\nexport * from \"./badge-counter-basic/badge-counter-basic.component\";\nexport * from \"./badge-counter-basic/badge-counter-basic.component\";\nexport * from \"./badge-docs/badge-docs.component\";\nexport * from \"./badge-empty-basic/badge-empty-basic.component\";\nexport * from \"./badge-novaui/badge-novaui.component\";\nexport * from \"./badge-system-statuses/badge-system-statuses.component\";\nexport * from \"./badge-visual-test/badge-visual-test.component\";\n");

/***/ }),

/***/ "Gh8Q":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/data.ts ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Injectable} from \"@angular/core\";\nimport {Observable, of} from \"rxjs\";\nimport {delay} from \"rxjs/operators\";\n\nexport interface FoodNode {\n    name: string;\n    page?: number;\n    children?: FoodNode[];\n    isLoading?: boolean;\n    hasPagination?: boolean;\n}\n\nexport interface IApiResponse {\n    items: FoodNode[];\n    total: number;\n}\n\n@Injectable()\nexport class HttpMock {\n    private fruitsList = [\n        $localize `apple`,\n        $localize `orange`,\n        $localize `banana`,\n        $localize `watermelon`,\n        $localize `peach`,\n        $localize `pineapple`,\n        $localize `lemon`,\n        $localize `mango`,\n    ];\n    private vegetablesList = [\n        $localize `tomato`,\n        $localize `cucumber`,\n        $localize `cabbage`,\n        $localize `pepper`,\n        $localize `carrot`,\n        $localize `onion`,\n        $localize `broccoli`,\n        $localize `corn`,\n    ];\n\n    private totalItems = 1337;\n\n    getNodeItems(nodeId: string, page: number, pageSize: number): Observable<IApiResponse> {\n        // nodeId can be handled on API depending on app needs\n        const itemList = nodeId === \"Vegetables\"\n            ? this.vegetablesList\n            : this.fruitsList;\n\n        const items: FoodNode[] = Array.from({ length: pageSize }).map(() => ({\n            name: this.getRandomFrom(itemList),\n            page,\n        }));\n\n        const response = {\n            items,\n            total: this.totalItems,\n        };\n        return of(response).pipe(delay(1000));\n    }\n\n    private getRandomFrom(list: any[]) {\n        return list[Math.floor(Math.random() * list.length)];\n    }\n}\n\n\nexport const TREE_DATA_PAGINATOR: FoodNode[] = [\n    {\n        name: \"Food\",\n        children: [\n            {\n                name: \"Vegetables\",\n                children: [],\n                hasPagination: true,\n            },\n            {\n                name: \"Fruits\",\n                children: [],\n                hasPagination: true,\n            },\n        ],\n    },\n\n];\n\nexport const TREE_DATA: FoodNode[] = [\n    {\n        name: \"Fruit\",\n        children: [\n            { name: \"Apple\" },\n            { name: \"Banana\" },\n            { name: \"Fruit loops\" },\n        ],\n    },\n    {\n        name: \"Vegetables\",\n        children: [\n            {\n                name: \"Green\",\n                children: [{ name: \"Broccoli\" }, { name: \"Brussels sprouts\" }],\n            },\n            {\n                name: \"Orange\",\n                children: [{ name: \"Pumpkins\" }, { name: \"Carrots\" }],\n            },\n            {\n                name: \"Red\",\n            },\n        ],\n    },\n    {\n        name: \"Meat\",\n    },\n];\n\nexport const TREE_DATA_CHECKBOX: FoodNode[] = [\n    {\n        name: \"Vegetables\",\n        children: [\n            {\n                name: \"Green\",\n                children: [{ name: \"Broccoli\" }, { name: \"Brussels sprouts\" }],\n            },\n            {\n                name: \"Orange\",\n                children: [{ name: \"Pumpkins\" }, { name: \"Carrots\" }],\n            },\n            {\n                name: \"Red\",\n            },\n        ],\n    },\n    {\n        name: \"Fruit\",\n        children: [\n            { name: \"Apple\" },\n            { name: \"Banana\" },\n            { name: \"Fruit loops\" },\n        ],\n    },\n    {\n        name: \"Meat\",\n    },\n];\n");

/***/ }),

/***/ "GmAy":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-basic/tag-basic.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tag-basic-example\",\n    templateUrl: \"./tag-basic.example.component.html\",\n})\nexport class TagBasicExampleComponent {\n}\n");

/***/ }),

/***/ "GtdG":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/scroll-shadows/scroll-shadows.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-scroll-shadows-example\",\n    templateUrl: \"./scroll-shadows.example.component.html\",\n})\nexport class ScrollShadowsExampleComponent {}\n");

/***/ }),

/***/ "H9D4":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-color/tag-color.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tag-color-example\",\n    templateUrl: \"./tag-color.example.component.html\",\n    styleUrls: [\"./tag-color.example.component.less\"],\n})\nexport class TagColorExampleComponent {\n}\n");

/***/ }),

/***/ "HYvS":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-border-color/tag-border-color.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-tag nui-tag-with-border-critical mr-1\">Tag critical</div>\n<div class=\"nui-tag nui-tag-with-border-warning mr-1\">Tag warning</div>\n<div class=\"nui-tag nui-tag-with-border-info mr-1\">Tag info</div>\n<div class=\"nui-tag nui-tag-with-border-ok mr-1\">Tag ok</div>");

/***/ }),

/***/ "HZfM":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-docs/data-filter-docs.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-data-filter-example\",\n    templateUrl: \"./data-filter-docs.example.component.html\",\n})\nexport class DataFilterDocsExampleComponent {\n\n}\n");

/***/ }),

/***/ "Hzex":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-basic-test/tree-basic-test.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\n\nimport {FoodNode, TREE_DATA} from \"../data\";\n\n@Component({\n  selector: \"nui-tree-basic-test\",\n  templateUrl: \"./tree-basic-test.component.html\",\n  styleUrls: [\"./tree-basic-test.component.less\"],\n  host: { id: \"nui-tree-basic-example\" },\n  animations: [expand],\n})\n\nexport class TreeBasicTestComponent {\n    treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    dataSource = new ArrayDataSource(TREE_DATA);\n\n    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;\n}\n");

/***/ }),

/***/ "Inoq":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/common/search-service/search-service.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SearchServiceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceExampleComponent", function() { return SearchServiceExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/includes */ "ijCd");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox-group.component */ "s1l0");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/divider/divider.component */ "UGtJ");








class SearchServiceExampleComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.now = new Date().getTime();
        this.week = 7 * 24 * 60 * 60 * 1000; // milliseconds 7 * 24 * 60 * 60 * 1000
        this.items = [
            { stringContainer: "abc", numberContainer: 123, dateContainer: new Date(this.now - this.week) },
            { stringContainer: "abcd", numberContainer: 1234, dateContainer: new Date(this.now) },
            { stringContainer: "abcde", numberContainer: 12345, dateContainer: new Date(this.now + this.week) },
        ];
        this.itemsFormatted = JSON.stringify(this.items, null, 2);
        this.props = ["stringContainer", "numberContainer", "dateContainer"];
    }
    valuesChanged(values) {
        this.props = [...values];
    }
    search() {
        const props = this.getProps();
        this.searchResult = this.searchService.search(this.items, props, this.searchValue);
        this.searchResultFormatted = JSON.stringify(this.searchResult, null, 2);
    }
    getProps() {
        const props = [];
        if (lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(this.props, "1")) {
            this.props = [];
            props.push("stringContainer");
        }
        if (lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(this.props, "2")) {
            this.props = [];
            props.push("numberContainer");
        }
        if (lodash_includes__WEBPACK_IMPORTED_MODULE_1___default()(this.props, "3")) {
            this.props = [];
            props.push("dateContainer");
        }
        return props;
    }
}
SearchServiceExampleComponent.ɵfac = function SearchServiceExampleComponent_Factory(t) { return new (t || SearchServiceExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SearchService"])); };
SearchServiceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchServiceExampleComponent, selectors: [["nui-search-service-example"]], decls: 27, vars: 7, consts: [[1, "searchservice-demo-data-left"], ["placeholder", "Type something to search", 1, "searchservice", 3, "ngModel", "ngModelChange"], [3, "values", "valuesChange"], [3, "value"], ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"]], template: function SearchServiceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-search-service-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Original items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Search this value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchServiceExampleComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nui-checkbox-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valuesChange", function SearchServiceExampleComponent_Template_nui_checkbox_group_valuesChange_11_listener($event) { return ctx.props = $event; })("valuesChange", function SearchServiceExampleComponent_Template_nui_checkbox_group_valuesChange_11_listener($event) { return ctx.valuesChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Property 'stringContainer'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Property 'numberContainer'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Property 'dateContainer'");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchServiceExampleComponent_Template_button_click_18_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Search result");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "nui-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.itemsFormatted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("values", ctx.props);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.searchResultFormatted);
    } }, directives: [SearchServiceExampleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_7__["DividerComponent"]], styles: [".searchservice[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .searchservice-demo-data-left[_ngcontent-%COMP%] {\n        width: 50%;\n    }"] });


/***/ }),

/***/ "Irnm":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/welcome/welcome-page.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-demo-welcome-page\",\n    templateUrl: \"./welcome-page.component.html\",\n})\nexport class WelcomePageComponent {}\n");

/***/ }),

/***/ "J12e":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-checkbox-lazy/tree-checkbox-lazy.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource, SelectionModel } from \"@angular/cdk/collections\";\nimport { CdkNestedTreeNode, CdkTree, NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component, Injectable, IterableDiffer, IterableDiffers, ViewChild } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\nimport { Observable, of } from \"rxjs\";\nimport { delay } from \"rxjs/operators\";\n\ninterface ServerNode {\n    name: string;\n    children?: ServerNode[];\n    length?: number;\n    isLoading?: boolean;\n}\n\nconst TREE_DATA: ServerNode[] = [\n    {\n        name: \"Servers\",\n        children: [],\n        length: 3,\n        isLoading: false,\n    },\n];\n\n@Injectable()\nexport class HttpMock {\n    get(): Observable<ServerNode[]> {\n        const res = {\n            servers: [\n                {\n                    name: \"Microsoft Server\",\n                    children: [],\n                    length: 3,\n                    load: \"ms-servers\",\n                },\n                {\n                    name: \"Apache Tomcat\",\n                    children: [\n                        {name: \"Version 1\"},\n                        {\n                            name: \"Version 2\",\n                            children: [],\n                            load: \"apache-version-2\",\n                            length: 3,\n                        },\n                        {name: \"Version 3\"},\n                    ],\n                    length: 3,\n                    isLoading: false,\n                },\n                {name: \"nginx\"},\n            ],\n            \"apache-version-2\": [\n                {name: \"1.0.5\"},\n                {name: \"2.1.4\"},\n                {name: \"8.9.0\"},\n            ],\n            \"ms-servers\": [\n                {name: \"2019\"},\n                {name: \"2017\"},\n                {name: \"2013\"},\n            ],\n\n        };\n        return of(res as any).pipe(delay(3000));\n    }\n}\n\n\n@Component({\n  selector: \"nui-tree-checkbox-lazy\",\n  templateUrl: \"./tree-checkbox-lazy.component.html\",\n  styleUrls: [\"./tree-checkbox-lazy.component.less\"],\n  animations: [expand],\n  providers: [HttpMock],\n})\nexport class TreeCheckboxLazyComponent {\n\n    public selectionModel = new SelectionModel<ServerNode>(true);\n    treeControl = new NestedTreeControl<ServerNode>((node) => node.children);\n    dataSource = new ArrayDataSource(TREE_DATA);\n\n    @ViewChild(CdkTree) private cdkTree: CdkTree<ServerNode>;\n\n    hasChild = (_: number, node: ServerNode) => node.length;\n\n    constructor(private http: HttpMock,\n                private differ: IterableDiffers) {\n    }\n\n    loadMore(node: any, nestedNode: CdkNestedTreeNode<any>): void {\n        const differ: IterableDiffer<ServerNode> = this.differ.find(node.children).create();\n\n        if (node.children?.length === node.length || node.isLoading) {\n            return;\n        }\n\n        node.isLoading = true;\n\n        this.http.get().subscribe((res: any) => {\n            node.isLoading = false;\n            node?.load ? node.children = res[node?.load] : node.children = res.servers;\n            this.cdkTree.renderNodeChanges(node.children, differ, nestedNode.nodeOutlet.first.viewContainer, node);\n        });\n    }\n\n        public descendantsAllSelected(node: ServerNode): boolean {\n            const descendants = this.treeControl.getDescendants(node);\n            return descendants.length > 0 && descendants.every(child => this.selectionModel.isSelected(child));\n        }\n\n        public descendantsPartiallySelected(node: ServerNode): boolean {\n            const descendants = this.treeControl.getDescendants(node);\n            const result = descendants.some(child => this.selectionModel.isSelected(child));\n            return result && !this.descendantsAllSelected(node);\n        }\n\n        public branchItemSelectionToggle(node: ServerNode): void {\n            this.selectionModel.toggle(node);\n            const descendants = this.treeControl.getDescendants(node);\n            this.selectionModel.isSelected(node)\n                ? this.selectionModel.select(...descendants)\n                : this.selectionModel.deselect(...descendants);\n\n            descendants.forEach(child => {\n                this.selectionModel.isSelected(child);\n            });\n            this.checkAllParentsSelection(node);\n        }\n\n        public leafItemSelectionToggle(node: ServerNode): void {\n            this.selectionModel.toggle(node);\n            this.checkAllParentsSelection(node);\n        }\n\n        public isParentNodeCheckedOn(node: ServerNode) {\n            if (this.selectionModel.isSelected(<ServerNode>this.getParentNode(node))) {\n                this.selectionModel.select(node);\n            }\n            return this.selectionModel.isSelected(node);\n        }\n\n        private checkAllParentsSelection(node: ServerNode): void {\n            let parent: ServerNode | undefined = this.getParentNode(node);\n            while (parent) {\n                this.checkRootNodeSelection(parent);\n                parent = this.getParentNode(parent);\n            }\n        }\n\n        private checkRootNodeSelection(node: ServerNode): void {\n            const nodeSelected = this.selectionModel.isSelected(node);\n            const descendants = this.treeControl.getDescendants(node);\n            const descAllSelected = descendants.length > 0 && descendants.every(child => this.selectionModel.isSelected(child));\n            if (nodeSelected && !descAllSelected) {\n                this.selectionModel.deselect(node);\n            } else if (!nodeSelected && descAllSelected) {\n                this.selectionModel.select(node);\n            }\n        }\n\n        private getParentNode(node: ServerNode): ServerNode | undefined {\n            let parent: ServerNode | undefined;\n\n            if (TREE_DATA.find(n => n === node)) {\n                return;\n            }\n\n            const search = (n: ServerNode): ServerNode | undefined => {\n                if (parent || !n.children) {\n                    return;\n                }\n                if (n.children.find(i => i === node)) {\n                    parent = n;\n                    return;\n                }\n                return n.children.find(search);\n            };\n\n            TREE_DATA.forEach(search);\n\n            if (!parent) {\n                throw new Error(\"Parent wasn't found\");\n            }\n\n            return parent;\n        }\n}\n");

/***/ }),

/***/ "JZF4":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, Component, Inject, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    DataSourceService, IFilter, IMenuItem, IMultiFilterMetadata, INovaFilteringOutputs,\n    ISorterChanges, LocalFilteringDataSource, PaginatorComponent, RepeatComponent, SearchComponent, SorterComponent, SorterDirection\n} from \"@nova-ui/bits\";\nimport _get from \"lodash/get\";\nimport _isEmpty from \"lodash/isEmpty\";\nimport { Subscription } from \"rxjs\";\n\ninterface ExampleItem {\n    color: string;\n    status: string;\n}\n\ninterface IconsOptions {\n    [key: string]: {\n        iconName: string;\n    };\n}\n\ninterface ExpanderOptions {\n    expanded: boolean;\n    header: string;\n}\n\ninterface PanelOptions {\n    panelMode: string;\n    heading: string;\n}\n\nconst RANDOM_ARRAY = [\n    { color: \"regular-blue\", status: \"Critical\" },\n    { color: \"regular-green\", status: \"Warning\" },\n    { color: \"regular-yellow\", status: \"Up\" },\n    { color: \"regular-cyan \", status: \"Critical\" },\n    { color: \"regular-magenta\", status: \"Warning\" },\n    { color: \"regular-black\", status: \"Up\" },\n    { color: \"regular-orange\", status: \"Up\" },\n    { color: \"regular-rose\", status: \"Up\" },\n    { color: \"regular-violet\", status: \"Up\" },\n    { color: \"regular-azure\", status: \"Critical\" },\n    { color: \"dark-blue\", status: \"Warning\" },\n    { color: \"dark-green\", status: \"Up\" },\n    { color: \"dark-yellow\", status: \"Critical\" },\n    { color: \"dark-cyan \", status: \"Warning\" },\n    { color: \"dark-magenta\", status: \"Up\" },\n    { color: \"dark-black\", status: \"Critical\" },\n    { color: \"dark-orange\", status: \"Warning\" },\n    { color: \"dark-rose\", status: \"Up\" },\n    { color: \"dark-violet\", status: \"Critical\" },\n    { color: \"dark-azure\", status: \"Warning\" },\n    { color: \"light-blue\", status: \"Up\" },\n    { color: \"light-green\", status: \"Critical\" },\n    { color: \"light-yellow\", status: \"Warning\" },\n    { color: \"light-cyan\", status: \"Up\" },\n    { color: \"light-magenta\", status: \"Critical\" },\n    { color: \"light-black\", status: \"Warning\" },\n    { color: \"light-orange\", status: \"Up\" },\n    { color: \"light-rose\", status: \"Critical\" },\n    { color: \"light-violet\", status: \"Warning\" },\n    { color: \"light-azure\", status: \"Up\" },\n];\n\n/**\n * TODO: Remove in  - NUI-5835\n * @deprecated\n */\n@Component({\n    selector: \"nui-deprecated-client-side-filtering-data-source-example\",\n    templateUrl: \"./client-side-filtering.example.component.html\",\n    styleUrls: [\"./client-side-filtering.example.component.less\"],\n    providers: [{\n        provide: DataSourceService,\n        useClass: LocalFilteringDataSource,\n    }],\n})\nexport class DepreacatedDataSourceClientSideFilteringExampleComponent implements AfterViewInit, OnDestroy {\n\n    public panelOptions: PanelOptions = {\n        panelMode: \"collapsible\",\n        heading: \"Filters\",\n    };\n\n    public colorExpanderOptions: ExpanderOptions = {\n        expanded: true,\n        header: \"Colors\",\n    };\n\n    public statusExpanderOptions: ExpanderOptions = {\n        expanded: true,\n        header: \"Statuses\",\n    };\n\n    public statusIcons: IconsOptions = {\n        \"Critical\": { iconName: \"status_critical\" },\n        \"Warning\": { iconName: \"status_warning\" },\n        \"Up\": { iconName: \"status_up\" },\n    };\n\n    public colorIcons: IconsOptions = {\n        \"azure\": { iconName: \"record\" },\n        \"black\": { iconName: \"status_up\" },\n        \"blue\": { iconName: \"signal-0\" },\n        \"cyan\": { iconName: \"signal-0\" },\n        \"green\": { iconName: \"signal-1\" },\n        \"orange\": { iconName: \"signal-2\" },\n        \"rose\": { iconName: \"signal-0\" },\n        \"violet\": { iconName: \"signal-0\" },\n        \"yellow\": { iconName: \"signal-0\" },\n        \"brown\": { iconName: \"signal-0\" },\n    };\n\n    public allStatuses: string[] = [\n        \"Warning\",\n        \"Critical\",\n        \"Up\",\n    ];\n\n    public allColors: string[] = [\n        \"azure\",\n        \"black\",\n        \"blue\",\n        \"cyan\",\n        \"green\",\n        \"orange\",\n        \"rose\",\n        \"violet\",\n        \"yellow\",\n        \"brown\",\n    ];\n\n    public selectedColorTypes: string[] = [\n        \"Up\",\n    ];\n\n    public selectedCriteriaColors: string[] = [\n        \"azure\",\n    ];\n\n    public readonly sorterItems: IMenuItem[] = [\n        {\n            title: $localize`Color`,\n            value: \"color\",\n        },\n    ];\n\n    public readonly initialSortDirection = SorterDirection.ascending;\n    public sortBy = this.sorterItems[0].value;\n\n    // By convention this is the object that will contain results of filtering, it should contain the same keys as registered components\n    // We're using this object to bind to template items/paginator/filtering data\n    public filteringState: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        color: [], // This will contain objects like {}\n        status: [],\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n    public page: number = 1;\n    public searchTerm: string = \"\";\n    public chosenColors: string[] = [];\n    public chosenStatuses: string[] = [];\n\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n    @ViewChild(\"filteringSorter\") filteringSorter: SorterComponent;\n    @ViewChild(\"filteringRepeat\") filteringRepeat: RepeatComponent;\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(@Inject(DataSourceService) public dataSourceService: DataSourceService<ExampleItem>) {\n        (this.dataSourceService as LocalFilteringDataSource<ExampleItem>).setData(RANDOM_ARRAY);\n    }\n\n    ngAfterViewInit(): void {\n        this.chosenColors = [...this.selectedCriteriaColors];\n        this.chosenStatuses = [...this.selectedColorTypes];\n        this.dataSourceService.registerComponent({ ...this.registerComponents() });\n\n        this.dataSourceService.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.filteringState = data;\n            if (data && data.paginator && data.paginator.reset) {\n                // This allows to go back to first page after filtering/search/sorting has changed\n                this.filteringPaginator.goToPage(1);\n            }\n        });\n\n    }\n\n    ngOnDestroy() {\n        if (this.outputsSubscription) {\n            this.outputsSubscription.unsubscribe();\n        }\n    }\n\n    private registerComponents = () => ({\n        // Here we're registering color and status filters\n        color: {\n            componentInstance: {\n                getFilters: () => <IFilter<string[], IMultiFilterMetadata>>({\n                    type: \"string[]\",\n                    value: this.chosenColors,\n                    metadata: {\n                        allCategories: this.allColors,\n                    },\n                }),\n            },\n        },\n        status: {\n            componentInstance: {\n                getFilters: () => <IFilter<string[], IMultiFilterMetadata>>({\n                    type: \"string[]\",\n                    value: this.chosenStatuses,\n                    metadata: {\n                        allCategories: this.allStatuses,\n                    },\n                }),\n            },\n        },\n        search: {\n            componentInstance: this.filteringSearch,\n        },\n        sorter: {\n            componentInstance: this.filteringSorter,\n        },\n        paginator: {\n            componentInstance: this.filteringPaginator,\n        },\n    })\n\n    public applyFilters() {\n        this.dataSourceService.applyFilters();\n    }\n\n    public onSorterAction(changes: ISorterChanges) {\n        this.sortBy = changes.newValue.sortBy;\n        this.dataSourceService.applyFilters();\n    }\n\n    public onSelectedCriteriaChange($event: string[]) {\n        this.chosenColors = $event;\n        this.dataSourceService.applyFilters();\n    }\n\n    public onSelectedColorTypesChange($event: string[]) {\n        this.chosenStatuses = $event;\n        this.dataSourceService.applyFilters();\n    }\n\n    public isColorCriteriaChecked(color: string): boolean {\n        return this.selectedCriteriaColors.indexOf(color) > -1;\n    }\n\n    public isColorTypeChecked(status: string): boolean {\n        return this.selectedColorTypes.indexOf(status) > -1;\n    }\n\n    public hasItems(): boolean {\n        return !_isEmpty(_get(this, \"filteringState.repeat.itemsSource\"));\n    }\n\n    public showStatus(status: string) {\n        return this.filteringState.status ? this.filteringState.status[status] : this.filteringState.status;\n    }\n\n    public showColor(color: string) {\n        return this.filteringState.color ? this.filteringState.color[color] : this.filteringState.color;\n    }\n\n    public isGreaterThanZero(amount: number): boolean {\n        return amount > 0;\n    }\n\n}\n");

/***/ }),

/***/ "Je5P":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-styling/tree-styling.example.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\n\n\ninterface FoodNode {\n    name: string;\n    textStyle?: string;\n    icon?: string;\n    children?: FoodNode[];\n}\n\nenum TextStyle {\n    DEFAULT = \"nui-text-default\",\n    SECONDARY = \"nui-text-secondary\",\n    LABEL = \"nui-text-label\",\n}\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Custom Icons\",\n        textStyle: \"default\",\n        icon: \"email\",\n        children: [\n            { name: \"Apple\", icon: \"move-down\" },\n            { name: \"Carambola\", icon: \"add\" },\n            { name: \"Grapefruit\", icon: \"schedule\" },\n        ],\n    },\n    {\n        name: \"Custom Text Styles\",\n        textStyle: TextStyle.SECONDARY,\n        children: [\n            {\n                name: \"Green\",\n                textStyle: TextStyle.DEFAULT,\n                children: [\n                    { name: \"Broccoli\", textStyle: TextStyle.LABEL },\n                    { name: \"Brussels sprouts\", textStyle: TextStyle.SECONDARY },\n                ],\n            },\n            {\n                name: \"Orange\",\n                children: [\n                    { name: \"Pumpkins\" },\n                    { name: \"Carrots\", textStyle: TextStyle.SECONDARY },\n                ],\n            },\n            { name: \"Red\", textStyle: TextStyle.LABEL },\n        ],\n    },\n];\n\n\n@Component({\n    selector: \"nui-tree-styling-example\",\n    templateUrl: \"tree-styling.example.component.html\",\n    styleUrls: [\"tree-styling.example.component.less\"],\n    animations: [expand],\n})\n\nexport class TreeStylingExampleComponent {\n    treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    dataSource = new ArrayDataSource(TREE_DATA);\n    textStyles: typeof TextStyle = TextStyle;\n\n    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;\n}\n");

/***/ }),

/***/ "Jn00":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.ts ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    INovaFilteringOutputs, ListService, LocalFilteringDataSource, PaginatorComponent, RepeatComponent, RepeatSelectionMode, SearchComponent, SelectionType\n} from \"@nova-ui/bits\";\nimport isUndefined from \"lodash/isUndefined\";\nimport { Subscription } from \"rxjs\";\n\ninterface IExampleItem {\n    color: string;\n}\n\n/**\n * TODO: Remove in  - NUI-5835\n * @deprecated\n */\n@Component({\n    selector: \"nui-deprecated-client-side-with-selection-example\",\n    providers: [LocalFilteringDataSource],\n    templateUrl: \"./client-side-with-selection.example.component.html\",\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class DepreacatedDataSourceWithSelectionExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n\n    public state: INovaFilteringOutputs = {};\n\n    @ViewChild(PaginatorComponent) paginator: PaginatorComponent;\n    @ViewChild(SearchComponent) search: SearchComponent;\n    @ViewChild(RepeatComponent) repeat: RepeatComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(public dataSourceService: LocalFilteringDataSource<IExampleItem>,\n        public changeDetection: ChangeDetectorRef,\n        private listService: ListService) {\n        dataSourceService.setData(getData());\n    }\n\n    ngAfterViewInit() {\n        this.dataSourceService.registerComponent({\n            search: {\n                componentInstance: this.search,\n            },\n            paginator: {\n                componentInstance: this.paginator,\n            },\n            repeat: {\n                componentInstance: this.repeat,\n            },\n        });\n\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = { ...this.state, ...data };\n            this.state = this.listService.updateSelectionState(this.state);\n\n            if (data && data.paginator && data.paginator.reset) {\n                this.paginator.page = 1;\n            }\n\n            const areItemsAvailable = data.paginator && !isUndefined(data.paginator.total) && data.paginator.total > 0;\n            if (data && areItemsAvailable && data.repeat?.itemsSource.length === 0) {\n                this.paginator.goToPage(this.paginator.page > 1 ? this.paginator.page - 1 : 1);\n            }\n\n            this.changeDetection.detectChanges();\n        });\n\n        this.dataSourceService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public applyFilters() {\n        this.dataSourceService.applyFilters();\n    }\n\n    public onSelectorOutput(selectionType: SelectionType) {\n        this.state = this.listService.applySelector(selectionType, this.state);\n    }\n\n    public onRepeatOutput(selectedItems: IExampleItem[]) {\n        this.state = this.listService.selectItems(selectedItems, RepeatSelectionMode.multi, this.state);\n    }\n}\n\nfunction getData() {\n    return [\n        { color: \"regular-blue\" },\n        { color: \"regular-green\" },\n        { color: \"regular-yellow\" },\n        { color: \"regular-cyan \" },\n        { color: \"regular-magenta\" },\n        { color: \"regular-black\" },\n        { color: \"dark-blue\" },\n        { color: \"dark-green\" },\n        { color: \"dark-yellow\" },\n        { color: \"dark-cyan \" },\n        { color: \"dark-magenta\" },\n        { color: \"dark-black\" },\n        { color: \"light-blue\" },\n        { color: \"light-green\" },\n        { color: \"light-yellow\" },\n        { color: \"light-cyan \" },\n        { color: \"light-magenta\" },\n        { color: \"light-black\" },\n    ];\n}\n");

/***/ }),

/***/ "K9S3":
/*!**********************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/client-side/client-side-filtering/client-side-filtering.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DataSourceClientSideFilteringExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceClientSideFilteringExampleComponent", function() { return DataSourceClientSideFilteringExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "mwIZ");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "E+oP");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/panel/panel.component */ "Xk8b");
/* harmony import */ var _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/lib/expander/expander.component */ "j4OC");
/* harmony import */ var _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../src/lib/checkbox/checkbox-group.component */ "s1l0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../src/lib/sorter/sorter.component */ "3WNR");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");
/* harmony import */ var _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../src/lib/image/image.component */ "Qd0N");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../src/lib/icon/icon.component */ "45Bz");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");

















const _c0 = ["filteringSearch"];
const _c1 = ["filteringSorter"];
const _c2 = ["filteringRepeat"];
const _c3 = ["filteringPaginator"];
function DataSourceClientSideFilteringExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r10.color, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r10.status);
} }
function DataSourceClientSideFilteringExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nui-image", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No data to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isWatermark", true);
} }
function DataSourceClientSideFilteringExampleComponent_nui_checkbox_11_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r13.showStatus(status_r11));
} }
function DataSourceClientSideFilteringExampleComponent_nui_checkbox_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DataSourceClientSideFilteringExampleComponent_nui_checkbox_11_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", status_r11)("checked", ctx_r4.isColorTypeChecked(status_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r4.statusIcons[status_r11].iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](status_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isGreaterThanZero(ctx_r4.showStatus(status_r11)));
} }
function DataSourceClientSideFilteringExampleComponent_nui_checkbox_14_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r17.showColor(color_r15));
} }
function DataSourceClientSideFilteringExampleComponent_nui_checkbox_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nui-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "nui-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DataSourceClientSideFilteringExampleComponent_nui_checkbox_14_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", color_r15)("checked", ctx_r5.isColorCriteriaChecked(color_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r5.colorIcons[color_r15].iconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](color_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.isGreaterThanZero(ctx_r5.showColor(color_r15)));
} }
function DataSourceClientSideFilteringExampleComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nui-repeat", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsSource", ctx_r8.filteringState == null ? null : ctx_r8.filteringState.repeat == null ? null : ctx_r8.filteringState.repeat.itemsSource)("repeatItemTemplateRef", _r0);
} }
const RANDOM_ARRAY = [
    { color: "regular-blue", status: "Critical" },
    { color: "regular-green", status: "Warning" },
    { color: "regular-yellow", status: "Up" },
    { color: "regular-cyan ", status: "Critical" },
    { color: "regular-magenta", status: "Warning" },
    { color: "regular-black", status: "Up" },
    { color: "regular-orange", status: "Up" },
    { color: "regular-rose", status: "Up" },
    { color: "regular-violet", status: "Up" },
    { color: "regular-azure", status: "Critical" },
    { color: "dark-blue", status: "Warning" },
    { color: "dark-green", status: "Up" },
    { color: "dark-yellow", status: "Critical" },
    { color: "dark-cyan ", status: "Warning" },
    { color: "dark-magenta", status: "Up" },
    { color: "dark-black", status: "Critical" },
    { color: "dark-orange", status: "Warning" },
    { color: "dark-rose", status: "Up" },
    { color: "dark-violet", status: "Critical" },
    { color: "dark-azure", status: "Warning" },
    { color: "light-blue", status: "Up" },
    { color: "light-green", status: "Critical" },
    { color: "light-yellow", status: "Warning" },
    { color: "light-cyan", status: "Up" },
    { color: "light-magenta", status: "Critical" },
    { color: "light-black", status: "Warning" },
    { color: "light-orange", status: "Up" },
    { color: "light-rose", status: "Critical" },
    { color: "light-violet", status: "Warning" },
    { color: "light-azure", status: "Up" },
];
/**
 * @TODO Migrate LocalFilteringDataSource to ClientSideDataSource
 */
class DataSourceClientSideFilteringExampleComponent {
    constructor(dataSourceService) {
        this.dataSourceService = dataSourceService;
        this.panelOptions = {
            panelMode: "collapsible",
            heading: "Filters",
        };
        this.colorExpanderOptions = {
            expanded: true,
            header: "Colors",
        };
        this.statusExpanderOptions = {
            expanded: true,
            header: "Statuses",
        };
        this.statusIcons = {
            "Critical": { iconName: "status_critical" },
            "Warning": { iconName: "status_warning" },
            "Up": { iconName: "status_up" },
        };
        this.colorIcons = {
            "azure": { iconName: "record" },
            "black": { iconName: "status_up" },
            "blue": { iconName: "signal-0" },
            "cyan": { iconName: "signal-0" },
            "green": { iconName: "signal-1" },
            "orange": { iconName: "signal-2" },
            "rose": { iconName: "signal-0" },
            "violet": { iconName: "signal-0" },
            "yellow": { iconName: "signal-0" },
            "brown": { iconName: "signal-0" },
        };
        this.allStatuses = [
            "Warning",
            "Critical",
            "Up",
        ];
        this.allColors = [
            "azure",
            "black",
            "blue",
            "cyan",
            "green",
            "orange",
            "rose",
            "violet",
            "yellow",
            "brown",
        ];
        this.selectedColorTypes = [
            "Up",
        ];
        this.selectedCriteriaColors = [
            "azure",
        ];
        this.sorterItems = [
            {
                title: $localize `Color`,
                value: "color",
            },
        ];
        this.initialSortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SorterDirection"].ascending;
        this.sortBy = this.sorterItems[0].value;
        // By convention this is the object that will contain results of filtering, it should contain the same keys as registered components
        // We're using this object to bind to template items/paginator/filtering data
        this.filteringState = {
            repeat: {
                itemsSource: [],
            },
            color: [],
            status: [],
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        this.page = 1;
        this.searchTerm = "";
        this.chosenColors = [];
        this.chosenStatuses = [];
        this.registerComponents = () => ({
            // Here we're registering color and status filters
            color: {
                componentInstance: {
                    // mark this filter to be monitored by our datasource for any changes in order reset other filters(eg: pagination)
                    // before any new search is performed
                    detectFilterChanges: true,
                    getFilters: () => ({
                        type: "string[]",
                        value: this.chosenColors,
                        metadata: {
                            allCategories: this.allColors,
                        },
                    }),
                },
            },
            status: {
                componentInstance: {
                    // mark this filter to be monitored by our datasource for any changes in order reset other filters(eg: pagination)
                    // before any new search is performed
                    detectFilterChanges: true,
                    getFilters: () => ({
                        type: "string[]",
                        value: this.chosenStatuses,
                        metadata: {
                            allCategories: this.allStatuses,
                        },
                    }),
                },
            },
            search: {
                componentInstance: this.filteringSearch,
            },
            sorter: {
                componentInstance: this.filteringSorter,
            },
            paginator: {
                componentInstance: this.filteringPaginator,
            },
        });
        this.dataSourceService.setData(RANDOM_ARRAY);
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.chosenColors = [...this.selectedCriteriaColors];
            this.chosenStatuses = [...this.selectedColorTypes];
            this.dataSourceService.registerComponent(Object.assign({}, this.registerComponents()));
            this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
                this.filteringState = data;
                if (data && data.paginator && data.paginator.reset) {
                    // This allows to go back to first page after filtering/search/sorting has changed
                    this.filteringPaginator.goToPage(1);
                }
            });
            yield this.applyFilters();
        });
    }
    ngOnDestroy() {
        if (this.outputsSubscription) {
            this.outputsSubscription.unsubscribe();
        }
    }
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    onSorterAction(changes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sortBy = changes.newValue.sortBy;
            yield this.applyFilters();
        });
    }
    onSelectedCriteriaChange($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.chosenColors = $event;
            yield this.applyFilters();
        });
    }
    onSelectedColorTypesChange($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.chosenStatuses = $event;
            yield this.applyFilters();
        });
    }
    isColorCriteriaChecked(color) {
        return this.selectedCriteriaColors.indexOf(color) > -1;
    }
    isColorTypeChecked(status) {
        return this.selectedColorTypes.indexOf(status) > -1;
    }
    hasItems() {
        return !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(this, "filteringState.repeat.itemsSource"));
    }
    showStatus(status) {
        return this.filteringState.status ? this.filteringState.status[status] : this.filteringState.status;
    }
    showColor(color) {
        return this.filteringState.color ? this.filteringState.color[color] : this.filteringState.color;
    }
    isGreaterThanZero(amount) {
        return amount > 0;
    }
}
DataSourceClientSideFilteringExampleComponent.ɵfac = function DataSourceClientSideFilteringExampleComponent_Factory(t) { return new (t || DataSourceClientSideFilteringExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataSourceService"])); };
DataSourceClientSideFilteringExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DataSourceClientSideFilteringExampleComponent, selectors: [["nui-client-side-filtering-data-source-example"]], viewQuery: function DataSourceClientSideFilteringExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filteringSorter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filteringRepeat = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
                provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataSourceService"],
                useClass: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"],
            }])], decls: 27, vars: 20, consts: [["listRepeatItemTemplate", ""], ["emptyListTemplate", ""], ["id", "collapsible-panel", 3, "panelMode"], ["nuiPanelEmbeddedHeading", ""], ["nuiPanelEmbeddedBody", ""], ["icon", "orion-sitemaster", 1, "mb-5", 3, "open", "header"], ["id", "nui-demo-checkbox-group-basic", "name", "cType", 3, "values", "valuesChange"], [3, "value", "checked", 4, "ngFor", "ngForOf"], ["id", "nui-demo-checkbox-group-basic", "name", "criteriaColor", 3, "values", "valuesChange"], [1, "push-down"], [1, "d-flex", "flex-row"], [1, "mb-3", 3, "hidden"], [3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], ["filteringSorter", ""], [1, "ml-auto"], [3, "value", "search"], ["filteringSearch", ""], [4, "ngIf", "ngIfElse"], [1, "mt-3", 3, "hidden"], [3, "page", "total", "pagerAction"], ["filteringPaginator", ""], [1, "d-flex", "flex-column", "align-items-center"], ["image", "no-data-to-show", 3, "isWatermark"], [1, "nui-text-small"], [3, "value", "checked"], [1, "d-flex", "align-items-center"], [1, "mr-2", 3, "icon"], [1, "mr-2"], ["class", "mr-2", 4, "ngIf"], ["paddingSize", "normal", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""]], template: function DataSourceClientSideFilteringExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DataSourceClientSideFilteringExampleComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DataSourceClientSideFilteringExampleComponent_ng_template_2_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nui-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "nui-expander", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "nui-checkbox-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valuesChange", function DataSourceClientSideFilteringExampleComponent_Template_nui_checkbox_group_valuesChange_10_listener($event) { return ctx.onSelectedColorTypesChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, DataSourceClientSideFilteringExampleComponent_nui_checkbox_11_Template, 6, 5, "nui-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nui-expander", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nui-checkbox-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valuesChange", function DataSourceClientSideFilteringExampleComponent_Template_nui_checkbox_group_valuesChange_13_listener($event) { return ctx.onSelectedCriteriaChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DataSourceClientSideFilteringExampleComponent_nui_checkbox_14_Template, 6, 5, "nui-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nui-sorter", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sorterAction", function DataSourceClientSideFilteringExampleComponent_Template_nui_sorter_sorterAction_18_listener($event) { return ctx.onSorterAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "nui-search", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("search", function DataSourceClientSideFilteringExampleComponent_Template_nui_search_search_21_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DataSourceClientSideFilteringExampleComponent_div_23_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "nui-paginator", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pagerAction", function DataSourceClientSideFilteringExampleComponent_Template_nui_paginator_pagerAction_25_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("panelMode", ctx.panelOptions.panelMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.panelOptions.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("open", ctx.statusExpanderOptions.expanded)("header", ctx.statusExpanderOptions.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("values", ctx.selectedColorTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("open", ctx.colorExpanderOptions.expanded)("header", ctx.colorExpanderOptions.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("values", ctx.selectedCriteriaColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.hasItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsSource", ctx.sorterItems)("selectedItem", ctx.sortBy)("sortDirection", ctx.initialSortDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasItems())("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.hasItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("page", ctx.page)("total", ctx.filteringState == null ? null : ctx.filteringState.paginator == null ? null : ctx.filteringState.paginator.total);
    } }, directives: [_src_lib_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["PanelComponent"], _src_lib_expander_expander_component__WEBPACK_IMPORTED_MODULE_6__["ExpanderComponent"], _src_lib_checkbox_checkbox_group_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_9__["SorterComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_11__["PaginatorComponent"], _src_lib_image_image_component__WEBPACK_IMPORTED_MODULE_12__["ImageComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_15__["RepeatComponent"]], styles: [".push-down[_ngcontent-%COMP%] {\n  min-height: 550px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1zaWRlLWZpbHRlcmluZy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJjbGllbnQtc2lkZS1maWx0ZXJpbmcuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdXNoLWRvd24ge1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "KRMV":
/*!**********************************************************************************!*\
  !*** ./demo/src/components/demo/common/clipboard/clipboard.example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClipboardExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardExampleComponent", function() { return ClipboardExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_common_directives_clipboard_clipboard_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/common/directives/clipboard/clipboard.directive */ "eJM4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");






function ClipboardExampleComponent_nui_message_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", true);
} }
function ClipboardExampleComponent_nui_message_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-message", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", true);
} }
class ClipboardExampleComponent {
    constructor() {
        this.copiedSuccessfully = false;
        this.copiedWithError = false;
        this.timeoutTime = 3000;
    }
    onValueChange(changedValue) {
        this.textToCopy = changedValue;
    }
    onClipboardSuccess() {
        this.copiedSuccessfully = true;
        this.timeout = window.setTimeout(() => {
            this.copiedSuccessfully = false;
        }, this.timeoutTime);
    }
    onClipboardError() {
        this.copiedSuccessfully = false;
        this.copiedWithError = true;
        this.timeout = window.setTimeout(() => {
            this.copiedWithError = false;
        }, this.timeoutTime);
    }
}
ClipboardExampleComponent.ɵfac = function ClipboardExampleComponent_Factory(t) { return new (t || ClipboardExampleComponent)(); };
ClipboardExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClipboardExampleComponent, selectors: [["nui-clipboard-demo"]], decls: 8, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3631596109446487400$$DEMO_SRC_COMPONENTS_DEMO_COMMON_CLIPBOARD_CLIPBOARD_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Enter text you want to copy to the clipboard");
        i18n_0 = MSG_EXTERNAL_3631596109446487400$$DEMO_SRC_COMPONENTS_DEMO_COMMON_CLIPBOARD_CLIPBOARD_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟dfde1806ffa6bc6d078c69b37745a7d52f6d3c57␟3631596109446487400:Enter text you want to copy to the clipboard`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5295425542180686048$$DEMO_SRC_COMPONENTS_DEMO_COMMON_CLIPBOARD_CLIPBOARD_EXAMPLE_COMPONENT_TS__3 = goog.getMsg("Text was copied to the clipboard!");
        i18n_2 = MSG_EXTERNAL_5295425542180686048$$DEMO_SRC_COMPONENTS_DEMO_COMMON_CLIPBOARD_CLIPBOARD_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟8b879ad32ed2dd4a790b81e93f4fbade97fc0063␟5295425542180686048:Text was copied to the clipboard!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6391345489388161761$$DEMO_SRC_COMPONENTS_DEMO_COMMON_CLIPBOARD_CLIPBOARD_EXAMPLE_COMPONENT_TS__5 = goog.getMsg("Failed to copy text!");
        i18n_4 = MSG_EXTERNAL_6391345489388161761$$DEMO_SRC_COMPONENTS_DEMO_COMMON_CLIPBOARD_CLIPBOARD_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟733f713c86420942c78982cfcdb49ca322b84695␟6391345489388161761:Failed to copy text!`;
    } return [[1, "nui-clipboard-demo"], [1, "clipboard-panel"], ["id", "inputTextbox", "placeholder", i18n_0, "customBoxWidth", "360px", "required", "true", 3, "value", "textChange"], ["id", "clipboardButton", "nui-button", "", "type", "button", "icon", "copy", 3, "nuiClipboard", "clipboardSuccess", "clipboardError"], [1, "message-box"], ["type", "ok", 3, "allowDismiss", 4, "ngIf"], ["type", "critical", 3, "allowDismiss", 4, "ngIf"], ["type", "ok", 3, "allowDismiss"], i18n_2, ["type", "critical", 3, "allowDismiss"], i18n_4]; }, template: function ClipboardExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-textbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textChange", function ClipboardExampleComponent_Template_nui_textbox_textChange_2_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clipboardSuccess", function ClipboardExampleComponent_Template_button_clipboardSuccess_3_listener() { return ctx.onClipboardSuccess(); })("clipboardError", function ClipboardExampleComponent_Template_button_clipboardError_3_listener() { return ctx.onClipboardError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClipboardExampleComponent_nui_message_6_Template, 3, 1, "nui-message", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClipboardExampleComponent_nui_message_7_Template, 3, 1, "nui-message", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.textToCopy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiClipboard", ctx.textToCopy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copiedSuccessfully);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copiedWithError);
    } }, directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_1__["TextboxComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _src_common_directives_clipboard_clipboard_directive__WEBPACK_IMPORTED_MODULE_3__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]], styles: [".nui-clipboard-demo[_ngcontent-%COMP%] {\n        max-width: 460px;\n    }\n    .clipboard-panel[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .nui-button[_ngcontent-%COMP%] {\n        height: 30px;\n    }"] });


/***/ }),

/***/ "L0d3":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-filtering/client-side-filtering.example.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #listRepeatItemTemplate let-item=\"item\">\n    <div>{{ item.color }}&nbsp;</div>\n    <div>{{ item.status }}</div>\n</ng-template>\n\n<ng-template #emptyListTemplate>\n    <div class=\"d-flex flex-column align-items-center\">\n        <nui-image [isWatermark]=\"true\" image=\"no-data-to-show\"></nui-image>\n        <p class=\"nui-text-small\">No data to show</p>\n    </div>\n</ng-template>\n\n<div>\n    <nui-panel [panelMode]=\"panelOptions.panelMode\" id=\"collapsible-panel\">\n        <div nuiPanelEmbeddedHeading>{{panelOptions.heading}}</div>\n        <div nuiPanelEmbeddedBody>\n            <nui-expander [open]=\"statusExpanderOptions.expanded\" [header]=\"statusExpanderOptions.header\" icon=\"orion-sitemaster\" class=\"mb-5\">\n                <nui-checkbox-group id=\"nui-demo-checkbox-group-basic\" name=\"cType\" [values]=\"selectedColorTypes\" (valuesChange)=\"onSelectedColorTypesChange($event)\">\n                    <nui-checkbox *ngFor=\"let status of allStatuses; let i = index\" [value]=\"status\" [checked]=\"isColorTypeChecked(status)\">\n                        <div class=\"d-flex align-items-center\">\n                            <nui-icon class=\"mr-2\" [icon]=\"statusIcons[status].iconName\"></nui-icon>\n                            <span class=\"mr-2\">{{ status }}</span>\n                            <span *ngIf=\"isGreaterThanZero(showStatus(status))\" class=\"mr-2\">{{ showStatus(status) }}</span>\n                        </div>\n                    </nui-checkbox>\n                </nui-checkbox-group>\n            </nui-expander>\n            <nui-expander [open]=\"colorExpanderOptions.expanded\" [header]=\"colorExpanderOptions.header\" icon=\"orion-sitemaster\" class=\"mb-5\">\n                <nui-checkbox-group id=\"nui-demo-checkbox-group-basic\" name=\"criteriaColor\" [values]=\"selectedCriteriaColors\" (valuesChange)=\"onSelectedCriteriaChange($event)\">\n                    <nui-checkbox *ngFor=\"let color of allColors; let i = index\" [value]=\"color\" [checked]=\"isColorCriteriaChecked(color)\">\n                        <div class=\"d-flex align-items-center\">\n                            <nui-icon class=\"mr-2\" [icon]=\"colorIcons[color].iconName\"></nui-icon>\n                            <span class=\"mr-2\">{{ color }}</span>\n                            <span *ngIf=\"isGreaterThanZero(showColor(color))\" class=\"mr-2\">{{ showColor(color) }}</span>\n                        </div>\n                    </nui-checkbox>\n                </nui-checkbox-group>\n            </nui-expander>\n        </div>\n        <div class=\"push-down\">\n            <div class=\"d-flex flex-row\">\n                <div class=\"mb-3\" [hidden]=\"!hasItems()\">\n                    <nui-sorter [itemsSource]=\"sorterItems\" [selectedItem]=\"sortBy\" [sortDirection]=\"initialSortDirection\" (sorterAction)=\"onSorterAction($event)\"\n                        #filteringSorter>\n                    </nui-sorter>\n                </div>\n                <div class=\"ml-auto\">\n                    <nui-search [value]=\"searchTerm\" (search)=\"applyFilters()\" #filteringSearch>\n                    </nui-search>\n                </div>\n            </div>\n            <div *ngIf=\"hasItems(); else emptyListTemplate\">\n                <nui-repeat [itemsSource]=\"filteringState?.repeat?.itemsSource\" [repeatItemTemplateRef]=\"listRepeatItemTemplate\" paddingSize=\"normal\"\n                    #filteringRepeat>\n                </nui-repeat>\n            </div>\n            <div class=\"mt-3\" [hidden]=\"!hasItems()\">\n                <nui-paginator [page]=\"page\" [total]=\"filteringState?.paginator?.total\" (pagerAction)=\"applyFilters()\" #filteringPaginator>\n                </nui-paginator>\n            </div>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "L9Zh":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-lazy/tree-lazy.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { CdkNestedTreeNode, CdkTree, NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component, Injectable, IterableDiffer, IterableDiffers, ViewChild } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\nimport { Observable, of } from \"rxjs\";\nimport { delay } from \"rxjs/operators\";\n\n\ninterface FoodNode {\n    name: string;\n    children?: FoodNode[];\n    length?: number;\n    isLoading?: boolean;\n}\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Fruit\",\n        children: [],\n        length: 3,\n        isLoading: false,\n    },\n];\n\n@Injectable()\nclass HttpMock {\n    get(): Observable<FoodNode[]> {\n        const res: FoodNode[] = [\n            {name: \"Banana\"},\n            {\n                name: \"Fruit\",\n                children: [],\n                length: 3,\n                isLoading: false,\n            },\n            {name: \"Fruit loops\"},\n        ];\n        return of(res).pipe(delay(3000));\n    }\n}\n\n@Component({\n    selector: \"nui-tree-lazy-example\",\n    templateUrl: \"./tree-lazy.example.component.html\",\n    styleUrls: [\"./tree-lazy.component.example.less\"],\n    animations: [expand],\n    providers: [HttpMock],\n})\nexport class TreeLazyExampleComponent {\n\n    treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    dataSource = new ArrayDataSource(TREE_DATA);\n\n    @ViewChild(CdkTree) private cdkTree: CdkTree<FoodNode>;\n\n    hasChild = (_: number, node: FoodNode) => node.length;\n\n    constructor(private http: HttpMock,\n                private differ: IterableDiffers) {\n    }\n\n    loadMore(node: FoodNode, nestedNode: CdkNestedTreeNode<any>): void {\n        const differ: IterableDiffer<FoodNode> = this.differ.find(node.children).create();\n\n        if (node.children?.length === node.length || node.isLoading) {\n            return;\n        }\n\n        node.isLoading = true;\n\n        this.http.get().subscribe((res: FoodNode[]) => {\n            node.isLoading = false;\n            node.children = res;\n            this.cdkTree.renderNodeChanges(node.children, differ, nestedNode.nodeOutlet.first.viewContainer, node);\n        });\n    }\n}\n");

/***/ }),

/***/ "LpZb":
/*!***************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/data-source.module.ts ***!
  \***************************************************************************/
/*! exports provided: DataSourceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceModule", function() { return DataSourceModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _client_side_client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-side/client-side-basic/client-side-basic.example.component */ "XoKr");
/* harmony import */ var _client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-side/client-side-custom-search/client-side-custom-search.example.component */ "igbI");
/* harmony import */ var _client_side_client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-side/client-side-delayed/client-side-delayed.example.component */ "Veua");
/* harmony import */ var _client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-side/client-side-filtering/client-side-filtering.example.component */ "K9S3");
/* harmony import */ var _client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-side/client-side-with-selection/client-side-with-selection.example.component */ "NOyz");
/* harmony import */ var _client_side_docs_client_side_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-side/docs/client-side-data-source-docs.example.component */ "x87Z");
/* harmony import */ var _deprecated_client_side_client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated-client-side/client-side-basic/client-side-basic.example.component */ "XmNi");
/* harmony import */ var _deprecated_client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component */ "MLHz");
/* harmony import */ var _deprecated_client_side_client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deprecated-client-side/client-side-delayed/client-side-delayed.example.component */ "7F6/");
/* harmony import */ var _deprecated_client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deprecated-client-side/client-side-filtering/client-side-filtering.example.component */ "+XaK");
/* harmony import */ var _deprecated_client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component */ "Tltc");
/* harmony import */ var _deprecated_client_side_docs_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deprecated-client-side/docs/data-source-docs.example.component */ "uT2B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    {
        path: "deprecated-client-side",
        component: _deprecated_client_side_docs_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_13__["DataSourceExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].support,
                "eolDate": new Date("2021-12-31"),
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "client-side",
        component: _client_side_docs_client_side_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_7__["ClientSideDataSourceDocsComponent"],
    },
];
class DataSourceModule {
}
DataSourceModule.ɵfac = function DataSourceModule_Factory(t) { return new (t || DataSourceModule)(); };
DataSourceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: DataSourceModule });
DataSourceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("tXlF"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPaginatorModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiImageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiExpanderModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiRepeatModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectorModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSorterModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCheckboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPanelModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](DataSourceModule, { declarations: [_client_side_docs_client_side_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_7__["ClientSideDataSourceDocsComponent"],
        _deprecated_client_side_docs_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_13__["DataSourceExampleComponent"],
        _deprecated_client_side_client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_8__["DepreacatedDataSourceClientSideBasicExampleComponent"],
        _deprecated_client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_11__["DepreacatedDataSourceClientSideFilteringExampleComponent"],
        _deprecated_client_side_client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_10__["DepreacatedDataSourceClientSideDelayedExampleComponent"],
        _deprecated_client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_9__["DepreacatedDataSourceClientSideCustomSearchExampleComponent"],
        _deprecated_client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_12__["DepreacatedDataSourceWithSelectionExampleComponent"],
        _client_side_client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["DataSourceClientSideBasicExampleComponent"],
        _client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_5__["DataSourceClientSideFilteringExampleComponent"],
        _client_side_client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_4__["DataSourceClientSideDelayedExampleComponent"],
        _client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_3__["DataSourceClientSideCustomSearchExampleComponent"],
        _client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_6__["DataSourceWithSelectionExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPaginatorModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiImageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiExpanderModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSearchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiRepeatModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectorModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSorterModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCheckboxModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPanelModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        _deprecated_client_side_docs_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_13__["DataSourceExampleComponent"],
        _client_side_docs_client_side_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_7__["ClientSideDataSourceDocsComponent"]] }); })();


/***/ }),

/***/ "MA/T":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-visual-test/badge-visual-test.component.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    display: inline-block;\n    width: 50px;\n    margin: 0 20px 20px 0;\n    position: relative;\n    vertical-align: top;\n}\n\n.button-example,\n.textbox-example {\n    width: auto;\n}\n\n.button-example {\n    margin: 0 20px 20px 0;\n}\n\n.textbox-example {\n    vertical-align: top;\n}\n\n.nui-badge-counter-custom:after {\n    background: #0c5593;\n    border-radius: 0;\n    color: yellow;\n}\n\n.nui-badge-empty-custom:after {\n    background: #6b6ecf;\n    border-radius: 0;\n    transform: rotate(45deg) !important;\n}\n\n");

/***/ }),

/***/ "MLHz":
/*!*****************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: ClientSideCustomSearchService, DepreacatedDataSourceClientSideCustomSearchExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSideCustomSearchService", function() { return ClientSideCustomSearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideCustomSearchExampleComponent", function() { return DepreacatedDataSourceClientSideCustomSearchExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");







const _c0 = ["filteringPaginator"];
const _c1 = ["filteringSearch"];
function DepreacatedDataSourceClientSideCustomSearchExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.color);
} }
const RANDOM_ARRAY = [
    { color: "regular-blue" },
    { color: "regular-green" },
    { color: "regular-yellow" },
    { color: "regular-cyan " },
    { color: "regular-magenta" },
    { color: "regular-black" },
    { color: "dark-blue" },
    { color: "dark-green" },
    { color: "dark-yellow" },
    { color: "dark-cyan " },
    { color: "dark-magenta" },
    { color: "dark-black" },
    { color: "light-blue" },
    { color: "light-green" },
    { color: "light-yellow" },
    { color: "light-cyan " },
    { color: "light-magenta" },
    { color: "light-black" },
];
class ClientSideCustomSearchService extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SearchService"] {
    filterPredicate(item, searchValue) {
        return item.toString().indexOf(searchValue.toString()) !== -1;
    }
}
ClientSideCustomSearchService.ɵfac = function ClientSideCustomSearchService_Factory(t) { return ɵClientSideCustomSearchService_BaseFactory(t || ClientSideCustomSearchService); };
ClientSideCustomSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientSideCustomSearchService, factory: ClientSideCustomSearchService.ɵfac });
const ɵClientSideCustomSearchService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ClientSideCustomSearchService);
/**
 * TODO: Remove in v12 - NUI-5835
 * @deprecated
 */
class DepreacatedDataSourceClientSideCustomSearchExampleComponent {
    constructor(dataSourceService, changeDetection) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.searchTerm = "";
        this.page = 1;
        this.state = {
            repeat: {
                itemsSource: [],
            },
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        dataSourceService.setData(RANDOM_ARRAY);
        this.filters = ["regular", "dark", "light"];
        this.selectedFilters = [];
    }
    ngAfterViewInit() {
        this.dataSourceService.componentTree = {
            search: {
                componentInstance: this.filteringSearch,
            },
            paginator: {
                componentInstance: this.filteringPaginator,
            },
        };
        this.dataSourceService.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            this.state = data;
            if (data && data.paginator && data.paginator.reset) {
                this.filteringPaginator.page = 1;
            }
            this.changeDetection.detectChanges();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    onSearch(value) {
        this.dataSourceService.applyFilters();
    }
    changePagination() {
        this.dataSourceService.applyFilters();
    }
    applyFilters() {
        this.dataSourceService.applyFilters();
    }
}
DepreacatedDataSourceClientSideCustomSearchExampleComponent.ɵfac = function DepreacatedDataSourceClientSideCustomSearchExampleComponent_Factory(t) { return new (t || DepreacatedDataSourceClientSideCustomSearchExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DepreacatedDataSourceClientSideCustomSearchExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepreacatedDataSourceClientSideCustomSearchExampleComponent, selectors: [["nui-deprecated-client-side-custom-search-example"]], viewQuery: function DepreacatedDataSourceClientSideCustomSearchExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"], { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SearchService"], useClass: ClientSideCustomSearchService }])], decls: 11, vars: 5, consts: [["repeatItemTemplate", ""], [1, "client-side-example"], [1, "d-flex"], [1, "flex-row"], [1, "searchBar", 3, "value", "search"], ["filteringSearch", ""], [1, "repeater", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 1, "paginator", 3, "page", "total", "pagerAction"], ["filteringPaginator", ""]], template: function DepreacatedDataSourceClientSideCustomSearchExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepreacatedDataSourceClientSideCustomSearchExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function DepreacatedDataSourceClientSideCustomSearchExampleComponent_Template_nui_search_search_5_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-repeat", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pagerAction", function DepreacatedDataSourceClientSideCustomSearchExampleComponent_Template_nui_paginator_pagerAction_9_listener() { return ctx.changePagination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_3__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_4__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "NOyz":
/*!********************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/client-side/client-side-with-selection/client-side-with-selection.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DataSourceWithSelectionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceWithSelectionExampleComponent", function() { return DataSourceWithSelectionExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_selector_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/selector/selector.component */ "E+Rb");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");









function DataSourceWithSelectionExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.color);
} }
class DataSourceWithSelectionExampleComponent {
    constructor(dataSourceService, changeDetection, listService) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.listService = listService;
        this.searchTerm = "";
        this.page = 1;
        this.state = {};
        dataSourceService.setData(getData());
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSourceService.registerComponent({
                search: {
                    componentInstance: this.search,
                },
                paginator: {
                    componentInstance: this.paginator,
                },
                repeat: {
                    componentInstance: this.repeat,
                },
            });
            this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
                this.state = Object.assign(Object.assign({}, this.state), data);
                this.state = this.listService.updateSelectionState(this.state);
                this.changeDetection.detectChanges();
            });
            yield this.applyFilters();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    onSelectorOutput(selectionType) {
        this.state = this.listService.applySelector(selectionType, this.state);
    }
    onRepeatOutput(selectedItems) {
        this.state = this.listService.selectItems(selectedItems, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["RepeatSelectionMode"].multi, this.state);
    }
}
DataSourceWithSelectionExampleComponent.ɵfac = function DataSourceWithSelectionExampleComponent_Factory(t) { return new (t || DataSourceWithSelectionExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ListService"])); };
DataSourceWithSelectionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataSourceWithSelectionExampleComponent, selectors: [["nui-client-side-with-selection-example"]], viewQuery: function DataSourceWithSelectionExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["RepeatComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.repeat = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]])], decls: 9, vars: 9, consts: [["repeatItemTemplate", ""], [1, "client-side-example"], [1, "d-flex"], [1, "flex-row"], [3, "checkboxStatus", "items", "selectionChange"], [1, "searchBar", 3, "value", "search"], ["selectionMode", "multi", 1, "repeater", 3, "itemsSource", "repeatItemTemplateRef", "selection", "selectionChange"], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 1, "paginator", 3, "page", "pageSize", "total", "pagerAction"]], template: function DataSourceWithSelectionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataSourceWithSelectionExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-selector", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function DataSourceWithSelectionExampleComponent_Template_nui_selector_selectionChange_5_listener($event) { return ctx.onSelectorOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function DataSourceWithSelectionExampleComponent_Template_nui_search_search_6_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nui-repeat", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function DataSourceWithSelectionExampleComponent_Template_nui_repeat_selectionChange_7_listener($event) { return ctx.onRepeatOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pagerAction", function DataSourceWithSelectionExampleComponent_Template_nui_paginator_pagerAction_8_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checkboxStatus", ctx.state.selector == null ? null : ctx.state.selector.selectorState.checkboxStatus)("items", ctx.state.selector == null ? null : ctx.state.selector.selectorState.selectorItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0)("selection", ctx.state.repeat == null ? null : ctx.state.repeat.selectedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.page)("pageSize", 10)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_selector_selector_component__WEBPACK_IMPORTED_MODULE_3__["SelectorComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_5__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_6__["PaginatorComponent"]], encapsulation: 2, changeDetection: 0 });
function getData() {
    return [
        { color: "regular-blue" },
        { color: "regular-green" },
        { color: "regular-yellow" },
        { color: "regular-cyan " },
        { color: "regular-magenta" },
        { color: "regular-black" },
        { color: "dark-blue" },
        { color: "dark-green" },
        { color: "dark-yellow" },
        { color: "dark-cyan " },
        { color: "dark-magenta" },
        { color: "dark-black" },
        { color: "light-blue" },
        { color: "light-green" },
        { color: "light-yellow" },
        { color: "light-cyan " },
        { color: "light-magenta" },
        { color: "light-black" },
    ];
}


/***/ }),

/***/ "NwFV":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/clipboard/clipboard.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-clipboard-demo\",\n    templateUrl: \"./clipboard.example.component.html\",\n})\nexport class ClipboardExampleComponent {\n    public textToCopy: string;\n    public copiedSuccessfully = false;\n    public copiedWithError = false;\n    private timeout: number;\n    private timeoutTime = 3000;\n\n    public onValueChange(changedValue: any): void {\n        this.textToCopy = changedValue;\n    }\n\n    public onClipboardSuccess(): void {\n        this.copiedSuccessfully = true;\n        this.timeout = window.setTimeout(() => {\n            this.copiedSuccessfully = false;\n        }, this.timeoutTime);\n    }\n\n    public onClipboardError(): void {\n        this.copiedSuccessfully = false;\n        this.copiedWithError = true;\n        this.timeout = window.setTimeout(() => {\n            this.copiedWithError = false;\n        }, this.timeoutTime);\n    }\n}\n");

/***/ }),

/***/ "OPUN":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-counter-basic/badge-counter-basic.component.less ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    position: relative;\n    height: 30px;\n    width: 30px;\n    border: 1px solid #3c3c3c;\n}\n");

/***/ }),

/***/ "OPUk":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-checkbox/tree-checkbox.example.component.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "OT28":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-with-hover/tag-with-hover.example.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tag-with-hover-example\",\n    templateUrl: \"./tag-with-hover.example.component.html\",\n    styleUrls: [\"./tag-with-hover.example.component.less\"],\n})\nexport class TagWithHoverExampleComponent {\n}\n");

/***/ }),

/***/ "Olgr":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-customization/badge-customization.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-badge-counter nui-badge-counter-custom\"\n     [attr.data-before]=\"counter\">\n</div>\n\n<div class=\"nui-badge-empty nui-badge-empty-custom\"></div>\n");

/***/ }),

/***/ "OsgS":
/*!**************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/index.ts ***!
  \**************************************************************/
/*! exports provided: DataSourceExampleComponent, DepreacatedDataSourceClientSideBasicExampleComponent, DepreacatedDataSourceClientSideFilteringExampleComponent, DepreacatedDataSourceClientSideDelayedExampleComponent, DepreacatedDataSourceWithSelectionExampleComponent, ClientSideCustomSearchService, DepreacatedDataSourceClientSideCustomSearchExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deprecated_client_side_docs_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecated-client-side/docs/data-source-docs.example.component */ "uT2B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceExampleComponent", function() { return _deprecated_client_side_docs_data_source_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["DataSourceExampleComponent"]; });

/* harmony import */ var _deprecated_client_side_client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deprecated-client-side/client-side-basic/client-side-basic.example.component */ "XmNi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideBasicExampleComponent", function() { return _deprecated_client_side_client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["DepreacatedDataSourceClientSideBasicExampleComponent"]; });

/* harmony import */ var _deprecated_client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated-client-side/client-side-filtering/client-side-filtering.example.component */ "+XaK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideFilteringExampleComponent", function() { return _deprecated_client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_2__["DepreacatedDataSourceClientSideFilteringExampleComponent"]; });

/* harmony import */ var _deprecated_client_side_client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated-client-side/client-side-delayed/client-side-delayed.example.component */ "7F6/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideDelayedExampleComponent", function() { return _deprecated_client_side_client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_3__["DepreacatedDataSourceClientSideDelayedExampleComponent"]; });

/* harmony import */ var _deprecated_client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component */ "Tltc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceWithSelectionExampleComponent", function() { return _deprecated_client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_4__["DepreacatedDataSourceWithSelectionExampleComponent"]; });

/* harmony import */ var _deprecated_client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component */ "MLHz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientSideCustomSearchService", function() { return _deprecated_client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__["ClientSideCustomSearchService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideCustomSearchExampleComponent", function() { return _deprecated_client_side_client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__["DepreacatedDataSourceClientSideCustomSearchExampleComponent"]; });









/***/ }),

/***/ "P9Nh":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./deprecated-client-side/docs/data-source-docs.example.component\";\nexport * from \"./deprecated-client-side/client-side-basic/client-side-basic.example.component\";\nexport * from \"./deprecated-client-side/client-side-filtering/client-side-filtering.example.component\";\nexport * from \"./deprecated-client-side/client-side-delayed/client-side-delayed.example.component\";\nexport * from \"./deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component\";\nexport * from \"./deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component\";\n");

/***/ }),

/***/ "Pb5+":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-basic/data-filter-basic.example.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n    AfterViewInit, Component, EventEmitter, Injectable, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation\n} from \"@angular/core\";\nimport {\n    DataFilterService, IFilter, IFilterPub, IMenuItem, INovaFilteringOutputs, IRange, ISorterChanges,\n    ITimeframe, LocalFilteringDataSource, SearchComponent, SearchService, SorterComponent, SorterDirection, TimeframeService\n} from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\nimport { Subject, Subscription } from \"rxjs\";\nimport { takeUntil } from \"rxjs/operators\";\n\nimport { ListModel, LIST_DATA, TableModel, TABLE_DATA } from \"./mocked-data\";\n\n// custom data sources used for filtering\n@Injectable()\nexport class ListDatasource extends LocalFilteringDataSource<ListModel> implements OnDestroy {\n    private onDestroy$ = new Subject<boolean>();\n    constructor(searchService: SearchService,\n        private filterService: DataFilterService) {\n        super(searchService);\n        // Subscribe to service, and automatically unsubscribe upon `ngOnDestroy`\n        this.filterService.filteringSubject.pipe(takeUntil(this.onDestroy$)).subscribe(() => {\n            this.applyFilters();\n        });\n        super.setData(LIST_DATA);\n    }\n\n    public async getFilteredData(): Promise<INovaFilteringOutputs> {\n        const filters = this.filterService.getFilters();\n        const timeFramePickerFilter = filters.timeFramePicker;\n        const filteredData = await super.getFilteredData(filters);\n        let nextChunk: any[] | undefined = filteredData.repeat?.itemsSource;\n        // TIME FRAME PICKER FILTERING\n        if (timeFramePickerFilter) {\n            nextChunk = nextChunk?.filter((item: ListModel) =>\n                item.date.isBetween(timeFramePickerFilter.value.start, timeFramePickerFilter.value.end)\n                || item.date.isSame(timeFramePickerFilter.value.start)\n                || item.date.isSame(timeFramePickerFilter.value.end));\n        }\n        if (!filteredData.repeat?.itemsSource || !nextChunk) {\n            throw new Error(\"filteredData.repeat is not defined\");\n        }\n        filteredData.repeat.itemsSource = nextChunk;\n        return filteredData;\n    }\n\n    ngOnDestroy() {\n        this.onDestroy$.next(true);\n        this.onDestroy$.complete();\n    }\n}\n\n@Injectable()\nexport class TableDatasource extends LocalFilteringDataSource<TableModel> implements OnDestroy {\n    private onDestroy$ = new Subject<boolean>();\n    constructor(searchService: SearchService,\n        private filterService: DataFilterService) {\n        super(searchService);\n        // Subscribe to service, and automatically unsubscribe upon `ngOnDestroy`\n        this.filterService.filteringSubject.pipe(takeUntil(this.onDestroy$)).subscribe(() => {\n            this.applyFilters();\n        });\n        super.setData(TABLE_DATA);\n    }\n\n    public async getFilteredData(): Promise<INovaFilteringOutputs> {\n        const filters = this.filterService.getFilters();\n        const timeFramePickerFilter = filters.timeFramePicker;\n        const filteredData = await super.getFilteredData(filters);\n        if (!filteredData.repeat) {\n           throw new Error(\"filteredData.repeat is not defined\");\n        }\n        let nextChunk = filteredData.repeat.itemsSource;\n        // TIME FRAME PICKER FILTERING\n        if (timeFramePickerFilter) {\n            nextChunk = nextChunk.filter((item: ListModel) =>\n                item.date.isBetween(timeFramePickerFilter.value.start, timeFramePickerFilter.value.end)\n                || item.date.isSame(timeFramePickerFilter.value.start)\n                || item.date.isSame(timeFramePickerFilter.value.end));\n        }\n        filteredData.repeat.itemsSource = nextChunk;\n        return filteredData;\n    }\n\n    ngOnDestroy() {\n        this.onDestroy$.next(true);\n        this.onDestroy$.complete();\n    }\n}\n// parent component\n@Component({\n    selector: \"nui-data-filter-basic-example\",\n    templateUrl: \"./data-filter-basic.example.component.html\",\n    providers: [DataFilterService],\n})\nexport class DataFilterBasicExampleComponent implements AfterViewInit {\n    @ViewChild(\"timeFramePicker\") timeFramePicker: FilteringTimeFramePickerComponent;\n\n    constructor(private filterService: DataFilterService) { }\n\n    ngAfterViewInit(): void {\n        // registering top-level filter which will be applied to all children\n        this.filterService.registerFilter({\n            timeFramePicker: {\n                componentInstance: this.timeFramePicker,\n            },\n        });\n        this.filterService.applyFilters();\n    }\n\n    public applyFilters() {\n        this.filterService.applyFilters();\n    }\n}\n\n// first child component\n@Component({\n    selector: \"nui-data-filter-table-example\",\n    template: `\n    <div style=\"border: 1px solid red\" class=\"p-4\">\n        <div class=\"mb-2\">\n            <nui-sorter id=\"nui-data-filter-basic-sorter\"\n                [itemsSource]=\"sorterItems\"\n                [selectedItem]=\"sortBy\"\n                [sortDirection]=\"initialSortDirection\"\n                (sorterAction)=\"onSorterAction($event)\">\n            </nui-sorter>\n        </div>\n\n        <table nui-table [dataSource]=\"dataSource\" id=\"nui-data-filter-basic-table\">\n\n            <ng-container nuiColumnDef=\"position\">\n                <th nui-header-cell *nuiHeaderCellDef i18n> No.</th>\n                <td nui-cell *nuiCellDef=\"let element\">{{element.position}}</td>\n            </ng-container>\n\n            <ng-container nuiColumnDef=\"issue\">\n                <th nui-header-cell *nuiHeaderCellDef i18n> Issue</th>\n                <td nui-cell *nuiCellDef=\"let element\">{{element.issue}}</td>\n            </ng-container>\n\n            <ng-container nuiColumnDef=\"date\">\n                <th nui-header-cell *nuiHeaderCellDef i18n> Date</th>\n                <td nui-cell *nuiCellDef=\"let element\"> {{element.date | date: 'EEEE, MMMM dd, yyyy'}}</td>\n            </ng-container>\n\n            <tr nui-header-row *nuiHeaderRowDef=\"displayedColumns;\"></tr>\n            <tr nui-row *nuiRowDef=\"let row; columns: displayedColumns\" density=\"tiny\"></tr>\n        </table>\n        <nui-data-filter-list-example></nui-data-filter-list-example>\n    <div>\n    `,\n    providers: [DataFilterService, TableDatasource],\n})\nexport class NuiDataFilterTableComponent implements AfterViewInit, OnDestroy {\n    public dataSource?: any[] = [];\n    public displayedColumns = [\"position\", \"issue\", \"date\"];\n\n    public readonly sorterItems: IMenuItem[] = [\n        {\n            title: $localize`Issue`,\n            value: \"issue\",\n        },\n    ];\n\n    public readonly initialSortDirection = SorterDirection.ascending;\n    public sortBy = this.sorterItems[0].value;\n\n    @ViewChild(SorterComponent) sorterComponent: SorterComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(private dataFilter: DataFilterService, private dataSourceService: TableDatasource) { }\n\n    ngAfterViewInit() {\n        // this filter will be applied in this component and NuiDataFilterListComponent\n        this.dataFilter.registerFilter({\n            sorter: {\n                componentInstance: this.sorterComponent,\n            },\n        });\n        this.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.dataSource = data.repeat?.itemsSource;\n        });\n    }\n\n    public applyFilters() {\n        this.dataFilter.applyFilters();\n    }\n\n    public onSorterAction(changes: ISorterChanges) {\n        this.sortBy = changes.newValue.sortBy;\n        this.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n}\n\n// second child component\n@Component({\n    selector: \"nui-data-filter-list-example\",\n    template: `\n    <div style=\"border: 1px solid green\" class=\"p-4\">\n        <div class=\"mb-2\">\n            <nui-search id=\"nui-data-filter-basic-search\"\n                (inputChange)=\"applyFilters()\"\n                (cancel)=\"applyFilters()\"\n                #listSearch>\n            </nui-search>\n        </div>\n\n        <nui-repeat id=\"nui-data-filter-basic-repeat\"\n                    [itemsSource]=\"state.repeat?.itemsSource\"\n                    [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                    #filteringRepeat>\n        </nui-repeat>\n\n        <ng-template #repeatItemTemplate let-item=\"item\">\n            <div>{{item.issue}} - {{item.date | date: 'EEEE, MMMM dd, yyyy'}}</div>\n        </ng-template>\n    </div>\n    `,\n    providers: [DataFilterService, ListDatasource],\n})\nexport class NuiDataFilterListComponent implements AfterViewInit, OnDestroy {\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n    };\n\n    @ViewChild(\"listSearch\") search: SearchComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(private filterService: DataFilterService, private dataSourceService: ListDatasource) { }\n\n    ngAfterViewInit() {\n        // this filter will be applied only in this component\n        this.filterService.registerFilter({\n            search: {\n                componentInstance: this.search,\n            },\n        });\n        this.filterService.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = data;\n        });\n    }\n\n    public applyFilters() {\n        this.filterService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n}\n// custom time frame picker\n@Component({\n    selector: \"nui-filtering-time-frame-picker\",\n    template: `\n    <nui-popover trigger='click'\n                 id=\"nui-data-filter-basic-time-frame-picker-popover\"\n                 [template]=\"popoverTimeFramePicker\"\n                 [hasPadding]=\"false\"\n                 [closePopover]=\"closePopoverSubject\"\n                 [modal]=\"true\">\n        <span class=\"nui-text-link\" style=\"cursor: pointer;\">{{ tf | timeFrame }}</span>\n    </nui-popover>\n\n    <ng-template #popoverTimeFramePicker>\n        <div class=\"m-3\">\n            <nui-time-frame-picker [startModel]=\"tf\"\n                           (changed)=\"updateTf($event)\"\n                           [maxDate]=\"maxDate\"\n                           [minDate]=\"minDate\">\n            </nui-time-frame-picker>\n        </div>\n        <nui-dialog-footer>\n            <button nui-button\n                    id=\"nui-data-filter-basic-time-frame-picker-cancel-btn\"\n                    type=\"button\"\n                    displayStyle=\"action\"\n                    (click)=\"cancelPopover()\"\n                    i18n>\n                Cancel\n            </button>\n            <button nui-button\n                    id=\"nui-data-filter-basic-time-frame-picker-apply-btn\"\n                    type=\"button\"\n                    displayStyle=\"primary\"\n                    (click)=\"confirmPopover()\"\n                    i18n>\n                Apply\n            </button>\n        </nui-dialog-footer>\n    </ng-template>\n    `,\n    encapsulation: ViewEncapsulation.None,\n})\nexport class FilteringTimeFramePickerComponent implements IFilterPub, OnInit {\n    @Output() timeFrameChanged: EventEmitter<any> = new EventEmitter();\n    public acceptedTimeframe: ITimeframe;\n    public tf: ITimeframe = {\n        startDatetime: moment(\"01/01/2019\", \"L\"),\n        endDatetime: moment(\"02/12/2019\", \"L\"),\n    };\n\n    public minDate = moment(\"12/01/2018\", \"L\"); // \"L\" is \"MM/DD/YYY\" in moment.js\n    public maxDate = moment();\n\n    public showFooter: boolean = false;\n\n    constructor(public timeframeService: TimeframeService) {\n    }\n\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    ngOnInit() {\n        this.acceptedTimeframe = this.tf;\n    }\n\n    public updateTf(value: any) {\n        this.tf = value;\n    }\n\n    public confirmPopover() {\n        this.closePopoverSubject.next();\n        this.acceptedTimeframe = this.tf;\n        this.timeFrameChanged.emit(this.acceptedTimeframe);\n    }\n    public cancelPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public getFilters(): IFilter<IRange<Date>> {\n        return {\n            type: \"range\",\n            value: {\n                start: this.acceptedTimeframe.startDatetime.toDate(),\n                end: this.acceptedTimeframe.endDatetime.toDate(),\n            },\n        };\n    }\n}\n");

/***/ }),

/***/ "Q7H/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ScrollingModule } from \"@angular/cdk/scrolling\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule,\n    NuiTextboxModule\n} from \"@nova-ui/bits\";\n\nimport { BadgeColorBlackComponent } from \"./badge-color-black/badge-color-black.component\";\nimport { BadgeCounterBasicComponent } from \"./badge-counter-basic/badge-counter-basic.component\";\nimport { BadgeCustomizationComponent } from \"./badge-customization/badge-customization.component\";\nimport { BadgeDocsComponent } from \"./badge-docs/badge-docs.component\";\nimport { BadgeEmptyBasicComponent } from \"./badge-empty-basic/badge-empty-basic.component\";\nimport { BadgeNovauiComponent } from \"./badge-novaui/badge-novaui.component\";\nimport { BadgeSystemStatusesComponent } from \"./badge-system-statuses/badge-system-statuses.component\";\nimport { BadgeVisualTestComponent } from \"./badge-visual-test/badge-visual-test.component\";\n\n\nconst routes = [\n    {\n        path: \"\",\n        component: BadgeDocsComponent,\n    },\n    {\n        path: \"badge-visual-test\",\n        component: BadgeVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        BadgeDocsComponent,\n        BadgeCounterBasicComponent,\n        BadgeEmptyBasicComponent,\n        BadgeSystemStatusesComponent,\n        BadgeColorBlackComponent,\n        BadgeCustomizationComponent,\n        BadgeNovauiComponent,\n        BadgeVisualTestComponent,\n    ],\n    imports: [\n        NuiButtonModule,\n        NuiFormFieldModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiTextboxModule,\n        ScrollingModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class BadgeModule {\n}\n");

/***/ }),

/***/ "QywY":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-delayed/client-side-delayed.example.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n<div class=\"client-side-delayed-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-search [value]=\"searchTerm\"\n                        (inputChange)=\"onSearch()\"\n                        (cancel)=\"onSearch()\"\n                        #filteringSearch>\n            </nui-search>\n            <nui-repeat [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        #filteringRepeat>\n            </nui-repeat>\n            <nui-paginator [page]=\"page\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"changePagination()\"\n                           #filteringPaginator>\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Rqyf":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-isolated/data-filter-isolated.example.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {\n    AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation\n} from \"@angular/core\";\nimport {\n    DataFilterService, IFilter, IFilterPub, INovaFilteringOutputs, IRange, ITimeframe, SearchComponent\n} from \"@nova-ui/bits\";\nimport moment from \"moment/moment\";\nimport { Subject, Subscription } from \"rxjs\";\n\nimport {\n    FilteringTimeFramePickerComponent, ListDatasource, TableDatasource\n} from \"../data-filter-basic/data-filter-basic.example.component\";\n\n\n@Component({\n    selector: \"nui-data-filter-isolated-example\",\n    templateUrl: \"data-filter-isolated.example.component.html\",\n    providers: [DataFilterService],\n})\n\nexport class DataFilterIsolatedExampleComponent implements AfterViewInit {\n    @ViewChild(\"timeFramePicker\") timeFramePicker: FilteringTimeFramePickerComponent;\n\n    constructor(private filterService: DataFilterService) {\n    }\n\n    ngAfterViewInit(): void {\n        this.filterService.registerFilter({\n            timeFramePicker: {\n                componentInstance: this.timeFramePicker,\n            },\n        });\n        this.filterService.applyFilters();\n    }\n\n    public applyFilters() {\n        this.filterService.applyFilters();\n    }\n}\n\n@Component({\n    selector: \"nui-data-filter-isolated-table-example\",\n    template: `\n        <div class=\"mb-2\">\n            <nui-search id=\"nui-data-filter-isolated-table-search\"\n                        class=\"d-flex justify-content-end flex-grow-1\"\n                        (inputChange)=\"applyFilters()\"\n                        (cancel)=\"applyFilters()\"\n                        #tableSearch></nui-search>\n        </div>\n        <table nui-table [dataSource]=\"tableData\" id=\"nui-data-filter-isolated-table\">\n            <ng-container nuiColumnDef=\"position\">\n                <th nui-header-cell *nuiHeaderCellDef i18n> No.</th>\n                <td nui-cell *nuiCellDef=\"let element\">{{element.position}}</td>\n            </ng-container>\n\n            <ng-container nuiColumnDef=\"issue\">\n                <th nui-header-cell *nuiHeaderCellDef i18n> Issue</th>\n                <td nui-cell *nuiCellDef=\"let element\">{{element.issue}}</td>\n            </ng-container>\n\n            <ng-container nuiColumnDef=\"date\">\n                <th nui-header-cell *nuiHeaderCellDef i18n> Date</th>\n                <td nui-cell *nuiCellDef=\"let element\"> {{element.date | date: 'EEEE, MMMM dd, yyyy'}}</td>\n            </ng-container>\n\n            <tr nui-header-row *nuiHeaderRowDef=\"displayedColumns;\"></tr>\n            <tr nui-row *nuiRowDef=\"let row; columns: displayedColumns\" density=\"compact\"></tr>\n        </table>\n    `,\n    providers: [DataFilterService, TableDatasource],\n})\nexport class NuiDataFilterIsolatedTableComponent implements AfterViewInit, OnDestroy {\n    public tableData?: any[] = [];\n    public displayedColumns = [\"position\", \"issue\", \"date\"];\n    @ViewChild(\"tableSearch\") search: SearchComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(private dataFilter: DataFilterService, private dataSourceService: TableDatasource) {\n    }\n\n    ngAfterViewInit() {\n        this.dataFilter.registerFilter({\n            search: {\n                componentInstance: this.search,\n            },\n        });\n        this.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.tableData = data.repeat?.itemsSource;\n        });\n    }\n\n    public applyFilters() {\n        this.dataFilter.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n}\n\n@Component({\n    selector: \"nui-data-filter-isolated-list-example\",\n    template: `\n        <div class=\"mb-2\">\n            <nui-search id=\"nui-data-filter-isolated-list-search\"\n                        class=\"d-flex justify-content-end flex-grow-1\"\n                        (inputChange)=\"applyFilters()\"\n                        (cancel)=\"applyFilters()\"\n                        #listSearch>\n            </nui-search>\n        </div>\n\n        <nui-repeat id=\"nui-data-filter-list-isolated-repeat\"\n                    [itemsSource]=\"state.repeat?.itemsSource\"\n                    [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                    #filteringRepeat>\n        </nui-repeat>\n\n        <ng-template #repeatItemTemplate let-item=\"item\">\n            <div>{{item.issue}} - {{item.date | date: 'EEEE, MMMM dd, yyyy'}}</div>\n        </ng-template>\n    `,\n    providers: [DataFilterService, ListDatasource],\n})\nexport class NuiDataFilterIsolatedListComponent implements AfterViewInit, OnDestroy {\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n    };\n    @ViewChild(\"listSearch\") search: SearchComponent;\n    private outputsSubscription: Subscription;\n\n    constructor(private filterService: DataFilterService, private dataSourceService: ListDatasource) {\n    }\n\n    ngAfterViewInit() {\n        this.filterService.registerFilter({\n            search: {\n                componentInstance: this.search,\n            },\n        });\n        this.filterService.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = data;\n        });\n    }\n\n    public applyFilters() {\n        this.filterService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n}\n\n@Component({\n    selector: \"nui-filtering-isolated-time-frame-picker\",\n    template: `\n        <nui-popover trigger='click'\n                     id=\"nui-data-filter-isolated-time-frame-picker-popover\"\n                     [template]=\"popoverTimeFramePicker\"\n                     [hasPadding]=\"false\"\n                     [closePopover]=\"closePopoverSubject\"\n                     [modal]=\"true\">\n            <button nui-button type=\"button\" displayStyle=\"action\">{{ tf | timeFrame }}</button>\n        </nui-popover>\n\n        <ng-template #popoverTimeFramePicker>\n            <div class=\"m-3\">\n                <nui-time-frame-picker [startModel]=\"tf\"\n                                       (changed)=\"updateTf($event)\"\n                                       [maxDate]=\"maxDate\"\n                                       [minDate]=\"minDate\">\n                </nui-time-frame-picker>\n            </div>\n            <nui-dialog-footer>\n                <button nui-button\n                        id=\"nui-data-filter-isolated-time-frame-picker-cancel-btn\"\n                        type=\"button\"\n                        displayStyle=\"action\"\n                        (click)=\"cancelPopover()\"\n                        i18n>\n                    Cancel\n                </button>\n                <button nui-button\n                        id=\"nui-data-filter-isolated-time-frame-picker-apply-btn\"\n                        type=\"button\"\n                        displayStyle=\"primary\"\n                        (click)=\"confirmPopover()\"\n                        i18n>\n                    Apply\n                </button>\n            </nui-dialog-footer>\n        </ng-template>\n    `,\n    encapsulation: ViewEncapsulation.None,\n})\nexport class FilteringIsolatedTimeFramePickerComponent implements IFilterPub, OnInit {\n    @Output() timeFrameChanged: EventEmitter<any> = new EventEmitter();\n    public acceptedTimeframe: ITimeframe;\n    public tf: ITimeframe = {\n        startDatetime: moment(\"01/01/2019\", \"L\"),\n        endDatetime: moment(\"02/12/2019\", \"L\"),\n    };\n\n    public minDate = moment(\"12/01/2018\", \"L\"); // \"L\" is \"MM/DD/YYY\" in moment.js\n    public maxDate = moment();\n\n    public showFooter: boolean = false;\n    public closePopoverSubject = new Subject();\n    public openPopoverSubject = new Subject();\n\n    ngOnInit() {\n        this.acceptedTimeframe = this.tf;\n    }\n\n    public updateTf(value: any) {\n        this.tf = value;\n    }\n\n    public confirmPopover() {\n        this.closePopoverSubject.next();\n        this.acceptedTimeframe = this.tf;\n        this.timeFrameChanged.emit(this.acceptedTimeframe);\n    }\n\n    public cancelPopover() {\n        this.showFooter = false;\n        this.closePopoverSubject.next();\n    }\n\n    public getFilters(): IFilter<IRange<Date>> {\n        return {\n            type: \"range\",\n            value: {\n                start: this.acceptedTimeframe.startDatetime.toDate(),\n                end: this.acceptedTimeframe.endDatetime.toDate(),\n            },\n        };\n    }\n}\n");

/***/ }),

/***/ "S1vm":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-filtering/client-side-filtering.example.component.less ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".push-down {\n    min-height: 550px;\n}");

/***/ }),

/***/ "SMDe":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./tree-basic/tree-basic.example.component\";\nexport * from \"./tree-styling/tree-styling.example.component\";\nexport * from \"./tree-lazy/tree-lazy.example.component\";\nexport * from \"./tree-checkbox/tree-checkbox.example.component\";\nexport * from \"./tree-docs/tree-docs.example.component\";\nexport * from \"./tree-visual-test/tree-visual-test.component\";\nexport * from \"./tree-leaf-pagination/tree-leaf-pagination.example.component\";\nexport * from \"./tree-with-additional-content/tree-with-additional-content.example.component\";\nexport * from \"./tree-show-all-dialog/tree-show-all-dialog.example.component\";\nexport * from \"./tree-load-more/tree-load-more.example.component\";\n");

/***/ }),

/***/ "TOWG":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource, SelectionModel } from \"@angular/cdk/collections\";\nimport { NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\n\nimport {FoodNode, TREE_DATA_CHECKBOX} from \"../data\";\n\n@Component({\n  selector: \"nui-tree-checkbox-test\",\n  templateUrl: \"./tree-checkbox-test.component.html\",\n  styleUrls: [\"./tree-checkbox-test.component.less\"],\n  host: { id: \"nui-tree-checkbox-example\" },\n  animations: [expand],\n})\n\nexport class TreeCheckboxTestComponent {\n    public treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    public dataSource = new ArrayDataSource(TREE_DATA_CHECKBOX);\n    public selectionModel = new SelectionModel<FoodNode>(true);\n\n    public hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;\n\n    /** Whether all the descendants of the node are selected. */\n    public descendantsAllSelected(node: FoodNode): boolean {\n        const descendants = this.treeControl.getDescendants(node);\n        return descendants.length > 0 && descendants.every(child => this.selectionModel.isSelected(child));\n    }\n\n    /** Whether part of the descendants are selected */\n    public descendantsPartiallySelected(node: FoodNode): boolean {\n        const descendants = this.treeControl.getDescendants(node);\n        const result = descendants.some(child => this.selectionModel.isSelected(child));\n        return result && !this.descendantsAllSelected(node);\n    }\n\n    /** Toggle the branch selection. Select/deselect all the descendants node */\n    public branchItemSelectionToggle(node: FoodNode): void {\n        this.selectionModel.toggle(node);\n        const descendants = this.treeControl.getDescendants(node);\n        this.selectionModel.isSelected(node)\n            ? this.selectionModel.select(...descendants)\n            : this.selectionModel.deselect(...descendants);\n\n        // Force update for the parent\n        descendants.forEach(child => this.selectionModel.isSelected(child));\n        this.checkAllParentsSelection(node);\n    }\n\n    /** Toggle a leaf item selection. Check all the parents to see if they changed */\n    public leafItemSelectionToggle(node: FoodNode): void {\n        this.selectionModel.toggle(node);\n        this.checkAllParentsSelection(node);\n    }\n\n    /** Checks all the parents when a leaf node is selected/unselected */\n    private checkAllParentsSelection(node: FoodNode): void {\n        let parent: FoodNode | undefined = this.getParentNode(node);\n        while (parent) {\n            this.checkRootNodeSelection(parent);\n            parent = this.getParentNode(parent);\n        }\n    }\n\n    /** Check root node checked state and change it accordingly */\n    private checkRootNodeSelection(node: FoodNode): void {\n        const nodeSelected = this.selectionModel.isSelected(node);\n        const descendants = this.treeControl.getDescendants(node);\n        const descAllSelected = descendants.length > 0 && descendants.every(child => this.selectionModel.isSelected(child));\n        if (nodeSelected && !descAllSelected) {\n            this.selectionModel.deselect(node);\n        } else if (!nodeSelected && descAllSelected) {\n            this.selectionModel.select(node);\n        }\n    }\n\n    /** Get the parent node of a node */\n    private getParentNode(node: FoodNode): FoodNode | undefined {\n        let parent: FoodNode | undefined;\n\n        // Don't need to get parent if node on the 0 level\n        if (TREE_DATA_CHECKBOX.find(n => n === node)) {\n            return;\n        }\n\n        const search = (n: FoodNode): FoodNode | undefined => {\n            if (parent || !n.children) {\n                return;\n            }\n            if (n.children.find(i => i === node)) {\n                parent = n;\n                return;\n            }\n            return n.children.find(search);\n        };\n\n        // invoke search on the level 0 items\n        TREE_DATA_CHECKBOX.forEach(search);\n\n        if (!parent) {\n            throw new Error(\"Parent wasn't found\");\n        }\n\n        return parent;\n    }\n}\n");

/***/ }),

/***/ "Tltc":
/*!*******************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: DepreacatedDataSourceWithSelectionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceWithSelectionExampleComponent", function() { return DepreacatedDataSourceWithSelectionExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isUndefined */ "TP7S");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_lib_selector_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/selector/selector.component */ "E+Rb");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");









function DepreacatedDataSourceWithSelectionExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.color);
} }
/**
 * TODO: Remove in  - NUI-5835
 * @deprecated
 */
class DepreacatedDataSourceWithSelectionExampleComponent {
    constructor(dataSourceService, changeDetection, listService) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.listService = listService;
        this.searchTerm = "";
        this.page = 1;
        this.state = {};
        dataSourceService.setData(getData());
    }
    ngAfterViewInit() {
        this.dataSourceService.registerComponent({
            search: {
                componentInstance: this.search,
            },
            paginator: {
                componentInstance: this.paginator,
            },
            repeat: {
                componentInstance: this.repeat,
            },
        });
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            var _a;
            this.state = Object.assign(Object.assign({}, this.state), data);
            this.state = this.listService.updateSelectionState(this.state);
            if (data && data.paginator && data.paginator.reset) {
                this.paginator.page = 1;
            }
            const areItemsAvailable = data.paginator && !lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(data.paginator.total) && data.paginator.total > 0;
            if (data && areItemsAvailable && ((_a = data.repeat) === null || _a === void 0 ? void 0 : _a.itemsSource.length) === 0) {
                this.paginator.goToPage(this.paginator.page > 1 ? this.paginator.page - 1 : 1);
            }
            this.changeDetection.detectChanges();
        });
        this.dataSourceService.applyFilters();
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    applyFilters() {
        this.dataSourceService.applyFilters();
    }
    onSelectorOutput(selectionType) {
        this.state = this.listService.applySelector(selectionType, this.state);
    }
    onRepeatOutput(selectedItems) {
        this.state = this.listService.selectItems(selectedItems, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["RepeatSelectionMode"].multi, this.state);
    }
}
DepreacatedDataSourceWithSelectionExampleComponent.ɵfac = function DepreacatedDataSourceWithSelectionExampleComponent_Factory(t) { return new (t || DepreacatedDataSourceWithSelectionExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ListService"])); };
DepreacatedDataSourceWithSelectionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepreacatedDataSourceWithSelectionExampleComponent, selectors: [["nui-deprecated-client-side-with-selection-example"]], viewQuery: function DepreacatedDataSourceWithSelectionExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["PaginatorComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.repeat = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["LocalFilteringDataSource"]])], decls: 9, vars: 9, consts: [["repeatItemTemplate", ""], [1, "client-side-example"], [1, "d-flex"], [1, "flex-row"], [3, "checkboxStatus", "items", "selectionChange"], [1, "searchBar", 3, "value", "search"], ["selectionMode", "multi", 1, "repeater", 3, "itemsSource", "repeatItemTemplateRef", "selection", "selectionChange"], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 1, "paginator", 3, "page", "pageSize", "total", "pagerAction"]], template: function DepreacatedDataSourceWithSelectionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepreacatedDataSourceWithSelectionExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-selector", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DepreacatedDataSourceWithSelectionExampleComponent_Template_nui_selector_selectionChange_5_listener($event) { return ctx.onSelectorOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-search", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function DepreacatedDataSourceWithSelectionExampleComponent_Template_nui_search_search_6_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-repeat", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DepreacatedDataSourceWithSelectionExampleComponent_Template_nui_repeat_selectionChange_7_listener($event) { return ctx.onRepeatOutput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pagerAction", function DepreacatedDataSourceWithSelectionExampleComponent_Template_nui_paginator_pagerAction_8_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checkboxStatus", ctx.state.selector == null ? null : ctx.state.selector.selectorState.checkboxStatus)("items", ctx.state.selector == null ? null : ctx.state.selector.selectorState.selectorItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0)("selection", ctx.state.repeat == null ? null : ctx.state.repeat.selectedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", 10)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_selector_selector_component__WEBPACK_IMPORTED_MODULE_3__["SelectorComponent"], _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_5__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_6__["PaginatorComponent"]], encapsulation: 2, changeDetection: 0 });
function getData() {
    return [
        { color: "regular-blue" },
        { color: "regular-green" },
        { color: "regular-yellow" },
        { color: "regular-cyan " },
        { color: "regular-magenta" },
        { color: "regular-black" },
        { color: "dark-blue" },
        { color: "dark-green" },
        { color: "dark-yellow" },
        { color: "dark-cyan " },
        { color: "dark-magenta" },
        { color: "dark-black" },
        { color: "light-blue" },
        { color: "light-green" },
        { color: "light-yellow" },
        { color: "light-cyan " },
        { color: "light-magenta" },
        { color: "light-black" },
    ];
}


/***/ }),

/***/ "TnLI":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-basic/client-side-basic.example.component.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    INovaFilteringOutputs, LocalFilteringDataSource, PaginatorComponent, SearchComponent\n} from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\nconst RANDOM_ARRAY = [\n    {color: \"regular-blue\"},\n    {color: \"regular-green\"},\n    {color: \"regular-yellow\"},\n    {color: \"regular-cyan \"},\n    {color: \"regular-magenta\"},\n    {color: \"regular-black\"},\n    {color: \"dark-blue\"},\n    {color: \"dark-green\"},\n    {color: \"dark-yellow\"},\n    {color: \"dark-cyan \"},\n    {color: \"dark-magenta\"},\n    {color: \"dark-black\"},\n    {color: \"light-blue\"},\n    {color: \"light-green\"},\n    {color: \"light-yellow\"},\n    {color: \"light-cyan \"},\n    {color: \"light-magenta\"},\n    {color: \"light-black\"},\n];\n\ninterface ExampleItem {\n    color: string;\n}\n\n/**\n * TODO: Remove in v12 - NUI-5835\n * @deprecated\n */\n@Component({\n    selector: \"nui-deprecated-client-side-basic-data-source-example\",\n    providers: [ LocalFilteringDataSource ],\n    templateUrl: \"./client-side-basic.example.component.html\",\n})\nexport class DepreacatedDataSourceClientSideBasicExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n\n    public filters: any[];\n    public selectedFilters: any[];\n\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(public dataSourceService: LocalFilteringDataSource<ExampleItem>,\n                public changeDetection: ChangeDetectorRef) {\n        dataSourceService.setData(RANDOM_ARRAY);\n\n        this.filters = [\"regular\", \"dark\", \"light\"];\n        this.selectedFilters = [];\n    }\n\n    async ngAfterViewInit() {\n        this.dataSourceService.registerComponent({\n            search: {\n                componentInstance: this.filteringSearch,\n            },\n            paginator: {\n                componentInstance: this.filteringPaginator,\n            },\n        });\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n                this.state = data;\n                if (data && data.paginator && data.paginator.reset) {\n                    this.filteringPaginator.page = 1;\n                }\n                this.changeDetection.detectChanges();\n        });\n        await this.dataSourceService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public async onSearch(value: string) {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async changePagination() {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async applyFilters() {\n        await this.dataSourceService.applyFilters();\n    }\n}\n");

/***/ }),

/***/ "U0RL":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-empty-basic/badge-empty-basic.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-empty-basic\",\n    templateUrl: \"./badge-empty-basic.component.html\",\n    styleUrls: [\"./badge-empty-basic.component.less\"],\n})\nexport class BadgeEmptyBasicComponent {\n}\n");

/***/ }),

/***/ "U2j4":
/*!*****************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: GBooksDataSourceWithSearch, RepeatWithViewportManagerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GBooksDataSourceWithSearch", function() { return GBooksDataSourceWithSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatWithViewportManagerExampleComponent", function() { return RepeatWithViewportManagerExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "Y+p1");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isNil */ "J2iB");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../src/lib/progress/progress.component */ "FA8p");















function RepeatWithViewportManagerExampleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No results\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function RepeatWithViewportManagerExampleComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const book_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](book_r3.title);
} }
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const RESULTS_PER_PAGE = 20;
/**
 * Example of a Remote DataSourceService which is using the API from Google Books API
 * to fetch data
 */
class GBooksDataSourceWithSearch extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DataSourceService"] {
    constructor(logger, http) {
        super();
        this.logger = logger;
        this.http = http;
        this.busy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        // cache used to store our previous fetched results while scrolling
        // and more data is automatically fetched from the backend
        this.cache = Array.from({ length: 0 });
        this.applyFilters$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.applyFilters$.pipe(
        // cancel any previous requests
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(filters => this.getData(filters))).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.outputsSubject.next(yield this.getFilteredData(res));
        }));
    }
    getFilteredData(booksData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(booksData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((response) => {
                // after receiving data we need to append it to our previous fetched results
                this.cache = this.cache.concat(response.books);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => ({
                result: {
                    repeat: { itemsSource: this.cache },
                    paginator: { total: response.totalItems },
                },
            }))).toPromise();
        });
    }
    // redefine parent method
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.applyFilters$.next(this.getFilters());
        });
    }
    getData(filters) {
        // Note: Every new search request should clear the
        // cache in order to correctly display a new set of data.
        if (this.isNewSearchTerm(filters.search)) {
            this.cache = [];
        }
        // fetch response from the backend
        return this.http
            .get(API_URL, { params: this.getRequestParams(filters) })
            .pipe(
        // show the loader
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.busy.next(true)), 
        // since API being used (Google Books ) sends the response almost immediately,
        // we need to fake it takes longer to be able the show the spinner component
        // while the data is being received
        // PS: NOT to be used in real examples
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["delay"])(300), 
        // transform backend API response (IGBooksApiResponse)
        // to our frontend books collection (IGBooksFrontendCollection)
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(response => {
            var _a;
            return ({
                books: ((_a = response.items) === null || _a === void 0 ? void 0 : _a.map(volume => {
                    var _a;
                    return ({
                        title: volume.volumeInfo.title,
                        authors: ((_a = volume.volumeInfo.authors) === null || _a === void 0 ? void 0 : _a.join(", ")) || "",
                    });
                })) || [],
                totalItems: response.totalItems,
            });
        }), 
        // error handle in case of any error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(e => {
            this.logger.error(e);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({
                books: [],
                totalItems: 0,
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            // no matter if the backend response was successful or not,
            // we need to hide our loader and reset the filters
            this.busy.next(false);
            this.previousFilters = filters;
        }));
    }
    // build query params specific to our backend API
    getRequestParams(filters) {
        var _a, _b, _c;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            // define the start page used by the virtual scroll internal "paginator"
            .set("startIndex", (_c = (_b = (_a = filters.virtualScroll) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.start.toString()) !== null && _c !== void 0 ? _c : "")
            // specify the maximum number of items we need to fetch for each request
            .set("maxResults", String(RESULTS_PER_PAGE))
            // google books api requires some criteria to do the search
            .set("q", filters.search
            ? `intitle:${filters.search.value}`
            : "_" // google books api requires some criteria to do the search
        );
    }
    isNewSearchTerm(search) {
        var _a, _b;
        return !lodash_isNil__WEBPACK_IMPORTED_MODULE_5___default()(search === null || search === void 0 ? void 0 : search.value)
            && !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(search === null || search === void 0 ? void 0 : search.value, (_b = (_a = this.previousFilters) === null || _a === void 0 ? void 0 : _a.search) === null || _b === void 0 ? void 0 : _b.value);
    }
}
GBooksDataSourceWithSearch.ɵfac = function GBooksDataSourceWithSearch_Factory(t) { return new (t || GBooksDataSourceWithSearch)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GBooksDataSourceWithSearch.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GBooksDataSourceWithSearch, factory: GBooksDataSourceWithSearch.ɵfac });
class RepeatWithViewportManagerExampleComponent {
    constructor(viewportManager, cd, dataSource) {
        this.viewportManager = viewportManager;
        this.cd = cd;
        this.dataSource = dataSource;
        this.books$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.busy = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.busy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(val => {
            this.busy = val;
            this.cd.detectChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe();
    }
    ngAfterViewInit() {
        // Note: registering filtering participants
        this.registerFilters();
        this.viewportManager
            // Note: Initializing viewportManager with the repeat's CDK Viewport Ref
            .setViewport(this.repeat.viewportRef)
            // Note: Initializing the stream with the desired page size, based on which
            // ViewportManager will perform the observations and will emit
            // distinct ranges with step equal to provided pageSize
            .observeNextPage$({ pageSize: RESULTS_PER_PAGE }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.dataSource.applyFilters();
        }), 
        // Note: Using the same stream to subscribe to the outputsSubject and update the items list
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => this.dataSource.outputsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((outputs) => {
            this.books$.next(outputs.result.repeat.itemsSource || []);
            this.cd.detectChanges();
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSearch() {
        this.doSearch();
    }
    onCancelSearch() {
        this.doSearch();
    }
    doSearch() {
        // Note: It is important to reset viewportManager to start page
        // so that the datasource performs the search with 1st page
        // emitFirstPage: false prevents viewportManager emitting first page after reset
        this.viewportManager.reset({ emitFirstPage: false });
        this.dataSource.applyFilters();
    }
    registerFilters() {
        this.dataSource.registerComponent({
            virtualScroll: { componentInstance: this.viewportManager },
            search: { componentInstance: this.search },
        });
    }
}
RepeatWithViewportManagerExampleComponent.ɵfac = function RepeatWithViewportManagerExampleComponent_Factory(t) { return new (t || RepeatWithViewportManagerExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["VirtualViewportManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](GBooksDataSourceWithSearch)); };
RepeatWithViewportManagerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RepeatWithViewportManagerExampleComponent, selectors: [["nui-repeat-with-viewport-manager-example"]], viewQuery: function RepeatWithViewportManagerExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["RepeatComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.repeat = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["VirtualViewportManager"], GBooksDataSourceWithSearch])], decls: 9, vars: 11, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6200922231175481486$$DEMO_SRC_COMPONENTS_DEMO_COMMON_VIEWPORT_MANAGER_REPEAT_WITH_VIEWPORT_MANAGER_REPEAT_WITH_VIEWPORT_MANAGER_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Search book by title");
        i18n_0 = MSG_EXTERNAL_6200922231175481486$$DEMO_SRC_COMPONENTS_DEMO_COMMON_VIEWPORT_MANAGER_REPEAT_WITH_VIEWPORT_MANAGER_REPEAT_WITH_VIEWPORT_MANAGER_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b2f7b7a0ccfff43a2ebae08e6ba39d93be120b03␟6200922231175481486:Search book by title`;
    } return [[1, "mb-2"], ["placeholder", i18n_0, 3, "value", "search", "cancel"], [4, "ngIf"], [2, "height", "300px", 3, "itemsSource", "repeatItemTemplateRef", "virtualScroll", "itemSize"], ["compactMode", "true", 3, "show"], ["userItemTemplate", ""], [1, "nui-text-secondary"]]; }, template: function RepeatWithViewportManagerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-search", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("search", function RepeatWithViewportManagerExampleComponent_Template_nui_search_search_1_listener() { return ctx.onSearch(); })("cancel", function RepeatWithViewportManagerExampleComponent_Template_nui_search_cancel_1_listener() { return ctx.onCancelSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RepeatWithViewportManagerExampleComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "nui-repeat", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "nui-progress", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RepeatWithViewportManagerExampleComponent_ng_template_7_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.busy && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, ctx.books$).length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.books$))("repeatItemTemplateRef", _r1)("virtualScroll", true)("itemSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("show", ctx.busy);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_10__["RepeatComponent"], _src_lib_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "V4kI":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"client-side-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-selector (selectionChange)=\"onSelectorOutput($event)\"\n                          [checkboxStatus]=\"state.selector?.selectorState.checkboxStatus\"\n                          [items]=\"state.selector?.selectorState.selectorItems\">\n            </nui-selector>\n            <nui-search class=\"searchBar\" [value]=\"searchTerm\"\n                        (search)=\"applyFilters()\">\n            </nui-search>\n            <nui-repeat class=\"repeater\"\n                        [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        selectionMode=\"multi\"\n                        [selection]=\"state.repeat?.selectedItems\"\n                        (selectionChange)=\"onRepeatOutput($event)\">\n            </nui-repeat>\n            <nui-paginator class=\"paginator\" [page]=\"page\"\n                           [pageSize]=\"10\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"applyFilters()\">\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "VIhG":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ScrollingModule } from \"@angular/cdk/scrolling\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiDocsModule,\n    NuiIconModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport { TagBasicExampleComponent } from \"./tag-basic/tag-basic.example.component\";\nimport { TagBorderColorExampleComponent } from \"./tag-border-color/tag-border-color.example.component\";\nimport { TagColorExampleComponent } from \"./tag-color/tag-color.example.component\";\nimport { TagDocsExampleComponent } from \"./tag-docs/tag-docs.example.component\";\nimport { TagWithHoverExampleComponent } from \"./tag-with-hover/tag-with-hover.example.component\";\nimport { TagWithIconExampleComponent } from \"./tag-with-icon/tag-with-icon.example.component\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: TagDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n];\n\n@NgModule({\n    declarations: [\n        TagBasicExampleComponent,\n        TagDocsExampleComponent,\n        TagColorExampleComponent,\n        TagWithIconExampleComponent,\n        TagBorderColorExampleComponent,\n        TagWithHoverExampleComponent,\n    ],\n    imports: [\n        NuiDocsModule,\n        ScrollingModule,\n        NuiIconModule,\n        RouterModule.forChild(routes),\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class TagModule {\n}\n");

/***/ }),

/***/ "Veua":
/*!******************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/client-side/client-side-delayed/client-side-delayed.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DataSourceClientSideDelayedExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceClientSideDelayedExampleComponent", function() { return DataSourceClientSideDelayedExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");










const _c0 = ["filteringPaginator"];
const _c1 = ["filteringSearch"];
const _c2 = ["filteringSorter"];
function DataSourceClientSideDelayedExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.color);
} }
const INITIAL_ARRAY = [
    { color: "regular-blue" },
    { color: "regular-green" },
    { color: "regular-yellow" },
    { color: "regular-cyan" },
    { color: "regular-magenta" },
    { color: "regular-black" },
    { color: "dark-blue" },
    { color: "dark-green" },
    { color: "dark-yellow" },
    { color: "dark-cyan" },
    { color: "dark-magenta" },
    { color: "light-blue" },
    { color: "light-green" },
    { color: "light-yellow" },
    { color: "light-cyan" },
    { color: "light-magenta" },
];
class DataSourceClientSideDelayedExampleComponent {
    constructor(dataSourceService, changeDetection) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.searchTerm = "";
        this.page = 1;
        this.sorter = {
            columns: ["color", "red", "green", "blue"],
            sortedColumn: "color",
            direction: "asc",
        };
        this.state = {
            repeat: {
                itemsSource: [],
            },
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        this.delayActionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        dataSourceService.setData(INITIAL_ARRAY);
        this.filters = ["regular", "dark", "light"];
        this.selectedFilters = [];
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSourceService.componentTree = {
                search: {
                    componentInstance: this.filteringSearch,
                },
                paginator: {
                    componentInstance: this.filteringPaginator,
                },
            };
            this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
                this.state = data;
                this.changeDetection.detectChanges();
            });
            this.delayActionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500)).subscribe(() => {
                this.dataSourceService.applyFilters();
            });
            yield this.dataSourceService.applyFilters();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    onSearch() {
        this.delayActionSubject.next();
    }
    changePagination() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
}
DataSourceClientSideDelayedExampleComponent.ɵfac = function DataSourceClientSideDelayedExampleComponent_Factory(t) { return new (t || DataSourceClientSideDelayedExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataSourceClientSideDelayedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataSourceClientSideDelayedExampleComponent, selectors: [["nui-client-side-delayed-data-source-example"]], viewQuery: function DataSourceClientSideDelayedExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringSorter = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]])], decls: 11, vars: 5, consts: [["repeatItemTemplate", ""], [1, "client-side-delayed-example"], [1, "d-flex"], [1, "flex-row"], [3, "value", "inputChange", "cancel"], ["filteringSearch", ""], [3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 3, "page", "total", "pagerAction"], ["filteringPaginator", ""]], template: function DataSourceClientSideDelayedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataSourceClientSideDelayedExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inputChange", function DataSourceClientSideDelayedExampleComponent_Template_nui_search_inputChange_5_listener() { return ctx.onSearch(); })("cancel", function DataSourceClientSideDelayedExampleComponent_Template_nui_search_cancel_5_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-repeat", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pagerAction", function DataSourceClientSideDelayedExampleComponent_Template_nui_paginator_pagerAction_9_listener() { return ctx.changePagination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.page)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_6__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_7__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Vx+0":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-visual-test.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n  selector: \"nui-tree-visual-test\",\n  templateUrl: \"./tree-visual-test.component.html\",\n})\n\nexport class TreeVisualTestComponent {}\n");

/***/ }),

/***/ "W52H":
/*!*********************************************************************************************************!*\
  !*** ./demo/src/components/demo/common sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./badge/badge-color-black/badge-color-black.component.html": "pcvo",
	"./badge/badge-color-black/badge-color-black.component.less": "+SKk",
	"./badge/badge-color-black/badge-color-black.component.ts": "FF7H",
	"./badge/badge-counter-basic/badge-counter-basic.component.html": "c/8u",
	"./badge/badge-counter-basic/badge-counter-basic.component.less": "OPUN",
	"./badge/badge-counter-basic/badge-counter-basic.component.ts": "GKtr",
	"./badge/badge-customization/badge-customization.component.html": "Olgr",
	"./badge/badge-customization/badge-customization.component.less": "mU2q",
	"./badge/badge-customization/badge-customization.component.ts": "pr8d",
	"./badge/badge-docs/badge-docs.component.html": "x5HX",
	"./badge/badge-docs/badge-docs.component.less": "0Vs1",
	"./badge/badge-docs/badge-docs.component.ts": "+igE",
	"./badge/badge-empty-basic/badge-empty-basic.component.html": "vsEn",
	"./badge/badge-empty-basic/badge-empty-basic.component.less": "nt5H",
	"./badge/badge-empty-basic/badge-empty-basic.component.ts": "U0RL",
	"./badge/badge-novaui/badge-novaui.component.html": "2VyY",
	"./badge/badge-novaui/badge-novaui.component.less": "kirR",
	"./badge/badge-novaui/badge-novaui.component.ts": "FJF3",
	"./badge/badge-system-statuses/badge-system-statuses.component.html": "+YHH",
	"./badge/badge-system-statuses/badge-system-statuses.component.less": "doCF",
	"./badge/badge-system-statuses/badge-system-statuses.component.ts": "AUYk",
	"./badge/badge-visual-test/badge-visual-test.component.html": "t6Kh",
	"./badge/badge-visual-test/badge-visual-test.component.less": "MA/T",
	"./badge/badge-visual-test/badge-visual-test.component.ts": "kf08",
	"./badge/badge.module.ts": "Q7H/",
	"./badge/index.ts": "GX8n",
	"./clipboard/clipboard.example.component.html": "oqJQ",
	"./clipboard/clipboard.example.component.ts": "NwFV",
	"./common.module.ts": "rg+G",
	"./data-filter/data-filter-basic/data-filter-basic.example.component.html": "1lXE",
	"./data-filter/data-filter-basic/data-filter-basic.example.component.ts": "Pb5+",
	"./data-filter/data-filter-basic/mocked-data.ts": "rbuX",
	"./data-filter/data-filter-docs/data-filter-docs.example.component.html": "8k+f",
	"./data-filter/data-filter-docs/data-filter-docs.example.component.ts": "HZfM",
	"./data-filter/data-filter-isolated/data-filter-isolated.example.component.html": "CuH8",
	"./data-filter/data-filter-isolated/data-filter-isolated.example.component.ts": "Rqyf",
	"./data-filter/data-filter-test/data-filter-test.component.html": "eU6T",
	"./data-filter/data-filter-test/data-filter-test.component.ts": "x8jq",
	"./data-filter/index.ts": "8jcL",
	"./data-source/client-side/client-side-basic/client-side-basic.example.component.html": "r98z",
	"./data-source/client-side/client-side-basic/client-side-basic.example.component.ts": "hSDq",
	"./data-source/client-side/client-side-custom-search/client-side-custom-search.example.component.html": "ry4B",
	"./data-source/client-side/client-side-custom-search/client-side-custom-search.example.component.ts": "djXJ",
	"./data-source/client-side/client-side-delayed/client-side-delayed.example.component.html": "QywY",
	"./data-source/client-side/client-side-delayed/client-side-delayed.example.component.ts": "EDqv",
	"./data-source/client-side/client-side-filtering/client-side-filtering.example.component.html": "L0d3",
	"./data-source/client-side/client-side-filtering/client-side-filtering.example.component.less": "S1vm",
	"./data-source/client-side/client-side-filtering/client-side-filtering.example.component.ts": "DsA0",
	"./data-source/client-side/client-side-with-selection/client-side-with-selection.example.component.html": "WfwH",
	"./data-source/client-side/client-side-with-selection/client-side-with-selection.example.component.ts": "+pTI",
	"./data-source/client-side/docs/client-side-data-source-docs.example.component.html": "39vb",
	"./data-source/client-side/docs/client-side-data-source-docs.example.component.ts": "Zk7Q",
	"./data-source/data-source.module.ts": "/LMT",
	"./data-source/deprecated-client-side/client-side-basic/client-side-basic.example.component.html": "n4pp",
	"./data-source/deprecated-client-side/client-side-basic/client-side-basic.example.component.ts": "TnLI",
	"./data-source/deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.html": "i5UG",
	"./data-source/deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.ts": "fjfW",
	"./data-source/deprecated-client-side/client-side-delayed/client-side-delayed.example.component.html": "rogj",
	"./data-source/deprecated-client-side/client-side-delayed/client-side-delayed.example.component.ts": "hY/w",
	"./data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.html": "q/5i",
	"./data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.less": "oheM",
	"./data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.ts": "JZF4",
	"./data-source/deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.html": "V4kI",
	"./data-source/deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.ts": "Jn00",
	"./data-source/deprecated-client-side/docs/data-source-docs.example.component.html": "bEQ3",
	"./data-source/deprecated-client-side/docs/data-source-docs.example.component.ts": "gcIZ",
	"./data-source/index.ts": "P9Nh",
	"./edge-detection-service/edge-detection-service.example.component.html": "tD1Z",
	"./edge-detection-service/edge-detection-service.example.component.less": "2YcW",
	"./edge-detection-service/edge-detection-service.example.component.ts": "0ZHL",
	"./event-propagation-service/event-propagation-service.example.component.html": "24jC",
	"./event-propagation-service/event-propagation-service.example.component.ts": "Aob3",
	"./index.ts": "Z5Hn",
	"./scroll-shadows/scroll-shadows.example.component.html": "pohb",
	"./scroll-shadows/scroll-shadows.example.component.ts": "GtdG",
	"./search-service/search-service.example.component.html": "rkxD",
	"./search-service/search-service.example.component.ts": "3LSX",
	"./set-focus/set-focus.example.component.html": "tXce",
	"./set-focus/set-focus.example.component.ts": "Eh+W",
	"./tag/index.ts": "tS57",
	"./tag/tag-basic/tag-basic.example.component.html": "Cmzk",
	"./tag/tag-basic/tag-basic.example.component.ts": "GmAy",
	"./tag/tag-border-color/tag-border-color.example.component.html": "HYvS",
	"./tag/tag-border-color/tag-border-color.example.component.ts": "71a7",
	"./tag/tag-color/tag-color.example.component.html": "8YnH",
	"./tag/tag-color/tag-color.example.component.less": "G7E/",
	"./tag/tag-color/tag-color.example.component.ts": "H9D4",
	"./tag/tag-docs/tag-docs.example.component.html": "saoN",
	"./tag/tag-docs/tag-docs.example.component.ts": "1tGW",
	"./tag/tag-with-hover/tag-with-hover.example.component.html": "qy4l",
	"./tag/tag-with-hover/tag-with-hover.example.component.less": "8/tt",
	"./tag/tag-with-hover/tag-with-hover.example.component.ts": "OT28",
	"./tag/tag-with-icon/tag-with-icon.example.component.html": "aX5t",
	"./tag/tag-with-icon/tag-with-icon.example.component.less": "2lT4",
	"./tag/tag-with-icon/tag-with-icon.example.component.ts": "uIky",
	"./tag/tag.module.ts": "VIhG",
	"./tree/http-mock.service.ts": "aGgG",
	"./tree/index.ts": "SMDe",
	"./tree/tree-basic/tree-basic.example.component.html": "G8qU",
	"./tree/tree-basic/tree-basic.example.component.less": "fsYv",
	"./tree/tree-basic/tree-basic.example.component.ts": "qflF",
	"./tree/tree-checkbox-lazy/tree-checkbox-lazy.component.html": "wGmj",
	"./tree/tree-checkbox-lazy/tree-checkbox-lazy.component.less": "xPtD",
	"./tree/tree-checkbox-lazy/tree-checkbox-lazy.component.ts": "J12e",
	"./tree/tree-checkbox/tree-checkbox.example.component.html": "BU2E",
	"./tree/tree-checkbox/tree-checkbox.example.component.less": "OPUk",
	"./tree/tree-checkbox/tree-checkbox.example.component.ts": "aH8u",
	"./tree/tree-docs/tree-docs.example.component.html": "5XLM",
	"./tree/tree-docs/tree-docs.example.component.ts": "c4wz",
	"./tree/tree-lazy/tree-lazy.component.example.less": "u/ue",
	"./tree/tree-lazy/tree-lazy.example.component.html": "0pxp",
	"./tree/tree-lazy/tree-lazy.example.component.ts": "L9Zh",
	"./tree/tree-leaf-pagination/tree-leaf-pagination.component.example.less": "8NeV",
	"./tree/tree-leaf-pagination/tree-leaf-pagination.example.component.html": "bE6u",
	"./tree/tree-leaf-pagination/tree-leaf-pagination.example.component.ts": "3M5X",
	"./tree/tree-load-more/tree-load-more.component.example.less": "dER6",
	"./tree/tree-load-more/tree-load-more.example.component.html": "4odw",
	"./tree/tree-load-more/tree-load-more.example.component.ts": "4zoD",
	"./tree/tree-show-all-dialog/tree-show-all-dialog.component.example.less": "f+jd",
	"./tree/tree-show-all-dialog/tree-show-all-dialog.example.component.html": "ik8z",
	"./tree/tree-show-all-dialog/tree-show-all-dialog.example.component.ts": "0q3D",
	"./tree/tree-styling/tree-styling.example.component.html": "DY+K",
	"./tree/tree-styling/tree-styling.example.component.less": "irwK",
	"./tree/tree-styling/tree-styling.example.component.ts": "Je5P",
	"./tree/tree-visual-test/data.ts": "Gh8Q",
	"./tree/tree-visual-test/tree-basic-test/tree-basic-test.component.html": "scDb",
	"./tree/tree-visual-test/tree-basic-test/tree-basic-test.component.less": "lzqP",
	"./tree/tree-visual-test/tree-basic-test/tree-basic-test.component.ts": "Hzex",
	"./tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.html": "qw8G",
	"./tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.less": "f1Ap",
	"./tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.ts": "TOWG",
	"./tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.html": "objm",
	"./tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.less": "kio+",
	"./tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.ts": "vKNe",
	"./tree/tree-visual-test/tree-visual-test.component.html": "c751",
	"./tree/tree-visual-test/tree-visual-test.component.ts": "Vx+0",
	"./tree/tree-with-additional-content/tree-with-additional-content.example.component.html": "h/rE",
	"./tree/tree-with-additional-content/tree-with-additional-content.example.component.less": "dMrx",
	"./tree/tree-with-additional-content/tree-with-additional-content.example.component.ts": "ulVr",
	"./tree/tree.module.ts": "7IbH",
	"./viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component.html": "aUEq",
	"./viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component.ts": "qbxY",
	"./viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component.html": "siBs",
	"./viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component.ts": "hb86",
	"./welcome/welcome-page.component.html": "neNh",
	"./welcome/welcome-page.component.ts": "Irnm"
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
webpackContext.id = "W52H";

/***/ }),

/***/ "WfwH":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-with-selection/client-side-with-selection.example.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"client-side-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-selector (selectionChange)=\"onSelectorOutput($event)\"\n                          [checkboxStatus]=\"state.selector?.selectorState.checkboxStatus\"\n                          [items]=\"state.selector?.selectorState.selectorItems\">\n            </nui-selector>\n            <nui-search class=\"searchBar\" [value]=\"searchTerm\"\n                        (search)=\"applyFilters()\">\n            </nui-search>\n            <nui-repeat class=\"repeater\"\n                        [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        selectionMode=\"multi\"\n                        [selection]=\"state.repeat?.selectedItems\"\n                        (selectionChange)=\"onRepeatOutput($event)\">\n            </nui-repeat>\n            <nui-paginator class=\"paginator\" [page]=\"page\"\n                           [pageSize]=\"10\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"applyFilters()\">\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "XgtY":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-filter/data-filter-docs/data-filter-docs.example.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: DataFilterDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterDocsExampleComponent", function() { return DataFilterDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-filter-basic/data-filter-basic.example.component */ "uG0b");
/* harmony import */ var _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-filter-isolated/data-filter-isolated.example.component */ "oA+X");




class DataFilterDocsExampleComponent {
}
DataFilterDocsExampleComponent.ɵfac = function DataFilterDocsExampleComponent_Factory(t) { return new (t || DataFilterDocsExampleComponent)(); };
DataFilterDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataFilterDocsExampleComponent, selectors: [["nui-data-filter-example"]], decls: 97, vars: 0, consts: [["href", "../interfaces/IFilteringParticipants.html", "target", "_blank"], ["href", "../injectables/LocalFilteringDataSource.html", "target", "_blank"], ["target", "_blank", "href", "https://cp.solarwinds.com/pages/viewpage.action?spaceKey=NU&title=Filterable+Datasources"], ["filenamePrefix", "data-filter-basic", "exampleTitle", "Basic Usage"], ["filenamePrefix", "data-filter-isolated", "exampleTitle", "Isolated Filters"]], template: function DataFilterDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " provides a mechanism of filtering data in hierarchical components.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " do following steps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Provide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " into providers of your parent and child components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Register filters using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "this.filterService.registerFilter()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " function and pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "IFilteringParticipants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " as a parameter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "this.filterService.applyFilters()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " function to apply filters on components which are used for filtering. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Create custom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "DataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " (in our case we are extending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "LocalFilteringDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ") and inside that service inject ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " and subscribe to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "this.filterService.filteringSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " in constructor of your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "DataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " service. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "this.filterService.filteringSubject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " will be emitted when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "this.filterService.applyFilters()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " will be called in your component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Perform filtering in your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "DataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " service. To make this happen in your custom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "DataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "this.filterService.getFilters()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " function to get filter state of your component. You can see it in action in the example below (in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "getFilteredData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " function in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "DataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "More details about multi-level filtering mechanism are available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nui-data-filter-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Isolated Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "In this example you can see two components with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "nui-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " which are independent from each other. This is possible because of properly created component tree. Each component has its own ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ". This ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " has reference to its parent and doesn't have any references to sibling components. It happens because in the example below we injected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "DataFilterService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " in providers of each component and Angular creates correct DI tree.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "nui-data-filter-isolated-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_2__["DataFilterBasicExampleComponent"], _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_3__["DataFilterIsolatedExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "XmNi":
/*!*************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-basic/client-side-basic.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DepreacatedDataSourceClientSideBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepreacatedDataSourceClientSideBasicExampleComponent", function() { return DepreacatedDataSourceClientSideBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");








const _c0 = ["filteringPaginator"];
const _c1 = ["filteringSearch"];
function DepreacatedDataSourceClientSideBasicExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.color);
} }
const RANDOM_ARRAY = [
    { color: "regular-blue" },
    { color: "regular-green" },
    { color: "regular-yellow" },
    { color: "regular-cyan " },
    { color: "regular-magenta" },
    { color: "regular-black" },
    { color: "dark-blue" },
    { color: "dark-green" },
    { color: "dark-yellow" },
    { color: "dark-cyan " },
    { color: "dark-magenta" },
    { color: "dark-black" },
    { color: "light-blue" },
    { color: "light-green" },
    { color: "light-yellow" },
    { color: "light-cyan " },
    { color: "light-magenta" },
    { color: "light-black" },
];
/**
 * TODO: Remove in v12 - NUI-5835
 * @deprecated
 */
class DepreacatedDataSourceClientSideBasicExampleComponent {
    constructor(dataSourceService, changeDetection) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.searchTerm = "";
        this.page = 1;
        this.state = {
            repeat: {
                itemsSource: [],
            },
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        dataSourceService.setData(RANDOM_ARRAY);
        this.filters = ["regular", "dark", "light"];
        this.selectedFilters = [];
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSourceService.registerComponent({
                search: {
                    componentInstance: this.filteringSearch,
                },
                paginator: {
                    componentInstance: this.filteringPaginator,
                },
            });
            this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
                this.state = data;
                if (data && data.paginator && data.paginator.reset) {
                    this.filteringPaginator.page = 1;
                }
                this.changeDetection.detectChanges();
            });
            yield this.dataSourceService.applyFilters();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    onSearch(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    changePagination() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
}
DepreacatedDataSourceClientSideBasicExampleComponent.ɵfac = function DepreacatedDataSourceClientSideBasicExampleComponent_Factory(t) { return new (t || DepreacatedDataSourceClientSideBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["LocalFilteringDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DepreacatedDataSourceClientSideBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DepreacatedDataSourceClientSideBasicExampleComponent, selectors: [["nui-deprecated-client-side-basic-data-source-example"]], viewQuery: function DepreacatedDataSourceClientSideBasicExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["LocalFilteringDataSource"]])], decls: 11, vars: 5, consts: [["repeatItemTemplate", ""], [1, "client-side-example"], [1, "d-flex"], [1, "flex-row"], [1, "searchBar", 3, "value", "search"], ["filteringSearch", ""], [1, "repeater", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 1, "paginator", 3, "page", "total", "pagerAction"], ["filteringPaginator", ""]], template: function DepreacatedDataSourceClientSideBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DepreacatedDataSourceClientSideBasicExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function DepreacatedDataSourceClientSideBasicExampleComponent_Template_nui_search_search_5_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-repeat", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pagerAction", function DepreacatedDataSourceClientSideBasicExampleComponent_Template_nui_paginator_pagerAction_9_listener() { return ctx.changePagination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.page)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "XoKr":
/*!**************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/client-side/client-side-basic/client-side-basic.example.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DataSourceClientSideBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceClientSideBasicExampleComponent", function() { return DataSourceClientSideBasicExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");








const _c0 = ["filteringPaginator"];
const _c1 = ["filteringSearch"];
function DataSourceClientSideBasicExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.color);
} }
const RANDOM_ARRAY = [
    { color: "regular-blue" },
    { color: "regular-green" },
    { color: "regular-yellow" },
    { color: "regular-cyan " },
    { color: "regular-magenta" },
    { color: "regular-black" },
    { color: "dark-blue" },
    { color: "dark-green" },
    { color: "dark-yellow" },
    { color: "dark-cyan " },
    { color: "dark-magenta" },
    { color: "dark-black" },
    { color: "light-blue" },
    { color: "light-green" },
    { color: "light-yellow" },
    { color: "light-cyan " },
    { color: "light-magenta" },
    { color: "light-black" },
];
class DataSourceClientSideBasicExampleComponent {
    constructor(dataSourceService, changeDetection) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.searchTerm = "";
        this.page = 1;
        this.state = {
            repeat: {
                itemsSource: [],
            },
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        dataSourceService.setData(RANDOM_ARRAY);
        this.filters = ["regular", "dark", "light"];
        this.selectedFilters = [];
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSourceService.registerComponent({
                search: {
                    componentInstance: this.filteringSearch,
                },
                paginator: {
                    componentInstance: this.filteringPaginator,
                },
            });
            this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
                this.state = data;
                this.changeDetection.detectChanges();
            });
            yield this.dataSourceService.applyFilters();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    onSearch(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    changePagination() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
}
DataSourceClientSideBasicExampleComponent.ɵfac = function DataSourceClientSideBasicExampleComponent_Factory(t) { return new (t || DataSourceClientSideBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataSourceClientSideBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataSourceClientSideBasicExampleComponent, selectors: [["nui-client-side-basic-data-source-example"]], viewQuery: function DataSourceClientSideBasicExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]])], decls: 11, vars: 5, consts: [["repeatItemTemplate", ""], [1, "client-side-example"], [1, "d-flex"], [1, "flex-row"], [1, "searchBar", 3, "value", "search"], ["filteringSearch", ""], [1, "repeater", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 1, "paginator", 3, "page", "total", "pagerAction"], ["filteringPaginator", ""]], template: function DataSourceClientSideBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataSourceClientSideBasicExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function DataSourceClientSideBasicExampleComponent_Template_nui_search_search_5_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-repeat", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pagerAction", function DataSourceClientSideBasicExampleComponent_Template_nui_paginator_pagerAction_9_listener() { return ctx.changePagination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.page)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Z5Hn":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/index.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./clipboard/clipboard.example.component\";\nexport * from \"./data-filter/index\";\nexport * from \"./data-source/index\";\nexport * from \"./edge-detection-service/edge-detection-service.example.component\";\nexport * from \"./event-propagation-service/event-propagation-service.example.component\";\nexport * from \"./scroll-shadows/scroll-shadows.example.component\";\nexport * from \"./search-service/search-service.example.component\";\nexport * from \"./set-focus/set-focus.example.component\";\nexport * from \"./welcome/welcome-page.component\";\n");

/***/ }),

/***/ "Zk7Q":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/docs/client-side-data-source-docs.example.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-client-side-data-source-docs\",\n    templateUrl: \"./client-side-data-source-docs.example.component.html\",\n})\nexport class ClientSideDataSourceDocsComponent {\n    public subclassCode =\n`@Injectable()\nexport class MyNewClass extends ClientSideDataSource<ExampleItem> {\n    constructor(@Inject(SearchService) searchService: SearchService) {\n        super(searchService);\n    }\n}`;\n}\n");

/***/ }),

/***/ "aGgG":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/http-mock.service.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Injectable } from \"@angular/core\";\nimport { Observable, of } from \"rxjs\";\nimport { delay } from \"rxjs/operators\";\n\ninterface FoodNode {\n    name: string;\n    page?: number;\n    children?: FoodNode[];\n    isLoading?: boolean;\n    hasPagination?: boolean;\n}\n\ninterface IApiResponse {\n    items: FoodNode[];\n    total: number;\n}\n\n@Injectable()\nexport class HttpMockService {\n    private fruitsList = [\n        $localize `apple`,\n        $localize `orange`,\n        $localize `banana`,\n        $localize `watermelon`,\n        $localize `peach`,\n        $localize `pineapple`,\n        $localize `lemon`,\n        $localize `mango`,\n    ];\n    private vegetablesList = [\n        $localize `tomato`,\n        $localize `cucumber`,\n        $localize `cabbage`,\n        $localize `pepper`,\n        $localize `carrot`,\n        $localize `onion`,\n        $localize `broccoli`,\n        $localize `corn`,\n    ];\n\n    private totalItems = 1337;\n\n    getNodeItems(nodeId: string, page: number, pageSize: number): Observable<IApiResponse> {\n        // nodeId can be handled on API depending on app needs\n        const itemList = nodeId === \"Vegetables\"\n            ? this.vegetablesList\n            : this.fruitsList;\n\n        const items: FoodNode[] = Array.from({ length: pageSize }).map(() => ({\n            name: this.getRandomFrom(itemList),\n            page,\n        }));\n\n        const response = {\n            items,\n            total: this.totalItems,\n        };\n        return of(response).pipe(delay(1000));\n    }\n\n    private getRandomFrom(list: any[]) {\n        return list[Math.floor(Math.random() * list.length)];\n    }\n}\n");

/***/ }),

/***/ "aH8u":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-checkbox/tree-checkbox.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource, SelectionModel } from \"@angular/cdk/collections\";\nimport { NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\n\n\ninterface FoodNode {\n    name: string;\n    children?: FoodNode[];\n}\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Vegetables\",\n        children: [\n            {\n                name: \"Green\",\n                children: [{ name: \"Broccoli\" }, { name: \"Brussels sprouts\" }],\n            },\n            {\n                name: \"Orange\",\n                children: [{ name: \"Pumpkins\" }, { name: \"Carrots\" }],\n            },\n            {\n                name: \"Red\",\n            },\n        ],\n    },\n    {\n        name: \"Fruit\",\n        children: [\n            { name: \"Apple\" },\n            { name: \"Banana\" },\n            { name: \"Fruit loops\" },\n        ],\n    },\n    {\n        name: \"Meat\",\n    },\n];\n\n\n@Component({\n    selector: \"nui-tree-checkbox-example\",\n    templateUrl: \"tree-checkbox.example.component.html\",\n    styleUrls: [\"tree-checkbox.example.component.less\"],\n    host: { id: \"nui-tree-checkbox-example\" },\n    animations: [expand],\n})\nexport class TreeCheckboxExampleComponent {\n    public treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    public dataSource = new ArrayDataSource(TREE_DATA);\n    public selectionModel = new SelectionModel<FoodNode>(true);\n\n    public hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;\n\n    /** Whether all the descendants of the node are selected. */\n    public descendantsAllSelected(node: FoodNode): boolean {\n        const descendants = this.treeControl.getDescendants(node);\n        return descendants.length > 0 && descendants.every(child => this.selectionModel.isSelected(child));\n    }\n\n    /** Whether part of the descendants are selected */\n    public descendantsPartiallySelected(node: FoodNode): boolean {\n        const descendants = this.treeControl.getDescendants(node);\n        const result = descendants.some(child => this.selectionModel.isSelected(child));\n        return result && !this.descendantsAllSelected(node);\n    }\n\n    /** Toggle the branch selection. Select/deselect all the descendants node */\n    public branchItemSelectionToggle(node: FoodNode): void {\n        this.selectionModel.toggle(node);\n        const descendants = this.treeControl.getDescendants(node);\n        this.selectionModel.isSelected(node)\n            ? this.selectionModel.select(...descendants)\n            : this.selectionModel.deselect(...descendants);\n\n        // Force update for the parent\n        descendants.forEach(child => this.selectionModel.isSelected(child));\n        this.checkAllParentsSelection(node);\n    }\n\n    /** Toggle a leaf item selection. Check all the parents to see if they changed */\n    public leafItemSelectionToggle(node: FoodNode): void {\n        this.selectionModel.toggle(node);\n        this.checkAllParentsSelection(node);\n    }\n\n    /** Checks all the parents when a leaf node is selected/unselected */\n    private checkAllParentsSelection(node: FoodNode): void {\n        let parent: FoodNode | undefined = this.getParentNode(node);\n        while (parent) {\n            this.checkRootNodeSelection(parent);\n            parent = this.getParentNode(parent);\n        }\n    }\n\n    /** Check root node checked state and change it accordingly */\n    private checkRootNodeSelection(node: FoodNode): void {\n        const nodeSelected = this.selectionModel.isSelected(node);\n        const descendants = this.treeControl.getDescendants(node);\n        const descAllSelected = descendants.length > 0 && descendants.every(child => this.selectionModel.isSelected(child));\n        if (nodeSelected && !descAllSelected) {\n            this.selectionModel.deselect(node);\n        } else if (!nodeSelected && descAllSelected) {\n            this.selectionModel.select(node);\n        }\n    }\n\n    /** Get the parent node of a node */\n    private getParentNode(node: FoodNode): FoodNode | undefined {\n        let parent: FoodNode | undefined;\n\n        // Don't need to get parent if node on the 0 level\n        if (TREE_DATA.find(n => n === node)) {\n            return;\n        }\n\n        const search = (n: FoodNode): FoodNode | undefined => {\n            if (parent || !n.children) {\n                return;\n            }\n            if (n.children.find(i => i === node)) {\n                parent = n;\n                return;\n            }\n            return n.children.find(search);\n        };\n\n        // invoke search on the level 0 items\n        TREE_DATA.forEach(search);\n\n        if (!parent) {\n            throw new Error(\"Parent wasn't found\");\n        }\n\n        return parent;\n    }\n}\n");

/***/ }),

/***/ "aUEq":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mb-2\">\n    <nui-search placeholder=\"Search book by title\"\n                i18n-placeholder\n                [value]=\"''\"\n                (search)=\"onSearch()\"\n                (cancel)=\"onCancelSearch()\">\n    </nui-search>\n</div>\n\n<ng-container *ngIf=\"!busy && (books$ | async).length === 0\">\n    No results\n</ng-container>\n\n<!-- Note that the height is defined in order to accommodate virtual scrolling -->\n<nui-repeat [itemsSource]=\"books$ | async\"\n            [repeatItemTemplateRef]=\"userItemTemplate\"\n            [virtualScroll]=\"true\"\n            style=\"height: 300px;\"\n            [itemSize]=\"30\">\n</nui-repeat>\n\n<!--This progress bar is for demo purposes only. Please consult with your UX designer to determine an appropriate layout for your implementation.-->\n<nui-progress [show]=\"busy\" compactMode=\"true\"></nui-progress>\n\n<ng-template #userItemTemplate let-book=\"item\">\n    <div>\n        <span class=\"nui-text-secondary\">{{book.title}}</span>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "aX5t":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-with-icon/tag-with-icon.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-tag nui-tag-with-icon nui-tag-with-border-critical mr-1\">\n    <nui-icon icon=\"severity_critical\"\n            iconSize=\"small\"></nui-icon>\n    Tag critical\n</div>\n<div class=\"nui-tag nui-tag-with-icon nui-tag-warning mr-1\">\n    <nui-icon icon=\"customize\"\n            iconColor=\"black\"\n            iconSize=\"small\"></nui-icon>\n    Tag warning\n</div>\n<div class=\"nui-tag nui-tag-with-icon mr-1\">\n    <nui-icon icon=\"key\"\n            iconColor=\"black\"\n            iconSize=\"small\"></nui-icon>\n    Tag label\n</div>\n");

/***/ }),

/***/ "aZxA":
/*!***************************************************************************!*\
  !*** ./demo/src/components/demo/common/welcome/welcome-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WelcomePageComponent {
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["nui-demo-welcome-page"]], decls: 2, vars: 0, template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Welcome to Nui Demo Page!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "bE6u":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-leaf-pagination/tree-leaf-pagination.example.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        {{node.name}}, fromPage: {{node.page}}\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node #nestedNode=cdkNestedTreeNode *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\"\n            (click)=\"onToggleClick(node, nestedNode)\"\n            cdkTreeNodeToggle>\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n\n            <div nui-busy [busy]=\"node.isLoading\" style=\"min-height: 20px;\">\n                <ng-container cdkTreeNodeOutlet ></ng-container>\n                <nui-paginator *ngIf=\"node.hasPagination && nodesTotalItems[node.name]\"\n                    [page]=\"1\"\n                    [pageSize]=\"pageSize\"\n                    (pagerAction)=\"loadNodeItems(node, nestedNode, $event)\"\n                    [total]=\"nodesTotalItems[node.name]\">\n                </nui-paginator>\n            </div>\n\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "bEQ3":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/docs/data-source-docs.example.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Local Filtering Data Source</h2>\n<p>The main responsibility of a data source is to process one or more filters (e.g. pagination, sorting, search, etc.)\n    from any filtering components before exposing the data to a presentation layer.\n    The <code>LocalFilteringDataSource</code> aims to allow filtering components to be independent from\n    the main presentation component by allowing each of them to communicate to the service how they each individually\n    want to filter the data. The presentation component can then ask for the pre-filtered data via the service.\n</p>\n<span>Filtering components can be registered with the service in the following manner:</span>\n    <ul>\n        <li>use <code> this.dataSourceService.componentTree = {{'{'}}\n            search: {{'{'}}...{{'}'}}\n            {{'}'}};\n        </code> to set components that will be part of filtering process\n        </li>\n        <li>implement <code>getFilteredData</code> in your own service or use existing from <code>LocalFilteringDataSource</code>\n        </li>\n        <li>use it by subscribing to output and applying newly received data</li>\n    </ul>\n<p>Visualization of data flow is available <a target=\"_blank\"\n                                              href=\"https://cp.solarwinds.com/display/NU/Filtered+view+communication+mechanism\">here</a>.\n</p>\n\n<nui-message type=\"critical\">\n    <strong>Warning:</strong> If you are planning on using <abbr title=\"Ahead of Time\">AoT</abbr> compilation, avoid\n    <b>directly</b> providing <code>LocalFilteringDataSource</code>.  The search service inside <code>LocalFilteringDataSource</code>\n    will not be populated under AoT compilation (JIT compilation will work normally).  A simple work around is to create a\n    simple class, have it inherit/extend <code>LocalFilteringDataSource</code>, and then provide that.<br>\n    <p><nui-example-code language=\"typescript\">{{subclassCode}}</nui-example-code></p>\n</nui-message>\n\n\n<nui-example-wrapper filenamePrefix=\"client-side\" exampleTitle=\"Client Side\">\n    <nui-deprecated-client-side-basic-data-source-example></nui-deprecated-client-side-basic-data-source-example>\n</nui-example-wrapper>\n\n<h2>Custom Search</h2>\n<p>If needed to fully or partially override logic of <code>SearchService</code>, you can easily provide a new class extended\n    from <code>SearchService</code> using Angular DI on the Component level using\n    <a href=\"https://angular.io/guide/dependency-injection-providers#alternative-class-providers\">Alternative class provider</a>.\n</p>\n<p>This example shows how to do case-sensitive search.</p>\n<nui-example-wrapper filenamePrefix=\"client-side-custom-search\" exampleTitle=\"Client-Side Custom Search\">\n    <nui-deprecated-client-side-custom-search-example></nui-deprecated-client-side-custom-search-example>\n</nui-example-wrapper>\n\n<h2>Delayed Search</h2>\n<p>The rxjs pipe function can be used to introduce a delay or debounce.</p>\n<nui-example-wrapper filenamePrefix=\"client-side-delayed\" exampleTitle=\"Client Side Delayed\">\n    <nui-deprecated-client-side-delayed-data-source-example></nui-deprecated-client-side-delayed-data-source-example>\n</nui-example-wrapper>\n\n<h2>Filtering</h2>\n<p>\nHere we're combining several components to implement filter panel. For more information please see inline comments.\n</p>\n<nui-example-wrapper filenamePrefix=\"client-side-filtering\" exampleTitle=\"Manually Composed Filtering Layout\">\n    <nui-deprecated-client-side-filtering-data-source-example></nui-deprecated-client-side-filtering-data-source-example>\n</nui-example-wrapper>\n\n<h2>Selection</h2>\n<p>\n    <code><a href=\"../injectables/ListService.html\" target=\"_blank\">ListService</a></code> helps with\n    selection handling, both for the repeat and the selector.\n</p>\n<nui-example-wrapper filenamePrefix=\"client-side-with-selection\" exampleTitle=\"Client-Side Filtering With Selection\">\n    <nui-deprecated-client-side-with-selection-example></nui-deprecated-client-side-with-selection-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "c/8u":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-counter-basic/badge-counter-basic.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-badge-counter\"\n     [attr.data-before]=\"counter\">\n</div>\n");

/***/ }),

/***/ "c4wz":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-docs/tree-docs.example.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tree-docs-example\",\n    templateUrl: \"./tree-docs.example.component.html\",\n})\n\nexport class TreeDocsExampleComponent {\n    initialSetupCode = `\n// our module where we want to use tree features\nimport { CdkTreeModule } from \"@angular/cdk/tree\";\n\n@NgModule({\n    imports: [\n        CdkTreeModule,\n        // other modules that we might need\n    ],\n    declarations: [ /* our module declaration */],\n    exports:      [ /* our exports */ ],\n})\nexport class MyModule {}`\n        .replace(\"\\r\\n\", \"<br/>\") // nice rendering\n    ;\n}\n\n");

/***/ }),

/***/ "c751":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-visual-test.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <nui-tree-basic-test></nui-tree-basic-test>\n        </div>\n        <div class=\"col\">\n            <nui-tree-checkbox-test></nui-tree-checkbox-test>\n        </div>\n        <div class=\"col\">\n            <nui-tree-paginator-test></nui-tree-paginator-test>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "cY2v":
/*!***********************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: VirtualViewportManagerDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualViewportManagerDocsComponent", function() { return VirtualViewportManagerDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _repeat_with_viewport_manager_repeat_with_viewport_manager_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repeat-with-viewport-manager/repeat-with-viewport-manager.example.component */ "U2j4");




class VirtualViewportManagerDocsComponent {
    getRepeatPropKey(key) {
        return key;
    }
}
VirtualViewportManagerDocsComponent.ɵfac = function VirtualViewportManagerDocsComponent_Factory(t) { return new (t || VirtualViewportManagerDocsComponent)(); };
VirtualViewportManagerDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VirtualViewportManagerDocsComponent, selectors: [["nui-virtual-viewport-manager-docs"]], decls: 63, vars: 2, consts: [["href", "../interfaces/IVirtualPageConfig.html", "target", "_blank"], ["href", "../interfaces/IVirtualViewportResetOptions.html", "target", "_blank"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "repeat-with-viewport-manager", "exampleTitle", "Repeat with ViewportManager and Search"]], template: function VirtualViewportManagerDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VirtualViewportManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " provides a mechanism for sequencing the rendered range stream emitted from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CDK Viewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " into distinct page ranges.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "VirtualViewportManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " do the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "VirtualViewportManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " to the providers of your parent component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register the filtering components on the dataSource via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "this.dataSource.registerFilter()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Set up the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "VirtualViewportManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " listener in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "AfterViewInit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " lifecycle hook. Invoke viewport.observeNextPage$() with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "IVirtualPageConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " to start observing/responding to next page events.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Reset the viewport on search events by invoking viewport.reset() with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "IVirtualViewportResetOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Repeat with VirtualViewportManager and Search Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "nui-repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " allows you to manage the virtual viewport by exposing its ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " property. In comparison to the non-filtered virtual/infinite scroll usage, if the user filters the results in some way, say with a search box, we need to reset progress on our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "VirtualViewportManager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ". In the following example, when the data is refreshed with the filtered results, the viewport manager's progress is reset in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "doSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " method. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nui-message", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Important: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " For virtual scroll to function correctly, the nui-repeat element must have a defined height. See the template file in the example source expander below for how to do this. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nui-repeat-with-viewport-manager-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getRepeatPropKey("viewportRef"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _repeat_with_viewport_manager_repeat_with_viewport_manager_example_component__WEBPACK_IMPORTED_MODULE_3__["RepeatWithViewportManagerExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "dER6":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-load-more/tree-load-more.component.example.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n\n        a:hover {\n            text-decoration: none;\n            cursor: pointer;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n\n    .content-container {\n        min-height: 20px;\n    }\n}\n");

/***/ }),

/***/ "dMrx":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-with-additional-content/tree-with-additional-content.example.component.less ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__header-title {\n        width: 100%;\n        line-height: 18px;\n    }\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n\n        &-title {\n            width: 100%;\n        }\n    }\n\n    &__invisible {\n        display: none;\n    }\n\n    .nui-badge-counter {\n        position: relative;\n        height: 18px;\n\n        &:after {\n            background: #555;\n            width: 45px;\n            height: 18px;\n            line-height: 18px;\n            top: inherit;\n        }\n    }\n}\n");

/***/ }),

/***/ "djXJ":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-custom-search/client-side-custom-search.example.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    ClientSideDataSource,\n    INovaFilteringOutputs,\n    PaginatorComponent,\n    SearchComponent,\n    SearchService,\n} from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\nconst RANDOM_ARRAY = [\n    {color: \"regular-blue\"},\n    {color: \"regular-green\"},\n    {color: \"regular-yellow\"},\n    {color: \"regular-cyan \"},\n    {color: \"regular-magenta\"},\n    {color: \"regular-black\"},\n    {color: \"dark-blue\"},\n    {color: \"dark-green\"},\n    {color: \"dark-yellow\"},\n    {color: \"dark-cyan \"},\n    {color: \"dark-magenta\"},\n    {color: \"dark-black\"},\n    {color: \"light-blue\"},\n    {color: \"light-green\"},\n    {color: \"light-yellow\"},\n    {color: \"light-cyan \"},\n    {color: \"light-magenta\"},\n    {color: \"light-black\"},\n];\n\ninterface ExampleItem {\n    color: string;\n}\n\n@Injectable()\nexport class ClientSideCustomSearchService extends SearchService {\n    protected filterPredicate(item: any, searchValue: any): boolean {\n        return item.toString().indexOf(searchValue.toString()) !== -1;\n    }\n}\n\n@Component({\n    selector: \"nui-client-side-custom-search-example\",\n    templateUrl: \"./client-side-custom-search.example.component.html\",\n    providers: [ClientSideDataSource, {provide: SearchService, useClass: ClientSideCustomSearchService}],\n})\nexport class DataSourceClientSideCustomSearchExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n\n    public filters: any[];\n    public selectedFilters: any[];\n\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(public dataSourceService: ClientSideDataSource<ExampleItem>,\n                public changeDetection: ChangeDetectorRef) {\n        dataSourceService.setData(RANDOM_ARRAY);\n\n        this.filters = [\"regular\", \"dark\", \"light\"];\n        this.selectedFilters = [];\n    }\n\n    async ngAfterViewInit() {\n        this.dataSourceService.componentTree = {\n            search: {\n                componentInstance: this.filteringSearch,\n            },\n            paginator: {\n                componentInstance: this.filteringPaginator,\n            },\n        };\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = data;\n            this.changeDetection.detectChanges();\n        });\n        await this.dataSourceService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public async onSearch(value: string) {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async changePagination() {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async applyFilters() {\n        await this.dataSourceService.applyFilters();\n    }\n}\n");

/***/ }),

/***/ "doCF":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-system-statuses/badge-system-statuses.component.less ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nui-badge-empty, .nui-badge-counter {\n    display: inline-block;\n    width: 50px;\n    height: 30px;\n    position: relative;\n    margin-right: 20px;\n    border: 1px solid #3c3c3c;\n}\n");

/***/ }),

/***/ "eU6T":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-test/data-filter-test.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-data-filter-basic-example></nui-data-filter-basic-example>\n<nui-data-filter-isolated-example></nui-data-filter-isolated-example>\n");

/***/ }),

/***/ "f+jd":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-show-all-dialog/tree-show-all-dialog.component.example.less ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n\n    .content-container {\n        min-height: 20px;\n    }\n\n    &__show-all {\n        margin-left: 30px;\n        cursor: pointer;\n    }\n}\n");

/***/ }),

/***/ "f1Ap":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.less ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "fjfW":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.ts ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    INovaFilteringOutputs,\n    LocalFilteringDataSource,\n    PaginatorComponent,\n    SearchComponent,\n    SearchService,\n} from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\nconst RANDOM_ARRAY = [\n    {color: \"regular-blue\"},\n    {color: \"regular-green\"},\n    {color: \"regular-yellow\"},\n    {color: \"regular-cyan \"},\n    {color: \"regular-magenta\"},\n    {color: \"regular-black\"},\n    {color: \"dark-blue\"},\n    {color: \"dark-green\"},\n    {color: \"dark-yellow\"},\n    {color: \"dark-cyan \"},\n    {color: \"dark-magenta\"},\n    {color: \"dark-black\"},\n    {color: \"light-blue\"},\n    {color: \"light-green\"},\n    {color: \"light-yellow\"},\n    {color: \"light-cyan \"},\n    {color: \"light-magenta\"},\n    {color: \"light-black\"},\n];\n\ninterface ExampleItem {\n    color: string;\n}\n\n@Injectable()\nexport class ClientSideCustomSearchService extends SearchService {\n    protected filterPredicate(item: any, searchValue: any): boolean {\n        return item.toString().indexOf(searchValue.toString()) !== -1;\n    }\n}\n\n/**\n * TODO: Remove in v12 - NUI-5835\n * @deprecated\n */\n@Component({\n    selector: \"nui-deprecated-client-side-custom-search-example\",\n    templateUrl: \"./client-side-custom-search.example.component.html\",\n    providers: [LocalFilteringDataSource, {provide: SearchService, useClass: ClientSideCustomSearchService}],\n})\nexport class DepreacatedDataSourceClientSideCustomSearchExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n\n    public filters: any[];\n    public selectedFilters: any[];\n\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(public dataSourceService: LocalFilteringDataSource<ExampleItem>,\n                public changeDetection: ChangeDetectorRef) {\n        dataSourceService.setData(RANDOM_ARRAY);\n\n        this.filters = [\"regular\", \"dark\", \"light\"];\n        this.selectedFilters = [];\n    }\n\n    ngAfterViewInit() {\n        this.dataSourceService.componentTree = {\n            search: {\n                componentInstance: this.filteringSearch,\n            },\n            paginator: {\n                componentInstance: this.filteringPaginator,\n            },\n        };\n        this.dataSourceService.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = data;\n            if (data && data.paginator && data.paginator.reset) {\n                this.filteringPaginator.page = 1;\n            }\n            this.changeDetection.detectChanges();\n        });\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public onSearch(value: string) {\n        this.dataSourceService.applyFilters();\n    }\n\n    public changePagination() {\n        this.dataSourceService.applyFilters();\n    }\n\n    public applyFilters() {\n        this.dataSourceService.applyFilters();\n    }\n}\n");

/***/ }),

/***/ "fsYv":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-basic/tree-basic.example.component.less ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "gcIZ":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/docs/data-source-docs.example.component.ts ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n/**\n * TODO: Remove in  - NUI-5835\n * @deprecated\n */\n@Component({\n    selector: \"nui-data-source-example\",\n    templateUrl: \"./data-source-docs.example.component.html\",\n})\nexport class DataSourceExampleComponent {\n    public subclassCode =\n`@Injectable()\nexport class MyNewClass extends LocalFilteringDataSource<ExampleItem> {\n    constructor(@Inject(SearchService) searchService: SearchService) {\n        super(searchService);\n    }\n}`;\n}\n");

/***/ }),

/***/ "h/rE":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-with-additional-content/tree-with-additional-content.example.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width: 360px;\">\n    <cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n            <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n            <span class=\"nui-tree__leaf-title\"> {{node.name}} </span>\n            <nui-menu icon=\"menu\" id=\"nui-demo-basic-menu\"\n                    [appendToBody]=\"true\"\n                    displayStyle=\"action\">\n                <nui-menu-action *ngFor=\"let item of items\">\n                    {{item}}\n                </nui-menu-action>\n            </nui-menu>\n        </cdk-nested-tree-node>\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n            <div class=\"nui-tree__header\" cdkTreeNodeToggle (click)=\"onToggleClick()\">\n                <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n                <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n                <div class=\"nui-badge-counter\"\n                    [attr.data-before]=\"node.children.length\">\n                </div>\n            </div>\n            <div class=\"nui-tree__body\"\n                [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n                [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n                <ng-container cdkTreeNodeOutlet></ng-container>\n            </div>\n        </cdk-nested-tree-node>\n    </cdk-tree>\n</div>\n");

/***/ }),

/***/ "hSDq":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-basic/client-side-basic.example.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    ClientSideDataSource,\n    INovaFilteringOutputs, PaginatorComponent, SearchComponent\n} from \"@nova-ui/bits\";\nimport { Subscription } from \"rxjs\";\n\nconst RANDOM_ARRAY = [\n    {color: \"regular-blue\"},\n    {color: \"regular-green\"},\n    {color: \"regular-yellow\"},\n    {color: \"regular-cyan \"},\n    {color: \"regular-magenta\"},\n    {color: \"regular-black\"},\n    {color: \"dark-blue\"},\n    {color: \"dark-green\"},\n    {color: \"dark-yellow\"},\n    {color: \"dark-cyan \"},\n    {color: \"dark-magenta\"},\n    {color: \"dark-black\"},\n    {color: \"light-blue\"},\n    {color: \"light-green\"},\n    {color: \"light-yellow\"},\n    {color: \"light-cyan \"},\n    {color: \"light-magenta\"},\n    {color: \"light-black\"},\n];\n\ninterface ExampleItem {\n    color: string;\n}\n\n@Component({\n    selector: \"nui-client-side-basic-data-source-example\",\n    providers: [ ClientSideDataSource ],\n    templateUrl: \"./client-side-basic.example.component.html\",\n})\nexport class DataSourceClientSideBasicExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n\n    public filters: any[];\n    public selectedFilters: any[];\n\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n\n    private outputsSubscription: Subscription;\n\n    constructor(public dataSourceService: ClientSideDataSource<ExampleItem>,\n                public changeDetection: ChangeDetectorRef) {\n        dataSourceService.setData(RANDOM_ARRAY);\n\n        this.filters = [\"regular\", \"dark\", \"light\"];\n        this.selectedFilters = [];\n    }\n\n    async ngAfterViewInit() {\n        this.dataSourceService.registerComponent({\n            search: {\n                componentInstance: this.filteringSearch,\n            },\n            paginator: {\n                componentInstance: this.filteringPaginator,\n            },\n        });\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n                this.state = data;\n                this.changeDetection.detectChanges();\n        });\n        await this.dataSourceService.applyFilters();\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public async onSearch(value: string) {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async changePagination() {\n        await this.dataSourceService.applyFilters();\n    }\n\n    public async applyFilters() {\n        await this.dataSourceService.applyFilters();\n    }\n}\n");

/***/ }),

/***/ "hY/w":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-delayed/client-side-delayed.example.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from \"@angular/core\";\nimport {\n    INovaFilteringOutputs, LocalFilteringDataSource, PaginatorComponent, SearchComponent, SorterComponent\n} from \"@nova-ui/bits\";\nimport { Subject } from \"rxjs\";\nimport { Subscription } from \"rxjs\";\nimport { debounceTime } from \"rxjs/operators\";\n\nconst INITIAL_ARRAY = [\n    {color: \"regular-blue\"},\n    {color: \"regular-green\"},\n    {color: \"regular-yellow\"},\n    {color: \"regular-cyan\"},\n    {color: \"regular-magenta\"},\n    {color: \"regular-black\"},\n    {color: \"dark-blue\"},\n    {color: \"dark-green\"},\n    {color: \"dark-yellow\"},\n    {color: \"dark-cyan\"},\n    {color: \"dark-magenta\"},\n    {color: \"light-blue\"},\n    {color: \"light-green\"},\n    {color: \"light-yellow\"},\n    {color: \"light-cyan\"},\n    {color: \"light-magenta\"},\n];\n\n/**\n * TODO: Remove in v12 - NUI-5835\n * @deprecated\n */\n@Component({\n    selector: \"nui-deprecated-client-side-delayed-data-source-example\",\n    providers: [LocalFilteringDataSource],\n    templateUrl: \"./client-side-delayed.example.component.html\",\n})\nexport class DepreacatedDataSourceClientSideDelayedExampleComponent implements AfterViewInit, OnDestroy {\n    public searchTerm = \"\";\n    public page = 1;\n    public sorter = {\n        columns: [\"color\", \"red\", \"green\", \"blue\"],\n        sortedColumn: \"color\",\n        direction: \"asc\",\n    };\n\n    public state: INovaFilteringOutputs = {\n        repeat: {\n            itemsSource: [],\n        },\n        paginator: {\n            // @ts-ignore: used for demo purposes\n            total: undefined,\n        },\n    };\n\n    public filters: any[];\n    public selectedFilters: any[];\n\n    private delayActionSubject: Subject<any> = new Subject();\n    private outputsSubscription: Subscription;\n\n    @ViewChild(\"filteringPaginator\") filteringPaginator: PaginatorComponent;\n    @ViewChild(\"filteringSearch\") filteringSearch: SearchComponent;\n    @ViewChild(\"filteringSorter\") filteringSorter: SorterComponent;\n\n    constructor(public dataSourceService: LocalFilteringDataSource<any>,\n                public changeDetection: ChangeDetectorRef) {\n        dataSourceService.setData(INITIAL_ARRAY);\n\n        this.filters = [\"regular\", \"dark\", \"light\"];\n        this.selectedFilters = [];\n    }\n\n    ngAfterViewInit() {\n        this.dataSourceService.componentTree = {\n            search: {\n                componentInstance: this.filteringSearch,\n            },\n            paginator: {\n                componentInstance: this.filteringPaginator,\n            },\n        };\n        this.dataSourceService.applyFilters();\n        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data: INovaFilteringOutputs) => {\n            this.state = data;\n            if (data.paginator?.reset) {\n                this.filteringPaginator.page = 1;\n            }\n            this.changeDetection.detectChanges();\n        });\n        this.delayActionSubject.pipe(debounceTime(500)).subscribe(() => {\n            this.dataSourceService.applyFilters();\n        });\n    }\n\n    ngOnDestroy() {\n        this.outputsSubscription.unsubscribe();\n    }\n\n    public onSearch() {\n        this.delayActionSubject.next();\n    }\n\n    public changePagination() {\n        this.dataSourceService.applyFilters();\n    }\n\n}\n");

/***/ }),

/***/ "hb86":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { RepeatComponent } from \"@nova-ui/bits\";\n\n@Component({\n  selector: \"nui-virtual-viewport-manager-docs\",\n  templateUrl: \"./virtual-viewport-manager-docs.component.html\",\n})\nexport class VirtualViewportManagerDocsComponent {\n    getRepeatPropKey(key: keyof RepeatComponent): string {\n        return key;\n    }\n}\n");

/***/ }),

/***/ "i5UG":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"client-side-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-search class=\"searchBar\" [value]=\"searchTerm\"\n                        (search)=\"onSearch($event)\"\n                        #filteringSearch>\n            </nui-search>\n            <nui-repeat class=\"repeater\" [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        #filteringRepeat>\n            </nui-repeat>\n            <nui-paginator class=\"paginator\" [page]=\"page\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"changePagination()\"\n                           #filteringPaginator>\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "igbI":
/*!******************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/client-side/client-side-custom-search/client-side-custom-search.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ClientSideCustomSearchService, DataSourceClientSideCustomSearchExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSideCustomSearchService", function() { return ClientSideCustomSearchService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceClientSideCustomSearchExampleComponent", function() { return DataSourceClientSideCustomSearchExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../src/lib/paginator/paginator.component */ "4E9B");








const _c0 = ["filteringPaginator"];
const _c1 = ["filteringSearch"];
function DataSourceClientSideCustomSearchExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.color);
} }
const RANDOM_ARRAY = [
    { color: "regular-blue" },
    { color: "regular-green" },
    { color: "regular-yellow" },
    { color: "regular-cyan " },
    { color: "regular-magenta" },
    { color: "regular-black" },
    { color: "dark-blue" },
    { color: "dark-green" },
    { color: "dark-yellow" },
    { color: "dark-cyan " },
    { color: "dark-magenta" },
    { color: "dark-black" },
    { color: "light-blue" },
    { color: "light-green" },
    { color: "light-yellow" },
    { color: "light-cyan " },
    { color: "light-magenta" },
    { color: "light-black" },
];
class ClientSideCustomSearchService extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SearchService"] {
    filterPredicate(item, searchValue) {
        return item.toString().indexOf(searchValue.toString()) !== -1;
    }
}
ClientSideCustomSearchService.ɵfac = function ClientSideCustomSearchService_Factory(t) { return ɵClientSideCustomSearchService_BaseFactory(t || ClientSideCustomSearchService); };
ClientSideCustomSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientSideCustomSearchService, factory: ClientSideCustomSearchService.ɵfac });
const ɵClientSideCustomSearchService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ClientSideCustomSearchService);
class DataSourceClientSideCustomSearchExampleComponent {
    constructor(dataSourceService, changeDetection) {
        this.dataSourceService = dataSourceService;
        this.changeDetection = changeDetection;
        this.searchTerm = "";
        this.page = 1;
        this.state = {
            repeat: {
                itemsSource: [],
            },
            paginator: {
                // @ts-ignore: used for demo purposes
                total: undefined,
            },
        };
        dataSourceService.setData(RANDOM_ARRAY);
        this.filters = ["regular", "dark", "light"];
        this.selectedFilters = [];
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSourceService.componentTree = {
                search: {
                    componentInstance: this.filteringSearch,
                },
                paginator: {
                    componentInstance: this.filteringPaginator,
                },
            };
            this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
                this.state = data;
                this.changeDetection.detectChanges();
            });
            yield this.dataSourceService.applyFilters();
        });
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
    onSearch(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    changePagination() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
    applyFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dataSourceService.applyFilters();
        });
    }
}
DataSourceClientSideCustomSearchExampleComponent.ɵfac = function DataSourceClientSideCustomSearchExampleComponent_Factory(t) { return new (t || DataSourceClientSideCustomSearchExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DataSourceClientSideCustomSearchExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataSourceClientSideCustomSearchExampleComponent, selectors: [["nui-client-side-custom-search-example"]], viewQuery: function DataSourceClientSideCustomSearchExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filteringSearch = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["ClientSideDataSource"], { provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SearchService"], useClass: ClientSideCustomSearchService }])], decls: 11, vars: 5, consts: [["repeatItemTemplate", ""], [1, "client-side-example"], [1, "d-flex"], [1, "flex-row"], [1, "searchBar", 3, "value", "search"], ["filteringSearch", ""], [1, "repeater", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["activeClass", "active", "disabledClass", "disabled", "showPrevNext", "true", 1, "paginator", 3, "page", "total", "pagerAction"], ["filteringPaginator", ""]], template: function DataSourceClientSideCustomSearchExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataSourceClientSideCustomSearchExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-search", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function DataSourceClientSideCustomSearchExampleComponent_Template_nui_search_search_5_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-repeat", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nui-paginator", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pagerAction", function DataSourceClientSideCustomSearchExampleComponent_Template_nui_paginator_pagerAction_9_listener() { return ctx.changePagination(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("page", ctx.page)("total", ctx.state.paginator == null ? null : ctx.state.paginator.total);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_4__["RepeatComponent"], _src_lib_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_5__["PaginatorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ik8z":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-show-all-dialog/tree-show-all-dialog.example.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"max-width: 600px;\">\n    <cdk-tree class=\"nui-tree\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n            <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n            <div class=\"d-flex justify-content-between w-100\"><span>Node: {{node.name}}</span> <span> Status: {{node.status}}</span> </div>\n        </cdk-nested-tree-node>\n        <cdk-nested-tree-node #nestedNode=cdkNestedTreeNode *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree__branch\">\n            <div class=\"nui-tree__header\"\n                (click)=\"onToggleClick(node, nestedNode)\"\n                cdkTreeNodeToggle>\n                <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n                <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n            </div>\n            <div class=\"nui-tree__body\"\n                 [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n                 [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n\n                <div nui-busy [busy]=\"node.isLoading\" style=\"min-height: 20px;\">\n                    <ng-container cdkTreeNodeOutlet ></ng-container>\n                    <a *ngIf=\"node.hasChildren && nodesTotalItems[node.name]\"\n                        class=\"nui-tree__show-all\"\n                        (click)=\"showAll(node)\">Show All ({{nodesTotalItems[node.name]}})</a>\n                </div>\n            </div>\n        </cdk-nested-tree-node>\n    </cdk-tree>\n</div>\n");

/***/ }),

/***/ "irwK":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-styling/tree-styling.example.component.less ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "jI/u":
/*!******************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/event-propagation-service/event-propagation-service.example.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EventPropagationServiceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPropagationServiceExampleComponent", function() { return EventPropagationServiceExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox.component */ "nOFM");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/radio/radio-group.component */ "lLUT");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/divider/divider.component */ "UGtJ");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");








class EventPropagationServiceExampleComponent {
    constructor(eventPropagationService, toastService) {
        this.eventPropagationService = eventPropagationService;
        this.toastService = toastService;
    }
    handleClick(event) {
        const target = event.target;
        this.toastService.clear();
        if (this.eventPropagationService.targetShouldPropagate(event)) {
            this.toastService.success({
                message: "Event Target Tag Name: " + target.tagName,
                title: "Event Propagates!",
            });
        }
        else {
            this.toastService.warning({
                message: "Event Target Tag Name: " + target.tagName,
                title: "Event Doesn't Propagate!",
            });
        }
    }
}
EventPropagationServiceExampleComponent.ɵfac = function EventPropagationServiceExampleComponent_Factory(t) { return new (t || EventPropagationServiceExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["EventPropagationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
EventPropagationServiceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EventPropagationServiceExampleComponent, selectors: [["nui-event-propagation-service-example"]], decls: 22, vars: 2, consts: [[1, "nui-demo-event-propagation-service"], ["value", "Textbox", "customBoxWidth", "150px", 3, "click"], ["nui-button", "", "type", "button", "displayStyle", "primary", 3, "click"], ["value", "readonly", 3, "checked", "click"], ["value", "example", 3, "checked", "click"], ["role", "button", 3, "click"], [3, "click"], ["icon", "severity_info", "iconSize", "small"]], template: function EventPropagationServiceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Shouldn't propagate examples:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-textbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_nui_textbox_click_3_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_button_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nui-radio", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_nui_radio_click_6_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Radio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_nui_checkbox_click_8_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Checkbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_a_click_10_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nui-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Should propagate examples:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_div_click_15_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "nui-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_h4_click_18_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EventPropagationServiceExampleComponent_Template_p_click_20_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    } }, directives: [_src_lib_textbox_textbox_component__WEBPACK_IMPORTED_MODULE_2__["TextboxComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_radio_radio_group_component__WEBPACK_IMPORTED_MODULE_4__["RadioComponent"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"], _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_6__["DividerComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"]], styles: [".nui-demo-event-propagation-service[_ngcontent-%COMP%]{\n        max-width: 260px;\n    }"] });


/***/ }),

/***/ "kf08":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-visual-test/badge-visual-test.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-visual-test\",\n    templateUrl: \"./badge-visual-test.component.html\",\n    styleUrls: [\"./badge-visual-test.component.less\"],\n})\nexport class BadgeVisualTestComponent {\n}\n");

/***/ }),

/***/ "kio+":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.less ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n\n    .content-container {\n        min-height: 20px;\n    }\n}\n");

/***/ }),

/***/ "kirR":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-novaui/badge-novaui.component.less ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host div, :host button {\n    display: inline-block;\n    width: 150px;\n    margin: 0 20px 20px 0;\n}\n\ndiv {\n    position: relative;\n    vertical-align: top;\n}\n\nh3 {\n    margin-top: 0;\n}\n");

/***/ }),

/***/ "lIMJ":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-filter/data-filter-test/data-filter-test.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DataFilterTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterTestComponent", function() { return DataFilterTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-filter-basic/data-filter-basic.example.component */ "uG0b");
/* harmony import */ var _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-filter-isolated/data-filter-isolated.example.component */ "oA+X");



class DataFilterTestComponent {
}
DataFilterTestComponent.ɵfac = function DataFilterTestComponent_Factory(t) { return new (t || DataFilterTestComponent)(); };
DataFilterTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataFilterTestComponent, selectors: [["nui-data-filter-example"]], decls: 2, vars: 0, template: function DataFilterTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-data-filter-basic-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nui-data-filter-isolated-example");
    } }, directives: [_data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["DataFilterBasicExampleComponent"], _data_filter_isolated_data_filter_isolated_example_component__WEBPACK_IMPORTED_MODULE_2__["DataFilterIsolatedExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "lzqP":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-basic-test/tree-basic-test.component.less ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "mU2q":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-customization/badge-customization.component.less ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    display: inline-block;\n    width: 50px;\n    height: 30px;\n    position: relative;\n    margin-right: 20px;\n    border: 1px solid #3c3c3c;\n}\n\n.nui-badge-counter-custom:after {\n    background: #0c5593;\n    border-radius: 0;\n    color: yellow;\n}\n\n.nui-badge-empty-custom:after {\n    background: #6b6ecf;\n    border-radius: 0;\n    transform: rotate(45deg);\n}\n");

/***/ }),

/***/ "n4pp":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-basic/client-side-basic.example.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"client-side-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-search class=\"searchBar\" [value]=\"searchTerm\"\n                        (search)=\"onSearch($event)\"\n                        #filteringSearch>\n            </nui-search>\n            <nui-repeat class=\"repeater\" [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        #filteringRepeat>\n            </nui-repeat>\n            <nui-paginator class=\"paginator\" [page]=\"page\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"changePagination()\"\n                           #filteringPaginator>\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "neNh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/welcome/welcome-page.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    Welcome to Nui Demo Page!\n</div>\n");

/***/ }),

/***/ "nt5H":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-empty-basic/badge-empty-basic.component.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    position: relative;\n    height: 30px;\n    width: 30px;\n    border: 1px solid #3c3c3c;\n}\n");

/***/ }),

/***/ "oA+X":
/*!********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-filter/data-filter-isolated/data-filter-isolated.example.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DataFilterIsolatedExampleComponent, NuiDataFilterIsolatedTableComponent, NuiDataFilterIsolatedListComponent, FilteringIsolatedTimeFramePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterIsolatedExampleComponent", function() { return DataFilterIsolatedExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterIsolatedTableComponent", function() { return NuiDataFilterIsolatedTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterIsolatedListComponent", function() { return NuiDataFilterIsolatedListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteringIsolatedTimeFramePickerComponent", function() { return FilteringIsolatedTimeFramePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-filter-basic/data-filter-basic.example.component */ "uG0b");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../src/lib/divider/divider.component */ "UGtJ");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table.component */ "ey6q");
/* harmony import */ var _src_lib_table_table_cell_table_column_def_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-column-def.directive */ "XeyC");
/* harmony import */ var _src_lib_table_table_cell_table_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-header-cell-def.directive */ "htGY");
/* harmony import */ var _src_lib_table_table_cell_table_cell_def_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-cell-def.directive */ "/BSE");
/* harmony import */ var _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-row/table-row.component */ "LFiI");
/* harmony import */ var _src_lib_table_table_cell_table_header_cell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-header-cell.component */ "Ppt+");
/* harmony import */ var _src_lib_table_table_cell_table_cell_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-cell.directive */ "jdPS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../src/lib/time-frame-picker/time-frame-picker.component */ "chzP");
/* harmony import */ var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */ "Y/g/");























const _c0 = ["timeFramePicker"];
const _c1 = ["tableSearch"];
function NuiDataFilterIsolatedTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NuiDataFilterIsolatedTableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r9.position);
} }
function NuiDataFilterIsolatedTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NuiDataFilterIsolatedTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r10.issue);
} }
function NuiDataFilterIsolatedTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NuiDataFilterIsolatedTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r11.date, "EEEE, MMMM dd, yyyy"), "");
} }
function NuiDataFilterIsolatedTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function NuiDataFilterIsolatedTableComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
const _c8 = ["listSearch"];
function NuiDataFilterIsolatedListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r4.issue, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, item_r4.date, "EEEE, MMMM dd, yyyy"), "");
} }
function FilteringIsolatedTimeFramePickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-time-frame-picker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function FilteringIsolatedTimeFramePickerComponent_ng_template_4_Template_nui_time_frame_picker_changed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateTf($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilteringIsolatedTimeFramePickerComponent_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cancelPopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilteringIsolatedTimeFramePickerComponent_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.confirmPopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startModel", ctx_r1.tf)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate);
} }
class DataFilterIsolatedExampleComponent {
    constructor(filterService) {
        this.filterService = filterService;
    }
    ngAfterViewInit() {
        this.filterService.registerFilter({
            timeFramePicker: {
                componentInstance: this.timeFramePicker,
            },
        });
        this.filterService.applyFilters();
    }
    applyFilters() {
        this.filterService.applyFilters();
    }
}
DataFilterIsolatedExampleComponent.ɵfac = function DataFilterIsolatedExampleComponent_Factory(t) { return new (t || DataFilterIsolatedExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataFilterService"])); };
DataFilterIsolatedExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataFilterIsolatedExampleComponent, selectors: [["nui-data-filter-isolated-example"]], viewQuery: function DataFilterIsolatedExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timeFramePicker = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataFilterService"]])], decls: 9, vars: 0, consts: [[2, "border", "1px solid black"], [3, "timeFrameChanged"], ["timeFramePicker", ""], ["size", "extra-small"], [1, "d-flex"], [1, "col", "m-3", "pt-3", 2, "border", "1px solid red"], [1, "col", "m-3", "pt-3", 2, "border", "1px solid green"]], template: function DataFilterIsolatedExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-filtering-isolated-time-frame-picker", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("timeFrameChanged", function DataFilterIsolatedExampleComponent_Template_nui_filtering_isolated_time_frame_picker_timeFrameChanged_1_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nui-data-filter-isolated-table-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-data-filter-isolated-list-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: function () { return [FilteringIsolatedTimeFramePickerComponent, _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_5__["DividerComponent"], NuiDataFilterIsolatedTableComponent, NuiDataFilterIsolatedListComponent]; }, encapsulation: 2 });
class NuiDataFilterIsolatedTableComponent {
    constructor(dataFilter, dataSourceService) {
        this.dataFilter = dataFilter;
        this.dataSourceService = dataSourceService;
        this.tableData = [];
        this.displayedColumns = ["position", "issue", "date"];
    }
    ngAfterViewInit() {
        this.dataFilter.registerFilter({
            search: {
                componentInstance: this.search,
            },
        });
        this.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            var _a;
            this.tableData = (_a = data.repeat) === null || _a === void 0 ? void 0 : _a.itemsSource;
        });
    }
    applyFilters() {
        this.dataFilter.applyFilters();
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
}
NuiDataFilterIsolatedTableComponent.ɵfac = function NuiDataFilterIsolatedTableComponent_Factory(t) { return new (t || NuiDataFilterIsolatedTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["TableDatasource"])); };
NuiDataFilterIsolatedTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NuiDataFilterIsolatedTableComponent, selectors: [["nui-data-filter-isolated-table-example"]], viewQuery: function NuiDataFilterIsolatedTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataFilterService"], _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["TableDatasource"]])], decls: 15, vars: 3, consts: function () { let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1345472093440723911$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__3 = goog.getMsg(" No.");
        i18n_2 = MSG_EXTERNAL_1345472093440723911$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟333f0164082b9f12f63ca11438b2085d074a5b0f␟1345472093440723911: No.`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1360536936124021291$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__5 = goog.getMsg(" Issue");
        i18n_4 = MSG_EXTERNAL_1360536936124021291$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟cd6343e8af83c71784839ea725d1b32ca33e62da␟1360536936124021291: Issue`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1981370557171963484$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__7 = goog.getMsg(" Date");
        i18n_6 = MSG_EXTERNAL_1981370557171963484$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__7;
    }
    else {
        i18n_6 = $localize `:␟a5d29304b36199a6bc7500b653e3270f7ab53163␟1981370557171963484: Date`;
    } return [[1, "mb-2"], ["id", "nui-data-filter-isolated-table-search", 1, "d-flex", "justify-content-end", "flex-grow-1", 3, "inputChange", "cancel"], ["tableSearch", ""], ["nui-table", "", "id", "nui-data-filter-isolated-table", 3, "dataSource"], ["nuiColumnDef", "position"], ["nui-header-cell", "", 4, "nuiHeaderCellDef"], ["nui-cell", "", 4, "nuiCellDef"], ["nuiColumnDef", "issue"], ["nuiColumnDef", "date"], ["nui-header-row", "", 4, "nuiHeaderRowDef"], ["nui-row", "", "density", "compact", 4, "nuiRowDef", "nuiRowDefColumns"], ["nui-header-cell", ""], i18n_2, ["nui-cell", ""], i18n_4, i18n_6, ["nui-header-row", ""], ["nui-row", "", "density", "compact"]]; }, template: function NuiDataFilterIsolatedTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-search", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function NuiDataFilterIsolatedTableComponent_Template_nui_search_inputChange_1_listener() { return ctx.applyFilters(); })("cancel", function NuiDataFilterIsolatedTableComponent_Template_nui_search_cancel_1_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NuiDataFilterIsolatedTableComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NuiDataFilterIsolatedTableComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NuiDataFilterIsolatedTableComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NuiDataFilterIsolatedTableComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NuiDataFilterIsolatedTableComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NuiDataFilterIsolatedTableComponent_td_12_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NuiDataFilterIsolatedTableComponent_tr_13_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NuiDataFilterIsolatedTableComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nuiRowDefColumns", ctx.displayedColumns);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _src_lib_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"], _src_lib_table_table_cell_table_column_def_directive__WEBPACK_IMPORTED_MODULE_8__["TableColumnDefDirective"], _src_lib_table_table_cell_table_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_9__["TableHeaderCellDefDirective"], _src_lib_table_table_cell_table_cell_def_directive__WEBPACK_IMPORTED_MODULE_10__["TableCellDefDirective"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableHeaderRowDefDirective"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableRowDefDirective"], _src_lib_table_table_cell_table_header_cell_component__WEBPACK_IMPORTED_MODULE_12__["TableHeaderCellComponent"], _src_lib_table_table_cell_table_cell_directive__WEBPACK_IMPORTED_MODULE_13__["TableCellDirective"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableHeaderRowComponent"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableRowComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], encapsulation: 2 });
class NuiDataFilterIsolatedListComponent {
    constructor(filterService, dataSourceService) {
        this.filterService = filterService;
        this.dataSourceService = dataSourceService;
        this.state = {
            repeat: {
                itemsSource: [],
            },
        };
    }
    ngAfterViewInit() {
        this.filterService.registerFilter({
            search: {
                componentInstance: this.search,
            },
        });
        this.filterService.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            this.state = data;
        });
    }
    applyFilters() {
        this.filterService.applyFilters();
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
}
NuiDataFilterIsolatedListComponent.ɵfac = function NuiDataFilterIsolatedListComponent_Factory(t) { return new (t || NuiDataFilterIsolatedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["ListDatasource"])); };
NuiDataFilterIsolatedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NuiDataFilterIsolatedListComponent, selectors: [["nui-data-filter-isolated-list-example"]], viewQuery: function NuiDataFilterIsolatedListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DataFilterService"], _data_filter_basic_data_filter_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["ListDatasource"]])], decls: 7, vars: 2, consts: [[1, "mb-2"], ["id", "nui-data-filter-isolated-list-search", 1, "d-flex", "justify-content-end", "flex-grow-1", 3, "inputChange", "cancel"], ["listSearch", ""], ["id", "nui-data-filter-list-isolated-repeat", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["repeatItemTemplate", ""]], template: function NuiDataFilterIsolatedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-search", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function NuiDataFilterIsolatedListComponent_Template_nui_search_inputChange_1_listener() { return ctx.applyFilters(); })("cancel", function NuiDataFilterIsolatedListComponent_Template_nui_search_cancel_1_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-repeat", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NuiDataFilterIsolatedListComponent_ng_template_5_Template, 3, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r2);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_15__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], encapsulation: 2 });
class FilteringIsolatedTimeFramePickerComponent {
    constructor() {
        this.timeFrameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tf = {
            startDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_2___default()("01/01/2019", "L"),
            endDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_2___default()("02/12/2019", "L"),
        };
        this.minDate = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()("12/01/2018", "L"); // "L" is "MM/DD/YYY" in moment.js
        this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()();
        this.showFooter = false;
        this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.acceptedTimeframe = this.tf;
    }
    updateTf(value) {
        this.tf = value;
    }
    confirmPopover() {
        this.closePopoverSubject.next();
        this.acceptedTimeframe = this.tf;
        this.timeFrameChanged.emit(this.acceptedTimeframe);
    }
    cancelPopover() {
        this.showFooter = false;
        this.closePopoverSubject.next();
    }
    getFilters() {
        return {
            type: "range",
            value: {
                start: this.acceptedTimeframe.startDatetime.toDate(),
                end: this.acceptedTimeframe.endDatetime.toDate(),
            },
        };
    }
}
FilteringIsolatedTimeFramePickerComponent.ɵfac = function FilteringIsolatedTimeFramePickerComponent_Factory(t) { return new (t || FilteringIsolatedTimeFramePickerComponent)(); };
FilteringIsolatedTimeFramePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilteringIsolatedTimeFramePickerComponent, selectors: [["nui-filtering-isolated-time-frame-picker"]], outputs: { timeFrameChanged: "timeFrameChanged" }, decls: 6, vars: 7, consts: function () { let i18n_9; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__10 = goog.getMsg(" Cancel ");
        i18n_9 = MSG_EXTERNAL_6991067716289442185$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__10;
    }
    else {
        i18n_9 = $localize `:␟6a3777f913cf3f288664f0632b9f24794fdcc24e␟6991067716289442185: Cancel `;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4164592547297134995$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__12 = goog.getMsg(" Apply ");
        i18n_11 = MSG_EXTERNAL_4164592547297134995$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_ISOLATED_DATA_FILTER_ISOLATED_EXAMPLE_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:␟606e2983eb9d921195fc1c6d3785d096258ee2b7␟4164592547297134995: Apply `;
    } return [["trigger", "click", "id", "nui-data-filter-isolated-time-frame-picker-popover", 3, "template", "hasPadding", "closePopover", "modal"], ["nui-button", "", "type", "button", "displayStyle", "action"], ["popoverTimeFramePicker", ""], [1, "m-3"], [3, "startModel", "maxDate", "minDate", "changed"], ["nui-button", "", "id", "nui-data-filter-isolated-time-frame-picker-cancel-btn", "type", "button", "displayStyle", "action", 3, "click"], i18n_9, ["nui-button", "", "id", "nui-data-filter-isolated-time-frame-picker-apply-btn", "type", "button", "displayStyle", "primary", 3, "click"], i18n_11]; }, template: function FilteringIsolatedTimeFramePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "timeFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilteringIsolatedTimeFramePickerComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.tf));
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_16__["PopoverComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_17__["ButtonComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_18__["TimeFramePickerComponent"]], pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_19__["TimeFrameFormatPipe"]], encapsulation: 2 });


/***/ }),

/***/ "objm":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [@.disabled]=\"true\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        {{node.name}}, fromPage: {{node.page}}\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node #nestedNode=cdkNestedTreeNode *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\"\n            (click)=\"onToggleClick(node, nestedNode)\"\n            cdkTreeNodeToggle>\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n\n            <div nui-busy [busy]=\"node.isLoading\" style=\"min-height: 20px;\" (click)=\"$event.stopPropagation()\">\n                <ng-container cdkTreeNodeOutlet ></ng-container>\n                <nui-paginator *ngIf=\"node.hasPagination && nodesTotalItems[node.name]\"\n                    [id]=\"'nui-tree-paginator-component-' + node.name.toLowerCase()\"\n                    [page]=\"1\"\n                    [pageSize]=\"pageSize\"\n                    (pagerAction)=\"loadNodeItems(node, nestedNode, $event)\"\n                    [total]=\"nodesTotalItems[node.name]\">\n                </nui-paginator>\n            </div>\n\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "oheM":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.less ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".push-down {\n    min-height: 550px;\n}");

/***/ }),

/***/ "oqJQ":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/clipboard/clipboard.example.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .nui-clipboard-demo {\n        max-width: 460px;\n    }\n    .clipboard-panel {\n        display: flex;\n    }\n    .nui-button {\n        height: 30px;\n    }\n</style>\n\n<div class=\"nui-clipboard-demo\">\n    <div class=\"clipboard-panel\">\n        <nui-textbox id=\"inputTextbox\"\n                     placeholder=\"Enter text you want to copy to the clipboard\" i18n-placeholder\n                     [value]=\"textToCopy\"\n                     customBoxWidth=\"360px\"\n                     (textChange)=\"onValueChange($event)\"\n                     required=\"true\">\n        </nui-textbox>\n        <button id=\"clipboardButton\"\n                nui-button\n                [nuiClipboard]=\"textToCopy\"\n                (clipboardSuccess)=\"onClipboardSuccess()\"\n                (clipboardError)=\"onClipboardError()\"\n                type=\"button\"\n                icon=\"copy\">\n            Copy\n        </button>\n    </div>\n    <div class=\"message-box\">\n            <nui-message type=\"ok\" [allowDismiss]=\"true\" *ngIf=\"copiedSuccessfully\">\n                <b i18n>Text was copied to the clipboard!</b>\n            </nui-message>\n        <nui-message type=\"critical\" [allowDismiss]=\"true\" *ngIf=\"copiedWithError\">\n            <b i18n>Failed to copy text!</b>\n        </nui-message>\n    </div>\n</div>\n");

/***/ }),

/***/ "pcvo":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-color-black/badge-color-black.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-badge-counter nui-badge-warning nui-badge-text-black\"\n     data-before=\"999+\">\n</div>\n");

/***/ }),

/***/ "pohb":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/scroll-shadows/scroll-shadows.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width: 320px;\">\n    <div>\n        <div class=\"nui-scroll-shadows\" style=\"height: 400px;\n                    overflow-y: auto;\n                    padding: 0 5px;\n                    border: 1px solid #ccc;\">\n            <div style=\"text-align: center;\">\n                <h3 i18n>Aerials</h3>\n                <h5><i i18n>System of a Down</i></h5>\n            </div>\n            <div style=\"margin: auto 10px;\" i18n>\n                Life is a waterfall<br>\n                We're one in the river<br>\n                And one again after the fall<br>\n                Swimming through the void<br>\n                We hear the word<br>\n                We lose ourselves<br>\n                But we find it all?<br>\n                'Cause we are the ones that want to play<br>\n                Always want to go<br>\n                But you never want to stay<br>\n                And we are the ones that want to choose<br>\n                Always want to play<br>\n                But you never want to lose<br>\n                Aerials in the sky<br>\n                When you lose small mind<br>\n                You free your life<br>\n                Life is a waterfall<br>\n                We drink from the river<br>\n                Then we turn around and put up our walls<br>\n                Swimming through the void<br>\n                We hear the word<br>\n                We lose ourselves<br>\n                But we find it all?<br>\n                'Cause we are the ones that want to play<br>\n                Always want to go<br>\n                But you never want to stay<br>\n                And we are the ones that want to choose<br>\n                Always want to play<br>\n                But you never want to lose<br>\n                Aerials in the sky<br>\n                When you lose small mind<br>\n                You free your life<br>\n                Aerials so up high<br>\n                When you free your eyes<br>\n                Eternal prize<br>\n                Aerials in the sky<br>\n                When you lose small mind<br>\n                You free your life<br>\n                Aerials so up high<br>\n                When you free your eyes<br>\n                Eternal prize<br>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "pr8d":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-customization/badge-customization.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-badge-customization\",\n    templateUrl: \"./badge-customization.component.html\",\n    styleUrls: [\"./badge-customization.component.less\"],\n})\nexport class BadgeCustomizationComponent {\n    counter = \"999+\";\n}\n");

/***/ }),

/***/ "q/5i":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-filtering/client-side-filtering.example.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #listRepeatItemTemplate let-item=\"item\">\n    <div>{{ item.color }}&nbsp;</div>\n    <div>{{ item.status }}</div>\n</ng-template>\n\n<ng-template #emptyListTemplate>\n    <div class=\"d-flex flex-column align-items-center\">\n        <nui-image [isWatermark]=\"true\" image=\"no-data-to-show\"></nui-image>\n        <p class=\"nui-text-small\">No data to show</p>\n    </div>\n</ng-template>\n\n<div>\n    <nui-panel [panelMode]=\"panelOptions.panelMode\" id=\"collapsible-panel\">\n        <div nuiPanelEmbeddedHeading>{{panelOptions.heading}}</div>\n        <div nuiPanelEmbeddedBody>\n            <nui-expander [open]=\"statusExpanderOptions.expanded\" [header]=\"statusExpanderOptions.header\" icon=\"orion-sitemaster\" class=\"mb-5\">\n                <nui-checkbox-group id=\"nui-demo-checkbox-group-basic\" name=\"cType\" [values]=\"selectedColorTypes\" (valuesChange)=\"onSelectedColorTypesChange($event)\">\n                    <nui-checkbox *ngFor=\"let status of allStatuses; let i = index\" [value]=\"status\" [checked]=\"isColorTypeChecked(status)\">\n                        <div class=\"d-flex align-items-center\">\n                            <nui-icon class=\"mr-2\" [icon]=\"statusIcons[status].iconName\"></nui-icon>\n                            <span class=\"mr-2\">{{ status }}</span>\n                            <span *ngIf=\"isGreaterThanZero(showStatus(status))\" class=\"mr-2\">{{ showStatus(status) }}</span>\n                        </div>\n                    </nui-checkbox>\n                </nui-checkbox-group>\n            </nui-expander>\n            <nui-expander [open]=\"colorExpanderOptions.expanded\" [header]=\"colorExpanderOptions.header\" icon=\"orion-sitemaster\" class=\"mb-5\">\n                <nui-checkbox-group id=\"nui-demo-checkbox-group-basic\" name=\"criteriaColor\" [values]=\"selectedCriteriaColors\" (valuesChange)=\"onSelectedCriteriaChange($event)\">\n                    <nui-checkbox *ngFor=\"let color of allColors; let i = index\" [value]=\"color\" [checked]=\"isColorCriteriaChecked(color)\">\n                        <div class=\"d-flex align-items-center\">\n                            <nui-icon class=\"mr-2\" [icon]=\"colorIcons[color].iconName\"></nui-icon>\n                            <span class=\"mr-2\">{{ color }}</span>\n                            <span *ngIf=\"isGreaterThanZero(showColor(color))\" class=\"mr-2\">{{ showColor(color) }}</span>\n                        </div>\n                    </nui-checkbox>\n                </nui-checkbox-group>\n            </nui-expander>\n        </div>\n        <div class=\"push-down\">\n            <div class=\"d-flex flex-row\">\n                <div class=\"mb-3\" [hidden]=\"!hasItems()\">\n                    <nui-sorter [itemsSource]=\"sorterItems\" [selectedItem]=\"sortBy\" [sortDirection]=\"initialSortDirection\" (sorterAction)=\"onSorterAction($event)\"\n                        #filteringSorter>\n                    </nui-sorter>\n                </div>\n                <div class=\"ml-auto\">\n                    <nui-search [value]=\"searchTerm\" (search)=\"applyFilters()\" #filteringSearch>\n                    </nui-search>\n                </div>\n            </div>\n            <div *ngIf=\"hasItems(); else emptyListTemplate\">\n                <nui-repeat [itemsSource]=\"filteringState?.repeat?.itemsSource\" [repeatItemTemplateRef]=\"listRepeatItemTemplate\" paddingSize=\"normal\"\n                    #filteringRepeat>\n                </nui-repeat>\n            </div>\n            <div class=\"mt-3\" [hidden]=\"!hasItems()\">\n                <nui-paginator [page]=\"page\" [total]=\"filteringState?.paginator?.total\" (pagerAction)=\"applyFilters()\" #filteringPaginator>\n                </nui-paginator>\n            </div>\n        </div>\n    </nui-panel>\n</div>\n");

/***/ }),

/***/ "qZEc":
/*!**********************************************************!*\
  !*** ./demo/src/components/demo/common/common.module.ts ***!
  \**********************************************************/
/*! exports provided: CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _data_source_client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-source/client-side/client-side-filtering/client-side-filtering.example.component */ "K9S3");
/* harmony import */ var _data_source_client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-source/client-side/client-side-with-selection/client-side-with-selection.example.component */ "NOyz");
/* harmony import */ var _data_source_data_source_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-source/data-source.module */ "LpZb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "CjZ5");
/* harmony import */ var _viewport_manager_repeat_with_viewport_manager_repeat_with_viewport_manager_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component */ "U2j4");
/* harmony import */ var _viewport_manager_virtual_viewport_manager_docs_virtual_viewport_manager_docs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component */ "cY2v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    {
        path: "", redirectTo: "welcome", pathMatch: "full",
    },
    {
        path: "clipboard",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["ClipboardExampleComponent"],
    },
    {
        path: "data-source-client-side-filtering",
        component: _data_source_client_side_client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_5__["DataSourceClientSideFilteringExampleComponent"],
    },
    {
        path: "data-source-client-side-filtering-with-selection",
        component: _data_source_client_side_client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_6__["DataSourceWithSelectionExampleComponent"],
    },
    {
        path: "edge-detection-service",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["EdgeDetectionServiceExampleComponent"],
    },
    {
        path: "event-propagation-service",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["EventPropagationServiceExampleComponent"],
    },
    {
        path: "scroll-shadows",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["ScrollShadowsExampleComponent"],
    },
    {
        path: "search-service",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["SearchServiceExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "set-focus",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["SetFocusExampleComponent"],
    },
    {
        path: "data-source-service",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./data-source/data-source.module */ "LpZb")).then(m => m.DataSourceModule),
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "data-filter-service",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["DataFilterDocsExampleComponent"],
        data: {
            showThemeSwitcher: true,
        },
    },
    {
        path: "virtual-viewport-manager",
        component: _viewport_manager_virtual_viewport_manager_docs_virtual_viewport_manager_docs_component__WEBPACK_IMPORTED_MODULE_10__["VirtualViewportManagerDocsComponent"],
        data: {
            showThemeSwitcher: true,
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].beta,
            },
        },
    },
    {
        path: "data-filter-service-test",
        component: _index__WEBPACK_IMPORTED_MODULE_8__["DataFilterTestComponent"],
    },
    {
        path: "badge",
        loadChildren: () => __webpack_require__.e(/*! import() | badge-badge-module */ "badge-badge-module").then(__webpack_require__.bind(null, /*! ./badge/badge.module */ "d+3e")).then(m => m.BadgeModule),
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "tag",
        loadChildren: () => __webpack_require__.e(/*! import() | tag-tag-module */ "tag-tag-module").then(__webpack_require__.bind(null, /*! ./tag/tag.module */ "tIxq")).then(m => m.TagModule),
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["SrlcStage"].ga,
            },
        },
    },
    {
        path: "tree",
        loadChildren: () => Promise.all(/*! import() | tree-tree-module */[__webpack_require__.e("default~drag-and-drop-dnd-module~src-schematics-schematic-module~tree-tree-module"), __webpack_require__.e("tree-tree-module")]).then(__webpack_require__.bind(null, /*! ./tree/tree.module */ "UpE6")).then(m => m.TreeModule),
    },
    {
        path: "welcome", component: _index__WEBPACK_IMPORTED_MODULE_8__["WelcomePageComponent"],
    },
];
class CommonModule {
}
CommonModule.ɵfac = function CommonModule_Factory(t) { return new (t || CommonModule)(); };
CommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: CommonModule });
CommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("W52H"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"],
            _data_source_data_source_module__WEBPACK_IMPORTED_MODULE_7__["DataSourceModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiRadioModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDividerModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiPaginatorModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiRepeatModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSearchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSelectorModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSorterModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiExpanderModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiPanelModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiPopoverModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSelectV2Module"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiOverlayModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTableModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTimeFramePickerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiProgressModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CommonModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_8__["ClipboardExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["DataFilterDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["DataFilterBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["DataFilterIsolatedExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["DataFilterTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["NuiDataFilterListComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["NuiDataFilterTableComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["NuiDataFilterIsolatedListComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["NuiDataFilterIsolatedTableComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["EdgeDetectionServiceExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["EventPropagationServiceExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["FilteringTimeFramePickerComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["FilteringIsolatedTimeFramePickerComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["ScrollShadowsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["SearchServiceExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["SetFocusExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_8__["WelcomePageComponent"],
        _viewport_manager_virtual_viewport_manager_docs_virtual_viewport_manager_docs_component__WEBPACK_IMPORTED_MODULE_10__["VirtualViewportManagerDocsComponent"],
        _viewport_manager_repeat_with_viewport_manager_repeat_with_viewport_manager_example_component__WEBPACK_IMPORTED_MODULE_9__["RepeatWithViewportManagerExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDocsModule"],
        _data_source_data_source_module__WEBPACK_IMPORTED_MODULE_7__["DataSourceModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiRadioModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiDividerModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiIconModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTextboxModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiPaginatorModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiRepeatModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSearchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSelectorModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSorterModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiExpanderModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiPanelModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiPopoverModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiSelectV2Module"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiOverlayModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTableModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiTimeFramePickerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiCommonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_4__["NuiProgressModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "qbxY":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { HttpClient, HttpParams } from \"@angular/common/http\";\nimport { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnDestroy, OnInit, ViewChild } from \"@angular/core\";\nimport {\n    DataSourceService,\n    IDataSource,\n    IDataSourceOutput,\n    IFilter,\n    IFilteringOutputs,\n    IFilters,\n    INovaFilteringOutputs,\n    INovaFilters,\n    LoggerService,\n    RepeatComponent,\n    SearchComponent,\n    VirtualViewportManager\n} from \"@nova-ui/bits\";\nimport isEqual from \"lodash/isEqual\";\nimport isNil from \"lodash/isNil\";\nimport { BehaviorSubject, Observable, of, Subject } from \"rxjs\";\nimport { catchError, delay, finalize, map, switchMap, takeUntil, tap } from \"rxjs/operators\";\n\nconst API_URL = \"https://www.googleapis.com/books/v1/volumes\";\nconst RESULTS_PER_PAGE = 20;\n\n// collection of books that we've received from the Google Books backend API response\ninterface IGBooksApiResponse {\n    kind: string;\n    totalItems: number;\n    items: IGBookBackendDTO[];\n    [key: string]: any;\n}\n\n// main book model being received from the backend\ninterface IGBookBackendDTO {\n    id: string;\n    volumeInfo: {\n        title: string;\n        subtitle: string;\n        authors: string[];\n        [key: string]: any\n    };\n    accessInfo: { [key: string]: any };\n    saleInfo: { [key: string]: any };\n}\n\n// collection of books that we've transformed from the backend API\ninterface IGBooksFrontendCollection {\n    books: IGBookFrontendDTO[];\n    totalItems: number;\n}\n\n// main model being processed & rendered in the frontend\n// PS: these are only the fields we decided we want to process\n// since there are many other model proprieties in the backend DTO\ninterface IGBookFrontendDTO {\n    title: string;\n    authors: string;\n}\n\n/**\n * Example of a Remote DataSourceService which is using the API from Google Books API\n * to fetch data\n */\n@Injectable()\nexport class GBooksDataSourceWithSearch extends DataSourceService<IGBookFrontendDTO> implements IDataSource {\n    public busy = new BehaviorSubject(false);\n\n    // cache used to store our previous fetched results while scrolling\n    // and more data is automatically fetched from the backend\n    private cache = Array.from<IGBookFrontendDTO>({length: 0});\n    private previousFilters: INovaFilters;\n\n    private applyFilters$ = new Subject<IFilters>();\n\n    constructor(private logger: LoggerService, private http: HttpClient) {\n        super();\n\n        this.applyFilters$.pipe(\n            // cancel any previous requests\n            switchMap(filters => this.getData(filters))\n        ).subscribe(async (res) => {\n            this.outputsSubject.next(await this.getFilteredData(res));\n        });\n    }\n\n    public async getFilteredData(booksData: IGBooksFrontendCollection): Promise<IDataSourceOutput<INovaFilteringOutputs>> {\n        return of(booksData).pipe(\n            tap((response: IGBooksFrontendCollection) => {\n                // after receiving data we need to append it to our previous fetched results\n                this.cache = this.cache.concat(response.books);\n            }),\n            map((response: IGBooksFrontendCollection) => ({\n                result: {\n                    repeat: {itemsSource: this.cache},\n                    paginator: {total: response.totalItems},\n                },\n            }))\n        ).toPromise();\n    }\n\n    // redefine parent method\n    public async applyFilters() {\n        this.applyFilters$.next(this.getFilters());\n    }\n\n    private getData(filters: INovaFilters): Observable<IGBooksFrontendCollection> {\n\n        // Note: Every new search request should clear the\n        // cache in order to correctly display a new set of data.\n        if (this.isNewSearchTerm(filters.search)) {\n            this.cache = [];\n        }\n\n        // fetch response from the backend\n        return this.http\n            .get<IGBooksApiResponse>(\n                API_URL,\n                {params: this.getRequestParams(filters)}\n            )\n            .pipe(\n                // show the loader\n                tap(() => this.busy.next(true)),\n\n                // since API being used (Google Books ) sends the response almost immediately,\n                // we need to fake it takes longer to be able the show the spinner component\n                // while the data is being received\n                // PS: NOT to be used in real examples\n                delay(300),\n\n                // transform backend API response (IGBooksApiResponse)\n                // to our frontend books collection (IGBooksFrontendCollection)\n                map(response => ({\n                    books: response.items?.map(volume => ({\n                        title: volume.volumeInfo.title,\n                        authors: volume.volumeInfo.authors?.join(\", \") || \"\",\n                    })) || [],\n                    totalItems: response.totalItems,\n                })),\n\n                // error handle in case of any error\n                catchError(e => {\n                    this.logger.error(e);\n                    return of({\n                        books: [],\n                        totalItems: 0,\n                    });\n                }),\n\n                finalize(() => {\n                    // no matter if the backend response was successful or not,\n                    // we need to hide our loader and reset the filters\n                    this.busy.next(false);\n                    this.previousFilters = filters;\n                })\n            );\n    }\n\n    // build query params specific to our backend API\n    private getRequestParams(filters: INovaFilters): HttpParams {\n        return new HttpParams()\n            // define the start page used by the virtual scroll internal \"paginator\"\n            .set(\"startIndex\", filters.virtualScroll?.value?.start.toString() ?? \"\")\n\n            // specify the maximum number of items we need to fetch for each request\n            .set(\"maxResults\", String(RESULTS_PER_PAGE))\n\n            // google books api requires some criteria to do the search\n            .set(\"q\", filters.search\n                ? `intitle:${filters.search.value}`\n                : \"_\" // google books api requires some criteria to do the search\n            );\n    }\n\n    private isNewSearchTerm(search: IFilter<string> | undefined) {\n        return !isNil(search?.value)\n            && !isEqual(search?.value, this.previousFilters?.search?.value);\n    }\n}\n\n@Component({\n    selector: \"nui-repeat-with-viewport-manager-example\",\n    templateUrl: \"./repeat-with-viewport-manager.example.component.html\",\n    providers: [VirtualViewportManager, GBooksDataSourceWithSearch],\n})\nexport class RepeatWithViewportManagerExampleComponent implements OnInit, OnDestroy, AfterViewInit {\n    public books$ = new BehaviorSubject<IGBookBackendDTO[]>([]);\n    public busy: boolean = false;\n\n    @ViewChild(RepeatComponent) private repeat: RepeatComponent;\n    @ViewChild(SearchComponent) private search: SearchComponent;\n\n    private destroy$ = new Subject();\n\n    constructor(\n        private viewportManager: VirtualViewportManager,\n        private cd: ChangeDetectorRef,\n        private dataSource: GBooksDataSourceWithSearch\n    ) {\n    }\n\n    public ngOnInit() {\n        this.dataSource.busy.pipe(\n            tap(val => {\n                this.busy = val;\n                this.cd.detectChanges();\n            }),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n\n    public ngAfterViewInit(): void {\n        // Note: registering filtering participants\n        this.registerFilters();\n\n        this.viewportManager\n            // Note: Initializing viewportManager with the repeat's CDK Viewport Ref\n            .setViewport(this.repeat.viewportRef)\n            // Note: Initializing the stream with the desired page size, based on which\n            // ViewportManager will perform the observations and will emit\n            // distinct ranges with step equal to provided pageSize\n            .observeNextPage$({pageSize: RESULTS_PER_PAGE}).pipe(\n            tap(() => {\n                this.dataSource.applyFilters();\n            }),\n            // Note: Using the same stream to subscribe to the outputsSubject and update the items list\n            switchMap(() => this.dataSource.outputsSubject.pipe(\n                tap((outputs: IFilteringOutputs) => {\n                    this.books$.next(outputs.result.repeat.itemsSource || []);\n                    this.cd.detectChanges();\n                })\n            )),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n\n    public ngOnDestroy(): void {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n    public onSearch() {\n        this.doSearch();\n    }\n\n    public onCancelSearch() {\n        this.doSearch();\n    }\n\n    private doSearch() {\n        // Note: It is important to reset viewportManager to start page\n        // so that the datasource performs the search with 1st page\n        // emitFirstPage: false prevents viewportManager emitting first page after reset\n        this.viewportManager.reset({emitFirstPage: false});\n        this.dataSource.applyFilters();\n    }\n\n    private registerFilters() {\n        this.dataSource.registerComponent({\n            virtualScroll: {componentInstance: this.viewportManager},\n            search: {componentInstance: this.search},\n        });\n    }\n}\n");

/***/ }),

/***/ "qflF":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-basic/tree-basic.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component } from \"@angular/core\";\nimport { expand } from \"@nova-ui/bits\";\n\n\ninterface FoodNode {\n    name: string;\n    children?: FoodNode[];\n}\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Fruit\",\n        children: [\n            { name: \"Apple\" },\n            { name: \"Banana\" },\n            { name: \"Fruit loops\" },\n        ],\n    },\n    {\n        name: \"Vegetables\",\n        children: [\n            {\n                name: \"Green\",\n                children: [{ name: \"Broccoli\" }, { name: \"Brussels sprouts\" }],\n            },\n            {\n                name: \"Orange\",\n                children: [{ name: \"Pumpkins\" }, { name: \"Carrots\" }],\n            },\n            {\n                name: \"Red\",\n            },\n        ],\n    },\n    {\n        name: \"Meat\",\n    },\n];\n\n\n@Component({\n    selector: \"nui-tree-basic-example\",\n    templateUrl: \"tree-basic.example.component.html\",\n    styleUrls: [\"tree-basic.example.component.less\"],\n    host: { id: \"nui-tree-basic-example\" },\n    animations: [expand],\n})\nexport class TreeBasicExampleComponent {\n    treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    dataSource = new ArrayDataSource(TREE_DATA);\n\n    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;\n}\n");

/***/ }),

/***/ "qw8G":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-checkbox-test/tree-checkbox-test.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between\">\n    <cdk-tree [@.disabled]=\"true\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" style=\"flex: 50%;\">\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n            <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n            <nui-checkbox class=\"leaf-control\"\n                          [checked]=\"selectionModel.isSelected(node)\"\n                          (valueChange)=\"leafItemSelectionToggle(node)\">{{node.name}}</nui-checkbox>\n        </cdk-nested-tree-node>\n        <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n            <div class=\"nui-tree__header\" cdkTreeNodeToggle>\n                <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n                <nui-checkbox class=\"branch-control\"\n                              (click)=\"$event.stopPropagation()\"\n                              [checked]=\"descendantsAllSelected(node)\"\n                              [indeterminate]=\"descendantsPartiallySelected(node)\"\n                              (valueChange)=\"branchItemSelectionToggle(node)\">{{node.item}}</nui-checkbox>\n                <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n            </div>\n            <div class=\"nui-tree__body\"\n                 [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n                 [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n                <ng-container cdkTreeNodeOutlet></ng-container>\n            </div>\n        </cdk-nested-tree-node>\n    </cdk-tree>\n</div>\n");

/***/ }),

/***/ "qy4l":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-with-hover/tag-with-hover.example.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-tag nui-tag-default nui-tag-with-hover-styles mr-1\">Tag default</div>\n<div class=\"nui-tag nui-tag-with-border-critical nui-tag-with-hover-styles mr-1\">Tag critical</div>\n<div class=\"nui-tag nui-tag-with-border-warning nui-tag-with-hover-styles mr-1\">Tag warning</div>\n<div class=\"nui-tag nui-tag-with-border-info nui-tag-with-hover-styles mr-1\">Tag info</div>\n<div class=\"nui-tag nui-tag-with-border-ok nui-tag-with-hover-styles mr-1\">Tag ok</div>\n<div class=\"nui-tag nui-tag-with-hover-styles mr-1\">Tag default</div>\n<div class=\"nui-tag nui-tag-critical nui-tag-with-hover-styles nui-tag-text-light mr-1\">Tag critical</div>\n<div class=\"nui-tag nui-tag-warning nui-tag-with-hover-styles mr-1\">Tag warning</div>\n<div class=\"nui-tag nui-tag-info nui-tag-with-hover-styles nui-tag-text-light mr-1\">Tag info</div>\n<div class=\"nui-tag nui-tag-ok nui-tag-with-hover-styles nui-tag-text-light mr-1\">Tag ok</div>\n");

/***/ }),

/***/ "r98z":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-basic/client-side-basic.example.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"client-side-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-search class=\"searchBar\" [value]=\"searchTerm\"\n                        (search)=\"onSearch($event)\"\n                        #filteringSearch>\n            </nui-search>\n            <nui-repeat class=\"repeater\" [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        #filteringRepeat>\n            </nui-repeat>\n            <nui-paginator class=\"paginator\" [page]=\"page\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"changePagination()\"\n                           #filteringPaginator>\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "rbuX":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-basic/mocked-data.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import moment from \"moment/moment\";\n\nexport interface ListModel {\n    issue: string;\n    date: moment.Moment;\n}\n\nexport interface TableModel extends ListModel {\n    position: number;\n}\n\nexport const LIST_DATA: ListModel[] = [\n    {\n        issue: \"Issue 1\",\n        date: moment(\"01/02/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        issue: \"Issue 2\",\n        date: moment(\"01/11/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        issue: \"Issue 3\",\n        date: moment(\"02/12/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        issue: \"Issue 4\",\n        date: moment(\"01/02/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        issue: \"Issue 5\",\n        date: moment(\"02/10/2019\", \"MM/DD/YYYY\"),\n    },\n];\n\nexport const TABLE_DATA: TableModel[] = [\n    {\n        position: 1,\n        issue: \"Issue 1\",\n        date: moment(\"01/02/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        position: 2,\n        issue: \"Issue 2\",\n        date: moment(\"01/11/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        position: 3,\n        issue: \"Issue 3\",\n        date: moment(\"02/12/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        position: 4,\n        issue: \"Issue 4\",\n        date: moment(\"01/02/2019\", \"MM/DD/YYYY\"),\n    },\n    {\n        position: 5,\n        issue: \"Issue 5\",\n        date: moment(\"02/10/2019\", \"MM/DD/YYYY\"),\n    },\n];\n");

/***/ }),

/***/ "rg+G":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/common.module.ts ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { DragDropModule } from \"@angular/cdk/drag-drop\";\nimport { DatePipe } from \"@angular/common\";\nimport { NgModule } from \"@angular/core\";\nimport { FormsModule, ReactiveFormsModule } from \"@angular/forms\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiCheckboxModule,\n    NuiCommonModule,\n    NuiDividerModule,\n    NuiDocsModule,\n    NuiExpanderModule,\n    NuiIconModule,\n    NuiMessageModule,\n    NuiOverlayModule,\n    NuiPaginatorModule,\n    NuiPanelModule,\n    NuiPopoverModule,\n    NuiProgressModule,\n    NuiRadioModule,\n    NuiRepeatModule,\n    NuiSearchModule,\n    NuiSelectorModule,\n    NuiSelectV2Module,\n    NuiSorterModule,\n    NuiTableModule,\n    NuiTextboxModule,\n    NuiTimeFramePickerModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {DataSourceClientSideFilteringExampleComponent} from \"./data-source/client-side/client-side-filtering/client-side-filtering.example.component\";\nimport {DataSourceWithSelectionExampleComponent} from \"./data-source/client-side/client-side-with-selection/client-side-with-selection.example.component\";\nimport {DataSourceModule} from \"./data-source/data-source.module\";\nimport {\n    ClipboardExampleComponent,\n    DataFilterBasicExampleComponent,\n    DataFilterDocsExampleComponent,\n    DataFilterIsolatedExampleComponent,\n    DataFilterTestComponent,\n    EdgeDetectionServiceExampleComponent,\n    EventPropagationServiceExampleComponent,\n    FilteringIsolatedTimeFramePickerComponent,\n    FilteringTimeFramePickerComponent,\n    NuiDataFilterIsolatedListComponent,\n    NuiDataFilterIsolatedTableComponent,\n    NuiDataFilterListComponent,\n    NuiDataFilterTableComponent,\n    ScrollShadowsExampleComponent,\n    SearchServiceExampleComponent,\n    SetFocusExampleComponent,\n    WelcomePageComponent,\n} from \"./index\";\nimport { RepeatWithViewportManagerExampleComponent } from \"./viewport-manager/repeat-with-viewport-manager/repeat-with-viewport-manager.example.component\";\nimport { VirtualViewportManagerDocsComponent } from \"./viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component\";\n\nconst routes = [\n    {\n        path: \"\", redirectTo: \"welcome\", pathMatch: \"full\",\n    },\n    {\n        path: \"clipboard\",\n        component: ClipboardExampleComponent,\n    },\n    {\n        path: \"data-source-client-side-filtering\",\n        component: DataSourceClientSideFilteringExampleComponent,\n    },\n    {\n        path: \"data-source-client-side-filtering-with-selection\",\n        component: DataSourceWithSelectionExampleComponent,\n    },\n    {\n        path: \"edge-detection-service\",\n        component: EdgeDetectionServiceExampleComponent,\n    },\n    {\n        path: \"event-propagation-service\",\n        component: EventPropagationServiceExampleComponent,\n    },\n    {\n        path: \"scroll-shadows\",\n        component: ScrollShadowsExampleComponent,\n    },\n    {\n        path: \"search-service\",\n        component: SearchServiceExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"set-focus\",\n        component: SetFocusExampleComponent,\n    },\n    {\n        path: \"data-source-service\",\n        loadChildren: () => import(\"./data-source/data-source.module\").then(m => m.DataSourceModule),\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"data-filter-service\",\n        component: DataFilterDocsExampleComponent,\n        data: {\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"virtual-viewport-manager\",\n        component: VirtualViewportManagerDocsComponent,\n        data: {\n            showThemeSwitcher: true,\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n        },\n    },\n    {\n        path: \"data-filter-service-test\",\n        component: DataFilterTestComponent,\n    },\n    {\n        path: \"badge\",\n        loadChildren: () => import(\"./badge/badge.module\").then(m => m.BadgeModule),\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"tag\",\n        loadChildren: () => import(\"./tag/tag.module\").then(m => m.TagModule),\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n        },\n    },\n    {\n        path: \"tree\",\n        loadChildren: () => import(\"./tree/tree.module\").then(m => m.TreeModule),\n    },\n    {\n        path: \"welcome\", component: WelcomePageComponent,\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiDocsModule,\n        DataSourceModule,\n        DragDropModule,\n        NuiButtonModule,\n        NuiMessageModule,\n        NuiRadioModule,\n        NuiDividerModule,\n        NuiCheckboxModule,\n        FormsModule,\n        ReactiveFormsModule,\n        NuiIconModule,\n        NuiTextboxModule,\n        NuiPaginatorModule,\n        NuiRepeatModule,\n        NuiSearchModule,\n        NuiSelectorModule,\n        NuiSorterModule,\n        NuiExpanderModule,\n        NuiPanelModule,\n        NuiPopoverModule,\n        NuiSelectV2Module,\n        NuiOverlayModule,\n        NuiTableModule,\n        NuiTimeFramePickerModule,\n        RouterModule.forChild(routes),\n        NuiCommonModule,\n        NuiProgressModule,\n    ],\n    declarations: [\n        ClipboardExampleComponent,\n        DataFilterDocsExampleComponent,\n        DataFilterBasicExampleComponent,\n        DataFilterIsolatedExampleComponent,\n        DataFilterTestComponent,\n        NuiDataFilterListComponent,\n        NuiDataFilterTableComponent,\n        NuiDataFilterIsolatedListComponent,\n        NuiDataFilterIsolatedTableComponent,\n        EdgeDetectionServiceExampleComponent,\n        EventPropagationServiceExampleComponent,\n        FilteringTimeFramePickerComponent,\n        FilteringIsolatedTimeFramePickerComponent,\n        ScrollShadowsExampleComponent,\n        SearchServiceExampleComponent,\n        SetFocusExampleComponent,\n        WelcomePageComponent,\n        VirtualViewportManagerDocsComponent,\n        RepeatWithViewportManagerExampleComponent,\n    ],\n    providers: [\n        DatePipe,\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class CommonModule {\n}\n");

/***/ }),

/***/ "rkxD":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/search-service/search-service.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .searchservice {\n        width: 100%;\n    }\n    .searchservice-demo-data-left {\n        width: 50%;\n    }\n</style>\n\n<nui-search-service-example>\n    <h1>Search Service</h1>\n    <h3>Original items</h3>\n    <pre class=\"searchservice-demo-data-left\">{{itemsFormatted}}</pre>\n    <p>Search this value</p>\n    <input [(ngModel)]=\"searchValue\" class=\"searchservice\" placeholder=\"Type something to search\"><br>\n    <nui-checkbox-group [(values)]=\"props\" (valuesChange)=\"valuesChanged($event)\">\n        <nui-checkbox [value]=\"1\">Property 'stringContainer'</nui-checkbox>\n        <nui-checkbox [value]=\"2\">Property 'numberContainer'</nui-checkbox>\n        <nui-checkbox [value]=\"3\">Property 'dateContainer'</nui-checkbox>\n    </nui-checkbox-group>\n    <button nui-button type=\"button\" displayStyle=\"primary\" (click)=\"search()\">\n        Search\n    </button>\n    <br><br>\n    <h3>Search result</h3>\n    <pre class=\"searchservice-demo-data-left\">{{searchResultFormatted}}</pre>\n    <nui-divider></nui-divider>\n</nui-search-service-example>\n");

/***/ }),

/***/ "rogj":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/deprecated-client-side/client-side-delayed/client-side-delayed.example.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n<div class=\"client-side-delayed-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-search [value]=\"searchTerm\"\n                        (inputChange)=\"onSearch()\"\n                        (cancel)=\"onSearch()\"\n                        #filteringSearch>\n            </nui-search>\n            <nui-repeat [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        #filteringRepeat>\n            </nui-repeat>\n            <nui-paginator [page]=\"page\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"changePagination()\"\n                           #filteringPaginator>\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "ry4B":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-source/client-side/client-side-custom-search/client-side-custom-search.example.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"client-side-example\">\n    <div class=\"d-flex\">\n        <div class=\"flex-row\">\n            <nui-search class=\"searchBar\" [value]=\"searchTerm\"\n                        (search)=\"onSearch($event)\"\n                        #filteringSearch>\n            </nui-search>\n            <nui-repeat class=\"repeater\" [itemsSource]=\"state.repeat?.itemsSource\"\n                        [repeatItemTemplateRef]=\"repeatItemTemplate\"\n                        #filteringRepeat>\n            </nui-repeat>\n            <nui-paginator class=\"paginator\" [page]=\"page\"\n                           [total]=\"state.paginator?.total\"\n                           activeClass=\"active\"\n                           disabledClass=\"disabled\"\n                           showPrevNext=\"true\"\n                           (pagerAction)=\"changePagination()\"\n                           #filteringPaginator>\n            </nui-paginator>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "saoN":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-docs/tag-docs.example.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Basic Usage</h2>\n<p>\n    To show tag add <code>.nui-tag</code> class to the element.\n</p>\n<nui-example-wrapper filenamePrefix=\"tag-basic\" exampleTitle=\"Tag basic usage\">\n    <nui-tag-basic-example></nui-tag-basic-example>\n</nui-example-wrapper>\n\n<h2>Statuses Usage</h2>\n<p>\n    To change tag styles for specific statuses you can use appropriate classes for that (for example, <code>.nui-tag-status</code>). As default, text color is black.\n    You can change it by adding <code>.nui-tag-text-light</code> class.\n</p>\n<nui-example-wrapper filenamePrefix=\"tag-color\" exampleTitle=\"Tag status usage\">\n    <nui-tag-color-example></nui-tag-color-example>\n</nui-example-wrapper>\n\n<h2>Statuses Usage With Border</h2>\n<p>\n    To change tag styles for specific statuses you can use appropriate classes for that (for example, <code>.nui-tag-with-border-status</code>).\n</p>\n<nui-example-wrapper filenamePrefix=\"tag-border-color\" exampleTitle=\"Tag status usage with border color\">\n    <nui-tag-border-color-example></nui-tag-border-color-example>\n</nui-example-wrapper>\n\n<h2>With Icons</h2>\n<p>\n    The example below shows how to customize tags by adding icons.\n</p>\n<nui-example-wrapper filenamePrefix=\"tag-with-icon\" exampleTitle=\"Tag with icons\">\n    <nui-tag-with-icon-example></nui-tag-with-icon-example>\n</nui-example-wrapper>\n\n<h2>With Hover Effect</h2>\n<p>\n    To add hover effect you can add <code>.nui-tag-with-hover-styles</code> class.\n</p>\n<nui-example-wrapper filenamePrefix=\"tag-with-hover\" exampleTitle=\"Tag with hover\">\n    <nui-tag-with-hover-example></nui-tag-with-hover-example>\n</nui-example-wrapper>\n\n");

/***/ }),

/***/ "scDb":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-basic-test/tree-basic-test.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [@.disabled]=\"true\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        {{node.name}}\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\" cdkTreeNodeToggle>\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <span class=\"nui-tree__header-title\">{{ node.name }}</span>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>\n");

/***/ }),

/***/ "siBs":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/viewport-manager/virtual-viewport-manager-docs/virtual-viewport-manager-docs.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><code>VirtualViewportManager</code> provides a mechanism for sequencing the rendered range stream emitted from the <code>CDK Viewport</code> into distinct page ranges.</p>\n<h2>Basic Usage</h2>\n<p>To use <code>VirtualViewportManager</code> do the following:</p>\n<ol>\n    <li>Add <code>VirtualViewportManager</code> to the providers of your parent component.</li>\n    <li>Register the filtering components on the dataSource via <code>this.dataSource.registerFilter()</code>.</li>\n    <li>Set up the <code>VirtualViewportManager</code> listener in the <code>AfterViewInit</code> lifecycle hook. Invoke viewport.observeNextPage$()\n        with <a href=\"../interfaces/IVirtualPageConfig.html\" target=\"_blank\">IVirtualPageConfig</a> to start observing/responding to next page events.</li>\n    <li>Reset the viewport on search events by invoking viewport.reset()\n        with <a href=\"../interfaces/IVirtualViewportResetOptions.html\" target=\"_blank\">IVirtualViewportResetOptions</a>.</li>\n</ol>\n\n<h2>Repeat with VirtualViewportManager and Search Example</h2>\n<p>\n    <code>nui-repeat</code> allows you to manage the virtual viewport by exposing its <code>{{getRepeatPropKey('viewportRef')}}</code> property.\n    In comparison to the non-filtered virtual/infinite scroll usage, if the user filters the results in some way,\n    say with a search box, we need to reset progress on our <code>VirtualViewportManager</code>. In the following example, when\n    the data is refreshed with the filtered results, the viewport manager's progress is reset in the <code>doSearch</code> method. <br />\n    <nui-message [allowDismiss]=false type=\"warning\">\n        <strong>Important: </strong> For virtual scroll to function correctly, the nui-repeat element must have a defined height. See\n        the template file in the example source expander below for how to do this.\n    </nui-message>\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-with-viewport-manager\" exampleTitle=\"Repeat with ViewportManager and Search\">\n    <nui-repeat-with-viewport-manager-example></nui-repeat-with-viewport-manager-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "t6Kh":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-visual-test/badge-visual-test.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-badge-counter nui-badge-critical\" data-before='1'></div>\n<div class=\"nui-badge-counter nui-badge-warning\" data-before='10'></div>\n<div class=\"nui-badge-counter nui-badge-info\" data-before='100'></div>\n<div class=\"nui-badge-counter nui-badge-ok\" data-before='999+'></div>\n<div class=\"nui-badge-counter nui-badge-warning nui-badge-text-black\" data-before=\"999+\"></div>\n<div class=\"nui-badge-counter nui-badge-counter-custom\" data-before='999+'></div>\n\n<div class=\"nui-badge-empty nui-badge-critical\"></div>\n<div class=\"nui-badge-empty nui-badge-warning\"></div>\n<div class=\"nui-badge-empty nui-badge-info\"></div>\n<div class=\"nui-badge-empty nui-badge-ok\"></div>\n<div class=\"nui-badge-empty nui-badge-empty-custom\"></div>\n\n<button nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        class=\"nui-badge-counter nui-badge-warning nui-badge-text-black button-example\"\n        data-before=\"1\"\n        i18n>Click me!</button>\n\n<button nui-button\n        type=\"button\"\n        displayStyle=\"primary\"\n        class=\"nui-badge-empty button-example\"\n        i18n>Click me!</button>\n\n<div class=\"nui-badge-counter nui-badge-info textbox-example\"\n     data-before=\"1\">\n    <nui-textbox\n        value=\"example value\">\n    </nui-textbox>\n</div>\n\n<div class=\"nui-badge-empty nui-badge-critical textbox-example\">\n    <nui-textbox\n        value=\"example value\">\n    </nui-textbox>\n</div>\n");

/***/ }),

/***/ "tD1Z":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/edge-detection-service/edge-detection-service.example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui\">\n    <div id=\"nui-demo-services-edge-detection\">\n        <h1>Edge detection Service</h1>\n        <div>\n            <form class=\"row\">\n                <div class=\"col-md-6\">\n                    <h2 style=\"margin-bottom: 30px\">Set the size of the element to be placed</h2>\n                    <ul>\n                        <li>\n                            <nui-textbox-number\n                                    caption=\"Width in pixels\"\n                                    name=\"element-name\"\n                                    [(value)]=\"deposit.width\"\n                                    ngDefaultControl>\n                            </nui-textbox-number>\n                        </li>\n                        <li>\n                            <nui-textbox-number\n                                    caption=\"Height in pixels\"\n                                    name=\"element-height\"\n                                    [(value)]=\"deposit.height\"\n                                    ngDefaultControl>\n                            </nui-textbox-number>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"col-md-6\">\n                    <h2>Set the size of the component where element is to be placed</h2>\n                    <p><i>Minimum width is 300px and minimum height is 50px</i></p>\n                    <ul>\n                        <li>\n                            <nui-textbox-number\n                                    caption=\"Width in pixels\"\n                                    name=\"width\"\n                                    [(value)]=\"parentComponent.width\"\n                                    [disabled]=\"!addEdgeDefinerClass\"\n                                    ngDefaultControl>\n                            </nui-textbox-number>\n                        </li>\n                        <li>\n                            <nui-textbox-number\n                                    caption=\"Height in pixels\"\n                                    name=\"height\"\n                                    [(value)]=\"parentComponent.height\"\n                                    [disabled]=\"!addEdgeDefinerClass\"\n                                    ngDefaultControl>\n                            </nui-textbox-number>\n                        </li>\n                    </ul>\n                </div>\n            </form>\n            <button nui-button type=\"button\" (click)=\"update()\">Calculate place</button>\n            <br>\n            <h2>Results</h2>\n            <p><i>Hover the properties for understanding that exactly what place-availability does it express</i></p>\n            <div class=\"col-md-12\">\n                <h3>\n                    <strong *ngIf=\"!addEdgeDefinerClass\">Placement within window</strong>\n                    <strong *ngIf=\"addEdgeDefinerClass\">Placement within specified component</strong>\n                </h3>\n                <div class=\"results\">\n                    <div>\n                        <h3>Can be placed</h3>\n                        <ul>\n                            <li (mouseover)=\"showPlaced.top = true\"\n                                (mouseleave)=\"showPlaced.top = false\">\n                                <b>Top: </b>\n                                <span class=\"label label-success\"\n                                      [ngClass]=\"{'label-danger': !canBe?.placed.top}\">\n                                    {{canBe?.placed.top}}\n                                </span>\n                            </li>\n                            <li (mouseover)=\"showPlaced.right = true\"\n                                (mouseleave)=\"showPlaced.right = false\">\n                                <b>Right: </b>\n                                <span class=\"label label-success\"\n                                      [ngClass]=\"{'label-danger': !canBe?.placed.right}\">\n                                    {{canBe?.placed.right}}\n                                </span>\n                            </li>\n                            <li (mouseover)=\"showPlaced.bottom = true\"\n                                (mouseleave)=\"showPlaced.bottom = false\">\n                                <b>Bottom: </b>\n                                <span\n                                    class=\"label label-success\"\n                                    [ngClass]=\"{'label-danger': !canBe?.placed.bottom}\">\n                                    {{canBe?.placed.bottom}}\n                                </span>\n                            </li>\n                            <li (mouseover)=\"showPlaced.left = true\"\n                                (mouseleave)=\"showPlaced.left = false\">\n                                <b>Left: </b>\n                                <span\n                                    class=\"label label-success\"\n                                    [ngClass]=\"{'label-danger': !canBe?.placed.left}\"\n                                    (mouseover)=\"showPlaced.left = true\"\n                                    (mouseleave)=\"showPlaced.left = false\">\n                                    {{canBe?.placed.left}}\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                    <div>\n                        <h3>Can be aligned</h3>\n                        <ul>\n                            <li (mouseover)=\"showAligned.top = true\"\n                                (mouseleave)=\"showAligned.top = false\">\n                                <b>Top: </b>\n                                <span class=\"label label-success\"\n                                      [ngClass]=\"{'label-danger': !canBe?.aligned.top}\">\n                                    {{canBe?.aligned.top}}\n                                </span>\n                            </li>\n                            <li (mouseover)=\"showAligned.right = true\"\n                                (mouseleave)=\"showAligned.right = false\">\n                                <b>Right: </b>\n                                <span class=\"label label-success\"\n                                      [ngClass]=\"{'label-danger': !canBe?.aligned.right}\">\n                                    {{canBe?.aligned.right}}\n                                </span>\n                            </li>\n                            <li (mouseover)=\"showAligned.bottom = true\"\n                                (mouseleave)=\"showAligned.bottom = false\">\n                                <b>Bottom: </b>\n                                <span class=\"label label-success\"\n                                      [ngClass]=\"{'label-danger': !canBe?.aligned.bottom}\">\n                                    {{canBe?.aligned.bottom}}\n                                </span>\n                            </li>\n                            <li (mouseover)=\"showAligned.left = true\"\n                                (mouseleave)=\"showAligned.left = false\">\n                                <b>Left: </b>\n                                <span class=\"label label-success\"\n                                      [ngClass]=\"{'label-danger': !canBe?.aligned.left}\">\n                                    {{canBe?.aligned.left}}\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <h3>By default edge definer element(container) is window</h3>\n                <nui-checkbox name=\"parent-class\"\n                              [value]=\"addEdgeDefinerClass\"\n                              (valueChange)=\"switchCheckbox()\"\n                              ngDefaultControl>\n                    Add nui-edge-definer class to parent component\n                </nui-checkbox>\n            </div>\n            <br>\n            <div #parent\n                 class=\"parent-component\"\n                 [ngStyle]=\"{width: parentComponent.width + 'px', height: parentComponent.height + 'px'}\">\n                <div class=\"base-point\">\n                    <button nui-button type=\"button\"\n                            class=\"base-point-element\">\n                        Basepoint of the place investigation\n                    </button>\n                    <div class=\"deposit to-be-placed top\"\n                         [ngStyle]=\"{\n                            height: deposit.height + 'px',\n                            display: showPlaced.top ? 'flex' : 'none'\n                         }\">\n                        <div class=\"arrow arrow-up\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-placed left\"\n                         [ngStyle]=\"{\n                            width: deposit.width + 'px',\n                            display: showPlaced.left ? 'flex' : 'none'\n                        }\">\n                        <div class=\"arrow arrow-left\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-placed right\"\n                         [ngStyle]=\"{\n                            width: deposit.width + 'px',\n                            display: showPlaced.right ? 'flex' : 'none'\n                        }\">\n                        <div class=\"arrow arrow-right\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-placed bottom\"\n                         [ngStyle]=\"{\n                            height: deposit.height + 'px',\n                            display: showPlaced.bottom ? 'flex' : 'none'\n                        }\">\n                        <div class=\"arrow arrow-down\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-aligned top\"\n                         [ngStyle]=\"{\n                            height: deposit.height + 'px',\n                            display: showAligned.top ? 'flex' : 'none'\n                        }\">\n                        <div class=\"arrow arrow-down\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-aligned left\"\n                         [ngStyle]=\"{\n                            width: deposit.width + 'px',\n                            display: showAligned.left ? 'flex' : 'none'\n                        }\">\n                        <div class=\"arrow arrow-right\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-aligned right\"\n                         [ngStyle]=\"{\n                            width: deposit.width + 'px',\n                            display: showAligned.right ? 'flex' : 'none'\n                         }\">\n                        <div class=\"arrow arrow-left\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit to-be-aligned bottom\"\n                         [ngStyle]=\"{\n                            height: deposit.height + 'px',\n                            display: showAligned.bottom ? 'flex' : 'none'\n                          }\">\n                        <div class=\"arrow arrow-up\"></div>\n                        <div class=\"line\"></div>\n                    </div>\n                    <div class=\"deposit-reference\"\n                         [ngStyle]=\"{\n                            width: deposit.width + 'px',\n                            height: deposit.height + 'px'\n                        }\"\n                         #placementElement></div>\n                </div>\n            </div>\n        </div>\n        <div style=\"display: inline-block\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "tS57":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/index.ts ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./tag-docs/tag-docs.example.component\";\nexport * from \"./tag-color/tag-color.example.component\";\nexport * from \"./tag-basic/tag-basic.example.component\";\nexport * from \"./tag-with-icon/tag-with-icon.example.component\";\nexport * from \"./tag-border-color/tag-border-color.example.component\";\nexport * from \"./tag-with-hover/tag-with-hover.example.component\";\n");

/***/ }),

/***/ "tXce":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/set-focus/set-focus.example.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui\">\n    <form>\n        <nui-radio-group>\n            <nui-radio id=\"nui-demo-setfocus-radio-carrot\"\n                       value=\"carrot\"\n                       checked\n                       [nuiSetFocus]=\"carrotFocused\"\n                       i18n>\n                carrot\n            </nui-radio>\n            <nui-radio id=\"nui-demo-setfocus-radio-onion\"\n                       value=\"onion\"\n                       [nuiSetFocus]=\"onionFocused\"\n                       i18n>\n                onion\n            </nui-radio>\n        </nui-radio-group>\n        <div>\n            <button id=\"nui-demo-setfocus-button-carrot\"\n                    nui-button\n                    type=\"button\"\n                    (click)=\"setCarrotFocus()\"\n                    i18n>\n                temporary carrot focus\n            </button>\n            <button id=\"nui-demo-setfocus-button-onion\"\n                    nui-button\n                    type=\"button\"\n                    (click)=\"setOnionFocus()\"\n                    i18n>\n                temporary onion focus\n            </button>\n        </div>\n        <div i18n>carrot focused: {{carrotFocused}}</div>\n        <div i18n>onion focused: {{onionFocused}}</div>\n    </form>\n</div>\n");

/***/ }),

/***/ "tXlF":
/*!*********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./client-side/client-side-basic/client-side-basic.example.component.html": "r98z",
	"./client-side/client-side-basic/client-side-basic.example.component.ts": "hSDq",
	"./client-side/client-side-custom-search/client-side-custom-search.example.component.html": "ry4B",
	"./client-side/client-side-custom-search/client-side-custom-search.example.component.ts": "djXJ",
	"./client-side/client-side-delayed/client-side-delayed.example.component.html": "QywY",
	"./client-side/client-side-delayed/client-side-delayed.example.component.ts": "EDqv",
	"./client-side/client-side-filtering/client-side-filtering.example.component.html": "L0d3",
	"./client-side/client-side-filtering/client-side-filtering.example.component.less": "S1vm",
	"./client-side/client-side-filtering/client-side-filtering.example.component.ts": "DsA0",
	"./client-side/client-side-with-selection/client-side-with-selection.example.component.html": "WfwH",
	"./client-side/client-side-with-selection/client-side-with-selection.example.component.ts": "+pTI",
	"./client-side/docs/client-side-data-source-docs.example.component.html": "39vb",
	"./client-side/docs/client-side-data-source-docs.example.component.ts": "Zk7Q",
	"./data-source.module.ts": "/LMT",
	"./deprecated-client-side/client-side-basic/client-side-basic.example.component.html": "n4pp",
	"./deprecated-client-side/client-side-basic/client-side-basic.example.component.ts": "TnLI",
	"./deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.html": "i5UG",
	"./deprecated-client-side/client-side-custom-search/client-side-custom-search.example.component.ts": "fjfW",
	"./deprecated-client-side/client-side-delayed/client-side-delayed.example.component.html": "rogj",
	"./deprecated-client-side/client-side-delayed/client-side-delayed.example.component.ts": "hY/w",
	"./deprecated-client-side/client-side-filtering/client-side-filtering.example.component.html": "q/5i",
	"./deprecated-client-side/client-side-filtering/client-side-filtering.example.component.less": "oheM",
	"./deprecated-client-side/client-side-filtering/client-side-filtering.example.component.ts": "JZF4",
	"./deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.html": "V4kI",
	"./deprecated-client-side/client-side-with-selection/client-side-with-selection.example.component.ts": "Jn00",
	"./deprecated-client-side/docs/data-source-docs.example.component.html": "bEQ3",
	"./deprecated-client-side/docs/data-source-docs.example.component.ts": "gcIZ",
	"./index.ts": "P9Nh"
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
webpackContext.id = "tXlF";

/***/ }),

/***/ "u/ue":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-lazy/tree-lazy.component.example.less ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "uG0b":
/*!**************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-filter/data-filter-basic/data-filter-basic.example.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ListDatasource, TableDatasource, DataFilterBasicExampleComponent, NuiDataFilterTableComponent, NuiDataFilterListComponent, FilteringTimeFramePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDatasource", function() { return ListDatasource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDatasource", function() { return TableDatasource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterBasicExampleComponent", function() { return DataFilterBasicExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterTableComponent", function() { return NuiDataFilterTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuiDataFilterListComponent", function() { return NuiDataFilterListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteringTimeFramePickerComponent", function() { return FilteringTimeFramePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/moment */ "wd/R");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _mocked_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mocked-data */ "7JHD");
/* harmony import */ var _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../src/lib/divider/divider.component */ "UGtJ");
/* harmony import */ var _src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../src/lib/sorter/sorter.component */ "3WNR");
/* harmony import */ var _src_lib_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table.component */ "ey6q");
/* harmony import */ var _src_lib_table_table_cell_table_column_def_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-column-def.directive */ "XeyC");
/* harmony import */ var _src_lib_table_table_cell_table_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-header-cell-def.directive */ "htGY");
/* harmony import */ var _src_lib_table_table_cell_table_cell_def_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-cell-def.directive */ "/BSE");
/* harmony import */ var _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-row/table-row.component */ "LFiI");
/* harmony import */ var _src_lib_table_table_cell_table_header_cell_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-header-cell.component */ "Ppt+");
/* harmony import */ var _src_lib_table_table_cell_table_cell_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../src/lib/table/table-cell/table-cell.directive */ "jdPS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../src/lib/search/search.component */ "dYN2");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../src/lib/time-frame-picker/time-frame-picker.component */ "chzP");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../src/lib/time-frame-picker/time-frame-format.pipe */ "Y/g/");

























const _c0 = ["timeFramePicker"];
function NuiDataFilterTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NuiDataFilterTableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r8.position);
} }
function NuiDataFilterTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NuiDataFilterTableComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r9.issue);
} }
function NuiDataFilterTableComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NuiDataFilterTableComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r10.date, "EEEE, MMMM dd, yyyy"), "");
} }
function NuiDataFilterTableComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 16);
} }
function NuiDataFilterTableComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 17);
} }
const _c7 = ["listSearch"];
function NuiDataFilterListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r4.issue, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, item_r4.date, "EEEE, MMMM dd, yyyy"), "");
} }
function FilteringTimeFramePickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-time-frame-picker", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changed", function FilteringTimeFramePickerComponent_ng_template_4_Template_nui_time_frame_picker_changed_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.updateTf($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-dialog-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilteringTimeFramePickerComponent_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.cancelPopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilteringTimeFramePickerComponent_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.confirmPopover(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("startModel", ctx_r1.tf)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate);
} }
// custom data sources used for filtering
class ListDatasource extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["LocalFilteringDataSource"] {
    constructor(searchService, filterService) {
        super(searchService);
        this.filterService = filterService;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // Subscribe to service, and automatically unsubscribe upon `ngOnDestroy`
        this.filterService.filteringSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.onDestroy$)).subscribe(() => {
            this.applyFilters();
        });
        super.setData(_mocked_data__WEBPACK_IMPORTED_MODULE_6__["LIST_DATA"]);
    }
    getFilteredData() {
        const _super = Object.create(null, {
            getFilteredData: { get: () => super.getFilteredData }
        });
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filters = this.filterService.getFilters();
            const timeFramePickerFilter = filters.timeFramePicker;
            const filteredData = yield _super.getFilteredData.call(this, filters);
            let nextChunk = (_a = filteredData.repeat) === null || _a === void 0 ? void 0 : _a.itemsSource;
            // TIME FRAME PICKER FILTERING
            if (timeFramePickerFilter) {
                nextChunk = nextChunk === null || nextChunk === void 0 ? void 0 : nextChunk.filter((item) => item.date.isBetween(timeFramePickerFilter.value.start, timeFramePickerFilter.value.end)
                    || item.date.isSame(timeFramePickerFilter.value.start)
                    || item.date.isSame(timeFramePickerFilter.value.end));
            }
            if (!((_b = filteredData.repeat) === null || _b === void 0 ? void 0 : _b.itemsSource) || !nextChunk) {
                throw new Error("filteredData.repeat is not defined");
            }
            filteredData.repeat.itemsSource = nextChunk;
            return filteredData;
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
ListDatasource.ɵfac = function ListDatasource_Factory(t) { return new (t || ListDatasource)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"])); };
ListDatasource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ListDatasource, factory: ListDatasource.ɵfac });
class TableDatasource extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["LocalFilteringDataSource"] {
    constructor(searchService, filterService) {
        super(searchService);
        this.filterService = filterService;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // Subscribe to service, and automatically unsubscribe upon `ngOnDestroy`
        this.filterService.filteringSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.onDestroy$)).subscribe(() => {
            this.applyFilters();
        });
        super.setData(_mocked_data__WEBPACK_IMPORTED_MODULE_6__["TABLE_DATA"]);
    }
    getFilteredData() {
        const _super = Object.create(null, {
            getFilteredData: { get: () => super.getFilteredData }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const filters = this.filterService.getFilters();
            const timeFramePickerFilter = filters.timeFramePicker;
            const filteredData = yield _super.getFilteredData.call(this, filters);
            if (!filteredData.repeat) {
                throw new Error("filteredData.repeat is not defined");
            }
            let nextChunk = filteredData.repeat.itemsSource;
            // TIME FRAME PICKER FILTERING
            if (timeFramePickerFilter) {
                nextChunk = nextChunk.filter((item) => item.date.isBetween(timeFramePickerFilter.value.start, timeFramePickerFilter.value.end)
                    || item.date.isSame(timeFramePickerFilter.value.start)
                    || item.date.isSame(timeFramePickerFilter.value.end));
            }
            filteredData.repeat.itemsSource = nextChunk;
            return filteredData;
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
    }
}
TableDatasource.ɵfac = function TableDatasource_Factory(t) { return new (t || TableDatasource)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"])); };
TableDatasource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableDatasource, factory: TableDatasource.ɵfac });
// parent component
class DataFilterBasicExampleComponent {
    constructor(filterService) {
        this.filterService = filterService;
    }
    ngAfterViewInit() {
        // registering top-level filter which will be applied to all children
        this.filterService.registerFilter({
            timeFramePicker: {
                componentInstance: this.timeFramePicker,
            },
        });
        this.filterService.applyFilters();
    }
    applyFilters() {
        this.filterService.applyFilters();
    }
}
DataFilterBasicExampleComponent.ɵfac = function DataFilterBasicExampleComponent_Factory(t) { return new (t || DataFilterBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"])); };
DataFilterBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataFilterBasicExampleComponent, selectors: [["nui-data-filter-basic-example"]], viewQuery: function DataFilterBasicExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.timeFramePicker = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"]])], decls: 6, vars: 0, consts: [[1, "p-4", 2, "border", "1px solid black"], [1, "mt-2", "mb-2"], [3, "timeFrameChanged"], ["timeFramePicker", ""]], template: function DataFilterBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-filtering-time-frame-picker", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeFrameChanged", function DataFilterBasicExampleComponent_Template_nui_filtering_time_frame_picker_timeFrameChanged_2_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-data-filter-table-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: function () { return [FilteringTimeFramePickerComponent, _src_lib_divider_divider_component__WEBPACK_IMPORTED_MODULE_7__["DividerComponent"], NuiDataFilterTableComponent]; }, encapsulation: 2 });
// first child component
class NuiDataFilterTableComponent {
    constructor(dataFilter, dataSourceService) {
        this.dataFilter = dataFilter;
        this.dataSourceService = dataSourceService;
        this.dataSource = [];
        this.displayedColumns = ["position", "issue", "date"];
        this.sorterItems = [
            {
                title: $localize `Issue`,
                value: "issue",
            },
        ];
        this.initialSortDirection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SorterDirection"].ascending;
        this.sortBy = this.sorterItems[0].value;
    }
    ngAfterViewInit() {
        // this filter will be applied in this component and NuiDataFilterListComponent
        this.dataFilter.registerFilter({
            sorter: {
                componentInstance: this.sorterComponent,
            },
        });
        this.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            var _a;
            this.dataSource = (_a = data.repeat) === null || _a === void 0 ? void 0 : _a.itemsSource;
        });
    }
    applyFilters() {
        this.dataFilter.applyFilters();
    }
    onSorterAction(changes) {
        this.sortBy = changes.newValue.sortBy;
        this.applyFilters();
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
}
NuiDataFilterTableComponent.ɵfac = function NuiDataFilterTableComponent_Factory(t) { return new (t || NuiDataFilterTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TableDatasource)); };
NuiDataFilterTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NuiDataFilterTableComponent, selectors: [["nui-data-filter-table-example"]], viewQuery: function NuiDataFilterTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SorterComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sorterComponent = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"], TableDatasource])], decls: 17, vars: 6, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1345472093440723911$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__2 = goog.getMsg(" No.");
        i18n_1 = MSG_EXTERNAL_1345472093440723911$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__2;
    }
    else {
        i18n_1 = $localize `:␟333f0164082b9f12f63ca11438b2085d074a5b0f␟1345472093440723911: No.`;
    } let i18n_3; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1360536936124021291$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__4 = goog.getMsg(" Issue");
        i18n_3 = MSG_EXTERNAL_1360536936124021291$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__4;
    }
    else {
        i18n_3 = $localize `:␟cd6343e8af83c71784839ea725d1b32ca33e62da␟1360536936124021291: Issue`;
    } let i18n_5; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1981370557171963484$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__6 = goog.getMsg(" Date");
        i18n_5 = MSG_EXTERNAL_1981370557171963484$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__6;
    }
    else {
        i18n_5 = $localize `:␟a5d29304b36199a6bc7500b653e3270f7ab53163␟1981370557171963484: Date`;
    } return [[1, "p-4", 2, "border", "1px solid red"], [1, "mb-2"], ["id", "nui-data-filter-basic-sorter", 3, "itemsSource", "selectedItem", "sortDirection", "sorterAction"], ["nui-table", "", "id", "nui-data-filter-basic-table", 3, "dataSource"], ["nuiColumnDef", "position"], ["nui-header-cell", "", 4, "nuiHeaderCellDef"], ["nui-cell", "", 4, "nuiCellDef"], ["nuiColumnDef", "issue"], ["nuiColumnDef", "date"], ["nui-header-row", "", 4, "nuiHeaderRowDef"], ["nui-row", "", "density", "tiny", 4, "nuiRowDef", "nuiRowDefColumns"], ["nui-header-cell", ""], i18n_1, ["nui-cell", ""], i18n_3, i18n_5, ["nui-header-row", ""], ["nui-row", "", "density", "tiny"]]; }, template: function NuiDataFilterTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-sorter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorterAction", function NuiDataFilterTableComponent_Template_nui_sorter_sorterAction_2_listener($event) { return ctx.onSorterAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NuiDataFilterTableComponent_th_5_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NuiDataFilterTableComponent_td_6_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NuiDataFilterTableComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NuiDataFilterTableComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NuiDataFilterTableComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NuiDataFilterTableComponent_td_12_Template, 3, 4, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NuiDataFilterTableComponent_tr_13_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NuiDataFilterTableComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "nui-data-filter-list-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.sorterItems)("selectedItem", ctx.sortBy)("sortDirection", ctx.initialSortDirection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nuiRowDefColumns", ctx.displayedColumns);
    } }, directives: function () { return [_src_lib_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_8__["SorterComponent"], _src_lib_table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"], _src_lib_table_table_cell_table_column_def_directive__WEBPACK_IMPORTED_MODULE_10__["TableColumnDefDirective"], _src_lib_table_table_cell_table_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_11__["TableHeaderCellDefDirective"], _src_lib_table_table_cell_table_cell_def_directive__WEBPACK_IMPORTED_MODULE_12__["TableCellDefDirective"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_13__["TableHeaderRowDefDirective"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_13__["TableRowDefDirective"], NuiDataFilterListComponent, _src_lib_table_table_cell_table_header_cell_component__WEBPACK_IMPORTED_MODULE_14__["TableHeaderCellComponent"], _src_lib_table_table_cell_table_cell_directive__WEBPACK_IMPORTED_MODULE_15__["TableCellDirective"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_13__["TableHeaderRowComponent"], _src_lib_table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_13__["TableRowComponent"]]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]]; }, encapsulation: 2 });
// second child component
class NuiDataFilterListComponent {
    constructor(filterService, dataSourceService) {
        this.filterService = filterService;
        this.dataSourceService = dataSourceService;
        this.state = {
            repeat: {
                itemsSource: [],
            },
        };
    }
    ngAfterViewInit() {
        // this filter will be applied only in this component
        this.filterService.registerFilter({
            search: {
                componentInstance: this.search,
            },
        });
        this.filterService.applyFilters();
        this.outputsSubscription = this.dataSourceService.outputsSubject.subscribe((data) => {
            this.state = data;
        });
    }
    applyFilters() {
        this.filterService.applyFilters();
    }
    ngOnDestroy() {
        this.outputsSubscription.unsubscribe();
    }
}
NuiDataFilterListComponent.ɵfac = function NuiDataFilterListComponent_Factory(t) { return new (t || NuiDataFilterListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ListDatasource)); };
NuiDataFilterListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NuiDataFilterListComponent, selectors: [["nui-data-filter-list-example"]], viewQuery: function NuiDataFilterListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataFilterService"], ListDatasource])], decls: 8, vars: 2, consts: [[1, "p-4", 2, "border", "1px solid green"], [1, "mb-2"], ["id", "nui-data-filter-basic-search", 3, "inputChange", "cancel"], ["listSearch", ""], ["id", "nui-data-filter-basic-repeat", 3, "itemsSource", "repeatItemTemplateRef"], ["filteringRepeat", ""], ["repeatItemTemplate", ""]], template: function NuiDataFilterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-search", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inputChange", function NuiDataFilterListComponent_Template_nui_search_inputChange_2_listener() { return ctx.applyFilters(); })("cancel", function NuiDataFilterListComponent_Template_nui_search_cancel_2_listener() { return ctx.applyFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "nui-repeat", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NuiDataFilterListComponent_ng_template_6_Template, 3, 5, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.state.repeat == null ? null : ctx.state.repeat.itemsSource)("repeatItemTemplateRef", _r2);
    } }, directives: [_src_lib_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_18__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]], encapsulation: 2 });
// custom time frame picker
class FilteringTimeFramePickerComponent {
    constructor(timeframeService) {
        this.timeframeService = timeframeService;
        this.timeFrameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tf = {
            startDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("01/01/2019", "L"),
            endDatetime: moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("02/12/2019", "L"),
        };
        this.minDate = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()("12/01/2018", "L"); // "L" is "MM/DD/YYY" in moment.js
        this.maxDate = moment_moment__WEBPACK_IMPORTED_MODULE_3___default()();
        this.showFooter = false;
        this.closePopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.openPopoverSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.acceptedTimeframe = this.tf;
    }
    updateTf(value) {
        this.tf = value;
    }
    confirmPopover() {
        this.closePopoverSubject.next();
        this.acceptedTimeframe = this.tf;
        this.timeFrameChanged.emit(this.acceptedTimeframe);
    }
    cancelPopover() {
        this.showFooter = false;
        this.closePopoverSubject.next();
    }
    getFilters() {
        return {
            type: "range",
            value: {
                start: this.acceptedTimeframe.startDatetime.toDate(),
                end: this.acceptedTimeframe.endDatetime.toDate(),
            },
        };
    }
}
FilteringTimeFramePickerComponent.ɵfac = function FilteringTimeFramePickerComponent_Factory(t) { return new (t || FilteringTimeFramePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["TimeframeService"])); };
FilteringTimeFramePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilteringTimeFramePickerComponent, selectors: [["nui-filtering-time-frame-picker"]], outputs: { timeFrameChanged: "timeFrameChanged" }, decls: 6, vars: 7, consts: function () { let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2396240877469461361$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__9 = goog.getMsg(" Cancel ");
        i18n_8 = MSG_EXTERNAL_2396240877469461361$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟fb4d1e0ce01940692d80037663169dffea9bf880␟2396240877469461361: Cancel `;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7697274451446526417$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__11 = goog.getMsg(" Apply ");
        i18n_10 = MSG_EXTERNAL_7697274451446526417$$DEMO_SRC_COMPONENTS_DEMO_COMMON_DATA_FILTER_DATA_FILTER_BASIC_DATA_FILTER_BASIC_EXAMPLE_COMPONENT_TS__11;
    }
    else {
        i18n_10 = $localize `:␟b8123d9a5c62dc48a978661460a86c04bb165e76␟7697274451446526417: Apply `;
    } return [["trigger", "click", "id", "nui-data-filter-basic-time-frame-picker-popover", 3, "template", "hasPadding", "closePopover", "modal"], [1, "nui-text-link", 2, "cursor", "pointer"], ["popoverTimeFramePicker", ""], [1, "m-3"], [3, "startModel", "maxDate", "minDate", "changed"], ["nui-button", "", "id", "nui-data-filter-basic-time-frame-picker-cancel-btn", "type", "button", "displayStyle", "action", 3, "click"], i18n_8, ["nui-button", "", "id", "nui-data-filter-basic-time-frame-picker-apply-btn", "type", "button", "displayStyle", "primary", 3, "click"], i18n_10]; }, template: function FilteringTimeFramePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-popover", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "timeFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FilteringTimeFramePickerComponent_ng_template_4_Template, 7, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", _r0)("hasPadding", false)("closePopover", ctx.closePopoverSubject)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, ctx.tf));
    } }, directives: [_src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_19__["PopoverComponent"], _src_lib_time_frame_picker_time_frame_picker_component__WEBPACK_IMPORTED_MODULE_20__["TimeFramePickerComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_21__["ButtonComponent"]], pipes: [_src_lib_time_frame_picker_time_frame_format_pipe__WEBPACK_IMPORTED_MODULE_22__["TimeFrameFormatPipe"]], encapsulation: 2 });


/***/ }),

/***/ "uIky":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tag/tag-with-icon/tag-with-icon.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-tag-with-icon-example\",\n    templateUrl: \"./tag-with-icon.example.component.html\",\n    styleUrls: [\"./tag-with-icon.example.component.less\"],\n})\nexport class TagWithIconExampleComponent {\n}\n");

/***/ }),

/***/ "uT2B":
/*!***********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/deprecated-client-side/docs/data-source-docs.example.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: DataSourceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceExampleComponent", function() { return DataSourceExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../src/lib/docs/example-code/example-code.component */ "DTer");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-side-basic/client-side-basic.example.component */ "XmNi");
/* harmony import */ var _client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-side-custom-search/client-side-custom-search.example.component */ "MLHz");
/* harmony import */ var _client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client-side-delayed/client-side-delayed.example.component */ "7F6/");
/* harmony import */ var _client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client-side-filtering/client-side-filtering.example.component */ "+XaK");
/* harmony import */ var _client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client-side-with-selection/client-side-with-selection.example.component */ "Tltc");









/**
 * TODO: Remove in  - NUI-5835
 * @deprecated
 */
class DataSourceExampleComponent {
    constructor() {
        this.subclassCode = `@Injectable()
export class MyNewClass extends LocalFilteringDataSource<ExampleItem> {
    constructor(@Inject(SearchService) searchService: SearchService) {
        super(searchService);
    }
}`;
    }
}
DataSourceExampleComponent.ɵfac = function DataSourceExampleComponent_Factory(t) { return new (t || DataSourceExampleComponent)(); };
DataSourceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataSourceExampleComponent, selectors: [["nui-data-source-example"]], decls: 92, vars: 5, consts: [["target", "_blank", "href", "https://cp.solarwinds.com/display/NU/Filtered+view+communication+mechanism"], ["type", "critical"], ["title", "Ahead of Time"], ["language", "typescript"], ["filenamePrefix", "client-side", "exampleTitle", "Client Side"], ["href", "https://angular.io/guide/dependency-injection-providers#alternative-class-providers"], ["filenamePrefix", "client-side-custom-search", "exampleTitle", "Client-Side Custom Search"], ["filenamePrefix", "client-side-delayed", "exampleTitle", "Client Side Delayed"], ["filenamePrefix", "client-side-filtering", "exampleTitle", "Manually Composed Filtering Layout"], ["href", "../injectables/ListService.html", "target", "_blank"], ["filenamePrefix", "client-side-with-selection", "exampleTitle", "Client-Side Filtering With Selection"]], template: function DataSourceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Local Filtering Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The main responsibility of a data source is to process one or more filters (e.g. pagination, sorting, search, etc.) from any filtering components before exposing the data to a presentation layer. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LocalFilteringDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " aims to allow filtering components to be independent from the main presentation component by allowing each of them to communicate to the service how they each individually want to filter the data. The presentation component can then ask for the pre-filtered data via the service.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filtering components can be registered with the service in the following manner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " to set components that will be part of filtering process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "implement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "getFilteredData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " in your own service or use existing from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LocalFilteringDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "use it by subscribing to output and applying newly received data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Visualization of data flow is available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Warning:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " If you are planning on using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "abbr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "AoT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " compilation, avoid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "directly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " providing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "LocalFilteringDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ". The search service inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "LocalFilteringDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " will not be populated under AoT compilation (JIT compilation will work normally). A simple work around is to create a simple class, have it inherit/extend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "LocalFilteringDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", and then provide that.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nui-example-code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nui-deprecated-client-side-basic-data-source-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Custom Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "If needed to fully or partially override logic of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SearchService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ", you can easily provide a new class extended from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SearchService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " using Angular DI on the Component level using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Alternative class provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "This example shows how to do case-sensitive search.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "nui-deprecated-client-side-custom-search-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Delayed Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "The rxjs pipe function can be used to introduce a delay or debounce.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "nui-deprecated-client-side-delayed-data-source-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\nHere we're combining several components to implement filter panel. For more information please see inline comments.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nui-deprecated-client-side-filtering-data-source-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "ListService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " helps with selection handling, both for the repeat and the selector.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "nui-deprecated-client-side-with-selection-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" this.dataSourceService.componentTree = ", "{", " search: ", "{", "...", "}", " ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subclassCode);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_2__["ExampleCodeComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ExampleWrapperComponent"], _client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["DepreacatedDataSourceClientSideBasicExampleComponent"], _client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__["DepreacatedDataSourceClientSideCustomSearchExampleComponent"], _client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_6__["DepreacatedDataSourceClientSideDelayedExampleComponent"], _client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_7__["DepreacatedDataSourceClientSideFilteringExampleComponent"], _client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_8__["DepreacatedDataSourceWithSelectionExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ulVr":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-with-additional-content/tree-with-additional-content.example.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component } from \"@angular/core\";\nimport { EventBusService, expand } from \"@nova-ui/bits\";\n\n\ninterface FoodNode {\n    name: string;\n    children?: FoodNode[];\n}\n\nconst TREE_DATA: FoodNode[] = [\n    {\n        name: \"Fruit\",\n        children: [\n            { name: \"Apple\" },\n            { name: \"Banana\" },\n            { name: \"Fruit loops\" },\n        ],\n    },\n    {\n        name: \"Vegetables\",\n        children: [\n            {\n                name: \"Green\",\n                children: [{ name: \"Broccoli\" }, { name: \"Brussels sprouts\" }],\n            },\n            {\n                name: \"Orange\",\n                children: [{ name: \"Pumpkins\" }, { name: \"Carrots\" }],\n            },\n            {\n                name: \"Red\",\n            },\n        ],\n    },\n    {\n        name: \"Meat\",\n    },\n];\n\n\n@Component({\n    selector: \"nui-tree-with-additional-content-example\",\n    templateUrl: \"tree-with-additional-content.example.component.html\",\n    styleUrls: [\"tree-with-additional-content.example.component.less\"],\n    host: { id: \"tree-with-additional-content-example\" },\n    animations: [expand],\n})\nexport class TreeWithAdditionalContentExampleComponent {\n    treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    dataSource = new ArrayDataSource(TREE_DATA);\n\n    public items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n\n    public hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;\n\n    constructor(private eventBusService: EventBusService) {\n    }\n\n    public onToggleClick() {\n        this.eventBusService.getStream({id: \"document-click\"}).next(new MouseEvent(\"click\"));\n    }\n}\n");

/***/ }),

/***/ "vKNe":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-visual-test/tree-paginator-test/tree-paginator-test.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ArrayDataSource } from \"@angular/cdk/collections\";\nimport { CdkNestedTreeNode, CdkTree, NestedTreeControl } from \"@angular/cdk/tree\";\nimport { Component, IterableDiffer, IterableDiffers, ViewChild } from \"@angular/core\";\nimport { EventBusService, expand } from \"@nova-ui/bits\";\n\nimport {FoodNode, HttpMock, IApiResponse, TREE_DATA_PAGINATOR} from \"../data\";\n\n@Component({\n  selector: \"nui-tree-paginator-test\",\n  templateUrl: \"./tree-paginator-test.component.html\",\n  styleUrls: [\"./tree-paginator-test.component.less\"],\n  host: { id: \"nui-tree-paginator-example\" },\n  animations: [expand],\n  providers: [HttpMock],\n})\nexport class TreePaginatorTestComponent {\n\n    public pageSize = 10; // used for 'nui-paginator'\n    public nodesTotalItems: { [key: string]: number } = {};\n\n    public treeControl = new NestedTreeControl<FoodNode>((node) => node.children);\n    public dataSource = new ArrayDataSource(TREE_DATA_PAGINATOR);\n\n    @ViewChild(CdkTree) private cdkTree: CdkTree<FoodNode>;\n\n    hasChild = (_: number, node: FoodNode) => node.children;\n\n    constructor(private http: HttpMock,\n                private differ: IterableDiffers,\n                private eventBusService: EventBusService) {\n    }\n\n    /** Load first page on first open */\n    public onToggleClick(node: FoodNode, nestedNode: CdkNestedTreeNode<any>) {\n        this.eventBusService.getStream({id: \"document-click\"}).next();\n\n        if (node.hasPagination && node.children && !node.children.length) {\n            const paginatorOptions = {\n                page: 1,\n                pageSize: this.pageSize,\n            };\n\n            this.loadNodeItems(node, nestedNode, paginatorOptions);\n        }\n    }\n\n    public loadNodeItems(node: FoodNode, nestedNodeDirective: CdkNestedTreeNode<any>, paginatorOptions: any): void {\n        if (node.isLoading) { return; }\n\n        node.isLoading = true;\n\n        this.http.getNodeItems(node.name, paginatorOptions.page, paginatorOptions.pageSize).subscribe((res: IApiResponse) => {\n            this.handleNodeTotalItems(node.name, res.total);\n            this.handleNodeContent(node, nestedNodeDirective, res.items);\n            node.isLoading = false;\n        });\n    }\n\n    private handleNodeTotalItems(nodeId: string, totalItems: number) {\n        this.nodesTotalItems[nodeId] = totalItems;\n    }\n\n    private handleNodeContent(node: FoodNode, nestedNodeDirective: CdkNestedTreeNode<any>, items: FoodNode[]) {\n        node.children = [];\n        const differ: IterableDiffer<FoodNode> = this.differ.find(node.children).create();\n        node.children = items;\n\n        // clear previously rendered leaf nodes\n        nestedNodeDirective.nodeOutlet.first.viewContainer.clear();\n        this.cdkTree.renderNodeChanges(node.children, differ, nestedNodeDirective.nodeOutlet.first.viewContainer, node);\n    }\n\n}\n");

/***/ }),

/***/ "vsEn":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-empty-basic/badge-empty-basic.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-badge-empty\"></div>\n");

/***/ }),

/***/ "wGmj":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-checkbox-lazy/tree-checkbox-lazy.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"nui-tree__leaf\">\n        <button nui-button displayStyle=\"action\" type=\"button\" disabled></button>\n        <nui-checkbox class=\"leaf-control\"\n                      [checked]=\"isParentNodeCheckedOn(node)\"\n                      (valueChange)=\"leafItemSelectionToggle(node)\">{{node.name}}</nui-checkbox>\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node #nestedNode=cdkNestedTreeNode *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"nui-tree\">\n        <div class=\"nui-tree__header\" cdkTreeNodeToggle (click)=\"loadMore(node, nestedNode)\">\n            <nui-icon class=\"nui-tree__header-icon\" icon=\"{{treeControl.isExpanded(node) ? 'triangle-down' : 'triangle-right'}}\"></nui-icon>\n            <nui-checkbox class=\"branch-control\"\n                          (click)=\"$event.stopPropagation()\"\n                          [checked]=\"descendantsAllSelected(node) || isParentNodeCheckedOn(node)\"\n                          [indeterminate]=\"descendantsPartiallySelected(node)\"\n                          (valueChange)=\"branchItemSelectionToggle(node)\">\n\n                          <span class=\"nui-tree__header-title\">{{ node.name }} ({{ node.length }})</span>\n            </nui-checkbox>\n        </div>\n        <div class=\"nui-tree__body\"\n             [class.nui-tree__body--collapsed]=\"!treeControl.isExpanded(node)\"\n             [@expandedState]=\"treeControl.isExpanded(node) ? 'expanded' : 'collapsed'\">\n            <nui-spinner *ngIf=\"node.isLoading\" [show]=\"node.isLoading\" [delay]=\"0\"></nui-spinner>\n            <ng-container cdkTreeNodeOutlet></ng-container>\n        </div>\n    </cdk-nested-tree-node>\n</cdk-tree>");

/***/ }),

/***/ "x5HX":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/badge/badge-docs/badge-docs.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Basic Usage</h2>\n\n<p>To show badge add <code>.nui-badge-counter</code> class to the element with <code>position: relative</code> CSS rule.</p>\n<p>To display desired content, pass a string to the <code>data-before</code> attribute on the element where Badge class applied.</p>\n\n<nui-example-wrapper filenamePrefix=\"badge-counter-basic\" exampleTitle=\"Counter Basic Usage\">\n    <nui-badge-counter-basic></nui-badge-counter-basic>\n</nui-example-wrapper>\n\n<p>To show badge without content use <code>.nui-badge-empty</code> class to the element with <code>position: relative</code> CSS rule.</p>\n\n<nui-example-wrapper filenamePrefix=\"badge-empty-basic\" exampleTitle=\"Empty Basic Usage\">\n    <nui-badge-empty-basic></nui-badge-empty-basic>\n</nui-example-wrapper>\n\n<h2>Statuses usage</h2>\n\n<p>Badge provides classes with all system colors that NovaUI uses.</p>\n\n<nui-example-wrapper filenamePrefix=\"badge-system-statuses\" exampleTitle=\"Statuses Usage\">\n    <nui-badge-system-statuses></nui-badge-system-statuses>\n</nui-example-wrapper>\n\n<h2>Color text</h2>\n\n<p>Badge provides class for change color text to black, use <code>.nui-badge-text-black</code> for proper contrast between text and background.</p>\n\n<nui-example-wrapper filenamePrefix=\"badge-color-black\" exampleTitle=\"Color Text\">\n    <nui-badge-color-black></nui-badge-color-black>\n</nui-example-wrapper>\n\n<h2>Badge customization</h2>\n\n<p>Badge is opened for customization, for this, declare CSS class with <code>:after</code> psuedo-element and apply it to the element.</p>\n\n<nui-example-wrapper filenamePrefix=\"badge-customization\" exampleTitle=\"Badge Customization\">\n    <nui-badge-customization></nui-badge-customization>\n</nui-example-wrapper>\n\n<h2>Applying badge to the NovaUI elements</h2>\n\n<p>For some NovaUI elements undesirable applying badge classes directly, because badge won't be shown. In this case, wrap NovaUI\n    element for example in <code>div</code>, and apply CSS Badge related classes to this wrapper. See <code>nui-textbox</code> example.</p>\n\n<nui-example-wrapper filenamePrefix=\"badge-novaui\" exampleTitle=\"Using with NovaUI\">\n    <nui-badge-novaui></nui-badge-novaui>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "x87Z":
/*!************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/data-source/client-side/docs/client-side-data-source-docs.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ClientSideDataSourceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSideDataSourceDocsComponent", function() { return ClientSideDataSourceDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../src/lib/docs/example-code/example-code.component */ "DTer");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-side-basic/client-side-basic.example.component */ "XoKr");
/* harmony import */ var _client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-side-custom-search/client-side-custom-search.example.component */ "igbI");
/* harmony import */ var _client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client-side-delayed/client-side-delayed.example.component */ "Veua");
/* harmony import */ var _client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client-side-filtering/client-side-filtering.example.component */ "K9S3");
/* harmony import */ var _client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client-side-with-selection/client-side-with-selection.example.component */ "NOyz");









class ClientSideDataSourceDocsComponent {
    constructor() {
        this.subclassCode = `@Injectable()
export class MyNewClass extends ClientSideDataSource<ExampleItem> {
    constructor(@Inject(SearchService) searchService: SearchService) {
        super(searchService);
    }
}`;
    }
}
ClientSideDataSourceDocsComponent.ɵfac = function ClientSideDataSourceDocsComponent_Factory(t) { return new (t || ClientSideDataSourceDocsComponent)(); };
ClientSideDataSourceDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientSideDataSourceDocsComponent, selectors: [["nui-client-side-data-source-docs"]], decls: 92, vars: 5, consts: [["target", "_blank", "href", "https://cp.solarwinds.com/display/NU/Filtered+view+communication+mechanism"], ["type", "critical"], ["title", "Ahead of Time"], ["language", "typescript"], ["filenamePrefix", "client-side-basic", "exampleTitle", "Basic Client Side"], ["href", "https://angular.io/guide/dependency-injection-providers#alternative-class-providers"], ["filenamePrefix", "client-side-custom-search", "exampleTitle", "Client-Side Custom Search"], ["filenamePrefix", "client-side-delayed", "exampleTitle", "Client Side Delayed"], ["filenamePrefix", "client-side-filtering", "exampleTitle", "Manually Composed Filtering Layout"], ["href", "../injectables/ListService.html", "target", "_blank"], ["filenamePrefix", "client-side-with-selection", "exampleTitle", "Client-Side Filtering With Selection"]], template: function ClientSideDataSourceDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Client Side Data Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The main responsibility of a data source is to process one or more filters (e.g. pagination, sorting, search, etc.) from any filtering components before exposing the data to a presentation layer. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ClientSideDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " aims to allow filtering components to be independent from the main presentation component by allowing each of them to communicate to the service how they each individually want to filter the data. The presentation component can then ask for the pre-filtered data via the service.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Filtering components can be registered with the service in the following manner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " to set components that will be part of filtering process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "implement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "getFilteredData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " in your own service or use existing from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ClientSideDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "use it by subscribing to output and applying newly received data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Visualization of data flow is available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-message", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Warning:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " If you are planning on using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "abbr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "AoT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " compilation, avoid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "directly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " providing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ClientSideDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ". The search service inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ClientSideDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " will not be populated under AoT compilation (JIT compilation will work normally). A simple work around is to create a simple class, have it inherit/extend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ClientSideDataSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ", and then provide that.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nui-example-code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "nui-client-side-basic-data-source-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Custom Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "If needed to fully or partially override logic of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SearchService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ", you can easily provide a new class extended from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "SearchService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " using Angular DI on the Component level using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Alternative class provider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "This example shows how to do case-sensitive search.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "nui-client-side-custom-search-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Delayed Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "The rxjs pipe function can be used to introduce a delay or debounce.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "nui-client-side-delayed-data-source-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\nHere we're combining several components to implement filter panel. For more information please see inline comments.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nui-client-side-filtering-data-source-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "ListService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " helps with selection handling, both for the repeat and the selector.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "nui-client-side-with-selection-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" this.dataSourceService.componentTree = ", "{", " search: ", "{", "...", "}", " ", "}", "; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subclassCode);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_code_example_code_component__WEBPACK_IMPORTED_MODULE_2__["ExampleCodeComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["ExampleWrapperComponent"], _client_side_basic_client_side_basic_example_component__WEBPACK_IMPORTED_MODULE_4__["DataSourceClientSideBasicExampleComponent"], _client_side_custom_search_client_side_custom_search_example_component__WEBPACK_IMPORTED_MODULE_5__["DataSourceClientSideCustomSearchExampleComponent"], _client_side_delayed_client_side_delayed_example_component__WEBPACK_IMPORTED_MODULE_6__["DataSourceClientSideDelayedExampleComponent"], _client_side_filtering_client_side_filtering_example_component__WEBPACK_IMPORTED_MODULE_7__["DataSourceClientSideFilteringExampleComponent"], _client_side_with_selection_client_side_with_selection_example_component__WEBPACK_IMPORTED_MODULE_8__["DataSourceWithSelectionExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "x8jq":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/data-filter/data-filter-test/data-filter-test.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-data-filter-example\",\n    templateUrl: \"./data-filter-test.component.html\",\n})\nexport class DataFilterTestComponent {\n\n}\n");

/***/ }),

/***/ "xPtD":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/common/tree/tree-checkbox-lazy/tree-checkbox-lazy.component.less ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"mixins/expander-base\";\n\n.nui-tree {\n    .expander();\n\n    &__body {\n        &--collapsed {\n            overflow: hidden;\n        }\n    }\n\n    &__leaf {\n        display: flex;\n        align-items: center;\n    }\n\n    &__invisible {\n        display: none;\n    }\n}\n");

/***/ }),

/***/ "xi77":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/common/edge-detection-service/edge-detection-service.example.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EdgeDetectionServiceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeDetectionServiceExampleComponent", function() { return EdgeDetectionServiceExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/set */ "D1y2");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/textbox/textbox-number/textbox-number.component */ "ShSb");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/checkbox/checkbox.component */ "Oh8U");










const _c0 = ["parent"];
const _c1 = ["placementElement"];
function EdgeDetectionServiceExampleComponent_strong_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placement within window");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdgeDetectionServiceExampleComponent_strong_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Placement within specified component");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "label-danger": a0 }; };
const _c3 = function (a0, a1) { return { width: a0, height: a1 }; };
const _c4 = function (a0, a1) { return { height: a0, display: a1 }; };
const _c5 = function (a0, a1) { return { width: a0, display: a1 }; };
class EdgeDetectionServiceExampleComponent {
    constructor(edgeDetectionService) {
        this.edgeDetectionService = edgeDetectionService;
        this.showPlaced = {};
        this.showAligned = {};
        this.deposit = {
            width: 100,
            height: 50,
        };
        this.parentComponent = {
            width: 300,
            height: 150,
        };
        this.addEdgeDefinerClass = false;
        this.canBe = {
            placed: {
                top: false,
                right: false,
                bottom: false,
                left: false,
            },
            aligned: {
                top: false,
                right: false,
                bottom: false,
                left: false,
            },
        };
    }
    ngAfterViewInit() {
        this.update();
    }
    update() {
        setTimeout(() => {
            const parent = this.parentElement.nativeElement;
            const basePointElement = parent.querySelector(".base-point-element");
            if (this.parentComponent.width < 300) {
                this.parentComponent.width = 300;
            }
            if (this.parentComponent.height < 50) {
                this.parentComponent.height = 50;
            }
            if (this.addEdgeDefinerClass) {
                parent.classList.add("nui-edge-definer");
            }
            else {
                parent.classList.remove("nui-edge-definer");
            }
            this.canBe = this.edgeDetectionService
                .canBe(basePointElement, this.toBePlacedElement.nativeElement);
        });
    }
    switchCheckbox() {
        this.addEdgeDefinerClass = !this.addEdgeDefinerClass;
        this.update();
    }
    changeText(path, value) {
        lodash_set__WEBPACK_IMPORTED_MODULE_2___default()(this, path, value);
        this.update();
    }
}
EdgeDetectionServiceExampleComponent.ɵfac = function EdgeDetectionServiceExampleComponent_Factory(t) { return new (t || EdgeDetectionServiceExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["EdgeDetectionService"])); };
EdgeDetectionServiceExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EdgeDetectionServiceExampleComponent, selectors: [["nui-edge-detection-service-example"]], viewQuery: function EdgeDetectionServiceExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.parentElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toBePlacedElement = _t.first);
    } }, decls: 124, vars: 81, consts: [[1, "nui"], ["id", "nui-demo-services-edge-detection"], [1, "row"], [1, "col-md-6"], [2, "margin-bottom", "30px"], ["caption", "Width in pixels", "name", "element-name", "ngDefaultControl", "", 3, "value", "valueChange"], ["caption", "Height in pixels", "name", "element-height", "ngDefaultControl", "", 3, "value", "valueChange"], ["caption", "Width in pixels", "name", "width", "ngDefaultControl", "", 3, "value", "disabled", "valueChange"], ["caption", "Height in pixels", "name", "height", "ngDefaultControl", "", 3, "value", "disabled", "valueChange"], ["nui-button", "", "type", "button", 3, "click"], [1, "col-md-12"], [4, "ngIf"], [1, "results"], [3, "mouseover", "mouseleave"], [1, "label", "label-success", 3, "ngClass"], [1, "label", "label-success", 3, "ngClass", "mouseover", "mouseleave"], ["name", "parent-class", "ngDefaultControl", "", 3, "value", "valueChange"], [1, "parent-component", 3, "ngStyle"], ["parent", ""], [1, "base-point"], ["nui-button", "", "type", "button", 1, "base-point-element"], [1, "deposit", "to-be-placed", "top", 3, "ngStyle"], [1, "arrow", "arrow-up"], [1, "line"], [1, "deposit", "to-be-placed", "left", 3, "ngStyle"], [1, "arrow", "arrow-left"], [1, "deposit", "to-be-placed", "right", 3, "ngStyle"], [1, "arrow", "arrow-right"], [1, "deposit", "to-be-placed", "bottom", 3, "ngStyle"], [1, "arrow", "arrow-down"], [1, "deposit", "to-be-aligned", "top", 3, "ngStyle"], [1, "deposit", "to-be-aligned", "left", 3, "ngStyle"], [1, "deposit", "to-be-aligned", "right", 3, "ngStyle"], [1, "deposit", "to-be-aligned", "bottom", 3, "ngStyle"], [1, "deposit-reference", 3, "ngStyle"], ["placementElement", ""], [2, "display", "inline-block"]], template: function EdgeDetectionServiceExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edge detection Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Set the size of the element to be placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-textbox-number", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EdgeDetectionServiceExampleComponent_Template_nui_textbox_number_valueChange_11_listener($event) { return ctx.deposit.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-textbox-number", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EdgeDetectionServiceExampleComponent_Template_nui_textbox_number_valueChange_13_listener($event) { return ctx.deposit.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Set the size of the component where element is to be placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Minimum width is 300px and minimum height is 50px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-textbox-number", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EdgeDetectionServiceExampleComponent_Template_nui_textbox_number_valueChange_22_listener($event) { return ctx.parentComponent.width = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nui-textbox-number", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EdgeDetectionServiceExampleComponent_Template_nui_textbox_number_valueChange_24_listener($event) { return ctx.parentComponent.height = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdgeDetectionServiceExampleComponent_Template_button_click_25_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Calculate place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hover the properties for understanding that exactly what place-availability does it express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EdgeDetectionServiceExampleComponent_strong_35_Template, 2, 0, "strong", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EdgeDetectionServiceExampleComponent_strong_36_Template, 2, 0, "strong", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Can be placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_42_listener() { return ctx.showPlaced.top = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_42_listener() { return ctx.showPlaced.top = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Top: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_47_listener() { return ctx.showPlaced.right = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_47_listener() { return ctx.showPlaced.right = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Right: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_52_listener() { return ctx.showPlaced.bottom = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_52_listener() { return ctx.showPlaced.bottom = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Bottom: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_57_listener() { return ctx.showPlaced.left = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_57_listener() { return ctx.showPlaced.left = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Left: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_span_mouseover_60_listener() { return ctx.showPlaced.left = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_span_mouseleave_60_listener() { return ctx.showPlaced.left = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Can be aligned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_66_listener() { return ctx.showAligned.top = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_66_listener() { return ctx.showAligned.top = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Top: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_71_listener() { return ctx.showAligned.right = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_71_listener() { return ctx.showAligned.right = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Right: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_76_listener() { return ctx.showAligned.bottom = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_76_listener() { return ctx.showAligned.bottom = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Bottom: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function EdgeDetectionServiceExampleComponent_Template_li_mouseover_81_listener() { return ctx.showAligned.left = true; })("mouseleave", function EdgeDetectionServiceExampleComponent_Template_li_mouseleave_81_listener() { return ctx.showAligned.left = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Left: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "By default edge definer element(container) is window");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nui-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function EdgeDetectionServiceExampleComponent_Template_nui_checkbox_valueChange_89_listener() { return ctx.switchCheckbox(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Add nui-edge-definer class to parent component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Basepoint of the place investigation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.deposit.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.deposit.height);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.parentComponent.width)("disabled", !ctx.addEdgeDefinerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.parentComponent.height)("disabled", !ctx.addEdgeDefinerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addEdgeDefinerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addEdgeDefinerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c2, !(ctx.canBe == null ? null : ctx.canBe.placed.top)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.placed.top, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c2, !(ctx.canBe == null ? null : ctx.canBe.placed.right)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.placed.right, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c2, !(ctx.canBe == null ? null : ctx.canBe.placed.bottom)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.placed.bottom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c2, !(ctx.canBe == null ? null : ctx.canBe.placed.left)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.placed.left, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c2, !(ctx.canBe == null ? null : ctx.canBe.aligned.top)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.aligned.top, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c2, !(ctx.canBe == null ? null : ctx.canBe.aligned.right)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.aligned.right, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c2, !(ctx.canBe == null ? null : ctx.canBe.aligned.bottom)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.aligned.bottom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](49, _c2, !(ctx.canBe == null ? null : ctx.canBe.aligned.left)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canBe == null ? null : ctx.canBe.aligned.left, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.addEdgeDefinerClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](51, _c3, ctx.parentComponent.width + "px", ctx.parentComponent.height + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](54, _c4, ctx.deposit.height + "px", ctx.showPlaced.top ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](57, _c5, ctx.deposit.width + "px", ctx.showPlaced.left ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](60, _c5, ctx.deposit.width + "px", ctx.showPlaced.right ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](63, _c4, ctx.deposit.height + "px", ctx.showPlaced.bottom ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](66, _c4, ctx.deposit.height + "px", ctx.showAligned.top ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](69, _c5, ctx.deposit.width + "px", ctx.showAligned.left ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](72, _c5, ctx.deposit.width + "px", ctx.showAligned.right ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](75, _c4, ctx.deposit.height + "px", ctx.showAligned.bottom ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](78, _c3, ctx.deposit.width + "px", ctx.deposit.height + "px"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _src_lib_textbox_textbox_number_textbox_number_component__WEBPACK_IMPORTED_MODULE_4__["TextboxNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _src_lib_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n  display: flex;\n  display: -ms-flexbox;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  display: flex;\n  display: -ms-flexbox;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit-reference[_ngcontent-%COMP%] {\n  display: none;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.top[_ngcontent-%COMP%], #nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.bottom[_ngcontent-%COMP%] {\n  justify-content: center;\n  border-top: 1px solid #FF0000;\n  border-bottom: 1px solid #FF0000;\n  width: 100%;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.left[_ngcontent-%COMP%], #nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.right[_ngcontent-%COMP%] {\n  align-items: center;\n  border-left: 1px solid #FF0000;\n  border-right: 1px solid #FF0000;\n  height: 100%;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .arrow-up[_ngcontent-%COMP%] {\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 25px solid #FF0000;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%] {\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-top: 25px solid #FF0000;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .arrow-left[_ngcontent-%COMP%] {\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-right: 25px solid #FF0000;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .arrow-right[_ngcontent-%COMP%] {\n  border-top: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-left: 25px solid #FF0000;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.top[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], #nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.bottom[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  border-right: #FF0000 solid 2px;\n  position: absolute;\n  left: 1px;\n  top: 0px;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.left[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], #nui-demo-services-edge-detection[_ngcontent-%COMP%]   .deposit.right[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  border-bottom: #FF0000 solid 2px;\n  position: absolute;\n  top: 1px;\n  left: 0px;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .base-point[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  background-color: #fff;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .parent-component[_ngcontent-%COMP%] {\n  display: table-cell;\n  min-width: 300px;\n  min-height: 50px;\n  vertical-align: middle;\n  text-align: center;\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .nui-edge-definer[_ngcontent-%COMP%] {\n  background-color: rgba(1, 1, 1, 0.2);\n}\n#nui-demo-services-edge-detection[_ngcontent-%COMP%]   .to-be-placed.left[_ngcontent-%COMP%], #nui-demo-services-edge-detection[_ngcontent-%COMP%]   .to-be-placed.right[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.to-be-placed.top[_ngcontent-%COMP%] {\n  bottom: 100%;\n}\n.to-be-placed.right[_ngcontent-%COMP%] {\n  left: 100%;\n  justify-content: flex-end;\n}\n.to-be-placed.bottom[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.to-be-placed.left[_ngcontent-%COMP%] {\n  right: 100%;\n}\n.to-be-aligned.top[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  align-items: flex-end;\n}\n.to-be-aligned.right[_ngcontent-%COMP%] {\n  top: 0px;\n  right: 0px;\n  margin-bottom: -8px;\n}\n.to-be-aligned.bottom[_ngcontent-%COMP%] {\n  bottom: 0px;\n}\n.to-be-aligned.left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZ2UtZGV0ZWN0aW9uLXNlcnZpY2UuZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7QUFERjtBQUlBOztFQUVFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFGRjtBQUtBOztFQUVFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFIRjtBQU1BO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFKRjtBQU9BO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBTEY7QUFRQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtBQU5GO0FBU0E7RUFDRSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7QUFQRjtBQVVBO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0FBUkY7QUFXQTs7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQVRGO0FBWUE7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFWRjtBQWFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBWEY7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFaRjtBQWVBO0VBQ0Usb0NBQUE7QUFiRjtBQWdCQTs7RUFFRSxRQUFBO0FBZEY7QUFpQkE7RUFDRSxZQUFBO0FBZkY7QUFrQkE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFoQkY7QUFtQkE7RUFDRSxxQkFBQTtBQWpCRjtBQW9CQTtFQUNFLFdBQUE7QUFsQkY7QUFxQkE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBbkJGO0FBc0JBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQXBCRjtBQXVCQTtFQUNFLFdBQUE7QUFyQkY7QUF3QkE7RUFDRSx5QkFBQTtFQUNBLFFBQUE7QUF0QkYiLCJmaWxlIjoiZWRnZS1kZXRlY3Rpb24tc2VydmljZS5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC5yZXN1bHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG59XG5cbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAuZGVwb3NpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xufVxuXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLmRlcG9zaXQtcmVmZXJlbmNlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC5kZXBvc2l0LnRvcCxcbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAuZGVwb3NpdC5ib3R0b20ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRjAwMDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRkYwMDAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC5kZXBvc2l0LmxlZnQsXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLmRlcG9zaXQucmlnaHQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGRjAwMDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGRjAwMDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC5kZXBvc2l0IC5hcnJvdyB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xufVxuXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLmFycm93LXVwIHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCAjRkYwMDAwO1xufVxuXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLmFycm93LWRvd24ge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAyNXB4IHNvbGlkICNGRjAwMDA7XG59XG5cbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAuYXJyb3ctbGVmdCB7XG4gIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCAjRkYwMDAwO1xufVxuXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLmFycm93LXJpZ2h0IHtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDI1cHggc29saWQgI0ZGMDAwMDtcbn1cblxuI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC5kZXBvc2l0LnRvcCAubGluZSxcbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAuZGVwb3NpdC5ib3R0b20gLmxpbmUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogI0ZGMDAwMCBzb2xpZCAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDBweDtcbn1cblxuI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC5kZXBvc2l0LmxlZnQgLmxpbmUsXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLmRlcG9zaXQucmlnaHQgLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlci1ib3R0b206ICNGRjAwMDAgc29saWQgMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAuYmFzZS1wb2ludCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jbnVpLWRlbW8tc2VydmljZXMtZWRnZS1kZXRlY3Rpb24gLnBhcmVudC1jb21wb25lbnQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAubnVpLWVkZ2UtZGVmaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC4yKTtcbn1cblxuI251aS1kZW1vLXNlcnZpY2VzLWVkZ2UtZGV0ZWN0aW9uIC50by1iZS1wbGFjZWQubGVmdCxcbiNudWktZGVtby1zZXJ2aWNlcy1lZGdlLWRldGVjdGlvbiAudG8tYmUtcGxhY2VkLnJpZ2h0IHtcbiAgdG9wOiAwcHg7XG59XG5cbi50by1iZS1wbGFjZWQudG9wIHtcbiAgYm90dG9tOiAxMDAlO1xufVxuXG4udG8tYmUtcGxhY2VkLnJpZ2h0IHtcbiAgbGVmdDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRvLWJlLXBsYWNlZC5ib3R0b20ge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi50by1iZS1wbGFjZWQubGVmdCB7XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4udG8tYmUtYWxpZ25lZC50b3Age1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi50by1iZS1hbGlnbmVkLnJpZ2h0IHtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi50by1iZS1hbGlnbmVkLmJvdHRvbSB7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4udG8tYmUtYWxpZ25lZC5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgdG9wOiAwcHg7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=demo-common-common-module-es2015.js.map