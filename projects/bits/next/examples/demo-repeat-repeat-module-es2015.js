(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-repeat-repeat-module"],{

/***/ "+2O1":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-item/repeat-item.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-item-example\",\n    templateUrl: \"./repeat-item.example.component.html\",\n})\nexport class RepeatItemExampleComponent {\n    public items = [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`];\n\n    constructor() { }\n}\n");

/***/ }),

/***/ "+l9c":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-simple/repeat-simple.example.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"example\">\n    <nui-repeat [itemsSource]=\"colors\"\n                [repeatItemTemplateRef]=\"repeatItemTemplate\">\n    </nui-repeat>\n</div>\n");

/***/ }),

/***/ "/EYa":
/*!**********************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat.module.ts ***!
  \**********************************************************/
/*! exports provided: RepeatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatModule", function() { return RepeatModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "PDB5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["RepeatExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "repeat-item",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["RepeatItemExampleComponent"],
    },
    {
        path: "repeat-test",
        component: _index__WEBPACK_IMPORTED_MODULE_3__["RepeatTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class RepeatModule {
}
RepeatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RepeatModule });
RepeatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function RepeatModule_Factory(t) { return new (t || RepeatModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("XxfH"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRepeatModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSwitchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiProgressModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSearchModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTabsModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RepeatModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_3__["RepeatExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatItemExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatDisabledMultiSelectionExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatMultiSelectionExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatRadioSelectionModeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatRadioWithNonRequiredSelectionModeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatSimpleExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatDragSimpleExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatReorderSimpleExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatDragPreviewExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatSingleSelectionModeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatSingleWithRequiredSelectionModeExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatReorderItemConfigExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatDragHandleExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_3__["RepeatVirtualScrollComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiRepeatModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSwitchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiProgressModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiSearchModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiFormFieldModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiTabsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "0xLF":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-drag-handle/repeat-drag-handle.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RepeatDragHandleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatDragHandleExampleComponent", function() { return RepeatDragHandleExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");


function RepeatDragHandleExampleComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4, "\n");
} }
function RepeatDragHandleExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 3);
} }
class RepeatDragHandleExampleComponent {
    constructor() {
        this.companies = ["Adobe", "IBM", "Dell", "Microsoft"];
    }
    onItemsReordered(event) {
        // update items according to the new order
        this.companies = event.currentState;
    }
}
RepeatDragHandleExampleComponent.ɵfac = function RepeatDragHandleExampleComponent_Factory(t) { return new (t || RepeatDragHandleExampleComponent)(); };
RepeatDragHandleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatDragHandleExampleComponent, selectors: [["nui-repeat-drag-handle-example"]], decls: 5, vars: 3, consts: [[3, "itemsSource", "dragHandleTemplateRef", "repeatItemTemplateRef", "itemsReordered"], ["repeatItemTemplate", ""], ["dragHandleTemplate", ""], ["icon", "drag"]], template: function RepeatDragHandleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-repeat", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemsReordered", function RepeatDragHandleExampleComponent_Template_nui_repeat_itemsReordered_0_listener($event) { return ctx.onItemsReordered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepeatDragHandleExampleComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RepeatDragHandleExampleComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.companies)("dragHandleTemplateRef", _r2)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], encapsulation: 2 });


/***/ }),

/***/ "1aNH":
/*!**********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-radio-selection-mode/repeat-radio-selection-mode.example.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: RepeatRadioSelectionModeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatRadioSelectionModeExampleComponent", function() { return RepeatRadioSelectionModeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RepeatRadioSelectionModeExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.color);
} }
class RepeatRadioSelectionModeExampleComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue` },
            { color: $localize `green` },
            { color: $localize `yellow` },
            { color: $localize `cyan` },
            { color: $localize `magenta` },
            { color: $localize `black` },
        ];
        this.selectedColors = [this.colors[1]];
    }
    onColorSelectionChange(selection) {
        this.selectedColors = selection;
    }
}
RepeatRadioSelectionModeExampleComponent.ɵfac = function RepeatRadioSelectionModeExampleComponent_Factory(t) { return new (t || RepeatRadioSelectionModeExampleComponent)(); };
RepeatRadioSelectionModeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatRadioSelectionModeExampleComponent, selectors: [["nui-repeat-radio-selection-mode-example"]], inputs: { colors: "colors" }, decls: 11, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_RADIO_SELECTION_MODE_REPEAT_RADIO_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selection:");
        i18n_0 = MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_RADIO_SELECTION_MODE_REPEAT_RADIO_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟4b13ecaace0a04d26567095f86b3c2079cf0c050␟1517966227002077718:Selection:`;
    } return [["repeatItemTemplate", ""], [1, "example"], [1, "flex-row-container"], [1, "flex-independent-row-item", "simple-label"], i18n_0, ["id", "nui-demo-radioselect-value", 1, "flex-independent-row-item"], ["id", "nui-demo-radio-repeat", "selectionMode", "radio", 3, "itemsSource", "selection", "repeatItemTemplateRef", "selectionChange"]]; }, template: function RepeatRadioSelectionModeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatRadioSelectionModeExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-repeat", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RepeatRadioSelectionModeExampleComponent_Template_nui_repeat_selectionChange_10_listener($event) { return ctx.onColorSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.selectedColors), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colors)("selection", ctx.selectedColors)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "3JjW":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-item/repeat-item.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <ul id=\"nui-repeat-item-example-repeat\">\n        <nui-repeat-item [clickable]=\"false\"\n                    [nowrap]=\"true\"\n                    [selected]=\"false\"\n                    *ngFor=\"let item of items\">\n            {{item}}\n        </nui-repeat-item>\n    </ul>\n</div>\n");

/***/ }),

/***/ "6p70":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-reorder-item-config/repeat-reorder-item-config-example.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from \"@angular/core\";\nimport {IItemsReorderedEvent, IRepeatItem, IRepeatItemConfig} from \"@nova-ui/bits\";\n\ninterface IRepeatColorItem extends IRepeatItem {\n    color: string;\n    description: string;\n}\n\n@Component({\n    selector: \"nui-repeat-reorder-config-example\",\n    templateUrl: \"./repeat-reorder-item-config-example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class RepeatReorderItemConfigExampleComponent {\n    public colors: IRepeatColorItem[] = [\n        {color: $localize `blue`, description: \"Should be draggable\"},\n        {color: $localize`green`, description: \"Disabled with callback\"},\n        {color: $localize`yellow`, disabled: true, description: \"Disabled with property\"},\n        {color: $localize`orange`, disabled: false, description: \"Enabled with property\"},\n    ];\n\n    public draggable: boolean = true;\n    public reorderable: boolean = true;\n\n    public itemConfig: IRepeatItemConfig<IRepeatColorItem> = {\n        isDraggable: item => item.color === $localize `blue` || item.color === $localize `orange`,\n        // Note: Using both cases to check if item is disabled, normally we should use only one method\n        isDisabled: item => item.color === $localize`green` || item.disabled,\n        trackBy: (index, item) => item.color,\n    };\n\n    public onItemsReordered(event: IItemsReorderedEvent<IRepeatColorItem>): void {\n        this.colors = event.currentState;\n    }\n}\n");

/***/ }),

/***/ "788R":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-preview/repeat-drag-preview.example.component.less ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n.nui-dnd-drag-preview:extend(.nui-dnd-preview) {\n    color: @nui-color-text-default;\n    padding: @nui-space-md;\n    text-align: center;\n}\n");

/***/ }),

/***/ "7MfL":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-handle/repeat-drag-handle.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-repeat [itemsSource]=\"companies\"\n            [dragHandleTemplateRef]=\"dragHandleTemplate\"\n            [repeatItemTemplateRef]=\"repeatItemTemplate\"\n            (itemsReordered)=\"onItemsReordered($event)\">\n</nui-repeat>\n\n<!-- Content template for each item -->\n<ng-template #repeatItemTemplate let-item=\"item\">\n    {{item}}\n</ng-template>\n\n<!-- Drag handle template -->\n<ng-template #dragHandleTemplate  let-item=\"item\">\n    <nui-icon icon=\"drag\"></nui-icon>\n</ng-template>\n");

/***/ }),

/***/ "9H/v":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-docs/repeat-docs.example.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <code>nui-repeat</code> is responsible for repeating the items provided in <code>itemSource</code>.\n</p>\n\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiRepeatModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    This example demonstrates how easy it is to create a simple list by repeating the items of provided datasource.<br/>\n    Simply pass an array of items to <code>itemsSource</code>, and also don't forget to set the\n    <code>repeatItemTemplateRef</code> with a template to render for each item.\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-simple\" exampleTitle=\"Basic Usage\">\n    <nui-repeat-simple-example></nui-repeat-simple-example>\n</nui-example-wrapper>\n\n<h2>Dragging</h2>\n<p>To enable the dragging of items in the <code>nui-repeat</code> list, just set the <code>draggable</code> input property to <code>true</code>.</p>\n<nui-example-wrapper filenamePrefix=\"repeat-drag-simple\" exampleTitle=\"Enabling Drag & Drop\">\n    <nui-repeat-drag-simple-example></nui-repeat-drag-simple-example>\n</nui-example-wrapper>\n\n<h2>Reordering</h2>\n<p>\n    To allow list items to be reordered, set the <code>reorderable</code> input property to\n    <code>true</code>. Bind to the <code>itemsReordered</code> output to receive sorting data\n    when an item is dragged to a new spot in the list. The payload for the event is an\n    <code><a href=\"../interfaces/IItemsReorderedEvent.html\" target=\"_blank\">IItemsReorderedEvent</a></code>\n    object.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Setting the <code>draggable</code> input to true with the <code>reorderable</code> input set to false\n    will disable reordering and only allow dragging items to <strong>other</strong> containers.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"repeat-reorder-simple\" exampleTitle=\"Reordering\">\n    <nui-repeat-reorder-simple-example></nui-repeat-reorder-simple-example>\n</nui-example-wrapper>\n\n<h2>Custom Drag Handle</h2>\n<p>In order to customize the handle by which an element can be dragged, you can specify the <code>dragHandleTemplateRef</code>.</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Providing the <code>dragHandleTemplateRef</code> template makes declaring the <code>draggable</code> input property optional\n    as it will automatically be set to <code>true</code>.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"repeat-drag-handle\" exampleTitle=\"Custom Drag Handle\">\n    <nui-repeat-drag-handle-example></nui-repeat-drag-handle-example>\n</nui-example-wrapper>\n\n<h2>Custom Drag Preview</h2>\n<p>\n    Once the user starts dragging an item, the preview DOM element is created as the last child of the body.\n    To have a custom CSS class for that element, you can specify the <code>dragPreviewClass</code> input\n    property. The default value for this input is <code>\"nui-dnd-preview\"</code>.\n</p>\n<p>\n    In order to customize the drag preview template, you can specify the\n    <code>dragPreviewTemplateRef</code> input.\n</p>\n<nui-message type=\"info\" [allowDismiss]=\"false\">\n    Providing the <code>dragPreviewTemplateRef</code> template makes declaring the <code>draggable</code> input property optional\n    as it will automatically be set to <code>true</code>.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"repeat-drag-preview\" exampleTitle=\"Custom Drag Preview\">\n    <nui-repeat-drag-preview-example></nui-repeat-drag-preview-example>\n</nui-example-wrapper>\n\n<h2>Repeat Item Customization</h2>\n<p>In order to customize the drag and drop behavior of any item in the repeat component you can provide\na configuration object containing callbacks for the provided functionality via the <code>itemConfig</code> input.</p>\n<div>\n    Customization is available via the following properties of <code>IRepeatItemConfig</code>:\n    <ul>\n        <li>\n            <code>{{getItemConfigKey(\"isDraggable\")}}</code> - Provide a callback to decide if the item should be draggable\n        </li>\n        <li>\n            <code>{{getItemConfigKey(\"isDisabled\")}}</code> - Provide a callback to decide if the item should be disabled\n        </li>\n        <li>\n            <code>{{getItemConfigKey(\"trackBy\")}}</code> - Provide a function that defines how to track changes for items in the iterable.\n        </li>\n    </ul>\n</div>\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    To be able to provide customized draggable behaviour per item, the main <code>draggable</code> input must be true.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"repeat-reorder-item-config\" exampleTitle=\"Drag & Drop - Per Item Customization\">\n    <nui-repeat-reorder-config-example></nui-repeat-reorder-config-example>\n</nui-example-wrapper>\n\n<h2>Multiple Selection Mode</h2>\n<p>\n    The <code>selectionMode</code>: <code>multi</code> repeats the items with a checkbox component, and allows the user to select\n    multiple items by clicking the provided checkboxes or by clicking on the row itself.\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-multi-selection\" exampleTitle=\"Multi selection repeat\">\n    <nui-repeat-multi-selection-example></nui-repeat-multi-selection-example>\n</nui-example-wrapper>\n\n<h2>Multiple Selection Mode with Disabled Items</h2>\n<p>\n    You can easily set the items being repeated to a disabled state. Make sure the <code>itemsSource</code> you provide contains property\n    <code>disabled</code>: <code>true</code> for each disabled item.\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-disabled-multi-selection\" exampleTitle=\"Disabled items in the repeat\">\n    <nui-repeat-disabled-multi-selection-example></nui-repeat-disabled-multi-selection-example>\n</nui-example-wrapper>\n\n<h2>Single Selection Mode with Item Highlight</h2>\n<p>\n    If you need to highlight clicked item without checkboxes and radio-button, you can just use\n    <code>selectionMode</code>: <code>single</code>\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-single-selection-mode\" exampleTitle=\"Highlight selected item\">\n    <nui-repeat-single-selection-mode-example></nui-repeat-single-selection-mode-example>\n</nui-example-wrapper>\n\n<h2>Single Selection Mode with Radio Buttons</h2>\n<p>\n    Use the <code>selectionMode</code>: <code>radio</code> mode to add radio buttons for each item and allow to select one of them.\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-radio-selection-mode\" exampleTitle=\"repeat with radio buttons\">\n    <nui-repeat-radio-selection-mode-example></nui-repeat-radio-selection-mode-example>\n</nui-example-wrapper>\n\n<nui-message type=\"warning\" [allowDismiss]=\"false\">\n    <strong>Pay Attention!</strong> The examples below may allow actions not common for the front-end world. Please\n    agree the use of the following examples with your UI\\UX team.\n</nui-message>\n\n<h2>Non-Required Selection Mode with Radio Buttons</h2>\n<p>\n    This example shows how to make a list with radio buttons that can be either checked on or checked off.\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-radio-with-non-required-selection-mode\" exampleTitle=\"Radio with Non Required Selection Mode\">\n    <nui-repeat-radio-with-non-required-selection-mode-example></nui-repeat-radio-with-non-required-selection-mode-example>\n</nui-example-wrapper>\n\n<h2>Required Single Selection Mode</h2>\n<p>\n    This example shows the single selection mode list where at least one item is always selected.\n</p>\n<nui-example-wrapper filenamePrefix=\"repeat-single-with-required-selection-mode\" exampleTitle=\"Required Single Selection Mode\">\n    <nui-repeat-single-with-required-selection-mode-example></nui-repeat-single-with-required-selection-mode-example>\n</nui-example-wrapper>\n\n<nui-message [allowDismiss]=\"false\" type=\"info\">\n    Pagination and Virtual Scroll aren't natively part of the <code>nui-repeat</code> component but the <a href=\"../additional-documentation/schematics/list.html\" target=\"_parent\">List Schematic documentation</a> provides examples on how to use them.\n</nui-message>\n");

