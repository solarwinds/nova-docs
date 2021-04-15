(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-menu-menu-module"],{

/***/ "+jLg":
/*!**************************************************************************************!*\
  !*** ./demo/src/components/demo/menu/menu-visual-test/menu-visual-test.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MenuVisualTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVisualTestComponent", function() { return MenuVisualTestComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-group/menu-group.component */ "ZZfx");
/* harmony import */ var _src_lib_menu_menu_item_menu_option_menu_option_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-option/menu-option.component */ "Y4CG");
/* harmony import */ var _src_lib_menu_menu_item_menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-link/menu-link.component */ "uzx5");
/* harmony import */ var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */ "6sIJ");







class MenuVisualTestComponent {
    constructor() {
        this.itemsSource = [
            { header: "Group 1", itemsSource: [
                    { title: "Item 1", itemType: "action", action: this.actionDone },
                    { title: "Item 2", itemType: "action", action: () => alert("hello") },
                    { title: "Item 3", itemType: "action", action: this.actionWithParams.bind(this, 2) },
                    { title: "Item 4", itemType: "action", action: this.actionDone },
                    { title: "Item 5", itemType: "action", action: this.actionDone },
                    { title: "Item 6", itemType: "action", action: this.actionDone },
                ] },
            { itemsSource: [
                    { title: "Item 7", itemType: "action", action: this.actionDone },
                    { title: "Item 8", itemType: "action", action: this.actionDone },
                    { title: "Item 9", itemType: "action", action: this.actionDone },
                    { title: "Item 10", itemType: "action", action: this.actionDone },
                    { title: "Item 11", itemType: "action", action: this.actionDone },
                    { title: "Item 12", itemType: "action", action: this.actionDone },
                    { title: "Item 13", itemType: "action", action: this.actionDone, disabled: true },
                    { title: "Item 14", itemType: "action", action: this.actionDone, itemClass: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["MenuActionType"].destructive },
                ] },
        ];
        this.itemsSourceVariations = [
            { header: "section title", itemsSource: [
                    { title: "Menu Item", itemType: "action", action: this.actionDone },
                    { title: "Hover me", itemType: "action", action: this.actionDone },
                    { title: "Selected menu item", isSelected: true },
                    { title: "Menu item", itemType: "switch", checked: true },
                    { title: "Menu disabled item with long text", itemType: "switch", checked: false, disabled: true },
                    { title: "Menu item with checkbox", itemType: "option", disabled: true },
                    { title: "Menu item with icon", itemType: "action", icon: "table" },
                    { title: "Link menu item", itemType: "link", url: "#button", disabled: true },
                    { title: "Export PDF", itemType: "link", icon: "export-pdf", url: "#button" },
                ] },
        ];
    }
    actionDone() {
        console.log("Action Done");
    }
    actionWithParams(index) {
        console.log("action", this.itemsSource[0].itemsSource[index].title);
    }
}
MenuVisualTestComponent.ɵfac = function MenuVisualTestComponent_Factory(t) { return new (t || MenuVisualTestComponent)(); };
MenuVisualTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuVisualTestComponent, selectors: [["nui-menu-visual-test"]], decls: 58, vars: 10, consts: [[1, "row"], [1, "col-md-3"], ["id", "nui-demo-basic-menu-with-icon", "title", "Basic menu", 3, "itemsSource"], ["id", "nui-demo-primary-menu-with-icon", "title", "Primary menu", "displayStyle", "primary", "icon", "add", 3, "itemsSource"], ["id", "nui-demo-action-menu-with-icon", "title", "Action menu", "displayStyle", "action", "icon", "check", 3, "itemsSource"], [1, "pull-right"], ["id", "nui-demo-destructive-menu-with-icon", "title", "Dstrctv", "displayStyle", "destructive", "icon", "run", 3, "itemsSource"], ["id", "nui-demo-menu-variants_menu", "icon", "menu", 3, "itemsSource"], ["id", "nui-demo-menu-variants_add", "icon", "add", 3, "itemsSource"], ["id", "nui-demo-menu-variants_gear", "icon", "gear", 3, "itemsSource"], ["id", "nui-demo-menu-variants_run", "displayStyle", "destructive", "icon", "run", 3, "itemsSource"], ["title", "Multi-selection", "id", "nui-demo-multi-selection-menu"], ["header", "section title"], ["type", "destructive", "icon", "export-pdf"], [1, "row", "footer"], [1, "col-md-1"], ["id", "nui-demo-basic-menu-with-icon-footer", "title", "Basic menu", 3, "itemsSource"], [1, "col-md-11"], ["id", "nui-demo-destructive-menu-with-icon-footer", "title", "Dstrctv", "displayStyle", "destructive", "icon", "run", 3, "itemsSource"]], template: function MenuVisualTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic menu with different display types and icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nui-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nui-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "nui-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "nui-menu", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Menu items variations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "nui-menu", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "nui-menu", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "nui-menu", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "nui-menu", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Menu with multiselection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nui-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nui-menu-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Menu item with checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Second item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Third menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Fourth item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nui-menu-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "First from second group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Another menu item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Menu item with checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nui-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nui-menu-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Browse all properties...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nui-menu-action", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Destructive action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "nui-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "nui-menu", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSourceVariations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSourceVariations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSourceVariations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSourceVariations);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
    } }, directives: [_src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_3__["MenuGroupComponent"], _src_lib_menu_menu_item_menu_option_menu_option_component__WEBPACK_IMPORTED_MODULE_4__["MenuOptionComponent"], _src_lib_menu_menu_item_menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_5__["MenuLinkComponent"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_6__["MenuActionComponent"]], styles: [".footer[_ngcontent-%COMP%] {\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n                height: 60px;\n                line-height: 60px;\n                background-color: #f5f5f5;\n        }\n        .row[_ngcontent-%COMP%] {\n                margin-right: 0;\n                margin-left: -10px;\n        }"] });


/***/ }),

/***/ "62vo":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-append-to-body/menu-append-to-body.example.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n\n\n@Component({\n    selector: \"nui-menu-append-to-body-example\",\n    templateUrl: \"./menu-append-to-body.example.component.html\",\n})\nexport class MenuAppendToBodyExampleComponent {\n    public dataset = {\n        itemsInGroups: [\n            {\n                header: $localize `Section 1 title`,\n                items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`],\n            },\n            {\n                header: $localize `Section 2 title`,\n                items: [$localize `Item 4`, $localize `Item 5`, $localize `Item 6`],\n            },\n        ],\n    };\n    constructor() { }\n\n    public actionDone(item: string): void {\n        console.log(`Action done! Item: ` + item);\n    }\n}\n");

/***/ }),

