(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-chips-chips-module"],{

/***/ "/27H":
/*!********************************************************!*\
  !*** ./demo/src/components/demo/chips/chips.module.ts ***!
  \********************************************************/
/*! exports provided: ChipsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsModule", function() { return ChipsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "Ucvp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ChipsDocsExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "overflow",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ChipsOverflowExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].beta,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "chips-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ChipsVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "custom-css",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["ChipsCustomCssExampleComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class ChipsModule {
}
ChipsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ChipsModule });
ChipsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ChipsModule_Factory(t) { return new (t || ChipsModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("0WDX"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiChipsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChipsModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["AutohideChipsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["BasicChipsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ChipsDocsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ChipsVisualTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["GroupedChipsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["VerticalFlatChipsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["VerticalGroupedChipsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ChipsOverflowExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["ChipsCustomCssExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiChipsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiPopoverModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiIconModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "0WDX":
/*!********************************************************************************************************!*\
  !*** ./demo/src/components/demo/chips sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./autohide-chips/autohide-chips.example.component.html": "iXvk",
	"./autohide-chips/autohide-chips.example.component.ts": "wh30",
	"./basic-chips/basic-chips.example.component.html": "COdu",
	"./basic-chips/basic-chips.example.component.ts": "Dxpj",
	"./chips-custom-css/chips-custom-css.example.component.html": "XO6u",
	"./chips-custom-css/chips-custom-css.example.component.less": "dvd8",
	"./chips-custom-css/chips-custom-css.example.component.ts": "csBe",
	"./chips-docs/chips-docs.example.component.html": "Wj+X",
	"./chips-docs/chips-docs.example.component.ts": "As8a",
	"./chips-overflow/chips-overflow.example.component.html": "JXvR",
	"./chips-overflow/chips-overflow.example.component.ts": "zt6Z",
	"./chips-visual-test/chips-visual-test.component.html": "zHwo",
	"./chips-visual-test/chips-visual-test.component.ts": "AfYg",
	"./chips.module.ts": "H1fG",
	"./grouped-chips/grouped-chips.example.component.html": "m7Bw",
	"./grouped-chips/grouped-chips.example.component.ts": "UaJ5",
	"./index.ts": "krVf",
	"./vertical-flat-chips/vertical-flat-chips.example.component.html": "oBAJ",
	"./vertical-flat-chips/vertical-flat-chips.example.component.ts": "QW4O",
	"./vertical-grouped-chips/vertical-grouped-chips.example.component.html": "hjRX",
	"./vertical-grouped-chips/vertical-grouped-chips.example.component.ts": "3TjH"
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
webpackContext.id = "0WDX";

/***/ }),

/***/ "3TjH":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/vertical-grouped-chips/vertical-grouped-chips.example.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IChipsGroup, IChipsItem, IChipsItemsSource, IToastService, ToastService } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\nimport _pull from \"lodash/pull\";\n\nconst groupedItems: IChipsGroup[] = [\n    {\n        id: \"statusGroupId\", label: \"Status\", items: [\n        {id: \"statusGroupItem1\", label: \"Down\"},\n        {id: \"statusGroupItem2\", label: \"Critical\"},\n        {id: \"statusGroupItem3\", label: \"Warning\"},\n        {id: \"statusGroupItem4\", label: \"Unknown\"},\n        {id: \"statusGroupItem5\", label: \"Ok\"}],\n    },\n    {\n        id: \"vendorGroupId\", label: \"Vendor\", items: [\n        {id: \"vendorGroupItem1\", label: \"Cisco\"},\n        {id: \"vendorGroupItem2\", label: \"Hewlett Packard\"},\n        {id: \"vendorGroupItem3\", label: \"Uniper\"}],\n    }];\n\n@Component({\n    selector: \"nui-vertical-grouped-chips-example\",\n    templateUrl: \"vertical-grouped-chips.example.component.html\",\n})\n\nexport class VerticalGroupedChipsExampleComponent {\n    public verticalGroupedItemsSource: IChipsItemsSource = {groupedItems: _cloneDeep(groupedItems)};\n\n    public onClear(event: { item: IChipsItem, group?: IChipsGroup }) {\n        console.log(`'onClear' event fired. $event.item.id=${event.item.id} $event.group.id=${event.group?.id}`);\n        _pull(event.group?.items || [], event.item);\n    }\n\n    public onClearAll() {\n        this.verticalGroupedItemsSource.groupedItems = [];\n    }\n}\n");

/***/ }),

/***/ "4kcf":
/*!*****************************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/vertical-flat-chips/vertical-flat-chips.example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VerticalFlatChipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalFlatChipsExampleComponent", function() { return VerticalFlatChipsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");




const verticalFlatItems = [
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId4", label: "Unknown" },
    { id: "flatId5", label: "Ok" },
];
class VerticalFlatChipsExampleComponent {
    constructor() {
        this.verticalFlatItemsSource = { flatItems: verticalFlatItems };
    }
    onClear(event) {
        console.log(`'onClear' event fired. $event.item.id=${event.item.id}`);
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(this.verticalFlatItemsSource.flatItems || [], event.item);
    }
    onClearAll() {
        this.verticalFlatItemsSource.flatItems = [];
    }
}
VerticalFlatChipsExampleComponent.ɵfac = function VerticalFlatChipsExampleComponent_Factory(t) { return new (t || VerticalFlatChipsExampleComponent)(); };
VerticalFlatChipsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerticalFlatChipsExampleComponent, selectors: [["nui-vertical-flat-chips-example"]], decls: 2, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5168008278809915722$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_VERTICAL_FLAT_CHIPS_VERTICAL_FLAT_CHIPS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Statuses");
        i18n_0 = MSG_EXTERNAL_5168008278809915722$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_VERTICAL_FLAT_CHIPS_VERTICAL_FLAT_CHIPS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟8a35b7aecbc09fd6b111ade416a7ed11371d95bd␟5168008278809915722:Statuses`;
    } return [[2, "max-width", "300px"], ["id", "nui-demo-chips-flat-vertical", "title", i18n_0, "orientation", "vertical", 3, "itemsSource", "chipRemoved", "removeAll"]]; }, template: function VerticalFlatChipsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nui-chips", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function VerticalFlatChipsExampleComponent_Template_nui_chips_chipRemoved_1_listener($event) { return ctx.onClear($event); })("removeAll", function VerticalFlatChipsExampleComponent_Template_nui_chips_removeAll_1_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.verticalFlatItemsSource);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__["ChipsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "6MI3":
/*!***********************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/chips-custom-css/chips-custom-css.example.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChipsCustomCssExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsCustomCssExampleComponent", function() { return ChipsCustomCssExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");
/* harmony import */ var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chip/chip.component */ "PEYr");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");