/***/ }),

/***/ "9JmL":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-row\">\n    <nui-repeat class=\"app-virtual-scroll-list-repeat\"\n                selectionMode=\"none\"\n                [itemConfig]=\"itemConfig\"\n                [repeatItemTemplateRef]=\"listRepeatItemTemplate\"\n                [selection]=\"filteringState.repeat?.selectedItems\"\n                [itemsSource]=\"listItems$ | async\"\n                [virtualScroll]=\"true\"\n                [itemSize]=\"30\">\n    </nui-repeat>\n</div>\n\n<ng-template #listRepeatItemTemplate let-item=\"item\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div *ngFor=\"let field of item | keyvalue\" class=\"col-sm\">\n                {{field.value}}\n            </div>\n        </div>\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "A6BW":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-test/repeat-test.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-repeat-test\",\n    templateUrl: \"./repeat-test.component.html\",\n})\nexport class RepeatTestComponent {\n\n    public colors = [\n        { color: $localize`blue` },\n        { color: $localize`green` },\n        { color: $localize`yellow` },\n        { color: $localize`cyan` },\n        { color: $localize`magenta` },\n        { color: $localize`black` },\n    ];\n\n    public tabs = [\n        {\n            id: \"tab1\",\n            title: \"No Content\",\n        },\n        {\n            id: \"tab2\",\n            title: \"Repeat VScroll\",\n        },\n    ];\n    public currentTabId = this.tabs[0].id;\n\n    private colorIndex: number = 1;\n\n    public addNewColor(): void {\n        this.colors.push(\n            { color: `new color ${this.colorIndex++}` }\n        );\n    }\n\n    // using css display rule instead of *ngIf to test RepeatComponent's IntersectionObserver\n    // (*ngIf would instantiate the test component only when the tab is selected instead of immediately on page load)\n    public getTabDisplayMode = (tabId: string) => this.currentTabId === tabId ? \"block\" : \"none\";\n}\n");

/***/ }),

/***/ "B6UP":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-multi-selection/repeat-multi-selection.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-multi-selection-example\",\n    templateUrl: \"./repeat-multi-selection.example.component.html\",\n})\nexport class RepeatMultiSelectionExampleComponent {\n    public colors = [\n        { color: $localize `blue` },\n        { color: $localize `green` },\n        { color: $localize `yellow` },\n        { color: $localize `cyan` },\n        { color: $localize `magenta` },\n        { color: $localize `black` },\n    ];\n\n    public narrowRowSelectedColors = [\n        this.colors[2],\n        this.colors[5],\n    ];\n\n    constructor() { }\n\n    public onNarrowRowSelectionChange(selection: any) {\n        this.narrowRowSelectedColors = selection;\n    }\n}\n");

/***/ }),

/***/ "BvBn":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-single-selection-mode/repeat-single-selection-mode.example.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-single-selection-mode-example\",\n    templateUrl: \"./repeat-single-selection-mode.example.component.html\",\n    styleUrls: [\n        \"./repeat-single-selection-mode.example.less\",\n    ],\n})\nexport class RepeatSingleSelectionModeExampleComponent {\n    public people = [\n        { name: \"Jo Smith\", level: $localize `bronze`, status: $localize `active` },\n        { name: \"Claire Rogan\", level: $localize `gold`, status: $localize `active`, disabled: true },\n        { name: \"Declan McGregor\", level: $localize `platinum`, status: $localize `active` },\n        { name: \"Fergus O'Brien\", level: $localize `bronze`, status: $localize `inactive` },\n        { name: \"Catriona Kildare\", level: $localize `gold`, status: $localize `active` },\n    ];\n\n    public selectedPeople = [this.people[2]];\n\n    constructor() { }\n\n    public onPeopleSelectionChange(selection: any) {\n        this.selectedPeople = selection;\n    }\n}\n");

/***/ }),

/***/ "CZ6j":
/*!******************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-drag-preview/repeat-drag-preview.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RepeatDragPreviewExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatDragPreviewExampleComponent", function() { return RepeatDragPreviewExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");


function RepeatDragPreviewExampleComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, "\n");
} }
function RepeatDragPreviewExampleComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("This is the preview for ", item_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.preview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r5.name);
} }
class RepeatDragPreviewExampleComponent {
    constructor() {
        this.companies = [
            {
                name: "Adobe",
                preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/524px-Adobe_Systems_logo_and_wordmark.svg.png",
            },
            {
                name: "IBM",
                preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png",
            },
            {
                name: "Dell",
                preview: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png",
            },
            {
                name: "Microsoft",
                preview: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
            },
        ];
    }
    onItemsReordered(event) {
        // update items according to the new order
        this.companies = event.currentState;
    }
}
RepeatDragPreviewExampleComponent.ɵfac = function RepeatDragPreviewExampleComponent_Factory(t) { return new (t || RepeatDragPreviewExampleComponent)(); };
RepeatDragPreviewExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatDragPreviewExampleComponent, selectors: [["nui-repeat-drag-preview-example"]], decls: 5, vars: 3, consts: [["dragPreviewClass", "nui-dnd-drag-preview", 3, "itemsSource", "dragPreviewTemplateRef", "repeatItemTemplateRef", "itemsReordered"], ["repeatItemTemplate", ""], ["dragPreviewTemplate", ""], ["width", "100", 3, "src", "alt"]], template: function RepeatDragPreviewExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-repeat", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemsReordered", function RepeatDragPreviewExampleComponent_Template_nui_repeat_itemsReordered_0_listener($event) { return ctx.onItemsReordered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepeatDragPreviewExampleComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RepeatDragPreviewExampleComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.companies)("dragPreviewTemplateRef", _r2)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], styles: [".nui-dnd-drag-preview {\n  border: 1px #d9d9d9 solid;background: #f2f2f2;z-index: 1;box-sizing: border-box;box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.nui-dnd-drag-preview {\n  color: #111;\n  padding: 15px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdC1kcmFnLXByZXZpZXcuZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2RuZC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDZ0JJLHlCQUFBLENBWEEsbUJBQUEsQ0FJQSxVQUFBLENBRUEsc0JBQUEsQ0FDQSx1RUFBQTtBRGJKO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoicmVwZWF0LWRyYWctcHJldmlldy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbi5udWktZG5kLWRyYWctcHJldmlldzpleHRlbmQoLm51aS1kbmQtcHJldmlldykge1xuICAgIGNvbG9yOiBAbnVpLWNvbG9yLXRleHQtZGVmYXVsdDtcbiAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLW1kO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG5AZG5kLWl0ZW0tYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbkBkbmQtem9uZS1ib3JkZXItd2lkdGg6IEBudWktbGluZS1mYXQ7XG5AZG5kLXpvbmUtaWNvbi1zaXplOiA0MHB4O1xuXG4vKiogZHJhZ2dhYmxlIGl0ZW1zIHN0YXRlcyAqL1xuLm51aS1kbmQtaG92ZXItc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudC1ob3Zlcjtcbn1cblxuLm51aS1kbmQtcmFpc2VkLXN0YXRlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1lbGV2YXRlZDtcbn1cblxuLm51aS1kbmQtcHJldmlldyB7XG4gICAgYm9yZGVyOiBAZG5kLWl0ZW0tYm9yZGVyLXdpZHRoIEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG59XG5cbi5udWktZG5kLWRyb3B6b25lIHtcbiAgICAvKiogZHJvcHpvbmUgc3RhdGVzICovXG4gICAgJi5udWktZG5kLWRyb3B6b25lLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggZGFzaGVkIEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93biAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1hbGxvd2VkIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggc29saWQgQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWFjdGl2ZTtcbiAgICB9O1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1ub3QtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlO1xuICAgIH1cblxuICAgIC8qKiBvdGhlciBjdXN0b216aWF0aW9ucyAqL1xuICAgIC5jZW50ZXJlZC1vdmVybGF5LCAubnVpLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIC50cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB3aWR0aDogQGRuZC16b25lLWljb24tc2l6ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQFRPRE8gZml4L3JlbW92ZSB0aGlzIGhhY2tpbmcgc3R5bGUgb25jZSBudWktaWNvbiBnZXRzIHByb3BlciBzdXBwb3J0IGZvciBzaXplLCBiZyBjb2xvciBhbmQgZmlsbCBjb2xvclxuICAgIC5kcm9wLWNpcmNsZXtcbiAgICAgICAgJi1wZXJtYW5lbnQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hbGxvd2VkIHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IEBudWktY29sb3ItaWNvbi1pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1ub3QtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ "D99s":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-docs/repeat-docs.example.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from \"@angular/core\";\nimport { IRepeatItemConfig, RepeatComponent } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-repeat-example\",\n    templateUrl: \"./repeat-docs.example.component.html\",\n})\nexport class RepeatExampleComponent {\n    getItemConfigKey(key: keyof IRepeatItemConfig): string {\n        return key;\n    }\n\n    getRepeatPropKey(key: keyof RepeatComponent): string {\n        return key;\n    }\n}\n");

/***/ }),

/***/ "E/+A":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-handle/repeat-drag-handle.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from \"@angular/core\";\nimport {IItemsReorderedEvent} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-repeat-drag-handle-example\",\n    templateUrl: \"./repeat-drag-handle.example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class RepeatDragHandleExampleComponent {\n    public companies: string[] = [\"Adobe\", \"IBM\", \"Dell\", \"Microsoft\"];\n\n    public onItemsReordered(event: IItemsReorderedEvent<string>): void {\n        // update items according to the new order\n        this.companies = event.currentState;\n    }\n}\n");

/***/ }),

/***/ "Ej2c":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild } from \"@angular/core\";\nimport {\n    DataSourceService, IFilteringOutputs, INovaFilteringOutputs, IRepeatItemConfig, RepeatComponent, VirtualViewportManager\n} from \"@nova-ui/bits\";\nimport { BehaviorSubject, Subject } from \"rxjs\";\nimport { filter, switchMap, takeUntil, tap } from \"rxjs/operators\";\n\nimport { RESULTS_PER_PAGE } from \"./repeat-virtual-scroll-data\";\nimport { RepeatVirtualScrollDataSource } from \"./repeat-virtual-scroll-data-source\";\nimport { IServer } from \"./types\";\n\n@Component({\n    selector: \"repeat-virtual-scroll\",\n    templateUrl: \"./repeat-virtual-scroll.component.html\",\n    styleUrls: [\"./repeat-virtual-scroll.component.less\"],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        VirtualViewportManager,\n        {\n            provide: DataSourceService,\n            useClass: RepeatVirtualScrollDataSource,\n        },\n    ],\n})\nexport class RepeatVirtualScrollComponent implements OnInit, AfterViewInit, OnDestroy {\n    public listItems$ = new BehaviorSubject<IServer[]>([]);\n\n    public filteringState: INovaFilteringOutputs = {};\n    public isBusy = false;\n\n    public totalItems: number = 0;\n\n    public itemConfig: IRepeatItemConfig<IServer> = {\n        trackBy: (index, item) => item?.name,\n    };\n\n    @ViewChild(RepeatComponent) repeat: RepeatComponent;\n\n    private destroy$ = new Subject();\n\n    constructor(\n        @Inject(DataSourceService) private dataSource: RepeatVirtualScrollDataSource<IServer>,\n        private changeDetection: ChangeDetectorRef,\n        private viewportManager: VirtualViewportManager\n    ) { }\n\n    public ngOnInit() {\n        this.dataSource.busy.pipe(\n            tap(val => {\n                this.isBusy = val;\n                this.changeDetection.detectChanges();\n            }),\n            takeUntil(this.destroy$)\n        ).subscribe();\n    }\n\n    public async ngAfterViewInit() {\n        this.dataSource.registerComponent({\n            virtualScroll: { componentInstance: this.viewportManager },\n            repeat: { componentInstance: this.repeat },\n        });\n\n        this.viewportManager\n            // Note: Initializing viewportManager with the repeat's CDK Viewport Ref\n            .setViewport(this.repeat.viewportRef)\n\n            // Note: Initializing the stream with the desired page size, based on which\n            // ViewportManager will perform the observations and will emit\n            // distinct ranges with step equal to provided pageSize\n            .observeNextPage$({ pageSize: RESULTS_PER_PAGE })\n            .pipe(\n                // Since we know the total number of items we can stop the stream when dataset end is reached\n                // Otherwise we can let VirtualViewportManager to stop when last received page range will not match requested range\n                filter(() => {\n                    const items = this.listItems$.getValue();\n                    return !items.length || items.length < this.totalItems;\n                }),\n                tap(() => this.applyFilters(false)),\n                // Note: Using the same stream to subscribe to the outputsSubject and update the items list\n                switchMap(() => this.dataSource.outputsSubject.pipe(\n                    tap((data: IFilteringOutputs) => {\n                        // update the list of items to be rendered\n                        const items = data.repeat?.itemsSource || [];\n                        this.totalItems = data.repeat?.itemsSource.length;\n\n                        // after receiving data we need to append it to our previous fetched results\n                        this.listItems$.next(this.listItems$.getValue().concat(items));\n                        this.changeDetection.detectChanges();\n                    })\n                )\n                ),\n                takeUntil(this.destroy$)\n            ).subscribe();\n    }\n\n    public ngOnDestroy() {\n        this.destroy$.next();\n        this.destroy$.complete();\n    }\n\n    public async applyFilters(resetVirtualScroll: boolean = true) {\n        if (resetVirtualScroll) {\n            // it is important to reset viewportManager to start page\n            // so that the data source performs the search with 1st page\n            this.viewportManager.reset({ emitFirstPage: false });\n        }\n\n        // Every new search request or filter change should\n        // clear the cache in order to correctly display a new set of data\n        const filters = this.dataSource.getFilters();\n        const reset = this.dataSource.computeFiltersChange(filters);\n        if (reset || filters.virtualScroll?.value.start === 0) {\n            this.listItems$.next([]);\n            this.changeDetection.detectChanges();\n        }\n\n        await this.dataSource.applyFilters();\n    }\n}\n");

/***/ }),

/***/ "F5ez":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/index.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./repeat-docs/repeat-docs.example.component\";\nexport * from \"./repeat-simple/repeat-simple.example.component\";\nexport * from \"./repeat-multi-selection/repeat-multi-selection.example.component\";\nexport * from \"./repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component\";\nexport * from \"./repeat-single-selection-mode/repeat-single-selection-mode.example.component\";\nexport * from \"./repeat-radio-selection-mode/repeat-radio-selection-mode.example.component\";\nexport * from \"./repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component\";\nexport * from \"./repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component\";\nexport * from \"./repeat-item/repeat-item.example.component\";\nexport * from \"./repeat-reorder-simple/repeat-reorder-simple-example.component\";\nexport * from \"./repeat-drag-simple/repeat-drag-simple.example.component\";\nexport * from \"./repeat-drag-handle/repeat-drag-handle.example.component\";\nexport * from \"./repeat-drag-preview/repeat-drag-preview.example.component\";\nexport * from \"./repeat-reorder-item-config/repeat-reorder-item-config-example.component\";\nexport * from \"./repeat-virtual-scroll/repeat-virtual-scroll.component\";\nexport * from \"./repeat-test/repeat-test.component\";\n");

/***/ }),

