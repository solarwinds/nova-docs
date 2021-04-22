(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drag-and-drop-dnd-module"],{

/***/ "+XN+":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone-visual/dnd-dropzone-visual-example.component.ts ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from \"@angular/cdk/drag-drop\";\nimport {ChangeDetectionStrategy, Component} from \"@angular/core\";\n\nclass Company {\n    name: string;\n    industries?: Industry[];\n}\n\nconst COMPANY_ADOBE: string = \"Adobe\";\nconst COMPANY_IBM: string = \"IBM\";\nconst COMPANY_DELL: string = \"Dell\";\n\nclass Industry {\n    name: string;\n    companies?: Company[];\n}\n\nconst INDUSTRY_HW: string = \"Hardware\";\nconst INDUSTRY_SW: string = \"Software\";\n\nconst availableCompanies: Company[] = [\n    {name: COMPANY_ADOBE, industries: [{name: INDUSTRY_SW}]},\n    {name: COMPANY_IBM, industries: [{name: INDUSTRY_SW}, {name: INDUSTRY_HW}]},\n    {name: COMPANY_DELL, industries: [{name: INDUSTRY_HW}, {name: INDUSTRY_SW}]},\n];\n\n@Component({\n    selector: \"dnd-dropzone-visual\",\n    templateUrl: \"./dnd-dropzone-visual-example.component.html\",\n    styleUrls: [\"./dnd-dropzone-visual-example.component.less\"],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class DndDropzoneVisualExampleComponent {\n    public companies: Company[] = availableCompanies;\n\n    public industries: Industry[] = [{name: INDUSTRY_HW, companies: [{name: COMPANY_IBM}]}, {name: INDUSTRY_SW, companies: []}];\n\n    // Note: Prevent user from putting back already displaced items\n    public sourceAcceptsItem(): boolean {\n        return false;\n    }\n\n    public destinationAcceptsItem(company: Company): boolean {\n        return company.name === \"Adobe\" || company.name === \"Dell\";\n    }\n\n    public onItemDropped(event: CdkDragDrop<Company[]>) {\n        if (!this.destinationAcceptsItem(event.item.data)) {\n            return;\n        }\n        if (event.previousContainer === event.container) {\n            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);\n        } else {\n            if (event.previousContainer.element.nativeElement.classList.contains(\"dragzone\")) {\n                copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);\n            } else {\n                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);\n            }\n\n        }\n    }\n}\n");

/***/ }),

/***/ "1xmk":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-preview/dnd-drag-preview.example.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropList class=\"draggable-container\" (cdkDropListDropped)=\"onItemDropped($event)\">\n    <div cdkDrag cdkDragPreviewClass=\"dnd-drag-preview\" class=\"draggable-item\" *ngFor=\"let item of listItems\">\n        {{item.title}}\n        <div *cdkDragPreview>\n            <p>This is the preview for {{item.title}}</p>\n            <img align=\"middle\" width=\"100\" [src]=\"item.preview\" [alt]=\"item.title\">\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "1zS9":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-basic/dnd-basic.example.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from \"@angular/core\";\n\n@Component({\n  selector: \"dnd-basic\",\n  templateUrl: \"./dnd-basic.example.component.html\",\n  styleUrls: [\"./dnd-basic.example.component.less\"],\n})\nexport class DndBasicExampleComponent {\n}\n\n");

/***/ }),

/***/ "3zAL":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-docs/dnd-docs.example.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from \"@angular/core\";\n\n@Component({\n  selector: \"nui-dnd-docs\",\n  templateUrl: \"./dnd-docs.example.component.html\",\n})\nexport class DndDocsExampleComponent {\n    public initialSetupCode = `\n// our module where we want to use drag-and-drop features\nimport { DragDropModule } from \"@angular/cdk/drag-drop\";\n\n@NgModule({\n    imports: [\n        DragDropModule,\n        // other modules that we might need\n    ],\n    declarations: [ /* our module declaration */],\n    exports:      [ /* our exports */ ],\n})\nexport class MyModule {}`\n        .replace(\"\\r\\n\", \"<br/>\") // nice rendering\n    ;\n\n    public hideHandleWhileDragging = `\n.dnd-drag-preview .drag-handle {\n    display: none;\n}\n    `;\n}\n");

/***/ }),

/***/ "6Sqy":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-axis-constraints/dnd-axis-constraints.example.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from \"@angular/core\";\n\n@Component({\n  selector: \"dnd-axis-constraints\",\n  templateUrl: \"./dnd-axis-constraints.example.component.html\",\n  styleUrls: [\"./dnd-axis-constraints.example.component.less\"],\n})\nexport class DndAxisConstraintsExampleComponent {\n}\n\n");

/***/ }),

/***/ "7iE8":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-placeholder/dnd-drag-placeholder-example.component.less ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@box-width: 150px;\n@box-height: 50px;\n@placeholder-border-width: @nui-line-default;\n\n.draggable-container {\n    width: @box-width;\n    border: solid @nui-line-default @nui-color-line-default;\n\n    :last-child {\n        border: none;\n    }\n}\n\n// generic item styling\n.item {\n    padding: @nui-space-md;\n    text-align: center;\n    box-sizing: border-box;\n    border-bottom: solid @nui-line-default @nui-color-line-default;\n}\n\n// drag & drop styling\n.draggable-item:extend(.item), .draggable-placeholder:extend(.item) {\n    height: @box-height;\n    .transition(box-shadow 0.4s);\n\n    &:hover {\n        cursor: move;\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n    }\n}\n\n.draggable-placeholder {\n    border: dashed @placeholder-border-width @nui-color-line-default;\n    background: @nui-color-bg-content-hover;\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.dnd-drag-preview:extend(.item, .nui-dnd-preview) {}\n");

/***/ }),

/***/ "8cFS":
/*!***********************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/external-libraries/drag-and-drop sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dnd-axis-constraints/dnd-axis-constraints.example.component.html": "QQYb",
	"./dnd-axis-constraints/dnd-axis-constraints.example.component.less": "g0Vd",
	"./dnd-axis-constraints/dnd-axis-constraints.example.component.ts": "6Sqy",
	"./dnd-basic/dnd-basic.example.component.html": "Ok0I",
	"./dnd-basic/dnd-basic.example.component.less": "HNaF",
	"./dnd-basic/dnd-basic.example.component.ts": "1zS9",
	"./dnd-custom-handle/dnd-custom-handle.example.component.html": "rOYC",
	"./dnd-custom-handle/dnd-custom-handle.example.component.less": "AFKB",
	"./dnd-custom-handle/dnd-custom-handle.example.component.ts": "kPgN",
	"./dnd-docs/dnd-docs.example.component.html": "BHCc",
	"./dnd-docs/dnd-docs.example.component.ts": "3zAL",
	"./dnd-drag-disabled/dnd-drag-disabled-example.component.html": "RuxN",
	"./dnd-drag-disabled/dnd-drag-disabled-example.component.less": "Dd/j",
	"./dnd-drag-disabled/dnd-drag-disabled-example.component.ts": "DwIe",
	"./dnd-drag-placeholder/dnd-drag-placeholder-example.component.html": "HOu3",
	"./dnd-drag-placeholder/dnd-drag-placeholder-example.component.less": "7iE8",
	"./dnd-drag-placeholder/dnd-drag-placeholder-example.component.ts": "Aabv",
	"./dnd-drag-preview/dnd-drag-preview.example.component.html": "1xmk",
	"./dnd-drag-preview/dnd-drag-preview.example.component.less": "A8zS",
	"./dnd-drag-preview/dnd-drag-preview.example.component.ts": "KZRj",
	"./dnd-dropzone-visual/dnd-dropzone-visual-example.component.html": "G8s3",
	"./dnd-dropzone-visual/dnd-dropzone-visual-example.component.less": "A6zC",
	"./dnd-dropzone-visual/dnd-dropzone-visual-example.component.ts": "+XN+",
	"./dnd-dropzone/dnd-dropzone.example.component.html": "wL1P",
	"./dnd-dropzone/dnd-dropzone.example.component.less": "d+0M",
	"./dnd-dropzone/dnd-dropzone.example.component.ts": "Vw9Z",
	"./dnd.module.ts": "fFVE"
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
webpackContext.id = "8cFS";

/***/ }),