function ChipsCustomCssExampleComponent_nui_chip_3_nui_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-icon", 6);
} if (rf & 2) {
    const chip_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", chip_r2.icon);
} }
function ChipsCustomCssExampleComponent_nui_chip_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-chip", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChipsCustomCssExampleComponent_nui_chip_3_nui_icon_1_Template, 1, 1, "nui-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chip_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", chip_r2)("customClass", chip_r2.customClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", chip_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", chip_r2.label, " ");
} }
function ChipsCustomCssExampleComponent_nui_chip_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nui-chip", 4);
} if (rf & 2) {
    const chip_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", chip_r5)("customClass", chip_r5.customClass);
} }
class ChipsCustomCssExampleComponent {
    constructor() {
        this.standaloneChips = [
            {
                id: "standaloneChip1",
                label: "Custom Critical",
                customClass: ["standalone-chip-custom-styles", "custom-chip-critical"],
                icon: "severity_critical",
            },
            {
                id: "standaloneChip2",
                label: "Custom Warning",
                customClass: ["standalone-chip-custom-styles", "custom-chip-warning"],
                icon: "severity_warning",
            },
            {
                id: "standaloneChip3",
                label: "Custom Info",
                customClass: ["standalone-chip-custom-styles", "custom-chip-info"],
                icon: "severity_info",
            },
            {
                id: "statusGroupItem5",
                label: "Disabled",
                customClass: ["standalone-chip-custom-styles", "custom-chip-disabled"],
                icon: "severity_unknown",
            },
        ];
        this.nuiChipsSet = {
            flatItems: [
                {
                    id: "flatId2",
                    label: "Critical",
                    customClass: "nui-tag-critical nui-tag-with-hover-styles nui-tag-text-light",
                },
                {
                    id: "flatId3",
                    label: "Warning",
                    customClass: "nui-tag-warning nui-tag-with-hover-styles",
                },
                {
                    id: "flatId4",
                    label: "Info",
                    customClass: "nui-tag-info nui-tag-with-hover-styles nui-tag-text-light",
                },
                {
                    id: "flatId5",
                    label: "Ok",
                    customClass: "nui-tag-ok nui-tag-with-hover-styles nui-tag-text-light",
                },
            ],
            groupedItems: [
                {
                    id: "statusGroupId",
                    label: "Grouped Statuses",
                    items: [
                        {
                            id: "statusGroupItem2",
                            label: "Critical",
                            customClass: "nui-tag-critical nui-tag-with-hover-styles nui-tag-text-light",
                        },
                        {
                            id: "statusGroupItem3",
                            label: "Warning",
                            customClass: "nui-tag-warning nui-tag-with-hover-styles",
                        },
                        {
                            id: "statusGroupItem4",
                            label: "Unknown",
                        },
                        {
                            id: "statusGroupItem5",
                            label: "Ok",
                            customClass: "nui-tag-ok nui-tag-with-hover-styles nui-tag-text-light",
                        },
                    ],
                },
            ],
        };
        this.widthChips = [
            {
                id: "widthChip1",
                label: "Chip with default width and very very very very very very very long title ",
            },
            {
                id: "widthChip2",
                label: "Chip with unset width and a very very very very very very very long title ",
                customClass: "unlimited-width",
            },
        ];
    }
    onClear(event) {
        var _a, _b;
        const source = event.group
            ? (_b = (_a = this.nuiChipsSet.groupedItems) === null || _a === void 0 ? void 0 : _a.find((group) => { var _a; return group.id === ((_a = event.group) === null || _a === void 0 ? void 0 : _a.id); })) === null || _b === void 0 ? void 0 : _b.items : this.nuiChipsSet.flatItems;
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(source || [], event.item);
    }
    onClearAll() {
        this.nuiChipsSet.flatItems = [];
        this.nuiChipsSet.groupedItems = [];
    }
}
ChipsCustomCssExampleComponent.ɵfac = function ChipsCustomCssExampleComponent_Factory(t) { return new (t || ChipsCustomCssExampleComponent)(); };
ChipsCustomCssExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChipsCustomCssExampleComponent, selectors: [["nui-chips-custom-css-example"]], decls: 11, vars: 3, consts: [["id", "standalone-chips", 1, "mb-5"], [3, "item", "customClass", 4, "ngFor", "ngForOf"], ["id", "nui-demo-chips-custom-css", "title", "Statuses", "orientation", "vertical", "customClass", "nui-chips-custom-styles", 3, "itemsSource", "chipRemoved", "removeAll"], ["id", "chips-width-example", 1, "mb-5"], [3, "item", "customClass"], ["iconSize", "small", "class", "mr-1", 3, "icon", 4, "ngIf"], ["iconSize", "small", 1, "mr-1", 3, "icon"]], template: function ChipsCustomCssExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Standalone chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChipsCustomCssExampleComponent_nui_chip_3_Template, 3, 4, "nui-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "nui-chips Group set");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nui-chips", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsCustomCssExampleComponent_Template_nui_chips_chipRemoved_6_listener($event) { return ctx.onClear($event); })("removeAll", function ChipsCustomCssExampleComponent_Template_nui_chips_removeAll_6_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Unset Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChipsCustomCssExampleComponent_nui_chip_10_Template, 1, 2, "nui-chip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.standaloneChips);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.nuiChipsSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.widthChips);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_4__["ChipsComponent"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_5__["ChipComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]], styles: ["#standalone-chips .standalone-chip-custom-styles {\n  border: 1px solid;\n  margin-right: 2px;\n}\n#standalone-chips .custom-chip-critical {\n  border-color: var(--nui-color-semantic-critical,#dd2c00);\n  background-color: var(--nui-color-semantic-critical-bg,#fceae6);\n}\n#standalone-chips .custom-chip-critical:hover {\n  border-color: var(--nui-color-semantic-critical-hover,#c72800);\n  background-color: var(--nui-color-semantic-critical-bg-hover,#f8d5cc);\n}\n#standalone-chips .custom-chip-warning {\n  border-color: var(--nui-color-semantic-warning,#fec405);\n  background-color: var(--nui-color-semantic-warning-bg,#fff9e6);\n}\n#standalone-chips .custom-chip-warning:hover {\n  border-color: var(--nui-color-semantic-warning-hover,#e5b005);\n  background-color: var(--nui-color-semantic-warning-bg-hover,#fff3cd);\n}\n#standalone-chips .custom-chip-info {\n  border-color: var(--nui-color-semantic-info,#1c8eb1);\n  background-color: var(--nui-color-semantic-info-bg,#e8f4f7);\n}\n#standalone-chips .custom-chip-info:hover {\n  border-color: var(--nui-color-semantic-info-hover,#19809f);\n  background-color: var(--nui-color-semantic-info-bg-hover,#d2e8ef);\n}\n#standalone-chips .custom-chip-disabled {\n  cursor: not-allowed;\n  border-color: var(--nui-color-disabled-secondary,#e8e8e8);\n  background-color: var(--nui-color-disabled-secondary,#e8e8e8);\n  color: var(--nui-color-text-disabled,rgba(17, 17, 17, 0.3));\n}\n#standalone-chips .custom-chip-disabled .nui-chip__value-remove svg * {\n  fill: var(--nui-color-icon-disabled,rgba(17, 17, 17, 0.3));\n}\n#standalone-chips .custom-chip-disabled > * > * {\n  cursor: not-allowed;\n}\n#nui-demo-chips-custom-css .nui-chips-custom-styles {\n  max-width: 400px;\n  padding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaXBzLWN1c3RvbS1jc3MuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVRLGlCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQUNBO0VDQ0ksd0RBQUE7RUFBQSwrREFBQTtBREVKO0FBTVE7RUNSSiw4REFBQTtFQUFBLHFFQUFBO0FETUo7QUFQQTtFQ0NJLHVEQUFBO0VBQUEsOERBQUE7QURVSjtBQU9RO0VDakJKLDZEQUFBO0VBQUEsb0VBQUE7QURjSjtBQWZBO0VDQ0ksb0RBQUE7RUFBQSwyREFBQTtBRGtCSjtBQVFRO0VDMUJKLDBEQUFBO0VBQUEsaUVBQUE7QURzQko7QUF2QkE7RUFrQ1EsbUJBQUE7RUNqQ0oseURBQUE7RUFBQSw2REFBQTtFQUFBLDJEQUFBO0FENEJKO0FBN0JBO0VDQ0ksMERBQUE7QUQrQko7QUFZUTtFQUNJLG1CQUFBO0FBVlo7QUFnQkE7RUFHUSxnQkFBQTtFQUNBLGFBQUE7QUFoQlIiLCJmaWxlIjoiY2hpcHMtY3VzdG9tLWNzcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbi8vIGN1c3RvbSBzdHlsZXMgZm9yIGVhY2ggb2Ygc3RhbmRhbG9uZSBgbnVpLWNoaXBgXG4jc3RhbmRhbG9uZS1jaGlwcyB7XG4gICAgLnN0YW5kYWxvbmUtY2hpcC1jdXN0b20tc3R5bGVzIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQG51aS1zcGFjZS14eHM7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jaGlwLWNyaXRpY2FsIHtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsKTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1zZW1hbnRpYy1jcml0aWNhbC1iZyk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLXNlbWFudGljLWNyaXRpY2FsLWhvdmVyKTtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwtYmctaG92ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jaGlwLXdhcm5pbmcge1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3Itc2VtYW50aWMtd2FybmluZyk7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3Itc2VtYW50aWMtd2FybmluZy1iZyk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLXNlbWFudGljLXdhcm5pbmctaG92ZXIpO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1zZW1hbnRpYy13YXJuaW5nLWJnLWhvdmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdXN0b20tY2hpcC1pbmZvIHtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLXNlbWFudGljLWluZm8pO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLXNlbWFudGljLWluZm8tYmcpO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1zZW1hbnRpYy1pbmZvLWhvdmVyKTtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3Itc2VtYW50aWMtaW5mby1iZy1ob3Zlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3VzdG9tLWNoaXAtZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3ItZGlzYWJsZWQtc2Vjb25kYXJ5KTtcbiAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1kaXNhYmxlZC1zZWNvbmRhcnkpO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LWRpc2FibGVkKTtcblxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGNvbG9yIG9mIFwiWFwiIGJ1dHRvblxuICAgICAgICAubnVpLWNoaXBfX3ZhbHVlLXJlbW92ZSBzdmcgKiB7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoZmlsbCwgbnVpLWNvbG9yLWljb24tZGlzYWJsZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiA+ICogPiAqIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGN1c3RvbSBzdHlsZXMgZm9yIGBudWktY2hpcHNgXG4jbnVpLWRlbW8tY2hpcHMtY3VzdG9tLWNzcyB7XG4gICAgLy8gY3VzdG9tIHN0eWxlcyBmb3IgYG51aS1jaGlwc2BcbiAgICAubnVpLWNoaXBzLWN1c3RvbS1zdHlsZXMge1xuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLW1kO1xuICAgIH1cbn1cblxuIiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "8NSq":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/autohide-chips/autohide-chips.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AutohideChipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutohideChipsExampleComponent", function() { return AutohideChipsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");




const horizontalFlatItems = [
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId4", label: "Unknown" },
    { id: "flatId5", label: "Ok" },
];
class AutohideChipsExampleComponent {
    constructor() {
        this.horizontalFlatItemsSource = { flatItems: horizontalFlatItems };
    }
    onClear(event) {
        console.log(`'onClear' event fired. $event.item.id=${event.item.id}`);
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(this.horizontalFlatItemsSource.flatItems || [], event.item);
    }
    onClearAll() {
        this.horizontalFlatItemsSource.flatItems = [];
    }
}
AutohideChipsExampleComponent.ɵfac = function AutohideChipsExampleComponent_Factory(t) { return new (t || AutohideChipsExampleComponent)(); };
AutohideChipsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AutohideChipsExampleComponent, selectors: [["nui-autohide-chips-example"]], decls: 1, vars: 2, consts: [["id", "nui-demo-chips-autohide", 3, "autoHide", "itemsSource", "chipRemoved", "removeAll"]], template: function AutohideChipsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-chips", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function AutohideChipsExampleComponent_Template_nui_chips_chipRemoved_0_listener($event) { return ctx.onClear($event); })("removeAll", function AutohideChipsExampleComponent_Template_nui_chips_removeAll_0_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoHide", false)("itemsSource", ctx.horizontalFlatItemsSource);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__["ChipsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "AfYg":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-visual-test/chips-visual-test.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { IChipsGroup, IChipsItem, IChipsItemsSource } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\nimport _pull from \"lodash/pull\";\n\nconst horizontalFlatItems: IChipsItem[] = [\n            {id: \"flatId1\", label: \"Down\"},\n            {id: \"flatId2\", label: \"Critical\"},\n            {id: \"flatId3\", label: \"Warning\"},\n            {id: \"flatId4\", label: \"Unknown\"},\n            {id: \"flatId5\", label: \"Ok\"},\n];\n\nconst groupedItems: IChipsGroup[] = [\n    {\n        id: \"statusGroupId\", label: \"Status\", items: [\n            {id: \"statusGroupItem1\", label: \"Down\"},\n            {id: \"statusGroupItem2\", label: \"Critical\"},\n            {id: \"statusGroupItem3\", label: \"Warning\"},\n            {id: \"statusGroupItem4\", label: \"Unknown\"},\n            {id: \"statusGroupItem5\", label: \"Ok\"}],\n    },\n    {\n        id: \"vendorGroupId\", label: \"Vendor\", items: [\n            {id: \"vendorGroupItem1\", label: \"Cisco\"},\n            {id: \"vendorGroupItem2\", label: \"Hewlett Packard\"},\n            {id: \"vendorGroupItem3\", label: \"Uniper\"}],\n    },\n];\n\nconst verticalFlatItemsVisual: IChipsItem[] = [\n            {id: \"flatId1\", label: \"Down\"},\n            {id: \"flatId2\", label: \"Critical\"},\n            {id: \"flatId3\", label: \"Warning\"},\n            {id: \"flatId4\", label: \"Unknown\"},\n            {id: \"flatId5\", label: \"Ok\"},\n];\n\n@Component({\n    selector: \"nui-chips-visual-test\",\n    templateUrl: \"./chips-visual-test.component.html\",\n})\nexport class ChipsVisualTestComponent {\n\n    public horizontalFlatItemsSource: IChipsItemsSource = {flatItems: horizontalFlatItems};\n    public horizontalGroupedItemsSource = {groupedItems: _cloneDeep(groupedItems)};\n    public verticalFlatItemsSource: IChipsItemsSource = {flatItems: verticalFlatItemsVisual};\n    public verticalGroupedItemsSource: IChipsItemsSource = {groupedItems: _cloneDeep(groupedItems)};\n\n    public onClear(event: { item: IChipsItem }) {\n        _pull(this.horizontalFlatItemsSource.flatItems || [], event.item);\n    }\n\n    public onClearGroup(event: { item: IChipsItem, group?: IChipsGroup }) {\n        _pull(event.group?.items || [], event.item);\n    }\n\n    public onClearAll() {\n        this.verticalGroupedItemsSource.groupedItems = [];\n    }\n}\n");

/***/ }),

