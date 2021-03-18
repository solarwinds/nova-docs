(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-dragdrop-dragdrop-module"],{

/***/ "/a6g":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-cdk/dragdrop-cdk.example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-dragdrop-cdk-example\",\n    templateUrl: \"./dragdrop-cdk.example.component.html\",\n    styleUrls: [\"./dragdrop-cdk.example.component.less\"],\n})\nexport class DragdropCdkExampleComponent {\n}\n");

/***/ }),

/***/ "/lup":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/file-drop/file-drop.component.less ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@drop-zone-min-height: 50px;\n\n:host {\n    display: flex;\n    padding: @nui-space-sm;\n    width: 100%;\n    min-height: @drop-zone-min-height;\n    border-style: dashed; // TODO: no border-style-dashed in NUI\n    border-width: @nui-line-default;\n    .setCssVariable(border-color, nui-color-line-default);\n    &.nui-file-drop {\n        &--active, &--error {\n            border-width: @nui-line-fat;\n            border-style: solid;\n        }\n        &--active {\n            .setCssVariable(border-color, nui-color-selected-contrast);\n            .setCssVariable(background-color, nui-color-busy-default);\n        }\n        &--error {\n            .setCssVariable(border-color, nui-color-line-critical);\n            .setCssVariable(background-color, nui-color-busy-destructive);\n        }\n    }\n}\n");

/***/ }),

/***/ "/sR7":
/*!**************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/dragdrop.module.ts ***!
  \**************************************************************/
/*! exports provided: DragDropDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDemoModule", function() { return DragDropDemoModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _file_drop_file_drop_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-drop/file-drop.module */ "IFj/");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "eGRw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [{
        path: "",
        component: _index__WEBPACK_IMPORTED_MODULE_4__["DragdropExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["SrlcStage"].alpha,
            },
        },
    }];
class DragDropDemoModule {
}
DragDropDemoModule.ɵfac = function DragDropDemoModule_Factory(t) { return new (t || DragDropDemoModule)(); };
DragDropDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DragDropDemoModule });
DragDropDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("KqHy"),
        },
    ], imports: [[
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"],
            _file_drop_file_drop_module__WEBPACK_IMPORTED_MODULE_3__["NuiFileDropExampleModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DragDropDemoModule, { declarations: [_index__WEBPACK_IMPORTED_MODULE_4__["DragdropExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["DragdropBasicExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["DragdropCdkExampleComponent"],
        _index__WEBPACK_IMPORTED_MODULE_4__["DragdropFilesExampleComponent"]], imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiButtonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_2__["NuiCommonModule"],
        _file_drop_file_drop_module__WEBPACK_IMPORTED_MODULE_3__["NuiFileDropExampleModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "3qdV":
/*!******************************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/dragdrop-cdk/dragdrop-cdk.example.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DragdropCdkExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragdropCdkExampleComponent", function() { return DragdropCdkExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");


class DragdropCdkExampleComponent {
}
DragdropCdkExampleComponent.ɵfac = function DragdropCdkExampleComponent_Factory(t) { return new (t || DragdropCdkExampleComponent)(); };
DragdropCdkExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DragdropCdkExampleComponent, selectors: [["nui-dragdrop-cdk-example"]], decls: 2, vars: 0, consts: [["cdkDrag", "", 1, "nui-demo-draggable"]], template: function DragdropCdkExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Drag me around\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmFnZHJvcC1jZGsuZXhhbXBsZS5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ "6c9z":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-basic/dragdrop-basic.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, Inject } from \"@angular/core\";\nimport { IDropEvent, IDropValidator, IToastService, ToastService } from \"@nova-ui/bits\";\n\nclass IsStringValidator implements IDropValidator {\n    isValidDropTarget(payload: any, isExternal: boolean): boolean {\n        if (isExternal) {\n            return false;\n        }\n        return typeof payload === \"string\";\n    }\n}\n\nclass IsObjectValidator implements IDropValidator {\n    isValidDropTarget(payload: any): boolean {\n        return typeof payload === \"object\";\n    }\n}\n\n@Component({\n    selector: \"nui-dragdrop-validator-example\",\n    templateUrl: \"./dragdrop-basic.example.component.html\",\n})\nexport class DragdropBasicExampleComponent {\n    public draggableString = \"this is a string\";\n    public draggableObj = {\n        imma: \"little\",\n        teapot: \"short and stout\",\n    };\n    public destObject: {};\n    public destString: string;\n    public destAnything: any;\n    public draggableExcel = \"<table>\" +\n        \"<tr>\" +\n        \"<th>thing1</th>\" +\n        \"<th>thing2</th>\" +\n        \"</tr>\" +\n        \"<tr>\" +\n        \"<td>jeff</td>\" +\n        \"<td>4</td>\" +\n        \"</tr>\" +\n        \"<tr>\" +\n        \"<td>john</td>\" +\n        \"<td>8</td>\" +\n        \"</tr>\" +\n        \"</table>\";\n    public isStringValidator = new IsStringValidator();\n    public isObjectValidator = new IsObjectValidator();\n\n    constructor(@Inject(ToastService) private toastService: IToastService) { }\n\n    public onDropObject(dropEvent: IDropEvent) {\n        this.toastService.info({message: $localize `Drop object!`});\n        this.destObject = dropEvent.payload;\n    }\n\n    public onDropString(dropEvent: IDropEvent) {\n        this.toastService.info({message: $localize `Drop string!`});\n        this.destString = JSON.stringify(dropEvent.payload);\n    }\n\n    public onDropAnything(dropEvent: IDropEvent) {\n        this.toastService.info({message: $localize `Drop anything!`});\n        this.destAnything = dropEvent.payload;\n    }\n\n    public onDragStart(event: DragEvent) {\n        this.toastService.info({message: $localize `Drag start`});\n    }\n\n    public onDragEnd(event: DragEvent) {\n        this.toastService.info({message: $localize `Drag end`});\n    }\n\n    public onDragOver(event: DragEvent) {\n        this.toastService.info({\n            message: $localize `Drag over`,\n            options: { preventDuplicates: true },\n        });\n    }\n\n    public onDragEnter(event: DragEvent) {\n        this.toastService.info({message: $localize `Drag enter`});\n    }\n\n    public onDragLeave(event: DragEvent) {\n        this.toastService.info({message: $localize `Drag leave`});\n    }\n}\n");

/***/ }),

/***/ "6urx":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-cdk/dragdrop-cdk.example.component.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// This can be moved to bits!\n@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n");

/***/ }),

