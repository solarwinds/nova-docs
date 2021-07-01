(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-dragdrop-cdk-dragdrop-module"],{

/***/ "5JPP":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop-cdk/dragdrop.example.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"drag-section\">\n    <nui-draggable [payload]=\"draggableObj\"\n                   [dropTarget]=\"droppable\"\n                   (dragStart)=\"onDragStart($event)\"\n                   (dragEnd)=\"onDragEnd($event)\"\n                   i18n>\n        <div class=\"drag\">drag me</div>\n    </nui-draggable>\n    <pre>{{draggableObj | json}}</pre>\n\n    <nui-draggable [payload]=\"draggableObjHandle\"\n                   [dropTarget]=\"droppable\"\n                   [dragHandle]=\"true\"\n                   (dragStart)=\"onDragStart($event)\"\n                   (dragEnd)=\"onDragEnd($event)\"\n                   i18n>\n        <div class=\"drag\">drag me (handle)</div>\n    </nui-draggable>\n    <pre>{{draggableObjHandle | json}}</pre>\n\n    <nui-draggable [payload]=\"draggableObjPreview\"\n                   [dragPreview]=\"dragPreview\"\n                   [dropTarget]=\"droppable\"\n                   (dragStart)=\"onDragStart($event)\"\n                   (dragEnd)=\"onDragEnd($event)\"\n                   i18n>\n        <div class=\"drag drag-with-preview\">drag me (preview)</div>\n    </nui-draggable>\n    <pre>{{draggableObjPreview | json}}</pre>\n\n    <nui-draggable *ngFor=\"let item of draggableList\"\n                   [payload]=\"item\"\n                   [dropTarget]=\"droppable\"\n                   (dragStart)=\"onDragStart($event)\"\n                   (dragEnd)=\"onDragEnd($event)\"\n                   i18n>\n        <div class=\"drag\">drag me ({{item}})</div>\n    </nui-draggable>\n</section>\n\n\n<section class=\"drop-section\">\n    <nui-droppable #droppable\n                   (dropSuccess)=\"onDrop($event)\"\n                   (dragOver)=\"onDragOver($event)\"\n                   (dragEnter)=\"onDragEnter($event)\"\n                   (dragLeave)=\"onDragLeave($event)\"\n                   i18n>\n        <div class=\"drop\">drop here</div>\n    </nui-droppable>\n    <pre>{{destObject | json}}</pre>\n</section>\n\n<ng-template #dragPreview>\n    <pre>\n         _,(_)._\n    ___,(_______).\n  ,'__.           \\    /\\_\n /,' /             \\  /  /\n| | |              |,'  /\n \\`.|                  /\n  `. :           :    /\n    `.            :.,'\n      `-.________,-'</pre>\n</ng-template>\n");

/***/ }),

/***/ "B1wB":
/*!*****************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop-cdk/dragdrop.example.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DragdropExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragdropExampleComponent", function() { return DragdropExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _src_lib_dragdrop_draggable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/lib/dragdrop/draggable.component */ "Jqsq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _src_lib_dragdrop_droppable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/lib/dragdrop/droppable.component */ "mcf4");