/***/ "As8a":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-docs/chips-docs.example.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-chips-docs-example\",\n    templateUrl: \"./chips-docs.example.component.html\",\n})\nexport class ChipsDocsExampleComponent { }\n");

/***/ }),

/***/ "COdu":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/basic-chips/basic-chips.example.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chips id=\"nui-demo-chips-flat-horizontal\"\n           [itemsSource]=\"horizontalFlatItemsSource\"\n           (chipRemoved)=\"onClear($event)\"\n           (removeAll)=\"onClearAll()\">\n</nui-chips>\n");

/***/ }),

/***/ "Dxpj":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/basic-chips/basic-chips.example.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IChipsItem, IChipsItemsSource, IToastService, ToastService } from \"@nova-ui/bits\";\nimport _pull from \"lodash/pull\";\n\nconst horizontalFlatItems: IChipsItem[] = [\n    {id: \"flatId1\", label: \"Down\"},\n    {id: \"flatId2\", label: \"Critical\"},\n    {id: \"flatId3\", label: \"Warning\"},\n    {id: \"flatId4\", label: \"Unknown\"},\n    {id: \"flatId5\", label: \"Ok\"},\n];\n\n@Component({\n    selector: \"nui-basic-chips-example\",\n    templateUrl: \"./basic-chips.example.component.html\",\n})\n\nexport class BasicChipsExampleComponent {\n    public horizontalFlatItemsSource: IChipsItemsSource = { flatItems: horizontalFlatItems};\n\n    public onClear(event: { item: IChipsItem }) {\n        console.log(`'onClear' event fired. $event.item.id=${event.item.id}`);\n        _pull(this.horizontalFlatItemsSource.flatItems || [], event.item);\n    }\n\n    public onClearAll() {\n        this.horizontalFlatItemsSource.flatItems = [];\n    }\n\n}\n");

/***/ }),

/***/ "H1fG":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiChipsModule,\n    NuiDocsModule,\n    NuiIconModule,\n    NuiPopoverModule,\n    SrlcStage\n} from \"@nova-ui/bits\";\n\nimport {\n    AutohideChipsExampleComponent,\n    BasicChipsExampleComponent,\n    ChipsCustomCssExampleComponent,\n    ChipsDocsExampleComponent,\n    ChipsOverflowExampleComponent,\n    ChipsVisualTestComponent,\n    GroupedChipsExampleComponent,\n    VerticalFlatChipsExampleComponent,\n    VerticalGroupedChipsExampleComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: ChipsDocsExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"overflow\",\n        component: ChipsOverflowExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.beta,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"chips-visual-test\",\n        component: ChipsVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"custom-css\",\n        component: ChipsCustomCssExampleComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiChipsModule,\n        NuiPopoverModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n        NuiIconModule,\n    ],\n    declarations: [\n        AutohideChipsExampleComponent,\n        BasicChipsExampleComponent,\n        ChipsDocsExampleComponent,\n        ChipsVisualTestComponent,\n        GroupedChipsExampleComponent,\n        VerticalFlatChipsExampleComponent,\n        VerticalGroupedChipsExampleComponent,\n        ChipsOverflowExampleComponent,\n        ChipsCustomCssExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class ChipsModule {\n}\n");

/***/ }),

/***/ "IN9a":
/*!*******************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/chips-overflow/chips-overflow.example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChipsOverflowExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsOverflowExampleComponent", function() { return ChipsOverflowExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/popover/popover.component */ "N1kL");
/* harmony import */ var _src_lib_chips_chips_overflow_chips_overflow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips-overflow/chips-overflow.component */ "M8aa");







function ChipsOverflowExampleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nui-popover", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popoverOverlayPosition", ctx_r0.overflowPopoverPosition)("template", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("+", ctx_r0.overflowCounter, "");
} }
function ChipsOverflowExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-chips-overflow", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsOverflowExampleComponent_ng_template_2_Template_nui_chips_overflow_chipRemoved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onClear($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("overflowSource", ctx_r2.overflowSource)("itemsSource", ctx_r2.horizontalGroupedItemsSource);
} }
const flatItems = [
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
];
const groupedItems = [
    {
        id: "statusGroupId", label: "Status", items: [
            { id: "statusGroupItem1", label: "Down" },
            { id: "statusGroupItem2", label: "Critical" },
            { id: "statusGroupItem3", label: "Warning" },
            { id: "statusGroupItem4", label: "Unknown" },
            { id: "statusGroupItem5", label: "Ok" }
        ],
    },
    {
        id: "vendorGroupId", label: "Vendor", items: [
            { id: "vendorGroupItem1", label: "Cisco" },
            { id: "vendorGroupItem2", label: "Hewlett Packard" },
            { id: "vendorGroupItem3", label: "Uniper" }
        ],
    },
    {
        id: "statusGroupId", label: "Status", items: [
            { id: "statusGroupItem1", label: "Down" },
            { id: "statusGroupItem2", label: "Critical" },
            { id: "statusGroupItem3", label: "Warning" },
            { id: "statusGroupItem4", label: "Unknown" },
            { id: "statusGroupItem5", label: "Ok" }
        ],
    },
    {
        id: "vendorGroupId", label: "Vendor", items: [
            { id: "vendorGroupItem1", label: "Cisco" },
            { id: "vendorGroupItem2", label: "Hewlett Packard" },
            { id: "vendorGroupItem3", label: "Uniper" }
        ],
    },
];
class ChipsOverflowExampleComponent {
    constructor() {
        this.horizontalGroupedItemsSource = { flatItems, groupedItems };
        this.overflowLinesNumber = 2;
        this.overflowPopoverPosition = [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["PopoverOverlayPosition"].bottomLeft, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["PopoverOverlayPosition"].topLeft];
    }
    onClear(event) {
        var _a;
        console.log(`'onClear' event fired. $event.item.id=${event.item.id} $event.group.id=${(_a = event.group) === null || _a === void 0 ? void 0 : _a.id}`);
        if (event.group) {
            lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(event.group.items || [], event.item);
        }
        else {
            lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(this.horizontalGroupedItemsSource.flatItems || [], event.item);
        }
    }
    onClearAll(e) {
        var _a;
        this.horizontalGroupedItemsSource.groupedItems = [];
        this.horizontalGroupedItemsSource.flatItems = [];
        (_a = this.popover) === null || _a === void 0 ? void 0 : _a.onClick(e);
    }
    onChipsOverflow(source) {
        var _a, _b, _c;
        this.overflowSource = source;
        const reducer = (accumulator, currentValue) => accumulator + currentValue.items.length;
        this.overflowCounter = (((_a = this.overflowSource.flatItems) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = this.overflowSource.groupedItems) === null || _b === void 0 ? void 0 : _b.reduce(reducer, 0)) || 0);
        (_c = this.popover) === null || _c === void 0 ? void 0 : _c.updatePosition();
    }
}
ChipsOverflowExampleComponent.ɵfac = function ChipsOverflowExampleComponent_Factory(t) { return new (t || ChipsOverflowExampleComponent)(); };
ChipsOverflowExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChipsOverflowExampleComponent, selectors: [["nui-chips-overflow-example"]], viewQuery: function ChipsOverflowExampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["PopoverComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
    } }, decls: 4, vars: 4, consts: [["id", "nui-demo-chips-overflow", 3, "itemsSource", "overflowLinesNumber", "overflow", "chipRemoved", "chipsOverflowed", "removeAll"], ["class", "nui-chips-overflowed", 4, "ngIf"], ["popoverWithClickTrigger", ""], [1, "nui-chips-overflowed"], ["overflowCounterLabel", ""], ["trigger", "click", 3, "popoverOverlayPosition", "template"], [1, "nui-chips-overflowed__counter"], ["orientation", "vertical", 3, "overflowSource", "itemsSource", "chipRemoved"]], template: function ChipsOverflowExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-chips", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsOverflowExampleComponent_Template_nui_chips_chipRemoved_0_listener($event) { return ctx.onClear($event); })("chipsOverflowed", function ChipsOverflowExampleComponent_Template_nui_chips_chipsOverflowed_0_listener($event) { return ctx.onChipsOverflow($event); })("removeAll", function ChipsOverflowExampleComponent_Template_nui_chips_removeAll_0_listener($event) { return ctx.onClearAll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChipsOverflowExampleComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChipsOverflowExampleComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.horizontalGroupedItemsSource)("overflowLinesNumber", ctx.overflowLinesNumber)("overflow", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.overflowCounter > 0);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__["ChipsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _src_lib_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"], _src_lib_chips_chips_overflow_chips_overflow_component__WEBPACK_IMPORTED_MODULE_6__["ChipsOverflowComponent"]], styles: [".nui-chips-overflowed__counter[_ngcontent-%COMP%] { margin-left: 3px; display: inline-flex; }"] });