/***/ "8BnG":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/file-drop/public-api.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export enum FileDropState {\n    active = \"active\",\n    error = \"error\",\n    default = \"default\",\n}\n");

/***/ }),

/***/ "BZ1U":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/dragdrop-basic/dragdrop-basic.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DragdropBasicExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragdropBasicExampleComponent", function() { return DragdropBasicExampleComponent; });
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_common_directives_dragdrop_draggable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/common/directives/dragdrop/draggable.directive */ "0TTj");
/* harmony import */ var _src_common_directives_dragdrop_droppable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/common/directives/dragdrop/droppable.directive */ "GM/8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class IsStringValidator {
    isValidDropTarget(payload, isExternal) {
        if (isExternal) {
            return false;
        }
        return typeof payload === "string";
    }
}
class IsObjectValidator {
    isValidDropTarget(payload) {
        return typeof payload === "object";
    }
}
class DragdropBasicExampleComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.draggableString = "this is a string";
        this.draggableObj = {
            imma: "little",
            teapot: "short and stout",
        };
        this.draggableExcel = "<table>" +
            "<tr>" +
            "<th>thing1</th>" +
            "<th>thing2</th>" +
            "</tr>" +
            "<tr>" +
            "<td>jeff</td>" +
            "<td>4</td>" +
            "</tr>" +
            "<tr>" +
            "<td>john</td>" +
            "<td>8</td>" +
            "</tr>" +
            "</table>";
        this.isStringValidator = new IsStringValidator();
        this.isObjectValidator = new IsObjectValidator();
    }
    onDropObject(dropEvent) {
        this.toastService.info({ message: $localize `Drop object!` });
        this.destObject = dropEvent.payload;
    }
    onDropString(dropEvent) {
        this.toastService.info({ message: $localize `Drop string!` });
        this.destString = JSON.stringify(dropEvent.payload);
    }
    onDropAnything(dropEvent) {
        this.toastService.info({ message: $localize `Drop anything!` });
        this.destAnything = dropEvent.payload;
    }
    onDragStart(event) {
        this.toastService.info({ message: $localize `Drag start` });
    }
    onDragEnd(event) {
        this.toastService.info({ message: $localize `Drag end` });
    }
    onDragOver(event) {
        this.toastService.info({
            message: $localize `Drag over`,
            options: { preventDuplicates: true },
        });
    }
    onDragEnter(event) {
        this.toastService.info({ message: $localize `Drag enter` });
    }
    onDragLeave(event) {
        this.toastService.info({ message: $localize `Drag leave` });
    }
}
DragdropBasicExampleComponent.ɵfac = function DragdropBasicExampleComponent_Factory(t) { return new (t || DragdropBasicExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nova_ui_bits__WEBPACK_IMPORTED_MODULE_0__["ToastService"])); };
DragdropBasicExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DragdropBasicExampleComponent, selectors: [["nui-dragdrop-validator-example"]], decls: 37, vars: 17, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5241131577426555543$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("drag me (object)");
        i18n_0 = MSG_EXTERNAL_5241131577426555543$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟95636e6369d7abe124e93d4dfbf20a3a2c987508␟5241131577426555543:drag me (object)`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2809262117966626131$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("drop here - object");
        i18n_2 = MSG_EXTERNAL_2809262117966626131$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟59f27577f479122074deb78041766343faa71ab4␟2809262117966626131:drop here - object`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2323574695147891362$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("drag me (string)");
        i18n_4 = MSG_EXTERNAL_2323574695147891362$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟6b48f4b6e1f427bbdb020e316e5ebf51b1be7ec1␟2323574695147891362:drag me (string)`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8597574821485785012$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("drop here - string");
        i18n_6 = MSG_EXTERNAL_8597574821485785012$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟c279899f128e6fa03925935094c8ac5ba8fb8fe1␟8597574821485785012:drop here - string`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5016275540965648029$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_9 = goog.getMsg("drag me to Excel (htmlTable)");
        i18n_8 = MSG_EXTERNAL_5016275540965648029$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_9;
    }
    else {
        i18n_8 = $localize `:␟ba256202557ffac4daf94808c649ae74af819f4e␟5016275540965648029:drag me to Excel (htmlTable)`;
    } let i18n_10; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1776750317005176140$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_11 = goog.getMsg("drop anything");
        i18n_10 = MSG_EXTERNAL_1776750317005176140$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_DRAGDROP_BASIC_DRAGDROP_BASIC_EXAMPLE_COMPONENT_TS_11;
    }
    else {
        i18n_10 = $localize `:␟1e75754baef40376da2e572eab57ab3fb1c211d2␟1776750317005176140:drop anything`;
    } return [[1, "row"], [1, "col-6"], ["id", "nui-demo-src-object", "nuiDraggable", "", "adornerDragClass", "demo-drag-class", 1, "drag-drop-item", 3, "payload", "dragStart", "dragEnd"], i18n_0, ["id", "nui-demo-dest-object", "nuiDroppable", "", "dropIndicatorClass", "demo-drop-indicator-class", "dragOverClass", "demo-drag-over-class", "invalidDragOverClass", "demo-invalid-drag-over-class", 1, "drag-drop-item", 3, "dropValidator", "dropSuccess", "dragOver", "dragEnter", "dragLeave"], i18n_2, ["nuiDraggable", "", "adornerDragClass", "demo-drag-class", 1, "drag-drop-item", 3, "payload", "dragStart", "dragEnd"], i18n_4, ["nuiDroppable", "", "dropIndicatorClass", "demo-drop-indicator-class", "dragOverClass", "demo-drag-over-class", "invalidDragOverClass", "demo-invalid-drag-over-class", 1, "drag-drop-item", 3, "dropValidator", "dropSuccess", "dragOver", "dragEnter", "dragLeave"], i18n_6, [1, "col-12"], ["nuiDraggable", "", 1, "drag-drop-item", 3, "payload", "dragStart", "dragEnd"], i18n_8, ["nuiDroppable", "", "dropIndicatorClass", "demo-drop-indicator-class", "dragOverClass", "demo-drag-over-class", "invalidDragOverClass", "demo-invalid-drag-over-class", 1, "drag-drop-item", 3, "dragOver", "dragEnter", "dragLeave", "dropSuccess"], i18n_10]; }, template: function DragdropBasicExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragStart", function DragdropBasicExampleComponent_Template_div_dragStart_2_listener($event) { return ctx.onDragStart($event); })("dragEnd", function DragdropBasicExampleComponent_Template_div_dragEnd_2_listener($event) { return ctx.onDragEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dropSuccess", function DragdropBasicExampleComponent_Template_div_dropSuccess_8_listener($event) { return ctx.onDropObject($event); })("dragOver", function DragdropBasicExampleComponent_Template_div_dragOver_8_listener($event) { return ctx.onDragOver($event); })("dragEnter", function DragdropBasicExampleComponent_Template_div_dragEnter_8_listener($event) { return ctx.onDragEnter($event); })("dragLeave", function DragdropBasicExampleComponent_Template_div_dragLeave_8_listener($event) { return ctx.onDragLeave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragStart", function DragdropBasicExampleComponent_Template_div_dragStart_15_listener($event) { return ctx.onDragStart($event); })("dragEnd", function DragdropBasicExampleComponent_Template_div_dragEnd_15_listener($event) { return ctx.onDragEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](16, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dropSuccess", function DragdropBasicExampleComponent_Template_div_dropSuccess_20_listener($event) { return ctx.onDropString($event); })("dragOver", function DragdropBasicExampleComponent_Template_div_dragOver_20_listener($event) { return ctx.onDragOver($event); })("dragEnter", function DragdropBasicExampleComponent_Template_div_dragEnter_20_listener($event) { return ctx.onDragEnter($event); })("dragLeave", function DragdropBasicExampleComponent_Template_div_dragLeave_20_listener($event) { return ctx.onDragLeave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](21, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragStart", function DragdropBasicExampleComponent_Template_div_dragStart_26_listener($event) { return ctx.onDragStart($event); })("dragEnd", function DragdropBasicExampleComponent_Template_div_dragEnd_26_listener($event) { return ctx.onDragEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](27, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragOver", function DragdropBasicExampleComponent_Template_div_dragOver_32_listener($event) { return ctx.onDragOver($event); })("dragEnter", function DragdropBasicExampleComponent_Template_div_dragEnter_32_listener($event) { return ctx.onDragEnter($event); })("dragLeave", function DragdropBasicExampleComponent_Template_div_dragLeave_32_listener($event) { return ctx.onDragLeave($event); })("dropSuccess", function DragdropBasicExampleComponent_Template_div_dropSuccess_32_listener($event) { return ctx.onDropAnything($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](33, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("payload", ctx.draggableObj);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, ctx.draggableObj));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dropValidator", ctx.isObjectValidator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 13, ctx.destObject));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("payload", ctx.draggableString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.draggableString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dropValidator", ctx.isStringValidator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.destString);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("payload", ctx.draggableExcel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.draggableExcel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 15, ctx.destAnything));
    } }, directives: [_src_common_directives_dragdrop_draggable_directive__WEBPACK_IMPORTED_MODULE_2__["DraggableDirective"], _src_common_directives_dragdrop_droppable_directive__WEBPACK_IMPORTED_MODULE_3__["DroppableDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "BdGP":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-basic/dragdrop-basic.example.component.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drag-drop-item {\n    border: 1px solid grey;\n    text-align: center;\n}\n.demo-drag-over-class {\n    border-color: #30B230;\n    background-color: #e7f4df;\n}\n.demo-invalid-drag-over-class {\n    border-color: #D50000;\n    background-color: #FFE4E0;\n}\n.demo-drop-indicator-class {\n    border-color: #3CAADD;\n    background-color: #a0cede;\n}");

/***/ }),