/***/ "FU6U":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-simple/repeat-drag-simple.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from \"@angular/core\";\nimport {IItemsReorderedEvent} from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-repeat-drag-simple-example\",\n    templateUrl: \"./repeat-drag-simple.example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class RepeatDragSimpleExampleComponent {\n    public companies: string[] = [\"Adobe\", \"IBM\", \"Dell\", \"Microsoft\"];\n\n    public draggable: boolean = true;\n\n    public onItemsReordered(event: IItemsReorderedEvent<string>): void {\n        // update items according to the new order\n        this.companies = event.currentState;\n    }\n}\n");

/***/ }),

/***/ "LU3E":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component.ts ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-radio-with-non-required-selection-mode-example\",\n    templateUrl: \"./repeat-radio-with-non-required-selection-mode.example.component.html\",\n})\nexport class RepeatRadioWithNonRequiredSelectionModeExampleComponent {\n    public colors = [\n        { color: $localize `blue`, disabled: true},\n        { color: $localize `green`},\n        { color: $localize `yellow`, disabled: true},\n        { color: $localize `cyan`},\n        { color: $localize `magenta`},\n        { color: $localize `black`},\n    ];\n\n    public selectedColors = [this.colors[1]];\n    public selectedMode: string = \"radioWithNonRequiredSelection\";\n\n    constructor() { }\n\n    public onColorSelectionChange(selection: any) {\n        this.selectedColors = selection;\n    }\n}\n");

/***/ }),

/***/ "MMC6":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"example\">\n    <div class=\"flex-row-container\">\n        <div class=\"flex-independent-row-item simple-label\" i18n>Selection:</div>\n        <span class=\"flex-independent-row-item\">{{selectedColors | json}}</span>\n    </div>\n\n    <br>\n\n    <div>\n        <nui-repeat [itemsSource]=\"colors\"\n                  [selection]=\"selectedColors\"\n                  [selectionMode]=\"selectedMode\"\n                  (selectionChange)=\"onColorSelectionChange($event)\"\n                  [repeatItemTemplateRef]=\"repeatItemTemplate\">\n        </nui-repeat>\n    </div>\n</div>\n");

/***/ }),

/***/ "MtRR":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-simple/repeat-simple.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-simple-example\",\n    templateUrl: \"./repeat-simple.example.component.html\",\n})\nexport class RepeatSimpleExampleComponent {\npublic colors = [\n        { color: $localize `blue` },\n        { color: $localize `green` },\n        { color: $localize `yellow` },\n        { color: $localize `cyan` },\n        { color: $localize `magenta` },\n        { color: $localize `black` },\n    ];\n\n    constructor() { }\n}\n");

/***/ }),

/***/ "O4t4":
/*!**********************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-reorder-simple/repeat-reorder-simple-example.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: RepeatReorderSimpleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatReorderSimpleExampleComponent", function() { return RepeatReorderSimpleExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RepeatReorderSimpleExampleComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2, "\n");
} }
class RepeatReorderSimpleExampleComponent {
    constructor() {
        this.companies = ["Adobe", "IBM", "Dell", "Microsoft"];
        this.draggable = true;
        this.reorderable = true;
    }
    onItemsReordered(event) {
        // update items according to the new order
        this.companies = event.currentState;
        // copy all event proprieties except the CdkDrag & CdkDropList references
        const { item, dropListRef } = event, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(event, ["item", "dropListRef"]);
        this.droppedEventData = rest;
        console.log(event);
    }
}
RepeatReorderSimpleExampleComponent.ɵfac = function RepeatReorderSimpleExampleComponent_Factory(t) { return new (t || RepeatReorderSimpleExampleComponent)(); };
RepeatReorderSimpleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RepeatReorderSimpleExampleComponent, selectors: [["nui-repeat-reorder-simple-example"]], decls: 16, vars: 9, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7787744411173974049$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_SIMPLE_REPEAT_REORDER_SIMPLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Draggable");
        i18n_0 = MSG_EXTERNAL_7787744411173974049$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_SIMPLE_REPEAT_REORDER_SIMPLE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟1255f129e09ec6d9599c2a1bd648672b29f8b11c␟7787744411173974049:Draggable`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4360297148371206752$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_SIMPLE_REPEAT_REORDER_SIMPLE_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Reorderable");
        i18n_2 = MSG_EXTERNAL_4360297148371206752$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_SIMPLE_REPEAT_REORDER_SIMPLE_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟df32e094404870ff0a70e9591fade8cf965325e9␟4360297148371206752:Reorderable`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4154827299995731954$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_SIMPLE_REPEAT_REORDER_SIMPLE_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Event data");
        i18n_4 = MSG_EXTERNAL_4154827299995731954$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_SIMPLE_REPEAT_REORDER_SIMPLE_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟949e293c4689f7a8364feb955bd298c3f8c421cf␟4154827299995731954:Event data`;
    } return [[1, "d-flex"], [1, "p-2", 3, "value", "valueChange"], i18n_0, i18n_2, [3, "itemsSource", "repeatItemTemplateRef", "draggable", "reorderable", "itemsReordered", "draggableChange", "reorderableChange"], [1, "d-flex", "m-2"], i18n_4, [1, "ml-1"], ["repeatItemTemplate", ""]]; }, template: function RepeatReorderSimpleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RepeatReorderSimpleExampleComponent_Template_nui_switch_valueChange_1_listener($event) { return ctx.draggable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nui-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function RepeatReorderSimpleExampleComponent_Template_nui_switch_valueChange_3_listener($event) { return ctx.reorderable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nui-repeat", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemsReordered", function RepeatReorderSimpleExampleComponent_Template_nui_repeat_itemsReordered_5_listener($event) { return ctx.onItemsReordered($event); })("draggableChange", function RepeatReorderSimpleExampleComponent_Template_nui_repeat_draggableChange_5_listener($event) { return ctx.draggable = $event; })("reorderableChange", function RepeatReorderSimpleExampleComponent_Template_nui_repeat_reorderableChange_5_listener($event) { return ctx.reorderable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RepeatReorderSimpleExampleComponent_ng_template_14_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.draggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.reorderable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.companies)("repeatItemTemplateRef", _r0)("draggable", ctx.draggable)("reorderable", ctx.reorderable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.droppedEventData ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 7, ctx.droppedEventData) : "N/A");
    } }, directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_2__["SwitchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_3__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "PDB5":
/*!**************************************************!*\
  !*** ./demo/src/components/demo/repeat/index.ts ***!
  \**************************************************/
/*! exports provided: RepeatExampleComponent, RepeatSimpleExampleComponent, RepeatMultiSelectionExampleComponent, RepeatDisabledMultiSelectionExampleComponent, RepeatSingleSelectionModeExampleComponent, RepeatRadioSelectionModeExampleComponent, RepeatRadioWithNonRequiredSelectionModeExampleComponent, RepeatSingleWithRequiredSelectionModeExampleComponent, RepeatItemExampleComponent, RepeatReorderSimpleExampleComponent, RepeatDragSimpleExampleComponent, RepeatDragHandleExampleComponent, RepeatDragPreviewExampleComponent, RepeatReorderItemConfigExampleComponent, RepeatVirtualScrollComponent, RepeatTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeat_docs_repeat_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeat-docs/repeat-docs.example.component */ "U/hz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatExampleComponent", function() { return _repeat_docs_repeat_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["RepeatExampleComponent"]; });

/* harmony import */ var _repeat_simple_repeat_simple_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeat-simple/repeat-simple.example.component */ "UUD4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatSimpleExampleComponent", function() { return _repeat_simple_repeat_simple_example_component__WEBPACK_IMPORTED_MODULE_1__["RepeatSimpleExampleComponent"]; });

/* harmony import */ var _repeat_multi_selection_repeat_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repeat-multi-selection/repeat-multi-selection.example.component */ "Xav+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatMultiSelectionExampleComponent", function() { return _repeat_multi_selection_repeat_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_2__["RepeatMultiSelectionExampleComponent"]; });

/* harmony import */ var _repeat_disabled_multi_selection_repeat_disabled_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component */ "PWlR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatDisabledMultiSelectionExampleComponent", function() { return _repeat_disabled_multi_selection_repeat_disabled_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_3__["RepeatDisabledMultiSelectionExampleComponent"]; });

/* harmony import */ var _repeat_single_selection_mode_repeat_single_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repeat-single-selection-mode/repeat-single-selection-mode.example.component */ "umK5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatSingleSelectionModeExampleComponent", function() { return _repeat_single_selection_mode_repeat_single_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_4__["RepeatSingleSelectionModeExampleComponent"]; });

/* harmony import */ var _repeat_radio_selection_mode_repeat_radio_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repeat-radio-selection-mode/repeat-radio-selection-mode.example.component */ "1aNH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatRadioSelectionModeExampleComponent", function() { return _repeat_radio_selection_mode_repeat_radio_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_5__["RepeatRadioSelectionModeExampleComponent"]; });

/* harmony import */ var _repeat_radio_with_non_required_selection_mode_repeat_radio_with_non_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component */ "ubTL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatRadioWithNonRequiredSelectionModeExampleComponent", function() { return _repeat_radio_with_non_required_selection_mode_repeat_radio_with_non_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_6__["RepeatRadioWithNonRequiredSelectionModeExampleComponent"]; });

/* harmony import */ var _repeat_single_with_required_selection_mode_repeat_single_with_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component */ "PEhs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatSingleWithRequiredSelectionModeExampleComponent", function() { return _repeat_single_with_required_selection_mode_repeat_single_with_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_7__["RepeatSingleWithRequiredSelectionModeExampleComponent"]; });

/* harmony import */ var _repeat_item_repeat_item_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repeat-item/repeat-item.example.component */ "ykwr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatItemExampleComponent", function() { return _repeat_item_repeat_item_example_component__WEBPACK_IMPORTED_MODULE_8__["RepeatItemExampleComponent"]; });

/* harmony import */ var _repeat_reorder_simple_repeat_reorder_simple_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repeat-reorder-simple/repeat-reorder-simple-example.component */ "O4t4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatReorderSimpleExampleComponent", function() { return _repeat_reorder_simple_repeat_reorder_simple_example_component__WEBPACK_IMPORTED_MODULE_9__["RepeatReorderSimpleExampleComponent"]; });

/* harmony import */ var _repeat_drag_simple_repeat_drag_simple_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./repeat-drag-simple/repeat-drag-simple.example.component */ "Yob6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatDragSimpleExampleComponent", function() { return _repeat_drag_simple_repeat_drag_simple_example_component__WEBPACK_IMPORTED_MODULE_10__["RepeatDragSimpleExampleComponent"]; });

/* harmony import */ var _repeat_drag_handle_repeat_drag_handle_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./repeat-drag-handle/repeat-drag-handle.example.component */ "0xLF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatDragHandleExampleComponent", function() { return _repeat_drag_handle_repeat_drag_handle_example_component__WEBPACK_IMPORTED_MODULE_11__["RepeatDragHandleExampleComponent"]; });

/* harmony import */ var _repeat_drag_preview_repeat_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./repeat-drag-preview/repeat-drag-preview.example.component */ "CZ6j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatDragPreviewExampleComponent", function() { return _repeat_drag_preview_repeat_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_12__["RepeatDragPreviewExampleComponent"]; });

/* harmony import */ var _repeat_reorder_item_config_repeat_reorder_item_config_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./repeat-reorder-item-config/repeat-reorder-item-config-example.component */ "jhpo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatReorderItemConfigExampleComponent", function() { return _repeat_reorder_item_config_repeat_reorder_item_config_example_component__WEBPACK_IMPORTED_MODULE_13__["RepeatReorderItemConfigExampleComponent"]; });

/* harmony import */ var _repeat_virtual_scroll_repeat_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./repeat-virtual-scroll/repeat-virtual-scroll.component */ "nOuR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatVirtualScrollComponent", function() { return _repeat_virtual_scroll_repeat_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_14__["RepeatVirtualScrollComponent"]; });

/* harmony import */ var _repeat_test_repeat_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./repeat-test/repeat-test.component */ "pfJu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepeatTestComponent", function() { return _repeat_test_repeat_test_component__WEBPACK_IMPORTED_MODULE_15__["RepeatTestComponent"]; });



















/***/ }),

/***/ "PEhs":
/*!****************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: RepeatSingleWithRequiredSelectionModeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatSingleWithRequiredSelectionModeExampleComponent", function() { return RepeatSingleWithRequiredSelectionModeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RepeatSingleWithRequiredSelectionModeExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.color);
} }
class RepeatSingleWithRequiredSelectionModeExampleComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue` },
            { color: $localize `green` },
            { color: $localize `yellow` },
            { color: $localize `cyan` },
            { color: $localize `magenta` },
            { color: $localize `black` },
        ];
        this.selectedColors = [this.colors[1]];
        this.selectedMode = "singleWithRequiredSelection";
    }
    onColorSelectionChange(selection) {
        this.selectedColors = selection;
    }
}
RepeatSingleWithRequiredSelectionModeExampleComponent.ɵfac = function RepeatSingleWithRequiredSelectionModeExampleComponent_Factory(t) { return new (t || RepeatSingleWithRequiredSelectionModeExampleComponent)(); };
RepeatSingleWithRequiredSelectionModeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatSingleWithRequiredSelectionModeExampleComponent, selectors: [["nui-repeat-single-with-required-selection-mode-example"]], decls: 12, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_SINGLE_WITH_REQUIRED_SELECTION_MODE_REPEAT_SINGLE_WITH_REQUIRED_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selection:");
        i18n_0 = MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_SINGLE_WITH_REQUIRED_SELECTION_MODE_REPEAT_SINGLE_WITH_REQUIRED_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟4b13ecaace0a04d26567095f86b3c2079cf0c050␟1517966227002077718:Selection:`;
    } return [["repeatItemTemplate", ""], [1, "example"], [1, "flex-row-container"], [1, "flex-independent-row-item", "simple-label"], i18n_0, [1, "flex-independent-row-item"], [3, "itemsSource", "selection", "selectionMode", "repeatItemTemplateRef", "selectionChange"]]; }, template: function RepeatSingleWithRequiredSelectionModeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatSingleWithRequiredSelectionModeExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-repeat", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RepeatSingleWithRequiredSelectionModeExampleComponent_Template_nui_repeat_selectionChange_11_listener($event) { return ctx.onColorSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.selectedColors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colors)("selection", ctx.selectedColors)("selectionMode", ctx.selectedMode)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "PWlR":
/*!******************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: RepeatDisabledMultiSelectionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatDisabledMultiSelectionExampleComponent", function() { return RepeatDisabledMultiSelectionExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");



function RepeatDisabledMultiSelectionExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-box ", item_r4.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", item_r4.disabled ? "nui-text-secondary--disabled" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.color, " ");
} }
function RepeatDisabledMultiSelectionExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepeatDisabledMultiSelectionExampleComponent_ng_template_2_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.handleClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepeatDisabledMultiSelectionExampleComponent_ng_template_2_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", item_r5.disabled ? "" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", item_r5.disabled ? "" : null);
} }
class RepeatDisabledMultiSelectionExampleComponent {
    constructor() {
        this.colorsWithIsDisabledProperty = [
            { color: $localize `blue`, disabled: true },
            { color: $localize `green`, disabled: false },
            { color: $localize `yellow` },
            { color: $localize `cyan` },
            { color: $localize `magenta`, disabled: true },
            { color: $localize `black` },
        ];
        this.selectedColorsWithIsDisabledProperty = [
            this.colorsWithIsDisabledProperty[0],
            this.colorsWithIsDisabledProperty[5],
        ];
    }
    handleClick(event) {
        event.stopPropagation();
    }
}
RepeatDisabledMultiSelectionExampleComponent.ɵfac = function RepeatDisabledMultiSelectionExampleComponent_Factory(t) { return new (t || RepeatDisabledMultiSelectionExampleComponent)(); };
RepeatDisabledMultiSelectionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatDisabledMultiSelectionExampleComponent, selectors: [["nui-repeat-disabled-multi-selection-example"]], decls: 6, vars: 4, consts: [["repeatItemColorBoxTemplate", ""], ["actionsContent", ""], [1, "example"], ["id", "nui-demo-multi-repeat-disabled-items", "selectionMode", "multi", 3, "itemsSource", "selection", "repeatItemTemplateRef", "actionsTemplateRef"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "menu", 3, "click"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "caret-right", 3, "click"]], template: function RepeatDisabledMultiSelectionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatDisabledMultiSelectionExampleComponent_ng_template_0_Template, 3, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepeatDisabledMultiSelectionExampleComponent_ng_template_2_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nui-repeat", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colorsWithIsDisabledProperty)("selection", ctx.selectedColorsWithIsDisabledProperty)("repeatItemTemplateRef", _r0)("actionsTemplateRef", _r2);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], encapsulation: 2 });


/***/ }),