/***/ }),

/***/ "JXvR":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-overflow/chips-overflow.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chips id=\"nui-demo-chips-overflow\"\n           [itemsSource]=\"horizontalGroupedItemsSource\"\n           [overflowLinesNumber]=\"overflowLinesNumber\"\n           [overflow]=\"true\"\n           (chipRemoved)=\"onClear($event)\"\n           (chipsOverflowed)=\"onChipsOverflow($event)\"\n           (removeAll)=\"onClearAll($event)\">\n    <div class=\"nui-chips-overflowed\" #overflowCounterLabel *ngIf=\"overflowCounter > 0\">\n        <nui-popover trigger=\"click\"\n                     [popoverOverlayPosition]=\"overflowPopoverPosition\"\n                     [template]=\"popoverWithClickTrigger\">\n            <a class=\"nui-chips-overflowed__counter\">+{{ overflowCounter }}</a>\n        </nui-popover>\n    </div>\n</nui-chips>\n\n<ng-template #popoverWithClickTrigger>\n    <nui-chips-overflow\n        [overflowSource]=\"overflowSource\"\n        [itemsSource]=\"horizontalGroupedItemsSource\"\n        (chipRemoved)=\"onClear($event)\"\n        orientation=\"vertical\">\n    </nui-chips-overflow>\n</ng-template>\n");

/***/ }),

/***/ "KoHK":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/chips-visual-test/chips-visual-test.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChipsVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsVisualTestComponent", function() { return ChipsVisualTestComponent; });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "BkRI");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");
/* harmony import */ var _chips_overflow_chips_overflow_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chips-overflow/chips-overflow.example.component */ "IN9a");
/* harmony import */ var _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chip/chip.component */ "PEYr");
/* harmony import */ var _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/icon/icon.component */ "45Bz");







const horizontalFlatItems = [
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId4", label: "Unknown" },
    { id: "flatId5", label: "Ok" },
];
const groupedItems = [
    {
        id: "statusGroupId", label: "Status", items: [
            { id: "statusGroupItem1", label: "Down" },
            { id: "statusGroupItem2", label: "Critical" },
            { id: "statusGroupItem3", label: "Warning" },
            { id: "statusGroupItem4", label: "Unknown" },
            { id: "statusGroupItem5", label: "Ok" }
        ],
    },
    {
        id: "vendorGroupId", label: "Vendor", items: [
            { id: "vendorGroupItem1", label: "Cisco" },
            { id: "vendorGroupItem2", label: "Hewlett Packard" },
            { id: "vendorGroupItem3", label: "Uniper" }
        ],
    },
];
const verticalFlatItemsVisual = [
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId4", label: "Unknown" },
    { id: "flatId5", label: "Ok" },
];
class ChipsVisualTestComponent {
    constructor() {
        this.horizontalFlatItemsSource = { flatItems: horizontalFlatItems };
        this.horizontalGroupedItemsSource = { groupedItems: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(groupedItems) };
        this.verticalFlatItemsSource = { flatItems: verticalFlatItemsVisual };
        this.verticalGroupedItemsSource = { groupedItems: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(groupedItems) };
    }
    onClear(event) {
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(this.horizontalFlatItemsSource.flatItems || [], event.item);
    }
    onClearGroup(event) {
        var _a;
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(((_a = event.group) === null || _a === void 0 ? void 0 : _a.items) || [], event.item);
    }
    onClearAll() {
        this.verticalGroupedItemsSource.groupedItems = [];
    }
}
ChipsVisualTestComponent.ɵfac = function ChipsVisualTestComponent_Factory(t) { return new (t || ChipsVisualTestComponent)(); };
ChipsVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChipsVisualTestComponent, selectors: [["nui-chips-visual-test"]], decls: 33, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5168008278809915722$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_CHIPS_VISUAL_TEST_CHIPS_VISUAL_TEST_COMPONENT_TS_1 = goog.getMsg("Statuses");
        i18n_0 = MSG_EXTERNAL_5168008278809915722$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_CHIPS_VISUAL_TEST_CHIPS_VISUAL_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟8a35b7aecbc09fd6b111ade416a7ed11371d95bd␟5168008278809915722:Statuses`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4163272119298020373$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_CHIPS_VISUAL_TEST_CHIPS_VISUAL_TEST_COMPONENT_TS_3 = goog.getMsg("Filters");
        i18n_2 = MSG_EXTERNAL_4163272119298020373$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_CHIPS_VISUAL_TEST_CHIPS_VISUAL_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`;
    } return [[1, "container"], ["id", "nui-demo-chips-flat-horizontal-visual", 3, "itemsSource", "chipRemoved", "removeAll"], ["id", "nui-demo-chips-grouped-horizontal-visual", 3, "itemsSource", "chipRemoved", "removeAll"], ["id", "nui-demo-chips-vertical-visual", "title", i18n_0, "orientation", "vertical", 3, "itemsSource", "chipRemoved", "removeAll"], ["id", "nui-demo-chips-grouped-vertical-visual", "title", i18n_2, "orientation", "vertical", 3, "itemsSource", "chipRemoved", "removeAll"], ["iconSize", "small", "icon", "add", 1, "ml-2"]]; }, template: function ChipsVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Basic chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nui-chips", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsVisualTestComponent_Template_nui_chips_chipRemoved_4_listener($event) { return ctx.onClear($event); })("removeAll", function ChipsVisualTestComponent_Template_nui_chips_removeAll_4_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Chips grouped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nui-chips", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsVisualTestComponent_Template_nui_chips_chipRemoved_9_listener($event) { return ctx.onClearGroup($event); })("removeAll", function ChipsVisualTestComponent_Template_nui_chips_removeAll_9_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Chips vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nui-chips", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsVisualTestComponent_Template_nui_chips_chipRemoved_14_listener($event) { return ctx.onClear($event); })("removeAll", function ChipsVisualTestComponent_Template_nui_chips_removeAll_14_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Chips vertical grouped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "nui-chips", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function ChipsVisualTestComponent_Template_nui_chips_chipRemoved_19_listener($event) { return ctx.onClear($event); })("removeAll", function ChipsVisualTestComponent_Template_nui_chips_removeAll_19_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Chips overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "nui-chips-overflow-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Chip content-projection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nui-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Custom content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "nui-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.horizontalFlatItemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.horizontalGroupedItemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.verticalFlatItemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.verticalGroupedItemsSource);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__["ChipsComponent"], _chips_overflow_chips_overflow_example_component__WEBPACK_IMPORTED_MODULE_4__["ChipsOverflowExampleComponent"], _src_lib_chips_chip_chip_component__WEBPACK_IMPORTED_MODULE_5__["ChipComponent"], _src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]], encapsulation: 2 });


/***/ }),

/***/ "QW4O":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/vertical-flat-chips/vertical-flat-chips.example.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IChipsItem, IChipsItemsSource, IToastService, ToastService } from \"@nova-ui/bits\";\nimport _pull from \"lodash/pull\";\n\nconst verticalFlatItems: IChipsItem[] = [\n    {id: \"flatId1\", label: \"Down\"},\n    {id: \"flatId2\", label: \"Critical\"},\n    {id: \"flatId3\", label: \"Warning\"},\n    {id: \"flatId4\", label: \"Unknown\"},\n    {id: \"flatId5\", label: \"Ok\"},\n];\n\n@Component({\n    selector: \"nui-vertical-flat-chips-example\",\n    templateUrl: \"vertical-flat-chips.example.component.html\",\n})\n\nexport class VerticalFlatChipsExampleComponent {\n    public verticalFlatItemsSource: IChipsItemsSource = {flatItems: verticalFlatItems};\n\n    public onClear(event: { item: IChipsItem }) {\n        console.log(`'onClear' event fired. $event.item.id=${event.item.id}`);\n        _pull(this.verticalFlatItemsSource.flatItems || [], event.item);\n    }\n\n    public onClearAll() {\n        this.verticalFlatItemsSource.flatItems = [];\n    }\n}\n");

/***/ }),