/***/ "7Y/b":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-custom-item/menu-custom-item.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-menu-custom-item-example\",\n    templateUrl: \"./menu-custom-item.example.component.html\",\n    styleUrls: [\"./menu-custom-item.example.component.less\"],\n})\nexport class MenuCustomItemExampleComponent {\n    public checked: boolean = false;\n    public doNotClosePopup(event: Event) {\n        event.stopPropagation();\n    }\n    public switchClick(event: Event) {\n        this.doNotClosePopup(event);\n        this.checked = !this.checked;\n        console.log(`Switch is ${this.checked}`);\n    }\n}\n");

/***/ }),

/***/ "BgYF":
/*!************************************************************************!*\
  !*** ./demo/src/components/demo/menu/menu-test/menu-test.component.ts ***!
  \************************************************************************/
/*! exports provided: MenuTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTestComponent", function() { return MenuTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-group/menu-group.component */ "ZZfx");
/* harmony import */ var _src_lib_menu_menu_item_menu_option_menu_option_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-option/menu-option.component */ "Y4CG");
/* harmony import */ var _src_lib_menu_menu_item_menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-link/menu-link.component */ "uzx5");





class MenuTestComponent {
    constructor() {
        this.itemsSource = [
            {
                header: "section title", itemsSource: [
                    { title: "Menu Item", itemType: "action", action: this.actionDone },
                    { title: "Selected menu item", isSelected: true },
                    { title: "Switched checked", itemType: "switch", checked: true },
                    { title: "Switch unchecked", itemType: "switch", checked: false },
                    { title: "Disabled switch", itemType: "switch", disabled: true, checked: false },
                    { title: "Disabled action", itemType: "action", disabled: true },
                    { title: "Disabled link", itemType: "link", url: "#button", disabled: true },
                    { title: "Disabled option", itemType: "option", disabled: true, checked: false },
                    { title: "Menu item with checkbox", itemType: "option" },
                    { title: "Menu item with icon", itemType: "action", icon: "table" },
                    { title: "Link menu item", itemType: "link", url: "#button" },
                    { title: "Export PDF", itemType: "link", icon: "export-pdf", url: "#button" },
                ],
            },
            {
                header: "section 2 title", itemsSource: [
                    { title: "Menu Item1", itemType: "option", action: this.actionDone },
                    { title: "Menu Item2", itemType: "option", action: this.actionDone },
                    { title: "Menu Item3", itemType: "option", action: this.actionDone },
                ],
            },
        ];
    }
    actionDone() {
        console.log("Action Done");
    }
}
MenuTestComponent.ɵfac = function MenuTestComponent_Factory(t) { return new (t || MenuTestComponent)(); };
MenuTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuTestComponent, selectors: [["nui-menu-test"]], decls: 25, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1469494077553268214$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_1 = goog.getMsg("Basic menu");
        i18n_0 = MSG_EXTERNAL_1469494077553268214$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟459f712451533dac6215d0d15efe805d6379b3b7␟1469494077553268214:Basic menu`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4725526591242960265$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_3 = goog.getMsg("Menu Append to Body");
        i18n_2 = MSG_EXTERNAL_4725526591242960265$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟8baaa2413139278b7b622779c6f4c81080494a83␟4725526591242960265:Menu Append to Body`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_42471507361008637$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_5 = goog.getMsg("section title");
        i18n_4 = MSG_EXTERNAL_42471507361008637$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟37ab755bd1223b84737e202f57606af186fc27f7␟42471507361008637:section title`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1435844547447597558$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_7 = goog.getMsg("Menu item with checkbox");
        i18n_6 = MSG_EXTERNAL_1435844547447597558$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟fba3676a805e53f61111a4c46fdfc0e2b20dc03a␟1435844547447597558:Menu item with checkbox`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1503643005752747957$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_9 = goog.getMsg("Second item");
        i18n_8 = MSG_EXTERNAL_1503643005752747957$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟8197965b547e46f580c465ecdcd001727adbc9fe␟1503643005752747957:Second item`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4896807266968429625$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_11 = goog.getMsg("Third menu item");
        i18n_10 = MSG_EXTERNAL_4896807266968429625$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟788ecf2bad3181df1f3ea0b28cc89b1b955bddca␟4896807266968429625:Third menu item`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3186806350442644949$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_13 = goog.getMsg("Fourth item");
        i18n_12 = MSG_EXTERNAL_3186806350442644949$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟f0a66cbea9b72b20705fc273c9b9deba13f95fdb␟3186806350442644949:Fourth item`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_42471507361008637$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_15 = goog.getMsg("section title");
        i18n_14 = MSG_EXTERNAL_42471507361008637$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟37ab755bd1223b84737e202f57606af186fc27f7␟42471507361008637:section title`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3638739447817710697$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_17 = goog.getMsg("First from second group");
        i18n_16 = MSG_EXTERNAL_3638739447817710697$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_17;
    }
    else {
        i18n_16 = $localize `:␟a82a630755ca507f1315e123e3039ab72855b5a3␟3638739447817710697:First from second group`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1375776897945942845$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_19 = goog.getMsg("Another menu item");
        i18n_18 = MSG_EXTERNAL_1375776897945942845$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_19;
    }
    else {
        i18n_18 = $localize `:␟8f69b9e2428e0ccbb1d7fd740ffeb5ea451dd3ce␟1375776897945942845:Another menu item`;
    } let i18n_20; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1435844547447597558$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_21 = goog.getMsg("Menu item with checkbox");
        i18n_20 = MSG_EXTERNAL_1435844547447597558$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_21;
    }
    else {
        i18n_20 = $localize `:␟fba3676a805e53f61111a4c46fdfc0e2b20dc03a␟1435844547447597558:Menu item with checkbox`;
    } let i18n_22; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1814636395353536688$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_23 = goog.getMsg("Browse all properties...");
        i18n_22 = MSG_EXTERNAL_1814636395353536688$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_TEST_MENU_TEST_COMPONENT_TS_23;
    }
    else {
        i18n_22 = $localize `:␟3914be180f794e5a2a1b52cad85b437fc9eec073␟1814636395353536688:Browse all properties...`;
    } return [[2, "margin", "20px"], ["id", "nui-demo-e2e-menu-variants", "title", i18n_0, 3, "itemsSource"], ["id", "nui-demo-e2e-menu-append-to-body", "title", i18n_2, 3, "appendToBody"], ["id", "nui-demo-e2e-menu-append-to-body-content"], ["header", i18n_4], i18n_6, i18n_8, i18n_10, i18n_12, ["header", i18n_14], i18n_16, i18n_18, i18n_20, i18n_22]; }, template: function MenuTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu items variations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nui-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-menu-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nui-menu-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nui-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nui-menu-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](24, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemsSource", ctx.itemsSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appendToBody", true);
    } }, directives: [_src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_2__["MenuGroupComponent"], _src_lib_menu_menu_item_menu_option_menu_option_component__WEBPACK_IMPORTED_MODULE_3__["MenuOptionComponent"], _src_lib_menu_menu_item_menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_4__["MenuLinkComponent"]], encapsulation: 2 });


/***/ }),