/***/ "A6zC":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone-visual/dnd-dropzone-visual-example.component.less ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@min-height: 50px;\n\n.draggable-container {\n    width: 50%;\n    float: left;\n    min-height: (@min-height * 10);\n\n    .draggable-list {\n        border: solid @dnd-zone-border-width transparent;\n        position: relative;\n        padding: @nui-space-sm;\n        transition: all .3s ease-in-out;\n\n        .title {\n            position: absolute;\n        }\n        &.cdk-drop-list-dragging, &.cdk-drop-list-receiving {\n            .draggable-item:hover {\n                box-shadow: none;\n                background-color: initial;\n            }\n        }\n    }\n}\n\n.dragzone {\n    .cdk-drop-list-dragging .draggable-item:not(.cdk-drag-placeholder) {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n}\n\n.dropzone {\n    margin: 10px 0;\n    min-height: (2 * (@min-height + @nui-space-md + @dnd-zone-border-width));\n\n    .cdk-drag-placeholder, .draggable-placeholder {\n        visibility: hidden;\n        min-height: @min-height - @dnd-zone-border-width;\n    }\n}\n\n.draggable-item, .draggable-placeholder, .dropzone-preview:extend(.nui-dnd-preview) {\n    min-height: @min-height + @dnd-item-border-width;\n    padding: @nui-space-md;\n    box-sizing: border-box;\n    text-align: center;\n    border: @dnd-item-border-width @nui-color-line-default solid;\n    .transition(box-shadow 0.4s);\n}\n\n.draggable-item {\n    border-bottom-color: transparent;\n\n    &:hover:not(.cdk-drag-placeholder) {\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n        cursor: move;\n        padding: @nui-space-md;\n    }\n}\n&.items-container :last-child { border-bottom-color: @nui-color-line-default;}\n\n.draggable-placeholder {\n    min-height: @min-height + @dnd-zone-border-width - 1;\n    border-width: @dnd-zone-border-width;\n    border-style: dashed;\n    background: @nui-color-bg-content-hover;\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n\n.cdk-drag-animating {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.centered-overlay .text-special {\n    top: -25px;\n}\n");

/***/ }),

/***/ "A8zS":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-preview/dnd-drag-preview.example.component.less ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@box-width: 150px;\n@box-height: 50px;\n\n.draggable-container {\n    width: @box-width;\n    border-top: solid @nui-line-default @nui-color-line-default;\n}\n\n.item {\n    padding: @nui-space-md;\n    text-align: center;\n}\n\n.draggable-item:extend(.item) {\n    height: @box-height;\n    border: solid @nui-line-default @nui-color-line-default;\n    border-top: none;\n    .transition(box-shadow 0.4s);\n\n    &:hover {\n        cursor: move;\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n    }\n}\n\n.dnd-drag-preview:extend(.item, .nui-dnd-preview) {}\n");

/***/ }),

/***/ "AFKB":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-custom-handle/dnd-custom-handle.example.component.less ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@box-width: 300px;\n@box-height: 50px;\n\n.draggable-container {\n    width: @box-width;\n    border-top: solid @nui-line-default @nui-color-line-default;\n}\n\n// generic item styling\n.item {\n    height: @box-height;\n    padding: @nui-space-md;\n    text-align: center;\n    box-sizing: border-box;\n    border: solid @nui-line-default @nui-color-line-default;\n    border-top: none;\n    position: relative;\n}\n\n// drag & drop styling\n.draggable-item:extend(.item) {\n    background: @nui-color-bg-content;\n    .transition(box-shadow 0.4s);\n\n    // for all ENABLED items we apply the hover style\n    &:not(.cdk-drag-disabled) {\n        &:hover {\n            .nui-dnd-hover-state();\n        }\n\n        // we apply the raised state only for items without handle\n        &:not(.with-handle):hover {\n            cursor: move;\n            .nui-dnd-raised-state();\n        }\n    }\n\n    &.cdk-drag-disabled {\n        color: @nui-color-disabled;\n    }\n}\n\n.drag-handle {\n    color: #ccc;\n    cursor: move;\n    display: inline;\n}\n\n.dnd-drag-preview:extend(.item, .nui-dnd-preview) {}\n");

/***/ }),

/***/ "Aabv":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-placeholder/dnd-drag-placeholder-example.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CdkDragDrop, moveItemInArray} from \"@angular/cdk/drag-drop\";\nimport {Component} from \"@angular/core\";\n\n@Component({\n  selector: \"dnd-drag-placeholder\",\n  templateUrl: \"./dnd-drag-placeholder-example.component.html\",\n  styleUrls: [\"./dnd-drag-placeholder-example.component.less\"],\n})\nexport class DndDragPlaceholderExampleComponent {\n    public listItems: string[] = [\"Adobe\", \"IBM\", \"Dell\" ];\n\n    public onItemDropped(event: CdkDragDrop<string[]>) {\n        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);\n    }\n}\n");

/***/ }),

/***/ "BHCc":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-docs/dnd-docs.example.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>The Angular CDK drag and drop module provides a way to easily and declaratively create drag and drop interfaces.</p>\n<p>To get started, import <code>DragDropModule</code> into the <code>NgModule</code> where you want to use drag-and-drop features:</p>\n<nui-example-code language=\"typescript\">{{ initialSetupCode }}</nui-example-code>\n<p>\n    For more details on the implementation of the @angular/cdk/drag-drop, check the documentation <a href=\"https://material.angular.io/cdk/drag-drop/overview\" target=\"_blank\">here</a>\n</p>\n<h2>Required Modules</h2>\n<ul>\n    <li>\n        <code>NuiDndModule</code>\n    </li>\n    <li>\n        Angular CDK's <code>DragDropModule</code>\n    </li>\n</ul>\n\n<h2>Basic Usage</h2>\n<p>\n    This example shows how easy it is to create a draggable element by adding the <code>cdkDrag</code> directive on the DOM element we want to become draggable.\n    Since it can be dragged without any handle, hovering the element will alter its state to both <code>nui-dnd-raised-state</code> and <code>nui-dnd-hover-state</code>.\n</p>\n<nui-message [allowDismiss]=false type=\"info\">\n    <p>\n        In case you want to customize the styles for your draggable elements, it may be helpful to know that\n        all <code>cdkDrag</code> DOM elements have the <code>.cdk-drag</code> CSS class applied to them.\n    </p>\n</nui-message>\n\n<nui-example-wrapper filenamePrefix=\"dnd-basic\" exampleTitle=\"Drag & Drop\">\n    <dnd-basic></dnd-basic>\n</nui-example-wrapper>\n\n<h2>Drag Axis Constraints</h2>\n<p>\n    By default, <code>cdkDrag</code> allows free movement in all directions. To restrict dragging to a specific axis, you can set\n    the <code>cdkDragLockAxis</code> input on <code>cdkDrag</code> or the <code>cdkDropListLockAxis</code> input on <code>cdkDropList</code>\n    to either \"x\" or \"y\".\n</p>\n<nui-example-wrapper filenamePrefix=\"dnd-axis-constraints\" exampleTitle=\"Drag Axis Constraints\">\n    <dnd-axis-constraints></dnd-axis-constraints>\n</nui-example-wrapper>\n\n<h2>Disabled draggable items</h2>\n<p>A collection of <code>cdkDrag</code> elements are usually placed inside a <code>cdkDropList</code>.</p>\n<p>To prevent an item from being dragged set the <code>cdkDragDisabled</code> input on the <code>cdkDrag</code> element to true:</p>\n<nui-message [allowDismiss]=false type=\"info\">\n    <p>Disabled draggable DOM elements have the <code>.cdk-drag-disabled</code> CSS class appended to them.</p>\n    <p>See the styles customization applied to the disabled draggable items in the LESS source code tab in the source expander below for inspiration.</p>\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"dnd-drag-disabled\" exampleTitle=\"Disabled draggable items\">\n    <dnd-drag-disabled></dnd-drag-disabled>\n</nui-example-wrapper>\n\n<h2>Custom Drag Preview</h2>\n<p>It is possible to display custom preview content instead of cloning the original element by specifying the <code>cdkDragPreview</code> directive.</p>\n<p>The directive must be specified for each <code>cdkDrag</code> element that we want to have preview content.</p>\n<nui-message [allowDismiss]=false type=\"warning\">\n    <p>\n        <strong>Important:</strong> In order for the <code>cdkDragPreview</code> directive to work, it must\n        be wrapped inside a DOM element with the <code>cdkDropList</code> directive specified.\n    </p>\n    Take a look at the source of the following example to see how.\n</nui-message>\n<nui-example-wrapper filenamePrefix=\"dnd-drag-preview\" exampleTitle=\"Custom Drag Preview\">\n    <dnd-drag-preview></dnd-drag-preview>\n</nui-example-wrapper>\n\n<h2>Custom Drag Handle</h2>\n<p>The handle by which an element can be dragged can be customized by specifying the directive <code>cdkDragHandle</code> on the element we want to become the handle.</p>\n<nui-example-wrapper filenamePrefix=\"dnd-custom-handle\" exampleTitle=\"Custom Drag Handle\">\n    <dnd-custom-handle></dnd-custom-handle>\n</nui-example-wrapper>\n<p>\n    In the example above the handle is still displayed while dragging an element;\n    to hide the handle we just need to apply the properer styling on the cloned preview element as shown below:\n    <nui-example-code language=\"css\">{{hideHandleWhileDragging}}</nui-example-code>\n</p>\n\n<h2>Custom Placeholder</h2>\n<p>\n    While a <code>cdkDrag</code> element is being dragged, the Angular CDK will create a placeholder element that\n    will show the user where the dragged element will be placed when it's dropped.\n</p>\n<p>\n    By default the placeholder is a clone of the element that is being dragged, however you can replace it\n    with a custom one using the <code>*cdkDragPlaceholder</code> directive.\n</p>\n<nui-example-wrapper filenamePrefix=\"dnd-drag-placeholder\" exampleTitle=\"Custom Placeholder\">\n    <dnd-drag-placeholder></dnd-drag-placeholder>\n</nui-example-wrapper>\n\n<h2>Dropzones Visualization</h2>\n<p>\n    A drag container is a collection of <code>cdkDrag</code> elements within a <code>cdkDropList</code>.\n    Decorating a drag container with the <code><a href=\"../directives/DndDropTargetDirective.html\" target=\"_parent\">nuiDndDropTarget</a></code> directive defines a dropzone.\n</p>\n<nui-message [allowDismiss]=false type=\"warning\">\n    In order use multiple drag containers, both sources and destinations must be wrapped within a <code>cdkDropListGroup</code> directive.\n</nui-message>\n<p>\n    Once the user starts dragging an item from the source, the destination is highlighted as an available destination dropzone;\n    the <code>nui-dnd-dropzone--active</code> CSS class is added to the dropzone once dragging starts.\n    The destination uses the <code>nuiDndDropTarget</code> directive helper in order to inform the user visually\n    whether a dropzone will accept or reject a dragged item. In the following example, all items are accepted\n    except for <em>IBM</em>;\n</p>\n<nui-message [allowDismiss]=false type=\"info\">\n    The following CSS classes are added to the dropzone once the conditions are met as described below:\n    <ul>\n        <li>- <code>nui-dnd-dropzone--active</code> - once dragging starts</li>\n        <li>- <code>nui-dnd-dropzone--drop-allowed</code> - once the user is over the dropzone and the dragged item is accepted</li>\n        <li>- <code>nui-dnd-dropzone--drop-not-allowed</code> - once the user is over the dropzone and the dragged item is NOT accepted</li>\n    </ul>\n</nui-message>\n<p>\n    To define acceptance conditions for a dropzone, the user can provide a callback method to the <code>canBeDropped</code>\n    input.\n</p>\n<nui-example-wrapper filenamePrefix=\"dnd-dropzone\" exampleTitle=\"Dropzones\">\n    <dnd-dropzone></dnd-dropzone>\n</nui-example-wrapper>\n");