/***/ "QfEM":
/*!*****************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/grouped-chips/grouped-chips.example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: GroupedChipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedChipsExampleComponent", function() { return GroupedChipsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "BkRI");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");





const groupedItems = [
    {
        id: "statusGroupId", label: "Status", items: [
            { id: "statusGroupItem1", label: "Down" },
            { id: "statusGroupItem2", label: "Critical" },
            { id: "statusGroupItem3", label: "Warning" },
            { id: "statusGroupItem4", label: "Unknown" },
            { id: "statusGroupItem5", label: "Ok" }
        ],
    },
    {
        id: "vendorGroupId", label: "Vendor", items: [
            { id: "vendorGroupItem1", label: "Cisco" },
            { id: "vendorGroupItem2", label: "Hewlett Packard" },
            { id: "vendorGroupItem3", label: "Uniper" }
        ],
    },
];
class GroupedChipsExampleComponent {
    constructor() {
        this.horizontalGroupedItemsSource = { groupedItems: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(groupedItems) };
    }
    onClear(event) {
        var _a, _b;
        console.log(`'onClear' event fired. $event.item.id=${event.item.id} $event.group.id=${(_a = event.group) === null || _a === void 0 ? void 0 : _a.id}`);
        lodash_pull__WEBPACK_IMPORTED_MODULE_2___default()(((_b = event.group) === null || _b === void 0 ? void 0 : _b.items) || [], event.item);
    }
    onClearAll() {
        this.horizontalGroupedItemsSource.groupedItems = [];
    }
}
GroupedChipsExampleComponent.ɵfac = function GroupedChipsExampleComponent_Factory(t) { return new (t || GroupedChipsExampleComponent)(); };
GroupedChipsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GroupedChipsExampleComponent, selectors: [["nui-grouped-chips-example"]], decls: 1, vars: 1, consts: [["id", "nui-demo-chips-grouped-horizontal", 3, "itemsSource", "chipRemoved", "removeAll"]], template: function GroupedChipsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nui-chips", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chipRemoved", function GroupedChipsExampleComponent_Template_nui_chips_chipRemoved_0_listener($event) { return ctx.onClear($event); })("removeAll", function GroupedChipsExampleComponent_Template_nui_chips_removeAll_0_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.horizontalGroupedItemsSource);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_4__["ChipsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "UaJ5":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/grouped-chips/grouped-chips.example.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IChipsGroup, IChipsItem, IToastService, ToastService } from \"@nova-ui/bits\";\nimport _cloneDeep from \"lodash/cloneDeep\";\nimport _pull from \"lodash/pull\";\n\nconst groupedItems: IChipsGroup[] = [\n    {\n        id: \"statusGroupId\", label: \"Status\", items: [\n            {id: \"statusGroupItem1\", label: \"Down\"},\n            {id: \"statusGroupItem2\", label: \"Critical\"},\n            {id: \"statusGroupItem3\", label: \"Warning\"},\n            {id: \"statusGroupItem4\", label: \"Unknown\"},\n            {id: \"statusGroupItem5\", label: \"Ok\"}],\n    },\n    {\n        id: \"vendorGroupId\", label: \"Vendor\", items: [\n            {id: \"vendorGroupItem1\", label: \"Cisco\"},\n            {id: \"vendorGroupItem2\", label: \"Hewlett Packard\"},\n            {id: \"vendorGroupItem3\", label: \"Uniper\"}],\n    },\n];\n\n@Component({\n    selector: \"nui-grouped-chips-example\",\n    templateUrl: \"./grouped-chips.example.component.html\",\n})\n\nexport class GroupedChipsExampleComponent {\n    public horizontalGroupedItemsSource = {groupedItems: _cloneDeep(groupedItems)};\n\n    public onClear(event: { item: IChipsItem, group?: IChipsGroup }) {\n        console.log(`'onClear' event fired. $event.item.id=${event.item.id} $event.group.id=${event.group?.id}`);\n        _pull(event.group?.items || [], event.item);\n    }\n\n    public onClearAll() {\n        this.horizontalGroupedItemsSource.groupedItems = [];\n    }\n}\n");

/***/ }),

/***/ "Ucvp":
/*!*************************************************!*\
  !*** ./demo/src/components/demo/chips/index.ts ***!
  \*************************************************/
/*! exports provided: ChipsDocsExampleComponent, BasicChipsExampleComponent, GroupedChipsExampleComponent, VerticalFlatChipsExampleComponent, VerticalGroupedChipsExampleComponent, AutohideChipsExampleComponent, ChipsVisualTestComponent, ChipsOverflowExampleComponent, ChipsCustomCssExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chips_docs_chips_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chips-docs/chips-docs.example.component */ "d0pf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsDocsExampleComponent", function() { return _chips_docs_chips_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["ChipsDocsExampleComponent"]; });

/* harmony import */ var _basic_chips_basic_chips_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-chips/basic-chips.example.component */ "uSzK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicChipsExampleComponent", function() { return _basic_chips_basic_chips_example_component__WEBPACK_IMPORTED_MODULE_1__["BasicChipsExampleComponent"]; });

/* harmony import */ var _grouped_chips_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grouped-chips/grouped-chips.example.component */ "QfEM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedChipsExampleComponent", function() { return _grouped_chips_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_2__["GroupedChipsExampleComponent"]; });

/* harmony import */ var _vertical_flat_chips_vertical_flat_chips_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertical-flat-chips/vertical-flat-chips.example.component */ "4kcf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalFlatChipsExampleComponent", function() { return _vertical_flat_chips_vertical_flat_chips_example_component__WEBPACK_IMPORTED_MODULE_3__["VerticalFlatChipsExampleComponent"]; });

/* harmony import */ var _vertical_grouped_chips_vertical_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical-grouped-chips/vertical-grouped-chips.example.component */ "xED4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalGroupedChipsExampleComponent", function() { return _vertical_grouped_chips_vertical_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_4__["VerticalGroupedChipsExampleComponent"]; });

/* harmony import */ var _autohide_chips_autohide_chips_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autohide-chips/autohide-chips.example.component */ "8NSq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutohideChipsExampleComponent", function() { return _autohide_chips_autohide_chips_example_component__WEBPACK_IMPORTED_MODULE_5__["AutohideChipsExampleComponent"]; });

/* harmony import */ var _chips_visual_test_chips_visual_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chips-visual-test/chips-visual-test.component */ "KoHK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsVisualTestComponent", function() { return _chips_visual_test_chips_visual_test_component__WEBPACK_IMPORTED_MODULE_6__["ChipsVisualTestComponent"]; });

/* harmony import */ var _chips_overflow_chips_overflow_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chips-overflow/chips-overflow.example.component */ "IN9a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsOverflowExampleComponent", function() { return _chips_overflow_chips_overflow_example_component__WEBPACK_IMPORTED_MODULE_7__["ChipsOverflowExampleComponent"]; });

/* harmony import */ var _chips_custom_css_chips_custom_css_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chips-custom-css/chips-custom-css.example.component */ "6MI3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChipsCustomCssExampleComponent", function() { return _chips_custom_css_chips_custom_css_example_component__WEBPACK_IMPORTED_MODULE_8__["ChipsCustomCssExampleComponent"]; });

/* empty/unused harmony star reexport */











/***/ }),

/***/ "Wj+X":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-docs/chips-docs.example.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiChipsModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    To implement basic <code>nui-chips</code> you need to pass <code>[itemsSource]</code> property to\n    <code>nui-chips</code>.\n    As it has flat data structure you need to pass your array of items to <code>flatItems</code> key of your itemsSource\n    object because it has <a href=\"../interfaces/IChipsItemsSource.html#source\" target=\"_blank\">IChipsItemsSource</a>\n    type.\n    Also you need to pass method to <code>(chipRemoved)</code> output which will handle removing chips and some other\n    functionality if you need it.\n</p>\n<p>\n    Another thing is that by default there is a link which says \"Clear All\" and by clicking it you can remove all the\n    chips. To make that happen pass method to <code>(removeAll)</code> output and clear your itemsSource.You can modify\n    the link text by setting the <code>[removeAllLinkText]</code> input, or you can turn the feature off by passing\n    false to the <code>[allowRemoveAll]</code> input.\n</p>\n<nui-example-wrapper filenamePrefix=\"basic-chips\" exampleTitle=\"Basic Usage\">\n    <nui-basic-chips-example></nui-basic-chips-example>\n</nui-example-wrapper>\n<h2>Grouped Data</h2>\n<p>\n    Implementing chips with grouped data is similar to implementing basic <code>nui-chips</code> with flat data. You\n    need to pass data as an array of\n    <a href=\"../interfaces/IChipsGroup.html#source\" target=\"_blank\">IChipsGroup</a> and set the\n    <code>(chipRemoved)</code> output and <code>(removeAll)</code> if you need it.\n</p>\n<nui-example-wrapper filenamePrefix=\"grouped-chips\" exampleTitle=\"Grouped Data\">\n    <nui-grouped-chips-example></nui-grouped-chips-example>\n</nui-example-wrapper>\n<h2>Vertical Orientation</h2>\n<p>\n    Implementing vertical chips is the same as implementing horizontal, you only need to pass additional properties such\n    as <code>orientation=\"vertical\"</code> and <code>[title]</code>.\n</p>\n<nui-example-wrapper filenamePrefix=\"vertical-flat-chips\" exampleTitle=\"Vertical Flat Data\">\n    <nui-vertical-flat-chips-example></nui-vertical-flat-chips-example>\n</nui-example-wrapper>\n<nui-example-wrapper filenamePrefix=\"vertical-grouped-chips\" exampleTitle=\"Vertical Grouped Data\">\n    <nui-vertical-grouped-chips-example></nui-vertical-grouped-chips-example>\n</nui-example-wrapper>\n<h2>Autohide</h2>\n<p>\n    You can reserve space for the component when the itemsSource is empty by passing <code>[autoHide]=\"false\"</code> so\n    that when the itemsSource is empty then there will remain some space at the position where component was. Default\n    value is true.\n</p>\n<nui-example-wrapper filenamePrefix=\"autohide-chips\" exampleTitle=\"Autohide\">\n    <nui-autohide-chips-example></nui-autohide-chips-example>\n</nui-example-wrapper>\n\n<h2>Overflow</h2>\n<p>\n    This example shows how to handle chips overflow by adding a counter at the end of the second row, which indicates the\n    number of chips which are overflowed instead of creating a new row. For that, you need to add <code>#overflowCounterLabel</code> which\n    marks the area with counter and popover for incorporating it into <code>nui-chips</code> as Content Projection. Set property <code>overflow</code> to\n    <code>true</code> and add handler for the <code>chipsOverflowed</code> Output to get overflowed items. Set overflowed items to the new\n    property which would be as data source of overflowed chips for the <code>nui-chips-overflow</code> component. Add a <code>nui-chips-overflowed__counter</code>\n    class with styles for counter (see inside chips-overflow.example.component.ts file)<code>overflowLinesNumber</code>\n    is used for limitation of chips rows, 1 by default. You can change it for you own needs.\n</p>\n\n<nui-example-wrapper filenamePrefix=\"chips-overflow\" exampleTitle=\"Overflow\">\n    <nui-chips-overflow-example></nui-chips-overflow-example>\n</nui-example-wrapper>\n\n<h2>Custom Css</h2>\n<p>To use custom styling for chips use <code>customClass</code> property.</p>\n<p>You can do that for separate <code>nui-chip</code>, <code>nui-chips</code> set or <code>nui-chips</code> group.</p>\n<p>\n    It's also possible to use\n    <a href=\"../additional-documentation/nova-styles/tag.html\" target=\"_blank\">Nui Tag</a>\n    classes width styles for chips. To do that, just pass the related style to <code>customClass</code>.\n</p>\n<p>To unset <code>max-width</code> on the chip, pass <code>unlimited-width</code> to <code>customClass</code>.</p>\n<nui-example-wrapper filenamePrefix=\"custom-css\" exampleTitle=\"Custom Css\">\n    <nui-chips-custom-css-example></nui-chips-custom-css-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "XO6u":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-custom-css/chips-custom-css.example.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Standalone chips</h3>\n<div id=\"standalone-chips\" class=\"mb-5\">\n    <nui-chip *ngFor=\"let chip of standaloneChips\"\n        [item]=\"chip\"\n        [customClass]=\"chip.customClass\"\n    ><nui-icon *ngIf=\"chip.icon\"\n        [icon]=\"chip.icon\"\n        iconSize=\"small\"\n        class=\"mr-1\"\n    ></nui-icon>\n        {{chip.label}}\n    </nui-chip>\n</div>\n\n<h3>nui-chips Group set</h3>\n<nui-chips id=\"nui-demo-chips-custom-css\"\n    title=\"Statuses\"\n    orientation=\"vertical\"\n    customClass=\"nui-chips-custom-styles\"\n    [itemsSource]=\"nuiChipsSet\"\n    (chipRemoved)=\"onClear($event)\"\n    (removeAll)=\"onClearAll()\">\n</nui-chips>\n\n<h3>Unset Width</h3>\n<div id=\"chips-width-example\" class=\"mb-5\">\n    <nui-chip *ngFor=\"let chip of widthChips\"\n        [item]=\"chip\"\n        [customClass]=\"chip.customClass\"\n    ></nui-chip>\n</div>\n");

