(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-selector-selector-module"],{

/***/ "2sVD":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/selector/selector.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDocsModule, NuiSelectorModule } from \"@nova-ui/bits\";\n\nimport { SelectorExampleComponent } from \"./selector.example.component\";\n\nconst routes = [{\n    path: \"\",\n    component: SelectorExampleComponent,\n}];\n\n@NgModule({\n    imports: [\n        NuiSelectorModule,\n        NuiDocsModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        SelectorExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class SelectorModule {\n}\n");

/***/ }),

/***/ "6aWm":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/selector/selector.example.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>selector</h5>\n<nui-selector \n        id=\"nui-demo-selector\"\n        (selectionChange)=\"onSelectionChange($event)\"\n        [checkboxStatus]=\"checkBoxStatus\"\n        [appendToBody]=\"appendToBody\"\n        [items]=\"availableStatuses\">\n</nui-selector>\n\n<a href=\"javascript:;\" (click)=\"makeIndeterminate()\" id=\"nui-demo-make-indeterminate\" i18n>Make indeterminate</a>\n<a href=\"javascript:;\" (click)=\"makeAppendedToBody()\" id=\"nui-demo-make-appended-to-body\" i18n>Make appended to body</a>\n<pre>[Selection: <span id=\"nui-demo-selection-type\">{{selection}}</span>, checkbox status: <span id=\"nui-demo-indeterminate\">{{checkBoxStatus}}</span>]</pre>\n");

/***/ }),

/***/ "J7Rg":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/selector/selector.example.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\nimport { CheckboxStatus, IMenuGroup, SelectionType } from \"@nova-ui/bits\";\n\n@Component({\n    selector: \"nui-selector-example\",\n    templateUrl: \"./selector.example.component.html\",\n})\nexport class SelectorExampleComponent {\n\n    public selection: SelectionType = SelectionType.None;\n    public availableStatuses: IMenuGroup[] = this.getMenuItems([SelectionType.All, SelectionType.AllPages, SelectionType.None]);\n    public checkBoxStatus: CheckboxStatus = CheckboxStatus.Unchecked;\n    public appendToBody = false;\n\n    public onSelectionChange(event: SelectionType): void {\n        this.selection = event;\n\n        switch (this.selection) {\n            case SelectionType.All:\n                this.checkBoxStatus =  CheckboxStatus.Checked;\n                this.availableStatuses = this.getMenuItems([SelectionType.AllPages, SelectionType.None]);\n                break;\n            case SelectionType.AllPages:\n                this.checkBoxStatus =  CheckboxStatus.Checked;\n                this.availableStatuses = this.getMenuItems([SelectionType.All, SelectionType.None]);\n                break;\n            case SelectionType.None:\n            case SelectionType.UnselectAll:\n                this.checkBoxStatus =  CheckboxStatus.Unchecked;\n                this.availableStatuses = this.getMenuItems([SelectionType.All, SelectionType.AllPages]);\n                break;\n        }\n    }\n\n    public makeIndeterminate(): void {\n        this.checkBoxStatus = CheckboxStatus.Indeterminate;\n        this.selection = SelectionType.None;\n    }\n\n    public makeAppendedToBody(): void {\n        this.appendToBody = true;\n    }\n\n    public getMenuItems(arr: SelectionType[]): IMenuGroup[] {\n        const resultArr: IMenuGroup[] = [{\n            itemsSource: [],\n        }];\n        arr.map((element: SelectionType) => {\n            resultArr[0].itemsSource.push({ value: element, title: element });\n        });\n        return resultArr;\n    }\n}\n");

/***/ }),

/***/ "LcQ8":
/*!**************************************************************!*\
  !*** ./demo/src/components/demo/selector/selector.module.ts ***!
  \**************************************************************/
/*! exports provided: SelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorModule", function() { return SelectorModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _selector_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selector.example.component */ "aBW7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [{
        path: "",
        component: _selector_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectorExampleComponent"],
    }];