/***/ }),

/***/ "Dd/j":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-disabled/dnd-drag-disabled-example.component.less ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@box-width: 150px;\n@box-height: 50px;\n\n.draggable-container {\n    width: @box-width;\n    border-top: solid @nui-line-default @nui-color-line-default;\n}\n\n.item {\n    padding: @nui-space-md;\n    text-align: center;\n}\n\n.draggable-item:extend(.item) {\n    height: @box-height;\n    border: @dnd-item-border-width @nui-color-line-default solid;\n    border-top: none;\n\n    .transition(box-shadow 0.4s);\n\n    // apply style only for items that are enabled\n    &:hover:not(.cdk-drag-disabled) {\n        cursor: move;\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n    }\n\n    &.cdk-drag-disabled {\n        color: @nui-color-disabled;\n    }\n}\n\n.dnd-drag-preview:extend(.item, .nui-dnd-preview) {}\n\n");

/***/ }),

/***/ "DwIe":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-disabled/dnd-drag-disabled-example.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CdkDragDrop, moveItemInArray} from \"@angular/cdk/drag-drop\";\nimport {Component} from \"@angular/core\";\n\nclass IListItem  {\n    title: string;\n    enabled: boolean;\n}\n\n@Component({\n  selector: \"dnd-drag-disabled\",\n  templateUrl: \"./dnd-drag-disabled-example.component.html\",\n  styleUrls: [\"./dnd-drag-disabled-example.component.less\"],\n})\nexport class DndDragDisabledExampleComponent {\n    public listItems: IListItem[] = [\n        {\n            title: \"Adobe\",\n            enabled: true,\n        },\n        {\n            title: \"IBM\",\n            enabled: false,\n        },\n    ];\n\n    public onItemDropped(event: CdkDragDrop<IListItem[]>) {\n        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);\n    }\n\n    public translatedStatus(enabled: boolean) {\n        return enabled ? $localize `Enabled` : $localize `Disabled`;\n    }\n}\n");

/***/ }),

/***/ "G8s3":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone-visual/dnd-dropzone-visual-example.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropListGroup>\n    <div class=\"draggable-container pr-2\" id=\"nui-demo-drop-list-1\">\n        <h3>Companies</h3>\n        <div cdkDropList class=\"dragzone draggable-list\"\n             [cdkDropListData]=\"companies\"\n             [cdkDropListSortingDisabled]=\"true\"\n             [cdkDropListEnterPredicate]=\"sourceAcceptsItem\"\n             (cdkDropListDropped)=\"onItemDropped($event)\">\n            <div class=\"items-container\">\n                <div *ngFor=\"let company of companies\" class=\"draggable-item\"\n                     cdkDrag\n                     cdkDragPreviewClass=\"nui-dnd-preview\"\n                     [cdkDragData]=\"company\">\n                    <div class=\"draggable-placeholder\" *cdkDragPlaceholder></div>\n                    {{company.name}}\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"draggable-container pl-2\" id=\"nui-demo-drop-list-2\">\n        <h3>Industries</h3>\n        <div #dropTarget=nuiDndDropTarget id=\"cdk-drop-list\" *ngFor=\"let industry of industries\" class=\"dropzone draggable-list\"\n             cdkDropList\n             [cdkDropListSortingDisabled]=\"true\"\n             [cdkDropListData]=\"industry.companies\"\n             nuiDndDropTarget\n             [canBeDropped]=\"destinationAcceptsItem\"\n             (cdkDropListDropped)=\"onItemDropped($event)\">\n            <div class=\"title\" *ngIf=\"dropTarget.isDropZoneActive ||  !industry.companies?.length\">\n                {{industry.name}}\n                <!--\n                ShowDropZone: {{ dropTarget.showDropZone$ | async}}\n                CanDrop: {{ dropTarget.canDrop$ | async}}\n                IsDropZoneActive: {{dropTarget.isDropZoneActive}}\n                -->\n            </div>\n            <div class=\"items-container\">\n                <div *ngFor=\"let company of industry.companies\" class=\"draggable-item\"\n                     cdkDrag\n                     cdkDragPreviewClass=\"dropzone-preview\"\n                     [cdkDragData]=\"company\"\n                     [class.invisible]=\"dropTarget.isDropZoneActive\">\n                    {{company.name}}\n                </div>\n            </div>\n            <div *ngIf=\"dropTarget.isDropZoneActive\" class=\"centered-overlay\">\n                <!-- highlight item placeholder-->\n                <div *ngIf=\"(dropTarget.showDropZone$ | async) !== true\">\n                    <nui-icon icon=\"plus\" iconSize=\"medium\" cssClass=\"drop-circle-permanent\"></nui-icon>\n                </div>\n\n                <!-- accepted item placeholder-->\n                <div *ngIf=\"(dropTarget.canLastDragItemBeDropped$ | async)\">\n                    <nui-icon icon=\"plus\" iconSize=\"medium\" cssClass=\"drop-circle-allowed\"></nui-icon>\n                </div>\n\n                <!-- reject item placeholder-->\n                <div *ngIf=\"(dropTarget.canLastDragItemBeDropped$ | async) === false\">\n                    <div class=\"centered-overlay text-nowrap text-special\" i18n>Not allowed</div>\n                    <nui-icon icon=\"close\" iconSize=\"medium\" cssClass=\"drop-circle-not-allowed\"></nui-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "HNaF":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-basic/dnd-basic.example.component.less ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@box-width: 150px;\n@box-height: 100px;\n\n.draggable-item {\n    width: @box-width;\n    height: @box-height;\n    padding: @nui-space-md;\n    box-sizing: border-box;\n    border: solid 1px @gray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    z-index: 1;\n    .transition(box-shadow 0.4s);\n\n    &:hover {\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n        cursor: move;\n        padding: @nui-space-md;\n    }\n}\n");

/***/ }),

/***/ "HOu3":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-placeholder/dnd-drag-placeholder-example.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropList class=\"draggable-container\" (cdkDropListDropped)=\"onItemDropped($event)\">\n    <div cdkDrag cdkDragPreviewClass=\"dnd-drag-preview\" class=\"draggable-item\" *ngFor=\"let item of listItems\">\n        {{item}}\n        <div class=\"draggable-placeholder\" *cdkDragPlaceholder i18n>\n            Placeholder\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "KZRj":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-preview/dnd-drag-preview.example.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CdkDragDrop, moveItemInArray} from \"@angular/cdk/drag-drop\";\nimport {Component} from \"@angular/core\";\nimport {IRepeatItem} from \"@nova-ui/bits\";\n\ninterface IListItem extends IRepeatItem {\n    title: string;\n    preview: string;\n}\n\n@Component({\n  selector: \"dnd-drag-preview\",\n  templateUrl: \"./dnd-drag-preview.example.component.html\",\n  styleUrls: [\"./dnd-drag-preview.example.component.less\"],\n})\nexport class DndDragPreviewExampleComponent {\n    public listItems: IListItem[] = [\n        {\n            title: \"Adobe\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/524px-Adobe_Systems_logo_and_wordmark.svg.png\",\n        },\n        {\n            title: \"IBM\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png\",\n        },\n        {\n            title: \"Dell\",\n            preview: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/300px-Dell_Logo.svg.png\",\n        },\n    ];\n\n    public onItemDropped(event: CdkDragDrop<IListItem[]>) {\n        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);\n    }\n}\n");