/***/ }),

/***/ "csBe":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-custom-css/chips-custom-css.example.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewEncapsulation } from \"@angular/core\";\nimport { IChipRemoved, IChipsGroup, IChipsItem, IChipsItemsSource } from \"@nova-ui/bits\";\nimport _pull from \"lodash/pull\";\n\n@Component({\n    selector: \"nui-chips-custom-css-example\",\n    templateUrl: \"./chips-custom-css.example.component.html\",\n    styleUrls: [\"chips-custom-css.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\n\nexport class ChipsCustomCssExampleComponent {\n    public standaloneChips: Array<IChipsItem & any> = [\n        {\n            id: \"standaloneChip1\",\n            label: \"Custom Critical\",\n            customClass: [\"standalone-chip-custom-styles\", \"custom-chip-critical\"],\n            icon: \"severity_critical\",\n        },\n        {\n            id: \"standaloneChip2\",\n            label: \"Custom Warning\",\n            customClass: [\"standalone-chip-custom-styles\", \"custom-chip-warning\"],\n            icon: \"severity_warning\",\n        },\n        {\n            id: \"standaloneChip3\",\n            label: \"Custom Info\",\n            customClass: [\"standalone-chip-custom-styles\", \"custom-chip-info\"],\n            icon: \"severity_info\",\n        },\n        {\n            id: \"statusGroupItem5\",\n            label: \"Disabled\",\n            customClass: [\"standalone-chip-custom-styles\", \"custom-chip-disabled\"],\n            icon: \"severity_unknown\",\n        },\n    ];\n\n    public nuiChipsSet: IChipsItemsSource = {\n        flatItems: [\n            {\n                id: \"flatId2\",\n                label: \"Critical\",\n                customClass: \"nui-tag-critical nui-tag-with-hover-styles nui-tag-text-light\",\n            },\n            {\n                id: \"flatId3\",\n                label: \"Warning\",\n                customClass: \"nui-tag-warning nui-tag-with-hover-styles\",\n            },\n            {\n                id: \"flatId4\",\n                label: \"Info\",\n                customClass: \"nui-tag-info nui-tag-with-hover-styles nui-tag-text-light\",\n            },\n            {\n                id: \"flatId5\",\n                label: \"Ok\",\n                customClass: \"nui-tag-ok nui-tag-with-hover-styles nui-tag-text-light\",\n            },\n        ],\n        groupedItems: [\n            {\n                id: \"statusGroupId\",\n                label: \"Grouped Statuses\",\n                items: [\n                    {\n                        id: \"statusGroupItem2\",\n                        label: \"Critical\",\n                        customClass: \"nui-tag-critical nui-tag-with-hover-styles nui-tag-text-light\",\n                    },\n                    {\n                        id: \"statusGroupItem3\",\n                        label: \"Warning\",\n                        customClass: \"nui-tag-warning nui-tag-with-hover-styles\",\n                    },\n                    {\n                        id: \"statusGroupItem4\",\n                        label: \"Unknown\",\n                    },\n                    {\n                        id: \"statusGroupItem5\",\n                        label: \"Ok\",\n                        customClass: \"nui-tag-ok nui-tag-with-hover-styles nui-tag-text-light\",\n                    },\n                ],\n            },\n        ],\n    };\n\n\n    public widthChips: Array<IChipsItem & any> = [\n        {\n            id: \"widthChip1\",\n            label: \"Chip with default width and very very very very very very very long title \",\n        },\n        {\n            id: \"widthChip2\",\n            label: \"Chip with unset width and a very very very very very very very long title \",\n            customClass: \"unlimited-width\",\n        },\n    ];\n\n\n    public onClear(event: IChipRemoved) {\n        const source = event.group\n            ? this.nuiChipsSet.groupedItems?.find((group) => group.id === event.group?.id)?.items\n            : this.nuiChipsSet.flatItems;\n        _pull(source || [], event.item);\n    }\n\n    public onClearAll() {\n        this.nuiChipsSet.flatItems = [];\n        this.nuiChipsSet.groupedItems = [];\n    }\n\n}\n");

/***/ }),

/***/ "d0pf":
/*!***********************************************************************************!*\
  !*** ./demo/src/components/demo/chips/chips-docs/chips-docs.example.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ChipsDocsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsDocsExampleComponent", function() { return ChipsDocsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _basic_chips_basic_chips_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic-chips/basic-chips.example.component */ "uSzK");
/* harmony import */ var _grouped_chips_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grouped-chips/grouped-chips.example.component */ "QfEM");
/* harmony import */ var _vertical_flat_chips_vertical_flat_chips_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-flat-chips/vertical-flat-chips.example.component */ "4kcf");
/* harmony import */ var _vertical_grouped_chips_vertical_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vertical-grouped-chips/vertical-grouped-chips.example.component */ "xED4");
/* harmony import */ var _autohide_chips_autohide_chips_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autohide-chips/autohide-chips.example.component */ "8NSq");
/* harmony import */ var _chips_overflow_chips_overflow_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chips-overflow/chips-overflow.example.component */ "IN9a");
/* harmony import */ var _chips_custom_css_chips_custom_css_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chips-custom-css/chips-custom-css.example.component */ "6MI3");