/***/ "EMce":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/file-drop/file-drop.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\n\nimport { NuiCommonModule } from \"../../../../../../src/common/common.module\";\n\nimport { FileDropExampleComponent } from \"./file-drop.component\";\n\n\n/**\n * @ignore\n */\n@NgModule({\n    imports: [\n        NuiCommonModule,\n    ],\n    declarations: [\n        FileDropExampleComponent,\n    ],\n    exports: [\n        FileDropExampleComponent,\n    ],\n    providers: [],\n})\nexport class NuiFileDropExampleModule {\n}\n");

/***/ }),

/***/ "Esai":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-files/dragdrop-files.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nui-file-drop-example (drop)=\"dropHandler($event)\"\n               (enter)=\"dragEnterHandler($event)\"\n               (leave)=\"invalidateFiles()\"\n               [state]=\"fileDropState\">\n    <ng-container *ngIf=\"gifError\">\n        <nui-validation-message [show]=\"true\"> Please upload GIF only!</nui-validation-message>\n    </ng-container>\n    <ng-container *ngIf=\"!gifError\">\n        <nui-icon icon=\"upload\" class=\"pr-2\" iconColor=\"gray\"></nui-icon>\n        <span class=\"nui-text-small-secondary\">\n            Drop only <b>GIF images</b> to upload, or <label for=\"uniqueOne\" class=\"nui-text-link-small nui-demo-drop-area__browse\">browse</label>\n        </span>\n    </ng-container>\n\n    <!--this is hidden file input to handle browse button-->\n    <input type=\"file\"\n           id=\"uniqueOne\"\n           [accept]=\"imageType\"\n           multiple\n           (change)=\"onFileRead($event)\"\n           class=\"hidden\">\n</nui-file-drop-example>\n\n<span class=\"nui-text-small-secondary\">File types: GIF</span>\n\n<div class=\"nui-demo-file-area d-flex\" *ngFor=\"let file of files\">\n    <div class=\" py-2 px-3 flex-grow-1 flex-row\">\n        <span class=\"nui-text-label\">{{file.name}}</span>\n        <nui-progress [show]=\"true\"\n                      [stacked]=\"true\"\n                      [percent]=\"42\"\n                      [showNumber]=\"true\"\n                      (cancel)=\"onCancel()\">\n        </nui-progress>\n    </div>\n    <div class=\"nui-demo-file-area__right flex-grow-0\">\n        <button nui-button type=\"button\" displayStyle=\"action\" icon=\"close\" (click)=\"rmFile(file)\"></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "FB9V":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { DragDropModule } from \"@angular/cdk/drag-drop\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiButtonModule, NuiCommonModule, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport { NuiFileDropExampleModule } from \"./file-drop/file-drop.module\";\nimport {\n    DragdropBasicExampleComponent,\n    DragdropCdkExampleComponent,\n    DragdropExampleComponent,\n    DragdropFilesExampleComponent,\n} from \"./index\";\n\nconst routes = [{\n    path: \"\",\n    component: DragdropExampleComponent,\n    data: {\n        \"srlc\": {\n            \"stage\": SrlcStage.alpha,\n        },\n    },\n}];\n\n@NgModule({\n    imports: [\n        DragDropModule,\n        NuiButtonModule,\n        NuiDocsModule,\n        NuiCommonModule,\n        NuiFileDropExampleModule,\n        RouterModule.forChild(routes),\n    ],\n    declarations: [\n        DragdropExampleComponent,\n        DragdropBasicExampleComponent,\n        DragdropCdkExampleComponent,\n        DragdropFilesExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class DragDropDemoModule {\n}\n");