/***/ "CO4M":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-docs/menu-docs.example.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-menu-docs-example\",\n    templateUrl: \"./menu-docs.example.component.html\",\n})\nexport class MenuExampleComponent {}\n");

/***/ }),

/***/ "Dms1":
/*!*******************************************************************************************************!*\
  !*** ./demo/src/components/demo/menu sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./basic-menu/basic-menu.example.component.html": "UgxI",
	"./basic-menu/basic-menu.example.component.ts": "haHZ",
	"./index.ts": "Sb5h",
	"./menu-append-to-body/menu-append-to-body.example.component.html": "iV8N",
	"./menu-append-to-body/menu-append-to-body.example.component.ts": "62vo",
	"./menu-custom-item/menu-custom-item.example.component.html": "hiZm",
	"./menu-custom-item/menu-custom-item.example.component.less": "WiCh",
	"./menu-custom-item/menu-custom-item.example.component.ts": "7Y/b",
	"./menu-docs/menu-docs.example.component.html": "ETzi",
	"./menu-docs/menu-docs.example.component.ts": "CO4M",
	"./menu-item-variations/menu-item-variations.example.component.html": "qYaP",
	"./menu-item-variations/menu-item-variations.example.component.ts": "jHHc",
	"./menu-test/menu-test.component.html": "vc/w",
	"./menu-test/menu-test.component.ts": "SAdc",
	"./menu-visual-test/menu-visual-test.component.html": "wmyW",
	"./menu-visual-test/menu-visual-test.component.ts": "j3pz",
	"./menu.module.ts": "zbwM"
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
webpackContext.id = "Dms1";

/***/ }),

/***/ "ETzi":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-docs/menu-docs.example.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiMenuModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n\n<nui-message [allowDismiss]=\"false\" type=\"warning\">\n    Code-based menu (using <code>itemsSource</code>) is deprecated in bits v7.\n</nui-message>\n\n<p>\n    To add simple items to the <code>Menu</code> component, please use <code>nui-menu-action</code> components as html children of <code>nui-menu</code>.\n</p>\n<p>\n    One thing to note about the menu's opening behavior is that it will automatically reposition itself when opened to prevent being visually truncated if its default placement falls\n    outside of the viewable area. By default, the menu placement is calculated from the edge of the window. However, you can optionally include a custom container with the class\n    <code>nui-edge-definer</code> surrounding the menu in your html to force the menu to calculate its open position based on the edges of its container.\n</p>\n<nui-example-wrapper filenamePrefix=\"basic-menu\" exampleTitle=\"Basic Menu\">\n    <nui-basic-menu-example></nui-basic-menu-example>\n</nui-example-wrapper>\n\n<h2>Item Variations</h2>\n\n<p>Following components can be used inside <code>menuComponent</code>:\n<code>nui-menu-action</code>, <code>nui-menu-link</code>, <code>nui-menu-option</code>, <code>nui-menu-switch</code>.\n<code>itemTypes</code> could be mixed in one <code>nui-menu</code> component.</p>\n<p>Also button for menu could be configured with such properties: <code>size</code>: compact | small | default | large,\n<code>displayStyle</code>: \"default\" | \"primary\" | \"action\" | \"destructive\", <code>icon</code> (default value is &#8243;caret-down&#8243;). For more information visit Component > ButtonComponent section.\n</p>\n<p>\n    Menu items can be grouped using <code>nui-menu-group</code> component\n</p>\n<nui-example-wrapper filenamePrefix=\"menu-item-variations\" exampleTitle=\"Menu Item Variations\">\n    <nui-menu-item-variations-example></nui-menu-item-variations-example>\n</nui-example-wrapper>\n\n<h2>Append to Body</h2>\n<p>To attach menu popup to &lt;body&gt; use <code>appendToBody</code> input.\n   It allows menu to ignore containers and overlap them.\n</p>\n<nui-example-wrapper filenamePrefix=\"menu-append-to-body\" exampleTitle=\"Append to Body\">\n    <nui-menu-append-to-body-example></nui-menu-append-to-body-example>\n</nui-example-wrapper>\n\n<h2>Custom Item</h2>\n<p>To create a custom menu item, put item template inside <code>nui-menu-item</code> component.\n</p>\n<p>\n    Note: menu-items still have max width limited to 450 px. This is according to UX mockups.\n    For better control over switch please use <code>nui-switch</code> inside <code>nui-menu-item</code> instead of <code>nui-menu-switch</code>\n</p>\n<nui-example-wrapper filenamePrefix=\"menu-custom-item\" exampleTitle=\"Custom Item\">\n    <nui-menu-custom-item-example></nui-menu-custom-item-example>\n</nui-example-wrapper>\n\n");

/***/ }),

/***/ "QjDY":
/*!********************************************************************************!*\
  !*** ./demo/src/components/demo/menu/menu-docs/menu-docs.example.component.ts ***!
  \********************************************************************************/
/*! exports provided: MenuExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuExampleComponent", function() { return MenuExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/message/message.component */ "4pDv");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _basic_menu_basic_menu_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basic-menu/basic-menu.example.component */ "zxe3");
/* harmony import */ var _menu_item_variations_menu_item_variations_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-item-variations/menu-item-variations.example.component */ "y/TN");
/* harmony import */ var _menu_append_to_body_menu_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-append-to-body/menu-append-to-body.example.component */ "izxd");
/* harmony import */ var _menu_custom_item_menu_custom_item_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu-custom-item/menu-custom-item.example.component */ "YZtJ");