/***/ "Pa4q":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-reorder-item-config/repeat-reorder-item-config-example.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n    <nui-switch class=\"p-2\" [(value)]=\"draggable\" i18n>Dragging</nui-switch>\n    <nui-switch class=\"p-2\" [(value)]=\"reorderable\" i18n>Reordering</nui-switch>\n</div>\n<nui-repeat (itemsReordered)=\"onItemsReordered($event)\"\n            [itemsSource]=\"colors\"\n            [repeatItemTemplateRef]=\"repeatItemTemplate\"\n            [itemConfig]=\"itemConfig\"\n            [(draggable)]=\"draggable\"\n            [(reorderable)]=\"reorderable\">\n</nui-repeat>\n\n<!-- Content template for each item -->\n<ng-template #repeatItemTemplate let-item=\"item\">\n    <div [class.nui-text-secondary--disabled]=\"itemConfig.isDisabled(item)\">\n        {{item.color}} - {{item.description}}\n    </div>\n</ng-template>\n");

/***/ }),

/***/ "Ph0z":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-single-with-required-selection-mode-example\",\n    templateUrl: \"./repeat-single-with-required-selection-mode.example.component.html\",\n})\nexport class RepeatSingleWithRequiredSelectionModeExampleComponent {\n    public colors = [\n        { color: $localize `blue`},\n        { color: $localize `green`},\n        { color: $localize `yellow`},\n        { color: $localize `cyan`},\n        { color: $localize `magenta`},\n        { color: $localize `black`},\n    ];\n\n    public selectedColors = [this.colors[1]];\n    public selectedMode: string = \"singleWithRequiredSelection\";\n\n    constructor() { }\n\n    public onColorSelectionChange(selection: any) {\n        this.selectedColors = selection;\n    }\n}\n");

/***/ }),

/***/ "STWZ":
/*!*********************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll-data.ts ***!
  \*********************************************************************************************/
/*! exports provided: RESULTS_PER_PAGE, DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULTS_PER_PAGE", function() { return RESULTS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const RESULTS_PER_PAGE = 20;
const DATA = [
    { "location": "New Jermaine", "name": "TURCO-SVR-ET9695", "status": "Down" },
    { "location": "Kyiv", "name": "DAUGH-LT-SED9492", "status": "Active" },
    { "location": "Archton", "name": "GLOVE-LT-QUI9554", "status": "Active" },
    { "location": "South Levi", "name": "HIRTH-LT-MOLE9968", "status": "Active" },
    { "location": "Austin", "name": "KUB-LT-ODIO9015", "status": "Active" },
    { "location": "Taylormouth", "name": "MAYER-SVR-DOLO9518", "status": "Down" },
    { "location": "Brno", "name": "BORER-LT-OCCA9986", "status": "Active" },
    { "location": "North Bert", "name": "ERNSE-SVR-EARU9344", "status": "Down" },
    { "location": "Kuhlmanhaven", "name": "HELLE-LT-QUIA9115", "status": "Active" },
    { "location": "Austin", "name": "BROWN-SVR-EUM9158", "status": "Active" },
    { "location": "East Keatonborough", "name": "VEUM-LT-EXER9236", "status": "Active" },
    { "location": "Lake Kailee", "name": "WINDL-LT-QUI9139", "status": "Active" },
    { "location": "New Haydenhaven", "name": "ONDRI-SVR-REIC9243", "status": "Down" },
    { "location": "Esmeraldaborough", "name": "SHANA-SVR-NEQU9387", "status": "Down" },
    { "location": "O'Reillyton", "name": "HERMA-LT-VITA9273", "status": "Down" },
    { "location": "Bucharest", "name": "D'AMO-SVR-DOLO9199", "status": "Down" },
    { "location": "New Ilafort", "name": "CUMME-SVR-IPSU9949", "status": "Active" },
    { "location": "Bucharest", "name": "O'CON-LT-DELE9341", "status": "Active" },
    { "location": "Austin", "name": "HESSE-LT-ET9816", "status": "Down" },
    { "location": "Declanburgh", "name": "LAKIN-SVR-NON9503", "status": "Active" },
    { "location": "Dorrismouth", "name": "ZBONC-SVR-MAXI9692", "status": "Active" },
    { "location": "Nitzscheton", "name": "FADEL-SVR-ASSU9183", "status": "Active" },
    { "location": "North Arielmouth", "name": "WATSI-LT-QUIA9919", "status": "Down" },
    { "location": "Austin", "name": "CONRO-LT-ET9222", "status": "Active" },
    { "location": "Kyiv", "name": "HUELS-LT-TEMP9463", "status": "Down" },
    { "location": "Gulgowskiside", "name": "ANDER-LT-ET9545", "status": "Down" },
    { "location": "West Estashire", "name": "BRAUN-LT-BEAT9513", "status": "Active" },
    { "location": "Lailaland", "name": "JASKO-SVR-NATU9644", "status": "Active" },
    { "location": "South Luigi", "name": "SIMON-LT-VOLU9900", "status": "Down" },
    { "location": "Bogisichtown", "name": "HERMI-SVR-TEMP9404", "status": "Active" },
    { "location": "Kyiv", "name": "RATKE-SVR-EST9459", "status": "Active" },
    { "location": "Corkeryport", "name": "REICH-LT-ET9322", "status": "Active" },
    { "location": "South Katarinaview", "name": "TOWNE-SVR-QUIB9469", "status": "Down" },
];


/***/ }),

/***/ "Sm2L":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-virtual-scroll/types.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { IFilter, INovaFilters } from \"@nova-ui/bits\";\n\n// main server model being received from the backend\nexport interface IServer {\n    location: string;\n    name: string;\n    status: string;\n}\n\n// implement custom filters\nexport interface IServerFilters extends INovaFilters {\n    location?: IFilter<string>;\n    name?: IFilter<string>;\n    status?: IFilter<string>;\n}\n\n// collection of items that we've transformed from the backend API\nexport interface IServersCollection {\n    items: IServer[];\n}\n");

/***/ }),

/***/ "U/hz":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-docs/repeat-docs.example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RepeatExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatExampleComponent", function() { return RepeatExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _repeat_simple_repeat_simple_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repeat-simple/repeat-simple.example.component */ "UUD4");
/* harmony import */ var _repeat_drag_simple_repeat_drag_simple_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repeat-drag-simple/repeat-drag-simple.example.component */ "Yob6");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _repeat_reorder_simple_repeat_reorder_simple_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repeat-reorder-simple/repeat-reorder-simple-example.component */ "O4t4");
/* harmony import */ var _repeat_drag_handle_repeat_drag_handle_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../repeat-drag-handle/repeat-drag-handle.example.component */ "0xLF");
/* harmony import */ var _repeat_drag_preview_repeat_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../repeat-drag-preview/repeat-drag-preview.example.component */ "CZ6j");
/* harmony import */ var _repeat_reorder_item_config_repeat_reorder_item_config_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../repeat-reorder-item-config/repeat-reorder-item-config-example.component */ "jhpo");
/* harmony import */ var _repeat_multi_selection_repeat_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../repeat-multi-selection/repeat-multi-selection.example.component */ "Xav+");
/* harmony import */ var _repeat_disabled_multi_selection_repeat_disabled_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component */ "PWlR");
/* harmony import */ var _repeat_single_selection_mode_repeat_single_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../repeat-single-selection-mode/repeat-single-selection-mode.example.component */ "umK5");
/* harmony import */ var _repeat_radio_selection_mode_repeat_radio_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../repeat-radio-selection-mode/repeat-radio-selection-mode.example.component */ "1aNH");
/* harmony import */ var _repeat_radio_with_non_required_selection_mode_repeat_radio_with_non_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component */ "ubTL");
/* harmony import */ var _repeat_single_with_required_selection_mode_repeat_single_with_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component */ "PEhs");















class RepeatExampleComponent {
    getItemConfigKey(key) {
        return key;
    }
    getRepeatPropKey(key) {
        return key;
    }
}
RepeatExampleComponent.ɵfac = function RepeatExampleComponent_Factory(t) { return new (t || RepeatExampleComponent)(); };
RepeatExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatExampleComponent, selectors: [["nui-repeat-example"]], decls: 226, vars: 9, consts: [["filenamePrefix", "repeat-simple", "exampleTitle", "Basic Usage"], ["filenamePrefix", "repeat-drag-simple", "exampleTitle", "Enabling Drag & Drop"], ["href", "../interfaces/IItemsReorderedEvent.html", "target", "_blank"], ["type", "info", 3, "allowDismiss"], ["filenamePrefix", "repeat-reorder-simple", "exampleTitle", "Reordering"], ["filenamePrefix", "repeat-drag-handle", "exampleTitle", "Custom Drag Handle"], ["filenamePrefix", "repeat-drag-preview", "exampleTitle", "Custom Drag Preview"], ["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "repeat-reorder-item-config", "exampleTitle", "Drag & Drop - Per Item Customization"], ["filenamePrefix", "repeat-multi-selection", "exampleTitle", "Multi selection repeat"], ["filenamePrefix", "repeat-disabled-multi-selection", "exampleTitle", "Disabled items in the repeat"], ["filenamePrefix", "repeat-single-selection-mode", "exampleTitle", "Highlight selected item"], ["filenamePrefix", "repeat-radio-selection-mode", "exampleTitle", "repeat with radio buttons"], ["filenamePrefix", "repeat-radio-with-non-required-selection-mode", "exampleTitle", "Radio with Non Required Selection Mode"], ["filenamePrefix", "repeat-single-with-required-selection-mode", "exampleTitle", "Required Single Selection Mode"], ["href", "../additional-documentation/schematics/list.html", "target", "_parent"]], template: function RepeatExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "nui-repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is responsible for repeating the items provided in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "itemSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "NuiRepeatModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " This example demonstrates how easy it is to create a simple list by repeating the items of provided datasource.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Simply pass an array of items to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "itemsSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ", and also don't forget to set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "repeatItemTemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " with a template to render for each item.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nui-repeat-simple-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dragging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To enable the dragging of items in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "nui-repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " list, just set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "draggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " input property to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nui-repeat-drag-simple-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Reordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " To allow list items to be reordered, set the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "reorderable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " input property to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ". Bind to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "itemsReordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " output to receive sorting data when an item is dragged to a new spot in the list. The payload for the event is an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "IItemsReorderedEvent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " object.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Setting the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "draggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " input to true with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "reorderable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " input set to false will disable reordering and only allow dragging items to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " containers.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nui-repeat-reorder-simple-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Custom Drag Handle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "In order to customize the handle by which an element can be dragged, you can specify the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "dragHandleTemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Providing the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "dragHandleTemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " template makes declaring the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "draggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " input property optional as it will automatically be set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nui-example-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "nui-repeat-drag-handle-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Custom Drag Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Once the user starts dragging an item, the preview DOM element is created as the last child of the body. To have a custom CSS class for that element, you can specify the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "dragPreviewClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " input property. The default value for this input is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\"nui-dnd-preview\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " In order to customize the drag preview template, you can specify the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "dragPreviewTemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " input.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Providing the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "dragPreviewTemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " template makes declaring the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "draggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " input property optional as it will automatically be set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nui-example-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "nui-repeat-drag-preview-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Repeat Item Customization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "In order to customize the drag and drop behavior of any item in the repeat component you can provide\na configuration object containing callbacks for the provided functionality via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "itemConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " input.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Customization is available via the following properties of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "IRepeatItemConfig");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " - Provide a callback to decide if the item should be draggable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " - Provide a callback to decide if the item should be disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " - Provide a function that defines how to track changes for items in the iterable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "nui-message", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " To be able to provide customized draggable behaviour per item, the main ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "draggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " input must be true.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "nui-example-wrapper", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "nui-repeat-reorder-config-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Multiple Selection Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "selectionMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "multi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " repeats the items with a checkbox component, and allows the user to select multiple items by clicking the provided checkboxes or by clicking on the row itself.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "nui-example-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "nui-repeat-multi-selection-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Multiple Selection Mode with Disabled Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " You can easily set the items being repeated to a disabled state. Make sure the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "itemsSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " you provide contains property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " for each disabled item.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "nui-example-wrapper", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "nui-repeat-disabled-multi-selection-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Single Selection Mode with Item Highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " If you need to highlight clicked item without checkboxes and radio-button, you can just use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "selectionMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "nui-example-wrapper", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "nui-repeat-single-selection-mode-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Single Selection Mode with Radio Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "selectionMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " mode to add radio buttons for each item and allow to select one of them.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "nui-example-wrapper", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "nui-repeat-radio-selection-mode-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "nui-message", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Pay Attention!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " The examples below may allow actions not common for the front-end world. Please agree the use of the following examples with your UI\\UX team.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Non-Required Selection Mode with Radio Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " This example shows how to make a list with radio buttons that can be either checked on or checked off.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "nui-example-wrapper", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "nui-repeat-radio-with-non-required-selection-mode-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Required Single Selection Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " This example shows the single selection mode list where at least one item is always selected.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "nui-example-wrapper", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "nui-repeat-single-with-required-selection-mode-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "nui-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Pagination and Virtual Scroll aren't natively part of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "nui-repeat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " component but the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "List Schematic documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " provides examples on how to use them.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getItemConfigKey("isDraggable"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getItemConfigKey("isDisabled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getItemConfigKey("trackBy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _repeat_simple_repeat_simple_example_component__WEBPACK_IMPORTED_MODULE_2__["RepeatSimpleExampleComponent"], _repeat_drag_simple_repeat_drag_simple_example_component__WEBPACK_IMPORTED_MODULE_3__["RepeatDragSimpleExampleComponent"], _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"], _repeat_reorder_simple_repeat_reorder_simple_example_component__WEBPACK_IMPORTED_MODULE_5__["RepeatReorderSimpleExampleComponent"], _repeat_drag_handle_repeat_drag_handle_example_component__WEBPACK_IMPORTED_MODULE_6__["RepeatDragHandleExampleComponent"], _repeat_drag_preview_repeat_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_7__["RepeatDragPreviewExampleComponent"], _repeat_reorder_item_config_repeat_reorder_item_config_example_component__WEBPACK_IMPORTED_MODULE_8__["RepeatReorderItemConfigExampleComponent"], _repeat_multi_selection_repeat_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_9__["RepeatMultiSelectionExampleComponent"], _repeat_disabled_multi_selection_repeat_disabled_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_10__["RepeatDisabledMultiSelectionExampleComponent"], _repeat_single_selection_mode_repeat_single_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_11__["RepeatSingleSelectionModeExampleComponent"], _repeat_radio_selection_mode_repeat_radio_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_12__["RepeatRadioSelectionModeExampleComponent"], _repeat_radio_with_non_required_selection_mode_repeat_radio_with_non_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_13__["RepeatRadioWithNonRequiredSelectionModeExampleComponent"], _repeat_single_with_required_selection_mode_repeat_single_with_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_14__["RepeatSingleWithRequiredSelectionModeExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "UUD4":
/*!******************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-simple/repeat-simple.example.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RepeatSimpleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatSimpleExampleComponent", function() { return RepeatSimpleExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");


function RepeatSimpleExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.color);
} }
class RepeatSimpleExampleComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue` },
            { color: $localize `green` },
            { color: $localize `yellow` },
            { color: $localize `cyan` },
            { color: $localize `magenta` },
            { color: $localize `black` },
        ];
    }
}
RepeatSimpleExampleComponent.ɵfac = function RepeatSimpleExampleComponent_Factory(t) { return new (t || RepeatSimpleExampleComponent)(); };
RepeatSimpleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatSimpleExampleComponent, selectors: [["nui-repeat-simple-example"]], decls: 4, vars: 2, consts: [["repeatItemTemplate", ""], [1, "example"], [3, "itemsSource", "repeatItemTemplateRef"]], template: function RepeatSimpleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatSimpleExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-repeat", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colors)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], encapsulation: 2 });


/***/ }),