class SelectorModule {
}
SelectorModule.ɵfac = function SelectorModule_Factory(t) { return new (t || SelectorModule)(); };
SelectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SelectorModule });
SelectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("jhUJ"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectorModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SelectorModule, { declarations: [_selector_example_component__WEBPACK_IMPORTED_MODULE_2__["SelectorExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiSelectorModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "aBW7":
/*!*************************************************************************!*\
  !*** ./demo/src/components/demo/selector/selector.example.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectorExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorExampleComponent", function() { return SelectorExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_selector_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/lib/selector/selector.component */ "E+Rb");



class SelectorExampleComponent {
    constructor() {
        this.selection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].None;
        this.availableStatuses = this.getMenuItems([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].All, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].AllPages, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].None]);
        this.checkBoxStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["CheckboxStatus"].Unchecked;
        this.appendToBody = false;
    }
    onSelectionChange(event) {
        this.selection = event;
        switch (this.selection) {
            case _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].All:
                this.checkBoxStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["CheckboxStatus"].Checked;
                this.availableStatuses = this.getMenuItems([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].AllPages, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].None]);
                break;
            case _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].AllPages:
                this.checkBoxStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["CheckboxStatus"].Checked;
                this.availableStatuses = this.getMenuItems([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].All, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].None]);
                break;
            case _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].None:
            case _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].UnselectAll:
                this.checkBoxStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["CheckboxStatus"].Unchecked;
                this.availableStatuses = this.getMenuItems([_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].All, _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].AllPages]);
                break;
        }
    }
    makeIndeterminate() {
        this.checkBoxStatus = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["CheckboxStatus"].Indeterminate;
        this.selection = _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["SelectionType"].None;
    }
    makeAppendedToBody() {
        this.appendToBody = true;
    }
    getMenuItems(arr) {
        const resultArr = [{
                itemsSource: [],
            }];
        arr.map((element) => {
            resultArr[0].itemsSource.push({ value: element, title: element });
        });
        return resultArr;
    }
}
SelectorExampleComponent.ɵfac = function SelectorExampleComponent_Factory(t) { return new (t || SelectorExampleComponent)(); };
SelectorExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectorExampleComponent, selectors: [["nui-selector-example"]], decls: 15, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2810888944812898030$$DEMO_SRC_COMPONENTS_DEMO_SELECTOR_SELECTOR_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("Make indeterminate");
        i18n_0 = MSG_EXTERNAL_2810888944812898030$$DEMO_SRC_COMPONENTS_DEMO_SELECTOR_SELECTOR_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟13aebccf3b7526151f9efc0c9423822f269e0ad2␟2810888944812898030:Make indeterminate`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3335553063699247815$$DEMO_SRC_COMPONENTS_DEMO_SELECTOR_SELECTOR_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("Make appended to body");
        i18n_2 = MSG_EXTERNAL_3335553063699247815$$DEMO_SRC_COMPONENTS_DEMO_SELECTOR_SELECTOR_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟d1a539e5756ea095398f07ee483e430a593d6c58␟3335553063699247815:Make appended to body`;
    } return [["id", "nui-demo-selector", 3, "checkboxStatus", "appendToBody", "items", "selectionChange"], ["href", "javascript:;", "id", "nui-demo-make-indeterminate", 3, "click"], i18n_0, ["href", "javascript:;", "id", "nui-demo-make-appended-to-body", 3, "click"], i18n_2, ["id", "nui-demo-selection-type"], ["id", "nui-demo-indeterminate"]]; }, template: function SelectorExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nui-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function SelectorExampleComponent_Template_nui_selector_selectionChange_2_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorExampleComponent_Template_a_click_3_listener() { return ctx.makeIndeterminate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorExampleComponent_Template_a_click_5_listener() { return ctx.makeAppendedToBody(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "[Selection: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ", checkbox status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checkboxStatus", ctx.checkBoxStatus)("appendToBody", ctx.appendToBody)("items", ctx.availableStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.checkBoxStatus);
    } }, directives: [_src_lib_selector_selector_component__WEBPACK_IMPORTED_MODULE_2__["SelectorComponent"]], encapsulation: 2 });


/***/ }),

/***/ "jhUJ":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/selector sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./selector.example.component.html": "6aWm",
	"./selector.example.component.ts": "J7Rg",
	"./selector.module.ts": "2sVD"
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
webpackContext.id = "jhUJ";

/***/ })

}]);
//# sourceMappingURL=demo-selector-selector-module-es2015.js.map