class MenuExampleComponent {
}
MenuExampleComponent.ɵfac = function MenuExampleComponent_Factory(t) { return new (t || MenuExampleComponent)(); };
MenuExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuExampleComponent, selectors: [["nui-menu-docs-example"]], decls: 102, vars: 1, consts: [["type", "warning", 3, "allowDismiss"], ["filenamePrefix", "basic-menu", "exampleTitle", "Basic Menu"], ["filenamePrefix", "menu-item-variations", "exampleTitle", "Menu Item Variations"], ["filenamePrefix", "menu-append-to-body", "exampleTitle", "Append to Body"], ["filenamePrefix", "menu-custom-item", "exampleTitle", "Custom Item"]], template: function MenuExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NuiMenuModule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Code-based menu (using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "itemsSource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") is deprecated in bits v7.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " To add simple items to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " component, please use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "nui-menu-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " components as html children of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "nui-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " One thing to note about the menu's opening behavior is that it will automatically reposition itself when opened to prevent being visually truncated if its default placement falls outside of the viewable area. By default, the menu placement is calculated from the edge of the window. However, you can optionally include a custom container with the class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "nui-edge-definer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " surrounding the menu in your html to force the menu to calculate its open position based on the edges of its container.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nui-basic-menu-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Item Variations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Following components can be used inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "menuComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ":\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "nui-menu-action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "nui-menu-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "nui-menu-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "nui-menu-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "itemTypes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " could be mixed in one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "nui-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Also button for menu could be configured with such properties: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ": compact | small | default | large,\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "displayStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ": \"default\" | \"primary\" | \"action\" | \"destructive\", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " (default value is \u2033caret-down\u2033). For more information visit Component > ButtonComponent section.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Menu items can be grouped using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "nui-menu-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " component\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nui-example-wrapper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nui-menu-item-variations-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Append to Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "To attach menu popup to <body> use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "appendToBody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " input. It allows menu to ignore containers and overlap them.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nui-example-wrapper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nui-menu-append-to-body-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Custom Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "To create a custom menu item, put item template inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "nui-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " component.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Note: menu-items still have max width limited to 450 px. This is according to UX mockups. For better control over switch please use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "nui-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " inside ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "nui-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " instead of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "nui-menu-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nui-example-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "nui-menu-custom-item-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowDismiss", false);
    } }, directives: [_src_lib_message_message_component__WEBPACK_IMPORTED_MODULE_1__["MessageComponent"], _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["ExampleWrapperComponent"], _basic_menu_basic_menu_example_component__WEBPACK_IMPORTED_MODULE_3__["BasicMenuExampleComponent"], _menu_item_variations_menu_item_variations_example_component__WEBPACK_IMPORTED_MODULE_4__["MenuItemVariationsExampleComponent"], _menu_append_to_body_menu_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_5__["MenuAppendToBodyExampleComponent"], _menu_custom_item_menu_custom_item_example_component__WEBPACK_IMPORTED_MODULE_6__["MenuCustomItemExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "SAdc":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-test/menu-test.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { IMenuGroup } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-menu-test\",\n    templateUrl: \"./menu-test.component.html\",\n})\nexport class MenuTestComponent {\n\n    public itemsSource: IMenuGroup[] = [\n        {\n            header: \"section title\", itemsSource: [\n                {title: \"Menu Item\", itemType: \"action\", action: this.actionDone},\n                {title: \"Selected menu item\", isSelected: true},\n                {title: \"Switched checked\", itemType: \"switch\", checked: true},\n                {title: \"Switch unchecked\", itemType: \"switch\", checked: false},\n                {title: \"Disabled switch\", itemType: \"switch\", disabled: true, checked: false},\n                {title: \"Disabled action\", itemType: \"action\", disabled: true},\n                {title: \"Disabled link\", itemType: \"link\", url: \"#button\", disabled: true},\n                {title: \"Disabled option\", itemType: \"option\", disabled: true, checked: false},\n                {title: \"Menu item with checkbox\", itemType: \"option\"},\n                {title: \"Menu item with icon\", itemType: \"action\", icon: \"table\"},\n                {title: \"Link menu item\", itemType: \"link\", url: \"#button\"},\n                {title: \"Export PDF\", itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n            ],\n        },\n        {\n            header: \"section 2 title\", itemsSource: [\n                {title: \"Menu Item1\", itemType: \"option\", action: this.actionDone},\n                {title: \"Menu Item2\", itemType: \"option\", action: this.actionDone},\n                {title: \"Menu Item3\", itemType: \"option\", action: this.actionDone},\n            ],\n        },\n    ];\n\n    public actionDone(): void {\n        console.log(\"Action Done\");\n    }\n}\n");

/***/ }),

/***/ "Sb5h":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/index.ts ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./menu-docs/menu-docs.example.component\";\nexport * from \"./menu-append-to-body/menu-append-to-body.example.component\";\nexport * from \"./basic-menu/basic-menu.example.component\";\nexport * from \"./menu-item-variations/menu-item-variations.example.component\";\nexport * from \"./menu-custom-item/menu-custom-item.example.component\";\nexport * from \"./menu-visual-test/menu-visual-test.component\";\nexport * from \"./menu-test/menu-test.component\";\n");

/***/ }),

/***/ "UgxI":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/basic-menu/basic-menu.example.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-menu id=\"nui-demo-basic-menu\" title=\"Basic menu\" i18n-title>\n    <nui-menu-action *ngFor=\"let item of items\"\n                   (actionDone)=\"actionDone(item)\">\n        {{item}}\n    </nui-menu-action>\n</nui-menu>\n");

/***/ }),

/***/ "WiCh":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-custom-item/menu-custom-item.example.component.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-custom-example__ellipsis {\n    max-width: 250px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n");

/***/ }),

/***/ "YZtJ":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/menu/menu-custom-item/menu-custom-item.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MenuCustomItemExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCustomItemExampleComponent", function() { return MenuCustomItemExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */ "fNSn");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");
/* harmony import */ var _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/switch/switch.component */ "6CEj");





class MenuCustomItemExampleComponent {
    constructor() {
        this.checked = false;
    }
    doNotClosePopup(event) {
        event.stopPropagation();
    }
    switchClick(event) {
        this.doNotClosePopup(event);
        this.checked = !this.checked;
        console.log(`Switch is ${this.checked}`);
    }
}
MenuCustomItemExampleComponent.ɵfac = function MenuCustomItemExampleComponent_Factory(t) { return new (t || MenuCustomItemExampleComponent)(); };
MenuCustomItemExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuCustomItemExampleComponent, selectors: [["nui-menu-custom-item-example"]], decls: 11, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5830167351171099407$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Menu Custom Items");
        i18n_0 = MSG_EXTERNAL_5830167351171099407$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟7b6fcdfb9dc96d660fe26b4ee941e523736d1ded␟5830167351171099407:Menu Custom Items`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7613825552897231016$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("This one does not close popup!");
        i18n_2 = MSG_EXTERNAL_7613825552897231016$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟7e6301769db92f77450751a5f02ab42dc42df904␟7613825552897231016:This one does not close popup!`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2609355838156890609$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("This is wide ellipsified switch inside item");
        i18n_4 = MSG_EXTERNAL_2609355838156890609$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟5a6d8e154daa0de3cdc2eacabccacd497514bd52␟2609355838156890609:This is wide ellipsified switch inside item`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_248047413310670190$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_7 = goog.getMsg(" This is wide ellipsified switch inside item ");
        i18n_6 = MSG_EXTERNAL_248047413310670190$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟8dc392892d9455ee0709a5e891ce126a49ba974c␟248047413310670190: This is wide ellipsified switch inside item `;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6816632194589402254$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_9 = goog.getMsg(" This one closes popup ");
        i18n_8 = MSG_EXTERNAL_6816632194589402254$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_CUSTOM_ITEM_MENU_CUSTOM_ITEM_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟7e1232e310c3a7a640911740f1bba37e2f77a6af␟6816632194589402254: This one closes popup `;
    } return [["title", i18n_0], ["nui-button", "", "type", "button", 3, "click"], i18n_2, [3, "click"], [1, "nui-menu-item__switch", "d-flex"], [3, "value"], ["title", i18n_4, 1, "menu-custom-example__ellipsis"], i18n_6, i18n_8]; }, template: function MenuCustomItemExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCustomItemExampleComponent_Template_button_click_2_listener($event) { return ctx.doNotClosePopup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-menu-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuCustomItemExampleComponent_Template_nui_menu_item_click_4_listener($event) { return ctx.switchClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-switch", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nui-menu-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.checked);
    } }, directives: [_src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_2__["MenuItemComponent"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], _src_lib_switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]], styles: [".menu-custom-example__ellipsis[_ngcontent-%COMP%] {\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtY3VzdG9tLWl0ZW0uZXhhbXBsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6Im1lbnUtY3VzdG9tLWl0ZW0uZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWN1c3RvbS1leGFtcGxlX19lbGxpcHNpcyB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuIl19 */"] });


/***/ }),

/***/ "haHZ":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/basic-menu/basic-menu.example.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-basic-menu-example\",\n    templateUrl: \"./basic-menu.example.component.html\",\n})\nexport class BasicMenuExampleComponent {\n    public items = [\"Item 1\", \"Item 2\", \"Item 3\"];\n\n    public actionDone(item: string): void {\n        console.log(`You've selected ${item}`);\n    }\n}\n");