/***/ "XD94":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-single-selection-mode/repeat-single-selection-mode.example.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatPeopleItemTemplate let-item=\"item\">\n    <nui-icon style=\"align-self: start\" css-class=\"flex-row-item\" icon=\"user\"></nui-icon>\n    <div class=\"flex-row-item flex-column-container\">\n        <div class=\"name-item\">{{item.name}}</div>\n        <div [ngClass]=\"item.level\">{{item.level}}</div>\n        <div class=\"status-item\">{{item.status}}</div>\n    </div>\n</ng-template>\n\n<ng-template #actionsContent>\n    <button nui-button type=\"button\" displayStyle=\"action\" icon=\"menu\"></button>\n    <button nui-button type=\"button\" displayStyle=\"action\" icon=\"caret-right\"></button>\n</ng-template>\n\n<div class=\"example single-selection-example\">\n    <div class=\"flex-row-container\">\n        <div class=\"flex-independent-row-item simple-label\" i18n>Selection:</div>\n        <span class=\"flex-independent-row-item\" id=\"nui-demo-singleselect-value\">\n            {{selectedPeople | json}}</span>\n    </div>\n\n    <br>\n\n    <nui-repeat id=\"nui-demo-single-repeat\"\n              [itemsSource]=\"people\"\n              [selection]=\"selectedPeople\"\n              selectionMode=\"single\"\n              (selectionChange)=\"onPeopleSelectionChange($event)\"\n              [repeatItemTemplateRef]=\"repeatPeopleItemTemplate\"\n              [actionsTemplateRef]=\"actionsContent\">\n    </nui-repeat>\n</div>\n");

/***/ }),

/***/ "Xav+":
/*!************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-multi-selection/repeat-multi-selection.example.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: RepeatMultiSelectionExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatMultiSelectionExampleComponent", function() { return RepeatMultiSelectionExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RepeatMultiSelectionExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.color);
} }
class RepeatMultiSelectionExampleComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue` },
            { color: $localize `green` },
            { color: $localize `yellow` },
            { color: $localize `cyan` },
            { color: $localize `magenta` },
            { color: $localize `black` },
        ];
        this.narrowRowSelectedColors = [
            this.colors[2],
            this.colors[5],
        ];
    }
    onNarrowRowSelectionChange(selection) {
        this.narrowRowSelectedColors = selection;
    }
}
RepeatMultiSelectionExampleComponent.ɵfac = function RepeatMultiSelectionExampleComponent_Factory(t) { return new (t || RepeatMultiSelectionExampleComponent)(); };
RepeatMultiSelectionExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatMultiSelectionExampleComponent, selectors: [["nui-repeat-multi-selection-example"]], decls: 14, vars: 6, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_MULTI_SELECTION_REPEAT_MULTI_SELECTION_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selection:");
        i18n_0 = MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_MULTI_SELECTION_REPEAT_MULTI_SELECTION_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟4b13ecaace0a04d26567095f86b3c2079cf0c050␟1517966227002077718:Selection:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4316136150832846114$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_MULTI_SELECTION_REPEAT_MULTI_SELECTION_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("repeat header from template");
        i18n_2 = MSG_EXTERNAL_4316136150832846114$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_MULTI_SELECTION_REPEAT_MULTI_SELECTION_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟4d3f86c55d6d0d37865042fdafc386eb9ec66380␟4316136150832846114:repeat header from template`;
    } return [["repeatItemTemplate", ""], [1, "example"], [1, "flex-row-container"], [1, "flex-independent-row-item", "simple-label"], i18n_0, ["id", "nui-demo-multiselect-values", 1, "flex-independent-row-item"], ["id", "nui-demo-multi-repeat", "selectionMode", "multi", 3, "itemsSource", "selection", "repeatItemTemplateRef", "selectionChange"], ["repeatHeaderTemplate", ""], [1, "template-header"], i18n_2]; }, template: function RepeatMultiSelectionExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatMultiSelectionExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-repeat", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RepeatMultiSelectionExampleComponent_Template_nui_repeat_selectionChange_10_listener($event) { return ctx.onNarrowRowSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.narrowRowSelectedColors), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colors)("selection", ctx.narrowRowSelectedColors)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "Xw8i":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll-data.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export const RESULTS_PER_PAGE = 20;\n\nexport const DATA = [\n    { \"location\": \"New Jermaine\", \"name\": \"TURCO-SVR-ET9695\", \"status\": \"Down\" },\n    { \"location\": \"Kyiv\", \"name\": \"DAUGH-LT-SED9492\", \"status\": \"Active\" },\n    { \"location\": \"Archton\", \"name\": \"GLOVE-LT-QUI9554\", \"status\": \"Active\" },\n    { \"location\": \"South Levi\", \"name\": \"HIRTH-LT-MOLE9968\", \"status\": \"Active\" },\n    { \"location\": \"Austin\", \"name\": \"KUB-LT-ODIO9015\", \"status\": \"Active\" },\n    { \"location\": \"Taylormouth\", \"name\": \"MAYER-SVR-DOLO9518\", \"status\": \"Down\" },\n    { \"location\": \"Brno\", \"name\": \"BORER-LT-OCCA9986\", \"status\": \"Active\" },\n    { \"location\": \"North Bert\", \"name\": \"ERNSE-SVR-EARU9344\", \"status\": \"Down\" },\n    { \"location\": \"Kuhlmanhaven\", \"name\": \"HELLE-LT-QUIA9115\", \"status\": \"Active\" },\n    { \"location\": \"Austin\", \"name\": \"BROWN-SVR-EUM9158\", \"status\": \"Active\" },\n    { \"location\": \"East Keatonborough\", \"name\": \"VEUM-LT-EXER9236\", \"status\": \"Active\" },\n    { \"location\": \"Lake Kailee\", \"name\": \"WINDL-LT-QUI9139\", \"status\": \"Active\" },\n    { \"location\": \"New Haydenhaven\", \"name\": \"ONDRI-SVR-REIC9243\", \"status\": \"Down\" },\n    { \"location\": \"Esmeraldaborough\", \"name\": \"SHANA-SVR-NEQU9387\", \"status\": \"Down\" },\n    { \"location\": \"O'Reillyton\", \"name\": \"HERMA-LT-VITA9273\", \"status\": \"Down\" },\n    { \"location\": \"Bucharest\", \"name\": \"D'AMO-SVR-DOLO9199\", \"status\": \"Down\" },\n    { \"location\": \"New Ilafort\", \"name\": \"CUMME-SVR-IPSU9949\", \"status\": \"Active\" },\n    { \"location\": \"Bucharest\", \"name\": \"O'CON-LT-DELE9341\", \"status\": \"Active\" },\n    { \"location\": \"Austin\", \"name\": \"HESSE-LT-ET9816\", \"status\": \"Down\" },\n    { \"location\": \"Declanburgh\", \"name\": \"LAKIN-SVR-NON9503\", \"status\": \"Active\" },\n    { \"location\": \"Dorrismouth\", \"name\": \"ZBONC-SVR-MAXI9692\", \"status\": \"Active\" },\n    { \"location\": \"Nitzscheton\", \"name\": \"FADEL-SVR-ASSU9183\", \"status\": \"Active\" },\n    { \"location\": \"North Arielmouth\", \"name\": \"WATSI-LT-QUIA9919\", \"status\": \"Down\" },\n    { \"location\": \"Austin\", \"name\": \"CONRO-LT-ET9222\", \"status\": \"Active\" },\n    { \"location\": \"Kyiv\", \"name\": \"HUELS-LT-TEMP9463\", \"status\": \"Down\" },\n    { \"location\": \"Gulgowskiside\", \"name\": \"ANDER-LT-ET9545\", \"status\": \"Down\" },\n    { \"location\": \"West Estashire\", \"name\": \"BRAUN-LT-BEAT9513\", \"status\": \"Active\" },\n    { \"location\": \"Lailaland\", \"name\": \"JASKO-SVR-NATU9644\", \"status\": \"Active\" },\n    { \"location\": \"South Luigi\", \"name\": \"SIMON-LT-VOLU9900\", \"status\": \"Down\" },\n    { \"location\": \"Bogisichtown\", \"name\": \"HERMI-SVR-TEMP9404\", \"status\": \"Active\" },\n    { \"location\": \"Kyiv\", \"name\": \"RATKE-SVR-EST9459\", \"status\": \"Active\" },\n    { \"location\": \"Corkeryport\", \"name\": \"REICH-LT-ET9322\", \"status\": \"Active\" },\n    { \"location\": \"South Katarinaview\", \"name\": \"TOWNE-SVR-QUIB9469\", \"status\": \"Down\" },\n];\n");

/***/ }),

/***/ "XxfH":
/*!*********************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.ts": "F5ez",
	"./repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component.html": "qsKz",
	"./repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component.ts": "djg0",
	"./repeat-docs/repeat-docs.example.component.html": "9H/v",
	"./repeat-docs/repeat-docs.example.component.ts": "D99s",
	"./repeat-drag-handle/repeat-drag-handle.example.component.html": "7MfL",
	"./repeat-drag-handle/repeat-drag-handle.example.component.ts": "E/+A",
	"./repeat-drag-preview/repeat-drag-preview.example.component.html": "wyKk",
	"./repeat-drag-preview/repeat-drag-preview.example.component.less": "788R",
	"./repeat-drag-preview/repeat-drag-preview.example.component.ts": "ZNZk",
	"./repeat-drag-simple/repeat-drag-simple.example.component.html": "eaW1",
	"./repeat-drag-simple/repeat-drag-simple.example.component.ts": "FU6U",
	"./repeat-item/repeat-item.example.component.html": "3JjW",
	"./repeat-item/repeat-item.example.component.ts": "+2O1",
	"./repeat-multi-selection/repeat-multi-selection.example.component.html": "dxcK",
	"./repeat-multi-selection/repeat-multi-selection.example.component.ts": "B6UP",
	"./repeat-radio-selection-mode/repeat-radio-selection-mode.example.component.html": "dTTn",
	"./repeat-radio-selection-mode/repeat-radio-selection-mode.example.component.ts": "ctzm",
	"./repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component.html": "Zgvf",
	"./repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component.ts": "LU3E",
	"./repeat-reorder-item-config/repeat-reorder-item-config-example.component.html": "Pa4q",
	"./repeat-reorder-item-config/repeat-reorder-item-config-example.component.ts": "6p70",
	"./repeat-reorder-simple/repeat-reorder-simple-example.component.html": "ebJX",
	"./repeat-reorder-simple/repeat-reorder-simple-example.component.ts": "g0JM",
	"./repeat-simple/repeat-simple.example.component.html": "+l9c",
	"./repeat-simple/repeat-simple.example.component.ts": "MtRR",
	"./repeat-single-selection-mode/repeat-single-selection-mode.example.component.html": "XD94",
	"./repeat-single-selection-mode/repeat-single-selection-mode.example.component.ts": "BvBn",
	"./repeat-single-selection-mode/repeat-single-selection-mode.example.less": "tB9T",
	"./repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component.html": "MMC6",
	"./repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component.ts": "Ph0z",
	"./repeat-test/repeat-test.component.html": "e85M",
	"./repeat-test/repeat-test.component.ts": "A6BW",
	"./repeat-virtual-scroll/repeat-virtual-scroll-data-source.ts": "eyrF",
	"./repeat-virtual-scroll/repeat-virtual-scroll-data.ts": "Xw8i",
	"./repeat-virtual-scroll/repeat-virtual-scroll.component.html": "9JmL",
	"./repeat-virtual-scroll/repeat-virtual-scroll.component.less": "fuGm",
	"./repeat-virtual-scroll/repeat-virtual-scroll.component.ts": "Ej2c",
	"./repeat-virtual-scroll/types.ts": "Sm2L",
	"./repeat.module.ts": "vUEW"
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
webpackContext.id = "XxfH";

/***/ }),

/***/ "Yob6":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-drag-simple/repeat-drag-simple.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: RepeatDragSimpleExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatDragSimpleExampleComponent", function() { return RepeatDragSimpleExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");



function RepeatDragSimpleExampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, "\n");
} }
class RepeatDragSimpleExampleComponent {
    constructor() {
        this.companies = ["Adobe", "IBM", "Dell", "Microsoft"];
        this.draggable = true;
    }
    onItemsReordered(event) {
        // update items according to the new order
        this.companies = event.currentState;
    }
}
RepeatDragSimpleExampleComponent.ɵfac = function RepeatDragSimpleExampleComponent_Factory(t) { return new (t || RepeatDragSimpleExampleComponent)(); };
RepeatDragSimpleExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatDragSimpleExampleComponent, selectors: [["nui-repeat-drag-simple-example"]], decls: 6, vars: 4, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7787744411173974049$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_DRAG_SIMPLE_REPEAT_DRAG_SIMPLE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Draggable");
        i18n_0 = MSG_EXTERNAL_7787744411173974049$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_DRAG_SIMPLE_REPEAT_DRAG_SIMPLE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟1255f129e09ec6d9599c2a1bd648672b29f8b11c␟7787744411173974049:Draggable`;
    } return [[1, "d-flex"], [1, "p-2", 3, "value", "valueChange"], i18n_0, [3, "itemsSource", "repeatItemTemplateRef", "draggable", "itemsReordered"], ["repeatItemTemplate", ""]]; }, template: function RepeatDragSimpleExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RepeatDragSimpleExampleComponent_Template_nui_switch_valueChange_1_listener($event) { return ctx.draggable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-repeat", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemsReordered", function RepeatDragSimpleExampleComponent_Template_nui_repeat_itemsReordered_3_listener($event) { return ctx.onItemsReordered($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RepeatDragSimpleExampleComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.draggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.companies)("repeatItemTemplateRef", _r0)("draggable", ctx.draggable);
    } }, directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__["SwitchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_2__["RepeatComponent"]], encapsulation: 2 });


/***/ }),

/***/ "ZNZk":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-preview/repeat-drag-preview.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from \"@angular/core\";\nimport {IItemsReorderedEvent, IRepeatItem} from \"@nova-ui/bits\";\n\ninterface IRepeatCompanyItem extends IRepeatItem {\n    name: string;\n    disabled?: boolean;\n    preview?: string;\n}\n\n@Component({\n    selector: \"nui-repeat-drag-preview-example\",\n    templateUrl: \"./repeat-drag-preview.example.component.html\",\n    styleUrls: [\"./repeat-drag-preview.example.component.less\"],\n    encapsulation: ViewEncapsulation.None,\n})\nexport class RepeatDragPreviewExampleComponent {\n    public companies: IRepeatCompanyItem[] = [\n        {\n            name: \"Adobe\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/524px-Adobe_Systems_logo_and_wordmark.svg.png\",\n        },\n        {\n            name: \"IBM\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png\",\n        },\n        {\n            name: \"Dell\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png\",\n        },\n        {\n            name: \"Microsoft\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg\",\n        },\n    ];\n\n    public onItemsReordered(event: IItemsReorderedEvent<IRepeatCompanyItem>): void {\n        // update items according to the new order\n        this.companies = event.currentState;\n    }\n}\n");

/***/ }),

/***/ "Zgvf":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"example\">\n    <div class=\"flex-row-container\">\n        <div class=\"flex-independent-row-item simple-label\" i18n>Selection:</div>\n        <span class=\"flex-independent-row-item\" id=\"nui-demo-singleselect-nonrequired-value\">{{selectedColors | json}}</span>\n    </div>\n\n    <br>\n\n    <div>\n        <nui-repeat id=\"nui-demo-radio-non-required-selection-repeat\"\n                  [itemsSource]=\"colors\"\n                  [selection]=\"selectedColors\"\n                  [selectionMode]=\"selectedMode\"\n                  (selectionChange)=\"onColorSelectionChange($event)\"\n                  [repeatItemTemplateRef]=\"repeatItemTemplate\">\n        </nui-repeat>\n    </div>\n</div>\n");

/***/ }),

/***/ "ctzm":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-radio-selection-mode/repeat-radio-selection-mode.example.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Input} from \"@angular/core\";\n\n@Component({\n    selector: \"nui-repeat-radio-selection-mode-example\",\n    templateUrl: \"./repeat-radio-selection-mode.example.component.html\",\n})\nexport class RepeatRadioSelectionModeExampleComponent {\n    @Input() public colors = [\n        { color: $localize `blue` },\n        { color: $localize `green` },\n        { color: $localize `yellow` },\n        { color: $localize `cyan` },\n        { color: $localize `magenta` },\n        { color: $localize `black` },\n    ];\n\n    public selectedColors = [this.colors[1]];\n\n    constructor() { }\n\n    public onColorSelectionChange(selection: any) {\n        this.selectedColors = selection;\n    }\n}\n");

/***/ }),

/***/ "dTTn":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-radio-selection-mode/repeat-radio-selection-mode.example.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"example\">\n    <div class=\"flex-row-container\">\n        <div class=\"flex-independent-row-item simple-label\" i18n>Selection:</div>\n        <span class=\"flex-independent-row-item\" id=\"nui-demo-radioselect-value\">\n            {{selectedColors | json}}</span>\n    </div>\n\n    <br>\n\n    <nui-repeat id=\"nui-demo-radio-repeat\"\n              [itemsSource]=\"colors\"\n              [selection]=\"selectedColors\"\n              selectionMode=\"radio\"\n              [repeatItemTemplateRef]=\"repeatItemTemplate\"\n              (selectionChange)=\"onColorSelectionChange($event)\">\n    </nui-repeat>\n</div>\n");

/***/ }),

/***/ "djg0":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n@Component({\n    selector: \"nui-repeat-disabled-multi-selection-example\",\n    templateUrl: \"./repeat-disabled-multi-selection.example.component.html\",\n})\nexport class RepeatDisabledMultiSelectionExampleComponent {\n    public colorsWithIsDisabledProperty = [\n        { color: $localize `blue`, disabled: true },\n        { color: $localize `green`, disabled: false },\n        { color: $localize `yellow` },\n        { color: $localize `cyan` },\n        { color: $localize `magenta`, disabled: true },\n        { color: $localize `black` },\n    ];\n\n    public selectedColorsWithIsDisabledProperty = [\n        this.colorsWithIsDisabledProperty[0],\n        this.colorsWithIsDisabledProperty[5],\n    ];\n\n    public handleClick(event: any) {\n        event.stopPropagation();\n    }\n\n    constructor() { }\n}\n");

/***/ }),

/***/ "dxcK":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-multi-selection/repeat-multi-selection.example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemTemplate let-item=\"item\">\n    <div>{{item.color}}</div>\n</ng-template>\n\n<div class=\"example\">\n    <div class=\"flex-row-container\">\n        <div class=\"flex-independent-row-item simple-label\" i18n>Selection:</div>\n        <span class=\"flex-independent-row-item\" id=\"nui-demo-multiselect-values\">\n            {{narrowRowSelectedColors | json}}</span>\n    </div>\n\n    <br>\n\n    <nui-repeat id=\"nui-demo-multi-repeat\"\n              [itemsSource]=\"colors\"\n              selectionMode=\"multi\"\n              [selection]=\"narrowRowSelectedColors\"\n              (selectionChange)=\"onNarrowRowSelectionChange($event)\"\n              [repeatItemTemplateRef]=\"repeatItemTemplate\">\n        <div repeatHeaderTemplate>\n            <div class=\"template-header\" i18n>repeat header from template</div>\n        </div>\n    </nui-repeat>\n</div>\n");

/***/ }),

/***/ "e85M":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-test/repeat-test.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-tab-heading-group id=\"repeat-test-tab-group\" (selected)=\"currentTabId = $event;\">\n    <nui-tab-heading *ngFor=\"let tab of tabs\" [tabId]=\"tab.id\" [active]=\"currentTabId === tab.id\">{{tab.title}}</nui-tab-heading>\n</nui-tab-heading-group>\n<div [style.display]=\"getTabDisplayMode(tabs[0].id)\">\n    No content in this tab. See other tab(s) for content.\n</div>\n<div [style.display]=\"getTabDisplayMode(tabs[1].id)\">\n    <repeat-virtual-scroll id=\"repeat-test-vscroll\"></repeat-virtual-scroll>\n</div>\n<hr>\n<nui-repeat-multi-selection-example></nui-repeat-multi-selection-example>\n<nui-repeat-disabled-multi-selection-example></nui-repeat-disabled-multi-selection-example>\n<nui-repeat-single-selection-mode-example></nui-repeat-single-selection-mode-example>\n<button nui-button type=\"button\" id=\"add-color\" (click)=\"addNewColor()\">Add color</button>\n<nui-repeat-radio-selection-mode-example [colors]=\"colors\"></nui-repeat-radio-selection-mode-example>\n<nui-repeat-radio-with-non-required-selection-mode-example></nui-repeat-radio-with-non-required-selection-mode-example>\n<nui-repeat-single-with-required-selection-mode-example></nui-repeat-single-with-required-selection-mode-example>\n");

/***/ }),

/***/ "eaW1":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-simple/repeat-drag-simple.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n    <nui-switch class=\"p-2\" [(value)]=\"draggable\" i18n>Draggable</nui-switch>\n</div>\n<nui-repeat (itemsReordered)=\"onItemsReordered($event)\"\n            [itemsSource]=\"companies\"\n            [repeatItemTemplateRef]=\"repeatItemTemplate\"\n            [draggable]=\"draggable\">\n</nui-repeat>\n\n<!-- Content template for each item -->\n<ng-template #repeatItemTemplate let-item=\"item\">\n    {{item}}\n</ng-template>\n");

/***/ }),

/***/ "ebJX":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-reorder-simple/repeat-reorder-simple-example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex\">\n    <nui-switch class=\"p-2\" [(value)]=\"draggable\" i18n>Draggable</nui-switch>\n    <nui-switch class=\"p-2\" [(value)]=\"reorderable\" i18n>Reorderable</nui-switch>\n</div>\n<nui-repeat (itemsReordered)=\"onItemsReordered($event)\"\n            [itemsSource]=\"companies\"\n            [repeatItemTemplateRef]=\"repeatItemTemplate\"\n            [(draggable)]=\"draggable\"\n            [(reorderable)]=\"reorderable\">\n</nui-repeat>\n<div class=\"d-flex m-2\">\n    <div><strong i18n>Event data</strong>:</div>\n    <div class=\"ml-1\">{{droppedEventData ? (droppedEventData | json) : \"N/A\"}}</div>\n</div>\n\n<!-- Content template for each item -->\n<ng-template #repeatItemTemplate let-item=\"item\">\n    {{item}}\n</ng-template>\n");

/***/ }),

/***/ "eyrF":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll-data-source.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Injectable } from \"@angular/core\";\nimport { IDataSource, INovaFilteringOutputs, ServerSideDataSource } from \"@nova-ui/bits\";\nimport { Observable, of } from \"rxjs\";\nimport { map } from \"rxjs/operators\";\n\nimport { DATA } from \"./repeat-virtual-scroll-data\";\nimport { IServerFilters, IServersCollection } from \"./types\";\n\n@Injectable()\nexport class RepeatVirtualScrollDataSource<T> extends ServerSideDataSource<T> implements IDataSource {\n    public async getFilteredData(data: IServersCollection): Promise<INovaFilteringOutputs> {\n        return of(data).pipe(\n            map((response: IServersCollection) => {\n                const itemsSource = response.items;\n\n                return {\n                    repeat: { itemsSource },\n                };\n            })\n        ).toPromise();\n    }\n\n    protected getBackendData(filters: IServerFilters): Observable<IServersCollection> {\n        return of({\n            items: DATA?.map(item => ({\n                name: item.name,\n                location: item.location,\n                status: item.status,\n            })) || [],\n        });\n    }\n}\n");

/***/ }),

/***/ "fuGm":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll.component.less ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n\n:host {\n    .app-virtual-scroll-list-repeat {\n        margin: @nui-space-sm @nui-space-md;\n        width: 100%;\n        // it is very important to have a height for virtual scroll\n        height: 300px;\n    }\n}\n");

/***/ }),

/***/ "g0JM":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-reorder-simple/repeat-reorder-simple-example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, ViewEncapsulation} from \"@angular/core\";\nimport {IItemsReorderedEvent} from \"@nova-ui/bits\";\n\ntype Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;\ninterface ISortingOrderTrimmedData extends Omit<IItemsReorderedEvent, \"item\"|\"dropListRef\"> {}\n\n@Component({\n    selector: \"nui-repeat-reorder-simple-example\",\n    templateUrl: \"./repeat-reorder-simple-example.component.html\",\n    encapsulation: ViewEncapsulation.None,\n})\nexport class RepeatReorderSimpleExampleComponent {\n    public companies: string[] = [\"Adobe\", \"IBM\", \"Dell\", \"Microsoft\"];\n\n    public draggable: boolean = true;\n    public reorderable: boolean = true;\n    public droppedEventData: ISortingOrderTrimmedData;\n\n    public onItemsReordered(event: IItemsReorderedEvent<string>): void {\n        // update items according to the new order\n        this.companies = event.currentState;\n\n        // copy all event proprieties except the CdkDrag & CdkDropList references\n        const {item, dropListRef, ...rest} = event;\n        this.droppedEventData = rest;\n\n        console.log(event);\n    }\n}\n");

/***/ }),

/***/ "jhpo":
/*!********************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-reorder-item-config/repeat-reorder-item-config-example.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: RepeatReorderItemConfigExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatReorderItemConfigExampleComponent", function() { return RepeatReorderItemConfigExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");



function RepeatReorderItemConfigExampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nui-text-secondary--disabled", ctx_r1.itemConfig.isDisabled(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r2.color, " - ", item_r2.description, " ");
} }
class RepeatReorderItemConfigExampleComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue`, description: "Should be draggable" },
            { color: $localize `green`, description: "Disabled with callback" },
            { color: $localize `yellow`, disabled: true, description: "Disabled with property" },
            { color: $localize `orange`, disabled: false, description: "Enabled with property" },
        ];
        this.draggable = true;
        this.reorderable = true;
        this.itemConfig = {
            isDraggable: item => item.color === $localize `blue` || item.color === $localize `orange`,
            // Note: Using both cases to check if item is disabled, normally we should use only one method
            isDisabled: item => item.color === $localize `green` || item.disabled,
            trackBy: (index, item) => item.color,
        };
    }
    onItemsReordered(event) {
        this.colors = event.currentState;
    }
}
RepeatReorderItemConfigExampleComponent.ɵfac = function RepeatReorderItemConfigExampleComponent_Factory(t) { return new (t || RepeatReorderItemConfigExampleComponent)(); };
RepeatReorderItemConfigExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatReorderItemConfigExampleComponent, selectors: [["nui-repeat-reorder-config-example"]], decls: 8, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_112862472513390058$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_ITEM_CONFIG_REPEAT_REORDER_ITEM_CONFIG_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Dragging");
        i18n_0 = MSG_EXTERNAL_112862472513390058$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_ITEM_CONFIG_REPEAT_REORDER_ITEM_CONFIG_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟54af9ca8444cbfe277b0de1689f0f957e626df42␟112862472513390058:Dragging`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5232212981571205937$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_ITEM_CONFIG_REPEAT_REORDER_ITEM_CONFIG_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Reordering");
        i18n_2 = MSG_EXTERNAL_5232212981571205937$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_REORDER_ITEM_CONFIG_REPEAT_REORDER_ITEM_CONFIG_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟48b8702bb4667bfda70f21fda6df338258722683␟5232212981571205937:Reordering`;
    } return [[1, "d-flex"], [1, "p-2", 3, "value", "valueChange"], i18n_0, i18n_2, [3, "itemsSource", "repeatItemTemplateRef", "itemConfig", "draggable", "reorderable", "itemsReordered", "draggableChange", "reorderableChange"], ["repeatItemTemplate", ""]]; }, template: function RepeatReorderItemConfigExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RepeatReorderItemConfigExampleComponent_Template_nui_switch_valueChange_1_listener($event) { return ctx.draggable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nui-switch", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RepeatReorderItemConfigExampleComponent_Template_nui_switch_valueChange_3_listener($event) { return ctx.reorderable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nui-repeat", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemsReordered", function RepeatReorderItemConfigExampleComponent_Template_nui_repeat_itemsReordered_5_listener($event) { return ctx.onItemsReordered($event); })("draggableChange", function RepeatReorderItemConfigExampleComponent_Template_nui_repeat_draggableChange_5_listener($event) { return ctx.draggable = $event; })("reorderableChange", function RepeatReorderItemConfigExampleComponent_Template_nui_repeat_reorderableChange_5_listener($event) { return ctx.reorderable = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RepeatReorderItemConfigExampleComponent_ng_template_6_Template, 2, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.draggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.reorderable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colors)("repeatItemTemplateRef", _r0)("itemConfig", ctx.itemConfig)("draggable", ctx.draggable)("reorderable", ctx.reorderable);
    } }, directives: [_src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_1__["SwitchComponent"], _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_2__["RepeatComponent"]], encapsulation: 2 });


/***/ }),