/***/ }),

/***/ "O0gW":
/*!********************************************************************************************************************************!*\
  !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone-visual/dnd-dropzone-visual-example.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: DndDropzoneVisualExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDropzoneVisualExampleComponent", function() { return DndDropzoneVisualExampleComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_dnd_dnd_drop_target_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/lib/dnd/dnd-drop-target.directive */ "tVJz");





function DndDropzoneVisualExampleComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 9);
} }
function DndDropzoneVisualExampleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndDropzoneVisualExampleComponent_div_6_div_1_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", company_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r2.name, " ");
} }
function DndDropzoneVisualExampleComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const industry_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", industry_r4.name, " ");
} }
function DndDropzoneVisualExampleComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", _r5.isDropZoneActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", company_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", company_r10.name, " ");
} }
function DndDropzoneVisualExampleComponent_div_10_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DndDropzoneVisualExampleComponent_div_10_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nui-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DndDropzoneVisualExampleComponent_div_10_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "nui-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DndDropzoneVisualExampleComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DndDropzoneVisualExampleComponent_div_10_div_5_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DndDropzoneVisualExampleComponent_div_10_div_5_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DndDropzoneVisualExampleComponent_div_10_div_5_div_5_Template, 4, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, _r5.showDropZone$) !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, _r5.canLastDragItemBeDropped$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, _r5.canLastDragItemBeDropped$) === false);
} }
function DndDropzoneVisualExampleComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndDropzoneVisualExampleComponent_div_10_Template_div_cdkDropListDropped_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onItemDropped($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DndDropzoneVisualExampleComponent_div_10_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DndDropzoneVisualExampleComponent_div_10_div_4_Template, 2, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DndDropzoneVisualExampleComponent_div_10_div_5_Template, 7, 9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const industry_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListSortingDisabled", true)("cdkDropListData", industry_r4.companies)("canBeDropped", ctx_r1.destinationAcceptsItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.isDropZoneActive || !(industry_r4.companies == null ? null : industry_r4.companies.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", industry_r4.companies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.isDropZoneActive);
} }
class Company {
}
const COMPANY_ADOBE = "Adobe";
const COMPANY_IBM = "IBM";
const COMPANY_DELL = "Dell";
class Industry {
}
const INDUSTRY_HW = "Hardware";
const INDUSTRY_SW = "Software";
const availableCompanies = [
    { name: COMPANY_ADOBE, industries: [{ name: INDUSTRY_SW }] },
    { name: COMPANY_IBM, industries: [{ name: INDUSTRY_SW }, { name: INDUSTRY_HW }] },
    { name: COMPANY_DELL, industries: [{ name: INDUSTRY_HW }, { name: INDUSTRY_SW }] },
];
class DndDropzoneVisualExampleComponent {
    constructor() {
        this.companies = availableCompanies;
        this.industries = [{ name: INDUSTRY_HW, companies: [{ name: COMPANY_IBM }] }, { name: INDUSTRY_SW, companies: [] }];
    }
    // Note: Prevent user from putting back already displaced items
    sourceAcceptsItem() {
        return false;
    }
    destinationAcceptsItem(company) {
        return company.name === "Adobe" || company.name === "Dell";
    }
    onItemDropped(event) {
        if (!this.destinationAcceptsItem(event.item.data)) {
            return;
        }
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            if (event.previousContainer.element.nativeElement.classList.contains("dragzone")) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["copyArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        }
    }
}
DndDropzoneVisualExampleComponent.ɵfac = function DndDropzoneVisualExampleComponent_Factory(t) { return new (t || DndDropzoneVisualExampleComponent)(); };
DndDropzoneVisualExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DndDropzoneVisualExampleComponent, selectors: [["dnd-dropzone-visual"]], decls: 11, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6187988476699573468$$DEMO_SRC_COMPONENTS_DEMO_EXTERNAL_LIBRARIES_DRAG_AND_DROP_DND_DROPZONE_VISUAL_DND_DROPZONE_VISUAL_EXAMPLE_COMPONENT_TS____1 = goog.getMsg("Not allowed");
        i18n_0 = MSG_EXTERNAL_6187988476699573468$$DEMO_SRC_COMPONENTS_DEMO_EXTERNAL_LIBRARIES_DRAG_AND_DROP_DND_DROPZONE_VISUAL_DND_DROPZONE_VISUAL_EXAMPLE_COMPONENT_TS____1;
    }
    else {
        i18n_0 = $localize `:␟81fbbbbeaf89c71eb3c63ff12858c284f92c732d␟6187988476699573468:Not allowed`;
    } return [["cdkDropListGroup", ""], ["id", "nui-demo-drop-list-1", 1, "draggable-container", "pr-2"], ["cdkDropList", "", 1, "dragzone", "draggable-list", 3, "cdkDropListData", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListDropped"], [1, "items-container"], ["class", "draggable-item", "cdkDrag", "", "cdkDragPreviewClass", "nui-dnd-preview", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "nui-demo-drop-list-2", 1, "draggable-container", "pl-2"], ["id", "cdk-drop-list", "class", "dropzone draggable-list", "cdkDropList", "", "nuiDndDropTarget", "", 3, "cdkDropListSortingDisabled", "cdkDropListData", "canBeDropped", "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragPreviewClass", "nui-dnd-preview", 1, "draggable-item", 3, "cdkDragData"], ["class", "draggable-placeholder", 4, "cdkDragPlaceholder"], [1, "draggable-placeholder"], ["id", "cdk-drop-list", "cdkDropList", "", "nuiDndDropTarget", "", 1, "dropzone", "draggable-list", 3, "cdkDropListSortingDisabled", "cdkDropListData", "canBeDropped", "cdkDropListDropped"], ["dropTarget", "nuiDndDropTarget"], ["class", "title", 4, "ngIf"], ["class", "draggable-item", "cdkDrag", "", "cdkDragPreviewClass", "dropzone-preview", 3, "cdkDragData", "invisible", 4, "ngFor", "ngForOf"], ["class", "centered-overlay", 4, "ngIf"], [1, "title"], ["cdkDrag", "", "cdkDragPreviewClass", "dropzone-preview", 1, "draggable-item", 3, "cdkDragData"], [1, "centered-overlay"], [4, "ngIf"], ["icon", "plus", "iconSize", "medium", "cssClass", "drop-circle-permanent"], ["icon", "plus", "iconSize", "medium", "cssClass", "drop-circle-allowed"], [1, "centered-overlay", "text-nowrap", "text-special"], i18n_0, ["icon", "close", "iconSize", "medium", "cssClass", "drop-circle-not-allowed"]]; }, template: function DndDropzoneVisualExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DndDropzoneVisualExampleComponent_Template_div_cdkDropListDropped_4_listener($event) { return ctx.onItemDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DndDropzoneVisualExampleComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Industries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DndDropzoneVisualExampleComponent_div_10_Template, 6, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", ctx.companies)("cdkDropListSortingDisabled", true)("cdkDropListEnterPredicate", ctx.sourceAcceptsItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.industries);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPlaceholder"], _src_lib_dnd_dnd_drop_target_directive__WEBPACK_IMPORTED_MODULE_3__["DndDropTargetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".dropzone-preview[_ngcontent-%COMP%] {\n  border: 1px #d9d9d9 solid;background: #f2f2f2;z-index: 1;box-sizing: border-box;box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.draggable-container[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  min-height: 500px;\n}\n.draggable-container[_ngcontent-%COMP%]   .draggable-list[_ngcontent-%COMP%] {\n  border: solid 4px transparent;\n  position: relative;\n  padding: 10px;\n  transition: all 0.3s ease-in-out;\n}\n.draggable-container[_ngcontent-%COMP%]   .draggable-list[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.draggable-container[_ngcontent-%COMP%]   .draggable-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .draggable-item[_ngcontent-%COMP%]:hover, .draggable-container[_ngcontent-%COMP%]   .draggable-list.cdk-drop-list-receiving[_ngcontent-%COMP%]   .draggable-item[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  background-color: initial;\n}\n.dragzone[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%]   .draggable-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.dropzone[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  min-height: 138px;\n}\n.dropzone[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%], .dropzone[_ngcontent-%COMP%]   .draggable-placeholder[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-height: 46px;\n}\n.draggable-item[_ngcontent-%COMP%], .draggable-placeholder[_ngcontent-%COMP%], .dropzone-preview[_ngcontent-%COMP%] {\n  min-height: 51px;\n  padding: 15px;\n  box-sizing: border-box;\n  text-align: center;\n  border: 1px #d9d9d9 solid;\n  transition: box-shadow 0.4s;\n}\n.draggable-item[_ngcontent-%COMP%] {\n  border-bottom-color: transparent;\n}\n.draggable-item[_ngcontent-%COMP%]:hover:not(.cdk-drag-placeholder) {\n  background: #f2f2f2;\n  z-index: 1;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n  cursor: move;\n  padding: 15px;\n}\n.items-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  border-bottom-color: #d9d9d9;\n}\n.draggable-placeholder[_ngcontent-%COMP%] {\n  min-height: 53px;\n  border-width: 4px;\n  border-style: dashed;\n  background: #f2f2f2;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.centered-overlay[_ngcontent-%COMP%]   .text-special[_ngcontent-%COMP%] {\n  top: -25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRuZC1kcm9wem9uZS12aXN1YWwtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zdHlsZXMvbWl4aW5zL2RuZC5sZXNzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3N0eWxlcy9taXhpbnMvdmVuZG9yLXByZWZpeGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN5QztFQ3pCckMseUJBQUEsQ0FYQSxtQkFBQSxDQUlBLFVBQUEsQ0FFQSxzQkFBQSxDQUNBLHVFQUFBO0FEYko7QUFHQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUZBO0VBTVEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQURSO0FBUkE7RUFZWSxrQkFBQTtBQURaO0FBR1E7O0VBRVEsZ0JBQUE7RUFDQSx5QkFBQTtBQURoQjtBQU9BO0VBRVEsc0RBQUE7QUFOUjtBQVVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBUko7QUFNQTs7RUFLUSxrQkFBQTtFQUNBLGdCQUFBO0FBUFI7QUFXQTs7O0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VFNkpNLDJCQUFBO0FGaktWO0FBUUE7RUFDSSxnQ0FBQTtBQU5KO0FBUUk7RUNoREEsbUJBQUE7RUFJQSxVQUFBO0VBRUEsc0JBQUE7RUFDQSx1RUFBQTtFRDRDSSxZQUFBO0VBQ0EsYUFBQTtBQUpSO0FBT0M7RUFBK0IsNEJBQUE7QUFKaEM7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7QUFKSjtBQVFBO0VBQ0ksc0RBQUE7QUFOSjtBQVNBO0VBQ0ksVUFBQTtBQVBKIiwiZmlsZSI6ImRuZC1kcm9wem9uZS12aXN1YWwtZXhhbXBsZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCJudWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuQGltcG9ydCAocmVmZXJlbmNlKSBcIm1peGluc1wiO1xuXG5AbWluLWhlaWdodDogNTBweDtcblxuLmRyYWdnYWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLWhlaWdodDogKEBtaW4taGVpZ2h0ICogMTApO1xuXG4gICAgLmRyYWdnYWJsZS1saXN0IHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IEBudWktc3BhY2Utc207XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAmLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcsICYuY2RrLWRyb3AtbGlzdC1yZWNlaXZpbmcge1xuICAgICAgICAgICAgLmRyYWdnYWJsZS1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kcmFnem9uZSB7XG4gICAgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmRyYWdnYWJsZS1pdGVtOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIH1cbn1cblxuLmRyb3B6b25lIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBtaW4taGVpZ2h0OiAoMiAqIChAbWluLWhlaWdodCArIEBudWktc3BhY2UtbWQgKyBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoKSk7XG5cbiAgICAuY2RrLWRyYWctcGxhY2Vob2xkZXIsIC5kcmFnZ2FibGUtcGxhY2Vob2xkZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG1pbi1oZWlnaHQ6IEBtaW4taGVpZ2h0IC0gQGRuZC16b25lLWJvcmRlci13aWR0aDtcbiAgICB9XG59XG5cbi5kcmFnZ2FibGUtaXRlbSwgLmRyYWdnYWJsZS1wbGFjZWhvbGRlciwgLmRyb3B6b25lLXByZXZpZXc6ZXh0ZW5kKC5udWktZG5kLXByZXZpZXcpIHtcbiAgICBtaW4taGVpZ2h0OiBAbWluLWhlaWdodCArIEBkbmQtaXRlbS1ib3JkZXItd2lkdGg7XG4gICAgcGFkZGluZzogQG51aS1zcGFjZS1tZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IEBkbmQtaXRlbS1ib3JkZXItd2lkdGggQG51aS1jb2xvci1saW5lLWRlZmF1bHQgc29saWQ7XG4gICAgLnRyYW5zaXRpb24oYm94LXNoYWRvdyAwLjRzKTtcbn1cblxuLmRyYWdnYWJsZS1pdGVtIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6aG92ZXI6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICAgICAgICAubnVpLWRuZC1ob3Zlci1zdGF0ZSgpO1xuICAgICAgICAubnVpLWRuZC1yYWlzZWQtc3RhdGUoKTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBwYWRkaW5nOiBAbnVpLXNwYWNlLW1kO1xuICAgIH1cbn1cbiYuaXRlbXMtY29udGFpbmVyIDpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbS1jb2xvcjogQG51aS1jb2xvci1saW5lLWRlZmF1bHQ7fVxuXG4uZHJhZ2dhYmxlLXBsYWNlaG9sZGVyIHtcbiAgICBtaW4taGVpZ2h0OiBAbWluLWhlaWdodCArIEBkbmQtem9uZS1ib3JkZXItd2lkdGggLSAxO1xuICAgIGJvcmRlci13aWR0aDogQGRuZC16b25lLWJvcmRlci13aWR0aDtcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgICBiYWNrZ3JvdW5kOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQtaG92ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNlbnRlcmVkLW92ZXJsYXkgLnRleHQtc3BlY2lhbCB7XG4gICAgdG9wOiAtMjVweDtcbn1cbiIsIkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi9udWktZnJhbWV3b3JrLXZhcmlhYmxlc1wiO1xuXG5AZG5kLWl0ZW0tYm9yZGVyLXdpZHRoOiBAbnVpLWxpbmUtZGVmYXVsdDtcbkBkbmQtem9uZS1ib3JkZXItd2lkdGg6IEBudWktbGluZS1mYXQ7XG5AZG5kLXpvbmUtaWNvbi1zaXplOiA0MHB4O1xuXG4vKiogZHJhZ2dhYmxlIGl0ZW1zIHN0YXRlcyAqL1xuLm51aS1kbmQtaG92ZXItc3RhdGUge1xuICAgIGJhY2tncm91bmQ6IEBudWktY29sb3ItYmctY29udGVudC1ob3Zlcjtcbn1cblxuLm51aS1kbmQtcmFpc2VkLXN0YXRlIHtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1lbGV2YXRlZDtcbn1cblxuLm51aS1kbmQtcHJldmlldyB7XG4gICAgYm9yZGVyOiBAZG5kLWl0ZW0tYm9yZGVyLXdpZHRoIEBudWktY29sb3ItbGluZS1kZWZhdWx0IHNvbGlkO1xuICAgIC5udWktZG5kLWhvdmVyLXN0YXRlKCk7XG4gICAgLm51aS1kbmQtcmFpc2VkLXN0YXRlKCk7XG59XG5cbi5udWktZG5kLWRyb3B6b25lIHtcbiAgICAvKiogZHJvcHpvbmUgc3RhdGVzICovXG4gICAgJi5udWktZG5kLWRyb3B6b25lLS1hY3RpdmUge1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggZGFzaGVkIEBudWktY29sb3Itc2VtYW50aWMtdW5rbm93biAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1hbGxvd2VkIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICBib3JkZXI6IEBkbmQtem9uZS1ib3JkZXItd2lkdGggc29saWQgQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLXNlbGVjdGVkLWFjdGl2ZTtcbiAgICB9O1xuICAgICYubnVpLWRuZC1kcm9wem9uZS0tZHJvcC1ub3QtYWxsb3dlZCB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgYm9yZGVyOiBAZG5kLXpvbmUtYm9yZGVyLXdpZHRoIHNvbGlkIEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWwgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1idXN5LWRlc3RydWN0aXZlO1xuICAgIH1cblxuICAgIC8qKiBvdGhlciBjdXN0b216aWF0aW9ucyAqL1xuICAgIC5jZW50ZXJlZC1vdmVybGF5LCAubnVpLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIC50cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuXG4gICAgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IEBkbmQtem9uZS1pY29uLXNpemU7XG4gICAgICAgICAgICB3aWR0aDogQGRuZC16b25lLWljb24tc2l6ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQFRPRE8gZml4L3JlbW92ZSB0aGlzIGhhY2tpbmcgc3R5bGUgb25jZSBudWktaWNvbiBnZXRzIHByb3BlciBzdXBwb3J0IGZvciBzaXplLCBiZyBjb2xvciBhbmQgZmlsbCBjb2xvclxuICAgIC5kcm9wLWNpcmNsZXtcbiAgICAgICAgJi1wZXJtYW5lbnQge1xuICAgICAgICAgICAgJiAubnVpLWljb24taXRlbSB7XG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAbnVpLWNvbG9yLWJnLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICYgcG9seWdvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taGlnaGxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1hbGxvd2VkIHtcbiAgICAgICAgICAgICYgLm51aS1pY29uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQG51aS1jb2xvci1zZWxlY3RlZC1jb250cmFzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgICAmIHBvbHlnb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IEBudWktY29sb3ItaWNvbi1pbnZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1ub3QtYWxsb3dlZCB7XG4gICAgICAgICAgICAmIC5udWktaWNvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBudWktY29sb3Itc2VtYW50aWMtY3JpdGljYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgJiBwYXRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDVweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBAbnVpLWNvbG9yLWljb24taW52ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFZlbmRvciBQcmVmaXhlc1xuLy9cbi8vIEFsbCB2ZW5kb3IgbWl4aW5zIGFyZSBkZXByZWNhdGVkIGFzIG9mIHYzLjIuMCBkdWUgdG8gdGhlIGludHJvZHVjdGlvbiBvZlxuLy8gQXV0b3ByZWZpeGVyIGluIG91ciBHcnVudGZpbGUuIFRoZXkgd2lsbCBiZSByZW1vdmVkIGluIHY0LlxuXG4vLyAtIEFuaW1hdGlvbnNcbi8vIC0gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gLSBCb3ggc2hhZG93XG4vLyAtIEJveCBzaXppbmdcbi8vIC0gQ29udGVudCBjb2x1bW5zXG4vLyAtIEh5cGhlbnNcbi8vIC0gUGxhY2Vob2xkZXIgdGV4dFxuLy8gLSBUcmFuc2Zvcm1hdGlvbnNcbi8vIC0gVHJhbnNpdGlvbnNcbi8vIC0gVXNlciBTZWxlY3RcblxuXG4vLyBBbmltYXRpb25zXG4uYW5pbWF0aW9uKEBhbmltYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IEBhbmltYXRpb247XG4gICAgICAgLW8tYW5pbWF0aW9uOiBAYW5pbWF0aW9uO1xuICAgICAgICAgIGFuaW1hdGlvbjogQGFuaW1hdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1uYW1lKEBuYW1lKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IEBuYW1lO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBAbmFtZTtcbn1cblxuLmFuaW1hdGlvbi1kdXJhdGlvbihAZHVyYXRpb24pIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IEBkdXJhdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IEBkdXJhdGlvbjtcbn1cblxuLmFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24oQHRpbWluZy1mdW5jdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRpbWluZy1mdW5jdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1kZWxheShAZGVsYXkpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IEBkZWxheTtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IEBkZWxheTtcbn1cblxuLmFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQoQGl0ZXJhdGlvbi1jb3VudCkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IEBpdGVyYXRpb24tY291bnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogQGl0ZXJhdGlvbi1jb3VudDtcbn1cblxuLmFuaW1hdGlvbi1kaXJlY3Rpb24oQGRpcmVjdGlvbikge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IEBkaXJlY3Rpb247XG4gICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogQGRpcmVjdGlvbjtcbn1cblxuLmFuaW1hdGlvbi1maWxsLW1vZGUoQGZpbGwtbW9kZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IEBmaWxsLW1vZGU7XG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogQGZpbGwtbW9kZTtcbn1cblxuLy8gQmFja2ZhY2UgdmlzaWJpbGl0eVxuLy8gUHJldmVudCBicm93c2VycyBmcm9tIGZsaWNrZXJpbmcgd2hlbiB1c2luZyBDU1MgM0QgdHJhbnNmb3Jtcy5cbi8vIERlZmF1bHQgdmFsdWUgaXMgYHZpc2libGVgLCBidXQgY2FuIGJlIGNoYW5nZWQgdG8gYGhpZGRlbmBcblxuLmJhY2tmYWNlLXZpc2liaWxpdHkoQHZpc2liaWxpdHkpe1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xuICAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IEB2aXNpYmlsaXR5O1xufVxuXG4vLyBCb3ggc2l6aW5nXG4uYm94LXNpemluZyhAYm94bW9kZWwpIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBAYm94bW9kZWw7XG4gICAgIC1tb3otYm94LXNpemluZzogQGJveG1vZGVsO1xuICAgICAgICAgIGJveC1zaXppbmc6IEBib3htb2RlbDtcbn1cblxuLy8gQ1NTMyBDb250ZW50IENvbHVtbnNcbi5jb250ZW50LWNvbHVtbnMoQGNvbHVtbi1jb3VudDsgQGNvbHVtbi1nYXA6IEBncmlkLWd1dHRlci13aWR0aCkge1xuICAtd2Via2l0LWNvbHVtbi1jb3VudDogQGNvbHVtbi1jb3VudDtcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6IEBjb2x1bW4tY291bnQ7XG4gICAgICAgICAgY29sdW1uLWNvdW50OiBAY29sdW1uLWNvdW50O1xuICAtd2Via2l0LWNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xuICAgICAtbW96LWNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xuICAgICAgICAgIGNvbHVtbi1nYXA6IEBjb2x1bW4tZ2FwO1xufVxuXG4vLyBPcHRpb25hbCBoeXBoZW5hdGlvblxuLmh5cGhlbnMoQG1vZGU6IGF1dG8pIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtd2Via2l0LWh5cGhlbnM6IEBtb2RlO1xuICAgICAtbW96LWh5cGhlbnM6IEBtb2RlO1xuICAgICAgLW1zLWh5cGhlbnM6IEBtb2RlOyAvLyBJRTEwK1xuICAgICAgIC1vLWh5cGhlbnM6IEBtb2RlO1xuICAgICAgICAgIGh5cGhlbnM6IEBtb2RlO1xufVxuXG4vLyBQbGFjZWhvbGRlciB0ZXh0XG4ucGxhY2Vob2xkZXIoQGNvbG9yOiBAaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIsIEBmb250V2VpZ2h0OiBAbnVpLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpIHtcbiAgLy8gRmlyZWZveFxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTtcbiAgICBvcGFjaXR5OiAxOyAvLyBPdmVycmlkZSBGaXJlZm94J3MgdW51c3VhbCBkZWZhdWx0IG9wYWNpdHk7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMTUyNlxuICAgIGZvbnQtd2VpZ2h0OiBAZm9udFdlaWdodDtcbiAgfVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC5zZXRDc3NWYXJpYWJsZShjb2xvciwgaW5wdXQtY29sb3ItcGxhY2Vob2xkZXIpOyBmb250LXdlaWdodDogQGZvbnRXZWlnaHQgfSAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAgeyAuc2V0Q3NzVmFyaWFibGUoY29sb3IsIGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyKTsgZm9udC13ZWlnaHQ6IEBmb250V2VpZ2h0IH0gLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuLy8gVHJhbnNmb3JtYXRpb25zXG4uc2NhbGUoQGZhY3Rvcikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKEBmYWN0b3IpO1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoQGZhY3Rvcik7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShAZmFjdG9yKTtcbn1cblxuLnNjYWxlKEByYXRpb1g7IEByYXRpb1kpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZShAcmF0aW9YLCBAcmF0aW9ZKTsgLy8gSUU5IG9ubHlcbiAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKEByYXRpb1gsIEByYXRpb1kpO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoQHJhdGlvWCwgQHJhdGlvWSk7XG59XG5cbi5zY2FsZVgoQHJhdGlvKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGVYKEByYXRpbyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoQHJhdGlvKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWChAcmF0aW8pO1xufVxuXG4uc2NhbGVZKEByYXRpbykge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWShAcmF0aW8pOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGVZKEByYXRpbyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoQHJhdGlvKTtcbn1cblxuLnNrZXcoQHg7IEB5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WChAeCkgc2tld1koQHkpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvNDg4NTsgSUU5K1xuICAgICAgIC1vLXRyYW5zZm9ybTogc2tld1goQHgpIHNrZXdZKEB5KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKEB4KSBza2V3WShAeSk7XG59XG5cbi50cmFuc2xhdGUoQHg7IEB5KSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZShAeCwgQHkpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKEB4LCBAeSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoQHgsIEB5KTtcbn1cblxuLnRyYW5zbGF0ZTNkKEB4OyBAeTsgQHopIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKEB4LCBAeSwgQHopO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoQHgsIEB5LCBAeik7XG59XG5cbi5yb3RhdGUoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShAZGVncmVlcyk7XG59XG5cbi5yb3RhdGVYKEBkZWdyZWVzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoQGRlZ3JlZXMpOyAvLyBJRTkgb25seVxuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWChAZGVncmVlcyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKEBkZWdyZWVzKTtcbn1cblxuLnJvdGF0ZVkoQGRlZ3JlZXMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWShAZGVncmVlcyk7IC8vIElFOSBvbmx5XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKEBkZWdyZWVzKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoQGRlZ3JlZXMpO1xufVxuXG4ucGVyc3BlY3RpdmUoQHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IEBwZXJzcGVjdGl2ZTtcbiAgICAgLW1vei1wZXJzcGVjdGl2ZTogQHBlcnNwZWN0aXZlO1xuICAgICAgICAgIHBlcnNwZWN0aXZlOiBAcGVyc3BlY3RpdmU7XG59XG5cbi5wZXJzcGVjdGl2ZS1vcmlnaW4oQHBlcnNwZWN0aXZlKSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG4gICAgIC1tb3otcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG4gICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBAcGVyc3BlY3RpdmU7XG59XG5cbi50cmFuc2Zvcm0tb3JpZ2luKEBvcmlnaW4pIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IEBvcmlnaW47XG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogQG9yaWdpbjsgLy8gSUU5IG9ubHlcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBAb3JpZ2luO1xufVxuXG5cbi8vIFRyYW5zaXRpb25zXG5cbi50cmFuc2l0aW9uKEB0cmFuc2l0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgICAgLW8tdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbjogQHRyYW5zaXRpb247XG59XG5cbi50cmFuc2l0aW9uLXByb3BlcnR5KEB0cmFuc2l0aW9uLXByb3BlcnR5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHk7XG59XG5cbi50cmFuc2l0aW9uLWRlbGF5KEB0cmFuc2l0aW9uLWRlbGF5KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogQHRyYW5zaXRpb24tZGVsYXk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogQHRyYW5zaXRpb24tZGVsYXk7XG59XG5cbi50cmFuc2l0aW9uLWR1cmF0aW9uKEB0cmFuc2l0aW9uLWR1cmF0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb247XG59XG5cbi50cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbihAdGltaW5nLWZ1bmN0aW9uKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0aW1pbmctZnVuY3Rpb247XG59XG5cbi50cmFuc2l0aW9uLXRyYW5zZm9ybShAdHJhbnNpdGlvbikge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIEB0cmFuc2l0aW9uO1xuICAgICAgIC1vLXRyYW5zaXRpb246IC1vLXRyYW5zZm9ybSBAdHJhbnNpdGlvbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gQHRyYW5zaXRpb247XG59XG5cblxuLy8gVXNlciBzZWxlY3Rcbi8vIEZvciBzZWxlY3RpbmcgdGV4dCBvbiB0aGUgcGFnZVxuXG4udXNlci1zZWxlY3QoQHNlbGVjdCkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBAc2VsZWN0O1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBAc2VsZWN0O1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBAc2VsZWN0OyAvLyBJRTEwK1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBAc2VsZWN0O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "Ok0I":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-basic/dnd-basic.example.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"draggable-item\" cdkDrag>\n    I can be dragged from anywhere\n</div>\n");