/***/ }),

/***/ "GQSF":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-docs/dragdrop-docs.example.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-dragdrop-example\",\n    templateUrl: \"./dragdrop-docs.example.component.html\",\n})\nexport class DragdropExampleComponent {\n\n}\n");

/***/ }),

/***/ "IFj/":
/*!*************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/file-drop/file-drop.module.ts ***!
  \*************************************************************************/
/*! exports provided: NuiFileDropExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuiFileDropExampleModule", function() { return NuiFileDropExampleModule; });
/* harmony import */ var _src_common_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/common/common.module */ "7JYY");
/* harmony import */ var _file_drop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-drop.component */ "vRqb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



/**
 * @ignore
 */
class NuiFileDropExampleModule {
}
NuiFileDropExampleModule.ɵfac = function NuiFileDropExampleModule_Factory(t) { return new (t || NuiFileDropExampleModule)(); };
NuiFileDropExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NuiFileDropExampleModule });
NuiFileDropExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _src_common_common_module__WEBPACK_IMPORTED_MODULE_0__["NuiCommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NuiFileDropExampleModule, { declarations: [_file_drop_component__WEBPACK_IMPORTED_MODULE_1__["FileDropExampleComponent"]], imports: [_src_common_common_module__WEBPACK_IMPORTED_MODULE_0__["NuiCommonModule"]], exports: [_file_drop_component__WEBPACK_IMPORTED_MODULE_1__["FileDropExampleComponent"]] }); })();


/***/ }),

/***/ "JhF1":
/*!********************************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/dragdrop-docs/dragdrop-docs.example.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DragdropExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragdropExampleComponent", function() { return DragdropExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/lib/docs/example-wrapper/example-wrapper.component */ "CVg4");
/* harmony import */ var _dragdrop_files_dragdrop_files_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dragdrop-files/dragdrop-files.example.component */ "QivK");
/* harmony import */ var _file_drop_file_drop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-drop/file-drop.component */ "vRqb");




class DragdropExampleComponent {
}
DragdropExampleComponent.ɵfac = function DragdropExampleComponent_Factory(t) { return new (t || DragdropExampleComponent)(); };
DragdropExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DragdropExampleComponent, selectors: [["nui-dragdrop-example"]], decls: 23, vars: 0, consts: [["filenamePrefix", "dragdrop-files", "exampleTitle", "Drag and Drop Files"], ["filenamePrefix", "file-drop", "exampleTitle", "File Drop Component"]], template: function DragdropExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usage is described in example below. FileDrop component is used internally to handle dragLeave/dragEnter and encapsulate styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Example includes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Browse file using file system dialog with access to input properties like \"multiple\" and \"accept\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Effect while hovering file with wrong data type (for simplicity, example code checks only first item in array) - this is implemented as an input in FileDrop component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " List of files with layout that is taken from UX specs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-example-wrapper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nui-dragdrop-files-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "File Drop Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Please see FileDrop component source code in this example (note that demo is not interactive since this is purely presentational component)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nui-example-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nui-file-drop-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Any content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_lib_docs_example_wrapper_example_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["ExampleWrapperComponent"], _dragdrop_files_dragdrop_files_example_component__WEBPACK_IMPORTED_MODULE_2__["DragdropFilesExampleComponent"], _file_drop_file_drop_component__WEBPACK_IMPORTED_MODULE_3__["FileDropExampleComponent"]], encapsulation: 2 });


/***/ }),

/***/ "KjeV":
/*!*******************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/file-drop/public-api.ts ***!
  \*******************************************************************/
/*! exports provided: FileDropState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropState", function() { return FileDropState; });
var FileDropState;
(function (FileDropState) {
    FileDropState["active"] = "active";
    FileDropState["error"] = "error";
    FileDropState["default"] = "default";
})(FileDropState || (FileDropState = {}));


/***/ }),

/***/ "KqHy":
/*!***********************************************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dragdrop-basic/dragdrop-basic.example.component.html": "UMU+",
	"./dragdrop-basic/dragdrop-basic.example.component.less": "BdGP",
	"./dragdrop-basic/dragdrop-basic.example.component.ts": "6c9z",
	"./dragdrop-cdk/dragdrop-cdk.example.component.html": "Q+yD",
	"./dragdrop-cdk/dragdrop-cdk.example.component.less": "6urx",
	"./dragdrop-cdk/dragdrop-cdk.example.component.ts": "/a6g",
	"./dragdrop-docs/dragdrop-docs.example.component.html": "r1du",
	"./dragdrop-docs/dragdrop-docs.example.component.ts": "GQSF",
	"./dragdrop-files/dragdrop-files.example.component.html": "Esai",
	"./dragdrop-files/dragdrop-files.example.component.less": "yFhN",
	"./dragdrop-files/dragdrop-files.example.component.ts": "LYCR",
	"./dragdrop.module.ts": "FB9V",
	"./file-drop/file-drop.component.html": "j1YS",
	"./file-drop/file-drop.component.less": "/lup",
	"./file-drop/file-drop.component.ts": "y5at",
	"./file-drop/file-drop.module.ts": "EMce",
	"./file-drop/public-api.ts": "8BnG",
	"./index.ts": "cAym"
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
webpackContext.id = "KqHy";

/***/ }),