class ChipsDocsExampleComponent {
}
ChipsDocsExampleComponent.ɵfac = function ChipsDocsExampleComponent_Factory(t) { return new (t || ChipsDocsExampleComponent)(); };
ChipsDocsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChipsDocsExampleComponent, selectors: [["nui-chips-docs-example"]], decls: 151, vars: 0, consts: [["href", "../interfaces/IChipsItemsSource.html#source", "target", "_blank"], ["filenamePrefix", "basic-chips", "exampleTitle", "Basic Usage"], ["href", "../interfaces/IChipsGroup.html#source", "target", "_blank"], ["filenamePrefix", "grouped-chips", "exampleTitle", "Grouped Data"], ["filenamePrefix", "vertical-flat-chips", "exampleTitle", "Vertical Flat Data"], ["filenamePrefix", "vertical-grouped-chips", "exampleTitle", "Vertical Grouped Data"], ["filenamePrefix", "autohide-chips", "exampleTitle", "Autohide"], ["filenamePrefix", "chips-overflow", "exampleTitle", "Overflow"], ["href", "../additional-documentation/nova-styles/tag.html", "target", "_blank"], ["filenamePrefix", "custom-css", "exampleTitle", "Custom Css"]], template: function ChipsDocsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiChipsModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " To implement basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "nui-chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " you need to pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "[itemsSource]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " property to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "nui-chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". As it has flat data structure you need to pass your array of items to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "flatItems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " key of your itemsSource object because it has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IChipsItemsSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " type. Also you need to pass method to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(chipRemoved)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " output which will handle removing chips and some other functionality if you need it.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Another thing is that by default there is a link which says \"Clear All\" and by clicking it you can remove all the chips. To make that happen pass method to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "(removeAll)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " output and clear your itemsSource.You can modify the link text by setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "[removeAllLinkText]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " input, or you can turn the feature off by passing false to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "[allowRemoveAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nui-basic-chips-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Grouped Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Implementing chips with grouped data is similar to implementing basic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "nui-chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " with flat data. You need to pass data as an array of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IChipsGroup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " and set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "(chipRemoved)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " output and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "(removeAll)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " if you need it.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nui-grouped-chips-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Vertical Orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Implementing vertical chips is the same as implementing horizontal, you only need to pass additional properties such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "orientation=\"vertical\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "[title]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "nui-vertical-flat-chips-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nui-vertical-grouped-chips-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Autohide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " You can reserve space for the component when the itemsSource is empty by passing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "[autoHide]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " so that when the itemsSource is empty then there will remain some space at the position where component was. Default value is true.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nui-autohide-chips-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " This example shows how to handle chips overflow by adding a counter at the end of the second row, which indicates the number of chips which are overflowed instead of creating a new row. For that, you need to add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "#overflowCounterLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " which marks the area with counter and popover for incorporating it into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "nui-chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " as Content Projection. Set property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " and add handler for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "chipsOverflowed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Output to get overflowed items. Set overflowed items to the new property which would be as data source of overflowed chips for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "nui-chips-overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " component. Add a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "nui-chips-overflowed__counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " class with styles for counter (see inside chips-overflow.example.component.ts file)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "overflowLinesNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " is used for limitation of chips rows, 1 by default. You can change it for you own needs.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nui-example-wrapper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "nui-chips-overflow-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Custom Css");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "To use custom styling for chips use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "customClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " property.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "You can do that for separate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "nui-chip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "nui-chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " set or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "nui-chips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " It's also possible to use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Nui Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " classes width styles for chips. To do that, just pass the related style to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "customClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "To unset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "max-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " on the chip, pass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "unlimited-width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "customClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "nui-example-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "nui-chips-custom-css-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _basic_chips_basic_chips_example_component__WEBPACK_IMPORTED_MODULE_2__["BasicChipsExampleComponent"], _grouped_chips_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_3__["GroupedChipsExampleComponent"], _vertical_flat_chips_vertical_flat_chips_example_component__WEBPACK_IMPORTED_MODULE_4__["VerticalFlatChipsExampleComponent"], _vertical_grouped_chips_vertical_grouped_chips_example_component__WEBPACK_IMPORTED_MODULE_5__["VerticalGroupedChipsExampleComponent"], _autohide_chips_autohide_chips_example_component__WEBPACK_IMPORTED_MODULE_6__["AutohideChipsExampleComponent"], _chips_overflow_chips_overflow_example_component__WEBPACK_IMPORTED_MODULE_7__["ChipsOverflowExampleComponent"], _chips_custom_css_chips_custom_css_example_component__WEBPACK_IMPORTED_MODULE_8__["ChipsCustomCssExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "dvd8":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-custom-css/chips-custom-css.example.component.less ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n// custom styles for each of standalone `nui-chip`\n#standalone-chips {\n    .standalone-chip-custom-styles {\n        border: 1px solid;\n        margin-right: @nui-space-xxs;\n    }\n\n    .custom-chip-critical {\n        .setCssVariable(border-color, nui-color-semantic-critical);\n        .setCssVariable(background-color, nui-color-semantic-critical-bg);\n        &:hover {\n            .setCssVariable(border-color, nui-color-semantic-critical-hover);\n            .setCssVariable(background-color, nui-color-semantic-critical-bg-hover);\n        }\n    }\n\n    .custom-chip-warning {\n        .setCssVariable(border-color, nui-color-semantic-warning);\n        .setCssVariable(background-color, nui-color-semantic-warning-bg);\n        &:hover {\n            .setCssVariable(border-color, nui-color-semantic-warning-hover);\n            .setCssVariable(background-color, nui-color-semantic-warning-bg-hover);\n        }\n    }\n\n    .custom-chip-info {\n        .setCssVariable(border-color, nui-color-semantic-info);\n        .setCssVariable(background-color, nui-color-semantic-info-bg);\n        &:hover {\n            .setCssVariable(border-color, nui-color-semantic-info-hover);\n            .setCssVariable(background-color, nui-color-semantic-info-bg-hover);\n        }\n    }\n\n    .custom-chip-disabled {\n        cursor: not-allowed;\n        .setCssVariable(border-color, nui-color-disabled-secondary);\n        .setCssVariable(background-color, nui-color-disabled-secondary);\n        .setCssVariable(color, nui-color-text-disabled);\n\n        // change the color of \"X\" button\n        .nui-chip__value-remove svg * {\n            .setCssVariable(fill, nui-color-icon-disabled);\n        }\n\n        & > * > * {\n            cursor: not-allowed;\n        }\n    }\n}\n\n// custom styles for `nui-chips`\n#nui-demo-chips-custom-css {\n    // custom styles for `nui-chips`\n    .nui-chips-custom-styles {\n        max-width: 400px;\n        padding: @nui-space-md;\n    }\n}\n\n");

/***/ }),

/***/ "hjRX":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/vertical-grouped-chips/vertical-grouped-chips.example.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"max-width: 300px\">\n    <nui-chips id=\"nui-demo-chips-grouped-vertical\"\n               [itemsSource]=\"verticalGroupedItemsSource\"\n               title=\"Filters\" i18n-title\n               orientation=\"vertical\"\n               (chipRemoved)=\"onClear($event)\"\n               (removeAll)=\"onClearAll()\">\n    </nui-chips>\n</div>\n");

/***/ }),

/***/ "iXvk":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/autohide-chips/autohide-chips.example.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chips id=\"nui-demo-chips-autohide\"\n           [autoHide]=\"false\"\n           [itemsSource]=\"horizontalFlatItemsSource\"\n           (chipRemoved)=\"onClear($event)\"\n           (removeAll)=\"onClearAll()\">\n</nui-chips>\n");

/***/ }),

/***/ "krVf":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/index.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./chips-docs/chips-docs.example.component\";\nexport * from \"./basic-chips/basic-chips.example.component\";\nexport * from \"./grouped-chips/grouped-chips.example.component\";\nexport * from \"./vertical-flat-chips/vertical-flat-chips.example.component\";\nexport * from \"./vertical-grouped-chips/vertical-grouped-chips.example.component\";\nexport * from \"./autohide-chips/autohide-chips.example.component\";\nexport * from \"./chips-visual-test/chips-visual-test.component\";\nexport * from \"./chips-overflow/chips-overflow.example.component\";\nexport * from \"./chips-custom-css/chips-custom-css.example.component\";\nexport * from \"./chips-custom-css/chips-custom-css.example.component\";\n");

/***/ }),

/***/ "m7Bw":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/grouped-chips/grouped-chips.example.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-chips id=\"nui-demo-chips-grouped-horizontal\"\n           [itemsSource]=\"horizontalGroupedItemsSource\"\n           (chipRemoved)=\"onClear($event)\"\n           (removeAll)=\"onClearAll()\">\n</nui-chips>\n");

/***/ }),

/***/ "oBAJ":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/vertical-flat-chips/vertical-flat-chips.example.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"max-width: 300px\">\n    <nui-chips id=\"nui-demo-chips-flat-vertical\"\n               [itemsSource]=\"verticalFlatItemsSource\"\n               title=\"Statuses\" i18n-title\n               orientation=\"vertical\"\n               (chipRemoved)=\"onClear($event)\"\n               (removeAll)=\"onClearAll()\">\n    </nui-chips>\n</div>\n");

/***/ }),

/***/ "uSzK":
/*!*************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/basic-chips/basic-chips.example.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BasicChipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicChipsExampleComponent", function() { return BasicChipsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");




const horizontalFlatItems = [
    { id: "flatId1", label: "Down" },
    { id: "flatId2", label: "Critical" },
    { id: "flatId3", label: "Warning" },
    { id: "flatId4", label: "Unknown" },
    { id: "flatId5", label: "Ok" },
];
class BasicChipsExampleComponent {
    constructor() {
        this.horizontalFlatItemsSource = { flatItems: horizontalFlatItems };
    }
    onClear(event) {
        console.log(`'onClear' event fired. $event.item.id=${event.item.id}`);
        lodash_pull__WEBPACK_IMPORTED_MODULE_1___default()(this.horizontalFlatItemsSource.flatItems || [], event.item);
    }
    onClearAll() {
        this.horizontalFlatItemsSource.flatItems = [];
    }
}
BasicChipsExampleComponent.ɵfac = function BasicChipsExampleComponent_Factory(t) { return new (t || BasicChipsExampleComponent)(); };
BasicChipsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BasicChipsExampleComponent, selectors: [["nui-basic-chips-example"]], decls: 1, vars: 1, consts: [["id", "nui-demo-chips-flat-horizontal", 3, "itemsSource", "chipRemoved", "removeAll"]], template: function BasicChipsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nui-chips", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chipRemoved", function BasicChipsExampleComponent_Template_nui_chips_chipRemoved_0_listener($event) { return ctx.onClear($event); })("removeAll", function BasicChipsExampleComponent_Template_nui_chips_removeAll_0_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemsSource", ctx.horizontalFlatItemsSource);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_3__["ChipsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "wh30":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/autohide-chips/autohide-chips.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IChipsItem, IChipsItemsSource, IToastService, ToastService } from \"@nova-ui/bits\";\nimport _pull from \"lodash/pull\";\n\nconst horizontalFlatItems: IChipsItem[] = [\n    {id: \"flatId1\", label: \"Down\"},\n    {id: \"flatId2\", label: \"Critical\"},\n    {id: \"flatId3\", label: \"Warning\"},\n    {id: \"flatId4\", label: \"Unknown\"},\n    {id: \"flatId5\", label: \"Ok\"},\n];\n\n@Component({\n    selector: \"nui-autohide-chips-example\",\n    templateUrl: \"autohide-chips.example.component.html\",\n})\nexport class AutohideChipsExampleComponent {\n    public horizontalFlatItemsSource: IChipsItemsSource = { flatItems: horizontalFlatItems};\n\n    public onClear(event: { item: IChipsItem }) {\n        console.log(`'onClear' event fired. $event.item.id=${event.item.id}`);\n        _pull(this.horizontalFlatItemsSource.flatItems || [], event.item);\n    }\n\n    public onClearAll() {\n        this.horizontalFlatItemsSource.flatItems = [];\n    }\n}\n");

/***/ }),