/***/ }),

/***/ "hiZm":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-custom-item/menu-custom-item.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-menu title=\"Menu Custom Items\" i18n-title>\n    <nui-menu-item>\n        <button nui-button type=\"button\" (click)=\"doNotClosePopup($event)\" i18n>This one does not close popup!</button>\n    </nui-menu-item>\n    <nui-menu-item (click)=\"switchClick($event)\">\n        <div class=\"nui-menu-item__switch d-flex\">\n            <nui-switch [value]=\"checked\">\n                <div class=\"menu-custom-example__ellipsis\" i18n title=\"This is wide ellipsified switch inside item\" i18n-title>\n                    This is wide ellipsified switch inside item\n                </div>\n            </nui-switch>\n        </div>\n    </nui-menu-item>\n    <nui-menu-item i18n>\n        This one closes popup\n    </nui-menu-item>\n</nui-menu>\n");

/***/ }),

/***/ "iV8N":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-append-to-body/menu-append-to-body.example.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-menu id=\"nui-demo-append-to-body-menu\"\n          title=\"Basic appended to body menu\"\n          [appendToBody]=\"true\"\n          i18n-title>\n    <nui-menu-group *ngFor=\"let group of dataset.itemsInGroups\" [header]=\"group.header\">\n        <nui-menu-action *ngFor=\"let item of group.items\" (actionDone)=\"actionDone(item)\">\n            {{item}}\n        </nui-menu-action>\n    </nui-menu-group>\n</nui-menu>\n");

/***/ }),

/***/ "izxd":
/*!****************************************************************************************************!*\
  !*** ./demo/src/components/demo/menu/menu-append-to-body/menu-append-to-body.example.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MenuAppendToBodyExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAppendToBodyExampleComponent", function() { return MenuAppendToBodyExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-group/menu-group.component */ "ZZfx");
/* harmony import */ var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */ "6sIJ");