/***/ "LYCR":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-files/dragdrop-files.example.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\nimport { FileDropState } from \"../file-drop/public-api\";\n\n@Component({\n    selector: \"nui-dragdrop-files-example\",\n    templateUrl: \"./dragdrop-files.example.component.html\",\n    styleUrls: [\"./dragdrop-files.example.component.less\"],\n})\nexport class DragdropFilesExampleComponent {\n\n    public gifError = false;\n    public imageType = \"image/gif\";\n\n    public fileDropState = FileDropState.default;\n\n    public files: File[] = [];\n\n    dropHandler(ev: DragEvent) {\n\n        if (!ev.dataTransfer) {\n            throw new Error(\"dataTransfer is not defined\");\n        }\n        this.files.push(\n            ...this.extractFilesFromDropEventData(ev.dataTransfer)\n                    .filter((file: File) => this.validateDataType(file.type))\n        );\n\n        this.invalidateFiles();\n    }\n\n    onFileRead(ev: Event) {\n        const files: FileList | null = (ev.target as HTMLInputElement).files;\n        if (!files) {\n            throw new Error(\"fileList is not defined\");\n        }\n        // no validation here since we have native one in browser input\n        this.files.push(...Array.from(files));\n    }\n\n    dragEnterHandler(ev: DragEvent) {\n        // This naively checks only first file\n\n        if (ev.dataTransfer && ev.dataTransfer.items) {\n            this.gifError = !this.validateDataType(ev.dataTransfer.items[0].type);\n        }\n\n        this.fileDropState = this.gifError ? FileDropState.error : FileDropState.active;\n    }\n\n    invalidateFiles() {\n        // Change it if you want to have some error highlight even after dragLeave\n        this.fileDropState = FileDropState.default;\n        this.gifError = false;\n    }\n\n    rmFile(fileInput: File) {\n        this.files = this.files.filter(file => file !== fileInput);\n    }\n\n    private validateDataType(dataType: string) {\n        return dataType.includes(this.imageType);\n    }\n\n    // TODO: this can be extracted to a service\n    private extractFilesFromDropEventData(data: DataTransfer): File[] {\n        const files: File[] = [];\n        if (data.items) {\n            // Use DataTransferItemList interface to access the file(s)\n            for (let i = 0; i < data.items.length; i++) {\n                // If dropped items aren't files, reject them\n                if (data.items[i].kind === \"file\") {\n                    const file: File | null = data.items[i].getAsFile();\n                    if (file) {\n                        files.push(file);\n                    }\n                }\n            }\n        } else {\n            // Use DataTransfer interface to access the file(s) for Safari\n            for (let i = 0; i < data.files.length; i++) {\n                files.push(data.files[i]);\n            }\n        }\n        return files;\n    }\n\n}\n");

/***/ }),

/***/ "Q+yD":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-cdk/dragdrop-cdk.example.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nui-demo-draggable\" cdkDrag>\n    Drag me around\n</div>\n");

/***/ }),

/***/ "QivK":
/*!**********************************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/dragdrop-files/dragdrop-files.example.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DragdropFilesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragdropFilesExampleComponent", function() { return DragdropFilesExampleComponent; });
/* harmony import */ var _file_drop_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../file-drop/public-api */ "KjeV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _file_drop_file_drop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file-drop/file-drop.component */ "vRqb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/lib/button/button.component */ "6urz");





function DragdropFilesExampleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nui-validation-message", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Please upload GIF only!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", true);
} }
function DragdropFilesExampleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Drop only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GIF images");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " to upload, or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "browse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function DragdropFilesExampleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nui-progress", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cancel", function DragdropFilesExampleComponent_div_6_Template_nui_progress_cancel_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DragdropFilesExampleComponent_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const file_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.rmFile(file_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", true)("stacked", true)("percent", 42)("showNumber", true);
} }
class DragdropFilesExampleComponent {
    constructor() {
        this.gifError = false;
        this.imageType = "image/gif";
        this.fileDropState = _file_drop_public_api__WEBPACK_IMPORTED_MODULE_0__["FileDropState"].default;
        this.files = [];
    }
    dropHandler(ev) {
        if (!ev.dataTransfer) {
            throw new Error("dataTransfer is not defined");
        }
        this.files.push(...this.extractFilesFromDropEventData(ev.dataTransfer)
            .filter((file) => this.validateDataType(file.type)));
        this.invalidateFiles();
    }
    onFileRead(ev) {
        const files = ev.target.files;
        if (!files) {
            throw new Error("fileList is not defined");
        }
        // no validation here since we have native one in browser input
        this.files.push(...Array.from(files));
    }
    dragEnterHandler(ev) {
        // This naively checks only first file
        if (ev.dataTransfer && ev.dataTransfer.items) {
            this.gifError = !this.validateDataType(ev.dataTransfer.items[0].type);
        }
        this.fileDropState = this.gifError ? _file_drop_public_api__WEBPACK_IMPORTED_MODULE_0__["FileDropState"].error : _file_drop_public_api__WEBPACK_IMPORTED_MODULE_0__["FileDropState"].active;
    }
    invalidateFiles() {
        // Change it if you want to have some error highlight even after dragLeave
        this.fileDropState = _file_drop_public_api__WEBPACK_IMPORTED_MODULE_0__["FileDropState"].default;
        this.gifError = false;
    }
    rmFile(fileInput) {
        this.files = this.files.filter(file => file !== fileInput);
    }
    validateDataType(dataType) {
        return dataType.includes(this.imageType);
    }
    // TODO: this can be extracted to a service
    extractFilesFromDropEventData(data) {
        const files = [];
        if (data.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < data.items.length; i++) {
                // If dropped items aren't files, reject them
                if (data.items[i].kind === "file") {
                    const file = data.items[i].getAsFile();
                    if (file) {
                        files.push(file);
                    }
                }
            }
        }
        else {
            // Use DataTransfer interface to access the file(s) for Safari
            for (let i = 0; i < data.files.length; i++) {
                files.push(data.files[i]);
            }
        }
        return files;
    }
}
DragdropFilesExampleComponent.ɵfac = function DragdropFilesExampleComponent_Factory(t) { return new (t || DragdropFilesExampleComponent)(); };
DragdropFilesExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DragdropFilesExampleComponent, selectors: [["nui-dragdrop-files-example"]], decls: 7, vars: 5, consts: [[3, "state", "drop", "enter", "leave"], [4, "ngIf"], ["type", "file", "id", "uniqueOne", "multiple", "", 1, "hidden", 3, "accept", "change"], [1, "nui-text-small-secondary"], ["class", "nui-demo-file-area d-flex", 4, "ngFor", "ngForOf"], [3, "show"], ["icon", "upload", "iconColor", "gray", 1, "pr-2"], ["for", "uniqueOne", 1, "nui-text-link-small", "nui-demo-drop-area__browse"], [1, "nui-demo-file-area", "d-flex"], [1, "py-2", "px-3", "flex-grow-1", "flex-row"], [1, "nui-text-label"], [3, "show", "stacked", "percent", "showNumber", "cancel"], [1, "nui-demo-file-area__right", "flex-grow-0"], ["nui-button", "", "type", "button", "displayStyle", "action", "icon", "close", 3, "click"]], template: function DragdropFilesExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nui-file-drop-example", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("drop", function DragdropFilesExampleComponent_Template_nui_file_drop_example_drop_0_listener($event) { return ctx.dropHandler($event); })("enter", function DragdropFilesExampleComponent_Template_nui_file_drop_example_enter_0_listener($event) { return ctx.dragEnterHandler($event); })("leave", function DragdropFilesExampleComponent_Template_nui_file_drop_example_leave_0_listener() { return ctx.invalidateFiles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DragdropFilesExampleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DragdropFilesExampleComponent_ng_container_2_Template, 9, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DragdropFilesExampleComponent_Template_input_change_3_listener($event) { return ctx.onFileRead($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "File types: GIF");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DragdropFilesExampleComponent_div_6_Template, 7, 5, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx.fileDropState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gifError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.gifError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("accept", ctx.imageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.files);
    } }, directives: [_file_drop_file_drop_component__WEBPACK_IMPORTED_MODULE_2__["FileDropExampleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: [".nui-demo-drop-area__browse[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.nui-demo-file-area[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 30px;\n  border-color: var(--nui-border-fade,rgba(217, 217, 217, 0.7));\n  border-width: 1px;\n  border-bottom-width: 0;\n  border-style: solid;\n}\n.nui-demo-file-area[_ngcontent-%COMP%]:last-child {\n  border-bottom-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWdkcm9wLWZpbGVzLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvc3R5bGVzL21peGlucy9jc3MtdmFyaWFibGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQVFJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VDUkosNkRBQUE7RURVSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFJO0VBQ0ksd0JBQUE7QUFOUiIsImZpbGUiOiJkcmFnZHJvcC1maWxlcy5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbi5udWktZGVtbyB7XG4gICAgJi1kcm9wLWFyZWEge1xuICAgICAgICAmX19icm93c2Uge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAvLyB0aGlzIHdvdWxkIG5vdCBiZSBuZWVkZWQgaWYgbnVpLXRleHQtbGluayBoYWQgcG9pbnRlciAtIHNhZHBhbmRhXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAvLyB0aGlzIGlzIG5lZWRlZCBzYWRwYW5kYTJcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYtZmlsZS1hcmVhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7IC8vIGljb24gc2l6ZVxuICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktYm9yZGVyLWZhZGUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IEBudWktbGluZS1kZWZhdWx0O1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICAmLWZpbGUtYXJlYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogQG51aS1saW5lLWRlZmF1bHQ7IC8vIHRoaXMgaGVscHMgdG8gbWVyZ2UgYm9yZGVycyBvZiBkaXZzIHRvIGxvb2sgbmljZVxuICAgIH1cblxufVxuIiwiLnNldENzc1ZhcmlhYmxlKEBwcm9wZXJ0eSwgQHZhbHVlKXtcbiAgICBAZXZhbHVhdGVkIDogXCJAe3ZhbHVlfVwiO1xuICAgIC8vdGhlIGRvdWJsZSBAIGZvcmNlcyBhIGluZGlyZWN0aW9uIGV2YWx1YXRpb24sIGtpbmRhIGxpa2UgYSBwb2ludGVyXG4gICAgQGZhbGxiYWNrIDogQEBldmFsdWF0ZWQ7XG5cbiAgICBAe3Byb3BlcnR5fTogflwidmFyKC0tQHt2YWx1ZX0sQHtmYWxsYmFja30pXCI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "UMU+":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-basic/dragdrop-basic.example.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-6\">\n        <div class=\"drag-drop-item\"\n             id=\"nui-demo-src-object\"\n             nuiDraggable\n             [payload]=\"draggableObj\"\n             adornerDragClass=\"demo-drag-class\"\n             (dragStart)=\"onDragStart($event)\"\n             (dragEnd)=\"onDragEnd($event)\"\n             i18n>drag me (object)</div>\n        <pre>{{draggableObj | json}}</pre>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"drag-drop-item\"\n             id=\"nui-demo-dest-object\"\n             nuiDroppable\n             dropIndicatorClass=\"demo-drop-indicator-class\"\n             dragOverClass=\"demo-drag-over-class\"\n             invalidDragOverClass=\"demo-invalid-drag-over-class\"\n             [dropValidator]=\"isObjectValidator\"\n             (dropSuccess)=\"onDropObject($event)\"\n             (dragOver)=\"onDragOver($event)\"\n             (dragEnter)=\"onDragEnter($event)\"\n             (dragLeave)=\"onDragLeave($event)\"\n             i18n>drop here - object</div>\n        <pre>{{destObject | json}}</pre>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-6\">\n        <div class=\"drag-drop-item\"\n             nuiDraggable\n             [payload]=\"draggableString\"\n             adornerDragClass=\"demo-drag-class\"\n             (dragStart)=\"onDragStart($event)\"\n             (dragEnd)=\"onDragEnd($event)\"\n             i18n>drag me (string)</div>\n        <pre>{{draggableString}}</pre>\n    </div>\n\n    <div class=\"col-6\">\n        <div class=\"drag-drop-item\"\n             nuiDroppable\n             [dropValidator]=\"isStringValidator\"\n             dropIndicatorClass=\"demo-drop-indicator-class\"\n             dragOverClass=\"demo-drag-over-class\"\n             invalidDragOverClass=\"demo-invalid-drag-over-class\"\n             (dropSuccess)=\"onDropString($event)\"\n             (dragOver)=\"onDragOver($event)\"\n             (dragEnter)=\"onDragEnter($event)\"\n             (dragLeave)=\"onDragLeave($event)\"\n             i18n>drop here - string</div>\n        <pre>{{destString}}</pre>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"drag-drop-item\"\n             nuiDraggable\n             [payload]=\"draggableExcel\"\n             (dragStart)=\"onDragStart($event)\"\n             (dragEnd)=\"onDragEnd($event)\"\n             i18n>drag me to Excel (htmlTable)</div>\n        <pre>{{draggableExcel}}</pre>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"drag-drop-item\"\n             nuiDroppable\n             dropIndicatorClass=\"demo-drop-indicator-class\"\n             dragOverClass=\"demo-drag-over-class\"\n             invalidDragOverClass=\"demo-invalid-drag-over-class\"\n             (dragOver)=\"onDragOver($event)\"\n             (dragEnter)=\"onDragEnter($event)\"\n             (dragLeave)=\"onDragLeave($event)\"\n             (dropSuccess)=\"onDropAnything($event)\"\n             i18n>drop anything</div>\n        <pre>{{destAnything | json}}</pre>\n    </div>\n</div>\n");

/***/ }),

/***/ "cAym":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/index.ts ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("export * from \"./dragdrop-docs/dragdrop-docs.example.component\";\nexport * from \"./dragdrop-basic/dragdrop-basic.example.component\";\nexport * from \"./dragdrop-cdk/dragdrop-cdk.example.component\";\nexport * from \"./dragdrop-files/dragdrop-files.example.component\";\n");

/***/ }),