/***/ "xED4":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/chips/vertical-grouped-chips/vertical-grouped-chips.example.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: VerticalGroupedChipsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalGroupedChipsExampleComponent", function() { return VerticalGroupedChipsExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "BkRI");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/pull */ "hzCD");
/* harmony import */ var lodash_pull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_pull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/chips/chips.component */ "JjEo");





const groupedItems = [
    {
        id: "statusGroupId", label: "Status", items: [
            { id: "statusGroupItem1", label: "Down" },
            { id: "statusGroupItem2", label: "Critical" },
            { id: "statusGroupItem3", label: "Warning" },
            { id: "statusGroupItem4", label: "Unknown" },
            { id: "statusGroupItem5", label: "Ok" }
        ],
    },
    {
        id: "vendorGroupId", label: "Vendor", items: [
            { id: "vendorGroupItem1", label: "Cisco" },
            { id: "vendorGroupItem2", label: "Hewlett Packard" },
            { id: "vendorGroupItem3", label: "Uniper" }
        ],
    }
];
class VerticalGroupedChipsExampleComponent {
    constructor() {
        this.verticalGroupedItemsSource = { groupedItems: lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(groupedItems) };
    }
    onClear(event) {
        var _a, _b;
        console.log(`'onClear' event fired. $event.item.id=${event.item.id} $event.group.id=${(_a = event.group) === null || _a === void 0 ? void 0 : _a.id}`);
        lodash_pull__WEBPACK_IMPORTED_MODULE_2___default()(((_b = event.group) === null || _b === void 0 ? void 0 : _b.items) || [], event.item);
    }
    onClearAll() {
        this.verticalGroupedItemsSource.groupedItems = [];
    }
}
VerticalGroupedChipsExampleComponent.ɵfac = function VerticalGroupedChipsExampleComponent_Factory(t) { return new (t || VerticalGroupedChipsExampleComponent)(); };
VerticalGroupedChipsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VerticalGroupedChipsExampleComponent, selectors: [["nui-vertical-grouped-chips-example"]], decls: 2, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4163272119298020373$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_VERTICAL_GROUPED_CHIPS_VERTICAL_GROUPED_CHIPS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Filters");
        i18n_0 = MSG_EXTERNAL_4163272119298020373$$DEMO_SRC_COMPONENTS_DEMO_CHIPS_VERTICAL_GROUPED_CHIPS_VERTICAL_GROUPED_CHIPS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`;
    } return [[2, "max-width", "300px"], ["id", "nui-demo-chips-grouped-vertical", "title", i18n_0, "orientation", "vertical", 3, "itemsSource", "chipRemoved", "removeAll"]]; }, template: function VerticalGroupedChipsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nui-chips", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("chipRemoved", function VerticalGroupedChipsExampleComponent_Template_nui_chips_chipRemoved_1_listener($event) { return ctx.onClear($event); })("removeAll", function VerticalGroupedChipsExampleComponent_Template_nui_chips_removeAll_1_listener() { return ctx.onClearAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("itemsSource", ctx.verticalGroupedItemsSource);
    } }, directives: [_src_lib_chips_chips_component__WEBPACK_IMPORTED_MODULE_4__["ChipsComponent"]], encapsulation: 2 });


/***/ }),

/***/ "zHwo":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-visual-test/chips-visual-test.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div><h3>Basic chips</h3>\n        <nui-chips id=\"nui-demo-chips-flat-horizontal-visual\"\n                    [itemsSource]=\"horizontalFlatItemsSource\"\n                    (chipRemoved)=\"onClear($event)\"\n                    (removeAll)=\"onClearAll()\">\n        </nui-chips>\n    </div>\n    <hr/>\n\n    <div><h3>Chips grouped</h3>\n        <nui-chips id=\"nui-demo-chips-grouped-horizontal-visual\"\n                    [itemsSource]=\"horizontalGroupedItemsSource\"\n                    (chipRemoved)=\"onClearGroup($event)\"\n                    (removeAll)=\"onClearAll()\">\n        </nui-chips>\n    </div>\n    <hr/>\n\n    <div><h3>Chips vertical</h3>\n        <nui-chips id=\"nui-demo-chips-vertical-visual\"\n                    [itemsSource]=\"verticalFlatItemsSource\"\n                    title=\"Statuses\" i18n-title\n                    orientation=\"vertical\"\n                    (chipRemoved)=\"onClear($event)\"\n                    (removeAll)=\"onClearAll()\">\n        </nui-chips>\n    </div>\n    <hr/>\n\n    <div><h3>Chips vertical grouped</h3>\n        <nui-chips id=\"nui-demo-chips-grouped-vertical-visual\"\n                    [itemsSource]=\"verticalGroupedItemsSource\"\n                    title=\"Filters\" i18n-title\n                    orientation=\"vertical\"\n                    (chipRemoved)=\"onClear($event)\"\n                    (removeAll)=\"onClearAll()\">\n        </nui-chips>\n    </div>\n    <hr/>\n\n    <div><h3>Chips overflow</h3>\n        <nui-chips-overflow-example></nui-chips-overflow-example>\n    </div>\n    <hr/>\n\n    <div><h3>Chip content-projection</h3>\n        <nui-chip>Custom content <nui-icon class=\"ml-2\" iconSize=\"small\" icon=\"add\"></nui-icon></nui-chip>\n    </div>\n    <hr/>\n</div>\n");

/***/ }),

/***/ "zt6Z":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/chips/chips-overflow/chips-overflow.example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, ViewChild } from \"@angular/core\";\nimport {\n    IChipsGroup,\n    IChipsItem,\n    IChipsItemsSource,\n    PopoverComponent,\n    PopoverOverlayPosition\n} from \"@nova-ui/bits\";\nimport _pull from \"lodash/pull\";\n\nconst flatItems: IChipsItem[] = [\n    {id: \"flatId1\", label: \"Down\"},\n    {id: \"flatId2\", label: \"Critical\"},\n    {id: \"flatId3\", label: \"Warning\"},\n    {id: \"flatId1\", label: \"Down\"},\n    {id: \"flatId2\", label: \"Critical\"},\n    {id: \"flatId3\", label: \"Warning\"},\n    {id: \"flatId1\", label: \"Down\"},\n    {id: \"flatId2\", label: \"Critical\"},\n    {id: \"flatId3\", label: \"Warning\"},\n];\n\nconst groupedItems: IChipsGroup[] = [\n    {\n        id: \"statusGroupId\", label: \"Status\", items: [\n            {id: \"statusGroupItem1\", label: \"Down\"},\n            {id: \"statusGroupItem2\", label: \"Critical\"},\n            {id: \"statusGroupItem3\", label: \"Warning\"},\n            {id: \"statusGroupItem4\", label: \"Unknown\"},\n            {id: \"statusGroupItem5\", label: \"Ok\"}],\n    },\n    {\n        id: \"vendorGroupId\", label: \"Vendor\", items: [\n            {id: \"vendorGroupItem1\", label: \"Cisco\"},\n            {id: \"vendorGroupItem2\", label: \"Hewlett Packard\"},\n            {id: \"vendorGroupItem3\", label: \"Uniper\"}],\n    },\n    {\n        id: \"statusGroupId\", label: \"Status\", items: [\n            {id: \"statusGroupItem1\", label: \"Down\"},\n            {id: \"statusGroupItem2\", label: \"Critical\"},\n            {id: \"statusGroupItem3\", label: \"Warning\"},\n            {id: \"statusGroupItem4\", label: \"Unknown\"},\n            {id: \"statusGroupItem5\", label: \"Ok\"}],\n    },\n    {\n        id: \"vendorGroupId\", label: \"Vendor\", items: [\n            {id: \"vendorGroupItem1\", label: \"Cisco\"},\n            {id: \"vendorGroupItem2\", label: \"Hewlett Packard\"},\n            {id: \"vendorGroupItem3\", label: \"Uniper\"}],\n    },\n];\n\n@Component({\n    selector: \"nui-chips-overflow-example\",\n    templateUrl: \"./chips-overflow.example.component.html\",\n    styles: [`.nui-chips-overflowed__counter { margin-left: 3px; display: inline-flex; }`],\n})\nexport class ChipsOverflowExampleComponent {\n    public horizontalGroupedItemsSource = { flatItems, groupedItems };\n\n    public overflowLinesNumber = 2;\n    public overflowCounter: number;\n    public overflowSource: IChipsItemsSource;\n    public overflowPopoverPosition: PopoverOverlayPosition[] = [PopoverOverlayPosition.bottomLeft, PopoverOverlayPosition.topLeft];\n\n    @ViewChild(PopoverComponent) private popover: PopoverComponent;\n\n    public onClear(event: { item: IChipsItem, group?: IChipsGroup }) {\n        console.log(`'onClear' event fired. $event.item.id=${event.item.id} $event.group.id=${event.group?.id}`);\n        if (event.group) {\n            _pull(event.group.items || [], event.item);\n        } else {\n            _pull(this.horizontalGroupedItemsSource.flatItems || [], event.item);\n        }\n    }\n\n    public onClearAll(e: MouseEvent) {\n        this.horizontalGroupedItemsSource.groupedItems = [];\n        this.horizontalGroupedItemsSource.flatItems = [];\n        this.popover?.onClick(e);\n    }\n\n    onChipsOverflow(source: IChipsItemsSource) {\n        this.overflowSource = source;\n        const reducer = (accumulator: number, currentValue: IChipsGroup) => accumulator + currentValue.items.length;\n        this.overflowCounter = (this.overflowSource.flatItems?.length || 0) + (this.overflowSource.groupedItems?.reduce(reducer, 0) || 0);\n        this.popover?.updatePosition();\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-chips-chips-module-es2015.js.map