/***/ }),

/***/ "QQYb":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-axis-constraints/dnd-axis-constraints.example.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"draggable-item mr-5\" cdkDragLockAxis=\"y\" cdkDrag>\n    I can only be dragged up/down\n</div>\n<div class=\"draggable-item mr-5\" cdkDragLockAxis=\"x\" cdkDrag>\n    I can only be dragged left/right\n</div>\n");

/***/ }),

/***/ "RuxN":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-drag-disabled/dnd-drag-disabled-example.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropList class=\"draggable-container\" (cdkDropListDropped)=\"onItemDropped($event)\">\n    <div *ngFor=\"let item of listItems\"  class=\"draggable-item\"\n         cdkDrag [cdkDragDisabled]=\"!item.enabled\"\n         cdkDragPreviewClass=\"dnd-drag-preview\">\n        {{item.title}} - {{ translatedStatus(item.enabled) }}\n    </div>\n</div>\n");

/***/ }),

/***/ "Vw9Z":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone/dnd-dropzone.example.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CdkDragDrop, CdkDropList, copyArrayItem} from \"@angular/cdk/drag-drop\";\nimport {ChangeDetectionStrategy, Component} from \"@angular/core\";\n\n@Component({\n    selector: \"dnd-dropzone\",\n    templateUrl: \"./dnd-dropzone.example.component.html\",\n    styleUrls: [\"./dnd-dropzone.example.component.less\"],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class DndDropzoneExampleComponent {\n    public sourceItems: string[] = [\"Adobe\", \"IBM\" ];\n    public destinationItems: string[] = [\"Dell\"];\n\n    // prevent user from putting back already displaced items\n    public sourceAcceptsItem(item: string, dropList?: CdkDropList): boolean {\n        return false;\n    }\n\n    public destinationAcceptsItem(item: string, dropList?: CdkDropList): boolean {\n        return item === \"Adobe\" || item === \"Dell\";\n    }\n\n    public onItemDropped(event: CdkDragDrop<string[]>) {\n        if (!this.destinationAcceptsItem(event.item.data)) {\n            return;\n        }\n\n        copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);\n    }\n}\n");