function DragdropExampleComponent_nui_draggable_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nui-draggable", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragStart", function DragdropExampleComponent_nui_draggable_19_Template_nui_draggable_dragStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDragStart($event); })("dragEnd", function DragdropExampleComponent_nui_draggable_19_Template_nui_draggable_dragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onDragEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", item_r4)("dropTarget", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
function DragdropExampleComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "         _,(_)._\n    ___,(_______).\n  ,'__.           \\    /\\_\n /,' /             \\  /  /\n| | |              |,'  /\n \\`.|                  /\n  `. :           :    /\n    `.            :.,'\n      `-.________,-'");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DragdropExampleComponent {
    constructor() {
        this.draggableObj = {
            imma: "little",
            teapot: "short and stout",
        };
        this.draggableObjHandle = {
            "here is my handle": "here is my spout",
        };
        this.draggableObjPreview = {
            when: "I get all steamed up",
            hear: "me shout",
        };
        this.draggableList = [
            "item 1", "item2", "item3",
        ];
    }
    onDrop(payload) {
        this.destObject = payload;
    }
    onDragStart(event) {
    }
    onDragEnd(event) {
    }
    onDragOver(event) {
    }
    onDragEnter(event) {
    }
    onDragLeave(event) {
    }
}
DragdropExampleComponent.ɵfac = function DragdropExampleComponent_Factory(t) { return new (t || DragdropExampleComponent)(); };
DragdropExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DragdropExampleComponent, selectors: [["nui-dd-cdk-example"]], decls: 30, vars: 21, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8366983348853355936$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_1 = goog.getMsg("{$startTagDiv}drag me{$closeTagDiv}", { "startTagDiv": "\uFFFD#3\uFFFD", "closeTagDiv": "\uFFFD/#3\uFFFD" });
        i18n_0 = MSG_EXTERNAL_8366983348853355936$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟089f141961d8beef1ea541d772a961a67b1132a6␟8366983348853355936:${"\uFFFD#3\uFFFD"}:START_TAG_DIV:drag me${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_DIV:`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_902450476813665059$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_3 = goog.getMsg("{$startTagDiv}drag me (handle){$closeTagDiv}", { "startTagDiv": "\uFFFD#9\uFFFD", "closeTagDiv": "\uFFFD/#9\uFFFD" });
        i18n_2 = MSG_EXTERNAL_902450476813665059$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟e00af2f627aaec2bb73a8bef702c8340bf400e1a␟902450476813665059:${"\uFFFD#9\uFFFD"}:START_TAG_DIV:drag me (handle)${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_DIV:`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_834732528777960272$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_5 = goog.getMsg("{$startTagDiv}drag me (preview){$closeTagDiv}", { "startTagDiv": "\uFFFD#15\uFFFD", "closeTagDiv": "\uFFFD/#15\uFFFD" });
        i18n_4 = MSG_EXTERNAL_834732528777960272$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟32ee4357003d89117a5fbb041f5e377168e9d988␟834732528777960272:${"\uFFFD#15\uFFFD"}:START_TAG_DIV:drag me (preview)${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_DIV:`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_753075891802667689$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_7 = goog.getMsg("{$startTagDiv}drop here{$closeTagDiv}", { "startTagDiv": "\uFFFD#24\uFFFD", "closeTagDiv": "\uFFFD/#24\uFFFD" });
        i18n_6 = MSG_EXTERNAL_753075891802667689$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟e71c0034164d7e962dba14f45b52dedd0b31d9bf␟753075891802667689:${"\uFFFD#24\uFFFD"}:START_TAG_DIV:drop here${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DIV:`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5524917595467025513$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS__9 = goog.getMsg("{$startTagDiv}drag me ({$interpolation}){$closeTagDiv}", { "startTagDiv": "\uFFFD#2\uFFFD", "interpolation": "\uFFFD0\uFFFD", "closeTagDiv": "\uFFFD/#2\uFFFD" });
        i18n_8 = MSG_EXTERNAL_5524917595467025513$$DEMO_SRC_COMPONENTS_DEMO_DRAGDROP_CDK_DRAGDROP_EXAMPLE_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:␟bdc89c12c42208107f33db7d71ed217cf714dacc␟5524917595467025513:${"\uFFFD#2\uFFFD"}:START_TAG_DIV:drag me (${"\uFFFD0\uFFFD"}:INTERPOLATION:)${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DIV:`;
    } return [[1, "drag-section"], [3, "payload", "dropTarget", "dragStart", "dragEnd"], i18n_0, [1, "drag"], [3, "payload", "dropTarget", "dragHandle", "dragStart", "dragEnd"], i18n_2, [3, "payload", "dragPreview", "dropTarget", "dragStart", "dragEnd"], i18n_4, [1, "drag", "drag-with-preview"], [3, "payload", "dropTarget", "dragStart", "dragEnd", 4, "ngFor", "ngForOf"], [1, "drop-section"], [3, "dropSuccess", "dragOver", "dragEnter", "dragLeave"], ["droppable", ""], i18n_6, [1, "drop"], ["dragPreview", ""], i18n_8]; }, template: function DragdropExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nui-draggable", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragStart", function DragdropExampleComponent_Template_nui_draggable_dragStart_1_listener($event) { return ctx.onDragStart($event); })("dragEnd", function DragdropExampleComponent_Template_nui_draggable_dragEnd_1_listener($event) { return ctx.onDragEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nui-draggable", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragStart", function DragdropExampleComponent_Template_nui_draggable_dragStart_7_listener($event) { return ctx.onDragStart($event); })("dragEnd", function DragdropExampleComponent_Template_nui_draggable_dragEnd_7_listener($event) { return ctx.onDragEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nui-draggable", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragStart", function DragdropExampleComponent_Template_nui_draggable_dragStart_13_listener($event) { return ctx.onDragStart($event); })("dragEnd", function DragdropExampleComponent_Template_nui_draggable_dragEnd_13_listener($event) { return ctx.onDragEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DragdropExampleComponent_nui_draggable_19_Template, 3, 3, "nui-draggable", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nui-droppable", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropSuccess", function DragdropExampleComponent_Template_nui_droppable_dropSuccess_21_listener($event) { return ctx.onDrop($event); })("dragOver", function DragdropExampleComponent_Template_nui_droppable_dragOver_21_listener($event) { return ctx.onDragOver($event); })("dragEnter", function DragdropExampleComponent_Template_nui_droppable_dragEnter_21_listener($event) { return ctx.onDragEnter($event); })("dragLeave", function DragdropExampleComponent_Template_nui_droppable_dragLeave_21_listener($event) { return ctx.onDragLeave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DragdropExampleComponent_ng_template_28_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.draggableObj)("dropTarget", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, ctx.draggableObj));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.draggableObjHandle)("dropTarget", _r1)("dragHandle", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, ctx.draggableObjHandle));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.draggableObjPreview)("dragPreview", _r2)("dropTarget", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 17, ctx.draggableObjPreview));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.draggableList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 19, ctx.destObject));
    } }, directives: [_src_lib_dragdrop_draggable_component__WEBPACK_IMPORTED_MODULE_1__["DraggableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _src_lib_dragdrop_droppable_component__WEBPACK_IMPORTED_MODULE_3__["DroppableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: ["section[_ngcontent-%COMP%] {\n  display: inline-grid;\n  margin: 20px;\n}\n.drop-section[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.drag[_ngcontent-%COMP%] {\n  border: 1px dotted black;\n  padding: 10px;\n}\n.drag-with-preview[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.drop[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWdkcm9wLmV4YW1wbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtBQUFKO0FBRUE7RUFDSSx3QkFBQTtFQUNBLGFBQUE7QUFBSjtBQUVBO0VBQ0ksYUFBQTtBQUFKO0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJkcmFnZHJvcC5leGFtcGxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZHJvcC1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uZHJhZyB7XG4gICAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uZHJhZy13aXRoLXByZXZpZXcge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4uZHJvcCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "CGMW":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop-cdk/dragdrop.example.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { Component } from \"@angular/core\";\n\n@Component({\n    selector: \"nui-dd-cdk-example\",\n    templateUrl: \"./dragdrop.example.component.html\",\n    styleUrls: [\"./dragdrop.example.component.less\"],\n})\nexport class DragdropExampleComponent {\n    public draggableObj = {\n        imma: \"little\",\n        teapot: \"short and stout\",\n    };\n    public draggableObjHandle = {\n        \"here is my handle\": \"here is my spout\",\n    };\n    public draggableObjPreview = {\n        when: \"I get all steamed up\",\n        hear: \"me shout\",\n    };\n    public draggableList = [\n        \"item 1\", \"item2\", \"item3\",\n    ];\n    public destObject: {};\n\n    public onDrop(payload: any) {\n        this.destObject = payload;\n    }\n\n    public onDragStart(event: DragEvent) {\n    }\n\n    public onDragEnd(event: DragEvent) {\n    }\n\n    public onDragOver(event: DragEvent) {\n    }\n\n    public onDragEnter(event: DragEvent) {\n    }\n\n    public onDragLeave(event: DragEvent) {\n    }\n}\n");

/***/ }),

/***/ "FCZw":
/*!*********************************************!*\
  !*** ./src/lib/dragdrop/dragdrop.module.ts ***!
  \*********************************************/
/*! exports provided: NuiDragDropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuiDragDropModule", function() { return NuiDragDropModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/common.module */ "7JYY");
/* harmony import */ var _draggable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable.component */ "Jqsq");
/* harmony import */ var _droppable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./droppable.component */ "mcf4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





/**
 * @ignore
 */
class NuiDragDropModule {
}
NuiDragDropModule.ɵfac = function NuiDragDropModule_Factory(t) { return new (t || NuiDragDropModule)(); };
NuiDragDropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NuiDragDropModule });
NuiDragDropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _common_common_module__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NuiDragDropModule, { declarations: [_draggable_component__WEBPACK_IMPORTED_MODULE_2__["DraggableComponent"],
        _droppable_component__WEBPACK_IMPORTED_MODULE_3__["DroppableComponent"]], imports: [_common_common_module__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]], exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        _draggable_component__WEBPACK_IMPORTED_MODULE_2__["DraggableComponent"],
        _droppable_component__WEBPACK_IMPORTED_MODULE_3__["DroppableComponent"]] }); })();


/***/ }),

/***/ "Jqsq":
/*!*************************************************!*\
  !*** ./src/lib/dragdrop/draggable.component.ts ***!
  \*************************************************/
/*! exports provided: DraggableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableComponent", function() { return DraggableComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _droppable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./droppable.component */ "mcf4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DraggableComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DraggableComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function DraggableComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DraggableComponent_ng_container_4_div_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.dragPreview);
} }
function DraggableComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DraggableComponent_ng_container_4_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = ["*"];
/**
 * @ignore
 */
class DraggableComponent {
    constructor() {
        this.dragHandle = false;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.dragElement.dropContainer = this.dropTarget.dropList;
    }
}
DraggableComponent.ɵfac = function DraggableComponent_Factory(t) { return new (t || DraggableComponent)(); };
DraggableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DraggableComponent, selectors: [["nui-draggable"]], viewQuery: function DraggableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dragElement = _t.first);
    } }, hostAttrs: ["aria-grabbed", "supported"], inputs: { payload: "payload", dropTarget: "dropTarget", dragHandle: "dragHandle", dragPreview: "dragPreview" }, outputs: { dragStart: "dragStart", dragEnd: "dragEnd" }, ngContentSelectors: _c1, decls: 5, vars: 8, consts: [["cdkDropList", "", 3, "cdkDropListConnectedTo"], ["cdkDrag", "", 3, "cdkDragData"], ["cdkDragHandle", "", "width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [4, "ngIf"], ["cdkDragHandle", "", "width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], [4, "cdkDragPreview"], [4, "ngTemplateOutlet"]], template: function DraggableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DraggableComponent__svg_svg_2_Template, 3, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DraggableComponent_ng_container_4_Template, 2, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.dropTarget.dropList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-drag-with-handle", ctx.dragHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragData", ctx.payload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dragHandle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dragPreview);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDragPreview"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], styles: [".cdk-drag[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: move;\n}\n.cdk-drag[_ngcontent-%COMP%]:hover {\n  background-color: var(--nui-color-bg-light-hover,#f2f2f2);\n  box-shadow: 0 0 5px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.cdk-drag-with-handle[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.cdk-drag-with-handle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  pointer-events: all;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  background-color: var(--nui-color-selected,rgba(0, 196, 210, 0.1));\n  position: relative;\n  pointer-events: none;\n  box-shadow: 0 0 5px 0 var(--nui-shadow-color, rgba(17, 17, 17, 0.3));\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 10%;\n  display: initial;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWdnYWJsZS5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9taXhpbnMvY3NzLXZhcmlhYmxlcy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBRkY7QUFHRTtFQ0RFLHlEQUFBO0VER0Esb0VBQUE7QUFESjtBQUtBO0VBQ0Usb0JBQUE7QUFIRjtBQUVBO0VBR0ksbUJBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUNyQkksa0VBQUE7RUR1QkYsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9FQUFBO0FBSkY7QUFBQTtFQU9JLFlBQUE7RUFDQSxnQkFBQTtBQUpKO0FBUUE7RUFDRSxhQUFBO0FBTkYiLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAocmVmZXJlbmNlKSBcIi4uLy4uL3N0eWxlcy9udWktZnJhbWV3b3JrLXZhcmlhYmxlcy5sZXNzXCI7XG5AaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vc3R5bGVzL21peGlucy5sZXNzXCI7XG5cbi5jZGstZHJhZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBtb3ZlO1xuICAmOmhvdmVye1xuICAgIC5zZXRDc3NWYXJpYWJsZShiYWNrZ3JvdW5kLWNvbG9yLCBudWktY29sb3ItYmctbGlnaHQtaG92ZXIpO1xuICAgIGJveC1zaGFkb3c6IEBudWktc2hhZG93LWRlZmF1bHQ7XG4gIH1cbn1cblxuLmNkay1kcmFnLXdpdGgtaGFuZGxlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHN2ZyB7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgfVxufVxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcge1xuICAuc2V0Q3NzVmFyaWFibGUoYmFja2dyb3VuZC1jb2xvciwgbnVpLWNvbG9yLXNlbGVjdGVkKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwb2ludGVyLWV2ZW50czpub25lO1xuICBib3gtc2hhZG93OiBAbnVpLXNoYWRvdy1kZWZhdWx0O1xuXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTAlO1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIi5zZXRDc3NWYXJpYWJsZShAcHJvcGVydHksIEB2YWx1ZSl7XG4gICAgQGV2YWx1YXRlZCA6IFwiQHt2YWx1ZX1cIjtcbiAgICAvL3RoZSBkb3VibGUgQCBmb3JjZXMgYSBpbmRpcmVjdGlvbiBldmFsdWF0aW9uLCBraW5kYSBsaWtlIGEgcG9pbnRlclxuICAgIEBmYWxsYmFjayA6IEBAZXZhbHVhdGVkO1xuXG4gICAgQHtwcm9wZXJ0eX06IH5cInZhcigtLUB7dmFsdWV9LEB7ZmFsbGJhY2t9KVwiO1xufVxuIl19 */"] });


/***/ }),

/***/ "NJXf":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop-cdk/dragdrop.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { NgModule } from \"@angular/core\";\nimport { RouterModule } from \"@angular/router\";\nimport { DEMO_PATH_TOKEN, NuiCommonModule, NuiDndModule, NuiDocsModule, SrlcStage } from \"@nova-ui/bits\";\n\nimport { NuiDragDropModule } from \"../../../../../src/lib/dragdrop/dragdrop.module\";\n\nimport { DragdropExampleComponent } from \"./dragdrop.example.component\";\n\nconst routes = [{\n    path: \"\",\n    component: DragdropExampleComponent,\n    data: {\n        \"srlc\": {\n            \"stage\": SrlcStage.preAlpha,\n        },\n    },\n}];\n\n@NgModule({\n    imports: [\n        NuiDocsModule,\n        NuiCommonModule,\n        NuiDndModule,\n        RouterModule.forChild(routes),\n        NuiDragDropModule,\n    ],\n    declarations: [\n        DragdropExampleComponent,\n    ],\n    providers: [\n        {\n            provide: DEMO_PATH_TOKEN,\n            useFactory: () => (<any>require).context(`!!raw-loader!./`, true, /.*\\.(ts|html|less)$/),\n        },\n    ],\n    exports: [\n        RouterModule,\n    ],\n})\nexport class DragDropCdkDemoModule {\n}\n");

/***/ }),

/***/ "QWOa":
/*!******************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop-cdk/dragdrop.module.ts ***!
  \******************************************************************/
/*! exports provided: DragDropCdkDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropCdkDemoModule", function() { return DragDropCdkDemoModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nova-ui/bits */ "b5Xb");
/* harmony import */ var _src_lib_dragdrop_dragdrop_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/lib/dragdrop/dragdrop.module */ "FCZw");
/* harmony import */ var _dragdrop_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dragdrop.example.component */ "B1wB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [{
        path: "",
        component: _dragdrop_example_component__WEBPACK_IMPORTED_MODULE_3__["DragdropExampleComponent"],
        data: {
            "srlc": {
                "stage": _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["SrlcStage"].preAlpha,
            },
        },
    }];
class DragDropCdkDemoModule {
}
DragDropCdkDemoModule.ɵfac = function DragDropCdkDemoModule_Factory(t) { return new (t || DragDropCdkDemoModule)(); };
DragDropCdkDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DragDropCdkDemoModule });
DragDropCdkDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["DEMO_PATH_TOKEN"],
            useFactory: () => __webpack_require__("ss9t"),
        },
    ], imports: [[
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"],
            _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDndModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _src_lib_dragdrop_dragdrop_module__WEBPACK_IMPORTED_MODULE_2__["NuiDragDropModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DragDropCdkDemoModule, { declarations: [_dragdrop_example_component__WEBPACK_IMPORTED_MODULE_3__["DragdropExampleComponent"]], imports: [_nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDocsModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiCommonModule"],
        _nova_ui_bits__WEBPACK_IMPORTED_MODULE_1__["NuiDndModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _src_lib_dragdrop_dragdrop_module__WEBPACK_IMPORTED_MODULE_2__["NuiDragDropModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "VjeB":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./demo/src/components/demo/dragdrop-cdk/dragdrop.example.component.less ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n    display: inline-grid;\n    margin: 20px;\n}\n\n.drop-section {\n    position: fixed;\n}\n.drag {\n    border: 1px dotted black;\n    padding: 10px;\n}\n.drag-with-preview {\n    height: 200px;\n}\n.drop {\n    width: 300px;\n    height: 300px;\n    line-height: 300px;\n    text-align: center;\n}\n");

/***/ }),

/***/ "mcf4":
/*!*************************************************!*\
  !*** ./src/lib/dragdrop/droppable.component.ts ***!
  \*************************************************/
/*! exports provided: DroppableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableComponent", function() { return DroppableComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




const _c0 = ["*"];
// import {DraggableComponent} from "./draggable.component";
/**
 * @ignore
 */
class DroppableComponent {
    constructor() {
        // @Input() dragSource: DraggableComponent;
        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onDrop(event) {
        if (event.container !== event.previousContainer) {
            this.dropSuccess.emit(event.item.data);
        }
    }
}
DroppableComponent.ɵfac = function DroppableComponent_Factory(t) { return new (t || DroppableComponent)(); };
DroppableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DroppableComponent, selectors: [["nui-droppable"]], viewQuery: function DroppableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropList = _t.first);
    } }, hostVars: 1, hostBindings: function DroppableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-dropeffect", ctx.move);
    } }, outputs: { dragOver: "dragOver", dragEnter: "dragEnter", dragLeave: "dragLeave", dropSuccess: "dropSuccess" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["cdkDropList", "", 3, "cdkDropListDropped"]], template: function DroppableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function DroppableComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.onDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"]], styles: [".cdk-drop-list[_ngcontent-%COMP%] {\n  border: 1px dotted black;\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  border: 5px solid rgba(0, 196, 210, 0.1);\n  background: rgba(0, 196, 210, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3BwYWJsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHdCQUFBO0FBRkY7QUFJQTtFQUNFLHdDQUFBO0VBQ0Esa0NBQUE7QUFGRiIsImZpbGUiOiJkcm9wcGFibGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IChyZWZlcmVuY2UpIFwiLi4vLi4vc3R5bGVzL251aS1mcmFtZXdvcmstdmFyaWFibGVzLmxlc3NcIjtcbkBpbXBvcnQgKHJlZmVyZW5jZSkgXCIuLi8uLi9zdHlsZXMvbWl4aW5zLmxlc3NcIjtcblxuLmNkay1kcm9wLWxpc3Qge1xuICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XG59XG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyB7XG4gIGJvcmRlcjogNXB4IHNvbGlkIEBudWktY29sb3Itc2VsZWN0ZWQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoQG51aS1jb2xvci1zZWxlY3RlZCwgLjMpO1xufVxuIl19 */"] });


/***/ }),

/***/ "ss9t":
/*!***************************************************************************************************************!*\
  !*** ./demo/src/components/demo/dragdrop-cdk sync !./node_modules/raw-loader/dist/cjs.js .*\.(ts|html|less)$ ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dragdrop.example.component.html": "5JPP",
	"./dragdrop.example.component.less": "VjeB",
	"./dragdrop.example.component.ts": "CGMW",
	"./dragdrop.module.ts": "NJXf"
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
webpackContext.id = "ss9t";

/***/ })

}]);
//# sourceMappingURL=demo-dragdrop-cdk-dragdrop-module-es2015.js.map