function MenuAppendToBodyExampleComponent_nui_menu_group_1_nui_menu_action_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu-action", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuAppendToBodyExampleComponent_nui_menu_group_1_nui_menu_action_1_Template_nui_menu_action_actionDone_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.actionDone(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function MenuAppendToBodyExampleComponent_nui_menu_group_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuAppendToBodyExampleComponent_nui_menu_group_1_nui_menu_action_1_Template, 2, 1, "nui-menu-action", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", group_r1.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.items);
} }
class MenuAppendToBodyExampleComponent {
    constructor() {
        this.dataset = {
            itemsInGroups: [
                {
                    header: $localize `Section 1 title`,
                    items: [$localize `Item 1`, $localize `Item 2`, $localize `Item 3`],
                },
                {
                    header: $localize `Section 2 title`,
                    items: [$localize `Item 4`, $localize `Item 5`, $localize `Item 6`],
                },
            ],
        };
    }
    actionDone(item) {
        console.log(`Action done! Item: ` + item);
    }
}
MenuAppendToBodyExampleComponent.ɵfac = function MenuAppendToBodyExampleComponent_Factory(t) { return new (t || MenuAppendToBodyExampleComponent)(); };
MenuAppendToBodyExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuAppendToBodyExampleComponent, selectors: [["nui-menu-append-to-body-example"]], decls: 2, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5680664357169952269$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_APPEND_TO_BODY_MENU_APPEND_TO_BODY_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Basic appended to body menu");
        i18n_0 = MSG_EXTERNAL_5680664357169952269$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_APPEND_TO_BODY_MENU_APPEND_TO_BODY_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟0f422c37f14cb9ea64b8a0d8361a68c6ee60bcbd␟5680664357169952269:Basic appended to body menu`;
    } return [["id", "nui-demo-append-to-body-menu", "title", i18n_0, 3, "appendToBody"], [3, "header", 4, "ngFor", "ngForOf"], [3, "header"], [3, "actionDone", 4, "ngFor", "ngForOf"], [3, "actionDone"]]; }, template: function MenuAppendToBodyExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuAppendToBodyExampleComponent_nui_menu_group_1_Template, 2, 2, "nui-menu-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appendToBody", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataset.itemsInGroups);
    } }, directives: [_src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_3__["MenuGroupComponent"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_4__["MenuActionComponent"]], encapsulation: 2 });


/***/ }),

/***/ "j3pz":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-visual-test/menu-visual-test.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { IMenuGroup, MenuActionType } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-menu-visual-test\",\n    templateUrl: \"./menu-visual-test.component.html\",\n})\nexport class MenuVisualTestComponent {\n\n    public itemsSource: IMenuGroup[] = [\n        {header: \"Group 1\", itemsSource: [\n            {title: \"Item 1\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 2\", itemType: \"action\", action: () => alert(\"hello\")},\n            {title: \"Item 3\", itemType: \"action\", action: this.actionWithParams.bind(this, 2)},\n            {title: \"Item 4\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 5\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 6\", itemType: \"action\", action: this.actionDone},\n        ]},\n        {itemsSource: [\n            {title: \"Item 7\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 8\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 9\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 10\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 11\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 12\", itemType: \"action\", action: this.actionDone},\n            {title: \"Item 13\", itemType: \"action\", action: this.actionDone, disabled: true},\n            {title: \"Item 14\", itemType: \"action\", action: this.actionDone, itemClass: MenuActionType.destructive},\n        ]},\n    ];\n\n    public itemsSourceVariations: IMenuGroup[] = [\n        {header: \"section title\", itemsSource: [\n            {title: \"Menu Item\", itemType: \"action\", action: this.actionDone},\n            {title: \"Hover me\", itemType: \"action\", action: this.actionDone},\n            {title: \"Selected menu item\", isSelected: true},\n            {title: \"Menu item\", itemType: \"switch\", checked: true},\n            {title: \"Menu disabled item with long text\", itemType: \"switch\", checked: false, disabled: true},\n            {title: \"Menu item with checkbox\", itemType: \"option\", disabled: true},\n            {title: \"Menu item with icon\", itemType: \"action\", icon: \"table\"},\n            {title: \"Link menu item\", itemType: \"link\", url: \"#button\", disabled: true},\n            {title: \"Export PDF\", itemType: \"link\", icon: \"export-pdf\", url: \"#button\"},\n        ]},\n    ];\n\n    public actionDone(): void {\n        console.log(\"Action Done\");\n    }\n\n    public actionWithParams(index: number) {\n        console.log(\"action\", this.itemsSource[0].itemsSource[index].title);\n    }\n\n}\n");

/***/ }),

/***/ "jHHc":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-item-variations/menu-item-variations.example.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-menu-item-variations-example\",\n    templateUrl: \"./menu-item-variations.example.component.html\",\n})\nexport class MenuItemVariationsExampleComponent {\n    public onActionDone($event?: undefined|boolean) {\n        console.log(\"Action Done\", $event);\n    }\n}\n");

/***/ }),

/***/ "od8/":
/*!************************************************!*\
  !*** ./demo/src/components/demo/menu/index.ts ***!
  \************************************************/
/*! exports provided: MenuExampleComponent, MenuAppendToBodyExampleComponent, BasicMenuExampleComponent, MenuItemVariationsExampleComponent, MenuCustomItemExampleComponent, MenuVisualTestComponent, MenuTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_docs_menu_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-docs/menu-docs.example.component */ "QjDY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuExampleComponent", function() { return _menu_docs_menu_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["MenuExampleComponent"]; });

/* harmony import */ var _menu_append_to_body_menu_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-append-to-body/menu-append-to-body.example.component */ "izxd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuAppendToBodyExampleComponent", function() { return _menu_append_to_body_menu_append_to_body_example_component__WEBPACK_IMPORTED_MODULE_1__["MenuAppendToBodyExampleComponent"]; });

/* harmony import */ var _basic_menu_basic_menu_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-menu/basic-menu.example.component */ "zxe3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicMenuExampleComponent", function() { return _basic_menu_basic_menu_example_component__WEBPACK_IMPORTED_MODULE_2__["BasicMenuExampleComponent"]; });

/* harmony import */ var _menu_item_variations_menu_item_variations_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-item-variations/menu-item-variations.example.component */ "y/TN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItemVariationsExampleComponent", function() { return _menu_item_variations_menu_item_variations_example_component__WEBPACK_IMPORTED_MODULE_3__["MenuItemVariationsExampleComponent"]; });

/* harmony import */ var _menu_custom_item_menu_custom_item_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-custom-item/menu-custom-item.example.component */ "YZtJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuCustomItemExampleComponent", function() { return _menu_custom_item_menu_custom_item_example_component__WEBPACK_IMPORTED_MODULE_4__["MenuCustomItemExampleComponent"]; });

/* harmony import */ var _menu_visual_test_menu_visual_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-visual-test/menu-visual-test.component */ "+jLg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuVisualTestComponent", function() { return _menu_visual_test_menu_visual_test_component__WEBPACK_IMPORTED_MODULE_5__["MenuVisualTestComponent"]; });

/* harmony import */ var _menu_test_menu_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-test/menu-test.component */ "BgYF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuTestComponent", function() { return _menu_test_menu_test_component__WEBPACK_IMPORTED_MODULE_6__["MenuTestComponent"]; });










/***/ }),

/***/ "qYaP":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-item-variations/menu-item-variations.example.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-menu icon=\"menu\" id=\"nui-demo-multi-selection-menu\">\n    <nui-menu-group header=\"Item Types\" i18n-header>\n        <nui-menu-action (actionDone)=\"onActionDone()\" i18n>Menu Action</nui-menu-action>\n        <nui-menu-switch (actionDone)=\"onActionDone($event)\" i18n>Menu Switch Item</nui-menu-switch>\n        <nui-menu-option (actionDone)=\"onActionDone($event)\" i18n>Menu Option</nui-menu-option>\n        <nui-menu-link (actionDone)=\"onActionDone()\" i18n>Menu Link</nui-menu-link>\n        <nui-menu-item (actionDone)=\"onActionDone()\" i18n>Menu Item (Default)</nui-menu-item>\n    </nui-menu-group>\n    <nui-menu-group header=\"Destructive items\" i18n-header>\n        <nui-menu-action type=\"destructive\" (actionDone)=\"onActionDone()\" icon=\"export-pdf\" i18n>Destructive action</nui-menu-action>\n    </nui-menu-group>\n</nui-menu>\n");

/***/ }),

/***/ "tqfp":
/*!******************************************************!*\
  !*** ./demo/src/components/demo/menu/menu.module.ts ***!
  \******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "od8/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["MenuExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "basic",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["BasicMenuExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].ga,
            },
            showThemeSwitcher: true,
        },
    },
    {
        path: "menu-visual-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["MenuVisualTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
    {
        path: "menu-test",
        component: _index__WEBPACK_IMPORTED_MODULE_2__["MenuTestComponent"],
        data: {
            "srlc": {
                "hideIndicator": true,
            },
        },
    },
];
class MenuModule {
}
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("Dms1"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_2__["BasicMenuExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["MenuExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["MenuAppendToBodyExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["MenuItemVariationsExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["MenuCustomItemExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["MenuTestComponent"],
        _index__WEBPACK_IMPORTED_MODULE_2__["MenuVisualTestComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMenuModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiMessageModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSwitchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vc/w":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-test/menu-test.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@.disabled]=\"true\"\n     style=\"margin: 20px\">\n    <h3>Menu items variations</h3>\n    <nui-menu id=\"nui-demo-e2e-menu-variants\"\n              [itemsSource]=\"itemsSource\"\n              title=\"Basic menu\"\n              i18n-title></nui-menu>\n\n    <nui-menu i18n-title id=\"nui-demo-e2e-menu-append-to-body\"\n              title=\"Menu Append to Body\"\n              [appendToBody]=\"true\">\n        <div id=\"nui-demo-e2e-menu-append-to-body-content\">\n            <nui-menu-group header=\"section title\" i18n-header>\n                <nui-menu-option i18n>Menu item with checkbox</nui-menu-option>\n                <nui-menu-option i18n>Second item</nui-menu-option>\n                <nui-menu-option i18n>Third menu item</nui-menu-option>\n                <nui-menu-option i18n>Fourth item</nui-menu-option>\n            </nui-menu-group>\n            <nui-menu-group header=\"section title\" i18n-header>\n                <nui-menu-option i18n>First from second group</nui-menu-option>\n                <nui-menu-option i18n>Another menu item</nui-menu-option>\n                <nui-menu-option i18n>Menu item with checkbox</nui-menu-option>\n            </nui-menu-group>\n            <nui-menu-group>\n                <nui-menu-link i18n>Browse all properties...</nui-menu-link>\n            </nui-menu-group>\n        </div>\n    </nui-menu>\n</div>\n");

/***/ }),

/***/ "wmyW":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu-visual-test/menu-visual-test.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n        .footer {\n                position: absolute;\n                bottom: 0;\n                width: 100%;\n                height: 60px;\n                line-height: 60px;\n                background-color: #f5f5f5;\n        }\n        .row {\n                margin-right: 0;\n                margin-left: -10px;\n        }\n</style>\n\n<div>\n        <h3>Basic menu with different display types and icons</h3>\n                <div class=\"row\">\n                        <div class=\"col-md-3\">\n                                <nui-menu\n                                        id=\"nui-demo-basic-menu-with-icon\"\n                                        title=\"Basic menu\"\n                                        [itemsSource]=\"itemsSource\">\n                                </nui-menu>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <nui-menu\n                                        id=\"nui-demo-primary-menu-with-icon\"\n                                        title=\"Primary menu\"\n                                        displayStyle=\"primary\"\n                                        [itemsSource]=\"itemsSource\"\n                                        icon=\"add\">\n                                </nui-menu>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <nui-menu\n                                        id=\"nui-demo-action-menu-with-icon\"\n                                        title=\"Action menu\"\n                                        displayStyle=\"action\"\n                                        [itemsSource]=\"itemsSource\"\n                                        icon=\"check\">\n                                </nui-menu>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <div class=\"pull-right\">\n                                        <nui-menu\n                                                id=\"nui-demo-destructive-menu-with-icon\"\n                                                title=\"Dstrctv\"\n                                                displayStyle=\"destructive\"\n                                                [itemsSource]=\"itemsSource\"\n                                                icon=\"run\">\n                                        </nui-menu>\n                                </div>\n                        </div>\n                </div>\n        <hr />\n\n        <h3>Menu items variations</h3>\n                <div class=\"row\">\n                        <div class=\"col-md-3\">\n                                <nui-menu\n                                        id=\"nui-demo-menu-variants_menu\"\n                                        [itemsSource]=\"itemsSourceVariations\"\n                                        icon=\"menu\">\n                                </nui-menu>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <nui-menu\n                                        id=\"nui-demo-menu-variants_add\"\n                                        [itemsSource]=\"itemsSourceVariations\"\n                                        icon=\"add\">\n                                </nui-menu>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <nui-menu\n                                        id=\"nui-demo-menu-variants_gear\"\n                                        [itemsSource]=\"itemsSourceVariations\"\n                                        icon=\"gear\">\n                                </nui-menu>\n                        </div>\n                        <div class=\"col-md-3\">\n                                <div class=\"pull-right\">\n                                        <nui-menu\n                                                id=\"nui-demo-menu-variants_run\"\n                                                displayStyle=\"destructive\"\n                                                [itemsSource]=\"itemsSourceVariations\"\n                                                icon=\"run\">\n                                        </nui-menu>\n                                </div>\n                        </div>\n                </div>\n        <hr />\n\n        <h3>Menu with multiselection</h3>\n            <nui-menu title=\"Multi-selection\" id=\"nui-demo-multi-selection-menu\">\n                <nui-menu-group header=\"section title\">\n                    <nui-menu-option>Menu item with checkbox</nui-menu-option>\n                    <nui-menu-option>Second item</nui-menu-option>\n                    <nui-menu-option>Third menu item</nui-menu-option>\n                    <nui-menu-option>Fourth item</nui-menu-option>\n                </nui-menu-group>\n                <nui-menu-group header=\"section title\">\n                    <nui-menu-option>First from second group</nui-menu-option>\n                    <nui-menu-option>Another menu item</nui-menu-option>\n                    <nui-menu-option>Menu item with checkbox</nui-menu-option>\n                </nui-menu-group>\n\n                <nui-menu-group>\n                    <nui-menu-link>Browse all properties...</nui-menu-link>\n                    <nui-menu-action type=\"destructive\" icon=\"export-pdf\">Destructive action</nui-menu-action>\n                </nui-menu-group>\n            </nui-menu>\n        <hr />\n\n        <div class=\"row footer\">\n                <div class=\"col-md-1\">\n                        <nui-menu\n                                id=\"nui-demo-basic-menu-with-icon-footer\"\n                                title=\"Basic menu\"\n                                [itemsSource]=\"itemsSource\">\n                        </nui-menu>\n                </div>\n                <div class=\"col-md-11\">\n                        <div class=\"pull-right\">\n                                <nui-menu\n                                        id=\"nui-demo-destructive-menu-with-icon-footer\"\n                                        title=\"Dstrctv\"\n                                        displayStyle=\"destructive\"\n                                        [itemsSource]=\"itemsSource\"\n                                        icon=\"run\">\n                                </nui-menu>\n                        </div>\n                </div>\n        </div>\n</div>\n");

/***/ }),

/***/ "y/TN":
/*!******************************************************************************************************!*\
  !*** ./demo/src/components/demo/menu/menu-item-variations/menu-item-variations.example.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MenuItemVariationsExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemVariationsExampleComponent", function() { return MenuItemVariationsExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-group/menu-group.component */ "ZZfx");
/* harmony import */ var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */ "6sIJ");
/* harmony import */ var _src_lib_menu_menu_item_menu_switch_menu_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-switch/menu-switch.component */ "m/Fr");
/* harmony import */ var _src_lib_menu_menu_item_menu_option_menu_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-option/menu-option.component */ "Y4CG");
/* harmony import */ var _src_lib_menu_menu_item_menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-link/menu-link.component */ "uzx5");
/* harmony import */ var _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-item/menu-item.component */ "fNSn");








class MenuItemVariationsExampleComponent {
    onActionDone($event) {
        console.log("Action Done", $event);
    }
}
MenuItemVariationsExampleComponent.ɵfac = function MenuItemVariationsExampleComponent_Factory(t) { return new (t || MenuItemVariationsExampleComponent)(); };
MenuItemVariationsExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuItemVariationsExampleComponent, selectors: [["nui-menu-item-variations-example"]], decls: 15, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4084116834089031312$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Item Types");
        i18n_0 = MSG_EXTERNAL_4084116834089031312$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟bac438ce1da6c329f33c137d4046135d9eeeba03␟4084116834089031312:Item Types`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1597531171241171793$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Menu Action");
        i18n_2 = MSG_EXTERNAL_1597531171241171793$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟6b2033fd10f02dae7b0f08f5f6865cebe9a201b2␟1597531171241171793:Menu Action`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6007235527710439511$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("Menu Switch Item");
        i18n_4 = MSG_EXTERNAL_6007235527710439511$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟02ef827f66c7e5ae4f404298dfae8033a8bcd8ee␟6007235527710439511:Menu Switch Item`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6314147407666471357$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("Menu Option");
        i18n_6 = MSG_EXTERNAL_6314147407666471357$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟2ae1c576b3ef3c8a5414b57c984adf7456af007f␟6314147407666471357:Menu Option`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9176677264851072186$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("Menu Link");
        i18n_8 = MSG_EXTERNAL_9176677264851072186$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟a1ff5e30bf63c691b1f67febaa7555b320344a2b␟9176677264851072186:Menu Link`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8406480151720837992$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("Menu Item (Default)");
        i18n_10 = MSG_EXTERNAL_8406480151720837992$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟005e41f2160988251314f0617c0911218b55cc26␟8406480151720837992:Menu Item (Default)`;
    } let i18n_12; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8214150992468777551$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_13 = goog.getMsg("Destructive items");
        i18n_12 = MSG_EXTERNAL_8214150992468777551$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_13;
    }
    else {
        i18n_12 = $localize `:␟4c330b7a56de012b6b101861dc464223f6204b40␟8214150992468777551:Destructive items`;
    } let i18n_14; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1212145146700387730$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_15 = goog.getMsg("Destructive action");
        i18n_14 = MSG_EXTERNAL_1212145146700387730$$DEMO_SRC_COMPONENTS_DEMO_MENU_MENU_ITEM_VARIATIONS_MENU_ITEM_VARIATIONS_EXAMPLE_COMPONENT_TS_15;
    }
    else {
        i18n_14 = $localize `:␟67da6799af04dc772996f1f0577c3bf01485a149␟1212145146700387730:Destructive action`;
    } return [["icon", "menu", "id", "nui-demo-multi-selection-menu"], ["header", i18n_0], [3, "actionDone"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10, ["header", i18n_12], ["type", "destructive", "icon", "export-pdf", 3, "actionDone"], i18n_14]; }, template: function MenuItemVariationsExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-menu-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nui-menu-action", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuItemVariationsExampleComponent_Template_nui_menu_action_actionDone_2_listener() { return ctx.onActionDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nui-menu-switch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuItemVariationsExampleComponent_Template_nui_menu_switch_actionDone_4_listener($event) { return ctx.onActionDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nui-menu-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuItemVariationsExampleComponent_Template_nui_menu_option_actionDone_6_listener($event) { return ctx.onActionDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nui-menu-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuItemVariationsExampleComponent_Template_nui_menu_link_actionDone_8_listener() { return ctx.onActionDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nui-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuItemVariationsExampleComponent_Template_nui_menu_item_actionDone_10_listener() { return ctx.onActionDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nui-menu-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-menu-action", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function MenuItemVariationsExampleComponent_Template_nui_menu_action_actionDone_13_listener() { return ctx.onActionDone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _src_lib_menu_menu_item_menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_2__["MenuGroupComponent"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_3__["MenuActionComponent"], _src_lib_menu_menu_item_menu_switch_menu_switch_component__WEBPACK_IMPORTED_MODULE_4__["MenuSwitchComponent"], _src_lib_menu_menu_item_menu_option_menu_option_component__WEBPACK_IMPORTED_MODULE_5__["MenuOptionComponent"], _src_lib_menu_menu_item_menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_6__["MenuLinkComponent"], _src_lib_menu_menu_item_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_7__["MenuItemComponent"]], encapsulation: 2 });


/***/ }),

/***/ "zbwM":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/menu/menu.module.ts ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport {\n    DEMO_PATH_TOKEN,\n    NuiButtonModule,\n    NuiDocsModule,\n    NuiMenuModule,\n    NuiMessageModule,\n    NuiSwitchModule,\n    SrlcStage,\n} from \"@nova-ui/bits\";\n\nimport {\n    BasicMenuExampleComponent,\n    MenuAppendToBodyExampleComponent,\n    MenuCustomItemExampleComponent,\n    MenuExampleComponent,\n    MenuItemVariationsExampleComponent,\n    MenuTestComponent,\n    MenuVisualTestComponent,\n} from \"./index\";\n\nconst routes = [\n    {\n        path: \"\",\n        component: MenuExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"basic\",\n        component: BasicMenuExampleComponent,\n        data: {\n            \"srlc\": {\n                \"stage\": SrlcStage.ga,\n            },\n            showThemeSwitcher: true,\n        },\n    },\n    {\n        path: \"menu-visual-test\",\n        component: MenuVisualTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n    {\n        path: \"menu-test\",\n        component: MenuTestComponent,\n        data: {\n            \"srlc\": {\n                \"hideIndicator\": true,\n            },\n        },\n    },\n];\n\n@NgModule({\n    imports: [\n        NuiButtonModule,\n        NuiMenuModule,\n        NuiDocsModule,\n        NuiMessageModule,\n        NuiSwitchModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        BasicMenuExampleComponent,\n        MenuExampleComponent,\n        MenuAppendToBodyExampleComponent,\n        MenuItemVariationsExampleComponent,\n        MenuCustomItemExampleComponent,\n        MenuTestComponent,\n        MenuVisualTestComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class MenuModule {\n}\n");

/***/ }),

/***/ "zxe3":
/*!**********************************************************************************!*\
  !*** ./demo/src/components/demo/menu/basic-menu/basic-menu.example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BasicMenuExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicMenuExampleComponent", function() { return BasicMenuExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu/menu.component */ "JG2v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/lib/menu/menu-item/menu-action/menu-action.component */ "6sIJ");




function BasicMenuExampleComponent_nui_menu_action_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu-action", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("actionDone", function BasicMenuExampleComponent_nui_menu_action_1_Template_nui_menu_action_actionDone_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.actionDone(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class BasicMenuExampleComponent {
    constructor() {
        this.items = ["Item 1", "Item 2", "Item 3"];
    }
    actionDone(item) {
        console.log(`You've selected ${item}`);
    }
}
BasicMenuExampleComponent.ɵfac = function BasicMenuExampleComponent_Factory(t) { return new (t || BasicMenuExampleComponent)(); };
BasicMenuExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicMenuExampleComponent, selectors: [["nui-basic-menu-example"]], decls: 2, vars: 1, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1469494077553268214$$DEMO_SRC_COMPONENTS_DEMO_MENU_BASIC_MENU_BASIC_MENU_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Basic menu");
        i18n_0 = MSG_EXTERNAL_1469494077553268214$$DEMO_SRC_COMPONENTS_DEMO_MENU_BASIC_MENU_BASIC_MENU_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟459f712451533dac6215d0d15efe805d6379b3b7␟1469494077553268214:Basic menu`;
    } return [["id", "nui-demo-basic-menu", "title", i18n_0], [3, "actionDone", 4, "ngFor", "ngForOf"], [3, "actionDone"]]; }, template: function BasicMenuExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BasicMenuExampleComponent_nui_menu_action_1_Template, 2, 1, "nui-menu-action", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_src_lib_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_menu_menu_item_menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_3__["MenuActionComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=demo-menu-menu-module-es2015.js.map