/***/ "nOuR":
/*!**************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RepeatVirtualScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatVirtualScrollComponent", function() { return RepeatVirtualScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _repeat_virtual_scroll_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repeat-virtual-scroll-data */ "STWZ");
/* harmony import */ var _repeat_virtual_scroll_data_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repeat-virtual-scroll-data-source */ "wHrv");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function RepeatVirtualScrollComponent_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", field_r4.value, " ");
} }
function RepeatVirtualScrollComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RepeatVirtualScrollComponent_ng_template_3_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, item_r2));
} }
class RepeatVirtualScrollComponent {
    constructor(dataSource, changeDetection, viewportManager) {
        this.dataSource = dataSource;
        this.changeDetection = changeDetection;
        this.viewportManager = viewportManager;
        this.listItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.filteringState = {};
        this.isBusy = false;
        this.totalItems = 0;
        this.itemConfig = {
            trackBy: (index, item) => item === null || item === void 0 ? void 0 : item.name,
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.dataSource.busy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(val => {
            this.isBusy = val;
            this.changeDetection.detectChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe();
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSource.registerComponent({
                virtualScroll: { componentInstance: this.viewportManager },
                repeat: { componentInstance: this.repeat },
            });
            this.viewportManager
                // Note: Initializing viewportManager with the repeat's CDK Viewport Ref
                .setViewport(this.repeat.viewportRef)
                // Note: Initializing the stream with the desired page size, based on which
                // ViewportManager will perform the observations and will emit
                // distinct ranges with step equal to provided pageSize
                .observeNextPage$({ pageSize: _repeat_virtual_scroll_data__WEBPACK_IMPORTED_MODULE_5__["RESULTS_PER_PAGE"] })
                .pipe(
            // Since we know the total number of items we can stop the stream when dataset end is reached
            // Otherwise we can let VirtualViewportManager to stop when last received page range will not match requested range
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(() => {
                const items = this.listItems$.getValue();
                return !items.length || items.length < this.totalItems;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.applyFilters(false)), 
            // Note: Using the same stream to subscribe to the outputsSubject and update the items list
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.dataSource.outputsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
                var _a, _b;
                // update the list of items to be rendered
                const items = ((_a = data.repeat) === null || _a === void 0 ? void 0 : _a.itemsSource) || [];
                this.totalItems = (_b = data.repeat) === null || _b === void 0 ? void 0 : _b.itemsSource.length;
                // after receiving data we need to append it to our previous fetched results
                this.listItems$.next(this.listItems$.getValue().concat(items));
                this.changeDetection.detectChanges();
            }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    applyFilters(resetVirtualScroll = true) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (resetVirtualScroll) {
                // it is important to reset viewportManager to start page
                // so that the data source performs the search with 1st page
                this.viewportManager.reset({ emitFirstPage: false });
            }
            // Every new search request or filter change should
            // clear the cache in order to correctly display a new set of data
            const filters = this.dataSource.getFilters();
            const reset = this.dataSource.computeFiltersChange(filters);
            if (reset || ((_a = filters.virtualScroll) === null || _a === void 0 ? void 0 : _a.value.start) === 0) {
                this.listItems$.next([]);
                this.changeDetection.detectChanges();
            }
            yield this.dataSource.applyFilters();
        });
    }
}
RepeatVirtualScrollComponent.ɵfac = function RepeatVirtualScrollComponent_Factory(t) { return new (t || RepeatVirtualScrollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["VirtualViewportManager"])); };
RepeatVirtualScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RepeatVirtualScrollComponent, selectors: [["repeat-virtual-scroll"]], viewQuery: function RepeatVirtualScrollComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["RepeatComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.repeat = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["VirtualViewportManager"],
            {
                provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DataSourceService"],
                useClass: _repeat_virtual_scroll_data_source__WEBPACK_IMPORTED_MODULE_6__["RepeatVirtualScrollDataSource"],
            },
        ])], decls: 5, vars: 8, consts: [[1, "d-flex", "flex-row"], ["selectionMode", "none", 1, "app-virtual-scroll-list-repeat", 3, "itemConfig", "repeatItemTemplateRef", "selection", "itemsSource", "virtualScroll", "itemSize"], ["listRepeatItemTemplate", ""], [1, "container"], [1, "row"], ["class", "col-sm", 4, "ngFor", "ngForOf"], [1, "col-sm"]], template: function RepeatVirtualScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-repeat", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RepeatVirtualScrollComponent_ng_template_3_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemConfig", ctx.itemConfig)("repeatItemTemplateRef", _r0)("selection", ctx.filteringState.repeat == null ? null : ctx.filteringState.repeat.selectedItems)("itemsSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx.listItems$))("virtualScroll", true)("itemSize", 30);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_7__["RepeatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"]], styles: ["[_nghost-%COMP%]   .app-virtual-scroll-list-repeat[_ngcontent-%COMP%] {\n  margin: 10px 15px;\n  width: 100%;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdC12aXJ0dWFsLXNjcm9sbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGlCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7QUFIUiIsImZpbGUiOiJyZXBlYXQtdmlydHVhbC1zY3JvbGwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIC5hcHAtdmlydHVhbC1zY3JvbGwtbGlzdC1yZXBlYXQge1xuICAgICAgICBtYXJnaW46IEBudWktc3BhY2Utc20gQG51aS1zcGFjZS1tZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIGl0IGlzIHZlcnkgaW1wb3J0YW50IHRvIGhhdmUgYSBoZWlnaHQgZm9yIHZpcnR1YWwgc2Nyb2xsXG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "pfJu":
/*!******************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-test/repeat-test.component.ts ***!
  \******************************************************************************/
/*! exports provided: RepeatTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatTestComponent", function() { return RepeatTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_tabgroup_tab_heading_group_tab_heading_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/tabgroup/tab-heading-group/tab-heading-group.component */ "lxVO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _repeat_virtual_scroll_repeat_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repeat-virtual-scroll/repeat-virtual-scroll.component */ "nOuR");
/* harmony import */ var _repeat_multi_selection_repeat_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repeat-multi-selection/repeat-multi-selection.example.component */ "Xav+");
/* harmony import */ var _repeat_disabled_multi_selection_repeat_disabled_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component */ "PWlR");
/* harmony import */ var _repeat_single_selection_mode_repeat_single_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../repeat-single-selection-mode/repeat-single-selection-mode.example.component */ "umK5");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _repeat_radio_selection_mode_repeat_radio_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../repeat-radio-selection-mode/repeat-radio-selection-mode.example.component */ "1aNH");
/* harmony import */ var _repeat_radio_with_non_required_selection_mode_repeat_radio_with_non_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component */ "ubTL");
/* harmony import */ var _repeat_single_with_required_selection_mode_repeat_single_with_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../repeat-single-with-required-selection-mode/repeat-single-with-required-selection-mode.example.component */ "PEhs");
/* harmony import */ var _src_lib_tabgroup_tab_heading_tab_heading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../src/lib/tabgroup/tab-heading/tab-heading.component */ "R5hz");












function RepeatTestComponent_nui_tab_heading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-tab-heading", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabId", tab_r1.id)("active", ctx_r0.currentTabId === tab_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.title);
} }
class RepeatTestComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue` },
            { color: $localize `green` },
            { color: $localize `yellow` },
            { color: $localize `cyan` },
            { color: $localize `magenta` },
            { color: $localize `black` },
        ];
        this.tabs = [
            {
                id: "tab1",
                title: "No Content",
            },
            {
                id: "tab2",
                title: "Repeat VScroll",
            },
        ];
        this.currentTabId = this.tabs[0].id;
        this.colorIndex = 1;
        // using css display rule instead of *ngIf to test RepeatComponent's IntersectionObserver
        // (*ngIf would instantiate the test component only when the tab is selected instead of immediately on page load)
        this.getTabDisplayMode = (tabId) => this.currentTabId === tabId ? "block" : "none";
    }
    addNewColor() {
        this.colors.push({ color: `new color ${this.colorIndex++}` });
    }
}
RepeatTestComponent.ɵfac = function RepeatTestComponent_Factory(t) { return new (t || RepeatTestComponent)(); };
RepeatTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatTestComponent, selectors: [["nui-repeat-test"]], decls: 15, vars: 6, consts: [["id", "repeat-test-tab-group", 3, "selected"], [3, "tabId", "active", 4, "ngFor", "ngForOf"], ["id", "repeat-test-vscroll"], ["nui-button", "", "type", "button", "id", "add-color", 3, "click"], [3, "colors"], [3, "tabId", "active"]], template: function RepeatTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-tab-heading-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function RepeatTestComponent_Template_nui_tab_heading_group_selected_0_listener($event) { return ctx.currentTabId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepeatTestComponent_nui_tab_heading_1_Template, 2, 3, "nui-tab-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No content in this tab. See other tab(s) for content.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "repeat-virtual-scroll", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nui-repeat-multi-selection-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nui-repeat-disabled-multi-selection-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nui-repeat-single-selection-mode-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepeatTestComponent_Template_button_click_10_listener() { return ctx.addNewColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nui-repeat-radio-selection-mode-example", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nui-repeat-radio-with-non-required-selection-mode-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-repeat-single-with-required-selection-mode-example");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getTabDisplayMode(ctx.tabs[0].id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getTabDisplayMode(ctx.tabs[1].id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colors", ctx.colors);
    } }, directives: [_src_lib_tabgroup_tab_heading_group_tab_heading_group_component__WEBPACK_IMPORTED_MODULE_1__["TabHeadingGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _repeat_virtual_scroll_repeat_virtual_scroll_component__WEBPACK_IMPORTED_MODULE_3__["RepeatVirtualScrollComponent"], _repeat_multi_selection_repeat_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_4__["RepeatMultiSelectionExampleComponent"], _repeat_disabled_multi_selection_repeat_disabled_multi_selection_example_component__WEBPACK_IMPORTED_MODULE_5__["RepeatDisabledMultiSelectionExampleComponent"], _repeat_single_selection_mode_repeat_single_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_6__["RepeatSingleSelectionModeExampleComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_7__["ButtonComponent"], _repeat_radio_selection_mode_repeat_radio_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_8__["RepeatRadioSelectionModeExampleComponent"], _repeat_radio_with_non_required_selection_mode_repeat_radio_with_non_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_9__["RepeatRadioWithNonRequiredSelectionModeExampleComponent"], _repeat_single_with_required_selection_mode_repeat_single_with_required_selection_mode_example_component__WEBPACK_IMPORTED_MODULE_10__["RepeatSingleWithRequiredSelectionModeExampleComponent"], _src_lib_tabgroup_tab_heading_tab_heading_component__WEBPACK_IMPORTED_MODULE_11__["TabHeadingComponent"]], encapsulation: 2 });


/***/ }),

/***/ "qsKz":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-disabled-multi-selection/repeat-disabled-multi-selection.example.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #repeatItemColorBoxTemplate let-item=\"item\">\n    <div class=\"color-box {{item.color}}\"></div>\n    <div [attr.class]=\"item.disabled ? 'nui-text-secondary--disabled' : null\">\n        {{item.color}}\n    </div>\n</ng-template>\n\n<ng-template #actionsContent let-item=\"item\">\n        <div >\n            <button nui-button [attr.disabled]=\"item.disabled ? '' : null\" type=\"button\" displayStyle=\"action\" icon=\"menu\" (click)=\"handleClick($event)\"></button>\n            <button nui-button [attr.disabled]=\"item.disabled ? '' : null\" type=\"button\" displayStyle=\"action\" icon=\"caret-right\" (click)=\"handleClick($event)\"></button>\n        </div>\n</ng-template>\n\n<div class=\"example\">\n    <nui-repeat id=\"nui-demo-multi-repeat-disabled-items\"\n              [itemsSource]=\"colorsWithIsDisabledProperty\"\n              selectionMode=\"multi\"\n              [selection]=\"selectedColorsWithIsDisabledProperty\"\n              [repeatItemTemplateRef]=\"repeatItemColorBoxTemplate\"\n              [actionsTemplateRef]=\"actionsContent\">\n    </nui-repeat>\n</div>\n");

/***/ }),

/***/ "tB9T":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-single-selection-mode/repeat-single-selection-mode.example.less ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n.single-selection-example {\n    .blue {\n        background-color: #0000ff;\n    }\n\n    .green {\n        background-color: #009900;\n    }\n\n    .yellow {\n        background-color: #ffff00;\n    }\n\n    .orange {\n        background-color: #ff6600;\n    }\n\n    .cyan {\n        background-color: #00ffff;\n    }\n\n    .magenta {\n        background-color: #ff00ff;\n    }\n\n    .black {\n        background-color: #000000;\n    }\n\n    .flex-row-container {\n        display: flex;\n    }\n\n    .flex-row-item {\n        margin: 0 5px;\n    }\n\n    .flex-row-item:first-child {\n        margin-left: 0;\n    }\n\n    .flex-independent-row-item {\n        margin: 15px 5px;\n    }\n\n    .flex-column-container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .name-item {\n        font-size: 12px;\n        font-weight: bold;\n    }\n\n    .status-item {\n        font-size: 10px;\n        .setCssVariable(color, nui-color-text-secondary);\n    }\n\n    .gold {\n        font-size: 10px;\n        font-weight: bold;\n        .setCssVariable(color, nui-color-brand-four);\n    }\n\n    .platinum {\n        font-size: 10px;\n        font-weight: bold;\n        .setCssVariable(color, nui-color-brand-seven);\n    }\n\n    .bronze {\n        font-size: 10px;\n        font-weight: bold;\n        .setCssVariable(color, nui-color-brand);\n    }\n}\n");

/***/ }),

/***/ "ubTL":
/*!**********************************************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-radio-with-non-required-selection-mode/repeat-radio-with-non-required-selection-mode.example.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: RepeatRadioWithNonRequiredSelectionModeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatRadioWithNonRequiredSelectionModeExampleComponent", function() { return RepeatRadioWithNonRequiredSelectionModeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RepeatRadioWithNonRequiredSelectionModeExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.color);
} }
class RepeatRadioWithNonRequiredSelectionModeExampleComponent {
    constructor() {
        this.colors = [
            { color: $localize `blue`, disabled: true },
            { color: $localize `green` },
            { color: $localize `yellow`, disabled: true },
            { color: $localize `cyan` },
            { color: $localize `magenta` },
            { color: $localize `black` },
        ];
        this.selectedColors = [this.colors[1]];
        this.selectedMode = "radioWithNonRequiredSelection";
    }
    onColorSelectionChange(selection) {
        this.selectedColors = selection;
    }
}
RepeatRadioWithNonRequiredSelectionModeExampleComponent.ɵfac = function RepeatRadioWithNonRequiredSelectionModeExampleComponent_Factory(t) { return new (t || RepeatRadioWithNonRequiredSelectionModeExampleComponent)(); };
RepeatRadioWithNonRequiredSelectionModeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatRadioWithNonRequiredSelectionModeExampleComponent, selectors: [["nui-repeat-radio-with-non-required-selection-mode-example"]], decls: 12, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_RADIO_WITH_NON_REQUIRED_SELECTION_MODE_REPEAT_RADIO_WITH_NON_REQUIRED_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selection:");
        i18n_0 = MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_RADIO_WITH_NON_REQUIRED_SELECTION_MODE_REPEAT_RADIO_WITH_NON_REQUIRED_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟4b13ecaace0a04d26567095f86b3c2079cf0c050␟1517966227002077718:Selection:`;
    } return [["repeatItemTemplate", ""], [1, "example"], [1, "flex-row-container"], [1, "flex-independent-row-item", "simple-label"], i18n_0, ["id", "nui-demo-singleselect-nonrequired-value", 1, "flex-independent-row-item"], ["id", "nui-demo-radio-non-required-selection-repeat", 3, "itemsSource", "selection", "selectionMode", "repeatItemTemplateRef", "selectionChange"]]; }, template: function RepeatRadioWithNonRequiredSelectionModeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatRadioWithNonRequiredSelectionModeExampleComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-repeat", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RepeatRadioWithNonRequiredSelectionModeExampleComponent_Template_nui_repeat_selectionChange_11_listener($event) { return ctx.onColorSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.selectedColors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.colors)("selection", ctx.selectedColors)("selectionMode", ctx.selectedMode)("repeatItemTemplateRef", _r0);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "umK5":