/***/ "eGRw":
/*!****************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/index.ts ***!
  \****************************************************/
/*! exports provided: DragdropExampleComponent, DragdropBasicExampleComponent, DragdropCdkExampleComponent, DragdropFilesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dragdrop_docs_dragdrop_docs_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragdrop-docs/dragdrop-docs.example.component */ "JhF1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragdropExampleComponent", function() { return _dragdrop_docs_dragdrop_docs_example_component__WEBPACK_IMPORTED_MODULE_0__["DragdropExampleComponent"]; });

/* harmony import */ var _dragdrop_basic_dragdrop_basic_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragdrop-basic/dragdrop-basic.example.component */ "BZ1U");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragdropBasicExampleComponent", function() { return _dragdrop_basic_dragdrop_basic_example_component__WEBPACK_IMPORTED_MODULE_1__["DragdropBasicExampleComponent"]; });

/* harmony import */ var _dragdrop_cdk_dragdrop_cdk_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragdrop-cdk/dragdrop-cdk.example.component */ "3qdV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragdropCdkExampleComponent", function() { return _dragdrop_cdk_dragdrop_cdk_example_component__WEBPACK_IMPORTED_MODULE_2__["DragdropCdkExampleComponent"]; });

/* harmony import */ var _dragdrop_files_dragdrop_files_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragdrop-files/dragdrop-files.example.component */ "QivK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragdropFilesExampleComponent", function() { return _dragdrop_files_dragdrop_files_example_component__WEBPACK_IMPORTED_MODULE_3__["DragdropFilesExampleComponent"]; });







/***/ }),

/***/ "j1YS":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/file-drop/file-drop.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n");

/***/ }),

/***/ "r1du":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-docs/dragdrop-docs.example.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<nui-example-wrapper filenamePrefix=\"dragdrop-basic\" exampleTitle=\"Drag and Drop\">-->\n    <!--<nui-dragdrop-validator-example></nui-dragdrop-validator-example>-->\n<!--</nui-example-wrapper>-->\n<!--<nui-example-wrapper filenamePrefix=\"dragdrop-cdk\" exampleTitle=\"Drag and Drop CDK\">-->\n    <!--<nui-dragdrop-cdk-example></nui-dragdrop-cdk-example>-->\n<!--</nui-example-wrapper>-->\n\n<h2>Basic Usage</h2>\n\n<p>Usage is described in example below. FileDrop component is used internally to handle dragLeave/dragEnter and encapsulate styling</p>\n<p>Example includes:</p>\n<ol>\n    <li>\n        Browse file using file system dialog with access to input properties like \"multiple\" and \"accept\".\n    </li>\n    <li>\n        Effect while hovering file with wrong data type (for simplicity, example code checks only first item in array) - this is implemented as an input in FileDrop component.\n    </li>\n    <li>\n        List of files with layout that is taken from UX specs\n    </li>\n</ol>\n\n<nui-example-wrapper filenamePrefix=\"dragdrop-files\" exampleTitle=\"Drag and Drop Files\">\n    <nui-dragdrop-files-example></nui-dragdrop-files-example>\n</nui-example-wrapper>\n\n<h2>File Drop Component</h2>\n<p>Please see FileDrop component source code in this example (note that demo is not interactive since this is purely presentational component)</p>\n\n<nui-example-wrapper filenamePrefix=\"file-drop\" exampleTitle=\"File Drop Component\">\n    <nui-file-drop-example><span>Any content</span></nui-file-drop-example>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "vRqb":
/*!****************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop/file-drop/file-drop.component.ts ***!
  \****************************************************************************/
/*! exports provided: FileDropExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDropExampleComponent", function() { return FileDropExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-api */ "KjeV");



const _c0 = ["*"];
/**
 * <example-url>./../examples/index.html#/file-upload</example-url>
 */