/***/ }),

/***/ "bq4q":
/*!*********************************************************************************!*\
  !*** ./demo/src/components/demo/external-libraries/drag-and-drop/dnd.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DndModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndModule", function() { return DndModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _dnd_axis_constraints_dnd_axis_constraints_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dnd-axis-constraints/dnd-axis-constraints.example.component */ "i6b3");
/* harmony import */ var _dnd_basic_dnd_basic_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dnd-basic/dnd-basic.example.component */ "Dqz+");
/* harmony import */ var _dnd_custom_handle_dnd_custom_handle_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dnd-custom-handle/dnd-custom-handle.example.component */ "b8uh");
/* harmony import */ var _dnd_docs_dnd_docs_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dnd-docs/dnd-docs.example.component */ "b35a");
/* harmony import */ var _dnd_drag_disabled_dnd_drag_disabled_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dnd-drag-disabled/dnd-drag-disabled-example.component */ "Xuqq");
/* harmony import */ var _dnd_drag_placeholder_dnd_drag_placeholder_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dnd-drag-placeholder/dnd-drag-placeholder-example.component */ "zaTN");
/* harmony import */ var _dnd_drag_preview_dnd_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dnd-drag-preview/dnd-drag-preview.example.component */ "pCZ6");
/* harmony import */ var _dnd_dropzone_visual_dnd_dropzone_visual_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dnd-dropzone-visual/dnd-dropzone-visual-example.component */ "O0gW");
/* harmony import */ var _dnd_dropzone_dnd_dropzone_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dnd-dropzone/dnd-dropzone.example.component */ "CHVl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _dnd_docs_dnd_docs_example_component__WEBPACK_IMPORTED_MODULE_7__["DndDocsExampleComponent"],
            },
            {
                path: "dropzone",
                component: _dnd_dropzone_dnd_dropzone_example_component__WEBPACK_IMPORTED_MODULE_12__["DndDropzoneExampleComponent"],
            },
            {
                path: "dropzone-visual",
                component: _dnd_dropzone_dnd_dropzone_example_component__WEBPACK_IMPORTED_MODULE_12__["DndDropzoneExampleComponent"],
            },
        ],
    },
];
class DndModule {
}
DndModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: DndModule });
DndModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function DndModule_Factory(t) { return new (t || DndModule)(); }, providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("8cFS"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDndModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](DndModule, { declarations: [_dnd_basic_dnd_basic_example_component__WEBPACK_IMPORTED_MODULE_5__["DndBasicExampleComponent"],
        _dnd_custom_handle_dnd_custom_handle_example_component__WEBPACK_IMPORTED_MODULE_6__["DndCustomHandleExampleComponent"],
        _dnd_drag_disabled_dnd_drag_disabled_example_component__WEBPACK_IMPORTED_MODULE_8__["DndDragDisabledExampleComponent"],
        _dnd_drag_placeholder_dnd_drag_placeholder_example_component__WEBPACK_IMPORTED_MODULE_9__["DndDragPlaceholderExampleComponent"],
        _dnd_drag_preview_dnd_drag_preview_example_component__WEBPACK_IMPORTED_MODULE_10__["DndDragPreviewExampleComponent"],
        _dnd_docs_dnd_docs_example_component__WEBPACK_IMPORTED_MODULE_7__["DndDocsExampleComponent"],
        _dnd_dropzone_dnd_dropzone_example_component__WEBPACK_IMPORTED_MODULE_12__["DndDropzoneExampleComponent"],
        _dnd_dropzone_visual_dnd_dropzone_visual_example_component__WEBPACK_IMPORTED_MODULE_11__["DndDropzoneVisualExampleComponent"],
        _dnd_axis_constraints_dnd_axis_constraints_example_component__WEBPACK_IMPORTED_MODULE_4__["DndAxisConstraintsExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiDndModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_3__["NuiMessageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeModule"]] }); })();


/***/ }),

/***/ "d+0M":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone/dnd-dropzone.example.component.less ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@min-height: 50px;\n\n.draggable-container {\n    width: 50%;\n    float: left;\n    min-height: (@min-height * 5);\n\n    .draggable-list {\n        border: solid @dnd-zone-border-width transparent;\n        position: relative;\n        padding: @nui-space-sm;\n        transition: all .3s ease-in-out;\n\n        .title {\n            position: absolute;\n        }\n        &.cdk-drop-list-dragging, &.cdk-drop-list-receiving {\n            .draggable-item:hover {\n                box-shadow: none;\n                background-color: initial;\n            }\n        }\n    }\n}\n\n.dragzone {\n    .cdk-drop-list-dragging .draggable-item:not(.cdk-drag-placeholder) {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n}\n\n.dropzone {\n    margin: 10px 0;\n    min-height: (2 * (@min-height + @nui-space-md + @dnd-zone-border-width));\n\n    .cdk-drag-placeholder, .draggable-placeholder {\n        visibility: hidden;\n        min-height: @min-height - @dnd-zone-border-width;\n    }\n}\n\n.item, .draggable-item, .draggable-placeholder {\n    min-height: @min-height + @dnd-item-border-width;\n    padding: @nui-space-md;\n    box-sizing: border-box;\n    text-align: center;\n    border: @dnd-item-border-width @nui-color-line-default solid;\n    .transition(box-shadow 0.4s);\n}\n\n.item, .draggable-item {\n    border-bottom-color: transparent;\n\n    &.cdk-drag:hover:not(.cdk-drag-placeholder) {\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n        cursor: move;\n        padding: @nui-space-md;\n    }\n}\n&.items-container :last-child { border-bottom-color: @nui-color-line-default;}\n\n.centered-overlay .text-special {\n    top: -25px;\n}\n\n// This class is added to a cdkDrag element when the user has stopped dragging.\n// CDK will animate the element from its drop position to the final position inside the cdkDropList container\n.cdk-drag-animating {\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n");

/***/ }),

/***/ "fFVE":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { DragDropModule } from \"@angular/cdk/drag-drop\";\nimport { CdkTreeModule } from \"@angular/cdk/tree\";\nimport { NgModule } from \"@angular/core\";\nimport { RouterModule, Routes } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiDndModule, NuiDocsModule, NuiMessageModule } from \"@nova-ui/bits\";\n\nimport { DndAxisConstraintsExampleComponent } from \"./dnd-axis-constraints/dnd-axis-constraints.example.component\";\nimport { DndBasicExampleComponent } from \"./dnd-basic/dnd-basic.example.component\";\nimport { DndCustomHandleExampleComponent } from \"./dnd-custom-handle/dnd-custom-handle.example.component\";\nimport { DndDocsExampleComponent } from \"./dnd-docs/dnd-docs.example.component\";\nimport { DndDragDisabledExampleComponent } from \"./dnd-drag-disabled/dnd-drag-disabled-example.component\";\nimport { DndDragPlaceholderExampleComponent } from \"./dnd-drag-placeholder/dnd-drag-placeholder-example.component\";\nimport { DndDragPreviewExampleComponent } from \"./dnd-drag-preview/dnd-drag-preview.example.component\";\nimport { DndDropzoneVisualExampleComponent } from \"./dnd-dropzone-visual/dnd-dropzone-visual-example.component\";\nimport { DndDropzoneExampleComponent } from \"./dnd-dropzone/dnd-dropzone.example.component\";\n\nconst routes: Routes = [\n    {\n        path: \"\",\n        children: [\n            {\n                path: \"\",\n                component: DndDocsExampleComponent,\n            },\n            {\n                path: \"dropzone\",\n                component: DndDropzoneExampleComponent,\n            },\n            {\n                path: \"dropzone-visual\",\n                component: DndDropzoneExampleComponent,\n            },\n        ],\n    },\n];\n\n@NgModule({\n    declarations: [\n        DndBasicExampleComponent,\n        DndCustomHandleExampleComponent,\n        DndDragDisabledExampleComponent,\n        DndDragPlaceholderExampleComponent,\n        DndDragPreviewExampleComponent,\n        DndDocsExampleComponent,\n        DndDropzoneExampleComponent,\n        DndDropzoneVisualExampleComponent,\n        DndAxisConstraintsExampleComponent,\n    ],\n    imports: [\n        NuiDocsModule,\n        NuiDndModule,\n        NuiMessageModule,\n        RouterModule.forChild(routes),\n        DragDropModule,\n        CdkTreeModule,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n})\nexport class DndModule {\n}\n");