/*!************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-single-selection-mode/repeat-single-selection-mode.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: RepeatSingleSelectionModeExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatSingleSelectionModeExampleComponent", function() { return RepeatSingleSelectionModeExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat.component */ "v2n/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");




function RepeatSingleSelectionModeExampleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nui-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r4.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.status);
} }
function RepeatSingleSelectionModeExampleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 14);
} }
class RepeatSingleSelectionModeExampleComponent {
    constructor() {
        this.people = [
            { name: "Jo Smith", level: $localize `bronze`, status: $localize `active` },
            { name: "Claire Rogan", level: $localize `gold`, status: $localize `active`, disabled: true },
            { name: "Declan McGregor", level: $localize `platinum`, status: $localize `active` },
            { name: "Fergus O'Brien", level: $localize `bronze`, status: $localize `inactive` },
            { name: "Catriona Kildare", level: $localize `gold`, status: $localize `active` },
        ];
        this.selectedPeople = [this.people[2]];
    }
    onPeopleSelectionChange(selection) {
        this.selectedPeople = selection;
    }
}
RepeatSingleSelectionModeExampleComponent.ɵfac = function RepeatSingleSelectionModeExampleComponent_Factory(t) { return new (t || RepeatSingleSelectionModeExampleComponent)(); };
RepeatSingleSelectionModeExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatSingleSelectionModeExampleComponent, selectors: [["nui-repeat-single-selection-mode-example"]], decls: 13, vars: 7, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_SINGLE_SELECTION_MODE_REPEAT_SINGLE_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Selection:");
        i18n_0 = MSG_EXTERNAL_1517966227002077718$$DEMO_SRC_COMPONENTS_DEMO_REPEAT_REPEAT_SINGLE_SELECTION_MODE_REPEAT_SINGLE_SELECTION_MODE_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟4b13ecaace0a04d26567095f86b3c2079cf0c050␟1517966227002077718:Selection:`;
    } return [["repeatPeopleItemTemplate", ""], ["actionsContent", ""], [1, "example", "single-selection-example"], [1, "flex-row-container"], [1, "flex-independent-row-item", "simple-label"], i18n_0, ["id", "nui-demo-singleselect-value", 1, "flex-independent-row-item"], ["id", "nui-demo-single-repeat", "selectionMode", "single", 3, "itemsSource", "selection", "repeatItemTemplateRef", "actionsTemplateRef", "selectionChange"], ["css-class", "flex-row-item", "icon", "user", 2, "align-self", "start"], [1, "flex-row-item", "flex-column-container"], [1, "name-item"], [3, "ngClass"], [1, "status-item"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "menu"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "caret-right"]]; }, template: function RepeatSingleSelectionModeExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RepeatSingleSelectionModeExampleComponent_ng_template_0_Template, 8, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepeatSingleSelectionModeExampleComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-repeat", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function RepeatSingleSelectionModeExampleComponent_Template_nui_repeat_selectionChange_12_listener($event) { return ctx.onPeopleSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.selectedPeople), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.people)("selection", ctx.selectedPeople)("repeatItemTemplateRef", _r0)("actionsTemplateRef", _r2);
    } }, directives: [_src_lib_repeat_repeat_component__WEBPACK_IMPORTED_MODULE_1__["RepeatComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".single-selection-example[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  background-color: #0000ff;\n}\n.single-selection-example[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background-color: #009900;\n}\n.single-selection-example[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  background-color: #ffff00;\n}\n.single-selection-example[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  background-color: #ff6600;\n}\n.single-selection-example[_ngcontent-%COMP%]   .cyan[_ngcontent-%COMP%] {\n  background-color: #00ffff;\n}\n.single-selection-example[_ngcontent-%COMP%]   .magenta[_ngcontent-%COMP%] {\n  background-color: #ff00ff;\n}\n.single-selection-example[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  background-color: #000000;\n}\n.single-selection-example[_ngcontent-%COMP%]   .flex-row-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.single-selection-example[_ngcontent-%COMP%]   .flex-row-item[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.single-selection-example[_ngcontent-%COMP%]   .flex-row-item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.single-selection-example[_ngcontent-%COMP%]   .flex-independent-row-item[_ngcontent-%COMP%] {\n  margin: 15px 5px;\n}\n.single-selection-example[_ngcontent-%COMP%]   .flex-column-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.single-selection-example[_ngcontent-%COMP%]   .name-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n}\n.single-selection-example[_ngcontent-%COMP%]   .status-item[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--nui-color-text-secondary,rgba(17, 17, 17, 0.6));\n}\n.single-selection-example[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--nui-color-brand-four,#FBE04B);\n}\n.single-selection-example[_ngcontent-%COMP%]   .platinum[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--nui-color-brand-seven,#A1A1A1);\n}\n.single-selection-example[_ngcontent-%COMP%]   .bronze[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--nui-color-brand,#f99d1c);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGVhdC1zaW5nbGUtc2VsZWN0aW9uLW1vZGUuZXhhbXBsZS5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRVEseUJBQUE7QUFGUjtBQUFBO0VBTVEseUJBQUE7QUFIUjtBQUhBO0VBVVEseUJBQUE7QUFKUjtBQU5BO0VBY1EseUJBQUE7QUFMUjtBQVRBO0VBa0JRLHlCQUFBO0FBTlI7QUFaQTtFQXNCUSx5QkFBQTtBQVBSO0FBZkE7RUEwQlEseUJBQUE7QUFSUjtBQWxCQTtFQThCUSxhQUFBO0FBVFI7QUFyQkE7RUFrQ1EsYUFBQTtBQVZSO0FBeEJBO0VBc0NRLGNBQUE7QUFYUjtBQTNCQTtFQTBDUSxnQkFBQTtBQVpSO0FBOUJBO0VBOENRLGFBQUE7RUFDQSxzQkFBQTtBQWJSO0FBbENBO0VBbURRLGVBQUE7RUFDQSxpQkFBQTtBQWRSO0FBdENBO0VBd0RRLGVBQUE7RUNyREosNERBQUE7QUR1Q0o7QUExQ0E7RUE2RFEsZUFBQTtFQUNBLGlCQUFBO0VDM0RKLDBDQUFBO0FENENKO0FBL0NBO0VBbUVRLGVBQUE7RUFDQSxpQkFBQTtFQ2pFSiwyQ0FBQTtBRGlESjtBQXBEQTtFQXlFUSxlQUFBO0VBQ0EsaUJBQUE7RUN2RUoscUNBQUE7QURzREoiLCJmaWxlIjoicmVwZWF0LXNpbmdsZS1zZWxlY3Rpb24tbW9kZS5leGFtcGxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwibnVpLWZyYW1ld29yay12YXJpYWJsZXNcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJtaXhpbnNcIjtcbi5zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUge1xuICAgIC5ibHVlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBmZjtcbiAgICB9XG5cbiAgICAuZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OTAwO1xuICAgIH1cblxuICAgIC55ZWxsb3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xuICAgIH1cblxuICAgIC5vcmFuZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjAwO1xuICAgIH1cblxuICAgIC5jeWFuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmZjtcbiAgICB9XG5cbiAgICAubWFnZW50YSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwZmY7XG4gICAgfVxuXG4gICAgLmJsYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICAuZmxleC1yb3ctY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuZmxleC1yb3ctaXRlbSB7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgfVxuXG4gICAgLmZsZXgtcm93LWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuZmxleC1pbmRlcGVuZGVudC1yb3ctaXRlbSB7XG4gICAgICAgIG1hcmdpbjogMTVweCA1cHg7XG4gICAgfVxuXG4gICAgLmZsZXgtY29sdW1uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLm5hbWUtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnN0YXR1cy1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLmdvbGQge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci1icmFuZC1mb3VyKTtcbiAgICB9XG5cbiAgICAucGxhdGludW0ge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIG51aS1jb2xvci1icmFuZC1zZXZlbik7XG4gICAgfVxuXG4gICAgLmJyb256ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIC5zZXRDc3NWYXJpYWJsZShjb2xvciwgbnVpLWNvbG9yLWJyYW5kKTtcbiAgICB9XG59XG4iLCIuc2V0Q3NzVmFyaWFibGUoQHByb3BlcnR5LCBAdmFsdWUpe1xuICAgIEBldmFsdWF0ZWQgOiBcIkB7dmFsdWV9XCI7XG4gICAgLy90aGUgZG91YmxlIEAgZm9yY2VzIGEgaW5kaXJlY3Rpb24gZXZhbHVhdGlvbiwga2luZGEgbGlrZSBhIHBvaW50ZXJcbiAgICBAZmFsbGJhY2sgOiBAQGV2YWx1YXRlZDtcblxuICAgIEB7cHJvcGVydHl9OiB+XCJ2YXIoLS1Ae3ZhbHVlfSxAe2ZhbGxiYWNrfSlcIjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "vUEW":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat.module.ts ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { ScrollingModule } from \"@angular/cdk/scrolling\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiFormFieldModule,\n    NuiMessageModule, NuiProgressModule,\n    NuiRepeatModule,\n    NuiSearchModule,\n    NuiSwitchModule,\n    NuiTabsModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    RepeatDisabledMultiSelectionExampleComponent,\n    RepeatDragHandleExampleComponent,\n    RepeatDragPreviewExampleComponent,\n    RepeatDragSimpleExampleComponent,\n    RepeatExampleComponent,\n    RepeatItemExampleComponent,\n    RepeatMultiSelectionExampleComponent,\n    RepeatRadioSelectionModeExampleComponent,\n    RepeatRadioWithNonRequiredSelectionModeExampleComponent,\n    RepeatReorderItemConfigExampleComponent,\n    RepeatReorderSimpleExampleComponent,\n    RepeatSimpleExampleComponent,\n    RepeatSingleSelectionModeExampleComponent,\n    RepeatSingleWithRequiredSelectionModeExampleComponent,\n    RepeatTestComponent,\n    RepeatVirtualScrollComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: RepeatExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"repeat-item\",\n        component: RepeatItemExampleComponent,\n    },\n    {\n        path: \"repeat-test\",\n        component: RepeatTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiRepeatModule,\n        NuiSwitchModule,\n        NuiMessageModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n        ScrollingModule,\n        NuiProgressModule,\n        NuiSearchModule,\n        NuiFormFieldModule,\n        NuiTabsModule,\n    ],\n    declarations: [\n        RepeatExampleComponent,\n        RepeatItemExampleComponent,\n        RepeatDisabledMultiSelectionExampleComponent,\n        RepeatMultiSelectionExampleComponent,\n        RepeatRadioSelectionModeExampleComponent,\n        RepeatRadioWithNonRequiredSelectionModeExampleComponent,\n        RepeatSimpleExampleComponent,\n        RepeatDragSimpleExampleComponent,\n        RepeatReorderSimpleExampleComponent,\n        RepeatDragPreviewExampleComponent,\n        RepeatSingleSelectionModeExampleComponent,\n        RepeatSingleWithRequiredSelectionModeExampleComponent,\n        RepeatTestComponent,\n        RepeatReorderItemConfigExampleComponent,\n        RepeatDragHandleExampleComponent,\n        RepeatVirtualScrollComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class RepeatModule {\n}\n");

/***/ }),

/***/ "wHrv":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-virtual-scroll/repeat-virtual-scroll-data-source.ts ***!
  \****************************************************************************************************/
/*! exports provided: RepeatVirtualScrollDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatVirtualScrollDataSource", function() { return RepeatVirtualScrollDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _repeat_virtual_scroll_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./repeat-virtual-scroll-data */ "STWZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RepeatVirtualScrollDataSource extends _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["ServerSideDataSource"] {
    getFilteredData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
                const itemsSource = response.items;
                return {
                    repeat: { itemsSource },
                };
            })).toPromise();
        });
    }
    getBackendData(filters) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            items: (_repeat_virtual_scroll_data__WEBPACK_IMPORTED_MODULE_4__["DATA"] === null || _repeat_virtual_scroll_data__WEBPACK_IMPORTED_MODULE_4__["DATA"] === void 0 ? void 0 : _repeat_virtual_scroll_data__WEBPACK_IMPORTED_MODULE_4__["DATA"].map(item => ({
                name: item.name,
                location: item.location,
                status: item.status,
            }))) || [],
        });
    }
}
RepeatVirtualScrollDataSource.ɵfac = function RepeatVirtualScrollDataSource_Factory(t) { return ɵRepeatVirtualScrollDataSource_BaseFactory(t || RepeatVirtualScrollDataSource); };
RepeatVirtualScrollDataSource.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RepeatVirtualScrollDataSource, factory: RepeatVirtualScrollDataSource.ɵfac });
const ɵRepeatVirtualScrollDataSource_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](RepeatVirtualScrollDataSource);


/***/ }),

/***/ "wyKk":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/repeat/repeat-drag-preview/repeat-drag-preview.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-repeat [itemsSource]=\"companies\"\n            dragPreviewClass=\"nui-dnd-drag-preview\"\n            [dragPreviewTemplateRef]=\"dragPreviewTemplate\"\n            [repeatItemTemplateRef]=\"repeatItemTemplate\"\n            (itemsReordered)=\"onItemsReordered($event)\">\n</nui-repeat>\n\n<!-- Content template for each item -->\n<ng-template #repeatItemTemplate let-item=\"item\">\n    {{item.name}}\n</ng-template>\n\n<!-- Drag preview template -->\n<ng-template #dragPreviewTemplate  let-item=\"item\">\n    <p>This is the preview for {{item.name}}</p>\n    <img width=\"100\" [src]=\"item.preview\" [alt]=\"item.name\">\n</ng-template>\n");

/***/ }),

/***/ "ykwr":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/repeat/repeat-item/repeat-item.example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RepeatItemExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatItemExampleComponent", function() { return RepeatItemExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_repeat_repeat_item_repeat_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/repeat/repeat-item/repeat-item.component */ "3n1F");



function RepeatItemExampleComponent_nui_repeat_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-repeat-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clickable", false)("nowrap", true)("selected", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class RepeatItemExampleComponent {
    constructor() {
        this.items = [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`];
    }
}
RepeatItemExampleComponent.ɵfac = function RepeatItemExampleComponent_Factory(t) { return new (t || RepeatItemExampleComponent)(); };
RepeatItemExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepeatItemExampleComponent, selectors: [["nui-repeat-item-example"]], decls: 3, vars: 1, consts: [["id", "nui-repeat-item-example-repeat"], [3, "clickable", "nowrap", "selected", 4, "ngFor", "ngForOf"], [3, "clickable", "nowrap", "selected"]], template: function RepeatItemExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepeatItemExampleComponent_nui_repeat_item_2_Template, 2, 4, "nui-repeat-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _src_lib_repeat_repeat_item_repeat_item_component__WEBPACK_IMPORTED_MODULE_2__["RepeatItemComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-repeat-repeat-module-es2015.js.map