/** @ignore */
class FileDropExampleComponent {
    constructor() {
        // TODO: consider renaming this class to DropAreaComponent since it is not file-specific at all
        this.counterToHackDragLeave = 0;
        this.state = _public_api__WEBPACK_IMPORTED_MODULE_1__["FileDropState"].default;
        this.enter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Drop is handled as regular JS event in parent component.
    // enter and leave can't be since dragenter and dragleave for parent component are different
    get hasActiveClass() { return this.state === _public_api__WEBPACK_IMPORTED_MODULE_1__["FileDropState"].active; }
    get hasErrorClass() { return this.state === _public_api__WEBPACK_IMPORTED_MODULE_1__["FileDropState"].error; }
    // this solves problem with opening the file since browser fires dragover by default
    dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }
    dropHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        this.counterToHackDragLeave = 0; // important not to break mouseleave hack
    }
    dragEnterHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        this.counterToHackDragLeave++;
        if (ev.currentTarget.contains(ev.currentTarget)) {
            this.enter.emit(ev);
        }
    }
    dragLeaveHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        this.counterToHackDragLeave--;
        if (this.counterToHackDragLeave === 0) {
            this.leave.emit(ev);
        }
    }
}
FileDropExampleComponent.ɵfac = function FileDropExampleComponent_Factory(t) { return new (t || FileDropExampleComponent)(); };
FileDropExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileDropExampleComponent, selectors: [["nui-file-drop-example"]], hostAttrs: [1, "d-inline-flex", "align-items-center", "justify-content-center"], hostVars: 4, hostBindings: function FileDropExampleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function FileDropExampleComponent_dragover_HostBindingHandler($event) { return ctx.dragOverHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("drop", function FileDropExampleComponent_drop_HostBindingHandler($event) { return ctx.dropHandler($event); })("dragenter", function FileDropExampleComponent_dragenter_HostBindingHandler($event) { return ctx.dragEnterHandler($event); })("dragleave", function FileDropExampleComponent_dragleave_HostBindingHandler($event) { return ctx.dragLeaveHandler($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nui-file-drop--active", ctx.hasActiveClass)("nui-file-drop--error", ctx.hasErrorClass);
    } }, inputs: { state: "state" }, outputs: { enter: "enter", leave: "leave" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function FileDropExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  padding: 10px;\n  width: 100%;\n  min-height: 50px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: var(--nui-color-line-default,#d9d9d9);\n}\n.nui-file-drop--active[_nghost-%COMP%], .nui-file-drop--error[_nghost-%COMP%] {\n  border-width: 4px;\n  border-style: solid;\n}\n.nui-file-drop--active[_nghost-%COMP%] {\n  border-color: var(--nui-color-selected-contrast,#00c4d2);\n  background-color: var(--nui-color-busy-default,rgba(0, 196, 210, 0.2));\n}\n.nui-file-drop--error[_nghost-%COMP%] {\n  border-color: var(--nui-color-line-critical,#dd2c00);\n  background-color: var(--nui-color-busy-destructive,rgba(221, 44, 0, 0.2));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtZHJvcC5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2Nzcy12YXJpYWJsZXMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQ05BLG1EQUFBO0FER0o7QUFNUTs7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLUTtFQ2JKLHdEQUFBO0VBQUEsc0VBQUE7QURZSjtBQUtRO0VDakJKLG9EQUFBO0VBQUEseUVBQUE7QURnQkoiLCJmaWxlIjoiZmlsZS1kcm9wLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIm51aS1mcmFtZXdvcmstdmFyaWFibGVzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwibWl4aW5zXCI7XG5cbkBkcm9wLXpvbmUtbWluLWhlaWdodDogNTBweDtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogQG51aS1zcGFjZS1zbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiBAZHJvcC16b25lLW1pbi1oZWlnaHQ7XG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7IC8vIFRPRE86IG5vIGJvcmRlci1zdHlsZS1kYXNoZWQgaW4gTlVJXG4gICAgYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbiAgICAuc2V0Q3NzVmFyaWFibGUoYm9yZGVyLWNvbG9yLCBudWktY29sb3ItbGluZS1kZWZhdWx0KTtcbiAgICAmLm51aS1maWxlLWRyb3Age1xuICAgICAgICAmLS1hY3RpdmUsICYtLWVycm9yIHtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogQG51aS1saW5lLWZhdDtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIH1cbiAgICAgICAgJi0tYWN0aXZlIHtcbiAgICAgICAgICAgIC5zZXRDc3NWYXJpYWJsZShib3JkZXItY29sb3IsIG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCk7XG4gICAgICAgICAgICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLWJ1c3ktZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgJi0tZXJyb3Ige1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJvcmRlci1jb2xvciwgbnVpLWNvbG9yLWxpbmUtY3JpdGljYWwpO1xuICAgICAgICAgICAgLnNldENzc1ZhcmlhYmxlKGJhY2tncm91bmQtY29sb3IsIG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"] });


/***/ }),

/***/ "y5at":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/file-drop/file-drop.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from \"@angular/core\";\n\nimport { FileDropState } from \"./public-api\";\n\n/**\n * <example-url>./../examples/index.html#/file-upload</example-url>\n */\n\n/** @ignore */\n@Component({\n    selector: \"nui-file-drop-example\",\n    templateUrl: \"./file-drop.component.html\",\n    styleUrls: [\"./file-drop.component.less\"],\n    host: {\n        \"class\": \"d-inline-flex align-items-center justify-content-center\",\n    },\n})\nexport class FileDropExampleComponent {\n    // TODO: consider renaming this class to DropAreaComponent since it is not file-specific at all\n\n    private counterToHackDragLeave = 0;\n\n    @Input() public state: FileDropState = FileDropState.default;\n\n    @Output() public enter = new EventEmitter<DragEvent>();\n    @Output() public leave = new EventEmitter<DragEvent>();\n    // Drop is handled as regular JS event in parent component.\n    // enter and leave can't be since dragenter and dragleave for parent component are different\n\n    @HostBinding(\"class.nui-file-drop--active\") get hasActiveClass() { return this.state === FileDropState.active; }\n    @HostBinding(\"class.nui-file-drop--error\") get hasErrorClass() { return this.state === FileDropState.error; }\n\n    // this solves problem with opening the file since browser fires dragover by default\n    @HostListener(\"window:dragover\", [\"$event\"])\n    dragOverHandler(ev: DragEvent) {\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n    }\n\n    @HostListener(\"drop\", [\"$event\"])\n    dropHandler(ev: DragEvent) {\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n        this.counterToHackDragLeave = 0; // important not to break mouseleave hack\n    }\n\n    @HostListener(\"dragenter\", [\"$event\"])\n    dragEnterHandler(ev: DragEvent) {\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n        this.counterToHackDragLeave++;\n        if ((ev.currentTarget as Node).contains(ev.currentTarget as Node)) {\n            this.enter.emit(ev);\n        }\n    }\n\n    @HostListener(\"dragleave\", [\"$event\"])\n    dragLeaveHandler(ev: DragEvent) {\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n\n        this.counterToHackDragLeave--;\n        if (this.counterToHackDragLeave === 0) {\n            this.leave.emit(ev);\n        }\n    }\n}\n");

/***/ }),

/***/ "yFhN":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop/dragdrop-files/dragdrop-files.example.component.less ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n.nui-demo {\n    &-drop-area {\n        &__browse {\n            cursor: pointer; // this would not be needed if nui-text-link had pointer - sadpanda\n            margin-bottom: 0; // this is needed sadpanda2\n        }\n    }\n\n    &-file-area {\n        width: 100%;\n        min-height: 30px; // icon size\n        .setCssVariable(border-color, nui-border-fade);\n        border-width: @nui-line-default;\n        border-bottom-width: 0;\n        border-style: solid;\n    }\n    &-file-area:last-child {\n        border-bottom-width: @nui-line-default; // this helps to merge borders of divs to look nice\n    }\n\n}\n");

/***/ })

}]);
//# sourceMappingURL=demo-dragdrop-dragdrop-module-es2015.js.map