/***/ }),

/***/ "g0Vd":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-axis-constraints/dnd-axis-constraints.example.component.less ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import (reference) \"nui-framework-variables\";\n@import (reference) \"mixins\";\n\n@box-width: 150px;\n@box-height: 100px;\n\n.draggable-item {\n    width: @box-width;\n    height: @box-height;\n    padding: @nui-space-md;\n    box-sizing: border-box;\n    border: solid 1px @gray;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    z-index: 1;\n    .transition(box-shadow 0.4s);\n\n    &:hover, &.cdk-drag-dragging {\n        .nui-dnd-hover-state();\n        .nui-dnd-raised-state();\n        cursor: move;\n        padding: @nui-space-md;\n    }\n}\n");

/***/ }),

/***/ "kPgN":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-custom-handle/dnd-custom-handle.example.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {CdkDragDrop, moveItemInArray} from \"@angular/cdk/drag-drop\";\nimport { Component} from \"@angular/core\";\n\nclass IListItem {\n    title: string;\n    enabled?: boolean;\n    hasHandle?: boolean;\n}\n\n@Component({\n  selector: \"dnd-custom-handle\",\n  templateUrl: \"./dnd-custom-handle.example.component.html\",\n  styleUrls: [\"./dnd-custom-handle.example.component.less\"],\n})\nexport class DndCustomHandleExampleComponent {\n    public mousedOver: boolean[] = [];\n    public listItems: IListItem[] = [\n        {\n            title: \"I can only be dragged using the handle\",\n            enabled: true,\n            hasHandle: true,\n        },\n        {\n            title: \" I can be dragged without any handle\",\n            enabled: true,\n            hasHandle: false,\n        },\n        {\n            title: \"Disabled item CAN'T be dragged\",\n            enabled: false,\n        },\n    ];\n\n    public onItemDropped(event: CdkDragDrop<IListItem[]>) {\n        moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);\n    }\n}\n");

/***/ }),

/***/ "rOYC":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-custom-handle/dnd-custom-handle.example.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- list of draggable items  -->\n<div cdkDropList class=\"draggable-container\" (cdkDropListDropped)=\"onItemDropped($event)\">\n    <ng-container *ngFor=\"let item of listItems; let i=index\">\n        <div cdkDrag\n             cdkDragPreviewClass=\"dnd-drag-preview\"\n             [cdkDragDisabled]=\"!item.enabled\"\n             class=\"draggable-item\"\n             [ngClass] = \"{\n                'with-handle': item.hasHandle,\n                'nui-dnd-raised-state': item.withHandle && mousedOver[i]\n            }\">\n\n            <!-- raised state style is applied ONLY when the mouse is over the handle -->\n            <div *ngIf=\"item.withHandle\" cdkDragHandle class=\"drag-handle\" (mouseover)=\"mousedOver[i]=true\" (mouseout)=\"mousedOver[i]=false\">\n                <nui-icon icon=\"drag\"></nui-icon>\n            </div>\n            {{item.title}}\n        </div>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "wL1P":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/external-libraries/drag-and-drop/dnd-dropzone/dnd-dropzone.example.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div cdkDropListGroup>\n    <!-- source from where the items will be dragged -->\n    <div class=\"draggable-container pr-2\" id=\"nui-demo-drop-list-1\">\n        <h3>Source</h3>\n        <div cdkDropList class=\"dragzone draggable-list\"\n             [cdkDropListData]=\"sourceItems\"\n             [cdkDropListSortingDisabled]=\"true\"\n             [cdkDropListEnterPredicate]=\"sourceAcceptsItem\">\n\n            <!-- display list of items -->\n            <div class=\"items-container\">\n                <div *ngFor=\"let item of sourceItems\" class=\"draggable-item\"\n                     cdkDrag [cdkDragData]=\"item\"\n                     cdkDragPreviewClass=\"nui-dnd-preview\">\n                    {{item}}\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- destination dropzone where the items will be dropped -->\n    <div class=\"draggable-container pl-2\"  id=\"nui-demo-drop-list-2\">\n        <h3>Destination</h3>\n        <div cdkDropList class=\"dropzone draggable-list\"\n             nuiDndDropTarget\n             #destinationTarget=nuiDndDropTarget\n             [cdkDropListData]=\"destinationItems\"\n             [canBeDropped]=\"destinationAcceptsItem\"\n             (cdkDropListDropped)=\"onItemDropped($event)\">\n\n            <!-- display list of items -->\n            <div class=\"items-container\">\n                <!-- make items invisible while a drag operation is in progress and dropzone is active-->\n                <div *ngFor=\"let item of destinationItems\" class=\"item\"\n                     [class.invisible]=\"destinationTarget.isDropZoneActive\">\n                    {{item}}\n                </div>\n            </div>\n\n            <!-- highlight dropzone area -->\n            <ng-container *ngTemplateOutlet=\"highlightDropzoneTemplate; context: {target: destinationTarget}\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<!-- template to highlight a dropzone and inform user about the drag operation outcome (accept item or not) -->\n<ng-template #highlightDropzoneTemplate let-target=\"target\">\n    <div *ngIf=\"target.isDropZoneActive\" class=\"centered-overlay text-center\">\n\n        <!-- default state, highlight item placeholder when dragging starts -->\n        <div *ngIf=\"(target.showDropZone$ | async) !== true\">\n            <!-- This is a drop zone area where you can drag your items -->\n            <nui-icon icon=\"plus\" iconSize=\"medium\" cssClass=\"drop-circle-permanent\"></nui-icon>\n        </div>\n\n        <!-- accepted item placeholder -->\n        <div *ngIf=\"(target.canLastDragItemBeDropped$ | async)\">\n            <!-- The item currently dragged is accepted in this dropzone -->\n            <nui-icon icon=\"plus\" iconSize=\"medium\" cssClass=\"drop-circle-allowed\"></nui-icon>\n        </div>\n\n        <!-- reject item placeholder-->\n        <div *ngIf=\"(target.canLastDragItemBeDropped$ | async) === false\">\n            <!-- The item currently dragged is NOT accepted in this dropzone -->\n            <div class=\"centered-overlay text-nowrap text-special\" i18n>Not allowed</div>\n            <nui-icon icon=\"close\" iconSize=\"medium\" cssClass=\"drop-circle-not-allowed\"></nui-icon>\n        </div>\n    </div>\n</ng-template>\n");

/***/ })

}]);
//# sourceMappingURL=drag-and-drop-dnd-module-es2015.js.map